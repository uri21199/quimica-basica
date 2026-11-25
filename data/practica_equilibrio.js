window.REPASO_RECU = window.REPASO_RECU || {};

// Práctica de equilibrio químico: 20 ejercicios de dificultad creciente.
window.REPASO_RECU["equilibrio"] = [
  {
    num: 1,
    nivel: "Básico",
    temas: ["equilibrio"],
    enunciado: "Escriba la expresión de Kc para cada uno de los siguientes equilibrios e indique qué especies no aparecen en ella: a) Ni(s) + 4 CO(g) <=> Ni(CO)4(g). Escriba también la expresión de Kp para este mismo equilibrio. b) AgCl(s) <=> Ag^+(ac) + Cl^-(ac). c) HCOOH(ac) + H2O(l) <=> HCOO^-(ac) + H3O^+(ac).",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "$$K_c = \\frac{[\\text{Ni(CO)}_4]}{[\\text{CO}]^4}$$ El $\\text{Ni}(\\text{s})$ no aparece.", porque: "Usamos la ecuación balanceada: el Ni(CO)4 va en el numerador con coeficiente 1, y el CO va en el denominador elevado a 4. El níquel es un sólido puro, su concentración no cambia y por eso no entra en la expresión." },
          { paso: "$$K_p = \\frac{p_{\\text{Ni(CO)}_4}}{p_{\\text{CO}}^4}$$", porque: "Kp tiene la misma forma que Kc, pero usa presiones parciales en atm en lugar de concentraciones. Como el Ni(s) no es gas, tampoco aparece en Kp." }
        ],
        resultado: "$K_c = \\frac{[\\text{Ni(CO)}_4]}{[\\text{CO}]^4}$ y $K_p = \\frac{p_{\\text{Ni(CO)}_4}}{p_{\\text{CO}}^4}$"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "$$K_c = [\\text{Ag}^+][\\text{Cl}^-]$$ El $\\text{AgCl}(\\text{s})$ no aparece.", porque: "El AgCl(s) es un sólido puro y no entra en la expresión. Los iones disueltos son solutos, y sus concentraciones entran con exponente 1 porque los coeficientes son 1." },
          { paso: "No existe $K_p$ para este equilibrio.", porque: "Kp solo se define para especies gaseosas. Aquí todas las especies son sólidas o están disueltas, así que la constante se escribe solo como Kc (en el tema de solubilidad se la llama Kps)." }
        ],
        resultado: "$K_c = [\\text{Ag}^+][\\text{Cl}^-]$"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "$$K_c = \\frac{[\\text{HCOO}^-][\\text{H}_3\\text{O}^+]}{[\\text{HCOOH}]}$$ El $\\text{H}_2\\text{O}(\\text{l})$ no aparece.", porque: "El agua es el solvente, está en exceso y su concentración prácticamente no cambia. Por eso no se incluye en la expresión de Kc. Entonces solo quedan tres especies disueltas." },
          { paso: "Esta expresión es la $K_a$ del ácido fórmico.", porque: "Cuando el disolvente es agua y el equilibrio es de disociación de un ácido débil, la constante de equilibrio se llama Ka. Sirve para comparar la fuerza de distintos ácidos en el tema ácido-base." }
        ],
        resultado: "$K_c = \\frac{[\\text{HCOO}^-][\\text{H}_3\\text{O}^+]}{[\\text{HCOOH}]}$ (es la $K_a$)"
      }
    ],
    errores_tipicos: [
      { error: "Incluir Ni(s) o AgCl(s) en la expresión, por ejemplo escribir [Ni] o [AgCl] en el denominador.", como_evitar: "Los sólidos y líquidos puros tienen concentración constante y no entran en Kc ni en Kp." },
      { error: "Poner [H2O] en la expresión de Kc del ácido débil.", como_evitar: "El solvente en exceso no entra en la expresión. Solo se escriben solutos y gases." },
      { error: "Escribir Kp para el equilibrio de AgCl(s) porque es una constante de equilibrio.", como_evitar: "Kp necesita especies gaseosas. Si no hay gases, la constante se escribe solo como Kc." }
    ]
  },
  {
    num: 2,
    nivel: "Básico",
    temas: ["equilibrio"],
    enunciado: "En un recipiente cerrado de 4,00 L se establece el equilibrio CO(g) + 3 H2(g) <=> CH4(g) + H2O(g). En el equilibrio hay 0,80 mol de CO, 1,20 mol de H2, 0,40 mol de CH4 y 0,40 mol de H2O. Calcule el valor de Kc e indique sus unidades.",
    resolucion: [
      {
        parte: "",
        pasos: [
          { paso: "$$[\\text{CO}] = \\frac{0{,}80\\ \\text{mol}}{4{,}00\\ \\text{L}} = 0{,}20\\ \\text{M};\\quad [\\text{H}_2] = \\frac{1{,}20\\ \\text{mol}}{4{,}00\\ \\text{L}} = 0{,}30\\ \\text{M}$$ $$[\\text{CH}_4] = [\\text{H}_2\\text{O}] = \\frac{0{,}40\\ \\text{mol}}{4{,}00\\ \\text{L}} = 0{,}10\\ \\text{M}$$", porque: "Kc se calcula con concentraciones molares, así que pasamos cada cantidad de moles a mol/L dividiendo por el volumen de 4,00 L. El volumen es el mismo para todas las especies, así que la división se hace igual en todos los casos. Usar moles directamente daría un valor incorrecto." },
          { paso: "$$K_c = \\frac{[\\text{CH}_4][\\text{H}_2\\text{O}]}{[\\text{CO}][\\text{H}_2]^3} = \\frac{(0{,}10)(0{,}10)}{(0{,}20)(0{,}30)^3} = \\frac{0{,}010}{0{,}0054} = 1{,}85\\ \\text{M}^{-2}$$", porque: "Escribimos la expresión con los productos arriba y los reactivos abajo, usando los coeficientes como exponentes. El H2 aparece al cubo porque su coeficiente es 3. Reemplazamos los valores y obtenemos 1,85 M^-2." },
          { paso: "Unidades: $\\text{M}^{-2}$ (o $\\text{L}^2/\\text{mol}^2$).", porque: "El numerador tiene dos concentraciones (M^2) y el denominador tiene cuatro (M^4). Por eso el cociente queda en M^-2. Verificamos que las unidades salgan de la misma expresión que usamos para el cálculo." }
        ],
        resultado: "$K_c = 1{,}85\\ \\text{M}^{-2}$ (L^2/mol^2)"
      }
    ],
    errores_tipicos: [
      { error: "Reemplazar moles directamente en Kc, por ejemplo 0,40 × 0,40 / (0,80 × 1,20^3).", como_evitar: "Dividir cada cantidad por el volumen (4,00 L) antes de calcular Kc." },
      { error: "Olvidar el exponente 3 del H2 y escribir [H2] en lugar de [H2]^3.", como_evitar: "Los exponentes son los coeficientes de la ecuación balanceada: 3 H2 da [H2]^3." },
      { error: "Invertir numerador y denominador (poner reactivos arriba).", como_evitar: "Los productos siempre van en el numerador y los reactivos en el denominador." }
    ]
  },
  {
    num: 3,
    nivel: "Básico",
    temas: ["equilibrio"],
    enunciado: "A 500 K, el equilibrio 2 NO(g) + Cl2(g) <=> 2 NOCl(g) tiene Kc = 2,00 x 10^2 M^-1. a) En un recipiente se mezclan [NO] = 0,50 M, [Cl2] = 0,10 M y [NOCl] = 0,60 M. Calcule Q y prediga hacia dónde evoluciona el sistema. b) En otra mezcla a la misma temperatura, [NO] = 0,10 M, [Cl2] = 0,50 M y [NOCl] = 1,20 M. Indique el sentido en que evoluciona.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "$$Q = \\frac{[\\text{NOCl}]^2}{[\\text{NO}]^2[\\text{Cl}_2]} = \\frac{(0{,}60)^2}{(0{,}50)^2(0{,}10)} = \\frac{0{,}36}{0{,}025} = 14{,}4\\ \\text{M}^{-1}$$", porque: "Q tiene la misma forma que Kc, pero con las concentraciones de la mezcla en ese momento, no con las de equilibrio. Reemplazamos los valores dados, con los exponentes de los coeficientes." },
          { paso: "$Q = 14{,}4\\ \\text{M}^{-1} < K_c = 200\\ \\text{M}^{-1}$: el sistema avanza hacia los productos.", porque: "Si Q es menor que K, hay poco producto respecto del equilibrio. El sistema se mueve hacia la derecha para formar más NOCl hasta que Q se iguale con K." }
        ],
        resultado: "$Q = 14{,}4\\ \\text{M}^{-1} < K_c$: avanza hacia los productos (NOCl)"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "$$Q = \\frac{(1{,}20)^2}{(0{,}10)^2(0{,}50)} = \\frac{1{,}44}{0{,}0050} = 288\\ \\text{M}^{-1}$$", porque: "Repetimos el mismo cálculo con la nueva mezcla. El NOCl va al cuadrado en el numerador, y en el denominador el NO va al cuadrado y el Cl2 a la primera potencia." },
          { paso: "$Q = 288\\ \\text{M}^{-1} > K_c = 200\\ \\text{M}^{-1}$: el sistema avanza hacia los reactivos.", porque: "Un Q mayor que K indica que hay demasiado producto. Para llegar al equilibrio, parte del NOCl se descompone en NO y Cl2, así que la reacción se desplaza hacia la izquierda." }
        ],
        resultado: "$Q = 288\\ \\text{M}^{-1} > K_c$: avanza hacia los reactivos"
      }
    ],
    errores_tipicos: [
      { error: "Usar moles en lugar de concentraciones al calcular Q.", como_evitar: "Q siempre se calcula con mol/L (o con presiones, si son gases y se usa Kp)." },
      { error: "Invertir la conclusión y decir que Q < K hace avanzar el sistema hacia los reactivos.", como_evitar: "Si Q < K, el sistema forma productos. Si Q > K, el sistema forma reactivos." },
      { error: "Olvidar el coeficiente 2 del NO o del NOCl al escribir Q.", como_evitar: "Los coeficientes de la ecuación balanceada son los exponentes en Q." }
    ]
  },
  {
    num: 4,
    nivel: "Básico",
    temas: ["equilibrio", "gases"],
    enunciado: "Para el equilibrio CO(g) + 2 H2(g) <=> CH3OH(g), la constante Kc vale 14,5 M^-2 a 227 °C. Calcule el valor de Kp a esa temperatura e indique sus unidades.",
    resolucion: [
      {
        parte: "",
        pasos: [
          { paso: "$T = 227 + 273 = 500\\ \\text{K}$", porque: "Las expresiones de los gases usan temperatura absoluta, así que los grados Celsius se pasan a kelvin sumando 273. Si usáramos 227 K, el resultado sería incorrecto. Entonces trabajamos con 500 K." },
          { paso: "$\\Delta n = 1 - (1 + 2) = -2$", porque: "Δn es la diferencia entre los moles de gas de los productos y los de los reactivos. Los productos tienen 1 mol de gas (CH3OH) y los reactivos tienen 1 + 2 = 3 mol. Por eso Δn = −2." },
          { paso: "$$K_p = K_c (RT)^{\\Delta n} = 14{,}5 \\times (0{,}082 \\times 500)^{-2} = 14{,}5 \\times (41{,}0)^{-2} = 8{,}63 \\times 10^{-3}\\ \\text{atm}^{-2}$$", porque: "Usamos la relación Kp = Kc(RT)^Δn con R = 0,082 L·atm/(mol·K). Calculamos RT = 41,0 L·atm/mol y lo elevamos a −2 porque Δn = −2. Como Kc tiene unidades M^-2, el Kp resultante tiene unidades atm^-2." }
        ],
        resultado: "$K_p = 8{,}63 \\times 10^{-3}\\ \\text{atm}^{-2}$ a 500 K"
      }
    ],
    errores_tipicos: [
      { error: "Usar 227 K en lugar de 500 K para la relación Kp-Kc.", como_evitar: "Siempre convertir la temperatura a kelvin antes de usar R y T." },
      { error: "Calcular Δn al revés (3 − 1 = 2) y obtener un Kp muy distinto.", como_evitar: "Δn = moles de gas de productos − moles de gas de reactivos." },
      { error: "Escribir Kp = Kc sin el factor (RT)^Δn.", como_evitar: "Kp = Kc(RT)^Δn es válido siempre que Δn no sea cero. Si Δn = 0, Kp y Kc coinciden." }
    ]
  },
  {
    num: 5,
    nivel: "Básico",
    temas: ["equilibrio"],
    enunciado: "El sistema 2 H2S(g) <=> 2 H2(g) + S2(g) tiene ΔH > 0 (reacción endotérmica) y está en equilibrio en un recipiente cerrado. Indique, justificando con el principio de Le Chatelier, cómo se modifica la cantidad de S2 en el equilibrio al: a) agregar H2S(g) a volumen constante; b) reducir el volumen del recipiente a temperatura constante; c) aumentar la temperatura; d) agregar un catalizador.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Se agrega reactivo: aumenta $[\\text{H}_2\\text{S}]$.", porque: "Agregar un reactivo rompe el equilibrio y el sistema consume el exceso para volver a equilibrarse. Por eso el equilibrio se desplaza hacia los productos." },
          { paso: "Resultado: aumenta la cantidad de S2 (se desplaza a la derecha).", porque: "Al desplazarse a la derecha se forman más H2 y S2 hasta alcanzar un nuevo equilibrio. La constante K no cambia, pero la composición sí." }
        ],
        resultado: "Aumenta la cantidad de S2"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "$\\Delta n_{\\text{gas}} = (2 + 1) - 2 = +1$: hay 3 mol de gas en productos y 2 mol en reactivos.", porque: "Para analizar el efecto de la presión, contamos solo los moles de gas. Como el lado de productos tiene más moles gaseosos, reducir el volumen (que sube la presión) favorece el lado con menos moles." },
          { paso: "Se desplaza hacia los reactivos: disminuye la cantidad de S2.", porque: "Al reducir el volumen aumenta la presión total, y el sistema se corre hacia el lado con menos moles de gas para contrarrestarlo. Por eso baja la cantidad de S2." }
        ],
        resultado: "Disminuye la cantidad de S2"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "ΔH > 0: la reacción directa es endotérmica, así que el calor absorbido actúa como un reactivo.", porque: "En una reacción endotérmica el calor se consume al formar productos. Si se aumenta la temperatura, se agrega calor al sistema, y el equilibrio se corre hacia el lado que lo consume." },
          { paso: "Se desplaza hacia los productos: aumenta la cantidad de S2 y también aumenta K.", porque: "Al subir T el equilibrio se corre a la derecha porque la reacción directa absorbe calor. Esto aumenta H2 y S2, y el valor de K crece, porque la temperatura es la única variable que modifica K." }
        ],
        resultado: "Aumenta la cantidad de S2 (y K aumenta)"
      },
      {
        parte: "d)",
        pasos: [
          { paso: "El catalizador disminuye la energía de activación de la reacción directa y de la inversa en la misma proporción.", porque: "Un catalizador acelera las dos reacciones por igual. Como ambas velocidades cambian en la misma proporción, la relación entre las concentraciones de equilibrio no cambia." },
          { paso: "La cantidad de S2 en el equilibrio no cambia; solo cambia el tiempo que tarda en alcanzarse.", porque: "Entonces el catalizador no mejora el rendimiento ni desplaza el equilibrio. Solo permite llegar más rápido al mismo estado de equilibrio." }
        ],
        resultado: "No cambia (el catalizador solo acelera la llegada al equilibrio)"
      }
    ],
    errores_tipicos: [
      { error: "Pensar que el catalizador aumenta la cantidad de producto en el equilibrio.", como_evitar: "El catalizador acelera directa e inversa por igual. Cambia la velocidad, no la composición de equilibrio." },
      { error: "Decir que reducir el volumen favorece el lado con más moles gaseosos.", como_evitar: "Al aumentar la presión, el equilibrio se corre hacia el lado con menos moles de gas." },
      { error: "Tratar el calor como si fuera producto en una reacción endotérmica al subir T, o al revés.", como_evitar: "Si ΔH > 0, el calor es un reactivo: subir T favorece productos. Si ΔH < 0, el calor es un producto." }
    ]
  },
  {
    num: 6,
    nivel: "Básico",
    temas: ["equilibrio", "gases"],
    enunciado: "A 110 °C (383 K), el carbonato de plata se descompone según el equilibrio heterogéneo Ag2CO3(s) <=> Ag2O(s) + CO2(g), con Kp = 0,0300 atm. Se colocan 2,00 g de Ag2CO3 puro en un recipiente cerrado de 5,00 L a esa temperatura. a) Escriba la expresión de Kp. b) Calcule los moles de CO2 en el equilibrio. c) Calcule la masa de Ag2CO3 que queda sin descomponer.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "$$K_p = p_{\\text{CO}_2}$$", porque: "Solo el CO2 es gas. El Ag2CO3 y el Ag2O son sólidos puros, así que no entran en la expresión. Por eso Kp es igual a la presión parcial del CO2." },
          { paso: "En el equilibrio, $p_{\\text{CO}_2} = 0{,}0300\\ \\text{atm}$.", porque: "El valor de la constante fija la presión de CO2 en el equilibrio, siempre que quede sólido en el recipiente. Este valor es el que usamos en el siguiente punto." }
        ],
        resultado: "$K_p = p_{\\text{CO}_2}$"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "$$n_{\\text{CO}_2} = \\frac{p\\,V}{R\\,T} = \\frac{0{,}0300\\ \\text{atm} \\times 5{,}00\\ \\text{L}}{0{,}082 \\times 383\\ \\text{K}} = 4{,}78 \\times 10^{-3}\\ \\text{mol}$$", porque: "Usamos la ley de los gases ideales para pasar la presión parcial a moles, con V = 5,00 L y T = 383 K. Las unidades cierran: atm·L dividido (atm·L/(mol·K))·K da mol." }
        ],
        resultado: "$n_{\\text{CO}_2} = 4{,}78 \\times 10^{-3}\\ \\text{mol}$"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "$$M(\\text{Ag}_2\\text{CO}_3) = 2(107{,}87) + 12{,}01 + 3(16{,}00) = 275{,}75\\ \\text{g/mol}$$", porque: "Necesitamos la masa molar para pasar moles a gramos. Sumamos la masa de 2 átomos de Ag, 1 de C y 3 de O según la tabla periódica." },
          { paso: "Masa descompuesta: $4{,}78 \\times 10^{-3}\\ \\text{mol} \\times 275{,}75\\ \\text{g/mol} = 1{,}32\\ \\text{g}$. Masa remanente: $2{,}00 - 1{,}32 = 0{,}68\\ \\text{g}$.", porque: "Por la estequiometría 1:1, cada mol de CO2 proviene de 1 mol de Ag2CO3 descompuesto. Restamos lo descompuesto a la masa inicial para obtener el sólido que queda. Como queda sólido, el equilibrio es válido." }
        ],
        resultado: "Quedan 0,68 g de Ag2CO3 sin descomponer"
      }
    ],
    errores_tipicos: [
      { error: "Incluir Ag2CO3(s) o Ag2O(s) en la expresión de Kp.", como_evitar: "Los sólidos puros no entran en Kp. Solo se escriben los gases." },
      { error: "No convertir la temperatura a kelvin (usar 110 en lugar de 383 K) o usar mL en lugar de L.", como_evitar: "Revisar que R = 0,082 L·atm/(mol·K) se use con T en K y V en L." },
      { error: "Suponer que todo el Ag2CO3 se descompone.", como_evitar: "Un equilibrio con sólido en exceso deja sólido remanente. Calculá la masa restante restando lo descompuesto." }
    ]
  },
  {
    num: 7,
    nivel: "Intermedio",
    temas: ["equilibrio", "reacciones"],
    enunciado: "Para el equilibrio en fase gaseosa CH3COOH(g) + C2H5OH(g) <=> CH3COOC2H5(g) + H2O(g), Kc = 4,00 a la temperatura de trabajo. En un recipiente de 2,00 L se mezclan 2,00 mol de ácido acético y 2,00 mol de etanol. Calcule las concentraciones de todas las especies en el equilibrio.",
    resolucion: [
      {
        parte: "",
        pasos: [
          { paso: "Concentraciones iniciales: $[\\text{CH}_3\\text{COOH}]_0 = [\\text{C}_2\\text{H}_5\\text{OH}]_0 = \\frac{2{,}00\\ \\text{mol}}{2{,}00\\ \\text{L}} = 1{,}00\\ \\text{M}$; los productos valen 0 M.", porque: "Armamos la tabla ICE empezando por las concentraciones iniciales, dividiendo los moles por el volumen. Los productos todavía no se formaron, así que valen cero al inicio." },
          { paso: "Cambio: se consume $x$ de cada reactivo y se forma $x$ de cada producto. Equilibrio: $[\\text{CH}_3\\text{COOH}] = [\\text{C}_2\\text{H}_5\\text{OH}] = 1{,}00 - x$; $[\\text{éster}] = [\\text{H}_2\\text{O}] = x$.", porque: "Por la estequiometría 1:1:1:1, cada reactivo cambia la misma cantidad x y cada producto aumenta en x. Usamos estas expresiones para armar Kc con una sola incógnita." },
          { paso: "$$K_c = \\frac{x \\cdot x}{(1{,}00 - x)(1{,}00 - x)} = 4{,}00 \\Rightarrow \\frac{x}{1{,}00 - x} = 2{,}00 \\Rightarrow x = 0{,}667\\ \\text{M}$$", porque: "Como Kc es un cociente de cuadrados, tomamos raíz cuadrada de ambos lados: x/(1,00 − x) = 2,00. Despejamos x = 2,00 − 2,00x, así que 3,00x = 2,00 y x = 0,667 M. Verificamos: 0,667/0,333 = 2,00, y 2,00^2 = 4,00." },
          { paso: "Equilibrio: $[\\text{éster}] = [\\text{H}_2\\text{O}] \\approx 0{,}667\\ \\text{M}$ y $[\\text{CH}_3\\text{COOH}] = [\\text{C}_2\\text{H}_5\\text{OH}] \\approx 0{,}333\\ \\text{M}$.", porque: "Reemplazamos x = 0,667 en la tabla. Los dos reactivos quedan iguales porque partieron con la misma concentración. Con 1,00 − 0,667 = 0,333 M obtenemos su concentración en el equilibrio." }
        ],
        resultado: "[éster] = [H2O] ≈ 0,667 M; [ácido] = [etanol] ≈ 0,333 M"
      }
    ],
    errores_tipicos: [
      { error: "Dejar 1,00 M de reactivo en el equilibrio (no restar x a los reactivos).", como_evitar: "Los reactivos disminuyen en x: su concentración de equilibrio es la inicial menos x." },
      { error: "Usar moles (2,00 mol) en lugar de concentraciones (1,00 M) al plantear Kc.", como_evitar: "Dividir por el volumen antes de armar la tabla ICE." },
      { error: "Escribir Kc = x/(1 − x) omitiendo el cuadrado de los reactivos.", como_evitar: "Cada reactivo tiene coeficiente 1 pero aparece en el denominador: hay que multiplicar sus dos concentraciones." }
    ]
  },
  {
    num: 8,
    nivel: "Intermedio",
    temas: ["equilibrio", "gases"],
    enunciado: "En un recipiente se introduce HF(g) puro a una concentración inicial de 0,400 M, a temperatura constante. El HF se asocia según 2 HF(g) <=> H2F2(g), con Kc = 2,00 x 10^-3 M^-1. Se define el grado de disociación α como la fracción del HF inicial que reacciona. a) Escriba la expresión de Kc. b) Calcule α usando la aproximación de que α es mucho menor que 1. c) Verifique si la aproximación es válida.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "$$K_c = \\frac{[\\text{H}_2\\text{F}_2]}{[\\text{HF}]^2}$$", porque: "El coeficiente 2 del HF aparece como exponente en el denominador. El H2F2 va en el numerador con coeficiente 1. Ambas especies son gaseosas, así que sus concentraciones entran directamente." }
        ],
        resultado: "$K_c = \\frac{[\\text{H}_2\\text{F}_2]}{[\\text{HF}]^2}$"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "$[\\text{HF}] = 0{,}400\\,(1 - \\alpha)$ y $[\\text{H}_2\\text{F}_2] = \\frac{0{,}400\\,\\alpha}{2} = 0{,}200\\,\\alpha$", porque: "Si reacciona la fracción α del HF inicial, reaccionan 0,400α M de HF. Como 2 HF dan 1 H2F2, la concentración de dímero es la mitad de lo que reaccionó. Así escribimos todo en función de α." },
          { paso: "$$K_c = \\frac{0{,}200\\,\\alpha}{(0{,}400)^2(1 - \\alpha)^2} = 1{,}25\\,\\frac{\\alpha}{(1-\\alpha)^2} = 2{,}00 \\times 10^{-3}$$", porque: "Reemplazamos en Kc. Dividimos 0,200 entre 0,160 y obtenemos 1,25. Así la ecuación queda en función de α y (1 − α)^2." },
          { paso: "Aproximación: $(1 - \\alpha)^2 \\approx 1 \\Rightarrow \\alpha \\approx \\frac{2{,}00 \\times 10^{-3}}{1{,}25} = 1{,}60 \\times 10^{-3}$ (0,160 %)", porque: "Como α es muy pequeño, (1 − α)^2 se aproxima a 1 y la ecuación se vuelve lineal. Despejamos α dividiendo Kc por 1,25. El resultado es 0,00160." }
        ],
        resultado: "$\\alpha \\approx 1{,}60 \\times 10^{-3}$ (0,160 %)"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "$\\alpha = 0{,}160\\,\\% < 5\\,\\%$: la aproximación es válida.", porque: "El criterio habitual es que α sea menor que 5 %, porque ahí el error de (1 − α)^2 ≈ 1 es chico. Comparamos el α obtenido en b) con ese límite para decidir si la aproximación se sostiene." },
          { paso: "Con la ecuación completa, $\\alpha = 1{,}59 \\times 10^{-3}$ (0,159 %), casi igual al aproximado.", porque: "Resolvemos sin aproximar para confirmar. La diferencia es menor al 1 %, así que el resultado de b) es correcto y la aproximación se puede usar." }
        ],
        resultado: "Aproximación válida: α ≈ 0,160 %"
      }
    ],
    errores_tipicos: [
      { error: "Poner [HF] = 0,400 − α en lugar de 0,400 − 2·(0,400α), es decir olvidar que se consumen 2 HF por cada dímero.", como_evitar: "Por la estequiometría, el HF consumido es el doble del dímero formado." },
      { error: "Aplicar la aproximación sin verificarla (no comparar α con 5 %).", como_evitar: "Siempre calculá α con la aproximación y compará con 5 %. Si supera ese valor, resolvé la ecuación completa." },
      { error: "Confundir el grado de disociación con el porcentaje de HF que queda sin reaccionar.", como_evitar: "α es la fracción del HF inicial que reacciona. Lo que queda es (1 − α)." }
    ]
  },
  {
    num: 9,
    nivel: "Intermedio",
    temas: ["equilibrio", "gases"],
    enunciado: "Se introduce etano puro, C2H6(g), en un recipiente rígido a 900 K, con una presión inicial de 2,00 atm. Se establece el equilibrio C2H6(g) <=> C2H4(g) + H2(g). En el equilibrio, la presión total es 2,60 atm. a) Calcule Kp a 900 K. b) Calcule el porcentaje de etano que se descompuso.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Tabla de presiones: $p_{\\text{C}_2\\text{H}_6} = 2{,}00 - x$; $p_{\\text{C}_2\\text{H}_4} = p_{\\text{H}_2} = x$. Presión total $= 2{,}00 + x$.", porque: "Por cada mol de etano que reacciona se forman 2 mol de gas, así que la presión total es la suma de las tres presiones parciales. Como el volumen y la temperatura son fijos, la presión es proporcional a los moles totales." },
          { paso: "$2{,}60 = 2{,}00 + x \\Rightarrow x = 0{,}60\\ \\text{atm}$", porque: "Usamos el dato indirecto de la presión total para despejar x. A volumen y temperatura constantes, la suma de las presiones parciales da la presión total del equilibrio." },
          { paso: "$p_{\\text{C}_2\\text{H}_6} = 1{,}40\\ \\text{atm}$, $p_{\\text{C}_2\\text{H}_4} = p_{\\text{H}_2} = 0{,}60\\ \\text{atm}$. $$K_p = \\frac{p_{\\text{C}_2\\text{H}_4}\\,p_{\\text{H}_2}}{p_{\\text{C}_2\\text{H}_6}} = \\frac{(0{,}60)(0{,}60)}{1{,}40} = 0{,}257\\ \\text{atm}$$", porque: "Escribimos Kp con las presiones de equilibrio: los productos arriba y el etano abajo. Reemplazamos y obtenemos 0,36/1,40 = 0,257. Las unidades son atm porque Δn = +1." }
        ],
        resultado: "$K_p = 0{,}257\\ \\text{atm}$ a 900 K"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "$\\%\\ \\text{descompuesto} = \\frac{x}{2{,}00} \\times 100 = \\frac{0{,}60}{2{,}00} \\times 100 = 30\\,\\%$", porque: "El porcentaje se calcula sobre la presión inicial de etano (2,00 atm), que es la cantidad de partida. Dividimos lo descompuesto por lo inicial y multiplicamos por 100. Como la presión es proporcional a los moles, el cociente de presiones equivale al de moles." }
        ],
        resultado: "30 % del etano se descompone"
      }
    ],
    errores_tipicos: [
      { error: "Escribir la presión total como 2,00 − x (olvidar que los productos también aportan presión).", como_evitar: "La presión total es la suma de las tres presiones parciales, y en este caso crece con x." },
      { error: "Asignar la presión total de 2,60 atm al etano en la expresión de Kp.", como_evitar: "El dato de presión total sirve para despejar x, pero cada especie tiene su presión parcial." },
      { error: "Calcular el porcentaje dividiendo por el equilibrio (1,40 atm) en lugar de la presión inicial.", como_evitar: "El porcentaje de descomposición se calcula sobre la cantidad de partida." }
    ]
  },
  {
    num: 10,
    nivel: "Intermedio",
    temas: ["equilibrio", "reacciones"],
    enunciado: "A 400 K se estudian dos equilibrios en fase gaseosa: (1) I2(g) + Cl2(g) <=> 2 ICl(g), con Kc1 = 0,200. (2) ICl(g) + Cl2(g) <=> ICl3(g), con Kc2 = 5,00 M^-1. a) Combine ambas ecuaciones para obtener el equilibrio global I2(g) + 3 Cl2(g) <=> 2 ICl3(g) y calcule su constante Kc. b) En el equilibrio global, [I2] = 0,100 M y [Cl2] = 0,200 M. Calcule [ICl3].",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Multiplicamos la reacción (2) por 2: $2\\,\\text{ICl}(\\text{g}) + 2\\,\\text{Cl}_2(\\text{g}) \\rightleftharpoons 2\\,\\text{ICl}_3(\\text{g})$, con constante $(K_{c2})^2$.", porque: "Para sumar reacciones se pueden multiplicar por un factor. Si una reacción se multiplica por 2, su constante se eleva al cuadrado." },
          { paso: "Sumamos (1) y la reacción (2) multiplicada: $\\text{I}_2(\\text{g}) + 3\\,\\text{Cl}_2(\\text{g}) \\rightleftharpoons 2\\,\\text{ICl}_3(\\text{g})$. El ICl se cancela.", porque: "El ICl aparece como producto en (1) y como reactivo en la reacción (2) multiplicada. Al sumar, se cancela y queda la reacción global." },
          { paso: "$$K_c = K_{c1} \\times (K_{c2})^2 = 0{,}200 \\times (5{,}00)^2 = 5{,}00\\ \\text{M}^{-2}$$", porque: "Al sumar reacciones se multiplican sus constantes. Como usamos la reacción (2) al cuadrado, Kc2 entra elevada a 2. Las unidades son M^-2, las mismas de la reacción global." }
        ],
        resultado: "$K_c = 5{,}00\\ \\text{M}^{-2}$ para el equilibrio global"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "$$K_c = \\frac{[\\text{ICl}_3]^2}{[\\text{I}_2][\\text{Cl}_2]^3} = 5{,}00$$", porque: "Escribimos la expresión de Kc del equilibrio global: ICl3 al cuadrado arriba, I2 y Cl2 al cubo abajo, según los coeficientes." },
          { paso: "$[\\text{ICl}_3]^2 = 5{,}00 \\times 0{,}100 \\times (0{,}200)^3 = 4{,}00 \\times 10^{-3}$, entonces $[\\text{ICl}_3] = 0{,}0632\\ \\text{M}$", porque: "Despejamos [ICl3]^2 multiplicando K por las concentraciones de los reactivos. Calculamos 0,200^3 = 0,00800 y luego 5,00 × 0,100 × 0,00800 = 0,00400. Sacamos raíz cuadrada y obtenemos 0,0632 M." }
        ],
        resultado: "$[\\text{ICl}_3] = 0{,}0632\\ \\text{M}$"
      }
    ],
    errores_tipicos: [
      { error: "Sumar las constantes (Kc = 0,200 + 5,00) en lugar de multiplicarlas.", como_evitar: "Al sumar reacciones, sus constantes se multiplican. Al sumar ecuaciones, el producto de constantes es el que cuenta." },
      { error: "Olvidar elevar Kc2 al cuadrado al multiplicar la reacción (2) por 2.", como_evitar: "Si una reacción se multiplica por n, su constante se eleva a n." },
      { error: "Olvidar elevar el Cl2 al cubo en la expresión de Kc global.", como_evitar: "Los exponentes se toman de los coeficientes de la reacción global: 3 Cl2 da [Cl2]^3." }
    ]
  },
  {
    num: 11,
    nivel: "Intermedio",
    temas: ["equilibrio", "termodinamica"],
    enunciado: "Para el equilibrio en fase gaseosa C2H4(g) + H2O(g) <=> C2H5OH(g) se midieron los siguientes valores de Kc: 450 K: Kc = 0,0400 M^-1; 500 K: Kc = 0,0120 M^-1; 550 K: Kc = 0,00450 M^-1. a) Indique si la reacción directa es exotérmica o endotérmica y justifique con los datos. b) Si el sistema en equilibrio a 450 K se calienta a 550 K a volumen constante, ¿aumenta o disminuye la cantidad de C2H5OH? Justifique.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Al subir la temperatura de 450 K a 550 K, Kc baja de 0,0400 a 0,00450 M^-1.", porque: "Comparamos los valores de la tabla en orden creciente de temperatura. Una constante que disminuye al aumentar T indica que el equilibrio se desplaza hacia los reactivos con el calor." },
          { paso: "Conclusión: la reacción directa es exotérmica ($\\Delta H < 0$).", porque: "Según Le Chatelier, al calentar el sistema se corre hacia el lado que absorbe calor, es decir la reacción inversa. Por eso la directa libera calor, así que ΔH < 0." }
        ],
        resultado: "Exotérmica (ΔH < 0): Kc disminuye al aumentar T"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "$\\frac{K_c(550\\ \\text{K})}{K_c(450\\ \\text{K})} = \\frac{0{,}00450}{0{,}0400} = 0{,}113$", porque: "Usamos la tabla para cuantificar el cambio. La constante baja a 0,113 de su valor inicial, así que a 550 K el cociente de producto sobre reactivos es mucho menor." },
          { paso: "Disminuye la cantidad de C2H5OH en el nuevo equilibrio.", porque: "Como el volumen es constante, no hay efecto de presión. El único cambio es la temperatura, que modifica K y desplaza el equilibrio hacia los reactivos. Por eso se forma menos etanol." }
        ],
        resultado: "Disminuye la cantidad de C2H5OH"
      }
    ],
    errores_tipicos: [
      { error: "Concluir que la reacción es endotérmica porque la constante cambia con T, sin mirar el sentido del cambio.", como_evitar: "Comparar Kc a dos temperaturas: si Kc baja al subir T, la directa es exotérmica." },
      { error: "Pensar que, con volumen constante, la temperatura no puede cambiar el equilibrio.", como_evitar: "El volumen fijo impide el efecto de presión, pero la temperatura sí modifica K." },
      { error: "Creer que Kc no depende de la temperatura.", como_evitar: "Kc depende solo de la temperatura: si cambia T, cambia K." }
    ]
  },
  {
    num: 12,
    nivel: "Intermedio",
    temas: ["equilibrio", "termodinamica"],
    enunciado: "El sistema CS2(g) + 4 H2(g) <=> CH4(g) + 2 H2S(g) tiene ΔH < 0 y está en equilibrio en un recipiente cerrado de volumen variable. Indique, justificando con Le Chatelier, hacia dónde se desplaza el equilibrio (o si no cambia) al: a) agregar He(g) a volumen constante; b) agregar He(g) manteniendo la presión total constante; c) reducir el volumen a temperatura constante; d) disminuir la temperatura.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "El He no reacciona y no cambia la concentración ni la presión parcial de CS2, H2, CH4 ni H2S.", porque: "El gas inerte aumenta la presión total, pero no la de cada reactivo o producto. Como Q se calcula solo con las especies que reaccionan, Q sigue igual a K." },
          { paso: "No hay desplazamiento del equilibrio.", porque: "El sistema sigue en equilibrio y la composición no cambia. El helio solo aumenta la presión total, que no afecta a este equilibrio cuando el volumen no cambia." }
        ],
        resultado: "No se desplaza"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "A presión constante, al agregar He el volumen aumenta. Las presiones parciales y las concentraciones de todas las especies disminuyen.", porque: "Si la presión total se mantiene, un aumento de volumen implica menos moles por litro. Por eso bajan por igual las presiones parciales de los gases." },
          { paso: "$\\Delta n = (1 + 2) - (1 + 4) = -2$: el equilibrio se desplaza hacia los reactivos (5 mol de gas frente a 3).", porque: "Cuando baja la presión, el equilibrio se corre hacia el lado con más moles gaseosos, que son los reactivos. Por eso aumentan CS2 y H2 y disminuyen CH4 y H2S." }
        ],
        resultado: "Se desplaza hacia los reactivos"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "Reducir el volumen aumenta la presión total. El lado con menos moles de gas es el de productos (3 mol frente a 5).", porque: "Un aumento de presión favorece el lado con menos moles gaseosos. Aquí es el de productos, así que el sistema consume los reactivos para bajar la presión." },
          { paso: "Se desplaza hacia los productos: aumenta CH4 y H2S.", porque: "Por Le Chatelier el equilibrio responde al aumento de presión formando más CH4 y H2S. Así se reduce el número de moles de gas." }
        ],
        resultado: "Se desplaza hacia los productos"
      },
      {
        parte: "d)",
        pasos: [
          { paso: "ΔH < 0: la reacción directa es exotérmica. Al bajar la temperatura, el calor es un producto que se libera.", porque: "Al enfriar, el sistema se corre hacia el lado que libera calor para compensar la pérdida. Como la directa libera calor, se favorece." },
          { paso: "Se desplaza hacia los productos y aumenta K.", porque: "Con menor temperatura se forma más producto. La temperatura es la única variable que cambia el valor de K, y en este caso lo aumenta." }
        ],
        resultado: "Se desplaza hacia los productos"
      }
    ],
    errores_tipicos: [
      { error: "Creer que agregar He a volumen constante desplaza el equilibrio porque sube la presión total.", como_evitar: "A volumen constante, las presiones parciales de las especies reactivas no cambian, así que no hay desplazamiento." },
      { error: "Olvidar que a presión constante el volumen cambia, y por eso el gas inerte sí desplaza el equilibrio.", como_evitar: "Si la presión total se mantiene, el volumen aumenta y todas las presiones parciales bajan." },
      { error: "Calcular Δn con el coeficiente equivocado (poner 1 para el H2S en lugar de 2).", como_evitar: "Usá los coeficientes de la ecuación balanceada: 2 H2S suman 2 mol de gas." }
    ]
  },
  {
    num: 13,
    nivel: "Intermedio",
    temas: ["equilibrio", "gases"],
    enunciado: "A 600 K, el acetaldehído se descompone según CH3CHO(g) <=> CH4(g) + CO(g), con Kp = 1,00 x 10^-3 atm. Se introduce CH3CHO puro en un recipiente cerrado con presión inicial de 1,00 atm. a) Calcule las presiones parciales de equilibrio usando la aproximación de que la cantidad descompuesta es despreciable frente a la inicial. b) Verifique la aproximación y calcule el porcentaje de descomposición.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Tabla: $p_{\\text{CH}_3\\text{CHO}} = 1{,}00 - x$; $p_{\\text{CH}_4} = p_{\\text{CO}} = x$.", porque: "La reacción convierte 1 mol de acetaldehído en 1 mol de CH4 y 1 mol de CO. Escribimos las presiones en función de x, que es la presión descompuesta." },
          { paso: "$$K_p = \\frac{x \\cdot x}{1{,}00 - x} \\approx \\frac{x^2}{1{,}00} = 1{,}00 \\times 10^{-3} \\Rightarrow x \\approx 0{,}0316\\ \\text{atm}$$", porque: "Como x es pequeño frente a 1,00 atm, aproximamos 1,00 − x ≈ 1,00. Entonces x^2 = 1,00 × 10^-3 y x = √(1,00 × 10^-3) = 0,0316 atm." },
          { paso: "$p_{\\text{CH}_3\\text{CHO}} \\approx 0{,}968\\ \\text{atm}$; $p_{\\text{CH}_4} = p_{\\text{CO}} \\approx 0{,}0316\\ \\text{atm}$", porque: "Restamos x a la presión inicial de 1,00 atm y colocamos x en los productos. Estos son los valores de la aproximación." }
        ],
        resultado: "$p_{\\text{CH}_4} = p_{\\text{CO}} \\approx 0{,}0316$ atm; $p_{\\text{CH}_3\\text{CHO}} \\approx 0{,}968$ atm"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "$\\frac{x}{1{,}00} \\times 100 = 3{,}16\\,\\%$ (menor que 5 %)", porque: "Calculamos cuánto se descompuso respecto de la presión inicial. Como el resultado es menor que 5 %, la aproximación es razonable." },
          { paso: "Ecuación completa: $x^2 + 1{,}00 \\times 10^{-3}\\,x - 1{,}00 \\times 10^{-3} = 0 \\Rightarrow x = 0{,}0311\\ \\text{atm}$ (3,11 %)", porque: "Para verificar, resolvemos sin aproximar. El valor exacto difiere del aproximado en menos de 2 %, así que la aproximación es válida. El porcentaje de descomposición es 3,1 %." }
        ],
        resultado: "Aproximación válida (3,1 % < 5 %); se descompone el 3,1 %"
      }
    ],
    errores_tipicos: [
      { error: "Restar 2x a la presión inicial, como si se consumieran dos moles de acetaldehído por cada reacción.", como_evitar: "Por la estequiometría 1:1, el acetaldehído consumido es igual a x." },
      { error: "Aplicar la aproximación sin verificar el porcentaje descompuesto.", como_evitar: "Calculá x/p0 × 100 y comparalo con 5 %. Si supera el límite, resolvé la cuadrática." },
      { error: "Escribir Kp = x/(1,00 − x), olvidando el producto de dos presiones en el numerador.", como_evitar: "Kp tiene dos productos arriba (CH4 y CO) y el acetaldehído abajo." }
    ]
  },
  {
    num: 14,
    nivel: "Avanzado",
    temas: ["equilibrio", "gases"],
    enunciado: "A 250 °C se introducen 0,200 mol de PCl5(g) en un recipiente de 1,00 L. Se establece el equilibrio PCl5(g) <=> PCl3(g) + Cl2(g), con Kc = 0,0400 M a esa temperatura. a) Escriba la expresión de Kc. b) Calcule las concentraciones de equilibrio y el grado de disociación α (fracción de PCl5 descompuesta), sin aproximaciones. c) Explique si podría haberse usado la aproximación de α pequeño.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "$$K_c = \\frac{[\\text{PCl}_3][\\text{Cl}_2]}{[\\text{PCl}_5]}$$", porque: "Todas las especies son gases, así que entran sus concentraciones. Los coeficientes son 1, así que no hay exponentes." },
          { paso: "Concentración inicial: $C_0 = \\frac{0{,}200\\ \\text{mol}}{1{,}00\\ \\text{L}} = 0{,}200\\ \\text{M}$", porque: "Pasamos la cantidad inicial a mol/L para armar la tabla. Como el volumen es 1,00 L, el número es el mismo, pero conviene expresarlo en M." }
        ],
        resultado: "$K_c = \\frac{[\\text{PCl}_3][\\text{Cl}_2]}{[\\text{PCl}_5]}$ con $C_0 = 0{,}200$ M"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "$[\\text{PCl}_5] = 0{,}200\\,(1 - \\alpha)$; $[\\text{PCl}_3] = [\\text{Cl}_2] = 0{,}200\\,\\alpha$", porque: "Cada mol de PCl5 que se descompone produce 1 mol de PCl3 y 1 mol de Cl2. Con α como fracción descompuesta, escribimos las concentraciones en función de α." },
          { paso: "$$\\frac{(0{,}200\\,\\alpha)^2}{0{,}200\\,(1-\\alpha)} = 0{,}0400 \\Rightarrow \\alpha^2 + 0{,}200\\,\\alpha - 0{,}200 = 0$$", porque: "Reemplazamos en Kc y multiplicamos por (1 − α). Pasamos todo a un lado para obtener una cuadrática en α. No podemos simplificarla sin hacer una aproximación." },
          { paso: "$$\\alpha = \\frac{-0{,}200 + \\sqrt{0{,}200^2 + 4(0{,}200)}}{2} = \\frac{-0{,}200 + 0{,}9165}{2} = 0{,}358\\ (35{,}8\\,\\%)$$", porque: "Usamos la fórmula de la cuadrática con a = 1, b = 0,200 y c = −0,200, y tomamos la raíz positiva porque α no puede ser negativo. Obtenemos α = 0,358." },
          { paso: "$[\\text{PCl}_5] = 0{,}128\\ \\text{M}$; $[\\text{PCl}_3] = [\\text{Cl}_2] = 0{,}0717\\ \\text{M}$", porque: "Reemplazamos α en la tabla: 0,200 × (1 − 0,358) = 0,128 M y 0,200 × 0,358 = 0,0717 M. Verificamos: (0,0717)^2 / 0,128 = 0,0401 ≈ 0,0400." }
        ],
        resultado: "$\\alpha = 0{,}358$ (35,8 %); $[\\text{PCl}_5] = 0{,}128$ M; $[\\text{PCl}_3] = [\\text{Cl}_2] = 0{,}0717$ M"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "Con la aproximación $(1 - \\alpha) \\approx 1$: $\\alpha \\approx \\sqrt{K_c / C_0} = \\sqrt{0{,}0400 / 0{,}200} = 0{,}447$ (44,7 %).", porque: "Si despreciamos α frente a 1, la ecuación da α = √(Kc/C0). Este valor es muy distinto del exacto (0,358), así que la aproximación no sirve aquí." },
          { paso: "Como 44,7 % supera ampliamente el 5 %, la aproximación no es válida y hay que usar la cuadrática.", porque: "El criterio es que α sea menor que 5 % para usar la aproximación. Aquí no se cumple, así que el error sería grande. Por eso se resolvió la ecuación completa en b)." }
        ],
        resultado: "La aproximación no es válida (α = 44,7 % con aproximación; se usa la cuadrática)"
      }
    ],
    errores_tipicos: [
      { error: "Aplicar α pequeño sin verificarlo y obtener α = 44,7 % en lugar de 35,8 %.", como_evitar: "Siempre compará el α aproximado con 5 %. Si no cumple, resolvé la cuadrática." },
      { error: "Usar mol en lugar de mol/L en la expresión de Kc (escribir 0,0717 mol en vez de M).", como_evitar: "Kc se calcula con concentraciones en mol/L. Si el volumen es 1,00 L, el número es el mismo, pero la unidad sigue siendo M." },
      { error: "Poner [Cl2] = 0,200α/2, pensando que el Cl2 se forma en menor cantidad que el PCl3.", como_evitar: "Por la estequiometría 1:1:1, PCl3 y Cl2 se forman en igual cantidad." }
    ]
  },
  {
    num: 15,
    nivel: "Avanzado",
    temas: ["equilibrio", "gases"],
    enunciado: "En un recipiente rígido de 2,00 L, a 500 K, se coloca NH4Cl(s) en exceso (2,00 g de sólido inicial) y se establece el equilibrio NH4Cl(s) <=> NH3(g) + HCl(g), con Kp = 0,0400 atm^2. a) Escriba la expresión de Kp y calcule las presiones parciales de equilibrio. b) Calcule la presión total y la masa de NH4Cl que se descompuso. c) Calcule la masa de NH4Cl que queda sin reaccionar.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "$$K_p = p_{\\text{NH}_3}\\,p_{\\text{HCl}}$$", porque: "El NH4Cl es sólido y no entra en la expresión. Los dos gases de productos tienen coeficiente 1, así que se multiplican sin exponentes." },
          { paso: "Por estequiometría 1:1, $p_{\\text{NH}_3} = p_{\\text{HCl}} = x$; $x^2 = 0{,}0400 \\Rightarrow x = 0{,}200\\ \\text{atm}$", porque: "Como se forman igual cantidad de NH3 y HCl, sus presiones parciales son iguales. Despejamos x = √0,0400 = 0,200 atm, y verificamos que 0,200 × 0,200 = 0,0400." }
        ],
        resultado: "$p_{\\text{NH}_3} = p_{\\text{HCl}} = 0{,}200$ atm"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "$P_{\\text{total}} = 0{,}200 + 0{,}200 = 0{,}400\\ \\text{atm}$", porque: "Según la ley de Dalton, la presión total es la suma de las presiones parciales. Como solo hay dos gases, sumamos las dos presiones." },
          { paso: "$n_{\\text{NH}_3} = \\frac{p\\,V}{R\\,T} = \\frac{0{,}200 \\times 2{,}00}{0{,}082 \\times 500} = 9{,}76 \\times 10^{-3}\\ \\text{mol}$; masa $= 9{,}76 \\times 10^{-3} \\times 53{,}49 = 0{,}522\\ \\text{g}$", porque: "Cada mol de NH4Cl que se descompone produce 1 mol de NH3, así que los moles de NH3 indican la cantidad descompuesta. Usamos la masa molar del NH4Cl: 14,01 + 4,03 + 35,45 = 53,49 g/mol." }
        ],
        resultado: "$P_{\\text{total}} = 0{,}400$ atm; se descompusieron 0,522 g de NH4Cl"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "Masa remanente: $2{,}00\\ \\text{g} - 0{,}522\\ \\text{g} = 1{,}48\\ \\text{g}$", porque: "Como el NH4Cl estaba en exceso, la masa que queda es la inicial menos la descompuesta. Es mayor que cero, así que el sólido sigue presente y el equilibrio es válido." }
        ],
        resultado: "Quedan 1,48 g de NH4Cl sin reaccionar"
      }
    ],
    errores_tipicos: [
      { error: "Incluir NH4Cl(s) en la expresión de Kp.", como_evitar: "Los sólidos puros no entran en Kp. Solo se escriben los gases." },
      { error: "Usar la presión total (0,400 atm) como si fuera la presión parcial de NH3 en Kp.", como_evitar: "Cada gas tiene su presión parcial. La total es la suma de todas." },
      { error: "Suponer que 1 mol de NH4Cl libera 2 mol de gas (olvidar que el HCl sale en la misma cantidad que el NH3, pero 1 mol de sólido da 1 mol de cada gas).", como_evitar: "Por cada mol de sólido se forman 1 mol de NH3 y 1 mol de HCl, así que la presión total es el doble de la parcial de cada uno." }
    ]
  },
  {
    num: 16,
    nivel: "Avanzado",
    temas: ["equilibrio", "gases"],
    enunciado: "Se introduce HBr(g) puro, 0,400 mol, en un recipiente de 1,00 L a 700 K. Se establece el equilibrio 2 HBr(g) <=> H2(g) + Br2(g). En el equilibrio, la fracción molar de H2 es 0,0833. a) Calcule las concentraciones de H2, Br2 y HBr en el equilibrio. b) Calcule Kc a 700 K e indique sus unidades.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "$\\Delta n = (1 + 1) - 2 = 0$, por lo tanto $n_{\\text{total}} = 0{,}400\\ \\text{mol}$", porque: "Si la reacción no cambia la cantidad de moles de gas, la suma de moles en el equilibrio es igual a la inicial. Eso permite usar la fracción molar para obtener los moles directamente." },
          { paso: "$n_{\\text{H}_2} = n_{\\text{Br}_2} = 0{,}0833 \\times 0{,}400 = 0{,}0333\\ \\text{mol}$; $[\\text{H}_2] = [\\text{Br}_2] = 0{,}0333\\ \\text{M}$", porque: "Multiplicamos la fracción molar por el total de moles para obtener los moles de H2. Por la estequiometría, Br2 se forma en la misma cantidad. Con V = 1,00 L, la concentración es el mismo número." },
          { paso: "$[\\text{HBr}] = \\frac{0{,}400 - 2(0{,}0333)}{1{,}00} = 0{,}333\\ \\text{M}$", porque: "Como se forma 1 mol de H2 consumiendo 2 mol de HBr, el HBr que queda es 0,400 − 2(0,0333) = 0,333 mol. Verificamos: 0,333 + 0,0333 + 0,0333 = 0,400 mol." }
        ],
        resultado: "$[\\text{H}_2] = [\\text{Br}_2] = 0{,}0333$ M; $[\\text{HBr}] = 0{,}333$ M"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "$$K_c = \\frac{[\\text{H}_2][\\text{Br}_2]}{[\\text{HBr}]^2} = \\frac{(0{,}0333)(0{,}0333)}{(0{,}333)^2} = 1{,}00 \\times 10^{-2}$$", porque: "Escribimos Kc con H2 y Br2 arriba y HBr al cuadrado abajo. Reemplazamos con las concentraciones de equilibrio. Cada cociente da 0,1, así que el resultado es 0,0100." },
          { paso: "Kc no tiene unidades, porque $\\Delta n = 0$.", porque: "Las unidades de Kc son M^Δn. Con Δn = 0 el cociente de concentraciones es adimensional, así que no se escriben unidades." }
        ],
        resultado: "$K_c = 1{,}00 \\times 10^{-2}$ (adimensional)"
      }
    ],
    errores_tipicos: [
      { error: "Usar la fracción molar como si fuera una concentración (0,0833 M).", como_evitar: "La fracción molar se multiplica por el total de moles para obtener los moles, y luego se divide por el volumen." },
      { error: "Restar solo x al HBr (0,400 − 0,0333 = 0,367 M) en lugar de 2x.", como_evitar: "Por la estequiometría 2:1, el HBr consumido es el doble del H2 formado." },
      { error: "Asignar unidades de M^-1 a Kc sin mirar Δn.", como_evitar: "Calculá Δn primero: si es cero, Kc no tiene unidades." }
    ]
  },
  {
    num: 17,
    nivel: "Avanzado",
    temas: ["equilibrio", "reacciones"],
    enunciado: "Para el equilibrio CH4(g) + Cl2(g) <=> CH3Cl(g) + HCl(g), en un recipiente de volumen fijo y a temperatura constante, el sistema está en equilibrio con [CH4] = 0,40 M, [Cl2] = 0,10 M, [CH3Cl] = 0,20 M y [HCl] = 0,20 M. a) Se agrega Cl2 hasta que su concentración sea 0,40 M (volumen constante). Calcule Q inmediatamente después de la adición e indique hacia dónde se mueve el sistema. b) Calcule las concentraciones en el nuevo equilibrio.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "$$K_c = \\frac{(0{,}20)(0{,}20)}{(0{,}40)(0{,}10)} = 1{,}00$$", porque: "Primero calculamos K con las concentraciones del equilibrio inicial, que es la constante a esa temperatura. Obtenemos 1,00." },
          { paso: "Justo después de agregar Cl2: $Q = \\frac{(0{,}20)(0{,}20)}{(0{,}40)(0{,}40)} = 0{,}25 < 1{,}00$. El sistema avanza hacia los productos.", porque: "Al agregar Cl2 aumenta el denominador, así que Q baja. Como Q < K, hay poco CH3Cl y HCl respecto del nuevo equilibrio, y el sistema se mueve hacia la derecha." }
        ],
        resultado: "$Q = 0{,}25 < K_c = 1{,}00$: avanza hacia los productos"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Tabla: sea $y$ lo que reacciona de CH4 y de Cl2. $[\\text{CH}_4] = [\\text{Cl}_2] = 0{,}40 - y$; $[\\text{CH}_3\\text{Cl}] = [\\text{HCl}] = 0{,}20 + y$.", porque: "Cada mol de CH4 consumido consume 1 mol de Cl2 y produce 1 mol de CH3Cl y 1 mol de HCl. Escribimos el equilibrio con ese cambio." },
          { paso: "$$K_c = \\frac{(0{,}20 + y)^2}{(0{,}40 - y)^2} = 1{,}00 \\Rightarrow \\frac{0{,}20 + y}{0{,}40 - y} = 1 \\Rightarrow y = 0{,}10\\ \\text{M}$$", porque: "Como ambos lados son cuadrados, tomamos raíz cuadrada y nos queda una ecuación lineal. La raíz negativa no tiene sentido físico porque daría concentraciones negativas. Despejamos y = 0,10 M." },
          { paso: "Nuevo equilibrio: $[\\text{CH}_4] = [\\text{Cl}_2] = [\\text{CH}_3\\text{Cl}] = [\\text{HCl}] = 0{,}30\\ \\text{M}$", porque: "Reemplazamos y = 0,10 M en la tabla. Verificamos: Kc = (0,30)(0,30)/((0,30)(0,30)) = 1,00, que coincide con el valor de K." }
        ],
        resultado: "Las cuatro especies quedan en 0,30 M"
      }
    ],
    errores_tipicos: [
      { error: "Creer que al agregar un reactivo cambia el valor de K.", como_evitar: "K depende solo de la temperatura. Agregar un reactivo cambia Q, no K." },
      { error: "Calcular Q con la concentración de Cl2 del equilibrio anterior (0,10 M) en lugar de la nueva (0,40 M).", como_evitar: "Q se calcula con las concentraciones del momento de la perturbación." },
      { error: "Poner [CH4] = 0,40 + y, es decir sumar y a los reactivos en lugar de restarla.", como_evitar: "Los reactivos disminuyen y los productos aumentan en la misma cantidad y." }
    ]
  },
  {
    num: 18,
    nivel: "Avanzado",
    temas: ["equilibrio", "termodinamica"],
    enunciado: "Para el equilibrio CO(g) + NO2(g) <=> CO2(g) + NO(g) se midieron los valores de Kc: 500 K: Kc = 2,00; 700 K: Kc = 0,500. a) Indique si la reacción directa es endotérmica o exotérmica. b) Calcule ΔH de la reacción directa, en kJ/mol, usando la ecuación de van't Hoff ln(K2/K1) = −(ΔH/R)(1/T2 − 1/T1), con R = 8,314 J/(mol·K). Suponga que ΔH no varía en ese intervalo de temperatura.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Al subir T de 500 K a 700 K, Kc baja de 2,00 a 0,500.", porque: "Comparamos los dos valores en orden creciente de temperatura. Una constante que disminuye al aumentar T es la señal de una reacción directa que libera calor." },
          { paso: "Conclusión: la reacción directa es exotérmica (ΔH < 0).", porque: "Si al subir T el equilibrio se corre hacia los reactivos, el sistema está absorbiendo el calor agregado. Eso implica que la reacción directa libera calor." }
        ],
        resultado: "Exotérmica (ΔH < 0)"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "$\\ln\\left(\\frac{K_2}{K_1}\\right) = \\ln\\left(\\frac{0{,}500}{2{,}00}\\right) = \\ln(0{,}250) = -1{,}386$", porque: "Calculamos el cociente de las constantes y su logaritmo natural. El resultado es negativo porque K2 es menor que K1." },
          { paso: "$\\frac{1}{T_2} - \\frac{1}{T_1} = \\frac{1}{700} - \\frac{1}{500} = -5{,}71 \\times 10^{-4}\\ \\text{K}^{-1}$", porque: "Usamos temperaturas absolutas en kelvin. La diferencia es negativa porque T2 es mayor que T1." },
          { paso: "$\\Delta H = -R\\,\\frac{\\ln(K_2/K_1)}{1/T_2 - 1/T_1} = -\\frac{(8{,}314)(-1{,}386)}{-5{,}71 \\times 10^{-4}} = -2{,}02 \\times 10^{4}\\ \\text{J/mol} = -20{,}2\\ \\text{kJ/mol}$", porque: "Despejamos ΔH de la ecuación de van't Hoff. Multiplicar −R por el logaritmo negativo da un numerador positivo, y dividir por un denominador negativo da ΔH negativo. Esto confirma la conclusión de a)." }
        ],
        resultado: "$\\Delta H \\approx -20{,}2$ kJ/mol (exotérmica)"
      }
    ],
    errores_tipicos: [
      { error: "Usar las temperaturas en °C (500 y 700) en lugar de kelvin.", como_evitar: "Siempre convertir a K antes de usar la ecuación de van't Hoff." },
      { error: "Invertir el cociente ln(K1/K2), lo que cambia el signo de ΔH.", como_evitar: "El orden de K2/K1 debe coincidir con el orden de (1/T2 − 1/T1)." },
      { error: "Mezclar unidades: usar R = 0,082 con ΔH en J, o dar el resultado en J y no en kJ.", como_evitar: "Con R = 8,314 J/(mol·K), el ΔH sale en J/mol. Dividí por 1000 para pasar a kJ/mol." }
    ]
  },
  {
    num: 19,
    nivel: "Avanzado",
    temas: ["equilibrio", "gases"],
    enunciado: "El bicarbonato de amonio se descompone según el equilibrio heterogéneo NH4HCO3(s) <=> NH3(g) + CO2(g) + H2O(g). En un recipiente cerrado a temperatura constante, con bicarbonato sólido presente, se mide Kp = 0,0270 atm^3. a) Escriba la expresión de Kp. b) Calcule la presión total de equilibrio. c) Si se reduce el volumen del recipiente a la mitad, a temperatura constante y con sólido todavía presente, ¿cuál es la nueva presión total? Justifique.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "$$K_p = p_{\\text{NH}_3}\\,p_{\\text{CO}_2}\\,p_{\\text{H}_2\\text{O}}$$", porque: "Solo entran los gases; el NH4HCO3(s) no aparece. Los tres gases tienen coeficiente 1, así que se multiplican sin exponentes." },
          { paso: "Unidades: atm × atm × atm = $\\text{atm}^3$, que coinciden con las del dato.", porque: "La suma de tres presiones multiplicadas da atm^3. Verificar las unidades nos sirve de chequeo para no olvidar un gas o un exponente." }
        ],
        resultado: "$K_p = p_{\\text{NH}_3}\\,p_{\\text{CO}_2}\\,p_{\\text{H}_2\\text{O}}$ (atm^3)"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Por estequiometría 1:1:1, $p_{\\text{NH}_3} = p_{\\text{CO}_2} = p_{\\text{H}_2\\text{O}} = p$; $p^3 = 0{,}0270 \\Rightarrow p = 0{,}300\\ \\text{atm}$", porque: "Se forman igual cantidad de cada gas, así que sus presiones parciales son iguales. Despejamos p = ∛0,0270 = 0,300 atm." },
          { paso: "$P_{\\text{total}} = 3 \\times 0{,}300 = 0{,}900\\ \\text{atm}$", porque: "La presión total es la suma de las tres presiones parciales de los gases. Así obtenemos la presión total de equilibrio." }
        ],
        resultado: "$P_{\\text{total}} = 0{,}900$ atm"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "Kp depende solo de T: sigue valiendo 0,0270 atm^3. Al reducir el volumen, las presiones parciales suben y el equilibrio se corre hacia el sólido, hasta que cada presión vuelve a 0,300 atm.", porque: "Con sólido presente, el equilibrio fija el producto de presiones parciales. Si el volumen baja, los gases tienden a superar Kp y se forma sólido, que consume gas hasta recuperar el valor de Kp." },
          { paso: "Nueva presión total: 0,900 atm (no cambia). Solo aumenta la cantidad de sólido.", porque: "Como cada presión parcial vuelve a 0,300 atm, la presión total también vuelve a 0,900 atm. El cambio de volumen modifica la cantidad de sólido, no la presión de equilibrio." }
        ],
        resultado: "La presión total sigue en 0,900 atm"
      }
    ],
    errores_tipicos: [
      { error: "Incluir NH4HCO3(s) en la expresión de Kp.", como_evitar: "Los sólidos puros no entran en Kp, aunque sean reactivos del equilibrio." },
      { error: "Pensar que al reducir el volumen sube la presión total, sin considerar que se forma sólido.", como_evitar: "Con sólido presente, Kp fija la presión de equilibrio. El sistema compensa el cambio de volumen formando sólido." },
      { error: "Calcular p = Kp/3 en lugar de p = ∛Kp porque los tres gases son iguales.", como_evitar: "Como son tres factores iguales, p^3 = Kp: se saca la raíz cúbica." }
    ]
  },
  {
    num: 20,
    nivel: "Avanzado",
    temas: ["equilibrio", "gases"],
    enunciado: "A 1000 K se introducen 25,4 g de I2(g) en un recipiente cerrado de 2,00 L. Se establece el equilibrio I2(g) <=> 2 I(g). En el equilibrio se encuentran 15,0 g de I2 sin disociar. a) Calcule el grado de disociación α (fracción de I2 descompuesta) y la constante Kc a 1000 K. b) Si el mismo sistema en equilibrio se pasa a un recipiente de 4,00 L a la misma temperatura, calcule el nuevo α.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "$M(\\text{I}_2) = 2 \\times 126{,}9 = 253{,}8\\ \\text{g/mol}$; $n_0 = \\frac{25{,}4}{253{,}8} = 0{,}1001\\ \\text{mol}$; $n_{\\text{I}_2,\\text{eq}} = \\frac{15{,}0}{253{,}8} = 0{,}0591\\ \\text{mol}$", porque: "Pasamos las masas a moles con la masa molar del I2. Así tenemos la cantidad inicial y la que queda sin disociar. Las constantes y los grados se calculan con moles o concentraciones, no con gramos." },
          { paso: "I2 disociado: $0{,}1001 - 0{,}0591 = 0{,}0410$ mol; $\\alpha = \\frac{0{,}0410}{0{,}1001} = 0{,}409$ (40,9 %)", porque: "Lo que falta del I2 inicial es lo que se disoció. Dividimos por la cantidad inicial para obtener la fracción descompuesta, que es α." },
          { paso: "$[\\text{I}_2] = \\frac{0{,}0591}{2{,}00} = 0{,}0296\\ \\text{M}$; $[\\text{I}] = \\frac{2 \\times 0{,}0410}{2{,}00} = 0{,}0410\\ \\text{M}$", porque: "Dividimos los moles de cada especie por el volumen de 2,00 L. Por cada mol de I2 disociado se forman 2 mol de I, así que [I] es el doble de lo disociado por litro." },
          { paso: "$$K_c = \\frac{[\\text{I}]^2}{[\\text{I}_2]} = \\frac{(0{,}0410)^2}{0{,}0296} = 5{,}68 \\times 10^{-2}\\ \\text{M}$$", porque: "Usamos las concentraciones de equilibrio: el I, con coeficiente 2, va al cuadrado. Calculamos 0,0410^2 = 1,68 × 10^-3 y lo dividimos por 0,0296. Las unidades son M porque Δn = 1." }
        ],
        resultado: "$\\alpha = 0{,}409$ (40,9 %); $K_c = 5{,}68 \\times 10^{-2}$ M"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Con V = 4,00 L y n0 = 0,1001 mol: $K_c = \\frac{[\\text{I}]^2}{[\\text{I}_2]} = \\frac{4\\,\\alpha^2\\,n_0}{V(1-\\alpha)} = \\frac{0{,}1001\\,\\alpha^2}{1-\\alpha} = 0{,}0568$", porque: "Escribimos las concentraciones en función de α: [I] = 2αn0/V y [I2] = (1 − α)n0/V. Reemplazamos en Kc con V = 4,00 L y despejamos la ecuación en α." },
          { paso: "$\\alpha^2 + 0{,}568\\,\\alpha - 0{,}568 = 0 \\Rightarrow \\alpha = \\frac{-0{,}568 + \\sqrt{0{,}568^2 + 4(0{,}568)}}{2} = 0{,}521$ (52,1 %)", porque: "Usamos la fórmula de la cuadrática con los coeficientes dados y tomamos la raíz positiva. Obtenemos α = 0,521, mayor que el 40,9 % a 2,00 L." },
          { paso: "Interpretación: al diluir, el equilibrio se corre hacia el lado con más moles de gas (2 I).", porque: "Al aumentar el volumen baja la presión, y el sistema se desplaza hacia el lado con más moles de gas para compensarlo. Por eso aumenta la disociación de I2." }
        ],
        resultado: "$\\alpha \\approx 0{,}521$ (52,1 %) a 4,00 L"
      }
    ],
    errores_tipicos: [
      { error: "Usar gramos en lugar de moles para calcular α o Kc.", como_evitar: "Pasá las masas a moles con la masa molar antes de cualquier cálculo de equilibrio." },
      { error: "Olvidar el exponente 2 del I al escribir Kc = [I]/[I2].", como_evitar: "El coeficiente 2 del I aparece como exponente en el numerador." },
      { error: "Creer que cambiar el volumen no afecta α porque la temperatura no cambia.", como_evitar: "El volumen modifica las concentraciones y, por Le Chatelier, desplaza el equilibrio hacia el lado con más moles de gas." }
    ]
  }
];
