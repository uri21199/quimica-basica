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
          { paso: "Presión en atm: $$P = \\frac{750\\ \\text{mmHg}}{760\\ \\text{mmHg/atm}} = 0{,}987\\ \\text{atm}$$", porque: "Como la constante $R = 0{,}0821\\ \\frac{\\text{L}\\cdot\\text{atm}}{\\text{mol}\\cdot\\text{K}}$ trabaja con presiones en atm, dividimos $750\\ \\text{mmHg}$ por $760\\ \\text{mmHg/atm}$ para expresar la presión en esa unidad. Con esa conversión obtenemos $P = 0{,}987\\ \\text{atm}$. Así la unidad de $P$ queda coherente con $R$, y el cálculo de moles no sale distorsionado." },
          { paso: "Temperatura en K: $$T = 20{,}0 + 273{,}15 = 293{,}15\\ \\text{K}$$", porque: "Usamos la escala absoluta porque la ecuación $PV = nRT$ requiere kelvin, así que sumamos $273{,}15$ a los $20{,}0\\ ^\\circ\\text{C}$. Con eso llegamos a $T = 293{,}15\\ \\text{K}$. Como el gas responde a la temperatura absoluta, este valor es el que entra en el cálculo de moles." },
          { paso: "Moles: $$n = \\frac{P \\cdot V}{R \\cdot T} = \\frac{0{,}987\\ \\text{atm} \\times 5{,}00\\ \\text{L}}{0{,}0821\\ \\frac{\\text{L}\\cdot\\text{atm}}{\\text{mol}\\cdot\\text{K}} \\times 293{,}15\\ \\text{K}} = 0{,}205\\ \\text{mol}$$", porque: "Despejamos $n$ dividiendo ambos lados de $PV = nRT$ por $R \\cdot T$, lo que da $n = \\frac{P \\cdot V}{R \\cdot T}$. Reemplazamos $P = 0{,}987\\ \\text{atm}$, $V = 5{,}00\\ \\text{L}$, $R = 0{,}0821\\ \\frac{\\text{L}\\cdot\\text{atm}}{\\text{mol}\\cdot\\text{K}}$ y $T = 293{,}15\\ \\text{K}$, y obtenemos $0{,}205\\ \\text{mol}$ de $\\text{N}_2$. Entonces tenemos la cantidad de gas del recipiente, y con ese valor pasamos a masa." },
          { paso: "Masa: $$m = n \\times M = 0{,}205\\ \\text{mol} \\times 28{,}0\\ \\text{g/mol} = 5{,}74\\ \\text{g}$$", porque: "Multiplicamos los moles por la masa molar del $\\text{N}_2$, $28{,}0\\ \\text{g/mol}$, porque ese valor indica cuántos gramos tiene un mol de esa sustancia. Con $0{,}205\\ \\text{mol}$ se obtienen $5{,}74\\ \\text{g}$. Como el resultado queda en gramos y es coherente con la cantidad de gas calculada, es la masa pedida." }
        ],
        resultado: "$m(\\text{N}_2) = 5{,}74\\ \\text{g}$"
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
          { paso: "Temperaturas en K: $T_1 = 27{,}0 + 273{,}15 = 300{,}15\\ \\text{K}$; $T_2 = 80{,}0 + 273{,}15 = 353{,}15\\ \\text{K}$.", porque: "Pasamos ambas temperaturas a kelvin sumando $273{,}15$, porque las leyes de los gases relacionan volumen, presión y temperatura absoluta. Con $27{,}0\\ ^\\circ\\text{C}$ obtenemos $T_1 = 300{,}15\\ \\text{K}$, y con $80{,}0\\ ^\\circ\\text{C}$ obtenemos $T_2 = 353{,}15\\ \\text{K}$. Entonces el cociente $T_2/T_1$ que usaremos después tiene sentido físico." },
          { paso: "Como $n$ no cambia, se usa la ley combinada: $\\frac{P_1 \\cdot V_1}{T_1} = \\frac{P_2 \\cdot V_2}{T_2}$, de donde $P_2 = \\frac{P_1 \\cdot V_1 \\cdot T_2}{V_2 \\cdot T_1}$.", porque: "Como no hay pérdida de gas, la cantidad de helio se mantiene y $\\frac{P \\cdot V}{T}$ queda constante entre los dos estados. Usamos la ley combinada, que reúne las relaciones de Boyle y Gay-Lussac. Al despejar obtenemos $P_2 = \\frac{P_1 \\cdot V_1 \\cdot T_2}{V_2 \\cdot T_1}$, y con esa expresión reemplazamos los datos del problema." },
          { paso: "$$P_2 = \\frac{1{,}00\\ \\text{atm} \\times 2{,}50\\ \\text{L} \\times 353{,}15\\ \\text{K}}{1{,}20\\ \\text{L} \\times 300{,}15\\ \\text{K}} = 2{,}45\\ \\text{atm}$$", porque: "Reemplazamos $P_1 = 1{,}00\\ \\text{atm}$, $V_1 = 2{,}50\\ \\text{L}$, $T_2 = 353{,}15\\ \\text{K}$, $V_2 = 1{,}20\\ \\text{L}$ y $T_1 = 300{,}15\\ \\text{K}$ en la expresión despejada, y obtenemos $P_2 = 2{,}45\\ \\text{atm}$. Dado que el volumen baja al comprimir y la temperatura sube, la presión final debe ser mayor que $1{,}00\\ \\text{atm}$, y el resultado cumple esa coherencia." }
        ],
        resultado: "$P_2 = 2{,}45\\ \\text{atm}$"
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
          { paso: "Masa molar: $$M(\\text{CO}_2) = 12{,}0 + 2 \\times 16{,}0 = 44{,}0\\ \\text{g/mol}$$", porque: "Calculamos la masa molar sumando las masas atómicas de un C ($12{,}0$) y de dos O ($16{,}0$ cada uno), según la fórmula $\\text{CO}_2$. Con esa suma obtenemos $44{,}0\\ \\text{g/mol}$, que indica cuántos gramos tiene un mol de $\\text{CO}_2$. Este valor es el factor que nos permite pasar los $8{,}50\\ \\text{g}$ dados a moles." },
          { paso: "Moles: $$n = \\frac{m}{M} = \\frac{8{,}50\\ \\text{g}}{44{,}0\\ \\text{g/mol}} = 0{,}193\\ \\text{mol}$$", porque: "Dividimos la masa de $8{,}50\\ \\text{g}$ por la masa molar de $44{,}0\\ \\text{g/mol}$ para obtener los moles, porque esa relación define la cantidad de sustancia. Con estos números resulta $n = 0{,}193\\ \\text{mol}$ de $\\text{CO}_2$. Entonces ya tenemos la cantidad de gas que se usa para calcular el volumen." },
          { paso: "En CNPT ($273{,}15\\ \\text{K}$ y $1\\ \\text{atm}$), $1\\ \\text{mol}$ de gas ideal ocupa $22{,}4\\ \\text{L}$.", porque: "Usamos el volumen molar de un gas ideal en CNPT, que es $22{,}4\\ \\text{L}$ por mol. Este valor sale de $PV = nRT$ con $P = 1\\ \\text{atm}$ y $T = 273{,}15\\ \\text{K}$, y es el mismo para todos los gases ideales. Por eso lo aplicamos al $\\text{CO}_2$, siempre que estemos en CNPT." },
          { paso: "$$V = 0{,}193\\ \\text{mol} \\times 22{,}4\\ \\text{L/mol} = 4{,}33\\ \\text{L}$$", porque: "Multiplicamos los $0{,}193\\ \\text{mol}$ por $22{,}4\\ \\text{L/mol}$, porque en CNPT el volumen es proporcional a la cantidad de sustancia. Así obtenemos $V = 4{,}33\\ \\text{L}$. Como un mol ocupa $22{,}4\\ \\text{L}$, el resultado es coherente, ya que menos de un mol de gas debe ocupar menos de ese volumen." }
        ],
        resultado: "$V(\\text{CO}_2) = 4{,}33\\ \\text{L}$ en CNPT"
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
          { paso: "La densidad es $d = \\frac{m}{V} = \\frac{n \\cdot M}{V}$, y como $\\frac{n}{V} = \\frac{P}{R \\cdot T}$, resulta: $$d = \\frac{P \\cdot M}{R \\cdot T}$$", porque: "Partimos de $d = \\frac{m}{V}$ y escribimos $m = n \\cdot M$, así que $d = \\frac{n \\cdot M}{V}$. Como $\\frac{n}{V} = \\frac{P}{R \\cdot T}$ por la ecuación de gas ideal, reemplazamos y obtenemos $d = \\frac{P \\cdot M}{R \\cdot T}$. Esta expresión relaciona la densidad con la masa molar y permite despejar $M$ a partir de la densidad medida." },
          { paso: "Se despeja: $$M = \\frac{d \\cdot R \\cdot T}{P} = \\frac{1{,}25\\ \\text{g/L} \\times 0{,}0821\\ \\frac{\\text{L}\\cdot\\text{atm}}{\\text{mol}\\cdot\\text{K}} \\times 273{,}15\\ \\text{K}}{1{,}00\\ \\text{atm}} = 28{,}0\\ \\text{g/mol}$$", porque: "Despejamos $M$ multiplicando por $R \\cdot T$ y dividiendo por $P$, y luego reemplazamos $d = 1{,}25\\ \\text{g/L}$, $R = 0{,}0821\\ \\frac{\\text{L}\\cdot\\text{atm}}{\\text{mol}\\cdot\\text{K}}$, $T = 273{,}15\\ \\text{K}$ y $P = 1{,}00\\ \\text{atm}$. Con esos valores obtenemos $M = 28{,}0\\ \\text{g/mol}$. Como en CNPT la presión y la temperatura son conocidas, la densidad en $\\text{g/L}$ nos da la masa molar directamente en $\\text{g/mol}$." },
          { paso: "Se comparan masas molares: $\\text{N}_2$ y $\\text{CO} = 28{,}0\\ \\text{g/mol}$; $\\text{O}_2 = 32{,}0\\ \\text{g/mol}$; $\\text{CH}_4 = 16{,}0\\ \\text{g/mol}$.", porque: "Comparamos la masa molar obtenida, $28{,}0\\ \\text{g/mol}$, con las de los gases de la lista. El $\\text{N}_2$ y el $\\text{CO}$ coinciden con ese valor, mientras que el $\\text{O}_2$ ($32{,}0$) y el $\\text{CH}_4$ ($16{,}0$) no. Entonces quedan dos candidatos posibles: $\\text{N}_2$ y $\\text{CO}$." },
          { paso: "Con sólo la densidad no se distingue $\\text{N}_2$ de $\\text{CO}$, porque tienen la misma masa molar.", porque: "Dado que la densidad de un gas en condiciones fijas depende sólo de su masa molar, dos gases con igual $M$ tienen igual densidad. Por eso con sólo este dato no podemos distinguir $\\text{N}_2$ de $\\text{CO}$. Conviene aclarar esta limitación, y recurrir a otra información, como un análisis químico o un espectro, para decidir." }
        ],
        resultado: "$M = 28{,}0\\ \\text{g/mol}$; podría ser $\\text{N}_2$ o $\\text{CO}$"
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
          { paso: "Temperatura: $T = 27{,}0 + 273{,}15 = 300{,}15\\ \\text{K}$. Moles totales: $n = 0{,}40 + 1{,}60 = 2{,}00\\ \\text{mol}$.", porque: "Sumamos $273{,}15$ a los $27{,}0\\ ^\\circ\\text{C}$ para expresar la temperatura en kelvin, porque la ecuación de estado trabaja en escala absoluta. Así obtenemos $T = 300{,}15\\ \\text{K}$. Además sumamos los moles de ambos gases, $0{,}40\\ \\text{mol}$ de $\\text{O}_2$ y $1{,}60\\ \\text{mol}$ de $\\text{Ar}$, para obtener $n = 2{,}00\\ \\text{mol}$, porque la ecuación se aplica a la mezcla completa." },
          { paso: "Presión total: $$P = \\frac{n \\cdot R \\cdot T}{V} = \\frac{2{,}00 \\times 0{,}0821 \\times 300{,}15}{10{,}0} = 4{,}93\\ \\text{atm}$$", porque: "Aplicamos $P = \\frac{n \\cdot R \\cdot T}{V}$ con los moles totales, el volumen de $10{,}0\\ \\text{L}$ y $T = 300{,}15\\ \\text{K}$, porque la presión de la mezcla depende de la cantidad total de gas. Reemplazando obtenemos $P = 4{,}93\\ \\text{atm}$. Como todos los gases ocupan el mismo recipiente, $V$ no se reparte entre ellos, y $4{,}93\\ \\text{atm}$ es la presión total del sistema." },
          { paso: "Fracción molar del $\\text{O}_2$: $$x(\\text{O}_2) = \\frac{0{,}40}{2{,}00} = 0{,}20$$", porque: "Calculamos la fracción molar dividiendo los $0{,}40\\ \\text{mol}$ de $\\text{O}_2$ por los $2{,}00\\ \\text{mol}$ totales, porque esa relación indica qué parte de la mezcla es $\\text{O}_2$. Con estos datos resulta $x(\\text{O}_2) = 0{,}20$. Como es un cociente sin unidades, este valor es el que usamos para repartir la presión total entre los gases." },
          { paso: "Presión parcial: $$P(\\text{O}_2) = x(\\text{O}_2) \\times P_{\\text{total}} = 0{,}20 \\times 4{,}93\\ \\text{atm} = 0{,}986\\ \\text{atm}$$", porque: "Según la ley de Dalton, la presión parcial de un gas es su fracción molar por la presión total, ya que cada componente aporta en proporción a sus moles. Usamos $x(\\text{O}_2) = 0{,}20$ y $P_{\\text{total}} = 4{,}93\\ \\text{atm}$ para calcular $P(\\text{O}_2) = 0{,}986\\ \\text{atm}$. Como control, la suma de las presiones parciales de ambos gases debe dar $4{,}93\\ \\text{atm}$." }
        ],
        resultado: "$P_{\\text{total}} = 4{,}93\\ \\text{atm}$; $P(\\text{O}_2) = 0{,}986\\ \\text{atm}$"
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
          { paso: "Relación molar según la ecuación balanceada: $1\\ \\text{mol}$ de $\\text{Zn}$ produce $1\\ \\text{mol}$ de $\\text{H}_2$.", porque: "Tomamos la relación de la ecuación balanceada $\\text{Zn} + 2\\ \\text{HCl} \\rightarrow \\text{ZnCl}_2 + \\text{H}_2$, en la que el $\\text{Zn}$ y el $\\text{H}_2$ tienen coeficiente $1$. Como la relación es $1:1$, podemos pasar directamente de moles de $\\text{Zn}$ a moles de $\\text{H}_2$ sin calcular la masa del gas. Por eso conviene verificar los coeficientes antes de aplicar la relación." },
          { paso: "$$n(\\text{Zn}) = \\frac{5{,}00\\ \\text{g}}{65{,}4\\ \\text{g/mol}} = 0{,}0765\\ \\text{mol}$$ por lo tanto $n(\\text{H}_2) = 0{,}0765\\ \\text{mol}$.", porque: "Como la reacción es completa, todo el $\\text{Zn}$ se transforma y sus moles pasan íntegros al $\\text{H}_2$. Dividimos los $5{,}00\\ \\text{g}$ por la masa molar $65{,}4\\ \\text{g/mol}$ para obtener $n(\\text{Zn}) = 0{,}0765\\ \\text{mol}$. Aplicando la relación $1:1$, resulta $n(\\text{H}_2) = 0{,}0765\\ \\text{mol}$, que es el dato que necesitamos para la presión." },
          { paso: "$T = 25{,}0 + 273{,}15 = 298{,}15\\ \\text{K}$. Presión: $$P = \\frac{n \\cdot R \\cdot T}{V} = \\frac{0{,}0765 \\times 0{,}0821 \\times 298{,}15}{2{,}00} = 0{,}936\\ \\text{atm}$$", porque: "Usamos $P = \\frac{n \\cdot R \\cdot T}{V}$ porque el gas está en un recipiente de volumen fijo, y la temperatura debe estar en kelvin, por eso sumamos $273{,}15$ a los $25{,}0\\ ^\\circ\\text{C}$. Reemplazamos $n = 0{,}0765\\ \\text{mol}$, $R = 0{,}0821$, $T = 298{,}15\\ \\text{K}$ y $V = 2{,}00\\ \\text{L}$. Así obtenemos $P(\\text{H}_2) = 0{,}936\\ \\text{atm}$, la presión del gas en el recipiente." }
        ],
        resultado: "$P(\\text{H}_2) = 0{,}936\\ \\text{atm}$"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Presión parcial del $\\text{H}_2$ en el gas húmedo: $P(\\text{H}_2) = P_{\\text{total}} - P(\\text{H}_2\\text{O}) = 1{,}00\\ \\text{atm} - \\frac{23{,}8}{760}\\ \\text{atm} = 0{,}969\\ \\text{atm}$.", porque: "Como el gas se recoge sobre agua, la mezcla contiene $\\text{H}_2$ y vapor de agua. Por Dalton, la presión total es la suma de ambas presiones, así que restamos la presión de vapor de $23{,}8\\ \\text{mmHg}$ a $1{,}00\\ \\text{atm}$. Pasamos $23{,}8\\ \\text{mmHg}$ a atm dividiendo por $760$ para que la resta sea consistente, y obtenemos $P(\\text{H}_2) = 0{,}969\\ \\text{atm}$." },
          { paso: "Volumen: $$V = \\frac{n(\\text{H}_2) \\cdot R \\cdot T}{P(\\text{H}_2)} = \\frac{0{,}0765 \\times 0{,}0821 \\times 298{,}15}{0{,}969} = 1{,}93\\ \\text{L}$$", porque: "Despejamos $V = \\frac{n \\cdot R \\cdot T}{P}$ usando los mismos $0{,}0765\\ \\text{mol}$ de $\\text{H}_2$, $T = 298{,}15\\ \\text{K}$ y la presión parcial $P(\\text{H}_2) = 0{,}969\\ \\text{atm}$. Los moles no cambian porque es la misma reacción, pero el volumen sí cambia porque el gas ahora se recoge sobre agua. Con estos datos obtenemos $V = 1{,}93\\ \\text{L}$, y usar la presión parcial en lugar de la total es lo que corrige el volumen." }
        ],
        resultado: "$V(\\text{mezcla}) = 1{,}93\\ \\text{L}$ (con $P(\\text{H}_2) = 0{,}969\\ \\text{atm}$)"
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
          { paso: "Moles totales: $$n = \\frac{P \\cdot V}{R \\cdot T} = \\frac{1{,}50 \\times 4{,}00}{0{,}0821 \\times 300{,}15} = 0{,}2435\\ \\text{mol}$$", porque: "Usamos $PV = nRT$ para obtener los moles totales de la mezcla, porque la tratamos como gas ideal en un volumen conocido. Reemplazamos $P = 1{,}50\\ \\text{atm}$, $V = 4{,}00\\ \\text{L}$, $R = 0{,}0821$ y $T = 300{,}15\\ \\text{K}$. Así resulta $n = 0{,}2435\\ \\text{mol}$, que es el punto de partida para plantear el sistema de ecuaciones." },
          { paso: "Plantear dos ecuaciones: $n(\\text{CH}_4) + n(\\text{C}_2\\text{H}_6) = 0{,}2435\\ \\text{mol}$ y $16{,}0\\ n(\\text{CH}_4) + 30{,}1\\ n(\\text{C}_2\\text{H}_6) = 6{,}00\\ \\text{g}$.", porque: "Como hay dos componentes desconocidos, necesitamos dos ecuaciones independientes: una de moles, con la suma de ambos gases, y otra de masas, con $n \\cdot M$ de cada uno. Con $0{,}2435\\ \\text{mol}$ totales y $6{,}00\\ \\text{g}$ de masa, el sistema queda planteado. Las masas molares $16{,}0$ y $30{,}1\\ \\text{g/mol}$ corresponden a $\\text{CH}_4$ y $\\text{C}_2\\text{H}_6$." },
          { paso: "Resolviendo: $$n(\\text{C}_2\\text{H}_6) = \\frac{6{,}00 - 16{,}0 \\times 0{,}2435}{30{,}1 - 16{,}0} = 0{,}149\\ \\text{mol}$$; $n(\\text{CH}_4) = 0{,}2435 - 0{,}149 = 0{,}0942\\ \\text{mol}$.", porque: "Usamos el método de sustitución: despejamos una incógnita de la ecuación de moles y la reemplazamos en la de masas. Así obtenemos $n(\\text{C}_2\\text{H}_6) = 0{,}149\\ \\text{mol}$, y con la suma de moles calculamos $n(\\text{CH}_4) = 0{,}0942\\ \\text{mol}$. Conviene reemplazar estos valores en la ecuación original para comprobar que la masa total da $6{,}00\\ \\text{g}$." },
          { paso: "Fracción molar: $$x(\\text{CH}_4) = \\frac{0{,}0942}{0{,}2435} = 0{,}387$$", porque: "Calculamos la fracción molar dividiendo los $0{,}0942\\ \\text{mol}$ de $\\text{CH}_4$ por los $0{,}2435\\ \\text{mol}$ totales, porque expresa la proporción de ese gas en la mezcla. Con estos datos resulta $x(\\text{CH}_4) = 0{,}387$. Como es una fracción, su valor debe estar entre $0$ y $1$, y este resultado lo cumple." }
        ],
        resultado: "$n(\\text{CH}_4) = 0{,}0942\\ \\text{mol}$; $n(\\text{C}_2\\text{H}_6) = 0{,}149\\ \\text{mol}$; $x(\\text{CH}_4) = 0{,}387$"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Moles de carbono: $1 \\times n(\\text{CH}_4) + 2 \\times n(\\text{C}_2\\text{H}_6) = 0{,}0942 + 2 \\times 0{,}149 = 0{,}392\\ \\text{mol de C}$.", porque: "Contamos los átomos de carbono de cada gas multiplicando sus moles por la cantidad de C de su fórmula: el $\\text{CH}_4$ aporta $1$ C y el $\\text{C}_2\\text{H}_6$ aporta $2$. Por eso usamos los moles de cada gas por separado, en una suma ponderada. Entonces el resultado es el total de moles de C del recipiente, y no el total de moles de gas." },
          { paso: "Átomos: $$0{,}393\\ \\text{mol} \\times 6{,}022 \\times 10^{23}\\ \\text{átomos/mol} = 2{,}36 \\times 10^{23}\\ \\text{átomos de C}$$", porque: "El número de Avogadro, $6{,}022 \\times 10^{23}$, convierte moles de átomos en cantidad de átomos, porque un mol contiene esa cantidad de partículas. Multiplicamos los moles de C por ese número para obtener la cantidad de átomos. Así resulta $2{,}36 \\times 10^{23}$ átomos de C, y la unidad final queda en átomos como se pide." }
        ],
        resultado: "$2{,}36 \\times 10^{23}$ átomos de C"
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
          { paso: "$n(\\text{Al}) = \\frac{2{,}00\\ \\text{g}}{26{,}98\\ \\text{g/mol}} = 0{,}0741\\ \\text{mol}$. $n(\\text{HCl}) = 0{,}100\\ \\text{L} \\times 3{,}00\\ \\text{mol/L} = 0{,}300\\ \\text{mol}$.", porque: "Pasamos la masa de $\\text{Al}$ a moles con su masa molar, $26{,}98\\ \\text{g/mol}$, y el volumen de $\\text{HCl}$ a moles con la molaridad, porque la comparación de reactivos se hace en moles. Con $2{,}00\\ \\text{g}$ de $\\text{Al}$ obtenemos $0{,}0741\\ \\text{mol}$, y con $0{,}100\\ \\text{L}$ de $\\text{HCl}$ a $3{,}00\\ \\text{mol/L}$ obtenemos $0{,}300\\ \\text{mol}$. Así ambos datos quedan en la misma unidad, y no comparamos gramos con litros." },
          { paso: "La ecuación pide $6$ mol de $\\text{HCl}$ cada $2$ mol de $\\text{Al}$, es decir $3$ mol de $\\text{HCl}$ por mol de $\\text{Al}$. Para $0{,}0741\\ \\text{mol}$ de $\\text{Al}$ hacen falta $0{,}222\\ \\text{mol}$ de $\\text{HCl}$.", porque: "Usamos la relación de la ecuación balanceada: $6$ mol de $\\text{HCl}$ por cada $2$ mol de $\\text{Al}$, es decir $3$ mol de $\\text{HCl}$ por mol de $\\text{Al}$. Para los $0{,}0741\\ \\text{mol}$ de $\\text{Al}$ multiplicamos por $3$ y obtenemos $0{,}222\\ \\text{mol}$ de $\\text{HCl}$ necesarios. Esa cantidad nos permite saber si el $\\text{HCl}$ alcanza para consumir todo el aluminio." },
          { paso: "Como hay $0{,}300\\ \\text{mol}$ de $\\text{HCl}$ disponibles y se necesitan $0{,}222\\ \\text{mol}$, el $\\text{HCl}$ está en exceso y el limitante es el $\\text{Al}$.", porque: "Comparamos los $0{,}300\\ \\text{mol}$ de $\\text{HCl}$ disponibles con los $0{,}222\\ \\text{mol}$ que se necesitan para consumir todo el $\\text{Al}$. Como sobra $\\text{HCl}$, el $\\text{Al}$ se agota primero, y por eso el $\\text{Al}$ es el reactivo limitante. El reactivo que se agota primero determina la cantidad máxima de producto que puede formarse." },
          { paso: "$$n(\\text{H}_2) = \\frac{3}{2} \\times n(\\text{Al}) = 1{,}5 \\times 0{,}0741 = 0{,}111\\ \\text{mol}$$", porque: "Aplicamos la relación $\\frac{3}{2}$ entre $\\text{H}_2$ y $\\text{Al}$ de la ecuación balanceada, partiendo del reactivo limitante. Con $n(\\text{Al}) = 0{,}0741\\ \\text{mol}$ obtenemos $n(\\text{H}_2) = 0{,}111\\ \\text{mol}$. Como la cantidad de producto depende sólo del limitante, este valor es el que usamos en la parte b)." }
        ],
        resultado: "Limitante: $\\text{Al}$; $n(\\text{H}_2) = 0{,}111\\ \\text{mol}$"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "$T = 20{,}0 + 273{,}15 = 293{,}15\\ \\text{K}$.", porque: "Pasamos $20{,}0\\ ^\\circ\\text{C}$ a kelvin sumando $273{,}15$, porque la ecuación de gas ideal requiere temperatura absoluta. Así obtenemos $T = 293{,}15\\ \\text{K}$. Es el mismo criterio que usamos en los ejercicios anteriores, y conviene hacerlo antes de cualquier cálculo." },
          { paso: "Se usa $V = 5{,}00\\ \\text{L}$, el volumen del recipiente, porque el $\\text{H}_2$ se distribuye en todo el recipiente.", porque: "El volumen que entra en $PV = nRT$ es el del gas, y como el $\\text{H}_2$ se distribuye en todo el recipiente, usamos $V = 5{,}00\\ \\text{L}$. El volumen de la solución de $\\text{HCl}$ no es el del gas, por eso no usamos $0{,}100\\ \\text{L}$. Este criterio vale siempre que el gas se recoge en un recipiente." },
          { paso: "$$P(\\text{H}_2) = \\frac{n \\cdot R \\cdot T}{V} = \\frac{0{,}111 \\times 0{,}0821 \\times 293{,}15}{5{,}00} = 0{,}535\\ \\text{atm}$$", porque: "Despejamos $P$ de $PV = nRT$ usando los $0{,}111\\ \\text{mol}$ de $\\text{H}_2$ de la parte a), $V = 5{,}00\\ \\text{L}$ y $T = 293{,}15\\ \\text{K}$. Reemplazando obtenemos $P(\\text{H}_2) = 0{,}535\\ \\text{atm}$, que es la presión que ejercería el $\\text{H}_2$ en esas condiciones. Como control, $0{,}111\\ \\text{mol}$ en $5{,}00\\ \\text{L}$ debe dar una presión moderada, y el resultado es coherente con eso." }
        ],
        resultado: "$P(\\text{H}_2) = 0{,}535\\ \\text{atm}$"
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
          { paso: "Temperaturas en K: $T_1 = 40{,}0 + 273{,}15 = 313{,}15\\ \\text{K}$; $T_2 = 273{,}15\\ \\text{K}$ (CNPT). La presión final es $P_2 = 1{,}00\\ \\text{atm}$.", porque: "Pasamos ambas temperaturas a kelvin: $313{,}15\\ \\text{K}$ para el estado inicial y $273{,}15\\ \\text{K}$ para CNPT. Usamos la presión final de CNPT, $1{,}00\\ \\text{atm}$, y como la masa de gas no cambia, $n$ es constante. Entonces podemos aplicar la ley combinada con temperaturas absolutas." },
          { paso: "Ley combinada: $$V_2 = \\frac{P_1 \\cdot V_1 \\cdot T_2}{P_2 \\cdot T_1} = \\frac{1{,}20 \\times 2{,}40 \\times 273{,}15}{1{,}00 \\times 313{,}15} = 2{,}51\\ \\text{L}$$", porque: "Como $n$ es constante, $\\frac{P \\cdot V}{T}$ se mantiene igual entre los dos estados, así que igualamos ambos y despejamos $V_2$. Reemplazamos $P_1 = 1{,}20\\ \\text{atm}$, $V_1 = 2{,}40\\ \\text{L}$, $T_2 = 273{,}15\\ \\text{K}$, $P_2 = 1{,}00\\ \\text{atm}$ y $T_1 = 313{,}15\\ \\text{K}$, y obtenemos $V_2 = 2{,}51\\ \\text{L}$. Como la presión y la temperatura bajan a la vez, cuidamos el orden de los cocientes para que el volumen resulte coherente." }
        ],
        resultado: "$V(\\text{CNPT}) = 2{,}51\\ \\text{L}$"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "A volumen constante, $P$ es proporcional a $T$, así que $\\frac{P_1}{T_1} = \\frac{P_2}{T_2}$ con $T$ en kelvin.", porque: "A volumen constante la presión es proporcional a la temperatura absoluta, así que $\\frac{P_1}{T_1} = \\frac{P_2}{T_2}$, que es la ley de Gay-Lussac. Esta relación vale mientras $V$ y $n$ no varíen, y en este caso no varían. Por eso usamos $T$ en kelvin para que la proporción sea válida." },
          { paso: "$$T_2 = T_1 \\times \\frac{P_2}{P_1} = 313{,}15\\ \\text{K} \\times \\frac{2{,}00\\ \\text{atm}}{1{,}20\\ \\text{atm}} = 522\\ \\text{K}$$", porque: "Despejamos $T_2$ de la proporción, obteniendo $T_2 = T_1 \\times \\frac{P_2}{P_1}$. Usamos $T_1 = 313{,}15\\ \\text{K}$, $P_2 = 2{,}00\\ \\text{atm}$ y $P_1 = 1{,}20\\ \\text{atm}$, y obtenemos $T_2 = 522\\ \\text{K}$. Como el enunciado trabaja con la presión en atm, la temperatura final queda en kelvin hasta el último paso, y recién después se convierte a $^\\circ\\text{C}$." },
          { paso: "Verificación: $522\\ \\text{K} - 273{,}15 = 249\\ ^\\circ\\text{C}$, una temperatura mayor a la inicial, como corresponde a una presión que sube.", porque: "Convertimos el resultado a $^\\circ\\text{C}$ restando $273{,}15$ para comprobar si tiene sentido físico, y obtenemos $249\\ ^\\circ\\text{C}$. Como la presión sube y la temperatura también sube, el signo de la variación es el esperado, y por eso la verificación es correcta. Si la temperatura bajara al subir la presión, habría un error de método." }
        ],
        resultado: "$T_2 = 522\\ \\text{K}$ (aprox. $249\\ ^\\circ\\text{C}$)"
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
          { paso: "Volumen molar ideal: $$V_{\\text{ideal}} = \\frac{R \\cdot T}{P} = \\frac{0{,}0821 \\times 300}{200} = 0{,}1232\\ \\text{L/mol}$$", porque: "Calculamos el volumen molar ideal despejando $V$ de $PV = nRT$ para $n = 1\\ \\text{mol}$, es decir $V = \\frac{RT}{P}$. Con $R = 0{,}0821$, $T = 300\\ \\text{K}$ y $P = 200\\ \\text{atm}$ obtenemos $V_{\\text{ideal}} = 0{,}1232\\ \\text{L/mol}$. Este valor es el volumen que tendría un mol de gas ideal en esas condiciones, y sirve como referencia para comparar con el volumen real." },
          { paso: "$$Z = \\frac{V_{\\text{real}}}{V_{\\text{ideal}}} = \\frac{0{,}1100}{0{,}1232} = 0{,}893$$", porque: "El factor $Z$ es el cociente entre el volumen real y el ideal, a igual $P$ y $T$. Dividimos el volumen experimental de $0{,}1100\\ \\text{L/mol}$ por el ideal de $0{,}1232\\ \\text{L/mol}$, y obtenemos $Z = 0{,}893$. Como $Z$ vale $1$ para un gas ideal, este resultado indica cuánto se aparta el gas real del modelo." }
        ],
        resultado: "$Z = 0{,}893$"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "$Z < 1$ significa que el volumen real es menor que el ideal.", porque: "Un valor $Z$ menor que $1$ indica que el volumen real es menor que el ideal, así que el gas ocupa menos espacio del que predice el modelo. Esta lectura sale directamente del cociente $Z$ al compararlo con $1$. Como es una interpretación cualitativa, conviene dejarlo explícito en la respuesta." },
          { paso: "Eso indica que dominan las fuerzas de atracción intermolecular, que acercan las moléculas.", porque: "Como $Z < 1$ indica que el gas ocupa menos volumen, lo explicamos con fuerzas de atracción entre moléculas, que las acercan y reducen el volumen. Si dominaran las repulsiones, $Z$ sería mayor que $1$. Por eso la relación entre el signo de la desviación y el tipo de fuerza es la base de la interpretación." },
          { paso: "A menor presión las moléculas están más separadas, las atracciones pierden peso y $Z$ tiende a $1$.", porque: "Al disminuir la presión, las moléculas se separan y la interacción entre ellas se debilita, así que el gas se parece más al ideal. Las fuerzas intermoleculares dependen fuertemente de la distancia. Por eso, al bajar la presión, $Z$ tiende a $1$ y el comportamiento se acerca al de un gas ideal." }
        ],
        resultado: "$Z < 1$: predominan las atracciones; el gas se acerca al ideal al bajar la presión"
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
          { paso: "Masa pura de $\\text{KClO}_3$: $0{,}85 \\times 1{,}20\\ \\text{g} = 1{,}02\\ \\text{g}$. $M(\\text{KClO}_3) = 39{,}1 + 35{,}5 + 3 \\times 16{,}0 = 122{,}6\\ \\text{g/mol}$; $n(\\text{KClO}_3) = \\frac{1{,}02}{122{,}6} = 8{,}32 \\times 10^{-3}\\ \\text{mol}$.", porque: "La muestra es impura, así que sólo el $85\\ \\%$ de los $1{,}20\\ \\text{g}$ es $\\text{KClO}_3$, y es el único componente que produce $\\text{O}_2$. Calculamos la masa pura: $0{,}85 \\times 1{,}20\\ \\text{g} = 1{,}02\\ \\text{g}$. Con la masa molar $122{,}6\\ \\text{g/mol}$ obtenemos $n(\\text{KClO}_3) = 8{,}32 \\times 10^{-3}\\ \\text{mol}$, porque la estequiometría trabaja en moles." },
          { paso: "Por la ecuación, $2$ mol de $\\text{KClO}_3$ producen $3$ mol de $\\text{O}_2$: $n(\\text{O}_2) = \\frac{3}{2} \\times 8{,}32 \\times 10^{-3} = 1{,}25 \\times 10^{-2}\\ \\text{mol}$.", porque: "La relación $3:2$ entre $\\text{O}_2$ y $\\text{KClO}_3$ sale de los coeficientes de la ecuación balanceada, y la aplicamos a los $8{,}32 \\times 10^{-3}\\ \\text{mol}$ de $\\text{KClO}_3$. Así obtenemos $n(\\text{O}_2) = 1{,}25 \\times 10^{-2}\\ \\text{mol}$. Esto supone un rendimiento del $100\\ \\%$, como indica el enunciado, así que el resultado es el máximo posible." }
        ],
        resultado: "$n(\\text{O}_2) = 1{,}25 \\times 10^{-2}\\ \\text{mol}$"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Presión parcial del $\\text{O}_2$: $P(\\text{O}_2) = 745\\ \\text{mmHg} - 23{,}8\\ \\text{mmHg} = 721{,}2\\ \\text{mmHg} = 0{,}949\\ \\text{atm}$.", porque: "El gas se recoge sobre agua, así que la presión total de $745\\ \\text{mmHg}$ incluye el vapor de agua. Por Dalton, la presión parcial del $\\text{O}_2$ es la total menos la presión de vapor a $25{,}0\\ ^\\circ\\text{C}$. Restamos $23{,}8\\ \\text{mmHg}$ a $745\\ \\text{mmHg}$, obteniendo $721{,}2\\ \\text{mmHg}$, y lo pasamos a atm para obtener $P(\\text{O}_2) = 0{,}949\\ \\text{atm}$." },
          { paso: "$$V(\\text{O}_2) = \\frac{n \\cdot R \\cdot T}{P(\\text{O}_2)} = \\frac{1{,}25 \\times 10^{-2} \\times 0{,}0821 \\times 298{,}15}{0{,}949} = 0{,}322\\ \\text{L}$$", porque: "Despejamos $V$ de $PV = nRT$ usando la presión parcial del $\\text{O}_2$, $0{,}949\\ \\text{atm}$, y no la total. Reemplazamos $n = 1{,}25 \\times 10^{-2}\\ \\text{mol}$, $R = 0{,}0821$ y $T = 298{,}15\\ \\text{K}$, y obtenemos $V(\\text{O}_2) = 0{,}322\\ \\text{L}$. Como los moles son los de la parte a), la corrección por el vapor es lo que determina el volumen recogido." }
        ],
        resultado: "$V(\\text{O}_2) = 0{,}322\\ \\text{L}$"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "Si no se corrige, se usa $P = 745\\ \\text{mmHg} = 0{,}980\\ \\text{atm}$, y $$V = \\frac{1{,}25 \\times 10^{-2} \\times 0{,}0821 \\times 298{,}15}{0{,}980} = 0{,}312\\ \\text{L}$$", porque: "Calculamos el volumen que resultaría si usáramos la presión total de $745\\ \\text{mmHg}$, sin descontar el vapor de agua. Pasamos esa presión a atm, $0{,}980\\ \\text{atm}$, y con los mismos moles obtenemos $V = 0{,}312\\ \\text{L}$. Así vemos qué error comete el cálculo sin corrección, comparando este valor con el de la parte b)." },
          { paso: "Error: $\\frac{0{,}312 - 0{,}322}{0{,}322} = -3{,}2\\ \\%$. El volumen sin corregir resulta un $3\\ \\%$ menor.", porque: "El error relativo se obtiene como $\\frac{V_{\\text{sin corregir}} - V_{\\text{correcto}}}{V_{\\text{correcto}}}$. Usamos $0{,}312\\ \\text{L}$ y $0{,}322\\ \\text{L}$ y obtenemos $-3{,}2\\ \\%$. Como la presión usada es mayor que la real y $V$ es inversamente proporcional a $P$, el volumen queda subestimado, y el signo negativo lo confirma." }
        ],
        resultado: "Sin corregir, el volumen sale $3\\ \\%$ menor ($0{,}312\\ \\text{L}$ en lugar de $0{,}322\\ \\text{L}$)"
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
          { paso: "$T = 20{,}0 + 273{,}15 = 293{,}15\\ \\text{K}$. Moles iniciales: $$n_1 = \\frac{120 \\times 50{,}0}{0{,}0821 \\times 293{,}15} = 249{,}3\\ \\text{mol}$$", porque: "Pasamos $20{,}0\\ ^\\circ\\text{C}$ a $293{,}15\\ \\text{K}$ y calculamos los moles iniciales con $PV = nRT$, porque el cilindro tiene volumen fijo y sus moles se obtienen de las condiciones iniciales. Usamos $P = 120\\ \\text{atm}$ y $V = 50{,}0\\ \\text{L}$, y obtenemos $n_1 = 249{,}3\\ \\text{mol}$. Verificamos que la temperatura esté en kelvin antes de reemplazar." },
          { paso: "Moles finales: $$n_2 = \\frac{20{,}0 \\times 50{,}0}{0{,}0821 \\times 293{,}15} = 41{,}55\\ \\text{mol}$$", porque: "Como $V$ y $T$ son constantes, la presión es proporcional a los moles: si baja a $20{,}0\\ \\text{atm}$, los moles finales bajan en la misma proporción. Calculamos $n_2$ con la misma ecuación de estado, usando $P = 20{,}0\\ \\text{atm}$ y $V = 50{,}0\\ \\text{L}$, y obtenemos $41{,}55\\ \\text{mol}$. El cilindro conserva su volumen en todo el proceso." },
          { paso: "Moles extraídos: $249{,}3 - 41{,}55 = 207{,}7\\ \\text{mol}$; masa: $$m = 207{,}7\\ \\text{mol} \\times 32{,}0\\ \\text{g/mol} = 6{,}65 \\times 10^3\\ \\text{g}$$", porque: "La cantidad extraída es la diferencia entre los moles iniciales y finales, porque lo que sale del cilindro es lo que se resta. Restamos $41{,}55\\ \\text{mol}$ de $249{,}3\\ \\text{mol}$ y obtenemos $207{,}7\\ \\text{mol}$. Luego pasamos a masa con la masa molar del $\\text{O}_2$, $32{,}0\\ \\text{g/mol}$, y resulta $6{,}65 \\times 10^3\\ \\text{g}$, un valor coherente con la cantidad de moles." }
        ],
        resultado: "$m(\\text{O}_2)$ extraída $= 6{,}65 \\times 10^3\\ \\text{g}$ ($6{,}65\\ \\text{kg}$)"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Volumen en CNPT: $$V = 207{,}7\\ \\text{mol} \\times 22{,}4\\ \\text{L/mol} = 4{,}65 \\times 10^3\\ \\text{L}$$", porque: "Calculamos el volumen que ocuparían los $207{,}7\\ \\text{mol}$ extraídos en CNPT, usando $22{,}4\\ \\text{L/mol}$, porque en CNPT un mol de gas ideal ocupa ese volumen. Así obtenemos $V = 4{,}65 \\times 10^3\\ \\text{L}$. Este es el volumen del gas extraído, y no debe confundirse con el volumen del cilindro, que sigue siendo $50{,}0\\ \\text{L}$." }
        ],
        resultado: "$V(\\text{CNPT}) = 4{,}65 \\times 10^3\\ \\text{L}$"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "Estado de partida para c): el cilindro queda con $20{,}0\\ \\text{atm}$ a $20{,}0\\ ^\\circ\\text{C}$ ($293{,}15\\ \\text{K}$) después de la extracción, con $V$ y $n$ constantes.", porque: "Tomamos como punto de partida el estado final de la parte a), porque el cilindro quedó vaciado hasta $20{,}0\\ \\text{atm}$. Los moles que quedan son los que intervienen en el calentamiento, no los iniciales. Por eso usar los $120\\ \\text{atm}$ daría un resultado incorrecto." },
          { paso: "Ley de Gay-Lussac: $$P_2 = P_1 \\times \\frac{T_2}{T_1} = 20{,}0\\ \\text{atm} \\times \\frac{313{,}15\\ \\text{K}}{293{,}15\\ \\text{K}} = 21{,}4\\ \\text{atm}$$", porque: "Como $V$ y $n$ son constantes, $P$ es proporcional a la temperatura absoluta, así que aplicamos la ley de Gay-Lussac. Escalamos los $20{,}0\\ \\text{atm}$ por el cociente $\\frac{313{,}15\\ \\text{K}}{293{,}15\\ \\text{K}}$ y obtenemos $P_2 = 21{,}4\\ \\text{atm}$. Dado que la temperatura sube, la presión también sube, y verificamos que ambas temperaturas estén en kelvin." }
        ],
        resultado: "$P_2 = 21{,}4\\ \\text{atm}$ (la presión sube al calentarse)"
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
          { paso: "$T = 25{,}0 + 273{,}15 = 298{,}15\\ \\text{K}$. $n(\\text{N}_2) = \\frac{2{,}50 \\times 2{,}00}{0{,}0821 \\times 298{,}15} = 0{,}204\\ \\text{mol}$; $n(\\text{He}) = \\frac{1{,}00 \\times 3{,}00}{0{,}0821 \\times 298{,}15} = 0{,}123\\ \\text{mol}$.", porque: "Calculamos los moles de cada gas en su recipiente de origen con la ecuación de gas ideal, usando sus propias presiones y volúmenes. Con $T = 298{,}15\\ \\text{K}$ obtenemos $n(\\text{N}_2) = 0{,}204\\ \\text{mol}$ en $2{,}00\\ \\text{L}$ a $2{,}50\\ \\text{atm}$, y $n(\\text{He}) = 0{,}123\\ \\text{mol}$ en $3{,}00\\ \\text{L}$ a $1{,}00\\ \\text{atm}$. Esto es necesario porque al conectar los recipientes cambia el volumen disponible, pero no la cantidad de gas." },
          { paso: "Al conectar, el volumen total es $2{,}00 + 3{,}00 = 5{,}00\\ \\text{L}$ y los moles totales son $0{,}204 + 0{,}123 = 0{,}327\\ \\text{mol}$.", porque: "Al abrir la válvula, los gases se reparten en el volumen conjunto, que es $2{,}00 + 3{,}00 = 5{,}00\\ \\text{L}$. Como no hay pérdida de materia, sumamos los moles de cada gas: $0{,}204 + 0{,}123 = 0{,}327\\ \\text{mol}$. Entonces el volumen final es la suma de los dos recipientes, y el total de moles es el que usamos en la ecuación." },
          { paso: "$$P = \\frac{n_{\\text{total}} \\cdot R \\cdot T}{V_{\\text{total}}} = \\frac{0{,}327 \\times 0{,}0821 \\times 298{,}15}{5{,}00} = 1{,}60\\ \\text{atm}$$", porque: "Aplicamos la ecuación de gas ideal al sistema completo, con $n_{\\text{total}} = 0{,}327\\ \\text{mol}$, $V_{\\text{total}} = 5{,}00\\ \\text{L}$ y $T = 298{,}15\\ \\text{K}$, porque al final los dos gases ocupan el mismo volumen. La temperatura no cambia durante el proceso, así que la usamos sin modificaciones. Reemplazando obtenemos $P = 1{,}60\\ \\text{atm}$, la presión total final." }
        ],
        resultado: "P final = $1{,}60\\ \\text{atm}$"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Presión parcial del $\\text{N}_2$: $$P(\\text{N}_2) = \\frac{n(\\text{N}_2) \\cdot R \\cdot T}{V_{\\text{total}}} = \\frac{0{,}204 \\times 0{,}0821 \\times 298{,}15}{5{,}00} = 1{,}00\\ \\text{atm}$$", porque: "La presión parcial de cada gas es la que tendría si ocupara solo el volumen total. Calculamos $P(\\text{N}_2)$ con sus moles, $0{,}204\\ \\text{mol}$, el volumen total de $5{,}00\\ \\text{L}$ y $T = 298{,}15\\ \\text{K}$, y obtenemos $1{,}00\\ \\text{atm}$. Este criterio, que considera cada gas como si estuviera solo, es la base de la ley de Dalton." },
          { paso: "Presión parcial del $\\text{He}$: $P(\\text{He}) = \\frac{0{,}123 \\times 0{,}0821 \\times 298{,}15}{5{,}00} = 0{,}600\\ \\text{atm}$. Verificación: $1{,}00 + 0{,}600 = 1{,}60\\ \\text{atm}$.", porque: "Por la ley de Dalton, la suma de las presiones parciales debe dar la presión total. Calculamos $P(\\text{He})$ con los moles de $\\text{He}$, el volumen total y $T$, y obtenemos $0{,}600\\ \\text{atm}$. Verificamos que $1{,}00 + 0{,}600 = 1{,}60\\ \\text{atm}$, lo que confirma la consistencia de los cálculos." }
        ],
        resultado: "$P(\\text{N}_2) = 1{,}00\\ \\text{atm}$; $P(\\text{He}) = 0{,}600\\ \\text{atm}$"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "No: la presión parcial del $\\text{N}_2$ pasa de $2{,}50\\ \\text{atm}$ a $1{,}00\\ \\text{atm}$.", porque: "El $\\text{N}_2$ sí cambia su presión parcial, porque ahora se distribuye en $5{,}00\\ \\text{L}$ en lugar de $2{,}00\\ \\text{L}$. Aunque la cantidad de $\\text{N}_2$ es la misma, el volumen disponible aumentó, y por eso la respuesta es negativa. La presión parcial depende del volumen en el que está el gas, y pasa de $2{,}50\\ \\text{atm}$ a $1{,}00\\ \\text{atm}$." },
          { paso: "Se verifica: $$2{,}50\\ \\text{atm} \\times \\frac{2{,}00\\ \\text{L}}{5{,}00\\ \\text{L}} = 1{,}00\\ \\text{atm}$$", porque: "Usamos la relación inversa al volumen, $P_1 \\cdot V_1 = P_2 \\cdot V_2$, con $n$ y $T$ constantes. Reemplazando $2{,}50\\ \\text{atm}$, $2{,}00\\ \\text{L}$ y $5{,}00\\ \\text{L}$ obtenemos $1{,}00\\ \\text{atm}$. Esto corresponde a la ley de Boyle y muestra que la presión baja en la misma proporción en que aumenta el volumen, y coincide con el cálculo de la parte b)." }
        ],
        resultado: "No; la presión parcial del $\\text{N}_2$ baja a $1{,}00\\ \\text{atm}$"
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
          { paso: "$$P_{\\text{ideal}} = \\frac{n \\cdot R \\cdot T}{V} = \\frac{1{,}00 \\times 0{,}0821 \\times 300}{1{,}00} = 24{,}6\\ \\text{atm}$$", porque: "Calculamos la presión con la ecuación de gas ideal, $P = \\frac{n \\cdot R \\cdot T}{V}$, como referencia. Con $n = 1{,}00\\ \\text{mol}$, $R = 0{,}0821$, $T = 300\\ \\text{K}$ y $V = 1{,}00\\ \\text{L}$ obtenemos $P_{\\text{ideal}} = 24{,}6\\ \\text{atm}$. Este modelo supone que las moléculas no tienen volumen propio ni interactúan, y es el valor con el que compararemos la presión real." }
        ],
        resultado: "$P_{\\text{ideal}} = 24{,}6\\ \\text{atm}$"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Ecuación de van der Waals despejada: $$P = \\frac{n \\cdot R \\cdot T}{V - n \\cdot b} - \\frac{a \\cdot n^2}{V^2}$$", porque: "Escribimos la ecuación de van der Waals despejada para $P$, que incorpora dos correcciones: una por el volumen propio de las moléculas, en $V - n \\cdot b$, y otra por la atracción, en $\\frac{a \\cdot n^2}{V^2}$. Estas correcciones modifican el modelo ideal sin reemplazar a $R$ ni a $T$. Verificamos que el signo de cada término sea el correcto antes de reemplazar." },
          { paso: "Término de volumen: $\\frac{n \\cdot R \\cdot T}{V - n \\cdot b} = \\frac{1{,}00 \\times 0{,}0821 \\times 300}{1{,}00 - 0{,}0427} = 25{,}73\\ \\text{atm}$.", porque: "El término $V - n \\cdot b$ corrige el volumen disponible, porque las moléculas ocupan espacio propio y dejan menos lugar libre. Calculamos $\\frac{n \\cdot R \\cdot T}{V - n \\cdot b}$ con $n = 1{,}00\\ \\text{mol}$, $R = 0{,}0821$, $T = 300\\ \\text{K}$, $V = 1{,}00\\ \\text{L}$ y $b = 0{,}0427\\ \\text{L/mol}$, y obtenemos $25{,}73\\ \\text{atm}$. Como el denominador baja, esta presión queda por encima de la ideal." },
          { paso: "Término de atracción: $$\\frac{a \\cdot n^2}{V^2} = \\frac{3{,}59 \\times 1{,}00^2}{1{,}00^2} = 3{,}59\\ \\text{atm}$$", porque: "Calculamos el término de atracción con $a = 3{,}59\\ \\frac{\\text{L}^2 \\cdot \\text{atm}}{\\text{mol}^2}$, $n = 1{,}00$ y $V = 1{,}00\\ \\text{L}$, porque mide la reducción de presión debida a las fuerzas intermoleculares. El cociente $3{,}59 \\times 1{,}00^2 / 1{,}00^2$ vale $3{,}59\\ \\text{atm}$. Como las unidades de $a$ dan atm al dividir por $V^2$, este término queda en atm." },
          { paso: "$$P = 25{,}73 - 3{,}59 = 22{,}1\\ \\text{atm}$$", porque: "Restamos el término de atracción del término de volumen, porque las atracciones reducen la presión. Con $25{,}73\\ \\text{atm}$ y $3{,}59\\ \\text{atm}$ obtenemos $P = 22{,}1\\ \\text{atm}$. Las dos correcciones tienen signos opuestos, así que la presión real queda por debajo de la ideal, y ese es el balance final de la ecuación." }
        ],
        resultado: "$P_{\\text{van der Waals}} = 22{,}1\\ \\text{atm}$"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "$$Z = \\frac{P \\cdot V}{R \\cdot T} = \\frac{22{,}1\\ \\text{atm} \\times 1{,}00\\ \\text{L}}{0{,}0821 \\times 300} = 0{,}899$$", porque: "Calculamos $Z$ como $\\frac{P \\cdot V}{R \\cdot T}$ con la presión real de van der Waals, $22{,}1\\ \\text{atm}$, $V = 1{,}00\\ \\text{L}$, $R = 0{,}0821$ y $T = 300\\ \\text{K}$. Así obtenemos $Z = 0{,}899$. Este valor cuantifica la desviación del gas respecto del modelo ideal, y conviene usar la presión de la parte b) y no la de la parte a)." },
          { paso: "$Z < 1$: el gas ocupa menos volumen del que predice el modelo ideal; la presión real es menor, así que dominan las atracciones.", porque: "Como $Z$ es menor que $1$, la presión real es menor que la ideal, lo que indica que domina la atracción entre moléculas. El término $\\frac{a \\cdot n^2}{V^2}$ es el que refleja esa atracción, y en este caso supera a la corrección por volumen propio. Por eso concluimos que predominan las atracciones intermoleculares." }
        ],
        resultado: "$Z = 0{,}899$; predominan las atracciones intermoleculares"
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
          { paso: "Para $0{,}200\\ \\text{mol}$ de $\\text{CH}_4$ se necesitan $2 \\times 0{,}200 = 0{,}400\\ \\text{mol}$ de $\\text{O}_2$; hay $0{,}800\\ \\text{mol}$, así que el $\\text{O}_2$ está en exceso y el limitante es el $\\text{CH}_4$.", porque: "Comparamos la cantidad de $\\text{O}_2$ necesaria para consumir todo el $\\text{CH}_4$ con la disponible, usando la relación de la ecuación. Con $0{,}200\\ \\text{mol}$ de $\\text{CH}_4$ hacen falta $2 \\times 0{,}200 = 0{,}400\\ \\text{mol}$ de $\\text{O}_2$, y como hay $0{,}800\\ \\text{mol}$, el $\\text{O}_2$ sobra. Por eso el reactivo que se agota primero, y que determina la reacción, es el $\\text{CH}_4$, el limitante." },
          { paso: "Gas final: $\\text{O}_2$ en exceso $= 0{,}800 - 0{,}400 = 0{,}400\\ \\text{mol}$; $\\text{CO}_2$ formado $= 0{,}200\\ \\text{mol}$. Total gaseoso $= 0{,}600\\ \\text{mol}$.", porque: "En la fase gaseosa final contamos el $\\text{O}_2$ que sobra y el $\\text{CO}_2$ formado, porque el $\\text{H}_2\\text{O}$ es líquida y no aporta presión de gas. Calculamos $\\text{O}_2$ en exceso $= 0{,}800 - 0{,}400 = 0{,}400\\ \\text{mol}$, y $\\text{CO}_2$ formado $= 0{,}200\\ \\text{mol}$. Entonces el total gaseoso es $0{,}600\\ \\text{mol}$, y ese valor es el que usamos en la ecuación de presión." }
        ],
        resultado: "Limitante: $\\text{CH}_4$; gas final $= 0{,}400\\ \\text{mol}$ de $\\text{O}_2$ y $0{,}200\\ \\text{mol}$ de $\\text{CO}_2$"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Supuesto: el volumen del líquido y la presión de vapor del agua se desprecian; sólo cuentan los gases.", porque: "Hacemos un supuesto para simplificar: el volumen del líquido y la presión de vapor del agua se desprecian, así que la presión proviene sólo de los gases. Este supuesto es el que pide el enunciado en la parte b). El efecto real del vapor lo analizamos en la parte c)." },
          { paso: "$$P = \\frac{n_{\\text{gas}} \\cdot R \\cdot T}{V} = \\frac{0{,}600 \\times 0{,}0821 \\times 298{,}15}{25{,}0} = 0{,}587\\ \\text{atm}$$", porque: "Aplicamos $PV = nRT$ con los $0{,}600\\ \\text{mol}$ de gas de la parte a), $T = 298{,}15\\ \\text{K}$ y el volumen de $25{,}0\\ \\text{L}$ del recipiente. Reemplazando obtenemos $P = 0{,}587\\ \\text{atm}$, que es la presión total sin contar el agua líquida. Conviene verificar que la temperatura esté en kelvin antes de calcular." }
        ],
        resultado: "P total = $0{,}587\\ \\text{atm}$"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "Si el agua está como vapor, $n_{\\text{gas}} = 0{,}600 + 2 \\times 0{,}200 = 1{,}000\\ \\text{mol}$; $T = 100{,}0 + 273{,}15 = 373{,}15\\ \\text{K}$.", porque: "Si el agua está como vapor, sus moles se suman a los del gas, porque el vapor también ejerce presión. Entonces la cantidad de agua, $2 \\times 0{,}200\\ \\text{mol}$, se suma a los $0{,}600\\ \\text{mol}$ de gas, y la temperatura pasa a $373{,}15\\ \\text{K}$. Ese cambio de estado, con más moles y mayor temperatura, es el que hace subir la presión." },
          { paso: "$$P = \\frac{1{,}000 \\times 0{,}0821 \\times 373{,}15}{25{,}0} = 1{,}23\\ \\text{atm}$$", porque: "Aplicamos la ecuación de gas ideal con $1{,}000\\ \\text{mol}$ de gas total, la nueva temperatura de $373{,}15\\ \\text{K}$ y el mismo volumen de $25{,}0\\ \\text{L}$. Reemplazando obtenemos $P = 1{,}23\\ \\text{atm}$. Como hay más moles y mayor temperatura, la presión sube de forma notable, y esa comparación explica la diferencia entre la parte b) y la parte c)." }
        ],
        resultado: "P total = $1{,}23\\ \\text{atm}$"
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
          { paso: "$T = 27{,}0 + 273{,}15 = 300{,}15\\ \\text{K}$. Moles totales: $$n = \\frac{3{,}00 \\times 30{,}0}{0{,}0821 \\times 300{,}15} = 3{,}65\\ \\text{mol}$$", porque: "Usamos $PV = nRT$ con los datos del cilindro para obtener los moles totales, porque la mezcla se trata como gas ideal en un volumen conocido. Con $P = 3{,}00\\ \\text{atm}$, $V = 30{,}0\\ \\text{L}$ y $T = 300{,}15\\ \\text{K}$ obtenemos $n = 3{,}65\\ \\text{mol}$. Ese total es el punto de partida, y con él repartimos la cantidad entre los dos gases." },
          { paso: "$n(\\text{CO}_2) = 0{,}250 \\times 3{,}65 = 0{,}913\\ \\text{mol}$, y $n(\\text{N}_2) = 3{,}65 - 0{,}913 = 2{,}74\\ \\text{mol}$.", porque: "Usamos la fracción molar de $\\text{CO}_2$ para separar el total en $\\text{CO}_2$ y $\\text{N}_2$, porque esa fracción indica la proporción de moles de cada gas. Calculamos $n(\\text{CO}_2) = 0{,}250 \\times 3{,}65 = 0{,}913\\ \\text{mol}$, y el $\\text{N}_2$ es el complemento: $3{,}65 - 0{,}913 = 2{,}74\\ \\text{mol}$. Entonces la suma de ambos gases debe dar los $3{,}65\\ \\text{mol}$ totales." },
          { paso: "Masas: $m(\\text{CO}_2) = 0{,}913\\ \\text{mol} \\times 44{,}0\\ \\text{g/mol} = 40{,}2\\ \\text{g}$; $m(\\text{N}_2) = 2{,}74\\ \\text{mol} \\times 28{,}0\\ \\text{g/mol} = 76{,}7\\ \\text{g}$.", porque: "Multiplicamos la cantidad de cada gas por su masa molar para obtener su masa, porque la masa molar convierte moles en gramos. Con $0{,}913\\ \\text{mol}$ de $\\text{CO}_2$ y $44{,}0\\ \\text{g/mol}$ obtenemos $40{,}2\\ \\text{g}$, y con $2{,}74\\ \\text{mol}$ de $\\text{N}_2$ y $28{,}0\\ \\text{g/mol}$ obtenemos $76{,}7\\ \\text{g}$. Verificamos que la suma de ambas masas coincida con la masa total de la mezcla." }
        ],
        resultado: "$n_{\\text{total}} = 3{,}65\\ \\text{mol}$; $m(\\text{CO}_2) = 40{,}2\\ \\text{g}$; $m(\\text{N}_2) = 76{,}7\\ \\text{g}$"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Moles finales para P = 2,00 atm: $$n_{\\text{final}} = \\frac{2{,}00 \\times 30{,}0}{0{,}0821 \\times 300{,}15} = 2{,}43\\ \\text{mol}$$", porque: "Con V y T constantes, la presión es proporcional a los moles totales, así que el dato de 2,00 atm fija cuántos moles deben quedar en el cilindro. Despejamos $n_{\\text{final}}$ de $PV = nRT$ con $V = 30{,}0\\ \\text{L}$ y $T = 300{,}15\\ \\text{K}$, y obtenemos $2{,}43\\ \\text{mol}$. Entonces sabemos cuánto gas hay que extraer, que es la diferencia con el total inicial." },
          { paso: "Moles extraídos: $3{,}65 - 2{,}43 = 1{,}22\\ \\text{mol}$. La masa molar media de la mezcla es $0{,}250 \\times 44{,}0 + 0{,}750 \\times 28{,}0 = 32{,}0\\ \\text{g/mol}$.", porque: "Como la composición se mantiene, la masa molar media de la mezcla permite pasar de moles a gramos sin separar los componentes. Ponderamos las masas molares por las fracciones molares: $0{,}250 \\times 44{,}0 + 0{,}750 \\times 28{,}0 = 32{,}0\\ \\text{g/mol}$. Así evitamos calcular por separado la masa de cada gas, y con $3{,}65 - 2{,}43 = 1{,}22\\ \\text{mol}$ extraídos queda definida la cantidad a sacar." },
          { paso: "$$m_{\\text{extraída}} = 1{,}22\\ \\text{mol} \\times 32{,}0\\ \\text{g/mol} = 39{,}0\\ \\text{g}$$", porque: "Multiplicamos los $1{,}22\\ \\text{mol}$ extraídos por la masa molar media, $32{,}0\\ \\text{g/mol}$, para obtener la masa que sale del cilindro. Es válido porque el gas que sale tiene la misma composición que el que queda. Como resultado obtenemos $39{,}0\\ \\text{g}$, y conviene verificar que sea menor que la masa total de la mezcla." }
        ],
        resultado: "$m_{\\text{extraída}} = 39{,}0\\ \\text{g}$"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "$T_2 = 127{,}0 + 273{,}15 = 400{,}15\\ \\text{K}$. Con $V$ y $n$ constantes, $P_2 = P_1 \\times \\frac{T_2}{T_1} = 3{,}00\\ \\text{atm} \\times \\frac{400{,}15}{300{,}15} = 4{,}00\\ \\text{atm}$.", porque: "Con $V$ y $n$ constantes, la presión es proporcional a la temperatura absoluta, así que aplicamos la ley de Gay-Lussac. Como no hay fugas, los moles no cambian, y la relación entre $400{,}15\\ \\text{K}$ y $300{,}15\\ \\text{K}$ escala la presión inicial de $3{,}00\\ \\text{atm}$. Así obtenemos $P_2 = 4{,}00\\ \\text{atm}$, y verificamos que las temperaturas estén en kelvin y no en $^\\circ\\text{C}$." }
        ],
        resultado: "P final = $4{,}00\\ \\text{atm}$"
      },
      {
        parte: "d)",
        pasos: [
          { paso: "No cambia: $P(\\text{CO}_2) = \\frac{n(\\text{CO}_2) \\cdot R \\cdot T}{V}$, y $n(\\text{CO}_2)$, $T$ y $V$ no cambian al agregar $\\text{N}_2$.", porque: "La presión parcial de un gas depende sólo de sus moles, del volumen y de la temperatura, porque es lo que tendría ese gas si ocupara solo el recipiente. Al agregar $\\text{N}_2$, los moles de $\\text{CO}_2$, el volumen y la temperatura no cambian, así que la presión parcial del $\\text{CO}_2$ queda igual. Conviene distinguirla de la fracción molar, que sí baja." },
          { paso: "Lo que aumenta es la presión total, por la suma de presiones parciales (Dalton).", porque: "Al agregar $\\text{N}_2$, la presión total sube, porque es la suma de las presiones parciales de todos los componentes. Por eso la presión total depende de toda la mezcla y no sólo del $\\text{CO}_2$. Entonces conviene separar ambos conceptos al responder." }
        ],
        resultado: "La presión parcial del $\\text{CO}_2$ no cambia; sube la presión total"
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
          { paso: "Presión de vapor en atm: $\\frac{44{,}6}{760} = 0{,}0587\\ \\text{atm}$. Temperatura: $$T = 20{,}0 + 273{,}15 = 293{,}15\\ \\text{K}$$", porque: "Pasamos la presión de vapor de $\\text{mmHg}$ a atm dividiendo $44{,}6$ por $760$, y la temperatura a kelvin sumando $273{,}15$ a los $20{,}0\\ ^\\circ\\text{C}$. Como $R = 0{,}0821\\ \\frac{\\text{L}\\cdot\\text{atm}}{\\text{mol}\\cdot\\text{K}}$ exige presiones en atm y temperaturas absolutas, hacemos ambas conversiones antes de aplicar la ecuación. Así obtenemos $0{,}0587\\ \\text{atm}$ y $T = 293{,}15\\ \\text{K}$." },
          { paso: "Como queda líquido en el recipiente, el vapor está saturado: su presión es la presión de vapor a $20{,}0\\ ^\\circ\\text{C}$.", porque: "Si queda líquido en el recipiente, el vapor está saturado y su presión es la presión de vapor a $20{,}0\\ ^\\circ\\text{C}$. Esa presión depende sólo de la temperatura, así que no necesitamos saber cuánto líquido hay. Por eso, mientras haya líquido, el vapor no puede superar $0{,}0587\\ \\text{atm}$." },
          { paso: "Moles de vapor: $$n = \\frac{P \\cdot V}{R \\cdot T} = \\frac{0{,}0587 \\times 2{,}00}{0{,}0821 \\times 293{,}15} = 4{,}88 \\times 10^{-3}\\ \\text{mol}$$", porque: "Despejamos $n$ de $PV = nRT$ dividiendo por $R \\cdot T$, con $P = 0{,}0587\\ \\text{atm}$, $V = 2{,}00\\ \\text{L}$ y $T = 293{,}15\\ \\text{K}$. Usamos la misma ecuación de gas ideal, pero ahora aplicada al vapor en equilibrio. Así obtenemos $n = 4{,}88 \\times 10^{-3}\\ \\text{mol}$, la cantidad de etanol que cabe como vapor en el recipiente." },
          { paso: "Masa de vapor: $4{,}88 \\times 10^{-3}\\ \\text{mol} \\times 46{,}1\\ \\text{g/mol} = 0{,}225\\ \\text{g}$; masa líquida $= 1{,}00 - 0{,}225 = 0{,}775\\ \\text{g}$.", porque: "Aplicamos conservación de masa: el etanol total son $1{,}00\\ \\text{g}$, y la parte que no está en vapor queda líquida. Pasamos los $4{,}88 \\times 10^{-3}\\ \\text{mol}$ de vapor a gramos multiplicando por $46{,}1\\ \\text{g/mol}$, lo que da $0{,}225\\ \\text{g}$. Entonces la masa líquida es $1{,}00 - 0{,}225 = 0{,}775\\ \\text{g}$, y conviene comprobar que la suma dé $1{,}00\\ \\text{g}$." }
        ],
        resultado: "Vapor: $0{,}225\\ \\text{g}$; líquido: $0{,}775\\ \\text{g}$"
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
          { paso: "$\\text{HF}$: el $\\text{H}$ está unido a $\\text{F}$, que es muy electronegativo y tiene pares libres. Predomina el puente de hidrógeno.", porque: "El puente de hidrógeno ocurre cuando un $\\text{H}$ unido a $\\text{F}$, $\\text{O}$ o $\\text{N}$ interactúa con un par libre de otro $\\text{F}$, $\\text{O}$ o $\\text{N}$. Como en el $\\text{HF}$ el $\\text{H}$ está unido a $\\text{F}$, un átomo muy electronegativo, aplicamos ese criterio y la interacción predominante es el puente. Verificamos primero que el $\\text{H}$ esté unido a $\\text{F}$, $\\text{O}$ o $\\text{N}$ antes de hablar de puentes." },
          { paso: "Butano: molécula apolar, sin $\\text{H}$ unido a $\\text{F}$, $\\text{O}$ o $\\text{N}$ ni pares libres. Sólo hay fuerzas de London.", porque: "Las fuerzas de London dependen del tamaño y de la superficie de la molécula, y son las únicas relevantes en moléculas apolares. Como el butano no tiene $\\text{H}$ unido a $\\text{F}$, $\\text{O}$ o $\\text{N}$ ni pares libres, no hay polaridad ni puentes. Por eso la conclusión se apoya sólo en las fuerzas de London, ya que un enlace $\\text{C-H}$ es prácticamente apolar." },
          { paso: "$\\text{NaBr}$ en agua: los iones $\\text{Na}^+$ y $\\text{Br}^-$ interactúan con el dipolo del agua. Predominan las fuerzas ion-dipolo.", porque: "Un compuesto iónico disuelto en agua se separa en iones, y estos son atraídos por los extremos del dipolo del agua. Esa interacción entre una carga y un dipolo es ion-dipolo, y es más intensa que una dipolo-dipolo. Entonces, en la solución de $\\text{NaBr}$, el solvente polar es el responsable de la interacción predominante." },
          { paso: "Metanol: tiene $\\text{O-H}$, así que forma puente de hidrógeno; además tiene London.", porque: "El grupo $\\text{OH}$ del metanol permite puentes de hidrógeno, que son las fuerzas predominantes en alcoholes de cadena corta. Como toda molécula tiene fuerzas de London, la respuesta completa también las menciona. Verificamos que el $\\text{H}$ del grupo $\\text{OH}$ esté unido al $\\text{O}$ para confirmar el puente." }
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
          { paso: "Moles de agua: $$n = \\frac{50{,}0\\ \\text{g}}{18{,}0\\ \\text{g/mol}} = 2{,}78\\ \\text{mol}$$", porque: "Como el calor de vaporización está dado por mol, pasamos los $50{,}0\\ \\text{g}$ de agua a moles dividiendo por $18{,}0\\ \\text{g/mol}$. Así obtenemos $n = 2{,}78\\ \\text{mol}$, sin el cual no podemos usar el valor de $40{,}7\\ \\text{kJ/mol}$. Conviene verificar que $50{,}0 / 18{,}0$ dé aproximadamente $2{,}78\\ \\text{mol}$." },
          { paso: "Calor absorbido: $$Q = n \\times \\Delta H_{\\text{vap}} = 2{,}78\\ \\text{mol} \\times 40{,}7\\ \\text{kJ/mol} = 113\\ \\text{kJ}$$", porque: "A temperatura y presión constantes, el calor absorbido en el cambio de fase es la entalpía de vaporización por mol. Como el agua se vaporiza sin cambiar de temperatura, no usamos el calor específico. Multiplicamos los $2{,}78\\ \\text{mol}$ por $40{,}7\\ \\text{kJ/mol}$ y obtenemos $Q = 113\\ \\text{kJ}$, la energía total absorbida." }
        ],
        resultado: "$Q = 113\\ \\text{kJ}$ (energía absorbida)"
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
          { paso: "$1\\ \\text{dina} = 10^{-5}\\ \\text{N}$ y $1\\ \\text{cm} = 10^{-2}\\ \\text{m}$. Entonces: $$1\\ \\frac{\\text{dina}}{\\text{cm}} = \\frac{10^{-5}\\ \\text{N}}{10^{-2}\\ \\text{m}} = 10^{-3}\\ \\frac{\\text{N}}{\\text{m}}$$", porque: "Usamos la definición de tensión superficial, que es fuerza por unidad de longitud, así que convertimos por separado la fuerza, de dinas a N, y la longitud, de cm a m. Como $1\\ \\text{dina} = 10^{-5}\\ \\text{N}$ y $1\\ \\text{cm} = 10^{-2}\\ \\text{m}$, obtenemos $10^{-3}\\ \\frac{\\text{N}}{\\text{m}}$ por cada $\\frac{\\text{dina}}{\\text{cm}}$. Conviene revisar cada unidad antes de combinarlas, porque cm y m no son equivalentes." },
          { paso: "Benceno: $28{,}9\\ \\frac{\\text{dinas}}{\\text{cm}} = 28{,}9 \\times 10^{-3}\\ \\frac{\\text{N}}{\\text{m}} = 0{,}0289\\ \\frac{\\text{N}}{\\text{m}}$ ($28{,}9\\ \\text{mN/m}$).", porque: "Multiplicamos el factor $10^{-3}\\ \\frac{\\text{N}}{\\text{m}}$ por cada $\\frac{\\text{dinas}}{\\text{cm}}$, de modo que $28{,}9\\ \\frac{\\text{dinas}}{\\text{cm}}$ equivalen a $28{,}9 \\times 10^{-3}\\ \\frac{\\text{N}}{\\text{m}}$. Así obtenemos $0{,}0289\\ \\frac{\\text{N}}{\\text{m}}$ para el benceno. Escribir el factor de conversión y cancelar unidades nos ayuda a no equivocar el exponente." },
          { paso: "Agua: $72{,}75\\ \\frac{\\text{dinas}}{\\text{cm}} = 0{,}07275\\ \\frac{\\text{N}}{\\text{m}}$. La tensión del agua es aproximadamente $2{,}5$ veces mayor que la del benceno.", porque: "Como ambas tensiones ya están en $\\frac{\\text{N}}{\\text{m}}$, podemos compararlas de forma directa. Dividimos $0{,}07275\\ \\frac{\\text{N}}{\\text{m}}$ por $0{,}0289\\ \\frac{\\text{N}}{\\text{m}}$ y obtenemos un cociente de aproximadamente $2{,}5$, por lo que la del agua es mayor. Esta diferencia se explica por los puentes de hidrógeno del agua, que son interacciones más intensas." }
        ],
        resultado: "Benceno: $0{,}0289\\ \\frac{\\text{N}}{\\text{m}}$; agua: $0{,}07275\\ \\frac{\\text{N}}{\\text{m}}$ (la del agua es mayor)"
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
          { paso: "Como hay agua líquida, el vapor de agua está saturado: $P(\\text{H}_2\\text{O}) = 23{,}8\\ \\text{mmHg} = 0{,}0313\\ \\text{atm}$.", porque: "Si hay agua líquida, el vapor de agua está saturado y su presión parcial es la presión de vapor a $25\\ ^\\circ\\text{C}$. Convertimos $23{,}8\\ \\text{mmHg}$ a atm, con $0{,}0313\\ \\text{atm}$, porque el cálculo que sigue usa atm. Ese valor es el que se resta de la presión total para obtener la del aire seco." },
          { paso: "Por Dalton: $P(\\text{aire seco}) = P_{\\text{total}} - P(\\text{H}_2\\text{O}) = 1{,}00\\ \\text{atm} - 0{,}0313\\ \\text{atm} = 0{,}969\\ \\text{atm}$ ($736\\ \\text{mmHg}$).", porque: "Por Dalton, la presión total es la suma de las presiones parciales, así que la del aire seco es la total menos la del vapor de agua. Reemplazamos $1{,}00\\ \\text{atm} - 0{,}0313\\ \\text{atm}$ y obtenemos $0{,}969\\ \\text{atm}$, que equivalen a $736\\ \\text{mmHg}$. Verificamos que ambas presiones estén en la misma unidad antes de restar." },
          { paso: "Fracción molar del agua: $$x(\\text{H}_2\\text{O}) = \\frac{P(\\text{H}_2\\text{O})}{P_{\\text{total}}} = \\frac{0{,}0313}{1{,}00} = 0{,}0313$$", porque: "La fracción molar de un componente en una mezcla gaseosa es su presión parcial dividida por la presión total, porque la presión parcial es proporcional a los moles. Dividimos $0{,}0313\\ \\text{atm}$ por $1{,}00\\ \\text{atm}$ y obtenemos $x(\\text{H}_2\\text{O}) = 0{,}0313$. Como es un número sin unidades menor que $1$, el resultado es coherente." }
        ],
        resultado: "$P(\\text{aire seco}) = 0{,}969\\ \\text{atm}$ ($736\\ \\text{mmHg}$); $x(\\text{H}_2\\text{O}) = 0{,}0313$"
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
          { paso: "Presión de vapor en atm: $\\frac{23{,}8}{760} = 0{,}0313\\ \\text{atm}$. $T = 25{,}0 + 273{,}15 = 298{,}15\\ \\text{K}$.", porque: "Usamos atm y kelvin para aplicar la ecuación de gas ideal al vapor, porque $R = 0{,}0821\\ \\frac{\\text{L}\\cdot\\text{atm}}{\\text{mol}\\cdot\\text{K}}$ exige esas unidades. Dividimos $23{,}8\\ \\text{mmHg}$ por $760$ para pasar la presión de vapor a atm, y sumamos $273{,}15$ a los $25{,}0\\ ^\\circ\\text{C}$ para obtener $298{,}15\\ \\text{K}$. Verificamos que la temperatura quede en kelvin antes de seguir." },
          { paso: "Moles máximos de vapor: $$n = \\frac{0{,}0313 \\times 5{,}00}{0{,}0821 \\times 298{,}15} = 6{,}40 \\times 10^{-3}\\ \\text{mol}$$", porque: "Si el vapor llega a la presión de vapor, esa presión define cuántos moles caben en $5{,}00\\ \\text{L}$ a $25{,}0\\ ^\\circ\\text{C}$. Calculamos $n = \\frac{0{,}0313 \\times 5{,}00}{0{,}0821 \\times 298{,}15} = 6{,}40 \\times 10^{-3}\\ \\text{mol}$, que es el máximo de vapor posible en el recipiente, sin importar cuánto líquido haya. Esa idea es la base del concepto de saturación." },
          { paso: "Verificación: el agua total es $\\frac{0{,}500\\ \\text{g}}{18{,}0\\ \\text{g/mol}} = 0{,}0278\\ \\text{mol}$, más que $6{,}40 \\times 10^{-3}\\ \\text{mol}$, así que sí queda líquido.", porque: "La saturación sólo se da si hay líquido suficiente para llenar el vapor hasta esa presión, así que comparamos la masa total de agua con el máximo de vapor. Dividimos $0{,}500\\ \\text{g}$ entre $18{,}0\\ \\text{g/mol}$ y obtenemos $0{,}0278\\ \\text{mol}$, que supera los $6{,}40 \\times 10^{-3}\\ \\text{mol}$. Como la masa total es mayor, queda líquido y la presión de vapor se mantiene." },
          { paso: "Masa de vapor: $6{,}40 \\times 10^{-3}\\ \\text{mol} \\times 18{,}0\\ \\text{g/mol} = 0{,}115\\ \\text{g}$; masa líquida: $0{,}500 - 0{,}115 = 0{,}385\\ \\text{g}$.", porque: "Por conservación de masa, el agua que no está en vapor queda líquida. Multiplicamos los $6{,}40 \\times 10^{-3}\\ \\text{mol}$ de vapor por $18{,}0\\ \\text{g/mol}$ para obtener $0{,}115\\ \\text{g}$, y lo restamos de $0{,}500\\ \\text{g}$. Así la masa líquida es $0{,}385\\ \\text{g}$, y conviene verificar que vapor y líquido sumen $0{,}500\\ \\text{g}$." }
        ],
        resultado: "Vapor: $0{,}115\\ \\text{g}$; líquido: $0{,}385\\ \\text{g}$"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Al comprimir a $25{,}0\\ ^\\circ\\text{C}$, el vapor en exceso condensa; mientras haya líquido, la presión total queda en $23{,}8\\ \\text{mmHg}$.", porque: "Al comprimir a $25\\ ^\\circ\\text{C}$, el vapor en exceso condensa, pero mientras haya líquido la presión total queda igual a la presión de vapor. La presión de vapor depende sólo de la temperatura, y el volumen modifica únicamente la cantidad de vapor. Por eso, con $23{,}8\\ \\text{mmHg}$, esta es la clave de la compresión con líquido presente." },
          { paso: "Moles de vapor en $1{,}00\\ \\text{L}$: $n = \\frac{0{,}0313 \\times 1{,}00}{0{,}0821 \\times 298{,}15} = 1{,}28 \\times 10^{-3}\\ \\text{mol}$; masa $= 1{,}28 \\times 10^{-3} \\times 18{,}0 = 0{,}0230\\ \\text{g}$.", porque: "Con el nuevo volumen de $1{,}00\\ \\text{L}$, la cantidad de vapor que cabe a la misma presión de vapor es menor. Calculamos $n = \\frac{0{,}0313 \\times 1{,}00}{0{,}0821 \\times 298{,}15} = 1{,}28 \\times 10^{-3}\\ \\text{mol}$ con $PV = nRT$, y luego lo pasamos a gramos con $18{,}0\\ \\text{g/mol}$. Así obtenemos una masa de $0{,}0230\\ \\text{g}$, y verificamos que la presión esté en atm y la temperatura en K." },
          { paso: "La masa líquida restante es $0{,}500 - 0{,}0230 = 0{,}477\\ \\text{g}$, y la presión total es $23{,}8\\ \\text{mmHg}$ ($0{,}0313\\ \\text{atm}$).", porque: "Restamos el vapor del total para obtener la masa líquida restante, por conservación de masa. Con $0{,}500\\ \\text{g} - 0{,}0230\\ \\text{g}$ obtenemos $0{,}477\\ \\text{g}$, y como la masa de agua supera el máximo de vapor, el sistema sigue con líquido. Por eso la presión final es la presión de vapor, $23{,}8\\ \\text{mmHg}$ ($0{,}0313\\ \\text{atm}$)." }
        ],
        resultado: "P total = $23{,}8\\ \\text{mmHg}$ ($0{,}0313\\ \\text{atm}$); vapor = $0{,}0230\\ \\text{g}$"
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
          { paso: "Cambio de área (ambas caras): $$\\Delta A = 2 \\times 4{,}00\\ \\text{cm} \\times 5{,}00\\ \\text{cm} = 40{,}0\\ \\text{cm}^2 = 4{,}00 \\times 10^{-3}\\ \\text{m}^2$$", porque: "Calculamos el área de la película teniendo en cuenta que tiene dos caras: el área creada es el doble de $4{,}00\\ \\text{cm} \\times 5{,}00\\ \\text{cm}$. Como la tensión está en $\\frac{\\text{N}}{\\text{m}}$, expresamos el área en $\\text{m}^2$ y obtenemos $4{,}00 \\times 10^{-3}\\ \\text{m}^2$. Verificamos la conversión de $\\text{cm}^2$ a $\\text{m}^2$ antes de seguir." },
          { paso: "Energía: $$E = \\sigma \\times \\Delta A = 0{,}07275\\ \\frac{\\text{N}}{\\text{m}} \\times 4{,}00 \\times 10^{-3}\\ \\text{m}^2 = 2{,}91 \\times 10^{-4}\\ \\text{J}$$", porque: "La tensión superficial es energía por unidad de área, que en $\\frac{\\text{J}}{\\text{m}^2}$ equivale a $\\frac{\\text{N}}{\\text{m}}$, así que la energía es $\\sigma$ multiplicado por el área creada. Con $0{,}07275\\ \\frac{\\text{N}}{\\text{m}} \\times 4{,}00 \\times 10^{-3}\\ \\text{m}^2$ obtenemos $E = 2{,}91 \\times 10^{-4}\\ \\text{J}$, que es el trabajo necesario para estirar la película. Conviene revisar que el resultado quede en $\\text{J}$." }
        ],
        resultado: "$E = 2{,}91 \\times 10^{-4}\\ \\text{J}$"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "$$E = 0{,}0450\\ \\frac{\\text{N}}{\\text{m}} \\times 4{,}00 \\times 10^{-3}\\ \\text{m}^2 = 1{,}80 \\times 10^{-4}\\ \\text{J}$$", porque: "Usamos la misma área que en la parte a), pero con la nueva tensión del agua con detergente, $0{,}0450\\ \\frac{\\text{N}}{\\text{m}}$. Como el área no cambia, la diferencia en la energía proviene sólo de la tensión. Reemplazando obtenemos $E = 1{,}80 \\times 10^{-4}\\ \\text{J}$, y verificamos que $\\sigma$ esté en $\\frac{\\text{N}}{\\text{m}}$." },
          { paso: "La energía baja un $38\\ \\%$, porque el detergente reduce las fuerzas no compensadas en la superficie.", porque: "Como la energía es proporcional a la tensión, una tensión menor implica menos energía para crear la misma área. El detergente reduce las fuerzas no compensadas en la superficie, y por eso la energía baja. Entonces la reducción relativa de $2{,}91 \\times 10^{-4}\\ \\text{J}$ a $1{,}80 \\times 10^{-4}\\ \\text{J}$ es coherente con el cociente de tensiones." }
        ],
        resultado: "$E = 1{,}80 \\times 10^{-4}\\ \\text{J}$"
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
          { paso: "Suponga que todo el agua está como vapor a $40{,}0\\ ^\\circ\\text{C}$: $n = \\frac{0{,}100\\ \\text{g}}{18{,}0\\ \\text{g/mol}} = 5{,}56 \\times 10^{-3}\\ \\text{mol}$. $T = 313{,}15\\ \\text{K}$.", porque: "Suponemos que toda el agua está como vapor a $40{,}0\\ ^\\circ\\text{C}$ para ver si queda líquido, y calculamos $n = \\frac{0{,}100\\ \\text{g}}{18{,}0\\ \\text{g/mol}} = 5{,}56 \\times 10^{-3}\\ \\text{mol}$. Este supuesto nos da un punto de comparación, y la temperatura debe ir en kelvin, $313{,}15\\ \\text{K}$. Verificamos la masa molar del agua antes de dividir." },
          { paso: "$$P = \\frac{n \\cdot R \\cdot T}{V} = \\frac{5{,}56 \\times 10^{-3} \\times 0{,}0821 \\times 313{,}15}{4{,}00} = 0{,}0357\\ \\text{atm} = 27{,}1\\ \\text{mmHg}$$", porque: "Calculamos la presión que tendría ese vapor en $4{,}00\\ \\text{L}$ con $PV = nRT$, porque el resultado se compara con la presión de vapor a $40{,}0\\ ^\\circ\\text{C}$. Con $R = 0{,}0821$ y $T = 313{,}15\\ \\text{K}$ obtenemos $P = 0{,}0357\\ \\text{atm}$, equivalente a $27{,}1\\ \\text{mmHg}$. Este cálculo funciona como prueba de saturación, y conviene expresarlo en $\\text{mmHg}$ para compararlo con $55{,}3\\ \\text{mmHg}$." },
          { paso: "Como $27{,}1\\ \\text{mmHg} < 55{,}3\\ \\text{mmHg}$, no hay condensación: toda el agua está como vapor a $40{,}0\\ ^\\circ\\text{C}$.", porque: "Si la presión que tendría todo el vapor es menor que la presión de vapor, el vapor no se satura y no puede haber líquido. Como $27{,}1\\ \\text{mmHg}$ es menor que $55{,}3\\ \\text{mmHg}$, toda el agua está en vapor a $40{,}0\\ ^\\circ\\text{C}$. Este criterio es el mismo que usamos en todo el tema." }
        ],
        resultado: "Todo el agua está en vapor a $40{,}0\\ ^\\circ\\text{C}$ ($P = 27{,}1\\ \\text{mmHg}$)"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Máximo vapor a $25{,}0\\ ^\\circ\\text{C}$: $n_{\\max} = \\frac{\\frac{23{,}8}{760} \\times 4{,}00}{0{,}0821 \\times 298{,}15} = 5{,}12 \\times 10^{-3}\\ \\text{mol}$, es decir $5{,}12 \\times 10^{-3} \\times 18{,}0 = 0{,}0922\\ \\text{g}$.", porque: "Al enfriar, la presión de vapor baja a $23{,}8\\ \\text{mmHg}$, así que sólo puede quedar en vapor la cantidad que corresponde a ese valor en $4{,}00\\ \\text{L}$. Calculamos ese máximo con $PV = nRT$, obteniendo $5{,}12 \\times 10^{-3}\\ \\text{mol}$, y lo pasamos a gramos con $18{,}0\\ \\text{g/mol}$, lo que da $0{,}0922\\ \\text{g}$. Verificamos que la presión esté en atm." },
          { paso: "Masa líquida: $0{,}100 - 0{,}0922 = 7{,}8 \\times 10^{-3}\\ \\text{g}$ ($7{,}8\\ \\text{mg}$) de agua líquida.", porque: "El agua que supera el máximo de vapor condensa y queda como líquido. Por conservación de masa, restamos el vapor máximo de los $0{,}100\\ \\text{g}$ iniciales y obtenemos $7{,}8 \\times 10^{-3}\\ \\text{g}$. Conviene verificar que el resultado sea coherente con la masa inicial." }
        ],
        resultado: "Líquido a $25{,}0\\ ^\\circ\\text{C}$: $7{,}8 \\times 10^{-3}\\ \\text{g}$"
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
          { paso: "1-propanol: tiene un $\\text{H}$ unido a $\\text{O}$, con pares libres en el $\\text{O}$. Predomina el puente de hidrógeno, además de London.", porque: "En el 1-propanol hay un $\\text{H}$ unido a $\\text{O}$, lo que permite puentes de hidrógeno, y el $\\text{O}$ tiene pares libres que completan la interacción. Por eso el puente de hidrógeno es la fuerza predominante, además de London. Este dato es el que usamos después para comparar con el éter." },
          { paso: "Etil metil éter: el $\\text{O}$ está unido a dos carbonos y no tiene $\\text{H}$ unido a él. Predominan dipolo-dipolo (el enlace $\\text{C-O-C}$ es polar) y London.", porque: "En el éter el $\\text{O}$ está unido sólo a carbonos, así que no hay puente de hidrógeno. Como la molécula es polar por el enlace $\\text{C-O-C}$, aparecen dipolo-dipolo además de London. Esta distinción es la base de la comparación entre las dos sustancias." }
        ],
        resultado: "1-propanol: puente de hidrógeno + London; éter: dipolo-dipolo + London"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Ambos tienen la misma masa molar ($\\text{C}_3\\text{H}_8\\text{O}$), así que la diferencia viene sólo de las fuerzas intermoleculares.", porque: "Como las dos sustancias son isómeros, tienen la misma masa molar ($\\text{C}_3\\text{H}_8\\text{O}$), y la masa no sirve para explicar la diferencia. Las diferencias de comportamiento vienen de las fuerzas intermoleculares. Por eso comparamos las fuerzas y no la masa." },
          { paso: "El éter tiene fuerzas más débiles, así que tiene mayor presión de vapor y es más volátil.", porque: "A menor fuerza intermolecular, las moléculas escapan con más facilidad a la fase vapor. Como el éter tiene fuerzas más débiles, tiene mayor presión de vapor y es más volátil que el 1-propanol. Esta relación es inversa: más fuerza implica menor presión de vapor." },
          { paso: "El 1-propanol tiene puentes de hidrógeno: mayor viscosidad y mayor tensión superficial.", porque: "Las fuerzas intensas, como los puentes de hidrógeno, aumentan la resistencia a fluir (viscosidad) y la energía de la superficie (tensión superficial). Por eso el 1-propanol tiene valores más altos de ambas propiedades. Verificamos que la comparación se haga entre sustancias de la misma masa molar, que es el caso de los isómeros." }
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
          { paso: "$$P(\\text{H}_2\\text{O}) = \\text{HR} \\times P_{\\text{vap}} = 0{,}60 \\times 23{,}8\\ \\text{mmHg} = 14{,}3\\ \\text{mmHg} = 0{,}0188\\ \\text{atm}$$", porque: "La humedad relativa se define como el cociente entre la presión parcial del agua y la presión de vapor a esa temperatura. Multiplicamos $0{,}60$ por $23{,}8\\ \\text{mmHg}$ para obtener la presión parcial real del agua, que da $14{,}3\\ \\text{mmHg}$. Conviene verificar que el resultado sea menor que la presión de vapor, y lo convertimos a $0{,}0188\\ \\text{atm}$." },
          { paso: "Por Dalton, $P(\\text{aire seco}) = 1{,}00\\ \\text{atm} - 0{,}0188\\ \\text{atm} = 0{,}981\\ \\text{atm}$.", porque: "Por Dalton, la presión total del aire es la suma de la del vapor de agua y la del aire seco. Como la presión total es $1{,}00\\ \\text{atm}$, restamos $0{,}0188\\ \\text{atm}$ y obtenemos $0{,}981\\ \\text{atm}$ para el aire seco. Verificamos que todas las presiones estén en atm antes de restar." }
        ],
        resultado: "$P(\\text{H}_2\\text{O}) = 14{,}3\\ \\text{mmHg}$ ($0{,}0188\\ \\text{atm}$)"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "$T = 25{,}0 + 273{,}15 = 298{,}15\\ \\text{K}$. Moles de agua: $$n = \\frac{P \\cdot V}{R \\cdot T} = \\frac{0{,}0188 \\times 10{,}0}{0{,}0821 \\times 298{,}15} = 7{,}68 \\times 10^{-3}\\ \\text{mol}$$", porque: "Pasamos $25{,}0\\ ^\\circ\\text{C}$ a kelvin para la ecuación de gas ideal, porque es la escala absoluta que requiere $R = 0{,}0821$. Usamos la presión parcial del agua, $0{,}0188\\ \\text{atm}$, y no la total, porque sólo el vapor de agua aporta moles de agua. Con $V = 10{,}0\\ \\text{L}$ obtenemos $n = 7{,}68 \\times 10^{-3}\\ \\text{mol}$." },
          { paso: "Masa de agua: $$m = 7{,}68 \\times 10^{-3}\\ \\text{mol} \\times 18{,}0\\ \\text{g/mol} = 0{,}138\\ \\text{g}$$", porque: "Pasamos los $7{,}68 \\times 10^{-3}\\ \\text{mol}$ a gramos con la masa molar del agua, $18{,}0\\ \\text{g/mol}$, porque la masa molar convierte moles en gramos. Así resulta $0{,}138\\ \\text{g}$ de agua en forma de vapor en el recipiente. Conviene comprobar que la masa sea pequeña, como corresponde a un vapor a $25\\ ^\\circ\\text{C}$." }
        ],
        resultado: "$m(\\text{H}_2\\text{O vapor}) = 0{,}138\\ \\text{g}$"
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
          { paso: "Presión de vapor en atm: $\\frac{23{,}8}{760} = 0{,}0313\\ \\text{atm}$. $T = 298{,}15\\ \\text{K}$.", porque: "Pasamos la presión de vapor a atm dividiendo $23{,}8\\ \\text{mmHg}$ por $760$, y la temperatura a $298{,}15\\ \\text{K}$, para usar la ecuación de gas ideal con unidades coherentes. Así obtenemos $0{,}0313\\ \\text{atm}$, que es el dato clave del vapor saturado. Verificamos que la división por $760$ se haya hecho correctamente antes de continuar." },
          { paso: "Como hay líquido, el vapor está saturado: $n_{\\max} = \\frac{0{,}0313 \\times 5{,}00}{0{,}0821 \\times 298{,}15} = 6{,}40 \\times 10^{-3}\\ \\text{mol}$, es decir $0{,}115\\ \\text{g}$.", porque: "Como hay líquido en equilibrio, el vapor está saturado y la presión de vapor define el máximo de vapor que cabe en el volumen. Calculamos $n_{\\max} = \\frac{0{,}0313 \\times 5{,}00}{0{,}0821 \\times 298{,}15} = 6{,}40 \\times 10^{-3}\\ \\text{mol}$, y lo pasamos a gramos, $0{,}115\\ \\text{g}$. Esa cantidad no depende de la presencia del $\\text{N}_2$, que no modifica este valor." },
          { paso: "Masa líquida: $2{,}00 - 0{,}115 = 1{,}88\\ \\text{g}$.", porque: "Por conservación de masa, el agua que no está en vapor queda líquida. Restamos los $0{,}115\\ \\text{g}$ de vapor de los $2{,}00\\ \\text{g}$ totales y obtenemos $1{,}88\\ \\text{g}$ de líquido. Conviene verificar que la suma de vapor y líquido dé $2{,}00\\ \\text{g}$." }
        ],
        resultado: "Vapor: $0{,}115\\ \\text{g}$; líquido: $1{,}88\\ \\text{g}$"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Por Dalton: $P_{\\text{total}} = P(\\text{N}_2) + P(\\text{H}_2\\text{O vapor}) = 760\\ \\text{mmHg} + 23{,}8\\ \\text{mmHg} = 784\\ \\text{mmHg}$ ($1{,}03\\ \\text{atm}$).", porque: "Por Dalton, la presión total es la suma de las presiones parciales del $\\text{N}_2$ y del vapor de agua. Sumamos los $760\\ \\text{mmHg}$ del nitrógeno y los $23{,}8\\ \\text{mmHg}$ del vapor, lo que da $784\\ \\text{mmHg}$, equivalentes a $1{,}03\\ \\text{atm}$. Conviene expresar todas las presiones en la misma unidad antes de sumar." }
        ],
        resultado: "P total = $784\\ \\text{mmHg}$ ($1{,}03\\ \\text{atm}$)"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "$P(\\text{N}_2) = \\frac{n(\\text{N}_2) \\cdot R \\cdot T}{V}$: $n(\\text{N}_2)$, $T$ y $V$ no cambian (el $\\text{N}_2$ no se disuelve), así que $P(\\text{N}_2)$ sigue en $760\\ \\text{mmHg}$.", porque: "La presión parcial de un gas depende sólo de sus propios moles, del volumen y de la temperatura. Como el $\\text{N}_2$ no se disuelve ni cambia su cantidad, $n(\\text{N}_2)$, $T$ y $V$ no varían, y su presión parcial sigue en $760\\ \\text{mmHg}$. Esa independencia de los otros componentes es la base de la ley de Dalton." },
          { paso: "Lo que cambió es la presión total, por la contribución del vapor de agua.", porque: "Lo que cambia es la presión total, porque al sumarse el vapor de agua aparece una nueva contribución de $23{,}8\\ \\text{mmHg}$. Esto es la ley de Dalton aplicada a la mezcla. Entonces la presión parcial del $\\text{N}_2$ se mantiene en $760\\ \\text{mmHg}$, aunque la total pase a $784\\ \\text{mmHg}$." }
        ],
        resultado: "No cambió: la presión parcial del $\\text{N}_2$ sigue en $760\\ \\text{mmHg}$"
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
          { paso: "$$q = m \\cdot c \\cdot \\Delta T = 100{,}0\\ \\text{g} \\times 4{,}18\\ \\frac{\\text{J}}{\\text{g} \\cdot {}^\\circ\\text{C}} \\times (100{,}0 - 20{,}0)\\ {}^\\circ\\text{C} = 3{,}34 \\times 10^4\\ \\text{J} = 33{,}4\\ \\text{kJ}$$", porque: "Calculamos el calor para elevar la temperatura de $20{,}0\\ ^\\circ\\text{C}$ a $100{,}0\\ ^\\circ\\text{C}$ con $m \\cdot c \\cdot \\Delta T$, porque mientras no hay cambio de fase la energía sube la temperatura. Con $100{,}0\\ \\text{g}$ y $c = 4{,}18\\ \\frac{\\text{J}}{\\text{g} \\cdot {}^\\circ\\text{C}}$ usamos la diferencia $100{,}0 - 20{,}0\\ ^\\circ\\text{C}$ y obtenemos $33{,}4\\ \\text{kJ}$. El calor específico indica cuánta energía necesita cada gramo para subir $1\\ ^\\circ\\text{C}$, y conviene verificar la variación de temperatura." }
        ],
        resultado: "q(calentamiento) = $33{,}4\\ \\text{kJ}$"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "$$n = \\frac{100{,}0\\ \\text{g}}{18{,}0\\ \\text{g/mol}} = 5{,}56\\ \\text{mol}$$", porque: "Pasamos la masa a moles con la masa molar del agua, porque la entalpía de vaporización está dada por mol. Dividimos $100{,}0\\ \\text{g}$ por $18{,}0\\ \\text{g/mol}$ y obtenemos $5{,}56\\ \\text{mol}$, así el valor de $40{,}7\\ \\text{kJ/mol}$ se puede aplicar a los $100{,}0\\ \\text{g}$. Conviene verificar que $100{,}0 / 18{,}0$ dé $5{,}56\\ \\text{mol}$." },
          { paso: "$$q_{\\text{vap}} = n \\times \\Delta H_{\\text{vap}} = 5{,}56\\ \\text{mol} \\times 40{,}7\\ \\text{kJ/mol} = 226\\ \\text{kJ}$$", porque: "Durante el cambio de fase a $100\\ ^\\circ\\text{C}$ la temperatura no cambia, así que el calor es $n \\cdot \\Delta H_{\\text{vap}}$, y no usamos el calor específico. Multiplicamos $5{,}56\\ \\text{mol}$ por $40{,}7\\ \\text{kJ/mol}$ y obtenemos $226\\ \\text{kJ}$. Conviene verificar que el resultado esté en $\\text{kJ}$." }
        ],
        resultado: "$q_{\\text{vap}} = 226\\ \\text{kJ}$"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "$Q_{\\text{total}} = 33{,}4\\ \\text{kJ} + 226\\ \\text{kJ} = 2{,}60 \\times 10^2\\ \\text{kJ}$.", porque: "Como los dos tramos ocurren uno después del otro, el calor total es la suma de calentamiento y vaporización. Sumamos $33{,}4\\ \\text{kJ}$ y $226\\ \\text{kJ}$, y obtenemos $2{,}60 \\times 10^2\\ \\text{kJ}$. Verificamos que ambos valores estén en $\\text{kJ}$ antes de sumar." },
          { paso: "Por mol, calentar $80\\ ^\\circ\\text{C}$ cuesta $18{,}0\\ \\text{g/mol} \\times 4{,}18\\ \\frac{\\text{J}}{\\text{g} \\cdot {}^\\circ\\text{C}} \\times 80\\ {}^\\circ\\text{C} = 6{,}0\\ \\text{kJ}$, y vaporizar cuesta $40{,}7\\ \\text{kJ}$: unas $6{,}8$ veces más.", porque: "Comparamos el calor de calentar $80\\ ^\\circ\\text{C}$ con el de vaporizar un mol para ver qué proceso exige más energía. Calentar $18{,}0\\ \\text{g/mol}$ con $4{,}18\\ \\frac{\\text{J}}{\\text{g} \\cdot {}^\\circ\\text{C}}$ durante $80\\ ^\\circ\\text{C}$ cuesta $6{,}0\\ \\text{kJ}$, y vaporizar cuesta $40{,}7\\ \\text{kJ}$. Por eso la vaporización domina el consumo total, ya que debe vencer las fuerzas intermoleculares, mientras que calentar sólo aumenta la energía cinética." }
        ],
        resultado: "$Q_{\\text{total}} = 2{,}60 \\times 10^2\\ \\text{kJ}$; la vaporización domina por romper las FI"
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
          { paso: "Despejar: $$\\cos(\\theta) = \\frac{\\gamma_{\\text{sv}} - \\gamma_{\\text{sl}}}{\\gamma_{\\text{lv}}} = \\frac{0{,}0700 - 0{,}0300}{0{,}0728} = 0{,}549$$", porque: "Despejamos $\\cos(\\theta)$ de la ecuación de Young: la diferencia entre $\\gamma_{\\text{sv}}$ y $\\gamma_{\\text{sl}}$ se divide por $\\gamma_{\\text{lv}}$, y así aislamos el coseno, que es el único término con el ángulo. Con $\\frac{0{,}0700 - 0{,}0300}{0{,}0728}$ obtenemos $\\cos(\\theta) = 0{,}549$. Verificamos que las tres tensiones estén en $\\frac{\\text{N}}{\\text{m}}$ antes de dividir." },
          { paso: "$\\theta = \\arccos(0{,}549) = 56{,}7{}^\\circ$.", porque: "El ángulo se obtiene aplicando la función inversa del coseno al valor calculado, que es $0{,}549$. Así resulta $\\theta = 56{,}7{}^\\circ$, expresado en grados como pide el enunciado. Conviene revisar que la calculadora esté en modo grados." }
        ],
        resultado: "$\\theta = 56{,}7{}^\\circ$"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Como $\\theta < 90{}^\\circ$, $\\cos(\\theta) > 0$ y $\\gamma_{\\text{sv}} > \\gamma_{\\text{sl}}$: el líquido moja parcialmente la superficie.", porque: "Como $\\theta$ es menor que $90{}^\\circ$, el coseno es positivo, y eso implica que $\\gamma_{\\text{sv}}$ es mayor que $\\gamma_{\\text{sl}}$. Un ángulo menor a $90{}^\\circ$ indica que la adhesión líquido-sólido supera a la cohesión del líquido. Por eso concluimos que el líquido moja parcialmente la superficie." }
        ],
        resultado: "Sí moja parcialmente ($\\theta < 90{}^\\circ$)"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "$$\\cos(\\theta) = \\frac{0{,}0700 - 0{,}0300}{0{,}0350} = \\frac{0{,}0400}{0{,}0350} = 1{,}14$$", porque: "Aplicamos nuevamente la ecuación de Young, ahora con $\\gamma_{\\text{lv}} = 0{,}0350\\ \\frac{\\text{N}}{\\text{m}}$. Al disminuir $\\gamma_{\\text{lv}}$, el denominador se achica y el cociente crece, así que calculamos $\\frac{0{,}0700 - 0{,}0300}{0{,}0350}$ y obtenemos $1{,}14$. Verificamos que el numerador siga siendo $0{,}0400\\ \\frac{\\text{N}}{\\text{m}}$." },
          { paso: "Un coseno no puede ser mayor que $1$, así que no existe ángulo de equilibrio. La condición $\\gamma_{\\text{sv}} > \\gamma_{\\text{sl}} + \\gamma_{\\text{lv}}$ se cumple y el líquido se extiende hasta mojar completamente la superficie ($\\theta = 0{}^\\circ$).", porque: "El coseno resulta mayor que $1$, lo que indica que no existe un ángulo de equilibrio. Verificamos la condición $\\gamma_{\\text{sv}} > \\gamma_{\\text{sl}} + \\gamma_{\\text{lv}}$, que se cumple, por lo que la gota se extiende y moja completamente la superficie. Es la situación de mojado total, con $\\theta = 0{}^\\circ$." }
        ],
        resultado: "No hay ángulo de equilibrio: mojado total ($\\theta = 0{}^\\circ$)"
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
          { paso: "Hay líquido: el vapor está saturado y $P = 23{,}8\\ \\text{mmHg} = 0{,}0313\\ \\text{atm}$.", porque: "Como hay líquido, el vapor está saturado y la presión es la presión de vapor a esa temperatura. Usamos $23{,}8\\ \\text{mmHg}$, que pasamos a $0{,}0313\\ \\text{atm}$, y ese valor fija la presión del sistema mientras coexistan líquido y vapor. Verificamos que se use la presión de vapor correspondiente a $25{,}0\\ ^\\circ\\text{C}$." },
          { paso: "$n(\\text{vapor}) = \\frac{0{,}0313 \\times 3{,}00}{0{,}0821 \\times 298{,}15} = 3{,}84 \\times 10^{-3}\\ \\text{mol}$; masa $= 3{,}84 \\times 10^{-3} \\times 18{,}0 = 0{,}0691\\ \\text{g}$; líquido $= 1{,}00 - 0{,}0691 = 0{,}931\\ \\text{g}$.", porque: "Calculamos el vapor que cabe en $3{,}00\\ \\text{L}$ a la presión de vapor, con $n = 3{,}84 \\times 10^{-3}\\ \\text{mol}$ y masa $0{,}0691\\ \\text{g}$. El resto del agua líquida es el que queda por conservación de masa: $1{,}00 - 0{,}0691 = 0{,}931\\ \\text{g}$. Conviene verificar que la temperatura esté en kelvin, $298{,}15\\ \\text{K}$." }
        ],
        resultado: "Vapor: $0{,}0691\\ \\text{g}$; $P = 23{,}8\\ \\text{mmHg}$; líquido: $0{,}931\\ \\text{g}$"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "$T = 60{,}0 + 273{,}15 = 333{,}15\\ \\text{K}$. $P_{\\text{vap}} = 149{,}4\\ \\text{mmHg} = 0{,}197\\ \\text{atm}$.", porque: "Pasamos $60{,}0\\ ^\\circ\\text{C}$ a kelvin y $149{,}4\\ \\text{mmHg}$ a atm, obteniendo $0{,}197\\ \\text{atm}$, para usar la ecuación de gas ideal con coherencia. Como la presión de vapor sube con la temperatura, el valor cambia respecto del que teníamos a $25{,}0\\ ^\\circ\\text{C}$. Verificamos que las unidades sean consistentes en todo el cálculo." },
          { paso: "$n_{\\max} = \\frac{0{,}197 \\times 3{,}00}{0{,}0821 \\times 333{,}15} = 0{,}0216\\ \\text{mol} = 0{,}388\\ \\text{g}$. Como $0{,}388\\ \\text{g} < 1{,}00\\ \\text{g}$, sigue habiendo líquido.", porque: "Calculamos el máximo de vapor a $60\\ ^\\circ\\text{C}$ con $PV = nRT$, usando $P = 0{,}197\\ \\text{atm}$, $V = 3{,}00\\ \\text{L}$ y $T = 333{,}15\\ \\text{K}$, y obtenemos $0{,}0216\\ \\text{mol}$, es decir $0{,}388\\ \\text{g}$. Luego comparamos esa masa con el $1{,}00\\ \\text{g}$ disponible. Como $0{,}388\\ \\text{g}$ es menor que $1{,}00\\ \\text{g}$, sigue habiendo líquido, y la presión queda fijada en la presión de vapor." }
        ],
        resultado: "Vapor: $0{,}388\\ \\text{g}$; $P = 149{,}4\\ \\text{mmHg}$ ($0{,}197\\ \\text{atm}$)"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "Con $V$ constante y líquido presente, la presión total es la presión de vapor a cada temperatura. La presión sube de $23{,}8$ a $149{,}4\\ \\text{mmHg}$ porque la presión de vapor crece con $T$.", porque: "Con volumen constante y líquido presente, la presión total es la presión de vapor a la temperatura del sistema. La presión sube de $23{,}8$ a $149{,}4\\ \\text{mmHg}$ porque la presión de vapor aumenta con la temperatura, por el aumento de la energía de las moléculas. El volumen no interviene en este valor." },
          { paso: "La cantidad de agua ($1{,}00\\ \\text{g}$) no cambia la presión final, mientras quede líquido; sólo cambia la masa de vapor.", porque: "La cantidad de agua no cambia la presión mientras haya líquido, porque el sistema se reacomoda para mantener la presión de vapor. Sólo cambia la masa que queda en fase vapor, y por eso $1{,}00\\ \\text{g}$ de agua no modifica la presión final. Esto explica por qué la presión no depende de la cantidad de líquido." }
        ],
        resultado: "La presión depende de $T$, no del volumen ni de la cantidad de líquido (mientras haya líquido)"
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
          { paso: "Hexano: $n = \\frac{0{,}500}{86{,}2} = 5{,}80 \\times 10^{-3}\\ \\text{mol}$. Si todo fuera vapor a $293{,}15\\ \\text{K}$: $P = \\frac{5{,}80 \\times 10^{-3} \\times 0{,}0821 \\times 293{,}15}{1{,}00} = 0{,}140\\ \\text{atm} = 106\\ \\text{mmHg}$.", porque: "Calculamos los moles de hexano con su masa molar, $86{,}2\\ \\text{g/mol}$, y la presión que tendría si todo estuviera como vapor a $20{,}0\\ ^\\circ\\text{C}$. Dividimos $0{,}500\\ \\text{g}$ por $86{,}2\\ \\text{g/mol}$, obtenemos $5{,}80 \\times 10^{-3}\\ \\text{mol}$ y $P = 106\\ \\text{mmHg}$. Esa comparación indica si se alcanza la presión de vapor, y verificamos que la temperatura esté en kelvin." },
          { paso: "Como $106\\ \\text{mmHg} < 120\\ \\text{mmHg}$, no se alcanza la saturación: no queda líquido y la presión final es $106\\ \\text{mmHg}$.", porque: "Como la presión que tendría todo el vapor es menor que la presión de vapor, no se llega a la saturación. Por lo tanto no hay líquido y el hexano queda completamente en fase gaseosa, con una presión final de $106\\ \\text{mmHg}$. Este razonamiento aplica el criterio de saturación." },
          { paso: "Agua: $n = \\frac{0{,}500}{18{,}0} = 0{,}0278\\ \\text{mol}$. Si todo fuera vapor: $P = \\frac{0{,}0278 \\times 0{,}0821 \\times 293{,}15}{1{,}00} = 0{,}669\\ \\text{atm} = 508\\ \\text{mmHg}$, mayor que $17{,}5\\ \\text{mmHg}$.", porque: "Hacemos el mismo cálculo para el agua: con $0{,}0278\\ \\text{mol}$, la presión que tendría todo el vapor es $508\\ \\text{mmHg}$. Como esa presión supera los $17{,}5\\ \\text{mmHg}$ de vapor del agua, el exceso debe condensar. Verificamos que la comparación se haga a la misma temperatura." },
          { paso: "Agua: la presión final es la presión de vapor, $17{,}5\\ \\text{mmHg}$ ($0{,}0230\\ \\text{atm}$).", porque: "Con líquido presente, la presión final queda fijada en la presión de vapor a esa temperatura. Por eso la presión del agua es $17{,}5\\ \\text{mmHg}$, sin importar la cantidad total de líquido. Conviene expresar el resultado en las unidades del enunciado, en $\\text{mmHg}$." }
        ],
        resultado: "Hexano: sin líquido, $P = 106\\ \\text{mmHg}$; agua: con líquido, $P = 17{,}5\\ \\text{mmHg}$"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Vapor de agua: $n = \\frac{\\frac{17{,}5}{760} \\times 1{,}00}{0{,}0821 \\times 293{,}15} = 9{,}57 \\times 10^{-4}\\ \\text{mol} = 0{,}0172\\ \\text{g}$.", porque: "Calculamos el vapor máximo que cabe en $1{,}00\\ \\text{L}$ a la presión de vapor, usando la ecuación de gas ideal con $P = 17{,}5\\ \\text{mmHg}$ y $T = 293{,}15\\ \\text{K}$. Así obtenemos $9{,}57 \\times 10^{-4}\\ \\text{mol}$, equivalentes a $0{,}0172\\ \\text{g}$. Este paso determina cuánta agua puede estar en fase gaseosa, y verificamos que la presión esté en atm." },
          { paso: "Líquido: $0{,}500 - 0{,}0172 = 0{,}483\\ \\text{g}$.", porque: "Por conservación de masa, la masa que no está en vapor queda líquida. Restamos $0{,}0172\\ \\text{g}$ de vapor a los $0{,}500\\ \\text{g}$ totales, y obtenemos $0{,}483\\ \\text{g}$ de líquido en el recipiente de agua. Conviene comprobar que la suma de vapor y líquido sea $0{,}500\\ \\text{g}$." }
        ],
        resultado: "Líquido = $0{,}483\\ \\text{g}$"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "El hexano tiene presión de vapor mucho mayor, es decir, sus moléculas escapan más fácilmente: sus fuerzas intermoleculares son más débiles (sólo London).", porque: "El hexano tiene una presión de vapor mucho mayor que la del agua, lo que indica que sus moléculas escapan con más facilidad. Eso implica fuerzas intermoleculares más débiles, en este caso sólo London. Esta relación inversa, entre presión de vapor y fuerza, es la base de la comparación." },
          { paso: "El agua forma puentes de hidrógeno, que son mucho más intensos, y por eso tiene la presión de vapor más baja.", porque: "El agua forma puentes de hidrógeno, que son las interacciones más intensas entre las consideradas, y esa fuerza explica su presión de vapor más baja. Por eso el agua tiene fuerzas intermoleculares más intensas que el hexano. Verificamos que el $\\text{H}$ del agua esté unido a $\\text{O}$ para confirmar la interacción." }
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
          { paso: "$T = 298{,}15\\ \\text{K}$. Presión de vapor en atm: $\\frac{59{,}0}{760} = 0{,}0776\\ \\text{atm}$. Como hay líquido, el vapor está saturado.", porque: "Como hay líquido en equilibrio, el vapor está saturado y su presión es la presión de vapor del etanol a $25\\ ^\\circ\\text{C}$. Pasamos $59{,}0\\ \\text{mmHg}$ a atm, con $0{,}0776\\ \\text{atm}$, y la temperatura a $298{,}15\\ \\text{K}$ para usar $PV = nRT$. Este valor fija la presión mientras haya líquido." },
          { paso: "$n(\\text{vapor}) = \\frac{0{,}0776 \\times 10{,}0}{0{,}0821 \\times 298{,}15} = 3{,}17 \\times 10^{-2}\\ \\text{mol}$; masa $= 3{,}17 \\times 10^{-2}\\ \\text{mol} \\times 46{,}1\\ \\text{g/mol} = 1{,}46\\ \\text{g}$.", porque: "Usamos $PV = nRT$ con la presión de vapor en atm y el volumen de $10{,}0\\ \\text{L}$ para obtener los moles de vapor, y luego los pasamos a gramos con $46{,}1\\ \\text{g/mol}$. Así obtenemos $3{,}17 \\times 10^{-2}\\ \\text{mol}$, que equivalen a $1{,}46\\ \\text{g}$. Es la cantidad máxima de vapor que cabe en el recipiente a esa temperatura." },
          { paso: "Masa líquida: $5{,}00 - 1{,}46 = 3{,}54\\ \\text{g}$.", porque: "Por conservación de masa, la masa que no está en vapor queda como líquido. Restamos $1{,}46\\ \\text{g}$ de vapor a los $5{,}00\\ \\text{g}$ totales, y obtenemos $3{,}54\\ \\text{g}$ de líquido. Conviene verificar que el resultado sea positivo." }
        ],
        resultado: "Vapor: $1{,}46\\ \\text{g}$; líquido: $3{,}54\\ \\text{g}$"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "La presión total es la presión de vapor del etanol a $25\\ ^\\circ\\text{C}$: $59{,}0\\ \\text{mmHg}$ ($0{,}0776\\ \\text{atm}$).", porque: "La presión total es la presión de vapor del etanol a $25\\ ^\\circ\\text{C}$, porque líquido y vapor están en equilibrio. Esa presión no depende de la cantidad de líquido ni del volumen, mientras haya líquido. Por eso $P_{\\text{total}} = 59{,}0\\ \\text{mmHg}$ ($0{,}0776\\ \\text{atm}$), y verificamos que el valor esté en la unidad pedida." }
        ],
        resultado: "P total = $59{,}0\\ \\text{mmHg}$ ($0{,}0776\\ \\text{atm}$)"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "Al comprimir a $5{,}00\\ \\text{L}$, a $T$ constante, el vapor en exceso condensa. Como sigue habiendo líquido, $P$ sigue en $59{,}0\\ \\text{mmHg}$.", porque: "Al comprimir el recipiente, parte del vapor condensa, pero el sistema sigue saturado, y por eso la presión no cambia. Sigue siendo la presión de vapor de $59{,}0\\ \\text{mmHg}$. El volumen modifica la cantidad de vapor, no la presión de equilibrio." },
          { paso: "Masa de vapor a $5{,}00\\ \\text{L}$: $\\frac{1{,}46}{2} = 0{,}731\\ \\text{g}$; líquido: $5{,}00 - 0{,}731 = 4{,}27\\ \\text{g}$.", porque: "Como el volumen se reduce a la mitad, la cantidad de vapor que cabe a la misma presión también se reduce a la mitad. Tomamos el vapor de la parte a), $1{,}46\\ \\text{g}$, y lo dividimos por dos para obtener $0{,}731\\ \\text{g}$. Restando de los $5{,}00\\ \\text{g}$ totales, por conservación de masa, la masa líquida es $4{,}27\\ \\text{g}$." }
        ],
        resultado: "Vapor: $0{,}731\\ \\text{g}$; $P_{\\text{total}} = 59{,}0\\ \\text{mmHg}$"
      },
      {
        parte: "d)",
        pasos: [
          { paso: "Con $1{,}00\\ \\text{g}$: $n = \\frac{1{,}00}{46{,}1} = 0{,}0217\\ \\text{mol}$. Si todo se evaporara en $10{,}0\\ \\text{L}$: $P = \\frac{0{,}0217 \\times 0{,}0821 \\times 298{,}15}{10{,}0} = 0{,}0531\\ \\text{atm} = 40{,}4\\ \\text{mmHg}$.", porque: "Calculamos los moles de etanol con $1{,}00\\ \\text{g}$ y $46{,}1\\ \\text{g/mol}$, y la presión que tendría si todo se evaporara en $10{,}0\\ \\text{L}$. Obtenemos $n = 0{,}0217\\ \\text{mol}$ y $P = 40{,}4\\ \\text{mmHg}$, es decir $0{,}0531\\ \\text{atm}$, con $T = 298{,}15\\ \\text{K}$. Esta comparación nos permite verificar si se alcanza la presión de vapor." },
          { paso: "Como $40{,}4\\ \\text{mmHg} < 59{,}0\\ \\text{mmHg}$, no hay líquido: todo el etanol está como vapor y la presión final es $40{,}4\\ \\text{mmHg}$.", porque: "Como la presión de todo el vapor, $40{,}4\\ \\text{mmHg}$, es menor que la presión de vapor de $59{,}0\\ \\text{mmHg}$, no hay líquido. Entonces todo el etanol queda como vapor, y la presión final se calcula con los moles y el volumen. Este es el criterio que decide si hay líquido." }
        ],
        resultado: "P final = $40{,}4\\ \\text{mmHg}$ ($0{,}0531\\ \\text{atm}$), sin líquido"
      }
    ],
    errores_tipicos: [
      { error: "En c) suponer que al reducir el volumen a la mitad la presión se duplica, como en un gas ideal.", como_evitar: "Con líquido presente, la presión de vapor no cambia con el volumen; el vapor se condensa." },
      { error: "En d) suponer que con 1,00 g la presión sigue siendo 59,0 mmHg, sin verificar si hay líquido.", como_evitar: "Comparás la masa disponible con el máximo de vapor. Si es menor, no hay líquido y P = n.R.T/V." },
      { error: "Calcular todo el vapor sin comparar con la masa disponible, en a).", como_evitar: "Primero calculá el máximo de vapor a la presión de vapor, y después comparalo con la masa total." }
    ]
  }
];
