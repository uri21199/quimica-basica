window.EJERCITACION = window.EJERCITACION || {};

window.EJERCITACION["equilibrio"] = [
  {
    num: 1,
    nivel: "Básico",
    temas: ["equilibrio"],
    enunciado: "Para el sistema C(s) + CO2(g) <=> 2 CO(g), en un recipiente cerrado de 2,00 L a 1000 K, se determina que en el equilibrio hay 0,100 mol de CO2(g) y 0,400 mol de CO(g), junto con carbono solido en exceso. a) Escriba la expresion de Kc. b) Calcule el valor de Kc a 1000 K e indique sus unidades.",
    resolucion: [
      {
        parte: "",
        pasos: [
          { paso: "Expresion de $K_c$: $$K_c = \\frac{[\\text{CO}]^2}{[\\text{CO}_2]}$$ El $\\text{C}(\\text{s})$ no aparece en la expresion.", porque: "Usamos la ecuacion balanceada para escribir $K_c$: los productos van en el numerador y los reactivos en el denominador, cada uno elevado a su coeficiente. Como el $\\text{CO}$ tiene coeficiente 2, aparece al cuadrado en el numerador, mientras que el $\\text{CO}_2$ va en el denominador sin exponente. El $\\text{C}(\\text{s})$ no entra porque es un solido puro y su concentracion no cambia durante la reaccion." },
          { paso: "$$[\\text{CO}_2] = \\frac{0{,}100\\ \\text{mol}}{2{,}00\\ \\text{L}} = 0{,}0500\\ \\text{M};\\quad [\\text{CO}] = \\frac{0{,}400\\ \\text{mol}}{2{,}00\\ \\text{L}} = 0{,}200\\ \\text{M}$$", porque: "Dado que $K_c$ se define con concentraciones molares, pasamos los moles de equilibrio a $\\text{mol/L}$ dividiendo por el volumen del recipiente. Calculamos $\\frac{0{,}100\\ \\text{mol}}{2{,}00\\ \\text{L}} = 0{,}0500\\ \\text{M}$ para el $\\text{CO}_2$ y $\\frac{0{,}400\\ \\text{mol}}{2{,}00\\ \\text{L}} = 0{,}200\\ \\text{M}$ para el $\\text{CO}$. Como el volumen es el mismo para todos los gases, esta division sirve para las dos especies, y reemplazar los moles directamente en $K_c$ daria un resultado incorrecto." },
          { paso: "$$K_c = \\frac{(0{,}200)^2}{0{,}0500} = \\frac{0{,}0400}{0{,}0500} = 0{,}800$$", porque: "Reemplazamos en la expresion de $K_c$ las concentraciones de equilibrio que acabamos de calcular. El $\\text{CO}$ queda elevado al cuadrado, y lo dividimos por la concentracion de $\\text{CO}_2$, con lo que obtenemos $\\frac{0{,}0400}{0{,}0500} = 0{,}800$. Entonces el valor de $K_c$ a $1000\\ \\text{K}$ es $0{,}80\\ \\text{mol/L}$, y sus unidades salen de la expresion misma." }
        ],
        resultado: "$K_c = 0{,}80\\ \\text{mol/L}$ a $1000\\ \\text{K}$"
      }
    ],
    errores_tipicos: [
      { error: "Incluir C(s) en la expresion de Kc, escribiendo Kc = [CO]^2 / ([C][CO2]).", como_evitar: "El carbono es un solido puro; su concentracion es constante y no entra en Kc." },
      { error: "Usar moles en vez de concentraciones: Kc = 0,400^2 / 0,100 = 1,60.", como_evitar: "Dividir por el volumen (2,00 L) antes de calcular Kc. Kc siempre se calcula con mol/L." },
      { error: "Olvidar el exponente 2 del CO y escribir Kc = [CO] / [CO2].", como_evitar: "Los exponentes de la expresion son los coeficientes de la ecuacion balanceada." }
    ]
  },
  {
    num: 2,
    nivel: "Básico",
    temas: ["equilibrio"],
    enunciado: "En un recipiente de 5,00 L, a temperatura fija, el sistema N2(g) + 3 H2(g) <=> 2 NH3(g) alcanza el equilibrio con 0,200 mol de N2(g), 0,300 mol de H2(g) y 0,400 mol de NH3(g). Calcule el valor de Kc e indique sus unidades.",
    resolucion: [
      {
        parte: "",
        pasos: [
          { paso: "$$[\\text{N}_2] = \\frac{0{,}200}{5{,}00} = 0{,}0400\\ \\text{M};\\quad [\\text{H}_2] = \\frac{0{,}300}{5{,}00} = 0{,}0600\\ \\text{M};\\quad [\\text{NH}_3] = \\frac{0{,}400}{5{,}00} = 0{,}0800\\ \\text{M}$$", porque: "Los moles de equilibrio se pasan a concentracion dividiendo cada uno por el volumen de $5{,}00\\ \\text{L}$, porque $K_c$ se expresa en concentraciones y no en moles. Calculamos $\\frac{0{,}200}{5{,}00} = 0{,}0400\\ \\text{M}$ para el $\\text{N}_2$, $\\frac{0{,}300}{5{,}00} = 0{,}0600\\ \\text{M}$ para el $\\text{H}_2$ y $\\frac{0{,}400}{5{,}00} = 0{,}0800\\ \\text{M}$ para el $\\text{NH}_3$. Como el volumen es comun a las tres especies, la misma division se aplica a todas, y conviene verificar que queden en $\\text{M}$ antes de reemplazar." },
          { paso: "$$K_c = \\frac{[\\text{NH}_3]^2}{[\\text{N}_2] \\times [\\text{H}_2]^3} = \\frac{(0{,}0800)^2}{0{,}0400 \\times (0{,}0600)^3}$$", porque: "Usamos la ecuacion $\\text{N}_2 + 3\\,\\text{H}_2 \\rightleftharpoons 2\\,\\text{NH}_3$ para armar la expresion de $K_c$: el $\\text{NH}_3$ va arriba con su coeficiente 2 como exponente, y el $\\text{N}_2$ y el $\\text{H}_2$ van abajo. Como el $\\text{H}_2$ tiene coeficiente 3, su concentracion se eleva al cubo, mientras que el $\\text{N}_2$ no lleva exponente extra. Reemplazamos con $0{,}0800\\ \\text{M}$ de $\\text{NH}_3$, $0{,}0400\\ \\text{M}$ de $\\text{N}_2$ y $0{,}0600\\ \\text{M}$ de $\\text{H}_2$, y obtenemos $\\frac{(0{,}0800)^2}{0{,}0400 \\times (0{,}0600)^3}$." },
          { paso: "$$K_c = \\frac{0{,}00640}{0{,}0400 \\times 2{,}16 \\times 10^{-4}} = \\frac{0{,}00640}{8{,}64 \\times 10^{-6}} = 7{,}41 \\times 10^{2}$$", porque: "Primero resolvemos las potencias y el producto del denominador, y despues hacemos la division, porque el orden de operaciones lo exige. Con notacion cientifica conviene multiplicar las mantisas y sumar los exponentes, lo que da $8{,}64 \\times 10^{-6}$ en el denominador. Entonces $\\frac{0{,}00640}{8{,}64 \\times 10^{-6}} = 7{,}41 \\times 10^{2}$, valor que se informa con tres cifras significativas como los datos del enunciado, en unidades de $\\text{M}^{-2}$." }
        ],
        resultado: "$K_c = 7{,}41 \\times 10^{2}\\ \\text{M}^{-2}$"
      }
    ],
    errores_tipicos: [
      { error: "Usar [H2]^1 en lugar de [H2]^3, o escribir el coeficiente 1 para el NH3.", como_evitar: "Los exponentes se leen de la ecuacion balanceada: el H2 tiene coeficiente 3 y el NH3 tiene coeficiente 2." },
      { error: "Dar Kc sin unidades, cuando en este caso son M^-2.", como_evitar: "Calcule Delta n en gases: 2 - 4 = -2, y las unidades son M^(Delta n)." },
      { error: "Usar los moles directamente (0,0800 mol de NH3 en lugar de 0,0800 M) sin dividir por el volumen.", como_evitar: "Para Kc con Delta n distinto de 0, el volumen si importa: divida siempre por el volumen antes de reemplazar." }
    ]
  },
  {
    num: 3,
    nivel: "Básico",
    temas: ["equilibrio"],
    enunciado: "Para el sistema H2(g) + CO2(g) <=> H2O(g) + CO(g), Kc = 1,6 a 1000 K. En un recipiente de 2,00 L, a 1000 K, se mezclan 0,40 mol de H2, 0,40 mol de CO2, 0,10 mol de H2O y 0,40 mol de CO. Calcule Q e indique hacia donde evoluciona el sistema.",
    resolucion: [
      {
        parte: "",
        pasos: [
          { paso: "Concentraciones iniciales: $$[\\text{H}_2] = [\\text{CO}_2] = [\\text{CO}] = 0{,}20\\ \\text{M};\\quad [\\text{H}_2\\text{O}] = 0{,}050\\ \\text{M}$$", porque: "$Q$ se calcula con concentraciones molares, asi que cada cantidad inicial se divide por el volumen de $2{,}00\\ \\text{L}$. Calculamos $\\frac{0{,}40\\ \\text{mol}}{2{,}00\\ \\text{L}} = 0{,}20\\ \\text{M}$ para $\\text{H}_2$, $\\text{CO}_2$ y $\\text{CO}$, y $\\frac{0{,}10\\ \\text{mol}}{2{,}00\\ \\text{L}} = 0{,}050\\ \\text{M}$ para el $\\text{H}_2\\text{O}$. Como todavia no hubo reaccion, estas son las concentraciones del momento de la mezcla, y son las que se usan para armar $Q$." },
          { paso: "$$Q = \\frac{[\\text{H}_2\\text{O}][\\text{CO}]}{[\\text{H}_2][\\text{CO}_2]} = \\frac{0{,}050 \\times 0{,}20}{0{,}20 \\times 0{,}20} = 0{,}25$$", porque: "Usamos la misma forma que $K_c$: los productos ($\\text{H}_2\\text{O}$ y $\\text{CO}$) van en el numerador y los reactivos ($\\text{H}_2$ y $\\text{CO}_2$) en el denominador. La diferencia es que $Q$ usa concentraciones actuales y no las de equilibrio. Reemplazamos $\\frac{0{,}050 \\times 0{,}20}{0{,}20 \\times 0{,}20}$ y obtenemos $0{,}25$. Como todos los coeficientes son unitarios, no aparecen exponentes en la expresion." },
          { paso: "$$Q = 0{,}25 < K_c = 1{,}6$$", porque: "Comparamos $Q$ con $K_c$ porque esa comparacion indica en que sentido avanza la reaccion. Dado que $0{,}25$ es menor que $1{,}6$, el sistema tiene menos producto del que tendria en equilibrio. Por eso la reaccion neta forma productos hasta que $Q$ iguala a $K_c$. Esta comparacion predice el sentido, pero no da las cantidades finales." },
          { paso: "El sistema evoluciona hacia la derecha (se forman $\\text{H}_2\\text{O}$ y $\\text{CO}$).", porque: "Para confirmar el sentido observamos como cambia $Q$ al avanzar la reaccion: al formarse productos suben $[\\text{H}_2\\text{O}]$ y $[\\text{CO}]$ en el numerador, y bajan $[\\text{H}_2]$ y $[\\text{CO}_2]$ en el denominador. Entonces $Q$ aumenta desde $0{,}25$ hacia el valor de $K_c$. Cuando $Q$ iguale a $K_c$ se alcanza el equilibrio, asi que la evolucion hacia la derecha es una conclusion cualitativa basada en esa comparacion." }
        ],
        resultado: "$Q = 0{,}25$; como $Q < K_c$, evoluciona hacia los productos"
      }
    ],
    errores_tipicos: [
      { error: "Calcular Q con moles en lugar de concentraciones, por ejemplo usando 0,10 mol de H2O y 0,40 mol de CO2 directamente.", como_evitar: "Dividir cada cantidad por el volumen antes de armar Q. Con otro volumen el resultado cambia." },
      { error: "Confundir Q con Kc y concluir que el sistema ya esta en equilibrio.", como_evitar: "Si Q = Kc hay equilibrio. Calcule Q con las condiciones actuales y comparelo con Kc." },
      { error: "Decir que Q < Kc lleva hacia los reactivos.", como_evitar: "Q < Kc significa poco producto: el sistema avanza hacia los productos. Q > Kc avanza hacia los reactivos." }
    ]
  },
  {
    num: 4,
    nivel: "Básico",
    temas: ["equilibrio"],
    enunciado: "Para el equilibrio CaCO3(s) <=> CaO(s) + CO2(g), Kp = 0,236 atm a 800 K. Calcule el valor de Kc a 800 K e indique sus unidades.",
    resolucion: [
      {
        parte: "",
        pasos: [
          { paso: "Solo el $\\text{CO}_2$ es gas: $$\\Delta n = 1 - 0 = 1$$", porque: "Calculamos $\\Delta n$ como la suma de los coeficientes gaseosos de los productos menos la de los reactivos. En $\\text{CaCO}_3(\\text{s}) \\rightleftharpoons \\text{CaO}(\\text{s}) + \\text{CO}_2(\\text{g})$ solo el $\\text{CO}_2$ es gas, asi que en productos hay un gas y en reactivos ninguno, y $\\Delta n = 1 - 0 = 1$. Los solidos no entran en $\\Delta n$ porque su concentracion es constante y no aparecen en $K_p$ ni en $K_c$." },
          { paso: "$K_p = K_c\\,(RT)^{\\Delta n}$ con $\\Delta n = 1$, entonces $$K_c = \\frac{K_p}{RT}$$", porque: "Usamos la relacion entre $K_p$ y $K_c$ para gases ideales, porque $K_p$ trabaja con presiones y $K_c$ con concentraciones. Como $P = \\frac{nRT}{V}$ equivale a $\\frac{n}{V} \\times RT$, cada presion parcial es una concentracion multiplicada por $RT$, y eso hace aparecer $(RT)$ elevado a $\\Delta n$. Con $\\Delta n = 1$ el factor aparece una sola vez, por eso al despejar queda $K_c = \\frac{K_p}{RT}$." },
          { paso: "$$RT = 0{,}0821\\ \\text{L atm/(mol K)} \\times 800\\ \\text{K} = 65{,}7\\ \\text{L atm/mol}$$", porque: "Calculamos el producto $RT$ porque lo necesitamos para despejar $K_c$ en el paso siguiente. Usamos $R = 0{,}0821\\ \\text{L atm/(mol K)}$, que corresponde a presiones en $\\text{atm}$ y volumen en litros, y $T = 800\\ \\text{K}$. Entonces $0{,}0821 \\times 800 = 65{,}7$, y el resultado queda en $\\text{L atm/mol}$, que son las unidades de $RT$." },
          { paso: "$$K_c = \\frac{0{,}236\\ \\text{atm}}{65{,}7\\ \\text{L atm/mol}} = 3{,}59 \\times 10^{-3}\\ \\text{mol/L}$$", porque: "Dividimos $K_p$ por $RT$, porque con $\\Delta n = 1$ vale $K_c = \\frac{K_p}{RT}$. Reemplazamos $\\frac{0{,}236\\ \\text{atm}}{65{,}7\\ \\text{L atm/mol}}$, y el $\\text{atm}$ del numerador se cancela con el del denominador. Asi obtenemos $3{,}59 \\times 10^{-3}\\ \\text{mol/L}$, que son las unidades de $K_c$ cuando $\\Delta n = 1$. Conviene comprobar que la unidad final coincida con ese valor de $\\Delta n$." }
        ],
        resultado: "$K_c = 3{,}59 \\times 10^{-3}\\ \\text{mol/L}$ a $800\\ \\text{K}$"
      }
    ],
    errores_tipicos: [
      { error: "Contar los solidos en Delta n y usar Delta n = 2.", como_evitar: "Solo cuentan los gases. CaCO3 y CaO son solidos y no entran en Delta n." },
      { error: "Calcular Kc = Kp x RT en lugar de Kp / RT.", como_evitar: "Con Delta n = 1, Kp = Kc RT, asi que Kc = Kp / RT. Revise el sentido de la division." },
      { error: "Usar R = 8,31 J/(mol K) con la presion en atm.", como_evitar: "Con presiones en atm use R = 0,0821 L atm/(mol K)." }
    ]
  },
  {
    num: 5,
    nivel: "Básico",
    temas: ["equilibrio"],
    enunciado: "El sistema N2(g) + 3 H2(g) <=> 2 NH3(g), con Delta H < 0, esta en equilibrio en un recipiente cerrado. Indique hacia donde se desplaza el equilibrio y si cambia el valor de Kc cuando: a) se agrega H2(g) a volumen constante; b) se reduce el volumen a la mitad a temperatura constante; c) se aumenta la temperatura; d) se agrega un catalizador.",
    resolucion: [
      {
        parte: "",
        pasos: [
          { paso: "a) Al agregar $\\text{H}_2$ aumenta $[\\text{H}_2]$. El sistema consume $\\text{H}_2$ y forma $\\text{NH}_3$: se desplaza hacia la derecha. $K_c$ no cambia.", porque: "Usamos el principio de Le Chatelier: ante un agregado, el sistema consume parte de la sustancia agregada para contrarrestar el cambio. Como el $\\text{H}_2$ aumenta, el sistema lo consume y forma $\\text{NH}_3$, por lo que el equilibrio se desplaza hacia la derecha. $K_c$ no cambia porque la temperatura se mantiene constante y $K_c$ depende solo de $T$. Entonces la composicion cambia, pero el valor de $K_c$ queda igual." },
          { paso: "b) Al reducir el volumen sube la presion: el sistema avanza hacia el lado con menos moles de gas ($4\\ \\text{mol}$ de reactivos contra $2\\ \\text{mol}$ de $\\text{NH}_3$), es decir hacia la derecha. $K_c$ no cambia.", porque: "Reducir el volumen sube la presion total, y el sistema responde avanzando hacia el lado con menos moles de gas. Comparamos los $4\\ \\text{mol}$ de gases en reactivos ($1 + 3$) con los $2\\ \\text{mol}$ de $\\text{NH}_3$ en productos, asi que el lado del $\\text{NH}_3$ es el que tiene menos moles. Por eso el equilibrio se desplaza hacia la derecha. $K_c$ no cambia porque la temperatura no varia, y la presion solo modifica la composicion." },
          { paso: "c) Como la reaccion directa es exotermica ($\\Delta H < 0$), el calor es un producto. Al subir $T$ el sistema consume ese calor: se desplaza hacia la izquierda y $K_c$ disminuye.", porque: "Primero identificamos el signo de $\\Delta H$: como $\\Delta H < 0$, la reaccion directa es exotermica y el calor aparece como producto. Al subir $T$ se agrega calor, y el sistema lo consume desplazandose hacia los reactivos, es decir hacia la izquierda. Por eso $K_c$ disminuye, porque la constante depende de la temperatura. Este razonamiento sirve para cualquier reaccion exotermica sometida a un aumento de temperatura." },
          { paso: "d) El catalizador acelera por igual la reaccion directa y la inversa. No desplaza el equilibrio y $K_c$ no cambia.", porque: "El catalizador baja la energia de activacion, y lo hace igual para la reaccion directa y la inversa. Por eso acelera ambos sentidos en la misma proporcion y no altera la composicion de equilibrio. Entonces no se desplaza el equilibrio, y $K_c$ no cambia porque depende solo de la temperatura, que el catalizador no modifica." }
        ],
        resultado: "a) derecha, $K_c$ igual; b) derecha (hacia $\\text{NH}_3$), $K_c$ igual; c) izquierda, $K_c$ disminuye; d) no se desplaza, $K_c$ igual"
      }
    ],
    errores_tipicos: [
      { error: "En b) decir que al reducir el volumen el sistema va hacia N2 y H2 porque 'hay mas moles de reactivos'.", como_evitar: "Compare los moles gaseosos de cada lado: 4 de reactivos frente a 2 de NH3. La presion baja hacia el lado con menos moles." },
      { error: "En c) decir que al subir la temperatura se favorece el NH3 porque 'es mas rapido'.", como_evitar: "Piense el calor como producto de la reaccion directa: subir T empuja al lado contrario, y Kc baja." },
      { error: "Creer que el catalizador cambia el rendimiento final o el valor de Kc.", como_evitar: "El catalizador modifica solo la velocidad. La composicion de equilibrio y Kc no cambian." }
    ]
  },
  {
    num: 6,
    nivel: "Intermedio",
    temas: ["equilibrio"],
    enunciado: "En un recipiente de 2,00 L a 400 K se introducen 0,600 mol de NOCl(g), que se descompone segun 2 NOCl(g) <=> 2 NO(g) + Cl2(g). Al alcanzar el equilibrio se ha disociado el 25,0 % del NOCl inicial. a) Calcule Kc. b) Calcule Kp a 400 K.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "$$[\\text{NOCl}]_0 = \\frac{0{,}600\\ \\text{mol}}{2{,}00\\ \\text{L}} = 0{,}300\\ \\text{M}$$ Se consume el $25{,}0\\%$: $0{,}25 \\times 0{,}300 = 0{,}0750\\ \\text{M}$.", porque: "Primero pasamos la cantidad inicial a concentracion dividiendo $0{,}600\\ \\text{mol}$ por el volumen de $2{,}00\\ \\text{L}$, lo que da $0{,}300\\ \\text{M}$. Luego aplicamos el $25{,}0\\%$ de disociacion sobre esa concentracion inicial: $0{,}25 \\times 0{,}300 = 0{,}0750\\ \\text{M}$. Como el porcentaje se refiere al $\\text{NOCl}$ original, este valor es la cantidad que reacciona. Conviene verificar que el porcentaje se tome sobre la inicial y no sobre la de equilibrio." },
          { paso: "Por la estequiometria $2:2:1$: $$[\\text{NO}] = 0{,}0750\\ \\text{M};\\quad [\\text{Cl}_2] = \\frac{0{,}0750}{2} = 0{,}0375\\ \\text{M};\\quad [\\text{NOCl}]_{\\text{eq}} = 0{,}300 - 0{,}0750 = 0{,}225\\ \\text{M}$$", porque: "Usamos los coeficientes para relacionar lo que reacciona con lo que se forma: $2\\ \\text{mol}$ de $\\text{NOCl}$ consumidos producen $2\\ \\text{mol}$ de $\\text{NO}$ y $1\\ \\text{mol}$ de $\\text{Cl}_2$. Como el $\\text{NO}$ tiene el mismo coeficiente que el $\\text{NOCl}$, $[\\text{NO}] = 0{,}0750\\ \\text{M}$, y el $\\text{Cl}_2$ es la mitad: $\\frac{0{,}0750}{2} = 0{,}0375\\ \\text{M}$. Por eso el $\\text{NOCl}$ que queda es la inicial menos lo consumido: $0{,}300 - 0{,}0750 = 0{,}225\\ \\text{M}$." },
          { paso: "$$K_c = \\frac{[\\text{NO}]^2\\,[\\text{Cl}_2]}{[\\text{NOCl}]^2} = \\frac{(0{,}0750)^2\\,(0{,}0375)}{(0{,}225)^2} = 4{,}17 \\times 10^{-3}\\ \\text{mol/L}$$", porque: "Aplicamos la expresion de $K_c$ de la ecuacion balanceada: el $\\text{NO}$ va al cuadrado y el $\\text{Cl}_2$ en el numerador, y el $\\text{NOCl}$ al cuadrado en el denominador. Reemplazamos $(0{,}0750)^2 \\times 0{,}0375$ arriba y $(0{,}225)^2$ abajo, y el cociente da $4{,}17 \\times 10^{-3}$. Las unidades salen en $\\text{mol/L}$, que es lo que corresponde a este cociente." }
        ],
        resultado: "$K_c = 4{,}17 \\times 10^{-3}\\ \\text{mol/L}$"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "$$\\Delta n = (2 + 1) - 2 = 1$$", porque: "Calculamos $\\Delta n$ con los moles gaseosos: los productos suman $2 + 1 = 3\\ \\text{mol}$ y los reactivos $2\\ \\text{mol}$, entonces $\\Delta n = (2 + 1) - 2 = 1$. Este valor fija el exponente de $RT$ al pasar de $K_c$ a $K_p$. Conviene tomar los coeficientes de la ecuacion balanceada y no los del enunciado." },
          { paso: "$$K_p = K_c\\,(RT)^{\\Delta n} = 4{,}17 \\times 10^{-3} \\times (0{,}0821 \\times 400) = 4{,}17 \\times 10^{-3} \\times 32{,}8 = 0{,}137\\ \\text{atm}$$", porque: "Aplicamos $K_p = K_c\\,(RT)^{\\Delta n}$, valida para gases ideales, y con $\\Delta n = 1$ el factor $RT$ aparece una sola vez. Reemplazamos $R = 0{,}0821$ y $T = 400\\ \\text{K}$, lo que da $RT = 32{,}8$, y multiplicamos $4{,}17 \\times 10^{-3}$ por ese valor. El resultado es $K_p = 0{,}137\\ \\text{atm}$ a $400\\ \\text{K}$, con $R$ en $\\text{L atm/(mol K)}$ porque $K_p$ trabaja con presiones en $\\text{atm}$." }
        ],
        resultado: "$K_p = 0{,}137\\ \\text{atm}$ a $400\\ \\text{K}$"
      }
    ],
    errores_tipicos: [
      { error: "Tomar 0,600 mol como concentracion en lugar de 0,300 M.", como_evitar: "Antes de cualquier calculo de equilibrio, divida los moles por el volumen." },
      { error: "Dar [Cl2] igual a [NO] olvidando que de 2 NOCl se forma 1 Cl2.", como_evitar: "Use los coeficientes de la ecuacion balanceada: el Cl2 formado es la mitad del NO formado." },
      { error: "En b) usar Delta n = 2 o Delta n = 0 en lugar de 1.", como_evitar: "Cuente los moles de gas de productos (2 + 1 = 3) y de reactivos (2), y reste." }
    ]
  },
  {
    num: 7,
    nivel: "Intermedio",
    temas: ["equilibrio"],
    enunciado: "Para el equilibrio 2 HI(g) <=> H2(g) + I2(g), Kp = 0,0156 a 700 K. En un recipiente rigido se introduce HI puro con una presion inicial de 1,00 atm, a 700 K. a) Calcule las presiones parciales de H2, I2 y HI en el equilibrio. b) Calcule la fraccion molar de H2 en el equilibrio.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Tabla de presiones: $$P(\\text{HI}) = 1{,}00 - 2x;\\quad P(\\text{H}_2) = P(\\text{I}_2) = x$$", porque: "Armamos la tabla de presiones con los coeficientes de la ecuacion $2\\,\\text{HI} \\rightleftharpoons \\text{H}_2 + \\text{I}_2$, porque el $\\text{HI}$ se consume de a 2 por cada producto formado. Si se forman $x\\ \\text{atm}$ de $\\text{H}_2$, tambien se forman $x\\ \\text{atm}$ de $\\text{I}_2$ y se consumen $2x\\ \\text{atm}$ de $\\text{HI}$. Por eso $P(\\text{HI}) = 1{,}00 - 2x$, partiendo de $1{,}00\\ \\text{atm}$. Plantear la tabla con los coeficientes evita errores en el resto del problema." },
          { paso: "$$K_p = \\frac{P(\\text{H}_2)\\,P(\\text{I}_2)}{P(\\text{HI})^2} = \\frac{x^2}{(1{,}00 - 2x)^2} = 0{,}0156$$", porque: "Escribimos $K_p$ con presiones parciales en $\\text{atm}$: los productos van arriba y el $\\text{HI}$ elevado a su coeficiente 2 va abajo. Reemplazamos $P(\\text{H}_2) = P(\\text{I}_2) = x$ y $P(\\text{HI}) = 1{,}00 - 2x$ de la tabla, lo que da $\\frac{x^2}{(1{,}00 - 2x)^2}$. Igualando a $K_p = 0{,}0156$ queda la ecuacion que hay que resolver para $x$." },
          { paso: "Como ambos miembros son cuadrados: $$\\frac{x}{1{,}00 - 2x} = \\sqrt{0{,}0156} = 0{,}1249$$", porque: "Dado que el numerador y el denominador son cuadrados, sacamos raiz cuadrada de ambos lados y tomamos solo la positiva. Calculamos $\\sqrt{0{,}0156} = 0{,}1249$, con lo que la ecuacion se vuelve lineal y se evita resolver una cuadratica completa. Conviene mantener $0{,}1249$ sin redondear antes de seguir, para no perder precision." },
          { paso: "$$x = 0{,}1249\\,(1{,}00 - 2x) \\rightarrow x = \\frac{0{,}1249}{1{,}2498} = 0{,}09994\\ \\text{atm}$$ Entonces $P(\\text{H}_2) = P(\\text{I}_2) = 0{,}0999\\ \\text{atm}$ y $P(\\text{HI}) = 1{,}00 - 0{,}1999 = 0{,}800\\ \\text{atm}$.", porque: "Despejamos $x$ multiplicando en cruz: $x = 0{,}1249\\,(1{,}00 - 2x)$, de donde $x = \\frac{0{,}1249}{1{,}2498} = 0{,}0999\\ \\text{atm}$. Reemplazamos ese $x$ en la tabla y obtenemos $P(\\text{HI}) = 1{,}00 - 0{,}1999 = 0{,}800\\ \\text{atm}$. Verificamos con $K_p$: $\\frac{(0{,}0999)^2}{(0{,}800)^2} = 0{,}0156$, y el resultado coincide con el dato del enunciado." }
        ],
        resultado: "$P(\\text{H}_2) = P(\\text{I}_2) = 0{,}0999\\ \\text{atm}$; $P(\\text{HI}) = 0{,}800\\ \\text{atm}$"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "$$\\Delta n = 2 - 2 = 0$$, asi que el numero total de moles no cambia y la presion total queda en $1{,}00\\ \\text{atm}$ ($0{,}800 + 0{,}0999 + 0{,}0999 = 1{,}00$).", porque: "Calculamos $\\Delta n$ con los coeficientes gaseosos: hay $2\\ \\text{mol}$ de $\\text{HI}$ en reactivos y $1 + 1 = 2\\ \\text{mol}$ de productos, entonces $\\Delta n = 0$. Por eso el numero total de moles no cambia durante la reaccion. Como volumen y temperatura son constantes, la presion total depende solo de los moles y sigue en $1{,}00\\ \\text{atm}$. Sumando $0{,}800 + 0{,}0999 + 0{,}0999$ se confirma ese valor." },
          { paso: "$$x(\\text{H}_2) = \\frac{P(\\text{H}_2)}{P_{\\text{total}}} = \\frac{0{,}0999}{1{,}00} = 0{,}0999$$", porque: "La fraccion molar de un gas es el cociente entre su presion parcial y la presion total de la mezcla, segun la ley de Dalton. Usamos la presion total de equilibrio, $1{,}00\\ \\text{atm}$, que es la suma de las tres presiones parciales. Entonces $x(\\text{H}_2) = \\frac{0{,}0999}{1{,}00} = 0{,}0999$. No se divide por la presion inicial de $\\text{HI}$, porque la mezcla en equilibrio es la que define el total." }
        ],
        resultado: "$x(\\text{H}_2) = 0{,}0999$"
      }
    ],
    errores_tipicos: [
      { error: "Escribir la tabla con 1,00 - x para el HI, olvidando el coeficiente 2.", como_evitar: "Por cada x de H2 que se forma se consumen 2x de HI. Use siempre los coeficientes en la tabla." },
      { error: "Creer que el valor de Kp depende de la presion inicial de HI.", como_evitar: "Kp depende solo de la temperatura. La presion inicial cambia las presiones de equilibrio, no el valor de Kp." },
      { error: "En b) dividir por la presion inicial de HI en vez de por la presion total de equilibrio.", como_evitar: "La fraccion molar siempre se divide por la presion total de la mezcla en equilibrio." }
    ]
  },
  {
    num: 8,
    nivel: "Intermedio",
    temas: ["equilibrio"],
    enunciado: "El equilibrio SO2Cl2(g) <=> SO2(g) + Cl2(g) tiene Kc = 0,0500 mol/L a 300 K. En un recipiente de 1,00 L se introducen 0,100 mol de SO2Cl2(g) puro. a) Calcule las concentraciones de todas las especies en el equilibrio. b) Luego se agregan 0,100 mol de Cl2(g) a volumen y temperatura constantes. Indique como cambian [SO2Cl2] y el valor de Kc.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Tabla ($\\text{mol/L}$, con $V = 1{,}00\\ \\text{L}$): $$[\\text{SO}_2\\text{Cl}_2] = 0{,}100 - x;\\quad [\\text{SO}_2] = x;\\quad [\\text{Cl}_2] = x$$", porque: "Armamos la tabla con $V = 1{,}00\\ \\text{L}$, de modo que los moles y las $\\text{mol/L}$ tienen el mismo valor numerico. Al inicio solo hay $\\text{SO}_2\\text{Cl}_2$ y no hay productos, asi que cada $x$ que se descompone forma $x$ de $\\text{SO}_2$ y $x$ de $\\text{Cl}_2$ por la estequiometria $1:1:1$. Por eso la fila del $\\text{SO}_2\\text{Cl}_2$ queda en $0{,}100 - x$, y las otras dos en $x$." },
          { paso: "$$K_c = \\frac{x^2}{0{,}100 - x} = 0{,}0500$$", porque: "Escribimos $K_c$ a partir de la ecuacion balanceada: productos en el numerador y $\\text{SO}_2\\text{Cl}_2$ sin disociar en el denominador. Como todos los coeficientes son unitarios, cada concentracion aparece sin exponente adicional. Reemplazamos la fila de equilibrio y obtenemos $\\frac{x^2}{0{,}100 - x} = 0{,}0500$, una ecuacion en la que solo aparece $x$." },
          { paso: "$$x^2 + 0{,}0500\\,x - 0{,}00500 = 0,\\quad x = \\frac{-0{,}0500 + \\sqrt{0{,}0500^2 + 4 \\times 0{,}00500}}{2} = 0{,}0500\\ \\text{M}$$", porque: "Reordenamos la ecuacion multiplicando en cruz: $x^2 = K_c\\,(0{,}100 - x)$, que se convierte en $x^2 + 0{,}0500\\,x - 0{,}00500 = 0$. Aplicamos la formula resolvente y obtenemos $x = 0{,}0500\\ \\text{M}$, tomando la raiz positiva porque una concentracion no puede ser negativa. Ese valor de $x$ se usa luego para calcular todas las especies." },
          { paso: "Equilibrio: $$[\\text{SO}_2\\text{Cl}_2] = 0{,}0500\\ \\text{M};\\quad [\\text{SO}_2] = [\\text{Cl}_2] = 0{,}0500\\ \\text{M}$$ Verificacion: $\\frac{0{,}0500^2}{0{,}0500} = 0{,}0500 = K_c$.", porque: "Con $x = 0{,}0500\\ \\text{M}$, el $\\text{SO}_2\\text{Cl}_2$ queda en $0{,}100 - 0{,}0500 = 0{,}0500\\ \\text{M}$, y el $\\text{SO}_2$ y el $\\text{Cl}_2$ valen $0{,}0500\\ \\text{M}$ cada uno. Para verificar reemplazamos en la expresion: $\\frac{0{,}0500^2}{0{,}0500} = 0{,}0500$, igual a $K_c$. Esta comprobacion detecta errores de cuenta antes de seguir con la parte b)." }
        ],
        resultado: "$[\\text{SO}_2\\text{Cl}_2] = [\\text{SO}_2] = [\\text{Cl}_2] = 0{,}0500\\ \\text{M}$"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Al agregar $\\text{Cl}_2$ sube su concentracion. El sistema consume el $\\text{Cl}_2$ agregado y forma $\\text{SO}_2\\text{Cl}_2$: el equilibrio se desplaza hacia los reactivos y $[\\text{SO}_2\\text{Cl}_2]$ aumenta.", porque: "Al agregar $0{,}100\\ \\text{mol}$ de $\\text{Cl}_2$ sube su concentracion, y el sistema responde consumiendo ese $\\text{Cl}_2$ para contrarrestar el cambio (principio de Le Chatelier). Como el $\\text{Cl}_2$ es un producto de $\\text{SO}_2\\text{Cl}_2 \\rightleftharpoons \\text{SO}_2 + \\text{Cl}_2$, consumirlo implica formar $\\text{SO}_2\\text{Cl}_2$. Entonces el equilibrio se desplaza hacia los reactivos y $[\\text{SO}_2\\text{Cl}_2]$ aumenta. Este cambio modifica la composicion, no la constante." },
          { paso: "$K_c$ no cambia.", porque: "$K_c$ depende solo de la temperatura, y en este caso la temperatura se mantiene constante. Por eso agregar $\\text{Cl}_2$ modifica las concentraciones de equilibrio, pero el valor de $K_c$ sigue en $0{,}0500\\ \\text{mol/L}$. Conviene distinguir: el desplazamiento cambia la composicion, mientras que la constante permanece igual." }
        ],
        resultado: "$[\\text{SO}_2\\text{Cl}_2]$ aumenta; $K_c$ no cambia"
      }
    ],
    errores_tipicos: [
      { error: "En a) usar 0,100 M como concentracion de SO2Cl2 en el equilibrio, sin restar x.", como_evitar: "Todo reactivo consumido se resta en la fila de equilibrio de la tabla." },
      { error: "Quedarse con la raiz negativa de la cuadratica (x = -0,15 M).", como_evitar: "Las concentraciones son positivas. De las dos raices se elige la positiva y se verifica el resultado." },
      { error: "En b) decir que Kc aumenta al agregar Cl2 porque hay mas reactivos.", como_evitar: "Agregar una sustancia desplaza el equilibrio, pero Kc solo cambia con la temperatura." }
    ]
  },
  {
    num: 9,
    nivel: "Intermedio",
    temas: ["equilibrio"],
    enunciado: "Se coloca NH4HS(s) en exceso en un recipiente rigido cerrado, a 298 K, donde se establece el equilibrio NH4HS(s) <=> NH3(g) + H2S(g), con Kp = 0,0400 atm^2. a) Calcule la presion total en el equilibrio. b) Calcule Kc a 298 K e indique si la presion total cambia al duplicar el volumen manteniendo la temperatura y con solido en exceso.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "$P(\\text{NH}_3) = P(\\text{H}_2\\text{S}) = x$, por la estequiometria $1:1$. El solido no aparece en $K_p$.", porque: "Usamos la estequiometria $1:1$ de $\\text{NH}_4\\text{HS}(\\text{s}) \\rightleftharpoons \\text{NH}_3(\\text{g}) + \\text{H}_2\\text{S}(\\text{g})$: cada gas se forma en la misma cantidad, asi que $P(\\text{NH}_3) = P(\\text{H}_2\\text{S}) = x$. El $\\text{NH}_4\\text{HS}$ es un solido y no ejerce presion parcial, por eso no aparece en la expresion de $K_p$. Entonces solo los gases entran en $K_p$ y en el calculo siguiente." },
          { paso: "$$K_p = P(\\text{NH}_3)\\,P(\\text{H}_2\\text{S}) = x^2 = 0{,}0400\\ \\text{atm}^2$$ entonces $x = 0{,}200\\ \\text{atm}$.", porque: "$K_p$ es el producto de las presiones parciales de los gases productos, cada una elevada a su coeficiente. Reemplazamos $P(\\text{NH}_3) = P(\\text{H}_2\\text{S}) = x$, y la expresion queda $x^2 = 0{,}0400\\ \\text{atm}^2$. Dado que $x$ es una presion, sacamos raiz cuadrada y obtenemos $x = 0{,}200\\ \\text{atm}$, tomando solo el valor positivo." },
          { paso: "$$P_{\\text{total}} = 0{,}200 + 0{,}200 = 0{,}400\\ \\text{atm}$$", porque: "Por la ley de Dalton, la presion total de una mezcla de gases es la suma de sus presiones parciales. Sumamos las presiones de $\\text{NH}_3$ y $\\text{H}_2\\text{S}$, ambas $0{,}200\\ \\text{atm}$, y obtenemos $0{,}200 + 0{,}200 = 0{,}400\\ \\text{atm}$. Por eso el solido no se incluye en el total, porque no ejerce presion." }
        ],
        resultado: "$P_{\\text{total}} = 0{,}400\\ \\text{atm}$"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "$$\\Delta n = 2 - 0 = 2;\\quad K_c = \\frac{K_p}{(RT)^2} = \\frac{0{,}0400}{(0{,}0821 \\times 298)^2} = \\frac{0{,}0400}{(24{,}47)^2} = 6{,}68 \\times 10^{-5}\\ \\frac{\\text{mol}^2}{\\text{L}^2}$$", porque: "$\\Delta n$ es la diferencia entre los moles gaseosos de productos y de reactivos. Aqui hay $2\\ \\text{mol}$ de gases en productos y $0$ en reactivos, asi que $\\Delta n = 2 - 0 = 2$. Con eso despejamos $K_c$ de $K_p = K_c\\,(RT)^{\\Delta n}$, quedando $K_c = \\frac{K_p}{(RT)^2}$. Reemplazamos $0{,}0821 \\times 298 = 24{,}47$ y elevamos al cuadrado para obtener $6{,}68 \\times 10^{-5}\\ \\text{mol}^2/\\text{L}^2$." },
          { paso: "Al duplicar el volumen, la presion de los gases tiende a bajar, pero el solido se descompone y repone gas hasta que $P(\\text{NH}_3)\\,P(\\text{H}_2\\text{S})$ vuelve a $0{,}0400\\ \\text{atm}^2$. La presion total sigue en $0{,}400\\ \\text{atm}$.", porque: "Con solido en exceso, el equilibrio fija el producto $P(\\text{NH}_3) \\times P(\\text{H}_2\\text{S}) = K_p = 0{,}0400\\ \\text{atm}^2$, sin importar el volumen. Al duplicar el volumen la presion baja en un primer momento, y el sistema responde descomponiendo mas $\\text{NH}_4\\text{HS}(\\text{s})$ para restablecer ese producto. Como el producto vuelve a $0{,}0400\\ \\text{atm}^2$, las presiones de equilibrio no cambian. Por eso la presion total sigue en $0{,}400\\ \\text{atm}$." }
        ],
        resultado: "$K_c = 6{,}68 \\times 10^{-5}\\ \\text{mol}^2/\\text{L}^2$; la presion total no cambia al duplicar V"
      }
    ],
    errores_tipicos: [
      { error: "Incluir NH4HS(s) como si su presion contribuyera a la total.", como_evitar: "Los solidos no ejercen presion parcial. Solo cuentan los gases." },
      { error: "Decir que al duplicar V la presion total baja a la mitad.", como_evitar: "Con solido presente, la presion de equilibrio queda fijada por Kp y no depende del volumen." },
      { error: "En b) usar Delta n = 1 para pasar de Kp a Kc.", como_evitar: "Cuente los gases de ambos lados: aqui son 2 moles de productos gaseosos y ninguno de reactivo." }
    ]
  },
  {
    num: 10,
    nivel: "Intermedio",
    temas: ["equilibrio"],
    enunciado: "Para el equilibrio H2(g) + I2(g) <=> 2 HI(g) a 700 K se realizaron dos experimentos en recipientes de 2,00 L. Experimento 1, en equilibrio: 0,024 mol de H2, 0,024 mol de I2 y 0,192 mol de HI. Experimento 2, a la misma temperatura, con 0,040 mol de H2, 0,040 mol de I2 y 0,80 mol de HI mezclados al inicio. a) Calcule Kc. b) Calcule Q del experimento 2 e indique hacia donde evoluciona.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Concentraciones de equilibrio (experimento 1): $$[\\text{H}_2] = [\\text{I}_2] = \\frac{0{,}024}{2{,}00} = 0{,}0120\\ \\text{M};\\quad [\\text{HI}] = \\frac{0{,}192}{2{,}00} = 0{,}0960\\ \\text{M}$$", porque: "$K_c$ usa concentraciones de equilibrio, es decir moles divididos por el volumen del recipiente, que es $2{,}00\\ \\text{L}$ y es comun a las tres especies. Dividimos $0{,}024\\ \\text{mol}$ de $\\text{H}_2$ e $\\text{I}_2$ por $2{,}00\\ \\text{L}$ y obtenemos $0{,}0120\\ \\text{M}$, y dividimos $0{,}192\\ \\text{mol}$ de $\\text{HI}$ por el mismo volumen para obtener $0{,}0960\\ \\text{M}$. Entonces estas son las concentraciones de equilibrio del experimento 1 que se usan en $K_c$." },
          { paso: "$$K_c = \\frac{[\\text{HI}]^2}{[\\text{H}_2][\\text{I}_2]} = \\frac{(0{,}0960)^2}{0{,}0120 \\times 0{,}0120} = 64{,}0$$", porque: "Escribimos $K_c$ con el $\\text{HI}$ al cuadrado por su coeficiente 2 en el numerador, y $\\text{H}_2$ e $\\text{I}_2$ en el denominador. Reemplazamos $(0{,}0960)^2$ arriba y $0{,}0120 \\times 0{,}0120$ abajo, con lo que el cociente da $64{,}0$. Como las $\\text{mol/L}$ se cancelan entre numerador y denominador, $K_c$ no tiene unidades. Ese valor sirve para comparar en el apartado b)." }
        ],
        resultado: "$K_c = 64{,}0$"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Concentraciones iniciales del experimento 2: $$[\\text{H}_2] = [\\text{I}_2] = \\frac{0{,}040}{2{,}00} = 0{,}020\\ \\text{M};\\quad [\\text{HI}] = \\frac{0{,}80}{2{,}00} = 0{,}40\\ \\text{M}$$", porque: "$Q$ se calcula con las concentraciones del momento de la mezcla del experimento 2, y no con las de equilibrio del experimento 1, porque cada experimento tiene sus propias condiciones iniciales. Dividimos $0{,}040\\ \\text{mol}$ de $\\text{H}_2$ e $\\text{I}_2$ por $2{,}00\\ \\text{L}$ para obtener $0{,}020\\ \\text{M}$, y $0{,}80\\ \\text{mol}$ de $\\text{HI}$ por el mismo volumen para obtener $0{,}40\\ \\text{M}$. Estos son los valores de partida que se reemplazan en $Q$." },
          { paso: "$$Q = \\frac{(0{,}40)^2}{0{,}020 \\times 0{,}020} = \\frac{0{,}16}{4{,}0 \\times 10^{-4}} = 4{,}0 \\times 10^{2}$$", porque: "$Q$ tiene la misma forma que $K_c$, pero con las concentraciones actuales: $[\\text{HI}]^2$ en el numerador y $[\\text{H}_2][\\text{I}_2]$ en el denominador. Reemplazamos $0{,}40$ elevado al cuadrado arriba, que da $0{,}16$, y $0{,}020 \\times 0{,}020$ abajo, que da $4{,}0 \\times 10^{-4}$. Entonces $Q = 4{,}0 \\times 10^{2}$, valor que se compara con $K_c = 64$ en el paso siguiente." },
          { paso: "$$Q = 400 > K_c = 64$$ El sistema evoluciona hacia los reactivos (se forma $\\text{H}_2$ e $\\text{I}_2$ a partir de $\\text{HI}$).", porque: "Dado que $Q = 400$ es mayor que $K_c = 64$, hay demasiado $\\text{HI}$ respecto del equilibrio. Para llegar al equilibrio el sistema consume $\\text{HI}$ y forma $\\text{H}_2$ e $\\text{I}_2$, es decir, avanza hacia los reactivos. Por eso la comparacion relevante es entre $Q$ y $K_c$, y no entre las cantidades absolutas de cada especie." }
        ],
        resultado: "$Q = 4{,}0 \\times 10^{2} > K_c$; evoluciona hacia $\\text{H}_2 + \\text{I}_2$"
      }
    ],
    errores_tipicos: [
      { error: "En b) calcular Q con las concentraciones del experimento 1 en vez de las del experimento 2.", como_evitar: "Cada experimento tiene sus propias condiciones iniciales. Q se calcula siempre con las del caso que se analiza." },
      { error: "Concluir que el sistema va hacia el HI porque hay mas HI en el experimento 2.", como_evitar: "Compare Q con Kc, no las cantidades absolutas." },
      { error: "Olvidar el exponente 2 del HI al calcular Kc o Q.", como_evitar: "El coeficiente del HI es 2, asi que la concentracion de HI se eleva al cuadrado." }
    ]
  },
  {
    num: 11,
    nivel: "Avanzado",
    temas: ["equilibrio"],
    enunciado: "Para el equilibrio N2O4(g) <=> 2 NO2(g), Kc = 4,6 x 10^-3 mol/L a 25 C. Se introduce N2O4 puro en un recipiente cerrado a una concentracion inicial de 0,050 M. a) Calcule las concentraciones de equilibrio, verificando si puede usarse la aproximacion x << C. b) Calcule el grado de disociacion alpha.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Tabla: $$[\\text{N}_2\\text{O}_4] = 0{,}050 - x;\\quad [\\text{NO}_2] = 2x$$", porque: "Usamos la estequiometria $1:2$ de $\\text{N}_2\\text{O}_4(\\text{g}) \\rightleftharpoons 2\\,\\text{NO}_2(\\text{g})$: cada mol de $\\text{N}_2\\text{O}_4$ que se disocia produce $2\\ \\text{mol}$ de $\\text{NO}_2$. Si $x$ es lo disociado en $\\text{mol/L}$, el $\\text{N}_2\\text{O}_4$ queda en $0{,}050 - x$ y el $\\text{NO}_2$ en $2x$. Entonces esta tabla sirve de base para escribir $K_c$ en funcion de $x$, partiendo de una concentracion inicial de $0{,}050\\ \\text{M}$." },
          { paso: "$$K_c = \\frac{(2x)^2}{0{,}050 - x} = 4{,}6 \\times 10^{-3}$$", porque: "Escribimos $K_c$ con los coeficientes como exponentes: el $\\text{NO}_2$ con coeficiente 2 va al cuadrado en el numerador y el $\\text{N}_2\\text{O}_4$ en el denominador. Reemplazamos la tabla y obtenemos $\\frac{(2x)^2}{0{,}050 - x} = 4{,}6 \\times 10^{-3}$. Esta es la ecuacion que se resuelve en los pasos siguientes, primero con una aproximacion y despues de forma completa." },
          { paso: "Aproximacion rapida: si $x \\ll 0{,}050$, $$\\frac{4x^2}{0{,}050} = 4{,}6 \\times 10^{-3}$$ de donde $x = 7{,}6 \\times 10^{-3}\\ \\text{M}$.", porque: "Como primera estimacion suponemos que $x$ es mucho menor que $0{,}050$, de modo que el denominador se aproxima a $0{,}050$. La ecuacion se simplifica a $4x^2 = 4{,}6 \\times 10^{-3} \\times 0{,}050$, y de ahi sale $x = 7{,}6 \\times 10^{-3}\\ \\text{M}$. Ese valor sirve para el orden de magnitud, pero todavia no es la respuesta final, porque la aproximacion debe verificarse." },
          { paso: "Verificacion: $$\\frac{x}{0{,}050} = 0{,}15 = 15\\% > 5\\%$$ La aproximacion NO es valida.", porque: "Calculamos $\\frac{x}{C}$ para ver que fraccion del reactivo se disocio: con el $x$ aproximado, $\\frac{x}{0{,}050} = 0{,}15$, es decir $15\\%$. Si ese cociente fuera menor que $5\\%$, despreciar $x$ daria un error pequeno. Como $15\\%$ supera ese limite, la aproximacion no es valida y hay que resolver la ecuacion completa." },
          { paso: "Se resuelve la cuadratica $$4x^2 + 4{,}6 \\times 10^{-3}\\,x - 2{,}30 \\times 10^{-4} = 0$$ de donde $x = 7{,}03 \\times 10^{-3}\\ \\text{M}$ (raiz positiva).", porque: "Sin aproximacion, $K_c = \\frac{4x^2}{0{,}050 - x}$ se reordena como $4x^2 + K_c\\,x - K_c \\times 0{,}050 = 0$. Eso da $4x^2 + 4{,}6 \\times 10^{-3}\\,x - 2{,}30 \\times 10^{-4} = 0$, una cuadratica que se resuelve con la formula resolvente. Tomamos la raiz positiva porque $x$ es una concentracion, y obtenemos $x = 7{,}03 \\times 10^{-3}\\ \\text{M}$." },
          { paso: "Equilibrio: $$[\\text{NO}_2] = 2x = 0{,}0141\\ \\text{M};\\quad [\\text{N}_2\\text{O}_4] = 0{,}050 - 0{,}00703 = 0{,}0430\\ \\text{M}$$", porque: "Con $x = 7{,}03 \\times 10^{-3}\\ \\text{M}$ calculamos las concentraciones de equilibrio. El $\\text{NO}_2$ vale $2x = 0{,}0141\\ \\text{M}$ por su coeficiente, y el $\\text{N}_2\\text{O}_4$ queda en $0{,}050 - 0{,}00703 = 0{,}0430\\ \\text{M}$. Verificamos que $K_c$ con estos valores reproduzca $4{,}6 \\times 10^{-3}$, para confirmar que la cuenta es consistente." }
        ],
        resultado: "$[\\text{N}_2\\text{O}_4] = 0{,}0430\\ \\text{M}$; $[\\text{NO}_2] = 0{,}0141\\ \\text{M}$ (la aproximacion no es valida)"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "$$\\alpha = \\frac{x}{C} = \\frac{7{,}03 \\times 10^{-3}}{0{,}050} = 0{,}141\\ (14{,}1\\%)$$", porque: "El grado de disociacion $\\alpha$ es la fraccion del reactivo inicial que se disocio, por eso usamos $x$ y no $[\\text{NO}_2]$. Dividimos $x = 7{,}03 \\times 10^{-3}$ por $C = 0{,}050\\ \\text{M}$, con lo que $\\alpha = 0{,}141$. Como $\\alpha$ es una fraccion, lo expresamos en porcentaje y da $14{,}1\\%$." }
        ],
        resultado: "$\\alpha = 14{,}1\\%$"
      }
    ],
    errores_tipicos: [
      { error: "Aplicar la aproximacion x << C sin verificarla y dar x = 7,6 x 10^-3 como respuesta final.", como_evitar: "Despues de la aproximacion, calcule x/C. Si supera el 5 %, resuelva la cuadratica completa." },
      { error: "Escribir Kc = [NO2] / [N2O4] (olvidar el cuadrado y el coeficiente 2).", como_evitar: "Los exponentes son los coeficientes: NO2 se eleva al cuadrado." },
      { error: "En b) calcular alpha como 2x / C (usando [NO2]), lo que da 28 %.", como_evitar: "alpha es la fraccion de N2O4 que se disocio: x / C." }
    ]
  },
  {
    num: 12,
    nivel: "Avanzado",
    temas: ["equilibrio"],
    enunciado: "En un recipiente de 4,00 L a 500 K se introducen 2,00 mol de NH3(g) y, en el equilibrio del sistema 2 NH3(g) <=> N2(g) + 3 H2(g), quedan 1,20 mol de NH3(g). a) Calcule Kc a 500 K. b) Calcule Kp a 500 K. c) Si se reduce el volumen a 2,00 L a temperatura constante, calcule Q en ese instante y justifique hacia donde evoluciona el sistema.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "$$[\\text{NH}_3]_{\\text{eq}} = \\frac{1{,}20}{4{,}00} = 0{,}300\\ \\text{M}$$", porque: "Calculamos la concentracion de $\\text{NH}_3$ en equilibrio dividiendo sus moles por el volumen del recipiente, $4{,}00\\ \\text{L}$. Con $1{,}20\\ \\text{mol}$ de $\\text{NH}_3$ obtenemos $0{,}300\\ \\text{M}$. Se usa el volumen original porque en este paso todavia no hubo cambio de volumen, y este valor es el primero que se necesita para plantear $K_c$." },
          { paso: "Se consumieron $$2{,}00 - 1{,}20 = 0{,}80\\ \\text{mol}$$ de $\\text{NH}_3$. Por la estequiometria $2:1:3$ se formaron $0{,}40\\ \\text{mol}$ de $\\text{N}_2$ y $1{,}20\\ \\text{mol}$ de $\\text{H}_2$.", porque: "Calculamos cuanto $\\text{NH}_3$ reacciono como diferencia entre los moles iniciales y los de equilibrio: $2{,}00 - 1{,}20 = 0{,}80\\ \\text{mol}$. Con la estequiometria $2:1:3$, $0{,}80\\ \\text{mol}$ de $\\text{NH}_3$ generan $0{,}40\\ \\text{mol}$ de $\\text{N}_2$ y $1{,}20\\ \\text{mol}$ de $\\text{H}_2$. Por eso el $\\text{N}_2$ formado es la mitad del $\\text{NH}_3$ consumido, y esos moles son los que luego se pasan a concentracion." },
          { paso: "Concentraciones: $[\\text{N}_2] = \\frac{0{,}40}{4{,}00} = 0{,}100\\ \\text{M}$ y $[\\text{H}_2] = \\frac{1{,}20}{4{,}00} = 0{,}300\\ \\text{M}$. $$K_c = \\frac{[\\text{N}_2]\\,[\\text{H}_2]^3}{[\\text{NH}_3]^2} = \\frac{0{,}100 \\times (0{,}300)^3}{(0{,}300)^2} = 0{,}0300\\ \\frac{\\text{mol}^2}{\\text{L}^2}$$", porque: "Pasamos los moles de $\\text{N}_2$ y $\\text{H}_2$ a concentracion dividiendo por $4{,}00\\ \\text{L}$: $\\frac{0{,}40}{4{,}00} = 0{,}100\\ \\text{M}$ y $\\frac{1{,}20}{4{,}00} = 0{,}300\\ \\text{M}$. Usamos $K_c = \\frac{[\\text{N}_2][\\text{H}_2]^3}{[\\text{NH}_3]^2}$ con los exponentes de la ecuacion balanceada: $\\text{N}_2$ sin exponente, $\\text{H}_2$ al cubo y $\\text{NH}_3$ al cuadrado. Reemplazamos y obtenemos $\\frac{0{,}100 \\times (0{,}300)^3}{(0{,}300)^2} = 0{,}0300\\ \\text{mol}^2/\\text{L}^2$. El $\\text{H}_2$ elevado al cubo es el paso que mas se olvida." }
        ],
        resultado: "$K_c = 0{,}0300\\ \\text{mol}^2/\\text{L}^2$"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "$$\\Delta n = (1 + 3) - 2 = 2$$", porque: "Calculamos $\\Delta n$ solo con los moles gaseosos: productos ($1 + 3 = 4$) menos reactivos ($2$), dando $(1 + 3) - 2 = 2$. Este valor es el exponente de $RT$ al pasar de $K_c$ a $K_p$. Conviene usar los coeficientes de la ecuacion balanceada y no los moles del enunciado." },
          { paso: "$$K_p = K_c\\,(RT)^2 = 0{,}0300 \\times (0{,}0821 \\times 500)^2 = 0{,}0300 \\times (41{,}05)^2 = 50{,}6\\ \\text{atm}^2$$", porque: "Aplicamos $K_p = K_c\\,(RT)^{\\Delta n}$ con $\\Delta n = 2$, lo que significa elevar $RT$ al cuadrado. Calculamos $RT = 0{,}0821 \\times 500 = 41{,}05$ y lo elevamos al cuadrado, que da $(41{,}05)^2$. Luego multiplicamos por $K_c = 0{,}0300$ y obtenemos $50{,}6\\ \\text{atm}^2$, unidades consistentes con $\\Delta n = 2$." }
        ],
        resultado: "$K_p = 50{,}6\\ \\text{atm}^2$"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "Al reducir el volumen a $2{,}00\\ \\text{L}$, las concentraciones se duplican en el instante: $$[\\text{NH}_3] = 0{,}600\\ \\text{M};\\quad [\\text{N}_2] = 0{,}200\\ \\text{M};\\quad [\\text{H}_2] = 0{,}600\\ \\text{M}$$", porque: "Como la concentracion es moles por volumen y los moles no cambian al reducir el volumen de $4{,}00\\ \\text{L}$ a $2{,}00\\ \\text{L}$, cada concentracion se duplica en el instante. Asi, $[\\text{NH}_3] = 0{,}600\\ \\text{M}$, $[\\text{N}_2] = 0{,}200\\ \\text{M}$ y $[\\text{H}_2] = 0{,}600\\ \\text{M}$. Estos son los valores iniciales del nuevo estado, antes de que el sistema reaccione." },
          { paso: "$$Q = \\frac{[\\text{N}_2]\\,[\\text{H}_2]^3}{[\\text{NH}_3]^2} = \\frac{0{,}200 \\times (0{,}600)^3}{(0{,}600)^2} = 0{,}120\\ \\frac{\\text{mol}^2}{\\text{L}^2}$$", porque: "$Q$ se calcula con la misma expresion que $K_c$, pero con las concentraciones del instante tras reducir $V$. Reemplazamos $0{,}200 \\times (0{,}600)^3$ arriba y $(0{,}600)^2$ abajo, y el cociente da $0{,}120\\ \\text{mol}^2/\\text{L}^2$. Este valor se compara con $K_c = 0{,}0300$ para decidir el sentido de la evolucion." },
          { paso: "$$Q = 0{,}120 > K_c = 0{,}0300$$ El sistema evoluciona hacia los reactivos ($\\text{NH}_3$).", porque: "Como $Q = 0{,}120$ es mayor que $K_c = 0{,}0300$, hay demasiado producto respecto del equilibrio, y el sistema avanza hacia los reactivos, es decir hacia el $\\text{NH}_3$. Esto coincide con Le Chatelier: al subir la presion el sistema favorece el lado con menos moles de gas, que en este caso es el del $\\text{NH}_3$. Ambos criterios llevan a la misma conclusion." }
        ],
        resultado: "$Q = 0{,}120 > K_c$; evoluciona hacia $\\text{NH}_3$"
      }
    ],
    errores_tipicos: [
      { error: "En a) olvidar el coeficiente 3 del H2 y usar [H2]^1 en Kc.", como_evitar: "Lea los exponentes de la ecuacion balanceada; el H2 se eleva a la tercera potencia." },
      { error: "En c) concluir que al reducir V se favorece N2 y H2 porque 'sube la presion'.", como_evitar: "El aumento de presion favorece el lado con menos moles de gas. Aqui es el NH3." },
      { error: "En b) usar Delta n = 1 o Delta n = 4 en vez de 2.", como_evitar: "Cuente los moles gaseosos de reactivos (2) y de productos (1 + 3 = 4), y reste." }
    ]
  },
  {
    num: 13,
    nivel: "Avanzado",
    temas: ["equilibrio"],
    enunciado: "Para la reaccion N2(g) + O2(g) <=> 2 NO(g) se sabe que Kc1 = 0,040 a 2000 K. Y para 2 NO(g) + O2(g) <=> 2 NO2(g), a la misma temperatura, Kc2 = 2,0 x 10^2 M^-1. Calcule Kc a 2000 K de: a) 2 NO(g) <=> N2(g) + O2(g); b) 1/2 N2(g) + 1/2 O2(g) <=> NO(g); c) N2(g) + 2 O2(g) <=> 2 NO2(g), indicando sus unidades.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "La reaccion pedida es la inversa de la primera: $$K_c = \\frac{1}{K_{c1}} = \\frac{1}{0{,}040} = 25$$", porque: "Al invertir una reaccion, los papeles de productos y reactivos se intercambian, y la expresion de $K_c$ queda con numerador y denominador invertidos. Por eso el nuevo valor es el reciproco: $K_c = \\frac{1}{K_{c1}}$. Con $K_{c1} = 0{,}040$ obtenemos $\\frac{1}{0{,}040} = 25$, que es la constante de la reaccion pedida. Es la trampa mas comun en este tipo de problema, asi que conviene revisar el sentido de cada reaccion." }
        ],
        resultado: "$K_c = 25$ (adimensional, $\\Delta n = 0$)"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "La reaccion pedida es la primera dividida por 2. $$K_c = K_{c1}^{1/2} = \\sqrt{0{,}040} = 0{,}20$$", porque: "Si los coeficientes de una reaccion se dividen por 2, la constante queda elevada a $\\frac{1}{2}$, es decir, se le saca la raiz cuadrada. Como la reaccion pedida es la primera dividida por 2, $K_c = K_{c1}^{1/2} = \\sqrt{0{,}040}$. Calculando $\\sqrt{0{,}040}$ obtenemos $0{,}20$, que es la constante de la reaccion pedida." }
        ],
        resultado: "$K_c = 0{,}20$"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "Sumar las reacciones: $$\\text{N}_2 + \\text{O}_2 + 2\\,\\text{NO} + \\text{O}_2 \\rightarrow 2\\,\\text{NO} + 2\\,\\text{NO}_2$$ Se cancelan $2\\,\\text{NO}$ y queda $\\text{N}_2(\\text{g}) + 2\\,\\text{O}_2(\\text{g}) \\rightleftharpoons 2\\,\\text{NO}_2(\\text{g})$.", porque: "Sumamos miembro a miembro las dos reacciones: $\\text{N}_2 + \\text{O}_2$ mas $2\\,\\text{NO} + \\text{O}_2$ da $2\\,\\text{NO} + 2\\,\\text{NO}_2$. Los $2\\,\\text{NO}$ aparecen a ambos lados y se cancelan, y queda $\\text{N}_2 + 2\\,\\text{O}_2 \\rightleftharpoons 2\\,\\text{NO}_2$, que es la reaccion pedida. Verificamos que la reaccion final quede balanceada antes de calcular su constante." },
          { paso: "$$K_c = K_{c1} \\times K_{c2} = 0{,}040 \\times 2{,}0 \\times 10^{2} = 8{,}0\\ \\text{M}^{-1}$$", porque: "Cuando se suman reacciones, sus constantes se multiplican, porque el cociente de la reaccion global es el producto de los cocientes de cada etapa. Reemplazamos $K_{c1} = 0{,}040$ y $K_{c2} = 2{,}0 \\times 10^{2}\\ \\text{M}^{-1}$, y obtenemos $0{,}040 \\times 2{,}0 \\times 10^{2} = 8{,}0$. Por eso las unidades quedan en $\\text{M}^{-1}$, como indica el valor de $K_{c2}$." }
        ],
        resultado: "$K_c = 8{,}0\\ \\text{M}^{-1}$"
      }
    ],
    errores_tipicos: [
      { error: "En a) usar Kc' = Kc1 al invertir la reaccion.", como_evitar: "Al invertir, Kc' = 1/Kc. Es la trampa mas comun con los signos." },
      { error: "En b) usar Kc/2 en vez de la raiz cuadrada cuando se divide la reaccion por 2.", como_evitar: "Al dividir los coeficientes por n, Kc se eleva a 1/n." },
      { error: "En c) sumar las constantes (0,040 + 200) en lugar de multiplicarlas.", como_evitar: "Las constantes de reacciones sumadas se multiplican, no se suman." }
    ]
  },
  {
    num: 14,
    nivel: "Avanzado",
    temas: ["equilibrio"],
    enunciado: "El sistema CO(g) + H2O(g) <=> CO2(g) + H2(g) tiene Kc = 5,0 a 800 K. En un recipiente de 1,00 L se mezclan inicialmente 0,10 mol de CO, 0,10 mol de H2O, 0,30 mol de CO2 y 0,30 mol de H2. a) Calcule Q e indique hacia donde evoluciona el sistema. b) Calcule las concentraciones de todas las especies en el equilibrio.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Concentraciones iniciales ($V = 1{,}00\\ \\text{L}$): $$[\\text{CO}] = [\\text{H}_2\\text{O}] = 0{,}10\\ \\text{M};\\quad [\\text{CO}_2] = [\\text{H}_2] = 0{,}30\\ \\text{M}$$", porque: "Con $V = 1{,}00\\ \\text{L}$, los moles y las concentraciones tienen el mismo valor numerico, asi que no hace falta dividir. Tomamos las cantidades iniciales del enunciado: $0{,}10\\ \\text{mol}$ de $\\text{CO}$ y de $\\text{H}_2\\text{O}$, y $0{,}30\\ \\text{mol}$ de $\\text{CO}_2$ y de $\\text{H}_2$. Estas concentraciones son la base para calcular $Q$ antes de plantear cualquier tabla." },
          { paso: "$$Q = \\frac{[\\text{CO}_2][\\text{H}_2]}{[\\text{CO}][\\text{H}_2\\text{O}]} = \\frac{0{,}30 \\times 0{,}30}{0{,}10 \\times 0{,}10} = 9{,}0$$", porque: "$Q$ lleva los productos ($\\text{CO}_2$ y $\\text{H}_2$) en el numerador y los reactivos ($\\text{CO}$ y $\\text{H}_2\\text{O}$) en el denominador, con las concentraciones actuales. Reemplazamos $0{,}30 \\times 0{,}30$ arriba y $0{,}10 \\times 0{,}10$ abajo, y el cociente da $9{,}0$. Ese resultado se compara con $K_c = 5{,}0$ para decidir el sentido de la evolucion." },
          { paso: "$$Q = 9{,}0 > K_c = 5{,}0$$ El sistema evoluciona hacia los reactivos ($\\text{CO}$ y $\\text{H}_2\\text{O}$).", porque: "Dado que $Q = 9{,}0$ supera a $K_c = 5{,}0$, hay demasiado producto respecto del equilibrio. Por eso el sistema consume $\\text{CO}_2$ y $\\text{H}_2$ para formar $\\text{CO}$ y $\\text{H}_2\\text{O}$, es decir, avanza hacia los reactivos. Esta conclusion define el sentido con el que se plantea la tabla de la parte b)." }
        ],
        resultado: "$Q = 9{,}0 > K_c$; evoluciona hacia $\\text{CO}$ y $\\text{H}_2\\text{O}$"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Sea $y$ los $\\text{mol/L}$ de $\\text{CO}_2$ que pasan a reactivos. Tabla: $$[\\text{CO}] = [\\text{H}_2\\text{O}] = 0{,}10 + y;\\quad [\\text{CO}_2] = [\\text{H}_2] = 0{,}30 - y$$", porque: "Definimos $y$ como lo que pasa de $\\text{CO}_2$ y $\\text{H}_2$ a $\\text{CO}$ y $\\text{H}_2\\text{O}$, es decir en el sentido inverso al de la reaccion escrita. Por la estequiometria $1:1:1:1$, lo que se forma de $\\text{CO}$ y $\\text{H}_2\\text{O}$ es igual a lo que se consume de $\\text{CO}_2$ y $\\text{H}_2$. Entonces las filas quedan en $[\\text{CO}] = [\\text{H}_2\\text{O}] = 0{,}10 + y$ y $[\\text{CO}_2] = [\\text{H}_2] = 0{,}30 - y$." },
          { paso: "$$K_c = \\frac{(0{,}30 - y)^2}{(0{,}10 + y)^2} = 5{,}0,\\quad \\frac{0{,}30 - y}{0{,}10 + y} = \\sqrt{5{,}0} = 2{,}236$$", porque: "Con todos los coeficientes unitarios, $K_c = \\frac{[\\text{CO}_2][\\text{H}_2]}{[\\text{CO}][\\text{H}_2\\text{O}]}$ queda $\\frac{(0{,}30 - y)^2}{(0{,}10 + y)^2} = 5{,}0$. Como ambos miembros son cuadrados, sacamos raiz cuadrada de los dos lados y tomamos la positiva, con lo que $\\sqrt{5{,}0} = 2{,}236$. Esto convierte la ecuacion en lineal, y conviene no redondear $\\sqrt{5{,}0}$ antes de seguir." },
          { paso: "$$y = \\frac{0{,}30 - 2{,}236 \\times 0{,}10}{1 + 2{,}236} = 0{,}0236\\ \\text{M}$$", porque: "Despejamos $y$ de la ecuacion lineal $(0{,}30 - y) = 2{,}236\\,(0{,}10 + y)$, pasando los terminos con $y$ a un lado. Eso da $y\\,(1 + 2{,}236) = 0{,}30 - 2{,}236 \\times 0{,}10$, de donde $y = \\frac{0{,}30 - 2{,}236 \\times 0{,}10}{1 + 2{,}236} = 0{,}0236\\ \\text{M}$. Conviene mantener varias cifras en el despeje para no perder precision." },
          { paso: "Equilibrio: $$[\\text{CO}] = [\\text{H}_2\\text{O}] = 0{,}124\\ \\text{M};\\quad [\\text{CO}_2] = [\\text{H}_2] = 0{,}276\\ \\text{M}$$ Verificacion: $\\frac{(0{,}276)^2}{(0{,}124)^2} = 5{,}0$.", porque: "Con $y = 0{,}0236\\ \\text{M}$ obtenemos las concentraciones de equilibrio: $[\\text{CO}] = [\\text{H}_2\\text{O}] = 0{,}10 + 0{,}0236 = 0{,}124\\ \\text{M}$, y $[\\text{CO}_2] = [\\text{H}_2] = 0{,}30 - 0{,}0236 = 0{,}276\\ \\text{M}$. Reemplazamos en $K_c$ para verificar: $\\frac{(0{,}276)^2}{(0{,}124)^2}$ da aproximadamente $5{,}0$. Entonces el resultado es consistente con el dato del enunciado, dentro de la precision usada." }
        ],
        resultado: "$[\\text{CO}] = [\\text{H}_2\\text{O}] = 0{,}124\\ \\text{M}$; $[\\text{CO}_2] = [\\text{H}_2] = 0{,}276\\ \\text{M}$"
      }
    ],
    errores_tipicos: [
      { error: "Suponer que el sistema avanza hacia productos sin calcular Q, y sumar x a [CO2] y [H2].", como_evitar: "Primero calcule Q y compare con Kc para saber el sentido. Despues plantee la tabla." },
      { error: "Poner [CO2] = 0 y [H2] = 0 en la tabla inicial, olvidando que el enunciado da productos al principio.", como_evitar: "Use exactamente las cantidades iniciales del enunciado en cada fila de la tabla." },
      { error: "Redondear raiz(5,0) a 2 en el medio del calculo, lo que cambia el resultado final.", como_evitar: "Conserve al menos 3 cifras en los pasos intermedios y redondee solo al final." }
    ]
  },
  {
    num: 15,
    nivel: "Avanzado",
    temas: ["equilibrio"],
    enunciado: "Para el equilibrio CO(g) + Cl2(g) <=> COCl2(g), Kc = 2,50 x 10^2 M^-1 a 600 K. En un recipiente rigido de 500 cm^3 se introducen, a 600 K, 0,0200 mol de CO y 0,0200 mol de Cl2. a) Calcule las concentraciones de equilibrio. b) Calcule Kp a 600 K e indique sus unidades. c) Si a 600 K se reduce el volumen a la mitad, indique hacia donde se desplaza el equilibrio y justifique.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "$V = 500\\ \\text{cm}^3 = 0{,}500\\ \\text{L}$. $$[\\text{CO}]_0 = [\\text{Cl}_2]_0 = \\frac{0{,}0200}{0{,}500} = 0{,}0400\\ \\text{M}$$", porque: "Antes de calcular concentraciones convertimos el volumen a litros: $500\\ \\text{cm}^3 = 0{,}500\\ \\text{L}$, porque la concentracion molar se expresa en $\\text{mol/L}$. Luego dividimos $0{,}0200\\ \\text{mol}$ de $\\text{CO}$ y de $\\text{Cl}_2$ por $0{,}500\\ \\text{L}$, lo que da $0{,}0400\\ \\text{M}$ de cada reactivo. Si se usara $500$ directamente el resultado tendria un error de unidades muy grande, por eso el cambio de unidades es el primer paso." },
          { paso: "Tabla: $$[\\text{COCl}_2] = y;\\quad [\\text{CO}] = [\\text{Cl}_2] = 0{,}0400 - y$$", porque: "Por la estequiometria $1:1:1$ de $\\text{CO} + \\text{Cl}_2 \\rightleftharpoons \\text{COCl}_2$, cada mol de $\\text{COCl}_2$ que se forma consume un mol de $\\text{CO}$ y un mol de $\\text{Cl}_2$. Como ambos reactivos empiezan con la misma concentracion, quedan iguales en el equilibrio: $0{,}0400 - y$. El $\\text{COCl}_2$ parte de cero, por eso su fila es simplemente $y$." },
          { paso: "$$K_c = \\frac{y}{(0{,}0400 - y)^2} = 250,\\quad 250\\,y^2 - 21\\,y + 0{,}400 = 0$$", porque: "$K_c$ se escribe con el $\\text{COCl}_2$ en el numerador y el producto $[\\text{CO}][\\text{Cl}_2]$ en el denominador, que con ambos valores iguales da $(0{,}0400 - y)^2$. Reemplazamos la tabla y obtenemos $\\frac{y}{(0{,}0400 - y)^2} = 250$. Multiplicando en cruz y ordenando queda $250\\,y^2 - 21\\,y + 0{,}400 = 0$, una cuadratica." },
          { paso: "$$y = \\frac{21 - \\sqrt{41}}{500} = 0{,}0292\\ \\text{M}$$ (la otra raiz da $[\\text{CO}]$ negativa y se descarta).", porque: "Aplicamos la formula resolvente a $250\\,y^2 - 21\\,y + 0{,}400 = 0$ y obtenemos $y = \\frac{21 - \\sqrt{41}}{500} = 0{,}0292\\ \\text{M}$. La otra raiz daria $[\\text{CO}]$ negativa, y las concentraciones deben ser positivas, asi que se descarta. Ese criterio es el que elige la raiz correcta." },
          { paso: "Equilibrio: $$[\\text{COCl}_2] = 0{,}0292\\ \\text{M};\\quad [\\text{CO}] = [\\text{Cl}_2] = 0{,}0400 - 0{,}0292 = 0{,}0108\\ \\text{M}$$", porque: "Con $y = 0{,}0292\\ \\text{M}$, el $\\text{COCl}_2$ en equilibrio vale $0{,}0292\\ \\text{M}$. Como $\\text{CO}$ y $\\text{Cl}_2$ quedan en $0{,}0400 - 0{,}0292 = 0{,}0108\\ \\text{M}$, cada reactivo consumido corresponde a un $\\text{COCl}_2$ formado, que es el balance de la tabla. Entonces este es un paso de reemplazo directo en la fila de equilibrio." }
        ],
        resultado: "$[\\text{COCl}_2] = 0{,}0292\\ \\text{M}$; $[\\text{CO}] = [\\text{Cl}_2] = 0{,}0108\\ \\text{M}$"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "$$\\Delta n = 1 - 2 = -1;\\quad K_p = K_c\\,(RT)^{\\Delta n} = \\frac{250}{0{,}0821 \\times 600} = \\frac{250}{49{,}3} = 5{,}08\\ \\text{atm}^{-1}$$", porque: "Calculamos $\\Delta n$ con los moles gaseosos: hay $1\\ \\text{mol}$ de $\\text{COCl}_2$ en productos y $2\\ \\text{mol}$ de $\\text{CO} + \\text{Cl}_2$ en reactivos, asi que $\\Delta n = 1 - 2 = -1$. Como $\\Delta n$ es negativo, $(RT)^{\\Delta n}$ queda en el denominador y $K_p = \\frac{K_c}{RT}$. Reemplazamos $\\frac{250}{0{,}0821 \\times 600} = \\frac{250}{49{,}3} = 5{,}08$, y las unidades pasan de $\\text{M}^{-1}$ a $\\text{atm}^{-1}$." }
        ],
        resultado: "$K_p = 5{,}08\\ \\text{atm}^{-1}$"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "Al reducir el volumen se desplaza hacia el lado con menos moles de gas: $\\text{COCl}_2$ ($1\\ \\text{mol}$) frente a $\\text{CO} + \\text{Cl}_2$ ($2\\ \\text{mol}$). El equilibrio se desplaza hacia el $\\text{COCl}_2$.", porque: "Reducir el volumen sube la presion, y por Le Chatelier el sistema se desplaza hacia el lado con menos moles de gas. Comparamos $\\text{COCl}_2$, con $1\\ \\text{mol}$ de gas, frente a $\\text{CO} + \\text{Cl}_2$, con $2\\ \\text{mol}$. Por eso el equilibrio se corre hacia el $\\text{COCl}_2$. Este analisis depende solo de los moles gaseosos, no de los valores absolutos de concentracion." },
          { paso: "$K_c$ no cambia, porque la temperatura se mantiene constante.", porque: "$K_c$ depende solo de la temperatura, y en este caso la temperatura se mantiene constante en $600\\ \\text{K}$. Por eso el desplazamiento cambia las concentraciones de equilibrio pero no el valor de $K_c$. Entonces la reduccion de volumen no altera la constante, aunque si cambie la composicion." }
        ],
        resultado: "Se desplaza hacia $\\text{COCl}_2$; $K_c$ no cambia"
      }
    ],
    errores_tipicos: [
      { error: "Usar 500 cm^3 como 500 L al calcular concentraciones (error de factor 1000).", como_evitar: "Convierta cm^3 a L (dividir por 1000) antes de dividir moles por volumen." },
      { error: "Quedarse con la raiz que da [CO] negativa.", como_evitar: "Verifique que todas las concentraciones de equilibrio sean positivas: la raiz valida es la menor." },
      { error: "En b) usar Kp = Kc, olvidando que Delta n = -1.", como_evitar: "Calcule Delta n antes de convertir Kc en Kp." }
    ]
  },
  {
    num: 16,
    nivel: "Tipo parcial",
    temas: ["equilibrio", "termodinamica"],
    enunciado: "En una planta piloto de sintesis de HCl, el H2(g) reacciona con el Cl2(g) en un reactor rigido de 1,00 L a 500 K segun H2(g) + Cl2(g) <=> 2 HCl(g), con Delta H < 0 (reaccion exotermica) y Kc = 2,0 a 500 K. Se cargan 0,200 mol de H2 y 0,100 mol de Cl2. a) Calcule la composicion de equilibrio (concentraciones de H2, Cl2 y HCl). b) Calcule Kp a 500 K e indique si Kp es igual o distinto de Kc, justificando. c) Justifique si el rendimiento de HCl aumenta o disminuye al subir la temperatura, manteniendo el volumen. d) Justifique si la composicion de equilibrio cambia al reducir el volumen a temperatura constante.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Concentraciones iniciales ($V = 1{,}00\\ \\text{L}$): $$[\\text{H}_2]_0 = 0{,}200\\ \\text{M};\\quad [\\text{Cl}_2]_0 = 0{,}100\\ \\text{M};\\quad [\\text{HCl}]_0 = 0$$ Tabla: $[\\text{H}_2] = 0{,}200 - x$; $[\\text{Cl}_2] = 0{,}100 - x$; $[\\text{HCl}] = 2x$.", porque: "Con $V = 1{,}00\\ \\text{L}$, los moles iniciales y las concentraciones tienen el mismo valor numerico, y el $\\text{HCl}$ no esta al comienzo, por eso su concentracion inicial es cero. Usamos la estequiometria $1:1:2$ de $\\text{H}_2 + \\text{Cl}_2 \\rightleftharpoons 2\\,\\text{HCl}$: cada $x$ de $\\text{H}_2$ que reacciona consume $x$ de $\\text{Cl}_2$ y forma $2x$ de $\\text{HCl}$. Entonces la tabla queda con $0{,}200 - x$ para el $\\text{H}_2$, $0{,}100 - x$ para el $\\text{Cl}_2$ y $2x$ para el $\\text{HCl}$." },
          { paso: "$$K_c = \\frac{(2x)^2}{(0{,}200 - x)(0{,}100 - x)} = 2{,}0,\\quad 2x^2 + 0{,}60\\,x - 0{,}040 = 0$$", porque: "Escribimos $K_c$ con el $\\text{HCl}$ al cuadrado por su coeficiente 2 en el numerador, y $\\text{H}_2$ y $\\text{Cl}_2$ en el denominador. Reemplazamos la tabla: $\\frac{(2x)^2}{(0{,}200 - x)(0{,}100 - x)} = 2{,}0$. Al multiplicar en cruz queda $4x^2 = 2{,}0\\,(0{,}200 - x)(0{,}100 - x)$, que se ordena como $2x^2 + 0{,}60\\,x - 0{,}040 = 0$. Los $0{,}60$ y el $0{,}040$ salen de $0{,}200 + 0{,}100$ y de $0{,}200 \\times 0{,}100$, multiplicados por $2$." },
          { paso: "$$x = \\frac{-0{,}60 + \\sqrt{0{,}60^2 + 4 \\times 2 \\times 0{,}040}}{2 \\times 2} = 0{,}0562\\ \\text{M}$$", porque: "Aplicamos la formula resolvente a $2x^2 + 0{,}60\\,x - 0{,}040 = 0$, con $a = 2$, $b = 0{,}60$ y $c = -0{,}040$. Tomamos la raiz positiva porque las concentraciones no pueden ser negativas. Calculamos el discriminante con todas sus cifras antes de dividir, y obtenemos $x = 0{,}0562\\ \\text{M}$." },
          { paso: "Equilibrio: $$[\\text{HCl}] = 2 \\times 0{,}0562 = 0{,}112\\ \\text{M};\\quad [\\text{H}_2] = 0{,}144\\ \\text{M};\\quad [\\text{Cl}_2] = 0{,}0438\\ \\text{M}$$ Verificacion: $\\frac{(0{,}112)^2}{0{,}144 \\times 0{,}0438} = 2{,}0$.", porque: "Con $x = 0{,}0562\\ \\text{M}$ calculamos las concentraciones de equilibrio: $[\\text{HCl}] = 2 \\times 0{,}0562 = 0{,}112\\ \\text{M}$, $[\\text{H}_2] = 0{,}200 - 0{,}0562 = 0{,}144\\ \\text{M}$ y $[\\text{Cl}_2] = 0{,}100 - 0{,}0562 = 0{,}0438\\ \\text{M}$. Al reemplazar en $K_c$, $\\frac{(0{,}112)^2}{0{,}144 \\times 0{,}0438}$ da $2{,}0$, lo que confirma que el calculo es consistente con el dato del enunciado." }
        ],
        resultado: "$[\\text{HCl}] = 0{,}112\\ \\text{M}$; $[\\text{H}_2] = 0{,}144\\ \\text{M}$; $[\\text{Cl}_2] = 0{,}0438\\ \\text{M}$"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "$$\\Delta n = 2 - 2 = 0;\\quad K_p = K_c\\,(RT)^0 = K_c = 2{,}0$$", porque: "Calculamos $\\Delta n$ con los gases: hay $2\\ \\text{mol}$ de $\\text{HCl}$ en productos y $1 + 1 = 2\\ \\text{mol}$ de $\\text{H}_2$ y $\\text{Cl}_2$ en reactivos, asi que $\\Delta n = 2 - 2 = 0$. Con $\\Delta n = 0$ el factor $(RT)^{\\Delta n}$ vale $1$, por lo que $K_p = K_c$ sin necesidad de $R$ ni de $T$. Entonces $K_p = 2{,}0$ coincide numericamente con $K_c$ a $500\\ \\text{K}$." }
        ],
        resultado: "$K_p = 2{,}0$ (igual a $K_c$, porque $\\Delta n = 0$)"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "La reaccion directa es exotermica ($\\Delta H < 0$): el calor es un producto. Al subir $T$ el sistema consume ese calor, se desplaza hacia los reactivos y $K_c$ disminuye.", porque: "Como $\\Delta H < 0$, la reaccion directa es exotermica y el calor aparece como producto. Al subir la temperatura se agrega calor, y el sistema lo consume desplazandose hacia los reactivos. Por eso $K_c$ disminuye, y este razonamiento es el principio de Le Chatelier aplicado a la temperatura." },
          { paso: "Por lo tanto el rendimiento de $\\text{HCl}$ disminuye al aumentar la temperatura.", porque: "Si el equilibrio se desplaza hacia los reactivos, queda menos $\\text{HCl}$ en el equilibrio. Como el rendimiento mide la cantidad de producto formada, baja al subir $T$, en coherencia con la disminucion de $K_c$. Entonces el rendimiento de $\\text{HCl}$ disminuye al aumentar la temperatura, con el volumen constante." }
        ],
        resultado: "El rendimiento de $\\text{HCl}$ disminuye al subir $T$"
      },
      {
        parte: "d)",
        pasos: [
          { paso: "Al reducir $V$, las concentraciones aumentan, pero como $\\Delta n = 0$ el numero de moles gaseosos es igual en ambos lados. La presion no favorece ningun sentido.", porque: "El desplazamiento por presion depende de la diferencia de moles gaseosos entre productos y reactivos, no de las concentraciones absolutas. Como $\\Delta n = 0$, hay la misma cantidad de moles de gas a cada lado, y al reducir $V$ todas las especies cambian en la misma proporcion. Por eso la presion no favorece ningun sentido." },
          { paso: "La composicion de equilibrio no se modifica.", porque: "Con $\\Delta n = 0$, el cociente $Q$ no cambia al reducir el volumen, porque el factor de volumen se cancela entre numerador y denominador. Como $Q$ sigue igual a $K_c$, el sistema no tiene motivo para desplazarse. Por eso la composicion de equilibrio no se modifica, a diferencia de lo que pasaria con $\\Delta n$ distinto de $0$." }
        ],
        resultado: "La composicion de equilibrio no cambia"
      }
    ],
    errores_tipicos: [
      { error: "En b) usar Delta n = 1 o -1 al pasar Kc a Kp, cuando hay 2 mol de gas a cada lado.", como_evitar: "Cuente los gases de ambos lados antes de aplicar la relacion Kp-Kc." },
      { error: "En d) decir que al reducir V el sistema se desplaza hacia el lado de menos concentracion.", como_evitar: "El desplazamiento por presion depende de los moles gaseosos, no de las concentraciones absolutas. Aqui son iguales." },
      { error: "En a) escribir Kc = x^2 / (...) olvidando el 2 del HCl.", como_evitar: "El HCl tiene coeficiente 2, asi que su concentracion se eleva al cuadrado en la expresion de Kc." }
    ]
  }
];

window.EJERCITACION["acidobase"] = [
  {
    num: 1,
    nivel: "Básico",
    temas: ["acidobase"],
    enunciado: "Calcule el pH de una solucion acuosa de HCl 2,5 x 10^-3 M a 25 C.",
    resolucion: [
      {
        parte: "",
        pasos: [
          { paso: "$\\text{HCl}$ es un acido fuerte: se disocia totalmente, $\\text{HCl} + \\text{H}_2\\text{O} \\rightarrow \\text{H}_3\\text{O}^+ + \\text{Cl}^-$. Entonces $[\\text{H}_3\\text{O}^+] = 2{,}5 \\times 10^{-3}\\ \\text{M}$.", porque: "Usamos que $\\text{HCl}$ es un acido fuerte, que se disocia por completo: cada mol de $\\text{HCl}$ libera un mol de $\\text{H}_3\\text{O}^+$ y un $\\text{Cl}^-$. Por eso $[\\text{H}_3\\text{O}^+]$ es igual a la concentracion inicial del acido, $2{,}5 \\times 10^{-3}\\ \\text{M}$, sin plantear equilibrio. Conviene verificar que el acido sea fuerte antes de usar esta relacion directa." },
          { paso: "$$\\text{pH} = -\\log(2{,}5 \\times 10^{-3}) = 2{,}60$$", porque: "El $\\text{pH}$ se define como el logaritmo decimal negativo de la concentracion de $\\text{H}_3\\text{O}^+$. Calculamos $-\\log(2{,}5 \\times 10^{-3})$ con la tecla log de la calculadora, lo que da $2{,}60$. El resultado se informa con 2 decimales porque la concentracion dada tiene 2 cifras significativas." },
          { paso: "Verificacion: el agua aporta solo $10^{-7}\\ \\text{M}$ de $\\text{H}_3\\text{O}^+$, despreciable frente a $2{,}5 \\times 10^{-3}\\ \\text{M}$.", porque: "El agua tambien produce $\\text{H}_3\\text{O}^+$, pero en una cantidad de $10^{-7}\\ \\text{M}$. Comparamos ese aporte con $2{,}5 \\times 10^{-3}\\ \\text{M}$ del acido, y la diferencia es tan grande que el $\\text{H}_3\\text{O}^+$ del acido domina el $\\text{pH}$. Si el acido estuviera muy diluido, esta comparacion cambiaria y habria que hacer el balance completo." }
        ],
        resultado: "$\\text{pH} = 2{,}60$"
      }
    ],
    errores_tipicos: [
      { error: "Calcular pH = 14 - 2,60 = 11,40, como si la solucion fuera basica.", como_evitar: "Un acido tiene pH menor que 7. Si el resultado da mayor que 7, revise el signo." },
      { error: "Usar ln en lugar de log en la calculadora.", como_evitar: "pH usa logaritmo en base 10: la tecla log, no ln." },
      { error: "Informar el pH con muchos decimales, como 2,6021.", como_evitar: "Con 2 cifras significativas en la concentracion, el pH se informa con 2 decimales." }
    ]
  },
  {
    num: 2,
    nivel: "Básico",
    temas: ["acidobase"],
    enunciado: "Calcule el pH de una solucion acuosa de NaOH 0,0040 M a 25 C.",
    resolucion: [
      {
        parte: "",
        pasos: [
          { paso: "$\\text{NaOH}$ es una base fuerte: se disocia totalmente, por lo que $[\\text{OH}^-] = 0{,}0040\\ \\text{M}$.", porque: "$\\text{NaOH}$ es una base fuerte que se disocia por completo, liberando un $\\text{OH}^-$ por cada mol de $\\text{NaOH}$. Como no hay equilibrio que plantear, $[\\text{OH}^-]$ es igual a la concentracion de la base, $0{,}0040\\ \\text{M}$. Con ese dato podemos calcular el $\\text{pOH}$ directamente." },
          { paso: "$$\\text{pOH} = -\\log(0{,}0040) = 2{,}40$$", porque: "El $\\text{pOH}$ se define como $-\\log[\\text{OH}^-]$, igual que el $\\text{pH}$ se define con $[\\text{H}_3\\text{O}^+]$. Calculamos $-\\log(0{,}0040)$ con la calculadora, y el resultado es $2{,}40$. Como ese valor es el $\\text{pOH}$ y no el $\\text{pH}$, hace falta un paso mas para llegar a la respuesta." },
          { paso: "$$\\text{pH} = 14{,}00 - 2{,}40 = 11{,}60$$", porque: "A $25\\ \\text{°C}$, $\\text{pH} + \\text{pOH} = 14$, y por eso el $\\text{pH}$ se calcula restando el $\\text{pOH}$ de $14{,}00$: $14{,}00 - 2{,}40 = 11{,}60$. Verificamos que la suma de $\\text{pH}$ y $\\text{pOH}$ de $14{,}00$, con $11{,}60 + 2{,}40 = 14{,}00$. Entonces el $\\text{pH}$ de la solucion es $11{,}60$, basico como corresponde a una base fuerte." }
        ],
        resultado: "$\\text{pH} = 11{,}60$"
      }
    ],
    errores_tipicos: [
      { error: "Dar 2,40 como pH, confundiendo pOH con pH.", como_evitar: "Si calculo -log[OH^-], ese valor es el pOH. Falta el paso pH = 14 - pOH." },
      { error: "Restar mal: 14 - 2,40 = 12,40.", como_evitar: "Haga la resta con cuidado y verifique que pH + pOH sume 14." },
      { error: "Usar [OH^-] = 0,0040^2 o dividir por 2 sin motivo.", como_evitar: "NaOH libera un OH^- por mol. Solo el Ca(OH)2 libera 2." }
    ]
  },
  {
    num: 3,
    nivel: "Básico",
    temas: ["acidobase"],
    enunciado: "Calcule el pH de una solucion de acido acetico (CH3COOH) 0,10 M a 25 C. Ka = 1,8 x 10^-5.",
    resolucion: [
      {
        parte: "",
        pasos: [
          { paso: "Equilibrio: $\\text{CH}_3\\text{COOH} + \\text{H}_2\\text{O} \\rightleftharpoons \\text{CH}_3\\text{COO}^- + \\text{H}_3\\text{O}^+$. Tabla: $$[\\text{H}_3\\text{O}^+] = x;\\quad [\\text{CH}_3\\text{COO}^-] = x;\\quad [\\text{CH}_3\\text{COOH}] = 0{,}10 - x$$", porque: "Como el acido acetico es debil, no se disocia por completo y se establece un equilibrio. Armamos la tabla con $x$ para el $\\text{H}_3\\text{O}^+$ y el acetato formados, y $0{,}10 - x$ para el acido que queda sin disociar, a partir de la concentracion inicial de $0{,}10\\ \\text{M}$. Asi $K_a$ queda expresada con una sola incognita." },
          { paso: "$$K_a = \\frac{x^2}{0{,}10 - x} = 1{,}8 \\times 10^{-5}$$ Aproximacion $x \\ll 0{,}10$: $x = \\sqrt{1{,}8 \\times 10^{-5} \\times 0{,}10} = 1{,}34 \\times 10^{-3}\\ \\text{M}$.", porque: "Escribimos $K_a$ con los productos en el numerador y el acido sin disociar en el denominador: $\\frac{x^2}{0{,}10 - x} = 1{,}8 \\times 10^{-5}$. Como $K_a$ es chica, suponemos $x$ mucho menor que $0{,}10$, y el denominador se simplifica a $0{,}10$, lo que da $x^2 = K_a \\times C$. Entonces $x = \\sqrt{1{,}8 \\times 10^{-5} \\times 0{,}10} = 1{,}34 \\times 10^{-3}\\ \\text{M}$, y conviene conservar varias cifras en $x$ para que el $\\text{pH}$ no pierda precision." },
          { paso: "Verificacion: $\\frac{x}{0{,}10} = 1{,}3\\% < 5\\%$. La aproximacion es valida.", porque: "La aproximacion se controla con $\\frac{x}{C}$, que indica la fraccion del acido que se ionizo. Calculamos $\\frac{x}{0{,}10}$, que da $1{,}3\\%$, menor que $5\\%$. Como el error de despreciar $x$ es chico, el resultado es valido. Si la ionizacion superara $5\\%$, habria que resolver la cuadratica completa." },
          { paso: "$$\\text{pH} = -\\log(1{,}34 \\times 10^{-3}) = 2{,}87$$", porque: "El $\\text{pH}$ se obtiene como $-\\log$ de la $[\\text{H}_3\\text{O}^+]$ de equilibrio, que en este caso es $x$. Con $x = 1{,}34 \\times 10^{-3}\\ \\text{M}$ calculamos $-\\log(1{,}34 \\times 10^{-3}) = 2{,}87$. Recordamos que la concentracion usada es la de equilibrio y no la inicial del acido." }
        ],
        resultado: "$\\text{pH} = 2{,}87$ ($[\\text{H}_3\\text{O}^+] = 1{,}34 \\times 10^{-3}\\ \\text{M}$)"
      }
    ],
    errores_tipicos: [
      { error: "Calcular pH = -log(0,10) = 1,00, tratando el acido debil como fuerte.", como_evitar: "Si el acido tiene Ka, no se ioniza por completo: use Ka para calcular [H3O^+]." },
      { error: "Escribir [H3O^+] = Ka x C (sin raiz cuadrada).", como_evitar: "Como x^2 aparece en Ka, la expresion aproximada es [H3O^+] = raiz(Ka x C)." },
      { error: "No verificar la aproximacion despues del calculo.", como_evitar: "Calcule x / C. Si es mayor que 5 %, hay que resolver la cuadratica completa." }
    ]
  },
  {
    num: 4,
    nivel: "Básico",
    temas: ["acidobase"],
    enunciado: "Una solucion de amoniaco (NH3) 0,10 M tiene pH = 11,13 a 25 C. Calcule Kb del NH3.",
    resolucion: [
      {
        parte: "",
        pasos: [
          { paso: "$$\\text{pOH} = 14{,}00 - 11{,}13 = 2{,}87$$ entonces $[\\text{OH}^-] = 10^{-2{,}87} = 1{,}35 \\times 10^{-3}\\ \\text{M}$.", porque: "Como la solucion es basica, el $\\text{pH}$ dado se convierte en $\\text{pOH}$ restando de $14{,}00$, porque a $25\\ \\text{°C}$ $\\text{pH} + \\text{pOH} = 14$. Calculamos $\\text{pOH} = 14{,}00 - 11{,}13 = 2{,}87$. Luego despejamos $[\\text{OH}^-] = 10^{-2{,}87} = 1{,}35 \\times 10^{-3}\\ \\text{M}$ invirtiendo el logaritmo. Usar $10^{-11{,}13}$ en lugar de $10^{-\\text{pOH}}$ daria un valor absurdo." },
          { paso: "Equilibrio: $\\text{NH}_3 + \\text{H}_2\\text{O} \\rightleftharpoons \\text{NH}_4^+ + \\text{OH}^-$. Por estequiometria $1:1$, $$[\\text{NH}_4^+] = [\\text{OH}^-] = 1{,}35 \\times 10^{-3}\\ \\text{M};\\quad [\\text{NH}_3] = 0{,}10 - 0{,}00135 = 0{,}0987\\ \\text{M}$$", porque: "El $\\text{NH}_3$ es una base debil que reacciona con el agua produciendo $\\text{NH}_4^+$ y $\\text{OH}^-$. Por la estequiometria $1:1$, el $\\text{NH}_4^+$ formado es igual al $\\text{OH}^-$ producido, $1{,}35 \\times 10^{-3}\\ \\text{M}$. El $\\text{NH}_3$ que queda es la concentracion inicial de $0{,}10\\ \\text{M}$ menos ese valor, es decir $0{,}0987\\ \\text{M}$. Esto arma la tabla de equilibrio tomando $x$ como $[\\text{OH}^-]$." },
          { paso: "$$K_b = \\frac{[\\text{NH}_4^+][\\text{OH}^-]}{[\\text{NH}_3]} = \\frac{(1{,}35 \\times 10^{-3})^2}{0{,}0987} = 1{,}8 \\times 10^{-5}$$", porque: "Escribimos $K_b$ con los productos en el numerador y el $\\text{NH}_3$ sin reaccionar en el denominador, usando concentraciones de equilibrio. Como $[\\text{NH}_4^+] = [\\text{OH}^-]$, el numerador es $(1{,}35 \\times 10^{-3})^2$. Dividiendo por $0{,}0987\\ \\text{M}$ de $\\text{NH}_3$ obtenemos $K_b = 1{,}8 \\times 10^{-5}$, y usamos ese valor calculado y no la concentracion inicial de $0{,}10\\ \\text{M}$." }
        ],
        resultado: "$K_b = 1{,}8 \\times 10^{-5}$"
      }
    ],
    errores_tipicos: [
      { error: "Calcular [OH^-] = 10^-11,13 (usando pH en lugar de pOH).", como_evitar: "Primero pOH = 14 - pH, y despues [OH^-] = 10^-pOH." },
      { error: "Suponer [OH^-] = 0,10 M como si fuera una base fuerte.", como_evitar: "NH3 es base debil: tiene Kb y se ioniza solo parcialmente." },
      { error: "Escribir Kb = [NH3] / ([NH4^+][OH^-]), con la fraccion invertida.", como_evitar: "Los productos van en el numerador y los reactivos en el denominador." }
    ]
  },
  {
    num: 5,
    nivel: "Básico",
    temas: ["acidobase"],
    enunciado: "Calcule Kb y pKb de la base conjugada del HCN (CN^-), sabiendo que Ka(HCN) = 6,2 x 10^-10 a 25 C.",
    resolucion: [
      {
        parte: "",
        pasos: [
          { paso: "$\\text{CN}^- + \\text{H}_2\\text{O} \\rightleftharpoons \\text{HCN} + \\text{OH}^-$: $\\text{CN}^-$ es la base conjugada del $\\text{HCN}$.", porque: "En un par acido-base conjugado, la base se obtiene quitando un $\\text{H}^+$ al acido: el $\\text{HCN}$ pierde $\\text{H}^+$ y queda $\\text{CN}^-$. Por eso la reaccion del $\\text{CN}^-$ con el agua, aceptando $\\text{H}^+$, es la que define el $K_b$. Identificar bien el par es el primer paso para no confundir las constantes." },
          { paso: "Para un par conjugado $K_a \\times K_b = K_w$. $$K_b = \\frac{1{,}0 \\times 10^{-14}}{6{,}2 \\times 10^{-10}} = 1{,}6 \\times 10^{-5}$$", porque: "Para un par conjugado $K_a \\times K_b = K_w$, porque al sumar la disociacion del acido y la hidrolisis de la base se obtiene la autoionizacion del agua. Usamos $K_b = \\frac{K_w}{K_a} = \\frac{1{,}0 \\times 10^{-14}}{6{,}2 \\times 10^{-10}} = 1{,}6 \\times 10^{-5}$. Como la $K_a$ del $\\text{HCN}$ es chica, el $\\text{CN}^-$ resulta una base debil." },
          { paso: "$$\\text{pK}_b = -\\log(1{,}6 \\times 10^{-5}) = 4{,}79$$", porque: "$\\text{pK}_b$ se define como $-\\log$ de la constante, igual que $\\text{pH}$ es $-\\log[\\text{H}_3\\text{O}^+]$. Calculamos $-\\log(1{,}6 \\times 10^{-5}) = 4{,}79$, que es el valor pedido. Cuanto menor es $\\text{pK}_b$, mas fuerte es la base, y este valor indica una base debil." }
        ],
        resultado: "$K_b = 1{,}6 \\times 10^{-5}$; $\\text{pK}_b = 4{,}79$"
      }
    ],
    errores_tipicos: [
      { error: "Usar Ka en lugar de Kb, sin convertirla.", como_evitar: "Para la base conjugada siempre hay que calcular Kb = Kw / Ka." },
      { error: "Calcular Kb = Ka x Kw (multiplicar en vez de dividir).", como_evitar: "Kb = Kw / Ka. Si Ka es chica, Kb es grande." },
      { error: "Calcular pKb como 1 / pKa.", como_evitar: "pKb = -log Kb, no el inverso de pKa." }
    ]
  },
  {
    num: 6,
    nivel: "Intermedio",
    temas: ["acidobase"],
    enunciado: "Una solucion de acido formico (HCOOH) 0,050 M tiene pH = 2,64 a 25 C. a) Calcule Ka del acido formico y el grado de ionizacion alpha en esta solucion. b) Calcule alpha de la misma solucion diluida 10 veces (0,0050 M).",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "$$[\\text{H}_3\\text{O}^+] = 10^{-2{,}64} = 2{,}3 \\times 10^{-3}\\ \\text{M}$$, que es igual a $[\\text{HCOO}^-]$ en la solucion (el aporte del agua se desprecia).", porque: "Usamos la relacion inversa del $\\text{pH}$, $[\\text{H}_3\\text{O}^+] = 10^{-\\text{pH}}$, porque $\\text{pH} = -\\log[\\text{H}_3\\text{O}^+]$. Con $\\text{pH} = 2{,}64$ obtenemos $10^{-2{,}64} = 2{,}3 \\times 10^{-3}\\ \\text{M}$. Como el acido es monoprotico, $[\\text{HCOO}^-]$ tambien vale $2{,}3 \\times 10^{-3}\\ \\text{M}$, y el aporte del agua se desprecia. Estos valores de equilibrio se usan despues para $K_a$ y para $\\alpha$." },
          { paso: "$$\\alpha = \\frac{[\\text{H}_3\\text{O}^+]}{C} = \\frac{2{,}3 \\times 10^{-3}}{0{,}050} = 0{,}046\\ (4{,}6\\%)$$", porque: "$\\alpha$ es el grado de ionizacion, es decir la fraccion del acido inicial que se disocio. Dividimos la concentracion de $\\text{H}_3\\text{O}^+$ formada, $2{,}3 \\times 10^{-3}\\ \\text{M}$, por la concentracion inicial $C = 0{,}050\\ \\text{M}$, y obtenemos $0{,}046$. Para expresarlo en porcentaje, $0{,}046$ equivale a $4{,}6\\%$." },
          { paso: "$$K_a = \\frac{[\\text{HCOO}^-][\\text{H}_3\\text{O}^+]}{[\\text{HCOOH}]} = \\frac{(2{,}3 \\times 10^{-3})^2}{0{,}050 - 2{,}3 \\times 10^{-3}} = 1{,}1 \\times 10^{-4}$$", porque: "Escribimos $K_a$ con los productos de la disociacion en el numerador y el acido sin disociar en el denominador. Como el $\\text{pH}$ da la concentracion de equilibrio, no hace falta aproximar: usamos $C - x$ en el denominador, con $x = 2{,}3 \\times 10^{-3}\\ \\text{M}$. Reemplazamos y obtenemos $\\frac{(2{,}3 \\times 10^{-3})^2}{0{,}050 - 2{,}3 \\times 10^{-3}} = 1{,}1 \\times 10^{-4}$. Verificamos que $x$ sea menor que $C$, para que el denominador sea positivo." }
        ],
        resultado: "$K_a = 1{,}1 \\times 10^{-4}$; $\\alpha = 4{,}6\\%$"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "$$K_a = \\frac{x^2}{0{,}0050 - x} = 1{,}1 \\times 10^{-4}$$ es decir $x^2 + 1{,}1 \\times 10^{-4}\\,x - 5{,}5 \\times 10^{-7} = 0$, de donde $x = 6{,}9 \\times 10^{-4}\\ \\text{M}$.", porque: "Al diluir usamos el mismo $K_a$ de a), con la nueva concentracion $C = 0{,}0050\\ \\text{M}$. Como $x$ no es despreciable frente a $0{,}0050$, reordenamos la ecuacion como $x^2 + K_a\\,x - K_a\\,C = 0$, es decir $x^2 + 1{,}1 \\times 10^{-4}\\,x - 5{,}5 \\times 10^{-7} = 0$. Tomamos la raiz positiva y obtenemos $x = 6{,}9 \\times 10^{-4}\\ \\text{M}$. $K_a$ no cambia al diluir, solo cambia $x$." },
          { paso: "$$\\alpha = \\frac{6{,}9 \\times 10^{-4}}{0{,}0050} = 0{,}138\\ (13{,}8\\%)$$", porque: "Aplicamos la misma definicion de $\\alpha$ que en a): $x$ dividido por la concentracion inicial. Como ahora $C = 0{,}0050\\ \\text{M}$, calculamos $\\frac{6{,}9 \\times 10^{-4}}{0{,}0050} = 0{,}138$, es decir $13{,}8\\%$. El cociente aumenta aunque $x$ sea menor, por eso el grado de ionizacion sube al diluir." }
        ],
        resultado: "$\\alpha = 13{,}8\\%$ (mayor que en la solucion $0{,}050\\ \\text{M}$)"
      }
    ],
    errores_tipicos: [
      { error: "En a) calcular Ka = [H3O^+]^2 / C (sin restar x de C) y obtener 1,0 x 10^-4.", como_evitar: "Use la expresion completa con (C - x). Dar 1,0 x 10^-4 es un error de aproximacion." },
      { error: "Usar pH = 2,64 directamente como [H3O^+] (olvidar el -log inverso).", como_evitar: "[H3O^+] = 10^-pH, no el pH mismo." },
      { error: "En b) decir que alpha baja al diluir porque hay menos moles de acido.", como_evitar: "Al diluir, la ionizacion porcentual aumenta: el equilibrio se corre hacia los iones." }
    ]
  },
  {
    num: 7,
    nivel: "Intermedio",
    temas: ["acidobase"],
    enunciado: "Se mezclan 50,0 mL de HCl 0,100 M con 40,0 mL de NaOH 0,100 M a 25 C. a) Calcule el pH de la solucion final. b) Calcule cuantos mL adicionales de NaOH 0,100 M se necesitan para llegar a pH = 7,00. Suponga volumenes aditivos.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Moles: $$\\text{HCl}:\\ 0{,}100 \\times 50{,}0 = 5{,}00\\ \\text{mmol de }\\text{H}^+;\\quad \\text{NaOH}:\\ 0{,}100 \\times 40{,}0 = 4{,}00\\ \\text{mmol de }\\text{OH}^-$$", porque: "Calculamos los moles con $n = M \\times V$. Con $M$ en $\\text{mol/L}$ y $V$ en $\\text{mL}$, el resultado sale en $\\text{mmol}$: $0{,}100 \\times 50{,}0 = 5{,}00\\ \\text{mmol}$ de $\\text{H}^+$ del $\\text{HCl}$. El $\\text{NaOH}$ aporta $0{,}100 \\times 40{,}0 = 4{,}00\\ \\text{mmol}$ de $\\text{OH}^-$, y como la neutralizacion es $1:1$, ambos reaccionan entre si." },
          { paso: "Exceso de $\\text{H}^+$: $5{,}00 - 4{,}00 = 1{,}00\\ \\text{mmol}$, en un volumen total de $90{,}0\\ \\text{mL}$. $$[\\text{H}^+] = \\frac{1{,}00}{90{,}0} = 0{,}0111\\ \\text{M}$$", porque: "La neutralizacion consume cantidades iguales de $\\text{H}^+$ y $\\text{OH}^-$, y lo que sobra es el reactivo en exceso. Como $5{,}00 - 4{,}00 = 1{,}00\\ \\text{mmol}$ de $\\text{H}^+$ quedan sin neutralizar, ese es el exceso. Dividimos $1{,}00\\ \\text{mmol}$ por el volumen total de $90{,}0\\ \\text{mL}$, que es la suma de los dos volumenes mezclados, y obtenemos $[\\text{H}^+] = 0{,}0111\\ \\text{M}$." },
          { paso: "$$\\text{pH} = -\\log(0{,}0111) = 1{,}95$$", porque: "El $\\text{pH}$ se calcula con la concentracion final del exceso, no con las iniciales de cada reactivo. Como el $\\text{H}^+$ esta en exceso, calculamos $-\\log(0{,}0111) = 1{,}95$. Ese valor es acido, como corresponde a una solucion con exceso de acido." }
        ],
        resultado: "$\\text{pH} = 1{,}95$"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Para $\\text{pH} = 7{,}00$ hay que neutralizar todo el $\\text{HCl}$: $$\\text{OH}^-\\ \\text{adicional} = 5{,}00 - 4{,}00 = 1{,}00\\ \\text{mmol}$$", porque: "El $\\text{pH} = 7{,}00$ corresponde al punto de equivalencia de un acido fuerte con una base fuerte, donde no sobra ni acido ni base. Por eso hay que agregar la cantidad de $\\text{OH}^-$ que falta para neutralizar el $\\text{H}^+$ restante. Calculamos $5{,}00 - 4{,}00 = 1{,}00\\ \\text{mmol}$, y esa es la cantidad adicional de $\\text{OH}^-$ necesaria." },
          { paso: "Volumen $$V = \\frac{1{,}00\\ \\text{mmol}}{0{,}100\\ \\text{M}} = 10{,}0\\ \\text{mL}$$ de $\\text{NaOH}$.", porque: "Despejamos el volumen de $V = \\frac{n}{M}$, porque la concentracion es moles por litro. Con $1{,}00\\ \\text{mmol}$ de $\\text{OH}^-$ y $0{,}100\\ \\text{M}$ de $\\text{NaOH}$, $V = \\frac{1{,}00\\ \\text{mmol}}{0{,}100\\ \\text{mmol/mL}} = 10{,}0\\ \\text{mL}$. Conviene revisar las unidades antes de dar la respuesta final." }
        ],
        resultado: "$10{,}0\\ \\text{mL}$ adicionales de $\\text{NaOH}$ $0{,}100\\ \\text{M}$"
      }
    ],
    errores_tipicos: [
      { error: "Calcular [H^+] dividiendo por 50 mL (restar volumenes en lugar de sumarlos).", como_evitar: "El volumen final es la suma de todos los volumenes mezclados." },
      { error: "Responder pH = 7,00 en a) sin calcular el exceso de reactivo.", como_evitar: "Antes de decir pH 7, compare moles de H^+ y de OH^-." },
      { error: "Calcular el pH como -log(0,100) sin descontar la neutralizacion.", como_evitar: "Primero se neutraliza, despues se calcula la concentracion del exceso." }
    ]
  },
  {
    num: 8,
    nivel: "Intermedio",
    temas: ["acidobase"],
    enunciado: "Se mezclan 100 mL de acido acetico 0,100 M con 50,0 mL de NaOH 0,100 M (Ka = 1,8 x 10^-5, pKa = 4,74) a 25 C. a) Calcule el pH de la solucion. b) A esa solucion se le agrega 1,00 mmol de HCl. Calcule el nuevo pH. Suponga volumenes aditivos.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Moles iniciales: $$\\text{CH}_3\\text{COOH} = 0{,}100 \\times 100 = 10{,}0\\ \\text{mmol};\\quad \\text{NaOH} = 0{,}100 \\times 50{,}0 = 5{,}00\\ \\text{mmol}$$", porque: "Calculamos los moles de cada reactivo con $n = M \\times V$ antes de cualquier otra cosa. Con $0{,}100\\ \\text{M}$ de acido y $100\\ \\text{mL}$ obtenemos $10{,}0\\ \\text{mmol}$ de $\\text{CH}_3\\text{COOH}$, y con $0{,}100\\ \\text{M}$ de $\\text{NaOH}$ y $50{,}0\\ \\text{mL}$ obtenemos $5{,}00\\ \\text{mmol}$. Esto permite ver que reactivo queda en exceso despues de la reaccion." },
          { paso: "El $\\text{NaOH}$ neutraliza $5{,}00\\ \\text{mmol}$ del acido: quedan $5{,}00\\ \\text{mmol}$ de $\\text{CH}_3\\text{COOH}$ y se forman $5{,}00\\ \\text{mmol}$ de $\\text{CH}_3\\text{COO}^-$.", porque: "La reaccion $\\text{CH}_3\\text{COOH} + \\text{OH}^- \\rightarrow \\text{CH}_3\\text{COO}^- + \\text{H}_2\\text{O}$ es $1:1$: cada mmol de $\\text{NaOH}$ consume un mmol de acido y forma un mmol de acetato. Como el acido queda en exceso ($10{,}0$ frente a $5{,}00\\ \\text{mmol}$), la mezcla de acido debil con su base conjugada funciona como solucion reguladora. Verificamos que el total de acido se conserve: $5{,}00 + 5{,}00 = 10{,}0\\ \\text{mmol}$." },
          { paso: "Es una solucion reguladora: $$\\text{pH} = \\text{pK}_a + \\log\\frac{[\\text{A}^-]}{[\\text{HA}]} = 4{,}74 + \\log\\frac{5{,}00}{5{,}00} = 4{,}74$$", porque: "La solucion contiene un acido debil y su base conjugada en cantidades comparables, lo que la hace reguladora. Usamos Henderson-Hasselbalch, que relaciona el $\\text{pH}$ con el $\\text{pK}_a = 4{,}74$ y con el cociente entre base y acido. Como $[\\text{A}^-] = [\\text{HA}] = 5{,}00\\ \\text{mmol}$, el logaritmo vale $\\log\\frac{5{,}00}{5{,}00} = 0$ y el $\\text{pH}$ es $4{,}74$." }
        ],
        resultado: "$\\text{pH} = 4{,}74$"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "El $\\text{HCl}$ consume $1{,}00\\ \\text{mmol}$ de acetato: $\\text{CH}_3\\text{COO}^- + \\text{H}^+ \\rightarrow \\text{CH}_3\\text{COOH}$. Quedan $4{,}00\\ \\text{mmol}$ de $\\text{CH}_3\\text{COO}^-$ y $6{,}00\\ \\text{mmol}$ de $\\text{CH}_3\\text{COOH}$.", porque: "El $\\text{HCl}$ aporta $1{,}00\\ \\text{mmol}$ de $\\text{H}^+$, que reacciona con el acetato tomando una unidad de base por cada mmol de $\\text{H}^+$. Entonces el acetato baja de $5{,}00$ a $4{,}00\\ \\text{mmol}$ y el acido sube de $5{,}00$ a $6{,}00\\ \\text{mmol}$. Este intercambio es el mecanismo por el cual el buffer resiste el cambio de $\\text{pH}$." },
          { paso: "$$\\text{pH} = 4{,}74 + \\log\\frac{4{,}00}{6{,}00} = 4{,}74 - 0{,}18 = 4{,}56$$", porque: "Volvemos a aplicar Henderson-Hasselbalch con los nuevos moles de base y de acido: $\\text{pH} = 4{,}74 + \\log\\frac{4{,}00}{6{,}00}$. El volumen total se cancela en el cociente, porque ambas cantidades estan en el mismo volumen. El $\\text{pH}$ baja solo un poco desde $4{,}74$, lo que muestra la capacidad reguladora de la solucion." }
        ],
        resultado: "$\\text{pH} = 4{,}56$"
      }
    ],
    errores_tipicos: [
      { error: "En a) calcular el pH como si la solucion fuera solo CH3COOH 0,100 M, olvidando que el NaOH consume acido.", como_evitar: "Primero plantee la reaccion acido-base y calcule los moles de cada especie." },
      { error: "Decir que la solucion reguladora no cambia de pH al agregar HCl porque 'es un buffer'.", como_evitar: "Un buffer resiste el cambio, pero no lo impide: el pH baja un poco y la capacidad es limitada." },
      { error: "Invertir el cociente de Henderson: log([HA] / [A^-]).", como_evitar: "Henderson: pH = pKa + log([base conjugada] / [acido])." }
    ]
  },
  {
    num: 9,
    nivel: "Intermedio",
    temas: ["acidobase"],
    enunciado: "Calcule el pH de una solucion de NH4Cl 0,10 M a 25 C, sabiendo que Kb(NH3) = 1,8 x 10^-5. a) Escriba la ecuacion de hidrolisis y decida si la solucion es acida, basica o neutra. b) Calcule el pH.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "$\\text{NH}_4\\text{Cl} \\rightarrow \\text{NH}_4^+ + \\text{Cl}^-$. El $\\text{Cl}^-$ es la base conjugada de un acido fuerte y no hidroliza. El $\\text{NH}_4^+$ hidroliza: $\\text{NH}_4^+ + \\text{H}_2\\text{O} \\rightleftharpoons \\text{NH}_3 + \\text{H}_3\\text{O}^+$.", porque: "La sal se disocia por completo en sus iones. Solo los iones que son acido o base debil reaccionan con el agua: el $\\text{Cl}^-$ es la base conjugada de un acido fuerte, por eso no reacciona. El $\\text{NH}_4^+$, en cambio, es el acido conjugado de una base debil, asi que se escribe su hidrolisis." },
          { paso: "Como el $\\text{NH}_4^+$ dona $\\text{H}^+$, la solucion es acida ($\\text{pH} < 7$).", porque: "El $\\text{NH}_4^+$ dona $\\text{H}^+$ al agua y produce $\\text{H}_3\\text{O}^+$. Como aumenta la concentracion de $\\text{H}_3\\text{O}^+$, la solucion queda con $\\text{pH} < 7$. Esta conclusion cualitativa se confirma despues con el calculo numerico del $\\text{pH}$ en la parte b)." }
        ],
        resultado: "$\\text{NH}_4^+ + \\text{H}_2\\text{O} \\rightleftharpoons \\text{NH}_3 + \\text{H}_3\\text{O}^+$; solucion acida"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "$$K_a(\\text{NH}_4^+) = \\frac{K_w}{K_b} = \\frac{1{,}0 \\times 10^{-14}}{1{,}8 \\times 10^{-5}} = 5{,}6 \\times 10^{-10}$$", porque: "$\\text{NH}_4^+$ y $\\text{NH}_3$ son un par conjugado, asi que $K_a \\times K_b = K_w$. Por eso la $K_a$ del ion amonio se obtiene dividiendo $K_w = 1{,}0 \\times 10^{-14}$ por el $K_b$ del $\\text{NH}_3$, que es $1{,}8 \\times 10^{-5}$. Con eso obtenemos $K_a = 5{,}6 \\times 10^{-10}$, la constante que se usa para calcular el $\\text{pH}$ de la solucion de $\\text{NH}_4\\text{Cl}$ $0{,}10\\ \\text{M}$." },
          { paso: "$$[\\text{H}_3\\text{O}^+] = \\sqrt{K_a \\times C} = \\sqrt{5{,}56 \\times 10^{-10} \\times 0{,}10} = 7{,}45 \\times 10^{-6}\\ \\text{M}$$ Verificacion: $\\frac{x}{C} = 0{,}007\\%$, muy menor que $5\\%$.", porque: "Como el $\\text{NH}_4^+$ es un acido debil, usamos $[\\text{H}_3\\text{O}^+] = \\sqrt{K_a \\times C}$, que sale de despreciar $x$ frente a $C$. Reemplazamos $K_a = 5{,}56 \\times 10^{-10}$ y $C = 0{,}10\\ \\text{M}$, y obtenemos $\\sqrt{5{,}56 \\times 10^{-10} \\times 0{,}10} = 7{,}45 \\times 10^{-6}\\ \\text{M}$. La verificacion $\\frac{x}{C} = 0{,}007\\%$ confirma que la aproximacion es valida." },
          { paso: "$$\\text{pH} = -\\log(7{,}45 \\times 10^{-6}) = 5{,}13$$", porque: "El $\\text{pH}$ es $-\\log$ de la $[\\text{H}_3\\text{O}^+]$ de equilibrio. Calculamos $-\\log(7{,}45 \\times 10^{-6}) = 5{,}13$, un valor que indica una solucion acida, pero no tan acida como un acido fuerte de igual concentracion. Conviene redondear solo al final del calculo." }
        ],
        resultado: "$\\text{pH} = 5{,}13$"
      }
    ],
    errores_tipicos: [
      { error: "Decir que la solucion es basica porque el ion amonio viene del amoniaco.", como_evitar: "Lo que define el caracter es el acido conjugado (NH4^+), que dona H^+." },
      { error: "Hidrolizar el Cl^- y escribir Cl^- + H2O -> HCl + OH^-.", como_evitar: "El Cl^- es la base conjugada de un acido fuerte: no reacciona con el agua." },
      { error: "Usar Kb en lugar de Ka para el NH4^+.", como_evitar: "Para el acido conjugado se calcula Ka = Kw / Kb." }
    ]
  },
  {
    num: 10,
    nivel: "Intermedio",
    temas: ["acidobase"],
    enunciado: "El H2S es un acido diprotico con Ka1 = 1,0 x 10^-7 y Ka2 = 1,3 x 10^-13 a 25 C. Para una solucion de H2S 0,10 M calcule: a) el pH; b) la concentracion de S^2- en el equilibrio.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "La primera ionizacion, $\\text{H}_2\\text{S} \\rightleftharpoons \\text{H}^+ + \\text{HS}^-$, define el $\\text{pH}$ porque $K_{a1}$ es mucho mayor que $K_{a2}$.", porque: "El $\\text{H}_2\\text{S}$ libera $\\text{H}^+$ en dos etapas, y la primera tiene una $K_{a1} = 1{,}0 \\times 10^{-7}$ mucho mayor que la segunda, $K_{a2} = 1{,}3 \\times 10^{-13}$. Por eso la mayor parte del $\\text{H}^+$ proviene del primer paso, que es el que determina el $\\text{pH}$. Asi el calculo puede plantearse usando solo $K_{a1}$." },
          { paso: "$$[\\text{H}^+] = [\\text{HS}^-] = x = \\sqrt{1{,}0 \\times 10^{-7} \\times 0{,}10} = 1{,}0 \\times 10^{-4}\\ \\text{M}$$ Verificacion: $\\frac{x}{0{,}10} = 0{,}1\\% < 5\\%$.", porque: "Como el primer paso se comporta como un acido debil monoprotico, $[\\text{H}^+] = [\\text{HS}^-] = x$ y aplicamos $x^2 = K_{a1} \\times C$. Con $K_{a1} = 1{,}0 \\times 10^{-7}$ y $C = 0{,}10\\ \\text{M}$, obtenemos $\\sqrt{1{,}0 \\times 10^{-7} \\times 0{,}10} = 1{,}0 \\times 10^{-4}\\ \\text{M}$. La verificacion $\\frac{x}{C} = 0{,}1\\%$, menor que $5\\%$, confirma que la aproximacion es valida." },
          { paso: "$$\\text{pH} = -\\log(1{,}0 \\times 10^{-4}) = 4{,}00$$", porque: "El $\\text{pH}$ es $-\\log$ de la $[\\text{H}^+]$ de equilibrio, es decir $-\\log(1{,}0 \\times 10^{-4})$. El resultado es $4{,}00$, un valor que depende solo de $K_{a1}$ y de la concentracion $C$ del acido. Esta relacion permite verificar el $\\text{pH}$ con la calculadora." }
        ],
        resultado: "$\\text{pH} = 4{,}00$"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "$\\text{S}^{2-}$ se forma en el segundo paso: $\\text{HS}^- \\rightleftharpoons \\text{H}^+ + \\text{S}^{2-}$, con $K_{a2} = \\frac{[\\text{H}^+][\\text{S}^{2-}]}{[\\text{HS}^-]}$.", porque: "Para calcular $[\\text{S}^{2-}]$ usamos el segundo paso de ionizacion, $\\text{HS}^- \\rightarrow \\text{H}^+ + \\text{S}^{2-}$. Su constante $K_{a2}$ relaciona $[\\text{H}^+]$, $[\\text{S}^{2-}]$ y $[\\text{HS}^-]$ en el equilibrio, por eso se escribe con esas tres concentraciones y no con $K_{a1}$. Entonces $K_{a2} = 1{,}3 \\times 10^{-13}$ es el dato que controla la formacion de $\\text{S}^{2-}$." },
          { paso: "Como $[\\text{H}^+] \\approx [\\text{HS}^-]$, los factores se cancelan: $$[\\text{S}^{2-}] = K_{a2} = 1{,}3 \\times 10^{-13}\\ \\text{M}$$", porque: "Como $[\\text{H}^+]$ es aproximadamente igual a $[\\text{HS}^-]$, que provienen del primer paso, esos factores se cancelan en la expresion de $K_{a2}$. Por eso queda $[\\text{S}^{2-}] = K_{a2} = 1{,}3 \\times 10^{-13}\\ \\text{M}$. Este resultado no depende de la concentracion inicial de $\\text{H}_2\\text{S}$, y vale cuando el primer paso domina la concentracion de $\\text{H}^+$ y de $\\text{HS}^-$." }
        ],
        resultado: "$[\\text{S}^{2-}] = 1{,}3 \\times 10^{-13}\\ \\text{M}$"
      }
    ],
    errores_tipicos: [
      { error: "En a) calcular el pH con las dos Ka sumadas o usando Ka2.", como_evitar: "El pH lo define el primer paso de ionizacion, con Ka1." },
      { error: "En b) decir que [S^2-] = 1,3 x 10^-13 x 0,10 (dependiendo de la concentracion inicial).", como_evitar: "Con [H^+] aprox. [HS^-] el resultado queda igual a Ka2 y no depende de C." },
      { error: "En a) dar pH = -log(Ka1) = 7,00, como si fuera un acido monoprotico con Ka1 directa.", como_evitar: "Para un acido debil, [H^+] = raiz(Ka x C), no Ka." }
    ]
  },
  {
    num: 11,
    nivel: "Avanzado",
    temas: ["acidobase"],
    enunciado: "Una solucion de acido fluorhidrico (HF) 0,020 M tiene Ka = 6,8 x 10^-4 a 25 C. a) Calcule [H^+] y el pH verificando si puede usarse la aproximacion simple. b) Calcule el grado de ionizacion alpha.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Aproximacion simple: $$[\\text{H}^+] = \\sqrt{6{,}8 \\times 10^{-4} \\times 0{,}020} = 3{,}7 \\times 10^{-3}\\ \\text{M}$$ Verificacion: $\\frac{x}{C} = 18\\% > 5\\%$. La aproximacion NO es valida.", porque: "Usamos la aproximacion de acido debil como primera estimacion, $x = \\sqrt{K_a \\times C}$, con $K_a = 6{,}8 \\times 10^{-4}$ y $C = 0{,}020\\ \\text{M}$. Reemplazamos y obtenemos $[\\text{H}^+] = 3{,}7 \\times 10^{-3}\\ \\text{M}$. Al verificar $\\frac{x}{C} = 18\\%$, que supera $5\\%$, vemos que la ionizacion es grande y despreciar $x$ no es valido. Por eso este resultado no sirve como respuesta final." },
          { paso: "Sin aproximacion, $$K_a = \\frac{x^2}{0{,}020 - x} \\rightarrow x^2 + 6{,}8 \\times 10^{-4}\\,x - 1{,}36 \\times 10^{-5} = 0$$ con $x = [\\text{H}^+] = [\\text{F}^-]$.", porque: "Sin aproximacion, la expresion completa $K_a = \\frac{x^2}{C - x}$ se reordena como ecuacion cuadratica: $x^2 + K_a\\,x - K_a\\,C = 0$. Reemplazamos $K_a = 6{,}8 \\times 10^{-4}$ y $C = 0{,}020$, lo que da $x^2 + 6{,}8 \\times 10^{-4}\\,x - 1{,}36 \\times 10^{-5} = 0$. Aqui $x$ es $[\\text{H}^+] = [\\text{F}^-]$, y esta es la forma general para un acido debil cuando $x$ no es despreciable frente a $C$." },
          { paso: "$$x = \\frac{-6{,}8 \\times 10^{-4} + \\sqrt{(6{,}8 \\times 10^{-4})^2 + 4 \\times 1{,}36 \\times 10^{-5}}}{2} = 3{,}36 \\times 10^{-3}\\ \\text{M}$$", porque: "Aplicamos la formula resolvente con $b = 6{,}8 \\times 10^{-4}$ y $c = -1{,}36 \\times 10^{-5}$, ya que el termino $x^2$ no tiene coeficiente. Tomamos la raiz positiva, porque la concentracion no puede ser negativa. Calculando el discriminante con todas sus cifras, obtenemos $x = 3{,}36 \\times 10^{-3}\\ \\text{M}$." },
          { paso: "$$\\text{pH} = -\\log(3{,}36 \\times 10^{-3}) = 2{,}47$$", porque: "Calculamos el $\\text{pH}$ con el valor exacto de $[\\text{H}^+]$ que obtuvimos de la cuadratica, no con el de la aproximacion. Con $-\\log(3{,}36 \\times 10^{-3}) = 2{,}47$, el resultado difiere del de la aproximacion, y esa diferencia muestra por que la verificacion es importante. Verificamos el redondeo con la calculadora antes de informarlo." }
        ],
        resultado: "$[\\text{H}^+] = 3{,}36 \\times 10^{-3}\\ \\text{M}$; $\\text{pH} = 2{,}47$ (la aproximacion simple daria $2{,}43$, no valido)"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "$$\\alpha = \\frac{x}{C} = \\frac{3{,}36 \\times 10^{-3}}{0{,}020} = 0{,}168\\ (16{,}8\\%)$$", porque: "$\\alpha$ es la fraccion del acido inicial que se ionizo, y la calculamos como $\\frac{x}{C}$. Usamos el valor exacto de $x$ obtenido en la parte a), $3{,}36 \\times 10^{-3}\\ \\text{M}$, dividido por $C = 0{,}020\\ \\text{M}$, lo que da $0{,}168$ o $16{,}8\\%$. Ese porcentaje es coherente con la ionizacion grande que tiene el $\\text{HF}$ en esta concentracion." }
        ],
        resultado: "$\\alpha = 16{,}8\\%$"
      }
    ],
    errores_tipicos: [
      { error: "Aplicar raiz(Ka x C) sin verificar y dar pH = 2,43 como respuesta.", como_evitar: "Siempre calcule x / C. Con mas del 5 % de ionizacion la cuadratica es obligatoria." },
      { error: "Escribir Ka = x / (C - x), olvidando el cuadrado de x.", como_evitar: "Ka = [A^-][H^+] / [HA]: en el numerador aparecen dos concentraciones iguales a x." },
      { error: "Asignar la raiz negativa de la cuadratica como [H^+].", como_evitar: "Una concentracion es positiva: se toma la raiz positiva." }
    ]
  },
  {
    num: 12,
    nivel: "Avanzado",
    temas: ["acidobase"],
    enunciado: "Calcule el pH de: a) HCl 2,0 x 10^-8 M; b) HCl 2,0 x 10^-6 M, a 25 C. Justifique por que en el caso a) el resultado no es el de -log(C).",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Balance de cargas: $$[\\text{H}^+] = [\\text{Cl}^-] + [\\text{OH}^-] = C + \\frac{K_w}{[\\text{H}^+]}$$", porque: "Cuando el acido es muy diluido, el agua aporta $\\text{H}^+$ y $\\text{OH}^-$ en cantidades comparables al acido, por eso no alcanza con $C$. Planteamos el balance de cargas: la suma de cargas positivas es igual a la suma de cargas negativas. Asi $[\\text{H}^+] = [\\text{Cl}^-] + [\\text{OH}^-]$ incluye todos los iones presentes, y $[\\text{OH}^-] = \\frac{K_w}{[\\text{H}^+]}$." },
          { paso: "$$[\\text{H}^+]^2 - C\\,[\\text{H}^+] - K_w = 0,\\quad [\\text{H}^+] = \\frac{C + \\sqrt{C^2 + 4K_w}}{2} = 1{,}1 \\times 10^{-7}\\ \\text{M}$$", porque: "Multiplicamos el balance por $[\\text{H}^+]$ y usamos $[\\text{OH}^-] = \\frac{K_w}{[\\text{H}^+]}$, lo que da $[\\text{H}^+]^2 - C\\,[\\text{H}^+] - K_w = 0$. Aplicamos la formula resolvente con $C = 2{,}0 \\times 10^{-8}\\ \\text{M}$ y tomamos la raiz positiva, porque la concentracion es positiva. El resultado $1{,}1 \\times 10^{-7}\\ \\text{M}$ muestra que el $\\text{H}^+$ del agua no se puede despreciar frente al del acido." },
          { paso: "$$\\text{pH} = -\\log(1{,}1 \\times 10^{-7}) = 6{,}96$$", porque: "El $\\text{pH}$ se calcula a partir de la concentracion total de $\\text{H}^+$, incluyendo el aporte del agua. Con $-\\log(1{,}1 \\times 10^{-7})$ obtenemos $6{,}96$, un valor ligeramente acido aunque el acido sea diluido. Este resultado no se obtendria si se usara solo la concentracion del acido." },
          { paso: "Justificacion: $-\\log(2{,}0 \\times 10^{-8})$ daria $7{,}70$, pero eso ignora el agua. El acido es tan diluido que el $\\text{pH}$ queda cerca de $7$ y ligeramente acido.", porque: "Este paso explica por que la respuesta no es $-\\log(C)$. Si se ignorara el agua, $-\\log(2{,}0 \\times 10^{-8})$ daria $7{,}70$, un valor basico que es imposible para un acido. Cuando $C$ es comparable con el $\\text{H}^+$ que aporta el agua, este no puede despreciarse, y por eso el $\\text{pH}$ queda cerca de $7$ y ligeramente acido." }
        ],
        resultado: "$\\text{pH} = 6{,}96$"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Con $C = 2{,}0 \\times 10^{-6}\\ \\text{M}$, el aporte del agua es del orden de $5\\%$ ($\\frac{10^{-7}}{2{,}0 \\times 10^{-6}}$), pequeno frente a $C$: $$\\text{pH} = -\\log(2{,}0 \\times 10^{-6}) = 5{,}70$$", porque: "Cuando $C$ es mucho mayor que el $\\text{H}^+$ del agua, el aporte del agua es pequeno y el $\\text{pH}$ se calcula directamente como $-\\log C$. Aqui $C = 2{,}0 \\times 10^{-6}\\ \\text{M}$, y calculamos $\\text{pH} = -\\log(2{,}0 \\times 10^{-6}) = 5{,}70$. Por eso el $\\text{pH}$ de b) se obtiene con esa formula simple, sin balance de cargas." }
        ],
        resultado: "$\\text{pH} = 5{,}70$"
      }
    ],
    errores_tipicos: [
      { error: "En a) calcular pH = -log(2,0 x 10^-8) = 7,70 e ignorar el agua.", como_evitar: "Si la concentracion del acido es del orden de 10^-7 M o menor, hay que hacer el balance de cargas." },
      { error: "En a) decir que el pH es exactamente 7,00 porque el acido es muy diluido.", como_evitar: "El agua solo aporta 10^-7 M de H^+: sumarlo al del acido da un pH ligeramente acido, no exactamente 7." },
      { error: "Pensar que una solucion acida diluida tiene pH mayor que 7 por estar diluida.", como_evitar: "Al diluir un acido, el pH sube hacia 7, pero nunca pasa de 7: el agua no puede volverlo basico." }
    ]
  },
  {
    num: 13,
    nivel: "Avanzado",
    temas: ["acidobase"],
    enunciado: "Se titulan 25,0 mL de acido acetico 0,100 M con NaOH 0,100 M a 25 C (Ka = 1,8 x 10^-5). a) Calcule el volumen de NaOH necesario para llegar al punto de equivalencia y el pH en ese punto. b) Elija, entre fenolftaleina (vire entre pH 8,2 y 10,0) y anaranjado de metilo (vire entre pH 3,1 y 4,4), el indicador adecuado, justificando.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "En equivalencia: $$n(\\text{NaOH}) = n(\\text{CH}_3\\text{COOH}) = 0{,}100 \\times 25{,}0 = 2{,}50\\ \\text{mmol};\\quad V = \\frac{2{,}50\\ \\text{mmol}}{0{,}100\\ \\text{M}} = 25{,}0\\ \\text{mL}$$", porque: "En una titulacion $1:1$, el punto de equivalencia se alcanza cuando los moles de base agregada igualan los moles de acido inicial. Calculamos $n = 0{,}100 \\times 25{,}0 = 2{,}50\\ \\text{mmol}$ de acido, y con $V = \\frac{n}{M}$ obtenemos el volumen de $\\text{NaOH}$. Aqui $V = \\frac{2{,}50\\ \\text{mmol}}{0{,}100\\ \\text{M}} = 25{,}0\\ \\text{mL}$, que es el volumen pedido en la parte a)." },
          { paso: "En equivalencia queda solo acetato: $$[\\text{CH}_3\\text{COO}^-] = \\frac{2{,}50\\ \\text{mmol}}{50{,}0\\ \\text{mL}} = 0{,}0500\\ \\text{M}$$", porque: "En equivalencia todo el acido se convirtio en acetato, asi que solo queda la base conjugada. Su concentracion se obtiene dividiendo los $2{,}50\\ \\text{mmol}$ de acetato por el volumen total, que es $25{,}0 + 25{,}0 = 50{,}0\\ \\text{mL}$. Olvidar sumar el volumen de $\\text{NaOH}$ agregado es un error frecuente, y daria una concentracion del doble." },
          { paso: "$$K_b = \\frac{K_w}{K_a} = \\frac{1{,}0 \\times 10^{-14}}{1{,}8 \\times 10^{-5}} = 5{,}6 \\times 10^{-10}$$ $[\\text{OH}^-] = \\sqrt{K_b \\times C} = \\sqrt{5{,}6 \\times 10^{-10} \\times 0{,}0500} = 5{,}3 \\times 10^{-6}\\ \\text{M}$", porque: "El acetato es una base debil que reacciona con el agua, y su $K_b$ se obtiene como $K_b = \\frac{K_w}{K_a} = \\frac{1{,}0 \\times 10^{-14}}{1{,}8 \\times 10^{-5}}$. Con $K_b = 5{,}6 \\times 10^{-10}$ y $C = 0{,}0500\\ \\text{M}$ usamos $[\\text{OH}^-] = \\sqrt{K_b \\times C}$, la aproximacion de base debil. Entonces $\\sqrt{5{,}6 \\times 10^{-10} \\times 0{,}0500} = 5{,}3 \\times 10^{-6}\\ \\text{M}$, y el $\\text{pH}$ de equivalencia resulta basico y no $7$." },
          { paso: "$$\\text{pOH} = 5{,}28;\\quad \\text{pH} = 14{,}00 - 5{,}28 = 8{,}72$$", porque: "Calculamos $\\text{pOH} = -\\log[\\text{OH}^-]$ a partir de la concentracion de $\\text{OH}^-$ ya obtenida, y el resultado es $5{,}28$. A $25\\ \\text{°C}$ $\\text{pH} + \\text{pOH} = 14$, por eso el $\\text{pH}$ se obtiene restando el $\\text{pOH}$ de $14{,}00$: $14{,}00 - 5{,}28 = 8{,}72$. Ese $\\text{pH}$ basico es el esperado en la equivalencia de un acido debil con una base fuerte." }
        ],
        resultado: "$V(\\text{NaOH}) = 25{,}0\\ \\text{mL}$; $\\text{pH}$ de equivalencia = $8{,}72$"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "El $\\text{pH}$ de equivalencia ($8{,}72$) cae dentro de la zona de vire de la fenolftaleina ($8{,}2$ a $10{,}0$) y fuera de la del anaranjado de metilo ($3{,}1$ a $4{,}4$).", porque: "Un indicador debe cambiar de color cerca del $\\text{pH}$ de equivalencia, para que el punto final coincida con el volumen esperado. Como $8{,}72$ queda dentro del rango $8{,}2$ a $10{,}0$ de la fenolftaleina, ese indicador es el adecuado. El anaranjado de metilo vira entre $3{,}1$ y $4{,}4$, lejos de $8{,}72$, por eso no sirve en este caso." }
        ],
        resultado: "Fenolftaleina"
      }
    ],
    errores_tipicos: [
      { error: "Suponer pH = 7,00 en el punto de equivalencia, como en un acido fuerte con base fuerte.", como_evitar: "Si el acido titulado es debil, el punto de equivalencia es basico por la hidrolisis de su base conjugada." },
      { error: "Calcular la hidrolisis del acetato con Ka en lugar de Kb.", como_evitar: "El acetato es una base: use Kb = Kw / Ka." },
      { error: "En b) elegir anaranjado de metilo porque 'es un indicador acido', sin comparar con el pH de equivalencia.", como_evitar: "Compare la zona de vire con el pH del punto de equivalencia, no solo el caracter del indicador." }
    ]
  },
  {
    num: 14,
    nivel: "Avanzado",
    temas: ["acidobase"],
    enunciado: "Se prepara una solucion que contiene HCl 1,0 x 10^-3 M y acido acetico 0,10 M (Ka = 1,8 x 10^-5) a 25 C. a) Calcule el pH de la mezcla. b) Compare el grado de ionizacion del acido acetico en la mezcla con el del acido acetico 0,10 M puro.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Hay dos fuentes de $\\text{H}^+$: el $\\text{HCl}$ (fuerte, se ioniza por completo) y el acido acetico (debil). Sea $y$ la $[\\text{H}^+]$ que aporta el acido acetico: $$[\\text{H}^+] = 1{,}0 \\times 10^{-3} + y$$", porque: "Hay dos fuentes de $\\text{H}^+$: el $\\text{HCl}$, que se ioniza por completo, y el acido acetico, que se ioniza solo en parte. Definimos $y$ como la $[\\text{H}^+]$ que aporta el acido acetico, y el total es la suma de ambos, $1{,}0 \\times 10^{-3} + y$. Sumar todas las fuentes de $\\text{H}^+$ es el punto central de este tipo de mezcla." },
          { paso: "$$K_a = \\frac{(1{,}0 \\times 10^{-3} + y)\\,y}{0{,}10 - y} = 1{,}8 \\times 10^{-5}$$ Como $y$ no es despreciable frente a $1{,}0 \\times 10^{-3}$, se resuelve la cuadratica $y^2 + 1{,}02 \\times 10^{-3}\\,y - 1{,}8 \\times 10^{-6} = 0$, de donde $y = 9{,}3 \\times 10^{-4}\\ \\text{M}$.", porque: "Escribimos $K_a$ con el $\\text{H}^+$ total en el numerador, que incluye el aporte del $\\text{HCl}$, y el acetato $y$. En el denominador va lo que queda sin disociar, $0{,}10 - y$. Como $y$ es del mismo orden que $1{,}0 \\times 10^{-3}$, no puede despreciarse, y por eso reordenamos la ecuacion como cuadratica y obtenemos $y = 9{,}3 \\times 10^{-4}\\ \\text{M}$." },
          { paso: "$$[\\text{H}^+] = 1{,}0 \\times 10^{-3} + 9{,}3 \\times 10^{-4} = 1{,}9 \\times 10^{-3}\\ \\text{M}$$ $\\text{pH} = -\\log(1{,}9 \\times 10^{-3}) = 2{,}72$", porque: "La concentracion total de $\\text{H}^+$ es la suma del aporte del $\\text{HCl}$ y del aporte del acido acetico, y es la que define el $\\text{pH}$. Sumamos $1{,}0 \\times 10^{-3} + 9{,}3 \\times 10^{-4} = 1{,}9 \\times 10^{-3}\\ \\text{M}$, y con $-\\log$ de ese valor obtenemos $2{,}72$. Verificamos que este $\\text{pH}$ sea menor que el de cada acido por separado, porque las dos fuentes suman $\\text{H}^+$." }
        ],
        resultado: "$\\text{pH} = 2{,}72$"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "En la mezcla: $$\\alpha = \\frac{y}{0{,}10} = 9{,}3 \\times 10^{-3}\\ (0{,}93\\%)$$", porque: "$\\alpha$ es la fraccion del acido acetico que se ionizo. En la mezcla usamos $y$, que es lo ionizado del acetico, dividido por su concentracion inicial $0{,}10\\ \\text{M}$, con lo que $\\alpha = 9{,}3 \\times 10^{-3}$, es decir $0{,}93\\%$. No usamos la $[\\text{H}^+]$ total, porque incluye el $\\text{H}^+$ que aporta el $\\text{HCl}$." },
          { paso: "Puro: $$\\alpha = \\sqrt{\\frac{K_a}{C}} = \\sqrt{\\frac{1{,}8 \\times 10^{-5}}{0{,}10}} = 1{,}3 \\times 10^{-2}\\ (1{,}34\\%)$$ Verificacion: $1{,}34\\% < 5\\%$.", porque: "En la solucion pura el acetico es el unico acido, y usamos $\\alpha = \\sqrt{\\frac{K_a}{C}}$ con $K_a = 1{,}8 \\times 10^{-5}$ y $C = 0{,}10\\ \\text{M}$. Obtenemos $\\sqrt{\\frac{1{,}8 \\times 10^{-5}}{0{,}10}} = 1{,}3 \\times 10^{-2}$, es decir $1{,}34\\%$. Verificamos que el resultado sea menor que $5\\%$, condicion para que esa aproximacion sea valida." },
          { paso: "En la mezcla el acido acetico se ioniza menos: el $\\text{H}^+$ del $\\text{HCl}$ desplaza el equilibrio hacia la forma sin disociar.", porque: "Es un efecto de ion comun: el $\\text{H}^+$ del $\\text{HCl}$ aumenta la concentracion de $\\text{H}_3\\text{O}^+$ y, segun Le Chatelier, el equilibrio $\\text{CH}_3\\text{COOH} \\rightleftharpoons \\text{CH}_3\\text{COO}^- + \\text{H}^+$ se desplaza hacia la izquierda. Por eso el acetico se ioniza menos en la mezcla que solo. Entonces la comparacion de las dos alphas calculadas responde la parte b)." }
        ],
        resultado: "$\\alpha$ en la mezcla = $0{,}93\\%$ < $\\alpha$ puro = $1{,}34\\%$"
      }
    ],
    errores_tipicos: [
      { error: "En a) calcular el pH solo con el HCl (pH = 3,00), ignorando el acido acetico.", como_evitar: "Sume todas las fuentes de H^+ antes de calcular el pH." },
      { error: "En a) calcular el pH solo con el acido acetico (pH = 2,87), ignorando el HCl.", como_evitar: "El HCl aporta H^+ en su totalidad y no puede ignorarse." },
      { error: "Aplicar la aproximacion simple con y pequeno sin verificar, cuando y es del mismo orden que 1,0 x 10^-3.", como_evitar: "Compare y con la concentracion de H^+ de la otra fuente antes de simplificar." }
    ]
  },
  {
    num: 15,
    nivel: "Avanzado",
    temas: ["acidobase"],
    enunciado: "Una solucion de NH3 0,10 M tiene Kb = 1,8 x 10^-5 a 25 C. a) Calcule el pH de la solucion. b) A 1,00 L de esa solucion se agregan 5,35 g de NH4Cl (M = 53,5 g/mol), sin cambio de volumen. Calcule el nuevo pH. c) Justifique si el pH de la solucion del punto b) cambia al diluirla 10 veces con agua.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "$$[\\text{OH}^-] = \\sqrt{K_b \\times C} = \\sqrt{1{,}8 \\times 10^{-5} \\times 0{,}10} = 1{,}34 \\times 10^{-3}\\ \\text{M}$$ Verificacion: $1{,}3\\% < 5\\%$.", porque: "$\\text{NH}_3$ es una base debil, asi que usamos la aproximacion $[\\text{OH}^-] = \\sqrt{K_b \\times C}$, que sale de despreciar $x$ frente a $C$. Con $K_b = 1{,}8 \\times 10^{-5}$ y $C = 0{,}10\\ \\text{M}$, obtenemos $\\sqrt{1{,}8 \\times 10^{-5} \\times 0{,}10} = 1{,}34 \\times 10^{-3}\\ \\text{M}$. La verificacion da $1{,}3\\%$, menor que $5\\%$, y confirma que la aproximacion es valida." },
          { paso: "$$\\text{pOH} = 2{,}87;\\quad \\text{pH} = 14{,}00 - 2{,}87 = 11{,}13$$", porque: "Calculamos $\\text{pOH} = -\\log[\\text{OH}^-]$ a partir de la concentracion de $\\text{OH}^-$ obtenida, y el resultado es $2{,}87$. Como a $25\\ \\text{°C}$ $\\text{pH} + \\text{pOH} = 14$, restamos ese $\\text{pOH}$ de $14{,}00$ para obtener el $\\text{pH}$: $14{,}00 - 2{,}87 = 11{,}13$. Un $\\text{pH}$ mayor que $7$ es basico, como corresponde a una solucion de una base." }
        ],
        resultado: "$\\text{pH} = 11{,}13$"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "$$n(\\text{NH}_4\\text{Cl}) = \\frac{5{,}35\\ \\text{g}}{53{,}5\\ \\text{g/mol}} = 0{,}100\\ \\text{mol};\\quad [\\text{NH}_4^+] = \\frac{0{,}100\\ \\text{mol}}{1{,}00\\ \\text{L}} = 0{,}10\\ \\text{M}$$", porque: "Calculamos los moles de sal con $n = \\frac{m}{M}$: $5{,}35\\ \\text{g}$ divididos por $53{,}5\\ \\text{g/mol}$ dan $0{,}100\\ \\text{mol}$. Como el volumen es $1{,}00\\ \\text{L}$ y no cambia al agregar la sal, la concentracion de $\\text{NH}_4^+$ es $\\frac{0{,}100\\ \\text{mol}}{1{,}00\\ \\text{L}} = 0{,}10\\ \\text{M}$. Esta cantidad es la que aporta el acido conjugado a la solucion." },
          { paso: "Solucion reguladora de base debil: $$\\text{pOH} = \\text{pK}_b + \\log\\frac{[\\text{NH}_4^+]}{[\\text{NH}_3]} = 4{,}74 + \\log\\frac{0{,}10}{0{,}10} = 4{,}74$$ $\\text{pH} = 14{,}00 - 4{,}74 = 9{,}26$.", porque: "Como hay una base debil y su sal, que aporta el acido conjugado, la solucion es reguladora. Usamos Henderson-Hasselbalch para bases, $\\text{pOH} = \\text{pK}_b + \\log\\frac{[\\text{NH}_4^+]}{[\\text{NH}_3]}$, con $[\\text{NH}_4^+] = 0{,}10\\ \\text{M}$ y $[\\text{NH}_3] = 0{,}10\\ \\text{M}$. Como el cociente es $1$, el logaritmo vale $0$ y $\\text{pOH} = \\text{pK}_b = 4{,}74$. Restando ese $\\text{pOH}$ de $14{,}00$ obtenemos $\\text{pH} = 9{,}26$." }
        ],
        resultado: "$\\text{pH} = 9{,}26$"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "Al diluir 10 veces, $[\\text{NH}_3]$ y $[\\text{NH}_4^+]$ bajan 10 veces cada una, pero su cociente no cambia. El $\\text{pH}$ casi no varia.", porque: "En Henderson-Hasselbalch aparece el cociente entre sal y base, y no sus valores absolutos. Al diluir 10 veces, $[\\text{NH}_4^+]$ y $[\\text{NH}_3]$ bajan en el mismo factor, por lo que su cociente sigue igual. Entonces el $\\text{pH}$ de la solucion reguladora casi no cambia al diluir, aunque la concentracion total si baje." }
        ],
        resultado: "El $\\text{pH}$ no cambia de forma apreciable (el cociente se mantiene)"
      }
    ],
    errores_tipicos: [
      { error: "En b) tomar el pH de la base sola (11,13), olvidando que la sal aporta NH4^+.", como_evitar: "Al agregar una sal que contiene el acido conjugado, el sistema pasa a ser una solucion reguladora." },
      { error: "En b) confundir pKb con pKa y restar mal al pasar a pH (pH = pKb directo).", como_evitar: "Para una base, pOH = pKb + log(...). El pH es 14 - pOH." },
      { error: "En c) decir que el pH baja al diluir porque 'hay menos concentracion'.", como_evitar: "En una solucion reguladora el pH depende del cociente, y no de la concentracion absoluta." }
    ]
  },
  {
    num: 16,
    nivel: "Tipo parcial",
    temas: ["acidobase", "soluciones"],
    enunciado: "En un control de calidad de un yogur se analiza el acido lactico (CH3CH(OH)COOH, Ka = 1,38 x 10^-4 a 25 C). Se prepara una solucion 0,100 M. Calcule: a) el pH de esa solucion. b) Se titulan 25,0 mL de la solucion 0,100 M con NaOH 0,100 M. Calcule el volumen de NaOH necesario para llegar a la mitad de la neutralizacion y el pH en ese punto. c) Calcule el pH en el punto de equivalencia. d) Justifique que indicador conviene usar, entre fenolftaleina (vire entre pH 8,2 y 10,0) y anaranjado de metilo (vire entre pH 3,1 y 4,4).",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Tabla: $$[\\text{H}_3\\text{O}^+] = [\\text{lactato}^-] = x;\\quad [\\text{acido lactico}] = 0{,}100 - x$$", porque: "Como el acido lactico es debil, planteamos la tabla de equilibrio: $x$ de $\\text{H}_3\\text{O}^+$ y de lactato, y $0{,}100 - x$ de acido sin disociar, a partir de la concentracion inicial de $0{,}100\\ \\text{M}$. La estequiometria $1:1$ hace que los dos productos tengan la misma concentracion. Por eso $K_a$ queda expresada con una sola incognita." },
          { paso: "Aproximacion simple: $$x = \\sqrt{1{,}38 \\times 10^{-4} \\times 0{,}100} = 3{,}7 \\times 10^{-3}\\ \\text{M}$$ $\\frac{x}{C} = 3{,}7\\% < 5\\%$, por lo que seria valida.", porque: "Usamos la aproximacion simple como primera estimacion, despreciando $x$ frente a $C = 0{,}100\\ \\text{M}$ en el denominador. Con $K_a = 1{,}38 \\times 10^{-4}$ obtenemos $x = \\sqrt{1{,}38 \\times 10^{-4} \\times 0{,}100} = 3{,}7 \\times 10^{-3}\\ \\text{M}$. El cociente $\\frac{x}{C} = 3{,}7\\%$ queda por debajo del $5\\%$, por eso la aproximacion parece valida. Para el $\\text{pH}$ final conviene el calculo exacto." },
          { paso: "Como el resultado final debe ser exacto, se resuelve la cuadratica $$x^2 + 1{,}38 \\times 10^{-4}\\,x - 1{,}38 \\times 10^{-5} = 0$$ de donde $x = 3{,}65 \\times 10^{-3}\\ \\text{M}$.", porque: "Como el resultado final debe ser exacto, reordenamos $K_a = \\frac{x^2}{0{,}100 - x}$ como $x^2 + K_a\\,x - K_a\\,C = 0$. Reemplazamos $K_a = 1{,}38 \\times 10^{-4}$, y queda $x^2 + 1{,}38 \\times 10^{-4}\\,x - 1{,}38 \\times 10^{-5} = 0$. Con la formula resolvente tomamos la raiz positiva y obtenemos $x = 3{,}65 \\times 10^{-3}\\ \\text{M}$. La diferencia con la aproximacion cambia el $\\text{pH}$ en la segunda cifra decimal, por eso importa." },
          { paso: "$$\\text{pH} = -\\log(3{,}65 \\times 10^{-3}) = 2{,}44$$", porque: "El $\\text{pH}$ se calcula con $-\\log$ del valor exacto de $[\\text{H}_3\\text{O}^+]$, que es $3{,}65 \\times 10^{-3}\\ \\text{M}$. Calculamos $-\\log(3{,}65 \\times 10^{-3}) = 2{,}44$, redondeado a 2 decimales. Conviene verificar el redondeo con la calculadora antes de informarlo." }
        ],
        resultado: "$\\text{pH} = 2{,}44$ ($[\\text{H}_3\\text{O}^+] = 3{,}65 \\times 10^{-3}\\ \\text{M}$)"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "$$n(\\text{acido}) = 0{,}100\\ \\text{M} \\times 25{,}0\\ \\text{mL} = 2{,}50\\ \\text{mmol}$$ En la mitad de la neutralizacion se agregan $1{,}25\\ \\text{mmol}$ de $\\text{NaOH}$, es decir $V = \\frac{1{,}25\\ \\text{mmol}}{0{,}100\\ \\text{M}} = 12{,}5\\ \\text{mL}$.", porque: "La mitad de la neutralizacion es el punto en el que se agrego la mitad de los moles necesarios para llegar a la equivalencia. Como $n(\\text{acido}) = 0{,}100\\ \\text{M} \\times 25{,}0\\ \\text{mL} = 2{,}50\\ \\text{mmol}$, la mitad son $1{,}25\\ \\text{mmol}$ de $\\text{NaOH}$. Con $V = \\frac{n}{M}$ obtenemos $\\frac{1{,}25\\ \\text{mmol}}{0{,}100\\ \\text{M}} = 12{,}5\\ \\text{mL}$, y en ese punto la mitad del acido ya se convirtio en lactato." },
          { paso: "En ese punto $[\\text{acido}] = [\\text{lactato}^-]$, asi que $$\\text{pH} = \\text{pK}_a = -\\log(1{,}38 \\times 10^{-4}) = 3{,}86$$", porque: "En la mitad de la neutralizacion las concentraciones de acido y de su base conjugada son iguales. Como el cociente vale $1$, el logaritmo de Henderson-Hasselbalch es $0$ y el $\\text{pH}$ queda igual al $\\text{pK}_a$. Con $K_a = 1{,}38 \\times 10^{-4}$ calculamos $\\text{pK}_a = -\\log(1{,}38 \\times 10^{-4}) = 3{,}86$, que es el $\\text{pH}$ en ese punto." }
        ],
        resultado: "$V(\\text{NaOH}) = 12{,}5\\ \\text{mL}$; $\\text{pH} = 3{,}86$"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "Equivalencia: $$n(\\text{NaOH}) = 2{,}50\\ \\text{mmol};\\quad V = \\frac{2{,}50\\ \\text{mmol}}{0{,}100\\ \\text{M}} = 25{,}0\\ \\text{mL}$$ Volumen total $= 50{,}0\\ \\text{mL}$, $[\\text{lactato}^-] = \\frac{2{,}50\\ \\text{mmol}}{50{,}0\\ \\text{mL}} = 0{,}0500\\ \\text{M}$.", porque: "En equivalencia todo el acido se convirtio en lactato, y el volumen de $\\text{NaOH}$ necesario es $25{,}0\\ \\text{mL}$. Su concentracion se calcula dividiendo los $2{,}50\\ \\text{mmol}$ por el volumen total de $50{,}0\\ \\text{mL}$, que incluye los $25{,}0\\ \\text{mL}$ de $\\text{NaOH}$, y da $0{,}0500\\ \\text{M}$. Usar solo los $25{,}0\\ \\text{mL}$ de la muestra daria una concentracion doble y un $\\text{pH}$ incorrecto." },
          { paso: "$$K_b = \\frac{K_w}{K_a} = \\frac{1{,}0 \\times 10^{-14}}{1{,}38 \\times 10^{-4}} = 7{,}2 \\times 10^{-11}$$ $[\\text{OH}^-] = \\sqrt{7{,}2 \\times 10^{-11} \\times 0{,}0500} = 1{,}9 \\times 10^{-6}\\ \\text{M}$; $\\text{pOH} = 5{,}72$; $\\text{pH} = 8{,}28$.", porque: "El lactato es una base debil, y su $K_b$ se obtiene de $K_b = \\frac{K_w}{K_a}$, con $K_a = 1{,}38 \\times 10^{-4}$. Usando $C = 0{,}0500\\ \\text{M}$ y $K_b = 7{,}2 \\times 10^{-11}$ calculamos $[\\text{OH}^-] = \\sqrt{7{,}2 \\times 10^{-11} \\times 0{,}0500} = 1{,}9 \\times 10^{-6}\\ \\text{M}$. Luego $\\text{pOH} = 5{,}72$, y a partir de ese valor se obtiene el $\\text{pH} = 8{,}28$. Verificamos que ese $\\text{pH}$ sea basico, de acuerdo con la hidrolisis del lactato." }
        ],
        resultado: "$V(\\text{NaOH}) = 25{,}0\\ \\text{mL}$; $\\text{pH}$ de equivalencia = $8{,}28$"
      },
      {
        parte: "d)",
        pasos: [
          { paso: "El $\\text{pH}$ de equivalencia ($8{,}28$) cae dentro de la zona de vire de la fenolftaleina ($8{,}2$ a $10{,}0$) y no dentro de la del anaranjado de metilo ($3{,}1$ a $4{,}4$).", porque: "El indicador debe cambiar de color cerca del $\\text{pH}$ de equivalencia, para que el punto final observado coincida con el volumen esperado. Como $8{,}28$ esta dentro del rango $8{,}2$ a $10{,}0$ de la fenolftaleina, ese indicador es el adecuado. El anaranjado de metilo vira entre $3{,}1$ y $4{,}4$, lejos de ese $\\text{pH}$, por lo que no sirve." }
        ],
        resultado: "Fenolftaleina"
      }
    ],
    errores_tipicos: [
      { error: "En a) tratar el acido lactico como fuerte y dar pH = -log(0,100) = 1,00.", como_evitar: "Si el acido tiene Ka, se ioniza solo parcialmente: use el equilibrio." },
      { error: "En b) dar 1,25 mL en vez de 12,5 mL, olvidando dividir los mmol por la concentracion de NaOH (0,100 M).", como_evitar: "V = n / M. Con M = 0,100 mol/L, 1,25 mmol corresponden a 12,5 mL." },
      { error: "En c) suponer pH = 7,00 porque hay una sal en el punto de equivalencia.", como_evitar: "Solo una sal de acido fuerte con base fuerte da pH 7. Aqui el lactato hidroliza y el pH es basico." }
    ]
  }
];
