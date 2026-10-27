window.EJERCITACION = window.EJERCITACION || {};

// ============================================================
// Ejercitacion D: temas "gases" y "liquidos" (16 ejercicios por tema).
// Constantes usadas: R = 0,0821 L.atm/(mol.K); T(K) = t(°C) + 273,15;
// CNPT = 273,15 K y 1 atm (1 mol de gas ideal = 22,4 L).
// Agua: presion de vapor 20 °C = 17,5 mmHg; 25 °C = 23,8 mmHg; 40 °C = 55,3 mmHg;
// 60 °C = 149,4 mmHg; 100 °C = 760 mmHg. Densidad de liquidos y tensiones: valores de temas.js.
// ============================================================

window.EJERCITACION["gases"] = [
  {
    num: 1,
    nivel: "Básico",
    temas: ["gases"],
    enunciado: "Un recipiente rígido de 5,00 L contiene nitrógeno gaseoso a 750 mmHg y 20,0 °C. Calcule la masa de N2 contenida en el recipiente.",
    resolucion: [
      {
        parte: "",
        pasos: [
          { paso: "Presión en atm: P = 750 mmHg / 760 mmHg/atm = 0,987 atm.", porque: "La constante R = 0,0821 L.atm/(mol.K) exige la presión en atm, y 760 mmHg equivalen a 1 atm." },
          { paso: "Temperatura en K: T = 20,0 + 273,15 = 293,15 K.", porque: "La ecuación de estado PV = nRT necesita la temperatura absoluta; 0 °C corresponde a 273,15 K." },
          { paso: "Moles: n = P.V / (R.T) = 0,987 atm x 5,00 L / (0,0821 L.atm/(mol.K) x 293,15 K) = 0,205 mol.", porque: "Se despeja n de la ecuación de estado de gas ideal, que relaciona presión, volumen, moles y temperatura." },
          { paso: "Masa: m = n x M = 0,205 mol x 28,0 g/mol = 5,74 g.", porque: "La masa molar del N2 es 2 x 14,0 g/mol, y se pasa de moles a gramos multiplicando por ella." }
        ],
        resultado: "m(N2) = 5,74 g"
      }
    ],
    errores_tipicos: [
      { error: "Usar la presión en mmHg directamente con R = 0,0821, con lo que el número de moles sale 760 veces mayor.", como_evitar: "Convertí a atm (760 mmHg = 1 atm) o usá R = 62,36 L.mmHg/(mol.K)." },
      { error: "Dejar la temperatura en °C (20,0) dentro de PV = nRT.", como_evitar: "Sumá 273,15 antes de cualquier cálculo con gases. Verificá que T esté en kelvin." },
      { error: "Usar M = 14 g/mol para el N2, olvidando que es diatómico.", como_evitar: "Calculá la masa molar con la fórmula molecular real: N2 = 2 x 14,0 = 28,0 g/mol." }
    ]
  },
  {
    num: 2,
    nivel: "Básico",
    temas: ["gases"],
    enunciado: "Una muestra de helio ocupa 2,50 L a 1,00 atm y 27,0 °C. Se comprime en un recipiente hasta 1,20 L y se calienta hasta 80,0 °C, sin pérdida de gas. Calcule la presión final del helio.",
    resolucion: [
      {
        parte: "",
        pasos: [
          { paso: "Temperaturas en K: T1 = 27,0 + 273,15 = 300,15 K; T2 = 80,0 + 273,15 = 353,15 K.", porque: "Las leyes de los gases sólo son proporcionales con temperatura absoluta; sumar 273,15 evita un cociente sin sentido." },
          { paso: "Como n no cambia, se usa la ley combinada: P1.V1 / T1 = P2.V2 / T2, de donde P2 = P1 x V1 x T2 / (V2 x T1).", porque: "Combina Boyle (P y V inversamente proporcionales) y Gay-Lussac/Charles (P proporcional a T), ambas válidas con n constante." },
          { paso: "P2 = 1,00 atm x 2,50 L x 353,15 K / (1,20 L x 300,15 K) = 2,45 atm.", porque: "Se reemplazan los valores con unidades consistentes: el volumen se divide, la temperatura se multiplica." }
        ],
        resultado: "P2 = 2,45 atm"
      }
    ],
    errores_tipicos: [
      { error: "Invertir la relación de volumen (P2 = P1 x V2 / V1 ...), con lo que al comprimir la presión aparece bajando.", como_evitar: "Al comprimir (V menor) la presión sube. P es proporcional a T y a 1/V." },
      { error: "Usar 27,0 y 80,0 °C directamente en el cociente de temperaturas.", como_evitar: "Pasá ambas temperaturas a kelvin antes de dividir." }
    ]
  },
  {
    num: 3,
    nivel: "Básico",
    temas: ["gases"],
    enunciado: "¿Qué volumen ocupan 8,50 g de CO2(g) en CNPT?",
    resolucion: [
      {
        parte: "",
        pasos: [
          { paso: "Masa molar: M(CO2) = 12,0 + 2 x 16,0 = 44,0 g/mol.", porque: "La masa molar es la suma de las masas atómicas de la fórmula, y es el puente entre gramos y moles." },
          { paso: "Moles: n = m / M = 8,50 g / 44,0 g/mol = 0,193 mol.", porque: "n = m/M es la definición de cantidad de sustancia." },
          { paso: "En CNPT (273,15 K y 1 atm), 1 mol de gas ideal ocupa 22,4 L.", porque: "Es el volumen molar que resulta de PV = nRT con P = 1 atm y T = 273,15 K, igual para cualquier gas ideal." },
          { paso: "V = 0,193 mol x 22,4 L/mol = 4,33 L.", porque: "Como el volumen molar es igual para todos los gases ideales en CNPT, el volumen es proporcional a los moles." }
        ],
        resultado: "V(CO2) = 4,33 L en CNPT"
      }
    ],
    errores_tipicos: [
      { error: "Dividir los moles por 22,4 L/mol en lugar de multiplicar.", como_evitar: "Recordá que 1 mol ocupa 22,4 L: V = n x 22,4 L/mol." },
      { error: "Aplicar 22,4 L/mol a 25 °C o a 1,50 atm, condiciones en las que el volumen molar es distinto.", como_evitar: "El valor 22,4 L/mol sólo vale en CNPT. Fuera de CNPT usá PV = nRT." }
    ]
  },
  {
    num: 4,
    nivel: "Básico",
    temas: ["gases"],
    enunciado: "La densidad de un gas medida en CNPT es 1,25 g/L. Calcule la masa molar del gas e indique cuál de los siguientes gases podría ser: N2, CO, O2 o CH4.",
    resolucion: [
      {
        parte: "",
        pasos: [
          { paso: "La densidad es d = m/V = n.M/V, y como n/V = P/(R.T), resulta d = P.M/(R.T).", porque: "Se reemplaza n por P.V/(R.T) de la ecuación de estado, de modo que la densidad depende de P, T y M." },
          { paso: "Se despeja M = d.R.T/P = 1,25 g/L x 0,0821 L.atm/(mol.K) x 273,15 K / 1,00 atm = 28,0 g/mol.", porque: "Las condiciones CNPT (1 atm y 273,15 K) son las del enunciado, y la densidad debe estar en g/L." },
          { paso: "Se comparan masas molares: N2 y CO = 28,0 g/mol; O2 = 32,0 g/mol; CH4 = 16,0 g/mol.", porque: "La identificación se hace comparando la masa molar obtenida con las de cada fórmula." },
          { paso: "Con sólo la densidad no se distingue N2 de CO, porque tienen la misma masa molar.", porque: "La densidad no depende de la estructura ni de la composición química, sólo de la masa molar en esas condiciones." }
        ],
        resultado: "M = 28,0 g/mol; podría ser N2 o CO"
      }
    ],
    errores_tipicos: [
      { error: "Afirmar que el gas es N2 sin considerar que el CO tiene la misma masa molar.", como_evitar: "Cuando dos sustancias tienen la misma masa molar, la densidad no alcanza para identificarlas." },
      { error: "Usar M = d x 22,4 para cualquier temperatura y presión.", como_evitar: "Esa relación sólo vale en CNPT. En otras condiciones usá M = d.R.T/P." }
    ]
  },
  {
    num: 5,
    nivel: "Básico",
    temas: ["gases"],
    enunciado: "En un recipiente rígido de 10,0 L y a 27,0 °C se colocan 0,40 mol de O2(g) y 1,60 mol de Ar(g). Calcule la presión total de la mezcla y la presión parcial del O2.",
    resolucion: [
      {
        parte: "",
        pasos: [
          { paso: "Temperatura: T = 27,0 + 273,15 = 300,15 K. Moles totales: n = 0,40 + 1,60 = 2,00 mol.", porque: "La ecuación de estado se aplica a la mezcla completa, con temperatura absoluta y la suma de moles de todos los componentes." },
          { paso: "Presión total: P = n.R.T / V = 2,00 x 0,0821 x 300,15 / 10,0 = 4,93 atm.", porque: "La mezcla ocupa todo el recipiente, así que el volumen es el de los 10,0 L para todos los componentes." },
          { paso: "Fracción molar del O2: x(O2) = 0,40 / 2,00 = 0,20.", porque: "La fracción molar es la proporción de moles de ese gas sobre el total de moles." },
          { paso: "Presión parcial: P(O2) = x(O2) x P total = 0,20 x 4,93 atm = 0,986 atm.", porque: "La ley de Dalton dice que la presión parcial de un componente es su fracción molar por la presión total." }
        ],
        resultado: "P total = 4,93 atm; P(O2) = 0,986 atm"
      }
    ],
    errores_tipicos: [
      { error: "Calcular la presión parcial con la masa del O2 o con la fracción másica en lugar de la molar.", como_evitar: "En Dalton se usa la fracción molar x_i = n_i / n_total." },
      { error: "Usar sólo los moles de un gas (0,40 mol) con el volumen total para calcular la presión total.", como_evitar: "La presión total depende de todos los moles de la mezcla: n_total = 2,00 mol." }
    ]
  },
  {
    num: 6,
    nivel: "Intermedio",
    temas: ["gases"],
    enunciado: "Se hacen reaccionar 5,00 g de Zn metálico con exceso de HCl. El H2 que se desprende (Zn + 2 HCl -> ZnCl2 + H2) se recoge en un recipiente de 2,00 L a 25,0 °C. a) Calcule la presión del H2 si el gas se recoge seco y la reacción es completa. b) Si el mismo número de moles de H2 se recoge sobre agua a 25,0 °C, en un recipiente donde la presión total es 1,00 atm, calcule el volumen que ocupa el H2. Supuesto: presión de vapor del agua a 25,0 °C = 23,8 mmHg.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Relación molar según la ecuación balanceada: 1 mol de Zn produce 1 mol de H2.", porque: "Por la estequiometría de Zn + 2 HCl -> ZnCl2 + H2, la relación entre Zn y H2 es 1:1." },
          { paso: "n(Zn) = 5,00 g / 65,4 g/mol = 0,0765 mol, por lo tanto n(H2) = 0,0765 mol.", porque: "Se pasa de gramos a moles con la masa molar, y luego se aplica la relación 1:1." },
          { paso: "T = 25,0 + 273,15 = 298,15 K. Presión: P = n.R.T / V = 0,0765 x 0,0821 x 298,15 / 2,00 = 0,936 atm.", porque: "Gas ideal en un recipiente de volumen fijo, con T en kelvin." }
        ],
        resultado: "P(H2) = 0,936 atm"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Presión parcial del H2 en el gas húmedo: P(H2) = P total - P(H2O) = 1,00 atm - 23,8/760 atm = 0,969 atm.", porque: "El gas recogido sobre agua es una mezcla; por Dalton, el vapor de agua ocupa parte de la presión total." },
          { paso: "Volumen: V = n(H2).R.T / P(H2) = 0,0765 x 0,0821 x 298,15 / 0,969 = 1,93 L.", porque: "El H2 tiene los mismos moles, pero la presión que cuenta para él es la parcial, no la total." }
        ],
        resultado: "V(mezcla) = 1,93 L (con P(H2) = 0,969 atm)"
      }
    ],
    errores_tipicos: [
      { error: "En b) usar la presión total de 1,00 atm para el H2, olvidando que parte corresponde al vapor de agua. Da 1,87 L.", como_evitar: "Cuando un gas se recoge sobre agua, restá la presión de vapor antes de usar la ecuación de estado para ese gas." },
      { error: "Usar 2 mol de H2 por mol de Zn, por confundir la relación con la del HCl.", como_evitar: "Balanceá la ecuación y tomá la relación entre las sustancias que te piden, no entre las del enunciado." }
    ]
  },
  {
    num: 7,
    nivel: "Intermedio",
    temas: ["gases"],
    enunciado: "En un recipiente rígido de 4,00 L a 27,0 °C hay una mezcla de CH4(g) y C2H6(g) con presión total de 1,50 atm. La masa total de la mezcla es 6,00 g. a) Calcule los moles de cada gas y la fracción molar del CH4. b) Calcule el número de átomos de carbono presentes en el recipiente.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Moles totales: n = P.V / (R.T) = 1,50 x 4,00 / (0,0821 x 300,15) = 0,2435 mol.", porque: "La mezcla se trata como gas ideal, y el número total de moles es la suma de los dos gases." },
          { paso: "Plantear dos ecuaciones: n(CH4) + n(C2H6) = 0,2435 mol y 16,0 n(CH4) + 30,1 n(C2H6) = 6,00 g.", porque: "Hay dos incógnitas. La primera es la conservación de moles y la segunda, la de masas, con las masas molares de cada gas." },
          { paso: "Resolviendo: n(C2H6) = (6,00 - 16,0 x 0,2435) / (30,1 - 16,0) = 0,149 mol; n(CH4) = 0,2435 - 0,149 = 0,0942 mol.", porque: "Sustituir una ecuación en la otra es el método directo para un sistema lineal de dos incógnitas." },
          { paso: "Fracción molar: x(CH4) = 0,0942 / 0,2435 = 0,387.", porque: "La fracción molar es la proporción de moles de CH4 sobre el total." }
        ],
        resultado: "n(CH4) = 0,0942 mol; n(C2H6) = 0,149 mol; x(CH4) = 0,387"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Moles de carbono: 1 x n(CH4) + 2 x n(C2H6) = 0,0942 + 2 x 0,149 = 0,393 mol de C.", porque: "Cada molécula de CH4 tiene 1 átomo de C y cada C2H6 tiene 2 átomos de C." },
          { paso: "Átomos: 0,393 mol x 6,022 x 10^23 átomos/mol = 2,36 x 10^23 átomos de C.", porque: "El número de Avogadro convierte moles de átomos en cantidad de átomos." }
        ],
        resultado: "2,36 x 10^23 átomos de C"
      }
    ],
    errores_tipicos: [
      { error: "Plantear sólo la ecuación de moles y no la de masas, y no poder separar las dos cantidades.", como_evitar: "Cuando una mezcla tiene dos componentes desconocidos, se necesitan dos ecuaciones independientes." },
      { error: "Contar 1 átomo de C por cada molécula de C2H6.", como_evitar: "Revisá la fórmula: C2H6 tiene 2 átomos de carbono." },
      { error: "Usar la masa molar de un solo gas para toda la mezcla al calcular los moles.", como_evitar: "Cada componente tiene su masa molar; la masa de la mezcla es la suma de ambas contribuciones." }
    ]
  },
  {
    num: 8,
    nivel: "Intermedio",
    temas: ["gases"],
    enunciado: "Se hacen reaccionar 2,00 g de aluminio con 100 mL de HCl 3,00 M según 2 Al(s) + 6 HCl(ac) -> 2 AlCl3(ac) + 3 H2(g). El H2 se recoge en un recipiente de 5,00 L a 20,0 °C. a) Identifique el reactivo limitante y calcule los moles de H2 formados. b) Calcule la presión del H2 en el recipiente de 5,00 L a 20,0 °C.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "n(Al) = 2,00 g / 26,98 g/mol = 0,0741 mol. n(HCl) = 0,100 L x 3,00 mol/L = 0,300 mol.", porque: "Se pasan ambos reactivos a moles para poder compararlos con la ecuación balanceada." },
          { paso: "La ecuación pide 6 mol de HCl cada 2 mol de Al, es decir 3 mol de HCl por mol de Al. Para 0,0741 mol de Al hacen falta 0,222 mol de HCl.", porque: "La comparación se hace con la relación estequiométrica, no con las masas ni los volúmenes." },
          { paso: "Como hay 0,300 mol de HCl disponibles y se necesitan 0,222 mol, el HCl está en exceso y el limitante es el Al.", porque: "El reactivo que se consume primero determina la cantidad máxima de producto." },
          { paso: "n(H2) = (3/2) x n(Al) = 1,5 x 0,0741 = 0,111 mol.", porque: "Por la ecuación, 2 mol de Al producen 3 mol de H2, y se calcula a partir del reactivo limitante." }
        ],
        resultado: "Limitante: Al; n(H2) = 0,111 mol"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "T = 20,0 + 273,15 = 293,15 K.", porque: "La ecuación de estado requiere la temperatura en kelvin." },
          { paso: "Se usa V = 5,00 L, el volumen del recipiente, porque el H2 se distribuye en todo el recipiente.", porque: "El volumen que aparece en PV = nRT es el del gas, y aquí el gas ocupa el recipiente completo, no los 100 mL de solución." },
          { paso: "P(H2) = n.R.T / V = 0,111 x 0,0821 x 293,15 / 5,00 = 0,535 atm.", porque: "Se aplica la ecuación de gas ideal al H2 con los moles obtenidos en a)." }
        ],
        resultado: "P(H2) = 0,535 atm"
      }
    ],
    errores_tipicos: [
      { error: "Elegir el limitante comparando las masas (2,00 g de Al contra 100 mL de HCl) o los volúmenes.", como_evitar: "Siempre se compara en moles y con la relación de la ecuación balanceada." },
      { error: "Usar 2 mol de H2 por cada 2 mol de Al, en lugar de 3 mol de H2.", como_evitar: "Leé los coeficientes de la ecuación balanceada en cada paso." },
      { error: "Usar el volumen de solución (0,100 L) como volumen del gas.", como_evitar: "El volumen del gas es el del recipiente donde se recoge, no el del líquido que reaccionó." }
    ]
  },
  {
    num: 9,
    nivel: "Intermedio",
    temas: ["gases"],
    enunciado: "Una muestra de gas ocupa 2,40 L a 1,20 atm y 40,0 °C. a) Calcule el volumen que ocupa la misma masa de gas en CNPT. b) Calcule la temperatura a la que la presión sería 2,00 atm si el volumen se mantiene en 2,40 L.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Temperaturas en K: T1 = 40,0 + 273,15 = 313,15 K; T2 = 273,15 K (CNPT). La presión final es P2 = 1,00 atm.", porque: "El CNPT tiene T = 273,15 K y P = 1 atm; la masa de gas no cambia, así que n es constante." },
          { paso: "Ley combinada: V2 = P1.V1.T2 / (P2.T1) = 1,20 x 2,40 x 273,15 / (1,00 x 313,15) = 2,51 L.", porque: "Con n constante, P.V/T es constante; se despeja el volumen final." }
        ],
        resultado: "V(CNPT) = 2,51 L"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "A volumen constante, P es proporcional a T, así que P1/T1 = P2/T2 con T en kelvin.", porque: "La ley de Gay-Lussac vale a V y n constantes, y requiere temperatura absoluta." },
          { paso: "T2 = T1 x P2 / P1 = 313,15 K x 2,00 atm / 1,20 atm = 522 K.", porque: "Se despeja T2 de la proporción; el resultado es aproximadamente 249 °C." },
          { paso: "Verificación: 522 K - 273,15 = 249 °C, una temperatura mayor a la inicial, como corresponde a una presión que sube.", porque: "Si el resultado no tiene sentido físico (presión mayor con temperatura menor), hay un error de método." }
        ],
        resultado: "T2 = 522 K (aprox. 249 °C)"
      }
    ],
    errores_tipicos: [
      { error: "En b) multiplicar en °C: 2,00/1,20 x 40,0 = 66,7 °C.", como_evitar: "Las relaciones de proporcionalidad de gases se hacen siempre con temperatura en kelvin." },
      { error: "En a) corregir sólo por temperatura y olvidar que la presión también cambia a CNPT.", como_evitar: "Tomá la ley combinada: los tres factores (P, V, T) pueden cambiar a la vez." }
    ]
  },
  {
    num: 10,
    nivel: "Intermedio",
    temas: ["gases"],
    enunciado: "Un gas real se mide a 300 K y 200 atm, y su volumen molar experimental es 0,1100 L/mol. a) Calcule el factor de compresibilidad Z. b) Explique si las fuerzas intermoleculares predominantes son atractivas o repulsivas, y cómo se acerca el gas al comportamiento ideal a menor presión.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Volumen molar ideal: V_ideal = R.T / P = 0,0821 x 300 / 200 = 0,1232 L/mol.", porque: "Es el volumen que tendría 1 mol si se comportara como gas ideal a esa P y T." },
          { paso: "Z = V_real / V_ideal = 0,1100 / 0,1232 = 0,893.", porque: "Z es la relación entre el volumen real y el ideal, y vale 1 cuando el gas es ideal." }
        ],
        resultado: "Z = 0,893"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Z < 1 significa que el volumen real es menor que el ideal.", porque: "El gas ocupa menos espacio del que predice el modelo ideal." },
          { paso: "Eso indica que dominan las fuerzas de atracción intermolecular, que acercan las moléculas.", porque: "Las atracciones reducen el volumen y la presión que se mediría con el modelo ideal; las repulsiones harían Z > 1." },
          { paso: "A menor presión las moléculas están más separadas, las atracciones pierden peso y Z tiende a 1.", porque: "Las fuerzas intermoleculares decaen rápido con la distancia, así que el gas se parece cada vez más al ideal." }
        ],
        resultado: "Z < 1: predominan las atracciones; el gas se acerca al ideal al bajar la presión"
      }
    ],
    errores_tipicos: [
      { error: "Usar 300 °C en lugar de 300 K en V_ideal = R.T/P.", como_evitar: "Verificá que la temperatura esté en kelvin antes de despejar." },
      { error: "Invertir el cociente y obtener Z = 1,12, o interpretar Z < 1 como repulsiones.", como_evitar: "Z = V_real / V_ideal. Z < 1 indica atracciones dominantes." }
    ]
  },
  {
    num: 11,
    nivel: "Avanzado",
    temas: ["gases"],
    enunciado: "Una muestra impura de 1,20 g de KClO3, con 85,0 % en masa de KClO3, se descompone térmicamente según 2 KClO3(s) -> 2 KCl(s) + 3 O2(g). El O2 se recoge sobre agua a 25,0 °C y la presión total en el recipiente de recolección es 745 mmHg. Suponga que la descomposición es completa y que las impurezas no reaccionan. a) Calcule los moles de O2 producidos. b) Calcule el volumen de O2 recogido, corrigiendo por la presión de vapor del agua (23,8 mmHg a 25,0 °C). c) Justifique si el volumen calculado sin corregir por la presión de vapor sería mayor o menor que el real, y en qué porcentaje.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Masa pura de KClO3: 0,85 x 1,20 g = 1,02 g. M(KClO3) = 39,1 + 35,5 + 3 x 16,0 = 122,6 g/mol; n(KClO3) = 1,02 / 122,6 = 8,32 x 10^-3 mol.", porque: "Sólo el KClO3 reacciona: la impureza no aporta O2, y la pureza se aplica antes de usar la masa molar." },
          { paso: "Por la ecuación, 2 mol de KClO3 producen 3 mol de O2: n(O2) = 3/2 x 8,32 x 10^-3 = 1,25 x 10^-2 mol.", porque: "La relación 3:2 sale de los coeficientes balanceados; el 100 % de rendimiento es un supuesto del enunciado." }
        ],
        resultado: "n(O2) = 1,25 x 10^-2 mol"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Presión parcial del O2: P(O2) = 745 mmHg - 23,8 mmHg = 721,2 mmHg = 0,949 atm.", porque: "El gas recogido sobre agua es húmedo: la presión total incluye el vapor de agua, que no es O2 (Dalton)." },
          { paso: "V(O2) = n.R.T / P(O2) = 1,25 x 10^-2 x 0,0821 x 298,15 / 0,949 = 0,322 L.", porque: "Se aplica la ecuación de gas ideal al O2 con su presión parcial y T = 298,15 K." }
        ],
        resultado: "V(O2) = 0,322 L"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "Si no se corrige, se usa P = 745 mmHg = 0,980 atm, y V = 1,25 x 10^-2 x 0,0821 x 298,15 / 0,980 = 0,312 L.", porque: "Ese cálculo incluye el vapor de agua como si fuera O2, lo que hace que la presión usada sea mayor que la real del O2." },
          { paso: "Error: (0,312 - 0,322) / 0,322 = -3,2 %. El volumen sin corregir resulta un 3 % menor.", porque: "Como V es inversamente proporcional a P, una presión sobreestimada subestima el volumen." }
        ],
        resultado: "Sin corregir, el volumen sale 3 % menor (0,312 L en lugar de 0,322 L)"
      }
    ],
    errores_tipicos: [
      { error: "Usar 1,20 g como masa de KClO3 sin aplicar la pureza del 85 %.", como_evitar: "Aplicá la pureza antes de calcular los moles de KClO3." },
      { error: "Usar la presión total de 745 mmHg como si fuera la presión del O2.", como_evitar: "En un gas recogido sobre agua, la presión parcial del gas es la total menos la presión de vapor del agua." },
      { error: "Tomar la relación 1:1 entre KClO3 y O2, olvidando que 2 mol de KClO3 dan 3 mol de O2.", como_evitar: "Leé los coeficientes de la ecuación balanceada antes de hacer la proporción." }
    ]
  },
  {
    num: 12,
    nivel: "Avanzado",
    temas: ["gases"],
    enunciado: "Un cilindro rígido de 50,0 L contiene O2(g) a 120 atm y 20,0 °C. Se extrae gas, sin cambiar la temperatura, hasta que la presión baja a 20,0 atm. a) Calcule la masa de O2 extraída. b) Calcule el volumen que ocuparía el O2 extraído en CNPT. c) Si luego el cilindro queda al sol y su temperatura sube a 40,0 °C sin extraer más gas, calcule la nueva presión y justifique con la ley que usa.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "T = 20,0 + 273,15 = 293,15 K. Moles iniciales: n1 = 120 x 50,0 / (0,0821 x 293,15) = 249,3 mol.", porque: "El cilindro tiene volumen fijo: los moles se obtienen con PV = nRT a las condiciones iniciales." },
          { paso: "Moles finales: n2 = 20,0 x 50,0 / (0,0821 x 293,15) = 41,55 mol.", porque: "Con V y T constantes, la presión es proporcional a n, y el cilindro sigue siendo el mismo volumen." },
          { paso: "Moles extraídos: 249,3 - 41,55 = 207,7 mol; masa = 207,7 mol x 32,0 g/mol = 6,65 x 10^3 g.", porque: "La diferencia de moles es lo que salió del cilindro, y luego se pasa a masa con la masa molar del O2." }
        ],
        resultado: "m(O2) extraída = 6,65 x 10^3 g (6,65 kg)"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Volumen en CNPT: V = 207,7 mol x 22,4 L/mol = 4,65 x 10^3 L.", porque: "El volumen que se pide es el del gas extraído en CNPT, no el del cilindro, que sigue siendo 50,0 L." }
        ],
        resultado: "V(CNPT) = 4,65 x 10^3 L"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "Estado de partida para c): el cilindro queda con 20,0 atm a 20,0 °C (293,15 K) después de la extracción, con V y n constantes.", porque: "La pregunta c) parte del cilindro ya vaciado a 20,0 atm, no de la presión inicial de 120 atm." },
          { paso: "Ley de Gay-Lussac: P2 = P1 x T2 / T1 = 20,0 atm x 313,15 K / 293,15 K = 21,4 atm.", porque: "A volumen y cantidad de gas constantes, la presión es proporcional a la temperatura absoluta, así que sube al calentarse." }
        ],
        resultado: "P2 = 21,4 atm (la presión sube al calentarse)"
      }
    ],
    errores_tipicos: [
      { error: "En b) usar 50,0 L como volumen del gas extraído, cuando es el volumen del cilindro.", como_evitar: "El volumen del gas extraído se calcula con los moles extraídos y el volumen molar en CNPT." },
      { error: "En c) suponer que al subir la temperatura la presión baja.", como_evitar: "A V y n fijos, P es proporcional a T absoluta: si T sube, P sube." },
      { error: "Usar 20 °C = 20 K dentro de PV = nRT.", como_evitar: "Convertí siempre a kelvin: 20,0 °C = 293,15 K." }
    ]
  },
  {
    num: 13,
    nivel: "Avanzado",
    temas: ["gases"],
    enunciado: "Un recipiente A de 2,00 L contiene N2(g) a 2,50 atm, y un recipiente B de 3,00 L contiene He(g) a 1,00 atm. Ambos están a 25,0 °C. Se conectan con una válvula abierta y el sistema se equilibra a 25,0 °C. a) Calcule la presión final. b) Calcule la presión parcial de cada gas en la mezcla final. c) Justifique si la presión parcial del N2 final es igual a la inicial de 2,50 atm.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "T = 25,0 + 273,15 = 298,15 K. n(N2) = 2,50 x 2,00 / (0,0821 x 298,15) = 0,204 mol; n(He) = 1,00 x 3,00 / (0,0821 x 298,15) = 0,123 mol.", porque: "Cada gas se calcula en su recipiente de origen, con sus propios P y V, antes de la conexión." },
          { paso: "Al conectar, el volumen total es 2,00 + 3,00 = 5,00 L y los moles totales son 0,204 + 0,123 = 0,327 mol.", porque: "Al abrir la válvula, los dos gases se reparten en el volumen conjunto; no se pierde materia." },
          { paso: "P = n_total.R.T / V_total = 0,327 x 0,0821 x 298,15 / 5,00 = 1,60 atm.", porque: "Con T constante y n conservado, se aplica la ecuación de gas ideal al sistema completo." }
        ],
        resultado: "P final = 1,60 atm"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Presión parcial del N2: P(N2) = n(N2).R.T / V_total = 0,204 x 0,0821 x 298,15 / 5,00 = 1,00 atm.", porque: "La presión parcial es la que tendría cada gas si ocupara solo el volumen total de 5,00 L." },
          { paso: "Presión parcial del He: P(He) = 0,123 x 0,0821 x 298,15 / 5,00 = 0,600 atm. Verificación: 1,00 + 0,600 = 1,60 atm.", porque: "La suma de presiones parciales debe dar la presión total (ley de Dalton)." }
        ],
        resultado: "P(N2) = 1,00 atm; P(He) = 0,600 atm"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "No: la presión parcial del N2 pasa de 2,50 atm a 1,00 atm.", porque: "Al conectar los recipientes el N2 se reparte en 5,00 L, no en 2,00 L, y su presión baja en proporción." },
          { paso: "Se verifica: 2,50 atm x 2,00 L / 5,00 L = 1,00 atm.", porque: "Con n y T constantes, P es inversamente proporcional al volumen en el que está el gas, como en Boyle." }
        ],
        resultado: "No; la presión parcial del N2 baja a 1,00 atm"
      }
    ],
    errores_tipicos: [
      { error: "Sumar las presiones iniciales (2,50 + 1,00 = 3,50 atm) como si el volumen no cambiara.", como_evitar: "Cuando se conectan recipientes, el volumen final es la suma de los volúmenes; la presión final depende de n total y V total." },
      { error: "Calcular la presión final con V = 2,00 L o V = 3,00 L en lugar de 5,00 L.", como_evitar: "Identificá el volumen en el que están todos los gases después de la conexión." },
      { error: "Creer que la presión parcial del N2 se mantiene en 2,50 atm porque el gas 'no cambió'.", como_evitar: "Una presión parcial depende del volumen total disponible para ese gas." }
    ]
  },
  {
    num: 14,
    nivel: "Avanzado",
    temas: ["gases"],
    enunciado: "Se encierra 1,00 mol de CO2(g) en un recipiente de 1,00 L a 300 K. Las constantes de van der Waals del CO2 son a = 3,59 L^2.atm/mol^2 y b = 0,0427 L/mol. a) Calcule la presión que predice la ecuación de gas ideal. b) Calcule la presión con la ecuación de van der Waals. c) Calcule el factor Z con la presión real y justifique si predominan fuerzas atractivas o repulsivas.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "P_ideal = n.R.T / V = 1,00 x 0,0821 x 300 / 1,00 = 24,6 atm.", porque: "El modelo ideal no tiene en cuenta el volumen propio ni las fuerzas entre moléculas." }
        ],
        resultado: "P_ideal = 24,6 atm"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Ecuación de van der Waals despejada: P = n.R.T / (V - n.b) - a.n^2 / V^2.", porque: "La corrección de volumen (n.b) reduce el espacio libre, y la de atracción (a.n^2/V^2) reduce la presión que se mide en las paredes." },
          { paso: "Término de volumen: n.R.T / (V - n.b) = 1,00 x 0,0821 x 300 / (1,00 - 0,0427) = 25,73 atm.", porque: "Las moléculas tienen volumen propio, así que el volumen disponible es V - n.b y la presión sube." },
          { paso: "Término de atracción: a.n^2 / V^2 = 3,59 x 1,00^2 / 1,00^2 = 3,59 atm.", porque: "Las atracciones entre moléculas disminuyen la presión frente a las paredes." },
          { paso: "P = 25,73 - 3,59 = 22,1 atm.", porque: "Las dos correcciones tienen signos opuestos; el resultado neto baja respecto del ideal." }
        ],
        resultado: "P (van der Waals) = 22,1 atm"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "Z = P.V / (R.T) = 22,1 atm x 1,00 L / (0,0821 x 300) = 0,899.", porque: "Z es la relación entre la presión real y la ideal a igual V y T." },
          { paso: "Z < 1: el gas ocupa menos volumen del que predice el modelo ideal; la presión real es menor, así que dominan las atracciones.", porque: "En van der Waals, el término a.n^2/V^2 es el que refleja las atracciones; aquí supera la corrección por volumen propio." }
        ],
        resultado: "Z = 0,899; predominan las atracciones intermoleculares"
      }
    ],
    errores_tipicos: [
      { error: "Sumar el término a.n^2/V^2 en lugar de restarlo, lo que da P mayor que la ideal.", como_evitar: "Las atracciones reducen la presión. Recordá: P = nRT/(V-nb) - a n^2/V^2." },
      { error: "Usar V en lugar de V - n.b en el término de presión.", como_evitar: "La corrección de volumen se aplica al volumen disponible para el movimiento de las moléculas." },
      { error: "Interpretar Z < 1 como predominio de repulsiones, por confundir el signo de las correcciones.", como_evitar: "Z < 1 indica atracciones dominantes; Z > 1 indica repulsiones." }
    ]
  },
  {
    num: 15,
    nivel: "Avanzado",
    temas: ["gases"],
    enunciado: "En un recipiente rígido de 25,0 L, a 25,0 °C, se introducen 0,200 mol de CH4(g) y 0,800 mol de O2(g). La mezcla reacciona por completo según CH4(g) + 2 O2(g) -> CO2(g) + 2 H2O(l); el agua queda líquida. a) Identifique el reactivo limitante y calcule la composición de la fase gaseosa final. b) Calcule la presión total final a 25,0 °C, despreciando el volumen del agua líquida y su presión de vapor. c) Calcule la presión total si toda el agua formada estuviera como vapor a 100 °C en el mismo recipiente. Justifique por qué cambia tanto la presión entre b) y c).",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Para 0,200 mol de CH4 se necesitan 2 x 0,200 = 0,400 mol de O2; hay 0,800 mol, así que el O2 está en exceso y el limitante es el CH4.", porque: "El reactivo que se consume primero limita la cantidad de producto formado." },
          { paso: "Gas final: O2 en exceso = 0,800 - 0,400 = 0,400 mol; CO2 formado = 0,200 mol. Total gaseoso = 0,600 mol.", porque: "El agua está en estado líquido, así que no forma parte de la fase gaseosa." }
        ],
        resultado: "Limitante: CH4; gas final = 0,400 mol de O2 y 0,200 mol de CO2"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Supuesto: el volumen del líquido y la presión de vapor del agua se desprecian; sólo cuentan los gases.", porque: "Así se evita considerar equilibrio líquido-vapor en este cálculo; el efecto real del vapor se discute en c)." },
          { paso: "P = n_gas.R.T / V = 0,600 x 0,0821 x 298,15 / 25,0 = 0,587 atm.", porque: "Gas ideal con T = 298,15 K y V = 25,0 L del recipiente." }
        ],
        resultado: "P total = 0,587 atm"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "Si el agua está como vapor, n_gas = 0,600 + 2 x 0,200 = 1,000 mol; T = 100,0 + 273,15 = 373,15 K.", porque: "El agua formada (0,400 mol) pasa a formar parte de la fase gaseosa cuando hay vapor." },
          { paso: "P = 1,000 x 0,0821 x 373,15 / 25,0 = 1,23 atm.", porque: "Se aplica la ecuación de gas ideal al total de moles gaseosos a la nueva temperatura." }
        ],
        resultado: "P total = 1,23 atm"
      }
    ],
    errores_tipicos: [
      { error: "Tomar como limitante al O2 por ser el reactivo de mayor cantidad (0,800 mol).", como_evitar: "El limitante se determina con la relación estequiométrica, no con la cantidad inicial más grande." },
      { error: "Contar el agua líquida formada como gas en b) (sumar 0,400 mol al total).", como_evitar: "Sólo cuentan los gases. Si el agua es líquida, no ejerce presión de gas." },
      { error: "Olvidar que el CO2 es gas y excluirlo de la composición final.", como_evitar: "Escribí la fase gaseosa completa (O2 en exceso más CO2) antes de sumar moles." }
    ]
  },
  {
    num: 16,
    nivel: "Tipo parcial",
    temas: ["gases", "magnitudes"],
    enunciado: "En un laboratorio de análisis se prepara una mezcla gaseosa de CO2 y N2 para calibrar un sensor. Se usa un cilindro rígido de 30,0 L que, a 27,0 °C, contiene la mezcla a 3,00 atm; la fracción molar de CO2 es 0,250. Calcule: a) los moles totales de gas y la masa de cada componente. b) La masa de gas que hay que extraer para que la presión baje a 2,00 atm, manteniendo la temperatura y la composición de la mezcla. c) La presión final si, en lugar de extraer gas, el cilindro se calienta hasta 127,0 °C sin fugas. d) Justifique si la presión parcial del CO2 cambia al agregar N2 al cilindro, manteniendo T y V.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "T = 27,0 + 273,15 = 300,15 K. Moles totales: n = 3,00 x 30,0 / (0,0821 x 300,15) = 3,65 mol.", porque: "La mezcla es un gas ideal en un volumen conocido; el total de moles se obtiene de la ecuación de estado." },
          { paso: "n(CO2) = 0,250 x 3,65 = 0,913 mol, y n(N2) = 3,65 - 0,913 = 2,74 mol.", porque: "La fracción molar da la proporción de cada gas sobre el total de moles." },
          { paso: "Masas: m(CO2) = 0,913 mol x 44,0 g/mol = 40,2 g; m(N2) = 2,74 mol x 28,0 g/mol = 76,7 g.", porque: "Cada masa se obtiene con la masa molar del componente correspondiente." }
        ],
        resultado: "n total = 3,65 mol; m(CO2) = 40,2 g; m(N2) = 76,7 g"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Moles finales para P = 2,00 atm: n_final = 2,00 x 30,0 / (0,0821 x 300,15) = 2,43 mol.", porque: "Con V y T constantes, la presión es proporcional a los moles totales." },
          { paso: "Moles extraídos: 3,65 - 2,43 = 1,22 mol. La masa molar media de la mezcla es 0,250 x 44,0 + 0,750 x 28,0 = 32,0 g/mol.", porque: "Como la composición se mantiene, la masa molar media permite pasar de moles a gramos sin separar componentes." },
          { paso: "m extraída = 1,22 mol x 32,0 g/mol = 39,0 g.", porque: "Se multiplica los moles extraídos por la masa molar media de la mezcla." }
        ],
        resultado: "m extraída = 39,0 g"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "T2 = 127,0 + 273,15 = 400,15 K. Con V y n constantes, P2 = P1 x T2 / T1 = 3,00 atm x 400,15 / 300,15 = 4,00 atm.", porque: "A volumen y moles constantes, la presión es proporcional a la temperatura absoluta (Gay-Lussac)." }
        ],
        resultado: "P final = 4,00 atm"
      },
      {
        parte: "d)",
        pasos: [
          { paso: "No cambia: P(CO2) = n(CO2).R.T / V, y n(CO2), T y V no cambian al agregar N2.", porque: "La presión parcial de un gas sólo depende de sus propios moles, del volumen y de la temperatura, no de los otros gases." },
          { paso: "Lo que aumenta es la presión total, por la suma de presiones parciales (Dalton).", porque: "Al agregar N2, la presión total sube porque sumamos una nueva contribución, pero la del CO2 queda igual." }
        ],
        resultado: "La presión parcial del CO2 no cambia; sube la presión total"
      }
    ],
    errores_tipicos: [
      { error: "En b) usar la masa molar del N2 para todo el gas extraído, o no usar la masa molar media de la mezcla.", como_evitar: "Si la composición se mantiene, usá la masa molar media de la mezcla para pasar de moles a gramos." },
      { error: "En c) usar 127 K en lugar de 400,15 K, o no convertir la temperatura.", como_evitar: "Convertí siempre °C a K antes de cualquier relación de proporcionalidad." },
      { error: "En d) creer que al agregar N2 baja la presión parcial del CO2, confundiendo con la fracción molar.", como_evitar: "La fracción molar del CO2 sí baja, pero la presión parcial depende de sus moles y del volumen, que no cambian." }
    ]
  }
];

window.EJERCITACION["liquidos"] = [
  {
    num: 1,
    nivel: "Básico",
    temas: ["liquidos"],
    enunciado: "En un recipiente cerrado de 2,00 L, a 20,0 °C, se introduce 1,00 g de etanol líquido (C2H5OH, M = 46,1 g/mol). A esa temperatura la presión de vapor del etanol es 44,6 mmHg. Calcule la masa de etanol en fase vapor y la masa que queda líquida en equilibrio.",
    resolucion: [
      {
        parte: "",
        pasos: [
          { paso: "Presión de vapor en atm: 44,6 / 760 = 0,0587 atm. Temperatura: T = 20,0 + 273,15 = 293,15 K.", porque: "R = 0,0821 L.atm/(mol.K) exige presión en atm y temperatura en kelvin." },
          { paso: "Como queda líquido en el recipiente, el vapor está saturado: su presión es la presión de vapor a 20,0 °C.", porque: "En equilibrio líquido-vapor, la presión de vapor depende sólo de la temperatura y no de la cantidad de líquido." },
          { paso: "Moles de vapor: n = P.V / (R.T) = 0,0587 x 2,00 / (0,0821 x 293,15) = 4,88 x 10^-3 mol.", porque: "Es la cantidad de etanol que cabe como vapor a esa presión en el volumen de 2,00 L." },
          { paso: "Masa de vapor: 4,88 x 10^-3 mol x 46,1 g/mol = 0,225 g; masa líquida = 1,00 - 0,225 = 0,775 g.", porque: "Por conservación de masa, lo que no está en vapor queda líquido." }
        ],
        resultado: "Vapor: 0,225 g; líquido: 0,775 g"
      }
    ],
    errores_tipicos: [
      { error: "Suponer que todo el etanol (1,00 g) se evapora, sin verificar si la presión de vapor se alcanza.", como_evitar: "Calculá primero cuánto vapor cabe a esa presión de vapor; si la masa dada es mayor, queda líquido." },
      { error: "Usar la presión de vapor en mmHg dentro de PV = nRT sin pasarla a atm.", como_evitar: "Convertí a atm (760 mmHg = 1 atm) o usá R en mmHg." },
      { error: "Dar como resultado la masa de vapor cuando la pregunta pide la masa líquida, o al revés.", como_evitar: "Hacé la diferencia con la masa total de 1,00 g y escribí ambos resultados." }
    ]
  },
  {
    num: 2,
    nivel: "Básico",
    temas: ["liquidos"],
    enunciado: "Indique el tipo de fuerza intermolecular predominante en estado líquido para cada sustancia: a) HF; b) butano, CH3CH2CH2CH3; c) NaBr disuelto en agua; d) metanol, CH3OH.",
    resolucion: [
      {
        parte: "",
        pasos: [
          { paso: "HF: el H está unido a F, que es muy electronegativo y tiene pares libres. Predomina el puente de hidrógeno.", porque: "El puente de hidrógeno ocurre cuando un H unido a F, O o N interactúa con un par libre de otro F, O o N." },
          { paso: "Butano: molécula apolar, sin H unido a F, O o N ni pares libres. Sólo hay fuerzas de London.", porque: "Las fuerzas de London existen en todas las moléculas y son las únicas cuando no hay polaridad ni puentes de H." },
          { paso: "NaBr en agua: los iones Na+ y Br- interactúan con el dipolo del agua. Predominan las fuerzas ion-dipolo.", porque: "Un compuesto iónico disuelto en un solvente polar se rodea de moléculas polares que lo estabilizan con interacciones ion-dipolo." },
          { paso: "Metanol: tiene O-H, así que forma puente de hidrógeno; además tiene London.", porque: "El grupo OH permite puentes de hidrógeno, que son las fuerzas intermoleculares predominantes en alcoholes." }
        ],
        resultado: "a) puente de hidrógeno; b) London; c) ion-dipolo; d) puente de hidrógeno"
      }
    ],
    errores_tipicos: [
      { error: "Decir que el butano tiene dipolo-dipolo porque tiene enlaces C-H, que son algo polares.", como_evitar: "Un enlace C-H es prácticamente apolar. La molécula de butano es apolar y sólo tiene London." },
      { error: "Llamar puente de hidrógeno a cualquier interacción en la que aparece un H.", como_evitar: "El puente requiere H unido a F, O o N, y un par libre vecino de F, O o N." },
      { error: "Olvidar las fuerzas de London en el caso del HF o del metanol.", como_evitar: "Las fuerzas de London están en todas las moléculas; las otras se suman a ellas." }
    ]
  },
  {
    num: 3,
    nivel: "Básico",
    temas: ["liquidos"],
    enunciado: "El calor de vaporización del agua a 100 °C y 1 atm es 40,7 kJ/mol. Calcule la energía necesaria para vaporizar 50,0 g de agua líquida a 100 °C y 1 atm.",
    resolucion: [
      {
        parte: "",
        pasos: [
          { paso: "Moles de agua: n = 50,0 g / 18,0 g/mol = 2,78 mol.", porque: "El calor de vaporización está expresado por mol, así que hay que pasar la masa a moles." },
          { paso: "Calor absorbido: Q = n x Delta H_vap = 2,78 mol x 40,7 kJ/mol = 113 kJ.", porque: "A temperatura y presión constantes, el calor del cambio de fase líquido a vapor es la entalpía de vaporización por mol." }
        ],
        resultado: "Q = 113 kJ (energía absorbida)"
      }
    ],
    errores_tipicos: [
      { error: "Multiplicar directamente los gramos por 40,7 kJ/mol, sin pasar a moles.", como_evitar: "Siempre convertí la masa a moles antes de usar un valor por mol." },
      { error: "Confundir el calor de vaporización con el calor específico, que no aplica sin cambio de temperatura.", como_evitar: "Si la temperatura no cambia durante el proceso, el calor es el de cambio de fase, no m.c.DeltaT." },
      { error: "Poner signo negativo, como si el proceso liberara energía.", como_evitar: "Vaporizar es endotérmico: Delta H > 0 y el sistema absorbe calor." }
    ]
  },
  {
    num: 4,
    nivel: "Básico",
    temas: ["liquidos"],
    enunciado: "La tensión superficial del benceno a 20 °C es 28,9 dinas/cm. Exprésela en N/m y compárela con la del agua a la misma temperatura (72,75 dinas/cm).",
    resolucion: [
      {
        parte: "",
        pasos: [
          { paso: "1 dina = 10^-5 N y 1 cm = 10^-2 m. Entonces 1 dina/cm = 10^-5 N / 10^-2 m = 10^-3 N/m.", porque: "La tensión superficial es fuerza por unidad de longitud, y hay que convertir cada unidad por separado." },
          { paso: "Benceno: 28,9 dinas/cm = 28,9 x 10^-3 N/m = 0,0289 N/m (28,9 mN/m).", porque: "Se aplica el factor 10^-3 N/m por cada dina/cm." },
          { paso: "Agua: 72,75 dinas/cm = 0,07275 N/m. La tensión del agua es aproximadamente 2,5 veces mayor que la del benceno.", porque: "Ambas magnitudes están ya en la misma unidad, así que la comparación es directa." }
        ],
        resultado: "Benceno: 0,0289 N/m; agua: 0,07275 N/m (la del agua es mayor)"
      }
    ],
    errores_tipicos: [
      { error: "Confundir dinas/cm con dinas/m y dar un resultado 100 veces mayor o menor.", como_evitar: "Revisá la unidad de longitud: cm y m difieren en un factor 100." },
      { error: "Tratar dina y N como la misma unidad, sin el factor 10^-5.", como_evitar: "1 N = 10^5 dinas. Convertí siempre antes de comparar." },
      { error: "Afirmar que mayor tensión superficial implica mayor volatilidad.", como_evitar: "Mayor tensión superficial indica fuerzas intermoleculares más intensas, lo que baja la volatilidad." }
    ]
  },
  {
    num: 5,
    nivel: "Básico",
    temas: ["liquidos"],
    enunciado: "Un recipiente cerrado a 25,0 °C y 1,00 atm de presión total contiene aire húmedo en contacto con agua líquida. A esa temperatura la presión de vapor del agua es 23,8 mmHg. Calcule la presión parcial del aire seco y la fracción molar del agua en la mezcla.",
    resolucion: [
      {
        parte: "",
        pasos: [
          { paso: "Como hay agua líquida, el vapor de agua está saturado: P(H2O) = 23,8 mmHg = 0,0313 atm.", porque: "En presencia de líquido, la presión parcial del vapor es igual a la presión de vapor a esa temperatura." },
          { paso: "Por Dalton: P(aire seco) = P total - P(H2O) = 1,00 atm - 0,0313 atm = 0,969 atm (736 mmHg).", porque: "La presión total es la suma de las presiones parciales de todos los componentes." },
          { paso: "Fracción molar del agua: x(H2O) = P(H2O) / P total = 0,0313 / 1,00 = 0,0313.", porque: "Para una mezcla gaseosa, la fracción molar de un componente es su presión parcial sobre la presión total." }
        ],
        resultado: "P(aire seco) = 0,969 atm (736 mmHg); x(H2O) = 0,0313"
      }
    ],
    errores_tipicos: [
      { error: "Restar mmHg de atm (760 - 23,8 con 1,00 atm), mezclando unidades.", como_evitar: "Pasá todo a la misma unidad antes de restar: 23,8 mmHg = 0,0313 atm." },
      { error: "Usar la presión de vapor como si fuera la presión total, o suponer que el aire seco ocupa 1,00 atm.", como_evitar: "La presión de vapor es sólo la parte que aporta el agua." },
      { error: "Usar la presión de vapor sin que haya agua líquida, como si el aire estuviera siempre saturado.", como_evitar: "La saturación requiere líquido presente en el recipiente; sin líquido, la presión de vapor puede ser menor." }
    ]
  },
  {
    num: 6,
    nivel: "Intermedio",
    temas: ["liquidos"],
    enunciado: "En un recipiente rígido cerrado de 5,00 L, vacío y a 25,0 °C, se introducen 0,500 g de agua líquida. La presión de vapor del agua a 25,0 °C es 23,8 mmHg. a) Calcule la masa de agua en fase vapor y la masa que queda líquida. b) Si el mismo sistema se comprime a 25,0 °C hasta 1,00 L, calcule la presión total y la masa de agua en fase vapor.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Presión de vapor en atm: 23,8 / 760 = 0,0313 atm. T = 25,0 + 273,15 = 298,15 K.", porque: "Hay que usar atm y kelvin para la ecuación de gas ideal." },
          { paso: "Moles máximos de vapor: n = 0,0313 x 5,00 / (0,0821 x 298,15) = 6,40 x 10^-3 mol.", porque: "Si hay líquido, el vapor llega a la presión de vapor, y esa presión define cuántos moles caben en 5,00 L." },
          { paso: "Verificación: el agua total es 0,500 g / 18,0 g/mol = 0,0278 mol, más que 6,40 x 10^-3 mol, así que sí queda líquido.", porque: "La saturación sólo se da si el líquido es suficiente para llenar el vapor hasta esa presión." },
          { paso: "Masa de vapor: 6,40 x 10^-3 mol x 18,0 g/mol = 0,115 g; masa líquida: 0,500 - 0,115 = 0,385 g.", porque: "Conservación de masa: el resto del agua está en el líquido." }
        ],
        resultado: "Vapor: 0,115 g; líquido: 0,385 g"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Al comprimir a 25,0 °C, el vapor en exceso condensa; mientras haya líquido, la presión total queda en 23,8 mmHg.", porque: "La presión de vapor depende sólo de la temperatura: el volumen no la cambia mientras coexisten líquido y vapor." },
          { paso: "Moles de vapor en 1,00 L: n = 0,0313 x 1,00 / (0,0821 x 298,15) = 1,28 x 10^-3 mol; masa = 1,28 x 10^-3 x 18,0 = 0,0230 g.", porque: "Con el nuevo volumen, la cantidad de vapor que cabe a la misma presión de vapor es menor." },
          { paso: "La masa líquida restante es 0,500 - 0,0230 = 0,477 g, y la presión total es 23,8 mmHg (0,0313 atm).", porque: "Se confirma que el sistema sigue con líquido, así que el resultado de saturación es válido." }
        ],
        resultado: "P total = 23,8 mmHg (0,0313 atm); vapor = 0,0230 g"
      }
    ],
    errores_tipicos: [
      { error: "En b) suponer que al reducir el volumen a 1/5 la presión se multiplica por 5 (como en un gas ideal).", como_evitar: "Con líquido presente, la presión no cambia; el volumen sólo modifica la cantidad de vapor condensado." },
      { error: "Calcular la masa de vapor suponiendo que todo el agua (0,500 g) se evapora, sin comparar con la saturación.", como_evitar: "Calculá primero el máximo de vapor posible y comparalo con la masa disponible." },
      { error: "Usar 23,8 mmHg dentro de n = PV/RT sin convertir a atm.", como_evitar: "Convertí a atm antes de usar R = 0,0821 L.atm/(mol.K)." }
    ]
  },
  {
    num: 7,
    nivel: "Intermedio",
    temas: ["liquidos"],
    enunciado: "Un marco de alambre en forma de U sostiene una película de agua con dos caras. El lado móvil, de 4,00 cm de largo, se desplaza 5,00 cm manteniendo la película. La tensión superficial del agua a 20 °C es 0,07275 N/m. a) Calcule la energía necesaria para estirar la película. b) Calcule la misma energía si el agua tiene detergente que reduce la tensión superficial a 0,0450 N/m.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Cambio de área: Delta A = 2 caras x 4,00 cm x 5,00 cm = 40,0 cm^2 = 4,00 x 10^-3 m^2.", porque: "La película tiene dos superficies, así que se cuentan las dos caras; además la unidad de la tensión es N/m, y hay que pasar el área a m^2." },
          { paso: "Energía: E = sigma x Delta A = 0,07275 N/m x 4,00 x 10^-3 m^2 = 2,91 x 10^-4 J.", porque: "La tensión superficial es energía por unidad de área (J/m^2 = N/m), así que la energía es sigma por el área creada." }
        ],
        resultado: "E = 2,91 x 10^-4 J"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "E = 0,0450 N/m x 4,00 x 10^-3 m^2 = 1,80 x 10^-4 J.", porque: "Se usa la misma área, con la nueva tensión superficial." },
          { paso: "La energía baja un 38 %, porque el detergente reduce las fuerzas no compensadas en la superficie.", porque: "Menos tensión significa menos energía para crear la misma área superficial." }
        ],
        resultado: "E = 1,80 x 10^-4 J"
      }
    ],
    errores_tipicos: [
      { error: "Usar un área de una sola cara (2,00 x 10^-3 m^2), olvidando que la película tiene dos caras.", como_evitar: "Las películas delgadas tienen dos superficies: el área que se crea es el doble." },
      { error: "Usar cm^2 directamente con N/m, sin pasar a m^2.", como_evitar: "Verificá unidades: sigma en N/m multiplica área en m^2 para dar J." },
      { error: "Confundir dinas/cm con N/m (factor 10^-3) al usar el valor de la tensión.", como_evitar: "Convertí dinas/cm a N/m antes de hacer el cálculo: 1 dina/cm = 10^-3 N/m." }
    ]
  },
  {
    num: 8,
    nivel: "Intermedio",
    temas: ["liquidos"],
    enunciado: "En un recipiente rígido cerrado de 4,00 L se introducen 0,100 g de agua líquida y se calienta a 40,0 °C, donde la presión de vapor del agua es 55,3 mmHg. a) Verifique si queda agua líquida a 40,0 °C. b) Luego el recipiente se enfría a 25,0 °C (presión de vapor 23,8 mmHg). Calcule la masa de agua líquida que queda.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Suponga que todo el agua está como vapor a 40,0 °C: n = 0,100 g / 18,0 g/mol = 5,56 x 10^-3 mol. T = 313,15 K.", porque: "Para saber si hay líquido, primero se calcula la presión que tendría toda el agua en fase vapor." },
          { paso: "P = n.R.T / V = 5,56 x 10^-3 x 0,0821 x 313,15 / 4,00 = 0,0357 atm = 27,1 mmHg.", porque: "Si la presión calculada es menor que la de vapor, el vapor no está saturado y no puede haber líquido en equilibrio." },
          { paso: "Como 27,1 mmHg < 55,3 mmHg, no hay condensación: toda el agua está como vapor a 40,0 °C.", porque: "El líquido sólo se mantiene si la presión del vapor llega a la presión de vapor a esa temperatura." }
        ],
        resultado: "Todo el agua está en vapor a 40,0 °C (P = 27,1 mmHg)"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Máximo vapor a 25,0 °C: n_max = (23,8 / 760) x 4,00 / (0,0821 x 298,15) = 5,12 x 10^-3 mol, es decir 5,12 x 10^-3 x 18,0 = 0,0922 g.", porque: "Al enfriar, la presión de vapor baja, y sólo puede quedar en vapor la cantidad que corresponde a 23,8 mmHg en 4,00 L." },
          { paso: "Masa líquida: 0,100 - 0,0922 = 7,8 x 10^-3 g (7,8 mg) de agua líquida.", porque: "El exceso sobre el máximo de vapor condensa y queda como líquido." }
        ],
        resultado: "Líquido a 25,0 °C: 7,8 x 10^-3 g"
      }
    ],
    errores_tipicos: [
      { error: "Suponer que al enfriar se condensa todo el agua, sin calcular cuánto vapor puede quedar.", como_evitar: "Calculá el vapor máximo a la nueva temperatura y el resto es el líquido." },
      { error: "Usar la presión de vapor a 40 °C (55,3 mmHg) para calcular el vapor a 25 °C.", como_evitar: "Cada temperatura tiene su propia presión de vapor: a 25 °C usá 23,8 mmHg." },
      { error: "Usar 40 °C en lugar de 313,15 K en la ecuación de gas ideal.", como_evitar: "Convertí a kelvin antes de calcular moles o presiones." }
    ]
  },
  {
    num: 9,
    nivel: "Intermedio",
    temas: ["liquidos"],
    enunciado: "Se comparan dos líquidos isómeros de fórmula C3H8O: 1-propanol, CH3CH2CH2OH (punto de ebullición 97 °C), y etil metil éter, CH3OCH2CH3 (punto de ebullición aproximado 10 °C). a) Indique el tipo de fuerzas intermoleculares de cada uno y escriba sus estructuras de Lewis. b) Prediga cuál tiene mayor presión de vapor, cuál tiene mayor viscosidad y cuál tiene mayor tensión superficial, y justifique.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "1-propanol: tiene un H unido a O, con pares libres en el O. Predomina el puente de hidrógeno, además de London.", porque: "El O-H permite puentes de hidrógeno, que son fuerzas intermoleculares muy intensas." },
          { paso: "Etil metil éter: el O está unido a dos carbonos y no tiene H unido a él. Predominan dipolo-dipolo (el enlace C-O-C es polar) y London.", porque: "Sin H unido a O, no hay puente de hidrógeno; la molécula es polar, pero con fuerzas dipolo-dipolo más débiles." }
        ],
        resultado: "1-propanol: puente de hidrógeno + London; éter: dipolo-dipolo + London"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Ambos tienen la misma masa molar (C3H8O), así que la diferencia viene sólo de las fuerzas intermoleculares.", porque: "Cuando se comparan isómeros, la masa molar no sirve para diferenciarlos; hay que mirar las fuerzas." },
          { paso: "El éter tiene fuerzas más débiles, así que tiene mayor presión de vapor y es más volátil.", porque: "A menor fuerza intermolecular, las moléculas escapan más fácil a la fase vapor." },
          { paso: "El 1-propanol tiene puentes de hidrógeno: mayor viscosidad y mayor tensión superficial.", porque: "Las fuerzas intermoleculares intensas aumentan la resistencia a fluir y la energía de la superficie." }
        ],
        resultado: "Mayor presión de vapor: éter; mayor viscosidad y tensión superficial: 1-propanol"
      }
    ],
    errores_tipicos: [
      { error: "Decir que el éter tiene puente de hidrógeno porque tiene un átomo de O.", como_evitar: "Para puente de hidrógeno el O debe estar unido a H. En el éter el O está unido sólo a C." },
      { error: "Comparar la volatilidad por masa molar, cuando son isómeros con la misma masa.", como_evitar: "Con isómeros, comparás las fuerzas intermoleculares, no la masa." },
      { error: "Confundir mayor punto de ebullición con mayor presión de vapor.", como_evitar: "Mayor presión de vapor a una T dada significa más volátil, y la relación con el punto de ebullición es inversa." }
    ]
  },
  {
    num: 10,
    nivel: "Intermedio",
    temas: ["liquidos"],
    enunciado: "En un recipiente de 10,0 L, a 25,0 °C y 1,00 atm de presión total, el aire tiene una humedad relativa de 60 %. La humedad relativa se define como HR = P(H2O) / P_vap(H2O) x 100, con P_vap del agua a 25,0 °C = 23,8 mmHg. a) Calcule la presión parcial del agua en el aire. b) Calcule la masa de agua en forma de vapor que contiene el recipiente.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "P(H2O) = HR x P_vap = 0,60 x 23,8 mmHg = 14,3 mmHg = 0,0188 atm.", porque: "Por definición, la humedad relativa es la fracción de la presión de vapor que tiene el agua en el aire." },
          { paso: "Por Dalton, P(aire seco) = 1,00 atm - 0,0188 atm = 0,981 atm.", porque: "La presión total se reparte entre el vapor de agua y el resto de los gases." }
        ],
        resultado: "P(H2O) = 14,3 mmHg (0,0188 atm)"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "T = 25,0 + 273,15 = 298,15 K. Moles de agua: n = P.V / (R.T) = 0,0188 x 10,0 / (0,0821 x 298,15) = 7,68 x 10^-3 mol.", porque: "El vapor de agua se comporta como gas ideal en esas condiciones, así que se usa su presión parcial, no la total." },
          { paso: "Masa de agua: 7,68 x 10^-3 mol x 18,0 g/mol = 0,138 g.", porque: "Se pasa de moles a gramos con la masa molar del agua." }
        ],
        resultado: "m(H2O vapor) = 0,138 g"
      }
    ],
    errores_tipicos: [
      { error: "Usar la presión total de 1,00 atm como presión parcial del agua en la ecuación de gas ideal.", como_evitar: "La masa de agua sale de su presión parcial, obtenida con la humedad relativa." },
      { error: "Usar 23,8 mmHg (presión de vapor) como presión parcial del agua, sin multiplicar por la humedad relativa.", como_evitar: "La presión de vapor es el máximo posible; la presión parcial real es HR por ese máximo." },
      { error: "Interpretar 60 % como 60 mmHg de presión parcial.", como_evitar: "Hacé la cuenta explícita: 0,60 x 23,8 mmHg." }
    ]
  },
  {
    num: 11,
    nivel: "Avanzado",
    temas: ["liquidos"],
    enunciado: "Un recipiente rígido de 5,00 L contiene N2(g) a 760 mmHg y 25,0 °C. Se introducen 2,00 g de agua líquida, se cierra y se espera al equilibrio a 25,0 °C. La presión de vapor del agua a 25,0 °C es 23,8 mmHg. Suponga que el N2 no se disuelve en el agua y que el volumen del líquido es despreciable. a) Calcule la masa de agua en fase vapor y la masa de agua líquida. b) Calcule la presión total final. c) Justifique si la presión parcial del N2 cambió respecto de su valor inicial de 760 mmHg.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Presión de vapor en atm: 23,8 / 760 = 0,0313 atm. T = 298,15 K.", porque: "Hay que usar atm y kelvin para aplicar la ecuación de gas ideal al vapor." },
          { paso: "Como hay líquido, el vapor está saturado: n_max = 0,0313 x 5,00 / (0,0821 x 298,15) = 6,40 x 10^-3 mol, es decir 0,115 g.", porque: "La presión de vapor define el máximo de vapor que cabe en el volumen, sin importar la presencia del N2." },
          { paso: "Masa líquida: 2,00 - 0,115 = 1,88 g.", porque: "Por conservación de masa, el agua que no está en vapor queda líquida." }
        ],
        resultado: "Vapor: 0,115 g; líquido: 1,88 g"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Por Dalton: P total = P(N2) + P(H2O vapor) = 760 mmHg + 23,8 mmHg = 784 mmHg (1,03 atm).", porque: "El vapor de agua aporta su presión parcial, que se suma a la del N2." }
        ],
        resultado: "P total = 784 mmHg (1,03 atm)"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "P(N2) = n(N2).R.T / V: n(N2), T y V no cambian (el N2 no se disuelve), así que P(N2) sigue en 760 mmHg.", porque: "La presión parcial de un gas depende de sus propios moles, del volumen y de la temperatura, no de los otros componentes." },
          { paso: "Lo que cambió es la presión total, por la contribución del vapor de agua.", porque: "La presión total aumenta porque se suma la presión parcial del vapor, que antes no existía." }
        ],
        resultado: "No cambió: la presión parcial del N2 sigue en 760 mmHg"
      }
    ],
    errores_tipicos: [
      { error: "Sumar la presión de vapor a la total y restarla a la del N2 para mantener 760 mmHg.", como_evitar: "Dalton: la presión parcial del N2 no se modifica por la presencia del vapor de agua." },
      { error: "Calcular la masa de vapor como si todo el agua (2,00 g) se evaporara.", como_evitar: "Calculá primero el máximo de vapor a 23,8 mmHg y comparalo con la masa disponible." },
      { error: "Usar 23,8 mmHg dentro de PV = nRT sin pasar a atm, o usar 760 mmHg con R en atm.", como_evitar: "Mantené una sola unidad de presión y convertí antes de calcular." }
    ]
  },
  {
    num: 12,
    nivel: "Avanzado",
    temas: ["liquidos"],
    enunciado: "Se quieren convertir 100,0 g de agua líquida a 20,0 °C en vapor a 100 °C y 1 atm. Datos: calor específico del agua líquida c = 4,18 J/(g.°C); Delta H_vap del agua a 100 °C = 40,7 kJ/mol; M(H2O) = 18,0 g/mol. a) Calcule el calor necesario para llevar el agua de 20,0 °C a 100 °C. b) Calcule el calor necesario para vaporizar toda el agua a 100 °C. c) Calcule el calor total y justifique por qué, para la misma masa, la vaporización requiere mucha más energía que el calentamiento.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "q = m.c.Delta T = 100,0 g x 4,18 J/(g.°C) x (100,0 - 20,0) °C = 3,34 x 10^4 J = 33,4 kJ.", porque: "Mientras no hay cambio de fase, la energía que se absorbe es la que sube la temperatura, según el calor específico." }
        ],
        resultado: "q(calentamiento) = 33,4 kJ"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "n = 100,0 g / 18,0 g/mol = 5,56 mol.", porque: "La entalpía de vaporización está dada por mol, así que hay que pasar la masa a moles." },
          { paso: "q(vaporización) = n x Delta H_vap = 5,56 mol x 40,7 kJ/mol = 226 kJ.", porque: "Durante el cambio de fase a 100 °C la temperatura no cambia, y el calor es la entalpía de vaporización." }
        ],
        resultado: "q(vaporización) = 226 kJ"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "Q total = 33,4 kJ + 226 kJ = 2,60 x 10^2 kJ.", porque: "Los dos tramos son sucesivos, así que el calor total es la suma." },
          { paso: "Por mol, calentar 80 °C cuesta 18,0 g/mol x 4,18 J/(g.°C) x 80 °C = 6,0 kJ, y vaporizar cuesta 40,7 kJ: unas 6,8 veces más.", porque: "Vaporizar exige vencer las fuerzas intermoleculares del agua (puentes de hidrógeno), mientras que calentar sólo aumenta la energía cinética." }
        ],
        resultado: "Q total = 2,60 x 10^2 kJ; la vaporización domina por romper las FI"
      }
    ],
    errores_tipicos: [
      { error: "Usar Delta H_vap en kJ/mol con la masa en gramos, sin pasar a moles (por ejemplo, 100 x 40,7 = 4070 kJ).", como_evitar: "Siempre convertí la masa a moles antes de usar un valor por mol." },
      { error: "Usar m.c.Delta T para el cambio de fase, o usar Delta H_vap para el calentamiento.", como_evitar: "Calentamiento: m.c.Delta T. Cambio de fase a T constante: n.Delta H." },
      { error: "Usar 100 °C como variación de temperatura en lugar de 80 °C (100 - 20).", como_evitar: "La variación de temperatura es T final menos T inicial." }
    ]
  },
  {
    num: 13,
    nivel: "Avanzado",
    temas: ["liquidos"],
    enunciado: "Una gota de un líquido se deposita sobre una superficie sólida a 20 °C. Las tensiones interfaciales son: gamma(sólido-vapor) = 0,0700 N/m; gamma(sólido-líquido) = 0,0300 N/m; gamma(líquido-vapor) = 0,0728 N/m. Use la ecuación de Young: gamma_sv = gamma_sl + gamma_lv x cos(theta). a) Calcule el ángulo de contacto theta. b) Indique si el líquido moja la superficie. c) Si un surfactante reduce gamma(líquido-vapor) a 0,0350 N/m, manteniendo las otras dos, calcule el nuevo ángulo de contacto e interprete el resultado.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Despejar cos(theta) = (gamma_sv - gamma_sl) / gamma_lv = (0,0700 - 0,0300) / 0,0728 = 0,549.", porque: "La ecuación de Young relaciona las tres tensiones con el coseno del ángulo de contacto." },
          { paso: "theta = arccos(0,549) = 56,7°.", porque: "El ángulo se obtiene de la función inversa del coseno." }
        ],
        resultado: "theta = 56,7°"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Como theta < 90°, cos(theta) > 0 y gamma_sv > gamma_sl: el líquido moja parcialmente la superficie.", porque: "Un ángulo menor a 90° indica que la adhesión líquido-sólido supera a la cohesión del líquido, y el líquido se extiende en parte." }
        ],
        resultado: "Sí moja parcialmente (theta < 90°)"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "cos(theta) = (0,0700 - 0,0300) / 0,0350 = 0,0400 / 0,0350 = 1,14.", porque: "Se aplica la misma ecuación con la nueva tensión líquido-vapor." },
          { paso: "Un coseno no puede ser mayor que 1, así que no existe ángulo de equilibrio. La condición gamma_sv > gamma_sl + gamma_lv se cumple y el líquido se extiende hasta mojar completamente la superficie (theta = 0).", porque: "Cuando la energía de la superficie sólida es mayor que la suma de las otras dos, el líquido se esparce sin formar gota." }
        ],
        resultado: "No hay ángulo de equilibrio: mojado total (theta = 0)"
      }
    ],
    errores_tipicos: [
      { error: "Mezclar mN/m con N/m y obtener cos(theta) = 0,000549, un valor absurdo.", como_evitar: "Verificá que todas las tensiones estén en N/m antes de restar o dividir." },
      { error: "Calcular arccos(1,14) en la calculadora, obtener error y concluir que el dato está mal, sin interpretar el spreading.", como_evitar: "Un coseno mayor que 1 indica que la gota no forma equilibrio y se esparce sobre la superficie." },
      { error: "Pensar que un cos(theta) grande implica un ángulo grande.", como_evitar: "El ángulo crece cuando el coseno baja: cos 0 = 1 corresponde a theta = 0 (mojado total)." }
    ]
  },
  {
    num: 14,
    nivel: "Avanzado",
    temas: ["liquidos"],
    enunciado: "En un recipiente rígido cerrado de 3,00 L se colocan 1,00 g de agua líquida y se hace vacío. Se mantiene a 25,0 °C y luego se calienta a 60,0 °C. Presiones de vapor del agua: 23,8 mmHg a 25,0 °C y 149,4 mmHg a 60,0 °C. a) Calcule la masa de agua en vapor y la presión total a 25,0 °C. b) Calcule la masa de agua en vapor y la presión total a 60,0 °C. c) Justifique por qué la presión sube más de 6 veces aunque el volumen no cambie, y qué efecto tiene la cantidad de agua.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Hay líquido: el vapor está saturado y P = 23,8 mmHg = 0,0313 atm.", porque: "Mientras coexisten líquido y vapor, la presión es la presión de vapor a esa temperatura." },
          { paso: "n(vapor) = 0,0313 x 3,00 / (0,0821 x 298,15) = 3,84 x 10^-3 mol; masa = 3,84 x 10^-3 x 18,0 = 0,0691 g; líquido = 1,00 - 0,0691 = 0,931 g.", porque: "La cantidad de vapor se obtiene con la presión de vapor, y el resto queda líquido por conservación de masa." }
        ],
        resultado: "Vapor: 0,0691 g; P = 23,8 mmHg; líquido: 0,931 g"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "T = 60,0 + 273,15 = 333,15 K. P_vap = 149,4 mmHg = 0,197 atm.", porque: "A 60 °C la presión de vapor es mayor, y la ecuación de gas se usa con kelvin y atm." },
          { paso: "n_max = 0,197 x 3,00 / (0,0821 x 333,15) = 0,0216 mol = 0,388 g. Como 0,388 g < 1,00 g, sigue habiendo líquido.", porque: "Hay que verificar la saturación con la masa disponible; aquí queda líquido, así que P = 149,4 mmHg." }
        ],
        resultado: "Vapor: 0,388 g; P = 149,4 mmHg (0,197 atm)"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "Con V constante y líquido presente, la presión total es la presión de vapor a cada temperatura. La presión sube de 23,8 a 149,4 mmHg porque la presión de vapor crece con T.", porque: "La presión de vapor depende sólo de la temperatura (y de las fuerzas intermoleculares), no del volumen." },
          { paso: "La cantidad de agua (1,00 g) no cambia la presión final, mientras quede líquido; sólo cambia la masa de vapor.", porque: "El líquido en exceso se reacomoda para mantener la presión de vapor, así que sólo fija la presión de equilibrio." }
        ],
        resultado: "La presión depende de T, no del volumen ni de la cantidad de líquido (mientras haya líquido)"
      }
    ],
    errores_tipicos: [
      { error: "Calcular la presión a 60 °C con la ley de Gay-Lussac desde 23,8 mmHg (P = 23,8 x 333/298 = 26,6 mmHg).", como_evitar: "La presión de vapor no sigue la ley de gas ideal: se usa la tabla a cada temperatura." },
      { error: "Suponer que todo el agua se evapora a 60 °C, con 1,00 g de vapor y P = 384 mmHg.", como_evitar: "Calculá el máximo de vapor a la presión de vapor y comparalo con la masa disponible." },
      { error: "Olvidar convertir 60,0 °C a kelvin al calcular la masa de vapor.", como_evitar: "Convertí siempre a kelvin: 60,0 °C = 333,15 K." }
    ]
  },
  {
    num: 15,
    nivel: "Avanzado",
    temas: ["liquidos"],
    enunciado: "Dos recipientes rígidos idénticos de 1,00 L, vacíos y a 20,0 °C. En uno se introducen 0,500 g de n-hexano (C6H14, M = 86,2 g/mol) y en el otro 0,500 g de agua. Las presiones de vapor a 20,0 °C son 120 mmHg para el hexano (valor aproximado de tabla, supuesto) y 17,5 mmHg para el agua. a) Determine si queda líquido en cada recipiente y la presión final de cada uno. b) Calcule la masa de líquido que queda en el recipiente de agua. c) Justifique cuál de los dos líquidos tiene fuerzas intermoleculares más intensas.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Hexano: n = 0,500 / 86,2 = 5,80 x 10^-3 mol. Si todo fuera vapor a 293,15 K: P = 5,80 x 10^-3 x 0,0821 x 293,15 / 1,00 = 0,140 atm = 106 mmHg.", porque: "Primero se calcula la presión que tendría el hexano si se evaporara todo, para ver si se alcanza la presión de vapor." },
          { paso: "Como 106 mmHg < 120 mmHg, no se alcanza la saturación: no queda líquido y la presión final es 106 mmHg.", porque: "El vapor sólo condensa (y queda líquido) si la presión llegaría a la presión de vapor." },
          { paso: "Agua: n = 0,500 / 18,0 = 0,0278 mol. Si todo fuera vapor: P = 0,0278 x 0,0821 x 293,15 / 1,00 = 0,669 atm = 508 mmHg, mayor que 17,5 mmHg.", porque: "Como la presión que tendría todo el vapor supera la presión de vapor, sí queda líquido." },
          { paso: "Agua: la presión final es la presión de vapor, 17,5 mmHg (0,0230 atm).", porque: "Con líquido presente, la presión queda fijada en la presión de vapor a esa temperatura." }
        ],
        resultado: "Hexano: sin líquido, P = 106 mmHg; agua: con líquido, P = 17,5 mmHg"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Vapor de agua: n = (17,5 / 760) x 1,00 / (0,0821 x 293,15) = 9,57 x 10^-4 mol = 0,0172 g.", porque: "Con la presión de vapor se obtiene el máximo de vapor en 1,00 L." },
          { paso: "Líquido: 0,500 - 0,0172 = 0,483 g.", porque: "Por conservación de masa, el resto queda líquido." }
        ],
        resultado: "Líquido = 0,483 g"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "El hexano tiene presión de vapor mucho mayor, es decir, sus moléculas escapan más fácilmente: sus fuerzas intermoleculares son más débiles (sólo London).", porque: "Mayor presión de vapor implica menores fuerzas intermoleculares." },
          { paso: "El agua forma puentes de hidrógeno, que son mucho más intensos, y por eso tiene la presión de vapor más baja.", porque: "Los puentes de hidrógeno son las fuerzas intermoleculares más intensas entre las consideradas." }
        ],
        resultado: "El agua tiene fuerzas intermoleculares más intensas"
      }
    ],
    errores_tipicos: [
      { error: "Suponer que los 0,500 g de hexano quedan líquidos, sin calcular si se alcanza la presión de vapor.", como_evitar: "Calculá primero la presión que daría todo el vapor y comparala con la presión de vapor." },
      { error: "Decir que el hexano tiene mayores fuerzas intermoleculares por tener más átomos o mayor masa molar.", como_evitar: "Lo que importa es el tipo e intensidad de la interacción, no la cantidad de átomos." },
      { error: "Usar 0,500 g de agua como si la presión final fuera la de todo el vapor (508 mmHg).", como_evitar: "Cuando hay líquido, la presión final es la presión de vapor; la presión de todo el vapor sólo sirve para verificar." }
    ]
  },
  {
    num: 16,
    nivel: "Tipo parcial",
    temas: ["liquidos", "gases"],
    enunciado: "Un laboratorio de química orgánica almacena etanol en un recipiente rígido cerrado de 10,0 L, en el que previamente se hizo vacío. A 25,0 °C la presión de vapor del etanol es 59,0 mmHg (valor de tabla). a) Si se introducen 5,00 g de etanol líquido (M = 46,1 g/mol), calcule la masa de etanol en fase vapor y la masa que queda líquida a 25,0 °C. b) Calcule la presión total en el recipiente. c) Si el mismo recipiente se comprime a 5,00 L a 25,0 °C (sin cambiar la cantidad total de etanol), calcule la masa de etanol en fase vapor y la presión total. d) Justifique qué pasaría con la presión final si, en lugar de 5,00 g, se hubiera introducido 1,00 g de etanol en el recipiente de 10,0 L.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "T = 298,15 K. Presión de vapor en atm: 59,0 / 760 = 0,0776 atm. Como hay líquido, el vapor está saturado.", porque: "Con líquido presente, la presión del vapor es la presión de vapor a 25 °C." },
          { paso: "n(vapor) = 0,0776 x 10,0 / (0,0821 x 298,15) = 3,17 x 10^-2 mol; masa = 3,17 x 10^-2 mol x 46,1 g/mol = 1,46 g.", porque: "La cantidad de vapor que cabe en 10,0 L a esa presión define la masa de vapor." },
          { paso: "Masa líquida: 5,00 - 1,46 = 3,54 g.", porque: "Por conservación de masa, lo que no está en vapor queda líquido." }
        ],
        resultado: "Vapor: 1,46 g; líquido: 3,54 g"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "La presión total es la presión de vapor del etanol a 25 °C: 59,0 mmHg (0,0776 atm).", porque: "Mientras haya líquido en equilibrio con el vapor, la presión no depende de la cantidad de líquido ni del volumen." }
        ],
        resultado: "P total = 59,0 mmHg (0,0776 atm)"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "Al comprimir a 5,00 L, a T constante, el vapor en exceso condensa. Como sigue habiendo líquido, P sigue en 59,0 mmHg.", porque: "El volumen cambia la cantidad de vapor, pero no la presión de equilibrio, que sólo depende de T." },
          { paso: "Masa de vapor a 5,00 L: 1,46 / 2 = 0,731 g; líquido: 5,00 - 0,731 = 4,27 g.", porque: "Como la presión es la misma y el volumen se reduce a la mitad, la cantidad de vapor que cabe también se reduce a la mitad." }
        ],
        resultado: "Vapor: 0,731 g; P total = 59,0 mmHg"
      },
      {
        parte: "d)",
        pasos: [
          { paso: "Con 1,00 g: n = 1,00 / 46,1 = 0,0217 mol. Si todo se evaporara en 10,0 L: P = 0,0217 x 0,0821 x 298,15 / 10,0 = 0,0531 atm = 40,4 mmHg.", porque: "Se verifica si se alcanza la presión de vapor con esa cantidad de etanol." },
          { paso: "Como 40,4 mmHg < 59,0 mmHg, no hay líquido: todo el etanol está como vapor y la presión final es 40,4 mmHg.", porque: "Sin líquido, la presión depende de los moles de etanol y del volumen, y nunca llega a la presión de vapor." }
        ],
        resultado: "P final = 40,4 mmHg (0,0531 atm), sin líquido"
      }
    ],
    errores_tipicos: [
      { error: "En c) suponer que al reducir el volumen a la mitad la presión se duplica, como en un gas ideal.", como_evitar: "Con líquido presente, la presión de vapor no cambia con el volumen; el vapor se condensa." },
      { error: "En d) suponer que con 1,00 g la presión sigue siendo 59,0 mmHg, sin verificar si hay líquido.", como_evitar: "Comparás la masa disponible con el máximo de vapor. Si es menor, no hay líquido y P = n.R.T/V." },
      { error: "Calcular todo el vapor sin comparar con la masa disponible, en a).", como_evitar: "Primero calculá el máximo de vapor a la presión de vapor, y después comparalo con la masa total." }
    ]
  }
];
