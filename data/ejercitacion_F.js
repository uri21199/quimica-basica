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
          { paso: "Expresion de Kc: Kc = [CO]^2 / [CO2]. El C(s) no aparece en la expresion.", porque: "Usamos la ecuacion balanceada para escribir Kc: los productos van en el numerador y los reactivos en el denominador, cada uno elevado a su coeficiente. Como el CO tiene coeficiente 2, aparece al cuadrado en el numerador, mientras que el CO2 va en el denominador sin exponente. El C(s) no entra porque es un solido puro y su concentracion no cambia durante la reaccion." },
          { paso: "[CO2] = 0,100 mol / 2,00 L = 0,0500 M; [CO] = 0,400 mol / 2,00 L = 0,200 M.", porque: "Dado que Kc se define con concentraciones molares, pasamos los moles de equilibrio a mol/L dividiendo por el volumen del recipiente. Calculamos 0,100 mol / 2,00 L = 0,0500 M para el CO2 y 0,400 mol / 2,00 L = 0,200 M para el CO. Como el volumen es el mismo para todos los gases, esta division sirve para las dos especies, y reemplazar los moles directamente en Kc daria un resultado incorrecto." },
          { paso: "Kc = (0,200)^2 / 0,0500 = 0,0400 / 0,0500 = 0,800.", porque: "Reemplazamos en la expresion de Kc las concentraciones de equilibrio que acabamos de calcular. El CO queda elevado al cuadrado, y lo dividimos por la concentracion de CO2, con lo que obtenemos 0,0400 / 0,0500 = 0,800. Entonces el valor de Kc a 1000 K es 0,80 mol/L, y sus unidades salen de la expresion misma." }
        ],
        resultado: "Kc = 0,80 mol/L a 1000 K"
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
          { paso: "[N2] = 0,200 / 5,00 = 0,0400 M; [H2] = 0,300 / 5,00 = 0,0600 M; [NH3] = 0,400 / 5,00 = 0,0800 M.", porque: "Los moles de equilibrio se pasan a concentracion dividiendo cada uno por el volumen de 5,00 L, porque Kc se expresa en concentraciones y no en moles. Calculamos 0,200 / 5,00 = 0,0400 M para el N2, 0,300 / 5,00 = 0,0600 M para el H2 y 0,400 / 5,00 = 0,0800 M para el NH3. Como el volumen es comun a las tres especies, la misma division se aplica a todas, y conviene verificar que queden en M antes de reemplazar." },
          { paso: "Kc = [NH3]^2 / ([N2] x [H2]^3) = (0,0800)^2 / (0,0400 x (0,0600)^3).", porque: "Usamos la ecuacion N2 + 3 H2 <=> 2 NH3 para armar la expresion de Kc: el NH3 va arriba con su coeficiente 2 como exponente, y el N2 y el H2 van abajo. Como el H2 tiene coeficiente 3, su concentracion se eleva al cubo, mientras que el N2 no lleva exponente extra. Reemplazamos con 0,0800 M de NH3, 0,0400 M de N2 y 0,0600 M de H2, y obtenemos (0,0800)^2 / (0,0400 x (0,0600)^3)." },
          { paso: "Kc = 0,00640 / (0,0400 x 2,16 x 10^-4) = 0,00640 / 8,64 x 10^-6 = 7,41 x 10^2.", porque: "Primero resolvemos las potencias y el producto del denominador, y despues hacemos la division, porque el orden de operaciones lo exige. Con notacion cientifica conviene multiplicar las mantisas y sumar los exponentes, lo que da 8,64 x 10^-6 en el denominador. Entonces 0,00640 / 8,64 x 10^-6 = 7,41 x 10^2, valor que se informa con tres cifras significativas como los datos del enunciado, en unidades de M^-2." }
        ],
        resultado: "Kc = 7,41 x 10^2 M^-2"
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
          { paso: "Concentraciones iniciales: [H2] = [CO2] = [CO] = 0,20 M; [H2O] = 0,050 M.", porque: "Q se calcula con concentraciones molares, asi que cada cantidad inicial se divide por el volumen de 2,00 L. Calculamos 0,40 mol / 2,00 L = 0,20 M para H2, CO2 y CO, y 0,10 mol / 2,00 L = 0,050 M para el H2O. Como todavia no hubo reaccion, estas son las concentraciones del momento de la mezcla, y son las que se usan para armar Q." },
          { paso: "Q = [H2O][CO] / ([H2][CO2]) = (0,050 x 0,20) / (0,20 x 0,20) = 0,25.", porque: "Usamos la misma forma que Kc: los productos (H2O y CO) van en el numerador y los reactivos (H2 y CO2) en el denominador. La diferencia es que Q usa concentraciones actuales y no las de equilibrio. Reemplazamos (0,050 x 0,20) / (0,20 x 0,20) y obtenemos 0,25. Como todos los coeficientes son unitarios, no aparecen exponentes en la expresion." },
          { paso: "Q = 0,25 < Kc = 1,6.", porque: "Comparamos Q con Kc porque esa comparacion indica en que sentido avanza la reaccion. Dado que 0,25 es menor que 1,6, el sistema tiene menos producto del que tendria en equilibrio. Por eso la reaccion neta forma productos hasta que Q iguala a Kc. Esta comparacion predice el sentido, pero no da las cantidades finales." },
          { paso: "El sistema evoluciona hacia la derecha (se forman H2O y CO).", porque: "Para confirmar el sentido observamos como cambia Q al avanzar la reaccion: al formarse productos suben [H2O] y [CO] en el numerador, y bajan [H2] y [CO2] en el denominador. Entonces Q aumenta desde 0,25 hacia el valor de Kc. Cuando Q iguale a Kc se alcanza el equilibrio, asi que la evolucion hacia la derecha es una conclusion cualitativa basada en esa comparacion." }
        ],
        resultado: "Q = 0,25; como Q < Kc, evoluciona hacia los productos"
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
          { paso: "Solo el CO2 es gas: Delta n = 1 - 0 = 1.", porque: "Calculamos Delta n como la suma de los coeficientes gaseosos de los productos menos la de los reactivos. En CaCO3(s) <=> CaO(s) + CO2(g) solo el CO2 es gas, asi que en productos hay un gas y en reactivos ninguno, y Delta n = 1 - 0 = 1. Los solidos no entran en Delta n porque su concentracion es constante y no aparecen en Kp ni en Kc." },
          { paso: "Kp = Kc (RT)^Delta n, con Delta n = 1, entonces Kc = Kp / (RT).", porque: "Usamos la relacion entre Kp y Kc para gases ideales, porque Kp trabaja con presiones y Kc con concentraciones. Como P = nRT/V equivale a (n/V) x RT, cada presion parcial es una concentracion multiplicada por RT, y eso hace aparecer (RT) elevado a Delta n. Con Delta n = 1 el factor aparece una sola vez, por eso al despejar queda Kc = Kp / (RT)." },
          { paso: "RT = 0,0821 L atm/(mol K) x 800 K = 65,7 L atm/mol.", porque: "Calculamos el producto RT porque lo necesitamos para despejar Kc en el paso siguiente. Usamos R = 0,0821 L atm/(mol K), que corresponde a presiones en atm y volumen en litros, y T = 800 K. Entonces 0,0821 x 800 = 65,7, y el resultado queda en L atm/mol, que son las unidades de RT." },
          { paso: "Kc = 0,236 atm / 65,7 L atm/mol = 3,59 x 10^-3 mol/L.", porque: "Dividimos Kp por RT, porque con Delta n = 1 vale Kc = Kp / (RT). Reemplazamos 0,236 atm / 65,7 L atm/mol, y el atm del numerador se cancela con el del denominador. Asi obtenemos 3,59 x 10^-3 mol/L, que son las unidades de Kc cuando Delta n = 1. Conviene comprobar que la unidad final coincida con ese valor de Delta n." }
        ],
        resultado: "Kc = 3,59 x 10^-3 mol/L a 800 K"
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
          { paso: "a) Al agregar H2 aumenta [H2]. El sistema consume H2 y forma NH3: se desplaza hacia la derecha. Kc no cambia.", porque: "Usamos el principio de Le Chatelier: ante un agregado, el sistema consume parte de la sustancia agregada para contrarrestar el cambio. Como el H2 aumenta, el sistema lo consume y forma NH3, por lo que el equilibrio se desplaza hacia la derecha. Kc no cambia porque la temperatura se mantiene constante y Kc depende solo de T. Entonces la composicion cambia, pero el valor de Kc queda igual." },
          { paso: "b) Al reducir el volumen sube la presion: el sistema avanza hacia el lado con menos moles de gas (4 mol de reactivos contra 2 mol de NH3), es decir hacia la derecha. Kc no cambia.", porque: "Reducir el volumen sube la presion total, y el sistema responde avanzando hacia el lado con menos moles de gas. Comparamos los 4 mol de gases en reactivos (1 + 3) con los 2 mol de NH3 en productos, asi que el lado del NH3 es el que tiene menos moles. Por eso el equilibrio se desplaza hacia la derecha. Kc no cambia porque la temperatura no varia, y la presion solo modifica la composicion." },
          { paso: "c) Como la reaccion directa es exotermica (Delta H < 0), el calor es un producto. Al subir T el sistema consume ese calor: se desplaza hacia la izquierda y Kc disminuye.", porque: "Primero identificamos el signo de Delta H: como Delta H < 0, la reaccion directa es exotermica y el calor aparece como producto. Al subir T se agrega calor, y el sistema lo consume desplazandose hacia los reactivos, es decir hacia la izquierda. Por eso Kc disminuye, porque la constante depende de la temperatura. Este razonamiento sirve para cualquier reaccion exotermica sometida a un aumento de temperatura." },
          { paso: "d) El catalizador acelera por igual la reaccion directa y la inversa. No desplaza el equilibrio y Kc no cambia.", porque: "El catalizador baja la energia de activacion, y lo hace igual para la reaccion directa y la inversa. Por eso acelera ambos sentidos en la misma proporcion y no altera la composicion de equilibrio. Entonces no se desplaza el equilibrio, y Kc no cambia porque depende solo de la temperatura, que el catalizador no modifica." }
        ],
        resultado: "a) derecha, Kc igual; b) derecha (hacia NH3), Kc igual; c) izquierda, Kc disminuye; d) no se desplaza, Kc igual"
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
          { paso: "[NOCl]0 = 0,600 mol / 2,00 L = 0,300 M. Se consume el 25,0 %: 0,25 x 0,300 = 0,0750 M.", porque: "Primero pasamos la cantidad inicial a concentracion dividiendo 0,600 mol por el volumen de 2,00 L, lo que da 0,300 M. Luego aplicamos el 25,0 % de disociacion sobre esa concentracion inicial: 0,25 x 0,300 = 0,0750 M. Como el porcentaje se refiere al NOCl original, este valor es la cantidad que reacciona. Conviene verificar que el porcentaje se tome sobre la inicial y no sobre la de equilibrio." },
          { paso: "Por la estequiometria 2:2:1, [NO] = 0,0750 M y [Cl2] = 0,0750 / 2 = 0,0375 M. [NOCl] en equilibrio = 0,300 - 0,0750 = 0,225 M.", porque: "Usamos los coeficientes para relacionar lo que reacciona con lo que se forma: 2 mol de NOCl consumidos producen 2 mol de NO y 1 mol de Cl2. Como el NO tiene el mismo coeficiente que el NOCl, [NO] = 0,0750 M, y el Cl2 es la mitad: 0,0750 / 2 = 0,0375 M. Por eso el NOCl que queda es la inicial menos lo consumido: 0,300 - 0,0750 = 0,225 M." },
          { paso: "Kc = [NO]^2 [Cl2] / [NOCl]^2 = (0,0750)^2 (0,0375) / (0,225)^2 = 4,17 x 10^-3 mol/L.", porque: "Aplicamos la expresion de Kc de la ecuacion balanceada: el NO va al cuadrado y el Cl2 en el numerador, y el NOCl al cuadrado en el denominador. Reemplazamos (0,0750)^2 x 0,0375 arriba y (0,225)^2 abajo, y el cociente da 4,17 x 10^-3. Las unidades salen en mol/L, que es lo que corresponde a este cociente." }
        ],
        resultado: "Kc = 4,17 x 10^-3 mol/L"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Delta n = (2 + 1) - 2 = 1.", porque: "Calculamos Delta n con los moles gaseosos: los productos suman 2 + 1 = 3 mol y los reactivos 2 mol, entonces Delta n = (2 + 1) - 2 = 1. Este valor fija el exponente de RT al pasar de Kc a Kp. Conviene tomar los coeficientes de la ecuacion balanceada y no los del enunciado." },
          { paso: "Kp = Kc (RT)^Delta n = 4,17 x 10^-3 x (0,0821 x 400) = 4,17 x 10^-3 x 32,8 = 0,137 atm.", porque: "Aplicamos Kp = Kc (RT)^Delta n, valida para gases ideales, y con Delta n = 1 el factor RT aparece una sola vez. Reemplazamos R = 0,0821 y T = 400 K, lo que da RT = 32,8, y multiplicamos 4,17 x 10^-3 por ese valor. El resultado es Kp = 0,137 atm a 400 K, con R en L atm/(mol K) porque Kp trabaja con presiones en atm." }
        ],
        resultado: "Kp = 0,137 atm a 400 K"
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
          { paso: "Tabla de presiones: P(HI) = 1,00 - 2x; P(H2) = P(I2) = x.", porque: "Armamos la tabla de presiones con los coeficientes de la ecuacion 2 HI <=> H2 + I2, porque el HI se consume de a 2 por cada producto formado. Si se forman x atm de H2, tambien se forman x atm de I2 y se consumen 2x atm de HI. Por eso P(HI) = 1,00 - 2x, partiendo de 1,00 atm. Plantear la tabla con los coeficientes evita errores en el resto del problema." },
          { paso: "Kp = P(H2) P(I2) / P(HI)^2 = x^2 / (1,00 - 2x)^2 = 0,0156.", porque: "Escribimos Kp con presiones parciales en atm: los productos van arriba y el HI elevado a su coeficiente 2 va abajo. Reemplazamos P(H2) = P(I2) = x y P(HI) = 1,00 - 2x de la tabla, lo que da x^2 / (1,00 - 2x)^2. Igualando a Kp = 0,0156 queda la ecuacion que hay que resolver para x." },
          { paso: "Como ambos miembros son cuadrados: x / (1,00 - 2x) = raiz(0,0156) = 0,1249.", porque: "Dado que el numerador y el denominador son cuadrados, sacamos raiz cuadrada de ambos lados y tomamos solo la positiva. Calculamos raiz(0,0156) = 0,1249, con lo que la ecuacion se vuelve lineal y se evita resolver una cuadratica completa. Conviene mantener 0,1249 sin redondear antes de seguir, para no perder precision." },
          { paso: "x = 0,1249 (1,00 - 2x) -> x = 0,1249 / 1,2498 = 0,09994 atm. Entonces P(H2) = P(I2) = 0,0999 atm y P(HI) = 1,00 - 0,1999 = 0,800 atm.", porque: "Despejamos x multiplicando en cruz: x = 0,1249 (1,00 - 2x), de donde x = 0,1249 / 1,2498 = 0,0999 atm. Reemplazamos ese x en la tabla y obtenemos P(HI) = 1,00 - 0,1999 = 0,800 atm. Verificamos con Kp: (0,0999)^2 / (0,800)^2 = 0,0156, y el resultado coincide con el dato del enunciado." }
        ],
        resultado: "P(H2) = P(I2) = 0,0999 atm; P(HI) = 0,800 atm"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Delta n = 2 - 2 = 0, asi que el numero total de moles no cambia y la presion total queda en 1,00 atm (0,800 + 0,0999 + 0,0999 = 1,00).", porque: "Calculamos Delta n con los coeficientes gaseosos: hay 2 mol de HI en reactivos y 1 + 1 = 2 mol de productos, entonces Delta n = 0. Por eso el numero total de moles no cambia durante la reaccion. Como volumen y temperatura son constantes, la presion total depende solo de los moles y sigue en 1,00 atm. Sumando 0,800 + 0,0999 + 0,0999 se confirma ese valor." },
          { paso: "x(H2) = P(H2) / P_total = 0,0999 / 1,00 = 0,0999.", porque: "La fraccion molar de un gas es el cociente entre su presion parcial y la presion total de la mezcla, segun la ley de Dalton. Usamos la presion total de equilibrio, 1,00 atm, que es la suma de las tres presiones parciales. Entonces x(H2) = 0,0999 / 1,00 = 0,0999. No se divide por la presion inicial de HI, porque la mezcla en equilibrio es la que define el total." }
        ],
        resultado: "x(H2) = 0,0999"
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
          { paso: "Tabla (mol/L, con V = 1,00 L): [SO2Cl2] = 0,100 - x; [SO2] = x; [Cl2] = x.", porque: "Armamos la tabla con V = 1,00 L, de modo que los moles y las mol/L tienen el mismo valor numerico. Al inicio solo hay SO2Cl2 y no hay productos, asi que cada x que se descompone forma x de SO2 y x de Cl2 por la estequiometria 1:1:1. Por eso la fila del SO2Cl2 queda en 0,100 - x, y las otras dos en x." },
          { paso: "Kc = x^2 / (0,100 - x) = 0,0500.", porque: "Escribimos Kc a partir de la ecuacion balanceada: productos en el numerador y SO2Cl2 sin disociar en el denominador. Como todos los coeficientes son unitarios, cada concentracion aparece sin exponente adicional. Reemplazamos la fila de equilibrio y obtenemos x^2 / (0,100 - x) = 0,0500, una ecuacion en la que solo aparece x." },
          { paso: "x^2 + 0,0500 x - 0,00500 = 0, de donde x = [-0,0500 + raiz(0,0500^2 + 4 x 0,00500)] / 2 = 0,0500 M.", porque: "Reordenamos la ecuacion multiplicando en cruz: x^2 = Kc (0,100 - x), que se convierte en x^2 + 0,0500 x - 0,00500 = 0. Aplicamos la formula resolvente y obtenemos x = 0,0500 M, tomando la raiz positiva porque una concentracion no puede ser negativa. Ese valor de x se usa luego para calcular todas las especies." },
          { paso: "Equilibrio: [SO2Cl2] = 0,0500 M; [SO2] = [Cl2] = 0,0500 M. Verificacion: 0,0500^2 / 0,0500 = 0,0500 = Kc.", porque: "Con x = 0,0500 M, el SO2Cl2 queda en 0,100 - 0,0500 = 0,0500 M, y el SO2 y el Cl2 valen 0,0500 M cada uno. Para verificar reemplazamos en la expresion: 0,0500^2 / 0,0500 = 0,0500, igual a Kc. Esta comprobacion detecta errores de cuenta antes de seguir con la parte b)." }
        ],
        resultado: "[SO2Cl2] = [SO2] = [Cl2] = 0,0500 M"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Al agregar Cl2 sube su concentracion. El sistema consume el Cl2 agregado y forma SO2Cl2: el equilibrio se desplaza hacia los reactivos y [SO2Cl2] aumenta.", porque: "Al agregar 0,100 mol de Cl2 sube su concentracion, y el sistema responde consumiendo ese Cl2 para contrarrestar el cambio (principio de Le Chatelier). Como el Cl2 es un producto de SO2Cl2 <=> SO2 + Cl2, consumirlo implica formar SO2Cl2. Entonces el equilibrio se desplaza hacia los reactivos y [SO2Cl2] aumenta. Este cambio modifica la composicion, no la constante." },
          { paso: "Kc no cambia.", porque: "Kc depende solo de la temperatura, y en este caso la temperatura se mantiene constante. Por eso agregar Cl2 modifica las concentraciones de equilibrio, pero el valor de Kc sigue en 0,0500 mol/L. Conviene distinguir: el desplazamiento cambia la composicion, mientras que la constante permanece igual." }
        ],
        resultado: "[SO2Cl2] aumenta; Kc no cambia"
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
          { paso: "P(NH3) = P(H2S) = x, por la estequiometria 1:1. El solido no aparece en Kp.", porque: "Usamos la estequiometria 1:1 de NH4HS(s) <=> NH3(g) + H2S(g): cada gas se forma en la misma cantidad, asi que P(NH3) = P(H2S) = x. El NH4HS es un solido y no ejerce presion parcial, por eso no aparece en la expresion de Kp. Entonces solo los gases entran en Kp y en el calculo siguiente." },
          { paso: "Kp = P(NH3) P(H2S) = x^2 = 0,0400 atm^2, entonces x = 0,200 atm.", porque: "Kp es el producto de las presiones parciales de los gases productos, cada una elevada a su coeficiente. Reemplazamos P(NH3) = P(H2S) = x, y la expresion queda x^2 = 0,0400 atm^2. Dado que x es una presion, sacamos raiz cuadrada y obtenemos x = 0,200 atm, tomando solo el valor positivo." },
          { paso: "P total = 0,200 + 0,200 = 0,400 atm.", porque: "Por la ley de Dalton, la presion total de una mezcla de gases es la suma de sus presiones parciales. Sumamos las presiones de NH3 y H2S, ambas 0,200 atm, y obtenemos 0,200 + 0,200 = 0,400 atm. Por eso el solido no se incluye en el total, porque no ejerce presion." }
        ],
        resultado: "P total = 0,400 atm"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Delta n = 2 - 0 = 2. Kc = Kp / (RT)^2 = 0,0400 / (0,0821 x 298)^2 = 0,0400 / (24,47)^2 = 6,68 x 10^-5 mol^2/L^2.", porque: "Delta n es la diferencia entre los moles gaseosos de productos y de reactivos. Aqui hay 2 mol de gases en productos y 0 en reactivos, asi que Delta n = 2 - 0 = 2. Con eso despejamos Kc de Kp = Kc (RT)^Delta n, quedando Kc = Kp / (RT)^2. Reemplazamos 0,0821 x 298 = 24,47 y elevamos al cuadrado para obtener 6,68 x 10^-5 mol^2/L^2." },
          { paso: "Al duplicar el volumen, la presion de los gases tiende a bajar, pero el solido se descompone y repone gas hasta que P(NH3) P(H2S) vuelve a 0,0400 atm^2. La presion total sigue en 0,400 atm.", porque: "Con solido en exceso, el equilibrio fija el producto P(NH3) x P(H2S) = Kp = 0,0400 atm^2, sin importar el volumen. Al duplicar el volumen la presion baja en un primer momento, y el sistema responde descomponiendo mas NH4HS(s) para restablecer ese producto. Como el producto vuelve a 0,0400 atm^2, las presiones de equilibrio no cambian. Por eso la presion total sigue en 0,400 atm." }
        ],
        resultado: "Kc = 6,68 x 10^-5 mol^2/L^2; la presion total no cambia al duplicar V"
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
          { paso: "Concentraciones de equilibrio (experimento 1): [H2] = [I2] = 0,024 / 2,00 = 0,0120 M; [HI] = 0,192 / 2,00 = 0,0960 M.", porque: "Kc usa concentraciones de equilibrio, es decir moles divididos por el volumen del recipiente, que es 2,00 L y es comun a las tres especies. Dividimos 0,024 mol de H2 e I2 por 2,00 L y obtenemos 0,0120 M, y dividimos 0,192 mol de HI por el mismo volumen para obtener 0,0960 M. Entonces estas son las concentraciones de equilibrio del experimento 1 que se usan en Kc." },
          { paso: "Kc = [HI]^2 / ([H2][I2]) = (0,0960)^2 / (0,0120 x 0,0120) = 64,0.", porque: "Escribimos Kc con el HI al cuadrado por su coeficiente 2 en el numerador, y H2 e I2 en el denominador. Reemplazamos (0,0960)^2 arriba y 0,0120 x 0,0120 abajo, con lo que el cociente da 64,0. Como las mol/L se cancelan entre numerador y denominador, Kc no tiene unidades. Ese valor sirve para comparar en el apartado b)." }
        ],
        resultado: "Kc = 64,0"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Concentraciones iniciales del experimento 2: [H2] = [I2] = 0,040 / 2,00 = 0,020 M; [HI] = 0,80 / 2,00 = 0,40 M.", porque: "Q se calcula con las concentraciones del momento de la mezcla del experimento 2, y no con las de equilibrio del experimento 1, porque cada experimento tiene sus propias condiciones iniciales. Dividimos 0,040 mol de H2 e I2 por 2,00 L para obtener 0,020 M, y 0,80 mol de HI por el mismo volumen para obtener 0,40 M. Estos son los valores de partida que se reemplazan en Q." },
          { paso: "Q = (0,40)^2 / (0,020 x 0,020) = 0,16 / 4,0 x 10^-4 = 4,0 x 10^2.", porque: "Q tiene la misma forma que Kc, pero con las concentraciones actuales: [HI]^2 en el numerador y [H2][I2] en el denominador. Reemplazamos 0,40 elevado al cuadrado arriba, que da 0,16, y 0,020 x 0,020 abajo, que da 4,0 x 10^-4. Entonces Q = 4,0 x 10^2, valor que se compara con Kc = 64 en el paso siguiente." },
          { paso: "Q = 400 > Kc = 64: el sistema evoluciona hacia los reactivos (se forma H2 e I2 a partir de HI).", porque: "Dado que Q = 400 es mayor que Kc = 64, hay demasiado HI respecto del equilibrio. Para llegar al equilibrio el sistema consume HI y forma H2 e I2, es decir, avanza hacia los reactivos. Por eso la comparacion relevante es entre Q y Kc, y no entre las cantidades absolutas de cada especie." }
        ],
        resultado: "Q = 4,0 x 10^2 > Kc; evoluciona hacia H2 + I2"
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
          { paso: "Tabla: [N2O4] = 0,050 - x; [NO2] = 2x.", porque: "Usamos la estequiometria 1:2 de N2O4(g) <=> 2 NO2(g): cada mol de N2O4 que se disocia produce 2 mol de NO2. Si x es lo disociado en mol/L, el N2O4 queda en 0,050 - x y el NO2 en 2x. Entonces esta tabla sirve de base para escribir Kc en funcion de x, partiendo de una concentracion inicial de 0,050 M." },
          { paso: "Kc = (2x)^2 / (0,050 - x) = 4,6 x 10^-3.", porque: "Escribimos Kc con los coeficientes como exponentes: el NO2 con coeficiente 2 va al cuadrado en el numerador y el N2O4 en el denominador. Reemplazamos la tabla y obtenemos (2x)^2 / (0,050 - x) = 4,6 x 10^-3. Esta es la ecuacion que se resuelve en los pasos siguientes, primero con una aproximacion y despues de forma completa." },
          { paso: "Aproximacion rapida: si x << 0,050, 4x^2 / 0,050 = 4,6 x 10^-3, de donde x = 7,6 x 10^-3 M.", porque: "Como primera estimacion suponemos que x es mucho menor que 0,050, de modo que el denominador se aproxima a 0,050. La ecuacion se simplifica a 4x^2 = 4,6 x 10^-3 x 0,050, y de ahi sale x = 7,6 x 10^-3 M. Ese valor sirve para el orden de magnitud, pero todavia no es la respuesta final, porque la aproximacion debe verificarse." },
          { paso: "Verificacion: x / 0,050 = 0,15 = 15 % > 5 %. La aproximacion NO es valida.", porque: "Calculamos x / C para ver que fraccion del reactivo se disocio: con el x aproximado, x / 0,050 = 0,15, es decir 15 %. Si ese cociente fuera menor que 5 %, despreciar x daria un error pequeno. Como 15 % supera ese limite, la aproximacion no es valida y hay que resolver la ecuacion completa." },
          { paso: "Se resuelve la cuadratica 4x^2 + 4,6 x 10^-3 x - 2,30 x 10^-4 = 0, de donde x = 7,03 x 10^-3 M (raiz positiva).", porque: "Sin aproximacion, Kc = 4x^2 / (0,050 - x) se reordena como 4x^2 + Kc x - Kc x 0,050 = 0. Eso da 4x^2 + 4,6 x 10^-3 x - 2,30 x 10^-4 = 0, una cuadratica que se resuelve con la formula resolvente. Tomamos la raiz positiva porque x es una concentracion, y obtenemos x = 7,03 x 10^-3 M." },
          { paso: "Equilibrio: [NO2] = 2x = 0,0141 M; [N2O4] = 0,050 - 0,00703 = 0,0430 M.", porque: "Con x = 7,03 x 10^-3 M calculamos las concentraciones de equilibrio. El NO2 vale 2x = 0,0141 M por su coeficiente, y el N2O4 queda en 0,050 - 0,00703 = 0,0430 M. Verificamos que Kc con estos valores reproduzca 4,6 x 10^-3, para confirmar que la cuenta es consistente." }
        ],
        resultado: "[N2O4] = 0,0430 M; [NO2] = 0,0141 M (la aproximacion no es valida)"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "alpha = x / C = 7,03 x 10^-3 / 0,050 = 0,141 (14,1 %).", porque: "El grado de disociacion alpha es la fraccion del reactivo inicial que se disocio, por eso usamos x y no [NO2]. Dividimos x = 7,03 x 10^-3 por C = 0,050 M, con lo que alpha = 0,141. Como alpha es una fraccion, lo expresamos en porcentaje y da 14,1 %." }
        ],
        resultado: "alpha = 14,1 %"
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
          { paso: "[NH3] en equilibrio = 1,20 / 4,00 = 0,300 M.", porque: "Calculamos la concentracion de NH3 en equilibrio dividiendo sus moles por el volumen del recipiente, 4,00 L. Con 1,20 mol de NH3 obtenemos 0,300 M. Se usa el volumen original porque en este paso todavia no hubo cambio de volumen, y este valor es el primero que se necesita para plantear Kc." },
          { paso: "Se consumieron 2,00 - 1,20 = 0,80 mol de NH3. Por la estequiometria 2:1:3 se formaron 0,40 mol de N2 y 1,20 mol de H2.", porque: "Calculamos cuanto NH3 reacciono como diferencia entre los moles iniciales y los de equilibrio: 2,00 - 1,20 = 0,80 mol. Con la estequiometria 2:1:3, 0,80 mol de NH3 generan 0,40 mol de N2 y 1,20 mol de H2. Por eso el N2 formado es la mitad del NH3 consumido, y esos moles son los que luego se pasan a concentracion." },
          { paso: "[N2] = 0,40 / 4,00 = 0,100 M; [H2] = 1,20 / 4,00 = 0,300 M. Kc = [N2][H2]^3 / [NH3]^2 = 0,100 x (0,300)^3 / (0,300)^2 = 0,0300 mol^2/L^2.", porque: "Pasamos los moles de N2 y H2 a concentracion dividiendo por 4,00 L: 0,40 / 4,00 = 0,100 M y 1,20 / 4,00 = 0,300 M. Usamos Kc = [N2][H2]^3 / [NH3]^2 con los exponentes de la ecuacion balanceada: N2 sin exponente, H2 al cubo y NH3 al cuadrado. Reemplazamos y obtenemos 0,100 x (0,300)^3 / (0,300)^2 = 0,0300 mol^2/L^2. El H2 elevado al cubo es el paso que mas se olvida." }
        ],
        resultado: "Kc = 0,0300 mol^2/L^2"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Delta n = (1 + 3) - 2 = 2.", porque: "Calculamos Delta n solo con los moles gaseosos: productos (1 + 3 = 4) menos reactivos (2), dando (1 + 3) - 2 = 2. Este valor es el exponente de RT al pasar de Kc a Kp. Conviene usar los coeficientes de la ecuacion balanceada y no los moles del enunciado." },
          { paso: "Kp = Kc (RT)^2 = 0,0300 x (0,0821 x 500)^2 = 0,0300 x (41,05)^2 = 50,6 atm^2.", porque: "Aplicamos Kp = Kc (RT)^Delta n con Delta n = 2, lo que significa elevar RT al cuadrado. Calculamos RT = 0,0821 x 500 = 41,05 y lo elevamos al cuadrado, que da (41,05)^2. Luego multiplicamos por Kc = 0,0300 y obtenemos 50,6 atm^2, unidades consistentes con Delta n = 2." }
        ],
        resultado: "Kp = 50,6 atm^2"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "Al reducir el volumen a 2,00 L, las concentraciones se duplican en el instante: [NH3] = 0,600 M; [N2] = 0,200 M; [H2] = 0,600 M.", porque: "Como la concentracion es moles por volumen y los moles no cambian al reducir el volumen de 4,00 L a 2,00 L, cada concentracion se duplica en el instante. Asi, [NH3] = 0,600 M, [N2] = 0,200 M y [H2] = 0,600 M. Estos son los valores iniciales del nuevo estado, antes de que el sistema reaccione." },
          { paso: "Q = [N2][H2]^3 / [NH3]^2 = 0,200 x (0,600)^3 / (0,600)^2 = 0,120 mol^2/L^2.", porque: "Q se calcula con la misma expresion que Kc, pero con las concentraciones del instante tras reducir V. Reemplazamos 0,200 x (0,600)^3 arriba y (0,600)^2 abajo, y el cociente da 0,120 mol^2/L^2. Este valor se compara con Kc = 0,0300 para decidir el sentido de la evolucion." },
          { paso: "Q = 0,120 > Kc = 0,0300: el sistema evoluciona hacia los reactivos (NH3).", porque: "Como Q = 0,120 es mayor que Kc = 0,0300, hay demasiado producto respecto del equilibrio, y el sistema avanza hacia los reactivos, es decir hacia el NH3. Esto coincide con Le Chatelier: al subir la presion el sistema favorece el lado con menos moles de gas, que en este caso es el del NH3. Ambos criterios llevan a la misma conclusion." }
        ],
        resultado: "Q = 0,120 > Kc; evoluciona hacia NH3"
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
          { paso: "La reaccion pedida es la inversa de la primera: Kc = 1 / Kc1 = 1 / 0,040 = 25.", porque: "Al invertir una reaccion, los papeles de productos y reactivos se intercambian, y la expresion de Kc queda con numerador y denominador invertidos. Por eso el nuevo valor es el reciproco: Kc = 1 / Kc1. Con Kc1 = 0,040 obtenemos 1 / 0,040 = 25, que es la constante de la reaccion pedida. Es la trampa mas comun en este tipo de problema, asi que conviene revisar el sentido de cada reaccion." }
        ],
        resultado: "Kc = 25 (adimensional, Delta n = 0)"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "La reaccion pedida es la primera dividida por 2. Kc = Kc1^(1/2) = raiz(0,040) = 0,20.", porque: "Si los coeficientes de una reaccion se dividen por 2, la constante queda elevada a 1/2, es decir, se le saca la raiz cuadrada. Como la reaccion pedida es la primera dividida por 2, Kc = Kc1^(1/2) = raiz(0,040). Calculando raiz(0,040) obtenemos 0,20, que es la constante de la reaccion pedida." }
        ],
        resultado: "Kc = 0,20"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "Sumar las reacciones: N2 + O2 + 2 NO + O2 -> 2 NO + 2 NO2. Se cancelan 2 NO y queda N2(g) + 2 O2(g) <=> 2 NO2(g).", porque: "Sumamos miembro a miembro las dos reacciones: N2 + O2 mas 2 NO + O2 da 2 NO + 2 NO2. Los 2 NO aparecen a ambos lados y se cancelan, y queda N2 + 2 O2 <=> 2 NO2, que es la reaccion pedida. Verificamos que la reaccion final quede balanceada antes de calcular su constante." },
          { paso: "Kc = Kc1 x Kc2 = 0,040 x 2,0 x 10^2 = 8,0 M^-1.", porque: "Cuando se suman reacciones, sus constantes se multiplican, porque el cociente de la reaccion global es el producto de los cocientes de cada etapa. Reemplazamos Kc1 = 0,040 y Kc2 = 2,0 x 10^2 M^-1, y obtenemos 0,040 x 2,0 x 10^2 = 8,0. Por eso las unidades quedan en M^-1, como indica el valor de Kc2." }
        ],
        resultado: "Kc = 8,0 M^-1"
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
          { paso: "Concentraciones iniciales (V = 1,00 L): [CO] = [H2O] = 0,10 M; [CO2] = [H2] = 0,30 M.", porque: "Con V = 1,00 L, los moles y las concentraciones tienen el mismo valor numerico, asi que no hace falta dividir. Tomamos las cantidades iniciales del enunciado: 0,10 mol de CO y de H2O, y 0,30 mol de CO2 y de H2. Estas concentraciones son la base para calcular Q antes de plantear cualquier tabla." },
          { paso: "Q = [CO2][H2] / ([CO][H2O]) = (0,30 x 0,30) / (0,10 x 0,10) = 9,0.", porque: "Q lleva los productos (CO2 y H2) en el numerador y los reactivos (CO y H2O) en el denominador, con las concentraciones actuales. Reemplazamos 0,30 x 0,30 arriba y 0,10 x 0,10 abajo, y el cociente da 9,0. Ese resultado se compara con Kc = 5,0 para decidir el sentido de la evolucion." },
          { paso: "Q = 9,0 > Kc = 5,0: el sistema evoluciona hacia los reactivos (CO y H2O).", porque: "Dado que Q = 9,0 supera a Kc = 5,0, hay demasiado producto respecto del equilibrio. Por eso el sistema consume CO2 y H2 para formar CO y H2O, es decir, avanza hacia los reactivos. Esta conclusion define el sentido con el que se plantea la tabla de la parte b)." }
        ],
        resultado: "Q = 9,0 > Kc; evoluciona hacia CO y H2O"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Sea y los mol/L de CO2 que pasan a reactivos. Tabla: [CO] = [H2O] = 0,10 + y; [CO2] = [H2] = 0,30 - y.", porque: "Definimos y como lo que pasa de CO2 y H2 a CO y H2O, es decir en el sentido inverso al de la reaccion escrita. Por la estequiometria 1:1:1:1, lo que se forma de CO y H2O es igual a lo que se consume de CO2 y H2. Entonces las filas quedan en [CO] = [H2O] = 0,10 + y y [CO2] = [H2] = 0,30 - y." },
          { paso: "Kc = (0,30 - y)^2 / (0,10 + y)^2 = 5,0, entonces (0,30 - y) / (0,10 + y) = raiz(5,0) = 2,236.", porque: "Con todos los coeficientes unitarios, Kc = [CO2][H2] / ([CO][H2O]) queda (0,30 - y)^2 / (0,10 + y)^2 = 5,0. Como ambos miembros son cuadrados, sacamos raiz cuadrada de los dos lados y tomamos la positiva, con lo que raiz(5,0) = 2,236. Esto convierte la ecuacion en lineal, y conviene no redondear raiz(5,0) antes de seguir." },
          { paso: "y = (0,30 - 2,236 x 0,10) / (1 + 2,236) = 0,0236 M.", porque: "Despejamos y de la ecuacion lineal (0,30 - y) = 2,236 (0,10 + y), pasando los terminos con y a un lado. Eso da y (1 + 2,236) = 0,30 - 2,236 x 0,10, de donde y = (0,30 - 2,236 x 0,10) / (1 + 2,236) = 0,0236 M. Conviene mantener varias cifras en el despeje para no perder precision." },
          { paso: "Equilibrio: [CO] = [H2O] = 0,124 M; [CO2] = [H2] = 0,276 M. Verificacion: (0,276)^2 / (0,124)^2 = 5,0.", porque: "Con y = 0,0236 M obtenemos las concentraciones de equilibrio: [CO] = [H2O] = 0,10 + 0,0236 = 0,124 M, y [CO2] = [H2] = 0,30 - 0,0236 = 0,276 M. Reemplazamos en Kc para verificar: (0,276)^2 / (0,124)^2 da aproximadamente 5,0. Entonces el resultado es consistente con el dato del enunciado, dentro de la precision usada." }
        ],
        resultado: "[CO] = [H2O] = 0,124 M; [CO2] = [H2] = 0,276 M"
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
          { paso: "V = 500 cm^3 = 0,500 L. [CO]0 = [Cl2]0 = 0,0200 / 0,500 = 0,0400 M.", porque: "Antes de calcular concentraciones convertimos el volumen a litros: 500 cm^3 = 0,500 L, porque la concentracion molar se expresa en mol/L. Luego dividimos 0,0200 mol de CO y de Cl2 por 0,500 L, lo que da 0,0400 M de cada reactivo. Si se usara 500 directamente el resultado tendria un error de unidades muy grande, por eso el cambio de unidades es el primer paso." },
          { paso: "Tabla: [COCl2] = y; [CO] = [Cl2] = 0,0400 - y.", porque: "Por la estequiometria 1:1:1 de CO + Cl2 <=> COCl2, cada mol de COCl2 que se forma consume un mol de CO y un mol de Cl2. Como ambos reactivos empiezan con la misma concentracion, quedan iguales en el equilibrio: 0,0400 - y. El COCl2 parte de cero, por eso su fila es simplemente y." },
          { paso: "Kc = y / (0,0400 - y)^2 = 250, que se reordena como 250 y^2 - 21 y + 0,400 = 0.", porque: "Kc se escribe con el COCl2 en el numerador y el producto [CO][Cl2] en el denominador, que con ambos valores iguales da (0,0400 - y)^2. Reemplazamos la tabla y obtenemos y / (0,0400 - y)^2 = 250. Multiplicando en cruz y ordenando queda 250 y^2 - 21 y + 0,400 = 0, una cuadratica." },
          { paso: "y = [21 - raiz(41)] / 500 = 0,0292 M (la otra raiz da [CO] negativa y se descarta).", porque: "Aplicamos la formula resolvente a 250 y^2 - 21 y + 0,400 = 0 y obtenemos y = [21 - raiz(41)] / 500 = 0,0292 M. La otra raiz daria [CO] negativa, y las concentraciones deben ser positivas, asi que se descarta. Ese criterio es el que elige la raiz correcta." },
          { paso: "Equilibrio: [COCl2] = 0,0292 M; [CO] = [Cl2] = 0,0400 - 0,0292 = 0,0108 M.", porque: "Con y = 0,0292 M, el COCl2 en equilibrio vale 0,0292 M. Como CO y Cl2 quedan en 0,0400 - 0,0292 = 0,0108 M, cada reactivo consumido corresponde a un COCl2 formado, que es el balance de la tabla. Entonces este es un paso de reemplazo directo en la fila de equilibrio." }
        ],
        resultado: "[COCl2] = 0,0292 M; [CO] = [Cl2] = 0,0108 M"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Delta n = 1 - 2 = -1. Kp = Kc (RT)^Delta n = 250 / (0,0821 x 600) = 250 / 49,3 = 5,08 atm^-1.", porque: "Calculamos Delta n con los moles gaseosos: hay 1 mol de COCl2 en productos y 2 mol de CO + Cl2 en reactivos, asi que Delta n = 1 - 2 = -1. Como Delta n es negativo, (RT)^Delta n queda en el denominador y Kp = Kc / (RT). Reemplazamos 250 / (0,0821 x 600) = 250 / 49,3 = 5,08, y las unidades pasan de M^-1 a atm^-1." }
        ],
        resultado: "Kp = 5,08 atm^-1"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "Al reducir el volumen se desplaza hacia el lado con menos moles de gas: COCl2 (1 mol) frente a CO + Cl2 (2 mol). El equilibrio se desplaza hacia el COCl2.", porque: "Reducir el volumen sube la presion, y por Le Chatelier el sistema se desplaza hacia el lado con menos moles de gas. Comparamos COCl2, con 1 mol de gas, frente a CO + Cl2, con 2 mol. Por eso el equilibrio se corre hacia el COCl2. Este analisis depende solo de los moles gaseosos, no de los valores absolutos de concentracion." },
          { paso: "Kc no cambia, porque la temperatura se mantiene constante.", porque: "Kc depende solo de la temperatura, y en este caso la temperatura se mantiene constante en 600 K. Por eso el desplazamiento cambia las concentraciones de equilibrio pero no el valor de Kc. Entonces la reduccion de volumen no altera la constante, aunque si cambie la composicion." }
        ],
        resultado: "Se desplaza hacia COCl2; Kc no cambia"
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
          { paso: "Concentraciones iniciales (V = 1,00 L): [H2]0 = 0,200 M; [Cl2]0 = 0,100 M; [HCl]0 = 0. Tabla: [H2] = 0,200 - x; [Cl2] = 0,100 - x; [HCl] = 2x.", porque: "Con V = 1,00 L, los moles iniciales y las concentraciones tienen el mismo valor numerico, y el HCl no esta al comienzo, por eso su concentracion inicial es cero. Usamos la estequiometria 1:1:2 de H2 + Cl2 <=> 2 HCl: cada x de H2 que reacciona consume x de Cl2 y forma 2x de HCl. Entonces la tabla queda con 0,200 - x para el H2, 0,100 - x para el Cl2 y 2x para el HCl." },
          { paso: "Kc = (2x)^2 / ((0,200 - x)(0,100 - x)) = 2,0, que se reordena como 2x^2 + 0,60 x - 0,040 = 0.", porque: "Escribimos Kc con el HCl al cuadrado por su coeficiente 2 en el numerador, y H2 y Cl2 en el denominador. Reemplazamos la tabla: (2x)^2 / ((0,200 - x)(0,100 - x)) = 2,0. Al multiplicar en cruz queda 4x^2 = 2,0 (0,200 - x)(0,100 - x), que se ordena como 2x^2 + 0,60 x - 0,040 = 0. Los 0,60 y el 0,040 salen de 0,200 + 0,100 y de 0,200 x 0,100, multiplicados por 2." },
          { paso: "x = [-0,60 + raiz(0,60^2 + 4 x 2 x 0,040)] / (2 x 2) = 0,0562 M.", porque: "Aplicamos la formula resolvente a 2x^2 + 0,60 x - 0,040 = 0, con a = 2, b = 0,60 y c = -0,040. Tomamos la raiz positiva porque las concentraciones no pueden ser negativas. Calculamos el discriminante con todas sus cifras antes de dividir, y obtenemos x = 0,0562 M." },
          { paso: "Equilibrio: [HCl] = 2 x 0,0562 = 0,112 M; [H2] = 0,144 M; [Cl2] = 0,0438 M. Verificacion: 0,112^2 / (0,144 x 0,0438) = 2,0.", porque: "Con x = 0,0562 M calculamos las concentraciones de equilibrio: [HCl] = 2 x 0,0562 = 0,112 M, [H2] = 0,200 - 0,0562 = 0,144 M y [Cl2] = 0,100 - 0,0562 = 0,0438 M. Al reemplazar en Kc, 0,112^2 / (0,144 x 0,0438) da 2,0, lo que confirma que el calculo es consistente con el dato del enunciado." }
        ],
        resultado: "[HCl] = 0,112 M; [H2] = 0,144 M; [Cl2] = 0,0438 M"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Delta n = 2 - 2 = 0. Kp = Kc (RT)^0 = Kc = 2,0.", porque: "Calculamos Delta n con los gases: hay 2 mol de HCl en productos y 1 + 1 = 2 mol de H2 y Cl2 en reactivos, asi que Delta n = 2 - 2 = 0. Con Delta n = 0 el factor (RT)^Delta n vale 1, por lo que Kp = Kc sin necesidad de R ni de T. Entonces Kp = 2,0 coincide numericamente con Kc a 500 K." }
        ],
        resultado: "Kp = 2,0 (igual a Kc, porque Delta n = 0)"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "La reaccion directa es exotermica (Delta H < 0): el calor es un producto. Al subir T el sistema consume ese calor, se desplaza hacia los reactivos y Kc disminuye.", porque: "Como Delta H < 0, la reaccion directa es exotermica y el calor aparece como producto. Al subir la temperatura se agrega calor, y el sistema lo consume desplazandose hacia los reactivos. Por eso Kc disminuye, y este razonamiento es el principio de Le Chatelier aplicado a la temperatura." },
          { paso: "Por lo tanto el rendimiento de HCl disminuye al aumentar la temperatura.", porque: "Si el equilibrio se desplaza hacia los reactivos, queda menos HCl en el equilibrio. Como el rendimiento mide la cantidad de producto formada, baja al subir T, en coherencia con la disminucion de Kc. Entonces el rendimiento de HCl disminuye al aumentar la temperatura, con el volumen constante." }
        ],
        resultado: "El rendimiento de HCl disminuye al subir T"
      },
      {
        parte: "d)",
        pasos: [
          { paso: "Al reducir V, las concentraciones aumentan, pero como Delta n = 0 el numero de moles gaseosos es igual en ambos lados. La presion no favorece ningun sentido.", porque: "El desplazamiento por presion depende de la diferencia de moles gaseosos entre productos y reactivos, no de las concentraciones absolutas. Como Delta n = 0, hay la misma cantidad de moles de gas a cada lado, y al reducir V todas las especies cambian en la misma proporcion. Por eso la presion no favorece ningun sentido." },
          { paso: "La composicion de equilibrio no se modifica.", porque: "Con Delta n = 0, el cociente Q no cambia al reducir el volumen, porque el factor de volumen se cancela entre numerador y denominador. Como Q sigue igual a Kc, el sistema no tiene motivo para desplazarse. Por eso la composicion de equilibrio no se modifica, a diferencia de lo que pasaria con Delta n distinto de 0." }
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
          { paso: "HCl es un acido fuerte: se disocia totalmente, HCl + H2O -> H3O^+ + Cl^-. Entonces [H3O^+] = 2,5 x 10^-3 M.", porque: "Usamos que HCl es un acido fuerte, que se disocia por completo: cada mol de HCl libera un mol de H3O^+ y un Cl^-. Por eso [H3O^+] es igual a la concentracion inicial del acido, 2,5 x 10^-3 M, sin plantear equilibrio. Conviene verificar que el acido sea fuerte antes de usar esta relacion directa." },
          { paso: "pH = -log(2,5 x 10^-3) = 2,60.", porque: "El pH se define como el logaritmo decimal negativo de la concentracion de H3O^+. Calculamos -log(2,5 x 10^-3) con la tecla log de la calculadora, lo que da 2,60. El resultado se informa con 2 decimales porque la concentracion dada tiene 2 cifras significativas." },
          { paso: "Verificacion: el agua aporta solo 10^-7 M de H3O^+, despreciable frente a 2,5 x 10^-3 M.", porque: "El agua tambien produce H3O^+, pero en una cantidad de 10^-7 M. Comparamos ese aporte con 2,5 x 10^-3 M del acido, y la diferencia es tan grande que el H3O^+ del acido domina el pH. Si el acido estuviera muy diluido, esta comparacion cambiaria y habria que hacer el balance completo." }
        ],
        resultado: "pH = 2,60"
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
          { paso: "NaOH es una base fuerte: se disocia totalmente, por lo que [OH^-] = 0,0040 M.", porque: "NaOH es una base fuerte que se disocia por completo, liberando un OH^- por cada mol de NaOH. Como no hay equilibrio que plantear, [OH^-] es igual a la concentracion de la base, 0,0040 M. Con ese dato podemos calcular el pOH directamente." },
          { paso: "pOH = -log(0,0040) = 2,40.", porque: "El pOH se define como -log[OH^-], igual que el pH se define con [H3O^+]. Calculamos -log(0,0040) con la calculadora, y el resultado es 2,40. Como ese valor es el pOH y no el pH, hace falta un paso mas para llegar a la respuesta." },
          { paso: "pH = 14,00 - 2,40 = 11,60.", porque: "A 25 C, pH + pOH = 14, y por eso el pH se calcula restando el pOH de 14,00: 14,00 - 2,40 = 11,60. Verificamos que la suma de pH y pOH de 14,00, con 11,60 + 2,40 = 14,00. Entonces el pH de la solucion es 11,60, basico como corresponde a una base fuerte." }
        ],
        resultado: "pH = 11,60"
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
          { paso: "Equilibrio: CH3COOH + H2O <=> CH3COO^- + H3O^+. Tabla: [H3O^+] = x; [CH3COO^-] = x; [CH3COOH] = 0,10 - x.", porque: "Como el acido acetico es debil, no se disocia por completo y se establece un equilibrio. Armamos la tabla con x para el H3O^+ y el acetato formados, y 0,10 - x para el acido que queda sin disociar, a partir de la concentracion inicial de 0,10 M. Asi Ka queda expresada con una sola incognita." },
          { paso: "Ka = x^2 / (0,10 - x) = 1,8 x 10^-5. Aproximacion x << 0,10: x = raiz(1,8 x 10^-5 x 0,10) = 1,34 x 10^-3 M.", porque: "Escribimos Ka con los productos en el numerador y el acido sin disociar en el denominador: x^2 / (0,10 - x) = 1,8 x 10^-5. Como Ka es chica, suponemos x mucho menor que 0,10, y el denominador se simplifica a 0,10, lo que da x^2 = Ka x C. Entonces x = raiz(1,8 x 10^-5 x 0,10) = 1,34 x 10^-3 M, y conviene conservar varias cifras en x para que el pH no pierda precision." },
          { paso: "Verificacion: x / 0,10 = 1,3 % < 5 %. La aproximacion es valida.", porque: "La aproximacion se controla con x / C, que indica la fraccion del acido que se ionizo. Calculamos x / 0,10, que da 1,3 %, menor que 5 %. Como el error de despreciar x es chico, el resultado es valido. Si la ionizacion superara 5 %, habria que resolver la cuadratica completa." },
          { paso: "pH = -log(1,34 x 10^-3) = 2,87.", porque: "El pH se obtiene como -log de la [H3O^+] de equilibrio, que en este caso es x. Con x = 1,34 x 10^-3 M calculamos -log(1,34 x 10^-3) = 2,87. Recordamos que la concentracion usada es la de equilibrio y no la inicial del acido." }
        ],
        resultado: "pH = 2,87 ([H3O^+] = 1,34 x 10^-3 M)"
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
          { paso: "pOH = 14,00 - 11,13 = 2,87, entonces [OH^-] = 10^-2,87 = 1,35 x 10^-3 M.", porque: "Como la solucion es basica, el pH dado se convierte en pOH restando de 14,00, porque a 25 C pH + pOH = 14. Calculamos pOH = 14,00 - 11,13 = 2,87. Luego despejamos [OH^-] = 10^-2,87 = 1,35 x 10^-3 M invirtiendo el logaritmo. Usar 10^-11,13 en lugar de 10^-pOH daria un valor absurdo." },
          { paso: "Equilibrio: NH3 + H2O <=> NH4^+ + OH^-. Por estequiometria 1:1, [NH4^+] = [OH^-] = 1,35 x 10^-3 M, y [NH3] = 0,10 - 0,00135 = 0,0987 M.", porque: "El NH3 es una base debil que reacciona con el agua produciendo NH4^+ y OH^-. Por la estequiometria 1:1, el NH4^+ formado es igual al OH^- producido, 1,35 x 10^-3 M. El NH3 que queda es la concentracion inicial de 0,10 M menos ese valor, es decir 0,0987 M. Esto arma la tabla de equilibrio tomando x como [OH^-]." },
          { paso: "Kb = [NH4^+][OH^-] / [NH3] = (1,35 x 10^-3)^2 / 0,0987 = 1,8 x 10^-5.", porque: "Escribimos Kb con los productos en el numerador y el NH3 sin reaccionar en el denominador, usando concentraciones de equilibrio. Como [NH4^+] = [OH^-], el numerador es (1,35 x 10^-3)^2. Dividiendo por 0,0987 M de NH3 obtenemos Kb = 1,8 x 10^-5, y usamos ese valor calculado y no la concentracion inicial de 0,10 M." }
        ],
        resultado: "Kb = 1,8 x 10^-5"
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
          { paso: "CN^- + H2O <=> HCN + OH^-: CN^- es la base conjugada del HCN.", porque: "En un par acido-base conjugado, la base se obtiene quitando un H^+ al acido: el HCN pierde H^+ y queda CN^-. Por eso la reaccion del CN^- con el agua, aceptando H^+, es la que define el Kb. Identificar bien el par es el primer paso para no confundir las constantes." },
          { paso: "Para un par conjugado Ka x Kb = Kw. Kb = 1,0 x 10^-14 / 6,2 x 10^-10 = 1,6 x 10^-5.", porque: "Para un par conjugado Ka x Kb = Kw, porque al sumar la disociacion del acido y la hidrolisis de la base se obtiene la autoionizacion del agua. Usamos Kb = Kw / Ka = 1,0 x 10^-14 / 6,2 x 10^-10 = 1,6 x 10^-5. Como la Ka del HCN es chica, el CN^- resulta una base debil." },
          { paso: "pKb = -log(1,6 x 10^-5) = 4,79.", porque: "pKb se define como -log de la constante, igual que pH es -log[H3O^+]. Calculamos -log(1,6 x 10^-5) = 4,79, que es el valor pedido. Cuanto menor es pKb, mas fuerte es la base, y este valor indica una base debil." }
        ],
        resultado: "Kb = 1,6 x 10^-5; pKb = 4,79"
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
          { paso: "[H3O^+] = 10^-2,64 = 2,3 x 10^-3 M, que es igual a [HCOO^-] en la solucion (el aporte del agua se desprecia).", porque: "Usamos la relacion inversa del pH, [H3O^+] = 10^-pH, porque pH = -log[H3O^+]. Con pH = 2,64 obtenemos 10^-2,64 = 2,3 x 10^-3 M. Como el acido es monoprotico, [HCOO^-] tambien vale 2,3 x 10^-3 M, y el aporte del agua se desprecia. Estos valores de equilibrio se usan despues para Ka y para alpha." },
          { paso: "alpha = [H3O^+] / C = 2,3 x 10^-3 / 0,050 = 0,046 (4,6 %).", porque: "alpha es el grado de ionizacion, es decir la fraccion del acido inicial que se disocio. Dividimos la concentracion de H3O^+ formada, 2,3 x 10^-3 M, por la concentracion inicial C = 0,050 M, y obtenemos 0,046. Para expresarlo en porcentaje, 0,046 equivale a 4,6 %." },
          { paso: "Ka = [HCOO^-][H3O^+] / [HCOOH] = (2,3 x 10^-3)^2 / (0,050 - 2,3 x 10^-3) = 1,1 x 10^-4.", porque: "Escribimos Ka con los productos de la disociacion en el numerador y el acido sin disociar en el denominador. Como el pH da la concentracion de equilibrio, no hace falta aproximar: usamos C - x en el denominador, con x = 2,3 x 10^-3 M. Reemplazamos y obtenemos (2,3 x 10^-3)^2 / (0,050 - 2,3 x 10^-3) = 1,1 x 10^-4. Verificamos que x sea menor que C, para que el denominador sea positivo." }
        ],
        resultado: "Ka = 1,1 x 10^-4; alpha = 4,6 %"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Ka = x^2 / (0,0050 - x) = 1,1 x 10^-4, es decir x^2 + 1,1 x 10^-4 x - 5,5 x 10^-7 = 0, de donde x = 6,9 x 10^-4 M.", porque: "Al diluir usamos el mismo Ka de a), con la nueva concentracion C = 0,0050 M. Como x no es despreciable frente a 0,0050, reordenamos la ecuacion como x^2 + Ka x - Ka C = 0, es decir x^2 + 1,1 x 10^-4 x - 5,5 x 10^-7 = 0. Tomamos la raiz positiva y obtenemos x = 6,9 x 10^-4 M. Ka no cambia al diluir, solo cambia x." },
          { paso: "alpha = 6,9 x 10^-4 / 0,0050 = 0,138 (13,8 %).", porque: "Aplicamos la misma definicion de alpha que en a): x dividido por la concentracion inicial. Como ahora C = 0,0050 M, calculamos 6,9 x 10^-4 / 0,0050 = 0,138, es decir 13,8 %. El cociente aumenta aunque x sea menor, por eso el grado de ionizacion sube al diluir." }
        ],
        resultado: "alpha = 13,8 % (mayor que en la solucion 0,050 M)"
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
          { paso: "Moles: HCl = 0,100 x 50,0 = 5,00 mmol de H^+; NaOH = 0,100 x 40,0 = 4,00 mmol de OH^-.", porque: "Calculamos los moles con n = M x V. Con M en mol/L y V en mL, el resultado sale en mmol: 0,100 x 50,0 = 5,00 mmol de H^+ del HCl. El NaOH aporta 0,100 x 40,0 = 4,00 mmol de OH^-, y como la neutralizacion es 1:1, ambos reaccionan entre si." },
          { paso: "Exceso de H^+: 5,00 - 4,00 = 1,00 mmol, en un volumen total de 90,0 mL. [H^+] = 1,00 / 90,0 = 0,0111 M.", porque: "La neutralizacion consume cantidades iguales de H^+ y OH^-, y lo que sobra es el reactivo en exceso. Como 5,00 - 4,00 = 1,00 mmol de H^+ quedan sin neutralizar, ese es el exceso. Dividimos 1,00 mmol por el volumen total de 90,0 mL, que es la suma de los dos volumenes mezclados, y obtenemos [H^+] = 0,0111 M." },
          { paso: "pH = -log(0,0111) = 1,95.", porque: "El pH se calcula con la concentracion final del exceso, no con las iniciales de cada reactivo. Como el H^+ esta en exceso, calculamos -log(0,0111) = 1,95. Ese valor es acido, como corresponde a una solucion con exceso de acido." }
        ],
        resultado: "pH = 1,95"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Para pH = 7,00 hay que neutralizar todo el HCl: OH^- adicional = 5,00 - 4,00 = 1,00 mmol.", porque: "El pH 7,00 corresponde al punto de equivalencia de un acido fuerte con una base fuerte, donde no sobra ni acido ni base. Por eso hay que agregar la cantidad de OH^- que falta para neutralizar el H^+ restante. Calculamos 5,00 - 4,00 = 1,00 mmol, y esa es la cantidad adicional de OH^- necesaria." },
          { paso: "Volumen = 1,00 mmol / 0,100 M = 10,0 mL de NaOH.", porque: "Despejamos el volumen de V = n / M, porque la concentracion es moles por litro. Con 1,00 mmol de OH^- y 0,100 M de NaOH, V = 1,00 mmol / 0,100 mmol/mL = 10,0 mL. Conviene revisar las unidades antes de dar la respuesta final." }
        ],
        resultado: "10,0 mL adicionales de NaOH 0,100 M"
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
          { paso: "Moles iniciales: CH3COOH = 0,100 x 100 = 10,0 mmol; NaOH = 0,100 x 50,0 = 5,00 mmol.", porque: "Calculamos los moles de cada reactivo con n = M x V antes de cualquier otra cosa. Con 0,100 M de acido y 100 mL obtenemos 10,0 mmol de CH3COOH, y con 0,100 M de NaOH y 50,0 mL obtenemos 5,00 mmol. Esto permite ver que reactivo queda en exceso despues de la reaccion." },
          { paso: "El NaOH neutraliza 5,00 mmol del acido: quedan 5,00 mmol de CH3COOH y se forman 5,00 mmol de CH3COO^-.", porque: "La reaccion CH3COOH + OH^- -> CH3COO^- + H2O es 1:1: cada mmol de NaOH consume un mmol de acido y forma un mmol de acetato. Como el acido queda en exceso (10,0 frente a 5,00 mmol), la mezcla de acido debil con su base conjugada funciona como solucion reguladora. Verificamos que el total de acido se conserve: 5,00 + 5,00 = 10,0 mmol." },
          { paso: "Es una solucion reguladora: pH = pKa + log([A^-] / [HA]) = 4,74 + log(5,00 / 5,00) = 4,74.", porque: "La solucion contiene un acido debil y su base conjugada en cantidades comparables, lo que la hace reguladora. Usamos Henderson-Hasselbalch, que relaciona el pH con el pKa = 4,74 y con el cociente entre base y acido. Como [A^-] = [HA] = 5,00 mmol, el logaritmo vale log(5,00 / 5,00) = 0 y el pH es 4,74." }
        ],
        resultado: "pH = 4,74"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "El HCl consume 1,00 mmol de acetato: CH3COO^- + H^+ -> CH3COOH. Quedan 4,00 mmol de CH3COO^- y 6,00 mmol de CH3COOH.", porque: "El HCl aporta 1,00 mmol de H^+, que reacciona con el acetato tomando una unidad de base por cada mmol de H^+. Entonces el acetato baja de 5,00 a 4,00 mmol y el acido sube de 5,00 a 6,00 mmol. Este intercambio es el mecanismo por el cual el buffer resiste el cambio de pH." },
          { paso: "pH = 4,74 + log(4,00 / 6,00) = 4,74 - 0,18 = 4,56.", porque: "Volvemos a aplicar Henderson-Hasselbalch con los nuevos moles de base y de acido: pH = 4,74 + log(4,00 / 6,00). El volumen total se cancela en el cociente, porque ambas cantidades estan en el mismo volumen. El pH baja solo un poco desde 4,74, lo que muestra la capacidad reguladora de la solucion." }
        ],
        resultado: "pH = 4,57"
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
          { paso: "NH4Cl -> NH4^+ + Cl^-. El Cl^- es la base conjugada de un acido fuerte y no hidroliza. El NH4^+ hidroliza: NH4^+ + H2O <=> NH3 + H3O^+.", porque: "La sal se disocia por completo en sus iones. Solo los iones que son acido o base debil reaccionan con el agua: el Cl^- es la base conjugada de un acido fuerte, por eso no reacciona. El NH4^+, en cambio, es el acido conjugado de una base debil, asi que se escribe su hidrolisis." },
          { paso: "Como el NH4^+ dona H^+, la solucion es acida (pH < 7).", porque: "El NH4^+ dona H^+ al agua y produce H3O^+. Como aumenta la concentracion de H3O^+, la solucion queda con pH menor que 7. Esta conclusion cualitativa se confirma despues con el calculo numerico del pH en la parte b)." }
        ],
        resultado: "NH4^+ + H2O <=> NH3 + H3O^+; solucion acida"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Ka(NH4^+) = Kw / Kb = 1,0 x 10^-14 / 1,8 x 10^-5 = 5,6 x 10^-10.", porque: "NH4^+ y NH3 son un par conjugado, asi que Ka x Kb = Kw. Por eso la Ka del ion amonio se obtiene dividiendo Kw = 1,0 x 10^-14 por el Kb del NH3, que es 1,8 x 10^-5. Con eso obtenemos Ka = 5,6 x 10^-10, la constante que se usa para calcular el pH de la solucion de NH4Cl 0,10 M." },
          { paso: "[H3O^+] = raiz(Ka x C) = raiz(5,56 x 10^-10 x 0,10) = 7,45 x 10^-6 M. Verificacion: x / C = 0,007 %, muy menor que 5 %.", porque: "Como el NH4^+ es un acido debil, usamos [H3O^+] = raiz(Ka x C), que sale de despreciar x frente a C. Reemplazamos Ka = 5,56 x 10^-10 y C = 0,10 M, y obtenemos raiz(5,56 x 10^-10 x 0,10) = 7,45 x 10^-6 M. La verificacion x / C = 0,007 % confirma que la aproximacion es valida." },
          { paso: "pH = -log(7,45 x 10^-6) = 5,13.", porque: "El pH es -log de la [H3O^+] de equilibrio. Calculamos -log(7,45 x 10^-6) = 5,13, un valor que indica una solucion acida, pero no tan acida como un acido fuerte de igual concentracion. Conviene redondear solo al final del calculo." }
        ],
        resultado: "pH = 5,13"
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
          { paso: "La primera ionizacion, H2S <=> H^+ + HS^-, define el pH porque Ka1 es mucho mayor que Ka2.", porque: "El H2S libera H^+ en dos etapas, y la primera tiene una Ka1 = 1,0 x 10^-7 mucho mayor que la segunda, Ka2 = 1,3 x 10^-13. Por eso la mayor parte del H^+ proviene del primer paso, que es el que determina el pH. Asi el calculo puede plantearse usando solo Ka1." },
          { paso: "[H^+] = [HS^-] = x = raiz(1,0 x 10^-7 x 0,10) = 1,0 x 10^-4 M. Verificacion: x / 0,10 = 0,1 % < 5 %.", porque: "Como el primer paso se comporta como un acido debil monoprotico, [H^+] = [HS^-] = x y aplicamos x^2 = Ka1 x C. Con Ka1 = 1,0 x 10^-7 y C = 0,10 M, obtenemos raiz(1,0 x 10^-7 x 0,10) = 1,0 x 10^-4 M. La verificacion x / C = 0,1 %, menor que 5 %, confirma que la aproximacion es valida." },
          { paso: "pH = -log(1,0 x 10^-4) = 4,00.", porque: "El pH es -log de la [H^+] de equilibrio, es decir -log(1,0 x 10^-4). El resultado es 4,00, un valor que depende solo de Ka1 y de la concentracion C del acido. Esta relacion permite verificar el pH con la calculadora." }
        ],
        resultado: "pH = 4,00"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "S^2- se forma en el segundo paso: HS^- <=> H^+ + S^2-, con Ka2 = [H^+][S^2-] / [HS^-].", porque: "Para calcular [S^2-] usamos el segundo paso de ionizacion, HS^- -> H^+ + S^2-. Su constante Ka2 relaciona [H^+], [S^2-] y [HS^-] en el equilibrio, por eso se escribe con esas tres concentraciones y no con Ka1. Entonces Ka2 = 1,3 x 10^-13 es el dato que controla la formacion de S^2-." },
          { paso: "Como [H^+] aprox. [HS^-], los factores se cancelan: [S^2-] = Ka2 = 1,3 x 10^-13 M.", porque: "Como [H^+] es aproximadamente igual a [HS^-], que provienen del primer paso, esos factores se cancelan en la expresion de Ka2. Por eso queda [S^2-] = Ka2 = 1,3 x 10^-13 M. Este resultado no depende de la concentracion inicial de H2S, y vale cuando el primer paso domina la concentracion de H^+ y de HS^-." }
        ],
        resultado: "[S^2-] = 1,3 x 10^-13 M"
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
          { paso: "Aproximacion simple: [H^+] = raiz(6,8 x 10^-4 x 0,020) = 3,7 x 10^-3 M. Verificacion: x / C = 18 % > 5 %. La aproximacion NO es valida.", porque: "Usamos la aproximacion de acido debil como primera estimacion, x = raiz(Ka x C), con Ka = 6,8 x 10^-4 y C = 0,020 M. Reemplazamos y obtenemos [H^+] = 3,7 x 10^-3 M. Al verificar x / C = 18 %, que supera 5 %, vemos que la ionizacion es grande y despreciar x no es valido. Por eso este resultado no sirve como respuesta final." },
          { paso: "Sin aproximacion, Ka = x^2 / (0,020 - x) se transforma en x^2 + 6,8 x 10^-4 x - 1,36 x 10^-5 = 0, con x = [H^+] = [F^-].", porque: "Sin aproximacion, la expresion completa Ka = x^2 / (C - x) se reordena como ecuacion cuadratica: x^2 + Ka x - Ka C = 0. Reemplazamos Ka = 6,8 x 10^-4 y C = 0,020, lo que da x^2 + 6,8 x 10^-4 x - 1,36 x 10^-5 = 0. Aqui x es [H^+] = [F^-], y esta es la forma general para un acido debil cuando x no es despreciable frente a C." },
          { paso: "x = [-6,8 x 10^-4 + raiz((6,8 x 10^-4)^2 + 4 x 1,36 x 10^-5)] / 2 = 3,36 x 10^-3 M.", porque: "Aplicamos la formula resolvente con b = 6,8 x 10^-4 y c = -1,36 x 10^-5, ya que el termino x^2 no tiene coeficiente. Tomamos la raiz positiva, porque la concentracion no puede ser negativa. Calculando el discriminante con todas sus cifras, obtenemos x = 3,36 x 10^-3 M." },
          { paso: "pH = -log(3,36 x 10^-3) = 2,47.", porque: "Calculamos el pH con el valor exacto de [H^+] que obtuvimos de la cuadratica, no con el de la aproximacion. Con -log(3,36 x 10^-3) = 2,47, el resultado difiere del de la aproximacion, y esa diferencia muestra por que la verificacion es importante. Verificamos el redondeo con la calculadora antes de informarlo." }
        ],
        resultado: "[H^+] = 3,36 x 10^-3 M; pH = 2,47 (la aproximacion simple daria 2,43, no valido)"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "alpha = x / C = 3,36 x 10^-3 / 0,020 = 0,168 (16,8 %).", porque: "alpha es la fraccion del acido inicial que se ionizo, y la calculamos como x / C. Usamos el valor exacto de x obtenido en la parte a), 3,36 x 10^-3 M, dividido por C = 0,020 M, lo que da 0,168 o 16,8 %. Ese porcentaje es coherente con la ionizacion grande que tiene el HF en esta concentracion." }
        ],
        resultado: "alpha = 16,8 %"
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
          { paso: "Balance de cargas: [H^+] = [Cl^-] + [OH^-] = C + Kw / [H^+].", porque: "Cuando el acido es muy diluido, el agua aporta H^+ y OH^- en cantidades comparables al acido, por eso no alcanza con C. Planteamos el balance de cargas: la suma de cargas positivas es igual a la suma de cargas negativas. Asi [H^+] = [Cl^-] + [OH^-] incluye todos los iones presentes, y [OH^-] = Kw / [H^+]." },
          { paso: "[H^+]^2 - C [H^+] - Kw = 0, de donde [H^+] = [C + raiz(C^2 + 4 Kw)] / 2 = 1,1 x 10^-7 M.", porque: "Multiplicamos el balance por [H^+] y usamos [OH^-] = Kw / [H^+], lo que da [H^+]^2 - C [H^+] - Kw = 0. Aplicamos la formula resolvente con C = 2,0 x 10^-8 M y tomamos la raiz positiva, porque la concentracion es positiva. El resultado 1,1 x 10^-7 M muestra que el H^+ del agua no se puede despreciar frente al del acido." },
          { paso: "pH = -log(1,1 x 10^-7) = 6,96.", porque: "El pH se calcula a partir de la concentracion total de H^+, incluyendo el aporte del agua. Con -log(1,1 x 10^-7) obtenemos 6,96, un valor ligeramente acido aunque el acido sea diluido. Este resultado no se obtendria si se usara solo la concentracion del acido." },
          { paso: "Justificacion: -log(2,0 x 10^-8) daria 7,70, pero eso ignora el agua. El acido es tan diluido que el pH queda cerca de 7 y ligeramente acido.", porque: "Este paso explica por que la respuesta no es -log(C). Si se ignorara el agua, -log(2,0 x 10^-8) daria 7,70, un valor basico que es imposible para un acido. Cuando C es comparable con el H^+ que aporta el agua, este no puede despreciarse, y por eso el pH queda cerca de 7 y ligeramente acido." }
        ],
        resultado: "pH = 6,96"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Con C = 2,0 x 10^-6 M, el aporte del agua es del orden de 5 % (10^-7 / 2,0 x 10^-6), pequeno frente a C: pH = -log(2,0 x 10^-6) = 5,70.", porque: "Cuando C es mucho mayor que el H^+ del agua, el aporte del agua es pequeno y el pH se calcula directamente como -log C. Aqui C = 2,0 x 10^-6 M, y calculamos pH = -log(2,0 x 10^-6) = 5,70. Por eso el pH de b) se obtiene con esa formula simple, sin balance de cargas." }
        ],
        resultado: "pH = 5,70"
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
          { paso: "En equivalencia: n(NaOH) = n(CH3COOH) = 0,100 x 25,0 = 2,50 mmol. V = 2,50 mmol / 0,100 M = 25,0 mL.", porque: "En una titulacion 1:1, el punto de equivalencia se alcanza cuando los moles de base agregada igualan los moles de acido inicial. Calculamos n = 0,100 x 25,0 = 2,50 mmol de acido, y con V = n / M obtenemos el volumen de NaOH. Aqui V = 2,50 mmol / 0,100 M = 25,0 mL, que es el volumen pedido en la parte a)." },
          { paso: "En equivalencia queda solo acetato: [CH3COO^-] = 2,50 mmol / 50,0 mL = 0,0500 M.", porque: "En equivalencia todo el acido se convirtio en acetato, asi que solo queda la base conjugada. Su concentracion se obtiene dividiendo los 2,50 mmol de acetato por el volumen total, que es 25,0 + 25,0 = 50,0 mL. Olvidar sumar el volumen de NaOH agregado es un error frecuente, y daria una concentracion del doble." },
          { paso: "Kb = Kw / Ka = 1,0 x 10^-14 / 1,8 x 10^-5 = 5,6 x 10^-10. [OH^-] = raiz(Kb x C) = raiz(5,6 x 10^-10 x 0,0500) = 5,3 x 10^-6 M.", porque: "El acetato es una base debil que reacciona con el agua, y su Kb se obtiene como Kb = Kw / Ka = 1,0 x 10^-14 / 1,8 x 10^-5. Con Kb = 5,6 x 10^-10 y C = 0,0500 M usamos [OH^-] = raiz(Kb x C), la aproximacion de base debil. Entonces raiz(5,6 x 10^-10 x 0,0500) = 5,3 x 10^-6 M, y el pH de equivalencia resulta basico y no 7." },
          { paso: "pOH = 5,28; pH = 14,00 - 5,28 = 8,72.", porque: "Calculamos pOH = -log[OH^-] a partir de la concentracion de OH^- ya obtenida, y el resultado es 5,28. A 25 C pH + pOH = 14, por eso el pH se obtiene restando el pOH de 14,00: 14,00 - 5,28 = 8,72. Ese pH basico es el esperado en la equivalencia de un acido debil con una base fuerte." }
        ],
        resultado: "V(NaOH) = 25,0 mL; pH de equivalencia = 8,72"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "El pH de equivalencia (8,72) cae dentro de la zona de vire de la fenolftaleina (8,2 a 10,0) y fuera de la del anaranjado de metilo (3,1 a 4,4).", porque: "Un indicador debe cambiar de color cerca del pH de equivalencia, para que el punto final coincida con el volumen esperado. Como 8,72 queda dentro del rango 8,2 a 10,0 de la fenolftaleina, ese indicador es el adecuado. El anaranjado de metilo vira entre 3,1 y 4,4, lejos de 8,72, por eso no sirve en este caso." }
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
          { paso: "Hay dos fuentes de H^+: el HCl (fuerte, se ioniza por completo) y el acido acetico (debil). Sea y la [H^+] que aporta el acido acetico: [H^+] = 1,0 x 10^-3 + y.", porque: "Hay dos fuentes de H^+: el HCl, que se ioniza por completo, y el acido acetico, que se ioniza solo en parte. Definimos y como la [H^+] que aporta el acido acetico, y el total es la suma de ambos, 1,0 x 10^-3 + y. Sumar todas las fuentes de H^+ es el punto central de este tipo de mezcla." },
          { paso: "Ka = (1,0 x 10^-3 + y) y / (0,10 - y) = 1,8 x 10^-5. Como y no es despreciable frente a 1,0 x 10^-3, se resuelve la cuadratica: y^2 + 1,02 x 10^-3 y - 1,8 x 10^-6 = 0, de donde y = 9,3 x 10^-4 M.", porque: "Escribimos Ka con el H^+ total en el numerador, que incluye el aporte del HCl, y el acetato y. En el denominador va lo que queda sin disociar, 0,10 - y. Como y es del mismo orden que 1,0 x 10^-3, no puede despreciarse, y por eso reordenamos la ecuacion como cuadratica y obtenemos y = 9,3 x 10^-4 M." },
          { paso: "[H^+] = 1,0 x 10^-3 + 9,3 x 10^-4 = 1,9 x 10^-3 M. pH = -log(1,9 x 10^-3) = 2,72.", porque: "La concentracion total de H^+ es la suma del aporte del HCl y del aporte del acido acetico, y es la que define el pH. Sumamos 1,0 x 10^-3 + 9,3 x 10^-4 = 1,9 x 10^-3 M, y con -log de ese valor obtenemos 2,72. Verificamos que este pH sea menor que el de cada acido por separado, porque las dos fuentes suman H^+." }
        ],
        resultado: "pH = 2,72"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "En la mezcla: alpha = y / 0,10 = 9,3 x 10^-3 (0,93 %).", porque: "alpha es la fraccion del acido acetico que se ionizo. En la mezcla usamos y, que es lo ionizado del acetico, dividido por su concentracion inicial 0,10 M, con lo que alpha = 9,3 x 10^-3, es decir 0,93 %. No usamos la [H^+] total, porque incluye el H^+ que aporta el HCl." },
          { paso: "Puro: alpha = raiz(Ka / C) = raiz(1,8 x 10^-5 / 0,10) = 1,3 x 10^-2 (1,34 %). Verificacion: 1,34 % < 5 %.", porque: "En la solucion pura el acetico es el unico acido, y usamos alpha = raiz(Ka / C) con Ka = 1,8 x 10^-5 y C = 0,10 M. Obtenemos raiz(1,8 x 10^-5 / 0,10) = 1,3 x 10^-2, es decir 1,34 %. Verificamos que el resultado sea menor que 5 %, condicion para que esa aproximacion sea valida." },
          { paso: "En la mezcla el acido acetico se ioniza menos: el H^+ del HCl desplaza el equilibrio hacia la forma sin disociar.", porque: "Es un efecto de ion comun: el H^+ del HCl aumenta la concentracion de H3O^+ y, segun Le Chatelier, el equilibrio CH3COOH <=> CH3COO^- + H^+ se desplaza hacia la izquierda. Por eso el acetico se ioniza menos en la mezcla que solo. Entonces la comparacion de las dos alphas calculadas responde la parte b)." }
        ],
        resultado: "alpha en la mezcla = 0,93 % < alpha puro = 1,34 %"
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
          { paso: "[OH^-] = raiz(Kb x C) = raiz(1,8 x 10^-5 x 0,10) = 1,34 x 10^-3 M. Verificacion: 1,3 % < 5 %.", porque: "NH3 es una base debil, asi que usamos la aproximacion [OH^-] = raiz(Kb x C), que sale de despreciar x frente a C. Con Kb = 1,8 x 10^-5 y C = 0,10 M, obtenemos raiz(1,8 x 10^-5 x 0,10) = 1,34 x 10^-3 M. La verificacion da 1,3 %, menor que 5 %, y confirma que la aproximacion es valida." },
          { paso: "pOH = 2,87; pH = 14,00 - 2,87 = 11,13.", porque: "Calculamos pOH = -log[OH^-] a partir de la concentracion de OH^- obtenida, y el resultado es 2,87. Como a 25 C pH + pOH = 14, restamos ese pOH de 14,00 para obtener el pH: 14,00 - 2,87 = 11,13. Un pH mayor que 7 es basico, como corresponde a una solucion de una base." }
        ],
        resultado: "pH = 11,13"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "n(NH4Cl) = 5,35 g / 53,5 g/mol = 0,100 mol; [NH4^+] = 0,100 mol / 1,00 L = 0,10 M.", porque: "Calculamos los moles de sal con n = m / M: 5,35 g divididos por 53,5 g/mol dan 0,100 mol. Como el volumen es 1,00 L y no cambia al agregar la sal, la concentracion de NH4^+ es 0,100 mol / 1,00 L = 0,10 M. Esta cantidad es la que aporta el acido conjugado a la solucion." },
          { paso: "Solucion reguladora de base debil: pOH = pKb + log([NH4^+] / [NH3]) = 4,74 + log(0,10 / 0,10) = 4,74. pH = 14,00 - 4,74 = 9,26.", porque: "Como hay una base debil y su sal, que aporta el acido conjugado, la solucion es reguladora. Usamos Henderson-Hasselbalch para bases, pOH = pKb + log([NH4^+] / [NH3]), con [NH4^+] = 0,10 M y [NH3] = 0,10 M. Como el cociente es 1, el logaritmo vale 0 y pOH = pKb = 4,74. Restando ese pOH de 14,00 obtenemos pH = 9,26." }
        ],
        resultado: "pH = 9,26"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "Al diluir 10 veces, [NH3] y [NH4^+] bajan 10 veces cada una, pero su cociente no cambia. El pH casi no varia.", porque: "En Henderson-Hasselbalch aparece el cociente entre sal y base, y no sus valores absolutos. Al diluir 10 veces, [NH4^+] y [NH3] bajan en el mismo factor, por lo que su cociente sigue igual. Entonces el pH de la solucion reguladora casi no cambia al diluir, aunque la concentracion total si baje." }
        ],
        resultado: "El pH no cambia de forma apreciable (el cociente se mantiene)"
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
          { paso: "Tabla: [H3O^+] = [lactato^-] = x; [acido lactico] = 0,100 - x.", porque: "Como el acido lactico es debil, planteamos la tabla de equilibrio: x de H3O^+ y de lactato, y 0,100 - x de acido sin disociar, a partir de la concentracion inicial de 0,100 M. La estequiometria 1:1 hace que los dos productos tengan la misma concentracion. Por eso Ka queda expresada con una sola incognita." },
          { paso: "Aproximacion simple: x = raiz(1,38 x 10^-4 x 0,100) = 3,7 x 10^-3 M; x / C = 3,7 % < 5 %, por lo que seria valida.", porque: "Usamos la aproximacion simple como primera estimacion, despreciando x frente a C = 0,100 M en el denominador. Con Ka = 1,38 x 10^-4 obtenemos x = raiz(1,38 x 10^-4 x 0,100) = 3,7 x 10^-3 M. El cociente x / C = 3,7 % queda por debajo del 5 %, por eso la aproximacion parece valida. Para el pH final conviene el calculo exacto." },
          { paso: "Como el resultado final debe ser exacto, se resuelve la cuadratica: x^2 + 1,38 x 10^-4 x - 1,38 x 10^-5 = 0, de donde x = 3,65 x 10^-3 M.", porque: "Como el resultado final debe ser exacto, reordenamos Ka = x^2 / (0,100 - x) como x^2 + Ka x - Ka C = 0. Reemplazamos Ka = 1,38 x 10^-4, y queda x^2 + 1,38 x 10^-4 x - 1,38 x 10^-5 = 0. Con la formula resolvente tomamos la raiz positiva y obtenemos x = 3,65 x 10^-3 M. La diferencia con la aproximacion cambia el pH en la segunda cifra decimal, por eso importa." },
          { paso: "pH = -log(3,65 x 10^-3) = 2,44.", porque: "El pH se calcula con -log del valor exacto de [H3O^+], que es 3,65 x 10^-3 M. Calculamos -log(3,65 x 10^-3) = 2,44, redondeado a 2 decimales. Conviene verificar el redondeo con la calculadora antes de informarlo." }
        ],
        resultado: "pH = 2,44 ([H3O^+] = 3,65 x 10^-3 M)"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "n(acido) = 0,100 M x 25,0 mL = 2,50 mmol. En la mitad de la neutralizacion se agregan 1,25 mmol de NaOH, es decir V = 1,25 mmol / 0,100 M = 12,5 mL.", porque: "La mitad de la neutralizacion es el punto en el que se agrego la mitad de los moles necesarios para llegar a la equivalencia. Como n(acido) = 0,100 M x 25,0 mL = 2,50 mmol, la mitad son 1,25 mmol de NaOH. Con V = n / M obtenemos 1,25 mmol / 0,100 M = 12,5 mL, y en ese punto la mitad del acido ya se convirtio en lactato." },
          { paso: "En ese punto [acido] = [lactato^-], asi que pH = pKa = -log(1,38 x 10^-4) = 3,86.", porque: "En la mitad de la neutralizacion las concentraciones de acido y de su base conjugada son iguales. Como el cociente vale 1, el logaritmo de Henderson-Hasselbalch es 0 y el pH queda igual al pKa. Con Ka = 1,38 x 10^-4 calculamos pKa = -log(1,38 x 10^-4) = 3,86, que es el pH en ese punto." }
        ],
        resultado: "V(NaOH) = 12,5 mL; pH = 3,86"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "Equivalencia: n(NaOH) = 2,50 mmol, V = 2,50 mmol / 0,100 M = 25,0 mL. Volumen total = 50,0 mL, [lactato^-] = 2,50 mmol / 50,0 mL = 0,0500 M.", porque: "En equivalencia todo el acido se convirtio en lactato, y el volumen de NaOH necesario es 25,0 mL. Su concentracion se calcula dividiendo los 2,50 mmol por el volumen total de 50,0 mL, que incluye los 25,0 mL de NaOH, y da 0,0500 M. Usar solo los 25,0 mL de la muestra daria una concentracion doble y un pH incorrecto." },
          { paso: "Kb = Kw / Ka = 1,0 x 10^-14 / 1,38 x 10^-4 = 7,2 x 10^-11. [OH^-] = raiz(7,2 x 10^-11 x 0,0500) = 1,9 x 10^-6 M; pOH = 5,72; pH = 8,28.", porque: "El lactato es una base debil, y su Kb se obtiene de Kb = Kw / Ka, con Ka = 1,38 x 10^-4. Usando C = 0,0500 M y Kb = 7,2 x 10^-11 calculamos [OH^-] = raiz(7,2 x 10^-11 x 0,0500) = 1,9 x 10^-6 M. Luego pOH = 5,72, y a partir de ese valor se obtiene el pH = 8,28. Verificamos que ese pH sea basico, de acuerdo con la hidrolisis del lactato." }
        ],
        resultado: "V(NaOH) = 25,0 mL; pH de equivalencia = 8,28"
      },
      {
        parte: "d)",
        pasos: [
          { paso: "El pH de equivalencia (8,28) cae dentro de la zona de vire de la fenolftaleina (8,2 a 10,0) y no dentro de la del anaranjado de metilo (3,1 a 4,4).", porque: "El indicador debe cambiar de color cerca del pH de equivalencia, para que el punto final observado coincida con el volumen esperado. Como 8,28 esta dentro del rango 8,2 a 10,0 de la fenolftaleina, ese indicador es el adecuado. El anaranjado de metilo vira entre 3,1 y 4,4, lejos de ese pH, por lo que no sirve." }
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
