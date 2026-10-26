// Servidor para probar el sitio en esta computadora: npm run dev → http://localhost:3000
// Sirve la carpeta public/ y la función api/chasqui.js, como lo hace Vercel.
// Para que Chasqui responda, defina ANTHROPIC_API_KEY antes de iniciar (ver LEEME.md).
import http from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const here = fileURLToPath(new URL(".", import.meta.url));
const PUBLIC = join(here, "public");
const PORT = Number(process.env.PORT) || 3000;
const TYPES = {
  ".html": "text/html; charset=utf-8", ".css": "text/css; charset=utf-8", ".js": "text/javascript; charset=utf-8",
  ".json": "application/json", ".svg": "image/svg+xml", ".png": "image/png", ".jpg": "image/jpeg",
  ".docx": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
};

const { default: chasqui } = await import(new URL("./api/chasqui.js", import.meta.url));

function adapt(res) {
  res.status = (code) => { res.statusCode = code; return res; };
  res.json = (body) => {
    if (!res.headersSent) res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.end(JSON.stringify(body));
    return res;
  };
  return res;
}

http.createServer(async (req, res) => {
  const url = new URL(req.url, "http://localhost");
  try {
    if (url.pathname === "/api/chasqui") {
      let raw = "";
      for await (const chunk of req) { raw += chunk; if (raw.length > 200_000) break; }
      try { req.body = raw ? JSON.parse(raw) : null; } catch { req.body = raw; }
      return await chasqui(req, adapt(res));
    }
    let path = decodeURIComponent(url.pathname);
    if (path.endsWith("/")) path += "index.html";
    const file = normalize(join(PUBLIC, path));
    if (!file.startsWith(PUBLIC)) { res.statusCode = 403; return res.end(); }
    const info = await stat(file).catch(() => null);
    if (!info || !info.isFile()) { res.statusCode = 404; return res.end("No encontrado"); }
    res.setHeader("Content-Type", TYPES[extname(file)] || "application/octet-stream");
    res.end(await readFile(file));
  } catch (err) {
    console.error(err);
    if (!res.headersSent) res.statusCode = 500;
    res.end();
  }
}).listen(PORT, "127.0.0.1", () => {
  console.log(`Rincón de Lengua: http://localhost:${PORT}`);
  if (!process.env.ANTHROPIC_API_KEY) console.log("Aviso: falta ANTHROPIC_API_KEY; el sitio funciona, pero Chasqui no responderá.");
});
