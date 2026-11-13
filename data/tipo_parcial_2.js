// Ejercicios tipo parcial, segunda tanda (9 en total: 3 de redox, 3 de combustión y 3 de ácido-base).
// Los ejercicios 1 a 4 están en data/tipo_parcial.js. Los números están recalculados con Node.
window.TIPO_PARCIAL = window.TIPO_PARCIAL || [];
window.TIPO_PARCIAL.push(
  {
    num: 5,
    nivel: "Tipo parcial",
    temas: ["reacciones", "uniones", "gases"],
    enunciado: "Se lleva a cabo la reacción 2 KMnO4 (ac) + 5 H2C2O4 (ac) + 3 H2SO4 (ac) -> 2 MnSO4 (ac) + K2SO4 (ac) + 10 CO2 (g) + 8 H2O (l). a) Balancear las semirreacciones de oxidación y reducción utilizando el método ion-electrón. b) Indicar cuál es el agente oxidante y cuál es el agente reductor. c) Calcular la cantidad de moles de electrones transferidos cuando se forman 0,5 moles de CO2. d) Si se oxidan 2,50 g de ácido oxálico (M = 90,03 g/mol), calcular el volumen de KMnO4 0,100 M necesario. e) Escribir la fórmula de Lewis del CO2 e indicar su geometría y si la molécula es polar.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Reducción del permanganato: $$\\text{MnO}_4^- + 8\\,\\text{H}^+ + 5\\,e^- \\rightarrow \\text{Mn}^{2+} + 4\\,\\text{H}_2\\text{O}$$", porque: "El manganeso pasa de +7 a +2 y gana 5 electrones. Balanceamos el Mn, luego el O con H2O (4 a la derecha), el H con H+ (8 a la izquierda) y por último las cargas: a la izquierda hay +7 y a la derecha +2, así que faltan 5 electrones del lado de los reactivos." },
          { paso: "Oxidación del ácido oxálico: $$\\text{H}_2\\text{C}_2\\text{O}_4 \\rightarrow 2\\,\\text{CO}_2 + 2\\,\\text{H}^+ + 2\\,e^-$$", porque: "Cada carbono del oxalato pasa de +3 a +4, así que pierde 1 electrón; como hay 2 carbonos, se pierden 2 electrones por molécula. El oxígeno y el hidrógeno se igualan con CO2 y H+, y las cargas con los 2 electrones de los productos." },
          { paso: "Igualar electrones: reducción por 2 (10 e−) y oxidación por 5 (10 e−). Sumando y completando con el ácido: $$2\\,\\text{MnO}_4^- + 5\\,\\text{H}_2\\text{C}_2\\text{O}_4 + 6\\,\\text{H}^+ \\rightarrow 2\\,\\text{Mn}^{2+} + 10\\,\\text{CO}_2 + 8\\,\\text{H}_2\\text{O}$$", porque: "Al igualar los electrones se cancelan en la suma. Los 16 H+ de la reducción menos los 10 que se forman en la oxidación dejan 6 H+ como reactivos, que aportan los 3 H2SO4 de la ecuación original." }
        ],
        resultado: "Reducción: MnO4- + 8 H+ + 5 e- -> Mn2+ + 4 H2O (x2); oxidación: H2C2O4 -> 2 CO2 + 2 H+ + 2 e- (x5)"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Agente oxidante: KMnO4 (el Mn baja de +7 a +2 y gana electrones).", porque: "El oxidante es la sustancia que se reduce, es decir, la que gana electrones." },
          { paso: "Agente reductor: H2C2O4 (el C sube de +3 a +4 y pierde electrones).", porque: "El reductor es la sustancia que se oxida, es decir, la que pierde electrones. El ácido oxálico es el que se oxida." }
        ],
        resultado: "Oxidante: KMnO4 (Mn +7 -> +2); reductor: H2C2O4 (C +3 -> +4)"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "Electrones transferidos: $$n_{e^-} = 0{,}5\\ \\text{mol CO}_2 \\times \\frac{10\\ \\text{mol e}^-}{10\\ \\text{mol CO}_2} = 0{,}5\\ \\text{mol e}^-$$", porque: "De la ecuación balanceada, cada CO2 se forma con 1 electrón transferido (10 electrones por 10 CO2). Por eso 0,5 mol de CO2 corresponden a 0,5 mol de electrones." }
        ],
        resultado: "0,5 mol de electrones"
      },
      {
        parte: "d)",
        pasos: [
          { paso: "Moles de ácido oxálico: $$n = \\frac{2{,}50\\ \\text{g}}{90{,}03\\ \\text{g/mol}} = 0{,}02777\\ \\text{mol}$$", porque: "Dividimos la masa por la masa molar para obtener la cantidad de sustancia del reductor." },
          { paso: "Moles de KMnO4: $$n_{\\text{KMnO}_4} = 0{,}02777\\ \\text{mol} \\times \\frac{2\\ \\text{mol KMnO}_4}{5\\ \\text{mol H}_2\\text{C}_2\\text{O}_4} = 0{,}01111\\ \\text{mol}$$", porque: "La ecuación balanceada indica 2 mol de KMnO4 por cada 5 mol de ácido oxálico." },
          { paso: "Volumen: $$V = \\frac{0{,}01111\\ \\text{mol}}{0{,}100\\ \\text{mol/L}} = 0{,}111\\ \\text{L} = 111\\ \\text{mL}$$", porque: "Con V = n / M, dividimos los moles de permanganato por su molaridad." }
        ],
        resultado: "Volumen de KMnO4 0,100 M: 111 mL"
      },
      {
        parte: "e)",
        pasos: [
          { paso: "Lewis del CO2: $\\text{O}=\\text{C}=\\text{O}$, con dos dobles enlaces y sin pares libres en el C.", porque: "El C tiene 4 electrones de valencia y cada O necesita 2 más: compartiendo dos pares con cada O se completan todos los octetos." },
          { paso: "Geometría y polaridad: molécula lineal y apolar.", porque: "Cada enlace C=O es polar, pero los dos dipolos son iguales y opuestos y se cancelan por la geometría lineal. Por eso la molécula es apolar." }
        ],
        resultado: "CO2: O=C=O, lineal y apolar"
      }
    ],
    errores_tipicos: [
      { error: "Olvidar que el oxalato tiene 2 carbonos y contar 1 electrón en vez de 2 por molécula.", como_evitar: "Contar la variación de estado de oxidación de cada átomo de C: son dos." },
      { error: "En d) tomar el volumen en litros como si fuera en mL, o no usar la relación 2 a 5.", como_evitar: "Primero los moles de oxalato, después la relación de la ecuación, y recién después V = n / M." },
      { error: "En e) decir que el CO2 es polar porque tiene enlaces polares.", como_evitar: "Verificar la geometría: si los dipolos se cancelan (molécula lineal simétrica), la molécula es apolar." }
    ]
  },
  {
    num: 6,
    nivel: "Tipo parcial",
    temas: ["termodinamica", "gases", "liquidos"],
    enunciado: "Se mezclan 3 360 L de propano con 1 120 L de hidrógeno gaseosos medidos en CNPT. La mezcla se quema con aire y se obtienen agua líquida y dióxido de carbono gaseoso (en el caso del hidrógeno, agua líquida). El calor producido se utiliza para calentar 100 kg de agua que se encuentran a −10 °C, a P = 1 atm constante. Datos: ΔH comb propano = −2220 kJ/mol; ΔH formación del agua líquida = −286 kJ/mol; ΔH fus agua = 6,03 kJ/mol; ΔH vap agua = 40,70 kJ/mol; Cp agua sólida = 33,60 J/(mol K); Cp agua líquida = 75,23 J/(mol K). Considerar que el 30 % del calor se pierde hacia el entorno. a) Escribir las ecuaciones termoquímicas de la combustión de ambos gases. b) Hallar la fracción molar del propano en la mezcla. c) Calcular el oxígeno necesario si se usa un exceso de 30 % respecto del estequiométrico. d) Calcular el calor absorbido por el agua. e) Bosquejar la curva de calentamiento y hallar el estado final (temperatura y fases presentes).",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Propano: $$\\text{C}_3\\text{H}_8 + 5\\,\\text{O}_2 \\rightarrow 3\\,\\text{CO}_2 + 4\\,\\text{H}_2\\text{O}(\\text{l})\\qquad \\Delta H = -2220\\ \\text{kJ/mol}$$", porque: "Balanceamos el C (3 a la derecha), el H (8, que dan 4 H2O) y el O: a la derecha hay 6 + 4 = 10 átomos de O, o sea 5 O2 a la izquierda. El agua se escribe líquida." },
          { paso: "Hidrógeno: $$\\text{H}_2 + \\frac{1}{2}\\,\\text{O}_2 \\rightarrow \\text{H}_2\\text{O}(\\text{l})\\qquad \\Delta H = -286\\ \\text{kJ/mol}$$", porque: "El H2 se combina con medio mol de O2 para formar 1 mol de agua líquida. El dato dado corresponde a esa reacción." }
        ],
        resultado: "C3H8 + 5 O2 -> 3 CO2 + 4 H2O(l); H2 + 1/2 O2 -> H2O(l)"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Moles: $$n_{\\text{propano}} = \\frac{3\\,360\\ \\text{L}}{22{,}4\\ \\text{L/mol}} = 150\\ \\text{mol}, \\qquad n_{\\text{H}_2} = \\frac{1\\,120\\ \\text{L}}{22{,}4\\ \\text{L/mol}} = 50\\ \\text{mol}$$", porque: "En CNPT un mol de gas ocupa 22,4 L, así que dividimos el volumen de cada gas por ese valor." },
          { paso: "Fracción molar: $$x_{\\text{propano}} = \\frac{150}{200} = 0{,}750$$", porque: "La fracción molar es los moles del propano sobre el total de moles (150 + 50 = 200 mol)." }
        ],
        resultado: "x(propano) = 0,750; x(hidrógeno) = 0,250"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "Oxígeno estequiométrico: $$n = 150 \\times 5 + 50 \\times 0{,}5 = 775\\ \\text{mol}$$", porque: "El propano necesita 5 mol de O2 por mol y el hidrógeno 0,5 mol. Multiplicamos cada cantidad por su coeficiente y sumamos." },
          { paso: "Con 30 % de exceso: $$n = 1{,}3 \\times 775\\ \\text{mol} = 1\\,007{,}5\\ \\text{mol O}_2$$", porque: "El exceso se aplica sobre la cantidad estequiométrica, multiplicando por 1,3." }
        ],
        resultado: "O2 a suministrar: 1 007,5 mol"
      },
      {
        parte: "d)",
        pasos: [
          { paso: "Calor generado: $$q = 150 \\times (-2220) + 50 \\times (-286) = -347\\,300\\ \\text{kJ}$$", porque: "Multiplicamos los moles de cada gas por su ΔH y sumamos. El signo negativo indica que la combustión libera calor." },
          { paso: "Calor absorbido por el agua: $$q_{\\text{agua}} = 0{,}70 \\times 347\\,300\\ \\text{kJ} = 243\\,110\\ \\text{kJ}$$", porque: "Como el 30 % se pierde, el agua recibe el 70 % del calor generado. Ese calor entra al agua, así que es positivo para ella." }
        ],
        resultado: "Calor absorbido por el agua: +2,431 × 10^5 kJ"
      },
      {
        parte: "e)",
        pasos: [
          { paso: "Moles de agua: $$n = \\frac{100\\,000\\ \\text{g}}{18{,}0\\ \\text{g/mol}} = 5{,}56\\times10^{3}\\ \\text{mol}$$", porque: "Pasamos los 100 kg a gramos y dividimos por la masa molar del agua." },
          { paso: "Tramos: hielo de −10 °C a 0 °C: $$q_1 = 5{,}56\\times10^{3} \\times 33{,}60 \\times 10 = 1{,}87\\times10^{3}\\ \\text{kJ}$$; fusión: $$q_2 = 5{,}56\\times10^{3} \\times 6{,}03 = 3{,}35\\times10^{4}\\ \\text{kJ}$$; líquido de 0 °C a 100 °C: $$q_3 = 5{,}56\\times10^{3} \\times 75{,}23 \\times 100 = 4{,}18\\times10^{4}\\ \\text{kJ}$$", porque: "Cada tramo usa el calor que corresponde: sensible con el Cp del sólido, latente en la fusión (sin cambio de temperatura) y sensible con el Cp del líquido." },
          { paso: "Calor que queda para vaporizar: $$2{,}431\\times10^{5} - (1{,}87\\times10^{3} + 3{,}35\\times10^{4} + 4{,}18\\times10^{4}) = 1{,}66\\times10^{5}\\ \\text{kJ}$$, y $$n_{\\text{vap}} = \\frac{1{,}66\\times10^{5}}{40{,}70} = 4{,}08\\times10^{3}\\ \\text{mol}$$", porque: "Lo que sobra después de llegar a 100 °C se usa para vaporizar a temperatura constante. Dividimos por el ΔH de vaporización para obtener los moles de vapor." },
          { paso: "Estado final: T = 100 °C, con vapor (aprox. 73 %, unos 4,08 × 10^3 mol) y líquido (aprox. 27 %, unos 1,48 × 10^3 mol).", porque: "Como el calor alcanza para vaporizar solo una parte del agua, el sistema queda a 100 °C con líquido y vapor coexistiendo." }
        ],
        resultado: "Estado final: 100 °C, con vapor y líquido presentes"
      }
    ],
    errores_tipicos: [
      { error: "Olvidar el calor de fusión o de vaporización y calcular solo con Cp.", como_evitar: "En 0 °C y 100 °C el calor cambia de estado: sumar n · ΔH_fus y n · ΔH_vap." },
      { error: "Usar el 100 % del calor generado en vez del 70 % que llega al agua.", como_evitar: "Aplicar primero la pérdida del 30 % y después usar ese valor en los tramos." },
      { error: "Tomar el ΔH del hidrógeno como si fuera de vapor de agua.", como_evitar: "El enunciado dio el valor para agua líquida: la ecuación del H2 debe terminar en H2O(l)." }
    ]
  },
  {
    num: 7,
    nivel: "Tipo parcial",
    temas: ["termodinamica", "liquidos", "soluciones"],
    enunciado: "Se queman 50,0 g de etanol líquido (M = 46,07 g/mol) en un calorímetro. La combustión es C2H5OH (l) + 3 O2 (g) -> 2 CO2 (g) + 3 H2O (l), con ΔH comb = −1367 kJ/mol. El calor producido se utiliza para calentar 5,00 L de agua que se encuentran a 15 °C, y se pierde el 50 % del calor hacia el entorno. Datos: M(H2O) = 18,0 g/mol; Cp agua líquida = 75,23 J/(mol K). a) Calcular el calor generado por la combustión de los 50,0 g de etanol. b) Calcular el calor absorbido por el agua. c) Calcular la temperatura final del agua, suponiendo que no hay cambio de fase. d) Justificar por qué la combustión con agua líquida como producto libera más calor que si el agua se produjera como vapor.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Moles de etanol: $$n = \\frac{50{,}0\\ \\text{g}}{46{,}07\\ \\text{g/mol}} = 1{,}085\\ \\text{mol}$$", porque: "Dividimos la masa por la masa molar para obtener la cantidad de sustancia." },
          { paso: "Calor generado: $$q = 1{,}085\\ \\text{mol} \\times (-1367\\ \\text{kJ/mol}) = -1{,}484\\times10^{3}\\ \\text{kJ}$$", porque: "La entalpía de combustión está dada por mol de etanol, así que multiplicamos los moles por ΔH. El signo negativo indica que se libera calor." }
        ],
        resultado: "Calor generado: −1,484 × 10^3 kJ"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Calor absorbido por el agua: $$q_{\\text{agua}} = 0{,}50 \\times 1{,}484\\times10^{3}\\ \\text{kJ} = 742\\ \\text{kJ}$$", porque: "Se pierde el 50 % del calor, así que el agua recibe la mitad del calor generado. Ese calor entra al agua, así que es positivo para ella." }
        ],
        resultado: "Calor absorbido por el agua: +742 kJ"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "Moles de agua: $$n = \\frac{5\\,000\\ \\text{g}}{18{,}0\\ \\text{g/mol}} = 2{,}78\\times10^{2}\\ \\text{mol}$$", porque: "Pasamos los 5,00 L (5000 g, con densidad 1 g/mL) a moles de agua." },
          { paso: "Temperatura final: $$q = n\\,c_p\\,\\Delta T \\Rightarrow \\Delta T = \\frac{742\\,000\\ \\text{J}}{2{,}78\\times10^{2}\\ \\text{mol} \\times 75{,}23\\ \\text{J/(mol K)}} = 35{,}5\\ \\text{K}$$, y $T_f = 15 + 35{,}5 = 50{,}5\\ ^\\circ\\text{C}$", porque: "A presión constante el calor absorbido en un tramo sin cambio de fase se calcula con el Cp del líquido. Despejamos ΔT y se lo sumamos a la temperatura inicial. Como 50,5 °C es menor que 100 °C, no hay vaporización." }
        ],
        resultado: "Temperatura final del agua: 50,5 °C"
      },
      {
        parte: "d)",
        pasos: [
          { paso: "Justificación: el agua líquida como producto libera ΔH_vap adicional por cada mol de agua que se condensa.", porque: "Al pasar de vapor a líquido, el agua libera la entalpía de condensación, que es el ΔH_vap cambiado de signo. Por eso la combustión con agua líquida libera más calor que con vapor." }
        ],
        resultado: "Con agua líquida se libera más calor, porque se suma la condensación (ΔH_cond = −ΔH_vap)"
      }
    ],
    errores_tipicos: [
      { error: "Usar la masa de etanol en gramos como si fueran moles en la ecuación.", como_evitar: "Primero dividir por la masa molar (46,07 g/mol) y recién después multiplicar por ΔH en kJ/mol." },
      { error: "Aplicar el 50 % de pérdida al calor del agua en lugar de al de la combustión, o al revés.", como_evitar: "La pérdida se aplica al calor generado por la combustión; el agua recibe el resto." },
      { error: "En c) olvidar que el agua tiene 5,00 L y pasar mal el volumen a masa.", como_evitar: "Con densidad 1 g/mL, 5,00 L = 5000 g; de allí los moles de agua." }
    ]
  },
  {
    num: 8,
    nivel: "Tipo parcial",
    temas: ["acidobase", "soluciones", "equilibrio"],
    enunciado: "a) Se mezclan 20,0 mL de HNO3 0,10 M con 30,0 mL de KOH 0,050 M. Escribir la ecuación de la reacción y calcular el pH de la solución resultante (considerar electrolitos fuertes). b) Calcular el pH de una solución de ácido acético 0,10 M, cuya constante de disociación vale Ka = 1,8 x 10^-5. Calcular también el grado de disociación.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Moles: $$n_{\\text{H}^+} = 0{,}10 \\times 0{,}0200 = 2{,}0\\times10^{-3}\\ \\text{mol}, \\qquad n_{\\text{OH}^-} = 0{,}050 \\times 0{,}0300 = 1{,}5\\times10^{-3}\\ \\text{mol}$$", porque: "Multiplicamos la molaridad por el volumen en litros. El HNO3 y el KOH son electrolitos fuertes, así que liberan 1 H+ y 1 OH- por fórmula." },
          { paso: "Ecuación: $$\\text{HNO}_3 + \\text{KOH} \\rightarrow \\text{KNO}_3 + \\text{H}_2\\text{O}$$ neta: $\\text{H}^+ + \\text{OH}^- \\rightarrow \\text{H}_2\\text{O}$", porque: "La neutralización combina H+ con OH- para formar agua. Como hay más H+ (2,0 × 10^-3 mol) que OH- (1,5 × 10^-3 mol), sobra ácido y el pH es ácido." },
          { paso: "Exceso de H+: $2{,}0\\times10^{-3} - 1{,}5\\times10^{-3} = 5{,}0\\times10^{-4}$ mol en 50,0 mL: $$[\\text{H}^+] = \\frac{5{,}0\\times10^{-4}\\ \\text{mol}}{0{,}0500\\ \\text{L}} = 1{,}0\\times10^{-2}\\ \\text{M}$$", porque: "Cada OH- que reacciona consume un H+, así que el exceso es la diferencia de moles. La concentración se calcula con el volumen total de la mezcla (20,0 + 30,0 mL)." },
          { paso: "$\\text{pH} = -\\log(1{,}0\\times10^{-2}) = 2{,}00$", porque: "El pH es −log[H+] por definición." }
        ],
        resultado: "pH = 2,00"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Equilibrio: $$\\text{CH}_3\\text{COOH} \\rightleftharpoons \\text{CH}_3\\text{COO}^- + \\text{H}^+ \\qquad K_a = 1{,}8\\times10^{-5}$$", porque: "El ácido acético es débil: solo se disocia parcialmente, por eso usamos la constante de equilibrio." },
          { paso: "Aproximación: $$[\\text{H}^+] = \\sqrt{K_a C} = \\sqrt{1{,}8\\times10^{-5} \\times 0{,}10} = 1{,}34\\times10^{-3}\\ \\text{M}$$", porque: "Como la disociación es pequeña, la concentración de ácido que queda es casi igual a C, y K_a = x² / (C − x) se simplifica a x² = K_a · C." },
          { paso: "Verificación y pH: $\\alpha = \\frac{1{,}34\\times10^{-3}}{0{,}10} = 1{,}34\\ \\%$ (menor que 5 %, la aproximación es válida); $\\text{pH} = -\\log(1{,}34\\times10^{-3}) = 2{,}87$", porque: "El grado de disociación es la fracción de ácido que se disocia, α = [H+] / C. Como α es menor que 5 %, la aproximación usada en el paso anterior es correcta." }
        ],
        resultado: "pH = 2,87; α = 1,34 %"
      }
    ],
    errores_tipicos: [
      { error: "En a) dar pH = 7 porque 'se neutralizan'; en realidad sobra ácido.", como_evitar: "Comparar los moles de H+ y OH- antes de decidir: el que sobra define el pH." },
      { error: "En a) usar el volumen de un solo reactivo en la concentración final.", como_evitar: "La concentración del exceso se calcula con el volumen total de la mezcla (50,0 mL)." },
      { error: "En b) confundir el ácido débil con uno fuerte y usar [H+] = C.", como_evitar: "Para un ácido débil, [H+] = √(Ka · C) y el grado de disociación α = [H+] / C." }
    ]
  },
  {
    num: 9,
    nivel: "Tipo parcial",
    temas: ["acidobase", "soluciones", "gases"],
    enunciado: "a) Calcular el pH de una solución de amoníaco 0,15 M, sabiendo que Kb = 1,8 x 10^-5. Calcular también el grado de disociación de la base. b) Se quiere neutralizar 25,0 mL de ácido acético 0,100 M con una solución de NaOH 0,200 M. Calcular el volumen de NaOH necesario y escribir la ecuación de la reacción de neutralización.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Equilibrio: $$\\text{NH}_3 + \\text{H}_2\\text{O} \\rightleftharpoons \\text{NH}_4^+ + \\text{OH}^-$$ con $C = 0{,}15$ M.", porque: "El amoníaco es una base débil: acepta un protón del agua y produce OH-, en equilibrio parcial." },
          { paso: "Aproximación: $$[\\text{OH}^-] = \\sqrt{K_b C} = \\sqrt{1{,}8\\times10^{-5} \\times 0{,}15} = 1{,}64\\times10^{-3}\\ \\text{M}$$", porque: "Con la misma aproximación de la base débil, x² = K_b · C, ya que la disociación es pequeña." },
          { paso: "Grado de disociación: $$\\alpha = \\frac{1{,}64\\times10^{-3}}{0{,}15} = 1{,}10\\times10^{-2}\\ (1{,}10\\ \\%)$$; como es menor que 5 %, la aproximación es válida.", porque: "α es la fracción de base que reacciona. Al ser menor que 5 %, la simplificación del paso anterior no altera de forma apreciable el resultado." },
          { paso: "$\\text{pOH} = -\\log(1{,}64\\times10^{-3}) = 2{,}78$ y $\\text{pH} = 14 - 2{,}78 = 11{,}22$", porque: "El pOH sale de la concentración de OH- y, a 25 °C, pH + pOH = 14." }
        ],
        resultado: "pH = 11,22; α = 1,10 %"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Moles de ácido acético: $$n = 0{,}100\\ \\text{mol/L} \\times 0{,}0250\\ \\text{L} = 2{,}50\\times10^{-3}\\ \\text{mol}$$", porque: "Multiplicamos la molaridad por el volumen en litros." },
          { paso: "Ecuación: $$\\text{CH}_3\\text{COOH} + \\text{NaOH} \\rightarrow \\text{CH}_3\\text{COONa} + \\text{H}_2\\text{O}$$ (relación 1 a 1)", porque: "El ácido y la base reaccionan en proporción 1 a 1, produciendo acetato de sodio y agua." },
          { paso: "Volumen de NaOH: $$V = \\frac{2{,}50\\times10^{-3}\\ \\text{mol}}{0{,}200\\ \\text{mol/L}} = 1{,}25\\times10^{-2}\\ \\text{L} = 12{,}5\\ \\text{mL}$$", porque: "Con V = n / M, dividimos los moles de ácido por la molaridad de la base, porque se necesitan los mismos moles de OH- que de ácido." }
        ],
        resultado: "Volumen de NaOH 0,200 M: 12,5 mL"
      }
    ],
    errores_tipicos: [
      { error: "En a) calcular [OH-] = C · Kb o usar la fórmula de ácido débil.", como_evitar: "Para una base débil, [OH-] = √(Kb · C) y el grado de disociación es α = [OH-] / C." },
      { error: "En b) dividir el volumen de ácido por la molaridad en vez de los moles.", como_evitar: "Primero calcular los moles de ácido (M · V), después V = n / M de la base." },
      { error: "En b) pensar que la neutralización de un ácido débil da pH 7.", como_evitar: "Recordar que el acetato de sodio es básico, así que en el punto de equivalencia el pH no es 7." }
    ]
  }
);
