// Ejercicios tipo parcial: mismo estilo que el parcial Tema B (redox con Lewis, combustión con calentamiento
// del agua, mezcla ácido-base con base débil, redox con estequiometría de gases).
// Cada ejercicio tiene datos propios; los valores numéricos están recalculados.
window.TIPO_PARCIAL = [
  {
    num: 1,
    nivel: "Tipo parcial",
    temas: ["reacciones", "uniones", "nomenclatura"],
    enunciado: "Se lleva a cabo la reacción K2Cr2O7 (ac) + 3 H2O2 (ac) + 4 H2SO4 (ac) -> Cr2(SO4)3 (ac) + 3 O2 (g) + K2SO4 (ac) + 7 H2O (l). a) Balancear las semirreacciones de oxidación y reducción utilizando el método ion-electrón. b) Indicar cuál es el agente oxidante y cuál es el agente reductor. c) Calcular la cantidad de moles de electrones transferidos al formarse 6 moles de O2. d) Si se utilizan 0,25 moles de K2Cr2O7 y el peróxido de hidrógeno (1,5 M) se agrega con un exceso del 10 %, calcular el volumen de solución de H2O2 utilizado. e) Escribir la fórmula de Lewis del peróxido de hidrógeno, indicar su geometría y si la molécula es polar.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Reducción del dicromato: $$\\text{Cr}_2\\text{O}_7^{2-} + 14\\,\\text{H}^+ + 6\\,e^- \\rightarrow 2\\,\\text{Cr}^{3+} + 7\\,\\text{H}_2\\text{O}$$", porque: "El cromo pasa de +6 (en Cr2O7^2-) a +3 y cada Cr gana 3 electrones, así que hay 6 electrones en total. Balanceamos primero el Cr (2 a la derecha), después el O con H2O (7 a la derecha), luego el H con H+ (14 a la izquierda) y por último las cargas: a la izquierda hay −2 + 14 = +12 y a la derecha +6, así que faltan 6 electrones del lado de los reactivos." },
          { paso: "Oxidación del agua oxigenada: $$\\text{H}_2\\text{O}_2 \\rightarrow \\text{O}_2 + 2\\,\\text{H}^+ + 2\\,e^-$$", porque: "El oxígeno del H2O2 está en −1 y en el O2 está en 0, así que cada átomo pierde 1 electrón y cada molécula de H2O2 entrega 2. Igualamos el O (2 a cada lado), después el H con H+ (2 a la derecha) y por último las cargas con 2 electrones del lado de los productos." },
          { paso: "Igualar electrones: multiplicamos la reducción por 1 (6 e−) y la oxidación por 3 (6 e−). Sumando: $$\\text{Cr}_2\\text{O}_7^{2-} + 8\\,\\text{H}^+ + 3\\,\\text{H}_2\\text{O}_2 \\rightarrow 2\\,\\text{Cr}^{3+} + 3\\,\\text{O}_2 + 7\\,\\text{H}_2\\text{O}$$", porque: "Al multiplicar cada semirreacción por el factor que iguala los electrones, se cancelan en la suma. Los 14 H+ de la reducción menos los 6 que se forman en la oxidación dejan 8 H+ como reactivos, que aportan los 4 H2SO4 de la ecuación original." }
        ],
        resultado: "Reducción: Cr2O7^2- + 14 H+ + 6 e- -> 2 Cr^3+ + 7 H2O; oxidación: H2O2 -> O2 + 2 H+ + 2 e- (x3)"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Agente oxidante: K2Cr2O7 (el Cr baja de +6 a +3 y gana electrones).", porque: "El oxidante es la sustancia que se reduce, es decir, la que gana electrones y hace que otra se oxide. Como el dicromato es el que se reduce, es el oxidante." },
          { paso: "Agente reductor: H2O2 (el O pasa de −1 a 0 y pierde electrones).", porque: "El reductor es la sustancia que se oxida, es decir, la que pierde electrones. El agua oxigenada es la que se oxida en la semirreacción de oxidación." }
        ],
        resultado: "Oxidante: K2Cr2O7 (Cr +6 -> +3); reductor: H2O2 (O −1 -> 0)"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "Electrones transferidos: $$n_{e^-} = 6\\ \\text{mol O}_2 \\times \\frac{2\\ \\text{mol e}^-}{1\\ \\text{mol O}_2} = 12\\ \\text{mol e}^-$$", porque: "Según la semirreacción de oxidación, cada mol de O2 se forma con 2 mol de electrones. Multiplicando por los 6 mol de O2 obtenemos el total de electrones transferidos." }
        ],
        resultado: "12 mol de electrones"
      },
      {
        parte: "d)",
        pasos: [
          { paso: "Peróxido estequiométrico: de la ecuación, 1 mol de K2Cr2O7 necesita 3 mol de H2O2, así que $$n = 0{,}25\\ \\text{mol} \\times 3 = 0{,}75\\ \\text{mol}$$", porque: "La relación molar sale directamente de los coeficientes de la ecuación balanceada: 3 mol de H2O2 por cada mol de dicromato." },
          { paso: "Con el 10 % de exceso: $$n = 1{,}1 \\times 0{,}75\\ \\text{mol} = 0{,}825\\ \\text{mol}$$", porque: "El exceso se aplica sobre la cantidad estequiométrica, multiplicando por 1,1, para asegurar que el dicromato reaccione por completo." },
          { paso: "Volumen de la solución 1,5 M: $$V = \\frac{n}{M} = \\frac{0{,}825\\ \\text{mol}}{1{,}5\\ \\text{mol/L}} = 0{,}55\\ \\text{L} = 550\\ \\text{mL}$$", porque: "La molaridad relaciona moles con litros de solución: M = n / V, así que V = n / M. Dividiendo los 0,825 mol entre 1,5 mol/L obtenemos 0,55 L." }
        ],
        resultado: "Volumen de H2O2 1,5 M: 550 mL"
      },
      {
        parte: "e)",
        pasos: [
          { paso: "Lewis del H2O2: $\\text{H}-\\text{O}-\\text{O}-\\text{H}$, con dos pares libres en cada O y enlaces O-H y O-O sencillos.", porque: "El H2O2 tiene 14 electrones de valencia: 2 H (1 cada uno) y 2 O (6 cada uno). Cada H se une a un O con un enlace sencillo y los dos O se unen entre sí; cada O completa su octeto con 2 pares libres." },
          { paso: "Geometría y polaridad: la molécula no es plana (forma de 'libro abierto'), tiene un momento dipolar neto y es polar.", porque: "Los pares libres de los O y los enlaces O-H, que son polares, hacen que la molécula no sea simétrica. Por eso los dipolos no se cancelan y la molécula es polar." }
        ],
        resultado: "H2O2: H-O-O-H, no plana, molécula polar"
      }
    ],
    errores_tipicos: [
      { error: "Balancear el H o el O en el lado equivocado, o no igualar las cargas con electrones.", como_evitar: "Seguir el orden: Cr, luego O con H2O, luego H con H+ y al final las cargas con electrones; comprobar que la carga total sea igual a ambos lados." },
      { error: "Decir que el H2O2 es el oxidante porque es el reactivo que se consume.", como_evitar: "El oxidante es el que se reduce: el Cr baja de +6 a +3, así que el K2Cr2O7 es el oxidante." },
      { error: "En d) aplicar el exceso al dicromato o tomar 0,75 mol como cantidad final sin multiplicar por 1,1.", como_evitar: "El exceso se aplica al reactivo que se agrega en exceso (H2O2): n = 1,1 × n estequiométrico, y después V = n / M." }
    ]
  },
  {
    num: 2,
    nivel: "Tipo parcial",
    temas: ["termodinamica", "gases", "liquidos"],
    enunciado: "Se mezclan 4 480 L de metano con 2 240 L de etano gaseosos medidos en CNPT. La mezcla se quema con aire y se obtienen agua líquida y dióxido de carbono gaseoso. El calor producido se utiliza para calentar 500 kg de agua que se encuentran a 20 °C, manteniendo la P = cte e igual a 1 atm durante todo el calentamiento. Datos: ΔH comb metano = −890 kJ/mol; ΔH comb etano = −1560 kJ/mol; Cp agua líquida = 75,23 J/(mol K); ΔH vap agua = 40,70 kJ/mol. a) Escribir las ecuaciones termoquímicas de la combustión completa de ambos gases. b) Hallar la fracción molar de cada gas en la mezcla. c) Calcular los moles de oxígeno necesarios si se utiliza un exceso de 25 % respecto del estequiométrico. d) Determinar el calor generado por la combustión. e) Si el 25 % del calor generado se pierde hacia el entorno, calcular el ΔH correspondiente al agua. f) Bosquejar la curva de calentamiento del agua y hallar su estado final (temperatura y fases presentes).",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Metano: $$\\text{CH}_4 + 2\\,\\text{O}_2 \\rightarrow \\text{CO}_2 + 2\\,\\text{H}_2\\text{O}(\\text{l})\\qquad \\Delta H = -890\\ \\text{kJ/mol}$$", porque: "Balanceamos el C (1 a cada lado), luego el H (4 a la izquierda, que dan 2 H2O) y por último el O: a la derecha hay 2 + 2 = 4 átomos de O, o sea 2 O2 a la izquierda. El agua se escribe líquida, como indica el enunciado." },
          { paso: "Etano: $$\\text{C}_2\\text{H}_6 + \\frac{7}{2}\\,\\text{O}_2 \\rightarrow 2\\,\\text{CO}_2 + 3\\,\\text{H}_2\\text{O}(\\text{l})\\qquad \\Delta H = -1560\\ \\text{kJ/mol}$$", porque: "El C (2) va a 2 CO2 y el H (6) a 3 H2O. Del lado de los productos hay 4 + 3 = 7 átomos de O, así que se necesitan 7/2 O2. Con coeficientes enteros, multiplicamos todo por 2." }
        ],
        resultado: "CH4 + 2 O2 -> CO2 + 2 H2O(l) (ΔH = −890 kJ/mol); C2H6 + 7/2 O2 -> 2 CO2 + 3 H2O(l) (ΔH = −1560 kJ/mol)"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Moles de cada gas en CNPT (Vm = 22,4 L/mol): $$n_{\\text{CH}_4} = \\frac{4\\,480\\ \\text{L}}{22{,}4\\ \\text{L/mol}} = 200\\ \\text{mol}, \\qquad n_{\\text{C}_2\\text{H}_6} = \\frac{2\\,240\\ \\text{L}}{22{,}4\\ \\text{L/mol}} = 100\\ \\text{mol}$$", porque: "En CNPT un mol de gas ideal ocupa 22,4 L, así que dividimos el volumen de cada gas por ese valor para obtener sus moles. Como están en las mismas condiciones, la relación de moles es la de volúmenes." },
          { paso: "Fracciones molares: $$x_{\\text{CH}_4} = \\frac{200}{300} = 0{,}667, \\qquad x_{\\text{C}_2\\text{H}_6} = \\frac{100}{300} = 0{,}333$$", porque: "La fracción molar es los moles del componente dividido por el total de moles de la mezcla (300 mol). La suma tiene que dar 1, lo que sirve como control." }
        ],
        resultado: "x(metano) = 0,667; x(etano) = 0,333"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "Oxígeno estequiométrico: $$n_{\\text{O}_2} = 200 \\times 2 + 100 \\times 3{,}5 = 750\\ \\text{mol}$$", porque: "Por la ecuación de cada gas, el metano necesita 2 mol de O2 por mol y el etano 3,5 mol. Multiplicamos los moles de cada gas por su coeficiente y sumamos." },
          { paso: "Con 25 % de exceso: $$n = 1{,}25 \\times 750\\ \\text{mol} = 937{,}5\\ \\text{mol O}_2$$", porque: "El exceso se aplica sobre la cantidad estequiométrica, multiplicando por 1,25 para asegurar que los gases se quemen por completo." }
        ],
        resultado: "O2 a suministrar: 937,5 mol (750 mol estequiométricos más 25 %)"
      },
      {
        parte: "d)",
        pasos: [
          { paso: "Calor de cada gas: $$q_{\\text{CH}_4} = 200 \\times (-890) = -178\\,000\\ \\text{kJ}; \\qquad q_{\\text{C}_2\\text{H}_6} = 100 \\times (-1560) = -156\\,000\\ \\text{kJ}$$", porque: "La entalpía de combustión está dada por mol de combustible, así que multiplicamos los moles de cada gas por su ΔH. El signo negativo indica que la combustión libera calor." },
          { paso: "Calor total: $$q_{\\text{comb}} = -178\\,000 - 156\\,000 = -334\\,000\\ \\text{kJ}$$", porque: "Sumamos los aportes de ambos gases. El resultado negativo indica que la mezcla libera energía, que luego se transfiere al agua." }
        ],
        resultado: "Calor generado: $-3{,}34\\times10^{5}\\ \\text{kJ}$"
      },
      {
        parte: "e)",
        pasos: [
          { paso: "Calor absorbido por el agua: $$q_{\\text{agua}} = 0{,}75 \\times 334\\,000\\ \\text{kJ} = 250\\,500\\ \\text{kJ}$$", porque: "Del calor liberado, el 25 % se pierde hacia el entorno, así que solo queda el 75 % para calentar el agua. Como ese calor entra al agua, es positivo para ella." },
          { paso: "ΔH del agua: $$\\Delta H = q_p = +250\\,500\\ \\text{kJ}$$", porque: "A presión constante el calor intercambiado es igual a la variación de entalpía, ΔH = q_p. Como el agua absorbe calor, su ΔH es positivo." }
        ],
        resultado: "ΔH (agua) = $+2{,}505\\times10^{5}\\ \\text{kJ}$"
      },
      {
        parte: "f)",
        pasos: [
          { paso: "Moles de agua: $$n = \\frac{500\\,000\\ \\text{g}}{18{,}0\\ \\text{g/mol}} = 2{,}78\\times10^{4}\\ \\text{mol}$$", porque: "Pasamos los 500 kg a gramos y dividimos por la masa molar del agua para obtener la cantidad de sustancia que se calienta." },
          { paso: "Tramo líquido de 20 °C a 100 °C: $$q_1 = n\\,c_p\\,\\Delta T = 2{,}78\\times10^{4} \\times 75{,}23 \\times 80 = 1{,}672\\times10^{5}\\ \\text{kJ}$$", porque: "El agua está líquida en todo el tramo, así que usamos su Cp de líquido: q = n · Cp · ΔT, pasando J a kJ dividiendo por 1000." },
          { paso: "Calor que queda para vaporizar: $$q_{\\text{vap}} = 2{,}505\\times10^{5} - 1{,}672\\times10^{5} = 8{,}33\\times10^{4}\\ \\text{kJ}$$", porque: "Lo que sobra después de llevar el agua a 100 °C se usa para cambiar de estado, a temperatura constante." },
          { paso: "Moles vaporizados: $$n_{\\text{vap}} = \\frac{8{,}33\\times10^{4}\\ \\text{kJ}}{40{,}70\\ \\text{kJ/mol}} = 2{,}05\\times10^{3}\\ \\text{mol}$$; el líquido que queda es $2{,}78\\times10^{4} - 2{,}05\\times10^{3} = 2{,}57\\times10^{4}$ mol.", porque: "Dividiendo el calor disponible por el ΔH de vaporización obtenemos cuántos mol se vaporizan. Lo que no se vaporiza sigue líquido a 100 °C." }
        ],
        resultado: "Estado final: 100 °C, con líquido (aprox. 93 %) y vapor (aprox. 7 %)"
      }
    ],
    errores_tipicos: [
      { error: "Usar el 100 % del calor de combustión para el agua y olvidar la pérdida del 25 %.", como_evitar: "Aplicar primero el 75 % y después usar ese valor en el calentamiento del agua." },
      { error: "Calcular la temperatura final con Cp sin verificar si el calor alcanza para vaporizar.", como_evitar: "Comparar el calor disponible con el necesario para llegar a 100 °C; si sobra, el resto se usa en la vaporización." },
      { error: "Usar el ΔH en kJ por gramo o en kcal sin pasar las unidades.", como_evitar: "El ΔH es por mol de combustible; multiplicar siempre los moles de cada gas por su ΔH en kJ/mol." }
    ]
  },
  {
    num: 3,
    nivel: "Tipo parcial",
    temas: ["soluciones", "acidobase"],
    enunciado: "a) Se mezclan 15 mL de disolución acuosa de HCl 0,2 M con 35 mL de disolución acuosa de Ba(OH)2 0,05 M. Escribir la ecuación de la reacción que tiene lugar y calcular el pH de la solución obtenida (considerar que ambos electrolitos son fuertes). b) Se disuelven 0,02 mol de metilamina (CH3NH2, Kb = 4,4 x 10^-4) en 500 mL de agua. Calcular el grado de disociación de la base y el pH de la solución.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Moles: $$n_{\\text{H}^+} = 0{,}2 \\times 0{,}015 = 0{,}0030\\ \\text{mol}, \\qquad n_{\\text{OH}^-} = 2 \\times 0{,}05 \\times 0{,}035 = 0{,}0035\\ \\text{mol}$$", porque: "El HCl aporta 1 H+ por molécula y el Ba(OH)2 aporta 2 OH- por fórmula. Multiplicamos la molaridad por el volumen en litros y, en el caso del Ba(OH)2, por 2." },
          { paso: "Ecuación: $$2\\,\\text{HCl} + \\text{Ba(OH)}_2 \\rightarrow \\text{BaCl}_2 + 2\\,\\text{H}_2\\text{O}$$ neta: $\\text{H}^+ + \\text{OH}^- \\rightarrow \\text{H}_2\\text{O}$", porque: "La neutralización combina H+ con OH- para formar agua. Como hay más OH- (0,0035 mol) que H+ (0,0030 mol), sobra base y el pH resulta básico." },
          { paso: "Exceso de OH-: $0{,}0035 - 0{,}0030 = 0{,}0005$ mol en un volumen total de 15 mL + 35 mL = 50 mL: $$[\\text{OH}^-] = \\frac{0{,}0005\\ \\text{mol}}{0{,}050\\ \\text{L}} = 0{,}0100\\ \\text{M}$$", porque: "Cada H+ que reacciona consume un OH-, así que el exceso es la diferencia de moles. La concentración se calcula dividiendo ese exceso por el volumen total de la mezcla." },
          { paso: "$\\text{pOH} = -\\log(0{,}0100) = 2{,}00$ y $\\text{pH} = 14 - 2{,}00 = 12{,}00$", porque: "El pOH es −log[OH-] y, a 25 °C, pH + pOH = 14." }
        ],
        resultado: "pH = 12,00"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Concentración de la base: $$C = \\frac{0{,}02\\ \\text{mol}}{0{,}500\\ \\text{L}} = 0{,}04\\ \\text{M}$$", porque: "La molaridad es moles de soluto sobre litros de solución; los 500 mL se pasan a litros." },
          { paso: "Verificación de la aproximación: $$\\alpha \\approx \\sqrt{\\frac{K_b}{C}} = \\sqrt{\\frac{4{,}4\\times10^{-4}}{0{,}04}} = 0{,}105$$ que es mayor que 5 %, así que la aproximación no es válida.", porque: "La fórmula simplificada supone que α es pequeño (menos del 5 %). Como aquí da 10,5 %, hay que resolver la ecuación completa de equilibrio." },
          { paso: "Ecuación cuadrática: $$\\frac{x^2}{C - x} = K_b \\Rightarrow x^2 + K_b\\,x - K_b\\,C = 0 \\Rightarrow x = \\frac{-K_b + \\sqrt{K_b^2 + 4K_b C}}{2} = 3{,}98\\times10^{-3}\\ \\text{M}$$", porque: "Para la base débil, Kb = [CH3NH3+][OH-]/[CH3NH2] = x²/(C − x), donde x es la concentración de OH- formada. Reordenamos como ecuación de segundo grado y usamos la fórmula resolvente con la raíz positiva." },
          { paso: "Grado de disociación y pH: $$\\alpha = \\frac{x}{C} = \\frac{3{,}98\\times10^{-3}}{0{,}04} = 0{,}0995\\ (9{,}95\\ \\%)$$ y $\\text{pOH} = -\\log(3{,}98\\times10^{-3}) = 2{,}40$ y $\\text{pH} = 11{,}60$", porque: "El grado de disociación es la fracción de base que reacciona, α = x / C. El pOH sale de la concentración de OH- y el pH de pH = 14 − pOH." }
        ],
        resultado: "α = 9,95 %; pH = 11,60"
      }
    ],
    errores_tipicos: [
      { error: "Contar 1 mol de OH- por mol de Ba(OH)2, o dar pH = 7 por creer que la mezcla es neutra.", como_evitar: "El Ba(OH)2 aporta 2 OH-; como sobra base, el pH es mayor que 7." },
      { error: "En b) usar α = √(Kb/C) sin verificar que α sea menor que 5 %.", como_evitar: "Si la aproximación da más de 5 %, resolver la ecuación cuadrática con x = [OH-]." },
      { error: "En b) calcular [H+] = C · α como si la base fuera un ácido.", como_evitar: "Para una base débil, la concentración que importa es [OH-] = C · α o x; después pOH y pH = 14 − pOH." }
    ]
  },
  {
    num: 4,
    nivel: "Tipo parcial",
    temas: ["reacciones", "gases", "uniones"],
    enunciado: "Se hace reaccionar cobre metálico con ácido nítrico concentrado según la reacción sin balancear Cu (s) + HNO3 (ac) -> Cu(NO3)2 (ac) + NO (g) + H2O (l). Si se disuelven 10 g de Cu (M = 63,55 g/mol): a) Balancear la reacción por el método ion-electrón. b) Indicar el agente oxidante y el agente reductor. c) Calcular el volumen de NO medido en CNPT que se obtiene. d) Si el rendimiento de la reacción es del 80 %, calcular la masa de Cu(NO3)2 obtenida (M = 187,57 g/mol). e) Escribir la fórmula de Lewis del NO e indicar si tiene electrones desapareados.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Reducción del nitrato: $$\\text{NO}_3^- + 4\\,\\text{H}^+ + 3\\,e^- \\rightarrow \\text{NO} + 2\\,\\text{H}_2\\text{O}$$", porque: "El nitrógeno pasa de +5 (en NO3-) a +2 (en NO) y gana 3 electrones. Igualamos el O con H2O (3 a la izquierda, 2 a la derecha: agregamos 2 H2O a la derecha, y el O sobrante se completa con el H), luego el H con H+ y por último las cargas: a la izquierda hay −1 + 4 = +3 y a la derecha 0, así que faltan 3 electrones del lado de los reactivos." },
          { paso: "Oxidación del cobre: $$\\text{Cu} \\rightarrow \\text{Cu}^{2+} + 2\\,e^-$$", porque: "El cobre pasa de 0 a +2 y pierde 2 electrones por átomo. La carga queda igualada con los 2 electrones del lado de los productos." },
          { paso: "Igualar electrones: multiplicamos la reducción por 2 (6 e−) y la oxidación por 3 (6 e−). Sumando y agregando 6 NO3- como espectadores: $$3\\,\\text{Cu} + 8\\,\\text{HNO}_3 \\rightarrow 3\\,\\text{Cu(NO}_3)_2 + 2\\,\\text{NO} + 4\\,\\text{H}_2\\text{O}$$", porque: "Al igualar los electrones se cancelan en la suma. Los 6 nitratos que no cambian de estado se agregan como espectadores para pasar de la ecuación iónica a la molecular; el balance del N (8 = 6 + 2) lo confirma." }
        ],
        resultado: "3 Cu + 8 HNO3 -> 3 Cu(NO3)2 + 2 NO + 4 H2O"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Agente oxidante: HNO3 (el N baja de +5 a +2 y gana electrones).", porque: "El oxidante es la sustancia que se reduce. El nitrógeno del ácido nítrico gana electrones al pasar a NO." },
          { paso: "Agente reductor: Cu (pasa de 0 a +2 y pierde electrones).", porque: "El reductor es la sustancia que se oxida, es decir, la que pierde electrones. El cobre metálico se oxida a Cu2+." }
        ],
        resultado: "Oxidante: HNO3 (N +5 -> +2); reductor: Cu (0 -> +2)"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "Moles de cobre: $$n_{\\text{Cu}} = \\frac{10\\ \\text{g}}{63{,}55\\ \\text{g/mol}} = 0{,}1574\\ \\text{mol}$$", porque: "Dividimos la masa por la masa molar para obtener la cantidad de sustancia de cobre." },
          { paso: "Moles de NO: $$n_{\\text{NO}} = 0{,}1574\\ \\text{mol Cu} \\times \\frac{2\\ \\text{mol NO}}{3\\ \\text{mol Cu}} = 0{,}1049\\ \\text{mol}$$ y volumen en CNPT: $$V = 0{,}1049\\ \\text{mol} \\times 22{,}4\\ \\text{L/mol} = 2{,}35\\ \\text{L}$$", porque: "De la ecuación balanceada, 3 mol de Cu producen 2 mol de NO. En CNPT un mol de gas ocupa 22,4 L, así que multiplicamos los moles por ese valor." }
        ],
        resultado: "Volumen de NO en CNPT: 2,35 L"
      },
      {
        parte: "d)",
        pasos: [
          { paso: "Moles de Cu(NO3)2 teóricos: por la relación 3 a 3, $n = 0{,}1574$ mol; con 80 % de rendimiento, $n_{\\text{real}} = 0{,}80 \\times 0{,}1574 = 0{,}1259$ mol.", porque: "Por la ecuación, cada mol de Cu forma un mol de Cu(NO3)2. El rendimiento indica qué fracción del valor teórico se obtiene en la práctica." },
          { paso: "Masa obtenida: $$m = 0{,}1259\\ \\text{mol} \\times 187{,}57\\ \\text{g/mol} = 23{,}6\\ \\text{g}$$", porque: "Multiplicamos los moles reales por la masa molar del nitrato de cobre para obtener la masa en gramos." }
        ],
        resultado: "Masa de Cu(NO3)2 obtenida: 23,6 g"
      },
      {
        parte: "e)",
        pasos: [
          { paso: "Lewis del NO: $\\text{N}=\\text{O}$ con un par libre sobre el O y un electrón desapareado sobre el N.", porque: "El NO tiene 11 electrones de valencia (5 del N y 6 del O). Como el número es impar, no todos pueden formar pares: uno queda sin aparear en el N." },
          { paso: "Conclusión: el NO tiene un electrón desapareado, por lo que es paramagnético y se comporta como un radical.", porque: "Un electrón sin aparear es la característica de una especie radical; esa propiedad explica la reactividad del NO." }
        ],
        resultado: "NO: enlace doble N=O con un electrón desapareado (radical)"
      }
    ],
    errores_tipicos: [
      { error: "Balancear el N sin contar el NO del producto, o dejar el H sin igualar.", como_evitar: "Comprobar el N antes y después (8 = 6 + 2) y el H con los 4 H2O." },
      { error: "Usar la masa molar del cobre como si fuera un volumen, o olvidar la proporción 2 a 3 con el NO.", como_evitar: "Primero moles de Cu, después la relación de la ecuación, y recién después el volumen en CNPT." },
      { error: "En d) aplicar el rendimiento sobre la masa de cobre en vez de sobre el producto.", como_evitar: "El rendimiento se aplica al producto obtenido: n real = rendimiento × n teórico." }
    ]
  }
];
