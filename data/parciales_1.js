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
            { paso: "Masas molares: CaCO3 = 100 g/mol; Ca(HCO3)2 = 162 g/mol.", porque: "Calculamos la masa molar sumando las masas atomicas de cada elemento tantas veces como aparece en la formula, porque esa suma indica cuantos gramos tiene un mol de cada sustancia. Con CaCO3 = 100 g/mol y Ca(HCO3)2 = 162 g/mol queda definido el factor que convierte gramos en moles en todo el ejercicio. Por eso conviene revisar los subindices antes de sumar, ya que un subindice mal leido cambia toda la cuenta." },
            { paso: "Masa de CaCO3 = 0,20 x 5,0 g = 1,00 g, es decir 0,0100 mol. Masa de Ca(HCO3)2 = 0,80 x 5,0 g = 4,00 g, es decir 0,02469 mol.", porque: "Como la mezcla es 20% y 80% en masa, la masa de cada sal es su fraccion de los 5,0 g totales: 0,20 x 5,0 g = 1,00 g de CaCO3 y 0,80 x 5,0 g = 4,00 g de Ca(HCO3)2. Usamos n = m/M y dividimos cada masa por su masa molar, lo que da 0,0100 mol y 0,02469 mol. Entonces ya tenemos las cantidades de sal que se descomponen, y son el punto de partida para contar el CO2." },
            { paso: "CO2 teorico: 0,0100 mol (del CaCO3) + 2 x 0,02469 mol (del Ca(HCO3)2, que libera 2 CO2) = 0,05938 mol.", porque: "Contamos el CO2 que aporta cada sal con los coeficientes de la ecuacion ya balanceada: el CaCO3 libera 1 mol de CO2 por mol y el Ca(HCO3)2 libera 2. Por eso al bicarbonato le aplicamos el factor 2 antes de sumar. Como ambas descomposiciones ocurren en el mismo proceso, el CO2 total es la suma de los dos aportes: 0,0100 mol + 2 x 0,02469 mol = 0,05938 mol." },
            { paso: "Con 90% de rendimiento: n(CO2) = 0,90 x 0,05938 = 0,05344 mol.", porque: "Como el rendimiento es la fraccion del valor teorico que realmente se obtiene, calculamos el valor real multiplicando el teorico por 0,90. Usamos 0,05938 mol como teorico y obtenemos n(CO2) = 0,90 x 0,05938 = 0,05344 mol. Entonces el CO2 que efectivamente se obtiene es algo menor que el teorico, y ese valor es el que usamos para el volumen. Conviene aplicar el 0,90 al total y no a las fracciones de la mezcla." },
            { paso: "Suposicion: el 90% se aplica al CO2 de cada reaccion. Volumen en CNPT: V = n x 22,4 L/mol = 1,20 L (con V = nRT/P a 273 K y 1 atm tambien da 1,20 L).", porque: "Usamos la ecuacion de gas ideal PV = nRT, y en CNPT un mol de gas ocupa 22,4 L, por lo que el volumen sale de multiplicar los moles por ese valor. Con n = 0,05344 mol calculamos V = 0,05344 x 22,4 L/mol = 1,20 L. Como a temperatura y presion constantes el volumen es proporcional a los moles, aplicar el 90% antes o despues de sumar da el mismo resultado. Conviene verificar que 22,4 L/mol corresponda a las condiciones de referencia." }
          ],
          resultado: "V(CO2) total = 1,20 L en CNPT"
        },
        {
          parte: "b)",
          pasos: [
            { paso: "CaO total = 0,90 x (0,0100 + 0,02469) mol = 0,03122 mol.", porque: "Usamos la relacion molar de cada ecuacion: el CaCO3 y el Ca(HCO3)2 forman 1 mol de CaO por mol de sal, asi que el CaO teorico es la suma de los moles de ambas sales, 0,0100 + 0,02469. Luego aplicamos el 90% de rendimiento a ese total, igual que con el CO2. Entonces el CaO que se disuelve es 0,03122 mol, y conviene recordar que el bicarbonato aporta CO2 y agua, pero solo 1 mol de CaO." },
            { paso: "Reaccion: CaO(s) + H2O(l) -> Ca(OH)2(ac), relacion 1:1.", porque: "El oxido metalico reacciona con agua y forma el hidroxido correspondiente, que en este caso es Ca(OH)2, una base fuerte. Como la relacion es 1:1, los 0,03122 mol de CaO pasan integros a Ca(OH)2. Por eso el paso siguiente usa ese mismo valor de moles para calcular la concentracion. Verificamos que el producto sea Ca(OH)2 y no CaOH2, porque la cantidad de OH- depende del subindice." },
            { paso: "Suposicion: el volumen de solucion es 10 L (se toma el agua como volumen final). [Ca(OH)2] = 0,03122 mol / 10 L = 3,12 x 10^-3 M.", porque: "Usamos M = n/V, es decir moles de soluto sobre litros de solucion. El enunciado da 10 L de agua y no el volumen final de la solucion, asi que tomamos 10 L como aproximacion, razonable porque el solido disuelto ocupa un volumen muy chico. Con 0,03122 mol / 10 L obtenemos [Ca(OH)2] = 3,12 x 10^-3 M. Conviene dejar explicita esta suposicion, porque cambia el valor de la molaridad." },
            { paso: "[OH-] = 2 x [Ca(OH)2] = 6,24 x 10^-3 M (cada Ca(OH)2 libera 2 OH-).", porque: "Como el Ca(OH)2 es una base fuerte que se disocia totalmente, cada unidad libera dos iones OH- (Ca(OH)2 -> Ca2+ + 2 OH-). Por eso [OH-] = 2 x 3,12 x 10^-3 M = 6,24 x 10^-3 M, el doble de la molar del hidroxido. Entonces no podemos tomar [OH-] igual a la concentracion de la base, porque el ion calcio no aporta OH-. Este paso evita ese error." },
            { paso: "pOH = -log(6,24 x 10^-3) = 2,20. pH = 14 - 2,20 = 11,80.", porque: "Por definicion pOH = -log[OH-], y como pH + pOH = 14 el pH se obtiene restando el pOH de 14. Usamos [OH-] = 6,24 x 10^-3 M para calcular pOH = -log(6,24 x 10^-3) = 2,20. Entonces pH = 14 - 2,20 = 11,80, un valor basico coherente con el hidroxido de calcio. Conviene no redondear demasiado el logaritmo antes del ultimo paso." }
          ],
          resultado: "[Ca(OH)2] = 3,12 x 10^-3 M; pH = 11,80"
        },
        {
          parte: "c)",
          pasos: [
            { paso: "CaO: compuesto ionico, Ca2+ y O2-. Lewis: [Ca]2+ [:O:]2- (el O tiene 8 electrones alrededor).", porque: "Para la estructura de Lewis del CaO tenemos en cuenta que el calcio cede sus electrones de valencia y el oxigeno los acepta, formando Ca2+ y O2-. Como es un compuesto ionico, cada ion se dibuja por separado con su carga, y el O2- muestra 8 electrones alrededor. Por eso no aparecen pares compartidos en el dibujo. Verificamos que no se dibujen enlaces covalentes, porque en un ionico no los hay." },
            { paso: "CO2: O=C=O, molecula lineal con dos dobles enlaces C=O y sin pares libres en el C.", porque: "Calculamos el total de electrones de valencia de la molecula de CO2 y los ubicamos para completar los octetos. Como el carbono no puede quedar con pares libres, se necesitan dos dobles enlaces, uno con cada O, y eso da la forma lineal O=C=O. Por eso la estructura no tiene pares libres en el C. Verificamos que el total de electrones de valencia sea el correcto antes de dibujar la estructura." },
            { paso: "El CO2 es apolar porque, por la geometria lineal, los dipolos de enlace se cancelan. El agua es polar, asi que el CO2 se disuelve poco.", porque: "La polaridad depende de la suma vectorial de los dipolos de enlace: en el CO2 los dos dipolos C=O son iguales y opuestos, asi que se cancelan por la geometria lineal. Usamos la regla semejante disuelve semejante: como el CO2 es apolar y el agua es polar, predecimos que se disuelve poco. Entonces la conclusion sale de la forma de la molecula y no solo de que los enlaces sean polares." },
            { paso: "El CaO es ionico: en agua los iones se solvatan por interaccion ion-dipolo, y ademas reacciona formando Ca(OH)2.", porque: "Un compuesto ionico se disuelve porque sus iones se rodean de moleculas de agua, en la solvatacion ion-dipolo. Ademas el CaO reacciona con el agua y se transforma en Ca(OH)2, lo que aumenta la solubilidad aparente. Por eso el CaO aparece como el mas soluble. Conviene no confundir disolucion fisica con reaccion quimica al comparar solubilidades." }
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
            { paso: "n(CO2) = 220 g / 44 g/mol = 5 mol, es decir 5 C por mol de combustible.", porque: "Usamos n = m/M para pasar la masa de CO2 a moles, y como todo el carbono del combustible termina en ese gas, el resultado indica cuantos C tiene cada mol. Dividimos 220 g por 44 g/mol y obtenemos 5 mol, es decir 5 C por mol de combustible. Entonces el combustible tiene 5 atomos de carbono. Verificamos que el calculo se haga por mol de combustible, porque de eso depende el numero de carbonos." },
            { paso: "n(H2O) = 108 g / 18 g/mol = 6 mol, es decir 12 H por mol de combustible.", porque: "Aplicamos el mismo balance pero para el hidrogeno: todo el H del combustible termina en H2O, y cada molecula de agua tiene dos atomos de H. Usamos n = m/M con 108 g y 18 g/mol para obtener 6 mol de H2O. Entonces los H por mol de combustible son el doble de los moles de agua, 2 x 6 = 12. Verificamos que se multiplique por 2 y no por 1." },
            { paso: "Formula molecular: C5H12 (combustion: C5H12 + 8 O2 -> 5 CO2 + 6 H2O).", porque: "Con 5 C y 12 H por mol escribimos C5H12. Lo comprobamos con la ecuacion de combustion: el oxigeno de los productos (5 x 2 del CO2 mas 6 x 1 del H2O = 16) debe igualar al de los reactivos (8 O2 = 16). Como ambos dan 16, los balances de C y H son consistentes con la ecuacion. Esta verificacion confirma la formula molecular." },
            { paso: "Isomeros de C5H12: el neopentano (2,2-dimetilpropano) hierve a 9,5 C, asi que es gas a 25 C y no sirve. Los liquidos a 25 C son el n-pentano y el 2-metilbutano (isopentano).", porque: "Los isomeros de C5H12 tienen la misma formula pero distinta estructura, y eso cambia propiedades como el punto de ebullicion. Como el enunciado pide un liquido a 25 C, descartamos el neopentano porque hierve a 9,5 C y seria gas a esa temperatura. Entonces los candidatos validos son el n-pentano y el 2-metilbutano. Conviene verificar el estado de agregacion antes de elegir una sustancia." },
            { paso: "Formula desarrollada del n-pentano: CH3-CH2-CH2-CH2-CH3. Posible sustancia: n-pentano.", porque: "Una cadena lineal de 5 carbonos unidos en fila, con los H completando la tetravalencia de cada C, da la formula desarrollada CH3-CH2-CH2-CH2-CH3. Usamos el n-pentano porque cumple el dato de estado: es liquido a 25 C, ya que su punto de ebullicion queda por encima de esa temperatura. Por eso lo proponemos como posible sustancia. Verificamos que el total de H sea 12 al dibujar la formula." }
          ],
          resultado: "C5H12; por ejemplo n-pentano, CH3-CH2-CH2-CH2-CH3 (liquido a 25 C)"
        },
        {
          parte: "b)",
          pasos: [
            { paso: "Por ley de Hess: ΔHcomb = [5 x ΔHf(CO2) + 6 x ΔHf(H2O)] - ΔHf(C5H12).", porque: "Usamos la ley de Hess: la entalpia de reaccion es la suma de las entalpias de formacion de los productos menos la de los reactivos, cada una multiplicada por su coeficiente. Con eso obtenemos la entalpia de combustion a partir de datos de formacion tabulados, sin medirla. Por eso escribimos ΔHcomb = [5 x ΔHf(CO2) + 6 x ΔHf(H2O)] - ΔHf(C5H12). Verificamos que la resta sea productos menos reactivos, porque invertirla cambia el signo." },
            { paso: "5 x (-393,5) + 6 x (-286,0) = -1967,5 - 1716,0 = -3683,5 kJ.", porque: "Multiplicamos cada entalpia de formacion por su coeficiente de la ecuacion balanceada, 5 para el CO2 y 6 para el H2O, y luego sumamos. El O2 no entra porque es un elemento en su forma estandar y su entalpia de formacion vale 0. Entonces la suma de los productos da 5 x (-393,5) + 6 x (-286,0) = -3683,5 kJ. Conviene verificar los coeficientes contra la ecuacion y los signos de cada dato." },
            { paso: "-3537,06 = -3683,5 - ΔHf(C5H12), entonces ΔHf(C5H12) = -3683,5 + 3537,06 = -146,44 kJ/mol.", porque: "Reemplazamos la entalpia de combustion dada, -3537,06 kJ/mol, en la ecuacion de Hess para despejar la unica incognita, ΔHf(C5H12). Como la expresion tiene una resta, al pasar -3683,5 kJ al otro lado cambia de signo. Entonces ΔHf(C5H12) = -3683,5 + 3537,06 = -146,44 kJ/mol. Un error frecuente es perder ese signo al despejar." }
          ],
          resultado: "ΔHf(C5H12, l) = -146,44 kJ/mol"
        },
        {
          parte: "c)",
          pasos: [
            { paso: "Reaccion: C5H12(l) + 8 O2(g) -> 5 CO2(g) + 6 H2O(l).", porque: "Como necesitamos contar los gases, escribimos la combustion completa del C5H12 liquido con oxigeno, con CO2 y H2O como productos y sus estados de agregacion. La ecuacion balanceada, con 8 O2 por mol de combustible, hace falta para contar cuantos moles de gas hay de cada lado. De eso depende Δn. Verificamos que el O2 sea 8, porque de ese coeficiente depende el resultado." },
            { paso: "Delta n de gases = 5 - 8 = -3 (el agua es liquida y no se cuenta).", porque: "Δn es la diferencia entre los moles de gas de los productos y los de los reactivos, y es la variable que aparece en la relacion ΔH = ΔU + Δn RT. Usamos Δn = 5 - 8 = -3, contando solo gases: el agua es liquida y no se cuenta. Entonces Δn es negativo, y eso indica que el volumen de gas disminuye en la combustion. Verificamos que solo se sumen especies gaseosas en ambos lados." },
            { paso: "ΔU = ΔH - Δn x R x T = -3537,06 - (-3)(8,31 x 10^-3 kJ/mol.K)(298 K) = -3537,06 + 7,43 = -3529,6 kJ/mol.", porque: "Para gases usamos la relacion ΔH = ΔU + Δn RT, y la despejamos como ΔU = ΔH - Δn RT. Reemplazamos ΔH = -3537,06 kJ/mol, Δn = -3, R = 8,31 x 10^-3 kJ/mol.K y T = 298 K, para obtener ΔU = -3537,06 - (-3)(8,31 x 10^-3)(298) = -3529,6 kJ/mol. Por eso la constante R se usa en kJ, para que sea coherente con la entalpia. Verificamos el signo: como Δn es negativo, el termino se suma al ΔH." },
            { paso: "Suposicion: se usa la combustion como proceso a presion constante (1 atm) con T = 298 K.", porque: "Las entalpias se miden a presion constante, asi que suponemos que la combustion ocurre a 1 atm y que ΔH es la magnitud adecuada. Tomamos T = 298 K porque 25 C equivalen a 298 K, la temperatura que fija el enunciado. Entonces la relacion entre ΔH y ΔU que usamos en el paso anterior es valida. Conviene dejar escrita esta hipotesis, porque la conversion entre ΔH y ΔU depende de ella." }
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
            { paso: "Constante de equilibrio (el carbon es solido y no entra en K): Kp = pCO x pH2 / pH2O = (6,151 x 6,151) / 2,649 = 14,28.", porque: "La constante de equilibrio para gases se escribe con presiones parciales: productos en el numerador y reactivos en el denominador, cada uno elevado a su coeficiente. Como el carbono es un solido puro, no entra en la expresion. Usamos pCO = 6,151 atm y pH2 = 6,151 atm en el numerador, y pH2O = 2,649 atm en el denominador, para obtener Kp = 14,28. Verificamos que el H2O quede en el denominador, porque es reactivo." },
            { paso: "Moles iniciales en 500 L y 800 C (1073 K): H2O = 50, CO = 10, H2 = 30. Factor RT/V = 0,0821 x 1073 / 500 = 0,1762 atm/mol.", porque: "Por la ecuacion de gas ideal p = nRT/V, y a temperatura y volumen constantes la presion es proporcional a los moles. Calculamos el factor RT/V = 0,0821 x 1073 / 500 = 0,1762 atm/mol, que convierte moles en presiones parciales de todas las especies. Usamos la temperatura en kelvin, 1073 K, porque usar grados Celsius en la formula da un resultado incorrecto." },
            { paso: "Presiones iniciales: pH2O = 8,81 atm; pCO = 1,76 atm; pH2 = 5,29 atm.", porque: "Multiplicamos cada numero de moles inicial por el factor RT/V = 0,1762 atm/mol, y cada resultado es la presion parcial inicial de ese gas. Por ejemplo, con 50 mol de H2O obtenemos pH2O = 8,81 atm. Entonces pCO = 1,76 atm y pH2 = 5,29 atm, que son las presiones con las que calculamos Q. Verificamos que se usen los moles correctos de cada gas y no los del carbono." },
            { paso: "Cociente de reaccion: Q = (1,76 x 5,29) / 8,81 = 1,06, que es menor que Kp = 14,28.", porque: "El cociente de reaccion Q tiene la misma forma que Kp, pero usa las presiones iniciales en lugar de las de equilibrio. Calculamos Q = (1,76 x 5,29) / 8,81 = 1,06. Como 1,06 es menor que Kp = 14,28, comparamos Q con K para saber hacia donde evoluciona el sistema desde ese estado inicial. Verificamos que el H2O este en el denominador y que el carbono no entre en la expresion." },
            { paso: "Como Q < K, el sistema evoluciona hacia la derecha: se forma mas CO y H2.", porque: "Segun el criterio del cociente de reaccion, si Q < K el sistema no esta en equilibrio y la reaccion neta avanza hacia los productos. Como Q = 1,06 y K = 14,28, el sistema se desplaza hacia la derecha hasta que Q iguale a K. Entonces se forma mas CO e H2 que al inicio. Recordamos que el criterio indica el sentido de la evolucion, no la cantidad final." },
            { paso: "Suposicion: gases ideales y sistema cerrado a T constante.", porque: "Suponemos comportamiento de gas ideal para usar PV = nRT, con sistema cerrado y temperatura constante. A 800 C y presiones de pocas atmosferas la aproximacion es razonable, y a temperatura constante el valor de K no cambia. Por eso usamos el mismo Kp = 14,28 durante toda la evaluacion. Conviene verificar que las condiciones del enunciado, recipiente cerrado y T fija, justifiquen estas hipotesis." }
          ],
          resultado: "Si, se obtendra mas hidrogeno (Q = 1,06 < Kp = 14,28)"
        },
        {
          parte: "b)",
          pasos: [
            { paso: "ΔH°r = [ΔH°f(CO) + ΔH°f(H2)] - [ΔH°f(H2O) + ΔH°f(C)] = -110500 - (-241820) = +131320 J/mol.", porque: "Aplicamos la ley de Hess con las entalpias de formacion: el ΔH de reaccion es la suma de los productos menos la de los reactivos. Reemplazamos ΔH°f(CO) = -110500 J/mol y ΔH°f(H2O) = -241820 J/mol. Como el C solido y el H2 valen 0 por ser elementos, obtenemos ΔH°r = -110500 - (-241820) = +131320 J/mol. Verificamos el orden de la resta, porque el resultado cambia de signo si se invierte." },
            { paso: "La reaccion es endotermica (ΔH > 0). Si se sube la temperatura, el equilibrio se desplaza hacia el lado que absorbe calor, o sea hacia los productos.", porque: "Segun Le Chatelier, al aumentar la temperatura el equilibrio se desplaza en el sentido que absorbe el calor agregado. Como ΔH > 0, la reaccion absorbe calor y ese sentido es el de los productos. Por eso la reaccion es endotermica, y subir la temperatura favorece la formacion de CO e H2. Conviene verificar primero el signo de ΔH, porque es lo que determina hacia donde se desplaza el equilibrio." },
            { paso: "Conviene trabajar a alta temperatura para producir mas CO e H2.", porque: "Si a alta temperatura el equilibrio favorece los productos, la constante K aumenta con T en una reaccion endotermica, como indica la ecuacion de van't Hoff. Entonces conviene trabajar a temperatura alta para producir mas CO e H2. Conviene aclarar que esta conclusion es termodinamica y no considera la velocidad de la reaccion." }
          ],
          resultado: "Conviene alta temperatura (reaccion endotermica, ΔH = +131,3 kJ/mol)"
        },
        {
          parte: "c)",
          pasos: [
            { paso: "Moles de gas: reactivos = 1 (H2O); productos = 2 (CO + H2).", porque: "Para Le Chatelier respecto de la presion solo cuentan las especies gaseosas, porque los solidos tienen volumen despreciable y no aportan presion apreciable. Contamos 1 mol de gas en los reactivos (H2O) y 2 mol en los productos (CO + H2), que son los moles que cambian al variar el volumen. Entonces el carbono solido queda afuera del conteo. Verificamos que el carbono no se cuente." },
            { paso: "Si aumenta la presion, el equilibrio se desplaza hacia el lado con menos moles de gas, que son los reactivos.", porque: "Usamos el principio de Le Chatelier: al aumentar la presion el equilibrio se desplaza hacia el lado con menos moles de gas, porque asi disminuye la presion total. Como los reactivos tienen 1 mol de gas frente a 2 mol de los productos, el sistema se desplaza hacia los reactivos. Verificamos el sentido: el sistema favorece el lado que ocupa menos volumen." },
            { paso: "Por lo tanto el aumento de presion no favorece la formacion de producto.", porque: "Como el equilibrio se desplaza hacia los reactivos, la cantidad de CO e H2 formada disminuye al aumentar la presion. Por eso concluimos que la presion no ayuda a obtener mas producto. Conviene aclarar en la respuesta que esta conclusion depende de la diferencia de moles gaseosos, 1 frente a 2." }
          ],
          resultado: "No conduce a mas producto: el equilibrio se desplaza hacia los reactivos"
        },
        {
          parte: "d)",
          pasos: [
            { paso: "Conversion de equilibrio: X_eq = 37,6 / 55 = 0,6836.", porque: "La conversion de equilibrio es la fraccion del vapor de agua inicial que reacciono, X = moles que reaccionaron / moles iniciales. Como la relacion molar entre H2O y H2 es 1:1, los 37,6 mol de H2 formados equivalen a los moles de H2O consumidos. Usamos X_eq = 37,6 / 55 = 0,6836. Verificamos que el denominador sea el H2O inicial, 55 mol." },
            { paso: "Conversion de trabajo: X = 0,80 x 0,6836 = 0,5469, es decir se reaccionan 0,5469 x 55 = 30,08 mol de H2O y se forman 30,08 mol de H2.", porque: "El enunciado pide trabajar al 80% de la conversion de equilibrio, asi que tomamos el 80% de X_eq = 0,6836. Con eso obtenemos X = 0,80 x 0,6836 = 0,5469. Entonces reaccionan 0,5469 x 55 = 30,08 mol de H2O y se forman 30,08 mol de H2. Trabajar con una conversion menor que la maxima permite operar alejado del equilibrio." },
            { paso: "Por tonelada de vapor: 1 t = 10^6 g / 18 g/mol = 55 556 mol de H2O.", porque: "Para pasar la tonelada de vapor a moles usamos n = m/M, con m = 10^6 g (1 t) y M(H2O) = 18 g/mol. Calculamos n = 55 556 mol de H2O por tonelada, que es la base de los calculos siguientes. Verificamos que la conversion de toneladas a gramos sea 10^6 y no 10^3, porque ese error cambia el resultado en un factor mil." },
            { paso: "mol de H2 = 0,5469 x 55 556 = 30 384 mol. Masa = 30 384 mol x 2 g/mol = 60 768 g.", porque: "Como la relacion es 1:1 entre H2O y H2, y la conversion de trabajo es 0,5469, los moles de H2 salen de multiplicar esa conversion por los 55 556 mol de H2O de la tonelada. Con 0,5469 x 55 556 = 30 384 mol obtenemos los moles de H2. Luego la masa se calcula con la masa molar del H2, 2 g/mol, y da 60 768 g. Verificamos que la masa molar usada sea la del H2 y no la del H2O." },
            { paso: "Suposicion: se toma M(H2) = 2 g/mol. Con 2,016 g/mol el resultado sube a unos 61,3 kg.", porque: "Usamos M(H2) = 2 g/mol como aproximacion entera de la masa molar del H2, para pasar 30 384 mol a gramos. Redondear simplifica el calculo, y con 2,016 g/mol el resultado sube a unos 61,3 kg. Como la diferencia es menor al 1%, la aproximacion es aceptable en el examen. Conviene informar el valor usado y, como control, el resultado con mas cifras." }
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
            { paso: "Ecuacion balanceada: 4 NH3 + 5 O2 -> 4 NO + 6 H2O.", porque: "Usamos la conservacion de atomos para balancear la reaccion: cada elemento debe tener la misma cantidad a ambos lados de la flecha. Los coeficientes resultantes, 4 NH3 + 5 O2 -> 4 NO + 6 H2O, fijan todas las relaciones molares del ejercicio. Verificamos el balance de O, porque es el que mas se equivoca." },
            { paso: "n(NH3) = 200 g / 17 g/mol = 11,76 mol. n(O2) = 21 mol; n(N2) = 79 mol.", porque: "Usamos n = m/M para pasar los 200 g de NH3 a moles, con M(NH3) = 14 + 3 x 1 = 17 g/mol, y obtenemos 11,76 mol. El aire tiene 21% de O2 y 79% de N2 sobre 100 mol, asi que esas cantidades salen directamente como moles: n(O2) = 21 mol y n(N2) = 79 mol. Verificamos que el aire se tome como 100 mol y no como gramos." },
            { paso: "Limitante: el NH3 necesita 11,76 x 5/4 = 14,7 mol de O2 y hay 21 mol, asi que el NH3 es el limitante.", porque: "El reactivo limitante es el que se agota primero, y lo identificamos comparando cuantos moles de cada reactivo exige la ecuacion balanceada. Con la relacion 5 O2 por 4 NH3 calculamos el O2 que necesita el amoniaco disponible: 11,76 x 5/4 = 14,7 mol. Como hay 21 mol de O2, sobra oxigeno y por eso el NH3 es el limitante. Verificamos que la comparacion use los coeficientes correctos." },
            { paso: "Teorico: n(NO) = 11,76 mol. Real: 0,85 x 11,76 = 10,00 mol de NO.", porque: "Segun la relacion 4 NH3 : 4 NO, el NO maximo que puede formarse es igual al NH3 consumido. Como el NH3 es el limitante, el valor teorico es n(NO) = 11,76 mol. Aplicamos el rendimiento de 85% sobre ese valor: 0,85 x 11,76 = 10,00 mol de NO reales. Conviene no confundir el rendimiento con la conversion del reactivo." },
            { paso: "m(NO) = 10,00 mol x 30 g/mol = 300 g.", porque: "Pasamos de moles a gramos con m = n x M, con M(NO) = 14 + 16 = 30 g/mol. Usamos n = 10,00 mol, que es el valor real con rendimiento, y obtenemos m(NO) = 10,00 mol x 30 g/mol = 300 g. Es el ultimo paso de conversion, porque la pregunta pide la masa de NO. Verificamos que se use el valor real y no el teorico." }
          ],
          resultado: "m(NO) = 300 g"
        },
        {
          parte: "b)",
          pasos: [
            { paso: "Extension de reaccion real: ξ = 10,00 / 4 = 2,50 mol.", porque: "La extension de reaccion ξ mide cuantas veces ocurrio la reaccion balanceada, y se relaciona con el cambio de cada especie por su coeficiente: n = n0 + coeficiente x ξ. Como el NO tiene coeficiente 4, calculamos ξ = 10,00 / 4 = 2,50 mol. Entonces usamos el NO real, 10 mol, y no el teorico. Verificamos ese paso antes de seguir con el balance de materia." },
            { paso: "NH3 final = 11,76 - 10,00 = 1,76 mol. O2 final = 21 - 5 x 2,50 = 8,50 mol. N2 = 79 mol. NO = 10,00 mol. H2O = 6 x 2,50 = 15,00 mol.", porque: "Aplicamos el balance de materia a cada especie: la cantidad final es la inicial mas el coeficiente por ξ, con signo negativo para los reactivos que se consumen. Por eso NH3 final = 11,76 - 10,00 = 1,76 mol y O2 final = 21 - 5 x 2,50 = 8,50 mol. El N2 no participa, asi que queda en 79 mol. Verificamos que el H2O use el coeficiente 6 y no 4, lo que da 15,00 mol." },
            { paso: "Total = 1,76 + 8,50 + 79 + 10,00 + 15,00 = 114,26 mol.", porque: "Dado que para calcular fracciones molares hace falta el total de moles de la mezcla final, que es la suma de todas las especies presentes. Sumamos 1,76 + 8,50 + 79 + 10,00 + 15,00 = 114,26 mol. El H2O se cuenta como gas porque a 900 C esta en fase vapor. Verificamos que no falte ninguna especie en la suma." },
            { paso: "(i) x(NO) = 10,00 / 114,26 = 0,0875.", porque: "La fraccion molar es la proporcion de moles de una especie respecto del total: x = n_i / n_total. Usamos n(NO) = 10,00 mol y un total de 114,26 mol, y obtenemos x(NO) = 0,0875. Es una magnitud adimensional, y la suma de todas las fracciones da 1. Verificamos que el denominador sea el total final y no el inicial." },
            { paso: "(ii) p(NO) = x(NO) x P_total = 0,0875 x 8 atm = 0,70 atm.", porque: "Segun la ley de Dalton, en una mezcla ideal la presion parcial de un gas es su fraccion molar multiplicada por la presion total. Usamos x(NO) = 0,0875 y una presion total de 8 atm para calcular p(NO) = 0,0875 x 8 atm = 0,70 atm. Esto permite pasar de composicion a presion, que es lo que pide el ejercicio. Verificamos que se use la presion total del reactor." },
            { paso: "Suposicion: el rendimiento de 85% se aplica sobre el NH3 que reacciona, y la presion total se mantiene en 8 atm.", porque: "El enunciado fija la presion en 8 atm y la reaccion a presion constante, por eso tomamos la presion total como 8 atm. Aplicamos el rendimiento de 85% sobre el NH3 que reacciona, para mantener la extension de reaccion calculada. Entonces estas hipotesis definen los moles finales que usamos en los calculos. Conviene dejarlas explicitas, porque afectan el resultado." }
          ],
          resultado: "(i) x(NO) = 0,0875; (ii) p(NO) = 0,70 atm"
        },
        {
          parte: "c)",
          pasos: [
            { paso: "NH3: piramidal trigonal (AX3E1, con un par libre en N). Molecula polar.", porque: "Con VSEPR contamos los pares de electrones alrededor del N: 3 enlaces y 1 par libre dan una distribucion tetraedrica de pares, cuya forma molecular es piramidal trigonal. Como el par libre no esta compensado por simetria, la molecula tiene momento dipolar neto. Por eso el NH3 es polar. Verificamos que el par libre se cuente al predecir la forma." },
            { paso: "CH4: tetraedrica (AX4). Molecula apolar, porque los 4 dipolos C-H se cancelan por simetria.", porque: "Con VSEPR, 4 pares de enlace y ningun par libre dan una geometria tetraedrica (AX4). Como los 4 dipolos C-H son iguales y estan distribuidos simetricamente, su suma vectorial es cero. Por eso el CH4 es apolar, aunque sus enlaces C-H sean polares. Verificamos que el C no tenga pares libres antes de aplicar esta regla." },
            { paso: "(ii) NH3 tiene puentes de hidrogeno entre sus moleculas. El CH4 solo tiene fuerzas de London.", porque: "Un puente de hidrogeno se forma cuando un H esta unido a un elemento muy electronegativo (N, O o F) y se atrae con un par libre de otra molecula. El NH3 cumple esa condicion, porque su H esta unido al N, mientras que el CH4 no tiene H unido a N, O o F. Entonces el NH3 tiene puentes de hidrogeno y el CH4 solo fuerzas de London. Verificamos esta condicion antes de asignar el tipo de fuerza." },
            { paso: "Por lo tanto el NH3 tiene mayor punto de ebullicion (≈ -33 C frente a ≈ -162 C).", porque: "A mayor intensidad de las fuerzas intermoleculares se necesita mas energia para separar las moleculas, y el punto de ebullicion es mas alto. Los puentes de hidrogeno son mas intensos que las fuerzas de London, por eso el NH3 hierve a mayor temperatura que el CH4. Entonces el tipo de fuerza pesa mas que la masa molar, que es parecida. Conviene comparar primero el tipo de fuerza y despues la masa." }
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
            { paso: "Suposicion: el aire usado es estequiometrico (sin exceso), y el agua se toma liquida (poder calorifico superior).", porque: "El enunciado no indica exceso de aire, asi que suponemos combustion estequiometrica. Tomamos el agua como liquida, porque el poder calorifico superior considera el agua condensada. Por eso aplicamos esta hipotesis al calcular el aire necesario. Verificamos que sea coherente con el dato de PCS." },
            { paso: "O2 en el aire: 0,21 x 3000 L = 630 L = 28,1 mol de O2 (a 22,4 L/mol).", porque: "Como el volumen de gas es proporcional a los moles a CNPT, el O2 disponible se obtiene de la fraccion del 21%. Calculamos 0,21 x 3000 L = 630 L de O2. Luego pasamos a moles dividiendo por 22,4 L/mol, el volumen de un mol de gas en CNPT, y obtenemos 28,1 mol de O2. Verificamos que la fraccion usada sea la del O2 y no la del N2." },
            { paso: "CH4 + 2 O2 -> CO2 + 2 H2O: n(CH4) = 28,1 / 2 = 14,06 mol.", porque: "La ecuacion balanceada indica que la combustion del CH4 necesita 2 mol de O2 por mol de CH4. Usamos n(CH4) = 28,1 / 2 = 14,06 mol, porque los moles de metano son la mitad de los moles de O2 disponibles. Entonces el metano quemado es 14,06 mol. Verificamos que el coeficiente del O2 sea 2 y no 1." },
            { paso: "ΔHc(CH4) = -2997 kcal / 14,06 mol = -213,1 kcal/mol (≈ -891,7 kJ/mol).", porque: "Calculamos la entalpia de combustion como el calor liberado por mol de combustible, dividiendo el calor total por los moles de CH4 quemados. Con 2997 kcal y 14,06 mol obtenemos ΔHc = -2997 kcal / 14,06 mol = -213,1 kcal/mol. El signo negativo indica que el proceso es exotermico, es decir que el sistema libera calor. Conviene pasar a kJ solo al final, lo que da -891,7 kJ/mol." },
            { paso: "Etano: M = 30 g/mol. ΔHc = -11,23 kcal/g x 30 g/mol = -336,9 kcal/mol (≈ -1409,6 kJ/mol).", porque: "Como el poder calorifico se da por gramo, pero la entalpia de combustion se expresa por mol, asi que multiplicamos por la masa molar del etano. Con M = 30 g/mol y 11,23 kcal/g obtenemos ΔHc = -11,23 kcal/g x 30 g/mol = -336,9 kcal/mol. Es un cambio de base del dato, que pasa de ser por masa a ser por mol. Verificamos que la masa molar sea la del C2H6 y que el signo se mantenga." },
            { paso: "Reacciones: CH4(g) + 2 O2(g) -> CO2(g) + 2 H2O(l), ΔH = -213,1 kcal/mol. C2H6(g) + 7/2 O2(g) -> 2 CO2(g) + 3 H2O(l), ΔH = -336,9 kcal/mol.", porque: "Escribimos la ecuacion termoquimica con el coeficiente de O2 de cada combustible y el ΔH correspondiente a un mol de combustible. Para el etano el coeficiente del O2 es fraccionario, 7/2, y lo mantenemos asi para que la ecuacion sea por mol de combustible. Por eso usamos ΔH = -213,1 kcal/mol para el CH4 y -336,9 kcal/mol para el C2H6. Verificamos que el ΔH corresponda a un mol y no a un gramo." }
          ],
          resultado: "ΔHc(CH4) = -213,1 kcal/mol; ΔHc(C2H6) = -336,9 kcal/mol"
        },
        {
          parte: "b)",
          pasos: [
            { paso: "CH4: 1 mol de CO2 por 213,1 kcal, es decir 1/213,1 = 4,69 x 10^-3 mol de CO2 por kcal.", porque: "Como el CO2 es el gas de efecto invernadero que pide el enunciado, comparamos los combustibles por unidad de energia liberada: cuanto CO2 se emite por kcal. Dividimos 1 mol de CO2 por mol de combustible entre los 213,1 kcal de calor por mol. Entonces obtenemos 1/213,1 = 4,69 x 10^-3 mol de CO2 por kcal. Verificamos que las unidades queden en mol de CO2 por kcal." },
            { paso: "C2H6: 2 mol de CO2 por 336,9 kcal, es decir 2/336,9 = 5,94 x 10^-3 mol de CO2 por kcal.", porque: "Como la ecuacion balanceada indica que cada mol de etano produce 2 mol de CO2, asi que el numerador es 2 y no 1. Lo dividimos por el calor de combustion por mol ya calculado, 336,9 kcal, para que la unidad sea la misma que en el caso del metano. Obtenemos 2/336,9 = 5,94 x 10^-3 mol de CO2 por kcal. Conviene no olvidar el coeficiente 2 del CO2." },
            { paso: "El etano emite mas CO2 por kcal (≈ 27% mas).", porque: "Comparamos la emision por kcal de los dos combustibles con la relacion entre ambos menos 1, que expresa cuanto mas emite uno respecto del otro. Calculamos 5,94 x 10^-3 / 4,69 x 10^-3 - 1 = 0,27, es decir 27%. Entonces el etano emite mas CO2 por kcal. Verificamos que se divida por el valor del metano, porque se pregunta cuanto mas emite el etano." }
          ],
          resultado: "El etano afecta mas al efecto invernadero por kcal producida"
        },
        {
          parte: "c)",
          pasos: [
            { paso: "C2H6 + 7/2 O2 -> 2 CO2 + 3 H2O: se necesitan 3,5 mol de O2 por mol de etano.", porque: "La ecuacion balanceada indica que 1 mol de etano necesita 7/2 mol de O2, y esa relacion fija cuanto oxigeno hay que aportar. Entonces para 1 mol de etano se necesitan 3,5 mol de O2. Este paso es el puente para calcular el aire, que es la fuente de oxigeno. Verificamos el coeficiente fraccionario y no lo redondeamos." },
            { paso: "Aire necesario: 3,5 mol de O2 / 0,21 = 16,67 mol de aire.", porque: "Como el aire contiene 21% de O2 en moles, la cantidad de aire es la de O2 dividida por 0,21. Calculamos 3,5 mol de O2 / 0,21 = 16,67 mol de aire. Es la inversa del calculo de a), porque aqui conocemos el O2 necesario y buscamos el aire que lo aporta. Verificamos que se divida y no se multiplique por 0,21." },
            { paso: "V(aire) = 16,67 mol x 22,4 L/mol = 373 L en CNPT.", porque: "En CNPT un mol de gas ocupa 22,4 L, asi que el volumen de aire es el numero de moles por ese valor. Calculamos V = 16,67 mol x 22,4 L/mol = 373 L de aire en CNPT. Usamos la condicion de referencia del enunciado. Conviene verificar que el resultado sea el volumen del aire completo y no solo el del O2." }
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
            { paso: "HCOOH(ac) + H2O(l) <=> HCOO-(ac) + H3O+(ac), o simplificado HCOOH <=> HCOO- + H+.", porque: "Dado que el acido formico es debil y solo cede una parte de sus H+ al agua, la reaccion es un equilibrio, indicado con doble flecha. En la ecuacion escribimos el acido, el agua como solvente y los productos HCOO- y H3O+ (o H+ simplificado). Verificamos que el acido ceda un solo H+, porque es monoprotico." },
            { paso: "Ka = [H+][HCOO-] / [HCOOH].", porque: "La constante de acidez se escribe con las concentraciones de equilibrio de productos sobre reactivos, sin incluir el agua porque es el solvente y su concentracion practicamente no cambia. Usamos Ka = [H+][HCOO-] / [HCOOH], que despues permite despejar la concentracion del acido. Verificamos que el denominador contenga solo el acido sin disociar." },
            { paso: "Ka = 10^-pKa = 10^-3,75 = 1,78 x 10^-4.", porque: "Usamos la definicion pKa = -log Ka, que invertida da Ka = 10^-pKa. Con pKa = 3,75 calculamos Ka = 10^-3,75 = 1,78 x 10^-4. Aunque el dato venga en escala logaritmica, las expresiones de equilibrio usan la constante. Verificamos que la potencia de diez sea negativa." }
          ],
          resultado: "Ka = 1,78 x 10^-4"
        },
        {
          parte: "b)",
          pasos: [
            { paso: "pH = 3,5 => [H+] = x = 10^-3,5 = 3,16 x 10^-4 M.", porque: "Usamos la definicion pH = -log[H+], que invertida da [H+] = 10^-pH. Con pH = 3,5 calculamos x = 10^-3,5 = 3,16 x 10^-4 M. Este valor se usa como la x del equilibrio, porque es la cantidad de acido que se disocia. Verificamos que se calcule 10 elevado a menos 3,5." },
            { paso: "Ka = x^2 / (C - x), entonces C = x + x^2 / Ka = 3,16 x 10^-4 + (3,16 x 10^-4)^2 / 1,78 x 10^-4 = 3,16 x 10^-4 + 5,62 x 10^-4.", porque: "Usamos Ka = x^2 / (C - x) y despejamos C = x + x^2 / Ka. Reemplazamos x = 3,16 x 10^-4 M y Ka = 1,78 x 10^-4 para obtener C = 3,16 x 10^-4 + 5,62 x 10^-4. Los balances de masa indican que el acido inicial C se reparte entre el acido sin disociar y el ion formiato. Entonces C es la incognita que resolvemos con esta ecuacion." },
            { paso: "Suposicion: el acido es debil y se usa la expresion cuadratica completa (no se desprecia x).", porque: "Un acido debil no se disocia por completo, y la aproximacion [HCOOH] ≈ C solo vale si x es muy chica frente a C. Aqui x/C ronda el 36%, valor que no es despreciable, asi que usamos la expresion cuadratica completa. Por eso no despreciamos x en el denominador. Conviene verificar el desprecio al final del calculo." }
          ],
          resultado: "C minima = 8,8 x 10^-4 M"
        },
        {
          parte: "c)",
          pasos: [
            { paso: "% ionizacion = [H+] / C x 100 = 3,16 x 10^-4 / 8,79 x 10^-4 x 100.", porque: "El porcentaje de ionizacion mide que fraccion del acido total se disocio, y se calcula como x/C multiplicado por 100. Usamos [H+] = 3,16 x 10^-4 M y C = 8,79 x 10^-4 M para obtener 3,16 x 10^-4 / 8,79 x 10^-4 x 100 = 36,0 %. Ese valor expresa cuan debil es el acido en esa solucion. Verificamos que se use la concentracion total C calculada." },
            { paso: "Se toma [HCOO-] = [H+] (se desprecia la ionizacion del agua).", porque: "Cada molecula de HCOOH que se disocia produce un ion HCOO- y un H+, por la relacion 1:1 de la ecuacion. Por eso tomamos [HCOO-] = [H+] = 3,16 x 10^-4 M. Como se desprecia la ionizacion del agua, el aporte de H+ del agua es muy pequeno frente a ese valor, y el desprecio es valido. Verificamos esta comparacion antes de aceptar la aproximacion." }
          ],
          resultado: "≈ 36,0 % de ionizacion"
        },
        {
          parte: "d)",
          pasos: [
            { paso: "Para tener el mismo pH (3,5) con HCl, que es un acido fuerte y se ioniza totalmente, [H+] = [HCl].", porque: "El HCl es un acido fuerte que se disocia totalmente en agua, asi que cada mol de HCl libera un mol de H+. Como el pH depende solo de la [H+], basta igualar esa concentracion con la del acido formico para tener pH 3,5. Por eso tratamos al HCl como acido fuerte y no como debil. Verificamos esa clasificacion antes de seguir." },
            { paso: "[HCl] = 10^-3,5 = 3,16 x 10^-4 M.", porque: "Con pH = -log[H+], la concentracion de H+ es 10^-pH, y como el HCl aporta H+ en proporcion 1:1, [HCl] es igual a ese valor. Calculamos [HCl] = 10^-3,5 = 3,16 x 10^-4 M. Este calculo directo es posible porque no hay equilibrio que resolver. Verificamos que el resultado sea 3,16 x 10^-4 M y no la concentracion minima del acido formico." },
            { paso: "Justificacion: no se usa Ka porque el HCl no tiene equilibrio de disociacion apreciable.", porque: "Un acido fuerte cede todo su H+ en agua, por lo que no existe un equilibrio de disociacion que describir con Ka. Por eso la constante no interviene y la concentracion sale directamente del pH. Como el enunciado pide justificar el razonamiento, conviene escribir esta justificacion en el examen." }
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
            { paso: "Ejes: presion (eje vertical) y temperatura (eje horizontal).", porque: "El diagrama de fases P-T es la convencion usual para representar las fases de una sustancia pura. Ubicamos la presion en el eje vertical y la temperatura en el horizontal, porque la presion determina en que estado queda la sustancia a cada temperatura. Entonces conviene fijar los ejes antes de marcar los puntos caracteristicos. Verificamos que cada punto quede en la posicion correcta." },
            { paso: "Punto triple (5,2 atm, -56,4 C): coexisten solido, liquido y vapor. Punto critico (73 atm, 31,1 C): por encima de el no hay distincion liquido-gas.", porque: "Como el punto triple es donde coexisten solido, liquido y vapor, lo ubicamos con los datos del enunciado: 5,2 atm y -56,4 C. El punto critico, con 73 atm y 31,1 C, marca el final de la curva liquido-vapor. Por encima de esa temperatura no hay distincion entre liquido y gas. Verificamos que los valores de P y T correspondan a cada punto." },
            { paso: "Curva de sublimacion: une el punto triple con (1 atm, -78 C), separa solido y gas por debajo de 5,2 atm.", porque: "La curva de sublimacion separa solido y gas, y sobre ella coexisten ambas fases. La trazamos desde el punto triple hasta el punto de sublimacion normal, (1 atm, -78 C), porque por debajo de la presion del punto triple no existe liquido. Entonces el solido pasa directamente a gas por esa curva. Verificamos que la curva pase por el punto de sublimacion normal a 1 atm." },
            { paso: "Curva de fusion: sube desde el punto triple con pendiente positiva, pasa por (50 atm, -54 C).", porque: "La curva de fusion separa solido y liquido, y arranca en el punto triple. Usamos el dato de 50 atm, -54 C, como punto de control para trazarla, y su pendiente positiva se interpreta con la ecuacion de Clapeyron. Como la pendiente es positiva, el liquido ocupa mas volumen que el solido. Verificamos que la pendiente sea positiva, porque de ella depende la respuesta del item (iii)." },
            { paso: "Curva de vaporizacion: une el punto triple con el punto critico, pasa por (50 atm, 15 C).", porque: "Como la curva de vaporizacion separa liquido y vapor y termina en el punto critico, la trazamos desde el punto triple, pasando por el dato de 50 atm, 15 C, que da un punto de control para la curva. Por encima del punto critico no hay distincion entre fases. Verificamos que la curva llegue al punto critico." },
            { paso: "Zonas: solido (alta presion, baja temperatura), liquido (entre fusion y vaporizacion), gas (baja presion), y zona supercritica (por encima del punto critico).", porque: "Usamos la idea de que cada zona representa la fase estable para un rango de presion y temperatura, y las curvas son las fronteras entre ellas. Asignamos solido a alta presion y baja temperatura, liquido entre fusion y vaporizacion, gas a baja presion, y la zona supercritica por encima de 73 atm y 31,1 C. Verificamos que las zonas queden bien delimitadas por las curvas antes de rotularlas." }
          ],
          resultado: "Diagrama cualitativo con punto triple, punto critico, curvas de sublimacion, fusion y vaporizacion, y zonas solido, liquido, gas y supercritica"
        },
        {
          parte: "b)",
          pasos: [
            { paso: "(i) A 1 atm y 25 C la temperatura esta por encima de la de sublimacion (-78 C) y la presion esta por debajo de 5,2 atm: el CO2 es gas.", porque: "Ubicamos el punto (1 atm, 25 C) en el diagrama para ver en que zona cae. Como 1 atm esta por debajo de la presion del punto triple, 5,2 atm, no puede haber liquido, y la temperatura esta por encima de la curva de sublimacion. Entonces la fase estable es el gas. Verificamos primero la presion, porque ella decide si hay liquido." },
            { paso: "(ii) Para que haya liquido la presion tiene que superar la del punto triple, 5,2 atm. Por debajo de ese valor el solido solo sublima.", porque: "Como la presion minima para que el CO2 funda es la del punto triple, 5,2 atm, la curva de fusion existe solo por encima de esa presion. Por debajo de ese valor el solido solo sublima, sin pasar por el liquido. Verificamos que el dato corresponda al punto triple y no al punto critico, que es de 73 atm." },
            { paso: "(iii) La curva de fusion tiene pendiente positiva, lo que implica que el volumen aumenta al fundir (el liquido ocupa mas volumen que el solido). El solido es mas denso y se hunde. No flota, a diferencia del agua.", porque: "La pendiente de la curva de fusion se interpreta con la ecuacion de Clapeyron, y su signo depende del cambio de volumen al fundir. Como la pendiente es positiva, el liquido ocupa mas volumen que el solido, asi que el solido es mas denso y se hunde. El agua tiene el comportamiento contrario, con pendiente negativa, por eso el hielo flota. Entonces el CO2 solido no flota." },
            { paso: "(iv) A presion constante de 50 atm: solido desde -70 C hasta -54 C; al llegar a -54 C funde (solido + liquido); liquido desde -54 C hasta 15 C; a 15 C hierve (liquido + vapor); luego vapor (gas) hasta 30 C. Como 30 C < 31,1 C y la presion es 50 atm, el estado final es vapor.", porque: "Recorremos el diagrama a presion constante de 50 atm: primero cruzamos la curva de fusion en -54 C y luego la de vaporizacion en 15 C, pasando por solido, liquido y vapor. La temperatura inicial es -70 C, y la final es 30 C. Como 30 C esta por debajo de 31,1 C y la presion es 50 atm, no llegamos a la zona supercritica, porque la presion critica es 73 atm. Verificamos que la temperatura final quede por debajo de la critica." }
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
            { paso: "CH3OH(l) + 3/2 O2(g) -> CO2(g) + 2 H2O(l).", porque: "Escribimos la combustion completa del metanol liquido con oxigeno, con CO2 y H2O como productos. El carbono pasa a CO2, el hidrogeno a H2O y el oxigeno se ajusta con 3/2 O2. Por eso la ecuacion termoquimica es CH3OH(l) + 3/2 O2(g) -> CO2(g) + 2 H2O(l). Verificamos el balance de oxigeno, porque es donde mas se equivoca." },
            { paso: "ΔHcomb = [ΔH°f(CO2) + 2 ΔH°f(H2O)] - ΔH°f(CH3OH) = [-393 + 2(-285)] - (-238) = -963 + 238 = -725 kJ/mol.", porque: "La ley de Hess permite calcular la entalpia de combustion a partir de las entalpias de formacion tabuladas, sin medirla directamente. Usamos ΔH°f(CO2) = -393 kJ/mol y ΔH°f(H2O) = -285 kJ/mol multiplicado por 2, menos ΔH°f(CH3OH) = -238 kJ/mol. Entonces ΔHcomb = -963 + 238 = -725 kJ/mol. Conviene verificar el doble signo que aparece al restar el valor negativo del metanol." }
          ],
          resultado: "ΔHcomb = -725 kJ/mol"
        },
        {
          parte: "b)",
          pasos: [
            { paso: "n(CH3OH) = 100 g / 32 g/mol = 3,125 mol.", porque: "Calculamos cuantos moles hay en 100 g dividiendo la masa por la masa molar, porque la entalpia de combustion esta dada por mol. Usamos n = 100 g / 32 g/mol = 3,125 mol. Este paso convierte el dato de masa en la cantidad de sustancia que se quema. Verificamos que la masa molar sea 32 g/mol." },
            { paso: "ΔH (100 g) = 3,125 x (-725) = -2265,6 kJ. Este es el calor a presion constante: q = -2265,6 kJ (liberado).", porque: "La entalpia es el calor a presion constante, y como la combustion ocurre a 1 atm el calor intercambiado es igual a ΔH. Multiplicamos los moles por la entalpia molar: 3,125 x (-725) kJ/mol = -2265,6 kJ. Entonces q = -2265,6 kJ, y el signo negativo indica que el sistema libera calor. Verificamos que el calor quede en kJ y con signo negativo." },
            { paso: "Δn gas por mol de combustible = 1 - 1,5 = -0,5. Para 100 g: Δn = -0,5 x 3,125 = -1,5625 mol.", porque: "Usamos Δn como los moles de gas de los productos menos los de los reactivos, por mol de combustible. El CO2 es el unico gas de los productos y el O2 el unico de los reactivos, asi que Δn = 1 - 1,5 = -0,5 por mol. Luego multiplicamos por los moles de metanol de 100 g: -0,5 x 3,125 = -1,5625 mol. Verificamos que el agua liquida no se cuente." },
            { paso: "Trabajo: w = -PΔV = -Δn RT = -(-1,5625)(8,31 x 10^-3 kJ/mol.K)(298 K) = +3,87 kJ (lo recibe el sistema por la contraccion de volumen).", porque: "El trabajo de expansion a presion constante es w = -PΔV, y para gases ideales PΔV = Δn RT, asi que w = -Δn RT. Como Δn es negativo, el volumen disminuye y el sistema recibe trabajo, con signo positivo. Reemplazamos Δn = -1,5625 mol, R = 8,31 x 10^-3 kJ/mol.K y T = 298 K para obtener w = +3,87 kJ. Verificamos que R este en kJ/mol.K para que el resultado salga en kJ." },
            { paso: "ΔU = ΔH - Δn RT = -2265,6 - (-1,5625)(2,478) = -2261,7 kJ. Verificacion: q + w = -2265,6 + 3,87 = -2261,7 kJ.", porque: "Usamos la primera ley, ΔU = q + w, y como ΔH = ΔU + PΔV se obtiene ΔU = ΔH - Δn RT. Reemplazamos ΔH = -2265,6 kJ y -Δn RT = -(-1,5625)(2,478) para obtener ΔU = -2261,7 kJ. Verificamos con q + w = -2265,6 + 3,87 = -2261,7 kJ, que confirma que ambos caminos dan el mismo resultado. Conviene chequear el signo del termino Δn RT, que es facil de invertir." }
          ],
          resultado: "ΔH = -2265,6 kJ; ΔU = -2261,7 kJ; q = -2265,6 kJ; w = +3,87 kJ"
        },
        {
          parte: "c)",
          pasos: [
            { paso: "Calor transferido al cereal: Q = 2265,6 kJ (suposicion: el calor de combustion es el calor transferido).", porque: "Como el enunciado no indica otra perdida que la del 10% al final, suponemos que todo el calor de combustion llega al cereal. Tomamos Q = 2265,6 kJ y aplicamos sobre esa energia total los porcentajes del enunciado. Verificamos que se use el valor absoluto, porque es el calor que se transfiere." },
            { paso: "15% para calentar el cereal humedo de 25 a 100 C: 0,15 x 2265,6 kJ = 339,8 kJ = m x 4,18 J/g.C x 75 C, entonces m(humedo) = 339 840 J / 313,5 J/g = 1084 g. Suposicion: se usa el cp del agua como cp del cereal humedo, porque es el unico dato dado.", porque: "Para calentar sin cambio de fase usamos q = m cp ΔT, donde cp es el calor especifico y ΔT el cambio de temperatura, de 25 a 100 C, es decir 75 C. Con 0,15 x 2265,6 kJ = 339,8 kJ despejamos m = 339 840 J / (4,18 J/g.C x 75 C) = 1084 g. Usamos el cp del agua porque es el unico dato disponible, lo que supone que el cereal humedo se comporta como agua. Verificamos que la energia este en J para que las unidades cierren." },
            { paso: "75% para vaporizar agua: 0,75 x 2265,6 kJ = 1699,2 kJ. n(H2O evaporada) = 1699,2 / 40,626 = 41,82 mol = 752,8 g.", porque: "En el cambio de fase la temperatura queda constante y el calor es n x ΔHvap, asi que los moles de agua evaporada salen de dividir la energia por la entalpia de vaporizacion. Calculamos 0,75 x 2265,6 kJ = 1699,2 kJ, y luego n = 1699,2 / 40,626 = 41,82 mol de H2O. Con M(H2O) = 18 g/mol pasamos a gramos y obtenemos 752,8 g. Verificamos que la energia usada sea el 75% y no el 15%." },
            { paso: "10% se pierde al ambiente (no interviene en el balance de masa).", porque: "Las perdidas al ambiente son energia que sale del sistema y no cambian la masa de agua ni de cereal. Por eso el 10% no entra en el balance de masa, y solo se usa para verificar el balance de energia. Entonces 15% + 75% + 10% suman el 100% del calor transferido. Recordamos que esta perdida ocurre al abandonar el cereal como vapor a 100 C." },
            { paso: "Masa de cereal seco = 1084 g - 752,8 g = 331 g. Control: 30% de 1084 g = 325 g, diferencia de 2% por redondeo y por la suposicion de cp.", porque: "El balance de masa dice que la masa de cereal seco es la masa humeda inicial menos el agua evaporada. Usamos 1084 g - 752,8 g = 331 g, y el agua que queda es la residual. Por eso el resultado puede diferir levemente del 30% de humedad restante, que da 325 g. Verificamos que la resta use la masa humeda calculada y los gramos de agua evaporada." }
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
            { paso: "A mayor Ka, mayor acidez: HClO2 (1,0 x 10^-2) > HF (3,5 x 10^-4) > C6H5COOH (6,5 x 10^-5) > HCN (4,9 x 10^-10).", porque: "La Ka mide cuanto se ioniza un acido debil en equilibrio: a mayor Ka, mayor concentracion de H+ y mas fuerte es el acido. Por eso el orden de acidez se obtiene comparando directamente los valores de Ka: HClO2 (1,0 x 10^-2) > HF (3,5 x 10^-4) > C6H5COOH (6,5 x 10^-5) > HCN (4,9 x 10^-10). Verificamos que se compare Ka y no pKa, porque con pKa el orden se invierte." }
          ],
          resultado: "HClO2 > HF > C6H5COOH > HCN"
        },
        {
          parte: "b)",
          pasos: [
            { paso: "A igual concentracion, el acido con mayor Ka se ioniza mas y produce mas H+.", porque: "Como la comparacion se hace con la misma concentracion inicial, la [H+] depende de Ka: el acido con mayor Ka alcanza un equilibrio con mas iones H+. Eso se traduce en un pH menor. Conviene recordar que esta comparacion vale solo a igual concentracion." },
            { paso: "Por lo tanto el de menor pH es el HClO2.", porque: "El pH es -log[H+], asi que mas H+ implica menor pH. El HClO2 tiene la Ka mas grande de los cuatro acidos, 1,0 x 10^-2, y por eso produce mas H+. Entonces el de menor pH es el HClO2. Verificamos que se compare el mismo tipo de acido y la misma concentracion." }
          ],
          resultado: "HClO2"
        },
        {
          parte: "c)",
          pasos: [
            { paso: "Balance de carga: [H+] = [CN-] + [OH-].", porque: "Usamos el balance de carga, que expresa que la solucion es electricamente neutra: los cationes (H+) igualan a los aniones (CN- y OH-). Lo escribimos como [H+] = [CN-] + [OH-], e incluimos el OH- que proviene del agua para no omitirlo sin verificar si es despreciable. Verificamos que cada ion tenga su carga correcta." },
            { paso: "Balance de masa: C = 0,1 M = [HCN] + [CN-].", porque: "Usamos el balance de masa, que conserva el numero de moles de cianuro proveniente del HCN disuelto. Con la concentracion total C = 0,1 M repartimos la concentracion entre la forma sin disociar y la forma ionizada: C = [HCN] + [CN-]. Verificamos que la suma de ambas sea igual a 0,1 M." },
            { paso: "Ka = [H+][CN-] / [HCN]. Suposiciones: [H+] = [CN-] (se desprecia [OH-]) y [HCN] ≈ C = 0,1 M.", porque: "Es la expresion de la constante de acidez para el equilibrio HCN -> H+ + CN-, escrita con las concentraciones de equilibrio. Como suponemos [H+] = [CN-] y [HCN] ≈ C = 0,1 M, la expresion se reduce a una ecuacion de una sola incognita. Usamos Ka = 4,9 x 10^-10 para despejar [H+]. Verificamos luego que las suposiciones sean validas." },
            { paso: "[H+]^2 = Ka x C = 4,9 x 10^-10 x 0,1 = 4,9 x 10^-11, entonces [H+] = 7,0 x 10^-6 M.", porque: "Despejamos [H+]^2 = Ka x C de la ecuacion de Ka aproximada, lo que da una formula directa para acidos debiles. Calculamos Ka x C = 4,9 x 10^-10 x 0,1 = 4,9 x 10^-11, y luego tomamos la raiz para obtener [H+] = 7,0 x 10^-6 M. Esta formula es valida cuando la disociacion es pequena frente a C, y ese supuesto lo verificamos al final. Conviene calcular el producto antes de tomar la raiz." },
            { paso: "pH = -log(7,0 x 10^-6) = 5,15.", porque: "El pH se define como -log[H+], asi que tomamos el logaritmo decimal de [H+] = 7,0 x 10^-6 M. Calculamos pH = -log(7,0 x 10^-6) = 5,15. Verificamos que la calculadora use logaritmo en base 10 y que el signo del resultado sea correcto." },
            { paso: "Verificacion: [OH-] = Kw / [H+] = 1,4 x 10^-9 M, es despreciable frente a 7,0 x 10^-6 M. x / C = 7,0 x 10^-5, menor que 5%, asi que [HCN] ≈ 0,1 M es valido. Resolviendo sin aproximar, [H+] queda igual a 7,0 x 10^-6 M.", porque: "Verificamos los desprecios: el OH- del agua debe ser despreciable frente al H+, y la disociacion x debe ser pequena frente a C. Con [OH-] = Kw / [H+] = 1,4 x 10^-9 M y x / C = 7,0 x 10^-5, menor que 5%, ambos criterios se cumplen. Por eso la aproximacion es valida y [H+] = 7,0 x 10^-6 M se acepta. Conviene mostrar el calculo de las dos comparaciones." }
          ],
          resultado: "pH = 5,15"
        },
        {
          parte: "d)",
          pasos: [
            { paso: "Bases conjugadas: HCN -> CN-; C6H5COOH -> C6H5COO- (benzoato); HF -> F-; HClO2 -> ClO2- (clorito).", porque: "La base conjugada de un acido HA es A-, la especie que queda al perder un H+. Por eso quitamos un H a cada acido: HCN -> CN-, C6H5COOH -> C6H5COO-, HF -> F- y HClO2 -> ClO2-. Verificamos que la carga sea la correcta: cada base tiene una unidad negativa mas que su acido, que es neutro." },
            { paso: "Kb = Kw / Ka: CN- 2,0 x 10^-5; C6H5COO- 1,5 x 10^-10; F- 2,9 x 10^-11; ClO2- 1,0 x 10^-12.", porque: "Para un par acido-base conjugado se cumple Ka x Kb = Kw, por lo que Kb = Kw / Ka. Calculamos cada Kb dividiendo Kw por la Ka de su acido: CN- 2,0 x 10^-5, C6H5COO- 1,5 x 10^-10, F- 2,9 x 10^-11 y ClO2- 1,0 x 10^-12. Verificamos que Kw tenga el valor que corresponde a la temperatura de trabajo." },
            { paso: "Mayor a menor basicidad: la base conjugada del acido mas debil es la mas fuerte.", porque: "Una base es mas fuerte cuanto mayor es su Kb. Como Kb = Kw / Ka, el acido mas debil, con Ka chica, tiene la base conjugada mas fuerte. Por eso ordenamos de mayor a menor Kb: CN- > C6H5COO- > F- > ClO2-, que es el inverso del orden de acidez. Verificamos que el orden quede de mayor a menor Kb." }
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
            { paso: "Por estequiometria: n(CH3COOH) = 2 x 6,66 mol = 13,32 mol.", porque: "La estequiometria relaciona los moles de acido con los de CO2 usando la ecuacion balanceada: 2 mol de acido por cada mol de CO2. Con 6,66 mol de CO2 calculamos n(CH3COOH) = 2 x 6,66 mol = 13,32 mol. Por eso el acido consumido es el doble del CO2 formado. Verificamos el coeficiente 2 antes de multiplicar." },
            { paso: "m(CH3COOH puro) = 13,32 mol x 60 g/mol = 799,2 g.", porque: "Con n = m/M pasamos los moles a gramos multiplicando por la masa molar del acido, que se obtiene sumando los atomos de C2H4O2. Usamos 13,32 mol x 60 g/mol = 799,2 g, que es la masa de acido puro que reacciono. Verificamos que la formula y el conteo de atomos esten bien hechos." },
            { paso: "m(solucion) = 799,2 g / 0,95 = 841,3 g.", porque: "La concentracion m/m indica que el 95% de la masa de la solucion es acido puro, por eso la masa de solucion es la del acido dividida por 0,95. Calculamos m(solucion) = 799,2 g / 0,95 = 841,3 g. Es la definicion de porcentaje en masa, con la masa de soluto sobre la masa total. Verificamos que se divida y no se multiplique." },
            { paso: "V(solucion) = 841,3 g / 1,05 g/mL = 801 mL = 0,801 L.", porque: "Usamos la densidad, que relaciona masa y volumen: d = m/V, y de ahi V = m/d. Con la masa de solucion de 841,3 g y la densidad de 1,05 g/mL obtenemos V = 841,3 g / 1,05 g/mL = 801 mL. Ese volumen se pasa a litros, 0,801 L. Verificamos que las unidades de densidad sean g/mL." }
          ],
          resultado: "V(solucion) ≈ 801 mL (0,801 L)"
        },
        {
          parte: "b)",
          pasos: [
            { paso: "m(CaCO3 puro) = 850 g x 0,81 = 688,5 g. n = 688,5 / 100 = 6,885 mol.", porque: "La pureza indica la fraccion de CaCO3 real que hay en los 850 g de muestra, asi que la masa pura es 850 x 0,81. Calculamos m(CaCO3 puro) = 688,5 g y luego n = 688,5 / 100 = 6,885 mol con la masa molar del CaCO3. Verificamos que se descuente la pureza antes de calcular los moles." },
            { paso: "Por estequiometria, 6,66 mol de CO2 requieren 6,66 mol de CaCO3 y 13,32 mol de acido.", porque: "Usamos la ecuacion balanceada, que fija la relacion 1:1 entre CaCO3 y CO2, y 2:1 entre acido y CO2. Con esas relaciones calculamos cuanto CaCO3 y cuanto acido se necesitan para producir 6,66 mol de CO2: 6,66 mol de CaCO3 y 13,32 mol de acido. Verificamos que se usen los coeficientes de la ecuacion balanceada." },
            { paso: "El acido es el limitante: se consume por completo (13,32 mol) y el CaCO3 disponible (6,885 mol) es mayor que lo que reacciona (6,66 mol).", porque: "Comparamos cuanto CaCO3 requiere el acido disponible con cuanto acido requiere el CaCO3. Como cada mol de CaCO3 consume 2 mol de acido, el CaCO3 disponible pediria mas acido del que hay. Por eso el acido se consume por completo y es el limitante, mientras el CaCO3 disponible, 6,885 mol, queda en exceso. Verificamos la comparacion con los coeficientes de la ecuacion." },
            { paso: "Suposicion: el acido de la parte a) es todo el acido que reacciona, es decir se consume totalmente.", porque: "El enunciado fija 6,66 mol de CO2 como resultado de la reaccion, y ese valor determina cuanto acido se consume, calculado en a). Por eso el acido de a) se toma como el que reacciona por completo. Esta es la base del calculo del exceso. Conviene dejar explicita esta hipotesis." },
            { paso: "CaCO3 sin reaccionar = 6,885 - 6,66 = 0,225 mol.", porque: "Por balance de materia, lo que queda sin reaccionar es lo disponible menos lo consumido. Como el consumo de CaCO3 es 1:1 con el CO2 formado, calculamos 6,885 mol - 6,66 mol = 0,225 mol. Entonces sobran 0,225 mol de CaCO3. Verificamos que el resultado sea el exceso en moles y no en gramos." }
          ],
          resultado: "Limitante: acido acetico. Quedan sin reaccionar 0,225 mol de CaCO3 (reactivo en exceso)"
        },
        {
          parte: "c)",
          pasos: [
            { paso: "CH3COOH: H-C(H)(H)-C(=O)-O-H (C del grupo carboxilo con doble enlace a O y enlace simple a OH). Molecula covalente con puentes de hidrogeno entre moleculas.", porque: "En la estructura de Lewis del acido, el carbono del grupo carboxilo forma un doble enlace con un O y un enlace simple con el O-H, completando el octeto. Por eso la molecula es covalente, y el H unido al O permite formar puentes de hidrogeno entre moleculas. Verificamos que el C tenga 4 enlaces en total y que el O-H este presente." },
            { paso: "CaCO3: compuesto ionico. Ca2+ y el ion carbonato [O=C(-O-)(-O-)]2-, con resonancia entre las tres formas de Lewis. Red ionica.", porque: "El calcio es un metal que cede electrones al anion carbonato, un poliatomico, y la union entre Ca2+ y CO3 2- es ionica. Usamos la resonancia entre las tres formas de Lewis, que reparte la carga entre los tres oxigenos y estabiliza el ion. Entonces el CaCO3 forma una red ionica. Verificamos que el carbonato tenga carga 2- y no se dibuje como molecula." },
            { paso: "Los compuestos ionicos tienen fuerzas electrostaticas mucho mas intensas que los puentes de hidrogeno, por eso el CaCO3 tiene el mayor punto de fusion (en la practica se descompone antes de fundir, a alta temperatura).", porque: "Las fuerzas intermoleculares determinan el punto de fusion: las atracciones ion-ion de una red son mucho mas intensas que los puentes de hidrogeno, y requieren mas energia para romperse. Por eso el CaCO3 tiene el mayor punto de fusion, frente al acido acetico. Conviene recordar que en la practica el CaCO3 se descompone antes de fundir, pero el criterio de comparacion es el mismo." }
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
            { paso: "M(C8H10) = 8 x 12 + 10 x 1 = 106 g/mol.", porque: "Calculamos la masa molar sumando las masas atomicas: 8 atomos de C y 10 atomos de H. Con 8 x 12 + 10 x 1 = 106 g/mol convertimos el dato por gramo en un dato por mol. Verificamos que la suma de 106 g/mol este bien hecha." },
            { paso: "ΔHcomb = -43,0 kJ/g x 106 g/mol = -4558 kJ/mol.", porque: "El dato esta dado por gramo, y para pasarlo a kJ/mol multiplicamos por la masa molar. Calculamos ΔHcomb = -43,0 kJ/g x 106 g/mol = -4558 kJ/mol. Como es calor liberado, el signo es negativo. Verificamos que el resultado tenga la magnitud de miles de kJ por mol, que es lo esperable para un combustible." },
            { paso: "Ecuacion: C8H10(l) + 21/2 O2(g) -> 8 CO2(g) + 5 H2O(l), ΔH = -4558 kJ/mol.", porque: "Usamos el balance de atomos para la combustion completa: 8 C dan 8 CO2, 10 H dan 5 H2O y el O se ajusta con 21/2 O2 para igualar los 21 atomos de O. Escribimos la ecuacion C8H10(l) + 21/2 O2(g) -> 8 CO2(g) + 5 H2O(l), con ΔH = -4558 kJ/mol para un mol de combustible. Conviene verificar que el coeficiente fraccionario se conserve en la ecuacion." }
          ],
          resultado: "ΔHcomb = -4558 kJ/mol"
        },
        {
          parte: "b)",
          pasos: [
            { paso: "Hess: ΔHcomb = [8 ΔHf(CO2) + 5 ΔHf(H2O)] - ΔHf(C8H10); ΔHf(O2) = 0.", porque: "Usamos la ley de Hess, que aplicada a la combustion relaciona la entalpia de combustion con las formaciones de productos y reactivos. El O2 vale 0 porque es un elemento en su forma estandar. Con esa relacion despejamos la formacion del xileno: ΔHcomb = [8 ΔHf(CO2) + 5 ΔHf(H2O)] - ΔHf(C8H10). Verificamos que los coeficientes sean los de la ecuacion balanceada." },
            { paso: "8 x (-393,5) + 5 x (-286,0) = -3148 - 1430 = -4578 kJ.", porque: "Dado que cada entalpia de formacion se multiplica por su coeficiente, sumamos: 8 veces la del CO2 y 5 veces la del H2O. Con 8 x (-393,5) + 5 x (-286,0) = -3148 - 1430 = -4578 kJ obtenemos la contribucion de los productos. Esa suma es el termino que usamos en la ecuacion de Hess. Verificamos que cada termino conserve su signo negativo." },
            { paso: "-4558 = -4578 - ΔHf(C8H10), entonces ΔHf(C8H10) = -4578 + 4558 = -20 kJ/mol.", porque: "Usamos la ecuacion de Hess y reemplazamos la entalpia de combustion, -4558 kJ/mol, para despejar ΔHf(C8H10). Pasamos el termino de los productos al otro lado: ΔHf(C8H10) = -4578 + 4558 = -20 kJ/mol. El resultado queda en kJ/mol, y su signo indica si la formacion es exotermica o endotermica. Verificamos que la resta se haga con cuidado de los signos." }
          ],
          resultado: "ΔHf(C8H10, l) = -20 kJ/mol"
        },
        {
          parte: "c)",
          pasos: [
            { paso: "Por la ecuacion, 1 mol de xileno produce 8 mol de CO2 (unico gas; el agua es liquida).", porque: "Por la ecuacion balanceada, cada mol de xileno produce 8 mol de CO2 como unico gas, porque el agua es liquida. Solo los gases ocupan volumen apreciable en CNPT, por eso el agua no entra en el calculo. Entonces el gas a considerar es el CO2. Verificamos que el H2O no se cuente como gas." },
            { paso: "V = 8 mol x 22,4 L/mol = 179,2 L en CNPT.", porque: "En CNPT un mol de gas ideal ocupa 22,4 L, por lo que el volumen es el numero de moles de CO2 por ese valor. Calculamos V = 8 mol x 22,4 L/mol = 179,2 L en CNPT. Esta relacion surge de PV = nRT en esas condiciones. Verificamos que se usen los 8 mol de CO2 y no los 5 mol de H2O." },
            { paso: "Suposicion: se toma el volumen correspondiente a 1 mol de xileno (la ecuacion de a). Si se refiere a 1 g: 8/106 mol x 22,4 L/mol = 1,69 L.", porque: "Como el enunciado no aclara la base del volumen, tomamos 1 mol de xileno, que es la referencia de la ecuacion de a). Para expresar el resultado por gramo dividimos por 106 g/mol y multiplicamos por 8 mol de CO2: 8/106 mol x 22,4 L/mol = 1,69 L. Conviene informar ambas bases para evitar confusiones." }
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
            { paso: "BOH es una base fuerte: se disocia totalmente, [OH-] = C de la base.", porque: "Una base fuerte se disocia totalmente en agua, asi que la concentracion de OH- es igual a la de la base. Por eso el pOH sale directamente de la concentracion de BOH, sin necesidad de resolver un equilibrio. Verificamos que la base sea fuerte, porque si fuera debil la relacion no seria esa." },
            { paso: "Al agregar agua, la concentracion de BOH y de OH- disminuye, asi que el pOH aumenta y el pH baja, acercandose a 7 pero sin llegar a superarlo ni a ser 7.", porque: "Al diluir disminuye la concentracion de OH-, y como pOH = -log[OH-] el pOH sube y el pH baja. Como pH y pOH suman un valor fijo, el pH se acerca a 7 pero no lo alcanza mientras la base siga aportando OH- en exceso sobre el agua. Por eso el pH disminuye al agregar agua. Recordamos que el agua pura es neutra." }
          ],
          resultado: "El pH disminuye (se acerca a 7)"
        },
        {
          parte: "b)",
          pasos: [
            { paso: "NaNO3: sal de acido fuerte (HNO3) y base fuerte (NaOH); no se hidroliza, pH ≈ 7.", porque: "Una sal de acido fuerte y base fuerte no se hidroliza, porque ni el anion nitrato ni el cation sodio reaccionan con el agua. Por eso la solucion queda neutra, con pH cercano a 7. Verificamos el origen de la sal antes de clasificarla, porque de eso depende si hay hidrolisis." },
            { paso: "HNO3: acido fuerte, se disocia totalmente, pH < 7.", porque: "Como el HNO3 es un acido fuerte que cede todo su H+ en agua, [H+] es igual a la concentracion del acido. Esto da un pH menor que 7, y es el que mas acidifica la solucion de los tres. Verificamos que el acido se trate como fuerte." },
            { paso: "KOH: base fuerte, pH > 7.", porque: "El KOH es una base fuerte que libera totalmente OH- en agua. Por eso el pOH es menor que 7 y el pH mayor que 7. Verificamos que el pH resultante sea mayor que 7 y no menor, porque eso determina su lugar en el orden." },
            { paso: "Menor a mayor acidez: KOH < NaNO3 < HNO3.", porque: "Menor pH implica mayor acidez, asi que el orden de acidez es el inverso del orden de pH. Ordenamos: KOH (pH > 7) es el menos acido, NaNO3 (pH 7) el intermedio y HNO3 (pH < 7) el mas acido. Por eso el orden de menor a mayor acidez es KOH < NaNO3 < HNO3. Conviene escribir el orden explicitamente." }
          ],
          resultado: "KOH < NaNO3 < HNO3"
        },
        {
          parte: "c)",
          pasos: [
            { paso: "pOH = 14 - 11,65 = 2,35, entonces [OH-] = 10^-2,35 = 4,47 x 10^-3 M.", porque: "Como pH + pOH = 14, el pOH se obtiene restando el pH de 14. Usamos pH = 11,65 para calcular pOH = 14 - 11,65 = 2,35, y de ahi [OH-] = 10^-2,35 = 4,47 x 10^-3 M. Este paso convierte el dato de pH en la concentracion de la base. Verificamos que la potencia de diez sea negativa." },
            { paso: "Metilamina: CH3NH2 + H2O <=> CH3NH3+ + OH-. Kb = [CH3NH3+][OH-] / [CH3NH2].", porque: "Como la metilamina es una base debil, escribimos la expresion de equilibrio de su reaccion con el agua: CH3NH2 + H2O <=> CH3NH3+ + OH-. Usamos Kb = [CH3NH3+][OH-] / [CH3NH2], con concentraciones de equilibrio y sin incluir el agua, que es el solvente. De esta constante sale el pKb pedido. Verificamos que los productos esten en el numerador y el reactivo en el denominador." },
            { paso: "Balance de carga: [CH3NH3+] = [OH-] (se desprecia el OH- del agua, 10^-7 M). Balance de masa: [CH3NH2] = 0,045 - 4,47 x 10^-3 = 0,0405 M.", porque: "Por electroneutralidad, la concentracion del ion metilamonio es igual a la de OH-, porque son los unicos iones relevantes. Entonces [CH3NH3+] = [OH-] = 4,47 x 10^-3 M, despreciando el OH- del agua. El balance de masa indica que lo ionizado sale de la concentracion inicial: [CH3NH2] = 0,045 - 4,47 x 10^-3 = 0,0405 M. Verificamos que el OH- del agua sea despreciable." },
            { paso: "Kb = (4,47 x 10^-3)^2 / 0,0405 = 4,92 x 10^-4.", porque: "Calculamos Kb con las concentraciones de equilibrio: Kb = (4,47 x 10^-3)^2 / 0,0405 = 4,92 x 10^-4. Es la forma exacta, que usa x^2 / (C - x) y permite no despreciar x. Verificamos que lo que se eleva al cuadrado sea el OH- y no el valor de C." },
            { paso: "Suposicion: no se desprecia x porque x/C ≈ 10%; si se despreciara, Kb = 4,43 x 10^-4 y pKb = 3,35.", porque: "Como x/C es cercano al 10%, la aproximacion C - x ≈ C no es confiable del todo, por eso usamos la expresion completa. Si se despreciara, Kb = 4,43 x 10^-4 y pKb = 3,35, valor que se informa solo como comparacion del error. Conviene aclarar esta consideracion en el informe." },
            { paso: "pKb = -log(4,92 x 10^-4) = 3,31.", porque: "Por analogia con pKa, pKb = -log Kb, lo que pasa la constante a escala logaritmica. Calculamos pKb = -log(4,92 x 10^-4) = 3,31, que es el valor pedido. Verificamos que el logaritmo se tome sobre el valor de Kb ya calculado." }
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
