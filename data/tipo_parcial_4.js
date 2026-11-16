// Ejercicios tipo parcial, cuarta tanda (ejercicios 13 a 20): 4 de dificultad similar al recuperatorio
// (estequiometría con impureza y Kps, termoquímica con calentamiento del agua, equilibrio con Kc y Kp)
// y 4 extras de dificultad similar (ácido-base amortiguador, Hess con Lewis, gases con reacción,
// solubilidad con ion común, nomenclatura con Lewis). Datos propios, valores recalculados con Node.
window.TIPO_PARCIAL = window.TIPO_PARCIAL || [];
window.TIPO_PARCIAL.push(
  {
    num: 13,
    nivel: "Tipo parcial",
    temas: ["reacciones", "magnitudes", "uniones", "soluciones"],
    enunciado: "Se hace reaccionar una muestra de carbonato de calcio con ácido clorhídrico en exceso, obteniéndose 30,0 L de CO2 medidos en CNPT. CaCO3 (s) + 2 HCl (ac) -> CaCl2 (ac) + CO2 (g) + H2O (l). A) Calcular la masa de CaCO3 puro que reaccionó. B) Si la muestra tiene 5 % (m/m) de SiO2, que no reacciona con el ácido, calcular la masa de muestra necesaria y la masa de CaCl2 formada. C) Escribir la estructura de Lewis del CaCl2 e indicar qué tipo de enlace presenta. D) El Kps del PbI2 es 9,8 x 10^-9. Calcular su solubilidad molar.",
    resolucion: [
      {
        parte: "A)",
        pasos: [
          { paso: "Moles de CO2: $$n = \\frac{30{,}0\\ \\text{L}}{22{,}4\\ \\text{L/mol}} = 1{,}339\\ \\text{mol}$$", porque: "En CNPT un mol de gas ocupa 22,4 L, así que dividimos el volumen de CO2 por ese valor." },
          { paso: "Masa de CaCO3 puro: la relación es 1 a 1, así que $$m = 1{,}339 \\times 100{,}09 = 134{,}0\\ \\text{g}$$", porque: "De la ecuación, 1 mol de CaCO3 produce 1 mol de CO2. Multiplicamos los moles por la masa molar del carbonato." }
        ],
        resultado: "m(CaCO3 puro) = 134,0 g"
      },
      {
        parte: "B)",
        pasos: [
          { paso: "Masa de muestra: el CaCO3 es el 95 % de la muestra, así que $$m_{\\text{muestra}} = \\frac{134{,}0\\ \\text{g}}{0{,}95} = 141{,}1\\ \\text{g}$$", porque: "La impureza es SiO2 inerte: el carbonato puro es la fracción 0,95 de la masa total de la muestra." },
          { paso: "Masa de CaCl2: $$m = 1{,}339 \\times 110{,}98 = 148{,}6\\ \\text{g}$$", porque: "Por la relación 1 a 1 con el CO2, se forman 1,339 mol de CaCl2. Multiplicamos por su masa molar." }
        ],
        resultado: "Masa de muestra: 141,1 g; masa de CaCl2: 148,6 g"
      },
      {
        parte: "C)",
        pasos: [
          { paso: "Lewis del CaCl2: $[:\\text{Cl}:]^-\\ \\text{Ca}^{2+}\\ [:\\text{Cl}:]^-$, con cada Cl- rodeado por 3 pares libres.", porque: "El Ca cede 2 electrones, uno a cada Cl. Cada Cl- completa su octeto con 3 pares libres." },
          { paso: "Tipo de enlace: iónico, entre el Ca2+ y los Cl-.", porque: "Un metal alcalinotérreo con un halógeno forma una sal por atracción electrostática entre iones." }
        ],
        resultado: "CaCl2: enlace iónico entre Ca2+ y 2 Cl-"
      },
      {
        parte: "D)",
        pasos: [
          { paso: "Equilibrio: $$\\text{PbI}_2 \\rightleftharpoons \\text{Pb}^{2+} + 2\\,\\text{I}^- \\qquad K_{ps} = s\\,(2s)^2 = 4s^3$$", porque: "Por cada mol de sal disuelta aparecen 1 mol de Pb2+ y 2 mol de I-, así que el Kps lleva el factor 4." },
          { paso: "Solubilidad: $$s = \\sqrt[3]{\\frac{9{,}8\\times10^{-9}}{4}} = 1{,}35\\times10^{-3}\\ \\text{mol/L}$$", porque: "Despejamos s de Kps = 4s^3 tomando la raíz cúbica de Kps/4." }
        ],
        resultado: "s = 1,35 x 10^-3 mol/L"
      }
    ],
    errores_tipicos: [
      { error: "En B) aplicar el 5 % a la masa de carbonato en vez de a la muestra.", como_evitar: "La impureza forma parte de la muestra total; el carbonato puro es el 95 % de la masa de la muestra." },
      { error: "En D) usar s = Kps o s = √Kps en vez de la expresión con factor 4.", como_evitar: "Escribir la disociación con sus coeficientes antes de despejar s." },
      { error: "En C) dibujar el CaCl2 como compuesto covalente.", como_evitar: "Un metal con un halógeno forma una sal iónica: el Ca2+ se une a iones Cl-, sin pares compartidos." }
    ]
  },
  {
    num: 14,
    nivel: "Tipo parcial",
    temas: ["termodinamica", "gases", "liquidos"],
    enunciado: "Datos a 25 °C: ΔH comb C2H5OH (l) = -1367 kJ/mol; ΔHf CO2 = -393,5 kJ/mol; ΔHf H2O (l) = -285,8 kJ/mol; ΔH comb CH4 = -890 kJ/mol; Cp H2O = 4,18 kJ/(kg K). a) Escribir la ecuación de combustión del etanol y calcular su calor de formación. b) Se queman 100 L de metano en CNPT y el 60 % del calor generado se usa para calentar 50 kg de agua que están a 10 °C, a presión constante. Calcular el calor útil y la temperatura final del agua, suponiendo que no hay cambio de fase.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Combustión del etanol: $$\\text{C}_2\\text{H}_5\\text{OH (l)} + 3\\,\\text{O}_2 \\rightarrow 2\\,\\text{CO}_2 + 3\\,\\text{H}_2\\text{O (l)} \\qquad \\Delta H = -1367\\ \\text{kJ/mol}$$", porque: "Balanceamos el C (2), el H (6, que dan 3 H2O) y el O: a la derecha hay 4 + 3 = 7 átomos de O, o sea 3 O2 a la izquierda (el etanol aporta 1 O)." },
          { paso: "Calor de formación: por Hess, $$\\Delta H_f(\\text{C}_2\\text{H}_5\\text{OH}) = [2 \\times (-393{,}5) + 3 \\times (-285{,}8)] - (-1367) = -277{,}4\\ \\text{kJ/mol}$$", porque: "El ΔHf del etanol es la suma de los ΔHf de los productos menos el ΔH de combustión, porque la combustión es el camino inverso a formar CO2 y H2O a partir del etanol." }
        ],
        resultado: "ΔHf(C2H5OH) = -277,4 kJ/mol"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Calor generado: $$n_{\\text{CH}_4} = \\frac{100\\ \\text{L}}{22{,}4\\ \\text{L/mol}} = 4{,}464\\ \\text{mol}, \\qquad q = 4{,}464 \\times (-890) = -3\\,973\\ \\text{kJ}$$", porque: "Convertimos el volumen a moles con el volumen molar de CNPT y multiplicamos por el ΔH de combustión por mol." },
          { paso: "Calor útil: $$q_{\\text{útil}} = 0{,}60 \\times 3\\,973\\ \\text{kJ} = 2\\,384\\ \\text{kJ}$$", porque: "El rendimiento indica la fracción del calor que se aprovecha para calentar el agua." },
          { paso: "Temperatura final: $$\\Delta T = \\frac{2\\,384\\ \\text{kJ}}{50\\ \\text{kg} \\times 4{,}18\\ \\text{kJ/(kg K)}} = 11{,}4\\ \\text{K}, \\qquad T_f = 10 + 11{,}4 = 21{,}4\\ ^\\circ\\text{C}$$", porque: "Con q = m · Cp · ΔT despejamos ΔT y se lo sumamos a la temperatura inicial. Como 21,4 °C es menor que 100 °C, no hay cambio de fase." }
        ],
        resultado: "Calor útil: 2 384 kJ; temperatura final: 21,4 °C"
      }
    ],
    errores_tipicos: [
      { error: "En a) olvidar que el etanol aporta un oxígeno y contar mal los O2.", como_evitar: "Contar todos los O de los productos y restar los que ya aporta el etanol." },
      { error: "En b) aplicar el rendimiento al volumen de metano en vez de al calor.", como_evitar: "Calcular primero el calor generado y después aplicar el 60 % al calor." },
      { error: "En b) usar kg de agua con Cp en J/(mol K), o mezclar unidades.", como_evitar: "Con Cp en kJ/(kg K) y masa en kg, el resultado queda en K directamente." }
    ]
  },
  {
    num: 15,
    nivel: "Tipo parcial",
    temas: ["equilibrio", "gases"],
    enunciado: "En un recipiente de 2,00 L se mezclan 2,00 mol de SO2 y 1,00 mol de O2 a 700 K, y se establece el equilibrio 2 SO2 (g) + O2 (g) <=> 2 SO3 (g), con ΔH < 0. En el equilibrio hay 0,60 mol de O2. a) Calcular Kc y escribir su expresión. b) Calcular Kp a 700 K. c) Calcular la fracción molar de SO3 en el equilibrio. d) ¿Conviene aumentar la temperatura para obtener más SO3? Justificar. e) ¿Conviene aumentar la presión (reducir el volumen)? Justificar.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Moles en equilibrio: se consumieron $1{,}00 - 0{,}60 = 0{,}40$ mol de O2, que consumieron $2 \\times 0{,}40 = 0{,}80$ mol de SO2 y formaron $0{,}80$ mol de SO3. Quedan 1,20 mol de SO2.", porque: "La relación es 2 SO2 : 1 O2 : 2 SO3. Usamos la cantidad de O2 que reaccionó para deducir las demás especies." },
          { paso: "Concentraciones y Kc: $$[\\text{SO}_2] = 0{,}600\\ \\text{M}, \\quad [\\text{O}_2] = 0{,}300\\ \\text{M}, \\quad [\\text{SO}_3] = 0{,}400\\ \\text{M}$$ $$K_c = \\frac{[\\text{SO}_3]^2}{[\\text{SO}_2]^2\\,[\\text{O}_2]} = \\frac{0{,}160}{0{,}360 \\times 0{,}300} = 1{,}48\\ \\text{L/mol}$$", porque: "Dividimos los moles por 2,00 L y armamos Kc con los coeficientes como exponentes: el SO2 aparece con exponente 2." }
        ],
        resultado: "Kc = 1,48 L/mol"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Variación de moles gaseosos: $\\Delta n = 2 - 3 = -1$. Con $RT = 0{,}0821 \\times 700 = 57{,}5$ L atm/mol: $$K_p = \\frac{K_c}{RT} = \\frac{1{,}48}{57{,}5} = 2{,}58\\times10^{-2}\\ \\text{atm}^{-1}$$", porque: "Como Δn es negativo, Kp = Kc · (RT)^Δn equivale a dividir Kc por RT." }
        ],
        resultado: "Kp = 2,58 x 10^-2 atm^-1"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "Fracción molar: $$x_{\\text{SO}_3} = \\frac{0{,}80}{1{,}20 + 0{,}60 + 0{,}80} = \\frac{0{,}80}{2{,}60} = 0{,}308$$", porque: "Dividimos los moles de SO3 por el total de moles en equilibrio." }
        ],
        resultado: "x(SO3) = 0,308"
      },
      {
        parte: "d)",
        pasos: [
          { paso: "La reacción directa libera calor (ΔH < 0). Al aumentar la temperatura, el equilibrio se desplaza hacia el lado endotérmico, es decir, hacia los reactivos.", porque: "Para un proceso exotérmico, subir la temperatura disminuye Kc y reduce la cantidad de SO3." },
          { paso: "Conclusión: no conviene aumentar la temperatura, porque se forma menos SO3.", porque: "El desplazamiento va en contra del objetivo, aunque la velocidad de reacción sí aumente." }
        ],
        resultado: "No: al subir T el equilibrio se desplaza hacia los reactivos"
      },
      {
        parte: "e)",
        pasos: [
          { paso: "Hay 3 mol de gas en los reactivos y 2 mol en los productos. Al reducir el volumen, el sistema responde desplazándose hacia el lado con menos moles gaseosos, que es el SO3.", porque: "Según Le Chatelier, aumentar la presión favorece el lado con menos moles de gas." },
          { paso: "Conclusión: sí, reducir el volumen favorece la formación de SO3.", porque: "La compresión aumenta la cantidad de SO3 en el equilibrio, sin cambiar Kc." }
        ],
        resultado: "Sí: reducir el volumen desplaza el equilibrio hacia el SO3"
      }
    ],
    errores_tipicos: [
      { error: "En a) usar moles en lugar de concentraciones en Kc.", como_evitar: "Dividir por el volumen de 2,00 L antes de armar el cociente." },
      { error: "En b) usar Kp = Kc sin considerar Δn.", como_evitar: "Calcular Δn (productos − reactivos gaseosos) y aplicar (RT)^Δn." },
      { error: "En e) pensar que al reducir el volumen se favorece el lado con más moles.", como_evitar: "Aumentar la presión favorece el lado con menos moles de gas." }
    ]
  },
  {
    num: 16,
    nivel: "Tipo parcial",
    temas: ["acidobase", "soluciones"],
    enunciado: "Se mezclan 40,0 mL de ácido fórmico 0,100 M (Ka = 1,8 x 10^-4) con 10,0 mL de NaOH 0,100 M. a) Escribir la ecuación de la reacción y calcular los moles de cada especie presente después de la mezcla. b) Calcular el pH de la solución resultante. c) Justificar por qué el pH no es 7 aunque se haya agregado una base.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Ecuación: $$\\text{HCOOH} + \\text{NaOH} \\rightarrow \\text{HCOONa} + \\text{H}_2\\text{O}$$", porque: "El ácido y la base reaccionan 1 a 1 para formar la sal (formiato de sodio) y agua." },
          { paso: "Moles iniciales: $n_{\\text{HCOOH}} = 0{,}100 \\times 0{,}0400 = 4{,}00\\times10^{-3}$ mol; $n_{\\text{NaOH}} = 0{,}100 \\times 0{,}0100 = 1{,}00\\times10^{-3}$ mol.", porque: "Multiplicamos la molaridad por el volumen en litros para cada solución." },
          { paso: "Después de la mezcla quedan $3{,}00\\times10^{-3}$ mol de HCOOH y se forman $1{,}00\\times10^{-3}$ mol de HCOO-.", porque: "El NaOH consume el mismo número de moles de ácido que tiene de OH-, y forma igual cantidad de base conjugada." }
        ],
        resultado: "Quedan 3,00 x 10^-3 mol de HCOOH y 1,00 x 10^-3 mol de HCOO-"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "pKa: $$\\text{p}K_a = -\\log(1{,}8\\times10^{-4}) = 3{,}74$$", porque: "El pKa es el logaritmo negativo de Ka; sirve para usar la ecuación de Henderson-Hasselbalch." },
          { paso: "pH de la solución amortiguadora: $$\\text{pH} = \\text{p}K_a + \\log\\frac{n_{\\text{base}}}{n_{\\text{ácido}}} = 3{,}74 + \\log\\frac{1{,}00}{3{,}00} = 3{,}27$$", porque: "Como hay ácido débil y su base conjugada en la misma solución, usamos la ecuación de Henderson-Hasselbalch con los moles (el volumen total se cancela en el cociente)." }
        ],
        resultado: "pH = 3,27"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "Justificación: la base consume solo una parte del ácido. Queda HCOOH sin reaccionar, que es un ácido débil, y junto con su base conjugada forma una solución amortiguadora.", porque: "Un ácido débil que sobra en la solución sigue liberando H+, por eso el pH queda ácido. Una base agregada en cantidad menor que el ácido no alcanza para neutralizarlo por completo." }
        ],
        resultado: "El pH es ácido (3,27) porque sobra ácido débil y se forma un amortiguador"
      }
    ],
    errores_tipicos: [
      { error: "En a) suponer que el NaOH neutraliza todo el ácido porque se agrega base.", como_evitar: "Comparar los moles: 1,00 × 10^-3 mol de OH- no alcanzan para 4,00 × 10^-3 mol de ácido." },
      { error: "En b) usar el pH de un ácido débil solo, sin tener en cuenta la base conjugada formada.", como_evitar: "Cuando hay ácido y base conjugada juntos, usar Henderson-Hasselbalch." },
      { error: "En b) usar el volumen total en el cociente de Henderson-Hasselbalch y cambiar el resultado.", como_evitar: "Como ambas especies están en el mismo volumen, el cociente de moles equivale al de concentraciones." }
    ]
  },
  {
    num: 17,
    nivel: "Tipo parcial",
    temas: ["termodinamica", "uniones", "nomenclatura"],
    enunciado: "Datos a 25 °C: ΔH comb C2H4 (g) = -1411 kJ/mol; ΔH comb H2 (g) = -286 kJ/mol (agua líquida); ΔH comb C2H6 (g) = -1560 kJ/mol. a) Escribir la reacción de hidrogenación del etileno, C2H4 + H2 -> C2H6, y calcular su ΔH por la ley de Hess. b) Escribir la estructura de Lewis del C2H4 e indicar la geometría alrededor de cada carbono y si la molécula es polar. c) Indicar si la hidrogenación libera o absorbe calor.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Combustiones: $$\\text{C}_2\\text{H}_4 + 3\\,\\text{O}_2 \\rightarrow 2\\,\\text{CO}_2 + 2\\,\\text{H}_2\\text{O}\\quad(-1411)$$ $$\\text{H}_2 + \\tfrac{1}{2}\\,\\text{O}_2 \\rightarrow \\text{H}_2\\text{O}\\quad(-286)$$ $$\\text{C}_2\\text{H}_6 + \\tfrac{7}{2}\\,\\text{O}_2 \\rightarrow 2\\,\\text{CO}_2 + 3\\,\\text{H}_2\\text{O}\\quad(-1560)$$", porque: "Escribimos las tres combustiones balanceadas, porque la hidrogenación se obtiene combinándolas: la combustión del etano se invierte para llegar al etano como producto." },
          { paso: "Hess: $$\\Delta H = \\Delta H_{\\text{comb}}(\\text{C}_2\\text{H}_4) + \\Delta H_{\\text{comb}}(\\text{H}_2) - \\Delta H_{\\text{comb}}(\\text{C}_2\\text{H}_6) = -1411 - 286 + 1560 = -137\\ \\text{kJ/mol}$$", porque: "Sumamos las dos primeras combustiones y restamos la del etano. Así quedan C2H4 + H2 -> C2H6, con el ΔH resultante." }
        ],
        resultado: "C2H4 + H2 -> C2H6, ΔH = -137 kJ/mol"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Lewis: $\\text{H}_2\\text{C}{=}\\text{CH}_2$, con un doble enlace C=C (un σ y un π) y dos H en cada C.", porque: "Los 12 electrones de valencia (2 · 4 + 4 · 1) forman 5 enlaces σ y 1 π; cada carbono usa sus 4 electrones en 3 enlaces σ y el doble enlace." },
          { paso: "Geometría y polaridad: triangular plana alrededor de cada C (ángulos de 120°); molécula apolar por simetría.", porque: "Los 3 grupos alrededor de cada carbono se repelen y se ubican en un plano. Los dipolos C–H se cancelan por la simetría de la molécula." }
        ],
        resultado: "C2H4: geometría trigonal plana (120°), molécula apolar"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "Como ΔH = -137 kJ/mol es negativo, la reacción libera calor.", porque: "Un ΔH negativo indica un proceso exotérmico: el sistema pierde energía hacia el entorno." }
        ],
        resultado: "La hidrogenación libera calor (exotérmica)"
      }
    ],
    errores_tipicos: [
      { error: "En a) sumar en lugar de restar la combustión del etano.", como_evitar: "Invertir la reacción del etano: su ΔH cambia de signo al sumarlo." },
      { error: "En b) dibujar el C2H4 con enlaces sencillos o con geometría tetraédrica.", como_evitar: "El doble enlace implica carbonos trigonales planos, con ángulos de 120°." },
      { error: "En b) decir que el etileno es polar porque tiene enlaces C–H polares.", como_evitar: "Revisar la simetría: si los dipolos se cancelan, la molécula es apolar." }
    ]
  },
  {
    num: 18,
    nivel: "Tipo parcial",
    temas: ["gases", "termodinamica", "uniones"],
    enunciado: "En un recipiente rígido de 10,0 L a 27 °C se introducen 2,00 g de H2 y 16,0 g de O2. a) Calcular la presión total y la presión parcial de cada gas. b) Se hace saltar una chispa y el H2 reacciona por completo con el O2 para formar H2O (l), con ΔHf = -285,8 kJ/mol. Calcular el calor liberado. c) Indicar qué reactivo queda en exceso y cuántos moles quedan sin reaccionar.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Moles: $$n_{\\text{H}_2} = \\frac{2{,}00}{2{,}016} = 0{,}992\\ \\text{mol}, \\qquad n_{\\text{O}_2} = \\frac{16{,}0}{32{,}00} = 0{,}500\\ \\text{mol}$$", porque: "Dividimos la masa de cada gas por su masa molar. El H2 tiene M = 2,016 g/mol y el O2 tiene M = 32,00 g/mol." },
          { paso: "Presión total: $$P = \\frac{n_{\\text{total}} RT}{V} = \\frac{1{,}492 \\times 0{,}0821 \\times 300}{10{,}0} = 3{,}67\\ \\text{atm}$$", porque: "Usamos la ley de los gases ideales con los moles totales, la temperatura en kelvin y el volumen en litros." },
          { paso: "Presiones parciales: $P_{\\text{H}_2} = \\frac{0{,}992}{1{,}492} \\times 3{,}67 = 2{,}44\\ \\text{atm}$ y $P_{\\text{O}_2} = 3{,}67 - 2{,}44 = 1{,}23\\ \\text{atm}$", porque: "Dalton: cada presión parcial es la fracción molar del gas por la presión total. La suma de las dos presiones parciales da la total." }
        ],
        resultado: "P total = 3,67 atm; P(H2) = 2,44 atm; P(O2) = 1,23 atm"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Reacción: $$\\text{H}_2 + \\tfrac{1}{2}\\,\\text{O}_2 \\rightarrow \\text{H}_2\\text{O (l)} \\qquad \\Delta H_f = -285{,}8\\ \\text{kJ/mol}$$", porque: "Balanceamos el H (2) y el O (1/2 O2 por mol de agua). El ΔHf del agua líquida corresponde a esta reacción por mol de H2." },
          { paso: "Calor liberado: $$q = 0{,}992\\ \\text{mol} \\times (-285{,}8\\ \\text{kJ/mol}) = -283{,}5\\ \\text{kJ}$$", porque: "Multiplicamos los moles de H2 que reaccionan por el ΔH por mol. El signo negativo indica que se libera calor." }
        ],
        resultado: "Calor liberado: 283,5 kJ"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "O2 necesario: $0{,}992 / 2 = 0{,}496$ mol. Como hay 0,500 mol de O2, el H2 es el reactivo limitante y el O2 queda en exceso.", porque: "Comparamos la cantidad de O2 que se necesita para consumir todo el H2 con la cantidad disponible." },
          { paso: "O2 sin reaccionar: $0{,}500 - 0{,}496 = 4{,}0\\times10^{-3}$ mol.", porque: "Restamos el O2 consumido al total inicial." }
        ],
        resultado: "Reactivo en exceso: O2, con 4,0 x 10^-3 mol sin reaccionar"
      }
    ],
    errores_tipicos: [
      { error: "En a) usar la masa molar del H (1,008) en lugar de la del H2 (2,016).", como_evitar: "Para gases diatómicos, la masa molar es el doble de la del átomo." },
      { error: "En b) usar el ΔHf del vapor de agua en lugar del agua líquida.", como_evitar: "Revisar el estado de agregación del producto en el enunciado." },
      { error: "En c) identificar el reactivo limitante por la masa en vez de por los moles.", como_evitar: "Comparar moles y coeficientes estequiométricos antes de decidir." }
    ]
  },
  {
    num: 19,
    nivel: "Tipo parcial",
    temas: ["soluciones", "equilibrio"],
    enunciado: "El Kps del AgCl es 1,8 x 10^-10 a 25 °C. a) Escribir el equilibrio de disolución y calcular la solubilidad molar del AgCl en agua pura. b) Calcular la solubilidad molar del AgCl en una solución de NaCl 0,10 M. c) Explicar por qué la solubilidad disminuye en la solución de NaCl.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Equilibrio: $$\\text{AgCl (s)} \\rightleftharpoons \\text{Ag}^+ + \\text{Cl}^- \\qquad K_{ps} = s^2$$", porque: "Cada mol de AgCl disuelto produce 1 mol de Ag+ y 1 mol de Cl-, así que Kps = s · s." },
          { paso: "Solubilidad: $$s = \\sqrt{1{,}8\\times10^{-10}} = 1{,}34\\times10^{-5}\\ \\text{mol/L}$$", porque: "Despejamos s tomando la raíz cuadrada del Kps." }
        ],
        resultado: "s (agua pura) = 1,34 x 10^-5 mol/L"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "En el NaCl 0,10 M ya hay Cl- en solución, así que $[\\text{Cl}^-] \\approx 0{,}10$ M. Entonces $$[\\text{Ag}^+] = \\frac{K_{ps}}{[\\text{Cl}^-]} = \\frac{1{,}8\\times10^{-10}}{0{,}10} = 1{,}8\\times10^{-9}\\ \\text{M}$$", porque: "El Cl- del NaCl aporta casi todo el cloruro en solución, así que el Ag+ se calcula dividiendo el Kps por esa concentración. La solubilidad es igual a la concentración de Ag+ que se disuelve." },
          { paso: "Solubilidad: $s = [\\text{Ag}^+] = 1{,}8\\times10^{-9}\\ \\text{mol/L}$", porque: "Por la estequiometría 1 a 1, la cantidad de AgCl disuelta es igual al Ag+ producido." }
        ],
        resultado: "s (NaCl 0,10 M) = 1,8 x 10^-9 mol/L"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "Efecto del ion común: el Cl- agregado desplaza el equilibrio de disolución hacia el sólido, porque aumenta [Cl-] y el producto iónico supera el Kps si se disuelve más AgCl.", porque: "Según Le Chatelier, aumentar la concentración de un producto del equilibrio (Cl-) desplaza el equilibrio hacia los reactivos, es decir, hacia el precipitado." }
        ],
        resultado: "La solubilidad disminuye por el efecto del ion común Cl-"
      }
    ],
    errores_tipicos: [
      { error: "En b) calcular la solubilidad como si el agua pura tuviera el mismo valor.", como_evitar: "Con ion común, primero calcular [Ag+] = Kps / [Cl-] en esa solución." },
      { error: "En a) usar Kps = s en lugar de Kps = s².", como_evitar: "Escribir los coeficientes del equilibrio antes de armar la expresión de Kps." },
      { error: "En c) decir que el NaCl aumenta la solubilidad por tener iones.", como_evitar: "Recordar que el ion común desplaza el equilibrio hacia el sólido." }
    ]
  },
  {
    num: 20,
    nivel: "Tipo parcial",
    temas: ["nomenclatura", "uniones"],
    enunciado: "a) Nombrar los siguientes compuestos: HClO2, Fe2O3, NaHSO4 y CH3-CH2-OH. b) Escribir la estructura de Lewis del SO2, indicar su geometría y si la molécula es polar.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "HClO2: ácido cloroso (el Cl tiene estado de oxidación +3).", porque: "Entre los oxoácidos del cloro, HClO (hipocloroso) tiene el menor número de oxidación, HClO2 le sigue con el sufijo -oso, y HClO3 y HClO4 tienen -ico." },
          { paso: "Fe2O3: óxido férrico (óxido de hierro III, con Fe en +3).", porque: "El hierro tiene dos estados de oxidación (+2 y +3). Con el sufijo -ico se indica el mayor, o se escribe el número romano en la nomenclatura Stock." },
          { paso: "NaHSO4: hidrogenosulfato de sodio (también llamado sulfato ácido de sodio).", porque: "El ion HSO4- conserva un H que no fue reemplazado, por eso el nombre incluye 'hidrogeno' o 'ácido'." },
          { paso: "CH3-CH2-OH: etanol (alcohol etílico).", porque: "Un alcohol de 2 carbonos se nombra con la raíz 'et-' y el sufijo '-ol', que indica el grupo -OH." }
        ],
        resultado: "HClO2: ácido cloroso; Fe2O3: óxido férrico; NaHSO4: hidrogenosulfato de sodio; CH3CH2OH: etanol"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Lewis del SO2: $$[\\text{O}=\\text{S}-\\text{O}]^{\\text{res.}}$$ con un par libre sobre el S y un doble enlace S=O en una forma de resonancia.", porque: "El S tiene 6 electrones de valencia y cada O otros 6: en total 18 electrones. Como el S se ubica en el centro, puede formar un doble enlace y un par libre; las dos formas de resonancia reparten el doble enlace entre los dos O." },
          { paso: "Geometría y polaridad: molécula angular (aprox. 119°), polar.", porque: "El S tiene 3 regiones de electrones (2 enlaces y 1 par libre), lo que da forma angular. Como la molécula no es simétrica, los dipolos no se cancelan y la molécula es polar." }
        ],
        resultado: "SO2: estructura de resonancia, angular y polar"
      }
    ],
    errores_tipicos: [
      { error: "En a) confundir el sufijo -oso con -ico, o nombrar HClO2 como clorato.", como_evitar: "Comparar el número de oxidación del Cl en cada oxoácido y elegir el sufijo según el orden." },
      { error: "En b) dibujar el SO2 lineal, como el CO2.", como_evitar: "El S tiene un par libre, así que la geometría es angular y la molécula es polar." },
      { error: "En a) nombrar el NaHSO4 como sulfato de sodio, sin el hidrógeno ácido.", como_evitar: "Si queda un H reemplazable en el anión, el nombre debe indicarlo con 'hidrogeno' o 'ácido'." }
    ]
  }
);
