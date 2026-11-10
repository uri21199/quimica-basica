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
            { paso: "Reacción: CaCO3(s) → CaO(s) + CO2(g), relación 1:1:1.", porque: "Escribimos la ecuacion quimica y la balanceamos, porque los coeficientes fijan las proporciones en moles de todo el ejercicio. Como la relacion es 1:1:1, cada mol de CaCO3 que se descompone da un mol de CaO y un mol de CO2. Por eso lo que se consume de CaCO3 coincide con lo que se forma de los productos, y esa relacion se usa en los pasos siguientes." },
            { paso: "En CNPT, 1 mol de gas ocupa 22,4 L: n(CO2) = 60 L / 22,4 L/mol = 2,679 mol.", porque: "Usamos el volumen molar de un gas en CNPT para pasar el volumen medido a moles, porque n = V / Vm relaciona la cantidad de sustancia con el volumen de un gas. Con 60 L y 22,4 L/mol, el cociente da 2,679 mol de CO2. Como el dato esta en CNPT, el resultado es valido y queda listo para la relacion 1:1 de los pasos siguientes." },
            { paso: "El gas medido ya es el real (con rendimiento incluido), así que no se corrige por el 85 %.", porque: "No corregimos el volumen porque el gas medido es el que realmente se formo, y el rendimiento del 85 % ya esta incluido en esa medicion. Ese rendimiento afecta cuanto CaCO3 reacciono, no cuanto gas salio. Por eso el valor de 2,679 mol se usa tal cual en el resto del ejercicio." }
          ],
          resultado: "2,68 mol de CO2"
        },
        {
          parte: "I-b)",
          pasos: [
            { paso: "n(CaO) = n(CO2) real = 2,679 mol.", porque: "Usamos la relacion 1:1 de la ecuacion, que indica que cada mol de CO2 viene acompanado de un mol de CaO. Por eso los moles de CaO son los 2,679 mol de CO2 ya calculados. Usamos el valor real y no uno teorico, porque el rendimiento ya esta incorporado en la medicion del gas." },
            { paso: "M(CaO) = 56,08 g/mol → m = 2,679 mol × 56,08 g/mol = 150,2 g.", porque: "Para pasar moles a gramos multiplicamos por la masa molar, porque esa magnitud indica cuantos gramos tiene un mol de la sustancia. Con 2,679 mol y 56,08 g/mol, la masa de cal es 150,2 g. Las unidades se cancelan (mol x g/mol = g), y ese resultado es la respuesta del punto b)." }
          ],
          resultado: "150,2 g de CaO (cal)"
        },
        {
          parte: "I-c)",
          pasos: [
            { paso: "El 85 % es el rendimiento sobre el CaCO3 inicial: n0 = 2,679 / 0,85 = 3,151 mol de CaCO3 en la muestra.", porque: "Calculamos el CaCO3 inicial dividiendo lo que reacciono por 0,85, porque el rendimiento es la fraccion del CaCO3 inicial que se descompuso. Con 2,679 mol convertidos y un rendimiento de 85 %, el total de partida es 3,151 mol. Dividir y no multiplicar da un valor mayor que el reaccionado, que es lo esperable." },
            { paso: "CaCO3 que no reaccionó = 0,15 × 3,151 = 0,4727 mol.", porque: "Como el 85 % reacciono, lo que queda sin reaccionar es el complemento, es decir el 15 %. Aplicamos ese 15 % al total inicial de 3,151 mol, porque el CaCO3 sobrante sale de la cantidad de partida. Con eso obtenemos 0,4727 mol de CaCO3 presentes en el solido final." },
            { paso: "m = 0,4727 mol × 100,09 g/mol = 47,3 g.", porque: "Para pasar esos moles a masa usamos m = n x M, porque la masa molar indica los gramos que tiene un mol de CaCO3. Con 0,4727 mol y 100,09 g/mol, la masa de CaCO3 en el solido es 47,3 g. Esa masa se usa despues en la verificacion de la mezcla solida." },
            { paso: "Chequeo: 240 g = 150,2 (CaO) + 47,3 (CaCO3) + 42,5 (arena), cierra.", porque: "Sumamos las masas de los componentes del solido final y lo comparamos con los 240 g medidos, porque la masa total del solido se conserva. Con 150,2 g de CaO, 47,3 g de CaCO3 y 42,5 g de arena, la suma da 240 g. Como la arena se obtuvo por diferencia, el chequeo confirma la coherencia entre pasos y no una verificacion independiente de la arena." },
            { paso: "Suposición: la arena no reacciona y el 85 % se aplica al CaCO3 inicial total.", porque: "Fijamos las hipotesis del calculo: la arena no reacciona y el 85 % se aplica al CaCO3 inicial total. Lo hacemos porque el enunciado no aclara sobre que masa se calcula el rendimiento. Explicitar estas suposiciones forma parte de la respuesta, porque otras suposiciones darian otro resultado." }
          ],
          resultado: "47,3 g de CaCO3 en el sólido"
        },
        {
          parte: "I-d)",
          pasos: [
            { paso: "La muestra original pierde solo el CO2: m(original) = 240 g + m(CO2) = 240 + 2,679 mol × 44,01 g/mol = 240 + 117,9 = 357,9 g.", porque: "Calculamos la masa de la muestra original sumando el solido que quedo y el CO2 que se escapo, porque al calentar solo se pierde el gas. Con M(CO2) = 44,01 g/mol, los 2,679 mol de CO2 dan 117,9 g, que sumamos a los 240 g. Asi se llega a 357,9 g, que es el denominador de la pureza." },
            { paso: "m(CaCO3 original) = 3,151 mol × 100,09 g/mol = 315,4 g.", porque: "Calculamos el CaCO3 que habia al inicio multiplicando el total de 3,151 mol por la masa molar, porque la pureza pregunta por la cantidad de CaCO3 en la muestra original. Con 100,09 g/mol obtenemos 315,4 g. Usar solo los 0,4727 mol que quedaron daria un valor parcial que no responde la pregunta." },
            { paso: "Pureza = 315,4 g / 357,9 g × 100 = 88,1 %.", porque: "Calculamos la pureza como la fraccion de masa de CaCO3 respecto de la masa total de la muestra original, y la expresamos en porcentaje multiplicando por 100. Dividimos 315,4 g entre 357,9 g y obtenemos 88,1 %. Como el valor es menor que 100 %, el resultado es coherente con una muestra impurificada con arena." }
          ],
          resultado: "88,1 % de CaCO3 en la muestra original"
        },
        {
          parte: "II)",
          pasos: [
            { paso: "CaO: Ca2+ y O2−, enlace iónico. Lewis: [Ca]2+ [:O:]2−. Es una red cristalina, no hay moléculas discretas; las interacciones son electrostáticas ion-ion, no fuerzas intermoleculares propiamente dichas.", porque: "Identificamos el enlace del CaO a partir de la combinacion de un metal (Ca) con un no metal (O), porque ese tipo de pares forma iones por transferencia de electrones. Como los iones se ordenan en una red cristalina, no hay moleculas discretas. Por eso las interacciones son electrostaticas ion-ion y las fuerzas intermoleculares no aplican en sentido estricto." },
            { paso: "CO2: O=C=O, lineal. Enlaces covalentes polares (diferencia de electronegatividad C-O ≈ 0,9), pero la molécula es apolar porque los momentos dipolares de los dos enlaces se cancelan.", porque: "Determinamos la polaridad de cada enlace por la diferencia de electronegatividad, porque la diferencia entre C y O (aprox. 0,9) indica que el enlace C=O es polar. Como la molecula es lineal, los dos dipolos son iguales y opuestos y se cancelan. Por eso el CO2 es apolar aunque sus enlaces sean polares." },
            { paso: "Fuerzas intermoleculares del CO2: solo dispersión de London.", porque: "Identificamos las fuerzas intermoleculares a partir de los dipolos permanentes y de la presencia de H unido a F, O o N, porque solo esas situaciones dan atracciones mas intensas que la dispersion. Como el CO2 es apolar y no tiene H, queda unicamente la dispersion de London. Entonces esa es la unica fuerza entre sus moleculas, y es debil." }
          ],
          resultado: "CaO: iónico, red cristalina. CO2: enlaces polares, molécula apolar, fuerzas de London"
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
            { paso: "Reacción: C2H5OH(l) + 3 O2(g) → 2 CO2(g) + 3 H2O(l). Se usa H2O(l) porque el dato es ΔHf del agua líquida.", porque: "Escribimos la reaccion de combustion completa del etanol y la balanceamos en C, H y O, porque los coeficientes determinan el calor por mol de etanol. Con el coeficiente 2 para el CO2 y 3 para el H2O, se necesitan 3 O2. Como el dato de ΔHf es del agua liquida, el H2O se escribe en estado liquido." },
            { paso: "ΔH° = Σ ΔHf(productos) − Σ ΔHf(reactivos) = [2(−393,5) + 3(−285,8)] − [−277] = −1644,4 + 277 = −1367,4 kJ/mol (ΔHf O2 = 0).", porque: "Calculamos ΔH de reaccion con la ley de Hess en forma de entalpias de formacion: sumamos los ΔHf de los productos y restamos los de los reactivos, cada uno multiplicado por su coeficiente. Con 2(-393,5) + 3(-285,8) = -1644,4 kJ para los productos y -277 kJ del etanol, el resultado es -1367,4 kJ/mol. Ese valor negativo indica una combustion exotermica." }
          ],
          resultado: "C2H5OH(l) + 3 O2(g) → 2 CO2(g) + 3 H2O(l)  ΔH° = −1367,4 kJ/mol"
        },
        {
          parte: "b)",
          pasos: [
            { paso: "Gases: reactivos 3 mol de O2, productos 2 mol de CO2 (los líquidos no cuentan). Δn = 2 − 3 = −1.", porque: "Para el trabajo de expansion solo contamos las especies gaseosas, porque los liquidos casi no cambian de volumen al reaccionar. Restamos los moles de gas de los reactivos a los de los productos: 2 mol de CO2 menos 3 mol de O2. Asi obtenemos Δn = -1, que es el valor que se usa en la formula del trabajo." },
            { paso: "Trabajo de expansión: W = −P·ΔV = −Δn·R·T = −(−1)(8,314 J/mol·K)(298,15 K) = +2478,9 J ≈ +2,48 kJ.", porque: "Usamos W = -P x ΔV y, para un gas ideal, esto equivale a -Δn x R x T. Sustituimos Δn = -1, R = 8,314 J/mol·K y T = 298,15 K, porque 25 °C corresponde a esa temperatura en kelvin. El producto da +2478,9 J, aprox. +2,48 kJ, y el signo positivo indica que el trabajo se hace sobre el sistema." },
            { paso: "Convención: W > 0 cuando el medio hace trabajo sobre el sistema. Acá el gas disminuye de volumen (se comprime), así que el sistema recibe trabajo.", porque: "Asignamos el signo segun la convencion termodinamica, que toma W positivo cuando el medio trabaja sobre el sistema. Como Δn es negativo, el gas disminuye de volumen y se comprime. Por eso el entorno le entrega trabajo al sistema y W resulta positivo; conviene confirmar que la catedra use esta convencion." }
          ],
          resultado: "W ≈ +2,48 kJ (positivo: el medio realiza trabajo sobre el sistema)"
        },
        {
          parte: "c)",
          pasos: [
            { paso: "Masa de etanol: 8 L × 0,789 kg/L = 6,312 kg = 6312 g.", porque: "Pasamos el volumen de etanol a masa con la densidad, porque la densidad relaciona masa y volumen. Con 8 L y 0,789 kg/L obtenemos 6,312 kg, es decir 6312 g. Ese paso de kg a g es necesario, porque la masa molar del etanol esta expresada en g/mol." },
            { paso: "n(etanol) = 6312 g / 46,07 g/mol = 137,0 mol.", porque: "Calculamos los moles de etanol con n = m / M, porque la masa molar permite pasar de gramos a cantidad de sustancia. Con 6312 g y 46,07 g/mol se obtienen 137,0 mol. Este valor, junto con la energia por mol del punto a), permite estimar la energia liberada." },
            { paso: "Energía liberada: 137,0 mol × 1367,4 kJ/mol = 1,873 × 10^5 kJ (≈ 187 350 kJ).", porque: "Multiplicamos los moles de etanol por la energia liberada por mol, porque la energia total es el numero de moles por la energia de cada mol. Usamos 1367,4 kJ/mol del punto a) y obtenemos 137,0 x 1367,4 kJ, es decir 1,873 x 10^5 kJ. Las unidades quedan en kJ, la misma unidad del dato de referencia." },
            { paso: "Mismo recorrido ⇒ misma energía. n(octano) = 187 350 kJ / 5471 kJ/mol = 34,25 mol.", porque: "Igualamos la energia del octano con la del etanol, porque el enunciado pide recorrer la misma distancia y suponemos que el auto necesita la misma energia. Dividimos 187 350 kJ por la ΔHc del octano, 5471 kJ/mol, para obtener los moles necesarios. Con eso se obtienen 34,25 mol de octano, que responde el punto c)." },
            { paso: "Suposiciones: el octano se quema a CO2 y H2O(l) con ΔHc dado; no hay pérdidas; el bioetanol es puro.", porque: "Explicitamos las hipotesis que hacen comparables los dos combustibles: combustion completa, ausencia de perdidas y bioetanol puro. Sin ellas no hay un punto de referencia claro, porque cambiarian las energias en juego. Por eso conviene escribirlas en el parcial, junto con el resultado de 34,25 mol de octano." }
          ],
          resultado: "≈ 34,2 mol de octano"
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
            { paso: "Expresiones: Kc = [SbCl3][Cl2] / [SbCl5]; Kp = p(SbCl3)·p(Cl2) / p(SbCl5).", porque: "Escribimos Kc y Kp como cocientes entre productos y reactivos, cada uno elevado a su coeficiente, porque esa es la forma de la constante de equilibrio. Como todas las especies son gaseosas, las dos expresiones incluyen SbCl3, Cl2 y SbCl5. Kc usa concentraciones molares y Kp usa presiones parciales, por eso no conviene mezclarlas." },
            { paso: "Equilibrio (moles): SbCl5 = 4 − 0,17 = 3,83; SbCl3 = 0,17; Cl2 = 0,17.", porque: "Planteamos la tabla de equilibrio: se descomponen x mol de SbCl5 y se forman x mol de SbCl3 y de Cl2, porque la estequiometria 1:1:1 fija esa relacion. Como el equilibrio tiene 0,17 mol de Cl2, los demas valores salen de restar 0,17 a los 4 mol iniciales. Asi quedan 3,83 mol de SbCl5 y 0,17 mol de SbCl3, cuya suma con el SbCl5 da 4 mol." },
            { paso: "Concentraciones (V = 3 L): [SbCl5] = 1,277 mol/L; [SbCl3] = [Cl2] = 0,05667 mol/L.", porque: "Dividimos cada cantidad de moles por el volumen del recipiente, porque Kc se escribe con concentraciones molares y no con moles. Como el volumen de 3 L es constante, la division es directa. Con eso se obtienen 1,277 mol/L de SbCl5 y 0,05667 mol/L de SbCl3 y de Cl2, que son los valores a reemplazar en Kc." },
            { paso: "Kc = (0,05667)² / 1,277 = 2,52 × 10⁻³ mol/L.", porque: "Reemplazamos las concentraciones de equilibrio en la expresion de Kc, porque la constante es el cociente de esos valores. Con (0,05667)^2 dividido por 1,277 se obtiene 2,52 x 10^-3 mol/L. Las unidades son mol/L porque Δn es distinto de cero, y conviene no redondear las cifras intermedias para no perder precision." },
            { paso: "T = 182 + 273,15 = 455,15 K. Δn(gas) = 2 − 1 = +1.", porque: "Pasamos la temperatura a kelvin y calculamos Δn, porque la relacion entre Kp y Kc necesita la temperatura absoluta y el cambio neto de moles gaseosos. Con 182 + 273,15 = 455,15 K y Δn = 2 - 1 = +1, ambos datos quedan listos. Dejar la temperatura en grados Celsius llevaria a un resultado incorrecto." },
            { paso: "Kp = Kc·(RT)^Δn = Kc·R·T = 2,515 × 10⁻³ × (0,08206 × 455,15) = 2,515 × 10⁻³ × 37,35 = 0,0939 atm.", porque: "Usamos la relacion Kp = Kc x (RT)^Δn, que surge de reemplazar p = c x R x T en la expresion de Kp. Con Δn = +1 queda Kp = Kc x R x T. Sustituyendo 2,515 x 10^-3 con R = 0,08206 L·atm/mol·K y T = 455,15 K se obtiene 0,0939 atm, una presion como corresponde." }
          ],
          resultado: "Kc ≈ 2,5 × 10⁻³ mol/L; Kp ≈ 0,094 atm"
        },
        {
          parte: "b)",
          pasos: [
            { paso: "Cada mol de Cl2 formado proviene de un mol de SbCl5 descompuesto: 0,17 mol.", porque: "Relacionamos el Cl2 formado con el SbCl5 descompuesto usando la estequiometria 1:1, porque cada mol de Cl2 proviene de un mol de SbCl5 que se descompuso. Asi, los 0,17 mol de Cl2 en equilibrio indican directamente la cantidad descompuesta. Ese valor es el que se usa para calcular el porcentaje de descomposicion." },
            { paso: "% descomposición = 0,17 / 4 × 100 = 4,25 %.", porque: "Calculamos el porcentaje dividiendo lo descompuesto por lo inicial y multiplicando por 100, porque el porcentaje de descomposicion es una fraccion de la cantidad de partida. Con 0,17 mol sobre los 4 mol iniciales se obtiene 4,25 %. Los 4 mol son los iniciales del enunciado y no el total del equilibrio, y el resultado es menor que 100 %." }
          ],
          resultado: "4,25 %"
        },
        {
          parte: "c)",
          pasos: [
            { paso: "Quitar Cl2 es quitar un producto: por Le Chatelier el equilibrio se desplaza hacia la derecha, formando más SbCl3 y Cl2.", porque: "Aplicamos Le Chatelier: al retirar un producto, el sistema se desplaza en el sentido que lo repone. Como se quita Cl2, el equilibrio se corre hacia la derecha y se forma mas SbCl3 y Cl2 a partir de SbCl5. Esto tambien se ve con Qc, porque al bajar la concentracion de Cl2 el cociente queda menor que Kc." },
            { paso: "Agregar Cl2 desplazaría el equilibrio hacia la izquierda (más SbCl5).", porque: "Agregar Cl2 aumenta la concentracion de un producto, y el sistema responde consumiendolo, asi que el equilibrio se corre hacia el SbCl5. Es el efecto contrario al del punto anterior, porque la respuesta de Le Chatelier siempre se opone al cambio aplicado. Por eso, para obtener mas SbCl3, conviene quitar Cl2 y no agregarlo." }
          ],
          resultado: "Conviene remover Cl2"
        },
        {
          parte: "d)",
          pasos: [
            { paso: "Con el dato del enunciado (ΔH < 0 para la reacción escrita en sentido directo), la reacción directa es exotérmica.", porque: "Tomamos el signo de ΔH que da el enunciado para saber si la reaccion directa es exotermica o endotermica, porque el sentido del calor depende de ese signo. Un ΔH negativo indica que la reaccion directa libera calor. Usamos el dato tal como figura porque es el que da el enunciado, aunque tiene una advertencia sobre su valor." },
            { paso: "Al disminuir la temperatura, el equilibrio se desplaza hacia el lado exotérmico, es decir hacia la formación de SbCl3 y Cl2.", porque: "Aplicamos Le Chatelier al factor temperatura: al bajar la temperatura, el equilibrio se desplaza hacia el lado que libera calor. Como el sentido directo es exotermico, la formacion de SbCl3 y Cl2 se favorece al enfriar. Por eso, con el dato del enunciado, la respuesta de d) es disminuir la temperatura." },
            { paso: "Si el signo real del ΔH fuera positivo, la respuesta se invierte (ver comentario del ejercicio).", porque: "Dejamos asentado que pasaria si el signo real de ΔH fuera positivo, porque el dato es dudoso y la respuesta depende de ese signo. Con ΔH > 0 el sentido directo absorbe calor y convendria aumentar la temperatura. Esta observacion sirve como control de consistencia del resultado obtenido." }
          ],
          resultado: "Conviene disminuir la temperatura (según el dato ΔH < 0)"
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
            { paso: "Punto triple (5,2 atm; −56,4 °C): único punto donde coexisten sólido, líquido y vapor en equilibrio.", porque: "Identificamos el punto triple como el unico lugar donde coexisten solido, liquido y vapor, porque es el punto de referencia para construir el diagrama. Sus coordenadas (5,2 atm; -56,4 °C) fijan la presion y la temperatura minimas para que exista liquido en equilibrio. Por eso conviene ubicarlo primero, porque ordena el resto del dibujo." },
            { paso: "Punto crítico (73 atm; 31,1 °C): por encima, no se distingue líquido de gas (fluido supercrítico).", porque: "Ubicamos el punto critico como el limite superior de la curva liquido-vapor, porque alli las fases liquida y gaseosa se vuelven indistinguibles. Con 73 atm y 31,1 °C, por encima de esos valores el CO2 es un fluido supercritico. Asi queda definido el extremo de la curva que une el punto triple con el critico." },
            { paso: "Sublimación a 1 atm: como 1 atm < 5,2 atm (presión del triple), el CO2 sólido pasa directo a gas a −78 °C; no existe líquido a presión atmosférica.", porque: "Comparamos la presion de 1 atm con la del punto triple, porque solo por encima de 5,2 atm puede existir liquido en equilibrio. Como 1 atm es menor, el CO2 solido pasa directamente a gas a -78 °C, es decir por sublimacion. Por eso no se dibuja liquido a presion atmosferica." },
            { paso: "Curva sólido-líquido: pendiente positiva (a 50 atm funde a −54 °C, por encima de −56,4 °C del triple). Curva líquido-vapor: une el triple con el crítico (a 50 atm hierve a 15 °C). Curva sólido-vapor: une el triple con el punto de sublimación.", porque: "Trazamos las curvas uniendo los pares de fases que coexisten, y la pendiente de la curva solido-liquido sale del dato de fusion a 50 atm. Como a 50 atm el CO2 funde a -54 °C, por encima de los -56,4 °C del triple, la curva sube hacia la derecha. Por eso la pendiente es positiva." },
            { paso: "Zonas: sólido (baja T y alta P), líquido (T intermedia, P > 5,2 atm), gas (baja P) y fluido supercrítico (por encima del crítico).", porque: "Asignamos cada region a la fase estable en esas condiciones, porque las curvas actuan como fronteras entre zonas. La zona solida esta a bajas temperaturas y altas presiones, la gaseosa a bajas presiones, y el fluido supercritico por encima del punto critico. Entonces cada curva debe separar exactamente dos zonas, lo que sirve de control del diagrama." }
          ],
          resultado: "Diagrama cualitativo con triple (5,2 atm; −56,4 °C), crítico (73 atm; 31,1 °C) y sublimación a 1 atm"
        },
        {
          parte: "b)(i)",
          pasos: [
            { paso: "Celda FCC: 8 vértices × 1/8 + 6 caras × 1/2 = 1 + 3 = 4 átomos por celda.", porque: "Contamos los atomos que pertenecen a la celda, porque los atomos de los bordes se comparten entre varias celdas. Cada vertice aporta 1/8 porque se comparte entre 8 celdas, y cada cara aporta 1/2 porque se comparte con otra celda. Con 8 x 1/8 + 6 x 1/2 se obtienen 4 atomos, valor que se usa en la formula de la densidad." },
            { paso: "Esquema: cubo con átomos en los 8 vértices y en el centro de cada una de las 6 caras.", porque: "Dibujamos la celda cubica con atomos en los vertices y en el centro de cada una de las caras, porque el enunciado pide justificar el numero de atomos con un esquema. El dibujo permite ver cuales atomos estan compartidos y por que el conteo da 4. Verificamos que el esquema muestre las caras y no solo los vertices." }
          ],
          resultado: "4 átomos por celda"
        },
        {
          parte: "b)(ii)",
          pasos: [
            { paso: "ρ = z·M / (a³·N_A) → a³ = z·M / (ρ·N_A) = 4 × 107,87 g/mol / (10,49 g/cm³ × 6,022 × 10²³ mol⁻¹) = 6,83 × 10⁻²³ cm³.", porque: "Despejamos la arista de la formula de densidad: ρ = z x M / (a^3 x N_A), entonces a^3 = z x M / (ρ x N_A). Sustituimos z = 4, M = 107,87 g/mol, ρ = 10,49 g/cm^3 y N_A = 6,022 x 10^23 mol^-1. El resultado es 6,83 x 10^-23 cm^3, y conviene verificar que las unidades queden en cm^3." },
            { paso: "a = (6,83 × 10⁻²³)^(1/3) cm = 4,09 × 10⁻⁸ cm = 4,09 Å (409 pm).", porque: "Obtenemos la arista tomando la raiz cubica del volumen de la celda, porque el volumen de un cubo es a^3. Con 6,83 x 10^-23 cm^3 la raiz cubica da 4,09 x 10^-8 cm. Luego lo pasamos a angstrom y picometros, que son las unidades que pide el punto, y el valor final es 409 pm." },
            { paso: "Chequeo: en FCC a = 2√2·r; con r(Ag) ≈ 144 pm sale ≈ 407 pm, consistente.", porque: "Verificamos el resultado con la relacion geometrica de la red FCC, donde los atomos de una cara se tocan a lo largo de la diagonal: a = 2 x raiz(2) x r. Con el radio aproximado de la plata, 144 pm, se obtiene una arista de aprox. 407 pm. Como ese valor es muy cercano a 409 pm, el resultado es consistente y sirve como control de orden de magnitud." }
          ],
          resultado: "a ≈ 4,09 × 10⁻⁸ cm (≈ 409 pm)"
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
            { paso: "Propano CH3–CH2–CH3: molécula apolar; fuerzas: solo dispersión de London.", porque: "Identificamos la fuerza intermolecular del propano a partir de su estructura, porque las fuerzas dependen de la polaridad y de los H unidos a F, O o N. Como el propano tiene solo C e H, con polaridad despreciable, queda unicamente la dispersion de London. Esta fuerza existe en todas las moleculas y se intensifica con el tamano." },
            { paso: "Propanona CH3–CO–CH3: polar (C=O); fuerzas: dipolo-dipolo y dispersión.", porque: "Analizamos la polaridad de la propanona, porque el grupo C=O tiene un dipolo fuerte. El oxigeno atrae mas electrones que el carbono, y los dos grupos CH3 no compensan ese dipolo, asi que la molecula tiene dipolo neto. Por eso sus fuerzas son dipolo-dipolo mas dispersion de London." },
            { paso: "Agua H–O–H: angular y polar; fuerzas: puentes de hidrógeno (además de dipolo-dipolo y dispersión).", porque: "Identificamos el puente de hidrogeno del agua, porque el H unido al O, muy electronegativo, forma la interaccion mas intensa entre moleculas. La geometria angular del H-O-H impide que los dipolos se anulen, asi que la molecula es polar. Entonces el agua combina puentes de hidrogeno con dipolo-dipolo y dispersion." },
            { paso: "Intensidad creciente: propano < propanona < agua.", porque: "Ordenamos las fuerzas de menor a mayor intensidad, porque la intensidad determina cuanto cuesta separar las moleculas. La dispersion de London es la mas debil, luego viene dipolo-dipolo y por ultimo el puente de hidrogeno. Por eso el orden queda propano < propanona < agua, y se usa despues para la presion de vapor." },
            { paso: "Polares: propanona y agua. El propano es apolar.", porque: "Determinamos la polaridad de cada molecula, porque una molecula es polar si sus dipolos de enlace no se cancelan. Eso depende de la diferencia de electronegatividad y de la geometria. Como en el agua y la propanona los dipolos no se anulan, son polares, mientras que el propano, sin dipolos apreciables, es apolar." }
          ],
          resultado: "Creciente: propano (London) < propanona (dipolo-dipolo) < agua (puentes H). Polares: propanona y agua"
        },
        {
          parte: "d)",
          pasos: [
            { paso: "Presión de vapor: presión que ejerce el vapor en equilibrio con su líquido a una temperatura dada.", porque: "Damos la definicion de presion de vapor, porque es la presion de saturacion del equilibrio liquido-vapor a una temperatura dada. Ese equilibrio se alcanza cuando las moleculas que pasan al vapor igualan a las que vuelven al liquido. Por eso la presion de vapor depende de la temperatura y de la sustancia." },
            { paso: "Cuanto más débiles las fuerzas intermoleculares, más moléculas escapan a la fase vapor y mayor es la presión de vapor (relación inversa).", porque: "Relacionamos la presion de vapor con la intensidad de las fuerzas intermoleculares, porque esas fuerzas retienen las moleculas en el liquido. Cuanto mas debiles son, mas moleculas escapan a la fase vapor y mayor es la presion de vapor. Entonces la relacion es inversa: a mas fuerza, menos presion de vapor." },
            { paso: "Orden creciente: agua < propanona < propano.", porque: "Ordenamos las sustancias con esa relacion inversa, porque el propano, con fuerzas mas debiles, tiene la presion de vapor mas alta. El agua, con puentes de hidrogeno, tiene la mas baja. Por eso el orden creciente es agua < propanona < propano, que es el opuesto al orden de intensidad del punto c)." }
          ],
          resultado: "Agua < propanona < propano"
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
            { paso: "Calentar el hielo de −15 °C a 0 °C: Q1 = m·c·ΔT = 18 g × 2,09 J/g·°C × 15 °C = 564 J = 0,564 kJ.", porque: "Calculamos el calor para subir la temperatura del hielo de -15 °C a 0 °C con Q = m x c x ΔT, porque en esta etapa el solido solo cambia de temperatura. Usamos 18 g, el calor especifico de 2,09 J/g °C y ΔT = 15 °C, lo que da 564 J. Luego pasamos el resultado a kJ, para poder sumarlo con las demas etapas." },
            { paso: "Fundir a 0 °C: n = 18 g / 18 g/mol = 1 mol → Q2 = 1 mol × 6,02 kJ/mol = 6,02 kJ.", porque: "Calculamos el calor de fusion con Q = n x ΔHfusion, porque durante el cambio de fase la temperatura se mantiene constante en 0 °C. Primero pasamos los 18 g a moles dividiendo por 18 g/mol, lo que da 1 mol de agua. Con 1 mol y 6,02 kJ/mol, el calor de fusion es 6,02 kJ y no depende de ΔT." },
            { paso: "Q total = 0,564 + 6,02 = 6,58 kJ.", porque: "Sumamos los calores de las etapas, porque la energia total es la suma de cada tramo del proceso. Como el sistema recorre calentamiento y fusion en secuencia, cada calor se suma una sola vez. Con 0,564 kJ y 6,02 kJ se obtiene 6,58 kJ, que responde el punto a)." },
            { paso: "Suposición: el hielo queda como agua a 0 °C (no se pide calentar el agua).", porque: "Fijamos que el proceso termina en agua a 0 °C, porque el enunciado solo pide derretir el hielo. Si se pidiera calentar el agua, habria que agregar el termino m x c del agua x ΔT. Es una hipotesis que delimita la respuesta, por eso conviene escribirla explicitamente." }
          ],
          resultado: "6,58 kJ"
        },
        {
          parte: "b)",
          pasos: [
            { paso: "Ecuación: C7H8(l) + 9 O2(g) → 7 CO2(g) + 4 H2O(l)  ΔHc = −3920 kJ/mol (el enunciado habla de calor suministrado, que es calor liberado por el combustible).", porque: "Escribimos la reaccion de combustion completa del tolueno y la balanceamos, porque los coeficientes determinan cuanto combustible hace falta por unidad de energia. Con 7 C y 8 H se producen 7 CO2 y 4 H2O, y el O2 se ajusta a 9 mol. El ΔH es negativo porque la combustion libera energia, y ese valor se usa en el paso siguiente." },
            { paso: "n(tolueno) = 6,58 kJ / 3920 kJ/mol = 1,68 × 10⁻³ mol.", porque: "Calculamos los moles de tolueno necesarios con n = Q / |ΔHc|, porque la energia por mol del combustible relaciona energia y cantidad de sustancia. Dividimos los 6,58 kJ necesarios por 3920 kJ/mol. Con eso obtenemos 1,68 x 10^-3 mol, y las unidades quedan en mol." },
            { paso: "m = 1,68 × 10⁻³ mol × 92,14 g/mol = 0,155 g.", porque: "Pasamos los moles de tolueno a masa con m = n x M, porque la masa molar permite convertir cantidad de sustancia en gramos. Con 1,68 x 10^-3 mol y M(C7H8) = 92,14 g/mol se obtiene 0,155 g. Es una masa pequena porque el tolueno libera mucha energia por mol, lo que responde el punto b)." },
            { paso: "Suposición: todo el calor de combustión llega al hielo, sin pérdidas.", porque: "Suponemos que toda la energia liberada por el tolueno llega al hielo, porque el enunciado no menciona perdidas. Asi se puede igualar el calor de combustion con el calor total que recibe el hielo. Si hubiera perdidas, harian falta mas gramos de combustible, por eso conviene aclararlo." }
          ],
          resultado: "0,155 g de tolueno (ecuación: C7H8(l) + 9 O2(g) → 7 CO2(g) + 4 H2O(l), ΔH = −3920 kJ/mol)"
        },
        {
          parte: "c)",
          pasos: [
            { paso: "La evaporación pasa de líquido a gas: el volumen aumenta (ΔV > 0).", porque: "Determinamos el signo del cambio de volumen, porque el trabajo depende de si el sistema se expande o se comprime. Un liquido que pasa a vapor ocupa un volumen mucho mayor, asi que ΔV es positivo. Por eso el sistema se expande." },
            { paso: "El sistema se expande contra la presión externa: realiza trabajo sobre el entorno. Con W = −P·ΔV, W < 0 (convención: W positivo si lo recibe el sistema).", porque: "Aplicamos W = -P x ΔV con la convencion de signos, porque el trabajo depende de la presion externa y del cambio de volumen. Como el sistema se expande contra el entorno, le entrega trabajo y W es negativo. Entonces el sistema realiza trabajo sobre el entorno, siguiendo la convencion adoptada." }
          ],
          resultado: "El sistema realiza trabajo sobre el entorno (W < 0)"
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
            { paso: "NaOH: n(OH⁻) = 2 L × 0,001 mol/L = 0,002 mol.", porque: "Calculamos los moles de OH^- aportados por el NaOH, porque esa base fuerte se disocia por completo y cada formula libera un OH^-. Multiplicamos el volumen de 2 L por la concentracion de 0,001 mol/L, lo que da 0,002 mol. Verificamos que las unidades de L y mol/L se cancelen para que el resultado quede en mol." },
            { paso: "Ba(OH)2: n(Ba(OH)2) = 4 L × 0,005 mol/L = 0,020 mol → n(OH⁻) = 0,040 mol (2 OH⁻ por fórmula).", porque: "Calculamos el OH^- que aporta el Ba(OH)2, porque cada formula libera 2 OH^- y los moles de OH^- son el doble de los de base. Con 4 L y 0,005 mol/L se obtienen 0,020 mol de Ba(OH)2. Por eso el OH^- del bario es 0,040 mol, un valor que no puede ignorarse al sumar." },
            { paso: "Total OH⁻ = 0,042 mol en 6 L → [OH⁻] = 7,0 × 10⁻³ mol/L.", porque: "Sumamos los OH^- de ambas soluciones y dividimos por el volumen total, porque al mezclar los moles se acumulan y el volumen final es la suma de los volumenes. Con 0,002 + 0,040 = 0,042 mol en 6 L se obtiene 7,0 x 10^-3 mol/L. Esa concentracion es la que se usa para calcular el pOH de la mezcla." },
            { paso: "pOH = −log(7,0 × 10⁻³) = 2,15 → pH = 14 − 2,15 = 11,85.", porque: "Calculamos el pOH con su definicion, porque es el negativo del logaritmo decimal de [OH^-], y luego el pH con pH + pOH = 14. Esa relacion es la que vincula ambas escalas en solucion acuosa. Como la base esta en exceso, el pH resulta mayor que 7, y el valor 11,85 es coherente con eso." }
          ],
          resultado: "pH ≈ 11,85"
        },
        {
          parte: "A) volumen de HCl",
          pasos: [
            { paso: "Neutralizar todo el OH⁻: n(H⁺) = n(OH⁻) = 0,042 mol.", porque: "Igualamos los moles de H^+ con los de OH^-, porque en la neutralizacion cada H^+ reacciona con un OH^- para formar agua. Por eso se neutraliza todo el OH^- de la mezcla final, sin importar de que base provenga. Con 0,042 mol de OH^- se necesitan 0,042 mol de H^+, y este paso conecta la base con el acido." },
            { paso: "V(HCl 0,1 M) = 0,042 mol / 0,1 mol/L = 0,42 L = 420 mL.", porque: "Calculamos el volumen de HCl con V = n / C, porque el volumen es la cantidad de moles dividida por la concentracion del acido. Con 0,042 mol y 0,1 mol/L se obtienen 0,42 L. Como el HCl aporta un H^+ por mol, los moles de H^+ son los mismos de HCl, y ese volumen pasa a 420 mL." },
            { paso: "Reacciones (una por base): NaOH + HCl → NaCl + H2O; Ba(OH)2 + 2 HCl → BaCl2 + 2 H2O.", porque: "Escribimos las reacciones de neutralizacion de cada base con el HCl, porque muestran la estequiometria de cada una. El NaOH reacciona en proporcion equimolar con el HCl, mientras que el Ba(OH)2 necesita 2 HCl por formula. Verificar esto confirma que el calculo de moles es consistente con la ecuacion quimica." },
            { paso: "Suposición: el enunciado dice 'sales', pero las reacciones de neutralización son de las bases; se escriben las de NaOH y Ba(OH)2.", porque: "Aclaramos como interpretamos la consigna, porque el enunciado habla de sales pero pide la reaccion de neutralizacion. Por eso escribimos las reacciones de cada base, y la sal es el producto que se forma en cada una. Escribir ambas cubre lo pedido, y es una suposicion de interpretacion que conviene explicitar." }
          ],
          resultado: "420 mL de HCl 0,1 M"
        },
        {
          parte: "B)(i)",
          pasos: [
            { paso: "CH3COOH(ac) + H2O(l) ⇌ CH3COO⁻(ac) + H3O⁺(ac).", porque: "Escribimos el equilibrio de disociacion del acido debil en agua, porque el acido cede H^+ solo de forma parcial. La doble flecha indica que el proceso es reversible y que coexisten reactivos y productos. Las especies que aparecen son el acido, el anion acetato y el ion hidronio." },
            { paso: "Ka = [CH3COO⁻][H3O⁺] / [CH3COOH] (el agua no aparece por ser solvente).", porque: "Escribimos la expresion de Ka con las concentraciones de equilibrio de productos sobre reactivos, porque Ka es el cociente de la disociacion. El agua no aparece porque es el solvente en gran exceso y su concentracion se toma como constante. Verificamos que los exponentes sean los coeficientes de la ecuacion." }
          ],
          resultado: "Ka = [CH3COO⁻][H3O⁺] / [CH3COOH]"
        },
        {
          parte: "B)(ii)",
          pasos: [
            { paso: "[H3O⁺] = 10^(−3,06) = 8,71 × 10⁻⁴ mol/L.", porque: "Calculamos [H3O^+] a partir del pH, porque pH = -log[H3O^+] y la relacion inversa es [H3O^+] = 10^(-pH). Con pH = 3,06 se obtiene 8,71 x 10^-4 mol/L. Conviene usar la funcion 10^x de la calculadora para no cometer errores de cuenta." },
            { paso: "Con α = 0,02: C = [H3O⁺] / α = 8,71 × 10⁻⁴ / 0,02 = 0,0436 mol/L (concentración analítica).", porque: "Despejamos la concentracion analitica C con [H3O^+] = C x α, porque en un acido debil el H^+ formado es la fraccion disociada de la concentracion total. Con α = 0,02, que corresponde al 2 % del enunciado, C = 8,71 x 10^-4 / 0,02 = 0,0436 mol/L. Error tipico: usar α como 2 en lugar de 0,02." },
            { paso: "Ka = C·α² / (1 − α) = 0,0436 × (0,02)² / 0,98 = 1,78 × 10⁻⁵.", porque: "Calculamos Ka con la expresion de Ostwald, porque las concentraciones de equilibrio se escriben en funcion de C y de α. Con [CH3COO^-] = [H3O^+] = C x α y [CH3COOH] = C x (1 - α), la expresion queda Ka = C x α^2 / (1 - α). Reemplazar 0,0436 mol/L y α = 0,02 da 1,78 x 10^-5." },
            { paso: "Chequeo: [H3O⁺]² / (C − [H3O⁺]) = (8,71 × 10⁻⁴)² / (0,0436 − 0,00087) = 1,78 × 10⁻⁵.", porque: "Verificamos la Ka con las concentraciones de equilibrio directamente, porque sirve como control independiente de la aproximacion con α. Usamos [H3O^+]^2 / (C - [H3O^+]) con 8,71 x 10^-4 y 0,0436 mol/L, y el resultado coincide con 1,78 x 10^-5. Por eso los calculos previos son consistentes." },
            { paso: "Consideraciones: [CH3COO⁻] = [H3O⁺] (se desprecia el OH⁻ y la autoionización del agua); α = 0,02 es el dato del enunciado; la solución es diluida y las actividades se toman como concentraciones.", porque: "Listamos las consideraciones del calculo, porque el enunciado pide indicarlas. Suponemos que el OH^- y la autoionizacion del agua son despreciables frente al H^+ del acido, y que α es el dato del enunciado. Ademas tomamos las actividades como concentraciones, porque la solucion es diluida. Estas hipotesis forman parte de la respuesta." }
          ],
          resultado: "Ka ≈ 1,8 × 10⁻⁵; C ≈ 0,0436 mol/L"
        },
        {
          parte: "B)(iii)",
          pasos: [
            { paso: "Reacción: CH3COOH + NaOH → CH3COONa + H2O.", porque: "Escribimos la reaccion de neutralizacion del acido debil con la base fuerte, porque en el punto de equivalencia reaccionan en proporcion equimolar. El producto es la sal acetato de sodio mas agua. Esa sal es la que determina el caracter del punto de equivalencia." },
            { paso: "En el punto de equivalencia queda acetato de sodio. El anión CH3COO⁻ es base débil y se hidroliza: CH3COO⁻ + H2O ⇌ CH3COOH + OH⁻, generando OH⁻.", porque: "Identificamos la especie que fija el pH en el punto de equivalencia: el anion acetato, que es una base debil. El acetato reacciona con el agua tomando H^+ y generando OH^-, en un proceso llamado hidrolisis. Por eso recordamos que el acetato es la base conjugada del acido acetico." },
            { paso: "Por eso el pH del punto de equivalencia es mayor que 7 (básico).", porque: "Concluimos el pH a partir de la hidrolisis, porque el OH^- liberado hace que la solucion sea basica. Como el OH^- producido supera al H^+ que queda, el pH es mayor que 7. Esto contradice la idea de que la neutralizacion siempre da pH 7, que solo vale para acido y base fuertes." }
          ],
          resultado: "pH > 7 (básico) en el punto de equivalencia"
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
            { paso: "Medio básico (hay KOH). Reducción: Cl2 + 2 e⁻ → 2 Cl⁻ (×5).", porque: "Identificamos el medio de reaccion para elegir como balancear, porque el KOH aporta OH^- y el balance se hace con OH^- y H2O en lugar de H^+. Luego escribimos la reduccion del Cl2, que gana electrones para dar Cl^-. Verificamos que el medio sea coherente con los reactivos." },
            { paso: "Oxidación: Cl2 + 12 OH⁻ → 2 ClO3⁻ + 6 H2O + 10 e⁻ (×1). Verificación: Cl 2 = 2, O 12 = 12, H 12 = 12, carga −12 = −12.", porque: "Escribimos la oxidacion del Cl2 a ClO3^- y la balanceamos con H2O y OH^-, porque el Cl2 se transforma en ClO3^- y pierde 10 e^- en total. Verificamos la carga: con 12 OH^- en el reactivo, los 2 ClO3^- y los 10 e^- del producto dan la misma carga. Ese chequeo evita errores de signo antes de sumar las semirreacciones." },
            { paso: "Sumando (×5 + ×1) y simplificando: 3 Cl2 + 6 OH⁻ → 5 Cl⁻ + ClO3⁻ + 3 H2O. Agregando 6 K⁺ a ambos lados: 3 Cl2 + 6 KOH → 5 KCl + KClO3 + 3 H2O.", porque: "Multiplicamos las semirreacciones para igualar los electrones intercambiados, porque la reduccion se multiplica por 5 y la oxidacion por 1, y ambas quedan con 10 e^-. Al sumarlas los electrones se cancelan, y luego agregamos K^+ a ambos lados para pasar a la forma molecular. Ese chequeo final confirma que la ecuacion esta balanceada." }
          ],
          resultado: "Balanceo confirmado"
        },
        {
          parte: "b)",
          pasos: [
            { paso: "Cloro puro: 45 g × 0,85 = 38,25 g; n(Cl2) = 38,25 / 70,90 = 0,540 mol.", porque: "Calculamos la masa de cloro puro multiplicando por la pureza, porque la pureza es la fraccion de masa que corresponde al cloro. Con 45 g y 0,85 se obtienen 38,25 g. Luego pasamos a moles dividiendo por M(Cl2) = 70,90 g/mol, lo que da 0,540 mol de Cl2." },
            { paso: "KOH: 2,8 g por 100 mL → 14,0 g en 500 mL; n(KOH) = 14,0 / 56,11 = 0,2495 mol.", porque: "Pasamos la concentracion de KOH a masa total, porque 2,8 % m/v significa 2,8 g por cada 100 mL. Como tenemos 500 mL, la masa es 14,0 g de KOH. Dividiendo por 56,11 g/mol se obtienen 0,2495 mol, que son los moles disponibles del reactivo." },
            { paso: "Relación 6 KOH : 3 Cl2 → 0,540 mol de Cl2 pediría 1,08 mol de KOH; hay solo 0,2495 mol. El KOH es el reactivo limitante.", porque: "Identificamos el reactivo limitante comparando lo que se necesita con lo que hay, porque la cantidad de producto queda limitada por el reactivo que se agota primero. Con la relacion 6 KOH : 3 Cl2, los 0,540 mol de Cl2 necesitan 1,08 mol de KOH, y solo hay 0,2495 mol. Por eso el KOH es el reactivo limitante y decide la cantidad de producto." },
            { paso: "n(KClO3) teórico = 0,2495 / 6 = 0,04159 mol; m teórica = 0,04159 × 122,55 g/mol = 5,097 g.", porque: "Calculamos la cantidad teorica de KClO3 a partir del reactivo limitante, porque la estequiometria relaciona 6 mol de KOH con el KClO3 que se forma. Dividimos 0,2495 mol por 6 y multiplicamos por M(KClO3) = 122,55 g/mol. Con eso obtenemos 5,097 g, que es la masa maxima posible segun la estequiometria." },
            { paso: "Con rendimiento 75 %: m = 0,75 × 5,097 g = 3,82 g.", porque: "Aplicamos el rendimiento multiplicando la masa teorica por 0,75, porque el rendimiento es la fraccion de la masa teorica que realmente se obtiene. Con 0,75 x 5,097 g se obtienen 3,82 g. Asi el valor real queda por debajo del teorico, como corresponde a una reaccion con perdidas." },
            { paso: "Suposición: las impurezas de ambos reactivos son inertes.", porque: "Fijamos la hipotesis de que las impurezas son inertes y no consumen reactivo, porque el enunciado no detalla cuales son. Por eso usamos solo la masa pura de cada reactivo en los calculos. Explicitar esta suposicion forma parte de la respuesta, porque cambia los moles disponibles." }
          ],
          resultado: "≈ 3,82 g de KClO3"
        },
        {
          parte: "c)",
          pasos: [
            { paso: "[KOH] = 28 g/L / 56,11 g/mol = 0,499 mol/L (KOH puro, impurezas inertes).", porque: "Calculamos la concentracion molar de KOH a partir del dato en g/L, porque la concentracion se obtiene dividiendo la masa por la masa molar. Con 28 g/L y M = 56,11 g/mol se obtiene 0,499 mol/L. Tratamos el KOH como puro, porque las impurezas son inertes y no aportan base." },
            { paso: "KOH es base fuerte: disociación total, [OH⁻] = 0,499 mol/L.", porque: "Identificamos al KOH como base fuerte y tomamos su disociacion total, porque una base fuerte libera todos sus OH^- en solucion. Como cada KOH aporta un OH^-, la concentracion de OH^- es igual a la de KOH. Por eso no hace falta usar constantes de equilibrio para este paso." },
            { paso: "pOH = −log(0,499) = 0,302 → pH = 14 − 0,302 = 13,70.", porque: "Calculamos el pOH con -log del valor de OH^-, y luego el pH con pH + pOH = 14, porque esa relacion vincula ambas escalas en solucion acuosa. Con pOH = 0,302 se obtiene pH = 13,70. Ese valor, bien por encima de 7, es coherente con una base fuerte concentrada." }
          ],
          resultado: "pH ≈ 13,70"
        },
        {
          parte: "d)",
          pasos: [
            { paso: "Cl2: Cl–Cl con 3 pares libres en cada Cl. Molécula apolar, gas a temperatura ambiente. Fuerzas intermoleculares: solo dispersión de London (débiles).", porque: "Escribimos la estructura de Lewis del Cl2 y determinamos que es apolar, porque es una molecula diatomica formada por dos atomos iguales y no tiene dipolo. Por eso la unica fuerza intermolecular es la dispersion de London, que es debil. Esa es la razon de que el Cl2 sea un gas a temperatura ambiente." },
            { paso: "KCl: enlace iónico K⁺ Cl⁻ en red cristalina. Interacciones electrostáticas ion-ion muy intensas; sólido no volátil (ebulle cerca de 1400 °C).", porque: "Identificamos el enlace del KCl como ionico y lo asociamos con la red cristalina, porque las atracciones entre iones de carga opuesta son muy intensas. Esto explica el punto de ebullicion alto, cerca de 1400 °C, y la presion de vapor baja. Por eso el KCl no es volatil a temperatura ambiente." },
            { paso: "Punto de ebullición creciente: Cl2 < KCl. Presión de vapor creciente: KCl < Cl2 (la del KCl es despreciable a temperatura ambiente).", porque: "Ordenamos por punto de ebullicion y presion de vapor, porque ambas dependen de la intensidad de las fuerzas intermoleculares en sentidos opuestos. A mayor fuerza, mayor punto de ebullicion y menor presion de vapor. Por eso el orden de ebullicion creciente (Cl2 < KCl) es el inverso del de presion de vapor creciente (KCl < Cl2)." }
          ],
          resultado: "Ebullición creciente: Cl2 < KCl. Presión de vapor creciente: KCl < Cl2"
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
            { paso: "Ecuación: C4H10O(l) + 6 O2(g) → 4 CO2(g) + 5 H2O(l). Verificación: O 1 + 12 = 13 = 8 + 5.", porque: "Escribimos la reaccion de combustion completa del 2-butanol y la balanceamos en C, H y luego O, porque los coeficientes fijan el calor liberado por mol. Con 4 CO2 y 5 H2O se necesitan 6 O2, y el oxigeno se verifica con 13 a cada lado. El agua se escribe liquida porque el dato es el poder calorifico superior." },
            { paso: "ΔHc = −638 kcal/mol × 4,184 kJ/kcal = −2669,4 kJ/mol.", porque: "Convertimos la energia de kcal a kJ con el factor 4,184 kJ por kcal, porque el resultado debe quedar en las mismas unidades que el calor pedido. Con 638 kcal/mol obtenemos -2669,4 kJ/mol. El signo negativo indica que la combustion libera energia." },
            { paso: "n(2-butanol) = 124 000 kJ / 2669,4 kJ/mol = 46,45 mol.", porque: "Calculamos cuantos moles de 2-butanol hay que quemar con n = Q / |ΔHc|, porque el calor pedido es la energia que debe liberar el combustible. Dividimos 124 000 kJ por 2669,4 kJ/mol, lo que da 46,45 mol. Es el mismo razonamiento que usamos antes para relacionar energia y moles." },
            { paso: "m puro = 46,45 mol × 74,12 g/mol = 3443 g = 3,44 kg.", porque: "Pasamos los moles de alcohol puro a masa con m = n x M, porque la masa molar convierte moles en gramos. Con 74,12 g/mol se obtienen 3443 g, es decir 3,44 kg. Dejamos el resultado en kg, como pide el enunciado, para poder aplicar la pureza en el paso siguiente." },
            { paso: "m impuro = 3,44 kg / 0,92 = 3,74 kg.", porque: "Corregimos por la pureza del 92 % para obtener la masa de combustible impuro, porque la muestra solo tiene 92 % de alcohol. La masa total es la del puro dividida por 0,92, no multiplicada. Entonces 3,74 kg es mayor que los 3,44 kg de alcohol puro, como corresponde a una muestra con inertes." }
          ],
          resultado: "≈ 3,74 kg de combustible impuro"
        },
        {
          parte: "b)",
          pasos: [
            { paso: "n = 1800 g / 74,12 g/mol = 24,29 mol → calor liberado = 24,29 × 2669,4 kJ = 64 830 kJ.", porque: "Calculamos el calor disponible con los 1,8 kg de alcohol puro, porque ese es el aporte energetico maximo para calentar el agua. Pasamos 1800 g a moles con M = 74,12 g/mol, lo que da 24,29 mol. Multiplicando por 2669,4 kJ/mol obtenemos 64 830 kJ." },
            { paso: "Calor por gramo de agua: (1) líquido 50 → 100 °C: 4,18 × 50 = 209 J/g; (2) vaporización a 100 °C: 40 626 J/mol / 18,015 g/mol = 2255 J/g; (3) vapor 100 → 110 °C: 2,03 × 10 = 20,3 J/g.", porque: "Separamos el calor por gramo en etapas, porque cada tramo tiene su propio cambio de temperatura o de fase. Para el liquido usamos c x ΔT con 4,18 J/g °C, para la vaporizacion el ΔHvap por gramo, y para el vapor su calor especifico de 2,03 J/g °C. Como los J/mol se pasan a J/g dividiendo por la masa molar, 40 626 J/mol / 18,015 g/mol da 2255 J/g." },
            { paso: "Total = 209 + 2255 + 20,3 = 2484 J/g = 2,484 kJ/g.", porque: "Sumamos las etapas para obtener el calor total por gramo, porque el agua debe atravesar todos los tramos en secuencia. Con 209 + 2255 + 20,3 = 2484 J/g se llega al valor por gramo. Verificamos que todos los terminos esten en J/g antes de sumar, para no mezclar unidades." },
            { paso: "m(agua) = 64 830 kJ / 2,484 kJ/g = 26 099 g ≈ 26,1 kg.", porque: "Calculamos la masa de agua dividiendo el calor disponible por el calor necesario por gramo, porque la energia del combustible se reparte entre todos los gramos de agua. Con 64 830 kJ y 2,484 kJ/g se obtienen 26 099 g, es decir 26,1 kg. Por eso la respuesta del punto b) es 26,1 kg de agua." },
            { paso: "Suposición: presión constante de 1 atm, sin pérdidas, el agua entra líquida a 50 °C.", porque: "Fijamos las hipotesis de presion de 1 atm, ausencia de perdidas y agua que entra liquida a 50 °C, porque el enunciado las da de forma implicita. La presion de 1 atm define la temperatura de ebullicion, y el estado liquido inicial define la primera etapa del calculo. Explicitar estas condiciones justifica el resultado." }
          ],
          resultado: "≈ 26,1 kg de agua"
        },
        {
          parte: "c)",
          pasos: [
            { paso: "n(2-butanol) = 14 000 g / 74,12 g/mol = 188,9 mol.", porque: "Convertimos la masa de 2-butanol de kg a g y calculamos los moles, porque la masa molar trabaja en g/mol. Con 14 000 g y M = 74,12 g/mol se obtienen 188,9 mol. Antes de seguir, verificamos que la conversion de unidades sea correcta." },
            { paso: "Ecuación: 1 mol de 2-butanol consume 6 mol de O2 → n(O2) = 6 × 188,9 = 1133 mol.", porque: "Usamos la estequiometria de la combustion para hallar el O2 necesario, porque cada mol de alcohol consume 6 mol de O2 segun la ecuacion del punto a). Multiplicamos 188,9 mol por 6 y obtenemos 1133 mol de O2. Este es el paso que pasa del combustible al oxigeno que hay que suministrar." },
            { paso: "Aire: el O2 es el 21 % V/V → n(aire) = 1133 / 0,21 = 5397 mol.", porque: "Calculamos los moles de aire a partir del O2, porque el aire tiene 21 % de O2 en volumen. En gases la fraccion en volumen coincide con la fraccion molar, asi que dividimos 1133 mol por 0,21. Con eso obtenemos 5397 mol de aire, y no debemos usar el O2 como si fuera el volumen total." },
            { paso: "V(CNPT) = 5397 mol × 22,4 L/mol = 120 893 L = 120,9 m³.", porque: "Pasamos los moles de aire a volumen con V = n x Vm, porque en CNPT un mol de gas ocupa 22,4 L. Con 5397 mol obtenemos 120 893 L, que equivalen a 120,9 m3 al convertir la unidad. Por eso el volumen de aire necesario es aprox. 120,9 m3, la respuesta del punto c)." }
          ],
          resultado: "≈ 120,9 m³ de aire (CNPT)"
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
            { paso: "Se descompone 30 % de 1 mol: 0,30 mol de N2O4.", porque: "Calculamos la cantidad de N2O4 que se descompone aplicando el porcentaje al mol inicial, porque el 30 % indica la fraccion del reactivo que reacciona. Con 1 mol inicial, se transforman 0,30 mol. Verificamos que el porcentaje se pase a fraccion, 0,30, antes de multiplicar." },
            { paso: "Equilibrio: N2O4 = 1 − 0,30 = 0,70 mol; NO2 = 2 × 0,30 = 0,60 mol.", porque: "Planteamos la tabla de equilibrio con la estequiometria de la ecuacion, porque cada mol de N2O4 que se descompone forma 2 mol de NO2. Entonces quedan 0,70 mol de N2O4 y se forman 0,60 mol de NO2. Verificamos el balance de atomos de N: 0,70 x 2 + 0,60 coincide con el total inicial." },
            { paso: "[N2O4] = 0,70 / 10 = 0,070 mol/L; [NO2] = 0,60 / 10 = 0,060 mol/L.", porque: "Calculamos la concentracion de cada gas dividiendo sus moles por el volumen del reactor, porque las constantes de equilibrio usan concentraciones molares. Con 10 L, el N2O4 queda en 0,070 mol/L y el NO2 en 0,060 mol/L. Usar moles directamente en Kc daria un valor incorrecto." },
            { paso: "Consideraciones: volumen constante (10 L), gases ideales, sistema cerrado, sin otros equilibrios.", porque: "Listamos las hipotesis del calculo, porque el enunciado pide indicarlas. Suponemos volumen constante, gases ideales, sistema cerrado y ausencia de otros equilibrios, lo que permite tratar la mezcla como un gas simple. Por eso conviene escribirlas explicitamente junto con los valores de concentracion." }
          ],
          resultado: "[N2O4] = 0,070 mol/L; [NO2] = 0,060 mol/L"
        },
        {
          parte: "b)",
          pasos: [
            { paso: "Kc = [NO2]² / [N2O4] = (0,060)² / 0,070 = 0,0514 mol/L.", porque: "Escribimos la expresion de Kc con los coeficientes como exponentes, porque Kc es el cociente de concentraciones de productos sobre reactivos. El NO2 aparece al cuadrado por su coeficiente y el N2O4 a la primera potencia. Reemplazando (0,060)^2 / 0,070 se obtiene 0,0514 mol/L." },
            { paso: "T = 56 + 273,15 = 329,15 K; Δn(gas) = 2 − 1 = +1.", porque: "Convertimos la temperatura a kelvin y calculamos Δn, porque la relacion entre Kp y Kc requiere la temperatura absoluta y el cambio neto de moles de gas. Con 56 + 273,15 = 329,15 K y Δn = 2 - 1 = +1, ambos datos quedan listos. Dejar la temperatura en grados Celsius llevaria a un error." },
            { paso: "Kp = Kc·(RT)^Δn = Kc·R·T = 0,0514 × (0,08206 × 329,15) = 0,0514 × 27,01 = 1,39 atm.", porque: "Calculamos Kp con Kp = Kc x (RT)^Δn, porque Kp y Kc se vinculan mediante la ley de los gases ideales. Con Δn = +1 queda Kp = Kc x R x T, y reemplazando 0,0514 con R = 0,08206 L·atm/mol·K y T = 329,15 K se obtiene 1,39 atm. El resultado esta en atm, la unidad de una presion." },
            { paso: "Chequeo: n(total) = 1,3 mol → P = 1,3 × 27,01 / 10 = 3,51 atm; x(NO2) = 0,4615 → P(NO2) = 1,62 atm; P(N2O4) = 1,89 atm; Kp = 1,62² / 1,89 = 1,39 atm.", porque: "Verificamos el resultado calculando Kp con presiones parciales, porque esa comprobacion independiente confirma que Kc y Kp son consistentes. Obtenemos 1,3 mol totales, fracciones molares y presiones parciales con p_i = x_i x P_total. Al reemplazar 1,62 atm y 1,89 atm en Kp se llega otra vez a 1,39 atm." }
          ],
          resultado: "Kc ≈ 5,1 × 10⁻² mol/L; Kp ≈ 1,39 atm; relación Kp = Kc·R·T"
        },
        {
          parte: "c)(i)",
          pasos: [
            { paso: "Disminuir el volumen aumenta la presión total.", porque: "Analizamos el efecto de la presion al disminuir el volumen, porque a temperatura constante la presion es inversamente proporcional al volumen (P = nRT/V). Por eso al reducir V la presion total aumenta. La constante de equilibrio no cambia con esto, pero la posicion del equilibrio si puede hacerlo." },
            { paso: "Por Le Chatelier el equilibrio se desplaza hacia el lado con menos moles de gas: 1 mol de N2O4 frente a 2 mol de NO2.", porque: "Aplicamos Le Chatelier a la presion: el equilibrio se desplaza hacia el lado con menos moles de gas, porque el sistema busca bajar la presion. Un mol de N2O4 frente a 2 mol de NO2 indica que el lado con menos moles es el de los reactivos. Por eso el equilibrio se corre hacia la izquierda, formando N2O4." }
          ],
          resultado: "Se desplaza hacia la izquierda (formación de N2O4)"
        },
        {
          parte: "c)(ii)",
          pasos: [
            { paso: "Si al subir T aumenta p(NO2), el equilibrio se desplaza hacia la derecha al calentar.", porque: "Interpretamos el dato del enunciado sobre la presion parcial de NO2 con la temperatura, porque indica como se mueve el equilibrio al calentar. Si la presion de NO2 sube al calentar, se forma mas NO2, es decir el equilibrio se corre a la derecha. Esta interpretacion es la base para decidir el signo de ΔH." },
            { paso: "Por Le Chatelier, al aumentar T el equilibrio se desplaza en el sentido que absorbe calor: el directo es endotérmico (ΔH > 0).", porque: "Aplicamos Le Chatelier al factor temperatura para determinar si el sentido directo es endotermico o exotermico, porque al calentar el sistema favorece el sentido que consume calor. Como el sentido directo se favorece al calentar, consume calor y por eso ΔH > 0. Entonces la reaccion es endotermica." }
          ],
          resultado: "Endotérmica (ΔH > 0)"
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
            { paso: "Medio ácido (H2SO4). Reducción: MnO2 + 4 H⁺ + 2 e⁻ → Mn²⁺ + 2 H2O.", porque: "Identificamos el medio de reaccion como acido, por el H2SO4, porque en medio acido el balance se ajusta con H^+ y H2O. Luego escribimos la reduccion del MnO2 a Mn^2+, que gana 2 e^- y consume 4 H^+. Verificamos que el medio coincida con el reactivo que aporta protones." },
            { paso: "Oxidación: 2 Cl⁻ → Cl2 + 2 e⁻.", porque: "Escribimos la oxidacion del Cl^- a Cl2, porque el Cl^- pierde electrones al formar Cl2. Cada ion cede un electron y la molecula de Cl2 se forma con 2 e^- cedidos. Esta semirreaccion es la complementaria de la reduccion del manganeso, asi que los electrones deben coincidir." },
            { paso: "Suma: MnO2 + 4 H⁺ + 2 Cl⁻ → Mn²⁺ + Cl2 + 2 H2O.", porque: "Sumamos las dos semirreacciones, porque ambas intercambian 2 e^- y los electrones se cancelan. Asi queda la ecuacion ionica neta: MnO2 con 4 H^+ y 2 Cl^- da Mn^2+, Cl2 y 2 H2O. Verificamos que atomos y cargas se mantengan iguales a ambos lados." },
            { paso: "Pasaje a molecular con los iones espectadores (Na⁺, SO4²⁻): MnO2(s) + 2 NaCl(ac) + 2 H2SO4(ac) → MnSO4(ac) + Cl2(g) + Na2SO4(ac) + 2 H2O(l). Chequeo: O 10 = 10, H 4 = 4, S 2 = 2, Na 2 = 2, Cl 2 = 2.", porque: "Pasamos a la ecuacion molecular agregando los iones espectadores Na^+ y SO4^2-, porque el enunciado pide la reaccion con las sustancias completas. Con 2 NaCl y 2 H2SO4 se recuperan los iones que faltaban. El chequeo de cada elemento confirma el balance, porque O, H, S, Na y Cl coinciden a ambos lados." },
            { paso: "Nombres: MnO2 dióxido de manganeso; NaCl cloruro de sodio; H2SO4 ácido sulfúrico; MnSO4 sulfato de manganeso(II); Cl2 cloro; Na2SO4 sulfato de sodio; H2O agua.", porque: "Nombramos cada sustancia con la nomenclatura usual, porque el enunciado pide los nombres de reactivos y productos. El manganeso del MnSO4 actua con un estado de oxidacion que se indica con el numero romano (II). Esa indicacion evita confundirlo con otros compuestos de manganeso." },
            { paso: "Oxidante: MnO2 (Mn pasa de +4 a +2, se reduce). Reductor: NaCl (Cl⁻ pasa de −1 a 0, se oxida).", porque: "Identificamos el oxidante y el reductor con los cambios de numero de oxidacion, porque el oxidante es la especie que se reduce y el reductor la que se oxida. El Mn baja de +4 a +2 en el MnO2, por lo que es el oxidante. El Cl pasa de -1 a 0 en el NaCl, por lo que es el reductor." }
          ],
          resultado: "MnO2(s) + 2 NaCl(ac) + 2 H2SO4(ac) → MnSO4(ac) + Cl2(g) + Na2SO4(ac) + 2 H2O(l); oxidante MnO2; reductor NaCl"
        },
        {
          parte: "b)",
          pasos: [
            { paso: "NaCl: unión iónica (Na⁺ y Cl⁻).", porque: "Clasificamos el enlace del NaCl como ionico, porque un metal (Na) y un no metal (Cl) con gran diferencia de electronegatividad forman iones por transferencia de electrones. Esos iones se mantienen unidos por atraccion electrostatica en una red cristalina. Por eso es el tipo de enlace que caracteriza a las sales." },
            { paso: "H2O: unión covalente polar (O–H, diferencia de electronegatividad ≈ 1,2).", porque: "Clasificamos el enlace del agua como covalente polar, porque O y H comparten electrones y la diferencia de electronegatividad hace que el enlace sea polar. La diferencia, aprox. 1,2, confirma esa polaridad. Entonces el enlace no es ionico, porque ambos elementos son no metales." },
            { paso: "Fe: unión metálica (electrones de valencia deslocalizados).", porque: "Clasificamos el enlace del Fe como metalico, porque entre atomos de metal los electrones de valencia se deslocalizan y forman un mar de electrones compartido. Esa movilidad explica la conductividad y la ductilidad de los metales. Por eso el enlace metalico no es ionico ni covalente." }
          ],
          resultado: "(i) iónica; (ii) covalente polar; (iii) metálica"
        },
        {
          parte: "c)",
          pasos: [
            { paso: "i) CH3Cl: molécula polar (C–Cl polar, no simétrica); tetraédrica en torno al C. Fuerza dominante: dipolo-dipolo.", porque: "Determinamos la fuerza dominante y la geometria de CH3Cl, porque la molecula tiene un enlace C-Cl polar y no es simetrica. La geometria tetraedrica alrededor del C, con el Cl como sustituyente, genera un dipolo neto. Como no hay H unido a F, O o N, no corresponde un puente de hidrogeno, y la fuerza dominante es dipolo-dipolo." },
            { paso: "ii) CH3CH2OCH2CH3 (éter dietílico): angular en torno al O (C–O–C), con momento dipolar pequeño. Fuerzas: dispersión de London y dipolo-dipolo; dominante: dispersión (dudoso, depende del criterio de la cátedra).", porque: "Analizamos el eter dietilico: la geometria angular en torno al O genera un dipolo pequeno, porque el oxigeno es mas electronegativo y el C-O-C no es lineal. Entre dispersion y dipolo-dipolo, la dispersion suele dominar en moleculas grandes sin H unido a O, N o F. Como el enunciado no fija el criterio, conviene justificar la eleccion de London." },
            { paso: "iii) NH3: piramidal trigonal, polar. Fuerza dominante: puentes de hidrógeno.", porque: "Identificamos la geometria piramidal del NH3 y su fuerza dominante, porque el H unido al N, muy electronegativo, permite puentes de hidrogeno. El par libre del N hace que la molecula sea piramidal y polar. Por eso la fuerza dominante es el puente de hidrogeno, y conviene verificar que el H este unido a N, O o F." }
          ],
          resultado: "i) dipolo-dipolo, tetraédrica; ii) London (dudoso), angular; iii) puentes de H, piramidal"
        },
        {
          parte: "d)",
          pasos: [
            { paso: "Masa de HCl necesaria: 500 g × 0,10 = 50 g.", porque: "Calculamos la masa de HCl a partir del porcentaje en masa, porque 10 % m/m indica la fraccion de masa de soluto en la solucion. Sobre 500 g de solucion, el soluto es el 10 % de esa masa, es decir 50 g. Verificamos que trabajemos con masas y no con volumenes." },
            { paso: "Masa de solución concentrada: 50 g / 0,35 = 142,9 g.", porque: "Calculamos la masa de solucion concentrada dividiendo el soluto por 0,35, porque el 35 % m/m indica que cada gramo de solucion lleva 0,35 g de soluto. Con 50 g de HCl se necesitan 142,9 g de solucion al 35 %. Dividir, y no multiplicar, es lo que da la masa mayor de la solucion concentrada." },
            { paso: "Volumen: 142,9 g / 1,18 g/mL = 121,1 mL.", porque: "Convertimos la masa de solucion concentrada en volumen con V = m / d, porque la densidad relaciona masa y volumen. Con 142,9 g y 1,18 g/mL se obtienen 121,1 mL. Ese es el volumen que se toma de la solucion concentrada para preparar la dilucion." },
            { paso: "Suposición: el dato es % m/m, por eso se trabaja en masas y la densidad pasa a volumen.", porque: "Fijamos la hipotesis de que el dato es % m/m, porque la base del porcentaje es la masa y no el volumen. Por eso trabajamos en masas y usamos la densidad solo al final para pasar la masa a volumen. Explicitarlo evita confundir el uso de la densidad." }
          ],
          resultado: "≈ 121 mL de HCl 35 % m/m"
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
            { paso: "Acetato puro: 13 g × 0,87 = 11,31 g; M(C4H8O2) = 88,11 g/mol → n = 0,1284 mol.", porque: "Calculamos la masa de acetato puro y sus moles, porque solo el 87 % de la muestra es acetato y el calor depende de los moles de acetato. Multiplicamos 13 g por 0,87 para obtener 11,31 g y los dividimos por M(C4H8O2) = 88,11 g/mol. Con eso se obtienen 0,1284 mol, y verificamos que la masa pura sea menor que la de la muestra." },
            { paso: "Calor liberado: 0,1284 mol × 548 kcal/mol = 70,34 kcal × 4,184 kJ/kcal = 294,3 kJ.", porque: "Calculamos el calor liberado multiplicando los moles de acetato por la energia por mol, porque la energia total es el producto de ambos. Usamos 548 kcal/mol y convertimos a kJ con 4,184 kJ/kcal, para que la unidad sea compatible con el calor que absorbe el agua. Con 0,1284 mol se obtienen 294,3 kJ." },
            { paso: "Calor por gramo de hielo: (1) hielo −14 → 0 °C: 2,09 × 14 = 29,3 J/g; (2) fusión: 6010 J/mol / 18,015 g/mol = 333,6 J/g; (3) agua 0 → 100 °C: 4,18 × 100 = 418 J/g; (4) vaporización: 40 626 J/mol / 18,015 g/mol = 2255 J/g; (5) vapor 100 → 110 °C: 2,03 × 10 = 20,3 J/g.", porque: "Sumamos las etapas por las que pasa el hielo, porque debe calentarse, fundirse, calentarse como agua, vaporizarse y calentarse como vapor. Cada etapa usa su propio calor especifico o su ΔH de cambio de fase. Usamos 6010 J/mol para la fusion, valor real del agua segun la correccion manuscrita, y no los 293 kJ/mol impresos, que darian un calor mucho mayor." },
            { paso: "Total = 3057 J/g = 3,057 kJ/g.", porque: "Sumamos el calor de todas las etapas para obtener el total por gramo, porque el proceso atraviesa cada etapa en secuencia. Con 29,3 + 333,6 + 418 + 2255 + 20,3 J/g se llega a 3057 J/g. Verificamos que todos los terminos esten en J/g antes de sumar, para no mezclar unidades." },
            { paso: "m(hielo) = 294,3 kJ / 3,057 kJ/g = 96,3 g.", porque: "Calculamos la masa de hielo dividiendo el calor disponible por el calor necesario por gramo, porque la energia de la combustion se reparte entre los gramos de hielo. Con 294,3 kJ y 3,057 kJ/g se obtienen 96,3 g. Verificamos que las unidades den gramos, como pide el punto." },
            { paso: "Suposición: el calor de combustión se transfiere todo al hielo, sin pérdidas; la presión es 1 atm.", porque: "Fijamos las hipotesis de que todo el calor llega al hielo sin perdidas y de presion de 1 atm, porque el enunciado no menciona perdidas y la presion define las temperaturas de cambio de fase. Explicitarlo justifica el uso del calor total de combustion. Si hubiera perdidas, los 96,3 g serian una cota superior." }
          ],
          resultado: "≈ 96,3 g de hielo"
        },
        {
          parte: "b)",
          pasos: [
            { paso: "Ecuación: C4H8O2(l) + 5 O2(g) → 4 CO2(g) + 4 H2O(l). Verificación: O 2 + 10 = 12 = 8 + 4.", porque: "Escribimos la reaccion de combustion completa del acetato de etilo y la balanceamos en C, H y luego O, porque los coeficientes fijan la energia por mol. Con 4 CO2 y 4 H2O se necesitan 5 O2, y el oxigeno se verifica con 12 a cada lado. El agua se escribe liquida para ser consistente con el dato de PCS." },
            { paso: "ΔH = −548 kcal/mol × 4,184 kJ/kcal = −2292,8 kJ/mol.", porque: "Convertimos el calor de kcal a kJ con el factor 4,184 kJ por kcal, porque el calor pedido esta en kJ. Con 548 kcal/mol se obtiene -2292,8 kJ/mol. El signo negativo indica que la combustion libera energia, y ese valor se usa en el calculo de moles." },
            { paso: "n = 86 kJ / 2292,8 kJ/mol = 0,03751 mol; m puro = 0,03751 × 88,11 = 3,30 g.", porque: "Calculamos los moles necesarios con n = Q / |ΔH|, porque la energia por mol relaciona energia y cantidad de sustancia. Dividimos 86 kJ por 2292,8 kJ/mol y obtenemos 0,03751 mol. Con M = 88,11 g/mol, la masa pura es 3,30 g, y los kJ se cancelan en la division." },
            { paso: "m de muestra = 3,30 g / 0,87 = 3,80 g.", porque: "Calculamos la masa de muestra impura dividiendo la masa pura por 0,87, porque la muestra contiene 87 % de acetato. Con 3,30 g de acetato puro, la muestra necesaria es 3,80 g, un valor mayor que el puro, como corresponde. Por eso la respuesta del punto b) es 3,80 g de muestra." }
          ],
          resultado: "3,80 g de muestra (3,30 g de acetato puro)"
        },
        {
          parte: "c)",
          pasos: [
            { paso: "PCS = calor de combustión con H2O líquida = 548 kcal/mol (suposición: el dato es ese).", porque: "Identificamos el PCS con el calor de combustion que incluye el agua condensada en los productos, porque el poder calorifico superior considera el agua en estado liquido. Tomamos el dato de 548 kcal/mol como ese valor, lo que supone que el enunciado lo da en esas condiciones. Conviene explicitar esta suposicion en la respuesta." },
            { paso: "PCI = PCS − n(H2O)·ΔHvap, con el agua en vapor. ΔHvap = 40,626 kJ/mol = 9,71 kcal/mol; n(H2O) = 4 mol.", porque: "Calculamos el PCI descontando la energia de vaporizacion del agua formada, porque el PCI supone el agua en estado vapor. Con n(H2O) = 4 mol segun la ecuacion del punto b) y ΔHvap = 40,626 kJ/mol = 9,71 kcal/mol, el descuento es 4 x 9,71 kcal. Verificamos que el ΔHvap este en kcal antes de restarlo del PCS." },
            { paso: "PCI = 548 − 4 × 9,71 = 548 − 38,84 = 509,2 kcal/mol.", porque: "Restamos el calor de vaporizacion al PCS en las mismas unidades, porque el PCI es el PCS menos la energia que se usa para vaporizar el agua. Con 548 - 38,84 = 509,2 kcal/mol obtenemos el PCI. Por eso el valor del PCI es menor que el del PCS, como debe ser." }
          ],
          resultado: "PCS ≈ 548 kcal/mol; PCI ≈ 509 kcal/mol"
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
            { paso: "Según los Ka impresos, de mayor a menor acidez: HF (6,8 × 10⁻⁴) > C6H5COOH (6,3 × 10⁻⁵) > HClO2 (3,0 × 10⁻⁹) > HCN (6,2 × 10⁻¹⁰).", porque: "Ordenamos la acidez comparando los Ka: un Ka mas grande indica un acido mas disociado y, por lo tanto, mas fuerte. Usamos los valores impresos del enunciado, porque son los datos disponibles. Con la correccion manuscrita de HClO2 el orden cambiaria, como se anota en el comentario." }
          ],
          resultado: "HF > C6H5COOH > HClO2 > HCN"
        },
        {
          parte: "a) pH",
          pasos: [
            { paso: "Balance de masa: [HCN] + [CN⁻] = 1,5 M.", porque: "Escribimos el balance de masa para el HCN, porque toda la concentracion analitica debe repartirse entre la forma protonada y la disociada. Asi, [HCN] + [CN^-] = 1,5 M. Este balance es el primer paso para plantear el equilibrio acido-base." },
            { paso: "Balance de carga: [H⁺] = [CN⁻] + [OH⁻] ≈ [CN⁻] (el OH⁻ es despreciable en medio ácido).", porque: "Escribimos el balance de carga, porque la neutralidad electrica iguala cargas positivas y negativas. El H^+ se iguala a CN^- mas OH^-, y en medio acido el OH^- es despreciable, asi que [H^+] es aproximadamente [CN^-]. Conviene justificar esa aproximacion, porque dejarla sin explicar es un error frecuente." },
            { paso: "Ka = [H⁺]² / (1,5 − [H⁺]) ≈ [H⁺]² / 1,5 → [H⁺] = √(6,2 × 10⁻¹⁰ × 1,5) = 3,05 × 10⁻⁵ mol/L.", porque: "Planteamos Ka con las concentraciones de equilibrio y la aproximamos, porque el HCN es debil y el termino C - [H^+] se aproxima por C. Con Ka = [H^+]^2 / C se obtiene [H^+] = raiz(6,2 x 10^-10 x 1,5) = 3,05 x 10^-5 mol/L. Esta aproximacion se verifica al final." },
            { paso: "pH = −log(3,05 × 10⁻⁵) = 4,52. Chequeo: [H⁺] ≪ 1,5, la aproximación vale.", porque: "Calculamos el pH como -log[H^+], porque es el negativo del logaritmo decimal de la concentracion de H^+. Con 3,05 x 10^-5 mol/L se obtiene pH = 4,52. Como [H^+] es mucho menor que 1,5 M, la aproximacion C - [H^+] = C es valida y el resultado queda confirmado." }
          ],
          resultado: "pH ≈ 4,52"
        },
        {
          parte: "b)",
          pasos: [
            { paso: "Ka = [C6H5COO⁻][H3O⁺] / [C6H5COOH] = 6,3 × 10⁻⁵ (dato).", porque: "Escribimos la expresion de Ka del acido benzoico con sus especies en equilibrio, porque la constante describe la disociacion del acido debil. El valor se toma del enunciado, 6,3 x 10^-5. Esta expresion es la base para plantear la ecuacion de segundo grado en α." },
            { paso: "Con C = 0,12 M: Ka = Cα² / (1 − α) → 0,12 α² + 6,3 × 10⁻⁵ α − 6,3 × 10⁻⁵ = 0.", porque: "Planteamos la ecuacion de Ka en funcion del grado de disociacion con C = 0,12 M, porque el denominador (1 - α) no puede despreciarse sin verificar. Al reordenar obtenemos la cuadratica 0,12 α^2 + 6,3 x 10^-5 α - 6,3 x 10^-5 = 0. Verificamos la aproximacion al final, porque aproximar sin comprobarlo puede dar un error." },
            { paso: "α = 5,436 × 10⁻³ / 0,24 = 0,02265 → 2,27 %.", porque: "Resolvemos la cuadratica con la formula resolvente y tomamos la raiz positiva, porque α es una fraccion y no puede ser negativa. Con 5,436 x 10^-3 / 0,24 se obtiene α = 0,02265. Multiplicando por 100 pasamos ese valor a 2,27 %." },
            { paso: "Aproximación α ≈ √(Ka/C) = √(5,25 × 10⁻⁴) = 0,0229 (2,29 %), coincide.", porque: "Calculamos la aproximacion α = raiz(Ka/C) como control, porque si α es pequeno el denominador (1 - α) se aproxima a 1 y la expresion se simplifica. Con raiz(5,25 x 10^-4) = 0,0229 se obtiene 2,29 %. Ese valor coincide con el 2,27 % del calculo exacto, lo que confirma el resultado." }
          ],
          resultado: "α ≈ 2,27 % (≈ 2,3 %)"
        },
        {
          parte: "c)(i)",
          pasos: [
            { paso: "Balance de presiones en el nivel de referencia: P_atm = P(H2) + P(vapor de agua a T) ± presión de la columna líquida (ρ·g·h).", porque: "Escribimos el balance de presiones en el nivel de referencia, porque la presion del gas en ese nivel debe igualar la atmosferica mas la de la columna de liquido. La presion del gas es la suma de la del H2 y la del vapor de agua a esa temperatura, por la ley de Dalton. Con esta expresion podemos despejar la presion del H2 y luego la masa de Mg." },
            { paso: "Suposición: el esquema del TP2 no está en la foto, por eso el signo de la columna no se puede fijar con seguridad.", porque: "Explicitamos la limitacion del esquema: el signo de la columna depende del montaje, que no se ve en la foto. Por eso la presion de la columna puede sumarse o restarse segun la disposicion, y la expresion queda como forma general. Conviene verificar el esquema del TP2 antes de fijar el signo." }
          ],
          resultado: "P_atm = P(H2) + P(H2O vapor) ± ρ·g·h (forma general, dudosa en el signo)"
        },
        {
          parte: "c)(ii)",
          pasos: [
            { paso: "La regla graduada mide las alturas (h) de las columnas de líquido.", porque: "Identificamos la funcion de la regla graduada: medir las alturas de las columnas de liquido, porque la altura es el dato que entra en la presion hidrostatica. Sin medir h no se puede calcular la presion de la columna. Por eso la altura debe medirse desde el nivel de referencia." },
            { paso: "La densidad del mercurio (13,6 g/mL) permite convertir una altura de Hg en presión (P = ρ·g·h) y compararla con la del agua.", porque: "Explicamos el uso de la densidad del mercurio, que permite convertir una altura de Hg en presion con P = ρ x g x h. Con ρ(Hg) = 13,6 g/mL, un valor tabulado y no dado en el enunciado, la presion de la columna de mercurio se puede comparar con la del agua. Esto sirve para la relacion de alturas del punto siguiente." }
          ],
          resultado: "Regla: medir alturas; densidad del Hg: pasar altura a presión"
        },
        {
          parte: "c)(iii)",
          pasos: [
            { paso: "Igualdad de presiones hidrostáticas: ρ(Hg)·h(Hg) = ρ(agua)·h(agua).", porque: "Igualamos las presiones hidrostaticas de las dos columnas, porque ambas equilibran la misma presion en el nivel de referencia. La presion hidrostatica es ρ x g x h, y el g se cancela al igualar. Verificamos que la igualdad sea entre presiones y no entre alturas." },
            { paso: "h(agua) = (ρ(Hg) / ρ(agua)) · h(Hg) = 13,6 · h(Hg).", porque: "Despejamos la altura del agua de la igualdad de presiones, porque la relacion entre alturas es la inversa de la relacion entre densidades. Con la densidad del agua en el denominador, la expresion queda h(agua) = 13,6 x h(Hg). Por eso la columna de agua es 13,6 veces mas alta que la de mercurio." }
          ],
          resultado: "h(agua) = 13,6 · h(Hg)"
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
