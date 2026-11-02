const questions = [
  {
    id: 1,
    numero: "Pregunta 01 Matemáticas",
    imagen: "/IMG/imagen-1-simulacro.png", // Puedes poner una URL de imagen aquí si la necesitas
    enunciado: `Cuatro cursos, cada uno con igual número de estudiantes, presentan anualmente una prueba de matemáticas. La tabla muestra el puntaje promedio obtenido por cada curso.`,
    opciones: [
      "A. Correcta, ya que el promedio de la mayoría de los cursos aumentó respecto al año anterior.",
      "B. Incorrecta, ya que el promedio total en el año anterior es superior al promedio total en el año actual.",
      "C. Correcta, ya que al observar todos los promedios, el mayor corresponde al curso I en el año actual.",
      "D. Incorrecta, ya que se necesita el puntaje de cada estudiante para realizar la comparación."
    ],
    respuestaCorrecta: 1,
  },
  {
    id: 2,
    numero: "Pregunta 02 Matemáticas",
    imagen: null,
    enunciado: `Una persona que vive en Colombia tiene inversiones en dólares en Estados Unidos, y sabe que la tasa de cambio del dólar respecto al peso colombiano se mantendrá constante este mes, siendo 1 dólar equivalente a 4.000 pesos colombianos y que su inversión, en dólares, le dará ganancias del 3 % en el mismo periodo. Un amigo le asegura que en pesos sus ganancias también serán del 3 %. \n ¿La afirmación de su amigo es correcta?`,
    opciones: [
      "A. Sí, porque, sin importar las variaciones en la tasa de cambio, la proporción en que aumenta la inversión en dólares es la misma que en pesos.",
      "B. No, porque debería conocerse el valor exacto de la inversión para poder calcular la cantidad de dinero que ganará.",
      "C. Sí, porque el 3 % representa una proporción fija en cualquiera de las dos monedas, puesto que la tasa de cambio permanecerá constante.",
      "D. No, porque el 3 % representa un incremento, que será mayor en pesos colombianos, pues en esta moneda cada dólar representa un valor 4.000 veces mayor"
    ],
    respuestaCorrecta: 2,
  },
  {
    id: 3,
    numero: "Pregunta 03 Matemáticas",
    imagen: "/IMG/imagen-2-simulacro.png",
    enunciado: `Las directivas de un colegio tienen que organizar un viaje a un museo con 140 estudiantes, quienes deben dividirse en 3 grupos. Cada grupo irá en una franja diferente, pero el costo total de las entradas se asumirá equitativamente por los estudiantes. En la tabla se muestran los horarios disponibles, la máxima cantidad de estudiantes y los precios respectivos de cada horario.`,
    opciones: [
      "A. Sí, porque esas franjas suman exactamente 140 estudiantes.",
      "B. No, porque es posible obtener un precio menor eligiendo la franja 2 en lugar de la franja 3.",
      "C. Sí, porque se incluyó la franja 1 que es la de menor precio por estudiante.",
      "D. No, porque en la franja 3 la cantidad máxima de estudiantes es 30."
    ],
    respuestaCorrecta: 1,

  },
  {
    id: 4,
    numero: "Pregunta 04 Matemáticas",
    imagen: "/IMG/imagen-4-simulacro.png",
    enunciado: `La figura muestra el portalápices de Eliécer. Él sabe que es posible colocar un caucho de 18 cm de perímetro alrededor de la base sin estirarlo, pero a medida que sube el caucho por el portalápices, este se estira hasta que, en la boca del portalápices, su perímetro es 24 cm.`,
    opciones: [
      "A. No, porque la medición se realiza con el mismo caucho y, por tanto, las áreas de la base y la boca deben ser iguales.",
      "B. Sí, porque el caucho se estira dependiendo del área que encierre, por lo que las relaciones de las áreas y los perímetros son iguales.",
      "C. No, porque la relación obtenida se cumple para las longitudes de los lados, pero al calcular las áreas, la razón obtenida se eleva al cuadrado.",
      "D. Sí, porque como las figuras son semejantes, todas sus medidas deben tener la misma razón que los perímetros."
    ],
    respuestaCorrecta: 2,
    
  },
  {
    id: 5,
    numero: "Pregunta 05 Matemáticas",
    imagen: "/IMG/imagen-5.png",
    enunciado: `Los tres (3) camiones se cargan con 5 toneladas de banano cada uno para venderse en la ciudad W. El comerciante necesita conocer la ganancia al hacer este negocio, ejecutando el siguiente procedimiento:`,
    opciones: [
      "A. $ 5.670.000",
      "B. $ 5.970.000",
      "C. $ 7.470.000",
      "D. $ 8.010.000"
    ],
    respuestaCorrecta: 2,
    
  },
  {
    id: 6,
    numero: "Pregunta 06 Matemáticas",
    imagen: "/IMG/image-6.png",
    enunciado: `Para diciembre, el comerciante decidió que por cada 5 toneladas del producto transportado en camión y vendido en alguna de las ciudades, cada uno de los dos empleados necesarios por camión recibirá un bono de 0,3 % del dinero recibido en la venta de esas 5 toneladas. En ese mes, dos empleados transportaron y vendieron 47 toneladas de mango a la ciudad W. Para hallar el bono recibido por cada uno de ellos, se ejecutó el siguiente procedimiento:`,
    opciones: [
      "A. 526.000 pesos",
      "B. 175.000 pesos ",
      "C. 148.000 pesos",
      "D. 87.000 pesos"
    ],
    respuestaCorrecta: 1,
    
  },

  {
    id: 7,
    numero: "Pregunta 07 Matemáticas",
    imagen: null,
    enunciado: `Si en un rectángulo se aumenta la longitud de uno de sus lados en 100 %, ¿Qué se puede concluir de su área?`,
    opciones: [
      "A. Aumenta en un 50 %.",
      "B. Se duplica.",
      "C. No cambia.",
      "D. Aumenta en 100 unidades."
    ],
    respuestaCorrecta: 1,
    
  },

  {
    id: 8,
    numero: "Pregunta 08 Matemáticas",
    imagen: "/IMG/imagen-8.png",
    enunciado: `Las sombras proyectadas por dos postes paralelos de 10 metros y 5 metros se muestran en la figura.`,
    opciones: [
      "A. β = 5°",
      "B. β = 15°",
      "C. β = 30°",
      "D. β = 60°"
    ],
    respuestaCorrecta: 2,
    
  },

  {
    id: 9,
    numero: "Pregunta 09 Matemáticas",
    imagen: null,
    enunciado: `Una escuela de natación cuenta con un total de 16 estudiantes. Para las clases se usan 2 piscinas con distinta profundidad. Por seguridad, las personas con una estatura inferior a 1,80 m se envían a la piscina menos profunda, y las demás, a la más profunda.\n Un día, el director de la escuela escucha que el promedio de estatura de las 16 personas es 1,70 m e insiste en aumentar la cantidad de alumnos para que el promedio sea 1,80 m, afirmando que de esta manera se logrará igualar la cantidad de personas en las dos piscinas. ¿Por qué es errónea la afirmación del director?`,
    opciones: [
      "A.  Porque las 16 personas se encuentran actualmente en la piscina menos profunda. El director de la escuela debe aceptar otros 16 alumnos con una estatura superior a 1,80 m.",
      "B. Porque con el promedio es imposible determinar la cantidad de personas en las piscinas. Es necesario utilizar otras medidas, como la estatura máxima o mínima de las personas, en lugar de esta.",
      "C. Porque incrementar el promedio a 1,80 m es insuficiente. El director de la escuela debe aceptar más estudiantes con una altura de 1,80 m hasta que la cantidad de alumnos sea igual en ambas piscinas.",
      "D. Porque aunque el promedio de estatura de las 16 personas sea inferior a 1,80 m, no significa que la cantidad de personas en las piscinas sea diferente."
    ],
    respuestaCorrecta: 3,
    
  },

  {
    id: 10,
    numero: "Pregunta 10 Matemáticas",
    imagen: "/IMG/imagen-9.png",
    enunciado: `La longitud de las aristas de la caja de la figura son l, a y h.`,
    opciones: [
      "A.  lah",
      "B. 4lah",
      "C.  l + a + h",
      "D. 4l + 4a + 4h"
    ],
    respuestaCorrecta: 3,
    
  },

  {
    id: 11,
    numero: "Pregunta 11 Lectura Crítica",
    imagen: "/IMG/imagen-22.png",
    enunciado: `RESPONDE LA PREGUNTA 11 DE ACUERDO CON LA SIGUIENTE INFORMACIÓN\n
    ¿En cuál de los siguientes contextos se inscribe mejor la caricatura?`,
    opciones: [
      "A. Anuncio publicitario.",
      "B. Reportaje gráfico.",
      "C. Humor gráfico",
      "D. Sátira política."
    ],
    respuestaCorrecta: 2,
    
  },

  {
    id: 12,
    numero: "Pregunta 12  Lectura Crítica",
    imagen: null,
    enunciado: `RESPONDE LA PREGUNTA 12 DE ACUERDO CON LA SIGUIENTE INFORMACIÓN\n
    » Las filosofías comienzan en filosofía y acaban en retórica.\n
    » La filosofía es actitud solitaria.\n
    » La adhesión de cualquier muchedumbre a una doctrina la convierte en mitología\n
    » Los sistemas filosóficos difieren los unos de los otros menos en la manera de resolver que en la manera de escamotear los problemas.\n
    » Los que se ocupan de filosofía no la tomarían tan en serio, si generalmente no vivieran de ella como profesión.\n
    » En filosofía lo que no sea fragmento es estafa.\n
    Tomado y adaptado de: Goodall, Jane. “Aprendiendo de los chimpancés: un mensaje que los humanos pueden entender”. En: Science, diciembre, 1998: Vol. 282 no. 5397 pp. 2184-2185.\n
    De acuerdo con el enunciado “Los sistemas filosóficos difieren los unos de los otros menos en la manera de resolver que en la manera de escamotear los problemas”, ¿cuál es la principal diferencia entre un sistema filosófico y otro?`,
    opciones: [
      "A. La manera de plantear los problemas.",
      "B. La manera de resolver los problemas.",
      "C. La manera de esquivar los problemas.",
      "D. La manera de burlarse de los problemas."
    ],
    respuestaCorrecta: 2,
    
  },

  {
    id: 13,
    numero: "Pregunta 13 Lectura Crítica",
    imagen: "/IMG/imagen-23.png",
    enunciado: `RESPONDE LA PREGUNTA 13 DE ACUERDO CON LA SIGUIENTE INFORMACIÓN\n
    Teniendo en cuenta los planteamientos dados en la historieta, ¿cuál de los siguientes enunciados contradice la tesis central del texto?`,
    opciones: [
      "A. No todo se divide entre lo que depende y lo que no depende de nosotros.",
      "B. Alejarnos de alguien no depende de nosotros mismos.",
      "C. La mente de un filósofo funciona de la misma manera que su cuerpo.",
      "D. El juicio y el deseo no dependen de nosotros"
    ],
    respuestaCorrecta: 1,
    
  },

  
  {
    id: 14,
    numero: "Pregunta 14 Lectura Crítica",
    imagen:null,
    enunciado: `RESPONDE LAS PREGUNTAS 14 A 16 DE ACUERDO
                  CON LA SIGUIENTE INFORMACIÓN\n
                  "La historia del arte"\n
                  A mucha gente le gusta ver en los cuadros lo que también le gustaría ver en la realidad. Se trata de una preferencia perfectamente comprensible. A todos nos atrae lo bello en la naturaleza y agradecemos a los artistas que lo recojan en sus obras. Esos mismos artistas no nos censurarían por nuestros gustos. Cuando el gran artista flamenco Rubens dibujó a su hijo, estaba orgulloso de sus agradables facciones y deseaba que también nosotros admiráramos al pequeño. Pero esta inclinación a los temas bonitos y atractivos puede convertirse en nociva si nos conduce a rechazar obras que representan asuntos menos agradables. El gran pintor alemán Alberto Durero seguramente dibujó a su madre con tanta devoción y cariño como Rubens a su hijo. Su verista estudio de la vejez y la decrepitud puede producirnos tan viva impresión que nos haga apartar los ojos de él y, sin embargo, si reaccionamos contra esta primera aversión, quedaremos recompensados con creces, pues el dibujo de Durero, en su tremenda sinceridad, es una gran obra. En efecto, de pronto descubrimos que la hermosura de un cuadro no reside realmente en la belleza de su tema. No sé si los golfillos que el pintor español Murillo se complacía en pintar eran estrictamente bellos o no, pero tal como fueron pintados por él, poseen desde luego gran encanto.\n
                  Gombrich, E. H. (2003). La historia del arte (pp. 15-16). Random House Mondadori.\n
                  En el texto, ¿para qué el autor hace referencia a Rubens?`,
    opciones: [
      "A. Para mostrar que a todos nos atrae lo bello y por fortuna el arte lo recoge en la pintura.",
      "B. Para resaltar que el público siempre exige que el artista refleje la realidad en los cuadros.",
      "C. Para manifestar que algunos artistas plasman en sus obras lo que nos gusta ver en la realidad",
      "D. Para concluir que la inclinación en el arte por los temas bonitos y atractivos es bastante nociva."
    ],
    respuestaCorrecta: 2,
    
  },

  {
    id: 15,
    numero: "Pregunta 15 Lectura Crítica",
    imagen: null,
    enunciado: `¿Cuál de los siguientes enunciados expresa un juicio de valor presente en el texto?`,
    opciones: [
      "A. Mientras Rubens dibujó la juventud, Durero dibujó la vejez.",
      "B. Mientras Rubens dibujó la juventud, Durero dibujó la vejez.",
      "C. Rubens estaba orgulloso de su hijo y deseaba que lo admiráramos.",
      "D. Para el público, la hermosura de un cuadro reside en la belleza de su tema."
    ],
    respuestaCorrecta: 1,
    
  },

  {
    id: 16,
    numero: "Pregunta 16 Lectura Crítica",
    imagen: null,
    enunciado: `¿Cuál de los siguientes títulos podría ser el más adecuado para el texto anterior?`,
    opciones: [
      "A. En defensa del mal gusto en el arte",
      "B. El arte como modelo de la realidad.",
      "C. La representación de la belleza en el arte.",
      "D.  Rubens, Durero y Murillo: el arte de la pintura."
    ],
    respuestaCorrecta: 2,
    
  },

  {
    id: 17,
    numero: "Pregunta 17 Lectura Crítica",
    imagen: "/IMG/imagen-24.png",
    enunciado: `RESPONDE LAS PREGUNTAS 17 A 20 DE ACUERDO
                   CON LA SIGUIENTE INFORMACIÓN\n
                   De acuerdo con la información presentada sobre el porcentaje de muertes por tipo de vehículo, se puede afirmar que es más probable que alguien que haya muerto por accidente de tránsito hubiera estado desplazándose`,
    opciones: [
      "A. A pie.",
      "B. En moto.",
      "C. En bicicleta.",
      "D. En otro tipo de vehículo."
    ],
    respuestaCorrecta: 3,
    
  },

  {
    id: 18,
    numero: "Pregunta 18 Lectura Crítica",
    imagen: null,
    enunciado: `A propósito del cuadro que presenta la información según la cual 3 de 4 de los fallecidos en accidentes de tránsito son del sexo masculino, se puede afirmar que las figuras que acompañan el texto`,
    opciones: [
      "A. Ilustran la información presentada.",
      "B. Profundizan la información dada",
      "C.  Proporcionan información adicional.",
      "D. Ejemplifican la información descrita."
    ],
    respuestaCorrecta: 0,
    
  },

  {
    id: 19,
    numero: "Pregunta 19 Lectura Crítica",
    imagen: null,
    enunciado: `A partir de la información presentada, se puede afirmar que el autor de la infografía tiene como propósito`,
    opciones: [
      "A. Sensibilizar al espectador sobre los riesgos de morir en un accidente de tránsito",
      "B. Incentivar al espectador a que use formas de movilidad alternas al automóvil",
      "C. Conmover al espectador presentando datos sobre el número de accidentes de tránsito.",
      "D. Sensibilizar al espectador acerca de la necesidad de manejar sobrio y despacio."
    ],
    respuestaCorrecta: 0,
    
  },

  {
    id: 20,
    numero: "Pregunta 20 Lectura Crítica",
    imagen: null,
    enunciado: `De acuerdo con el contenido de la información presentada, ¿a cuál de los siguientes contextos se adecuaría mejor la infografía?`,
    opciones: [
      "A. Una protesta ecológica en contra del uso de vehículos motorizados",
      "B. Una exposición sobre el transporte público como alternativa de movilidad.",
      "C. Una campaña diseñada para promover la adquisición de seguros de vida.",
      "D. Un estudio sobre asesinatos según el género y la condición socioeconómica."
    ],
    respuestaCorrecta: 2,
    
  },
  {
    id: 21,
    numero: "Pregunta 21 Sociales y Ciudadanas",
    enunciado: `Como argumento a favor del vegetarianismo, una persona afirma que consumir carne es nocivo para los humanos porque el animal, del cual se obtiene esta, sufre en el proceso, y esto produce energías negativas que se transmiten al consumidor y perjudican su salud. Otra persona, igualmente a favor del vegetarianismo, sostiene que el consumo de productos de origen animal es un acto amoral, en la medida en que resulta del abuso e insensibilidad del ser humano ante los demás seres vivos.\n
    ¿Cuál de las siguientes afirmaciones sobre la relación entre las opiniones presentadas NO es correcta?`,
    opciones: [
      "A. Son similares, porque ambas van en contra del consumo de carne.",
      "B. Son complementarias, porque ambas promueven el vegetarianismo cuando argumentan la obligación de proteger a los animales",
      "C. Son diferentes, porque la primera aboga por la salud del ser humano y la segunda, por el bienestar de los animales.",
      "D. Son disímiles, porque la primera se centra en cómo el animal afecta al ser humano y la segunda, en cómo el ser humano afecta al animal."
    ],
    respuestaCorrecta: 1,
    
  },

  {
    id: 22,
    numero: "Pregunta 22 Sociales y Ciudadanas",
    enunciado: `Los habitantes de un barrio de clase media se oponen a que, en este, se construyan viviendas de interés social. Afirman que las personas de escasos recursos económicos que se beneficiarían con estas viviendas representarían un peligro para la seguridad de los habitantes actuales del barrio. Señalan que las zonas más pobres de la ciudad son también las más inseguras, y argumentan que esto prueba que una persona de escasos recursos tiene una probabilidad más alta de ser un delincuente que una persona acomodada.\n
    De los siguientes enunciados, ¿cuál contiene un argumento válido en contra de las afirmaciones de los habitantes del barrio de clase media?\n`,
    opciones: [
      "A. Quienes ejercen la delincuencia en una zona pobre de la ciudad pueden no ser habitantes de esa zona.",
      "B. Entre los delincuentes nunca hay personas de escasos recursos, pues todos son adinerados precisamente gracias a sus actividades delictivas.",
      "C. Los delincuentes que habitan en las zonas más pobres de la ciudad dejarían de violar la ley, si contaran con mejores condiciones de vida.",
      "D. Hay casos en que la pobreza y la falta de oportunidades llevan a una persona, en un momento de desesperación, a cometer un delito."
    ],
    respuestaCorrecta: 0,
    
  },

  {
    id: 23,
    numero: "Pregunta 23 Sociales y Ciudadanas",
    enunciado: `Un padre de familia no está de acuerdo con la participación de profesores homosexuales en la educación de sus hijos. Al respecto, el rector del colegio argumenta: “Las personas con inclinaciones homosexuales, como todas las personas, merecen ser amadas. Además, en todos los países hay población homosexual, y las preferencias sexuales son el resultado de una compleja interacción de la biología con el medio ambiente. Yo creo que los homosexuales pueden enseñar, siempre y cuando controlen su comportamiento en clase y no afecten la orientación sexual de los estudiantes”.\n
    ¿Cuál de los siguientes enunciados del rector contiene un prejuicio cuestionable?`,
    opciones: [
      "A. En todos los países hay población homosexual.",
      "B. Las personas con inclinaciones homosexuales, como todas las personas, merecen ser amadas",
      "C. Las preferencias sexuales son el resultado de una compleja interacción de la biología con el medio ambiente.",
      "D. Los homosexuales pueden enseñar, siempre y cuando controlen su comportamiento en clase y no afecte la orientación sexual de los estudiantes."
    ],
    respuestaCorrecta: 3,
    
  },
  {
    id: 24,
    numero: "Pregunta 24 Sociales y Ciudadanas",
    imagen :"IMG/imagen-25.png",
    enunciado: `Los siguientes magnicidios tuvieron incidencia en la historia política de Colombia durante el siglo XX:`,
    opciones: [
      "A. 2, 3, 1 y 4.",
      "B. 3, 2, 1 y 4.",
      "C. 3, 1, 2 y 4.",
      "D. 4, 3, 2 y 1."
    ],
    respuestaCorrecta: 1,
    
  },
  {
    id: 25,
    numero: "Pregunta 25 Sociales y Ciudadanas",
    enunciado: `En Colombia se debate sobre la posibilidad de legalizar el tráfico y consumo de drogas ilicitas, para contrarrestar los efectos económicos y sociales del narcotráfico. Algunos sectores sociales plantean que esta alternativa es indeseable y proponen, en cambio, fortalecer los procesos de sensibilización entre los consumidores sobre los riesgos de salud asociados al consumo de drogas. En contraste, otros sectores sociales proponen endurecer las penas para los productores y expendedores de drogas, así como para aquellos consumidores que porten más de la dosis legalmente permitida.\n
    ¿Son similares las dos posiciones frente a la legalización de las drogas?`,
    opciones: [
      "A. No, porque una está a favor de la legalización y la otra a favor del endurecimiento de las sanciones legales.",
      "B. Sí, porque ambas consideran que la regulación legal del consumo tiene un efecto directo sobre el narcotráfico.",
      "C. No, porque una plantea que la lucha contra el narcotráfico debe ser por la vía de la represión y la otra por la vía de la prevención del consumo.",
      "D. Sí, porque ambas están en contra de la legalización y se enfocan en la protección de los consumidores de drogas."
    ],
    respuestaCorrecta: 2,
    
  },
  {
    id: 26,
    numero: "Pregunta 26 Sociales y Ciudadanas",
    enunciado: `La asamblea de propietarios de un edificio de la ciudad estudia la posibilidad de ampliar el horario para las reuniones privadas que se realizan en el salón comunal. Los propietarios de los pisos altos están de acuerdo en que se amplíe el horario hasta la 1:00 a.m. y mencionan que es la hora ideal para finalizar las reuniones; los propietarios del primer piso (lugar donde se encuentra el salón comunal) están en desacuerdo con el horario, ya que son ellos quienes se afectan por el ruido ocasionado por este tipo de reuniones a avanzadas horas de la noche. Después de que los propietarios exponen sus intereses, se realiza una votación y se decide que se ampliará el uso del salón hasta la medianoche.\n
    ¿Esta solución se ajusta a los intereses de todos los vecinos?`,
    opciones: [
      "A. No, porque los habitantes de los pisos más altos no pueden aprovechar las fiestas que se hagan en el salón comunal.",
      "B. Sí, porque debido a que la propuesta se aprobó todos los vecinos están llamados a tener los mismos intereses.",
      "C. No, porque el ruido de las fiestas afecta más a los propietarios del primer piso cercanos al salón comunal.",
      "D. Sí, porque todos los propietarios tuvieron derecho a exponer sus ideas y a votar según sus intereses."
    ],
    respuestaCorrecta: 2,
    
  },
  {
    id: 27,
    numero: "Pregunta 27 Sociales y Ciudadanas",
    enunciado: `Se ha generado un conflicto entre una empresa constructora y unas organizaciones ambientalistas en torno al desarrollo de un proyecto de apartamentos sobre un humedal. Por un lado, los ambientalistas afirman que cualquier construcción pone en riesgo todo el ecosistema del humedal. La constructora, por su parte, argumenta que el humedal no se afectará y que, por el contrario, el proyecto busca integrar el medio ambiente a sus zonas comunes.\n
    Para resolver el conflicto entre la constructora y los ambientalistas, se plantea que la constructora modifique sus planos para reducir el impacto sobre el humedal y salvar así algunos animales y árboles.\n
    ¿Cómo se ajusta esta solución a los intereses de la constructora y de los ambientalistas?`,
    opciones: [
      "A. La solución beneficia a ambas partes, pues busca reducir gradualmente el daño ambiental y garantizar el negocio de la constructora.",
      "B. La solución beneficia solamente a una de las partes en detrimento del medio ambiente y del ecosistema de humedal.",
      "C. La solución beneficia a los ambientalistas, pues defiende sus intereses, y perjudica el negocio de la constructora.",
      "D. La solución no beneficia a ninguna de las partes, porque el humedal será destruido y la constructora no podrá realizar su proyecto de construcción de apartamentos."
    ],
    respuestaCorrecta: 1,
    
  },
  {
    id: 28,
    numero: "Pregunta 28 Sociales y Ciudadanas",
    enunciado: `¿Cuál de los siguientes mecanismos puede ser usado para modificar la Constitución Política de Colombia?`,
    opciones: [
      "A. Una consulta popular",
      "B. Un plebiscito.",
      "C. Un referendo.",
      "D. Un cabildo abierto."
    ],
    respuestaCorrecta: 2,
    
  },
  {
    id: 29,
    numero: "Pregunta 29 Sociales y Ciudadanas",
    enunciado: `Un estudio realizado por la Organización de las Naciones Unidas (ONU) sostiene que América Latina es la región más urbanizada del mundo. Aunque esto aumenta las oportunidades laborales y mejora las condiciones de vida de muchas personas, su costo económico, social y ambiental es demasiado alto, ya que han proliferado —y seguirán aumentando— barrios pobres y desiguales que expanden el casco urbano e invaden zonas rurales. Para atender este problema, el estudio plantea tres propuestas. La primera es densificar las ciudades; así, en lugar de expandirse hacia zonas rurales, donde se producen los alimentos, se aumenta la vivienda vertical (edificios). La segunda solución es acelerar las reformas urbanas para legalizar los barrios de invasión, ofreciéndoles a quienes habitan allí acceso a servicios públicos y títulos de propiedad. La tercera alternativa es aumentar la oferta de transporte público, lo cual ayudaría a facilitar la movilidad desde la periferia hacia los centros urbanos.\n
    ¿Qué tipo de relación se puede establecer entre las propuestas de solución al problema de la urbanización en América Latina?`,
    opciones: [
      "A. Complementariedad, pues todas las soluciones priorizan el desarrollo económico de los centros urbanos.",
      "B. Compatibilidad, pues todas las soluciones se enfocan hacia la recuperación de las zonas de producción rural.",
      "C. Complementariedad, pues todas las soluciones se enfocan hacia la mitigación de los costos sociales y económicos de la expansión urbana.",
      "D. Compatibilidad, pues todas las soluciones priorizan el mejoramiento de la calidad de vida de los habitantes provenientes de zonas rurales."
    ],
    respuestaCorrecta: 2,
    
  },
  {
    id: 30,
    numero: "Pregunta 30 Sociales y Ciudadanas",
    enunciado: `Un presidente de Colombia está finalizando su periodo presidencial, y debido a la alta popularidad de la que goza decide proponer la inclusión de la reelección presidencial indefinida dentro de la Constitución. Para tal fin, quiere convocar un referendo.\n
    ¿El presidente puede hacer esto?`,
    opciones: [
      "A. Sí, porque los referendos permiten reformar la Constitución.",
      "B. No, porque la Constitución no puede reformarla el Ejecutivo; solo a través de una Asamblea Constituyente.",
      "C. Sí, porque el presidente puede modificar la Constitución por su cuenta, sin acudir al poder legislativo.",
      "D. No, porque los referendos no permiten reformar la Constitución."
    ],
    respuestaCorrecta: 0,
    
  },
  {
    id: 31,
    numero: "Pregunta 31 Ciencias Naturales",
    imagen: "/IMG/imagen-26.png",
    enunciado: `La siguiente ecuación representa la reacción química de la formación de agua (H2O).`,
    opciones: [
      "A. H4 y O2.",
      "B. H4 y O4.",
      "C. H2 y O2.",
      "D. H2 y O4."
    ],
    respuestaCorrecta: 2,
    
  },
  {
    id: 32,
    numero: "Pregunta 32 Ciencias Naturales",
    imagen: null,
    enunciado: `Un bloque de hielo seco, CO2 sólido, cambia del estado sólido al gaseoso en condiciones ambientales. Este cambio de estado determina un cambio en la densidad del CO2. Teniendo en cuenta la información anterior, tras el cambio de estado, ¿por qué disminuye la densidad del CO2?`,
    opciones: [
      "A. Porque la masa de CO2 disminuye.",
      "B. Porque la distancia entre partículas y el volumen aumentan.",
      "C. Porque la distancia entre partículas disminuye.",
      "D. Porque la distancia entre partículas aumenta y su masa disminuye."
    ],
    respuestaCorrecta: 1,
    
  },
  {
    id: 33,
    numero: "Pregunta 33 Ciencias Naturales",
    imagen: "/IMG/imagen-27.png",
    enunciado: `Un estudiante analiza cómo cambia la solubilidad de una sal de sodio; para esto, disuelve distintas cantidades de la sal en 20 gramos de agua destilada y registra la temperatura exacta a la cual se logra disolver completamente\n
    Los resultados se muestran a continuación.\n
    `,
    opciones: [
      "A. Sí, porque para disolver esta cantidad de la sal de sodio en 40 gramos de agua también se necesitaría el doble de temperatura, es decir, 166 °C.",
      "B.  No, porque al tener el doble de agua, es más probable que la sal de sodio solo necesite la mitad de la temperatura para disolverse, es decir, 42 °C.",
      "C.  No, porque al tener el doble de agua, es más probable que la sal de sodio solo necesite la mitad de la temperatura para disolverse, es decir, 42 °C.",
      "D. Sí, porque con masas mayores a 35 gramos de la sal de sodio, se necesitarían temperaturas mayores que 83 °C para disolverla en esa cantidad de agua."
    ],
    respuestaCorrecta: 2,
    
  },
  {
    id: 34,
    numero: "Pregunta 34 Ciencias Naturales",
    imagen: "/IMG/imagen-28.png",
    enunciado: `En el modelo se presenta el proceso de síntesis de proteínas en una célula. `,
    opciones: [
      "A. Se produciría una cadena de ARNm doble, como la molécula de ADN.",
      "B. El ribosoma no podría entrar al núcleo a leer la información del ADN.",
      "C. Los aminoácidos no podrían unirse al ARNt en el citoplasma.",
      "D. Se unirían aminoácidos que no corresponden con la secuencia de ADN."
    ],
    respuestaCorrecta: 3,
    
  },
  {
    id: 35,
    numero: "Pregunta 35 Ciencias Naturales",
    imagen: "/IMG/imagen-29.png",
    enunciado: `Una estudiante quiere clasificar dos sustancias de acuerdo con el tipo de mezclas que son. Al buscar, encuentra que las mezclas homogéneas son uniformes en todas sus partes, pero las mezclas heterogéneas no lo son. La estudiante realiza los procedimientos que se muestran en la tabla con las sustancias 1 y 2.`,
    opciones: [
      "A. La sustancia 1 es una mezcla homogénea y la sustancia 2 es una mezcla heterogénea",
      "B. La sustancia 1 es una mezcla heterogénea y la sustancia 2 es una mezcla homogénea",
      "C. Ambas sustancias son mezclas homogéneas.",
      "D. Ambas sustancias son mezclas heterogéneas."
    ],
    respuestaCorrecta: 0,
    
  },
 
  {
    id: 36,
    numero: "Pregunta 36 Ciencias Naturales",
    imagen: null,
    enunciado: `Un investigador sumerge un detector de sonido en agua para grabar los sonidos emitidos por los animales. El detector muestra la longitud de onda, la frecuencia, la velocidad de propagación y la distancia a la que se produce el sonido emitido por los animales. El investigador saca el detector del agua y registra un sonido.\n
    ¿Cuál cambio de las variables mencionadas le permite asegurar al investigador que el sonido se trasmite por el aire y no por el agua?`,
    opciones: [
      "A. La longitud de onda.",
      "B. La frecuencia de la onda",
      "C. La forma de la onda.",
      "D. La velocidad de la onda."
    ],
    respuestaCorrecta: 3,
    
  },
  {
    id: 37,
    numero: "Pregunta 37 Ciencias Naturales",
    enunciado: `Al observar la manera como se transmite el dengue, un estudiante afirma que para garantizarse una protección del 100 % frente al dengue con el uso de insecticidas, debe aumentarse la frecuencia con la que estos se aplican. De acuerdo con la información del contexto, ¿la hipótesis del estudiante debería mantenerse o cambiarse?`,
    opciones: [
      "A. Debe mantenerse, porque los mosquitos resistentes pueden dejar de serlo si se disminuye la concentración de insecticida reduciendo la frecuencia de aplicación.",
      "B. Debe mantenerse, porque aunque haya algunos mosquitos resistentes, la cantidad de individuos resistentes es tan pequeña que la cantidad de picaduras será insignificante",
      "C. Debe cambiarse, porque aunque al aumentar la frecuencia de aplicación se pueden eliminar todos los huevos de mosquitos, aún existirán larvas de otros insectos que probablemente trasmitan la enfermedad",
      "D. Debe cambiarse, porque al ser resistentes a los insecticidas, sin importar su concentración, aunque se apliquen más dosis, estas probablemente no tendrán efecto sobre los mosquitos resistentes."
    ],
    respuestaCorrecta: 3,
    
  },
  {
    id: 38,
    numero: "Pregunta 38 Ciencias Naturales",
    imagen: null,
    enunciado: `Teniendo en cuenta lo anterior, ¿por qué reducir el número de lugares donde el agua se estanca es un buen método de prevención contra el dengue? `,
    opciones: [
      "A. Porque al reducir el número de lugares donde el agua se estanca, disminuirán los casos de personas infectadas por beber este tipo de agua.",
      "B. Porque al reducir el número de lugares donde el agua se estanca, disminuirán los hábitats del mosquito y, por tanto, no habrá tantas picaduras de mosquito que transmitan el virus a las personas",
      "C. Porque al reducir el número de lugares donde el agua se estanca, el agua no producirá mal olor y se favorecerá el crecimiento y reproducción de los mosquitos. ",
      "D. Porque al reducir el número de lugares donde el agua se estanca, disminuirán los hábitats del virus y, por tanto, estos empezarán a infectar a las personas directamente sin necesitar de los mosquitos."
    ],
    respuestaCorrecta: 1,
    
  },
  {
    id: 39,
    numero: "Pregunta 39 Ciencias Naturales",
    imagen: null,
    enunciado: `El profesor de Juan le entrega tres objetos de igual volumen y forma, pero de diferente material, y le pide que los deje caer desde la altura de sus hombros y observe el tiempo de caída al suelo, de cada uno de ellos. Juan observa que los tres tardan tiempos diferentes para llegar al suelo, a pesar de que los tres están sometidos a la misma aceleración gravitacional. Teniendo en cuenta la información anterior, ¿cuál de las siguientes preguntas se puede contestar a partir de las observaciones que realizó Juan?`,
    opciones: [
      "A. ¿El tiempo de caída de los objetos depende de la altura de lanzamiento?",
      "B. ¿El tiempo de caída de los objetos depende de la altura de lanzamiento?",
      "C. ¿La fuerza neta que actúa sobre cada uno de los objetos es diferente?",
      "D. ¿La forma de los objetos está relacionada con diferencias en la fuerza de fricción?"
    ],
    respuestaCorrecta: 2,
    
  },
  {
    id: 40,
    numero: "Pregunta 40 Ciencias Naturales",
    imagen: null,
    enunciado: `En la extracción minera de oro se emplean cianuro de sodio, zinc y ácidos fuertes durante el proceso de purificación. Los ácidos fuertes que pueden emplearse son ácido sulfúrico (H2SO4) de una concentración volumen-volumen del 78 % o ácido nítrico (HNO3) que contenga 112 mL de ácido por cada 200 mL de solución.\n
    Si en la extracción del oro se requiere usar el ácido de mayor concentración, ¿cuál ácido debería emplearse?`,
    opciones: [
      "A. HNO3, porque como su volumen es mayor que el de la solución de H2SO4 tiene una mayor concentración.",
      "B. H2SO4, porque la concentración volumen-volumen del HNO3 es del 56 %.",
      "C. HNO3, porque su concentración volumen-volumen es del 112 %.",
      "D. H2SO4, porque como su volumen es menor que el de la solución de HNO3 se encuentra más concentrado."
    ],
    respuestaCorrecta: 1,
    
  },
  {
    id: 41,
    numero: "Pregunta 41 Inglés ",
    imagen: "/IMG/imagen-41.png",
    enunciado: `Responde sugun el cartel`,
    opciones: [
      "A.on a rug ",
      "B. on a test",
      "C. on a bookcase",

    ],
    respuestaCorrecta: 1,
    
  },
  
  {
    id: 42,
    numero: "Pregunta 42 Inglés",
    enunciado: `How much is that umbrella?`,
    opciones: [
      "A. Anything else?",
      "B. 50 dollars.",
      "C. Cash only!"
    ],
    respuestaCorrecta: 1,
    
  },
  {
    id: 43,
    numero: "Pregunta 43 Inglés",
    imagen: "/IMG/imagen-42.png",
    enunciado: `RESPONDE LAS PREGUNTAS 44 A 51 DE ACUERDO CON EL SIGUIENTE TEXTO`,
    opciones: [
      "A.  much",
      "B. more",
      "C. most",
    ],
    respuestaCorrecta: 2,
    
  },
  {
    id: 44,
    numero: "Pregunta 44 Inglés",
    imagen: "/IMG/imagen-42.png",
    enunciado: ``,
    opciones: [
      "A.  during",
      "B. until",
      "C. since",
    ],
    respuestaCorrecta: 2,
    
  },
  {
    id: 45,
    numero: "Pregunta 45 Inglés",
    imagen: "/IMG/imagen-42.png",
    enunciado: ``,
    opciones: [
      "A. when",
      "B. which",
      "C. who",
    ],
    respuestaCorrecta: 0,
    
  },
  {
    id: 46,
    numero: "Pregunta 46 Inglés",
    imagen: "/IMG/imagen-42.png",
    enunciado: ``,
    opciones: [
      "A. among",
      "B. about",
      "C. along",
    ],
    respuestaCorrecta: 0,
    
  },
  {
    id: 47,
    numero: "Pregunta 47 Inglés",
    imagen: "/IMG/imagen-42.png",
    enunciado: ``,
    opciones: [
      "A. describe",
      "B. described",
      "C. describes",
    ],
    respuestaCorrecta: 1,
    
  },
  {
    id: 48,
    numero: "Pregunta 48 Inglés",
    imagen: "/IMG/imagen-42.png",
    enunciado: ``,
    opciones: [
      "A. drink",
      "B. drinking",
      "C. drunk",
    ],
    respuestaCorrecta: 1,
    
  },
   {
    id: 49,
    numero: "Pregunta 49 Inglés",
    imagen: "/IMG/imagen-42.png",
    enunciado: ``,
    opciones: [
      "A. mustn’t",
      "B. couldn’t  ",
      "C. wouldn’t  ",
    ],
    respuestaCorrecta: 0,
    
  },
  {
    id: 50,
    numero: "Pregunta 50 Inglés",
    imagen: "/IMG/imagen-42.png",
    enunciado: ``,
    opciones: [
      "A. While",
      "B. Except",
      "C. Because",
    ],
    respuestaCorrecta: 0,
    
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