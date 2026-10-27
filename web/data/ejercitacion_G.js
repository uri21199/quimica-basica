window.EJERCITACION = window.EJERCITACION || {};

window.EJERCITACION["termodinamica"] = [
  {
    num: 1,
    nivel: "Básico",
    temas: ["termodinamica"],
    enunciado: "Un calentador de inmersión entrega calor a 200,0 g de agua que inicialmente está a 20,0 C. La temperatura final del agua es 75,0 C. Calcule el calor absorbido por el agua. Dato: c(H2O, l) = 4,18 J/(g x K).",
    resolucion: [
      {
        parte: "",
        pasos: [
          { paso: "Datos: m = 200,0 g; T_inicial = 20,0 C; T_final = 75,0 C. Delta T = 75,0 - 20,0 = 55,0 K.", porque: "El cambio de temperatura es final menos inicial. Un intervalo de 1 C equivale a un intervalo de 1 K, así que el Delta T se puede expresar en K." },
          { paso: "q = m x c x Delta T = 200,0 g x 4,18 J/(g x K) x 55,0 K = 4,60 x 10^4 J.", porque: "Sin cambio de fase ni trabajo, el calor sensible es q = m c Delta T: el calor específico es la energía por gramo y por kelvin necesaria para variar la temperatura." },
          { paso: "Como q > 0, el agua gana calor del calentador.", porque: "Por convención, q > 0 cuando el calor entra al sistema (aquí, el agua)." }
        ],
        resultado: "q = 4,60 x 10^4 J (46,0 kJ) absorbidos por el agua"
      }
    ],
    errores_tipicos: [
      { error: "Usar c = 1 cal/(g x C) y dejar el resultado en cal, o mezclar cal con J sin convertir.", como_evitar: "Trabajá con c = 4,18 J/(g x K) y expresá la masa en g y el Delta T en K. Si el dato está en cal, convertí con 1 cal = 4,184 J." },
      { error: "Calcular Delta T como T_inicial - T_final y obtener q negativo para un cuerpo que gana calor.", como_evitar: "Delta T = T_final - T_inicial. El signo de q indica si el sistema gana (+) o cede (-) calor." }
    ]
  },
  {
    num: 2,
    nivel: "Básico",
    temas: ["termodinamica"],
    enunciado: "Calcule la entalpía estándar de la combustión completa del metano a 25 C, con agua líquida como producto: CH4(g) + 2 O2(g) -> CO2(g) + 2 H2O(l). Use las entalpías de formación estándar: CH4(g) = -74,8 kJ/mol; CO2(g) = -393,5 kJ/mol; H2O(l) = -285,8 kJ/mol; O2(g) = 0.",
    resolucion: [
      {
        parte: "",
        pasos: [
          { paso: "Supuesto: 25 C y 1 atm (condiciones estándar). El O2(g) es un elemento en su forma más estable, así que su Delta Hf = 0.", porque: "Por definición, la entalpía de formación de un elemento en su estado estándar es cero; por eso el O2 no aporta a la suma." },
          { paso: "Delta Hc = [1 x (-393,5) + 2 x (-285,8)] - [1 x (-74,8) + 2 x 0] = -965,1 + 74,8 = -890,3 kJ.", porque: "Delta Hr = suma de n x Delta Hf(productos) - suma de n x Delta Hf(reactivos), usando los coeficientes de la ecuación balanceada." },
          { paso: "La ecuación está escrita para 1 mol de CH4, así que el valor corresponde a 1 mol de combustible.", porque: "Los valores de Delta H están referidos a la reacción tal como está escrita (coeficientes en mol)." }
        ],
        resultado: "Delta Hc = -890,3 kJ por mol de CH4 (reacción exotérmica)"
      }
    ],
    errores_tipicos: [
      { error: "Restar al revés (reactivos menos productos) y obtener +890,3 kJ.", como_evitar: "Siempre productos menos reactivos con Delta Hf. La Delta Hc de tablas usa la inversa, pero acá usamos Delta Hf." },
      { error: "Olvidar multiplicar el H2O por 2 y sumar -285,8 una sola vez.", como_evitar: "Escribí los coeficientes al lado de cada sustancia antes de sumar." }
    ]
  },
  {
    num: 3,
    nivel: "Básico",
    temas: ["termodinamica"],
    enunciado: "Un gas se expande desde 2,00 L hasta 9,00 L contra una presión externa constante de 1,00 atm. Calcule el trabajo W intercambiado (en J) e indique si el sistema recibe o realiza trabajo. Dato: 1 atm x L = 101,3 J.",
    resolucion: [
      {
        parte: "",
        pasos: [
          { paso: "Delta V = 9,00 L - 2,00 L = 7,00 L.", porque: "El trabajo de expansión depende del cambio de volumen, que es final menos inicial." },
          { paso: "W = -P_ext x Delta V = -1,00 atm x 7,00 L = -7,00 atm x L.", porque: "Con la convención del sistema, el trabajo de expansión contra presión externa constante es W = -P_ext Delta V. En una expansión Delta V > 0, así que W < 0." },
          { paso: "Pasamos a J: W = -7,00 x 101,3 J = -709 J = -7,09 x 10^2 J.", porque: "Para que W quede en J con P en atm y V en L, se usa la equivalencia 1 atm x L = 101,3 J." },
          { paso: "Como W < 0, el sistema realiza trabajo sobre el entorno (cede energía).", porque: "Un W negativo, por convención, significa que el sistema entrega energía al entorno." }
        ],
        resultado: "W = -7,09 x 10^2 J; el sistema realiza trabajo sobre el entorno"
      }
    ],
    errores_tipicos: [
      { error: "Escribir W = +P Delta V, y por lo tanto dar signo positivo en una expansión.", como_evitar: "Con la convención del sistema, W = -P_ext Delta V. Expansión (Delta V > 0) implica W < 0." },
      { error: "Dejar el resultado en atm x L y no pasarlo a J.", como_evitar: "Si la respuesta pide J, multiplicá por 101,3 J por cada atm x L." }
    ]
  },
  {
    num: 4,
    nivel: "Básico",
    temas: ["termodinamica"],
    enunciado: "Un sistema absorbe 350 J de calor desde el entorno. Durante el proceso, el entorno realiza sobre el sistema un trabajo de 120 J (una compresión). Calcule la variación de energía interna del sistema, Delta U.",
    resolucion: [
      {
        parte: "",
        pasos: [
          { paso: "Q = +350 J (el calor entra al sistema) y W = +120 J (el entorno trabaja sobre el sistema).", porque: "Con la convención del sistema, Q > 0 si entra calor, y W > 0 si el entorno realiza trabajo sobre el sistema, como en una compresión." },
          { paso: "Delta U = Q + W = 350 J + 120 J = 470 J = 4,70 x 10^2 J.", porque: "El primer principio de la termodinámica dice que la energía se conserva: Delta U = Q + W." }
        ],
        resultado: "Delta U = +4,70 x 10^2 J"
      }
    ],
    errores_tipicos: [
      { error: "Restar W porque se piensa que el trabajo 'sale' del sistema, o poner W = -120 J en una compresión.", como_evitar: "En una compresión el entorno trabaja sobre el sistema: W > 0. Usá siempre la convención del sistema." },
      { error: "Confundir Q con trabajo y sumar 350 J y 120 J sin preguntar quién hace cada cosa.", como_evitar: "Identificá primero si el intercambio es de calor (Q) o de trabajo (W) y su sentido." }
    ]
  },
  {
    num: 5,
    nivel: "Básico",
    temas: ["termodinamica"],
    enunciado: "Calcule la energía necesaria para fundir completamente 25,0 g de hielo que se encuentra a 0 C y 1 atm. Datos: Delta Hfus(H2O) = 6,01 kJ/mol; M(H2O) = 18,0 g/mol.",
    resolucion: [
      {
        parte: "",
        pasos: [
          { paso: "n = 25,0 g / 18,0 g/mol = 1,389 mol de H2O.", porque: "El dato de entalpía de fusión está en kJ por mol, así que primero hay que pasar la masa a moles." },
          { paso: "q = n x Delta Hfus = 1,389 mol x 6,01 kJ/mol = 8,35 kJ.", porque: "Durante un cambio de fase a presión constante la temperatura no varía y el calor involucrado es latente, q = Delta H de fusión por mol." },
          { paso: "Como la fusión absorbe energía, q > 0 (el hielo gana calor del entorno).", porque: "Fundir requiere vencer las uniones del sólido, por lo que es un proceso endotérmico." }
        ],
        resultado: "q = 8,35 kJ absorbidos para fundir el hielo"
      }
    ],
    errores_tipicos: [
      { error: "Usar c y Delta T para el hielo, como si hubiera que calentarlo, en lugar de usar el calor latente.", como_evitar: "Si hay cambio de fase y la temperatura no cambia, el calor es n x Delta H de cambio de fase, no m c Delta T." },
      { error: "Multiplicar la masa en g por 6,01 kJ/mol, sin pasar a mol.", como_evitar: "Siempre convertí g a mol con la masa molar antes de usar valores por mol." }
    ]
  },
  {
    num: 6,
    nivel: "Intermedio",
    temas: ["termodinamica"],
    enunciado: "En un calorímetro adiabático se colocan 50,0 g de hielo a 0 C y 200,0 g de agua líquida a 25,0 C. Suponiendo que el calorímetro no intercambia calor con el exterior y que la presión es 1 atm, calcule la temperatura final del sistema. Datos: Delta Hfus(H2O) = 6,01 kJ/mol; c(H2O, l) = 4,18 J/(g x K); M(H2O) = 18,0 g/mol.",
    resolucion: [
      {
        parte: "",
        pasos: [
          { paso: "Supuesto: el hielo se funde por completo y la temperatura final es mayor que 0 C. Se verifica al final.", porque: "Hay que confirmar la hipótesis: el agua caliente, al enfriarse de 25,0 C a 0 C, puede entregar hasta 200,0 x 4,18 x 25,0 = 20,9 kJ, que alcanzan para fundir los 16,7 kJ del hielo." },
          { paso: "Calor para fundir el hielo: n = 50,0/18,0 = 2,778 mol; q_fus = 2,778 x 6,01 = +16,69 kJ.", porque: "Durante la fusión a presión constante el calor es latente: q = n x Delta Hfus." },
          { paso: "Balance del calorímetro adiabático: q_fus + 50,0 x 4,18 x (Tf - 0) + 200,0 x 4,18 x (Tf - 25,0) = 0.", porque: "Sin pérdidas, la suma de todos los calores intercambiados es cero: lo que cede el agua caliente lo ganan el hielo y el agua fundida. Delta T = T_final - T_inicial da el signo de cada término." },
          { paso: "Desarrollando (en J): 16 694 + 209 Tf + 836 Tf - 20 900 = 0, es decir 1045 Tf = 4206, y Tf = 4,02 C.", porque: "Se agrupan los términos en Tf, se pasan los constantes al otro lado y se despeja la temperatura." }
        ],
        resultado: "Tf = 4,02 C (agua líquida, 1 atm)"
      }
    ],
    errores_tipicos: [
      { error: "Olvidar el calor de fusión y tratar al hielo solo con su calor específico.", como_evitar: "Antes de calentar el agua fundida, el hielo debe fundirse: esa energía aparece como n x Delta Hfus." },
      { error: "Sumar los calores en lugar de igualarlos a cero, o escribir Delta T del agua caliente como 25,0 - Tf.", como_evitar: "En un calorímetro adiabático, Sum(q) = 0 y Delta T = T_final - T_inicial para cada parte." },
      { error: "Dar por hecho que el hielo se funde por completo sin verificarlo.", como_evitar: "Compará la energía disponible del agua que se enfría con la necesaria para fundir todo el hielo." }
    ]
  },
  {
    num: 7,
    nivel: "Intermedio",
    temas: ["termodinamica"],
    enunciado: "Dadas las siguientes ecuaciones termoquímicas a 25 C: (1) C(grafito) + O2(g) -> CO2(g)   Delta H = -393,5 kJ; (2) H2(g) + 1/2 O2(g) -> H2O(l)   Delta H = -285,8 kJ; (3) C2H5OH(l) + 3 O2(g) -> 2 CO2(g) + 3 H2O(l)   Delta H = -1367,0 kJ. Calcule la entalpía estándar de formación del etanol líquido, aplicando la ley de Hess.",
    resolucion: [
      {
        parte: "",
        pasos: [
          { paso: "Ecuación de formación: 2 C(grafito) + 3 H2(g) + 1/2 O2(g) -> C2H5OH(l).", porque: "La formación parte de los elementos en su forma estándar (C grafito, H2 gas, O2 gas) y produce 1 mol de compuesto. Ese es el objetivo de la combinación." },
          { paso: "Combinamos: 2 x (1) + 3 x (2) - (3). La ecuación (3) se invierte, por lo que su Delta H cambia de signo: +1367,0 kJ.", porque: "Ley de Hess: la entalpía es función de estado, así que las ecuaciones se suman multiplicadas por sus coeficientes. Invertir una ecuación cambia el signo de su Delta H." },
          { paso: "Delta Hf = 2 x (-393,5) + 3 x (-285,8) - (-1367,0) = -787,0 - 857,4 + 1367,0 = -277,4 kJ/mol.", porque: "Cada Delta H se multiplica por el coeficiente de su ecuación; al cancelar CO2 y H2O quedan solo los reactivos elementales y el etanol." }
        ],
        resultado: "Delta Hf(C2H5OH, l) = -277,4 kJ/mol"
      }
    ],
    errores_tipicos: [
      { error: "No multiplicar el Delta H por el coeficiente, por ejemplo usar -393,5 en lugar de 2 x (-393,5).", como_evitar: "Si la ecuación se multiplica por 2, su Delta H también se multiplica por 2." },
      { error: "Dejar la ecuación (3) con su signo original en lugar de invertirla.", como_evitar: "Revisá en qué lado está el etanol: en (3) es reactivo, así que hay que invertir la ecuación y cambiar el signo de su Delta H." }
    ]
  },
  {
    num: 8,
    nivel: "Intermedio",
    temas: ["termodinamica"],
    enunciado: "El monóxido de carbono se quema según 2 CO(g) + O2(g) -> 2 CO2(g). Datos a 25 C: Delta Hf CO(g) = -110,5 kJ/mol; Delta Hf CO2(g) = -393,5 kJ/mol; R = 8,314 J/(mol x K). a) Calcule Delta H de la reacción. b) Calcule Delta U de la reacción a 25 C y justifique.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Delta H = 2 x (-393,5) - [2 x (-110,5) + 1 x 0] = -787,0 + 221,0.", porque: "Delta Hr = suma de n x Delta Hf(productos) - suma de n x Delta Hf(reactivos). El O2(g) es elemento estándar, así que su Delta Hf vale cero." },
          { paso: "Delta H = -566,0 kJ para la reacción tal como está escrita (2 mol de CO).", porque: "Los Delta H están referidos a la cantidad de cada sustancia indicada por los coeficientes." }
        ],
        resultado: "Delta H = -566,0 kJ"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Delta n(gas) = moles de gas en productos - moles de gas en reactivos = 2 - (2 + 1) = -1.", porque: "La relación Delta H = Delta U + Delta n RT sólo cuenta gases. Todas las especies de esta reacción son gases." },
          { paso: "Delta U = Delta H - Delta n x R x T = -566,0 kJ - (-1)(8,314 x 10^-3 kJ/(mol x K))(298 K) = -566,0 + 2,48 = -563,5 kJ.", porque: "Para gases ideales, Delta H = Delta U + PDelta V = Delta U + Delta n RT. Se despeja Delta U y se usa R en kJ para que coincida con las unidades de Delta H." }
        ],
        resultado: "Delta U = -563,5 kJ a 25 C"
      }
    ],
    errores_tipicos: [
      { error: "Sumar en lugar de restar: escribir Delta U = Delta H + Delta n RT.", como_evitar: "De Delta H = Delta U + Delta n RT sale Delta U = Delta H - Delta n RT. Recordá el signo al despejar." },
      { error: "Usar R = 8,314 J/(mol K) con Delta H en kJ sin convertir.", como_evitar: "Revisá que las unidades de R coincidan con las de Delta H (kJ con 8,314 x 10^-3)." }
    ]
  },
  {
    num: 9,
    nivel: "Intermedio",
    temas: ["termodinamica"],
    enunciado: "El butano, C4H10(g), es un combustible de uso doméstico. Su combustión completa, con agua líquida como producto, es: C4H10(g) + 13/2 O2(g) -> 4 CO2(g) + 5 H2O(l). Datos a 25 C: Delta Hf C4H10(g) = -126,2 kJ/mol; Delta Hf CO2(g) = -393,5 kJ/mol; Delta Hf H2O(l) = -285,8 kJ/mol; M(C4H10) = 58,1 g/mol. a) Calcule la entalpía estándar de combustión del butano. b) Calcule la energía liberada por cada kg de butano quemado (en kJ/kg).",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Delta Hc = [4 x (-393,5) + 5 x (-285,8)] - [1 x (-126,2) + 13/2 x 0].", porque: "Delta Hr = suma de n x Delta Hf(productos) - suma de n x Delta Hf(reactivos). El O2(g) tiene Delta Hf = 0." },
          { paso: "Delta Hc = -1574,0 - 1429,0 + 126,2 = -2876,8 kJ por mol de butano.", porque: "Se suman todos los términos con su signo; el resultado negativo indica una reacción exotérmica." }
        ],
        resultado: "Delta Hc = -2876,8 kJ/mol de C4H10"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "n = 1000 g / 58,1 g/mol = 17,21 mol de butano en 1 kg.", porque: "El valor de Delta Hc es por mol, así que hay que pasar la masa a moles con la masa molar." },
          { paso: "Energía liberada = 17,21 mol x 2876,8 kJ/mol = 4,95 x 10^4 kJ por kg.", porque: "Como la reacción está escrita para 1 mol de butano, cada mol quemado libera |Delta Hc|. Se multiplica por la cantidad de moles." }
        ],
        resultado: "4,95 x 10^4 kJ por kg de butano (con agua líquida como producto)"
      }
    ],
    errores_tipicos: [
      { error: "Escribir 4 H2O en lugar de 5 al sumar las Delta Hf de los productos.", como_evitar: "Contá los átomos de H del butano: 10 H dan 5 H2O." },
      { error: "Dividir en lugar de multiplicar al pasar de mol a kg.", como_evitar: "La energía por kg = (moles por kg) x (kJ por mol): multiplicá." }
    ]
  },
  {
    num: 10,
    nivel: "Intermedio",
    temas: ["termodinamica"],
    enunciado: "Se tienen 30,0 g de agua líquida a 20,0 C y 1 atm. a) Calcule el calor necesario para llevarla a vapor a 100 C y 1 atm. Datos: c(H2O, l) = 4,18 J/(g x K); Delta Hvap(H2O) = 40,7 kJ/mol a 100 C; M(H2O) = 18,0 g/mol. b) Para 1,00 mol de agua que pasa de líquido a vapor a 100 C y 1 atm, calcule W y Delta U. Considere el vapor como gas ideal, desprecie el volumen del líquido y use R = 8,314 J/(mol x K).",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Etapa 1 (calentamiento): q1 = 30,0 g x 4,18 J/(g x K) x 80,0 K = 1,00 x 10^4 J = 10,0 kJ.", porque: "Sin cambio de fase, el calor sensible es m c Delta T." },
          { paso: "Etapa 2 (vaporización): n = 30,0/18,0 = 1,667 mol; q2 = 1,667 x 40,7 = 67,8 kJ.", porque: "A 100 C y presión constante el cambio de fase es latente: q = n x Delta Hvap." },
          { paso: "q total = 10,0 kJ + 67,8 kJ = 77,9 kJ.", porque: "Ambas etapas se hacen a presión constante, y el calor total del proceso es la suma de los calores de cada etapa." }
        ],
        resultado: "q total = 77,9 kJ"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Supuesto: el volumen del líquido es despreciable, así que Delta V = V(vapor) = nRT/P. W = -P Delta V = -Delta n RT = -(1 mol)(8,314 x 10^-3 kJ/(mol x K))(373 K) = -3,10 kJ.", porque: "El vapor se expande contra la presión externa de 1 atm. Con la convención del sistema, W = -P_ext Delta V y en una vaporización Delta V > 0, por lo que W < 0." },
          { paso: "Delta H = q_p = +40,7 kJ/mol. Delta U = Delta H - P Delta V = 40,7 - 3,10 = 37,6 kJ/mol.", porque: "A presión constante q_p = Delta H, y para gas ideal Delta H = Delta U + PDelta V. Una parte de la energía Delta H se usa para empujar al aire (el trabajo), y el resto aumenta la energía interna." }
        ],
        resultado: "W = -3,10 kJ (el sistema realiza trabajo); Delta U = +37,6 kJ/mol"
      }
    ],
    errores_tipicos: [
      { error: "Calcular sólo el calor latente y olvidar el calentamiento del agua de 20,0 C a 100 C.", como_evitar: "En cada cambio de temperatura o de fase, identificá la etapa y sumá todos los calores." },
      { error: "Tomar Delta U = Delta H en la vaporización, sin restar el trabajo de expansión.", como_evitar: "Delta U = Delta H - PDelta V. El trabajo de vaporización es la diferencia entre Delta H y Delta U." }
    ]
  },
  {
    num: 11,
    nivel: "Avanzado",
    temas: ["termodinamica"],
    enunciado: "Un gas ideal en un cilindro con pistón móvil recibe 0,85 kcal de calor desde el entorno. El proceso ocurre a presión constante de 1,00 atm y el gas se expande desde 2,0 L hasta 6,0 L. a) Pase el calor a J y calcule el trabajo W intercambiado. b) Calcule Delta U del proceso. c) Calcule Delta H y justifique su valor y su relación con el calor medido. Datos: 1 cal = 4,184 J; 1 atm x L = 101,3 J.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Q = 0,85 kcal x 4184 J/kcal = 3,6 x 10^3 J (2 cifras significativas). Q > 0 porque el calor entra al sistema.", porque: "El dato está en kcal y el primer principio se usa en J (o en kJ en todo el problema). Antes de operar, la unidad debe coincidir." },
          { paso: "Delta V = 6,0 L - 2,0 L = 4,0 L. W = -P_ext Delta V = -1,00 atm x 4,0 L = -4,0 atm x L = -4,0 x 10^2 J.", porque: "Expansión contra presión externa constante: W = -P_ext Delta V, con signo negativo porque el gas se expande (Delta V > 0)." }
        ],
        resultado: "Q = +3,6 x 10^3 J; W = -4,0 x 10^2 J"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Delta U = Q + W = 3,6 x 10^3 J + (-4,0 x 10^2 J) = 3,2 x 10^3 J.", porque: "Es el primer principio con la convención del sistema: parte del calor que entra se usa para expandir el gas y el resto aumenta su energía interna." }
        ],
        resultado: "Delta U = +3,2 x 10^3 J"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "Como el proceso es a presión constante, Delta H = Q_p = +3,6 x 10^3 J.", porque: "A presión constante el calor intercambiado es igual a la variación de entalpía." },
          { paso: "Verificación: Delta H = Delta U + P Delta V = 3,2 x 10^3 J + 4,0 x 10^2 J = 3,6 x 10^3 J.", porque: "Por definición H = U + PV; a presión constante Delta H = Delta U + P Delta V, que coincide con el calor medido." }
        ],
        resultado: "Delta H = +3,6 x 10^3 J = Q_p; es mayor que Delta U en el trabajo de expansión"
      }
    ],
    errores_tipicos: [
      { error: "Usar 0,85 como si fueran J, sin pasar de kcal a J.", como_evitar: "Verificá la unidad de cada dato antes de operar. 1 kcal = 1000 cal = 4184 J." },
      { error: "Dar W positivo en una expansión porque 'el gas trabaja', o decir que Delta H = Delta U en un proceso a presión constante.", como_evitar: "Expansión: W < 0. Presión constante: Q_p = Delta H, pero Delta U = Delta H - PDelta V, y en general son distintos." }
    ]
  },
  {
    num: 12,
    nivel: "Avanzado",
    temas: ["termodinamica"],
    enunciado: "La combustión del metano puede escribirse con agua líquida o con agua gaseosa como producto: (i) CH4(g) + 2 O2(g) -> CO2(g) + 2 H2O(l); (ii) CH4(g) + 2 O2(g) -> CO2(g) + 2 H2O(g). Datos a 25 C: Delta Hf CH4(g) = -74,8 kJ/mol; Delta Hf CO2(g) = -393,5 kJ/mol; Delta Hf H2O(l) = -285,8 kJ/mol; Delta Hf H2O(g) = -241,8 kJ/mol; Delta Hf O2(g) = 0; R = 8,314 J/(mol x K). a) Calcule Delta H para (i) y (ii). b) Calcule Delta U para (i) y (ii) a 25 C. c) Indique cuál de las dos reacciones tiene mayor módulo de Delta H y explique a dónde va la energía que no aparece en la reacción (ii).",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "(i): Delta H = [-393,5 + 2 x (-285,8)] - [-74,8 + 0] = -890,3 kJ.", porque: "Delta Hr = suma de n x Delta Hf(productos) - suma de n x Delta Hf(reactivos), con el H2O en estado líquido." },
          { paso: "(ii): Delta H = [-393,5 + 2 x (-241,8)] - [-74,8 + 0] = -802,3 kJ.", porque: "Igual que (i), pero con H2O(g) como producto, cuya Delta Hf es menos negativa." }
        ],
        resultado: "(i) Delta H = -890,3 kJ; (ii) Delta H = -802,3 kJ"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "(i): Delta n(gas) = 1 - (1 + 2) = -2 (el agua líquida no cuenta). Delta U = Delta H - Delta n RT = -890,3 - (-2)(8,314 x 10^-3)(298) = -890,3 + 4,96 = -885,3 kJ.", porque: "Delta H = Delta U + Delta n RT sólo con gases. Como los gases desaparecen, Delta n < 0 y Delta U es menos negativa que Delta H." },
          { paso: "(ii): Delta n(gas) = (1 + 2) - (1 + 2) = 0, así que Delta U = Delta H = -802,3 kJ.", porque: "Cuando no cambia el número de moles de gas, el término Delta n RT es cero y Delta U = Delta H." }
        ],
        resultado: "(i) Delta U = -885,3 kJ; (ii) Delta U = -802,3 kJ"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "La reacción (i) tiene mayor módulo: |-890,3| > |-802,3|. La diferencia es 88,0 kJ = 2 x 44,0 kJ.", porque: "Según la ley de Hess, la diferencia entre ambas reacciones es la entalpía de condensación de los 2 mol de H2O(g) que pasan a líquido." },
          { paso: "En (ii) esa energía no aparece en la reacción porque el agua sale como vapor y no libera el calor de condensación.", porque: "El calor de condensación se libera sólo cuando el vapor pasa a líquido, algo que no ocurre dentro de la reacción (ii)." }
        ],
        resultado: "Mayor |Delta H|: reacción (i); los 88,0 kJ de diferencia corresponden a la condensación del agua"
      }
    ],
    errores_tipicos: [
      { error: "Contar el H2O líquida como gas al calcular Delta n, y así dar Delta U = Delta H en la reacción (i).", como_evitar: "Sólo los gases entran en Delta n. En (i) hay 3 mol de gas en reactivos y 1 en productos." },
      { error: "Pensar que las dos reacciones liberan la misma energía porque es la misma combustión.", como_evitar: "El estado de agregación del producto cambia Delta H. Comparalas con Hess, usando la condensación." }
    ]
  },
  {
    num: 13,
    nivel: "Avanzado",
    temas: ["termodinamica"],
    enunciado: "En una bomba calorimétrica (recipiente de volumen constante) se quema completamente 1,00 g de octano líquido, C8H18(l), a 25 C. La reacción es C8H18(l) + 25/2 O2(g) -> 8 CO2(g) + 9 H2O(l). La capacidad calorífica total del calorímetro, incluido el agua, es 8,15 kJ/K y la temperatura sube de 25,00 C a 30,88 C. Datos: M(C8H18) = 114,2 g/mol; R = 8,314 J/(mol x K). a) Calcule Delta U de la combustión por mol de octano. b) Calcule Delta H de la combustión por mol de octano a 25 C. c) Explique por qué el calor medido en la bomba corresponde a Delta U y no a Delta H.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Supuesto: no hay pérdidas al exterior, y toda la energía liberada queda en el calorímetro. q_cal = C x Delta T = 8,15 kJ/K x 5,88 K = 47,9 kJ.", porque: "El calor que libera la reacción lo absorbe el calorímetro, y la capacidad calorífica total lo relaciona con la variación de temperatura." },
          { paso: "n = 1,00 g / 114,2 g/mol = 8,76 x 10^-3 mol de octano.", porque: "El resultado se pide por mol, así que la masa debe pasarse a moles." },
          { paso: "Delta U = -q_cal / n = -47,9 kJ / 8,76 x 10^-3 mol = -5,47 x 10^3 kJ/mol.", porque: "La reacción libera calor, así que q_reacción = -q_cal. En la bomba no hay cambio de volumen, por lo que el calor a V constante es Delta U." }
        ],
        resultado: "Delta U = -5,47 x 10^3 kJ/mol de octano"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Delta n(gas) = 8 - 25/2 = 8 - 12,5 = -4,5. El H2O es líquida y no se cuenta.", porque: "La corrección Delta H = Delta U + Delta n RT se aplica sólo a los gases." },
          { paso: "Delta H = Delta U + Delta n RT = -5,47 x 10^3 kJ/mol + (-4,5)(8,314 x 10^-3 kJ/(mol x K))(298 K) = -5,47 x 10^3 - 11 kJ = -5,48 x 10^3 kJ/mol.", porque: "Para comparar con tablas (que son a presión constante) hay que pasar de Delta U a Delta H con la diferencia Delta n RT." }
        ],
        resultado: "Delta H = -5,48 x 10^3 kJ/mol de octano"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "En la bomba el volumen es constante: Delta V = 0, así que W = 0 (sin trabajo de expansión) y q_V = Delta U por el primer principio.", porque: "Con Delta U = q + W y W = -P Delta V = 0, el calor medido a volumen constante es la variación de energía interna." },
          { paso: "Delta H = Delta U + Delta n RT, por lo que Delta H sólo se obtiene corrigiendo Delta U. Esa corrección aquí es de unos 11 kJ/mol.", porque: "Delta H es el calor a presión constante; el calor a volumen constante es Delta U. Para usar valores tabulados hay que hacer esta corrección." }
        ],
        resultado: "q_V = Delta U; Delta H difiere de Delta U en Delta n RT (aprox. -11 kJ/mol)"
      }
    ],
    errores_tipicos: [
      { error: "Dar Delta U = +47,9 kJ/mol: olvidar el signo negativo de la reacción exotérmica y no dividir por los moles.", como_evitar: "Primero calculá q_cal = C Delta T, después dividí por n y poné el signo contrario." },
      { error: "Contar el H2O líquida en Delta n y obtener Delta n = 4 + 9 - 12,5 o similar.", como_evitar: "Sólo los gases en Delta n: aquí 8 - 12,5 = -4,5." }
    ]
  },
  {
    num: 14,
    nivel: "Avanzado",
    temas: ["termodinamica"],
    enunciado: "El propano, C3H8(g), es un combustible muy usado. Su calor de combustión, con agua líquida como producto, figura en la bibliografía como -530,6 kcal/mol. Reacción: C3H8(g) + 5 O2(g) -> 3 CO2(g) + 4 H2O(l). Datos a 25 C: Delta Hf CO2(g) = -393,5 kJ/mol; Delta Hf H2O(l) = -285,8 kJ/mol; Delta Hf H2O(g) = -241,8 kJ/mol; M(C3H8) = 44,1 g/mol; 1 cal = 4,184 J. a) Pase Delta Hc a kJ/mol. b) Calcule Delta Hf del propano a partir de Delta Hc. c) Calcule la energía liberada (en kcal) al quemar 10,0 g de propano y diga cómo cambiaría Delta Hc si el agua saliera como vapor.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Delta Hc = -530,6 kcal/mol x 4,184 kJ/kcal = -2220 kJ/mol.", porque: "Las unidades deben ser coherentes: 1 kcal = 4,184 kJ. Un error frecuente es confundir kcal con kJ y dejar el valor sin convertir." }
        ],
        resultado: "Delta Hc = -2220 kJ/mol"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Delta Hc = [3 x (-393,5) + 4 x (-285,8)] - [Delta Hf(C3H8) + 5 x 0], luego Delta Hf(C3H8) = [3 x (-393,5) + 4 x (-285,8)] - Delta Hc = -2323,7 + 2220 = -103,7 kJ/mol.", porque: "Se despeja la Delta Hf de la fórmula de Delta Hr. El O2(g) tiene Delta Hf = 0." }
        ],
        resultado: "Delta Hf(C3H8, g) = -103,7 kJ/mol"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "n = 10,0 g / 44,1 g/mol = 0,2268 mol. Energía = 0,2268 mol x 2220 kJ/mol = 503 kJ = 503/4,184 = 1,20 x 10^2 kcal.", porque: "El valor de Delta Hc es por mol, así que la masa se pasa a moles, y luego se convierte la unidad a kcal." },
          { paso: "Con agua gaseosa, Delta Hc = -2220 + 4 x 44,0 = -2044 kJ/mol (la energía liberada es menor).", porque: "Al pasar el agua de vapor a líquido se libera calor de condensación, 44,0 kJ por mol de H2O. Si el agua sale como vapor, esa energía no se libera." }
        ],
        resultado: "Energía = 1,20 x 10^2 kcal; con H2O(g), Delta Hc = -2044 kJ/mol"
      }
    ],
    errores_tipicos: [
      { error: "Convertir kcal a kJ con el factor 4,18 en lugar de 4,184, o no convertir.", como_evitar: "Tomá el factor 4,184 kJ/kcal (equivalente a 1 cal = 4,184 J)." },
      { error: "Confundir Delta Hf del propano con Delta Hc al despejar: sumar en lugar de restar.", como_evitar: "Escribí la fórmula completa y despejá con cuidado: Delta Hf(C3H8) = Suma(productos) - Delta Hc." },
      { error: "En c) olvidar el paso de masa a moles y dividir 10,0 g por Delta Hc directamente.", como_evitar: "Siempre pasá la masa a moles con la masa molar antes de usar valores por mol." }
    ]
  },
  {
    num: 15,
    nivel: "Avanzado",
    temas: ["termodinamica"],
    enunciado: "En una planta de cal se descompone carbonato de calcio: CaCO3(s) -> CaO(s) + CO2(g). Datos a 25 C: Delta Hf CaCO3(s) = -1206,9 kJ/mol; Delta Hf CaO(s) = -635,1 kJ/mol; Delta Hf CO2(g) = -393,5 kJ/mol; R = 8,314 J/(mol x K); M(CaCO3) = 100,1 g/mol. a) Calcule Delta H de la reacción e indique si es endotérmica o exotérmica. b) Calcule Delta U a 25 C. c) Calcule el calor que debe suministrarse para descomponer 5,00 kg de CaCO3 a 25 C, y explique por qué se usa el valor por mol y no el valor por kg.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Delta H = [-635,1 + (-393,5)] - [-1206,9] = -1028,6 + 1206,9 = +178,3 kJ.", porque: "Delta Hr = suma de n x Delta Hf(productos) - suma de n x Delta Hf(reactivos). Los sólidos y el gas tienen sus Delta Hf tabuladas." },
          { paso: "Como Delta H > 0, el proceso absorbe calor (endotérmico).", porque: "Un Delta H positivo indica que el sistema gana energía de los alrededores." }
        ],
        resultado: "Delta H = +178,3 kJ/mol (endotérmica)"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Delta n(gas) = 1 (CO2) - 0 = +1, porque los sólidos no cuentan.", porque: "La relación Delta H = Delta U + Delta n RT sólo considera especies gaseosas." },
          { paso: "Delta U = Delta H - Delta n RT = 178,3 - (1)(8,314 x 10^-3)(298) = 178,3 - 2,48 = 175,8 kJ/mol.", porque: "Para la reacción que produce gas, Delta U es algo menor que Delta H porque parte de la energía se usa en el trabajo de expansión del CO2." }
        ],
        resultado: "Delta U = +175,8 kJ/mol"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "n = 5,00 x 10^3 g / 100,1 g/mol = 49,95 mol de CaCO3.", porque: "Delta H está tabulado por mol de reacción, así que la masa de 5,00 kg debe convertirse a moles." },
          { paso: "q (a presión constante) = n x Delta H = 49,95 mol x 178,3 kJ/mol = 8,91 x 10^3 kJ.", porque: "A presión atmosférica constante el calor suministrado es igual a Delta H, y el proceso es endotérmico, por lo que el calor debe entrar al sistema." }
        ],
        resultado: "q = 8,91 x 10^3 kJ (a 25 C, reacción completa)"
      }
    ],
    errores_tipicos: [
      { error: "Tomar Delta n = -1 o contar el CaCO3 y el CaO como gases al calcular Delta U.", como_evitar: "Sólo cuentan los gases. Aquí el único gas es el CO2 y se produce, así que Delta n = +1." },
      { error: "Multiplicar 5,00 kg por 178,3 kJ/mol sin pasar a mol.", como_evitar: "Convertí kg a g y g a mol antes de usar el valor por mol." },
      { error: "Confundir q_p con Delta U al calcular el calor de la parte c).", como_evitar: "A presión constante, el calor es Delta H. Delta U sólo coincide con q si el volumen es constante." }
    ]
  },
  {
    num: 16,
    nivel: "Tipo parcial",
    temas: ["termodinamica", "gases"],
    enunciado: "Un termotanque a gas natural, que para este problema se considera metano puro, calienta 150 L de agua desde 15,0 C hasta 45,0 C. Suponga que el termotanque opera a 1 atm, que el agua tiene densidad 1,00 g/cm^3 y calor específico 4,18 J/(g x K), y que el termotanque tiene un rendimiento térmico del 65 %. La combustión es CH4(g) + 2 O2(g) -> CO2(g) + 2 H2O(l). Datos a 25 C: Delta Hf CH4(g) = -74,8 kJ/mol; Delta Hf CO2(g) = -393,5 kJ/mol; Delta Hf H2O(l) = -285,8 kJ/mol; Delta Hf H2O(g) = -241,8 kJ/mol; M(CH4) = 16,0 g/mol; R = 0,0821 L x atm/(mol x K). a) Escriba la ecuación y calcule Delta Hc del metano con agua líquida como producto. b) Calcule la masa de metano que debe quemarse para calentar el agua. c) Calcule el volumen de CO2, medido en CNPT, que se libera en la combustión de la masa calculada en b). d) Si se usara el valor de combustión con agua gaseosa para dimensionar el termotanque, ¿alcanzaría para calentar el agua? Justifique con cálculos.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Ecuación: CH4(g) + 2 O2(g) -> CO2(g) + 2 H2O(l). Es la combustión completa del metano con agua líquida como producto.", porque: "Un hidrocarburo se oxida por completo a CO2 y H2O; el enunciado pide el agua líquida." },
          { paso: "Delta Hc = [-393,5 + 2 x (-285,8)] - [-74,8 + 2 x 0] = -965,1 + 74,8 = -890,3 kJ/mol.", porque: "Delta Hr = suma de n x Delta Hf(productos) - suma de n x Delta Hf(reactivos). El O2(g) tiene Delta Hf = 0." }
        ],
        resultado: "Delta Hc = -890,3 kJ/mol de CH4 (H2O líquida)"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Masa de agua: 150 L = 1,50 x 10^5 cm^3; m = 1,50 x 10^5 cm^3 x 1,00 g/cm^3 = 1,50 x 10^5 g.", porque: "Con densidad 1,00 g/cm^3, 1 cm^3 pesa 1 g y 1 L = 1000 cm^3. Así se pasa el volumen a masa." },
          { paso: "Calor útil: Q_util = m c Delta T = 1,50 x 10^5 g x 4,18 J/(g x K) x 30,0 K = 1,88 x 10^7 J = 18 810 kJ.", porque: "El agua gana calor sensible, sin cambio de fase, por lo que se usa q = m c Delta T." },
          { paso: "Calor de combustión necesario: Q_comb = Q_util / 0,65 = 28 940 kJ.", porque: "El rendimiento térmico es Q_útil / Q_combustión, así que el calor generado por la combustión debe ser mayor que el útil." },
          { paso: "n(CH4) = 28 940 kJ / 890,3 kJ/mol = 32,50 mol; m = 32,50 mol x 16,0 g/mol = 520 g de CH4.", porque: "La estequiometría indica que cada mol de CH4 libera 890,3 kJ en la combustión; luego m = n M." }
        ],
        resultado: "m(CH4) = 520 g (0,52 kg) de metano"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "Por la relación 1:1 de la ecuación, n(CO2) = n(CH4) = 32,50 mol.", porque: "Los coeficientes estequiométricos de CH4 y CO2 son iguales (1 y 1)." },
          { paso: "V = nRT/P = 32,50 mol x 0,0821 L x atm/(mol x K) x 273 K / 1 atm = 728 L.", porque: "En CNPT (273 K y 1 atm) se aplica la ecuación de los gases ideales PV = nRT; equivale a unos 22,4 L por mol." }
        ],
        resultado: "V(CO2) = 728 L en CNPT"
      },
      {
        parte: "d)",
        pasos: [
          { paso: "Supuesto: el agua de los humos queda como vapor (no condensa). Delta Hc = [-393,5 + 2 x (-241,8)] - [-74,8] = -802,3 kJ/mol.", porque: "Con H2O(g) como producto, la energía no incluye el calor de condensación de 2 x 44,0 kJ. Es el valor del poder calorífico inferior (PCI)." },
          { paso: "Energía útil con PCI: 0,65 x 32,50 mol x 802,3 kJ/mol = 16 950 kJ, frente a los 18 810 kJ necesarios.", porque: "Hay que comparar la energía que realmente llega al agua con la que se necesita para calentarla. Si el PCI es menor, no alcanza." },
          { paso: "Como 16 950 < 18 810, no alcanza: falta cerca del 10 %.", porque: "Por eso el dimensionamiento de equipos debe usar el valor que corresponde a las condiciones reales de los humos." }
        ],
        resultado: "No alcanza: con PCI se aportan unos 16 950 kJ frente a 18 810 kJ necesarios"
      }
    ],
    errores_tipicos: [
      { error: "Aplicar el rendimiento al revés: multiplicar por 0,65 en lugar de dividir, y así subestimar la masa de metano.", como_evitar: "El calor de combustión debe ser mayor que el útil: Q_comb = Q_útil / rendimiento." },
      { error: "Usar 150 L directamente como masa de agua o usar 150 000 g sin verificar la densidad.", como_evitar: "Pasá el volumen a cm^3 o mL, multiplicá por la densidad y confirmá que la masa tenga sentido." },
      { error: "Tomar el PCI para dimensionar el termotanque sin revisar si el agua de los humos condensa.", como_evitar: "Según el valor de Delta H que uses (con agua líquida o gaseosa), la energía disponible cambia. Compará siempre con lo que se necesita." }
    ]
  }
];
