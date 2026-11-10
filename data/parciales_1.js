window.PARCIALES = window.PARCIALES || [];

// ============================================================
// EXAMEN 1: 1er recuperatorio 14/06/2024 (WA0021)
// Grilla de correccion (puntaje por inciso): Ej1 a=8 b=12 c=10 (30 pts); Ej2 a=12 b=8 c=10 (30 pts); Ej3 a=10 b=10 c=8 d=12 (40 pts). Total 100. Aprueba con 60/100 y al menos 50% de ejercicios bien.
// Constantes del examen: R = 8,31 J/mol.K = 0,0821 L.atm/mol.K = 1,99 cal/mol.K
// ============================================================
window.PARCIALES.push({
  id: "1rec-2024-06-14",
  tipo: "1er recuperatorio",
  fecha: "14/06/2024",
  fuente: "parciales/IMG-20260331-WA0021.jpg",
  ejercicios: [
    {
      num: 1,
      temas: ["reacciones", "gases", "soluciones", "acidobase"],
      enunciado: "5,0 g de una mezcla de 20% en masa de carbonato de calcio y 80% en masa de hidrogenocarbonato de calcio se calientan fuertemente hasta la descomposicion total de ambos compuestos con un 90% de rendimiento. Las reacciones se dan segun las siguientes ecuaciones: Ca(HCO3)2(s) -> CaO(s) + 2 CO2(g) + H2O(l) ; CaCO3(s) -> CaO(s) + CO2(g). a) Calcule el volumen total de CO2(g) obtenido en ambas reacciones en CNPT. b) Si el oxido de calcio total obtenido en ambas reacciones se disuelve en 10 litros de agua para formar hidroxido de calcio, escriba la reaccion correspondiente al proceso y calcule la concentracion molar y el pH de la solucion resultante. c) Escriba la estructura de Lewis del oxido de calcio y del dioxido de carbono e indique cual de ellos es mas soluble en agua, justificando su respuesta en funcion de su estructura.",
      resolucion: [
        {
          parte: "a)",
          pasos: [
            { paso: "Masas molares: $\\text{CaCO}_3 = 100\\ \\text{g/mol}$; $\\text{Ca(HCO}_3\\text{)}_2 = 162\\ \\text{g/mol}$.", porque: "Calculamos la masa molar sumando las masas atomicas de cada elemento tantas veces como aparece en la formula, porque esa suma indica cuantos gramos tiene un mol de cada sustancia. Con $\\text{CaCO}_3 = 100\\ \\text{g/mol}$ y $\\text{Ca(HCO}_3\\text{)}_2 = 162\\ \\text{g/mol}$ queda definido el factor que convierte gramos en moles en todo el ejercicio. Por eso conviene revisar los subindices antes de sumar, ya que un subindice mal leido cambia toda la cuenta." },
            { paso: "Masa de $\\text{CaCO}_3$: $$m = 0{,}20\\times 5{,}0\\ \\text{g} = 1{,}00\\ \\text{g}$$ es decir $0{,}0100\\ \\text{mol}$. Masa de $\\text{Ca(HCO}_3\\text{)}_2 = 0{,}80 \\times 5{,}0\\ \\text{g} = 4{,}00\\ \\text{g}$, es decir $0{,}02469\\ \\text{mol}$.", porque: "Como la mezcla es 20% y 80% en masa, la masa de cada sal es su fraccion de los 5,0 g totales: $0{,}20 \\times 5{,}0\\ \\text{g} = 1{,}00\\ \\text{g}$ de $\\text{CaCO}_3$ y $0{,}80 \\times 5{,}0\\ \\text{g} = 4{,}00\\ \\text{g}$ de $\\text{Ca(HCO}_3\\text{)}_2$. Usamos $n = \\frac{m}{M}$ y dividimos cada masa por su masa molar, lo que da $0{,}0100\\ \\text{mol}$ y $0{,}02469\\ \\text{mol}$. Entonces ya tenemos las cantidades de sal que se descomponen, y son el punto de partida para contar el $\\text{CO}_2$." },
            { paso: "$\\text{CO}_2$ teorico: $0{,}0100\\ \\text{mol}$ (del $\\text{CaCO}_3$) + $2 \\times 0{,}02469\\ \\text{mol}$ (del $\\text{Ca(HCO}_3\\text{)}_2$, que libera $2\\ \\text{CO}_2$) = $0{,}05938\\ \\text{mol}$.", porque: "Contamos el $\\text{CO}_2$ que aporta cada sal con los coeficientes de la ecuacion ya balanceada: el $\\text{CaCO}_3$ libera $1$ mol de $\\text{CO}_2$ por mol y el $\\text{Ca(HCO}_3\\text{)}_2$ libera $2$. Por eso al bicarbonato le aplicamos el factor $2$ antes de sumar. Como ambas descomposiciones ocurren en el mismo proceso, el $\\text{CO}_2$ total es la suma de los dos aportes: $0{,}0100\\ \\text{mol} + 2 \\times 0{,}02469\\ \\text{mol} = 0{,}05938\\ \\text{mol}$." },
            { paso: "Con $90\\%$ de rendimiento: $$n(\\text{CO}_2) = 0{,}90 \\times 0{,}05938 = 0{,}05344\\ \\text{mol}$$", porque: "Como el rendimiento es la fraccion del valor teorico que realmente se obtiene, calculamos el valor real multiplicando el teorico por $0{,}90$. Usamos $0{,}05938\\ \\text{mol}$ como teorico y obtenemos $n(\\text{CO}_2) = 0{,}90 \\times 0{,}05938 = 0{,}05344\\ \\text{mol}$. Entonces el $\\text{CO}_2$ que efectivamente se obtiene es algo menor que el teorico, y ese valor es el que usamos para el volumen. Conviene aplicar el $0{,}90$ al total y no a las fracciones de la mezcla." },
            { paso: "Suposicion: el 90% se aplica al $\\text{CO}_2$ de cada reaccion. Volumen en CNPT: $$V = n \\times 22{,}4\\ \\text{L/mol} = 1{,}20\\ \\text{L}$$ (con $V = \\frac{nRT}{P}$ a $273\\ \\text{K}$ y $1\\ \\text{atm}$ tambien da $1{,}20\\ \\text{L}$).", porque: "Usamos la ecuacion de gas ideal $PV = nRT$, y en CNPT un mol de gas ocupa $22{,}4\\ \\text{L}$, por lo que el volumen sale de multiplicar los moles por ese valor. Con $n = 0{,}05344\\ \\text{mol}$ calculamos $V = 0{,}05344 \\times 22{,}4\\ \\text{L/mol} = 1{,}20\\ \\text{L}$. Como a temperatura y presion constantes el volumen es proporcional a los moles, aplicar el 90% antes o despues de sumar da el mismo resultado. Conviene verificar que $22{,}4\\ \\text{L/mol}$ corresponda a las condiciones de referencia." }
          ],
          resultado: "$V(\\text{CO}_2)$ total = $1{,}20\\ \\text{L}$ en CNPT"
        },
        {
          parte: "b)",
          pasos: [
            { paso: "$\\text{CaO}$ total: $$n = 0{,}90 \\times (0{,}0100 + 0{,}02469)\\ \\text{mol} = 0{,}03122\\ \\text{mol}$$", porque: "Usamos la relacion molar de cada ecuacion: el $\\text{CaCO}_3$ y el $\\text{Ca(HCO}_3\\text{)}_2$ forman $1$ mol de $\\text{CaO}$ por mol de sal, asi que el $\\text{CaO}$ teorico es la suma de los moles de ambas sales, $0{,}0100 + 0{,}02469$. Luego aplicamos el 90% de rendimiento a ese total, igual que con el $\\text{CO}_2$. Entonces el $\\text{CaO}$ que se disuelve es $0{,}03122\\ \\text{mol}$, y conviene recordar que el bicarbonato aporta $\\text{CO}_2$ y agua, pero solo $1$ mol de $\\text{CaO}$." },
            { paso: "Reaccion: $\\text{CaO(s)} + \\text{H}_2\\text{O(l)} \\rightarrow \\text{Ca(OH)}_2\\text{(ac)}$, relacion $1{:}1$.", porque: "El oxido metalico reacciona con agua y forma el hidroxido correspondiente, que en este caso es $\\text{Ca(OH)}_2$, una base fuerte. Como la relacion es $1{:}1$, los $0{,}03122\\ \\text{mol}$ de $\\text{CaO}$ pasan integros a $\\text{Ca(OH)}_2$. Por eso el paso siguiente usa ese mismo valor de moles para calcular la concentracion. Verificamos que el producto sea $\\text{Ca(OH)}_2$ y no $\\text{CaOH}_2$, porque la cantidad de $\\text{OH}^-$ depende del subindice." },
            { paso: "Suposicion: el volumen de solucion es $10\\ \\text{L}$ (se toma el agua como volumen final). $$[\\text{Ca(OH)}_2] = \\frac{0{,}03122\\ \\text{mol}}{10\\ \\text{L}} = 3{,}12 \\times 10^{-3}\\ \\text{M}$$", porque: "Usamos $M = \\frac{n}{V}$, es decir moles de soluto sobre litros de solucion. El enunciado da $10\\ \\text{L}$ de agua y no el volumen final de la solucion, asi que tomamos $10\\ \\text{L}$ como aproximacion, razonable porque el solido disuelto ocupa un volumen muy chico. Con $\\frac{0{,}03122\\ \\text{mol}}{10\\ \\text{L}}$ obtenemos $[\\text{Ca(OH)}_2] = 3{,}12 \\times 10^{-3}\\ \\text{M}$. Conviene dejar explicita esta suposicion, porque cambia el valor de la molaridad." },
            { paso: "$[\\text{OH}^-] = 2 \\times [\\text{Ca(OH)}_2] = 6{,}24 \\times 10^{-3}\\ \\text{M}$ (cada $\\text{Ca(OH)}_2$ libera $2\\ \\text{OH}^-$).", porque: "Como el $\\text{Ca(OH)}_2$ es una base fuerte que se disocia totalmente, cada unidad libera dos iones $\\text{OH}^-$ ($\\text{Ca(OH)}_2 \\rightarrow \\text{Ca}^{2+} + 2\\ \\text{OH}^-$). Por eso $[\\text{OH}^-] = 2 \\times 3{,}12 \\times 10^{-3}\\ \\text{M} = 6{,}24 \\times 10^{-3}\\ \\text{M}$, el doble de la molar del hidroxido. Entonces no podemos tomar $[\\text{OH}^-]$ igual a la concentracion de la base, porque el ion calcio no aporta $\\text{OH}^-$. Este paso evita ese error." },
            { paso: "$$\\text{pOH} = -\\log(6{,}24 \\times 10^{-3}) = 2{,}20$$ $\\text{pH} = 14 - 2{,}20 = 11{,}80$.", porque: "Por definicion $\\text{pOH} = -\\log[\\text{OH}^-]$, y como $\\text{pH} + \\text{pOH} = 14$ el pH se obtiene restando el pOH de $14$. Usamos $[\\text{OH}^-] = 6{,}24 \\times 10^{-3}\\ \\text{M}$ para calcular $\\text{pOH} = -\\log(6{,}24 \\times 10^{-3}) = 2{,}20$. Entonces $\\text{pH} = 14 - 2{,}20 = 11{,}80$, un valor basico coherente con el hidroxido de calcio. Conviene no redondear demasiado el logaritmo antes del ultimo paso." }
          ],
          resultado: "$[\\text{Ca(OH)}_2] = 3{,}12 \\times 10^{-3}\\ \\text{M}$; $\\text{pH} = 11{,}80$"
        },
        {
          parte: "c)",
          pasos: [
            { paso: "$\\text{CaO}$: compuesto ionico, $\\text{Ca}^{2+}$ y $\\text{O}^{2-}$. Lewis: $[\\text{Ca}]^{2+}\\ [\\text{:O:}]^{2-}$ (el O tiene $8$ electrones alrededor).", porque: "Para la estructura de Lewis del $\\text{CaO}$ tenemos en cuenta que el calcio cede sus electrones de valencia y el oxigeno los acepta, formando $\\text{Ca}^{2+}$ y $\\text{O}^{2-}$. Como es un compuesto ionico, cada ion se dibuja por separado con su carga, y el $\\text{O}^{2-}$ muestra $8$ electrones alrededor. Por eso no aparecen pares compartidos en el dibujo. Verificamos que no se dibujen enlaces covalentes, porque en un ionico no los hay." },
            { paso: "$\\text{CO}_2$: $\\text{O=C=O}$, molecula lineal con dos dobles enlaces $\\text{C=O}$ y sin pares libres en el $\\text{C}$.", porque: "Calculamos el total de electrones de valencia de la molecula de $\\text{CO}_2$ y los ubicamos para completar los octetos. Como el carbono no puede quedar con pares libres, se necesitan dos dobles enlaces, uno con cada O, y eso da la forma lineal $\\text{O=C=O}$. Por eso la estructura no tiene pares libres en el C. Verificamos que el total de electrones de valencia sea el correcto antes de dibujar la estructura." },
            { paso: "El $\\text{CO}_2$ es apolar porque, por la geometria lineal, los dipolos de enlace se cancelan. El agua es polar, asi que el $\\text{CO}_2$ se disuelve poco.", porque: "La polaridad depende de la suma vectorial de los dipolos de enlace: en el $\\text{CO}_2$ los dos dipolos $\\text{C=O}$ son iguales y opuestos, asi que se cancelan por la geometria lineal. Usamos la regla semejante disuelve semejante: como el $\\text{CO}_2$ es apolar y el agua es polar, predecimos que se disuelve poco. Entonces la conclusion sale de la forma de la molecula y no solo de que los enlaces sean polares." },
            { paso: "El $\\text{CaO}$ es ionico: en agua los iones se solvatan por interaccion ion-dipolo, y ademas reacciona formando $\\text{Ca(OH)}_2$.", porque: "Un compuesto ionico se disuelve porque sus iones se rodean de moleculas de agua, en la solvatacion ion-dipolo. Ademas el $\\text{CaO}$ reacciona con el agua y se transforma en $\\text{Ca(OH)}_2$, lo que aumenta la solubilidad aparente. Por eso el $\\text{CaO}$ aparece como el mas soluble. Conviene no confundir disolucion fisica con reaccion quimica al comparar solubilidades." }
          ],
          resultado: "El $\\text{CaO}$ es el mas soluble (en realidad reacciona con el agua); el $\\text{CO}_2$ es apolar y poco soluble"
        }
      ],
      errores_tipicos: [
        {
          error: "Tomar 1 mol de CO2 por mol de Ca(HCO3)2, olvidando que su descomposicion libera 2 CO2.",
          como_evitar: "Balancear cada reaccion antes de contar: el Ca(HCO3)2 aporta 2 mol de CO2 por mol y el CaCO3 aporta 1."
        },
        {
          error: "Aplicar mal el 90% de rendimiento, por ejemplo aplicarlo solo a una reaccion o no aplicarlo al volumen final.",
          como_evitar: "Calcular el CO2 teorico de cada reaccion, multiplicar cada uno por 0,90 y recien despues sumar."
        },
        {
          error: "En b) tomar [OH-] igual a [Ca(OH)2], olvidando que cada formula libera 2 OH-, y por eso el pH sale mal.",
          como_evitar: "Primero [OH-] = 2 x [Ca(OH)2], luego pOH = -log[OH-] y pH = 14 - pOH."
        }
      ]
    },
    {
      num: 2,
      temas: ["magnitudes", "nomenclatura", "termodinamica"],
      enunciado: "Se sabe que la combustion completa de un mol de combustible liquido que solo contiene C y H, produce 220 g de CO2 gaseoso y 108 g de H2O liquida. Se sabe ademas que la entalpia de combustion para dicho combustible es de -3537,06 kJ/mol. a) Con los datos de que dispone indique cual es la formula molecular del combustible propuesto e indique la formula desarrollada y el nombre de una posible sustancia que cumpla con la consigna del enunciado, justificando su razonamiento. b) Si se sabe ademas que ΔHºf CO2(g) = -393,5 kJ/mol y ΔHºf H2O(l) = -286,0 kJ/mol, calcule la entalpia de formacion para el combustible liquido propuesto. Justifique su respuesta. c) Calcule la variacion de energia interna para la combustion de 1 mol del combustible liquido a 25 C. Justifique su razonamiento.",
      resolucion: [
        {
          parte: "a)",
          pasos: [
            { paso: "$n(\\text{CO}_2) = \\frac{220\\ \\text{g}}{44\\ \\text{g/mol}} = 5\\ \\text{mol}$, es decir $5\\ \\text{C}$ por mol de combustible.", porque: "Usamos $n = \\frac{m}{M}$ para pasar la masa de $\\text{CO}_2$ a moles, y como todo el carbono del combustible termina en ese gas, el resultado indica cuantos C tiene cada mol. Dividimos $220\\ \\text{g}$ por $44\\ \\text{g/mol}$ y obtenemos $5\\ \\text{mol}$, es decir $5\\ \\text{C}$ por mol de combustible. Entonces el combustible tiene $5$ atomos de carbono. Verificamos que el calculo se haga por mol de combustible, porque de eso depende el numero de carbonos." },
            { paso: "$$n(\\text{H}_2\\text{O}) = \\frac{108\\ \\text{g}}{18\\ \\text{g/mol}} = 6\\ \\text{mol}$$, es decir $12\\ \\text{H}$ por mol de combustible.", porque: "Aplicamos el mismo balance pero para el hidrogeno: todo el $\\text{H}$ del combustible termina en $\\text{H}_2\\text{O}$, y cada molecula de agua tiene dos atomos de $\\text{H}$. Usamos $n = \\frac{m}{M}$ con $108\\ \\text{g}$ y $18\\ \\text{g/mol}$ para obtener $6\\ \\text{mol}$ de $\\text{H}_2\\text{O}$. Entonces los $\\text{H}$ por mol de combustible son el doble de los moles de agua, $2 \\times 6 = 12$. Verificamos que se multiplique por $2$ y no por $1$." },
            { paso: "Formula molecular: $\\text{C}_5\\text{H}_{12}$ (combustion: $\\text{C}_5\\text{H}_{12} + 8\\ \\text{O}_2 \\rightarrow 5\\ \\text{CO}_2 + 6\\ \\text{H}_2\\text{O}$).", porque: "Con $5$ C y $12$ H por mol escribimos $\\text{C}_5\\text{H}_{12}$. Lo comprobamos con la ecuacion de combustion: el oxigeno de los productos ($5 \\times 2$ del $\\text{CO}_2$ mas $6 \\times 1$ del $\\text{H}_2\\text{O} = 16$) debe igualar al de los reactivos ($8\\ \\text{O}_2 = 16$). Como ambos dan $16$, los balances de C y H son consistentes con la ecuacion. Esta verificacion confirma la formula molecular." },
            { paso: "Isomeros de $\\text{C}_5\\text{H}_{12}$: el neopentano ($2{,}2$-dimetilpropano) hierve a $9{,}5\\ \\text{°C}$, asi que es gas a $25\\ \\text{°C}$ y no sirve. Los liquidos a $25\\ \\text{°C}$ son el n-pentano y el $2$-metilbutano (isopentano).", porque: "Los isomeros de $\\text{C}_5\\text{H}_{12}$ tienen la misma formula pero distinta estructura, y eso cambia propiedades como el punto de ebullicion. Como el enunciado pide un liquido a $25\\ \\text{°C}$, descartamos el neopentano porque hierve a $9{,}5\\ \\text{°C}$ y seria gas a esa temperatura. Entonces los candidatos validos son el n-pentano y el 2-metilbutano. Conviene verificar el estado de agregacion antes de elegir una sustancia." },
            { paso: "Formula desarrollada del n-pentano: $\\text{CH}_3\\text{-CH}_2\\text{-CH}_2\\text{-CH}_2\\text{-CH}_3$. Posible sustancia: n-pentano.", porque: "Una cadena lineal de $5$ carbonos unidos en fila, con los H completando la tetravalencia de cada C, da la formula desarrollada $\\text{CH}_3\\text{-CH}_2\\text{-CH}_2\\text{-CH}_2\\text{-CH}_3$. Usamos el n-pentano porque cumple el dato de estado: es liquido a $25\\ \\text{°C}$, ya que su punto de ebullicion queda por encima de esa temperatura. Por eso lo proponemos como posible sustancia. Verificamos que el total de H sea $12$ al dibujar la formula." }
          ],
          resultado: "$\\text{C}_5\\text{H}_{12}$; por ejemplo n-pentano, $\\text{CH}_3\\text{-CH}_2\\text{-CH}_2\\text{-CH}_2\\text{-CH}_3$ (liquido a $25\\ \\text{°C}$)"
        },
        {
          parte: "b)",
          pasos: [
            { paso: "Por ley de Hess: $$\\Delta H_{\\text{comb}} = [5 \\times \\Delta H_f(\\text{CO}_2) + 6 \\times \\Delta H_f(\\text{H}_2\\text{O})] - \\Delta H_f(\\text{C}_5\\text{H}_{12})$$", porque: "Usamos la ley de Hess: la entalpia de reaccion es la suma de las entalpias de formacion de los productos menos la de los reactivos, cada una multiplicada por su coeficiente. Con eso obtenemos la entalpia de combustion a partir de datos de formacion tabulados, sin medirla. Por eso escribimos $\\Delta H_{\\text{comb}} = [5 \\times \\Delta H_f(\\text{CO}_2) + 6 \\times \\Delta H_f(\\text{H}_2\\text{O})] - \\Delta H_f(\\text{C}_5\\text{H}_{12})$. Verificamos que la resta sea productos menos reactivos, porque invertirla cambia el signo." },
            { paso: "$$5 \\times (-393{,}5) + 6 \\times (-286{,}0) = -1967{,}5 - 1716{,}0 = -3683{,}5\\ \\text{kJ}$$", porque: "Multiplicamos cada entalpia de formacion por su coeficiente de la ecuacion balanceada, $5$ para el $\\text{CO}_2$ y $6$ para el $\\text{H}_2\\text{O}$, y luego sumamos. El $\\text{O}_2$ no entra porque es un elemento en su forma estandar y su entalpia de formacion vale $0$. Entonces la suma de los productos da $5 \\times (-393{,}5) + 6 \\times (-286{,}0) = -3683{,}5\\ \\text{kJ}$. Conviene verificar los coeficientes contra la ecuacion y los signos de cada dato." },
            { paso: "$-3537{,}06 = -3683{,}5 - \\Delta H_f(\\text{C}_5\\text{H}_{12})$, entonces $$\\Delta H_f(\\text{C}_5\\text{H}_{12}) = -3683{,}5 + 3537{,}06 = -146{,}44\\ \\text{kJ/mol}$$", porque: "Reemplazamos la entalpia de combustion dada, $-3537{,}06\\ \\text{kJ/mol}$, en la ecuacion de Hess para despejar la unica incognita, $\\Delta H_f(\\text{C}_5\\text{H}_{12})$. Como la expresion tiene una resta, al pasar $-3683{,}5\\ \\text{kJ}$ al otro lado cambia de signo. Entonces $\\Delta H_f(\\text{C}_5\\text{H}_{12}) = -3683{,}5 + 3537{,}06 = -146{,}44\\ \\text{kJ/mol}$. Un error frecuente es perder ese signo al despejar." }
          ],
          resultado: "$\\Delta H_f(\\text{C}_5\\text{H}_{12}, \\text{l}) = -146{,}44\\ \\text{kJ/mol}$"
        },
        {
          parte: "c)",
          pasos: [
            { paso: "Reaccion: $\\text{C}_5\\text{H}_{12}\\text{(l)} + 8\\ \\text{O}_2\\text{(g)} \\rightarrow 5\\ \\text{CO}_2\\text{(g)} + 6\\ \\text{H}_2\\text{O(l)}$.", porque: "Como necesitamos contar los gases, escribimos la combustion completa del $\\text{C}_5\\text{H}_{12}$ liquido con oxigeno, con $\\text{CO}_2$ y $\\text{H}_2\\text{O}$ como productos y sus estados de agregacion. La ecuacion balanceada, con $8\\ \\text{O}_2$ por mol de combustible, hace falta para contar cuantos moles de gas hay de cada lado. De eso depende $\\Delta n$. Verificamos que el $\\text{O}_2$ sea $8$, porque de ese coeficiente depende el resultado." },
            { paso: "$\\Delta n$ de gases: $$\\Delta n = 5 - 8 = -3$$ (el agua es liquida y no se cuenta).", porque: "$\\Delta n$ es la diferencia entre los moles de gas de los productos y los de los reactivos, y es la variable que aparece en la relacion $\\Delta H = \\Delta U + \\Delta n\\, RT$. Usamos $\\Delta n = 5 - 8 = -3$, contando solo gases: el agua es liquida y no se cuenta. Entonces $\\Delta n$ es negativo, y eso indica que el volumen de gas disminuye en la combustion. Verificamos que solo se sumen especies gaseosas en ambos lados." },
            { paso: "$\\Delta U = \\Delta H - \\Delta n \\times R \\times T = -3537{,}06 - (-3)(8{,}31 \\times 10^{-3}\\ \\text{kJ/mol}\\cdot\\text{K})(298\\ \\text{K}) = -3537{,}06 + 7{,}43 = -3529{,}6\\ \\text{kJ/mol}$", porque: "Para gases usamos la relacion $\\Delta H = \\Delta U + \\Delta n\\, RT$, y la despejamos como $\\Delta U = \\Delta H - \\Delta n\\, RT$. Reemplazamos $\\Delta H = -3537{,}06\\ \\text{kJ/mol}$, $\\Delta n = -3$, $R = 8{,}31 \\times 10^{-3}\\ \\text{kJ/mol}\\cdot\\text{K}$ y $T = 298\\ \\text{K}$, para obtener $\\Delta U = -3537{,}06 - (-3)(8{,}31 \\times 10^{-3})(298) = -3529{,}6\\ \\text{kJ/mol}$. Por eso la constante $R$ se usa en kJ, para que sea coherente con la entalpia. Verificamos el signo: como $\\Delta n$ es negativo, el termino se suma al $\\Delta H$." },
            { paso: "Suposicion: se usa la combustion como proceso a presion constante ($1\\ \\text{atm}$) con $T = 298\\ \\text{K}$.", porque: "Las entalpias se miden a presion constante, asi que suponemos que la combustion ocurre a $1\\ \\text{atm}$ y que $\\Delta H$ es la magnitud adecuada. Tomamos $T = 298\\ \\text{K}$ porque $25\\ \\text{°C}$ equivalen a $298\\ \\text{K}$, la temperatura que fija el enunciado. Entonces la relacion entre $\\Delta H$ y $\\Delta U$ que usamos en el paso anterior es valida. Conviene dejar escrita esta hipotesis, porque la conversion entre $\\Delta H$ y $\\Delta U$ depende de ella." }
          ],
          resultado: "$\\Delta U = -3529{,}6\\ \\text{kJ/mol}$"
        }
      ],
      errores_tipicos: [
        {
          error: "Contar el H2O(l) como gas en Δn y obtener Δn = +3 (o cualquier valor distinto de -3), con lo que ΔU queda mal.",
          como_evitar: "Para Δn se cuentan solo los gases: Δn = 5 - 8 = -3, porque el agua es liquida."
        },
        {
          error: "Invertir la ley de Hess en b): sumar las ΔHf de reactivos o cambiar el signo de ΔHcomb, y dar una ΔHf con signo equivocado.",
          como_evitar: "ΔHcomb = sum(n x ΔHf productos) - sum(n x ΔHf reactivos), y el O2 vale 0 porque es un elemento."
        },
        {
          error: "En a) proponer el neopentano por tener la formula C5H12, sin revisar que es gaseoso a 25 C.",
          como_evitar: "Cuando piden un liquido, verificar el punto de ebullicion del isomero antes de elegirlo."
        }
      ]
    },
    {
      num: 3,
      temas: ["equilibrio", "termodinamica", "gases", "magnitudes"],
      enunciado: "Un metodo industrial para obtener combustible gaseoso emplea la reaccion entre el carbon y el vapor de agua: C(s) + H2O(g) <=> CO(g) + H2(g). En un ensayo a 800 C se determino que cuando las presiones parciales del monoxido de carbono y el hidrogeno son iguales a 6,151 atm y la del vapor de agua 2,649 atm, el sistema se halla en equilibrio. a) En un recipiente cerrado de 500 L se colocan 10 kg de carbon, 50 moles de vapor de agua y un reciclo de 10 moles de CO y 30 moles de H2. Si se mantiene la temperatura constante a 800 C, ¿se obtendra mas hidrogeno? Justifique el razonamiento utilizado. b) Se sabe que a la temperatura de trabajo ΔH°f(H2O(g)) = -241820 J/mol y ΔH°f(CO(g)) = -110500 J/mol. Explique en detalle como aplica el principio de Le Chatelier para decidir si conviene trabajar a alta o baja temperatura a los efectos de obtener mas combustible. c) Analice si un aumento de presion sobre el sistema reaccionante conduce o no a mas producto, empleando el principio de Le Chatelier, justificando su respuesta. d) Cuando en el reactor con carbon en exceso se colocan 55 moles de vapor de agua, al alcanzar el equilibrio se forman 37,6 moles de H2. Calcular los kilos de H2 que se obtienen por cada tonelada de vapor de agua si se trabaja alcanzando el 80% de la conversion de equilibrio en esas condiciones.",
      resolucion: [
        {
          parte: "a)",
          pasos: [
            { paso: "Constante de equilibrio (el carbon es solido y no entra en K): $$K_p = \\frac{p_{\\text{CO}} \\times p_{\\text{H}_2}}{p_{\\text{H}_2\\text{O}}} = \\frac{6{,}151 \\times 6{,}151}{2{,}649} = 14{,}28$$", porque: "La constante de equilibrio para gases se escribe con presiones parciales: productos en el numerador y reactivos en el denominador, cada uno elevado a su coeficiente. Como el carbono es un solido puro, no entra en la expresion. Usamos $p_{\\text{CO}} = 6{,}151\\ \\text{atm}$ y $p_{\\text{H}_2} = 6{,}151\\ \\text{atm}$ en el numerador, y $p_{\\text{H}_2\\text{O}} = 2{,}649\\ \\text{atm}$ en el denominador, para obtener $K_p = 14{,}28$. Verificamos que el $\\text{H}_2\\text{O}$ quede en el denominador, porque es reactivo." },
            { paso: "Moles iniciales en $500\\ \\text{L}$ y $800\\ \\text{°C}$ ($1073\\ \\text{K}$): $\\text{H}_2\\text{O} = 50$, $\\text{CO} = 10$, $\\text{H}_2 = 30$. Factor: $$\\frac{RT}{V} = \\frac{0{,}0821 \\times 1073}{500} = 0{,}1762\\ \\text{atm/mol}$$", porque: "Por la ecuacion de gas ideal $p = \\frac{nRT}{V}$, y a temperatura y volumen constantes la presion es proporcional a los moles. Calculamos el factor $\\frac{RT}{V} = \\frac{0{,}0821 \\times 1073}{500} = 0{,}1762\\ \\text{atm/mol}$, que convierte moles en presiones parciales de todas las especies. Usamos la temperatura en kelvin, $1073\\ \\text{K}$, porque usar grados Celsius en la formula da un resultado incorrecto." },
            { paso: "Presiones iniciales: $p_{\\text{H}_2\\text{O}} = 8{,}81\\ \\text{atm}$; $p_{\\text{CO}} = 1{,}76\\ \\text{atm}$; $p_{\\text{H}_2} = 5{,}29\\ \\text{atm}$.", porque: "Multiplicamos cada numero de moles inicial por el factor $\\frac{RT}{V} = 0{,}1762\\ \\text{atm/mol}$, y cada resultado es la presion parcial inicial de ese gas. Por ejemplo, con $50\\ \\text{mol}$ de $\\text{H}_2\\text{O}$ obtenemos $p_{\\text{H}_2\\text{O}} = 8{,}81\\ \\text{atm}$. Entonces $p_{\\text{CO}} = 1{,}76\\ \\text{atm}$ y $p_{\\text{H}_2} = 5{,}29\\ \\text{atm}$, que son las presiones con las que calculamos $Q$. Verificamos que se usen los moles correctos de cada gas y no los del carbono." },
            { paso: "Cociente de reaccion: $$Q = \\frac{1{,}76 \\times 5{,}29}{8{,}81} = 1{,}06$$, que es menor que $K_p = 14{,}28$.", porque: "El cociente de reaccion $Q$ tiene la misma forma que $K_p$, pero usa las presiones iniciales en lugar de las de equilibrio. Calculamos $Q = \\frac{1{,}76 \\times 5{,}29}{8{,}81} = 1{,}06$. Como $1{,}06$ es menor que $K_p = 14{,}28$, comparamos $Q$ con $K$ para saber hacia donde evoluciona el sistema desde ese estado inicial. Verificamos que el $\\text{H}_2\\text{O}$ este en el denominador y que el carbono no entre en la expresion." },
            { paso: "Como $Q < K$, el sistema evoluciona hacia la derecha: se forma mas $\\text{CO}$ y $\\text{H}_2$.", porque: "Segun el criterio del cociente de reaccion, si $Q < K$ el sistema no esta en equilibrio y la reaccion neta avanza hacia los productos. Como $Q = 1{,}06$ y $K = 14{,}28$, el sistema se desplaza hacia la derecha hasta que $Q$ iguale a $K$. Entonces se forma mas $\\text{CO}$ e $\\text{H}_2$ que al inicio. Recordamos que el criterio indica el sentido de la evolucion, no la cantidad final." },
            { paso: "Suposicion: gases ideales y sistema cerrado a $T$ constante.", porque: "Suponemos comportamiento de gas ideal para usar $PV = nRT$, con sistema cerrado y temperatura constante. A $800\\ \\text{°C}$ y presiones de pocas atmosferas la aproximacion es razonable, y a temperatura constante el valor de $K$ no cambia. Por eso usamos el mismo $K_p = 14{,}28$ durante toda la evaluacion. Conviene verificar que las condiciones del enunciado, recipiente cerrado y $T$ fija, justifiquen estas hipotesis." }
          ],
          resultado: "Si, se obtendra mas hidrogeno ($Q = 1{,}06 < K_p = 14{,}28$)"
        },
        {
          parte: "b)",
          pasos: [
            { paso: "$$\\Delta H^\\circ_r = [\\Delta H^\\circ_f(\\text{CO}) + \\Delta H^\\circ_f(\\text{H}_2)] - [\\Delta H^\\circ_f(\\text{H}_2\\text{O}) + \\Delta H^\\circ_f(\\text{C})] = -110\\,500 - (-241\\,820) = +131\\,320\\ \\text{J/mol}$$", porque: "Aplicamos la ley de Hess con las entalpias de formacion: el $\\Delta H$ de reaccion es la suma de los productos menos la de los reactivos. Reemplazamos $\\Delta H^\\circ_f(\\text{CO}) = -110\\,500\\ \\text{J/mol}$ y $\\Delta H^\\circ_f(\\text{H}_2\\text{O}) = -241\\,820\\ \\text{J/mol}$. Como el C solido y el $\\text{H}_2$ valen $0$ por ser elementos, obtenemos $\\Delta H^\\circ_r = -110\\,500 - (-241\\,820) = +131\\,320\\ \\text{J/mol}$. Verificamos el orden de la resta, porque el resultado cambia de signo si se invierte." },
            { paso: "La reaccion es endotermica ($\\Delta H > 0$). Si se sube la temperatura, el equilibrio se desplaza hacia el lado que absorbe calor, o sea hacia los productos.", porque: "Segun Le Chatelier, al aumentar la temperatura el equilibrio se desplaza en el sentido que absorbe el calor agregado. Como $\\Delta H > 0$, la reaccion absorbe calor y ese sentido es el de los productos. Por eso la reaccion es endotermica, y subir la temperatura favorece la formacion de $\\text{CO}$ y $\\text{H}_2$. Conviene verificar primero el signo de $\\Delta H$, porque es lo que determina hacia donde se desplaza el equilibrio." },
            { paso: "Conviene trabajar a alta temperatura para producir mas $\\text{CO}$ e $\\text{H}_2$.", porque: "Si a alta temperatura el equilibrio favorece los productos, la constante $K$ aumenta con $T$ en una reaccion endotermica, como indica la ecuacion de van't Hoff. Entonces conviene trabajar a temperatura alta para producir mas $\\text{CO}$ e $\\text{H}_2$. Conviene aclarar que esta conclusion es termodinamica y no considera la velocidad de la reaccion." }
          ],
          resultado: "Conviene alta temperatura (reaccion endotermica, $\\Delta H = +131{,}3\\ \\text{kJ/mol}$)"
        },
        {
          parte: "c)",
          pasos: [
            { paso: "Moles de gas: reactivos $= 1$ ($\\text{H}_2\\text{O}$); productos $= 2$ ($\\text{CO} + \\text{H}_2$).", porque: "Para Le Chatelier respecto de la presion solo cuentan las especies gaseosas, porque los solidos tienen volumen despreciable y no aportan presion apreciable. Contamos $1$ mol de gas en los reactivos ($\\text{H}_2\\text{O}$) y $2$ mol en los productos ($\\text{CO} + \\text{H}_2$), que son los moles que cambian al variar el volumen. Entonces el carbono solido queda afuera del conteo. Verificamos que el carbono no se cuente." },
            { paso: "Si aumenta la presion, el equilibrio se desplaza hacia el lado con menos moles de gas, que son los reactivos.", porque: "Usamos el principio de Le Chatelier: al aumentar la presion el equilibrio se desplaza hacia el lado con menos moles de gas, porque asi disminuye la presion total. Como los reactivos tienen $1$ mol de gas frente a $2$ mol de los productos, el sistema se desplaza hacia los reactivos. Verificamos el sentido: el sistema favorece el lado que ocupa menos volumen." },
            { paso: "Por lo tanto el aumento de presion no favorece la formacion de producto.", porque: "Como el equilibrio se desplaza hacia los reactivos, la cantidad de $\\text{CO}$ e $\\text{H}_2$ formada disminuye al aumentar la presion. Por eso concluimos que la presion no ayuda a obtener mas producto. Conviene aclarar en la respuesta que esta conclusion depende de la diferencia de moles gaseosos, $1$ frente a $2$." }
          ],
          resultado: "No conduce a mas producto: el equilibrio se desplaza hacia los reactivos"
        },
        {
          parte: "d)",
          pasos: [
            { paso: "Conversion de equilibrio: $$X_{\\text{eq}} = \\frac{37{,}6}{55} = 0{,}6836$$", porque: "La conversion de equilibrio es la fraccion del vapor de agua inicial que reacciono, $X = \\frac{\\text{moles que reaccionaron}}{\\text{moles iniciales}}$. Como la relacion molar entre $\\text{H}_2\\text{O}$ y $\\text{H}_2$ es $1{:}1$, los $37{,}6\\ \\text{mol}$ de $\\text{H}_2$ formados equivalen a los moles de $\\text{H}_2\\text{O}$ consumidos. Usamos $X_{\\text{eq}} = \\frac{37{,}6}{55} = 0{,}6836$. Verificamos que el denominador sea el $\\text{H}_2\\text{O}$ inicial, $55\\ \\text{mol}$." },
            { paso: "Conversion de trabajo: $$X = 0{,}80 \\times 0{,}6836 = 0{,}5469$$, es decir se reaccionan $0{,}5469 \\times 55 = 30{,}08\\ \\text{mol}$ de $\\text{H}_2\\text{O}$ y se forman $30{,}08\\ \\text{mol}$ de $\\text{H}_2$.", porque: "El enunciado pide trabajar al $80\\%$ de la conversion de equilibrio, asi que tomamos el $80\\%$ de $X_{\\text{eq}} = 0{,}6836$. Con eso obtenemos $X = 0{,}80 \\times 0{,}6836 = 0{,}5469$. Entonces reaccionan $0{,}5469 \\times 55 = 30{,}08\\ \\text{mol}$ de $\\text{H}_2\\text{O}$ y se forman $30{,}08\\ \\text{mol}$ de $\\text{H}_2$. Trabajar con una conversion menor que la maxima permite operar alejado del equilibrio." },
            { paso: "Por tonelada de vapor: $1\\ \\text{t} = \\frac{10^6\\ \\text{g}}{18\\ \\text{g/mol}} = 55\\,556\\ \\text{mol}$ de $\\text{H}_2\\text{O}$.", porque: "Para pasar la tonelada de vapor a moles usamos $n = \\frac{m}{M}$, con $m = 10^6\\ \\text{g}$ ($1\\ \\text{t}$) y $M(\\text{H}_2\\text{O}) = 18\\ \\text{g/mol}$. Calculamos $n = 55\\,556\\ \\text{mol}$ de $\\text{H}_2\\text{O}$ por tonelada, que es la base de los calculos siguientes. Verificamos que la conversion de toneladas a gramos sea $10^6$ y no $10^3$, porque ese error cambia el resultado en un factor mil." },
            { paso: "mol de $\\text{H}_2$: $0{,}5469 \\times 55\\,556 = 30\\,384\\ \\text{mol}$. Masa $= 30\\,384\\ \\text{mol} \\times 2\\ \\text{g/mol} = 60\\,768\\ \\text{g}$.", porque: "Como la relacion es $1{:}1$ entre $\\text{H}_2\\text{O}$ y $\\text{H}_2$, y la conversion de trabajo es $0{,}5469$, los moles de $\\text{H}_2$ salen de multiplicar esa conversion por los $55\\,556$ mol de $\\text{H}_2\\text{O}$ de la tonelada. Con $0{,}5469 \\times 55\\,556 = 30\\,384\\ \\text{mol}$ obtenemos los moles de $\\text{H}_2$. Luego la masa se calcula con la masa molar del $\\text{H}_2$, $2\\ \\text{g/mol}$, y da $60\\,768\\ \\text{g}$. Verificamos que la masa molar usada sea la del $\\text{H}_2$ y no la del $\\text{H}_2\\text{O}$." },
            { paso: "Suposicion: se toma $M(\\text{H}_2) = 2\\ \\text{g/mol}$. Con $2{,}016\\ \\text{g/mol}$ el resultado sube a unos $61{,}3\\ \\text{kg}$.", porque: "Usamos $M(\\text{H}_2) = 2\\ \\text{g/mol}$ como aproximacion entera de la masa molar del $\\text{H}_2$, para pasar $30\\,384\\ \\text{mol}$ a gramos. Redondear simplifica el calculo, y con $2{,}016\\ \\text{g/mol}$ el resultado sube a unos $61{,}3\\ \\text{kg}$. Como la diferencia es menor al $1\\%$, la aproximacion es aceptable en el examen. Conviene informar el valor usado y, como control, el resultado con mas cifras." }
          ],
          resultado: "$\\approx 60{,}8\\ \\text{kg}$ de $\\text{H}_2$ por tonelada de vapor de agua ($\\approx 61\\ \\text{kg}$)"
        }
      ],
      errores_tipicos: [
        {
          error: "Incluir el carbon (solido) en la expresion de Kp o en el cociente Q.",
          como_evitar: "Los solidos no entran en K ni en Q; Kp = pCO x pH2 / pH2O."
        },
        {
          error: "Comparar Q con K usando moles en lugar de presiones parciales, sin pasar a presion con p = nRT/V.",
          como_evitar: "Convertir cada mol a presion con RT/V (0,1762 atm/mol) antes de calcular Q."
        },
        {
          error: "En d) usar 37,6 mol como conversion directa, o usar el 80% sobre los moles y no sobre la conversion de equilibrio.",
          como_evitar: "Primero X_eq = 37,6/55; despues X = 0,80 x X_eq; y recien ahi pasar a kg por tonelada."
        }
      ]
    }
  ]
});

// ============================================================
// EXAMEN 2: 1er recuperatorio 13/06/2025 (WA0022)
// Grilla de correccion (puntaje por inciso): Ej1 a=8 b=10 c=12 (30 pts); Ej2 a=10 b=12 c=8 (30 pts); Ej3 a=10 b=10 c=8 d=12 (40 pts). Total 100.
// Constantes del examen: R = 8,31 J/mol.K = 0,0821 L.atm/mol.K = 1,99 cal/mol.K
// ============================================================
window.PARCIALES.push({
  id: "1rec-2025-06-13",
  tipo: "1er recuperatorio",
  fecha: "13/06/2025",
  fuente: "parciales/IMG-20260331-WA0022.jpg",
  ejercicios: [
    {
      num: 1,
      temas: ["reacciones", "gases", "uniones", "magnitudes"],
      enunciado: "En un reactor industrial que opera a temperatura y presion constantes de 900 C y 8 atm, se introducen 200 g de amoniaco y 100 moles de aire seco (21% O2 y 79% N2) y se lleva a cabo la reaccion: NH3(g) + O2(g) -> NO(g) + H2O(g). a) Calcular la masa de NO(g) producida si el rendimiento de la reaccion es del 85% respecto del valor teorico. b) Para la mezcla gaseosa final, calcular: (i) la fraccion molar de NO(g) y (ii) la presion parcial del NO(g). c) Comparando el amoniaco NH3 con el metano CH4: (i) Indicar las geometrias de las moleculas (nombrar y graficar) y las polaridades de las moleculas. (ii) ¿Cual de las sustancias presenta mayor punto de ebullicion? Justificar su respuesta.",
      resolucion: [
        {
          parte: "a)",
          pasos: [
            { paso: "Ecuacion balanceada: $4\\ \\text{NH}_3 + 5\\ \\text{O}_2 \\rightarrow 4\\ \\text{NO} + 6\\ \\text{H}_2\\text{O}$.", porque: "Usamos la conservacion de atomos para balancear la reaccion: cada elemento debe tener la misma cantidad a ambos lados de la flecha. Los coeficientes resultantes, $4\\ \\text{NH}_3 + 5\\ \\text{O}_2 \\rightarrow 4\\ \\text{NO} + 6\\ \\text{H}_2\\text{O}$, fijan todas las relaciones molares del ejercicio. Verificamos el balance de O, porque es el que mas se equivoca." },
            { paso: "$$n(\\text{NH}_3) = \\frac{200\\ \\text{g}}{17\\ \\text{g/mol}} = 11{,}76\\ \\text{mol}$$. $n(\\text{O}_2) = 21\\ \\text{mol}$; $n(\\text{N}_2) = 79\\ \\text{mol}$.", porque: "Usamos $n = \\frac{m}{M}$ para pasar los $200\\ \\text{g}$ de $\\text{NH}_3$ a moles, con $M(\\text{NH}_3) = 14 + 3 \\times 1 = 17\\ \\text{g/mol}$, y obtenemos $11{,}76\\ \\text{mol}$. El aire tiene $21\\%$ de $\\text{O}_2$ y $79\\%$ de $\\text{N}_2$ sobre $100\\ \\text{mol}$, asi que esas cantidades salen directamente como moles: $n(\\text{O}_2) = 21\\ \\text{mol}$ y $n(\\text{N}_2) = 79\\ \\text{mol}$. Verificamos que el aire se tome como $100$ mol y no como gramos." },
            { paso: "Limitante: el $\\text{NH}_3$ necesita $$11{,}76 \\times \\frac{5}{4} = 14{,}7\\ \\text{mol de } \\text{O}_2$$ y hay $21\\ \\text{mol}$, asi que el $\\text{NH}_3$ es el limitante.", porque: "El reactivo limitante es el que se agota primero, y lo identificamos comparando cuantos moles de cada reactivo exige la ecuacion balanceada. Con la relacion $5\\ \\text{O}_2$ por $4\\ \\text{NH}_3$ calculamos el $\\text{O}_2$ que necesita el amoniaco disponible: $11{,}76 \\times \\frac{5}{4} = 14{,}7\\ \\text{mol}$. Como hay $21\\ \\text{mol}$ de $\\text{O}_2$, sobra oxigeno y por eso el $\\text{NH}_3$ es el limitante. Verificamos que la comparacion use los coeficientes correctos." },
            { paso: "Teorico: $n(\\text{NO}) = 11{,}76\\ \\text{mol}$. Real: $$0{,}85 \\times 11{,}76 = 10{,}00\\ \\text{mol}$$ de $\\text{NO}$.", porque: "Segun la relacion $4\\ \\text{NH}_3 : 4\\ \\text{NO}$, el $\\text{NO}$ maximo que puede formarse es igual al $\\text{NH}_3$ consumido. Como el $\\text{NH}_3$ es el limitante, el valor teorico es $n(\\text{NO}) = 11{,}76\\ \\text{mol}$. Aplicamos el rendimiento de $85\\%$ sobre ese valor: $0{,}85 \\times 11{,}76 = 10{,}00\\ \\text{mol}$ de $\\text{NO}$ reales. Conviene no confundir el rendimiento con la conversion del reactivo." },
            { paso: "$$m(\\text{NO}) = 10{,}00\\ \\text{mol} \\times 30\\ \\text{g/mol} = 300\\ \\text{g}$$", porque: "Pasamos de moles a gramos con $m = n \\times M$, con $M(\\text{NO}) = 14 + 16 = 30\\ \\text{g/mol}$. Usamos $n = 10{,}00\\ \\text{mol}$, que es el valor real con rendimiento, y obtenemos $m(\\text{NO}) = 10{,}00\\ \\text{mol} \\times 30\\ \\text{g/mol} = 300\\ \\text{g}$. Es el ultimo paso de conversion, porque la pregunta pide la masa de $\\text{NO}$. Verificamos que se use el valor real y no el teorico." }
          ],
          resultado: "$m(\\text{NO}) = 300\\ \\text{g}$"
        },
        {
          parte: "b)",
          pasos: [
            { paso: "Extension de reaccion real: $$\\xi = \\frac{10{,}00}{4} = 2{,}50\\ \\text{mol}$$", porque: "La extension de reaccion $\\xi$ mide cuantas veces ocurrio la reaccion balanceada, y se relaciona con el cambio de cada especie por su coeficiente: $n = n_0 + \\text{coeficiente} \\times \\xi$. Como el $\\text{NO}$ tiene coeficiente $4$, calculamos $\\xi = \\frac{10{,}00}{4} = 2{,}50\\ \\text{mol}$. Entonces usamos el $\\text{NO}$ real, $10\\ \\text{mol}$, y no el teorico. Verificamos ese paso antes de seguir con el balance de materia." },
            { paso: "$\\text{NH}_3$ final $= 11{,}76 - 10{,}00 = 1{,}76\\ \\text{mol}$. $\\text{O}_2$ final $= 21 - 5 \\times 2{,}50 = 8{,}50\\ \\text{mol}$. $\\text{N}_2 = 79\\ \\text{mol}$. $\\text{NO} = 10{,}00\\ \\text{mol}$. $\\text{H}_2\\text{O} = 6 \\times 2{,}50 = 15{,}00\\ \\text{mol}$.", porque: "Aplicamos el balance de materia a cada especie: la cantidad final es la inicial mas el coeficiente por $\\xi$, con signo negativo para los reactivos que se consumen. Por eso $\\text{NH}_3$ final $= 11{,}76 - 10{,}00 = 1{,}76\\ \\text{mol}$ y $\\text{O}_2$ final $= 21 - 5 \\times 2{,}50 = 8{,}50\\ \\text{mol}$. El $\\text{N}_2$ no participa, asi que queda en $79\\ \\text{mol}$. Verificamos que el $\\text{H}_2\\text{O}$ use el coeficiente $6$ y no $4$, lo que da $15{,}00\\ \\text{mol}$." },
            { paso: "Total $= 1{,}76 + 8{,}50 + 79 + 10{,}00 + 15{,}00 = 114{,}26\\ \\text{mol}$.", porque: "Dado que para calcular fracciones molares hace falta el total de moles de la mezcla final, que es la suma de todas las especies presentes. Sumamos $1{,}76 + 8{,}50 + 79 + 10{,}00 + 15{,}00 = 114{,}26\\ \\text{mol}$. El $\\text{H}_2\\text{O}$ se cuenta como gas porque a $900\\ \\text{°C}$ esta en fase vapor. Verificamos que no falte ninguna especie en la suma." },
            { paso: "(i) $x(\\text{NO}) = \\frac{10{,}00}{114{,}26} = 0{,}0875$.", porque: "La fraccion molar es la proporcion de moles de una especie respecto del total: $x = \\frac{n_i}{n_{\\text{total}}}$. Usamos $n(\\text{NO}) = 10{,}00\\ \\text{mol}$ y un total de $114{,}26\\ \\text{mol}$, y obtenemos $x(\\text{NO}) = 0{,}0875$. Es una magnitud adimensional, y la suma de todas las fracciones da $1$. Verificamos que el denominador sea el total final y no el inicial." },
            { paso: "(ii) $$p(\\text{NO}) = x(\\text{NO}) \\times P_{\\text{total}} = 0{,}0875 \\times 8\\ \\text{atm} = 0{,}70\\ \\text{atm}$$", porque: "Segun la ley de Dalton, en una mezcla ideal la presion parcial de un gas es su fraccion molar multiplicada por la presion total. Usamos $x(\\text{NO}) = 0{,}0875$ y una presion total de $8\\ \\text{atm}$ para calcular $p(\\text{NO}) = 0{,}0875 \\times 8\\ \\text{atm} = 0{,}70\\ \\text{atm}$. Esto permite pasar de composicion a presion, que es lo que pide el ejercicio. Verificamos que se use la presion total del reactor." },
            { paso: "Suposicion: el rendimiento de $85\\%$ se aplica sobre el $\\text{NH}_3$ que reacciona, y la presion total se mantiene en $8\\ \\text{atm}$.", porque: "El enunciado fija la presion en $8\\ \\text{atm}$ y la reaccion a presion constante, por eso tomamos la presion total como $8\\ \\text{atm}$. Aplicamos el rendimiento de $85\\%$ sobre el $\\text{NH}_3$ que reacciona, para mantener la extension de reaccion calculada. Entonces estas hipotesis definen los moles finales que usamos en los calculos. Conviene dejarlas explicitas, porque afectan el resultado." }
          ],
          resultado: "(i) $x(\\text{NO}) = 0{,}0875$; (ii) $p(\\text{NO}) = 0{,}70\\ \\text{atm}$"
        },
        {
          parte: "c)",
          pasos: [
            { paso: "$\\text{NH}_3$: piramidal trigonal ($\\text{AX}_3\\text{E}_1$, con un par libre en N). Molecula polar.", porque: "Con VSEPR contamos los pares de electrones alrededor del N: $3$ enlaces y $1$ par libre dan una distribucion tetraedrica de pares, cuya forma molecular es piramidal trigonal. Como el par libre no esta compensado por simetria, la molecula tiene momento dipolar neto. Por eso el $\\text{NH}_3$ es polar. Verificamos que el par libre se cuente al predecir la forma." },
            { paso: "$\\text{CH}_4$: tetraedrica ($\\text{AX}_4$). Molecula apolar, porque los $4$ dipolos $\\text{C-H}$ se cancelan por simetria.", porque: "Con VSEPR, $4$ pares de enlace y ningun par libre dan una geometria tetraedrica ($\\text{AX}_4$). Como los $4$ dipolos $\\text{C-H}$ son iguales y estan distribuidos simetricamente, su suma vectorial es cero. Por eso el $\\text{CH}_4$ es apolar, aunque sus enlaces $\\text{C-H}$ sean polares. Verificamos que el C no tenga pares libres antes de aplicar esta regla." },
            { paso: "(ii) $\\text{NH}_3$ tiene puentes de hidrogeno entre sus moleculas. El $\\text{CH}_4$ solo tiene fuerzas de London.", porque: "Un puente de hidrogeno se forma cuando un H esta unido a un elemento muy electronegativo ($\\text{N}$, $\\text{O}$ o $\\text{F}$) y se atrae con un par libre de otra molecula. El $\\text{NH}_3$ cumple esa condicion, porque su H esta unido al N, mientras que el $\\text{CH}_4$ no tiene H unido a N, O o F. Entonces el $\\text{NH}_3$ tiene puentes de hidrogeno y el $\\text{CH}_4$ solo fuerzas de London. Verificamos esta condicion antes de asignar el tipo de fuerza." },
            { paso: "Por lo tanto el $\\text{NH}_3$ tiene mayor punto de ebullicion ($\\approx -33\\ \\text{°C}$ frente a $\\approx -162\\ \\text{°C}$).", porque: "A mayor intensidad de las fuerzas intermoleculares se necesita mas energia para separar las moleculas, y el punto de ebullicion es mas alto. Los puentes de hidrogeno son mas intensos que las fuerzas de London, por eso el $\\text{NH}_3$ hierve a mayor temperatura que el $\\text{CH}_4$. Entonces el tipo de fuerza pesa mas que la masa molar, que es parecida. Conviene comparar primero el tipo de fuerza y despues la masa." }
          ],
          resultado: "$\\text{NH}_3$: piramidal, polar; $\\text{CH}_4$: tetraedrica, apolar. Mayor punto de ebullicion: $\\text{NH}_3$ (puentes de hidrogeno)"
        }
      ],
      errores_tipicos: [
        {
          error: "No balancear la ecuacion y usar relacion 1:1 entre NH3 y O2 o NH3 y NO, lo que cambia el limitante.",
          como_evitar: "Balancear primero: 4 NH3 + 5 O2 -> 4 NO + 6 H2O, y usar esos coeficientes para todas las relaciones."
        },
        {
          error: "Decir que el CH4 es polar porque sus enlaces C-H son polares.",
          como_evitar: "La polaridad depende de la geometria: en el tetraedro los dipolos se cancelan. Compararlo con el NH3, que es piramidal."
        },
        {
          error: "Atribuir el mayor punto de ebullicion al CH4 por tener mayor masa molar, o ignorar los puentes de hidrogeno del NH3.",
          como_evitar: "Comparar primero el tipo de fuerza intermolecular: puentes de hidrogeno > London (aunque la masa molar sea parecida)."
        }
      ]
    },
    {
      num: 2,
      temas: ["termodinamica", "gases", "reacciones"],
      enunciado: "Se conocen los siguientes datos para dos sustancias usadas como combustible: Para la combustion de una cierta cantidad de metano se han utilizado 3000 L de aire medidos en CNPT (21% de O2 y 79% de N2) y se han liberado 2997 kcal. Por otro lado, se conoce tambien que el poder calorifico superior del etano es de 11,23 kcal/g de etano. Se pide: a) A partir de los datos proporcionados calcular las entalpias de combustion para ambos combustibles y escribir las reacciones termoquimicas correspondientes. b) Considerando que el dioxido de carbono es un gas de efecto invernadero (GEI), indicar cual combustible afecta mas al efecto invernadero por kcal producida. Justifique su respuesta. c) Calcular el volumen de aire en CNPT que se emplea para la combustion de un mol de etano.",
      resolucion: [
        {
          parte: "a)",
          pasos: [
            { paso: "Suposicion: el aire usado es estequiometrico (sin exceso), y el agua se toma liquida (poder calorifico superior).", porque: "El enunciado no indica exceso de aire, asi que suponemos combustion estequiometrica. Tomamos el agua como liquida, porque el poder calorifico superior considera el agua condensada. Por eso aplicamos esta hipotesis al calcular el aire necesario. Verificamos que sea coherente con el dato de PCS." },
            { paso: "$\\text{O}_2$ en el aire: $$0{,}21 \\times 3000\\ \\text{L} = 630\\ \\text{L} = 28{,}1\\ \\text{mol}$$ de $\\text{O}_2$ (a $22{,}4\\ \\text{L/mol}$).", porque: "Como el volumen de gas es proporcional a los moles a CNPT, el $\\text{O}_2$ disponible se obtiene de la fraccion del $21\\%$. Calculamos $0{,}21 \\times 3000\\ \\text{L} = 630\\ \\text{L}$ de $\\text{O}_2$. Luego pasamos a moles dividiendo por $22{,}4\\ \\text{L/mol}$, el volumen de un mol de gas en CNPT, y obtenemos $28{,}1\\ \\text{mol}$ de $\\text{O}_2$. Verificamos que la fraccion usada sea la del $\\text{O}_2$ y no la del $\\text{N}_2$." },
            { paso: "$\\text{CH}_4 + 2\\ \\text{O}_2 \\rightarrow \\text{CO}_2 + 2\\ \\text{H}_2\\text{O}$: $$n(\\text{CH}_4) = \\frac{28{,}1}{2} = 14{,}06\\ \\text{mol}$$.", porque: "La ecuacion balanceada indica que la combustion del $\\text{CH}_4$ necesita $2\\ \\text{mol}$ de $\\text{O}_2$ por mol de $\\text{CH}_4$. Usamos $n(\\text{CH}_4) = \\frac{28{,}1}{2} = 14{,}06\\ \\text{mol}$, porque los moles de metano son la mitad de los moles de $\\text{O}_2$ disponibles. Entonces el metano quemado es $14{,}06\\ \\text{mol}$. Verificamos que el coeficiente del $\\text{O}_2$ sea $2$ y no $1$." },
            { paso: "$$\\Delta H_c(\\text{CH}_4) = -\\frac{2997\\ \\text{kcal}}{14{,}06\\ \\text{mol}} = -213{,}1\\ \\text{kcal/mol}$$ ($\\approx -891{,}7\\ \\text{kJ/mol}$).", porque: "Calculamos la entalpia de combustion como el calor liberado por mol de combustible, dividiendo el calor total por los moles de $\\text{CH}_4$ quemados. Con $2997\\ \\text{kcal}$ y $14{,}06\\ \\text{mol}$ obtenemos $\\Delta H_c = -\\frac{2997\\ \\text{kcal}}{14{,}06\\ \\text{mol}} = -213{,}1\\ \\text{kcal/mol}$. El signo negativo indica que el proceso es exotermico, es decir que el sistema libera calor. Conviene pasar a kJ solo al final, lo que da $-891{,}7\\ \\text{kJ/mol}$." },
            { paso: "Etano: $M = 30\\ \\text{g/mol}$. $$\\Delta H_c = -11{,}23\\ \\text{kcal/g} \\times 30\\ \\text{g/mol} = -336{,}9\\ \\text{kcal/mol}$$ ($\\approx -1409{,}6\\ \\text{kJ/mol}$).", porque: "Como el poder calorifico se da por gramo, pero la entalpia de combustion se expresa por mol, asi que multiplicamos por la masa molar del etano. Con $M = 30\\ \\text{g/mol}$ y $11{,}23\\ \\text{kcal/g}$ obtenemos $\\Delta H_c = -11{,}23\\ \\text{kcal/g} \\times 30\\ \\text{g/mol} = -336{,}9\\ \\text{kcal/mol}$. Es un cambio de base del dato, que pasa de ser por masa a ser por mol. Verificamos que la masa molar sea la del $\\text{C}_2\\text{H}_6$ y que el signo se mantenga." },
            { paso: "Reacciones: $\\text{CH}_4\\text{(g)} + 2\\ \\text{O}_2\\text{(g)} \\rightarrow \\text{CO}_2\\text{(g)} + 2\\ \\text{H}_2\\text{O(l)}$, $\\Delta H = -213{,}1\\ \\text{kcal/mol}$. $\\text{C}_2\\text{H}_6\\text{(g)} + \\frac{7}{2}\\ \\text{O}_2\\text{(g)} \\rightarrow 2\\ \\text{CO}_2\\text{(g)} + 3\\ \\text{H}_2\\text{O(l)}$, $\\Delta H = -336{,}9\\ \\text{kcal/mol}$.", porque: "Escribimos la ecuacion termoquimica con el coeficiente de $\\text{O}_2$ de cada combustible y el $\\Delta H$ correspondiente a un mol de combustible. Para el etano el coeficiente del $\\text{O}_2$ es fraccionario, $\\frac{7}{2}$, y lo mantenemos asi para que la ecuacion sea por mol de combustible. Por eso usamos $\\Delta H = -213{,}1\\ \\text{kcal/mol}$ para el $\\text{CH}_4$ y $-336{,}9\\ \\text{kcal/mol}$ para el $\\text{C}_2\\text{H}_6$. Verificamos que el $\\Delta H$ corresponda a un mol y no a un gramo." }
          ],
          resultado: "$\\Delta H_c(\\text{CH}_4) = -213{,}1\\ \\text{kcal/mol}$; $\\Delta H_c(\\text{C}_2\\text{H}_6) = -336{,}9\\ \\text{kcal/mol}$"
        },
        {
          parte: "b)",
          pasos: [
            { paso: "$\\text{CH}_4$: $1$ mol de $\\text{CO}_2$ por $213{,}1$ kcal, es decir $\\frac{1}{213{,}1} = 4{,}69 \\times 10^{-3}\\ \\text{mol de } \\text{CO}_2$ por kcal.", porque: "Como el $\\text{CO}_2$ es el gas de efecto invernadero que pide el enunciado, comparamos los combustibles por unidad de energia liberada: cuanto $\\text{CO}_2$ se emite por kcal. Dividimos $1$ mol de $\\text{CO}_2$ por mol de combustible entre los $213{,}1$ kcal de calor por mol. Entonces obtenemos $\\frac{1}{213{,}1} = 4{,}69 \\times 10^{-3}$ mol de $\\text{CO}_2$ por kcal. Verificamos que las unidades queden en mol de $\\text{CO}_2$ por kcal." },
            { paso: "$\\text{C}_2\\text{H}_6$: $2$ mol de $\\text{CO}_2$ por $336{,}9$ kcal, es decir $\\frac{2}{336{,}9} = 5{,}94 \\times 10^{-3}\\ \\text{mol de } \\text{CO}_2$ por kcal.", porque: "Como la ecuacion balanceada indica que cada mol de etano produce $2$ mol de $\\text{CO}_2$, asi que el numerador es $2$ y no $1$. Lo dividimos por el calor de combustion por mol ya calculado, $336{,}9$ kcal, para que la unidad sea la misma que en el caso del metano. Obtenemos $\\frac{2}{336{,}9} = 5{,}94 \\times 10^{-3}$ mol de $\\text{CO}_2$ por kcal. Conviene no olvidar el coeficiente $2$ del $\\text{CO}_2$." },
            { paso: "El etano emite mas $\\text{CO}_2$ por kcal ($\\approx 27\\%$ mas).", porque: "Comparamos la emision por kcal de los dos combustibles con la relacion entre ambos menos $1$, que expresa cuanto mas emite uno respecto del otro. Calculamos $\\frac{5{,}94 \\times 10^{-3}}{4{,}69 \\times 10^{-3}} - 1 = 0{,}27$, es decir $27\\%$. Entonces el etano emite mas $\\text{CO}_2$ por kcal. Verificamos que se divida por el valor del metano, porque se pregunta cuanto mas emite el etano." }
          ],
          resultado: "El etano afecta mas al efecto invernadero por kcal producida"
        },
        {
          parte: "c)",
          pasos: [
            { paso: "$\\text{C}_2\\text{H}_6 + \\frac{7}{2}\\ \\text{O}_2 \\rightarrow 2\\ \\text{CO}_2 + 3\\ \\text{H}_2\\text{O}$: se necesitan $3{,}5\\ \\text{mol}$ de $\\text{O}_2$ por mol de etano.", porque: "La ecuacion balanceada indica que $1$ mol de etano necesita $\\frac{7}{2}$ mol de $\\text{O}_2$, y esa relacion fija cuanto oxigeno hay que aportar. Entonces para $1$ mol de etano se necesitan $3{,}5$ mol de $\\text{O}_2$. Este paso es el puente para calcular el aire, que es la fuente de oxigeno. Verificamos el coeficiente fraccionario y no lo redondeamos." },
            { paso: "Aire necesario: $$\\frac{3{,}5\\ \\text{mol de } \\text{O}_2}{0{,}21} = 16{,}67\\ \\text{mol de aire}$$", porque: "Como el aire contiene $21\\%$ de $\\text{O}_2$ en moles, la cantidad de aire es la de $\\text{O}_2$ dividida por $0{,}21$. Calculamos $\\frac{3{,}5\\ \\text{mol de } \\text{O}_2}{0{,}21} = 16{,}67\\ \\text{mol de aire}$. Es la inversa del calculo de a), porque aqui conocemos el $\\text{O}_2$ necesario y buscamos el aire que lo aporta. Verificamos que se divida y no se multiplique por $0{,}21$." },
            { paso: "$$V_{\\text{aire}} = 16{,}67\\ \\text{mol} \\times 22{,}4\\ \\text{L/mol} = 373\\ \\text{L}$$ en CNPT.", porque: "En CNPT un mol de gas ocupa $22{,}4\\ \\text{L}$, asi que el volumen de aire es el numero de moles por ese valor. Calculamos $V = 16{,}67\\ \\text{mol} \\times 22{,}4\\ \\text{L/mol} = 373\\ \\text{L}$ de aire en CNPT. Usamos la condicion de referencia del enunciado. Conviene verificar que el resultado sea el volumen del aire completo y no solo el del $\\text{O}_2$." }
          ],
          resultado: "$V_{\\text{aire}} \\approx 373\\ \\text{L}$ en CNPT"
        }
      ],
      errores_tipicos: [
        {
          error: "Tomar el volumen de aire como si fuera de O2 puro, sin multiplicar por 0,21 (o dividir por 0,21 en el lugar equivocado).",
          como_evitar: "Primero moles de O2 = 0,21 x moles de aire; para c) moles de aire = moles de O2 / 0,21."
        },
        {
          error: "Usar el poder calorifico en kcal/g como si fuera kcal/mol, olvidando multiplicar por la masa molar del etano (30 g/mol).",
          como_evitar: "Siempre pasar kcal/g a kcal/mol multiplicando por la masa molar antes de comparar."
        },
        {
          error: "En b) comparar por mol de combustible en vez de por kcal, o no tener en cuenta que el etano produce 2 CO2 por mol.",
          como_evitar: "Comparar mol de CO2 por kcal: CH4 1/213,1 frente a C2H6 2/336,9."
        }
      ]
    },
    {
      num: 3,
      temas: ["acidobase", "equilibrio", "soluciones"],
      enunciado: "El acido formico (HCOOH) es un acido que se usa en muchas industrias (como la del cuero y la farmaceutica) y se encuentra presente en algunos alimentos y en el veneno de las hormigas. Puede usarse como conservante y agente antibacteriano, siempre que el pH de la solucion sea igual o inferior a 3,5. Dato: pKa (acido formico) = 3,75. a) Escribir la ecuacion de disociacion del acido formico en agua y la expresion de la constante de acidez (Ka). b) Calcular la concentracion minima de acido formico necesaria para preparar una solucion que mantenga el pH en 3,5 o inferior. c) Determinar el porcentaje de ionizacion del acido en la solucion preparada. d) Si se desea sustituir el acido formico por acido clorhidrico (HCl), calcular la concentracion molar de HCl necesaria para obtener el mismo pH que la solucion con acido formico. Justificar su respuesta.",
      resolucion: [
        {
          parte: "a)",
          pasos: [
            { paso: "$\\text{HCOOH(ac)} + \\text{H}_2\\text{O(l)} \\rightleftharpoons \\text{HCOO}^-\\text{(ac)} + \\text{H}_3\\text{O}^+\\text{(ac)}$, o simplificado $\\text{HCOOH} \\rightleftharpoons \\text{HCOO}^- + \\text{H}^+$.", porque: "Dado que el acido formico es debil y solo cede una parte de sus $\\text{H}^+$ al agua, la reaccion es un equilibrio, indicado con doble flecha. En la ecuacion escribimos el acido, el agua como solvente y los productos $\\text{HCOO}^-$ y $\\text{H}_3\\text{O}^+$ (o $\\text{H}^+$ simplificado). Verificamos que el acido ceda un solo $\\text{H}^+$, porque es monoprotico." },
            { paso: "$K_a = \\frac{[\\text{H}^+][\\text{HCOO}^-]}{[\\text{HCOOH}]}$.", porque: "La constante de acidez se escribe con las concentraciones de equilibrio de productos sobre reactivos, sin incluir el agua porque es el solvente y su concentracion practicamente no cambia. Usamos $K_a = \\frac{[\\text{H}^+][\\text{HCOO}^-]}{[\\text{HCOOH}]}$, que despues permite despejar la concentracion del acido. Verificamos que el denominador contenga solo el acido sin disociar." },
            { paso: "$$K_a = 10^{-\\text{pK}_a} = 10^{-3{,}75} = 1{,}78 \\times 10^{-4}$$", porque: "Usamos la definicion $\\text{pK}_a = -\\log K_a$, que invertida da $K_a = 10^{-\\text{pK}_a}$. Con $\\text{pK}_a = 3{,}75$ calculamos $K_a = 10^{-3{,}75} = 1{,}78 \\times 10^{-4}$. Aunque el dato venga en escala logaritmica, las expresiones de equilibrio usan la constante. Verificamos que la potencia de diez sea negativa." }
          ],
          resultado: "$K_a = 1{,}78 \\times 10^{-4}$"
        },
        {
          parte: "b)",
          pasos: [
            { paso: "$\\text{pH} = 3{,}5 \\Rightarrow [\\text{H}^+] = x = 10^{-3{,}5} = 3{,}16 \\times 10^{-4}\\ \\text{M}$.", porque: "Usamos la definicion $\\text{pH} = -\\log[\\text{H}^+]$, que invertida da $[\\text{H}^+] = 10^{-\\text{pH}}$. Con $\\text{pH} = 3{,}5$ calculamos $x = 10^{-3{,}5} = 3{,}16 \\times 10^{-4}\\ \\text{M}$. Este valor se usa como la $x$ del equilibrio, porque es la cantidad de acido que se disocia. Verificamos que se calcule $10$ elevado a menos $3{,}5$." },
            { paso: "$K_a = \\frac{x^2}{C - x}$, entonces $$C = x + \\frac{x^2}{K_a} = 3{,}16 \\times 10^{-4} + \\frac{(3{,}16 \\times 10^{-4})^2}{1{,}78 \\times 10^{-4}} = 3{,}16 \\times 10^{-4} + 5{,}62 \\times 10^{-4}$$", porque: "Usamos $K_a = \\frac{x^2}{C - x}$ y despejamos $C = x + \\frac{x^2}{K_a}$. Reemplazamos $x = 3{,}16 \\times 10^{-4}\\ \\text{M}$ y $K_a = 1{,}78 \\times 10^{-4}$ para obtener $C = 3{,}16 \\times 10^{-4} + 5{,}62 \\times 10^{-4}$. Los balances de masa indican que el acido inicial $C$ se reparte entre el acido sin disociar y el ion formiato. Entonces $C$ es la incognita que resolvemos con esta ecuacion." },
            { paso: "Suposicion: el acido es debil y se usa la expresion cuadratica completa (no se desprecia $x$).", porque: "Un acido debil no se disocia por completo, y la aproximacion $[\\text{HCOOH}] \\approx C$ solo vale si $x$ es muy chica frente a $C$. Aqui $\\frac{x}{C}$ ronda el $36\\%$, valor que no es despreciable, asi que usamos la expresion cuadratica completa. Por eso no despreciamos $x$ en el denominador. Conviene verificar el desprecio al final del calculo." }
          ],
          resultado: "$C_{\\text{minima}} = 8{,}8 \\times 10^{-4}\\ \\text{M}$"
        },
        {
          parte: "c)",
          pasos: [
            { paso: "$$\\% \\text{ ionizacion} = \\frac{[\\text{H}^+]}{C} \\times 100 = \\frac{3{,}16 \\times 10^{-4}}{8{,}79 \\times 10^{-4}} \\times 100$$", porque: "El porcentaje de ionizacion mide que fraccion del acido total se disocio, y se calcula como $\\frac{x}{C}$ multiplicado por $100$. Usamos $[\\text{H}^+] = 3{,}16 \\times 10^{-4}\\ \\text{M}$ y $C = 8{,}79 \\times 10^{-4}\\ \\text{M}$ para obtener $\\frac{3{,}16 \\times 10^{-4}}{8{,}79 \\times 10^{-4}} \\times 100 = 36{,}0\\%$. Ese valor expresa cuan debil es el acido en esa solucion. Verificamos que se use la concentracion total $C$ calculada." },
            { paso: "Se toma $[\\text{HCOO}^-] = [\\text{H}^+]$ (se desprecia la ionizacion del agua).", porque: "Cada molecula de $\\text{HCOOH}$ que se disocia produce un ion $\\text{HCOO}^-$ y un $\\text{H}^+$, por la relacion $1{:}1$ de la ecuacion. Por eso tomamos $[\\text{HCOO}^-] = [\\text{H}^+] = 3{,}16 \\times 10^{-4}\\ \\text{M}$. Como se desprecia la ionizacion del agua, el aporte de $\\text{H}^+$ del agua es muy pequeno frente a ese valor, y el desprecio es valido. Verificamos esta comparacion antes de aceptar la aproximacion." }
          ],
          resultado: "$\\approx 36{,}0\\%$ de ionizacion"
        },
        {
          parte: "d)",
          pasos: [
            { paso: "Para tener el mismo pH ($3{,}5$) con $\\text{HCl}$, que es un acido fuerte y se ioniza totalmente, $[\\text{H}^+] = [\\text{HCl}]$.", porque: "El $\\text{HCl}$ es un acido fuerte que se disocia totalmente en agua, asi que cada mol de $\\text{HCl}$ libera un mol de $\\text{H}^+$. Como el pH depende solo de la $[\\text{H}^+]$, basta igualar esa concentracion con la del acido formico para tener pH $3{,}5$. Por eso tratamos al $\\text{HCl}$ como acido fuerte y no como debil. Verificamos esa clasificacion antes de seguir." },
            { paso: "$[\\text{HCl}] = 10^{-3{,}5} = 3{,}16 \\times 10^{-4}\\ \\text{M}$.", porque: "Con $\\text{pH} = -\\log[\\text{H}^+]$, la concentracion de $\\text{H}^+$ es $10^{-\\text{pH}}$, y como el $\\text{HCl}$ aporta $\\text{H}^+$ en proporcion $1{:}1$, $[\\text{HCl}]$ es igual a ese valor. Calculamos $[\\text{HCl}] = 10^{-3{,}5} = 3{,}16 \\times 10^{-4}\\ \\text{M}$. Este calculo directo es posible porque no hay equilibrio que resolver. Verificamos que el resultado sea $3{,}16 \\times 10^{-4}\\ \\text{M}$ y no la concentracion minima del acido formico." },
            { paso: "Justificacion: no se usa $K_a$ porque el $\\text{HCl}$ no tiene equilibrio de disociacion apreciable.", porque: "Un acido fuerte cede todo su $\\text{H}^+$ en agua, por lo que no existe un equilibrio de disociacion que describir con $K_a$. Por eso la constante no interviene y la concentracion sale directamente del pH. Como el enunciado pide justificar el razonamiento, conviene escribir esta justificacion en el examen." }
          ],
          resultado: "$[\\text{HCl}] = 3{,}16 \\times 10^{-4}\\ \\text{M}$"
        }
      ],
      errores_tipicos: [
        {
          error: "Usar pKa como si fuera Ka (Ka = 3,75) en lugar de Ka = 10^-pKa.",
          como_evitar: "Recordar que pKa = -log Ka, asi que Ka = 10^-pKa."
        },
        {
          error: "En b) tomar [H+] = C (disociacion total) en lugar de resolver con x^2/(C - x), y dar C = 3,16 x 10^-4 M.",
          como_evitar: "Como el acido es debil, C = [H+] + [H+]^2/Ka, que da 8,8 x 10^-4 M."
        },
        {
          error: "En d) tratar al HCl como acido debil y usar Ka, o calcular la concentracion con la formula del acido debil.",
          como_evitar: "HCl es fuerte: [HCl] = [H+] = 10^-pH directamente."
        }
      ]
    }
  ]
});

// ============================================================
// EXAMEN 3: fecha y tipo no visibles en la foto (WA0023)
// Tipo asumido: "parcial". Verificar contra el original.
// Ejercicio 2 (cereales): se toma el agua como liquida para el calculo del calor de calentamiento (cp = 4,18 J/g.C) y la masa de cereal humedo se estima con ese mismo cp (suposicion explicita). El 15% calienta, el 75% vaporiza, el 10% es perdida.
// ============================================================
window.PARCIALES.push({
  id: "parcial-sin-fecha-1",
  tipo: "parcial",
  fecha: "sin fecha",
  fuente: "parciales/IMG-20260331-WA0023.jpg",
  ejercicios: [
    {
      num: 1,
      temas: ["materia", "liquidos", "gases"],
      enunciado: "(a) Construir cualitativamente el diagrama de fases del CO2, indicando zonas y puntos caracteristicos, curvas de equilibrio, etc. DATOS: Punto triple: (5,2 atm, -56,4 C). Temperatura de ebullicion a 50 atm: 15 C. Temperatura de sublimacion normal: -78 C. Punto critico: (73 atm, 31,1 C). Temperatura de fusion a 50 atm: -54 C. (b) Explicar y justificar para el CO2: (i) ¿Cual es el estado de agregacion del CO2 a presion y temperatura ambientes? (ii) ¿Cual deberia ser la minima presion para que funda? (iii) El solido ¿flota sobre el liquido? ¿Por que? (iv) Describir los estados que atraviesa si el CO2 en estado solido a 50 atm y 70 C bajo cero se calienta aumentando gradualmente la temperatura hasta 30 C, manteniendo la presion.",
      resolucion: [
        {
          parte: "a)",
          pasos: [
            { paso: "Ejes: presion (eje vertical) y temperatura (eje horizontal).", porque: "El diagrama de fases P-T es la convencion usual para representar las fases de una sustancia pura. Ubicamos la presion en el eje vertical y la temperatura en el horizontal, porque la presion determina en que estado queda la sustancia a cada temperatura. Entonces conviene fijar los ejes antes de marcar los puntos caracteristicos. Verificamos que cada punto quede en la posicion correcta." },
            { paso: "Punto triple ($5{,}2\\ \\text{atm}$, $-56{,}4\\ \\text{°C}$): coexisten solido, liquido y vapor. Punto critico ($73\\ \\text{atm}$, $31{,}1\\ \\text{°C}$): por encima de el no hay distincion liquido-gas.", porque: "Como el punto triple es donde coexisten solido, liquido y vapor, lo ubicamos con los datos del enunciado: $5{,}2\\ \\text{atm}$ y $-56{,}4\\ \\text{°C}$. El punto critico, con $73\\ \\text{atm}$ y $31{,}1\\ \\text{°C}$, marca el final de la curva liquido-vapor. Por encima de esa temperatura no hay distincion entre liquido y gas. Verificamos que los valores de P y T correspondan a cada punto." },
            { paso: "Curva de sublimacion: une el punto triple con ($1\\ \\text{atm}$, $-78\\ \\text{°C}$), separa solido y gas por debajo de $5{,}2\\ \\text{atm}$.", porque: "La curva de sublimacion separa solido y gas, y sobre ella coexisten ambas fases. La trazamos desde el punto triple hasta el punto de sublimacion normal, ($1\\ \\text{atm}$, $-78\\ \\text{°C}$), porque por debajo de la presion del punto triple no existe liquido. Entonces el solido pasa directamente a gas por esa curva. Verificamos que la curva pase por el punto de sublimacion normal a $1\\ \\text{atm}$." },
            { paso: "Curva de fusion: sube desde el punto triple con pendiente positiva, pasa por ($50\\ \\text{atm}$, $-54\\ \\text{°C}$).", porque: "La curva de fusion separa solido y liquido, y arranca en el punto triple. Usamos el dato de $50\\ \\text{atm}$, $-54\\ \\text{°C}$, como punto de control para trazarla, y su pendiente positiva se interpreta con la ecuacion de Clapeyron. Como la pendiente es positiva, el liquido ocupa mas volumen que el solido. Verificamos que la pendiente sea positiva, porque de ella depende la respuesta del item (iii)." },
            { paso: "Curva de vaporizacion: une el punto triple con el punto critico, pasa por ($50\\ \\text{atm}$, $15\\ \\text{°C}$).", porque: "Como la curva de vaporizacion separa liquido y vapor y termina en el punto critico, la trazamos desde el punto triple, pasando por el dato de $50\\ \\text{atm}$, $15\\ \\text{°C}$, que da un punto de control para la curva. Por encima del punto critico no hay distincion entre fases. Verificamos que la curva llegue al punto critico." },
            { paso: "Zonas: solido (alta presion, baja temperatura), liquido (entre fusion y vaporizacion), gas (baja presion), y zona supercritica (por encima del punto critico).", porque: "Usamos la idea de que cada zona representa la fase estable para un rango de presion y temperatura, y las curvas son las fronteras entre ellas. Asignamos solido a alta presion y baja temperatura, liquido entre fusion y vaporizacion, gas a baja presion, y la zona supercritica por encima de $73\\ \\text{atm}$ y $31{,}1\\ \\text{°C}$. Verificamos que las zonas queden bien delimitadas por las curvas antes de rotularlas." }
          ],
          resultado: "Diagrama cualitativo con punto triple, punto critico, curvas de sublimacion, fusion y vaporizacion, y zonas solido, liquido, gas y supercritica"
        },
        {
          parte: "b)",
          pasos: [
            { paso: "(i) A $1\\ \\text{atm}$ y $25\\ \\text{°C}$ la temperatura esta por encima de la de sublimacion ($-78\\ \\text{°C}$) y la presion esta por debajo de $5{,}2\\ \\text{atm}$: el $\\text{CO}_2$ es gas.", porque: "Ubicamos el punto ($1\\ \\text{atm}$, $25\\ \\text{°C}$) en el diagrama para ver en que zona cae. Como $1\\ \\text{atm}$ esta por debajo de la presion del punto triple, $5{,}2\\ \\text{atm}$, no puede haber liquido, y la temperatura esta por encima de la curva de sublimacion. Entonces la fase estable es el gas. Verificamos primero la presion, porque ella decide si hay liquido." },
            { paso: "(ii) Para que haya liquido la presion tiene que superar la del punto triple, $5{,}2\\ \\text{atm}$. Por debajo de ese valor el solido solo sublima.", porque: "Como la presion minima para que el $\\text{CO}_2$ funda es la del punto triple, $5{,}2\\ \\text{atm}$, la curva de fusion existe solo por encima de esa presion. Por debajo de ese valor el solido solo sublima, sin pasar por el liquido. Verificamos que el dato corresponda al punto triple y no al punto critico, que es de $73\\ \\text{atm}$." },
            { paso: "(iii) La curva de fusion tiene pendiente positiva, lo que implica que el volumen aumenta al fundir (el liquido ocupa mas volumen que el solido). El solido es mas denso y se hunde. No flota, a diferencia del agua.", porque: "La pendiente de la curva de fusion se interpreta con la ecuacion de Clapeyron, y su signo depende del cambio de volumen al fundir. Como la pendiente es positiva, el liquido ocupa mas volumen que el solido, asi que el solido es mas denso y se hunde. El agua tiene el comportamiento contrario, con pendiente negativa, por eso el hielo flota. Entonces el $\\text{CO}_2$ solido no flota." },
            { paso: "(iv) A presion constante de $50\\ \\text{atm}$: solido desde $-70\\ \\text{°C}$ hasta $-54\\ \\text{°C}$; al llegar a $-54\\ \\text{°C}$ funde (solido + liquido); liquido desde $-54\\ \\text{°C}$ hasta $15\\ \\text{°C}$; a $15\\ \\text{°C}$ hierve (liquido + vapor); luego vapor (gas) hasta $30\\ \\text{°C}$. Como $30\\ \\text{°C} < 31{,}1\\ \\text{°C}$ y la presion es $50\\ \\text{atm}$, el estado final es vapor.", porque: "Recorremos el diagrama a presion constante de $50\\ \\text{atm}$: primero cruzamos la curva de fusion en $-54\\ \\text{°C}$ y luego la de vaporizacion en $15\\ \\text{°C}$, pasando por solido, liquido y vapor. La temperatura inicial es $-70\\ \\text{°C}$, y la final es $30\\ \\text{°C}$. Como $30\\ \\text{°C}$ esta por debajo de $31{,}1\\ \\text{°C}$ y la presion es $50\\ \\text{atm}$, no llegamos a la zona supercritica, porque la presion critica es $73\\ \\text{atm}$. Verificamos que la temperatura final quede por debajo de la critica." }
          ],
          resultado: "(i) gas; (ii) minima presion $5{,}2\\ \\text{atm}$; (iii) no flota, el solido es mas denso; (iv) solido $\\rightarrow$ fusion a $-54\\ \\text{°C}$ $\\rightarrow$ liquido $\\rightarrow$ ebullicion a $15\\ \\text{°C}$ $\\rightarrow$ vapor a $30\\ \\text{°C}$"
        }
      ],
      errores_tipicos: [
        {
          error: "Decir que el CO2 es liquido a presion y temperatura ambientes, como el agua.",
          como_evitar: "Ubicar (1 atm, 25 C) en el diagrama: por debajo del punto triple (5,2 atm) no existe liquido, y a 1 atm el CO2 es gas."
        },
        {
          error: "Afirmar que el solido flota como el hielo.",
          como_evitar: "Interpretar la pendiente de la curva de fusion: positiva implica que el solido es mas denso que el liquido, asi que se hunde."
        },
        {
          error: "En (iv) saltar directamente de solido a gas, o no marcar el paso por la fusion (-54 C) y la ebullicion (15 C) a 50 atm.",
          como_evitar: "Recorrer el diagrama a presion constante: primero cruzar la curva de fusion y despues la de vaporizacion."
        }
      ]
    },
    {
      num: 2,
      temas: ["termodinamica", "magnitudes", "reacciones"],
      enunciado: "Cereales con 70% de humedad se deshidratan en un secadero industrial. El proceso permite eliminar el agua y conservar el sabor, la textura y los nutrientes de los cereales. Se utiliza como fuente de calor la combustion completa de metanol liquido (CH3OH) a 1 atmosfera y 25 C. Se pide: (a) Escribir la ecuacion termoquimica del combustible. (b) Calcular la entalpia, la variacion de energia interna, el calor y el trabajo cuando se queman 100 g de combustible. (c) Si inicialmente el cereal humedo esta a 25 C, ¿que masa de cereal seco a 100 C se obtendra cuando se le aplica el calor producido con la combustion de 100 g de combustible? Considerar que de la energia calorica producida por los 100 g de combustible, el 15% del calor transferido se requiere para calentar el cereal desde 25 C a 100 C, y que las perdidas de calor al ambiente son del 10% del calor transferido, que se pierde al abandonar el cereal como vapor a 100 C. DATOS: ΔH°f metanol = -238 kJ/mol; ΔH°f agua(l) = -285 kJ/mol; ΔH°f dioxido de carbono = -393 kJ/mol; ΔH vaporizacion agua = 40,626 kJ/mol; cp agua(l) = 4,18 J/g.C.",
      resolucion: [
        {
          parte: "a)",
          pasos: [
            { paso: "$\\text{CH}_3\\text{OH(l)} + \\frac{3}{2}\\ \\text{O}_2\\text{(g)} \\rightarrow \\text{CO}_2\\text{(g)} + 2\\ \\text{H}_2\\text{O(l)}$.", porque: "Escribimos la combustion completa del metanol liquido con oxigeno, con $\\text{CO}_2$ y $\\text{H}_2\\text{O}$ como productos. El carbono pasa a $\\text{CO}_2$, el hidrogeno a $\\text{H}_2\\text{O}$ y el oxigeno se ajusta con $\\frac{3}{2}\\ \\text{O}_2$. Por eso la ecuacion termoquimica es $\\text{CH}_3\\text{OH(l)} + \\frac{3}{2}\\ \\text{O}_2\\text{(g)} \\rightarrow \\text{CO}_2\\text{(g)} + 2\\ \\text{H}_2\\text{O(l)}$. Verificamos el balance de oxigeno, porque es donde mas se equivoca." },
            { paso: "$$\\Delta H_{\\text{comb}} = [\\Delta H^\\circ_f(\\text{CO}_2) + 2\\,\\Delta H^\\circ_f(\\text{H}_2\\text{O})] - \\Delta H^\\circ_f(\\text{CH}_3\\text{OH}) = [-393 + 2(-285)] - (-238) = -963 + 238 = -725\\ \\text{kJ/mol}$$", porque: "La ley de Hess permite calcular la entalpia de combustion a partir de las entalpias de formacion tabuladas, sin medirla directamente. Usamos $\\Delta H^\\circ_f(\\text{CO}_2) = -393\\ \\text{kJ/mol}$ y $\\Delta H^\\circ_f(\\text{H}_2\\text{O}) = -285\\ \\text{kJ/mol}$ multiplicado por $2$, menos $\\Delta H^\\circ_f(\\text{CH}_3\\text{OH}) = -238\\ \\text{kJ/mol}$. Entonces $\\Delta H_{\\text{comb}} = -963 + 238 = -725\\ \\text{kJ/mol}$. Conviene verificar el doble signo que aparece al restar el valor negativo del metanol." }
          ],
          resultado: "$\\Delta H_{\\text{comb}} = -725\\ \\text{kJ/mol}$"
        },
        {
          parte: "b)",
          pasos: [
            { paso: "$$n(\\text{CH}_3\\text{OH}) = \\frac{100\\ \\text{g}}{32\\ \\text{g/mol}} = 3{,}125\\ \\text{mol}$$.", porque: "Calculamos cuantos moles hay en $100\\ \\text{g}$ dividiendo la masa por la masa molar, porque la entalpia de combustion esta dada por mol. Usamos $n = \\frac{100\\ \\text{g}}{32\\ \\text{g/mol}} = 3{,}125\\ \\text{mol}$. Este paso convierte el dato de masa en la cantidad de sustancia que se quema. Verificamos que la masa molar sea $32\\ \\text{g/mol}$." },
            { paso: "$\\Delta H\\ (100\\ \\text{g}) = 3{,}125 \\times (-725) = -2265{,}6\\ \\text{kJ}$. Este es el calor a presion constante: $q = -2265{,}6\\ \\text{kJ}$ (liberado).", porque: "La entalpia es el calor a presion constante, y como la combustion ocurre a $1\\ \\text{atm}$ el calor intercambiado es igual a $\\Delta H$. Multiplicamos los moles por la entalpia molar: $3{,}125 \\times (-725)\\ \\text{kJ/mol} = -2265{,}6\\ \\text{kJ}$. Entonces $q = -2265{,}6\\ \\text{kJ}$, y el signo negativo indica que el sistema libera calor. Verificamos que el calor quede en kJ y con signo negativo." },
            { paso: "$\\Delta n$ gas por mol de combustible $= 1 - 1{,}5 = -0{,}5$. Para $100\\ \\text{g}$: $\\Delta n = -0{,}5 \\times 3{,}125 = -1{,}5625\\ \\text{mol}$.", porque: "Usamos $\\Delta n$ como los moles de gas de los productos menos los de los reactivos, por mol de combustible. El $\\text{CO}_2$ es el unico gas de los productos y el $\\text{O}_2$ el unico de los reactivos, asi que $\\Delta n = 1 - 1{,}5 = -0{,}5$ por mol. Luego multiplicamos por los moles de metanol de $100\\ \\text{g}$: $-0{,}5 \\times 3{,}125 = -1{,}5625\\ \\text{mol}$. Verificamos que el agua liquida no se cuente." },
            { paso: "Trabajo: $w = -P\\Delta V = -\\Delta n\\, RT = -(-1{,}5625)(8{,}31 \\times 10^{-3}\\ \\text{kJ/mol}\\cdot\\text{K})(298\\ \\text{K}) = +3{,}87\\ \\text{kJ}$ (lo recibe el sistema por la contraccion de volumen).", porque: "El trabajo de expansion a presion constante es $w = -P\\Delta V$, y para gases ideales $P\\Delta V = \\Delta n\\, RT$, asi que $w = -\\Delta n\\, RT$. Como $\\Delta n$ es negativo, el volumen disminuye y el sistema recibe trabajo, con signo positivo. Reemplazamos $\\Delta n = -1{,}5625\\ \\text{mol}$, $R = 8{,}31 \\times 10^{-3}\\ \\text{kJ/mol}\\cdot\\text{K}$ y $T = 298\\ \\text{K}$ para obtener $w = +3{,}87\\ \\text{kJ}$. Verificamos que $R$ este en kJ/mol$\\cdot$K para que el resultado salga en kJ." },
            { paso: "$\\Delta U = \\Delta H - \\Delta n\\, RT = -2265{,}6 - (-1{,}5625)(2{,}478) = -2261{,}7\\ \\text{kJ}$. Verificacion: $q + w = -2265{,}6 + 3{,}87 = -2261{,}7\\ \\text{kJ}$.", porque: "Usamos la primera ley, $\\Delta U = q + w$, y como $\\Delta H = \\Delta U + P\\Delta V$ se obtiene $\\Delta U = \\Delta H - \\Delta n\\, RT$. Reemplazamos $\\Delta H = -2265{,}6\\ \\text{kJ}$ y $-\\Delta n\\, RT = -(-1{,}5625)(2{,}478)$ para obtener $\\Delta U = -2261{,}7\\ \\text{kJ}$. Verificamos con $q + w = -2265{,}6 + 3{,}87 = -2261{,}7\\ \\text{kJ}$, que confirma que ambos caminos dan el mismo resultado. Conviene chequear el signo del termino $\\Delta n\\, RT$, que es facil de invertir." }
          ],
          resultado: "$\\Delta H = -2265{,}6\\ \\text{kJ}$; $\\Delta U = -2261{,}7\\ \\text{kJ}$; $q = -2265{,}6\\ \\text{kJ}$; $w = +3{,}87\\ \\text{kJ}$"
        },
        {
          parte: "c)",
          pasos: [
            { paso: "Calor transferido al cereal: $Q = 2265{,}6\\ \\text{kJ}$ (suposicion: el calor de combustion es el calor transferido).", porque: "Como el enunciado no indica otra perdida que la del $10\\%$ al final, suponemos que todo el calor de combustion llega al cereal. Tomamos $Q = 2265{,}6\\ \\text{kJ}$ y aplicamos sobre esa energia total los porcentajes del enunciado. Verificamos que se use el valor absoluto, porque es el calor que se transfiere." },
            { paso: "$15\\%$ para calentar el cereal humedo de $25$ a $100\\ \\text{°C}$: $$0{,}15 \\times 2265{,}6\\ \\text{kJ} = 339{,}8\\ \\text{kJ} = m \\times 4{,}18\\ \\text{J/g}\\cdot\\text{°C} \\times 75\\ \\text{°C}$$, entonces $m_{\\text{humedo}} = \\frac{339\\,840\\ \\text{J}}{313{,}5\\ \\text{J/g}} = 1084\\ \\text{g}$. Suposicion: se usa el $c_p$ del agua como $c_p$ del cereal humedo, porque es el unico dato dado.", porque: "Para calentar sin cambio de fase usamos $q = m\\, c_p\\, \\Delta T$, donde $c_p$ es el calor especifico y $\\Delta T$ el cambio de temperatura, de $25$ a $100\\ \\text{°C}$, es decir $75\\ \\text{°C}$. Con $0{,}15 \\times 2265{,}6\\ \\text{kJ} = 339{,}8\\ \\text{kJ}$ despejamos $m = \\frac{339\\,840\\ \\text{J}}{4{,}18\\ \\text{J/g}\\cdot\\text{°C} \\times 75\\ \\text{°C}} = 1084\\ \\text{g}$. Usamos el $c_p$ del agua porque es el unico dato disponible, lo que supone que el cereal humedo se comporta como agua. Verificamos que la energia este en J para que las unidades cierren." },
            { paso: "$75\\%$ para vaporizar agua: $$0{,}75 \\times 2265{,}6\\ \\text{kJ} = 1699{,}2\\ \\text{kJ}$$. $n(\\text{H}_2\\text{O evaporada}) = \\frac{1699{,}2}{40{,}626} = 41{,}82\\ \\text{mol} = 752{,}8\\ \\text{g}$.", porque: "En el cambio de fase la temperatura queda constante y el calor es $n \\times \\Delta H_{\\text{vap}}$, asi que los moles de agua evaporada salen de dividir la energia por la entalpia de vaporizacion. Calculamos $0{,}75 \\times 2265{,}6\\ \\text{kJ} = 1699{,}2\\ \\text{kJ}$, y luego $n = \\frac{1699{,}2}{40{,}626} = 41{,}82\\ \\text{mol}$ de $\\text{H}_2\\text{O}$. Con $M(\\text{H}_2\\text{O}) = 18\\ \\text{g/mol}$ pasamos a gramos y obtenemos $752{,}8\\ \\text{g}$. Verificamos que la energia usada sea el $75\\%$ y no el $15\\%$." },
            { paso: "$10\\%$ se pierde al ambiente (no interviene en el balance de masa).", porque: "Las perdidas al ambiente son energia que sale del sistema y no cambian la masa de agua ni de cereal. Por eso el $10\\%$ no entra en el balance de masa, y solo se usa para verificar el balance de energia. Entonces $15\\%$ + $75\\%$ + $10\\%$ suman el $100\\%$ del calor transferido. Recordamos que esta perdida ocurre al abandonar el cereal como vapor a $100\\ \\text{°C}$." },
            { paso: "Masa de cereal seco $= 1084\\ \\text{g} - 752{,}8\\ \\text{g} = 331\\ \\text{g}$. Control: $30\\%$ de $1084\\ \\text{g} = 325\\ \\text{g}$, diferencia de $2\\%$ por redondeo y por la suposicion de $c_p$.", porque: "El balance de masa dice que la masa de cereal seco es la masa humeda inicial menos el agua evaporada. Usamos $1084\\ \\text{g} - 752{,}8\\ \\text{g} = 331\\ \\text{g}$, y el agua que queda es la residual. Por eso el resultado puede diferir levemente del $30\\%$ de humedad restante, que da $325\\ \\text{g}$. Verificamos que la resta use la masa humeda calculada y los gramos de agua evaporada." }
          ],
          resultado: "$\\approx 331\\ \\text{g}$ de cereal seco ($\\approx 325\\ \\text{g}$ si se usa directamente el $30\\%$ de humedad restante)"
        }
      ],
      errores_tipicos: [
        {
          error: "Calcular ΔU como ΔH + Δn RT (signo cambiado), o usar Δn con agua liquida como si fuera gas.",
          como_evitar: "ΔU = ΔH - Δn RT, con Δn solo de gases: 1 - 1,5 = -0,5 por mol de metanol."
        },
        {
          error: "Usar ΔHcomb = ΣΔHf(reactivos) - ΣΔHf(productos), o multiplicar por 2 solo el CO2 (olvidando el coeficiente 2 del agua).",
          como_evitar: "ΔHcomb = ΣΔHf(productos) - ΣΔHf(reactivos), con todos los coeficientes."
        },
        {
          error: "En c) invertir los porcentajes (15% para vaporizar, 75% para calentar), o aplicar el 15% a la masa en vez de a la energia.",
          como_evitar: "Primero plantear el balance de energia: calentamiento = m x cp x ΔT (15%), vaporizacion = n x ΔHvap (75%); recien despues hacer el balance de masa."
        }
      ]
    },
    {
      num: 3,
      temas: ["acidobase", "equilibrio", "soluciones"],
      enunciado: "Considerando los valores Ka de los acidos HCN, C6H5-COOH, HClO2 y HF, responda a las siguientes preguntas, justificando su respuesta en cada caso: (a) ¿Cual es el orden de mayor a menor acidez en agua? (b) A igual concentracion, ¿cual de ellos presenta una disolucion acuosa con menor pH? (c) Calcule el valor de pH para una disolucion de concentracion 0,1 M de acido HCN. Utilice balances de masa y carga. Verifique los desprecios realizados. (d) Utilizando el equilibrio de ionizacion en disolucion acuosa, ¿cuales son las bases conjugadas de los acidos considerados? Ordene las mismas de mayor a menor basicidad. DATOS: Ka HCN = 4,9 x 10^-10; Ka C6H5-COOH = 6,5 x 10^-5; Ka HClO2 = 1,0 x 10^-2; Ka HF = 3,5 x 10^-4.",
      resolucion: [
        {
          parte: "a)",
          pasos: [
            { paso: "A mayor $K_a$, mayor acidez: $\\text{HClO}_2$ ($1{,}0 \\times 10^{-2}$) $>$ $\\text{HF}$ ($3{,}5 \\times 10^{-4}$) $>$ $\\text{C}_6\\text{H}_5\\text{COOH}$ ($6{,}5 \\times 10^{-5}$) $>$ $\\text{HCN}$ ($4{,}9 \\times 10^{-10}$).", porque: "La $K_a$ mide cuanto se ioniza un acido debil en equilibrio: a mayor $K_a$, mayor concentracion de $\\text{H}^+$ y mas fuerte es el acido. Por eso el orden de acidez se obtiene comparando directamente los valores de $K_a$: $\\text{HClO}_2$ ($1{,}0 \\times 10^{-2}$) $>$ $\\text{HF}$ ($3{,}5 \\times 10^{-4}$) $>$ $\\text{C}_6\\text{H}_5\\text{COOH}$ ($6{,}5 \\times 10^{-5}$) $>$ $\\text{HCN}$ ($4{,}9 \\times 10^{-10}$). Verificamos que se compare $K_a$ y no $\\text{p}K_a$, porque con $\\text{p}K_a$ el orden se invierte." }
          ],
          resultado: "$\\text{HClO}_2 > \\text{HF} > \\text{C}_6\\text{H}_5\\text{COOH} > \\text{HCN}$"
        },
        {
          parte: "b)",
          pasos: [
            { paso: "A igual concentracion, el acido con mayor $K_a$ se ioniza mas y produce mas $\\text{H}^+$.", porque: "Como la comparacion se hace con la misma concentracion inicial, el $[\\text{H}^+]$ depende de $K_a$: el acido con mayor $K_a$ alcanza un equilibrio con mas iones $\\text{H}^+$. Eso se traduce en un pH menor. Conviene recordar que esta comparacion vale solo a igual concentracion." },
            { paso: "Por lo tanto el de menor pH es el $\\text{HClO}_2$.", porque: "El $\\text{pH} = -\\log[\\text{H}^+]$, asi que mas $\\text{H}^+$ implica menor pH. El $\\text{HClO}_2$ tiene la $K_a$ mas grande de los cuatro acidos, $1{,}0 \\times 10^{-2}$, y por eso produce mas $\\text{H}^+$. Entonces el de menor pH es el $\\text{HClO}_2$. Verificamos que se compare el mismo tipo de acido y la misma concentracion." }
          ],
          resultado: "$\\text{HClO}_2$"
        },
        {
          parte: "c)",
          pasos: [
            { paso: "Balance de carga: $[\\text{H}^+] = [\\text{CN}^-] + [\\text{OH}^-]$.", porque: "Usamos el balance de carga, que expresa que la solucion es electricamente neutra: los cationes ($\\text{H}^+$) igualan a los aniones ($\\text{CN}^-$ y $\\text{OH}^-$). Lo escribimos como $[\\text{H}^+] = [\\text{CN}^-] + [\\text{OH}^-]$, e incluimos el $\\text{OH}^-$ que proviene del agua para no omitirlo sin verificar si es despreciable. Verificamos que cada ion tenga su carga correcta." },
            { paso: "Balance de masa: $C = 0{,}1\\ \\text{M} = [\\text{HCN}] + [\\text{CN}^-]$.", porque: "Usamos el balance de masa, que conserva el numero de moles de cianuro proveniente del $\\text{HCN}$ disuelto. Con la concentracion total $C = 0{,}1\\ \\text{M}$ repartimos la concentracion entre la forma sin disociar y la forma ionizada: $C = [\\text{HCN}] + [\\text{CN}^-]$. Verificamos que la suma de ambas sea igual a $0{,}1\\ \\text{M}$." },
            { paso: "$K_a = \\frac{[\\text{H}^+][\\text{CN}^-]}{[\\text{HCN}]}$. Suposiciones: $[\\text{H}^+] = [\\text{CN}^-]$ (se desprecia $[\\text{OH}^-]$) y $[\\text{HCN}] \\approx C = 0{,}1\\ \\text{M}$.", porque: "Es la expresion de la constante de acidez para el equilibrio $\\text{HCN} \\rightleftharpoons \\text{H}^+ + \\text{CN}^-$, escrita con las concentraciones de equilibrio. Como suponemos $[\\text{H}^+] = [\\text{CN}^-]$ y $[\\text{HCN}] \\approx C = 0{,}1\\ \\text{M}$, la expresion se reduce a una ecuacion de una sola incognita. Usamos $K_a = 4{,}9 \\times 10^{-10}$ para despejar $[\\text{H}^+]$. Verificamos luego que las suposiciones sean validas." },
            { paso: "$$[\\text{H}^+]^2 = K_a \\times C = 4{,}9 \\times 10^{-10} \\times 0{,}1 = 4{,}9 \\times 10^{-11}$$, entonces $[\\text{H}^+] = 7{,}0 \\times 10^{-6}\\ \\text{M}$.", porque: "Despejamos $[\\text{H}^+]^2 = K_a \\times C$ de la ecuacion de $K_a$ aproximada, lo que da una formula directa para acidos debiles. Calculamos $K_a \\times C = 4{,}9 \\times 10^{-10} \\times 0{,}1 = 4{,}9 \\times 10^{-11}$, y luego tomamos la raiz para obtener $[\\text{H}^+] = 7{,}0 \\times 10^{-6}\\ \\text{M}$. Esta formula es valida cuando la disociacion es pequena frente a $C$, y ese supuesto lo verificamos al final. Conviene calcular el producto antes de tomar la raiz." },
            { paso: "$$\\text{pH} = -\\log(7{,}0 \\times 10^{-6}) = 5{,}15$$.", porque: "El $\\text{pH}$ se define como $-\\log[\\text{H}^+]$, asi que tomamos el logaritmo decimal de $[\\text{H}^+] = 7{,}0 \\times 10^{-6}\\ \\text{M}$. Calculamos $\\text{pH} = -\\log(7{,}0 \\times 10^{-6}) = 5{,}15$. Verificamos que la calculadora use logaritmo en base $10$ y que el signo del resultado sea correcto." },
            { paso: "Verificacion: $[\\text{OH}^-] = \\frac{K_w}{[\\text{H}^+]} = 1{,}4 \\times 10^{-9}\\ \\text{M}$, es despreciable frente a $7{,}0 \\times 10^{-6}\\ \\text{M}$. $\\frac{x}{C} = 7{,}0 \\times 10^{-5}$, menor que $5\\%$, asi que $[\\text{HCN}] \\approx 0{,}1\\ \\text{M}$ es valido. Resolviendo sin aproximar, $[\\text{H}^+]$ queda igual a $7{,}0 \\times 10^{-6}\\ \\text{M}$.", porque: "Verificamos los desprecios: el $\\text{OH}^-$ del agua debe ser despreciable frente al $\\text{H}^+$, y la disociacion $x$ debe ser pequena frente a $C$. Con $[\\text{OH}^-] = \\frac{K_w}{[\\text{H}^+]} = 1{,}4 \\times 10^{-9}\\ \\text{M}$ y $\\frac{x}{C} = 7{,}0 \\times 10^{-5}$, menor que $5\\%$, ambos criterios se cumplen. Por eso la aproximacion es valida y $[\\text{H}^+] = 7{,}0 \\times 10^{-6}\\ \\text{M}$ se acepta. Conviene mostrar el calculo de las dos comparaciones." }
          ],
          resultado: "$\\text{pH} = 5{,}15$"
        },
        {
          parte: "d)",
          pasos: [
            { paso: "Bases conjugadas: $\\text{HCN} \\rightarrow \\text{CN}^-$; $\\text{C}_6\\text{H}_5\\text{COOH} \\rightarrow \\text{C}_6\\text{H}_5\\text{COO}^-$ (benzoato); $\\text{HF} \\rightarrow \\text{F}^-$; $\\text{HClO}_2 \\rightarrow \\text{ClO}_2^-$ (clorito).", porque: "La base conjugada de un acido $\\text{HA}$ es $\\text{A}^-$, la especie que queda al perder un $\\text{H}^+$. Por eso quitamos un H a cada acido: $\\text{HCN} \\rightarrow \\text{CN}^-$, $\\text{C}_6\\text{H}_5\\text{COOH} \\rightarrow \\text{C}_6\\text{H}_5\\text{COO}^-$, $\\text{HF} \\rightarrow \\text{F}^-$ y $\\text{HClO}_2 \\rightarrow \\text{ClO}_2^-$. Verificamos que la carga sea la correcta: cada base tiene una unidad negativa mas que su acido, que es neutro." },
            { paso: "$K_b = \\frac{K_w}{K_a}$: $\\text{CN}^-$ $2{,}0 \\times 10^{-5}$; $\\text{C}_6\\text{H}_5\\text{COO}^-$ $1{,}5 \\times 10^{-10}$; $\\text{F}^-$ $2{,}9 \\times 10^{-11}$; $\\text{ClO}_2^-$ $1{,}0 \\times 10^{-12}$.", porque: "Para un par acido-base conjugado se cumple $K_a \\times K_b = K_w$, por lo que $K_b = \\frac{K_w}{K_a}$. Calculamos cada $K_b$ dividiendo $K_w$ por la $K_a$ de su acido: $\\text{CN}^-$ $2{,}0 \\times 10^{-5}$, $\\text{C}_6\\text{H}_5\\text{COO}^-$ $1{,}5 \\times 10^{-10}$, $\\text{F}^-$ $2{,}9 \\times 10^{-11}$ y $\\text{ClO}_2^-$ $1{,}0 \\times 10^{-12}$. Verificamos que $K_w$ tenga el valor que corresponde a la temperatura de trabajo." },
            { paso: "Mayor a menor basicidad: la base conjugada del acido mas debil es la mas fuerte.", porque: "Una base es mas fuerte cuanto mayor es su $K_b$. Como $K_b = \\frac{K_w}{K_a}$, el acido mas debil, con $K_a$ chica, tiene la base conjugada mas fuerte. Por eso ordenamos de mayor a menor $K_b$: $\\text{CN}^- > \\text{C}_6\\text{H}_5\\text{COO}^- > \\text{F}^- > \\text{ClO}_2^-$, que es el inverso del orden de acidez. Verificamos que el orden quede de mayor a menor $K_b$." }
          ],
          resultado: "$\\text{CN}^- > \\text{C}_6\\text{H}_5\\text{COO}^- > \\text{F}^- > \\text{ClO}_2^-$"
        }
      ],
      errores_tipicos: [
        {
          error: "Tratar al HCN como acido fuerte (disociacion total) y dar pH = 1 en (c).",
          como_evitar: "Con Ka = 4,9 x 10^-10 la disociacion es minima: [H+] = raiz(Ka x C)."
        },
        {
          error: "En (d) ordenar las bases en el mismo orden que los acidos, olvidando que la base conjugada del acido mas debil es la mas fuerte.",
          como_evitar: "Calcular Kb = Kw/Ka y ordenar de mayor a menor Kb."
        },
        {
          error: "En (b) asociar el pH menor con el acido de menor Ka, o asumir que a igual concentracion todos dan el mismo pH.",
          como_evitar: "A igual concentracion, el mayor Ka (HClO2) produce mas H+ y el pH es menor."
        }
      ]
    }
  ]
});

// ============================================================
// EXAMEN 4: fecha y tipo no visibles en la foto (WA0024)
// Tipo asumido: "parcial". Verificar contra el original.
// Ejercicio 2 (xilenos): el volumen de gas se da para 1 mol de xileno (ecuacion de a). Por cada gramo: 179,2 L / 106 g = 1,69 L de CO2.
// ============================================================
window.PARCIALES.push({
  id: "parcial-sin-fecha-2",
  tipo: "parcial",
  fecha: "sin fecha",
  fuente: "parciales/IMG-20260331-WA0024.jpg",
  ejercicios: [
    {
      num: 1,
      temas: ["reacciones", "soluciones", "uniones"],
      enunciado: "El acido acetico reacciona con el carbonato de calcio para formar acetato de calcio, dioxido de carbono y agua segun la siguiente reaccion: 2 CH3COOH(ac) + CaCO3(s) -> Ca(CH3COO)2(ac) + CO2(g) + H2O(l). Si la reaccion conduce a la formacion de 6,66 moles de CO2, calcule: a) el volumen de solucion de acido acetico 95% m/m y densidad 1,05 g/mL que reacciono; b) si se utilizaron 850 g de CaCO3 de 81% de pureza, identifique el reactivo limitante y calcule los moles que no reaccionaron del reactivo en exceso; c) escriba la estructura de Lewis de ambos reactivos e indique cual tendra mayor punto de fusion. Justifique adecuadamente su respuesta.",
      resolucion: [
        {
          parte: "a)",
          pasos: [
            { paso: "Por estequiometria: $$n(\\text{CH}_3\\text{COOH}) = 2 \\times 6{,}66\\ \\text{mol} = 13{,}32\\ \\text{mol}$$", porque: "La estequiometria relaciona los moles de acido con los de $\\text{CO}_2$ usando la ecuacion balanceada: $2$ mol de acido por cada mol de $\\text{CO}_2$. Con $6{,}66\\ \\text{mol}$ de $\\text{CO}_2$ calculamos $n(\\text{CH}_3\\text{COOH}) = 2 \\times 6{,}66\\ \\text{mol} = 13{,}32\\ \\text{mol}$. Por eso el acido consumido es el doble del $\\text{CO}_2$ formado. Verificamos el coeficiente $2$ antes de multiplicar." },
            { paso: "$m(\\text{CH}_3\\text{COOH puro}) = 13{,}32\\ \\text{mol} \\times 60\\ \\text{g/mol} = 799{,}2\\ \\text{g}$.", porque: "Con $n = \\frac{m}{M}$ pasamos los moles a gramos multiplicando por la masa molar del acido, que se obtiene sumando los atomos de $\\text{C}_2\\text{H}_4\\text{O}_2$. Usamos $13{,}32\\ \\text{mol} \\times 60\\ \\text{g/mol} = 799{,}2\\ \\text{g}$, que es la masa de acido puro que reacciono. Verificamos que la formula y el conteo de atomos esten bien hechos." },
            { paso: "$$m(\\text{solucion}) = \\frac{799{,}2\\ \\text{g}}{0{,}95} = 841{,}3\\ \\text{g}$$", porque: "La concentracion $m/m$ indica que el $95\\%$ de la masa de la solucion es acido puro, por eso la masa de solucion es la del acido dividida por $0{,}95$. Calculamos $m(\\text{solucion}) = \\frac{799{,}2\\ \\text{g}}{0{,}95} = 841{,}3\\ \\text{g}$. Es la definicion de porcentaje en masa, con la masa de soluto sobre la masa total. Verificamos que se divida y no se multiplique." },
            { paso: "$$V(\\text{solucion}) = \\frac{841{,}3\\ \\text{g}}{1{,}05\\ \\text{g/mL}} = 801\\ \\text{mL} = 0{,}801\\ \\text{L}$$", porque: "Usamos la densidad, que relaciona masa y volumen: $d = \\frac{m}{V}$, y de ahi $V = \\frac{m}{d}$. Con la masa de solucion de $841{,}3\\ \\text{g}$ y la densidad de $1{,}05\\ \\text{g/mL}$ obtenemos $V = \\frac{841{,}3\\ \\text{g}}{1{,}05\\ \\text{g/mL}} = 801\\ \\text{mL}$. Ese volumen se pasa a litros, $0{,}801\\ \\text{L}$. Verificamos que las unidades de densidad sean $\\text{g/mL}$." }
          ],
          resultado: "$V(\\text{solucion}) \\approx 801\\ \\text{mL}$ ($0{,}801\\ \\text{L}$)"
        },
        {
          parte: "b)",
          pasos: [
            { paso: "$$m(\\text{CaCO}_3\\ \\text{puro}) = 850\\ \\text{g} \\times 0{,}81 = 688{,}5\\ \\text{g}$$ $n = \\frac{688{,}5}{100} = 6{,}885\\ \\text{mol}$.", porque: "La pureza indica la fraccion de $\\text{CaCO}_3$ real que hay en los $850\\ \\text{g}$ de muestra, asi que la masa pura es $850 \\times 0{,}81$. Calculamos $m(\\text{CaCO}_3 \\text{ puro}) = 688{,}5\\ \\text{g}$ y luego $n = \\frac{688{,}5}{100} = 6{,}885\\ \\text{mol}$ con la masa molar del $\\text{CaCO}_3$. Verificamos que se descuente la pureza antes de calcular los moles." },
            { paso: "Por estequiometria, $6{,}66\\ \\text{mol}$ de $\\text{CO}_2$ requieren $6{,}66\\ \\text{mol}$ de $\\text{CaCO}_3$ y $13{,}32\\ \\text{mol}$ de acido.", porque: "Usamos la ecuacion balanceada, que fija la relacion $1{:}1$ entre $\\text{CaCO}_3$ y $\\text{CO}_2$, y $2{:}1$ entre acido y $\\text{CO}_2$. Con esas relaciones calculamos cuanto $\\text{CaCO}_3$ y cuanto acido se necesitan para producir $6{,}66\\ \\text{mol}$ de $\\text{CO}_2$: $6{,}66\\ \\text{mol}$ de $\\text{CaCO}_3$ y $13{,}32\\ \\text{mol}$ de acido. Verificamos que se usen los coeficientes de la ecuacion balanceada." },
            { paso: "El acido es el limitante: se consume por completo ($13{,}32\\ \\text{mol}$) y el $\\text{CaCO}_3$ disponible ($6{,}885\\ \\text{mol}$) es mayor que lo que reacciona ($6{,}66\\ \\text{mol}$).", porque: "Comparamos cuanto $\\text{CaCO}_3$ requiere el acido disponible con cuanto acido requiere el $\\text{CaCO}_3$. Como cada mol de $\\text{CaCO}_3$ consume $2$ mol de acido, el $\\text{CaCO}_3$ disponible pediria mas acido del que hay. Por eso el acido se consume por completo y es el limitante, mientras el $\\text{CaCO}_3$ disponible, $6{,}885\\ \\text{mol}$, queda en exceso. Verificamos la comparacion con los coeficientes de la ecuacion." },
            { paso: "Suposicion: el acido de la parte a) es todo el acido que reacciona, es decir se consume totalmente.", porque: "El enunciado fija $6{,}66\\ \\text{mol}$ de $\\text{CO}_2$ como resultado de la reaccion, y ese valor determina cuanto acido se consume, calculado en a). Por eso el acido de a) se toma como el que reacciona por completo. Esta es la base del calculo del exceso. Conviene dejar explicita esta hipotesis." },
            { paso: "$\\text{CaCO}_3$ sin reaccionar $= 6{,}885 - 6{,}66 = 0{,}225\\ \\text{mol}$.", porque: "Por balance de materia, lo que queda sin reaccionar es lo disponible menos lo consumido. Como el consumo de $\\text{CaCO}_3$ es $1{:}1$ con el $\\text{CO}_2$ formado, calculamos $6{,}885\\ \\text{mol} - 6{,}66\\ \\text{mol} = 0{,}225\\ \\text{mol}$. Entonces sobran $0{,}225\\ \\text{mol}$ de $\\text{CaCO}_3$. Verificamos que el resultado sea el exceso en moles y no en gramos." }
          ],
          resultado: "Limitante: acido acetico. Quedan sin reaccionar $0{,}225\\ \\text{mol}$ de $\\text{CaCO}_3$ (reactivo en exceso)"
        },
        {
          parte: "c)",
          pasos: [
            { paso: "$\\text{CH}_3\\text{COOH}$: $\\text{H-C(H)(H)-C(=O)-O-H}$ (C del grupo carboxilo con doble enlace a O y enlace simple a OH). Molecula covalente con puentes de hidrogeno entre moleculas.", porque: "En la estructura de Lewis del acido, el carbono del grupo carboxilo forma un doble enlace con un O y un enlace simple con el $\\text{O-H}$, completando el octeto. Por eso la molecula es covalente, y el H unido al O permite formar puentes de hidrogeno entre moleculas. Verificamos que el C tenga $4$ enlaces en total y que el $\\text{O-H}$ este presente." },
            { paso: "$\\text{CaCO}_3$: compuesto ionico. $\\text{Ca}^{2+}$ y el ion carbonato $[\\text{O=C(-O-)(-O-)}]^{2-}$, con resonancia entre las tres formas de Lewis. Red ionica.", porque: "El calcio es un metal que cede electrones al anion carbonato, un poliatomico, y la union entre $\\text{Ca}^{2+}$ y $\\text{CO}_3^{2-}$ es ionica. Usamos la resonancia entre las tres formas de Lewis, que reparte la carga entre los tres oxigenos y estabiliza el ion. Entonces el $\\text{CaCO}_3$ forma una red ionica. Verificamos que el carbonato tenga carga $2^-$ y no se dibuje como molecula." },
            { paso: "Los compuestos ionicos tienen fuerzas electrostaticas mucho mas intensas que los puentes de hidrogeno, por eso el $\\text{CaCO}_3$ tiene el mayor punto de fusion (en la practica se descompone antes de fundir, a alta temperatura).", porque: "Las fuerzas intermoleculares determinan el punto de fusion: las atracciones ion-ion de una red son mucho mas intensas que los puentes de hidrogeno, y requieren mas energia para romperse. Por eso el $\\text{CaCO}_3$ tiene el mayor punto de fusion, frente al acido acetico. Conviene recordar que en la practica el $\\text{CaCO}_3$ se descompone antes de fundir, pero el criterio de comparacion es el mismo." }
          ],
          resultado: "El $\\text{CaCO}_3$ (ionico) tiene el mayor punto de fusion; el acido acetico (molecular, p.f. $\\approx 17\\ \\text{°C}$) tiene menor"
        }
      ],
      errores_tipicos: [
        {
          error: "Olvidar el coeficiente 2 del acido y usar 6,66 mol de CH3COOH en lugar de 13,32 mol.",
          como_evitar: "Antes de usar estequiometria, balancear: 2 mol de acido por cada mol de CO2 (y de CaCO3)."
        },
        {
          error: "En a) tomar 799,2 g como masa de solucion (sin dividir por 0,95) o usar la densidad como si fuera V = m x d.",
          como_evitar: "m(solucion) = m(puro)/0,95, y luego V = m(solucion)/d."
        },
        {
          error: "En b) decidir el limitante comparando los 850 g de CaCO3 con los moles de acido, o no descontar la pureza del 81%.",
          como_evitar: "Pasar todo a moles puros: 688,5 g = 6,885 mol de CaCO3 frente a 13,32 mol de acido."
        }
      ]
    },
    {
      num: 2,
      temas: ["termodinamica", "gases", "reacciones"],
      enunciado: "Los xilenos (C8H10) son hidrocarburos liquidos muy utilizados en la industria como disolventes organicos. Teniendo en cuenta que por cada gramo de xileno se desprendieron 43,0 kJ, calcular: a) el valor de la entalpia de combustion. A continuacion escriba la ecuacion termoquimica correspondiente; b) la entalpia estandar de formacion del xileno, utilizando la ley de Hess; c) el volumen que ocupa el gas producido en CNPT. Datos adicionales: ΔH°f CO2(g) = -393,5 kJ/mol; ΔH°f H2O(l) = -286,0 kJ/mol.",
      resolucion: [
        {
          parte: "a)",
          pasos: [
            { paso: "$M(\\text{C}_8\\text{H}_{10}) = 8 \\times 12 + 10 \\times 1 = 106\\ \\text{g/mol}$.", porque: "Calculamos la masa molar sumando las masas atomicas: $8$ atomos de C y $10$ atomos de H. Con $8 \\times 12 + 10 \\times 1 = 106\\ \\text{g/mol}$ convertimos el dato por gramo en un dato por mol. Verificamos que la suma de $106\\ \\text{g/mol}$ este bien hecha." },
            { paso: "$$\\Delta H_{\\text{comb}} = -43{,}0\\ \\text{kJ/g} \\times 106\\ \\text{g/mol} = -4558\\ \\text{kJ/mol}$$", porque: "El dato esta dado por gramo, y para pasarlo a kJ/mol multiplicamos por la masa molar. Calculamos $\\Delta H_{\\text{comb}} = -43{,}0\\ \\text{kJ/g} \\times 106\\ \\text{g/mol} = -4558\\ \\text{kJ/mol}$. Como es calor liberado, el signo es negativo. Verificamos que el resultado tenga la magnitud de miles de kJ por mol, que es lo esperable para un combustible." },
            { paso: "Ecuacion: $\\text{C}_8\\text{H}_{10}\\text{(l)} + \\frac{21}{2}\\ \\text{O}_2\\text{(g)} \\rightarrow 8\\ \\text{CO}_2\\text{(g)} + 5\\ \\text{H}_2\\text{O(l)}$, $\\Delta H = -4558\\ \\text{kJ/mol}$.", porque: "Usamos el balance de atomos para la combustion completa: $8$ C dan $8$ $\\text{CO}_2$, $10$ H dan $5$ $\\text{H}_2\\text{O}$ y el O se ajusta con $\\frac{21}{2}\\ \\text{O}_2$ para igualar los $21$ atomos de O. Escribimos la ecuacion $\\text{C}_8\\text{H}_{10}\\text{(l)} + \\frac{21}{2}\\ \\text{O}_2\\text{(g)} \\rightarrow 8\\ \\text{CO}_2\\text{(g)} + 5\\ \\text{H}_2\\text{O(l)}$, con $\\Delta H = -4558\\ \\text{kJ/mol}$ para un mol de combustible. Conviene verificar que el coeficiente fraccionario se conserve en la ecuacion." }
          ],
          resultado: "$\\Delta H_{\\text{comb}} = -4558\\ \\text{kJ/mol}$"
        },
        {
          parte: "b)",
          pasos: [
            { paso: "Hess: $\\Delta H_{\\text{comb}} = [8\\,\\Delta H_f(\\text{CO}_2) + 5\\,\\Delta H_f(\\text{H}_2\\text{O})] - \\Delta H_f(\\text{C}_8\\text{H}_{10})$; $\\Delta H_f(\\text{O}_2) = 0$.", porque: "Usamos la ley de Hess, que aplicada a la combustion relaciona la entalpia de combustion con las formaciones de productos y reactivos. El $\\text{O}_2$ vale $0$ porque es un elemento en su forma estandar. Con esa relacion despejamos la formacion del xileno: $\\Delta H_{\\text{comb}} = [8\\,\\Delta H_f(\\text{CO}_2) + 5\\,\\Delta H_f(\\text{H}_2\\text{O})] - \\Delta H_f(\\text{C}_8\\text{H}_{10})$. Verificamos que los coeficientes sean los de la ecuacion balanceada." },
            { paso: "$$8 \\times (-393{,}5) + 5 \\times (-286{,}0) = -3148 - 1430 = -4578\\ \\text{kJ}$$", porque: "Dado que cada entalpia de formacion se multiplica por su coeficiente, sumamos: $8$ veces la del $\\text{CO}_2$ y $5$ veces la del $\\text{H}_2\\text{O}$. Con $8 \\times (-393{,}5) + 5 \\times (-286{,}0) = -3148 - 1430 = -4578\\ \\text{kJ}$ obtenemos la contribucion de los productos. Esa suma es el termino que usamos en la ecuacion de Hess. Verificamos que cada termino conserve su signo negativo." },
            { paso: "$-4558 = -4578 - \\Delta H_f(\\text{C}_8\\text{H}_{10})$, entonces $$\\Delta H_f(\\text{C}_8\\text{H}_{10}) = -4578 + 4558 = -20\\ \\text{kJ/mol}$$.", porque: "Usamos la ecuacion de Hess y reemplazamos la entalpia de combustion, $-4558\\ \\text{kJ/mol}$, para despejar $\\Delta H_f(\\text{C}_8\\text{H}_{10})$. Pasamos el termino de los productos al otro lado: $\\Delta H_f(\\text{C}_8\\text{H}_{10}) = -4578 + 4558 = -20\\ \\text{kJ/mol}$. El resultado queda en kJ/mol, y su signo indica si la formacion es exotermica o endotermica. Verificamos que la resta se haga con cuidado de los signos." }
          ],
          resultado: "$\\Delta H_f(\\text{C}_8\\text{H}_{10}, \\text{l}) = -20\\ \\text{kJ/mol}$"
        },
        {
          parte: "c)",
          pasos: [
            { paso: "Por la ecuacion, $1$ mol de xileno produce $8$ mol de $\\text{CO}_2$ (unico gas; el agua es liquida).", porque: "Por la ecuacion balanceada, cada mol de xileno produce $8$ mol de $\\text{CO}_2$ como unico gas, porque el agua es liquida. Solo los gases ocupan volumen apreciable en CNPT, por eso el agua no entra en el calculo. Entonces el gas a considerar es el $\\text{CO}_2$. Verificamos que el $\\text{H}_2\\text{O}$ no se cuente como gas." },
            { paso: "$$V = 8\\ \\text{mol} \\times 22{,}4\\ \\text{L/mol} = 179{,}2\\ \\text{L}$$ en CNPT.", porque: "En CNPT un mol de gas ideal ocupa $22{,}4\\ \\text{L}$, por lo que el volumen es el numero de moles de $\\text{CO}_2$ por ese valor. Calculamos $V = 8\\ \\text{mol} \\times 22{,}4\\ \\text{L/mol} = 179{,}2\\ \\text{L}$ en CNPT. Esta relacion surge de $PV = nRT$ en esas condiciones. Verificamos que se usen los $8$ mol de $\\text{CO}_2$ y no los $5$ mol de $\\text{H}_2\\text{O}$." },
            { paso: "Suposicion: se toma el volumen correspondiente a $1$ mol de xileno (la ecuacion de a). Si se refiere a $1\\ \\text{g}$: $$\\frac{8}{106}\\ \\text{mol} \\times 22{,}4\\ \\text{L/mol} = 1{,}69\\ \\text{L}$$", porque: "Como el enunciado no aclara la base del volumen, tomamos $1$ mol de xileno, que es la referencia de la ecuacion de a). Para expresar el resultado por gramo dividimos por $106\\ \\text{g/mol}$ y multiplicamos por $8$ mol de $\\text{CO}_2$: $\\frac{8}{106}\\ \\text{mol} \\times 22{,}4\\ \\text{L/mol} = 1{,}69\\ \\text{L}$. Conviene informar ambas bases para evitar confusiones." }
          ],
          resultado: "$V(\\text{CO}_2) = 179{,}2\\ \\text{L}$ en CNPT (para $1$ mol de xileno; $\\approx 1{,}69\\ \\text{L}$ por cada gramo)"
        }
      ],
      errores_tipicos: [
        {
          error: "Usar 43,0 kJ/g directamente como kJ/mol, olvidando multiplicar por la masa molar (106 g/mol) y obtener -43 kJ/mol.",
          como_evitar: "Pasar siempre de kJ/g a kJ/mol multiplicando por la masa molar del compuesto."
        },
        {
          error: "En Hess olvidar el coeficiente 5 del agua o el 8 del CO2, o invertir la formula y sumar ΔHf de reactivos.",
          como_evitar: "ΔHcomb = ΣnΔHf(productos) - ΣnΔHf(reactivos), con los coeficientes de la ecuacion balanceada."
        },
        {
          error: "En c) contar el agua liquida como gas y sumar 5 x 22,4 L, o no tener en cuenta que el xileno es liquido.",
          como_evitar: "Solo los gases ocupan volumen en CNPT: aqui solo el CO2 (8 mol)."
        }
      ]
    },
    {
      num: 3,
      temas: ["acidobase", "soluciones", "equilibrio"],
      enunciado: "a) Se tiene una base fuerte BOH en solucion acuosa. Justifique que le sucedera al pH de la disolucion al anadir una cierta cantidad de agua. b) Ordene de menor a mayor acidez las disoluciones acuosas de igual concentracion molar de NaNO3, HNO3 y KOH. Justifique su respuesta. c) Calcule el pKb de la metilamina sabiendo que una disolucion acuosa 0,045 M de la misma tiene un pH de 11,65. Indique todas las consideraciones que realiza en los calculos.",
      resolucion: [
        {
          parte: "a)",
          pasos: [
            { paso: "$\\text{BOH}$ es una base fuerte: se disocia totalmente, $[\\text{OH}^-] = C$ de la base.", porque: "Una base fuerte se disocia totalmente en agua, asi que la concentracion de $\\text{OH}^-$ es igual a la de la base. Por eso el pOH sale directamente de la concentracion de $\\text{BOH}$, sin necesidad de resolver un equilibrio. Verificamos que la base sea fuerte, porque si fuera debil la relacion no seria esa." },
            { paso: "Al agregar agua, la concentracion de $\\text{BOH}$ y de $\\text{OH}^-$ disminuye, asi que el pOH aumenta y el pH baja, acercandose a $7$ pero sin llegar a superarlo ni a ser $7$.", porque: "Al diluir disminuye la concentracion de $\\text{OH}^-$, y como $\\text{pOH} = -\\log[\\text{OH}^-]$ el pOH sube y el pH baja. Como $\\text{pH}$ y $\\text{pOH}$ suman un valor fijo, el pH se acerca a $7$ pero no lo alcanza mientras la base siga aportando $\\text{OH}^-$ en exceso sobre el agua. Por eso el pH disminuye al agregar agua. Recordamos que el agua pura es neutra." }
          ],
          resultado: "El pH disminuye (se acerca a $7$)"
        },
        {
          parte: "b)",
          pasos: [
            { paso: "$\\text{NaNO}_3$: sal de acido fuerte ($\\text{HNO}_3$) y base fuerte ($\\text{NaOH}$); no se hidroliza, $\\text{pH} \\approx 7$.", porque: "Una sal de acido fuerte y base fuerte no se hidroliza, porque ni el anion nitrato ni el cation sodio reaccionan con el agua. Por eso la solucion queda neutra, con pH cercano a $7$. Verificamos el origen de la sal antes de clasificarla, porque de eso depende si hay hidrolisis." },
            { paso: "$\\text{HNO}_3$: acido fuerte, se disocia totalmente, $\\text{pH} < 7$.", porque: "Como el $\\text{HNO}_3$ es un acido fuerte que cede todo su $\\text{H}^+$ en agua, $[\\text{H}^+]$ es igual a la concentracion del acido. Esto da un pH menor que $7$, y es el que mas acidifica la solucion de los tres. Verificamos que el acido se trate como fuerte." },
            { paso: "$\\text{KOH}$: base fuerte, $\\text{pH} > 7$.", porque: "El $\\text{KOH}$ es una base fuerte que libera totalmente $\\text{OH}^-$ en agua. Por eso el pOH es menor que $7$ y el pH mayor que $7$. Verificamos que el pH resultante sea mayor que $7$ y no menor, porque eso determina su lugar en el orden." },
            { paso: "Menor a mayor acidez: $\\text{KOH} < \\text{NaNO}_3 < \\text{HNO}_3$.", porque: "Menor pH implica mayor acidez, asi que el orden de acidez es el inverso del orden de pH. Ordenamos: $\\text{KOH}$ ($\\text{pH} > 7$) es el menos acido, $\\text{NaNO}_3$ ($\\text{pH} = 7$) el intermedio y $\\text{HNO}_3$ ($\\text{pH} < 7$) el mas acido. Por eso el orden de menor a mayor acidez es $\\text{KOH} < \\text{NaNO}_3 < \\text{HNO}_3$. Conviene escribir el orden explicitamente." }
          ],
          resultado: "$\\text{KOH} < \\text{NaNO}_3 < \\text{HNO}_3$"
        },
        {
          parte: "c)",
          pasos: [
            { paso: "$$\\text{pOH} = 14 - 11{,}65 = 2{,}35$$, entonces $[\\text{OH}^-] = 10^{-2{,}35} = 4{,}47 \\times 10^{-3}\\ \\text{M}$.", porque: "Como $\\text{pH} + \\text{pOH} = 14$, el pOH se obtiene restando el pH de $14$. Usamos $\\text{pH} = 11{,}65$ para calcular $\\text{pOH} = 14 - 11{,}65 = 2{,}35$, y de ahi $[\\text{OH}^-] = 10^{-2{,}35} = 4{,}47 \\times 10^{-3}\\ \\text{M}$. Este paso convierte el dato de pH en la concentracion de la base. Verificamos que la potencia de diez sea negativa." },
            { paso: "Metilamina: $\\text{CH}_3\\text{NH}_2 + \\text{H}_2\\text{O} \\rightleftharpoons \\text{CH}_3\\text{NH}_3^+ + \\text{OH}^-$. $K_b = \\frac{[\\text{CH}_3\\text{NH}_3^+][\\text{OH}^-]}{[\\text{CH}_3\\text{NH}_2]}$.", porque: "Como la metilamina es una base debil, escribimos la expresion de equilibrio de su reaccion con el agua: $\\text{CH}_3\\text{NH}_2 + \\text{H}_2\\text{O} \\rightleftharpoons \\text{CH}_3\\text{NH}_3^+ + \\text{OH}^-$. Usamos $K_b = \\frac{[\\text{CH}_3\\text{NH}_3^+][\\text{OH}^-]}{[\\text{CH}_3\\text{NH}_2]}$, con concentraciones de equilibrio y sin incluir el agua, que es el solvente. De esta constante sale el $\\text{p}K_b$ pedido. Verificamos que los productos esten en el numerador y el reactivo en el denominador." },
            { paso: "Balance de carga: $[\\text{CH}_3\\text{NH}_3^+] = [\\text{OH}^-]$ (se desprecia el $\\text{OH}^-$ del agua, $10^{-7}\\ \\text{M}$). Balance de masa: $[\\text{CH}_3\\text{NH}_2] = 0{,}045 - 4{,}47 \\times 10^{-3} = 0{,}0405\\ \\text{M}$.", porque: "Por electroneutralidad, la concentracion del ion metilamonio es igual a la de $\\text{OH}^-$, porque son los unicos iones relevantes. Entonces $[\\text{CH}_3\\text{NH}_3^+] = [\\text{OH}^-] = 4{,}47 \\times 10^{-3}\\ \\text{M}$, despreciando el $\\text{OH}^-$ del agua. El balance de masa indica que lo ionizado sale de la concentracion inicial: $[\\text{CH}_3\\text{NH}_2] = 0{,}045 - 4{,}47 \\times 10^{-3} = 0{,}0405\\ \\text{M}$. Verificamos que el $\\text{OH}^-$ del agua sea despreciable." },
            { paso: "$$K_b = \\frac{(4{,}47 \\times 10^{-3})^2}{0{,}0405} = 4{,}92 \\times 10^{-4}$$", porque: "Calculamos $K_b$ con las concentraciones de equilibrio: $K_b = \\frac{(4{,}47 \\times 10^{-3})^2}{0{,}0405} = 4{,}92 \\times 10^{-4}$. Es la forma exacta, que usa $\\frac{x^2}{C - x}$ y permite no despreciar $x$. Verificamos que lo que se eleva al cuadrado sea el $\\text{OH}^-$ y no el valor de $C$." },
            { paso: "Suposicion: no se desprecia $x$ porque $\\frac{x}{C} \\approx 10\\%$; si se despreciara, $K_b = 4{,}43 \\times 10^{-4}$ y $\\text{p}K_b = 3{,}35$.", porque: "Como $\\frac{x}{C}$ es cercano al $10\\%$, la aproximacion $C - x \\approx C$ no es confiable del todo, por eso usamos la expresion completa. Si se despreciara, $K_b = 4{,}43 \\times 10^{-4}$ y $\\text{p}K_b = 3{,}35$, valor que se informa solo como comparacion del error. Conviene aclarar esta consideracion en el informe." },
            { paso: "$$\\text{p}K_b = -\\log(4{,}92 \\times 10^{-4}) = 3{,}31$$.", porque: "Por analogia con $\\text{p}K_a$, $\\text{p}K_b = -\\log K_b$, lo que pasa la constante a escala logaritmica. Calculamos $\\text{p}K_b = -\\log(4{,}92 \\times 10^{-4}) = 3{,}31$, que es el valor pedido. Verificamos que el logaritmo se tome sobre el valor de $K_b$ ya calculado." }
          ],
          resultado: "$\\text{p}K_b = 3{,}31$ ($K_b \\approx 4{,}9 \\times 10^{-4}$)"
        }
      ],
      errores_tipicos: [
        {
          error: "En a) decir que el pH aumenta al diluir la base fuerte, confundiendo que al bajar la [OH-] el pH tambien baja.",
          como_evitar: "Al diluir, [OH-] baja y pH baja hacia 7; el pOH sube."
        },
        {
          error: "En b) considerar que NaNO3 es acido o basico por contener nitrato, en vez de verlo como sal de acido fuerte y base fuerte (pH 7).",
          como_evitar: "Clasificar cada sal segun su acido y su base de origen; solo se hidroliza si uno de los dos es debil."
        },
        {
          error: "En c) usar Kb = [OH-]/C (lineal) o pKb = 1/Kb, y omitir el termino cuadratico del equilibrio.",
          como_evitar: "Kb = [OH-]^2 / (C - [OH-]) y pKb = -log Kb; y explicitar las aproximaciones que se usan."
        }
      ]
    }
  ]
});
