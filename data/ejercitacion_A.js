window.EJERCITACION = window.EJERCITACION || {};

window.EJERCITACION["repaso"] = [
  {
    num: 1,
    nivel: "Básico",
    temas: ["repaso"],
    enunciado: "Escriba en notacion cientifica, con la cantidad de cifras significativas del dato, la masa de una muestra de 0,0000427 g de un reactivo.",
    resolucion: [
      {
        parte: "",
        pasos: [
          { paso: "Contar las cifras significativas del dato: 4, 2 y 7 son distintos de cero, y los ceros a la izquierda no cuentan. Hay 3 cifras.", porque: "Usamos la regla de cifras significativas: los ceros a la izquierda del primer digito distinto de cero solo indican la posicion de la coma. Dado que en $0{,}0000427\\ \\text{g}$ quedan los digitos 4, 2 y 7, el dato tiene 3 cifras significativas. Por eso el resultado final debe conservar esas 3 cifras." },
          { paso: "Correr la coma hasta dejar un numero entre 1 y 10: $4{,}27$. La coma se corrio 5 lugares hacia la derecha.", porque: "Usamos la notacion cientifica: una mantisa entre 1 y 10 multiplicada por una potencia de 10. Para llegar a $4{,}27$ desde $0{,}0000427$ corremos la coma 5 lugares hacia la derecha, y ese conteo da el valor absoluto del exponente. Entonces el exponente queda determinado por la cantidad de lugares que se movio la coma." },
          { paso: "Como el numero original es menor que 1, el exponente es $-5$ (la coma se corrio 5 lugares hacia la derecha).", porque: "Como $0{,}0000427$ es menor que 1, la potencia de 10 tiene que ser negativa para compensar el corrimiento de la coma. Por eso el exponente es $-5$ y no $+5$, ya que $4{,}27 \\times 10^{-5}$ representa el mismo valor que $0{,}0000427$. Con este exponente la mantisa $4{,}27$ queda lista para el resultado." },
          { paso: "Escribir el resultado: $4{,}27 \\times 10^{-5}\\ \\text{g}$. Las 3 cifras se conservan.", porque: "Como la mantisa $4{,}27$ ya esta entre 1 y 10, la forma de escribir el numero queda completa. Al cambiar de notacion solo se mueve la coma y se agrega la potencia de 10, sin modificar los digitos. Por eso $m = 4{,}27 \\times 10^{-5}\\ \\text{g}$ conserva las 3 cifras significativas del dato." }
        ],
        resultado: "$m = 4{,}27 \\times 10^{-5}\\ \\text{g}$ (3 cifras significativas)"
      }
    ],
    errores_tipicos: [
      { error: "Contar los ceros de la izquierda como cifras significativas y escribir 5 cifras.", como_evitar: "Los ceros a la izquierda del primer digito distinto de cero no cuentan: 0,0000427 tiene 3." },
      { error: "Poner el exponente +5 porque la coma 'se corrio 5 lugares'.", como_evitar: "Un numero menor que 1 lleva exponente negativo. Chequeo: 4,27 x 10^-5 debe dar 0,0000427." }
    ]
  },
  {
    num: 2,
    nivel: "Básico",
    temas: ["repaso"],
    enunciado: "Una muestra de un liquido tiene una masa de 12,7 g y ocupa un volumen de 4,3 cm^3. Calcule su densidad con la cantidad de cifras significativas que corresponde.",
    resolucion: [
      {
        parte: "",
        pasos: [
          { paso: "Aplicar $$d = \\frac{m}{V} = \\frac{12{,}7\\ \\text{g}}{4{,}3\\ \\text{cm}^3} = 2{,}9535\\ \\text{g/cm}^3$$.", porque: "Usamos la definicion de densidad, que es la masa dividida por el volumen, porque relaciona ambas magnitudes con la densidad de la sustancia. Con $m = 12{,}7\\ \\text{g}$ y $V = 4{,}3\\ \\text{cm}^3$ el cociente da $2{,}9535\\ \\text{g/cm}^3$, y las unidades quedan en $\\text{g/cm}^3$ porque la masa esta en gramos y el volumen en $\\text{cm}^3$. Ese valor tiene mas cifras que los datos, asi que debe redondearse." },
          { paso: "Determinar las cifras: $12{,}7$ tiene 3 cifras y $4{,}3$ tiene 2. El resultado tiene 2 cifras.", porque: "Como el resultado de una division no puede ser mas preciso que el dato menos preciso, contamos las cifras de cada valor. Dado que $12{,}7$ tiene 3 cifras y $4{,}3$ tiene 2, la densidad debe quedar con 2 cifras. Por eso ese es el criterio que aplicamos al redondeo." },
          { paso: "Redondear $2{,}9535$ a 2 cifras: $3{,}0\\ \\text{g/cm}^3$. El 0 se escribe para mostrar que hay 2 cifras.", porque: "Redondeamos $2{,}9535$ a 2 cifras: quedan $2{,}9$ y el digito siguiente es 5, que obliga a subir el 9 y da $3{,}0$. Escribimos el cero final porque indica que el resultado tiene 2 cifras significativas, mientras que un 3 solo indicaria una. Entonces la densidad final es $d = 3{,}0\\ \\text{g/cm}^3$." }
        ],
        resultado: "$d = 3{,}0\\ \\text{g/cm}^3$ (2 cifras significativas)"
      }
    ],
    errores_tipicos: [
      { error: "Informar 2,9535 g/cm^3 con todos los decimales de la calculadora.", como_evitar: "Redondea al dato menos preciso: aqui 4,3 tiene 2 cifras." },
      { error: "Escribir 3 g/cm^3 y perder la cifra significativa del cero.", como_evitar: "Si el resultado tiene 2 cifras, escribi 3,0 y no 3." }
    ]
  },
  {
    num: 3,
    nivel: "Básico",
    temas: ["repaso"],
    enunciado: "Efectue la operacion (6,40 x 10^-3) x (8,5 x 10^5) y exprese el resultado en notacion cientifica con la cantidad de cifras significativas que corresponde.",
    resolucion: [
      {
        parte: "",
        pasos: [
          { paso: "Multiplicar las mantisas: $$6{,}40 \\times 8{,}5 = 54{,}4$$.", porque: "Usamos la regla para multiplicar numeros en notacion cientifica, que separa el producto en dos partes: las mantisas y las potencias de 10. Con $(6{,}40 \\times 10^{-3}) \\times (8{,}5 \\times 10^{5})$, las mantisas son $6{,}40$ y $8{,}5$, y su producto se calcula primero. El orden de los factores no cambia el resultado, asi que la operacion puede hacerse en cualquier orden." },
          { paso: "Sumar los exponentes: $$-3 + 5 = 2$$, por lo que el producto queda $54{,}4 \\times 10^{2}$.", porque: "Usamos la propiedad de las potencias de igual base: $10^{a} \\times 10^{b} = 10^{a+b}$, por lo que los exponentes se suman. Con $-3$ y $5$, el exponente total es $-3 + 5 = 2$, y el producto queda como $54{,}4 \\times 10^{2}$. Por eso conviene revisar el signo de cada exponente antes de sumar." },
          { paso: "Llevar a notacion cientifica: $$54{,}4 = 5{,}44 \\times 10^{1}$$, asi que el producto es $5{,}44 \\times 10^{3}$.", porque: "Como la mantisa debe estar entre 1 y 10 y $54{,}4$ es mayor que 10, hay que normalizarla. Al correr la coma un lugar a la izquierda obtenemos $5{,}44$, y para compensar sumamos 1 al exponente, que pasa de 2 a 3. Dado que $54{,}4 = 5{,}44 \\times 10^{1}$, el producto final es $5{,}44 \\times 10^{3}$." },
          { paso: "Redondear a 2 cifras, la cantidad del dato menos preciso ($8{,}5$): $5{,}4 \\times 10^{3}$.", porque: "Redondeamos porque el resultado debe tener la cantidad de cifras del dato menos preciso, que es $8{,}5$ con 2 cifras. Al mirar el digito que sigue al 4 en $5{,}44$, se obtiene 4, que es menor que 5, asi que la cifra 4 no sube. Por eso el resultado final es $5{,}4 \\times 10^{3}$." }
        ],
        resultado: "$5{,}4 \\times 10^{3}$"
      }
    ],
    errores_tipicos: [
      { error: "Dejar 54,4 x 10^2 como respuesta final, sin normalizar la mantisa.", como_evitar: "La mantisa debe quedar entre 1 y 10: 54,4 x 10^2 = 5,44 x 10^3." },
      { error: "Redondear con 3 cifras porque 6,40 tiene 3.", como_evitar: "Se usa la menor cantidad de cifras de los datos: 8,5 tiene 2." }
    ]
  },
  {
    num: 4,
    nivel: "Básico",
    temas: ["repaso"],
    enunciado: "Calcule log(2,0 x 10^-6) y exprese el resultado con 3 cifras decimales.",
    resolucion: [
      {
        parte: "",
        pasos: [
          { paso: "Separar el producto: $$\\log(2{,}0 \\times 10^{-6}) = \\log(2{,}0) + \\log(10^{-6})$$.", porque: "Usamos la propiedad del logaritmo de un producto: $\\log(a \\times b) = \\log(a) + \\log(b)$. Aplicada a $2{,}0 \\times 10^{-6}$, separa el dato en la parte $2{,}0$ y la potencia $10^{-6}$, y cada una se calcula por separado. Asi la potencia de 10 se resuelve sin calculadora y solo el coeficiente necesita la calculadora." },
          { paso: "$$\\log(2{,}0) = 0{,}30103$$, porque $10^{0{,}30103} = 2{,}0$.", porque: "Por definicion, $\\log(x)$ es el exponente al que hay que elevar 10 para obtener $x$. Como $\\log(2{,}0)$ es el exponente que da $2{,}0$ como potencia de 10, con la calculadora se obtiene $0{,}30103$. Ese valor es lo que aporta el coeficiente $2{,}0$ al logaritmo total." },
          { paso: "$$\\log(10^{-6}) = -6$$, porque el log de una potencia de 10 es su exponente.", porque: "Usamos que $\\log(10^{n}) = n$, porque el logaritmo de una potencia de 10 es directamente su exponente. Con $n = -6$ el logaritmo de $10^{-6}$ vale $-6$, sin necesidad de calculadora. Como comprobacion, $10$ elevado a $-6$ da $10^{-6}$, lo que confirma el valor." },
          { paso: "Sumar: $$0{,}30103 + (-6) = -5{,}69897$$, que redondeado a 3 decimales es $-5{,}699$.", porque: "Sumamos las dos partes con su signo: $0{,}30103 + (-6)$ da $-5{,}69897$, y el signo negativo viene del $-6$, que es el termino mayor en valor absoluto. Redondeamos a 3 decimales: el cuarto decimal es 9, asi que el tercero (8) sube a 9. Por eso el resultado final es $-5{,}699$." }
        ],
        resultado: "$\\log(2{,}0 \\times 10^{-6}) = -5{,}699$"
      }
    ],
    errores_tipicos: [
      { error: "Escribir +5,699 olvidando el signo del exponente.", como_evitar: "Un numero menor que 1 tiene log negativo. Chequeo: 10^-5,699 debe dar aprox. 2,0 x 10^-6." },
      { error: "Multiplicar log(2,0) por log(10^-6) en lugar de sumarlos.", como_evitar: "El log de un producto es la suma de logs, no el producto de ellos." }
    ]
  },
  {
    num: 5,
    nivel: "Básico",
    temas: ["repaso"],
    enunciado: "Exprese 2,50 cm^3 en m^3 usando la relacion entre el metro y el centimetro.",
    resolucion: [
      {
        parte: "",
        pasos: [
          { paso: "Relacionar longitudes: $1\\ \\text{cm} = 10^{-2}\\ \\text{m}$.", porque: "Usamos la relacion entre prefijos, porque el prefijo centi equivale a $10^{-2}$ y define cuantos metros tiene un centimetro. Con esa equivalencia, $1\\ \\text{cm} = 10^{-2}\\ \\text{m}$, que es la base de cualquier conversion de longitudes. A partir de ella podemos pasar el volumen a $\\text{m}^3$." },
          { paso: "Elevar la relacion al cubo: $$1\\ \\text{cm}^3 = (10^{-2}\\ \\text{m})^3 = 10^{-6}\\ \\text{m}^3$$.", porque: "Como un volumen es una longitud elevada al cubo, elevamos al cubo toda la relacion, incluido el factor $10^{-2}$. Asi $(10^{-2}\\ \\text{m})^3 = 10^{-6}\\ \\text{m}^3$, y por eso $1\\ \\text{cm}^3 = 10^{-6}\\ \\text{m}^3$. Como verificacion, el inverso da $1\\ \\text{m}^3 = 10^{6}\\ \\text{cm}^3$, que es coherente con esta conversion." },
          { paso: "Multiplicar: $$2{,}50\\ \\text{cm}^3 \\times \\frac{10^{-6}\\ \\text{m}^3}{\\text{cm}^3} = 2{,}50 \\times 10^{-6}\\ \\text{m}^3$$.", porque: "Multiplicamos la cantidad $2{,}50\\ \\text{cm}^3$ por el factor $\\frac{10^{-6}\\ \\text{m}^3}{\\text{cm}^3}$ para que los $\\text{cm}^3$ se cancelen y quede $\\text{m}^3$. Con $2{,}50 \\times 10^{-6}\\ \\text{m}^3$ obtenemos el resultado final. El factor $10^{-6}$ es una definicion exacta, asi que no limita las cifras significativas: las determina el dato $2{,}50$." }
        ],
        resultado: "$2{,}50 \\times 10^{-6}\\ \\text{m}^3$"
      }
    ],
    errores_tipicos: [
      { error: "Usar 10^-2 como factor para cm^3, sin elevar al cubo.", como_evitar: "Eleva al cubo tambien el factor: (10^-2)^3 = 10^-6." },
      { error: "Escribir 1 cm^3 = 10^-3 m^3, confundiendo con litros.", como_evitar: "1 m^3 = 1000 L = 10^6 cm^3, asi que 1 cm^3 = 10^-6 m^3." }
    ]
  },
  {
    num: 6,
    nivel: "Intermedio",
    temas: ["repaso"],
    enunciado: "Un bloque de aluminio tiene una masa de 0,0540 kg y dimensiones 2,00 cm x 3,00 cm x 5,00 cm. a) Calcule su densidad en g/cm^3 con las cifras significativas correctas. b) Exprese la misma densidad en kg/m^3.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Pasar la masa a gramos: $$0{,}0540\\ \\text{kg} \\times 1000\\ \\text{g/kg} = 54{,}0\\ \\text{g}$$.", porque: "Para usar la unidad $\\text{g/cm}^3$ la masa debe estar en gramos, asi que convertimos los kg. Usamos $1\\ \\text{kg} = 1000\\ \\text{g}$ para que la unidad kg se cancele en el calculo. Con $0{,}0540\\ \\text{kg} \\times 1000\\ \\text{g/kg}$ obtenemos $54{,}0\\ \\text{g}$, y el valor conserva las 3 cifras del dato." },
          { paso: "Calcular el volumen del prisma: $$V = 2{,}00\\ \\text{cm} \\times 3{,}00\\ \\text{cm} \\times 5{,}00\\ \\text{cm} = 30{,}0\\ \\text{cm}^3$$.", porque: "Usamos la formula del volumen de un prisma rectangular, que es largo x ancho x alto. Reemplazamos con $2{,}00\\ \\text{cm} \\times 3{,}00\\ \\text{cm} \\times 5{,}00\\ \\text{cm}$, y el producto da $30{,}0\\ \\text{cm}^3$. Como cada medida tiene 3 cifras, el volumen tambien las conserva." },
          { paso: "Dividir: $$d = \\frac{m}{V} = \\frac{54{,}0\\ \\text{g}}{30{,}0\\ \\text{cm}^3} = 1{,}80\\ \\text{g/cm}^3$$.", porque: "Calculamos la densidad con $d = \\frac{m}{V}$, dividiendo la masa en gramos por el volumen en $\\text{cm}^3$. Con $\\frac{54{,}0\\ \\text{g}}{30{,}0\\ \\text{cm}^3}$ el cociente es $1{,}80\\ \\text{g/cm}^3$. Como ambos datos tienen 3 cifras significativas, la densidad se informa con 3." }
        ],
        resultado: "$d = 1{,}80\\ \\text{g/cm}^3$"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Escribir la densidad con unidades del SI: $$1{,}80\\ \\text{g/cm}^3 = \\frac{1{,}80 \\times 10^{-3}\\ \\text{kg}}{10^{-6}\\ \\text{m}^3}$$.", porque: "Para expresar la densidad en unidades del SI reemplazamos cada unidad por su equivalencia: $1\\ \\text{g} = 10^{-3}\\ \\text{kg}$ y $1\\ \\text{cm}^3 = 10^{-6}\\ \\text{m}^3$. Como la densidad es un cociente, escribirla como fraccion permite ver como se transforma cada potencia de 10. Con $1{,}80\\ \\text{g/cm}^3$ queda $\\frac{1{,}80 \\times 10^{-3}\\ \\text{kg}}{10^{-6}\\ \\text{m}^3}$." },
          { paso: "Dividir las potencias: $$\\frac{10^{-3}}{10^{-6}} = 10^{3}$$, asi que $d = 1{,}80 \\times 10^{3}\\ \\text{kg/m}^3$.", porque: "Como se dividen potencias de la misma base, restamos los exponentes: $\\frac{10^{-3}}{10^{-6}} = 10^{-3-(-6)} = 10^{3}$. Por eso la densidad queda como $1{,}80 \\times 10^{3}\\ \\text{kg/m}^3$. El error comun es sumar los exponentes, lo que daria $10^{-9}$ y un valor incorrecto." },
          { paso: "Chequeo: el agua tiene $1{,}00 \\times 10^{3}\\ \\text{kg/m}^3$ y este bloque tiene $1{,}80$ veces esa densidad.", porque: "Usamos el agua como referencia, porque su densidad de $1{,}00 \\times 10^{3}\\ \\text{kg/m}^3$ es conocida y sirve para verificar la potencia de 10. Como $1{,}80$ es mayor que $1$, el bloque debe ser mas denso que el agua, y el resultado lo confirma. Asi comprobamos que la potencia de 10 es correcta." }
        ],
        resultado: "$d = 1{,}80 \\times 10^{3}\\ \\text{kg/m}^3$"
      }
    ],
    errores_tipicos: [
      { error: "Sumar las dimensiones en lugar de multiplicarlas para hallar el volumen.", como_evitar: "Volumen de un prisma = largo x ancho x alto. Con cm, el resultado es cm^3." },
      { error: "Pasar g/cm^3 a kg/m^3 multiplicando por 10^6 en lugar de 10^3.", como_evitar: "1 g = 10^-3 kg y 1 cm^3 = 10^-6 m^3: 10^-3 / 10^-6 = 10^3. Con el agua: 1,00 g/cm^3 = 1,00 x 10^3 kg/m^3." }
    ]
  },
  {
    num: 7,
    nivel: "Intermedio",
    temas: ["repaso"],
    enunciado: "Se informa la concentracion de un contaminante como log(C) = -4,62, con C en mol/L. a) Calcule C con 2 cifras significativas. b) Calcule log(10 C) y justifique que le pasa al logaritmo cuando la concentracion se multiplica por 10.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Despejar $C$: si $\\log(C) = y$, entonces $C = 10^{y}$, asi que $$C = 10^{-4{,}62}$$.", porque: "Usamos la definicion de logaritmo: si $\\log(C) = y$, entonces $C = 10^{y}$. Con $y = -4{,}62$ despejamos $C$ elevando 10 a ese valor. Esto es posible porque el logaritmo en base 10 y la potencia de 10 son funciones inversas una de la otra." },
          { paso: "Calcular: $$10^{-4{,}62} = 10^{-5} \\times 10^{0{,}38} = 2{,}399 \\times 10^{-5}\\ \\text{mol/L}$$.", porque: "Separamos el exponente en parte entera ($-5$) y parte decimal ($0{,}38$), usando $10^{a+b} = 10^{a} \\times 10^{b}$. Asi $10^{-4{,}62}$ queda como $10^{-5} \\times 10^{0{,}38}$, y la parte decimal se calcula con calculadora. Por eso el valor total es $2{,}399 \\times 10^{-5}\\ \\text{mol/L}$." },
          { paso: "Redondear a 2 cifras significativas: $$C = 2{,}4 \\times 10^{-5}\\ \\text{mol/L}$$.", porque: "El enunciado pide 2 cifras significativas, asi que miramos el digito siguiente al 3 en $2{,}399$, que es 9. Ese 9 obliga a subir la cifra, y entonces $2{,}399$ se redondea a $2{,}4$. Por eso la concentracion final es $C = 2{,}4 \\times 10^{-5}\\ \\text{mol/L}$." }
        ],
        resultado: "$C = 2{,}4 \\times 10^{-5}\\ \\text{mol/L}$"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Separar el producto: $$\\log(10\\,C) = \\log(10) + \\log(C)$$.", porque: "Usamos la propiedad del producto de logaritmos: $\\log(10\\,C) = \\log(10) + \\log(C)$. Asi el producto se separa en dos terminos que se calculan por separado. Como $\\log(C) = -4{,}62$ es dato del enunciado, solo falta calcular $\\log(10)$." },
          { paso: "$\\log(10) = 1$, asi que $$\\log(10\\,C) = 1 + (-4{,}62) = -3{,}62$$.", porque: "Por definicion, $\\log(10) = 1$ porque $10 = 10^{1}$ y el exponente es 1. Reemplazamos y obtenemos $\\log(10\\,C) = 1 + (-4{,}62) = -3{,}62$. Hay que sumar 1 y no 10, que es el error comun." },
          { paso: "Interpretar: multiplicar por 10 sube el log en 1 unidad (de $-4{,}62$ a $-3{,}62$).", porque: "Como el logaritmo pasa de $-4{,}62$ a $-3{,}62$, sube exactamente 1 unidad. Esto significa que multiplicar la concentracion por 10 aumenta el log en 1, porque un factor 10 equivale a sumar 1 al exponente. Verificamos con $-3{,}62 - (-4{,}62) = 1$." }
        ],
        resultado: "$\\log(10\\,C) = -3{,}62$ (aumenta 1 unidad)"
      }
    ],
    errores_tipicos: [
      { error: "Confundir log con ln y despejar con e^-4,62.", como_evitar: "En esta materia log es base 10: despeja con 10^y." },
      { error: "En b) sumar 10 al logaritmo (escribir -4,62 + 10).", como_evitar: "log(10) = 1 porque 10 = 10^1. El numero 10 tiene log igual a 1." }
    ]
  },
  {
    num: 8,
    nivel: "Intermedio",
    temas: ["repaso"],
    enunciado: "Un tanque de 2,5 m^3 contiene un liquido de densidad 0,789 g/cm^3. a) Calcule la masa del liquido en kg, con las cifras significativas correctas. b) Calcule el volumen, en mL, que ocupan 45,0 g de ese liquido.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Pasar el volumen a $\\text{cm}^3$: $$2{,}5\\ \\text{m}^3 \\times \\frac{10^{6}\\ \\text{cm}^3}{\\text{m}^3} = 2{,}5 \\times 10^{6}\\ \\text{cm}^3$$.", porque: "Como la densidad esta en $\\text{g/cm}^3$, el volumen debe pasar a $\\text{cm}^3$. Usamos $1\\ \\text{m} = 100\\ \\text{cm}$, y por eso $1\\ \\text{m}^3 = (100\\ \\text{cm})^3 = 10^{6}\\ \\text{cm}^3$, elevando al cubo tambien el 100. Con $2{,}5\\ \\text{m}^3 \\times \\frac{10^{6}\\ \\text{cm}^3}{\\text{m}^3}$ se obtiene el volumen en $\\text{cm}^3$." },
          { paso: "Calcular la masa: $$m = d \\times V = 0{,}789\\ \\text{g/cm}^3 \\times 2{,}5 \\times 10^{6}\\ \\text{cm}^3 = 1{,}9725 \\times 10^{6}\\ \\text{g}$$.", porque: "Usamos la relacion $d = \\frac{m}{V}$ despejada como $m = d \\times V$, porque la masa se obtiene multiplicando la densidad por el volumen. Los $\\text{cm}^3$ de la densidad y del volumen se cancelan y el resultado queda en gramos. Con $0{,}789\\ \\text{g/cm}^3 \\times 2{,}5 \\times 10^{6}\\ \\text{cm}^3$ obtenemos $1{,}9725 \\times 10^{6}\\ \\text{g}$." },
          { paso: "Pasar a kg y redondear: $$1{,}9725 \\times 10^{6}\\ \\text{g} \\times 10^{-3}\\ \\text{kg/g} = 1972{,}5\\ \\text{kg}$$, que con 2 cifras es $2{,}0 \\times 10^{3}\\ \\text{kg}$.", porque: "Para pasar gramos a kilogramos multiplicamos por $10^{-3}$, porque $1\\ \\text{kg} = 1000\\ \\text{g}$. Con $1{,}9725 \\times 10^{6}\\ \\text{g} \\times 10^{-3}\\ \\text{kg/g}$ queda $1972{,}5\\ \\text{kg}$. Como el dato $2{,}5\\ \\text{m}^3$ tiene 2 cifras, el resultado se redondea a $2{,}0 \\times 10^{3}\\ \\text{kg}$, y el cero final es significativo." }
        ],
        resultado: "$m = 2{,}0 \\times 10^{3}\\ \\text{kg}$"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Calcular el volumen: $$V = \\frac{m}{d} = \\frac{45{,}0\\ \\text{g}}{0{,}789\\ \\text{g/cm}^3} = 57{,}03\\ \\text{cm}^3$$.", porque: "Como $d = \\frac{m}{V}$, el volumen se despeja como $V = \\frac{m}{d}$: la masa se divide por la densidad. Con $45{,}0\\ \\text{g}$ y $0{,}789\\ \\text{g/cm}^3$, las unidades quedan en $\\text{cm}^3$ porque $\\text{g}$ dividido $\\text{g/cm}^3$ da $\\text{cm}^3$. Por eso el volumen se obtiene directamente en $\\text{cm}^3$, unidad que luego se pasa a mL." },
          { paso: "Pasar a mL: $1\\ \\text{mL} = 1\\ \\text{cm}^3$, asi que $V = 57{,}03\\ \\text{mL}$, y con 3 cifras queda $57{,}0\\ \\text{mL}$.", porque: "Usamos $1\\ \\text{mL} = 1\\ \\text{cm}^3$, asi que el volumen en $\\text{cm}^3$ tiene el mismo valor numerico en mL. Con $57{,}03\\ \\text{cm}^3$ obtenemos $57{,}03\\ \\text{mL}$. Como los datos $45{,}0$ y $0{,}789$ tienen 3 cifras, el resultado se redondea a $57{,}0\\ \\text{mL}$." },
          { paso: "Verificar: $$57{,}0\\ \\text{mL} \\times 0{,}789\\ \\text{g/mL} = 45{,}0\\ \\text{g}$$, que es la masa de partida.", porque: "Como comprobacion, multiplicamos el volumen por la densidad y debe volver la masa de partida. Con $57{,}0\\ \\text{mL} \\times 0{,}789\\ \\text{g/mL}$ obtenemos $45{,}0\\ \\text{g}$, que coincide con el dato del enunciado. Si no coincidiera, habria un error de division o de cifras." }
        ],
        resultado: "$V = 57{,}0\\ \\text{mL}$"
      }
    ],
    errores_tipicos: [
      { error: "Convertir 2,5 m^3 a 2500 cm^3, olvidando el cubo de la conversion.", como_evitar: "1 m = 100 cm, entonces 1 m^3 = 100^3 cm^3 = 10^6 cm^3." },
      { error: "Dar la masa como 1972,5 kg, con 5 cifras, sin redondear.", como_evitar: "El dato 2,5 m^3 tiene 2 cifras; el resultado se redondea a 2,0 x 10^3 kg." }
    ]
  },
  {
    num: 9,
    nivel: "Intermedio",
    temas: ["repaso"],
    enunciado: "Un gas se guarda a 12,0 C y 1,20 atm. a) Exprese la temperatura en kelvin, con una cifra decimal. b) Exprese la presion en mmHg y en kPa, con 3 cifras significativas.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Usar $T(\\text{K}) = t(\\text{C}) + 273{,}15$: $$12{,}0 + 273{,}15 = 285{,}15\\ \\text{K}$$.", porque: "Para pasar de Celsius a kelvin usamos $T(\\text{K}) = t(\\text{C}) + 273{,}15$, porque la escala kelvin empieza en el cero absoluto. Reemplazamos con $12{,}0\\ \\text{C}$ y calculamos $12{,}0 + 273{,}15$. Es una suma y no una resta, y eso evita obtener un valor negativo." },
          { paso: "Redondear a una cifra decimal, como el dato $12{,}0$: $T = 285{,}2\\ \\text{K}$.", porque: "Al sumar, el resultado se redondea a la menor cantidad de decimales de los datos. Como $12{,}0$ tiene 1 decimal, el valor $285{,}15$ se lleva a $285{,}2\\ \\text{K}$. Por eso la temperatura final es $T = 285{,}2\\ \\text{K}$." },
          { paso: "Verificar que $T$ sea positiva: $285{,}2\\ \\text{K} > 0$, asi que la conversion es razonable.", porque: "En kelvin no existen temperaturas negativas, asi que verificamos que el valor sea mayor que 0. Como $285{,}2\\ \\text{K}$ es positivo, la conversion es razonable. Un resultado negativo indicaria un error de signo o de formula." }
        ],
        resultado: "$T = 285{,}2\\ \\text{K}$"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Convertir a mmHg: $$1{,}20\\ \\text{atm} \\times 760\\ \\text{mmHg/atm} = 912\\ \\text{mmHg}$$.", porque: "Para pasar de atm a mmHg usamos la equivalencia $1\\ \\text{atm} = 760\\ \\text{mmHg}$, multiplicando por el factor $760\\ \\text{mmHg/atm}$. Asi las atm se cancelan y queda la unidad buscada. Con $1{,}20\\ \\text{atm} \\times 760\\ \\text{mmHg/atm}$ obtenemos $912\\ \\text{mmHg}$." },
          { paso: "Convertir a kPa: $$1{,}20\\ \\text{atm} \\times 101{,}32\\ \\text{kPa/atm} = 121{,}6\\ \\text{kPa}$$, que con 3 cifras queda $122\\ \\text{kPa}$.", porque: "Multiplicamos por $101{,}32\\ \\text{kPa/atm}$ para cancelar las atm y quedar en kPa. Con $1{,}20\\ \\text{atm} \\times 101{,}32\\ \\text{kPa/atm}$ el valor es $121{,}6\\ \\text{kPa}$. Como el enunciado pide 3 cifras significativas, redondeamos y queda $122\\ \\text{kPa}$." },
          { paso: "Chequear el orden de magnitud: $1\\ \\text{atm} = 760\\ \\text{mmHg} = 101\\ \\text{kPa}$, y $1{,}20\\ \\text{atm}$ es mayor que $1\\ \\text{atm}$, asi que los valores deben superar $760\\ \\text{mmHg}$ y $101\\ \\text{kPa}$.", porque: "Comparamos con la equivalencia $1\\ \\text{atm} = 760\\ \\text{mmHg} = 101\\ \\text{kPa}$ para detectar errores de factor. Como $1{,}20\\ \\text{atm}$ es mayor que $1\\ \\text{atm}$, ambos valores deben superar $760\\ \\text{mmHg}$ y $101\\ \\text{kPa}$. Los resultados $912\\ \\text{mmHg}$ y $122\\ \\text{kPa}$ cumplen esa condicion, asi que son razonables." }
        ],
        resultado: "$P = 912\\ \\text{mmHg} = 122\\ \\text{kPa}$"
      }
    ],
    errores_tipicos: [
      { error: "Restar 273,15 a los grados Celsius, dando T = -261,15 K.", como_evitar: "Siempre se suma: T(K) = t(C) + 273,15. Un valor negativo en kelvin indica error." },
      { error: "Usar 1 atm = 1013 kPa (olvidar la coma de 101,32).", como_evitar: "1 atm = 101,32 kPa. Verifica el orden de magnitud al final: 1013 kPa seria 10 veces mas." }
    ]
  },
  {
    num: 10,
    nivel: "Intermedio",
    temas: ["repaso"],
    enunciado: "Un cultivo tiene 3,2 x 10^8 celulas por mL. Calcule cuantas celulas hay en 250,0 microL del cultivo, sabiendo que 1 microL = 10^-6 L, y exprese el resultado en notacion cientifica con las cifras significativas que corresponden.",
    resolucion: [
      {
        parte: "",
        pasos: [
          { paso: "Pasar el volumen a mL: $$250{,}0\\ \\mu\\text{L} \\times \\frac{10^{-6}\\ \\text{L}}{\\mu\\text{L}} = 2{,}500 \\times 10^{-4}\\ \\text{L}$$, y $\\times 1000\\ \\text{mL/L} = 0{,}2500\\ \\text{mL}$.", porque: "Como la concentracion esta en celulas por mL, convertimos el volumen a mL. Usamos $1\\ \\mu\\text{L} = 10^{-6}\\ \\text{L}$ y $1\\ \\text{L} = 1000\\ \\text{mL}$, por lo que el factor total de $\\mu\\text{L}$ a mL es $10^{-3}$. Con $250{,}0\\ \\mu\\text{L}$ obtenemos $0{,}2500\\ \\text{mL}$, y asi las unidades coinciden." },
          { paso: "Multiplicar concentracion por volumen: $$N = 3{,}2 \\times 10^{8}\\ \\text{celulas/mL} \\times 0{,}2500\\ \\text{mL}$$.", porque: "La cantidad total es la concentracion por el volumen, por eso multiplicamos $N = \\text{concentracion} \\times \\text{volumen}$. Con $3{,}2 \\times 10^{8}\\ \\text{celulas/mL} \\times 0{,}2500\\ \\text{mL}$, los mL se cancelan y quedan celulas, que es la unidad buscada. Asi el calculo queda planteado con unidades compatibles." },
          { paso: "Operar: $$3{,}2 \\times 0{,}2500 = 0{,}80$$ y $10^{8}$, asi que $N = 0{,}80 \\times 10^{8} = 8{,}0 \\times 10^{7}\\ \\text{celulas}$.", porque: "Multiplicamos las mantisas: $3{,}2 \\times 0{,}2500 = 0{,}80$, y la potencia $10^{8}$ se mantiene. Como $0{,}80$ no esta entre 1 y 10, corremos la coma un lugar a la derecha y restamos 1 al exponente. Por eso $N = 8{,}0 \\times 10^{7}\\ \\text{celulas}$." },
          { paso: "Cifras: $3{,}2 \\times 10^{8}$ tiene 2 cifras, asi que $N = 8{,}0 \\times 10^{7}\\ \\text{celulas}$.", porque: "Redondeamos a 2 cifras porque el dato $3{,}2 \\times 10^{8}$ tiene 2 cifras y es el menos preciso. Asi el resultado queda con 2 cifras, y el cero final de $8{,}0$ es significativo. Entonces el resultado final es $N = 8{,}0 \\times 10^{7}\\ \\text{celulas}$." }
        ],
        resultado: "$N = 8{,}0 \\times 10^{7}\\ \\text{celulas}$"
      }
    ],
    errores_tipicos: [
      { error: "Pasar microL a mL dividiendo por 10 en lugar de por 1000.", como_evitar: "1 microL = 10^-6 L = 10^-3 mL. Por eso 250,0 microL = 0,2500 mL." },
      { error: "Multiplicar la concentracion por 250,0 sin convertir el volumen, dando 8,0 x 10^10 celulas.", como_evitar: "Las unidades deben cancelarse: mL con mL. Si quedan microL, el calculo esta mal." }
    ]
  },
  {
    num: 11,
    nivel: "Avanzado",
    temas: ["repaso"],
    enunciado: "Un cubo macizo de un metal tiene 2,0 cm de arista y una masa de 21,6 g. a) Calcule su densidad en g/cm^3 con las cifras significativas correctas. b) Exprese la densidad en kg/m^3. c) Si el cubo se corta en dos mitades iguales, justifique que ocurre con la masa y con la densidad de cada mitad.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Calcular el volumen: $$V = (2{,}0\\ \\text{cm})^3 = 8{,}0\\ \\text{cm}^3$$.", porque: "Usamos la formula del volumen de un cubo, que es la arista elevada al cubo, porque todas sus aristas son iguales. Con $2{,}0\\ \\text{cm}$ de arista, $V = (2{,}0\\ \\text{cm})^3$ da $8{,}0\\ \\text{cm}^3$. El decimal se escribe para conservar las 2 cifras de la arista." },
          { paso: "Aplicar $$d = \\frac{m}{V} = \\frac{21{,}6\\ \\text{g}}{8{,}0\\ \\text{cm}^3} = 2{,}7\\ \\text{g/cm}^3$$.", porque: "Aplicamos $d = \\frac{m}{V}$ con la masa de $21{,}6\\ \\text{g}$ y el volumen de $8{,}0\\ \\text{cm}^3$. El cociente da $2{,}7\\ \\text{g/cm}^3$, que es la densidad del cubo. Como el volumen tiene 2 cifras significativas, el resultado se informa con 2 cifras." }
        ],
        resultado: "$d = 2{,}7\\ \\text{g/cm}^3$"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Usar $1\\ \\text{g/cm}^3 = 1000\\ \\text{kg/m}^3$: $$2{,}7\\ \\text{g/cm}^3 \\times 1000 = 2{,}7 \\times 10^{3}\\ \\text{kg/m}^3$$.", porque: "Usamos la equivalencia $1\\ \\text{g/cm}^3 = 1000\\ \\text{kg/m}^3$, que surge de $1\\ \\text{g} = 10^{-3}\\ \\text{kg}$ y $1\\ \\text{cm}^3 = 10^{-6}\\ \\text{m}^3$. Al dividir las potencias $\\frac{10^{-3}}{10^{-6}}$ se obtiene $10^{3}$. Asi $2{,}7\\ \\text{g/cm}^3 \\times 1000 = 2{,}7 \\times 10^{3}\\ \\text{kg/m}^3$, con la misma densidad expresada en unidades del SI." }
        ],
        resultado: "$d = 2{,}7 \\times 10^{3}\\ \\text{kg/m}^3$"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "Cada mitad tiene masa $\\frac{21{,}6\\ \\text{g}}{2} = 10{,}8\\ \\text{g}$ y volumen $\\frac{8{,}0\\ \\text{cm}^3}{2} = 4{,}0\\ \\text{cm}^3$.", porque: "Cortar el cubo en dos mitades iguales reparte la masa y el volumen en partes iguales. Como $21{,}6\\ \\text{g}$ y $8{,}0\\ \\text{cm}^3$ se dividen por 2, cada mitad tiene $10{,}8\\ \\text{g}$ y $4{,}0\\ \\text{cm}^3$. Por eso la masa y el volumen de cada mitad son la mitad de los del cubo original." },
          { paso: "La densidad de cada mitad sigue siendo $$\\frac{10{,}8\\ \\text{g}}{4{,}0\\ \\text{cm}^3} = 2{,}7\\ \\text{g/cm}^3$$.", porque: "Como $d = \\frac{m}{V}$ y ambas cantidades se dividen por 2, el cociente no cambia. Con $\\frac{10{,}8\\ \\text{g}}{4{,}0\\ \\text{cm}^3}$ el resultado sigue siendo $2{,}7\\ \\text{g/cm}^3$, igual que antes. Esto muestra que la densidad es una propiedad intensiva: no depende de la cantidad de muestra." }
        ],
        resultado: "Cada mitad tiene $10{,}8\\ \\text{g}$ y la misma densidad, $2{,}7\\ \\text{g/cm}^3$"
      }
    ],
    errores_tipicos: [
      { error: "Escribir V = 8 cm^3 y redondear el resultado a 1 cifra (d = 3 g/cm^3).", como_evitar: "Un entero que sale de elevar un dato al cubo conserva las cifras del dato: 8,0 cm^3." },
      { error: "En c) decir que la densidad de cada mitad es la mitad de la original.", como_evitar: "Lo que se reparte es la masa (extensiva). La densidad (intensiva) no cambia al cortar." }
    ]
  },
  {
    num: 12,
    nivel: "Avanzado",
    temas: ["repaso"],
    enunciado: "Se sabe que log(x) = -3,62. a) Calcule x con 2 cifras significativas. b) Calcule log(1/x) y justifique el signo del resultado. c) Calcule log(x^2) usando el valor de log(x) del enunciado.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Despejar: $$x = 10^{-3{,}62}$$.", porque: "Usamos la definicion de logaritmo: si $\\log(x) = y$, entonces $x = 10^{y}$. Con $\\log(x) = -3{,}62$ despejamos $x$ elevando 10 a ese valor. Es el mismo criterio que en los ejercicios anteriores de logaritmos." },
          { paso: "Calcular: $$10^{-3{,}62} = 10^{-4} \\times 10^{0{,}38} = 2{,}399 \\times 10^{-4}$$.", porque: "Separamos el exponente en parte entera ($-4$) y decimal ($0{,}38$), con $10^{-3{,}62} = 10^{-4} \\times 10^{0{,}38}$. Esto permite usar la calculadora solo para la parte decimal. Con ella, $10^{0{,}38}$ da aprox. $2{,}40$ y el total queda $2{,}399 \\times 10^{-4}$, que es el valor de $x$ antes de redondear." },
          { paso: "Redondear a 2 cifras significativas: $$x = 2{,}4 \\times 10^{-4}$$.", porque: "El enunciado pide 2 cifras significativas, asi que miramos el digito siguiente a las dos primeras cifras de $2{,}399$, que es 9. Ese 9 hace subir el 3 a 4, y por eso el valor se redondea a $2{,}4$. Entonces $x = 2{,}4 \\times 10^{-4}$." }
        ],
        resultado: "$x = 2{,}4 \\times 10^{-4}$"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Aplicar la propiedad del cociente: $$\\log\\left(\\frac{1}{x}\\right) = \\log(1) - \\log(x)$$.", porque: "Usamos la propiedad del cociente: el logaritmo de un cociente es el logaritmo del numerador menos el del denominador. Asi separamos $\\log\\left(\\frac{1}{x}\\right)$ en $\\log(1) - \\log(x)$, y con $\\log(x) = -3{,}62$ podemos completar el calculo. Esto evita tener que calcular $\\frac{1}{x}$ directamente." },
          { paso: "$\\log(1) = 0$, asi que $$\\log\\left(\\frac{1}{x}\\right) = 0 - (-3{,}62) = 3{,}62$$.", porque: "Como $\\log(1) = 0$ porque $10^{0} = 1$, la expresion queda $0 - (-3{,}62)$. Restar un numero negativo equivale a sumar su valor absoluto, por eso el resultado es $+3{,}62$. Entonces $\\log\\left(\\frac{1}{x}\\right) = 3{,}62$." },
          { paso: "Justificar el signo: $\\frac{1}{x} = 4{,}2 \\times 10^{3}$ es mayor que 1, y el log de un numero mayor que 1 es positivo.", porque: "Antes de confiar en el signo, miramos el orden de magnitud: $\\frac{1}{x} = 4{,}2 \\times 10^{3}$ es mayor que 1. Como el logaritmo de un numero mayor que 1 es positivo, el signo positivo es coherente. Asi el signo de $3{,}62$ queda confirmado." }
        ],
        resultado: "$\\log\\left(\\frac{1}{x}\\right) = 3{,}62$ (positivo porque $\\frac{1}{x} > 1$)"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "Usar la propiedad de la potencia: $$\\log(x^{2}) = 2 \\times \\log(x)$$.", porque: "Usamos la propiedad de la potencia: el logaritmo de una potencia es el exponente multiplicado por el logaritmo de la base. Aplicada a $x^{2}$, el exponente 2 pasa a multiplicar a $\\log(x)$. Asi no hace falta calcular $x$ para obtener el resultado." },
          { paso: "$$\\log(x^{2}) = 2 \\times (-3{,}62) = -7{,}24$$.", porque: "Reemplazamos $\\log(x) = -3{,}62$ y calculamos $2 \\times (-3{,}62) = -7{,}24$. El signo se mantiene porque el 2 es positivo. Como verificacion, el logaritmo no se eleva al cuadrado, porque eso daria un valor positivo y erroneo." }
        ],
        resultado: "$\\log(x^{2}) = -7{,}24$"
      }
    ],
    errores_tipicos: [
      { error: "En b) escribir -3,62 porque 'el log de la inversa es el mismo'.", como_evitar: "log(1/x) = -log(x). Chequea el signo: 1/x es mayor que 1, asi que su log es positivo." },
      { error: "En c) elevar el log al cuadrado: (-3,62)^2 = 13,10.", como_evitar: "log(a^b) = b x log(a): el exponente multiplica al log, no lo eleva al cuadrado." }
    ]
  },
  {
    num: 13,
    nivel: "Avanzado",
    temas: ["repaso"],
    enunciado: "Un tanque de agua tiene un volumen de 45 m^3 (dato con 2 cifras significativas). a) Exprese el volumen en litros. b) Calcule la masa de agua del tanque en kg, con densidad del agua 1,00 g/cm^3. c) Si el tanque contuviera agua de mar, de densidad 1,03 g/cm^3, calcule la masa y justifique por que cambia aunque el volumen sea el mismo.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Usar $1\\ \\text{m}^3 = 1000\\ \\text{L}$: $$45\\ \\text{m}^3 \\times 1000\\ \\text{L/m}^3 = 4{,}5 \\times 10^{4}\\ \\text{L}$$.", porque: "Usamos la equivalencia $1\\ \\text{m}^3 = 1000\\ \\text{L}$, que surge de $1\\ \\text{m} = 10\\ \\text{dm}$: al elevar al cubo, $1\\ \\text{m}^3 = 10^{3}\\ \\text{dm}^3$, y como $1\\ \\text{dm}^3 = 1\\ \\text{L}$ queda $1000\\ \\text{L}$. Con $45\\ \\text{m}^3 \\times 1000\\ \\text{L/m}^3$ se obtiene el volumen en litros. Entonces el resultado es $4{,}5 \\times 10^{4}\\ \\text{L}$." }
        ],
        resultado: "$V = 4{,}5 \\times 10^{4}\\ \\text{L}$"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Pasar el volumen a $\\text{cm}^3$: $$45\\ \\text{m}^3 \\times \\frac{10^{6}\\ \\text{cm}^3}{\\text{m}^3} = 4{,}5 \\times 10^{7}\\ \\text{cm}^3$$.", porque: "La densidad esta en $\\text{g/cm}^3$, asi que el volumen debe pasar a $\\text{cm}^3$. Usamos $1\\ \\text{m}^3 = 10^{6}\\ \\text{cm}^3$ y multiplicamos $45\\ \\text{m}^3$ por ese factor. Con $45 \\times 10^{6}$ obtenemos $4{,}5 \\times 10^{7}\\ \\text{cm}^3$." },
          { paso: "Calcular la masa: $$m = d \\times V = 1{,}00\\ \\text{g/cm}^3 \\times 4{,}5 \\times 10^{7}\\ \\text{cm}^3 = 4{,}5 \\times 10^{7}\\ \\text{g}$$.", porque: "Como $d = \\frac{m}{V}$, la masa se despeja como $m = d \\times V$, y los $\\text{cm}^3$ se cancelan. Con $1{,}00\\ \\text{g/cm}^3 \\times 4{,}5 \\times 10^{7}\\ \\text{cm}^3$ queda $4{,}5 \\times 10^{7}\\ \\text{g}$. Como la densidad vale $1{,}00$, el valor numerico de la masa coincide con el del volumen en $\\text{cm}^3$." },
          { paso: "Pasar a kg: $$4{,}5 \\times 10^{7}\\ \\text{g} \\times 10^{-3}\\ \\text{kg/g} = 4{,}5 \\times 10^{4}\\ \\text{kg}$$.", porque: "Para pasar gramos a kilogramos multiplicamos por $10^{-3}$, porque $1\\ \\text{kg} = 1000\\ \\text{g}$. Con $4{,}5 \\times 10^{7}\\ \\text{g} \\times 10^{-3}\\ \\text{kg/g}$ obtenemos $4{,}5 \\times 10^{4}\\ \\text{kg}$. El resultado tiene 2 cifras, igual que el dato del volumen de $45\\ \\text{m}^3$." }
        ],
        resultado: "$m = 4{,}5 \\times 10^{4}\\ \\text{kg}$"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "Con $d = 1{,}03\\ \\text{g/cm}^3$: $$m = 1{,}03 \\times 4{,}5 \\times 10^{7}\\ \\text{g} = 4{,}635 \\times 10^{4}\\ \\text{kg}$$, que con 2 cifras es $4{,}6 \\times 10^{4}\\ \\text{kg}$.", porque: "Usamos la nueva densidad con el mismo volumen: $m = d \\times V$ da $1{,}03\\ \\text{g/cm}^3 \\times 4{,}5 \\times 10^{7}\\ \\text{cm}^3 = 4{,}635 \\times 10^{7}\\ \\text{g}$. Pasado a kg queda $4{,}635 \\times 10^{4}\\ \\text{kg}$, y como el volumen de $45\\ \\text{m}^3$ tiene 2 cifras, el resultado es $4{,}6 \\times 10^{4}\\ \\text{kg}$. Entonces con agua de mar la masa del tanque es $4{,}6 \\times 10^{4}\\ \\text{kg}$." },
          { paso: "El volumen es el mismo y la masa cambia porque $m = d \\times V$: con $V$ fijo, la masa es proporcional a la densidad.", porque: "Como $m = d \\times V$, con el volumen fijo la masa es proporcional a la densidad. Dado que $1{,}03\\ \\text{g/cm}^3$ es mayor que los $1{,}00\\ \\text{g/cm}^3$ del agua del inciso b), cada $\\text{cm}^3$ pesa mas. Por eso la masa sube aunque el volumen no cambie, debido a las sales disueltas en el agua de mar." }
        ],
        resultado: "$m = 4{,}6 \\times 10^{4}\\ \\text{kg}$; la masa sube porque la densidad es mayor"
      }
    ],
    errores_tipicos: [
      { error: "Convertir m^3 a L multiplicando por 100 o por 10 en lugar de por 1000.", como_evitar: "1 m^3 = 1000 L. Chequeo: 1 m = 10 dm, entonces 1 m^3 = 10^3 dm^3." },
      { error: "Usar la densidad en g/cm^3 con el volumen en m^3, sin convertir, y obtener una masa en g muy chica.", como_evitar: "Lleva el volumen a cm^3 antes de multiplicar por la densidad." }
    ]
  },
  {
    num: 14,
    nivel: "Avanzado",
    temas: ["repaso"],
    enunciado: "a) Calcule E = (4,2 x 10^-3 x 6,0 x 10^5) / (-1,5 x 10^-2), expresando el resultado en notacion cientifica con las cifras significativas que corresponden. b) Justifique el signo de E sin volver a calcularlo.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Multiplicar el numerador: $$4{,}2 \\times 6{,}0 = 25{,}2$$ y $10^{-3+5} = 10^{2}$, asi que el numerador es $2{,}52 \\times 10^{3}$.", porque: "Calculamos el numerador multiplicando por separado los coeficientes y las potencias de 10. Con $4{,}2 \\times 6{,}0 = 25{,}2$ y, al multiplicar potencias de la misma base, $-3 + 5 = 2$. Asi el numerador queda como $25{,}2 \\times 10^{2}$, que pasamos a $2{,}52 \\times 10^{3}$ para dejar la mantisa entre 1 y 10." },
          { paso: "Dividir por el denominador: $$\\frac{2{,}52 \\times 10^{3}}{-1{,}5 \\times 10^{-2}} = -1{,}68 \\times 10^{5}$$.", porque: "Usamos la regla de division de potencias, que consiste en restar los exponentes: $3 - (-2) = 5$. Dividimos las mantisas: $\\frac{2{,}52}{-1{,}5} = -1{,}68$. Por eso el cociente queda como $-1{,}68 \\times 10^{5}$, y restar un negativo suma, lo que deja el exponente en 5." },
          { paso: "Redondear a 2 cifras (todos los datos tienen 2): $E = -1{,}7 \\times 10^{5}$.", porque: "Los datos $4{,}2$; $6{,}0$ y $1{,}5$ tienen 2 cifras, asi que el resultado tambien debe tener 2. Como el dato menos preciso manda, $-1{,}68$ se redondea a $-1{,}7$. Entonces $E = -1{,}7 \\times 10^{5}$ es el resultado de la parte a)." }
        ],
        resultado: "$E = -1{,}7 \\times 10^{5}$"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "El numerador es positivo: $4{,}2$ y $6{,}0$ son positivos y las potencias de 10 nunca cambian el signo.", porque: "Para el signo de un producto o un cociente solo importa el signo de cada factor, porque las potencias de 10 siempre son positivas. Analizamos el numerador con los coeficientes $4{,}2$ y $6{,}0$, que son positivos. Asi el numerador resulta positivo sin necesidad de hacer la cuenta completa." },
          { paso: "El denominador es negativo por el signo menos de $-1{,}5$.", porque: "El denominador tiene el signo menos de $-1{,}5$, y ese signo se aplica al cociente completo. Por eso marcamos el signo de cada factor antes de operar, lo que evita errores al dividir. Con esto ya sabemos que el denominador es negativo." },
          { paso: "Positivo / negativo da negativo, asi que $E < 0$.", porque: "Usamos la regla de signos para cocientes: si los signos son distintos el resultado es negativo, y si son iguales es positivo. Como el numerador es positivo y el denominador negativo, $E < 0$. Eso coincide con el resultado $-1{,}7 \\times 10^{5}$ de la parte a)." }
        ],
        resultado: "$E$ es negativo: numerador positivo y denominador negativo"
      }
    ],
    errores_tipicos: [
      { error: "Escribir E = +1,7 x 10^5 olvidando el signo del denominador.", como_evitar: "Antes de dividir, marca el signo de cada factor. Positivo / negativo = negativo." },
      { error: "Restar los exponentes del numerador (-3 - 5) en vez de sumarlos.", como_evitar: "Al multiplicar potencias de 10 se suman: -3 + 5 = 2." }
    ]
  },
  {
    num: 15,
    nivel: "Avanzado",
    temas: ["repaso"],
    enunciado: "Un frasco contiene 3,0 mg de un virus. Cada particula tiene una masa de 1,5 x 10^-16 g. a) Calcule el numero de particulas del frasco, con las cifras significativas correctas. b) Si la masa de la muestra se leyera como 3,0 g en lugar de 3,0 mg, cuantas veces mas particulas daria el calculo? Justifique. c) Calcule log(N), usando el N de a), con 3 cifras decimales.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Pasar la masa a gramos: $$3{,}0\\ \\text{mg} \\times 10^{-3}\\ \\text{g/mg} = 3{,}0 \\times 10^{-3}\\ \\text{g}$$.", porque: "Pasamos la masa a gramos porque $1\\ \\text{mg} = 10^{-3}\\ \\text{g}$, y asi la masa total es compatible con la masa de cada particula, que tambien esta en g. Con $3{,}0\\ \\text{mg} \\times 10^{-3}\\ \\text{g/mg}$ obtenemos $3{,}0 \\times 10^{-3}\\ \\text{g}$. Conviene verificar la conversion antes de dividir." },
          { paso: "Dividir la masa total por la masa de una particula: $$N = \\frac{3{,}0 \\times 10^{-3}\\ \\text{g}}{1{,}5 \\times 10^{-16}\\ \\text{g}} = 2{,}0 \\times 10^{13}$$ particulas.", porque: "Usamos que el numero de particulas es la masa total dividida por la masa de una particula: $N = \\frac{m_{\\text{total}}}{m_{\\text{particula}}}$. Con $\\frac{3{,}0 \\times 10^{-3}\\ \\text{g}}{1{,}5 \\times 10^{-16}\\ \\text{g}}$, los gramos se cancelan y el cociente da $2{,}0 \\times 10^{13}$ particulas. Como resultado queda un numero sin unidades." },
          { paso: "Cifras: $3{,}0$ y $1{,}5$ tienen 2 cifras, asi que $N = 2{,}0 \\times 10^{13}$.", porque: "Los datos $3{,}0$ y $1{,}5$ tienen 2 cifras, asi que el resultado tambien debe tener 2. Por eso $N = 2{,}0 \\times 10^{13}$, con el cero final significativo. Redondeamos solo al final para evitar perder precision en los pasos intermedios." }
        ],
        resultado: "$N = 2{,}0 \\times 10^{13}$ particulas"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Con $3{,}0\\ \\text{g}$: $$N' = \\frac{3{,}0}{1{,}5 \\times 10^{-16}} = 2{,}0 \\times 10^{16}$$ particulas.", porque: "Usamos el mismo calculo que en a), pero con la masa de $3{,}0\\ \\text{g}$ en lugar de $3{,}0\\ \\text{mg}$. Como $3{,}0\\ \\text{g}$ es 1000 veces mayor, el numerador cambia y la masa de la particula se mantiene igual. Con $\\frac{3{,}0}{1{,}5 \\times 10^{-16}}$ obtenemos $2{,}0 \\times 10^{16}$ particulas." },
          { paso: "Cociente: $$\\frac{2{,}0 \\times 10^{16}}{2{,}0 \\times 10^{13}} = 1000$$.", porque: "Dividimos $2{,}0 \\times 10^{16}$ por $2{,}0 \\times 10^{13}$ y el cociente da $1000$, que es la relacion entre $1\\ \\text{g}$ y $1\\ \\text{mg}$. Como el numero de particulas es proporcional a la masa, el error es de prefijo y no de cuenta. Por eso el calculo daria 1000 veces mas particulas." }
        ],
        resultado: "1000 veces mas particulas ($2{,}0 \\times 10^{16}$)"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "$$\\log(2{,}0 \\times 10^{13}) = \\log(2{,}0) + \\log(10^{13}) = 0{,}30103 + 13 = 13{,}30103$$.", porque: "Usamos la propiedad del producto de logaritmos, $\\log(a \\times 10^{n}) = \\log(a) + n$, porque $\\log(10^{13}) = 13$. Con $\\log(2{,}0 \\times 10^{13}) = \\log(2{,}0) + \\log(10^{13})$, obtenemos $0{,}30103 + 13$. Asi el resultado es $13{,}30103$." },
          { paso: "Redondear a 3 decimales: $\\log(N) = 13{,}301$.", porque: "Redondeamos $13{,}30103$ a 3 decimales, y el cuarto decimal (0) no altera el tercero, asi que queda $13{,}301$. Este redondeo se hace solo al final, sin redondear los pasos intermedios. Por eso $\\log(N) = 13{,}301$." }
        ],
        resultado: "$\\log(N) = 13{,}301$"
      }
    ],
    errores_tipicos: [
      { error: "Dividir 3,0 mg por 1,5 x 10^-16 g sin pasar a gramos, dando 2,0 x 10^16 particulas.", como_evitar: "Lleva todo a gramos antes de dividir: 3,0 mg = 3,0 x 10^-3 g." },
      { error: "En c) calcular log(2,0) x 13 en vez de sumar.", como_evitar: "log(a x 10^n) = log(a) + n. Suma, no multipliques." }
    ]
  },
  {
    num: 16,
    nivel: "Tipo parcial",
    temas: ["repaso", "materia"],
    enunciado: "En el laboratorio de control de calidad de una planta potabilizadora se analiza una muestra de agua de rio. Se tomaron 0,250 L de muestra, que pesaron 251,2 g. Al filtrarla, el solido retenido pesa 0,0384 g. Ademas, la concentracion de un contaminante se informa como log(C) = -5,70, con C en mol/L. a) Calcule la densidad de la muestra en g/cm^3 con las cifras significativas correctas, y expresela en kg/m^3. b) Clasifique la muestra como sistema homogeneo o heterogeneo, y como sustancia o mezcla, justificando con el solido filtrado. c) Calcule C con 2 cifras significativas y el valor de log(10 C). d) Calcule la masa del solido en mg. Justifique que le pasaria a la densidad de a) si el volumen se hubiera leido como 0,250 mL en lugar de 0,250 L.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Pasar el volumen a $\\text{cm}^3$: $$0{,}250\\ \\text{L} \\times 1000\\ \\text{cm}^3/\\text{L} = 250\\ \\text{cm}^3$$, porque $1\\ \\text{L} = 1\\ \\text{dm}^3 = 1000\\ \\text{cm}^3$.", porque: "Pasamos el volumen a $\\text{cm}^3$ porque la densidad se pide en $\\text{g/cm}^3$. Como $1\\ \\text{L} = 1\\ \\text{dm}^3 = 1000\\ \\text{cm}^3$, con $0{,}250\\ \\text{L} \\times 1000\\ \\text{cm}^3/\\text{L}$ obtenemos $250\\ \\text{cm}^3$. El factor convierte la unidad sin cambiar las cifras significativas de $0{,}250$." },
          { paso: "Calcular $$d = \\frac{m}{V} = \\frac{251{,}2\\ \\text{g}}{250\\ \\text{cm}^3} = 1{,}0048\\ \\text{g/cm}^3$$.", porque: "Aplicamos $d = \\frac{m}{V}$ con la masa y el volumen ya en unidades compatibles: $\\frac{251{,}2\\ \\text{g}}{250\\ \\text{cm}^3}$. El cociente sale con mas cifras que las de los datos, por eso hay que redondear despues. Con $\\frac{251{,}2}{250}$ obtenemos $1{,}0048\\ \\text{g/cm}^3$." },
          { paso: "Cifras: $0{,}250\\ \\text{L}$ tiene 3 y $251{,}2\\ \\text{g}$ tiene 4; el resultado queda con 3: $1{,}00\\ \\text{g/cm}^3$.", porque: "Contamos las cifras de los datos: $0{,}250\\ \\text{L}$ tiene 3 cifras y $251{,}2\\ \\text{g}$ tiene 4. Como el resultado se informa con la cantidad del dato menos preciso, queda con 3 cifras. Por eso la densidad es $1{,}00\\ \\text{g/cm}^3$, con el cero final significativo." },
          { paso: "Pasar a $\\text{kg/m}^3$: $$1{,}00\\ \\text{g/cm}^3 \\times 1000 = 1{,}00 \\times 10^{3}\\ \\text{kg/m}^3$$.", porque: "Para expresar la densidad en $\\text{kg/m}^3$ usamos $1\\ \\text{g} = 10^{-3}\\ \\text{kg}$ y $1\\ \\text{cm}^3 = 10^{-6}\\ \\text{m}^3$. Al dividir, $\\frac{10^{-3}}{10^{-6}} = 10^{3}$, asi que $1\\ \\text{g/cm}^3$ equivale a $1000\\ \\text{kg/m}^3$. Entonces $1{,}00\\ \\text{g/cm}^3 \\times 1000$ da $1{,}00 \\times 10^{3}\\ \\text{kg/m}^3$." }
        ],
        resultado: "$d = 1{,}00\\ \\text{g/cm}^3 = 1{,}00 \\times 10^{3}\\ \\text{kg/m}^3$"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Hay un solido en suspension que se separa por filtracion: el sistema tiene mas de una fase, separadas por interfases.", porque: "El solido se separa por filtracion, lo que muestra que la muestra tiene mas de una fase separada por interfases. Usamos el criterio del numero de fases: un sistema con mas de una fase es heterogeneo. Por eso el sistema no es homogeneo." },
          { paso: "Como hay agua con sales y contaminantes que se separan por metodos fisicos o quimicos, el sistema tiene dos o mas sustancias.", porque: "Hay agua con sales y contaminantes, y estos componentes se separan por metodos fisicos o quimicos. Eso indica dos o mas sustancias, y una mezcla no tiene composicion fija. Por eso la muestra se clasifica como mezcla." },
          { paso: "Resultado: sistema heterogeneo y mezcla.", porque: "Usamos dos criterios independientes: el numero de fases (homogeneo o heterogeneo) y la composicion (sustancia o mezcla). Se responde cada uno por separado. Con los resultados anteriores, el sistema es heterogeneo y mezcla." }
        ],
        resultado: "Sistema heterogeneo, mezcla"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "Despejar $C$: $$C = 10^{-5{,}70}\\ \\text{mol/L} = 1{,}995 \\times 10^{-6}\\ \\text{mol/L}$$.", porque: "Si $\\log(C) = y$, entonces $C = 10^{y}$. Con $y = -5{,}70$ se obtiene $C = 10^{-5{,}70}$, y con calculadora la parte decimal da $1{,}995 \\times 10^{-6}\\ \\text{mol/L}$. Asi se obtiene el valor sin redondear de la concentracion." },
          { paso: "Redondear a 2 cifras significativas: $$C = 2{,}0 \\times 10^{-6}\\ \\text{mol/L}$$.", porque: "El enunciado pide 2 cifras significativas, asi que miramos el digito siguiente al 1 en $1{,}995$, que es 9. Ese 9 hace subir la cifra, y $1{,}995$ se redondea a $2{,}0 \\times 10^{-6}\\ \\text{mol/L}$. Este es el valor final de $C$." },
          { paso: "$$\\log(10\\,C) = \\log(10) + \\log(C) = 1 + (-5{,}70) = -4{,}70$$.", porque: "El log de un producto es la suma de los logaritmos, y $\\log(10) = 1$ porque $10 = 10^{1}$. Reemplazamos con $\\log(10\\,C) = 1 + (-5{,}70) = -4{,}70$. Asi el logaritmo sube 1 unidad respecto de $\\log(C)$." }
        ],
        resultado: "$C = 2{,}0 \\times 10^{-6}\\ \\text{mol/L}$ ; $\\log(10\\,C) = -4{,}70$"
      },
      {
        parte: "d)",
        pasos: [
          { paso: "Pasar $0{,}0384\\ \\text{g}$ a mg: $$0{,}0384\\ \\text{g} \\times 1000\\ \\text{mg/g} = 38{,}4\\ \\text{mg}$$.", porque: "Como $1\\ \\text{g} = 1000\\ \\text{mg}$, multiplicamos $0{,}0384\\ \\text{g}$ por $1000\\ \\text{mg/g}$. Con $0{,}0384\\ \\text{g} \\times 1000\\ \\text{mg/g}$ obtenemos $38{,}4\\ \\text{mg}$. El resultado tiene 3 cifras porque $0{,}0384$ tiene 3 cifras significativas." },
          { paso: "Si el volumen fuera $0{,}250\\ \\text{mL} = 0{,}250\\ \\text{cm}^3$, $$d = \\frac{251{,}2\\ \\text{g}}{0{,}250\\ \\text{cm}^3} = 1{,}00 \\times 10^{3}\\ \\text{g/cm}^3$$: 1000 veces mayor.", porque: "Con la masa fija, la densidad es inversamente proporcional al volumen. Usamos $0{,}250\\ \\text{mL} = 0{,}250\\ \\text{cm}^3$ y dividimos $251{,}2\\ \\text{g}$ por ese volumen: $\\frac{251{,}2\\ \\text{g}}{0{,}250\\ \\text{cm}^3} = 1{,}00 \\times 10^{3}\\ \\text{g/cm}^3$. Al tomar 1000 veces menos volumen, la densidad sube 1000 veces." },
          { paso: "Un valor de $1000\\ \\text{g/cm}^3$ es imposible para agua (aprox. $1{,}00\\ \\text{g/cm}^3$), y eso senala un error de unidades al leer el volumen.", porque: "Un valor de $1000\\ \\text{g/cm}^3$ es imposible para el agua, que ronda $1{,}00\\ \\text{g/cm}^3$, y eso senala un error de unidades al leer el volumen. Comparar con un valor conocido permite detectar errores de prefijo. Por eso el resultado con $0{,}250\\ \\text{mL}$ no es valido para esta muestra." }
        ],
        resultado: "$m = 38{,}4\\ \\text{mg}$ ; con $0{,}250\\ \\text{mL}$ la densidad seria 1000 veces mayor, valor imposible para agua"
      }
    ],
    errores_tipicos: [
      { error: "Dividir 251,2 g por 0,250 directamente, obteniendo 1005 g/L, y dar la densidad en g/cm^3 sin convertir.", como_evitar: "Pasa el volumen a la unidad de la densidad antes de dividir: 0,250 L = 250 cm^3." },
      { error: "Clasificar la muestra como sustancia pura porque es 'agua'.", como_evitar: "El agua de rio tiene solidos y sales: es una mezcla. El agua pura seria una sustancia compuesta." },
      { error: "En c) sumar 10 al log: log(10 C) = 10 + (-5,70).", como_evitar: "log(10) = 1 porque 10 = 10^1." }
    ]
  }
];

window.EJERCITACION["materia"] = [
  {
    num: 1,
    nivel: "Básico",
    temas: ["materia"],
    enunciado: "Clasifique cada propiedad como extensiva o intensiva: a) el volumen de 500 mL de agua; b) el color azul del sulfato de cobre(II); c) el punto de fusion del hielo.",
    resolucion: [
      {
        parte: "",
        pasos: [
          { paso: "Criterio: si al tomar la mitad de la muestra la propiedad cambia, es extensiva; si no cambia, es intensiva.", porque: "Usamos el criterio de la cantidad: se imagina tomar la mitad de la muestra y se observa si la propiedad cambia. Asi se distinguen las propiedades extensivas, que dependen de la cantidad, de las intensivas, que no dependen. Es una forma operativa de clasificarlas." },
          { paso: "a) Con $250\\ \\text{mL}$ el volumen es la mitad: cambia, asi que es extensiva.", porque: "Tomamos $250\\ \\text{mL}$, que es la mitad de $500\\ \\text{mL}$, y lo comparamos con la muestra original. Como el volumen se reduce a la mitad, la propiedad cambia. Por eso el volumen se clasifica como extensiva." },
          { paso: "b) El color del sulfato de cobre no cambia al tomar menos muestra: es intensiva.", porque: "Al tomar menos muestra, el color del sulfato de cobre(II) sigue siendo el mismo, porque depende de la sustancia y no de la cantidad. Asi que el color no cambia con la cantidad de muestra. Por eso es intensiva." },
          { paso: "c) El punto de fusion del hielo ($0\\ \\text{C}$ a $1\\ \\text{atm}$) no depende del tamano del trozo: es intensiva.", porque: "El punto de fusion del hielo a $1\\ \\text{atm}$ es un valor fijo que caracteriza a la sustancia, y se mide a $0\\ \\text{C}$. Un trozo mas chico se funde a la misma temperatura, asi que no depende del tamano. Por eso es intensiva, con la presion de $1\\ \\text{atm}$ como condicion." }
        ],
        resultado: "a) extensiva ; b) intensiva ; c) intensiva"
      }
    ],
    errores_tipicos: [
      { error: "Decir que el color es extensivo porque 'se ve mas si hay mas muestra'.", como_evitar: "Pregunta si la propiedad depende de la cantidad. El color, la densidad y el punto de fusion no dependen." },
      { error: "Considerar la masa como intensiva porque es 'una propiedad del material'.", como_evitar: "La masa cambia al duplicar la muestra: es extensiva." }
    ]
  },
  {
    num: 2,
    nivel: "Básico",
    temas: ["materia"],
    enunciado: "Clasifique cada observacion como propiedad fisica o quimica: a) el cobre se pone verde con el tiempo al aire (se forma una capa de carbonato basico de cobre); b) la sal de mesa se disuelve en agua sin cambiar su composicion; c) el papel se quema y deja cenizas.",
    resolucion: [
      {
        parte: "",
        pasos: [
          { paso: "Criterio: una propiedad es quimica si para observarla hay que producir un cambio en la composicion o identidad de la sustancia; si no, es fisica.", porque: "Usamos la definicion del curso: una propiedad es quimica si para observarla hay que transformar la sustancia, y es fisica si se observa sin que cambie. Ese es el criterio que aplicamos a cada observacion. Asi clasificamos cada caso por separado." },
          { paso: "a) La capa verde aparece porque el cobre reacciona con oxigeno, $\\text{CO}_2$ y agua: se forma una sustancia nueva, es quimica.", porque: "En a) el cobre reacciona con oxigeno, $\\text{CO}_2$ y agua, y se forma carbonato basico de cobre. Como es una sustancia distinta del cobre, el cambio de color indica una propiedad quimica. Por eso a) es quimica." },
          { paso: "b) La sal sigue siendo $\\text{NaCl}$ en el agua; solo se dispersa, es fisica.", porque: "En b) la sal se dispersa en el agua, pero sigue siendo $\\text{NaCl}$ y se recupera por evaporacion. Como no cambia la identidad de la sustancia, la propiedad es fisica. Por eso b) es fisica." },
          { paso: "c) La combustion del papel produce cenizas y gases: es quimica.", porque: "En c) al quemarse el papel se forman cenizas y gases como $\\text{CO}_2$ y vapor de agua, que son sustancias nuevas. Hay reaccion con el oxigeno del aire. Por eso c) es quimica." }
        ],
        resultado: "a) quimica ; b) fisica ; c) quimica"
      }
    ],
    errores_tipicos: [
      { error: "Pensar que un cambio de color siempre es fisico.", como_evitar: "Pregunta si se formo una sustancia nueva. Si la hay, es quimica." },
      { error: "Decir que la disolucion es quimica porque la sal 'desaparece'.", como_evitar: "Que no se vea no es reaccion: la sal sigue como NaCl disperso y se recupera por evaporacion." }
    ]
  },
  {
    num: 3,
    nivel: "Básico",
    temas: ["materia"],
    enunciado: "Clasifique cada sistema como sustancia simple, sustancia compuesta, mezcla homogenea o mezcla heterogenea: a) oxigeno gaseoso, O2; b) bicarbonato de sodio, NaHCO3; c) agua con arena en el fondo de un vaso; d) aire seco.",
    resolucion: [
      {
        parte: "",
        pasos: [
          { paso: "Sustancia simple: un solo elemento. Compuesta: dos o mas elementos con composicion fija. Mezcla: dos o mas sustancias con composicion variable.", porque: "Usamos las definiciones de cada clase: sustancia simple tiene un solo elemento, compuesta tiene dos o mas elementos en proporcion fija, y mezcla tiene composicion variable. Primero se cuenta cuantos elementos aparecen en cada sistema. Con ese dato se decide la clase." },
          { paso: "a) $\\text{O}_2$ tiene un solo elemento (oxigeno): sustancia simple. b) $\\text{NaHCO}_3$ tiene Na, H, C y O: sustancia compuesta.", porque: "En a) $\\text{O}_2$ tiene un solo elemento, el oxigeno, por lo que es sustancia simple. En b) $\\text{NaHCO}_3$ tiene Na, H, C y O combinados en proporcion fija, asi que es sustancia compuesta. Los subindices cuentan atomos, pero lo que define el tipo es cuantos elementos distintos aparecen." },
          { paso: "c) El agua con arena tiene fases separadas por interfases: mezcla heterogenea. d) El aire seco es una mezcla de gases en una sola fase: mezcla homogenea.", porque: "En c) hay una fase de agua y otra de arena separadas por una interfase, asi que es mezcla heterogenea. En d) el aire seco es una mezcla de gases que forma una sola fase, por eso es mezcla homogenea. Homogeneo describe las fases, mientras que la composicion define si es sustancia o mezcla." }
        ],
        resultado: "a) sustancia simple ; b) sustancia compuesta ; c) mezcla heterogenea ; d) mezcla homogenea"
      }
    ],
    errores_tipicos: [
      { error: "Llamar sustancia pura al aire porque 'es una sola cosa'.", como_evitar: "El aire tiene N2, O2, Ar y otros gases: es una mezcla, aunque sea homogenea." },
      { error: "Pensar que una mezcla homogenea no es mezcla.", como_evitar: "Homogenea describe las fases; sustancia o mezcla describe la composicion. Son dos preguntas distintas." }
    ]
  },
  {
    num: 4,
    nivel: "Básico",
    temas: ["materia"],
    enunciado: "Indique la atomicidad de cada elemento en la molecula de acido sulfurico, H2SO4.",
    resolucion: [
      {
        parte: "",
        pasos: [
          { paso: "Leer el subindice de cada elemento: H tiene 2, S no tiene subindice y O tiene 4.", porque: "La atomicidad es el numero de atomos de cada elemento en una molecula, y se lee directamente del subindice. Usamos la formula $\\text{H}_2\\text{SO}_4$ para leer cada subindice. Un elemento sin subindice aparece una sola vez en la formula." },
          { paso: "Un elemento sin subindice tiene atomicidad 1: $\\text{S} = 1$.", porque: "El S no tiene subindice, asi que tiene un solo atomo en la formula. Por eso la atomicidad del azufre es 1. El subindice 1 se omite al escribir la formula." },
          { paso: "La atomicidad se da por elemento, no para la molecula completa: $\\text{H} = 2$, $\\text{S} = 1$, $\\text{O} = 4$.", porque: "La atomicidad se da para cada elemento por separado, no para la molecula completa. Con $\\text{H} = 2$, $\\text{S} = 1$ y $\\text{O} = 4$ tenemos la respuesta por elemento. Sumar $2 + 1 + 4$ da 7 atomos totales, que no es la atomicidad de ningun elemento." }
        ],
        resultado: "$\\text{H} = 2$ ; $\\text{S} = 1$ ; $\\text{O} = 4$"
      }
    ],
    errores_tipicos: [
      { error: "Decir que la atomicidad de la molecula es 7.", como_evitar: "La atomicidad se da por elemento. Los 7 atomos son el total de la molecula." },
      { error: "Dejar el S sin valor porque no tiene subindice.", como_evitar: "Un elemento sin subindice tiene 1 atomo." }
    ]
  },
  {
    num: 5,
    nivel: "Básico",
    temas: ["materia"],
    enunciado: "Se tiene agua de mar: agua con cloruro de sodio disuelto. Indique un metodo para obtener la sal solida y el agua pura, y explique por que la decantacion no sirve para separar la sal.",
    resolucion: [
      {
        parte: "",
        pasos: [
          { paso: "El sistema es una solucion: una sola fase, sin interfases, porque la sal esta disuelta.", porque: "Como el cloruro de sodio esta disuelto, el sistema tiene una sola fase y es una solucion. Esto determina que el metodo debe actuar sobre el cambio de estado del agua, y no sobre fases separadas. Por eso la separacion mecanica no es el camino." },
          { paso: "La decantacion y la filtracion son metodos mecanicos: no sirven porque la sal pasa con el agua a traves de cualquier separacion mecanica.", porque: "La decantacion y la filtracion separan fases distintas. Como la sal esta disuelta a nivel molecular, pasa con el agua por cualquier separacion mecanica. Por eso no sirven para separar la sal." },
          { paso: "Metodo fisico: destilacion (o evaporacion). Se calienta, el agua pasa a vapor, se condensa en otro recipiente y la sal queda como residuo.", porque: "La destilacion aprovecha que el agua cambia de estado: se evapora y luego se condensa en otro recipiente. Como la sal no es volatil, queda como residuo solido. Es un metodo fisico porque no hay reaccion quimica." }
        ],
        resultado: "Destilacion o evaporacion: el agua se recupera condensada y la sal queda como solido"
      }
    ],
    errores_tipicos: [
      { error: "Proponer decantacion o filtracion porque 'la sal esta en el agua'.", como_evitar: "Para una solucion hacen falta metodos fisicos (evaporacion, destilacion). Los mecanicos son para fases separadas." },
      { error: "Decir que la evaporacion recupera el agua sin condensarla, y perderla al aire.", como_evitar: "Si queres el agua pura hay que condensar el vapor en un recipiente frio (destilacion)." }
    ]
  },
  {
    num: 6,
    nivel: "Intermedio",
    temas: ["materia"],
    enunciado: "Un sistema contiene agua con azucar (sacarosa, C12H22O11) completamente disuelta y limaduras de cobre (Cu) en el fondo del recipiente. a) Indique cuantas fases tiene el sistema y cuantas sustancias, y clasifique cada sustancia como simple o compuesta. b) Describa un metodo para separar el cobre y otro para separar el azucar del agua, y justifique cada uno.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Fases: la solucion de azucar (liquida) y las limaduras de Cu (solido): 2 fases, separadas por una interfase.", porque: "Para contar fases recorremos el sistema buscando porciones homogeneas separadas por interfases. El azucar disuelto forma parte del liquido, pero las limaduras de cobre, un solido sin disolver, forman una fase propia. Asi obtenemos 2 fases separadas por una interfase." },
          { paso: "Sustancias: agua ($\\text{H}_2\\text{O}$), sacarosa ($\\text{C}_{12}\\text{H}_{22}\\text{O}_{11}$) y cobre (Cu): 3 sustancias. La solucion no cuenta como sustancia.", porque: "Contamos las sustancias con composicion fija: agua, sacarosa y cobre. La solucion no cuenta como sustancia porque es una mezcla de agua y azucar. Asi evitamos contar la misma sustancia dos veces." },
          { paso: "Clasificacion: Cu es simple (un solo elemento); $\\text{H}_2\\text{O}$ y $\\text{C}_{12}\\text{H}_{22}\\text{O}_{11}$ son compuestas (varios elementos).", porque: "Una sustancia simple tiene un solo elemento, y una compuesta tiene dos o mas. Cu tiene un solo elemento, mientras que $\\text{H}_2\\text{O}$ tiene H y O, y $\\text{C}_{12}\\text{H}_{22}\\text{O}_{11}$ tiene C, H y O. Por eso Cu es simple y las otras dos son compuestas." }
        ],
        resultado: "2 fases ; 3 sustancias (Cu simple; $\\text{H}_2\\text{O}$ y $\\text{C}_{12}\\text{H}_{22}\\text{O}_{11}$ compuestas)"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Cobre: filtracion o decantacion del solido, que no se disuelve y es mas denso que la solucion.", porque: "El cobre es un solido que no se disuelve y es mas denso que la solucion. Como las fases distintas se separan por metodos mecanicos, usamos filtracion o decantacion. Por eso el cobre se separa sin cambiar su composicion." },
          { paso: "Azucar y agua: evaporar el agua (o destilarla y recuperarla en el condensador); el azucar queda como solido.", porque: "El azucar esta disuelto a nivel molecular, asi que no puede separarse mecanicamente. Lo separamos cambiando el estado del agua: al evaporarla, la sacarosa, que no es volatil, queda como solido. Por eso el metodo para el azucar es de cambio de estado." },
          { paso: "La filtracion no separa el azucar del agua, porque el azucar esta disuelto a nivel molecular y pasa por cualquier filtro.", porque: "La filtracion no separa el azucar del agua porque ambos pasan por el filtro. Como no hay fases distintas que retener, el metodo mecanico no tiene efecto. Este es el criterio para elegir entre metodos mecanicos y de cambio de estado." }
        ],
        resultado: "Filtracion para el Cu; evaporacion o destilacion para el azucar"
      }
    ],
    errores_tipicos: [
      { error: "Contar la solucion como una sustancia mas.", como_evitar: "La solucion es una mezcla de agua y azucar: cuentas sus componentes, no la mezcla." },
      { error: "Separar azucar y agua por filtracion porque 'el azucar se ve'.", como_evitar: "El azucar esta disuelto a nivel molecular y pasa por el filtro. Se separa por cambio de estado." }
    ]
  },
  {
    num: 7,
    nivel: "Intermedio",
    temas: ["materia"],
    enunciado: "Dos liquidos, A y B, son inmiscibles (no se mezclan). A tiene densidad 0,92 g/cm^3 y B tiene 1,26 g/cm^3. Se colocan en un embudo de decantacion y se dejan reposar. a) Clasifique el sistema formado y diga que liquido queda arriba, justificando con la densidad. b) Calcule la masa de 250 mL de A, con las cifras significativas correctas.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Dos liquidos inmiscibles forman dos fases separadas por una interfase: el sistema es heterogeneo.", porque: "Dos liquidos inmiscibles forman dos fases separadas por una interfase. Como hay mas de una fase, el sistema es heterogeneo, aunque ambos liquidos parezcan uniformes. Por eso la clasificacion depende de las fases y no de la apariencia." },
          { paso: "A ($0{,}92\\ \\text{g/cm}^3$) es menos denso que B ($1{,}26\\ \\text{g/cm}^3$).", porque: "Comparamos las densidades: A tiene $0{,}92\\ \\text{g/cm}^3$ y B tiene $1{,}26\\ \\text{g/cm}^3$. La densidad es el criterio que determina la posicion de cada liquido en el sistema. Como $0{,}92$ es menor que $1{,}26$, A es el menos denso." },
          { paso: "En reposo, el liquido mas denso se ubica abajo: A queda arriba y B abajo.", porque: "Al reposar, las capas se ordenan por densidad, y el liquido mas denso se ubica abajo por accion de la gravedad. Como A es el menos denso, queda arriba. Por eso B (mas denso) queda abajo." }
        ],
        resultado: "Sistema heterogeneo; A arriba (menos denso) y B abajo"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Relacion $$d = \\frac{m}{V}$$, de donde $m = d \\times V$.", porque: "Se despeja $m$ de $d = \\frac{m}{V}$, lo que da $m = d \\times V$. Asi la masa es la densidad multiplicada por el volumen. Esa es la relacion que usamos para el calculo." },
          { paso: "$V = 250\\ \\text{mL} = 250\\ \\text{cm}^3$, porque $1\\ \\text{mL} = 1\\ \\text{cm}^3$.", porque: "Para usar la unidad $\\text{g/cm}^3$ el volumen debe estar en $\\text{cm}^3$. Como $1\\ \\text{mL} = 1\\ \\text{cm}^3$, los $250\\ \\text{mL}$ equivalen a $250\\ \\text{cm}^3$ sin conversion numerica. Por eso el volumen queda listo para el calculo." },
          { paso: "$$m = 0{,}92\\ \\text{g/cm}^3 \\times 250\\ \\text{cm}^3 = 230\\ \\text{g}$$, que con 2 cifras es $2{,}3 \\times 10^{2}\\ \\text{g}$.", porque: "Multiplicamos $0{,}92\\ \\text{g/cm}^3$ por $250\\ \\text{cm}^3$ y obtenemos $230\\ \\text{g}$. Como el dato $0{,}92$ tiene 2 cifras, el resultado se redondea a 2 cifras. Entonces $m = 2{,}3 \\times 10^{2}\\ \\text{g}$." }
        ],
        resultado: "$m = 2{,}3 \\times 10^{2}\\ \\text{g}$"
      }
    ],
    errores_tipicos: [
      { error: "Decir que A queda abajo porque 'pesa mas' o tiene mas masa.", como_evitar: "Lo que decide la posicion es la densidad (masa por volumen), no la masa total." },
      { error: "Escribir 230 g con 3 cifras significativas.", como_evitar: "Cuenta las cifras del dato menos preciso: 0,92 tiene 2." }
    ]
  },
  {
    num: 8,
    nivel: "Intermedio",
    temas: ["materia"],
    enunciado: "Dos bloques de hierro, uno de 3,0 kg y otro de 300 g, estan a 25 C. Indique cuales de las siguientes propiedades son iguales en los dos bloques y cuales cambian, clasificandolas como extensivas o intensivas: masa, temperatura, densidad y punto de fusion.",
    resolucion: [
      {
        parte: "",
        pasos: [
          { paso: "Criterio: una propiedad extensiva depende de la cantidad de materia; una intensiva no depende.", porque: "El criterio es que una propiedad extensiva depende de la cantidad de materia y una intensiva no depende. Lo aplicamos a cada propiedad de la lista para clasificarla. Asi sabemos cuales cambian entre los dos bloques." },
          { paso: "Masa: $3{,}0\\ \\text{kg}$ frente a $300\\ \\text{g}$; cambia, es extensiva.", porque: "La masa crece con la cantidad de materia, y los dos bloques difieren en masa: $3{,}0\\ \\text{kg}$ frente a $300\\ \\text{g}$. Por eso la masa cambia entre los bloques. Como depende de la cantidad, es extensiva." },
          { paso: "Temperatura ($25\\ \\text{C}$) y punto de fusion del hierro: son iguales en ambos bloques, y son intensivas.", porque: "La temperatura de $25\\ \\text{C}$ y el punto de fusion del hierro no dependen del tamano del bloque. Comparamos los valores de cada bloque y son iguales en ambos. Por eso son intensivas." },
          { paso: "Densidad: es igual en los dos bloques, y es intensiva.", porque: "La densidad es masa dividida por volumen. Si masa y volumen aumentan en la misma proporcion, el cociente no cambia. Por eso la densidad es igual en los dos bloques y es intensiva." }
        ],
        resultado: "Cambia solo la masa (extensiva). Iguales: temperatura, densidad y punto de fusion (intensivas)"
      }
    ],
    errores_tipicos: [
      { error: "Decir que la densidad del bloque chico es menor porque tiene menos masa.", como_evitar: "d = m / V: si masa y volumen se reducen en la misma proporcion, la densidad no cambia." },
      { error: "Clasificar la temperatura como extensiva porque 'el bloque grande tiene mas calor'.", como_evitar: "La temperatura es intensiva: no depende de la cantidad de muestra. El calor si depende." }
    ]
  },
  {
    num: 9,
    nivel: "Intermedio",
    temas: ["materia"],
    enunciado: "En el laboratorio se estudia un liquido incoloro que hierve a 78 C con una presion de 1 atm. a) Clasifique cada observacion como propiedad fisica o quimica: (i) hierve a 78 C a 1 atm; (ii) al agregarle un trozo de sodio metalico se desprende gas hidrogeno. b) Como cambia el punto de ebullicion si la presion baja a 0,5 atm? Justifique.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Regla: si hay reaccion y se forma una sustancia nueva, la propiedad es quimica; si solo cambia el estado o la temperatura de cambio de estado, es fisica.", porque: "Aplicamos la regla operativa del curso: si hay reaccion y se forma una sustancia nueva, la propiedad es quimica. Si solo se mide una propiedad o cambia el estado sin reaccion, es fisica. Con ese criterio clasificamos (i) y (ii)." },
          { paso: "(i) El punto de ebullicion se mide sin cambiar la identidad del liquido: propiedad fisica.", porque: "El punto de ebullicion se mide sin cambiar la identidad del liquido, porque solo cambia su estado. Asi no hay reaccion ni sustancia nueva. Por eso (i) es una propiedad fisica." },
          { paso: "(ii) Se desprende $\\text{H}_2$ porque el sodio reacciona con el liquido: propiedad quimica.", porque: "Al agregar sodio se desprende $\\text{H}_2$, lo que indica una reaccion del sodio con el liquido. Como se forma una sustancia nueva, la propiedad (ii) es quimica. Por eso (ii) es quimica." }
        ],
        resultado: "(i) fisica ; (ii) quimica"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "El liquido hierve cuando su presion de vapor iguala la presion externa.", porque: "El liquido hierve cuando su presion de vapor iguala a la presion externa, y esa es la condicion que define la ebullicion. Como la presion externa baja, se necesita menos presion de vapor para hervir. Por eso el analisis parte de esa condicion." },
          { paso: "Si la presion externa baja a $0{,}5\\ \\text{atm}$, el liquido hierve a una temperatura menor que $78\\ \\text{C}$.", porque: "Con $0{,}5\\ \\text{atm}$ de presion externa, el liquido hierve a una temperatura menor que $78\\ \\text{C}$. La presion de vapor necesaria se alcanza a menos temperatura, asi que la ebullicion ocurre antes. Por eso el punto de ebullicion depende de la presion." },
          { paso: "Por eso el punto de ebullicion depende de la presion y siempre se informa junto con ella.", porque: "Como el punto de ebullicion depende de la presion, se informa siempre junto con la presion a la que se mide. Es una propiedad fisica, pero solo tiene sentido con esa condicion. Por eso el resultado es que baja a menos de $78\\ \\text{C}$." }
        ],
        resultado: "Baja: hierve a menos de $78\\ \\text{C}$"
      }
    ],
    errores_tipicos: [
      { error: "Decir que el punto de ebullicion es quimico porque el liquido 'cambia de estado'.", como_evitar: "Cambiar de estado no es reaccion quimica: sigue siendo el mismo compuesto." },
      { error: "Pensar que el punto de ebullicion es independiente de la presion.", como_evitar: "Informa siempre la presion: a menor presion, menor temperatura de ebullicion." }
    ]
  },
  {
    num: 10,
    nivel: "Intermedio",
    temas: ["materia"],
    enunciado: "Se disuelven 17,5 g de cloruro de sodio en agua hasta obtener una solucion de 500,0 g en total. Se calienta la solucion hasta evaporar toda el agua, que se condensa y se recupera en otro recipiente. a) Clasifique el sistema inicial y el metodo usado para recuperar el agua. b) Calcule la masa de agua recuperada.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "La solucion tiene una sola fase y dos sustancias (agua y $\\text{NaCl}$): es una mezcla homogenea.", porque: "Una solucion es una mezcla homogenea de solvente y soluto: tiene una sola fase con dos sustancias, agua y $\\text{NaCl}$. Se clasifica por la cantidad de fases y de sustancias que tiene. Asi la mezcla queda identificada como homogenea." },
          { paso: "El agua se recupera por evaporacion y condensacion del vapor: es destilacion.", porque: "El agua se separa por cambio de estado: se evapora, el vapor se condensa en otro recipiente y se recupera. Ese proceso es destilacion (o evaporacion), un metodo fisico sin reaccion. Por eso es el metodo que usamos para recuperar el agua." },
          { paso: "La sal no se evapora y queda como residuo solido.", porque: "El NaCl tiene un punto de ebullicion muy alto y no pasa a vapor en esas condiciones. Por eso queda como residuo solido al evaporar el agua. Esto es lo que permite separar la sal del agua." }
        ],
        resultado: "Mezcla homogenea (solucion); destilacion (o evaporacion) del agua"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Masa de la solucion = masa de sal + masa de agua: $$500{,}0\\ \\text{g} = 17{,}5\\ \\text{g} + m(\\text{agua})$$.", porque: "La masa de la solucion es la suma de la masa de soluto mas la masa de solvente. Usamos esa relacion para despejar la masa de agua: $500{,}0\\ \\text{g} = 17{,}5\\ \\text{g} + m(\\text{agua})$. Asi la masa de agua queda en funcion de los datos." },
          { paso: "$$m(\\text{agua}) = 500{,}0\\ \\text{g} - 17{,}5\\ \\text{g} = 482{,}5\\ \\text{g}$$.", porque: "Restamos la masa de sal a la masa total de la solucion: $500{,}0\\ \\text{g} - 17{,}5\\ \\text{g} = 482{,}5\\ \\text{g}$. Como la sal forma parte de la solucion, la masa de agua es menor que $500{,}0\\ \\text{g}$. Por eso $m(\\text{agua}) = 482{,}5\\ \\text{g}$." },
          { paso: "Cifras: $17{,}5$ tiene una cifra decimal, asi que el resultado queda con una decimal: $482{,}5\\ \\text{g}$.", porque: "Al restar, el resultado se redondea a la menor cantidad de decimales de los datos. Como $17{,}5$ tiene 1 decimal, $482{,}5\\ \\text{g}$ tambien queda con 1 decimal. Es el criterio de cifras para sumas y restas, por eso el resultado final es $482{,}5\\ \\text{g}$." }
        ],
        resultado: "$m(\\text{agua}) = 482{,}5\\ \\text{g}$"
      }
    ],
    errores_tipicos: [
      { error: "Dar la masa de agua como 500,0 g, olvidando que la sal forma parte de la solucion.", como_evitar: "m_solucion = m_soluto + m_solvente. Resta la sal." },
      { error: "Clasificar la solucion como sustancia pura porque es 'agua con sal'.", como_evitar: "Es una mezcla homogenea de dos sustancias." }
    ]
  },
  {
    num: 11,
    nivel: "Avanzado",
    temas: ["materia"],
    enunciado: "Se colocan en un vaso con 500 mL de agua (densidad 1,00 g/cm^3): 20,0 g de corcho en trozos (densidad 0,24 g/cm^3), 15,0 g de arena (densidad 2,65 g/cm^3) y 10,0 g de cloruro de sodio. Se agita hasta que la sal se disuelve por completo y luego se deja reposar. a) Indique el numero de fases del sistema final y describa como se ubica cada una. b) Proponga un metodo para separar el corcho, la arena y la solucion salina, y justifique. c) Justifique por que la sal no se puede separar por flotacion ni por decantacion.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "El corcho ($0{,}24\\ \\text{g/cm}^3$) es menos denso que el agua: flota en la superficie y forma una fase solida.", porque: "Se cuentan las fases: el corcho es un solido menos denso que el agua, porque $0{,}24$ es menor que $1{,}00$. Asi que flota y forma una fase propia. Cada porcion separada por interfase cuenta como fase." },
          { paso: "La arena ($2{,}65\\ \\text{g/cm}^3$) es mas densa que el agua: se deposita en el fondo, como otra fase solida.", porque: "La arena tiene $2{,}65\\ \\text{g/cm}^3$, que es mas que la densidad del agua. Por eso se hunde y se deposita en el fondo como fase solida. Asi ya hay tres regiones separadas por interfases." },
          { paso: "La sal se disuelve y forma parte de la fase liquida, que es una sola fase.", porque: "La sal se disuelve por completo, asi que no forma particulas ni fase propia. Pasa a formar parte de la fase liquida, y un soluto disuelto no cuenta como fase. Por eso la solucion salina sigue siendo una sola fase." },
          { paso: "Resultado: 3 fases, corcho arriba, solucion en el medio y arena en el fondo.", porque: "Sumamos las fases distintas que quedan separadas por interfases: corcho, solucion y arena. La solucion salina es una sola fase, asi que el total es 3. Esto da 3 fases en el sistema final." }
        ],
        resultado: "3 fases: corcho (superficie), solucion salina (medio) y arena (fondo)"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Corcho: se retira de la superficie por separacion mecanica (tamizado o retiro manual).", porque: "Retiramos el corcho porque es un solido que flota y se separa de la solucion sin cambiar su composicion. Como es un metodo mecanico, actua sobre fases separadas. Por eso el corcho se saca de la superficie." },
          { paso: "Arena: se decanta o filtra la solucion sobre la arena que queda en el fondo.", porque: "La arena es un solido mas denso que se deposita en el fondo, asi que se separa decantando o filtrando la solucion sobre ella. Funciona porque la arena es una fase distinta del liquido. Por eso la arena puede separarse sin evaporar nada." },
          { paso: "Solucion salina: se evapora o destila para recuperar la sal y el agua.", porque: "La sal disuelta solo se recupera cambiando el estado del agua: se evapora o destila la solucion y el NaCl queda como solido. Un metodo mecanico no alcanza porque la sal no forma fase propia. Por eso la solucion salina requiere evaporar o destilar." }
        ],
        resultado: "Retirar el corcho, decantar o filtrar la arena, y evaporar o destilar la solucion"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "La sal esta disuelta: no forma particulas visibles ni una fase propia, asi que no flota ni sedimenta.", porque: "La sal esta disuelta a nivel molecular, asi que no forma particulas visibles. Como no flota ni sedimenta, no hay una fase de sal que la gravedad pueda separar. Por eso la sal no sigue el comportamiento de un solido." },
          { paso: "Por eso la separacion requiere un cambio de estado del solvente.", porque: "Los metodos mecanicos actuan sobre fases separadas. Como en la solucion no hay fases que separar, la flotacion y la decantacion no tienen efecto sobre la sal. Por eso la separacion requiere un cambio de estado del solvente." }
        ],
        resultado: "La sal esta disuelta a nivel molecular: no sedimenta ni flota"
      }
    ],
    errores_tipicos: [
      { error: "Contar la sal como una fase solida que se hunde.", como_evitar: "Una sal disuelta forma parte de la fase liquida. Solo habria fase solida de sal si quedara sin disolver." },
      { error: "Olvidar que el corcho es menos denso que el agua y ubicarlo en el fondo.", como_evitar: "Compara densidades: si el solido es menos denso que el liquido, flota." }
    ]
  },
  {
    num: 12,
    nivel: "Avanzado",
    temas: ["materia"],
    enunciado: "Se tiene la sustancia de formula Ca3(PO4)2 (fosfato de calcio). a) Indique la atomicidad de cada elemento. b) Clasifique la sustancia como simple o compuesta, y justifique. c) Si se mezclan 3,0 g de calcio metalico (Ca) con 2,0 g de fosforo (P) sin que reaccionen, se obtiene una sustancia? Justifique.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "El subindice 2 que esta fuera del parentesis multiplica a todo lo que esta dentro: $\\text{PO}_4$ aparece 2 veces.", porque: "El subindice 2 que esta fuera del parentesis multiplica a todo lo que esta dentro, asi que $\\text{PO}_4$ aparece dos veces. Hay que distribuir ese subindice antes de contar cada elemento. Por eso el calculo parte de esa distribucion." },
          { paso: "Ca: 3 atomos. P: 2 atomos. O: $$2 \\times 4 = 8$$ atomos.", porque: "Contamos cada elemento: Ca tiene 3 atomos y P tiene 2. El O se calcula como $2 \\times 4 = 8$, porque cada $\\text{PO}_4$ tiene 4 oxigenos y hay 2 grupos. Asi obtenemos el total de atomos de cada elemento." }
        ],
        resultado: "$\\text{Ca} = 3$ ; $\\text{P} = 2$ ; $\\text{O} = 8$"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Tiene 3 elementos (Ca, P y O) combinados en proporcion fija.", porque: "Hay 3 elementos distintos (Ca, P y O) combinados en una formula de proporcion fija. Esa combinacion caracteriza a una sustancia compuesta y no a una mezcla. Por eso la clasificacion se basa en la formula." },
          { paso: "Por lo tanto es una sustancia compuesta.", porque: "Una sustancia simple tendria un solo elemento, y aqui hay tres. Por eso la sustancia es compuesta. Se confirma mirando la formula, sin necesidad de calcular masas." }
        ],
        resultado: "Sustancia compuesta (3 elementos, composicion fija)"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "Al mezclar Ca y P sin que reaccionen, solo se juntan dos sustancias simples: no hay combinacion.", porque: "Al mezclar Ca y P sin que reaccionen, las dos sustancias simples solo se juntan sin combinarse quimicamente. Como no hay combinacion, el resultado es una reunion de sustancias. Por eso no se forma un compuesto." },
          { paso: "La composicion depende de cuanto se mezcle: si se usan $4{,}0\\ \\text{g}$ de Ca, la composicion cambia.", porque: "La composicion depende de cuanto se mezcle: con $4{,}0\\ \\text{g}$ de Ca la proporcion cambia. Una mezcla tiene composicion variable, mientras que una sustancia tiene composicion fija. Por eso el criterio de composicion decide la clasificacion." },
          { paso: "Por eso no es una sustancia: es una mezcla.", porque: "Como la composicion puede variar, la muestra no es una sustancia sino una mezcla. El criterio de la composicion fija es la prueba que separa sustancia de mezcla. Por eso la respuesta es que no se obtiene una sustancia." }
        ],
        resultado: "No es una sustancia: es una mezcla (composicion variable)"
      }
    ],
    errores_tipicos: [
      { error: "Calcular O = 4 olvidando el subindice 2 del parentesis.", como_evitar: "El 2 afuera del parentesis multiplica a todo lo de adentro: 2 x 4 = 8." },
      { error: "Clasificar Ca3(PO4)2 como mezcla porque tiene varios elementos.", como_evitar: "Tener muchos elementos no hace una mezcla: si se combinan con proporcion fija, es una sustancia compuesta." }
    ]
  },
  {
    num: 13,
    nivel: "Avanzado",
    temas: ["materia"],
    enunciado: "Se prepara una solucion con etanol (C2H5OH, punto de ebullicion 78 C), agua (100 C) y cloruro de sodio, todos disueltos (ninguno sin disolver). a) Clasifique el sistema. b) Proponga un metodo para separar la sal y justifique. c) Proponga un metodo para separar el etanol del agua y explique por que la filtracion no sirve para esta separacion.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Hay una sola fase y tres sustancias disueltas: es una mezcla homogenea (solucion).", porque: "Los componentes disueltos no forman fases propias, y una sola fase con tres sustancias es una mezcla homogenea. Usamos la cantidad de fases y de sustancias para clasificar el sistema. Entonces el sistema es una solucion homogenea de tres componentes." }
        ],
        resultado: "Mezcla homogenea (una fase, tres sustancias)"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Al calentar, el etanol y el agua se evaporan, pero el NaCl no es volatil y queda como solido.", porque: "El NaCl no es volatil y no pasa a vapor, asi que al calentar el etanol y el agua se evaporan y la sal queda como residuo. Esto es la base para separarla por cambio de estado. Por eso la sal puede aislarse con calor." },
          { paso: "Se recupera la sal por evaporacion o destilacion simple, condensando el vapor en otro recipiente.", porque: "Se recupera la sal por evaporacion o destilacion simple, condensando el vapor de los solventes en otro recipiente. El NaCl queda como solido en el recipiente original. Es un metodo fisico, sin reaccion." }
        ],
        resultado: "Evaporacion o destilacion: la sal queda como solido"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "Destilacion fraccionada: el etanol ($78\\ \\text{C}$) hierve antes que el agua ($100\\ \\text{C}$), asi que destila primero y se condensa aparte.", porque: "Como el etanol hierve a $78\\ \\text{C}$ y el agua a $100\\ \\text{C}$, al calentar destila primero el componente de menor punto de ebullicion. Asi los componentes se separan por cambio de estado en rangos de temperatura distintos. Por eso el etanol se recoge primero." },
          { paso: "La filtracion no sirve porque etanol y agua estan disueltos a nivel molecular y pasan juntos por el filtro.", porque: "La filtracion no separa el etanol del agua porque ambos estan disueltos a nivel molecular y pasan juntos por el filtro. Como los metodos mecanicos actuan sobre fases, aqui no hay fases distintas que separar. Por eso la filtracion no sirve." },
          { paso: "Supuesto: se ignora el azeotropo etanol-agua (aprox. $96\\ \\%$ en masa de etanol), que limita la pureza que se puede alcanzar por destilacion.", porque: "Se aclara el supuesto de ignorar el azeotropo (aprox. $96\\ \\%$ en masa de etanol), porque limita la pureza que se consigue por destilacion. Mencionarlo muestra un limite real del metodo. Asi el resultado queda aclarado." }
        ],
        resultado: "Destilacion fraccionada (el etanol destila primero); la filtracion no separa sustancias disueltas"
      }
    ],
    errores_tipicos: [
      { error: "Proponer la filtracion para separar la sal porque 'es un solido'.", como_evitar: "La sal esta disuelta; no es un solido separado. Solo se separa por cambio de estado." },
      { error: "Decir que el etanol destila despues porque 'pesa mas'.", como_evitar: "Se separan por punto de ebullicion: el de menor punto de ebullicion destila primero." }
    ]
  },
  {
    num: 14,
    nivel: "Avanzado",
    temas: ["materia"],
    enunciado: "Una muestra de 80,0 g de una mezcla de arena y cloruro de sodio se disuelve en agua. Luego se filtra: el solido que queda sobre el filtro, arena seca, pesa 52,0 g. a) Calcule el porcentaje en masa de cada componente de la mezcla original. b) Si se hubiera tomado una muestra de 40,0 g con la misma composicion, cambiaria el porcentaje en masa de arena? Justifique, indicando si es una propiedad intensiva o extensiva.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Supuesto: no se pierde arena en el filtrado, asi que la arena recuperada es toda la arena de la muestra.", porque: "Como la sal se disuelve en el agua, el filtrado retiene solo la arena, y la arena recuperada es toda la arena de la muestra. Sin este supuesto no se puede asignar el 52,0 g a la mezcla original. Por eso asumimos que no se pierde arena en el filtrado." },
          { paso: "Masa de sal: $$80{,}0\\ \\text{g} - 52{,}0\\ \\text{g} = 28{,}0\\ \\text{g}$$.", porque: "La mezcla tiene solo dos componentes, arena y sal, asi que la masa de sal es la diferencia entre la masa total y la masa de arena. Con $80{,}0\\ \\text{g} - 52{,}0\\ \\text{g}$ obtenemos $28{,}0\\ \\text{g}$ de sal. Por eso la sal representa el resto de la muestra." },
          { paso: "$$\\%\\ \\text{arena} = \\frac{52{,}0}{80{,}0} \\times 100 = 65{,}0\\ \\%$$ ; $\\%\\ \\text{sal} = \\frac{28{,}0}{80{,}0} \\times 100 = 35{,}0\\ \\%$.", porque: "El porcentaje en masa es la masa del componente dividida por la masa total, multiplicada por 100. Con $\\frac{52{,}0}{80{,}0} \\times 100 = 65{,}0\\ \\%$ de arena y $\\frac{28{,}0}{80{,}0} \\times 100 = 35{,}0\\ \\%$ de sal. Como los dos porcentajes suman $100\\ \\%$, sirven de control." }
        ],
        resultado: "Arena $65{,}0\\ \\%$ ; sal $35{,}0\\ \\%$"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "No cambia: con $40{,}0\\ \\text{g}$ de la misma mezcla, la arena sigue siendo el $65{,}0\\ \\%$ de la muestra ($26{,}0\\ \\text{g}$ de arena en $40{,}0\\ \\text{g}$).", porque: "Con $40{,}0\\ \\text{g}$ de la misma mezcla, la arena sigue siendo $65{,}0\\ \\%$ porque el porcentaje es un cociente entre masas. Si todo se reduce en la misma proporcion, el cociente no cambia. Asi $26{,}0\\ \\text{g}$ de arena en $40{,}0\\ \\text{g}$ da $65{,}0\\ \\%$, y el valor se mantiene." },
          { paso: "Es una propiedad intensiva, porque no depende de la cantidad de muestra; la masa de arena (extensiva) si cambia.", porque: "La masa de arena depende de cuanta muestra hay, por lo que es extensiva, pero el porcentaje no depende de la cantidad, por lo que es intensivo. Es la misma logica del criterio de propiedades extensivas e intensivas. Por eso el porcentaje no cambia." }
        ],
        resultado: "No cambia ($65{,}0\\ \\%$); es intensiva"
      }
    ],
    errores_tipicos: [
      { error: "Calcular 52,0 / 28,0 (dividir por la sal en lugar de por la masa total).", como_evitar: "% en masa = masa del componente / masa total (80,0 g) x 100." },
      { error: "Decir que el % cambia porque la muestra es mas chica ('hay menos arena').", como_evitar: "El porcentaje es un cociente: si todo se reduce en la misma proporcion, no cambia." }
    ]
  },
  {
    num: 15,
    nivel: "Avanzado",
    temas: ["materia"],
    enunciado: "En un vaso con agua liquida flotan trozos de hielo, y en el fondo hay una piedra de cuarzo (SiO2). a) Indique el numero de fases y de sustancias del sistema. b) Se espera a que todo el hielo se derrita. Indique cuantas fases y sustancias hay ahora. c) Justifique la diferencia entre fase y sustancia usando los resultados de a) y b).",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Fases: hielo (solido), agua liquida y cuarzo (solido): 3 fases, separadas por interfases.", porque: "Se cuentan las fases recorriendo el vaso: hielo, agua liquida y cuarzo, cada una separada por interfases. El hielo y el agua son fases distintas aunque sean la misma sustancia. Por eso el sistema tiene 3 fases." },
          { paso: "Sustancias: $\\text{H}_2\\text{O}$ (aparece en dos fases) y $\\text{SiO}_2$: 2 sustancias.", porque: "Las sustancias se cuentan por su identidad quimica, sin importar en cuantas fases aparezcan. Como $\\text{H}_2\\text{O}$ aparece en dos fases y $\\text{SiO}_2$ en una, hay 2 sustancias. Por eso el total de sustancias es 2." }
        ],
        resultado: "3 fases ; 2 sustancias"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Al derretirse, el hielo pasa a agua liquida: la misma $\\text{H}_2\\text{O}$ forma ahora una sola fase liquida con el resto del agua.", porque: "Al derretirse el hielo, el agua solida pasa a liquida y se une con el agua del vaso. Asi queda una fase menos, porque el cambio de estado cambia el numero de fases. Sin embargo, la identidad de la sustancia no cambia." },
          { paso: "Quedan 2 fases (agua liquida y cuarzo) y 2 sustancias ($\\text{H}_2\\text{O}$ y $\\text{SiO}_2$).", porque: "Quedan dos fases (agua liquida y cuarzo) y 2 sustancias ($\\text{H}_2\\text{O}$ y $\\text{SiO}_2$). El numero de sustancias no cambia, porque sigue siendo la misma $\\text{H}_2\\text{O}$. Por eso el resultado es 2 fases y 2 sustancias." }
        ],
        resultado: "2 fases ; 2 sustancias"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "Fase es una porcion del sistema con propiedades uniformes, separada por interfase; sustancia es una identidad quimica.", porque: "Fase es una porcion del sistema con propiedades uniformes separada por interfase, mientras que sustancia es una identidad quimica con composicion fija. Son conceptos distintos que suelen confundirse. Por eso conviene distinguirlos con el ejemplo del hielo." },
          { paso: "El numero de fases cambia con el estado fisico; el de sustancias no cambia en un cambio de estado.", porque: "El numero de fases depende del estado fisico, mientras que el de sustancias depende de la identidad quimica. Por eso el hielo y el agua son dos fases de una misma sustancia, $\\text{H}_2\\text{O}$. Este es el criterio que resuelve la diferencia." }
        ],
        resultado: "Fase depende del estado fisico; sustancia depende de la identidad quimica"
      }
    ],
    errores_tipicos: [
      { error: "Contar hielo y agua como dos sustancias porque 'se ven distintos'.", como_evitar: "Son la misma sustancia (H2O) en distinto estado: dos fases, una sustancia." },
      { error: "Olvidar el hielo al contar las fases iniciales.", como_evitar: "Recorre el vaso de arriba abajo: cada porcion separada por interfase es una fase." }
    ]
  },
  {
    num: 16,
    nivel: "Tipo parcial",
    temas: ["materia", "repaso"],
    enunciado: "En una planta de extraccion de aceite de girasol, tras el prensado se obtiene una mezcla que contiene aceite, agua y restos solidos finos. Para el control de proceso se toma una muestra de la fase oleosa: 52,0 mL pesan 46,0 g. a) Calcule la densidad de la fase oleosa en g/cm^3 con las cifras significativas correctas. b) Clasifique el sistema inicial (homogeneo o heterogeneo, y cantidad de fases) y justifique. c) Proponga un metodo para separar el aceite de la fase acuosa, e indique la propiedad fisica en la que se basa. d) Calcule el volumen que ocupan 52,0 g de aceite y 52,0 g de agua (densidad del agua 1,00 g/cm^3), y justifique cual de las dos capas queda arriba al reposar.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Calcular $$d = \\frac{m}{V} = \\frac{46{,}0\\ \\text{g}}{52{,}0\\ \\text{mL}} = 0{,}88462\\ \\text{g/mL}$$.", porque: "Densidad = $\\frac{m}{V}$. Como $1\\ \\text{mL} = 1\\ \\text{cm}^3$, el resultado se expresa en $\\text{g/cm}^3$ sin conversion numerica. Con $\\frac{46{,}0\\ \\text{g}}{52{,}0\\ \\text{mL}}$ obtenemos el cociente de la muestra." },
          { paso: "Cifras: $46{,}0$ y $52{,}0$ tienen 3 cifras cada una, asi que $d = 0{,}885\\ \\text{g/cm}^3$.", porque: "Redondeamos $0{,}88462$ a 3 cifras, que es la cantidad que tienen los datos $46{,}0$ y $52{,}0$. Asi el resultado queda en $0{,}885\\ \\text{g/cm}^3$. El cero final de $46{,}0$ es significativo y se conserva." }
        ],
        resultado: "$d = 0{,}885\\ \\text{g/cm}^3$"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Hay tres fases: aceite (liquido), agua (liquido) y restos solidos (solido), separadas por interfases.", porque: "Se cuentan las fases del sistema: aceite (liquido), agua (liquido) y restos solidos, separados por interfases. Contar las interfases ayuda a confirmar el numero de fases. Por eso hay tres fases." },
          { paso: "El sistema es heterogeneo, porque se distinguen fases aunque el conjunto se vea uniforme al agitarlo.", porque: "El sistema es heterogeneo porque se distinguen fases aunque al agitarlo se vea uniforme. La uniformidad aparente no define el tipo de sistema; lo que lo define es la cantidad de fases. Por eso la clasificacion es heterogenea." },
          { paso: "Es una mezcla de varios componentes (aceite, agua y solidos), no una sustancia pura.", porque: "El sistema tiene mas de una sustancia (aceite, agua y solidos) y su composicion no es fija. Por eso es una mezcla, y no se trata de una sustancia pura. Asi la respuesta es mezcla." }
        ],
        resultado: "Sistema heterogeneo de tres fases; mezcla"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "Metodo: decantacion en embudo de decantacion, previa filtracion o centrifugacion para retirar los solidos finos.", porque: "Usamos la decantacion, que separa liquidos inmiscibles por diferencia de densidad, previa retirada de los solidos finos por filtracion o centrifugacion. Como los solidos forman una fase distinta, conviene retirarlos antes. Por eso el metodo se aplica en ese orden." },
          { paso: "Propiedad fisica: la densidad. El aceite ($0{,}885\\ \\text{g/cm}^3$) es menos denso que el agua ($1{,}00\\ \\text{g/cm}^3$) y queda como capa superior.", porque: "El aceite ($0{,}885\\ \\text{g/cm}^3$) es menos denso que el agua ($1{,}00\\ \\text{g/cm}^3$), asi que queda como capa superior. La propiedad fisica en la que se basa la separacion es la densidad. Por eso la decantacion funciona." }
        ],
        resultado: "Decantacion; se basa en la diferencia de densidad"
      },
      {
        parte: "d)",
        pasos: [
          { paso: "Volumen de aceite: $$V = \\frac{52{,}0\\ \\text{g}}{0{,}885\\ \\text{g/cm}^3} = 58{,}8\\ \\text{cm}^3$$. Volumen de agua: $V = \\frac{52{,}0\\ \\text{g}}{1{,}00\\ \\text{g/cm}^3} = 52{,}0\\ \\text{cm}^3$.", porque: "De $d = \\frac{m}{V}$ se despeja $V = \\frac{m}{d}$. Con la misma masa, el volumen es inversamente proporcional a la densidad. Asi el aceite, menos denso, ocupa mas volumen: $\\frac{52{,}0\\ \\text{g}}{0{,}885\\ \\text{g/cm}^3} = 58{,}8\\ \\text{cm}^3$ frente a $52{,}0\\ \\text{cm}^3$ del agua." },
          { paso: "La capa de aceite queda arriba aunque ocupe mas volumen, porque es menos densa.", porque: "La posicion de las capas depende de la densidad, no del volumen ni de la masa total. Aunque el aceite ocupe mas volumen, queda arriba porque es menos denso que el agua. Por eso la capa de aceite queda arriba." }
        ],
        resultado: "Aceite: $58{,}8\\ \\text{cm}^3$ (queda arriba); agua: $52{,}0\\ \\text{cm}^3$ (abajo)"
      }
    ],
    errores_tipicos: [
      { error: "Calcular d = 52,0 / 46,0 (invertir masa y volumen), dando 1,13 g/cm^3.", como_evitar: "d = m / V, con la masa arriba. Chequeo: el aceite tiene d < 1, asi que flota en el agua." },
      { error: "Decir que el aceite queda abajo por 'pesar mas' o por ser mas viscoso.", como_evitar: "Lo que define la posicion es la densidad, no la viscosidad ni la masa total." },
      { error: "Clasificar el sistema como homogeneo porque el liquido 'se ve uniforme' al agitarlo.", como_evitar: "Dos liquidos que no se mezclan forman un sistema heterogeneo, aunque se vea uniforme con agitacion." }
    ]
  }
];
