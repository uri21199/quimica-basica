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
          { paso: "Contar las cifras significativas del dato: 4, 2 y 7 son distintos de cero, y los ceros a la izquierda no cuentan. Hay 3 cifras.", porque: "Los ceros a la izquierda del primer digito distinto de cero solo sirven para ubicar la coma y no son significativos." },
          { paso: "Correr la coma hasta dejar un numero entre 1 y 10: 4,27. La coma se corrio 5 lugares hacia la derecha.", porque: "La notacion cientifica exige la forma b x 10^n con 1 <= b < 10." },
          { paso: "Como el numero original es menor que 1, el exponente es -5 (la coma se corrio 5 lugares hacia la derecha).", porque: "Un numero menor que 1 tiene exponente negativo; cada lugar de corrimiento suma o resta 1 al exponente." },
          { paso: "Escribir el resultado: 4,27 x 10^-5 g. Las 3 cifras se conservan.", porque: "Al cambiar la forma de escritura solo se mueve la coma; las cifras significativas no cambian." }
        ],
        resultado: "m = 4,27 x 10^-5 g (3 cifras significativas)"
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
          { paso: "Aplicar d = m / V = 12,7 g / 4,3 cm^3 = 2,9535 g/cm^3.", porque: "La densidad es la masa por unidad de volumen; se usan los datos con sus unidades (g y cm^3)." },
          { paso: "Determinar las cifras: 12,7 tiene 3 cifras y 4,3 tiene 2. El resultado tiene 2 cifras.", porque: "En multiplicaciones y divisiones el resultado se informa con la cantidad de cifras del dato menos preciso." },
          { paso: "Redondear 2,9535 a 2 cifras: 3,0 g/cm^3. El 0 se escribe para mostrar que hay 2 cifras.", porque: "Un 3 solo se leeria como 1 cifra; el 0 despues de la coma es significativo." }
        ],
        resultado: "d = 3,0 g/cm^3 (2 cifras significativas)"
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
          { paso: "Multiplicar las mantisas: 6,40 x 8,5 = 54,4.", porque: "En una multiplicacion de notacion cientifica se multiplican las mantisas entre si." },
          { paso: "Sumar los exponentes: -3 + 5 = 2, por lo que el producto queda 54,4 x 10^2.", porque: "Al multiplicar potencias de la misma base se suman los exponentes." },
          { paso: "Llevar a notacion cientifica: 54,4 = 5,44 x 10^1, asi que el producto es 5,44 x 10^3.", porque: "La mantisa tiene que quedar entre 1 y 10; cada lugar que se corre la coma suma 1 al exponente." },
          { paso: "Redondear a 2 cifras, la cantidad del dato menos preciso (8,5): 5,4 x 10^3.", porque: "El resultado no puede tener mas cifras que el dato con menos cifras." }
        ],
        resultado: "5,4 x 10^3"
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
          { paso: "Separar el producto: log(2,0 x 10^-6) = log(2,0) + log(10^-6).", porque: "El logaritmo de un producto es la suma de los logaritmos." },
          { paso: "log(2,0) = 0,30103, porque 10^0,30103 = 2,0.", porque: "Por definicion, log(x) es el exponente al que hay que elevar 10 para obtener x." },
          { paso: "log(10^-6) = -6, porque el log de una potencia de 10 es su exponente.", porque: "log(10^n) = n, asi que no hace falta calculadora para esa parte." },
          { paso: "Sumar: 0,30103 + (-6) = -5,69897, que redondeado a 3 decimales es -5,699.", porque: "El signo negativo viene del exponente -6; el log de un numero menor que 1 es negativo." }
        ],
        resultado: "log(2,0 x 10^-6) = -5,699"
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
          { paso: "Relacionar longitudes: 1 cm = 10^-2 m.", porque: "Es la definicion del prefijo centi (10^-2) aplicada al metro." },
          { paso: "Elevar la relacion al cubo: 1 cm^3 = (10^-2 m)^3 = 10^-6 m^3.", porque: "El volumen es una longitud elevada a 3, y el factor de conversion tambien se eleva al cubo." },
          { paso: "Multiplicar: 2,50 cm^3 x (10^-6 m^3 / cm^3) = 2,50 x 10^-6 m^3.", porque: "Se usa el factor de conversion; el factor 10^-6 es exacto y no reduce las cifras significativas." }
        ],
        resultado: "2,50 x 10^-6 m^3"
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
          { paso: "Pasar la masa a gramos: 0,0540 kg x 1000 g/kg = 54,0 g.", porque: "La densidad en g/cm^3 se calcula con gramos y cm^3; el prefijo kilo equivale a 10^3." },
          { paso: "Calcular el volumen del prisma: V = 2,00 cm x 3,00 cm x 5,00 cm = 30,0 cm^3.", porque: "El volumen de un prisma rectangular es el producto de sus tres dimensiones, y cada dato tiene 3 cifras." },
          { paso: "Dividir: d = m / V = 54,0 g / 30,0 cm^3 = 1,80 g/cm^3.", porque: "La densidad es la masa por unidad de volumen, y el resultado conserva las 3 cifras." }
        ],
        resultado: "d = 1,80 g/cm^3"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Escribir la densidad con unidades del SI: 1,80 g/cm^3 = 1,80 x 10^-3 kg / 10^-6 m^3.", porque: "Un gramo es 10^-3 kg y un cm^3 es 10^-6 m^3." },
          { paso: "Dividir las potencias: 10^-3 / 10^-6 = 10^3, asi que d = 1,80 x 10^3 kg/m^3.", porque: "Al dividir potencias de la misma base se restan los exponentes: -3 - (-6) = 3." },
          { paso: "Chequeo: el agua tiene 1,00 x 10^3 kg/m^3 y este bloque tiene 1,80 veces esa densidad.", porque: "Comparar con un valor conocido permite detectar errores de potencia de 10." }
        ],
        resultado: "d = 1,80 x 10^3 kg/m^3"
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
          { paso: "Despejar C: si log(C) = y, entonces C = 10^y, asi que C = 10^-4,62.", porque: "El logaritmo en base 10 es el exponente al que hay que elevar 10 para obtener el numero." },
          { paso: "Calcular: 10^-4,62 = 10^-5 x 10^0,38 = 2,399 x 10^-5 mol/L.", porque: "Se separa el exponente en entero (-5) y decimal (0,38), y 10^0,38 = 2,40." },
          { paso: "Redondear a 2 cifras significativas: C = 2,4 x 10^-5 mol/L.", porque: "Es la precision pedida en el enunciado." }
        ],
        resultado: "C = 2,4 x 10^-5 mol/L"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Separar el producto: log(10 C) = log(10) + log(C).", porque: "El logaritmo de un producto es la suma de los logaritmos." },
          { paso: "log(10) = 1, asi que log(10 C) = 1 + (-4,62) = -3,62.", porque: "El log de la base es 1, porque 10 = 10^1." },
          { paso: "Interpretar: multiplicar por 10 sube el log en 1 unidad (de -4,62 a -3,62).", porque: "El log es el exponente de 10, y un factor 10 suma 1 a ese exponente." }
        ],
        resultado: "log(10 C) = -3,62 (aumenta 1 unidad)"
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
          { paso: "Pasar el volumen a cm^3: 2,5 m^3 x 10^6 cm^3/m^3 = 2,5 x 10^6 cm^3.", porque: "La densidad esta en g/cm^3, asi que el volumen debe estar en cm^3; 1 m = 100 cm, entonces 1 m^3 = 10^6 cm^3." },
          { paso: "Calcular la masa: m = d x V = 0,789 g/cm^3 x 2,5 x 10^6 cm^3 = 1,9725 x 10^6 g.", porque: "De d = m / V se despeja m = d x V; los cm^3 se cancelan." },
          { paso: "Pasar a kg y redondear: 1,9725 x 10^6 g x 10^-3 kg/g = 1972,5 kg, que con 2 cifras es 2,0 x 10^3 kg.", porque: "El volumen 2,5 m^3 tiene solo 2 cifras, y el resultado no puede tener mas precision." }
        ],
        resultado: "m = 2,0 x 10^3 kg"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Calcular el volumen: V = m / d = 45,0 g / 0,789 g/cm^3 = 57,03 cm^3.", porque: "Se despeja V de d = m / V: el volumen es la masa dividida por la densidad." },
          { paso: "Pasar a mL: 1 mL = 1 cm^3, asi que V = 57,03 mL, y con 3 cifras queda 57,0 mL.", porque: "Los dos datos (45,0 y 0,789) tienen 3 cifras significativas." },
          { paso: "Verificar: 57,0 mL x 0,789 g/mL = 45,0 g, que es la masa de partida.", porque: "Multiplicar el volumen por la densidad debe devolver la masa original." }
        ],
        resultado: "V = 57,0 mL"
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
          { paso: "Usar T(K) = t(C) + 273,15: 12,0 + 273,15 = 285,15 K.", porque: "Para pasar de Celsius a kelvin se suma 273,15; es una suma, no una resta." },
          { paso: "Redondear a una cifra decimal, como el dato 12,0: T = 285,2 K.", porque: "Al sumar, el resultado tiene la cantidad de decimales del dato con menos decimales." },
          { paso: "Verificar que T sea positiva: 285,2 K > 0, asi que la conversion es razonable.", porque: "En kelvin no hay temperaturas negativas; un resultado negativo indicaria error de signo." }
        ],
        resultado: "T = 285,2 K"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Convertir a mmHg: 1,20 atm x 760 mmHg/atm = 912 mmHg.", porque: "1 atm = 760 mmHg (equivalencia de la guia); el dato tiene 3 cifras y el resultado tambien." },
          { paso: "Convertir a kPa: 1,20 atm x 101,32 kPa/atm = 121,6 kPa, que con 3 cifras queda 122 kPa.", porque: "1 atm = 101,32 kPa; se redondea a 3 cifras como pide el enunciado." },
          { paso: "Chequear el orden de magnitud: 1 atm = 760 mmHg = 101 kPa, y 1,20 atm es mayor que 1 atm, asi que los valores deben superar 760 mmHg y 101 kPa.", porque: "Comparar con la equivalencia base detecta errores de factor." }
        ],
        resultado: "P = 912 mmHg = 122 kPa"
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
          { paso: "Pasar el volumen a mL: 250,0 microL x 10^-6 L/microL = 2,500 x 10^-4 L, y x 1000 mL/L = 0,2500 mL.", porque: "La concentracion esta en celulas/mL, asi que el volumen debe estar en mL; 1 L = 1000 mL." },
          { paso: "Multiplicar concentracion por volumen: N = 3,2 x 10^8 celulas/mL x 0,2500 mL.", porque: "Concentracion por volumen da la cantidad total; las unidades mL se cancelan." },
          { paso: "Operar: 3,2 x 0,2500 = 0,80 y 10^8, asi que N = 0,80 x 10^8 = 8,0 x 10^7 celulas.", porque: "Se multiplican las mantisas y se suman los exponentes; luego se normaliza la mantisa entre 1 y 10." },
          { paso: "Cifras: 3,2 x 10^8 tiene 2 cifras, asi que N = 8,0 x 10^7 celulas.", porque: "El resultado se informa con la cantidad de cifras del dato menos preciso." }
        ],
        resultado: "N = 8,0 x 10^7 celulas"
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
          { paso: "Calcular el volumen: V = (2,0 cm)^3 = 8,0 cm^3.", porque: "El volumen de un cubo es la arista al cubo. La arista tiene 2 cifras, asi que el volumen se escribe 8,0 cm^3 y no 8 cm^3 (que pareceria de 1 cifra)." },
          { paso: "Aplicar d = m / V = 21,6 g / 8,0 cm^3 = 2,7 g/cm^3.", porque: "La densidad es masa por unidad de volumen; el dato menos preciso (8,0) tiene 2 cifras, asi que el resultado tiene 2." }
        ],
        resultado: "d = 2,7 g/cm^3"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Usar 1 g/cm^3 = 1000 kg/m^3: 2,7 g/cm^3 x 1000 = 2,7 x 10^3 kg/m^3.", porque: "1 g = 10^-3 kg y 1 cm^3 = 10^-6 m^3, asi que 10^-3 / 10^-6 = 10^3." }
        ],
        resultado: "d = 2,7 x 10^3 kg/m^3"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "Cada mitad tiene masa 21,6 g / 2 = 10,8 g y volumen 8,0 cm^3 / 2 = 4,0 cm^3.", porque: "La masa es extensiva: depende de cuanta materia hay, y al cortar el cubo se reparte." },
          { paso: "La densidad de cada mitad sigue siendo 10,8 g / 4,0 cm^3 = 2,7 g/cm^3.", porque: "La densidad es intensiva: depende del material y no de la cantidad de muestra, por eso no se reduce al cortar." }
        ],
        resultado: "Cada mitad tiene 10,8 g y la misma densidad, 2,7 g/cm^3"
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
          { paso: "Despejar: x = 10^(-3,62).", porque: "Si log(x) = y, entonces x = 10^y." },
          { paso: "Calcular: 10^-3,62 = 10^-4 x 10^0,38 = 2,399 x 10^-4.", porque: "Se separa el exponente en su parte entera (-4) y decimal (0,38); 10^0,38 = 2,40." },
          { paso: "Redondear a 2 cifras significativas: x = 2,4 x 10^-4.", porque: "Es la precision pedida en el enunciado." }
        ],
        resultado: "x = 2,4 x 10^-4"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Aplicar la propiedad del cociente: log(1/x) = log(1) - log(x).", porque: "El log de un cociente es la resta de los logs." },
          { paso: "log(1) = 0, asi que log(1/x) = 0 - (-3,62) = 3,62.", porque: "log(1) = 0 porque 10^0 = 1; restar un negativo da positivo." },
          { paso: "Justificar el signo: 1/x = 4,2 x 10^3 es mayor que 1, y el log de un numero mayor que 1 es positivo.", porque: "El log es positivo para numeros mayores que 1 y negativo para numeros menores que 1." }
        ],
        resultado: "log(1/x) = 3,62 (positivo porque 1/x > 1)"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "Usar la propiedad de la potencia: log(x^2) = 2 x log(x).", porque: "El exponente del argumento pasa a multiplicar al logaritmo." },
          { paso: "log(x^2) = 2 x (-3,62) = -7,24.", porque: "Se multiplica el valor dado; el signo negativo se mantiene." }
        ],
        resultado: "log(x^2) = -7,24"
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
          { paso: "Usar 1 m^3 = 1000 L: 45 m^3 x 1000 L/m^3 = 4,5 x 10^4 L.", porque: "1 m = 10 dm, asi que 1 m^3 = 10^3 dm^3, y 1 dm^3 = 1 L." }
        ],
        resultado: "V = 4,5 x 10^4 L"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Pasar el volumen a cm^3: 45 m^3 x 10^6 cm^3/m^3 = 4,5 x 10^7 cm^3.", porque: "La densidad esta en g/cm^3; 1 m^3 = 10^6 cm^3." },
          { paso: "Calcular la masa: m = d x V = 1,00 g/cm^3 x 4,5 x 10^7 cm^3 = 4,5 x 10^7 g.", porque: "De d = m / V se despeja m = d x V; los cm^3 se cancelan." },
          { paso: "Pasar a kg: 4,5 x 10^7 g x 10^-3 kg/g = 4,5 x 10^4 kg.", porque: "El prefijo kilo es 10^3, asi que 1 kg = 1000 g." }
        ],
        resultado: "m = 4,5 x 10^4 kg"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "Con d = 1,03 g/cm^3: m = 1,03 x 4,5 x 10^7 g = 4,635 x 10^4 kg, que con 2 cifras es 4,6 x 10^4 kg.", porque: "Las cifras las fija 45 m^3 (2 cifras), aunque 1,03 tenga 3." },
          { paso: "El volumen es el mismo y la masa cambia porque m = d x V: con V fijo, la masa es proporcional a la densidad.", porque: "El agua de mar tiene sales disueltas que aumentan la masa de cada cm^3." }
        ],
        resultado: "m = 4,6 x 10^4 kg; la masa sube porque la densidad es mayor"
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
          { paso: "Multiplicar el numerador: 4,2 x 6,0 = 25,2 y 10^(-3+5) = 10^2, asi que el numerador es 2,52 x 10^3.", porque: "Al multiplicar potencias de 10 se suman los exponentes, y luego se normaliza la mantisa." },
          { paso: "Dividir por el denominador: 2,52 x 10^3 / (-1,5 x 10^-2) = -1,68 x 10^5.", porque: "Se dividen las mantisas (2,52 / -1,5 = -1,68) y se restan los exponentes: 3 - (-2) = 5." },
          { paso: "Redondear a 2 cifras (todos los datos tienen 2): E = -1,7 x 10^5.", porque: "El resultado se informa con la cantidad de cifras del dato menos preciso." }
        ],
        resultado: "E = -1,7 x 10^5"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "El numerador es positivo: 4,2 y 6,0 son positivos y las potencias de 10 nunca cambian el signo.", porque: "El signo de un numero lo da su coeficiente, no la potencia de 10." },
          { paso: "El denominador es negativo por el signo menos de -1,5.", porque: "Ese signo multiplica todo el cociente." },
          { paso: "Positivo / negativo da negativo, asi que E < 0.", porque: "Regla de signos: el cociente de signos distintos es negativo." }
        ],
        resultado: "E es negativo: numerador positivo y denominador negativo"
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
          { paso: "Pasar la masa a gramos: 3,0 mg x 10^-3 g/mg = 3,0 x 10^-3 g.", porque: "El prefijo mili es 10^-3 y la masa de cada particula esta en g." },
          { paso: "Dividir la masa total por la masa de una particula: N = 3,0 x 10^-3 g / 1,5 x 10^-16 g = 2,0 x 10^13 particulas.", porque: "El numero de particulas es la masa total dividida por la masa de una particula; los gramos se cancelan." },
          { paso: "Cifras: 3,0 y 1,5 tienen 2 cifras, asi que N = 2,0 x 10^13.", porque: "En un cociente el resultado conserva la cantidad de cifras del dato menos preciso." }
        ],
        resultado: "N = 2,0 x 10^13 particulas"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Con 3,0 g: N' = 3,0 / 1,5 x 10^-16 = 2,0 x 10^16 particulas.", porque: "Es el mismo calculo con un numerador 1000 veces mayor." },
          { paso: "Cociente: 2,0 x 10^16 / 2,0 x 10^13 = 1000.", porque: "1 g = 1000 mg, y el numero de particulas es proporcional a la masa; es un error de prefijo, no de cuenta." }
        ],
        resultado: "1000 veces mas particulas (2,0 x 10^16)"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "log(2,0 x 10^13) = log(2,0) + log(10^13) = 0,30103 + 13 = 13,30103.", porque: "El log de un producto es la suma, y log(10^13) = 13." },
          { paso: "Redondear a 3 decimales: log(N) = 13,301.", porque: "Es la precision pedida en el enunciado." }
        ],
        resultado: "log(N) = 13,301"
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
          { paso: "Pasar el volumen a cm^3: 0,250 L x 1000 cm^3/L = 250 cm^3, porque 1 L = 1 dm^3 = 1000 cm^3.", porque: "La densidad se expresa en g/cm^3, asi que el volumen debe estar en cm^3." },
          { paso: "Calcular d = m / V = 251,2 g / 250 cm^3 = 1,0048 g/cm^3.", porque: "La densidad es masa dividida por volumen." },
          { paso: "Cifras: 0,250 L tiene 3 y 251,2 g tiene 4; el resultado queda con 3: 1,00 g/cm^3.", porque: "El resultado se informa con la cantidad de cifras del dato menos preciso; el 0 final es significativo." },
          { paso: "Pasar a kg/m^3: 1,00 g/cm^3 x 1000 = 1,00 x 10^3 kg/m^3.", porque: "1 g/cm^3 = 10^3 kg/m^3: g a kg es 10^-3 y cm^3 a m^3 es 10^-6, y al dividir queda 10^3." }
        ],
        resultado: "d = 1,00 g/cm^3 = 1,00 x 10^3 kg/m^3"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Hay un solido en suspension que se separa por filtracion: el sistema tiene mas de una fase, separadas por interfases.", porque: "Un sistema heterogeneo tiene mas de una fase; el solido filtrado es una fase distinta del agua." },
          { paso: "Como hay agua con sales y contaminantes que se separan por metodos fisicos o quimicos, el sistema tiene dos o mas sustancias.", porque: "Una mezcla tiene dos o mas sustancias y composicion variable; el agua de rio no tiene composicion fija." },
          { paso: "Resultado: sistema heterogeneo y mezcla.", porque: "Los dos criterios son independientes: el numero de fases (homogeneo o heterogeneo) y la composicion (sustancia o mezcla)." }
        ],
        resultado: "Sistema heterogeneo, mezcla"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "Despejar C: C = 10^-5,70 mol/L = 1,995 x 10^-6 mol/L.", porque: "Si log(C) = y, entonces C = 10^y." },
          { paso: "Redondear a 2 cifras significativas: C = 2,0 x 10^-6 mol/L.", porque: "Lo pide el enunciado." },
          { paso: "log(10 C) = log(10) + log(C) = 1 + (-5,70) = -4,70.", porque: "El log de un producto es la suma, y log(10) = 1." }
        ],
        resultado: "C = 2,0 x 10^-6 mol/L ; log(10 C) = -4,70"
      },
      {
        parte: "d)",
        pasos: [
          { paso: "Pasar 0,0384 g a mg: 0,0384 g x 1000 mg/g = 38,4 mg.", porque: "1 g = 1000 mg; 0,0384 tiene 3 cifras y el resultado tambien." },
          { paso: "Si el volumen fuera 0,250 mL = 0,250 cm^3, d = 251,2 g / 0,250 cm^3 = 1,00 x 10^3 g/cm^3: 1000 veces mayor.", porque: "Con la masa fija, la densidad es inversamente proporcional al volumen." },
          { paso: "Un valor de 1000 g/cm^3 es imposible para agua (aprox. 1,00 g/cm^3), y eso senala un error de unidades al leer el volumen.", porque: "Comparar con un valor conocido detecta errores de prefijo." }
        ],
        resultado: "m = 38,4 mg ; con 0,250 mL la densidad seria 1000 veces mayor, valor imposible para agua"
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
          { paso: "Criterio: si al tomar la mitad de la muestra la propiedad cambia, es extensiva; si no cambia, es intensiva.", porque: "Asi se distingue si la propiedad depende de la cantidad de materia o no." },
          { paso: "a) Con 250 mL el volumen es la mitad: cambia, asi que es extensiva.", porque: "El volumen depende de cuanta materia hay." },
          { paso: "b) El color del sulfato de cobre no cambia al tomar menos muestra: es intensiva.", porque: "Es una caracteristica de la sustancia, no de la cantidad." },
          { paso: "c) El punto de fusion del hielo (0 C a 1 atm) no depende del tamano del trozo: es intensiva.", porque: "Es una constante de la sustancia a una presion dada." }
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
          { paso: "Criterio: una propiedad es quimica si para observarla hay que producir un cambio en la composicion o identidad de la sustancia; si no, es fisica.", porque: "Esa es la distincion del curso: la propiedad quimica implica reaccion." },
          { paso: "a) La capa verde aparece porque el cobre reacciona con oxigeno, CO2 y agua: se forma una sustancia nueva, es quimica.", porque: "Se forma un producto distinto del cobre." },
          { paso: "b) La sal sigue siendo NaCl en el agua; solo se dispersa, es fisica.", porque: "La disolucion no cambia la identidad quimica del soluto." },
          { paso: "c) La combustion del papel produce cenizas y gases: es quimica.", porque: "Hay reaccion con oxigeno y se forman sustancias nuevas." }
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
          { paso: "Sustancia simple: un solo elemento. Compuesta: dos o mas elementos con composicion fija. Mezcla: dos o mas sustancias con composicion variable.", porque: "Son las definiciones que separan sustancias de mezclas: se pregunta cuantos elementos hay y si la composicion es fija." },
          { paso: "a) O2 tiene un solo elemento (oxigeno): sustancia simple. b) NaHCO3 tiene Na, H, C y O: sustancia compuesta.", porque: "El subindice indica atomos del mismo elemento; varios elementos con composicion fija forman una sustancia compuesta." },
          { paso: "c) El agua con arena tiene fases separadas por interfases: mezcla heterogenea. d) El aire seco es una mezcla de gases en una sola fase: mezcla homogenea.", porque: "Una sola fase es homogenea; mas de una fase separada por interfase es heterogenea." }
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
          { paso: "Leer el subindice de cada elemento: H tiene 2, S no tiene subindice y O tiene 4.", porque: "La atomicidad es el numero de atomos de ese elemento en una molecula, y el subindice lo indica." },
          { paso: "Un elemento sin subindice tiene atomicidad 1: S = 1.", porque: "En la formula hay un solo atomo de S." },
          { paso: "La atomicidad se da por elemento, no para la molecula completa: H = 2, S = 1, O = 4.", porque: "El total de atomos (2 + 1 + 4 = 7) no es la atomicidad de ningun elemento." }
        ],
        resultado: "H = 2 ; S = 1 ; O = 4"
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
          { paso: "El sistema es una solucion: una sola fase, sin interfases, porque la sal esta disuelta.", porque: "En una solucion no hay fases separadas que se puedan distinguir." },
          { paso: "La decantacion y la filtracion son metodos mecanicos: no sirven porque la sal pasa con el agua a traves de cualquier separacion mecanica.", porque: "Los metodos mecanicos separan fases; en una solucion no hay fases que separar." },
          { paso: "Metodo fisico: destilacion (o evaporacion). Se calienta, el agua pasa a vapor, se condensa en otro recipiente y la sal queda como residuo.", porque: "La sal no es volatil, mientras que el agua cambia de estado sin reaccion quimica." }
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
          { paso: "Fases: la solucion de azucar (liquida) y las limaduras de Cu (solido): 2 fases, separadas por una interfase.", porque: "Una fase es una porcion homogenea; el solido no se disuelve, asi que forma otra fase." },
          { paso: "Sustancias: agua (H2O), sacarosa (C12H22O11) y cobre (Cu): 3 sustancias. La solucion no cuenta como sustancia.", porque: "Se cuentan los componentes con composicion fija, no la mezcla que forman." },
          { paso: "Clasificacion: Cu es simple (un solo elemento); H2O y C12H22O11 son compuestas (varios elementos).", porque: "Sustancia simple tiene un elemento; compuesta, dos o mas elementos." }
        ],
        resultado: "2 fases ; 3 sustancias (Cu simple; H2O y C12H22O11 compuestas)"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Cobre: filtracion o decantacion del solido, que no se disuelve y es mas denso que la solucion.", porque: "Los metodos mecanicos separan fases solidas de liquidas sin cambiar la sustancia." },
          { paso: "Azucar y agua: evaporar el agua (o destilarla y recuperarla en el condensador); el azucar queda como solido.", porque: "La sacarosa no es volatil y queda como residuo cuando el agua cambia de estado; es un metodo fisico." },
          { paso: "La filtracion no separa el azucar del agua, porque el azucar esta disuelto a nivel molecular y pasa por cualquier filtro.", porque: "Los metodos mecanicos actuan sobre fases, y en la solucion no hay fases distintas." }
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
          { paso: "Dos liquidos inmiscibles forman dos fases separadas por una interfase: el sistema es heterogeneo.", porque: "Dos fases distintas definen un sistema heterogeneo." },
          { paso: "A (0,92 g/cm^3) es menos denso que B (1,26 g/cm^3).", porque: "Comparar las densidades es el criterio para ubicar los liquidos." },
          { paso: "En reposo, el liquido mas denso se ubica abajo: A queda arriba y B abajo.", porque: "La gravedad acomoda las capas por densidad, no por volumen." }
        ],
        resultado: "Sistema heterogeneo; A arriba (menos denso) y B abajo"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Relacion d = m / V, de donde m = d x V.", porque: "La masa se obtiene multiplicando la densidad por el volumen." },
          { paso: "V = 250 mL = 250 cm^3, porque 1 mL = 1 cm^3.", porque: "Para usar g/cm^3 el volumen tiene que estar en cm^3." },
          { paso: "m = 0,92 g/cm^3 x 250 cm^3 = 230 g, que con 2 cifras es 2,3 x 10^2 g.", porque: "El dato 0,92 tiene 2 cifras, y el resultado se redondea a ese numero de cifras." }
        ],
        resultado: "m = 2,3 x 10^2 g"
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
          { paso: "Criterio: una propiedad extensiva depende de la cantidad de materia; una intensiva no depende.", porque: "Es la definicion del curso para clasificar propiedades." },
          { paso: "Masa: 3,0 kg frente a 300 g; cambia, es extensiva.", porque: "La masa crece con la cantidad de materia." },
          { paso: "Temperatura (25 C) y punto de fusion del hierro: son iguales en ambos bloques, y son intensivas.", porque: "No dependen del tamano de la muestra." },
          { paso: "Densidad: es igual en los dos bloques, y es intensiva.", porque: "Masa y volumen crecen en la misma proporcion, y su cociente no cambia." }
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
          { paso: "Regla: si hay reaccion y se forma una sustancia nueva, la propiedad es quimica; si solo cambia el estado o la temperatura de cambio de estado, es fisica.", porque: "Es la distincion operativa entre propiedad fisica y quimica." },
          { paso: "(i) El punto de ebullicion se mide sin cambiar la identidad del liquido: propiedad fisica.", porque: "Se observa sin alterar la composicion." },
          { paso: "(ii) Se desprende H2 porque el sodio reacciona con el liquido: propiedad quimica.", porque: "Hay una reaccion que produce una sustancia nueva." }
        ],
        resultado: "(i) fisica ; (ii) quimica"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "El liquido hierve cuando su presion de vapor iguala la presion externa.", porque: "Esa es la condicion de ebullicion." },
          { paso: "Si la presion externa baja a 0,5 atm, el liquido hierve a una temperatura menor que 78 C.", porque: "Con menos presion externa, basta menos presion de vapor, es decir menos temperatura." },
          { paso: "Por eso el punto de ebullicion depende de la presion y siempre se informa junto con ella.", porque: "Es una propiedad intensiva, pero no constante sin especificar la presion." }
        ],
        resultado: "Baja: hierve a menos de 78 C"
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
          { paso: "La solucion tiene una sola fase y dos sustancias (agua y NaCl): es una mezcla homogenea.", porque: "Una solucion es una mezcla homogenea de solvente y soluto." },
          { paso: "El agua se recupera por evaporacion y condensacion del vapor: es destilacion.", porque: "El agua cambia de estado sin reaccion quimica." },
          { paso: "La sal no se evapora y queda como residuo solido.", porque: "El NaCl tiene un punto de ebullicion muy alto y no pasa a vapor en esas condiciones." }
        ],
        resultado: "Mezcla homogenea (solucion); destilacion (o evaporacion) del agua"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Masa de la solucion = masa de sal + masa de agua: 500,0 g = 17,5 g + m(agua).", porque: "La masa de una solucion es la suma de la masa de soluto y de solvente." },
          { paso: "m(agua) = 500,0 g - 17,5 g = 482,5 g.", porque: "Se despeja la masa de agua restando la sal." },
          { paso: "Cifras: 17,5 tiene una cifra decimal, asi que el resultado queda con una decimal: 482,5 g.", porque: "Al restar, el resultado se redondea al ultimo decimal del dato con menos decimales." }
        ],
        resultado: "m(agua) = 482,5 g"
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
          { paso: "El corcho (0,24 g/cm^3) es menos denso que el agua: flota en la superficie y forma una fase solida.", porque: "Un solido menos denso que el liquido flota; cada porcion separada por interfase cuenta como fase." },
          { paso: "La arena (2,65 g/cm^3) es mas densa que el agua: se deposita en el fondo, como otra fase solida.", porque: "Un solido mas denso que el liquido se hunde." },
          { paso: "La sal se disuelve y forma parte de la fase liquida, que es una sola fase.", porque: "Un soluto disuelto no forma fase propia: la solucion es homogenea." },
          { paso: "Resultado: 3 fases, corcho arriba, solucion en el medio y arena en el fondo.", porque: "Se suman las fases distintas que quedan separadas por interfases." }
        ],
        resultado: "3 fases: corcho (superficie), solucion salina (medio) y arena (fondo)"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Corcho: se retira de la superficie por separacion mecanica (tamizado o retiro manual).", porque: "Es una fase solida que flota y se separa sin cambiar la sustancia." },
          { paso: "Arena: se decanta o filtra la solucion sobre la arena que queda en el fondo.", porque: "La arena es una fase solida mas densa que se separa por metodos mecanicos." },
          { paso: "Solucion salina: se evapora o destila para recuperar la sal y el agua.", porque: "La sal disuelta solo se separa por cambio de estado del agua, no mecanicamente." }
        ],
        resultado: "Retirar el corcho, decantar o filtrar la arena, y evaporar o destilar la solucion"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "La sal esta disuelta: no forma particulas visibles ni una fase propia, asi que no flota ni sedimenta.", porque: "Los metodos mecanicos actuan sobre fases separadas; en una solucion no hay particulas que separar." },
          { paso: "Por eso la separacion requiere un cambio de estado del solvente.", porque: "Solo el cambio de estado separa un soluto que esta disuelto a nivel molecular." }
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
          { paso: "El subindice 2 que esta fuera del parentesis multiplica a todo lo que esta dentro: PO4 aparece 2 veces.", porque: "Un subindice fuera del parentesis afecta a todos los elementos de adentro." },
          { paso: "Ca: 3 atomos. P: 2 atomos. O: 2 x 4 = 8 atomos.", porque: "Cada PO4 tiene 4 O, y son 2 grupos." }
        ],
        resultado: "Ca = 3 ; P = 2 ; O = 8"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Tiene 3 elementos (Ca, P y O) combinados en proporcion fija.", porque: "Sustancia compuesta: dos o mas elementos combinados con proporcion fija." },
          { paso: "Por lo tanto es una sustancia compuesta.", porque: "Una sustancia simple tendria un solo elemento." }
        ],
        resultado: "Sustancia compuesta (3 elementos, composicion fija)"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "Al mezclar Ca y P sin que reaccionen, solo se juntan dos sustancias simples: no hay combinacion.", porque: "Una mezcla es la reunion de sustancias sin combinarse quimicamente." },
          { paso: "La composicion depende de cuanto se mezcle: si se usan 4,0 g de Ca, la composicion cambia.", porque: "Una mezcla tiene composicion variable; una sustancia tiene composicion fija." },
          { paso: "Por eso no es una sustancia: es una mezcla.", porque: "Sustancia = composicion fija; mezcla = composicion variable." }
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
          { paso: "Hay una sola fase y tres sustancias disueltas: es una mezcla homogenea (solucion).", porque: "Ninguna sustancia forma fase propia cuando esta disuelta." }
        ],
        resultado: "Mezcla homogenea (una fase, tres sustancias)"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Al calentar, el etanol y el agua se evaporan, pero el NaCl no es volatil y queda como solido.", porque: "El NaCl tiene un punto de ebullicion muy alto y no pasa a vapor en condiciones de laboratorio." },
          { paso: "Se recupera la sal por evaporacion o destilacion simple, condensando el vapor en otro recipiente.", porque: "La sal se separa por cambio de estado de los solventes, sin reaccion." }
        ],
        resultado: "Evaporacion o destilacion: la sal queda como solido"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "Destilacion fraccionada: el etanol (78 C) hierve antes que el agua (100 C), asi que destila primero y se condensa aparte.", porque: "Componentes con puntos de ebullicion distintos se separan por cambio de estado al calentar." },
          { paso: "La filtracion no sirve porque etanol y agua estan disueltos a nivel molecular y pasan juntos por el filtro.", porque: "Los metodos mecanicos actuan sobre fases separadas, y aqui no hay fases." },
          { paso: "Supuesto: se ignora el azeotropo etanol-agua (aprox. 96 % en masa de etanol), que limita la pureza que se puede alcanzar por destilacion.", porque: "Es una limitacion real de esta mezcla, y conviene mencionarla aunque el planteo del curso no la exija." }
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
          { paso: "Supuesto: no se pierde arena en el filtrado, asi que la arena recuperada es toda la arena de la muestra.", porque: "Sin este supuesto no se puede asignar el 52,0 g a la mezcla original." },
          { paso: "Masa de sal: 80,0 g - 52,0 g = 28,0 g.", porque: "La mezcla tiene solo dos componentes; la sal es lo que se disolvio." },
          { paso: "% arena = 52,0 / 80,0 x 100 = 65,0 % ; % sal = 28,0 / 80,0 x 100 = 35,0 %.", porque: "Porcentaje en masa = masa del componente / masa total x 100." }
        ],
        resultado: "Arena 65,0 % ; sal 35,0 %"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "No cambia: con 40,0 g de la misma mezcla, la arena sigue siendo el 65,0 % de la muestra (26,0 g de arena en 40,0 g).", porque: "El porcentaje es un cociente: si todo se reduce en la misma proporcion, no cambia." },
          { paso: "Es una propiedad intensiva, porque no depende de la cantidad de muestra; la masa de arena (extensiva) si cambia.", porque: "La masa depende de cuanta materia hay; el porcentaje de composicion no." }
        ],
        resultado: "No cambia (65,0 %); es intensiva"
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
          { paso: "Fases: hielo (solido), agua liquida y cuarzo (solido): 3 fases, separadas por interfases.", porque: "Hielo y agua liquida estan separados por interfase aunque sean la misma sustancia." },
          { paso: "Sustancias: H2O (aparece en dos fases) y SiO2: 2 sustancias.", porque: "Las sustancias se cuentan por su identidad quimica, sin importar cuantas fases tengan." }
        ],
        resultado: "3 fases ; 2 sustancias"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Al derretirse, el hielo pasa a agua liquida: la misma H2O forma ahora una sola fase liquida con el resto del agua.", porque: "Un cambio de estado cambia el numero de fases, pero no la identidad de la sustancia." },
          { paso: "Quedan 2 fases (agua liquida y cuarzo) y 2 sustancias (H2O y SiO2).", porque: "Con el hielo fundido queda una fase menos y las sustancias no cambian." }
        ],
        resultado: "2 fases ; 2 sustancias"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "Fase es una porcion del sistema con propiedades uniformes, separada por interfase; sustancia es una identidad quimica.", porque: "Son conceptos distintos: una sustancia puede estar en varias fases." },
          { paso: "El numero de fases cambia con el estado fisico; el de sustancias no cambia en un cambio de estado.", porque: "Por eso el hielo y el agua son dos fases de una misma sustancia." }
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
          { paso: "Calcular d = m / V = 46,0 g / 52,0 mL = 0,88462 g/mL.", porque: "Densidad = masa / volumen; 1 mL = 1 cm^3, asi que la unidad es g/cm^3." },
          { paso: "Cifras: 46,0 y 52,0 tienen 3 cifras cada una, asi que d = 0,885 g/cm^3.", porque: "El resultado se redondea a la cantidad de cifras de los datos." }
        ],
        resultado: "d = 0,885 g/cm^3"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Hay tres fases: aceite (liquido), agua (liquido) y restos solidos (solido), separadas por interfases.", porque: "Cada interfase marca un limite entre fases distintas." },
          { paso: "El sistema es heterogeneo, porque se distinguen fases aunque el conjunto se vea uniforme al agitarlo.", porque: "La uniformidad aparente no cuenta: lo que define si es homogeneo es el numero de fases." },
          { paso: "Es una mezcla de varios componentes (aceite, agua y solidos), no una sustancia pura.", porque: "Hay mas de una sustancia y la composicion no es fija." }
        ],
        resultado: "Sistema heterogeneo de tres fases; mezcla"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "Metodo: decantacion en embudo de decantacion, previa filtracion o centrifugacion para retirar los solidos finos.", porque: "Los solidos se separan por metodos mecanicos; la decantacion separa liquidos inmiscibles." },
          { paso: "Propiedad fisica: la densidad. El aceite (0,885 g/cm^3) es menos denso que el agua (1,00 g/cm^3) y queda como capa superior.", porque: "Dos liquidos que no se mezclan se ubican por densidad: el mas denso va abajo." }
        ],
        resultado: "Decantacion; se basa en la diferencia de densidad"
      },
      {
        parte: "d)",
        pasos: [
          { paso: "Volumen de aceite: V = 52,0 g / 0,885 g/cm^3 = 58,8 cm^3. Volumen de agua: V = 52,0 g / 1,00 g/cm^3 = 52,0 cm^3.", porque: "De d = m / V se despeja V = m / d: con la misma masa, el volumen es inversamente proporcional a la densidad." },
          { paso: "La capa de aceite queda arriba aunque ocupe mas volumen, porque es menos densa.", porque: "La posicion depende de la densidad, no del volumen ni de la masa total." }
        ],
        resultado: "Aceite: 58,8 cm^3 (queda arriba); agua: 52,0 cm^3 (abajo)"
      }
    ],
    errores_tipicos: [
      { error: "Calcular d = 52,0 / 46,0 (invertir masa y volumen), dando 1,13 g/cm^3.", como_evitar: "d = m / V, con la masa arriba. Chequeo: el aceite tiene d < 1, asi que flota en el agua." },
      { error: "Decir que el aceite queda abajo por 'pesar mas' o por ser mas viscoso.", como_evitar: "Lo que define la posicion es la densidad, no la viscosidad ni la masa total." },
      { error: "Clasificar el sistema como homogeneo porque el liquido 'se ve uniforme' al agitarlo.", como_evitar: "Dos liquidos que no se mezclan forman un sistema heterogeneo, aunque se vea uniforme con agitacion." }
    ]
  }
];
