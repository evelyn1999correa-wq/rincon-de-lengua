// Función de Netlify para Chasqui. Reutiliza la misma lógica de api/chasqui.js
// (la versión de Vercel), adaptando la petición y la respuesta al formato de Netlify.
// Variables de entorno (Netlify → Site configuration → Environment variables):
//   ANTHROPIC_API_KEY, CODIGO_CLASE, CHASQUI_MODEL  (ver LEEME.md)
import handler from "../../api/chasqui.js";

export const config = { path: "/api/chasqui" };

export default async (request, context) => {
  const raw = await request.text().catch(() => "");
  let body = null;
  try { body = raw ? JSON.parse(raw) : null; } catch { body = raw; }

  const req = {
    method: request.method,
    body,
    headers: { "x-forwarded-for": (context && context.ip) || request.headers.get("x-forwarded-for") || "" },
  };

  return new Promise((resolve) => {
    const headers = new Headers();
    let status = 200;
    const res = {
      setHeader: (k, v) => headers.set(k, v),
      status(code) { status = code; return res; },
      json(data) {
        headers.set("Content-Type", "application/json; charset=utf-8");
        resolve(new Response(JSON.stringify(data), { status, headers }));
        return res;
      },
    };
    Promise.resolve(handler(req, res)).catch((err) => {
      console.error("Chasqui: error inesperado", err);
      resolve(new Response(JSON.stringify({ error: "server" }), { status: 500, headers }));
    });
  });
};
