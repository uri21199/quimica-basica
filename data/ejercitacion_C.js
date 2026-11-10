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
          { paso: "$\\text{KF}$: $\\Delta\\text{EN} = 4{,}0 - 0{,}8 = 3{,}2$. $\\text{HCl}$: $\\Delta\\text{EN} = 3{,}0 - 2{,}1 = 0{,}9$. $\\text{Cl}_2$: $\\Delta\\text{EN} = 3{,}0 - 3{,}0 = 0{,}0$.", porque: "Para clasificar una unión usamos la diferencia de electronegatividad, que es la resta entre el valor del átomo más electronegativo y el del menos electronegativo. Con la tabla dada, $\\text{KF}$ da $4{,}0 - 0{,}8 = 3{,}2$, $\\text{HCl}$ da $3{,}0 - 2{,}1 = 0{,}9$ y $\\text{Cl}_2$ da $3{,}0 - 3{,}0 = 0{,}0$. Ese $\\Delta\\text{EN}$ es el criterio que usa el apunte, así que siempre lo calculamos como mayor menos menor para obtener un número positivo." },
          { paso: "$\\text{KF}$: $\\Delta\\text{EN} > 2$ y es un metal con un no metal, así que la unión es iónica (transferencia de un electrón del $\\text{K}$ al $\\text{F}$, formando $\\text{K}^+$ y $\\text{F}^-$).", porque: "Aplicamos el criterio del apunte: como $\\text{KF}$ tiene $\\Delta\\text{EN} = 3{,}2$, mayor que 2, la unión es iónica. Por eso el par de electrones queda casi totalmente en el $\\text{F}$, que es el átomo más electronegativo, y se forman iones $\\text{K}^+$ y $\\text{F}^-$. Conviene confirmar además que se trate de un metal con un no metal, como ocurre con $\\text{K}$ y $\\text{F}$." },
          { paso: "$\\text{HCl}$: $0 < \\Delta\\text{EN} < 2$ entre dos no metales: unión covalente polar, con el par de electrones desplazado hacia el $\\text{Cl}$.", porque: "Como $\\text{HCl}$ tiene $\\Delta\\text{EN} = 0{,}9$, que está entre 0 y 2, y el $\\text{H}$ y el $\\text{Cl}$ son no metales, la unión es covalente: el par se comparte. Entonces no se reparte en partes iguales, porque el $\\text{Cl}$, más electronegativo, queda con carga parcial negativa ($\\delta^-$) y el $\\text{H}$ con $\\delta^+$. Por eso el enlace es covalente polar." },
          { paso: "$\\text{Cl}_2$: $\\Delta\\text{EN} = 0$: unión covalente no polar, con el par compartido en partes iguales.", porque: "Con $\\text{Cl}_2$ la diferencia es $3{,}0 - 3{,}0 = 0{,}0$, así que los dos átomos atraen con la misma fuerza al par electrónico. Por eso el par compartido se reparte en partes iguales y no aparecen cargas parciales ni dipolo. El enlace es covalente no polar, y eso confirma que $\\Delta\\text{EN} = 0$ no significa que el enlace no exista." }
        ],
        resultado: "$\\text{KF}$: iónico; $\\text{HCl}$: covalente polar; $\\text{Cl}_2$: covalente no polar."
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
          { paso: "Electrones de valencia totales: $$4\\ (\\text{Si}) + 4 \\times 7\\ (\\text{Cl}) = 32$$ electrones, es decir 16 pares.", porque: "Para la estructura de Lewis sumamos los electrones de valencia de todos los átomos, multiplicando el aporte del $\\text{Cl}$ por su cantidad: $4 + 4 \\times 7 = 32$ electrones. Ese total es el que se distribuye en el dibujo, y equivale a 16 pares. Conviene anotarlo antes de colocar enlaces y pares libres, porque un error en esta cuenta arrastra al resto de la estructura." },
          { paso: "El $\\text{Si}$ es el átomo central (es menos electronegativo que el $\\text{Cl}$) y se une a cada $\\text{Cl}$ con un enlace simple: 4 pares enlazantes (8 electrones).", porque: "El átomo central es el menos electronegativo, que en este caso es el $\\text{Si}$, y los $\\text{Cl}$ son terminales porque solo necesitan un enlace. Como cada enlace simple usa 2 electrones, los 4 enlaces $\\text{Si-Cl}$ ocupan 8 electrones del total. Entonces los electrones que sobran son los que se ubican después como pares libres en los $\\text{Cl}$." },
          { paso: "Los 24 electrones restantes forman 12 pares libres: 3 pares libres en cada $\\text{Cl}$ ($1\\ \\text{enlace} + 3\\ \\text{pares} = 8\\ \\text{electrones}$).", porque: "Después de los enlaces, los electrones restantes se ubican como pares libres en los $\\text{Cl}$, hasta completar el octeto de cada uno. Con 3 pares libres en cada $\\text{Cl}$, el enlace más los pares suman 8 electrones por átomo. Por eso conviene verificar que el total de pares libres dé 12, sin dejar electrones sin ubicar." },
          { paso: "Alrededor del $\\text{Si}$ quedan 4 pares enlazantes y 0 pares libres: el $\\text{Si}$ tiene 8 electrones.", porque: "Verificamos el octeto del átomo central, porque es la condición que valida el dibujo. El $\\text{Si}$ comparte sus 4 electrones con los 4 $\\text{Cl}$ y queda rodeado por 8 electrones, así que cumple el octeto. Como ya no le sobran electrones, no se agregan pares libres sobre el $\\text{Si}$, porque dibujarlos sería un error." }
        ],
        resultado: "16 pares en total (4 enlazantes y 12 libres); alrededor del $\\text{Si}$ hay 4 pares enlazantes y ningún par libre."
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
          { paso: "$\\text{NH}_4^+$: electrones de valencia $$5\\ (\\text{N}) + 4 \\times 1\\ (\\text{H}) - 1\\ (\\text{carga} +) = 8$$ electrones, es decir 4 pares.", porque: "Para un ion contamos los electrones de valencia de cada átomo y después ajustamos por la carga. El $\\text{N}$ aporta 5 y cada $\\text{H}$ aporta 1, y la carga $+1$ resta un electrón, porque el catión perdió uno respecto del átomo neutro. Entonces $5 + 4 \\times 1 - 1 = 8$ electrones, que se reparten en 4 pares." },
          { paso: "$\\text{NH}_4^+$: el $\\text{N}$ está unido a 4 $\\text{H}$ con enlaces simples: 4 pares enlazantes y 0 pares libres. Se dibuja entre corchetes con carga $+$.", porque: "Como el $\\text{N}$ queda unido a 4 $\\text{H}$ con enlaces simples, ubicamos 4 pares enlazantes alrededor del $\\text{N}$. Con esos 4 pares el $\\text{N}$ completa su octeto sin pares libres. Como la especie tiene carga, el dibujo se escribe entre corchetes con el $+$ como superíndice, para indicar que la carga pertenece al ion completo." },
          { paso: "$\\text{OH}^-$: electrones de valencia $$6\\ (\\text{O}) + 1\\ (\\text{H}) + 1\\ (\\text{carga} -) = 8$$ electrones, es decir 4 pares.", porque: "En el $\\text{OH}^-$ la carga negativa indica un electrón de más respecto del átomo neutro, así que se suma al total. Calculamos $6\\ (\\text{O}) + 1\\ (\\text{H}) + 1\\ (\\text{carga}\\ -) = 8$ electrones, y estos se reparten en 4 pares. Entonces la cuenta queda lista para ubicar el enlace y los pares libres." },
          { paso: "$\\text{OH}^-$: 1 par enlazante ($\\text{O-H}$) y 3 pares libres sobre el $\\text{O}$; el $\\text{O}$ tiene 8 electrones.", porque: "El enlace $\\text{O-H}$ usa 2 electrones, y el $\\text{O}$ necesita 8 en total para cumplir su octeto. Los electrones que quedan se ubican como 3 pares libres sobre el $\\text{O}$, de modo que el $\\text{O}$ termina con sus 8 electrones. Conviene comprobar ese octeto después de dibujar el enlace, para no dejar electrones sin ubicar." }
        ],
        resultado: "$\\text{NH}_4^+$: 4 pares enlazantes y 0 libres ($\\text{N}$). $\\text{OH}^-$: 1 par enlazante y 3 pares libres ($\\text{O}$)."
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
          { paso: "$\\text{CS}_2$: cada enlace doble $\\text{C=S}$ tiene 1 $\\sigma$ y 1 $\\pi$. Total: 2 $\\sigma$ y 2 $\\pi$.", porque: "Un enlace doble se forma con un solapamiento frontal ($\\sigma$) y otro lateral ($\\pi$), por eso cada enlace $\\text{C=S}$ aporta 1 $\\sigma$ y 1 $\\pi$. Como la molécula tiene 2 enlaces dobles $\\text{C=S}$, contamos los $\\sigma$ y los $\\pi$ por separado. Entonces el total es 2 $\\sigma$ y 2 $\\pi$." },
          { paso: "$\\text{C}_2\\text{H}_2$: los 2 enlaces $\\text{C-H}$ son simples, $\\sigma$. El enlace $\\text{C-C}$ triple tiene 1 $\\sigma$ y 2 $\\pi$.", porque: "Un enlace simple está formado solo por un $\\sigma$, mientras que un triple tiene un $\\sigma$ y dos $\\pi$. Con eso, los 2 enlaces $\\text{C-H}$ del acetileno aportan 1 $\\sigma$ cada uno, y el triple $\\text{C-C}$ aporta 1 $\\sigma$ y 2 $\\pi$. Así identificamos cada enlace según su multiplicidad antes de sumar." },
          { paso: "$\\text{C}_2\\text{H}_2$ en total: $\\sigma = 2\\ (\\text{C-H}) + 1\\ (\\text{C-C}) = 3$; $\\pi = 2$.", porque: "Contamos todos los enlaces de la molécula, incluidos los $\\text{C-H}$, y sumamos los $\\sigma$ y los $\\pi$ por separado. Los enlaces con hidrógeno también son $\\sigma$, y ese es el paso que más se olvida. Por eso el total queda en $2\\ (\\text{C-H}) + 1\\ (\\text{C-C}) = 3$ $\\sigma$, y 2 $\\pi$." }
        ],
        resultado: "$\\text{CS}_2$: 2 $\\sigma$ y 2 $\\pi$. $\\text{C}_2\\text{H}_2$: 3 $\\sigma$ y 2 $\\pi$."
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
          { paso: "$\\text{C-C}$: $\\Delta\\text{EN} = 0{,}0$. $\\text{C-H}$: $2{,}5 - 2{,}1 = 0{,}4$. $\\text{C-Cl}$: $3{,}0 - 2{,}5 = 0{,}5$. $\\text{C-O}$: $3{,}5 - 2{,}5 = 1{,}0$.", porque: "La polaridad de un enlace crece con la diferencia de electronegatividad entre sus átomos, así que usamos $\\Delta\\text{EN}$ como medida. Con los valores de Pauling restamos cada par: $\\text{C-C}$ da $0{,}0$, $\\text{C-H}$ da $2{,}5 - 2{,}1 = 0{,}4$, $\\text{C-Cl}$ da $3{,}0 - 2{,}5 = 0{,}5$ y $\\text{C-O}$ da $3{,}5 - 2{,}5 = 1{,}0$. Conviene hacer todas las restas primero, porque el orden final depende solo de esos números." },
          { paso: "Orden creciente de polaridad: $\\text{C-C} < \\text{C-H} < \\text{C-Cl} < \\text{C-O}$.", porque: "Como la polaridad depende solo de $\\Delta\\text{EN}$, ordenamos los valores de menor a mayor: $0{,}0$, $0{,}4$, $0{,}5$ y $1{,}0$. A mayor diferencia, el par electrónico se desplaza más hacia el átomo más electronegativo. Entonces el $\\text{C-O}$ resulta el enlace más polar de la lista, y el $\\text{C-C}$ el menos polar." },
          { paso: "El $\\text{C-C}$ es covalente no polar ($\\Delta = 0$) y el $\\text{C-O}$ es el más polar de la lista ($\\Delta = 1{,}0$).", porque: "El enlace $\\text{C-C}$ conecta átomos iguales, así que no tiene dipolo y sirve como referencia de cero. El $\\text{C-O}$ tiene $\\Delta\\text{EN} = 1{,}0$, el mayor de la lista, y por eso es el más polar. Conviene verificar que el $\\text{C-O}$ quede al final del orden, porque eso confirma la comparación." }
        ],
        resultado: "$\\text{C-C} < \\text{C-H} < \\text{C-Cl} < \\text{C-O}$; el enlace $\\text{C-O}$ es el más polar."
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
          { paso: "Electrones de valencia: $$6\\ (\\text{S}) + 2 \\times 7\\ (\\text{F}) = 20$$ electrones, es decir 10 pares.", porque: "Para la estructura de Lewis sumamos los electrones de valencia de todos los átomos: 6 del $\\text{S}$ y 7 de cada uno de los 2 $\\text{F}$. El total es $6 + 2 \\times 7 = 20$ electrones, es decir 10 pares, que hay que distribuir sin perder pares. Por eso conviene anotarlo antes de dibujar la estructura." },
          { paso: "El $\\text{S}$ es el átomo central y forma 2 enlaces simples $\\text{S-F}$ (2 pares enlazantes). Cada $\\text{F}$ completa su octeto con 3 pares libres (6 pares). Quedan 2 pares libres sobre el $\\text{S}$.", porque: "El $\\text{S}$, que es menos electronegativo que el $\\text{F}$, va en el centro y se une a los dos $\\text{F}$ con enlaces simples, lo que da 2 pares enlazantes. Cada $\\text{F}$ necesita completar su octeto, y con un solo enlace le faltan electrones que se cubren con 3 pares libres. Los pares que sobran quedan sobre el $\\text{S}$, y se verifica que el total, $2 + 6 + 2$, sea 10." },
          { paso: "Alrededor del $\\text{S}$ hay 4 pares de electrones: 2 enlazantes y 2 libres.", porque: "Para la geometría se cuentan todas las regiones de electrones del $\\text{S}$, enlazantes y libres, no solo los enlaces. Con 2 enlazantes y 2 libres quedan 4 pares alrededor del $\\text{S}$. Ese número define la disposición de TREPEV, y después se descartan los pares libres para describir la forma final de la molécula." },
          { paso: "Con 4 pares la geometría electrónica es tetraédrica ($109{,}5$ grados), y la molecular es angular: el ángulo $\\text{F-S-F}$ es menor que $109{,}5$ grados (aprox. $98$ grados) porque los pares libres repelen más y comprimen el ángulo.", porque: "Los 4 pares se ubican como un tetraedro, pero los pares libres ocupan más espacio que los enlazantes y empujan a los átomos de $\\text{F}$. Por eso el ángulo se cierra por debajo del valor ideal de $109{,}5$ grados, hasta aprox. $98$ grados. Entonces la geometría molecular es angular y no conviene usar el valor ideal." }
        ],
        resultado: "Geometría angular, con 4 pares alrededor del $\\text{S}$ (2 enlazantes y 2 libres) y ángulo menor que $109{,}5$ grados."
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Cada enlace $\\text{S-F}$ tiene $\\Delta\\text{EN} = 4{,}0 - 2{,}5 = 1{,}5$: es covalente polar, con los dipolos dirigidos hacia el $\\text{F}$.", porque: "Se resta la electronegatividad del $\\text{S}$ a la del $\\text{F}$ ($4{,}0 - 2{,}5 = 1{,}5$) para saber si cada enlace tiene dipolo y hacia dónde apunta. Un valor de $1{,}5$ entre no metales indica una unión covalente polar. Como el $\\text{F}$ es el más electronegativo, el dipolo queda orientado hacia el $\\text{F}$." },
          { paso: "Como la molécula es angular, los dos dipolos no se cancelan: la suma vectorial es distinta de cero y el $\\text{SF}_2$ es polar.", porque: "Para saber si la molécula es polar hay que sumar vectorialmente los dipolos de los dos enlaces $\\text{S-F}$, y no alcanza con mirar cada uno por separado. Como la molécula es angular, los dipolos forman un ángulo y no se anulan entre sí. Por eso la suma es distinta de cero, queda un dipolo neto y el $\\text{SF}_2$ es polar." },
          { paso: "$\\text{BCl}_3$: 3 pares enlazantes y 0 libres alrededor del $\\text{B}$, geometría trigonal plana con ángulos de $120$ grados. El $\\text{B}$ queda con 6 electrones (excepción habitual al octeto). Cada enlace $\\text{B-Cl}$ tiene $\\Delta\\text{EN} = 1{,}0$ (polar).", porque: "Con 3 pares enlazantes y ningún par libre alrededor del $\\text{B}$, TREPEV da geometría trigonal plana con ángulos de $120$ grados. El $\\text{B}$ queda con 6 electrones, lo que es una excepción al octeto y no un error del dibujo. Cada enlace $\\text{B-Cl}$ es polar porque su diferencia es $3{,}0 - 2{,}0 = 1{,}0$." },
          { paso: "Los tres dipolos $\\text{B-Cl}$ son de igual módulo y se reparten a $120$ grados: su suma vectorial es cero y el $\\text{BCl}_3$ es apolar.", porque: "Los tres dipolos $\\text{B-Cl}$ tienen igual módulo y forman $120$ grados entre sí, así que cada uno queda compensado por los otros dos. Como la suma vectorial es cero, el $\\text{BCl}_3$ resulta apolar. Esto muestra que un compuesto puede tener enlaces polares y ser apolar, por eso hay que verificar la simetría." }
        ],
        resultado: "$\\text{SF}_2$ es polar (geometría angular). $\\text{BCl}_3$ es apolar porque sus dipolos se cancelan por simetría trigonal plana."
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
          { paso: "Electrones de valencia: $$6\\ (\\text{S}) + 3 \\times 6\\ (\\text{O}) + 2\\ (\\text{carga}\\ -2) = 26$$ electrones, es decir 13 pares.", porque: "Sumamos los electrones de valencia de todos los átomos: 6 del $\\text{S}$ y 6 de cada $\\text{O}$. Como la carga es $-2$, se agregan 2 electrones más al total. Así se obtienen 26 electrones, es decir 13 pares, que es el número que hay que distribuir en el ion." },
          { paso: "Los 3 enlaces $\\text{S-O}$ son simples (3 pares enlazantes). El $\\text{S}$ conserva 1 par libre, y cada $\\text{O}$ tiene 3 pares libres (9 pares). Total: $3 + 1 + 9 = 13$ pares.", porque: "Verificamos el octeto de cada átomo antes de dar por cerrado el dibujo. El $\\text{S}$ tiene 3 enlaces y 1 par libre, y cada $\\text{O}$ tiene 1 enlace y 3 pares libres. Si todos cumplen el octeto, la distribución es correcta; si alguno no lo cumple, hay que revisar la distribución de pares o la carga." },
          { paso: "Alrededor del $\\text{S}$ hay 4 pares: 3 enlazantes y 1 libre. La geometría electrónica es tetraédrica y la molecular (ion) es piramidal trigonal, con ángulo $\\text{O-S-O}$ menor que $109{,}5$ grados (aprox. $106$ grados).", porque: "Contamos los 4 pares del $\\text{S}$, 3 enlazantes y 1 libre, para la geometría electrónica, que es tetraédrica. Después descartamos el par libre para describir la forma del ion, que resulta piramidal trigonal. Ese par libre empuja a los $\\text{O}$ y cierra el ángulo $\\text{O-S-O}$ hasta aprox. $106$ grados." }
        ],
        resultado: "Geometría piramidal trigonal, con 4 pares alrededor del $\\text{S}$ (3 enlazantes y 1 libre)."
      },
      {
        parte: "b)",
        pasos: [
          { paso: "$\\text{CO}_3^{2-}$: el $\\text{C}$ central tiene 3 regiones enlazantes (un enlace doble y dos simples cuentan como 3 regiones) y ningún par libre.", porque: "Contamos las regiones de electrones alrededor del $\\text{C}$ del carbonato. El doble enlace y los dos simples cuentan cada uno como una región, lo que da 3 regiones enlazantes, y el $\\text{C}$ no tiene pares libres. Este conteo define la geometría por TREPEV, y para eso no hace falta distinguir si el enlace es $\\sigma$ o $\\pi$." },
          { paso: "Sin pares libres, la geometría es trigonal plana con ángulos de $120$ grados.", porque: "Con 3 regiones de electrones y sin pares libres, los pares se alejan al máximo en un mismo plano, separados $120$ grados. Por eso la geometría es trigonal plana, con ángulos de $120$ grados. Esta forma corresponde solo a un átomo central sin pares libres, y sirve como comparación con el sulfito." },
          { paso: "El $\\text{S}$ del sulfito tiene 1 par libre además de sus 3 enlaces. Al ser 4 pares en total, la geometría deja de ser plana y se vuelve piramidal.", porque: "El $\\text{S}$ del sulfito tiene 3 enlaces y además 1 par libre, lo que suma 4 pares en total. Como el par libre no se ve en la forma molecular, los $\\text{O}$ quedan ubicados en una pirámide. Entonces la clave es el par libre sobre el átomo central, y no la cantidad de $\\text{O}$."}
        ],
        resultado: "$\\text{CO}_3^{2-}$ es trigonal plana ($120$ grados); $\\text{SO}_3^{2-}$ es piramidal trigonal porque el $\\text{S}$ tiene un par libre."
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
          { paso: "Cada $\\text{C}$ forma 3 enlaces $\\sigma$ (2 $\\text{C-H}$ y 1 $\\text{C-C}$) y 1 enlace $\\pi$. Alrededor de cada $\\text{C}$ hay 3 regiones de electrones y ningún par libre.", porque: "Contamos las regiones de electrones alrededor de cada $\\text{C}$: los 2 enlaces $\\text{C-H}$ y el doble $\\text{C=C}$ dan 3 regiones, y no hay pares libres. Esta cuenta define la hibridación de cada $\\text{C}$. El doble enlace cuenta como una sola región aunque tenga un $\\sigma$ y un $\\pi$." },
          { paso: "Con 3 regiones, la hibridación de cada $\\text{C}$ es $sp^2$: se forman 3 orbitales híbridos (los $\\sigma$) y queda 1 orbital $p$ sin hibridar, que forma el enlace $\\pi$.", porque: "Cada región de electrones corresponde a un orbital híbrido, y 3 regiones se forman con 1 orbital $s$ y 2 orbitales $p$. Por eso la hibridación es $sp^2$, y queda 1 orbital $p$ sin hibridar. Ese orbital $p$, perpendicular al plano, se solapa lateralmente con el del otro $\\text{C}$ y forma el enlace $\\pi$." },
          { paso: "Geometría trigonal plana alrededor de cada $\\text{C}$, con ángulo $\\text{H-C-H}$ aprox. $120$ grados.", porque: "Con tres regiones de igual tipo, los orbitales $sp^2$ se ubican en un plano formando ángulos cercanos a $120$ grados. Entonces el ángulo $\\text{H-C-H}$ queda aprox. en $120$ grados, y la geometría es trigonal plana alrededor de cada $\\text{C}$. Conviene verificar la planaridad, porque el enlace $\\pi$ obliga a los átomos a quedar en el mismo plano." }
        ],
        resultado: "Ambos $\\text{C}$ son $sp^2$, con geometría trigonal plana y ángulos de aprox. $120$ grados."
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Enlaces $\\sigma$: $4\\ (\\text{C-H}) + 1\\ (\\text{C-C}) = 5$ $\\sigma$.", porque: "Todo enlace, simple o múltiple, tiene exactamente un $\\sigma$. Por eso contamos los 4 $\\text{C-H}$ y el $\\text{C-C}$ de la molécula, que suman 5 enlaces $\\sigma$. El doble enlace $\\text{C=C}$ aporta su $\\sigma$ dentro de ese conteo, y no hace falta separarlo." },
          { paso: "Enlaces $\\pi$: 1 (el lateral del doble enlace $\\text{C=C}$).", porque: "Los enlaces $\\pi$ se cuentan aparte, y solo los dobles y triples los tienen. El eteno tiene un único doble enlace $\\text{C=C}$, así que aporta 1 $\\pi$. Un enlace simple, incluido el $\\text{C-C}$, no aporta ningún $\\pi$." }
        ],
        resultado: "5 enlaces $\\sigma$ y 1 enlace $\\pi$."
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
          { paso: "Electrones de valencia: $$6\\ (\\text{S}) + 2 \\times 6\\ (\\text{O}) = 18$$ electrones, es decir 9 pares.", porque: "Sumamos los electrones de valencia de todos los átomos: 6 del $\\text{S}$ y 6 de cada $\\text{O}$, en total 18 electrones, es decir 9 pares. Como el $\\text{S}$ es el átomo central, conviene tener este total a mano antes de dibujar la estructura. Con esos 9 pares se arma la forma de Lewis." },
          { paso: "Supuesto: se usa la forma $\\text{O=S}\\rightarrow\\text{O}$. El $\\text{S}$ central tiene un enlace doble, un enlace dativo (aportado por el $\\text{S}$) y 1 par libre; el $\\text{O}$ unido por enlace dativo tiene 3 pares libres y el $\\text{O}$ del doble enlace tiene 2 pares libres.", porque: "Se usa la forma $\\text{O=S}\\rightarrow\\text{O}$ porque cumple el octeto del $\\text{S}$ y de los $\\text{O}$: el $\\text{S}$ tiene un doble enlace, un enlace dativo que aporta el $\\text{S}$ y 1 par libre. Verificamos que la cuenta de electrones alrededor del $\\text{S}$ dé el octeto, porque si no se cumple la forma no sirve. Por eso el dibujo se toma como válido." },
          { paso: "Alrededor del $\\text{S}$ hay 3 regiones de electrones (doble enlace, dativo y par libre): geometría electrónica trigonal plana. La molécula es angular, con ángulo $\\text{O-S-O}$ aprox. $119$ grados.", porque: "Con 3 regiones de electrones (doble enlace, dativo y par libre), la geometría electrónica es trigonal plana. El par libre repele más que los enlaces y comprime el ángulo $\\text{O-S-O}$. Por eso el valor real es aprox. $119$ grados y la forma molecular resulta angular." }
        ],
        resultado: "Geometría molecular angular, ángulo aprox. $119$ grados."
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Cada enlace $\\text{S-O}$ tiene $\\Delta\\text{EN} = 3{,}5 - 2{,}5 = 1{,}0$: son enlaces covalentes polares, con dipolos dirigidos hacia el $\\text{O}$.", porque: "Se resta la electronegatividad del $\\text{S}$ a la del $\\text{O}$ ($3{,}5 - 2{,}5 = 1{,}0$), y ese resultado indica que cada enlace $\\text{S-O}$ es covalente polar. El dipolo apunta hacia el $\\text{O}$, que atrae con más fuerza el par. Conviene anotar esa dirección, porque después hay que sumar los dipolos." },
          { paso: "En el $\\text{CO}_2$ (lineal, simétrico) los dos dipolos $\\text{C=O}$ son iguales y opuestos y se cancelan: el $\\text{CO}_2$ es apolar.", porque: "En el $\\text{CO}_2$ la geometría es lineal y simétrica, así que los dos dipolos $\\text{C=O}$ tienen el mismo módulo y dirección opuesta. Por eso se cancelan y la suma vectorial es cero. Aunque los enlaces sean polares, la molécula es apolar." },
          { paso: "En el $\\text{SO}_2$ la geometría angular impide que los dipolos $\\text{S-O}$ se anulen: la suma vectorial es distinta de cero y la molécula es polar.", porque: "En el $\\text{SO}_2$ la forma angular impide que los dos dipolos $\\text{S-O}$ se anulen, porque no quedan opuestos entre sí. Como forman un ángulo y su suma es distinta de cero, queda un dipolo neto. Por eso el $\\text{SO}_2$ es polar." }
        ],
        resultado: "El $\\text{SO}_2$ es polar (geometría angular); el $\\text{CO}_2$ es apolar (lineal y simétrico)."
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
          { paso: "$\\text{Mg}$: solo hay átomos de metal, así que la unión es metálica; las partículas son átomos de $\\text{Mg}$ en una red con electrones de valencia deslocalizados.", porque: "Como el $\\text{Mg}$ es un metal, no hay un par compartido entre dos átomos: los electrones de valencia se deslocalizan y se mueven por toda la red. Esa movilidad explica la conductividad y la maleabilidad de los metales. Por eso conviene reconocer primero el tipo de sustancia, antes de mirar $\\Delta\\text{EN}$." },
          { paso: "$\\text{MgO}$: $\\Delta\\text{EN} = 3{,}5 - 1{,}2 = 2{,}3 > 2$, y es metal con no metal: unión iónica. Las partículas son iones $\\text{Mg}^{2+}$ y $\\text{O}^{2-}$ en una red, sin moléculas.", porque: "Calculamos $\\Delta\\text{EN} = 3{,}5 - 1{,}2 = 2{,}3$, que es mayor que 2. Como se trata de un metal con un no metal, el criterio da unión iónica. Entonces se forman iones $\\text{Mg}^{2+}$ y $\\text{O}^{2-}$ que se mantienen unidos por atracción electrostática en una red, y no moléculas." },
          { paso: "$\\text{Cl}_2$: $\\Delta\\text{EN} = 0$: unión covalente no polar, con partículas que son moléculas $\\text{Cl}_2$.", porque: "Con dos átomos iguales la diferencia de electronegatividad es cero, así que el par se comparte por igual. Por eso el $\\text{Cl}_2$ forma una molécula discreta con enlace covalente no polar. Las partículas que describen la sustancia son moléculas de $\\text{Cl}_2$." },
          { paso: "$\\text{NH}_3$: $\\Delta\\text{EN}$ ($\\text{N-H}$) = $3{,}0 - 2{,}1 = 0{,}9$: covalente polar, con partículas que son moléculas $\\text{NH}_3$.", porque: "Entre dos no metales el enlace es covalente, y como $\\Delta\\text{EN} = 0{,}9$ es distinto de cero, el $\\text{N}$ atrae un poco más el par que el $\\text{H}$. Por eso el enlace es polar. Las partículas que forman la sustancia son moléculas de $\\text{NH}_3$, unidas por enlaces covalentes." }
        ],
        resultado: "Mg: metálica (átomos en red); $\\text{MgO}$: iónica (iones); $\\text{Cl}_2$: covalente no polar (moléculas); $\\text{NH}_3$: covalente polar (moléculas)."
      },
      {
        parte: "b)",
        pasos: [
          { paso: "En el $\\text{MgO}$ hay que vencer las atracciones electrostáticas entre iones $\\text{Mg}^{2+}$ y $\\text{O}^{2-}$ de carga 2, que son muy fuertes, para separar la red.", porque: "En el $\\text{MgO}$ hay que vencer la atracción electrostática entre $\\text{Mg}^{2+}$ y $\\text{O}^{2-}$ para separar la red. Como las cargas son $2+$ y $2-$, esa atracción es mucho más intensa que la de iones con carga 1. Esa es la clave para relacionar el tipo de unión con el punto de fusión."},
          { paso: "En el $\\text{Cl}_2$ al fundir se separan moléculas; solo hay que vencer fuerzas intermoleculares débiles (de dispersión), sin romper el enlace $\\text{Cl-Cl}$.", porque: "Al fundir el $\\text{Cl}_2$ no se rompen enlaces covalentes, solo se vencen fuerzas débiles entre moléculas apolares, que son de dispersión. Por eso se necesita poca energía para separar las moléculas, y el punto de fusión resulta bajo. El enlace $\\text{Cl-Cl}$ se mantiene intacto." },
          { paso: "Por eso el $\\text{MgO}$ funde a una temperatura mucho más alta que el $\\text{Cl}_2$.", porque: "La comparación final se basa en la intensidad de las fuerzas que hay que vencer. Las atracciones iónicas del $\\text{MgO}$ son muy intensas, mientras que las intermoleculares del $\\text{Cl}_2$ son débiles. Por eso el $\\text{MgO}$ funde a una temperatura mucho más alta. Conviene hablar de fuerzas que se rompen y no de enlaces." }
        ],
        resultado: "El $\\text{MgO}$ tiene fuerzas electrostáticas intensas en la red iónica; el $\\text{Cl}_2$ tiene fuerzas intermoleculares débiles."
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
          { paso: "Pasar el momento dipolar a unidades SI: $$\\mu = 1{,}08\\ \\text{D} \\times 3{,}34 \\times 10^{-30}\\ \\frac{\\text{C}\\cdot\\text{m}}{\\text{D}} = 3{,}61 \\times 10^{-30}\\ \\text{C}\\cdot\\text{m}$$", porque: "La fórmula $\\mu = q \\times d$ usa unidades SI, y el dato viene en debye, así que hay que convertirlo primero. Usamos $1\\ \\text{D} = 3{,}34 \\times 10^{-30}\\ \\text{C}\\cdot\\text{m}$ para pasar $1{,}08\\ \\text{D}$ a $3{,}61 \\times 10^{-30}\\ \\text{C}\\cdot\\text{m}$. Hacerlo antes de dividir evita llegar a un resultado en una unidad incoherente." },
          { paso: "Despejar la carga: $$q = \\frac{\\mu}{d} = \\frac{3{,}61 \\times 10^{-30}\\ \\text{C}\\cdot\\text{m}}{1{,}27 \\times 10^{-10}\\ \\text{m}} = 2{,}84 \\times 10^{-20}\\ \\text{C}$$", porque: "Despejamos $q$ de la relación $\\mu = q \\times d$, dividiendo $\\mu$ por la distancia del enlace expresada en metros. Con $3{,}61 \\times 10^{-30}\\ \\text{C}\\cdot\\text{m}$ dividido por $1{,}27 \\times 10^{-10}\\ \\text{m}$ obtenemos $2{,}84 \\times 10^{-20}\\ \\text{C}$. Un dipolo son dos cargas iguales y opuestas separadas por $d$, y por eso esta relación da la carga parcial." },
          { paso: "Expresar en unidades de $e$: $$\\frac{2{,}84 \\times 10^{-20}\\ \\text{C}}{1{,}60 \\times 10^{-19}\\ \\text{C}} = 0{,}178\\ e$$", porque: "Dividimos la carga obtenida por la carga del electrón para expresarla como fracción de $e$, que es la unidad habitual en cargas parciales. Con $2{,}84 \\times 10^{-20}\\ \\text{C}$ dividido por $1{,}60 \\times 10^{-19}\\ \\text{C}$ resulta $0{,}178\\ e$. Ese valor indica que el $\\text{H}$ tiene una carga parcial bastante menor que la de un electrón completo." }
        ],
        resultado: "$q = 2{,}84 \\times 10^{-20}\\ \\text{C}$, es decir $0{,}178\\ e$ (carga parcial sobre el $\\text{H}$)."
      },
      {
        parte: "b)",
        pasos: [
          { paso: "El $\\text{Cl}$ ($\\Delta\\text{EN} = 0{,}9$) es más electronegativo: atrae el par hacia sí y queda con carga parcial negativa ($\\delta^-$); el $\\text{H}$ queda con $\\delta^+$.", porque: "Comparamos las electronegatividades de los dos átomos del enlace: el $\\text{Cl}$ ($3{,}0$) es más electronegativo que el $\\text{H}$ ($2{,}1$). Por eso el $\\text{Cl}$ atrae con más fuerza la densidad electrónica y queda con carga parcial negativa. El $\\text{H}$ queda con carga parcial positiva ($\\delta^+$)." },
          { paso: "En el $\\text{H}_2\\text{O}$ los dos dipolos $\\text{O-H}$ están inclinados en una geometría angular y su suma vectorial es distinta de cero: $\\mu = 1{,}85\\ \\text{D}$.", porque: "En el $\\text{H}_2\\text{O}$ los dos dipolos $\\text{O-H}$ forman un ángulo por la geometría angular, y su suma vectorial no es cero. Con $\\mu = 1{,}85\\ \\text{D}$, la molécula tiene un momento dipolar neto. Ese dato confirma que el agua es polar." },
          { paso: "En el $\\text{CO}_2$ los dos dipolos $\\text{C=O}$ son iguales, de sentido opuesto y forman una molécula lineal: se cancelan y $\\mu = 0$.", porque: "En el $\\text{CO}_2$ los dipolos $\\text{C=O}$ son iguales y de sentido opuesto, y la molécula es una línea recta. Por eso se cancelan y $\\mu = 0$. Este caso muestra que un enlace polar no alcanza para que la molécula sea polar, y hay que mirar si la suma de dipolos se anula." }
        ],
        resultado: "El $\\text{Cl}$ tiene la carga parcial negativa. El $\\text{H}_2\\text{O}$ es polar por su geometría angular, y el $\\text{CO}_2$ es apolar porque sus dipolos se cancelan."
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
          { paso: "$\\text{CCl}_4$: el $\\text{C}$ tiene 4 pares enlazantes y ningún par libre: geometría tetraédrica ($109{,}5$ grados). Los 4 dipolos $\\text{C-Cl}$ son iguales y se dirigen a los vértices de un tetraedro: su suma es cero. El $\\text{CCl}_4$ es apolar.", porque: "Con 4 pares enlazantes y ningún par libre la geometría es tetraédrica, y los 4 dipolos $\\text{C-Cl}$ tienen igual módulo. Como apuntan a los vértices de un tetraedro, su suma vectorial es cero. Por eso el $\\text{CCl}_4$ es apolar." },
          { paso: "$\\text{CHCl}_3$: el $\\text{C}$ sigue siendo tetraédrico, pero ahora uno de los enlaces es $\\text{C-H}$ y los otros 3 son $\\text{C-Cl}$. La simetría se rompe y la suma de dipolos es distinta de cero: el $\\text{CHCl}_3$ es polar.", porque: "Al reemplazar un $\\text{Cl}$ por un $\\text{H}$, los enlaces dejan de ser iguales. El $\\text{C-H}$ y el $\\text{C-Cl}$ no tienen la misma diferencia de electronegatividad, así que los dipolos ya no se compensan. Por eso la suma es distinta de cero y el $\\text{CHCl}_3$ resulta polar." },
          { paso: "$\\text{CH}_3\\text{Cl}$: tetraédrica y asimétrica (un solo $\\text{Cl}$): el dipolo $\\text{C-Cl}$ no se cancela. El $\\text{CH}_3\\text{Cl}$ es polar.", porque: "En el $\\text{CH}_3\\text{Cl}$ el enlace $\\text{C-Cl}$ domina el dipolo de la molécula, porque los $\\text{C-H}$ restantes no están dispuestos para anularlo. La geometría es asimétrica, y por eso la suma de dipolos no es cero. Entonces el $\\text{CH}_3\\text{Cl}$ es polar." }
        ],
        resultado: "$\\text{CCl}_4$ apolar; $\\text{CHCl}_3$ y $\\text{CH}_3\\text{Cl}$ polares."
      },
      {
        parte: "b)",
        pasos: [
          { paso: "El argumento es incorrecto: que un enlace sea polar no hace polar a la molécula.", porque: "La polaridad de una molécula se define por la suma vectorial de todos sus dipolos de enlace, y no por uno solo. Por eso el argumento del estudiante mezcla dos conceptos distintos: la polaridad del enlace y la de la molécula. Conviene separarlos para discutir si el razonamiento es correcto." },
          { paso: "En el $\\text{CCl}_4$ los 4 dipolos $\\text{C-Cl}$ forman una resultante nula por la geometría tetraédrica simétrica.", porque: "En el $\\text{CCl}_4$ los 4 dipolos $\\text{C-Cl}$ tienen igual módulo y apuntan a los vértices del tetraedro, así que se suman y dan cero. Esa es la prueba de que la geometría decide la polaridad. Por eso el $\\text{CCl}_4$ es apolar, aunque tenga 4 enlaces polares." }
        ],
        resultado: "El $\\text{CCl}_4$ es apolar aunque tenga 4 enlaces polares."
      },
      {
        parte: "c)",
        pasos: [
          { paso: "$\\Delta\\text{EN}$ ($\\text{C-Cl}$) = $3{,}0 - 2{,}5 = 0{,}5$. $\\Delta\\text{EN}$ ($\\text{C-H}$) = $2{,}5 - 2{,}1 = 0{,}4$.", porque: "Restamos las electronegatividades de cada enlace: $3{,}0 - 2{,}5 = 0{,}5$ para el $\\text{C-Cl}$ y $2{,}5 - 2{,}1 = 0{,}4$ para el $\\text{C-H}$. Con esos valores medimos la polaridad de cada enlace por separado. Conviene tomar el átomo más electronegativo como referencia, para que las diferencias queden positivas." },
          { paso: "Orden de polaridad creciente: $\\text{C-H}$ ($0{,}4$) < $\\text{C-Cl}$ ($0{,}5$).", porque: "Como la polaridad crece con $\\Delta\\text{EN}$, el enlace $\\text{C-Cl}$ ($0{,}5$) es algo más polar que el $\\text{C-H}$ ($0{,}4$). La diferencia es chica, pero alcanza para ordenarlos. Ambos son enlaces covalentes polares, así que el orden se decide solo por el valor numérico." }
        ],
        resultado: "El enlace $\\text{C-Cl}$ es algo más polar que el $\\text{C-H}$ ($0{,}5$ frente a $0{,}4$)."
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
          { paso: "$\\text{KCl}$: $\\Delta\\text{EN} = 3{,}0 - 0{,}8 = 2{,}2 > 2$: unión iónica. $\\text{Cl}_2$: $\\Delta\\text{EN} = 0$: covalente no polar.", porque: "Aplicamos el criterio del apunte: $\\Delta\\text{EN} = 3{,}0 - 0{,}8 = 2{,}2$ es mayor que 2, así que el $\\text{KCl}$ es iónico. Para el $\\text{Cl}_2$ la diferencia es cero, y eso lo ubica como covalente no polar. Conviene comparar cada valor con los límites 0 y 2 para no equivocarse." },
          { paso: "$\\text{AlCl}_3$: $\\Delta\\text{EN} = 3{,}0 - 1{,}5 = 1{,}5 < 2$, así que por el criterio sería covalente. Advertencia: el $\\text{Al}$ es un metal y el enlace tiene carácter iónico parcial; el criterio es una aproximación y la unión real es un continuo.", porque: "El $\\text{AlCl}_3$ tiene $\\Delta\\text{EN} = 1{,}5$, que es menor que 2, así que el criterio lo dejaría como covalente. Sin embargo, el $\\text{Al}$ es un metal y su catión $\\text{Al}^{3+}$ es pequeño y muy cargado, lo que polariza mucho la nube electrónica del $\\text{Cl}^-$. Por eso el criterio es solo una aproximación y el enlace tiene un carácter iónico parcial importante." }
        ],
        resultado: "$\\text{KCl}$ iónico; $\\text{Cl}_2$ covalente no polar; $\\text{AlCl}_3$ covalente según el criterio, con carácter iónico parcial importante."
      },
      {
        parte: "b)",
        pasos: [
          { paso: "$\\Delta\\text{EN}$: $\\text{AlCl}_3 = 1{,}5$; $\\text{MgCl}_2 = 3{,}0 - 1{,}2 = 1{,}8$; $\\text{KCl} = 2{,}2$.", porque: "Calculamos $\\Delta\\text{EN}$ con la misma tabla: $\\text{AlCl}_3$ da $1{,}5$, $\\text{MgCl}_2$ da $3{,}0 - 1{,}2 = 1{,}8$ y $\\text{KCl}$ da $2{,}2$. Estos valores permiten comparar el carácter iónico sin mirar la fórmula ni el tamaño de los iones. Por eso alcanza con ordenar los números." },
          { paso: "Orden creciente de carácter iónico: $\\text{AlCl}_3 < \\text{MgCl}_2 < \\text{KCl}$.", porque: "Con los valores ya calculados ordenamos de menor a mayor carácter iónico. Entonces $\\text{AlCl}_3$ ($1{,}5$) queda primero, después $\\text{MgCl}_2$ ($1{,}8$) y por último $\\text{KCl}$ ($2{,}2$). Conviene verificar que el orden siga el valor de $\\Delta\\text{EN}$ y no el tamaño del catión o la masa molar." }
        ],
        resultado: "$\\text{AlCl}_3 < \\text{MgCl}_2 < \\text{KCl}$ (de menor a mayor carácter iónico)."
      },
      {
        parte: "c)",
        pasos: [
          { paso: "Cuando $\\Delta\\text{EN}$ es grande, el átomo más electronegativo atrae con mucha más fuerza el electrón, y la transferencia de carga entre átomos se acerca a un electrón completo.", porque: "La electronegatividad mide cuánto atrae un átomo el par de electrones de un enlace. Cuando $\\Delta\\text{EN}$ es grande, el par se desplaza casi por completo hacia el átomo más electronegativo. Así la transferencia de carga se acerca a la de un electrón completo." },
          { paso: "Los iones resultantes (catión y anión) se mantienen unidos por atracción electrostática, que es el carácter iónico del enlace.", porque: "Cuando la transferencia es casi total, el enlace se describe como una atracción electrostática entre un catión y un anión. A mayor $\\Delta\\text{EN}$, mayor transferencia de carga y más fuerte la atracción entre los iones. Por eso el carácter iónico aumenta al crecer $\\Delta\\text{EN}$." }
        ],
        resultado: "Al aumentar $\\Delta\\text{EN}$, el par se desplaza más hasta transferirse por completo, y el enlace se vuelve más iónico."
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
          { paso: "$\\text{H}_2\\text{O}$: $\\text{O}$ con 2 enlazantes y 2 libres (4 pares): geometría electrónica tetraédrica, molecular angular.", porque: "Para cada especie contamos los pares del átomo central: los enlazantes se ven en la fórmula y los libres se calculan con los electrones de valencia. En el $\\text{H}_2\\text{O}$ el $\\text{O}$ tiene 2 enlazantes y 2 libres, es decir 4 pares. Esos 4 pares definen una geometría electrónica tetraédrica, aunque la molecular sea angular." },
          { paso: "$\\text{NH}_3$: $\\text{N}$ con 3 enlazantes y 1 libre (4 pares): tetraédrica electrónica, molecular piramidal trigonal.", porque: "En el $\\text{NH}_3$ el $\\text{N}$ tiene 3 enlazantes y 1 libre, es decir 4 pares, así que la geometría electrónica es tetraédrica. Como el par libre no se ve en la forma molecular, la geometría molecular pasa a ser piramidal trigonal. Conviene distinguir ambas geometrías en cada caso." },
          { paso: "$\\text{CH}_4$ y $\\text{NH}_4^+$: 4 enlazantes y 0 libres: tetraédrica tanto electrónica como molecular.", porque: "En el $\\text{CH}_4$ y el $\\text{NH}_4^+$ el átomo central tiene 4 enlazantes y ningún par libre. Por eso la geometría electrónica y la molecular coinciden en tetraedro. Como no hay pares libres que modifiquen el ángulo, ambas especies tienen la misma forma." }
        ],
        resultado: "$\\text{H}_2\\text{O}$: 2 libres, angular. $\\text{NH}_3$: 1 libre, piramidal. $\\text{CH}_4$ y $\\text{NH}_4^+$: 0 libres, tetraédricos."
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Los pares libres repelen más que los enlazantes. El $\\text{H}_2\\text{O}$ tiene 2 pares libres y el $\\text{NH}_3$ tiene 1: el ángulo del $\\text{H}_2\\text{O}$ se comprime más, hasta aprox. $104{,}5$ grados (frente a aprox. $107$ grados del $\\text{NH}_3$).", porque: "Los pares libres ocupan más espacio que los enlazantes y repelen con más fuerza, así que comprimen más el ángulo $\\text{H-X-H}$. El $\\text{H}_2\\text{O}$ tiene 2 pares libres y el $\\text{NH}_3$ tiene 1, por lo que el ángulo del agua queda más cerrado, en aprox. $104{,}5$ grados. Entonces el $\\text{NH}_3$, con aprox. $107$ grados, tiene un ángulo mayor." }
        ],
        resultado: "El $\\text{H}_2\\text{O}$ tiene un ángulo menor (aprox. $104{,}5$ grados) que el $\\text{NH}_3$ (aprox. $107$ grados) por tener un par libre más."
      },
      {
        parte: "c)",
        pasos: [
          { paso: "Ambos tienen 4 pares enlazantes y 0 pares libres alrededor del átomo central.", porque: "Contamos la distribución de pares alrededor del átomo central, que da 4 enlazantes y ningún libre en ambas especies. Sin pares libres la repulsión es igual entre los cuatro enlaces. Por eso los pares se ubican como en un tetraedro regular en los dos casos." },
          { paso: "Por eso ambos tienen ángulo de $109{,}5$ grados.", porque: "Como la geometría es tetraédrica regular en ambos casos, el ángulo $\\text{H-X-H}$ es el mismo: $109{,}5$ grados. El $\\text{NH}_4^+$ tiene la misma forma que el $\\text{CH}_4$ porque el $\\text{N}$ tiene 4 enlaces y ningún par libre. La carga no cambia la geometría, sino la distribución de pares." }
        ],
        resultado: "El $\\text{CH}_4$ y el $\\text{NH}_4^+$ tienen ángulo de $109{,}5$ grados."
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
          { paso: "Electrones de valencia: $$3 \\times 6 = 18$$ electrones, es decir 9 pares. En cada forma el $\\text{O}$ central tiene un par libre, y los enlaces se reparten entre un enlace doble y uno dativo.", porque: "Sumamos los electrones de valencia del $\\text{O}_3$: $3 \\times 6 = 18$, es decir 9 pares. En cada forma el $\\text{O}$ central tiene un par libre, y los enlaces se reparten entre un doble y un dativo. Con esos 9 pares se completa el octeto de los tres átomos en ambas formas, lo que hace válidas las dos representaciones." },
          { paso: "Ambas formas contribuyen a la molécula real: la verdadera estructura es un híbrido de resonancia en el que los dos enlaces $\\text{O-O}$ son equivalentes.", porque: "Ninguna de las dos formas describe por sí sola la molécula real. La estructura verdadera es un híbrido de resonancia, un promedio de todas las formas posibles. Por eso los dos enlaces $\\text{O-O}$ son equivalentes, aunque en una forma aparezca un doble y en la otra un dativo." },
          { paso: "Las formas no son moléculas distintas que se alternan en el tiempo: son representaciones de una única molécula con electrones deslocalizados.", porque: "Conviene no interpretar las formas como especies distintas: ambas representan una única molécula con electrones deslocalizados. Por eso el $\\text{O}_3$ no cambia de una forma a otra, sino que tiene una sola estructura real. Este concepto evita esa idea errónea." }
        ],
        resultado: "Las dos formas resonantes describen una única molécula híbrida, con los dos enlaces $\\text{O-O}$ equivalentes."
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Alrededor del $\\text{O}$ central hay 3 regiones de electrones: el doble enlace, el enlace dativo (o simple) y el par libre.", porque: "Alrededor del $\\text{O}$ central se cuentan las regiones de electrones: el doble enlace, el dativo (o simple) y el par libre, en total 3. Cada enlace múltiple cuenta como una sola región en TREPEV, y el par libre cuenta igual que un enlace. Por eso el conteo da 3 regiones y define la geometría electrónica." },
          { paso: "Con 3 regiones la geometría electrónica es trigonal plana y la molecular es angular, con ángulo aprox. $117$ grados.", porque: "Con 3 regiones la geometría electrónica es trigonal plana. El par libre repele más que los enlaces y comprime el ángulo, por eso la forma molecular es angular. Como resultado, el valor real ronda los $117$ grados, algo menor que el ángulo ideal de la trigonal plana." },
          { paso: "Enlaces: 2 $\\sigma$ (uno por cada $\\text{O-O}$) y 1 $\\pi$ deslocalizado entre los dos enlaces $\\text{O-O}$.", porque: "Cada enlace $\\text{O-O}$ tiene un $\\sigma$, así que hay 2 $\\sigma$ en total. La parte $\\pi$ se reparte entre los dos enlaces porque la resonancia la deslocaliza, y no queda fija en un enlace determinado. Por eso el $\\pi$ es una densidad electrónica compartida." }
        ],
        resultado: "Geometría angular (aprox. $117$ grados), con 2 $\\sigma$ y una parte $\\pi$ deslocalizada."
      },
      {
        parte: "c)",
        pasos: [
          { paso: "$\\Delta\\text{EN}$ ($\\text{O-O}$) = $3{,}5 - 3{,}5 = 0$: los enlaces $\\text{O-O}$ son covalentes no polares, sin dipolos de enlace.", porque: "Como los dos átomos son $\\text{O}$, la diferencia de electronegatividad es cero, así que cada enlace $\\text{O-O}$ es covalente no polar. Calculamos $3{,}5 - 3{,}5 = 0$ con los valores del enunciado. Con $\\Delta\\text{EN} = 0$ no hay dipolo de enlace, y ese es el punto de partida para analizar la polaridad de la molécula." },
          { paso: "Con dipolos de enlace nulos, por el modelo del apunte la suma vectorial es cero. Supuesto: esto no coincide del todo con el dato experimental, ya que el $\\text{O}_3$ tiene un pequeño momento dipolar debido a la distribución de cargas de sus formas resonantes, que el apunte no cubre.", porque: "Con dipolos de enlace nulos, el modelo del apunte da suma vectorial cero. Sin embargo, el dato experimental muestra un pequeño momento dipolar en el $\\text{O}_3$, y eso no coincide del todo con el modelo. El efecto se asocia a la distribución de cargas de las formas resonantes, algo que el apunte no cubre, así que el resultado debe tomarse con cautela." }
        ],
        resultado: "Según el modelo de $\\Delta\\text{EN}$, los enlaces $\\text{O-O}$ son no polares; el $\\text{O}_3$ real tiene un pequeño momento dipolar que el apunte no explica."
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
          { paso: "$\\text{CO}_2$: $$4 + 2 \\times 6 = 16$$ electrones (8 pares). Estructura $\\text{O=C=O}$: 2 enlaces dobles, sin pares libres en el $\\text{C}$ y 2 pares libres en cada $\\text{O}$.", porque: "Contamos los electrones del $\\text{CO}_2$ ($4 + 2 \\times 6 = 16$, es decir 8 pares) y los distribuimos con el $\\text{C}$ central y dos dobles enlaces. El $\\text{C}$, menos electronegativo que el $\\text{O}$, cumple su octeto con 4 pares compartidos. Cada $\\text{O}$ conserva 2 pares libres, y así queda completa la estructura." },
          { paso: "$\\text{CS}_2$: $$4 + 2 \\times 6 = 16$$ electrones. Estructura $\\text{S=C=S}$, con la misma forma que el $\\text{CO}_2$ y 2 pares libres en cada $\\text{S}$.", porque: "El $\\text{S}$ también tiene 6 electrones de valencia, así que el $\\text{CS}_2$ se dibuja igual que el $\\text{CO}_2$: dobles enlaces y 2 pares libres en cada $\\text{S}$. Por eso ambas moléculas tienen 16 electrones en total. La geometría depende del número de regiones de electrones, y de ahí se repite la forma lineal." },
          { paso: "$\\Delta\\text{EN}$ ($\\text{C=O}$) = $3{,}5 - 2{,}5 = 1{,}0$: enlace covalente polar. $\\Delta\\text{EN}$ ($\\text{C=S}$) = $2{,}5 - 2{,}5 = 0{,}0$: enlace covalente no polar.", porque: "Restamos la electronegatividad de los átomos de cada enlace: $\\text{C=O}$ da $3{,}5 - 2{,}5 = 1{,}0$ (covalente polar) y $\\text{C=S}$ da $2{,}5 - 2{,}5 = 0{,}0$ (covalente no polar). Como el $\\text{C}$ y el $\\text{S}$ tienen la misma electronegatividad, su enlace no tiene dipolo. Por eso el $\\text{CS}_2$ no tiene dipolos en sus enlaces." }
        ],
        resultado: "$\\text{CO}_2$: enlaces $\\text{C=O}$ covalentes polares. $\\text{CS}_2$: enlaces $\\text{C=S}$ covalentes no polares ($\\Delta\\text{EN} = 0$)."
      },
      {
        parte: "b)",
        pasos: [
          { paso: "$\\text{SO}_2$: $$6 + 2 \\times 6 = 18$$ electrones (9 pares). Estructura $\\text{O=S}\\rightarrow\\text{O}$, con enlace doble, enlace dativo y 1 par libre sobre el $\\text{S}$.", porque: "Se cuentan los electrones de valencia del $\\text{SO}_2$ ($6 + 2 \\times 6 = 18$, es decir 9 pares) y se dibuja la forma $\\text{O=S}\\rightarrow\\text{O}$, que es la que cumple el octeto del $\\text{S}$ y de los $\\text{O}$. Verificar esa cuenta evita dibujar una estructura con pares insuficientes. Por eso el total de 9 pares es el punto de partida." },
          { paso: "Alrededor del $\\text{S}$ hay 3 regiones de electrones (doble enlace, dativo y par libre): geometría electrónica trigonal plana y molecular angular, con ángulo aprox. $119$ grados.", porque: "Con 3 regiones alrededor del $\\text{S}$ (doble enlace, dativo y par libre), la geometría electrónica es trigonal plana. El par libre repele más y comprime el ángulo, dando una forma molecular angular de aprox. $119$ grados. Por eso el $\\text{SO}_2$ no es lineal." }
        ],
        resultado: "Geometría angular, ángulo aprox. $119$ grados."
      },
      {
        parte: "c)",
        pasos: [
          { paso: "$\\text{CO}_2$: lineal y simétrico. Sus dipolos $\\text{C=O}$ son iguales y opuestos: la suma es cero y el $\\text{CO}_2$ es apolar.", porque: "En el $\\text{CO}_2$ la geometría lineal hace que los dos dipolos $\\text{C=O}$ tengan el mismo módulo y dirección opuesta. Por eso se cancelan, y la suma vectorial es cero. La molécula es apolar, aunque sus enlaces sean polares." },
          { paso: "$\\text{SO}_2$: enlaces $\\text{S=O}$ polares ($\\Delta\\text{EN} = 1{,}0$) con geometría angular, sin cancelación: el $\\text{SO}_2$ es polar.", porque: "En el $\\text{SO}_2$ los dipolos $\\text{S-O}$ no están alineados por la forma angular, y su suma no es cero. Eso hace que la molécula tenga un momento dipolar neto. Por eso el $\\text{SO}_2$ es polar, a diferencia del $\\text{CO}_2$." }
        ],
        resultado: "El $\\text{CO}_2$ es apolar; el $\\text{SO}_2$ es polar."
      },
      {
        parte: "d)",
        pasos: [
          { paso: "Regla semejante disuelve semejante: el agua es polar, por lo que disuelve mejor a sustancias polares como el $\\text{SO}_2$ que al $\\text{CO}_2$ apolar.", porque: "Se aplica la regla 'semejante disuelve semejante': el agua es polar y disuelve mejor a moléculas polares. Por eso comparamos la polaridad de cada gas con la del solvente. Las interacciones dipolo-dipolo favorecen la solubilidad del $\\text{SO}_2$ y no la del $\\text{CO}_2$." },
          { paso: "Además, el $\\text{SO}_2$ reacciona parcialmente con el agua formando $\\text{H}_2\\text{SO}_3$, lo que aumenta su solubilidad aparente.", porque: "Además de la polaridad, el $\\text{SO}_2$ reacciona en parte con el agua para formar $\\text{H}_2\\text{SO}_3$, y esa reacción consume gas disuelto y desplaza el equilibrio hacia la disolución. Este efecto no ocurre con el $\\text{CO}_2$, que es apolar y prácticamente no reacciona con el agua. Por eso el $\\text{SO}_2$ resulta más soluble." }
        ],
        resultado: "El $\\text{SO}_2$ se disuelve más en agua que el $\\text{CO}_2$ porque es polar y reacciona con el agua."
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
          { paso: "Los metales alcalinos ($\\text{K}$, $\\text{Na}$) tienen nº de oxidación $+1$; el $\\text{O}$ suele ser $-2$ y el $\\text{H}$ suele ser $+1$.", porque: "Antes de calcular fijamos los nº de oxidación de los elementos conocidos: $\\text{K}$ y $\\text{Na}$ como metales alcalinos tienen $+1$, el $\\text{O}$ suele ser $-2$ y el $\\text{H}$ suele ser $+1$. Estos valores de referencia son los que usamos para despejar el elemento que se pide. Sin ellos la ecuación tendría más incógnitas." },
          { paso: "$\\text{KMnO}_4$: $$0 = (+1) + \\text{Mn} + 4 \\times (-2) \\rightarrow \\text{Mn} = +7$$", porque: "Planteamos que la suma de los nº de oxidación de una especie neutra es $0$, multiplicando cada uno por su subíndice. Con $(+1)$ para el $\\text{K}$, $4 \\times (-2)$ para los $\\text{O}$ y $\\text{Mn}$ como incógnita, despejamos el $\\text{Mn}$. El resultado es $+7$, que es el nº de oxidación del $\\text{Mn}$ en $\\text{KMnO}_4$." },
          { paso: "$\\text{H}_2\\text{SO}_4$: $$0 = 2 \\times (+1) + \\text{S} + 4 \\times (-2) \\rightarrow \\text{S} = +6$$", porque: "Aplicamos la misma suma: $2 \\times (+1)$ para los $\\text{H}$, $4 \\times (-2)$ para los $\\text{O}$ y $\\text{S}$ como incógnita, y el total debe dar $0$. Despejamos el $\\text{S}$ y obtenemos $+6$. Hay que multiplicar cada nº por su subíndice, porque olvidar esa multiplicación es el error más común en esta cuenta." },
          { paso: "$\\text{Na}_2\\text{S}$: $$0 = 2 \\times (+1) + \\text{S} \\rightarrow \\text{S} = -2$$ (el $\\text{S}$ es el anión sulfuro).", porque: "En $\\text{Na}_2\\text{S}$ la especie es neutra, así que $2 \\times (+1)$ más el $\\text{S}$ debe dar $0$. Por eso el $\\text{S}$ queda en $-2$, porque el $\\text{Na}$ es más electropositivo y el $\\text{S}$ actúa como anión sulfuro. Entonces el mismo elemento cambia de nº según la especie en la que está." }
        ],
        resultado: "$\\text{Mn} = +7$ en $\\text{KMnO}_4$; $\\text{S} = +6$ en $\\text{H}_2\\text{SO}_4$; $\\text{S} = -2$ en $\\text{Na}_2\\text{S}$."
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
          { paso: "Óxido de cloro(VII): $\\text{Cl}$ con nº $+7$ y $\\text{O}$ con $-2$. Se cruzan los valores: 2 $\\text{Cl}$ ($+7$) y 7 $\\text{O}$ ($-2$) $\\rightarrow \\text{Cl}_2\\text{O}_7$.", porque: "En un compuesto neutro los subíndices se obtienen cruzando los nº de oxidación: el $\\text{Cl}$ ($+7$) pasa a tener subíndice 2 y el $\\text{O}$ ($-2$) pasa a tener subíndice 7. Así la carga positiva total del $\\text{Cl}$ iguala a la negativa del $\\text{O}$, y la suma da 0. Por eso la fórmula es $\\text{Cl}_2\\text{O}_7$." },
          { paso: "Óxido de calcio: $\\text{Ca}$ con $+2$ y $\\text{O}$ con $-2$ $\\rightarrow \\text{CaO}$.", porque: "Con $\\text{Ca}$ $+2$ y $\\text{O}$ $-2$ los valores absolutos son iguales, así que cada elemento lleva subíndice 1. La suma de cargas da 0 sin necesidad de cruzar números. Por eso la fórmula es $\\text{CaO}$, sin subíndices adicionales." },
          { paso: "$\\text{Cl}_2\\text{O}_7$ en IUPAC sistemática: heptóxido de dicloro. Equivale a óxido de cloro(VII) en Stock.", porque: "En la IUPAC sistemática los prefijos numerales indican la cantidad de átomos: di para los 2 $\\text{Cl}$ y hepta para los 7 $\\text{O}$. En cambio, Stock usa el nº de oxidación del $\\text{Cl}$ en número romano, (VII). Ambos nombres describen el mismo compuesto y son válidos." },
          { paso: "$\\text{CaO}$: óxido de calcio, sin número romano.", porque: "En la nomenclatura de Stock el número romano solo se escribe cuando el elemento puede tener más de un nº de oxidación. El $\\text{Ca}$ tiene únicamente $+2$, así que no hace falta aclararlo. Por eso el nombre queda óxido de calcio." }
        ],
        resultado: "a) $\\text{Cl}_2\\text{O}_7$ = heptóxido de dicloro (óxido de cloro(VII)); b) $\\text{CaO}$ = óxido de calcio."
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
          { paso: "$\\text{HBr}$ gaseoso: es un hidrácido en estado gaseoso, se nombra bromuro de hidrógeno (uro de hidrógeno).", porque: "El $\\text{HBr}$ en estado gaseoso es una sustancia pura que todavía no se disolvió en agua. Por eso se nombra como compuesto binario, bromuro de hidrógeno. El prefijo 'ácido' queda reservado para la solución acuosa." },
          { paso: "$\\text{HBr}$ disuelto en agua: ácido bromhídrico.", porque: "Al disolverse en agua el $\\text{HBr}$ se ioniza, y en solución se nombra como hidrácido con la terminación 'hídrico'. Es el mismo compuesto que en el paso anterior, y lo que cambia es el estado de agregación. Por eso el nombre pasa a ser ácido bromhídrico." },
          { paso: "$\\text{NaH}$: hidruro de sodio. El $\\text{H}$ tiene nº $-1$ porque el metal es más electropositivo.", porque: "En los hidruros metálicos el metal es el catión y el $\\text{H}$ actúa como anión hidruro con nº $-1$. Esto ocurre porque el metal es más electropositivo que el $\\text{H}$. Por eso el compuesto se nombra hidruro de sodio y no como ácido." },
          { paso: "$\\text{NH}_3$: amoníaco (nombre tradicional, el que usa la guía) o trihidruro de nitrógeno (IUPAC). Ambos son válidos.", porque: "La IUPAC nombra el $\\text{NH}_3$ con prefijos numerales (tri = 3 $\\text{H}$), y la nomenclatura tradicional mantiene el nombre histórico 'amoníaco'. Ambos nombres son válidos, así que en un examen se puede aceptar cualquiera de los dos. Conviene saber los dos para no perder puntos." }
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
          { paso: "Ácido nitroso ($\\text{N}$ $+3$): $$\\text{H}\\ (+1) + \\text{N}\\ (+3) + 2 \\times \\text{O}\\ (-2) = 0 \\rightarrow \\text{HNO}_2$$", porque: "Sumamos $\\text{H}$ ($+1$), $\\text{N}$ ($+3$) y 2 $\\text{O}$ ($-2$ cada uno), y el total debe dar $0$ porque el ácido es neutro. Con esa cuenta confirmamos que la fórmula es $\\text{HNO}_2$. El sufijo 'oso' corresponde al menor nº de oxidación de la serie, en este caso $+3$." },
          { paso: "Ácido nítrico ($\\text{N}$ $+5$): $$\\text{H}\\ (+1) + \\text{N}\\ (+5) + 3 \\times \\text{O}\\ (-2) = 0 \\rightarrow \\text{HNO}_3$$", porque: "Sumamos $\\text{H}$ ($+1$), $\\text{N}$ ($+5$) y 3 $\\text{O}$ ($-2$ cada uno), y el total de $0$ confirma la fórmula $\\text{HNO}_3$. El sufijo 'ico' corresponde al mayor nº de oxidación de la serie. Por eso el ácido nítrico lleva más $\\text{O}$ que el nitroso." },
          { paso: "Ácido hipocloroso ($\\text{Cl}$ $+1$): $$\\text{H}\\ (+1) + \\text{Cl}\\ (+1) + \\text{O}\\ (-2) = 0 \\rightarrow \\text{HClO}$$", porque: "En $\\text{HClO}$ sumamos $\\text{H}$ ($+1$), $\\text{Cl}$ ($+1$) y $\\text{O}$ ($-2$), y el total da $0$. Así el $\\text{Cl}$ queda con nº $+1$. El prefijo 'hipo' y el sufijo 'oso' indican el nº más bajo de la serie de oxoácidos del cloro." },
          { paso: "Ácido clórico ($\\text{Cl}$ $+5$): $$\\text{H}\\ (+1) + \\text{Cl}\\ (+5) + 3 \\times \\text{O}\\ (-2) = 0 \\rightarrow \\text{HClO}_3$$", porque: "Sumamos $\\text{H}$ ($+1$), $\\text{Cl}$ ($+5$) y 3 $\\text{O}$ ($-2$ cada uno), y el total de $0$ confirma $\\text{HClO}_3$. El 'ico' corresponde al nº $+5$ del cloro, que es el que tiene en esta serie. Con eso queda identificado el ácido clórico." }
        ],
        resultado: "a) $\\text{HNO}_2$; b) $\\text{HNO}_3$; c) $\\text{HClO}$; d) $\\text{HClO}_3$."
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
          { paso: "Sulfato de aluminio: el catión es $\\text{Al}^{3+}$ y el anión es $\\text{SO}_4^{2-}$. Para neutralidad: 2 $\\text{Al}^{3+}$ ($6+$) y 3 $\\text{SO}_4^{2-}$ ($6-$) $\\rightarrow \\text{Al}_2(\\text{SO}_4)_3$.", porque: "Para formar la sal igualamos las cargas: el $\\text{Al}^{3+}$ aporta 3 cargas positivas y el $\\text{SO}_4^{2-}$ aporta 2 negativas. El mínimo común múltiplo de 3 y 2 es 6. Por eso hacen falta 2 $\\text{Al}^{3+}$ y 3 $\\text{SO}_4^{2-}$, que dan $6+$ y $6-$." },
          { paso: "Fosfato de calcio: $\\text{Ca}^{2+}$ y $\\text{PO}_4^{3-}$. Para neutralidad: 3 $\\text{Ca}^{2+}$ ($6+$) y 2 $\\text{PO}_4^{3-}$ ($6-$) $\\rightarrow \\text{Ca}_3(\\text{PO}_4)_2$.", porque: "Usamos el mismo criterio con $\\text{Ca}^{2+}$ (2 cargas) y $\\text{PO}_4^{3-}$ (3 cargas). El mínimo común múltiplo es 6, así que 3 $\\text{Ca}^{2+}$ y 2 $\\text{PO}_4^{3-}$ suman $6+$ y $6-$. Cada subíndice indica cuántos iones del otro tipo hacen falta para neutralizar la carga." },
          { paso: "$\\text{Mg}(\\text{NO}_3)_2$: el catión $\\text{Mg}^{2+}$ tiene un único nº de oxidación y el anión nitrato es $\\text{NO}_3^-$ $\\rightarrow$ nitrato de magnesio.", porque: "El $\\text{Mg}^{2+}$ tiene un único nº de oxidación posible, por eso no lleva número romano. Como cada $\\text{NO}_3^-$ aporta una carga negativa, hacen falta 2 para neutralizar el $\\text{Mg}^{2+}$. Por eso el nombre queda nitrato de magnesio." }
        ],
        resultado: "$\\text{Al}_2(\\text{SO}_4)_3$; $\\text{Ca}_3(\\text{PO}_4)_2$; $\\text{Mg}(\\text{NO}_3)_2$ = nitrato de magnesio."
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
          { paso: "Sulfato de hierro(III): $\\text{Fe}^{3+}$ y $\\text{SO}_4^{2-}$. Para neutralidad: 2 $\\text{Fe}^{3+}$ ($6+$) y 3 $\\text{SO}_4^{2-}$ ($6-$) $\\rightarrow \\text{Fe}_2(\\text{SO}_4)_3$.", porque: "El número romano (III) indica que el hierro tiene carga $3+$, así que el catión es $\\text{Fe}^{3+}$. Para igualarlo con $\\text{SO}_4^{2-}$ usamos el mínimo común múltiplo 6. Así se obtienen 2 $\\text{Fe}$ y 3 $\\text{SO}_4$, es decir $\\text{Fe}_2(\\text{SO}_4)_3$." },
          { paso: "Hidrogenosulfato de sodio: anión $\\text{HSO}_4^-$ (sulfato con un $\\text{H}$) y catión $\\text{Na}^+$ $\\rightarrow$ $\\text{NaHSO}_4$.", porque: "El anión $\\text{HSO}_4^-$ conserva 1 $\\text{H}$ de los 2 que tiene el ácido sulfúrico. Como $\\text{Na}^+$ y $\\text{HSO}_4^-$ se combinan 1 a 1, no hace falta cambiar subíndices. El $\\text{H}$ se escribe delante del $\\text{SO}_4$ porque forma parte del anión." }
        ],
        resultado: "$\\text{Fe}_2(\\text{SO}_4)_3$ y $\\text{NaHSO}_4$."
      },
      {
        parte: "b)",
        pasos: [
          { paso: "$\\text{Ca}(\\text{ClO})_2$: catión $\\text{Ca}^{2+}$ y anión $\\text{ClO}^-$ ($\\text{Cl}$ con nº $+1$, hipoclorito). Se necesitan 2 $\\text{ClO}^-$ por cada $\\text{Ca}^{2+}$ $\\rightarrow$ hipoclorito de calcio.", porque: "El $\\text{Ca}^{2+}$ tiene carga $2+$ y el $\\text{ClO}^-$ tiene carga $1-$, así que se necesitan 2 aniones para neutralizar el catión. Por eso la fórmula es $\\text{Ca}(\\text{ClO})_2$. El nombre es hipoclorito de calcio, con el $\\text{Cl}$ en $+1$." },
          { paso: "$\\text{KHCO}_3$: catión $\\text{K}^+$ y anión $\\text{HCO}_3^-$ (hidrogenocarbonato). Nombre válido: hidrogenocarbonato de potasio; nombre tradicional: bicarbonato de potasio.", porque: "El $\\text{HCO}_3^-$ es el anión de una sal ácida, porque conserva un $\\text{H}$ extra. La IUPAC lo nombra con el prefijo 'hidrogeno' y la tradicional con 'bi'. El $\\text{K}^+$ tiene $1+$ y el anión $1-$, así que la fórmula $\\text{KHCO}_3$ no lleva subíndices." }
        ],
        resultado: "$\\text{Ca}(\\text{ClO})_2$ = hipoclorito de calcio; $\\text{KHCO}_3$ = hidrogenocarbonato de potasio (bicarbonato de potasio)."
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
          { paso: "$\\text{N}_2\\text{O}_5$: el $\\text{N}$ tiene nº $+5$, porque $$2 \\times (+5) = 10 = 5 \\times 2\\ (\\text{O})$$.", porque: "Verificamos el nº de oxidación del $\\text{N}$ cruzando los subíndices: $2 \\times (+5) = 10 = 5 \\times 2$ ($\\text{O}$). Esta comprobación es la inversa del cálculo de un nº desconocido. Confirma que el $\\text{N}$ tiene $+5$ en el $\\text{N}_2\\text{O}_5$." },
          { paso: "IUPAC: pentóxido de dinitrógeno. Stock: óxido de nitrógeno(V).", porque: "Un mismo compuesto puede tener dos nombres válidos. La IUPAC usa prefijos (penta = 5, di = 2), y Stock indica el nº de oxidación del $\\text{N}$ con el número romano (V). Ambos nombres señalan el mismo óxido." },
          { paso: "Como es un no metal con oxígeno, es un óxido ácido.", porque: "Los no metales forman óxidos ácidos, porque al reaccionar con agua dan oxoácidos. Como el $\\text{N}$ es un no metal, el $\\text{N}_2\\text{O}_5$ se clasifica como óxido ácido. Por eso no se lo considera básico." }
        ],
        resultado: "$\\text{N}_2\\text{O}_5$ = pentóxido de dinitrógeno (óxido de nitrógeno(V)), óxido ácido."
      },
      {
        parte: "b)",
        pasos: [
          { paso: "$\\text{N}_2\\text{O}_5 + \\text{H}_2\\text{O} \\rightarrow 2\\ \\text{HNO}_3$. Balance: $\\text{N}$: $2 = 2$; $\\text{H}$: $2 = 2$; $\\text{O}$: $5 + 1 = 6 = 2 \\times 3$.", porque: "Un óxido ácido reacciona con agua para dar el oxoácido correspondiente, y el $\\text{N}_2\\text{O}_5$ da $\\text{HNO}_3$. Como hay 2 $\\text{N}$ en el reactivo, se necesitan 2 $\\text{HNO}_3$. El balance de $\\text{O}$ ($5 + 1 = 6 = 2 \\times 3$) confirma los coeficientes." },
          { paso: "El producto es ácido nítrico.", porque: "El ácido formado tiene $\\text{N}$ con nº $+5$ y terminación 'ico', así que es ácido nítrico. La terminación depende del nº de oxidación del elemento, y no de la cantidad de átomos de $\\text{O}$. Por eso el nombre sale de la serie del nitrógeno $+5$." }
        ],
        resultado: "$\\text{N}_2\\text{O}_5 + \\text{H}_2\\text{O} \\rightarrow 2\\ \\text{HNO}_3$ (ácido nítrico)."
      },
      {
        parte: "c)",
        pasos: [
          { paso: "$\\text{HNO}_3 + \\text{NaOH} \\rightarrow \\text{NaNO}_3 + \\text{H}_2\\text{O}$.", porque: "El ácido nítrico tiene 1 $\\text{H}$, así que reacciona con 1 $\\text{NaOH}$ para neutralizarlo. Se forman la sal $\\text{NaNO}_3$ y agua. El balance de $\\text{Na}$ y $\\text{H}$ confirma la relación 1 a 1 entre el ácido y la base." },
          { paso: "$\\text{NaNO}_3$: nitrato de sodio (anión $\\text{NO}_3^-$, nítrico).", porque: "El anión $\\text{NO}_3^-$ proviene del ácido nítrico, por eso su sal se llama nitrato. El nitrito ($\\text{NO}_2^-$) se formaría a partir del ácido nitroso, así que no debe confundirse con el producto de este paso. Entonces el $\\text{NaNO}_3$ es nitrato de sodio." }
        ],
        resultado: "$\\text{HNO}_3 + \\text{NaOH} \\rightarrow \\text{NaNO}_3 + \\text{H}_2\\text{O}$; la sal es nitrato de sodio."
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
          { paso: "La cadena continua más larga tiene 6 $\\text{C}$: el nombre base es hexano. El $\\text{CH}_3$ ramificado es el sustituyente metilo.", porque: "Se identifica la cadena continua más larga, que tiene 6 $\\text{C}$, y se la nombra como hexano. El $\\text{CH}_3$ ramificado no forma parte de la cadena principal, sino que es un sustituyente metilo. Por eso el nombre base sale de los 6 $\\text{C}$ de la cadena." },
          { paso: "Numerando desde la izquierda, el metilo queda en $\\text{C}3$; desde la derecha, quedaría en $\\text{C}4$. Se elige el localizador más bajo: $\\text{C}3$.", porque: "Se numera desde ambos extremos y se mide el localizador del metilo: desde la izquierda queda en $\\text{C}3$ y desde la derecha en $\\text{C}4$. La regla IUPAC elige el localizador más bajo. Por eso el metilo se nombra en $\\text{C}3$." },
          { paso: "Nombre: 3-metilhexano.", porque: "En el nombre se escriben el localizador, el prefijo del sustituyente y el nombre base. Así combinamos 3-metil con hexano. El guion separa el número del nombre, y el resultado es 3-metilhexano." }
        ],
        resultado: "3-metilhexano."
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Butano (4 $\\text{C}$) como base, con 2 metilos sobre el $\\text{C}2$: $\\text{CH}_3\\text{-C}(\\text{CH}_3)_2\\text{-CH}_2\\text{-CH}_3$.", porque: "Partimos del butano, de 4 $\\text{C}$, y agregamos 2 metilos sobre el $\\text{C}2$. El prefijo 'dimetil' con el localizador 2,2 indica esa ubicación. Así el $\\text{C}2$ queda con 4 enlaces, dos de ellos hacia los metilos." },
          { paso: "Contar carbonos: $4\\ \\text{de la cadena} + 2\\ \\text{metilos} = 6\\ \\text{C}$. Hidrógenos: $$3 + 6 + 2 + 3 = 14$$. Fórmula molecular $\\text{C}_6\\text{H}_{14}$.", porque: "Contamos los carbonos: 4 de la cadena más 2 metilos, total 6. Sumamos los hidrógenos de la fórmula desarrollada: $3 + 6 + 2 + 3 = 14$. Así la fórmula molecular es $\\text{C}_6\\text{H}_{14}$, que corresponde a un alcano." }
        ],
        resultado: "$\\text{CH}_3\\text{-C}(\\text{CH}_3)_2\\text{-CH}_2\\text{-CH}_3$, fórmula molecular $\\text{C}_6\\text{H}_{14}$."
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
          { paso: "El grupo $\\text{COOH}$ (ácido) tiene prioridad sobre el $\\text{OH}$: el $\\text{C}$ del $\\text{COOH}$ es el $\\text{C}1$. La cadena tiene 4 $\\text{C}$: $\\text{C}1$ ($\\text{COOH}$), $\\text{C}2$ ($\\text{CH}_2$), $\\text{C}3$ ($\\text{CH}$ con $\\text{OH}$), $\\text{C}4$ ($\\text{CH}_3$).", porque: "El $\\text{COOH}$ tiene prioridad sobre el $\\text{OH}$, así que su carbono es el $\\text{C}1$ y define el sufijo del ácido. La cadena se cuenta desde ese $\\text{C}$, lo que da 4 $\\text{C}$ en total. Por eso el $\\text{OH}$ queda ubicado en el $\\text{C}3$, dentro de esa numeración." },
          { paso: "El $\\text{OH}$ está en $\\text{C}3$: prefijo 3-hidroxi.", porque: "Como el grupo principal es el ácido, el $\\text{OH}$ no puede ser sufijo y se nombra como prefijo 'hidroxi'. El $\\text{OH}$ está unido al $\\text{C}3$ de la cadena. Por eso el prefijo es 3-hidroxi." },
          { paso: "Nombre: ácido 3-hidroxibutanoico.", porque: "Combinamos el prefijo 3-hidroxi con la base de 4 $\\text{C}$, but, y el sufijo del ácido carboxílico, anoico. Así se arma el nombre final: ácido 3-hidroxibutanoico. Conviene verificar que el localizador coincida con la numeración desde el $\\text{COOH}$." }
        ],
        resultado: "Ácido 3-hidroxibutanoico."
      },
      {
        parte: "b)",
        pasos: [
          { paso: "$\\text{CH}_2\\text{=CH-CHO}$: el $\\text{CHO}$ es un aldehído ($\\text{C}1$), la cadena tiene 3 $\\text{C}$ y el doble enlace está entre $\\text{C}2$ y $\\text{C}3$. Nombre: prop-2-enal (2-propenal). Nombre trivial: acroleína.", porque: "El $\\text{CHO}$ es un aldehído y tiene prioridad sobre el doble enlace, así que su $\\text{C}$ es el $\\text{C}1$. La cadena tiene 3 $\\text{C}$, y el doble enlace va entre $\\text{C}2$ y $\\text{C}3$. Por eso el nombre lleva el localizador 2 para el 'en'." },
          { paso: "Etanoato de etilo: parte ácida 'etanoato' (de ácido etanoico, acético) y parte alcohólica 'de etilo' (de etanol). Fórmula: $\\text{CH}_3\\text{-COO-CH}_2\\text{-CH}_3$.", porque: "Un éster se nombra con la parte del ácido ('-oato') seguida del radical del alcohol ('de -ilo'). El etanoato de etilo viene del ácido etanoico, también llamado acético, y del etanol. Por eso la fórmula $\\text{CH}_3\\text{-COO-CH}_2\\text{-CH}_3$ une ambas partes por el enlace éster." }
        ],
        resultado: "$\\text{CH}_2\\text{=CH-CHO}$ = prop-2-enal (2-propenal); etanoato de etilo = $\\text{CH}_3\\text{-COO-CH}_2\\text{-CH}_3$."
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
          { paso: "El $\\text{OH}$ unido al anillo define un fenol: el $\\text{C}$ con $\\text{OH}$ es el $\\text{C}1$ del anillo.", porque: "En los derivados del benceno el grupo principal se toma como $\\text{C}1$ del anillo, y desde allí se numeran los demás sustituyentes. El $\\text{OH}$ unido al anillo define un fenol. Por eso el carbono unido al $\\text{OH}$ es el $\\text{C}1$." },
          { paso: "El $\\text{CH}_3$ está en posición vecina (orto) al $\\text{OH}$, es decir en $\\text{C}2$: 2-metilfenol.", porque: "Orto indica posición vecina, es decir $\\text{C}2$ respecto del $\\text{C}1$. Con dos sustituyentes se puede usar 'o-' o el localizador numérico. Como el $\\text{CH}_3$ está en $\\text{C}2$, el nombre queda 2-metilfenol." },
          { paso: "Nombre tradicional válido: o-cresol (orto-metilfenol).", porque: "El nombre tradicional 'o-cresol' se usa para los metilfenoles, y su prefijo 'orto' indica la posición relativa entre los dos sustituyentes. Ambos nombres describen el mismo compuesto. Por eso los dos son válidos." }
        ],
        resultado: "2-metilfenol (o-cresol)."
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Ácido benzoico: el $\\text{COOH}$ va unido al $\\text{C}1$ del anillo. El $\\text{Cl}$ va en $\\text{C}3$, que es meta respecto del $\\text{COOH}$.", porque: "El grupo $\\text{COOH}$ define el nombre base 'benzoico' y su carbono es el $\\text{C}1$ del anillo. El $\\text{Cl}$ va en $\\text{C}3$, que es la posición meta respecto del $\\text{C}1$. Por eso el cloro queda en meta respecto del $\\text{COOH}$." },
          { paso: "Fórmula: $\\text{HOOC-C}_6\\text{H}_4\\text{-Cl}$, con $\\text{C}_6\\text{H}_4$ (el anillo con 2 sustituyentes), $\\text{Cl}$ en $\\text{C}3$ y $\\text{COOH}$ en $\\text{C}1$. Fórmula molecular $\\text{C}_7\\text{H}_5\\text{ClO}_2$.", porque: "El anillo de benceno pierde 2 $\\text{H}$ al unirse al $\\text{COOH}$ y al $\\text{Cl}$, así que queda como $\\text{C}_6\\text{H}_4$ con 2 sustituyentes. Al sumar el $\\text{C}$ del $\\text{COOH}$, la fórmula molecular resulta $\\text{C}_7\\text{H}_5\\text{ClO}_2$. Entonces $\\text{HOOC-C}_6\\text{H}_4\\text{-Cl}$ describe el compuesto completo." }
        ],
        resultado: "$\\text{HOOC-C}_6\\text{H}_4\\text{-Cl}$ con Cl en meta ($\\text{C}_7\\text{H}_5\\text{ClO}_2$)."
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
          { paso: "$\\text{H}_2\\text{O}_2$: $$2 \\times (+1) + 2 \\times \\text{O} = 0 \\rightarrow \\text{O} = -1$$. El $\\text{O}$ tiene $-1$ en peróxidos porque forma un enlace $\\text{O-O}$.", porque: "Los 2 $\\text{O}$ del $\\text{H}_2\\text{O}_2$ están unidos entre sí, y el enlace $\\text{O-O}$ se reparte igual entre ambos, así que no se les asigna el nº habitual de los óxidos. Con 2 $\\text{H}$ ($+1$ cada uno), el total debe dar 0. Por eso cada $\\text{O}$ queda en $-1$, que es el nº característico de los peróxidos." },
          { paso: "$\\text{OF}_2$: el $\\text{F}$ (EN $4{,}0$) es más electronegativo que el $\\text{O}$ (EN $3{,}5$), así que el $\\text{F}$ tiene nº $-1$: $$2 \\times (-1) + \\text{O} = 0 \\rightarrow \\text{O} = +2$$", porque: "Los nº se asignan según la electronegatividad: el $\\text{F}$ ($4{,}0$) es más electronegativo que el $\\text{O}$ ($3{,}5$), así que el $\\text{F}$ queda con $-1$. Con 2 $\\text{F}$ ($-1$ cada uno), el $\\text{O}$ debe quedar en $+2$ para que la molécula sea neutra. Por eso el $\\text{O}$ del $\\text{OF}_2$ tiene nº positivo." },
          { paso: "$\\text{K}_2\\text{Cr}_2\\text{O}_7$: $$2 \\times (+1) + 2 \\times \\text{Cr} + 7 \\times (-2) = 0 \\rightarrow 2\\ \\text{Cr} = +12 \\rightarrow \\text{Cr} = +6$$", porque: "Sumamos 2 $\\text{K}$ ($+1$ cada uno), 2 $\\text{Cr}$ y 7 $\\text{O}$ ($-2$ cada uno), y el total debe dar 0. Así obtenemos $2\\ \\text{Cr} = +12$. Como hay 2 $\\text{Cr}$, el total de $+12$ se reparte entre ambos, y el $\\text{Cr}$ queda en $+6$." }
        ],
        resultado: "$\\text{O}$ en $\\text{H}_2\\text{O}_2 = -1$; $\\text{O}$ en $\\text{OF}_2 = +2$; $\\text{Cr}$ en $\\text{K}_2\\text{Cr}_2\\text{O}_7 = +6$."
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
          { paso: "Cloruro de hierro(II): $\\text{Fe}^{2+}$ y $\\text{Cl}^-$ $\\rightarrow$ $\\text{FeCl}_2$.", porque: "El $\\text{Fe}^{2+}$ tiene carga $2+$ y el $\\text{Cl}^-$ tiene $1-$, así que hacen falta 2 $\\text{Cl}^-$ por cada $\\text{Fe}^{2+}$ para neutralizar la carga. El subíndice 2 del $\\text{Cl}$ se obtiene al igualar las cargas. Por eso la fórmula queda $\\text{FeCl}_2$." },
          { paso: "Cloruro férrico (= cloruro de hierro(III)): $\\text{Fe}^{3+}$ y $\\text{Cl}^-$ $\\rightarrow$ $\\text{FeCl}_3$.", porque: "En la nomenclatura tradicional el sufijo 'férrico' indica el catión de mayor carga, $\\text{Fe}^{3+}$. Como cada $\\text{Cl}^-$ aporta $1-$, hacen falta 3 aniones. Entonces la fórmula es $\\text{FeCl}_3$." },
          { paso: "Sulfuro de hierro(III): $\\text{Fe}^{3+}$ y $\\text{S}^{2-}$ $\\rightarrow$ $\\text{Fe}_2\\text{S}_3$ ($2 \\times 3^+ = 6^+$ y $3 \\times 2^- = 6^-$).", porque: "Con $\\text{Fe}^{3+}$ y $\\text{S}^{2-}$ hay que igualar la carga total, y el mínimo común múltiplo de 3 y 2 es 6. Así 2 $\\text{Fe}^{3+}$ ($6+$) y 3 $\\text{S}^{2-}$ ($6-$) quedan neutros. Por eso la fórmula es $\\text{Fe}_2\\text{S}_3$." }
        ],
        resultado: "$\\text{FeCl}_2$, $\\text{FeCl}_3$ y $\\text{Fe}_2\\text{S}_3$."
      },
      {
        parte: "b)",
        pasos: [
          { paso: "El romano (II) o 'férrico' indica el nº de oxidación del $\\text{Fe}$: $+2$ en el cloruro ferroso y $+3$ en el férrico y en el sulfuro de hierro(III).", porque: "En la nomenclatura de Stock el número romano indica el nº de oxidación del catión: (II) para $\\text{Fe}^{2+}$ y (III) para $\\text{Fe}^{3+}$. El 'ferroso' y el 'férrico' de la tradicional expresan lo mismo. Por eso el nº de oxidación se lee directamente del nombre." }
        ],
        resultado: "$\\text{Fe}$ $+2$ en $\\text{FeCl}_2$; $\\text{Fe}$ $+3$ en $\\text{FeCl}_3$ y $\\text{Fe}_2\\text{S}_3$."
      },
      {
        parte: "c)",
        pasos: [
          { paso: "$$M(\\text{FeCl}_3) = 55{,}85 + 3 \\times 35{,}45 = 162{,}20\\ \\text{g/mol}$$", porque: "La masa molar se calcula sumando las masas atómicas de cada átomo de la fórmula: 1 $\\text{Fe}$ y 3 $\\text{Cl}$. Con $55{,}85$ para el $\\text{Fe}$ y $35{,}45$ para cada $\\text{Cl}$, obtenemos $162{,}20\\ \\text{g/mol}$. Conviene usar todos los decimales en esta etapa para no acumular error de redondeo." },
          { paso: "$$m = n \\times M = 0{,}500\\ \\text{mol} \\times 162{,}20\\ \\text{g/mol} = 81{,}10\\ \\text{g}$$", porque: "Usamos $m = n \\times M$, multiplicando los $0{,}500\\ \\text{mol}$ por la masa molar de $162{,}20\\ \\text{g/mol}$. Así pasamos de moles a gramos, que es la unidad que pide el problema. Con eso obtenemos $81{,}10\\ \\text{g}$." },
          { paso: "Cifras significativas: el dato $0{,}500\\ \\text{mol}$ tiene 3 cifras, así que el resultado es $81{,}1\\ \\text{g}$.", porque: "Para informar el resultado usamos la cantidad de cifras significativas del dato menos preciso. El dato $0{,}500\\ \\text{mol}$ tiene 3 cifras, así que el resultado se redondea a $81{,}1\\ \\text{g}$. Entonces la masa de $\\text{FeCl}_3$ queda con 3 cifras significativas." }
        ],
        resultado: "$m = 81{,}1\\ \\text{g}$ de $\\text{FeCl}_3$."
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
          { paso: "$\\text{ClO}_2^-$: $x + 2 \\times (-2) = -1 \\rightarrow x = +3$. $\\text{ClO}_3^-$: $x + 3 \\times (-2) = -1 \\rightarrow x = +5$. $\\text{ClO}_4^-$: $x + 4 \\times (-2) = -1 \\rightarrow x = +7$.", porque: "Para un ion, la suma de los nº de oxidación de sus átomos es igual a su carga, y no a 0. Con $x + 2 \\times (-2) = -1$ despejamos el $\\text{Cl}$ en $\\text{ClO}_2^-$, y obtenemos $x = +3$. El mismo criterio se aplica a $\\text{ClO}_3^-$ y $\\text{ClO}_4^-$, con sus respectivos subíndices de $\\text{O}$." }
        ],
        resultado: "$\\text{Cl}$: $+3$ en $\\text{ClO}_2^-$, $+5$ en $\\text{ClO}_3^-$, $+7$ en $\\text{ClO}_4^-$."
      },
      {
        parte: "b)",
        pasos: [
          { paso: "$\\text{HClO}_2$ ($\\text{Cl}$ $+3$): ácido cloroso (tradicional); IUPAC: clorato(III) de hidrógeno.", porque: "El sufijo 'oso' corresponde al menor nº de oxidación de la serie, que en este caso es $+3$. En IUPAC ese mismo nº se escribe con número romano dentro del nombre del anión. Por eso el $\\text{HClO}_2$ también se nombra clorato(III) de hidrógeno." },
          { paso: "$\\text{HClO}_3$ ($\\text{Cl}$ $+5$): ácido clórico; IUPAC: clorato(V) de hidrógeno.", porque: "El sufijo 'ico' corresponde al nº $+5$ de la serie, así que el $\\text{HClO}_3$ es ácido clórico. En la nomenclatura IUPAC el mismo nº se escribe como (V). Entonces el nombre sistemático resulta clorato(V) de hidrógeno." },
          { paso: "$\\text{HClO}_4$ ($\\text{Cl}$ $+7$): ácido perclórico (el prefijo 'per-' indica el nº mayor); IUPAC: clorato(VII) de hidrógeno.", porque: "El prefijo 'per' con el sufijo 'ico' indica un nº de oxidación mayor que el del clórico. Aquí el $\\text{Cl}$ tiene $+7$, y en IUPAC se escribe como (VII). Por eso el nombre sistemático es clorato(VII) de hidrógeno." }
        ],
        resultado: "$\\text{HClO}_2$: ácido cloroso / clorato(III) de hidrógeno; $\\text{HClO}_3$: ácido clórico / clorato(V) de hidrógeno; $\\text{HClO}_4$: ácido perclórico / clorato(VII) de hidrógeno."
      },
      {
        parte: "c)",
        pasos: [
          { paso: "$\\text{NaClO}_2$: clorito de sodio (IUPAC: clorato(III) de sodio). $\\text{NaClO}_3$: clorato de sodio (IUPAC: clorato(V) de sodio). $\\text{NaClO}_4$: perclorato de sodio (IUPAC: clorato(VII) de sodio).", porque: "El catión $\\text{Na}^+$ se combina con cada anión monovalente ($\\text{ClO}_2^-$, $\\text{ClO}_3^-$ o $\\text{ClO}_4^-$), por lo que cada fórmula lleva 1 $\\text{Na}$. El nombre sigue la serie del ácido correspondiente: clorito para el de menor nº, clorato para el intermedio y perclorato para el de mayor nº. Así cada sal queda nombrada según su anión." }
        ],
        resultado: "$\\text{NaClO}_2$ (clorito de sodio), $\\text{NaClO}_3$ (clorato de sodio), $\\text{NaClO}_4$ (perclorato de sodio)."
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
          { paso: "El ácido carboxílico ($\\text{COOH}$) tiene prioridad: el $\\text{C}$ del $\\text{COOH}$ es el $\\text{C}1$ de una cadena de 5 $\\text{C}$.", porque: "El $\\text{COOH}$ es el grupo de mayor prioridad, así que su carbono se numera como $\\text{C}1$ y la cadena de 5 $\\text{C}$ se cuenta desde allí. Los demás grupos se ubican después, siguiendo esa referencia. Por eso la cadena queda numerada desde el ácido." },
          { paso: "La cetona ($\\text{C=O}$) está en $\\text{C}4$, y el $\\text{C}5$ es un $\\text{CH}_3$: $\\text{HOOC-CH}_2\\text{-CH}_2\\text{-CO-CH}_3$.", porque: "El $\\text{C=O}$ queda en $\\text{C}4$ y el metilo final en $\\text{C}5$. Con $\\text{C}1$ ($\\text{COOH}$), $\\text{C}2$ y $\\text{C}3$ como $\\text{CH}_2$, $\\text{C}4$ como $\\text{C=O}$ y $\\text{C}5$ como $\\text{CH}_3$, se arma la cadena. Así se obtiene $\\text{HOOC-CH}_2\\text{-CH}_2\\text{-CO-CH}_3$." },
          { paso: "Grupos funcionales: ácido carboxílico (principal) y cetona (secundaria, nombrada como prefijo 'oxo').", porque: "El ácido carboxílico es el grupo principal, así que la cetona no puede usar el sufijo y se nombra como prefijo 'oxo'. Identificar ambos grupos es necesario para nombrar el compuesto y para predecir su comportamiento. Por eso se indican los dos grupos funcionales." }
        ],
        resultado: "$\\text{HOOC-CH}_2\\text{-CH}_2\\text{-CO-CH}_3$ ($\\text{C}_5\\text{H}_8\\text{O}_3$); grupos ácido carboxílico y cetona."
      },
      {
        parte: "b)",
        pasos: [
          { paso: "$\\text{CH}_3\\text{-CO-NH-CH}_3$ tiene el grupo $\\text{CO-NH}$: es una amida. La parte acilo es $\\text{CH}_3\\text{-CO-}$, de 2 $\\text{C}$ (acetamida).", porque: "El grupo $\\text{CO-NH}$ es el característico de las amidas, así que la función se identifica a partir de ese grupo. El $\\text{C}$ del carbonilo cuenta en la cadena base, y la parte acilo $\\text{CH}_3\\text{-CO-}$ tiene 2 $\\text{C}$. Por eso el nombre base es etanamida, también llamada acetamida." },
          { paso: "El metilo unido al $\\text{N}$ se indica con el localizador $N$-: $N$-metiletanamida (o $N$-metilacetamida).", porque: "El metilo unido al $\\text{N}$ no recibe un localizador de carbono, sino el localizador $N$-. Por eso se escribe $N$-metil delante del nombre base. El resultado es $N$-metiletanamida, también llamada $N$-metilacetamida." }
        ],
        resultado: "$N$-metiletanamida ($N$-metilacetamida), grupo funcional amida."
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
          { paso: "Cadena de 5 $\\text{C}$ con un doble enlace y un triple enlace. La numeración posible da localizadores $\\{1,4\\}$ en ambos sentidos: el doble en 1 y el triple en 4 (pent-1-en-4-ino) o el triple en 1 y el doble en 4 (pent-4-en-1-ino).", porque: "La cadena tiene 5 $\\text{C}$ con un doble y un triple enlace. Los localizadores posibles dan $\\{1,4\\}$ en ambos sentidos, así que la numeración por sí sola no decide. Por eso comparamos los dos sentidos antes de elegir: el doble en 1 y el triple en 4, o al revés." },
          { paso: "Se elige el sentido que da el localizador más bajo al doble enlace (ene), porque cuando hay empate en el conjunto de locantes el doble enlace tiene prioridad sobre el triple.", porque: "Cuando el conjunto de localizadores es igual, el doble enlace recibe el número más bajo, porque tiene prioridad sobre el triple. Esa regla lleva al nombre pent-1-en-4-ino y no al otro. Así se resuelve el empate entre los dos sentidos." },
          { paso: "Nombre: pent-1-en-4-ino.", porque: "Escribimos los localizadores de cada insaturación: 1-en para el doble y 4-ino para el triple, con 'pent' por los 5 C. Conviene verificar que 'en' vaya antes que 'ino' en el nombre. Por eso el resultado final es pent-1-en-4-ino." }
        ],
        resultado: "pent-1-en-4-ino (no pent-4-en-1-ino)."
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Ciclopenteno: anillo de 5 $\\text{C}$ con un doble enlace ($\\text{C}_5\\text{H}_8$). Al reemplazar un $\\text{H}$ por $\\text{CH}_3$ en el $\\text{C}1$ se agrega un $\\text{CH}_2$.", porque: "El ciclopenteno tiene 5 $\\text{C}$ en el anillo y un doble enlace, con fórmula $\\text{C}_5\\text{H}_8$. Al reemplazar un $\\text{H}$ del anillo por un $\\text{CH}_3$ se suma un carbono, porque el metilo agrega un $\\text{C}$ y el reemplazo quita un $\\text{H}$. Por eso la fórmula cambia en ese carbono adicional." },
          { paso: "Fórmula molecular: $\\text{C}_6\\text{H}_{10}$.", porque: "Se suma el $\\text{CH}_2$ agregado al $\\text{C}_5\\text{H}_8$ del ciclopenteno, y así se obtiene $\\text{C}_6\\text{H}_{10}$. Como comprobación, la estructura tiene un anillo y un doble enlace, que es lo que corresponde a esa fórmula. Por eso el 1-metilciclopenteno es $\\text{C}_6\\text{H}_{10}$." }
        ],
        resultado: "1-metilciclopenteno = $\\text{C}_6\\text{H}_{10}$."
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
          { paso: "Ácido sulfuroso: $\\text{H}_2\\text{SO}_3$. Con $\\text{H}$ $+1$ y $\\text{O}$ $-2$: $$2 \\times (+1) + \\text{S} + 3 \\times (-2) = 0 \\rightarrow \\text{S} = +4$$", porque: "En el $\\text{H}_2\\text{SO}_3$ cada $\\text{H}$ aporta $+1$ y cada $\\text{O}$ aporta $-2$. Para que la suma sea 0, el $\\text{S}$ debe tener $+4$. El nombre 'sulfuroso' corresponde al menor nº del azufre en los oxoácidos, y el cálculo lo confirma." },
          { paso: "Sulfito de sodio: $\\text{Na}_2\\text{SO}_3$. Con $\\text{Na}$ $+1$: $$2 \\times (+1) + \\text{S} + 3 \\times (-2) = 0 \\rightarrow \\text{S} = +4$$", porque: "El sulfito conserva el mismo nº de oxidación del $\\text{S}$ que el ácido, porque en la sal solo cambian los cationes. Con 2 $\\text{Na}$ ($+1$ cada uno) y 3 $\\text{O}$ ($-2$ cada uno), el $\\text{S}$ resulta $+4$. Así el azufre mantiene su nº en ambas especies." },
          { paso: "Sulfato de cinc: $\\text{ZnSO}_4$. Con $\\text{Zn}$ $+2$: $$+2 + \\text{S} + 4 \\times (-2) = 0 \\rightarrow \\text{S} = +6$$", porque: "En el $\\text{ZnSO}_4$ el $\\text{Zn}^{2+}$ aporta $+2$ y los 4 $\\text{O}$ aportan su carga negativa, así que el $\\text{S}$ debe ser $+6$. Es el nº del azufre en el sulfato, que corresponde al ácido sulfúrico ('ico'). Por eso no debe confundirse con el del sulfuroso." }
        ],
        resultado: "$\\text{H}_2\\text{SO}_3$ ($\\text{S}$ $+4$), $\\text{Na}_2\\text{SO}_3$ ($\\text{S}$ $+4$), $\\text{ZnSO}_4$ ($\\text{S}$ $+6$)."
      },
      {
        parte: "b)",
        pasos: [
          { paso: "$\\text{Fe}(\\text{NO}_3)_3$: cada anión $\\text{NO}_3^-$ tiene carga $-1$, y hay 3 → total $-3$. Para neutralidad, $\\text{Fe}^{3+}$: $\\text{Fe}$ con nº $+3$.", porque: "En $\\text{Fe}(\\text{NO}_3)_3$ hay 3 nitratos, cada uno con carga $-1$, lo que da $-3$ en total. Para que la sal sea neutra el hierro debe tener $+3$. Por eso el nº de oxidación del $\\text{Fe}$ es $+3$." },
          { paso: "Nombre: nitrato de hierro(III) (o nitrato férrico).", porque: "El nombre de Stock incluye el número romano (III) para el nº de oxidación del hierro, mientras que la tradicional usa 'férrico'. Ambos nombres describen el mismo compuesto. Por eso nitrato de hierro(III) y nitrato férrico son válidos." }
        ],
        resultado: "$\\text{Fe}(\\text{NO}_3)_3$ = nitrato de hierro(III); $\\text{Fe}$ con nº $+3$."
      },
      {
        parte: "c)",
        pasos: [
          { paso: "$\\text{H}_2\\text{SO}_3 + 2\\ \\text{NaOH} \\rightarrow \\text{Na}_2\\text{SO}_3 + 2\\ \\text{H}_2\\text{O}$.", porque: "El ácido sulfuroso es diprótico: tiene 2 $\\text{H}$ que se neutralizan con 2 $\\text{OH}^-$. Por eso se necesitan 2 $\\text{NaOH}$ y se forman 2 $\\text{H}_2\\text{O}$. El balance de 1 $\\text{S}$, 2 $\\text{Na}$, 4 $\\text{H}$ y 5 $\\text{O}$ confirma los coeficientes, porque cada elemento queda igual a ambos lados." },
          { paso: "La sal formada es el sulfito de sodio.", porque: "El anión sulfito ($\\text{SO}_3^{2-}$) proviene del ácido sulfuroso, cuyo sufijo es 'oso'. Como el catión es el $\\text{Na}^+$ del $\\text{NaOH}$, la sal se nombra sulfito de sodio. Por eso el producto de la reacción es $\\text{Na}_2\\text{SO}_3$." }
        ],
        resultado: "$\\text{H}_2\\text{SO}_3 + 2\\ \\text{NaOH} \\rightarrow \\text{Na}_2\\text{SO}_3 + 2\\ \\text{H}_2\\text{O}$; sal = sulfito de sodio."
      },
      {
        parte: "d)",
        pasos: [
          { paso: "$$M(\\text{Na}_2\\text{SO}_3) = 2 \\times 22{,}99 + 32{,}06 + 3 \\times 16{,}00 = 126{,}04\\ \\text{g/mol}$$", porque: "Sumamos las masas atómicas de todos los átomos de la fórmula: 2 $\\text{Na}$, 1 $\\text{S}$ y 3 $\\text{O}$. Con $22{,}99$, $32{,}06$ y $16{,}00$, obtenemos $126{,}04\\ \\text{g/mol}$. Usar los valores con decimales asegura un resultado preciso en el paso siguiente." },
          { paso: "Por la reacción 1:1 entre $\\text{H}_2\\text{SO}_3$ y $\\text{Na}_2\\text{SO}_3$, $$n\\,(\\text{Na}_2\\text{SO}_3) = n\\,(\\text{H}_2\\text{SO}_3) = 0{,}0250\\ \\text{mol}$$", porque: "En la reacción los coeficientes son 1:1 entre $\\text{H}_2\\text{SO}_3$ y $\\text{Na}_2\\text{SO}_3$, así que la misma cantidad de moles de reactivo produce la misma cantidad de sal. Con $0{,}0250\\ \\text{mol}$ de $\\text{H}_2\\text{SO}_3$ se obtienen $0{,}0250\\ \\text{mol}$ de $\\text{Na}_2\\text{SO}_3$. Como el rendimiento es del $100\\%$, no se pierde producto en el proceso." },
          { paso: "$$m = 0{,}0250\\ \\text{mol} \\times 126{,}04\\ \\text{g/mol} = 3{,}151\\ \\text{g}$$, es decir $3{,}15\\ \\text{g}$ (3 cifras, como el dato $0{,}0250\\ \\text{mol}$).", porque: "Calculamos $m = n \\times M$, multiplicando $0{,}0250\\ \\text{mol}$ por $126{,}04\\ \\text{g/mol}$. El resultado $3{,}151\\ \\text{g}$ se redondea a $3{,}15\\ \\text{g}$, porque el dato de moles tiene 3 cifras significativas. Por eso la masa obtenida es $3{,}15\\ \\text{g}$." }
        ],
        resultado: "$m(\\text{Na}_2\\text{SO}_3) = 3{,}15\\ \\text{g}$."
      }
    ],
    errores_tipicos: [
      { error: "Asignar +6 al S del H2SO3 porque lo confunde con el H2SO4.", como_evitar: "Calculá por separado para cada especie: en H2SO3 el S es +4." },
      { error: "Escribir H2SO3 + NaOH -> Na2SO3 + H2O sin balancear.", como_evitar: "Un ácido diprótico necesita 2 NaOH y produce 2 H2O: contá los H antes de balancear." }
    ]
  }
];
