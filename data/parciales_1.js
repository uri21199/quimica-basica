window.PARCIALES = window.PARCIALES || [];

// ============================================================
// EXAMEN 1: 1er recuperatorio 14/06/2024 (WA0021)
// Grilla de correccion (puntaje por inciso): Ej1 a=8 b=12 c=10 (30 pts); Ej2 a=12 b=8 c=10 (30 pts); Ej3 a=10 b=10 c=8 d=12 (40 pts). Total 100. Aprueba con 60/100 y al menos 50% de ejercicios bien.
// Constantes del examen: R = 8,31 J/mol.K = 0,0821 L.atm/mol.K = 1,99 cal/mol.K
// ============================================================
window.PARCIALES.push({
  id: "1rec-2024-06-14",
  tipo: "1er recuperatorio",
  fecha: "14/06/2024",
  fuente: "parciales/IMG-20260331-WA0021.jpg",
  ejercicios: [
    {
      num: 1,
      temas: ["reacciones", "gases", "soluciones", "acidobase"],
      enunciado: "5,0 g de una mezcla de 20% en masa de carbonato de calcio y 80% en masa de hidrogenocarbonato de calcio se calientan fuertemente hasta la descomposicion total de ambos compuestos con un 90% de rendimiento. Las reacciones se dan segun las siguientes ecuaciones: Ca(HCO3)2(s) -> CaO(s) + 2 CO2(g) + H2O(l) ; CaCO3(s) -> CaO(s) + CO2(g). a) Calcule el volumen total de CO2(g) obtenido en ambas reacciones en CNPT. b) Si el oxido de calcio total obtenido en ambas reacciones se disuelve en 10 litros de agua para formar hidroxido de calcio, escriba la reaccion correspondiente al proceso y calcule la concentracion molar y el pH de la solucion resultante. c) Escriba la estructura de Lewis del oxido de calcio y del dioxido de carbono e indique cual de ellos es mas soluble en agua, justificando su respuesta en funcion de su estructura.",
      resolucion: [
        {
          parte: "a)",
          pasos: [
            { paso: "Masas molares: CaCO3 = 100 g/mol; Ca(HCO3)2 = 162 g/mol.", porque: "Se calculan sumando las masas atomicas de la formula (Ca 40, C 12, O 16, H 1); hacen falta para pasar gramos a moles." },
            { paso: "Masa de CaCO3 = 0,20 x 5,0 g = 1,00 g, es decir 0,0100 mol. Masa de Ca(HCO3)2 = 0,80 x 5,0 g = 4,00 g, es decir 0,02469 mol.", porque: "El porcentaje en masa es la masa de cada componente sobre la masa total de la mezcla, asi que cada masa sale de multiplicar 5,0 g por su fraccion; luego n = m/M." },
            { paso: "CO2 teorico: 0,0100 mol (del CaCO3) + 2 x 0,02469 mol (del Ca(HCO3)2, que libera 2 CO2) = 0,05938 mol.", porque: "Por la relacion molar de cada ecuacion balanceada: el CaCO3 libera 1 mol de CO2 y el Ca(HCO3)2 libera 2 mol, y el CO2 total es la suma de ambos aportes." },
            { paso: "Con 90% de rendimiento: n(CO2) = 0,90 x 0,05938 = 0,05344 mol.", porque: "El rendimiento es la fraccion del valor teorico que realmente se obtiene, n real = rendimiento x n teorico." },
            { paso: "Suposicion: el 90% se aplica al CO2 de cada reaccion. Volumen en CNPT: V = n x 22,4 L/mol = 1,20 L (con V = nRT/P a 273 K y 1 atm tambien da 1,20 L).", porque: "En CNPT (273 K y 1 atm) un mol de gas ideal ocupa 22,4 L, segun PV = nRT; aplicar el 90% a cada reaccion o al total da lo mismo porque es una suma." }
          ],
          resultado: "V(CO2) total = 1,20 L en CNPT"
        },
        {
          parte: "b)",
          pasos: [
            { paso: "CaO total = 0,90 x (0,0100 + 0,02469) mol = 0,03122 mol.", porque: "Por la relacion molar de las dos ecuaciones, cada CaCO3 y cada Ca(HCO3)2 producen 1 mol de CaO; se aplica el 90% de rendimiento." },
            { paso: "Reaccion: CaO(s) + H2O(l) -> Ca(OH)2(ac), relacion 1:1.", porque: "Un oxido metalico reacciona con agua para formar el hidroxido correspondiente; por la estequiometria 1:1 los moles de CaO son los de Ca(OH)2." },
            { paso: "Suposicion: el volumen de solucion es 10 L (se toma el agua como volumen final). [Ca(OH)2] = 0,03122 mol / 10 L = 3,12 x 10^-3 M.", porque: "La molaridad es moles de soluto sobre litros de solucion; el enunciado da 10 L de agua y no el volumen final, asi que se toma ese valor como aproximacion." },
            { paso: "[OH-] = 2 x [Ca(OH)2] = 6,24 x 10^-3 M (cada Ca(OH)2 libera 2 OH-).", porque: "El Ca(OH)2 es una base fuerte que se disocia totalmente en Ca2+ y 2 OH-, asi que la concentracion de OH- es el doble." },
            { paso: "pOH = -log(6,24 x 10^-3) = 2,20. pH = 14 - 2,20 = 11,80.", porque: "pOH = -log[OH-] por definicion, y pH + pOH = 14 a 25 C por el producto ionico del agua (Kw = 10^-14)." }
          ],
          resultado: "[Ca(OH)2] = 3,12 x 10^-3 M; pH = 11,80"
        },
        {
          parte: "c)",
          pasos: [
            { paso: "CaO: compuesto ionico, Ca2+ y O2-. Lewis: [Ca]2+ [:O:]2- (el O tiene 8 electrones alrededor).", porque: "El calcio (metal) cede 2 electrones al oxigeno (no metal), se forma un enlace ionico y cada ion queda con octeto." },
            { paso: "CO2: O=C=O, molecula lineal con dos dobles enlaces C=O y sin pares libres en el C.", porque: "El C tiene 4 electrones de valencia y cada O necesita 2 mas: compartiendo dos pares con cada O se completan los octetos sin pares libres en el C." },
            { paso: "El CO2 es apolar porque, por la geometria lineal, los dipolos de enlace se cancelan. El agua es polar, asi que el CO2 se disuelve poco.", porque: "La polaridad depende de la suma vectorial de los dipolos de enlace; y la regla semejante disuelve semejante predice poca solubilidad de una molecula apolar en agua." },
            { paso: "El CaO es ionico: en agua los iones se solvatan por interaccion ion-dipolo, y ademas reacciona formando Ca(OH)2.", porque: "Los compuestos ionicos se disuelven por solvatacion ion-dipolo, y el CaO reacciona con el agua (CaO + H2O -> Ca(OH)2), lo que aumenta su solubilidad aparente." }
          ],
          resultado: "El CaO es el mas soluble (en realidad reacciona con el agua); el CO2 es apolar y poco soluble"
        }
      ],
      errores_tipicos: [
        {
          error: "Tomar 1 mol de CO2 por mol de Ca(HCO3)2, olvidando que su descomposicion libera 2 CO2.",
          como_evitar: "Balancear cada reaccion antes de contar: el Ca(HCO3)2 aporta 2 mol de CO2 por mol y el CaCO3 aporta 1."
        },
        {
          error: "Aplicar mal el 90% de rendimiento, por ejemplo aplicarlo solo a una reaccion o no aplicarlo al volumen final.",
          como_evitar: "Calcular el CO2 teorico de cada reaccion, multiplicar cada uno por 0,90 y recien despues sumar."
        },
        {
          error: "En b) tomar [OH-] igual a [Ca(OH)2], olvidando que cada formula libera 2 OH-, y por eso el pH sale mal.",
          como_evitar: "Primero [OH-] = 2 x [Ca(OH)2], luego pOH = -log[OH-] y pH = 14 - pOH."
        }
      ]
    },
    {
      num: 2,
      temas: ["magnitudes", "nomenclatura", "termodinamica"],
      enunciado: "Se sabe que la combustion completa de un mol de combustible liquido que solo contiene C y H, produce 220 g de CO2 gaseoso y 108 g de H2O liquida. Se sabe ademas que la entalpia de combustion para dicho combustible es de -3537,06 kJ/mol. a) Con los datos de que dispone indique cual es la formula molecular del combustible propuesto e indique la formula desarrollada y el nombre de una posible sustancia que cumpla con la consigna del enunciado, justificando su razonamiento. b) Si se sabe ademas que ΔHºf CO2(g) = -393,5 kJ/mol y ΔHºf H2O(l) = -286,0 kJ/mol, calcule la entalpia de formacion para el combustible liquido propuesto. Justifique su respuesta. c) Calcule la variacion de energia interna para la combustion de 1 mol del combustible liquido a 25 C. Justifique su razonamiento.",
      resolucion: [
        {
          parte: "a)",
          pasos: [
            { paso: "n(CO2) = 220 g / 44 g/mol = 5 mol, es decir 5 C por mol de combustible.", porque: "Todo el carbono del combustible termina como CO2 (balance de C), y M(CO2) = 44 g/mol." },
            { paso: "n(H2O) = 108 g / 18 g/mol = 6 mol, es decir 12 H por mol de combustible.", porque: "Todo el hidrogeno termina como H2O (balance de H), cada H2O tiene 2 H, y M(H2O) = 18 g/mol." },
            { paso: "Formula molecular: C5H12 (combustion: C5H12 + 8 O2 -> 5 CO2 + 6 H2O).", porque: "Con 5 C y 12 H por mol sale C5H12; la ecuacion se verifica por balance de oxigeno: 8 O2 = 16 O, y 5 x 2 + 6 x 1 = 16." },
            { paso: "Isomeros de C5H12: el neopentano (2,2-dimetilpropano) hierve a 9,5 C, asi que es gas a 25 C y no sirve. Los liquidos a 25 C son el n-pentano y el 2-metilbutano (isopentano).", porque: "El enunciado pide un combustible liquido, y los isomeros tienen distinto punto de ebullicion: hay que descartar los que hierven por debajo de 25 C." },
            { paso: "Formula desarrollada del n-pentano: CH3-CH2-CH2-CH2-CH3. Posible sustancia: n-pentano.", porque: "Una cadena lineal de 5 C con 12 H cumple la formula molecular, y el n-pentano es liquido a 25 C (hierve a unos 36 C)." }
          ],
          resultado: "C5H12; por ejemplo n-pentano, CH3-CH2-CH2-CH2-CH3 (liquido a 25 C)"
        },
        {
          parte: "b)",
          pasos: [
            { paso: "Por ley de Hess: ΔHcomb = [5 x ΔHf(CO2) + 6 x ΔHf(H2O)] - ΔHf(C5H12).", porque: "La ley de Hess dice que la entalpia de reaccion es productos menos reactivos, cada uno pesado por su coeficiente; el O2 no aparece porque la entalpia de formacion de un elemento vale 0." },
            { paso: "5 x (-393,5) + 6 x (-286,0) = -1967,5 - 1716,0 = -3683,5 kJ.", porque: "Se aplica la suma pesada por los coeficientes de la ecuacion balanceada de combustion." },
            { paso: "-3537,06 = -3683,5 - ΔHf(C5H12), entonces ΔHf(C5H12) = -3683,5 + 3537,06 = -146,44 kJ/mol.", porque: "Se despeja la unica incognita de la expresion de Hess, pasando el termino de los productos al otro lado." }
          ],
          resultado: "ΔHf(C5H12, l) = -146,44 kJ/mol"
        },
        {
          parte: "c)",
          pasos: [
            { paso: "Reaccion: C5H12(l) + 8 O2(g) -> 5 CO2(g) + 6 H2O(l).", porque: "Es la combustion completa balanceada, necesaria para calcular el Δn de gases." },
            { paso: "Delta n de gases = 5 - 8 = -3 (el agua es liquida y no se cuenta).", porque: "Δn se define como moles de gas de los productos menos los de los reactivos; los liquidos no cuentan porque su volumen es despreciable frente al de los gases." },
            { paso: "ΔU = ΔH - Δn x R x T = -3537,06 - (-3)(8,31 x 10^-3 kJ/mol.K)(298 K) = -3537,06 + 7,43 = -3529,6 kJ/mol.", porque: "Para reacciones con gases ideales ΔH = ΔU + Δn RT; R va en kJ/mol.K porque las entalpias estan en kJ." },
            { paso: "Suposicion: se usa la combustion como proceso a presion constante (1 atm) con T = 298 K.", porque: "ΔH se mide a presion constante, y 25 C equivale a 298 K, que es la temperatura que fija el enunciado." }
          ],
          resultado: "ΔU = -3529,6 kJ/mol"
        }
      ],
      errores_tipicos: [
        {
          error: "Contar el H2O(l) como gas en Δn y obtener Δn = +3 (o cualquier valor distinto de -3), con lo que ΔU queda mal.",
          como_evitar: "Para Δn se cuentan solo los gases: Δn = 5 - 8 = -3, porque el agua es liquida."
        },
        {
          error: "Invertir la ley de Hess en b): sumar las ΔHf de reactivos o cambiar el signo de ΔHcomb, y dar una ΔHf con signo equivocado.",
          como_evitar: "ΔHcomb = sum(n x ΔHf productos) - sum(n x ΔHf reactivos), y el O2 vale 0 porque es un elemento."
        },
        {
          error: "En a) proponer el neopentano por tener la formula C5H12, sin revisar que es gaseoso a 25 C.",
          como_evitar: "Cuando piden un liquido, verificar el punto de ebullicion del isomero antes de elegirlo."
        }
      ]
    },
    {
      num: 3,
      temas: ["equilibrio", "termodinamica", "gases", "magnitudes"],
      enunciado: "Un metodo industrial para obtener combustible gaseoso emplea la reaccion entre el carbon y el vapor de agua: C(s) + H2O(g) <=> CO(g) + H2(g). En un ensayo a 800 C se determino que cuando las presiones parciales del monoxido de carbono y el hidrogeno son iguales a 6,151 atm y la del vapor de agua 2,649 atm, el sistema se halla en equilibrio. a) En un recipiente cerrado de 500 L se colocan 10 kg de carbon, 50 moles de vapor de agua y un reciclo de 10 moles de CO y 30 moles de H2. Si se mantiene la temperatura constante a 800 C, ¿se obtendra mas hidrogeno? Justifique el razonamiento utilizado. b) Se sabe que a la temperatura de trabajo ΔH°f(H2O(g)) = -241820 J/mol y ΔH°f(CO(g)) = -110500 J/mol. Explique en detalle como aplica el principio de Le Chatelier para decidir si conviene trabajar a alta o baja temperatura a los efectos de obtener mas combustible. c) Analice si un aumento de presion sobre el sistema reaccionante conduce o no a mas producto, empleando el principio de Le Chatelier, justificando su respuesta. d) Cuando en el reactor con carbon en exceso se colocan 55 moles de vapor de agua, al alcanzar el equilibrio se forman 37,6 moles de H2. Calcular los kilos de H2 que se obtienen por cada tonelada de vapor de agua si se trabaja alcanzando el 80% de la conversion de equilibrio en esas condiciones.",
      resolucion: [
        {
          parte: "a)",
          pasos: [
            { paso: "Constante de equilibrio (el carbon es solido y no entra en K): Kp = pCO x pH2 / pH2O = (6,151 x 6,151) / 2,649 = 14,28.", porque: "La constante de equilibrio se escribe con presiones parciales de las especies gaseosas; el carbon es solido puro y su actividad vale 1." },
            { paso: "Moles iniciales en 500 L y 800 C (1073 K): H2O = 50, CO = 10, H2 = 30. Factor RT/V = 0,0821 x 1073 / 500 = 0,1762 atm/mol.", porque: "La ecuacion de gas ideal PV = nRT da p = n RT/V, asi que a T y V fijas cada mol aporta el mismo factor; la temperatura en K es 800 + 273 = 1073." },
            { paso: "Presiones iniciales: pH2O = 8,81 atm; pCO = 1,76 atm; pH2 = 5,29 atm.", porque: "Se multiplica cada numero de moles por RT/V, que es la conversion de moles a presion parcial de un gas ideal." },
            { paso: "Cociente de reaccion: Q = (1,76 x 5,29) / 8,81 = 1,06, que es menor que Kp = 14,28.", porque: "Q tiene la misma forma que Kp pero con las presiones iniciales; compararlo con K indica hacia donde evoluciona el sistema." },
            { paso: "Como Q < K, el sistema evoluciona hacia la derecha: se forma mas CO y H2.", porque: "Por el criterio del cociente de reaccion, si Q < K la reaccion neta avanza hacia los productos hasta alcanzar el equilibrio." },
            { paso: "Suposicion: gases ideales y sistema cerrado a T constante.", porque: "Se usa PV = nRT para pasar moles a presiones, aproximacion razonable a 800 C y presiones de pocas atmosferas; a T constante K no cambia." }
          ],
          resultado: "Si, se obtendra mas hidrogeno (Q = 1,06 < Kp = 14,28)"
        },
        {
          parte: "b)",
          pasos: [
            { paso: "ΔH°r = [ΔH°f(CO) + ΔH°f(H2)] - [ΔH°f(H2O) + ΔH°f(C)] = -110500 - (-241820) = +131320 J/mol.", porque: "Ley de Hess: la entalpia de reaccion es la suma de las formaciones de los productos menos la de los reactivos; ΔH°f del C y del H2 valen 0 por ser elementos." },
            { paso: "La reaccion es endotermica (ΔH > 0). Si se sube la temperatura, el equilibrio se desplaza hacia el lado que absorbe calor, o sea hacia los productos.", porque: "Principio de Le Chatelier: al subir T el equilibrio se desplaza en el sentido que consume el calor agregado, que en una reaccion endotermica es el de los productos." },
            { paso: "Conviene trabajar a alta temperatura para producir mas CO e H2.", porque: "Como el desplazamiento a T alta favorece productos, la constante K crece con T en una reaccion endotermica (ecuacion de van't Hoff), y eso es lo que se busca." }
          ],
          resultado: "Conviene alta temperatura (reaccion endotermica, ΔH = +131,3 kJ/mol)"
        },
        {
          parte: "c)",
          pasos: [
            { paso: "Moles de gas: reactivos = 1 (H2O); productos = 2 (CO + H2).", porque: "Para aplicar Le Chatelier a la presion solo se cuentan especies gaseosas; el carbon solido no entra en el conteo." },
            { paso: "Si aumenta la presion, el equilibrio se desplaza hacia el lado con menos moles de gas, que son los reactivos.", porque: "Principio de Le Chatelier: un aumento de presion favorece el sentido que disminuye el numero de moles gaseosos, porque asi baja la presion." },
            { paso: "Por lo tanto el aumento de presion no favorece la formacion de producto.", porque: "Consecuencia directa del desplazamiento hacia reactivos, que reduce la cantidad de CO e H2 formada." }
          ],
          resultado: "No conduce a mas producto: el equilibrio se desplaza hacia los reactivos"
        },
        {
          parte: "d)",
          pasos: [
            { paso: "Conversion de equilibrio: X_eq = 37,6 / 55 = 0,6836.", porque: "La conversion es los moles de H2O que reaccionaron sobre los moles iniciales; por la relacion 1:1 entre H2O y H2, los moles de H2O consumidos son los 37,6 mol de H2 formados." },
            { paso: "Conversion de trabajo: X = 0,80 x 0,6836 = 0,5469, es decir se reaccionan 0,5469 x 55 = 30,08 mol de H2O y se forman 30,08 mol de H2.", porque: "El enunciado pide trabajar al 80% de la conversion de equilibrio, asi que se multiplica X_eq por 0,80." },
            { paso: "Por tonelada de vapor: 1 t = 10^6 g / 18 g/mol = 55 556 mol de H2O.", porque: "Se pasa la masa a moles con la masa molar del H2O (18 g/mol); 1 t = 10^6 g." },
            { paso: "mol de H2 = 0,5469 x 55 556 = 30 384 mol. Masa = 30 384 mol x 2 g/mol = 60 768 g.", porque: "Por la relacion 1:1 H2O:H2 y la conversion de trabajo, los moles de H2 son X por los moles de H2O; la masa se obtiene con M(H2)." },
            { paso: "Suposicion: se toma M(H2) = 2 g/mol. Con 2,016 g/mol el resultado sube a unos 61,3 kg.", porque: "Se usa 2 g/mol como aproximacion entera del H2; con el valor tabulado 2,016 g/mol la diferencia es de menos de 1%, y se informa como control." }
          ],
          resultado: "≈ 60,8 kg de H2 por tonelada de vapor de agua (≈61 kg)"
        }
      ],
      errores_tipicos: [
        {
          error: "Incluir el carbon (solido) en la expresion de Kp o en el cociente Q.",
          como_evitar: "Los solidos no entran en K ni en Q; Kp = pCO x pH2 / pH2O."
        },
        {
          error: "Comparar Q con K usando moles en lugar de presiones parciales, sin pasar a presion con p = nRT/V.",
          como_evitar: "Convertir cada mol a presion con RT/V (0,1762 atm/mol) antes de calcular Q."
        },
        {
          error: "En d) usar 37,6 mol como conversion directa, o usar el 80% sobre los moles y no sobre la conversion de equilibrio.",
          como_evitar: "Primero X_eq = 37,6/55; despues X = 0,80 x X_eq; y recien ahi pasar a kg por tonelada."
        }
      ]
    }
  ]
});

// ============================================================
// EXAMEN 2: 1er recuperatorio 13/06/2025 (WA0022)
// Grilla de correccion (puntaje por inciso): Ej1 a=8 b=10 c=12 (30 pts); Ej2 a=10 b=12 c=8 (30 pts); Ej3 a=10 b=10 c=8 d=12 (40 pts). Total 100.
// Constantes del examen: R = 8,31 J/mol.K = 0,0821 L.atm/mol.K = 1,99 cal/mol.K
// ============================================================
window.PARCIALES.push({
  id: "1rec-2025-06-13",
  tipo: "1er recuperatorio",
  fecha: "13/06/2025",
  fuente: "parciales/IMG-20260331-WA0022.jpg",
  ejercicios: [
    {
      num: 1,
      temas: ["reacciones", "gases", "uniones", "magnitudes"],
      enunciado: "En un reactor industrial que opera a temperatura y presion constantes de 900 C y 8 atm, se introducen 200 g de amoniaco y 100 moles de aire seco (21% O2 y 79% N2) y se lleva a cabo la reaccion: NH3(g) + O2(g) -> NO(g) + H2O(g). a) Calcular la masa de NO(g) producida si el rendimiento de la reaccion es del 85% respecto del valor teorico. b) Para la mezcla gaseosa final, calcular: (i) la fraccion molar de NO(g) y (ii) la presion parcial del NO(g). c) Comparando el amoniaco NH3 con el metano CH4: (i) Indicar las geometrias de las moleculas (nombrar y graficar) y las polaridades de las moleculas. (ii) ¿Cual de las sustancias presenta mayor punto de ebullicion? Justificar su respuesta.",
      resolucion: [
        {
          parte: "a)",
          pasos: [
            { paso: "Ecuacion balanceada: 4 NH3 + 5 O2 -> 4 NO + 6 H2O.", porque: "Se balancea por conservacion de atomos: N (4 = 4), H (12 = 12) y O (10 = 4 + 6); los coeficientes fijan todas las relaciones molares." },
            { paso: "n(NH3) = 200 g / 17 g/mol = 11,76 mol. n(O2) = 21 mol; n(N2) = 79 mol.", porque: "n = m/M con M(NH3) = 17 g/mol; el aire tiene 21% de O2 y 79% de N2 sobre 100 mol, asi que esas cantidades son directamente moles." },
            { paso: "Limitante: el NH3 necesita 11,76 x 5/4 = 14,7 mol de O2 y hay 21 mol, asi que el NH3 es el limitante.", porque: "El reactivo limitante es el que se agota primero: se compara cuantos moles de O2 exige el NH3 segun la relacion 5/4 con los que hay disponibles." },
            { paso: "Teorico: n(NO) = 11,76 mol. Real: 0,85 x 11,76 = 10,00 mol de NO.", porque: "Por la relacion 4 NH3 : 4 NO (1:1) el NO teorico es igual al NH3 consumido, y el rendimiento de 85% se aplica sobre ese valor teorico." },
            { paso: "m(NO) = 10,00 mol x 30 g/mol = 300 g.", porque: "m = n x M, con M(NO) = 14 + 16 = 30 g/mol." }
          ],
          resultado: "m(NO) = 300 g"
        },
        {
          parte: "b)",
          pasos: [
            { paso: "Extension de reaccion real: ξ = 10,00 / 4 = 2,50 mol.", porque: "La extension de reaccion relaciona los moles de cada especie con su coeficiente: n(NO) = 4 xi, asi que xi = n(NO)/4." },
            { paso: "NH3 final = 11,76 - 10,00 = 1,76 mol. O2 final = 21 - 5 x 2,50 = 8,50 mol. N2 = 79 mol. NO = 10,00 mol. H2O = 6 x 2,50 = 15,00 mol.", porque: "Balance de materia: n final = n inicial + coeficiente x xi (negativo para reactivos); el N2 no reacciona y queda igual." },
            { paso: "Total = 1,76 + 8,50 + 79 + 10,00 + 15,00 = 114,26 mol.", porque: "La fraccion molar necesita el total de moles gaseosos de la mezcla final, que es la suma de todas las especies (el H2O tambien es gas a 900 C)." },
            { paso: "(i) x(NO) = 10,00 / 114,26 = 0,0875.", porque: "Por definicion, la fraccion molar es n de la especie sobre n total." },
            { paso: "(ii) p(NO) = x(NO) x P_total = 0,0875 x 8 atm = 0,70 atm.", porque: "Ley de Dalton: la presion parcial de cada gas es su fraccion molar por la presion total de la mezcla." },
            { paso: "Suposicion: el rendimiento de 85% se aplica sobre el NH3 que reacciona, y la presion total se mantiene en 8 atm.", porque: "El enunciado fija P constante en 8 atm, y el rendimiento se toma sobre los moles que reaccionan para conservar la extension de reaccion calculada." }
          ],
          resultado: "(i) x(NO) = 0,0875; (ii) p(NO) = 0,70 atm"
        },
        {
          parte: "c)",
          pasos: [
            { paso: "NH3: piramidal trigonal (AX3E1, con un par libre en N). Molecula polar.", porque: "Segun VSEPR, 3 enlaces mas 1 par libre dan geometria piramidal; el par libre no esta compensado por simetria, asi que la molecula es polar." },
            { paso: "CH4: tetraedrica (AX4). Molecula apolar, porque los 4 dipolos C-H se cancelan por simetria.", porque: "Segun VSEPR, 4 pares de enlace sin pares libres dan un tetraedro simetrico, donde la suma vectorial de los dipolos C-H es nula." },
            { paso: "(ii) NH3 tiene puentes de hidrogeno entre sus moleculas. El CH4 solo tiene fuerzas de London.", porque: "Hay puentes de hidrogeno cuando el H esta unido a N, O o F y puede interactuar con un par libre de otra molecula; el CH4 no tiene H unido a esos elementos." },
            { paso: "Por lo tanto el NH3 tiene mayor punto de ebullicion (≈ -33 C frente a ≈ -162 C).", porque: "A mayor intensidad de las fuerzas intermoleculares se necesita mas energia para separar las moleculas, y los puentes de hidrogeno son mas intensos que las fuerzas de London." }
          ],
          resultado: "NH3: piramidal, polar; CH4: tetraedrica, apolar. Mayor punto de ebullicion: NH3 (puentes de hidrogeno)"
        }
      ],
      errores_tipicos: [
        {
          error: "No balancear la ecuacion y usar relacion 1:1 entre NH3 y O2 o NH3 y NO, lo que cambia el limitante.",
          como_evitar: "Balancear primero: 4 NH3 + 5 O2 -> 4 NO + 6 H2O, y usar esos coeficientes para todas las relaciones."
        },
        {
          error: "Decir que el CH4 es polar porque sus enlaces C-H son polares.",
          como_evitar: "La polaridad depende de la geometria: en el tetraedro los dipolos se cancelan. Compararlo con el NH3, que es piramidal."
        },
        {
          error: "Atribuir el mayor punto de ebullicion al CH4 por tener mayor masa molar, o ignorar los puentes de hidrogeno del NH3.",
          como_evitar: "Comparar primero el tipo de fuerza intermolecular: puentes de hidrogeno > London (aunque la masa molar sea parecida)."
        }
      ]
    },
    {
      num: 2,
      temas: ["termodinamica", "gases", "reacciones"],
      enunciado: "Se conocen los siguientes datos para dos sustancias usadas como combustible: Para la combustion de una cierta cantidad de metano se han utilizado 3000 L de aire medidos en CNPT (21% de O2 y 79% de N2) y se han liberado 2997 kcal. Por otro lado, se conoce tambien que el poder calorifico superior del etano es de 11,23 kcal/g de etano. Se pide: a) A partir de los datos proporcionados calcular las entalpias de combustion para ambos combustibles y escribir las reacciones termoquimicas correspondientes. b) Considerando que el dioxido de carbono es un gas de efecto invernadero (GEI), indicar cual combustible afecta mas al efecto invernadero por kcal producida. Justifique su respuesta. c) Calcular el volumen de aire en CNPT que se emplea para la combustion de un mol de etano.",
      resolucion: [
        {
          parte: "a)",
          pasos: [
            { paso: "Suposicion: el aire usado es estequiometrico (sin exceso), y el agua se toma liquida (poder calorifico superior).", porque: "El enunciado no indica exceso de aire, asi que se supone combustion estequiometrica; el poder calorifico superior corresponde a agua condensada, es decir liquida." },
            { paso: "O2 en el aire: 0,21 x 3000 L = 630 L = 28,1 mol de O2 (a 22,4 L/mol).", porque: "El aire tiene 21% de O2 en volumen, y en CNPT un mol de gas ocupa 22,4 L." },
            { paso: "CH4 + 2 O2 -> CO2 + 2 H2O: n(CH4) = 28,1 / 2 = 14,06 mol.", porque: "Por la estequiometria de la ecuacion balanceada, 1 mol de CH4 consume 2 mol de O2." },
            { paso: "ΔHc(CH4) = -2997 kcal / 14,06 mol = -213,1 kcal/mol (≈ -891,7 kJ/mol).", porque: "La entalpia de combustion es el calor liberado por mol de combustible, y el signo negativo indica que el proceso es exotermico; 1 kcal = 4,184 kJ." },
            { paso: "Etano: M = 30 g/mol. ΔHc = -11,23 kcal/g x 30 g/mol = -336,9 kcal/mol (≈ -1409,6 kJ/mol).", porque: "El dato esta dado por gramo; para pasarlo a por mol se multiplica por la masa molar del etano, C2H6 = 30 g/mol." },
            { paso: "Reacciones: CH4(g) + 2 O2(g) -> CO2(g) + 2 H2O(l), ΔH = -213,1 kcal/mol. C2H6(g) + 7/2 O2(g) -> 2 CO2(g) + 3 H2O(l), ΔH = -336,9 kcal/mol.", porque: "La forma termoquimica escribe la ecuacion balanceada con el ΔH correspondiente a un mol del combustible, con los coeficientes que balancean el O2." }
          ],
          resultado: "ΔHc(CH4) = -213,1 kcal/mol; ΔHc(C2H6) = -336,9 kcal/mol"
        },
        {
          parte: "b)",
          pasos: [
            { paso: "CH4: 1 mol de CO2 por 213,1 kcal, es decir 1/213,1 = 4,69 x 10^-3 mol de CO2 por kcal.", porque: "Como el CO2 es el gas de efecto invernadero, la comparacion se hace por unidad de energia liberada, que es lo que pide el enunciado." },
            { paso: "C2H6: 2 mol de CO2 por 336,9 kcal, es decir 2/336,9 = 5,94 x 10^-3 mol de CO2 por kcal.", porque: "Cada mol de etano produce 2 mol de CO2 segun la ecuacion balanceada." },
            { paso: "El etano emite mas CO2 por kcal (≈ 27% mas).", porque: "Se compara la relacion de CO2 por kcal: 5,94 / 4,69 - 1 ≈ 0,27." }
          ],
          resultado: "El etano afecta mas al efecto invernadero por kcal producida"
        },
        {
          parte: "c)",
          pasos: [
            { paso: "C2H6 + 7/2 O2 -> 2 CO2 + 3 H2O: se necesitan 3,5 mol de O2 por mol de etano.", porque: "Lo indica la ecuacion balanceada: 7/2 mol de O2 por mol de C2H6." },
            { paso: "Aire necesario: 3,5 mol de O2 / 0,21 = 16,67 mol de aire.", porque: "El aire tiene 21% de O2 en moles, asi que moles de aire = moles de O2 / 0,21." },
            { paso: "V(aire) = 16,67 mol x 22,4 L/mol = 373 L en CNPT.", porque: "En CNPT un mol de gas ocupa 22,4 L." }
          ],
          resultado: "V(aire) ≈ 373 L en CNPT"
        }
      ],
      errores_tipicos: [
        {
          error: "Tomar el volumen de aire como si fuera de O2 puro, sin multiplicar por 0,21 (o dividir por 0,21 en el lugar equivocado).",
          como_evitar: "Primero moles de O2 = 0,21 x moles de aire; para c) moles de aire = moles de O2 / 0,21."
        },
        {
          error: "Usar el poder calorifico en kcal/g como si fuera kcal/mol, olvidando multiplicar por la masa molar del etano (30 g/mol).",
          como_evitar: "Siempre pasar kcal/g a kcal/mol multiplicando por la masa molar antes de comparar."
        },
        {
          error: "En b) comparar por mol de combustible en vez de por kcal, o no tener en cuenta que el etano produce 2 CO2 por mol.",
          como_evitar: "Comparar mol de CO2 por kcal: CH4 1/213,1 frente a C2H6 2/336,9."
        }
      ]
    },
    {
      num: 3,
      temas: ["acidobase", "equilibrio", "soluciones"],
      enunciado: "El acido formico (HCOOH) es un acido que se usa en muchas industrias (como la del cuero y la farmaceutica) y se encuentra presente en algunos alimentos y en el veneno de las hormigas. Puede usarse como conservante y agente antibacteriano, siempre que el pH de la solucion sea igual o inferior a 3,5. Dato: pKa (acido formico) = 3,75. a) Escribir la ecuacion de disociacion del acido formico en agua y la expresion de la constante de acidez (Ka). b) Calcular la concentracion minima de acido formico necesaria para preparar una solucion que mantenga el pH en 3,5 o inferior. c) Determinar el porcentaje de ionizacion del acido en la solucion preparada. d) Si se desea sustituir el acido formico por acido clorhidrico (HCl), calcular la concentracion molar de HCl necesaria para obtener el mismo pH que la solucion con acido formico. Justificar su respuesta.",
      resolucion: [
        {
          parte: "a)",
          pasos: [
            { paso: "HCOOH(ac) + H2O(l) <=> HCOO-(ac) + H3O+(ac), o simplificado HCOOH <=> HCOO- + H+.", porque: "El acido formico es un acido debil monoprotico que cede H+ al agua; el agua aparece como solvente y su concentracion no se incluye en la constante." },
            { paso: "Ka = [H+][HCOO-] / [HCOOH].", porque: "Es la constante de acidez para el equilibrio de disociacion, escrita con las concentraciones de las especies en equilibrio." },
            { paso: "Ka = 10^-pKa = 10^-3,75 = 1,78 x 10^-4.", porque: "pKa = -log Ka por definicion, asi que Ka = 10^-pKa." }
          ],
          resultado: "Ka = 1,78 x 10^-4"
        },
        {
          parte: "b)",
          pasos: [
            { paso: "pH = 3,5 => [H+] = x = 10^-3,5 = 3,16 x 10^-4 M.", porque: "pH = -log[H+] por definicion, asi que [H+] = 10^-pH." },
            { paso: "Ka = x^2 / (C - x), entonces C = x + x^2 / Ka = 3,16 x 10^-4 + (3,16 x 10^-4)^2 / 1,78 x 10^-4 = 3,16 x 10^-4 + 5,62 x 10^-4.", porque: "Por el balance de materia, [HCOO-] = [H+] = x y [HCOOH] = C - x; reemplazando en Ka se despeja C, y la expresion es exacta." },
            { paso: "Suposicion: el acido es debil y se usa la expresion cuadratica completa (no se desprecia x).", porque: "x/C ≈ 36 % no es despreciable frente a C, asi que aproximar C ≈ x daria un error grande; por eso se usa la expresion completa." }
          ],
          resultado: "C minima = 8,8 x 10^-4 M"
        },
        {
          parte: "c)",
          pasos: [
            { paso: "% ionizacion = [H+] / C x 100 = 3,16 x 10^-4 / 8,79 x 10^-4 x 100.", porque: "El porcentaje de ionizacion es la fraccion del acido que se disocio, es decir [H+] (igual a lo ionizado) sobre la concentracion total C." },
            { paso: "Se toma [HCOO-] = [H+] (se desprecia la ionizacion del agua).", porque: "Por la estequiometria 1:1 del acido, cada H+ del acido corresponde a un HCOO-; el H+ del agua es despreciable frente a 3,16 x 10^-4 M." }
          ],
          resultado: "≈ 36,0 % de ionizacion"
        },
        {
          parte: "d)",
          pasos: [
            { paso: "Para tener el mismo pH (3,5) con HCl, que es un acido fuerte y se ioniza totalmente, [H+] = [HCl].", porque: "El HCl se disocia por completo, asi que cada mol de HCl da un mol de H+; el mismo pH implica la misma [H+]." },
            { paso: "[HCl] = 10^-3,5 = 3,16 x 10^-4 M.", porque: "Con [H+] = 10^-pH y disociacion total, la concentracion de HCl es igual a [H+]." },
            { paso: "Justificacion: no se usa Ka porque el HCl no tiene equilibrio de disociacion apreciable.", porque: "Un acido fuerte cede todo su H+, no hay equilibrio que describir con Ka, y por eso el calculo es directo." }
          ],
          resultado: "[HCl] = 3,16 x 10^-4 M"
        }
      ],
      errores_tipicos: [
        {
          error: "Usar pKa como si fuera Ka (Ka = 3,75) en lugar de Ka = 10^-pKa.",
          como_evitar: "Recordar que pKa = -log Ka, asi que Ka = 10^-pKa."
        },
        {
          error: "En b) tomar [H+] = C (disociacion total) en lugar de resolver con x^2/(C - x), y dar C = 3,16 x 10^-4 M.",
          como_evitar: "Como el acido es debil, C = [H+] + [H+]^2/Ka, que da 8,8 x 10^-4 M."
        },
        {
          error: "En d) tratar al HCl como acido debil y usar Ka, o calcular la concentracion con la formula del acido debil.",
          como_evitar: "HCl es fuerte: [HCl] = [H+] = 10^-pH directamente."
        }
      ]
    }
  ]
});

// ============================================================
// EXAMEN 3: fecha y tipo no visibles en la foto (WA0023)
// Tipo asumido: "parcial". Verificar contra el original.
// Ejercicio 2 (cereales): se toma el agua como liquida para el calculo del calor de calentamiento (cp = 4,18 J/g.C) y la masa de cereal humedo se estima con ese mismo cp (suposicion explicita). El 15% calienta, el 75% vaporiza, el 10% es perdida.
// ============================================================
window.PARCIALES.push({
  id: "parcial-sin-fecha-1",
  tipo: "parcial",
  fecha: "sin fecha",
  fuente: "parciales/IMG-20260331-WA0023.jpg",
  ejercicios: [
    {
      num: 1,
      temas: ["materia", "liquidos", "gases"],
      enunciado: "(a) Construir cualitativamente el diagrama de fases del CO2, indicando zonas y puntos caracteristicos, curvas de equilibrio, etc. DATOS: Punto triple: (5,2 atm, -56,4 C). Temperatura de ebullicion a 50 atm: 15 C. Temperatura de sublimacion normal: -78 C. Punto critico: (73 atm, 31,1 C). Temperatura de fusion a 50 atm: -54 C. (b) Explicar y justificar para el CO2: (i) ¿Cual es el estado de agregacion del CO2 a presion y temperatura ambientes? (ii) ¿Cual deberia ser la minima presion para que funda? (iii) El solido ¿flota sobre el liquido? ¿Por que? (iv) Describir los estados que atraviesa si el CO2 en estado solido a 50 atm y 70 C bajo cero se calienta aumentando gradualmente la temperatura hasta 30 C, manteniendo la presion.",
      resolucion: [
        {
          parte: "a)",
          pasos: [
            { paso: "Ejes: presion (eje vertical) y temperatura (eje horizontal).", porque: "Es la convencion del diagrama de fases P-T: la presion define en que estado queda la sustancia a cada temperatura." },
            { paso: "Punto triple (5,2 atm, -56,4 C): coexisten solido, liquido y vapor. Punto critico (73 atm, 31,1 C): por encima de el no hay distincion liquido-gas.", porque: "El punto triple es donde se encuentran las tres fases en equilibrio, y el punto critico es el extremo de la curva liquido-vapor, porque por encima de Tc no se distingue liquido de gas." },
            { paso: "Curva de sublimacion: une el punto triple con (1 atm, -78 C), separa solido y gas por debajo de 5,2 atm.", porque: "Sobre esta curva coexisten solido y vapor; termina en el punto triple porque por debajo de 5,2 atm no puede existir liquido." },
            { paso: "Curva de fusion: sube desde el punto triple con pendiente positiva, pasa por (50 atm, -54 C).", porque: "El dato de fusion a 50 atm fija un punto de la curva, y la pendiente positiva indica que el solido es mas denso que el liquido (ver b, iii)." },
            { paso: "Curva de vaporizacion: une el punto triple con el punto critico, pasa por (50 atm, 15 C).", porque: "Sobre esta curva coexisten liquido y vapor; el dato a 50 atm ubica un punto y el punto critico marca su final." },
            { paso: "Zonas: solido (alta presion, baja temperatura), liquido (entre fusion y vaporizacion), gas (baja presion), y zona supercritica (por encima del punto critico).", porque: "Cada zona es la fase estable para ese rango de P y T; la zona supercritica existe por encima de Pc y Tc, donde no hay distincion entre liquido y gas." }
          ],
          resultado: "Diagrama cualitativo con punto triple, punto critico, curvas de sublimacion, fusion y vaporizacion, y zonas solido, liquido, gas y supercritica"
        },
        {
          parte: "b)",
          pasos: [
            { paso: "(i) A 1 atm y 25 C la temperatura esta por encima de la de sublimacion (-78 C) y la presion esta por debajo de 5,2 atm: el CO2 es gas.", porque: "Se ubica (1 atm, 25 C) en el diagrama: esta por debajo de la presion del punto triple, donde no hay liquido, y por encima de la curva de sublimacion, donde la fase estable es el gas." },
            { paso: "(ii) Para que haya liquido la presion tiene que superar la del punto triple, 5,2 atm. Por debajo de ese valor el solido solo sublima.", porque: "La curva de fusion solo existe por encima de la presion del punto triple; por debajo de 5,2 atm el solido pasa directo a gas." },
            { paso: "(iii) La curva de fusion tiene pendiente positiva, lo que implica que el volumen aumenta al fundir (el liquido ocupa mas volumen que el solido). El solido es mas denso y se hunde. No flota, a diferencia del agua.", porque: "Por la ecuacion de Clapeyron, la pendiente de la curva de fusion es positiva cuando el liquido tiene mayor volumen que el solido; el agua hace lo contrario porque su curva de fusion tiene pendiente negativa." },
            { paso: "(iv) A presion constante de 50 atm: solido desde -70 C hasta -54 C; al llegar a -54 C funde (solido + liquido); liquido desde -54 C hasta 15 C; a 15 C hierve (liquido + vapor); luego vapor (gas) hasta 30 C. Como 30 C < 31,1 C y la presion es 50 atm, el estado final es vapor.", porque: "Se recorre el diagrama a presion constante cruzando primero la curva de fusion (-54 C) y despues la de vaporizacion (15 C); a 50 atm < 73 atm no se llega a la zona supercritica, y 30 C esta por debajo de Tc, asi que es vapor." }
          ],
          resultado: "(i) gas; (ii) minima presion 5,2 atm; (iii) no flota, el solido es mas denso; (iv) solido -> fusion a -54 C -> liquido -> ebullicion a 15 C -> vapor a 30 C"
        }
      ],
      errores_tipicos: [
        {
          error: "Decir que el CO2 es liquido a presion y temperatura ambientes, como el agua.",
          como_evitar: "Ubicar (1 atm, 25 C) en el diagrama: por debajo del punto triple (5,2 atm) no existe liquido, y a 1 atm el CO2 es gas."
        },
        {
          error: "Afirmar que el solido flota como el hielo.",
          como_evitar: "Interpretar la pendiente de la curva de fusion: positiva implica que el solido es mas denso que el liquido, asi que se hunde."
        },
        {
          error: "En (iv) saltar directamente de solido a gas, o no marcar el paso por la fusion (-54 C) y la ebullicion (15 C) a 50 atm.",
          como_evitar: "Recorrer el diagrama a presion constante: primero cruzar la curva de fusion y despues la de vaporizacion."
        }
      ]
    },
    {
      num: 2,
      temas: ["termodinamica", "magnitudes", "reacciones"],
      enunciado: "Cereales con 70% de humedad se deshidratan en un secadero industrial. El proceso permite eliminar el agua y conservar el sabor, la textura y los nutrientes de los cereales. Se utiliza como fuente de calor la combustion completa de metanol liquido (CH3OH) a 1 atmosfera y 25 C. Se pide: (a) Escribir la ecuacion termoquimica del combustible. (b) Calcular la entalpia, la variacion de energia interna, el calor y el trabajo cuando se queman 100 g de combustible. (c) Si inicialmente el cereal humedo esta a 25 C, ¿que masa de cereal seco a 100 C se obtendra cuando se le aplica el calor producido con la combustion de 100 g de combustible? Considerar que de la energia calorica producida por los 100 g de combustible, el 15% del calor transferido se requiere para calentar el cereal desde 25 C a 100 C, y que las perdidas de calor al ambiente son del 10% del calor transferido, que se pierde al abandonar el cereal como vapor a 100 C. DATOS: ΔH°f metanol = -238 kJ/mol; ΔH°f agua(l) = -285 kJ/mol; ΔH°f dioxido de carbono = -393 kJ/mol; ΔH vaporizacion agua = 40,626 kJ/mol; cp agua(l) = 4,18 J/g.C.",
      resolucion: [
        {
          parte: "a)",
          pasos: [
            { paso: "CH3OH(l) + 3/2 O2(g) -> CO2(g) + 2 H2O(l).", porque: "Combustion completa: el C del metanol va a CO2 y el H a H2O; el 3/2 de O2 balancea el oxigeno (1 + 3 = 2 + 2 O)." },
            { paso: "ΔHcomb = [ΔH°f(CO2) + 2 ΔH°f(H2O)] - ΔH°f(CH3OH) = [-393 + 2(-285)] - (-238) = -963 + 238 = -725 kJ/mol.", porque: "Ley de Hess: la entalpia de reaccion es la suma de las formaciones de los productos menos la de los reactivos, cada una con su coeficiente; el O2 vale 0 por ser un elemento." }
          ],
          resultado: "ΔHcomb = -725 kJ/mol"
        },
        {
          parte: "b)",
          pasos: [
            { paso: "n(CH3OH) = 100 g / 32 g/mol = 3,125 mol.", porque: "n = m/M con M(CH3OH) = 12 + 4 + 16 = 32 g/mol." },
            { paso: "ΔH (100 g) = 3,125 x (-725) = -2265,6 kJ. Este es el calor a presion constante: q = -2265,6 kJ (liberado).", porque: "La combustion ocurre a presion constante, y en ese caso el calor intercambiado es igual a ΔH; el signo negativo indica calor liberado por el sistema." },
            { paso: "Δn gas por mol de combustible = 1 - 1,5 = -0,5. Para 100 g: Δn = -0,5 x 3,125 = -1,5625 mol.", porque: "Δn cuenta solo gases: 1 mol de CO2 frente a 3/2 mol de O2; el agua es liquida y no se cuenta." },
            { paso: "Trabajo: w = -PΔV = -Δn RT = -(-1,5625)(8,31 x 10^-3 kJ/mol.K)(298 K) = +3,87 kJ (lo recibe el sistema por la contraccion de volumen).", porque: "Para gases ideales a P y T constantes, PΔV = Δn RT, y el trabajo de expansion es w = -PΔV; como Δn es negativo, el sistema recibe trabajo." },
            { paso: "ΔU = ΔH - Δn RT = -2265,6 - (-1,5625)(2,478) = -2261,7 kJ. Verificacion: q + w = -2265,6 + 3,87 = -2261,7 kJ.", porque: "Primera ley, ΔU = q + w, y ΔH = ΔU + PΔV, de donde ΔU = ΔH - Δn RT; la verificacion q + w confirma el resultado." }
          ],
          resultado: "ΔH = -2265,6 kJ; ΔU = -2261,7 kJ; q = -2265,6 kJ; w = +3,87 kJ"
        },
        {
          parte: "c)",
          pasos: [
            { paso: "Calor transferido al cereal: Q = 2265,6 kJ (suposicion: el calor de combustion es el calor transferido).", porque: "Los porcentajes del enunciado se aplican sobre el calor transferido; se supone que todo el calor de combustion llega al secadero, asi que Q = 2265,6 kJ." },
            { paso: "15% para calentar el cereal humedo de 25 a 100 C: 0,15 x 2265,6 kJ = 339,8 kJ = m x 4,18 J/g.C x 75 C, entonces m(humedo) = 339 840 J / 313,5 J/g = 1084 g. Suposicion: se usa el cp del agua como cp del cereal humedo, porque es el unico dato dado.", porque: "Calentamiento sin cambio de fase: q = m cp ΔT; se usa el cp del agua porque es el unico dato del enunciado, lo que supone que el cereal humedo se comporta como agua." },
            { paso: "75% para vaporizar agua: 0,75 x 2265,6 kJ = 1699,2 kJ. n(H2O evaporada) = 1699,2 / 40,626 = 41,82 mol = 752,8 g.", porque: "En la vaporizacion la temperatura no cambia y el calor es n x ΔHvap; luego se pasa de moles a gramos con M(H2O) = 18 g/mol." },
            { paso: "10% se pierde al ambiente (no interviene en el balance de masa).", porque: "Esa energia sale del sistema sin cambiar la masa de agua ni del cereal, asi que no aparece en el balance de masa." },
            { paso: "Masa de cereal seco = 1084 g - 752,8 g = 331 g. Control: 30% de 1084 g = 325 g, diferencia de 2% por redondeo y por la suposicion de cp.", porque: "Balance de masa: lo que queda es la masa humeda menos el agua evaporada. Suposicion a tener en cuenta: los 331 g incluyen unos 6 g de agua residual; la materia seca estricta son unos 325 g. Se informa 331 g como resultado del balance, con el control de 325 g." }
          ],
          resultado: "≈ 331 g de cereal seco (≈ 325 g si se usa directamente el 30% de humedad restante)"
        }
      ],
      errores_tipicos: [
        {
          error: "Calcular ΔU como ΔH + Δn RT (signo cambiado), o usar Δn con agua liquida como si fuera gas.",
          como_evitar: "ΔU = ΔH - Δn RT, con Δn solo de gases: 1 - 1,5 = -0,5 por mol de metanol."
        },
        {
          error: "Usar ΔHcomb = ΣΔHf(reactivos) - ΣΔHf(productos), o multiplicar por 2 solo el CO2 (olvidando el coeficiente 2 del agua).",
          como_evitar: "ΔHcomb = ΣΔHf(productos) - ΣΔHf(reactivos), con todos los coeficientes."
        },
        {
          error: "En c) invertir los porcentajes (15% para vaporizar, 75% para calentar), o aplicar el 15% a la masa en vez de a la energia.",
          como_evitar: "Primero plantear el balance de energia: calentamiento = m x cp x ΔT (15%), vaporizacion = n x ΔHvap (75%); recien despues hacer el balance de masa."
        }
      ]
    },
    {
      num: 3,
      temas: ["acidobase", "equilibrio", "soluciones"],
      enunciado: "Considerando los valores Ka de los acidos HCN, C6H5-COOH, HClO2 y HF, responda a las siguientes preguntas, justificando su respuesta en cada caso: (a) ¿Cual es el orden de mayor a menor acidez en agua? (b) A igual concentracion, ¿cual de ellos presenta una disolucion acuosa con menor pH? (c) Calcule el valor de pH para una disolucion de concentracion 0,1 M de acido HCN. Utilice balances de masa y carga. Verifique los desprecios realizados. (d) Utilizando el equilibrio de ionizacion en disolucion acuosa, ¿cuales son las bases conjugadas de los acidos considerados? Ordene las mismas de mayor a menor basicidad. DATOS: Ka HCN = 4,9 x 10^-10; Ka C6H5-COOH = 6,5 x 10^-5; Ka HClO2 = 1,0 x 10^-2; Ka HF = 3,5 x 10^-4.",
      resolucion: [
        {
          parte: "a)",
          pasos: [
            { paso: "A mayor Ka, mayor acidez: HClO2 (1,0 x 10^-2) > HF (3,5 x 10^-4) > C6H5COOH (6,5 x 10^-5) > HCN (4,9 x 10^-10).", porque: "Ka mide cuanto se ioniza un acido debil en equilibrio: cuanto mayor Ka, mayor concentracion de H+ y mas acido es." }
          ],
          resultado: "HClO2 > HF > C6H5COOH > HCN"
        },
        {
          parte: "b)",
          pasos: [
            { paso: "A igual concentracion, el acido con mayor Ka se ioniza mas y produce mas H+.", porque: "Con la misma C, la [H+] depende de Ka: a mayor Ka, mayor concentracion de H+ en el equilibrio." },
            { paso: "Por lo tanto el de menor pH es el HClO2.", porque: "pH = -log[H+]: mas H+ da menor pH, y el HClO2 tiene la Ka mayor de los cuatro." }
          ],
          resultado: "HClO2"
        },
        {
          parte: "c)",
          pasos: [
            { paso: "Balance de carga: [H+] = [CN-] + [OH-].", porque: "Electroneutralidad: la suma de cargas positivas (H+) debe igualar la de cargas negativas (CN- y OH-)." },
            { paso: "Balance de masa: C = 0,1 M = [HCN] + [CN-].", porque: "El cianuro total proviene del HCN disuelto, y se conserva el numero de moles de cianuro: lo que no se ioniza sigue como HCN." },
            { paso: "Ka = [H+][CN-] / [HCN]. Suposiciones: [H+] = [CN-] (se desprecia [OH-]) y [HCN] ≈ C = 0,1 M.", porque: "Es la expresion de equilibrio de la disociacion debil; se desprecia el OH- del agua y la disociacion (x) frente a C porque Ka es muy chica, lo que se verifica abajo." },
            { paso: "[H+]^2 = Ka x C = 4,9 x 10^-10 x 0,1 = 4,9 x 10^-11, entonces [H+] = 7,0 x 10^-6 M.", porque: "Con [H+] = [CN-] = x y [HCN] ≈ C, Ka = x^2 / C, asi que x = raiz(Ka x C)." },
            { paso: "pH = -log(7,0 x 10^-6) = 5,15.", porque: "pH = -log[H+] por definicion." },
            { paso: "Verificacion: [OH-] = Kw / [H+] = 1,4 x 10^-9 M, es despreciable frente a 7,0 x 10^-6 M. x / C = 7,0 x 10^-5, menor que 5%, asi que [HCN] ≈ 0,1 M es valido. Resolviendo sin aproximar, [H+] queda igual a 7,0 x 10^-6 M.", porque: "Se verifican los desprecios: [OH-] es unas 5000 veces menor que [H+], y la disociacion es 0,007 % de C, muy por debajo del criterio del 5 %." }
          ],
          resultado: "pH = 5,15"
        },
        {
          parte: "d)",
          pasos: [
            { paso: "Bases conjugadas: HCN -> CN-; C6H5COOH -> C6H5COO- (benzoato); HF -> F-; HClO2 -> ClO2- (clorito).", porque: "La base conjugada de un acido HA es A-, la especie que queda al quitarle un H+." },
            { paso: "Kb = Kw / Ka: CN- 2,0 x 10^-5; C6H5COO- 1,5 x 10^-10; F- 2,9 x 10^-11; ClO2- 1,0 x 10^-12.", porque: "Para un par acido-base conjugado, Ka x Kb = Kw = 1,0 x 10^-14 a 25 C, por lo que Kb = Kw / Ka." },
            { paso: "Mayor a menor basicidad: la base conjugada del acido mas debil es la mas fuerte.", porque: "Un acido debil (Ka chica) tiene base conjugada fuerte (Kb grande), porque Kb = Kw / Ka." }
          ],
          resultado: "CN- > C6H5COO- > F- > ClO2-"
        }
      ],
      errores_tipicos: [
        {
          error: "Tratar al HCN como acido fuerte (disociacion total) y dar pH = 1 en (c).",
          como_evitar: "Con Ka = 4,9 x 10^-10 la disociacion es minima: [H+] = raiz(Ka x C)."
        },
        {
          error: "En (d) ordenar las bases en el mismo orden que los acidos, olvidando que la base conjugada del acido mas debil es la mas fuerte.",
          como_evitar: "Calcular Kb = Kw/Ka y ordenar de mayor a menor Kb."
        },
        {
          error: "En (b) asociar el pH menor con el acido de menor Ka, o asumir que a igual concentracion todos dan el mismo pH.",
          como_evitar: "A igual concentracion, el mayor Ka (HClO2) produce mas H+ y el pH es menor."
        }
      ]
    }
  ]
});

// ============================================================
// EXAMEN 4: fecha y tipo no visibles en la foto (WA0024)
// Tipo asumido: "parcial". Verificar contra el original.
// Ejercicio 2 (xilenos): el volumen de gas se da para 1 mol de xileno (ecuacion de a). Por cada gramo: 179,2 L / 106 g = 1,69 L de CO2.
// ============================================================
window.PARCIALES.push({
  id: "parcial-sin-fecha-2",
  tipo: "parcial",
  fecha: "sin fecha",
  fuente: "parciales/IMG-20260331-WA0024.jpg",
  ejercicios: [
    {
      num: 1,
      temas: ["reacciones", "soluciones", "uniones"],
      enunciado: "El acido acetico reacciona con el carbonato de calcio para formar acetato de calcio, dioxido de carbono y agua segun la siguiente reaccion: 2 CH3COOH(ac) + CaCO3(s) -> Ca(CH3COO)2(ac) + CO2(g) + H2O(l). Si la reaccion conduce a la formacion de 6,66 moles de CO2, calcule: a) el volumen de solucion de acido acetico 95% m/m y densidad 1,05 g/mL que reacciono; b) si se utilizaron 850 g de CaCO3 de 81% de pureza, identifique el reactivo limitante y calcule los moles que no reaccionaron del reactivo en exceso; c) escriba la estructura de Lewis de ambos reactivos e indique cual tendra mayor punto de fusion. Justifique adecuadamente su respuesta.",
      resolucion: [
        {
          parte: "a)",
          pasos: [
            { paso: "Por estequiometria: n(CH3COOH) = 2 x 6,66 mol = 13,32 mol.", porque: "Por la ecuacion balanceada, 2 mol de acido producen 1 mol de CO2." },
            { paso: "m(CH3COOH puro) = 13,32 mol x 60 g/mol = 799,2 g.", porque: "m = n x M, con M(CH3COOH) = 2 x 12 + 4 x 1 + 2 x 16 = 60 g/mol." },
            { paso: "m(solucion) = 799,2 g / 0,95 = 841,3 g.", porque: "Por la definicion de % m/m (masa de soluto sobre masa de solucion), la masa de solucion es la del soluto dividida por 0,95." },
            { paso: "V(solucion) = 841,3 g / 1,05 g/mL = 801 mL = 0,801 L.", porque: "La densidad es d = m/V, asi que V = m/d." }
          ],
          resultado: "V(solucion) ≈ 801 mL (0,801 L)"
        },
        {
          parte: "b)",
          pasos: [
            { paso: "m(CaCO3 puro) = 850 g x 0,81 = 688,5 g. n = 688,5 / 100 = 6,885 mol.", porque: "La pureza indica la fraccion de CaCO3 real en la muestra; luego n = m/M con M(CaCO3) = 100 g/mol." },
            { paso: "Por estequiometria, 6,66 mol de CO2 requieren 6,66 mol de CaCO3 y 13,32 mol de acido.", porque: "Por la ecuacion balanceada, la relacion es 1:1 entre CaCO3 y CO2, y 2:1 entre acido y CO2." },
            { paso: "El acido es el limitante: se consume por completo (13,32 mol) y el CaCO3 disponible (6,885 mol) es mayor que lo que reacciona (6,66 mol).", porque: "Con 2 mol de acido por mol de CaCO3, los 6,885 mol de CaCO3 necesitarian 13,77 mol de acido, y solo hay 13,32; el acido se agota primero." },
            { paso: "Suposicion: el acido de la parte a) es todo el acido que reacciona, es decir se consume totalmente.", porque: "El enunciado fija 6,66 mol de CO2 como resultado de la reaccion, y eso determina el consumo de acido calculado en a)." },
            { paso: "CaCO3 sin reaccionar = 6,885 - 6,66 = 0,225 mol.", porque: "Balance de materia: lo que no reacciona es lo disponible menos lo consumido, y el consumo de CaCO3 es 1:1 con el CO2 formado." }
          ],
          resultado: "Limitante: acido acetico. Quedan sin reaccionar 0,225 mol de CaCO3 (reactivo en exceso)"
        },
        {
          parte: "c)",
          pasos: [
            { paso: "CH3COOH: H-C(H)(H)-C(=O)-O-H (C del grupo carboxilo con doble enlace a O y enlace simple a OH). Molecula covalente con puentes de hidrogeno entre moleculas.", porque: "El C del grupo carboxilo tiene 3 pares de enlace (uno doble a O y uno simple a O-H y al CH3); el H unido a O permite puentes de hidrogeno entre moleculas." },
            { paso: "CaCO3: compuesto ionico. Ca2+ y el ion carbonato [O=C(-O-)(-O-)]2-, con resonancia entre las tres formas de Lewis. Red ionica.", porque: "Un metal (Ca) con un anion poliatomico (CO3 2-) forma enlace ionico; la resonancia reparte la carga entre los tres oxigenos." },
            { paso: "Los compuestos ionicos tienen fuerzas electrostaticas mucho mas intensas que los puentes de hidrogeno, por eso el CaCO3 tiene el mayor punto de fusion (en la practica se descompone antes de fundir, a alta temperatura).", porque: "Las atracciones ion-ion en una red son mucho mas intensas que los puentes de hidrogeno, y por eso hace falta mucha mas energia para fundir el CaCO3 que el acido." }
          ],
          resultado: "El CaCO3 (ionico) tiene el mayor punto de fusion; el acido acetico (molecular, p.f. ≈ 17 C) tiene menor"
        }
      ],
      errores_tipicos: [
        {
          error: "Olvidar el coeficiente 2 del acido y usar 6,66 mol de CH3COOH en lugar de 13,32 mol.",
          como_evitar: "Antes de usar estequiometria, balancear: 2 mol de acido por cada mol de CO2 (y de CaCO3)."
        },
        {
          error: "En a) tomar 799,2 g como masa de solucion (sin dividir por 0,95) o usar la densidad como si fuera V = m x d.",
          como_evitar: "m(solucion) = m(puro)/0,95, y luego V = m(solucion)/d."
        },
        {
          error: "En b) decidir el limitante comparando los 850 g de CaCO3 con los moles de acido, o no descontar la pureza del 81%.",
          como_evitar: "Pasar todo a moles puros: 688,5 g = 6,885 mol de CaCO3 frente a 13,32 mol de acido."
        }
      ]
    },
    {
      num: 2,
      temas: ["termodinamica", "gases", "reacciones"],
      enunciado: "Los xilenos (C8H10) son hidrocarburos liquidos muy utilizados en la industria como disolventes organicos. Teniendo en cuenta que por cada gramo de xileno se desprendieron 43,0 kJ, calcular: a) el valor de la entalpia de combustion. A continuacion escriba la ecuacion termoquimica correspondiente; b) la entalpia estandar de formacion del xileno, utilizando la ley de Hess; c) el volumen que ocupa el gas producido en CNPT. Datos adicionales: ΔH°f CO2(g) = -393,5 kJ/mol; ΔH°f H2O(l) = -286,0 kJ/mol.",
      resolucion: [
        {
          parte: "a)",
          pasos: [
            { paso: "M(C8H10) = 8 x 12 + 10 x 1 = 106 g/mol.", porque: "Masa molar sumando las masas atomicas: C = 12 y H = 1." },
            { paso: "ΔHcomb = -43,0 kJ/g x 106 g/mol = -4558 kJ/mol.", porque: "El dato esta dado por gramo; para pasarlo a por mol se multiplica por la masa molar. El signo negativo indica calor liberado." },
            { paso: "Ecuacion: C8H10(l) + 21/2 O2(g) -> 8 CO2(g) + 5 H2O(l), ΔH = -4558 kJ/mol.", porque: "Balance: 8 C, 10 H (5 H2O) y 21 O (16 de CO2 + 5 de H2O) con 21/2 O2." }
          ],
          resultado: "ΔHcomb = -4558 kJ/mol"
        },
        {
          parte: "b)",
          pasos: [
            { paso: "Hess: ΔHcomb = [8 ΔHf(CO2) + 5 ΔHf(H2O)] - ΔHf(C8H10); ΔHf(O2) = 0.", porque: "Ley de Hess aplicada a productos menos reactivos; la entalpia de formacion de un elemento como el O2 vale 0." },
            { paso: "8 x (-393,5) + 5 x (-286,0) = -3148 - 1430 = -4578 kJ.", porque: "Cada entalpia de formacion se multiplica por su coeficiente estequiometrico." },
            { paso: "-4558 = -4578 - ΔHf(C8H10), entonces ΔHf(C8H10) = -4578 + 4558 = -20 kJ/mol.", porque: "Se despeja la unica incognita de la ecuacion de Hess." }
          ],
          resultado: "ΔHf(C8H10, l) = -20 kJ/mol"
        },
        {
          parte: "c)",
          pasos: [
            { paso: "Por la ecuacion, 1 mol de xileno produce 8 mol de CO2 (unico gas; el agua es liquida).", porque: "Lo fija la estequiometria de la combustion; solo los gases ocupan volumen apreciable en CNPT, y el agua es liquida." },
            { paso: "V = 8 mol x 22,4 L/mol = 179,2 L en CNPT.", porque: "En CNPT un mol de gas ocupa 22,4 L." },
            { paso: "Suposicion: se toma el volumen correspondiente a 1 mol de xileno (la ecuacion de a). Si se refiere a 1 g: 8/106 mol x 22,4 L/mol = 1,69 L.", porque: "El enunciado no aclara la base del volumen: se toma 1 mol de xileno, que es la ecuacion de a); por cada gramo, 8/106 mol de CO2 ocupan 1,69 L." }
          ],
          resultado: "V(CO2) = 179,2 L en CNPT (para 1 mol de xileno; ≈ 1,69 L por cada gramo)"
        }
      ],
      errores_tipicos: [
        {
          error: "Usar 43,0 kJ/g directamente como kJ/mol, olvidando multiplicar por la masa molar (106 g/mol) y obtener -43 kJ/mol.",
          como_evitar: "Pasar siempre de kJ/g a kJ/mol multiplicando por la masa molar del compuesto."
        },
        {
          error: "En Hess olvidar el coeficiente 5 del agua o el 8 del CO2, o invertir la formula y sumar ΔHf de reactivos.",
          como_evitar: "ΔHcomb = ΣnΔHf(productos) - ΣnΔHf(reactivos), con los coeficientes de la ecuacion balanceada."
        },
        {
          error: "En c) contar el agua liquida como gas y sumar 5 x 22,4 L, o no tener en cuenta que el xileno es liquido.",
          como_evitar: "Solo los gases ocupan volumen en CNPT: aqui solo el CO2 (8 mol)."
        }
      ]
    },
    {
      num: 3,
      temas: ["acidobase", "soluciones", "equilibrio"],
      enunciado: "a) Se tiene una base fuerte BOH en solucion acuosa. Justifique que le sucedera al pH de la disolucion al anadir una cierta cantidad de agua. b) Ordene de menor a mayor acidez las disoluciones acuosas de igual concentracion molar de NaNO3, HNO3 y KOH. Justifique su respuesta. c) Calcule el pKb de la metilamina sabiendo que una disolucion acuosa 0,045 M de la misma tiene un pH de 11,65. Indique todas las consideraciones que realiza en los calculos.",
      resolucion: [
        {
          parte: "a)",
          pasos: [
            { paso: "BOH es una base fuerte: se disocia totalmente, [OH-] = C de la base.", porque: "Una base fuerte esta totalmente disociada en agua (BOH -> B+ + OH-), asi que la [OH-] es igual a la concentracion de la base." },
            { paso: "Al agregar agua, la concentracion de BOH y de OH- disminuye, asi que el pOH aumenta y el pH baja, acercandose a 7 pero sin llegar a superarlo ni a ser 7.", porque: "Al diluir baja la [OH-] y sube el pOH; como pH + pOH = 14, el pH baja, y no llega a 7 porque la base sigue aportando OH- mientras la concentracion sea mayor que la del agua." }
          ],
          resultado: "El pH disminuye (se acerca a 7)"
        },
        {
          parte: "b)",
          pasos: [
            { paso: "NaNO3: sal de acido fuerte (HNO3) y base fuerte (NaOH); no se hidroliza, pH ≈ 7.", porque: "Una sal de acido fuerte y base fuerte no sufre hidrolisis, asi que la solucion queda neutra." },
            { paso: "HNO3: acido fuerte, se disocia totalmente, pH < 7.", porque: "Un acido fuerte cede todo su H+, [H+] = C y pH < 7." },
            { paso: "KOH: base fuerte, pH > 7.", porque: "Una base fuerte libera todo su OH-, asi que pOH < 7 y pH > 7." },
            { paso: "Menor a mayor acidez: KOH < NaNO3 < HNO3.", porque: "Menor pH implica mayor acidez: KOH (pH > 7) es la menos acida, NaNO3 (pH 7) es intermedia y HNO3 (pH < 7) es la mas acida." }
          ],
          resultado: "KOH < NaNO3 < HNO3"
        },
        {
          parte: "c)",
          pasos: [
            { paso: "pOH = 14 - 11,65 = 2,35, entonces [OH-] = 10^-2,35 = 4,47 x 10^-3 M.", porque: "A 25 C pH + pOH = 14, y [OH-] = 10^-pOH." },
            { paso: "Metilamina: CH3NH2 + H2O <=> CH3NH3+ + OH-. Kb = [CH3NH3+][OH-] / [CH3NH2].", porque: "La metilamina es una base debil que toma H+ del agua y libera OH-; Kb se escribe con las concentraciones en equilibrio, sin el agua." },
            { paso: "Balance de carga: [CH3NH3+] = [OH-] (se desprecia el OH- del agua, 10^-7 M). Balance de masa: [CH3NH2] = 0,045 - 4,47 x 10^-3 = 0,0405 M.", porque: "Electroneutralidad: el unico cation relevante es CH3NH3+ y el unico anion relevante es OH-; el balance de masa indica que lo que se ionizo sale de la base inicial." },
            { paso: "Kb = (4,47 x 10^-3)^2 / 0,0405 = 4,92 x 10^-4.", porque: "Con [CH3NH3+] = [OH-] = x y [CH3NH2] = C - x, la expresion de equilibrio da Kb = x^2 / (C - x)." },
            { paso: "Suposicion: no se desprecia x porque x/C ≈ 10%; si se despreciara, Kb = 4,43 x 10^-4 y pKb = 3,35.", porque: "Como x/C ≈ 10 % no es despreciable frente a C, se usa la expresion completa; la version simplificada se informa solo como comparacion." },
            { paso: "pKb = -log(4,92 x 10^-4) = 3,31.", porque: "pKb = -log Kb, en analogia con pKa." }
          ],
          resultado: "pKb = 3,31 (Kb ≈ 4,9 x 10^-4)"
        }
      ],
      errores_tipicos: [
        {
          error: "En a) decir que el pH aumenta al diluir la base fuerte, confundiendo que al bajar la [OH-] el pH tambien baja.",
          como_evitar: "Al diluir, [OH-] baja y pH baja hacia 7; el pOH sube."
        },
        {
          error: "En b) considerar que NaNO3 es acido o basico por contener nitrato, en vez de verlo como sal de acido fuerte y base fuerte (pH 7).",
          como_evitar: "Clasificar cada sal segun su acido y su base de origen; solo se hidroliza si uno de los dos es debil."
        },
        {
          error: "En c) usar Kb = [OH-]/C (lineal) o pKb = 1/Kb, y omitir el termino cuadratico del equilibrio.",
          como_evitar: "Kb = [OH-]^2 / (C - [OH-]) y pKb = -log Kb; y explicitar las aproximaciones que se usan."
        }
      ]
    }
  ]
});
