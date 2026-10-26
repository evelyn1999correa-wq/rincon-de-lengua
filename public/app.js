import { UNITS } from "./contenido.js";
import { PRUEBAS } from "./pruebas.js";
import { prefs, speak, stopSpeech, say, sfx, initA11yBar } from "./accesibilidad.js";

/* ============ Fichas descargables (archivos en /recursos) ============ */
const RESOURCES = [
  { cat: "Planificación", title: "Sílabo de Lengua y Literatura 5.° EGB", file: "recursos/silabo-lengua-5egb.docx", size: "44 KB",
    desc: "Lo que vamos a aprender en el año: las cuatro unidades del libro, sus temas y cómo se evalúa." },
  { cat: "Actividades", title: "Guía de actividades", file: "recursos/guia-actividades-lengua-5egb.docx", size: "40 KB",
    desc: "Modismos del Ecuador, lectura sobre el Yasuní, escribir un párrafo y crear un amorfino." },
  { cat: "Actividades", title: "Cuaderno de actividades por unidad", file: "recursos/cuaderno-actividades-por-unidad-5egb.docx", size: "41 KB",
    desc: "Dos actividades por unidad y el proyecto final «Álbum de Tradición Oral Ecuatoriana»." },
  { cat: "Ortografía", title: "Taller de la tilde", file: "recursos/taller-ortografico-acentuacion-5egb.docx", size: "39 KB",
    desc: "Palabras agudas, graves, esdrújulas y sobreesdrújulas, con ejercicios para practicar." },
];

/* Íconos de cada unidad (dibujos simples en SVG) */
const ICONS = {
  1: '<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M6 8h22a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H16l-7 6v-6H6a4 4 0 0 1-4-4V12a4 4 0 0 1 4-4z" fill="#3aa0ff"/><circle cx="11" cy="17" r="2.2" fill="#fff"/><circle cx="17" cy="17" r="2.2" fill="#fff"/><circle cx="23" cy="17" r="2.2" fill="#fff"/></svg>',
  2: '<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M4 9c6-2 11-1 16 3v22c-5-4-10-5-16-3z" fill="#ffc93c"/><path d="M36 9c-6-2-11-1-16 3v22c5-4 10-5 16-3z" fill="#f59e0b"/><path d="M20 12v22" stroke="#1f2a44" stroke-width="1.6"/></svg>',
  3: '<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M15 8l16-4v20" fill="none" stroke="#2bb673" stroke-width="3.4" stroke-linecap="round"/><path d="M15 8v22" stroke="#2bb673" stroke-width="3.4" stroke-linecap="round"/><ellipse cx="11" cy="30" rx="6" ry="4.6" fill="#2bb673"/><ellipse cx="27" cy="25" rx="6" ry="4.6" fill="#2bb673"/></svg>',
  4: '<svg viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="20" r="15" fill="#ff6b6b"/><path d="M5 20h30M20 5c-6 7-6 23 0 30M20 5c6 7 6 23 0 30" fill="none" stroke="#fff" stroke-width="2.2"/></svg>',
};

/* ============ Datos derivados ============ */
const ALL = [];
for (const u of UNITS) for (const b of u.blocks) for (const t of b.topics) { t.unit = u.n; t.block = b.name; ALL.push(t); }
const byId = Object.fromEntries(ALL.map((t) => [t.id, t]));

const norm = (s) => String(s).normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
const strip = (html) => { const d = document.createElement("div"); d.innerHTML = html; return d.textContent || ""; };
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
for (const t of ALL) t._text = norm([t.t, t.s, t.block, strip(t.body.join(" ")), t.ej.join(" "), t.rec].join(" "));

const store = {
  get(k, d) { try { const v = localStorage.getItem(k); return v == null ? d : JSON.parse(v); } catch { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} },
};

const state = { unit: 1, topic: ALL[0].id, query: "", resCat: "Todo", mode: "topic", test: null };
let done = store.get("rincon-done", {}) || {};
let bests = store.get("rincon-pruebas", {}) || {}; // mejor puntaje por unidad
const starCount = () => Object.keys(done).filter((k) => byId[k]).length;

const $ = (id) => document.getElementById(id);

/* ============ Portada y unidades ============ */
function renderStats() {
  const blocks = new Set(ALL.map((t) => t.block)).size;
  const items = [
    [UNITS.length, "unidades de tu libro"],
    [ALL.length, "temas para aprender"],
    [blocks, "bloques: hablar, leer, escribir…"],
    [RESOURCES.length, "fichas para descargar"],
  ];
  $("stats").innerHTML = items.map(([n, l]) => `<div><dt>${n}</dt><dd>${l}</dd></div>`).join("");
}

function renderUnitCards() {
  $("unitCards").innerHTML = UNITS.map((u) => {
    const count = u.blocks.reduce((a, b) => a + b.topics.length, 0);
    const lit = u.blocks.find((b) => b.name === "Literatura");
    const highlights = [u.blocks[0].topics[0].t, ...(lit ? [lit.topics[0].t] : [])];
    return `<article class="unit-card" data-u="${u.n}">
      <div class="unit-top"><span class="unit-num">Unidad ${u.n}</span><span class="unit-icon">${ICONS[u.n] || ""}</span></div>
      <h3>${esc(u.title)}</h3>
      <span class="meta">Libro: ${u.pages} · ${count} temas</span>
      <ul>${highlights.map((h) => `<li>${esc(h)}</li>`).join("")}</ul>
      ${bestLine(u.n)}
      <div class="unit-actions">
        <button class="btn btn-sm" type="button" data-goto-unit="${u.n}">¡Vamos!</button>
        ${PRUEBAS[u.n] ? `<button class="btn btn-white btn-sm" type="button" data-start-test="${u.n}">Prueba</button>` : ""}
      </div>
    </article>`;
  }).join("");
}

/* ============ Explorador de temas ============ */
function renderFilters() {
  $("unitFilters").innerHTML = UNITS.map((u) =>
    `<button class="filter" role="tab" type="button" data-u="${u.n}" data-filter-unit="${u.n}" aria-selected="${!state.query && u.n === state.unit}">Unidad ${u.n}</button>`
  ).join("");
}

function renderStarBar() {
  const n = starCount(), total = ALL.length;
  const msg = n === 0 ? "¡Resuelve un reto para ganar tu primera estrella!"
    : n === total ? "¡Lo lograste! Tienes todas las estrellas."
    : `¡Vas muy bien! Tienes ${n} de ${total} estrellas.`;
  $("starBar").innerHTML = `<span class="stars" aria-hidden="true">★</span><span>${msg}</span>
    <span class="meter" role="progressbar" aria-label="Estrellas ganadas" aria-valuemin="0" aria-valuemax="${total}" aria-valuenow="${n}"><span style="width:${Math.round((n / total) * 100)}%"></span></span>`;
}

function bestLine(n) {
  const qs = PRUEBAS[n];
  if (!qs || bests[n] == null) return "";
  return `<p class="best">Mejor nota en la prueba: <b>${fmtGrade(gradeOf(bests[n], qs.length))}</b> / 10</p>`;
}

function topicButton(t, showUnit) {
  const current = state.mode === "topic" && t.id === state.topic;
  return `<li><button class="topic-btn" type="button" data-id="${t.id}" data-u="${t.unit}"${current ? ' aria-current="true"' : ""}>
    <span>${showUnit ? `<span class="res-unit">Unidad ${t.unit} · ${esc(t.block)}</span>` : ""}${esc(t.t)}</span>
    ${done[t.id] ? '<span class="done" aria-label="Estrella ganada">★</span>' : ""}</button></li>`;
}

function renderIndex() {
  let html = "";
  if (state.query) {
    const words = norm(state.query).split(/\s+/).filter(Boolean);
    const hits = ALL.filter((t) => words.every((w) => t._text.includes(w)));
    html += `<p class="results-note">${hits.length
      ? `Encontré ${hits.length} ${hits.length === 1 ? "tema" : "temas"} con «${esc(state.query)}»`
      : `No encontré «${esc(state.query)}». Prueba otra palabra o pregúntale a Chasqui.`}</p>`;
    if (hits.length) html += `<ul class="topic-list">${hits.map((t) => topicButton(t, true)).join("")}</ul>`;
  } else {
    const u = UNITS[state.unit - 1];
    html += u.blocks.map((b) => `<section data-u="${u.n}"><h3 class="block-name">${esc(b.name)}</h3>
      <ul class="topic-list">${b.topics.map((t) => topicButton(t, false)).join("")}</ul></section>`).join("");
    if (PRUEBAS[u.n]) {
      const active = state.mode === "test" && state.test && state.test.unit === u.n;
      html += `<div class="test-cta"><button class="btn btn-coral btn-sm" type="button" data-start-test="${u.n}"${active ? ' aria-current="true"' : ""}>Prueba de la Unidad ${u.n}</button>${bestLine(u.n)}</div>`;
    }
  }
  $("index").innerHTML = html;
  $("index").setAttribute("data-u", state.unit);
  renderStarBar();
}

function renderSheet() {
  if (state.mode === "test" && state.test) return renderTest();
  const t = byId[state.topic];
  if (!t) return;
  const sheet = $("sheet");
  sheet.setAttribute("data-u", t.unit);
  $("panel").setAttribute("data-u", t.unit);
  const i = ALL.indexOf(t), prev = ALL[i - 1], next = ALL[i + 1];
  const q = t.q;
  sheet.innerHTML = `
    <div class="sheet-head">
      <div class="crumbs"><span>Unidad ${t.unit}</span><span>${esc(t.block)}</span><span>Libro: ${esc(t.p)}</span></div>
      <h2 tabindex="-1">${esc(t.t)}</h2><p class="sum">${esc(t.s)}</p>
    </div>
    <div class="ruled">
      <div class="hear-row"><button class="hear-btn" type="button" data-speak="topic">${SPEAKER} Escuchar el tema</button><button class="hear-btn ghost" type="button" data-speak="stop">Detener</button></div>
      ${t.body.map((p) => (/^<(ul|div|table)/.test(p) ? p : `<p>${p}</p>`)).join("")}
      <div class="box"><h3>Ejemplos</h3><ul class="ex-list">${t.ej.map((e) => `<li>${e}</li>`).join("")}</ul></div>
      <div class="box remember"><h3>Para recordar</h3><p>${t.rec}</p></div>
      <div class="box quiz" id="quiz"><h3>Reto ${done[t.id] ? "★ superado" : "con estrella"}</h3><p class="q">${esc(q.pre)}</p>
        <div class="opts">${q.ops.map((o, k) => `<button class="opt" type="button" data-k="${k}">${esc(o)}</button>`).join("")}</div>
        <div class="feedback" id="fb" hidden></div></div>
      <div class="ask-row"><span class="lbl">¿Tienes dudas?</span>
        <button class="chip-btn" type="button" data-ask="Explícame este tema de una forma más fácil.">Explícamelo fácil</button>
        <button class="chip-btn" type="button" data-ask="Dame otro ejemplo de este tema.">Otro ejemplo</button>
        <button class="chip-btn" type="button" data-ask="Juguemos: hazme una pregunta para practicar este tema y espera mi respuesta.">¡Juguemos a practicar!</button>
      </div>
    </div>
    <div class="pager">
      ${prev ? `<button type="button" data-id="${prev.id}"><small>← Anterior</small>${esc(prev.t)}</button>` : "<span></span>"}
      ${next ? `<button type="button" data-id="${next.id}"><small>Siguiente →</small>${esc(next.t)}</button>` : "<span></span>"}
    </div>`;
  $("ctx").innerHTML = `Estás viendo: <b>${esc(t.t)}</b> (Unidad ${t.unit})`;
}

function renderExplorer() { renderFilters(); renderIndex(); renderSheet(); }

/* ============ Lectura en voz alta ============ */
const SPEAKER = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9H4z" fill="currentColor"></path><path d="M16 8.5a4.5 4.5 0 0 1 0 7M18.5 6a8 8 0 0 1 0 12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path></svg>';
const LETTERS = "ABC";

function topicSpeech(t) {
  const q = t.q;
  return [
    `${t.t}.`, `${t.s}.`,
    t.body.map(strip).join(" "),
    `Ejemplos: ${t.ej.map(strip).join(". ")}.`,
    `Para recordar: ${strip(t.rec)}`,
    `Reto con estrella: ${q.pre}`,
    q.ops.map((o, k) => `Opción ${LETTERS[k]}: ${o}.`).join(" "),
  ].join(" ");
}

function testQuestionSpeech() {
  const T = state.test, q = T.qs[T.idx];
  const opts = q.tipo === "vf"
    ? "Responde 1 para verdadero o 2 para falso."
    : q.ops.map((o, k) => `Opción ${LETTERS[k]}, tecla ${k + 1}: ${o}.`).join(" ");
  const picked = T.answers[T.idx];
  return `Pregunta ${T.idx + 1} de ${T.qs.length}. ${q.tipo === "vf" ? "Verdadero o falso." : ""} ${q.q} ${opts}` +
    (picked !== null ? ` Ya elegiste: ${q.ops[picked]}.` : "");
}

function resultsSpeech() {
  const T = state.test, total = T.qs.length;
  const score = T.qs.filter((q, i) => T.answers[i] === q.ok).length;
  const wrong = total - score;
  return `Terminaste la prueba. Respondiste bien ${score} de ${total} preguntas. Tu nota es ${fmtGrade(gradeOf(score, total))} sobre 10.` +
    (wrong ? ` Abajo puedes repasar ${wrong === 1 ? "la pregunta que fallaste" : `las ${wrong} preguntas que fallaste`}.` : " ¡Todas correctas!");
}

function focusEl(el) { if (el) { el.focus({ preventScroll: true }); } }

function scrollToExplorer() {
  const target = window.matchMedia("(max-width: 860px)").matches ? $("sheet") : $("temas");
  target.scrollIntoView({ block: "start" });
}

function goTopic(id, scrollToSheet) {
  const t = byId[id];
  if (!t) return;
  state.mode = "topic";
  state.topic = id;
  state.unit = t.unit;
  try { history.replaceState(null, "", `#${id}`); } catch {}
  renderExplorer();
  if (scrollToSheet) {
    scrollToExplorer();
    focusEl($("sheet").querySelector("h2"));
    speak(topicSpeech(t));
  }
}

/* ============ Pruebas de unidad ============ */
const gradeOf = (score, total) => Math.round((score * 100) / total) / 10; // nota sobre 10
const fmtGrade = (g) => g.toLocaleString("es-EC", { minimumFractionDigits: 1, maximumFractionDigits: 1 });

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}

function startTest(n, scroll) {
  const base = PRUEBAS[n];
  if (!base) return;
  // Las opciones se mezclan en cada intento para que la respuesta correcta no esté siempre en el mismo lugar.
  const qs = base.map((q) => {
    const order = q.tipo === "vf" ? q.ops.map((_, i) => i) : shuffle(q.ops.map((_, i) => i));
    return { ...q, ops: order.map((i) => q.ops[i]), ok: order.indexOf(q.ok) };
  });
  state.mode = "test";
  state.unit = n;
  state.query = "";
  $("q").value = "";
  state.test = { unit: n, qs, idx: 0, answers: new Array(qs.length).fill(null), done: false };
  try { history.replaceState(null, "", `#prueba-${n}`); } catch {}
  renderExplorer();
  if (scroll) {
    scrollToExplorer();
    focusEl($("sheet").querySelector(".test-q .q"));
    speak(`Prueba de la Unidad ${n}. Son ${qs.length} preguntas. ` + testQuestionSpeech());
  }
}

function renderTest(focus) {
  const T = state.test, u = UNITS[T.unit - 1], sheet = $("sheet");
  sheet.setAttribute("data-u", T.unit);
  $("panel").setAttribute("data-u", T.unit);
  $("ctx").innerHTML = `Estás haciendo: <b>Prueba de la Unidad ${T.unit}</b>`;
  if (T.done) return renderResults();
  const total = T.qs.length, q = T.qs[T.idx], picked = T.answers[T.idx];
  const answered = T.answers.filter((a) => a !== null).length;
  const last = T.idx === total - 1;
  sheet.innerHTML = `
    <div class="sheet-head">
      <div class="crumbs"><span>Unidad ${T.unit}</span><span>Prueba objetiva</span><span>${total} preguntas</span></div>
      <h2>Prueba de la Unidad ${T.unit}</h2><p class="sum">${esc(u.title)}</p>
    </div>
    <div class="ruled">
      <div class="test-progress">
        <span>Pregunta <b>${T.idx + 1}</b> de ${total}</span>
        <span class="meter" aria-hidden="true"><span style="width:${Math.round((answered / total) * 100)}%"></span></span>
        <span>${answered} respondidas</span>
      </div>
      <div class="box test-q">
        <div class="test-q-top"><p class="test-type">${q.tipo === "vf" ? "¿Verdadero o falso?" : "Elige la respuesta correcta"}</p>
          <button class="hear-btn small" type="button" data-speak="question">${SPEAKER} Escuchar</button></div>
        <h3 class="q" tabindex="-1"><span class="sr-only">Pregunta ${T.idx + 1} de ${total}. </span>${esc(q.q)}</h3>
        <div class="opts${q.tipo === "vf" ? " opts-vf" : ""}">${q.ops.map((o, k) =>
          `<button class="opt test-opt${picked === k ? " picked" : ""}" type="button" data-tk="${k}" aria-pressed="${picked === k}"><span class="letter">${q.tipo === "vf" ? (k === 0 ? "V" : "F") : "ABC"[k]}</span>${esc(o)}</button>`).join("")}</div>
      </div>
      <div class="test-nav">
        <button class="btn btn-white btn-sm" type="button" data-test-go="prev"${T.idx === 0 ? " disabled" : ""}>← Anterior</button>
        ${last
          ? `<button class="btn btn-coral btn-sm" type="button" data-test-go="finish"${answered < total ? " disabled" : ""}>Terminar la prueba</button>`
          : `<button class="btn btn-sun btn-sm" type="button" data-test-go="next">Siguiente →</button>`}
      </div>
      ${last && answered < total ? `<p class="test-hint">Te faltan ${total - answered} ${total - answered === 1 ? "pregunta" : "preguntas"} por responder. Tócalas abajo para volver a ellas.</p>` : ""}
      <nav class="test-dots" aria-label="Ir a una pregunta">${T.qs.map((_, i) =>
        `<button type="button" data-test-go="${i}" class="${T.answers[i] !== null ? "ans" : ""}${i === T.idx ? " here" : ""}" aria-label="Pregunta ${i + 1}${T.answers[i] !== null ? ", respondida" : ""}">${i + 1}</button>`).join("")}</nav>
      <p class="keys-hint">Teclado: 1, 2, 3 para responder · flechas para avanzar o volver · R repite la pregunta.</p>
    </div>`;
  const sheet2 = $("sheet");
  if (focus === "question") focusEl(sheet2.querySelector(".test-q .q"));
  else if (focus === "picked") focusEl(sheet2.querySelector(".test-opt.picked"));
  else if (focus === "finish") focusEl(sheet2.querySelector('[data-test-go="finish"]'));
}

function pickAnswer(k) {
  const T = state.test, q = T.qs[T.idx];
  if (k < 0 || k >= q.ops.length) return;
  T.answers[T.idx] = k;
  sfx("pick");
  const answered = T.answers.filter((a) => a !== null).length;
  const last = T.idx === T.qs.length - 1;
  renderTest(last && answered === T.qs.length ? "finish" : "picked");
  say(`Elegiste ${q.tipo === "vf" ? "" : `la opción ${LETTERS[k]}: `}${q.ops[k]}.` +
    (answered === T.qs.length ? " Ya respondiste todas. Puedes terminar la prueba." : last ? "" : " Pasa a la siguiente con la flecha derecha."));
}

function moveTest(go) {
  const T = state.test;
  if (!T || T.done) return;
  if (go === "finish") {
    if (!T.answers.every((a) => a !== null)) { say("Todavía te faltan preguntas por responder."); return; }
    T.done = true;
    renderTest();
    sfx("finish");
    $("sheet").scrollIntoView({ block: "start" });
    focusEl($("sheet").querySelector("h2"));
    say(resultsSpeech());
    return;
  }
  const before = T.idx;
  if (go === "prev") T.idx = Math.max(0, T.idx - 1);
  else if (go === "next") T.idx = Math.min(T.qs.length - 1, T.idx + 1);
  else T.idx = Number(go);
  if (T.idx === before && (go === "prev" || go === "next")) {
    say(go === "next" ? "Esta es la última pregunta." : "Esta es la primera pregunta.");
    return;
  }
  renderTest("question");
  speak(testQuestionSpeech());
}

function renderResults() {
  const T = state.test, total = T.qs.length;
  const score = T.qs.filter((q, i) => T.answers[i] === q.ok).length;
  const grade = gradeOf(score, total);
  const stars = score >= 13 ? 3 : score >= 10 ? 2 : score >= 7 ? 1 : 0;
  const msg = score === total ? "¡Perfecto! Respondiste todo bien. ¡Eres un campeón de la Lengua!"
    : stars === 3 ? "¡Excelente trabajo! Casi todo está perfecto."
    : stars === 2 ? "¡Muy bien! Repasa los temas de las preguntas que fallaste y lo harás aún mejor."
    : stars === 1 ? "¡Buen esfuerzo! Repasa los temas con calma y vuelve a intentarlo."
    : "No te preocupes: así se aprende. Repasa los temas con tu familia o con Chasqui y vuelve a intentarlo.";
  if (bests[T.unit] == null || score > bests[T.unit]) { bests[T.unit] = score; store.set("rincon-pruebas", bests); renderUnitCards(); renderIndex(); }
  const wrong = T.qs.map((q, i) => ({ q, i, a: T.answers[i] })).filter((x) => x.a !== x.q.ok);
  $("sheet").innerHTML = `
    <div class="sheet-head">
      <div class="crumbs"><span>Unidad ${T.unit}</span><span>Resultados</span></div>
      <h2 tabindex="-1">¡Terminaste la prueba!</h2><p class="sum">${esc(UNITS[T.unit - 1].title)}</p>
    </div>
    <div class="ruled">
      <div class="hear-row"><button class="hear-btn" type="button" data-speak="results">${SPEAKER} Escuchar los resultados</button></div>
      <div class="result">
        <div class="score" aria-label="${score} de ${total} respuestas correctas"><b>${score}</b><span>de ${total}</span></div>
        <div class="result-text">
          <p class="grade">Nota: <b>${fmtGrade(grade)}</b> sobre 10</p>
          <p class="result-stars" aria-label="${stars} de 3 estrellas">${"★".repeat(stars)}<span>${"★".repeat(3 - stars)}</span></p>
          <p>${msg}</p>
        </div>
      </div>
      <div class="test-nav">
        <button class="btn btn-sun btn-sm" type="button" data-start-test="${T.unit}">Repetir la prueba</button>
        <button class="btn btn-white btn-sm" type="button" data-goto-unit="${T.unit}">Volver a los temas</button>
      </div>
      ${wrong.length ? `<div class="box"><h3>Repasa estas preguntas</h3><ol class="review">${wrong.map(({ q, i, a }) => `
        <li><p class="rq"><b>Pregunta ${i + 1}.</b> ${esc(q.q)}</p>
          <p class="ra no">Tu respuesta: ${esc(q.ops[a])}</p>
          <p class="ra ok">Respuesta correcta: ${esc(q.ops[q.ok])}</p>
          <p class="rw">${esc(q.why)}</p>
          ${byId[q.tema] ? `<button class="chip-btn review-btn" type="button" data-review="${q.tema}">Repasar «${esc(byId[q.tema].t)}»</button>` : ""}
        </li>`).join("")}</ol></div>` : ""}
    </div>`;
}

function answer(k) {
  const t = byId[state.topic], q = t.q, fb = $("fb");
  document.querySelectorAll("#quiz .opt").forEach((o, i) => {
    o.disabled = true;
    if (i === q.ok) o.classList.add("right"); else if (i === k) o.classList.add("wrong");
  });
  const right = k === q.ok;
  const firstStar = right && !done[t.id];
  document.querySelectorAll("#quiz .opt").forEach((o, i) => {
    if (i === q.ok) o.setAttribute("aria-label", `${q.ops[i]}: respuesta correcta`);
    else if (i === k) o.setAttribute("aria-label", `${q.ops[i]}: tu respuesta, no es correcta`);
  });
  sfx(firstStar ? "star" : right ? "right" : "wrong");
  say(right
    ? `${firstStar ? "¡Ganaste una estrella!" : "¡Correcto!"} ${q.why}`
    : `¡Casi! La respuesta correcta es: ${q.ops[q.ok]}. ${q.why}`);
  fb.hidden = false;
  fb.className = "feedback" + (right ? "" : " no");
  fb.innerHTML = right
    ? `${firstStar ? '<span class="win-star" aria-hidden="true">★</span><b>¡Ganaste una estrella!</b> ' : "<b>¡Correcto!</b> "}${esc(q.why)}`
    : `<b>¡Casi!</b> ${esc(q.why)}<br><button class="retry" type="button">Intentar otra vez</button>`;
  if (firstStar) { done[t.id] = 1; store.set("rincon-done", done); renderIndex(); }
  focusEl(fb.querySelector(".retry"));
}

/* ============ Fichas ============ */
function renderResources() {
  const cats = ["Todo", ...new Set(RESOURCES.map((r) => r.cat))];
  $("resFilters").innerHTML = cats.map((c) =>
    `<button class="filter" role="tab" type="button" data-res-cat="${esc(c)}" aria-selected="${c === state.resCat}">${esc(c)}</button>`).join("");
  const list = RESOURCES.filter((r) => state.resCat === "Todo" || r.cat === state.resCat);
  $("resGrid").innerHTML = list.map((r) => `<article class="res-card">
      <span class="doc" aria-hidden="true">W</span>
      <span class="tag">${esc(r.cat)}</span>
      <h3>${esc(r.title)}</h3>
      <p>${esc(r.desc)}</p>
      <span class="meta">Documento de Word · ${esc(r.size)}</span>
      <a class="btn btn-sun btn-sm" href="${r.file}" download>Descargar</a>
    </article>`).join("");
}

/* ============ Eventos generales ============ */
document.addEventListener("click", (e) => {
  const el = e.target.closest("button, a");
  if (!el) return;
  if (el.matches("[data-open-chat]")) { openChat(); closeMenu(); return; }
  if (el.dataset.startTest) { startTest(Number(el.dataset.startTest), true); return; }
  if (el.classList.contains("test-opt")) { pickAnswer(Number(el.dataset.tk)); return; }
  if (el.dataset.testGo) { moveTest(el.dataset.testGo); return; }
  if (el.dataset.speak) {
    const what = el.dataset.speak;
    if (what === "stop") stopSpeech();
    else if (what === "topic") speak(topicSpeech(byId[state.topic]), true);
    else if (what === "question") speak(testQuestionSpeech(), true);
    else if (what === "results") speak(resultsSpeech(), true);
    return;
  }
  if (el.dataset.hear != null) { speak(el.closest(".msg").dataset.text || "", true); return; }
  if (el.dataset.review) { goTopic(el.dataset.review, true); return; }
  if (el.dataset.gotoUnit) { state.query = ""; $("q").value = ""; goTopic(UNITS[Number(el.dataset.gotoUnit) - 1].blocks[0].topics[0].id, true); return; }
  if (el.dataset.filterUnit) { state.query = ""; $("q").value = ""; goTopic(UNITS[Number(el.dataset.filterUnit) - 1].blocks[0].topics[0].id, false); return; }
  if (el.dataset.id && (el.classList.contains("topic-btn") || el.closest(".pager"))) { goTopic(el.dataset.id, true); return; }
  if (el.classList.contains("opt")) { answer(Number(el.dataset.k)); return; }
  if (el.classList.contains("retry")) { renderSheet(); return; }
  if (el.dataset.resCat) { state.resCat = el.dataset.resCat; renderResources(); return; }
  if (el.dataset.ask) { openChat(); sendMessage(el.dataset.ask); return; }
  if (el.closest("#mainNav") && el.tagName === "A") closeMenu();
});
$("q").addEventListener("input", (e) => { state.query = e.target.value.trim(); renderFilters(); renderIndex(); });

const menuBtn = $("menuBtn"), nav = $("mainNav");
function closeMenu() { nav.classList.remove("open"); menuBtn.setAttribute("aria-expanded", "false"); }
menuBtn.addEventListener("click", () => {
  const open = !nav.classList.contains("open");
  nav.classList.toggle("open", open);
  menuBtn.setAttribute("aria-expanded", String(open));
});

/* ============ Chasqui ============ */
const $panel = $("panel"), $msgs = $("msgs"), $msg = $("msg"), $send = $("send"), $sugs = $("sugs"), $codeForm = $("codeForm");
let turns = [];
let busy = false;
let ctl = null;
let classCode = store.get("rincon-codigo", "") || "";
let pendingText = null;

const ERRORS = {
  401: "Ese código no es el correcto. Pídele a un adulto que escriba abajo el código que dio tu profe.",
  429: "¡Uf! Chasqui recibió muchas preguntas seguidas. Espera unos minutos y vuelve a intentarlo.",
  too_long: "Tu pregunta es muy larga. Escríbela con menos palabras.",
  config: "Chasqui está descansando en este momento. Avísale a tu profe.",
};

function openChat() {
  $panel.hidden = false;
  $("launcher").hidden = true;
  if (!$msgs.children.length) {
    addBot("¡Hola! Soy <b>Chasqui</b>. Pregúntame lo que no entiendas de Lengua. También puedo darte ejemplos, jugar a practicar o revisar lo que escribas. ¿Estás con un adulto de tu familia?");
  }
  $sugs.innerHTML = ["No entiendo este tema", "Dame un ejemplo", "Revisa mi oración"]
    .map((s) => `<button class="chip-btn" type="button" data-ask="${esc(s)}">${esc(s)}</button>`).join("");
  $msg.focus();
}
function closeChat() { $panel.hidden = true; $("launcher").hidden = false; }
$("closeChat").addEventListener("click", closeChat);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") { stopSpeech(); if (!$panel.hidden) closeChat(); return; }
  // Atajos de las pruebas (no se activan mientras se escribe ni dentro del chat).
  const T = state.test;
  if (state.mode !== "test" || !T || T.done || e.ctrlKey || e.altKey || e.metaKey) return;
  const target = e.target instanceof Element ? e.target : null;
  if (target && target.closest("input, textarea, #panel")) return;
  const key = e.key.toLowerCase();
  const q = T.qs[T.idx];
  const map = q.tipo === "vf" ? { "1": 0, "2": 1, v: 0, f: 1 } : { "1": 0, "2": 1, "3": 2, a: 0, b: 1, c: 2 };
  if (key in map) { e.preventDefault(); pickAnswer(map[key]); }
  else if (q.tipo === "vf" && (key === "3" || key === "a" || key === "b" || key === "c")) {
    e.preventDefault();
    say("Esta pregunta es de verdadero o falso. Pulsa 1 para verdadero o 2 para falso.");
  }
  else if (key === "arrowright" || key === "n") {
    e.preventDefault();
    moveTest(T.idx === T.qs.length - 1 ? "finish" : "next");
  }
  else if (key === "arrowleft" || key === "p") { e.preventDefault(); moveTest("prev"); }
  else if (key === "r") { e.preventDefault(); speak(testQuestionSpeech(), true); }
});

const scrollMsgs = () => { $msgs.scrollTop = $msgs.scrollHeight; };
function addBot(html) { const d = document.createElement("div"); d.className = "msg bot"; d.innerHTML = html; $msgs.appendChild(d); scrollMsgs(); return d; }
function addMe(text) { const d = document.createElement("div"); d.className = "msg me"; d.textContent = text; $msgs.appendChild(d); scrollMsgs(); }
function addNote(text) { const d = document.createElement("div"); d.className = "msg note"; d.textContent = text; $msgs.appendChild(d); scrollMsgs(); }

// Formato mínimo: **negritas**, *cursivas* y listas con guiones o números.
function md(text) {
  const out = [];
  let list = [];
  const flush = () => { if (list.length) { out.push(`<ul>${list.map((l) => `<li>${l}</li>`).join("")}</ul>`); list = []; } };
  for (let l of esc(text).split("\n")) {
    l = l.replace(/\*\*(.+?)\*\*/g, "<b>$1</b>").replace(/(^|[^*])\*([^*\s][^*]*?)\*/g, "$1<i>$2</i>");
    const m = l.match(/^\s*(?:[-•*]|\d+[.)])\s+(.*)$/);
    if (m) list.push(m[1]);
    else if (l.trim()) { flush(); out.push(`<p>${l.replace(/^#+\s*/, "")}</p>`); }
    else flush();
  }
  flush();
  return out.join("");
}

function setBusy(on) {
  busy = on;
  $send.textContent = on ? "Detener" : "Enviar";
}

async function sendMessage(text) {
  text = String(text || "").trim();
  if (!text || busy) return;
  addMe(text);
  $msg.value = "";
  autoGrow();
  turns.push({ role: "user", content: text });
  if (turns.length > 16) turns = turns.slice(-16);
  while (turns.length && turns[0].role !== "user") turns.shift();
  await ask(text);
}

async function ask(text) {
  const bubble = addBot('<span class="thinking">Chasqui está pensando…</span>');
  setBusy(true);
  ctl = new AbortController();
  try {
    const r = await fetch("/api/chasqui", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: turns, topicId: state.mode === "test" && state.test ? `prueba-${state.test.unit}` : state.topic, code: classCode }),
      signal: ctl.signal,
    });
    let data = {};
    try { data = await r.json(); } catch {}
    if (r.ok && data.text) {
      bubble.innerHTML = md(data.text) + `<button class="hear-btn small" type="button" data-hear>${SPEAKER} Escuchar</button>`;
      bubble.dataset.text = data.text;
      speak(data.text);
      turns.push({ role: "assistant", content: data.text });
      if (data.truncated) addNote("La respuesta quedó a medias. Pídele a Chasqui que continúe.");
    } else if (r.ok && data.refused) {
      bubble.remove();
      turns.pop();
      addNote("Chasqui no puede responder eso. Prueba con otra pregunta sobre la clase.");
    } else {
      bubble.remove();
      turns.pop();
      if (r.status === 401) { pendingText = text; $codeForm.hidden = false; $("code").focus(); }
      addNote(ERRORS[r.status] || ERRORS[data.error] || "Hubo un problema de conexión. Vuelve a enviar tu pregunta.");
    }
  } catch (e) {
    bubble.remove();
    turns.pop();
    if (e.name !== "AbortError") addNote("No me pude conectar. Revisa que haya Internet y vuelve a intentarlo.");
  } finally {
    setBusy(false);
    ctl = null;
    scrollMsgs();
  }
}

$codeForm.addEventListener("submit", (e) => {
  e.preventDefault();
  classCode = $("code").value.trim();
  if (!classCode) return;
  store.set("rincon-codigo", classCode);
  $codeForm.hidden = true;
  if (pendingText) { const t = pendingText; pendingText = null; sendMessage(t); }
});

$("composer").addEventListener("submit", (e) => {
  e.preventDefault();
  if (busy && ctl) { ctl.abort(); return; }
  sendMessage($msg.value);
});
$msg.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); if (!busy) sendMessage($msg.value); }
});
function autoGrow() { $msg.style.height = "auto"; $msg.style.height = Math.min($msg.scrollHeight, 140) + "px"; }
$msg.addEventListener("input", autoGrow);

/* ============ Inicio ============ */
const hash = (location.hash || "").slice(1);
const testHash = /^prueba-(\d)$/.exec(hash);
if (byId[hash]) { state.topic = hash; state.unit = byId[hash].unit; }
initA11yBar();
renderStats();
renderUnitCards();
renderResources();
if (testHash && PRUEBAS[testHash[1]]) startTest(Number(testHash[1]), false);
else renderExplorer();
if (byId[hash] || testHash) $("temas").scrollIntoView();
