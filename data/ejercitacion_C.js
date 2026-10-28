window.EJERCITACION = window.EJERCITACION || {};

window.EJERCITACION["uniones"] = [
  {
    num: 1,
    nivel: "Básico",
    temas: ["uniones"],
    enunciado: "Clasifique el tipo de unión que se forma en cada una de las siguientes sustancias: KF, HCl y Cl2. Use las electronegatividades de Pauling (K 0,8; F 4,0; H 2,1; Cl 3,0) y el criterio de diferencia de electronegatividad del apunte.",
    resolucion: [
      {
        parte: "",
        pasos: [
          { paso: "KF: Delta EN = 4,0 - 0,8 = 3,2. HCl: Delta EN = 3,0 - 2,1 = 0,9. Cl2: Delta EN = 3,0 - 3,0 = 0,0.", porque: "Para clasificar una unión se resta la electronegatividad del átomo menos electronegativo a la del más electronegativo, usando la tabla dada. Ese valor (Delta EN) es el único criterio que usa el apunte, así que conviene restar siempre el mayor menos el menor para que dé positivo." },
          { paso: "KF: Delta EN > 2 y es un metal con un no metal, así que la unión es iónica (transferencia de un electrón del K al F, formando K^+ y F^-).", porque: "Se aplica el criterio del apunte: con Delta EN mayor que 2 la unión es iónica, porque la diferencia es tan grande que el par de electrones queda casi totalmente en el átomo más electronegativo. Conviene confirmar además que la combinación sea metal con no metal, que es el caso típico de la unión iónica." },
          { paso: "HCl: 0 < Delta EN < 2 entre dos no metales: unión covalente polar, con el par de electrones desplazado hacia el Cl.", porque: "Con Delta EN entre 0 y 2 entre dos no metales, la unión es covalente: se comparte el par, pero no en partes iguales. El Cl, más electronegativo, queda con carga parcial negativa (delta-) y el H con delta+, así que el enlace es polar." },
          { paso: "Cl2: Delta EN = 0: unión covalente no polar, con el par compartido en partes iguales.", porque: "Como las dos electronegatividades son iguales, la diferencia es cero y el par se comparte de manera simétrica. Por eso no hay cargas parciales ni dipolo, y se la llama covalente no polar; que Delta EN sea cero no significa que el enlace no exista." }
        ],
        resultado: "KF: iónico; HCl: covalente polar; Cl2: covalente no polar."
      }
    ],
    errores_tipicos: [
      { error: "Clasificar el HCl como iónico porque el Cl 'se lleva' el electrón del H.", como_evitar: "La unión iónica requiere metal con no metal (o Delta EN > 2). H y Cl son no metales: comparten el par electrónico." },
      { error: "Decir que el Cl2 no tiene enlace porque su Delta EN es cero.", como_evitar: "Delta EN = 0 indica covalente no polar, no ausencia de enlace." }
    ]
  },
  {
    num: 2,
    nivel: "Básico",
    temas: ["uniones"],
    enunciado: "Dibuje la estructura de Lewis del tetracloruro de silicio (SiCl4). Indique cuántos pares de electrones hay en total y cuántos son enlazantes y libres alrededor del átomo de Si. Datos: Si tiene 4 electrones de valencia y Cl tiene 7.",
    resolucion: [
      {
        parte: "",
        pasos: [
          { paso: "Electrones de valencia totales: 4 (Si) + 4 x 7 (Cl) = 32 electrones, es decir 16 pares.", porque: "Se suman los electrones de valencia de todos los átomos, multiplicando el aporte de cada elemento por su cantidad de átomos (aquí 4 Cl). Este total es el que se distribuye en la estructura de Lewis, y conviene anotarlo antes de dibujar, porque un error en la cuenta arrastra al resto del dibujo." },
          { paso: "El Si es el átomo central (es menos electronegativo que el Cl) y se une a cada Cl con un enlace simple: 4 pares enlazantes (8 electrones).", porque: "El átomo central es el menos electronegativo, en este caso el Si, y los Cl son terminales porque solo necesitan un enlace. Cada enlace simple usa 2 electrones, así que los 4 enlaces ocupan 8 de los 32 electrones totales." },
          { paso: "Los 24 electrones restantes forman 12 pares libres: 3 pares libres en cada Cl (1 enlace + 3 pares = 8 electrones).", porque: "Después de los enlaces, los electrones que sobran se ubican como pares libres en los átomos terminales, hasta completar 8 (octeto) en cada Cl. Los 24 electrones restantes forman 12 pares; conviene verificar que la cuenta total de pares (4 enlazantes y 12 libres) sea 16." },
          { paso: "Alrededor del Si quedan 4 pares enlazantes y 0 pares libres: el Si tiene 8 electrones.", porque: "Se verifica el octeto del átomo central: el Si comparte sus 4 electrones con los 4 Cl y queda rodeado por 8 electrones. Como ya no le sobran electrones, no se le agregan pares libres; dibujarlos sobre el Si sería un error." }
        ],
        resultado: "16 pares en total (4 enlazantes y 12 libres); alrededor del Si hay 4 pares enlazantes y ningún par libre."
      }
    ],
    errores_tipicos: [
      { error: "Contar solo algunos electrones (16 en lugar de 32) y olvidar los pares libres de los Cl.", como_evitar: "Sumá los electrones de valencia de todos los átomos antes de dibujar: 4 + 4 x 7 = 32." },
      { error: "Poner el Cl como átomo central porque tiene más enlaces.", como_evitar: "El átomo central es el menos electronegativo; los Cl son terminales." }
    ]
  },
  {
    num: 3,
    nivel: "Básico",
    temas: ["uniones"],
    enunciado: "Dibuje la estructura de Lewis de los iones amonio (NH4^+) e hidróxido (OH^-). Para cada uno indique cuántos pares enlazantes y cuántos pares libres hay alrededor del átomo que se nombra primero en cada fórmula (N en el amonio, O en el hidróxido).",
    resolucion: [
      {
        parte: "",
        pasos: [
          { paso: "NH4^+: electrones de valencia = 5 (N) + 4 x 1 (H) - 1 (carga +) = 8 electrones, es decir 4 pares.", porque: "Se cuentan los electrones que aporta cada átomo y después se ajusta por la carga: el N aporta 5, cada H aporta 1, y como la carga es +1 se resta un electrón. Esa resta se hace porque el catión perdió un electrón respecto del átomo neutro, y el total de 8 se reparte en 4 pares." },
          { paso: "NH4^+: el N está unido a 4 H con enlaces simples: 4 pares enlazantes y 0 pares libres. Se dibuja entre corchetes con carga +.", porque: "Se ubican los 4 pares enlazantes alrededor del N, uno por cada H con enlace simple. Con 4 pares el N completa su octeto sin pares libres, y como la especie tiene carga, el dibujo se escribe entre corchetes con el signo + como superíndice." },
          { paso: "OH^-: electrones de valencia = 6 (O) + 1 (H) + 1 (carga -) = 8 electrones, es decir 4 pares.", porque: "Se suman los electrones de valencia del O (6), del H (1) y el electrón extra que aporta la carga negativa (1). La carga negativa indica un electrón de más respecto del átomo neutro, así que se suma al total, y el resultado de 8 electrones se reparte en 4 pares." },
          { paso: "OH^-: 1 par enlazante (O-H) y 3 pares libres sobre el O; el O tiene 8 electrones.", porque: "El enlace O-H usa 2 electrones, y el O necesita 8 en total, así que quedan 6 electrones que forman 3 pares libres sobre el O. Conviene contar el octeto del O después de dibujar el enlace, para comprobar que no quedó ningún electrón sin ubicar." }
        ],
        resultado: "NH4^+: 4 pares enlazantes y 0 libres (N). OH^-: 1 par enlazante y 3 pares libres (O)."
      }
    ],
    errores_tipicos: [
      { error: "Sumar o restar electrones en sentido contrario a la carga (poner más electrones al NH4^+).", como_evitar: "Carga negativa: se suman electrones. Carga positiva: se restan." },
      { error: "Dibujar el ion sin corchetes ni carga.", como_evitar: "Todo ion se escribe entre corchetes con su carga como superíndice (NH4^+)." }
    ]
  },
  {
    num: 4,
    nivel: "Básico",
    temas: ["uniones"],
    enunciado: "Para el disulfuro de carbono (CS2, molécula lineal S=C=S) y el acetileno (C2H2, H-C triple enlace C-H), indique cuántos enlaces sigma y cuántos enlaces pi tiene cada molécula, según la teoría de enlace de valencia.",
    resolucion: [
      {
        parte: "",
        pasos: [
          { paso: "CS2: cada enlace doble C=S tiene 1 sigma y 1 pi. Total: 2 sigma y 2 pi.", porque: "Un enlace doble se forma con un solapamiento frontal (sigma) y uno lateral (pi), así que cada enlace C=S aporta 1 sigma y 1 pi. Con dos enlaces dobles en la molécula, el total se obtiene multiplicando por 2 y sumando por separado los sigma y los pi." },
          { paso: "C2H2: los 2 enlaces C-H son simples, sigma. El enlace C-C triple tiene 1 sigma y 2 pi.", porque: "Un enlace simple está formado solo por un sigma, y un enlace triple tiene un sigma y dos pi. Por eso los dos enlaces C-H del acetileno aportan 1 sigma cada uno, y el triple C-C aporta 1 sigma y 2 pi." },
          { paso: "C2H2 en total: sigma = 2 (C-H) + 1 (C-C) = 3; pi = 2.", porque: "Se cuentan todos los enlaces de la molécula, incluidos los C-H, y se suman los sigma y los pi por separado. Ese es el paso que más se olvida: los enlaces con hidrógeno también son sigma, y el total de sigma es 3." }
        ],
        resultado: "CS2: 2 sigma y 2 pi. C2H2: 3 sigma y 2 pi."
      }
    ],
    errores_tipicos: [
      { error: "Contar un enlace doble como 2 sigma.", como_evitar: "Doble = 1 sigma + 1 pi; triple = 1 sigma + 2 pi." },
      { error: "Olvidar los enlaces C-H al contar los sigma del acetileno y dar 2 sigma en total.", como_evitar: "Contá todos los enlaces de la molécula: cada enlace simple cuenta como 1 sigma, también los C-H." }
    ]
  },
  {
    num: 5,
    nivel: "Básico",
    temas: ["uniones"],
    enunciado: "Ordene de menor a mayor polaridad los siguientes enlaces: C-C, C-H, C-Cl y C-O. Use las electronegatividades de Pauling (C 2,5; H 2,1; Cl 3,0; O 3,5) y justifique el orden.",
    resolucion: [
      {
        parte: "",
        pasos: [
          { paso: "C-C: Delta EN = 0,0. C-H: 2,5 - 2,1 = 0,4. C-Cl: 3,0 - 2,5 = 0,5. C-O: 3,5 - 2,5 = 1,0.", porque: "La polaridad de un enlace crece con la diferencia de electronegatividad entre sus átomos, y esa diferencia se obtiene restando los valores de Pauling de la tabla. Conviene hacer todas las restas primero, porque el orden final depende solo de estos números." },
          { paso: "Orden creciente de polaridad: C-C < C-H < C-Cl < C-O.", porque: "Como la polaridad depende solo de Delta EN, se ordenan los valores de menor a mayor. A mayor diferencia, más se desplaza el par electrónico hacia el átomo más electronegativo, y el enlace resulta más polar." },
          { paso: "El C-C es covalente no polar (Delta = 0) y el C-O es el más polar de la lista (Delta = 1,0).", porque: "El enlace entre átomos iguales (C-C) no tiene dipolo, así que sirve como referencia de cero, y el de mayor Delta EN es el más polar. Conviene verificar que el C-O, con Delta EN = 1,0, quede al final del orden." }
        ],
        resultado: "C-C < C-H < C-Cl < C-O; el enlace C-O es el más polar."
      }
    ],
    errores_tipicos: [
      { error: "Ordenar por tamaño atómico o por cantidad de electrones en lugar de por electronegatividad.", como_evitar: "La polaridad depende de Delta EN; el tamaño no es el criterio." },
      { error: "Decir que el C-H es no polar porque el H es muy pequeño.", como_evitar: "Delta EN = 0,4 es pequeño pero distinto de cero: el enlace es covalente polar, débilmente." }
    ]
  },
  {
    num: 6,
    nivel: "Intermedio",
    temas: ["uniones"],
    enunciado: "a) El difluoruro de azufre (SF2) tiene un átomo central de S unido a dos átomos de F. Escriba su estructura de Lewis, indique cuántos pares de electrones hay alrededor del S (enlazantes y libres) y determine la geometría molecular por TREPEV con el ángulo aproximado. b) Justifique si la molécula de SF2 es polar. Compárela con el tricloruro de boro (BCl3), que es trigonal plana, y explique por qué el BCl3 es apolar aunque sus enlaces B-Cl sean polares. Electronegatividades (Pauling): S 2,5; F 4,0; B 2,0; Cl 3,0.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Electrones de valencia: 6 (S) + 2 x 7 (F) = 20 electrones, es decir 10 pares.", porque: "Se suman los electrones de valencia de todos los átomos: 6 del S y 7 de cada uno de los 2 F. Este es el total que hay que distribuir en la estructura, y conviene anotarlo antes de dibujar para no perder pares." },
          { paso: "El S es el átomo central y forma 2 enlaces simples S-F (2 pares enlazantes). Cada F completa su octeto con 3 pares libres (6 pares). Quedan 2 pares libres sobre el S.", porque: "El S, que es menos electronegativo, va en el centro y se une a los dos F con enlaces simples (2 pares enlazantes). Cada F necesita 8 electrones y con un enlace le faltan 6, que son 3 pares libres; los 2 pares que sobran se colocan sobre el S. Verificá que el total de pares (2 + 6 + 2) sea 10." },
          { paso: "Alrededor del S hay 4 pares de electrones: 2 enlazantes y 2 libres.", porque: "Para la geometría se cuentan todas las regiones de electrones del átomo central, enlazantes y libres, no solo los enlaces. Esa cuenta define la disposición de TREPEV, y después se descartan los pares libres para describir la forma de la molécula." },
          { paso: "Con 4 pares la geometría electrónica es tetraédrica (109,5 grados), y la molécular es angular: el ángulo F-S-F es menor que 109,5 grados (aprox. 98 grados) porque los pares libres repelen más y comprimen el ángulo.", porque: "Los 4 pares se ubican como en un tetraedro (109,5 grados), pero los pares libres ocupan más espacio que los enlazantes y empujan a los átomos de F. Por eso el ángulo se cierra por debajo de 109,5 grados, y no conviene usar el valor ideal cuando hay pares libres." }
        ],
        resultado: "Geometría angular, con 4 pares alrededor del S (2 enlazantes y 2 libres) y ángulo menor que 109,5 grados."
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Cada enlace S-F tiene Delta EN = 4,0 - 2,5 = 1,5: es covalente polar, con los dipolos dirigidos hacia el F.", porque: "Se resta la electronegatividad del S a la del F (4,0 - 2,5) para saber si cada enlace tiene dipolo y hacia dónde apunta. Un valor de 1,5 entre no metales da una unión covalente polar, con el dipolo orientado hacia el F, que es el más electronegativo." },
          { paso: "Como la molécula es angular, los dos dipolos no se cancelan: la suma vectorial es distinta de cero y el SF2 es polar.", porque: "Para saber si la molécula es polar hay que sumar vectorialmente los dipolos de enlace, no alcanza con mirar cada uno por separado. En una molécula angular los dos dipolos forman un ángulo y su suma no es cero, así que queda un dipolo neto." },
          { paso: "BCl3: 3 pares enlazantes y 0 libres alrededor del B, geometría trigonal plana con ángulos de 120 grados. El B queda con 6 electrones (excepción habitual al octeto). Cada enlace B-Cl tiene Delta EN = 1,0 (polar).", porque: "Con la misma lógica de TREPEV, 3 pares enlazantes y ningún libre dan geometría trigonal plana con ángulos de 120 grados. El B queda con 6 electrones, lo que es una excepción al octeto y no un error; cada enlace B-Cl es polar, con Delta EN = 1,0." },
          { paso: "Los tres dipolos B-Cl son de igual módulo y se reparten a 120 grados: su suma vectorial es cero y el BCl3 es apolar.", porque: "Los tres dipolos B-Cl tienen igual módulo y forman 120 grados entre sí, así que su suma vectorial es cero: cada dipolo queda compensado por los otros dos. Esto muestra que un compuesto puede tener enlaces polares y ser apolar, y que hay que verificar la simetría." }
        ],
        resultado: "SF2 es polar (geometría angular). BCl3 es apolar porque sus dipolos se cancelan por simetría trigonal plana."
      }
    ],
    errores_tipicos: [
      { error: "Contar solo los pares enlazantes y dibujar el SF2 como lineal.", como_evitar: "Contá todos los pares del átomo central (enlazantes y libres): 4 pares, geometría angular." },
      { error: "Decir que el BCl3 es polar porque tiene enlaces polares.", como_evitar: "Primero la polaridad de cada enlace, después la geometría, y por último la suma vectorial de los dipolos." }
    ]
  },
  {
    num: 7,
    nivel: "Intermedio",
    temas: ["uniones"],
    enunciado: "a) Escriba la estructura de Lewis del ion sulfito (SO3^2-), con el S central unido a tres O mediante enlaces simples (los O con carga negativa). Indique cuántos pares de electrones hay alrededor del S y determine la geometría del ion con TREPEV. b) Compare con el ion carbonato (CO3^2-), que tiene un C central con geometría trigonal plana, y explique por qué el sulfito no tiene la misma geometría aunque también tenga 3 átomos de O.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Electrones de valencia: 6 (S) + 3 x 6 (O) + 2 (carga -2) = 26 electrones, es decir 13 pares.", porque: "Se suman los electrones de valencia de todos los átomos, y como la carga es -2 se agregan 2 electrones más al total. Una cuenta que no da un número par de electrones no tiene sentido para formar pares completos, así que es una buena forma de detectar errores." },
          { paso: "Los 3 enlaces S-O son simples (3 pares enlazantes). El S conserva 1 par libre, y cada O tiene 3 pares libres (9 pares). Total: 3 + 1 + 9 = 13 pares.", porque: "Se verifica el octeto de cada átomo antes de dar por cerrado el dibujo: el S tiene 3 enlaces (6 electrones) más 1 par libre (2), total 8, y cada O tiene 1 enlace y 3 pares libres, también 8. Si alguno no cumple, hay que revisar la distribución de pares o la carga." },
          { paso: "Alrededor del S hay 4 pares: 3 enlazantes y 1 libre. La geometría electrónica es tetraédrica y la molecular (ion) es piramidal trigonal, con ángulo O-S-O menor que 109,5 grados (aprox. 106 grados).", porque: "Se cuentan los pares del S (3 enlazantes y 1 libre) para la geometría electrónica tetraédrica, y luego se descarta el par libre para describir la forma. El par libre empuja a los O y cierra el ángulo, por eso la forma es piramidal y no tetraédrica." }
        ],
        resultado: "Geometría piramidal trigonal, con 4 pares alrededor del S (3 enlazantes y 1 libre)."
      },
      {
        parte: "b)",
        pasos: [
          { paso: "CO3^2-: el C central tiene 3 regiones enlazantes (un enlace doble y dos simples cuentan como 3 regiones) y ningún par libre.", porque: "Se cuentan las regiones de electrones alrededor del C: el doble enlace y los dos simples cuentan cada uno como una región, y el C no tiene pares libres. Este conteo define la geometría por TREPEV, y no hace falta distinguir si el enlace es sigma o pi." },
          { paso: "Sin pares libres, la geometría es trigonal plana con ángulos de 120 grados.", porque: "Con 3 regiones y sin pares libres, la repulsión se minimiza cuando están en un mismo plano separadas 120 grados, lo que da la geometría trigonal plana. Esta geometría corresponde solo a un átomo central sin pares libres, y por eso sirve de comparación con el sulfito." },
          { paso: "El S del sulfito tiene 1 par libre además de sus 3 enlaces. Al ser 4 pares en total, la geometría deja de ser plana y se vuelve piramidal.", porque: "El S del sulfito tiene 3 enlaces y además 1 par libre, lo que suman 4 regiones de electrones. Como el par libre no se ve en la forma molecular, los O quedan en una pirámide; la clave es el par libre sobre el átomo central, no la cantidad de O."}
        ],
        resultado: "CO3^2- es trigonal plana (120 grados); SO3^2- es piramidal trigonal porque el S tiene un par libre."
      }
    ],
    errores_tipicos: [
      { error: "Tomar el sulfito como trigonal plana por tener 3 O, igual que el carbonato.", como_evitar: "Contá los pares libres del átomo central: el S del sulfito tiene 1, y eso cambia la geometría." },
      { error: "Olvidar la carga -2 al contar electrones de valencia y dibujar 24 electrones.", como_evitar: "Para un ion, sumá los electrones de la carga: negativa suma, positiva resta." }
    ]
  },
  {
    num: 8,
    nivel: "Intermedio",
    temas: ["uniones"],
    enunciado: "Para el eteno (C2H4, H2C=CH2): a) determine la hibridación de cada átomo de C, la geometría alrededor de cada uno y el ángulo H-C-H aproximado. b) Cuente en total cuántos enlaces sigma y cuántos enlaces pi tiene la molécula.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Cada C forma 3 enlaces sigma (2 C-H y 1 C-C) y 1 enlace pi. Alrededor de cada C hay 3 regiones de electrones y ningún par libre.", porque: "Se cuentan las regiones de electrones del C: los 2 enlaces C-H y el doble C=C dan 3 regiones y ningún par libre. Esta cuenta define la hibridación, y un doble enlace cuenta como una sola región aunque tenga un sigma y un pi." },
          { paso: "Con 3 regiones, la hibridación de cada C es sp^2: se forman 3 orbitales híbridos (los sigma) y queda 1 orbital p sin hibridar, que forma el enlace pi.", porque: "Cada región de electrones corresponde a un orbital híbrido: 3 regiones se forman con 1 orbital s y 2 orbitales p, es decir sp^2. Queda un orbital p sin hibridar, perpendicular al plano, y su solapamiento lateral con el del otro C forma el enlace pi." },
          { paso: "Geometría trigonal plana alrededor de cada C, con ángulo H-C-H aprox. 120 grados.", porque: "Con tres regiones de igual tipo, los orbitales sp^2 se ubican en un plano a 120 grados, y el ángulo H-C-H queda cerca de ese valor. Verificá que la geometría sea plana, porque el enlace pi obliga a los átomos a quedar en el mismo plano." }
        ],
        resultado: "Ambos C son sp^2, con geometría trigonal plana y ángulos de aprox. 120 grados."
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Enlaces sigma: 4 C-H + 1 C-C = 5 sigma.", porque: "Todo enlace, simple o múltiple, tiene exactamente un sigma. Por eso se cuentan los 4 C-H y el C-C de la molécula, que dan 5 enlaces sigma en total." },
          { paso: "Enlaces pi: 1 (el lateral del doble enlace C=C).", porque: "Los enlaces pi se cuentan aparte: solo los dobles y triples los tienen, y el eteno tiene un único doble enlace. Un enlace simple, incluso el C-C, no aporta ningún pi." }
        ],
        resultado: "5 enlaces sigma y 1 enlace pi."
      }
    ],
    errores_tipicos: [
      { error: "Decir que los C son sp^3 porque cada uno tiene H.", como_evitar: "La hibridación depende de las regiones de electrones alrededor de cada C: aquí son 3, así que es sp^2." },
      { error: "Contar el doble enlace C=C como 2 regiones en TREPEV.", como_evitar: "Para TREPEV un enlace múltiple cuenta como 1 región; sigma y pi son la forma de describir el enlace, no la geometría." }
    ]
  },
  {
    num: 9,
    nivel: "Intermedio",
    temas: ["uniones"],
    enunciado: "El dióxido de azufre (SO2) se libera en la combustión de carbón con azufre. a) Escriba su estructura de Lewis usando la forma O=S->O (un enlace doble S=O, un enlace dativo S->O y un par libre sobre el S). Determine la geometría alrededor del S por TREPEV e indique el ángulo aproximado. b) Justifique si la molécula es polar, sabiendo que el CO2 es lineal y apolar. Electronegatividades (Pauling): S 2,5; O 3,5; C 2,5.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Electrones de valencia: 6 (S) + 2 x 6 (O) = 18 electrones, es decir 9 pares.", porque: "Se suman los electrones de valencia de todos los átomos: 6 del S y 6 de cada O, en total 18, es decir 9 pares para distribuir. Como el S es el átomo central, conviene tener este total a mano antes de dibujar la estructura." },
          { paso: "Supuesto: se usa la forma O=S->O. El S central tiene un enlace doble, un enlace dativo (aportado por el S) y 1 par libre; el O unido por enlace dativo tiene 3 pares libres y el O del doble enlace tiene 2 pares libres.", porque: "Se usa la forma O=S->O: el S tiene un doble enlace, un enlace dativo (que aporta el S) y 1 par libre, y con eso cumple el octeto junto con los O. Verificá que la cuenta de electrones alrededor del S dé 8, porque si no hay octeto la forma no sirve." },
          { paso: "Alrededor del S hay 3 regiones de electrones (doble enlace, enlace dativo y par libre): geometría electrónica trigonal plana. La molécula es angular, con ángulo O-S-O aprox. 119 grados.", porque: "Con 3 regiones (doble enlace, dativo y par libre) la geometría electrónica es trigonal plana, con 120 grados ideales. El par libre repele más que los enlaces y comprime un poco el ángulo O-S-O, por eso el valor real es de aprox. 119 grados y la forma molecular es angular." }
        ],
        resultado: "Geometría molecular angular, ángulo aprox. 119 grados."
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Cada enlace S-O tiene Delta EN = 3,5 - 2,5 = 1,0: son enlaces covalentes polares, con dipolos dirigidos hacia el O.", porque: "Se resta la electronegatividad del S a la del O (3,5 - 2,5 = 1,0), y eso indica que cada enlace S-O es covalente polar. El dipolo apunta hacia el O, que atrae más el par; conviene anotar esa dirección porque después hay que sumar los dipolos." },
          { paso: "En el CO2 (lineal, simétrico) los dos dipolos C=O son iguales y opuestos y se cancelan: el CO2 es apolar.", porque: "En el CO2, lineal y simétrico, los dos dipolos C=O tienen el mismo módulo y dirección opuesta, así que se cancelan. Aunque los enlaces sean polares, la molécula es apolar porque la suma vectorial es cero." },
          { paso: "En el SO2 la geometría angular impide que los dipolos S-O se anulen: la suma vectorial es distinta de cero y la molécula es polar.", porque: "En el SO2 la forma angular impide que los dos dipolos S-O se anulen: forman un ángulo de aprox. 119 grados y su suma es distinta de cero. Por eso la molécula tiene un dipolo neto y es polar." }
        ],
        resultado: "El SO2 es polar (geometría angular); el CO2 es apolar (lineal y simétrico)."
      }
    ],
    errores_tipicos: [
      { error: "Decir que el SO2 es lineal porque tiene 2 O, igual que el CO2.", como_evitar: "Contá las regiones alrededor del S: el par libre cambia la geometría a angular." },
      { error: "Concluir que la molécula es apolar porque tiene enlaces dobles.", como_evitar: "Los enlaces dobles no determinan la polaridad sola: hay que hacer la suma vectorial de los dipolos." }
    ]
  },
  {
    num: 10,
    nivel: "Intermedio",
    temas: ["uniones"],
    enunciado: "Para las sustancias Mg (metal), MgO, Cl2 y NH3: a) indique el tipo de unión dentro de cada una (metálica, iónica, covalente no polar o covalente polar) y el tipo de partículas que la forman. b) A partir del tipo de unión, explique por qué el MgO tiene un punto de fusión mucho mayor que el Cl2. Electronegatividades (Pauling): Mg 1,2; O 3,5; Cl 3,0; N 3,0; H 2,1.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Mg: solo hay átomos de metal, así que la unión es metálica; las partículas son átomos de Mg en una red con electrones de valencia deslocalizados.", porque: "Como el Mg es un metal, no hay enlace entre átomos con un par compartido: los electrones de valencia se deslocalizan y se mueven por toda la red. Esa movilidad explica la conductividad y la maleabilidad de los metales, y por eso conviene reconocer el tipo de sustancia antes de mirar Delta EN." },
          { paso: "MgO: Delta EN = 3,5 - 1,2 = 2,3 > 2, y es metal con no metal: unión iónica. Las partículas son iones Mg^2+ y O^2- en una red, sin moléculas.", porque: "Se calcula Delta EN = 3,5 - 1,2 = 2,3, que es mayor que 2, y como es un metal con un no metal el criterio da unión iónica. Esto significa que se forman iones Mg^2+ y O^2- que se mantienen unidos por atracción electrostática en una red, y no moléculas." },
          { paso: "Cl2: Delta EN = 0: unión covalente no polar, con partículas que son moléculas Cl2.", porque: "Con dos átomos iguales la diferencia de electronegatividad es cero y el par se comparte por igual, así que el Cl2 forma una molécula discreta con enlace covalente no polar. Por eso las partículas que describen la sustancia son moléculas de Cl2." },
          { paso: "NH3: Delta EN (N-H) = 3,0 - 2,1 = 0,9: covalente polar, con partículas que son moléculas NH3.", porque: "Entre dos no metales el enlace es covalente, y como Delta EN = 0,9 es distinto de cero, el N atrae un poco más el par que el H y el enlace es polar. Las partículas que forman la sustancia son moléculas de NH3 unidas por enlaces covalentes." }
        ],
        resultado: "Mg: metálica (átomos en red); MgO: iónica (iones); Cl2: covalente no polar (moléculas); NH3: covalente polar (moléculas)."
      },
      {
        parte: "b)",
        pasos: [
          { paso: "En el MgO hay que vencer las atracciones electrostáticas entre iones Mg^2+ y O^2- de carga 2, que son muy fuertes, para separar la red.", porque: "En el MgO hay que vencer la atracción electrostática entre Mg^2+ y O^2- para separar la red. Como las cargas son 2+ y 2-, esa atracción es mucho más fuerte que la de iones con carga 1, y esa es la clave de la parte b) que relaciona el tipo de unión con el punto de fusión."},
          { paso: "En el Cl2 al fundir se separan moléculas; solo hay que vencer fuerzas intermoleculares débiles (de dispersión), sin romper el enlace Cl-Cl.", porque: "Al fundir el Cl2 no se rompen enlaces covalentes, solo se vencen las fuerzas débiles entre moléculas apolares (de dispersión). Por eso su punto de fusión es bajo: se necesita poca energía para separar las moléculas." },
          { paso: "Por eso el MgO funde a una temperatura mucho más alta que el Cl2.", porque: "La comparación final se basa en la intensidad de las fuerzas que hay que vencer: las iónicas son muy intensas y las intermoleculares del Cl2 son débiles. Conviene que la explicación hable de fuerzas que se rompen y no de enlaces, porque esa distinción es la que más se confunde." }
        ],
        resultado: "El MgO tiene fuerzas electrostáticas intensas en la red iónica; el Cl2 tiene fuerzas intermoleculares débiles."
      }
    ],
    errores_tipicos: [
      { error: "Clasificar el MgO como covalente porque el O es no metal, sin mirar que el Mg es metal.", como_evitar: "Metal con no metal y Delta EN > 2 es iónico." },
      { error: "Decir que al fundir el Cl2 se rompe el enlace Cl-Cl.", como_evitar: "Al fundir o hervir se rompen fuerzas intermoleculares, no enlaces covalentes." }
    ]
  },
  {
    num: 11,
    nivel: "Avanzado",
    temas: ["uniones"],
    enunciado: "La molécula de HCl en fase gaseosa tiene un momento dipolar de 1,08 D y una distancia de enlace de 1,27 x 10^-10 m. a) Calcule la carga parcial sobre el H, en coulomb y como fracción de la carga del electrón (e = 1,60 x 10^-19 C), usando mu = q x d. Dato: 1 D = 3,34 x 10^-30 C.m. b) Justifique qué átomo tiene la carga parcial negativa y explique por qué el H2O (mu = 1,85 D) es polar mientras que el CO2 (mu = 0) es apolar aunque ambos tengan enlaces polares.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Pasar el momento dipolar a unidades SI: mu = 1,08 D x 3,34 x 10^-30 C.m/D = 3,61 x 10^-30 C.m.", porque: "La fórmula mu = q x d usa unidades SI (C.m), y el dato viene en debye. Hay que convertirlo con 1 D = 3,34 x 10^-30 C.m antes de dividir, porque si no el resultado queda en una unidad incoherente." },
          { paso: "Despejar la carga: q = mu / d = 3,61 x 10^-30 C.m / 1,27 x 10^-10 m = 2,84 x 10^-20 C.", porque: "Se despeja q dividiendo mu por la distancia del enlace, expresada en metros. Un dipolo son dos cargas iguales y opuestas separadas por la distancia d, y la relación mu = q x d es la que permite obtener la carga parcial a partir del momento dipolar." },
          { paso: "Expresar en unidades de e: 2,84 x 10^-20 C / 1,60 x 10^-19 C = 0,178 e.", porque: "Se divide la carga obtenida por la carga del electrón para expresarla como fracción de e, que es la unidad habitual para cargas parciales en moléculas. Un valor de 0,178 e indica que el H tiene una carga parcial mucho menor que la de un electrón completo." }
        ],
        resultado: "q = 2,84 x 10^-20 C, es decir 0,178 e (carga parcial sobre el H)."
      },
      {
        parte: "b)",
        pasos: [
          { paso: "El Cl (Delta EN = 0,9) es más electronegativo: atrae el par hacia sí y queda con carga parcial negativa (delta-); el H queda con delta+.", porque: "Se comparan las electronegatividades de los dos átomos del enlace: el Cl (3,0) es más electronegativo que el H (2,1). Por eso el Cl atrae con más fuerza la densidad electrónica y queda con carga parcial negativa, mientras que el H queda con carga parcial positiva." },
          { paso: "En el H2O los dos dipolos O-H están inclinados en una geometría angular y su suma vectorial es distinta de cero: mu = 1,85 D.", porque: "En el H2O los dos dipolos O-H forman un ángulo por la geometría angular, y su suma vectorial no es cero. Por eso la molécula tiene un momento dipolar neto de 1,85 D, que es el dato que se usa para confirmar la polaridad." },
          { paso: "En el CO2 los dos dipolos C=O son iguales, de sentido opuesto y forman una molécula lineal: se cancelan y mu = 0.", porque: "En el CO2 los dipolos C=O son iguales, forman 180 grados entre sí y se cancelan, así que mu = 0. Este caso muestra que un enlace polar no alcanza para que la molécula sea polar: hay que mirar si la suma de dipolos se anula." }
        ],
        resultado: "El Cl tiene la carga parcial negativa. El H2O es polar por su geometría angular, y el CO2 es apolar porque sus dipolos se cancelan."
      }
    ],
    errores_tipicos: [
      { error: "Dividir mu en debye directamente por d en metros, sin convertir el debye a C.m.", como_evitar: "Convertí siempre a unidades SI antes de dividir: 1 D = 3,34 x 10^-30 C.m." },
      { error: "Decir que el CO2 es polar porque sus enlaces C=O son polares.", como_evitar: "Primero verificá la polaridad de cada enlace, después la geometría, y por último la suma de dipolos." }
    ]
  },
  {
    num: 12,
    nivel: "Avanzado",
    temas: ["uniones"],
    enunciado: "Se comparan las moléculas CCl4, CHCl3 y CH3Cl (electronegatividades Pauling: C 2,5; H 2,1; Cl 3,0). a) Clasifique cada molécula como polar o apolar, justificando con TREPEV y con la suma vectorial de dipolos. b) Un estudiante argumenta: 'como el enlace C-Cl es polar, el CCl4 también debe ser polar'. Discuta si el argumento es correcto. c) Calcule la diferencia de electronegatividad de los enlaces C-Cl y C-H, y ordénelos por polaridad.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "CCl4: el C tiene 4 pares enlazantes y ningún par libre: geometría tetraédrica (109,5 grados). Los 4 dipolos C-Cl son iguales y se dirigen a los vértices de un tetraedro: su suma es cero. El CCl4 es apolar.", porque: "Con 4 pares enlazantes y ningún par libre la geometría es tetraédrica, y los 4 dipolos C-Cl tienen el mismo módulo. Como apuntan a los vértices de un tetraedro, su suma vectorial es cero, y por eso el CCl4 es apolar." },
          { paso: "CHCl3: el C sigue siendo tetraédrico, pero ahora uno de los enlaces es C-H y los otros 3 son C-Cl. La simetría se rompe y la suma de dipolos es distinta de cero: el CHCl3 es polar.", porque: "Al reemplazar un Cl por un H, los enlaces ya no son iguales: el C-H tiene una Delta EN distinta (0,4 frente a 0,5) y los dipolos dejan de compensarse. La suma queda distinta de cero, y el CHCl3 resulta polar." },
          { paso: "CH3Cl: tetraédrica y asimétrica (un solo Cl): el dipolo C-Cl no se cancela. El CH3Cl es polar.", porque: "En el CH3Cl el enlace C-Cl domina el dipolo de la molécula, y los tres C-H no están dispuestos para anularlo. La geometría es asimétrica y la suma de dipolos no es cero, por lo que el CH3Cl es polar." }
        ],
        resultado: "CCl4 apolar; CHCl3 y CH3Cl polares."
      },
      {
        parte: "b)",
        pasos: [
          { paso: "El argumento es incorrecto: que un enlace sea polar no hace polar a la molécula.", porque: "La polaridad de una molécula se define por la suma vectorial de todos sus dipolos de enlace, no por uno solo. Por eso el argumento del estudiante mezcla dos conceptos distintos, y conviene separarlos para discutirlo." },
          { paso: "En el CCl4 los 4 dipolos C-Cl forman una resultante nula por la geometría tetraédrica simétrica.", porque: "En el CCl4 los cuatro dipolos C-Cl, de igual módulo y apuntando a los vértices del tetraedro, se suman vectorialmente y dan cero. Esa es la prueba de que la geometría decide la polaridad, y no solo la presencia de enlaces polares." }
        ],
        resultado: "El CCl4 es apolar aunque tenga 4 enlaces polares."
      },
      {
        parte: "c)",
        pasos: [
          { paso: "Delta EN (C-Cl) = 3,0 - 2,5 = 0,5. Delta EN (C-H) = 2,5 - 2,1 = 0,4.", porque: "Se resta la electronegatividad del C a la del Cl (3,0 - 2,5 = 0,5) y a la del H (2,5 - 2,1 = 0,4). Este Delta EN mide la polaridad de cada enlace, y conviene anotarlo con el átomo más electronegativo como referencia." },
          { paso: "Orden de polaridad creciente: C-H (0,4) < C-Cl (0,5).", porque: "Como la polaridad crece con Delta EN, el enlace C-Cl (0,5) es algo más polar que el C-H (0,4). La diferencia es chica, pero alcanza para ordenarlos, y ambos son enlaces covalentes polares." }
        ],
        resultado: "El enlace C-Cl es algo más polar que el C-H (0,5 frente a 0,4)."
      }
    ],
    errores_tipicos: [
      { error: "Decir que una molécula es polar solo porque tiene enlaces polares.", como_evitar: "Polaridad molecular = suma vectorial de dipolos. Verificá la geometría antes de concluir." },
      { error: "Dibujar el CCl4 plano (cuadrado) en lugar de tetraédrico.", como_evitar: "Con 4 pares TREPEV da tetraedro (109,5 grados); la geometría plana cuadrada requiere 2 pares libres." }
    ]
  },
  {
    num: 13,
    nivel: "Avanzado",
    temas: ["uniones"],
    enunciado: "Se consideran KCl, Cl2, AlCl3 y MgCl2 (electronegatividades Pauling: K 0,8; Mg 1,2; Al 1,5; Cl 3,0). a) Clasifique KCl, Cl2 y AlCl3 con el criterio de Delta EN del apunte, y señale si hay una advertencia sobre el AlCl3. b) Ordene MgCl2, KCl y AlCl3 de menor a mayor carácter iónico. c) Explique por qué el carácter iónico aumenta al aumentar Delta EN.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "KCl: Delta EN = 3,0 - 0,8 = 2,2 > 2: unión iónica. Cl2: Delta EN = 0: covalente no polar.", porque: "Se aplica el criterio del apunte: Delta EN = 2,2 es mayor que 2, así que el KCl es iónico. Para el Cl2 la diferencia es cero, por lo que es covalente no polar; conviene comparar cada valor con los límites 0 y 2 para no equivocarse." },
          { paso: "AlCl3: Delta EN = 3,0 - 1,5 = 1,5 < 2, así que por el criterio sería covalente. Advertencia: el Al es un metal y el enlace tiene carácter iónico parcial; el criterio es una aproximación y la unión real es un continuo.", porque: "El AlCl3 tiene Delta EN = 1,5, menor que 2, así que el criterio lo dejaría como covalente. Pero el Al es un metal y su catión pequeño y muy cargado (Al^3+) polariza mucho la nube electrónica del Cl^-; el criterio es solo una aproximación y el enlace tiene un carácter iónico parcial importante." }
        ],
        resultado: "KCl iónico; Cl2 covalente no polar; AlCl3 covalente según el criterio, con carácter iónico parcial importante."
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Delta EN: AlCl3 = 1,5; MgCl2 = 3,0 - 1,2 = 1,8; KCl = 2,2.", porque: "Se calcula Delta EN de cada compuesto con la misma tabla: AlCl3 da 1,5, MgCl2 da 1,8 y KCl da 2,2. Estos valores sirven para comparar el carácter iónico sin necesidad de mirar la fórmula ni el tamaño de los iones." },
          { paso: "Orden creciente de carácter iónico: AlCl3 < MgCl2 < KCl.", porque: "Con los valores ya calculados se ordena de menor a mayor carácter iónico: AlCl3 (1,5) < MgCl2 (1,8) < KCl (2,2). Conviene verificar que el orden siga el valor numérico de Delta EN y no el tamaño del catión o la masa molar." }
        ],
        resultado: "AlCl3 < MgCl2 < KCl (de menor a mayor carácter iónico)."
      },
      {
        parte: "c)",
        pasos: [
          { paso: "Cuando Delta EN es grande, el átomo más electronegativo atrae con mucha más fuerza el electrón, y la transferencia de carga entre átomos se acerca a un electrón completo.", porque: "La electronegatividad mide cuánto atrae un átomo el par de electrones de un enlace. Si la diferencia es grande, el par se desplaza casi por completo hacia el átomo más electronegativo, y la transferencia se acerca a la de un electrón completo." },
          { paso: "Los iones resultantes (catión y anión) se mantienen unidos por atracción electrostática, que es el carácter iónico del enlace.", porque: "Cuando la transferencia es casi total, el enlace se describe como una atracción electrostática entre un catión y un anión. Por eso el carácter iónico aumenta con Delta EN: a mayor transferencia, mayor carga iónica y más fuerte la atracción." }
        ],
        resultado: "Al aumentar Delta EN, el par se desplaza más hasta transferirse por completo, y el enlace se vuelve más iónico."
      }
    ],
    errores_tipicos: [
      { error: "Clasificar el AlCl3 como iónico solo porque tiene un metal.", como_evitar: "Mirá Delta EN (1,5 < 2) y recordá que el criterio es aproximado; el carácter iónico es parcial." },
      { error: "Ordenar por el tamaño del catión o por la masa molar en lugar de por Delta EN.", como_evitar: "El carácter iónico, según la teoría del apunte, se compara con Delta EN." }
    ]
  },
  {
    num: 14,
    nivel: "Avanzado",
    temas: ["uniones"],
    enunciado: "Ordene de menor a mayor ángulo de enlace H-X-H las especies H2O, NH3, CH4 y NH4^+ (X es el átomo central en cada una). a) Para cada especie determine cuántos pares enlazantes y cuántos libres hay alrededor del átomo central y la geometría molecular. b) Explique por qué el ángulo del H2O es menor que el del NH3. c) Justifique por qué el NH4^+ y el CH4 tienen el mismo ángulo.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "H2O: O con 2 enlazantes y 2 libres (4 pares): geometría electrónica tetraédrica, molecular angular.", porque: "Para cada especie se cuentan los pares del átomo central: los enlazantes se ven en la fórmula y los libres se calculan con los electrones de valencia. En el H2O el O tiene 4 pares en total, y todos definen la geometría electrónica tetraédrica." },
          { paso: "NH3: N con 3 enlazantes y 1 libre (4 pares): tetraédrica electrónica, molecular piramidal trigonal.", porque: "En el NH3 el N tiene 3 enlazantes y 1 libre, es decir 4 pares, con geometría electrónica tetraédrica. Como el par libre no se ve en la forma molecular, la geometría molecular pasa a ser piramidal trigonal." },
          { paso: "CH4 y NH4^+: 4 enlazantes y 0 libres: tetraédrica tanto electrónica como molecular.", porque: "En el CH4 y el NH4^+ el átomo central tiene 4 enlazantes y ningún par libre. Por eso la geometría electrónica y la molecular coinciden en tetraedro, y el ángulo ideal es de 109,5 grados." }
        ],
        resultado: "H2O: 2 libres, angular. NH3: 1 libre, piramidal. CH4 y NH4^+: 0 libres, tetraédricos."
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Los pares libres repelen más que los enlazantes. El H2O tiene 2 pares libres y el NH3 tiene 1: el ángulo del H2O se comprime más, hasta aprox. 104,5 grados (frente a aprox. 107 grados del NH3).", porque: "Los pares libres ocupan más espacio que los enlazantes y repelen con más fuerza, así que comprimen más el ángulo H-X-H. Los ángulos se ordenan según la cantidad de pares libres: con 2 libres el ángulo es el más chico, luego con 1 libre y, sin libres, 109,5 grados." }
        ],
        resultado: "El H2O tiene un ángulo menor (aprox. 104,5 grados) que el NH3 (aprox. 107 grados) por tener un par libre más."
      },
      {
        parte: "c)",
        pasos: [
          { paso: "Ambos tienen 4 pares enlazantes y 0 pares libres alrededor del átomo central.", porque: "Se cuenta la distribución de pares alrededor del átomo central: 4 enlazantes y ningún libre en ambas especies. Sin pares libres la repulsión es igual entre los cuatro enlaces, y los pares se ubican como en un tetraedro regular." },
          { paso: "Por eso ambos tienen ángulo de 109,5 grados.", porque: "Como la geometría es tetraédrica regular en los dos casos, el ángulo H-X-H es el ideal de 109,5 grados. El NH4^+ tiene la misma forma que el CH4 porque el N tiene 4 enlaces y ningún par libre, no por tener carga." }
        ],
        resultado: "El CH4 y el NH4^+ tienen ángulo de 109,5 grados."
      }
    ],
    errores_tipicos: [
      { error: "Usar 109,5 grados para todas las moléculas con 4 pares de electrones.", como_evitar: "El valor 109,5 vale solo sin pares libres; los libres comprimen el ángulo." },
      { error: "Decir que el NH4^+ es piramidal como el NH3 porque ambos tienen N.", como_evitar: "Contá los pares libres del átomo central: el NH4^+ tiene 0, el NH3 tiene 1." }
    ]
  },
  {
    num: 15,
    nivel: "Avanzado",
    temas: ["uniones"],
    enunciado: "El ozono (O3) es una molécula angular que absorbe radiación ultravioleta. a) Escriba las dos estructuras de Lewis resonantes del O3, O=O->O y O->O=O (con un par libre sobre el O central), e indique qué significan para el enlace O-O. b) Determine la geometría de la molécula por TREPEV y el número de enlaces sigma y pi (considerando que cada enlace O-O tiene un sigma y, entre ambos, una parte pi deslocalizada). c) Justifique si el O3 es polar considerando la diferencia de electronegatividad de los enlaces O-O (O: 3,5).",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Electrones de valencia: 3 x 6 = 18 electrones, es decir 9 pares. En cada forma el O central tiene un par libre, y los enlaces se reparten entre un enlace doble y uno dativo.", porque: "Se cuentan los electrones de valencia del O3 (3 x 6 = 18, es decir 9 pares), y en cada forma el O central tiene un par libre. Con esos 9 pares se completa el octeto de los tres átomos en las dos formas, y eso hace válidas ambas representaciones." },
          { paso: "Ambas formas contribuyen a la molécula real: la verdadera estructura es un híbrido de resonancia en el que los dos enlaces O-O son equivalentes.", porque: "Ninguna de las dos formas describe por sí sola la molécula real: la estructura verdadera es un híbrido de resonancia, un promedio de todas las formas posibles. Por eso los dos enlaces O-O son equivalentes, aunque en una forma aparezca un doble y en la otra un dativo." },
          { paso: "Las formas no son moléculas distintas que se alternan en el tiempo: son representaciones de una única molécula con electrones deslocalizados.", porque: "Las formas resonantes no son moléculas distintas que se alternan en el tiempo: son representaciones de una única molécula con electrones deslocalizados. Este concepto evita la idea errónea de que el O3 cambia de una forma a otra." }
        ],
        resultado: "Las dos formas resonantes describen una única molécula híbrida, con los dos enlaces O-O equivalentes."
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Alrededor del O central hay 3 regiones de electrones: el doble enlace, el enlace dativo (o simple) y el par libre.", porque: "Alrededor del O central se cuentan las regiones de electrones: el doble enlace, el dativo (o simple) y el par libre, un total de 3. Cada enlace múltiple cuenta como una sola región en TREPEV, y el par libre cuenta también." },
          { paso: "Con 3 regiones la geometría electrónica es trigonal plana y la molecular es angular, con ángulo aprox. 117 grados.", porque: "Con 3 regiones la geometría electrónica es trigonal plana, con 120 grados ideales. El par libre repele más que los enlaces y comprime el ángulo, por eso la forma molecular es angular y el valor real ronda los 117 grados." },
          { paso: "Enlaces: 2 sigma (uno por cada O-O) y 1 pi deslocalizado entre los dos enlaces O-O.", porque: "Se separan los sigma y los pi: cada enlace O-O tiene un sigma, lo que da 2 sigma en total, y la parte pi se reparte entre los dos enlaces por la resonancia. Así el pi no es un enlace fijo sino una densidad electrónica deslocalizada." }
        ],
        resultado: "Geometría angular (aprox. 117 grados), con 2 sigma y una parte pi deslocalizada."
      },
      {
        parte: "c)",
        pasos: [
          { paso: "Delta EN (O-O) = 3,5 - 3,5 = 0: los enlaces O-O son covalentes no polares, sin dipolos de enlace.", porque: "Como los dos átomos son O, la diferencia de electronegatividad es cero y cada enlace O-O es covalente no polar. Con Delta EN = 0 no hay dipolo de enlace, y ese es el punto de partida para analizar la polaridad de la molécula." },
          { paso: "Con dipolos de enlace nulos, por el modelo del apunte la suma vectorial es cero. Supuesto: esto no coincide del todo con el dato experimental, ya que el O3 tiene un pequeño momento dipolar debido a la distribución de cargas de sus formas resonantes, que el apunte no cubre.", porque: "Con el modelo de Delta EN la suma de dipolos da cero, pero el dato experimental muestra un pequeño momento dipolar en el O3. Ese efecto se asocia a la distribución de cargas de las formas resonantes, algo que el modelo no cubre, así que el resultado debe tomarse con cautela." }
        ],
        resultado: "Según el modelo de Delta EN, los enlaces O-O son no polares; el O3 real tiene un pequeño momento dipolar que el apunte no explica."
      }
    ],
    errores_tipicos: [
      { error: "Creer que las formas de resonancia son moléculas distintas que se alternan.", como_evitar: "Las formas son representaciones de una misma molécula; la real es el híbrido de todas." },
      { error: "Decir que el O3 es lineal como el CO2 porque tiene 3 átomos.", como_evitar: "Contá las regiones de electrones alrededor del O central: 3 (incluye el par libre), por lo que es angular." }
    ]
  },
  {
    num: 16,
    nivel: "Tipo parcial",
    temas: ["uniones", "soluciones"],
    enunciado: "En el análisis de los gases de salida de una caldera industrial se detectan CO2, SO2 y CS2. Electronegatividades (Pauling): C 2,5; O 3,5; S 2,5. a) Escriba la estructura de Lewis del CO2 y del CS2 (ambas lineales) y calcule la diferencia de electronegatividad de los enlaces C=O, C=S. Clasifique cada enlace como covalente polar o no polar. b) Escriba la estructura de Lewis del SO2 usando la forma O=S->O (un par libre sobre el S) y determine su geometría por TREPEV con el ángulo aproximado. c) Justifique si el CO2 y el SO2 son moléculas polares. d) Justifique cuál de los dos gases (CO2 o SO2) se disuelve más en agua, teniendo en cuenta la polaridad de las moléculas.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "CO2: 4 + 2 x 6 = 16 electrones (8 pares). Estructura O=C=O: 2 enlaces dobles, sin pares libres en el C y 2 pares libres en cada O.", porque: "Se cuentan los electrones del CO2 (4 + 2 x 6 = 16, es decir 8 pares) y se distribuyen con el C central y dos dobles enlaces. El C, menos electronegativo que el O, cumple su octeto con 4 pares compartidos, y cada O conserva 2 pares libres." },
          { paso: "CS2: 4 + 2 x 6 = 16 electrones. Estructura S=C=S, con la misma forma que el CO2 y 2 pares libres en cada S.", porque: "El S también tiene 6 electrones de valencia, así que el CS2 se dibuja igual que el CO2: dobles enlaces y 2 pares libres en cada S. La geometría depende del número de regiones de electrones, por eso la forma lineal se repite." },
          { paso: "Delta EN (C=O) = 3,5 - 2,5 = 1,0: enlace covalente polar. Delta EN (C=S) = 2,5 - 2,5 = 0,0: enlace covalente no polar.", porque: "Se resta la electronegatividad de los átomos de cada enlace: C=O da 3,5 - 2,5 = 1,0 (covalente polar) y C=S da 2,5 - 2,5 = 0,0 (covalente no polar). Como el C y el S tienen la misma electronegatividad, su enlace no tiene dipolo." }
        ],
        resultado: "CO2: enlaces C=O covalentes polares. CS2: enlaces C=S covalentes no polares (Delta EN = 0)."
      },
      {
        parte: "b)",
        pasos: [
          { paso: "SO2: 6 + 2 x 6 = 18 electrones (9 pares). Estructura O=S->O, con enlace doble, enlace dativo y 1 par libre sobre el S.", porque: "Se cuentan los electrones de valencia del SO2 (6 + 2 x 6 = 18, es decir 9 pares) y se dibuja la forma O=S->O, que es la que cumple el octeto del S y de los O. Verificar esa cuenta evita dibujar una estructura sin pares suficientes." },
          { paso: "Alrededor del S hay 3 regiones de electrones (doble enlace, dativo y par libre): geometría electrónica trigonal plana y molecular angular, con ángulo aprox. 119 grados.", porque: "Con 3 regiones alrededor del S (doble enlace, dativo y par libre) la geometría electrónica es trigonal plana. El par libre repele más y comprime el ángulo, dando una forma molecular angular de aprox. 119 grados." }
        ],
        resultado: "Geometría angular, ángulo aprox. 119 grados."
      },
      {
        parte: "c)",
        pasos: [
          { paso: "CO2: lineal y simétrico. Sus dipolos C=O son iguales y opuestos: la suma es cero y el CO2 es apolar.", porque: "En el CO2 la geometría lineal hace que los dos dipolos C=O tengan el mismo módulo y dirección opuesta. Por eso se cancelan y la molécula es apolar, aunque sus enlaces sean polares." },
          { paso: "SO2: enlaces S=O polares (Delta EN = 1,0) con geometría angular, sin cancelación: el SO2 es polar.", porque: "En el SO2 los dipolos S-O no están alineados por la forma angular, y su suma no es cero. Eso hace que la molécula tenga un momento dipolar neto, así que es polar." }
        ],
        resultado: "El CO2 es apolar; el SO2 es polar."
      },
      {
        parte: "d)",
        pasos: [
          { paso: "Regla semejante disuelve semejante: el agua es polar, por lo que disuelve mejor a sustancias polares como el SO2 que al CO2 apolar.", porque: "Se aplica la regla 'semejante disuelve semejante': el agua es polar y disuelve mejor a moléculas polares. Por eso se compara la polaridad de cada gas con la del solvente, porque las interacciones dipolo-dipolo favorecen la solubilidad." },
          { paso: "Además, el SO2 reacciona parcialmente con el agua formando H2SO3, lo que aumenta su solubilidad aparente.", porque: "Además de la polaridad, el SO2 reacciona en parte con el agua para formar H2SO3, y esa reacción consume gas disuelto y desplaza el equilibrio hacia la disolución. Este efecto no ocurre con el CO2, que es apolar y prácticamente no reacciona con el agua." }
        ],
        resultado: "El SO2 se disuelve más en agua que el CO2 porque es polar y reacciona con el agua."
      }
    ],
    errores_tipicos: [
      { error: "Asumir que el S es más electronegativo que el C y clasificar el C=S como polar.", como_evitar: "Comparé los valores de la tabla: C y S tienen la misma EN (2,5), así que Delta = 0." },
      { error: "Decir que el SO2 es apolar porque es 'simétrico' como el CO2.", como_evitar: "El SO2 no es lineal: el par libre del S lo vuelve angular, y los dipolos no se cancelan." }
    ]
  }
];

window.EJERCITACION["nomenclatura"] = [
  {
    num: 1,
    nivel: "Básico",
    temas: ["nomenclatura"],
    enunciado: "Determine el estado de oxidación del elemento indicado en cada especie: a) Mn en KMnO4; b) S en H2SO4; c) S en Na2S.",
    resolucion: [
      {
        parte: "",
        pasos: [
          { paso: "Los metales alcalinos (K, Na) tienen nº de oxidación +1; el O suele ser -2 y el H suele ser +1.", porque: "Antes de calcular, se fijan los nº de oxidación de los elementos conocidos: los metales alcalinos son +1, el O suele ser -2 y el H suele ser +1. Estos valores de referencia son los que se usan para despejar el elemento que se pide." },
          { paso: "KMnO4: 0 = (+1) + Mn + 4 x (-2) -> Mn = +7.", porque: "Se plantea que la suma de los nº de oxidación de todos los átomos de una especie neutra es 0, multiplicando cada uno por su subíndice. Con esa ecuación se despeja el Mn, que es la incógnita, y el resultado +7 es el que se pide." },
          { paso: "H2SO4: 0 = 2 x (+1) + S + 4 x (-2) -> S = +6.", porque: "Se aplica la misma suma, con 2 H (+1 cada uno) y 4 O (-2 cada uno), y se despeja el S. Hay que multiplicar cada nº por su subíndice, y olvidar hacerlo es el error más común en esta cuenta." },
          { paso: "Na2S: 0 = 2 x (+1) + S -> S = -2 (el S es el anión sulfuro).", porque: "En Na2S la especie es neutra, así que 2 x (+1) más el S debe dar 0, y el S queda en -2. Como el Na es más electropositivo, el S actúa como anión y lleva el nº negativo." }
        ],
        resultado: "Mn = +7 en KMnO4; S = +6 en H2SO4; S = -2 en Na2S."
      }
    ],
    errores_tipicos: [
      { error: "Olvidar multiplicar por el subíndice, por ejemplo contar un solo O en KMnO4 (-2 en lugar de -8).", como_evitar: "Multiplicá cada nº de oxidación por la cantidad de átomos antes de sumar." },
      { error: "Asignar al S de Na2S el mismo nº que tiene en H2SO4.", como_evitar: "El nº de oxidación se calcula para cada especie por separado." }
    ]
  },
  {
    num: 2,
    nivel: "Básico",
    temas: ["nomenclatura"],
    enunciado: "Escriba la fórmula de: a) el óxido de cloro(VII); b) el óxido de calcio. Justifique cada fórmula con los números de oxidación, y nombre el compuesto de a) por la nomenclatura IUPAC sistemática.",
    resolucion: [
      {
        parte: "",
        pasos: [
          { paso: "Óxido de cloro(VII): Cl con nº +7 y O con -2. Se cruzan los valores: 2 Cl (+7) y 7 O (-2) -> Cl2O7.", porque: "En un compuesto neutro los subíndices se obtienen cruzando los nº de oxidación: el Cl (+7) se escribe con subíndice 2 y el O (-2) con subíndice 7. Así la suma de cargas da 0 (2 x 7 = 14 = 7 x 2)." },
          { paso: "Óxido de calcio: Ca con +2 y O con -2 -> CaO.", porque: "Con Ca +2 y O -2 los valores absolutos son iguales, así que cada elemento lleva subíndice 1 y la suma da 0. Por eso la fórmula es CaO, sin subíndices adicionales." },
          { paso: "Cl2O7 en IUPAC sistemática: heptóxido de dicloro. Equivale a óxido de cloro(VII) en Stock.", porque: "En la nomenclatura IUPAC sistemática los prefijos numerales (di = 2, hepta = 7) indican la cantidad de átomos, mientras que la de Stock usa el nº de oxidación en número romano. Ambos nombres describen el mismo compuesto y son válidos." },
          { paso: "CaO: óxido de calcio, sin número romano.", porque: "En la nomenclatura de Stock el número romano solo se escribe cuando el elemento puede tener más de un nº de oxidación. El calcio tiene solo +2, así que no hace falta aclararlo." }
        ],
        resultado: "a) Cl2O7 = heptóxido de dicloro (óxido de cloro(VII)); b) CaO = óxido de calcio."
      }
    ],
    errores_tipicos: [
      { error: "Escribir ClO7 o Cl7O2 sin cruzar los números de oxidación.", como_evitar: "Cruzá los nº de oxidación: el subíndice del Cl es el nº de O del ox, y viceversa." },
      { error: "Poner número romano al óxido de calcio: 'óxido de calcio(II)'.", como_evitar: "El romano se usa solo si el elemento tiene más de un nº de oxidación posible." }
    ]
  },
  {
    num: 3,
    nivel: "Básico",
    temas: ["nomenclatura"],
    enunciado: "Nombre los siguientes compuestos: a) HBr en estado gaseoso; b) HBr disuelto en agua; c) NaH; d) NH3. Si hay dos nombres válidos, indíquelos.",
    resolucion: [
      {
        parte: "",
        pasos: [
          { paso: "HBr gaseoso: es un hidrácido en estado gaseoso, se nombra bromuro de hidrógeno (uro de hidrógeno).", porque: "Como el HBr está en estado gaseoso, es una sustancia pura que todavía no se disolvió en agua y se nombra como compuesto binario: bromuro de hidrógeno. El prefijo 'ácido' queda reservado para la solución acuosa." },
          { paso: "HBr disuelto en agua: ácido bromhídrico.", porque: "Al disolverse en agua el HBr se ioniza, y en solución el compuesto se nombra como hidrácido con la terminación 'hídrico'. Es el mismo compuesto que en el paso anterior; lo que cambia es el estado de agregación." },
          { paso: "NaH: hidruro de sodio. El H tiene nº -1 porque el metal es más electropositivo.", porque: "En los hidruros metálicos el metal es el catión y el H actúa como anión hidruro con nº -1, porque el metal es más electropositivo. Por eso el nombre es hidruro de sodio y no un ácido." },
          { paso: "NH3: amoníaco (nombre tradicional, el que usa la guía) o trihidruro de nitrógeno (IUPAC). Ambos son válidos.", porque: "La IUPAC nombra el NH3 con prefijos numerales (tri = 3 H) y la tradicional mantiene el nombre histórico 'amoníaco'. Conviene saber que ambos son válidos, porque en un examen se puede aceptar cualquiera de los dos." }
        ],
        resultado: "a) bromuro de hidrógeno; b) ácido bromhídrico; c) hidruro de sodio; d) amoníaco (trihidruro de nitrógeno)."
      }
    ],
    errores_tipicos: [
      { error: "Llamar 'ácido bromhídrico' al HBr gaseoso.", como_evitar: "El nombre de ácido es solo para la solución acuosa; el gas es bromuro de hidrógeno." },
      { error: "Asignar +1 al H del NaH porque el H casi siempre es +1.", como_evitar: "En hidruros metálicos el H es -1; el +1 es para hidruros de no metales como el HBr." }
    ]
  },
  {
    num: 4,
    nivel: "Básico",
    temas: ["nomenclatura"],
    enunciado: "Escriba la fórmula de: a) ácido nitroso (N +3); b) ácido nítrico (N +5); c) ácido hipocloroso (Cl +1); d) ácido clórico (Cl +5).",
    resolucion: [
      {
        parte: "",
        pasos: [
          { paso: "Ácido nitroso (N +3): H (+1) + N (+3) + 2 x O (-2) = 0 -> HNO2.", porque: "Se suma H (+1), N (+3) y 2 O (-2 cada uno), y el total debe dar 0 porque el ácido es neutro. El sufijo 'oso' corresponde al menor nº de oxidación de la serie, en este caso +3." },
          { paso: "Ácido nítrico (N +5): H (+1) + N (+5) + 3 x O (-2) = 0 -> HNO3.", porque: "Se suma H (+1), N (+5) y 3 O (-2 cada uno), y el total de 0 confirma la fórmula HNO3. El sufijo 'ico' corresponde al mayor nº de oxidación de la serie, por eso se agregan más O que en el nitroso." },
          { paso: "Ácido hipocloroso (Cl +1): H (+1) + Cl (+1) + O (-2) = 0 -> HClO.", porque: "En HClO, H (+1) más Cl (+1) más O (-2) da 0, así que el Cl tiene nº +1. El prefijo 'hipo' y el sufijo 'oso' indican el nº más bajo de la serie de oxoácidos del cloro." },
          { paso: "Ácido clórico (Cl +5): H (+1) + Cl (+5) + 3 x O (-2) = 0 -> HClO3.", porque: "Se suma H (+1), Cl (+5) y 3 O (-2 cada uno), y el total de 0 confirma HClO3. El 'ico' corresponde al nº +5, que es el que tiene el cloro en la serie de cloratos." }
        ],
        resultado: "a) HNO2; b) HNO3; c) HClO; d) HClO3."
      }
    ],
    errores_tipicos: [
      { error: "Confundir nitroso con nítrico y escribir HNO3 para el nitroso.", como_evitar: "'Oso' = menor nº de oxidación (N +3); 'ico' = mayor nº (N +5)." },
      { error: "Confundir el ácido hipocloroso (HClO) con el ácido clorhídrico (HCl).", como_evitar: "Los oxoácidos tienen O; los hidrácidos (clorhídrico) no tienen O." }
    ]
  },
  {
    num: 5,
    nivel: "Básico",
    temas: ["nomenclatura"],
    enunciado: "a) Escriba la fórmula del sulfato de aluminio y del fosfato de calcio. b) Nombre el compuesto Mg(NO3)2.",
    resolucion: [
      {
        parte: "",
        pasos: [
          { paso: "Sulfato de aluminio: el catión es Al^3+ y el anión es SO4^2-. Para neutralidad: 2 Al^3+ (6+) y 3 SO4^2- (6-) -> Al2(SO4)3.", porque: "Para formar la sal hay que igualar las cargas: el Al^3+ aporta 3 cargas positivas y el SO4^2- aporta 2 negativas. El mínimo común múltiplo de 3 y 2 es 6, por eso hacen falta 2 Al^3+ y 3 SO4^2-." },
          { paso: "Fosfato de calcio: Ca^2+ y PO4^3-. Para neutralidad: 3 Ca^2+ (6+) y 2 PO4^3- (6-) -> Ca3(PO4)2.", porque: "Se usa el mismo criterio con Ca^2+ (2 cargas) y PO4^3- (3 cargas): el mínimo común múltiplo es 6, así que 3 Ca^2+ y 2 PO4^3- suman 6+ y 6-. Cada subíndice indica cuántos iones del otro tipo hacen falta para neutralizar." },
          { paso: "Mg(NO3)2: el catión Mg^2+ tiene un único nº de oxidación y el anión nitrato es NO3^- -> nitrato de magnesio.", porque: "El Mg^2+ tiene un único nº de oxidación posible, por eso no lleva número romano. El subíndice 2 del NO3 se justifica porque sus dos cargas 1- neutralizan el Mg^2+, y el nombre es nitrato de magnesio." }
        ],
        resultado: "Al2(SO4)3; Ca3(PO4)2; Mg(NO3)2 = nitrato de magnesio."
      }
    ],
    errores_tipicos: [
      { error: "Escribir AlSO4 o Al(SO4) porque no se igualaron las cargas.", como_evitar: "Igualá las cargas totales: 2 x 3+ = 3 x 2-." },
      { error: "Escribir Ca2(PO4)3 en lugar de Ca3(PO4)2, invirtiendo los subíndices.", como_evitar: "El Ca^2+ aporta 2 cargas, así que se necesitan 3 Ca para igualar las 6 cargas negativas del PO4^3- x 2." }
    ]
  },
  {
    num: 6,
    nivel: "Intermedio",
    temas: ["nomenclatura"],
    enunciado: "a) Escriba la fórmula del sulfato de hierro(III) y del hidrogenosulfato de sodio. b) Nombre los compuestos Ca(ClO)2 y KHCO3, dando los dos nombres válidos cuando existan.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Sulfato de hierro(III): Fe^3+ y SO4^2-. Para neutralidad: 2 Fe^3+ (6+) y 3 SO4^2- (6-) -> Fe2(SO4)3.", porque: "El número romano (III) indica que el hierro tiene carga 3+, así que el catión es Fe^3+. Para igualarlo con SO4^2- se usa el mínimo común múltiplo 6, que da 2 Fe y 3 SO4, es decir Fe2(SO4)3." },
          { paso: "Hidrogenosulfato de sodio: anión HSO4^- (sulfato con un H) y catión Na^+ -> NaHSO4.", porque: "El anión HSO4^- conserva 1 H de los 2 del ácido sulfúrico. Como el Na^+ y el HSO4^- tienen carga de módulo 1, se combinan 1 a 1 y no hace falta cambiar subíndices; el H se escribe delante del SO4 porque es parte del anión." }
        ],
        resultado: "Fe2(SO4)3 y NaHSO4."
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Ca(ClO)2: catión Ca^2+ y anión ClO^- (Cl con nº +1, hipoclorito). Se necesitan 2 ClO^- por cada Ca^2+ -> hipoclorito de calcio.", porque: "El Ca^2+ tiene carga 2+ y el anión ClO^- tiene carga 1-, así que se necesitan 2 aniones para neutralizar el catión. Por eso la fórmula es Ca(ClO)2, y el nombre es hipoclorito de calcio con el Cl en +1." },
          { paso: "KHCO3: catión K^+ y anión HCO3^- (hidrogenocarbonato). Nombre válido: hidrogenocarbonato de potasio; nombre tradicional: bicarbonato de potasio.", porque: "El HCO3^- es el anión de una sal ácida: la IUPAC lo nombra con el prefijo 'hidrogeno' y la tradicional con 'bi', porque tiene un H extra. El K^+ tiene 1+, igual que el anión tiene 1-, así que la fórmula KHCO3 no lleva subíndices." }
        ],
        resultado: "Ca(ClO)2 = hipoclorito de calcio; KHCO3 = hidrogenocarbonato de potasio (bicarbonato de potasio)."
      }
    ],
    errores_tipicos: [
      { error: "Escribir Fe(SO4)3 o FeSO4 para el sulfato de hierro(III).", como_evitar: "Fe^3+ necesita 2 Fe por cada 3 SO4^2-; igualá cargas antes de escribir la fórmula." },
      { error: "Nombrar NaHSO4 como sulfato de sodio.", como_evitar: "El H en el anión indica una sal ácida: hidrogenosulfato de sodio (bisulfato de sodio)." }
    ]
  },
  {
    num: 7,
    nivel: "Intermedio",
    temas: ["nomenclatura"],
    enunciado: "Partiendo del óxido N2O5: a) Nombre el óxido en IUPAC y en Stock y clasifíquelo como óxido ácido o básico. b) Escriba la reacción de este óxido con agua y nombre el producto. c) Escriba la reacción de neutralización de ese producto con NaOH y nombre la sal formada.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "N2O5: el N tiene nº +5, porque 2 x (+5) = 10 = 5 x 2 (O).", porque: "Se verifica el nº de oxidación del N cruzando los subíndices: 2 x (+5) = 10 = 5 x 2 (O). Es la comprobación inversa a la que se usa para calcular un nº desconocido, y confirma que el N tiene +5." },
          { paso: "IUPAC: pentóxido de dinitrógeno. Stock: óxido de nitrógeno(V).", porque: "Un mismo compuesto puede tener dos nombres válidos. La IUPAC usa prefijos (penta = 5, di = 2), y Stock indica el nº de oxidación del N con el número romano (V); ambos nombres señalan el mismo óxido." },
          { paso: "Como es un no metal con oxígeno, es un óxido ácido.", porque: "Los no metales forman óxidos ácidos, porque al reaccionar con agua dan oxoácidos. Como el N es un no metal, el N2O5 se clasifica como óxido ácido y no como básico." }
        ],
        resultado: "N2O5 = pentóxido de dinitrógeno (óxido de nitrógeno(V)), óxido ácido."
      },
      {
        parte: "b)",
        pasos: [
          { paso: "N2O5 + H2O -> 2 HNO3. Balance: N 2 = 2; H 2 = 2; O 5 + 1 = 6 = 2 x 3.", porque: "Un óxido ácido reacciona con agua para dar el oxoácido correspondiente: N2O5 + H2O da HNO3. Como hay 2 N en el reactivo se necesitan 2 HNO3, y el balance de O (5 + 1 = 6 = 2 x 3) confirma los coeficientes." },
          { paso: "El producto es ácido nítrico.", porque: "El ácido formado tiene N con nº +5 y terminación 'ico', así que es ácido nítrico. Conviene recordar que la terminación depende del nº de oxidación del elemento, no de la cantidad de átomos de O." }
        ],
        resultado: "N2O5 + H2O -> 2 HNO3 (ácido nítrico)."
      },
      {
        parte: "c)",
        pasos: [
          { paso: "HNO3 + NaOH -> NaNO3 + H2O.", porque: "El ácido nítrico tiene 1 H, así que reacciona con 1 NaOH para neutralizarlo, dando la sal NaNO3 y agua. La neutralización es la reacción de un ácido con una base que produce sal y agua, y el balance de Na y H confirma la relación 1 a 1." },
          { paso: "NaNO3: nitrato de sodio (anión NO3^-, nítrico).", porque: "El anión NO3^- proviene del ácido nítrico ('ico') y su sal se llama nitrato. El nitrito (NO2^-) se formaría a partir del ácido nitroso, así que no debe confundirse con el producto de este paso." }
        ],
        resultado: "HNO3 + NaOH -> NaNO3 + H2O; la sal es nitrato de sodio."
      }
    ],
    errores_tipicos: [
      { error: "Escribir N2O5 + H2O -> HNO3 sin balancear (la reacción da 2 HNO3).", como_evitar: "Balanceá N y H después de escribir los productos: 2 N y 2 H requieren 2 HNO3." },
      { error: "Nombrar el NaNO3 como nitrito de sodio.", como_evitar: "Nitrito = NO2^- (nitroso); nitrato = NO3^- (nítrico)." }
    ]
  },
  {
    num: 8,
    nivel: "Intermedio",
    temas: ["nomenclatura"],
    enunciado: "a) Nombre el alcano CH3-CH2-CH(CH3)-CH2-CH2-CH3. b) Escriba la fórmula condensada del 2,2-dimetilbutano e indique su fórmula molecular.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "La cadena continua más larga tiene 6 carbonos: el nombre base es hexano. El CH3 ramificado es el sustituyente metilo.", porque: "Se identifica la cadena continua más larga, que tiene 6 C, y se la nombra como hexano. El CH3 ramificado no forma parte de la cadena principal: es un sustituyente metilo." },
          { paso: "Numerando desde la izquierda, el metilo queda en C3; desde la derecha, quedaría en C4. Se elige el localizador más bajo: C3.", porque: "Se numera desde ambos extremos y se mide el localizador del metilo: desde la izquierda queda en C3 y desde la derecha en C4. La regla IUPAC elige el localizador más bajo, que es 3." },
          { paso: "Nombre: 3-metilhexano.", porque: "En el nombre se escriben el localizador, el prefijo del sustituyente y el nombre base: 3-metil + hexano. El guion separa el número del nombre, y el prefijo 'metil' va delante del alcano." }
        ],
        resultado: "3-metilhexano."
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Butano (4 C) como base, con 2 metilos sobre el C2: CH3-C(CH3)2-CH2-CH3.", porque: "Se parte del butano (4 C) y se agregan 2 metilos sobre el C2, con el prefijo 'dimetil' y el localizador 2,2. Así el C2 queda con 4 enlaces, dos de ellos hacia metilos." },
          { paso: "Contar carbonos: 4 de la cadena + 2 metilos = 6 C. Hidrógenos: 3 + 6 + 2 + 3 = 14. Fórmula molecular C6H14.", porque: "Se cuentan los carbonos (4 de la cadena y 2 metilos, total 6) y los hidrógenos de la fórmula desarrollada (3 + 6 + 2 + 3 = 14). La fórmula C6H14 cumple CnH2n+2, ya que 2 x 6 + 2 = 14." }
        ],
        resultado: "CH3-C(CH3)2-CH2-CH3, fórmula molecular C6H14."
      }
    ],
    errores_tipicos: [
      { error: "Numerar desde el extremo que da localizador más alto, por ejemplo 4-metilhexano.", como_evitar: "Siempre se numera para que el sustituyente tenga el localizador más bajo." },
      { error: "Escribir 2,2-dimetilpentano en lugar de 2,2-dimetilbutano, al contar mal la cadena base.", como_evitar: "Contá primero la cadena base (butano = 4 C) y después sumá los metilos." }
    ]
  },
  {
    num: 9,
    nivel: "Intermedio",
    temas: ["nomenclatura"],
    enunciado: "a) Nombre el compuesto CH3-CH(OH)-CH2-COOH. b) Nombre el compuesto CH2=CH-CHO y escriba la fórmula desarrollada del etanoato de etilo.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "El grupo COOH (ácido) tiene prioridad sobre el OH: el C del COOH es el C1. La cadena tiene 4 C: C1 (COOH), C2 (CH2), C3 (CH con OH), C4 (CH3).", porque: "El COOH tiene prioridad sobre el OH, así que su carbono es el C1 y define el sufijo 'oico'. La cadena se cuenta desde ese C, lo que da 4 C en total: C1, C2, C3 (con el OH) y C4." },
          { paso: "El OH está en C3: prefijo 3-hidroxi.", porque: "Como el grupo principal es el ácido, el OH no puede ser sufijo y se nombra como prefijo 'hidroxi'. Su posición es C3, que es el carbono de la cadena al que está unido el OH." },
          { paso: "Nombre: ácido 3-hidroxibutanoico.", porque: "Se combina el prefijo (3-hidroxi) con la base de 4 C (but) y el sufijo del ácido carboxílico (-anoico). Así se arma el nombre final: ácido 3-hidroxibutanoico." }
        ],
        resultado: "Ácido 3-hidroxibutanoico."
      },
      {
        parte: "b)",
        pasos: [
          { paso: "CH2=CH-CHO: el CHO es un aldehído (C1), la cadena tiene 3 C y el doble enlace está entre C2 y C3. Nombre: prop-2-enal (2-propenal). Nombre trivial: acroleína.", porque: "El CHO es un aldehído y tiene prioridad sobre el doble enlace, así que su C es el C1. La cadena tiene 3 C y el doble enlace va entre C2 y C3, por eso el nombre lleva el localizador 2 para el 'en'." },
          { paso: "Etanoato de etilo: parte ácida 'etanoato' (de ácido etanoico, acético) y parte alcohólica 'de etilo' (de etanol). Fórmula: CH3-COO-CH2-CH3.", porque: "Un éster se nombra con la parte del ácido ('-oato') seguida del radical del alcohol ('de -ilo'). El etanoato de etilo viene del ácido acético (2 C) y del etanol (2 C), y la fórmula CH3-COO-CH2-CH3 une ambas partes por el enlace éster." }
        ],
        resultado: "CH2=CH-CHO = prop-2-enal (2-propenal); etanoato de etilo = CH3-COO-CH2-CH3."
      }
    ],
    errores_tipicos: [
      { error: "Numerar la cadena desde el extremo del OH en lugar del COOH.", como_evitar: "Primero identificá el grupo de mayor prioridad (ácido, luego éster, aldehído, cetona y alcohol) y numerá desde él." },
      { error: "Confundir etanoato de etilo con etanoato de metilo o con propanoato de etilo al escribir la fórmula.", como_evitar: "El '-oato' viene del ácido (acetato = 2 C) y el 'de -ilo' del alcohol (etanol = 2 C)." }
    ]
  },
  {
    num: 10,
    nivel: "Intermedio",
    temas: ["nomenclatura"],
    enunciado: "a) Nombre el compuesto aromático formado por un anillo de benceno con un grupo OH y un grupo CH3 en posiciones vecinas (orto). b) Escriba la fórmula del ácido 3-clorobenzoico (Cl en posición meta respecto del COOH).",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "El OH unido al anillo define un fenol: el C con OH es el C1 del anillo.", porque: "En los derivados del benceno el grupo principal se toma como C1 del anillo, y desde allí se numeran los demás sustituyentes. Por eso el carbono unido al OH es el 1, y el compuesto es un fenol." },
          { paso: "El CH3 está en posición vecina (orto) al OH, es decir en C2: 2-metilfenol.", porque: "Orto indica posición vecina, es decir C2 respecto del C1. Con dos sustituyentes se puede usar 'o-' o el localizador numérico, y como el CH3 está en C2 el nombre es 2-metilfenol." },
          { paso: "Nombre tradicional válido: o-cresol (orto-metilfenol).", porque: "El nombre tradicional 'o-cresol' se usa para los metilfenoles, con el prefijo 'orto' que indica la posición relativa entre los dos sustituyentes. Ambos nombres describen el mismo compuesto y son válidos." }
        ],
        resultado: "2-metilfenol (o-cresol)."
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Ácido benzoico: el COOH va unido al C1 del anillo. El Cl va en C3, que es meta respecto del COOH.", porque: "El grupo COOH define el nombre base 'benzoico' y su carbono es el C1 del anillo. El Cl va en C3, que es posición meta, es decir 1,3 respecto del C1." },
          { paso: "Fórmula: HOOC-C6H4-Cl, con C6H4 (el anillo con 2 sustituyentes), Cl en C3 y COOH en C1. Fórmula molecular C7H5ClO2.", porque: "El benceno (C6H6) pierde 2 H al unirse al COOH y al Cl, así que el anillo queda como C6H4 con 2 sustituyentes. Al sumar el C del COOH, la fórmula molecular resulta C7H5ClO2." }
        ],
        resultado: "HOOC-C6H4-Cl con Cl en meta (C7H5ClO2)."
      }
    ],
    errores_tipicos: [
      { error: "Usar orto, meta y para con tres o más sustituyentes.", como_evitar: "Orto-meta-para solo sirven con dos sustituyentes; con más, usá localizadores numéricos." },
      { error: "Numerar el anillo sin asignar el 1 al grupo principal (OH o COOH).", como_evitar: "El grupo principal va en C1 y los demás sustituyentes reciben localizadores lo más bajos posible." }
    ]
  },
  {
    num: 11,
    nivel: "Avanzado",
    temas: ["nomenclatura"],
    enunciado: "Determine el nº de oxidación del O en H2O2 y en OF2, y el del Cr en K2Cr2O7. Explique por qué el O del OF2 no tiene nº de oxidación -2.",
    resolucion: [
      {
        parte: "",
        pasos: [
          { paso: "H2O2: 2 x (+1) + 2 x O = 0 -> O = -1. El O tiene -1 en peróxidos porque forma un enlace O-O.", porque: "Los 2 O del H2O2 están unidos entre sí, y el enlace O-O se reparte igual entre ambos, así que no se asigna el -2 habitual de los óxidos. Por eso con 2 H (+1) el total da 0 y cada O queda en -1, que es el nº de los peróxidos." },
          { paso: "OF2: el F (EN 4,0) es más electronegativo que el O (EN 3,5), así que el F tiene nº -1: 2 x (-1) + O = 0 -> O = +2.", porque: "Los nº se asignan por electronegatividad: el F (4,0) es más electronegativo que el O (3,5), así que el F tiene -1. Con 2 F (-1 cada uno), el O queda en +2 para que la molécula sea neutra." },
          { paso: "K2Cr2O7: 2 x (+1) + 2 x Cr + 7 x (-2) = 0 -> 2 Cr = +12 -> Cr = +6.", porque: "Se cruzan los nº: 2 K (+1 cada uno), 2 Cr, y 7 O (-2 cada uno) deben sumar 0, lo que da 2 Cr = +12. Como hay 2 Cr, el total de +12 se reparte entre los dos y el Cr queda en +6." }
        ],
        resultado: "O en H2O2 = -1; O en OF2 = +2; Cr en K2Cr2O7 = +6."
      }
    ],
    errores_tipicos: [
      { error: "Asignar siempre -2 al O, incluso en el H2O2 y en el OF2.", como_evitar: "El -2 es la regla general para óxidos; en peróxidos es -1 y con F es positivo." },
      { error: "Dar +12 al Cr en K2Cr2O7 sin dividir por los 2 átomos de Cr.", como_evitar: "Sumá sobre toda la fórmula y después dividí por el número de átomos de ese elemento." }
    ]
  },
  {
    num: 12,
    nivel: "Avanzado",
    temas: ["nomenclatura"],
    enunciado: "En un depósito se rotulan tres sales de hierro: cloruro de hierro(II), cloruro férrico y sulfuro de hierro(III). a) Escriba la fórmula de las tres sales. b) Explique qué nº de oxidación tiene el hierro en cada una y de dónde sale ese valor a partir del nombre. c) Calcule la masa de 0,500 mol de cloruro férrico. Masas atómicas: Fe 55,85; Cl 35,45.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Cloruro de hierro(II): Fe^2+ y Cl^- -> FeCl2.", porque: "El Fe^2+ tiene carga 2+ y el Cl^- tiene 1-, así que hacen falta 2 Cl^- por cada Fe^2+ para neutralizar la carga. El subíndice 2 del Cl viene de igualar las cargas, no de otro criterio." },
          { paso: "Cloruro férrico (= cloruro de hierro(III)): Fe^3+ y Cl^- -> FeCl3.", porque: "En la nomenclatura tradicional el sufijo 'férrico' indica el catión de mayor carga, Fe^3+. Como cada Cl^- aporta 1-, hacen falta 3 aniones, y la fórmula es FeCl3." },
          { paso: "Sulfuro de hierro(III): Fe^3+ y S^2- -> Fe2S3 (2 x 3+ = 6+ y 3 x 2- = 6-).", porque: "Con Fe^3+ y S^2- hay que igualar la carga total: el mínimo común múltiplo de 3 y 2 es 6, así que 2 Fe^3+ (6+) y 3 S^2- (6-) son neutros. Por eso la fórmula es Fe2S3." }
        ],
        resultado: "FeCl2, FeCl3 y Fe2S3."
      },
      {
        parte: "b)",
        pasos: [
          { paso: "El romano (II) o 'férrico' indica el nº de oxidación del Fe: +2 en el cloruro ferroso y +3 en el férrico y en el sulfuro de hierro(III).", porque: "En la nomenclatura de Stock el número romano indica el nº de oxidación del catión: (II) para Fe^2+ y (III) para Fe^3+. El 'ferroso' y el 'férrico' de la tradicional expresan lo mismo, y el nº se lee directamente del nombre." }
        ],
        resultado: "Fe +2 en FeCl2; Fe +3 en FeCl3 y Fe2S3."
      },
      {
        parte: "c)",
        pasos: [
          { paso: "M(FeCl3) = 55,85 + 3 x 35,45 = 162,20 g/mol.", porque: "La masa molar se calcula sumando las masas atómicas de cada átomo de la fórmula: 1 Fe y 3 Cl. Conviene usar todos los decimales en esta etapa para no acumular error de redondeo, y ajustar el resultado recién al final." },
          { paso: "m = n x M = 0,500 mol x 162,20 g/mol = 81,10 g.", porque: "Se aplica la relación m = n x M: se multiplica la cantidad de sustancia (0,500 mol) por la masa molar. Esa relación convierte moles en gramos, que es la unidad que pide el problema." },
          { paso: "Cifras significativas: el dato 0,500 mol tiene 3 cifras, así que el resultado es 81,1 g.", porque: "Para informar el resultado se usa la cantidad de cifras significativas del dato menos preciso. Como 0,500 tiene 3 cifras, el resultado se redondea a 3 cifras: 81,1 g." }
        ],
        resultado: "m = 81,1 g de FeCl3."
      }
    ],
    errores_tipicos: [
      { error: "Escribir FeCl para el cloruro de hierro(II), olvidando que el Fe^2+ necesita 2 Cl^-.", como_evitar: "Igualá cargas: 2+ con 2 aniones de 1-." },
      { error: "Redondear la masa molar a 162 g/mol antes de multiplicar, o dar el resultado con 5 cifras.", como_evitar: "Usá la masa molar con sus decimales y, al final, ajustá el resultado a las cifras del dato (3)." }
    ]
  },
  {
    num: 13,
    nivel: "Avanzado",
    temas: ["nomenclatura"],
    enunciado: "Se consideran los iones clorito, clorato y perclorato. a) Determine el nº de oxidación del Cl en ClO2^-, ClO3^- y ClO4^-. b) Nombre los ácidos HClO2, HClO3 y HClO4 con la nomenclatura tradicional y con la IUPAC (dos nombres válidos). c) Escriba la fórmula de las sales de sodio correspondientes a cada anión y nómbrelas.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "ClO2^-: x + 2 x (-2) = -1 -> x = +3. ClO3^-: x + 3 x (-2) = -1 -> x = +5. ClO4^-: x + 4 x (-2) = -1 -> x = +7.", porque: "Para un ion, la suma de los nº de oxidación de sus átomos es igual a su carga, no a 0. Con esa ecuación se despeja el Cl en cada anión; por ejemplo, en ClO2^- resulta x + 2 x (-2) = -1, de donde x = +3." }
        ],
        resultado: "Cl: +3 en ClO2^-, +5 en ClO3^-, +7 en ClO4^-."
      },
      {
        parte: "b)",
        pasos: [
          { paso: "HClO2 (Cl +3): ácido cloroso (tradicional); IUPAC: clorato(III) de hidrógeno.", porque: "El sufijo 'oso' corresponde al menor nº de oxidación de la serie (+3). En IUPAC ese mismo nº se escribe con número romano dentro del nombre del anión, por eso el HClO2 también se nombra clorato(III) de hidrógeno." },
          { paso: "HClO3 (Cl +5): ácido clórico; IUPAC: clorato(V) de hidrógeno.", porque: "El sufijo 'ico' corresponde al nº +5 de la serie, por eso el HClO3 es ácido clórico. En IUPAC el mismo nº se escribe como (V), y el nombre resulta clorato(V) de hidrógeno." },
          { paso: "HClO4 (Cl +7): ácido perclórico (el prefijo 'per-' indica el nº mayor); IUPAC: clorato(VII) de hidrógeno.", porque: "El prefijo 'per-' con el sufijo 'ico' indica un nº de oxidación mayor que el del clórico: +7 en lugar de +5. En IUPAC ese nº se escribe como (VII), por eso el nombre sistemático es clorato(VII) de hidrógeno." }
        ],
        resultado: "HClO2: ácido cloroso / clorato(III) de hidrógeno; HClO3: ácido clórico / clorato(V) de hidrógeno; HClO4: ácido perclórico / clorato(VII) de hidrógeno."
      },
      {
        parte: "c)",
        pasos: [
          { paso: "NaClO2: clorito de sodio (IUPAC: clorato(III) de sodio). NaClO3: clorato de sodio (IUPAC: clorato(V) de sodio). NaClO4: perclorato de sodio (IUPAC: clorato(VII) de sodio).", porque: "El catión Na^+ se combina con cada anión monovalente (ClO2^-, ClO3^- o ClO4^-), por lo que cada fórmula lleva 1 Na. El nombre sigue la serie del ácido correspondiente: clorito para +3, clorato para +5 y perclorato para +7." }
        ],
        resultado: "NaClO2 (clorito de sodio), NaClO3 (clorato de sodio), NaClO4 (perclorato de sodio)."
      }
    ],
    errores_tipicos: [
      { error: "Nombrar el ClO3^- como clorito porque tiene 'menos' O que el perclorato.", como_evitar: "Los nombres dependen del nº de oxidación (clorito +3, clorato +5, perclorato +7), no de la cantidad de O." },
      { error: "Nombrar el HClO4 como ácido clórico porque 'per' no cambia el sufijo.", como_evitar: "'Per-...ico' indica el nº +7, mayor que el del clórico (+5)." }
    ]
  },
  {
    num: 14,
    nivel: "Avanzado",
    temas: ["nomenclatura"],
    enunciado: "a) Escriba la fórmula desarrollada del ácido 4-oxopentanoico (ácido levulínico) e identifique sus grupos funcionales. b) Nombre el compuesto CH3-CO-NH-CH3 e indique su grupo funcional principal.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "El ácido carboxílico (COOH) tiene prioridad: el C del COOH es el C1 de una cadena de 5 C.", porque: "El COOH es el grupo de mayor prioridad, así que su carbono se numera como C1 y la cadena de 5 C se cuenta desde allí. Los demás grupos se ubican después, siguiendo esa referencia." },
          { paso: "La cetona (C=O) está en C4, y el C5 es un CH3: HOOC-CH2-CH2-CO-CH3.", porque: "La cadena se escribe con el C=O en C4 y el metilo final en C5: C1 (COOH), C2 y C3 son CH2, C4 es el C=O y C5 es CH3. Eso da la fórmula HOOC-CH2-CH2-CO-CH3, con 5 C y 8 H." },
          { paso: "Grupos funcionales: ácido carboxílico (principal) y cetona (secundaria, nombrada como prefijo 'oxo').", porque: "El ácido carboxílico es el grupo principal, así que la cetona no puede usar el sufijo y se nombra como prefijo 'oxo'. Identificar ambos grupos es necesario tanto para nombrar el compuesto como para predecir su comportamiento." }
        ],
        resultado: "HOOC-CH2-CH2-CO-CH3 (C5H8O3); grupos ácido carboxílico y cetona."
      },
      {
        parte: "b)",
        pasos: [
          { paso: "CH3-CO-NH-CH3 tiene el grupo CO-NH-: es una amida. La parte acilo es CH3-CO-, de 2 C (acetamida).", porque: "El grupo CO-NH es el característico de las amidas. El C del carbonilo cuenta en la cadena base, y la parte acilo CH3-CO- tiene 2 C, lo que da el nombre base etanamida (acetamida)." },
          { paso: "El metilo unido al N se indica con el localizador N-: N-metiletanamida (o N-metilacetamida).", porque: "El metilo unido al N no recibe un localizador de carbono, sino el localizador N-. Por eso se escribe N-metil delante del nombre base, dando N-metiletanamida." }
        ],
        resultado: "N-metiletanamida (N-metilacetamida), grupo funcional amida."
      }
    ],
    errores_tipicos: [
      { error: "Numerar la cadena desde el C=O y no desde el COOH, o nombrar la cetona como grupo principal.", como_evitar: "El ácido carboxílico tiene prioridad y su C es el 1; la cetona va como prefijo oxo." },
      { error: "Escribir 2-metilacetamida para el metilo que está sobre el N.", como_evitar: "Un metilo sobre el N se nombra con N-, no con localizador de carbono." }
    ]
  },
  {
    num: 15,
    nivel: "Avanzado",
    temas: ["nomenclatura"],
    enunciado: "a) Nombre el hidrocarburo HC triple enlace C-CH2-CH=CH2 (un extremo con triple enlace y el otro con doble enlace, separados por un CH2). Justifique la numeración. b) Escriba la fórmula molecular del 1-metilciclopenteno.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Cadena de 5 C con un doble enlace y un triple enlace. La numeración posible da locantes {1,4} en ambos sentidos: el doble en 1 y el triple en 4 (pent-1-en-4-ino) o el triple en 1 y el doble en 4 (pent-4-en-1-ino).", porque: "La cadena tiene 5 C con un doble y un triple enlace, y la numeración posible da los localizadores {1,4} en ambos sentidos. Por eso hay que comparar los dos sentidos antes de decidir cuál usar." },
          { paso: "Se elige el sentido que da el localizador más bajo al doble enlace (ene), porque cuando hay empate en el conjunto de locantes el doble enlace tiene prioridad sobre el triple.", porque: "Cuando el conjunto de localizadores es igual, el doble enlace ('en') recibe el número más bajo porque tiene prioridad sobre el triple ('ino'). Esa regla es la que lleva al nombre pent-1-en-4-ino y no al otro." },
          { paso: "Nombre: pent-1-en-4-ino.", porque: "Se escriben los localizadores de cada insaturación: 1-en para el doble y 4-ino para el triple, con 'pent' por los 5 C. Conviene verificar que el sufijo 'en' vaya antes que 'ino' en el nombre." }
        ],
        resultado: "pent-1-en-4-ino (no pent-4-en-1-ino)."
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Ciclopenteno: anillo de 5 C con un doble enlace (C5H8). Al reemplazar un H por CH3 en el C1 se agrega un CH2.", porque: "El ciclopenteno tiene 5 C en el anillo y un doble enlace, con fórmula C5H8. Un metilo reemplaza un H del anillo y suma un CH2, así que la fórmula cambia en ese CH2." },
          { paso: "Fórmula molecular: C6H10.", porque: "Se suma el CH2 agregado al C5H8 del ciclopenteno, y se obtiene C6H10. Como comprobación, el grado de insaturación es 2 (un anillo y un doble enlace), y eso coincide con C6H10." }
        ],
        resultado: "1-metilciclopenteno = C6H10."
      }
    ],
    errores_tipicos: [
      { error: "Numerar el triple enlace como 1 porque aparece primero, dando pent-4-en-1-ino.", como_evitar: "Si hay empate en los localizadores, el doble enlace recibe el número más bajo." },
      { error: "Nombrar el ciclopenteno como ciclopentano porque el anillo es el mismo.", como_evitar: "El doble enlace cambia el sufijo a 'eno'; el ciclo aparece en el nombre con el prefijo 'ciclo'." }
    ]
  },
  {
    num: 16,
    nivel: "Tipo parcial",
    temas: ["nomenclatura", "reacciones"],
    enunciado: "En el laboratorio de control de una planta de tratamiento de efluentes se rotulan tres sustancias: ácido sulfuroso, sulfito de sodio y sulfato de cinc. a) Escriba la fórmula de las tres sustancias y calcule el nº de oxidación del S en cada una. b) Nombre el compuesto Fe(NO3)3 y explique por qué el hierro tiene nº de oxidación +3. c) Escriba la reacción de neutralización completa del ácido sulfuroso con NaOH y nombre la sal formada. d) Calcule la masa de Na2SO3 que se obtiene a partir de 0,0250 mol de H2SO3, suponiendo rendimiento del 100%. Masas atómicas: Na 22,99; S 32,06; O 16,00.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Ácido sulfuroso: H2SO3. Con H +1 y O -2: 2 x (+1) + S + 3 x (-2) = 0 -> S = +4.", porque: "En el H2SO3 cada H aporta +1 y cada O aporta -2; para que la suma sea 0, el S debe tener +4. El nombre 'sulfuroso' ('oso') corresponde al menor nº del azufre en los oxoácidos, y el cálculo lo confirma." },
          { paso: "Sulfito de sodio: Na2SO3. Con Na +1: 2 x (+1) + S + 3 x (-2) = 0 -> S = +4.", porque: "El sulfito SO3^2- conserva el mismo nº de oxidación del S que el ácido, porque en la sal solo cambian los cationes. Con 2 Na (+1 cada uno), 2 + S - 6 = 0 da S = +4." },
          { paso: "Sulfato de cinc: ZnSO4. Con Zn +2: +2 + S + 4 x (-2) = 0 -> S = +6.", porque: "En el ZnSO4 el Zn^2+ aporta +2 y los 4 O aportan -8, así que el S debe ser +6. Es el nº del azufre en el sulfato ('ico' del ácido sulfúrico), y no debe confundirse con el del sulfuroso." }
        ],
        resultado: "H2SO3 (S +4), Na2SO3 (S +4), ZnSO4 (S +6)."
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Fe(NO3)3: cada anión NO3^- tiene carga -1, y hay 3 -> total -3. Para neutralidad, Fe^3+ -> Fe con nº +3.", porque: "En Fe(NO3)3 hay 3 nitratos de carga -1, lo que da -3 en total. Para que la sal sea neutra el hierro debe tener +3, y ese es el nº de oxidación que se pide." },
          { paso: "Nombre: nitrato de hierro(III) (o nitrato férrico).", porque: "El nombre de Stock incluye el número romano (III) para el nº de oxidación del hierro, y la tradicional usa 'férrico'. Ambos nombres describen el mismo compuesto y son válidos." }
        ],
        resultado: "Fe(NO3)3 = nitrato de hierro(III); Fe con nº +3."
      },
      {
        parte: "c)",
        pasos: [
          { paso: "H2SO3 + 2 NaOH -> Na2SO3 + 2 H2O.", porque: "El ácido sulfuroso es diprótico: tiene 2 H que se neutralizan con 2 OH^-. Por eso se necesitan 2 NaOH y se forman 2 H2O, y el balance de S, Na, H y O (1, 2, 4 y 5 átomos) confirma los coeficientes." },
          { paso: "La sal formada es el sulfito de sodio.", porque: "El anión sulfito (SO3^2-) proviene del ácido sulfuroso, cuyo sufijo es 'oso'. Como el catión es el Na^+ del NaOH, la sal se nombra sulfito de sodio." }
        ],
        resultado: "H2SO3 + 2 NaOH -> Na2SO3 + 2 H2O; sal = sulfito de sodio."
      },
      {
        parte: "d)",
        pasos: [
          { paso: "M(Na2SO3) = 2 x 22,99 + 32,06 + 3 x 16,00 = 126,04 g/mol.", porque: "La masa molar se obtiene sumando las masas atómicas de todos los átomos de la fórmula: 2 Na, 1 S y 3 O. Usar los valores con decimales asegura un resultado preciso en el paso siguiente." },
          { paso: "Por la reacción 1:1 entre H2SO3 y Na2SO3, n (Na2SO3) = n (H2SO3) = 0,0250 mol.", porque: "En la reacción los coeficientes son 1:1 entre H2SO3 y Na2SO3, así que la misma cantidad de moles de reactivo produce la misma cantidad de sal. Con rendimiento del 100% la cantidad de producto es igual a la del reactivo." },
          { paso: "m = 0,0250 mol x 126,04 g/mol = 3,151 g, es decir 3,15 g (3 cifras, como el dato 0,0250 mol).", porque: "Se calcula m = n x M, multiplicando 0,0250 mol por 126,04 g/mol. El resultado 3,151 g se redondea a 3,15 g porque el dato de moles tiene 3 cifras significativas." }
        ],
        resultado: "m(Na2SO3) = 3,15 g."
      }
    ],
    errores_tipicos: [
      { error: "Asignar +6 al S del H2SO3 porque lo confunde con el H2SO4.", como_evitar: "Calculá por separado para cada especie: en H2SO3 el S es +4." },
      { error: "Escribir H2SO3 + NaOH -> Na2SO3 + H2O sin balancear.", como_evitar: "Un ácido diprótico necesita 2 NaOH y produce 2 H2O: contá los H antes de balancear." }
    ]
  }
];
