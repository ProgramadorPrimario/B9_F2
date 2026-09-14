document.addEventListener('DOMContentLoaded', () => {
    // ==========================================
    // 1. BANCO DE PREGUNTAS (70 PREGUNTAS)
    // ==========================================
    const questions = [
        // --- MATEMÁTICAS (1-14) ---
        {
            id: 1,
            area: "Matemáticas",
            question: "Una tienda aplica un descuento del 20% sobre el precio original de una chaqueta. Si un cliente paga en efectivo, se le otorga un 10% de descuento adicional sobre el valor ya rebajado. Para un artículo con precio inicial P, el costo final en efectivo se calcula como:",
            options: [
                "P × 0,70",
                "P × 0,72",
                "P × 0,30",
                "P − (P × 0,20) − (P × 0,10)"
            ],
            correct: 1,
            explanation: "Descuento del 20% deja el valor en 0,80P. El 10% sobre 0,80P resta 0,08P. Precio final = 0,72P."
        },
        {
            id: 2,
            area: "Matemáticas",
            question: "En una caja hay 5 bolas rojas, 3 bolas azules y 2 bolas verdes. Si se extrae una bola al azar, ¿cuál es la probabilidad de que no sea azul?",
            options: ["3/10", "7/10", "1/2", "4/5"],
            correct: 1,
            explanation: "Casos favorables (no azul) = 5 (rojas) + 2 (verdes) = 7. Probabilidad = 7/10."
        },
        {
            id: 3,
            area: "Matemáticas",
            question: "Un vehículo recorre una distancia d a una velocidad constante v1 durante un tiempo t. Si para el mismo trayecto duplica su velocidad (2v1), el nuevo tiempo t2 será:",
            options: [
                "El doble del tiempo original (2t).",
                "La mitad del tiempo original (t/2).",
                "El mismo tiempo original (t).",
                "El cuádruple del tiempo original (4t)."
            ],
            correct: 1,
            explanation: "La velocidad y el tiempo son inversamente proporcionales (d = v · t). Al duplicar v, el tiempo se reduce a la mitad."
        },
        {
            id: 4,
            area: "Matemáticas",
            question: "Las notas de un grupo de estudiantes son: 3,0; 3,5; 4,0; 4,0; 4,5 y 5,0. Si el profesor decide sumar 0,5 puntos a la nota de cada estudiante, ¿qué sucede con la desviación estándar del conjunto de datos?",
            options: [
                "Aumenta en 0,5.",
                "Se duplica.",
                "Se mantiene exactamente igual.",
                "Disminuye a la mitad."
            ],
            correct: 2,
            explanation: "Sumar una constante a todos los datos desplaza la media, pero no altera la dispersión relativa de los datos."
        },
        {
            id: 5,
            area: "Matemáticas",
            question: "La función que representa el crecimiento de una población de bacterias en función del tiempo t (en horas) es P(t) = 100 · 2^t. ¿Cuántas bacterias habrá al cabo de 4 horas?",
            options: ["800", "1.600", "3.200", "6.400"],
            correct: 1,
            explanation: "P(4) = 100 · 2^4 = 100 · 16 = 1.600."
        },
        {
            id: 6,
            area: "Matemáticas",
            question: "Un terreno rectangular tiene un área de 120 m². Si su largo mide 2 m más que su ancho (x), la ecuación cuadrática que permite determinar sus dimensiones es:",
            options: [
                "x² + 2x − 120 = 0",
                "x² − 2x + 120 = 0",
                "2x² + x − 120 = 0",
                "x² + 2x + 120 = 0"
            ],
            correct: 0,
            explanation: "Área = largo · ancho → (x + 2) · x = 120 → x² + 2x − 120 = 0."
        },
        {
            id: 7,
            area: "Matemáticas",
            question: "Un cilindro tiene un radio r = 3 cm y una altura h = 10 cm. ¿Cuál es su volumen total en términos de π?",
            options: ["30π cm³", "60π cm³", "90π cm³", "180π cm³"],
            correct: 2,
            explanation: "Volumen del cilindro = πr²h = π(3)²(10) = 90π cm³."
        },
        {
            id: 8,
            area: "Matemáticas",
            question: "Un menú ejecutivo permite elegir entre 2 entradas, 3 platos fuertes y 2 postres. ¿Cuántas combinaciones distintas de almuerzo (entrada, plato fuerte y postre) se pueden formar?",
            options: ["7", "10", "12", "16"],
            correct: 2,
            explanation: "Principio de multiplicación: 2 × 3 × 2 = 12."
        },
        {
            id: 9,
            area: "Matemáticas",
            question: "¿Cuál es la pendiente de la recta que pasa por los puntos A(2,5) y B(6,13) en el plano cartesiano?",
            options: ["2", "1/2", "4", "8"],
            correct: 0,
            explanation: "Pendiente m = (y2 − y1) / (x2 − x1) = (13 − 5) / (6 − 2) = 8/4 = 2."
        },
        {
            id: 10,
            area: "Matemáticas",
            question: "Un depósito contiene un líquido que se evapora a razón constante del 5% de su volumen inicial por día. Si inicialmente contenía 800 litros, ¿cuántos litros se habrán evaporado tras 6 días?",
            options: ["40 litros", "240 litros", "560 litros", "200 litros"],
            correct: 1,
            explanation: "Evaporación diaria = 800 × 0,05 = 40 litros. En 6 días = 40 × 6 = 240 litros."
        },
        {
            id: 11,
            area: "Matemáticas",
            question: "En una circunferencia, un ángulo central mide 60°. ¿A cuántos radianes equivale esta medida angular?",
            options: ["π/6", "π/4", "π/3", "π/2"],
            correct: 2,
            explanation: "Conversión: 60° × (π / 180°) = π/3 rad."
        },
        {
            id: 12,
            area: "Matemáticas",
            question: "Un mapa está elaborado a una escala 1:50.000. Si la distancia entre dos municipios en el mapa es de 4 cm, ¿cuál es la distancia real en kilómetros?",
            options: ["2 km", "20 km", "200 km", "0,2 km"],
            correct: 0,
            explanation: "Distancia = 4 cm × 50.000 = 200.000 cm = 2.000 m = 2 km."
        },
        {
            id: 13,
            area: "Matemáticas",
            question: "Si el promedio (media) de cuatro números es 15, y tres de ellos son 10, 12 y 18, ¿cuál es el valor del cuarto número?",
            options: ["15", "20", "25", "18"],
            correct: 1,
            explanation: "Suma total = 15 × 4 = 60. Cuarto número = 60 − (10 + 12 + 18) = 60 − 40 = 20."
        },
        {
            id: 14,
            area: "Matemáticas",
            question: "Al simplificar la expresión algebraica (x² − 9) / (x − 3) para x ≠ 3, se obtiene:",
            options: ["x − 3", "x + 3", "x + 9", "3x"],
            correct: 1,
            explanation: "Diferencia de cuadrados: (x − 3)(x + 3) / (x − 3) = x + 3."
        },

        // --- CIENCIAS NATURALES (15-28) ---
        {
            id: 15,
            area: "Ciencias Naturales",
            question: "En un circuito eléctrico simple impulsado por una batería de voltaje constante V, si se duplica la resistencia R del circuito, ¿qué ocurre con la intensidad de corriente I?",
            options: [
                "Se duplica.",
                "Se reduce a la mitad.",
                "Permanece constante.",
                "Se cuadruplica."
            ],
            correct: 1,
            explanation: "Ley de Ohm (I = V / R). A mayor resistencia con voltaje constante, menor intensidad de corriente."
        },
        {
            id: 16,
            area: "Ciencias Naturales",
            question: "Durante la fotosíntesis, las plantas convierten la energía solar en energía química almacenada en moléculas orgánicas. ¿Cuál es el principal reactivo inorgánico consumido junto con el agua durante este proceso?",
            options: [
                "Oxígeno (O2)",
                "Dióxido de carbono (CO2)",
                "Nitrógeno molecular (N2)",
                "Metano (CH4)"
            ],
            correct: 1,
            explanation: "Ecuación fotosintética: 6CO2 + 6H2O + Luz → C6H12O6 + 6O2."
        },
        {
            id: 17,
            area: "Ciencias Naturales",
            question: "Al calentar una muestra de gas ideal contenida en un recipiente rígido de volumen constante, la presión interna aumenta debido a que:",
            options: [
                "Las moléculas del gas aumentan de tamaño.",
                "La masa total del gas se incrementa.",
                "Aumenta la velocidad media y la frecuencia de colisiones de las moléculas contra las paredes.",
                "Los átomos de gas pierden electrones."
            ],
            correct: 2,
            explanation: "Ley de Gay-Lussac a V constante: la energía cinética media de las moléculas aumenta con T, incrementando la presión."
        },
        {
            id: 18,
            area: "Ciencias Naturales",
            question: "En una población de escarabajos que habitan en rocas oscuras, los individuos negros son menos visibles para las aves depredadoras que los amarillos. Con el paso de las generaciones, se espera que:",
            options: [
                "Aumente la frecuencia del alelo para el color negro por selección natural.",
                "Los escarabajos amarillos muten intencionalmente a color negro.",
                "La población total de escarabajos se extinga por falta de variabilidad.",
                "Disminuya la proporción de escarabajos negros."
            ],
            correct: 0,
            explanation: "La selección natural favorece el fenotipo adaptativo (color negro) que escapa a la depredación."
        },
        {
            id: 19,
            area: "Ciencias Naturales",
            question: "Un estudiante mezcla un compuesto alcalino (NaOH) con un ácido fuerte (HCl) en cantidades estequiométricas. El resultado de esta reacción de neutralización produce:",
            options: [
                "Un ácido aún más concentrado.",
                "Sal (NaCl) y agua (H2O).",
                "Un gas inflamable y precipitado metálico.",
                "Peróxido de hidrógeno puro."
            ],
            correct: 1,
            explanation: "Neutralización ácido-base: NaOH + HCl → NaCl + H2O."
        },
        {
            id: 20,
            area: "Ciencias Naturales",
            question: "Un satélite orbita la Tierra a una altura constante. Aunque la fuerza de gravedad terrestre atrae continuamente al satélite hacia el centro del planeta, este no cae a la superficie debido a que:",
            options: [
                "En el espacio no existe aceleración gravitacional.",
                "Posee una velocidad tangencial suficiente que mantiene una trayectoria en caída libre continua alrededor de la curvatura terrestre.",
                "La atmósfera espacial empuja al satélite hacia arriba.",
                "Su masa es igual a cero en el espacio exterior."
            ],
            correct: 1,
            explanation: "La órbita es un estado de caída libre donde la curvatura de la trayectoria iguala la curvatura de la Tierra."
        },
        {
            id: 21,
            area: "Ciencias Naturales",
            question: "¿En qué fase de la división celular meiótica ocurre el entrecruzamiento o crossing-over, garantizando la variabilidad genética en los gametos?",
            options: ["Anafase II", "Profase I", "Telofase I", "Metafase II"],
            correct: 1,
            explanation: "Durante la Profase I meiótica, los cromosomas homólogos se aparean e intercambian segmentos del material genético."
        },
        {
            id: 22,
            area: "Ciencias Naturales",
            question: "Si se coloca un cubo de hielo a 0°C en un vaso con agua a 25°C en un ambiente aislado, la transferencia de energía térmica ocurre:",
            options: [
                "Desde el hielo hacia el agua hasta congelar todo el fluido.",
                "Desde el agua hacia el hielo hasta alcanzar el equilibrio térmico.",
                "En ambas direcciones simultáneamente con la misma intensidad.",
                "Únicamente hacia el aire exterior sin afectar al agua."
            ],
            correct: 1,
            explanation: "La segunda ley de la termodinámica dicta que el calor fluye de un cuerpo de mayor temperatura a uno de menor temperatura."
        },
        {
            id: 23,
            area: "Ciencias Naturales",
            question: "Un elemento químico posee número atómico Z = 11 y número másico A = 23. Esto indica que un átomo neutro de este elemento contiene:",
            options: [
                "11 protones, 12 neutrones y 11 electrones.",
                "11 protones, 23 neutrones y 12 electrones.",
                "23 protones, 11 neutrones y 23 electrones.",
                "12 protones, 11 neutrones y 11 electrones."
            ],
            correct: 0,
            explanation: "Protones = Z = 11. Electrones (átomo neutro) = 11. Neutrones = A − Z = 23 − 11 = 12."
        },
        {
            id: 24,
            area: "Ciencias Naturales",
            question: "El fenómeno ondulatorio en el cual una onda cambia de dirección y velocidad al pasar de un medio material a otro con diferente densidad se conoce como:",
            options: ["Difracción", "Reflexión", "Refracción", "Interferencia"],
            correct: 2,
            explanation: "Refracción es el cambio de dirección y velocidad de una onda al cambiar de medio de propagación."
        },
        {
            id: 25,
            area: "Ciencias Naturales",
            question: "¿Cuál de los siguientes vasos sanguíneos transporta sangre rica en oxígeno desde los pulmones de regreso al corazón humano?",
            options: [
                "Arteria pulmonar",
                "Vena cava superior",
                "Venas pulmonares",
                "Arteria aorta descendente"
            ],
            correct: 2,
            explanation: "Las venas pulmonares son las únicas venas que conducen sangre oxigenada desde los pulmones a la aurícula izquierda."
        },
        {
            id: 26,
            area: "Ciencias Naturales",
            question: "Un catalizador químico se adiciona a una reacción industrial con el propósito primario de:",
            options: [
                "Aumentar la cantidad final del producto obtenido.",
                "Reducir la energía de activación, incrementando la velocidad de reacción.",
                "Elevar la temperatura del sistema de forma espontánea.",
                "Consumirse por completo en la formación de los reactivos."
            ],
            correct: 1,
            explanation: "Los catalizadores disminuyen el umbral de energía de activación sin alterarse irreversiblemente ni modificar el rendimiento de equilibrio."
        },
        {
            id: 27,
            area: "Ciencias Naturales",
            question: "Si un haz de luz blanca incide sobre un prisma de cristal y se divide en sus diferentes colores componentes (rojo, naranja, amarillo, verde, azul, violeta), este proceso se denomina:",
            options: [
                "Polarización",
                "Dispersión cromática",
                "Eco acústico",
                "Resonancia magnética"
            ],
            correct: 1,
            explanation: "La dispersión cromática ocurre porque el índice de refracción varía levemente según la longitud de onda de cada color."
        },
        {
            id: 28,
            area: "Ciencias Naturales",
            question: "La deforestación acelerada de las cuencas hidrográficas altera el ciclo hidrológico local debido a que reduce directamente:",
            options: [
                "La evaporación marina.",
                "La transpiración vegetal y la capacidad de infiltración del suelo.",
                "La radiación solar incidente.",
                "La gravedad sobre el agua de escorrentía."
            ],
            correct: 1,
            explanation: "Las plantas absorben e infiltran agua e impulsan la evapotranspiración; sin cobertura forestal se pierde esta regulación hidrológica."
        },

        // --- LECTURA CRÍTICA (29-42) ---
        {
            id: 29,
            area: "Lectura Crítica",
            readingText: "«El concepto de privación digital voluntaria ha ganado terreno como una respuesta crítica frente al imperio de las notificaciones continuas. No se trata de un rechazo luddita a la tecnología en sí misma, sino de un intento consciente por reconquistar la soberanía sobre la atención humana. La economía de la atención, diseñada minuciosamente por las grandes plataformas, monetiza cada segundo que mantenemos la mirada fija en la pantalla, transformando nuestro enfoque cognitivo en una mercancía fragmentada. Desconectarse periódicamente no representa un retroceso romántico hacia el pasado, sino una estrategia política de resistencia individual para preservar la profundidad del pensamiento analítico.»",
            question: "A partir del Texto I, se deduce que la \"economía de la atención\" se basa operativamente en:",
            options: [
                "La venta directa de dispositivos tecnológicos de alta gama.",
                "Capturar la atención sostenida de los usuarios para rentabilizarla.",
                "La enseñanza de programación informática a jóvenes.",
                "Eliminar el consumo de redes sociales mediante leyes estatales."
            ],
            correct: 1,
            explanation: "El texto señala expresamente que esta economía monetiza cada segundo que el usuario mantiene la mirada en la pantalla."
        },
        {
            id: 30,
            area: "Lectura Crítica",
            readingText: "«El concepto de privación digital voluntaria ha ganado terreno como una respuesta crítica frente al imperio de las notificaciones continuas. No se trata de un rechazo luddita a la tecnología en sí misma, sino de un intento consciente por reconquistar la soberanía sobre la atención humana. La economía de la atención, diseñada minuciosamente por las grandes plataformas, monetiza cada segundo que mantenemos la mirada fija en la pantalla, transformando nuestro enfoque cognitivo en una mercancía fragmentada. Desconectarse periódicamente no representa un retroceso romántico hacia el pasado, sino una estrategia política de resistencia individual para preservar la profundidad del pensamiento analítico.»",
            question: "La afirmación del autor respecto a que la desconexión \"no es un rechazo luddita\" cumple la función argumentativa de:",
            options: [
                "Demonstrar que la tecnología actual carece de fallas técnicas.",
                "Aclarar que la postura defendida no implica un odio irreflexivo hacia el avance tecnológico.",
                "Calificar a los usuarios de teléfonos inteligentes como personas sin criterio.",
                "Exigir el cierre inmediato de las empresas de telecomunicaciones."
            ],
            correct: 1,
            explanation: "Al matizar que no es 'luddita' (movimiento histórico opuesto a la tecnología), aclara que no busca destruir la tecnología sino reevaluar su uso."
        },
        {
            id: 31,
            area: "Lectura Crítica",
            readingText: "«El concepto de privación digital voluntaria ha ganado terreno como una respuesta crítica frente al imperio de las notificaciones continuas. No se trata de un rechazo luddita a la tecnología en sí misma, sino de un intento consciente por reconquistar la soberanía sobre la atención humana. La economía de la atención, diseñada minuciosamente por las grandes plataformas, monetiza cada segundo que mantenemos la mirada fija en la pantalla, transformando nuestro enfoque cognitivo en una mercancía fragmentada. Desconectarse periódicamente no representa un retroceso romántico hacia el pasado, sino una estrategia política de resistencia individual para preservar la profundidad del pensamiento analítico.»",
            question: "¿Cuál de los siguientes enunciados sintetiza de forma más precisa la tesis central del Texto I?",
            options: [
                "La tecnología digital destruyó de forma irreversible la capacidad cognitiva del ser humano moderno.",
                "La desconexión digital voluntaria es un mecanismo para proteger la capacidad de atención frente a la explotación comercial.",
                "Los teléfonos móviles deben ser prohibidos en espacios de trabajo y educación.",
                "El pensamiento analítico es incompatible con el desarrollo económico de las naciones."
            ],
            correct: 1,
            explanation: "Resume la idea central: la desconexión es una estrategia de resistencia para preservar la atención frente a la explotación comercial."
        },
        {
            id: 32,
            area: "Lectura Crítica",
            question: "Considere la frase: «El juez se mostró inflexible ante las súplicas del acusado; no obstante, concedió un receso para evaluar los peritajes aportados a última hora.» El conector \"no obstante\" introduce en el texto un sentido de:",
            options: [
                "Causa antecedente",
                "Concesión o matiz de oposición",
                "Conclusión matemática",
                "Temporalidad simultánea"
            ],
            correct: 1,
            explanation: "'No obstante' es un conector adversativo/concesivo que introduce un matiz de oposición respecto a la inflexibilidad expresada previamente."
        },
        {
            id: 33,
            area: "Lectura Crítica",
            question: "En un debate sobre planeación urbana, un participante afirma: «No debemos escuchar las propuestas del arquitecto sobre las nuevas ciclorrutas, porque él no utiliza bicicleta para ir a su trabajo.» ¿Qué falacia lógica comete el participante?",
            options: [
                "Falacia Ad Hominem (Ataque a la persona)",
                "Falacia Ad Populum (Apelación a la multitud)",
                "Falacia de Falsa Causa",
                "Falacia de Hombre de Paja"
            ],
            correct: 0,
            explanation: "Ataca la condición personal del arquitecto (no usar bicicleta) en lugar de refutar la validez técnica de su propuesta urbana (Ad Hominem)."
        },
        {
            id: 34,
            area: "Lectura Crítica",
            question: "Un texto cuya estructura formal presenta una definición clara, expone clasificaciones sistemáticas y ofrece ejemplos explicativos sin emitir juicios de valor ni buscar convencer al lector de una opinión, se clasifica funcionalmente como:",
            options: ["Argumentativo", "Expositivo", "Narrativo ficcional", "Poético expresivo"],
            correct: 1,
            explanation: "Los textos expositivos se caracterizan por informar ordenadamente datos, clasificaciones y conceptos de forma objetiva."
        },
        {
            id: 35,
            area: "Lectura Crítica",
            question: "Lea el siguiente fragmento: «Las luces del puerto titilaban en la lejanía mientras el muelle crujía bajo el peso de la niebla espesa. El viejo marinero ajustó su abrigo de lana desgastada y contempló en silencio el horizonte oscuro.» El recurso predominante empleado por el autor es:",
            options: [
                "La descripción detallada con matices sensoriales.",
                "La argumentación lógica basada en datos duros.",
                "La exposición de axiomas científicos.",
                "El diálogo directo entre múltiples personajes."
            ],
            correct: 0,
            explanation: "El pasaje apela a imágenes visuales, auditivas y táctiles para recrear una atmósfera específica."
        },
        {
            id: 36,
            area: "Lectura Crítica",
            question: "«Si bien la automatización industrial incrementa la eficiencia operativa de las fábricas, la sustitución masiva de mano de obra sin redes de protección social genera tensiones económicas severas.» De este fragmento se concluye que el autor:",
            options: [
                "Apoya incondicionalmente la eliminación de la automatización.",
                "Considera que la eficiencia industrial justifica cualquier costo social.",
                "Reconoce la ventaja técnica de la automatización pero advierte sobre sus impactos sociales negativos.",
                "Afirma que las fábricas automatizadas son menos rentables."
            ],
            correct: 2,
            explanation: "El conector 'Si bien...' le permite ponderar el beneficio de la eficiencia técnica frente al riesgo social no mitigado."
        },
        {
            id: 37,
            area: "Lectura Crítica",
            question: "En la frase «Aquel joven demostró una elocuencia pasmosa durante la asamblea», el término \"elocuencia\" se refiere a:",
            options: [
                "La agresividad gestual al discutir.",
                "La facultad de hablar o escribir de modo eficaz para deleitar o persuadir.",
                "La timidez para expresar pensamientos en público.",
                "El desconocimiento profundo sobre el tema abordado."
            ],
            correct: 1,
            explanation: "Elocuencia es la capacidad lingüística de comunicarse de forma fluida, elegante y persuasiva."
        },
        {
            id: 38,
            area: "Lectura Crítica",
            question: "¿Cuál de los siguientes conectores textuales es el más adecuado para introducir una conclusión basada en argumentos expuestos previamente?",
            options: ["Sin embargo", "Por lo tanto", "En primer lugar", "Por el contrario"],
            correct: 1,
            explanation: "'Por lo tanto' es un conector consecutivo ideal para cerrar deducciones lógicas o conclusiones."
        },
        {
            id: 39,
            area: "Lectura Crítica",
            question: "Un autor escribe una columna titulada «La tiranía del pensamiento positivo», en la cual critica la exigencia social moderna de mostrarse feliz constantemente. La postura principal del autor es probablemente:",
            options: [
                "Defender que las emociones negativas deben reprimirse por completo.",
                "Cuestionar la imposición de una actitud optimista obligatoria que invalida el sufrimiento real.",
                "Promover la tristeza como el único estado emocional válido.",
                "Recomendar el consumo de fármacos para la alegría."
            ],
            correct: 1,
            explanation: "La crítica a la 'tiranía' del optimismo apunta a denunciar la presión por aparentar positividad negando los procesos emocionales legítimos."
        },
        {
            id: 40,
            area: "Lectura Crítica",
            question: "«El Imperio Romano no se derrumbó de la noche a la mañana por una sola invasión; su caída fue el resultado de un largo proceso de erosión institucional, crisis fiscal y presiones migratorias externas.» Según el texto, la caída del Imperio Romano fue:",
            options: [
                "Un evento repentino causado exclusivamente por un ejército enemigo.",
                "Un fenómeno multifactorial desarrollado de forma progresiva a lo largo del tiempo.",
                "Un mito sin fundamento histórico real.",
                "Un proceso provocado únicamente por factores económicos internos."
            ],
            correct: 1,
            explanation: "La lectura enfatiza que no fue de la 'noche a la mañana' ni por 'una sola invasión', sino un proceso de erosión acumulativa multifactorial."
        },
        {
            id: 41,
            area: "Lectura Crítica",
            question: "¿Cuál es la función principal de las comillas (« ») en la oración: El ministro afirmó que la reforma era «un paso indispensable hacia la equidad»?",
            options: [
                "Indicar que la frase es falsa.",
                "Reproducir una cita textual exacta emitida por el sujeto.",
                "Señalar un error ortográfico en la declaración.",
                "Traducir una palabra desde un idioma extranjero."
            ],
            correct: 1,
            explanation: "Cita textual: las comillas encierran las palabras exactas pronunciadas por la persona referida."
        },
        {
            id: 42,
            area: "Lectura Crítica",
            question: "Un artículo académico que evalúa los impactos de un nuevo medicamento incluye gráficos estadísticos, tablas de doble entrada y referencias a ensayos clínicos previos. Estos elementos cumplen la función de:",
            options: [
                "Distraer al lector de las fallas del medicamento.",
                "Dar validez objetiva y soporte empírico a las afirmaciones presentadas.",
                "Cumplir con un requisito puramente estético de edición.",
                "Hacer que el texto parezca una obra de ficción."
            ],
            correct: 1,
            explanation: "El rigor científico exige fundamentar las aseveraciones con datos probatorios e instrumentales."
        },

        // --- SOCIALES Y CIUDADANAS (43-56) ---
        {
            id: 43,
            area: "Sociales y Ciudadanas",
            question: "Durante el siglo XIX en Colombia, las guerras civiles entre los partidos Liberal y Conservador se vieron profundamente motivadas por el debate sobre el modelo de organización territorial del Estado. Este enfrentamiento se dio principalmente entre:",
            options: [
                "Monarquía y República",
                "Centralismo y Federalismo",
                "Anarquismo y Dictadura militar",
                "Socialismo y Feudalismo"
            ],
            correct: 1,
            explanation: "Las guerras decimonónicas colombianas enfrentaron el proyecto centralista (conservador) con el modelo federalista (liberal)."
        },
        {
            id: 44,
            area: "Sociales y Ciudadanas",
            question: "Un municipio decide construir una carretera que atravesará una reserva forestal protegida y habitada por comunidades campesinas. Para resolver el choque entre el desarrollo de infraestructura y la protección ambiental, la Constitución de 1991 establece que se debe:",
            options: [
                "Ejecutar la obra sin consultar a nadie para garantizar el avance económico.",
                "Cancelar el proyecto y prohibir todo tipo de infraestructura en el departamento.",
                "Realizar estudios de impacto ambiental y procesos de consulta participativa con las comunidades afectadas.",
                "Desalojar a los campesinos mediante el uso de la fuerza pública sin indemnización."
            ],
            correct: 2,
            explanation: "La democracia participativa colombiana exige conciliar el desarrollo con la protección ambiental mediante estudios e instancias participativas."
        },
        {
            id: 45,
            area: "Sociales y Ciudadanas",
            question: "El poder legislativo en Colombia está encarnado en el Congreso de la República, el cual es un órgano bicameral compuesto por:",
            options: [
                "La Corte Constitucional y la Corte Suprema",
                "El Senado de la República y la Cámara de Representantes",
                "El Ministerio del Interior y las Alcaldías",
                "La Fiscalía General y la Procuraduría"
            ],
            correct: 1,
            explanation: "El Congreso de la República de Colombia es bicameral: compuesto por el Senado y la Cámara de Representantes."
        },
        {
            id: 46,
            area: "Sociales y Ciudadanas",
            question: "El modelo económico conocido como Sustitución de Importaciones (ISI), aplicado ampliamente en América Latina a mediados del siglo XX, buscaba principalmente:",
            options: [
                "Depender exclusivamente de la compra de productos manufacturados a potencias extranjeras.",
                "Fomentar el desarrollo de la industria nacional para producir internamente los bienes que antes se importaban.",
                "Eliminar todos los impuestos a las mercancías importadas.",
                "Promover únicamente el sector agrícola primario sin industrialización."
            ],
            correct: 1,
            explanation: "La estrategia ISI buscaba reducir la dependencia externa mediante la industrialización local protegida por aranceles."
        },
        {
            id: 47,
            area: "Sociales y Ciudadanas",
            question: "¿Cuál de los siguientes instrumentos constitucionales permite a un grupo de ciudadanos presentar un proyecto de ley directamente ante el Congreso de la República en Colombia?",
            options: ["Plebiscito", "Iniciativa Popular Legislativa", "Acción de Tutela", "Consulta Previa"],
            correct: 1,
            explanation: "La Iniciativa Popular Legislativa es un mecanismo donde los ciudadanos presentan proyectos de ley con respaldo de firmas."
        },
        {
            id: 48,
            area: "Sociales y Ciudadanas",
            question: "La Doctrina de la Seguridad Nacional, promovida en América Latina durante el contexto de la Guerra Fría, influyó fuertemente en:",
            options: [
                "El fortalecimiento de democracias participativas y pacíficas.",
                "La instauración de dictaduras militares orientadas a combatir el avance del comunismo en la región.",
                "La integración de bloques comerciales entre América del Sur y Asia.",
                "La abolición total de las Fuerzas Armadas en el continente."
            ],
            correct: 1,
            explanation: "Bajo la doctrina geopolítica anticomunista respaldada por EE.UU., se impulsaron regímenes militares autoritarios en la región."
        },
        {
            id: 49,
            area: "Sociales y Ciudadanas",
            question: "El concepto de Etnocentrismo en las ciencias sociales se refiere a la tendencia cultural de:",
            options: [
                "Comprender y valorar todas las culturas desde sus propios términos.",
                "Juzgar y evaluar otras culturas utilizando los patrones de la propia cultura como norma superior.",
                "Rechazar las tradiciones locales para adoptar costumbres extranjeras.",
                "Estudiar los fósiles humanos en zonas arqueológicas."
            ],
            correct: 1,
            explanation: "El etnocentrismo juzga otras pautas culturales bajo la premisa de la superioridad del propio grupo."
        },
        {
            id: 50,
            area: "Sociales y Ciudadanas",
            question: "En el marco del Derecho Internacional Humanitario (DIH), la regla de Distinción establece que los actores armados en conflicto deben diferenciar permanentemente entre:",
            options: [
                "Soldados de alto rango y soldados de bajo rango.",
                "Combatientes legítimos y la población civil o bienes protegidos.",
                "Prisioneros de guerra nacionales y extranjeros.",
                "Armas modernas y armas antiguas."
            ],
            correct: 1,
            explanation: "Principio angular del DIH: prohibido dirigir ataques contra la población civil o bienes protegidos de carácter no militar."
        },
        {
            id: 51,
            area: "Sociales y Ciudadanas",
            question: "Un ciudadano considera que la construcción de una fábrica sin filtros ambientales contaminará el río del cual se abastece de agua su municipio. ¿Qué acción constitucional colectiva es la más idónea para proteger el derecho a un ambiente sano?",
            options: ["Acción de Tutela individual", "Acción Popular", "Habeas Data", "Recurso de Reposición"],
            correct: 1,
            explanation: "La Acción Popular protege derechos e intereses colectivos, como la preservación del ambiente sano y el espacio público."
        },
        {
            id: 52,
            area: "Sociales y Ciudadanas",
            question: "La Revolución Industrial iniciada en Gran Bretaña a finales del siglo XVIII trajo consigo profundas transformaciones demográficas, entre las cuales destaca:",
            options: [
                "La migración masiva de la población desde las zonas rurales hacia los centros urbanos industriales.",
                "El abandono total de las ciudades para volver a la agricultura de subsistencia.",
                "La disminución de la población mundial por falta de alimentos.",
                "La desaparición de la clase obrera o proletariado."
            ],
            correct: 0,
            explanation: "La mecanización agrícola y el surgimiento de fábricas provocaron un masivo éxodo rural hacia las urbes industriales."
        },
        {
            id: 53,
            area: "Sociales y Ciudadanas",
            question: "En la Constitución Política de Colombia, la función primordial de la Corte Constitucional es:",
            options: [
                "Investigar penalmente al Presidente y a los ministros.",
                "Velar por la salvaguarda y supremacía de la Constitución Política.",
                "Administrar el presupuesto general de la Nación.",
                "Dirigir las operaciones de la Policía Nacional."
            ],
            correct: 1,
            explanation: "La Corte Constitucional tiene a su cargo la guarda de la integridad y supremacía de la Carta Magna (Art. 241 CP)."
        },
        {
            id: 54,
            area: "Sociales y Ciudadanas",
            question: "El fenómeno conocido como la Gentrificación en las ciudades modernas consiste en:",
            options: [
                "La construcción de viviendas de interés social en el centro histórico.",
                "La transformación urbana de un barrio deteriorado que atrae inversión y residentes de mayor poder adquisitivo, desplazando a los habitantes originales.",
                "El abandono total de los servicios públicos en las zonas de clase alta.",
                "La reforestación masiva de parques urbanos periféricos."
            ],
            correct: 1,
            explanation: "La gentrificación implica la revalorización inmobiliaria de sectores urbanos que desplaza socioeconómicamente a la población autóctona."
        },
        {
            id: 55,
            area: "Sociales y Ciudadanas",
            question: "¿Cuál de las siguientes acciones representa una violación directa al derecho al Debido Proceso de un ciudadano acusado de un delito?",
            options: [
                "Asignarle un defensor público gratuito si no cuenta con recursos para un abogado.",
                "Juzgarlo respetando las leyes preexistentes al acto que se le imputa.",
                "Condenarlo sin permitirle presentar pruebas ni ejercer su defensa legal.",
                "Permitirle apelar la sentencia ante un superior jerárquico."
            ],
            correct: 2,
            explanation: "El Debido Proceso garantiza el derecho irrenunciable a la defensa técnica, a presentar pruebas y a ser oído en juicio legítimo."
        },
        {
            id: 56,
            area: "Sociales y Ciudadanas",
            question: "El histórico conflicto por la tierra en Colombia ha estado fuertemente vinculado a factores como:",
            options: [
                "La equitativa distribución del suelo entre pequeños campesinos desde el siglo XIX.",
                "La alta concentración de la propiedad rural (latifundismo) y el despojo violento de tierras.",
                "La ausencia de actividad agrícola en el territorio nacional.",
                "El exceso de tierras tituladas a comunidades indígenas en las grandes capitales."
            ],
            correct: 1,
            explanation: "La extrema inequidad en la propiedad rural y la desposesión violenta han sido desencadenantes clave del conflicto agrario y armado."
        },

        // --- INGLÉS (57-70) ---
        {
            id: 57,
            area: "Inglés",
            question: "Read the conversation and choose the correct word: \"Where _____ you go for your last summer vacation?\" - \"I went to Cartagena.\"",
            options: ["do", "did", "have", "are"],
            correct: 1,
            explanation: "Use 'did' as an auxiliary verb for simple past questions."
        },
        {
            id: 58,
            area: "Inglés",
            question: "Complete the sentence: \"If it rains tomorrow, we _____ cancel the outdoor picnic.\"",
            options: ["will", "would", "had", "did"],
            correct: 0,
            explanation: "First Conditional structure: If + present simple, ... will + base verb."
        },
        {
            id: 59,
            area: "Inglés",
            question: "Select the option that best completes the phrase: \"She has been studying French _____ three years.\"",
            options: ["since", "for", "during", "ago"],
            correct: 1,
            explanation: "Use 'for' to express a period or duration of time (three years)."
        },
        {
            id: 60,
            area: "Inglés",
            question: "Choose the correct pronoun: \"My brother and I built this wooden table all by _____.\"",
            options: ["myself", "himself", "ourselves", "themselves"],
            correct: 2,
            explanation: "The reflexive pronoun corresponding to 'My brother and I' (we) is 'ourselves'."
        },
        {
            id: 61,
            area: "Inglés",
            question: "Which sign would you most likely see in a public library?",
            options: [
                "PLEASE SILENCE YOUR MOBILE PHONES",
                "FASTEN YOUR SEATBELTS DURING TAKEOFF",
                "SWIMMING PROHIBITED WITHOUT LIFEGUARD",
                "NO PETS ALLOWED ON THE TENNIS COURT"
            ],
            correct: 0,
            explanation: "Silence is mandatory in libraries to preserve an adequate reading environment."
        },
        {
            id: 62,
            area: "Inglés",
            question: "Complete the sentence: \"Although the exam was difficult, she managed to pass it with high marks.\" What is the meaning of \"Although\"?",
            options: ["A pesar de que / Aunque", "Por lo tanto", "Además", "Mientras tanto"],
            correct: 0,
            explanation: "'Although' is a concessive conjunction that translates to 'Aunque' or 'A pesar de que'."
        },
        {
            id: 63,
            area: "Inglés",
            question: "Select the correct comparative form: \"Mount Everest is _____ than K2.\"",
            options: ["high", "higher", "highest", "more high"],
            correct: 1,
            explanation: "For short adjectives like 'high', add '-er' to create the comparative form ('higher')."
        },
        {
            id: 64,
            area: "Inglés",
            question: "Choose the correct sentence in passive voice for: \"The technician repaired the computer yesterday.\"",
            options: [
                "The computer was repaired by the technician yesterday.",
                "The computer is repaired by the technician yesterday.",
                "The technician was repaired by the computer yesterday.",
                "The computer had repaired yesterday by the technician."
            ],
            correct: 0,
            explanation: "Passive voice simple past: Object + was/were + past participle verb."
        },
        {
            id: 65,
            area: "Inglés",
            question: "Complete the sentence: \"I look forward to _____ you at the conference next week.\"",
            options: ["see", "seeing", "seen", "saw"],
            correct: 1,
            explanation: "The phrasal verb 'look forward to' must be followed by a gerund (-ing form)."
        },
        {
            id: 66,
            area: "Inglés",
            question: "Choose the word with the opposite meaning (antonym) of \"ANCIENT\":",
            options: ["Old", "Modern", "Historic", "Traditional"],
            correct: 1,
            explanation: "'Ancient' means extremely old; its direct antonym is 'Modern'."
        },
        {
            id: 67,
            area: "Inglés",
            question: "Select the correct option: \"You _____ wear a helmet while riding a motorcycle; it is mandatory by law.\"",
            options: ["must", "might", "could", "would"],
            correct: 0,
            explanation: "Use 'must' to express strict obligation or legal requirements."
        },
        {
            id: 68,
            area: "Inglés",
            question: "Complete the conditional statement: \"If I had known about the traffic, I _____ earlier.\"",
            options: [
                "would leave",
                "would have left",
                "will leave",
                "had left"
            ],
            correct: 1,
            explanation: "Third Conditional structure: If + past perfect, ... would have + past participle."
        },
        {
            id: 69,
            area: "Inglés",
            question: "Choose the correct definition of the idiom: \"To hit the nail on the head.\"",
            options: [
                "To hurt yourself while working.",
                "To describe exactly what is causing a situation or problem.",
                "To build a house rapidly.",
                "To make a silly mistake in public."
            ],
            correct: 1,
            explanation: "The idiom 'hit the nail on the head' means to be completely accurate or correct."
        },
        {
            id: 70,
            area: "Inglés",
            question: "Complete the sentence: \"Neither Sarah _____ her friends were able to attend the concert.\"",
            options: ["or", "nor", "and", "but"],
            correct: 1,
            explanation: "The correlative conjunction pair is 'Neither ... nor ...'."
        }
    ];

    // ==========================================
    // 2. REFERENCIAS AL DOM
    // ==========================================
    const areaFilter = document.getElementById('area-filter');
    const resetBtn = document.getElementById('reset-btn');
    const questionsContainer = document.getElementById('questions-container');
    const submitBtn = document.getElementById('submit-btn');
    const resultsCard = document.getElementById('results-card');
    const scoreText = document.getElementById('score-text');
    const percentageText = document.getElementById('percentage-text');
    const feedbackMessage = document.getElementById('feedback-message');

    // Estado de respuestas del usuario: { idPregunta: indiceOpcionSeleccionada }
    let userAnswers = {};
    let isEvaluated = false;

    // ==========================================
    // 3. FUNCIONES PRINCIPALES
    // ==========================================

    /**
     * Renderiza las preguntas en el contenedor según el área filtrada
     */
    function renderQuestions() {
        const selectedArea = areaFilter.value;
        questionsContainer.innerHTML = '';

        // Filtrar preguntas
        const filteredQuestions = selectedArea === 'ALL' 
            ? questions 
            : questions.filter(q => q.area === selectedArea);

        if (filteredQuestions.length === 0) {
            questionsContainer.innerHTML = '<p>No hay preguntas disponibles para esta área.</p>';
            return;
        }

        filteredQuestions.forEach((q, index) => {
            const card = document.createElement('article');
            card.className = 'question-card';
            card.dataset.id = q.id;

            // Encabezado de la pregunta
            let html = `
                <div class="question-header">
                    <span class="question-number"><strong>Pregunta ${q.id}</strong> (Vista: ${index + 1}/${filteredQuestions.length})</span>
                    <span class="area-badge">${q.area}</span>
                </div>
            `;

            // Si contiene texto de lectura (Lectura Crítica)
            if (q.readingText) {
                html += `<div class="reading-text">${q.readingText}</div>`;
            }

            // Enunciado de la pregunta
            html += `<p class="question-text"><strong>${q.question}</strong></p>`;

            // Opciones de respuesta
            html += `<div class="options-list">`;
            q.options.forEach((opt, optIndex) => {
                const isChecked = userAnswers[q.id] === optIndex ? 'checked' : '';
                const letter = String.fromCharCode(65 + optIndex); // A, B, C, D
                const disabled = isEvaluated ? 'disabled' : '';

                html += `
                    <label class="option-item">
                        <input type="radio" name="question-${q.id}" value="${optIndex}" ${isChecked} ${disabled}>
                        <span><strong>${letter})</strong> ${opt}</span>
                    </label>
                `;
            });
            html += `</div>`;

            // Cuestión de Retroalimentación (si ya se calificó)
            if (isEvaluated) {
                const userAnswer = userAnswers[q.id];
                const isCorrect = userAnswer === q.correct;
                
                if (userAnswer !== undefined) {
                    const statusClass = isCorrect ? 'correct' : 'incorrect';
                    const statusText = isCorrect ? '¡Correcto!' : 'Incorrecto.';
                    const correctLetter = String.fromCharCode(65 + q.correct);

                    html += `
                        <div class="explanation-box ${statusClass}">
                            <p><strong>${statusText}</strong> Respuesta correcta: <strong>${correctLetter}</strong></p>
                            <p>${q.explanation}</p>
                        </div>
                    `;
                } else {
                    const correctLetter = String.fromCharCode(65 + q.correct);
                    html += `
                        <div class="explanation-box incorrect">
                            <p><strong>Sin responder.</strong> Respuesta correcta: <strong>${correctLetter}</strong></p>
                            <p>${q.explanation}</p>
                        </div>
                    `;
                }
            }

            card.innerHTML = html;
            questionsContainer.appendChild(card);
        });

        // Adjuntar eventos a los radio buttons generados
        attachOptionEvents();
    }

    /**
     * Registra las selecciones de los radio buttons en el objeto userAnswers
     */
    function attachOptionEvents() {
        const radioButtons = questionsContainer.querySelectorAll('input[type="radio"]');
        radioButtons.forEach(radio => {
            radio.addEventListener('change', (e) => {
                if (isEvaluated) return;
                const questionId = parseInt(e.target.name.replace('question-', ''));
                const selectedValue = parseInt(e.target.value);
                userAnswers[questionId] = selectedValue;
            });
        });
    }

    /**
     * Calcula la puntuación total y muestra la tarjeta de resultados
     */
    function evaluateQuiz() {
        let correctCount = 0;
        const totalQuestions = questions.length;

        questions.forEach(q => {
            if (userAnswers[q.id] === q.correct) {
                correctCount++;
            }
        });

        const percentage = Math.round((correctCount / totalQuestions) * 100);

        // Actualizar UI de Resultados
        scoreText.textContent = `${correctCount} / ${totalQuestions}`;
        percentageText.textContent = `${percentage}%`;

        // Mensaje de retroalimentación personalizado
        if (percentage >= 85) {
            feedbackMessage.textContent = "¡Excelente desempeño! Tienes un dominio conceptual muy alto para la prueba ICFES Saber 11°.";
        } else if (percentage >= 60) {
            feedbackMessage.textContent = "¡Buen trabajo! Vas por buen camino, aunque es recomendable repasar las áreas con mayor margen de error.";
        } else {
            feedbackMessage.textContent = "Sigue practicando. Revisa detenidamente cada explicación para reforzar tus conocimientos clave.";
        }

        // Marcar como evaluado y re-renderizar
        isEvaluated = true;
        submitBtn.disabled = true;
        submitBtn.style.opacity = "0.5";
        submitBtn.style.cursor = "not-allowed";

        resultsCard.classList.remove('hidden');
        renderQuestions();

        // Desplazar la vista hacia los resultados
        resultsCard.scrollIntoView({ behavior: 'smooth' });
    }

    /**
     * Reinicia el simulacro al estado inicial
     */
    function resetQuiz() {
        if (confirm("¿Estás seguro de que deseas reiniciar la prueba? Se borrarán tus respuestas actualizadas.")) {
            userAnswers = {};
            isEvaluated = false;
            submitBtn.disabled = false;
            submitBtn.style.opacity = "1";
            submitBtn.style.cursor = "pointer";
            resultsCard.classList.add('hidden');
            areaFilter.value = 'ALL';
            renderQuestions();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    // ==========================================
    // 4. EVENT LISTENERS
    // ==========================================
    areaFilter.addEventListener('change', renderQuestions);
    submitBtn.addEventListener('click', evaluateQuiz);
    resetBtn.addEventListener('click', resetQuiz);

    // Renderizado Inicial
    renderQuestions();
});