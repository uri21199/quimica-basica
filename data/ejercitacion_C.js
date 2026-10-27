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
          { paso: "KF: Delta EN = 4,0 - 0,8 = 3,2. HCl: Delta EN = 3,0 - 2,1 = 0,9. Cl2: Delta EN = 3,0 - 3,0 = 0,0.", porque: "La diferencia de electronegatividad mide qué tan inequitativamente se comparten los electrones de un enlace; se calcula restando los valores de los dos átomos." },
          { paso: "KF: Delta EN > 2 y es un metal con un no metal, así que la unión es iónica (transferencia de un electrón del K al F, formando K^+ y F^-).", porque: "Según el criterio del apunte, Delta EN mayor que 2 indica unión iónica, y la combinación metal + no metal es el caso típico." },
          { paso: "HCl: 0 < Delta EN < 2 entre dos no metales: unión covalente polar, con el par de electrones desplazado hacia el Cl.", porque: "Con Delta EN menor que 2 la unión es covalente; si Delta no es cero, el átomo más electronegativo atrae el par con más fuerza y el enlace es polar." },
          { paso: "Cl2: Delta EN = 0: unión covalente no polar, con el par compartido en partes iguales.", porque: "Si ambos átomos tienen la misma electronegatividad, ninguno atrae más el par y no aparecen cargas parciales." }
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
          { paso: "Electrones de valencia totales: 4 (Si) + 4 x 7 (Cl) = 32 electrones, es decir 16 pares.", porque: "La estructura de Lewis representa solo los electrones de valencia de todos los átomos de la molécula." },
          { paso: "El Si es el átomo central (es menos electronegativo que el Cl) y se une a cada Cl con un enlace simple: 4 pares enlazantes (8 electrones).", porque: "Los átomos terminales son los más electronegativos y cada Cl necesita un solo enlace para completar su octeto junto con sus pares libres." },
          { paso: "Los 24 electrones restantes forman 12 pares libres: 3 pares libres en cada Cl (1 enlace + 3 pares = 8 electrones).", porque: "Cada Cl necesita 8 electrones alrededor de sí; con un enlace le faltan 6, que son 3 pares libres." },
          { paso: "Alrededor del Si quedan 4 pares enlazantes y 0 pares libres: el Si tiene 8 electrones.", porque: "El Si comparte sus 4 electrones de valencia con los 4 Cl; al compartir 4 pares cumple el octeto y no le sobran electrones." }
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
          { paso: "NH4^+: electrones de valencia = 5 (N) + 4 x 1 (H) - 1 (carga +) = 8 electrones, es decir 4 pares.", porque: "Una carga positiva indica que el ion perdió un electrón respecto del átomo neutro, así que ese electrón se resta del total." },
          { paso: "NH4^+: el N está unido a 4 H con enlaces simples: 4 pares enlazantes y 0 pares libres. Se dibuja entre corchetes con carga +.", porque: "El H forma un solo enlace; con 4 pares el N completa su octeto sin pares libres, y el ion se escribe entre corchetes con su carga." },
          { paso: "OH^-: electrones de valencia = 6 (O) + 1 (H) + 1 (carga -) = 8 electrones, es decir 4 pares.", porque: "Una carga negativa indica un electrón de más, que se suma al total." },
          { paso: "OH^-: 1 par enlazante (O-H) y 3 pares libres sobre el O; el O tiene 8 electrones.", porque: "El O necesita 2 electrones para el enlace y 6 que forman 3 pares libres para completar el octeto." }
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
          { paso: "CS2: cada enlace doble C=S tiene 1 sigma y 1 pi. Total: 2 sigma y 2 pi.", porque: "Un enlace doble se forma por solapamiento frontal (sigma) y lateral (pi); por eso cada doble aporta un sigma y un pi." },
          { paso: "C2H2: los 2 enlaces C-H son simples, sigma. El enlace C-C triple tiene 1 sigma y 2 pi.", porque: "Los enlaces simples son solo sigma y un triple es 1 sigma + 2 pi." },
          { paso: "C2H2 en total: sigma = 2 (C-H) + 1 (C-C) = 3; pi = 2.", porque: "Hay que contar todos los pares de átomos unidos, incluidos los C-H, y sumar los sigma y los pi por separado." }
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
          { paso: "C-C: Delta EN = 0,0. C-H: 2,5 - 2,1 = 0,4. C-Cl: 3,0 - 2,5 = 0,5. C-O: 3,5 - 2,5 = 1,0.", porque: "La polaridad de un enlace crece con la diferencia de electronegatividad entre sus átomos, y esa diferencia se obtiene restando." },
          { paso: "Orden creciente de polaridad: C-C < C-H < C-Cl < C-O.", porque: "Cuanto mayor es Delta EN, más desplazado queda el par electrónico hacia el átomo más electronegativo." },
          { paso: "El C-C es covalente no polar (Delta = 0) y el C-O es el más polar de la lista (Delta = 1,0).", porque: "Un enlace entre átomos iguales no tiene cargas parciales, así que sirve de referencia cero." }
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
          { paso: "Electrones de valencia: 6 (S) + 2 x 7 (F) = 20 electrones, es decir 10 pares.", porque: "Son los electrones que se distribuyen en la estructura de Lewis." },
          { paso: "El S es el átomo central y forma 2 enlaces simples S-F (2 pares enlazantes). Cada F completa su octeto con 3 pares libres (6 pares). Quedan 2 pares libres sobre el S.", porque: "El F es terminal y con un enlace necesita 3 pares libres; los electrones que sobran van como pares libres del átomo central." },
          { paso: "Alrededor del S hay 4 pares de electrones: 2 enlazantes y 2 libres.", porque: "TREPEV cuenta todos los pares del átomo central, enlazantes y libres, para determinar la geometría electrónica." },
          { paso: "Con 4 pares la geometría electrónica es tetraédrica (109,5 grados), y la molécular es angular: el ángulo F-S-F es menor que 109,5 grados (aprox. 98 grados) porque los pares libres repelen más y comprimen el ángulo.", porque: "Los pares libres ocupan más espacio que los enlazantes y empujan a los F, cerrando el ángulo." }
        ],
        resultado: "Geometría angular, con 4 pares alrededor del S (2 enlazantes y 2 libres) y ángulo menor que 109,5 grados."
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Cada enlace S-F tiene Delta EN = 4,0 - 2,5 = 1,5: es covalente polar, con los dipolos dirigidos hacia el F.", porque: "El F es más electronegativo, así que atrae el par electrónico hacia sí." },
          { paso: "Como la molécula es angular, los dos dipolos no se cancelan: la suma vectorial es distinta de cero y el SF2 es polar.", porque: "La polaridad molecular es la suma vectorial de los dipolos de enlace; en una molécula asimétrica no hay anulación." },
          { paso: "BCl3: 3 pares enlazantes y 0 libres alrededor del B, geometría trigonal plana con ángulos de 120 grados. El B queda con 6 electrones (excepción habitual al octeto). Cada enlace B-Cl tiene Delta EN = 1,0 (polar).", porque: "Con 3 pares TREPEV ubica los pares a 120 grados; el boro es una excepción al octeto y la geometría igual sale de contar regiones." },
          { paso: "Los tres dipolos B-Cl son de igual módulo y se reparten a 120 grados: su suma vectorial es cero y el BCl3 es apolar.", porque: "En una geometría simétrica los dipolos se cancelan aunque cada uno sea polar." }
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
          { paso: "Electrones de valencia: 6 (S) + 3 x 6 (O) + 2 (carga -2) = 26 electrones, es decir 13 pares.", porque: "Una carga negativa agrega electrones al total; el ion tiene dos electrones de más." },
          { paso: "Los 3 enlaces S-O son simples (3 pares enlazantes). El S conserva 1 par libre, y cada O tiene 3 pares libres (9 pares). Total: 3 + 1 + 9 = 13 pares.", porque: "Con enlaces simples el S cumple el octeto (6 + 2 = 8 electrones) y cada O cumple el suyo con 1 enlace y 3 pares libres." },
          { paso: "Alrededor del S hay 4 pares: 3 enlazantes y 1 libre. La geometría electrónica es tetraédrica y la molecular (ion) es piramidal trigonal, con ángulo O-S-O menor que 109,5 grados (aprox. 106 grados).", porque: "El par libre del S repele más que los enlazantes y reduce el ángulo respecto del tetraedro ideal." }
        ],
        resultado: "Geometría piramidal trigonal, con 4 pares alrededor del S (3 enlazantes y 1 libre)."
      },
      {
        parte: "b)",
        pasos: [
          { paso: "CO3^2-: el C central tiene 3 regiones enlazantes (un enlace doble y dos simples cuentan como 3 regiones) y ningún par libre.", porque: "En TREPEV cada enlace múltiple cuenta como una única región de electrones." },
          { paso: "Sin pares libres, la geometría es trigonal plana con ángulos de 120 grados.", porque: "Tres regiones se ubican a 120 grados en un mismo plano para estar lo más alejadas posible." },
          { paso: "El S del sulfito tiene 1 par libre además de sus 3 enlaces. Al ser 4 pares en total, la geometría deja de ser plana y se vuelve piramidal.", porque: "El par libre sobre el átomo central cambia la geometría molecular aunque el número de átomos unidos sea igual."}
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
          { paso: "Cada C forma 3 enlaces sigma (2 C-H y 1 C-C) y 1 enlace pi. Alrededor de cada C hay 3 regiones de electrones y ningún par libre.", porque: "El doble enlace C=C cuenta como una única región para TREPEV, aunque tenga un sigma y un pi." },
          { paso: "Con 3 regiones, la hibridación de cada C es sp^2: se forman 3 orbitales híbridos (los sigma) y queda 1 orbital p sin hibridar, que forma el enlace pi.", porque: "El número de regiones de electrones define la hibridación: 3 regiones corresponden a sp^2." },
          { paso: "Geometría trigonal plana alrededor de cada C, con ángulo H-C-H aprox. 120 grados.", porque: "Tres regiones de electrones se ubican a 120 grados en el mismo plano." }
        ],
        resultado: "Ambos C son sp^2, con geometría trigonal plana y ángulos de aprox. 120 grados."
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Enlaces sigma: 4 C-H + 1 C-C = 5 sigma.", porque: "Cada enlace simple es un sigma, y los enlaces de la parte doble también tienen su sigma." },
          { paso: "Enlaces pi: 1 (el lateral del doble enlace C=C).", porque: "El doble enlace es 1 sigma + 1 pi; los enlaces simples no tienen pi." }
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
          { paso: "Electrones de valencia: 6 (S) + 2 x 6 (O) = 18 electrones, es decir 9 pares.", porque: "Es el total de electrones de valencia que se reparte en la estructura." },
          { paso: "Supuesto: se usa la forma O=S->O. El S central tiene un enlace doble, un enlace dativo (aportado por el S) y 1 par libre; el O unido por enlace dativo tiene 3 pares libres y el O del doble enlace tiene 2 pares libres.", porque: "Con esta forma el S cumple el octeto (4 + 2 + 2 = 8 electrones) y los O también cumplen el suyo. Las otras formas de resonancia dan la misma geometría." },
          { paso: "Alrededor del S hay 3 regiones de electrones (doble enlace, enlace dativo y par libre): geometría electrónica trigonal plana. La molécula es angular, con ángulo O-S-O aprox. 119 grados.", porque: "Con 3 regiones TREPEV da 120 grados, y el par libre lo comprime un poco al repeler más que los enlaces." }
        ],
        resultado: "Geometría molecular angular, ángulo aprox. 119 grados."
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Cada enlace S-O tiene Delta EN = 3,5 - 2,5 = 1,0: son enlaces covalentes polares, con dipolos dirigidos hacia el O.", porque: "El O es más electronegativo y atrae el par electrónico hacia sí." },
          { paso: "En el CO2 (lineal, simétrico) los dos dipolos C=O son iguales y opuestos y se cancelan: el CO2 es apolar.", porque: "En una molécula lineal simétrica la suma vectorial de dipolos iguales y opuestos es cero." },
          { paso: "En el SO2 la geometría angular impide que los dipolos S-O se anulen: la suma vectorial es distinta de cero y la molécula es polar.", porque: "La polaridad molecular depende de la forma: con geometría angular no hay cancelación." }
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
          { paso: "Mg: solo hay átomos de metal, así que la unión es metálica; las partículas son átomos de Mg en una red con electrones de valencia deslocalizados.", porque: "Entre metales los electrones se comparten en todo el sólido (modelo del mar de electrones)." },
          { paso: "MgO: Delta EN = 3,5 - 1,2 = 2,3 > 2, y es metal con no metal: unión iónica. Las partículas son iones Mg^2+ y O^2- en una red, sin moléculas.", porque: "Con Delta EN mayor que 2 y combinación metal-no metal, el criterio del apunte indica unión iónica." },
          { paso: "Cl2: Delta EN = 0: unión covalente no polar, con partículas que son moléculas Cl2.", porque: "Dos átomos iguales comparten el par en partes iguales." },
          { paso: "NH3: Delta EN (N-H) = 3,0 - 2,1 = 0,9: covalente polar, con partículas que son moléculas NH3.", porque: "Entre no metales la unión es covalente, y con Delta distinto de cero es polar." }
        ],
        resultado: "Mg: metálica (átomos en red); MgO: iónica (iones); Cl2: covalente no polar (moléculas); NH3: covalente polar (moléculas)."
      },
      {
        parte: "b)",
        pasos: [
          { paso: "En el MgO hay que vencer las atracciones electrostáticas entre iones Mg^2+ y O^2- de carga 2, que son muy fuertes, para separar la red.", porque: "La atracción de Coulomb aumenta con la carga de los iones, así que las cargas 2+ y 2- atraen mucho más que cargas de 1."},
          { paso: "En el Cl2 al fundir se separan moléculas; solo hay que vencer fuerzas intermoleculares débiles (de dispersión), sin romper el enlace Cl-Cl.", porque: "El punto de fusión mide cuánto cuesta separar las unidades; las fuerzas entre moléculas apolares son débiles." },
          { paso: "Por eso el MgO funde a una temperatura mucho más alta que el Cl2.", porque: "Las fuerzas iónicas, mucho más intensas, requieren más energía para vencerse." }
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
          { paso: "Pasar el momento dipolar a unidades SI: mu = 1,08 D x 3,34 x 10^-30 C.m/D = 3,61 x 10^-30 C.m.", porque: "La fórmula mu = q x d usa C.m; el debye es una unidad práctica que hay que convertir antes de operar." },
          { paso: "Despejar la carga: q = mu / d = 3,61 x 10^-30 C.m / 1,27 x 10^-10 m = 2,84 x 10^-20 C.", porque: "Un dipolo son dos cargas iguales y opuestas separadas por una distancia d, y mu = q x d las relaciona." },
          { paso: "Expresar en unidades de e: 2,84 x 10^-20 C / 1,60 x 10^-19 C = 0,178 e.", porque: "La carga parcial se expresa como fracción de la carga del electrón, que es la unidad natural para cargas en moléculas." }
        ],
        resultado: "q = 2,84 x 10^-20 C, es decir 0,178 e (carga parcial sobre el H)."
      },
      {
        parte: "b)",
        pasos: [
          { paso: "El Cl (Delta EN = 0,9) es más electronegativo: atrae el par hacia sí y queda con carga parcial negativa (delta-); el H queda con delta+.", porque: "El átomo más electronegativo se lleva más densidad electrónica del enlace." },
          { paso: "En el H2O los dos dipolos O-H están inclinados en una geometría angular y su suma vectorial es distinta de cero: mu = 1,85 D.", porque: "En moléculas asimétricas la resultante de los dipolos de enlace no se anula." },
          { paso: "En el CO2 los dos dipolos C=O son iguales, de sentido opuesto y forman una molécula lineal: se cancelan y mu = 0.", porque: "Tener enlaces polares no alcanza para ser polar; la polaridad molecular depende de la suma vectorial de los dipolos." }
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
          { paso: "CCl4: el C tiene 4 pares enlazantes y ningún par libre: geometría tetraédrica (109,5 grados). Los 4 dipolos C-Cl son iguales y se dirigen a los vértices de un tetraedro: su suma es cero. El CCl4 es apolar.", porque: "Con geometría simétrica los dipolos de igual módulo se anulan entre sí." },
          { paso: "CHCl3: el C sigue siendo tetraédrico, pero ahora uno de los enlaces es C-H y los otros 3 son C-Cl. La simetría se rompe y la suma de dipolos es distinta de cero: el CHCl3 es polar.", porque: "Al cambiar un Cl por un H, los dipolos dejan de ser iguales y ya no se cancelan." },
          { paso: "CH3Cl: tetraédrica y asimétrica (un solo Cl): el dipolo C-Cl no se cancela. El CH3Cl es polar.", porque: "Con un único dipolo de enlace relevante, la molécula no tiene simetría que lo anule." }
        ],
        resultado: "CCl4 apolar; CHCl3 y CH3Cl polares."
      },
      {
        parte: "b)",
        pasos: [
          { paso: "El argumento es incorrecto: que un enlace sea polar no hace polar a la molécula.", porque: "La polaridad molecular es la suma vectorial de todos los dipolos de enlace, no la de un enlace aislado." },
          { paso: "En el CCl4 los 4 dipolos C-Cl forman una resultante nula por la geometría tetraédrica simétrica.", porque: "La regla del paralelogramo, aplicada a una geometría simétrica, da cero." }
        ],
        resultado: "El CCl4 es apolar aunque tenga 4 enlaces polares."
      },
      {
        parte: "c)",
        pasos: [
          { paso: "Delta EN (C-Cl) = 3,0 - 2,5 = 0,5. Delta EN (C-H) = 2,5 - 2,1 = 0,4.", porque: "Se resta la electronegatividad del otro átomo al del C, usando la tabla dada." },
          { paso: "Orden de polaridad creciente: C-H (0,4) < C-Cl (0,5).", porque: "A mayor Delta EN, mayor polaridad del enlace." }
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
          { paso: "KCl: Delta EN = 3,0 - 0,8 = 2,2 > 2: unión iónica. Cl2: Delta EN = 0: covalente no polar.", porque: "Se aplica el criterio del apunte: Delta EN mayor que 2 indica iónico, y menor que 2 indica covalente." },
          { paso: "AlCl3: Delta EN = 3,0 - 1,5 = 1,5 < 2, así que por el criterio sería covalente. Advertencia: el Al es un metal y el enlace tiene carácter iónico parcial; el criterio es una aproximación y la unión real es un continuo.", porque: "Los cationes pequeños y muy cargados, como el Al^3+, polarizan la nube electrónica del Cl^-, y el criterio por sí solo no lo capta." }
        ],
        resultado: "KCl iónico; Cl2 covalente no polar; AlCl3 covalente según el criterio, con carácter iónico parcial importante."
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Delta EN: AlCl3 = 1,5; MgCl2 = 3,0 - 1,2 = 1,8; KCl = 2,2.", porque: "Se calcula la diferencia con la misma tabla para cada compuesto." },
          { paso: "Orden creciente de carácter iónico: AlCl3 < MgCl2 < KCl.", porque: "El carácter iónico crece con Delta EN, según el criterio de la teoría." }
        ],
        resultado: "AlCl3 < MgCl2 < KCl (de menor a mayor carácter iónico)."
      },
      {
        parte: "c)",
        pasos: [
          { paso: "Cuando Delta EN es grande, el átomo más electronegativo atrae con mucha más fuerza el electrón, y la transferencia de carga entre átomos se acerca a un electrón completo.", porque: "La electronegatividad mide la atracción por los electrones de un enlace; a mayor diferencia, menos compartido y más transferido." },
          { paso: "Los iones resultantes (catión y anión) se mantienen unidos por atracción electrostática, que es el carácter iónico del enlace.", porque: "La unión iónica es la atracción de iones de carga opuesta, y su intensidad aumenta con la carga y con la transferencia." }
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
          { paso: "H2O: O con 2 enlazantes y 2 libres (4 pares): geometría electrónica tetraédrica, molecular angular.", porque: "TREPEV cuenta todos los pares del átomo central para la geometría electrónica, y los libres definen la forma molecular." },
          { paso: "NH3: N con 3 enlazantes y 1 libre (4 pares): tetraédrica electrónica, molecular piramidal trigonal.", porque: "El par libre del N cambia la forma de tetraédrica a piramidal." },
          { paso: "CH4 y NH4^+: 4 enlazantes y 0 libres: tetraédrica tanto electrónica como molecular.", porque: "Sin pares libres la forma coincide con la geometría electrónica." }
        ],
        resultado: "H2O: 2 libres, angular. NH3: 1 libre, piramidal. CH4 y NH4^+: 0 libres, tetraédricos."
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Los pares libres repelen más que los enlazantes. El H2O tiene 2 pares libres y el NH3 tiene 1: el ángulo del H2O se comprime más, hasta aprox. 104,5 grados (frente a aprox. 107 grados del NH3).", porque: "Cada par libre adicional comprime más los enlaces, y así se ordenan los ángulos: 2 libres < 1 libre < 0 libres." }
        ],
        resultado: "El H2O tiene un ángulo menor (aprox. 104,5 grados) que el NH3 (aprox. 107 grados) por tener un par libre más."
      },
      {
        parte: "c)",
        pasos: [
          { paso: "Ambos tienen 4 pares enlazantes y 0 pares libres alrededor del átomo central.", porque: "Sin pares libres la repulsión es igual entre todos los enlaces, y los pares se ubican como en un tetraedro regular." },
          { paso: "Por eso ambos tienen ángulo de 109,5 grados.", porque: "Con geometría tetraédrica ideal el ángulo es 109,5 grados, sin compresión por pares libres." }
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
          { paso: "Electrones de valencia: 3 x 6 = 18 electrones, es decir 9 pares. En cada forma el O central tiene un par libre, y los enlaces se reparten entre un enlace doble y uno dativo.", porque: "Con estos 9 pares se puede completar el octeto de los tres átomos en las dos formas." },
          { paso: "Ambas formas contribuyen a la molécula real: la verdadera estructura es un híbrido de resonancia en el que los dos enlaces O-O son equivalentes.", porque: "Ninguna forma por sí sola describe la molécula; la real es un promedio de todas las formas posibles." },
          { paso: "Las formas no son moléculas distintas que se alternan en el tiempo: son representaciones de una única molécula con electrones deslocalizados.", porque: "La resonancia describe la distribución electrónica de una molécula; no implica cambio de especie." }
        ],
        resultado: "Las dos formas resonantes describen una única molécula híbrida, con los dos enlaces O-O equivalentes."
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Alrededor del O central hay 3 regiones de electrones: el doble enlace, el enlace dativo (o simple) y el par libre.", porque: "Cada enlace múltiple cuenta como una región en TREPEV, y el par libre también." },
          { paso: "Con 3 regiones la geometría electrónica es trigonal plana y la molecular es angular, con ángulo aprox. 117 grados.", porque: "El par libre repele más y comprime el ángulo respecto de 120 grados." },
          { paso: "Enlaces: 2 sigma (uno por cada O-O) y 1 pi deslocalizado entre los dos enlaces O-O.", porque: "El doble enlace aporta 1 sigma y 1 pi; en la resonancia el pi se reparte entre ambos enlaces." }
        ],
        resultado: "Geometría angular (aprox. 117 grados), con 2 sigma y una parte pi deslocalizada."
      },
      {
        parte: "c)",
        pasos: [
          { paso: "Delta EN (O-O) = 3,5 - 3,5 = 0: los enlaces O-O son covalentes no polares, sin dipolos de enlace.", porque: "Dos átomos iguales comparten el par en partes iguales." },
          { paso: "Con dipolos de enlace nulos, por el modelo del apunte la suma vectorial es cero. Supuesto: esto no coincide del todo con el dato experimental, ya que el O3 tiene un pequeño momento dipolar debido a la distribución de cargas de sus formas resonantes, que el apunte no cubre.", porque: "El modelo de Delta EN no alcanza para explicar la separación de carga de las formas con cargas formales; por eso el resultado debe tomarse con cautela." }
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
          { paso: "CO2: 4 + 2 x 6 = 16 electrones (8 pares). Estructura O=C=O: 2 enlaces dobles, sin pares libres en el C y 2 pares libres en cada O.", porque: "El C central, menos electronegativo que el O, forma dos dobles enlaces y completa su octeto con 4 pares compartidos." },
          { paso: "CS2: 4 + 2 x 6 = 16 electrones. Estructura S=C=S, con la misma forma que el CO2 y 2 pares libres en cada S.", porque: "El S también tiene 6 electrones de valencia, así que la distribución es idéntica a la del CO2." },
          { paso: "Delta EN (C=O) = 3,5 - 2,5 = 1,0: enlace covalente polar. Delta EN (C=S) = 2,5 - 2,5 = 0,0: enlace covalente no polar.", porque: "Se restan las electronegatividades de los pares de átomos; el C y el S tienen el mismo valor, así que su enlace no tiene dipolo." }
        ],
        resultado: "CO2: enlaces C=O covalentes polares. CS2: enlaces C=S covalentes no polares (Delta EN = 0)."
      },
      {
        parte: "b)",
        pasos: [
          { paso: "SO2: 6 + 2 x 6 = 18 electrones (9 pares). Estructura O=S->O, con enlace doble, enlace dativo y 1 par libre sobre el S.", porque: "Es la forma que cumple el octeto en S y en O, como en el ejercicio de la teoría." },
          { paso: "Alrededor del S hay 3 regiones de electrones (doble enlace, dativo y par libre): geometría electrónica trigonal plana y molecular angular, con ángulo aprox. 119 grados.", porque: "TREPEV: 3 regiones dan 120 grados, y el par libre lo comprime un poco." }
        ],
        resultado: "Geometría angular, ángulo aprox. 119 grados."
      },
      {
        parte: "c)",
        pasos: [
          { paso: "CO2: lineal y simétrico. Sus dipolos C=O son iguales y opuestos: la suma es cero y el CO2 es apolar.", porque: "La simetría lineal hace que los dipolos se cancelen." },
          { paso: "SO2: enlaces S=O polares (Delta EN = 1,0) con geometría angular, sin cancelación: el SO2 es polar.", porque: "La suma vectorial de los dos dipolos S-O no es cero por la forma angular." }
        ],
        resultado: "El CO2 es apolar; el SO2 es polar."
      },
      {
        parte: "d)",
        pasos: [
          { paso: "Regla semejante disuelve semejante: el agua es polar, por lo que disuelve mejor a sustancias polares como el SO2 que al CO2 apolar.", porque: "Las moléculas polares interactúan mejor entre sí por dipolo-dipolo, y el agua es un solvente polar." },
          { paso: "Además, el SO2 reacciona parcialmente con el agua formando H2SO3, lo que aumenta su solubilidad aparente.", porque: "Una reacción con el solvente también incrementa cuánto gas se incorpora a la solución." }
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
          { paso: "Los metales alcalinos (K, Na) tienen nº de oxidación +1; el O suele ser -2 y el H suele ser +1.", porque: "Son las reglas generales del apunte para los elementos de referencia, que se usan para despejar el elemento desconocido." },
          { paso: "KMnO4: 0 = (+1) + Mn + 4 x (-2) -> Mn = +7.", porque: "En una especie neutra la suma de los números de oxidación es 0, multiplicando cada uno por su subíndice." },
          { paso: "H2SO4: 0 = 2 x (+1) + S + 4 x (-2) -> S = +6.", porque: "Se aplica la misma suma, con el H multiplicado por 2." },
          { paso: "Na2S: 0 = 2 x (+1) + S -> S = -2 (el S es el anión sulfuro).", porque: "El S es más electronegativo que el Na, así que se le asigna el nº negativo." }
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
          { paso: "Óxido de cloro(VII): Cl con nº +7 y O con -2. Se cruzan los valores: 2 Cl (+7) y 7 O (-2) -> Cl2O7.", porque: "En un compuesto neutro los subíndices se obtienen cruzando los números de oxidación, así la suma da 0 (2 x 7 = 14 = 7 x 2)." },
          { paso: "Óxido de calcio: Ca con +2 y O con -2 -> CaO.", porque: "Con números iguales en valor absoluto, los subíndices son 1 y 1." },
          { paso: "Cl2O7 en IUPAC sistemática: heptóxido de dicloro. Equivale a óxido de cloro(VII) en Stock.", porque: "La sistemática usa prefijos numerales (hepta = 7, di = 2); la de Stock usa el nº de oxidación en número romano. Ambos son válidos." },
          { paso: "CaO: óxido de calcio, sin número romano.", porque: "En Stock el número romano se escribe solo cuando el elemento puede tener más de un nº de oxidación; el calcio tiene solo +2." }
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
          { paso: "HBr gaseoso: es un hidrácido en estado gaseoso, se nombra bromuro de hidrógeno (uro de hidrógeno).", porque: "El nombre 'ácido ... hídrico' se usa solo cuando el compuesto está en solución acuosa." },
          { paso: "HBr disuelto en agua: ácido bromhídrico.", porque: "En solución acuosa el hidrácido se nombra como ácido." },
          { paso: "NaH: hidruro de sodio. El H tiene nº -1 porque el metal es más electropositivo.", porque: "En los hidruros metálicos el H actúa como anión, con nº -1." },
          { paso: "NH3: amoníaco (nombre tradicional, el que usa la guía) o trihidruro de nitrógeno (IUPAC). Ambos son válidos.", porque: "La IUPAC nombra los hidruros con prefijos numerales, y la tradicional conserva el nombre histórico del amoníaco." }
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
          { paso: "Ácido nitroso (N +3): H (+1) + N (+3) + 2 x O (-2) = 0 -> HNO2.", porque: "En un oxoácido la suma de números de oxidación es 0; el sufijo 'oso' indica el menor nº de los oxoácidos del elemento." },
          { paso: "Ácido nítrico (N +5): H (+1) + N (+5) + 3 x O (-2) = 0 -> HNO3.", porque: "El sufijo 'ico' indica el mayor nº de oxidación del elemento en esa serie." },
          { paso: "Ácido hipocloroso (Cl +1): H (+1) + Cl (+1) + O (-2) = 0 -> HClO.", porque: "El prefijo 'hipo' y el sufijo 'oso' indican el menor nº de oxidación de la serie." },
          { paso: "Ácido clórico (Cl +5): H (+1) + Cl (+5) + 3 x O (-2) = 0 -> HClO3.", porque: "El 'ico' corresponde al nº +5, que es el de la serie del clorato." }
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
          { paso: "Sulfato de aluminio: el catión es Al^3+ y el anión es SO4^2-. Para neutralidad: 2 Al^3+ (6+) y 3 SO4^2- (6-) -> Al2(SO4)3.", porque: "La carga total de los cationes y de los aniones debe ser igual; se usan las cargas como subíndices cruzados." },
          { paso: "Fosfato de calcio: Ca^2+ y PO4^3-. Para neutralidad: 3 Ca^2+ (6+) y 2 PO4^3- (6-) -> Ca3(PO4)2.", porque: "Se multiplica cada ion por el número que iguala la carga total: 6+ y 6-." },
          { paso: "Mg(NO3)2: el catión Mg^2+ tiene un único nº de oxidación y el anión nitrato es NO3^- -> nitrato de magnesio.", porque: "El romano se omite cuando el elemento tiene un único nº de oxidación posible." }
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
          { paso: "Sulfato de hierro(III): Fe^3+ y SO4^2-. Para neutralidad: 2 Fe^3+ (6+) y 3 SO4^2- (6-) -> Fe2(SO4)3.", porque: "El número romano indica la carga del catión, y se igualan las cargas como en cualquier sal." },
          { paso: "Hidrogenosulfato de sodio: anión HSO4^- (sulfato con un H) y catión Na^+ -> NaHSO4.", porque: "En una sal ácida el H que queda en el anión se escribe delante del anión; las cargas 1+ y 1- ya se igualan con una unidad de cada una." }
        ],
        resultado: "Fe2(SO4)3 y NaHSO4."
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Ca(ClO)2: catión Ca^2+ y anión ClO^- (Cl con nº +1, hipoclorito). Se necesitan 2 ClO^- por cada Ca^2+ -> hipoclorito de calcio.", porque: "El Ca tiene carga 2+, así que hacen falta dos aniones monovalentes para neutralizarla." },
          { paso: "KHCO3: catión K^+ y anión HCO3^- (hidrogenocarbonato). Nombre válido: hidrogenocarbonato de potasio; nombre tradicional: bicarbonato de potasio.", porque: "El anión con H es una sal ácida; la IUPAC usa 'hidrogeno' y la tradicional usa 'bi'." }
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
          { paso: "N2O5: el N tiene nº +5, porque 2 x (+5) = 10 = 5 x 2 (O).", porque: "Es la verificación de cruzar los números de oxidación para la fórmula dada." },
          { paso: "IUPAC: pentóxido de dinitrógeno. Stock: óxido de nitrógeno(V).", porque: "Dos nombres válidos: la sistemática usa prefijos y la de Stock el nº romano." },
          { paso: "Como es un no metal con oxígeno, es un óxido ácido.", porque: "Los óxidos de no metales reaccionan con agua para formar oxoácidos." }
        ],
        resultado: "N2O5 = pentóxido de dinitrógeno (óxido de nitrógeno(V)), óxido ácido."
      },
      {
        parte: "b)",
        pasos: [
          { paso: "N2O5 + H2O -> 2 HNO3. Balance: N 2 = 2; H 2 = 2; O 5 + 1 = 6 = 2 x 3.", porque: "Un óxido ácido más agua da el oxoácido correspondiente; el N +5 da el ácido nítrico." },
          { paso: "El producto es ácido nítrico.", porque: "El HNO3 corresponde al nitrógeno con nº +5, sufijo 'ico'." }
        ],
        resultado: "N2O5 + H2O -> 2 HNO3 (ácido nítrico)."
      },
      {
        parte: "c)",
        pasos: [
          { paso: "HNO3 + NaOH -> NaNO3 + H2O.", porque: "Ácido más base da sal más agua (neutralización); el HNO3 aporta 1 H, así que se usa 1 NaOH." },
          { paso: "NaNO3: nitrato de sodio (anión NO3^-, nítrico).", porque: "El nitrato proviene del ácido nítrico; el nitrito (NO2^-) proviene del nitroso." }
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
          { paso: "La cadena continua más larga tiene 6 carbonos: el nombre base es hexano. El CH3 ramificado es el sustituyente metilo.", porque: "El nombre base se toma de la cadena continua más larga." },
          { paso: "Numerando desde la izquierda, el metilo queda en C3; desde la derecha, quedaría en C4. Se elige el localizador más bajo: C3.", porque: "Se numera para que el sustituyente tenga el localizador más bajo posible." },
          { paso: "Nombre: 3-metilhexano.", porque: "Se escribe el localizador, el prefijo del sustituyente y el nombre del alcano base." }
        ],
        resultado: "3-metilhexano."
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Butano (4 C) como base, con 2 metilos sobre el C2: CH3-C(CH3)2-CH2-CH3.", porque: "El prefijo 'dimetil' indica dos metilos, y el localizador 2,2 indica que están sobre el C2." },
          { paso: "Contar carbonos: 4 de la cadena + 2 metilos = 6 C. Hidrógenos: 3 + 6 + 2 + 3 = 14. Fórmula molecular C6H14.", porque: "Cada carbono y cada hidrógeno de la fórmula desarrollada se cuenta; y C6H14 cumple CnH2n+2." }
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
          { paso: "El grupo COOH (ácido) tiene prioridad sobre el OH: el C del COOH es el C1. La cadena tiene 4 C: C1 (COOH), C2 (CH2), C3 (CH con OH), C4 (CH3).", porque: "El grupo de mayor prioridad define la numeración y el sufijo; el carbono del COOH se cuenta en la cadena." },
          { paso: "El OH está en C3: prefijo 3-hidroxi.", porque: "Cuando el grupo principal es ácido, el OH se nombra como prefijo 'hidroxi'." },
          { paso: "Nombre: ácido 3-hidroxibutanoico.", porque: "Base 'but' (4 C) + 'anoico' por el ácido carboxílico." }
        ],
        resultado: "Ácido 3-hidroxibutanoico."
      },
      {
        parte: "b)",
        pasos: [
          { paso: "CH2=CH-CHO: el CHO es un aldehído (C1), la cadena tiene 3 C y el doble enlace está entre C2 y C3. Nombre: prop-2-enal (2-propenal). Nombre trivial: acroleína.", porque: "El aldehído tiene prioridad y el doble enlace recibe el localizador más bajo posible; 'prop-2-enal' y '2-propenal' son equivalentes." },
          { paso: "Etanoato de etilo: parte ácida 'etanoato' (de ácido etanoico, acético) y parte alcohólica 'de etilo' (de etanol). Fórmula: CH3-COO-CH2-CH3.", porque: "Los ésteres se nombran como 'oato de -ilo': primero la parte del ácido y después el radical del alcohol." }
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
          { paso: "El OH unido al anillo define un fenol: el C con OH es el C1 del anillo.", porque: "El grupo principal recibe el localizador 1 en los derivados del benceno." },
          { paso: "El CH3 está en posición vecina (orto) al OH, es decir en C2: 2-metilfenol.", porque: "Orto es el localizador 2 respecto del grupo principal; en dos sustituyentes puede escribirse con o-, m- o p-, o con localizadores." },
          { paso: "Nombre tradicional válido: o-cresol (orto-metilfenol).", porque: "El cresol es el nombre tradicional de los metilfenoles; ambos nombres son válidos." }
        ],
        resultado: "2-metilfenol (o-cresol)."
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Ácido benzoico: el COOH va unido al C1 del anillo. El Cl va en C3, que es meta respecto del COOH.", porque: "El grupo COOH define el nombre base 'benzoico' y su carbono es el C1 del anillo." },
          { paso: "Fórmula: HOOC-C6H4-Cl, con C6H4 (el anillo con 2 sustituyentes), Cl en C3 y COOH en C1. Fórmula molecular C7H5ClO2.", porque: "El benceno es C6H6; al reemplazar 2 H por COOH y Cl quedan C6H4 en el anillo, y se suma el C del COOH." }
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
          { paso: "H2O2: 2 x (+1) + 2 x O = 0 -> O = -1. El O tiene -1 en peróxidos porque forma un enlace O-O.", porque: "Cuando dos O están unidos entre sí, los electrones de ese enlace se asignan igual a ambos; el -2 se aplica a los óxidos sin enlace O-O." },
          { paso: "OF2: el F (EN 4,0) es más electronegativo que el O (EN 3,5), así que el F tiene nº -1: 2 x (-1) + O = 0 -> O = +2.", porque: "Los números de oxidación se asignan según la electronegatividad: el más electronegativo recibe el nº negativo, y el F siempre es -1 en compuestos." },
          { paso: "K2Cr2O7: 2 x (+1) + 2 x Cr + 7 x (-2) = 0 -> 2 Cr = +12 -> Cr = +6.", porque: "Hay 2 Cr por fórmula: el total de Cr se calcula sobre la fórmula y después se divide por 2." }
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
          { paso: "Cloruro de hierro(II): Fe^2+ y Cl^- -> FeCl2.", porque: "Dos aniones Cl^- neutralizan 1 catión Fe^2+." },
          { paso: "Cloruro férrico (= cloruro de hierro(III)): Fe^3+ y Cl^- -> FeCl3.", porque: "'Férrico' indica el catión de mayor carga, Fe^3+, y hacen falta 3 Cl^-." },
          { paso: "Sulfuro de hierro(III): Fe^3+ y S^2- -> Fe2S3 (2 x 3+ = 6+ y 3 x 2- = 6-).", porque: "Se igualan las cargas totales: el mínimo común múltiplo de 3 y 2 es 6." }
        ],
        resultado: "FeCl2, FeCl3 y Fe2S3."
      },
      {
        parte: "b)",
        pasos: [
          { paso: "El romano (II) o 'férrico' indica el nº de oxidación del Fe: +2 en el cloruro ferroso y +3 en el férrico y en el sulfuro de hierro(III).", porque: "El nº de oxidación en la nomenclatura de Stock es la carga del catión; 'ferroso' = menor (Fe^2+), 'férrico' = mayor (Fe^3+)." }
        ],
        resultado: "Fe +2 en FeCl2; Fe +3 en FeCl3 y Fe2S3."
      },
      {
        parte: "c)",
        pasos: [
          { paso: "M(FeCl3) = 55,85 + 3 x 35,45 = 162,20 g/mol.", porque: "La masa molar es la suma de las masas atómicas de la fórmula, y en este paso se usan todos los decimales." },
          { paso: "m = n x M = 0,500 mol x 162,20 g/mol = 81,10 g.", porque: "Se multiplica la cantidad de sustancia por la masa molar." },
          { paso: "Cifras significativas: el dato 0,500 mol tiene 3 cifras, así que el resultado es 81,1 g.", porque: "El resultado de un producto se informa con la cantidad de cifras del dato menos preciso." }
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
          { paso: "ClO2^-: x + 2 x (-2) = -1 -> x = +3. ClO3^-: x + 3 x (-2) = -1 -> x = +5. ClO4^-: x + 4 x (-2) = -1 -> x = +7.", porque: "En un ion la suma de los nº de oxidación es igual a su carga, no a 0." }
        ],
        resultado: "Cl: +3 en ClO2^-, +5 en ClO3^-, +7 en ClO4^-."
      },
      {
        parte: "b)",
        pasos: [
          { paso: "HClO2 (Cl +3): ácido cloroso (tradicional); IUPAC: clorato(III) de hidrógeno.", porque: "'Oso' corresponde al menor nº de la serie; en IUPAC el nº de oxidación va en número romano." },
          { paso: "HClO3 (Cl +5): ácido clórico; IUPAC: clorato(V) de hidrógeno.", porque: "'Ico' corresponde al nº +5 de la serie." },
          { paso: "HClO4 (Cl +7): ácido perclórico (el prefijo 'per-' indica el nº mayor); IUPAC: clorato(VII) de hidrógeno.", porque: "El prefijo 'per-' con 'ico' indica un nº de oxidación más alto que el del clórico (+7 frente a +5)." }
        ],
        resultado: "HClO2: ácido cloroso / clorato(III) de hidrógeno; HClO3: ácido clórico / clorato(V) de hidrógeno; HClO4: ácido perclórico / clorato(VII) de hidrógeno."
      },
      {
        parte: "c)",
        pasos: [
          { paso: "NaClO2: clorito de sodio (IUPAC: clorato(III) de sodio). NaClO3: clorato de sodio (IUPAC: clorato(V) de sodio). NaClO4: perclorato de sodio (IUPAC: clorato(VII) de sodio).", porque: "Un catión Na^+ se combina con un anión monovalente, así que la fórmula tiene 1 Na por anión; los nombres siguen la serie del ácido." }
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
          { paso: "El ácido carboxílico (COOH) tiene prioridad: el C del COOH es el C1 de una cadena de 5 C.", porque: "El grupo de mayor prioridad define la numeración." },
          { paso: "La cetona (C=O) está en C4, y el C5 es un CH3: HOOC-CH2-CH2-CO-CH3.", porque: "Se escribe la cadena de 5 C numerada desde el COOH, con el C=O en C4 y el metilo final en C5." },
          { paso: "Grupos funcionales: ácido carboxílico (principal) y cetona (secundaria, nombrada como prefijo 'oxo').", porque: "Como el ácido tiene prioridad, la cetona no puede ser el sufijo y se nombra como 'oxo'." }
        ],
        resultado: "HOOC-CH2-CH2-CO-CH3 (C5H8O3); grupos ácido carboxílico y cetona."
      },
      {
        parte: "b)",
        pasos: [
          { paso: "CH3-CO-NH-CH3 tiene el grupo CO-NH-: es una amida. La parte acilo es CH3-CO-, de 2 C (acetamida).", porque: "El grupo C(=O)N es el de las amidas, y el C del grupo carbonilo se cuenta en la cadena base." },
          { paso: "El metilo unido al N se indica con el localizador N-: N-metiletanamida (o N-metilacetamida).", porque: "Los sustituyentes sobre el N de una amida se nombran con N-, no con un número de carbono." }
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
          { paso: "Cadena de 5 C con un doble enlace y un triple enlace. La numeración posible da locantes {1,4} en ambos sentidos: el doble en 1 y el triple en 4 (pent-1-en-4-ino) o el triple en 1 y el doble en 4 (pent-4-en-1-ino).", porque: "Hay que comparar los dos sentidos de numeración de la cadena." },
          { paso: "Se elige el sentido que da el localizador más bajo al doble enlace (ene), porque cuando hay empate en el conjunto de locantes el doble enlace tiene prioridad sobre el triple.", porque: "Las insaturaciones se numeran con prioridad: primero el conjunto de locantes más bajo y, en empate, el doble enlace antes que el triple." },
          { paso: "Nombre: pent-1-en-4-ino.", porque: "Se escriben los localizadores del 'eno' y del 'ino' con sus sufijos." }
        ],
        resultado: "pent-1-en-4-ino (no pent-4-en-1-ino)."
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Ciclopenteno: anillo de 5 C con un doble enlace (C5H8). Al reemplazar un H por CH3 en el C1 se agrega un CH2.", porque: "Un sustituyente metilo reemplaza un H y suma CH2 a la fórmula." },
          { paso: "Fórmula molecular: C6H10.", porque: "C5H8 + CH2 = C6H10." }
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
          { paso: "Ácido sulfuroso: H2SO3. Con H +1 y O -2: 2 x (+1) + S + 3 x (-2) = 0 -> S = +4.", porque: "'Oso' corresponde al menor nº del azufre en los oxoácidos; el cálculo lo confirma." },
          { paso: "Sulfito de sodio: Na2SO3. Con Na +1: 2 x (+1) + S + 3 x (-2) = 0 -> S = +4.", porque: "El anión sulfito es SO3^2- y el S conserva el mismo nº de oxidación que en el ácido." },
          { paso: "Sulfato de cinc: ZnSO4. Con Zn +2: +2 + S + 4 x (-2) = 0 -> S = +6.", porque: "El anión sulfato (SO4^2-) tiene S +6, que es el 'ico' del ácido sulfúrico." }
        ],
        resultado: "H2SO3 (S +4), Na2SO3 (S +4), ZnSO4 (S +6)."
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Fe(NO3)3: cada anión NO3^- tiene carga -1, y hay 3 -> total -3. Para neutralidad, Fe^3+ -> Fe con nº +3.", porque: "En una sal, la carga del catión iguala la carga total de los aniones." },
          { paso: "Nombre: nitrato de hierro(III) (o nitrato férrico).", porque: "Dos nombres válidos: el de Stock con el número romano y el tradicional con 'férrico'." }
        ],
        resultado: "Fe(NO3)3 = nitrato de hierro(III); Fe con nº +3."
      },
      {
        parte: "c)",
        pasos: [
          { paso: "H2SO3 + 2 NaOH -> Na2SO3 + 2 H2O.", porque: "El ácido sulfuroso es diprótico: tiene 2 H que se neutralizan con 2 OH^-. El balance: S 1 = 1; Na 2 = 2; H 4 = 4; O 5 = 5." },
          { paso: "La sal formada es el sulfito de sodio.", porque: "El anión sulfito proviene del ácido sulfuroso ('oso')." }
        ],
        resultado: "H2SO3 + 2 NaOH -> Na2SO3 + 2 H2O; sal = sulfito de sodio."
      },
      {
        parte: "d)",
        pasos: [
          { paso: "M(Na2SO3) = 2 x 22,99 + 32,06 + 3 x 16,00 = 126,04 g/mol.", porque: "La masa molar es la suma de las masas atómicas de la fórmula, con todos sus átomos." },
          { paso: "Por la reacción 1:1 entre H2SO3 y Na2SO3, n (Na2SO3) = n (H2SO3) = 0,0250 mol.", porque: "En la estequiometría los coeficientes indican la relación de moles; aquí son 1 y 1." },
          { paso: "m = 0,0250 mol x 126,04 g/mol = 3,151 g, es decir 3,15 g (3 cifras, como el dato 0,0250 mol).", porque: "El resultado se informa con la cantidad de cifras del dato menos preciso." }
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
