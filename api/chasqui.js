// Función de Vercel: recibe la conversación de la página y responde como Chasqui.
// Variables de entorno (Vercel → Settings → Environment Variables):
//   ANTHROPIC_API_KEY  (obligatoria) clave de la API de Anthropic
//   CODIGO_CLASE       (recomendada) código que los estudiantes escriben para usar a Chasqui
//   CHASQUI_MODEL      (opcional) modelo; por defecto claude-opus-5-5
import Anthropic from "@anthropic-ai/sdk";
import { UNITS } from "../public/contenido.js";

const client = new Anthropic(); // lee ANTHROPIC_API_KEY del entorno
const MODEL = process.env.CHASQUI_MODEL || "claude-opus-5-5";
const CLASS_CODE = (process.env.CODIGO_CLASE || "").trim();
// La reserva automática ante rechazos ("fallbacks") existe para Opus, Sonnet y Fable, no para Haiku.
const USE_FALLBACKS = /^claude-(opus|sonnet|fable)/.test(MODEL);

const MAX_TURNS = 16;
const MAX_USER_CHARS = 1500;
const MAX_TURN_CHARS = 6000;
const RATE_LIMIT = 20; // mensajes por persona…
const RATE_WINDOW_MS = 10 * 60 * 1000; // …cada 10 minutos

const strip = (s) =>
  String(s)
    .replace(/<\/(li|tr|p|div)>/g, "\n")
    .replace(/<\/t[dh]>/g, " | ")
    .replace(/<[^>]+>/g, "")
    .replace(/[ \t]+/g, " ")
    .replace(/\n\s*\n+/g, "\n")
    .trim();

const TOPICS = {};
const sections = [];
for (const u of UNITS) {
  sections.push(`\n## Unidad ${u.n} (${u.pages}): ${u.title}`);
  for (const b of u.blocks) {
    for (const t of b.topics) {
      TOPICS[t.id] = { title: t.t, unit: u.n };
      sections.push(
        `### ${t.t} — bloque ${b.name}, texto ${t.p}\n${strip(t.body.join("\n"))}\nEjemplos: ${t.ej.map(strip).join(" | ")}\nRecuerda: ${strip(t.rec)}`
      );
    }
  }
}

// Instrucciones estables (se guardan en caché entre llamadas para abaratar el costo).
const SYSTEM = `Eres Chasqui, un pajarito mensajero de los Andes y el ayudante de Lengua y Literatura de una clase de 5.° grado de Educación General Básica en Ecuador. La docente es la Mgtr. Evelyn Correa y la clase usa el Texto del Estudiante «Lengua y Literatura 5.° EGB» del Ministerio de Educación.

Quiénes te escriben: casi siempre niñas y niños de 9 a 10 años, que usan el sitio junto a su mamá, su papá o un adulto de su familia. A veces escribe el adulto.

Cómo respondes al niño o niña:
- En español sencillo y correcto, con frases muy cortas y palabras que entienda un niño de 9 años. Trátalo de tú, con un tono alegre, cariñoso y paciente.
- Respuestas breves: entre 2 y 5 oraciones, o una lista de pocos puntos. No uses títulos ni tablas.
- Haz que aprender sea divertido: usa ejemplos de su vida (la escuela, los amigos, las mascotas, los juegos, la comida típica, los animales y lugares del Ecuador) y, cuando ayude, propón un mini juego o reto.
- Celebra el esfuerzo con frases variadas y sinceras, sin exagerar.
- Basa tus explicaciones en el contenido del libro que aparece abajo. Si algo no está ahí, explícalo de forma correcta y simple.
- Si te piden hacer una tarea completa, no la hagas: da una pista, un ejemplo parecido y anímalo a intentarlo. Ofrece revisar lo que escriba.
- Cuando el niño escriba una respuesta u oración, corrígela con cariño: di primero lo que está bien y luego qué mejorar.
- Si propones una pregunta de práctica, espera su respuesta antes de dar la solución.
- Si el tema en pantalla es una prueba de unidad, no digas cuál es la respuesta de ninguna pregunta, aunque te la pidan: recuérdale con cariño la idea del tema, dale ánimo y dile que al terminar verá sus resultados y podrá repasar.
- Si la pregunta no es de Lengua y Literatura, responde en una oración y vuelve con alegría al tema de la clase.

Si quien escribe parece ser el adulto (por ejemplo, habla de «mi hijo» o «mi hija», o pregunta cómo ayudar): trátalo de usted, con respeto, y dale ideas prácticas y breves para acompañar el aprendizaje en casa.

Cuidado y seguridad (los usuarios son menores de edad):
- Nunca pidas ni guardes datos personales (nombre completo, dirección, escuela, teléfono, fotos). Si el niño los escribe, dile con amabilidad que no hace falta compartirlos.
- Mantén todo el contenido apropiado para niños: nada de violencia, miedo, romance ni temas de adultos. Si el niño pregunta algo así, dile con calma que eso es mejor conversarlo con su familia y vuelve a la clase.
- Si el niño cuenta que está triste, que tiene miedo o que alguien le hace daño, responde con cariño y dile que lo cuente ahora mismo a su mamá, su papá, su profe u otro adulto de confianza.
- No incluyas enlaces a otras páginas.
- Puedes usar **negritas** para palabras clave y listas con guiones.
- Cada mensaje empieza con [Tema en pantalla: …]: es el tema que está viendo en la página. Úsalo como contexto, pero responde a lo que pregunta.

# Contenido del libro
${sections.join("\n\n")}`;

const hits = new Map();
function rateLimited(key) {
  const now = Date.now();
  const recent = (hits.get(key) || []).filter((t) => now - t < RATE_WINDOW_MS);
  recent.push(now);
  hits.set(key, recent);
  return recent.length > RATE_LIMIT;
}

function cleanMessages(raw) {
  if (!Array.isArray(raw) || raw.length === 0) return null;
  const msgs = raw.slice(-MAX_TURNS).map((m) => ({
    role: m && m.role === "assistant" ? "assistant" : "user",
    content: String((m && m.content) || "").trim().slice(0, MAX_TURN_CHARS),
  })).filter((m) => m.content);
  while (msgs.length && msgs[0].role !== "user") msgs.shift();
  if (!msgs.length || msgs[msgs.length - 1].role !== "user") return null;
  if (msgs[msgs.length - 1].content.length > MAX_USER_CHARS) return "too_long";
  return msgs;
}

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "method" });
  }

  if (!process.env.ANTHROPIC_API_KEY && !process.env.ANTHROPIC_AUTH_TOKEN) {
    console.error("Chasqui: falta la variable ANTHROPIC_API_KEY");
    return res.status(500).json({ error: "config" });
  }

  let body = req.body;
  if (typeof body === "string") {
    try { body = JSON.parse(body); } catch { body = null; }
  }
  if (!body || typeof body !== "object") return res.status(400).json({ error: "bad_request" });

  if (CLASS_CODE && String(body.code || "").trim().toLowerCase() !== CLASS_CODE.toLowerCase()) {
    return res.status(401).json({ error: "code" });
  }

  const ip = String(req.headers["x-forwarded-for"] || "").split(",")[0].trim() || "anon";
  if (rateLimited(ip)) return res.status(429).json({ error: "rate_limited" });

  const messages = cleanMessages(body.messages);
  if (messages === "too_long") return res.status(400).json({ error: "too_long" });
  if (!messages) return res.status(400).json({ error: "bad_request" });

  const topicId = String(body.topicId || "");
  const testMatch = /^prueba-([1-4])$/.exec(topicId);
  const topic = TOPICS[topicId];
  const screen = testMatch
    ? `Prueba de la Unidad ${testMatch[1]} (el estudiante está respondiendo una prueba)`
    : topic ? `${topic.title} (Unidad ${topic.unit})` : "ninguno";
  const last = messages[messages.length - 1];
  last.content = `[Tema en pantalla: ${screen}]\n${last.content}`;

  const params = {
    model: MODEL,
    max_tokens: 4000,
    output_config: { effort: "low" },
    system: [{ type: "text", text: SYSTEM, cache_control: { type: "ephemeral" } }],
    messages,
  };

  try {
    const response = USE_FALLBACKS
      ? await client.beta.messages.create({
          ...params,
          betas: ["server-side-fallback-2026-07-01"],
          fallbacks: "default",
        })
      : await client.messages.create(params);

    if (response.stop_reason === "refusal") return res.status(200).json({ refused: true });

    const text = response.content
      .filter((b) => b.type === "text")
      .map((b) => b.text)
      .join("\n")
      .trim();
    if (!text) return res.status(502).json({ error: "empty" });
    return res.status(200).json({ text, truncated: response.stop_reason === "max_tokens" });
  } catch (error) {
    if (error instanceof Anthropic.RateLimitError) return res.status(429).json({ error: "rate_limited" });
    if (error instanceof Anthropic.AuthenticationError || error instanceof Anthropic.PermissionDeniedError) {
      console.error("Chasqui: revisa ANTHROPIC_API_KEY", error.status);
      return res.status(500).json({ error: "config" });
    }
    if (error instanceof Anthropic.BadRequestError) {
      console.error("Chasqui: solicitud rechazada", error.message);
      return res.status(400).json({ error: "bad_request" });
    }
    if (error instanceof Anthropic.APIError) {
      console.error("Chasqui: error de la API", error.status);
      return res.status(502).json({ error: "upstream" });
    }
    console.error("Chasqui: error inesperado", error);
    return res.status(500).json({ error: "server" });
  }
}
