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
          { paso: "Expresion de Kc: Kc = [CO]^2 / [CO2]. El C(s) no aparece en la expresion.", porque: "Kc solo incluye gases y solutos, con exponente igual al coeficiente de la ecuacion balanceada. El carbono solido tiene concentracion constante y no entra." },
          { paso: "[CO2] = 0,100 mol / 2,00 L = 0,0500 M; [CO] = 0,400 mol / 2,00 L = 0,200 M.", porque: "Kc se calcula con concentraciones molares, y la concentracion es moles divididos por el volumen del recipiente." },
          { paso: "Kc = (0,200)^2 / 0,0500 = 0,0400 / 0,0500 = 0,800.", porque: "Se reemplazan las concentraciones de equilibrio en la expresion; el exponente 2 del CO viene del coeficiente 2 de la ecuacion." }
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
          { paso: "[N2] = 0,200 / 5,00 = 0,0400 M; [H2] = 0,300 / 5,00 = 0,0600 M; [NH3] = 0,400 / 5,00 = 0,0800 M.", porque: "Kc se escribe con concentraciones, por eso se dividen los moles por el volumen." },
          { paso: "Kc = [NH3]^2 / ([N2] x [H2]^3) = (0,0800)^2 / (0,0400 x (0,0600)^3).", porque: "La expresion sale de la ecuacion balanceada: productos sobre reactivos, con los coeficientes como exponentes." },
          { paso: "Kc = 0,00640 / (0,0400 x 2,16 x 10^-4) = 0,00640 / 8,64 x 10^-6 = 7,41 x 10^2.", porque: "Primero se multiplican los terminos del denominador y despues se divide. Se mantienen 3 cifras significativas porque los datos tienen 3." }
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
          { paso: "Concentraciones iniciales: [H2] = [CO2] = [CO] = 0,20 M; [H2O] = 0,050 M.", porque: "Q usa las concentraciones del momento en que se mezclan, no las de equilibrio." },
          { paso: "Q = [H2O][CO] / ([H2][CO2]) = (0,050 x 0,20) / (0,20 x 0,20) = 0,25.", porque: "Q tiene la misma forma que Kc, pero con concentraciones actuales." },
          { paso: "Q = 0,25 < Kc = 1,6.", porque: "Si Q < Kc, el cociente tiene poco producto respecto del equilibrio, asi que el sistema debe formar mas producto." },
          { paso: "El sistema evoluciona hacia la derecha (se forman H2O y CO).", porque: "El sistema avanza para aumentar el numerador de Q hasta igualar Kc." }
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
          { paso: "Solo el CO2 es gas: Delta n = 1 - 0 = 1.", porque: "Delta n cuenta solo los moles de gas. Los solidos no entran en Kp ni en Kc." },
          { paso: "Kp = Kc (RT)^Delta n, con Delta n = 1, entonces Kc = Kp / (RT).", porque: "Para gases ideales, P = nRT/V: la relacion entre presiones y concentraciones introduce RT, y el exponente es Delta n." },
          { paso: "RT = 0,0821 L atm/(mol K) x 800 K = 65,7 L atm/mol.", porque: "Como las presiones estan en atm, R debe usarse en L atm/(mol K)." },
          { paso: "Kc = 0,236 atm / 65,7 L atm/mol = 3,59 x 10^-3 mol/L.", porque: "Las unidades atm se cancelan y quedan mol/L, que son las unidades de Kc cuando Delta n = 1." }
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
          { paso: "a) Al agregar H2 aumenta [H2]. El sistema consume H2 y forma NH3: se desplaza hacia la derecha. Kc no cambia.", porque: "Principio de Le Chatelier: el sistema contrarresta el agregado de reactivo. Kc depende solo de la temperatura." },
          { paso: "b) Al reducir el volumen sube la presion: el sistema avanza hacia el lado con menos moles de gas (4 mol de reactivos contra 2 mol de NH3), es decir hacia la derecha. Kc no cambia.", porque: "La presion depende de moles por volumen; el lado con menos moles gaseosos disminuye la presion total." },
          { paso: "c) Como la reaccion directa es exotermica (Delta H < 0), el calor es un producto. Al subir T el sistema consume ese calor: se desplaza hacia la izquierda y Kc disminuye.", porque: "En una reaccion exotermica la temperatura funciona como un producto; subirla desfavorece la formacion de NH3 y baja K." },
          { paso: "d) El catalizador acelera por igual la reaccion directa y la inversa. No desplaza el equilibrio y Kc no cambia.", porque: "El catalizador baja la energia de activacion de ambos sentidos: solo se llega al equilibrio mas rapido, sin cambiar su composicion." }
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
          { paso: "[NOCl]0 = 0,600 mol / 2,00 L = 0,300 M. Se consume el 25,0 %: 0,25 x 0,300 = 0,0750 M.", porque: "El porcentaje de disociacion se aplica a la concentracion inicial del reactivo." },
          { paso: "Por la estequiometria 2:2:1, [NO] = 0,0750 M y [Cl2] = 0,0750 / 2 = 0,0375 M. [NOCl] en equilibrio = 0,300 - 0,0750 = 0,225 M.", porque: "Cada 2 mol de NOCl consumidos generan 2 mol de NO y 1 mol de Cl2; el NOCl que queda es el inicial menos el consumido." },
          { paso: "Kc = [NO]^2 [Cl2] / [NOCl]^2 = (0,0750)^2 (0,0375) / (0,225)^2 = 4,17 x 10^-3 mol/L.", porque: "Se aplica la expresion de Kc de la ecuacion balanceada con las concentraciones de equilibrio." }
        ],
        resultado: "Kc = 4,17 x 10^-3 mol/L"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Delta n = (2 + 1) - 2 = 1.", porque: "Delta n es la suma de los coeficientes gaseosos de productos menos la de reactivos." },
          { paso: "Kp = Kc (RT)^Delta n = 4,17 x 10^-3 x (0,0821 x 400) = 4,17 x 10^-3 x 32,8 = 0,137 atm.", porque: "Relacion Kp-Kc para gases ideales, con R en L atm/(mol K) y T en kelvin." }
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
          { paso: "Tabla de presiones: P(HI) = 1,00 - 2x; P(H2) = P(I2) = x.", porque: "Por la estequiometria 2:1:1, cada 2 atm de HI que reaccionan forman 1 atm de H2 y 1 atm de I2." },
          { paso: "Kp = P(H2) P(I2) / P(HI)^2 = x^2 / (1,00 - 2x)^2 = 0,0156.", porque: "Kp usa presiones parciales en atm, y la expresion sale de la ecuacion balanceada." },
          { paso: "Como ambos miembros son cuadrados: x / (1,00 - 2x) = raiz(0,0156) = 0,1249.", porque: "Sacar raiz cuadrada de ambos lados evita resolver la cuadratica completa." },
          { paso: "x = 0,1249 (1,00 - 2x) -> x = 0,1249 / 1,2498 = 0,09994 atm. Entonces P(H2) = P(I2) = 0,0999 atm y P(HI) = 1,00 - 0,1999 = 0,800 atm.", porque: "Se despeja x y se reemplaza. Verificacion: (0,0999)^2 / (0,800)^2 = 0,0156." }
        ],
        resultado: "P(H2) = P(I2) = 0,0999 atm; P(HI) = 0,800 atm"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Delta n = 2 - 2 = 0, asi que el numero total de moles no cambia y la presion total queda en 1,00 atm (0,800 + 0,0999 + 0,0999 = 1,00).", porque: "Con Delta n = 0 la presion total no varia durante la reaccion." },
          { paso: "x(H2) = P(H2) / P_total = 0,0999 / 1,00 = 0,0999.", porque: "La fraccion molar de un gas es su presion parcial dividida por la presion total (ley de Dalton)." }
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
          { paso: "Tabla (mol/L, con V = 1,00 L): [SO2Cl2] = 0,100 - x; [SO2] = x; [Cl2] = x.", porque: "Con V = 1,00 L los moles y las concentraciones tienen el mismo valor numerico. Al inicio no hay productos, y la estequiometria es 1:1:1." },
          { paso: "Kc = x^2 / (0,100 - x) = 0,0500.", porque: "Expresion de Kc con coeficientes 1 en la ecuacion balanceada." },
          { paso: "x^2 + 0,0500 x - 0,00500 = 0, de donde x = [-0,0500 + raiz(0,0500^2 + 4 x 0,00500)] / 2 = 0,0500 M.", porque: "Es una cuadratica. Se toma la raiz positiva, porque una concentracion no puede ser negativa." },
          { paso: "Equilibrio: [SO2Cl2] = 0,0500 M; [SO2] = [Cl2] = 0,0500 M. Verificacion: 0,0500^2 / 0,0500 = 0,0500 = Kc.", porque: "Se comprueba el resultado reemplazandolo en la expresion de Kc." }
        ],
        resultado: "[SO2Cl2] = [SO2] = [Cl2] = 0,0500 M"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Al agregar Cl2 sube su concentracion. El sistema consume el Cl2 agregado y forma SO2Cl2: el equilibrio se desplaza hacia los reactivos y [SO2Cl2] aumenta.", porque: "Principio de Le Chatelier: el sistema contrarresta el agregado de un producto." },
          { paso: "Kc no cambia.", porque: "Kc depende solo de la temperatura, que se mantiene constante." }
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
          { paso: "P(NH3) = P(H2S) = x, por la estequiometria 1:1. El solido no aparece en Kp.", porque: "Un solido no aporta presion ni entra en la expresion de Kp." },
          { paso: "Kp = P(NH3) P(H2S) = x^2 = 0,0400 atm^2, entonces x = 0,200 atm.", porque: "Las dos presiones son iguales y Kp es el producto de ambas." },
          { paso: "P total = 0,200 + 0,200 = 0,400 atm.", porque: "Dalton: la presion total es la suma de las presiones parciales de los gases." }
        ],
        resultado: "P total = 0,400 atm"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Delta n = 2 - 0 = 2. Kc = Kp / (RT)^2 = 0,0400 / (0,0821 x 298)^2 = 0,0400 / (24,47)^2 = 6,68 x 10^-5 mol^2/L^2.", porque: "Kp = Kc (RT)^Delta n; se despeja Kc. Las unidades son M^2 porque Delta n = 2." },
          { paso: "Al duplicar el volumen, la presion de los gases tiende a bajar, pero el solido se descompone y repone gas hasta que P(NH3) P(H2S) vuelve a 0,0400 atm^2. La presion total sigue en 0,400 atm.", porque: "Con solido en exceso, el equilibrio fija el producto de presiones (Kp), no el volumen. La presion total no depende del volumen." }
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
          { paso: "Concentraciones de equilibrio (experimento 1): [H2] = [I2] = 0,024 / 2,00 = 0,0120 M; [HI] = 0,192 / 2,00 = 0,0960 M.", porque: "Kc usa concentraciones molares; dividir por el volumen comun de 2,00 L." },
          { paso: "Kc = [HI]^2 / ([H2][I2]) = (0,0960)^2 / (0,0120 x 0,0120) = 64,0.", porque: "Como Delta n = 0, Kc es adimensional y sus unidades se cancelan." }
        ],
        resultado: "Kc = 64,0"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Concentraciones iniciales del experimento 2: [H2] = [I2] = 0,040 / 2,00 = 0,020 M; [HI] = 0,80 / 2,00 = 0,40 M.", porque: "Q se calcula con las concentraciones del momento de la mezcla, no con las del experimento 1." },
          { paso: "Q = (0,40)^2 / (0,020 x 0,020) = 0,16 / 4,0 x 10^-4 = 4,0 x 10^2.", porque: "Misma forma que Kc, con las concentraciones actuales." },
          { paso: "Q = 400 > Kc = 64: el sistema evoluciona hacia los reactivos (se forma H2 e I2 a partir de HI).", porque: "Si Q > Kc hay demasiado producto, y el sistema lo consume para llegar al equilibrio." }
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
          { paso: "Tabla: [N2O4] = 0,050 - x; [NO2] = 2x.", porque: "Por la estequiometria 1:2, cada mol de N2O4 que se disocia forma 2 mol de NO2." },
          { paso: "Kc = (2x)^2 / (0,050 - x) = 4,6 x 10^-3.", porque: "Expresion de Kc con los coeficientes como exponentes." },
          { paso: "Aproximacion rapida: si x << 0,050, 4x^2 / 0,050 = 4,6 x 10^-3, de donde x = 7,6 x 10^-3 M.", porque: "Es un primer calculo para estimar x. Todavia no se puede usar: falta la verificacion." },
          { paso: "Verificacion: x / 0,050 = 0,15 = 15 % > 5 %. La aproximacion NO es valida.", porque: "El criterio x/C < 5 % indica si se puede despreciar x frente a C. Con 15 % el error es grande." },
          { paso: "Se resuelve la cuadratica 4x^2 + 4,6 x 10^-3 x - 2,30 x 10^-4 = 0, de donde x = 7,03 x 10^-3 M (raiz positiva).", porque: "Sin aproximacion, Kc se transforma en una cuadratica, y se elige la raiz positiva." },
          { paso: "Equilibrio: [NO2] = 2x = 0,0141 M; [N2O4] = 0,050 - 0,00703 = 0,0430 M.", porque: "Se reemplaza x en las expresiones de la tabla." }
        ],
        resultado: "[N2O4] = 0,0430 M; [NO2] = 0,0141 M (la aproximacion no es valida)"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "alpha = x / C = 7,03 x 10^-3 / 0,050 = 0,141 (14,1 %).", porque: "El grado de disociacion es la fraccion del reactivo inicial que se disocio. Se usa x, no [NO2]." }
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
          { paso: "[NH3] en equilibrio = 1,20 / 4,00 = 0,300 M.", porque: "Concentracion = moles / volumen." },
          { paso: "Se consumieron 2,00 - 1,20 = 0,80 mol de NH3. Por la estequiometria 2:1:3 se formaron 0,40 mol de N2 y 1,20 mol de H2.", porque: "Por cada 2 mol de NH3 que reaccionan salen 1 mol de N2 y 3 mol de H2." },
          { paso: "[N2] = 0,40 / 4,00 = 0,100 M; [H2] = 1,20 / 4,00 = 0,300 M. Kc = [N2][H2]^3 / [NH3]^2 = 0,100 x (0,300)^3 / (0,300)^2 = 0,0300 mol^2/L^2.", porque: "Se reemplazan las concentraciones de equilibrio en la expresion de Kc con los coeficientes como exponentes." }
        ],
        resultado: "Kc = 0,0300 mol^2/L^2"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Delta n = (1 + 3) - 2 = 2.", porque: "Solo se cuentan los moles gaseosos de la ecuacion balanceada." },
          { paso: "Kp = Kc (RT)^2 = 0,0300 x (0,0821 x 500)^2 = 0,0300 x (41,05)^2 = 50,6 atm^2.", porque: "Kp = Kc (RT)^Delta n con R en L atm/(mol K)." }
        ],
        resultado: "Kp = 50,6 atm^2"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "Al reducir el volumen a 2,00 L, las concentraciones se duplican en el instante: [NH3] = 0,600 M; [N2] = 0,200 M; [H2] = 0,600 M.", porque: "La concentracion es moles / volumen; al reducir el volumen a la mitad, cada concentracion se duplica sin que cambien los moles." },
          { paso: "Q = [N2][H2]^3 / [NH3]^2 = 0,200 x (0,600)^3 / (0,600)^2 = 0,120 mol^2/L^2.", porque: "Q se calcula con las concentraciones actuales, antes de que el sistema reaccione." },
          { paso: "Q = 0,120 > Kc = 0,0300: el sistema evoluciona hacia los reactivos (NH3).", porque: "Al reducir el volumen, el equilibrio se desplaza hacia el lado con menos moles de gas, que es el del NH3 (2 mol frente a 4 mol)." }
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
          { paso: "La reaccion pedida es la inversa de la primera: Kc = 1 / Kc1 = 1 / 0,040 = 25.", porque: "Invertir una reaccion invierte la expresion de Kc, y por eso el valor pasa a ser su reciproco." }
        ],
        resultado: "Kc = 25 (adimensional, Delta n = 0)"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "La reaccion pedida es la primera dividida por 2. Kc = Kc1^(1/2) = raiz(0,040) = 0,20.", porque: "Si los coeficientes se multiplican por n, Kc queda elevado a n; al dividir por 2 se saca raiz cuadrada." }
        ],
        resultado: "Kc = 0,20"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "Sumar las reacciones: N2 + O2 + 2 NO + O2 -> 2 NO + 2 NO2. Se cancelan 2 NO y queda N2(g) + 2 O2(g) <=> 2 NO2(g).", porque: "Las especies que aparecen a ambos lados se cancelan al sumar reacciones." },
          { paso: "Kc = Kc1 x Kc2 = 0,040 x 2,0 x 10^2 = 8,0 M^-1.", porque: "Al sumar reacciones se multiplican las constantes. Las unidades son M^-1 porque Delta n = 2 - 3 = -1." }
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
          { paso: "Concentraciones iniciales (V = 1,00 L): [CO] = [H2O] = 0,10 M; [CO2] = [H2] = 0,30 M.", porque: "Con V = 1,00 L, los moles y las concentraciones tienen el mismo valor numerico." },
          { paso: "Q = [CO2][H2] / ([CO][H2O]) = (0,30 x 0,30) / (0,10 x 0,10) = 9,0.", porque: "Q se calcula con las concentraciones actuales de productos y reactivos." },
          { paso: "Q = 9,0 > Kc = 5,0: el sistema evoluciona hacia los reactivos (CO y H2O).", porque: "Si Q > Kc, hay demasiado producto y el sistema lo consume." }
        ],
        resultado: "Q = 9,0 > Kc; evoluciona hacia CO y H2O"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Sea y los mol/L de CO2 que pasan a reactivos. Tabla: [CO] = [H2O] = 0,10 + y; [CO2] = [H2] = 0,30 - y.", porque: "Por la estequiometria 1:1:1:1, lo que se forma de CO y H2O es igual a lo que se consume de CO2 y H2." },
          { paso: "Kc = (0,30 - y)^2 / (0,10 + y)^2 = 5,0, entonces (0,30 - y) / (0,10 + y) = raiz(5,0) = 2,236.", porque: "Ambos miembros son cuadrados, asi que se extrae raiz cuadrada (sin redondear la raiz antes de seguir)." },
          { paso: "y = (0,30 - 2,236 x 0,10) / (1 + 2,236) = 0,0236 M.", porque: "Se despeja y de la ecuacion lineal." },
          { paso: "Equilibrio: [CO] = [H2O] = 0,124 M; [CO2] = [H2] = 0,276 M. Verificacion: (0,276)^2 / (0,124)^2 = 5,0.", porque: "Se comprueba el resultado reemplazandolo en Kc." }
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
          { paso: "V = 500 cm^3 = 0,500 L. [CO]0 = [Cl2]0 = 0,0200 / 0,500 = 0,0400 M.", porque: "Hay que pasar cm^3 a L antes de calcular concentraciones. Usar 500 directamente daria un error de 1000 veces." },
          { paso: "Tabla: [COCl2] = y; [CO] = [Cl2] = 0,0400 - y.", porque: "La estequiometria 1:1:1 indica que se consume lo mismo de CO y de Cl2 y se forma la misma cantidad de COCl2." },
          { paso: "Kc = y / (0,0400 - y)^2 = 250, que se reordena como 250 y^2 - 21 y + 0,400 = 0.", porque: "Expresion de Kc (el COCl2 esta en el numerador con exponente 1 y los reactivos con exponente 1 cada uno)." },
          { paso: "y = [21 - raiz(41)] / 500 = 0,0292 M (la otra raiz da [CO] negativa y se descarta).", porque: "Se resuelve la cuadratica y se elige la solucion que deja concentraciones positivas." },
          { paso: "Equilibrio: [COCl2] = 0,0292 M; [CO] = [Cl2] = 0,0400 - 0,0292 = 0,0108 M.", porque: "Se reemplaza y en la tabla." }
        ],
        resultado: "[COCl2] = 0,0292 M; [CO] = [Cl2] = 0,0108 M"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Delta n = 1 - 2 = -1. Kp = Kc (RT)^Delta n = 250 / (0,0821 x 600) = 250 / 49,3 = 5,08 atm^-1.", porque: "Con Delta n negativo, el factor (RT)^-1 aparece en el denominador. Las unidades pasan de M^-1 a atm^-1." }
        ],
        resultado: "Kp = 5,08 atm^-1"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "Al reducir el volumen se desplaza hacia el lado con menos moles de gas: COCl2 (1 mol) frente a CO + Cl2 (2 mol). El equilibrio se desplaza hacia el COCl2.", porque: "Mayor presion favorece el lado de menor cantidad de moles de gas." },
          { paso: "Kc no cambia, porque la temperatura se mantiene constante.", porque: "Kc depende solo de la temperatura." }
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
          { paso: "Concentraciones iniciales (V = 1,00 L): [H2]0 = 0,200 M; [Cl2]0 = 0,100 M; [HCl]0 = 0. Tabla: [H2] = 0,200 - x; [Cl2] = 0,100 - x; [HCl] = 2x.", porque: "Por la estequiometria 1:1:2, cada x de H2 que reacciona forma 2x de HCl." },
          { paso: "Kc = (2x)^2 / ((0,200 - x)(0,100 - x)) = 2,0, que se reordena como 2x^2 + 0,60 x - 0,040 = 0.", porque: "Expresion de Kc con el coeficiente 2 del HCl como exponente." },
          { paso: "x = [-0,60 + raiz(0,60^2 + 4 x 2 x 0,040)] / (2 x 2) = 0,0562 M.", porque: "Es una cuadratica; se toma la raiz positiva porque las concentraciones son positivas." },
          { paso: "Equilibrio: [HCl] = 2 x 0,0562 = 0,112 M; [H2] = 0,144 M; [Cl2] = 0,0438 M. Verificacion: 0,112^2 / (0,144 x 0,0438) = 2,0.", porque: "Se comprueba reemplazando en Kc." }
        ],
        resultado: "[HCl] = 0,112 M; [H2] = 0,144 M; [Cl2] = 0,0438 M"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Delta n = 2 - 2 = 0. Kp = Kc (RT)^0 = Kc = 2,0.", porque: "Con Delta n = 0 el factor (RT)^Delta n vale 1: no hace falta R ni T para pasar de Kc a Kp, y Kp = Kc." }
        ],
        resultado: "Kp = 2,0 (igual a Kc, porque Delta n = 0)"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "La reaccion directa es exotermica (Delta H < 0): el calor es un producto. Al subir T el sistema consume ese calor, se desplaza hacia los reactivos y Kc disminuye.", porque: "Para reacciones exotermicas, subir T disminuye K (principio de Le Chatelier aplicado a la temperatura)." },
          { paso: "Por lo tanto el rendimiento de HCl disminuye al aumentar la temperatura.", porque: "Un equilibrio desplazado hacia reactivos tiene menos HCl en el equilibrio." }
        ],
        resultado: "El rendimiento de HCl disminuye al subir T"
      },
      {
        parte: "d)",
        pasos: [
          { paso: "Al reducir V, las concentraciones aumentan, pero como Delta n = 0 el numero de moles gaseosos es igual en ambos lados. La presion no favorece ningun sentido.", porque: "Un cambio de presion solo desplaza el equilibrio cuando hay variacion de moles gaseosos." },
          { paso: "La composicion de equilibrio no se modifica.", porque: "Con Delta n = 0 el cociente de concentraciones no obliga a ningun desplazamiento al cambiar el volumen." }
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
          { paso: "HCl es un acido fuerte: se disocia totalmente, HCl + H2O -> H3O^+ + Cl^-. Entonces [H3O^+] = 2,5 x 10^-3 M.", porque: "En un electrolito fuerte no hay equilibrio: cada HCl produce un H3O^+." },
          { paso: "pH = -log(2,5 x 10^-3) = 2,60.", porque: "pH = -log[H3O^+] por definicion." },
          { paso: "Verificacion: el agua aporta solo 10^-7 M de H3O^+, despreciable frente a 2,5 x 10^-3 M.", porque: "Cuando el acido es mucho mayor que 10^-7 M, su aporte domina el pH." }
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
          { paso: "NaOH es una base fuerte: se disocia totalmente, por lo que [OH^-] = 0,0040 M.", porque: "Cada NaOH libera un OH^- y no hay equilibrio que plantear." },
          { paso: "pOH = -log(0,0040) = 2,40.", porque: "pOH = -log[OH^-] por definicion." },
          { paso: "pH = 14,00 - 2,40 = 11,60.", porque: "A 25 C, pH + pOH = 14, porque Kw = 1,0 x 10^-14." }
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
          { paso: "Equilibrio: CH3COOH + H2O <=> CH3COO^- + H3O^+. Tabla: [H3O^+] = x; [CH3COO^-] = x; [CH3COOH] = 0,10 - x.", porque: "Es un acido debil: se ioniza parcialmente, asi que se plantea un equilibrio y se usa Ka." },
          { paso: "Ka = x^2 / (0,10 - x) = 1,8 x 10^-5. Aproximacion x << 0,10: x = raiz(1,8 x 10^-5 x 0,10) = 1,34 x 10^-3 M.", porque: "Como Ka es chica, x es pequeno frente a 0,10 y se puede simplificar el denominador. Conserve 3 cifras en x para no perder precision en el pH." },
          { paso: "Verificacion: x / 0,10 = 1,3 % < 5 %. La aproximacion es valida.", porque: "Si la ionizacion es menor que el 5 %, el error de despreciar x es pequeno." },
          { paso: "pH = -log(1,34 x 10^-3) = 2,87.", porque: "pH = -log[H3O^+] con la concentracion de equilibrio." }
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
          { paso: "pOH = 14,00 - 11,13 = 2,87, entonces [OH^-] = 10^-2,87 = 1,35 x 10^-3 M.", porque: "pOH = -log[OH^-], asi que [OH^-] = 10^-pOH. Es el error mas comun: usar 10^-pH da una concentracion absurda." },
          { paso: "Equilibrio: NH3 + H2O <=> NH4^+ + OH^-. Por estequiometria 1:1, [NH4^+] = [OH^-] = 1,35 x 10^-3 M, y [NH3] = 0,10 - 0,00135 = 0,0987 M.", porque: "Cada NH3 que reacciona produce un NH4^+ y un OH^-." },
          { paso: "Kb = [NH4^+][OH^-] / [NH3] = (1,35 x 10^-3)^2 / 0,0987 = 1,8 x 10^-5.", porque: "Kb se calcula con las concentraciones de equilibrio. Verificacion: x / C = 1,3 %, la aproximacion era valida." }
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
          { paso: "CN^- + H2O <=> HCN + OH^-: CN^- es la base conjugada del HCN.", porque: "En el par HCN / CN^- la base es el CN^-, que difiere del acido en un H^+." },
          { paso: "Para un par conjugado Ka x Kb = Kw. Kb = 1,0 x 10^-14 / 6,2 x 10^-10 = 1,6 x 10^-5.", porque: "La relacion Ka x Kb = Kw vale a 25 C, con Kw = 1,0 x 10^-14." },
          { paso: "pKb = -log(1,6 x 10^-5) = 4,79.", porque: "pK = -log K para cualquier constante de equilibrio." }
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
          { paso: "[H3O^+] = 10^-2,64 = 2,3 x 10^-3 M, que es igual a [HCOO^-] en la solucion (el aporte del agua se desprecia).", porque: "Se usa la definicion inversa del pH: [H3O^+] = 10^-pH." },
          { paso: "alpha = [H3O^+] / C = 2,3 x 10^-3 / 0,050 = 0,046 (4,6 %).", porque: "El grado de ionizacion es la fraccion del acido inicial que se ionizo." },
          { paso: "Ka = [HCOO^-][H3O^+] / [HCOOH] = (2,3 x 10^-3)^2 / (0,050 - 2,3 x 10^-3) = 1,1 x 10^-4.", porque: "Como el pH ya da la concentracion de equilibrio, se usa la expresion completa con (C - x), sin aproximar." }
        ],
        resultado: "Ka = 1,1 x 10^-4; alpha = 4,6 %"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Ka = x^2 / (0,0050 - x) = 1,1 x 10^-4, es decir x^2 + 1,1 x 10^-4 x - 5,5 x 10^-7 = 0, de donde x = 6,9 x 10^-4 M.", porque: "Al diluir, el equilibrio se desplaza hacia la ionizacion (ley de dilucion de Ostwald): la fraccion ionizada aumenta." },
          { paso: "alpha = 6,9 x 10^-4 / 0,0050 = 0,138 (13,8 %).", porque: "Misma definicion de alpha que en a)." }
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
          { paso: "Moles: HCl = 0,100 x 50,0 = 5,00 mmol de H^+; NaOH = 0,100 x 40,0 = 4,00 mmol de OH^-.", porque: "n = M x V. La neutralizacion es 1:1: H^+ + OH^- -> H2O." },
          { paso: "Exceso de H^+: 5,00 - 4,00 = 1,00 mmol, en un volumen total de 90,0 mL. [H^+] = 1,00 / 90,0 = 0,0111 M.", porque: "El reactivo en exceso define el pH de la mezcla. El volumen total es la suma de ambos volumenes." },
          { paso: "pH = -log(0,0111) = 1,95.", porque: "pH = -log[H^+] con la concentracion final." }
        ],
        resultado: "pH = 1,95"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Para pH = 7,00 hay que neutralizar todo el HCl: OH^- adicional = 5,00 - 4,00 = 1,00 mmol.", porque: "En la neutralizacion de acido fuerte con base fuerte, el punto de equivalencia es pH = 7,00." },
          { paso: "Volumen = 1,00 mmol / 0,100 M = 10,0 mL de NaOH.", porque: "V = n / M." }
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
          { paso: "Moles iniciales: CH3COOH = 0,100 x 100 = 10,0 mmol; NaOH = 0,100 x 50,0 = 5,00 mmol.", porque: "n = M x V." },
          { paso: "El NaOH neutraliza 5,00 mmol del acido: quedan 5,00 mmol de CH3COOH y se forman 5,00 mmol de CH3COO^-.", porque: "CH3COOH + OH^- -> CH3COO^- + H2O es 1:1, y el acido queda en exceso frente a la base." },
          { paso: "Es una solucion reguladora: pH = pKa + log([A^-] / [HA]) = 4,74 + log(5,00 / 5,00) = 4,74.", porque: "Henderson-Hasselbalch. Como el volumen es comun, el cociente de moles equivale al de concentraciones." }
        ],
        resultado: "pH = 4,74"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "El HCl consume 1,00 mmol de acetato: CH3COO^- + H^+ -> CH3COOH. Quedan 4,00 mmol de CH3COO^- y 6,00 mmol de CH3COOH.", porque: "El acido fuerte se neutraliza con la base del buffer, y se forma mas acido debil." },
          { paso: "pH = 4,74 + log(4,00 / 6,00) = 4,74 - 0,18 = 4,57.", porque: "Henderson con los nuevos moles. El volumen total se cancela en el cociente." }
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
          { paso: "NH4Cl -> NH4^+ + Cl^-. El Cl^- es la base conjugada de un acido fuerte y no hidroliza. El NH4^+ hidroliza: NH4^+ + H2O <=> NH3 + H3O^+.", porque: "Solo los iones que son acidos o bases debiles reaccionan con el agua." },
          { paso: "Como el NH4^+ dona H^+, la solucion es acida (pH < 7).", porque: "Un ion que produce H3O^+ en agua acidifica la solucion." }
        ],
        resultado: "NH4^+ + H2O <=> NH3 + H3O^+; solucion acida"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Ka(NH4^+) = Kw / Kb = 1,0 x 10^-14 / 1,8 x 10^-5 = 5,6 x 10^-10.", porque: "NH4^+ y NH3 son un par conjugado: Ka x Kb = Kw." },
          { paso: "[H3O^+] = raiz(Ka x C) = raiz(5,56 x 10^-10 x 0,10) = 7,45 x 10^-6 M. Verificacion: x / C = 0,007 %, muy menor que 5 %.", porque: "Mismo esquema que un acido debil, con x pequeno frente a C." },
          { paso: "pH = -log(7,45 x 10^-6) = 5,13.", porque: "pH = -log[H3O^+]." }
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
          { paso: "La primera ionizacion, H2S <=> H^+ + HS^-, define el pH porque Ka1 es mucho mayor que Ka2.", porque: "Cada paso sucesivo es mucho menos acido, y el primero domina la concentracion de H^+." },
          { paso: "[H^+] = [HS^-] = x = raiz(1,0 x 10^-7 x 0,10) = 1,0 x 10^-4 M. Verificacion: x / 0,10 = 0,1 % < 5 %.", porque: "Aproximacion de acido debil, valida porque la ionizacion es muy pequena." },
          { paso: "pH = -log(1,0 x 10^-4) = 4,00.", porque: "pH = -log[H^+]." }
        ],
        resultado: "pH = 4,00"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "S^2- se forma en el segundo paso: HS^- <=> H^+ + S^2-, con Ka2 = [H^+][S^2-] / [HS^-].", porque: "Ka2 es la constante del segundo paso de ionizacion." },
          { paso: "Como [H^+] aprox. [HS^-], los factores se cancelan: [S^2-] = Ka2 = 1,3 x 10^-13 M.", porque: "El resultado no depende de la concentracion inicial de H2S, sino solo de Ka2." }
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
          { paso: "Aproximacion simple: [H^+] = raiz(6,8 x 10^-4 x 0,020) = 3,7 x 10^-3 M. Verificacion: x / C = 18 % > 5 %. La aproximacion NO es valida.", porque: "Con una ionizacion tan grande, despreciar x frente a C introduce un error importante." },
          { paso: "Sin aproximacion, Ka = x^2 / (0,020 - x) se transforma en x^2 + 6,8 x 10^-4 x - 1,36 x 10^-5 = 0, con x = [H^+] = [F^-].", porque: "Es la forma general de un acido debil cuando x no es despreciable." },
          { paso: "x = [-6,8 x 10^-4 + raiz((6,8 x 10^-4)^2 + 4 x 1,36 x 10^-5)] / 2 = 3,36 x 10^-3 M.", porque: "Se toma la raiz positiva de la cuadratica." },
          { paso: "pH = -log(3,36 x 10^-3) = 2,47.", porque: "pH = -log[H^+] con el valor exacto." }
        ],
        resultado: "[H^+] = 3,36 x 10^-3 M; pH = 2,47 (la aproximacion simple daria 2,43, no valido)"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "alpha = x / C = 3,36 x 10^-3 / 0,020 = 0,168 (16,8 %).", porque: "alpha es la fraccion del acido inicial que se ionizo." }
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
          { paso: "Balance de cargas: [H^+] = [Cl^-] + [OH^-] = C + Kw / [H^+].", porque: "El agua aporta H^+ y OH^-, que no se pueden despreciar cuando C es del orden de 10^-7 M." },
          { paso: "[H^+]^2 - C [H^+] - Kw = 0, de donde [H^+] = [C + raiz(C^2 + 4 Kw)] / 2 = 1,1 x 10^-7 M.", porque: "Es una ecuacion cuadratica que resulta del balance de cargas." },
          { paso: "pH = -log(1,1 x 10^-7) = 6,96.", porque: "pH = -log[H^+] con la concentracion total." },
          { paso: "Justificacion: -log(2,0 x 10^-8) daria 7,70, pero eso ignora el agua. El acido es tan diluido que el pH queda cerca de 7 y ligeramente acido.", porque: "Si C es comparable con 10^-7 M, el H^+ del agua cambia el resultado." }
        ],
        resultado: "pH = 6,96"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Con C = 2,0 x 10^-6 M, el aporte del agua es del orden de 0,25 %, despreciable: pH = -log(2,0 x 10^-6) = 5,70.", porque: "Cuando C es mucho mayor que 10^-7 M, la aproximacion pH = -log C es valida." }
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
          { paso: "En equivalencia: n(NaOH) = n(CH3COOH) = 0,100 x 25,0 = 2,50 mmol. V = 2,50 mmol / 0,100 M = 25,0 mL.", porque: "En una titulacion 1:1, la equivalencia es cuando los moles de base igualan los de acido." },
          { paso: "En equivalencia queda solo acetato: [CH3COO^-] = 2,50 mmol / 50,0 mL = 0,0500 M.", porque: "El acido se consumio por completo y queda su base conjugada en un volumen total de 50,0 mL." },
          { paso: "Kb = Kw / Ka = 1,0 x 10^-14 / 1,8 x 10^-5 = 5,6 x 10^-10. [OH^-] = raiz(Kb x C) = raiz(5,6 x 10^-10 x 0,0500) = 5,3 x 10^-6 M.", porque: "El acetato es una base debil que se hidroliza. El pH en equivalencia es basico, no 7." },
          { paso: "pOH = 5,28; pH = 14,00 - 5,28 = 8,72.", porque: "A 25 C, pH + pOH = 14." }
        ],
        resultado: "V(NaOH) = 25,0 mL; pH de equivalencia = 8,72"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "El pH de equivalencia (8,72) cae dentro de la zona de vire de la fenolftaleina (8,2 a 10,0) y fuera de la del anaranjado de metilo (3,1 a 4,4).", porque: "Un indicador debe cambiar de color cerca del pH de equivalencia. Si no, el vire ocurre antes o despues del punto de equivalencia." }
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
          { paso: "Hay dos fuentes de H^+: el HCl (fuerte, se ioniza por completo) y el acido acetico (debil). Sea y la [H^+] que aporta el acido acetico: [H^+] = 1,0 x 10^-3 + y.", porque: "Los H^+ de ambas fuentes se suman, y y es la cantidad de acido acetico ionizado." },
          { paso: "Ka = (1,0 x 10^-3 + y) y / (0,10 - y) = 1,8 x 10^-5. Como y no es despreciable frente a 1,0 x 10^-3, se resuelve la cuadratica: y^2 + 1,02 x 10^-3 y - 1,8 x 10^-6 = 0, de donde y = 9,3 x 10^-4 M.", porque: "La aproximacion simple no sirve aqui porque el H^+ del HCl es del mismo orden que el ionizado del acetico." },
          { paso: "[H^+] = 1,0 x 10^-3 + 9,3 x 10^-4 = 1,9 x 10^-3 M. pH = -log(1,9 x 10^-3) = 2,72.", porque: "El pH depende de la concentracion total de H^+." }
        ],
        resultado: "pH = 2,72"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "En la mezcla: alpha = y / 0,10 = 9,3 x 10^-3 (0,93 %).", porque: "alpha es la fraccion del acido acetico que se ionizo." },
          { paso: "Puro: alpha = raiz(Ka / C) = raiz(1,8 x 10^-5 / 0,10) = 1,3 x 10^-2 (1,34 %). Verificacion: 1,34 % < 5 %.", porque: "En la solucion pura la aproximacion es valida, asi que se usa la forma simple." },
          { paso: "En la mezcla el acido acetico se ioniza menos: el H^+ del HCl desplaza el equilibrio hacia la forma sin disociar.", porque: "Efecto de ion comun (Le Chatelier): agregar H^+ empuja el equilibrio CH3COOH <=> CH3COO^- + H^+ hacia la izquierda." }
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
          { paso: "[OH^-] = raiz(Kb x C) = raiz(1,8 x 10^-5 x 0,10) = 1,34 x 10^-3 M. Verificacion: 1,3 % < 5 %.", porque: "Base debil con ionizacion pequena: aproximacion valida." },
          { paso: "pOH = 2,87; pH = 14,00 - 2,87 = 11,13.", porque: "A 25 C, pH + pOH = 14." }
        ],
        resultado: "pH = 11,13"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "n(NH4Cl) = 5,35 g / 53,5 g/mol = 0,100 mol; [NH4^+] = 0,100 mol / 1,00 L = 0,10 M.", porque: "n = m / M, y la concentracion es moles por litro (sin cambio de volumen)." },
          { paso: "Solucion reguladora de base debil: pOH = pKb + log([NH4^+] / [NH3]) = 4,74 + log(0,10 / 0,10) = 4,74. pH = 14,00 - 4,74 = 9,26.", porque: "Henderson-Hasselbalch para bases: el NH4^+ es el acido conjugado del NH3 y actua como sal que aporta la forma conjugada." }
        ],
        resultado: "pH = 9,26"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "Al diluir 10 veces, [NH3] y [NH4^+] bajan 10 veces cada una, pero su cociente no cambia. El pH casi no varia.", porque: "En Henderson aparece el cociente de concentraciones, no los valores absolutos." }
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
          { paso: "Tabla: [H3O^+] = [lactato^-] = x; [acido lactico] = 0,100 - x.", porque: "Es un acido debil: se plantea el equilibrio y se usa Ka." },
          { paso: "Aproximacion simple: x = raiz(1,38 x 10^-4 x 0,100) = 3,7 x 10^-3 M; x / C = 3,7 % < 5 %, por lo que seria valida.", porque: "Primer calculo para estimar el orden de magnitud de x." },
          { paso: "Como el resultado final debe ser exacto, se resuelve la cuadratica: x^2 + 1,38 x 10^-4 x - 1,38 x 10^-5 = 0, de donde x = 3,65 x 10^-3 M.", porque: "Con la cuadratica completa no hay error de aproximacion. La diferencia con 3,7 x 10^-3 cambia el pH en la segunda cifra decimal." },
          { paso: "pH = -log(3,65 x 10^-3) = 2,44.", porque: "pH = -log[H3O^+] con el valor exacto." }
        ],
        resultado: "pH = 2,44 ([H3O^+] = 3,65 x 10^-3 M)"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "n(acido) = 0,100 M x 25,0 mL = 2,50 mmol. En la mitad de la neutralizacion se agregan 1,25 mmol de NaOH, es decir V = 1,25 mmol / 0,100 M = 12,5 mL.", porque: "La mitad de la neutralizacion es el punto en el que la mitad del acido se convirtio en su base conjugada." },
          { paso: "En ese punto [acido] = [lactato^-], asi que pH = pKa = -log(1,38 x 10^-4) = 3,86.", porque: "Henderson: pH = pKa + log([A^-] / [HA]), y el log de 1 es 0." }
        ],
        resultado: "V(NaOH) = 12,5 mL; pH = 3,86"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "Equivalencia: n(NaOH) = 2,50 mmol, V = 2,50 mmol / 0,100 M = 25,0 mL. Volumen total = 50,0 mL, [lactato^-] = 2,50 mmol / 50,0 mL = 0,0500 M.", porque: "En equivalencia se consumio todo el acido y queda solo la base conjugada en el volumen total." },
          { paso: "Kb = Kw / Ka = 1,0 x 10^-14 / 1,38 x 10^-4 = 7,2 x 10^-11. [OH^-] = raiz(7,2 x 10^-11 x 0,0500) = 1,9 x 10^-6 M; pOH = 5,72; pH = 8,28.", porque: "El lactato es una base debil que se hidroliza, por lo que el pH de equivalencia es basico." }
        ],
        resultado: "V(NaOH) = 25,0 mL; pH de equivalencia = 8,28"
      },
      {
        parte: "d)",
        pasos: [
          { paso: "El pH de equivalencia (8,28) cae dentro de la zona de vire de la fenolftaleina (8,2 a 10,0) y no dentro de la del anaranjado de metilo (3,1 a 4,4).", porque: "El indicador debe cambiar de color cerca del pH de equivalencia para que el punto final coincida con la equivalencia." }
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
