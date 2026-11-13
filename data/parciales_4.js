window.PARCIALES = window.PARCIALES || [];

// ============================================================
// PARCIAL TEMA B (documento escrito, sin fecha)
// Puntajes: Ej1 a=6 b=5 c=6 d=7 e=6 (30 pts); Ej2 a=6 b=5 c=7 d=6 e=8 f=8 (40 pts); Ej3 a=12 b=18 (30 pts). Total 100.
// Datos del examen: Vm = 22,4 L/mol (CNPT); ΔH comb propano = -2220 kJ/mol; ΔH comb butano = -2878,6 kJ/mol;
// ΔH fus agua = 6,03 kJ/mol; ΔH vap agua = 40,70 kJ/mol; Cp agua sólida = 33,60 J/(mol K); Cp agua líquida = 75,23 J/(mol K).
// Supuestos: M(H2O) = 18,0 g/mol; 25 °C para pH + pOH = 14; 1 atm en el calentamiento.
// ============================================================
window.PARCIALES.push({
  id: "parcial-tema-b",
  tipo: "Parcial (Tema B)",
  fecha: "sin fecha",
  fuente: "Parcial_Quimica (2).docx.pdf (documento escrito)",
  ejercicios: [
    {
      num: 1,
      temas: ["reacciones", "uniones", "nomenclatura"],
      enunciado: "Se lleva a cabo la reacción 2 KMnO4 (ac) + 3 H2SO4 (ac) + 5 H2O2 (ac) -> 2 MnSO4 (ac) + 5 O2 (g) + K2SO4 (ac) + 8 H2O (l) y se forman 20 moles de oxígeno. a) Balancear las semirreacciones de oxidación y reducción correspondientes utilizando el método ion-electrón. b) Indicar qué sustancia es el agente oxidante y cuál es el agente reductor. c) Calcular la cantidad de moles de electrones que se transfirieron al formarse los 20 moles de O2. d) Si el reactivo limitante es el permanganato de potasio y el peróxido de hidrógeno se agregó con un exceso del 20 %, calcular el volumen de agua oxigenada 2 M que se utilizó. e) Escribir la fórmula de Lewis de los productos de la reacción e indicar qué enlaces están presentes en cada una de esas sustancias y de qué tipo de sustancia se trata cada una (óxido, ácido, etc.).",
      resolucion: [
        {
          parte: "a)",
          pasos: [
            { paso: "Reducción del permanganato: $$\\text{MnO}_4^- + 8\\,\\text{H}^+ + 5\\,e^- \\rightarrow \\text{Mn}^{2+} + 4\\,\\text{H}_2\\text{O}$$", porque: "El manganeso pasa de +7 (en MnO4-) a +2 (en Mn2+) y gana 5 electrones. Para balancear por ion-electrón igualamos primero el Mn, después el O con H2O (4 a la derecha), luego el H con H+ (8 a la izquierda) y por último las cargas con electrones: a la izquierda hay +7 (el −1 del ion más los +8 de los H+) y a la derecha +2, así que faltan 5 electrones del lado de los reactivos." },
            { paso: "Oxidación del agua oxigenada: $$\\text{H}_2\\text{O}_2 \\rightarrow \\text{O}_2 + 2\\,\\text{H}^+ + 2\\,e^-$$", porque: "El oxígeno del H2O2 está en −1 y en el O2 está en 0: cada átomo pierde 1 electrón y se forman 2 por molécula de H2O2. Igualamos el O (2 a cada lado), después el H con H+ (2 a la derecha) y por último las cargas: a la izquierda hay 0 y a la derecha +2 − 2 = 0, con los 2 electrones del lado de los productos." },
            { paso: "Igualar electrones: multiplicamos la reducción por 2 (10 e−) y la oxidación por 5 (10 e−). Sumando: $$2\\,\\text{MnO}_4^- + 6\\,\\text{H}^+ + 5\\,\\text{H}_2\\text{O}_2 \\rightarrow 2\\,\\text{Mn}^{2+} + 5\\,\\text{O}_2 + 8\\,\\text{H}_2\\text{O}$$", porque: "Al multiplicar cada semirreacción por el factor que iguala los electrones, se cancelan en la suma. Los 16 H+ de la reducción menos los 10 que se forman en la oxidación dejan 6 H+ como reactivos, y las 8 H2O salen de la reducción." }
          ],
          resultado: "Reducción: MnO4- + 8 H+ + 5 e- -> Mn2+ + 4 H2O (x2); oxidación: H2O2 -> O2 + 2 H+ + 2 e- (x5)"
        },
        {
          parte: "b)",
          pasos: [
            { paso: "Agente oxidante: KMnO4 (el Mn baja de +7 a +2 y gana electrones).", porque: "El oxidante es la sustancia que gana electrones y, al hacerlo, provoca que otra se oxide. En la semirreacción de reducción es el permanganato el que se reduce, así que es el oxidante." },
            { paso: "Agente reductor: H2O2 (el O pasa de −1 a 0 y pierde electrones).", porque: "El reductor es la sustancia que pierde electrones y, al hacerlo, reduce a otra. El agua oxigenada se oxida en la semirreacción de oxidación, por eso es el reductor." }
          ],
          resultado: "Oxidante: KMnO4 (Mn +7 -> +2); reductor: H2O2 (O −1 -> 0)"
        },
        {
          parte: "c)",
          pasos: [
            { paso: "Electrones transferidos: $$n_{e^-} = 20\\ \\text{mol O}_2 \\times \\frac{10\\ \\text{mol e}^-}{5\\ \\text{mol O}_2} = 40\\ \\text{mol e}^-$$", porque: "Según la semirreacción de oxidación multiplicada por 5, se forman 5 mol de O2 con 10 mol de electrones; es decir, cada mol de O2 implica 2 mol de electrones. Multiplicando por los 20 mol de O2 obtenemos la cantidad de electrones transferidos." }
          ],
          resultado: "40 mol de electrones"
        },
        {
          parte: "d)",
          pasos: [
            { paso: "Permanganato consumido: $$n_{\\text{KMnO}_4} = 20\\ \\text{mol O}_2 \\times \\frac{2\\ \\text{mol KMnO}_4}{5\\ \\text{mol O}_2} = 8\\ \\text{mol}$$", porque: "La ecuación balanceada indica 2 mol de KMnO4 por cada 5 mol de O2. Como el permanganato es el reactivo limitante, la cantidad de producto se calcula a partir de él; partiendo de los 20 mol de O2 obtenemos los 8 mol de KMnO4 que reaccionan." },
            { paso: "H2O2 con 20 % de exceso: la relación es 1 a 1 (5 mol de H2O2 por cada 5 mol de O2), así que 20 mol de O2 requieren $n = 20\\ \\text{mol}$. Con el exceso: $$n = 1{,}2 \\times 20\\ \\text{mol} = 24\\ \\text{mol}$$", porque: "La ecuación da una relación 1 a 1 entre H2O2 y O2, así que 20 mol de O2 requieren 20 mol de H2O2. El exceso del 20 % se aplica sobre esa cantidad estequiométrica, multiplicando por 1,2, para asegurar que el limitante reaccione por completo." },
            { paso: "Volumen de H2O2 2 M: $$V = \\frac{n}{M} = \\frac{24\\ \\text{mol}}{2\\ \\text{mol/L}} = 12\\ \\text{L}$$", porque: "La molaridad relaciona moles con litros de solución: M = n / V, así que V = n / M. Con 24 mol de H2O2 y 2 mol/L se necesitan 12 L de la solución de agua oxigenada." }
          ],
          resultado: "Volumen de agua oxigenada 2 M: 12 L"
        },
        {
          parte: "e)",
          pasos: [
            { paso: "O2: $\\text{O}=\\text{O}$, con un enlace doble (un σ y un π) y dos pares libres en cada O.", porque: "Cada O tiene 6 electrones de valencia; compartir 2 pares completa el octeto de ambos átomos. Es una sustancia simple con enlace covalente apolar, porque los dos átomos son iguales." },
            { paso: "H2O: H–O–H, con dos pares libres sobre el O; los enlaces O–H son covalentes polares y la geometría es angular.", porque: "El O aporta 6 electrones: 2 se comparten con cada H y quedan 2 pares libres. Como el O es más electronegativo que el H, los enlaces son polares y, por la geometría angular, la molécula también es polar." },
            { paso: "MnSO4 y K2SO4: compuestos iónicos (catión Mn2+ o K+ con el anión sulfato SO4^2−); dentro del sulfato, el S tiene enlaces S=O y S–O covalentes.", porque: "Un metal unido a un anión oxigenado (oxoanión) forma una oxisal. El enlace entre el metal y el sulfato es iónico, mientras que dentro del sulfato los enlaces S–O son covalentes." }
          ],
          resultado: "O2: sustancia simple con doble enlace; H2O: compuesto molecular (óxido de hidrógeno); MnSO4 y K2SO4: sales oxigenadas iónicas"
        }
      ],
      errores_tipicos: [
        {
          error: "Balancear las semirreacciones sin igualar primero el O con H2O y el H con H+, o colocar los electrones del lado equivocado.",
          como_evitar: "Seguir el orden: Mn, luego O con H2O, luego H con H+, y por último las cargas con electrones. Verificar que la carga total sea igual a ambos lados."
        },
        {
          error: "Confundir oxidante y reductor, por ejemplo decir que el H2O2 es el oxidante porque es el reactivo que se consume.",
          como_evitar: "El oxidante es el que se reduce (gana electrones): el Mn baja de +7 a +2, así que el KMnO4 es el oxidante."
        },
        {
          error: "En d) aplicar el 20 % de exceso sobre el limitante, o tratar los moles de H2O2 como si fueran litros.",
          como_evitar: "El exceso se aplica al H2O2 (1,2 × n estequiométrico) y recién después V = n / M."
        }
      ]
    },
    {
      num: 2,
      temas: ["termodinamica", "gases", "liquidos"],
      enunciado: "Se mezclan 13 448 L de propano con 8 966 L de butano gaseosos medidos en CNPT. Esta mezcla se utilizó como combustible, quemándola con aire para obtener como productos agua líquida y dióxido de carbono gaseoso. El calor producido se utiliza para calentar 900 kg de agua que se hallan inicialmente a −10 °C, manteniendo la P = cte igual a 1 atm durante todo el calentamiento. a) Escribir las ecuaciones termoquímicas de la combustión completa de los gases utilizados. b) Hallar la fracción molar de cada componente de la mezcla combustible. c) Hallar los moles de oxígeno necesarios para la combustión si se lo emplea con un exceso de 20 % respecto del estequiométrico. d) Determinar el calor generado por la combustión. e) Calcular el ΔH correspondiente a los 900 kg de agua que se calientan, considerando que el 20 % del calor generado en la combustión se pierde por disipación hacia el entorno. f) Bosquejar la curva de calentamiento del agua y hallar su estado final (temperatura y fases presentes).",
      resolucion: [
        {
          parte: "a)",
          pasos: [
            { paso: "Propano: $$\\text{C}_3\\text{H}_8 + 5\\,\\text{O}_2 \\rightarrow 3\\,\\text{CO}_2 + 4\\,\\text{H}_2\\text{O}(\\text{l})$$", porque: "Balanceamos el C (3 a la derecha), luego el H (8 a la izquierda, que dan 4 H2O) y por último el O: a la derecha hay 3 · 2 + 4 = 10 átomos de O, o sea 5 O2 a la izquierda. El agua se escribe líquida, como indica el enunciado." },
            { paso: "Butano: $$\\text{C}_4\\text{H}_{10} + \\frac{13}{2}\\,\\text{O}_2 \\rightarrow 4\\,\\text{CO}_2 + 5\\,\\text{H}_2\\text{O}(\\text{l})$$", porque: "El C del butano va a 4 CO2 y el H (10) a 5 H2O. Del lado de los productos hay 4 · 2 + 5 = 13 átomos de O, así que se necesitan 13/2 O2. Si preferimos coeficientes enteros, multiplicamos todo por 2: 2 C4H10 + 13 O2 -> 8 CO2 + 10 H2O." }
          ],
          resultado: "Propano: C3H8 + 5 O2 -> 3 CO2 + 4 H2O(l); butano: C4H10 + 13/2 O2 -> 4 CO2 + 5 H2O(l)"
        },
        {
          parte: "b)",
          pasos: [
            { paso: "Moles de cada gas en CNPT (Vm = 22,4 L/mol): $$n_{\\text{propano}} = \\frac{13\\,448\\ \\text{L}}{22{,}4\\ \\text{L/mol}} = 600{,}36\\ \\text{mol}, \\qquad n_{\\text{butano}} = \\frac{8\\,966\\ \\text{L}}{22{,}4\\ \\text{L/mol}} = 400{,}27\\ \\text{mol}$$", porque: "En CNPT un mol de gas ideal ocupa 22,4 L, así que dividiendo el volumen de cada gas por ese valor obtenemos su cantidad de sustancia. Como los dos gases están medidos en las mismas condiciones, la relación entre moles es la misma que la de volúmenes." },
            { paso: "Fracciones molares: $$x_{\\text{propano}} = \\frac{600{,}36}{1000{,}63} = 0{,}600, \\qquad x_{\\text{butano}} = \\frac{400{,}27}{1000{,}63} = 0{,}400$$", porque: "La fracción molar de cada componente es su cantidad de moles dividida por el total de moles de la mezcla (600,36 + 400,27 = 1000,63 mol). La suma de ambas fracciones tiene que dar 1, lo que sirve como control." }
          ],
          resultado: "x(propano) = 0,600; x(butano) = 0,400"
        },
        {
          parte: "c)",
          pasos: [
            { paso: "Oxígeno estequiométrico: $$n_{\\text{O}_2} = 600{,}36 \\times 5 + 400{,}27 \\times 6{,}5 = 5\\,603{,}5\\ \\text{mol}$$", porque: "Por la ecuación de cada gas, el propano necesita 5 mol de O2 por mol y el butano 6,5 mol de O2 por mol. Multiplicamos cada cantidad de moles por su coeficiente y sumamos para obtener el oxígeno que consume la mezcla." },
            { paso: "Con 20 % de exceso: $$n = 1{,}2 \\times 5\\,603{,}5 = 6\\,724{,}2\\ \\text{mol O}_2$$", porque: "El exceso se aplica sobre la cantidad estequiométrica, por eso multiplicamos por 1,2. Así se asegura que los combustibles se quemen por completo aunque el aire no se mezcle perfectamente." }
          ],
          resultado: "O2 a suministrar: 6 724,2 mol (5 603,5 mol estequiométricos más 20 %)"
        },
        {
          parte: "d)",
          pasos: [
            { paso: "Calor de cada gas: $$q_{\\text{propano}} = 600{,}36 \\times (-2220) = -1{,}333\\times10^{6}\\ \\text{kJ}; \\qquad q_{\\text{butano}} = 400{,}27 \\times (-2878{,}6) = -1{,}152\\times10^{6}\\ \\text{kJ}$$", porque: "La entalpía de combustión está dada por mol de combustible, así que multiplicamos la cantidad de cada gas por su ΔH. El signo negativo indica que la combustión libera calor (es exotérmica)." },
            { paso: "Calor total: $$q_{\\text{comb}} = -1{,}333\\times10^{6} - 1{,}152\\times10^{6} = -2{,}485\\times10^{6}\\ \\text{kJ}$$", porque: "Sumamos los aportes de los dos gases para obtener el calor total de la combustión de la mezcla. Como el sistema libera energía, el valor es negativo; esa energía es la que después se transfiere al agua." }
          ],
          resultado: "Calor generado por la combustión: $-2{,}485\\times10^{6}\\ \\text{kJ}$ (se liberan 2,485 × 10^6 kJ)"
        },
        {
          parte: "e)",
          pasos: [
            { paso: "Calor absorbido por el agua: $$q_{\\text{agua}} = 0{,}80 \\times 2{,}485\\times10^{6}\\ \\text{kJ} = 1{,}988\\times10^{6}\\ \\text{kJ}$$", porque: "Del calor liberado, el 20 % se pierde hacia el entorno, así que solo queda el 80 % para calentar el agua. Como ese calor entra al agua, es positivo para ella." },
            { paso: "Moles de agua: $$n = \\frac{900\\,000\\ \\text{g}}{18{,}0\\ \\text{g/mol}} = 5{,}00\\times10^{4}\\ \\text{mol}$$", porque: "Pasamos los 900 kg a gramos y dividimos por la masa molar del agua para obtener la cantidad de sustancia que se calienta. Este valor se usa en los tramos de la parte f)." },
            { paso: "ΔH del agua: $$\\Delta H = q_p = +1{,}988\\times10^{6}\\ \\text{kJ}$$", porque: "A presión constante el calor intercambiado es igual a la variación de entalpía, ΔH = q_p. Como el agua absorbe calor, su ΔH es positivo y coincide con el 80 % del calor de la combustión." }
          ],
          resultado: "ΔH (900 kg de agua) = $+1{,}988\\times10^{6}\\ \\text{kJ}$"
        },
        {
          parte: "f)",
          pasos: [
            { paso: "Tramo 1, hielo de −10 °C a 0 °C: $$q_1 = n\\,c_{\\text{sólido}}\\,\\Delta T = 5{,}00\\times10^{4} \\times 33{,}60 \\times 10 = 1{,}68\\times10^{4}\\ \\text{kJ}$$", porque: "Mientras el agua está sólida, el calor sensible se calcula con el Cp del sólido: q = n · Cp · ΔT. Pasamos J a kJ dividiendo por 1000." },
            { paso: "Tramo 2, fusión a 0 °C: $$q_2 = n\\,\\Delta H_{\\text{fus}} = 5{,}00\\times10^{4} \\times 6{,}03 = 3{,}015\\times10^{5}\\ \\text{kJ}$$", porque: "Durante el cambio de fase la temperatura no varía; todo el calor se usa para romper las uniones del sólido. Ese calor es el latente: q = n · ΔH_fus." },
            { paso: "Tramo 3, líquido de 0 °C a 100 °C: $$q_3 = n\\,c_{\\text{líquido}}\\,\\Delta T = 5{,}00\\times10^{4} \\times 75{,}23 \\times 100 = 3{,}76\\times10^{5}\\ \\text{kJ}$$", porque: "Ahora el agua es líquida y se calienta con el Cp del líquido desde 0 °C hasta 100 °C, la temperatura de ebullición a 1 atm." },
            { paso: "Calor para llegar a 100 °C líquida: $$q_1 + q_2 + q_3 = 1{,}68\\times10^{4} + 3{,}015\\times10^{5} + 3{,}76\\times10^{5} = 6{,}94\\times10^{5}\\ \\text{kJ}$$ Quedan $1{,}29\\times10^{6}\\ \\text{kJ}$ para vaporizar.", porque: "Sumamos los tres tramos para saber cuánto calor se gasta hasta 100 °C. Lo que sobra del calor disponible se usa para vaporizar, y como la vaporización ocurre a temperatura constante, el agua se queda en 100 °C mientras cambia de estado." },
            { paso: "Vaporización: $$n_{\\text{vap}} = \\frac{1{,}29\\times10^{6}\\ \\text{kJ}}{40{,}70\\ \\text{kJ/mol}} = 3{,}18\\times10^{4}\\ \\text{mol}$$ El líquido que queda es $5{,}00\\times10^{4} - 3{,}18\\times10^{4} = 1{,}82\\times10^{4}\\ \\text{mol}$.", porque: "Con ΔH_vap = 40,70 kJ/mol, el calor restante alcanza para vaporizar unas 31 800 mol de agua. Lo que no se vaporiza sigue en fase líquida, a 100 °C." },
            { paso: "Curva de calentamiento: hielo que sube de −10 °C a 0 °C, meseta a 0 °C (fusión), líquido que sube de 0 °C a 100 °C y meseta a 100 °C (vaporización), que solo se recorre hasta agotar el calor disponible.", porque: "La curva tiene pendientes distintas porque el Cp del sólido y el del líquido son diferentes, y tiene mesetas en los cambios de fase porque ahí la temperatura permanece constante. Como el calor no alcanza para vaporizar todo, la curva termina en la segunda meseta, a 100 °C." },
            { paso: "Estado final: T = 100 °C, con vapor y líquido coexistiendo (aprox. 64 % vapor y 36 % líquido).", porque: "Cuando hay líquido y vapor en equilibrio a 1 atm, la temperatura se queda en la de ebullición, 100 °C. Como el calor disponible no alcanza para vaporizar todo el agua, el sistema tiene las dos fases." }
          ],
          resultado: "T final = 100 °C; fases presentes: vapor y líquido"
        }
      ],
      errores_tipicos: [
        {
          error: "Calcular el calor del agua solo con Cp, olvidando la fusión (0 °C) y la vaporización (100 °C).",
          como_evitar: "En esas temperaturas el calor se usa para cambiar de estado: hay que sumar n · ΔH_fus y n · ΔH_vap."
        },
        {
          error: "Usar el 100 % del calor de combustión en vez del 80 % que llega al agua.",
          como_evitar: "Primero aplicar la pérdida del 20 % y después usar ese valor en los tramos de calentamiento."
        },
        {
          error: "Olvidar que el agua de la combustión es líquida o usar el ΔH de combustión por gramo en vez de por mol.",
          como_evitar: "Escribir la ecuación con H2O(l) y multiplicar siempre la cantidad de moles de cada gas por su ΔH en kJ/mol."
        }
      ]
    },
    {
      num: 3,
      temas: ["soluciones", "acidobase"],
      enunciado: "a) Se mezclan 8 L de solución acuosa de H2SO4 0,4 M con 25 L de disolución acuosa de NaOH 0,3 M. Escribir la ecuación de la reacción que tiene lugar y calcular el pH de la solución obtenida (considerar que ambos electrolitos son fuertes). b) Se disuelve 0,01 mol de amoníaco en 1 L de agua y la constante de disociación de la base vale 1,8 x 10^-5. Escribir el grado de disociación de la base y el pH de la solución.",
      resolucion: [
        {
          parte: "a)",
          pasos: [
            { paso: "Moles: $$n_{\\text{H}_2\\text{SO}_4} = 0{,}4 \\times 8 = 3{,}2\\ \\text{mol}, \\qquad n_{\\text{NaOH}} = 0{,}3 \\times 25 = 7{,}5\\ \\text{mol}$$ Como el H2SO4 tiene 2 H+ por molécula, aporta 6,4 mol de H+.", porque: "Multiplicamos la molaridad por el volumen en litros para obtener los moles. El ácido es diprótico, así que 3,2 mol de H2SO4 liberan 6,4 mol de H+, frente a los 7,5 mol de OH- de la base." },
            { paso: "Ecuación: $$\\text{H}_2\\text{SO}_4 + 2\\,\\text{NaOH} \\rightarrow \\text{Na}_2\\text{SO}_4 + 2\\,\\text{H}_2\\text{O}$$ neta: $\\text{H}^+ + \\text{OH}^- \\rightarrow \\text{H}_2\\text{O}$", porque: "La neutralización combina H+ con OH- para formar agua. Como la base tiene más OH- (7,5 mol) que H+ del ácido (6,4 mol), quedan OH- sin neutralizar, y son ellos los que determinan el pH." },
            { paso: "Exceso de OH-: $7{,}5 - 6{,}4 = 1{,}1$ mol; volumen total 8 L + 25 L = 33 L. $$[\\text{OH}^-] = \\frac{1{,}1\\ \\text{mol}}{33\\ \\text{L}} = 0{,}0333\\ \\text{M}$$", porque: "Cada H+ que reacciona consume un OH-, así que el exceso de OH- es la diferencia de moles. La concentración se calcula dividiendo ese exceso por el volumen total de la mezcla." },
            { paso: "$\\text{pOH} = -\\log(0{,}0333) = 1{,}48$ y $\\text{pH} = 14 - 1{,}48 = 12{,}52$", porque: "El pOH es −log[OH-] y, a 25 °C, pH + pOH = 14. Como sobra base, el pH es mayor que 7." }
          ],
          resultado: "pH = 12,52 (solución básica)"
        },
        {
          parte: "b)",
          pasos: [
            { paso: "Equilibrio: $$\\text{NH}_3 + \\text{H}_2\\text{O} \\rightleftharpoons \\text{NH}_4^+ + \\text{OH}^-$$ con $C = 0{,}01$ M.", porque: "El amoníaco es una base débil: acepta un protón del agua y produce OH-. Como se disuelven 0,01 mol en 1 L, la concentración inicial es C = 0,01 M." },
            { paso: "Grado de disociación: $$\\alpha = \\sqrt{\\frac{K_b}{C}} = \\sqrt{\\frac{1{,}8\\times10^{-5}}{0{,}01}} = 4{,}24\\times10^{-2}$$ (4,24 %)", porque: "Para una base débil, K_b = C · α² / (1 − α). Si α es pequeño, 1 − α es aproximadamente 1 y α ≈ √(K_b / C). Como 4,24 % es menor que 5 %, la aproximación es válida." },
            { paso: "$[\\text{OH}^-] = C\\,\\alpha = 0{,}01 \\times 4{,}24\\times10^{-2} = 4{,}24\\times10^{-4}\\ \\text{M}$; $\\text{pOH} = 3{,}37$; $\\text{pH} = 10{,}63$", porque: "Por cada NH3 que reacciona se forma un OH-, así que [OH-] = C · α. Luego pOH = −log[OH-] y pH = 14 − pOH. Un pH básico es coherente con una base." }
          ],
          resultado: "α = 4,24 %; pH = 10,63"
        }
      ],
      errores_tipicos: [
        {
          error: "Contar 1 mol de H+ por mol de H2SO4 y calcular mal el exceso.",
          como_evitar: "El H2SO4 es diprótico: 3,2 mol de ácido son 6,4 mol de H+. Restar ese valor a los 7,5 mol de OH-."
        },
        {
          error: "Dar pH = 7 o usar el volumen de un solo reactivo en la concentración final.",
          como_evitar: "Sobra base, así que el pH es básico; la concentración se calcula con el volumen total (33 L)."
        },
        {
          error: "En b) calcular [H+] = C · α o usar la fórmula de ácido débil.",
          como_evitar: "Para una base débil la concentración que importa es [OH-] = C · α; después pOH y pH = 14 − pOH."
        }
      ]
    }
  ]
});
