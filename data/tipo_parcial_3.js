// Ejercicios tipo parcial, tercera tanda: 3 ejercicios de dificultad similar al recuperatorio
// (uno por punto: estequiometría con impureza y Kps, termoquímica con gases y calentamiento del agua,
// equilibrio químico con Kc, Kp y Le Chatelier). Datos propios, no copias del recuperatorio.
window.TIPO_PARCIAL = window.TIPO_PARCIAL || [];
window.TIPO_PARCIAL.push(
  {
    num: 10,
    nivel: "Tipo parcial",
    temas: ["reacciones", "magnitudes", "uniones", "soluciones"],
    enunciado: "Se hace reaccionar una muestra de cinc con ácido clorhídrico en exceso, obteniéndose 40,0 L de hidrógeno gaseoso medidos en CNPT. a) Escribir la ecuación de la reacción e indicar el estado de agregación de cada sustancia. b) Calcular la masa de cinc puro que reaccionó. c) Si la muestra tiene 8 % (m/m) de cobre, que no reacciona con el ácido, calcular la masa de muestra necesaria y la masa de ZnCl2 que se forma. d) Escribir la estructura de Lewis del ZnCl2 e indicar qué tipo de enlace presenta. e) El Kps del Ag2CrO4 es 1,1 x 10^-12. Calcular su solubilidad molar.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Reacción: $$\\text{Zn (s)} + 2\\,\\text{HCl (ac)} \\rightarrow \\text{ZnCl}_2 \\text{ (ac)} + \\text{H}_2 \\text{ (g)}$$", porque: "El cinc sólido reacciona con el ácido en solución y produce la sal disuelta y el hidrógeno gaseoso. Balanceamos el H (2 a cada lado) y el Cl (2 a cada lado), y el Zn ya está igualado." }
        ],
        resultado: "Zn (s) + 2 HCl (ac) -> ZnCl2 (ac) + H2 (g)"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Moles de H2: $$n_{\\text{H}_2} = \\frac{40{,}0\\ \\text{L}}{22{,}4\\ \\text{L/mol}} = 1{,}786\\ \\text{mol}$$", porque: "En CNPT un mol de gas ocupa 22,4 L, así que dividimos el volumen de hidrógeno por ese valor." },
          { paso: "Masa de Zn: la relación es 1 a 1, así que $$m_{\\text{Zn}} = 1{,}786 \\times 65{,}38 = 116{,}8\\ \\text{g}$$", porque: "De la ecuación, 1 mol de Zn produce 1 mol de H2. Multiplicamos los moles por la masa molar del cinc." }
        ],
        resultado: "m(Zn) = 116,8 g"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "Masa de muestra: el cobre no reacciona, así que el cinc es el 92 % de la muestra: $$m_{\\text{muestra}} = \\frac{116{,}8\\ \\text{g}}{0{,}92} = 126{,}9\\ \\text{g}$$", porque: "Si la muestra tiene 8 % de impureza inerte, el cinc puro es el 92 % de la masa total. Dividimos la masa de cinc puro por esa fracción." },
          { paso: "Masa de ZnCl2: $$m = 1{,}786\\ \\text{mol} \\times (65{,}38 + 2 \\times 35{,}45)\\ \\text{g/mol} = 1{,}786 \\times 136{,}28 = 243{,}4\\ \\text{g}$$", porque: "Por la relación 1 a 1 con el Zn, se forman 1,786 mol de ZnCl2. Multiplicamos por su masa molar." }
        ],
        resultado: "Masa de muestra: 126,9 g; masa de ZnCl2: 243,4 g"
      },
      {
        parte: "d)",
        pasos: [
          { paso: "Lewis del ZnCl2: $[:\\text{Cl}:]^-\\ \\text{Zn}^{2+}\\ [:\\text{Cl}:]^-$, con cada Cl rodeado por 3 pares libres.", porque: "El Zn cede 2 electrones, uno a cada Cl. Cada Cl- completa su octeto con 3 pares libres, y el Zn2+ queda sin electrones de valencia." },
          { paso: "Tipo de enlace: iónico, entre el catión Zn2+ y los aniones Cl-.", porque: "La diferencia de electronegatividad entre el metal y el halógeno es grande, y la sal se forma por atracción electrostática entre iones." }
        ],
        resultado: "ZnCl2: [Cl]- Zn2+ [Cl]-, enlace iónico"
      },
      {
        parte: "e)",
        pasos: [
          { paso: "Equilibrio: $$\\text{Ag}_2\\text{CrO}_4 \\rightleftharpoons 2\\,\\text{Ag}^+ + \\text{CrO}_4^{2-}$$ con $K_{ps} = (2s)^2 \\cdot s = 4s^3$.", porque: "Por cada mol de sal que se disuelve aparecen 2 mol de Ag+ y 1 mol de CrO4^2-, así que la expresión del Kps lleva el factor 4." },
          { paso: "Solubilidad: $$s = \\sqrt[3]{\\frac{1{,}1\\times10^{-12}}{4}} = 6{,}50\\times10^{-5}\\ \\text{mol/L}$$", porque: "Despejamos s de Kps = 4s^3 tomando la raíz cúbica de Kps/4." },
          { paso: "Verificación: $4 \\times (6{,}50\\times10^{-5})^3 = 1{,}1\\times10^{-12}$, que coincide con el Kps dado.", porque: "Reemplazar la solubilidad en la expresión del Kps permite comprobar el resultado." }
        ],
        resultado: "s = 6,50 x 10^-5 mol/L"
      }
    ],
    errores_tipicos: [
      { error: "En c) aplicar el 8 % sobre la masa de cinc en vez de sobre la muestra.", como_evitar: "La impureza es parte de la muestra total: el cinc puro es el 92 % de la masa de la muestra." },
      { error: "En e) usar s = Kps en vez de la expresión con factor 4.", como_evitar: "Escribir primero la disociación y los coeficientes del Kps, después despejar s." },
      { error: "En d) dibujar el ZnCl2 como si fuera covalente con dos enlaces Zn-Cl.", como_evitar: "Un metal con un halógeno forma una sal iónica: el Zn2+ se une a los iones Cl-, no a través de pares compartidos." }
    ]
  },
  {
    num: 11,
    nivel: "Tipo parcial",
    temas: ["termodinamica", "gases", "liquidos"],
    enunciado: "Datos a 25 °C: ΔHf CO2 = -393,5 kJ/mol; ΔHf H2O (l) = -285,8 kJ/mol; ΔH comb C3H8 = -2220 kJ/mol; ΔH comb C4H10 = -2878,6 kJ/mol; Cp H2O = 4,18 kJ/(kg K); ΔHv H2O = 2257 kJ/kg. a) Escribir las ecuaciones termoquímicas que representan los datos, nombrando los compuestos, y calcular el calor de formación del propano. b) Se queman 1,00 m3 en CNPT de una mezcla de propano y butano, y se obtienen 112 450 kJ. Hallar la proporción de cada gas en la mezcla. c) Calcular la masa de agua, inicialmente a 20 °C, que puede evaporarse con ese calor si el rendimiento térmico es 65 %.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Formación: $$\\text{C (grafito)} + \\text{O}_2 \\rightarrow \\text{CO}_2 \\qquad \\Delta H_f = -393{,}5\\ \\text{kJ/mol}$$ y $$\\text{H}_2 + \\frac{1}{2}\\,\\text{O}_2 \\rightarrow \\text{H}_2\\text{O (l)} \\qquad \\Delta H_f = -285{,}8\\ \\text{kJ/mol}$$", porque: "Las ecuaciones de formación parten de los elementos en su forma estable y forman 1 mol del compuesto, así que su ΔH es por definición el ΔHf dado." },
          { paso: "Combustión del propano: $$\\text{C}_3\\text{H}_8 + 5\\,\\text{O}_2 \\rightarrow 3\\,\\text{CO}_2 + 4\\,\\text{H}_2\\text{O (l)} \\qquad \\Delta H = -2220\\ \\text{kJ/mol}$$", porque: "Balanceamos el C (3 a la derecha), el H (8, que dan 4 H2O) y el O: a la derecha hay 6 + 4 = 10 átomos de O, o sea 5 O2 a la izquierda." },
          { paso: "Calor de formación del propano: por la ley de Hess, $$\\Delta H_f(\\text{C}_3\\text{H}_8) = \\left[3 \\times (-393{,}5) + 4 \\times (-285{,}8)\\right] - (-2220) = -103{,}7\\ \\text{kJ/mol}$$", porque: "Restamos el ΔH de combustión al calor de formación de los productos, porque la combustión es el camino inverso a formar CO2 y H2O a partir del propano." }
        ],
        resultado: "ΔHf(C3H8) = -103,7 kJ/mol"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Moles de gas: $$n_{\\text{total}} = \\frac{1\\,000\\ \\text{L}}{22{,}4\\ \\text{L/mol}} = 44{,}64\\ \\text{mol}$$", porque: "Pasamos 1,00 m3 (1000 L) a moles, usando el volumen molar de CNPT." },
          { paso: "Sistema de ecuaciones: $$x + y = 44{,}64 \\qquad 2220\\,x + 2878{,}6\\,y = 112\\,450$$ con x = mol de C3H8 e y = mol de C4H10.", porque: "Planteamos la suma de moles y la suma de calores liberados por cada gas. El calor total es la suma de cada cantidad por su ΔH de combustión." },
          { paso: "Resolviendo: $$x = 24{,}38\\ \\text{mol C}_3\\text{H}_8, \\qquad y = 20{,}26\\ \\text{mol C}_4\\text{H}_{10}$$", porque: "Despejamos y de la primera ecuación, la reemplazamos en la segunda y calculamos x por diferencia." },
          { paso: "Proporción: $$\\%\\ \\text{C}_3\\text{H}_8 = \\frac{24{,}38}{44{,}64} = 54{,}6\\ \\%; \\qquad \\%\\ \\text{C}_4\\text{H}_{10} = 45{,}4\\ \\%$$", porque: "En gases, la proporción en moles coincide con la proporción en volumen, así que la expresamos en porcentaje." }
        ],
        resultado: "Mezcla: 54,6 % C3H8 y 45,4 % C4H10 (en moles o volumen)"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "Calor útil: $$q_{\\text{útil}} = 0{,}65 \\times 112\\,450\\ \\text{kJ} = 73\\,092\\ \\text{kJ}$$", porque: "El rendimiento térmico indica la fracción del calor que se aprovecha; el resto se pierde." },
          { paso: "Energía por kg de agua: calentar de 20 °C a 100 °C y luego evaporar: $$4{,}18 \\times 80 + 2257 = 2591{,}4\\ \\text{kJ/kg}$$", porque: "Por cada kg de agua se necesita el calor sensible para subir 80 K y el calor latente de vaporización." },
          { paso: "Supuesto: toda el agua calentada se evapora. Masa: $$m = \\frac{73\\,092\\ \\text{kJ}}{2591{,}4\\ \\text{kJ/kg}} = 28{,}2\\ \\text{kg}$$", porque: "El enunciado pide la masa que puede evaporarse, así que suponemos que el calor alcanza para calentar y evaporar la misma masa de agua." }
        ],
        resultado: "Masa de agua evaporada: 28,2 kg"
      }
    ],
    errores_tipicos: [
      { error: "En a) invertir el signo al calcular el ΔHf del propano, o sumar el calor de combustión en vez de restarlo.", como_evitar: "Usar ΔHf(compuesto) = Σ ΔHf(productos) − ΔH_comb y revisar el signo con el resultado." },
      { error: "En b) asignar el calor del butano por mol de propano, o usar 1 m3 directamente como moles.", como_evitar: "Pasar primero el volumen a moles con 22,4 L/mol y después usar el ΔH de cada gas por mol." },
      { error: "En c) olvidar el rendimiento o usar 100 °C como temperatura inicial del agua.", como_evitar: "Aplicar primero el 65 % y después calcular la energía por kg desde 20 °C." }
    ]
  },
  {
    num: 12,
    nivel: "Tipo parcial",
    temas: ["equilibrio", "termodinamica", "gases"],
    enunciado: "Se colocan 0,80 mol de N2O4 puro en un recipiente rígido de 4,00 L a 27 °C, donde se establece el equilibrio N2O4 (g) <=> 2 NO2 (g), con ΔH > 0. En el equilibrio hay 0,40 mol de NO2 (g). a) Calcular Kc y escribir su expresión. b) Calcular Kp, suponiendo T = 300 K. c) Calcular la masa de NO2 y su fracción molar en el equilibrio. d) Si se quiere aumentar la cantidad de NO2 en el equilibrio, ¿conviene reducir el volumen del recipiente? Justificar. e) Con el mismo objetivo, ¿conviene aumentar la temperatura? Justificar.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Moles en equilibrio: si se forman 0,40 mol de NO2 y por cada mol de N2O4 que reacciona se forman 2 mol de NO2, reaccionaron 0,20 mol de N2O4. Quedan $0{,}80 - 0{,}20 = 0{,}60$ mol de N2O4.", porque: "La relación es 1 a 2: 0,40 mol de NO2 provienen de 0,20 mol de N2O4. Restamos ese consumo a la cantidad inicial." },
          { paso: "Concentraciones: $$[\\text{N}_2\\text{O}_4] = \\frac{0{,}60}{4{,}00} = 0{,}150\\ \\text{M}, \\qquad [\\text{NO}_2] = \\frac{0{,}40}{4{,}00} = 0{,}100\\ \\text{M}$$", porque: "La concentración es moles sobre litros del recipiente de 4,00 L." },
          { paso: "Expresión y valor: $$K_c = \\frac{[\\text{NO}_2]^2}{[\\text{N}_2\\text{O}_4]} = \\frac{(0{,}100)^2}{0{,}150} = 0{,}0667$$", porque: "En Kc entran las concentraciones de los productos elevadas a sus coeficientes sobre las de los reactivos. El NO2 aparece con coeficiente 2." }
        ],
        resultado: "Kc = 0,0667 (adimensional con concentraciones en mol/L)"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Variación de moles gaseosos: $\\Delta n = 2 - 1 = 1$. Con T = 300 K: $RT = 0{,}0821 \\times 300 = 24{,}63$ L atm/mol.", porque: "Kp se relaciona con Kc a través de Δn, la diferencia entre los moles gaseosos de productos y reactivos." },
          { paso: "Kp: $$K_p = K_c\\,(RT)^{\\Delta n} = 0{,}0667 \\times 24{,}63 = 1{,}64\\ \\text{atm}$$", porque: "Con Δn = +1, multiplicamos Kc por RT, porque los productos tienen más moles gaseosos que los reactivos." }
        ],
        resultado: "Kp = 1,64 atm"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "Masa de NO2: $$m = 0{,}40\\ \\text{mol} \\times 46{,}01\\ \\text{g/mol} = 18{,}4\\ \\text{g}$$", porque: "Multiplicamos los moles de NO2 en equilibrio por su masa molar." },
          { paso: "Fracción molar: $$x_{\\text{NO}_2} = \\frac{0{,}40}{0{,}60 + 0{,}40} = 0{,}40$$", porque: "La fracción molar es los moles de NO2 sobre el total de moles en equilibrio (0,60 mol de N2O4 y 0,40 mol de NO2)." }
        ],
        resultado: "m(NO2) = 18,4 g; x(NO2) = 0,40"
      },
      {
        parte: "d)",
        pasos: [
          { paso: "Al reducir el volumen aumenta la presión total. El equilibrio se desplaza hacia el lado con menos moles gaseosos, que es el N2O4 (1 mol frente a 2 mol de NO2).", porque: "Según el principio de Le Chatelier, el sistema responde a una mayor presión reduciendo el número de moles de gas, así que se forma más N2O4." },
          { paso: "Conclusión: no conviene reducir el volumen, porque disminuiría la cantidad de NO2.", porque: "El efecto de la compresión va en contra del objetivo: el equilibrio se corre hacia el reactivo." }
        ],
        resultado: "No: al reducir el volumen el equilibrio se desplaza hacia N2O4 y disminuye el NO2"
      },
      {
        parte: "e)",
        pasos: [
          { paso: "La reacción directa absorbe calor (ΔH > 0). Al aumentar la temperatura, el sistema absorbe el calor agregado desplazándose hacia la reacción directa, es decir, hacia el NO2.", porque: "Para un proceso endotérmico, subir la temperatura favorece la formación de productos y aumenta Kc." },
          { paso: "Conclusión: sí, aumentar la temperatura favorece la formación de NO2.", porque: "El desplazamiento hacia la derecha aumenta la cantidad de NO2 en el equilibrio." }
        ],
        resultado: "Sí: al subir T el equilibrio se desplaza hacia la derecha, aumentando el NO2"
      }
    ],
    errores_tipicos: [
      { error: "En a) escribir Kc = [NO2]/[N2O4] olvidando el coeficiente 2 del NO2.", como_evitar: "Los coeficientes de la ecuación son exponentes en la expresión de Kc." },
      { error: "En b) usar Kp = Kc sin considerar Δn.", como_evitar: "Calcular Δn = (moles gaseosos de productos) − (moles gaseosos de reactivos) y aplicar (RT)^Δn." },
      { error: "En d) pensar que al reducir el volumen se favorece el lado con más moles.", como_evitar: "Aumentar la presión favorece el lado con menos moles gaseosos." }
    ]
  }
);
