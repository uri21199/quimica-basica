window.PARCIALES = window.PARCIALES || [];

// ============================================================
// RECUPERATORIO (texto pegado por el usuario, sin fecha)
// Datos del enunciado: Vm = 22,4 L/mol (CNPT); M(MgO) = 40,31 g/mol; M(MgCO3) = 84,31 g/mol;
// ΔHf CO2 = -393,5 kJ/mol; ΔHf H2O = -285,8 kJ/mol; ΔH comb CH4 = -890 kJ/mol; ΔH comb C2H6 = -1559,7 kJ/mol;
// Cp H2O = 4,18 kJ/(kg K); ΔHv H2O = 2265 kJ/kg; Kps Cu(IO3)2 = 7,4 x 10^-8.
// Supuestos: ver los pasos marcados "Supuesto". Algunos enunciados son ambiguos y se resolvieron con la
// interpretación más directa, indicada en la resolución.
// ============================================================
window.PARCIALES.push({
  id: "recuperatorio-tema-texto",
  tipo: "Recuperatorio",
  fecha: "sin fecha",
  fuente: "Recuperatorio (texto pegado, sin imagen)",
  ejercicios: [
    {
      num: 1,
      temas: ["reacciones", "magnitudes", "uniones", "equilibrio"],
      enunciado: "Se obtiene MgCO3 (s) a partir de MgO sólido y CO2 gaseoso. Se consumen 54 L de gas en CNPT. A) Escribir la reacción y los estados de agregación de cada elemento. B) Calcular la masa de MgO. C) Si el MgO tiene una impureza de 14 % de dióxido de silicio (m/m), hallar el volumen de CO2 en CNPT (suponer que no hay reacción entre ambos dióxidos) y calcular la masa de MgCO3 obtenido. D) Escribir la estructura de Lewis de Cu(IO3)2. E) El Kps de Cu(IO3)2 es 7,4 x 10^-8. Calcular el Kps de la sal y su solubilidad molar.",
      resolucion: [
        {
          parte: "A)",
          pasos: [
            { paso: "Reacción: $$\\text{MgO (s)} + \\text{CO}_2 \\text{ (g)} \\rightarrow \\text{MgCO}_3 \\text{ (s)}$$ Estados de los elementos en sus formas estables: Mg (s), C (s, grafito), O$_2$ (g).", porque: "El MgO y el MgCO3 son sólidos, y el CO2 es gas. Como pregunta por los elementos, tomamos cada uno en su forma más estable a 25 °C: el magnesio y el carbono son sólidos, y el oxígeno elemental es un gas diatómico." }
          ],
          resultado: "MgO (s) + CO2 (g) -> MgCO3 (s); Mg (s), C (s), O2 (g)"
        },
        {
          parte: "B)",
          pasos: [
            { paso: "Moles de CO2: $$n_{\\text{CO}_2} = \\frac{54\\ \\text{L}}{22{,}4\\ \\text{L/mol}} = 2{,}41\\ \\text{mol}$$", porque: "En CNPT un mol de gas ocupa 22,4 L, así que dividimos el volumen de CO2 consumido por ese valor." },
            { paso: "Masa de MgO: la reacción es 1 a 1, así que $$m_{\\text{MgO}} = 2{,}41\\ \\text{mol} \\times 40{,}31\\ \\text{g/mol} = 97{,}2\\ \\text{g}$$", porque: "De la ecuación, 1 mol de MgO reacciona con 1 mol de CO2. Multiplicamos los moles de MgO por su masa molar para obtener la masa." }
          ],
          resultado: "m(MgO) = 97,2 g"
        },
        {
          parte: "C)",
          pasos: [
            { paso: "Supuesto: se toma la misma muestra que en B, de 97,2 g, con 14 % de SiO2. MgO puro: $$m_{\\text{MgO}} = 0{,}86 \\times 97{,}2\\ \\text{g} = 83{,}6\\ \\text{g}$$", porque: "El enunciado no fija la masa de la muestra; usamos la de B para comparar. Como el 14 % es SiO2 en masa, el MgO puro es el 86 % restante." },
            { paso: "Moles de MgO puro: $$n = \\frac{83{,}6\\ \\text{g}}{40{,}31\\ \\text{g/mol}} = 2{,}07\\ \\text{mol}$$", porque: "Dividimos la masa de MgO puro por su masa molar para obtener los moles que reaccionan con el CO2." },
            { paso: "Volumen de CO2 en CNPT: $$V = 2{,}07\\ \\text{mol} \\times 22{,}4\\ \\text{L/mol} = 46{,}4\\ \\text{L}$$", porque: "Como la reacción es 1 a 1, se consume la misma cantidad de CO2; en CNPT un mol ocupa 22,4 L. El SiO2 no reacciona con el CO2, según el enunciado." },
            { paso: "Masa de MgCO3: $$m = 2{,}07\\ \\text{mol} \\times 84{,}31\\ \\text{g/mol} = 174{,}8\\ \\text{g}$$", porque: "Los moles de MgCO3 formados son iguales a los de MgO que reaccionan. Multiplicamos por su masa molar." }
          ],
          resultado: "V(CO2) = 46,4 L; m(MgCO3) = 174,8 g (con la muestra de 97,2 g)"
        },
        {
          parte: "D)",
          pasos: [
            { paso: "Lewis del Cu(IO3)2: Cu$^{2+}$ junto a dos iones IO$_3^-$. Cada IO$_3^-$ tiene el I central unido a 3 O (un doble enlace y dos simples con carga), con un par libre sobre el I.", porque: "El cobre pierde 2 electrones y forma un catión que se une a dos aniones iodato. Cada iodato tiene 26 electrones de valencia en total, con el I central rodeado por los tres O y un par libre." }
          ],
          resultado: "[Cu]$^{2+}$ con dos aniones IO$_3^-$ (I central con 3 O y un par libre)"
        },
        {
          parte: "E)",
          pasos: [
            { paso: "Solubilidad molar: $$\\text{Cu(IO}_3)_2 \\rightleftharpoons \\text{Cu}^{2+} + 2\\,\\text{IO}_3^-$$ con $K_{ps} = s \\cdot (2s)^2 = 4s^3$, así que $$s = \\sqrt[3]{\\frac{K_{ps}}{4}} = \\sqrt[3]{\\frac{7{,}4\\times10^{-8}}{4}} = 2{,}65\\times10^{-3}\\ \\text{mol/L}$$", porque: "Por cada mol de sal que se disuelve aparece 1 mol de Cu2+ y 2 mol de IO3-. Como el Kps ya viene dado, lo usamos para despejar la solubilidad s de la expresión Kps = 4s^3." },
            { paso: "Verificación: $4 \\times (2{,}65\\times10^{-3})^3 = 7{,}4\\times10^{-8}$, que coincide con el Kps dado.", porque: "Reemplazar la solubilidad en la expresión del Kps permite comprobar que el resultado es consistente." }
          ],
          resultado: "Kps = 7,4 x 10^-8 (dado); s = 2,65 x 10^-3 mol/L"
        }
      ],
      errores_tipicos: [
        { error: "Usar 1 mol de CO2 por mol de MgO sin revisar la ecuación, o confundir los estados de agregación.", como_evitar: "Escribir la ecuación balanceada y marcar el estado de cada sustancia antes de calcular." },
        { error: "En C) aplicar la impureza como si fuera el 14 % del CO2 o sumarla al MgO.", como_evitar: "La impureza es SiO2 en masa; el MgO puro es el 86 % de la muestra." },
        { error: "En E) usar s = Kps en vez de la relación con el factor 4 (Kps = 4s^3).", como_evitar: "Escribir la expresión de Kps con los coeficientes del equilibrio antes de despejar s." }
      ]
    },
    {
      num: 2,
      temas: ["termodinamica", "gases", "liquidos"],
      enunciado: "Se dispone de los siguientes calores de formación y de combustión estándar: ΔHf CO2 = -393,5 kJ/mol; ΔHf H2O = -285,8 kJ/mol; ΔH comb CH4 = -890 kJ/mol. a) Escribir las ecuaciones termoquímicas que representan los datos, nombrando los compuestos involucrados, y calcular el calor de formación del CH4. b) Cuando se queman 0,5 m3 en CNPT de gas natural (mezcla de metano y etano) se obtienen 21 151,8 kJ. Hallar la proporción de metano y etano en la mezcla. Datos: Cp H2O = 4,18 kJ/(kg K); ΔHv H2O = 2265 kJ/kg; ΔH comb C2H6 = -1559,7 kJ/mol. c) Calcular la masa de agua que podrá evaporarse quemando 0,5 m3 de gas natural en CNPT, si su temperatura inicial es 25 °C y el rendimiento térmico es 72 %.",
      resolucion: [
        {
          parte: "a)",
          pasos: [
            { paso: "Dióxido de carbono: $$\\text{C (grafito)} + \\text{O}_2 \\rightarrow \\text{CO}_2 \\qquad \\Delta H_f = -393{,}5\\ \\text{kJ/mol}$$ Agua líquida: $$\\text{H}_2 + \\frac{1}{2}\\,\\text{O}_2 \\rightarrow \\text{H}_2\\text{O (l)} \\qquad \\Delta H_f = -285{,}8\\ \\text{kJ/mol}$$", porque: "Las ecuaciones de formación parten de los elementos en su forma estable (C grafito, H2 y O2) y forman 1 mol del compuesto. Por eso el ΔH de cada una es, por definición, el ΔHf dado." },
            { paso: "Combustión del metano: $$\\text{CH}_4 + 2\\,\\text{O}_2 \\rightarrow \\text{CO}_2 + 2\\,\\text{H}_2\\text{O (l)} \\qquad \\Delta H = -890\\ \\text{kJ/mol}$$", porque: "Balanceamos el C (1), el H (4, que dan 2 H2O) y el O (2 + 2 = 4 átomos, o sea 2 O2)." },
            { paso: "Calor de formación del CH4: la ley de Hess da $$\\Delta H_f(\\text{CH}_4) = \\sum n\\,\\Delta H_f(\\text{productos}) - \\Delta H_{\\text{comb}} = (-393{,}5 + 2 \\times (-285{,}8)) - (-890) = -75{,}1\\ \\text{kJ/mol}$$", porque: "La entalpía de formación del metano sale de restar el ΔH de la combustión al calor de formación de los productos: la combustión es el camino inverso a la formación de CO2 y H2O." }
          ],
          resultado: "ΔHf(CH4) = -75,1 kJ/mol"
        },
        {
          parte: "b)",
          pasos: [
            { paso: "Moles de gas: $$n_{\\text{total}} = \\frac{500\\ \\text{L}}{22{,}4\\ \\text{L/mol}} = 22{,}32\\ \\text{mol}$$", porque: "Pasamos los 0,5 m3 (500 L) a moles, usando el volumen molar de CNPT." },
            { paso: "Sistema de ecuaciones: $$x + y = 22{,}32 \\qquad 890\\,x + 1559{,}7\\,y = 21\\,151{,}8$$ con x = mol de CH4 e y = mol de C2H6.", porque: "Planteamos dos ecuaciones: la suma de moles de los dos gases y la suma de calores de combustión. Sumar los calores de combustión de cada gas por su cantidad da el calor total liberado." },
            { paso: "Resolviendo: $$x = 20{,}40\\ \\text{mol CH}_4, \\qquad y = 1{,}92\\ \\text{mol C}_2\\text{H}_6$$", porque: "Despejamos x de la segunda ecuación usando la primera para reemplazar y, y luego obtenemos y por diferencia." },
            { paso: "Proporción: $$\\%\\ \\text{CH}_4 = \\frac{20{,}40}{22{,}32} = 91{,}4\\ \\%; \\qquad \\%\\ \\text{C}_2\\text{H}_6 = 8{,}6\\ \\%$$", porque: "En una mezcla de gases, la proporción en moles coincide con la proporción en volumen, así que lo expresamos en porcentaje." }
          ],
          resultado: "Mezcla: 91,4 % CH4 y 8,6 % C2H6 (en moles o volumen)"
        },
        {
          parte: "c)",
          pasos: [
            { paso: "Calor útil: $$q_{\\text{útil}} = 0{,}72 \\times 21\\,151{,}8\\ \\text{kJ} = 15\\,229\\ \\text{kJ}$$", porque: "El rendimiento térmico indica qué fracción del calor generado se aprovecha; el resto se pierde." },
            { paso: "Energía por kg de agua: calentar de 25 °C a 100 °C y luego evaporar: $$4{,}18 \\times 75 + 2265 = 2578{,}5\\ \\text{kJ/kg}$$", porque: "Por cada kg de agua se necesitan el calor sensible para subir 75 K y el calor latente de vaporización." },
            { paso: "Supuesto: toda el agua calentada se evapora. Masa: $$m = \\frac{15\\,229\\ \\text{kJ}}{2578{,}5\\ \\text{kJ/kg}} = 5{,}91\\ \\text{kg}$$", porque: "El enunciado pide la masa que se puede evaporar, así que suponemos que el calor alcanza para calentar y evaporar la misma masa de agua." }
          ],
          resultado: "Masa de agua evaporada: 5,91 kg"
        }
      ],
      errores_tipicos: [
        { error: "En a) usar el ΔHf del CH4 como si fuera el ΔH de combustión, o invertir el signo al despejar.", como_evitar: "Usar la relación ΔHf(CH4) = ΣΔHf(productos) − ΔH_comb y revisar el signo con el resultado." },
        { error: "En b) asignar el calor de combustión del etano por átomo de carbono o por gramo.", como_evitar: "El ΔH de combustión del etano está dado por mol de C2H6; multiplicar por los moles de etano." },
        { error: "En c) usar 0,5 m3 directamente como masa de agua, o no aplicar el rendimiento.", como_evitar: "Primero el calor útil (72 %), después la energía por kg de agua y recién después la masa." }
      ]
    },
    {
      num: 3,
      temas: ["equilibrio", "termodinamica", "gases"],
      enunciado: "Se colocan 6,2 moles de SbCl3 puro con cantidad estequiométrica de Cl2 en un recipiente rígido de 15 L a 212 °C, donde se establece el equilibrio SbCl3 (g) + Cl2 (g) <=> SbCl5 (g), con ΔH < 0. En el equilibrio el sistema contiene 1,2 moles de Cl2 (g). A) Calcular Kc a 212 °C y escribir su expresión. B) Calcular Kp. C) Calcular la masa en gramos y la fracción molar de SbCl5 en el equilibrio. D) Si se quiere obtener más SbCl3 en el equilibrio, ¿conviene remover Cl2? Justificar. E) Con el mismo objetivo, ¿conviene aumentar la temperatura? Justificar.",
      resolucion: [
        {
          parte: "A)",
          pasos: [
            { paso: "Moles en equilibrio: Cl2 = 1,2 mol. Como se consumieron $6{,}2 - 1{,}2 = 5{,}0$ mol de Cl2, se formaron 5,0 mol de SbCl5 y quedan $6{,}2 - 5{,}0 = 1{,}2$ mol de SbCl3.", porque: "La reacción es 1 a 1: cada mol de Cl2 que reacciona consume 1 mol de SbCl3 y forma 1 mol de SbCl5. Restamos del valor inicial lo que se consumió." },
            { paso: "Concentraciones: $$[\\text{SbCl}_5] = \\frac{5{,}0}{15} = 0{,}333\\ \\text{M}, \\qquad [\\text{SbCl}_3] = [\\text{Cl}_2] = \\frac{1{,}2}{15} = 0{,}080\\ \\text{M}$$", porque: "La concentración es moles sobre litros del recipiente de 15 L." },
            { paso: "Expresión y valor: $$K_c = \\frac{[\\text{SbCl}_5]}{[\\text{SbCl}_3]\\,[\\text{Cl}_2]} = \\frac{0{,}333}{0{,}080 \\times 0{,}080} = 52{,}1\\ \\text{L/mol}$$", porque: "En Kc entran las concentraciones de los productos sobre las de los reactivos, cada una elevada a su coeficiente (todos son 1). Las unidades resultan L/mol." }
          ],
          resultado: "Kc = 52,1 L/mol"
        },
        {
          parte: "B)",
          pasos: [
            { paso: "Variación de moles gaseosos: $\\Delta n = 1 - 2 = -1$. Temperatura: $T = 212 + 273{,}15 = 485{,}15$ K.", porque: "Kp se relaciona con Kc a través de Δn: los moles de gas de los productos menos los de los reactivos. Pasamos la temperatura a kelvin." },
            { paso: "Kp: $$K_p = K_c (RT)^{\\Delta n} = \\frac{52{,}1}{0{,}0821 \\times 485{,}15} = 1{,}31\\ \\text{atm}^{-1}$$", porque: "Sustituimos Δn = −1 en la relación entre Kp y Kc: como Δn es negativo, dividimos por RT." }
          ],
          resultado: "Kp = 1,31 atm^-1"
        },
        {
          parte: "C)",
          pasos: [
            { paso: "Masa de SbCl5: $$m = 5{,}0\\ \\text{mol} \\times (121{,}76 + 5 \\times 35{,}45)\\ \\text{g/mol} = 5{,}0 \\times 299{,}0 = 1\\,495\\ \\text{g}$$", porque: "Multiplicamos los moles de SbCl5 en equilibrio por su masa molar." },
            { paso: "Fracción molar: $$x_{\\text{SbCl}_5} = \\frac{5{,}0}{5{,}0 + 1{,}2 + 1{,}2} = \\frac{5{,}0}{7{,}4} = 0{,}676$$", porque: "La fracción molar es los moles del componente sobre el total de moles en equilibrio (SbCl5, SbCl3 y Cl2)." }
          ],
          resultado: "m(SbCl5) = 1 495 g; x(SbCl5) = 0,676"
        },
        {
          parte: "D)",
          pasos: [
            { paso: "Al remover Cl2, su concentración baja y el cociente $Q = \\frac{[\\text{SbCl}_5]}{[\\text{SbCl}_3][\\text{Cl}_2]}$ aumenta por encima de Kc. El sistema responde desplazándose hacia los reactivos.", porque: "Cuando se quita un reactivo, el equilibrio se corre para reponerlo: el SbCl5 se descompone en SbCl3 y Cl2. Como resultado aumenta el SbCl3 presente." },
            { paso: "Conclusión: sí, conviene remover Cl2 para obtener más SbCl3 en el equilibrio.", porque: "Según el principio de Le Chatelier, quitar un componente hace que el equilibrio se desplace en el sentido que lo reemplaza." }
          ],
          resultado: "Sí: al remover Cl2 el equilibrio se desplaza hacia la izquierda y aumenta SbCl3"
        },
        {
          parte: "E)",
          pasos: [
            { paso: "La reacción directa libera calor (ΔH < 0). Al aumentar la temperatura, el sistema absorbe calor desplazándose en el sentido endotérmico, que es hacia los reactivos.", porque: "Para un proceso exotérmico, subir la temperatura favorece la reacción inversa y disminuye el valor de Kc." },
            { paso: "Conclusión: sí, aumentar la temperatura favorece SbCl3 en el equilibrio.", porque: "Como el sistema se desplaza hacia los reactivos, aumenta la cantidad de SbCl3 presente." }
          ],
          resultado: "Sí: al subir T el equilibrio se desplaza hacia la izquierda, favoreciendo SbCl3"
        }
      ],
      errores_tipicos: [
        { error: "En A) usar moles en lugar de concentraciones en la expresión de Kc.", como_evitar: "Dividir por el volumen de 15 L antes de armar el cociente." },
        { error: "En B) usar Kp = Kc sin considerar Δn o sin pasar la temperatura a kelvin.", como_evitar: "Calcular Δn = (moles de productos gaseosos) − (moles de reactivos gaseosos) y usar T en K." },
        { error: "En D) pensar que quitar un reactivo aumenta el producto sin justificar el sentido del desplazamiento.", como_evitar: "Quitar un reactivo desplaza el equilibrio hacia los reactivos; el producto aumenta solo si se quita el producto." }
      ]
    }
  ]
});
