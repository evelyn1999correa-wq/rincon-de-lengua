// Contenido de los temas, basado en el Texto del Estudiante Lengua y Literatura 5.° EGB (MINEDUC).
// Lo usan la página (app.js) y el ayudante Chasqui (api/chasqui.js).
export const UNITS = [
{ n: 1, title: "La comunicación, la conversación y los cuentos populares", short: "Comunicación y cuentos", pages: "pp. 10-37",
  blocks: [
  { name: "Lengua y Cultura", topics: [
    { id: "intencion", t: "La intención comunicativa", p: "p. 10",
      s: "Todo mensaje tiene un propósito: informar, convencer o expresar emociones.",
      body: [
        "Cuando alguien envía un mensaje, <b>siempre tiene un propósito</b>. A ese propósito se le llama <b>intención comunicativa</b>.",
        "Las intenciones más comunes son tres:",
        "<ul><li><b>Informar:</b> dar datos o noticias. Ejemplo: un aviso con el horario del carro recolector.</li><li><b>Persuadir (convencer):</b> influir en el receptor para que cambie su forma de pensar o haga algo. Ejemplo: «¡No botes basura en la cancha!».</li><li><b>Expresar emociones:</b> compartir lo que sentimos. Ejemplo: una tarjeta de cumpleaños.</li></ul>",
        "Una misma frase cambia de intención según cómo la decimos. <b>¿Abres la puerta?</b> es una pregunta; <b>¡Abre la puerta!</b> es una orden que pide al receptor que haga algo."
      ],
      ej: ["Hoja volante: «Separa tu basura: bolsa blanca para reciclables» → persuadir.", "Noticia: «El carro recolector pasa de lunes a domingo» → informar.", "Mensaje: «¡Te extraño mucho, abuelita!» → expresar emociones."],
      rec: "Para comprender bien un mensaje, pregúntate: ¿para qué lo escribió el emisor?",
      q: { pre: "Un cartel en la escuela dice: «¡Cuida el agua, cierra la llave!». ¿Cuál es su intención?", ops: ["Informar", "Persuadir", "Expresar emociones"], ok: 1, why: "El cartel quiere que hagas algo (cerrar la llave). Eso es persuadir." } },
    { id: "comunicacion", t: "La comunicación", p: "p. 11",
      s: "Emisor, receptor y mensaje: así compartimos ideas.",
      body: [
        "La <b>comunicación</b> es una interacción social en la que se transmite información entre un <b>emisor</b> y un <b>receptor</b>. Existe comunicación cuando dos o más personas expresan y comparten sus ideas.",
        "<ul><li><b>Emisor:</b> quien envía el mensaje.</li><li><b>Receptor:</b> quien recibe el mensaje.</li><li><b>Mensaje:</b> la información que se comparte.</li></ul>",
        "La comunicación puede ser <b>oral</b> (hablada) o <b>escrita</b>. Hoy usamos muchas formas nuevas de lengua escrita: mensajes de texto, correos electrónicos, chats y blogs.",
        "Según su intención, el emisor elige el medio para enviar su mensaje: un cartel, una hoja volante, una carta o un mensaje en el celular."
      ],
      ej: ["Tu profesora (emisora) escribe en la pizarra la tarea (mensaje) para la clase (receptora).", "Tu primo te envía un audio por el celular: él es el emisor y tú el receptor."],
      rec: "Sin receptor no hay comunicación: alguien tiene que recibir y entender el mensaje.",
      q: { pre: "Mateo lee un afiche que pegó el municipio. ¿Quién es el receptor?", ops: ["El municipio", "Mateo", "El afiche"], ok: 1, why: "Mateo recibe el mensaje, por eso es el receptor. El municipio es el emisor." } }
  ]},
  { name: "Comunicación Oral", topics: [
    { id: "conversacion", t: "La conversación", p: "pp. 14-15",
      s: "Un diálogo entre dos o más personas que intercambian ideas con respeto.",
      body: [
        "Una <b>conversación</b> es un diálogo entre dos o más personas que intercambian ideas, dan opiniones y reciben respuestas. Quienes conversan construyen el texto <b>juntos</b>; por eso es diferente de un monólogo, donde habla una sola persona.",
        "Las conversaciones pueden ser <b>espontáneas</b> o <b>planificadas</b>. Las planificadas necesitan organizarse antes: pensar el tema, qué se va a decir y con quién.",
        "Para conversar con respeto seguimos algunas reglas:",
        "<ul><li>Saludar y despedirse.</li><li>Saber escuchar y poner atención.</li><li>Respetar el turno de la otra persona.</li><li>Cuidar el volumen de la voz.</li></ul>",
        "El mensaje también depende de la <b>situación comunicativa</b>: quién habla, a quién, dónde y cuándo."
      ],
      ej: ["Inés y sus amigos planifican conversar con sus familias para que no dejen basura en la cancha.", "Levantar la mano y esperar tu turno en clase es una regla de la conversación."],
      rec: "Conversar es escuchar tanto como hablar.",
      q: { pre: "¿Cuál de estas acciones NO es una regla para conversar con respeto?", ops: ["Esperar mi turno para hablar", "Hablar más fuerte para que no me interrumpan", "Escuchar con atención"], ok: 1, why: "Subir la voz para no dejar hablar a otros no es respetuoso. Hay que cuidar el volumen y respetar los turnos." } }
  ]},
  { name: "Lectura", topics: [
    { id: "proceso-lector", t: "Leo para informarme: el proceso lector", p: "pp. 18-19",
      s: "Antes, durante y después de leer, y las estrategias para comprender.",
      body: [
        "Los <b>textos informativos</b> nos dan datos sobre un tema, por ejemplo, cómo manejar correctamente la basura. Para comprenderlos seguimos un proceso:",
        "<ul><li><b>Prelectura (antes):</b> defino mi <b>propósito</b> (¿para qué voy a leer?), recuerdo lo que ya sé del tema (<b>conocimientos previos</b>) y elijo el tipo de texto.</li><li><b>Lectura (durante):</b> leo con atención y uso estrategias.</li><li><b>Poslectura (después):</b> compruebo lo que entendí, respondo preguntas y comparto con la clase.</li></ul>",
        "Estrategias que me ayudan a comprender:",
        "<ul><li><b>Parafrasear:</b> decir con mis propias palabras lo que leí.</li><li><b>Releer:</b> volver a leer una parte que no entendí.</li><li><b>Formular preguntas</b> sobre el texto.</li><li><b>Leer selectivamente:</b> buscar solo la información que necesito.</li><li><b>Consultar fuentes adicionales:</b> diccionario, libros o Internet.</li></ul>"
      ],
      ej: ["Propósito: «Quiero conocer más sobre el manejo correcto de los desechos».", "Parafraseo: «El texto dice que la basura mal manejada produce enfermedades» → «Si no cuidamos la basura, nos podemos enfermar»."],
      rec: "Si no entiendes una parte, no la saltes: reléela o pregunta.",
      q: { pre: "Decir con tus propias palabras lo que leíste se llama…", ops: ["Releer", "Parafrasear", "Leer selectivamente"], ok: 1, why: "Parafrasear es expresar las ideas de un texto con tus propias palabras." } }
  ]},
  { name: "Escritura", topics: [
    { id: "parrafo", t: "El párrafo", p: "p. 25",
      s: "Un grupo de oraciones que desarrolla una idea principal.",
      body: [
        "Un <b>párrafo</b> es un grupo de oraciones que desarrolla <b>una idea principal</b>. Empieza con mayúscula y termina con punto y aparte.",
        "Podemos ordenar sus ideas así:",
        "<ul><li><b>Idea introductoria:</b> presenta de forma general el tema.</li><li><b>Idea principal:</b> lo más importante que queremos decir.</li><li><b>Ideas de apoyo:</b> explican, dan ejemplos o describen la idea principal.</li><li><b>Conclusión:</b> cierra o resume la información.</li></ul>"
      ],
      ej: ["Idea principal: «La biblioteca escolar es uno de los servicios más importantes de una escuela».", "Idea de apoyo: «Permite consultar otras fuentes, además del libro de texto»."],
      rec: "Una idea principal por párrafo. Si cambias de idea, empieza otro párrafo.",
      q: { pre: "¿Qué parte del párrafo da ejemplos o explica la idea principal?", ops: ["La conclusión", "Las ideas de apoyo", "La idea introductoria"], ok: 1, why: "Las ideas de apoyo refuerzan, explican o dan ejemplos de la idea principal." } },
    { id: "oraciones", t: "Oraciones unimembres y bimembres", p: "Unidad 1",
      s: "Oraciones con sujeto y predicado, y oraciones que no los tienen.",
      body: [
        "Una <b>oración bimembre</b> tiene dos partes: <b>sujeto</b> (de quién se habla) y <b>predicado</b> (lo que se dice del sujeto). Ejemplo: <b>El cóndor</b> (sujeto) <b>vuela sobre los Andes</b> (predicado).",
        "Una <b>oración unimembre</b> comunica una idea completa <b>aunque no tenga sujeto y predicado</b>. Ejemplo: <b>¡Cuidado!</b>",
        "Las oraciones unimembres funcionan cuando la situación ayuda a entenderlas. Pueden estar formadas por un sustantivo (¡Fuego!), un adjetivo (¡Excelente!) o expresiones como ¡Qué lío!, ¡Buenos días!, Prohibido fumar."
      ],
      ej: ["Bimembre: «Mi hermana canta en el coro».", "Unimembre: «¡Feliz cumpleaños!»", "Unimembre: «Silencio, por favor»."],
      rec: "Pregunta: ¿quién realiza la acción? Si hay sujeto y predicado, es bimembre.",
      q: { pre: "¿Cuál es una oración unimembre?", ops: ["Los niños juegan en el patio.", "¡Atención!", "Mi gato duerme mucho."], ok: 1, why: "«¡Atención!» comunica una idea completa sin sujeto ni predicado." } },
    { id: "tilde", t: "Reglas de la tilde: agudas, graves, esdrújulas y sobreesdrújulas", p: "p. 29",
      s: "Dónde está la sílaba tónica y cuándo se pone tilde.",
      body: [
        "La <b>sílaba tónica</b> es la que pronunciamos con más fuerza de voz. Según dónde esté, las palabras se clasifican así:",
        "<div class='word-table-wrap'><table class='word-table'><thead><tr><th>Tipo</th><th>Sílaba tónica</th><th>¿Cuándo llevan tilde?</th><th>Ejemplos</th></tr></thead><tbody><tr><td><b>Agudas</b></td><td>Última</td><td>Cuando terminan en <b>n</b>, <b>s</b> o <b>vocal</b>.</td><td>canción, compás, colibrí · sin tilde: pared, Ecuador</td></tr><tr><td><b>Graves</b></td><td>Penúltima</td><td>Cuando <b>NO</b> terminan en n, s ni vocal.</td><td>árbol, lápiz, cóndor · sin tilde: mesa, cuaderno</td></tr><tr><td><b>Esdrújulas</b></td><td>Antepenúltima</td><td><b>Siempre</b>.</td><td>música, pájaro, teléfono</td></tr><tr><td><b>Sobreesdrújulas</b></td><td>Antes de la antepenúltima</td><td><b>Siempre</b>.</td><td>cómetelo, dígaselo</td></tr></tbody></table></div>",
        "Para saber dónde va la tilde: 1) separa la palabra en sílabas, 2) encuentra la sílaba tónica, 3) mira en qué letra termina y aplica la regla."
      ],
      ej: ["can-<b>ción</b>: aguda terminada en n → lleva tilde.", "<b>ár</b>-bol: grave terminada en l → lleva tilde.", "<b>mú</b>-si-ca: esdrújula → siempre tilde."],
      rec: "Agudas y graves funcionan al revés: lo que lleva tilde en una, no lo lleva en la otra.",
      q: { pre: "La palabra «lapiz» es grave. ¿Lleva tilde?", ops: ["Sí, porque termina en z (no en n, s ni vocal)", "No, las graves nunca llevan tilde", "Sí, porque todas las palabras llevan tilde"], ok: 0, why: "Las graves llevan tilde cuando NO terminan en n, s o vocal. Lápiz termina en z, así que lleva tilde." } },
    { id: "punto", t: "El punto", p: "p. 30",
      s: "Punto seguido, punto aparte y punto final.",
      body: [
        "El <b>punto</b> indica el final de una oración, de un párrafo o de un texto. <b>Después de un punto siempre se escribe con mayúscula.</b>",
        "<ul><li><b>Punto y seguido:</b> termina una oración y la siguiente empieza en la misma línea.</li><li><b>Punto y aparte:</b> termina un párrafo; el siguiente empieza en otra línea.</li><li><b>Punto final:</b> termina todo el texto.</li></ul>",
        "No se coloca punto después de los signos de interrogación (?) o de admiración (!), porque esos signos ya cierran la oración."
      ],
      ej: ["«Si miramos el cielo, veremos una estrella que brilla más. Se trata de la Estrella Polar.» → el primer punto es seguido.", "«¿Vienes conmigo?» → no lleva punto después del signo."],
      rec: "Punto = pausa larga + mayúscula después.",
      q: { pre: "¿Qué punto usas cuando terminas un párrafo y empiezas otro?", ops: ["Punto y seguido", "Punto y aparte", "Punto final"], ok: 1, why: "El punto y aparte cierra un párrafo; el siguiente empieza en una línea nueva." } },
    { id: "hoja-volante", t: "La hoja volante", p: "p. 31",
      s: "Un texto corto, con imagen, para difundir un mensaje.",
      body: [
        "La <b>hoja volante</b> (o «volante») es un texto corto, de un cuarto o media hoja, que sirve para difundir información breve y precisa, acompañada de ilustraciones. Se entrega en la mano o se deja en un lugar para que la gente la tome.",
        "Para que la gente la note, una hoja volante debe tener:",
        "<ul><li>Un <b>encabezado corto</b> (máximo cinco palabras), con letra grande y llamativa.</li><li>Un <b>mensaje claro y sencillo</b> que todos puedan comprender y recordar.</li><li><b>Ilustraciones</b> o imágenes que apoyen el mensaje.</li></ul>"
      ],
      ej: ["Encabezado: «¡Separa tu basura!»", "Mensaje: «Bolsa blanca para reciclables. Bolsa negra para residuos ordinarios.»"],
      rec: "Pocas palabras, mensaje claro, imagen llamativa.",
      q: { pre: "¿Cuál es el mejor encabezado para una hoja volante?", ops: ["«Información importante sobre el manejo adecuado de los residuos en el hogar»", "«¡Recicla en casa!»", "«Hola»"], ok: 1, why: "Es corto (tres palabras), llamativo y dice de qué trata." } }
  ]},
  { name: "Literatura", topics: [
    { id: "cuento-popular", t: "El cuento popular", p: "pp. 32-36",
      s: "Narraciones breves, anónimas, que pasan de boca en boca.",
      body: [
        "El <b>cuento popular</b> es una narración breve que se ha transmitido <b>de forma oral</b> a través del tiempo. Por eso tiene <b>muchas versiones</b>.",
        "Es <b>anónimo</b>: tuvo un autor al principio, pero se ha contado tantas veces, en tantos lugares, que nadie sabe quién lo inventó. Cada narrador lo adapta a su manera.",
        "El cuento popular deja una <b>lección</b>, pero no la dice directamente como la fábula: la descubrimos en lo que les pasa a los personajes.",
        "Lecturas de la unidad: <b>«Ansiosos de oro»</b> (Achupallas, Alausí, Chimborazo), <b>«El real y medio»</b>, <b>«La opinión ajena»</b> y <b>«El campesino que venció al diablo»</b>."
      ],
      ej: ["En «Ansiosos de oro», dos hijos buscan oro sin éxito. Su padre los pone a limpiar el campo, preparar la tierra y sembrar papas: el verdadero «oro» era el fruto de su trabajo."],
      rec: "Elementos del cuento: personajes, lugar, tiempo y secuencia (inicio, nudo y desenlace).",
      q: { pre: "¿Por qué los cuentos populares tienen muchas versiones?", ops: ["Porque se escribieron en muchos libros distintos", "Porque se han transmitido de forma oral y cada narrador los adapta", "Porque los inventó un autor famoso"], ok: 1, why: "Al contarse de boca en boca, cada persona cambia algo y así nacen nuevas versiones." } }
  ]}
  ]},
{ n: 2, title: "Los textos conservan la cultura: narración oral y leyendas", short: "Narración y leyendas", pages: "pp. 40-67",
  blocks: [
  { name: "Lengua y Cultura", topics: [
    { id: "textos-cultura", t: "Los textos conservan y transmiten la cultura", p: "p. 40",
      s: "La escritura guarda las costumbres y saberes de los pueblos.",
      body: [
        "La lengua escrita, al quedar en un soporte (piedra, tela, papel, pantalla), <b>se conserva por años</b> y se puede leer una y otra vez, en cualquier lugar y tiempo.",
        "Por eso la escritura es un <b>medio de transmisión cultural</b>: gracias a ella se transmite la lengua de un pueblo, su historia, su gastronomía, su literatura y sus costumbres, de una generación a otra.",
        "Por los textos escritos sabemos cómo vivían nuestros ancestros, qué comían, cómo celebraban y qué descubrieron.",
        "Ejemplo de la unidad: el <b>cóndor</b>. En la cultura andina es el mensajero de los dioses, y también aparece en el Escudo del Ecuador. Conocemos esto gracias a los textos que lo explican."
      ],
      ej: ["Un recetario de la abuela conserva la forma de preparar la fanesca.", "Hoy también transmitimos cultura por Internet: blogs, correos y mensajes."],
      rec: "La cultura es el conjunto de modos de vida y costumbres de un grupo humano.",
      q: { pre: "¿Por qué la escritura ayuda a conservar la cultura?", ops: ["Porque las palabras escritas se olvidan rápido", "Porque queda en un soporte y se puede leer muchas veces, por muchas generaciones", "Porque solo sirve para hacer tareas"], ok: 1, why: "Lo escrito perdura en el tiempo y llega a personas de otras épocas y lugares." } }
  ]},
  { name: "Comunicación Oral", topics: [
    { id: "narracion-oral", t: "La narración oral", p: "pp. 44-45",
      s: "Contar hechos con narrador, personajes, espacio y tiempo.",
      body: [
        "<b>Narrar</b> es contar, por medio de un narrador, hechos que les suceden a unos personajes en un tiempo y un lugar.",
        "Elementos de la narración:",
        "<ul><li><b>Narrador:</b> la voz que cuenta. Puede ser un personaje de la historia o alguien externo.</li><li><b>Personajes:</b> el <b>protagonista</b> (centro de la historia), el <b>antagonista</b> (se opone al protagonista) y los <b>secundarios</b>.</li><li><b>Espacio:</b> dónde ocurren los hechos.</li><li><b>Tiempo:</b> el orden en que suceden.</li></ul>",
        "Las narraciones usan <b>verbos de acción</b> y <b>conectores temporales</b>: había una vez, al principio, mientras tanto, entonces, luego, después, finalmente.",
        "Un buen narrador oral cuida la entonación, los gestos y el ritmo de su voz. Ensayar frente a un espejo ayuda mucho."
      ],
      ej: ["«El tsáchila que se convirtió en Sol»: una narración tradicional del pueblo tsáchila.", "La historia de Wayra Anti, una bebé cóndor nacida en el zoológico de Guayllabamba."],
      rec: "Conectores para narrar: primero, luego, después, finalmente.",
      q: { pre: "En una narración, el personaje que se opone al protagonista es el…", ops: ["Narrador", "Antagonista", "Personaje secundario"], ok: 1, why: "El antagonista genera el conflicto porque se opone al protagonista." } }
  ]},
  { name: "Lectura", topics: [
    { id: "inferencias", t: "Leo para conocer mi país: las inferencias", p: "pp. 48-49",
      s: "Descubrir lo que el texto no dice directamente.",
      body: [
        "En esta unidad leemos textos informativos sobre el <b>cóndor andino</b> y la <b>biodiversidad del Ecuador</b>.",
        "Para comprenderlos mejor hacemos <b>inferencias</b>: descubrimos información que el texto no dice directamente, usando las <b>pistas</b> del texto y lo que ya sabemos.",
        "Pasos para inferir: 1) lee con atención, 2) busca pistas (palabras, datos, imágenes), 3) une esas pistas con lo que ya sabes, 4) saca una conclusión.",
        "También seguimos usando el parafraseo y la formulación de preguntas."
      ],
      ej: ["Texto: «El cóndor es una especie que pronto puede desaparecer de las montañas andinas». Inferencia: necesitamos protegerlo."],
      rec: "Inferir es leer «entre líneas».",
      q: { pre: "El texto dice: «Juan llegó empapado y con el paraguas roto». ¿Qué puedes inferir?", ops: ["Que hacía sol", "Que llovía mucho y había viento", "Que Juan fue a la piscina"], ok: 1, why: "Las pistas (empapado, paraguas roto) indican que llovía fuerte y probablemente había viento." } }
  ]},
  { name: "Escritura", topics: [
    { id: "concordancia", t: "La concordancia", p: "pp. 54-55",
      s: "Las palabras deben coincidir en género y número.",
      body: [
        "En una oración, las palabras deben coincidir en <b>género</b> (masculino o femenino) y <b>número</b> (singular o plural). A esto se le llama <b>concordancia</b>.",
        "Debe haber concordancia:",
        "<ul><li>Entre el <b>artículo y el sustantivo</b>: la neblina, el aguacero.</li><li>Entre el <b>sustantivo y el adjetivo</b>: cabello largo, falda corta.</li><li>Entre el <b>sustantivo y el verbo</b>: la niña salta, los niños patinan.</li></ul>",
        "Cuando no hay concordancia, el texto suena mal y se entiende peor."
      ],
      ej: ["Incorrecto: «Las montaña es alto». Correcto: «La montaña es alta».", "Incorrecto: «Los perros ladra». Correcto: «Los perros ladran»."],
      rec: "Lee tu oración en voz alta: si suena raro, revisa la concordancia.",
      q: { pre: "¿Cuál oración tiene concordancia correcta?", ops: ["Las flores rojo crecen.", "Las flores rojas crecen.", "La flores rojas crece."], ok: 1, why: "Artículo (las), sustantivo (flores), adjetivo (rojas) y verbo (crecen) están en femenino y plural." } },
    { id: "interrogacion", t: "Signos de interrogación y admiración", p: "p. 59",
      s: "¿Preguntas? ¡Emociones! Siempre se abren y se cierran.",
      body: [
        "Los <b>signos de interrogación (¿?)</b> se usan para hacer preguntas. En español se escriben <b>al inicio y al final</b> de la pregunta.",
        "Las preguntas suelen empezar con una <b>palabra interrogativa</b>, que <b>siempre lleva tilde</b>: qué, para qué, por qué, cuándo, dónde, cuál, cuánto, quién.",
        "Cuando esas palabras no preguntan sino explican, <b>no llevan tilde</b>: «Te llamo <b>cuando</b> llegue» / «¿<b>Cuándo</b> llegas?».",
        "Los <b>signos de admiración (¡!)</b> expresan emociones y sentimientos: ¡Feliz día!, ¡Qué susto! También se usan en interjecciones: ¡ah!, ¡oh!, ¡ay!",
        "Recuerda: después de ? o ! no se pone punto."
      ],
      ej: ["¿Dónde está mi cuaderno?", "No sé dónde está mi cuaderno. (pregunta indirecta: también lleva tilde)", "Me dijo que viniera. / ¿Qué te dijo?", "¡Siéntate!, ¡hazme caso!"],
      rec: "Porque (respuesta) · ¿Por qué? (pregunta) · el porqué (la causa).",
      q: { pre: "¿Cuál está bien escrita?", ops: ["Donde vives?", "¿Dónde vives?", "¿Donde vives?"], ok: 1, why: "Lleva los dos signos (¿ y ?) y «dónde» lleva tilde porque pregunta." } },
    { id: "tilde-diacritica", t: "La tilde diacrítica", p: "pp. 56-59",
      s: "Una tilde que distingue palabras que se escriben igual.",
      body: [
        "La <b>tilde diacrítica</b> sirve para diferenciar palabras que se escriben igual pero tienen distinto significado o función. Casi siempre son monosílabos.",
        "<div class='word-table-wrap'><table class='word-table'><thead><tr><th>Sin tilde</th><th>Con tilde</th></tr></thead><tbody><tr><td><b>el</b> (artículo): El gato me arañó.</td><td><b>él</b> (pronombre): Él se va de vacaciones.</td></tr><tr><td><b>tu</b> (posesivo): Tu cabello es lindo.</td><td><b>tú</b> (pronombre): Tú sabes la canción.</td></tr><tr><td><b>mi</b> (posesivo): Mi bicicleta es nueva.</td><td><b>mí</b> (pronombre): La invitación es para mí.</td></tr><tr><td><b>si</b> (condición): Si tardas, no te espero.</td><td><b>sí</b> (afirmación): Sí, te escucho.</td></tr><tr><td><b>se</b> (pronombre): Ese carro se vendió.</td><td><b>sé</b> (saber/ser): No sé cuándo llega.</td></tr><tr><td><b>te</b> (pronombre): Te lo dejo en casa.</td><td><b>té</b> (bebida): El té está caliente.</td></tr><tr><td><b>de</b> (preposición): Vine de nadar.</td><td><b>dé</b> (dar): Pide que te dé agua.</td></tr><tr><td><b>mas</b> (pero): Lo dijo, mas no le creí.</td><td><b>más</b> (cantidad): Quiero más arroz.</td></tr></tbody></table></div>"
      ],
      ej: ["«Él compró té para mí.»", "«Sí, sé la respuesta.»"],
      rec: "Pregúntate qué función cumple la palabra en la oración.",
      q: { pre: "Completa: «___ quieres, te presto mi lápiz.»", ops: ["Sí", "Si"], ok: 1, why: "Aquí expresa una condición, por eso va sin tilde: «Si quieres…»." } }
  ]},
  { name: "Literatura", topics: [
    { id: "leyenda", t: "La leyenda", p: "pp. 62-66",
      s: "Relatos orales que mezclan hechos y fantasía de un pueblo.",
      body: [
        "Las <b>leyendas</b> son narraciones casi siempre de origen oral, basadas en algún hecho que se ha recreado muchísimas veces y se ha enriquecido con la <b>fantasía e imaginación popular</b>.",
        "Características:",
        "<ul><li>Se cuentan como si hubieran pasado de verdad.</li><li>Muchas tienen mensajes de <b>protección del medio ambiente</b>.</li><li>Las malas acciones de los personajes son castigadas.</li><li>Expresan la identidad, las costumbres y la forma de ver el mundo de cada cultura.</li></ul>",
        "Lecturas de la unidad: <b>«Leyenda de Etsa»</b> (shuar), <b>«El oro de los Llanganates»</b>, <b>«Hada de Santana»</b>, <b>«El delfín rosado»</b> y <b>«El sapo Kuartam»</b>.",
        "Proyecto de la unidad: el <b>Álbum de las leyendas de 5.° grado</b>, y narrar una leyenda con títeres de material reciclado."
      ],
      ej: ["En la «Leyenda de Etsa», el joven Etsa caza tantas aves para el demonio Iwia que la selva queda en silencio. Solo queda la paloma Yápankam, que lo ayuda a descubrir la verdad."],
      rec: "Cuento popular: deja una lección. Leyenda: explica algo de un lugar o pueblo y se cuenta como real.",
      q: { pre: "¿Qué tienen en común muchas leyendas ecuatorianas?", ops: ["Son inventadas por un autor famoso", "Mezclan hechos con fantasía y transmiten la cultura de un pueblo", "Solo hablan de ciudades modernas"], ok: 1, why: "Las leyendas nacen de la tradición oral y mezclan realidad e imaginación." } }
  ]}
  ]},
{ n: 3, title: "Variedad lingüística, descripción y poesía popular", short: "Dialectos y poesía popular", pages: "pp. 70-96",
  blocks: [
  { name: "Lengua y Cultura", topics: [
    { id: "dialectos", t: "La variedad lingüística: los dialectos", p: "p. 70",
      s: "El castellano se habla de distintas maneras en cada región.",
      body: [
        "El castellano no se habla igual en todo el país. Existen <b>dialectos</b>, es decir, <b>variedades regionales de un idioma</b>.",
        "<ul><li><b>Costa:</b> el dialecto costeño suele omitir la <b>s</b> final o pronunciarla como una j suave.</li><li><b>Sierra:</b> hay varias variedades: el dialecto pastuso (Carchi), el de la Sierra central que arrastra la <b>rr</b>, el morlaco o cuencano con su tono «cantadito» y el lojano, que pronuncia la <b>ll</b> y no arrastra la rr.</li><li><b>Amazonía:</b> el castellano tiene influencia de la Sierra: en Morona Santiago se parece al cuencano y en Zamora Chinchipe al lojano.</li></ul>",
        "También hay diferencias entre el campo y la ciudad, entre generaciones, y hasta entre barrios. Cada dialecto tiene <b>palabras y expresiones propias</b>.",
        "Todas las formas de hablar son valiosas: forman parte de la <b>diversidad cultural</b> del Ecuador."
      ],
      ej: ["Un costeño puede decir «lo' niño'» y un serrano, «los niños»: es la misma palabra con distinta pronunciación.", "En el libro, personas de la Costa y de la Sierra piden comida con palabras distintas y aun así se entienden."],
      rec: "Respetar las formas de hablar es respetar a las personas.",
      q: { pre: "¿Qué es un dialecto?", ops: ["Un idioma inventado", "Una variedad regional de un idioma", "Una palabra mal dicha"], ok: 1, why: "El dialecto es la forma en que se habla un idioma en una región. No es un error." } }
  ]},
  { name: "Comunicación Oral", topics: [
    { id: "dialogo", t: "El diálogo y la entrevista", p: "pp. 74-75",
      s: "Intercambiar voces como emisores y receptores.",
      body: [
        "El <b>diálogo</b> es el intercambio entre dos o más personas que alternan sus voces como emisores y receptores. Quienes dialogan se llaman <b>interlocutores</b>.",
        "En el diálogo oral también comunican los <b>gestos</b>, la <b>entonación</b> y la <b>actitud</b>.",
        "Hay diálogos espontáneos (una llamada telefónica) y planificados, como la <b>entrevista</b>, la <b>conferencia</b> y el <b>debate</b>.",
        "La <b>entrevista</b> tiene tres partes: <b>saludo</b> (presentar al personaje), <b>cuerpo</b> (preguntas y respuestas) y <b>despedida</b> (agradecer). Un buen entrevistador prepara sus preguntas con cuidado.",
        "Situación de la unidad: conversar sobre la conservación del <b>Parque Nacional Yasuní</b>."
      ],
      ej: ["Saludo: «Bienvenida, señora guardaparques. Gracias por visitarnos.»", "Pregunta: «¿Qué animales viven en el Yasuní?»"],
      rec: "En un diálogo, escucha la respuesta antes de hacer la siguiente pregunta.",
      q: { pre: "¿Cuáles son las tres partes de una entrevista?", ops: ["Inicio, nudo y desenlace", "Saludo, cuerpo y despedida", "Título, texto e imagen"], ok: 1, why: "La entrevista empieza con un saludo, sigue con las preguntas (cuerpo) y termina con una despedida." } }
  ]},
  { name: "Lectura", topics: [
    { id: "megadiversidad", t: "La megadiversidad del Ecuador", p: "pp. 78-79",
      s: "Textos sobre la riqueza natural: la Reserva Limoncocha.",
      body: [
        "El Ecuador es un país <b>megadiverso</b>: tiene una enorme variedad de plantas y animales en un territorio pequeño.",
        "En esta unidad leemos sobre la <b>Reserva Biológica Limoncocha</b>, en la Amazonía, y su riqueza biológica.",
        "Seguimos el proceso lector: propósito, conocimientos previos, lectura y poslectura. Al final, hacemos un <b>álbum</b> con dibujos de los árboles y animales de Limoncocha.",
        "Estrategias: identificar la idea principal de cada párrafo, buscar en el diccionario palabras nuevas y hacer inferencias."
      ],
      ej: ["Palabra nueva: «biodiversidad» = variedad de seres vivos de un lugar."],
      rec: "Antes de leer, mira el título y las imágenes: te dan pistas del tema.",
      q: { pre: "¿Qué significa que el Ecuador es «megadiverso»?", ops: ["Que tiene muchas ciudades grandes", "Que tiene una enorme variedad de seres vivos", "Que tiene un solo tipo de clima"], ok: 1, why: "Megadiverso significa que posee una gran variedad de especies de plantas y animales." } }
  ]},
  { name: "Escritura", topics: [
    { id: "descripcion", t: "El párrafo descriptivo y sus conectores", p: "pp. 84-86",
      s: "Pintar con palabras: adjetivos y conectores.",
      body: [
        "Un <b>párrafo descriptivo</b> cuenta cómo es un objeto, un animal, un lugar o una persona. Es como <b>crear una fotografía con palabras</b>.",
        "Usa muchos <b>adjetivos</b> (grande, robusto, brillante) y <b>conectores</b> que unen las ideas:",
        "<ul><li><b>De adición:</b> además, y, también, asimismo, por otra parte.</li><li><b>De comparación:</b> como, así como, tal como, igual que, más que, menos que.</li><li><b>De contraste:</b> pero, sin embargo, en cambio, aunque, no obstante.</li><li><b>De orden:</b> primero, luego, después, a continuación, finalmente, por último.</li></ul>"
      ],
      ej: ["«El jaguar es un felino pariente del tigre y del león. Su cuerpo es grande y robusto; tiene patas anchas y fuertes, una cola larga y hermosa…»", "«Flores hermosas <b>como</b> estrellas salpicaban el jardín.» → comparación"],
      rec: "Describe en orden: de lo general a lo particular, o de arriba hacia abajo.",
      q: { pre: "En «Los ojos estaban abiertos, pero apagados», el conector «pero» es de…", ops: ["Adición", "Contraste", "Orden"], ok: 1, why: "«Pero» presenta una idea opuesta a la anterior: es un conector de contraste." } },
    { id: "grados-adjetivo", t: "Grados del adjetivo", p: "p. 88",
      s: "Positivo, comparativo y superlativo.",
      body: [
        "Los adjetivos pueden expresar una cualidad con distinta intensidad. Esto se llama <b>grado</b>:",
        "<ul><li><b>Positivo:</b> la cualidad sin comparar. «El río es <b>largo</b>.»</li><li><b>Comparativo:</b> compara dos cosas. Puede ser de <b>igualdad</b> (tan largo como), de <b>superioridad</b> (más largo que) o de <b>inferioridad</b> (menos largo que).</li><li><b>Superlativo:</b> la cualidad en su grado máximo. «El río es <b>larguísimo</b>» o «el <b>más largo</b> del país».</li></ul>"
      ],
      ej: ["Positivo: «La sopa está rica.»", "Comparativo: «El cóndor es más grande que el colibrí.»", "Superlativo: «El helado está buenísimo.»"],
      rec: "El superlativo suele terminar en -ísimo / -ísima.",
      q: { pre: "«Mi perro es tan juguetón como el tuyo.» ¿En qué grado está el adjetivo?", ops: ["Positivo", "Comparativo de igualdad", "Superlativo"], ok: 1, why: "«Tan… como» compara dos cosas que son iguales en esa cualidad." } },
    { id: "coma", t: "La coma y el punto y coma", p: "p. 89",
      s: "Pausas cortas y medianas dentro de la oración.",
      body: [
        "La <b>coma (,)</b> marca una pausa más breve que el punto. Se usa para:",
        "<ul><li>Separar elementos de una <b>enumeración</b>: «Necesito carrizo, papel, piola, tela y goma.»</li><li>Separar <b>explicaciones breves</b> que interrumpen la oración: «Una noche, cuando caminaba hacia su casa, vio una fogata.»</li></ul>",
        "El <b>punto y coma (;)</b> marca una pausa más grande que la coma y más pequeña que el punto. Se usa para separar dos ideas diferentes dentro de la misma oración, o enumeraciones cuyas partes ya llevan comas."
      ],
      ej: ["«El caparazón tiene muchas placas; las más pequeñas están en la cola.»", "«Se subía por la cola, se escondía en la melena, le soplaba la nariz.»"],
      rec: "Antes de la «y» final de una enumeración no va coma.",
      q: { pre: "¿Dónde falta la coma? «Compré mangos piñas y papayas.»", ops: ["Después de «mangos»", "Después de «piñas»", "Antes de «Compré»"], ok: 0, why: "En la enumeración se separa con coma: «mangos, piñas y papayas». Antes de la «y» no va coma." } },
    { id: "b-v", t: "Uso de la b y la v", p: "p. 90",
      s: "Reglas para no confundir estas letras.",
      body: [
        "Se escriben con <b>b</b>:",
        "<ul><li>Las palabras que empiezan con <b>bu-, bur-, bus-</b>: bufanda, burbuja, buscar, bucear.</li><li>Las terminaciones <b>-aba, -abas, -ábamos, -aban</b> de los verbos terminados en -ar: cantaba, jugábamos, sacaban.</li></ul>",
        "Se escriben con <b>v</b>:",
        "<ul><li>Los adjetivos terminados en <b>-ivo, -iva</b>: caritativo, relativa, ofensivo, narrativa.</li><li>Las palabras terminadas en <b>-ava, -ave, -avo</b>: octava, suave, bravo (excepto árabe y sílaba).</li><li>Después de <b>n</b>: invierno, invento, enviar, convertir.</li><li>Las palabras que empiezan con <b>eva-, eve-, evi-, evo-</b>: evaluar, evento, evitar, evolución.</li></ul>"
      ],
      ej: ["Ayer jugaba en el patio con mi bufanda nueva.", "En invierno evitamos el agua fría."],
      rec: "Después de «m» va b (cambiar); después de «n» va v (enviar).",
      q: { pre: "¿Cuál está bien escrita?", ops: ["imbierno", "invierno", "inbierno"], ok: 1, why: "Después de n se escribe v: invierno." } }
  ]},
  { name: "Literatura", topics: [
    { id: "rima", t: "La rima: consonante y asonante", p: "p. 93",
      s: "La repetición de sonidos al final de los versos.",
      body: [
        "La <b>rima</b> da musicalidad a la poesía. Es la <b>repetición de sonidos desde la última vocal acentuada</b> de cada verso.",
        "<ul><li><b>Rima consonante:</b> riman todos los sonidos, vocales y consonantes. Ejemplo: c<b>asa</b> – p<b>asa</b>.</li><li><b>Rima asonante:</b> solo riman las vocales. Ejemplo: c<b>a</b>s<b>a</b> – dr<b>a</b>m<b>a</b> (a–a).</li></ul>",
        "Para encontrarla, busca la última sílaba tónica de cada verso y compara los sonidos desde esa vocal hasta el final."
      ],
      ej: ["«Allá arriba en esa loma / tengo un palo colorado / donde pongo mi sombrero / cuando estoy enamorado.» → colorado / enamorado: consonante.", "«Llegué a la pobre cabaña / en días de primavera. / La niña triste cantaba, / la abuela hilaba en la rueca.» → primavera / rueca: asonante (e–a)."],
      rec: "Consonante: suenan igual. Asonante: solo se parecen las vocales.",
      q: { pre: "«Luna» y «cuna», ¿qué tipo de rima tienen?", ops: ["Consonante", "Asonante", "No riman"], ok: 0, why: "Desde la vocal tónica (u) todo suena igual: -una / -una. Es rima consonante." } },
    { id: "rimas-populares", t: "Amorfinos, coplas, chigualos y arrullos", p: "pp. 94-95",
      s: "La poesía popular del Ecuador.",
      body: [
        "Las <b>rimas populares</b> son parte de la literatura anónima. Hablan de amor, consejos, bromas y cantos a la tierra natal. Su verdadera vida está en la <b>palabra hablada</b>.",
        "<ul><li><b>Amorfinos:</b> rimas populares de la tradición oral, sobre todo del pueblo montubio de la Costa. Mezclan lo romántico con el humor y muchas veces se improvisan.</li><li><b>Coplas:</b> pequeñas poesías en estrofas de hasta ocho versos, que a veces se cantan. No tienen título.</li><li><b>Chigualos:</b> arrullos y villancicos que se cantan en las celebraciones del Niño Jesús, sobre todo en Esmeraldas.</li><li><b>Arrullos:</b> cantos de contenido religioso de la tradición afroecuatoriana.</li></ul>",
        "Otras formas populares: adivinanzas, andareles, alabaos, villancicos y décimas."
      ],
      ej: ["Copla: «Dos claveles en el agua / no se pueden marchitar; / dos amores que se quieren / no se pueden olvidar.»", "Chigualo: «Cuatro por aquí, / cuatro por allá, / ataje al niño / que ya se nos va.»"],
      rec: "Pide a tu familia que te enseñe un amorfino o una copla de tu tierra.",
      q: { pre: "¿Qué son las coplas?", ops: ["Cuentos largos con capítulos", "Pequeñas poesías en estrofas de hasta ocho versos, que a veces se cantan", "Noticias de un periódico"], ok: 1, why: "Las coplas son poemas populares breves, sin título, que muchas veces se cantan." } }
  ]}
  ]},
{ n: 4, title: "Lenguas originarias, exposición, debate y poesía con humor", short: "Lenguas originarias y humor", pages: "pp. 100-127",
  blocks: [
  { name: "Lengua y Cultura", topics: [
    { id: "quichuismos", t: "Otros idiomas enriquecen al castellano: los quichuismos", p: "p. 100",
      s: "Palabras del kichwa que usamos todos los días.",
      body: [
        "El castellano del Ecuador se ha enriquecido con palabras de otros idiomas. Las que vienen del <b>kichwa</b> se llaman <b>quichuismos</b>.",
        "Muchos quichuismos aparecen en canciones ecuatorianas, como «Achachay aguacerito, no me vengas a mojar».",
        "<div class='word-table-wrap'><table class='word-table'><thead><tr><th>Quichuismo</th><th>Significado</th></tr></thead><tbody><tr><td>guagua</td><td>niño o bebé pequeño</td></tr><tr><td>guambra</td><td>muchacho o muchacha</td></tr><tr><td>ñaño / ñaña</td><td>hermano / hermana</td></tr><tr><td>achachay</td><td>¡qué frío!</td></tr><tr><td>arrarray</td><td>¡qué calor! / ¡quema!</td></tr><tr><td>choclo</td><td>mazorca tierna de maíz</td></tr><tr><td>cancha</td><td>terreno para jugar</td></tr><tr><td>yapa</td><td>porción extra que regala el vendedor</td></tr></tbody></table></div>"
      ],
      ej: ["«¡Achachay, qué frío hace en Quito!»", "«La casera me dio la yapa de mandarinas.»"],
      rec: "Los quichuismos son parte de nuestra identidad: úsalos con orgullo.",
      q: { pre: "¿Qué significa «guambra»?", ops: ["Muchacho o muchacha", "Comida típica", "Expresión de frío"], ok: 0, why: "Guambra es un quichuismo que significa muchacho o muchacha." } },
    { id: "lenguas-originarias", t: "Lenguas originarias del Ecuador", p: "p. 102",
      s: "Las nacionalidades y sus idiomas.",
      body: [
        "El Ecuador es un Estado <b>plurinacional e intercultural</b>: conviven muchas nacionalidades con su propio idioma.",
        "<ul><li><b>Costa:</b> awá (awapit), chachi (cha'palaa), épera (sia pedee) y tsáchila (tsa'fiki).</li><li><b>Amazonía:</b> a'i cofán (a'ingae), secoya y siona (paicoca), waorani (wao tededo), shiwiar (shiwiar chicham), zápara, achuar (achuar chicham), andoa y shuar (shuar chicham).</li><li><b>Sierra:</b> la nacionalidad kichwa, con sus pueblos, habla el kichwa.</li></ul>",
        "El nombre <b>tsa'fiki</b>, del pueblo tsáchila, significa «palabra verdadera».",
        "Conocer y respetar estas lenguas fortalece la <b>interculturalidad</b>."
      ],
      ej: ["Saludo en kichwa: «Alli puncha» (buenos días)."],
      rec: "Cada lengua guarda una forma única de ver el mundo.",
      q: { pre: "¿Qué nacionalidad habla el shuar chicham?", ops: ["Shuar", "Tsáchila", "Chachi"], ok: 0, why: "El shuar chicham es el idioma de la nacionalidad shuar, en la Amazonía." } }
  ]},
  { name: "Comunicación Oral", topics: [
    { id: "exposicion", t: "La exposición oral", p: "pp. 104-106",
      s: "Explicar un tema en público, de forma clara y ordenada.",
      body: [
        "La <b>exposición oral</b> consiste en hablar en público para <b>explicar un tema</b> con la intención de informar. Debe ser clara, sencilla y ordenada.",
        "Tiene tres partes: <b>introducción</b>, <b>desarrollo</b> y <b>conclusión</b>.",
        "Pasos para prepararla:",
        "<ul><li>Consultar el tema en libros e Internet.</li><li>Hacer un <b>esquema</b> con las ideas principales.</li><li>Preparar recursos de apoyo: un dibujo, un cartel o un video.</li><li>Ensayar frente al espejo.</li><li>Presentarla a la clase.</li></ul>"
      ],
      ej: ["Tema: «Los animales tienen derecho a vivir en libertad». Introducción: qué son los derechos de los animales. Desarrollo: explicación y ejemplos. Conclusión: qué podemos hacer."],
      rec: "Mira al público, habla despacio y con voz clara.",
      q: { pre: "¿Cuáles son las partes de una exposición oral?", ops: ["Introducción, desarrollo y conclusión", "Saludo, cuerpo y despedida", "Pregunta y respuesta"], ok: 0, why: "Toda exposición se organiza en introducción, desarrollo y conclusión." } },
    { id: "debate", t: "El debate", p: "pp. 104-106",
      s: "Defender ideas con argumentos y respeto.",
      body: [
        "El <b>debate</b> es una discusión en la que dos o más personas opinan sobre un tema; cada una expone sus ideas y defiende su opinión con <b>argumentos</b>.",
        "Cómo organizamos un debate en clase:",
        "<ul><li>Formamos dos grupos con posiciones distintas.</li><li>Cada grupo prepara sus ideas y argumentos.</li><li>Los grupos toman turnos (por ejemplo, de cinco minutos) para defender sus ideas.</li><li>El docente modera y al final resume las conclusiones.</li><li>Reflexionamos sobre la calidad de las razones de cada grupo.</li></ul>",
        "En un debate se busca <b>construir acuerdos</b>: escuchar, respetar los turnos y responder con razones, no con burlas."
      ],
      ej: ["Tema de la unidad: «¿Los animales tienen los mismos derechos que las personas?»", "Otro tema: «¿Las plantas medicinales curan enfermedades?»"],
      rec: "Un buen argumento da una razón: «Creo que… porque…».",
      q: { pre: "¿Qué es lo más importante en un debate?", ops: ["Hablar más fuerte que el otro grupo", "Defender las ideas con argumentos y respetar los turnos", "Ganar siempre"], ok: 1, why: "En el debate se argumenta con razones y se escucha con respeto." } }
  ]},
  { name: "Lectura", topics: [
    { id: "saberes-ancestrales", t: "¡Leer es saber!: la sabiduría ancestral", p: "pp. 108-109",
      s: "Los principios de los saberes de los pueblos indígenas.",
      body: [
        "Los <b>saberes ancestrales</b> son los conocimientos que los pueblos han construido a través del tiempo y que se heredan de padres a hijos.",
        "Los pueblos indígenas del Ecuador basan sus saberes en estos principios:",
        "<ul><li><b>El mundo es una sola unidad:</b> todo lo que existe se relaciona; compartimos el planeta con animales, plantas y minerales, protegidos por la Pachamama.</li><li><b>El ser humano debe vivir en armonía con la naturaleza:</b> respetar sus ciclos, por ejemplo, para sembrar y cosechar. Cada persona debe estar unida a la naturaleza como <i>shuk yuyaylla</i> (un solo pensamiento), <i>shuk shunkulla</i> (un solo corazón) y <i>shuk makilla</i> (una sola fuerza).</li><li><b>Reciprocidad y redistribución:</b> vivir en comunidad, compartir y trabajar juntos, como en la <b>minga</b>.</li></ul>",
        "De estos principios nacen saberes sobre medicina natural, agricultura, construcción y alimentación."
      ],
      ej: ["La minga: los vecinos trabajan juntos para arreglar el camino de la comunidad."],
      rec: "Reciprocidad = dar y devolver.",
      q: { pre: "¿Qué es una minga?", ops: ["Un tipo de baile", "Un trabajo comunitario en el que todos colaboran", "Una planta medicinal"], ok: 1, why: "La minga es el trabajo compartido de la comunidad, un ejemplo de reciprocidad." } }
  ]},
  { name: "Escritura", topics: [
    { id: "expositivo", t: "El párrafo expositivo y sus conectores", p: "pp. 114-116",
      s: "Informar con datos: causa-efecto, comparación y problema-solución.",
      body: [
        "Los <b>párrafos expositivos</b> dan información sobre un tema. Su contenido es directo, con datos objetivos; no incluyen opiniones ni emociones.",
        "Según cómo se organiza la información, pueden ser de:",
        "<ul><li><b>Causa-efecto:</b> explican por qué pasa algo y sus consecuencias.</li><li><b>Comparación-contraste:</b> muestran semejanzas y diferencias.</li><li><b>Problema-solución:</b> presentan un problema y cómo resolverlo.</li></ul>",
        "Conectores de la exposición:",
        "<ul><li><b>Causa-efecto:</b> porque, ya que, por eso, por lo tanto, en consecuencia.</li><li><b>Énfasis:</b> sobre todo, de hecho, especialmente.</li><li><b>Cambio de perspectiva:</b> por otra parte, por el contrario, desde otro punto de vista.</li><li><b>Ilustración:</b> por ejemplo, es decir, como es el caso de.</li><li><b>Condición:</b> si, siempre que, con tal que.</li><li><b>Resumen o conclusión:</b> en conclusión, en resumen, finalmente, para terminar.</li></ul>",
        "Antes de escribir, ayuda mucho hacer un <b>esquema</b> con las ideas más importantes."
      ],
      ej: ["Comparación: «El oro y el bronce son parecidos por su color. <b>Sin embargo</b>, el oro es blando y pesado, mientras que el bronce es más duro y liviano.»", "Causa-efecto: «Una bolsa plástica tarda más de 200 años en descomponerse; <b>por eso</b> contamina ríos y mares.»"],
      rec: "Expositivo = informar. Deja tus opiniones para el debate.",
      q: { pre: "«Llovió toda la noche; por lo tanto, el río creció.» ¿Qué estructura tiene?", ops: ["Causa-efecto", "Comparación-contraste", "Problema-solución"], ok: 0, why: "La lluvia (causa) hizo crecer el río (efecto). «Por lo tanto» es un conector de causa-efecto." } },
    { id: "verbos", t: "El verbo: persona y número", p: "Unidad 4",
      s: "Quién hace la acción y cuántos la hacen.",
      body: [
        "Los <b>verbos</b> son palabras que nombran acciones, estados y fenómenos: saltar, ser, llover.",
        "<b>Número:</b> el verbo está en <b>singular</b> si la acción la hace una persona (ella escribe) y en <b>plural</b> si la hacen varias (ellas escriben).",
        "<b>Persona:</b>",
        "<ul><li><b>Primera:</b> la hace quien habla. Yo como, nosotros comemos.</li><li><b>Segunda:</b> la hace quien escucha. Tú comes, ustedes comen.</li><li><b>Tercera:</b> la hacen otras personas. Él come, ellas comen.</li></ul>"
      ],
      ej: ["«Nosotros saltamos» → primera persona del plural.", "«Tú saltas» → segunda persona del singular."],
      rec: "Fíjate en la terminación del verbo: te dice quién y cuántos.",
      q: { pre: "«Ellos juegan fútbol.» ¿En qué persona y número está el verbo?", ops: ["Primera persona, singular", "Tercera persona, plural", "Segunda persona, plural"], ok: 1, why: "«Ellos» son otras personas (tercera) y son varios (plural)." } },
    { id: "uso-h", t: "Uso de la h", p: "p. 120",
      s: "Familias de palabras que se escriben con h.",
      body: [
        "La <b>h</b> no suena, por eso hay que aprender en qué palabras va. Una ayuda son las <b>familias de palabras</b>: si la palabra base lleva h, sus derivadas también.",
        "<ul><li>Familia de <b>humano</b>: humanidad, humanitario, humanismo.</li><li>Familia de <b>humo</b>: humear, ahumar, humareda, humeante. (Viene del latín <i>fumus</i>; por eso algunas palabras conservan la f: fumar, perfumar, esfumarse.)</li><li>Familia de <b>humor</b>: humorístico, humedad, húmedo.</li></ul>",
        "Regla general: se escriben con h las palabras que empiezan por <b>hum-</b> seguido de vocal: humo, húmedo, humilde."
      ],
      ej: ["«La humareda salía de la chimenea.»", "«Hay mucha humedad en la Amazonía.»"],
      rec: "Si dudas, busca la palabra base de la familia.",
      q: { pre: "¿Cuál está bien escrita?", ops: ["umano", "humano", "jumano"], ok: 1, why: "Las palabras que empiezan por hum- + vocal llevan h: humano." } },
    { id: "homofonas", t: "Palabras homófonas", p: "p. 121",
      s: "Suenan igual, se escriben distinto y significan otra cosa.",
      body: [
        "Las <b>palabras homófonas</b> tienen la <b>misma pronunciación</b>, pero se escriben diferente y tienen distinto significado.",
        "<div class='word-table-wrap'><table class='word-table'><thead><tr><th>Palabra</th><th>Significado</th><th>Palabra</th><th>Significado</th></tr></thead><tbody><tr><td>hola</td><td>saludo</td><td>ola</td><td>onda del mar</td></tr><tr><td>hierba</td><td>planta</td><td>hierva</td><td>del verbo hervir</td></tr><tr><td>coser</td><td>unir con hilo</td><td>cocer</td><td>cocinar con fuego</td></tr><tr><td>tuvo</td><td>del verbo tener</td><td>tubo</td><td>pieza hueca y alargada</td></tr><tr><td>vaso</td><td>recipiente para beber</td><td>bazo</td><td>órgano del cuerpo</td></tr><tr><td>grave</td><td>serio, de cuidado</td><td>grabe</td><td>del verbo grabar</td></tr><tr><td>uso</td><td>acción de usar</td><td>huso</td><td>instrumento para hilar</td></tr><tr><td>hecho</td><td>del verbo hacer</td><td>echo</td><td>del verbo echar</td></tr></tbody></table></div>",
        "Para elegir la correcta, piensa en el <b>significado</b> de la oración."
      ],
      ej: ["«Cuando <b>hierva</b> la sopa, pon la sal.»", "«La vaca come <b>hierba</b>.»"],
      rec: "Homófonas: mismo sonido, distinta escritura, distinto significado.",
      q: { pre: "Completa: «Voy a ___ el botón de mi camisa.»", ops: ["coser", "cocer"], ok: 0, why: "Coser es unir con hilo. Cocer es cocinar." } }
  ]},
  { name: "Literatura", topics: [
    { id: "poesia-humor", t: "Cantar y recitar con humor", p: "pp. 122-127",
      s: "Poemas divertidos para leer, cantar y declamar.",
      body: [
        "Un <b>poema</b> expresa emociones y sentimientos. Está escrito en <b>versos</b> (líneas cortas) que se agrupan en <b>estrofas</b>, y suele tener <b>rima</b>. Las canciones son, muchas veces, poemas con música.",
        "Hay poemas escritos para hacernos reír: juegan con rimas repetidas, situaciones absurdas y personajes graciosos.",
        "Lecturas de la unidad: <b>«El quirquincho Cascarilla»</b> (René Gatica), <b>«En el pueblo de Nopuedo»</b>, <b>«La iguana y el perezoso»</b>, <b>«La reina Batata»</b> y <b>«La sinfonía inconclusa en el mar»</b>.",
        "Al declamar, cuida la entonación, el ritmo y los gestos para transmitir el humor."
      ],
      ej: ["«El quirquincho Cascarilla / se empachó con helado de vainilla / y a la sala de la villa / fue llevado en carretilla.» → todos los versos riman en -illa."],
      rec: "Reto: inventa una estrofa nueva con la misma rima en -illa.",
      q: { pre: "En un poema, ¿cómo se llaman las líneas cortas?", ops: ["Párrafos", "Versos", "Capítulos"], ok: 1, why: "Cada línea de un poema es un verso; varios versos forman una estrofa." } }
  ]}
  ]}
];
