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
          { paso: "$$n = \\frac{8{,}50\\ \\text{g}}{58{,}5\\ \\text{g/mol}} = 0{,}1453\\ \\text{mol}$$ de $\\text{NaCl}$.", porque: "Para pasar de masa a moles dividimos la masa de $\\text{NaCl}$ por su masa molar, porque la masa molar indica cuántos gramos tiene un mol de esa sustancia y la concentración molar trabaja con cantidad de sustancia. Usamos $\\frac{8{,}50\\ \\text{g}}{58{,}5\\ \\text{g/mol}}$, de modo que los gramos se cancelan y quedan $0{,}1453\\ \\text{mol}$ de $\\text{NaCl}$. Ese valor de moles es el dato que se necesita para calcular la molaridad en el paso siguiente." },
          { paso: "$$V = 250\\ \\text{mL} = 0{,}250\\ \\text{L}$$.", porque: "Como la molaridad se define con litros de solución, primero convertimos el volumen: $250\\ \\text{mL}$ se pasan a $0{,}250\\ \\text{L}$ dividiendo por 1000. Por eso esta conversión es necesaria antes de dividir, y no un detalle opcional. Si se dividiera por 250 directamente, el resultado quedaría 1000 veces menor al correcto." },
          { paso: "$$M = \\frac{0{,}1453\\ \\text{mol}}{0{,}250\\ \\text{L}} = 0{,}581\\ \\text{M}$$.", porque: "Dado que $M = \\frac{n}{V}$, dividimos los moles de $\\text{NaCl}$ ($0{,}1453\\ \\text{mol}$) por el volumen de la solución en litros ($0{,}250\\ \\text{L}$). Usamos el volumen de la solución final y no el del solvente, por eso el resultado es $0{,}581\\ \\text{M}$. La unidad $\\text{mol/L}$ corresponde a la molaridad, así que el valor ya queda listo para responder la pregunta." }
        ],
        resultado: "$[\\text{NaCl}] = 0{,}581\\ \\text{M}$"
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
          { paso: "$$m_{\\text{solucion}} = m_{\\text{soluto}} + m_{\\text{solvente}} = 12{,}0\\ \\text{g} + 188\\ \\text{g} = 200\\ \\text{g}$$.", porque: "Como el soluto se disuelve en el solvente, sumamos $12{,}0\\ \\text{g}$ de $\\text{KBr}$ y $188\\ \\text{g}$ de agua para obtener la masa total de la solución. Esta suma responde a la conservación de la masa: al disolver no se pierde material, así que la mezcla pesa lo mismo que sus componentes. Por eso la masa de solución resulta $200\\ \\text{g}$, que es el denominador que necesitamos para el porcentaje." },
          { paso: "$$\\% \\text{m/m} = \\left(\\frac{12{,}0\\ \\text{g}}{200\\ \\text{g}}\\right) \\times 100 = 6{,}00\\ \\%$$.", porque: "Calculamos el porcentaje como $\\left(\\frac{12{,}0\\ \\text{g}}{200\\ \\text{g}}\\right) \\times 100$, que indica cuántos gramos de KBr hay en cada 100 g de solución. Por definición, el % m/m usa masa de soluto sobre masa de solución, así que el denominador debe ser $200\\ \\text{g}$ y no los $188\\ \\text{g}$ de agua. Entonces la solución tiene $6{,}00\\ \\%\\ \\text{m/m}$ de $\\text{KBr}$." }
        ],
        resultado: "$6{,}00\\ \\%\\ \\text{m/m}$"
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
          { paso: "Moles de soluto: $$n = 0{,}400\\ \\text{mol/L} \\times 0{,}0250\\ \\text{L} = 0{,}0100\\ \\text{mol}$$ de $\\text{NaOH}$.", porque: "Usamos $M = \\frac{n}{V}$ despejando $n = M \\times V$, porque así obtenemos los moles de soluto a partir de la molaridad y el volumen. Con $0{,}400\\ \\text{mol/L}$ y $25{,}0\\ \\text{mL} = 0{,}0250\\ \\text{L}$ se obtiene $0{,}0100\\ \\text{mol}$ de $\\text{NaOH}$. Como al diluir no se agrega ni se quita soluto, esos moles son los mismos que quedarán en la solución diluida." },
          { paso: "Concentracion final: $$M_d = \\frac{n}{V_{\\text{final}}} = \\frac{0{,}0100\\ \\text{mol}}{0{,}200\\ \\text{L}} = 0{,}0500\\ \\text{M}$$.", porque: "Calculamos la nueva molaridad con $M = \\frac{n}{V}$, usando los $0{,}0100\\ \\text{mol}$ y el volumen final total de $0{,}200\\ \\text{L}$. Dividimos por $0{,}200\\ \\text{L}$ y no por los $25{,}0\\ \\text{mL}$ de la alícuota, porque la concentración se refiere al volumen total donde está disuelto el soluto. Por eso el resultado es $0{,}0500\\ \\text{M}$; dividir por $25{,}0\\ \\text{mL}$ daría un valor 8 veces mayor, así que conviene verificar el denominador." },
          { paso: "Control con $C_c \\times V_c = C_d \\times V_d$: $$0{,}400 \\times 25{,}0 = C_d \\times 200$$, de donde $C_d = 0{,}0500\\ \\text{M}$.", porque: "La ecuación $C_c \\times V_c = C_d \\times V_d$ expresa que los moles de soluto se conservan al diluir, porque $C \\times V$ es igual a $n$. Como control, reemplazamos $0{,}400 \\times 25{,}0 = C_d \\times 200$ y despejamos $C_d = \\frac{0{,}400 \\times 25{,}0}{200}$. Entonces el resultado coincide con $0{,}0500\\ \\text{M}$, lo que confirma el cálculo anterior; usar las mismas unidades de volumen en ambos miembros evita errores." }
        ],
        resultado: "$C_d = 0{,}0500\\ \\text{M}$"
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
          { paso: "Moles de $\\text{CaCl}_2$: $$n = 0{,}250\\ \\text{mol/L} \\times 0{,}500\\ \\text{L} = 0{,}125\\ \\text{mol}$$.", porque: "Usamos $n = M \\times V$, porque la molaridad relaciona moles con litros de solución. Con $0{,}250\\ \\text{mol/L}$ y $500\\ \\text{mL} = 0{,}500\\ \\text{L}$, calculamos $0{,}250 \\times 0{,}500 = 0{,}125\\ \\text{mol}$ de $\\text{CaCl}_2$. Como el volumen ya está en litros, el número de moles queda listo para analizar la disociación en el paso siguiente." },
          { paso: "Disociacion completa: $$\\text{CaCl}_2 \\rightarrow \\text{Ca}^{2+} + 2\\ \\text{Cl}^-$$. Por cada mol de $\\text{CaCl}_2$ se forman $1\\ \\text{mol}$ de $\\text{Ca}^{2+}$ y $2\\ \\text{mol}$ de $\\text{Cl}^-$.", porque: "Escribimos la disociación completa de $\\text{CaCl}_2$ porque es una sal soluble que se separa totalmente en sus iones. Los subíndices fijan la proporción: $\\text{CaCl}_2 \\rightarrow \\text{Ca}^{2+} + 2\\ \\text{Cl}^-$, así que por cada mol de sal aparecen $1\\ \\text{mol}$ de $\\text{Ca}^{2+}$ y $2\\ \\text{mol}$ de $\\text{Cl}^-$. Por eso este paso define el factor 2 que se aplica al cloruro en el cálculo siguiente." },
          { paso: "$[\\text{Ca}^{2+}] = 0{,}250\\ \\text{M}$ y $$[\\text{Cl}^-] = 2 \\times 0{,}250\\ \\text{M} = 0{,}500\\ \\text{M}$$.", porque: "Calculamos la concentración de cada ión como moles de ión sobre litros, igual que con cualquier soluto, partiendo de la molaridad de la sal. Como todos los iones están en los mismos $0{,}500\\ \\text{L}$, multiplicamos $0{,}250\\ \\text{M}$ por el coeficiente de cada ión: 1 para Ca^2+ y 2 para Cl^-. Entonces la solución tiene $0{,}250\\ \\text{M}$ de $\\text{Ca}^{2+}$ y $2 \\times 0{,}250 = 0{,}500\\ \\text{M}$ de $\\text{Cl}^-$." }
        ],
        resultado: "$[\\text{Ca}^{2+}] = 0{,}250\\ \\text{M}$; $[\\text{Cl}^-] = 0{,}500\\ \\text{M}$"
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
          { paso: "$\\% \\text{m/V} = 5{,}00\\ \\text{g}$ de soluto cada $100\\ \\text{mL}$ de solucion.", porque: "Tomamos la definición de $\\% \\text{m/V}$: $5{,}00\\ \\text{g}$ de soluto cada $100\\ \\text{mL}$ de solución, que es la relación de referencia del problema. Conviene escribirla con sus unidades antes de operar, porque así no mezclamos masa con volumen. Esa relación nos permite escalar el dato al volumen de $250\\ \\text{mL}$ que pide el enunciado." },
          { paso: "Factor de escala: $$\\frac{250\\ \\text{mL}}{100\\ \\text{mL}} = 2{,}50$$.", porque: "Dividimos el volumen pedido ($250\\ \\text{mL}$) por el de referencia ($100\\ \\text{mL}$) para obtener $2{,}50$, es decir, cuántas veces entra la referencia en el volumen pedido. Como la concentración es constante en toda la solución, la masa de soluto crece en la misma proporción que el volumen. Por eso el factor 2,50 no tiene unidades y se aplica directamente a los $5{,}00\\ \\text{g}$." },
          { paso: "$$m = 5{,}00\\ \\text{g} \\times 2{,}50 = 12{,}5\\ \\text{g}$$ de glucosa.", porque: "Multiplicamos los $5{,}00\\ \\text{g}$ de la referencia por el factor $2{,}50$, es decir, $5{,}00\\ \\text{g} \\times 2{,}50 = 12{,}5\\ \\text{g}$ de glucosa en $250\\ \\text{mL}$. Como cada mililitro tiene la misma concentración, la masa escalada es la que corresponde al volumen pedido. El resultado es razonable porque 250 mL es más que 100 mL, así que deben disolverse más de $5{,}00\\ \\text{g}$." }
        ],
        resultado: "$12{,}5\\ \\text{g}$ de glucosa"
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
          { paso: "Base de calculo $1{,}00\\ \\text{L}$: $$m_{\\text{solucion}} = 1000\\ \\text{mL} \\times 1{,}18\\ \\text{g/mL} = 1180\\ \\text{g}$$.", porque: "Calculamos la masa de 1,00 L de solución multiplicando $1000\\ \\text{mL}$ por la densidad $1{,}18\\ \\text{g/mL}$, porque la densidad relaciona volumen y masa. Como el % m/m se aplica a masas y el dato es un volumen, necesitamos esta conversión para pasar a gramos. Así obtenemos $1180\\ \\text{g}$ de solución, que será la base para calcular el soluto." },
          { paso: "$$m_{\\text{HCl}} = 0{,}350 \\times 1180\\ \\text{g} = 413{,}0\\ \\text{g}$$; $n = \\frac{413{,}0\\ \\text{g}}{36{,}5\\ \\text{g/mol}} = 11{,}32\\ \\text{mol}$.", porque: "Tomamos el $35{,}0\\ \\%$ de la masa de solución porque el % m/m indica qué fracción de la masa total corresponde al HCl. Con $0{,}350 \\times 1180\\ \\text{g}$ obtenemos $413{,}0\\ \\text{g}$ de $\\text{HCl}$. Luego dividimos esa masa por 36,5 g/mol para pasarla a moles: $\\frac{413{,}0\\ \\text{g}}{36{,}5\\ \\text{g/mol}} = 11{,}32\\ \\text{mol}$, que es lo que necesita la molaridad." },
          { paso: "$$M = \\frac{11{,}32\\ \\text{mol}}{1{,}00\\ \\text{L}} = 11{,}3\\ \\text{M}$$.", porque: "Usamos $M = \\frac{n}{V}$, dividiendo los $11{,}32\\ \\text{mol}$ de $\\text{HCl}$ por el volumen de la base, $1{,}00\\ \\text{L}$. Como la base de cálculo fue exactamente 1,00 L, el valor numérico de los moles coincide con la molaridad, así que 11,3 M es la concentración de la solución comercial. Conviene verificar que la unidad quede en $\\text{mol/L}$." }
        ],
        resultado: "$11{,}3\\ \\text{M}$"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "$$n(\\text{HCl})_{\\text{necesarios}} = 0{,}100\\ \\text{mol/L} \\times 0{,}500\\ \\text{L} = 0{,}0500\\ \\text{mol}$$.", porque: "Calculamos los moles de HCl que necesita la solución diluida, con $0{,}100\\ \\text{mol/L} \\times 0{,}500\\ \\text{L} = 0{,}0500\\ \\text{mol}$. Como al preparar la dilución no se agrega ni se quita soluto, esos mismos moles deben salir de la solución comercial. Por eso este valor es el dato que se usa en el paso siguiente para despejar el volumen." },
          { paso: "$$V = \\frac{n}{M_{\\text{comercial}}} = \\frac{0{,}0500\\ \\text{mol}}{11{,}32\\ \\text{mol/L}} = 4{,}42\\ \\text{mL}$$.", porque: "Despejamos el volumen del concentrado con $V = \\frac{n}{M}$, porque $n = M \\times V$; los $0{,}0500\\ \\text{mol}$ deben provenir de la solución de $11{,}32\\ \\text{mol/L}$. Dividiendo $\\frac{0{,}0500\\ \\text{mol}}{11{,}32\\ \\text{mol/L}}$ obtenemos $4{,}42\\ \\text{mL}$ de solución comercial. Este volumen es pequeño y luego se completa hasta 500 mL con agua, por lo que conviene verificar que sea menor que $500\\ \\text{mL}$." }
        ],
        resultado: "$4{,}42\\ \\text{mL}$ de solucion comercial, completando hasta $500\\ \\text{mL}$ con agua"
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
          { paso: "$$n(\\text{NaOH}) = \\frac{15{,}0\\ \\text{g}}{40{,}0\\ \\text{g/mol}} = 0{,}375\\ \\text{mol}$$.", porque: "Dividimos la masa de $\\text{NaOH}$ ($15{,}0\\ \\text{g}$) por su masa molar ($40{,}0\\ \\text{g/mol}$) para obtener los moles de soluto, porque la molalidad se expresa en moles por kilogramo. Con $\\frac{15{,}0\\ \\text{g}}{40{,}0\\ \\text{g/mol}}$ el resultado es $0{,}375\\ \\text{mol}$ de $\\text{NaOH}$. Las unidades $\\frac{\\text{g}}{\\text{g/mol}}$ se cancelan y dejan $\\text{mol}$, que es lo que necesitamos para el paso siguiente." },
          { paso: "Solvente: $$250\\ \\text{g} = 0{,}250\\ \\text{kg}$$ de agua.", porque: "Expresamos el solvente en kilogramos porque la molalidad se define por kilogramo de solvente y no de solución. Con $250\\ \\text{g} = 0{,}250\\ \\text{kg}$ de agua, el denominador queda en la unidad correcta. Este paso es necesario porque usar la masa de solución o los litros daría una molalidad incorrecta." },
          { paso: "$$m = \\frac{0{,}375\\ \\text{mol}}{0{,}250\\ \\text{kg}} = 1{,}50\\ \\text{mol/kg}$$.", porque: "Aplicamos $m = \\frac{n}{\\text{kg de solvente}}$: dividimos los $0{,}375\\ \\text{mol}$ de $\\text{NaOH}$ por $0{,}250\\ \\text{kg}$ de agua, lo que da $1{,}50\\ \\text{mol/kg}$. Por eso la molalidad queda expresada en mol/kg, y conviene escribirla con $m$ minúscula para no confundirla con la molaridad $M$. Este valor responde al apartado a)." }
        ],
        resultado: "$1{,}50\\ \\text{mol/kg}$"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "$$m_{\\text{solucion}} = 15{,}0\\ \\text{g} + 250\\ \\text{g} = 265\\ \\text{g}$$.", porque: "Sumamos la masa de soluto ($15{,}0\\ \\text{g}$) y la del solvente ($250\\ \\text{g}$) para obtener la masa total de la solución. Como en el apartado anterior, la masa de solución incluye todos los componentes porque al disolver se conserva la masa. Así obtenemos $265\\ \\text{g}$, que es el denominador necesario para el $\\%\\ \\text{m/m}$." },
          { paso: "$$\\% \\text{m/m} = \\frac{15{,}0\\ \\text{g}}{265\\ \\text{g}} \\times 100 = 5{,}66\\ \\%$$.", porque: "Calculamos el % m/m dividiendo la masa de $\\text{NaOH}$ ($15{,}0\\ \\text{g}$) por la masa total de solución ($265\\ \\text{g}$) y multiplicando por 100. Por definición, el denominador del % m/m es siempre la masa de solución y no la del solvente. Entonces el resultado $5{,}66\\ \\%\\ \\text{m/m}$ indica que hay $5{,}66\\ \\text{g}$ de $\\text{NaOH}$ por cada $100\\ \\text{g}$ de solución." }
        ],
        resultado: "$5{,}66\\ \\%\\ \\text{m/m}$"
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
          { paso: "Masa maxima disuelta: $$\\frac{31{,}6\\ \\text{g}}{100\\ \\text{g de agua}} \\times 200\\ \\text{g de agua} = 63{,}2\\ \\text{g}$$ de $\\text{A}$.", porque: "Escalamos la solubilidad, que está dada por $100\\ \\text{g de agua}$, a los $200\\ \\text{g de agua}$ presentes: $31{,}6\\ \\text{g} \\times \\frac{200}{100} = 63{,}2\\ \\text{g}$. La solubilidad es la cantidad máxima de soluto que puede disolverse en una cantidad fija de solvente, así que hay que proporcionarla a la masa de agua real. Ese valor de $63{,}2\\ \\text{g}$ es el máximo que la solución puede retener a $20\\ \\text{C}$." },
          { paso: "Sin disolver: $$80{,}0\\ \\text{g} - 63{,}2\\ \\text{g} = 16{,}8\\ \\text{g}$$.", porque: "Restamos la masa máxima disuelta ($63{,}2\\ \\text{g}$) a la masa agregada ($80{,}0\\ \\text{g}$) para hallar el exceso que no se disuelve. Como $80{,}0\\ \\text{g} - 63{,}2\\ \\text{g} = 16{,}8\\ \\text{g}$, ese sólido no puede permanecer en solución y queda sin disolver. Por eso el resultado del apartado a) es $16{,}8\\ \\text{g}$." },
          { paso: "Supuesto: la sal y el agua llegan al equilibrio a $20\\ \\text{C}$, y el solido no disuelto esta en equilibrio con la solucion saturada.", porque: "Aclaramos los supuestos del cálculo: equilibrio a $20\\ \\text{C}$ y sólido en contacto con una solución saturada. La solubilidad es un valor de equilibrio y solo se alcanza si hay exceso de soluto, por eso estas condiciones justifican el cálculo. Gracias a ellas, el resultado de $16{,}8\\ \\text{g}$ sin disolver es válido a $20\\ \\text{C}$." }
        ],
        resultado: "$16{,}8\\ \\text{g}$ sin disolver"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "$$m_{\\text{solucion}} = 63{,}2\\ \\text{g de A} + 200\\ \\text{g de agua} = 263{,}2\\ \\text{g}$$.", porque: "Sumamos la masa de soluto disuelto ($63{,}2\\ \\text{g}$) y la del agua ($200\\ \\text{g}$) para obtener la masa de solución: $263{,}2\\ \\text{g}$. El sólido sin disolver ($16{,}8\\ \\text{g}$) no forma parte de la solución, así que no se suma. Por eso la masa de solución es $263{,}2\\ \\text{g}$ y no la suma de todo lo agregado al agua." },
          { paso: "$$\\% \\text{m/m} = \\frac{63{,}2\\ \\text{g}}{263{,}2\\ \\text{g}} \\times 100 = 24{,}0\\ \\%$$.", porque: "Dividimos la masa de soluto disuelto ($63{,}2\\ \\text{g}$) por la masa de solución ($263{,}2\\ \\text{g}$) y multiplicamos por 100: $\\frac{63{,}2}{263{,}2} \\times 100 = 24{,}0\\ \\%$. Como la solución está saturada a $20\\ \\text{C}$, tiene la máxima concentración posible a esa temperatura, y ese es el valor que corresponde a la pregunta b)." }
        ],
        resultado: "$24{,}0\\ \\%\\ \\text{m/m}$"
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
          { paso: "$$k = \\frac{S}{P} = \\frac{1{,}20 \\times 10^{-3}\\ \\text{mol/L}}{1{,}00\\ \\text{atm}} = 1{,}20 \\times 10^{-3}\\ \\text{mol/(L} \\times \\text{atm)}$$.", porque: "Calculamos la constante de Henry como $k = \\frac{S}{P}$, porque la ley $S = k \\times P$ es una proporcionalidad directa. Con $S = 1{,}20 \\times 10^{-3}\\ \\text{mol/L}$ y $P = 1{,}00\\ \\text{atm}$ obtenemos $k = 1{,}20 \\times 10^{-3}\\ \\text{mol/(L} \\times \\text{atm)}$. Una vez conocida $k$, sirve para calcular la solubilidad a cualquier otra presión, siempre que la temperatura no cambie." },
          { paso: "$$S = k \\times P = 1{,}20 \\times 10^{-3} \\times 3{,}00 = 3{,}60 \\times 10^{-3}\\ \\text{mol/L}$$.", porque: "Multiplicamos la constante $k$ por la nueva presión parcial, usando $S = k \\times P = 1{,}20 \\times 10^{-3} \\times 3{,}00$. Entonces obtenemos $3{,}60 \\times 10^{-3}\\ \\text{mol/L}$. Como la relación es directa, al triplicar la presión la solubilidad también se triplica, y la presión debe expresarse en $\\text{atm}$, la misma unidad de $k$." }
        ],
        resultado: "$3{,}60 \\times 10^{-3}\\ \\text{mol/L}$"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "$$n = 3{,}60 \\times 10^{-3}\\ \\text{mol/L} \\times 0{,}500\\ \\text{L} = 1{,}80 \\times 10^{-3}\\ \\text{mol}$$.", porque: "Multiplicamos la solubilidad ($3{,}60 \\times 10^{-3}\\ \\text{mol/L}$) por el volumen de solución ($0{,}500\\ \\text{L}$) para hallar los moles de gas disueltos. Como la solubilidad expresa moles por litro, al multiplicar por litros se obtienen moles totales. Así llegamos a $1{,}80 \\times 10^{-3}\\ \\text{mol}$, cantidad que se convierte en masa en el paso siguiente." },
          { paso: "$$m = 1{,}80 \\times 10^{-3}\\ \\text{mol} \\times 44{,}0\\ \\text{g/mol} = 0{,}0792\\ \\text{g}$$.", porque: "Pasamos los moles a gramos usando $m = n \\times M$, que es la relación $n = \\frac{m}{M}$ despejada. Con $1{,}80 \\times 10^{-3}\\ \\text{mol} \\times 44{,}0\\ \\text{g/mol}$ obtenemos $0{,}0792\\ \\text{g}$ de gas. Como la solubilidad de un gas en agua suele ser baja, esta masa tan pequeña es coherente con el resultado anterior." }
        ],
        resultado: "$0{,}0792\\ \\text{g}$ de gas"
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
          { paso: "$\\text{Cl}^{-}$ del $\\text{NaCl}$: $$0{,}20\\ \\text{mol/L} \\times 0{,}100\\ \\text{L} = 0{,}0200\\ \\text{mol}$$ (NaCl se disocia 1:1).", porque: "Calculamos primero los moles de $\\text{NaCl}$ como $M \\times V$, con $0{,}20\\ \\text{mol/L} \\times 0{,}100\\ \\text{L} = 0{,}0200\\ \\text{mol}$. Como el $\\text{NaCl}$ se disocia 1:1, esos moles son también los de $\\text{Cl}^{-}$ que aporta esta fuente. Conviene contar los iones de cada soluto por separado antes de sumarlos, para no omitir ninguna fuente." },
          { paso: "$\\text{Cl}^{-}$ del $\\text{CaCl}_2$: $$0{,}10\\ \\text{mol/L} \\times 0{,}100\\ \\text{L} = 0{,}0100\\ \\text{mol}$$ de $\\text{CaCl}_2$, que aportan $2 \\times 0{,}0100 = 0{,}0200\\ \\text{mol}$ de $\\text{Cl}^{-}$.", porque: "Multiplicamos los moles de $\\text{CaCl}_2$ ($0{,}0100\\ \\text{mol}$) por 2, porque cada fórmula libera 2 iones $\\text{Cl}^{-}$. Así obtenemos $2 \\times 0{,}0100 = 0{,}0200\\ \\text{mol}$ de $\\text{Cl}^{-}$ aportados por el $\\text{CaCl}_2$. Este es el paso donde más se olvida el subíndice, por eso lo calculamos aparte antes de sumar." },
          { paso: "Volumen final $0{,}200\\ \\text{L}$; $$[\\text{Cl}^{-}] = \\frac{(0{,}0200 + 0{,}0200)\\ \\text{mol}}{0{,}200\\ \\text{L}} = 0{,}200\\ \\text{M}$$.", porque: "Sumamos los moles de $\\text{Cl}^{-}$ de ambas fuentes, porque la mezcla contiene los iones de las dos soluciones. Dividimos $(0{,}0200 + 0{,}0200)\\ \\text{mol}$ por el volumen final de $0{,}200\\ \\text{L}$, suponiendo aditividad de volúmenes. Por eso la concentración final de cloruro es $0{,}200\\ \\text{M}$." }
        ],
        resultado: "$[\\text{Cl}^{-}] = 0{,}200\\ \\text{M}$"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "$$[\\text{Na}^{+}] = \\frac{0{,}0200\\ \\text{mol}}{0{,}200\\ \\text{L}} = 0{,}100\\ \\text{M}$$.", porque: "Dividimos los moles de $\\text{Na}^{+}$ ($0{,}0200\\ \\text{mol}$) por el volumen final de $0{,}200\\ \\text{L}$, porque la concentración se calcula sobre el volumen total de la mezcla. Como el $\\text{NaCl}$ aporta un $\\text{Na}^{+}$ por fórmula y el $\\text{CaCl}_2$ no tiene sodio, este valor proviene de una sola fuente. Así se obtiene $[\\text{Na}^{+}] = 0{,}100\\ \\text{M}$." },
          { paso: "$$[\\text{Ca}^{2+}] = \\frac{0{,}0100\\ \\text{mol}}{0{,}200\\ \\text{L}} = 0{,}0500\\ \\text{M}$$.", porque: "Dividimos los moles de $\\text{Ca}^{2+}$ ($0{,}0100\\ \\text{mol}$, aportados solo por el $\\text{CaCl}_2$) por el volumen final de $0{,}200\\ \\text{L}$. El calcio se reparte en el volumen total de la mezcla, por eso la concentración se calcula sobre $0{,}200\\ \\text{L}$ y no sobre los $100\\ \\text{mL}$ de cada solución. Así resulta $[\\text{Ca}^{2+}] = 0{,}0500\\ \\text{M}$." }
        ],
        resultado: "$[\\text{Na}^{+}] = 0{,}100\\ \\text{M}$; $[\\text{Ca}^{2+}] = 0{,}0500\\ \\text{M}$"
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
          { paso: "Base de calculo $1{,}00\\ \\text{L}$: $$m_{\\text{solucion}} = 1000\\ \\text{mL} \\times 1{,}84\\ \\text{g/mL} = 1840\\ \\text{g}$$; $m_{\\text{H}_2\\text{SO}_4} = 0{,}960 \\times 1840\\ \\text{g} = 1766{,}4\\ \\text{g}$.", porque: "Tomamos $1{,}00\\ \\text{L}$ de solución como base de cálculo y lo pasamos a masa con la densidad: $1000\\ \\text{mL} \\times 1{,}84\\ \\text{g/mL} = 1840\\ \\text{g}$. Como el $\\% \\text{m/m}$ se aplica a masas, el volumen debe convertirse primero en masa; luego el $96{,}0\\ \\%$ nos da la masa de $\\text{H}_2\\text{SO}_4$ en esa base. Así obtenemos $1766{,}4\\ \\text{g}$ de $\\text{H}_2\\text{SO}_4$, que es la base para calcular los moles." },
          { paso: "$$n = \\frac{1766{,}4\\ \\text{g}}{98{,}08\\ \\text{g/mol}} = 18{,}0\\ \\text{mol}$$; $M = \\frac{18{,}0\\ \\text{mol}}{1{,}00\\ \\text{L}} = 18{,}0\\ \\text{M}$.", porque: "Dividimos la masa de $\\text{H}_2\\text{SO}_4$ ($1766{,}4\\ \\text{g}$) por su masa molar ($98{,}08\\ \\text{g/mol}$) para obtener los moles: $\\frac{1766{,}4\\ \\text{g}}{98{,}08\\ \\text{g/mol}} = 18{,}0\\ \\text{mol}$. Luego dividimos por el volumen de la base ($1{,}00\\ \\text{L}$) según $M = \\frac{n}{V}$, lo que da $18{,}0\\ \\text{M}$. Como la base es $1{,}00\\ \\text{L}$, el número de moles coincide con la molaridad." }
        ],
        resultado: "$18{,}0\\ \\text{M}$"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "$$\\text{eq} = \\frac{1766{,}4\\ \\text{g}}{49{,}04\\ \\text{g/eq}} = 36{,}0\\ \\text{eq}$$; $N = \\frac{36{,}0\\ \\text{eq}}{1{,}00\\ \\text{L}} = 36{,}0\\ \\text{N}$.", porque: "Dividimos la masa de $\\text{H}_2\\text{SO}_4$ ($1766{,}4\\ \\text{g}$) por su masa equivalente ($49{,}04\\ \\text{g/eq}$) para obtener los equivalentes, porque la normalidad cuenta equivalentes y no moles. La masa equivalente es la masa molar dividida por los $\\text{H}^{+}$ que el ácido puede ceder, y en este caso $\\frac{98{,}08}{2} = 49{,}04\\ \\text{g/eq}$. Así se obtienen $36{,}0\\ \\text{eq}$, que dan $N = \\frac{36{,}0\\ \\text{eq}}{1{,}00\\ \\text{L}} = 36{,}0\\ \\text{N}$." },
          { paso: "$N = 2 \\times M$, porque cada mol de $\\text{H}_2\\text{SO}_4$ aporta 2 equivalentes en la neutralizacion.", porque: "Aplicamos $N = 2 \\times M$ porque, en la neutralización, cada mol de $\\text{H}_2\\text{SO}_4$ aporta 2 equivalentes (2 mol de $\\text{H}^{+}$). Usando $M = 18{,}0\\ \\text{M}$, el doble da $36{,}0\\ \\text{N}$, que coincide con el cálculo anterior. Por eso la normalidad de este ácido es el doble de su molaridad, mientras que la molaridad cuenta moles de fórmula sin importar cuántos $\\text{H}^{+}$ libera." }
        ],
        resultado: "$36{,}0\\ \\text{N}$ (el doble de la molaridad)"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "$$n(\\text{H}_2\\text{SO}_4)_{\\text{necesarios}} = 0{,}100\\ \\text{mol/L} \\times 0{,}250\\ \\text{L} = 0{,}0250\\ \\text{mol}$$.", porque: "Calculamos los moles de $\\text{H}_2\\text{SO}_4$ necesarios para la solución diluida con $0{,}100\\ \\text{mol/L} \\times 0{,}250\\ \\text{L} = 0{,}0250\\ \\text{mol}$. Lo hacemos primero porque la cantidad de ácido se conserva al diluir, y esos moles son los que hay que tomar del concentrado. Por eso este valor es el dato que se usa para despejar el volumen." },
          { paso: "$$V = \\frac{0{,}0250\\ \\text{mol}}{18{,}0\\ \\text{mol/L}} = 1{,}39 \\times 10^{-3}\\ \\text{L} = 1{,}39\\ \\text{mL}$$.", porque: "Despejamos el volumen de concentrado como $V = \\frac{n}{M}$, ya que el ácido de $18{,}0\\ \\text{M}$ debe aportar los $0{,}0250\\ \\text{mol}$. Con $\\frac{0{,}0250\\ \\text{mol}}{18{,}0\\ \\text{mol/L}} = 1{,}39 \\times 10^{-3}\\ \\text{L}$, que equivale a $1{,}39\\ \\text{mL}$. Ese volumen es muy pequeño y luego se completa hasta $250\\ \\text{mL}$ con agua, así que conviene verificar que sea menor que $250\\ \\text{mL}$." }
        ],
        resultado: "$1{,}39\\ \\text{mL}$ de acido concentrado (agregarlo sobre agua, no al reves)"
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
          { paso: "Disuelta a $40\\ \\text{C}$: $$\\frac{62{,}0\\ \\text{g}}{100\\ \\text{g de agua}} \\times 500\\ \\text{g de agua} = 310\\ \\text{g}$$ de $\\text{X}$.", porque: "Calculamos la masa disuelta a $40\\ \\text{C}$ escalando la solubilidad ($62{,}0\\ \\text{g}$ por $100\\ \\text{g de agua}$) a los $500\\ \\text{g de agua}$ del enunciado. Usamos el factor $\\frac{500}{100} = 5$, así que $62{,}0 \\times 5 = 310\\ \\text{g}$ de $\\text{X}$. La solubilidad siempre se refiere a $100\\ \\text{g}$ de solvente y no de solución, por eso el escalado se hace con el agua." },
          { paso: "Disuelta a $10\\ \\text{C}$: $$\\frac{25{,}0\\ \\text{g}}{100\\ \\text{g de agua}} \\times 500\\ \\text{g de agua} = 125\\ \\text{g}$$ de $\\text{X}$.", porque: "Escalamos la solubilidad a $10\\ \\text{C}$, que es $25{,}0\\ \\text{g}$ por $100\\ \\text{g de agua}$, a los mismos $500\\ \\text{g de agua}$: $25{,}0 \\times 5 = 125\\ \\text{g}$. Este valor es la cantidad máxima que la solución fría puede retener. Por eso lo usamos como referencia para saber cuánto precipita al enfriar." },
          { paso: "Cristalizan: $$310\\ \\text{g} - 125\\ \\text{g} = 185\\ \\text{g}$$ de $\\text{X}$.", porque: "Restamos la masa retenida a $10\\ \\text{C}$ ($125\\ \\text{g}$) de la masa disuelta a $40\\ \\text{C}$ ($310\\ \\text{g}$) para obtener lo que cristaliza: $310\\ \\text{g} - 125\\ \\text{g} = 185\\ \\text{g}$. Lo que excede la solubilidad a la temperatura final se separa como sólido. Este balance de masa responde directamente al apartado a)." },
          { paso: "Supuesto: no se evapora agua y el solido que cristaliza es $\\text{X}$ anhidro.", porque: "Explicitamos los supuestos del balance: no se evapora agua y el sólido que cristaliza es $\\text{X}$ anhidro. Sin ellos no se puede cerrar el balance de masa, porque una evaporación o la presencia de agua de hidratación cambiaría la masa de solvente o la del sólido. Con estos supuestos, el resultado de $185\\ \\text{g}$ es válido." }
        ],
        resultado: "$185\\ \\text{g}$ de $\\text{X}$ cristalizan"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Al bajar la temperatura disminuye la solubilidad: la solubilidad de $\\text{X}$ aumenta con la temperatura.", porque: "Comparamos las solubilidades: a $40\\ \\text{C}$ la solubilidad es $62{,}0\\ \\text{g}$ por $100\\ \\text{g de agua}$ y a $10\\ \\text{C}$ es $25{,}0\\ \\text{g}$. Como se disuelve más soluto a mayor temperatura, tenemos la base experimental para ver cómo varía la solubilidad con $T$. Entonces podemos clasificar el proceso de disolución según si absorbe o libera calor." },
          { paso: "Si la solubilidad aumenta con $T$, el proceso de disolucion absorbe calor: es endotermico ($\\Delta H_{\\text{disolucion}} > 0$).", porque: "Aplicamos el criterio de temperatura: si la solubilidad sube al aumentar $T$, la disolución se favorece al calentar, lo que indica que absorbe calor. Por eso el proceso es endotérmico, con $\\Delta H > 0$, y esto sigue el principio de Le Chatelier. Conviene verificar que el signo de $\\Delta H$ coincida con esa conclusión." }
        ],
        resultado: "Endotermico ($\\Delta H > 0$)"
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
          { paso: "$\\text{ppm}$ = mg de soluto por kg de solucion: $$2{,}50\\ \\text{mg/kg} \\times 0{,}500\\ \\text{kg} = 1{,}25\\ \\text{mg}$$ de $\\text{Fe}^{3+}$.", porque: "Multiplicamos la concentración en $\\text{ppm}$ ($2{,}50\\ \\text{mg/kg}$) por la masa de muestra en kilogramos ($0{,}500\\ \\text{kg}$) para obtener los mg de $\\text{Fe}^{3+}$. Usamos kg porque el $\\text{ppm}$ es una relación masa/masa, y con $500\\ \\text{g}$ el resultado sería 1000 veces mayor. Por eso $2{,}50 \\times 0{,}500 = 1{,}25\\ \\text{mg}$ de $\\text{Fe}^{3+}$ en la muestra." }
        ],
        resultado: "$1{,}25\\ \\text{mg}$ de $\\text{Fe}^{3+}$"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Supuesto: densidad $1{,}00\\ \\text{g/mL}$; entonces $1\\ \\text{kg}$ de muestra ocupa $1{,}00\\ \\text{L}$ y $$2{,}50\\ \\text{mg/kg} = 2{,}50\\ \\text{mg/L} = 2{,}50 \\times 10^{-3}\\ \\text{g/L}$$.", porque: "Usamos la densidad ($1{,}00\\ \\text{g/mL}$) para saber que $1\\ \\text{kg}$ de muestra ocupa $1{,}00\\ \\text{L}$, lo que permite pasar de $\\text{mg/kg}$ a $\\text{mg/L}$. Como el agua diluida tiene densidad cercana a $1\\ \\text{g/mL}$, el supuesto es razonable y hace que $2{,}50\\ \\text{mg/kg}$ equivalgan a $2{,}50\\ \\text{mg/L}$. Luego convertimos $2{,}50\\ \\text{mg/L}$ a $\\text{g/L}$ dividiendo por 1000, para que la unidad sea compatible con la masa molar." },
          { paso: "$$[\\text{Fe}^{3+}] = \\frac{2{,}50 \\times 10^{-3}\\ \\text{g/L}}{55{,}85\\ \\text{g/mol}} = 4{,}48 \\times 10^{-5}\\ \\text{M}$$.", porque: "Dividimos la concentración en $\\text{g/L}$ ($2{,}50 \\times 10^{-3}\\ \\text{g/L}$) por la masa molar del $\\text{Fe}$ ($55{,}85\\ \\text{g/mol}$), porque la molaridad es moles por litro y necesitamos moles. Con esa división obtenemos $4{,}48 \\times 10^{-5}\\ \\text{M}$ de $\\text{Fe}^{3+}$. Por eso el paso previo de pasar mg a g es indispensable: sin esa conversión el valor quedaría 1000 veces mayor." }
        ],
        resultado: "$4{,}48 \\times 10^{-5}\\ \\text{M}$"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "$\\text{ppm}$ = $\\text{mg/kg}$ de solucion; $\\text{mg/L}$ = mg por litro de solucion. Con densidad cercana a $1\\ \\text{g/mL}$, $1\\ \\text{kg}$ de solucion ocupa aproximadamente $1\\ \\text{L}$.", porque: "Comparamos las definiciones: $\\text{ppm}$ equivale a $\\text{mg/kg}$ de solución, y $\\text{mg/L}$ mide mg por litro de solución. Como la densidad es cercana a $1\\ \\text{g/mL}$, $1\\ \\text{kg}$ de solución ocupa aproximadamente $1\\ \\text{L}$, por eso ambas unidades coinciden numéricamente. Entonces la igualdad vale en soluciones diluidas y no en soluciones densas." }
        ],
        resultado: "$\\text{ppm} = \\text{mg/L}$ en soluciones diluidas porque la densidad es cercana a $1\\ \\text{g/mL}$"
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
          { paso: "$$n(\\text{Na}_2\\text{CO}_3) = 0{,}200\\ \\text{mol/L} \\times 0{,}250\\ \\text{L} = 0{,}0500\\ \\text{mol}$$.", porque: "Calculamos los moles de $\\text{Na}_2\\text{CO}_3$ con $n = M \\times V$, porque la molaridad se refiere al carbonato disuelto. Con $0{,}200\\ \\text{mol/L}$ y $0{,}250\\ \\text{L}$ obtenemos $0{,}0500\\ \\text{mol}$. Este valor es el dato base del cálculo, y el volumen debe estar en litros para que la unidad quede bien." },
          { paso: "$$m = 0{,}0500\\ \\text{mol} \\times 286{,}2\\ \\text{g/mol} = 14{,}3\\ \\text{g}$$ de $\\text{Na}_2\\text{CO}_3 \\cdot 10\\ \\text{H}_2\\text{O}$.", porque: "Convertimos los moles en masa multiplicando por la masa molar del $\\text{Na}_2\\text{CO}_3 \\cdot 10\\ \\text{H}_2\\text{O}$ ($286{,}2\\ \\text{g/mol}$), porque la sal se pesa con su agua de cristalización. Así $0{,}0500\\ \\text{mol} \\times 286{,}2\\ \\text{g/mol} = 14{,}3\\ \\text{g}$ de sal hidratada. Por eso hay que usar la masa molar del hidrato y no la del anhidro, ya que la masa pesada incluye el agua." }
        ],
        resultado: "$14{,}3\\ \\text{g}$ de sal hidratada"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Masa de agua en el hidrato: $$10 \\times 18{,}02\\ \\text{g/mol} = 180{,}2\\ \\text{g/mol}$$.", porque: "Multiplicamos las 10 moléculas de agua por la masa molar del agua ($18{,}02\\ \\text{g/mol}$) para hallar la masa de agua contenida en la fórmula. Como $10 \\times 18{,}02\\ \\text{g/mol} = 180{,}2\\ \\text{g/mol}$, esa masa es parte del sólido pesado aunque no sea $\\text{Na}_2\\text{CO}_3$. Entonces el agua de cristalización debe considerarse al interpretar la composición de la sal hidratada." },
          { paso: "$$\\% \\text{m/m de agua} = \\frac{180{,}2}{286{,}2} \\times 100 = 63{,}0\\ \\%$$.", porque: "Dividimos la masa de agua ($180{,}2\\ \\text{g/mol}$) por la masa molar total del hidrato ($286{,}2\\ \\text{g/mol}$) y multiplicamos por 100, porque el $\\% \\text{m/m}$ indica qué fracción de la masa de la sal hidratada corresponde al agua. Entonces $\\frac{180{,}2}{286{,}2} \\times 100 = 63{,}0\\ \\%$. Este valor muestra que más de la mitad del material pesado no es sal anhidra." }
        ],
        resultado: "$63{,}0\\ \\%$ de agua de cristalizacion"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "Calculo erroneo: $$n = \\frac{14{,}3\\ \\text{g}}{105{,}99\\ \\text{g/mol}} = 0{,}135\\ \\text{mol}$$; $M = \\frac{0{,}135\\ \\text{mol}}{0{,}250\\ \\text{L}} = 0{,}540\\ \\text{M}$.", porque: "Calculamos la molaridad errónea que resultaría si los $14{,}3\\ \\text{g}$ se tratan como $\\text{Na}_2\\text{CO}_3$ anhidro ($105{,}99\\ \\text{g/mol}$): dividimos la masa por la masa molar para obtener moles, y luego por el volumen de $0{,}250\\ \\text{L}$. Así obtenemos $\\frac{14{,}3\\ \\text{g}}{105{,}99\\ \\text{g/mol}} = 0{,}135\\ \\text{mol}$ y $0{,}540\\ \\text{M}$. Este resultado sirve de comparación para mostrar que el error proviene de usar una masa molar que no corresponde." },
          { paso: "La concentracion real es $0{,}200\\ \\text{M}$, porque el agua de cristalizacion no aporta $\\text{Na}_2\\text{CO}_3$ y debe usarse la masa molar del hidrato: $$\\frac{14{,}3\\ \\text{g}}{286{,}2\\ \\text{g/mol}} = 0{,}0500\\ \\text{mol}$$.", porque: "Usamos la masa molar del hidrato ($286{,}2\\ \\text{g/mol}$) para hallar los moles realmente presentes, porque el agua de cristalización no aporta $\\text{Na}_2\\text{CO}_3$. Con $\\frac{14{,}3\\ \\text{g}}{286{,}2\\ \\text{g/mol}} = 0{,}0500\\ \\text{mol}$, la molaridad correcta es $0{,}200\\ \\text{M}$. Por eso la masa molar debe corresponder al compuesto que se pesa y no al anhidro." }
        ],
        resultado: "Se obtendria $0{,}540\\ \\text{M}$, un valor 2,7 veces mayor al real ($0{,}200\\ \\text{M}$): calculo incorrecto"
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
          { paso: "$$m_{\\text{solucion concentrada}} = 60{,}0\\ \\text{mL} \\times 1{,}08\\ \\text{g/mL} = 64{,}8\\ \\text{g}$$; $m_{\\text{KCl}} = 0{,}120 \\times 64{,}8\\ \\text{g} = 7{,}78\\ \\text{g}$.", porque: "Multiplicamos el volumen de la solución concentrada ($60{,}0\\ \\text{mL}$) por su densidad ($1{,}08\\ \\text{g/mL}$) para obtener su masa: $60{,}0\\ \\text{mL} \\times 1{,}08\\ \\text{g/mL} = 64{,}8\\ \\text{g}$. Luego aplicamos el $12{,}0\\ \\% \\text{m/m}$ a esa masa, porque el porcentaje en masa se refiere a gramos de solución. Así obtenemos $7{,}78\\ \\text{g}$ de $\\text{KCl}$, y sin la densidad no sería posible hacer este cálculo." },
          { paso: "Masa de la mezcla final = $64{,}8\\ \\text{g} + 140\\ \\text{g} = 204{,}8\\ \\text{g}$; $$\\% \\text{m/m} = \\frac{7{,}776\\ \\text{g}}{204{,}8\\ \\text{g}} \\times 100 = 3{,}80\\ \\%$$.", porque: "Sumamos la masa de la solución concentrada ($64{,}8\\ \\text{g}$) y la del agua agregada ($140\\ \\text{g}$) para obtener la masa total de la mezcla: $204{,}8\\ \\text{g}$. Dividimos la masa de $\\text{KCl}$ ($7{,}776\\ \\text{g}$) por ese total y multiplicamos por 100, porque el denominador del $\\% \\text{m/m}$ final es toda la mezcla. Por eso el resultado es $3{,}80\\ \\% \\text{m/m}$, que incluye el agua agregada." }
        ],
        resultado: "$7{,}78\\ \\text{g}$ de $\\text{KCl}$; $3{,}80\\ \\% \\text{m/m}$"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "$$n(\\text{KCl}) = \\frac{7{,}776\\ \\text{g}}{74{,}55\\ \\text{g/mol}} = 0{,}1043\\ \\text{mol}$$; $V_{\\text{final}} = 60{,}0\\ \\text{mL} + 140\\ \\text{mL} = 200\\ \\text{mL} = 0{,}200\\ \\text{L}$.", porque: "Dividimos la masa de $\\text{KCl}$ ($7{,}776\\ \\text{g}$) por su masa molar ($74{,}55\\ \\text{g/mol}$) para obtener los moles, y sumamos $60{,}0\\ \\text{mL}$ y $140\\ \\text{mL}$ para el volumen final, suponiendo volúmenes aditivos. Con $\\frac{7{,}776\\ \\text{g}}{74{,}55\\ \\text{g/mol}} = 0{,}1043\\ \\text{mol}$ de $\\text{KCl}$ y $0{,}200\\ \\text{L}$ de mezcla. Ambos datos son necesarios porque la molaridad relaciona moles de soluto con el volumen total." },
          { paso: "$$M = \\frac{0{,}1043\\ \\text{mol}}{0{,}200\\ \\text{L}} = 0{,}522\\ \\text{M}$$.", porque: "Dividimos los moles de $\\text{KCl}$ ($0{,}1043\\ \\text{mol}$) por el volumen final en litros ($0{,}200\\ \\text{L}$), usando $M = \\frac{n}{V}$. Así obtenemos $0{,}522\\ \\text{M}$. La molaridad se refiere a la mezcla final y no a la solución concentrada, por eso el volumen del denominador es el de la mezcla completa." }
        ],
        resultado: "$0{,}522\\ \\text{M}$"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "Calculo erroneo: $$12{,}0\\ \\% \\times 60{,}0\\ \\text{g} = 7{,}20\\ \\text{g}$$ de $\\text{KCl}$; masa total $60{,}0\\ \\text{g} + 140\\ \\text{g} = 200\\ \\text{g}$; $\\% = \\frac{7{,}20}{200} \\times 100 = 3{,}60\\ \\%$.", porque: "Calculamos el resultado erróneo a propósito: $12{,}0\\ \\% \\times 60{,}0\\ \\text{g} = 7{,}20\\ \\text{g}$ de $\\text{KCl}$, tomando $60{,}0\\ \\text{g}$ como masa de la solución concentrada. Con esa masa total de $200\\ \\text{g}$, el porcentaje da $3{,}60\\ \\%$. Este cálculo sirve para comparar con el valor correcto y ver que, al ignorar la densidad, el $\\% \\text{m/m}$ queda subestimado." },
          { paso: "El error viene de que $60{,}0\\ \\text{mL}$ de solucion concentrada pesan $64{,}8\\ \\text{g}$, no $60{,}0\\ \\text{g}$: al ignorar la densidad se subestima la masa de $\\text{KCl}$ y la masa total.", porque: "Observamos que $60{,}0\\ \\text{mL}$ de la solución concentrada pesan $64{,}8\\ \\text{g}$ y no $60{,}0\\ \\text{g}$, lo que subestima tanto la masa de $\\text{KCl}$ como la masa total de la mezcla. Como el $\\% \\text{m/m}$ exige masas reales, el volumen debe convertirse a masa con la densidad antes de aplicar el porcentaje. Por eso el valor correcto es $3{,}80\\ \\%$." }
        ],
        resultado: "$3{,}60\\ \\%$ (incorrecto); el valor correcto es $3{,}80\\ \\%$"
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
          { paso: "Disociacion: $\\text{CuSO}_4\\ (\\text{s}) \\rightarrow \\text{Cu}^{2+} + \\text{SO}_4^{2-}$ (disociacion completa).", porque: "Escribimos la disociación del $\\text{CuSO}_4$ porque es una sal soluble que se separa completamente en $\\text{Cu}^{2+}$ y $\\text{SO}_4^{2-}$. Con estequiometría 1:1, cada fórmula libera un $\\text{Cu}^{2+}$ y un $\\text{SO}_4^{2-}$, así que este es el punto de partida para contar los iones. Por eso el paso siguiente puede calcular las concentraciones de cada especie a partir de la misma cantidad de sal." },
          { paso: "$n = \\frac{12{,}50\\ \\text{g}}{249{,}7\\ \\text{g/mol}} = 0{,}05006\\ \\text{mol}$ de $\\text{CuSO}_4 \\cdot 5\\ \\text{H}_2\\text{O}$; $$[\\text{CuSO}_4] = [\\text{Cu}^{2+}] = [\\text{SO}_4^{2-}] = \\frac{0{,}05006\\ \\text{mol}}{0{,}500\\ \\text{L}} = 0{,}1001\\ \\text{M}$$.", porque: "Dividimos la masa del hidrato ($12{,}50\\ \\text{g}$) por su masa molar ($249{,}7\\ \\text{g/mol}$) para obtener los moles, y luego por el volumen en litros ($0{,}500\\ \\text{L}$) para hallar la molaridad: $\\frac{0{,}05006\\ \\text{mol}}{0{,}500\\ \\text{L}} = 0{,}1001\\ \\text{M}$. Como cada mol de hidrato aporta un mol de $\\text{CuSO}_4$ y de cada ion, las tres concentraciones son iguales. Entonces $0{,}1001\\ \\text{M}$ es el valor que corresponde a $\\text{CuSO}_4$, $\\text{Cu}^{2+}$ y $\\text{SO}_4^{2-}$." },
          { paso: "$[\\text{Cu}^{2+}]$ en $\\text{mg/L}$ = $$0{,}1001\\ \\text{mol/L} \\times 63{,}55\\ \\text{g/mol} = 6{,}36\\ \\text{g/L} = 6{,}36 \\times 10^{3}\\ \\text{mg/L}$$.", porque: "Multiplicamos la molaridad de $\\text{Cu}^{2+}$ ($0{,}1001\\ \\text{mol/L}$) por su masa molar ($63{,}55\\ \\text{g/mol}$) para pasar a $\\text{g/L}$, y luego por 1000 para expresar el resultado en $\\text{mg/L}$. Así obtenemos $6{,}36\\ \\text{g/L} = 6{,}36 \\times 10^{3}\\ \\text{mg/L}$. Por eso la concentración en $\\text{mg/L}$ requiere que la masa del ion se exprese en mg y no en g." }
        ],
        resultado: "$0{,}1001\\ \\text{M}$ de $\\text{CuSO}_4$, $\\text{Cu}^{2+}$ y $\\text{SO}_4^{2-}$; $[\\text{Cu}^{2+}] = 6{,}36 \\times 10^{3}\\ \\text{mg/L}$"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Masa de $\\text{CuSO}_4$ anhidro = $$0{,}05006\\ \\text{mol} \\times 159{,}6\\ \\text{g/mol} = 7{,}990\\ \\text{g}$$ en $500\\ \\text{mL}$.", porque: "Multiplicamos los moles del hidrato ($0{,}05006\\ \\text{mol}$) por la masa molar del $\\text{CuSO}_4$ anhidro ($159{,}6\\ \\text{g/mol}$) para obtener la masa de sal anhidra: $7{,}990\\ \\text{g}$ en $500\\ \\text{mL}$. Solo la sal anhidra cuenta como soluto, porque el agua de cristalización no se disuelve como $\\text{CuSO}_4$. Por eso este valor es la masa de soluto que se usa en el porcentaje $\\text{m/V}$." },
          { paso: "$$\\% \\text{m/V} = \\frac{7{,}990\\ \\text{g}}{500\\ \\text{mL}} \\times 100 = 1{,}60\\ \\%$$.", porque: "Dividimos la masa de $\\text{CuSO}_4$ ($7{,}990\\ \\text{g}$) por el volumen ($500\\ \\text{mL}$) y multiplicamos por 100, porque el $\\% \\text{m/V}$ indica gramos de soluto cada $100\\ \\text{mL}$ de solución. Así obtenemos $1{,}60\\ \\% \\text{m/V}$, que expresa el soluto en la unidad propia de esta medida. Entonces $1{,}60\\ \\% \\text{m/V}$ es la concentración del $\\text{CuSO}_4$ anhidro en la solución madre." },
          { paso: "Justificacion: el hidrato pesa $249{,}7\\ \\text{g/mol}$, de los cuales $5 \\times 18{,}02 = 90{,}10\\ \\text{g/mol}$ son agua; el $\\text{CuSO}_4$ anhidro es solo $$\\frac{159{,}6}{249{,}7} = 63{,}9\\ \\%$$ de la masa del hidrato.", porque: "Calculamos la masa de agua de cristalización ($5 \\times 18{,}02 = 90{,}10\\ \\text{g/mol}$) y la fracción de $\\text{CuSO}_4$ anhidro en el hidrato ($\\frac{159{,}6}{249{,}7} = 63{,}9\\ \\%$). Así mostramos qué parte de la masa pesada es sal y cuál es agua. Por eso la masa del hidrato no coincide con la masa de soluto, y el valor de $63{,}9\\ \\%$ justifica usar la masa molar del anhidro." }
        ],
        resultado: "$1{,}60\\ \\% \\text{m/V}$ de $\\text{CuSO}_4$ anhidro"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "Moles en la alicuota: $$0{,}1001\\ \\text{mol/L} \\times 0{,}0200\\ \\text{L} = 2{,}002 \\times 10^{-3}\\ \\text{mol}$$ de $\\text{CuSO}_4$.", porque: "Multiplicamos la molaridad de la solución madre ($0{,}1001\\ \\text{mol/L}$) por el volumen de la alícuota ($0{,}0200\\ \\text{L}$) para obtener los moles de $\\text{CuSO}_4$ tomados: $2{,}002 \\times 10^{-3}\\ \\text{mol}$. Una alícuota tiene la misma concentración que la solución original, así que basta multiplicar por el volumen que se toma. Por eso este valor es la cantidad de sal que pasa a la dilución." },
          { paso: "$$[\\text{CuSO}_4]_{\\text{final}} = \\frac{2{,}002 \\times 10^{-3}\\ \\text{mol}}{0{,}250\\ \\text{L}} = 8{,}01 \\times 10^{-3}\\ \\text{M}$$.", porque: "Dividimos los moles de la alícuota ($2{,}002 \\times 10^{-3}\\ \\text{mol}$) por el volumen final de la dilución ($0{,}250\\ \\text{L}$), usando $M = \\frac{n}{V}$. Al diluir, el soluto se conserva y solo cambia el volumen, así que el resultado da la nueva concentración: $8{,}01 \\times 10^{-3}\\ \\text{M}$ de $\\text{CuSO}_4$. Este es el valor que pide el apartado c)." },
          { paso: "mg de $\\text{Cu}^{2+}$ en $20{,}0\\ \\text{mL}$ = $$2{,}002 \\times 10^{-3}\\ \\text{mol} \\times 63{,}55\\ \\text{g/mol} = 0{,}1272\\ \\text{g} = 127\\ \\text{mg}$$.", porque: "Multiplicamos los moles de $\\text{Cu}^{2+}$ de la alícuota ($2{,}002 \\times 10^{-3}\\ \\text{mol}$) por la masa molar del $\\text{Cu}$ ($63{,}55\\ \\text{g/mol}$), con lo que obtenemos $0{,}1272\\ \\text{g}$ y luego $127\\ \\text{mg}$. Los moles de $\\text{Cu}^{2+}$ no cambian al diluir, y la cantidad pedida corresponde a los $20{,}0\\ \\text{mL}$ originales que contiene la alícuota. Entonces la cantidad pedida es $127\\ \\text{mg}$ de $\\text{Cu}^{2+}$." }
        ],
        resultado: "$8{,}01 \\times 10^{-3}\\ \\text{M}$ de $\\text{CuSO}_4$ y $127\\ \\text{mg}$ de $\\text{Cu}^{2+}$"
      },
      {
        parte: "d)",
        pasos: [
          { paso: "Al evaporarse agua, el volumen de solucion disminuye, pero los moles de $\\text{Cu}^{2+}$ no cambian (el agua sale sin llevar soluto).", porque: "Analizamos que al evaporarse agua el solvente sale sin llevar soluto, así que los moles de $\\text{Cu}^{2+}$ se mantienen constantes mientras el volumen disminuye. La cantidad de sustancia disuelta solo cambia si se agrega o quita soluto, no por la pérdida de solvente. Por eso los moles de $\\text{Cu}^{2+}$ no cambian aunque la solución se concentre." },
          { paso: "Como $M = \\frac{n}{V}$ y $n$ no cambia mientras $V$ baja, la molaridad aumenta.", porque: "Aplicamos $M = \\frac{n}{V}$: si $n$ no cambia y $V$ disminuye, el cociente aumenta. La molaridad depende inversamente del volumen cuando el número de moles es constante, por eso la solución queda más concentrada. Entonces la molaridad aumenta, y conviene razonar con esta relación y no con la intuición." }
        ],
        resultado: "La molaridad aumenta; los moles de $\\text{Cu}^{2+}$ no cambian"
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
          { paso: "Cuento los atomos: a la izquierda $1\\ \\text{Al}$ y $2\\ \\text{O}$; a la derecha $2\\ \\text{Al}$ y $3\\ \\text{O}$.", porque: "Contamos los átomos de cada elemento a ambos lados para detectar cuáles no están igualados: aquí aparecen $\\text{Al}$ y $\\text{O}$. Usamos la conservación de la masa, porque ningún átomo se crea ni se destruye en la reacción, así que la cantidad de cada elemento debe ser igual antes y después. Por eso el balanceo consiste en ajustar coeficientes hasta que ambos lados coincidan." },
          { paso: "Igualo Al: $4\\ \\text{Al}$ a la izquierda y $2\\ \\text{Al}_2\\text{O}_3$ a la derecha ($4\\ \\text{Al}$).", porque: "Ajustamos el coeficiente del $\\text{Al}$ para igualar sus átomos: como cada fórmula de $\\text{Al}_2\\text{O}_3$ tiene 2 $\\text{Al}$, necesitamos 2 fórmulas para tener 4 $\\text{Al}$. Entonces el lado izquierdo queda con 4 $\\text{Al}$. Se cambian solo los coeficientes, porque los subíndices definen la sustancia; conviene volver a contar todos los elementos después de cada ajuste." },
          { paso: "Igualo O: $2\\ \\text{Al}_2\\text{O}_3$ tienen $6\\ \\text{O}$, y $3\\ \\text{O}_2$ aportan $6\\ \\text{O}$. Ecuacion: $$4\\ \\text{Al(s)} + 3\\ \\text{O}_2\\text{(g)} \\rightarrow 2\\ \\text{Al}_2\\text{O}_3\\text{(s)}$$", porque: "Ajustamos el coeficiente del $\\text{O}_2$ para igualar el oxígeno: $2\\ \\text{Al}_2\\text{O}_3$ tienen $6\\ \\text{O}$, y cada $\\text{O}_2$ aporta $2\\ \\text{O}$, así que hacen falta $3\\ \\text{O}_2$. Por eso la ecuación queda $4\\ \\text{Al(s)} + 3\\ \\text{O}_2\\text{(g)} \\rightarrow 2\\ \\text{Al}_2\\text{O}_3\\text{(s)}$. Al final revisamos que cada elemento tenga la misma cantidad a ambos lados, como exige la conservación de la masa." },
          { paso: "Clasificacion: sintesis (dos reactivos dan un solo producto). Tambien es redox: el $\\text{Al}$ pasa de $0$ a $+3$ y el $\\text{O}$ de $0$ a $-2$.", porque: "Identificamos el tipo de reacción: dos reactivos que dan un único producto corresponden a una síntesis. Además hay redox, porque el $\\text{Al}$ pasa de $0$ a $+3$ y el $\\text{O}$ de $0$ a $-2$, lo que indica transferencia de electrones. Por eso la reacción es síntesis y redox, y conviene revisar ambos criterios por separado." }
        ],
        resultado: "$4\\ \\text{Al(s)} + 3\\ \\text{O}_2\\text{(g)} \\rightarrow 2\\ \\text{Al}_2\\text{O}_3\\text{(s)}$; sintesis y redox"
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
          { paso: "$$n(\\text{C}_3\\text{H}_8) = \\frac{10{,}0\\ \\text{g}}{44{,}1\\ \\text{g/mol}} = 0{,}227\\ \\text{mol}$$.", porque: "Dividimos la masa de propano (10,0 g) por su masa molar (44,1 g/mol) para pasar a moles: $\\frac{10{,}0\\ \\text{g}}{44{,}1\\ \\text{g/mol}} = 0{,}227\\ \\text{mol}$. Lo hacemos así porque los coeficientes de la ecuación balanceada indican proporciones de moles y no de gramos. Conviene verificar que la masa molar sea la del $\\text{C}_3\\text{H}_8$ completo." },
          { paso: "Relacion molar: $1\\ \\text{mol}$ de $\\text{C}_3\\text{H}_8$ produce $3\\ \\text{mol}$ de $\\text{CO}_2$.", porque: "Leemos la relación molar directamente de los coeficientes: el $\\text{CO}_2$ tiene coeficiente 3 y el propano tiene coeficiente 1, así que $1\\ \\text{mol}$ de $\\text{C}_3\\text{H}_8$ produce $3\\ \\text{mol}$ de $\\text{CO}_2$. Esta es la base de la estequiometría, porque los coeficientes dan proporciones de moles y no de masas. Entonces el siguiente paso aplica esa proporción a los 0,227 mol de propano." },
          { paso: "$$n(\\text{CO}_2) = 3 \\times 0{,}227\\ \\text{mol} = 0{,}680\\ \\text{mol}$$.", porque: "Multiplicamos los moles de propano ($0{,}227\\ \\text{mol}$) por la relación molar 3 para obtener los moles de $\\text{CO}_2$: $n(\\text{CO}_2) = 3 \\times 0{,}227\\ \\text{mol} = 0{,}680\\ \\text{mol}$. Trabajamos sobre el propano porque el oxígeno está en exceso y el propano es el que determina la cantidad de producto. Por eso el resultado depende de la masa de propano y no del O2." },
          { paso: "$$m(\\text{CO}_2) = 0{,}680\\ \\text{mol} \\times 44{,}0\\ \\text{g/mol} = 29{,}9\\ \\text{g}$$.", porque: "Multiplicamos los moles de $\\text{CO}_2$ ($0{,}680\\ \\text{mol}$) por su masa molar ($44{,}0\\ \\text{g/mol}$) para expresar el resultado en gramos, usando $m = n \\times M$. Así obtenemos $29{,}9\\ \\text{g}$ de $\\text{CO}_2$. Es el paso inverso de la conversión inicial, y conviene verificar que el resultado sea coherente con la masa de propano de partida." }
        ],
        resultado: "$29{,}9\\ \\text{g}$ de $\\text{CO}_2$"
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
          { paso: "$$n(\\text{KClO}_3) = \\frac{24{,}5\\ \\text{g}}{122{,}5\\ \\text{g/mol}} = 0{,}200\\ \\text{mol}$$.", porque: "Dividimos la masa de $\\text{KClO}_3$ ($24{,}5\\ \\text{g}$) por su masa molar ($122{,}5\\ \\text{g/mol}$) para pasar a moles: $\\frac{24{,}5\\ \\text{g}}{122{,}5\\ \\text{g/mol}} = 0{,}200\\ \\text{mol}$. La estequiometría trabaja en moles, por eso la masa dada debe convertirse antes de usar los coeficientes. Entonces ya tenemos el dato base para relacionarlo con el oxígeno." },
          { paso: "$$n(\\text{O}_2) = 0{,}200\\ \\text{mol} \\times \\frac{3}{2} = 0{,}300\\ \\text{mol}$$ de $\\text{O}_2$.", porque: "Aplicamos la relación molar de la ecuación balanceada: $2\\ \\text{mol}$ de $\\text{KClO}_3$ producen $3\\ \\text{mol}$ de $\\text{O}_2$, así que los moles de oxígeno son ($\\frac{3}{2}$) veces los del clorato. Con $0{,}200\\ \\text{mol} \\times \\frac{3}{2}$ obtenemos $0{,}300\\ \\text{mol}$ de $\\text{O}_2$. Este cálculo conecta el reactivo con el producto, y el error más común es usar relación 1:1 en lugar de leer los coeficientes." },
          { paso: "$$V(\\text{O}_2) = 0{,}300\\ \\text{mol} \\times 22{,}4\\ \\text{L/mol} = 6{,}72\\ \\text{L}$$ en CNPT.", porque: "Pasamos los moles de $\\text{O}_2$ a volumen con el volumen molar de $22{,}4\\ \\text{L/mol}$, que vale en CNPT. Con $0{,}300\\ \\text{mol} \\times 22{,}4\\ \\text{L/mol}$ obtenemos $6{,}72\\ \\text{L}$ de $\\text{O}_2$. Este valor surge de $PV = nRT$ para un gas ideal en CNPT, así que conviene verificar que la condición sea CNPT antes de usarlo." }
        ],
        resultado: "$6{,}72\\ \\text{L}$ de $\\text{O}_2$ en CNPT"
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
          { paso: "Balanceo: $1\\ \\text{Zn}$, $1\\ \\text{Cu}$, $1\\ \\text{S}$ y $4\\ \\text{O}$ a cada lado; la ecuacion ya esta balanceada con coeficientes $1$.", porque: "Verificamos el balanceo contando cada elemento a ambos lados: $1\\ \\text{Zn}$, $1\\ \\text{Cu}$, $1\\ \\text{S}$ y $4\\ \\text{O}$. Como la conservación de la masa exige que los átomos se mantengan, la ecuación ya está balanceada con coeficientes 1. Por eso podemos asignar los números de oxidación sobre una ecuación correcta." },
          { paso: "Zn: $0$ en el metal $\\rightarrow$ $+2$ en $\\text{ZnSO}_4$ (se oxida, pierde $2\\ e^-$). Cu: $+2$ en $\\text{CuSO}_4$ $\\rightarrow$ $0$ en el $\\text{Cu}$ metalico (se reduce, gana $2\\ e^-$).", porque: "Comparamos los números de oxidación antes y después: el $\\text{Zn}$ pasa de $0$ a $+2$ y el $\\text{Cu}$ pasa de $+2$ a $0$. Si el número de oxidación sube hay oxidación, y si baja hay reducción, así que el $\\text{Zn}$ pierde $2\\ e^-$ y el $\\text{Cu}$ gana $2\\ e^-$. Entonces identificamos qué proceso sufre cada elemento." },
          { paso: "Agente reductor: $\\text{Zn}$ (se oxida y cede electrones). Agente oxidante: $\\text{Cu}^{2+}$ del $\\text{CuSO}_4$ (se reduce y acepta electrones).", porque: "Es una cuestión de definición: el oxidante acepta electrones (se reduce) y el reductor cede electrones (se oxida). Por eso el agente oxidante es el $\\text{Cu}^{2+}$ del $\\text{CuSO}_4$, que pasa de $+2$ a $0$, y el reductor es el $\\text{Zn}$, que pasa de $0$ a $+2$. Conviene verificar siempre con la variación del número de oxidación." }
        ],
        resultado: "$\\text{Zn}$: reductor ($0 \\rightarrow +2$); $\\text{Cu}^{2+}$: oxidante ($+2 \\rightarrow 0$)"
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
          { paso: "$$n(\\text{HCl}) = 0{,}200\\ \\text{mol/L} \\times 0{,}0500\\ \\text{L} = 0{,}0100\\ \\text{mol}$$.", porque: "Pasamos el volumen de $50{,}0\\ \\text{mL}$ a litros ($0{,}0500\\ \\text{L}$) y lo multiplicamos por la molaridad del $\\text{HCl}$: $0{,}200\\ \\text{mol/L} \\times 0{,}0500\\ \\text{L} = 0{,}0100\\ \\text{mol}$. Usamos litros porque $M$ es mol por litro, así que el volumen en mL debe convertirse antes de operar. Por eso el resultado queda en moles de HCl, que es lo que se necesita para la relación estequiométrica." },
          { paso: "Relacion 1:1 en la ecuacion: $0{,}0100\\ \\text{mol}$ de $\\text{HCl}$ necesitan $0{,}0100\\ \\text{mol}$ de $\\text{NaOH}$ y producen $0{,}0100\\ \\text{mol}$ de $\\text{NaCl}$.", porque: "Usamos la relación 1:1 de los coeficientes para saber cuántos moles de NaOH se necesitan y cuántos de NaCl se forman. Como $0{,}0100\\ \\text{mol}$ de $\\text{HCl}$ reaccionan con $0{,}0100\\ \\text{mol}$ de $\\text{NaOH}$ y producen $0{,}0100\\ \\text{mol}$ de $\\text{NaCl}$, la neutralización es completa. Entonces la masa del producto se calcula a partir de esos 0,0100 mol." },
          { paso: "$$m(\\text{NaCl}) = 0{,}0100\\ \\text{mol} \\times 58{,}5\\ \\text{g/mol} = 0{,}585\\ \\text{g}$$.", porque: "Multiplicamos los moles de $\\text{NaCl}$ ($0{,}0100\\ \\text{mol}$) por su masa molar ($58{,}5\\ \\text{g/mol}$) para pasar a gramos: $0{,}0100\\ \\text{mol} \\times 58{,}5\\ \\text{g/mol} = 0{,}585\\ \\text{g}$. Es la conversión final de moles a masa del producto. Conviene verificar que el resultado tenga un orden de magnitud acorde a la cantidad de reactivo." }
        ],
        resultado: "$0{,}585\\ \\text{g}$ de $\\text{NaCl}$ (reaccion de neutralizacion)"
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
          { paso: "$$n(\\text{Fe}) = \\frac{8{,}00\\ \\text{g}}{55{,}85\\ \\text{g/mol}} = 0{,}143\\ \\text{mol}$$; $n(\\text{S}) = \\frac{6{,}00\\ \\text{g}}{32{,}07\\ \\text{g/mol}} = 0{,}187\\ \\text{mol}$.", porque: "Dividimos cada masa por su masa molar para pasar a moles: $\\text{Fe}$ con $\\frac{8{,}00\\ \\text{g}}{55{,}85\\ \\text{g/mol}}$ y $\\text{S}$ con $\\frac{6{,}00\\ \\text{g}}{32{,}07\\ \\text{g/mol}}$. Así obtenemos $0{,}143\\ \\text{mol}$ de $\\text{Fe}$ y $0{,}187\\ \\text{mol}$ de $\\text{S}$. Comparamos en moles y no en gramos, porque la relación de la ecuación es entre moles y cada especie tiene su propia masa molar." },
          { paso: "Relacion 1:1: $0{,}143\\ \\text{mol}$ de $\\text{Fe}$ necesitan $0{,}143\\ \\text{mol}$ de $\\text{S}$. Hay $0{,}187\\ \\text{mol}$ de $\\text{S}$, asi que el $\\text{Fe}$ es el limitante y el $\\text{S}$ esta en exceso.", porque: "Comparamos los moles disponibles con la relación 1:1: el $\\text{Fe}$ necesita $0{,}143\\ \\text{mol}$ de $\\text{S}$ para reaccionar completamente, y hay $0{,}187\\ \\text{mol}$. Como el hierro se agota primero, es el reactivo limitante y el S queda en exceso. Dado que el Fe limita la reacción, el resto de los cálculos se hace a partir de sus moles." },
          { paso: "$$\\text{Exceso de } \\text{S} = (0{,}187 - 0{,}143)\\ \\text{mol} = 0{,}0439\\ \\text{mol}$$; $m = 0{,}0439\\ \\text{mol} \\times 32{,}07\\ \\text{g/mol} = 1{,}41\\ \\text{g}$.", porque: "Calculamos el exceso de $\\text{S}$ restando lo consumido ($0{,}143\\ \\text{mol}$) de lo disponible ($0{,}187\\ \\text{mol}$): $0{,}187 - 0{,}143 = 0{,}0439\\ \\text{mol}$. Luego lo pasamos a masa con la masa molar del $\\text{S}$: $0{,}0439\\ \\text{mol} \\times 32{,}07\\ \\text{g/mol} = 1{,}41\\ \\text{g}$. Por eso queda sin reaccionar $1{,}41\\ \\text{g}$ de azufre, y el reactivo limitante nunca queda en exceso." }
        ],
        resultado: "Limitante: $\\text{Fe}$; exceso de $\\text{S}$: $1{,}41\\ \\text{g}$"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "$$n(\\text{FeS})_{\\text{teorico}} = 0{,}143\\ \\text{mol}$$ (segun el $\\text{Fe}$); $m_{\\text{teorica}} = 0{,}143\\ \\text{mol} \\times 87{,}92\\ \\text{g/mol} = 12{,}6\\ \\text{g}$.", porque: "Calculamos el producto teórico a partir de los moles del reactivo limitante ($\\text{Fe}$): $0{,}143\\ \\text{mol}$ de $\\text{FeS}$, que luego se multiplican por la masa molar del $\\text{FeS}$ ($87{,}92\\ \\text{g/mol}$). Así obtenemos $12{,}6\\ \\text{g}$. El producto teórico siempre sale del limitante, porque es el reactivo que se consume primero." },
          { paso: "$$m_{\\text{real}} = 0{,}850 \\times 12{,}6\\ \\text{g} = 10{,}7\\ \\text{g}$$.", porque: "Multiplicamos el valor teórico ($12{,}6\\ \\text{g}$) por el rendimiento ($0{,}850$) para hallar la masa realmente obtenida: $0{,}850 \\times 12{,}6\\ \\text{g} = 10{,}7\\ \\text{g}$. El rendimiento es la fracción del producto teórico que se obtiene en la práctica, por eso se aplica sobre el valor del paso anterior. Así se obtiene el $\\text{FeS}$ que realmente se forma." }
        ],
        resultado: "$10{,}7\\ \\text{g}$ de $\\text{FeS}$"
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
          { paso: "$$m(\\text{CaCO}_3) = 0{,}840 \\times 12{,}5\\ \\text{g} = 10{,}5\\ \\text{g}$$.", porque: "Multiplicamos la masa de caliza ($12{,}5\\ \\text{g}$) por la pureza ($0{,}840$) para obtener la masa de $\\text{CaCO}_3$ puro: $0{,}840 \\times 12{,}5\\ \\text{g} = 10{,}5\\ \\text{g}$. La pureza indica qué fracción de la muestra es CaCO3, y solo esa parte reacciona y forma CO2. Por eso el resto de la caliza no debe considerarse en el cálculo." },
          { paso: "$$n(\\text{CaCO}_3) = \\frac{10{,}5\\ \\text{g}}{100{,}1\\ \\text{g/mol}} = 0{,}105\\ \\text{mol}$$.", porque: "Dividimos la masa de $\\text{CaCO}_3$ puro ($10{,}5\\ \\text{g}$) por su masa molar ($100{,}1\\ \\text{g/mol}$) para obtener los moles: $\\frac{10{,}5\\ \\text{g}}{100{,}1\\ \\text{g/mol}} = 0{,}105\\ \\text{mol}$. La estequiometría trabaja en moles, así que la masa corregida por pureza debe pasarse a moles antes de usar los coeficientes. Entonces tenemos el dato para la relación con el CO2." },
          { paso: "Relacion 1:1 con el $\\text{CO}_2$: $$n(\\text{CO}_2) = 0{,}105\\ \\text{mol}$$; $m(\\text{CO}_2) = 0{,}105\\ \\text{mol} \\times 44{,}0\\ \\text{g/mol} = 4{,}62\\ \\text{g}$.", porque: "Aplicamos la relación 1:1 de la ecuación, porque $1\\ \\text{mol}$ de $\\text{CaCO}_3$ produce $1\\ \\text{mol}$ de $\\text{CO}_2$. Así $n(\\text{CO}_2) = 0{,}105\\ \\text{mol}$, y multiplicando por la masa molar del $\\text{CO}_2$ ($44{,}0\\ \\text{g/mol}$) obtenemos $4{,}62\\ \\text{g}$. El $\\text{HCl}$ está en exceso y no limita la cantidad de $\\text{CO}_2$, por eso el cálculo sale del carbonato." }
        ],
        resultado: "$4{,}62\\ \\text{g}$ de $\\text{CO}_2$"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "$$V = \\frac{nRT}{P} = \\frac{0{,}105\\ \\text{mol} \\times 0{,}0821\\ \\text{L atm/(mol K)} \\times 298\\ \\text{K}}{1\\ \\text{atm}} = 2{,}57\\ \\text{L}$$.", porque: "Usamos la ecuación de gases ideales $V = \\frac{nRT}{P}$ con la temperatura en kelvin ($298\\ \\text{K}$), porque el gas no está en CNPT. Con $0{,}105\\ \\text{mol}$, $0{,}0821\\ \\text{L atm/(mol K)}$, $298\\ \\text{K}$ y $1\\ \\text{atm}$ obtenemos $2{,}57\\ \\text{L}$ de $\\text{CO}_2$. Por eso el volumen de $22{,}4\\ \\text{L/mol}$ no sirve a 25 C, y conviene verificar que $T$ esté en $\\text{K}$." }
        ],
        resultado: "$2{,}57\\ \\text{L}$ de $\\text{CO}_2$ a 25 C y $1\\ \\text{atm}$"
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
          { paso: "Semirreacciones: $\\text{MnO}_4^{-} \\rightarrow \\text{Mn}^{2+}$ (Mn pasa de $+7$ a $+2$, gana $5\\ \\text{e}^{-}$) y $\\text{Fe}^{2+} \\rightarrow \\text{Fe}^{3+}$ (pierde $1\\ \\text{e}^{-}$).", porque: "Identificamos el cambio de número de oxidación en cada semirreacción: el Mn pasa de $+7$ a $+2$ (gana $5\\ \\text{e}^{-}$) y el Fe pasa de $+2$ a $+3$ (pierde $1\\ \\text{e}^{-}$). Como el método ion-electron separa oxidación y reducción, podemos igualar electrones en cada una por separado. Por eso los números de oxidación indican cuántos electrones participan en cada semirreacción." },
          { paso: "Medio acido: $$\\text{MnO}_4^{-} + 8\\ \\text{H}^{+} + 5\\ \\text{e}^{-} \\rightarrow \\text{Mn}^{2+} + 4\\ \\text{H}_2\\text{O}$$ (O igualado con $\\text{H}_2\\text{O}$, H igualado con $\\text{H}^{+}$).", porque: "Igualamos el O con $\\text{H}_2\\text{O}$ y el H con $\\text{H}^{+}$, porque el enunciado indica medio ácido. Luego sumamos $5\\ \\text{e}^{-}$ para igualar las cargas: a la izquierda hay $-1 + 8 = +7$ y los $5\\ \\text{e}^{-}$ la llevan a $+2$, igual que la derecha. Verificar la carga antes de seguir es la forma de detectar errores en la semirreacción." },
          { paso: "Multiplico la semirreaccion del Fe por 5: $5\\ \\text{Fe}^{2+} \\rightarrow 5\\ \\text{Fe}^{3+} + 5\\ \\text{e}^{-}$. Sumo: $$\\text{MnO}_4^{-} + 5\\ \\text{Fe}^{2+} + 8\\ \\text{H}^{+} \\rightarrow \\text{Mn}^{2+} + 5\\ \\text{Fe}^{3+} + 4\\ \\text{H}_2\\text{O}$$.", porque: "Multiplicamos la semirreacción del Fe por 5 para que los $5\\ \\text{e}^{-}$ perdidos igualen a los $5\\ \\text{e}^{-}$ ganados, y así se cancelen al sumar. Como resultado queda $\\text{MnO}_4^{-} + 5\\ \\text{Fe}^{2+} + 8\\ \\text{H}^{+} \\rightarrow \\text{Mn}^{2+} + 5\\ \\text{Fe}^{3+} + 4\\ \\text{H}_2\\text{O}$. Verificamos con la carga total: $-1 + 5 \\times 2 + 8 = +17$ a la izquierda y $+2 + 5 \\times 3 = +17$ a la derecha." },
          { paso: "Agente oxidante: $\\text{MnO}_4^{-}$ (contiene el Mn que se reduce).", porque: "Identificamos el agente oxidante como la especie que se reduce: el $\\text{MnO}_4^{-}$ contiene el Mn que pasa de $+7$ a $+2$ y acepta electrones. Por definición, el oxidante es el reactivo que se reduce, mientras que el $\\text{Fe}^{2+}$ es el reductor porque cede electrones. Entonces el agente oxidante es el $\\text{MnO}_4^{-}$." }
        ],
        resultado: "$\\text{MnO}_4^{-} + 5\\ \\text{Fe}^{2+} + 8\\ \\text{H}^{+} \\rightarrow \\text{Mn}^{2+} + 5\\ \\text{Fe}^{3+} + 4\\ \\text{H}_2\\text{O}$; oxidante: $\\text{MnO}_4^{-}$"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "$$n(\\text{MnO}_4^{-}) = 0{,}0200\\ \\text{mol/L} \\times 0{,}0250\\ \\text{L} = 5{,}00 \\times 10^{-4}\\ \\text{mol}$$.", porque: "Multiplicamos la molaridad ($0{,}0200\\ \\text{mol/L}$) por el volumen en litros ($0{,}0250\\ \\text{L}$) para obtener los moles de $\\text{MnO}_4^{-}$, usando $n = M \\times V$. Como el $\\text{KMnO}_4$ aporta un $\\text{MnO}_4^{-}$ por fórmula, $5{,}00 \\times 10^{-4}\\ \\text{mol}$ es la cantidad de permanganato que hay que reducir. Esos moles son el dato base para aplicar la relación de la ecuación." },
          { paso: "Relacion 1:5: $$n(\\text{Fe}^{2+}) = 5 \\times 5{,}00 \\times 10^{-4}\\ \\text{mol} = 2{,}50 \\times 10^{-3}\\ \\text{mol}$$.", porque: "Aplicamos la relación molar de la ecuación balanceada: $1\\ \\text{mol}$ de $\\text{MnO}_4^{-}$ reacciona con $5\\ \\text{mol}$ de $\\text{Fe}^{2+}$, por eso los moles de permanganato se multiplican por 5. Así $n(\\text{Fe}^{2+}) = 5 \\times 5{,}00 \\times 10^{-4}\\ \\text{mol} = 2{,}50 \\times 10^{-3}\\ \\text{mol}$. Usar 1:1 sería un error, porque los coeficientes reflejan los 5 electrones intercambiados." },
          { paso: "$$m(\\text{Fe}^{2+}) = 2{,}50 \\times 10^{-3}\\ \\text{mol} \\times 55{,}85\\ \\text{g/mol} = 0{,}140\\ \\text{g}$$.", porque: "Multiplicamos los moles de $\\text{Fe}^{2+}$ ($2{,}50 \\times 10^{-3}\\ \\text{mol}$) por su masa molar ($55{,}85\\ \\text{g/mol}$) para pasar a gramos, y así obtenemos $0{,}140\\ \\text{g}$. Esa es la masa de hierro necesaria para reducir todo el permanganato. Conviene verificar el orden de magnitud contra la concentración de partida." }
        ],
        resultado: "$0{,}140\\ \\text{g}$ de $\\text{Fe}^{2+}$"
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
          { paso: "Balanceo: $\\text{H}_2\\text{SO}_4 + 2\\ \\text{NaOH} \\rightarrow \\text{Na}_2\\text{SO}_4 + 2\\ \\text{H}_2\\text{O}$.", porque: "Igualamos los átomos del ácido y de la base: el $\\text{H}_2\\text{SO}_4$ tiene 2 H que deben neutralizarse con $2\\ \\text{OH}^{-}$ de la base, por eso el coeficiente del $\\text{NaOH}$ es 2. Con $\\text{H}_2\\text{SO}_4 + 2\\ \\text{NaOH} \\rightarrow \\text{Na}_2\\text{SO}_4 + 2\\ \\text{H}_2\\text{O}$ quedan iguales Na, H, S y O a ambos lados. Verificar el balanceo contando cada elemento es el paso que confirma el coeficiente." },
          { paso: "$$n(\\text{H}_2\\text{SO}_4) = 0{,}100\\ \\text{mol/L} \\times 0{,}0250\\ \\text{L} = 2{,}50 \\times 10^{-3}\\ \\text{mol}$$; $n(\\text{NaOH}) = 2 \\times 2{,}50 \\times 10^{-3}\\ \\text{mol} = 5{,}00 \\times 10^{-3}\\ \\text{mol}$.", porque: "Calculamos los moles de $\\text{H}_2\\text{SO}_4$ con $0{,}100\\ \\text{mol/L} \\times 0{,}0250\\ \\text{L} = 2{,}50 \\times 10^{-3}\\ \\text{mol}$, y luego los multiplicamos por 2, porque la relación 1:2 exige $2\\ \\text{mol}$ de $\\text{NaOH}$ por cada mol de ácido. Así $n(\\text{NaOH}) = 2 \\times 2{,}50 \\times 10^{-3}\\ \\text{mol} = 5{,}00 \\times 10^{-3}\\ \\text{mol}$. Esos moles de base salen de la estequiometría y no de igualar volúmenes." },
          { paso: "$$[\\text{NaOH}] = \\frac{5{,}00 \\times 10^{-3}\\ \\text{mol}}{0{,}0400\\ \\text{L}} = 0{,}125\\ \\text{M}$$.", porque: "Dividimos los moles de $\\text{NaOH}$ ($5{,}00 \\times 10^{-3}\\ \\text{mol}$) por el volumen de base gastado ($0{,}0400\\ \\text{L}$), porque $M = \\frac{n}{V}$. Así obtenemos $[\\text{NaOH}] = 0{,}125\\ \\text{M}$. El volumen del denominador es el de la base y no el de la muestra de ácido, por eso se usan los $40{,}0\\ \\text{mL}$." }
        ],
        resultado: "$[\\text{NaOH}] = 0{,}125\\ \\text{M}$"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "$$n(\\text{Na}_2\\text{SO}_4) = n(\\text{H}_2\\text{SO}_4) = 2{,}50 \\times 10^{-3}\\ \\text{mol}$$ (relacion 1:1).", porque: "Aplicamos la relación 1:1 entre $\\text{H}_2\\text{SO}_4$ y $\\text{Na}_2\\text{SO}_4$ que dan los coeficientes de la ecuación balanceada: cada mol de ácido forma un mol de sal. Por eso $n(\\text{Na}_2\\text{SO}_4) = 2{,}50 \\times 10^{-3}\\ \\text{mol}$, siempre que todo el ácido se neutralice, como indica el enunciado. Esto permite pasar directamente a la masa de sal." },
          { paso: "$$m = 2{,}50 \\times 10^{-3}\\ \\text{mol} \\times 142{,}0\\ \\text{g/mol} = 0{,}355\\ \\text{g}$$.", porque: "Multiplicamos los moles de $\\text{Na}_2\\text{SO}_4$ ($2{,}50 \\times 10^{-3}\\ \\text{mol}$) por su masa molar ($142{,}0\\ \\text{g/mol}$) para pasar a gramos: $0{,}355\\ \\text{g}$. Es la conversión final de moles a masa del producto. Conviene verificar que se use la masa molar de la sal completa." }
        ],
        resultado: "$0{,}355\\ \\text{g}$ de $\\text{Na}_2\\text{SO}_4$"
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
          { paso: "Balanceo: $2\\ \\text{C}_4\\text{H}_{10} + 13\\ \\text{O}_2 \\rightarrow 8\\ \\text{CO}_2 + 10\\ \\text{H}_2\\text{O}$ (C: $8 = 8$; H: $20 = 20$; O: $26 = 16 + 10$).", porque: "Igualamos primero C e H, que aparecen cada uno en un solo compuesto de cada lado, y al final el $\\text{O}_2$, porque el oxígeno aparece en $\\text{CO}_2$ y en $\\text{H}_2\\text{O}$. Así evitamos fijar el coeficiente del $\\text{O}_2$ antes de tiempo. Verificamos C $8 = 8$, H $20 = 20$ y O $16 + 10 = 26$, con lo que la ecuación $2\\ \\text{C}_4\\text{H}_{10} + 13\\ \\text{O}_2 \\rightarrow 8\\ \\text{CO}_2 + 10\\ \\text{H}_2\\text{O}$ queda balanceada." },
          { paso: "$$n(\\text{C}_4\\text{H}_{10}) = \\frac{5{,}80\\ \\text{g}}{58{,}1\\ \\text{g/mol}} = 0{,}0998\\ \\text{mol}$$; $n(\\text{CO}_2) = 0{,}0998\\ \\text{mol} \\times \\frac{8}{2} = 0{,}399\\ \\text{mol}$.", porque: "Calculamos los moles de butano con $\\frac{5{,}80\\ \\text{g}}{58{,}1\\ \\text{g/mol}} = 0{,}0998\\ \\text{mol}$, y luego los multiplicamos por $\\frac{8}{2}$ según los coeficientes 2 y 8 de la ecuación balanceada. Así obtenemos $n(\\text{CO}_2) = 0{,}399\\ \\text{mol}$. Usamos el butano como reactivo de referencia porque es el dato del enunciado." },
          { paso: "$$m(\\text{CO}_2) = 0{,}399\\ \\text{mol} \\times 44{,}0\\ \\text{g/mol} = 17{,}6\\ \\text{g}$$.", porque: "Multiplicamos los moles de $\\text{CO}_2$ ($0{,}399\\ \\text{mol}$) por su masa molar ($44{,}0\\ \\text{g/mol}$) para pasar a gramos: $0{,}399\\ \\text{mol} \\times 44{,}0\\ \\text{g/mol} = 17{,}6\\ \\text{g}$. Es el mismo criterio de conversión de moles a masa que en los ejercicios anteriores, aplicado ahora al producto." }
        ],
        resultado: "$17{,}6\\ \\text{g}$ de $\\text{CO}_2$"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "$$n(\\text{O}_2) = 0{,}0998\\ \\text{mol} \\times \\frac{13}{2} = 0{,}649\\ \\text{mol}$$ de $\\text{O}_2$.", porque: "Multiplicamos los moles de butano ($0{,}0998\\ \\text{mol}$) por $\\frac{13}{2}$ para obtener los moles de $\\text{O}_2$, porque la ecuación balanceada indica 13 $\\text{O}_2$ por cada 2 butanos. Así $n(\\text{O}_2) = 0{,}649\\ \\text{mol}$. Cada mol de butano necesita $6{,}5\\ \\text{mol}$ de $\\text{O}_2$ para la combustión completa." },
          { paso: "$$V(\\text{O}_2) = 0{,}649\\ \\text{mol} \\times 22{,}4\\ \\text{L/mol} = 14{,}5\\ \\text{L}$$ en CNPT; $V(\\text{aire}) = \\frac{14{,}5\\ \\text{L}}{0{,}21} = 69{,}2\\ \\text{L}$.", porque: "Calculamos el volumen de $\\text{O}_2$ con $22{,}4\\ \\text{L/mol}$ (CNPT) y luego lo dividimos por $0{,}21$, porque el $\\text{O}_2$ es solo el $21\\ \\%$ del aire en volumen. Así $V(\\text{O}_2) = 14{,}5\\ \\text{L}$ y $V(\\text{aire}) = 69{,}2\\ \\text{L}$. La fracción volumétrica permite pasar del volumen de oxígeno al volumen de aire, que siempre debe ser mayor." }
        ],
        resultado: "$69{,}2\\ \\text{L}$ de aire en CNPT"
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
          { paso: "Balanceo: $2\\ \\text{ZnS} + 3\\ \\text{O}_2 \\rightarrow 2\\ \\text{ZnO} + 2\\ \\text{SO}_2$ (Zn y S: $2 = 2$; O: $6 = 2 + 4$).", porque: "Igualamos primero Zn y S, que aparecen en un solo reactivo y un solo producto cada uno, y luego el $\\text{O}_2$, porque el oxígeno aparece en $\\text{ZnO}$ y en $\\text{SO}_2$. Así la ecuación queda $2\\ \\text{ZnS} + 3\\ \\text{O}_2 \\rightarrow 2\\ \\text{ZnO} + 2\\ \\text{SO}_2$. Verificamos Zn $2 = 2$, S $2 = 2$ y O $6 = 2 + 4$." },
          { paso: "$m(\\text{ZnS puro}) = 0{,}850 \\times 30{,}0\\ \\text{g} = 25{,}5\\ \\text{g}$; $$n(\\text{ZnS}) = \\frac{25{,}5\\ \\text{g}}{97{,}45\\ \\text{g/mol}} = 0{,}2617\\ \\text{mol}$$.", porque: "Multiplicamos la masa de mineral ($30{,}0\\ \\text{g}$) por la pureza ($0{,}850$) para hallar la masa de $\\text{ZnS}$ puro: $0{,}850 \\times 30{,}0\\ \\text{g} = 25{,}5\\ \\text{g}$. Luego la pasamos a moles con su masa molar ($97{,}45\\ \\text{g/mol}$), es decir $0{,}2617\\ \\text{mol}$. Solo el $\\text{ZnS}$ reacciona, así que la masa debe corregirse antes de usar la estequiometría." },
          { paso: "$n(\\text{ZnO teorico}) = n(\\text{ZnS}) = 0{,}2617\\ \\text{mol}$ (relacion 2:2); $$m = 0{,}2617\\ \\text{mol} \\times 81{,}38\\ \\text{g/mol} = 21{,}3\\ \\text{g}$$.", porque: "Aplicamos la relación 2:2 (1:1) de la ecuación para hallar los moles de $\\text{ZnO}$ teóricos, que son $0{,}2617\\ \\text{mol}$. Luego los multiplicamos por su masa molar ($81{,}38\\ \\text{g/mol}$) y obtenemos $21{,}3\\ \\text{g}$. Este valor es el producto teórico, es decir lo que se obtendría con rendimiento de $100\\ \\%$, y sirve de referencia para el apartado b)." }
        ],
        resultado: "$2\\ \\text{ZnS} + 3\\ \\text{O}_2 \\rightarrow 2\\ \\text{ZnO} + 2\\ \\text{SO}_2$; $21{,}3\\ \\text{g}$ de ZnO teorico"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Rendimiento = $$\\frac{17{,}5\\ \\text{g}}{21{,}3\\ \\text{g}} \\times 100 = 82{,}2\\ \\%$$.", porque: "Dividimos la masa obtenida experimentalmente ($17{,}5\\ \\text{g}$) por la masa teórica ($21{,}3\\ \\text{g}$) y multiplicamos por 100, así que $\\frac{17{,}5}{21{,}3} \\times 100 = 82{,}2\\ \\%$. El rendimiento compara lo que se obtuvo en la práctica con lo que predice la estequiometría. Por eso el valor queda expresado en porcentaje." }
        ],
        resultado: "$82{,}2\\ \\%$"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "Los $30{,}0\\ \\text{g}$ incluyen $15\\ \\%$ de impurezas que no reaccionan ni forman $\\text{ZnO}$; usar esa masa sobrestimaria el producto teorico.", porque: "Explicamos que los $30{,}0\\ \\text{g}$ incluyen un $15\\ \\%$ de impurezas que no reaccionan ni forman $\\text{ZnO}$. Por eso usar esa masa sobreestimaría el producto teórico, ya que la estequiometría solo puede aplicarse a la sustancia que reacciona. Entonces el cálculo se hace con el $\\text{ZnS}$ puro, que corresponde a $25{,}5\\ \\text{g}$." }
        ],
        resultado: "Por las impurezas ($15\\ \\%$) que no reaccionan"
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
          { paso: "Semirreacciones: reduccion $\\text{MnO}_4^{-} \\rightarrow \\text{MnO}_2$ (Mn pasa de $+7$ a $+4$, gana $3\\ \\text{e}^{-}$); oxidacion $\\text{SO}_3^{2-} \\rightarrow \\text{SO}_4^{2-}$ (S pasa de $+4$ a $+6$, pierde $2\\ \\text{e}^{-}$).", porque: "Determinamos el cambio de número de oxidación: en la reducción el Mn pasa de $+7$ a $+4$ (gana $3\\ \\text{e}^{-}$), y en la oxidación el S pasa de $+4$ a $+6$ (pierde $2\\ \\text{e}^{-}$). Estos números indican cuántos electrones se transfieren en cada semirreacción. Por eso son el punto de partida para igualar electrones." },
          { paso: "Medio basico: reduccion $$\\text{MnO}_4^{-} + 2\\ \\text{H}_2\\text{O} + 3\\ \\text{e}^{-} \\rightarrow \\text{MnO}_2 + 4\\ \\text{OH}^{-}$$; oxidacion $\\text{SO}_3^{2-} + 2\\ \\text{OH}^{-} \\rightarrow \\text{SO}_4^{2-} + \\text{H}_2\\text{O} + 2\\ \\text{e}^{-}$.", porque: "Usamos medio básico, así que el oxígeno se iguala con $\\text{H}_2\\text{O}$ y el hidrógeno con $\\text{OH}^{-}$, y no con $\\text{H}^{+}$ como en medio ácido. En la reducción se consumen $2\\ \\text{H}_2\\text{O}$ y se producen $4\\ \\text{OH}^{-}$, mientras que en la oxidación se consumen $2\\ \\text{OH}^{-}$. Verificar que el medio coincida con el enunciado evita errores de balanceo." },
          { paso: "Igualo electrones ($2 \\times$ reduccion + $3 \\times$ oxidacion, $6\\ \\text{e}^{-}$ cada uno) y sumo; simplifico las $\\text{H}_2\\text{O}$ y los $\\text{OH}^{-}$: $$2\\ \\text{MnO}_4^{-} + 3\\ \\text{SO}_3^{2-} + \\text{H}_2\\text{O} \\rightarrow 2\\ \\text{MnO}_2 + 3\\ \\text{SO}_4^{2-} + 2\\ \\text{OH}^{-}$$.", porque: "Multiplicamos la reducción por 2 y la oxidación por 3 para que cada una tenga $6\\ \\text{e}^{-}$, y luego las sumamos. Las $\\text{H}_2\\text{O}$ y los $\\text{OH}^{-}$ que aparecen en ambos lados se cancelan, dejando $1\\ \\text{H}_2\\text{O}$ a la izquierda y $2\\ \\text{OH}^{-}$ a la derecha. Así los electrones ganados quedan iguales a los perdidos." }
        ],
        resultado: "$2\\ \\text{MnO}_4^{-} + 3\\ \\text{SO}_3^{2-} + \\text{H}_2\\text{O} \\rightarrow 2\\ \\text{MnO}_2(\\text{s}) + 3\\ \\text{SO}_4^{2-} + 2\\ \\text{OH}^{-}$"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "$$n(\\text{SO}_3^{2-}) = \\frac{0{,}300\\ \\text{g}}{126{,}0\\ \\text{g/mol}} = 2{,}38 \\times 10^{-3}\\ \\text{mol}$$.", porque: "Dividimos la masa de $\\text{Na}_2\\text{SO}_3$ ($0{,}300\\ \\text{g}$) por su masa molar ($126{,}0\\ \\text{g/mol}$) para obtener los moles de $\\text{SO}_3^{2-}$: $2{,}38 \\times 10^{-3}\\ \\text{mol}$. Como cada fórmula de $\\text{Na}_2\\text{SO}_3$ aporta 1 $\\text{SO}_3^{2-}$, esos moles son los del ion sulfito que se oxida. Este es el dato base para la relación con el permanganato." },
          { paso: "Relacion 2:3: $$n(\\text{MnO}_4^{-}) = \\frac{2}{3} \\times 2{,}38 \\times 10^{-3}\\ \\text{mol} = 1{,}59 \\times 10^{-3}\\ \\text{mol}$$.", porque: "Aplicamos la relación de la ecuación balanceada: $2\\ \\text{mol}$ de $\\text{MnO}_4^{-}$ reaccionan con $3\\ \\text{mol}$ de $\\text{SO}_3^{2-}$, así que los moles de permanganato son $\\frac{2}{3}$ de los de sulfito. Con $\\frac{2}{3} \\times 2{,}38 \\times 10^{-3}\\ \\text{mol}$ obtenemos $1{,}59 \\times 10^{-3}\\ \\text{mol}$. La proporción sale de los coeficientes y no de una relación 1:1." },
          { paso: "$$V = \\frac{1{,}59 \\times 10^{-3}\\ \\text{mol}}{0{,}0200\\ \\text{mol/L}} = 0{,}0794\\ \\text{L} = 79{,}4\\ \\text{mL}$$.", porque: "Despejamos el volumen de la solución como $V = \\frac{n}{M}$, a partir de $M = \\frac{n}{V}$, con $n = 1{,}59 \\times 10^{-3}\\ \\text{mol}$ y $M = 0{,}0200\\ \\text{mol/L}$. Así $V = 0{,}0794\\ \\text{L}$, que equivale a $79{,}4\\ \\text{mL}$ de solución de $\\text{KMnO}_4$. Conviene verificar que el resultado en L se pase correctamente a mL." }
        ],
        resultado: "$79{,}4\\ \\text{mL}$ de $\\text{KMnO}_4$ $0{,}0200\\ \\text{M}$"
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
          { paso: "Balanceo: $\\text{Na}_2\\text{CO}_3 + 2\\ \\text{HCl} \\rightarrow 2\\ \\text{NaCl} + \\text{CO}_2 + \\text{H}_2\\text{O}$.", porque: "Igualamos primero el sodio: el $\\text{Na}_2\\text{CO}_3$ aporta 2 $\\text{Na}$ que pasan a $2\\ \\text{NaCl}$, lo que fija 2 HCl. El H del ácido se reparte entre el $\\text{CO}_2$ y el $\\text{H}_2\\text{O}$, y por eso la ecuación $\\text{Na}_2\\text{CO}_3 + 2\\ \\text{HCl} \\rightarrow 2\\ \\text{NaCl} + \\text{CO}_2 + \\text{H}_2\\text{O}$ queda balanceada. Verificamos contando C, O, H, Na y Cl a ambos lados." },
          { paso: "$$n(\\text{Na}_2\\text{CO}_3) = \\frac{0{,}920 \\times 15{,}0\\ \\text{g}}{105{,}99\\ \\text{g/mol}} = 0{,}1302\\ \\text{mol}$$; $n(\\text{HCl}) = 1{,}50\\ \\text{mol/L} \\times 0{,}200\\ \\text{L} = 0{,}300\\ \\text{mol}$.", porque: "Corregimos la masa de carbonato por pureza, $0{,}920 \\times 15{,}0\\ \\text{g}$, y la dividimos por su masa molar ($105{,}99\\ \\text{g/mol}$), lo que da $0{,}1302\\ \\text{mol}$. Los moles de HCl se calculan como molaridad por litros: $1{,}50\\ \\text{mol/L} \\times 0{,}200\\ \\text{L} = 0{,}300\\ \\text{mol}$. Primero corregimos por pureza porque solo el carbonato puro reacciona." },
          { paso: "$\\text{HCl}$ necesario = $$2 \\times 0{,}1302\\ \\text{mol} = 0{,}2604\\ \\text{mol}$$, menor que $0{,}300\\ \\text{mol}$ disponibles: el $\\text{Na}_2\\text{CO}_3$ es el limitante y el $\\text{HCl}$ queda en exceso = $0{,}300 - 0{,}2604 = 0{,}0396\\ \\text{mol}$.", porque: "Calculamos el $\\text{HCl}$ necesario, $2 \\times 0{,}1302\\ \\text{mol} = 0{,}2604\\ \\text{mol}$, y lo comparamos con los $0{,}300\\ \\text{mol}$ disponibles. Como el $\\text{Na}_2\\text{CO}_3$ se agota primero, es el reactivo limitante. El exceso de HCl es lo disponible menos lo consumido: $0{,}300 - 0{,}2604 = 0{,}0396\\ \\text{mol}$." }
        ],
        resultado: "Limitante: $\\text{Na}_2\\text{CO}_3$; HCl en exceso: $0{,}0396\\ \\text{mol}$"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "$n(\\text{CO}_2)$ teorico = $0{,}1302\\ \\text{mol}$ (relacion 1:1 con el $\\text{Na}_2\\text{CO}_3$); con rendimiento $90{,}0\\ \\%$: $$n = 0{,}900 \\times 0{,}1302 = 0{,}117\\ \\text{mol}$$.", porque: "Calculamos el $\\text{CO}_2$ teórico con la relación 1:1 respecto del $\\text{Na}_2\\text{CO}_3$ ($0{,}1302\\ \\text{mol}$). Luego aplicamos el rendimiento de $90{,}0\\ \\%$: $0{,}900 \\times 0{,}1302 = 0{,}117\\ \\text{mol}$. Así el rendimiento corrige el producto teórico, que se calculó a partir del limitante." },
          { paso: "$$V = \\frac{nRT}{P} = \\frac{0{,}117\\ \\text{mol} \\times 0{,}0821\\ \\text{L atm/(mol K)} \\times 298\\ \\text{K}}{1\\ \\text{atm}} = 2{,}87\\ \\text{L}$$.", porque: "Usamos la ecuación de gases ideales $V = \\frac{nRT}{P}$ con $T$ en kelvin ($298\\ \\text{K}$), porque a $25\\ \\text{C}$ el volumen no corresponde a CNPT. Con $0{,}117\\ \\text{mol}$, $0{,}0821\\ \\text{L atm/(mol K)}$, $298\\ \\text{K}$ y $1\\ \\text{atm}$ obtenemos $2{,}87\\ \\text{L}$ de $\\text{CO}_2$. Conviene verificar que las unidades de R sean coherentes con la presión en atm y el volumen en L." }
        ],
        resultado: "$2{,}87\\ \\text{L}$ de $\\text{CO}_2$ a $25\\ \\text{C}$ y $1\\ \\text{atm}$"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "$\\text{Na}^{+}$ total = $$2 \\times 0{,}1302\\ \\text{mol} = 0{,}2604\\ \\text{mol}$$ (cada $\\text{Na}_2\\text{CO}_3$ aporta $2\\ \\text{Na}^{+}$ y todo el sodio pasa a $\\text{NaCl}$ con rendimiento $100\\ \\%$).", porque: "Calculamos el $\\text{Na}^{+}$ total multiplicando los moles de $\\text{Na}_2\\text{CO}_3$ por 2, porque cada fórmula aporta $2\\ \\text{Na}^{+}$. Como el rendimiento es $100\\ \\%$, todo el sodio pasa a $\\text{NaCl}$ y no hay pérdidas. Por eso el $\\text{Na}^{+}$ total es $2 \\times 0{,}1302\\ \\text{mol} = 0{,}2604\\ \\text{mol}$, y ese valor se conserva en los productos." },
          { paso: "$$[\\text{Na}^{+}] = \\frac{0{,}2604\\ \\text{mol}}{0{,}200\\ \\text{L}} = 1{,}30\\ \\text{M}$$.", porque: "Dividimos los moles de $\\text{Na}^{+}$ ($0{,}2604\\ \\text{mol}$) por el volumen final de $0{,}200\\ \\text{L}$ para obtener la concentración. Como la concentración de un ión es moles sobre litros de la solución final, el resultado es $1{,}30\\ \\text{M}$. Esto es igual que en los ejercicios anteriores." }
        ],
        resultado: "$[\\text{Na}^{+}] = 1{,}30\\ \\text{M}$"
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
          { paso: "Balanceo (ion-electron, medio acido): $3\\ \\text{Cu} + 8\\ \\text{HNO}_3 \\rightarrow 3\\ \\text{Cu}(\\text{NO}_3)_2 + 2\\ \\text{NO} + 4\\ \\text{H}_2\\text{O}$.", porque: "Igualamos los electrones: el Cu cede $2\\ \\text{e}^{-}$ por átomo (de $0$ a $+2$) y el N gana $3\\ \\text{e}^{-}$ por átomo (de $+5$ a $+2$). Con $3\\ \\text{Cu}$ ($6\\ \\text{e}^{-}$ cedidos) y $2\\ \\text{NO}$ ($6\\ \\text{e}^{-}$ ganados) quedan iguales, y luego se ajustan H y O con $\\text{HNO}_3$ y $\\text{H}_2\\text{O}$. Verificamos contando Cu, N, H y O a ambos lados." },
          { paso: "$$n(\\text{Cu}) = \\frac{2{,}50\\ \\text{g}}{63{,}55\\ \\text{g/mol}} = 0{,}0393\\ \\text{mol}$$; $n(\\text{HNO}_3)$ disponible = $6{,}00\\ \\text{mol/L} \\times 0{,}0400\\ \\text{L} = 0{,}240\\ \\text{mol}$.", porque: "Pasamos ambos reactivos a moles: el Cu con $\\frac{2{,}50\\ \\text{g}}{63{,}55\\ \\text{g/mol}} = 0{,}0393\\ \\text{mol}$, y el $\\text{HNO}_3$ disponible con $6{,}00\\ \\text{mol/L} \\times 0{,}0400\\ \\text{L} = 0{,}240\\ \\text{mol}$. Como la relación de la ecuación es entre moles, la comparación solo tiene sentido en esas unidades. Así podemos identificar el limitante en el paso siguiente." },
          { paso: "$\\text{HNO}_3$ necesario = $$\\frac{8}{3} \\times 0{,}0393\\ \\text{mol} = 0{,}105\\ \\text{mol}$$, menor que $0{,}240\\ \\text{mol}$: el Cu es el limitante y se consumen $0{,}105\\ \\text{mol}$ de $\\text{HNO}_3$.", porque: "Calculamos el $\\text{HNO}_3$ necesario como $\\frac{8}{3} \\times 0{,}0393\\ \\text{mol} = 0{,}105\\ \\text{mol}$, usando la relación 3:8 de la ecuación balanceada. Lo comparamos con los $0{,}240\\ \\text{mol}$ disponibles: como $0{,}105\\ \\text{mol}$ es menor, el Cu es el limitante. Por eso el $\\text{HNO}_3$ consumido es $0{,}105\\ \\text{mol}$, obtenido de la relación y no de los moles disponibles." }
        ],
        resultado: "$3\\ \\text{Cu} + 8\\ \\text{HNO}_3 \\rightarrow 3\\ \\text{Cu}(\\text{NO}_3)_2 + 2\\ \\text{NO} + 4\\ \\text{H}_2\\text{O}$; limitante: Cu; $\\text{HNO}_3$ consumido: $0{,}105\\ \\text{mol}$"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "$n(\\text{NO})$ teorico = $$\\frac{2}{3} \\times 0{,}0393\\ \\text{mol} = 0{,}0262\\ \\text{mol}$$; $V$ teorico = $0{,}0262\\ \\text{mol} \\times 22{,}4\\ \\text{L/mol} = 0{,}587\\ \\text{L}$ en CNPT.", porque: "Calculamos los moles de $\\text{NO}$ teóricos con la relación 2:3 respecto del Cu: $\\frac{2}{3} \\times 0{,}0393\\ \\text{mol} = 0{,}0262\\ \\text{mol}$. Luego lo multiplicamos por $22{,}4\\ \\text{L/mol}$, porque en CNPT un mol de gas ocupa ese volumen, y obtenemos $0{,}587\\ \\text{L}$. Conviene confirmar que el gas esté en CNPT antes de usar ese volumen molar." },
          { paso: "$V$ real = $$0{,}850 \\times 0{,}587\\ \\text{L} = 0{,}499\\ \\text{L}$$.", porque: "Multiplicamos el volumen teórico ($0{,}587\\ \\text{L}$) por el rendimiento ($0{,}850$) para obtener el volumen realmente producido: $0{,}850 \\times 0{,}587\\ \\text{L} = 0{,}499\\ \\text{L}$. El rendimiento se aplica al producto teórico y no a los reactivos. Por eso el resultado final es $0{,}499\\ \\text{L}$ de $\\text{NO}$ en CNPT." }
        ],
        resultado: "$0{,}499\\ \\text{L}$ de $\\text{NO}$ en CNPT"
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
          { paso: "$$n(\\text{AgNO}_3) = 0{,}120\\ \\text{mol/L} \\times 0{,}0500\\ \\text{L} = 6{,}00 \\times 10^{-3}\\ \\text{mol}$$; $n(\\text{NaCl}) = 0{,}0800\\ \\text{mol/L} \\times 0{,}0800\\ \\text{L} = 6{,}40 \\times 10^{-3}\\ \\text{mol}$.", porque: "Calculamos los moles de $\\text{AgNO}_3$ con $0{,}120\\ \\text{mol/L} \\times 0{,}0500\\ \\text{L} = 6{,}00 \\times 10^{-3}\\ \\text{mol}$, y los de $\\text{NaCl}$ con $0{,}0800\\ \\text{mol/L} \\times 0{,}0800\\ \\text{L} = 6{,}40 \\times 10^{-3}\\ \\text{mol}$. Ambas cantidades se comparan en moles porque cada solución tiene un volumen distinto. Como la reacción es 1:1, esos moles son los que reaccionan entre sí." },
          { paso: "Relacion 1:1: el $\\text{AgNO}_3$ ($6{,}00 \\times 10^{-3}\\ \\text{mol}$) es el limitante; quedan $0{,}40 \\times 10^{-3}\\ \\text{mol}$ de $\\text{NaCl}$ en exceso.", porque: "Comparamos las cantidades con la relación 1:1: hay $6{,}00 \\times 10^{-3}\\ \\text{mol}$ de $\\text{Ag}^{+}$ y $6{,}40 \\times 10^{-3}\\ \\text{mol}$ de $\\text{Cl}^{-}$. Como el $\\text{AgNO}_3$ se agota primero, es el limitante, y el $\\text{NaCl}$ sobrante es la diferencia: $0{,}40 \\times 10^{-3}\\ \\text{mol}$. Entonces el exceso de cloruro queda en la solución." },
          { paso: "$$m(\\text{AgCl}) = 6{,}00 \\times 10^{-3}\\ \\text{mol} \\times 143{,}3\\ \\text{g/mol} = 0{,}860\\ \\text{g}$$.", porque: "Multiplicamos los moles de $\\text{AgCl}$ ($6{,}00 \\times 10^{-3}\\ \\text{mol}$, dados por el limitante) por su masa molar ($143{,}3\\ \\text{g/mol}$) para pasar a gramos: $0{,}860\\ \\text{g}$. El precipitado se calcula con el limitante porque determina la cantidad máxima que puede formarse. Así se obtiene la masa de $\\text{AgCl}$ precipitado." }
        ],
        resultado: "$0{,}860\\ \\text{g}$ de $\\text{AgCl}$"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "$V$ total = $$50{,}0\\ \\text{mL} + 80{,}0\\ \\text{mL} = 130\\ \\text{mL} = 0{,}130\\ \\text{L}$$.", porque: "Sumamos los volúmenes de las dos soluciones, $50{,}0\\ \\text{mL} + 80{,}0\\ \\text{mL} = 130\\ \\text{mL}$, y lo pasamos a litros: $0{,}130\\ \\text{L}$. Usamos el volumen total porque la concentración final se calcula sobre la mezcla completa, suponiendo volúmenes aditivos como indica el enunciado. Así el denominador queda listo para el cálculo de $\\text{Cl}^{-}$." },
          { paso: "$$[\\text{Cl}^{-}] = \\frac{0{,}40 \\times 10^{-3}\\ \\text{mol}}{0{,}130\\ \\text{L}} = 3{,}08 \\times 10^{-3}\\ \\text{M}$$.", porque: "Dividimos el $\\text{NaCl}$ en exceso ($0{,}40 \\times 10^{-3}\\ \\text{mol}$) por el volumen total ($0{,}130\\ \\text{L}$): $\\frac{0{,}40 \\times 10^{-3}\\ \\text{mol}}{0{,}130\\ \\text{L}} = 3{,}08 \\times 10^{-3}\\ \\text{M}$. Solo cuenta el $\\text{Cl}^{-}$ que sobró, porque el $\\text{Cl}^{-}$ que estaba en el $\\text{AgCl}$ precipitado ya no está en la solución. Despreciar la solubilidad del $\\text{AgCl}$ permite este supuesto." }
        ],
        resultado: "$[\\text{Cl}^{-}] = 3{,}08 \\times 10^{-3}\\ \\text{M}$"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "Clasificacion: reaccion de precipitacion (doble desplazamiento) con formacion de un solido insoluble, $\\text{AgCl}$.", porque: "Clasificamos la reacción por su resultado: dos soluciones de solutos solubles dan un sólido insoluble, $\\text{AgCl}$. Ese es el criterio de una reacción de precipitación, que es un caso de doble desplazamiento. No se mira el color ni la presencia de gas, sino la formación del sólido." },
          { paso: "Iones espectadores: $\\text{Na}^{+}$ y $\\text{NO}_3^{-}$ (aparecen sin cambio en ambos lados de la ecuacion ionica neta).", porque: "Identificamos los iones espectadores como los que aparecen sin cambio en ambos lados de la ecuación iónica neta: $\\text{Na}^{+}$ y $\\text{NO}_3^{-}$ no participan en la formación del sólido. Solo $\\text{Ag}^{+}$ y $\\text{Cl}^{-}$ forman el $\\text{AgCl}$, y los demás iones acompañan la reacción sin reaccionar. Por eso los espectadores son $\\text{Na}^{+}$ y $\\text{NO}_3^{-}$." }
        ],
        resultado: "Precipitacion; espectadores $\\text{Na}^{+}$ y $\\text{NO}_3^{-}$"
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
          { paso: "Balanceo: $2\\ \\text{NH}_3(\\text{g}) + \\text{H}_2\\text{SO}_4(\\text{ac}) \\rightarrow (\\text{NH}_4)_2\\text{SO}_4(\\text{ac})$. Verificacion: N $2 = 2$; H $6 + 2 = 8 = 8$ en $(\\text{NH}_4)_2\\text{SO}_4$; S $1 = 1$; O $4 = 4$.", porque: "Igualamos los átomos: el $\\text{H}_2\\text{SO}_4$ aporta $2\\ \\text{H}^{+}$ que neutralizan $2\\ \\text{NH}_3$, por lo que el coeficiente del $\\text{NH}_3$ es 2. Así obtenemos $2\\ \\text{NH}_3(\\text{g}) + \\text{H}_2\\text{SO}_4(\\text{ac}) \\rightarrow (\\text{NH}_4)_2\\text{SO}_4(\\text{ac})$. Verificamos el balanceo contando N ($2 = 2$), H ($6 + 2 = 8$ en $(\\text{NH}_4)_2\\text{SO}_4$), S ($1 = 1$) y O ($4 = 4$)." },
          { paso: "Clasificacion: reaccion de neutralizacion (acido-base): el $\\text{H}_2\\text{SO}_4$ transfiere $\\text{H}^{+}$ al $\\text{NH}_3$, sin gases ni precipitados como productos.", porque: "Identificamos el tipo de reacción: el $\\text{H}_2\\text{SO}_4$ cede $\\text{H}^{+}$ al $\\text{NH}_3$, que actúa como base de Bronsted, y se forma el ion amonio. Es una neutralización ácido-base, porque no hay gases ni precipitados entre los productos y el único producto es la sal disuelta. Por eso la clasificación es neutralización." }
        ],
        resultado: "$2\\ \\text{NH}_3(\\text{g}) + \\text{H}_2\\text{SO}_4(\\text{ac}) \\rightarrow (\\text{NH}_4)_2\\text{SO}_4(\\text{ac})$; neutralizacion"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "$$n(\\text{NH}_3) = \\frac{PV}{RT} = \\frac{1{,}00\\ \\text{atm} \\times 50{,}0\\ \\text{L}}{0{,}0821\\ \\text{L atm/(mol K)} \\times 298\\ \\text{K}} = 2{,}04\\ \\text{mol}$$.", porque: "Despejamos los moles de $\\text{NH}_3$ de la ecuación de los gases ideales, $n = \\frac{PV}{RT}$, con $T = 298\\ \\text{K}$. Así $n(\\text{NH}_3) = \\frac{1{,}00\\ \\text{atm} \\times 50{,}0\\ \\text{L}}{0{,}0821\\ \\text{L atm/(mol K)} \\times 298\\ \\text{K}} = 2{,}04\\ \\text{mol}$. Como el $\\text{NH}_3$ está como gas fuera de CNPT, no se puede usar $22{,}4\\ \\text{L/mol}$; conviene verificar que el volumen esté en L y la temperatura en K." },
          { paso: "$$n(\\text{H}_2\\text{SO}_4) = 0{,}800\\ \\text{mol/L} \\times 0{,}500\\ \\text{L} = 0{,}400\\ \\text{mol}$$; $\\text{NH}_3$ necesario = $2 \\times 0{,}400 = 0{,}800\\ \\text{mol}$.", porque: "Calculamos los moles de $\\text{H}_2\\text{SO}_4$ con $0{,}800\\ \\text{mol/L} \\times 0{,}500\\ \\text{L} = 0{,}400\\ \\text{mol}$, y los multiplicamos por 2 para hallar el $\\text{NH}_3$ necesario, usando la relación 2:1 del balanceo del apartado a). Así se obtiene $0{,}800\\ \\text{mol}$ de $\\text{NH}_3$. Este valor indica cuánto amoníaco se requiere para consumir todo el ácido." },
          { paso: "Como $2{,}04\\ \\text{mol}$ de $\\text{NH}_3$ son mas que $0{,}800\\ \\text{mol}$ necesarios, el $\\text{H}_2\\text{SO}_4$ es el limitante. $\\text{NH}_3$ en exceso = $$2{,}04 - 0{,}800 = 1{,}24\\ \\text{mol}$$.", porque: "Comparamos el $\\text{NH}_3$ disponible ($2{,}04\\ \\text{mol}$) con el necesario ($0{,}800\\ \\text{mol}$) y vemos que hay más $\\text{NH}_3$ del que se necesita. Por eso el $\\text{H}_2\\text{SO}_4$ es el limitante, porque se agota primero. El $\\text{NH}_3$ en exceso es lo que sobra tras consumir $0{,}800\\ \\text{mol}$, es decir $2{,}04 - 0{,}800 = 1{,}24\\ \\text{mol}$." }
        ],
        resultado: "Limitante: $\\text{H}_2\\text{SO}_4$; $\\text{NH}_3$ en exceso: $1{,}24\\ \\text{mol}$"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "$n((\\text{NH}_4)_2\\text{SO}_4)$ teorico = $0{,}400\\ \\text{mol}$ (relacion 1:1 con el $\\text{H}_2\\text{SO}_4$); m teorica = $$0{,}400\\ \\text{mol} \\times 132{,}1\\ \\text{g/mol} = 52{,}8\\ \\text{g}$$.", porque: "Calculamos el producto teórico con los $0{,}400\\ \\text{mol}$ de $\\text{H}_2\\text{SO}_4$, que tienen relación 1:1 con la sal, y lo multiplicamos por la masa molar del $(\\text{NH}_4)_2\\text{SO}_4$ ($132{,}1\\ \\text{g/mol}$): $0{,}400\\ \\text{mol} \\times 132{,}1\\ \\text{g/mol} = 52{,}8\\ \\text{g}$. El producto siempre sale del limitante, que aquí es el ácido. Entonces $52{,}8\\ \\text{g}$ es la masa teórica." },
          { paso: "m real = $$0{,}920 \\times 52{,}8\\ \\text{g} = 48{,}6\\ \\text{g}$$.", porque: "Multiplicamos la masa teórica ($52{,}8\\ \\text{g}$) por el rendimiento de $0{,}920$ para obtener la masa real de sal: $0{,}920 \\times 52{,}8\\ \\text{g} = 48{,}6\\ \\text{g}$. El rendimiento corrige el producto teórico y no los reactivos en exceso. Por eso el resultado final es $48{,}6\\ \\text{g}$ de $(\\text{NH}_4)_2\\text{SO}_4$." }
        ],
        resultado: "$48{,}6\\ \\text{g}$ de $(\\text{NH}_4)_2\\text{SO}_4$"
      },
      {
        parte: "d)",
        pasos: [
          { paso: "El $\\text{NH}_4^{+}$ es un acido debil (acido conjugado del $\\text{NH}_3$, base debil): $\\text{NH}_4^{+} + \\text{H}_2\\text{O} \\rightleftharpoons \\text{NH}_3 + \\text{H}_3\\text{O}^{+}$.", porque: "Analizamos el carácter ácido-base de los iones de la sal: el $\\text{NH}_4^{+}$ es el ácido conjugado de una base débil ($\\text{NH}_3$), por eso reacciona con el agua y libera $\\text{H}_3\\text{O}^{+}$. Los cationes de bases débiles se hidrolizan y bajan el pH. Esta reacción es el primer criterio para decidir el carácter de la solución." },
          { paso: "El $\\text{SO}_4^{2-}$ es una base muy debil y su efecto sobre el pH es despreciable frente al del $\\text{NH}_4^{+}$. La solucion es acida ($\\text{pH} < 7$).", porque: "Comparamos los dos iones: el $\\text{SO}_4^{2-}$ es una base muy débil y su hidrólisis es despreciable frente a la del $\\text{NH}_4^{+}$, así que domina el carácter ácido. Como resultado, la solución final es ácida, con $\\text{pH} < 7$. Por eso el ión que más se hidroliza decide el pH de la sal." }
        ],
        resultado: "Solucion acida ($\\text{pH} < 7$)"
      }
    ],
    errores_tipicos: [
      { error: "En b) decidir el limitante comparando los 50,0 L de gas con los moles de acido, sin convertir el gas a moles.", como_evitar: "Convertir el NH3 a moles con PV = nRT antes de comparar." },
      { error: "En d) decir que la solucion es neutra porque se trata de una sal.", como_evitar: "Una sal no es necesariamente neutra: depende de la fuerza del acido y la base de origen." },
      { error: "En c) aplicar el rendimiento al NH3 en exceso o no aplicarlo.", como_evitar: "El rendimiento se aplica al producto obtenido a partir del limitante." }
    ]
  }
];
