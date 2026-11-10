window.PARCIALES = window.PARCIALES || [];

// Constantes del examen: R = 8,31 J/mol·K = 0,0821 L·atm/mol·K = 1,99 cal/mol·K; 1 MPa = 9,869 atm.
// Grilla de corrección visible en la foto: Ej1 I-a 10, I-b 10, I-c 10, II 10 (40 pts); Ej2 a 8, b 10, c 12 (30 pts); Ej3 a 9, b 9, c 6, d 6 (30 pts). Total 100.
// Ojo con el dato del Ej3: el enunciado da ΔH < 0 para SbCl5(g) → SbCl3(g) + Cl2(g). Se usó tal cual; en la bibliografía la descomposición del SbCl5 suele ser endotérmica, así que si el profe lo corrigió, la respuesta de d) se invierte.
window.PARCIALES.push({
  id: "parcial-2024-05-30",
  tipo: "parcial",
  fecha: "30/05/2024",
  fuente: "parciales/IMG-20260331-WA0029.jpg",
  ejercicios: [
    {
      num: 1,
      temas: ["magnitudes", "reacciones", "gases", "uniones"],
      enunciado: "I) Una muestra de CaCO3 impurificado con arena se calienta y se produce la descomposición del CaCO3 en cal (CaO) y dióxido de carbono. El rendimiento de la reacción es de 85 % y al final se tienen 60 L de gas medidos en CNPT junto con 240 g de mezcla sólida (de arena, cal y CaCO3). Se pide calcular: a) los moles de gas formados; b) la masa de cal que se formó; c) la masa de CaCO3 en el sólido obtenido; d) la pureza del CaCO3 en la muestra original. II) Para el CaO y el CO2: dibuje la estructura de Lewis, indique tipos de enlace, fuerzas intermoleculares y polaridad del compuesto.",
      resolucion: [
        {
          parte: "I-a)",
          pasos: [
            { paso: "Reacción: $\\text{CaCO}_3(s) \\to \\text{CaO}(s) + \\text{CO}_2(g)$, relación 1:1:1.", porque: "Escribimos la ecuacion quimica y la balanceamos, porque los coeficientes fijan las proporciones en moles de todo el ejercicio. Como la relacion es 1:1:1, cada mol de $\\text{CaCO}_3$ que se descompone da un mol de $\\text{CaO}$ y un mol de $\\text{CO}_2$. Por eso lo que se consume de $\\text{CaCO}_3$ coincide con lo que se forma de los productos, y esa relacion se usa en los pasos siguientes." },
            { paso: "En CNPT, 1 mol de gas ocupa 22,4 L: $$n(\\text{CO}_2) = \\frac{60\\ \\text{L}}{22{,}4\\ \\text{L/mol}} = 2{,}679\\ \\text{mol}$$", porque: "Usamos el volumen molar de un gas en CNPT para pasar el volumen medido a moles, porque $n = \\frac{V}{V_m}$ relaciona la cantidad de sustancia con el volumen de un gas. Con $60\\ \\text{L}$ y $22{,}4\\ \\text{L/mol}$, el cociente da $2{,}679\\ \\text{mol}$ de $\\text{CO}_2$. Como el dato esta en CNPT, el resultado es valido y queda listo para la relacion 1:1 de los pasos siguientes." },
            { paso: "El gas medido ya es el real (con rendimiento incluido), así que no se corrige por el $85\\%$.", porque: "No corregimos el volumen porque el gas medido es el que realmente se formo, y el rendimiento del $85\\%$ ya esta incluido en esa medicion. Ese rendimiento afecta cuanto $\\text{CaCO}_3$ reacciono, no cuanto gas salio. Por eso el valor de $2{,}679\\ \\text{mol}$ se usa tal cual en el resto del ejercicio." }
          ],
          resultado: "$2{,}68\\ \\text{mol}$ de $\\text{CO}_2$"
        },
        {
          parte: "I-b)",
          pasos: [
            { paso: "$$n(\\text{CaO}) = n(\\text{CO}_2)_{\\text{real}} = 2{,}679\\ \\text{mol}$$", porque: "Usamos la relacion 1:1 de la ecuacion, que indica que cada mol de $\\text{CO}_2$ viene acompanado de un mol de $\\text{CaO}$. Por eso los moles de $\\text{CaO}$ son los $2{,}679\\ \\text{mol}$ de $\\text{CO}_2$ ya calculados. Usamos el valor real y no uno teorico, porque el rendimiento ya esta incorporado en la medicion del gas." },
            { paso: "$M(\\text{CaO}) = 56{,}08\\ \\text{g/mol}$ → $$m = 2{,}679\\ \\text{mol} \\times 56{,}08\\ \\text{g/mol} = 150{,}2\\ \\text{g}$$", porque: "Para pasar moles a gramos multiplicamos por la masa molar, porque esa magnitud indica cuantos gramos tiene un mol de la sustancia. Con $2{,}679\\ \\text{mol}$ y $56{,}08\\ \\text{g/mol}$, la masa de cal es $150{,}2\\ \\text{g}$. Las unidades se cancelan ($\\text{mol} \\times \\text{g/mol} = \\text{g}$), y ese resultado es la respuesta del punto b)." }
          ],
          resultado: "$150{,}2\\ \\text{g}$ de $\\text{CaO}$ (cal)"
        },
        {
          parte: "I-c)",
          pasos: [
            { paso: "El $85\\%$ es el rendimiento sobre el $\\text{CaCO}_3$ inicial: $$n_0 = \\frac{2{,}679}{0{,}85} = 3{,}151\\ \\text{mol}$$ de $\\text{CaCO}_3$ en la muestra.", porque: "Calculamos el $\\text{CaCO}_3$ inicial dividiendo lo que reacciono por $0{,}85$, porque el rendimiento es la fraccion del $\\text{CaCO}_3$ inicial que se descompuso. Con $2{,}679\\ \\text{mol}$ convertidos y un rendimiento de $85\\%$, el total de partida es $3{,}151\\ \\text{mol}$. Dividir y no multiplicar da un valor mayor que el reaccionado, que es lo esperable." },
            { paso: "$\\text{CaCO}_3$ que no reaccionó: $$n = 0{,}15 \\times 3{,}151 = 0{,}4727\\ \\text{mol}$$", porque: "Como el $85\\%$ reacciono, lo que queda sin reaccionar es el complemento, es decir el $15\\%$. Aplicamos ese $15\\%$ al total inicial de $3{,}151\\ \\text{mol}$, porque el $\\text{CaCO}_3$ sobrante sale de la cantidad de partida. Con eso obtenemos $0{,}4727\\ \\text{mol}$ de $\\text{CaCO}_3$ presentes en el solido final." },
            { paso: "$$m = 0{,}4727\\ \\text{mol} \\times 100{,}09\\ \\text{g/mol} = 47{,}3\\ \\text{g}$$", porque: "Para pasar esos moles a masa usamos $m = n \\times M$, porque la masa molar indica los gramos que tiene un mol de $\\text{CaCO}_3$. Con $0{,}4727\\ \\text{mol}$ y $100{,}09\\ \\text{g/mol}$, la masa de $\\text{CaCO}_3$ en el solido es $47{,}3\\ \\text{g}$. Esa masa se usa despues en la verificacion de la mezcla solida." },
            { paso: "Chequeo: $$240\\ \\text{g} = 150{,}2\\ (\\text{CaO}) + 47{,}3\\ (\\text{CaCO}_3) + 42{,}5\\ (\\text{arena})$$, cierra.", porque: "Sumamos las masas de los componentes del solido final y lo comparamos con los 240 g medidos, porque la masa total del solido se conserva. Con $150{,}2\\ \\text{g}$ de $\\text{CaO}$, $47{,}3\\ \\text{g}$ de $\\text{CaCO}_3$ y $42{,}5\\ \\text{g}$ de arena, la suma da $240\\ \\text{g}$. Como la arena se obtuvo por diferencia, el chequeo confirma la coherencia entre pasos y no una verificacion independiente de la arena." },
            { paso: "Suposición: la arena no reacciona y el $85\\%$ se aplica al $\\text{CaCO}_3$ inicial total.", porque: "Fijamos las hipotesis del calculo: la arena no reacciona y el $85\\%$ se aplica al $\\text{CaCO}_3$ inicial total. Lo hacemos porque el enunciado no aclara sobre que masa se calcula el rendimiento. Explicitar estas suposiciones forma parte de la respuesta, porque otras suposiciones darian otro resultado." }
          ],
          resultado: "$47{,}3\\ \\text{g}$ de $\\text{CaCO}_3$ en el sólido"
        },
        {
          parte: "I-d)",
          pasos: [
            { paso: "La muestra original pierde solo el $\\text{CO}_2$: $$m(\\text{original}) = 240\\ \\text{g} + m(\\text{CO}_2) = 240 + 2{,}679\\ \\text{mol} \\times 44{,}01\\ \\text{g/mol} = 240 + 117{,}9 = 357{,}9\\ \\text{g}$$", porque: "Calculamos la masa de la muestra original sumando el solido que quedo y el $\\text{CO}_2$ que se escapo, porque al calentar solo se pierde el gas. Con $M(\\text{CO}_2) = 44{,}01\\ \\text{g/mol}$, los $2{,}679\\ \\text{mol}$ de $\\text{CO}_2$ dan $117{,}9\\ \\text{g}$, que sumamos a los $240\\ \\text{g}$. Asi se llega a $357{,}9\\ \\text{g}$, que es el denominador de la pureza." },
            { paso: "$$m(\\text{CaCO}_3\\ \\text{original}) = 3{,}151\\ \\text{mol} \\times 100{,}09\\ \\text{g/mol} = 315{,}4\\ \\text{g}$$", porque: "Calculamos el $\\text{CaCO}_3$ que habia al inicio multiplicando el total de $3{,}151\\ \\text{mol}$ por la masa molar, porque la pureza pregunta por la cantidad de $\\text{CaCO}_3$ en la muestra original. Con $100{,}09\\ \\text{g/mol}$ obtenemos $315{,}4\\ \\text{g}$. Usar solo los $0{,}4727\\ \\text{mol}$ que quedaron daria un valor parcial que no responde la pregunta." },
            { paso: "$$\\text{Pureza} = \\frac{315{,}4\\ \\text{g}}{357{,}9\\ \\text{g}} \\times 100 = 88{,}1\\%$$", porque: "Calculamos la pureza como la fraccion de masa de $\\text{CaCO}_3$ respecto de la masa total de la muestra original, y la expresamos en porcentaje multiplicando por $100$. Dividimos $315{,}4\\ \\text{g}$ entre $357{,}9\\ \\text{g}$ y obtenemos $88{,}1\\%$. Como el valor es menor que $100\\%$, el resultado es coherente con una muestra impurificada con arena." }
          ],
          resultado: "$88{,}1\\%$ de $\\text{CaCO}_3$ en la muestra original"
        },
        {
          parte: "II)",
          pasos: [
            { paso: "$\\text{CaO}$: $\\text{Ca}^{2+}$ y $\\text{O}^{2-}$, enlace iónico. Lewis: $[\\text{Ca}]^{2+}\\ [\\text{:O:}]^{2-}$. Es una red cristalina, no hay moléculas discretas; las interacciones son electrostáticas ion-ion, no fuerzas intermoleculares propiamente dichas.", porque: "Identificamos el enlace del $\\text{CaO}$ a partir de la combinacion de un metal ($\\text{Ca}$) con un no metal ($\\text{O}$), porque ese tipo de pares forma iones por transferencia de electrones. Como los iones se ordenan en una red cristalina, no hay moleculas discretas. Por eso las interacciones son electrostaticas ion-ion y las fuerzas intermoleculares no aplican en sentido estricto." },
            { paso: "$\\text{CO}_2$: $\\text{O=C=O}$, lineal. Enlaces covalentes polares (diferencia de electronegatividad $\\text{C-O} \\approx 0{,}9$), pero la molécula es apolar porque los momentos dipolares de los dos enlaces se cancelan.", porque: "Determinamos la polaridad de cada enlace por la diferencia de electronegatividad, porque la diferencia entre $\\text{C}$ y $\\text{O}$ (aprox. $0{,}9$) indica que el enlace $\\text{C=O}$ es polar. Como la molecula es lineal, los dos dipolos son iguales y opuestos y se cancelan. Por eso el $\\text{CO}_2$ es apolar aunque sus enlaces sean polares." },
            { paso: "Fuerzas intermoleculares del $\\text{CO}_2$: solo dispersión de London.", porque: "Identificamos las fuerzas intermoleculares a partir de los dipolos permanentes y de la presencia de H unido a F, O o N, porque solo esas situaciones dan atracciones mas intensas que la dispersion. Como el $\\text{CO}_2$ es apolar y no tiene H, queda unicamente la dispersion de London. Entonces esa es la unica fuerza entre sus moleculas, y es debil." }
          ],
          resultado: "$\\text{CaO}$: iónico, red cristalina. $\\text{CO}_2$: enlaces polares, molécula apolar, fuerzas de London"
        }
      ],
      errores_tipicos: [
        { error: "Aplicar el 85 % al gas medido (o multiplicarlo en vez de dividirlo) al volver al CaCO3 inicial.", como_evitar: "El gas medido es lo que realmente se obtuvo; el rendimiento se usa para pasar al CaCO3 inicial dividiendo por 0,85." },
        { error: "Calcular la pureza con los 240 g sin sumar el CO2 que se escapó, o tomar los 240 g como si fueran todo CaCO3.", como_evitar: "La masa de la muestra original es la masa del sólido más la masa de CO2 que se perdió (240 + 117,9 g)." },
        { error: "Decir que el CO2 es polar como molécula, o que el CaO tiene enlace covalente.", como_evitar: "Revisá la geometría: el CO2 es lineal y los dipolos se cancelan; el CaO es iónico y no forma moléculas." }
      ]
    },
    {
      num: 2,
      temas: ["termodinamica"],
      enunciado: "La combustión completa del etanol líquido (dato del enunciado: ΔHf etanol(l) = −277 kJ/mol) se estudia a 1 bar y 25 °C. Se pide: a) escribir la ecuación termoquímica para la combustión de 1 mol de etanol (l), 1 bar de presión y 25 °C; b) calcular el trabajo de expansión intercambiado entre sistema y medio cuando se produce la combustión de 1 mol de etanol, y definir su signo; c) suponiendo que se gastan 8 litros de bioetanol (etanol de fuente vegetal) para recorrer 100 km en un auto mediano preparado para funcionar con bioetanol puro, calcular los moles de octano necesarios para el mismo recorrido. DATOS: ΔHf H2O(l) = −285,8 kJ/mol; ΔHf CO2(g) = −393,5 kJ/mol; ΔHc octano = −5471 kJ/mol; ρ(etanol) = 0,789 kg/litro; Cp H2O(l) = 4,186 kJ/kg·K; ΔHv(H2O) = 40,66 kJ/mol; ρ(H2O) = 1 g/ml.",
      resolucion: [
        {
          parte: "a)",
          pasos: [
            { paso: "Reacción: $\\text{C}_2\\text{H}_5\\text{OH}(l) + 3\\ \\text{O}_2(g) \\to 2\\ \\text{CO}_2(g) + 3\\ \\text{H}_2\\text{O}(l)$. Se usa $\\text{H}_2\\text{O}(l)$ porque el dato es $\\Delta H_f$ del agua líquida.", porque: "Escribimos la reaccion de combustion completa del etanol y la balanceamos en C, H y O, porque los coeficientes determinan el calor por mol de etanol. Con el coeficiente 2 para el $\\text{CO}_2$ y 3 para el $\\text{H}_2\\text{O}$, se necesitan 3 $\\text{O}_2$. Como el dato de $\\Delta H_f$ es del agua liquida, el $\\text{H}_2\\text{O}$ se escribe en estado liquido." },
            { paso: "$$\\Delta H^\\circ = \\sum \\Delta H_f(\\text{productos}) - \\sum \\Delta H_f(\\text{reactivos}) = [2(-393{,}5) + 3(-285{,}8)] - [-277] = -1644{,}4 + 277 = -1367{,}4\\ \\text{kJ/mol}$$ ($\\Delta H_f\\ \\text{O}_2 = 0$).", porque: "Calculamos $\\Delta H$ de reaccion con la ley de Hess en forma de entalpias de formacion: sumamos los $\\Delta H_f$ de los productos y restamos los de los reactivos, cada uno multiplicado por su coeficiente. Con $2(-393{,}5) + 3(-285{,}8) = -1644{,}4\\ \\text{kJ}$ para los productos y $-277\\ \\text{kJ}$ del etanol, el resultado es $-1367{,}4\\ \\text{kJ/mol}$. Ese valor negativo indica una combustion exotermica." }
          ],
          resultado: "$\\text{C}_2\\text{H}_5\\text{OH}(l) + 3\\ \\text{O}_2(g) \\to 2\\ \\text{CO}_2(g) + 3\\ \\text{H}_2\\text{O}(l)$  $\\Delta H^\\circ = -1367{,}4\\ \\text{kJ/mol}$"
        },
        {
          parte: "b)",
          pasos: [
            { paso: "Gases: reactivos 3 mol de $\\text{O}_2$, productos 2 mol de $\\text{CO}_2$ (los líquidos no cuentan). $$\\Delta n = 2 - 3 = -1$$", porque: "Para el trabajo de expansion solo contamos las especies gaseosas, porque los liquidos casi no cambian de volumen al reaccionar. Restamos los moles de gas de los reactivos a los de los productos: 2 mol de $\\text{CO}_2$ menos 3 mol de $\\text{O}_2$. Asi obtenemos $\\Delta n = -1$, que es el valor que se usa en la formula del trabajo." },
            { paso: "Trabajo de expansión: $$W = -P \\cdot \\Delta V = -\\Delta n \\cdot R \\cdot T = -(-1)(8{,}314\\ \\text{J/mol}\\cdot\\text{K})(298{,}15\\ \\text{K}) = +2478{,}9\\ \\text{J} \\approx +2{,}48\\ \\text{kJ}$$", porque: "Usamos $W = -P \\times \\Delta V$ y, para un gas ideal, esto equivale a $-\\Delta n \\times R \\times T$. Sustituimos $\\Delta n = -1$, $R = 8{,}314\\ \\text{J/mol}\\cdot\\text{K}$ y $T = 298{,}15\\ \\text{K}$, porque $25\\ ^\\circ\\text{C}$ corresponde a esa temperatura en kelvin. El producto da $+2478{,}9\\ \\text{J}$, aprox. $+2{,}48\\ \\text{kJ}$, y el signo positivo indica que el trabajo se hace sobre el sistema." },
            { paso: "Convención: $W > 0$ cuando el medio hace trabajo sobre el sistema. Acá el gas disminuye de volumen (se comprime), así que el sistema recibe trabajo.", porque: "Asignamos el signo segun la convencion termodinamica, que toma $W$ positivo cuando el medio trabaja sobre el sistema. Como $\\Delta n$ es negativo, el gas disminuye de volumen y se comprime. Por eso el entorno le entrega trabajo al sistema y $W$ resulta positivo; conviene confirmar que la catedra use esta convencion." }
          ],
          resultado: "$W \\approx +2{,}48\\ \\text{kJ}$ (positivo: el medio realiza trabajo sobre el sistema)"
        },
        {
          parte: "c)",
          pasos: [
            { paso: "Masa de etanol: $$8\\ \\text{L} \\times 0{,}789\\ \\text{kg/L} = 6{,}312\\ \\text{kg} = 6312\\ \\text{g}$$", porque: "Pasamos el volumen de etanol a masa con la densidad, porque la densidad relaciona masa y volumen. Con $8\\ \\text{L}$ y $0{,}789\\ \\text{kg/L}$ obtenemos $6{,}312\\ \\text{kg}$, es decir $6312\\ \\text{g}$. Ese paso de kg a g es necesario, porque la masa molar del etanol esta expresada en $\\text{g/mol}$." },
            { paso: "$$n(\\text{etanol}) = \\frac{6312\\ \\text{g}}{46{,}07\\ \\text{g/mol}} = 137{,}0\\ \\text{mol}$$", porque: "Calculamos los moles de etanol con $n = \\frac{m}{M}$, porque la masa molar permite pasar de gramos a cantidad de sustancia. Con $6312\\ \\text{g}$ y $46{,}07\\ \\text{g/mol}$ se obtienen $137{,}0\\ \\text{mol}$. Este valor, junto con la energia por mol del punto a), permite estimar la energia liberada." },
            { paso: "Energía liberada: $$137{,}0\\ \\text{mol} \\times 1367{,}4\\ \\text{kJ/mol} = 1{,}873 \\times 10^{5}\\ \\text{kJ} \\approx 187\\,350\\ \\text{kJ}$$", porque: "Multiplicamos los moles de etanol por la energia liberada por mol, porque la energia total es el numero de moles por la energia de cada mol. Usamos $1367{,}4\\ \\text{kJ/mol}$ del punto a) y obtenemos $137{,}0 \\times 1367{,}4\\ \\text{kJ}$, es decir $1{,}873 \\times 10^{5}\\ \\text{kJ}$. Las unidades quedan en kJ, la misma unidad del dato de referencia." },
            { paso: "Mismo recorrido $\\Rightarrow$ misma energía. $$n(\\text{octano}) = \\frac{187\\,350\\ \\text{kJ}}{5471\\ \\text{kJ/mol}} = 34{,}25\\ \\text{mol}$$", porque: "Igualamos la energia del octano con la del etanol, porque el enunciado pide recorrer la misma distancia y suponemos que el auto necesita la misma energia. Dividimos $187\\,350\\ \\text{kJ}$ por la $\\Delta H_c$ del octano, $5471\\ \\text{kJ/mol}$, para obtener los moles necesarios. Con eso se obtienen $34{,}25\\ \\text{mol}$ de octano, que responde el punto c)." },
            { paso: "Suposiciones: el octano se quema a $\\text{CO}_2$ y $\\text{H}_2\\text{O}(l)$ con $\\Delta H_c$ dado; no hay pérdidas; el bioetanol es puro.", porque: "Explicitamos las hipotesis que hacen comparables los dos combustibles: combustion completa, ausencia de perdidas y bioetanol puro. Sin ellas no hay un punto de referencia claro, porque cambiarian las energias en juego. Por eso conviene escribirlas en el parcial, junto con el resultado de $34{,}25\\ \\text{mol}$ de octano." }
          ],
          resultado: "$\\approx 34{,}2\\ \\text{mol}$ de octano"
        }
      ],
      errores_tipicos: [
        { error: "Poner ΔH positivo en la combustión porque el enunciado dice que 'suministra' energía.", como_evitar: "La combustión es exotérmica: el ΔH es negativo, el calor sale del sistema." },
        { error: "Usar H2O(g) en la ecuación o en el cálculo de ΔH, cuando el dato es ΔHf del agua líquida.", como_evitar: "Verificá el estado de cada producto con el dato de ΔHf que tenés." },
        { error: "Usar 0,789 kg/L como g/L y dividir por la masa molar en g/mol sin convertir.", como_evitar: "Pasá 8 L × 0,789 kg/L a 6312 g antes de calcular moles." }
      ]
    },
    {
      num: 3,
      temas: ["equilibrio", "gases"],
      enunciado: "Se colocan 4 moles de SbCl5 puro en un recipiente rígido de 3 litros, a 182 °C. Ocurre la siguiente reacción: SbCl5(g) ⇌ SbCl3(g) + Cl2(g), ΔH < 0. Establecido el equilibrio, se encontró que el sistema contenía 0,17 moles de cloro gaseoso. a) Calcular Kc y Kp a 182 °C. Escriba las expresiones de ambas. b) Calcule el porcentaje de descomposición del SbCl5. c) Si se desea obtener más SbCl3, ¿conviene agregar o remover Cl2 del sistema? Justifique. d) Con el mismo propósito, ¿conviene aumentar o disminuir la temperatura? Justifique.",
      resolucion: [
        {
          parte: "a)",
          pasos: [
            { paso: "$$K_c = \\frac{[\\text{SbCl}_3][\\text{Cl}_2]}{[\\text{SbCl}_5]}; \\quad K_p = \\frac{p(\\text{SbCl}_3) \\cdot p(\\text{Cl}_2)}{p(\\text{SbCl}_5)}$$", porque: "Escribimos Kc y Kp como cocientes entre productos y reactivos, cada uno elevado a su coeficiente, porque esa es la forma de la constante de equilibrio. Como todas las especies son gaseosas, las dos expresiones incluyen $\\text{SbCl}_3$, $\\text{Cl}_2$ y $\\text{SbCl}_5$. Kc usa concentraciones molares y Kp usa presiones parciales, por eso no conviene mezclarlas." },
            { paso: "Equilibrio (moles): $$\\text{SbCl}_5 = 4 - 0{,}17 = 3{,}83;\\quad \\text{SbCl}_3 = 0{,}17;\\quad \\text{Cl}_2 = 0{,}17$$", porque: "Planteamos la tabla de equilibrio: se descomponen $x$ mol de $\\text{SbCl}_5$ y se forman $x$ mol de $\\text{SbCl}_3$ y de $\\text{Cl}_2$, porque la estequiometria 1:1:1 fija esa relacion. Como el equilibrio tiene $0{,}17$ mol de $\\text{Cl}_2$, los demas valores salen de restar $0{,}17$ a los $4$ mol iniciales. Asi quedan $3{,}83$ mol de $\\text{SbCl}_5$ y $0{,}17$ mol de $\\text{SbCl}_3$, cuya suma con el $\\text{SbCl}_5$ da $4$ mol." },
            { paso: "Concentraciones ($V = 3\\ \\text{L}$): $$[\\text{SbCl}_5] = 1{,}277\\ \\text{mol/L};\\quad [\\text{SbCl}_3] = [\\text{Cl}_2] = 0{,}05667\\ \\text{mol/L}$$", porque: "Dividimos cada cantidad de moles por el volumen del recipiente, porque Kc se escribe con concentraciones molares y no con moles. Como el volumen de $3\\ \\text{L}$ es constante, la division es directa. Con eso se obtienen $1{,}277\\ \\text{mol/L}$ de $\\text{SbCl}_5$ y $0{,}05667\\ \\text{mol/L}$ de $\\text{SbCl}_3$ y de $\\text{Cl}_2$, que son los valores a reemplazar en Kc." },
            { paso: "$$K_c = \\frac{(0{,}05667)^2}{1{,}277} = 2{,}52 \\times 10^{-3}\\ \\text{mol/L}$$", porque: "Reemplazamos las concentraciones de equilibrio en la expresion de Kc, porque la constante es el cociente de esos valores. Con $(0{,}05667)^2$ dividido por $1{,}277$ se obtiene $2{,}52 \\times 10^{-3}\\ \\text{mol/L}$. Las unidades son $\\text{mol/L}$ porque $\\Delta n$ es distinto de cero, y conviene no redondear las cifras intermedias para no perder precision." },
            { paso: "$$T = 182 + 273{,}15 = 455{,}15\\ \\text{K}$$ $\\Delta n(\\text{gas}) = 2 - 1 = +1$.", porque: "Pasamos la temperatura a kelvin y calculamos $\\Delta n$, porque la relacion entre $K_p$ y $K_c$ necesita la temperatura absoluta y el cambio neto de moles gaseosos. Con $182 + 273{,}15 = 455{,}15\\ \\text{K}$ y $\\Delta n = 2 - 1 = +1$, ambos datos quedan listos. Dejar la temperatura en grados Celsius llevaria a un resultado incorrecto." },
            { paso: "$$K_p = K_c \\cdot (RT)^{\\Delta n} = K_c \\cdot R \\cdot T = 2{,}515 \\times 10^{-3} \\times (0{,}08206 \\times 455{,}15) = 2{,}515 \\times 10^{-3} \\times 37{,}35 = 0{,}0939\\ \\text{atm}$$", porque: "Usamos la relacion $K_p = K_c \\times (RT)^{\\Delta n}$, que surge de reemplazar $p = c \\times R \\times T$ en la expresion de $K_p$. Con $\\Delta n = +1$ queda $K_p = K_c \\times R \\times T$. Sustituyendo $2{,}515 \\times 10^{-3}$ con $R = 0{,}08206\\ \\text{L}\\cdot\\text{atm/mol}\\cdot\\text{K}$ y $T = 455{,}15\\ \\text{K}$ se obtiene $0{,}0939\\ \\text{atm}$, una presion como corresponde." }
          ],
          resultado: "$K_c \\approx 2{,}5 \\times 10^{-3}\\ \\text{mol/L}$; $K_p \\approx 0{,}094\\ \\text{atm}$"
        },
        {
          parte: "b)",
          pasos: [
            { paso: "Cada mol de $\\text{Cl}_2$ formado proviene de un mol de $\\text{SbCl}_5$ descompuesto: $0{,}17\\ \\text{mol}$.", porque: "Relacionamos el $\\text{Cl}_2$ formado con el $\\text{SbCl}_5$ descompuesto usando la estequiometria 1:1, porque cada mol de $\\text{Cl}_2$ proviene de un mol de $\\text{SbCl}_5$ que se descompuso. Asi, los $0{,}17\\ \\text{mol}$ de $\\text{Cl}_2$ en equilibrio indican directamente la cantidad descompuesta. Ese valor es el que se usa para calcular el porcentaje de descomposicion." },
            { paso: "$$\\%\\ \\text{descomposición} = \\frac{0{,}17}{4} \\times 100 = 4{,}25\\%$$", porque: "Calculamos el porcentaje dividiendo lo descompuesto por lo inicial y multiplicando por 100, porque el porcentaje de descomposicion es una fraccion de la cantidad de partida. Con $0{,}17\\ \\text{mol}$ sobre los $4\\ \\text{mol}$ iniciales se obtiene $4{,}25\\%$. Los 4 mol son los iniciales del enunciado y no el total del equilibrio, y el resultado es menor que $100\\%$." }
          ],
          resultado: "$4{,}25\\%$"
        },
        {
          parte: "c)",
          pasos: [
            { paso: "Quitar $\\text{Cl}_2$ es quitar un producto: por Le Chatelier el equilibrio se desplaza hacia la derecha, formando más $\\text{SbCl}_3$ y $\\text{Cl}_2$.", porque: "Aplicamos Le Chatelier: al retirar un producto, el sistema se desplaza en el sentido que lo repone. Como se quita $\\text{Cl}_2$, el equilibrio se corre hacia la derecha y se forma mas $\\text{SbCl}_3$ y $\\text{Cl}_2$ a partir de $\\text{SbCl}_5$. Esto tambien se ve con $Q_c$, porque al bajar la concentracion de $\\text{Cl}_2$ el cociente queda menor que $K_c$." },
            { paso: "Agregar $\\text{Cl}_2$ desplazaría el equilibrio hacia la izquierda (más $\\text{SbCl}_5$).", porque: "Agregar $\\text{Cl}_2$ aumenta la concentracion de un producto, y el sistema responde consumiendolo, asi que el equilibrio se corre hacia el $\\text{SbCl}_5$. Es el efecto contrario al del punto anterior, porque la respuesta de Le Chatelier siempre se opone al cambio aplicado. Por eso, para obtener mas $\\text{SbCl}_3$, conviene quitar $\\text{Cl}_2$ y no agregarlo." }
          ],
          resultado: "Conviene remover $\\text{Cl}_2$"
        },
        {
          parte: "d)",
          pasos: [
            { paso: "Con el dato del enunciado ($\\Delta H < 0$ para la reacción escrita en sentido directo), la reacción directa es exotérmica.", porque: "Tomamos el signo de $\\Delta H$ que da el enunciado para saber si la reaccion directa es exotermica o endotermica, porque el sentido del calor depende de ese signo. Un $\\Delta H$ negativo indica que la reaccion directa libera calor. Usamos el dato tal como figura porque es el que da el enunciado, aunque tiene una advertencia sobre su valor." },
            { paso: "Al disminuir la temperatura, el equilibrio se desplaza hacia el lado exotérmico, es decir hacia la formación de $\\text{SbCl}_3$ y $\\text{Cl}_2$.", porque: "Aplicamos Le Chatelier al factor temperatura: al bajar la temperatura, el equilibrio se desplaza hacia el lado que libera calor. Como el sentido directo es exotermico, la formacion de $\\text{SbCl}_3$ y $\\text{Cl}_2$ se favorece al enfriar. Por eso, con el dato del enunciado, la respuesta de d) es disminuir la temperatura." },
            { paso: "Si el signo real del $\\Delta H$ fuera positivo, la respuesta se invierte (ver comentario del ejercicio).", porque: "Dejamos asentado que pasaria si el signo real de $\\Delta H$ fuera positivo, porque el dato es dudoso y la respuesta depende de ese signo. Con $\\Delta H > 0$ el sentido directo absorbe calor y convendria aumentar la temperatura. Esta observacion sirve como control de consistencia del resultado obtenido." }
          ],
          resultado: "Conviene disminuir la temperatura (según el dato $\\Delta H < 0$)"
        }
      ],
      errores_tipicos: [
        { error: "Armar Kc con moles en lugar de concentraciones (no dividir por los 3 L).", como_evitar: "Dividí cada cantidad de mol por el volumen antes de escribir Kc." },
        { error: "Escribir Kp = Kc sin el factor (RT)^Δn, o usar Δn = −1 cuando los productos son 2 gases y el reactivo 1.", como_evitar: "Kp = Kc(RT)^Δn con Δn = 2 − 1 = +1, y T en K (182 + 273,15 = 455,15 K)." },
        { error: "Invertir Le Chatelier: pensar que agregar Cl2 favorece la formación de SbCl3.", como_evitar: "El equilibrio se corre en sentido contrario a lo que agregás y en el mismo sentido que lo que quitás." }
      ]
    }
  ]
});

// Examen sin fecha ni encabezado visible en la foto (el recorte empieza en el Ejercicio 1). Tipo asumido: parcial.
// Grilla de corrección: aparece el título pero no hay notas legibles en la foto.
// La cabecera de los datos del Ej2 está tapada por un garabato: se toma como datos del agua (cp del hielo y ΔHfusión).
window.PARCIALES.push({
  id: "parcial-sin-fecha-2",
  tipo: "parcial",
  fecha: "sin fecha",
  fuente: "parciales/IMG-20260331-WA0031.jpg",
  ejercicios: [
    {
      num: 1,
      temas: ["liquidos", "uniones", "materia"],
      enunciado: "a) El CO2 posee: punto triple (5,2 atm, −56,4 °C); temperatura de sublimación normal: −78 °C; punto crítico (73 atm, 31,1 °C); temperatura de ebullición a 50 atm: 15 °C; temperatura de fusión a 50 atm: −54 °C. Construir cualitativamente el diagrama de fases del CO2, indicando zonas y puntos característicos, curvas de equilibrio, etc. b) La plata cristaliza en una red cúbica centrada en las caras y su densidad es 10,49 g/cm³. (i) ¿Cuántos átomos hay por celda unitaria? Justifique en base a un esquema de la misma. (ii) ¿Cuál es la longitud de la arista de la celda unitaria? (iii) ¿Será un buen sólido conductor de la corriente eléctrica? Justifique. c) Dibuje las fórmulas semidesarrolladas del propano, la propanona y el agua. Indique cuáles son las fuerzas intermoleculares presentes en cada uno de ellos, y ordénelas por intensidad creciente. ¿Cuál o cuáles son moléculas polares? Justifique sus respuestas. d) Defina presión de vapor. Ordene las sustancias del ítem c en función de sus valores crecientes de esta propiedad. Justifique.",
      resolucion: [
        {
          parte: "a)",
          pasos: [
            { paso: "Punto triple ($5{,}2\\ \\text{atm}$; $-56{,}4\\ ^\\circ\\text{C}$): único punto donde coexisten sólido, líquido y vapor en equilibrio.", porque: "Identificamos el punto triple como el unico lugar donde coexisten solido, liquido y vapor, porque es el punto de referencia para construir el diagrama. Sus coordenadas ($5{,}2\\ \\text{atm}$; $-56{,}4\\ ^\\circ\\text{C}$) fijan la presion y la temperatura minimas para que exista liquido en equilibrio. Por eso conviene ubicarlo primero, porque ordena el resto del dibujo." },
            { paso: "Punto crítico ($73\\ \\text{atm}$; $31{,}1\\ ^\\circ\\text{C}$): por encima, no se distingue líquido de gas (fluido supercrítico).", porque: "Ubicamos el punto critico como el limite superior de la curva liquido-vapor, porque alli las fases liquida y gaseosa se vuelven indistinguibles. Con $73\\ \\text{atm}$ y $31{,}1\\ ^\\circ\\text{C}$, por encima de esos valores el $\\text{CO}_2$ es un fluido supercritico. Asi queda definido el extremo de la curva que une el punto triple con el critico." },
            { paso: "Sublimación a $1\\ \\text{atm}$: como $1\\ \\text{atm} < 5{,}2\\ \\text{atm}$ (presión del triple), el $\\text{CO}_2$ sólido pasa directo a gas a $-78\\ ^\\circ\\text{C}$; no existe líquido a presión atmosférica.", porque: "Comparamos la presion de $1\\ \\text{atm}$ con la del punto triple, porque solo por encima de $5{,}2\\ \\text{atm}$ puede existir liquido en equilibrio. Como $1\\ \\text{atm}$ es menor, el $\\text{CO}_2$ solido pasa directamente a gas a $-78\\ ^\\circ\\text{C}$, es decir por sublimacion. Por eso no se dibuja liquido a presion atmosferica." },
            { paso: "Curva sólido-líquido: pendiente positiva (a $50\\ \\text{atm}$ funde a $-54\\ ^\\circ\\text{C}$, por encima de $-56{,}4\\ ^\\circ\\text{C}$ del triple). Curva líquido-vapor: une el triple con el crítico (a $50\\ \\text{atm}$ hierve a $15\\ ^\\circ\\text{C}$). Curva sólido-vapor: une el triple con el punto de sublimación.", porque: "Trazamos las curvas uniendo los pares de fases que coexisten, y la pendiente de la curva solido-liquido sale del dato de fusion a $50\\ \\text{atm}$. Como a $50\\ \\text{atm}$ el $\\text{CO}_2$ funde a $-54\\ ^\\circ\\text{C}$, por encima de los $-56{,}4\\ ^\\circ\\text{C}$ del triple, la curva sube hacia la derecha. Por eso la pendiente es positiva." },
            { paso: "Zonas: sólido (baja T y alta P), líquido (T intermedia, $P > 5{,}2\\ \\text{atm}$), gas (baja P) y fluido supercrítico (por encima del crítico).", porque: "Asignamos cada region a la fase estable en esas condiciones, porque las curvas actuan como fronteras entre zonas. La zona solida esta a bajas temperaturas y altas presiones, la gaseosa a bajas presiones, y el fluido supercritico por encima del punto critico. Entonces cada curva debe separar exactamente dos zonas, lo que sirve de control del diagrama." }
          ],
          resultado: "Diagrama cualitativo con triple ($5{,}2\\ \\text{atm}$; $-56{,}4\\ ^\\circ\\text{C}$), crítico ($73\\ \\text{atm}$; $31{,}1\\ ^\\circ\\text{C}$) y sublimación a $1\\ \\text{atm}$"
        },
        {
          parte: "b)(i)",
          pasos: [
            { paso: "Celda FCC: $$8 \\times \\frac{1}{8} + 6 \\times \\frac{1}{2} = 1 + 3 = 4$$ átomos por celda.", porque: "Contamos los atomos que pertenecen a la celda, porque los atomos de los bordes se comparten entre varias celdas. Cada vertice aporta $\\frac{1}{8}$ porque se comparte entre 8 celdas, y cada cara aporta $\\frac{1}{2}$ porque se comparte con otra celda. Con $8 \\times \\frac{1}{8} + 6 \\times \\frac{1}{2}$ se obtienen 4 atomos, valor que se usa en la formula de la densidad." },
            { paso: "Esquema: cubo con átomos en los 8 vértices y en el centro de cada una de las 6 caras.", porque: "Dibujamos la celda cubica con atomos en los vertices y en el centro de cada una de las caras, porque el enunciado pide justificar el numero de atomos con un esquema. El dibujo permite ver cuales atomos estan compartidos y por que el conteo da 4. Verificamos que el esquema muestre las caras y no solo los vertices." }
          ],
          resultado: "4 átomos por celda"
        },
        {
          parte: "b)(ii)",
          pasos: [
            { paso: "$$\\rho = \\frac{z \\cdot M}{a^3 \\cdot N_A} \\rightarrow a^3 = \\frac{z \\cdot M}{\\rho \\cdot N_A} = \\frac{4 \\times 107{,}87\\ \\text{g/mol}}{10{,}49\\ \\text{g/cm}^3 \\times 6{,}022 \\times 10^{23}\\ \\text{mol}^{-1}} = 6{,}83 \\times 10^{-23}\\ \\text{cm}^3$$", porque: "Despejamos la arista de la formula de densidad: $\\rho = \\frac{z \\times M}{a^3 \\times N_A}$, entonces $a^3 = \\frac{z \\times M}{\\rho \\times N_A}$. Sustituimos $z = 4$, $M = 107{,}87\\ \\text{g/mol}$, $\\rho = 10{,}49\\ \\text{g/cm}^3$ y $N_A = 6{,}022 \\times 10^{23}\\ \\text{mol}^{-1}$. El resultado es $6{,}83 \\times 10^{-23}\\ \\text{cm}^3$, y conviene verificar que las unidades queden en $\\text{cm}^3$." },
            { paso: "$$a = (6{,}83 \\times 10^{-23})^{1/3}\\ \\text{cm} = 4{,}09 \\times 10^{-8}\\ \\text{cm} = 4{,}09\\ \\text{\\AA}\\ (409\\ \\text{pm})$$", porque: "Obtenemos la arista tomando la raiz cubica del volumen de la celda, porque el volumen de un cubo es $a^3$. Con $6{,}83 \\times 10^{-23}\\ \\text{cm}^3$ la raiz cubica da $4{,}09 \\times 10^{-8}\\ \\text{cm}$. Luego lo pasamos a angstrom y picometros, que son las unidades que pide el punto, y el valor final es $409\\ \\text{pm}$." },
            { paso: "Chequeo: en FCC $a = 2\\sqrt{2}\\cdot r$; con $r(\\text{Ag}) \\approx 144\\ \\text{pm}$ sale $\\approx 407\\ \\text{pm}$, consistente.", porque: "Verificamos el resultado con la relacion geometrica de la red FCC, donde los atomos de una cara se tocan a lo largo de la diagonal: $a = 2 \\times \\sqrt{2} \\times r$. Con el radio aproximado de la plata, $144\\ \\text{pm}$, se obtiene una arista de aprox. $407\\ \\text{pm}$. Como ese valor es muy cercano a $409\\ \\text{pm}$, el resultado es consistente y sirve como control de orden de magnitud." }
          ],
          resultado: "$a \\approx 4{,}09 \\times 10^{-8}\\ \\text{cm}$ ($\\approx 409\\ \\text{pm}$)"
        },
        {
          parte: "b)(iii)",
          pasos: [
            { paso: "La plata es un metal: enlace metálico con electrones de valencia deslocalizados (mar de electrones) que se mueven ante un campo eléctrico.", porque: "Justificamos la conduccion electrica a partir del tipo de enlace, porque los metales conducen cuando sus electrones de valencia se mueven libremente por la red. La plata tiene enlace metalico, asi que sus electrones se deslocalizan en el mar de electrones. Por eso responden ante un campo electrico, y la plata es un buen conductor." }
          ],
          resultado: "Sí, es un buen conductor (electrones deslocalizados)"
        },
        {
          parte: "c)",
          pasos: [
            { paso: "Propano $\\text{CH}_3\\text{–CH}_2\\text{–CH}_3$: molécula apolar; fuerzas: solo dispersión de London.", porque: "Identificamos la fuerza intermolecular del propano a partir de su estructura, porque las fuerzas dependen de la polaridad y de los H unidos a F, O o N. Como el propano tiene solo C e H, con polaridad despreciable, queda unicamente la dispersion de London. Esta fuerza existe en todas las moleculas y se intensifica con el tamano." },
            { paso: "Propanona $\\text{CH}_3\\text{–CO–CH}_3$: polar ($\\text{C=O}$); fuerzas: dipolo-dipolo y dispersión.", porque: "Analizamos la polaridad de la propanona, porque el grupo $\\text{C=O}$ tiene un dipolo fuerte. El oxigeno atrae mas electrones que el carbono, y los dos grupos CH3 no compensan ese dipolo, asi que la molecula tiene dipolo neto. Por eso sus fuerzas son dipolo-dipolo mas dispersion de London." },
            { paso: "Agua $\\text{H–O–H}$: angular y polar; fuerzas: puentes de hidrógeno (además de dipolo-dipolo y dispersión).", porque: "Identificamos el puente de hidrogeno del agua, porque el H unido al O, muy electronegativo, forma la interaccion mas intensa entre moleculas. La geometria angular del $\\text{H-O-H}$ impide que los dipolos se anulen, asi que la molecula es polar. Entonces el agua combina puentes de hidrogeno con dipolo-dipolo y dispersion." },
            { paso: "Intensidad creciente: propano $<$ propanona $<$ agua.", porque: "Ordenamos las fuerzas de menor a mayor intensidad, porque la intensidad determina cuanto cuesta separar las moleculas. La dispersion de London es la mas debil, luego viene dipolo-dipolo y por ultimo el puente de hidrogeno. Por eso el orden queda propano $<$ propanona $<$ agua, y se usa despues para la presion de vapor." },
            { paso: "Polares: propanona y agua. El propano es apolar.", porque: "Determinamos la polaridad de cada molecula, porque una molecula es polar si sus dipolos de enlace no se cancelan. Eso depende de la diferencia de electronegatividad y de la geometria. Como en el agua y la propanona los dipolos no se anulan, son polares, mientras que el propano, sin dipolos apreciables, es apolar." }
          ],
          resultado: "Creciente: propano (London) $<$ propanona (dipolo-dipolo) $<$ agua (puentes H). Polares: propanona y agua"
        },
        {
          parte: "d)",
          pasos: [
            { paso: "Presión de vapor: presión que ejerce el vapor en equilibrio con su líquido a una temperatura dada.", porque: "Damos la definicion de presion de vapor, porque es la presion de saturacion del equilibrio liquido-vapor a una temperatura dada. Ese equilibrio se alcanza cuando las moleculas que pasan al vapor igualan a las que vuelven al liquido. Por eso la presion de vapor depende de la temperatura y de la sustancia." },
            { paso: "Cuanto más débiles las fuerzas intermoleculares, más moléculas escapan a la fase vapor y mayor es la presión de vapor (relación inversa).", porque: "Relacionamos la presion de vapor con la intensidad de las fuerzas intermoleculares, porque esas fuerzas retienen las moleculas en el liquido. Cuanto mas debiles son, mas moleculas escapan a la fase vapor y mayor es la presion de vapor. Entonces la relacion es inversa: a mas fuerza, menos presion de vapor." },
            { paso: "Orden creciente: agua $<$ propanona $<$ propano.", porque: "Ordenamos las sustancias con esa relacion inversa, porque el propano, con fuerzas mas debiles, tiene la presion de vapor mas alta. El agua, con puentes de hidrogeno, tiene la mas baja. Por eso el orden creciente es agua $<$ propanona $<$ propano, que es el opuesto al orden de intensidad del punto c)." }
          ],
          resultado: "Agua $<$ propanona $<$ propano"
        }
      ],
      errores_tipicos: [
        { error: "Dibujar la curva sólido-líquido del CO2 con pendiente negativa, como en el agua.", como_evitar: "Mirá los datos: a 50 atm el CO2 funde a −54 °C, más alto que el triple (−56,4 °C); la curva sube." },
        { error: "Decir que el propano, la propanona o la acetona forman puentes de hidrógeno, o que el propano es polar.", como_evitar: "Puente de H solo si hay H unido a F, O o N; la propanona tiene O pero no H unido a O. El propano es apolar." },
        { error: "Ordenar la presión de vapor al revés (más fuerzas, más presión de vapor).", como_evitar: "Relación inversa: mayor fuerza intermolecular, menor presión de vapor." }
      ]
    },
    {
      num: 2,
      temas: ["termodinamica"],
      enunciado: "La combustión completa del tolueno (metilbenceno, C7H8) líquido suministra 3920 kJ/mol, con agua líquida como producto. Se requiere este combustible para derretir completamente 18 g de hielo que se hallan a −15 °C. Datos del agua: ΔHfusión = 6,02 kJ/mol; cp agua(s) = 2,09 J/g·°C. a) Hallar la cantidad de calor que debe recibir el hielo, en kJ. b) ¿Cuántos gramos de tolueno se necesitarán para el proceso? Escriba la ecuación termoquímica de la combustión. c) En el proceso de evaporación de una sustancia X, ¿el sistema realiza trabajo sobre el entorno o recibe trabajo del mismo? Justifique.",
      resolucion: [
        {
          parte: "a)",
          pasos: [
            { paso: "Calentar el hielo de $-15\\ ^\\circ\\text{C}$ a $0\\ ^\\circ\\text{C}$: $$Q_1 = m \\cdot c \\cdot \\Delta T = 18\\ \\text{g} \\times 2{,}09\\ \\text{J/g}\\cdot ^\\circ\\text{C} \\times 15\\ ^\\circ\\text{C} = 564\\ \\text{J} = 0{,}564\\ \\text{kJ}$$", porque: "Calculamos el calor para subir la temperatura del hielo de $-15\\ ^\\circ\\text{C}$ a $0\\ ^\\circ\\text{C}$ con $Q = m \\times c \\times \\Delta T$, porque en esta etapa el solido solo cambia de temperatura. Usamos $18\\ \\text{g}$, el calor especifico de $2{,}09\\ \\text{J/g}\\cdot ^\\circ\\text{C}$ y $\\Delta T = 15\\ ^\\circ\\text{C}$, lo que da $564\\ \\text{J}$. Luego pasamos el resultado a kJ, para poder sumarlo con las demas etapas." },
            { paso: "Fundir a $0\\ ^\\circ\\text{C}$: $n = \\frac{18\\ \\text{g}}{18\\ \\text{g/mol}} = 1\\ \\text{mol}$ → $$Q_2 = 1\\ \\text{mol} \\times 6{,}02\\ \\text{kJ/mol} = 6{,}02\\ \\text{kJ}$$", porque: "Calculamos el calor de fusion con $Q = n \\times \\Delta H_{\\text{fusión}}$, porque durante el cambio de fase la temperatura se mantiene constante en $0\\ ^\\circ\\text{C}$. Primero pasamos los $18\\ \\text{g}$ a moles dividiendo por $18\\ \\text{g/mol}$, lo que da $1\\ \\text{mol}$ de agua. Con $1\\ \\text{mol}$ y $6{,}02\\ \\text{kJ/mol}$, el calor de fusion es $6{,}02\\ \\text{kJ}$ y no depende de $\\Delta T$." },
            { paso: "$$Q_{\\text{total}} = 0{,}564 + 6{,}02 = 6{,}58\\ \\text{kJ}$$", porque: "Sumamos los calores de las etapas, porque la energia total es la suma de cada tramo del proceso. Como el sistema recorre calentamiento y fusion en secuencia, cada calor se suma una sola vez. Con $0{,}564\\ \\text{kJ}$ y $6{,}02\\ \\text{kJ}$ se obtiene $6{,}58\\ \\text{kJ}$, que responde el punto a)." },
            { paso: "Suposición: el hielo queda como agua a $0\\ ^\\circ\\text{C}$ (no se pide calentar el agua).", porque: "Fijamos que el proceso termina en agua a $0\\ ^\\circ\\text{C}$, porque el enunciado solo pide derretir el hielo. Si se pidiera calentar el agua, habria que agregar el termino $m \\times c$ del agua $\\times\\, \\Delta T$. Es una hipotesis que delimita la respuesta, por eso conviene escribirla explicitamente." }
          ],
          resultado: "$6{,}58\\ \\text{kJ}$"
        },
        {
          parte: "b)",
          pasos: [
            { paso: "Ecuación: $\\text{C}_7\\text{H}_8(l) + 9\\ \\text{O}_2(g) \\to 7\\ \\text{CO}_2(g) + 4\\ \\text{H}_2\\text{O}(l)$  $\\Delta H_c = -3920\\ \\text{kJ/mol}$ (el enunciado habla de calor suministrado, que es calor liberado por el combustible).", porque: "Escribimos la reaccion de combustion completa del tolueno y la balanceamos, porque los coeficientes determinan cuanto combustible hace falta por unidad de energia. Con 7 C y 8 H se producen 7 $\\text{CO}_2$ y 4 $\\text{H}_2\\text{O}$, y el $\\text{O}_2$ se ajusta a 9 mol. El $\\Delta H$ es negativo porque la combustion libera energia, y ese valor se usa en el paso siguiente." },
            { paso: "$$n(\\text{tolueno}) = \\frac{6{,}58\\ \\text{kJ}}{3920\\ \\text{kJ/mol}} = 1{,}68 \\times 10^{-3}\\ \\text{mol}$$", porque: "Calculamos los moles de tolueno necesarios con $n = \\frac{Q}{|\\Delta H_c|}$, porque la energia por mol del combustible relaciona energia y cantidad de sustancia. Dividimos los $6{,}58\\ \\text{kJ}$ necesarios por $3920\\ \\text{kJ/mol}$. Con eso obtenemos $1{,}68 \\times 10^{-3}\\ \\text{mol}$, y las unidades quedan en mol." },
            { paso: "$$m = 1{,}68 \\times 10^{-3}\\ \\text{mol} \\times 92{,}14\\ \\text{g/mol} = 0{,}155\\ \\text{g}$$", porque: "Pasamos los moles de tolueno a masa con $m = n \\times M$, porque la masa molar permite convertir cantidad de sustancia en gramos. Con $1{,}68 \\times 10^{-3}\\ \\text{mol}$ y $M(\\text{C}_7\\text{H}_8) = 92{,}14\\ \\text{g/mol}$ se obtiene $0{,}155\\ \\text{g}$. Es una masa pequena porque el tolueno libera mucha energia por mol, lo que responde el punto b)." },
            { paso: "Suposición: todo el calor de combustión llega al hielo, sin pérdidas.", porque: "Suponemos que toda la energia liberada por el tolueno llega al hielo, porque el enunciado no menciona perdidas. Asi se puede igualar el calor de combustion con el calor total que recibe el hielo. Si hubiera perdidas, harian falta mas gramos de combustible, por eso conviene aclararlo." }
          ],
          resultado: "$0{,}155\\ \\text{g}$ de tolueno (ecuación: $\\text{C}_7\\text{H}_8(l) + 9\\ \\text{O}_2(g) \\to 7\\ \\text{CO}_2(g) + 4\\ \\text{H}_2\\text{O}(l)$, $\\Delta H = -3920\\ \\text{kJ/mol}$)"
        },
        {
          parte: "c)",
          pasos: [
            { paso: "La evaporación pasa de líquido a gas: el volumen aumenta ($\\Delta V > 0$).", porque: "Determinamos el signo del cambio de volumen, porque el trabajo depende de si el sistema se expande o se comprime. Un liquido que pasa a vapor ocupa un volumen mucho mayor, asi que $\\Delta V$ es positivo. Por eso el sistema se expande." },
            { paso: "El sistema se expande contra la presión externa: realiza trabajo sobre el entorno. Con $W = -P \\cdot \\Delta V$, $W < 0$ (convención: $W$ positivo si lo recibe el sistema).", porque: "Aplicamos $W = -P \\times \\Delta V$ con la convencion de signos, porque el trabajo depende de la presion externa y del cambio de volumen. Como el sistema se expande contra el entorno, le entrega trabajo y $W$ es negativo. Entonces el sistema realiza trabajo sobre el entorno, siguiendo la convencion adoptada." }
          ],
          resultado: "El sistema realiza trabajo sobre el entorno ($W < 0$)"
        }
      ],
      errores_tipicos: [
        { error: "Calcular solo el calor de fusión y olvidar el calentamiento del hielo de −15 °C a 0 °C.", como_evitar: "Sumá los pasos: calentar el sólido, fundir a 0 °C y, si corresponde, calentar el líquido." },
        { error: "Usar cp del agua líquida (4,18 J/g·°C) para el hielo, o mezclar J con kJ.", como_evitar: "El hielo usa cp = 2,09 J/g·°C; pasá siempre J a kJ antes de sumar con el ΔH de fusión." },
        { error: "Multiplicar el calor por la masa molar en vez de dividir por la energía de combustión para hallar los moles de tolueno.", como_evitar: "n = Q / |ΔHc| y después m = n × M." }
      ]
    },
    {
      num: 3,
      temas: ["acidobase", "soluciones"],
      enunciado: "A) Calcule el pH final al mezclar 2 litros de solución de NaOH 0,001 M y 4 litros de solución de Ba(OH)2 0,005 M. ¿Qué volumen de solución de HCl 0,1 M se necesita para neutralizar dicha solución final? Escriba la reacción química de neutralización para una de las sales. B) Una solución de ácido acético (CH3COOH) tiene un pH de 3,06 y en el equilibrio está un 2 % disociado. (i) Escriba la ecuación de disociación del ácido acético en agua y exprese su constante de acidez. (ii) Calcule el valor de la constante de acidez y el valor de la concentración analítica de la solución. Indique todas las consideraciones que realice para los cálculos. (iii) Si se titula la solución anterior con una solución de NaOH, ¿cómo espera que sea el valor de pH del punto de equivalencia? Justifique. Escriba la reacción de neutralización correspondiente. Datos: R = 8,314 J/mol·K = 0,08206 L·atm/mol·K = 1,987 cal/mol·K.",
      resolucion: [
        {
          parte: "A) pH",
          pasos: [
            { paso: "$\\text{NaOH}$: $$n(\\text{OH}^-) = 2\\ \\text{L} \\times 0{,}001\\ \\text{mol/L} = 0{,}002\\ \\text{mol}$$", porque: "Calculamos los moles de $\\text{OH}^-$ aportados por el $\\text{NaOH}$, porque esa base fuerte se disocia por completo y cada formula libera un $\\text{OH}^-$. Multiplicamos el volumen de $2\\ \\text{L}$ por la concentracion de $0{,}001\\ \\text{mol/L}$, lo que da $0{,}002\\ \\text{mol}$. Verificamos que las unidades de $\\text{L}$ y $\\text{mol/L}$ se cancelen para que el resultado quede en $\\text{mol}$." },
            { paso: "$\\text{Ba(OH)}_2$: $$n(\\text{Ba(OH)}_2) = 4\\ \\text{L} \\times 0{,}005\\ \\text{mol/L} = 0{,}020\\ \\text{mol}$$ → $n(\\text{OH}^-) = 0{,}040\\ \\text{mol}$ (2 $\\text{OH}^-$ por fórmula).", porque: "Calculamos el $\\text{OH}^-$ que aporta el $\\text{Ba(OH)}_2$, porque cada formula libera 2 $\\text{OH}^-$ y los moles de $\\text{OH}^-$ son el doble de los de base. Con $4\\ \\text{L}$ y $0{,}005\\ \\text{mol/L}$ se obtienen $0{,}020\\ \\text{mol}$ de $\\text{Ba(OH)}_2$. Por eso el $\\text{OH}^-$ del bario es $0{,}040\\ \\text{mol}$, un valor que no puede ignorarse al sumar." },
            { paso: "Total $\\text{OH}^-$ = $0{,}042\\ \\text{mol}$ en $6\\ \\text{L}$ → $$[\\text{OH}^-] = 7{,}0 \\times 10^{-3}\\ \\text{mol/L}$$", porque: "Sumamos los $\\text{OH}^-$ de ambas soluciones y dividimos por el volumen total, porque al mezclar los moles se acumulan y el volumen final es la suma de los volumenes. Con $0{,}002 + 0{,}040 = 0{,}042\\ \\text{mol}$ en $6\\ \\text{L}$ se obtiene $7{,}0 \\times 10^{-3}\\ \\text{mol/L}$. Esa concentracion es la que se usa para calcular el pOH de la mezcla." },
            { paso: "$$\\text{pOH} = -\\log(7{,}0 \\times 10^{-3}) = 2{,}15 \\rightarrow \\text{pH} = 14 - 2{,}15 = 11{,}85$$", porque: "Calculamos el pOH con su definicion, porque es el negativo del logaritmo decimal de $[\\text{OH}^-]$, y luego el pH con $\\text{pH} + \\text{pOH} = 14$. Esa relacion es la que vincula ambas escalas en solucion acuosa. Como la base esta en exceso, el pH resulta mayor que 7, y el valor $11{,}85$ es coherente con eso." }
          ],
          resultado: "$\\text{pH} \\approx 11{,}85$"
        },
        {
          parte: "A) volumen de HCl",
          pasos: [
            { paso: "Neutralizar todo el $\\text{OH}^-$: $$n(\\text{H}^+) = n(\\text{OH}^-) = 0{,}042\\ \\text{mol}$$", porque: "Igualamos los moles de $\\text{H}^+$ con los de $\\text{OH}^-$, porque en la neutralizacion cada $\\text{H}^+$ reacciona con un $\\text{OH}^-$ para formar agua. Por eso se neutraliza todo el $\\text{OH}^-$ de la mezcla final, sin importar de que base provenga. Con $0{,}042\\ \\text{mol}$ de $\\text{OH}^-$ se necesitan $0{,}042\\ \\text{mol}$ de $\\text{H}^+$, y este paso conecta la base con el acido." },
            { paso: "$$V(\\text{HCl}\\ 0{,}1\\ \\text{M}) = \\frac{0{,}042\\ \\text{mol}}{0{,}1\\ \\text{mol/L}} = 0{,}42\\ \\text{L} = 420\\ \\text{mL}$$", porque: "Calculamos el volumen de $\\text{HCl}$ con $V = \\frac{n}{C}$, porque el volumen es la cantidad de moles dividida por la concentracion del acido. Con $0{,}042\\ \\text{mol}$ y $0{,}1\\ \\text{mol/L}$ se obtienen $0{,}42\\ \\text{L}$. Como el $\\text{HCl}$ aporta un $\\text{H}^+$ por mol, los moles de $\\text{H}^+$ son los mismos de $\\text{HCl}$, y ese volumen pasa a $420\\ \\text{mL}$." },
            { paso: "Reacciones (una por base): $\\text{NaOH} + \\text{HCl} \\to \\text{NaCl} + \\text{H}_2\\text{O}$; $\\text{Ba(OH)}_2 + 2\\ \\text{HCl} \\to \\text{BaCl}_2 + 2\\ \\text{H}_2\\text{O}$.", porque: "Escribimos las reacciones de neutralizacion de cada base con el $\\text{HCl}$, porque muestran la estequiometria de cada una. El $\\text{NaOH}$ reacciona en proporcion equimolar con el $\\text{HCl}$, mientras que el $\\text{Ba(OH)}_2$ necesita 2 $\\text{HCl}$ por formula. Verificar esto confirma que el calculo de moles es consistente con la ecuacion quimica." },
            { paso: "Suposición: el enunciado dice 'sales', pero las reacciones de neutralización son de las bases; se escriben las de $\\text{NaOH}$ y $\\text{Ba(OH)}_2$.", porque: "Aclaramos como interpretamos la consigna, porque el enunciado habla de sales pero pide la reaccion de neutralizacion. Por eso escribimos las reacciones de cada base, y la sal es el producto que se forma en cada una. Escribir ambas cubre lo pedido, y es una suposicion de interpretacion que conviene explicitar." }
          ],
          resultado: "$420\\ \\text{mL}$ de $\\text{HCl}$ $0{,}1\\ \\text{M}$"
        },
        {
          parte: "B)(i)",
          pasos: [
            { paso: "$\\text{CH}_3\\text{COOH}(ac) + \\text{H}_2\\text{O}(l) \\rightleftharpoons \\text{CH}_3\\text{COO}^-(ac) + \\text{H}_3\\text{O}^+(ac)$.", porque: "Escribimos el equilibrio de disociacion del acido debil en agua, porque el acido cede H^+ solo de forma parcial. La doble flecha indica que el proceso es reversible y que coexisten reactivos y productos. Las especies que aparecen son el acido, el anion acetato y el ion hidronio." },
            { paso: "$$K_a = \\frac{[\\text{CH}_3\\text{COO}^-][\\text{H}_3\\text{O}^+]}{[\\text{CH}_3\\text{COOH}]}$$ (el agua no aparece por ser solvente).", porque: "Escribimos la expresion de Ka con las concentraciones de equilibrio de productos sobre reactivos, porque Ka es el cociente de la disociacion. El agua no aparece porque es el solvente en gran exceso y su concentracion se toma como constante. Verificamos que los exponentes sean los coeficientes de la ecuacion." }
          ],
          resultado: "$K_a = \\frac{[\\text{CH}_3\\text{COO}^-][\\text{H}_3\\text{O}^+]}{[\\text{CH}_3\\text{COOH}]}$"
        },
        {
          parte: "B)(ii)",
          pasos: [
            { paso: "$$[\\text{H}_3\\text{O}^+] = 10^{-3{,}06} = 8{,}71 \\times 10^{-4}\\ \\text{mol/L}$$", porque: "Calculamos $[\\text{H}_3\\text{O}^+]$ a partir del pH, porque $\\text{pH} = -\\log[\\text{H}_3\\text{O}^+]$ y la relacion inversa es $[\\text{H}_3\\text{O}^+] = 10^{-\\text{pH}}$. Con $\\text{pH} = 3{,}06$ se obtiene $8{,}71 \\times 10^{-4}\\ \\text{mol/L}$. Conviene usar la funcion $10^x$ de la calculadora para no cometer errores de cuenta." },
            { paso: "Con $\\alpha = 0{,}02$: $$C = \\frac{[\\text{H}_3\\text{O}^+]}{\\alpha} = \\frac{8{,}71 \\times 10^{-4}}{0{,}02} = 0{,}0436\\ \\text{mol/L}$$ (concentración analítica).", porque: "Despejamos la concentracion analitica $C$ con $[\\text{H}_3\\text{O}^+] = C \\times \\alpha$, porque en un acido debil el $\\text{H}^+$ formado es la fraccion disociada de la concentracion total. Con $\\alpha = 0{,}02$, que corresponde al $2\\%$ del enunciado, $C = \\frac{8{,}71 \\times 10^{-4}}{0{,}02} = 0{,}0436\\ \\text{mol/L}$. Error tipico: usar $\\alpha$ como $2$ en lugar de $0{,}02$." },
            { paso: "$$K_a = \\frac{C \\cdot \\alpha^2}{1 - \\alpha} = \\frac{0{,}0436 \\times (0{,}02)^2}{0{,}98} = 1{,}78 \\times 10^{-5}$$", porque: "Calculamos $K_a$ con la expresion de Ostwald, porque las concentraciones de equilibrio se escriben en funcion de $C$ y de $\\alpha$. Con $[\\text{CH}_3\\text{COO}^-] = [\\text{H}_3\\text{O}^+] = C \\times \\alpha$ y $[\\text{CH}_3\\text{COOH}] = C \\times (1 - \\alpha)$, la expresion queda $K_a = \\frac{C \\times \\alpha^2}{1 - \\alpha}$. Reemplazar $0{,}0436\\ \\text{mol/L}$ y $\\alpha = 0{,}02$ da $1{,}78 \\times 10^{-5}$." },
            { paso: "Chequeo: $$\\frac{[\\text{H}_3\\text{O}^+]^2}{C - [\\text{H}_3\\text{O}^+]} = \\frac{(8{,}71 \\times 10^{-4})^2}{0{,}0436 - 0{,}00087} = 1{,}78 \\times 10^{-5}$$", porque: "Verificamos la $K_a$ con las concentraciones de equilibrio directamente, porque sirve como control independiente de la aproximacion con $\\alpha$. Usamos $\\frac{[\\text{H}_3\\text{O}^+]^2}{C - [\\text{H}_3\\text{O}^+]}$ con $8{,}71 \\times 10^{-4}$ y $0{,}0436\\ \\text{mol/L}$, y el resultado coincide con $1{,}78 \\times 10^{-5}$. Por eso los calculos previos son consistentes." },
            { paso: "Consideraciones: $[\\text{CH}_3\\text{COO}^-] = [\\text{H}_3\\text{O}^+]$ (se desprecia el $\\text{OH}^-$ y la autoionización del agua); $\\alpha = 0{,}02$ es el dato del enunciado; la solución es diluida y las actividades se toman como concentraciones.", porque: "Listamos las consideraciones del calculo, porque el enunciado pide indicarlas. Suponemos que el $\\text{OH}^-$ y la autoionizacion del agua son despreciables frente al $\\text{H}^+$ del acido, y que $\\alpha$ es el dato del enunciado. Ademas tomamos las actividades como concentraciones, porque la solucion es diluida. Estas hipotesis forman parte de la respuesta." }
          ],
          resultado: "$K_a \\approx 1{,}8 \\times 10^{-5}$; $C \\approx 0{,}0436\\ \\text{mol/L}$"
        },
        {
          parte: "B)(iii)",
          pasos: [
            { paso: "Reacción: $\\text{CH}_3\\text{COOH} + \\text{NaOH} \\to \\text{CH}_3\\text{COONa} + \\text{H}_2\\text{O}$.", porque: "Escribimos la reaccion de neutralizacion del acido debil con la base fuerte, porque en el punto de equivalencia reaccionan en proporcion equimolar. El producto es la sal acetato de sodio mas agua. Esa sal es la que determina el caracter del punto de equivalencia." },
            { paso: "En el punto de equivalencia queda acetato de sodio. El anión $\\text{CH}_3\\text{COO}^-$ es base débil y se hidroliza: $\\text{CH}_3\\text{COO}^- + \\text{H}_2\\text{O} \\rightleftharpoons \\text{CH}_3\\text{COOH} + \\text{OH}^-$, generando $\\text{OH}^-$.", porque: "Identificamos la especie que fija el pH en el punto de equivalencia: el anion acetato, que es una base debil. El acetato reacciona con el agua tomando $\\text{H}^+$ y generando $\\text{OH}^-$, en un proceso llamado hidrolisis. Por eso recordamos que el acetato es la base conjugada del acido acetico." },
            { paso: "Por eso el $\\text{pH}$ del punto de equivalencia es mayor que $7$ (básico).", porque: "Concluimos el pH a partir de la hidrolisis, porque el $\\text{OH}^-$ liberado hace que la solucion sea basica. Como el $\\text{OH}^-$ producido supera al $\\text{H}^+$ que queda, el $\\text{pH}$ es mayor que $7$. Esto contradice la idea de que la neutralizacion siempre da pH 7, que solo vale para acido y base fuertes." }
          ],
          resultado: "$\\text{pH} > 7$ (básico) en el punto de equivalencia"
        }
      ],
      errores_tipicos: [
        { error: "Contar 1 OH⁻ por fórmula de Ba(OH)2 y subestimar los moles de base.", como_evitar: "Ba(OH)2 aporta 2 OH⁻ por mol; con 0,020 mol de Ba(OH)2 son 0,040 mol de OH⁻." },
        { error: "Confundir Ka con pKa o tomar Ka = [H3O⁺]/C como si fuera una constante.", como_evitar: "Ka = Cα²/(1 − α); pKa = −log Ka (≈ 4,75 para el acético), no lo mezcles con Ka." },
        { error: "Suponer que el punto de equivalencia de un ácido débil con una base fuerte da pH 7.", como_evitar: "La sal del ácido débil se hidroliza en medio básico: pH > 7." }
      ]
    }
  ]
});

// Primer recuperatorio 14/11/2025 (fecha leída del encabezado: 'Primer recuperatorio: 14/11/25 18:00').
// Grilla de corrección: tiene anotaciones manuscritas (notas por ítem y nota final) que no se pudieron leer con certeza; no se transcribe.
// En el Ej2 el enunciado dice 'Este muestra' (sic). Los datos de cp y ΔHvap se toman del enunciado.
window.PARCIALES.push({
  id: "1er-recuperatorio-2025-11-14",
  tipo: "1er recuperatorio",
  fecha: "14/11/2025",
  fuente: "parciales/IMG-20260331-WA0032.jpg",
  ejercicios: [
    {
      num: 1,
      temas: ["reacciones", "soluciones", "acidobase", "uniones"],
      enunciado: "El clorato de potasio se puede obtener a partir de la siguiente reacción: 3 Cl2(g) + 6 KOH(ac) → 5 KCl(ac) + KClO3(ac) + 3 H2O(l). Se sabe que reaccionan 45 g de cloro del 85 % de pureza con 500 mL de una solución de hidróxido de potasio de concentración 2,8 % m/v, y el rendimiento de la reacción es del 75 %. a) Corrobore el balanceo de la reacción aplicando el método de ion-electrón. b) Calcule la masa de clorato de potasio que se obtiene. c) Calcule el pH de la solución de hidróxido de potasio utilizada como reactivo en la obtención de la sal (considerando impurezas inertes). d) Escriba la estructura de Lewis del cloro y del cloruro de potasio y ordénelos por punto de ebullición creciente y presión de vapor creciente. Justifique en cada caso, en función de sus estructuras y las fuerzas intermoleculares que se establecen.",
      resolucion: [
        {
          parte: "a)",
          pasos: [
            { paso: "Medio básico (hay $\\text{KOH}$). Reducción: $\\text{Cl}_2 + 2\\,e^- \\to 2\\,\\text{Cl}^-$ ($\\times 5$).", porque: "Identificamos el medio de reaccion para elegir como balancear, porque el $\\text{KOH}$ aporta $\\text{OH}^-$ y el balance se hace con $\\text{OH}^-$ y $\\text{H}_2\\text{O}$ en lugar de $\\text{H}^+$. Luego escribimos la reduccion del $\\text{Cl}_2$, que gana electrones para dar $\\text{Cl}^-$. Verificamos que el medio sea coherente con los reactivos." },
            { paso: "Oxidación: $\\text{Cl}_2 + 12\\,\\text{OH}^- \\to 2\\,\\text{ClO}_3^- + 6\\,\\text{H}_2\\text{O} + 10\\,e^-$ ($\\times 1$). Verificación: Cl $2 = 2$, O $12 = 12$, H $12 = 12$, carga $-12 = -12$.", porque: "Escribimos la oxidacion del $\\text{Cl}_2$ a $\\text{ClO}_3^-$ y la balanceamos con $\\text{H}_2\\text{O}$ y $\\text{OH}^-$, porque el $\\text{Cl}_2$ se transforma en $\\text{ClO}_3^-$ y pierde 10 $e^-$ en total. Verificamos la carga: con 12 $\\text{OH}^-$ en el reactivo, los 2 $\\text{ClO}_3^-$ y los 10 $e^-$ del producto dan la misma carga. Ese chequeo evita errores de signo antes de sumar las semirreacciones." },
            { paso: "Sumando ($\\times 5$ + $\\times 1$) y simplificando: $3\\,\\text{Cl}_2 + 6\\,\\text{OH}^- \\to 5\\,\\text{Cl}^- + \\text{ClO}_3^- + 3\\,\\text{H}_2\\text{O}$. Agregando $6\\,\\text{K}^+$ a ambos lados: $3\\,\\text{Cl}_2 + 6\\,\\text{KOH} \\to 5\\,\\text{KCl} + \\text{KClO}_3 + 3\\,\\text{H}_2\\text{O}$.", porque: "Multiplicamos las semirreacciones para igualar los electrones intercambiados, porque la reduccion se multiplica por 5 y la oxidacion por 1, y ambas quedan con 10 $e^-$. Al sumarlas los electrones se cancelan, y luego agregamos $\\text{K}^+$ a ambos lados para pasar a la forma molecular. Ese chequeo final confirma que la ecuacion esta balanceada." }
          ],
          resultado: "Balanceo confirmado"
        },
        {
          parte: "b)",
          pasos: [
            { paso: "Cloro puro: $$45\\ \\text{g} \\times 0{,}85 = 38{,}25\\ \\text{g};\\quad n(\\text{Cl}_2) = \\frac{38{,}25}{70{,}90} = 0{,}540\\ \\text{mol}$$", porque: "Calculamos la masa de cloro puro multiplicando por la pureza, porque la pureza es la fraccion de masa que corresponde al cloro. Con $45\\ \\text{g}$ y $0{,}85$ se obtienen $38{,}25\\ \\text{g}$. Luego pasamos a moles dividiendo por $M(\\text{Cl}_2) = 70{,}90\\ \\text{g/mol}$, lo que da $0{,}540\\ \\text{mol}$ de $\\text{Cl}_2$." },
            { paso: "$\\text{KOH}$: $2{,}8\\ \\text{g}$ por $100\\ \\text{mL}$ → $14{,}0\\ \\text{g}$ en $500\\ \\text{mL}$; $$n(\\text{KOH}) = \\frac{14{,}0\\ \\text{g}}{56{,}11\\ \\text{g/mol}} = 0{,}2495\\ \\text{mol}$$", porque: "Pasamos la concentracion de $\\text{KOH}$ a masa total, porque $2{,}8\\%$ m/v significa $2{,}8\\ \\text{g}$ por cada $100\\ \\text{mL}$. Como tenemos $500\\ \\text{mL}$, la masa es $14{,}0\\ \\text{g}$ de $\\text{KOH}$. Dividiendo por $56{,}11\\ \\text{g/mol}$ se obtienen $0{,}2495\\ \\text{mol}$, que son los moles disponibles del reactivo." },
            { paso: "Relación $6\\ \\text{KOH} : 3\\ \\text{Cl}_2 \\to$ $0{,}540\\ \\text{mol}$ de $\\text{Cl}_2$ pediría $1{,}08\\ \\text{mol}$ de $\\text{KOH}$; hay solo $0{,}2495\\ \\text{mol}$. El $\\text{KOH}$ es el reactivo limitante.", porque: "Identificamos el reactivo limitante comparando lo que se necesita con lo que hay, porque la cantidad de producto queda limitada por el reactivo que se agota primero. Con la relacion $6\\ \\text{KOH} : 3\\ \\text{Cl}_2$, los $0{,}540\\ \\text{mol}$ de $\\text{Cl}_2$ necesitan $1{,}08\\ \\text{mol}$ de $\\text{KOH}$, y solo hay $0{,}2495\\ \\text{mol}$. Por eso el $\\text{KOH}$ es el reactivo limitante y decide la cantidad de producto." },
            { paso: "$n(\\text{KClO}_3)$ teórico $= \\frac{0{,}2495}{6} = 0{,}04159\\ \\text{mol}$; m teórica: $$m = 0{,}04159\\ \\text{mol} \\times 122{,}55\\ \\text{g/mol} = 5{,}097\\ \\text{g}$$", porque: "Calculamos la cantidad teorica de $\\text{KClO}_3$ a partir del reactivo limitante, porque la estequiometria relaciona 6 mol de $\\text{KOH}$ con el $\\text{KClO}_3$ que se forma. Dividimos $0{,}2495\\ \\text{mol}$ por $6$ y multiplicamos por $M(\\text{KClO}_3) = 122{,}55\\ \\text{g/mol}$. Con eso obtenemos $5{,}097\\ \\text{g}$, que es la masa maxima posible segun la estequiometria." },
            { paso: "Con rendimiento $75\\%$: $$m = 0{,}75 \\times 5{,}097\\ \\text{g} = 3{,}82\\ \\text{g}$$", porque: "Aplicamos el rendimiento multiplicando la masa teorica por $0{,}75$, porque el rendimiento es la fraccion de la masa teorica que realmente se obtiene. Con $0{,}75 \\times 5{,}097\\ \\text{g}$ se obtienen $3{,}82\\ \\text{g}$. Asi el valor real queda por debajo del teorico, como corresponde a una reaccion con perdidas." },
            { paso: "Suposición: las impurezas de ambos reactivos son inertes.", porque: "Fijamos la hipotesis de que las impurezas son inertes y no consumen reactivo, porque el enunciado no detalla cuales son. Por eso usamos solo la masa pura de cada reactivo en los calculos. Explicitar esta suposicion forma parte de la respuesta, porque cambia los moles disponibles." }
          ],
          resultado: "$\\approx 3{,}82\\ \\text{g}$ de $\\text{KClO}_3$"
        },
        {
          parte: "c)",
          pasos: [
            { paso: "$$[\\text{KOH}] = \\frac{28\\ \\text{g/L}}{56{,}11\\ \\text{g/mol}} = 0{,}499\\ \\text{mol/L}$$ (KOH puro, impurezas inertes).", porque: "Calculamos la concentracion molar de $\\text{KOH}$ a partir del dato en g/L, porque la concentracion se obtiene dividiendo la masa por la masa molar. Con $28\\ \\text{g/L}$ y $M = 56{,}11\\ \\text{g/mol}$ se obtiene $0{,}499\\ \\text{mol/L}$. Tratamos el $\\text{KOH}$ como puro, porque las impurezas son inertes y no aportan base." },
            { paso: "$\\text{KOH}$ es base fuerte: disociación total, $[\\text{OH}^-] = 0{,}499\\ \\text{mol/L}$.", porque: "Identificamos al $\\text{KOH}$ como base fuerte y tomamos su disociacion total, porque una base fuerte libera todos sus $\\text{OH}^-$ en solucion. Como cada $\\text{KOH}$ aporta un $\\text{OH}^-$, la concentracion de $\\text{OH}^-$ es igual a la de $\\text{KOH}$. Por eso no hace falta usar constantes de equilibrio para este paso." },
            { paso: "$$\\text{pOH} = -\\log(0{,}499) = 0{,}302 \\rightarrow \\text{pH} = 14 - 0{,}302 = 13{,}70$$", porque: "Calculamos el $\\text{pOH}$ con $-\\log$ del valor de $[\\text{OH}^-]$, y luego el $\\text{pH}$ con $\\text{pH} + \\text{pOH} = 14$, porque esa relacion vincula ambas escalas en solucion acuosa. Con $\\text{pOH} = 0{,}302$ se obtiene $\\text{pH} = 13{,}70$. Ese valor, bien por encima de 7, es coherente con una base fuerte concentrada." }
          ],
          resultado: "$\\text{pH} \\approx 13{,}70$"
        },
        {
          parte: "d)",
          pasos: [
            { paso: "$\\text{Cl}_2$: $\\text{Cl–Cl}$ con 3 pares libres en cada Cl. Molécula apolar, gas a temperatura ambiente. Fuerzas intermoleculares: solo dispersión de London (débiles).", porque: "Escribimos la estructura de Lewis del $\\text{Cl}_2$ y determinamos que es apolar, porque es una molecula diatomica formada por dos atomos iguales y no tiene dipolo. Por eso la unica fuerza intermolecular es la dispersion de London, que es debil. Esa es la razon de que el $\\text{Cl}_2$ sea un gas a temperatura ambiente." },
            { paso: "$\\text{KCl}$: enlace iónico $\\text{K}^+ \\text{Cl}^-$ en red cristalina. Interacciones electrostáticas ion-ion muy intensas; sólido no volátil (ebulle cerca de $1400\\ ^\\circ\\text{C}$).", porque: "Identificamos el enlace del $\\text{KCl}$ como ionico y lo asociamos con la red cristalina, porque las atracciones entre iones de carga opuesta son muy intensas. Esto explica el punto de ebullicion alto, cerca de $1400\\ ^\\circ\\text{C}$, y la presion de vapor baja. Por eso el $\\text{KCl}$ no es volatil a temperatura ambiente." },
            { paso: "Punto de ebullición creciente: $\\text{Cl}_2 < \\text{KCl}$. Presión de vapor creciente: $\\text{KCl} < \\text{Cl}_2$ (la del $\\text{KCl}$ es despreciable a temperatura ambiente).", porque: "Ordenamos por punto de ebullicion y presion de vapor, porque ambas dependen de la intensidad de las fuerzas intermoleculares en sentidos opuestos. A mayor fuerza, mayor punto de ebullicion y menor presion de vapor. Por eso el orden de ebullicion creciente ($\\text{Cl}_2 < \\text{KCl}$) es el inverso del de presion de vapor creciente ($\\text{KCl} < \\text{Cl}_2$)." }
          ],
          resultado: "Ebullición creciente: $\\text{Cl}_2 < \\text{KCl}$. Presión de vapor creciente: $\\text{KCl} < \\text{Cl}_2$"
        }
      ],
      errores_tipicos: [
        { error: "Balancear en medio ácido (con H⁺ y H2O) cuando el medio es básico por el KOH.", como_evitar: "Con KOH usá OH⁻ en las semirreacciones y verificá cargas antes de sumar." },
        { error: "Usar 2,8 como g/L, o no calcular el reactivo limitante y usar el cloro como limitante.", como_evitar: "2,8 % m/v = 28 g/L → 14 g en 500 mL; calculá el limitante antes del rendimiento." },
        { error: "Tratar el KOH como base débil en el pH, o aplicar el 75 % al revés.", como_evitar: "El KOH se disocia totalmente; el rendimiento multiplica la masa teórica (0,75 × teórica)." }
      ]
    },
    {
      num: 2,
      temas: ["termodinamica"],
      enunciado: "Se emplea 2-butanol (C4H10O) líquido con 92 % de pureza (en masa) como combustible para calentar y vaporizar agua. Las sustancias que acompañan al 2-butanol son inertes (no se queman) en las condiciones de trabajo. Este alcohol tiene un poder calorífico superior igual a 638 kcal/mol. Datos: cp agua(l) = 4,18 J/g·°C; cp agua(v) = 2,03 J/g·°C; ΔHvap = 40,626 kJ/mol. a) Escriba la ecuación termoquímica de la combustión completa. Calcule la masa de combustible impuro (en kg) necesaria para obtener 124 000 kJ. b) ¿Cuántos kg de agua se podrán calentar desde 50 °C hasta vapor a 110 °C, manteniendo la presión constante en 1 atm, si se hacen reaccionar 1,8 kg de 2-butanol puro y no hay pérdida de calor en la transferencia? c) ¿Qué volumen de aire en m³ (CNPT) requerirá la combustión completa de 14 kg del 2-butanol puro? Considere el aire compuesto por 21 % de O2 y 79 % de N2 V/V.",
      resolucion: [
        {
          parte: "a)",
          pasos: [
            { paso: "Ecuación: $\\text{C}_4\\text{H}_{10}\\text{O}(l) + 6\\ \\text{O}_2(g) \\to 4\\ \\text{CO}_2(g) + 5\\ \\text{H}_2\\text{O}(l)$. Verificación: $\\text{O}\\ 1 + 12 = 13 = 8 + 5$.", porque: "Escribimos la reaccion de combustion completa del 2-butanol y la balanceamos en C, H y luego O, porque los coeficientes fijan el calor liberado por mol. Con 4 $\\text{CO}_2$ y 5 $\\text{H}_2\\text{O}$ se necesitan 6 $\\text{O}_2$, y el oxigeno se verifica con 13 a cada lado. El agua se escribe liquida porque el dato es el poder calorifico superior." },
            { paso: "$$\\Delta H_c = -638\\ \\text{kcal/mol} \\times 4{,}184\\ \\text{kJ/kcal} = -2669{,}4\\ \\text{kJ/mol}$$", porque: "Convertimos la energia de kcal a kJ con el factor $4{,}184\\ \\text{kJ/kcal}$, porque el resultado debe quedar en las mismas unidades que el calor pedido. Con $638\\ \\text{kcal/mol}$ obtenemos $-2669{,}4\\ \\text{kJ/mol}$. El signo negativo indica que la combustion libera energia." },
            { paso: "$$n(\\text{2-butanol}) = \\frac{124\\,000\\ \\text{kJ}}{2669{,}4\\ \\text{kJ/mol}} = 46{,}45\\ \\text{mol}$$", porque: "Calculamos cuantos moles de 2-butanol hay que quemar con $n = \\frac{Q}{|\\Delta H_c|}$, porque el calor pedido es la energia que debe liberar el combustible. Dividimos $124\\,000\\ \\text{kJ}$ por $2669{,}4\\ \\text{kJ/mol}$, lo que da $46{,}45\\ \\text{mol}$. Es el mismo razonamiento que usamos antes para relacionar energia y moles." },
            { paso: "$$m_{\\text{puro}} = 46{,}45\\ \\text{mol} \\times 74{,}12\\ \\text{g/mol} = 3443\\ \\text{g} = 3{,}44\\ \\text{kg}$$", porque: "Pasamos los moles de alcohol puro a masa con $m = n \\times M$, porque la masa molar convierte moles en gramos. Con $74{,}12\\ \\text{g/mol}$ se obtienen $3443\\ \\text{g}$, es decir $3{,}44\\ \\text{kg}$. Dejamos el resultado en kg, como pide el enunciado, para poder aplicar la pureza en el paso siguiente." },
            { paso: "$$m_{\\text{impuro}} = \\frac{3{,}44\\ \\text{kg}}{0{,}92} = 3{,}74\\ \\text{kg}$$", porque: "Corregimos por la pureza del $92\\%$ para obtener la masa de combustible impuro, porque la muestra solo tiene $92\\%$ de alcohol. La masa total es la del puro dividida por $0{,}92$, no multiplicada. Entonces $3{,}74\\ \\text{kg}$ es mayor que los $3{,}44\\ \\text{kg}$ de alcohol puro, como corresponde a una muestra con inertes." }
          ],
          resultado: "$\\approx 3{,}74\\ \\text{kg}$ de combustible impuro"
        },
        {
          parte: "b)",
          pasos: [
            { paso: "$$n = \\frac{1800\\ \\text{g}}{74{,}12\\ \\text{g/mol}} = 24{,}29\\ \\text{mol}$$ → calor liberado = $24{,}29 \\times 2669{,}4\\ \\text{kJ} = 64\\,830\\ \\text{kJ}$.", porque: "Calculamos el calor disponible con los $1{,}8\\ \\text{kg}$ de alcohol puro, porque ese es el aporte energetico maximo para calentar el agua. Pasamos $1800\\ \\text{g}$ a moles con $M = 74{,}12\\ \\text{g/mol}$, lo que da $24{,}29\\ \\text{mol}$. Multiplicando por $2669{,}4\\ \\text{kJ/mol}$ obtenemos $64\\,830\\ \\text{kJ}$." },
            { paso: "Calor por gramo de agua: (1) líquido $50 \\rightarrow 100\\ ^\\circ\\text{C}$: $4{,}18 \\times 50 = 209\\ \\text{J/g}$; (2) vaporización a $100\\ ^\\circ\\text{C}$: $\\frac{40\\,626\\ \\text{J/mol}}{18{,}015\\ \\text{g/mol}} = 2255\\ \\text{J/g}$; (3) vapor $100 \\rightarrow 110\\ ^\\circ\\text{C}$: $2{,}03 \\times 10 = 20{,}3\\ \\text{J/g}$.", porque: "Separamos el calor por gramo en etapas, porque cada tramo tiene su propio cambio de temperatura o de fase. Para el liquido usamos $c \\times \\Delta T$ con $4{,}18\\ \\text{J/g}\\cdot ^\\circ\\text{C}$, para la vaporizacion el $\\Delta H_{\\text{vap}}$ por gramo, y para el vapor su calor especifico de $2{,}03\\ \\text{J/g}\\cdot ^\\circ\\text{C}$. Como los $\\text{J/mol}$ se pasan a $\\text{J/g}$ dividiendo por la masa molar, $\\frac{40\\,626\\ \\text{J/mol}}{18{,}015\\ \\text{g/mol}}$ da $2255\\ \\text{J/g}$." },
            { paso: "$$\\text{Total} = 209 + 2255 + 20{,}3 = 2484\\ \\text{J/g} = 2{,}484\\ \\text{kJ/g}$$", porque: "Sumamos las etapas para obtener el calor total por gramo, porque el agua debe atravesar todos los tramos en secuencia. Con $209 + 2255 + 20{,}3 = 2484\\ \\text{J/g}$ se llega al valor por gramo. Verificamos que todos los terminos esten en J/g antes de sumar, para no mezclar unidades." },
            { paso: "$$m(\\text{agua}) = \\frac{64\\,830\\ \\text{kJ}}{2{,}484\\ \\text{kJ/g}} = 26\\,099\\ \\text{g} \\approx 26{,}1\\ \\text{kg}$$", porque: "Calculamos la masa de agua dividiendo el calor disponible por el calor necesario por gramo, porque la energia del combustible se reparte entre todos los gramos de agua. Con $64\\,830\\ \\text{kJ}$ y $2{,}484\\ \\text{kJ/g}$ se obtienen $26\\,099\\ \\text{g}$, es decir $26{,}1\\ \\text{kg}$. Por eso la respuesta del punto b) es $26{,}1\\ \\text{kg}$ de agua." },
            { paso: "Suposición: presión constante de $1\\ \\text{atm}$, sin pérdidas, el agua entra líquida a $50\\ ^\\circ\\text{C}$.", porque: "Fijamos las hipotesis de presion de $1\\ \\text{atm}$, ausencia de perdidas y agua que entra liquida a $50\\ ^\\circ\\text{C}$, porque el enunciado las da de forma implicita. La presion de $1\\ \\text{atm}$ define la temperatura de ebullicion, y el estado liquido inicial define la primera etapa del calculo. Explicitar estas condiciones justifica el resultado." }
          ],
          resultado: "$\\approx 26{,}1\\ \\text{kg}$ de agua"
        },
        {
          parte: "c)",
          pasos: [
            { paso: "$$n(\\text{2-butanol}) = \\frac{14\\,000\\ \\text{g}}{74{,}12\\ \\text{g/mol}} = 188{,}9\\ \\text{mol}$$", porque: "Convertimos la masa de 2-butanol de kg a g y calculamos los moles, porque la masa molar trabaja en g/mol. Con $14\\,000\\ \\text{g}$ y $M = 74{,}12\\ \\text{g/mol}$ se obtienen $188{,}9\\ \\text{mol}$. Antes de seguir, verificamos que la conversion de unidades sea correcta." },
            { paso: "Ecuación: 1 mol de 2-butanol consume 6 mol de $\\text{O}_2$ → $$n(\\text{O}_2) = 6 \\times 188{,}9 = 1133\\ \\text{mol}$$", porque: "Usamos la estequiometria de la combustion para hallar el $\\text{O}_2$ necesario, porque cada mol de alcohol consume 6 mol de $\\text{O}_2$ segun la ecuacion del punto a). Multiplicamos $188{,}9\\ \\text{mol}$ por 6 y obtenemos $1133\\ \\text{mol}$ de $\\text{O}_2$. Este es el paso que pasa del combustible al oxigeno que hay que suministrar." },
            { paso: "Aire: el $\\text{O}_2$ es el $21\\%$ V/V → $$n(\\text{aire}) = \\frac{1133}{0{,}21} = 5397\\ \\text{mol}$$", porque: "Calculamos los moles de aire a partir del $\\text{O}_2$, porque el aire tiene $21\\%$ de $\\text{O}_2$ en volumen. En gases la fraccion en volumen coincide con la fraccion molar, asi que dividimos $1133\\ \\text{mol}$ por $0{,}21$. Con eso obtenemos $5397\\ \\text{mol}$ de aire, y no debemos usar el $\\text{O}_2$ como si fuera el volumen total." },
            { paso: "$$V_{\\text{CNPT}} = 5397\\ \\text{mol} \\times 22{,}4\\ \\text{L/mol} = 120\\,893\\ \\text{L} = 120{,}9\\ \\text{m}^3$$", porque: "Pasamos los moles de aire a volumen con $V = n \\times V_m$, porque en CNPT un mol de gas ocupa $22{,}4\\ \\text{L}$. Con $5397\\ \\text{mol}$ obtenemos $120\\,893\\ \\text{L}$, que equivalen a $120{,}9\\ \\text{m}^3$ al convertir la unidad. Por eso el volumen de aire necesario es aprox. $120{,}9\\ \\text{m}^3$, la respuesta del punto c)." }
          ],
          resultado: "$\\approx 120{,}9\\ \\text{m}^3$ de aire (CNPT)"
        }
      ],
      errores_tipicos: [
        { error: "Olvidar la pureza del 92 % o multiplicarla en lugar de dividir al pasar a combustible impuro.", como_evitar: "m impuro = m puro / 0,92." },
        { error: "Usar 638 kcal como si fuera kJ, sin multiplicar por 4,184.", como_evitar: "Convertí a kJ antes de dividir por la energía: 638 kcal/mol = 2669,4 kJ/mol." },
        { error: "En b) olvidar el paso de vaporización (el más grande) o no calentar el vapor de 100 a 110 °C; y en c) usar solo el O2 como volumen de aire.", como_evitar: "Sumá las 3 etapas del agua y dividí los moles de O2 por 0,21 para obtener los de aire." }
      ]
    },
    {
      num: 3,
      temas: ["equilibrio", "gases"],
      enunciado: "Si se introduce 1 mol de N2O4 en un reactor de 10 L a 56 °C, se alcanza el equilibrio cuando el 30 % de la sustancia se descompone según: N2O4(g) ⇌ 2 NO2(g). a) Calcule las concentraciones de los gases en el equilibrio, indicando todas las consideraciones que realiza para los cálculos. b) Calcule los valores correspondientes de Kc y Kp y deduzca la relación entre ellos. c) i) Indique cómo se desplazaría el equilibrio de la situación anterior si se disminuyera el volumen del reactor. ii) Si al aumentar la temperatura aumenta la presión parcial del dióxido de nitrógeno, indique si la reacción es endotérmica o exotérmica. En ambos casos justifique su respuesta.",
      resolucion: [
        {
          parte: "a)",
          pasos: [
            { paso: "Se descompone $30\\%$ de $1$ mol: $0{,}30\\ \\text{mol}$ de $\\text{N}_2\\text{O}_4$.", porque: "Calculamos la cantidad de $\\text{N}_2\\text{O}_4$ que se descompone aplicando el porcentaje al mol inicial, porque el $30\\%$ indica la fraccion del reactivo que reacciona. Con $1$ mol inicial, se transforman $0{,}30\\ \\text{mol}$. Verificamos que el porcentaje se pase a fraccion, $0{,}30$, antes de multiplicar." },
            { paso: "Equilibrio: $$\\text{N}_2\\text{O}_4 = 1 - 0{,}30 = 0{,}70\\ \\text{mol};\\quad \\text{NO}_2 = 2 \\times 0{,}30 = 0{,}60\\ \\text{mol}$$", porque: "Planteamos la tabla de equilibrio con la estequiometria de la ecuacion, porque cada mol de $\\text{N}_2\\text{O}_4$ que se descompone forma 2 mol de $\\text{NO}_2$. Entonces quedan $0{,}70\\ \\text{mol}$ de $\\text{N}_2\\text{O}_4$ y se forman $0{,}60\\ \\text{mol}$ de $\\text{NO}_2$. Verificamos el balance de atomos de N: $0{,}70 \\times 2 + 0{,}60$ coincide con el total inicial." },
            { paso: "$$[\\text{N}_2\\text{O}_4] = \\frac{0{,}70}{10} = 0{,}070\\ \\text{mol/L};\\quad [\\text{NO}_2] = \\frac{0{,}60}{10} = 0{,}060\\ \\text{mol/L}$$", porque: "Calculamos la concentracion de cada gas dividiendo sus moles por el volumen del reactor, porque las constantes de equilibrio usan concentraciones molares. Con $10\\ \\text{L}$, el $\\text{N}_2\\text{O}_4$ queda en $0{,}070\\ \\text{mol/L}$ y el $\\text{NO}_2$ en $0{,}060\\ \\text{mol/L}$. Usar moles directamente en Kc daria un valor incorrecto." },
            { paso: "Consideraciones: volumen constante ($10\\ \\text{L}$), gases ideales, sistema cerrado, sin otros equilibrios.", porque: "Listamos las hipotesis del calculo, porque el enunciado pide indicarlas. Suponemos volumen constante, gases ideales, sistema cerrado y ausencia de otros equilibrios, lo que permite tratar la mezcla como un gas simple. Por eso conviene escribirlas explicitamente junto con los valores de concentracion." }
          ],
          resultado: "$[\\text{N}_2\\text{O}_4] = 0{,}070\\ \\text{mol/L}$; $[\\text{NO}_2] = 0{,}060\\ \\text{mol/L}$"
        },
        {
          parte: "b)",
          pasos: [
            { paso: "$$K_c = \\frac{[\\text{NO}_2]^2}{[\\text{N}_2\\text{O}_4]} = \\frac{(0{,}060)^2}{0{,}070} = 0{,}0514\\ \\text{mol/L}$$", porque: "Escribimos la expresion de Kc con los coeficientes como exponentes, porque Kc es el cociente de concentraciones de productos sobre reactivos. El $\\text{NO}_2$ aparece al cuadrado por su coeficiente y el $\\text{N}_2\\text{O}_4$ a la primera potencia. Reemplazando $\\frac{(0{,}060)^2}{0{,}070}$ se obtiene $0{,}0514\\ \\text{mol/L}$." },
            { paso: "$$T = 56 + 273{,}15 = 329{,}15\\ \\text{K}$$ $\\Delta n(\\text{gas}) = 2 - 1 = +1$.", porque: "Convertimos la temperatura a kelvin y calculamos $\\Delta n$, porque la relacion entre $K_p$ y $K_c$ requiere la temperatura absoluta y el cambio neto de moles de gas. Con $56 + 273{,}15 = 329{,}15\\ \\text{K}$ y $\\Delta n = 2 - 1 = +1$, ambos datos quedan listos. Dejar la temperatura en grados Celsius llevaria a un error." },
            { paso: "$$K_p = K_c \\cdot (RT)^{\\Delta n} = K_c \\cdot R \\cdot T = 0{,}0514 \\times (0{,}08206 \\times 329{,}15) = 0{,}0514 \\times 27{,}01 = 1{,}39\\ \\text{atm}$$", porque: "Calculamos $K_p$ con $K_p = K_c \\times (RT)^{\\Delta n}$, porque $K_p$ y $K_c$ se vinculan mediante la ley de los gases ideales. Con $\\Delta n = +1$ queda $K_p = K_c \\times R \\times T$, y reemplazando $0{,}0514$ con $R = 0{,}08206\\ \\text{L}\\cdot\\text{atm/mol}\\cdot\\text{K}$ y $T = 329{,}15\\ \\text{K}$ se obtiene $1{,}39\\ \\text{atm}$. El resultado esta en atm, la unidad de una presion." },
            { paso: "Chequeo: $n_{\\text{total}} = 1{,}3\\ \\text{mol}$ → $P = \\frac{1{,}3 \\times 27{,}01}{10} = 3{,}51\\ \\text{atm}$; $x(\\text{NO}_2) = 0{,}4615$ → $P(\\text{NO}_2) = 1{,}62\\ \\text{atm}$; $P(\\text{N}_2\\text{O}_4) = 1{,}89\\ \\text{atm}$; $K_p = \\frac{1{,}62^2}{1{,}89} = 1{,}39\\ \\text{atm}$.", porque: "Verificamos el resultado calculando $K_p$ con presiones parciales, porque esa comprobacion independiente confirma que $K_c$ y $K_p$ son consistentes. Obtenemos $1{,}3$ mol totales, fracciones molares y presiones parciales con $p_i = x_i \\times P_{\\text{total}}$. Al reemplazar $1{,}62\\ \\text{atm}$ y $1{,}89\\ \\text{atm}$ en $K_p$ se llega otra vez a $1{,}39\\ \\text{atm}$." }
          ],
          resultado: "$K_c \\approx 5{,}1 \\times 10^{-2}\\ \\text{mol/L}$; $K_p \\approx 1{,}39\\ \\text{atm}$; relación $K_p = K_c \\cdot R \\cdot T$"
        },
        {
          parte: "c)(i)",
          pasos: [
            { paso: "Disminuir el volumen aumenta la presión total.", porque: "Analizamos el efecto de la presion al disminuir el volumen, porque a temperatura constante la presion es inversamente proporcional al volumen ($P = \\frac{nRT}{V}$). Por eso al reducir $V$ la presion total aumenta. La constante de equilibrio no cambia con esto, pero la posicion del equilibrio si puede hacerlo." },
            { paso: "Por Le Chatelier el equilibrio se desplaza hacia el lado con menos moles de gas: 1 mol de $\\text{N}_2\\text{O}_4$ frente a 2 mol de $\\text{NO}_2$.", porque: "Aplicamos Le Chatelier a la presion: el equilibrio se desplaza hacia el lado con menos moles de gas, porque el sistema busca bajar la presion. Un mol de $\\text{N}_2\\text{O}_4$ frente a 2 mol de $\\text{NO}_2$ indica que el lado con menos moles es el de los reactivos. Por eso el equilibrio se corre hacia la izquierda, formando $\\text{N}_2\\text{O}_4$." }
          ],
          resultado: "Se desplaza hacia la izquierda (formación de $\\text{N}_2\\text{O}_4$)"
        },
        {
          parte: "c)(ii)",
          pasos: [
            { paso: "Si al subir T aumenta $p(\\text{NO}_2)$, el equilibrio se desplaza hacia la derecha al calentar.", porque: "Interpretamos el dato del enunciado sobre la presion parcial de $\\text{NO}_2$ con la temperatura, porque indica como se mueve el equilibrio al calentar. Si la presion de $\\text{NO}_2$ sube al calentar, se forma mas $\\text{NO}_2$, es decir el equilibrio se corre a la derecha. Esta interpretacion es la base para decidir el signo de $\\Delta H$." },
            { paso: "Por Le Chatelier, al aumentar T el equilibrio se desplaza en el sentido que absorbe calor: el directo es endotérmico ($\\Delta H > 0$).", porque: "Aplicamos Le Chatelier al factor temperatura para determinar si el sentido directo es endotermico o exotermico, porque al calentar el sistema favorece el sentido que consume calor. Como el sentido directo se favorece al calentar, consume calor y por eso $\\Delta H > 0$. Entonces la reaccion es endotermica." }
          ],
          resultado: "Endotérmica ($\\Delta H > 0$)"
        }
      ],
      errores_tipicos: [
        { error: "Poner 0,3 mol de NO2 olvidando el coeficiente 2 de la reacción.", como_evitar: "Por cada mol de N2O4 que se descompone aparecen 2 mol de NO2." },
        { error: "Usar Kp = Kc sin el factor (RT)^Δn, o dejar T en °C.", como_evitar: "Con Δn = +1, Kp = Kc·R·T con T en K (56 + 273,15 = 329,15 K)." },
        { error: "Invertir el efecto de la presión: pensar que al reducir V se favorece el lado con más moles gaseosos.", como_evitar: "Menor volumen = mayor presión: el equilibrio va al lado con menos moles de gas." }
      ]
    }
  ]
});

// Parcial 31/10/2025 (encabezado: 'Parcial-31/10/25 18:00 hs').
// Grilla de corrección visible: Ej1 a 15, b 5, c 10, d 10 (40 pts); Ej2 a 10, b 10, c 10 (30 pts); Ej3 a 10, b 10, c 10 (30 pts). Nota final sin completar en la foto.
// Ojo: en el Ej2 el dato impreso dice ΔHfusión = 293 kJ/mol, pero hay una anotación manuscrita que dice '= 6,01 kJ/mol'. Se usó 6,01 kJ/mol (valor real del agua). Si el profe usa 293, el resultado cambia mucho.
// Ojo: en el Ej3 el dato impreso dice Ka HClO2 = 3,0×10⁻⁹, pero al lado hay una anotación manuscrita '= 1,15×10⁻²' (que parece el valor real de esa Ka). Se usó el impreso; con 1,15×10⁻² el orden de acidez cambia a HClO2 > HF > C6H5COOH > HCN.
window.PARCIALES.push({
  id: "parcial-2025-10-31",
  tipo: "parcial",
  fecha: "31/10/2025",
  fuente: "parciales/IMG-20260331-WA0034.jpg",
  ejercicios: [
    {
      num: 1,
      temas: ["reacciones", "soluciones", "uniones", "liquidos"],
      enunciado: "a) Para la reacción química: MnO2(s) + NaCl(ac) + H2SO4(ac) → MnSO4(ac) + Cl2(g) + Na2SO4(ac) + H2O(l). Realizar el balanceo utilizando el método de ión-electrón. Indicar nombres de los reactivos y productos e identificar cuál es el agente oxidante y el agente reductor. b) Mencionar el tipo de unión química en: (i) NaCl, (ii) H2O, (iii) Fe. c) Mencionar el tipo de fuerza intermolecular dominante y la geometría molecular para las siguientes sustancias: i) CH3Cl, ii) CH3CH2OCH2CH3, iii) NH3. d) Se desea preparar 500 g de solución al 10 % m/m, a partir de una solución de ácido clorhídrico al 35 % m/m y densidad 1,18 g/mL. ¿Qué volumen de la solución concentrada debe tomarse para realizar la dilución?",
      resolucion: [
        {
          parte: "a)",
          pasos: [
            { paso: "Medio ácido ($\\text{H}_2\\text{SO}_4$). Reducción: $\\text{MnO}_2 + 4\\,\\text{H}^+ + 2\\,e^- \\to \\text{Mn}^{2+} + 2\\,\\text{H}_2\\text{O}$.", porque: "Identificamos el medio de reaccion como acido, por el $\\text{H}_2\\text{SO}_4$, porque en medio acido el balance se ajusta con $\\text{H}^+$ y $\\text{H}_2\\text{O}$. Luego escribimos la reduccion del $\\text{MnO}_2$ a $\\text{Mn}^{2+}$, que gana $2\\,e^-$ y consume $4\\,\\text{H}^+$. Verificamos que el medio coincida con el reactivo que aporta protones." },
            { paso: "Oxidación: $2\\,\\text{Cl}^- \\to \\text{Cl}_2 + 2\\,e^-$.", porque: "Escribimos la oxidacion del $\\text{Cl}^-$ a $\\text{Cl}_2$, porque el $\\text{Cl}^-$ pierde electrones al formar $\\text{Cl}_2$. Cada ion cede un electron y la molecula de $\\text{Cl}_2$ se forma con $2\\,e^-$ cedidos. Esta semirreaccion es la complementaria de la reduccion del manganeso, asi que los electrones deben coincidir." },
            { paso: "Suma: $\\text{MnO}_2 + 4\\,\\text{H}^+ + 2\\,\\text{Cl}^- \\to \\text{Mn}^{2+} + \\text{Cl}_2 + 2\\,\\text{H}_2\\text{O}$.", porque: "Sumamos las dos semirreacciones, porque ambas intercambian $2\\,e^-$ y los electrones se cancelan. Asi queda la ecuacion ionica neta: $\\text{MnO}_2$ con $4\\,\\text{H}^+$ y $2\\,\\text{Cl}^-$ da $\\text{Mn}^{2+}$, $\\text{Cl}_2$ y $2\\,\\text{H}_2\\text{O}$. Verificamos que atomos y cargas se mantengan iguales a ambos lados." },
            { paso: "Pasaje a molecular con los iones espectadores ($\\text{Na}^+$, $\\text{SO}_4^{2-}$): $$\\text{MnO}_2(s) + 2\\,\\text{NaCl}(ac) + 2\\,\\text{H}_2\\text{SO}_4(ac) \\to \\text{MnSO}_4(ac) + \\text{Cl}_2(g) + \\text{Na}_2\\text{SO}_4(ac) + 2\\,\\text{H}_2\\text{O}(l)$$. Chequeo: O $10 = 10$, H $4 = 4$, S $2 = 2$, Na $2 = 2$, Cl $2 = 2$.", porque: "Pasamos a la ecuacion molecular agregando los iones espectadores $\\text{Na}^+$ y $\\text{SO}_4^{2-}$, porque el enunciado pide la reaccion con las sustancias completas. Con $2\\,\\text{NaCl}$ y $2\\,\\text{H}_2\\text{SO}_4$ se recuperan los iones que faltaban. El chequeo de cada elemento confirma el balance, porque O, H, S, Na y Cl coinciden a ambos lados." },
            { paso: "Nombres: $\\text{MnO}_2$ dióxido de manganeso; $\\text{NaCl}$ cloruro de sodio; $\\text{H}_2\\text{SO}_4$ ácido sulfúrico; $\\text{MnSO}_4$ sulfato de manganeso(II); $\\text{Cl}_2$ cloro; $\\text{Na}_2\\text{SO}_4$ sulfato de sodio; $\\text{H}_2\\text{O}$ agua.", porque: "Nombramos cada sustancia con la nomenclatura usual, porque el enunciado pide los nombres de reactivos y productos. El manganeso del $\\text{MnSO}_4$ actua con un estado de oxidacion que se indica con el numero romano (II). Esa indicacion evita confundirlo con otros compuestos de manganeso." },
            { paso: "Oxidante: $\\text{MnO}_2$ ($\\text{Mn}$ pasa de $+4$ a $+2$, se reduce). Reductor: $\\text{NaCl}$ ($\\text{Cl}^-$ pasa de $-1$ a $0$, se oxida).", porque: "Identificamos el oxidante y el reductor con los cambios de numero de oxidacion, porque el oxidante es la especie que se reduce y el reductor la que se oxida. El $\\text{Mn}$ baja de $+4$ a $+2$ en el $\\text{MnO}_2$, por lo que es el oxidante. El $\\text{Cl}$ pasa de $-1$ a $0$ en el $\\text{NaCl}$, por lo que es el reductor." }
          ],
          resultado: "$\\text{MnO}_2(s) + 2\\,\\text{NaCl}(ac) + 2\\,\\text{H}_2\\text{SO}_4(ac) \\to \\text{MnSO}_4(ac) + \\text{Cl}_2(g) + \\text{Na}_2\\text{SO}_4(ac) + 2\\,\\text{H}_2\\text{O}(l)$; oxidante $\\text{MnO}_2$; reductor $\\text{NaCl}$"
        },
        {
          parte: "b)",
          pasos: [
            { paso: "$\\text{NaCl}$: unión iónica ($\\text{Na}^+$ y $\\text{Cl}^-$).", porque: "Clasificamos el enlace del $\\text{NaCl}$ como ionico, porque un metal ($\\text{Na}$) y un no metal ($\\text{Cl}$) con gran diferencia de electronegatividad forman iones por transferencia de electrones. Esos iones se mantienen unidos por atraccion electrostatica en una red cristalina. Por eso es el tipo de enlace que caracteriza a las sales." },
            { paso: "$\\text{H}_2\\text{O}$: unión covalente polar ($\\text{O–H}$, diferencia de electronegatividad $\\approx 1{,}2$).", porque: "Clasificamos el enlace del agua como covalente polar, porque O y H comparten electrones y la diferencia de electronegatividad hace que el enlace sea polar. La diferencia, aprox. $1{,}2$, confirma esa polaridad. Entonces el enlace no es ionico, porque ambos elementos son no metales." },
            { paso: "$\\text{Fe}$: unión metálica (electrones de valencia deslocalizados).", porque: "Clasificamos el enlace del $\\text{Fe}$ como metalico, porque entre atomos de metal los electrones de valencia se deslocalizan y forman un mar de electrones compartido. Esa movilidad explica la conductividad y la ductilidad de los metales. Por eso el enlace metalico no es ionico ni covalente." }
          ],
          resultado: "(i) iónica; (ii) covalente polar; (iii) metálica"
        },
        {
          parte: "c)",
          pasos: [
            { paso: "i) $\\text{CH}_3\\text{Cl}$: molécula polar ($\\text{C–Cl}$ polar, no simétrica); tetraédrica en torno al $\\text{C}$. Fuerza dominante: dipolo-dipolo.", porque: "Determinamos la fuerza dominante y la geometria de $\\text{CH}_3\\text{Cl}$, porque la molecula tiene un enlace $\\text{C-Cl}$ polar y no es simetrica. La geometria tetraedrica alrededor del $\\text{C}$, con el $\\text{Cl}$ como sustituyente, genera un dipolo neto. Como no hay $\\text{H}$ unido a $\\text{F}$, $\\text{O}$ o $\\text{N}$, no corresponde un puente de hidrogeno, y la fuerza dominante es dipolo-dipolo." },
            { paso: "ii) $\\text{CH}_3\\text{CH}_2\\text{OCH}_2\\text{CH}_3$ (éter dietílico): angular en torno al $\\text{O}$ ($\\text{C–O–C}$), con momento dipolar pequeño. Fuerzas: dispersión de London y dipolo-dipolo; dominante: dispersión (dudoso, depende del criterio de la cátedra).", porque: "Analizamos el eter dietilico: la geometria angular en torno al $\\text{O}$ genera un dipolo pequeno, porque el oxigeno es mas electronegativo y el $\\text{C-O-C}$ no es lineal. Entre dispersion y dipolo-dipolo, la dispersion suele dominar en moleculas grandes sin $\\text{H}$ unido a $\\text{O}$, $\\text{N}$ o $\\text{F}$. Como el enunciado no fija el criterio, conviene justificar la eleccion de London." },
            { paso: "iii) $\\text{NH}_3$: piramidal trigonal, polar. Fuerza dominante: puentes de hidrógeno.", porque: "Identificamos la geometria piramidal del $\\text{NH}_3$ y su fuerza dominante, porque el $\\text{H}$ unido al $\\text{N}$, muy electronegativo, permite puentes de hidrogeno. El par libre del $\\text{N}$ hace que la molecula sea piramidal y polar. Por eso la fuerza dominante es el puente de hidrogeno, y conviene verificar que el $\\text{H}$ este unido a $\\text{N}$, $\\text{O}$ o $\\text{F}$." }
          ],
          resultado: "i) dipolo-dipolo, tetraédrica; ii) London (dudoso), angular; iii) puentes de H, piramidal"
        },
        {
          parte: "d)",
          pasos: [
            { paso: "Masa de $\\text{HCl}$ necesaria: $$500\\ \\text{g} \\times 0{,}10 = 50\\ \\text{g}$$", porque: "Calculamos la masa de $\\text{HCl}$ a partir del porcentaje en masa, porque $10\\%$ m/m indica la fraccion de masa de soluto en la solucion. Sobre $500\\ \\text{g}$ de solucion, el soluto es el $10\\%$ de esa masa, es decir $50\\ \\text{g}$. Verificamos que trabajemos con masas y no con volumenes." },
            { paso: "Masa de solución concentrada: $$m = \\frac{50\\ \\text{g}}{0{,}35} = 142{,}9\\ \\text{g}$$", porque: "Calculamos la masa de solucion concentrada dividiendo el soluto por $0{,}35$, porque el $35\\%$ m/m indica que cada gramo de solucion lleva $0{,}35\\ \\text{g}$ de soluto. Con $50\\ \\text{g}$ de $\\text{HCl}$ se necesitan $142{,}9\\ \\text{g}$ de solucion al $35\\%$. Dividir, y no multiplicar, es lo que da la masa mayor de la solucion concentrada." },
            { paso: "Volumen: $$V = \\frac{142{,}9\\ \\text{g}}{1{,}18\\ \\text{g/mL}} = 121{,}1\\ \\text{mL}$$", porque: "Convertimos la masa de solucion concentrada en volumen con $V = \\frac{m}{d}$, porque la densidad relaciona masa y volumen. Con $142{,}9\\ \\text{g}$ y $1{,}18\\ \\text{g/mL}$ se obtienen $121{,}1\\ \\text{mL}$. Ese es el volumen que se toma de la solucion concentrada para preparar la dilucion." },
            { paso: "Suposición: el dato es $\\%$ m/m, por eso se trabaja en masas y la densidad pasa a volumen.", porque: "Fijamos la hipotesis de que el dato es $\\%$ m/m, porque la base del porcentaje es la masa y no el volumen. Por eso trabajamos en masas y usamos la densidad solo al final para pasar la masa a volumen. Explicitarlo evita confundir el uso de la densidad." }
          ],
          resultado: "$\\approx 121\\ \\text{mL}$ de $\\text{HCl}$ $35\\%$ m/m"
        }
      ],
      errores_tipicos: [
        { error: "Invertir oxidante y reductor (decir que el oxidante es el que se oxida).", como_evitar: "El oxidante gana electrones (el Mn baja de +4 a +2); el reductor los pierde." },
        { error: "Balancear en medio ácido sin verificar cargas, o no incluir los H2O en el ajuste de H y O.", como_evitar: "Ajustá O con H2O, H con H⁺, y chequeá la carga antes de sumar las semirreacciones." },
        { error: "En d) usar la densidad al revés (V = d·m) o tomar la masa de la solución como la de soluto.", como_evitar: "m(soluto) = 50 g; m(solución) = 50 / 0,35; V = m / d." }
      ]
    },
    {
      num: 2,
      temas: ["termodinamica"],
      enunciado: "Una muestra de 13 g que contiene acetato de etilo líquido (C4H8O2) con un 87 % de pureza en masa libera, luego de combustionar en forma completa, 548 kcal/mol de acetato. Esta muestra se emplea para calentar hielo desde −14 °C hasta el estado vapor a 110 °C, a presión atmosférica. Datos del agua: ΔHfusión = 293 kJ/mol (ver comentario); cp agua(s) = 2,09 J/g·°C; cp agua(l) = 4,18 J/g·°C; cp agua(g) = 2,03 J/g·°C; ΔHvap = 40,626 kJ/mol. a) ¿Cuántos gramos de hielo a −14 °C se convertirán en vapor a 110 °C cuando se combustiona esta muestra a presión constante? b) Escriba la ecuación termoquímica de la combustión. ¿Qué masa en gramos de muestra de acetato de etilo se consumirá si se liberan 86 kJ? c) Determine el poder calorífico superior (PCS) y el poder calorífico inferior (PCI) del acetato de etilo, en kcal/mol.",
      resolucion: [
        {
          parte: "a)",
          pasos: [
            { paso: "Acetato puro: $13\\ \\text{g} \\times 0{,}87 = 11{,}31\\ \\text{g}$; $M(\\text{C}_4\\text{H}_8\\text{O}_2) = 88{,}11\\ \\text{g/mol}$ → $n = 0{,}1284\\ \\text{mol}$.", porque: "Calculamos la masa de acetato puro y sus moles, porque solo el $87\\%$ de la muestra es acetato y el calor depende de los moles de acetato. Multiplicamos $13\\ \\text{g}$ por $0{,}87$ para obtener $11{,}31\\ \\text{g}$ y los dividimos por $M(\\text{C}_4\\text{H}_8\\text{O}_2) = 88{,}11\\ \\text{g/mol}$. Con eso se obtienen $0{,}1284\\ \\text{mol}$, y verificamos que la masa pura sea menor que la de la muestra." },
            { paso: "Calor liberado: $$0{,}1284\\ \\text{mol} \\times 548\\ \\text{kcal/mol} = 70{,}34\\ \\text{kcal} \\times 4{,}184\\ \\text{kJ/kcal} = 294{,}3\\ \\text{kJ}$$", porque: "Calculamos el calor liberado multiplicando los moles de acetato por la energia por mol, porque la energia total es el producto de ambos. Usamos $548\\ \\text{kcal/mol}$ y convertimos a kJ con $4{,}184\\ \\text{kJ/kcal}$, para que la unidad sea compatible con el calor que absorbe el agua. Con $0{,}1284\\ \\text{mol}$ se obtienen $294{,}3\\ \\text{kJ}$." },
            { paso: "Calor por gramo de hielo: (1) hielo $-14 \\rightarrow 0\\ ^\\circ\\text{C}$: $2{,}09 \\times 14 = 29{,}3\\ \\text{J/g}$; (2) fusión: $\\frac{6010\\ \\text{J/mol}}{18{,}015\\ \\text{g/mol}} = 333{,}6\\ \\text{J/g}$; (3) agua $0 \\rightarrow 100\\ ^\\circ\\text{C}$: $4{,}18 \\times 100 = 418\\ \\text{J/g}$; (4) vaporización: $\\frac{40\\,626\\ \\text{J/mol}}{18{,}015\\ \\text{g/mol}} = 2255\\ \\text{J/g}$; (5) vapor $100 \\rightarrow 110\\ ^\\circ\\text{C}$: $2{,}03 \\times 10 = 20{,}3\\ \\text{J/g}$.", porque: "Sumamos las etapas por las que pasa el hielo, porque debe calentarse, fundirse, calentarse como agua, vaporizarse y calentarse como vapor. Cada etapa usa su propio calor especifico o su $\\Delta H$ de cambio de fase. Usamos $6010\\ \\text{J/mol}$ para la fusion, valor real del agua segun la correccion manuscrita, y no los $293\\ \\text{kJ/mol}$ impresos, que darian un calor mucho mayor." },
            { paso: "$$\\text{Total} = 3057\\ \\text{J/g} = 3{,}057\\ \\text{kJ/g}$$", porque: "Sumamos el calor de todas las etapas para obtener el total por gramo, porque el proceso atraviesa cada etapa en secuencia. Con $29{,}3 + 333{,}6 + 418 + 2255 + 20{,}3\\ \\text{J/g}$ se llega a $3057\\ \\text{J/g}$. Verificamos que todos los terminos esten en J/g antes de sumar, para no mezclar unidades." },
            { paso: "$$m(\\text{hielo}) = \\frac{294{,}3\\ \\text{kJ}}{3{,}057\\ \\text{kJ/g}} = 96{,}3\\ \\text{g}$$", porque: "Calculamos la masa de hielo dividiendo el calor disponible por el calor necesario por gramo, porque la energia de la combustion se reparte entre los gramos de hielo. Con $294{,}3\\ \\text{kJ}$ y $3{,}057\\ \\text{kJ/g}$ se obtienen $96{,}3\\ \\text{g}$. Verificamos que las unidades den gramos, como pide el punto." },
            { paso: "Suposición: el calor de combustión se transfiere todo al hielo, sin pérdidas; la presión es $1\\ \\text{atm}$.", porque: "Fijamos las hipotesis de que todo el calor llega al hielo sin perdidas y de presion de $1\\ \\text{atm}$, porque el enunciado no menciona perdidas y la presion define las temperaturas de cambio de fase. Explicitarlo justifica el uso del calor total de combustion. Si hubiera perdidas, los $96{,}3\\ \\text{g}$ serian una cota superior." }
          ],
          resultado: "$\\approx 96{,}3\\ \\text{g}$ de hielo"
        },
        {
          parte: "b)",
          pasos: [
            { paso: "Ecuación: $\\text{C}_4\\text{H}_8\\text{O}_2(l) + 5\\ \\text{O}_2(g) \\to 4\\ \\text{CO}_2(g) + 4\\ \\text{H}_2\\text{O}(l)$. Verificación: $\\text{O}\\ 2 + 10 = 12 = 8 + 4$.", porque: "Escribimos la reaccion de combustion completa del acetato de etilo y la balanceamos en C, H y luego O, porque los coeficientes fijan la energia por mol. Con 4 $\\text{CO}_2$ y 4 $\\text{H}_2\\text{O}$ se necesitan 5 $\\text{O}_2$, y el oxigeno se verifica con 12 a cada lado. El agua se escribe liquida para ser consistente con el dato de $\\text{PCS}$." },
            { paso: "$$\\Delta H = -548\\ \\text{kcal/mol} \\times 4{,}184\\ \\text{kJ/kcal} = -2292{,}8\\ \\text{kJ/mol}$$", porque: "Convertimos el calor de kcal a kJ con el factor $4{,}184\\ \\text{kJ/kcal}$, porque el calor pedido esta en kJ. Con $548\\ \\text{kcal/mol}$ se obtiene $-2292{,}8\\ \\text{kJ/mol}$. El signo negativo indica que la combustion libera energia, y ese valor se usa en el calculo de moles." },
            { paso: "$$n = \\frac{86\\ \\text{kJ}}{2292{,}8\\ \\text{kJ/mol}} = 0{,}03751\\ \\text{mol}$$; $m_{\\text{puro}} = 0{,}03751 \\times 88{,}11 = 3{,}30\\ \\text{g}$", porque: "Calculamos los moles necesarios con $n = \\frac{Q}{|\\Delta H|}$, porque la energia por mol relaciona energia y cantidad de sustancia. Dividimos $86\\ \\text{kJ}$ por $2292{,}8\\ \\text{kJ/mol}$ y obtenemos $0{,}03751\\ \\text{mol}$. Con $M = 88{,}11\\ \\text{g/mol}$, la masa pura es $3{,}30\\ \\text{g}$, y los kJ se cancelan en la division." },
            { paso: "$$m_{\\text{muestra}} = \\frac{3{,}30\\ \\text{g}}{0{,}87} = 3{,}80\\ \\text{g}$$", porque: "Calculamos la masa de muestra impura dividiendo la masa pura por $0{,}87$, porque la muestra contiene $87\\%$ de acetato. Con $3{,}30\\ \\text{g}$ de acetato puro, la muestra necesaria es $3{,}80\\ \\text{g}$, un valor mayor que el puro, como corresponde. Por eso la respuesta del punto b) es $3{,}80\\ \\text{g}$ de muestra." }
          ],
          resultado: "$3{,}80\\ \\text{g}$ de muestra ($3{,}30\\ \\text{g}$ de acetato puro)"
        },
        {
          parte: "c)",
          pasos: [
            { paso: "$\\text{PCS}$ = calor de combustión con $\\text{H}_2\\text{O}$ líquida = $548\\ \\text{kcal/mol}$ (suposición: el dato es ese).", porque: "Identificamos el $\\text{PCS}$ con el calor de combustion que incluye el agua condensada en los productos, porque el poder calorifico superior considera el agua en estado liquido. Tomamos el dato de $548\\ \\text{kcal/mol}$ como ese valor, lo que supone que el enunciado lo da en esas condiciones. Conviene explicitar esta suposicion en la respuesta." },
            { paso: "$\\text{PCI} = \\text{PCS} - n(\\text{H}_2\\text{O})\\cdot\\Delta H_{\\text{vap}}$, con el agua en vapor. $\\Delta H_{\\text{vap}} = 40{,}626\\ \\text{kJ/mol} = 9{,}71\\ \\text{kcal/mol}$; $n(\\text{H}_2\\text{O}) = 4\\ \\text{mol}$.", porque: "Calculamos el $\\text{PCI}$ descontando la energia de vaporizacion del agua formada, porque el $\\text{PCI}$ supone el agua en estado vapor. Con $n(\\text{H}_2\\text{O}) = 4\\ \\text{mol}$ segun la ecuacion del punto b) y $\\Delta H_{\\text{vap}} = 40{,}626\\ \\text{kJ/mol} = 9{,}71\\ \\text{kcal/mol}$, el descuento es $4 \\times 9{,}71\\ \\text{kcal}$. Verificamos que el $\\Delta H_{\\text{vap}}$ este en kcal antes de restarlo del $\\text{PCS}$." },
            { paso: "$$\\text{PCI} = 548 - 4 \\times 9{,}71 = 548 - 38{,}84 = 509{,}2\\ \\text{kcal/mol}$$", porque: "Restamos el calor de vaporizacion al $\\text{PCS}$ en las mismas unidades, porque el $\\text{PCI}$ es el $\\text{PCS}$ menos la energia que se usa para vaporizar el agua. Con $548 - 38{,}84 = 509{,}2\\ \\text{kcal/mol}$ obtenemos el $\\text{PCI}$. Por eso el valor del $\\text{PCI}$ es menor que el del $\\text{PCS}$, como debe ser." }
          ],
          resultado: "$\\text{PCS} \\approx 548\\ \\text{kcal/mol}$; $\\text{PCI} \\approx 509\\ \\text{kcal/mol}$"
        }
      ],
      errores_tipicos: [
        { error: "No aplicar la pureza del 87 % a la muestra o aplicarla al revés (multiplicar en lugar de dividir).", como_evitar: "Acetato puro = 0,87 × muestra; muestra = puro / 0,87." },
        { error: "Usar cp del agua líquida para el hielo (o mezclar los tres cp).", como_evitar: "Hielo 2,09 (s), agua 4,18 (l), vapor 2,03 (g); cada etapa usa el suyo." },
        { error: "Sumar en vez de restar el calor de vaporización en el PCI, o no multiplicar por los 4 mol de H2O.", como_evitar: "PCI = PCS − n(H2O)·ΔHvap, con n = 4 y en las mismas unidades (kcal)." }
      ]
    },
    {
      num: 3,
      temas: ["acidobase", "equilibrio", "gases"],
      enunciado: "Considerando los valores de Ka de los ácidos HCN, C6H5COOH, HClO2 y HF, responda: a) ¿Cuál es el orden de mayor a menor acidez en agua? Calcule el valor de pH para una disolución acuosa de concentración 1,5 M de ácido HCN. Utilice balances de masa y carga. b) Exprese la Ka para el ácido benzoico (C6H5COOH) y halle el grado de disociación, en porcentaje, para una concentración inicial 0,12 M. c) (i) Escriba el balance de presiones que se utiliza para determinar la masa de magnesio del TP2. (ii) En dicha experiencia, ¿para qué se utiliza una regla graduada? ¿Y la densidad del mercurio? (iii) Escriba la relación entre la altura de Hg y la altura del agua. Datos: Ka HCN = 6,2 × 10⁻¹⁰; Ka C6H5COOH = 6,3 × 10⁻⁵; Ka HClO2 = 3,0 × 10⁻⁹ (ver comentario); Ka HF = 6,8 × 10⁻⁴. R = 8,314 J/mol·K = 0,08206 L·atm/mol·K = 1,987 cal/mol·K.",
      resolucion: [
        {
          parte: "a) orden",
          pasos: [
            { paso: "Según los $K_a$ impresos, de mayor a menor acidez: $\\text{HF}\\ (6{,}8 \\times 10^{-4}) > \\text{C}_6\\text{H}_5\\text{COOH}\\ (6{,}3 \\times 10^{-5}) > \\text{HClO}_2\\ (3{,}0 \\times 10^{-9}) > \\text{HCN}\\ (6{,}2 \\times 10^{-10})$.", porque: "Ordenamos la acidez comparando los $K_a$: un $K_a$ mas grande indica un acido mas disociado y, por lo tanto, mas fuerte. Usamos los valores impresos del enunciado, porque son los datos disponibles. Con la correccion manuscrita de $\\text{HClO}_2$ el orden cambiaria, como se anota en el comentario." }
          ],
          resultado: "$\\text{HF} > \\text{C}_6\\text{H}_5\\text{COOH} > \\text{HClO}_2 > \\text{HCN}$"
        },
        {
          parte: "a) pH",
          pasos: [
            { paso: "Balance de masa: $[\\text{HCN}] + [\\text{CN}^-] = 1{,}5\\ \\text{M}$.", porque: "Escribimos el balance de masa para el $\\text{HCN}$, porque toda la concentracion analitica debe repartirse entre la forma protonada y la disociada. Asi, $[\\text{HCN}] + [\\text{CN}^-] = 1{,}5\\ \\text{M}$. Este balance es el primer paso para plantear el equilibrio acido-base." },
            { paso: "Balance de carga: $[\\text{H}^+] = [\\text{CN}^-] + [\\text{OH}^-] \\approx [\\text{CN}^-]$ (el $\\text{OH}^-$ es despreciable en medio ácido).", porque: "Escribimos el balance de carga, porque la neutralidad electrica iguala cargas positivas y negativas. El $\\text{H}^+$ se iguala a $\\text{CN}^-$ mas $\\text{OH}^-$, y en medio acido el $\\text{OH}^-$ es despreciable, asi que $[\\text{H}^+]$ es aproximadamente $[\\text{CN}^-]$. Conviene justificar esa aproximacion, porque dejarla sin explicar es un error frecuente." },
            { paso: "$$K_a = \\frac{[\\text{H}^+]^2}{1{,}5 - [\\text{H}^+]} \\approx \\frac{[\\text{H}^+]^2}{1{,}5} \\rightarrow [\\text{H}^+] = \\sqrt{6{,}2 \\times 10^{-10} \\times 1{,}5} = 3{,}05 \\times 10^{-5}\\ \\text{mol/L}$$", porque: "Planteamos $K_a$ con las concentraciones de equilibrio y la aproximamos, porque el $\\text{HCN}$ es debil y el termino $C - [\\text{H}^+]$ se aproxima por $C$. Con $K_a = \\frac{[\\text{H}^+]^2}{C}$ se obtiene $[\\text{H}^+] = \\sqrt{6{,}2 \\times 10^{-10} \\times 1{,}5} = 3{,}05 \\times 10^{-5}\\ \\text{mol/L}$. Esta aproximacion se verifica al final." },
            { paso: "$$\\text{pH} = -\\log(3{,}05 \\times 10^{-5}) = 4{,}52$$ Chequeo: $[\\text{H}^+] \\ll 1{,}5$, la aproximación vale.", porque: "Calculamos el $\\text{pH}$ como $-\\log[\\text{H}^+]$, porque es el negativo del logaritmo decimal de la concentracion de $\\text{H}^+$. Con $3{,}05 \\times 10^{-5}\\ \\text{mol/L}$ se obtiene $\\text{pH} = 4{,}52$. Como $[\\text{H}^+]$ es mucho menor que $1{,}5\\ \\text{M}$, la aproximacion $C - [\\text{H}^+] = C$ es valida y el resultado queda confirmado." }
          ],
          resultado: "$\\text{pH} \\approx 4{,}52$"
        },
        {
          parte: "b)",
          pasos: [
            { paso: "$$K_a = \\frac{[\\text{C}_6\\text{H}_5\\text{COO}^-][\\text{H}_3\\text{O}^+]}{[\\text{C}_6\\text{H}_5\\text{COOH}]} = 6{,}3 \\times 10^{-5}$$ (dato).", porque: "Escribimos la expresion de $K_a$ del acido benzoico con sus especies en equilibrio, porque la constante describe la disociacion del acido debil. El valor se toma del enunciado, $6{,}3 \\times 10^{-5}$. Esta expresion es la base para plantear la ecuacion de segundo grado en $\\alpha$." },
            { paso: "Con $C = 0{,}12\\ \\text{M}$: $K_a = \\frac{C\\alpha^2}{1 - \\alpha}$ → $$0{,}12\\,\\alpha^2 + 6{,}3 \\times 10^{-5}\\,\\alpha - 6{,}3 \\times 10^{-5} = 0$$", porque: "Planteamos la ecuacion de $K_a$ en funcion del grado de disociacion con $C = 0{,}12\\ \\text{M}$, porque el denominador $(1 - \\alpha)$ no puede despreciarse sin verificar. Al reordenar obtenemos la cuadratica $0{,}12\\,\\alpha^2 + 6{,}3 \\times 10^{-5}\\,\\alpha - 6{,}3 \\times 10^{-5} = 0$. Verificamos la aproximacion al final, porque aproximar sin comprobarlo puede dar un error." },
            { paso: "$$\\alpha = \\frac{5{,}436 \\times 10^{-3}}{0{,}24} = 0{,}02265 \\rightarrow 2{,}27\\%$$", porque: "Resolvemos la cuadratica con la formula resolvente y tomamos la raiz positiva, porque $\\alpha$ es una fraccion y no puede ser negativa. Con $\\frac{5{,}436 \\times 10^{-3}}{0{,}24}$ se obtiene $\\alpha = 0{,}02265$. Multiplicando por $100$ pasamos ese valor a $2{,}27\\%$." },
            { paso: "Aproximación $\\alpha \\approx \\sqrt{K_a/C} = \\sqrt{5{,}25 \\times 10^{-4}} = 0{,}0229$ ($2{,}29\\%$), coincide.", porque: "Calculamos la aproximacion $\\alpha = \\sqrt{K_a/C}$ como control, porque si $\\alpha$ es pequeno el denominador $(1 - \\alpha)$ se aproxima a 1 y la expresion se simplifica. Con $\\sqrt{5{,}25 \\times 10^{-4}} = 0{,}0229$ se obtiene $2{,}29\\%$. Ese valor coincide con el $2{,}27\\%$ del calculo exacto, lo que confirma el resultado." }
          ],
          resultado: "$\\alpha \\approx 2{,}27\\%$ ($\\approx 2{,}3\\%$)"
        },
        {
          parte: "c)(i)",
          pasos: [
            { paso: "Balance de presiones en el nivel de referencia: $P_{\\text{atm}} = P(\\text{H}_2) + P(\\text{vapor de agua a } T) \\pm$ presión de la columna líquida ($\\rho \\cdot g \\cdot h$).", porque: "Escribimos el balance de presiones en el nivel de referencia, porque la presion del gas en ese nivel debe igualar la atmosferica mas la de la columna de liquido. La presion del gas es la suma de la del $\\text{H}_2$ y la del vapor de agua a esa temperatura, por la ley de Dalton. Con esta expresion podemos despejar la presion del $\\text{H}_2$ y luego la masa de Mg." },
            { paso: "Suposición: el esquema del TP2 no está en la foto, por eso el signo de la columna no se puede fijar con seguridad.", porque: "Explicitamos la limitacion del esquema: el signo de la columna depende del montaje, que no se ve en la foto. Por eso la presion de la columna puede sumarse o restarse segun la disposicion, y la expresion queda como forma general. Conviene verificar el esquema del TP2 antes de fijar el signo." }
          ],
          resultado: "$P_{\\text{atm}} = P(\\text{H}_2) + P(\\text{H}_2\\text{O}\\ \\text{vapor}) \\pm \\rho \\cdot g \\cdot h$ (forma general, dudosa en el signo)"
        },
        {
          parte: "c)(ii)",
          pasos: [
            { paso: "La regla graduada mide las alturas ($h$) de las columnas de líquido.", porque: "Identificamos la funcion de la regla graduada: medir las alturas de las columnas de liquido, porque la altura es el dato que entra en la presion hidrostatica. Sin medir $h$ no se puede calcular la presion de la columna. Por eso la altura debe medirse desde el nivel de referencia." },
            { paso: "La densidad del mercurio ($13{,}6\\ \\text{g/mL}$) permite convertir una altura de $\\text{Hg}$ en presión ($P = \\rho \\cdot g \\cdot h$) y compararla con la del agua.", porque: "Explicamos el uso de la densidad del mercurio, que permite convertir una altura de $\\text{Hg}$ en presion con $P = \\rho \\times g \\times h$. Con $\\rho(\\text{Hg}) = 13{,}6\\ \\text{g/mL}$, un valor tabulado y no dado en el enunciado, la presion de la columna de mercurio se puede comparar con la del agua. Esto sirve para la relacion de alturas del punto siguiente." }
          ],
          resultado: "Regla: medir alturas; densidad del $\\text{Hg}$: pasar altura a presión"
        },
        {
          parte: "c)(iii)",
          pasos: [
            { paso: "Igualdad de presiones hidrostáticas: $\\rho(\\text{Hg}) \\cdot h(\\text{Hg}) = \\rho(\\text{agua}) \\cdot h(\\text{agua})$.", porque: "Igualamos las presiones hidrostaticas de las dos columnas, porque ambas equilibran la misma presion en el nivel de referencia. La presion hidrostatica es $\\rho \\times g \\times h$, y el $g$ se cancela al igualar. Verificamos que la igualdad sea entre presiones y no entre alturas." },
            { paso: "$$h(\\text{agua}) = \\frac{\\rho(\\text{Hg})}{\\rho(\\text{agua})} \\cdot h(\\text{Hg}) = 13{,}6 \\cdot h(\\text{Hg})$$", porque: "Despejamos la altura del agua de la igualdad de presiones, porque la relacion entre alturas es la inversa de la relacion entre densidades. Con la densidad del agua en el denominador, la expresion queda $h(\\text{agua}) = 13{,}6 \\times h(\\text{Hg})$. Por eso la columna de agua es $13{,}6$ veces mas alta que la de mercurio." }
          ],
          resultado: "$h(\\text{agua}) = 13{,}6 \\cdot h(\\text{Hg})$"
        }
      ],
      errores_tipicos: [
        { error: "Tratar el HCN como ácido fuerte y calcular pH = −log(1,5).", como_evitar: "Es un ácido débil (Ka chica): [H⁺] = √(Ka·C) con balances de masa y carga." },
        { error: "Confundir Ka con pKa o con el grado de disociación al reportar el resultado.", como_evitar: "pKa = −log Ka; α es un porcentaje de disociación, no una constante. Para el orden de acidez se compara Ka (más grande = más ácido)." },
        { error: "Olvidar la densidad del mercurio en la relación de alturas (dejar h(agua) = h(Hg)).", como_evitar: "La columna de agua es 13,6 veces más alta que la de Hg para la misma presión." }
      ]
    }
  ]
});
