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
          { paso: "n = 8,50 g / 58,5 g/mol = 0,1453 mol de NaCl.", porque: "Para pasar gramos a moles se divide la masa por la masa molar." },
          { paso: "V = 250 mL = 0,250 L.", porque: "La molaridad se expresa en mol por litro de solucion, asi que el volumen debe pasarse a litros." },
          { paso: "M = 0,1453 mol / 0,250 L = 0,581 M.", porque: "La molaridad es moles de soluto sobre litros de solucion (M = n / V)." }
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
          { paso: "m_solucion = m_soluto + m_solvente = 12,0 g + 188 g = 200 g.", porque: "La masa de la solucion incluye al soluto y al solvente, no solo al solvente." },
          { paso: "% m/m = (12,0 g / 200 g) x 100 = 6,00 %.", porque: "El % m/m es la masa de soluto por cada 100 g de solucion, por definicion." }
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
          { paso: "Moles de soluto: n = 0,400 mol/L x 0,0250 L = 0,0100 mol de NaOH.", porque: "En una dilucion se agrega agua pero no se agrega ni se quita soluto, asi que los moles se conservan." },
          { paso: "Concentracion final: M_d = n / V_final = 0,0100 mol / 0,200 L = 0,0500 M.", porque: "La concentracion de la solucion diluida se calcula sobre el volumen final total, no sobre los 25,0 mL originales." },
          { paso: "Control con C_c x V_c = C_d x V_d: 0,400 x 25,0 = C_d x 200, de donde C_d = 0,0500 M.", porque: "La ecuacion de dilucion es la conservacion de moles expresada en concentraciones; sirve para verificar el resultado." }
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
          { paso: "Moles de CaCl2: n = 0,250 mol/L x 0,500 L = 0,125 mol.", porque: "La molaridad relaciona moles de soluto con litros de solucion: n = M x V." },
          { paso: "Disociacion completa: CaCl2 -> Ca^2+ + 2 Cl^-. Por cada mol de CaCl2 se forman 1 mol de Ca^2+ y 2 mol de Cl^-.", porque: "Es una sal soluble que se disocia totalmente; los subindices de la formula dan la proporcion de iones." },
          { paso: "[Ca^2+] = 0,250 M y [Cl^-] = 2 x 0,250 M = 0,500 M.", porque: "Los iones estan en el mismo volumen que la solucion, asi que su concentracion es moles de cada ion por litro." }
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
          { paso: "% m/V = 5,00 g de soluto cada 100 mL de solucion.", porque: "Es la definicion de % m/V: gramos de soluto por 100 mL de solucion." },
          { paso: "Factor de escala: 250 mL / 100 mL = 2,50.", porque: "Se escala la relacion de referencia al volumen pedido, y el factor es adimensional." },
          { paso: "m = 5,00 g x 2,50 = 12,5 g de glucosa.", porque: "Para una concentracion fija, la masa de soluto es proporcional al volumen de solucion." }
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
          { paso: "Base de calculo 1,00 L: m_solucion = 1000 mL x 1,18 g/mL = 1180 g.", porque: "La densidad relaciona volumen y masa; hace falta para pasar la masa de solucion, porque el % es en masa." },
          { paso: "m_HCl = 0,350 x 1180 g = 413,0 g; n = 413,0 g / 36,5 g/mol = 11,32 mol.", porque: "El % m/m indica la fraccion de la masa de solucion que es soluto; luego la masa de soluto se pasa a moles." },
          { paso: "M = 11,32 mol / 1,00 L = 11,3 M.", porque: "La molaridad son moles de soluto por litro de solucion, y la base era 1,00 L." }
        ],
        resultado: "11,3 M"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "n(HCl) necesarios = 0,100 mol/L x 0,500 L = 0,0500 mol.", porque: "La cantidad de soluto se conserva al preparar la solucion diluida." },
          { paso: "V = n / M_comercial = 0,0500 mol / 11,32 mol/L = 4,42 mL.", porque: "El volumen de concentrado que aporta esos moles se obtiene dividiendo n por la molaridad del concentrado." }
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
          { paso: "n(NaOH) = 15,0 g / 40,0 g/mol = 0,375 mol.", porque: "Masa dividida masa molar da moles de soluto." },
          { paso: "Solvente: 250 g = 0,250 kg de agua.", porque: "La molalidad usa kilogramos de solvente, no litros de solucion ni la masa total." },
          { paso: "m = 0,375 mol / 0,250 kg = 1,50 mol/kg.", porque: "La molalidad (m minuscula) es mol de soluto por kg de solvente." }
        ],
        resultado: "1,50 mol/kg"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "m_solucion = 15,0 g + 250 g = 265 g.", porque: "La masa de la solucion es la suma de soluto y solvente." },
          { paso: "% m/m = 15,0 g / 265 g x 100 = 5,66 %.", porque: "El % m/m usa la masa total de la solucion en el denominador." }
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
          { paso: "Masa maxima disuelta: 31,6 g / 100 g de agua x 200 g de agua = 63,2 g de A.", porque: "La solubilidad se da por cada 100 g de solvente; con 200 g de agua se escala la relacion." },
          { paso: "Sin disolver: 80,0 g - 63,2 g = 16,8 g.", porque: "Lo que supera la solubilidad queda como solido en equilibrio con la solucion saturada." },
          { paso: "Supuesto: la sal y el agua llegan al equilibrio a 20 C, y el solido no disuelto esta en equilibrio con la solucion saturada.", porque: "La solubilidad es un valor de equilibrio; solo tiene sentido si hay solido presente." }
        ],
        resultado: "16,8 g sin disolver"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "m_solucion = 63,2 g de A + 200 g de agua = 263,2 g.", porque: "Solo entra en la solucion la masa disuelta; el solido sin disolver no forma parte de ella." },
          { paso: "% m/m = 63,2 g / 263,2 g x 100 = 24,0 %.", porque: "La solucion obtenida es saturada, asi que tiene la maxima cantidad de soluto posible a esa temperatura." }
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
          { paso: "k = S / P = 1,20 x 10^-3 mol/L / 1,00 atm = 1,20 x 10^-3 mol/(L x atm).", porque: "La ley de Henry es una proporcionalidad directa entre la solubilidad y la presion parcial del gas." },
          { paso: "S = k x P = 1,20 x 10^-3 x 3,00 = 3,60 x 10^-3 mol/L.", porque: "Con la constante de Henry, la nueva solubilidad se obtiene al multiplicar por la nueva presion, a T constante." }
        ],
        resultado: "3,60 x 10^-3 mol/L"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "n = 3,60 x 10^-3 mol/L x 0,500 L = 1,80 x 10^-3 mol.", porque: "La solubilidad es moles por litro; multiplicar por el volumen da los moles totales disueltos." },
          { paso: "m = 1,80 x 10^-3 mol x 44,0 g/mol = 0,0792 g.", porque: "Para pasar moles a gramos se multiplica por la masa molar." }
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
          { paso: "Cl^- del NaCl: 0,20 mol/L x 0,100 L = 0,0200 mol (NaCl se disocia 1:1).", porque: "Cada mol de NaCl libera 1 mol de Cl^-; hay que contar los iones que aporta cada soluto." },
          { paso: "Cl^- del CaCl2: 0,10 mol/L x 0,100 L = 0,0100 mol de CaCl2, que aportan 2 x 0,0100 = 0,0200 mol de Cl^-.", porque: "Cada formula de CaCl2 libera 2 Cl^-." },
          { paso: "Volumen final 0,200 L; [Cl^-] = (0,0200 + 0,0200) mol / 0,200 L = 0,200 M.", porque: "En una mezcla, la concentracion final es el total de moles del ion sobre el volumen total." }
        ],
        resultado: "[Cl^-] = 0,200 M"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "[Na^+] = 0,0200 mol / 0,200 L = 0,100 M.", porque: "El Na^+ proviene solo del NaCl, en proporcion 1:1." },
          { paso: "[Ca^2+] = 0,0100 mol / 0,200 L = 0,0500 M.", porque: "El Ca^2+ proviene solo del CaCl2 y se reparte en el mismo volumen final." }
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
          { paso: "Base de calculo 1,00 L: m_solucion = 1000 mL x 1,84 g/mL = 1840 g; m_H2SO4 = 0,960 x 1840 g = 1766,4 g.", porque: "La densidad convierte el volumen en masa, y el % m/m se aplica a esa masa." },
          { paso: "n = 1766,4 g / 98,08 g/mol = 18,0 mol; M = 18,0 mol / 1,00 L = 18,0 M.", porque: "La molaridad son moles de soluto por litro de solucion." }
        ],
        resultado: "18,0 M"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "eq = 1766,4 g / 49,04 g/eq = 36,0 eq; N = 36,0 eq / 1,00 L = 36,0 N.", porque: "La normalidad cuenta equivalentes; la masa equivalente es la masa molar dividida por 2 porque el H2SO4 libera 2 H^+." },
          { paso: "N = 2 x M, porque cada mol de H2SO4 aporta 2 equivalentes en la neutralizacion.", porque: "Por eso la normalidad de un acido diprotico es el doble de su molaridad." }
        ],
        resultado: "36,0 N (el doble de la molaridad)"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "n(H2SO4) necesarios = 0,100 mol/L x 0,250 L = 0,0250 mol.", porque: "La cantidad de acido se conserva al diluir; se calcula primero lo que hace falta en la solucion diluida." },
          { paso: "V = 0,0250 mol / 18,0 mol/L = 1,39 x 10^-3 L = 1,39 mL.", porque: "El volumen de concentrado que aporta esos moles se obtiene dividiendo por su molaridad; el resto se completa con agua." }
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
          { paso: "Disuelta a 40 C: 62,0 g / 100 g de agua x 500 g de agua = 310 g de X.", porque: "La solubilidad es por 100 g de agua, y el dato del enunciado es 500 g de agua (no de solucion)." },
          { paso: "Disuelta a 10 C: 25,0 g / 100 g de agua x 500 g de agua = 125 g de X.", porque: "A la temperatura final la solucion solo puede retener esta cantidad." },
          { paso: "Cristalizan: 310 g - 125 g = 185 g de X.", porque: "El exceso que no cabe en la solucion fria precipita como solido." },
          { paso: "Supuesto: no se evapora agua y el solido que cristaliza es X anhidro.", porque: "Sin esos supuestos el balance de masa de X no se cierra." }
        ],
        resultado: "185 g de X cristalizan"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Al bajar la temperatura disminuye la solubilidad: la solubilidad de X aumenta con la temperatura.", porque: "Es el comportamiento observado entre 10 C y 40 C." },
          { paso: "Si la solubilidad aumenta con T, el proceso de disolucion absorbe calor: es endotermico (Delta H_disolucion > 0).", porque: "Un aumento de T favorece el sentido que absorbe calor (Le Chatelier), que es la disolucion." }
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
          { paso: "ppm = mg de soluto por kg de solucion: 2,50 mg/kg x 0,500 kg = 1,25 mg de Fe^3+.", porque: "ppm es una relacion masa/masa; se multiplica la concentracion por la masa de muestra en kg, no en g." }
        ],
        resultado: "1,25 mg de Fe^3+"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Supuesto: densidad 1,00 g/mL; entonces 1 kg de muestra ocupa 1,00 L y 2,50 mg/kg = 2,50 mg/L = 2,50 x 10^-3 g/L.", porque: "Para pasar de masa a volumen hace falta la densidad; en agua diluida es cercana a 1 g/mL." },
          { paso: "[Fe^3+] = 2,50 x 10^-3 g/L / 55,85 g/mol = 4,48 x 10^-5 M.", porque: "Se convierte gramos por litro a moles por litro dividiendo por la masa molar (mg pasados a g)." }
        ],
        resultado: "4,48 x 10^-5 M"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "ppm = mg/kg de solucion; mg/L = mg por litro de solucion. Con densidad cercana a 1 g/mL, 1 kg de solucion ocupa aproximadamente 1 L.", porque: "Si los kg y los litros son equivalentes, las unidades coinciden numericamente." }
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
          { paso: "n(Na2CO3) = 0,200 mol/L x 0,250 L = 0,0500 mol.", porque: "La molaridad se refiere al Na2CO3 disuelto, no a la sal hidratada." },
          { paso: "m = 0,0500 mol x 286,2 g/mol = 14,3 g de Na2CO3 . 10 H2O.", porque: "Hay que pesar la masa del hidrato, porque la sal pesada incluye el agua de cristalizacion." }
        ],
        resultado: "14,3 g de sal hidratada"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Masa de agua en el hidrato: 10 x 18,02 g/mol = 180,2 g/mol.", porque: "Cada formula contiene 10 moleculas de agua de cristalizacion." },
          { paso: "% m/m de agua = 180,2 / 286,2 x 100 = 63,0 %.", porque: "Es la fraccion de la masa de la sal hidratada que corresponde al agua." }
        ],
        resultado: "63,0 % de agua de cristalizacion"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "Calculo erroneo: n = 14,3 g / 105,99 g/mol = 0,135 mol; M = 0,135 mol / 0,250 L = 0,540 M.", porque: "Es lo que resulta si la masa pesada se trata como si fuera solo Na2CO3 anhidro." },
          { paso: "La concentracion real es 0,200 M, porque el agua de cristalizacion no aporta Na2CO3 y debe usarse la masa molar del hidrato: 14,3 g / 286,2 g/mol = 0,0500 mol.", porque: "La masa molar usada tiene que ser la del mismo compuesto que se pesa." }
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
          { paso: "m_solucion concentrada = 60,0 mL x 1,08 g/mL = 64,8 g; m_KCl = 0,120 x 64,8 g = 7,78 g.", porque: "La densidad convierte el volumen en masa, y el % m/m se aplica a esa masa." },
          { paso: "Masa de la mezcla final = 64,8 g + 140 g = 204,8 g; % m/m = 7,776 g / 204,8 g x 100 = 3,80 %.", porque: "En el % m/m final el denominador es la masa total de la mezcla." }
        ],
        resultado: "7,78 g de KCl; 3,80 % m/m"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "n(KCl) = 7,776 g / 74,55 g/mol = 0,1043 mol; V_final = 60,0 mL + 140 mL = 200 mL = 0,200 L.", porque: "La molaridad necesita los moles de soluto y el volumen total de la mezcla, con la aditividad supuesta." },
          { paso: "M = 0,1043 mol / 0,200 L = 0,522 M.", porque: "Moles de soluto por litro de solucion final." }
        ],
        resultado: "0,522 M"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "Calculo erroneo: 12,0 % x 60,0 g = 7,20 g de KCl; masa total 60,0 g + 140 g = 200 g; % = 7,20 / 200 x 100 = 3,60 %.", porque: "Es el resultado que se obtiene si se ignora la densidad y se trata el volumen como masa." },
          { paso: "El error viene de que 60,0 mL de solucion concentrada pesan 64,8 g, no 60,0 g: al ignorar la densidad se subestima la masa de KCl y la masa total.", porque: "Un % m/m exige masas reales; el volumen solo se convierte a masa con la densidad." }
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
          { paso: "Disociacion: CuSO4 (s) -> Cu^2+ + SO4^2- (disociacion completa).", porque: "Es una sal soluble; cada formula libera 1 Cu^2+ y 1 SO4^2-." },
          { paso: "n = 12,50 g / 249,7 g/mol = 0,05006 mol de CuSO4 . 5 H2O; [CuSO4] = [Cu^2+] = [SO4^2-] = 0,05006 mol / 0,500 L = 0,1001 M.", porque: "Cada mol de hidrato aporta 1 mol de CuSO4, y la estequiometria 1:1 hace iguales las tres concentraciones." },
          { paso: "[Cu^2+] en mg/L = 0,1001 mol/L x 63,55 g/mol = 6,36 g/L = 6,36 x 10^3 mg/L.", porque: "Se multiplica por la masa molar del Cu para pasar a gramos y luego se pasa de g a mg (x 1000)." }
        ],
        resultado: "0,1001 M de CuSO4, Cu^2+ y SO4^2-; [Cu^2+] = 6,36 x 10^3 mg/L"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Masa de CuSO4 anhidro = 0,05006 mol x 159,6 g/mol = 7,990 g en 500 mL.", porque: "Solo la sal anhidra es el soluto; el agua de hidratacion no se cuenta como CuSO4." },
          { paso: "% m/V = 7,990 g / 500 mL x 100 = 1,60 %.", porque: "% m/V son gramos de soluto por 100 mL de solucion." },
          { paso: "Justificacion: el hidrato pesa 249,7 g/mol, de los cuales 5 x 18,02 = 90,10 g/mol son agua; el CuSO4 anhidro es solo 159,6 / 249,7 = 63,9 % de la masa del hidrato.", porque: "El agua de cristalizacion forma parte de la masa pesada, pero no del soluto disuelto." }
        ],
        resultado: "1,60 % m/V de CuSO4 anhidro"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "Moles en la alicuota: 0,1001 mol/L x 0,0200 L = 2,002 x 10^-3 mol de CuSO4.", porque: "La alicuota es una parte de la solucion madre y tiene la misma concentracion." },
          { paso: "[CuSO4] final = 2,002 x 10^-3 mol / 0,250 L = 8,01 x 10^-3 M.", porque: "La dilucion conserva los moles; la nueva concentracion es moles sobre el volumen final de 250 mL." },
          { paso: "mg de Cu^2+ en 20,0 mL = 2,002 x 10^-3 mol x 63,55 g/mol = 0,1272 g = 127 mg.", porque: "Los moles de Cu^2+ no cambian al diluir; solo se pasan a masa." }
        ],
        resultado: "8,01 x 10^-3 M de CuSO4 y 127 mg de Cu^2+"
      },
      {
        parte: "d)",
        pasos: [
          { paso: "Al evaporarse agua, el volumen de solucion disminuye, pero los moles de Cu^2+ no cambian (el agua sale sin llevar soluto).", porque: "La cantidad de soluto no depende de cuanto solvente haya." },
          { paso: "Como M = n / V y n no cambia mientras V baja, la molaridad aumenta.", porque: "La molaridad depende inversamente del volumen cuando el numero de moles se mantiene." }
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
          { paso: "Cuento los atomos: a la izquierda 1 Al y 2 O; a la derecha 2 Al y 3 O.", porque: "Balancear significa igualar el numero de atomos de cada elemento en ambos lados, por conservacion de la masa." },
          { paso: "Igualo Al: 4 Al a la izquierda y 2 Al2O3 a la derecha (4 Al).", porque: "Cada formula de Al2O3 tiene 2 Al, asi que hacen falta 2 formulas para tener 4 Al." },
          { paso: "Igualo O: 2 Al2O3 tienen 6 O, y 3 O2 aportan 6 O. Ecuacion: 4 Al(s) + 3 O2(g) -> 2 Al2O3(s).", porque: "Los subindices no se cambian; solo se ajustan los coeficientes hasta igualar todos los elementos." },
          { paso: "Clasificacion: sintesis (dos reactivos dan un solo producto). Tambien es redox: el Al pasa de 0 a +3 y el O de 0 a -2.", porque: "Hay un unico producto formado por los dos reactivos, y hay transferencia de electrones." }
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
          { paso: "n(C3H8) = 10,0 g / 44,1 g/mol = 0,227 mol.", porque: "La estequiometria trabaja en moles, asi que la masa se pasa a moles dividiendo por la masa molar." },
          { paso: "Relacion molar: 1 mol de C3H8 produce 3 mol de CO2.", porque: "Los coeficientes de la ecuacion balanceada dan la proporcion entre reactivos y productos." },
          { paso: "n(CO2) = 3 x 0,227 mol = 0,680 mol.", porque: "Se aplica la relacion molar sobre los moles del reactivo." },
          { paso: "m(CO2) = 0,680 mol x 44,0 g/mol = 29,9 g.", porque: "Para expresar el resultado en gramos se multiplica por la masa molar del CO2." }
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
          { paso: "n(KClO3) = 24,5 g / 122,5 g/mol = 0,200 mol.", porque: "Masa dividida masa molar da moles." },
          { paso: "n(O2) = 0,200 mol x 3 / 2 = 0,300 mol de O2.", porque: "De la ecuacion balanceada, 2 mol de KClO3 producen 3 mol de O2." },
          { paso: "V(O2) = 0,300 mol x 22,4 L/mol = 6,72 L en CNPT.", porque: "En CNPT (273 K y 1 atm) un mol de gas ideal ocupa 22,4 L, segun PV = nRT." }
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
          { paso: "Balanceo: 1 Zn, 1 Cu, 1 S y 4 O a cada lado; la ecuacion ya esta balanceada con coeficientes 1.", porque: "Igualar atomos de cada elemento se verifica antes de analizar electrones." },
          { paso: "Zn: 0 en el metal -> +2 en ZnSO4 (se oxida, pierde 2 e^-). Cu: +2 en CuSO4 -> 0 en el Cu metalico (se reduce, gana 2 e^-).", porque: "Si el numero de oxidacion sube hay perdida de electrones (oxidacion); si baja hay ganancia (reduccion)." },
          { paso: "Agente reductor: Zn (se oxida y cede electrones). Agente oxidante: Cu^2+ del CuSO4 (se reduce y acepta electrones).", porque: "El oxidante es la especie que contiene el elemento que se reduce, y el reductor es el que se oxida." }
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
          { paso: "n(HCl) = 0,200 mol/L x 0,0500 L = 0,0100 mol.", porque: "La molaridad da moles por litro; el volumen en mL se pasa a litros." },
          { paso: "Relacion 1:1 en la ecuacion: 0,0100 mol de HCl necesitan 0,0100 mol de NaOH y producen 0,0100 mol de NaCl.", porque: "Todos los coeficientes son 1, asi que la proporcion molar es 1:1." },
          { paso: "m(NaCl) = 0,0100 mol x 58,5 g/mol = 0,585 g.", porque: "Para pasar moles a gramos se multiplica por la masa molar." }
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
          { paso: "n(Fe) = 8,00 g / 55,85 g/mol = 0,143 mol; n(S) = 6,00 g / 32,07 g/mol = 0,187 mol.", porque: "Hay que pasar ambos reactivos a moles para compararlos con la relacion estequiometrica." },
          { paso: "Relacion 1:1: 0,143 mol de Fe necesitan 0,143 mol de S. Hay 0,187 mol de S, asi que el Fe es el limitante y el S esta en exceso.", porque: "El reactivo limitante es el que se agota primero; la comparacion se hace en moles, no en masas." },
          { paso: "Exceso de S = (0,187 - 0,143) mol = 0,0439 mol; m = 0,0439 mol x 32,07 g/mol = 1,41 g.", porque: "Lo que sobra es lo disponible menos lo consumido por el limitante." }
        ],
        resultado: "Limitante: Fe; exceso de S: 1,41 g"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "n(FeS) teorico = 0,143 mol (segun el Fe); m teorica = 0,143 mol x 87,92 g/mol = 12,6 g.", porque: "El producto teorico siempre se calcula sobre el reactivo limitante." },
          { paso: "m real = 0,850 x 12,6 g = 10,7 g.", porque: "El rendimiento es la fraccion del valor teorico que realmente se obtiene." }
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
          { paso: "m(CaCO3) = 0,840 x 12,5 g = 10,5 g.", porque: "La pureza indica la fraccion de CaCO3 puro; solo esa parte reacciona y forma CO2." },
          { paso: "n(CaCO3) = 10,5 g / 100,1 g/mol = 0,105 mol.", porque: "Masa dividida masa molar da moles." },
          { paso: "Relacion 1:1 con el CO2: n(CO2) = 0,105 mol; m(CO2) = 0,105 mol x 44,0 g/mol = 4,62 g.", porque: "Segun la ecuacion, 1 mol de CaCO3 produce 1 mol de CO2; el HCl esta en exceso y no limita." }
        ],
        resultado: "4,62 g de CO2"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "V = nRT / P = 0,105 mol x 0,0821 L atm/(mol K) x 298 K / 1 atm = 2,57 L.", porque: "A 25 C el gas no esta en CNPT, asi que se usa la ecuacion de los gases ideales con T en kelvin." }
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
          { paso: "Semirreacciones: MnO4^- -> Mn^2+ (Mn pasa de +7 a +2, gana 5 e^-) y Fe^2+ -> Fe^3+ (pierde 1 e^-).", porque: "El metodo separa reduccion y oxidacion; los numeros de oxidacion indican cuantos electrones intercambia cada una." },
          { paso: "Medio acido: MnO4^- + 8 H^+ + 5 e^- -> Mn^2+ + 4 H2O (O igualado con H2O, H igualado con H^+).", porque: "En medio acido se igualan oxigeno con H2O e hidrogeno con H^+; los electrones se igualan despues." },
          { paso: "Multiplico la semirreaccion del Fe por 5: 5 Fe^2+ -> 5 Fe^3+ + 5 e^-. Sumo: MnO4^- + 5 Fe^2+ + 8 H^+ -> Mn^2+ + 5 Fe^3+ + 4 H2O.", porque: "Los electrones deben cancelarse, y la carga total debe ser igual a ambos lados (izquierda +17, derecha +17)." },
          { paso: "Agente oxidante: MnO4^- (contiene el Mn que se reduce).", porque: "El oxidante es la especie que se reduce." }
        ],
        resultado: "MnO4^- + 5 Fe^2+ + 8 H^+ -> Mn^2+ + 5 Fe^3+ + 4 H2O; oxidante: MnO4^-"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "n(MnO4^-) = 0,0200 mol/L x 0,0250 L = 5,00 x 10^-4 mol.", porque: "El KMnO4 aporta 1 MnO4^- por formula; por eso los moles de KMnO4 son los de MnO4^-." },
          { paso: "Relacion 1:5: n(Fe^2+) = 5 x 5,00 x 10^-4 mol = 2,50 x 10^-3 mol.", porque: "De la ecuacion balanceada, 1 mol de MnO4^- reacciona con 5 mol de Fe^2+." },
          { paso: "m(Fe^2+) = 2,50 x 10^-3 mol x 55,85 g/mol = 0,140 g.", porque: "Para pasar moles a masa se multiplica por la masa molar." }
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
          { paso: "Balanceo: H2SO4 + 2 NaOH -> Na2SO4 + 2 H2O.", porque: "El H2SO4 tiene 2 H que deben neutralizarse con 2 OH^-; asi quedan iguales Na, H y O." },
          { paso: "n(H2SO4) = 0,100 mol/L x 0,0250 L = 2,50 x 10^-3 mol; n(NaOH) = 2 x 2,50 x 10^-3 mol = 5,00 x 10^-3 mol.", porque: "La relacion 1:2 la fija el coeficiente 2 del NaOH." },
          { paso: "[NaOH] = 5,00 x 10^-3 mol / 0,0400 L = 0,125 M.", porque: "La molaridad del NaOH es moles de NaOH por litro de la solucion de NaOH (40,0 mL)." }
        ],
        resultado: "[NaOH] = 0,125 M"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "n(Na2SO4) = n(H2SO4) = 2,50 x 10^-3 mol (relacion 1:1).", porque: "Por cada mol de H2SO4 se forma 1 mol de Na2SO4." },
          { paso: "m = 2,50 x 10^-3 mol x 142,0 g/mol = 0,355 g.", porque: "Para pasar moles a gramos se multiplica por la masa molar." }
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
          { paso: "Balanceo: 2 C4H10 + 13 O2 -> 8 CO2 + 10 H2O (C: 8 = 8; H: 20 = 20; O: 26 = 16 + 10).", porque: "Se igualan C e H primero y el O2 al final, porque el oxigeno aparece en ambos productos." },
          { paso: "n(C4H10) = 5,80 g / 58,1 g/mol = 0,0998 mol; n(CO2) = 0,0998 mol x 8/2 = 0,399 mol.", porque: "La relacion sale de la ecuacion balanceada: 2 mol de butano producen 8 mol de CO2." },
          { paso: "m(CO2) = 0,399 mol x 44,0 g/mol = 17,6 g.", porque: "Para pasar a gramos se multiplica por la masa molar del CO2." }
        ],
        resultado: "17,6 g de CO2"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "n(O2) = 0,0998 mol x 13/2 = 0,649 mol de O2.", porque: "De la relacion 2:13, cada mol de butano necesita 6,5 mol de O2." },
          { paso: "V(O2) = 0,649 mol x 22,4 L/mol = 14,5 L en CNPT; V(aire) = 14,5 L / 0,21 = 69,2 L.", porque: "En CNPT el volumen molar es 22,4 L/mol, y como el O2 es el 21 % v/v del aire, el volumen de aire es el de O2 dividido 0,21." }
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
          { paso: "Balanceo: 2 ZnS + 3 O2 -> 2 ZnO + 2 SO2 (Zn y S: 2 = 2; O: 6 = 2 + 4).", porque: "Se igualan Zn y S primero y luego el oxigeno, que aparece en ZnO y en SO2." },
          { paso: "m(ZnS puro) = 0,850 x 30,0 g = 25,5 g; n(ZnS) = 25,5 g / 97,45 g/mol = 0,2617 mol.", porque: "Solo el ZnS reacciona; la pureza da la masa de ZnS en la muestra." },
          { paso: "n(ZnO teorico) = n(ZnS) = 0,2617 mol (relacion 2:2); m = 0,2617 mol x 81,38 g/mol = 21,3 g.", porque: "El producto teorico se calcula sobre el reactivo consumido, con la relacion de la ecuacion balanceada." }
        ],
        resultado: "2 ZnS + 3 O2 -> 2 ZnO + 2 SO2; 21,3 g de ZnO teorico"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Rendimiento = 17,5 g / 21,3 g x 100 = 82,2 %.", porque: "El rendimiento compara lo obtenido experimentalmente con lo que predice la estequiometria." }
        ],
        resultado: "82,2 %"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "Los 30,0 g incluyen 15 % de impurezas que no reaccionan ni forman ZnO; usar esa masa sobrestimaria el producto teorico.", porque: "El calculo estequiometrico usa solo sustancia pura; las impurezas no son reactivo." }
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
          { paso: "Semirreacciones: reduccion MnO4^- -> MnO2 (Mn pasa de +7 a +4, gana 3 e^-); oxidacion SO3^2- -> SO4^2- (S pasa de +4 a +6, pierde 2 e^-).", porque: "Los numeros de oxidacion indican cuantos electrones se transfieren en cada semirreaccion." },
          { paso: "Medio basico: reduccion MnO4^- + 2 H2O + 3 e^- -> MnO2 + 4 OH^-; oxidacion SO3^2- + 2 OH^- -> SO4^2- + H2O + 2 e^-.", porque: "En medio basico el oxigeno se iguala con H2O y el hidrogeno con OH^-, no con H^+." },
          { paso: "Igualo electrones (2 x reduccion + 3 x oxidacion, 6 e^- cada uno) y sumo; simplifico las H2O y los OH^-: 2 MnO4^- + 3 SO3^2- + H2O -> 2 MnO2 + 3 SO4^2- + 2 OH^-.", porque: "Los electrones ganados deben ser iguales a los perdidos, y las especies repetidas de ambos lados se cancelan." }
        ],
        resultado: "2 MnO4^- + 3 SO3^2- + H2O -> 2 MnO2(s) + 3 SO4^2- + 2 OH^-"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "n(SO3^2-) = 0,300 g / 126,0 g/mol = 2,38 x 10^-3 mol.", porque: "Se usa la masa molar del Na2SO3, que aporta 1 SO3^2- por formula." },
          { paso: "Relacion 2:3: n(MnO4^-) = (2/3) x 2,38 x 10^-3 mol = 1,59 x 10^-3 mol.", porque: "De la ecuacion balanceada, 2 mol de MnO4^- reaccionan con 3 mol de SO3^2-." },
          { paso: "V = 1,59 x 10^-3 mol / 0,0200 mol/L = 0,0794 L = 79,4 mL.", porque: "Volumen de solucion = moles / molaridad." }
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
          { paso: "Balanceo: Na2CO3 + 2 HCl -> 2 NaCl + CO2 + H2O.", porque: "El Na2CO3 tiene 2 Na que pasan a 2 NaCl, y el carbonato necesita 2 H para formar CO2 y H2O." },
          { paso: "n(Na2CO3) = 0,920 x 15,0 g / 105,99 g/mol = 0,1302 mol; n(HCl) = 1,50 mol/L x 0,200 L = 0,300 mol.", porque: "Primero se corrige por pureza (solo el carbonato puro reacciona) y luego se pasan ambos reactivos a moles." },
          { paso: "HCl necesario = 2 x 0,1302 mol = 0,2604 mol, menor que 0,300 mol disponibles: el Na2CO3 es el limitante y el HCl queda en exceso = 0,300 - 0,2604 = 0,0396 mol.", porque: "El limitante es el que se consume primero; el exceso es lo disponible menos lo que consume el limitante." }
        ],
        resultado: "Limitante: Na2CO3; HCl en exceso: 0,0396 mol"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "n(CO2) teorico = 0,1302 mol (relacion 1:1 con el Na2CO3); con rendimiento 90,0 %: n = 0,900 x 0,1302 = 0,117 mol.", porque: "La relacion sale de la ecuacion y el rendimiento se aplica sobre el producto teorico." },
          { paso: "V = nRT / P = 0,117 mol x 0,0821 L atm/(mol K) x 298 K / 1 atm = 2,87 L.", porque: "A 25 C no vale CNPT; se usa la ecuacion de gases ideales con T en kelvin." }
        ],
        resultado: "2,87 L de CO2 a 25 C y 1 atm"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "Na^+ total = 2 x 0,1302 mol = 0,2604 mol (cada Na2CO3 aporta 2 Na^+ y todo el sodio pasa a NaCl con rendimiento 100 %).", porque: "El sodio no se pierde en la reaccion: su cantidad se conserva en los productos." },
          { paso: "[Na^+] = 0,2604 mol / 0,200 L = 1,30 M.", porque: "La concentracion es moles de ion sobre el volumen final." }
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
          { paso: "Balanceo (ion-electron, medio acido): 3 Cu + 8 HNO3 -> 3 Cu(NO3)2 + 2 NO + 4 H2O.", porque: "El Cu pasa de 0 a +2 (pierde 2 e^-) y el N de +5 a +2 (gana 3 e^-); con 3 Cu y 2 NO se igualan los electrones (6 = 6), y luego se ajustan H y O." },
          { paso: "n(Cu) = 2,50 g / 63,55 g/mol = 0,0393 mol; n(HNO3) disponible = 6,00 mol/L x 0,0400 L = 0,240 mol.", porque: "Se pasan ambos reactivos a moles para compararlos." },
          { paso: "HNO3 necesario = (8/3) x 0,0393 mol = 0,105 mol, menor que 0,240 mol: el Cu es el limitante y se consumen 0,105 mol de HNO3.", porque: "El limitante se decide con la relacion 3:8 de la ecuacion, y los moles consumidos de HNO3 salen de la misma relacion." }
        ],
        resultado: "3 Cu + 8 HNO3 -> 3 Cu(NO3)2 + 2 NO + 4 H2O; limitante: Cu; HNO3 consumido: 0,105 mol"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "n(NO) teorico = (2/3) x 0,0393 mol = 0,0262 mol; V teorico = 0,0262 mol x 22,4 L/mol = 0,587 L en CNPT.", porque: "La relacion 3:2 viene de la ecuacion balanceada; en CNPT 1 mol de gas ocupa 22,4 L." },
          { paso: "V real = 0,850 x 0,587 L = 0,499 L.", porque: "El rendimiento corrige el volumen de producto que realmente se obtiene." }
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
          { paso: "n(AgNO3) = 0,120 mol/L x 0,0500 L = 6,00 x 10^-3 mol; n(NaCl) = 0,0800 mol/L x 0,0800 L = 6,40 x 10^-3 mol.", porque: "Se pasan ambos reactivos a moles para compararlos." },
          { paso: "Relacion 1:1: el AgNO3 (6,00 x 10^-3 mol) es el limitante; quedan 0,40 x 10^-3 mol de NaCl en exceso.", porque: "El AgNO3 se agota primero; el NaCl sobrante es la diferencia entre lo disponible y lo consumido." },
          { paso: "m(AgCl) = 6,00 x 10^-3 mol x 143,3 g/mol = 0,860 g.", porque: "El producto se calcula sobre el limitante y se pasa a masa con la masa molar." }
        ],
        resultado: "0,860 g de AgCl"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "V total = 50,0 mL + 80,0 mL = 130 mL = 0,130 L.", porque: "Con volumenes aditivos, el volumen final es la suma." },
          { paso: "[Cl^-] = 0,40 x 10^-3 mol / 0,130 L = 3,08 x 10^-3 M.", porque: "El Cl^- disuelto es el exceso de NaCl: el Cl^- que estaba en el AgCl precipitado ya no esta en solucion." }
        ],
        resultado: "[Cl^-] = 3,08 x 10^-3 M"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "Clasificacion: reaccion de precipitacion (doble desplazamiento) con formacion de un solido insoluble, AgCl.", porque: "Dos soluciones de solutos solubles originan un solido: eso define la precipitacion." },
          { paso: "Iones espectadores: Na^+ y NO3^- (aparecen sin cambio en ambos lados de la ecuacion ionica neta).", porque: "Solo Ag^+ y Cl^- participan en la formacion del solido." }
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
          { paso: "Balanceo: 2 NH3(g) + H2SO4(ac) -> (NH4)2SO4(ac). Verificacion: N 2 = 2; H 6 + 2 = 8 = 8 en (NH4)2SO4; S 1 = 1; O 4 = 4.", porque: "El H2SO4 aporta 2 H^+ que neutralizan 2 NH3; los coeficientes salen de contar N y H." },
          { paso: "Clasificacion: reaccion de neutralizacion (acido-base): el H2SO4 transfiere H^+ al NH3, sin gases ni precipitados como productos.", porque: "Es una reaccion entre un acido y una base de Bronsted." }
        ],
        resultado: "2 NH3(g) + H2SO4(ac) -> (NH4)2SO4(ac); neutralizacion"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "n(NH3) = P V / (R T) = 1,00 atm x 50,0 L / (0,0821 L atm/(mol K) x 298 K) = 2,04 mol.", porque: "El NH3 esta como gas fuera de CNPT, asi que se usa PV = nRT con T en kelvin." },
          { paso: "n(H2SO4) = 0,800 mol/L x 0,500 L = 0,400 mol; NH3 necesario = 2 x 0,400 = 0,800 mol.", porque: "La relacion 2:1 viene del balanceo del paso a)." },
          { paso: "Como 2,04 mol de NH3 son mas que 0,800 mol necesarios, el H2SO4 es el limitante. NH3 en exceso = 2,04 - 0,800 = 1,24 mol.", porque: "El limitante es el que se agota primero; el exceso es lo disponible menos lo consumido." }
        ],
        resultado: "Limitante: H2SO4; NH3 en exceso: 1,24 mol"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "n((NH4)2SO4) teorico = 0,400 mol (relacion 1:1 con el H2SO4); m teorica = 0,400 mol x 132,1 g/mol = 52,8 g.", porque: "El producto se calcula sobre el limitante." },
          { paso: "m real = 0,920 x 52,8 g = 48,6 g.", porque: "El rendimiento corrige la masa de producto teorico." }
        ],
        resultado: "48,6 g de (NH4)2SO4"
      },
      {
        parte: "d)",
        pasos: [
          { paso: "El NH4^+ es un acido debil (acido conjugado del NH3, base debil): NH4^+ + H2O <-> NH3 + H3O^+.", porque: "Los cationes de bases debiles se hidrolizan y liberan H3O^+, bajando el pH." },
          { paso: "El SO4^2- es una base muy debil y su efecto sobre el pH es despreciable frente al del NH4^+. La solucion es acida (pH < 7).", porque: "El caracter de la sal lo determina el ion que se hidroliza mas; aqui es el amonio." }
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
