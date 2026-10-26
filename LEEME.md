# Rincón de Lengua — cómo publicar el sitio

## Publicar en Netlify (recomendado si usa Netlify)

Este sitio ya está preparado para Netlify (`netlify.toml` y `netlify/functions/chasqui.mjs`).

> Importante: **no use «Netlify Drop» (arrastrar la carpeta)**. Esa opción solo publica la página; Chasqui no funcionaría. Use GitHub como se indica abajo.

1. Cree la clave de Anthropic (ver **Paso 1** más abajo).
2. Cree una cuenta en **https://github.com**, pulse **New repository**, nómbrelo `rincon-de-lengua` y créelo. Pulse **uploading an existing file**, arrastre **todo el contenido** de esta carpeta (incluida la carpeta `netlify`) y pulse **Commit changes**.
3. Cree una cuenta gratuita en **https://netlify.com** (entre con GitHub). Pulse **Add new site → Import an existing project → GitHub** y elija `rincon-de-lengua`.
4. En la configuración deje todo como aparece (Netlify lee `netlify.toml`). Antes de publicar, abra **Environment variables → Add variable** y agregue `ANTHROPIC_API_KEY` (y, si desea, `CODIGO_CLASE` y `CHASQUI_MODEL`, ver tabla del **Paso 3**).
5. Pulse **Deploy**. En uno o dos minutos tendrá la dirección (por ejemplo, `rincon-de-lengua.netlify.app`). Puede cambiar el nombre en **Site configuration → Change site name**.

Si cambia una variable después: **Site configuration → Environment variables**, guárdela y luego **Deploys → Trigger deploy → Deploy site**.

Si Chasqui tarda demasiado o da error de conexión, ponga `CHASQUI_MODEL` = `claude-haiku-5-5` (responde más rápido y cuesta menos) y vuelva a publicar.

---

## Publicar en Vercel (alternativa)

Sitio de estudio de Lengua y Literatura 5.° EGB con los temas del libro, prácticas, recursos descargables y **Chasqui**, un ayudante con inteligencia artificial (Claude, de Anthropic).

## Qué hay en esta carpeta

| Archivo | Para qué sirve |
|---|---|
| `public/index.html`, `public/styles.css`, `public/app.js` | La página web |
| `public/contenido.js` | Los 37 temas (explicaciones, ejemplos y prácticas). Para corregir o agregar un tema, se edita aquí |
| `public/recursos/` | Los documentos de Word que se descargan |
| `api/chasqui.js` | El servidor de Chasqui: guarda la clave de forma segura y habla con Claude |
| `package.json`, `vercel.json` | Configuración para Vercel |
| `netlify.toml`, `netlify/functions/chasqui.mjs` | Configuración para Netlify |

## Paso 1. Crear la clave de la API de Anthropic

1. Entre a **https://console.anthropic.com** y cree una cuenta.
2. En **Billing**, agregue un método de pago y cargue saldo (por ejemplo, 5 o 10 dólares).
3. En **Limits**, ponga un **límite de gasto mensual**. Así nunca gastará más de lo que decida.
4. En **API Keys**, pulse **Create Key**, póngale el nombre «Rincón de Lengua» y **copie la clave** (empieza con `sk-ant-`). Guárdela: solo se muestra una vez.

> Nunca pegue la clave dentro de los archivos del sitio ni la comparta. Va solo en Vercel (paso 3).

## Paso 2. Subir el sitio a Vercel

1. Cree una cuenta gratuita en **https://vercel.com** (puede entrar con su cuenta de Google o GitHub).
2. La forma más sencilla es con GitHub:
   - Cree una cuenta en **https://github.com**, pulse **New repository**, póngale el nombre `rincon-de-lengua` y créelo.
   - Pulse **uploading an existing file** y arrastre el contenido de esta carpeta (`api`, `public`, `package.json`, `package-lock.json`, `vercel.json`, `.gitignore`, `LEEME.md`). **No suba la carpeta `node_modules`**: Vercel la crea por su cuenta. Pulse **Commit changes**.
   - En Vercel, pulse **Add New → Project**, elija el repositorio `rincon-de-lengua` y pulse **Import**.
3. En la pantalla de configuración deje **Framework Preset: Other**. No cambie nada más todavía.

## Paso 3. Configurar las variables (antes de publicar)

En la misma pantalla, abra **Environment Variables** y agregue:

| Nombre | Valor | ¿Obligatoria? |
|---|---|---|
| `ANTHROPIC_API_KEY` | La clave del paso 1 | Sí |
| `CODIGO_CLASE` | Un código para sus estudiantes, por ejemplo `lengua2026` | Muy recomendada: evita que personas ajenas usen su saldo |
| `CHASQUI_MODEL` | Déjela vacía para usar `claude-opus-5-5` (el modelo más capaz). Escriba `claude-haiku-5-5` si prefiere un modelo mucho más barato | No |

Pulse **Deploy**. En uno o dos minutos Vercel le dará la dirección del sitio (por ejemplo, `rincon-de-lengua.vercel.app`).

Si agrega o cambia una variable después, vaya a **Settings → Environment Variables**, guárdela y luego **Deployments → … → Redeploy** para que se aplique.

## Paso 4. Probar

1. Abra la dirección del sitio y revise los temas, el buscador y las descargas.
2. Abra **Preguntar a Chasqui** y escriba una pregunta. Si configuró `CODIGO_CLASE`, el chat le pedirá el código la primera vez.
3. Comparta con sus estudiantes la dirección del sitio y el código de la clase.

## Probar en esta computadora (opcional)

Con Node.js instalado, abra PowerShell en esta carpeta y escriba:

```powershell
$env:ANTHROPIC_API_KEY = "sk-ant-...su clave..."
npm run dev
```

Luego abra **http://localhost:3000** en el navegador. Sin la línea de la clave, el sitio funciona pero Chasqui no responde. Para detener el servidor, pulse `Ctrl + C`. Esta dirección solo funciona en su computadora; para compartir el sitio, publíquelo en Vercel.

## Costos aproximados

- Vercel: gratis en el plan Hobby.
- Claude: se paga por uso desde su saldo de Anthropic. Las instrucciones y el contenido del libro se guardan en caché para abaratar cada pregunta. Con `claude-haiku-5-5` el costo por pregunta es muy bajo; con `claude-opus-5-5` es mayor pero las respuestas son de mejor calidad. Revise el gasto real en **console.anthropic.com → Usage** durante la primera semana.

## Protecciones incluidas

- La clave de la API nunca llega al navegador: solo la usa `api/chasqui.js`.
- Código de la clase opcional (`CODIGO_CLASE`).
- Límite de 20 preguntas cada 10 minutos por persona y preguntas de hasta 1500 caracteres.
- Si Claude rechaza una pregunta por seguridad, se activa automáticamente un modelo de respaldo (solo con modelos Opus o Sonnet).

## Cambiar contenidos

- **Temas:** edite `public/contenido.js`. Cada tema tiene título (`t`), página (`p`), resumen (`s`), explicación (`body`), ejemplos (`ej`), «Para recordar» (`rec`) y una práctica (`q`, donde `ok` es el número de la opción correcta, empezando en 0).
- **Recursos:** ponga el archivo en `public/recursos/` y agréguelo a la lista `RESOURCES` al inicio de `public/app.js`.
- Al subir los cambios a GitHub, Vercel publica la nueva versión automáticamente.
