const questions = [
  {
    id: 1,
    numero: "Pregunta 1 Matemáticas",
    imagen: "/IMG/imagen-10.png",
    enunciado: `Un barco navega entre dos faros, ubicados en la parte inferior de la figura.`,
    opciones: [
      "A. x = 2 sen(30º) / sen(45º)",
      "B. x = 2 sen(60º) / sen(45º)",
      "C. x = sen(60º) / sen(75º)",
      "D. x = sen(30º) / sen(60º)"
    ],
    respuestaCorrecta: 2,
    
  },
  {
    id: 2,
    numero: "Pregunta 2 Matemáticas",
    imagen: "/IMG/imagen-11.png",
    enunciado: `La tabla presenta la información sobre el gasto en publicidad y las ganancias de una empresa durante los años 2020 a 2022.`,
    opciones: [
      "A. G(p) = 30p + 2.000",
      "B. G(p) = 10p",
      "C. G(p) = 40p",
      "D. G(p) = 40p − 800"
    ],
    respuestaCorrecta: 0,
    
  },
  {
    id: 3,
    numero: "Pregunta 3 Matemáticas",
    imagen: "/IMG/imagen-12.png",
    enunciado: `En una tienda se venden mesas a $ 40.000 y sillas a $ 20.000. El dueño de la tienda olvidó registrar la cantidad total de mesas y sillas que se vendieron, pero sabe que los ingresos por ventas del mes fueron de $ 1.400.000 y que se vendieron 3 veces más sillas que mesas. Para determinar la cantidad vendida de cada artículo, siendo M la cantidad de mesas y S la de sillas vendidas, representó la información con las siguientes ecuaciones:`,
    opciones: [
      "A. No, porque aunque la ecuación 1 relaciona cada precio con la variable adecuada de forma correcta, la ecuación 2 significa que se venden 3 veces más mesas que sillas.",
      "B. Sí, porque la ecuación 1 relaciona cada precio con la variable adecuada y la ecuación 2 tiene en cuenta que la cantidad de sillas es 3 veces mayor que la de mesas.",
      "C. No, porque aunque la ecuación 2 tiene en cuenta que la cantidad de sillas es 3 veces mayor que la de mesas, en la ecuación 1 los precios deberían estar dividiendo y no multiplicando.",
      "D. Sí, porque al solucionar las dos ecuaciones se obtiene un número entero, lo cual es consistente con las condiciones iniciales del problema."
    ],
    respuestaCorrecta: 0,
    
  },
  {
    id: 4,
    numero: "Pregunta 4 Matemáticas",
    imagen: "/IMG/imagen-13.png",
    enunciado: `La línea punteada en la figura muestra un corte realizado a un triángulo. El corte es paralelo a la base y corta por la mitad a la altura, h, que es perpendicular a la base.`,
    opciones: [
      "A. 85 cm.",
      "B. 60 cm.",
      "C. 42 cm.",
      "D. 30 cm."
    ],
    respuestaCorrecta: 2,
    
  },
  {
    id: 5,
    numero: "Pregunta 5 Matemáticas",
    imagen: "/IMG/imagen-14.png",
    enunciado: `Un cartabón es una plantilla que se utiliza en dibujo técnico y que tiene forma de triángulo rectángulo escaleno, de modo que su hipotenusa mide el doble del cateto de menor longitud.`,
    opciones: [
      "A. 16 cm.",
      "B. 32/√3 cm.",
      "C. 27 cm.",
      "D. 64/√3 cm."
    ],
    respuestaCorrecta: 1,
    
  },
  {
    id: 6,
    numero: "Pregunta 6 Matemáticas",
    imagen: null,
    enunciado: `El sistema de comunicaciones de un hotel utiliza los dígitos 2, 3, 4 y 5 para asignar un número de extensión telefónica de 4 dígitos diferentes a cada habitación. ¿Cuántas habitaciones del hotel pueden tener extensión telefónica?`,
    opciones: [
      "A. 24.",
      "B. 56.",
      "C. 120.",
      "D. 256."
    ],
    respuestaCorrecta: 0,
    
  },

  {
    id: 7,
    numero: "Pregunta 7 Matemáticas",
    imagen: "/IMG/imagen-15.png",
    enunciado: `A continuación, se muestran los resultados de una encuesta que indagó sobre el parque automotor del transporte intermunicipal en Colombia.`,
    opciones: [
      "A. La mayor parte del parque automotor son automóviles, camionetas y camperos.",
      "B. La mitad del parque automotor corresponde a automóviles, camionetas y camperos.",
      "C. La mayor parte del parque automotor son buses, microbuses y busetas.",
      "D. La mitad del parque automotor corresponde a buses, microbuses y busetas."
    ],
    respuestaCorrecta: 2,
    
  },

  {
    id: 8,
    numero: "Pregunta 8 Matemáticas",
    imagen: null,
    enunciado: `Una prueba atlética tiene un récord mundial de 10,49 segundos y un récord olímpico de 10,50 segundos. ¿Es posible que un atleta registre un tiempo, en el mismo tipo de prueba, que rompa el récord olímpico pero no el mundial?`,
    opciones: [
      "A. Sí, porque puede registrar, por ejemplo, un tiempo de 10,497 segundos, que está entre los dos tiempos récord.",
      "B. Sí, porque puede registrar un tiempo menor que 10,4 y marcaría un nuevo récord",
      "C. No, porque no existe un registro posible entre los dos tiempos récord.    ",
      "D. No, porque cualquier registro menor que el récord olímpico va a ser menor que el récord mundial."
    ],
    respuestaCorrecta: 0,
    
  },
  {
    id: 9,
    numero: "Pregunta 9 Matemáticas",
    imagen: "/IMG/imagen-16.png",
    enunciado: `En una institución educativa hay dos cursos en grado undécimo. El número de hombres y mujeres de cada curso se relaciona en la tabla:`,
    opciones: [
      "A. El número total de estudiantes de grado undécimo",
      "B. El número total de hombres de grado undécimo.",
      "C. El número total de mujeres del curso 11 B.",
      "D. El número total de hombres del curso 11 A."
    ],
    respuestaCorrecta: 0,
    
  },

  {
    id: 10,
    numero: "Pregunta 10 Matemáticas",
    imagen: "/IMG/imagen-17.png",
    enunciado: `En la tabla se presentan las cartas que conforman una baraja de póquer.`,
    opciones: [
      "A. Ser una carta negra y ser un número par.",
      "B. Ser una carta roja y ser de picas.",
      "C. Ser una carta de corazones y ser un número impar",
      "D. Ser una carta roja K y ser de diamantes."
    ],
    respuestaCorrecta: 1,
    
  },

  {
    id: 11,
    numero: "Pregunta 11 Matemáticas",
    imagen: "/IMG/imagen-18.png",
    enunciado: `Un profesor de Matemáticas les pide a sus estudiantes solucionar la siguiente ecuación: \n \n(x + 2)(x + 3) = 5(x + 3). \n\nMaría, Nelson y Óscar realizan, cada uno, los siguientes procedimientos:`,
    opciones: [
      "A. Solo Nelson y Óscar.",
      "B. Solo María y Nelson.",
      "C. Solamente Óscar.",
      "D. Solamente María."
    ],
    respuestaCorrecta: 1,
    
  },

  {
    id: 12,
    numero: "Pregunta 12 Matemáticas",
    imagen: null,
    enunciado: `Un trapecio isósceles es un trapecio cuyos lados no paralelos son congruentes. \n \n En un plano cartesiano se dibuja un trapecio isósceles de modo que el eje y divide al trapecio en dos figuras iguales. \n \n Si las coordenadas de dos de los vértices del trapecio son (−4, 2) y (−2, 8), ¿cuáles son las coordenadas de los otros dos vértices?`,
    opciones: [
      "A. (8, 2) y (2, 4).",
      "B. (2, 8) y (4, 2).",
      "C. (−2, –4) y (−8, −2).",
      "D. (−4, −2) y (−2, −8)."
    ],
    respuestaCorrecta: 1,
    
  },

  {
    id: 13,
    numero: "Pregunta 13 Matemáticas",
    imagen: null,
    enunciado: `Una regla usada en física indica que, para aumentar el nivel de intensidad del sonido en 10 dB (dB es decibelios, la unidad de medida del nivel de intensidad del sonido), es necesario que la intensidad medida se multiplique por 10. Ramiro es el encargado de aumentar en 20 dB la medida del nivel de intensidad del sistema de sonido de un evento y, según su interpretación de la regla, multiplica por 20 la intensidad actual del sistema. ¿Es correcta su interpretación?`,
    opciones: [
      "A. No, porque la regla no considera aumentos de 20 dB, solamente de 10 dB; no hay consideraciones para aumentos mayores.",
      "B. Sí, porque la regla presentada indica que para aumentar en x unidades el nivel de la medida de intensidad se agrega x a la intensidad.",
      "C. No, porque aumentar 20 dB equivale a aumentar 10 dB dos veces, es decir, multiplicar por 10 la intensidad dos veces; en total, multiplicar por 100.",
      "D. Sí, porque el resultado de multiplicar dos veces por 10 la intensidad es multiplicarla por 20; así, se ahorra un paso y obtiene el resultado correcto."
    ],
    respuestaCorrecta: 2,
    
  },

  
  {
    id: 14,
    numero: "Pregunta 14 Matemáticas",
    imagen: null,
    enunciado: `En una bolsa hay 3 bolas rojas, 3 negras y 12 blancas. Una persona afirma que al sacar una bola al azar, los tres colores tienen la misma probabilidad de salir. ¿Es verdadera esta afirmación?`,
    opciones: [
      "A. Sí, pues el número de bolas de cada color no importa.",
      "B. No, pues no se sabe el número total de bolas en la bolsa.",
      "C. No, pues hay más bolas de un color que de los otros dos.",
      "D. Sí, pues las bolas están repartidas de igual manera."
    ],
    respuestaCorrecta: 2,
    
  },

  {
    id: 15,
    numero: "Pregunta 15 Lectura Crítica    ",
    imagen: null,
    enunciado: ` RESPONDE LAS PREGUNTAS 15 A 17 DE ACUERDO \n CON LA SIGUIENTE INFORMACIÓN \nJohnny \n
«Conozco a un tipo». Esta es la frase recurrente que define a Johnny. A secas. Johnny era así, uno le decía: me encantaría multiplicar mis ahorros por mil. Y él: "Conozco a un tipo". Me encantaría viajar a Cuba, comprar unos habanos y volver. ¿Para qué? Para venderlo. "Conozco a un tipo". Me encantaría hacerme un tatuaje. ¿Dónde? En la nuca: "Conozco a un tipo". Me encantaría quedarme acá para siempre. Y ahí Johnny ya no conocía a nadie. Decía: este es un país muy duro. Pero él vivía como un magnate, cambiaba de carro cada seis meses y seguía pagando el mismo leasing; cobraba un subsidio de desempleo que nadie le controlaba y era con eso que pagaba los moteles donde tirábamos, o las langostas que nos comíamos en Key West, o los VIP passes de los bares de salsa a los que le gustaba llevarme en Calle Ocho. Johnny vivía a expensas de su mujer –mitad gringa, mitad ecuatoriana– y compraba hasta los calzoncillos de marca: alimentaba rigurosamente su pequeño sueño americano como si temiera que, si un día se olvidaba de hacerlo, se desplomara a sus pies como un pajarito famélico. 
\n Tomado y adaptado de: García Robayo, M. (2015). Hasta que pase un huracán (p. 36). Laguna Libros.\n 
En el último párrafo del texto, se utiliza la expresión "pajarito famélico" para ilustrar el temor de Johnny respecto a su sueño americano. ¿Cuál de los siguientes adjetivos tiene un significado opuesto al de la palabra "famélico" en ese contexto? `,
    opciones: [
      "A. Magro.",
      "B. Enjuto.",
      "C. Relleno.",
      "D. Esquelético."
    ],
    respuestaCorrecta: 2,
    
  },
  {
    id: 16,
    numero: "Pregunta 16 Lectura Crítica",
    imagen: null,
    enunciado: `El fragmento lo narra`,
    opciones: [
      "A. Un testigo que solo cuenta lo que ve.",
      "B. Johnny, el protagonista.",
      "C. Un personaje de la historia que cuenta lo que le contaron.",
      "D. Alguien que conoce a Johnny."
    ],
    respuestaCorrecta: 3,
    
  },

  {
    id: 17,
    numero: "Pregunta 17 Lectura Crítica",
    imagen: null,
    enunciado: `De acuerdo con la información que brinda del texto, ¿cuál de las siguientes palabras describe mejor a Johnny?`,
    opciones: [
      "A. Vividor.",
      "B. Generoso.",
      "C. Trabajador.",
      "D. Mezquino."
    ],
    respuestaCorrecta: 0,
    
  },

  {
    id: 18,
    numero: "Pregunta 18 Lectura Crítica",
    imagen: null,
    enunciado: `RESPONDE LAS PREGUNTAS 18 Y 19 DE ACUERDO \n CON LA SIGUIENTE INFORMACIÓN \n 
    "Instinto en lugar de lógica" \n
    Cuando llega la hora de poner sus huevos, la avispa Sphex construye una pequeña madriguera para este propósito y sale en la búsqueda de un grillo al cual pica de manera tal que lo paraliza, pero no lo mata. La avispa lleva al grillo a su madriguera, deja sus huevos, cierra la madriguera y luego se va para no volver. Pasado un tiempo, los huevos crecen y la cría de la avispa se alimenta del grillo paralizado que no se descompone debido a que ha permanecido congelado. Para la mente humana, tal rutina tan organizada y aparentemente llena de propósitos lleva consigo un sabor a lógica y de pensamiento. O por lo menos esto es así hasta que conocemos más detalles.\n
    Por ejemplo, la rutina de la avispa consiste en llevar al grillo hacia la madriguera, dejarlo en la entrada, ir adentro a revisar que todo esté bien, salir y luego dejar el grillo adentro. Si, mientras la avispa está dentro de la madriguera haciendo su inspección preliminar, el grillo es movido algunos centímetros de la entrada, entonces la avispa, al salir de la madriguera, volverá a dejar al grillo de nuevo en la entrada, pero no adentro, y repetirá el procedimiento preparatorio de entrar a la madriguera a revisar que todo esté bien. Si, de nuevo, el grillo es movido unos centímetros de la entrada, la avispa llevará otra vez al grillo hacia la entrada y volverá a entrar a la madriguera para revisarla. La avispa nunca piensa en llevar al grillo directamente a su madriguera. En una ocasión, este procedimiento fue repetido cuarenta veces, siempre con el mismo resultado.\n
    Tomado y adaptado de: Woolridge, D. E. (1963). The machinery of the brain (pp. 82-83). McGraw-Hill \n 
    ¿Cuál de las siguientes citas refuerza la idea de que el comportamiento de la avispa Sphex no resulta de un proceso de pensamiento racional?`,
    opciones: [
      "A. “La avispa lleva al grillo a su madriguera, deja sus huevos, cierra la madriguera y luego se va para no volver”.",
      "B. “La avispa nunca piensa en llevar al grillo directamente a su madriguera. En una ocasión, este procedimiento fue repetido cuarenta veces, siempre con el mismo resultado”.",
      "C. “Para la mente humana, tal rutina tan organizada y aparentemente llena de propósitos lleva consigo un sabor a lógica y de pensamiento”.",
      "D. “Por ejemplo, la rutina de la avispa consiste en llevar al grillo hacia la madriguera, dejarlo en la entrada, ir adentro a revisar que todo esté bien, salir y luego dejar el grillo adentro”."
    ],
    respuestaCorrecta: 1,
    
  },

  {
    id: 19,
    numero: "Pregunta 19 Lectura Crítica",
    imagen: null,
    enunciado: `¿Cuál de los siguientes enunciados sintetiza el tema principal del texto?`,
    opciones: [
      "A. El comportamiento aparentemente inteligente de la avispa Sphex",
      "B. El papel de los grillos en la alimentación de las avispas Sphex",
      "C. La avispa Sphex como un caso que prueba la inteligencia animal.",
      "D. Los métodos de crianza y las precauciones de las avispas Sphex."
    ],
    respuestaCorrecta: 0,
    
  },

  {
    id: 20,
    numero: "Pregunta 20 Lectura Crítica",
    imagen: "/IMG/imagen-19.png",
    enunciado: `RESPONDE LAS PREGUNTAS 20 A 22 DE ACUERDO CON EL SIGUIENTE CONTEXTO \n
    De acuerdo con la infografía, ¿en qué momento se requiere efectuar una reanimación cardíaca?
    `,
    opciones: [
      "A. Después de confirmar que la víctima reacciona",
      "B. Después de comprobar que la víctima no tiene pulso. ",
      "C. En el momento en que la víctima muestra problemas de respiración.",
      "D. En el momento en que la víctima está en posición de recuperación."
    ],
    respuestaCorrecta: 1,
    
  },
  {
    id: 21,
    numero: "Pregunta 21 Lectura Crítica",
    imagen: null,
    enunciado: `En caso de que la víctima no respire, ¿qué procedimiento se sugiere en la infografía?`,
    opciones: [
      "A. Saltar al paso 5 (tomar el pulso). ",
      "B. Llamar a un número de emergencias. ",
      "C. Realizar una respiración boca a boca.",
      "D. Llevar a cabo una reanimación cardiopulmonar."
    ],
    respuestaCorrecta: 2,
    
  },

  {
    id: 22,
    numero: "Pregunta 22 Lectura Crítica",
    imagen: null,
    enunciado: `De acuerdo con el propósito de la infografía, ¿cuál de las siguientes es la razón más importante para incluir imágenes?`,
    opciones: [
      "A. Complementar la explicación verbal del procedimiento mediante representaciones gráficas.",
      "B. Ilustrar los diferentes lugares en los que puede llevarse a cabo una reanimación. ",
      "C. Adicionar información que se omite en el texto escrito sobre distintas técnicas de reanimación",
      "D. Incluir ejemplos gráficos que sustituyan la descripción verbal del procedimiento"
    ],
    respuestaCorrecta: 0,
    
  },

  {
    id: 23,
    numero: "Pregunta 23 Lectura Crítica",
    imagen: null,
    enunciado: `RESPONDE LAS PREGUNTAS 23 Y 24 DE ACUERDO
                    CON LA SIGUIENTE INFORMACIÓN\n 
                    "Tratado contra el método"\n
    El conocimiento no consiste en una serie de teorías autoconsistentes que tiende a converger en una perspectiva ideal; no consiste en un acercamiento gradual hacia la verdad. Por el contrario, el conocimiento es un océano, siempre en aumento, de alternativas incompatibles entre sí (y tal vez inconmensurables); toda teoría particular, todo cuento de hadas, todo mito, forman parte del conjunto que obliga al resto a una articulación mayor, y todos ellos contribuyen, por medio de este proceso competitivo, al desarrollo de nuestro conocimiento. No hay nada establecido para siempre, ningún punto de vista puede quedar omitido en una explicación comprehensiva [...]. Expertos y profanos, profesionales y diletantes, forjadores de utopías y mentirosos, todos ellos están invitados a participar en el debate y a contribuir al enriquecimiento de la cultura.\n
    La tarea del científico no ha de ser por más tiempo “la búsqueda de la verdad”, o “la glorificación de Dios”, o “la sistematización de las observaciones” o “el perfeccionamiento de predicciones”. Todas estas cosas no son más que efectos marginales de una actividad a la que se dirige ahora su atención y que consiste en “hacer de la causa más débil la causa más fuerte”, como dijo el sofista, “por ello en apoyar el movimiento de conjunto”.\n
    Tomado y adaptado de: Feyerabend, P. (1986). Tratado contra el método (pp. 14–15). Tecnos \n
    ¿Cuál de las siguientes opciones describe mejor la relación entre el contenido del texto y el título?` ,
    opciones: [
      "A. El texto introduce la propuesta de un nuevo método para la investigación científica, diferente del tradicional",
      "B. El texto ataca diferentes ideas a propósito de qué es aquello en lo que consiste el llamado “método científico”.",
      "C. El texto critica concepciones del conocimiento científico, el cual se ha concebido como resultado de un método.",
      "D. El texto argumenta a favor de la pluralidad de métodos disponibles para que cada ciencia alcance sus verdades."
    ],
    respuestaCorrecta: 2,
    
  },
  {
    id: 24,
    numero: "Pregunta 24 Lectura Crítica",
    imagen: null,
    enunciado: `El autor del texto aplica a la filosofía de la ciencia el principio del liberalismo, según el cual todos los ciudadanos son iguales ante la ley y ante el Estado. De acuerdo con esto, ¿cuál de las siguientes afirmaciones refleja de manera más directa la influencia de las ideas liberales?`,
    opciones: [
      "A. La tarea del científico no ha de ser por más tiempo la glorificación de Dios.",
      "B. Toda teoría particular, todo cuento de hadas, todo mito, forman parte del conocimiento",
      "C. Hacer de la causa más débil la causa más fuerte, por ello en apoyar el movimiento de conjunto.",
      "D. El conocimiento no consiste en una serie de teorías autoconsistentes que tiende a converger en una perspectiva ideal."
    ],
    respuestaCorrecta: 1,
    
  },
  {
    id: 25,
    numero: "Pregunta 25 Lectura Crítica",
    imagen: "/IMG/imagen-20.png",
    enunciado: `RESPONDE LA PREGUNTA 25 DE ACUERDO 
    CON LA SIGUIENTE INFORMACIÓN\n
    En la historieta, el niño intenta justificar el alto precio de la limonada recurriendo a:`,
    opciones: [
      "A. Argumentos absurdos pero consistentes.",
      "B. Un modelo económico fiel a la realidad.",
      "C. Una ley de mercado que no existe.",
      "D. Su propia versión de la economía."
    ],
    respuestaCorrecta: 3,
    
  },
  {
    id: 26,
    numero: "Pregunta 26 Lectura Crítica",
   imagen: "/IMG/imagen-21.png",
    enunciado: `RESPONDE LA PREGUNTA 26 DE ACUERDO CON LA SIGUIENTE INFORMACIÓN\n
    ¿Cuál de los siguientes enunciados describe mejor la caricatura?`,
    opciones: [
      "A. El pueblo hace justicia por su propia mano.",
      "B. El linchamiento de un ángel.",
      "C. Entrevista con el asesino",
      "D. Un ángel bajó del cielo."
    ],
    respuestaCorrecta: 1,
    
  },
  {
    id: 27,
    numero: "Pregunta 27 Lectura Crítica",
    imagen: null,
    enunciado: `RESPONDE LAS PREGUNTAS 27 Y 28 DE ACUERDO
    CON LA SIGUIENTE INFORMACIÓN \n
    "Gran Hermano"\n
    1984 es una novela futurista que tiene lugar en una sociedad totalitaria. Los ciudadanos de esta sociedad son controlados por una figura omnipresente conocida como el Gran Hermano. En el siguiente apartado, un miembro defensor del orden le explica al protagonista el principal propósito del régimen \n
     «No habrá lealtad; no existirá más fidelidad que la que se debe al Partido, ni más amor que el amor al Gran Hermano. No habrá risa, excepto la risa triunfal cuando se derrota a un enemigo. No habrá arte, ni literatura, ni ciencia. No habrá ya distinción entre la belleza y la fealdad. Todos los placeres serán destruidos. Pero siempre, no lo olvides, Winston, siempre habrá el afán de poder, la sed de dominio, que aumentará constantemente y se hará cada vez más sutil. Siempre existirá la emoción de la victoria, la sensación de pisotear a un enemigo indefenso. Si quieres hacerte una idea de cómo será el futuro, figúrate una bota aplastando un rostro humano... incesantemente».\n
     Orwell, G. (2008). 1984. Ediciones Destino.\n
     Teniendo en cuenta la información que brinda el texto, ¿cuál de las siguientes afirmaciones es compatible con las políticas del Partido?`,
    opciones: [
      "A.  El pueblo debe mantenerse unido",
      "B. La individualidad debe ser eliminada.",
      "C. El poder está en ser fiel a uno mismo.",
      "D. Un pueblo ignorante es más poderoso."
    ],
    respuestaCorrecta: 1,
    
  },
  {
    id: 28,
    numero: "Pregunta 28 Lectura Crítica",
    imagen: null,
    enunciado: `En el texto, la frase “figúrate una bota aplastando un rostro humano…incesantemente”`,
    opciones: [
      "A. Explica los planes para el futuro del régimen",
      "B. Ejemplifica las ideas transmitidas al pueblo.",
      "C. Expone el verdadero propósito del sistema de gobierno.",
      "D. Ilustra las condiciones de los ciudadanos bajo el régimen."
    ],
    respuestaCorrecta: 3,
    
  },
  
  {
    id: 29,
    numero: "Pregunta 29 Sociales y Ciudadanas",
    enunciado: `La acción de tutela es un mecanismo que busca la protección inmediata de los derechos fundamentales de los ciudadanos.\n
    ¿En cuál de las siguientes situaciones, se puede presentar una acción de tutela?`,
    opciones: [
      "A. Cuando se vulnera el derecho a la salud, porque está en riesgo la vida de la persona",
      "B. Cuando alguien es expulsado de una agremiación, a pesar de estar al día en sus pagos.",
      "C. Cuando se busca proteger un derecho colectivo de constituir juntas de acción comunal.",
      "D. Cuando se legisla sobre el derecho a la vida y el acceso a un trabajo digno para las personas."
    ],
    respuestaCorrecta: 0,
    
  },
  {
    id: 30,
    numero: "Pregunta 30 Sociales y Ciudadanas",
    enunciado: `En las principales ciudades del mundo moderno está produciéndose un paulatino abandono de las zonas residenciales del centro urbano, al tiempo que las zonas periféricas tienden a un mayor poblamiento. Estas migraciones las realizan personas o familias que tienen ingresos medios y altos\n
    `,
    opciones: [
      "A. El creciente desarrollo de la industria en el centro de las ciudades.",
      "B. La búsqueda de mejor calidad de vida en barrios tranquilos.",
      "C. La escasa oferta de servicios en los barrios del centro de la ciudad.",
      "D. La creciente oferta de vivienda barata en las afueras de la ciudad."
    ],
    respuestaCorrecta: 1,
    
  },
  {
    id: 31,
    numero: "Pregunta 31 Sociales y Ciudadanas",
    enunciado: `La crisis económica que se desató en 1929, en Estados Unidos, también afectó a los países latinoamericanos al reducirse sus exportaciones y, por consiguiente, sus importaciones. Para contrarrestar el efecto de esta crisis, los estados latinoamericanos adoptaron medidas como la sustitución de importaciones.\n
    ¿En qué consiste esta medida?`,
    opciones: [
      "A. En prohibir el ingreso de toda clase de productos extranjeros.",
      "B. En otorgar total libertad de producción, de cambio y de consumo.",
      "C. En producir internamente los bienes que tradicionalmente se traían del exterior.",
      "D. En dejar actuar libremente las leyes de la oferta y la demanda."
    ],
    respuestaCorrecta: 3,
    
  },
  {
    id: 32,
    numero: "Pregunta 32 Sociales y Ciudadanas",
    enunciado: `Algunas tendencias del liberalismo promueven cobrar más impuestos a la parte de la población que posee más recursos, y menos impuestos a aquellas personas que posean menos.\n
    ¿Cuál de las siguientes situaciones está de acuerdo con lo anterior? `,
    opciones: [
      "A. En el país A, la tasa promedio de impuestos es el 33 % del salario de los habitantes.",
      "B. En el país B, el gobierno autoriza aumentar el impuesto del IVA.",
      "C. En el país C, el gobierno quita los subsidios para los servicios públicos.",
      "D. En el país D, el gobierno aumenta los impuestos de patrimonio y renta."
    ],
    respuestaCorrecta: 3,
    
  },
  {
    id: 33,
    numero: "Pregunta 33 Sociales y Ciudadanas",
    enunciado: `El socialismo busca la igualdad social, política y económica\n
    ¿Qué propone el socialismo para alcanzar este propósito?`,
    opciones: [
      "A. Privatizar los medios de producción y lograr desmontar los sindicatos de las empresas transnacionales y multinacionales.",
      "B. impulsar el consumo y la capacidad de endeudamiento de los trabajadores como factores fundamentales para dinamizar la economía",
      "C. Ofrecer bienes y servicios según el esquema de los tratados de libre comercio y la apertura económica de las fronteras nacionales.",
      "D. Lograr la tenencia colectiva de los medios de producción y la consolidación del poder político en las clases trabajadoras."
    ],
    respuestaCorrecta: 3,
    
  },
  {
    id: 34,
    numero: "Pregunta 34 Sociales y Ciudadanas",
    enunciado: `El Consejo Académico de un colegio decidió nombrar como representantes al Consejo Estudiantil a los estudiantes con mejor desempeño académico y de convivencia, en lugar de realizar las elecciones ordinarias.\n
    ¿Qué situación genera esta decisión?`,
    opciones: [
      "A. Que se estimule a los estudiantes a estudiar y ser mejores compañeros.",
      "B. Que se dificulte la disponibilidad de tiempo para el desarrollo normal de las actividades académicas.",
      "C. Que se vulnere el derecho de los estudiantes a tener y utilizar mecanismos de participación.",
      "D. Que se promueva en los estudiantes la comprensión de la importancia del Consejo Estudiantil."
    ],
    respuestaCorrecta: 2,
    
  },
  {
    id: 35,
    numero: "Pregunta 35 Sociales y Ciudadanas",
    enunciado: `El gobierno decidió construir una represa que es indispensable para generar electricidad para todo el país. La represa solo puede construirse en un sitio en el que hay un asentamiento indígena. En principio, al hacer las consultas respectivas con esta comunidad, ellos se negaban a la construcción de la represa. Sin embargo, después de un largo proceso de conciliación con la comunidad, se acordó la construcción de la represa y que los indígenas se asentaran en otro territorio.\n
    Según la Constitución Política de Colombia, ¿cómo procedió el gobierno en esta situación?`,
    opciones: [
      "A. Actuó en contra de los derechos de las comunidades indígenas.",
      "B. Favoreció a la comunidad indígena en contra del interés general.",
      "C. Mostró respeto por la comunidad indígena en función del bien común.",
      "D. Debió hacer una consulta popular para resolver este problema."
    ],
    respuestaCorrecta: 2,
    
  },
 
  {
    id: 36,
    numero: "Pregunta 36 Sociales y Ciudadanas",
    enunciado: `Un profesor universitario sostiene que cuando sus estudiantes mujeres responden a una pregunta, se extienden demasiado en la respuesta. Por esa razón, cuando les pregunta a los estudiantes y algunos levantan la mano para responder, hombres y mujeres por igual, el profesor solo les da la palabra a los hombres.\n
    De acuerdo con la Constitución, ¿el profesor está vulnerando algún derecho?`,
    opciones: [
      "A. No, pues el profesor puede hacer esto porque tiene más experiencia que sus estudiantes.",
      "B. Sí, ya que con su actuación el profesor está vulnerando el derecho a la igualdad.",
      "C. No, pues a pesar de que la actitud del profesor puede ser chocante para algunos, no es discriminatoria.",
      "D. Sí, porque el profesor puede justificar lo que hace si puede probar que las mujeres hablan demasiado."
    ],
    respuestaCorrecta: 1,
    
  },
  {
    id: 37,
    numero: "Pregunta 37 Sociales y Ciudadanas",
    enunciado: `Una compañía petrolera identificó un yacimiento de petróleo en una zona en la que vive una comunidad indígena para la cual extraer el petróleo significa “robarle la sangre a la madre tierra”, y por ello se opone a la explotación del yacimiento. La compañía invirtió muchos recursos en un proceso de diálogo con los representantes de la comunidad, pero fue imposible llegar a un acuerdo. Ante esto, y después de un análisis detenido de las posiciones, el Estado le negó a la empresa el permiso de explotación.\n
    De acuerdo con la Constitución, ¿cuál es la razón que mejor sustenta la decisión del Estado?`,
    opciones: [
      "A. Garantizar el derecho a la igualdad.",
      "B. Garantizar el derecho a la libre asociación.",
      "C. Proteger la diversidad étnica y cultural.",
      "D. Proteger el medio ambiente."
    ],
    respuestaCorrecta: 2,
    
  },
  {
    id: 38,
    numero: "Pregunta 38 Sociales y Ciudadanas",
    enunciado: `La violencia sexual contra las mujeres es un problema mundial. Hace poco tiempo, el jefe de policía de una ciudad muy importante, en un país desarrollado, declaró al respecto: “Para evitar estas situaciones, lo mejor sería que las mujeres dejaran de salir con minifaldas o escotes provocadores a la calle. Así evitarían ser víctimas de acoso o violencia sexual”.\n
    ¿Qué intereses está favoreciendo esta declaración?`,
    opciones: [
      "A. Los de las mujeres, porque está aconsejándoles cómo vestir para no ser víctimas.",
      "B. Los de los policías, porque su función no es la de manejar casos de acoso.",
      "C. Los de los agresores, porque está dándoles una justificación a lo que hacen.",
      "D. Los de la ciudad, porque el acoso sexual afecta la percepción de seguridad."
    ],
    respuestaCorrecta: 2,
    
  },
  {
    id: 39,
    numero: "Pregunta 39 Sociales y Ciudadanas",
    enunciado: `Lea la siguiente lista de problemas:\n
    1. Escasez de recursos naturales no renovables.\n 2. Pertenencia a partidos políticos contrarios.\n 3. Crecimiento demográfico de la población rural.\n4. Distribución desigual de la propiedad de la tierra.\n
    ¿Cuáles de esos problemas son causas del conflicto agrario en Colombia?`,
    opciones: [
      "A. 1 y 3.",
      "B. 1 y 4.",
      "C. 2 y 4.",
      "D. 1 y 2."
    ],
    respuestaCorrecta: 2,
    
  },
  {
    id: 40,
    numero: "Pregunta 40 Sociales y Ciudadanas",
    enunciado: `La Revolución Industrial se debió, entre otras causas, a la invención de la máquina de vapor y la concentración del capital, que permitió adquirir máquinas para producir en masa. Esta revolución produjo cambios en la población, se pasó de la explotación de la tierra a la producción de bienes, del telar familiar a la gran fábrica y de la manufactura a la producción tecnificada.\n
    De acuerdo con lo anterior, ¿cuál de las siguientes afirmaciones es una consecuencia de la revolución industrial?`,
    opciones: [
      "A. El traslado del campo a la ciudad y el surgimiento del proletariado urbano.",
      "B. El crecimiento de la población rural sobre la urbana.",
      "C. El nacimiento de una élite propietaria de la tierra.",
      "D. El desarrollo de un modelo económico para la protección del proletariado."
    ],
    respuestaCorrecta: 0,
    
  },
  {
    id: 41,
    numero: "Pregunta 41 Sociales y Ciudadanas",
    enunciado: `Un estudiante se intoxicó con comida que compró a un vendedor ambulante a la salida del colegio. Por esto, el Consejo Directivo del colegio, con la ayuda de la Policía, logró la expulsión de los vendedores ambulantes del sector.\n
    De los siguientes, ¿cuál sería un efecto de la expulsión de los vendedores?`,
    opciones: [
      "A. El aumento de la inseguridad en las inmediaciones del colegio",
      "B. El aumento de las intoxicaciones alimentarias de los estudiantes en el colegio.",
      "C. La disminución del apoyo de la comunidad al Consejo Directivo y a la Policía.",
      "D. La disminución de los ingresos de las familias que dependían de esas ventas."
    ],
    respuestaCorrecta: 3,
    
  },
  {
    id: 42,
    numero: "Pregunta 42 Sociales y Ciudadanas",
    enunciado: `Considere el siguiente fragmento:\n
    “Con los jefes liberales que en la tarde de la sublevación y el caos habían ido a visitarlo en Palacio bajo las balas y entre los incendios, el presidente Ospina improvisó nuevamente un gobierno de Unidad Nacional, mientras Laureano Gómez, el jefe de su partido, que en vano había pedido el traspaso del poder a una Junta Militar, se iba indignado del país (a la España de Franco). En la Bogotá medio quemada restablecieron el orden las tropas del ejército venidas de Boyacá, pero en provincia los que fueron llamados “nueveabrileños” empezaron a levantar la autodefensa liberal vaticinada por Gaitán”.\n
    ¿Qué periodo de la historia política colombiana se representa en este fragmento?`,
    opciones: [
      "A. La Violencia entre 1948 y 1953.",
      "B. El Frente Nacional entre 1958 y 1974.",
      "C. La Patria Boba entre 1810 y 1815.",
      "D. El gobierno de Rojas Pinilla entre 1954 y 1958."
      
    ],
    respuestaCorrecta: 0,
    
  },
  {
    id: 43,
    numero: "Pregunta 43 Ciencias Naturales",
    imagen: "/IMG/imagen-30.png",
    enunciado: `A partir de las cadenas de ARN mensajero se forman las proteínas. En este proceso, por cada tres nucleótidos consecutivos de ARN mensajero se codifica un aminoácido. A continuación, se muestra una secuencia de ARN mensajero.`,
    opciones: [
      "A. 8",
      "B. 18",
      "C. 6",
      "D. 10"
    ],
    respuestaCorrecta: 2,
    
  },
  {
    id: 44,
    numero: "Pregunta 44 Ciencias Naturales",
    imagen: "/IMG/imagen-31.png",
    enunciado: `El salto bungee es un deporte que se practica generalmente en puentes, como se muestra a continuación.`,
    opciones: [
      "A. De energía cinética a potencial elástica.",
      "B. De energía cinética a potencial gravitacional.",
      "C. De energía potencial gravitacional a potencial elástica.",
      "D. De energía potencial gravitacional a cinética."
    ],
    respuestaCorrecta: 3,
    
  },
  {
    id: 45,
    numero: "Pregunta 45 Ciencias Naturales",
    imagen: "/IMG/imagen-32.png",
    enunciado: `Considere la siguiente reacción y las masas molares de reactivos y productos:`,
    opciones: [
      "A. El Cl2, porque reaccionan en su totalidad 210 gramos de Cl2 y queda la mitad de P4 sin reaccionar.",
      "B. El P4, porque su masa en gramos es menor que la del Cl2.",
      "C. El Cl2, porque según la relación estequiométrica siempre se necesitan 6 moles de Cl2, sin importar la cantidad de P4.",
      "D. El P4, porque su masa molar es casi el doble que la del Cl2."
    ],
    respuestaCorrecta: 0,
    
  },
  {
    id: 46,
    numero: "Pregunta 46 Ciencias Naturales",
    imagen: "/IMG/imagen-33.png",
    enunciado: `En un metal que pierde electrones, la cantidad de protones es mayor que la de electrones y, por tanto, la carga total es positiva y se representa con signos +.\n
    Se tienen dos esferas metálicas idénticas: una esfera (1) inicialmente con carga + Q y otra esfera (2) inicialmente neutra. Al ponerlas en contacto y luego separarlas, se observa que las dos esferas quedan con cargas iguales + Q/2, como muestra la figura.\n
    `,
    opciones: [
      "A. De la esfera 2 pasaron electrones hacia la esfera 1",
      "B. De la esfera 2 pasaron protones hacia la esfera 1.",
      "C. De la esfera 1 pasaron electrones hacia la esfera 2",
      "D. De la esfera 1 pasaron protones hacia la esfera 2."
    ],
    respuestaCorrecta: 0,
    
  },
  {
    id: 47,
    numero: "Pregunta 47 Ciencias Naturales",
    imagen: "/IMG/imagen-34.png",
    enunciado: `Un grupo de científicos aisló cepas de la bacteria Streptococcus pneumoniae obtenidas en pacientes enfermos de neumonía, las cultivaron con diferentes antibióticos de prueba y midieron el porcentaje de supervivencia de las cepas. La tabla muestra los resultados.`,
    opciones: [
      "A. A los enfermos de neumonía no deberían recetarles antibióticos, porque la supervivencia de las bacterias es mínima.",
      "B. El Streptococcus pneumoniae es más sensible al antibiótico 4 que a los otros tres antibióticos.",
      "C. Los pacientes enfermos de neumonía pueden sufrir de alergia a los antibióticos y empeorar.",
      "D. El Streptococcus pneumoniae es una bacteria que habita libremente por el aire y puede contaminar a cualquier ser vivo."
    ],
    respuestaCorrecta: 1,
    
  },
  {
    id: 48,
    numero: "Pregunta 48 Ciencias Naturales",
    enunciado: `Una estudiante calentó en una estufa, durante 1 minuto, un litro de agua que inicialmente estaba a 15 °C. La temperatura final del agua fue 17 °C.\n
    Si ahora calienta 2 litros de agua que inicialmente están a 15 °C, en la misma estufa durante un minuto, ¿cuál será la temperatura final de los 2 litros de agua?`,
    opciones: [
      "A. 19 ºC",
      "B. 17 ºC.",
      "C. 16 ºC.",
      "D. 15 ºC."
    ],
    respuestaCorrecta: 2,
    
  },
  {
    id: 49,
    numero: "Pregunta 49 Ciencias Naturales",
    imagen: "/IMG/imagen-35.png",
    enunciado: `En la tabla se muestra la configuración electrónica de un átomo neutro y de un ion de aluminio.`,
    opciones: [
      "A.  Porque el último nivel de energía de su configuración electrónica es 3.",
      "B. Porque tiene 3 electrones menos en su configuración electrónica que el aluminio neutro. ",
      "C. Porque tiene 3 electrones más en su configuración electrónica que el aluminio neutro.",
      "D. Porque el número total de electrones en su configuración electrónica es 3."
    ],
    respuestaCorrecta: 1,
    
  },
   {
    id: 50,
    numero: "Pregunta 50 Ciencias Naturales",
    imagen: "/IMG/imagen-36.png",
    enunciado: `En tres instantes diferentes, un estudiante dibuja el diagrama de cuerpo libre para una piedra que cae en un estanque de agua, como se muestra en la siguiente figura`,
    opciones: [
      "A. Mayor que la del primer instante, porque el peso hace que la piedra se acelere hacia abajo",
      "B. Mayor que la del primer instante, porque el peso de la piedra disminuye cuando la fuerza de resistencia comienza a aumentar.",
      "C. Constante, porque la aceleración de la piedra siempre es igual que la aceleración de la gravedad.",
      "D. Nula, porque después del tercer instante, el peso de la piedra y la fuerza de resistencia se cancelan"
    ],
    respuestaCorrecta: 3,
    
  },
  {
    id: 51,
    numero: "Pregunta 51 Ciencias Naturales",
    imagen: "/IMG/imagen-37.png",
    enunciado: `Un estudiante sopla una pelota por un tubo vertical y esta sube aceleradamente por el tubo, como se muestra en la siguiente figura:`,
    opciones: [
      "A. Porque el peso de la pelota cambia cuando el estudiante sopla aire por el tubo.",
      "B. Porque la fuerza que ejerce el aire que sopla el estudiante es igual que el peso de la pelota",
      "C.  Porque el peso de la pelota es mayor que la fuerza del aire que sopla el estudiante.",
      "D. Porque la fuerza que ejerce el aire que sopla el estudiante es mayor que el peso de la pelota."
    ],
    respuestaCorrecta: 3,
    
  },
  {
    id: 52,
    numero: "Pregunta 52 Ciencias Naturales",
    imagen: "/IMG/imagen-38.png",
    enunciado: `La conductividad de una disolución es la capacidad que tiene esta para conducir la corriente eléctrica. Un estudiante realiza una serie de experimentos para estudiar la conductividad del sulfato de magnesio (MgSO4) disuelto en agua, y obtiene los siguientes resultados:`,
    opciones: [
      "A. La influencia de la temperatura sobre la conductividad",
      "B. El efecto de la conductividad de la disolución sobre la concentración de la sal.",
      "C. La influencia de la carga de los iones sobre la conductividad",
      "D. El efecto de la concentración de la sal sobre la conductividad de la disolución."
    ],
    respuestaCorrecta: 3,
    
  },
  {
    id: 53,
    numero: "Pregunta 53 Ciencias Naturales",
    imagen: "/IMG/imagen-39.png",
    enunciado: `Una estudiante desea conocer las proteínas presentes en la sangre. Para ello, emplea una técnica que las separa de acuerdo con su peso molecular y produce una respuesta en diferentes instantes de tiempo cada vez que una proteína es detectada.\n
    Ella obtiene los resultados mostrados en la siguiente gráfica, en donde cada pico representa una proteína diferente.`,
    opciones: [
      "A. Entre 25 y 35 minutos.",
      "B. Entre 5 y 25 minutos.",
      "C. Entre 35 y 45 minutos.",
      "D. Después de 45 minutos."
    ],
    respuestaCorrecta: 0,
    
  },
  {
    id: 54,
    numero: "Pregunta 54 Ciencias Naturales",
    enunciado: `En una especie de pato se pueden encontrar individuos con cuello corto e individuos con cuello largo. En esta especie hay una mayor cantidad de patos con cuello largo. En un experimento se aparearon una hembra y un macho de cuello largo; de sus hijos 3/4 son de cuello largo y 1/4 son de cuello corto.\n
    Teniendo en cuenta lo anterior, ¿cuál afirmación es correcta sobre el genotipo de los padres?`,
    opciones: [
      "A. Ambos padres eran heterocigotos.",
      "B.  El macho era heterocigoto y la hembra era homocigoto recesivo.",
      "C. El macho era heterocigoto y la hembra era homocigoto dominante.",
      "D. Ambos padres eran homocigotos dominantes."
    ],
    respuestaCorrecta: 0,
    
  },
  {
    id: 55,
    numero: "Pregunta 55 Ciencias Naturales",
    imagen: "/IMG/imagen-40.png",
    enunciado: `a estudiante realiza diferentes ensayos con el objetivo de determinar el efecto de laconcentración de los reactivos sobre la velocidad de formación de Z en la reacción X + Y → Z. En cada ensayo mide la velocidad de formación de Z manteniendo constante la concentración de uno de los reactivos y variando la del otro, como se muestra en las siguientes gráficas:`,
    opciones: [
      "A.  El cambio de la velocidad de formación de Z no depende de la concentración de los reactivos.",
      "B. El cambio de la velocidad de formación de Z depende de la concentración de ambos reactivos.",
      "C. El cambio de la velocidad de formación de Z depende solamente de la concentración de X.",
      "D. El cambio de la velocidad de formación de Z depende solamente de la concentración de Y."
    ],
    respuestaCorrecta: 2,
    
  },
  {
    id: 56,
    numero: "Pregunta 56 Ciencias Naturales",
    enunciado: `En las células animales, los lisosomas son los organelos encargados de digerir con enzimas los nutrientes que la célula consume. Si todos los lisosomas de una célula se rompieran, ¿qué le sucedería inicialmente a la célula?`,
    opciones: [
      "A. Se degradarían moléculas en su interior",
      "B. Perdería toda el agua del citoplasma.",
      "C. No habría respiración celular.",
      "D. No se formarían proteínas."
    ],
    respuestaCorrecta: 0,
    
  },
  {
    id: 57,
    numero: "Pregunta 57 Inglés",
    imagen: "/IMG/imagen-43.png",
    enunciado: `Responde segun el texto, las preguntas 57 a 63\n
    James Salter played an important part in the making of movies`,
    opciones: [
      "A. from 1960 to 1979.",
      "B. in 1957.",
      "C. after 1997",
    ],
    respuestaCorrecta: 0,
    
  },
  {
    id: 58,
    numero: "Pregunta 58 Inglés",
    imagen: "/IMG/imagen-43.png",
    enunciado: ` Passionate Falsehoods is`,
    opciones: [
      "A. a newspaper",
      "B. a play",
      "C. a movie.",

    ],
    respuestaCorrecta: 2,
    
  },
  {
    id: 59,
    numero: "Pregunta 59 Inglés",
    imagen: "/IMG/imagen-43.png",
    enunciado: `Salter had nice and difficult times when he was`,
    opciones: [
      "A. an actor.",
      "B. making movies.",
      "C. in a different city.",
    ],
    respuestaCorrecta: 1,
    
  },
  {
    id: 60,
    numero: "Pregunta 60 Inglés",
    imagen: "/IMG/imagen-43.png",
    enunciado: `The Last Book was written by`,
    opciones: [
      "A. James Salter.",
      "B. Deborah Treisman",
      "C.  Nick Paumgarten.",
    ],
    respuestaCorrecta: 2,
    
  },
   {
    id: 61,
    numero: "Pregunta 61 Inglés",
    imagen: "/IMG/imagen-43.png",
    enunciado: `James Salter thinks that his work in the cinema business was`,
    opciones: [
      "A.not useful. ",
      "B. not hard.",
      "C. not usual.",
    ],
    respuestaCorrecta: 0,
    
  },
  {
    id: 62,
    numero: "Pregunta 62 Inglés",
    imagen: "/IMG/imagen-43.png",
    enunciado: `Reading about James Salter’s years in the cinema could be`,
    opciones: [
      "A. clever enough.",
      "B. just fair.",
      "C. quite interesting.",
    ],
    respuestaCorrecta: 2,
    
  },
  
  {
    id: 63,
    numero: "Pregunta 63 Inglés",
    imagen: "/IMG/imagen-43.png",
    enunciado: `The Last Book can be found`,
    opciones: [
      "A.in museums. ",
      "B. at a coffe.",
      "C. on the web.",
    ],
    respuestaCorrecta: 2,
    
  },
  {
    id: 64,
    numero: "Pregunta 64 Inglés",
    imagen: "/IMG/imagen-45.png",
    enunciado: `Responde segun el cartel`,
    opciones: [
      "A. on a plane",
      "B. on a bus",
      "C. on a boat",
    ],
    respuestaCorrecta: 1,
    
  },
  {
    id: 65,
    numero: "Pregunta 65 Inglés",
    imagen: "/IMG/imagen-46.png",
    enunciado: `Responde segun el cartel`,
    opciones: [
      "A. in a house",
      "B. in a shop",
      "C. in a zoo",
    ],
    respuestaCorrecta: 1,
    
  },
  {
    id: 66,
    numero: "Pregunta 66 Inglés",
    imagen: "/IMG/imagen-47.png",
    enunciado: `Responde segun el cartel`,
    opciones: [
      "A. on a stool",
      "B. on a computer",
      "C. on a bookshelf",
    ],
    respuestaCorrecta: 2,
    
  },
  {
    id: 67,
    numero: "Pregunta 67 Inglés",
    enunciado: `Sige la combersacion\n
    I can’t eat a cold sandwich. It is horrible!`,
    opciones: [
      "A. I hope so.",
      "B. I agree.",
      "C. I am not",
        ],
    respuestaCorrecta: 1,
    
  },
  {
    id: 68,
    numero: "Pregunta 68 Inglés",
    enunciado: `Sige la combersacion\n
     I am going on vacation to Vancouver`,
    opciones: [
      "A. That’s great!",
      "B. I like swimming!",
      "C. You are first!",
    ],
    respuestaCorrecta: 0,
    
  },
  {
    id: 69,
    numero: "Pregunta 69 Inglés",
    enunciado: `Sige la combersacion\n
    It rained a lot last night!`,
    opciones: [
      "A. Did you accept?",
      "B. Did you understand?",
      "C. Did you sleep?",
    ],
    respuestaCorrecta: 2,
    
  },
  {
    id: 70,
    numero: "Pregunta 70 Inglés",
    enunciado: `Grandma, shall I hold those bags for you?`,
    opciones: [
      "A. I’m not afraid!",
      "B.Where are you? ",
      "C. That’s fine.",
    ],
    respuestaCorrecta: 2,
    
  },
  
];

// Estado
let userAnswers = new Array(questions.length).fill(null);
let secondsElapsed = 0;
let timerInterval = null;
let isFinished = false;

// Elementos DOM
const questionsScrollContainer = document.getElementById("questions-scroll-container");
const progressText = document.getElementById("progress-text");
const scoreLive = document.getElementById("score-live");
const progressFill = document.getElementById("progress-fill");
const timerEl = document.getElementById("timer");
const finishSection = document.getElementById("finish-section");
const finishBtn = document.getElementById("finish-btn");
const resultsScreen = document.getElementById("results-screen");

document.addEventListener("DOMContentLoaded", () => {
  startTimer();
  renderAllQuestions();

  finishBtn.addEventListener("click", finishQuiz);
  document.getElementById("restart-btn").addEventListener("click", restartQuiz);
});

function startTimer() {
  timerInterval = setInterval(() => {
    secondsElapsed++;
    const mins = String(Math.floor(secondsElapsed / 60)).padStart(2, '0');
    const secs = String(secondsElapsed % 60).padStart(2, '0');
    timerEl.textContent = `${mins}:${secs}`;
  }, 1000);
}

// Renderiza todas las preguntas en el contenedor vertical
function renderAllQuestions() {
  questionsScrollContainer.innerHTML = "";

  questions.forEach((q, qIndex) => {
    const card = document.createElement("div");
    card.className = "question-card";

    // Encabezado de la pregunta
    const header = document.createElement("div");
    header.className = "question-header";
    header.innerHTML = `<span class="question-number">${q.numero}</span>`;
    card.appendChild(header);

    // Texto de la pregunta
    const text = document.createElement("p");
    text.className = "question-text";
    text.textContent = q.enunciado;
    card.appendChild(text);

    // Imagen opcional
    if (q.imagen) {
      const imgBox = document.createElement("div");
      imgBox.className = "image-container";
      imgBox.innerHTML = `<img src="${q.imagen}" alt="Imagen de pregunta">`;
      card.appendChild(imgBox);
    }

    // Contenedor de opciones
    const optionsDiv = document.createElement("div");
    optionsDiv.className = "options-grid";

    q.opciones.forEach((opcion, optIndex) => {
      const btn = document.createElement("button");
      btn.className = "option-btn";

      const letter = opcion.substring(0, 2);
      const optText = opcion.substring(3);
      btn.innerHTML = `<span class="option-letter">${letter}</span><span>${optText}</span>`;

      // Si ya fue respondida o el examen terminó
      if (userAnswers[qIndex] !== null) {
        btn.disabled = true;
        if (optIndex === q.respuestaCorrecta) {
          btn.classList.add("correct");
        }
        if (userAnswers[qIndex] === optIndex && optIndex !== q.respuestaCorrecta) {
          btn.classList.add("incorrect");
        }
      } else if (isFinished) {
        btn.disabled = true;
      } else {
        btn.addEventListener("click", () => handleSelectOption(qIndex, optIndex));
      }

      optionsDiv.appendChild(btn);
    });
    card.appendChild(optionsDiv);

    // Si ya respondió esta pregunta, mostrar su retroalimentación debajo de las opciones
    if (userAnswers[qIndex] !== null) {
      const isCorrect = userAnswers[qIndex] === q.respuestaCorrecta;
      const fb = document.createElement("div");
      fb.className = `feedback-box ${isCorrect ? 'correct-fb' : 'incorrect-fb'}`;
      
      fb.innerHTML = `
        <div class="feedback-header">
          <i class="fa-solid ${isCorrect ? 'fa-circle-check' : 'fa-circle-xmark'}"></i>
          <span>${isCorrect ? '¡Correcto!' : 'Incorrecto'}</span>
        </div>
        
      `;
      card.appendChild(fb);
    }

    questionsScrollContainer.appendChild(card);
  });

  updateProgress();
}

function handleSelectOption(qIndex, optIndex) {
  if (isFinished) return;
  userAnswers[qIndex] = optIndex;
  renderAllQuestions();
}

function updateProgress() {
  const answeredCount = userAnswers.filter(a => a !== null).length;
  const score = userAnswers.filter((ans, idx) => ans === questions[idx].respuestaCorrecta).length;

  progressText.textContent = `Respondidas: ${answeredCount} de ${questions.length}`;
  scoreLive.textContent = `Aciertos: ${score}`;
  progressFill.style.width = `${(answeredCount / questions.length) * 100}%`;
}

function finishQuiz() {
  isFinished = true;
  clearInterval(timerInterval);
  renderAllQuestions(); // Actualiza para bloquear lo que falte

  // Ocultar lista vertical y mostrar resultados
  questionsScrollContainer.classList.add("hidden");
  finishSection.classList.add("hidden");
  document.querySelector(".progress-container").classList.add("hidden");
  resultsScreen.classList.remove("hidden");

  const score = userAnswers.filter((ans, idx) => ans === questions[idx].respuestaCorrecta).length;
  const percentage = Math.round((score / questions.length) * 100);

  document.getElementById("final-score").textContent = `${score} / ${questions.length}`;
  document.getElementById("final-percentage").textContent = `${percentage}%`;
  document.getElementById("final-time").textContent = timerEl.textContent;
}

function restartQuiz() {
  isFinished = false;
  userAnswers = new Array(questions.length).fill(null);
  secondsElapsed = 0;

  resultsScreen.classList.add("hidden");
  questionsScrollContainer.classList.remove("hidden");
  finishSection.classList.remove("hidden");
  document.querySelector(".progress-container").classList.remove("hidden");

  clearInterval(timerInterval);
  startTimer();
  renderAllQuestions();
}