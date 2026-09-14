// Base de datos completa de las 50 preguntas
const questionsData = [
    // --- MATEMÁTICAS ---
    {
        id: 1,
        area: "Matemáticas",
        question: "Una empresa de transporte cobra una tarifa fija de $4.000 más $1.200 por cada kilómetro recorrido. Si C representa el costo total y x la cantidad de kilómetros, ¿cuál expresión modela correctamente el cobro?",
        options: ["A) C(x) = 4.000x + 1.200", "B) C(x) = 1.200x + 4.000", "C) C(x) = 5.200x", "D) C(x) = 1.200 + 4.000"],
        correct: 1,
        explanation: "La variable dependiente C(x) equivale a la parte variable ($1.200 por cada kilómetro x) más el cargo fijo ($4.000)."
    },
    {
        id: 2,
        area: "Matemáticas",
        question: "La probabilidad de obtener un número par al lanzar un dado estándar y no cargado de 6 caras es:",
        options: ["A) 1/6", "B) 1/2", "C) 1/3", "D) 2/3"],
        correct: 1,
        explanation: "Casos favorables: {2, 4, 6} (3 casos). Casos posibles: 6. Probabilidad = 3/6 = 1/2."
    },
    {
        id: 3,
        area: "Matemáticas",
        question: "Si la base de un rectángulo aumenta en un 20% y la altura se mantiene constante, ¿en qué porcentaje aumenta el área total del rectángulo?",
        options: ["A) 10%", "B) 20%", "C) 40%", "D) 120%"],
        correct: 1,
        explanation: "Área = base × altura. Al pasar la base a 1,2b, el área se incrementa directamente en un 20%."
    },
    {
        id: 4,
        area: "Matemáticas",
        question: "En una muestra estadística sobre salarios de una pequeña empresa se tienen los datos: $1.000.000, $1.200.000, $1.200.000, $1.500.000 y $10.000.000. ¿Cuál medida de tendencia central es más representativa para la mayoría?",
        options: ["A) La media aritmética", "B) La mediana", "C) El rango", "D) La desviación estándar"],
        correct: 1,
        explanation: "Al haber un dato atípico tan alto ($10.000.000), la media se distorsiona. La mediana ($1.200.000) representa mejor la tendencia central."
    },
    {
        id: 5,
        area: "Matemáticas",
        question: "Un estudiante tiene 3 camisas diferentes y 4 pantalones distintos. ¿De cuántas formas diferentes puede vestirse combinando una camisa y un pantalón?",
        options: ["A) 7", "B) 12", "C) 14", "D) 6"],
        correct: 1,
        explanation: "Aplica el principio multiplicativo: 3 camisas × 4 pantalones = 12 combinaciones posibles."
    },
    {
        id: 6,
        area: "Matemáticas",
        question: "En un triángulo rectángulo, los catetos miden 6 cm y 8 cm. ¿Cuál es la longitud de la hipotenusa?",
        options: ["A) 10 cm", "B) 14 cm", "C) 12 cm", "D) 100 cm"],
        correct: 0,
        explanation: "Teorema de Pitágoras: h = √(6² + 8²) = √(36 + 64) = √100 = 10 cm."
    },
    {
        id: 7,
        area: "Matemáticas",
        question: "¿Cuál es el dominio de la función f(x) = 5 / (x - 3) en los números reales?",
        options: ["A) Todos los reales excepto x = 0", "B) Todos los reales excepto x = 3", "C) Todos los reales mayores a 3", "D) Todos los reales positivos"],
        correct: 1,
        explanation: "La división por cero no está definida. Por lo tanto, el denominador x - 3 ≠ 0, lo que implica x ≠ 3."
    },
    {
        id: 8,
        area: "Matemáticas",
        question: "Un tanque de agua se llena a razón constante de 15 litros por minuto. Si inicialmente contenía 50 litros, ¿cuánto tiempo tardará en alcanzar 200 litros?",
        options: ["A) 10 minutos", "B) 13,3 minutos", "C) 15 minutos", "D) 8 minutos"],
        correct: 0,
        explanation: "Volumen faltante: 200 - 50 = 150 litros. Tiempo = 150 / 15 = 10 minutos."
    },
    {
        id: 9,
        area: "Matemáticas",
        question: "La solución del sistema de ecuaciones x + y = 10 y x - y = 4 es:",
        options: ["A) x = 6, y = 4", "B) x = 7, y = 3", "C) x = 8, y = 2", "D) x = 5, y = 5"],
        correct: 1,
        explanation: "Sumando ambas ecuaciones: 2x = 14 → x = 7. Reemplazando x en la primera ecuación: 7 + y = 10 → y = 3."
    },
    {
        id: 10,
        area: "Matemáticas",
        question: "¿Cuál es el volumen de un cubo cuyo lado o arista mide 4 cm?",
        options: ["A) 16 cm³", "B) 64 cm³", "C) 24 cm³", "D) 12 cm³"],
        correct: 1,
        explanation: "El volumen de un cubo se calcula como V = lado³ = 4³ = 64 cm³."
    },

    // --- CIENCIAS NATURALES ---
    {
        id: 11,
        area: "Ciencias Naturales",
        question: "En un ecosistema marino: fitoplancton → zooplancton → peces pequeños → peces grandes. Si una contaminación elimina a la mayoría del zooplancton, ¿cuál es el impacto inmediato?",
        options: ["A) Aumenta el fitoplancton y disminuyen los peces pequeños.", "B) Disminuyen los peces grandes y aumenta el zooplancton.", "C) Aumenta la población de peces pequeños.", "D) No se genera ningún cambio en los niveles tróficos."],
        correct: 0,
        explanation: "Al reducirse el zooplancton, disminuye el consumo de fitoplancton (este aumenta) y se agota el alimento de los peces pequeños (estos disminuyen)."
    },
    {
        id: 12,
        area: "Ciencias Naturales",
        question: "La ley de conservación de la materia establece que en una reacción química realizada en un sistema cerrado:",
        options: ["A) La masa de los reactivos es mayor que la de los productos.", "B) La masa total de los reactivos es igual a la masa total de los productos.", "C) La masa aumenta si se libera energía en forma de calor.", "D) Los átomos se destruyen para crear nuevos elementos."],
        correct: 1,
        explanation: "En reacciones químicas ordinarias, los átomos no se crean ni se destruyen, solo se reordenan."
    },
    {
        id: 13,
        area: "Ciencias Naturales",
        question: "Un objeto se deja caer libremente desde la azotea de un edificio sin resistencia del aire. A medida que cae, sus energías cambian así:",
        options: ["A) La energía cinética aumenta y la energía potencial gravitacional disminuye.", "B) Ambas energías aumentan simultáneamente.", "C) La energía cinética se mantiene constante.", "D) La energía potencial aumenta al acercarse al suelo."],
        correct: 0,
        explanation: "Al perder altura pierde energía potencial (Ep = mgh), pero al ganar velocidad aumenta su energía cinética (Ec = 1/2 m v²)."
    },
    {
        id: 14,
        area: "Ciencias Naturales",
        question: "¿Cuál de las siguientes organelas celulares es la encargada de realizar la respiración celular y producir ATP?",
        options: ["A) Cloroplasto", "B) Mitocondria", "C) Aparato de Golgi", "D) Ribosoma"],
        correct: 1,
        explanation: "La mitocondria es el centro energético metabólico celular donde se realiza el ciclo de Krebs y la síntesis de ATP."
    },
    {
        id: 15,
        area: "Ciencias Naturales",
        question: "Una solución química con una concentración de iones cuya lectura da un pH = 2 se clasifica como:",
        options: ["A) Neutra", "B) Ácida", "C) Básica o alcalina", "D) Inerte"],
        correct: 1,
        explanation: "En la escala de pH (0-14), valores inferiores a 7 indican soluciones ácidas. Un pH de 2 corresponde a un ácido fuerte."
    },
    {
        id: 16,
        area: "Ciencias Naturales",
        question: "Según la Primera Ley de Newton (Inercia), un cuerpo en movimiento rectilíneo uniforme continuará en ese estado a menos que:",
        options: ["A) Se le agote la fuerza interna que lo impulsa.", "B) Actúe sobre él una fuerza neta diferente de cero.", "C) Se reduzca la masa del objeto.", "D) Aumente la gravedad del entorno."],
        correct: 1,
        explanation: "Un objeto mantendrá su estado de reposo o velocidad constante a menos que una fuerza resultante no nula actúe sobre él."
    },
    {
        id: 17,
        area: "Ciencias Naturales",
        question: "Al cruzar dos plantas heterocigotas (Aa) para una característica dominante, la proporción fenotípica esperada es:",
        options: ["A) 50% dominante y 50% recesivo", "B) 75% dominante y 25% recesivo", "C) 100% dominante", "D) 25% dominante y 75% recesivo"],
        correct: 1,
        explanation: "Cruzamiento Aa × Aa origina: AA (25%), Aa (50%), aa (25%). Los fenotipos dominantes (AA + Aa) suman el 75%."
    },
    {
        id: 18,
        area: "Ciencias Naturales",
        question: "El cambio de estado de líquido a gaseoso que ocurre únicamente en la superficie del fluido a cualquier temperatura es:",
        options: ["A) Ebullición", "B) Evaporación", "C) Condensación", "D) Sublimación"],
        correct: 1,
        explanation: "La evaporación es un proceso superficial a cualquier temperatura; la ebullición ocurre en toda la masa del líquido a su punto de ebullición."
    },
    {
        id: 19,
        area: "Ciencias Naturales",
        question: "¿Cuál de las siguientes medidas contribuye directamente a reducir la acumulación de dióxido de carbono (CO₂) atmosférico?",
        options: ["A) Aumentar la ganadería extensiva.", "B) Reforestar bosques con especies nativas.", "C) Incrementar el uso de plantas termoeléctricas a carbón.", "D) Promover el uso individual de vehículos a diésel."],
        correct: 1,
        explanation: "La vegetación fija CO₂ atmosférico mediante la fotosíntesis, actuando como sumidero natural de carbono."
    },
    {
        id: 20,
        area: "Ciencias Naturales",
        question: "La resistencia eléctrica de un conductor metálico de longitud L y área transversal A aumenta cuando:",
        options: ["A) Aumenta el grosor del cable (área A).", "B) Aumenta la longitud del cable (L).", "C) Se disminuye la temperatura del material.", "D) Se reduce la resistividad del material."],
        correct: 1,
        explanation: "La resistencia eléctrica R = ρ(L/A) es directamente proporcional a la longitud L e inversamente proporcional al área A."
    },

    // --- LECTURA CRÍTICA ---
    {
        id: 21,
        area: "Lectura Crítica",
        readingText: "«El científico no busca la verdad absoluta; sabe que sus afirmaciones son provisionales y están sujetas a revisión continua frente a la aparición de nueva evidencia. Lo que distingue a la ciencia no es la infalibilidad de sus conclusiones, sino la rigurosidad de sus métodos de contrastación.»",
        question: "¿Cuál es la tesis principal sostenida por el autor en el texto anterior?",
        options: ["A) La ciencia alcanza verdades indiscutibles mediante el método científico.", "B) La validez del conocimiento científico radica en su carácter revisable y en la rigurosidad de sus métodos.", "C) Los científicos cometen errores frecuentemente al evaluar evidencias.", "D) La ciencia carece de utilidad práctica al no ofrecer certezas absolutas."],
        correct: 1,
        explanation: "El autor fundamenta el valor de la ciencia en su capacidad de autocorrección continua y en el método riguroso de contraste."
    },
    {
        id: 22,
        area: "Lectura Crítica",
        readingText: "«El científico no busca la verdad absoluta; sabe que sus afirmaciones son provisionales y están sujetas a revisión continua frente a la aparición de nueva evidencia...»",
        question: "La palabra 'provisionales' puede reemplazarse sin alterar el sentido del texto por:",
        options: ["A) Definitivas", "B) Temporales", "C) Falsas", "D) Eternas"],
        correct: 1,
        explanation: "Provisional indica algo no definitivo, sujeto a modificaciones o válido de manera temporal."
    },
    {
        id: 23,
        area: "Lectura Crítica",
        question: "Un participante afirma: «Debemos prohibir las computadoras en las aulas porque en el siglo XIX los estudiantes aprendían perfectamente leyendo únicamente libros en papel.» ¿Qué falacia se comete?",
        options: ["A) Ataque personal (Ad Hominem)", "B) Apelación a la tradición o falsa analogía histórica", "C) Generalización apresurada", "D) Argumento de autoridad (Ad Verecundiam)"],
        correct: 1,
        explanation: "Asume que una práctica es superior únicamente por pertenecer a la tradición o al pasado."
    },
    {
        id: 24,
        area: "Lectura Crítica",
        question: "Considere: «A las tres de la tarde el calor sofocante envolvía el pueblo. Las puertas permanecían cerradas y el polvo flotaba en el aire como un fantasma inmóvil.» ¿Cuál es la intención técnica del fragmento?",
        options: ["A) Argumentativa", "B) Descriptiva", "C) Expositiva", "D) Instructiva"],
        correct: 1,
        explanation: "Se emplean recursos sensoriales e imágenes para caracterizar los atributos de un lugar determinado."
    },
    {
        id: 25,
        area: "Lectura Crítica",
        question: "«A pesar de que el informe anunciaba pérdidas económicas cuantiosas, el director sonreía con complacencia.» La relación que marca 'A pesar de que' es de:",
        options: ["A) Causa y efecto", "B) Concesión o contraste", "C) Condición", "D) Explicación"],
        correct: 1,
        explanation: "Es un conector concesivo que presenta un contraste entre un hecho adverso y una acción que ocurre independientemente."
    },
    {
        id: 26,
        area: "Lectura Crítica",
        question: "Un filósofo afirmaba: «La libertad no consiste en hacer lo que queremos, sino en querer lo que podemos hacer.» Se deduce que la libertad implica:",
        options: ["A) Hacer todo lo que sea legalmente permitido.", "B) Ajustar los deseos a las posibilidades reales y actuar de forma consciente.", "C) Actuar sin ningún tipo de restricción física ni moral.", "D) Someterse ciegamente a los mandatos sociales."],
        correct: 1,
        explanation: "Implica alineación consciente entre las expectativas internas y la realidad circundante."
    },
    {
        id: 27,
        area: "Lectura Crítica",
        question: "Un artículo de opinión presenta datos estadísticos, testimonios de expertos y tablas comparativas. La intención del autor con estos recursos es:",
        options: ["A) Entretener al lector con anécdotas.", "B) Respaldar con evidencias sus argumentos y dar solidez a su postura.", "C) Confundir al lector con términos complejos.", "D) Redactar una norma legal de obligatorio cumplimiento."],
        correct: 1,
        explanation: "En los textos argumentativos, las evidencias empíricas y citas de autoridad sustentan la tesis defendida."
    },
    {
        id: 28,
        area: "Lectura Crítica",
        question: "«Ciertamente el azúcar procesada genera picos metabólicos; sin embargo, responsabilizarla de forma exclusiva por los problemas globales de salud simplifica un fenómeno multifactorial.» La postura del autor es:",
        options: ["A) Negar los efectos dañinos del azúcar.", "B) Reconocer el daño del azúcar pero advertir que hay más factores involucrados.", "C) Promover el consumo masivo de azúcares.", "D) Exigir la prohibición total del azúcar."],
        correct: 1,
        explanation: "Acepta el impacto negativo del ingrediente, pero cuestiona los análisis reduccionistas sobre el problema global."
    },
    {
        id: 29,
        area: "Lectura Crítica",
        question: "«En la antigua Grecia, el ágora no era solo un mercado comercial; era el espacio físico de encuentro donde los ciudadanos debatían los asuntos de la polis.» Se concluye que:",
        options: ["A) El comercio no existía en la antigua Grecia.", "B) La vida económica y la política compartían el mismo espacio público.", "C) Solo los comerciantes elegían a los gobernantes.", "D) El debate político estaba prohibido durante las ventas."],
        correct: 1,
        explanation: "El texto explicita que ambas actividades se integraban en el mismo recinto público."
    },
    {
        id: 30,
        area: "Lectura Crítica",
        question: "¿En cuál de las siguientes tipologías textuales es obligatoria la presencia de una tesis y sus argumentos?",
        options: ["A) Un manual de instrucciones", "B) Un ensayo académico", "C) Una noticia periodística objetiva", "D) Una receta de cocina"],
        correct: 1,
        explanation: "El ensayo es por definición un texto argumentativo donde se plantea una posición teórica y se defiende."
    },

    // --- SOCIALES Y CIUDADANAS ---
    {
        id: 31,
        area: "Sociales y Ciudadanas",
        question: "En Colombia, el mecanismo de participación ciudadana convocado por el Presidente para ratificar o rechazar una decisión del Ejecutivo se llama:",
        options: ["A) Plebiscito", "B) Referendo", "C) Consulta Popular", "D) Cabildo Abierto"],
        correct: 0,
        explanation: "El Plebiscito es convocado exclusivamente por el Presidente para someter a aprobación decisiones del Ejecutivo."
    },
    {
        id: 32,
        area: "Sociales y Ciudadanas",
        question: "Inversionistas destacan empleo y energía por una hidroeléctrica; una comunidad indígena señala que inundará sitios sagrados. Esto evidencia:",
        options: ["A) Diferencias en los intereses y visiones de desarrollo de cada grupo.", "B) Falta de presupuesto económico en la región.", "C) Un error técnico en el diseño de las turbinas.", "D) La ausencia total de leyes ambientales en Colombia."],
        correct: 0,
        explanation: "Muestra un choque de proyectos de vida y concepciones del territorio entre actores con intereses divergentes."
    },
    {
        id: 33,
        area: "Sociales y Ciudadanas",
        question: "La división del poder público en las ramas Ejecutiva, Legislativa y Judicial tiene como finalidad principal:",
        options: ["A) Aprobar leyes con mayor rapidez.", "B) Evitar la concentración del poder y garantizar el control mutuo.", "C) Garantizar que el Presidente gobierne sin ninguna limitación.", "D) Eliminar los partidos políticos."],
        correct: 1,
        explanation: "El principio de contrapesos previene abusos de poder garantizando la fiscalización entre las diferentes ramas."
    },
    {
        id: 34,
        area: "Sociales y Ciudadanas",
        question: "El periodo de la historia colombiana conocido como 'La Violencia' (décadas de 1940 y 1950) se caracterizó por:",
        options: ["A) La confrontación armada bipartidista entre seguidores del Partido Liberal y el Partido Conservador.", "B) Una guerra con potencias extranjeras europeas.", "C) El enfrentamiento exclusivo entre sindicatos urbanos y empresas.", "D) Un periodo de paz y crecimiento sin conflictos políticos."],
        correct: 0,
        explanation: "Fue un periodo de enfrentamiento partidista violento desencadenado principalmente tras el asesinato de Jorge Eliécer Gaitán."
    },
    {
        id: 35,
        area: "Sociales y Ciudadanas",
        question: "¿Cuál de los siguientes es un Derecho Fundamental de primera generación (Derechos Civiles y Políticos)?",
        options: ["A) Derecho a la huelga", "B) Derecho a un medio ambiente sano", "C) Derecho a la vida y a la libertad de expresión", "D) Derecho al desarrollo tecnológico"],
        correct: 2,
        explanation: "Los derechos de 1ª generación buscan proteger la autonomía y la vida del individuo frente al poder estatal."
    },
    {
        id: 36,
        area: "Sociales y Ciudadanas",
        question: "El fenómeno de la globalización económica se caracteriza principalmente por:",
        options: ["A) El aislamiento comercial entre los países.", "B) La creciente integración de los mercados globales mediante el comercio y las telecomunicaciones.", "C) La prohibición de las importaciones.", "D) La adopción de una única moneda mundial para todos los países."],
        correct: 1,
        explanation: "Supone la interconexión mundial de cadenas productivas, flujos financieros y bienes comerciales."
    },
    {
        id: 37,
        area: "Sociales y Ciudadanas",
        question: "En Colombia, el mecanismo más rápido para solicitar ante un juez la protección inmediata de un Derecho Fundamental vulnerado es:",
        options: ["A) La Acción de Tutela", "B) La Acción Popular", "C) El Habeas Corpus", "D) La Acción de Cumplimiento"],
        correct: 0,
        explanation: "Consagrada en el Artículo 86 de la Constitución de 1991 para la protección preferente e inmediata de derechos fundamentales."
    },
    {
        id: 38,
        area: "Sociales y Ciudadanas",
        question: "El concepto de Desarrollo Sostenible se define como aquel que:",
        options: ["A) Busca la industrialización a toda costa sin medir el impacto ambiental.", "B) Satisface las necesidades del presente sin comprometer los recursos de las futuras generaciones.", "C) Depende únicamente del uso de combustibles fósiles.", "D) Propone la paralización total de la economía."],
        correct: 1,
        explanation: "Definición estandarizada por la ONU para equilibrar crecimiento económico, equidad social y cuidado ambiental."
    },
    {
        id: 39,
        area: "Sociales y Ciudadanas",
        question: "Durante la Guerra Fría, el mundo se dividió en dos bloques ideológicos y económicos encabezados por:",
        options: ["A) Alemania y Japón", "B) Estados Unidos (Capitalista) y la Unión Soviética (Socialista)", "C) Francia y Gran Bretaña", "D) China y España"],
        correct: 1,
        explanation: "Enfrentamiento geopolítico indirecto entre el bloque occidental liderado por EE.UU. y el bloque oriental liderado por la URSS."
    },
    {
        id: 40,
        area: "Sociales y Ciudadanas",
        question: "¿Cuál de las siguientes situaciones vulnera el principio de Estado Laico en Colombia?",
        options: ["A) Permitir la libertad de cultos en los colegios.", "B) Asignar presupuesto público del Estado para construir exclusivamente templos de una religión específica.", "C) Garantizar que un ciudadano decida no profesar ninguna religión.", "D) Respetar las festividades culturales de distintas comunidades."],
        correct: 1,
        explanation: "El Estado Laico exige estricta neutralidad confesional y prohíbe destinar recursos públicos para favorecer credos en particular."
    },

    // --- INGLÉS ---
    {
        id: 41,
        area: "Inglés",
        question: "Complete the sentence: 'If it rains tomorrow, we ________ the football match.'",
        options: ["A) will cancel", "B) canceled", "C) would cancel", "D) canceling"],
        correct: 0,
        explanation: "First Conditional structure: If + Present Simple (rains), Future Simple (will cancel)."
    },
    {
        id: 42,
        area: "Inglés",
        question: "Complete the sentence: 'She has been living in Bogota ________ 2018.'",
        options: ["A) for", "B) since", "C) during", "D) until"],
        correct: 1,
        explanation: "'Since' is used with the Present Perfect to reference a specific starting point in time."
    },
    {
        id: 43,
        area: "Inglés",
        question: "Where can you usually see this notice? «Please turn off your phones during the movie.»",
        options: ["A) In a library", "B) In a cinema", "C) At a gas station", "D) In a hospital room"],
        correct: 1,
        explanation: "This is a standard safety and courtesy notice displayed inside movie theaters."
    },
    {
        id: 44,
        area: "Inglés",
        question: "Complete the conversation:\nPerson A: 'How often do you exercise?'\nPerson B: '________________________'",
        options: ["A) Yes, I like exercise.", "B) Three times a week.", "C) I exercised yesterday.", "D) In the park."],
        correct: 1,
        explanation: "'How often' explicitly asks about frequency, correctly answered by 'Three times a week'."
    },
    {
        id: 45,
        area: "Inglés",
        question: "Choose the correct word: 'My team is ________ than yours.'",
        options: ["A) gooder", "B) better", "C) best", "D) more good"],
        correct: 1,
        explanation: "'Better' is the irregular comparative form of the adjective 'good'."
    },
    {
        id: 46,
        area: "Inglés",
        question: "What is the opposite (antonym) of the word 'ANCIENT'?",
        options: ["A) Old", "B) Modern", "C) Huge", "D) Traditional"],
        correct: 1,
        explanation: "'Ancient' means extremely old; its direct antonym is 'Modern'."
    },
    {
        id: 47,
        area: "Inglés",
        question: "Select the sentence that is grammatically CORRECT:",
        options: ["A) She don't like vegetables.", "B) She doesn't likes vegetables.", "C) She doesn't like vegetables.", "D) She not like vegetables."],
        correct: 2,
        explanation: "Negative Present Simple for third-person singular requires: Subject + doesn't + Base Verb."
    },
    {
        id: 48,
        area: "Inglés",
        question: "Read the description: 'A professional person who repairs car engines.' Which job is it?",
        options: ["A) Pilot", "B) Mechanic", "C) Chef", "D) Architect"],
        correct: 1,
        explanation: "A 'Mechanic' is a technician responsible for inspecting and repairing machinery and vehicle engines."
    },
    {
        id: 49,
        area: "Inglés",
        question: "Complete the sentence: 'We ________ TV when the lights went out.'",
        options: ["A) were watching", "B) are watching", "C) watch", "D) have watched"],
        correct: 0,
        explanation: "Past Continuous (were watching) describes an ongoing action interrupted by a Past Simple event (went out)."
    },
    {
        id: 50,
        area: "Inglés",
        question: "Complete with the correct quantifier: 'There isn't ________ milk left in the fridge.'",
        options: ["A) any", "B) some", "C) many", "D) a few"],
        correct: 0,
        explanation: "'Any' is required for negative statements when referring to uncountable nouns like 'milk'."
    }
];

// Estado de la aplicación
let selectedAnswers = {};
let isSubmitted = false;

// Elementos del DOM
const container = document.getElementById("questions-container");
const areaFilter = document.getElementById("area-filter");
const submitBtn = document.getElementById("submit-btn");
const resetBtn = document.getElementById("reset-btn");
const resultsCard = document.getElementById("results-card");
const scoreText = document.getElementById("score-text");
const percentageText = document.getElementById("percentage-text");
const feedbackMessage = document.getElementById("feedback-message");

// Inicialización
document.addEventListener("DOMContentLoaded", () => {
    renderQuestions(questionsData);

    areaFilter.addEventListener("change", handleFilter);
    submitBtn.addEventListener("click", gradeQuiz);
    resetBtn.addEventListener("click", resetQuiz);
});

// Renderizar preguntas
function renderQuestions(questions) {
    container.innerHTML = "";

    if (questions.length === 0) {
        container.innerHTML = "<p>No hay preguntas disponibles para esta sección.</p>";
        return;
    }

    questions.forEach((q) => {
        const card = document.createElement("article");
        card.className = "question-card";
        card.id = `q-card-${q.id}`;

        let readingBlock = q.readingText 
            ? `<div class="reading-text">${q.readingText}</div>` 
            : "";

        const optionsHTML = q.options.map((opt, idx) => {
            const isChecked = selectedAnswers[q.id] === idx ? "checked" : "";
            const isDisabled = isSubmitted ? "disabled" : "";
            
            return `
                <label class="option-item">
                    <input type="radio" name="q_${q.id}" value="${idx}" ${isChecked} ${isDisabled} onchange="selectOption(${q.id}, ${idx})">
                    <span>${opt}</span>
                </label>
            `;
        }).join("");

        let explanationHTML = "";
        if (isSubmitted) {
            const userAnswer = selectedAnswers[q.id];
            const isCorrect = userAnswer === q.correct;
            const statusClass = isCorrect ? "correct" : "incorrect";
            const statusLabel = isCorrect ? "¡Correcto!" : "Incorrecto.";

            explanationHTML = `
                <div class="explanation-box ${statusClass}">
                    <strong>${statusLabel}</strong> ${q.explanation}
                </div>
            `;
        }

        card.innerHTML = `
            <div class="question-header">
                <strong>Pregunta ${q.id}</strong>
                <span class="area-badge">${q.area}</span>
            </div>
            ${readingBlock}
            <p class="question-text">${q.question}</p>
            <div class="options-list">
                ${optionsHTML}
            </div>
            ${explanationHTML}
        `;

        container.appendChild(card);
    });
}

// Guardar respuesta seleccionada
function selectOption(questionId, optionIndex) {
    if (isSubmitted) return;
    selectedAnswers[questionId] = optionIndex;
}

// Filtrar por área
function handleFilter() {
    const selectedArea = areaFilter.value;
    if (selectedArea === "ALL") {
        renderQuestions(questionsData);
    } else {
        const filtered = questionsData.filter(q => q.area === selectedArea);
        renderQuestions(filtered);
    }
}

// Calificar el examen
function gradeQuiz() {
    if (isSubmitted) return;

    let totalCorrect = 0;
    const totalQuestions = questionsData.length;

    questionsData.forEach(q => {
        if (selectedAnswers[q.id] === q.correct) {
            totalCorrect++;
        }
    });

    isSubmitted = true;

    // Actualizar interfaz
    const currentFilter = areaFilter.value;
    const activeQuestions = currentFilter === "ALL" 
        ? questionsData 
        : questionsData.filter(q => q.area === currentFilter);
    
    renderQuestions(activeQuestions);

    // Calcular y mostrar puntaje
    const percentage = Math.round((totalCorrect / totalQuestions) * 100);
    scoreText.textContent = `${totalCorrect} / ${totalQuestions}`;
    percentageText.textContent = `${percentage}%`;

    if (percentage >= 80) {
        feedbackMessage.textContent = "¡Excelente desempeño! Tienes un nivel muy sólido para el examen ICFES.";
    } else if (percentage >= 60) {
        feedbackMessage.textContent = "Buen trabajo. Repasa los conceptos explicados en las preguntas falladas para asegurar un mayor puntaje.";
    } else {
        feedbackMessage.textContent = "Sigue practicando. Lee atentamente la justificación de cada respuesta para reforzar tus áreas débiles.";
    }

    resultsCard.classList.remove("hidden");
    submitBtn.classList.add("hidden");
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
}

// Reiniciar examen
function resetQuiz() {
    selectedAnswers = {};
    isSubmitted = false;
    resultsCard.classList.add("hidden");
    submitBtn.classList.remove("hidden");
    areaFilter.value = "ALL";
    renderQuestions(questionsData);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}