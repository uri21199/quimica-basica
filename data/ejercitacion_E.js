window.EJERCITACION = window.EJERCITACION || {};

window.EJERCITACION["soluciones"] = [
  {
    num: 1,
    nivel: "Básico",
    temas: ["soluciones"],
    enunciado: "Se disuelven 8,50 g de cloruro de sodio (M = 58,5 g/mol) en agua hasta obtener 250 mL de solucion. Calcule la concentracion molar de la solucion.",
    resolucion: [
      {
        parte: "",
        pasos: [
          { paso: "n = 8,50 g / 58,5 g/mol = 0,1453 mol de NaCl.", porque: "Se divide la masa de NaCl (8,50 g) por su masa molar (58,5 g/mol) para obtener los moles, porque la concentracion molar trabaja con cantidad de sustancia y no con masa. Recordar que n = m / M y que al dividir g por g/mol las unidades se cancelan y quedan mol." },
          { paso: "V = 250 mL = 0,250 L.", porque: "Se convierten 250 mL a 0,250 L dividiendo por 1000, ya que la molaridad se define con litros de solucion. Un error frecuente es dividir por 250 directamente; eso daria un valor 1000 veces menor al correcto." },
          { paso: "M = 0,1453 mol / 0,250 L = 0,581 M.", porque: "Se calcula M como moles de soluto divididos litros de solucion, es decir M = n / V. El volumen del denominador es el de la solucion final (no el del solvente), y el resultado se expresa en mol/L, que es la unidad de M." }
        ],
        resultado: "[NaCl] = 0,581 M"
      }
    ],
    errores_tipicos: [
      { error: "Usar los mL directamente en la formula de la molaridad (dividir por 250 en vez de por 0,250 L).", como_evitar: "Pasar siempre el volumen a litros antes de dividir; M sale en mol/L." },
      { error: "Multiplicar los moles por el volumen en vez de dividir.", como_evitar: "M = n / V: los moles se dividen por el volumen." }
    ]
  },
  {
    num: 2,
    nivel: "Básico",
    temas: ["soluciones"],
    enunciado: "Se disuelven 12,0 g de bromuro de potasio (KBr) en 188 g de agua, obteniendose una solucion homogenea. Calcule el porcentaje en masa (% m/m) de soluto en la solucion.",
    resolucion: [
      {
        parte: "",
        pasos: [
          { paso: "m_solucion = m_soluto + m_solvente = 12,0 g + 188 g = 200 g.", porque: "Se suma la masa del soluto (12,0 g) y la del solvente (188 g) para obtener la masa total de solucion (200 g). Esto responde a la conservacion de la masa: al disolver no se pierde nada, asi que la masa de la mezcla es la suma de sus componentes." },
          { paso: "% m/m = (12,0 g / 200 g) x 100 = 6,00 %.", porque: "Se calcula cuantos gramos de KBr hay por cada 100 g de solucion, multiplicando la fraccion 12,0 / 200 por 100. Por definicion, el % m/m es la masa de soluto en 100 partes de masa de solucion; conviene verificar que el denominador sea la masa de solucion y no la de agua." }
        ],
        resultado: "6,00 % m/m"
      }
    ],
    errores_tipicos: [
      { error: "Usar la masa de agua (188 g) como masa de la solucion y obtener 6,38 %.", como_evitar: "Sumar soluto y solvente para obtener la masa de la solucion antes de calcular el porcentaje." },
      { error: "Confundir % m/m con % m/V y dividir por el volumen en mL.", como_evitar: "% m/m usa masas en ambos terminos; % m/V usa gramos de soluto por 100 mL de solucion." }
    ]
  },
  {
    num: 3,
    nivel: "Básico",
    temas: ["soluciones"],
    enunciado: "Se toman 25,0 mL de una solucion de hidroxido de sodio 0,400 M y se diluyen con agua destilada hasta un volumen final de 200 mL. Calcule la concentracion molar de la solucion diluida.",
    resolucion: [
      {
        parte: "",
        pasos: [
          { paso: "Moles de soluto: n = 0,400 mol/L x 0,0250 L = 0,0100 mol de NaOH.", porque: "Se multiplica la molaridad (mol/L) por el volumen en litros (25,0 mL = 0,0250 L) para hallar los moles de soluto de la alicuota, porque M = n / V implica n = M x V. Como al diluir no se agrega ni se quita soluto, esos 0,0100 mol son los mismos que habra en la solucion diluida." },
          { paso: "Concentracion final: M_d = n / V_final = 0,0100 mol / 0,200 L = 0,0500 M.", porque: "Se divide los moles (0,0100 mol) por el volumen final total (0,200 L), no por el volumen de la alicuota. La molaridad se calcula siempre sobre el volumen total de la solucion donde esta disuelto el soluto; el error mas comun es dividir por 25,0 mL y obtener un valor 8 veces mayor." },
          { paso: "Control con C_c x V_c = C_d x V_d: 0,400 x 25,0 = C_d x 200, de donde C_d = 0,0500 M.", porque: "La ecuacion C_c x V_c = C_d x V_d expresa que los moles de soluto son iguales antes y despues de diluir (C x V = n). Sirve como control: al despejar C_d = (0,400 x 25,0) / 200 se llega al mismo 0,0500 M, lo que confirma el resultado. Conviene usar las mismas unidades de volumen en ambos miembros." }
        ],
        resultado: "C_d = 0,0500 M"
      }
    ],
    errores_tipicos: [
      { error: "Usar 25,0 mL como volumen final, o dividir 0,400 x 25,0 por 25,0 (olvidando el volumen final de 200 mL).", como_evitar: "El V_d de la formula es el volumen final de la solucion diluida; el agua agregada es V_d - V_c." },
      { error: "Pensar que la concentracion se mantiene al diluir porque es 'la misma solucion'.", como_evitar: "Lo que se conserva son los moles de soluto, no la concentracion." }
    ]
  },
  {
    num: 4,
    nivel: "Básico",
    temas: ["soluciones"],
    enunciado: "Se preparan 500 mL de solucion acuosa de cloruro de calcio 0,250 M. Calcule la concentracion molar de los iones Ca^2+ y de los iones Cl^- en la solucion.",
    resolucion: [
      {
        parte: "",
        pasos: [
          { paso: "Moles de CaCl2: n = 0,250 mol/L x 0,500 L = 0,125 mol.", porque: "Se multiplica la molaridad (0,250 mol/L) por el volumen en litros (0,500 L) para obtener los moles de CaCl2, aplicando M = n / V despejada como n = M x V. Verificar que los 500 mL se hayan pasado a 0,500 L antes de multiplicar." },
          { paso: "Disociacion completa: CaCl2 -> Ca^2+ + 2 Cl^-. Por cada mol de CaCl2 se forman 1 mol de Ca^2+ y 2 mol de Cl^-.", porque: "Se escribe la disociacion completa porque el CaCl2 es una sal soluble que se separa totalmente en Ca^2+ y Cl^-. Los subindices fijan la proporcion (1 Ca^2+ y 2 Cl^- por mol de sal), y es el dato clave para no olvidar el factor 2 del cloruro." },
          { paso: "[Ca^2+] = 0,250 M y [Cl^-] = 2 x 0,250 M = 0,500 M.", porque: "La concentracion de cada ion se calcula como moles de ion sobre litros de solucion, igual que con cualquier soluto. Como todos los iones estan en los mismos 0,500 L, basta multiplicar la molaridad de la sal por el coeficiente de cada ion (1 para Ca^2+ y 2 para Cl^-)." }
        ],
        resultado: "[Ca^2+] = 0,250 M; [Cl^-] = 0,500 M"
      }
    ],
    errores_tipicos: [
      { error: "Escribir [Cl^-] = 0,250 M, olvidando el subindice 2 del CaCl2.", como_evitar: "Escribir la disociacion y contar los iones antes de calcular." },
      { error: "Multiplicar por 2 la concentracion de Ca^2+ porque hay dos cloruros.", como_evitar: "El factor 2 corresponde solo al Cl^-, no al Ca^2+." }
    ]
  },
  {
    num: 5,
    nivel: "Básico",
    temas: ["soluciones"],
    enunciado: "Calcule la masa de glucosa (C6H12O6) que hay en 250 mL de una solucion 5,00 % m/V.",
    resolucion: [
      {
        parte: "",
        pasos: [
          { paso: "% m/V = 5,00 g de soluto cada 100 mL de solucion.", porque: "Se toma la definicion de % m/V: 5,00 g de soluto en 100 mL de solucion. Es la relacion de referencia del problema, y conviene escribirla con sus unidades antes de operar para no mezclar masa con volumen." },
          { paso: "Factor de escala: 250 mL / 100 mL = 2,50.", porque: "Se divide el volumen pedido (250 mL) por el de referencia (100 mL) para saber cuantas veces entra la referencia en el volumen pedido. Como la concentracion es constante, la masa de soluto se escala con el volumen, y el factor es un cociente de volumenes sin unidades." },
          { paso: "m = 5,00 g x 2,50 = 12,5 g de glucosa.", porque: "Se multiplica los 5,00 g de la referencia por el factor 2,50 para obtener la masa en 250 mL, porque cada mililitro de la solucion tiene la misma concentracion. Verificar que el resultado tenga sentido: 250 mL es mas que 100 mL, asi que deben disolverse mas de 5,00 g." }
        ],
        resultado: "12,5 g de glucosa"
      }
    ],
    errores_tipicos: [
      { error: "Multiplicar por 250 en vez de por 2,50 y obtener 1250 g.", como_evitar: "Escribir la relacion de referencia (100 mL) antes de escalar." },
      { error: "Confundir % m/V con % m/m y pedir la masa de la solucion.", como_evitar: "% m/V se refiere a mL de solucion, no a gramos de solucion." }
    ]
  },
  {
    num: 6,
    nivel: "Intermedio",
    temas: ["soluciones"],
    enunciado: "Un acido clorhidrico comercial tiene 35,0 % m/m y densidad 1,18 g/mL (M(HCl) = 36,5 g/mol). a) Calcule la molaridad de la solucion comercial. b) Calcule el volumen de solucion comercial necesario para preparar 500 mL de HCl 0,100 M.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Base de calculo 1,00 L: m_solucion = 1000 mL x 1,18 g/mL = 1180 g.", porque: "Se calcula la masa de 1,00 L de solucion multiplicando su volumen (1000 mL) por la densidad (1,18 g/mL). La densidad relaciona volumen y masa, y como el % m/m se aplica a masas, hace falta para pasar del volumen de solucion a su masa." },
          { paso: "m_HCl = 0,350 x 1180 g = 413,0 g; n = 413,0 g / 36,5 g/mol = 11,32 mol.", porque: "Se toma el 35,0 % de la masa de solucion para obtener la masa de HCl, porque el % m/m indica la fraccion de la masa total que corresponde al soluto. Luego se divide esa masa por la masa molar (36,5 g/mol) para pasarla a moles, que es lo que necesita la molaridad." },
          { paso: "M = 11,32 mol / 1,00 L = 11,3 M.", porque: "Se divide los moles de HCl (11,32 mol) por el volumen de la base de calculo (1,00 L), porque M = n / V. Como la base fue exactamente 1,00 L, el valor numerico de los moles coincide con la molaridad; conviene verificar que la unidad quede en mol/L." }
        ],
        resultado: "11,3 M"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "n(HCl) necesarios = 0,100 mol/L x 0,500 L = 0,0500 mol.", porque: "Se calcula los moles de HCl que debe tener la solucion diluida (0,100 mol/L x 0,500 L). La cantidad de soluto no cambia al preparar la dilucion: el HCl que se toma del concentrado es el mismo que habra en los 500 mL finales." },
          { paso: "V = n / M_comercial = 0,0500 mol / 11,32 mol/L = 4,42 mL.", porque: "Se despeja el volumen del concentrado como V = n / M, ya que n = M x V: esos 0,0500 mol deben salir de la solucion comercial de 11,32 M. El volumen resultante es pequeno y luego se completa hasta 500 mL con agua; verificar que sea menor que 500 mL." }
        ],
        resultado: "4,42 mL de solucion comercial, completando hasta 500 mL con agua"
      }
    ],
    errores_tipicos: [
      { error: "Usar el 35,0 % m/m como si fuera 350 g/L de HCl, sin considerar la densidad.", como_evitar: "La masa de 1 L de solucion es 1180 g, no 1000 g; sin densidad no se puede pasar de % en masa a molaridad." },
      { error: "En b) tomar el volumen final (500 mL) como volumen de solucion comercial.", como_evitar: "El volumen comercial es el que aporta los moles; el volumen final es el de la solucion diluida." }
    ]
  },
  {
    num: 7,
    nivel: "Intermedio",
    temas: ["soluciones"],
    enunciado: "Se disuelven 15,0 g de hidroxido de sodio (NaOH, M = 40,0 g/mol) en 250 g de agua. a) Calcule la molalidad de la solucion. b) Calcule el % m/m de la solucion.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "n(NaOH) = 15,0 g / 40,0 g/mol = 0,375 mol.", porque: "Se divide la masa de NaOH (15,0 g) por su masa molar (40,0 g/mol) para obtener los moles de soluto, porque la molalidad trabaja con moles. Convertir la masa primero es obligatorio, y las unidades g / (g/mol) dan mol." },
          { paso: "Solvente: 250 g = 0,250 kg de agua.", porque: "Se expresa la masa de solvente en kilogramos (250 g = 0,250 kg), porque la molalidad se define por kg de solvente. Es un error frecuente usar la masa de solucion o los litros, ya que la molalidad considera solo el agua en la que se disolvio el soluto." },
          { paso: "m = 0,375 mol / 0,250 kg = 1,50 mol/kg.", porque: "Se divide los moles de soluto (0,375 mol) por los kilogramos de solvente (0,250 kg), segun la definicion m = n / kg de solvente. La unidad resultante es mol/kg; conviene recordar que la molalidad se escribe con m minuscula para no confundirla con la molaridad M." }
        ],
        resultado: "1,50 mol/kg"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "m_solucion = 15,0 g + 250 g = 265 g.", porque: "Se suma la masa de soluto (15,0 g) y la de solvente (250 g) para obtener la masa de la solucion. Como en el apartado anterior, la masa total incluye todos los componentes, por conservacion de la masa al disolver." },
          { paso: "% m/m = 15,0 g / 265 g x 100 = 5,66 %.", porque: "Se divide la masa de NaOH (15,0 g) por la masa total de solucion (265 g) y se multiplica por 100 para expresarlo como porcentaje. Esto corresponde a la definicion de % m/m, donde el denominador es siempre la masa de solucion y no la del solvente." }
        ],
        resultado: "5,66 % m/m"
      }
    ],
    errores_tipicos: [
      { error: "En a) dividir por la masa total (265 g) en vez de por la masa de agua (0,250 kg).", como_evitar: "Molalidad = mol / kg de solvente; la masa de solucion solo aparece en el % m/m." },
      { error: "En b) usar 250 g como masa de solucion y obtener 6,00 %.", como_evitar: "Recordar que m_solucion = m_soluto + m_solvente." }
    ]
  },
  {
    num: 8,
    nivel: "Intermedio",
    temas: ["soluciones"],
    enunciado: "La solubilidad de una sal A en agua a 20 C es 31,6 g de A por cada 100 g de agua. Se agregan 80,0 g de la sal A a 200 g de agua a 20 C y se agita hasta alcanzar el equilibrio. a) Calcule la masa de sal que queda sin disolver. b) Calcule el % m/m de la solucion obtenida.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Masa maxima disuelta: 31,6 g / 100 g de agua x 200 g de agua = 63,2 g de A.", porque: "Se escala la solubilidad, dada por 100 g de agua, a los 200 g de agua presentes: 31,6 g x (200 / 100) = 63,2 g. La solubilidad es la cantidad maxima de soluto que puede disolverse en una cantidad fija de solvente, asi que hay que proporcionarla a la masa de agua real." },
          { paso: "Sin disolver: 80,0 g - 63,2 g = 16,8 g.", porque: "Se resta la masa maxima disuelta (63,2 g) de la masa agregada (80,0 g) para hallar el exceso que no se disuelve. Lo que supera la solubilidad no puede permanecer en solucion y queda como solido, por eso se aplica la diferencia." },
          { paso: "Supuesto: la sal y el agua llegan al equilibrio a 20 C, y el solido no disuelto esta en equilibrio con la solucion saturada.", porque: "Se aclaran los supuestos del calculo: equilibrio a 20 C y presencia de solido en contacto con la solucion saturada. La solubilidad es un valor de equilibrio que solo se alcanza si hay exceso de soluto, asi que estas condiciones justifican el resultado." }
        ],
        resultado: "16,8 g sin disolver"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "m_solucion = 63,2 g de A + 200 g de agua = 263,2 g.", porque: "Se suma la masa de soluto disuelto (63,2 g) y la del agua (200 g) para obtener la masa de solucion. El solido sin disolver (16,8 g) no forma parte de la solucion, asi que no se suma; un error comun es usar 280 g como masa total." },
          { paso: "% m/m = 63,2 g / 263,2 g x 100 = 24,0 %.", porque: "Se divide la masa de soluto disuelto (63,2 g) por la masa de solucion (263,2 g) y se multiplica por 100. Como la solucion es saturada, tiene la maxima concentracion posible a 20 C, y ese es el valor que corresponde a la pregunta." }
        ],
        resultado: "24,0 % m/m"
      }
    ],
    errores_tipicos: [
      { error: "Sumar los 80,0 g a la solucion como si todo se disolviera.", como_evitar: "Comparar la masa agregada con la solubilidad para la cantidad de solvente presente antes de sumar." },
      { error: "Escalar la solubilidad con 100 g de agua en vez de 200 g.", como_evitar: "La solubilidad es por 100 g de agua: escalar con 200 / 100." }
    ]
  },
  {
    num: 9,
    nivel: "Intermedio",
    temas: ["soluciones"],
    enunciado: "A 25 C la solubilidad de un gas en agua es 1,20 x 10^-3 mol/L cuando la presion parcial del gas es 1,00 atm. Suponiendo que se cumple la ley de Henry (S = k x P) a temperatura constante, a) calcule la solubilidad del gas a una presion parcial de 3,00 atm. b) Calcule la masa de gas (M = 44,0 g/mol) disuelta en 0,500 L de solucion a esa presion.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "k = S / P = 1,20 x 10^-3 mol/L / 1,00 atm = 1,20 x 10^-3 mol/(L x atm).", porque: "Se calcula la constante de Henry dividiendo la solubilidad (S) por la presion parcial (P): k = S / P. Esto aprovecha que la ley de Henry es una proporcionalidad directa S = k x P; a partir de un dato experimental se obtiene k, que sirve para cualquier otra presion a la misma temperatura." },
          { paso: "S = k x P = 1,20 x 10^-3 x 3,00 = 3,60 x 10^-3 mol/L.", porque: "Se multiplica la constante k por la nueva presion parcial (3,00 atm) para obtener la nueva solubilidad. Como la relacion es directa, al triplicar la presion la solubilidad tambien se triplica; conviene verificar que la presion este en atm, la misma unidad que tiene k." }
        ],
        resultado: "3,60 x 10^-3 mol/L"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "n = 3,60 x 10^-3 mol/L x 0,500 L = 1,80 x 10^-3 mol.", porque: "Se multiplica la solubilidad (mol/L) por el volumen de solucion (0,500 L) para hallar los moles de gas disueltos. Como la solubilidad expresa moles por litro, multiplicar por litros da moles totales, y no conviene usar directamente la presion ni la constante k." },
          { paso: "m = 1,80 x 10^-3 mol x 44,0 g/mol = 0,0792 g.", porque: "Se multiplica los moles por la masa molar del gas (44,0 g/mol) para pasar a gramos, usando m = n x M, que es la relacion n = m / M despejada. El resultado es pequeno porque la solubilidad de un gas en agua suele ser baja." }
        ],
        resultado: "0,0792 g de gas"
      }
    ],
    errores_tipicos: [
      { error: "Calcular S a 3,00 atm como S / P (con la presion en el denominador).", como_evitar: "Henry es directamente proporcional: al triplicar P se triplica S." },
      { error: "Aplicar la misma constante de Henry cuando cambia la temperatura.", como_evitar: "La ley vale a T constante; con T distinta la constante k cambia." }
    ]
  },
  {
    num: 10,
    nivel: "Intermedio",
    temas: ["soluciones"],
    enunciado: "Se mezclan 100 mL de solucion de NaCl 0,20 M con 100 mL de solucion de CaCl2 0,10 M. Suponga que los volumenes son aditivos. a) Calcule la concentracion molar de Cl^- en la solucion final. b) Calcule las concentraciones molares de Na^+ y de Ca^2+ en la solucion final.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Cl^- del NaCl: 0,20 mol/L x 0,100 L = 0,0200 mol (NaCl se disocia 1:1).", porque: "Se calcula primero los moles de NaCl (M x V = 0,20 mol/L x 0,100 L). Como el NaCl se disocia 1:1, esos moles son tambien los de Cl^- aportados por esta fuente; hay que contar los iones que provienen de cada soluto por separado antes de sumarlos." },
          { paso: "Cl^- del CaCl2: 0,10 mol/L x 0,100 L = 0,0100 mol de CaCl2, que aportan 2 x 0,0100 = 0,0200 mol de Cl^-.", porque: "Se multiplica los moles de CaCl2 (0,0100 mol) por 2, porque cada formula libera 2 iones Cl^-. Es el punto donde mas se suele olvidar el subindice, por eso conviene escribir la disociacion y contar los iones antes de sumar." },
          { paso: "Volumen final 0,200 L; [Cl^-] = (0,0200 + 0,0200) mol / 0,200 L = 0,200 M.", porque: "Se suma los moles de Cl^- de ambas fuentes (0,0200 + 0,0200 mol) y se divide por el volumen total de la mezcla (0,200 L). Al mezclar, el volumen final es la suma de los volumenes (suponiendo aditividad) y los moles del ion se conservan." }
        ],
        resultado: "[Cl^-] = 0,200 M"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "[Na^+] = 0,0200 mol / 0,200 L = 0,100 M.", porque: "Se divide los moles de Na^+ (0,0200 mol, provenientes solo del NaCl) por el volumen final de 0,200 L. Como el NaCl aporta un Na^+ por formula, no hay que sumar ningun otro aporte de sodio." },
          { paso: "[Ca^2+] = 0,0100 mol / 0,200 L = 0,0500 M.", porque: "Se divide los moles de Ca^2+ (0,0100 mol, aportados solo por el CaCl2) por el volumen final de 0,200 L. El Ca^2+ se reparte en el volumen total de la mezcla, por eso la concentracion se calcula sobre 200 mL y no sobre 100 mL." }
        ],
        resultado: "[Na^+] = 0,100 M; [Ca^2+] = 0,0500 M"
      }
    ],
    errores_tipicos: [
      { error: "Calcular [Cl^-] solo con el NaCl (0,20 M) y olvidar el aporte del CaCl2.", como_evitar: "Sumar los moles de cada ion de todas las fuentes antes de dividir por el volumen total." },
      { error: "Promediar las concentraciones iniciales (0,20 y 0,10 M) para hallar la final.", como_evitar: "Las concentraciones de una mezcla se calculan con moles totales sobre volumen total, no con promedios." }
    ]
  },
  {
    num: 11,
    nivel: "Avanzado",
    temas: ["soluciones"],
    enunciado: "Acido sulfurico concentrado comercial: 96,0 % m/m, densidad 1,84 g/mL (M(H2SO4) = 98,08 g/mol; masa equivalente = 49,04 g/eq). a) Calcule la molaridad de la solucion comercial. b) Calcule su normalidad y explique por que es distinta de la molaridad. c) Calcule el volumen de solucion comercial necesario para preparar 250 mL de H2SO4 0,100 M.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Base de calculo 1,00 L: m_solucion = 1000 mL x 1,84 g/mL = 1840 g; m_H2SO4 = 0,960 x 1840 g = 1766,4 g.", porque: "Se toma 1,00 L de solucion como base de calculo y se pasa a masa con la densidad (1000 mL x 1,84 g/mL = 1840 g). Como el % m/m se aplica a masas, el volumen debe convertirse primero en masa; luego el 96,0 % da la masa de H2SO4 en esa base." },
          { paso: "n = 1766,4 g / 98,08 g/mol = 18,0 mol; M = 18,0 mol / 1,00 L = 18,0 M.", porque: "Se divide la masa de H2SO4 (1766,4 g) por su masa molar (98,08 g/mol) para obtener los moles, y luego se divide por 1,00 L para obtener la molaridad. Como la base es 1 L, el numero de moles coincide con M; conviene verificar que se use la masa molar del H2SO4 completo." }
        ],
        resultado: "18,0 M"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "eq = 1766,4 g / 49,04 g/eq = 36,0 eq; N = 36,0 eq / 1,00 L = 36,0 N.", porque: "Se divide la masa de H2SO4 por su masa equivalente (49,04 g/eq) para obtener los equivalentes. Por definicion, la normalidad cuenta equivalentes, y la masa equivalente es la masa molar dividida por el numero de H^+ que el acido puede ceder (aqui 2, por ser diprotico)." },
          { paso: "N = 2 x M, porque cada mol de H2SO4 aporta 2 equivalentes en la neutralizacion.", porque: "Se aplica N = 2 x M porque, en la neutralizacion, cada mol de H2SO4 aporta 2 equivalentes (2 mol de H^+). Por eso la normalidad de este acido es el doble de su molaridad; la molaridad, en cambio, cuenta moles de formula sin importar cuantos H^+ libera." }
        ],
        resultado: "36,0 N (el doble de la molaridad)"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "n(H2SO4) necesarios = 0,100 mol/L x 0,250 L = 0,0250 mol.", porque: "Se calcula los moles de H2SO4 necesarios en la solucion diluida (0,100 mol/L x 0,250 L = 0,0250 mol). Se hace primero porque la cantidad de acido se conserva al diluir: lo que se necesita en la solucion final es lo que hay que tomar del concentrado." },
          { paso: "V = 0,0250 mol / 18,0 mol/L = 1,39 x 10^-3 L = 1,39 mL.", porque: "Se despeja el volumen de concentrado como V = n / M, ya que el acido de 18,0 M debe aportar esos 0,0250 mol. El volumen resultante es muy pequeno (1,39 mL) y se completa hasta 250 mL con agua; conviene verificar que el volumen sea menor que el final y que la conversion de L a mL sea correcta." }
        ],
        resultado: "1,39 mL de acido concentrado (agregarlo sobre agua, no al reves)"
      }
    ],
    errores_tipicos: [
      { error: "Usar la masa molar en la normalidad (98,08 g) y obtener N = 18,0.", como_evitar: "La masa equivalente del H2SO4 es 49,04 g porque libera 2 H^+." },
      { error: "En a) omitir la densidad y tomar 96,0 % como 960 g de acido por litro.", como_evitar: "1 L de solucion pesa 1840 g; el % en masa siempre se aplica a la masa de solucion." },
      { error: "En c) dividir la molaridad diluida por la concentrada, o usar 250 mL como volumen de acido concentrado.", como_evitar: "Calcular primero los moles de la solucion diluida y luego dividir por la molaridad del concentrado." }
    ]
  },
  {
    num: 12,
    nivel: "Avanzado",
    temas: ["soluciones"],
    enunciado: "La solubilidad de una sal X en agua es 62,0 g de X por cada 100 g de agua a 40 C, y 25,0 g por cada 100 g de agua a 10 C. Se prepara una solucion saturada con 500 g de agua a 40 C y luego se enfria hasta 10 C. a) Calcule la masa de X que cristaliza al enfriar. b) Justifique si la disolucion de X es un proceso endotermico o exotermico a partir del comportamiento observado.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Disuelta a 40 C: 62,0 g / 100 g de agua x 500 g de agua = 310 g de X.", porque: "Se calcula la masa disuelta a 40 C escalando la solubilidad (62,0 g por 100 g de agua) a los 500 g de agua del enunciado, con el factor 500 / 100 = 5: 62,0 x 5 = 310 g. La solubilidad siempre se refiere a 100 g de solvente, no de solucion." },
          { paso: "Disuelta a 10 C: 25,0 g / 100 g de agua x 500 g de agua = 125 g de X.", porque: "Se escala la solubilidad a 10 C (25,0 g por 100 g de agua) con los mismos 500 g de agua: 25,0 x 5 = 125 g. Es la cantidad maxima que la solucion fria puede retener, y se usa como referencia para saber cuanto precipita." },
          { paso: "Cristalizan: 310 g - 125 g = 185 g de X.", porque: "Se resta la masa retenida a 10 C (125 g) de la masa disuelta a 40 C (310 g) para obtener lo que cristaliza. Lo que excede la solubilidad a la temperatura final se separa como solido; es el balance de masa que responde la pregunta a)." },
          { paso: "Supuesto: no se evapora agua y el solido que cristaliza es X anhidro.", porque: "Se explicitan los supuestos del balance: no se evapora agua y el solido es X anhidro. Sin ellos no se puede cerrar el balance de masa, porque la evaporacion o la presencia de agua de hidratacion cambiarian la masa de solvente o la del solido." }
        ],
        resultado: "185 g de X cristalizan"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Al bajar la temperatura disminuye la solubilidad: la solubilidad de X aumenta con la temperatura.", porque: "Se compara las solubilidades a 40 C y 10 C: a mayor temperatura se disuelve mas soluto (310 g frente a 125 g por el mismo solvente). Esa es la base experimental para saber como varia la solubilidad con la temperatura, que es lo que se necesita para clasificar el proceso." },
          { paso: "Si la solubilidad aumenta con T, el proceso de disolucion absorbe calor: es endotermico (Delta H_disolucion > 0).", porque: "Se aplica el criterio: si la solubilidad sube con la temperatura, la disolucion se favorece al calentar, lo que indica que absorbe calor (endotermica, Delta H > 0). Esto sigue el principio de Le Chatelier; conviene verificar que el signo de Delta H sea coherente con ese criterio." }
        ],
        resultado: "Endotermico (Delta H > 0)"
      }
    ],
    errores_tipicos: [
      { error: "Usar 500 g de solucion en lugar de 500 g de agua para calcular la masa disuelta.", como_evitar: "La solubilidad se refiere a 100 g de solvente: el dato del enunciado es agua." },
      { error: "Decir que la disolucion es exotermica porque 'al enfriar sale solido'.", como_evitar: "Sale solido al enfriar porque baja la solubilidad; si la solubilidad sube con T, la disolucion es endotermica." }
    ]
  },
  {
    num: 13,
    nivel: "Avanzado",
    temas: ["soluciones"],
    enunciado: "Una muestra de agua de rio contiene 2,50 ppm de Fe^3+ (en masa). a) Calcule la masa de Fe^3+ presente en 500 g de muestra. b) Calcule la concentracion molar de Fe^3+ suponiendo densidad 1,00 g/mL para la muestra (M(Fe) = 55,85 g/mol). c) Justifique por que, en soluciones acuosas muy diluidas, la concentracion en ppm es numericamente igual a la concentracion en mg/L.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "ppm = mg de soluto por kg de solucion: 2,50 mg/kg x 0,500 kg = 1,25 mg de Fe^3+.", porque: "Se multiplica la concentracion en ppm (2,50 mg/kg) por la masa de muestra en kg (0,500 kg) para obtener los mg de Fe^3+. El ppm es una relacion masa/masa, asi que hay que usar kilogramos y no gramos; con 500 g el resultado seria 1000 veces mayor." }
        ],
        resultado: "1,25 mg de Fe^3+"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Supuesto: densidad 1,00 g/mL; entonces 1 kg de muestra ocupa 1,00 L y 2,50 mg/kg = 2,50 mg/L = 2,50 x 10^-3 g/L.", porque: "Se usa la densidad (1,00 g/mL) para saber que 1 kg de muestra ocupa 1,00 L, y asi pasar de mg/kg a mg/L. En agua diluida la densidad es cercana a 1 g/mL, lo que justifica el supuesto; despues se convierte 2,50 mg/L a g/L dividiendo por 1000." },
          { paso: "[Fe^3+] = 2,50 x 10^-3 g/L / 55,85 g/mol = 4,48 x 10^-5 M.", porque: "Se divide la concentracion en g/L (2,50 x 10^-3 g/L) por la masa molar del Fe (55,85 g/mol), porque la molaridad es moles por litro. Por eso el paso previo de pasar mg a g es indispensable: con mg/L directamente el valor quedaria 1000 veces mayor." }
        ],
        resultado: "4,48 x 10^-5 M"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "ppm = mg/kg de solucion; mg/L = mg por litro de solucion. Con densidad cercana a 1 g/mL, 1 kg de solucion ocupa aproximadamente 1 L.", porque: "Se comparan las definiciones: ppm equivale a mg/kg de solucion y mg/L mide mg por litro de solucion. Con densidad cercana a 1 g/mL, 1 kg de solucion ocupa aproximadamente 1 L, por lo que ambas unidades coinciden numericamente. Es una aproximacion valida para soluciones diluidas, no para soluciones densas." }
        ],
        resultado: "ppm = mg/L en soluciones diluidas porque la densidad es cercana a 1 g/mL"
      }
    ],
    errores_tipicos: [
      { error: "En a) multiplicar 2,50 por 500 (g) en vez de por 0,500 (kg).", como_evitar: "ppm es mg/kg: pasar 500 g a 0,500 kg antes de multiplicar." },
      { error: "En b) dividir los mg/L directamente por la masa molar y obtener un valor 1000 veces mayor.", como_evitar: "Pasar mg a g antes de dividir por la masa molar." }
    ]
  },
  {
    num: 14,
    nivel: "Avanzado",
    temas: ["soluciones"],
    enunciado: "Para preparar 250 mL de solucion de carbonato de sodio 0,200 M se usa la sal hidratada Na2CO3 . 10 H2O (M = 286,2 g/mol). a) Calcule la masa de sal hidratada que hay que pesar. b) Calcule el % m/m de agua de cristalizacion en la sal hidratada. c) Si se pesan 14,3 g de la sal hidratada y se calcula la molaridad usando la masa molar del Na2CO3 anhidro (105,99 g/mol), que concentracion se obtendria? Justifique por que ese calculo es incorrecto.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "n(Na2CO3) = 0,200 mol/L x 0,250 L = 0,0500 mol.", porque: "Se calcula los moles de Na2CO3 a disolver (0,200 mol/L x 0,250 L = 0,0500 mol). La molaridad se refiere al carbonato disuelto, asi que este es el dato base del calculo; el volumen debe estar en litros." },
          { paso: "m = 0,0500 mol x 286,2 g/mol = 14,3 g de Na2CO3 . 10 H2O.", porque: "Se convierte los moles en masa de hidrato multiplicando por la masa molar del Na2CO3 . 10 H2O (286,2 g/mol). Como la sal se pesa con su agua de cristalizacion, hay que usar la masa molar del hidrato y no la del anhidro; verificar que 14,3 g sea la masa pesada." }
        ],
        resultado: "14,3 g de sal hidratada"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Masa de agua en el hidrato: 10 x 18,02 g/mol = 180,2 g/mol.", porque: "Se multiplica las 10 moleculas de agua por la masa molar del agua (18,02 g/mol) para hallar la masa de agua contenida en la formula del hidrato. Esa agua forma parte de la masa del solido aunque no sea Na2CO3." },
          { paso: "% m/m de agua = 180,2 / 286,2 x 100 = 63,0 %.", porque: "Se divide la masa de agua (180,2 g/mol) por la masa molar total del hidrato (286,2 g/mol) y se multiplica por 100. Es la fraccion de la masa de la sal hidratada que corresponde al agua, y muestra cuanto del material pesado no es sal anhidra." }
        ],
        resultado: "63,0 % de agua de cristalizacion"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "Calculo erroneo: n = 14,3 g / 105,99 g/mol = 0,135 mol; M = 0,135 mol / 0,250 L = 0,540 M.", porque: "Se calcula la molaridad erronea que resultaria si los 14,3 g se tratan como Na2CO3 anhidro (105,99 g/mol): masa dividida masa molar da moles, y luego se divide por el volumen. Este calculo sirve para comparar con el valor correcto y ver que el error proviene de usar una masa molar que no corresponde." },
          { paso: "La concentracion real es 0,200 M, porque el agua de cristalizacion no aporta Na2CO3 y debe usarse la masa molar del hidrato: 14,3 g / 286,2 g/mol = 0,0500 mol.", porque: "Se usa la masa molar del hidrato (286,2 g/mol) para hallar los moles realmente presentes (14,3 g / 286,2 g/mol = 0,0500 mol) y la molaridad correcta (0,200 M). La masa molar debe ser la del compuesto que se pesa, porque el agua de cristalizacion no aporta Na2CO3 ni debe contarse como soluto." }
        ],
        resultado: "Se obtendria 0,540 M, un valor 2,7 veces mayor al real (0,200 M): calculo incorrecto"
      }
    ],
    errores_tipicos: [
      { error: "Pesar 5,30 g (masa del anhidro) para preparar la solucion.", como_evitar: "Si el reactivo es la sal hidratada, calcular con la masa molar del hidrato (286,2 g/mol)." },
      { error: "Usar la masa molar del Na2CO3 anhidro con la masa del hidrato pesado.", como_evitar: "Identificar que compuesto se pesa y usar su masa molar." }
    ]
  },
  {
    num: 15,
    nivel: "Avanzado",
    temas: ["soluciones"],
    enunciado: "Se mezclan 60,0 mL de una solucion de cloruro de potasio 12,0 % m/m (densidad 1,08 g/mL) con 140 mL de agua destilada (densidad 1,00 g/mL). Suponga que los volumenes son aditivos. a) Calcule la masa de KCl en la solucion concentrada y el % m/m de la mezcla final. b) Calcule la molaridad de KCl en la mezcla final (M(KCl) = 74,55 g/mol). c) Calcule el % m/m que se obtendria si se tratara la solucion concentrada como si tuviera densidad 1,00 g/mL, y justifique el error.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "m_solucion concentrada = 60,0 mL x 1,08 g/mL = 64,8 g; m_KCl = 0,120 x 64,8 g = 7,78 g.", porque: "Se multiplica el volumen de la solucion concentrada (60,0 mL) por su densidad (1,08 g/mL) para obtener su masa (64,8 g), y luego se aplica el 12,0 % m/m a esa masa. La densidad es indispensable porque el % en masa se refiere a gramos de solucion, no a mililitros." },
          { paso: "Masa de la mezcla final = 64,8 g + 140 g = 204,8 g; % m/m = 7,776 g / 204,8 g x 100 = 3,80 %.", porque: "Se suma la masa de la solucion concentrada (64,8 g) y la del agua agregada (140 g) para obtener la masa total de la mezcla, y se divide la masa de KCl por ella. El denominador del % m/m final es la masa de toda la mezcla, incluido el agua que se agrego." }
        ],
        resultado: "7,78 g de KCl; 3,80 % m/m"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "n(KCl) = 7,776 g / 74,55 g/mol = 0,1043 mol; V_final = 60,0 mL + 140 mL = 200 mL = 0,200 L.", porque: "Se divide la masa de KCl (7,776 g) por su masa molar (74,55 g/mol) para obtener los moles, y el volumen final se calcula como la suma de 60,0 mL y 140 mL (aditividad supuesta). La molaridad necesita ambos datos: moles de soluto y volumen total de la mezcla." },
          { paso: "M = 0,1043 mol / 0,200 L = 0,522 M.", porque: "Se divide los moles de KCl (0,1043 mol) por el volumen final en litros (0,200 L). La molaridad se refiere a la mezcla final y no a la solucion concentrada, asi que el volumen del denominador es el de la mezcla completa." }
        ],
        resultado: "0,522 M"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "Calculo erroneo: 12,0 % x 60,0 g = 7,20 g de KCl; masa total 60,0 g + 140 g = 200 g; % = 7,20 / 200 x 100 = 3,60 %.", porque: "Se calcula el resultado erroneo a proposito: 12,0 % x 60,0 g = 7,20 g de KCl, usando 60,0 g como masa de la solucion concentrada. Es lo que sale al ignorar la densidad; sirve para comparar y ver por que el % m/m queda subestimado." },
          { paso: "El error viene de que 60,0 mL de solucion concentrada pesan 64,8 g, no 60,0 g: al ignorar la densidad se subestima la masa de KCl y la masa total.", porque: "Se observa que 60,0 mL de la solucion concentrada pesan 64,8 g y no 60,0 g, lo que subestima tanto la masa de KCl como la masa total. Un % m/m siempre exige masas reales, asi que el volumen debe convertirse a masa con la densidad antes de aplicar el porcentaje." }
        ],
        resultado: "3,60 % (incorrecto); el valor correcto es 3,80 %"
      }
    ],
    errores_tipicos: [
      { error: "En a) usar 60,0 mL en lugar de 64,8 g al calcular el % m/m.", como_evitar: "Pasar siempre el volumen de solucion concentrada a masa con la densidad." },
      { error: "En b) tomar el volumen final como 140 mL (solo el agua) o como 60,0 mL (solo la concentrada).", como_evitar: "Con volumenes aditivos, el volumen de la mezcla final es la suma de los volumenes mezclados." }
    ]
  },
  {
    num: 16,
    nivel: "Tipo parcial",
    temas: ["soluciones", "magnitudes"],
    enunciado: "En un laboratorio de control de calidad de aguas se prepara una solucion madre disolviendo 12,50 g de sulfato de cobre(II) pentahidratado, CuSO4 . 5 H2O (M = 249,7 g/mol), en agua destilada hasta completar 500 mL de solucion. a) Escriba la ecuacion de disociacion del CuSO4 en agua y calcule las concentraciones molares de CuSO4, Cu^2+ y SO4^2- en la solucion madre; calcule tambien la concentracion de Cu^2+ en mg/L. b) Calcule el porcentaje m/V de CuSO4 anhidro (M = 159,6 g/mol) en la solucion madre y justifique por que la masa del hidrato no coincide con la masa de sal anhidra. c) Se toman 20,0 mL de la solucion madre y se diluyen con agua hasta 250 mL. Calcule la nueva concentracion molar de CuSO4 y los mg de Cu^2+ contenidos en los 20,0 mL originales. d) Justifique que ocurre con la molaridad de la solucion madre si el frasco queda destapado y se evapora agua, y que ocurre con los moles de Cu^2+.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Disociacion: CuSO4 (s) -> Cu^2+ + SO4^2- (disociacion completa).", porque: "Se escribe la disociacion del CuSO4 como sal soluble que se separa completamente en Cu^2+ y SO4^2-. Es el punto de partida para contar iones: con estequiometria 1:1 cada formula libera un Cu^2+ y un SO4^2-." },
          { paso: "n = 12,50 g / 249,7 g/mol = 0,05006 mol de CuSO4 . 5 H2O; [CuSO4] = [Cu^2+] = [SO4^2-] = 0,05006 mol / 0,500 L = 0,1001 M.", porque: "Se divide la masa del hidrato (12,50 g) por su masa molar (249,7 g/mol) para obtener los moles, y luego por el volumen en litros (0,500 L) para hallar la molaridad. Como cada mol de hidrato aporta un mol de CuSO4 y de cada ion, las tres concentraciones son iguales." },
          { paso: "[Cu^2+] en mg/L = 0,1001 mol/L x 63,55 g/mol = 6,36 g/L = 6,36 x 10^3 mg/L.", porque: "Se multiplica la molaridad de Cu^2+ (0,1001 mol/L) por la masa molar del Cu (63,55 g/mol) para pasar a g/L, y luego por 1000 para expresar en mg/L. Las concentraciones en mg/L requieren que la masa del ion se exprese en mg y no en g." }
        ],
        resultado: "0,1001 M de CuSO4, Cu^2+ y SO4^2-; [Cu^2+] = 6,36 x 10^3 mg/L"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Masa de CuSO4 anhidro = 0,05006 mol x 159,6 g/mol = 7,990 g en 500 mL.", porque: "Se multiplica los moles del hidrato (0,05006 mol) por la masa molar del CuSO4 anhidro (159,6 g/mol) para obtener la masa de sal anhidra. Solo la sal anhidra cuenta como soluto, porque el agua de cristalizacion no se disuelve como CuSO4." },
          { paso: "% m/V = 7,990 g / 500 mL x 100 = 1,60 %.", porque: "Se divide la masa de CuSO4 (7,990 g) por el volumen en mL (500 mL) y se multiplica por 100, porque el % m/V se refiere a gramos por cada 100 mL de solucion. Asi se obtiene el porcentaje de soluto en la unidad propia de esta medida." },
          { paso: "Justificacion: el hidrato pesa 249,7 g/mol, de los cuales 5 x 18,02 = 90,10 g/mol son agua; el CuSO4 anhidro es solo 159,6 / 249,7 = 63,9 % de la masa del hidrato.", porque: "Se calcula la masa de agua de cristalizacion (5 x 18,02 = 90,10 g/mol) y la fraccion de CuSO4 anhidro en el hidrato (159,6 / 249,7 = 63,9 %), para mostrar cuanta parte de la masa pesada es sal. Asi se justifica por que la masa del hidrato no coincide con la del soluto." }
        ],
        resultado: "1,60 % m/V de CuSO4 anhidro"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "Moles en la alicuota: 0,1001 mol/L x 0,0200 L = 2,002 x 10^-3 mol de CuSO4.", porque: "Se multiplica la molaridad de la solucion madre (0,1001 mol/L) por el volumen de la alicuota (0,0200 L) para obtener los moles de CuSO4 tomados. Una alicuota tiene la misma concentracion que la solucion original, asi que basta multiplicar por el volumen que se toma." },
          { paso: "[CuSO4] final = 2,002 x 10^-3 mol / 0,250 L = 8,01 x 10^-3 M.", porque: "Se divide los moles de la alicuota (2,002 x 10^-3 mol) por el volumen final de la dilucion (0,250 L). Al diluir el soluto se conserva y solo cambia el volumen, por lo que esta relacion da la nueva concentracion molar de CuSO4." },
          { paso: "mg de Cu^2+ en 20,0 mL = 2,002 x 10^-3 mol x 63,55 g/mol = 0,1272 g = 127 mg.", porque: "Se multiplica los moles de Cu^2+ de la alicuota (2,002 x 10^-3 mol) por la masa molar del Cu (63,55 g/mol) y se pasa el resultado a mg. Los moles de Cu^2+ no cambian al diluir, y la cantidad pedida corresponde a los 20,0 mL originales, que son los que contiene la alicuota." }
        ],
        resultado: "8,01 x 10^-3 M de CuSO4 y 127 mg de Cu^2+"
      },
      {
        parte: "d)",
        pasos: [
          { paso: "Al evaporarse agua, el volumen de solucion disminuye, pero los moles de Cu^2+ no cambian (el agua sale sin llevar soluto).", porque: "Se analiza que al evaporarse agua el solvente sale sin llevar soluto, asi que los moles de Cu^2+ se mantienen constantes mientras el volumen disminuye. La cantidad de sustancia disuelta no depende de cuanto solvente haya; solo cambia si se agrega o quita soluto." },
          { paso: "Como M = n / V y n no cambia mientras V baja, la molaridad aumenta.", porque: "Se aplica M = n / V: si n no cambia y V disminuye, el cociente aumenta. La molaridad depende inversamente del volumen cuando el numero de moles es constante, por eso la solucion queda mas concentrada; conviene razonar con la relacion y no con la intuicion." }
        ],
        resultado: "La molaridad aumenta; los moles de Cu^2+ no cambian"
      }
    ],
    errores_tipicos: [
      { error: "En b) usar la masa del hidrato (12,50 g) directamente como masa de CuSO4 y obtener 2,50 % m/V.", como_evitar: "Descontar el agua de cristalizacion: calcular con moles de sal anhidra y su masa molar (159,6 g/mol)." },
      { error: "En c) dividir por el volumen de la alicuota (20,0 mL) en vez de por el volumen final (250 mL).", como_evitar: "El volumen de la dilucion es el final; la alicuota solo aporta los moles." },
      { error: "En d) pensar que la molaridad no cambia porque 'es la misma solucion'.", como_evitar: "Si el soluto no se pierde y el volumen baja, la molaridad sube." }
    ]
  }
];

window.EJERCITACION["reacciones"] = [
  {
    num: 1,
    nivel: "Básico",
    temas: ["reacciones"],
    enunciado: "Balancee la siguiente ecuacion y clasifique la reaccion: Al(s) + O2(g) -> Al2O3(s).",
    resolucion: [
      {
        parte: "",
        pasos: [
          { paso: "Cuento los atomos: a la izquierda 1 Al y 2 O; a la derecha 2 Al y 3 O.", porque: "Se cuentan los atomos de cada elemento a ambos lados de la ecuacion para detectar cuales no estan igualados (aqui Al y O). El balanceo se basa en la conservacion de la masa: ningun atomo se crea ni se destruye, asi que la cantidad de cada elemento debe ser la misma antes y despues." },
          { paso: "Igualo Al: 4 Al a la izquierda y 2 Al2O3 a la derecha (4 Al).", porque: "Se ajusta el coeficiente del Al para igualar sus atomos: como cada formula de Al2O3 tiene 2 Al, se necesitan 2 formulas para tener 4 Al. Se cambian solo coeficientes porque los subindices definen la sustancia; despues conviene volver a contar todos los elementos." },
          { paso: "Igualo O: 2 Al2O3 tienen 6 O, y 3 O2 aportan 6 O. Ecuacion: 4 Al(s) + 3 O2(g) -> 2 Al2O3(s).", porque: "Se ajusta el coeficiente del O2 para igualar los atomos de oxigeno: 2 Al2O3 tienen 6 O, y cada O2 aporta 2 O, por lo que hacen falta 3 O2. Al final se revisa que todos los elementos tengan la misma cantidad a ambos lados, como exige la conservacion de la masa." },
          { paso: "Clasificacion: sintesis (dos reactivos dan un solo producto). Tambien es redox: el Al pasa de 0 a +3 y el O de 0 a -2.", porque: "Se identifica el tipo de reaccion: dos reactivos que dan un unico producto son una sintesis. Ademas hay redox, porque cambian los numeros de oxidacion (Al de 0 a +3 y O de 0 a -2), lo que indica transferencia de electrones; conviene revisar ambos criterios por separado." }
        ],
        resultado: "4 Al(s) + 3 O2(g) -> 2 Al2O3(s); sintesis y redox"
      }
    ],
    errores_tipicos: [
      { error: "Cambiar los subindices (escribir AlO3 en lugar de Al2O3) para igualar.", como_evitar: "Los subindices definen la sustancia; solo se cambian los coeficientes delante de las formulas." },
      { error: "Dejar 2 Al2O3 con 3 O2 sin volver a contar los atomos de Al.", como_evitar: "Contar los atomos de cada elemento despues de cada cambio para verificar." }
    ]
  },
  {
    num: 2,
    nivel: "Básico",
    temas: ["reacciones"],
    enunciado: "Se quema por completo 10,0 g de propano (C3H8, M = 44,1 g/mol) en exceso de oxigeno. La ecuacion balanceada es C3H8 + 5 O2 -> 3 CO2 + 4 H2O. Calcule la masa de CO2 producida.",
    resolucion: [
      {
        parte: "",
        pasos: [
          { paso: "n(C3H8) = 10,0 g / 44,1 g/mol = 0,227 mol.", porque: "Se divide la masa de propano (10,0 g) por su masa molar (44,1 g/mol) para pasar a moles, porque los coeficientes de la ecuacion balanceada indican proporciones de moles y no de gramos. Verificar que la masa molar sea la del C3H8 completo." },
          { paso: "Relacion molar: 1 mol de C3H8 produce 3 mol de CO2.", porque: "Se lee la relacion molar directamente de los coeficientes: 1 mol de C3H8 produce 3 mol de CO2, porque el coeficiente del CO2 es 3 y el del propano es 1. Esta es la base de la estequiometria: los coeficientes dan proporciones de moles, no de masas." },
          { paso: "n(CO2) = 3 x 0,227 mol = 0,680 mol.", porque: "Se multiplica los moles de propano (0,227 mol) por la relacion molar 3 para obtener los moles de CO2. Se trabaja sobre el reactivo porque el oxigeno esta en exceso y el propano es el que determina la cantidad de producto." },
          { paso: "m(CO2) = 0,680 mol x 44,0 g/mol = 29,9 g.", porque: "Se multiplica los moles de CO2 (0,680 mol) por su masa molar (44,0 g/mol) para expresar el resultado en gramos, usando m = n x M. Es el paso inverso de la conversion inicial; conviene verificar que el resultado sea coherente con la masa de propano de partida." }
        ],
        resultado: "29,9 g de CO2"
      }
    ],
    errores_tipicos: [
      { error: "Tomar los 10,0 g de propano como si fueran moles.", como_evitar: "Pasar siempre la masa a moles antes de aplicar los coeficientes." },
      { error: "Usar relacion 1:1 entre propano y CO2 (olvidando el coeficiente 3).", como_evitar: "Leer los coeficientes de la ecuacion balanceada, no los subindices de la formula del reactivo." }
    ]
  },
  {
    num: 3,
    nivel: "Básico",
    temas: ["reacciones"],
    enunciado: "El clorato de potasio se descompone por calentamiento segun 2 KClO3(s) -> 2 KCl(s) + 3 O2(g). Calcule el volumen de O2 medido en CNPT que se obtiene a partir de 24,5 g de KClO3 (M = 122,5 g/mol).",
    resolucion: [
      {
        parte: "",
        pasos: [
          { paso: "n(KClO3) = 24,5 g / 122,5 g/mol = 0,200 mol.", porque: "Se divide la masa de KClO3 (24,5 g) por su masa molar (122,5 g/mol) para pasar a moles. La estequiometria trabaja en moles, por eso la masa dada debe convertirse antes de usar los coeficientes." },
          { paso: "n(O2) = 0,200 mol x 3 / 2 = 0,300 mol de O2.", porque: "Se aplica la relacion molar de la ecuacion balanceada: 2 mol de KClO3 producen 3 mol de O2, asi que los moles de oxigeno son (3 / 2) veces los del clorato. Esto conecta el reactivo con el producto; el error mas comun es usar 1:1 en vez de leer los coeficientes." },
          { paso: "V(O2) = 0,300 mol x 22,4 L/mol = 6,72 L en CNPT.", porque: "Se pasa los moles de O2 a volumen con el volumen molar de 22,4 L/mol, que vale en CNPT (273 K y 1 atm). Este valor sale de PV = nRT: a 273 K y 1 atm un mol de gas ideal ocupa 22,4 L; verificar que la condicion sea CNPT antes de usarlo." }
        ],
        resultado: "6,72 L de O2 en CNPT"
      }
    ],
    errores_tipicos: [
      { error: "Aplicar relacion 1:1 entre KClO3 y O2.", como_evitar: "Usar los coeficientes de la ecuacion balanceada (2 y 3)." },
      { error: "Usar 22,4 L/mol para una temperatura de 25 C.", como_evitar: "El volumen molar de 22,4 L/mol vale solo en CNPT; a otra temperatura usar PV = nRT." }
    ]
  },
  {
    num: 4,
    nivel: "Básico",
    temas: ["reacciones"],
    enunciado: "Una lamina de cinc metalico se sumerge en una solucion acuosa de sulfato de cobre(II) y ocurre la reaccion: Zn(s) + CuSO4(ac) -> ZnSO4(ac) + Cu(s). Verifique el balanceo, indique el numero de oxidacion del Zn y del Cu antes y despues de la reaccion, e identifique el agente oxidante y el agente reductor.",
    resolucion: [
      {
        parte: "",
        pasos: [
          { paso: "Balanceo: 1 Zn, 1 Cu, 1 S y 4 O a cada lado; la ecuacion ya esta balanceada con coeficientes 1.", porque: "Se verifica que la ecuacion este balanceada contando cada elemento a ambos lados. Conviene asegurar primero la conservacion de la masa, porque los numeros de oxidacion se analizan sobre una ecuacion que ya es correcta." },
          { paso: "Zn: 0 en el metal -> +2 en ZnSO4 (se oxida, pierde 2 e^-). Cu: +2 en CuSO4 -> 0 en el Cu metalico (se reduce, gana 2 e^-).", porque: "Se comparan los numeros de oxidacion antes y despues: el Zn pasa de 0 a +2 (pierde 2 e^-) y el Cu pasa de +2 a 0 (gana 2 e^-). Si el numero de oxidacion sube hay oxidacion, y si baja hay reduccion; asi se identifica que proceso sufre cada elemento." },
          { paso: "Agente reductor: Zn (se oxida y cede electrones). Agente oxidante: Cu^2+ del CuSO4 (se reduce y acepta electrones).", porque: "Es una cuestion de definicion: el oxidante acepta electrones (se reduce) y el reductor cede electrones (se oxida). Por eso el agente oxidante es el Cu^2+ del CuSO4 y el reductor es el Zn; conviene verificarlo siempre con la variacion del numero de oxidacion." }
        ],
        resultado: "Zn: reductor (0 -> +2); Cu^2+: oxidante (+2 -> 0)"
      }
    ],
    errores_tipicos: [
      { error: "Decir que el agente oxidante es el Zn porque 'se oxida'.", como_evitar: "El oxidante es el que se reduce; el reductor es el que se oxida." },
      { error: "Asignar 0 al cobre de CuSO4 olvidando su estado de oxidacion +2.", como_evitar: "En una sal, el numero de oxidacion del metal se obtiene con el anion (SO4^2- aporta -2)." }
    ]
  },
  {
    num: 5,
    nivel: "Básico",
    temas: ["reacciones"],
    enunciado: "Se neutralizan por completo 50,0 mL de solucion de HCl 0,200 M con hidroxido de sodio. La reaccion es HCl(ac) + NaOH(ac) -> NaCl(ac) + H2O(l). Calcule la masa de NaCl (M = 58,5 g/mol) que se forma.",
    resolucion: [
      {
        parte: "",
        pasos: [
          { paso: "n(HCl) = 0,200 mol/L x 0,0500 L = 0,0100 mol.", porque: "Se pasa el volumen de 50,0 mL a litros (0,0500 L) y se multiplica por la molaridad del HCl (0,200 mol/L) para obtener los moles, porque M es mol por litro. El volumen en mL debe convertirse antes; el resultado es 0,0100 mol." },
          { paso: "Relacion 1:1 en la ecuacion: 0,0100 mol de HCl necesitan 0,0100 mol de NaOH y producen 0,0100 mol de NaCl.", porque: "Se usa la relacion 1:1 que dan los coeficientes para saber cuantos moles de NaOH se necesitan y cuantos de NaCl se forman. En una neutralizacion completa, acido y base reaccionan en proporcion estequiometrica, asi que sus moles coinciden." },
          { paso: "m(NaCl) = 0,0100 mol x 58,5 g/mol = 0,585 g.", porque: "Se multiplica los moles de NaCl (0,0100 mol) por su masa molar (58,5 g/mol) para pasar a gramos. Es la conversion final de moles a masa del producto; conviene verificar que el resultado tenga un orden de magnitud acorde a la cantidad de reactivo." }
        ],
        resultado: "0,585 g de NaCl (reaccion de neutralizacion)"
      }
    ],
    errores_tipicos: [
      { error: "Multiplicar 0,200 mol/L por 50,0 mL sin pasar a litros y obtener 10,0 mol.", como_evitar: "Pasar el volumen a L antes de multiplicar por la molaridad." },
      { error: "Calcular la masa de sal a partir de la masa de HCl en lugar de los moles.", como_evitar: "Pasar el HCl a moles, usar la relacion molar y recien luego pasar a gramos del producto." }
    ]
  },
  {
    num: 6,
    nivel: "Intermedio",
    temas: ["reacciones"],
    enunciado: "Se hacen reaccionar 8,00 g de hierro con 6,00 g de azufre para formar sulfuro de hierro(II) segun Fe(s) + S(s) -> FeS(s). a) Determine el reactivo limitante y calcule la masa del reactivo en exceso que queda sin reaccionar. b) Calcule la masa de FeS que se obtiene si el rendimiento de la reaccion es 85,0 %.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "n(Fe) = 8,00 g / 55,85 g/mol = 0,143 mol; n(S) = 6,00 g / 32,07 g/mol = 0,187 mol.", porque: "Se divide cada masa por su masa molar: Fe (8,00 g / 55,85 g/mol) y S (6,00 g / 32,07 g/mol). La comparacion de reactivos se hace en moles, porque la relacion de la ecuacion es entre moles y no entre gramos." },
          { paso: "Relacion 1:1: 0,143 mol de Fe necesitan 0,143 mol de S. Hay 0,187 mol de S, asi que el Fe es el limitante y el S esta en exceso.", porque: "Se compara los moles disponibles con la relacion 1:1: el Fe necesita 0,143 mol de S y hay 0,187 mol, por lo que el Fe se agota primero y es el limitante. Las masas de reactivos no se pueden comparar directamente porque cada especie tiene su propia masa molar." },
          { paso: "Exceso de S = (0,187 - 0,143) mol = 0,0439 mol; m = 0,0439 mol x 32,07 g/mol = 1,41 g.", porque: "Se calcula el exceso de S restando lo consumido (0,143 mol) de lo disponible (0,187 mol) y se pasa a masa con la masa molar del S. El reactivo en exceso es el que sobra al final; el limitante nunca queda en exceso." }
        ],
        resultado: "Limitante: Fe; exceso de S: 1,41 g"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "n(FeS) teorico = 0,143 mol (segun el Fe); m teorica = 0,143 mol x 87,92 g/mol = 12,6 g.", porque: "Se calcula el producto teorico usando los moles del reactivo limitante (Fe): 0,143 mol de FeS, que luego se multiplican por la masa molar del FeS (87,92 g/mol). El producto teorico siempre sale del limitante, porque es el reactivo que se consume primero." },
          { paso: "m real = 0,850 x 12,6 g = 10,7 g.", porque: "Se multiplica el valor teorico (12,6 g) por el rendimiento (0,850) para hallar la masa realmente obtenida. El rendimiento es la fraccion del producto teorico que se obtiene en la practica, por eso se aplica sobre el valor calculado en el paso anterior." }
        ],
        resultado: "10,7 g de FeS"
      }
    ],
    errores_tipicos: [
      { error: "Elegir como limitante al reactivo de menor masa (azufre, 6,00 g) sin pasar a moles.", como_evitar: "Comparar siempre moles dividiendo por la masa molar de cada reactivo." },
      { error: "En b) aplicar el rendimiento sobre el reactivo en exceso o usar 100 % de rendimiento.", como_evitar: "Aplicar el rendimiento sobre la masa teorica calculada con el reactivo limitante." }
    ]
  },
  {
    num: 7,
    nivel: "Intermedio",
    temas: ["reacciones"],
    enunciado: "Una caliza que contiene 84,0 % en masa de CaCO3 se hace reaccionar con HCl en exceso segun CaCO3(s) + 2 HCl(ac) -> CaCl2(ac) + CO2(g) + H2O(l). Se usan 12,5 g de caliza. a) Calcule la masa de CO2 producida. b) Calcule el volumen de CO2 medido a 25 C y 1 atm.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "m(CaCO3) = 0,840 x 12,5 g = 10,5 g.", porque: "Se multiplica la masa de caliza (12,5 g) por la pureza (0,840) para obtener la masa de CaCO3 puro. La pureza indica la fraccion de la muestra que es CaCO3; solo esa parte reacciona y forma CO2, por eso el resto no debe considerarse." },
          { paso: "n(CaCO3) = 10,5 g / 100,1 g/mol = 0,105 mol.", porque: "Se divide la masa de CaCO3 puro (10,5 g) por su masa molar (100,1 g/mol) para obtener los moles. La estequiometria trabaja en moles, asi que la masa corregida por pureza debe pasarse a moles antes de usar los coeficientes." },
          { paso: "Relacion 1:1 con el CO2: n(CO2) = 0,105 mol; m(CO2) = 0,105 mol x 44,0 g/mol = 4,62 g.", porque: "Se aplica la relacion 1:1 de la ecuacion (1 mol de CaCO3 produce 1 mol de CO2) y luego se multiplica por la masa molar del CO2 (44,0 g/mol). El HCl esta en exceso y no limita la cantidad de CO2, por eso el calculo sale del carbonato." }
        ],
        resultado: "4,62 g de CO2"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "V = nRT / P = 0,105 mol x 0,0821 L atm/(mol K) x 298 K / 1 atm = 2,57 L.", porque: "Se usa la ecuacion de los gases ideales V = nRT / P con la temperatura en kelvin (298 K). A 25 C el gas no esta en CNPT, por eso el volumen molar de 22,4 L/mol no sirve; hay que verificar que T este en K y no en C." }
        ],
        resultado: "2,57 L de CO2 a 25 C y 1 atm"
      }
    ],
    errores_tipicos: [
      { error: "Usar la masa de caliza (12,5 g) directamente sin corregir por pureza.", como_evitar: "Corregir por pureza antes de hacer la estequiometria." },
      { error: "En b) usar 22,4 L/mol (CNPT) para 25 C.", como_evitar: "Si la temperatura no es 273 K, usar PV = nRT." }
    ]
  },
  {
    num: 8,
    nivel: "Intermedio",
    temas: ["reacciones"],
    enunciado: "En medio acido, el ion permanganato reacciona con el ion Fe^2+ segun la reaccion sin balancear: MnO4^- + Fe^2+ -> Mn^2+ + Fe^3+. a) Balancee la ecuacion por el metodo ion-electron e indique el agente oxidante. b) Calcule la masa de Fe^2+ (M = 55,85 g/mol) necesaria para reducir por completo el MnO4^- presente en 25,0 mL de solucion de KMnO4 0,0200 M.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Semirreacciones: MnO4^- -> Mn^2+ (Mn pasa de +7 a +2, gana 5 e^-) y Fe^2+ -> Fe^3+ (pierde 1 e^-).", porque: "Se identifica el cambio de numero de oxidacion en cada semirreaccion: el Mn pasa de +7 a +2 (gana 5 e^-) y el Fe pasa de +2 a +3 (pierde 1 e^-). El metodo ion-electron separa reduccion y oxidacion para poder igualar electrones en cada una, y los numeros de oxidacion indican cuantos electrones participan." },
          { paso: "Medio acido: MnO4^- + 8 H^+ + 5 e^- -> Mn^2+ + 4 H2O (O igualado con H2O, H igualado con H^+).", porque: "Se iguala el O con H2O y el H con H^+, porque el medio es acido. Despues se suman 5 e^- para igualar las cargas: a la izquierda hay +7 de carga en las especies (-1 + 8) y los 5 e^- la llevan a +2, igual que la derecha. Verificar la carga antes de seguir es la forma de detectar errores." },
          { paso: "Multiplico la semirreaccion del Fe por 5: 5 Fe^2+ -> 5 Fe^3+ + 5 e^-. Sumo: MnO4^- + 5 Fe^2+ + 8 H^+ -> Mn^2+ + 5 Fe^3+ + 4 H2O.", porque: "Se multiplica la semirreaccion del Fe por 5 para que los 5 electrones perdidos igualen a los 5 ganados, y se cancelen al sumar. La verificacion final es la carga total: -1 + 5 x 2 + 8 = +17 a la izquierda y +2 + 5 x 3 = +17 a la derecha." },
          { paso: "Agente oxidante: MnO4^- (contiene el Mn que se reduce).", porque: "Se identifica el agente oxidante como la especie que se reduce: el MnO4^- contiene el Mn que pasa de +7 a +2 y acepta electrones. Por definicion, el oxidante es el reactivo que se reduce, mientras que el Fe^2+ es el reductor porque cede electrones." }
        ],
        resultado: "MnO4^- + 5 Fe^2+ + 8 H^+ -> Mn^2+ + 5 Fe^3+ + 4 H2O; oxidante: MnO4^-"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "n(MnO4^-) = 0,0200 mol/L x 0,0250 L = 5,00 x 10^-4 mol.", porque: "Se multiplica la molaridad (0,0200 mol/L) por el volumen en litros (0,0250 L) para obtener los moles de MnO4^-, usando n = M x V. El KMnO4 aporta un MnO4^- por formula, asi que estos moles son los del permanganato que hay que reducir." },
          { paso: "Relacion 1:5: n(Fe^2+) = 5 x 5,00 x 10^-4 mol = 2,50 x 10^-3 mol.", porque: "Se aplica la relacion molar de la ecuacion balanceada: 1 mol de MnO4^- reacciona con 5 mol de Fe^2+, por eso los moles de permanganato se multiplican por 5. Usar 1:1 seria un error, porque los coeficientes incluyen los 5 electrones intercambiados." },
          { paso: "m(Fe^2+) = 2,50 x 10^-3 mol x 55,85 g/mol = 0,140 g.", porque: "Se multiplica los moles de Fe^2+ (2,50 x 10^-3 mol) por su masa molar (55,85 g/mol) para pasar a gramos. Es la masa de hierro necesaria para reducir todo el permanganato; conviene verificar el orden de magnitud contra la concentracion de partida." }
        ],
        resultado: "0,140 g de Fe^2+"
      }
    ],
    errores_tipicos: [
      { error: "Escribir la semirreaccion sin igualar cargas (olvidar los electrones o los H^+).", como_evitar: "Verificar la suma de cargas a cada lado antes de sumar las semirreacciones." },
      { error: "En b) usar relacion 1:1 entre MnO4^- y Fe^2+ ignorando los 5 electrones.", como_evitar: "Usar los coeficientes de la ecuacion balanceada (1:5)." }
    ]
  },
  {
    num: 9,
    nivel: "Intermedio",
    temas: ["reacciones"],
    enunciado: "Se neutralizan por completo 25,0 mL de H2SO4 0,100 M con una solucion de NaOH. La reaccion sin balancear es H2SO4 + NaOH -> Na2SO4 + H2O. a) Balancee la ecuacion y calcule la molaridad de la solucion de NaOH si se gastan 40,0 mL para neutralizar el acido. b) Calcule la masa de Na2SO4 (M = 142,0 g/mol) que se forma.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Balanceo: H2SO4 + 2 NaOH -> Na2SO4 + 2 H2O.", porque: "Se igualan los atomos del acido y la base: el H2SO4 tiene 2 H que deben neutralizarse con 2 OH^- de la base, asi que el coeficiente del NaOH es 2. Con esto quedan iguales Na, H, S y O a ambos lados; verificar el balanceo contando cada elemento." },
          { paso: "n(H2SO4) = 0,100 mol/L x 0,0250 L = 2,50 x 10^-3 mol; n(NaOH) = 2 x 2,50 x 10^-3 mol = 5,00 x 10^-3 mol.", porque: "Se calcula los moles de H2SO4 (0,100 mol/L x 0,0250 L) y se multiplica por 2, porque la relacion 1:2 exige 2 mol de NaOH por cada mol de acido. Los moles de base necesarios salen de la estequiometria, no de igualar volumenes." },
          { paso: "[NaOH] = 5,00 x 10^-3 mol / 0,0400 L = 0,125 M.", porque: "Se divide los moles de NaOH (5,00 x 10^-3 mol) por el volumen de base gastado (0,0400 L), porque M = n / V. El volumen del denominador es el de la base, no el de la muestra de acido." }
        ],
        resultado: "[NaOH] = 0,125 M"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "n(Na2SO4) = n(H2SO4) = 2,50 x 10^-3 mol (relacion 1:1).", porque: "Se aplica la relacion 1:1 entre H2SO4 y Na2SO4 que dan los coeficientes de la ecuacion balanceada: cada mol de acido forma un mol de sal. Esto supone que todo el acido se neutraliza, como indica el enunciado." },
          { paso: "m = 2,50 x 10^-3 mol x 142,0 g/mol = 0,355 g.", porque: "Se multiplica los moles de Na2SO4 (2,50 x 10^-3 mol) por su masa molar (142,0 g/mol) para pasar a gramos. Es la conversion final de moles a masa; conviene verificar que se use la masa molar de la sal completa." }
        ],
        resultado: "0,355 g de Na2SO4"
      }
    ],
    errores_tipicos: [
      { error: "Balancear con 1 NaOH y calcular el NaOH con relacion 1:1.", como_evitar: "El H2SO4 es diprotico: consume 2 NaOH por mol." },
      { error: "Usar 25,0 mL como volumen de NaOH en la molaridad.", como_evitar: "El volumen de la base es el gastado (40,0 mL), no el de la muestra de acido." }
    ]
  },
  {
    num: 10,
    nivel: "Intermedio",
    temas: ["reacciones"],
    enunciado: "Se quema completamente 5,80 g de butano (C4H10, M = 58,1 g/mol) en oxigeno. Sin balancear: C4H10 + O2 -> CO2 + H2O. a) Balancee la ecuacion y calcule la masa de CO2 producida. b) Calcule el volumen de aire medido en CNPT necesario para la combustion completa, si el aire contiene 21 % v/v de O2.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Balanceo: 2 C4H10 + 13 O2 -> 8 CO2 + 10 H2O (C: 8 = 8; H: 20 = 20; O: 26 = 16 + 10).", porque: "Se igualan primero C e H, que aparecen cada uno en un solo compuesto de cada lado, y al final el O2, porque el oxigeno aparece en CO2 y en H2O. Asi se evita fijar el coeficiente del O2 antes de tiempo. Verificar: C 8 = 8, H 20 = 20, O 16 + 10 = 26." },
          { paso: "n(C4H10) = 5,80 g / 58,1 g/mol = 0,0998 mol; n(CO2) = 0,0998 mol x 8/2 = 0,399 mol.", porque: "Se calcula los moles de butano (5,80 g / 58,1 g/mol) y se multiplica por 8/2 para hallar los moles de CO2, segun los coeficientes 2 y 8 de la ecuacion balanceada. Se usa el butano como reactivo de referencia porque es el dato del enunciado." },
          { paso: "m(CO2) = 0,399 mol x 44,0 g/mol = 17,6 g.", porque: "Se multiplica los moles de CO2 (0,399 mol) por su masa molar (44,0 g/mol) para pasar a gramos. Es el mismo criterio de conversion de moles a masa que en los ejercicios anteriores, aplicado al producto." }
        ],
        resultado: "17,6 g de CO2"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "n(O2) = 0,0998 mol x 13/2 = 0,649 mol de O2.", porque: "Se multiplica los moles de butano (0,0998 mol) por 13/2 para obtener los moles de O2, porque la ecuacion balanceada indica 13 O2 por cada 2 butanos. Cada mol de butano necesita 6,5 mol de O2 para la combustion completa." },
          { paso: "V(O2) = 0,649 mol x 22,4 L/mol = 14,5 L en CNPT; V(aire) = 14,5 L / 0,21 = 69,2 L.", porque: "Se calcula el volumen de O2 con 22,4 L/mol (CNPT) y luego se divide por 0,21, porque el O2 es solo el 21 % del aire en volumen. La fraccion volumetrica permite pasar del volumen de oxigeno al volumen de aire; el resultado de aire debe ser mayor que el de O2." }
        ],
        resultado: "69,2 L de aire en CNPT"
      }
    ],
    errores_tipicos: [
      { error: "Tomar el O2 necesario como 1 mol por mol de butano en vez de 6,5.", como_evitar: "Leer el coeficiente de O2 de la ecuacion balanceada (13 para 2 butanos)." },
      { error: "Calcular el volumen de aire como si fuera solo O2 (sin dividir por 0,21).", como_evitar: "El O2 es solo el 21 % del aire; el volumen de aire siempre es mayor." }
    ]
  },
  {
    num: 11,
    nivel: "Avanzado",
    temas: ["reacciones"],
    enunciado: "Se tuesta 30,0 g de un mineral que contiene 85,0 % en masa de ZnS, con oxigeno en exceso. La reaccion sin balancear es ZnS(s) + O2(g) -> ZnO(s) + SO2(g). Se obtienen 17,5 g de ZnO. a) Balancee la ecuacion y calcule la masa de ZnO que se obtendria con rendimiento de 100 %. b) Calcule el rendimiento de la reaccion. c) Justifique por que los calculos se hacen con la masa de ZnS puro y no con los 30,0 g de mineral.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Balanceo: 2 ZnS + 3 O2 -> 2 ZnO + 2 SO2 (Zn y S: 2 = 2; O: 6 = 2 + 4).", porque: "Se igualan primero Zn y S, que aparecen en un solo reactivo y un solo producto cada uno, y luego el O2, porque el oxigeno aparece en ZnO y en SO2. Verificar: Zn 2 = 2, S 2 = 2 y O 6 = 2 + 4." },
          { paso: "m(ZnS puro) = 0,850 x 30,0 g = 25,5 g; n(ZnS) = 25,5 g / 97,45 g/mol = 0,2617 mol.", porque: "Se multiplica la masa de mineral (30,0 g) por la pureza (0,850) para hallar la masa de ZnS puro, y luego se pasa a moles con su masa molar (97,45 g/mol). Solo el ZnS reacciona y las impurezas no forman ZnO, por lo que la masa debe corregirse antes de usar la estequiometria." },
          { paso: "n(ZnO teorico) = n(ZnS) = 0,2617 mol (relacion 2:2); m = 0,2617 mol x 81,38 g/mol = 21,3 g.", porque: "Se aplica la relacion 2:2 (1:1) de la ecuacion para hallar los moles de ZnO teoricos y luego se multiplica por su masa molar (81,38 g/mol). Este valor es el producto teorico, es decir lo que se obtendria con rendimiento de 100 %, y sirve de referencia para el apartado b)." }
        ],
        resultado: "2 ZnS + 3 O2 -> 2 ZnO + 2 SO2; 21,3 g de ZnO teorico"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Rendimiento = 17,5 g / 21,3 g x 100 = 82,2 %.", porque: "Se divide la masa obtenida experimentalmente (17,5 g) por la masa teorica (21,3 g) y se multiplica por 100. El rendimiento compara lo que se obtuvo en la practica con lo que predice la estequiometria, y se expresa en porcentaje." }
        ],
        resultado: "82,2 %"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "Los 30,0 g incluyen 15 % de impurezas que no reaccionan ni forman ZnO; usar esa masa sobrestimaria el producto teorico.", porque: "Se explica que los 30,0 g incluyen un 15 % de impurezas que no reaccionan ni forman ZnO, por lo que usar esa masa sobrestimaria el producto teorico. La estequiometria solo puede aplicarse a la sustancia que reacciona, y por eso el calculo se hace con el ZnS puro." }
        ],
        resultado: "Por las impurezas (15 %) que no reaccionan"
      }
    ],
    errores_tipicos: [
      { error: "Usar la masa total del mineral (30,0 g) como ZnS y obtener 69,9 % de rendimiento.", como_evitar: "Corregir primero por pureza; luego calcular el rendimiento con el producto teorico correcto." },
      { error: "Confundir pureza con rendimiento: ambos son porcentajes, pero corrigen cosas distintas.", como_evitar: "La pureza corrige la masa de reactivo; el rendimiento corrige el producto obtenido." }
    ]
  },
  {
    num: 12,
    nivel: "Avanzado",
    temas: ["reacciones"],
    enunciado: "En medio basico (NaOH), el ion permanganato MnO4^- se reduce a MnO2 mientras el ion sulfito SO3^2- se oxida a SO4^2-. Sin balancear: MnO4^- + SO3^2- -> MnO2(s) + SO4^2-. a) Balancee la ecuacion por el metodo ion-electron. b) Calcule el volumen de solucion de KMnO4 0,0200 M necesario para oxidar por completo 0,300 g de Na2SO3 (M = 126,0 g/mol).",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Semirreacciones: reduccion MnO4^- -> MnO2 (Mn pasa de +7 a +4, gana 3 e^-); oxidacion SO3^2- -> SO4^2- (S pasa de +4 a +6, pierde 2 e^-).", porque: "Se determina el cambio de numero de oxidacion: en la reduccion el Mn pasa de +7 a +4 (gana 3 e^-), y en la oxidacion el S pasa de +4 a +6 (pierde 2 e^-). Los numeros de oxidacion indican cuantos electrones se transfieren en cada semirreaccion y son el punto de partida para igualarlos." },
          { paso: "Medio basico: reduccion MnO4^- + 2 H2O + 3 e^- -> MnO2 + 4 OH^-; oxidacion SO3^2- + 2 OH^- -> SO4^2- + H2O + 2 e^-.", porque: "Se usa el medio basico: el oxigeno se iguala con H2O y el hidrogeno con OH^-, y no con H^+ como en medio acido. Por eso la reduccion consume 2 H2O y produce 4 OH^-, y la oxidacion consume 2 OH^-; verificar que el medio coincida con el enunciado." },
          { paso: "Igualo electrones (2 x reduccion + 3 x oxidacion, 6 e^- cada uno) y sumo; simplifico las H2O y los OH^-: 2 MnO4^- + 3 SO3^2- + H2O -> 2 MnO2 + 3 SO4^2- + 2 OH^-.", porque: "Se multiplica la reduccion por 2 y la oxidacion por 3 para que cada una tenga 6 e^-, y luego se suman. Las H2O y los OH^- que aparecen en ambos lados se cancelan, dejando 1 H2O a la izquierda y 2 OH^- a la derecha; los electrones ganados quedan iguales a los perdidos." }
        ],
        resultado: "2 MnO4^- + 3 SO3^2- + H2O -> 2 MnO2(s) + 3 SO4^2- + 2 OH^-"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "n(SO3^2-) = 0,300 g / 126,0 g/mol = 2,38 x 10^-3 mol.", porque: "Se calcula los moles de SO3^2- dividiendo la masa de Na2SO3 (0,300 g) por su masa molar (126,0 g/mol). Como cada formula de Na2SO3 aporta 1 SO3^2-, esos moles son los del ion sulfito que se oxida." },
          { paso: "Relacion 2:3: n(MnO4^-) = (2/3) x 2,38 x 10^-3 mol = 1,59 x 10^-3 mol.", porque: "Se aplica la relacion de la ecuacion balanceada: 2 mol de MnO4^- reaccionan con 3 mol de SO3^2-, por lo que los moles de permanganato son (2/3) de los de sulfito. La proporcion sale de los coeficientes y no de una relacion 1:1." },
          { paso: "V = 1,59 x 10^-3 mol / 0,0200 mol/L = 0,0794 L = 79,4 mL.", porque: "Se despeja el volumen de la solucion como V = n / M, a partir de M = n / V. Se obtiene el volumen que contiene los moles de permanganato necesarios; verificar que el resultado en L se pase correctamente a mL." }
        ],
        resultado: "79,4 mL de KMnO4 0,0200 M"
      }
    ],
    errores_tipicos: [
      { error: "Balancear con H^+ y OH^- de medio acido cuando el enunciado dice medio basico.", como_evitar: "Identificar el medio antes de balancear y usar H2O/OH^- en medio basico." },
      { error: "En b) usar relacion 1:1 entre MnO4^- y SO3^2-.", como_evitar: "Tomar los coeficientes de la ecuacion balanceada (2:3)." }
    ]
  },
  {
    num: 13,
    nivel: "Avanzado",
    temas: ["reacciones"],
    enunciado: "Se hacen reaccionar 15,0 g de carbonato de sodio impuro (pureza 92,0 %) con 200 mL de solucion de HCl 1,50 M, segun Na2CO3 + HCl -> NaCl + CO2 + H2O (sin balancear). a) Balancee la ecuacion, determine el reactivo limitante y calcule los moles de HCl que quedan en exceso. b) Calcule el volumen de CO2 medido a 25 C y 1 atm si el rendimiento de la reaccion es 90,0 %. c) Suponiendo reaccion completa (rendimiento 100 %) y volumen final de 200 mL, calcule la concentracion de Na^+ en la solucion final.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Balanceo: Na2CO3 + 2 HCl -> 2 NaCl + CO2 + H2O.", porque: "Se iguala primero el sodio: el Na2CO3 aporta 2 Na que pasan a 2 NaCl, lo que fija 2 HCl. El H del acido se reparte en el CO2 y el H2O, y el balanceo se verifica contando C, O, H, Na y Cl a ambos lados." },
          { paso: "n(Na2CO3) = 0,920 x 15,0 g / 105,99 g/mol = 0,1302 mol; n(HCl) = 1,50 mol/L x 0,200 L = 0,300 mol.", porque: "Se corrige la masa de carbonato por pureza (0,920 x 15,0 g) y se divide por su masa molar (105,99 g/mol). Los moles de HCl se calculan como molaridad por litros (1,50 mol/L x 0,200 L); primero se corrige por pureza porque solo el carbonato puro reacciona." },
          { paso: "HCl necesario = 2 x 0,1302 mol = 0,2604 mol, menor que 0,300 mol disponibles: el Na2CO3 es el limitante y el HCl queda en exceso = 0,300 - 0,2604 = 0,0396 mol.", porque: "Se calcula el HCl necesario (2 x 0,1302 mol = 0,2604 mol), se compara con los 0,300 mol disponibles y se identifica el limitante: el Na2CO3, porque se agota primero. El exceso de HCl es lo disponible menos lo consumido por el limitante." }
        ],
        resultado: "Limitante: Na2CO3; HCl en exceso: 0,0396 mol"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "n(CO2) teorico = 0,1302 mol (relacion 1:1 con el Na2CO3); con rendimiento 90,0 %: n = 0,900 x 0,1302 = 0,117 mol.", porque: "Se calcula el CO2 teorico con la relacion 1:1 respecto del Na2CO3 (0,1302 mol) y luego se aplica el rendimiento de 90,0 %: 0,900 x 0,1302 = 0,117 mol. El rendimiento corrige el producto teorico calculado a partir del limitante." },
          { paso: "V = nRT / P = 0,117 mol x 0,0821 L atm/(mol K) x 298 K / 1 atm = 2,87 L.", porque: "Se usa la ecuacion de los gases ideales V = nRT / P con T en kelvin (298 K), porque a 25 C el volumen no corresponde a CNPT. Se toma P = 1 atm y R = 0,0821 L atm/(mol K); verificar que las unidades de R sean coherentes con la presion en atm y el volumen en L." }
        ],
        resultado: "2,87 L de CO2 a 25 C y 1 atm"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "Na^+ total = 2 x 0,1302 mol = 0,2604 mol (cada Na2CO3 aporta 2 Na^+ y todo el sodio pasa a NaCl con rendimiento 100 %).", porque: "Se calcula el Na^+ total multiplicando los moles de Na2CO3 por 2, porque cada formula aporta 2 Na^+ y todo el sodio pasa a NaCl con rendimiento de 100 %. Como no hay perdidas, el sodio se conserva en los productos y su cantidad no cambia." },
          { paso: "[Na^+] = 0,2604 mol / 0,200 L = 1,30 M.", porque: "Se divide los moles de Na^+ (0,2604 mol) por el volumen final de 0,200 L para obtener la concentracion. La concentracion de ion es moles sobre litros de la solucion final, igual que en los ejemplos anteriores." }
        ],
        resultado: "[Na^+] = 1,30 M"
      }
    ],
    errores_tipicos: [
      { error: "En a) calcular el limitante usando 15,0 g sin corregir por pureza.", como_evitar: "Corregir la masa por pureza antes de pasar a moles." },
      { error: "En b) calcular el CO2 con los moles de HCl (0,300 mol) en vez de con el limitante.", como_evitar: "El producto siempre se calcula con el reactivo limitante." }
    ]
  },
  {
    num: 14,
    nivel: "Avanzado",
    temas: ["reacciones"],
    enunciado: "Se hacen reaccionar 2,50 g de cobre metalico con 40,0 mL de solucion de HNO3 6,00 M, segun Cu + HNO3 -> Cu(NO3)2 + NO + H2O (sin balancear). a) Balancee la ecuacion, indique el reactivo limitante y calcule los moles de HNO3 que se consumen. b) Calcule el volumen de NO medido en CNPT si el rendimiento de la reaccion es 85,0 %.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Balanceo (ion-electron, medio acido): 3 Cu + 8 HNO3 -> 3 Cu(NO3)2 + 2 NO + 4 H2O.", porque: "Se igualan los electrones: el Cu cede 2 e^- por atomo (0 a +2) y el N gana 3 e^- por atomo (+5 a +2). Con 3 Cu (6 e^- cedidos) y 2 NO (6 e^- ganados) quedan iguales; luego se ajustan H y O con HNO3 y H2O. Verificar contando Cu, N, H y O." },
          { paso: "n(Cu) = 2,50 g / 63,55 g/mol = 0,0393 mol; n(HNO3) disponible = 6,00 mol/L x 0,0400 L = 0,240 mol.", porque: "Se pasan ambos reactivos a moles: el Cu (2,50 g / 63,55 g/mol) y el HNO3 disponible (6,00 mol/L x 0,0400 L). La relacion de la ecuacion es entre moles, asi que la comparacion solo tiene sentido en esas unidades." },
          { paso: "HNO3 necesario = (8/3) x 0,0393 mol = 0,105 mol, menor que 0,240 mol: el Cu es el limitante y se consumen 0,105 mol de HNO3.", porque: "Se calcula el HNO3 necesario como (8/3) x 0,0393 mol = 0,105 mol, usando la relacion 3:8 de la ecuacion, y se compara con los 0,240 mol disponibles. El cobre es el limitante, y el HNO3 consumido sale de la misma relacion, no de los moles disponibles." }
        ],
        resultado: "3 Cu + 8 HNO3 -> 3 Cu(NO3)2 + 2 NO + 4 H2O; limitante: Cu; HNO3 consumido: 0,105 mol"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "n(NO) teorico = (2/3) x 0,0393 mol = 0,0262 mol; V teorico = 0,0262 mol x 22,4 L/mol = 0,587 L en CNPT.", porque: "Se calcula los moles de NO teoricos con la relacion 2:3 respecto del Cu: (2/3) x 0,0393 mol = 0,0262 mol. Luego se multiplica por 22,4 L/mol porque en CNPT un mol de gas ocupa ese volumen; antes conviene confirmar que el gas esta en CNPT." },
          { paso: "V real = 0,850 x 0,587 L = 0,499 L.", porque: "Se multiplica el volumen teorico (0,587 L) por el rendimiento (0,850) para obtener el volumen realmente producido. El rendimiento se aplica al producto teorico, igual que en los ejercicios anteriores de la seccion." }
        ],
        resultado: "0,499 L de NO en CNPT"
      }
    ],
    errores_tipicos: [
      { error: "Balancear sin revisar los electrones (no igualar el cambio de numero de oxidacion del Cu y del N).", como_evitar: "Contar los electrones que cede el metal y que gana el N antes de igualar." },
      { error: "Elegir como limitante al acido por tener mas moles disponibles, sin usar la relacion estequiometrica.", como_evitar: "Comparar moles disponibles con moles necesarios segun la ecuacion balanceada." }
    ]
  },
  {
    num: 15,
    nivel: "Avanzado",
    temas: ["reacciones"],
    enunciado: "Se mezclan 50,0 mL de solucion de AgNO3 0,120 M con 80,0 mL de solucion de NaCl 0,0800 M, y se forma un precipitado de AgCl segun AgNO3 + NaCl -> AgCl(s) + NaNO3 (sin balancear). a) Calcule la masa de AgCl (M = 143,3 g/mol) precipitado, suponiendo precipitacion completa. b) Calcule la concentracion de Cl^- en la solucion final, suponiendo volumenes aditivos y despreciando la solubilidad del AgCl. c) Clasifique la reaccion e indique cuales son los iones espectadores.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "n(AgNO3) = 0,120 mol/L x 0,0500 L = 6,00 x 10^-3 mol; n(NaCl) = 0,0800 mol/L x 0,0800 L = 6,40 x 10^-3 mol.", porque: "Se calcula los moles de AgNO3 (0,120 mol/L x 0,0500 L = 6,00 x 10^-3 mol) y los de NaCl (0,0800 mol/L x 0,0800 L = 6,40 x 10^-3 mol). Se comparan en moles porque cada solucion tiene un volumen distinto y la reaccion es 1:1." },
          { paso: "Relacion 1:1: el AgNO3 (6,00 x 10^-3 mol) es el limitante; quedan 0,40 x 10^-3 mol de NaCl en exceso.", porque: "Se compara las cantidades con la relacion 1:1: hay 6,00 x 10^-3 mol de Ag^+ y 6,40 x 10^-3 mol de Cl^-, asi que el AgNO3 se agota primero y es el limitante. El NaCl sobrante es la diferencia entre lo disponible y lo consumido (0,40 x 10^-3 mol)." },
          { paso: "m(AgCl) = 6,00 x 10^-3 mol x 143,3 g/mol = 0,860 g.", porque: "Se multiplica los moles de AgCl (6,00 x 10^-3 mol, dados por el limitante) por su masa molar (143,3 g/mol) para pasar a gramos. El precipitado se calcula con el limitante porque es el que determina la cantidad maxima que puede formarse." }
        ],
        resultado: "0,860 g de AgCl"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "V total = 50,0 mL + 80,0 mL = 130 mL = 0,130 L.", porque: "Se suma los volumenes de las dos soluciones (50,0 mL + 80,0 mL = 130 mL) y se pasa a litros, porque la concentracion final se calcula sobre el volumen total de la mezcla. Se supone volumenes aditivos, como indica el enunciado." },
          { paso: "[Cl^-] = 0,40 x 10^-3 mol / 0,130 L = 3,08 x 10^-3 M.", porque: "Se divide el NaCl en exceso (0,40 x 10^-3 mol) por el volumen total (0,130 L). El Cl^- que estaba en el AgCl precipitado ya no esta en la solucion, asi que solo cuenta el Cl^- que sobro; despreciar la solubilidad del AgCl es lo que permite este supuesto." }
        ],
        resultado: "[Cl^-] = 3,08 x 10^-3 M"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "Clasificacion: reaccion de precipitacion (doble desplazamiento) con formacion de un solido insoluble, AgCl.", porque: "Se clasifica la reaccion por su resultado: dos soluciones de solutos solubles dan un solido insoluble (AgCl). Ese es el criterio de una reaccion de precipitacion, que es un caso de doble desplazamiento; no se mira el color ni la presencia de gas." },
          { paso: "Iones espectadores: Na^+ y NO3^- (aparecen sin cambio en ambos lados de la ecuacion ionica neta).", porque: "Se identifican los iones espectadores como los que aparecen sin cambio en ambos lados de la ecuacion ionica neta: Na^+ y NO3^- no participan en la formacion del solido. Solo Ag^+ y Cl^- forman el AgCl, y los demas iones acompanan la reaccion sin reaccionar." }
        ],
        resultado: "Precipitacion; espectadores Na^+ y NO3^-"
      }
    ],
    errores_tipicos: [
      { error: "Tomar como limitante al NaCl por tener mas moles (6,40 x 10^-3 mol), sin usar la relacion 1:1.", como_evitar: "Comparar moles dividiendo por la relacion estequiometrica; el de mayor cantidad no siempre es el que sobra." },
      { error: "En b) usar la concentracion inicial de NaCl (0,0800 M) en vez de la del exceso en la mezcla.", como_evitar: "Calcular los moles que quedan despues de la reaccion y dividir por el volumen total." }
    ]
  },
  {
    num: 16,
    nivel: "Tipo parcial",
    temas: ["reacciones", "gases"],
    enunciado: "En una planta de fertilizantes se hace reaccionar amoniaco gaseoso con una solucion de acido sulfurico para producir sulfato de amonio, segun la reaccion sin balancear NH3(g) + H2SO4(ac) -> (NH4)2SO4(ac). Se hacen reaccionar 50,0 L de NH3 medidos a 25 C y 1,00 atm con 500 mL de H2SO4 0,800 M. a) Escriba la ecuacion balanceada y clasifique la reaccion. b) Determine el reactivo limitante y calcule los moles de NH3 que quedan en exceso. c) Calcule la masa de (NH4)2SO4 que se obtiene si el rendimiento de la reaccion es 92,0 %. d) Justifique si la solucion final de sulfato de amonio sera acida, basica o neutra.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Balanceo: 2 NH3(g) + H2SO4(ac) -> (NH4)2SO4(ac). Verificacion: N 2 = 2; H 6 + 2 = 8 = 8 en (NH4)2SO4; S 1 = 1; O 4 = 4.", porque: "Se igualan los atomos: el H2SO4 aporta 2 H^+ que neutralizan 2 NH3, por lo que el coeficiente del NH3 es 2. Verificar el balanceo contando N (2 = 2), H (6 + 2 = 8 en (NH4)2SO4), S (1 = 1) y O (4 = 4)." },
          { paso: "Clasificacion: reaccion de neutralizacion (acido-base): el H2SO4 transfiere H^+ al NH3, sin gases ni precipitados como productos.", porque: "Se identifica el tipo de reaccion: el H2SO4 cede H^+ al NH3, que actua como base de Bronsted, formando el ion amonio. Es una neutralizacion acido-base; no hay gases ni precipitados entre los productos, y el unico producto es la sal disuelta." }
        ],
        resultado: "2 NH3(g) + H2SO4(ac) -> (NH4)2SO4(ac); neutralizacion"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "n(NH3) = P V / (R T) = 1,00 atm x 50,0 L / (0,0821 L atm/(mol K) x 298 K) = 2,04 mol.", porque: "Se despeja los moles de NH3 de la ecuacion de los gases ideales, n = PV / (RT), con T = 298 K. El NH3 esta como gas fuera de CNPT, asi que no se puede usar 22,4 L/mol; verificar que el volumen este en L y la temperatura en K." },
          { paso: "n(H2SO4) = 0,800 mol/L x 0,500 L = 0,400 mol; NH3 necesario = 2 x 0,400 = 0,800 mol.", porque: "Se calcula los moles de H2SO4 (0,800 mol/L x 0,500 L = 0,400 mol) y se multiplica por 2 para hallar el NH3 necesario, usando la relacion 2:1 del balanceo del apartado a). Esto indica cuanto amoniaco se requiere para consumir todo el acido." },
          { paso: "Como 2,04 mol de NH3 son mas que 0,800 mol necesarios, el H2SO4 es el limitante. NH3 en exceso = 2,04 - 0,800 = 1,24 mol.", porque: "Se compara el NH3 disponible (2,04 mol) con el necesario (0,800 mol) y se identifica el limitante: el H2SO4, porque se agota primero. El NH3 en exceso es lo que sobra tras consumir 0,800 mol, es decir 2,04 - 0,800 = 1,24 mol." }
        ],
        resultado: "Limitante: H2SO4; NH3 en exceso: 1,24 mol"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "n((NH4)2SO4) teorico = 0,400 mol (relacion 1:1 con el H2SO4); m teorica = 0,400 mol x 132,1 g/mol = 52,8 g.", porque: "Se calcula el producto teorico con los moles de H2SO4 (0,400 mol, relacion 1:1 con la sal) y se multiplica por la masa molar del (NH4)2SO4 (132,1 g/mol). El producto siempre sale del limitante, que aqui es el acido." },
          { paso: "m real = 0,920 x 52,8 g = 48,6 g.", porque: "Se multiplica la masa teorica (52,8 g) por el rendimiento de 0,920 para obtener la masa real de sal. El rendimiento corrige el producto teorico, no los reactivos en exceso." }
        ],
        resultado: "48,6 g de (NH4)2SO4"
      },
      {
        parte: "d)",
        pasos: [
          { paso: "El NH4^+ es un acido debil (acido conjugado del NH3, base debil): NH4^+ + H2O <-> NH3 + H3O^+.", porque: "Se analiza el caracter acido-base de los iones de la sal: el NH4^+ es el acido conjugado de una base debil (NH3), por eso reacciona con el agua y libera H3O^+. Los cationes de bases debiles se hidrolizan y bajan el pH; el analisis se hace sobre cada ion por separado." },
          { paso: "El SO4^2- es una base muy debil y su efecto sobre el pH es despreciable frente al del NH4^+. La solucion es acida (pH < 7).", porque: "Se compara los dos iones: el SO4^2- es una base muy debil y su hidrolisis es despreciable frente a la del NH4^+, por lo que domina el caracter acido. La solucion final es acida, con pH menor que 7; el ion que mas se hidroliza decide el pH de la sal." }
        ],
        resultado: "Solucion acida (pH < 7)"
      }
    ],
    errores_tipicos: [
      { error: "En b) decidir el limitante comparando los 50,0 L de gas con los moles de acido, sin convertir el gas a moles.", como_evitar: "Convertir el NH3 a moles con PV = nRT antes de comparar." },
      { error: "En d) decir que la solucion es neutra porque se trata de una sal.", como_evitar: "Una sal no es necesariamente neutra: depende de la fuerza del acido y la base de origen." },
      { error: "En c) aplicar el rendimiento al NH3 en exceso o no aplicarlo.", como_evitar: "El rendimiento se aplica al producto obtenido a partir del limitante." }
    ]
  }
];
