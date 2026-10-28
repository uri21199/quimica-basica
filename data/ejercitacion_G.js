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
          { paso: "Datos: m = 200,0 g; T_inicial = 20,0 C; T_final = 75,0 C. Delta T = 75,0 - 20,0 = 55,0 K.", porque: "Primero se identifican los datos y se calcula Delta T = T_final - T_inicial = 75,0 - 20,0. Un intervalo de 1 C equivale a un intervalo de 1 K, así que el Delta T se puede usar directamente en kelvin dentro de la fórmula del calor. Conviene anotar las masas en g y las temperaturas antes de operar, para no mezclar unidades." },
          { paso: "q = m x c x Delta T = 200,0 g x 4,18 J/(g x K) x 55,0 K = 4,60 x 10^4 J.", porque: "Se reemplazan m, c y Delta T en la ecuación del calor sensible, q = m x c x Delta T, que corresponde a un cambio de temperatura sin cambio de fase. El calor específico indica cuántos J hacen falta para elevar 1 g de sustancia 1 K, así que el producto de los tres factores da energía en J. Verificá que g y K se cancelen dejando sólo J." },
          { paso: "Como q > 0, el agua gana calor del calentador.", porque: "Se interpreta el signo de q con la convención termodinámica: q es positivo cuando el calor entra al sistema, y aquí el sistema es el agua. Como el calentador le entrega energía al agua, el signo positivo es coherente con lo que ocurre físicamente." }
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
          { paso: "Supuesto: 25 C y 1 atm (condiciones estándar). El O2(g) es un elemento en su forma más estable, así que su Delta Hf = 0.", porque: "Se identifican las sustancias que aportan a la suma: los elementos en su forma estándar, como el O2(g), tienen Delta Hf = 0 por definición, así que no contribuyen. Esto se debe a que la entalpía de formación toma como referencia cero a los elementos en su estado más estable. Hay que recordar que el cero vale sólo para el elemento en su forma estándar." },
          { paso: "Delta Hc = [1 x (-393,5) + 2 x (-285,8)] - [1 x (-74,8) + 2 x 0] = -965,1 + 74,8 = -890,3 kJ.", porque: "Se aplica la fórmula de Delta Hr: se suman los Delta Hf de los productos multiplicados por sus coeficientes y se resta la misma suma para los reactivos. Los coeficientes son los de la ecuación balanceada, por eso el H2O aparece multiplicada por 2. Un error frecuente es invertir la resta, lo que cambia el signo del resultado." },
          { paso: "La ecuación está escrita para 1 mol de CH4, así que el valor corresponde a 1 mol de combustible.", porque: "Se interpreta el valor obtenido en relación con la reacción escrita: la entalpía de combustión corresponde al mol de combustible que tiene coeficiente 1 en la ecuación. Si la ecuación se multiplicara por 2, el Delta H también se multiplicaría por 2, así que el valor depende de cómo está escrita la reacción. El signo negativo indica que la combustión libera calor." }
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
          { paso: "Delta V = 9,00 L - 2,00 L = 7,00 L.", porque: "Se calcula el cambio de volumen del gas como V_final - V_inicial, que es el dato que determina el trabajo contra el entorno. En una expansión el volumen aumenta, así que Delta V resulta positivo. Conviene verificar el orden de la resta, porque al revés cambiaría el signo del trabajo." },
          { paso: "W = -P_ext x Delta V = -1,00 atm x 7,00 L = -7,00 atm x L.", porque: "Se aplica la expresión del trabajo de expansión contra presión externa constante, W = -P_ext x Delta V, con la convención del sistema (el trabajo que recibe el sistema es positivo). Como el gas se expande, Delta V > 0 y el signo menos hace que W sea negativo. La presión que se usa es la externa, no la presión interna del gas." },
          { paso: "Pasamos a J: W = -7,00 x 101,3 J = -709 J = -7,09 x 10^2 J.", porque: "Se convierte el resultado de atm x L a J con la equivalencia 1 atm x L = 101,3 J, porque el enunciado pide el trabajo en J. Es un factor de conversión: el valor en atm x L se multiplica por 101,3 J para expresar la misma energía en otra unidad. Verificá que la unidad atm x L se cancele y quede sólo J." },
          { paso: "Como W < 0, el sistema realiza trabajo sobre el entorno (cede energía).", porque: "Se interpreta el signo de W según la convención del sistema: W negativo significa que el sistema entrega energía al entorno. En la expansión el gas empuja al pistón y realiza trabajo sobre el entorno, por eso W < 0." }
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
          { paso: "Q = +350 J (el calor entra al sistema) y W = +120 J (el entorno trabaja sobre el sistema).", porque: "Se identifican Q y W con sus signos según la convención del sistema: Q es positivo porque el calor entra al sistema, y W es positivo porque en una compresión el entorno trabaja sobre el sistema. Asignar bien el signo de cada término es el paso donde más se suele equivocar. Lo que importa es el sentido del intercambio, no sólo el valor numérico." },
          { paso: "Delta U = Q + W = 350 J + 120 J = 470 J = 4,70 x 10^2 J.", porque: "Se aplica el primer principio de la termodinámica, Delta U = Q + W, sumando calor y trabajo ya con sus signos. Esta ecuación expresa la conservación de la energía: la variación de energía interna es igual a toda la energía que cruza la frontera del sistema. Verificá que la suma use los signos asignados en el paso anterior." }
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
          { paso: "n = 25,0 g / 18,0 g/mol = 1,389 mol de H2O.", porque: "Se convierte la masa de hielo a cantidad de sustancia con n = m / M. Como la entalpía de fusión está dada en kJ por mol, hay que trabajar en moles para que las unidades coincidan. Un error frecuente es multiplicar gramos directamente por kJ/mol." },
          { paso: "q = n x Delta Hfus = 1,389 mol x 6,01 kJ/mol = 8,35 kJ.", porque: "Se calcula el calor de fusión como q = n x Delta Hfus. La fusión ocurre a 0 C y presión constante, sin cambio de temperatura, así que el calor es latente y se toma la entalpía molar. Por eso no corresponde usar m c Delta T en este caso." },
          { paso: "Como la fusión absorbe energía, q > 0 (el hielo gana calor del entorno).", porque: "Se determina el signo del calor a partir del tipo de proceso: fundir requiere vencer las fuerzas que mantienen unidas las moléculas del sólido, y esa energía la aporta el entorno. Por eso el proceso es endotérmico y q es positivo desde el punto de vista del hielo." }
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
          { paso: "Supuesto: el hielo se funde por completo y la temperatura final es mayor que 0 C. Se verifica al final.", porque: "Se formula una hipótesis sobre el estado final, porque el enunciado no dice si todo el hielo se funde. Se compara la energía que el agua caliente puede ceder al enfriarse hasta 0 C con la energía necesaria para fundir todo el hielo. Si la energía disponible es mayor, la suposición es razonable, pero debe confirmarse con el resultado final." },
          { paso: "Calor para fundir el hielo: n = 50,0/18,0 = 2,778 mol; q_fus = 2,778 x 6,01 = +16,69 kJ.", porque: "Se calcula la cantidad de hielo, n = 50,0 g / 18,0 g/mol, y luego el calor para fundirlo con q = n x Delta Hfus. Como la fusión a presión constante no cambia la temperatura, este calor es latente y se toma directamente de la entalpía molar. Es el primer aporte de energía que el agua caliente debe proveer." },
          { paso: "Balance del calorímetro adiabático: q_fus + 50,0 x 4,18 x (Tf - 0) + 200,0 x 4,18 x (Tf - 25,0) = 0.", porque: "Se plantea el balance de energía del calorímetro adiabático: no hay intercambio con el exterior, así que la suma de los calores de todas las partes debe ser cero. Los términos son el calor de fusión del hielo, el calentamiento del agua fundida de 0 C a Tf y el enfriamiento del agua caliente de 25,0 C a Tf. Cada Delta T se escribe como T_final - T_inicial, y así su signo indica si la parte gana o cede calor." },
          { paso: "Desarrollando (en J): 16 694 + 209 Tf + 836 Tf - 20 900 = 0, es decir 1045 Tf = 4206, y Tf = 4,02 C.", porque: "Se agrupan los términos que contienen Tf, se pasan los constantes al otro lado de la igualdad y se divide por el coeficiente total para despejar Tf. Conviene verificar cada multiplicación antes de sumar, porque los números son grandes y un error de signo cambia el resultado. Como los intervalos de temperatura son iguales en C y en K, el resultado puede darse en C." }
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
          { paso: "Ecuación de formación: 2 C(grafito) + 3 H2(g) + 1/2 O2(g) -> C2H5OH(l).", porque: "Se escribe la reacción de formación del etanol, que parte de los elementos en su forma estándar (C grafito, H2 y O2 gaseosos) y produce 1 mol de C2H5OH(l). El Delta H de esta reacción es justamente la entalpía de formación que se quiere calcular. Conviene verificar que el balance de C, H y O coincida antes de seguir." },
          { paso: "Combinamos: 2 x (1) + 3 x (2) - (3). La ecuación (3) se invierte, por lo que su Delta H cambia de signo: +1367,0 kJ.", porque: "Se combinan las ecuaciones dadas con coeficientes elegidos para que, al sumarlas, desaparezcan CO2 y H2O y quede la formación del etanol. Por la ley de Hess, como la entalpía es función de estado, las ecuaciones se pueden sumar como expresiones algebraicas. Al invertir la ecuación (3), su Delta H cambia de signo, porque la reacción inversa absorbe la energía que la directa libera." },
          { paso: "Delta Hf = 2 x (-393,5) + 3 x (-285,8) - (-1367,0) = -787,0 - 857,4 + 1367,0 = -277,4 kJ/mol.", porque: "Se calcula el Delta Hf sumando cada Delta H multiplicado por el coeficiente con el que se usó su ecuación. Los términos de CO2 y H2O se cancelan en la combinación, por eso el resultado sólo depende de los datos de combustión dados. Verificá que el signo de cada término corresponda a lo que hiciste en el paso anterior." }
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
          { paso: "Delta H = 2 x (-393,5) - [2 x (-110,5) + 1 x 0] = -787,0 + 221,0.", porque: "Se aplica la fórmula de Delta Hr con Delta Hf: productos menos reactivos, cada uno multiplicado por su coeficiente. Aquí hay 2 mol de CO2 en productos y 2 mol de CO más 1 mol de O2 en reactivos. El O2(g) es elemento estándar, así que su término es cero." },
          { paso: "Delta H = -566,0 kJ para la reacción tal como está escrita (2 mol de CO).", porque: "Se interpreta el resultado en relación con la reacción tal como está escrita: -566,0 kJ corresponde a 2 mol de CO, no a 1 mol. Si se quisiera el valor por mol de CO habría que dividir por 2. Cambiar la escala de la reacción sin ajustar el Delta H es un error común." }
        ],
        resultado: "Delta H = -566,0 kJ"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Delta n(gas) = moles de gas en productos - moles de gas en reactivos = 2 - (2 + 1) = -1.", porque: "Se calcula Delta n(gas) como moles de gas en productos menos moles de gas en reactivos, usando los coeficientes. Como todas las especies de esta reacción son gases, todas se cuentan: 2 mol de CO2 frente a 2 mol de CO más 1 mol de O2. Un Delta n negativo indica que el sistema disminuye la cantidad de gas." },
          { paso: "Delta U = Delta H - Delta n x R x T = -566,0 kJ - (-1)(8,314 x 10^-3 kJ/(mol x K))(298 K) = -566,0 + 2,48 = -563,5 kJ.", porque: "Se despeja Delta U de la relación entre entalpía y energía interna para gases ideales, Delta H = Delta U + Delta n R T, quedando Delta U = Delta H - Delta n R T. La constante R debe usarse en kJ/(mol x K) para que coincida con las unidades de Delta H. Al despejar, el término Delta n R T se resta, no se suma." }
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
          { paso: "Delta Hc = [4 x (-393,5) + 5 x (-285,8)] - [1 x (-126,2) + 13/2 x 0].", porque: "Se aplica la fórmula de Delta Hr con Delta Hf, combinando productos (4 CO2 y 5 H2O) y reactivos (1 C4H10 y 13/2 O2) con sus coeficientes. El O2(g) tiene Delta Hf = 0, así que su término se anula. Contá los átomos de C y H para comprobar que los coeficientes sean los del balance." },
          { paso: "Delta Hc = -1574,0 - 1429,0 + 126,2 = -2876,8 kJ por mol de butano.", porque: "Se suman los términos ya multiplicados por sus coeficientes, respetando el signo de cada Delta Hf. Al restar el término del butano, el signo negativo de su Delta Hf se convierte en suma. El resultado negativo indica que la combustión es exotérmica, y Delta Hc corresponde a 1 mol de butano según la reacción escrita." }
        ],
        resultado: "Delta Hc = -2876,8 kJ/mol de C4H10"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "n = 1000 g / 58,1 g/mol = 17,21 mol de butano en 1 kg.", porque: "Se pasa la masa de 1 kg de butano a moles con la masa molar, n = 1000 g / 58,1 g/mol. Como Delta Hc está dado por mol, la energía total depende de cuántos moles hay en la muestra. Es una conversión de masa a cantidad de sustancia." },
          { paso: "Energía liberada = 17,21 mol x 2876,8 kJ/mol = 4,95 x 10^4 kJ por kg.", porque: "Se multiplica el número de moles por la energía liberada por mol de butano. Se usa el módulo de Delta Hc porque la pregunta pide la energía liberada, que se expresa como cantidad positiva. Un error común es dividir, lo que daría un valor absurdamente pequeño. Verificá que la unidad final sea kJ/kg." }
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
          { paso: "Etapa 1 (calentamiento): q1 = 30,0 g x 4,18 J/(g x K) x 80,0 K = 1,00 x 10^4 J = 10,0 kJ.", porque: "Se calcula el calor sensible del agua líquida desde 20,0 C hasta 100,0 C con q1 = m c Delta T, donde Delta T = 100,0 - 20,0 = 80,0 K. Este tramo es sólo calentamiento sin cambio de fase, así que se usa el calor específico del agua líquida. Es la primera de las dos etapas que componen el proceso." },
          { paso: "Etapa 2 (vaporización): n = 30,0/18,0 = 1,667 mol; q2 = 1,667 x 40,7 = 67,8 kJ.", porque: "Se calcula el calor latente de vaporización con q2 = n x Delta Hvap, donde n = m / M. A 100 C y presión constante el cambio de fase ocurre sin variar la temperatura, por lo que el calor es latente y se usa el valor molar. Es el tramo que suele olvidarse cuando sólo se piensa en calentar el agua." },
          { paso: "q total = 10,0 kJ + 67,8 kJ = 77,9 kJ.", porque: "Se suman los calores de las etapas sucesivas: como la entalpía es función de estado y el proceso es a presión constante, el calor total es la suma de calentamiento y vaporización. Verificá que ambas etapas estén incluidas y que las unidades sean iguales (kJ con kJ) antes de sumar." }
        ],
        resultado: "q total = 77,9 kJ"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Supuesto: el volumen del líquido es despreciable, así que Delta V = V(vapor) = nRT/P. W = -P Delta V = -Delta n RT = -(1 mol)(8,314 x 10^-3 kJ/(mol x K))(373 K) = -3,10 kJ.", porque: "Se calcula el trabajo W = -P_ext Delta V, con Delta V igual al volumen del vapor, obtenido de la ecuación de gas ideal (V = nRT/P). Como P Delta V = Delta n R T para un gas ideal, el trabajo se puede escribir como -Delta n R T. El signo negativo corresponde a la convención del sistema, que para una expansión da W < 0." },
          { paso: "Delta H = q_p = +40,7 kJ/mol. Delta U = Delta H - P Delta V = 40,7 - 3,10 = 37,6 kJ/mol.", porque: "A presión constante el calor intercambiado es igual a la variación de entalpía, Delta H = q_p, así que se toma directamente el valor molar de vaporización. Luego se despeja Delta U con Delta U = Delta H - P Delta V, que relaciona entalpía y energía interna. Parte de Delta H se emplea en el trabajo de expansión contra la atmósfera y el resto aumenta la energía interna, por eso Delta U es menor que Delta H." }
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
          { paso: "Q = 0,85 kcal x 4184 J/kcal = 3,6 x 10^3 J (2 cifras significativas). Q > 0 porque el calor entra al sistema.", porque: "Se convierte el calor de kcal a J para que coincida con las unidades del trabajo y del primer principio. Se usa 1 kcal = 1000 cal y 1 cal = 4,184 J, según el dato del enunciado. El signo es positivo porque el calor entra al sistema." },
          { paso: "Delta V = 6,0 L - 2,0 L = 4,0 L. W = -P_ext Delta V = -1,00 atm x 4,0 L = -4,0 atm x L = -4,0 x 10^2 J.", porque: "Se calcula el trabajo de expansión a presión externa constante, W = -P_ext Delta V, con Delta V = V_final - V_inicial. El resultado se expresa en atm x L y luego se pasa a J con 1 atm x L = 101,3 J. El signo negativo corresponde a una expansión, porque Delta V > 0 y el gas entrega energía al entorno." }
        ],
        resultado: "Q = +3,6 x 10^3 J; W = -4,0 x 10^2 J"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Delta U = Q + W = 3,6 x 10^3 J + (-4,0 x 10^2 J) = 3,2 x 10^3 J.", porque: "Se aplica el primer principio, Delta U = Q + W, con Q y W ya expresados en J y con sus signos. Así se obtiene la variación de energía interna del gas: parte del calor se transforma en trabajo de expansión y el resto queda en el gas. Verificá que W sea negativo, porque el sistema se expande." }
        ],
        resultado: "Delta U = +3,2 x 10^3 J"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "Como el proceso es a presión constante, Delta H = Q_p = +3,6 x 10^3 J.", porque: "A presión constante el calor intercambiado es igual a la variación de entalpía, Q_p = Delta H. Por eso el Delta H se obtiene directamente del calor medido en a), sin cálculo adicional. Es una relación útil para interpretar qué representa la entalpía en procesos a presión constante." },
          { paso: "Verificación: Delta H = Delta U + P Delta V = 3,2 x 10^3 J + 4,0 x 10^2 J = 3,6 x 10^3 J.", porque: "Se verifica el resultado calculando Delta U + P Delta V con los valores obtenidos, lo que debe coincidir con Delta H. Esta comprobación usa H = U + PV, y en un proceso a presión constante queda Delta H = Delta U + P Delta V. Si no coincide, revisá los signos de Q y W, que son la fuente típica de error." }
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
          { paso: "(i): Delta H = [-393,5 + 2 x (-285,8)] - [-74,8 + 0] = -890,3 kJ.", porque: "Se aplica la fórmula de Delta Hr con Delta Hf usando H2O(l) como producto: se suman los productos con sus coeficientes (1 CO2 y 2 H2O) y se resta el CH4 con su coeficiente. El O2 tiene Delta Hf = 0 por ser elemento estándar." },
          { paso: "(ii): Delta H = [-393,5 + 2 x (-241,8)] - [-74,8 + 0] = -802,3 kJ.", porque: "Se repite el mismo cálculo cambiando sólo el estado del agua a vapor, con su Delta Hf propia, que es menos negativa que la del líquido. La diferencia entre ambos resultados muestra cómo el estado de agregación del producto modifica el Delta H de la reacción. Comparar los dos valores sirve para verificar que el cálculo quedó bien." }
        ],
        resultado: "(i) Delta H = -890,3 kJ; (ii) Delta H = -802,3 kJ"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "(i): Delta n(gas) = 1 - (1 + 2) = -2 (el agua líquida no cuenta). Delta U = Delta H - Delta n RT = -890,3 - (-2)(8,314 x 10^-3)(298) = -890,3 + 4,96 = -885,3 kJ.", porque: "Se calcula Delta n(gas) contando sólo especies gaseosas: en (i) hay 3 mol de gas en reactivos (CH4 y 2 O2) y 1 mol de CO2 en productos. Con ese valor se aplica Delta U = Delta H - Delta n R T. Como Delta n es negativo, Delta U resulta menos negativo que Delta H." },
          { paso: "(ii): Delta n(gas) = (1 + 2) - (1 + 2) = 0, así que Delta U = Delta H = -802,3 kJ.", porque: "En (ii) el número de moles de gas no cambia (3 mol en reactivos y 3 mol en productos), así que el término Delta n R T es cero y Delta U = Delta H. Es un caso especial útil para verificar el cálculo: si Delta n es cero, no hace falta corregir." }
        ],
        resultado: "(i) Delta U = -885,3 kJ; (ii) Delta U = -802,3 kJ"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "La reacción (i) tiene mayor módulo: |-890,3| > |-802,3|. La diferencia es 88,0 kJ = 2 x 44,0 kJ.", porque: "Se comparan los módulos de los Delta H y se calcula su diferencia. Según la ley de Hess, la diferencia entre (i) y (ii) es la entalpía de condensación de los 2 mol de H2O que pasan de vapor a líquido en (i)." },
          { paso: "En (ii) esa energía no aparece en la reacción porque el agua sale como vapor y no libera el calor de condensación.", porque: "Se explica dónde queda la energía que no aparece en (ii): el agua sale como vapor y el calor de condensación no se libera dentro de la reacción. Ese calor sólo se libera si el vapor condensa, algo que no ocurre dentro de la reacción química. Por eso la reacción (i) libera más energía." }
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
          { paso: "Supuesto: no hay pérdidas al exterior, y toda la energía liberada queda en el calorímetro. q_cal = C x Delta T = 8,15 kJ/K x 5,88 K = 47,9 kJ.", porque: "Se calcula el calor absorbido por el calorímetro con q_cal = C x Delta T, donde C es la capacidad calorífica total y Delta T = 30,88 - 25,00 = 5,88 K. Se supone que no hay pérdidas, así que todo el calor liberado por la combustión queda en el calorímetro. Es el calor de la reacción pero con signo opuesto." },
          { paso: "n = 1,00 g / 114,2 g/mol = 8,76 x 10^-3 mol de octano.", porque: "Se pasa la masa de octano a moles con la masa molar, porque el resultado se pide por mol de sustancia. Con 1,00 g y M = 114,2 g/mol se obtiene la cantidad de octano quemada en la bomba." },
          { paso: "Delta U = -q_cal / n = -47,9 kJ / 8,76 x 10^-3 mol = -5,47 x 10^3 kJ/mol.", porque: "Se obtiene Delta U con q_reacción = -q_cal y se divide por la cantidad de moles para pasarlo a valor molar. Como el recipiente es de volumen constante, el calor medido es Delta U, porque no hay trabajo de expansión. El signo negativo corresponde a una reacción exotérmica." }
        ],
        resultado: "Delta U = -5,47 x 10^3 kJ/mol de octano"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Delta n(gas) = 8 - 25/2 = 8 - 12,5 = -4,5. El H2O es líquida y no se cuenta.", porque: "Se calcula Delta n(gas) para la combustión por mol de octano, contando sólo gases: 8 mol de CO2 en productos frente a 12,5 mol de O2 en reactivos. El H2O es líquida y no entra en el cálculo. Un Delta n negativo indica que disminuye la cantidad de gas durante la reacción." },
          { paso: "Delta H = Delta U + Delta n RT = -5,47 x 10^3 kJ/mol + (-4,5)(8,314 x 10^-3 kJ/(mol x K))(298 K) = -5,47 x 10^3 - 11 kJ = -5,48 x 10^3 kJ/mol.", porque: "Se usa la relación entre entalpía y energía interna para gases ideales, Delta H = Delta U + Delta n R T, con R en kJ/(mol x K) y T = 298 K. Se sustituyen el Delta U de a) y el Delta n calculado. La corrección es pequeña frente a Delta U, pero es la que permite comparar con tablas a presión constante." }
        ],
        resultado: "Delta H = -5,48 x 10^3 kJ/mol de octano"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "En la bomba el volumen es constante: Delta V = 0, así que W = 0 (sin trabajo de expansión) y q_V = Delta U por el primer principio.", porque: "Se analiza el caso de la bomba a volumen constante: Delta V = 0, así que el trabajo de expansión W = -P Delta V es cero. Con el primer principio, Delta U = q + W = q_V, por lo que el calor medido es Delta U. Verificá que el recipiente sea realmente cerrado y rígido, condición necesaria para este razonamiento." },
          { paso: "Delta H = Delta U + Delta n RT, por lo que Delta H sólo se obtiene corrigiendo Delta U. Esa corrección aquí es de unos 11 kJ/mol.", porque: "Se contrasta con Delta H, que es el calor a presión constante y se relaciona con Delta U por Delta H = Delta U + Delta n R T. Como las tablas dan valores a presión constante, para comparar hay que aplicar esta corrección. En este caso la diferencia es de unos 11 kJ/mol, pequeña pero no despreciable en cálculos precisos." }
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
          { paso: "Delta Hc = -530,6 kcal/mol x 4,184 kJ/kcal = -2220 kJ/mol.", porque: "Se convierte el calor de combustión de kcal/mol a kJ/mol multiplicando por 4,184 kJ/kcal. Esta conversión es necesaria porque las Delta Hf del enunciado están en kJ/mol y todo el cálculo debe usar la misma unidad. Así se evita mezclar magnitudes en escalas distintas." }
        ],
        resultado: "Delta Hc = -2220 kJ/mol"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Delta Hc = [3 x (-393,5) + 4 x (-285,8)] - [Delta Hf(C3H8) + 5 x 0], luego Delta Hf(C3H8) = [3 x (-393,5) + 4 x (-285,8)] - Delta Hc = -2323,7 + 2220 = -103,7 kJ/mol.", porque: "Se despeja Delta Hf del propano de la fórmula de Delta Hr: Delta Hf(C3H8) = suma de productos - Delta Hc. La suma de productos (3 CO2 y 4 H2O) es -2323,7 kJ, y el O2 tiene Delta Hf = 0. Hay que cuidar el signo al despejar, porque la incógnita está del lado de los reactivos." }
        ],
        resultado: "Delta Hf(C3H8, g) = -103,7 kJ/mol"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "n = 10,0 g / 44,1 g/mol = 0,2268 mol. Energía = 0,2268 mol x 2220 kJ/mol = 503 kJ = 503/4,184 = 1,20 x 10^2 kcal.", porque: "Se pasa la masa de propano a moles, n = 10,0 g / 44,1 g/mol, y luego se multiplica por el Delta Hc molar en kJ. El resultado se convierte a kcal dividiendo por 4,184. Conviene hacer las conversiones de unidades por separado para no confundir kJ con kcal." },
          { paso: "Con agua gaseosa, Delta Hc = -2220 + 4 x 44,0 = -2044 kJ/mol (la energía liberada es menor).", porque: "Se recalcula Delta Hc con agua gaseosa: como el agua queda como vapor, no se libera la energía de condensación de las 4 mol de H2O, unos 44,0 kJ por mol. Por eso el valor resulta menos exotérmico y se libera menos energía. La diferencia entre ambos valores es ese calor de condensación." }
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
          { paso: "Delta H = [-635,1 + (-393,5)] - [-1206,9] = -1028,6 + 1206,9 = +178,3 kJ.", porque: "Se aplica la fórmula de Delta Hr con Delta Hf: se suman los productos CaO y CO2, y se resta el CaCO3 de reactivo, con coeficientes 1. Los sólidos y el gas tienen Delta Hf tabuladas, así que todas las especies entran en el cálculo. Cuidá los signos: restar un valor negativo lo vuelve positivo." },
          { paso: "Como Delta H > 0, el proceso absorbe calor (endotérmico).", porque: "Se interpreta el signo de Delta H para clasificar el proceso: un Delta H positivo significa que la reacción absorbe calor del entorno, es decir que es endotérmica. Esto es coherente con la descomposición térmica del carbonato, que necesita aporte de energía. Verificá el signo final antes de responder." }
        ],
        resultado: "Delta H = +178,3 kJ/mol (endotérmica)"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Delta n(gas) = 1 (CO2) - 0 = +1, porque los sólidos no cuentan.", porque: "Se calcula Delta n(gas) contando sólo gases: el CO2 es el único gas, con 1 mol en productos y 0 en reactivos. Los sólidos no cuentan para Delta n. Con este dato se aplica la relación Delta U = Delta H - Delta n R T." },
          { paso: "Delta U = Delta H - Delta n RT = 178,3 - (1)(8,314 x 10^-3)(298) = 178,3 - 2,48 = 175,8 kJ/mol.", porque: "Se despeja Delta U de Delta H = Delta U + Delta n R T, usando R en kJ/(mol x K) y T = 298 K. Como Delta n es positivo, Delta U resulta algo menor que Delta H. La corrección es pequeña porque sólo hay 1 mol de gas." }
        ],
        resultado: "Delta U = +175,8 kJ/mol"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "n = 5,00 x 10^3 g / 100,1 g/mol = 49,95 mol de CaCO3.", porque: "Se convierte la masa de CaCO3 a moles con la masa molar, porque Delta H está tabulado por mol de reacción. Con 5,00 kg = 5,00 x 10^3 g y M = 100,1 g/mol se obtiene la cantidad de reactivo. Este paso evita usar un valor por mol con una masa en kg." },
          { paso: "q (a presión constante) = n x Delta H = 49,95 mol x 178,3 kJ/mol = 8,91 x 10^3 kJ.", porque: "Se calcula el calor a presión constante como q_p = n x Delta H, con n la cantidad de moles de CaCO3 que reaccionan. Como el proceso es endotérmico, el calor es positivo: hay que suministrarlo desde el exterior. Esta relación vale porque el proceso ocurre a presión atmosférica constante." }
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
          { paso: "Ecuación: CH4(g) + 2 O2(g) -> CO2(g) + 2 H2O(l). Es la combustión completa del metano con agua líquida como producto.", porque: "Se escribe la ecuación de combustión completa del metano con agua líquida, que coincide con la del enunciado. Antes de calcular conviene verificar que esté balanceada: 1 C, 4 H y 4 O en ambos lados de la flecha." },
          { paso: "Delta Hc = [-393,5 + 2 x (-285,8)] - [-74,8 + 2 x 0] = -965,1 + 74,8 = -890,3 kJ/mol.", porque: "Se aplica Delta Hr = suma de n Delta Hf(productos) - suma de n Delta Hf(reactivos), con los datos de CO2 y H2O(l). El O2 tiene Delta Hf = 0. Este Delta Hc es el que luego relaciona la masa de metano con la energía liberada." }
        ],
        resultado: "Delta Hc = -890,3 kJ/mol de CH4 (H2O líquida)"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Masa de agua: 150 L = 1,50 x 10^5 cm^3; m = 1,50 x 10^5 cm^3 x 1,00 g/cm^3 = 1,50 x 10^5 g.", porque: "Se pasa el volumen de agua a masa usando la densidad: 1 cm^3 pesa 1,00 g y 1 L = 1000 cm^3. Con 150 L se obtiene m = 1,50 x 10^5 g. Verificá que la masa tenga sentido para ese volumen de agua." },
          { paso: "Calor útil: Q_util = m c Delta T = 1,50 x 10^5 g x 4,18 J/(g x K) x 30,0 K = 1,88 x 10^7 J = 18 810 kJ.", porque: "Se calcula el calor que el agua necesita, Q_util = m c Delta T, con Delta T = 45,0 - 15,0 = 30,0 K. Como el agua sólo cambia de temperatura sin cambio de fase, se usa el calor sensible. Es la energía útil que debe llegar al agua, no la que debe liberar la combustión." },
          { paso: "Calor de combustión necesario: Q_comb = Q_util / 0,65 = 28 940 kJ.", porque: "Se aplica la definición de rendimiento térmico: rendimiento = Q_util / Q_combustión, de donde Q_combustión = Q_util / 0,65. Como el termotanque no aprovecha toda la energía, la combustión debe generar más calor que el útil. Aquí el error típico es multiplicar por 0,65 en lugar de dividir." },
          { paso: "n(CH4) = 28 940 kJ / 890,3 kJ/mol = 32,50 mol; m = 32,50 mol x 16,0 g/mol = 520 g de CH4.", porque: "Se calcula la cantidad de metano como n = Q_combustión / |Delta Hc|, usando el valor con agua líquida de a), y luego m = n x M con M = 16,0 g/mol. La relación se basa en que cada mol de CH4 libera 890,3 kJ durante la combustión completa." }
        ],
        resultado: "m(CH4) = 520 g (0,52 kg) de metano"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "Por la relación 1:1 de la ecuación, n(CO2) = n(CH4) = 32,50 mol.", porque: "Se usa la estequiometría de la ecuación: 1 mol de CH4 produce 1 mol de CO2, así que la cantidad de CO2 es igual a la de CH4. Son los coeficientes los que fijan la proporción molar, no las masas." },
          { paso: "V = nRT/P = 32,50 mol x 0,0821 L x atm/(mol x K) x 273 K / 1 atm = 728 L.", porque: "Se aplica la ecuación de gases ideales en CNPT, V = nRT/P, con T = 273 K y P = 1 atm, usando R = 0,0821 L x atm/(mol x K). Se verifica que atm y K se cancelen y que el resultado quede en L. Es una aproximación que equivale a unos 22,4 L por mol en CNPT." }
        ],
        resultado: "V(CO2) = 728 L en CNPT"
      },
      {
        parte: "d)",
        pasos: [
          { paso: "Supuesto: el agua de los humos queda como vapor (no condensa). Delta Hc = [-393,5 + 2 x (-241,8)] - [-74,8] = -802,3 kJ/mol.", porque: "Se recalcula Delta Hc con H2O(g) como producto, que corresponde al poder calorífico inferior (PCI). El procedimiento es el mismo de Delta Hr, cambiando sólo el valor del agua. La diferencia respecto del valor con agua líquida es el calor de condensación, que aquí no se aprovecha." },
          { paso: "Energía útil con PCI: 0,65 x 32,50 mol x 802,3 kJ/mol = 16 950 kJ, frente a los 18 810 kJ necesarios.", porque: "Se compara la energía útil que llega al agua (0,65 x energía de combustión con PCI) con la energía necesaria de 18 810 kJ. Es la forma correcta de verificar si el equipo alcanza, porque se compara energía disponible con energía requerida. Calcular sólo la energía teórica no alcanza para responder." },
          { paso: "Como 16 950 < 18 810, no alcanza: falta cerca del 10 %.", porque: "Se interpreta la diferencia entre 16 950 kJ disponibles y 18 810 kJ necesarios: hay un déficit de alrededor del 10 %. Para dimensionar el equipo hay que usar el valor de combustión que corresponde a las condiciones reales de los humos. Si el agua condensa en el equipo se aprovecha el PCS, pero con vapor en los humos no." }
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
