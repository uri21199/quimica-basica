window.EJERCITACION = window.EJERCITACION || {};

// Práctica de termodinámica: 20 ejercicios de dificultad creciente.
window.EJERCITACION["termodinamica"] = [
  {
    num: 1,
    nivel: "Básico",
    temas: ["termodinamica"],
    enunciado: "Un sistema recibe 250 J de calor desde el entorno. a) Si el entorno realiza 80 J de trabajo sobre el sistema, calcular la variación de energía interna del sistema. b) En otra situación, el mismo sistema absorbe 250 J de calor y se expande, realizando 120 J de trabajo sobre el entorno. Calcular ΔU en este caso. Usar la convención del sistema: Q > 0 si entra calor al sistema y W > 0 si el entorno realiza trabajo sobre el sistema.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Datos: $Q = +250\\ \\text{J}$ (entra calor) y $W = +80\\ \\text{J}$ (el entorno trabaja sobre el sistema).", porque: "Con la convención del sistema, el calor que entra es positivo y el trabajo hecho sobre el sistema también. Anotar los signos antes de sumar evita el error más común de este tema." },
          { paso: "$$\\Delta U = Q + W = 250\\ \\text{J} + 80\\ \\text{J} = 330\\ \\text{J}$$", porque: "Aplicamos el primer principio, $\\Delta U = Q + W$, que expresa la conservación de la energía. Como ambos aportes son positivos, la energía interna aumenta." }
        ],
        resultado: "ΔU = +330 J"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Datos: $Q = +250\\ \\text{J}$ y el sistema realiza trabajo sobre el entorno, así que $W = -120\\ \\text{J}$.", porque: "Cuando el sistema se expande y entrega trabajo al entorno, W es negativo por convención. Por eso no alcanza con el valor absoluto de 120 J: hay que cambiarle el signo." },
          { paso: "$$\\Delta U = 250\\ \\text{J} + (-120\\ \\text{J}) = 130\\ \\text{J}$$", porque: "Reemplazamos en $\\Delta U = Q + W$. La energía interna sube menos que en a) porque parte del calor se usa para realizar trabajo." }
        ],
        resultado: "ΔU = +130 J"
      }
    ],
    errores_tipicos: [
      { error: "En b) tomar W = +120 J porque 'es trabajo', y así sumarlo al calor.", como_evitar: "Con la convención del sistema, el trabajo que el sistema realiza sobre el entorno es negativo." },
      { error: "En a) concluir que el sistema pierde energía porque el entorno le hace trabajo.", como_evitar: "El trabajo hecho sobre el sistema es positivo y aumenta su energía interna, igual que el calor que entra." }
    ]
  },
  {
    num: 2,
    nivel: "Básico",
    temas: ["termodinamica"],
    enunciado: "Una muestra de aluminio de 120 g se calienta desde 20,0 °C hasta 85,0 °C. Dato: c(Al) = 0,900 J/(g x K). a) Calcular el calor absorbido por la muestra. b) Calcular la capacidad calorífica de la muestra.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "$$\\Delta T = 85{,}0 - 20{,}0 = 65{,}0\\ \\text{K}$$", porque: "La variación de temperatura se calcula como final menos inicial. Un intervalo de 1 °C equivale a 1 K, así que el ΔT se usa directamente con la unidad K." },
          { paso: "$$q = m \\cdot c \\cdot \\Delta T = 120\\ \\text{g} \\times 0{,}900\\ \\tfrac{\\text{J}}{\\text{g K}} \\times 65{,}0\\ \\text{K} = 7\\,020\\ \\text{J} = 7{,}02\\ \\text{kJ}$$", porque: "Usamos la ecuación del calor sensible, porque el aluminio no cambia de fase. El resultado es positivo porque la muestra absorbe calor." }
        ],
        resultado: "q = +7,02 kJ"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "$$C = m \\cdot c = 120\\ \\text{g} \\times 0{,}900\\ \\text{J/(g K)} = 108\\ \\text{J/K}$$", porque: "La capacidad calorífica de una muestra es el producto de su masa por el calor específico, y se expresa en J/K. Es una propiedad de la muestra completa, no del material por gramo." },
          { paso: "$$q = C \\cdot \\Delta T = 108\\ \\text{J/K} \\times 65{,}0\\ \\text{K} = 7\\,020\\ \\text{J}$$", porque: "Verificamos que con C se obtiene el mismo calor que en a). Si no coincide, hay un error de masa o de ΔT." }
        ],
        resultado: "C = 108 J/K"
      }
    ],
    errores_tipicos: [
      { error: "Calcular ΔT como inicial menos final y obtener un calor negativo para una muestra que se calienta.", como_evitar: "$\\Delta T = T_{\\text{final}} - T_{\\text{inicial}}$. El signo de q debe coincidir con si el cuerpo gana o cede calor." },
      { error: "En b) dar la capacidad calorífica por gramo (0,900 J/(g K)) en lugar de la de la muestra completa (108 J/K).", como_evitar: "Multiplicar siempre la masa por c para obtener C en J/K." }
    ]
  },
  {
    num: 3,
    nivel: "Básico",
    temas: ["termodinamica"],
    enunciado: "Se tienen 36,0 g de hielo a 0 °C y 1 atm. Calcular el calor necesario para transformarlo en agua líquida a 25,0 °C a la misma presión. Datos: ΔH(fusión) del agua = 6,02 kJ/mol; M(H2O) = 18,0 g/mol; c(H2O, l) = 4,18 J/(g x K).",
    resolucion: [
      {
        parte: "",
        pasos: [
          { paso: "$$n = \\frac{36{,}0\\ \\text{g}}{18{,}0\\ \\text{g/mol}} = 2{,}00\\ \\text{mol}$$", porque: "Pasamos la masa a moles porque la entalpía de fusión está dada por mol. Así evitamos mezclar gramos con kJ/mol." },
          { paso: "Fusión a 0 °C: $$q_1 = n \\cdot \\Delta H_{\\text{fus}} = 2{,}00\\ \\text{mol} \\times 6{,}02\\ \\text{kJ/mol} = 12{,}04\\ \\text{kJ}$$", porque: "A 0 °C el hielo funde sin cambiar la temperatura, así que el calor es latente. Lo calculamos con la entalpía molar de fusión." },
          { paso: "Calentamiento del agua de 0 °C a 25,0 °C: $$q_2 = m \\cdot c \\cdot \\Delta T = 36{,}0\\ \\text{g} \\times 4{,}18\\ \\text{J/(g K)} \\times 25{,}0\\ \\text{K} = 3\\,762\\ \\text{J} = 3{,}76\\ \\text{kJ}$$", porque: "Una vez fundido, el agua líquida sube de temperatura y el calor es sensible. Usamos la masa en gramos y el calor específico del agua líquida, no el del hielo." },
          { paso: "$$q_{\\text{total}} = 12{,}04\\ \\text{kJ} + 3{,}76\\ \\text{kJ} = 15{,}80\\ \\text{kJ}$$", porque: "El proceso total es la suma de la fusión y del calentamiento posterior, y los dos absorben calor. Por eso sumamos ambos aportes." }
        ],
        resultado: "q total = +15,80 kJ (absorbidos por el agua)"
      }
    ],
    errores_tipicos: [
      { error: "Olvidar la etapa de fusión y calcular solo el calentamiento del agua.", como_evitar: "Un cambio de fase a temperatura constante siempre suma su propio calor latente, aunque la temperatura final no lo muestre." },
      { error: "Usar el ΔH de fusión con la masa en gramos, sin pasarla a moles.", como_evitar: "La entalpía de fusión está en kJ/mol: primero calculá n = m / M." }
    ]
  },
  {
    num: 4,
    nivel: "Básico",
    temas: ["termodinamica", "reacciones"],
    enunciado: "Dadas las siguientes ecuaciones termoquímicas a 25 °C y 1 atm: (1) C(s) + O2(g) -> CO2(g)   ΔH = -393,5 kJ; (2) 2 CO(g) + O2(g) -> 2 CO2(g)   ΔH = -566,0 kJ. Calcular ΔH de la reacción C(s) + 1/2 O2(g) -> CO(g) aplicando la ley de Hess.",
    resolucion: [
      {
        parte: "",
        pasos: [
          { paso: "La ecuación (1) se usa tal como está: aporta C(s) como reactivo y CO2(g) como producto.", porque: "La reacción objetivo tiene C(s) como reactivo, y la ecuación (1) también. Empezar por ella nos deja combinar el resto para eliminar el CO2." },
          { paso: "La ecuación (2) se divide entre 2 y se invierte: $$\\text{CO}_2\\text{(g)} \\rightarrow \\text{CO(g)} + \\tfrac{1}{2}\\,\\text{O}_2\\text{(g)} \\qquad \\Delta H = +283{,}0\\ \\text{kJ}$$", porque: "Dividir la ecuación entre 2 divide su ΔH entre 2: -566,0 / 2 = -283,0. Al invertirla, el signo cambia y queda +283,0 kJ." },
          { paso: "$$\\Delta H = -393{,}5\\ \\text{kJ} + 283{,}0\\ \\text{kJ} = -110{,}5\\ \\text{kJ}$$", porque: "Al sumar (1) y la ecuación invertida, el CO2 se cancela y el CO queda como producto. Sumamos las entalpías de ambas ecuaciones para obtener la de la reacción objetivo." }
        ],
        resultado: "ΔH = -110,5 kJ por mol de CO formado (exotérmica)"
      }
    ],
    errores_tipicos: [
      { error: "Dividir la ecuación (2) entre 2 pero no el ΔH, o invertirla sin cambiar el signo de su ΔH.", como_evitar: "Cada operación con la ecuación se aplica también a su ΔH: dividir entre 2 divide el ΔH, e invertir cambia el signo." },
      { error: "Sumar (1) y (2) sin ajustar la ecuación (2), lo que deja el CO2 como producto en la ecuación final.", como_evitar: "Verificá que en la suma final las especies que no son de la reacción objetivo (como el CO2) se cancelen." }
    ]
  },
  {
    num: 5,
    nivel: "Básico",
    temas: ["termodinamica", "reacciones"],
    enunciado: "En la primera etapa de la producción de ácido nítrico, el amoníaco se oxida según: 4 NH3(g) + 5 O2(g) -> 4 NO(g) + 6 H2O(g). Datos de ΔHf° a 25 °C: NH3(g) = -46,1 kJ/mol; NO(g) = +90,3 kJ/mol; H2O(g) = -241,8 kJ/mol. Calcular ΔH° de la reacción tal como está escrita y por mol de NH3 que reacciona.",
    resolucion: [
      {
        parte: "",
        pasos: [
          { paso: "$$\\sum n\\,\\Delta H_f^\\circ(\\text{productos}) = 4 \\times 90{,}3 + 6 \\times (-241{,}8) = 361{,}2 - 1\\,450{,}8 = -1\\,089{,}6\\ \\text{kJ}$$", porque: "Multiplicamos cada ΔHf por su coeficiente y sumamos. El O2 no aparece porque es un elemento en su forma estable, con ΔHf = 0." },
          { paso: "$$\\sum n\\,\\Delta H_f^\\circ(\\text{reactivos}) = 4 \\times (-46{,}1) = -184{,}4\\ \\text{kJ}$$", porque: "Hacemos lo mismo con los reactivos. Solo el NH3 tiene ΔHf distinta de cero, porque el O2 es un elemento." },
          { paso: "$$\\Delta H^\\circ_r = (-1\\,089{,}6) - (-184{,}4) = -905{,}2\\ \\text{kJ}$$, y por mol de NH3: $-905{,}2 / 4 = -226{,}3\\ \\text{kJ/mol}$", porque: "Aplicamos $\\Delta H^\\circ_r = \\sum$ productos $- \\sum$ reactivos. Como la ecuación tiene 4 mol de NH3, dividimos por 4 para la entalpía por mol." }
        ],
        resultado: "ΔH° = -905,2 kJ (para 4 mol de NH3); -226,3 kJ por mol de NH3 (exotérmica)"
      }
    ],
    errores_tipicos: [
      { error: "No multiplicar las ΔHf por los coeficientes (los 4 NO y los 6 H2O).", como_evitar: "Escribí cada término como n · ΔHf antes de sumar." },
      { error: "Restar al revés, Σ reactivos − Σ productos, y obtener un signo opuesto.", como_evitar: "ΔH°_r = Σ productos − Σ reactivos, siempre." }
    ]
  },
  {
    num: 6,
    nivel: "Básico",
    temas: ["termodinamica"],
    enunciado: "Se disuelve nitrato de amonio, NH4NO3(s), en agua dentro de un vaso de precipitados a presión atmosférica. Al tacto, el vaso se siente frío. a) ¿El proceso es exotérmico o endotérmico desde el punto de vista del sistema (la disolución)? b) ¿Qué signo tiene ΔH del proceso de disolución? c) ¿El proceso inverso (la sal que vuelve a separarse de la solución) tiene un ΔH de signo igual o contrario? Justificar.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "El vaso se enfría, así que el entorno (vaso y agua) pierde calor. El calor pasa del entorno hacia el sistema, y el sistema lo absorbe.", porque: "Un proceso es exotérmico si el sistema cede calor al entorno, y endotérmico si lo absorbe. Usamos la sensación térmica del vaso para deducir hacia dónde fluye el calor." },
          { paso: "Conclusión: el proceso es endotérmico.", porque: "Si el entorno se enfría, el calor fluyó hacia la disolución. Con esto identificamos el tipo de proceso antes de asignar un signo a ΔH." }
        ],
        resultado: "Endotérmico: el sistema absorbe calor del entorno"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Como el sistema absorbe calor, $q_P > 0$; y a presión constante $q_P = \\Delta H$.", porque: "A presión constante el calor del proceso es igual a ΔH. El vaso frío confirma que el calor entra al sistema." },
          { paso: "Por lo tanto $\\Delta H(\\text{disolución}) > 0$.", porque: "La convención de signos asigna ΔH positivo a los procesos que absorben calor. Así el signo queda justificado y no solo asumido." }
        ],
        resultado: "ΔH(disolución) > 0"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "La cristalización es el proceso inverso de la disolución, así que la sal que se forma libera el calor que la disolución había absorbido.", porque: "Revertir un proceso invierte el sentido del flujo de calor. Por eso el sentido inverso es exotérmico." },
          { paso: "$\\Delta H_{\\text{cristalización}} = -\\Delta H_{\\text{disolución}} < 0$.", porque: "Un proceso directo y su inverso tienen la misma magnitud de ΔH con signo opuesto. Así ΔH es negativo en la cristalización." }
        ],
        resultado: "ΔH(cristalización) < 0: signo opuesto al de la disolución"
      }
    ],
    errores_tipicos: [
      { error: "Confundir el sentido de la transferencia de calor: decir que el sistema pierde calor porque el vaso se enfría.", como_evitar: "Si el entorno se enfría, el calor fue hacia el sistema: el proceso es endotérmico." },
      { error: "Asignar ΔH < 0 a todo proceso que ocurre solo, confundiendo espontaneidad con signo de ΔH.", como_evitar: "El signo de ΔH indica si el proceso libera o absorbe calor. La espontaneidad depende de otra magnitud, que no se estudia con ΔH solo." }
    ]
  },
  {
    num: 7,
    nivel: "Intermedio",
    temas: ["termodinamica", "magnitudes"],
    enunciado: "Un trozo de hierro de 50,0 g que está a 150 °C se sumerge en 200,0 g de agua a 20,0 °C, contenidos en un calorímetro adiabático. Se alcanza el equilibrio térmico. Datos: c(Fe) = 0,449 J/(g x K); c(H2O, l) = 4,18 J/(g x K). a) Calcular la temperatura final del sistema. b) Calcular el calor ganado por el agua.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Balance calorimétrico: $$Q_{\\text{Fe}} + Q_{\\text{H}_2\\text{O}} = 0$$", porque: "En un calorímetro adiabático, el calor que cede el hierro es el que gana el agua. Por eso la suma de los dos calores es cero." },
          { paso: "$$50{,}0 \\times 0{,}449\\,(T_{\\text{f}} - 150) + 200{,}0 \\times 4{,}18\\,(T_{\\text{f}} - 20{,}0) = 0$$", porque: "Escribimos $Q = m\\,c\\,\\Delta T$ para cada cuerpo, con $\\Delta T = T_{\\text{final}} - T_{\\text{inicial}}$. Así cada signo indica si el cuerpo gana o cede calor." },
          { paso: "$$22{,}45\\,T_{\\text{f}} - 3\\,367{,}5 + 836{,}0\\,T_{\\text{f}} - 16\\,720 = 0 \\;\\Rightarrow\\; T_{\\text{f}} = \\frac{20\\,087{,}5}{858{,}45} = 23{,}4\\ \\text{°C}$$", porque: "Multiplicamos cada término y agrupamos las $T_{\\text{f}}$ de un lado y las constantes del otro. Verificamos que el resultado queda entre 20,0 °C y 150 °C." }
        ],
        resultado: "T final = 23,4 °C"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "$$q_{\\text{agua}} = 200{,}0 \\times 4{,}18 \\times (23{,}4 - 20{,}0) = 2\\,842\\ \\text{J} = 2{,}84\\ \\text{kJ}$$", porque: "El agua gana calor porque sube de temperatura. Usamos el ΔT de 3,4 K que obtuvimos en a)." },
          { paso: "Comprobación con el hierro: $$q_{\\text{Fe}} = 50{,}0 \\times 0{,}449 \\times (23{,}4 - 150) = -2\\,842\\ \\text{J}$$", porque: "El hierro cede exactamente el mismo calor que gana el agua. Esta comprobación confirma el resultado de a)." }
        ],
        resultado: "q(agua) = +2,84 kJ; el hierro cede 2,84 kJ"
      }
    ],
    errores_tipicos: [
      { error: "Tomar ΔT del hierro como 150 − T_f (signo invertido) y sumar los calores en lugar de igualarlos a cero.", como_evitar: "Con ΔT = T_final − T_inicial, el balance es Q_1 + Q_2 = 0, y el hierro tiene ΔT negativo." },
      { error: "Despejar mal T_f: pasar 150 o 20 sin multiplicar por la masa y el calor específico de cada cuerpo.", como_evitar: "Desarrollá los productos m·c primero, y después agrupá los términos con T_f." }
    ]
  },
  {
    num: 8,
    nivel: "Intermedio",
    temas: ["termodinamica", "magnitudes"],
    enunciado: "El hidrógeno gaseoso se usa como combustible. Las entalpías de combustión a 25 °C y 1 atm son: H2(g) + 1/2 O2(g) -> H2O(l), ΔH = -285,8 kJ/mol; H2(g) + 1/2 O2(g) -> H2O(g), ΔH = -241,8 kJ/mol. Dato: M(H2) = 2,016 g/mol. a) Calcular el PCS y el PCI del hidrógeno, en MJ/kg. b) Calcular la masa de agua, de 20,0 °C a 80,0 °C, que puede calentarse con el 60 % del PCI de 1,00 kg de H2. Suponer que el agua no se evapora y que c(H2O, l) = 4,18 J/(g x K).",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "$$n = \\frac{1\\,000\\ \\text{g}}{2{,}016\\ \\text{g/mol}} = 496{,}0\\ \\text{mol}$$", porque: "Las entalpías son por mol, así que primero pasamos el kilogramo de H2 a moles. Usamos la masa molar del hidrógeno molecular." },
          { paso: "PCS (agua líquida): $$496{,}0 \\times 285{,}8\\ \\text{kJ} = 1{,}418 \\times 10^{5}\\ \\text{kJ} = 141{,}8\\ \\text{MJ/kg}$$", porque: "El PCS supone que el agua de los humos queda líquida, así que usamos el ΔH con H2O(l). Por eso libera más calor." },
          { paso: "PCI (agua como vapor): $$496{,}0 \\times 241{,}8\\ \\text{kJ} = 1{,}199 \\times 10^{5}\\ \\text{kJ} = 119{,}9\\ \\text{MJ/kg}$$", porque: "El PCI supone que el agua queda como vapor, así que usamos el ΔH con H2O(g). Es menor porque no se recupera el calor de condensación." },
          { paso: "Control: PCS − PCI = $496{,}0 \\times 44{,}0\\ \\text{kJ} = 21{,}8\\ \\text{MJ/kg}$, que es el calor de condensación de esa agua.", porque: "La diferencia entre PCS y PCI es el calor de condensación de las moles de agua formadas. Verificarla evita errores de signo o de moles." }
        ],
        resultado: "PCS = 141,8 MJ/kg; PCI = 119,9 MJ/kg"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Calor disponible: $$q = 0{,}60 \\times 119{,}94\\ \\text{MJ} = 71{,}96\\ \\text{MJ} = 7{,}196 \\times 10^{4}\\ \\text{kJ}$$", porque: "Tomamos el 60 % del PCI, que es el calor realmente aprovechado. Usamos el valor sin redondear de a) para no perder precisión." },
          { paso: "$$\\frac{m}{1\\ \\text{kg}} = \\frac{71\\,960\\ \\text{kJ}}{4{,}18\\ \\text{kJ/(kg K)} \\times 60{,}0\\ \\text{K}} = 286{,}9\\ \\text{kg}$$", porque: "Igualamos el calor disponible con m · c · ΔT. Pasamos c a kJ/(kg K) para que las unidades coincidan con la masa en kg." }
        ],
        resultado: "Se pueden calentar unos 286,9 kg de agua (≈ 287 kg)"
      }
    ],
    errores_tipicos: [
      { error: "Usar ΔH con agua líquida para el PCI, o con vapor para el PCS.", como_evitar: "PCS: agua líquida (ΔH más negativo). PCI: agua de vapor (ΔH menos negativo)." },
      { error: "Usar 1 kg como si fueran 1 mol, sin dividir por la masa molar.", como_evitar: "Las entalpías de combustión son por mol: convertí primero la masa a moles." },
      { error: "En b) mezclar unidades: c en J/(g K) con la masa en kg, sin revisar antes de dividir.", como_evitar: "Verificá que las unidades de c y de m sean compatibles. Con kJ/(kg K) y kg, el resultado sale en kg." }
    ]
  },
  {
    num: 9,
    nivel: "Intermedio",
    temas: ["termodinamica", "reacciones"],
    enunciado: "A 25 °C y 1 atm se conocen las siguientes ecuaciones: (1) C2H4(g) + 3 O2(g) -> 2 CO2(g) + 2 H2O(l)   ΔH = -1 411,0 kJ; (2) C2H6(g) + 7/2 O2(g) -> 2 CO2(g) + 3 H2O(l)   ΔH = -1 560,0 kJ; (3) H2(g) + 1/2 O2(g) -> H2O(l)   ΔH = -285,8 kJ. a) Calcular ΔH de la reacción C2H4(g) + H2(g) -> C2H6(g). b) Calcular el calor que se libera al hidrogenar 10,0 g de C2H4 con H2 en exceso. Dato: M(C2H4) = 28,05 g/mol.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Ecuación (2) invertida: $$2\\,\\text{CO}_2\\text{(g)} + 3\\,\\text{H}_2\\text{O(l)} \\rightarrow \\text{C}_2\\text{H}_6\\text{(g)} + \\tfrac{7}{2}\\,\\text{O}_2\\text{(g)} \\qquad \\Delta H = +1\\,560{,}0\\ \\text{kJ}$$", porque: "La reacción objetivo tiene C2H6 como producto, y en la ecuación (2) es reactivo. Por eso la invertimos, lo que cambia el signo de su ΔH." },
          { paso: "Sumamos (1), (3) y la (2) invertida. Los CO2, H2O y O2 se cancelan: $$\\Delta H = -1\\,411{,}0 + (-285{,}8) + 1\\,560{,}0 = -136{,}8\\ \\text{kJ}$$", porque: "Hess permite sumar ecuaciones con sus ΔH. Verificamos que las especies que no pertenecen a la reacción objetivo se cancelen entre productos y reactivos." }
        ],
        resultado: "ΔH = -136,8 kJ por mol de C2H6 formado (exotérmica)"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "$$n = \\frac{10{,}0\\ \\text{g}}{28{,}05\\ \\text{g/mol}} = 0{,}3565\\ \\text{mol}$$", porque: "El ΔH está dado por mol de C2H4, así que primero pasamos los gramos a moles." },
          { paso: "$$q = 0{,}3565\\ \\text{mol} \\times (-136{,}8\\ \\text{kJ/mol}) = -48{,}77\\ \\text{kJ}$$", porque: "Multiplicamos los moles por el ΔH de a). El signo negativo indica que el calor sale del sistema, es decir, se libera." }
        ],
        resultado: "Se liberan 48,8 kJ"
      }
    ],
    errores_tipicos: [
      { error: "No invertir la ecuación (2) al usarla en la suma, o invertirla sin cambiar el signo de su ΔH.", como_evitar: "Al invertir una ecuación, su ΔH cambia de signo. Revisá que la especie objetivo quede en el lado correcto." },
      { error: "Sumar (1) y (2) sin invertir una de ellas, y obtener -2 971 kJ en lugar de -136,8 kJ.", como_evitar: "Las ecuaciones se suman en el sentido en que se necesitan para la reacción objetivo, no como están escritas." },
      { error: "En b) usar los gramos directamente con el ΔH por mol, sin pasar a moles.", como_evitar: "ΔH está en kJ/mol: convertí primero la masa a moles con la masa molar." }
    ]
  },
  {
    num: 10,
    nivel: "Intermedio",
    temas: ["termodinamica", "reacciones"],
    enunciado: "Para obtener cal viva (CaO) se descompone carbonato de calcio: CaCO3(s) -> CaO(s) + CO2(g). Datos a 25 °C y 1 atm: ΔHf(CaCO3, s) = -1 206,9 kJ/mol; ΔHf(CaO, s) = -635,1 kJ/mol; ΔHf(CO2, g) = -393,5 kJ/mol. Dato: M(CaCO3) = 100,1 g/mol. a) Calcular ΔH de la reacción e indicar si es exotérmica o endotérmica. b) Calcular el calor involucrado al descomponer 50,0 g de CaCO3.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "$$\\Delta H^\\circ_r = [\\Delta H_f(\\text{CaO}) + \\Delta H_f(\\text{CO}_2)] - \\Delta H_f(\\text{CaCO}_3)$$", porque: "Usamos $\\Delta H^\\circ_r = \\sum$ productos $- \\sum$ reactivos, con todos los coeficientes iguales a 1. El CaCO3 es reactivo, así que se resta." },
          { paso: "$$\\Delta H^\\circ_r = (-635{,}1 - 393{,}5) - (-1\\,206{,}9) = -1\\,028{,}6 + 1\\,206{,}9 = +178{,}3\\ \\text{kJ}$$", porque: "Reemplazamos los valores. Restar un número negativo lo vuelve positivo, por eso el resultado final es positivo." }
        ],
        resultado: "ΔH° = +178,3 kJ/mol (endotérmica)"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "$$n = \\frac{50{,}0\\ \\text{g}}{100{,}1\\ \\text{g/mol}} = 0{,}4995\\ \\text{mol}$$", porque: "La entalpía de reacción está dada por mol de CaCO3, así que pasamos los gramos a moles." },
          { paso: "$$q = 0{,}4995\\ \\text{mol} \\times 178{,}3\\ \\text{kJ/mol} = 89{,}06\\ \\text{kJ} \\approx 89{,}1\\ \\text{kJ}$$", porque: "Como la reacción es endotérmica, el sistema absorbe este calor. Multiplicamos los moles por el ΔH de a)." }
        ],
        resultado: "Se absorben unos 89,1 kJ"
      }
    ],
    errores_tipicos: [
      { error: "Usar Σ reactivos − Σ productos con las ΔHf, y obtener −178,3 kJ/mol.", como_evitar: "Para ΔHf la fórmula es Σ productos − Σ reactivos. La inversa vale solo para ΔHc." },
      { error: "Decir que la descomposición es exotérmica porque 'hay que calentar' o porque el gas se libera.", como_evitar: "El signo de ΔH sale del cálculo con las ΔHf, no de la idea de calentar o de liberar gas." },
      { error: "En b) multiplicar la masa en gramos por el ΔH en kJ/mol, sin convertir a moles.", como_evitar: "Siempre pasá los gramos a moles con la masa molar antes de usar un ΔH molar." }
    ]
  },
  {
    num: 11,
    nivel: "Intermedio",
    temas: ["termodinamica", "gases"],
    enunciado: "A 25 °C, para la reacción 2 NO(g) + O2(g) -> 2 NO2(g) se conoce ΔH° = -114,1 kJ (reacción tal como está escrita). Considerar todos los gases como ideales. a) Calcular ΔU para la reacción tal como está escrita. b) Calcular el calor a volumen constante que se libera cuando reaccionan 0,300 mol de O2.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Variación de moles gaseosos: $$\\Delta n = 2 - (2 + 1) = -1$$", porque: "Contamos solo los gases: 2 mol de NO2 en productos, y 2 mol de NO más 1 mol de O2 en reactivos. Esa diferencia es la que relaciona ΔH con ΔU." },
          { paso: "$$\\Delta H = \\Delta U + \\Delta n\\,R\\,T \\;\\Rightarrow\\; \\Delta U = \\Delta H - \\Delta n\\,R\\,T$$", porque: "A partir de H = U + PV, para gases ideales a presión y temperatura constantes, ΔH = ΔU + Δn·R·T. Despejamos ΔU." },
          { paso: "$$\\Delta U = -114{,}1 - (-1)(8{,}314 \\times 10^{-3}\\ \\text{kJ/(mol K)})(298{,}15\\ \\text{K}) = -114{,}1 + 2{,}48 = -111{,}6\\ \\text{kJ}$$", porque: "Usamos R en kJ/(mol·K) para que las unidades coincidan con ΔH. T = 298,15 K corresponde a 25 °C." }
        ],
        resultado: "ΔU = -111,6 kJ (por reacción tal como está escrita)"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Por cada 1 mol de O2 que reacciona según la ecuación, $\\Delta U = -111{,}6\\ \\text{kJ}$. Como hay 0,300 mol de O2, la reacción se usa 0,300 veces.", porque: "El coeficiente del O2 es 1, así que los moles de O2 que reaccionan indican cuántas veces se 'cumple' la ecuación. Esa es la escala que aplicamos al ΔU de a)." },
          { paso: "$$q_V = 0{,}300 \\times (-111{,}6\\ \\text{kJ}) = -33{,}5\\ \\text{kJ}$$", porque: "A volumen constante el calor es igual a ΔU, no a ΔH. El signo negativo indica que el calor sale del sistema." }
        ],
        resultado: "q(V) = -33,5 kJ (se liberan 33,5 kJ)"
      }
    ],
    errores_tipicos: [
      { error: "Calcular Δn contando el O2 como producto (Δn = +1), o contando todos los coeficientes en lugar de los gases.", como_evitar: "Δn = moles de gas en productos − moles de gas en reactivos, con los coeficientes de la ecuación balanceada." },
      { error: "En b) usar ΔH en lugar de ΔU porque el enunciado habla de calor.", como_evitar: "A volumen constante el calor es ΔU. A presión constante, el calor es ΔH." },
      { error: "Usar R = 0,0821 L·atm/(mol·K) con ΔH en kJ, sin convertir unidades.", como_evitar: "Elegí R en la unidad de la energía que estés usando: 8,314 J/(mol·K) o 8,314 x 10^-3 kJ/(mol·K)." }
    ]
  },
  {
    num: 12,
    nivel: "Intermedio",
    temas: ["termodinamica", "gases"],
    enunciado: "Un gas ideal monoatómico (Cv = 3/2 R; Cp = 5/2 R) se calienta a presión constante de 1,00 atm. Hay 2,00 mol y la temperatura pasa de 300 K a 400 K, absorbiendo 4,16 kJ de calor. a) Calcular el trabajo de expansión y la variación de energía interna del gas. b) Calcular la variación de entalpía del proceso.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "$$W = -P_{\\text{ext}}\\,\\Delta V = -n\\,R\\,\\Delta T = -2{,}00 \\times 8{,}314\\ \\text{J/K} \\times 100\\ \\text{K} = -1\\,663\\ \\text{J} = -1{,}66\\ \\text{kJ}$$", porque: "A presión externa constante igual a la del gas, PΔV = nRΔT para un gas ideal. El signo negativo indica que el gas se expande y realiza trabajo sobre el entorno." },
          { paso: "$$\\Delta U = q + W = 4{,}16\\ \\text{kJ} + (-1{,}66\\ \\text{kJ}) = 2{,}50\\ \\text{kJ}$$", porque: "Aplicamos el primer principio con la convención del sistema: el calor que entra es positivo y el trabajo que el sistema realiza es negativo." }
        ],
        resultado: "W = -1,66 kJ; ΔU = +2,50 kJ"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "$$\\Delta H = q_P = 4{,}16\\ \\text{kJ}$$", porque: "A presión constante, el calor intercambiado es igual a ΔH. Por eso no hace falta recalcular la entalpía desde cero." },
          { paso: "Comprobación: $$\\Delta H = \\Delta U + P\\,\\Delta V = 2{,}50\\ \\text{kJ} + 1{,}66\\ \\text{kJ} = 4{,}16\\ \\text{kJ}$$", porque: "Usamos H = U + PV, y P·ΔV = −W. El resultado coincide con el calor, así que el cálculo es consistente." }
        ],
        resultado: "ΔH = +4,16 kJ"
      }
    ],
    errores_tipicos: [
      { error: "Escribir W = +nRΔT porque el gas 'recibe' calor, o confundir el signo del trabajo de expansión.", como_evitar: "En una expansión ΔV > 0 y W < 0 con la convención del sistema." },
      { error: "Usar Cv para calcular ΔH en lugar de Cp, o pensar que ΔH = ΔU en cualquier proceso.", como_evitar: "ΔH = q_P, y en gases ideales ΔH = ΔU + Δn·R·T. Para este proceso, ΔH = nCpΔT." }
    ]
  },
  {
    num: 13,
    nivel: "Intermedio",
    temas: ["termodinamica", "liquidos"],
    enunciado: "Se quieren convertir 180 g de agua líquida a 20,0 °C en vapor a 100 °C, a 1 atm. Datos: c(H2O, l) = 4,18 J/(g x K); ΔH(vaporización) = 40,7 kJ/mol a 100 °C; M(H2O) = 18,0 g/mol. Calcular el calor total que debe absorber el agua.",
    resolucion: [
      {
        parte: "",
        pasos: [
          { paso: "Etapa 1, calentamiento del líquido de 20,0 °C a 100 °C: $$q_1 = 180\\ \\text{g} \\times 4{,}18\\ \\text{J/(g K)} \\times 80{,}0\\ \\text{K} = 60\\,192\\ \\text{J} = 60{,}2\\ \\text{kJ}$$", porque: "Primero el agua sube de temperatura sin cambiar de fase, así que el calor es sensible. El ΔT es de 80,0 K, de 20,0 °C a 100 °C." },
          { paso: "Etapa 2, vaporización a 100 °C: $$n = \\frac{180\\ \\text{g}}{18{,}0\\ \\text{g/mol}} = 10{,}00\\ \\text{mol}; \\qquad q_2 = 10{,}00\\ \\text{mol} \\times 40{,}7\\ \\text{kJ/mol} = 407{,}0\\ \\text{kJ}$$", porque: "A 100 °C el agua cambia de fase con temperatura constante, así que el calor es latente. Lo calculamos con la entalpía molar de vaporización." },
          { paso: "$$q_{\\text{total}} = q_1 + q_2 = 60{,}2\\ \\text{kJ} + 407{,}0\\ \\text{kJ} = 467{,}2\\ \\text{kJ}$$", porque: "El proceso pasa por las dos etapas, y ambas absorben calor. Por eso sumamos los aportes." }
        ],
        resultado: "q total = +467,2 kJ (absorbidos por el agua)"
      }
    ],
    errores_tipicos: [
      { error: "Calcular solo la vaporización y olvidar el calentamiento de 20,0 °C a 100 °C.", como_evitar: "Recorré el camino completo: calor sensible hasta la temperatura de cambio de fase, después calor latente." },
      { error: "Usar el calor específico del vapor (2,03 J/(g K)) para el calentamiento del líquido.", como_evitar: "Cada fase tiene su propio c. Mientras el agua esté líquida, usá c(H2O, l)." }
    ]
  },
  {
    num: 14,
    nivel: "Avanzado",
    temas: ["termodinamica", "magnitudes"],
    enunciado: "En un calorímetro a presión constante (vaso de poliestireno, sistema aislado), se disuelven 4,00 g de NaOH(s) en 150,0 g de agua inicialmente a 22,0 °C. La temperatura de la solución sube hasta 31,5 °C. Suponer que la masa total de la solución es 154,0 g, que su calor específico es 4,18 J/(g x K) y que el calorímetro no absorbe calor. M(NaOH) = 40,00 g/mol. a) Calcular ΔH de disolución por mol de NaOH. b) Calcular cuántos gramos de NaOH habría que disolver, en las mismas condiciones, para liberar 25,0 kJ.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Calor ganado por la solución: $$q_{\\text{sol}} = 154{,}0\\ \\text{g} \\times 4{,}18\\ \\text{J/(g K)} \\times 9{,}5\\ \\text{K} = 6\\,115\\ \\text{J} = 6{,}12\\ \\text{kJ}$$", porque: "La solución se calienta, así que absorbe el calor que libera la disolución. Usamos la masa total de la solución: agua más sal." },
          { paso: "Moles de NaOH: $$n = \\frac{4{,}00\\ \\text{g}}{40{,}00\\ \\text{g/mol}} = 0{,}100\\ \\text{mol}$$", porque: "El ΔH pedido es por mol de NaOH, así que convertimos la masa disuelta a moles." },
          { paso: "$$\\Delta H = \\frac{-6{,}12\\ \\text{kJ}}{0{,}100\\ \\text{mol}} = -61{,}2\\ \\text{kJ/mol}$$", porque: "El proceso libera calor hacia la solución, así que el ΔH del proceso de disolución es negativo. Dividimos por los moles disueltos." }
        ],
        resultado: "ΔH(disolución) = -61,2 kJ/mol (exotérmica)"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "$$n = \\frac{25{,}0\\ \\text{kJ}}{61{,}2\\ \\text{kJ/mol}} = 0{,}4085\\ \\text{mol}$$", porque: "Suponemos la misma entalpía por mol en las mismas condiciones. Dividimos el calor pedido por el ΔH molar." },
          { paso: "$$m = 0{,}4085\\ \\text{mol} \\times 40{,}00\\ \\text{g/mol} = 16{,}34\\ \\text{g} \\approx 16{,}3\\ \\text{g}$$", porque: "Pasamos los moles a gramos con la masa molar del NaOH." }
        ],
        resultado: "Se necesitan unos 16,3 g de NaOH"
      }
    ],
    errores_tipicos: [
      { error: "Usar 150,0 g en lugar de 154,0 g, olvidando la masa de la sal en la solución.", como_evitar: "La masa que se calienta es la de toda la solución, incluido el soluto." },
      { error: "Dar ΔH positivo porque 'la temperatura sube', confundiendo la temperatura de la solución con el signo del proceso.", como_evitar: "El signo de ΔH es del proceso de disolución: si la solución gana calor, la disolución lo liberó y ΔH < 0." },
      { error: "En b) dividir por ΔH en kJ/g en lugar de kJ/mol, o usar el calor sin convertirlo a moles.", como_evitar: "Primero calculá los moles con el ΔH molar y después pasá a gramos." }
    ]
  },
  {
    num: 15,
    nivel: "Avanzado",
    temas: ["termodinamica", "liquidos"],
    enunciado: "En un calorímetro adiabático se colocan 50,0 g de hielo a -10,0 °C y 200,0 g de agua líquida a 40,0 °C. Datos: c(hielo) = 2,09 J/(g x K); c(H2O, l) = 4,18 J/(g x K); ΔH(fusión) = 6,02 kJ/mol; M(H2O) = 18,0 g/mol. a) Determinar si se funde todo el hielo. b) Calcular la temperatura final del sistema.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Calor para llevar el hielo a 0 °C: $$q_1 = 50{,}0\\ \\text{g} \\times 2{,}09\\ \\text{J/(g K)} \\times 10{,}0\\ \\text{K} = 1\\,045\\ \\text{J}$$", porque: "El hielo debe calentarse hasta 0 °C antes de fundir, y lo hace con su propio calor específico." },
          { paso: "Calor para fundir todo el hielo: $$q_2 = \\frac{50{,}0\\ \\text{g}}{18{,}0\\ \\text{g/mol}} \\times 6\\,020\\ \\text{J/mol} = 16\\,722\\ \\text{J}$$", porque: "La fusión ocurre a 0 °C y es un cambio de fase, así que usamos la entalpía molar de fusión, convirtiendo la masa a moles." },
          { paso: "Calor que el agua puede ceder al enfriarse de 40,0 °C a 0 °C: $$q_3 = 200{,}0\\ \\text{g} \\times 4{,}18\\ \\text{J/(g K)} \\times 40{,}0\\ \\text{K} = 33\\,440\\ \\text{J}$$", porque: "Comparamos el calor disponible del agua caliente con el calor que necesita el hielo. Si el disponible es mayor, el hielo se funde por completo." },
          { paso: "Necesario: $1\\,045 + 16\\,722 = 17\\,767\\ \\text{J}$, menor que $33\\,440\\ \\text{J}$. Sobran $15\\,673\\ \\text{J}$. Entonces se funde todo el hielo.", porque: "El exceso de calor se usa para calentar la mezcla por encima de 0 °C. Por eso el sistema queda como agua líquida." }
        ],
        resultado: "Sí, se funde todo el hielo (sobran 15 673 J)"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Balance térmico con T final en °C: $$200{,}0 \\times 4{,}18\\,(40{,}0 - T) = 1\\,045 + 16\\,722 + 50{,}0 \\times 4{,}18\\,T$$", porque: "El calor que cede el agua original iguala al que absorben el hielo, la fusión y el agua derretida. El agua derretida parte de 0 °C y se calienta hasta T." },
          { paso: "$$33\\,440 - 836\\,T = 17\\,767 + 209\\,T \\;\\Rightarrow\\; 1\\,045\\,T = 15\\,673 \\;\\Rightarrow\\; T = 15{,}0\\ \\text{°C}$$", porque: "Agrupamos los términos con T de un lado y las constantes del otro. El resultado está entre 0 °C y 40 °C, así que el balance es válido." }
        ],
        resultado: "T final = 15,0 °C"
      }
    ],
    errores_tipicos: [
      { error: "Suponer que todo el hielo se funde sin verificar si el calor del agua alcanza.", como_evitar: "Calculá el calor para calentar y fundir todo el hielo, y compará con el calor disponible antes de decidir." },
      { error: "Olvidar calentar el hielo de -10 °C a 0 °C, o usar c del agua líquida para el hielo.", como_evitar: "Cada fase tiene su propio calor específico, y el calentamiento previo a la fusión también suma calor." },
      { error: "En el balance final no incluir el calor que sube la temperatura del agua derretida de 0 °C a T.", como_evitar: "Toda el agua final (la original y la derretida) termina a T; hay que contar el calentamiento de la parte derretida." }
    ]
  },
  {
    num: 16,
    nivel: "Avanzado",
    temas: ["termodinamica", "magnitudes"],
    enunciado: "La glucosa (C6H12O6, M = 180,16 g/mol) es el principal combustible del metabolismo. Su combustión completa a 25 °C y 1 atm, con agua líquida como producto, tiene ΔH = -2 802 kJ/mol. Datos: ΔHf(CO2, g) = -393,5 kJ/mol; ΔHf(H2O, l) = -285,8 kJ/mol. a) Calcular la entalpía de formación de la glucosa sólida con estos datos. b) Calcular la energía liberada al quemar 5,00 g de glucosa.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Ecuación de combustión: $$\\text{C}_6\\text{H}_{12}\\text{O}_6\\text{(s)} + 6\\,\\text{O}_2\\text{(g)} \\rightarrow 6\\,\\text{CO}_2\\text{(g)} + 6\\,\\text{H}_2\\text{O(l)} \\qquad \\Delta H_c = -2\\,802\\ \\text{kJ}$$", porque: "Escribimos la combustión completa de 1 mol de glucosa, con los coeficientes que balancean C, H y O. El agua se toma líquida, como indica el enunciado." },
          { paso: "$$-2\\,802 = [6(-393{,}5) + 6(-285{,}8)] - \\Delta H_f(\\text{glucosa})$$", porque: "Aplicamos $\\Delta H^\\circ_r = \\sum$ productos $- \\sum$ reactivos. El O2 vale cero porque es un elemento, y la glucosa es el único reactivo con ΔHf distinta de cero." },
          { paso: "$$\\Delta H_f(\\text{glucosa}) = -2\\,361{,}0 - 1\\,714{,}8 + 2\\,802 = -1\\,273{,}8\\ \\text{kJ/mol}$$", porque: "Despejamos ΔHf(glucosa) pasando la suma de productos al otro lado con el signo correcto. El resultado negativo es coherente con un compuesto estable." }
        ],
        resultado: "ΔHf(glucosa, s) = -1 273,8 kJ/mol (con estos datos)"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "$$\\frac{2\\,802\\ \\text{kJ/mol}}{180{,}16\\ \\text{g/mol}} = 15{,}55\\ \\text{kJ/g}$$", porque: "Pasamos la energía por mol a energía por gramo dividiendo por la masa molar." },
          { paso: "$$5{,}00\\ \\text{g} \\times 15{,}55\\ \\text{kJ/g} = 77{,}8\\ \\text{kJ}$$", porque: "Multiplicamos por los 5,00 g de glucosa. El calor liberado es 77,8 kJ, aunque el ΔH de la combustión es negativo." }
        ],
        resultado: "Se liberan 77,8 kJ"
      }
    ],
    errores_tipicos: [
      { error: "Olvidar los coeficientes (6 CO2 y 6 H2O) al sumar las ΔHf de los productos.", como_evitar: "Multiplicá cada ΔHf por su coeficiente antes de sumar." },
      { error: "Invertir la ecuación al despejar: sumar ΔHc en lugar de restarla, o dar el signo de la glucosa al revés.", como_evitar: "Escribí la ecuación de Hess completa y reemplazá los valores antes de despejar." },
      { error: "Usar agua gaseosa en la combustión sin aclararlo, lo que cambia el valor de ΔH.", como_evitar: "Verificá el estado del agua en los productos: con H2O(l) el ΔH es más negativo que con H2O(g)." }
    ]
  },
  {
    num: 17,
    nivel: "Avanzado",
    temas: ["termodinamica", "reacciones", "magnitudes"],
    enunciado: "En un alto horno, el óxido de hierro(III) se reduce con monóxido de carbono: Fe2O3(s) + 3 CO(g) -> 2 Fe(s) + 3 CO2(g). Datos a 25 °C y 1 atm: ΔHf(Fe2O3, s) = -824,2 kJ/mol; ΔHf(CO, g) = -110,5 kJ/mol; ΔHf(CO2, g) = -393,5 kJ/mol. Datos: M(Fe2O3) = 159,7 g/mol; M(Fe) = 55,85 g/mol. a) Calcular ΔH° de la reacción tal como está escrita. b) Calcular el calor liberado al reducir 2,00 kg de Fe2O3 con CO en exceso. c) Calcular la masa de hierro obtenida si el rendimiento de la reacción es del 85 %.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "$$\\Delta H^\\circ_r = [2\\,\\Delta H_f(\\text{Fe}) + 3\\,\\Delta H_f(\\text{CO}_2)] - [\\Delta H_f(\\text{Fe}_2\\text{O}_3) + 3\\,\\Delta H_f(\\text{CO})]$$", porque: "Aplicamos $\\sum$ productos $- \\sum$ reactivos con los coeficientes de la ecuación. El Fe sólido es un elemento, así que su ΔHf es cero." },
          { paso: "$$\\Delta H^\\circ_r = [0 + 3(-393{,}5)] - [-824{,}2 + 3(-110{,}5)] = -1\\,180{,}5 - (-1\\,155{,}7) = -24{,}8\\ \\text{kJ}$$", porque: "Reemplazamos los valores con sus coeficientes. El resultado es el ΔH por mol de Fe2O3 tal como está escrita la ecuación." }
        ],
        resultado: "ΔH° = -24,8 kJ por mol de Fe2O3 (exotérmica)"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "$$n_{\\text{Fe}_2\\text{O}_3} = \\frac{2\\,000\\ \\text{g}}{159{,}7\\ \\text{g/mol}} = 12{,}5235\\ \\text{mol}$$", porque: "El ΔH está dado por mol de Fe2O3, así que convertimos los 2,00 kg a moles." },
          { paso: "$$q = 12{,}5235\\ \\text{mol} \\times (-24{,}8\\ \\text{kJ/mol}) = -310{,}6\\ \\text{kJ}$$", porque: "Multiplicamos los moles por el ΔH de a). El signo negativo indica que el calor se libera, y suponemos rendimiento de 100 % para esta parte." }
        ],
        resultado: "Se liberan 310,6 kJ (con rendimiento de 100 %)"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "Moles de Fe producidos: $$n_{\\text{Fe}} = 2 \\times 12{,}5235\\ \\text{mol} = 25{,}047\\ \\text{mol}$$", porque: "La estequiometría da 2 mol de Fe por cada mol de Fe2O3 que reacciona." },
          { paso: "$$m = 25{,}047\\ \\text{mol} \\times 55{,}85\\ \\text{g/mol} \\times 0{,}85 = 1\\,189\\ \\text{g} \\approx 1{,}19\\ \\text{kg}$$", porque: "Pasamos los moles de Fe a gramos y aplicamos el rendimiento del 85 %, que reduce la masa real obtenida." }
        ],
        resultado: "Se obtienen unos 1,19 kg de hierro"
      }
    ],
    errores_tipicos: [
      { error: "Olvidar el coeficiente 2 del Fe o el 3 del CO2 al sumar las entalpías de formación.", como_evitar: "Escribí cada término como n · ΔHf y revisá los coeficientes de la ecuación balanceada." },
      { error: "Usar el rendimiento para corregir el ΔH de la reacción, en lugar de la masa de hierro obtenida.", como_evitar: "El rendimiento afecta la cantidad de producto real, no la entalpía por mol de reacción." }
    ]
  },
  {
    num: 18,
    nivel: "Avanzado",
    temas: ["termodinamica", "gases"],
    enunciado: "Se quema en un calorímetro de bomba (volumen constante) una muestra de 0,850 g de acetona líquida, C3H6O (M = 58,08 g/mol). La combustión es C3H6O(l) + 4 O2(g) -> 3 CO2(g) + 3 H2O(l). La capacidad calorífica total del calorímetro es 9,40 kJ/K y la temperatura sube 2,35 K. Suponer que los gases son ideales a 25 °C. a) Calcular ΔU de combustión por mol de acetona. b) Calcular ΔH de combustión por mol de acetona a 25 °C.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Calor a volumen constante: $$q_V = -C_{\\text{cal}} \\cdot \\Delta T = -9{,}40\\ \\text{kJ/K} \\times 2{,}35\\ \\text{K} = -22{,}09\\ \\text{kJ}$$", porque: "El calorímetro gana el calor que pierde la muestra, así que el calor de la reacción es el opuesto al del calorímetro. Como el recipiente es de volumen constante, este calor es ΔU." },
          { paso: "Moles de acetona: $$n = \\frac{0{,}850\\ \\text{g}}{58{,}08\\ \\text{g/mol}} = 0{,}01464\\ \\text{mol}$$", porque: "La energía de combustión se expresa por mol, así que convertimos la masa a moles con la masa molar." },
          { paso: "$$\\Delta U = \\frac{-22{,}09\\ \\text{kJ}}{0{,}01464\\ \\text{mol}} = -1\\,509\\ \\text{kJ/mol}$$", porque: "Dividimos el calor a volumen constante por los moles quemados. El signo negativo indica una reacción exotérmica." }
        ],
        resultado: "ΔU = -1 509 kJ/mol"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "$$\\Delta n = 3 - 4 = -1$$", porque: "Contamos solo los gases: 4 O2 en reactivos y 3 CO2 en productos. La acetona y el agua son líquidos y no cuentan." },
          { paso: "$$\\Delta H = \\Delta U + \\Delta n\\,R\\,T = -1\\,509 + (-1)(8{,}314 \\times 10^{-3})(298{,}15) = -1\\,509 - 2{,}48 = -1\\,511\\ \\text{kJ/mol}$$", porque: "Usamos ΔH = ΔU + Δn·R·T con R en kJ/(mol·K) y T = 298,15 K. Como Δn es negativo, ΔH resulta algo más negativo que ΔU." }
        ],
        resultado: "ΔH = -1 511 kJ/mol (combustión a 25 °C)"
      }
    ],
    errores_tipicos: [
      { error: "Igualar ΔH a ΔU en el calorímetro de bomba sin aplicar Δn.", como_evitar: "El calorímetro de bomba mide ΔU. Para pasar a ΔH, usá ΔH = ΔU + Δn·R·T con solo los gases." },
      { error: "Contar la acetona o el agua como gases en Δn.", como_evitar: "Solo cuentan las especies gaseosas en la ecuación balanceada." },
      { error: "Usar C_cal en kJ/K con ΔT en K pero dar el resultado en J, o mezclar unidades entre kJ y J.", como_evitar: "Elegí una unidad de energía y convertí todo a ella antes de dividir por los moles." }
    ]
  },
  {
    num: 19,
    nivel: "Avanzado",
    temas: ["termodinamica", "reacciones", "liquidos"],
    enunciado: "Se mezclan en un calorímetro a presión constante 100,0 mL de HCl 1,00 M y 100,0 mL de NaOH 1,00 M, ambos a 20,0 °C. La temperatura de la mezcla sube a 26,8 °C. Suponer densidad 1,00 g/mL y c = 4,18 J/(g x K) para la solución, y que el calorímetro no absorbe calor. a) Calcular ΔH de neutralización por mol de agua formada. b) En otro ensayo se mezclan 50,0 mL de HCl 1,00 M con 150,0 mL de NaOH 1,00 M, ambos a 20,0 °C, en el mismo calorímetro. Calcular la temperatura final.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Reacción y moles: HCl + NaOH -> NaCl + H2O. $$n = 0{,}100\\ \\text{L} \\times 1{,}00\\ \\text{mol/L} = 0{,}100\\ \\text{mol de H}_2\\text{O}$$", porque: "Los dos reactivos reaccionan 1 a 1 y están en proporción estequiométrica. Por eso se forman 0,100 mol de agua." },
          { paso: "Calor absorbido por la solución: $$q = 200{,}0\\ \\text{g} \\times 4{,}18\\ \\text{J/(g K)} \\times 6{,}8\\ \\text{K} = 5\\,685\\ \\text{J} = 5{,}68\\ \\text{kJ}$$", porque: "La masa de la solución es 100 mL + 100 mL = 200 g, con densidad 1,00 g/mL. La solución gana este calor porque la reacción libera calor." },
          { paso: "$$\\Delta H_{\\text{neut}} = \\frac{-5{,}68\\ \\text{kJ}}{0{,}100\\ \\text{mol}} = -56{,}8\\ \\text{kJ/mol}$$", porque: "El calor de la reacción es el que cede el sistema reactivo, así que el signo es negativo. Dividimos por los moles de agua formada, porque la neutralización se expresa por mol de H2O." }
        ],
        resultado: "ΔH(neutralización) = -56,8 kJ por mol de H2O"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Reactivo limitante: HCl, con 0,0500 mol, frente a 0,150 mol de NaOH. Se forman 0,0500 mol de H2O.", porque: "El reactivo en menor cantidad determina cuánta agua se forma y, por eso, cuánto calor se libera. El NaOH queda en exceso." },
          { paso: "Calor liberado: $$q = 0{,}0500\\ \\text{mol} \\times (-56{,}8\\ \\text{kJ/mol}) = -2{,}84\\ \\text{kJ}$$", porque: "Usamos el ΔH por mol de agua de a), porque es la misma reacción en el mismo calorímetro. El calor que gana la solución es 2,84 kJ." },
          { paso: "$$\\Delta T = \\frac{2\\,842\\ \\text{J}}{200{,}0\\ \\text{g} \\times 4{,}18\\ \\text{J/(g K)}} = 3{,}40\\ \\text{K} \\;\\Rightarrow\\; T_{\\text{final}} = 20{,}0 + 3{,}40 = 23{,}4\\ \\text{°C}$$", porque: "La masa total sigue siendo 200 g, así que el calor se reparte en esa masa. Calculamos el ΔT que produce y lo sumamos a 20,0 °C." }
        ],
        resultado: "T final ≈ 23,4 °C"
      }
    ],
    errores_tipicos: [
      { error: "Usar solo 100 g de masa de solución en b), o no sumar los 200 g de la mezcla de a).", como_evitar: "Los volúmenes se suman y con densidad 1,00 g/mL la masa es igual al volumen en mL." },
      { error: "Dar el ΔH por mol de HCl o de NaOH en lugar de por mol de agua formada.", como_evitar: "La entalpía de neutralización se expresa por mol de H2O producida." },
      { error: "En b) usar el NaOH en exceso (0,150 mol) para calcular el calor, en lugar del reactivo limitante.", como_evitar: "Identificá el reactivo limitante antes de calcular la cantidad de producto." }
    ]
  },
  {
    num: 20,
    nivel: "Avanzado",
    temas: ["termodinamica", "reacciones"],
    enunciado: "Una reacción en dos etapas, A -> B -> C, tiene el siguiente diagrama de energía (valores relativos, en kJ/mol): reactivos A = 150; primer estado de transición = 230; intermedio B = 180; segundo estado de transición = 220; productos C = 60. a) Calcular ΔH global e indicar si la reacción es exotérmica o endotérmica. b) Indicar la energía de activación del paso más lento y el ΔH del primer paso, e indicar si ese paso es exotérmico o endotérmico. c) Calcular la energía de activación de la reacción inversa global (C -> A).",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "$$\\Delta H_{\\text{global}} = E_{\\text{productos}} - E_{\\text{reactivos}} = 60 - 150 = -90\\ \\text{kJ/mol}$$", porque: "El ΔH global depende solo de los estados inicial y final, no del camino. Restamos la energía de los reactivos a la de los productos." },
          { paso: "Como $\\Delta H_{\\text{global}} < 0$, el sistema cede energía al entorno.", porque: "Un ΔH negativo indica que la reacción libera energía, es decir, que es exotérmica. La lectura del diagrama confirma el signo: los productos están por debajo de los reactivos." }
        ],
        resultado: "ΔH global = -90 kJ/mol: exotérmica"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Energías de activación: paso 1, $230 - 150 = 80\\ \\text{kJ/mol}$; paso 2, $220 - 180 = 40\\ \\text{kJ/mol}$.", porque: "La energía de activación de cada paso es la diferencia entre su estado de transición y el estado de partida de ese paso. Comparar ambos valores identifica el paso lento." },
          { paso: "$$\\Delta H_1 = 180 - 150 = +30\\ \\text{kJ/mol}$$", porque: "El ΔH de un paso es la diferencia entre el estado final y el inicial de ese paso. El intermedio está por encima de A, así que el primer paso es endotérmico." }
        ],
        resultado: "Paso lento: el 1, con Ea = 80 kJ/mol; ΔH1 = +30 kJ/mol (endotérmico)"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "$$E_{a,\\text{inv}} = 230 - 60 = 170\\ \\text{kJ/mol}$$", porque: "Para C -> A el punto de partida es C, a 60 kJ/mol, y la barrera más alta que debe superar es el primer estado de transición, a 230 kJ/mol." },
          { paso: "Control: $$E_{a,\\text{inv}} = E_{a,\\text{dir}} - \\Delta H_{\\text{global}} = 80 - (-90) = 170\\ \\text{kJ/mol}$$", porque: "La energía de activación inversa es la directa menos el ΔH global. Si no coincide, hay un error al leer el diagrama." }
        ],
        resultado: "Ea inversa global = 170 kJ/mol"
      }
    ],
    errores_tipicos: [
      { error: "Tomar la altura del intermedio B como si fuera la energía de activación del paso 1.", como_evitar: "Ea es la diferencia entre el estado de transición y el estado de partida del paso, no el valor del intermedio." },
      { error: "Identificar el paso lento por el mayor ΔH en lugar de por la mayor energía de activación.", como_evitar: "El paso lento es el de mayor Ea, porque es el que limita la velocidad." },
      { error: "Calcular la Ea inversa usando la Ea directa (80 kJ/mol) sin considerar el ΔH global.", como_evitar: "Ea(inversa) = Ea(directa) − ΔH global. Con ΔH negativo, la inversa siempre es mayor." }
    ]
  }
];
