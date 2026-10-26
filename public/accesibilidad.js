// Accesibilidad para niñas y niños con discapacidad visual:
// - "Modo escucha": lee en voz alta con la voz en español del dispositivo (Web Speech API).
// - Efectos de sonido al acertar, fallar o ganar estrellas (Web Audio API, sin archivos).
// - Avisos para lectores de pantalla (región aria-live).

const store = {
  get(k, d) { try { const v = localStorage.getItem(k); return v == null ? d : JSON.parse(v); } catch { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} },
};

export const prefs = {
  listen: store.get("rincon-escucha", false),
  sounds: store.get("rincon-sonidos", true),
};

/* ---------- Voz ---------- */
const synth = "speechSynthesis" in window ? window.speechSynthesis : null;
export const canSpeak = !!synth;
let voice = null;
const PREFERRED = ["es-ec", "es-419", "es-us", "es-mx", "es-co", "es-pe", "es-cl", "es-ar", "es-es"];

function pickVoice() {
  if (!synth) return null;
  const voices = synth.getVoices();
  const norm = (l) => String(l || "").replace("_", "-").toLowerCase();
  for (const p of PREFERRED) {
    const v = voices.find((x) => norm(x.lang) === p);
    if (v) return v;
  }
  return voices.find((x) => norm(x.lang).startsWith("es")) || null;
}
if (synth) {
  voice = pickVoice();
  synth.addEventListener?.("voiceschanged", () => { voice = pickVoice(); });
}

// Ajusta el texto para que suene natural al leerlo en voz alta.
export function forSpeech(text) {
  return String(text)
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/\bpp\.\s*/g, "páginas ")
    .replace(/\bp\.\s*(?=\d)/g, "página ")
    .replace(/5\.°\s*EGB/g, "quinto de básica")
    .replace(/(\d)\.°/g, "$1")
    .replace(/[«»"]/g, "")
    .replace(/\s*[→·|]\s*/g, ", ")
    .replace(/\s*–\s*/g, " y ")
    .replace(/★/g, " estrella ")
    .replace(/\s+/g, " ")
    .trim();
}

// Los navegadores cortan las frases muy largas: se leen por partes.
function chunks(text) {
  const parts = text.split(/(?<=[.!?:;])\s+/);
  const out = [];
  let cur = "";
  for (const p of parts) {
    if ((cur + " " + p).length > 220 && cur) { out.push(cur); cur = p; }
    else cur = cur ? `${cur} ${p}` : p;
  }
  if (cur) out.push(cur);
  return out;
}

export function speak(text, force = false) {
  if (!synth || (!prefs.listen && !force)) return;
  synth.cancel();
  const clean = forSpeech(text);
  if (!clean) return;
  for (const c of chunks(clean)) {
    const u = new SpeechSynthesisUtterance(c);
    u.lang = voice ? voice.lang : "es-EC";
    if (voice) u.voice = voice;
    u.rate = 0.95;
    u.pitch = 1.05;
    synth.speak(u);
  }
}

export function stopSpeech() { if (synth) synth.cancel(); }

/* ---------- Avisos para lectores de pantalla ---------- */
let announcer = null;
export function announce(msg) {
  announcer = announcer || document.getElementById("announcer");
  if (!announcer) return;
  announcer.textContent = "";
  setTimeout(() => { announcer.textContent = msg; }, 60);
}

// Avisa al lector de pantalla y, si el modo escucha está activo, lo dice en voz alta.
export function say(msg) {
  announce(forSpeech(msg));
  speak(msg);
}

/* ---------- Efectos de sonido ---------- */
let actx = null;
const SFX = {
  right: [[523, 0, 0.14], [659, 0.11, 0.14], [784, 0.22, 0.3]],
  wrong: [[349, 0, 0.18, "triangle"], [262, 0.16, 0.32, "triangle"]],
  star: [[784, 0, 0.1], [988, 0.08, 0.1], [1175, 0.16, 0.1], [1568, 0.24, 0.4]],
  pick: [[660, 0, 0.07, "sine", 0.08]],
  finish: [[523, 0, 0.12], [659, 0.1, 0.12], [784, 0.2, 0.12], [1047, 0.3, 0.45]],
  on: [[523, 0, 0.1, "sine", 0.1], [784, 0.09, 0.16, "sine", 0.1]],
};

export function sfx(name) {
  if (!prefs.sounds || !SFX[name]) return;
  try {
    actx = actx || new (window.AudioContext || window.webkitAudioContext)();
    if (actx.state === "suspended") actx.resume();
    const t0 = actx.currentTime + 0.02;
    for (const [freq, start, dur, type = "sine", vol = 0.16] of SFX[name]) {
      const o = actx.createOscillator();
      const g = actx.createGain();
      o.type = type;
      o.frequency.value = freq;
      g.gain.setValueAtTime(0.0001, t0 + start);
      g.gain.exponentialRampToValueAtTime(vol, t0 + start + 0.02);
      g.gain.exponentialRampToValueAtTime(0.0001, t0 + start + dur);
      o.connect(g).connect(actx.destination);
      o.start(t0 + start);
      o.stop(t0 + start + dur + 0.05);
    }
  } catch {}
}

/* ---------- Botones de la barra de accesibilidad ---------- */
export function initA11yBar() {
  const btnListen = document.getElementById("btnListen");
  const btnSounds = document.getElementById("btnSounds");
  const paint = () => {
    btnListen.setAttribute("aria-pressed", String(prefs.listen));
    btnListen.querySelector(".state").textContent = prefs.listen ? "activado" : "apagado";
    btnSounds.setAttribute("aria-pressed", String(prefs.sounds));
    btnSounds.querySelector(".state").textContent = prefs.sounds ? "activados" : "apagados";
  };
  if (!canSpeak) {
    btnListen.disabled = true;
    btnListen.title = "Este navegador no puede leer en voz alta";
  }
  btnListen.addEventListener("click", () => {
    prefs.listen = !prefs.listen;
    store.set("rincon-escucha", prefs.listen);
    paint();
    if (prefs.listen) {
      sfx("on");
      speak("Modo escucha activado. Voy a leer en voz alta los temas, las preguntas y las respuestas de Chasqui. En las pruebas, usa las teclas 1, 2 y 3 para responder, la flecha derecha para seguir y la letra R para repetir. Escape detiene la voz.", true);
    } else {
      stopSpeech();
      announce("Modo escucha apagado.");
    }
  });
  btnSounds.addEventListener("click", () => {
    prefs.sounds = !prefs.sounds;
    store.set("rincon-sonidos", prefs.sounds);
    paint();
    if (prefs.sounds) sfx("on");
    announce(prefs.sounds ? "Sonidos activados." : "Sonidos apagados.");
  });
  paint();
}
