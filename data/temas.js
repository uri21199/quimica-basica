window.TEMAS = [
  {
    id: "repaso",
    titulo: "Repaso matemático: notación científica, cifras significativas y logaritmos",
    fuentes: ["G0"],
    resumen: "Herramientas matemáticas que se usan en todo el curso: notación científica, cifras significativas, logaritmos y conversiones de unidades del SI. Si fallan estas cuentas, fallan después los moles, el pH y la termoquímica, aunque el planteo químico esté bien.",
    conceptos: [
      { titulo: "Notación científica", texto: "Un número se escribe como b × 10^n con 1 ≤ b < 10. Para sumar o restar, primero se igualan los exponentes (2,4×10³ + 7,1×10² = 24×10² + 7,1×10² = 31,1×10² = 3,11×10³). Para multiplicar se multiplican las mantisas y se suman los exponentes; para dividir, se dividen y se restan los exponentes." },
      { titulo: "Cifras significativas", texto: "Todo dígito distinto de cero es significativo, y también los ceros que quedan entre dígitos significativos. Los ceros a la izquierda del primer dígito no lo son (0,029 g tiene 2 cifras). En números sin coma como 200 mL la cantidad es ambigua, por eso se usa notación científica: 2×10² tiene 1 cifra, 2,0×10² tiene 2 y 2,00×10² tiene 3. El resultado de un cálculo se informa con la cantidad de cifras de los datos menos precisos." },
      { titulo: "Logaritmos", texto: "El log de un número es el exponente al que hay que elevar 10 para obtener ese número. No existe el log de cero ni el de un número negativo. Propiedades: log(a·b) = log a + log b; log(a/b) = log a − log b; log(a^b) = b·log a. Para un número menor que 1 el log es negativo (log 4,5×10⁻³ = −2,347). Para despejar x de log x = y, x = 10^y." },
      { titulo: "Prefijos del SI", texto: "Mega 10⁶, kilo 10³, hecto 10², deca 10¹, deci 10⁻¹, centi 10⁻², mili 10⁻³, micro 10⁻⁶, nano 10⁻⁹, pico 10⁻¹². El ångström (Å) vale 10⁻¹⁰ m. Atención: la tabla de prefijos de la guía está corrida (dice mili = 10⁻² y micro = 10⁻³); la versión correcta es esta." },
      { titulo: "Conversiones de unidades usuales", texto: "1 dm³ = 1 L = 1000 mL y 1 mL = 1 cm³. Presión: 1 atm = 760 mmHg = 760 torr = 1013 hPa = 101,32 kPa. Temperatura: T(K) = t(°C) + 273,15, y 0 °C equivale a 273,15 K. Densidad: d = m/V, en g/cm³ o kg/m³ (1 g/cm³ = 1000 kg/m³)." }
    ],
    formulas: [
      "N = b × 10^n   con 1 ≤ b < 10",
      "log(a·b) = log a + log b ;  log(a/b) = log a − log b ;  log(a^b) = b·log a",
      "1 atm = 760 mmHg = 760 torr = 1013 hPa = 101,32 kPa",
      "T (K) = t (°C) + 273,15",
      "1 dm³ = 1 L ;  1 mL = 1 cm³ ;  1 Å = 10⁻¹⁰ m",
      "d = m / V   (g/cm³ ; kg/m³)"
    ],
    errores_tipicos: [
      { error: "Contar mal las cifras significativas: decir que 0,0040 kg tiene 4 cifras, o que 200 mL tiene 3 sin aclararlo.", como_evitar: "Los ceros a la izquierda no cuentan. Los ceros finales sin coma son ambiguos: expresá el número en notación científica antes de contar." },
      { error: "Convertir mal entre prefijos, por ejemplo pasar cm³ a m³ multiplicando por 10³ en lugar de 10⁻⁶.", como_evitar: "Pasá por la base: 1 cm = 10⁻² m, entonces 1 cm³ = (10⁻²)³ m³ = 10⁻⁶ m³. Usá la tabla corregida de esta sección." },
      { error: "Sumar mantisas sin igualar exponentes: 2,4×10³ + 7,1×10² = 9,5×10³.", como_evitar: "Escribí los dos números con el mismo exponente: 24×10² + 7,1×10² = 31,1×10² = 3,11×10³." },
      { error: "Olvidar el signo en un logaritmo de número menor que 1: log(4,5×10⁻³) = +2,347.", como_evitar: "log(b×10^n) = log b + n. Comprobá el resultado elevando 10 a ese valor: debe dar el número original." },
      { error: "Restar 273 a la temperatura en °C en lugar de sumar, o dejar la temperatura en °C dentro de una ley de gases.", como_evitar: "Siempre sumá: 25 °C = 298 K. Antes de usar PV = nRT verificá que T esté en kelvin." }
    ]
  },
  {
    id: "materia",
    titulo: "Sistemas materiales: propiedades, clasificación y métodos de separación",
    fuentes: ["T01"],
    resumen: "Introduce el vocabulario base del curso: qué es un sistema material, cómo se clasifica (homogéneo, heterogéneo, sustancia pura, mezcla) y qué método sirve para separar cada tipo de mezcla. Aparece en casi todos los parciales como preguntas conceptuales y de clasificación.",
    conceptos: [
      { titulo: "Propiedades", texto: "Las propiedades extensivas dependen de la cantidad de materia (masa, volumen). Las intensivas no dependen del tamaño de la muestra (temperatura de ebullición, densidad, color). Las físicas se observan sin cambiar la composición (color, dureza, punto de fusión); las químicas describen cómo cambia la composición en una reacción (combustibilidad)." },
      { titulo: "Homogéneo y heterogéneo", texto: "Un sistema homogéneo tiene las mismas propiedades intensivas en todos sus puntos y una sola fase. Un sistema heterogéneo tiene más de una fase separada por interfases. Una fase es una porción microscópicamente homogénea. Un sistema inhomogéneo tiene propiedades que varían de forma gradual, sin interfases." },
      { titulo: "Sustancias y mezclas", texto: "Una sustancia pura tiene composición fija, puede ser simple (un solo elemento: O2, Fe, O3) o compuesta (dos o más elementos: H2O, NaCl). Una mezcla tiene dos o más sustancias. Una mezcla homogénea se llama solución o disolución (sal disuelta en agua); una mezcla heterogénea se distingue a simple vista o al ultramicroscopio (agua y aceite)." },
      { titulo: "Atomicidad", texto: "La atomicidad es el número de átomos de un mismo elemento en una molécula. En el H2O, la atomicidad del H es 2 y la del O es 1. Se refiere a cada elemento por separado, no a la molécula completa." },
      { titulo: "Métodos de separación", texto: "Los métodos mecánicos separan fases de una mezcla heterogénea sin transformación física (tamizado, filtración, decantación, centrifugación, separación magnética, flotación). Los métodos físicos separan los componentes de una solución con cambio de estado y sin reacción (destilación, cristalización, evaporación, cromatografía). Los métodos químicos descomponen un compuesto mediante reacciones." }
    ],
    formulas: [
      "Atomicidad = número de átomos de un elemento en una molécula (subíndice de ese elemento)",
      "Propiedad extensiva: depende de la cantidad (masa, volumen)  |  intensiva: no depende (T de ebullición, densidad)",
      "d = m / V   (g/cm³)",
      "Sistema material = porción de materia que se aísla para su estudio"
    ],
    errores_tipicos: [
      { error: "Decir que una mezcla homogénea es una sustancia pura porque 'se ve uniforme'. Por ejemplo, agua con sal.", como_evitar: "Una solución es una mezcla homogénea de dos o más sustancias. Una sustancia pura tiene composición fija." },
      { error: "Confundir sistema homogéneo con sustancia pura: homogéneo significa una sola fase, no necesariamente una sola sustancia.", como_evitar: "Preguntate cuántas fases hay (homogéneo o heterogéneo) y, por separado, cuántas sustancias hay (pura o mezcla)." },
      { error: "Elegir un método de separación sin mirar si la mezcla es homogénea o heterogénea. Por ejemplo, filtrar una sal disuelta en agua.", como_evitar: "Los métodos mecánicos sirven para mezclas heterogéneas. Para una solución hacen falta métodos físicos, como evaporar el solvente o destilar." },
      { error: "Calcular la atomicidad de la molécula completa: decir que la atomicidad del agua es 3.", como_evitar: "La atomicidad se da por elemento: H = 2, O = 1 en el H2O." },
      { error: "Clasificar mal una propiedad: tomar la densidad o la temperatura de ebullición como extensivas porque 'dependen de la materia'.", como_evitar: "Si la propiedad cambia al duplicar la muestra, es extensiva (masa, volumen). Si no cambia, es intensiva (densidad, punto de ebullición)." }
    ]
  },
  {
    id: "atomo",
    titulo: "Estructura atómica, configuración electrónica y tabla periódica",
    fuentes: ["T02", "T02B", "T02C"],
    resumen: "Explica qué tiene el átomo (protones, neutrones y electrones), cómo se distribuyen los electrones en orbitales y cómo esa distribución define la ubicación de un elemento en la tabla periódica y sus propiedades. Es la base para entender iones, uniones y tendencias periódicas.",
    conceptos: [
      { titulo: "Partículas subatómicas", texto: "El electrón tiene carga negativa y masa de 9,11×10⁻³¹ kg (despreciable frente a las otras). El protón tiene carga positiva y masa de 1,672×10⁻²⁷ kg, y el neutrón no tiene carga y masa de 1,675×10⁻²⁷ kg; ambos están en el núcleo y su masa no es despreciable. El número atómico Z es el número de protones y define al elemento. El número másico A = Z + N." },
      { titulo: "Isótopos, isóbaros e iones", texto: "Isótopos son átomos del mismo elemento (mismo Z) con distinto número de neutrones (distinto A). Isóbaros tienen el mismo A y distinto Z. Un catión se forma al perder electrones y un anión al ganarlos: carga = Z − número de electrones. Radios: R(catión) < R(átomo) < R(anión)." },
      { titulo: "Masa atómica promedio", texto: "La masa atómica que figura en la tabla es el promedio ponderado de las masas de los isótopos naturales del elemento, expresado en unidades de masa atómica (u, Dalton). Por eso no es un número entero, aunque A sí lo es." },
      { titulo: "Números cuánticos y reglas de llenado", texto: "n (principal) define el tamaño y el nivel de energía; l (azimutal) define la forma del subnivel (0 = s, 1 = p, 2 = d, 3 = f) y va de 0 a n−1; m va de −l a +l; s vale +1/2 o −1/2. Reglas: mínima energía (se llenan primero los subniveles de menor energía, por ejemplo 4s antes que 3d), exclusión de Pauli (máximo dos electrones por orbital con espines opuestos) y Hund (electrones desapareados con igual energía antes de aparear)." },
      { titulo: "Configuración electrónica externa y ubicación", texto: "La CEE son los electrones del nivel más externo (valencia). El período coincide con el n más alto. El grupo se determina por el último electrón: en un orbital s, el grupo es el número de electrones de la CEE; en un orbital p, es ese número + 10; en un orbital d, es la suma de electrones de s y d. Ejemplo: Co, 4s² 3d⁷, grupo 9 y período 4." },
      { titulo: "Propiedades periódicas", texto: "El radio atómico aumenta al bajar en un grupo y disminuye al avanzar en un período. La energía de ionización aumenta hacia la derecha y hacia arriba. La electronegatividad (escala con H = 2,1) va de 0,7 (Fr) a 4,0 (F). El carácter metálico aumenta hacia abajo y hacia la izquierda. Mendeleev ordenó por masa atómica; Moseley, por número atómico." }
    ],
    formulas: [
      "A = Z + N   ;   Z = número de protones   ;   carga del ion = Z − nº de electrones",
      "masa atómica promedio = Σ (abundancia isotópica de cada isótopo × su masa) , en u",
      "1 u = 1,661×10⁻²⁴ g",
      "l = 0 … n−1  ;  m = −l … +l  ;  s = ±1/2  ;  máximo 2(2l+1) electrones por subnivel",
      "Orden de llenado: 1s 2s 2p 3s 3p 4s 3d 4p 5s 4d 5p 6s 4f 5d 6p ...",
      "Grupo: s → nº e⁻ de la CEE ; p → nº e⁻ de la CEE + 10 ; d → suma de e⁻ de s y d"
    ],
    errores_tipicos: [
      { error: "Quitar electrones del orbital 3d al formar un catión de transición (Fe²⁺ con 3d⁴ en lugar de 3d⁶).", como_evitar: "Al formar cationes de metales de transición se quitan primero los electrones del nivel más externo (4s) y después los de 3d." },
      { error: "Confundir el número másico A con la masa atómica de la tabla: decir que el cloro tiene A = 35,45.", como_evitar: "A es un entero (protones + neutrones) de un isótopo concreto. La masa atómica de la tabla es un promedio y no es entera." },
      { error: "Confundir grupo y período al ubicar un elemento: decir que el período es la columna.", como_evitar: "El período es la fila y coincide con el n más alto de la CEE. El grupo es la columna y se obtiene del último electrón." },
      { error: "Tomar el catión como más grande que el átomo, por ejemplo decir que R(Na⁺) > R(Na).", como_evitar: "El catión pierde electrones y su radio se achica. Recordá: R(catión) < R(átomo) < R(anión)." },
      { error: "Escribir una configuración sin respetar Pauli o Hund, por ejemplo 2p⁴ con los cuatro electrones en un solo orbital.", como_evitar: "Llená primero un electrón en cada orbital del subnivel (Hund) y después apareá, con máximo dos electrones por orbital." }
    ]
  },
  {
    id: "magnitudes",
    titulo: "Magnitudes atómico-moleculares: mol, masa atómica y masa molar",
    fuentes: ["T03"],
    resumen: "Conecta el mundo microscópico (átomos y moléculas) con el macroscópico (gramos, litros) mediante el mol y el número de Avogadro. Es la herramienta que usan las cuentas de estequiometría, gases y soluciones.",
    conceptos: [
      { titulo: "Mol y número de Avogadro", texto: "Un mol es la cantidad de sustancia que contiene 6,022×10²³ unidades elementales (átomos, moléculas, iones). Es la unidad de la magnitud cantidad de sustancia (n). El número de Avogadro (N_A) es el número de partículas por mol, no un número de gramos." },
      { titulo: "Masa atómica y masa molar", texto: "La masa atómica se expresa en u (Dalton): 1 u = 1,661×10⁻²⁴ g, o sea 1/N_A gramos. La masa molar M se expresa en g/mol y tiene el mismo valor numérico que la masa atómica o molecular, pero en otra unidad. Ejemplo: masa atómica del Fe = 55,85 u, y M(Fe) = 55,85 g/mol." },
      { titulo: "Masa molecular", texto: "Es la suma de las masas atómicas de todos los átomos de la molécula, multiplicadas por su atomicidad. Para el H2O: 2·1,01 u + 1·16,0 u = 18,0 u, entonces M(H2O) = 18,0 g/mol. Un mol de moléculas de agua pesa 18,0 g y contiene 6,022×10²³ moléculas." },
      { titulo: "Cantidad vs. número de partículas", texto: "La cantidad se mide en mol y el número en partículas. Para pasar de masa a cantidad se usa la masa molar: n = m / M. Para pasar de cantidad a número se usa N_A: N = n · N_A. En 24,3 g de Mg hay 1 mol de átomos, es decir, 6,022×10²³ átomos." },
      { titulo: "Densidad y volumen molar", texto: "La densidad relaciona masa y volumen: d = m/V. El volumen molar V_m = M/d es el volumen que ocupa un mol de sustancia (cm³/mol o dm³/mol). Por ejemplo, el mentol (M = 156,2 g/mol, d = 0,890 g/cm³) tiene V_m ≈ 176 cm³/mol." }
    ],
    formulas: [
      "n = m / M   (mol = g / (g/mol))",
      "N = n · N_A   ,   N_A = 6,022×10²³ mol⁻¹",
      "1 u = 1,661×10⁻²⁴ g = 1/N_A g",
      "m_molecular (u) = Σ (atomicidad × masa atómica de cada elemento)",
      "d = m / V   (g/cm³) ;  V_m = M / d   (cm³/mol)"
    ],
    errores_tipicos: [
      { error: "Usar u como si fuera gramo: decir que 1 molécula de agua pesa 18 g.", como_evitar: "18 u es la masa de una molécula. 18 g es la masa de un mol (6,022×10²³ moléculas). Diferencia de 23 órdenes de magnitud." },
      { error: "Calcular mal la masa molecular por no contar la atomicidad: para el H2O, 1,01 + 16,0 = 17,0 u.", como_evitar: "Multiplicá cada masa atómica por su subíndice: 2·1,01 + 16,0 = 18,0 u." },
      { error: "Confundir cantidad con número de partículas, por ejemplo decir 'tengo 2 de moles' o pasar de mol a átomos multiplicando por la masa molar.", como_evitar: "Mol es la unidad de cantidad. Para pasar a partículas se multiplica por N_A, no por M." },
      { error: "Usar la masa molar del elemento para una molécula diferente, por ejemplo tomar M(O) = 16 g/mol para calcular el peso de O2.", como_evitar: "Para O2, M = 2 × 16,0 = 32,0 g/mol. Siempre contá la atomicidad de la especie que te piden." },
      { error: "Mezclar unidades en el volumen molar, por ejemplo escribir V_m en cm³ y compararlo con 22,4 L/mol sin convertir.", como_evitar: "Llevá todo a la misma unidad: 1 dm³ = 1000 cm³ = 1 L." }
    ]
  },
  {
    id: "uniones",
    titulo: "Uniones químicas, estructuras de Lewis y forma de las moléculas",
    fuentes: ["T04A", "T04A2"],
    resumen: "Explica por qué se forman enlaces (iónico, metálico y covalente), cómo representarlos con estructuras de Lewis y cómo predecir la polaridad y la geometría de las moléculas con TREPEV, TEV y resonancia. Es la base para entender las fuerzas intermoleculares y las propiedades de las sustancias.",
    conceptos: [
      { titulo: "Tipos de unión", texto: "La unión iónica se da entre metal y no metal, con transferencia de electrones y atracción electrostática (redes iónicas, no forman moléculas). La unión metálica se da entre metales, con electrones deslocalizados (modelo del mar de electrones). La unión covalente se da entre no metales, con pares de electrones compartidos: simple, doble o triple, y covalente común o dativa. El criterio de diferencia de electronegatividad del apunte es mayor a 2 para iónico y menor a 2 para covalente." },
      { titulo: "Estructura de Lewis", texto: "Se representan los electrones de valencia de cada átomo (CEE). Los átomos terminales son H, halógenos y casi siempre O; los centrales son los menos electronegativos, como C. Se arma primero la estructura con uniones comunes hasta completar el octeto del átomo central, y luego se agregan las dativas. En iones se indican la carga y los corchetes." },
      { titulo: "Polaridad del enlace", texto: "La polaridad depende de la diferencia de electronegatividad: si los electrones se comparten de forma equitativa, el enlace es covalente no polar; si es inequitativa, es polar, con cargas parciales y un momento dipolar μ (en debye, D)." },
      { titulo: "TREPEV y geometría", texto: "Los pares de electrones de valencia alrededor del átomo central se repelen y se ubican lo más lejos posible. Los pares libres repelen más que los enlazantes. Con 4 pares (metano) la geometría es tetraédrica, de 109,5°. La polaridad total de la molécula es la suma vectorial de los dipolos de cada enlace, aplicando la regla del paralelogramo." },
      { titulo: "TEV: hibridación y resonancia", texto: "La teoría de enlace de valencia explica el enlace por solapamiento de orbitales: frontal forma enlace σ y lateral forma enlace π. Un enlace doble tiene 1σ + 1π y un triple tiene 1σ + 2π. La hibridación mezcla orbitales atómicos para explicar la geometría (sp³ tetraédrica, sp² trigonal, sp lineal). Cuando hay varias estructuras de Lewis posibles, la molécula es un híbrido de resonancia y no se parece a ninguna de ellas en particular." }
    ],
    formulas: [
      "Diferencia de electronegatividad: iónico si Δχ > 2 ; covalente si Δχ < 2 (criterio del apunte)",
      "Momento dipolar: μ = q · d   (unidad: debye, D)",
      "Geometría TREPEV: 2 pares → lineal 180° ; 3 pares → trigonal plana 120° ; 4 pares → tetraédrica 109,5°",
      "Hibridación: sp³ (4 σ, tetraédrica) ; sp² (3 σ + 1 p, trigonal) ; sp (2 σ + 2 p, lineal)",
      "Enlace simple = 1σ ; doble = 1σ + 1π ; triple = 1σ + 2π"
    ],
    errores_tipicos: [
      { error: "Dibujar más de un átomo central o poner el hidrógeno como átomo central; también empezar a dibujar por los terminales.", como_evitar: "El H siempre es terminal. El átomo central es el menos electronegativo; la estructura se arma desde el central hacia afuera." },
      { error: "Confundir un enlace covalente no polar con una molécula no polar: el CO2 tiene enlaces polares pero la molécula es apolar por su geometría lineal.", como_evitar: "Primero mirá la polaridad de cada enlace, después la geometría, y por último la suma vectorial de los dipolos." },
      { error: "Usar TREPEV contando solo los pares enlazantes, sin contar los pares libres del átomo central (por ejemplo, decir que el H2O es lineal).", como_evitar: "Contá todos los pares de electrones del átomo central: el H2O tiene 4 pares (2 enlazantes y 2 libres), geometría angular y no lineal." },
      { error: "Pensar que las estructuras de resonancia son distintas moléculas que se alternan en el tiempo.", como_evitar: "Las formas de resonancia son representaciones de una misma molécula. La molécula real es el híbrido de todas ellas." },
      { error: "Asignar enlace σ o π al tipo de enlace sin mirar la superposición: decir que un enlace doble es 2σ.", como_evitar: "Un enlace doble siempre tiene un σ (frontal) y un π (lateral). Un triple tiene un σ y dos π." }
    ]
  },
  {
    id: "nomenclatura",
    titulo: "Nomenclatura de compuestos inorgánicos y orgánicos",
    fuentes: ["T05", "T05B"],
    resumen: "Reglas para nombrar y escribir fórmulas de óxidos, ácidos, hidróxidos, sales, hidruros e hidrácidos (inorgánicos), y de hidrocarburos y grupos funcionales (orgánicos). Se usa la nomenclatura IUPAC y se reconoce la tradicional para leer los textos.",
    conceptos: [
      { titulo: "Número de oxidación", texto: "Es un entero que representa los electrones que un átomo cede (positivo) o gana (negativo) en un compuesto. O suele ser −2 (−1 en peróxidos), H suele ser +1 (−1 en hidruros metálicos), los alcalinos +1 y los alcalinotérreos +2. El sufijo 'oso' indica menor número de oxidación y 'ico' indica mayor." },
      { titulo: "Óxidos, hidróxidos y ácidos", texto: "Un óxido básico es metal + O y, con agua, da hidróxido (metal + OH). Un óxido ácido es no metal + O y, con agua, da oxoácido (H + no metal + O). En la IUPAC, el oxoácido se nombra 'no metal(nº ox) de hidrógeno' o 'ácido no metal-ico'. Un hidrácido no tiene oxígeno y se nombra 'ácido ... hídrico' (en solución acuosa)." },
      { titulo: "Sales", texto: "Las oxosales se forman por neutralización de un oxoácido con un hidróxido y se nombran 'anión (metal)' con los números de oxidación: sulfato(VI) de hierro(II). Las sales de hidrácidos terminan en 'uro'. Las sales ácidas y cuaternarias (bisulfato de sodio) conservan un H en el anión y usan el prefijo 'bi' en la tradicional." },
      { titulo: "Hidruros", texto: "Los hidruros metálicos se nombran 'hidruro de metal'. Los no metálicos se nombran 'uro de hidrógeno' (por ejemplo NH3, amoníaco, en su forma gaseosa). Cuando se disuelven en agua, los hidrácidos se nombran como ácidos." },
      { titulo: "Hidrocarburos y funciones orgánicas", texto: "Alcanos CnH2n+2 (sufijo -ano), alquenos CnH2n (-eno, doble enlace), alquinos CnH2n−2 (-ino, triple enlace), cicloalcanos CnH2n (prefijo ciclo-). Para cadenas ramificadas se toma la cadena más larga, se numera para que los sustituyentes tengan el localizador más bajo y se nombran los radicales (metil, etil) con prefijos di, tri. Funciones: alcohol (-ol), aldehído (-al), cetona (-ona), ácido carboxílico (-oico), éster (-oato de -ilo), amina (-amina), amida (-amida), éter (R-O-R') y nitrilo (-nitrilo)." }
    ],
    formulas: [
      "Óxido sistemático: prefijos mono-, di-, tri-... (ej.: trióxido de dihierro = Fe2O3) ; Stock: óxido de hierro(III)",
      "Oxoácido (IUPAC): no metal(nº ox) de hidrógeno  (ej.: sulfato(VI) de hidrógeno = H2SO4)",
      "Oxosal: anión + de + metal(nº ox) ; sales de hidrácidos: nombre con 'uro'",
      "Alcanos CnH2n+2 ; alquenos CnH2n ; alquinos CnH2n−2 ; cicloalcanos CnH2n",
      "Alcohol R–OH ; aldehído R–CHO ; cetona R–CO–R' ; ácido R–COOH ; éster R–COO–R' ; amina R–NH2 ; amida R–CONH2 ; nitrilo R–CN"
    ],
    errores_tipicos: [
      { error: "Confundir 'oso' con 'ico' y nombrar mal el óxido o el ácido: decir que SO3 es óxido sulfuroso.", como_evitar: "'Oso' es el menor número de oxidación y 'ico' el mayor. SO2 es sulfuroso (IV) y SO3 es sulfúrico (VI)." },
      { error: "Confundir sulfato con sulfito, o fosfato con fosfito, al escribir la fórmula de una sal.", como_evitar: "Primero hallá el nº de oxidación del central, después el anión (oso → ito, ico → ato) y recién después la sal." },
      { error: "Llamar 'ácido clorhídrico' al gas HCl puro, o 'cloruro de hidrógeno' a la solución acuosa.", como_evitar: "En estado gaseoso es cloruro de hidrógeno (uro de hidrógeno). En solución acuosa es ácido clorhídrico." },
      { error: "Numerar la cadena orgánica desde el extremo equivocado o no dar el localizador más bajo al grupo funcional.", como_evitar: "Numerá desde el extremo que da el número más bajo al grupo funcional principal (o al enlace múltiple), y después a los sustituyentes." },
      { error: "Usar orto, meta y para en un benceno con tres o más sustituyentes, o nombrar mal el ácido carboxílico sin contar el C del grupo COOH.", como_evitar: "o-, m- y p- solo sirven con dos sustituyentes. El C del COOH es el 1 de la cadena y se incluye en el conteo." }
    ]
  },
  {
    id: "gases",
    titulo: "Propiedades de los gases: leyes, ecuación de estado y gases reales",
    fuentes: ["T06A"],
    resumen: "Describe el comportamiento de los gases con la teoría cinético-molecular, las leyes de Boyle, Charles, Gay-Lussac y Avogadro, y la ecuación de estado PV = nRT. Incluye mezclas (Dalton) y la corrección para gases reales (factor Z y van der Waals). Es uno de los temas más usados en cálculos de parciales.",
    conceptos: [
      { titulo: "Teoría cinético-molecular", texto: "Un gas ideal está formado por partículas puntuales que se mueven al azar, chocan elásticamente entre sí y con las paredes, y no tienen fuerzas de atracción entre ellas. La presión es consecuencia de los choques contra las paredes. La energía cinética media es proporcional a la temperatura absoluta." },
      { titulo: "Leyes de los gases", texto: "Boyle: a T constante, P y V son inversamente proporcionales. Charles y Gay-Lussac: a P constante, V es proporcional a T; a V constante, P es proporcional a T. Avogadro: a P y T constantes, V es proporcional a n. Todas las leyes exigen temperatura en kelvin." },
      { titulo: "Ecuación de estado y CNPT", texto: "PV = nRT para gas ideal. R = 0,082 L·atm/(mol·K) = 8,314 J/(mol·K) = 62,36 L·torr/(mol·K). En CNPT (0 °C = 273,15 K y 1 atm) un mol de gas ideal ocupa 22,4 L." },
      { titulo: "Ley de Dalton", texto: "La presión total de una mezcla de gases es la suma de las presiones parciales de cada componente, es decir, la presión que ejercería cada uno si estuviera solo en el recipiente. Cada presión parcial es P_i = x_i · P_total, donde x_i es la fracción molar." },
      { titulo: "Gases reales", texto: "A altas presiones y bajas temperaturas, las fuerzas intermoleculares y el volumen de las moléculas no se pueden despreciar. El factor de compresibilidad Z = V_real / V_ideal vale 1 en el comportamiento ideal; Z > 1 indica que dominan las repulsiones y Z < 1 que dominan las atracciones. Van der Waals corrige la ecuación de estado con las constantes a (atracción) y b (volumen propio)." }
    ],
    formulas: [
      "P · V = n · R · T   ;   R = 0,082 L·atm/(mol·K)",
      "T (K) = t (°C) + 273,15",
      "P_total = Σ P_i   ;   P_i = x_i · P_total   ;   x_i = n_i / n_total",
      "Z = V_real / V_ideal   ;   V_ideal = R·T / P (por mol)",
      "(P + a·n²/V²)(V − n·b) = n·R·T   (van der Waals)",
      "Volumen molar en CNPT = 22,4 L/mol (gas ideal)"
    ],
    errores_tipicos: [
      { error: "Usar la temperatura en °C dentro de PV = nRT: con T = 25 °C se obtiene un resultado incorrecto.", como_evitar: "Convertí siempre: 25 °C = 298 K. Verificá que T esté en kelvin antes de despejar." },
      { error: "Usar R = 0,082 con la presión en mmHg o torr, mezclando unidades.", como_evitar: "Si la presión está en mmHg, usá R = 62,36 L·torr/(mol·K), o convertí la presión a atm (760 mmHg = 1 atm)." },
      { error: "Confundir la presión parcial con la presión total o con la fracción molar, y olvidar multiplicar por x_i.", como_evitar: "P_i = x_i · P_total. La suma de las presiones parciales da la presión total, y la suma de las fracciones molares da 1." },
      { error: "Interpretar Z al revés: decir que Z < 1 indica que dominan las repulsiones.", como_evitar: "Z < 1 significa que el volumen real es menor que el ideal, por atracciones. Z > 1 indica repulsiones dominantes." },
      { error: "Creer que un gas real se comporta siempre como ideal, sin tener en cuenta alta presión o baja temperatura.", como_evitar: "El comportamiento ideal es una buena aproximación a baja presión y alta temperatura. Cerca de la licuefacción las fuerzas intermoleculares importan." }
    ]
  },
  {
    id: "liquidos",
    titulo: "Propiedades de los líquidos y fuerzas intermoleculares",
    fuentes: ["T06B1", "T04B"],
    resumen: "Explica las propiedades de los líquidos (tensión superficial, capilaridad, viscosidad y presión de vapor) a partir de las fuerzas intermoleculares, y clasifica esas fuerzas (ión-dipolo, puente de hidrógeno, van der Waals y London). Se incluye aquí porque las fuerzas intermoleculares son la explicación central de estas propiedades y de la solubilidad.",
    conceptos: [
      { titulo: "Estados y balance de energías", texto: "El estado de agregación depende del balance entre la energía cinética de las partículas (que aumenta con la temperatura) y la energía de atracción entre ellas. En los líquidos la atracción es suficiente para mantener el volumen propio, pero no la forma: las partículas se mueven y adoptan la forma del recipiente." },
      { titulo: "Tensión superficial y capilaridad", texto: "La tensión superficial σ es la energía necesaria para aumentar el área de un líquido en una unidad de área. Las moléculas de la superficie tienen fuerzas no compensadas hacia el interior, por eso la superficie se comporta como una membrana. A mayor fuerza intermolecular, mayor tensión superficial (mercurio 465 dinas/cm, agua 72,75 dinas/cm a 20 °C). Las fuerzas cohesivas (entre moléculas iguales) y adhesivas (entre distintas) explican los meniscos y el ascenso o descenso capilar. El ángulo de contacto θ mide el mojado." },
      { titulo: "Viscosidad", texto: "La viscosidad μ es la resistencia que un fluido opone a fluir. Aumenta con la fuerza intermolecular y con la longitud o el entrelazamiento de las moléculas (el hexano, 0,326 cP, es menos viscoso que el decano, 1,42 cP). Disminuye al aumentar la temperatura." },
      { titulo: "Presión de vapor", texto: "En un recipiente cerrado, la evaporación y la condensación llegan a un equilibrio dinámico. La presión que ejerce el vapor en ese equilibrio es la presión de vapor. Depende solo de la temperatura y de las fuerzas intermoleculares, no del volumen del líquido ni del área de la superficie. Una sustancia volátil tiene presión de vapor alta a temperatura ambiente. A mayor fuerza intermolecular: menor presión de vapor, menor volatilidad y mayor calor latente de vaporización." },
      { titulo: "Fuerzas intermoleculares", texto: "Ión-dipolo: entre un ión y una molécula polar (NaCl en agua). Puente de hidrógeno: caso especial de dipolo-dipolo, con H unido a F, O o N y un par libre vecino (H2O, NH3). Dipolo-dipolo: entre moléculas polares (HCl). Dipolo-dipolo inducido: una polar induce un dipolo en una no polar. Fuerzas de London: entre todas las moléculas, aumentan con la masa molar y disminuyen con la ramificación. Importa la magnitud de las fuerzas, no la cantidad: el octano (London) hierve a 125,6 °C y el agua (puente de hidrógeno) a 100 °C por su masa molar." }
    ],
    formulas: [
      "σ = energía / área = fuerza / distancia   ;   [σ] = N/m (1 dina/cm = 1 mN/m)",
      "F = μ · A · (dv/dz)   ;   [μ] = Pa·s   ;   1 cP = 1 mPa·s = 0,01 P",
      "Ecuación de Young: γ_sv = γ_sl + γ_lv · cos θ",
      "ΔH_vap = H_m(vapor) − H_m(líquido) > 0   ;   ΔH_cond = −ΔH_vap",
      "Presión de vapor del agua a 100 °C = 760 mmHg (1 atm)"
    ],
    errores_tipicos: [
      { error: "Decir que la presión de vapor depende del volumen de líquido o del área de la superficie.", como_evitar: "Solo depende de la temperatura y de las fuerzas intermoleculares. Si duplicás el volumen, la presión de vapor no cambia." },
      { error: "Afirmar que la viscosidad de un líquido aumenta con la temperatura, por confundirla con la de los gases.", como_evitar: "En los líquidos, al subir la temperatura disminuye la viscosidad, porque las moléculas se mueven más y se separan. En los gases aumenta." },
      { error: "Mirar solo el tipo de fuerza y no su intensidad, o sumar fuerzas de London por cantidad para concluir que superan al puente de hidrógeno.", como_evitar: "Lo que importa es la intensidad de cada fuerza. Compará el tipo predominante y la masa molar, no la cantidad de interacciones." },
      { error: "Confundir cohesión con adhesión: decir que el menisco del mercurio es cóncavo porque 'el mercurio moja'.", como_evitar: "Cohesión es la atracción entre moléculas iguales (fuerte en el Hg, que forma menisco convexo). Adhesión es la atracción con otra superficie o sustancia (en el agua en vidrio, menisco cóncavo)." },
      { error: "Confundir volatilidad con viscosidad, por ejemplo decir que una sustancia muy viscosa es muy volátil.", como_evitar: "Volátil = presión de vapor alta = fuerzas intermoleculares débiles. Viscoso = le cuesta fluir = fuerzas o entrelazamiento grandes. Son propiedades distintas." }
    ]
  },
  {
    id: "soluciones",
    titulo: "Soluciones, solubilidad y unidades de concentración",
    fuentes: ["T07A"],
    resumen: "Estudia las soluciones (solvente y soluto), qué factores afectan la solubilidad (naturaleza, temperatura y presión), la idea de saturación y equilibrio de solubilidad, y las formas de expresar la concentración (%, M, m, N, ppm) con sus diluciones. Es un tema de cálculo muy frecuente en el parcial.",
    conceptos: [
      { titulo: "Solución", texto: "Es una mezcla homogénea de solvente y uno o más solutos. El solvente es el componente en mayor cantidad; el agua siempre se considera solvente. No hay reacción química entre soluto y solvente, solo interacciones intermoleculares. Si las partículas son mucho más grandes que las moleculares, se trata de una dispersión coloidal (efecto Tyndall), no de una solución." },
      { titulo: "Lo semejante disuelve lo semejante", texto: "Una solución se forma cuando las fuerzas soluto-solvente son comparables a las soluto-soluto y solvente-solvente. Los solutos polares se disuelven en solventes polares (sal en agua) y los no polares en solventes no polares (aceite en hexano)." },
      { titulo: "Solubilidad y equilibrio", texto: "La solubilidad es la máxima cantidad de soluto que se disuelve en un solvente a una temperatura dada, formando una solución saturada. Para una sal poco soluble, el equilibrio entre el sólido y los iones disueltos se describe con el producto de solubilidad K_ps (equilibrio heterogéneo: sólido y solución saturada)." },
      { titulo: "Factores que afectan la solubilidad", texto: "Temperatura: si la disolución es endotérmica (ΔH > 0) la solubilidad de un sólido aumenta con T; si es exotérmica, disminuye. Para gases en líquidos, la solubilidad disminuye al aumentar T. Presión: no afecta de forma apreciable a sólidos ni a líquidos, pero sí a gases (ley de Henry: S = k·P)." },
      { titulo: "Concentraciones y diluciones", texto: "Molaridad M = mol de soluto por litro de solución. Molalidad m = mol de soluto por kg de solvente. % m/m = g de soluto por 100 g de solución; % m/V = g por 100 mL de solución; ppm = mg de soluto por kg de solución. Normalidad N = equivalentes por litro, donde eq = masa / masa equivalente (HCl: 36,46 g; H2SO4: 49,00 g; NaOH: 40,00 g; Ba(OH)2: 85,68 g). En una dilución el soluto no cambia: C_c·V_c = C_d·V_d." }
    ],
    formulas: [
      "M = n_soluto / V_solución (L)   (mol/L)",
      "m = n_soluto / kg de solvente   (mol/kg)",
      "% m/m = m_soluto / m_solución × 100   ;   % m/V = g soluto / mL solución × 100",
      "ppm = mg de soluto / kg de solución",
      "m_solución = m_soluto + m_solvente   ;   N = eq / L   ;   eq = masa / masa equivalente",
      "Dilución: C_c · V_c = C_d · V_d   (mismas unidades de concentración)",
      "Ley de Henry: S = k · P   (gases en líquidos)"
    ],
    errores_tipicos: [
      { error: "Confundir molaridad con molalidad: usar moles por kg de solvente cuando el enunciado pide moles por litro de solución (o al revés).", como_evitar: "M es mol/L de solución (símbolo M mayúscula). m es mol/kg de solvente (símbolo m minúscula). El apunte tiene el símbolo mal escrito; la molalidad se escribe m." },
      { error: "Tomar la masa de la solución como solo la masa del solvente, olvidando el soluto.", como_evitar: "m_solución = m_soluto + m_solvente. Recordalo antes de calcular un % m/m." },
      { error: "Calcular la normalidad del H2SO4 con su masa molar en lugar de la masa equivalente (98,00 g en vez de 49,00 g).", como_evitar: "La masa equivalente de un ácido es la masa molar dividida por el número de H⁺ que libera (2 en el H2SO4)." },
      { error: "Aplicar la dilución con volúmenes o concentraciones en unidades distintas, o confundir el volumen final con el agua agregada.", como_evitar: "Usá la misma unidad en ambos lados. El V_d es el volumen final, y el agua agregada es V_d − V_c." },
      { error: "Afirmar que la solubilidad de un gas aumenta con la temperatura, o que la presión afecta a la solubilidad de un sólido.", como_evitar: "Los gases se disuelven menos al calentar y más al aumentar la presión (Henry). En sólidos, la presión casi no influye y la temperatura depende del signo de ΔH de disolución." }
    ]
  },
  {
    id: "reacciones",
    titulo: "Reacciones químicas, redox y estequiometría",
    fuentes: ["T08A", "T08B"],
    resumen: "Cubre cómo escribir y balancear ecuaciones, clasificar reacciones, identificar oxidaciones y reducciones, y hacer cálculos estequiométricos con pureza, reactivo limitante y rendimiento. Es el tema con más cuentas en el parcial, así que conviene seguir siempre los mismos pasos.",
    conceptos: [
      { titulo: "Ecuaciones químicas y balanceo", texto: "Una ecuación química tiene reactivos a la izquierda y productos a la derecha, con los estados físicos indicados (s, l, g, ac). Los coeficientes estequiométricos son moles y se ajustan para que haya el mismo número de átomos de cada elemento en ambos lados (ley de conservación de la masa). Se balancea por tanteo, y las redox con el método ion-electrón (en medio ácido se usan H2O y H⁺; en medio básico, H2O y OH⁻)." },
      { titulo: "Tipos de reacciones", texto: "Síntesis (A + B → AB), descomposición (AB → A + B), neutralización (ácido + base → sal + agua), precipitación (dos solutos forman un sólido), combustión (hidrocarburo + O2 → CO2 + H2O en la completa; CO en la incompleta) y redox (hay transferencia de electrones)." },
      { titulo: "Oxidación y reducción", texto: "En una redox, la oxidación es pérdida de electrones (aumenta el número de oxidación) y la reducción es ganancia (disminuye). La especie que se oxida es el agente reductor. La especie que se reduce es el agente oxidante, es decir, la que contiene el elemento que se reduce." },
      { titulo: "Cálculos estequiométricos", texto: "Pasos: 1) balancear la ecuación; 2) armar relaciones en moles y en masa; 3) pasar los datos a moles (gases con PV = nRT, soluciones con M); 4) identificar el reactivo limitante (el que está en menor proporción respecto de la relación estequiométrica) y calcular sobre él; 5) corregir por pureza (solo cuenta la sustancia pura) y por rendimiento (producto real = R% × producto teórico)." },
      { titulo: "Pureza y rendimiento", texto: "La pureza es el porcentaje de sustancia pura en la muestra: m_puro = % pureza × m_muestra / 100. El rendimiento R% = producto obtenido experimentalmente / producto calculado por estequiometría × 100. Las pérdidas, las impurezas, las reacciones secundarias y las reversibles reducen el rendimiento." }
    ],
    formulas: [
      "n = m / M   (mol = g / (g/mol))",
      "V_gas = n·R·T / P   (R = 0,082 L·atm/(mol·K), T en K)",
      "% pureza = m_puro / m_muestra × 100",
      "R% = cantidad real / cantidad teórica × 100",
      "Reactivo limitante: el de menor cociente (moles disponibles / coeficiente estequiométrico)",
      "Combustión completa: CxHy + O2 → CO2 + H2O (balanceada)"
    ],
    errores_tipicos: [
      { error: "Hacer las relaciones estequiométricas sin balancear la ecuación, por ejemplo en Zn + HCl → ZnCl2 + H2 usando 1 mol de HCl.", como_evitar: "Balanceá primero: Zn + 2 HCl → ZnCl2 + H2. Antes de calcular, siempre verificá los coeficientes." },
      { error: "Usar la masa de la muestra impura en lugar de la masa de sustancia pura.", como_evitar: "Primero calculá la masa pura con la pureza y después hacé la regla de tres con esa masa." },
      { error: "Calcular a partir del reactivo en exceso en lugar del limitante, por ejemplo sumando 'el agua que sobra' al producto.", como_evitar: "Comparé las cantidades dadas con la relación estequiométrica. El reactivo que se agota es el limitante, y el producto se calcula con él." },
      { error: "Confundir agente oxidante con agente reductor: decir que el agente oxidante es el que se oxida.", como_evitar: "El agente oxidante es el que se reduce (gana electrones). El agente reductor es el que se oxida (pierde electrones)." },
      { error: "Aplicar el rendimiento al lado equivocado: dividir en lugar de multiplicar, o usar el producto real como si fuera teórico.", como_evitar: "Producto real = R% × producto teórico. Si el R% es 75 %, el real es el 75 % del teórico, siempre menor." }
    ]
  },
  {
    id: "equilibrio",
    titulo: "Equilibrio químico: constante, cociente de reacción y Le Chatelier",
    fuentes: ["T09A"],
    resumen: "Presenta las reacciones incompletas, el equilibrio dinámico y la constante de equilibrio (K_c y K_p), junto con el cociente de reacción Q para predecir hacia dónde evoluciona un sistema. El principio de Le Chatelier permite predecir el efecto de cambios de concentración, presión, volumen y temperatura. Es la base de los temas de ácido-base y solubilidad.",
    conceptos: [
      { titulo: "Equilibrio dinámico", texto: "En una reacción incompleta, la reacción directa y la inversa ocurren a la misma velocidad y las concentraciones de reactivos y productos se mantienen constantes. La composición final es la misma aunque se llegue desde reactivos o desde productos: el equilibrio depende de las condiciones, no del camino." },
      { titulo: "Constante de equilibrio", texto: "Para aA + bB ⇌ cC + dD, K_c = [C]^c [D]^d / ([A]^a [B]^b), con concentraciones en mol/L. Solo entran los gases y los solutos: los sólidos y líquidos puros no aparecen. K depende solo de la temperatura: cambiar concentraciones o presión no la modifica. Si todas las especies son gaseosas, se usa K_p con presiones parciales en atm, y K_p = K_c (RT)^Δn, con Δn = moles de gas de productos − moles de gas de reactivos." },
      { titulo: "Cociente de reacción", texto: "Q tiene la misma forma que K, pero con las concentraciones (o presiones) en cualquier momento. Si Q = K, el sistema está en equilibrio. Si Q < K, el sistema evoluciona hacia los productos; si Q > K, hacia los reactivos." },
      { titulo: "Principio de Le Chatelier", texto: "Si se perturba un sistema en equilibrio, el sistema evoluciona para contrarrestar la perturbación. Agregar reactivo o quitar producto desplaza hacia productos; al revés desplaza hacia reactivos. Un aumento de presión (menor volumen) favorece el sentido que disminuye el número de moles gaseosos. Un gas inerte a volumen constante no desplaza el equilibrio. En reacciones endotérmicas, subir la temperatura aumenta K; en exotérmicas, la disminuye." }
    ],
    formulas: [
      "aA + bB ⇌ cC + dD   :   K_c = [C]^c · [D]^d / ([A]^a · [B]^b)   (mol/L)",
      "K_p = K_c · (R·T)^Δn   ;   Δn = n gaseoso productos − n gaseoso reactivos   ;   R = 0,082 L·atm/(mol·K)",
      "Q = mismo cociente que K, con concentraciones o presiones actuales",
      "Q = K → equilibrio ; Q < K → avanza a productos ; Q > K → avanza a reactivos"
    ],
    errores_tipicos: [
      { error: "Incluir sólidos, líquidos puros o el agua en la expresión de K_c, por ejemplo K = [CO2] / [C] en lugar de [CO2].", como_evitar: "Solo se escriben gases y solutos. Un sólido o líquido puro tiene concentración constante y no entra en la expresión." },
      { error: "Usar moles en vez de concentraciones molares (mol/L) en K_c, o no ajustar los exponentes con los coeficientes.", como_evitar: "Dividí por el volumen para pasar a mol/L y usá los coeficientes como exponentes, siempre con la ecuación balanceada." },
      { error: "Creer que agregar un gas inerte a volumen constante desplaza el equilibrio porque sube la presión total.", como_evitar: "A volumen constante, las presiones parciales y las concentraciones no cambian, así que no hay desplazamiento." },
      { error: "Confundir Q con K y concluir que el sistema está en equilibrio sin comparar, o decir que Q < K lleva a reactivos.", como_evitar: "Calculá Q con las condiciones actuales y comparalo con K. Q < K significa que hay poco producto, y el sistema avanza hacia la derecha." },
      { error: "Pensar que un cambio de concentración modifica el valor de K, o que la presión desplaza un equilibrio sin cambio en el número de moles gaseosos.", como_evitar: "K solo cambia con la temperatura. La presión desplaza el equilibrio únicamente si Δn ≠ 0." }
    ]
  },
  {
    id: "acidobase",
    titulo: "Equilibrio ácido-base: fuerza de ácidos y bases, pH y Kw",
    fuentes: ["T09B1", "T09B2"],
    resumen: "Define ácidos y bases (Arrhenius, Brønsted-Lowry, Lewis), la autoionización del agua y la escala de pH, y calcula el pH de ácidos y bases fuertes y débiles con K_a, K_b y el esquema de reacción. Es uno de los temas con más errores de cálculo en los parciales.",
    conceptos: [
      { titulo: "Electrolitos fuertes y débiles", texto: "Los electrolitos fuertes se disocian completamente en solución (HCl, HNO3, H2SO4, NaOH, KOH) y no tienen equilibrio. Los débiles se disocian parcialmente y tienen un equilibrio de ionización (ácido acético, HCN, NH3). Un electrolito fuerte no tiene K porque no hay equilibrio; un débil se caracteriza por su K_a o K_b." },
      { titulo: "Definiciones", texto: "Arrhenius: ácido da H⁺ en agua y base da OH⁻ (limitada a solución acuosa). Brønsted-Lowry: ácido cede un H⁺ y base lo acepta; en un par ácido-base conjugado se diferencian en un H⁺. El agua es anfótera. Lewis: ácido acepta un par de electrones y base lo cede. Las tres teorías se complementan." },
      { titulo: "Autoionización del agua y pH", texto: "2 H2O ⇌ H3O⁺ + OH⁻ con K_w = [H3O⁺][OH⁻] = 1×10⁻¹⁴ a 25 °C. pH = −log[H3O⁺], pOH = −log[OH⁻], y pH + pOH = 14 a 25 °C. Solución neutra: pH = 7; ácida: pH < 7; básica: pH > 7." },
      { titulo: "Ácidos y bases fuertes", texto: "Como se disocian por completo, [H⁺] es igual a la concentración del ácido multiplicada por el número de H⁺ liberados. Para un ácido fuerte pH = −log C; para una base fuerte pOH = −log C y pH = 14 − pOH. Para Ca(OH)2, [OH⁻] = 2·C. Se desprecia el aporte del agua si la solución no es muy diluida." },
      { titulo: "Ácidos y bases débiles", texto: "K_a = [A⁻][H3O⁺] / [HA] y pK_a = −log K_a; para bases, K_b = [BH⁺][OH⁻] / [B]. Mayor K_a (menor pK_a) significa ácido más fuerte. Para un par conjugado, K_a · K_b = K_w. El grado de ionización es α = x / C_i. Con el esquema de reacción (inicial, cambio, equilibrio) y la aproximación x ≪ C, [H3O⁺] = √(K_a · C). Hay que verificar la aproximación después del cálculo (x/C < 5 %)." }
    ],
    formulas: [
      "K_w = [H3O⁺][OH⁻] = 1×10⁻¹⁴ (25 °C) ;  pH + pOH = 14",
      "pH = −log[H3O⁺] ;  pOH = −log[OH⁻] ;  pX = −log[X]",
      "K_a = [A⁻][H3O⁺] / [HA] ;  K_b = [BH⁺][OH⁻] / [B] ;  K_a · K_b = K_w",
      "Ácido débil (aprox.): [H3O⁺] = √(K_a · C) ;  pH = −log[H3O⁺]",
      "α = x / C_i   (grado de ionización)   ;   K_a ≈ C_i · α²"
    ],
    errores_tipicos: [
      { error: "Usar K_a para una base o K_b para un ácido, por ejemplo calcular el pH de NH3 con una K_a.", como_evitar: "K_a es para ácidos (HA). K_b es para bases (B). Si el enunciado da K_b, calculá [OH⁻] y después el pOH." },
      { error: "Calcular el pH de un ácido débil como si fuera fuerte (pH = −log C).", como_evitar: "Para un ácido débil usá K_a: [H3O⁺] = √(K_a · C) en la aproximación. Solo el ácido fuerte usa −log C directamente." },
      { error: "Olvidar el factor estequiométrico: para Ca(OH)2 0,10 M, usar [OH⁻] = 0,10 M en lugar de 0,20 M, y el pH da 13,00 en lugar de 13,30.", como_evitar: "Multiplicá la concentración por el número de OH⁻ (o H⁺) que libera la especie antes de tomar el log." },
      { error: "Confundir pK_a con K_a: decir que un pK_a mayor indica ácido más fuerte.", como_evitar: "Recordá: pK_a = −log K_a. Mayor K_a, menor pK_a y ácido más fuerte. Son inversos en sentido." },
      { error: "No verificar la aproximación x ≪ C después de calcular, o aplicar pH + pOH = 14 a otra temperatura sin aclararlo.", como_evitar: "Después del cálculo, comprobá que x/C < 5 %. La relación pH + pOH = 14 vale solo a 25 °C; el K_w depende de T." }
    ]
  },
  {
    id: "termodinamica",
    titulo: "Termodinámica y termoquímica: primer principio, calorimetría y entalpía",
    fuentes: ["T10A", "T10B", "T10B2"],
    resumen: "Estudia la energía de un sistema: el primer principio (ΔU = Q + W), la capacidad calorífica y la calorimetría, la entalpía a presión constante, las entalpías de formación y combustión, y la aplicación a combustibles y poder calorífico. Es el tema con más fórmulas y más errores de signo del curso.",
    conceptos: [
      { titulo: "Primer principio", texto: "La energía se conserva: ΔU = Q + W, con la convención del sistema. Q > 0 si el calor entra al sistema y W > 0 si el entorno realiza trabajo sobre el sistema. El trabajo de expansión contra una presión externa constante es W = −P_ext · ΔV: si el gas se expande (ΔV > 0), W < 0. A volumen constante, Q_v = ΔU. A presión constante, Q_p = ΔH." },
      { titulo: "Calor, capacidad calorífica y calorimetría", texto: "Q = C · ΔT y Q = m · c · ΔT, con c = C/m (calor específico, J/(g·K) o cal/(g·°C)). El calor específico del agua es 1 cal/(g·°C). En un calorímetro adiabático, el calor que cede una parte es igual al que gana la otra: Q_1 + Q_2 = 0. Ejemplo del apunte: 500 g de agua a 18 °C y 150 g de cobre a 100 °C, equilibrio a 20,2 °C, dan c_Cu ≈ 0,092 cal/(g·°C)." },
      { titulo: "Entalpía y cambios de fase", texto: "H = U + PV. ΔH > 0 en procesos endotérmicos y ΔH < 0 en exotérmicos. Durante un cambio de fase a presión constante la temperatura no varía y el calor involucrado es latente: ΔH_vap = H(vapor) − H(líquido) > 0, y ΔH_cond = −ΔH_vap. La vaporización necesita más energía que la fusión porque hay que vencer fuerzas intermoleculares casi totales." },
      { titulo: "Entalpía de reacción, formación y Hess", texto: "ΔH°_r = Σ n·ΔH°_f(productos) − Σ n·ΔH°_f(reactivos). La entalpía de formación de un elemento en su forma más estable es cero (O2, C grafito), pero el C diamante tiene +1,9 kJ/mol. Si una reacción se invierte, ΔH cambia de signo. Ley de Hess: ΔH de la reacción global es la suma de los ΔH de los pasos. Estado estándar: 1 atm, sustancia pura, gases ideales, generalmente 25 °C." },
      { titulo: "Combustión, PCI/PCS y combustibles", texto: "ΔH°_r = Σ ΔH°_c(reactivos) − Σ ΔH°_c(productos), por mol de sustancia que se quema. Poder calorífico superior (PCS): el agua de los humos queda líquida y se libera más calor. Poder calorífico inferior (PCI): el agua queda como vapor. PCS − PCI = n_H2O · ΔH_vap (44 kJ por mol de H2O). Mezcla: Q_total = Σ n_i · ΔH°_c,i. Rendimiento térmico = Q_útil / Q_combustión × 100." }
    ],
    formulas: [
      "ΔU = Q + W   ;   W = −P_ext · ΔV   (1 atm·L = 101,3 J)",
      "Q = m · c · ΔT   ;   Q = C · ΔT   ;   1 cal = 4,184 J   ;   R = 8,314 J/(mol·K)",
      "ΔH = ΔU + P·ΔV = ΔU + Δn_gas · R · T   ;   Q_v = ΔU   ;   Q_p = ΔH",
      "ΔH°_r = Σ n·ΔH°_f(productos) − Σ n·ΔH°_f(reactivos)",
      "ΔH°_r = Σ ΔH°_c(reactivos) − Σ ΔH°_c(productos)",
      "ΔH°_c(C2H6) ≈ −1560 kJ/mol (la guía pone −1553,3; con las ΔH°_f de la tabla da −1559,8)",
      "PCS = PCI + n_H2O · ΔH_cond   (ΔH_cond = −44 kJ/mol de H2O)"
    ],
    errores_tipicos: [
      { error: "Equivocar el signo del trabajo: decir que en una expansión W > 0, o escribir W = +P·ΔV.", como_evitar: "Con la convención del sistema, W = −P_ext·ΔV. En una expansión ΔV > 0 y W < 0 (el sistema realiza trabajo sobre el entorno)." },
      { error: "Invertir la fórmula de ΔH°_r: escribir Σ reactivos − Σ productos con ΔH°_f.", como_evitar: "ΔH°_r = (productos) − (reactivos), siempre con los coeficientes. Con ΔH°_c la fórmula es la inversa: (reactivos) − (productos)." },
      { error: "Usar ΔH°_f = 0 para el C diamante o para cualquier sustancia que no esté en su forma más estable.", como_evitar: "Solo son cero los elementos en su forma estándar (O2 gas, C grafito). El diamante tiene ΔH°_f = +1,9 kJ/mol." },
      { error: "Confundir PCS con PCI: decir que el PCS es menor porque tiene más términos.", como_evitar: "El PCS incluye la condensación del agua (libera más calor), así que es mayor. PCS − PCI = n_H2O × 44 kJ." },
      { error: "Tomar mal el balance calorimétrico: sumar los Q en lugar de igualar Q_1 + Q_2 = 0, o usar ΔT con signo invertido.", como_evitar: "Q_1 + Q_2 = 0 en un calorímetro adiabático. ΔT = T_final − T_inicial, y el signo indica si el cuerpo gana (+) o cede (−) calor." }
    ]
  }
];
