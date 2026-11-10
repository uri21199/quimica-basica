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
          { paso: "Datos: $m = 200{,}0\\ \\text{g}$; $T_{\\text{inicial}} = 20{,}0\\ \\text{°C}$; $T_{\\text{final}} = 75{,}0\\ \\text{°C}$. $$\\Delta T = 75{,}0 - 20{,}0 = 55{,}0\\ \\text{K}$$", porque: "Primero identificamos los datos y calculamos $\\Delta T$ como $T_{\\text{final}} - T_{\\text{inicial}}$, porque la variación de temperatura es lo que determina el calor sensible. Usamos $75{,}0 - 20{,}0 = 55{,}0\\ \\text{K}$, y como un intervalo de $1\\ \\text{°C}$ equivale a $1\\ \\text{K}$, ese $\\Delta T$ se puede usar directamente en la fórmula. Por eso conviene dejar anotadas las masas en $\\text{g}$ antes de operar, para no mezclar unidades." },
          { paso: "$$q = m \\times c \\times \\Delta T = 200{,}0\\ \\text{g} \\times 4{,}18\\ \\frac{\\text{J}}{\\text{g} \\times \\text{K}} \\times 55{,}0\\ \\text{K} = 4{,}60 \\times 10^{4}\\ \\text{J}$$.", porque: "Usamos la ecuación del calor sensible, $q = m \\times c \\times \\Delta T$, porque el agua cambia de temperatura sin cambiar de fase. Reemplazamos $m = 200{,}0\\ \\text{g}$, $c = 4{,}18\\ \\frac{\\text{J}}{\\text{g} \\times \\text{K}}$ y $\\Delta T = 55{,}0\\ \\text{K}$, y el producto da $4{,}60 \\times 10^{4}\\ \\text{J}$. Como el calor específico indica cuántos J hacen falta por gramo y por kelvin, al multiplicar las unidades de g y K se cancelan y queda sólo J." },
          { paso: "Como $q > 0$, el agua gana calor del calentador.", porque: "Usamos la convención termodinámica, en la que $q$ es positivo cuando el calor entra al sistema, y en este caso el sistema es el agua. Como $q$ es positivo, el agua recibe energía del calentador. Por eso el signo positivo es coherente con lo que ocurre físicamente, y el calor se informa como absorbido por el agua." }
        ],
        resultado: "$q = 4{,}60 \\times 10^{4}\\ \\text{J}$ ($46{,}0\\ \\text{kJ}$) absorbidos por el agua"
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
          { paso: "Supuesto: $25\\ \\text{°C}$ y $1\\ \\text{atm}$ (condiciones estándar). El $\\text{O}_2(\\text{g})$ es un elemento en su forma más estable, así que su $\\Delta H_f = 0$.", porque: "Con el supuesto de $25\\ \\text{°C}$ y $1\\ \\text{atm}$, usamos la definición de entalpía de formación, que toma como referencia cero a los elementos en su forma más estable. Por eso el $\\text{O}_2(\\text{g})$ aporta $\\Delta H_f = 0$ a la suma y no cambia el resultado. Como el cero vale sólo para el elemento en su forma estándar, conviene verificar en cada caso que la sustancia esté en ese estado antes de anularla." },
          { paso: "$$\\Delta H_c = [1 \\times (-393{,}5) + 2 \\times (-285{,}8)] - [1 \\times (-74{,}8) + 2 \\times 0] = -965{,}1 + 74{,}8 = -890{,}3\\ \\text{kJ}$$", porque: "Aplicamos la fórmula de $\\Delta H_r$ con valores de $\\Delta H_f$: sumamos los productos multiplicados por sus coeficientes y restamos los reactivos con los suyos. Reemplazamos $\\text{CO}_2$ con $-393{,}5\\ \\text{kJ/mol}$, $2\\ \\text{H}_2\\text{O}$ con $-285{,}8\\ \\text{kJ/mol}$ y $\\text{CH}_4$ con $-74{,}8\\ \\text{kJ/mol}$, lo que da $-965{,}1 + 74{,}8 = -890{,}3\\ \\text{kJ}$. Como el resultado es negativo, la combustión libera energía, y si se invierte la resta cambia ese signo." },
          { paso: "La ecuación está escrita para $1\\ \\text{mol}$ de $\\text{CH}_4$, así que el valor corresponde a $1\\ \\text{mol}$ de combustible.", porque: "Usamos la ecuación balanceada como referencia, porque el $\\Delta H$ depende de la cantidad de sustancia que aparece escrita en ella. Como el $\\text{CH}_4$ tiene coeficiente $1$, el valor obtenido corresponde a $1\\ \\text{mol}$ de combustible. Por eso, si la ecuación se multiplicara por $2$, el $\\Delta H$ también se duplicaría, y hay que tenerlo en cuenta al comparar entalpías." }
        ],
        resultado: "$\\Delta H_c = -890{,}3\\ \\text{kJ}$ por mol de $\\text{CH}_4$ (reacción exotérmica)"
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
          { paso: "$$\\Delta V = 9{,}00\\ \\text{L} - 2{,}00\\ \\text{L} = 7{,}00\\ \\text{L}$$.", porque: "Calculamos el cambio de volumen como $V_{\\text{final}} - V_{\\text{inicial}}$, porque es la magnitud que determina el trabajo contra el entorno. Con $9{,}00\\ \\text{L}$ de volumen final y $2{,}00\\ \\text{L}$ de inicial, la resta da $7{,}00\\ \\text{L}$. Como $\\Delta V$ es positivo, el gas se expande, y el orden de la resta importa porque al invertirlo cambiaría el signo del trabajo." },
          { paso: "$$W = -P_{\\text{ext}} \\times \\Delta V = -1{,}00\\ \\text{atm} \\times 7{,}00\\ \\text{L} = -7{,}00\\ \\text{atm} \\times \\text{L}$$.", porque: "Usamos la expresión del trabajo de expansión contra presión externa constante, $W = -P_{\\text{ext}} \\times \\Delta V$, con la convención del sistema. Reemplazamos $P_{\\text{ext}} = 1{,}00\\ \\text{atm}$ y $\\Delta V = 7{,}00\\ \\text{L}$, y obtenemos $-7{,}00\\ \\text{atm} \\times \\text{L}$. Como el gas se expande, $\\Delta V$ es positivo y el signo menos hace que $W$ sea negativo; además, la presión que se usa es la externa y no la interna del gas." },
          { paso: "Pasamos a J: $$W = -7{,}00 \\times 101{,}3\\ \\text{J} = -709\\ \\text{J} = -7{,}09 \\times 10^{2}\\ \\text{J}$$.", porque: "Como el enunciado pide el trabajo en J, convertimos la unidad con la equivalencia $1\\ \\text{atm} \\times \\text{L} = 101{,}3\\ \\text{J}$. Multiplicamos $-7{,}00\\ \\text{atm} \\times \\text{L}$ por $101{,}3\\ \\text{J}$, lo que da $-709\\ \\text{J}$, es decir $-7{,}09 \\times 10^{2}\\ \\text{J}$. Verificá que la unidad $\\text{atm} \\times \\text{L}$ se cancele, así queda sólo J y el signo negativo se mantiene." },
          { paso: "Como $W < 0$, el sistema realiza trabajo sobre el entorno (cede energía).", porque: "Usamos la convención del sistema, en la que $W$ negativo significa que el sistema entrega energía al entorno. Como $W$ es negativo, el gas empuja al pistón y realiza trabajo sobre el entorno. Por eso el signo negativo es coherente con la expansión que describimos antes." }
        ],
        resultado: "$W = -7{,}09 \\times 10^{2}\\ \\text{J}$; el sistema realiza trabajo sobre el entorno"
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
          { paso: "$Q = +350\\ \\text{J}$ (el calor entra al sistema) y $W = +120\\ \\text{J}$ (el entorno trabaja sobre el sistema).", porque: "Asignamos los signos a $Q$ y $W$ según la convención del sistema, porque el resultado depende del sentido en que se intercambia la energía. $Q$ es positivo porque el calor entra al sistema, con un valor de $350\\ \\text{J}$, y $W$ es positivo porque el entorno trabaja sobre el sistema, con $120\\ \\text{J}$. Por eso conviene revisar cada signo antes de sumar, ya que es el paso donde más se suele equivocar." },
          { paso: "$$\\Delta U = Q + W = 350\\ \\text{J} + 120\\ \\text{J} = 470\\ \\text{J} = 4{,}70 \\times 10^{2}\\ \\text{J}$$.", porque: "Aplicamos el primer principio de la termodinámica, $\\Delta U = Q + W$, que expresa la conservación de la energía. Reemplazamos $Q = 350\\ \\text{J}$ y $W = 120\\ \\text{J}$, con sus signos ya asignados, y la suma da $470\\ \\text{J}$. Como $\\Delta U$ es positivo, la energía interna del sistema aumenta, porque entra más energía de la que sale." }
        ],
        resultado: "$\\Delta U = +4{,}70 \\times 10^{2}\\ \\text{J}$"
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
          { paso: "$$n = \\frac{25{,}0\\ \\text{g}}{18{,}0\\ \\text{g/mol}} = 1{,}389\\ \\text{mol}$$ de $\\text{H}_2\\text{O}$.", porque: "Convertimos la masa en moles dividiéndola por la masa molar, porque la masa molar indica cuántos gramos tiene un mol de esa sustancia. Con $25{,}0\\ \\text{g}$ de hielo y $18{,}0\\ \\text{g/mol}$, obtenemos $1{,}389\\ \\text{mol}$ de $\\text{H}_2\\text{O}$. Como la entalpía de fusión está dada en kJ por mol, trabajamos en moles para que las unidades coincidan." },
          { paso: "$$q = n \\times \\Delta H_{\\text{fus}} = 1{,}389\\ \\text{mol} \\times 6{,}01\\ \\text{kJ/mol} = 8{,}35\\ \\text{kJ}$$.", porque: "Usamos $q = n \\times \\Delta H_{\\text{fus}}$, porque la fusión ocurre a $0\\ \\text{°C}$ y presión constante sin cambio de temperatura, y por eso el calor es latente. Reemplazamos $n = 1{,}389\\ \\text{mol}$ y $\\Delta H_{\\text{fus}} = 6{,}01\\ \\text{kJ/mol}$, y obtenemos $8{,}35\\ \\text{kJ}$. Como este calor se toma de la entalpía molar, no corresponde usar $m \\times c \\times \\Delta T$ en este caso." },
          { paso: "Como la fusión absorbe energía, $q > 0$ (el hielo gana calor del entorno).", porque: "Determinamos el signo de $q$ según el tipo de proceso, porque fundir requiere vencer las fuerzas que mantienen unidas las moléculas del sólido. Como la fusión absorbe energía, esa energía la aporta el entorno, y el proceso es endotérmico. Por eso $q$ es positivo desde el punto de vista del hielo, lo que es coherente con el valor calculado en el paso anterior." }
        ],
        resultado: "$q = 8{,}35\\ \\text{kJ}$ absorbidos para fundir el hielo"
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
          { paso: "Supuesto: el hielo se funde por completo y la temperatura final es mayor que $0\\ \\text{°C}$. Se verifica al final.", porque: "Planteamos una hipótesis sobre el estado final, porque el enunciado no dice si todo el hielo se funde. Comparamos la energía que el agua caliente puede ceder al enfriarse hasta $0\\ \\text{°C}$ con la que se necesita para fundir todo el hielo. Si la energía disponible es mayor, la suposición es razonable, pero recién se confirma al terminar el cálculo." },
          { paso: "Calor para fundir el hielo: $n = \\frac{50{,}0}{18{,}0} = 2{,}778\\ \\text{mol}$ y $$q_{\\text{fus}} = 2{,}778 \\times 6{,}01 = +16{,}69\\ \\text{kJ}$$.", porque: "Calculamos la cantidad de hielo como $n = \\frac{m}{M}$, y luego el calor de fusión con $q = n \\times \\Delta H_{\\text{fus}}$. Con $50{,}0\\ \\text{g}$ y $18{,}0\\ \\text{g/mol}$ obtenemos $2{,}778\\ \\text{mol}$, y al multiplicar por $6{,}01\\ \\text{kJ/mol}$ da $+16{,}69\\ \\text{kJ}$. Como la fusión no cambia la temperatura, este calor es latente y representa el primer aporte de energía que el agua caliente debe proveer." },
          { paso: "Balance del calorímetro adiabático: $$q_{\\text{fus}} + 50{,}0 \\times 4{,}18 \\times (T_f - 0) + 200{,}0 \\times 4{,}18 \\times (T_f - 25{,}0) = 0$$", porque: "Planteamos el balance de energía del calorímetro adiabático, porque no hay intercambio con el exterior y la suma de los calores de todas las partes debe ser cero. Los términos son el calor de fusión, el calentamiento del agua fundida de $0$ a $T_f$ y el enfriamiento del agua caliente de $25{,}0\\ \\text{°C}$ a $T_f$, con masas de $50{,}0\\ \\text{g}$ y $200{,}0\\ \\text{g}$. Como cada $\\Delta T$ se escribe como $T_{\\text{final}} - T_{\\text{inicial}}$, el signo de cada término indica si esa parte gana o cede calor." },
          { paso: "Desarrollando (en J): $$16\\,694 + 209\\, T_f + 836\\, T_f - 20\\,900 = 0$$, es decir $1045\\, T_f = 4206$, y $T_f = 4{,}02\\ \\text{°C}$.", porque: "Agrupamos los términos que contienen $T_f$, pasamos los constantes al otro lado de la igualdad y dividimos por el coeficiente total, porque así se despeja la temperatura final. Con $1045\\, T_f = 4206$, despejamos $T_f = 4{,}02\\ \\text{°C}$. Como los intervalos de temperatura son iguales en $\\text{°C}$ y en $\\text{K}$, el resultado puede expresarse en $\\text{°C}$." }
        ],
        resultado: "$T_f = 4{,}02\\ \\text{°C}$ (agua líquida, 1 atm)"
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
          { paso: "Ecuación de formación: $$2\\ \\text{C}(\\text{grafito}) + 3\\ \\text{H}_2(\\text{g}) + \\frac{1}{2}\\ \\text{O}_2(\\text{g}) \\rightarrow \\text{C}_2\\text{H}_5\\text{OH}(\\text{l})$$.", porque: "Escribimos la reacción de formación del etanol, porque su $\\Delta H$ es justamente la entalpía de formación que queremos calcular. Partimos de los elementos en su forma estándar, $\\text{C}$ grafito, $\\text{H}_2$ y $\\text{O}_2$ gaseosos, y obtenemos $1\\ \\text{mol}$ de $\\text{C}_2\\text{H}_5\\text{OH}(\\text{l})$. Conviene verificar que el balance de C, H y O coincida antes de seguir con las combinaciones." },
          { paso: "Combinamos: $2 \\times (1) + 3 \\times (2) - (3)$. La ecuación (3) se invierte, por lo que su $\\Delta H$ cambia de signo: $+1367{,}0\\ \\text{kJ}$.", porque: "Combinamos las ecuaciones dadas con los coeficientes que hacen desaparecer $\\text{CO}_2$ y $\\text{H}_2\\text{O}$, porque así queda la formación del etanol. Como la entalpía es función de estado, las ecuaciones se pueden sumar algebraicamente, y al invertir la ecuación (3) su $\\Delta H$ cambia de signo y queda $+1367{,}0\\ \\text{kJ}$. La reacción inversa absorbe la energía que la directa libera, por eso el signo cambia." },
          { paso: "$$\\Delta H_f = 2 \\times (-393{,}5) + 3 \\times (-285{,}8) - (-1367{,}0) = -787{,}0 - 857{,}4 + 1367{,}0 = -277{,}4\\ \\text{kJ/mol}$$", porque: "Calculamos $\\Delta H_f$ sumando cada $\\Delta H$ multiplicado por el coeficiente con el que se usó su ecuación, porque así se obtiene la formación del etanol. Reemplazamos $2 \\times (-393{,}5)$, $3 \\times (-285{,}8)$ y $-(-1367{,}0)$, y el resultado es $-277{,}4\\ \\text{kJ/mol}$. Como $\\text{CO}_2$ y $\\text{H}_2\\text{O}$ desaparecen al combinar las ecuaciones, el resultado depende sólo de los datos de combustión dados." }
        ],
        resultado: "$\\Delta H_f(\\text{C}_2\\text{H}_5\\text{OH}, \\text{l}) = -277{,}4\\ \\text{kJ/mol}$"
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
          { paso: "$$\\Delta H = 2 \\times (-393{,}5) - [2 \\times (-110{,}5) + 1 \\times 0] = -787{,}0 + 221{,}0$$.", porque: "Aplicamos la fórmula de $\\Delta H_r$ con $\\Delta H_f$, restando los reactivos a los productos, cada uno multiplicado por su coeficiente. Reemplazamos $2 \\times (-393{,}5)$ para el $\\text{CO}_2$ de productos y $2 \\times (-110{,}5)$ para el $\\text{CO}$ de reactivos, mientras que el $\\text{O}_2(\\text{g})$ aporta $0$. Por eso la suma se resuelve en el paso siguiente." },
          { paso: "$\\Delta H = -566{,}0\\ \\text{kJ}$ para la reacción tal como está escrita ($2\\ \\text{mol}$ de $\\text{CO}$).", porque: "Interpretamos el resultado en relación con la reacción tal como está escrita, porque el $\\Delta H$ depende de la escala de los coeficientes. Como la ecuación tiene $2\\ \\text{mol}$ de $\\text{CO}$, el valor $-566{,}0\\ \\text{kJ}$ corresponde a esos $2\\ \\text{mol}$ y no a uno solo. Por eso, si se quisiera el valor por mol de $\\text{CO}$, habría que dividir por $2$, y cambiar la escala sin ajustar el $\\Delta H$ es un error común." }
        ],
        resultado: "$\\Delta H = -566{,}0\\ \\text{kJ}$"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "$$\\Delta n_{\\text{gas}} = \\text{mol de gas en productos} - \\text{mol de gas en reactivos} = 2 - (2 + 1) = -1$$.", porque: "Calculamos $\\Delta n_{\\text{gas}}$ como moles de gas en productos menos moles de gas en reactivos, usando los coeficientes, porque sólo interesan las especies gaseosas. Como todas las especies de esta reacción son gases, contamos $2\\ \\text{mol}$ de $\\text{CO}_2$ frente a $2\\ \\text{mol}$ de $\\text{CO}$ más $1\\ \\text{mol}$ de $\\text{O}_2$. Por eso el resultado es $-1$, lo que indica que el sistema disminuye la cantidad de gas." },
          { paso: "$$\\Delta U = \\Delta H - \\Delta n \\times R \\times T = -566{,}0\\ \\text{kJ} - (-1)(8{,}314 \\times 10^{-3}\\ \\text{kJ/(mol} \\times \\text{K)})(298\\ \\text{K}) = -566{,}0 + 2{,}48 = -563{,}5\\ \\text{kJ}$$", porque: "Despejamos $\\Delta U$ de la relación $\\Delta H = \\Delta U + \\Delta n \\times R \\times T$, que vale para gases ideales, porque queremos la energía interna. Reemplazamos $\\Delta H = -566{,}0\\ \\text{kJ}$, $\\Delta n = -1$, $R = 8{,}314 \\times 10^{-3}\\ \\text{kJ/(mol} \\times \\text{K)}$ y $T = 298\\ \\text{K}$, lo que da $-563{,}5\\ \\text{kJ}$. Como $R$ está en $\\text{kJ/(mol} \\times \\text{K)}$, coincide con las unidades de $\\Delta H$, y el término $\\Delta n \\times R \\times T$ se resta al despejar." }
        ],
        resultado: "$\\Delta U = -563{,}5\\ \\text{kJ}$ a $25\\ \\text{°C}$"
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
          { paso: "$$\\Delta H_c = [4 \\times (-393{,}5) + 5 \\times (-285{,}8)] - [1 \\times (-126{,}2) + \\frac{13}{2} \\times 0]$$.", porque: "Aplicamos la fórmula de $\\Delta H_r$ con $\\Delta H_f$, combinando productos y reactivos con sus coeficientes, porque la combustión completa del butano sigue ese esquema. Reemplazamos $4 \\times (-393{,}5)$ para el $\\text{CO}_2$, $5 \\times (-285{,}8)$ para el $\\text{H}_2\\text{O}$ y $1 \\times (-126{,}2)$ para el $\\text{C}_4\\text{H}_{10}$, mientras el $\\text{O}_2$ aporta cero. Conviene contar los átomos de C y H para comprobar que los coeficientes son los del balance." },
          { paso: "$$\\Delta H_c = -1574{,}0 - 1429{,}0 + 126{,}2 = -2876{,}8\\ \\text{kJ}$$ por mol de butano.", porque: "Sumamos los términos con sus coeficientes, respetando el signo de cada $\\Delta H_f$, porque así se obtiene la entalpía de combustión. Al restar el término del butano, su signo negativo se vuelve suma. El resultado $-2876{,}8\\ \\text{kJ}$ indica que la combustión es exotérmica, y corresponde a $1\\ \\text{mol}$ de butano según la ecuación escrita." }
        ],
        resultado: "$\\Delta H_c = -2876{,}8\\ \\text{kJ/mol}$ de $\\text{C}_4\\text{H}_{10}$"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "$$n = \\frac{1000\\ \\text{g}}{58{,}1\\ \\text{g/mol}} = 17{,}21\\ \\text{mol}$$ de butano en $1\\ \\text{kg}$.", porque: "Convertimos la masa a moles dividiendo por la masa molar, porque $\\Delta H_c$ está expresado por mol de butano. Con $1000\\ \\text{g}$ de butano y $58{,}1\\ \\text{g/mol}$, obtenemos $17{,}21\\ \\text{mol}$ en $1\\ \\text{kg}$. Como la energía total depende de cuántos moles hay en la muestra, este paso conecta la masa con la energía liberada." },
          { paso: "Energía liberada = $$17{,}21\\ \\text{mol} \\times 2876{,}8\\ \\text{kJ/mol} = 4{,}95 \\times 10^{4}\\ \\text{kJ/kg}$$ por kg.", porque: "Multiplicamos la cantidad de moles por la energía liberada por mol, porque la energía total es moles por kJ/mol. Usamos el módulo de $\\Delta H_c$, ya que la pregunta pide la energía liberada como cantidad positiva. Con $17{,}21\\ \\text{mol}$ y $2876{,}8\\ \\text{kJ/mol}$ obtenemos $4{,}95 \\times 10^{4}\\ \\text{kJ}$ por kg, y verificamos que la unidad final sea $\\text{kJ/kg}$." }
        ],
        resultado: "$4{,}95 \\times 10^{4}\\ \\text{kJ}$ por kg de butano (con agua líquida como producto)"
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
          { paso: "Etapa 1 (calentamiento): $$q_1 = 30{,}0\\ \\text{g} \\times 4{,}18\\ \\frac{\\text{J}}{\\text{g} \\times \\text{K}} \\times 80{,}0\\ \\text{K} = 1{,}00 \\times 10^{4}\\ \\text{J} = 10{,}0\\ \\text{kJ}$$.", porque: "Calculamos el calor sensible del agua líquida con $q_1 = m \\times c \\times \\Delta T$, porque en este tramo sólo cambia la temperatura. Como $\\Delta T$ vale $80{,}0\\ \\text{K}$, reemplazamos $m = 30{,}0\\ \\text{g}$ y $c = 4{,}18\\ \\frac{\\text{J}}{\\text{g} \\times \\text{K}}$, y obtenemos $1{,}00 \\times 10^{4}\\ \\text{J}$, es decir $10{,}0\\ \\text{kJ}$. Esta es la primera etapa del proceso, y se usa el calor específico del agua líquida." },
          { paso: "Etapa 2 (vaporización): $n = \\frac{30{,}0}{18{,}0} = 1{,}667\\ \\text{mol}$; $$q_2 = 1{,}667\\ \\text{mol} \\times 40{,}7\\ \\text{kJ/mol} = 67{,}8\\ \\text{kJ}$$.", porque: "Usamos $q_2 = n \\times \\Delta H_{\\text{vap}}$, porque la vaporización ocurre a temperatura constante, y por eso el calor es latente. Convertimos los $30{,}0\\ \\text{g}$ a moles con $n = \\frac{m}{M}$, y al multiplicar $1{,}667\\ \\text{mol}$ por $40{,}7\\ \\text{kJ/mol}$ obtenemos $67{,}8\\ \\text{kJ}$. Este tramo es el que suele olvidarse cuando sólo se piensa en calentar el agua." },
          { paso: "$$q_{\\text{total}} = 10{,}0\\ \\text{kJ} + 67{,}8\\ \\text{kJ} = 77{,}9\\ \\text{kJ}$$.", porque: "Sumamos los calores de las dos etapas, porque la entalpía es función de estado y el calor total es la suma de calentamiento y vaporización. Con $10{,}0\\ \\text{kJ}$ y $67{,}8\\ \\text{kJ}$ obtenemos $77{,}9\\ \\text{kJ}$. Verificá que ambas etapas estén incluidas y que las unidades coincidan en $\\text{kJ}$ antes de dar el resultado final." }
        ],
        resultado: "$q_{\\text{total}} = 77{,}9\\ \\text{kJ}$"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Supuesto: el volumen del líquido es despreciable, así que $\\Delta V = V_{\\text{vapor}} = \\frac{nRT}{P}$. $$W = -P\\,\\Delta V = -\\Delta n \\times R \\times T = -(1\\ \\text{mol})(8{,}314 \\times 10^{-3}\\ \\text{kJ/(mol} \\times \\text{K)})(373\\ \\text{K}) = -3{,}10\\ \\text{kJ}$$.", porque: "Usamos $W = -P_{\\text{ext}} \\times \\Delta V$, con $\\Delta V$ igual al volumen del vapor obtenido de $V = \\frac{nRT}{P}$, porque el líquido ocupa un volumen despreciable. Para un gas ideal $P \\times \\Delta V = \\Delta n \\times R \\times T$, así que el trabajo se escribe como $-\\Delta n \\times R \\times T$. Con $\\Delta n = 1\\ \\text{mol}$, $R = 8{,}314 \\times 10^{-3}\\ \\text{kJ/(mol} \\times \\text{K)}$ y $T = 373\\ \\text{K}$, obtenemos $W = -3{,}10\\ \\text{kJ}$, con signo negativo porque es una expansión." },
          { paso: "$\\Delta H = q_p = +40{,}7\\ \\text{kJ/mol}$. $$\\Delta U = \\Delta H - P\\,\\Delta V = 40{,}7 - 3{,}10 = 37{,}6\\ \\text{kJ/mol}$$", porque: "A presión constante el calor es igual a la variación de entalpía, $\\Delta H = q_p$, así que tomamos directamente $40{,}7\\ \\text{kJ/mol}$. Luego despejamos $\\Delta U$ con $\\Delta U = \\Delta H - P \\times \\Delta V$, porque parte de la energía se usa en el trabajo de expansión. Con $40{,}7\\ \\text{kJ/mol}$ y $3{,}10\\ \\text{kJ}$ restamos ese trabajo, y el resultado $37{,}6\\ \\text{kJ/mol}$ queda menor que $\\Delta H$." }
        ],
        resultado: "$W = -3{,}10\\ \\text{kJ}$ (el sistema realiza trabajo); $\\Delta U = +37{,}6\\ \\text{kJ/mol}$"
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
          { paso: "$$Q = 0{,}85\\ \\text{kcal} \\times 4184\\ \\text{J/kcal} = 3{,}6 \\times 10^{3}\\ \\text{J}$$ (2 cifras significativas). $Q > 0$ porque el calor entra al sistema.", porque: "Convertimos el calor de kcal a J, porque el trabajo y el primer principio se expresan en J. Con $0{,}85\\ \\text{kcal}$ y $4184\\ \\text{J/kcal}$ obtenemos $3{,}6 \\times 10^{3}\\ \\text{J}$, manteniendo 2 cifras significativas. Como el calor entra al sistema, el signo es positivo, y ese valor se usa después en $\\Delta U = Q + W$." },
          { paso: "$\\Delta V = 6{,}0\\ \\text{L} - 2{,}0\\ \\text{L} = 4{,}0\\ \\text{L}$. $$W = -P_{\\text{ext}} \\times \\Delta V = -1{,}00\\ \\text{atm} \\times 4{,}0\\ \\text{L} = -4{,}0\\ \\text{atm} \\times \\text{L} = -4{,}0 \\times 10^{2}\\ \\text{J}$$", porque: "Calculamos el trabajo de expansión a presión externa constante, $W = -P_{\\text{ext}} \\times \\Delta V$, con $\\Delta V = V_{\\text{final}} - V_{\\text{inicial}}$. Con $6{,}0\\ \\text{L}$ y $2{,}0\\ \\text{L}$ obtenemos $\\Delta V = 4{,}0\\ \\text{L}$, y con $P_{\\text{ext}} = 1{,}00\\ \\text{atm}$ el resultado es $-4{,}0\\ \\text{atm} \\times \\text{L}$, que se pasa a $-4{,}0 \\times 10^{2}\\ \\text{J}$. Como $\\Delta V$ es positivo, el gas se expande y entrega energía al entorno, por eso $W$ es negativo." }
        ],
        resultado: "$Q = +3{,}6 \\times 10^{3}\\ \\text{J}$; $W = -4{,}0 \\times 10^{2}\\ \\text{J}$"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "$$\\Delta U = Q + W = 3{,}6 \\times 10^{3}\\ \\text{J} + (-4{,}0 \\times 10^{2}\\ \\text{J}) = 3{,}2 \\times 10^{3}\\ \\text{J}$$.", porque: "Aplicamos el primer principio, $\\Delta U = Q + W$, con $Q$ y $W$ ya expresados en $\\text{J}$ y con sus signos. Reemplazamos $Q = 3{,}6 \\times 10^{3}\\ \\text{J}$ y $W = -4{,}0 \\times 10^{2}\\ \\text{J}$, y la suma da $3{,}2 \\times 10^{3}\\ \\text{J}$. Como parte del calor se transforma en trabajo de expansión y el resto queda en el gas, el aumento de energía interna es menor que $Q$." }
        ],
        resultado: "$\\Delta U = +3{,}2 \\times 10^{3}\\ \\text{J}$"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "Como el proceso es a presión constante, $$\\Delta H = Q_p = +3{,}6 \\times 10^{3}\\ \\text{J}$$.", porque: "A presión constante el calor intercambiado es igual a la variación de entalpía, $Q_p = \\Delta H$, porque la entalpía se define en esas condiciones. Por eso tomamos directamente el calor calculado en el paso anterior, $3{,}6 \\times 10^{3}\\ \\text{J}$, sin cálculo adicional. Como $\\Delta H$ es positivo, el proceso absorbe calor." },
          { paso: "Verificación: $$\\Delta H = \\Delta U + P\\,\\Delta V = 3{,}2 \\times 10^{3}\\ \\text{J} + 4{,}0 \\times 10^{2}\\ \\text{J} = 3{,}6 \\times 10^{3}\\ \\text{J}$$.", porque: "Verificamos el resultado con $H = U + PV$, que en un proceso a presión constante da $\\Delta H = \\Delta U + P \\times \\Delta V$. Reemplazamos $\\Delta U = 3{,}2 \\times 10^{3}\\ \\text{J}$ y $P \\times \\Delta V = 4{,}0 \\times 10^{2}\\ \\text{J}$, y la suma da $3{,}6 \\times 10^{3}\\ \\text{J}$, igual al $\\Delta H$ del paso anterior. Si no coincidiera, la revisión debe empezar por los signos de $Q$ y $W$, que son la fuente típica de error." }
        ],
        resultado: "$\\Delta H = +3{,}6 \\times 10^{3}\\ \\text{J} = Q_p$; es mayor que $\\Delta U$ en el trabajo de expansión"
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
          { paso: "(i): $$\\Delta H = [-393{,}5 + 2 \\times (-285{,}8)] - [-74{,}8 + 0] = -890{,}3\\ \\text{kJ}$$.", porque: "Aplicamos la fórmula de $\\Delta H_r$ con $\\Delta H_f$, usando $\\text{H}_2\\text{O}(\\text{l})$ como producto porque la reacción (i) forma agua líquida. Sumamos $1 \\times (-393{,}5)$ del $\\text{CO}_2$ y $2 \\times (-285{,}8)$ del $\\text{H}_2\\text{O}$, y restamos $-74{,}8$ del $\\text{CH}_4$. El resultado es $-890{,}3\\ \\text{kJ}$, y el $\\text{O}_2$ aporta cero porque es un elemento estándar." },
          { paso: "(ii): $$\\Delta H = [-393{,}5 + 2 \\times (-241{,}8)] - [-74{,}8 + 0] = -802{,}3\\ \\text{kJ}$$.", porque: "Repetimos el mismo cálculo cambiando sólo el estado del agua a vapor, porque la reacción (ii) forma $\\text{H}_2\\text{O}(\\text{g})$ con otra $\\Delta H_f$. Con $2 \\times (-241{,}8)$ en lugar de $2 \\times (-285{,}8)$, el resultado es $-802{,}3\\ \\text{kJ}$. Como este valor es menos negativo, el estado de agregación del producto modifica el $\\Delta H$, y comparar ambos sirve para verificar el cálculo." }
        ],
        resultado: "(i) $\\Delta H = -890{,}3\\ \\text{kJ}$; (ii) $\\Delta H = -802{,}3\\ \\text{kJ}$"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "(i): $\\Delta n_{\\text{gas}} = 1 - (1 + 2) = -2$ (el agua líquida no cuenta). $$\\Delta U = \\Delta H - \\Delta n \\times R \\times T = -890{,}3 - (-2)(8{,}314 \\times 10^{-3})(298) = -890{,}3 + 4{,}96 = -885{,}3\\ \\text{kJ}$$", porque: "Calculamos $\\Delta n_{\\text{gas}}$ contando sólo las especies gaseosas, porque el agua líquida no interviene en el término $\\Delta n \\times R \\times T$. En (i) hay $1 + 2\\ \\text{mol}$ de gas en reactivos ($\\text{CH}_4$ y $\\text{O}_2$) y $1\\ \\text{mol}$ de $\\text{CO}_2$ en productos, así que $\\Delta n = -2$. Reemplazamos en $\\Delta U = \\Delta H - \\Delta n \\times R \\times T$, con $\\Delta H = -890{,}3\\ \\text{kJ}$, y obtenemos $-885{,}3\\ \\text{kJ}$. Como $\\Delta n$ es negativo, $\\Delta U$ resulta menos negativo que $\\Delta H$." },
          { paso: "(ii): $\\Delta n_{\\text{gas}} = (1 + 2) - (1 + 2) = 0$, así que $\\Delta U = \\Delta H = -802{,}3\\ \\text{kJ}$.", porque: "Calculamos $\\Delta n_{\\text{gas}}$ contando los gases de cada lado, porque el término $\\Delta n \\times R \\times T$ sólo aparece cuando cambia el número de moles gaseosos. En (ii) hay $3\\ \\text{mol}$ de gas en reactivos y $3\\ \\text{mol}$ en productos, así que $\\Delta n = 0$. Por eso $\\Delta U = \\Delta H = -802{,}3\\ \\text{kJ}$, y este caso sirve como verificación: si $\\Delta n$ es cero, no hace falta corregir." }
        ],
        resultado: "(i) $\\Delta U = -885{,}3\\ \\text{kJ}$; (ii) $\\Delta U = -802{,}3\\ \\text{kJ}$"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "La reacción (i) tiene mayor módulo: $|-890{,}3| > |-802{,}3|$. La diferencia es $$88{,}0\\ \\text{kJ} = 2 \\times 44{,}0\\ \\text{kJ}$$.", porque: "Comparamos los módulos de ambos $\\Delta H$ y calculamos su diferencia, porque la pregunta se responde con esa diferencia. Como $|-890{,}3| - |-802{,}3| = 88{,}0\\ \\text{kJ}$, la reacción (i) libera más energía. Según la ley de Hess, esa diferencia coincide con el calor de condensación de los $2\\ \\text{mol}$ de $\\text{H}_2\\text{O}$ que pasan de vapor a líquido en (i)." },
          { paso: "En (ii) esa energía no aparece en la reacción porque el agua sale como vapor y no libera el calor de condensación.", porque: "Explicamos dónde queda la energía que no aparece en (ii), porque el agua sale como vapor en esa reacción. Como el calor de condensación sólo se libera si el vapor condensa, y eso no ocurre dentro de la reacción química, esa energía no se libera allí. Por eso la reacción (i) libera más energía que (ii), con la diferencia calculada antes." }
        ],
        resultado: "Mayor $|\\Delta H|$: reacción (i); los $88{,}0\\ \\text{kJ}$ de diferencia corresponden a la condensación del agua"
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
          { paso: "Supuesto: no hay pérdidas al exterior, y toda la energía liberada queda en el calorímetro. $$q_{\\text{cal}} = C \\times \\Delta T = 8{,}15\\ \\text{kJ/K} \\times 5{,}88\\ \\text{K} = 47{,}9\\ \\text{kJ}$$", porque: "Calculamos el calor absorbido por el calorímetro con $q_{\\text{cal}} = C \\times \\Delta T$, porque la capacidad calorífica total relaciona el calor con el aumento de temperatura. Con $C = 8{,}15\\ \\text{kJ/K}$ y $\\Delta T = 5{,}88\\ \\text{K}$ obtenemos $47{,}9\\ \\text{kJ}$. Como se supone que no hay pérdidas, ese calor es el que liberó la combustión, aunque con signo opuesto." },
          { paso: "$$n = \\frac{1{,}00\\ \\text{g}}{114{,}2\\ \\text{g/mol}} = 8{,}76 \\times 10^{-3}\\ \\text{mol}$$ de octano.", porque: "Convertimos la masa de octano a moles dividiéndola por la masa molar, porque el resultado de la bomba se expresa por mol de sustancia. Con $1{,}00\\ \\text{g}$ y $114{,}2\\ \\text{g/mol}$ obtenemos $8{,}76 \\times 10^{-3}\\ \\text{mol}$, que es la cantidad de octano quemada. Este valor es el que se usa después para pasar el calor medido a un valor por mol." },
          { paso: "$$\\Delta U = -\\frac{q_{\\text{cal}}}{n} = -\\frac{47{,}9\\ \\text{kJ}}{8{,}76 \\times 10^{-3}\\ \\text{mol}} = -5{,}47 \\times 10^{3}\\ \\text{kJ/mol}$$", porque: "Calculamos $\\Delta U$ como $-\\frac{q_{\\text{cal}}}{n}$, porque el calor de la reacción es el opuesto del que absorbió el calorímetro. Con $-47{,}9\\ \\text{kJ}$ y $8{,}76 \\times 10^{-3}\\ \\text{mol}$, el cociente da $-5{,}47 \\times 10^{3}\\ \\text{kJ/mol}$. Como el recipiente es rígido y de volumen constante, el calor medido es $\\Delta U$, y el signo negativo indica una reacción exotérmica." }
        ],
        resultado: "$\\Delta U = -5{,}47 \\times 10^{3}\\ \\text{kJ/mol}$ de octano"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "$$\\Delta n_{\\text{gas}} = 8 - \\frac{25}{2} = 8 - 12{,}5 = -4{,}5$$. El $\\text{H}_2\\text{O}$ es líquida y no se cuenta.", porque: "Calculamos $\\Delta n_{\\text{gas}}$ por mol de octano contando sólo los gases, porque el $\\text{H}_2\\text{O}$ es líquida y no entra en el término $\\Delta n \\times R \\times T$. Con $8\\ \\text{mol}$ de $\\text{CO}_2$ en productos y $12{,}5\\ \\text{mol}$ de $\\text{O}_2$ en reactivos, obtenemos $8 - 12{,}5 = -4{,}5$. Como $\\Delta n$ es negativo, la reacción disminuye la cantidad de gas, y este valor se usa en el paso siguiente para corregir $\\Delta U$." },
          { paso: "$$\\Delta H = \\Delta U + \\Delta n \\times R \\times T = -5{,}47 \\times 10^{3}\\ \\text{kJ/mol} + (-4{,}5)(8{,}314 \\times 10^{-3}\\ \\text{kJ/(mol} \\times \\text{K)})(298\\ \\text{K}) = -5{,}47 \\times 10^{3} - 11\\ \\text{kJ} = -5{,}48 \\times 10^{3}\\ \\text{kJ/mol}$$", porque: "Usamos la relación $\\Delta H = \\Delta U + \\Delta n \\times R \\times T$ para gases ideales, porque las tablas dan valores a presión constante. Reemplazamos $\\Delta U = -5{,}47 \\times 10^{3}\\ \\text{kJ/mol}$, $\\Delta n = -4{,}5$, $R = 8{,}314 \\times 10^{-3}\\ \\text{kJ/(mol} \\times \\text{K)}$ y $T = 298\\ \\text{K}$, y obtenemos $-5{,}48 \\times 10^{3}\\ \\text{kJ/mol}$. La corrección es pequeña frente a $\\Delta U$, pero es la que permite comparar con datos a presión constante." }
        ],
        resultado: "$\\Delta H = -5{,}48 \\times 10^{3}\\ \\text{kJ/mol}$ de octano"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "En la bomba el volumen es constante: $\\Delta V = 0$, así que $W = 0$ (sin trabajo de expansión) y $q_V = \\Delta U$ por el primer principio.", porque: "Analizamos la bomba como un sistema de volumen constante, porque el recipiente es cerrado y rígido. Con $\\Delta V = 0$, el trabajo de expansión $W = -P \\times \\Delta V$ es cero, y el primer principio da $\\Delta U = q + W = q_V$. Por eso el calor medido en la bomba es directamente $\\Delta U$, sin corrección adicional, siempre que el recipiente sea realmente rígido." },
          { paso: "$$\\Delta H = \\Delta U + \\Delta n \\times R \\times T$$, por lo que $\\Delta H$ sólo se obtiene corrigiendo $\\Delta U$. Esa corrección aquí es de unos $11\\ \\text{kJ/mol}$.", porque: "Relacionamos $\\Delta H$ con $\\Delta U$ mediante $\\Delta H = \\Delta U + \\Delta n \\times R \\times T$, porque el calor a presión constante es el que corresponde a $\\Delta H$. Como las tablas dan valores a presión constante, para comparar con ellas hay que aplicar la corrección. Con $-5{,}47 \\times 10^{3}\\ \\text{kJ/mol}$ y $-5{,}48 \\times 10^{3}\\ \\text{kJ/mol}$ la diferencia es de unos $11\\ \\text{kJ/mol}$, pequeña pero no despreciable en cálculos precisos." }
        ],
        resultado: "$q_V = \\Delta U$; $\\Delta H$ difiere de $\\Delta U$ en $\\Delta n \\times R \\times T$ (aprox. $-11\\ \\text{kJ/mol}$)"
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
          { paso: "$$\\Delta H_c = -530{,}6\\ \\text{kcal/mol} \\times 4{,}184\\ \\text{kJ/kcal} = -2220\\ \\text{kJ/mol}$$.", porque: "Convertimos el calor de combustión de kcal/mol a kJ/mol, para trabajar todo el problema en la misma unidad. Con $-530{,}6\\ \\text{kcal/mol}$ y $4{,}184\\ \\text{kJ/kcal}$ obtenemos $-2220\\ \\text{kJ/mol}$. Así evitamos mezclar magnitudes en escalas distintas en las partes siguientes del cálculo." }
        ],
        resultado: "$\\Delta H_c = -2220\\ \\text{kJ/mol}$"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "$\\Delta H_c = [3 \\times (-393{,}5) + 4 \\times (-285{,}8)] - [\\Delta H_f(\\text{C}_3\\text{H}_8) + 5 \\times 0]$, luego $$\\Delta H_f(\\text{C}_3\\text{H}_8) = [3 \\times (-393{,}5) + 4 \\times (-285{,}8)] - \\Delta H_c = -2323{,}7 + 2220 = -103{,}7\\ \\text{kJ/mol}$$.", porque: "Despejamos $\\Delta H_f$ del propano de la fórmula de $\\Delta H_r$, porque la incógnita está entre los reactivos. Como la suma de productos es $3 \\times (-393{,}5) + 4 \\times (-285{,}8) = -2323{,}7\\ \\text{kJ}$, y el $\\text{O}_2$ tiene $\\Delta H_f = 0$, restamos el $\\Delta H_c$: $-2323{,}7 - (-2220) = -103{,}7\\ \\text{kJ/mol}$. Hay que cuidar el signo al despejar, porque ese cambio de lado es donde suele aparecer el error." }
        ],
        resultado: "$\\Delta H_f(\\text{C}_3\\text{H}_8, \\text{g}) = -103{,}7\\ \\text{kJ/mol}$"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "$n = \\frac{10{,}0\\ \\text{g}}{44{,}1\\ \\text{g/mol}} = 0{,}2268\\ \\text{mol}$. Energía: $$\\text{Energía} = 0{,}2268\\ \\text{mol} \\times 2220\\ \\text{kJ/mol} = 503\\ \\text{kJ} = \\frac{503}{4{,}184}\\ \\text{kcal} = 1{,}20 \\times 10^{2}\\ \\text{kcal}$$", porque: "Convertimos la masa de propano a moles dividiéndola por la masa molar, porque el $\\Delta H_c$ está dado por mol. Con $10{,}0\\ \\text{g}$ y $44{,}1\\ \\text{g/mol}$ obtenemos $0{,}2268\\ \\text{mol}$, y al multiplicar por $2220\\ \\text{kJ/mol}$ da $503\\ \\text{kJ}$. Dividimos por $4{,}184$ para pasar a kcal, y obtenemos $1{,}20 \\times 10^{2}\\ \\text{kcal}$; conviene hacer las conversiones por separado para no confundir kJ con kcal." },
          { paso: "Con agua gaseosa, $$\\Delta H_c = -2220 + 4 \\times 44{,}0 = -2044\\ \\text{kJ/mol}$$ (la energía liberada es menor).", porque: "Recalculamos $\\Delta H_c$ con agua gaseosa, porque el agua queda como vapor y no libera su calor de condensación. Con $4\\ \\text{mol}$ de $\\text{H}_2\\text{O}$ y $44{,}0\\ \\text{kJ}$ por mol, el término suma $4 \\times 44{,}0\\ \\text{kJ}$, y el cálculo da $-2220 + 4 \\times 44{,}0 = -2044\\ \\text{kJ/mol}$. Por eso el valor resulta menos exotérmico, y la energía liberada es menor que en el caso con agua líquida." }
        ],
        resultado: "Energía = $1{,}20 \\times 10^{2}\\ \\text{kcal}$; con $\\text{H}_2\\text{O}(\\text{g})$, $\\Delta H_c = -2044\\ \\text{kJ/mol}$"
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
          { paso: "$$\\Delta H = [-635{,}1 + (-393{,}5)] - [-1206{,}9] = -1028{,}6 + 1206{,}9 = +178{,}3\\ \\text{kJ}$$.", porque: "Aplicamos la fórmula de $\\Delta H_r$ con $\\Delta H_f$, porque la descomposición del $\\text{CaCO}_3$ produce $\\text{CaO}$ y $\\text{CO}_2$ a partir de un único reactivo. Sumamos los productos $-635{,}1 + (-393{,}5)$ y restamos el $\\text{CaCO}_3$ con $-1206{,}9$, lo que da $+178{,}3\\ \\text{kJ}$. Como restar un valor negativo lo vuelve positivo, hay que cuidar los signos en esta resta." },
          { paso: "Como $\\Delta H > 0$, el proceso absorbe calor (endotérmico).", porque: "Interpretamos el signo de $\\Delta H$ para clasificar el proceso, porque el signo indica si la reacción absorbe o libera calor. Como $\\Delta H = +178{,}3\\ \\text{kJ}$ es positivo, la reacción toma calor del entorno y es endotérmica. Esto es coherente con la descomposición térmica del carbonato, que necesita aporte de energía para ocurrir." }
        ],
        resultado: "$\\Delta H = +178{,}3\\ \\text{kJ/mol}$ (endotérmica)"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "$$\\Delta n_{\\text{gas}} = 1\\ (\\text{CO}_2) - 0 = +1$$, porque los sólidos no cuentan.", porque: "Calculamos $\\Delta n_{\\text{gas}}$ contando sólo especies gaseosas, porque los sólidos no entran en el término $\\Delta n \\times R \\times T$. El $\\text{CO}_2$ es el único gas, con $1\\ \\text{mol}$ en productos y $0$ en reactivos, así que $\\Delta n = +1$. Ese valor se usa en el paso siguiente para corregir $\\Delta H$ y obtener $\\Delta U$." },
          { paso: "$$\\Delta U = \\Delta H - \\Delta n \\times R \\times T = 178{,}3 - (1)(8{,}314 \\times 10^{-3})(298) = 178{,}3 - 2{,}48 = 175{,}8\\ \\text{kJ/mol}$$.", porque: "Despejamos $\\Delta U$ de $\\Delta H = \\Delta U + \\Delta n \\times R \\times T$, usando $R$ en $\\text{kJ/(mol} \\times \\text{K)}$ y $T = 298\\ \\text{K}$. Reemplazamos $\\Delta H = 178{,}3\\ \\text{kJ/mol}$ y $\\Delta n = 1$, y el término $8{,}314 \\times 10^{-3} \\times 298$ da $2{,}48$, por lo que $\\Delta U = 175{,}8\\ \\text{kJ/mol}$. Como $\\Delta n$ es positivo, $\\Delta U$ resulta algo menor que $\\Delta H$, y la corrección es pequeña porque sólo hay $1\\ \\text{mol}$ de gas." }
        ],
        resultado: "$\\Delta U = +175{,}8\\ \\text{kJ/mol}$"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "$$n = \\frac{5{,}00 \\times 10^{3}\\ \\text{g}}{100{,}1\\ \\text{g/mol}} = 49{,}95\\ \\text{mol}$$ de $\\text{CaCO}_3$.", porque: "Convertimos la masa a moles dividiéndola por la masa molar, porque $\\Delta H$ está tabulado por mol de reacción. Con $5{,}00 \\times 10^{3}\\ \\text{g}$ de $\\text{CaCO}_3$ y $100{,}1\\ \\text{g/mol}$ obtenemos $49{,}95\\ \\text{mol}$, es decir la cantidad de reactivo que se descompone. Este paso evita usar un valor por mol con una masa expresada en otra unidad." },
          { paso: "$q$ (a presión constante) = $$n \\times \\Delta H = 49{,}95\\ \\text{mol} \\times 178{,}3\\ \\text{kJ/mol} = 8{,}91 \\times 10^{3}\\ \\text{kJ}$$.", porque: "Calculamos el calor a presión constante como $q_p = n \\times \\Delta H$, con $n$ la cantidad de moles de $\\text{CaCO}_3$ que reaccionan. Reemplazamos $49{,}95\\ \\text{mol}$ y $178{,}3\\ \\text{kJ/mol}$, y obtenemos $8{,}91 \\times 10^{3}\\ \\text{kJ}$. Como el proceso es endotérmico, el calor es positivo: hay que suministrarlo desde el exterior, y esto vale porque el proceso ocurre a presión constante." }
        ],
        resultado: "$q = 8{,}91 \\times 10^{3}\\ \\text{kJ}$ (a $25\\ \\text{°C}$, reacción completa)"
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
          { paso: "Ecuación: $$\\text{CH}_4(\\text{g}) + 2\\ \\text{O}_2(\\text{g}) \\rightarrow \\text{CO}_2(\\text{g}) + 2\\ \\text{H}_2\\text{O}(\\text{l})$$. Es la combustión completa del metano con agua líquida como producto.", porque: "Escribimos la ecuación de combustión completa del metano con agua líquida, porque la entalpía de combustión se define sobre una ecuación balanceada. Antes de calcular conviene verificar el balance: hay $1\\ \\text{C}$, $4\\ \\text{H}$ y $4\\ \\text{O}$ en ambos lados de la flecha. Un balance correcto garantiza que los coeficientes que usemos después en $\\Delta H_r$ sean los que corresponden." },
          { paso: "$$\\Delta H_c = [-393{,}5 + 2 \\times (-285{,}8)] - [-74{,}8 + 2 \\times 0] = -965{,}1 + 74{,}8 = -890{,}3\\ \\text{kJ/mol}$$.", porque: "Aplicamos $\\Delta H_r$ como la suma de $n \\times \\Delta H_f$ de los productos menos la de los reactivos, porque así se obtiene la entalpía de combustión. Con $\\text{CO}_2$ en $-393{,}5\\ \\text{kJ/mol}$, $2\\ \\text{H}_2\\text{O}(\\text{l})$ en $-285{,}8\\ \\text{kJ/mol}$, $\\text{CH}_4$ en $-74{,}8\\ \\text{kJ/mol}$ y $\\text{O}_2$ en cero, el resultado es $-890{,}3\\ \\text{kJ/mol}$. Este valor es el que después relaciona la masa de metano con la energía liberada." }
        ],
        resultado: "$\\Delta H_c = -890{,}3\\ \\text{kJ/mol}$ de $\\text{CH}_4$ ($\\text{H}_2\\text{O}$ líquida)"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Masa de agua: $150\\ \\text{L} = 1{,}50 \\times 10^{5}\\ \\text{cm}^3$; $$m = 1{,}50 \\times 10^{5}\\ \\text{cm}^3 \\times 1{,}00\\ \\text{g/cm}^3 = 1{,}50 \\times 10^{5}\\ \\text{g}$$.", porque: "Pasamos el volumen a masa con la densidad, porque el calor depende de la masa de agua y no del volumen. Como $150\\ \\text{L}$ equivalen a $1{,}50 \\times 10^{5}\\ \\text{cm}^3$ y la densidad es $1{,}00\\ \\text{g/cm}^3$, la masa es $1{,}50 \\times 10^{5}\\ \\text{g}$. Verificá que el valor tenga sentido para esa cantidad de agua, porque el paso siguiente usa esta masa." },
          { paso: "Calor útil: $$Q_{\\text{útil}} = m \\times c \\times \\Delta T = 1{,}50 \\times 10^{5}\\ \\text{g} \\times 4{,}18\\ \\frac{\\text{J}}{\\text{g} \\times \\text{K}} \\times 30{,}0\\ \\text{K} = 1{,}88 \\times 10^{7}\\ \\text{J} = 18\\,810\\ \\text{kJ}$$.", porque: "Calculamos el calor útil con $Q_{\\text{útil}} = m \\times c \\times \\Delta T$, porque el agua sólo cambia de temperatura sin cambio de fase. Reemplazamos $m = 1{,}50 \\times 10^{5}\\ \\text{g}$, $c = 4{,}18\\ \\frac{\\text{J}}{\\text{g} \\times \\text{K}}$ y $\\Delta T = 30{,}0\\ \\text{K}$, y obtenemos $1{,}88 \\times 10^{7}\\ \\text{J}$, es decir $18\\,810\\ \\text{kJ}$. Este valor es la energía que debe llegar al agua, no la que libera la combustión." },
          { paso: "Calor de combustión necesario: $$Q_{\\text{comb}} = \\frac{Q_{\\text{útil}}}{0{,}65} = 28\\,940\\ \\text{kJ}$$.", porque: "Aplicamos la definición de rendimiento térmico, $\\text{rendimiento} = \\frac{Q_{\\text{útil}}}{Q_{\\text{combustión}}}$, porque el equipo no aprovecha toda la energía quemada. Despejamos $Q_{\\text{combustión}} = \\frac{Q_{\\text{útil}}}{0{,}65}$, con $18\\,810\\ \\text{kJ}$ y $0{,}65$, lo que da $28\\,940\\ \\text{kJ}$. Como el rendimiento es menor que $1$, la combustión debe generar más calor que el útil, y el error típico es multiplicar por $0{,}65$ en vez de dividir." },
          { paso: "$$n(\\text{CH}_4) = \\frac{28\\,940\\ \\text{kJ}}{890{,}3\\ \\text{kJ/mol}} = 32{,}50\\ \\text{mol}$$; $m = 32{,}50\\ \\text{mol} \\times 16{,}0\\ \\text{g/mol} = 520\\ \\text{g}$ de $\\text{CH}_4$.", porque: "Calculamos la cantidad de metano como $n = \\frac{Q_{\\text{combustión}}}{|\\Delta H_c|}$, porque cada mol de $\\text{CH}_4$ libera $890{,}3\\ \\text{kJ}$ en la combustión completa. Con $28\\,940\\ \\text{kJ}$ y $890{,}3\\ \\text{kJ/mol}$ obtenemos $32{,}50\\ \\text{mol}$, y luego $m = n \\times M$ con $16{,}0\\ \\text{g/mol}$ da $520\\ \\text{g}$ de $\\text{CH}_4$. Usamos el valor con agua líquida, que es el que corresponde a la ecuación balanceada." }
        ],
        resultado: "$m(\\text{CH}_4) = 520\\ \\text{g}$ ($0{,}52\\ \\text{kg}$) de metano"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "Por la relación $1:1$ de la ecuación, $n(\\text{CO}_2) = n(\\text{CH}_4) = 32{,}50\\ \\text{mol}$.", porque: "Usamos la estequiometría de la ecuación, porque los coeficientes fijan la proporción entre moles de $\\text{CO}_2$ y $\\text{CH}_4$. Como $1\\ \\text{mol}$ de $\\text{CH}_4$ produce $1\\ \\text{mol}$ de $\\text{CO}_2$, la cantidad de $\\text{CO}_2$ es igual a la de $\\text{CH}_4$, es decir $32{,}50\\ \\text{mol}$. Son los coeficientes, y no las masas, los que definen esta relación." },
          { paso: "$$V = \\frac{nRT}{P} = \\frac{32{,}50\\ \\text{mol} \\times 0{,}0821\\ \\frac{\\text{L} \\times \\text{atm}}{\\text{mol} \\times \\text{K}} \\times 273\\ \\text{K}}{1\\ \\text{atm}} = 728\\ \\text{L}$$.", porque: "Aplicamos la ecuación de gases ideales $V = \\frac{nRT}{P}$, porque el $\\text{CO}_2$ se trata como gas a $273\\ \\text{K}$ y $1\\ \\text{atm}$. Reemplazamos $n = 32{,}50\\ \\text{mol}$, $R = 0{,}0821\\ \\frac{\\text{L} \\times \\text{atm}}{\\text{mol} \\times \\text{K}}$, $T = 273\\ \\text{K}$ y $P = 1\\ \\text{atm}$, y obtenemos $728\\ \\text{L}$. Verificamos que $\\text{atm}$ y $\\text{K}$ se cancelen y que el resultado quede en $\\text{L}$." }
        ],
        resultado: "$V(\\text{CO}_2) = 728\\ \\text{L}$ en CNPT"
      },
      {
        parte: "d)",
        pasos: [
          { paso: "Supuesto: el agua de los humos queda como vapor (no condensa). $$\\Delta H_c = [-393{,}5 + 2 \\times (-241{,}8)] - [-74{,}8] = -802{,}3\\ \\text{kJ/mol}$$.", porque: "Recalculamos $\\Delta H_c$ con $\\text{H}_2\\text{O}(\\text{g})$ como producto, porque el agua de los humos no condensa y se usa el poder calorífico inferior. El procedimiento es el mismo de $\\Delta H_r$, cambiando sólo el dato del agua: con $2 \\times (-241{,}8)$, el resultado es $-802{,}3\\ \\text{kJ/mol}$. La diferencia con el valor del agua líquida es el calor de condensación, que aquí no se aprovecha." },
          { paso: "Energía útil con PCI: $$0{,}65 \\times 32{,}50\\ \\text{mol} \\times 802{,}3\\ \\text{kJ/mol} = 16\\,950\\ \\text{kJ}$$, frente a los $18\\,810\\ \\text{kJ}$ necesarios.", porque: "Comparamos la energía útil que llega al agua con la energía necesaria, porque así sabemos si el equipo alcanza. Con $0{,}65 \\times 32{,}50\\ \\text{mol} \\times 802{,}3\\ \\text{kJ/mol}$ obtenemos $16\\,950\\ \\text{kJ}$, y eso se compara con los $18\\,810\\ \\text{kJ}$ necesarios. Calcular sólo la energía teórica no alcanza para responder, porque lo que decide es la energía disponible frente a la requerida." },
          { paso: "Como $16\\,950 < 18\\,810$, no alcanza: falta cerca del $10\\%$.", porque: "Interpretamos la diferencia entre $16\\,950\\ \\text{kJ}$ disponibles y $18\\,810\\ \\text{kJ}$ necesarios, porque de ella depende la conclusión sobre el equipo. Como hay un déficit de alrededor del $10\\%$, el equipo no alcanza para calentar el agua en esas condiciones. Para dimensionarlo conviene usar el valor de combustión que corresponde a los humos reales: si el agua condensa se aprovecha el PCS, pero con vapor en los humos no." }
        ],
        resultado: "No alcanza: con PCI se aportan unos $16\\,950\\ \\text{kJ}$ frente a $18\\,810\\ \\text{kJ}$ necesarios"
      }
    ],
    errores_tipicos: [
      { error: "Aplicar el rendimiento al revés: multiplicar por 0,65 en lugar de dividir, y así subestimar la masa de metano.", como_evitar: "El calor de combustión debe ser mayor que el útil: Q_comb = Q_útil / rendimiento." },
      { error: "Usar 150 L directamente como masa de agua o usar 150 000 g sin verificar la densidad.", como_evitar: "Pasá el volumen a cm^3 o mL, multiplicá por la densidad y confirmá que la masa tenga sentido." },
      { error: "Tomar el PCI para dimensionar el termotanque sin revisar si el agua de los humos condensa.", como_evitar: "Según el valor de Delta H que uses (con agua líquida o gaseosa), la energía disponible cambia. Compará siempre con lo que se necesita." }
    ]
  }
];
