window.PARCIALES = window.PARCIALES || [];

// ============ EXAMEN A: IMG-20260331-WA0025 ============
// Grilla de correccion (foto): Ej1 (40 pts) a=9 b=9 c=4 d=4 e=14 | Ej2 (30 pts) a=8 b=8 c=14 | Ej3 (30 pts) a=20 b=10 | Total 100.
// Fecha: en la foto dice 27/06/25; se toma 27/06/2025.
// Dato dudoso: en Ej2, el DeltaH de vaporizacion del agua aparece cortado en la foto (solo se lee "0,70 kJ/mol" al inicio del renglon siguiente). Se usa 40,7 kJ/mol (valor de tabla) como supuesto. Verificar.
// Cp del agua solida (33,60) y liquida (75,23) leidos con baja resolucion. La otra hoja usa 75,29 para el agua liquida.
window.PARCIALES.push({
  id: "2do-2025-06-27",
  tipo: "2do recuperatorio",
  fecha: "27/06/2025",
  fuente: "parciales/IMG-20260331-WA0025.jpg",
  ejercicios: [
    {
      num: 1,
      temas: ["reacciones", "magnitudes", "gases", "liquidos"],
      enunciado: "Se desea preparar 20 g de cloruro cromico segun la reaccion: K2Cr2O7(ac) + 14 HCl(ac) -> 2 CrCl3(ac) + 3 Cl2(g) + 2 KCl(ac) + 7 H2O(l). a) Chequear si es correcto el balanceo de la ecuacion aplicando el metodo del ion electron. b) Calcular la masa de dicromato de potasio impuro necesaria si el rendimiento de la reaccion es 80% y la pureza de la droga 75%. c) Que masa de cloruro de potasio se obtiene? d) Que volumen ocupa el gas obtenido si se mide en condiciones normales de presion y temperatura? e) Para todos los productos de la reaccion, indique el tipo de solido que formarian y la fuerza de atraccion intermolecular mas importante para cada uno de ellos. Haga un analisis comparativo de los puntos de fusion que tendrian los solidos anteriores, justificando su respuesta.",
      resolucion: [
        {
          parte: "a)",
          pasos: [
            { paso: "Reduccion: $$\\text{Cr}_2\\text{O}_7^{2-} + 14\\,\\text{H}^+ + 6\\,\\text{e}^- \\rightarrow 2\\,\\text{Cr}^{3+} + 7\\,\\text{H}_2\\text{O}$$ (cada Cr pasa de $+6$ a $+3$, $3\\,\\text{e}^-$ por Cr, $6\\,\\text{e}^-$ por dicromato).", porque: "Como la reaccion es en medio acido, primero balanceamos los O agregando $\\text{H}_2\\text{O}$ y despues los H con $\\text{H}^+$. Calculamos los electrones con los numeros de oxidacion: el Cr pasa de $+6$ a $+3$, o sea gana $3\\,\\text{e}^-$ por cada Cr, y como son 2 Cr del dicromato, hay $6\\,\\text{e}^-$ en total. Por eso la semirreaccion queda $14\\,\\text{H}^+ + 6\\,\\text{e}^- \\rightarrow 2\\,\\text{Cr}^{3+} + 7\\,\\text{H}_2\\text{O}$, y conviene verificar que las cargas de ambos lados coincidan." },
            { paso: "Oxidacion: $2\\,\\text{Cl}^- \\rightarrow \\text{Cl}_2 + 2\\,\\text{e}^-$. Para igualar electrones se multiplica por 3: $$6\\,\\text{Cl}^- \\rightarrow 3\\,\\text{Cl}_2 + 6\\,\\text{e}^-$$", porque: "Usamos la semirreaccion del cloro: dos $\\text{Cl}^-$ forman un $\\text{Cl}_2$ y ceden $2\\,\\text{e}^-$. Como la reduccion gano $6\\,\\text{e}^-$, la oxidacion tiene que ceder la misma cantidad, por eso multiplicamos por 3 y aparecen $6\\,\\text{Cl}^-$ y $3\\,\\text{Cl}_2$. Error comun: multiplicar por 2 y dejar $4\\,\\text{e}^-$ contra $6\\,\\text{e}^-$." },
            { paso: "Suma: $\\text{Cr}_2\\text{O}_7^{2-} + 14\\,\\text{H}^+ + 6\\,\\text{Cl}^- \\rightarrow 2\\,\\text{Cr}^{3+} + 3\\,\\text{Cl}_2 + 7\\,\\text{H}_2\\text{O}$. Se agregan los iones $\\text{K}^+$ y $\\text{Cl}^-$ que faltan: $$\\text{K}_2\\text{Cr}_2\\text{O}_7 + 14\\,\\text{HCl} \\rightarrow 2\\,\\text{CrCl}_3 + 3\\,\\text{Cl}_2 + 2\\,\\text{KCl} + 7\\,\\text{H}_2\\text{O}$$.", porque: "Al sumar las dos semirreacciones los $6\\,\\text{e}^-$ aparecen a ambos lados y se cancelan. Para volver a la forma molecular agregamos los $\\text{K}^+$ del dicromato y los $\\text{Cl}^-$ que no se oxidaron, los que forman $\\text{CrCl}_3$ y $\\text{KCl}$. Por eso la ecuacion obtenida debe coincidir con la del enunciado, sin coeficientes nuevos." },
            { paso: "Verificacion: $\\text{Cl}\\ 14 = 14$, $\\text{H}\\ 14 = 14$, $\\text{O}\\ 7 = 7$, $\\text{K}\\ 2 = 2$, $\\text{Cr}\\ 2 = 2$.", porque: "Usamos el recuento de atomos como control final: $\\text{Cl}\\ 14 = 14$, $\\text{H}\\ 14 = 14$, $\\text{O}\\ 7 = 7$, $\\text{K}\\ 2 = 2$ y $\\text{Cr}\\ 2 = 2$. Los totales tienen que coincidir porque en una reaccion quimica los atomos se conservan, como indica la ley de conservacion de la masa. Si algun elemento no coincide, conviene revisar los coeficientes antes de hacer cualquier calculo estequiometrico." }
          ],
          resultado: "Correcto: la ecuacion esta balanceada."
        },
        {
          parte: "b)",
          pasos: [
            { paso: "$M(\\text{CrCl}_3) = 52{,}00 + 3 \\times 35{,}45 = 158{,}35\\ \\text{g/mol}$. $$n(\\text{CrCl}_3) = \\frac{20\\ \\text{g}}{158{,}35\\ \\text{g/mol}} = 0{,}1263\\ \\text{mol}$$", porque: "Para convertir los $20\\ \\text{g}$ de $\\text{CrCl}_3$ en moles usamos $n = \\frac{m}{M}$, con $M = 52{,}00 + 3 \\times 35{,}45 = 158{,}35\\ \\text{g/mol}$. Dividimos $20\\ \\text{g}$ por $158{,}35\\ \\text{g/mol}$ y obtenemos $0{,}1263\\ \\text{mol}$. Hacemos este paso primero porque la estequiometria trabaja en moles y no directamente en gramos. Error comun: sumar mal la masa molar, por ejemplo no multiplicar el Cl por 3." },
            { paso: "Por estequiometria, $1\\,\\text{K}_2\\text{Cr}_2\\text{O}_7$ da $2\\,\\text{CrCl}_3$: $$n(\\text{K}_2\\text{Cr}_2\\text{O}_7)_{\\text{teorico}} = \\frac{0{,}1263}{2} = 0{,}06315\\ \\text{mol}$$", porque: "Usamos la relacion $1\\,\\text{K}_2\\text{Cr}_2\\text{O}_7 : 2\\,\\text{CrCl}_3$ de la ecuacion balanceada para pasar de moles de producto a moles de reactivo. Como se necesita la mitad de moles de dicromato que de $\\text{CrCl}_3$, dividimos $0{,}1263$ por $2$ y obtenemos $0{,}06315\\ \\text{mol}$. Esto vale porque los coeficientes indican proporciones molares y no masicas. Error comun: usar la relacion 1:1 o multiplicar por 2 en vez de dividir." },
            { paso: "$M(\\text{K}_2\\text{Cr}_2\\text{O}_7) = 294{,}2\\ \\text{g/mol}$. $$m_{\\text{teorica}} = 0{,}06315 \\times 294{,}2 = 18{,}58\\ \\text{g}$$", porque: "Multiplicamos los moles de $\\text{K}_2\\text{Cr}_2\\text{O}_7$ por su masa molar, $M = 294{,}2\\ \\text{g/mol}$, para pasar a gramos: $0{,}06315 \\times 294{,}2 = 18{,}58\\ \\text{g}$. Ese paso convierte la cantidad de sustancia en masa. Es la masa teorica, o sea la que se necesitaria con rendimiento del $100\\%$ y reactivo puro, por eso hay que corregirla en el paso siguiente. Verificar que la masa molar tenga los $7$ O del dicromato." },
            { paso: "Rendimiento $80\\%$: $$m_{\\text{necesaria pura}} = \\frac{18{,}58}{0{,}80} = 23{,}23\\ \\text{g}$$ Pureza $75\\%$: $m_{\\text{de droga impura}} = \\frac{23{,}23}{0{,}75} = 30{,}97\\ \\text{g}$.", porque: "Rendimiento y pureza son porcentajes que reducen la cantidad util: con $80\\%$ de rendimiento se aprovecha $0{,}80$ de lo calculado, y con $75\\%$ de pureza solo $0{,}75$ de la droga es dicromato. Como queremos saber cuanta droga hace falta, hacemos la cuenta inversa: $\\frac{18{,}58}{0{,}80} = 23{,}23\\ \\text{g}$ y luego $\\frac{23{,}23}{0{,}75} = 30{,}97\\ \\text{g}$. Error tipico: multiplicar por $0{,}80$ y $0{,}75$, lo que daria una masa menor que la teorica." },
            { paso: "Supuesto: los $20\\ \\text{g}$ son la cantidad de $\\text{CrCl}_3$ realmente obtenida.", porque: "El enunciado no dice si los $20\\ \\text{g}$ de $\\text{CrCl}_3$ son la cantidad teorica o la real, asi que adoptamos un supuesto explicito: tomamos los $20\\ \\text{g}$ como cantidad real. Con ese supuesto el rendimiento del $80\\%$ se aplica al dicromato, que es lo que se pide calcular. Conviene escribir el supuesto en la respuesta, porque cambia el resultado final." }
          ],
          resultado: "Aprox. $31{,}0\\ \\text{g}$ de droga impura ($23{,}2\\ \\text{g}$ de $\\text{K}_2\\text{Cr}_2\\text{O}_7$ puro)."
        },
        {
          parte: "c)",
          pasos: [
            { paso: "Relacion $2\\,\\text{CrCl}_3 : 2\\,\\text{KCl}$, luego $n(\\text{KCl}) = n(\\text{CrCl}_3) = 0{,}1263\\ \\text{mol}$.", porque: "En la ecuacion balanceada, $2\\,\\text{CrCl}_3$ producen $2\\,\\text{KCl}$, asi que la relacion molar es $1:1$. Entonces $n(\\text{KCl}) = n(\\text{CrCl}_3) = 0{,}1263\\ \\text{mol}$, sin conversion adicional. Error comun: usar la relacion del $\\text{K}_2\\text{Cr}_2\\text{O}_7$ ($1:2$ con el $\\text{CrCl}_3$) en vez de la del producto pedido." },
            { paso: "$M(\\text{KCl}) = 39{,}10 + 35{,}45 = 74{,}55\\ \\text{g/mol}$. $$m(\\text{KCl}) = 0{,}1263 \\times 74{,}55 = 9{,}42\\ \\text{g}$$", porque: "Usamos $m = n \\times M$ con $M(\\text{KCl}) = 39{,}10 + 35{,}45 = 74{,}55\\ \\text{g/mol}$, que es la suma de los pesos atomicos del K y del Cl. Calculamos $0{,}1263 \\times 74{,}55 = 9{,}42\\ \\text{g}$ de $\\text{KCl}$. Es el mismo criterio que antes, aplicado a la sustancia pedida, por eso conviene verificar que se use la masa molar del $\\text{KCl}$ y no la del $\\text{CrCl}_3$." },
            { paso: "Supuesto: se parte de los $20\\ \\text{g}$ de $\\text{CrCl}_3$ obtenidos (el rendimiento ya esta contemplado).", porque: "El $\\text{KCl}$ se forma en la misma reaccion que el $\\text{CrCl}_3$, asi que su cantidad sale de los mismos moles de reaccion. Como tomamos los $20\\ \\text{g}$ de $\\text{CrCl}_3$ como producto real, el rendimiento ya quedo incorporado y no hace falta volver a aplicar el $80\\%$. Aplicarlo de nuevo seria contar dos veces la perdida." }
          ],
          resultado: "Aprox. $9{,}42\\ \\text{g}$ de $\\text{KCl}$."
        },
        {
          parte: "d)",
          pasos: [
            { paso: "Gas: $\\text{Cl}_2$. Relacion $3\\,\\text{Cl}_2 : 2\\,\\text{CrCl}_3$, luego $$n(\\text{Cl}_2) = \\frac{3}{2} \\times 0{,}1263 = 0{,}1895\\ \\text{mol}$$", porque: "Usamos la relacion $3\\,\\text{Cl}_2 : 2\\,\\text{CrCl}_3$ para pasar de $\\text{CrCl}_3$ a $\\text{Cl}_2$: por cada $2\\ \\text{mol}$ de $\\text{CrCl}_3$ se forman $3\\ \\text{mol}$ de $\\text{Cl}_2$. Entonces $n(\\text{Cl}_2) = \\frac{3}{2} \\times 0{,}1263 = 0{,}1895\\ \\text{mol}$, porque los coeficientes dan proporciones molares y el factor no es $1$. Error tipico: tomar la relacion $1:1$ y olvidar este factor." },
            { paso: "Condiciones normales: $T = 273{,}15\\ \\text{K}$, $P = 1\\ \\text{atm}$. $$V = \\frac{nRT}{P} = \\frac{0{,}1895 \\times 0{,}0821 \\times 273{,}15}{1} = 4{,}25\\ \\text{L}$$", porque: "En condiciones normales ($273{,}15\\ \\text{K}$ y $1\\ \\text{atm}$) aplicamos $PV = nRT$, despejando $V = \\frac{nRT}{P}$ con $R = 0{,}0821\\ \\frac{\\text{L atm}}{\\text{mol K}}$. Reemplazamos: $V = \\frac{0{,}1895 \\times 0{,}0821 \\times 273{,}15}{1} = 4{,}25\\ \\text{L}$. La temperatura tiene que estar en kelvin porque la ley de gases usa escala absoluta, y con $P$ en atm el volumen sale en litros." },
            { paso: "Con $V$ molar $22{,}4\\ \\text{L/mol}$ se obtiene $4{,}24\\ \\text{L}$ (diferencia por redondeo).", porque: "Usamos el volumen molar de $22{,}4\\ \\text{L/mol}$ como control: sale de $PV = nRT$ en CN ($0{,}0821 \\times 273{,}15 = 22{,}4$), asi que $V = n \\times 22{,}4$ debe dar casi lo mismo que el calculo con $R$. Con $0{,}1895 \\times 22{,}4$ obtenemos $4{,}24\\ \\text{L}$. La pequena diferencia ($4{,}25$ contra $4{,}24\\ \\text{L}$) viene solo del redondeo de los valores intermedios." }
          ],
          resultado: "Aprox. $4{,}25\\ \\text{L}$ de $\\text{Cl}_2$ en CN."
        },
        {
          parte: "e)",
          pasos: [
            { paso: "$\\text{CrCl}_3$ y $\\text{KCl}$: solidos ionicos. La fuerza dominante es la atraccion ion-ion (electrostatica). Se asume que el $\\text{CrCl}_3$ se trata como ionico, como en la materia.", porque: "Para clasificar el solido miramos la naturaleza de los elementos: Cr y K son metales y Cl es no metal, asi que $\\text{CrCl}_3$ y $\\text{KCl}$ forman redes de iones. Esa red se mantiene por atraccion electrostatica entre cargas opuestas, que es la fuerza mas intensa en estos solidos. Error comun: tomar el $\\text{CrCl}_3$ como molecular por su formula sencilla." },
            { paso: "$\\text{Cl}_2$: a condiciones normales es gas. Como molecula apolar, su solido (si se enfria) tendria fuerzas de London (dispersion).", porque: "Para el $\\text{Cl}_2$ analizamos la molecula: como los dos atomos son iguales no hay diferencia de electronegatividad, asi que es apolar. Por eso solo actuan las fuerzas de London (dispersion), que son mas intensas cuanto mayor es la nube electronica. Verificar que no se confundan con puentes de hidrogeno o dipolo-dipolo." },
            { paso: "$\\text{H}_2\\text{O}$: solido molecular (hielo), fuerza dominante: puentes de hidrogeno.", porque: "En el agua el $\\text{H}$ esta unido directamente a $\\text{O}$, muy electronegativo, y eso deja al $\\text{H}$ con una carga parcial positiva marcada. Esa carga atrae al par libre del $\\text{O}$ de otra molecula y forma un puente de hidrogeno, la fuerza intermolecular mas intensa entre moleculas neutras. Entonces el $\\text{H}_2\\text{O}$ es un solido molecular con puentes de hidrogeno, porque el puente exige $\\text{H}$ unido a $\\text{F}$, $\\text{O}$ o $\\text{N}$." },
            { paso: "Analisis de puntos de fusion: $\\text{CrCl}_3$ (aprox. $1150\\ \\text{C}$) $> \\text{KCl}$ (aprox. $770\\ \\text{C}$) $> \\text{H}_2\\text{O}$ ($0\\ \\text{C}$) $> \\text{Cl}_2$ (aprox. $-101\\ \\text{C}$). El $\\text{Cr}^{3+}$ tiene mayor carga y menor radio que el $\\text{K}^+$, por lo que la energia reticular del $\\text{CrCl}_3$ es mayor. Entre los moleculares, el puente de hidrogeno del agua es mas fuerte que las fuerzas de London del $\\text{Cl}_2$.", porque: "Para ordenar los puntos de fusion comparamos dos casos. En los ionicos, la energia de red crece con la carga de los iones y disminuye con su radio: el $\\text{Cr}^{3+}$ tiene mayor carga y menor radio que el $\\text{K}^+$, por eso $\\text{CrCl}_3 > \\text{KCl}$. En los moleculares, el puente de hidrogeno del agua es mas fuerte que las fuerzas de London del $\\text{Cl}_2$, por eso $\\text{H}_2\\text{O} > \\text{Cl}_2$, aunque el $\\text{Cl}_2$ tenga mayor masa molar." }
          ],
          resultado: "Solidos ionicos: $\\text{CrCl}_3$ y $\\text{KCl}$ (ion-ion; $\\text{CrCl}_3$ con mayor punto de fusion). Solidos moleculares: $\\text{H}_2\\text{O}$ (puentes de hidrogeno) y $\\text{Cl}_2$ (London), con $\\text{Cl}_2$ el de menor punto de fusion."
        }
      ],
      errores_tipicos: [
        {
          error: "En el ion electron, multiplicar la semirreaccion del cloro por 2 en vez de 3, quedando 4 e- contra 6 e-.",
          como_evitar: "Igualar electrones: el cromo gana 6 e- por dicromato, asi que cada 2 Cl- se oxidan y el Cl2 va multiplicado por 3."
        },
        {
          error: "En b), multiplicar la masa por 0,80 y 0,75 en lugar de dividir, o aplicar solo uno de los dos factores.",
          como_evitar: "La masa a pesar es mayor que la teorica: m teorica / 0,80 / 0,75. Rendimiento y pureza siempre van dividiendo."
        },
        {
          error: "En d), tomar n(Cl2) igual a n(CrCl3) (relacion 1:1) y olvidar el factor 3/2 del cloro.",
          como_evitar: "Por cada 2 CrCl3 se forman 3 Cl2: n(Cl2) = 3/2 x n(CrCl3)."
        }
      ]
    },
    {
      num: 2,
      temas: ["termodinamica", "magnitudes", "liquidos"],
      enunciado: "Se queman completamente 700 moles de propano y 300 moles de butano. El 90% del calor total que produce la combustion se transfiere a 900 kg de agua que se halla a -5 C y permanece a 1 atm. Se pide: a) Escribir las ecuaciones termoquimicas para cada uno de los combustibles. b) Calcular el calor total generado en la combustion. c) Determinar la situacion final del agua (estados de agregacion y cantidad de fases) que se halla inicialmente como hielo y bosquejar la curva de calentamiento correspondiente al proceso, justificando su respuesta. Datos: DeltaH comb propano = -2220 kJ/mol; DeltaH comb butano = -2879,6 kJ/mol; DeltaH fusion agua = 6,03 kJ/mol; DeltaH vaporizacion agua = [ilegible: se lee '0,70 kJ/mol' cortado; se usa 40,7 kJ/mol]; Cp agua solida = 33,60 J/(mol.K); Cp agua liquida = 75,23 J/(mol.K); Cp agua vapor = 36,28 J/(mol.K).",
      resolucion: [
        {
          parte: "a)",
          pasos: [
            { paso: "Supuesto: la combustion es completa y el agua formada es liquida (es el estado que corresponde a los $\\Delta H$ dados).", porque: "Antes de escribir las ecuaciones fijamos el estado de los productos: la combustion completa produce $\\text{CO}_2(\\text{g})$ y agua, y los $\\Delta H$ tabulados ($-2220$ y $-2879{,}6\\ \\text{kJ/mol}$) corresponden a agua liquida. Si el agua fuera vapor, el $\\Delta H$ seria menos negativo, porque la vaporizacion absorbe calor. Conviene escribir este supuesto, porque cambia el valor de la entalpia." },
            { paso: "Propano: $$\\text{C}_3\\text{H}_8(\\text{g}) + 5\\,\\text{O}_2(\\text{g}) \\rightarrow 3\\,\\text{CO}_2(\\text{g}) + 4\\,\\text{H}_2\\text{O}(\\text{l}), \\quad \\Delta H = -2220\\ \\text{kJ}$$.", porque: "Ajustamos la ecuacion por conservacion de atomos, en este orden: primero los C ($3\\,\\text{CO}_2$), despues los H ($8\\ \\text{H}$ dan $4\\,\\text{H}_2\\text{O}$) y al final los O. Los O de los productos suman $10$, lo que da $5\\,\\text{O}_2$ en los reactivos. Como el $\\Delta H$ dado ($-2220\\ \\text{kJ/mol}$) corresponde a $1\\ \\text{mol}$ de propano, la ecuacion debe tener $1\\ \\text{mol}$ de $\\text{C}_3\\text{H}_8$. Error tipico: ajustar los O antes que los C y H." },
            { paso: "Butano: $$\\text{C}_4\\text{H}_{10}(\\text{g}) + \\frac{13}{2}\\,\\text{O}_2(\\text{g}) \\rightarrow 4\\,\\text{CO}_2(\\text{g}) + 5\\,\\text{H}_2\\text{O}(\\text{l}), \\quad \\Delta H = -2879{,}6\\ \\text{kJ}$$. (Doblando coeficientes: $2\\,\\text{C}_4\\text{H}_{10} + 13\\,\\text{O}_2 \\rightarrow 8\\,\\text{CO}_2 + 10\\,\\text{H}_2\\text{O}$.)", porque: "Como el $\\Delta H$ dado es por mol de butano, el coeficiente del $\\text{O}_2$ tiene que ser $\\frac{13}{2}$ para que la ecuacion tenga $1\\ \\text{mol}$ de $\\text{C}_4\\text{H}_{10}$: $4$ C dan $4\\,\\text{CO}_2$ y $10$ H dan $5\\,\\text{H}_2\\text{O}$. Entonces los O de los productos se reparten en $6{,}5\\,\\text{O}_2$. Si multiplicamos toda la ecuacion por $2$ se obtiene la misma reaccion, pero con el $\\Delta H$ doblado. Error tipico: dejar $13\\,\\text{O}_2$ para un mol de $\\text{C}_4\\text{H}_{10}$." }
          ],
          resultado: "$\\text{C}_3\\text{H}_8(\\text{g}) + 5\\,\\text{O}_2(\\text{g}) \\rightarrow 3\\,\\text{CO}_2(\\text{g}) + 4\\,\\text{H}_2\\text{O}(\\text{l})$, $\\Delta H = -2220\\ \\text{kJ/mol}$; $\\text{C}_4\\text{H}_{10}(\\text{g}) + 6{,}5\\,\\text{O}_2(\\text{g}) \\rightarrow 4\\,\\text{CO}_2(\\text{g}) + 5\\,\\text{H}_2\\text{O}(\\text{l})$, $\\Delta H = -2879{,}6\\ \\text{kJ/mol}$."
        },
        {
          parte: "b)",
          pasos: [
            { paso: "Propano: $$Q_1 = 700\\ \\text{mol} \\times 2220\\ \\text{kJ/mol} = 1\\,554\\,000\\ \\text{kJ}$$", porque: "Como el $\\Delta H$ es por mol de combustible, calculamos $Q_1 = 700\\ \\text{mol} \\times 2220\\ \\text{kJ/mol} = 1\\,554\\,000\\ \\text{kJ}$. Se usa el valor absoluto porque el signo negativo solo indica que el calor sale del sistema. Verificar que se usen $700\\ \\text{mol}$ de propano y no otra unidad." },
            { paso: "Butano: $$Q_2 = 300\\ \\text{mol} \\times 2879{,}6\\ \\text{kJ/mol} = 863\\,880\\ \\text{kJ}$$", porque: "Repetimos el mismo calculo para el butano con sus $300\\ \\text{mol}$. Usamos su propio $\\Delta H$ ($-2879{,}6\\ \\text{kJ/mol}$) y obtenemos $Q_2 = 300 \\times 2879{,}6 = 863\\,880\\ \\text{kJ}$. Cada combustible tiene su calor de combustion, por eso es un error frecuente usar el $\\Delta H$ del propano para el butano." },
            { paso: "Calor total = $Q_{\\text{total}} = 2\\,417\\,880\\ \\text{kJ}$. Calor transferido al agua ($90\\%$): $$Q_{\\text{agua}} = 0{,}90 \\times 2\\,417\\,880 = 2\\,176\\,092\\ \\text{kJ}$$", porque: "Sumamos los dos aportes porque ambos combustibles se queman en el mismo proceso: $1\\,554\\,000 + 863\\,880 = 2\\,417\\,880\\ \\text{kJ}$. El enunciado dice que solo el $90\\%$ del calor pasa al agua, asi que calculamos $0{,}90 \\times 2\\,417\\,880 = 2\\,176\\,092\\ \\text{kJ}$. Error tipico: aplicar el $90\\%$ a un solo combustible o olvidarlo." }
          ],
          resultado: "Calor total generado: $2{,}42 \\times 10^{6}\\ \\text{kJ}$. Calor transferido al agua: $2{,}18 \\times 10^{6}\\ \\text{kJ}$."
        },
        {
          parte: "c)",
          pasos: [
            { paso: "$$n(\\text{agua}) = \\frac{900\\,000\\ \\text{g}}{18{,}02\\ \\text{g/mol}} = 49\\,945\\ \\text{mol}$$", porque: "Los datos de la parte c estan por mol de agua ($C_p$ y $\\Delta H$), entonces convertimos la masa de agua a moles con $n = \\frac{m}{M}$. Pasamos $900\\ \\text{kg}$ a $900\\,000\\ \\text{g}$ y dividimos por $18{,}02\\ \\text{g/mol}$: $n = \\frac{900\\,000}{18{,}02} = 49\\,945\\ \\text{mol}$. Verificar la conversion de kg a g, que es un error frecuente." },
            { paso: "Calentar hielo de $-5$ a $0\\ \\text{C}$: $$Q_1 = 49\\,945 \\times 33{,}60 \\times 5 = 8{,}39 \\times 10^{3}\\ \\text{kJ}$$", porque: "Calculamos el calor que el hielo necesita para subir de $-5$ a $0\\ \\text{C}$ sin cambiar de fase, con $Q = n \\times C_p \\times \\Delta T$. Usamos el $C_p$ del solido ($33{,}60\\ \\text{J/(mol K)}$) y $\\Delta T = 5\\ \\text{K}$: $Q_1 = 49\\,945 \\times 33{,}60 \\times 5 = 8{,}39 \\times 10^{3}\\ \\text{kJ}$, pasando de J a kJ. Es el primer tramo obligatorio, porque el agua no puede fundir antes de llegar a 0 C." },
            { paso: "Fundir a $0\\ \\text{C}$: $$Q_2 = 49\\,945 \\times 6{,}03 = 301\\,168\\ \\text{kJ}$$", porque: "En la fusion la temperatura se mantiene en 0 C mientras el hielo pasa a liquido, asi que este calor no sube la temperatura sino que rompe la red cristalina. Por eso usamos $Q = n \\times \\Delta H_{\\text{fusion}}$, porque el dato esta dado por mol: $Q_2 = 49\\,945 \\times 6{,}03 = 301\\,168\\ \\text{kJ}$. Error comun: tratar este calor como calor sensible ($n \\times C_p \\times \\Delta T$)." },
            { paso: "Calentar liquido de $0$ a $100\\ \\text{C}$: $$Q_3 = 49\\,945 \\times 75{,}23 \\times 100 = 375\\,736\\ \\text{kJ}$$", porque: "Una vez que todo es liquido a 0 C, lo calentamos hasta 100 C a 1 atm con $Q = n \\times C_p(\\text{liquido}) \\times \\Delta T$, con $\\Delta T = 100\\ \\text{K}$. Usamos el $C_p$ del liquido ($75{,}23\\ \\text{J/(mol K)}$), no el del solido ni el del vapor: $Q_3 = 49\\,945 \\times 75{,}23 \\times 100 = 375\\,736\\ \\text{kJ}$. Verificar que la temperatura final sea $100\\ \\text{C}$, que es el limite antes de vaporizar." },
            { paso: "Suma de los pasos anteriores = $685\\,295\\ \\text{kJ}$. Queda disponible: $$2\\,176\\,092 - 685\\,295 = 1\\,490\\,797\\ \\text{kJ}$$", porque: "Sumamos los tres tramos previos (calentar el hielo, fundir y calentar el liquido) porque ocurren en orden y todos consumen calor del total disponible: $8{,}39 \\times 10^{3} + 301\\,168 + 375\\,736 = 685\\,295\\ \\text{kJ}$. Luego restamos esa suma a los $2\\,176\\,092\\ \\text{kJ}$ transferidos al agua, y el saldo $1\\,490\\,797\\ \\text{kJ}$ es la energia que queda para vaporizar. Error tipico: comparar el calor total directamente con el de vaporizacion sin descontar estos tramos." },
            { paso: "Vaporizar todo el agua requiere $$Q_{\\text{vap}} = 49\\,945 \\times 40{,}7 = 2\\,032\\,762\\ \\text{kJ}$$ asi que no alcanza para vaporizar todo.", porque: "Para vaporizar multiplicamos los moles de agua por el $\\Delta H$ de vaporizacion ($Q = n \\times \\Delta H_{\\text{vap}}$), a $100\\ \\text{C}$ y $1\\ \\text{atm}$: $49\\,945 \\times 40{,}7 = 2\\,032\\,762\\ \\text{kJ}$. Como el dato del enunciado no se lee bien, usamos $40{,}7\\ \\text{kJ/mol}$ (valor de tabla del agua) y conviene dejar escrita esa suposicion. El calculo usa todos los moles de agua, para saber si la energia alcanza o no para vaporizarla completa." },
            { paso: "Fraccion vaporizada = $$\\frac{1\\,490\\,797}{2\\,032\\,762} = 0{,}7334$$ Vapor = $0{,}7334 \\times 49\\,945 = 36\\,630\\ \\text{mol}$ (aprox. $660\\ \\text{kg}$). Liquido = $13\\,315\\ \\text{mol}$ (aprox. $240\\ \\text{kg}$).", porque: "Como la energia sobrante ($1\\,490\\,797\\ \\text{kJ}$) es menor que la necesaria para vaporizar todo ($2\\,032\\,762\\ \\text{kJ}$), la fraccion vaporizada es el cociente $\\frac{1\\,490\\,797}{2\\,032\\,762} = 0{,}7334$. Entonces el vapor es $0{,}7334 \\times 49\\,945 = 36\\,630\\ \\text{mol}$, y el resto queda liquido: $13\\,315\\ \\text{mol}$. El calor sobrante se usa solo para el cambio de fase y no para subir la temperatura. Por ultimo, $m = n \\times M$ con $M = 18{,}02\\ \\text{g/mol}$ pasa los moles de vapor y de liquido a kg." },
            { paso: "Como la temperatura queda en $100\\ \\text{C}$ con coexistencia de fases, no hace falta $C_p$ del vapor.", porque: "Como todavia hay liquido y vapor coexistiendo, la temperatura queda fija en $100\\ \\text{C}$ y el vapor no se calienta por encima de ese valor. Por eso el $C_p$ del vapor ($36{,}28\\ \\text{J/(mol K)}$) no se usa en ningun calculo. Es un dato de distraccion que conviene reconocer para no sumarlo por error." }
          ],
          resultado: "Final a $100\\ \\text{C}$ y $1\\ \\text{atm}$ con dos fases: liquido (aprox. $240\\ \\text{kg}$) y vapor (aprox. $660\\ \\text{kg}$). Curva: tramo de calentamiento del hielo, meseta de fusion, calentamiento del liquido, meseta de vaporizacion (incompleta)."
        }
      ],
      errores_tipicos: [
        {
          error: "Escribir las ecuaciones termoquimicas con DeltaH positivo, o ajustar mal el butano dejando 13 O2 en vez de 13/2 O2 para un mol de C4H10.",
          como_evitar: "La combustion es exotermica (DeltaH < 0). Con 1 mol de butano van 6,5 O2, o multiplicar toda la ecuacion por 2."
        },
        {
          error: "En b), olvidar el 90% del calor, o sumar mal el calor de cada combustible.",
          como_evitar: "Q total = 700 x 2220 + 300 x 2879,6 = 2 417 880 kJ; luego Q al agua = 0,90 x Q total."
        },
        {
          error: "En c), tratar el hielo como si estuviera a 0 C (no sumar el calentamiento de -5 a 0 C), o suponer que todo el agua se vaporiza sin verificarlo.",
          como_evitar: "Sumar en orden: calentar hielo, fundir, calentar liquido hasta 100 C, y recien despues comparar lo que queda con el calor de vaporizacion total."
        }
      ]
    },
    {
      num: 3,
      temas: ["soluciones", "acidobase"],
      enunciado: "a) Se mezclan 9 L de solucion acuosa de HCl 0,9 M con 12 L de solucion de hidroxido de bario 0,3 M. Escribir la ecuacion de la reaccion que tiene lugar y calcular el pH de la solucion obtenida explicitando el razonamiento utilizado. Considerar volumenes aditivos. b) A partir de los datos de los siguientes acidos debiles: Ka(HClO) = 10^-7; Ka(HF) = 10^-3; Ka(HCN) = 10^-9; escribir la ecuacion de disociacion del acido, indicar formula y nombre de sus bases conjugadas y ordenarlas de mayor a menor basicidad justificando su respuesta.",
      resolucion: [
        {
          parte: "a)",
          pasos: [
            { paso: "Reaccion: $$2\\,\\text{HCl}(\\text{ac}) + \\text{Ba}(\\text{OH})_2(\\text{ac}) \\rightarrow \\text{BaCl}_2(\\text{ac}) + 2\\,\\text{H}_2\\text{O}(\\text{l})$$ Neta: $\\text{H}^+ + \\text{OH}^- \\rightarrow \\text{H}_2\\text{O}$.", porque: "Identificamos una neutralizacion de acido fuerte ($\\text{HCl}$) con base fuerte ($\\text{Ba}(\\text{OH})_2$), que da sal y agua. Balanceamos con $2\\,\\text{HCl}$ por cada $\\text{Ba}(\\text{OH})_2$, para que haya $2\\,\\text{H}^+$ por cada $2\\,\\text{OH}^-$ y $2\\,\\text{Cl}^-$ por cada $\\text{Ba}^{2+}$. La ecuacion neta $\\text{H}^+ + \\text{OH}^- \\rightarrow \\text{H}_2\\text{O}$ es la que explica el pH. Error tipico: dejar el $\\text{HCl}$ sin el coeficiente $2$." },
            { paso: "$$n(\\text{H}^+) = 9\\ \\text{L} \\times 0{,}9\\ \\text{mol/L} = 8{,}1\\ \\text{mol}$$ $n(\\text{OH}^-) = 12\\ \\text{L} \\times 0{,}3\\ \\text{mol/L} \\times 2 = 7{,}2\\ \\text{mol}$ (cada $\\text{Ba}(\\text{OH})_2$ aporta $2\\,\\text{OH}^-$).", porque: "Como $\\text{HCl}$ y $\\text{Ba}(\\text{OH})_2$ son electrolitos fuertes, se disocian por completo: cada $\\text{HCl}$ aporta $1\\,\\text{H}^+$ y cada $\\text{Ba}(\\text{OH})_2$ aporta $2\\,\\text{OH}^-$. Calculamos $n = M \\times V$ con $V$ en litros: $n(\\text{H}^+) = 9\\ \\text{L} \\times 0{,}9\\ \\text{mol/L} = 8{,}1\\ \\text{mol}$ y $n(\\text{OH}^-) = 12\\ \\text{L} \\times 0{,}3\\ \\text{mol/L} \\times 2 = 7{,}2\\ \\text{mol}$. Error comun: olvidar el factor $2$ del hidroxido de bario." },
            { paso: "Sobra $\\text{H}^+$: $$8{,}1 - 7{,}2 = 0{,}9\\ \\text{mol}$$ Volumen final = $21\\ \\text{L}$ (aditivos).", porque: "$\\text{H}^+$ y $\\text{OH}^-$ reaccionan $1$ a $1$, asi que si hay mas $\\text{H}^+$ que $\\text{OH}^-$ queda $\\text{H}^+$ sin neutralizar. Entonces el exceso es $8{,}1 - 7{,}2 = 0{,}9\\ \\text{mol}$ de $\\text{H}^+$, y para la concentracion usamos el volumen total, $9\\ \\text{L} + 12\\ \\text{L} = 21\\ \\text{L}$, como indica el enunciado. Verificar cual ion esta en exceso antes de restar." },
            { paso: "$$[\\text{H}^+] = \\frac{0{,}9}{21} = 0{,}0429\\ \\text{mol/L}$$ $\\text{pH} = -\\log(0{,}0429) = 1{,}37$.", porque: "Con el exceso de $\\text{H}^+$ ($0{,}9\\ \\text{mol}$) y el volumen final de $21\\ \\text{L}$ obtenemos $[\\text{H}^+] = \\frac{0{,}9}{21} = 0{,}0429\\ \\text{M}$. Luego el pH es $-\\log[\\text{H}^+] = 1{,}37$, un valor acido, como corresponde a un exceso de acido. Error comun: usar el volumen parcial de $9\\ \\text{L}$." }
          ],
          resultado: "$\\text{pH} = 1{,}37$ (medio acido)."
        },
        {
          parte: "b)",
          pasos: [
            { paso: "$\\text{HClO}(\\text{ac}) \\rightleftharpoons \\text{H}^+ + \\text{ClO}^-$. Base conjugada: $\\text{ClO}^-$ (ion hipoclorito).", porque: "Segun Bronsted-Lowry un acido es dador de $\\text{H}^+$, y su base conjugada es la especie que queda al perderlo. Escribimos $\\text{HClO} \\rightleftharpoons \\text{H}^+ + \\text{ClO}^-$, asi que la base conjugada es $\\text{ClO}^-$ (ion hipoclorito) y su carga es $-1$. Escribir la disociacion ayuda a ver la carga de la base conjugada." },
            { paso: "$\\text{HF}(\\text{ac}) \\rightleftharpoons \\text{H}^+ + \\text{F}^-$. Base conjugada: $\\text{F}^-$ (ion fluoruro).", porque: "Aplicamos el mismo criterio de Bronsted-Lowry: el $\\text{HF}$ pierde su $\\text{H}^+$ y la especie resultante es el $\\text{F}^-$ (ion fluoruro). Como el acido es neutro, la base queda con carga $-1$, lo que confirma la carga del paso anterior. Con esto identificamos la base conjugada del $\\text{HF}$ antes de ordenarlas." },
            { paso: "$\\text{HCN}(\\text{ac}) \\rightleftharpoons \\text{H}^+ + \\text{CN}^-$. Base conjugada: $\\text{CN}^-$ (ion cianuro).", porque: "Aplicamos el mismo criterio: el $\\text{HCN}$ pierde su $\\text{H}^+$ y queda $\\text{CN}^-$ (ion cianuro), con carga $-1$ porque el acido era neutro. Con las tres bases conjugadas identificadas ($\\text{ClO}^-$, $\\text{F}^-$ y $\\text{CN}^-$), podemos pasar a comparar su basicidad." },
            { paso: "$K_b = \\frac{K_w}{K_a}$: $K_b(\\text{CN}^-) = 10^{-5}$; $K_b(\\text{ClO}^-) = 10^{-7}$; $K_b(\\text{F}^-) = 10^{-11}$.", porque: "Para comparar la basicidad usamos $K_b$, que se obtiene de $K_a$ con $K_a \\times K_b = K_w$ a $25\\ \\text{C}$, es decir $K_b = \\frac{K_w}{K_a}$. Calculamos $K_b(\\text{CN}^-) = \\frac{10^{-14}}{10^{-9}} = 10^{-5}$, $K_b(\\text{ClO}^-) = 10^{-7}$ y $K_b(\\text{F}^-) = 10^{-11}$. Error comun: usar $K_a$ en lugar de $K_b$ para las bases." },
            { paso: "Orden de basicidad: $\\text{CN}^- > \\text{ClO}^- > \\text{F}^-$. Cuanto mas fuerte es el acido, mas debil es su base conjugada ($\\text{HF}$ es el acido mas fuerte y $\\text{F}^-$ la base mas debil).", porque: "Como $K_b = \\frac{K_w}{K_a}$ es inversa a $K_a$, un acido mas debil ($K_a$ chica) tiene una base conjugada mas fuerte ($K_b$ grande). Con los $K_b$ calculados ($10^{-5}$, $10^{-7}$ y $10^{-11}$) el orden de mayor a menor basicidad queda $\\text{CN}^- > \\text{ClO}^- > \\text{F}^-$. Verificar el sentido: $\\text{HF}$ es el acido mas fuerte ($K_a = 10^{-3}$), y $\\text{F}^-$ la base mas debil." }
          ],
          resultado: "Mayor a menor basicidad: $\\text{CN}^-$ (cianuro) $> \\text{ClO}^-$ (hipoclorito) $> \\text{F}^-$ (fluoruro)."
        }
      ],
      errores_tipicos: [
        {
          error: "Olvidar que Ba(OH)2 aporta 2 OH- por mol y tomar 3,6 mol de OH-, dando un exceso de H+ de 4,5 mol.",
          como_evitar: "Ba(OH)2 -> Ba(2+) + 2 OH-: 3,6 mol de Ba(OH)2 dan 7,2 mol de OH-. Exceso de H+ = 8,1 - 7,2 = 0,9 mol."
        },
        {
          error: "Calcular el pH con los moles de H+ en exceso sin dividir por el volumen total (21 L), o usando solo 9 L.",
          como_evitar: "Volumen final = 9 + 12 = 21 L; [H+] = 0,9 mol / 21 L = 0,043 M; pH = 1,37."
        },
        {
          error: "En b), usar Kb = Ka para las bases conjugadas, o ordenar las bases al reves (F- como la mas basica).",
          como_evitar: "Kb = Kw/Ka. El acido mas fuerte (HF, Ka = 10^-3) tiene la base conjugada mas debil (F-)."
        }
      ]
    }
  ]
});

// ============ EXAMEN B: IMG-20260331-WA0026 ============
// Encabezado: "2 Recuperatorio Quimica Basica-CB040 - 6/12/2024".
// Grilla de correccion (foto): Ej1 (30 pts) a=10 b=12 c=8 | Ej2 (30 pts) a=6 b=12 c=12 | Ej3 (40 pts) a=8 b=10 c=10 d=12 | Total 100.
window.PARCIALES.push({
  id: "2do-2024-12-06",
  tipo: "2do recuperatorio",
  fecha: "06/12/2024",
  fuente: "parciales/IMG-20260331-WA0026.jpg",
  ejercicios: [
    {
      num: 1,
      temas: ["liquidos", "uniones"],
      enunciado: "a) Indicar si la siguiente sentencia es verdadera o falsa justificando su respuesta: Un solido que cristaliza en el sistema cubico centrado en el cuerpo tiene el triple de particulas por celda unitaria que uno que es cubico simple y un tercio de uno que cristaliza en el sistema cubico centrado en caras. b) Escriba la estructura de Lewis e indique el tipo de fuerza intermolecular dominante que se presenta en cada una de las siguientes sustancias: metano, agua y cloruro de hidrogeno, y a continuacion ordene esas sustancias de acuerdo a la intensidad de la fuerza dominante en sentido creciente. Defina punto de ebullicion normal y presion de vapor de una sustancia y estime cual de las sustancias anteriores tiene el valor mas alto de cada propiedad, justificandose cuando corresponda. c) Cual es la presion maxima a que puede sublimar un solido? (sugerencia: muestrala en un diagrama de fases).",
      resolucion: [
        {
          parte: "a)",
          pasos: [
            { paso: "Celdas: cubica simple = $1$ particula por celda; cubica centrada en el cuerpo (BCC) = $2$; cubica centrada en caras (FCC) = $4$.", porque: "Contamos los atomos que pertenecen a la celda: cada atomo de vertice es compartido por $8$ celdas y aporta $\\frac{1}{8}$, cada atomo de cara es compartido por $2$ y aporta $\\frac{1}{2}$, y el atomo del centro aporta $1$ completo. Asi, la cubica simple tiene $1$, la BCC $2$ y la FCC $4$. Error comun: contar todos los atomos que se ven sin dividir por los compartidos." },
            { paso: "$\\text{BCC} = 2$ = el doble de la simple (no el triple).", porque: "Calculamos el cociente $\\frac{\\text{BCC}}{\\text{cubica simple}} = \\frac{2}{1} = 2$, no $3$, para la primera parte de la sentencia. Por eso la afirmacion del triple es falsa, aunque la BCC tenga mas particulas. Verificar siempre el cociente y no solo si una cantidad es mayor que la otra." },
            { paso: "Un tercio de FCC = $\\frac{4}{3} = 1{,}33$, que tampoco es $2$.", porque: "Esta comparacion verifica la segunda parte: ponemos la BCC ($2$) frente a un tercio de la FCC, $\\frac{4}{3} = 1{,}33$, y vemos si coinciden. Como no coinciden, la sentencia es falsa aunque la primera parte se cumpla. Conviene chequear cada parte de una afirmacion por separado." }
          ],
          resultado: "Falsa: la BCC tiene el doble de particulas que la cubica simple, no el triple, y $2$ no es un tercio de $4$."
        },
        {
          parte: "b)",
          pasos: [
            { paso: "Lewis: $\\text{CH}_4$: C central con $4$ enlaces simples a H. $\\text{H}_2\\text{O}$: O con $2$ enlaces O-H y $2$ pares libres. $\\text{HCl}$: H-Cl simple, Cl con $3$ pares libres.", porque: "Dibujamos la estructura de Lewis contando electrones de valencia: $\\text{CH}_4$ con $4$ enlaces simples, $\\text{H}_2\\text{O}$ con $2$ enlaces y $2$ pares libres en el O, y $\\text{HCl}$ con un enlace y $3$ pares libres en el Cl. Con los pares libres y los enlaces deducimos la geometria y si la molecula es polar, datos necesarios para la fuerza intermolecular. Verificar que cada atomo cumpla el octeto (o el dueto en H)." },
            { paso: "Fuerza dominante: $\\text{CH}_4$ = London (dispersion). $\\text{HCl}$ = dipolo-dipolo (y London). $\\text{H}_2\\text{O}$ = puentes de hidrogeno.", porque: "El $\\text{CH}_4$ es apolar por su geometria tetraedrica simetrica, asi que solo presenta fuerzas de London. El $\\text{HCl}$ es polar, pero su $\\text{H}$ esta unido a $\\text{Cl}$, que no es $\\text{F}$, $\\text{O}$ ni $\\text{N}$, por eso la fuerza dominante es dipolo-dipolo. Entonces el $\\text{H}_2\\text{O}$, con $\\text{H}$ unido a $\\text{O}$, forma puentes de hidrogeno, la mas intensa de las tres." },
            { paso: "Orden creciente de intensidad: $\\text{CH}_4 < \\text{HCl} < \\text{H}_2\\text{O}$.", porque: "Ordenamos por intensidad: puente de hidrogeno > dipolo-dipolo > London. Leido de menor a mayor, el orden es $\\text{CH}_4$ (London) $< \\text{HCl}$ (dipolo-dipolo) $< \\text{H}_2\\text{O}$ (puente de hidrogeno). El criterio es el tipo de fuerza dominante, no la masa molar." },
            { paso: "Punto de ebullicion normal: temperatura a la que la presion de vapor del liquido iguala $1\\ \\text{atm}$. Presion de vapor: presion del vapor en equilibrio con el liquido a una temperatura dada.", porque: "Definimos el punto de ebullicion normal como la temperatura a la que la presion de vapor del liquido iguala $1\\ \\text{atm}$. La presion de vapor es la que ejerce el vapor en equilibrio con su liquido a una temperatura dada. Como la presion de vapor depende de la temperatura, siempre se compara a igual $T$." },
            { paso: "Mayor punto de ebullicion: $\\text{H}_2\\text{O}$ (puentes de hidrogeno, aprox. $100\\ \\text{C}$ frente a $-85\\ \\text{C}$ del $\\text{HCl}$ y $-162\\ \\text{C}$ del $\\text{CH}_4$). Mayor presion de vapor a igual temperatura: $\\text{CH}_4$, por tener las fuerzas intermoleculares mas debiles.", porque: "Cuanto mas intensas son las fuerzas intermoleculares, mas energia se necesita para separar las moleculas y pasarlas al gas: por eso el $\\text{H}_2\\text{O}$, con puentes de hidrogeno, tiene el punto de ebullicion mas alto (aprox. $100\\ \\text{C}$ frente a $-85\\ \\text{C}$ del $\\text{HCl}$ y $-162\\ \\text{C}$ del $\\text{CH}_4$). Con fuerzas mas debiles, como las de London del $\\text{CH}_4$, las moleculas escapan mas facilmente, y por eso el $\\text{CH}_4$ tiene la mayor presion de vapor a igual temperatura. Error comun: invertir la relacion entre fuerza y presion de vapor." }
          ],
          resultado: "Dominantes: $\\text{CH}_4$ London; $\\text{HCl}$ dipolo-dipolo; $\\text{H}_2\\text{O}$ puentes de hidrogeno. Orden creciente: $\\text{CH}_4 < \\text{HCl} < \\text{H}_2\\text{O}$. Mayor punto de ebullicion: $\\text{H}_2\\text{O}$. Mayor presion de vapor: $\\text{CH}_4$."
        },
        {
          parte: "c)",
          pasos: [
            { paso: "La sublimacion ocurre a presiones por debajo de la del punto triple. Por encima, el solido funde o pasa a liquido antes de sublimar.", porque: "El punto triple es la unica combinacion de $P$ y $T$ donde coexisten solido, liquido y vapor. Si la presion esta por debajo de la del punto triple, el liquido no puede existir a ninguna temperatura y el solido pasa directo a vapor: eso es la sublimacion. Por eso la sublimacion se analiza a presiones menores que la del punto triple." },
            { paso: "En el diagrama de fases, la sublimacion ocurre en la rama solido-vapor, que termina en el punto triple.", porque: "En el diagrama de fases, la curva solido-vapor marca las condiciones de sublimacion y llega hasta el punto triple, donde se une con las otras dos curvas. Como la curva termina ahi, la presion mas alta a la que el solido puede sublimar es la presion del punto triple. Conviene verificarlo mirando el extremo de la curva en el diagrama." }
          ],
          resultado: "La presion maxima de sublimacion es la presion del punto triple."
        }
      ],
      errores_tipicos: [
        {
          error: "Contar mal los atomos por celda (por ejemplo, 2 para la cubica simple o 4 para la BCC) y concluir que la sentencia es verdadera.",
          como_evitar: "Cubica simple = 1, BCC = 2, FCC = 4. Con esos valores la afirmacion es falsa."
        },
        {
          error: "En b), clasificar el HCl con puente de hidrogeno porque tiene H.",
          como_evitar: "Puente de hidrogeno solo con H unido a F, O o N. El HCl tiene dipolo-dipolo."
        },
        {
          error: "En c), decir que la presion maxima de sublimacion es 1 atm o la presion de ebullicion.",
          como_evitar: "Mirar el diagrama de fases: la sublimacion ocurre por debajo de la presion del punto triple."
        }
      ]
    },
    {
      num: 2,
      temas: ["termodinamica", "liquidos"],
      enunciado: "La reaccion en fase gaseosa CO(g) + H2O(g) -> CO2(g) + H2(g) se efectua a temperatura constante y presion constante de 1 atm. Cuando se forman 200 moles de hidrogeno gaseoso el calor liberado es 8232 kJ. Se pide: a) Escribir la ecuacion termoquimica correspondiente. b) Con los datos de que dispone, determinar la entalpia de combustion estandar del monoxido de carbono y escribir su ecuacion termoquimica. c) Calcular los kilos de vapores de etanol a 78 C (punto de ebullicion del etanol) y 1 atm que se pueden obtener si se logra transferir el 70% del calor producido por la reaccion del enunciado a etanol liquido que se halla a 25 C y 1 atm. Datos: DeltaHf(H2O,g) = -241,82 kJ/mol; DeltaHf(CO2,g) = -393,51 kJ/mol; DeltaHvap(C2H6O) = 43,5 kJ/mol; Cp C2H6O(l) = 0,112 kJ/(mol.C).",
      resolucion: [
        {
          parte: "a)",
          pasos: [
            { paso: "Calor liberado por mol de $\\text{H}_2$: $$\\frac{8232\\ \\text{kJ}}{200\\ \\text{mol}} = 41{,}16\\ \\text{kJ/mol}$$ Como el calor sale del sistema, $\\Delta H < 0$.", porque: "Si el sistema libera calor, el $\\Delta H$ de la reaccion es negativo por convencion (proceso exotermico). El dato corresponde a $200\\ \\text{mol}$ de $\\text{H}_2$, asi que dividimos: $\\frac{8232}{200} = 41{,}16\\ \\text{kJ/mol}$, con signo negativo. Error tipico: dejar el signo positivo al pasar el calor liberado." },
            { paso: "Ecuacion: $$\\text{CO}(\\text{g}) + \\text{H}_2\\text{O}(\\text{g}) \\rightarrow \\text{CO}_2(\\text{g}) + \\text{H}_2(\\text{g}), \\quad \\Delta H = -41{,}16\\ \\text{kJ}$$ (por mol de $\\text{H}_2$ formado).", porque: "Como los coeficientes son $1$ para todas las especies, el $\\Delta H$ de la ecuacion escrita corresponde a formar $1\\ \\text{mol}$ de $\\text{H}_2$ y $1\\ \\text{mol}$ de $\\text{CO}_2$. Por eso usamos directamente el valor de $-41{,}16\\ \\text{kJ}$ de la etapa anterior. Verificar que no haya coeficientes que cambien ese $\\Delta H$." },
            { paso: "Control: $\\Delta H = \\Delta H_f(\\text{CO}_2) - \\Delta H_f(\\text{CO}) - \\Delta H_f(\\text{H}_2\\text{O})$ da $\\Delta H_f(\\text{CO}) = -110{,}53\\ \\text{kJ/mol}$, valor coherente con la tabla.", porque: "Usamos la forma de Hess con entalpias de formacion: $\\Delta H$ = suma de $\\Delta H_f$ de productos menos suma de $\\Delta H_f$ de reactivos. Aqui sirve de control: $\\Delta H = \\Delta H_f(\\text{CO}_2) - \\Delta H_f(\\text{CO}) - \\Delta H_f(\\text{H}_2\\text{O}) = -41{,}16$ da $\\Delta H_f(\\text{CO}) = -110{,}53\\ \\text{kJ/mol}$, valor coherente con la tabla. Error comun: invertir la resta." }
          ],
          resultado: "$\\text{CO}(\\text{g}) + \\text{H}_2\\text{O}(\\text{g}) \\rightarrow \\text{CO}_2(\\text{g}) + \\text{H}_2(\\text{g})$, $\\Delta H = -41{,}16\\ \\text{kJ}$."
        },
        {
          parte: "b)",
          pasos: [
            { paso: "Reaccion de combustion: $$\\text{CO}(\\text{g}) + \\frac{1}{2}\\,\\text{O}_2(\\text{g}) \\rightarrow \\text{CO}_2(\\text{g})$$.", porque: "La combustion es la reaccion del compuesto con $\\text{O}_2$ para dar $\\text{CO}_2$. La entalpia de combustion estandar se define para $1\\ \\text{mol}$ del combustible, por eso escribimos $\\text{CO} + \\frac{1}{2}\\,\\text{O}_2 \\rightarrow \\text{CO}_2$, con media mol de $\\text{O}_2$ para balancear el oxigeno. Verificar que el coeficiente del $\\text{O}_2$ sea fraccionario y no se multiplique la ecuacion." },
            { paso: "Hess: $(\\text{CO} + \\text{H}_2\\text{O} \\rightarrow \\text{CO}_2 + \\text{H}_2,\\ \\Delta H = -41{,}16)$ + $(\\text{H}_2 + \\frac{1}{2}\\,\\text{O}_2 \\rightarrow \\text{H}_2\\text{O}(\\text{g}),\\ \\Delta H = -241{,}82)$ = $$\\text{CO} + \\frac{1}{2}\\,\\text{O}_2 \\rightarrow \\text{CO}_2,\\ \\Delta H = -282{,}98\\ \\text{kJ}$$", porque: "La ley de Hess dice que, si una reaccion se obtiene sumando otras, su $\\Delta H$ es la suma de los $\\Delta H$ de esas etapas. Sumamos la reaccion del punto a) con la formacion del agua: $-41{,}16 + (-241{,}82) = -282{,}98\\ \\text{kJ}$, y al hacerlo se cancelan $\\text{H}_2$ y $\\text{H}_2\\text{O}(\\text{g})$. Para que esto funcione, las ecuaciones deben sumarse exactamente." },
            { paso: "Control: $$\\Delta H_c = \\Delta H_f(\\text{CO}_2) - \\Delta H_f(\\text{CO}) = -393{,}51 - (-110{,}53) = -282{,}98\\ \\text{kJ/mol}$$", porque: "Como el $\\text{O}_2$ tiene $\\Delta H_f = 0$ (es un elemento en su forma estable), la combustion se calcula solo con $\\Delta H_f(\\text{CO}_2)$ menos $\\Delta H_f(\\text{CO})$. Con $-393{,}51$ y $-110{,}53$ obtenemos $-393{,}51 - (-110{,}53) = -282{,}98\\ \\text{kJ/mol}$, el mismo valor que por Hess, lo que confirma el resultado. Error comun: incluir el $\\text{O}_2$ en la cuenta o invertir la resta." }
          ],
          resultado: "$\\text{CO}(\\text{g}) + \\frac{1}{2}\\,\\text{O}_2(\\text{g}) \\rightarrow \\text{CO}_2(\\text{g})$, $\\Delta H_c = -282{,}98\\ \\text{kJ/mol}$ (aprox. $-283{,}0\\ \\text{kJ/mol}$)."
        },
        {
          parte: "c)",
          pasos: [
            { paso: "Calor transferido: $$Q = 0{,}70 \\times 8232\\ \\text{kJ} = 5762{,}4\\ \\text{kJ}$$", porque: "El enunciado indica que solo el $70\\%$ del calor de la reaccion pasa al etanol, asi que multiplicamos $8232\\ \\text{kJ}$ por $0{,}70$: $Q = 5762{,}4\\ \\text{kJ}$. Es el calor realmente disponible para calentar y vaporizar el etanol. Verificar el porcentaje antes de seguir, porque es facil olvidarlo." },
            { paso: "Por mol de etanol: calentar de $25$ a $78\\ \\text{C}$: $$0{,}112\\ \\text{kJ/(mol C)} \\times 53\\ \\text{C} = 5{,}936\\ \\text{kJ/mol}$$ Vaporizar a $78\\ \\text{C}$: $43{,}5\\ \\text{kJ/mol}$. Total: $49{,}436\\ \\text{kJ/mol}$.", porque: "Para llevar cada mol de etanol de $25\\ \\text{C}$ a vapor a $78\\ \\text{C}$ sumamos dos etapas: calentar el liquido con $Q = n \\times C_p \\times \\Delta T$, con $C_p = 0{,}112\\ \\text{kJ/(mol C)}$ y $\\Delta T = 53\\ \\text{C}$ ($0{,}112 \\times 53 = 5{,}936\\ \\text{kJ/mol}$), y vaporizar con $\\Delta H_{\\text{vap}} = 43{,}5\\ \\text{kJ/mol}$. Entonces el total es $49{,}436\\ \\text{kJ/mol}$. La vaporizacion ocurre a $78\\ \\text{C}$, que es el punto de ebullicion normal, asi que no hace falta otra etapa. Error comun: omitir el calentamiento." },
            { paso: "$$n(\\text{etanol}) = \\frac{5762{,}4}{49{,}436} = 116{,}56\\ \\text{mol}$$", porque: "Dividimos el calor disponible entre el calor necesario por mol para saber cuantos moles de etanol se pueden calentar y vaporizar: $n = \\frac{Q}{q} = \\frac{5762{,}4}{49{,}436} = 116{,}56\\ \\text{mol}$. Es una division porque a mayor calor por mol, menos moles. Verificar que las unidades den $\\text{mol}$: $\\text{kJ}$ entre $\\text{kJ/mol}$." },
            { paso: "$M(\\text{C}_2\\text{H}_6\\text{O}) = 46{,}07\\ \\text{g/mol}$. $$m = 116{,}56 \\times 46{,}07 = 5370\\ \\text{g}$$", porque: "Multiplicamos los moles de etanol por la masa molar del $\\text{C}_2\\text{H}_6\\text{O}$ ($46{,}07\\ \\text{g/mol}$, suma de $2$ C, $6$ H y $1$ O): $m = 116{,}56 \\times 46{,}07 = 5370\\ \\text{g}$. Al final dividimos por $1000$ para pasar de g a kg, con lo que queda $5{,}37\\ \\text{kg}$. Verificar que la masa molar corresponda al etanol." },
            { paso: "Supuesto: el calor de la reaccion del enunciado es $8232\\ \\text{kJ}$ (el dato de $200\\ \\text{mol}$ de $\\text{H}_2$).", porque: "El enunciado da $8232\\ \\text{kJ}$ para la formacion de $200\\ \\text{mol}$ de $\\text{H}_2$ y no da otra cantidad, por eso tomamos ese calor como el total disponible. Es un supuesto de lectura del problema y conviene escribirlo, porque cambiaria si la reaccion se hiciera a otra escala. Verificar que el dato usado coincida con el del enunciado." }
          ],
          resultado: "Aprox. $5{,}37\\ \\text{kg}$ de vapor de etanol a $78\\ \\text{C}$ y $1\\ \\text{atm}$."
        }
      ],
      errores_tipicos: [
        {
          error: "Dejar DeltaH positivo en la ecuacion, al pasar 8232 kJ de calor liberado.",
          como_evitar: "Calor liberado implica DeltaH negativo. Por mol de H2: -8232/200 = -41,16 kJ/mol."
        },
        {
          error: "En b), usar el DeltaH de la reaccion del enunciado como si fuera la combustion del CO, sin combinar con la formacion del agua y sin el 1/2 O2.",
          como_evitar: "Por Hess: DeltaHc(CO) = -41,16 + (-241,82) = -282,98 kJ/mol, para CO + 1/2 O2 -> CO2."
        },
        {
          error: "En c), usar 8232 kJ sin aplicar el 70%, u olvidar calentar el etanol de 25 a 78 C (solo sumar la vaporizacion).",
          como_evitar: "Q = 0,70 x 8232 = 5762,4 kJ; por mol: 0,112 x 53 + 43,5 = 49,44 kJ/mol. Son dos etapas, calentamiento mas vaporizacion."
        }
      ]
    },
    {
      num: 3,
      temas: ["soluciones", "acidobase", "reacciones"],
      enunciado: "El laboratorio de control de una industria alimenticia debe verificar la calidad de un vinagre de cocina cuya etiqueta indica que posee un 5% m/V de acido acetico (acido etanoico). Para ello se toman 3 mL de una muestra de vinagre, se le agrega un poco de agua destilada y unas gotas de fenolftaleina y se titula con una solucion de hidroxido de sodio 0,1250 M, consumiendo 17,85 mL de la solucion de hidroxido de sodio hasta el viraje del indicador. a) Escriba la reaccion de neutralizacion y nombre todos los reactivos y productos involucrados. Indique cual es el color de la fenolftaleina antes y despues del punto de equivalencia. b) Indique si el vinagre ensayado cumple con las condiciones de calidad para ser puesto a la venta. Realice los calculos pertinentes para justificar su respuesta. c) Si se reemplaza el titulante por hidroxido de calcio de igual concentracion molar, cuantos mililitros gastaria para titular una muestra de 5 mL de vinagre? Escriba la reaccion de neutralizacion y justifique su respuesta. d) Calcule el pH inicial del vinagre antes de realizar la titulacion. Realice los balances de carga y de masa y justifique las suposiciones que hizo al realizar los calculos. Dato: Ka = 1,8 x 10^-5.",
      resolucion: [
        {
          parte: "a)",
          pasos: [
            { paso: "Reaccion: $$\\text{CH}_3\\text{COOH}(\\text{ac}) + \\text{NaOH}(\\text{ac}) \\rightarrow \\text{CH}_3\\text{COONa}(\\text{ac}) + \\text{H}_2\\text{O}(\\text{l})$$.", porque: "Identificamos la reaccion: un acido debil ($\\text{CH}_3\\text{COOH}$) con una base fuerte ($\\text{NaOH}$) da la sal del acido y agua. La relacion es $1:1$ porque el acido tiene un solo H ionizable y el $\\text{NaOH}$ aporta un $\\text{OH}^-$, asi que escribimos $\\text{CH}_3\\text{COOH} + \\text{NaOH} \\rightarrow \\text{CH}_3\\text{COONa} + \\text{H}_2\\text{O}$. Error comun: tratar el acido acetico como si fuera fuerte." },
            { paso: "Reactivos: acido acetico (acido etanoico) e hidroxido de sodio. Productos: acetato de sodio (etanoato de sodio) y agua.", porque: "Nombramos todos los reactivos y productos porque el enunciado lo pide. Los nombres sistematicos son acido etanoico (reactivo) y etanoato de sodio (producto), y los usuales son acido acetico y acetato de sodio. Conviene escribir ambos para que la respuesta quede completa." },
            { paso: "Fenolftaleina: incolora antes del punto de equivalencia (medio acido) y rosa despues (medio basico, $\\text{pH}$ mayor a aprox. $8{,}2$).", porque: "La fenolftaleina es un indicador que vira por encima de $\\text{pH}$ aprox. $8{,}2$. Antes del punto de equivalencia la solucion es acida, por debajo de ese valor, asi que queda incolora. Despues del PE hay exceso de base y el $\\text{pH}$ supera $8{,}2$, por eso se vuelve rosa." }
          ],
          resultado: "$\\text{CH}_3\\text{COOH} + \\text{NaOH} \\rightarrow \\text{CH}_3\\text{COONa} + \\text{H}_2\\text{O}$. Fenolftaleina: incolora antes del PE, rosa despues."
        },
        {
          parte: "b)",
          pasos: [
            { paso: "$$n(\\text{NaOH}) = 0{,}1250\\ \\text{mol/L} \\times 0{,}01785\\ \\text{L} = 2{,}231 \\times 10^{-3}\\ \\text{mol}$$ Relacion $1:1$, luego $n(\\text{acido}) = 2{,}231 \\times 10^{-3}\\ \\text{mol}$ en $3\\ \\text{mL}$.", porque: "Como la reaccion es $1:1$, los moles de $\\text{NaOH}$ gastados hasta el viraje son exactamente los moles de acido de la muestra. Calculamos $n = M \\times V$ con $0{,}01785\\ \\text{L}$ de titulante: $n(\\text{NaOH}) = 0{,}1250 \\times 0{,}01785 = 2{,}231 \\times 10^{-3}\\ \\text{mol}$. Error comun: usar los mL sin pasarlos a litros." },
            { paso: "$$[\\text{acido}] = \\frac{2{,}231 \\times 10^{-3}}{0{,}003\\ \\text{L}} = 0{,}744\\ \\text{mol/L}$$", porque: "La concentracion del vinagre es moles de acido dividido el volumen de la muestra analizada: $C = \\frac{2{,}231 \\times 10^{-3}\\ \\text{mol}}{0{,}003\\ \\text{L}} = 0{,}744\\ \\text{mol/L}$. Usamos los $3\\ \\text{mL}$ de muestra, no el volumen del titulante, que son distintos. Error comun: dividir por los $17{,}85\\ \\text{mL}$." },
            { paso: "$\\% \\text{m/V}$: $$0{,}744 \\times 60{,}05\\ \\text{g/L} = 44{,}7\\ \\text{g/L} = 4{,}47\\ \\% \\text{m/V}$$", porque: "La etiqueta usa $\\% \\text{m/V}$ (gramos de soluto cada $100\\ \\text{mL}$), asi que pasamos la molaridad a gramos por litro: $0{,}744\\ \\text{mol/L} \\times 60{,}05\\ \\text{g/mol} = 44{,}7\\ \\text{g/L}$. Como $44{,}7\\ \\text{g/L}$ equivale a $4{,}47\\ \\text{g}$ cada $100\\ \\text{mL}$, el resultado es $4{,}47\\ \\% \\text{m/V}$. Verificar la conversion de L a mL." },
            { paso: "Comparacion: la etiqueta declara $5\\%$ m/V, el valor medido es $4{,}47\\%$ m/V (aprox. $10\\%$ menos). No cumple con lo declarado.", porque: "Para decidir si el vinagre cumple, comparamos el valor medido con el declarado en la etiqueta: $4{,}47\\%$ frente a $5\\%$ m/V. Como el valor medido es menor (aprox. $10\\%$ menos), el vinagre no cumple con lo declarado, que es la conclusion que pide la parte b)." },
            { paso: "Nota: si el criterio fuera el minimo legal de $4\\%$ m/V (a verificar en el Codigo Alimentario Argentino), cumpliria.", porque: "El enunciado no define un minimo legal, asi que la conclusion depende del criterio elegido: contra la etiqueta de $5\\%$ m/V no cumple, y contra un minimo de $4\\%$ m/V cumpliria. Ese minimo es un dato externo que debemos confirmar en el Codigo Alimentario Argentino antes de dar una conclusion definitiva." }
          ],
          resultado: "$4{,}47\\%$ m/V ($0{,}744\\ \\text{M}$). No cumple con el $5\\%$ declarado en la etiqueta."
        },
        {
          parte: "c)",
          pasos: [
            { paso: "Reaccion: $$2\\,\\text{CH}_3\\text{COOH}(\\text{ac}) + \\text{Ca}(\\text{OH})_2(\\text{ac}) \\rightarrow (\\text{CH}_3\\text{COO})_2\\text{Ca}(\\text{ac}) + 2\\,\\text{H}_2\\text{O}(\\text{l})$$.", porque: "El $\\text{Ca}(\\text{OH})_2$ se disocia en $\\text{Ca}^{2+}$ y $2\\,\\text{OH}^-$, asi que cada mol de base neutraliza $2\\ \\text{mol}$ de acido. Por eso la ecuacion $2\\,\\text{CH}_3\\text{COOH} + \\text{Ca}(\\text{OH})_2 \\rightarrow (\\text{CH}_3\\text{COO})_2\\text{Ca} + 2\\,\\text{H}_2\\text{O}$ refleja la relacion $2:1$ con el acido acetico. Error comun: usar la relacion $1:1$ que corresponde al $\\text{NaOH}$." },
            { paso: "$$n(\\text{acido})\\ \\text{en}\\ 5\\ \\text{mL} = 0{,}744\\ \\text{mol/L} \\times 0{,}005\\ \\text{L} = 3{,}719 \\times 10^{-3}\\ \\text{mol}$$", porque: "Usamos la concentracion de b) ($0{,}744\\ \\text{M}$) y el volumen de muestra de $5\\ \\text{mL}$ para obtener los moles de acido: $n = M \\times V = 0{,}744 \\times 0{,}005 = 3{,}719 \\times 10^{-3}\\ \\text{mol}$. Verificar que el volumen este en litros, porque la molaridad se usa con L." },
            { paso: "$$n(\\text{Ca}(\\text{OH})_2) = \\frac{n(\\text{acido})}{2} = 1{,}859 \\times 10^{-3}\\ \\text{mol}$$ (el $\\text{Ca}(\\text{OH})_2$ aporta $2\\,\\text{OH}^-$).", porque: "Con la relacion $2:1$ del acido respecto del $\\text{Ca}(\\text{OH})_2$, los moles de base son la mitad de los de acido: $n(\\text{Ca}(\\text{OH})_2) = \\frac{3{,}719 \\times 10^{-3}}{2} = 1{,}859 \\times 10^{-3}\\ \\text{mol}$. Es el paso que transforma la cantidad de acido en la de base necesaria, porque el $\\text{Ca}(\\text{OH})_2$ aporta $2\\,\\text{OH}^-$ por mol." },
            { paso: "$$V = \\frac{1{,}859 \\times 10^{-3}\\ \\text{mol}}{0{,}1250\\ \\text{mol/L}} = 0{,}01487\\ \\text{L} = 14{,}9\\ \\text{mL}$$", porque: "Despejamos el volumen de titulante de $n = M \\times V$ como $V = \\frac{n}{M}$: $V = \\frac{1{,}859 \\times 10^{-3}}{0{,}1250} = 0{,}01487\\ \\text{L}$, o sea $14{,}9\\ \\text{mL}$. Este resultado sirve como control frente a los $29{,}75\\ \\text{mL}$ que se gastarian con $\\text{NaOH}$ de la misma molaridad." },
            { paso: "Control: con $\\text{NaOH}$ serian $29{,}75\\ \\text{mL}$; con $\\text{Ca}(\\text{OH})_2$ de igual molaridad se gasta la mitad.", porque: "Comparamos con la titulacion con $\\text{NaOH}$ de la misma molaridad: el $\\text{NaOH}$ reacciona $1:1$ y el $\\text{Ca}(\\text{OH})_2$ aporta el doble de $\\text{OH}^-$, asi que el volumen de $\\text{Ca}(\\text{OH})_2$ debe ser la mitad: $\\frac{29{,}75}{2} = 14{,}9\\ \\text{mL}$. Este control sirve para detectar errores de factor $2$ antes de entregar el resultado." }
          ],
          resultado: "Aprox. $14{,}9\\ \\text{mL}$ de $\\text{Ca}(\\text{OH})_2$ $0{,}1250\\ \\text{M}$."
        },
        {
          parte: "d)",
          pasos: [
            { paso: "Equilibrio: $\\text{CH}_3\\text{COOH} \\rightleftharpoons \\text{H}^+ + \\text{CH}_3\\text{COO}^-$. $$K_a = \\frac{[\\text{H}^+][\\text{CH}_3\\text{COO}^-]}{[\\text{CH}_3\\text{COOH}]} = 1{,}8 \\times 10^{-5}$$", porque: "Escribimos el equilibrio de disociacion del acido acetico, $\\text{CH}_3\\text{COOH} \\rightleftharpoons \\text{H}^+ + \\text{CH}_3\\text{COO}^-$, con $K_a = \\frac{[\\text{H}^+][\\text{CH}_3\\text{COO}^-]}{[\\text{CH}_3\\text{COOH}]} = 1{,}8 \\times 10^{-5}$. Como el acido es debil, solo una parte se ioniza, por eso $[\\text{H}^+]$ no es igual a $C$. La $K_a$ es la herramienta para calcular esa fraccion." },
            { paso: "Balance de carga: $[\\text{H}^+] = [\\text{CH}_3\\text{COO}^-] + [\\text{OH}^-]$. Balance de masa: $C = [\\text{CH}_3\\text{COOH}] + [\\text{CH}_3\\text{COO}^-]$, con $C = 0{,}744\\ \\text{M}$.", porque: "El balance de carga expresa que la solucion es neutra: $[\\text{H}^+] = [\\text{CH}_3\\text{COO}^-] + [\\text{OH}^-]$. El balance de masa indica que el acido total $C = 0{,}744\\ \\text{M}$ se reparte entre la forma sin disociar y la disociada: $C = [\\text{CH}_3\\text{COOH}] + [\\text{CH}_3\\text{COO}^-]$. Con ambos balances planteamos el sistema de ecuaciones." },
            { paso: "Suposiciones: $[\\text{OH}^-]$ despreciable (medio acido); $[\\text{H}^+] = [\\text{CH}_3\\text{COO}^-] = x$; ionizacion pequena, asi que $[\\text{CH}_3\\text{COOH}] = C - x = C$.", porque: "Hacemos dos suposiciones: el $[\\text{OH}^-]$ es despreciable porque la solucion es acida, y la ionizacion es chica, asi que $[\\text{CH}_3\\text{COOH}] = C - x$ es aprox. $C$. Con $[\\text{H}^+] = [\\text{CH}_3\\text{COO}^-] = x$, estas simplificaciones permiten despejar $x$ directamente. La validez se comprueba al final con $\\frac{x}{C}$ menor a $5\\%$." },
            { paso: "$$x = \\sqrt{K_a \\times C} = \\sqrt{1{,}8 \\times 10^{-5} \\times 0{,}744} = 3{,}66 \\times 10^{-3}\\ \\text{M}$$ Verificacion: $\\frac{x}{C} = 0{,}49\\% < 5\\%$, la aproximacion es valida. (Resolviendo la cuadratica se obtiene $\\text{pH}$ $2{,}44$ tambien.)", porque: "Con $[\\text{H}^+] = x$, la $K_a$ queda $\\frac{x^2}{C - x}$, que con $x$ chico frente a $C$ se simplifica a $\\frac{x^2}{C}$. Despejamos $x = \\sqrt{K_a \\times C} = \\sqrt{1{,}8 \\times 10^{-5} \\times 0{,}744} = 3{,}66 \\times 10^{-3}\\ \\text{M}$. Verificar la comprobacion $\\frac{x}{C} = 0{,}49\\% < 5\\%$, porque sin ella la aproximacion no esta justificada." },
            { paso: "$$\\text{pH} = -\\log(3{,}66 \\times 10^{-3}) = 2{,}44$$ Si se usara $5\\%$ m/V ($0{,}833\\ \\text{M}$) el $\\text{pH}$ seria aprox. $2{,}41$.", porque: "Calculamos el $\\text{pH}$ como $-\\log[\\text{H}^+]$ con $x = 3{,}66 \\times 10^{-3}\\ \\text{M}$, que da $\\text{pH} = 2{,}44$. Comparamos con el $5\\%$ m/V ($0{,}833\\ \\text{M}$) solo como referencia, porque la pregunta es el pH de la solucion tal como esta, y ese valor daria aprox. $2{,}41$. Error comun: usar la concentracion de la etiqueta sin verificar cual se pide." }
          ],
          resultado: "$\\text{pH}$ inicial aprox. $2{,}44$."
        }
      ],
      errores_tipicos: [
        {
          error: "En b), no dividir por los 3 mL de muestra (tomar 2,23 x 10^-3 M en lugar de 0,744 M), o confundir mL con L.",
          como_evitar: "C = n(NaOH)/V(muestra) = 2,231 x 10^-3 mol / 0,003 L = 0,744 M. Luego pasar a % m/V: 0,744 x 60,05 = 44,7 g/L."
        },
        {
          error: "En c), usar la relacion 1:1 con Ca(OH)2 y dar 29,75 mL, olvidando que aporta 2 OH-.",
          como_evitar: "2 CH3COOH + Ca(OH)2 -> ...: por cada mol de Ca(OH)2 se necesitan 2 mol de acido. El volumen es la mitad: 14,9 mL."
        },
        {
          error: "En d), tomar [H+] = C (como si el acido fuera fuerte), o usar pH = -log(Ka), sin verificar la aproximacion.",
          como_evitar: "Acido debil: [H+] = sqrt(Ka x C) = 3,66 x 10^-3 M, pH = 2,44. [H+] = C solo vale para acidos fuertes."
        }
      ]
    }
  ]
});

// ============ EXAMEN C: IMG-20260331-WA0027 ============
// Sin fecha ni tipo visibles en la foto (la foto empieza en los datos de R). Se marca "sin identificar".
// Ej1: la ecuacion del enunciado dice HBr(l), se transcribe como se lee (el HBr normalmente es gas).
// Ej2 a): "etano" aparece tachado y "propano" escrito a mano; se toma propano.
window.PARCIALES.push({
  id: "sin-fecha-1",
  tipo: "sin identificar",
  fecha: "sin fecha",
  fuente: "parciales/IMG-20260331-WA0027.jpg",
  ejercicios: [
    {
      num: 1,
      temas: ["reacciones", "soluciones", "uniones"],
      enunciado: "El acido bromhidrico y el acido sulfurico reaccionan segun la ecuacion: H2SO4(ac) + 2 HBr(l) -> SO2(g) + Br2(l) + 2 H2O(l). Se sabe ademas que se formaron 10 moles de agua y que la reaccion tiene un 85% de rendimiento. a) Calcule el volumen necesario de solucion de acido sulfurico del 98 % m/m y densidad 1,83 g/mL para que la reaccion ocurra. b) Si se utilizan, ademas, para la reaccion 15 moles de HBr, indique cual sera el reactivo limitante y la cantidad de moles del reactivo en exceso. c) Escriba la estructura de Lewis del SO2 y del Br2 y justifique los estados de agregacion de cada uno de ellos en la reaccion, considerando que se encuentran a la misma temperatura.",
      resolucion: [
        {
          parte: "a)",
          pasos: [
            { paso: "Supuesto: $10\\ \\text{mol}$ de agua es el producto real. Moles de $\\text{H}_2\\text{SO}_4$ que reaccionan = $\\frac{10}{2} = 5\\ \\text{mol}$.", porque: "Por la ecuacion, $1\\ \\text{mol}$ de $\\text{H}_2\\text{SO}_4$ produce $2\\ \\text{mol}$ de $\\text{H}_2\\text{O}$, asi que $10\\ \\text{mol}$ de agua corresponden a $\\frac{10}{2} = 5\\ \\text{mol}$ de acido. Tomamos el agua como producto real, y el rendimiento se aplica en el paso siguiente. Escribir este supuesto es importante porque cambia la cantidad de acido a usar." },
            { paso: "Con rendimiento $85\\%$: $$n(\\text{H}_2\\text{SO}_4)_{\\text{necesarios}} = \\frac{5}{0{,}85} = 5{,}882\\ \\text{mol}$$", porque: "Con rendimiento de $85\\%$ solo se aprovecha ese porcentaje de lo que se consume, asi que para obtener $5\\ \\text{mol}$ reales hay que partir de mas acido: $n(\\text{H}_2\\text{SO}_4) = \\frac{5}{0{,}85} = 5{,}882\\ \\text{mol}$. Es la misma logica de dividir por el rendimiento. Error comun: multiplicar por $0{,}85$, lo que daria menos acido del necesario." },
            { paso: "$M(\\text{H}_2\\text{SO}_4) = 98{,}08\\ \\text{g/mol}$. $$m = 5{,}882 \\times 98{,}08 = 576{,}9\\ \\text{g}$$ de $\\text{H}_2\\text{SO}_4$ puro.", porque: "Multiplicamos los moles de $\\text{H}_2\\text{SO}_4$ por su masa molar ($M = 98{,}08\\ \\text{g/mol}$, con $2 \\times 1{,}008 + 32{,}07 + 4 \\times 16{,}00$) para pasar a gramos de acido puro: $m = 5{,}882 \\times 98{,}08 = 576{,}9\\ \\text{g}$. Ese paso convierte la cantidad de sustancia en una masa que se puede pesar. Verificar la masa molar del $\\text{H}_2\\text{SO}_4$." },
            { paso: "Solucion al $98\\%$ m/m: $$m_{\\text{solucion}} = \\frac{576{,}9}{0{,}98} = 588{,}7\\ \\text{g}$$", porque: "Como la concentracion es $98\\%$ m/m, el acido puro es el $98\\%$ de la masa de la solucion. Por eso dividimos: $m_{\\text{solucion}} = \\frac{576{,}9}{0{,}98} = 588{,}7\\ \\text{g}$. Es el mismo criterio que el de rendimiento: si lo util es una fraccion, se divide para obtener el total. Error tipico: multiplicar por $0{,}98$, lo que daria una masa menor." },
            { paso: "$$V = \\frac{588{,}7\\ \\text{g}}{1{,}83\\ \\text{g/mL}} = 321{,}7\\ \\text{mL}$$", porque: "Usamos la densidad de la solucion ($1{,}83\\ \\text{g/mL}$) para pasar de masa a volumen con $V = \\frac{m}{d}$, ya que el acido se toma como solucion y se mide en volumen. Calculamos $V = \\frac{588{,}7\\ \\text{g}}{1{,}83\\ \\text{g/mL}} = 321{,}7\\ \\text{mL}$. Verificar que el resultado quede en mL, porque la densidad esta en g/mL." }
          ],
          resultado: "Aprox. $322\\ \\text{mL}$ ($0{,}322\\ \\text{L}$) de solucion de $\\text{H}_2\\text{SO}_4$ $98\\%$ m/m."
        },
        {
          parte: "b)",
          pasos: [
            { paso: "Relacion: $1\\,\\text{H}_2\\text{SO}_4 : 2\\,\\text{HBr}$. Para $5{,}882\\ \\text{mol}$ de $\\text{H}_2\\text{SO}_4$ se necesitan $11{,}76\\ \\text{mol}$ de $\\text{HBr}$.", porque: "Usamos la relacion $1\\,\\text{H}_2\\text{SO}_4 : 2\\,\\text{HBr}$ para calcular cuanto $\\text{HBr}$ se necesita con todo el acido disponible: $5{,}882 \\times 2 = 11{,}76\\ \\text{mol}$. Ese valor se compara con los $15\\ \\text{mol}$ disponibles para ver cual reactivo se agota primero. Error comun: usar la relacion $1:1$." },
            { paso: "Hay $15\\ \\text{mol}$ de $\\text{HBr}$, por lo tanto el $\\text{HBr}$ esta en exceso.", porque: "Como hay $15\\ \\text{mol}$ de $\\text{HBr}$ y solo se necesitan $11{,}76\\ \\text{mol}$, sobra $\\text{HBr}$ y queda en exceso. Eso significa que el $\\text{H}_2\\text{SO}_4$ se agota primero y limita la reaccion. Verificamos esta conclusion con el criterio de cociente del paso siguiente." },
            { paso: "Control por cociente $n/\\text{coef}$: $\\text{H}_2\\text{SO}_4 = \\frac{5{,}882}{1} = 5{,}88$; $\\text{HBr} = \\frac{15}{2} = 7{,}5$. El minimo es el $\\text{H}_2\\text{SO}_4$.", porque: "Para identificar el limitante dividimos cada cantidad disponible por su coeficiente y elegimos el menor valor: $\\text{H}_2\\text{SO}_4 = \\frac{5{,}882}{1} = 5{,}88$ y $\\text{HBr} = \\frac{15}{2} = 7{,}5$. El minimo es el $\\text{H}_2\\text{SO}_4$, por lo tanto es el reactivo limitante. Es necesario porque los coeficientes son distintos y comparar moles absolutos no alcanza." },
            { paso: "Exceso de $\\text{HBr}$: $$15 - 11{,}76 = 3{,}24\\ \\text{mol}$$", porque: "Calculamos el exceso restando a los moles de $\\text{HBr}$ disponibles los que reaccionan: $15 - 11{,}76 = 3{,}24\\ \\text{mol}$. Usamos moles de la misma sustancia para poder restar. Verificar que el resultado sea positivo, lo que confirma que el $\\text{HBr}$ es el que sobra." }
          ],
          resultado: "Reactivo limitante: $\\text{H}_2\\text{SO}_4$. Exceso: $\\text{HBr}$, $3{,}24\\ \\text{mol}$."
        },
        {
          parte: "c)",
          pasos: [
            { paso: "$\\text{SO}_2$: S central con dos enlaces con O en resonancia (S=O y S-O, orden de enlace $1{,}5$ en cada uno), $1$ par libre en S. Geometria angular, molecula polar.", porque: "Contamos los $18$ electrones de valencia del $\\text{SO}_2$ para armar Lewis: el S queda con un par libre y los dos enlaces S-O se reparten en resonancia (orden $1{,}5$). El par libre da geometria angular y, como los enlaces no se cancelan, la molecula es polar. Error tipico: dibujar el $\\text{SO}_2$ lineal." },
            { paso: "$\\text{Br}_2$: Br-Br con un enlace simple; cada Br tiene $3$ pares libres. Molecula apolar.", porque: "Cada Br tiene $7$ electrones de valencia: comparte uno en el enlace simple y completa el octeto con $3$ pares libres. Como los dos atomos son identicos no hay diferencia de electronegatividad, asi que la molecula es apolar. Verificar que cada atomo cumpla el octeto." },
            { paso: "Supuesto: la misma temperatura es $25\\ \\text{C}$. $\\text{SO}_2$ tiene punto de ebullicion de $-10\\ \\text{C}$, asi que es gas. $\\text{Br}_2$ tiene $70$ electrones y fuerzas de London fuertes, punto de ebullicion $58{,}8\\ \\text{C}$, asi que es liquido.", porque: "Como el enunciado no informa la temperatura, suponemos $25\\ \\text{C}$. El estado de cada sustancia depende de si esa temperatura supera su punto de ebullicion: $\\text{SO}_2$ ($-10\\ \\text{C}$) queda gas y $\\text{Br}_2$ ($58{,}8\\ \\text{C}$) queda liquido. Conviene aclarar el supuesto en la respuesta." }
          ],
          resultado: "$\\text{SO}_2$ gas y $\\text{Br}_2$ liquido a $25\\ \\text{C}$, por la intensidad de las fuerzas intermoleculares (London en $\\text{Br}_2$ frente a dipolo-dipolo y masa menor en $\\text{SO}_2$)."
        }
      ],
      errores_tipicos: [
        {
          error: "En a), usar 10 mol de H2SO4 o aplicar el 85% en sentido contrario, y olvidar el 98% m/m al pasar de masa a volumen.",
          como_evitar: "n = (10/2)/0,85 = 5,88 mol -> 576,9 g -> solucion 588,7 g -> V = 322 mL."
        },
        {
          error: "En b), decidir el limitante comparando moles absolutos (15 de HBr contra 5,88 de H2SO4) sin dividir por los coeficientes.",
          como_evitar: "Comparar n/coeficiente: H2SO4 5,88/1 contra HBr 15/2 = 7,5. El minimo es el limitante."
        },
        {
          error: "En c), decir que Br2 es gas a 25 C por ser una molecula chica o diatomica.",
          como_evitar: "Br2 es un liquido por sus fuerzas de London fuertes (70 electrones). El SO2 es gas aunque sea polar."
        }
      ]
    },
    {
      num: 2,
      temas: ["termodinamica", "liquidos"],
      enunciado: "Un secadero de nueces esta evaluando si usar propano (C3H8) gaseoso o carbon (C) como combustible para sus hornos de secado y dispone de los siguientes datos: C3H8(g) DeltaHf = -103,85 kJ/mol; CO2(g) DeltaHf = -393,5 kJ/mol; H2O(l) DeltaHf = -286,0 kJ/mol. a) Calcule las entalpias de combustion del propano y del carbon. Escriba las ecuaciones termoquimicas. Cual combustible sera mas conveniente si ambos tienen igual costo por mol de combustible? Justifique su respuesta. b) Si la combustion del propano se realiza a P y T constantes, indique describiendo su razonamiento si el sistema realiza trabajo sobre el entorno o el entorno sobre el sistema. c) Calcule los moles de propano requeridos para operar el horno de secado si se necesitan secar 800 kg de nueces frescas que contienen un 70% de agua y se encuentran inicialmente a 25 C. Datos adicionales: DeltaHvap agua = 40,88 kJ/mol; Cp H2O(l) = 75,29 J/(K.mol).",
      resolucion: [
        {
          parte: "a)",
          pasos: [
            { paso: "Propano: $\\text{C}_3\\text{H}_8(\\text{g}) + 5\\,\\text{O}_2(\\text{g}) \\rightarrow 3\\,\\text{CO}_2(\\text{g}) + 4\\,\\text{H}_2\\text{O}(\\text{l})$. $$\\Delta H_c = [3(-393{,}5) + 4(-286{,}0)] - (-103{,}85) = -2220{,}65\\ \\text{kJ/mol}$$", porque: "Aplicamos $\\Delta H$ = suma de $\\Delta H_f$ de productos menos suma de $\\Delta H_f$ de reactivos: $3(-393{,}5) + 4(-286{,}0) - (-103{,}85) = -2220{,}65\\ \\text{kJ/mol}$. El $\\text{O}_2$ no aporta porque su $\\Delta H_f$ es cero, y el agua se toma liquida porque es el estado de la tabla. Error comun: olvidar el coeficiente $4$ del agua." },
            { paso: "Carbon: $$\\text{C}(\\text{s}) + \\text{O}_2(\\text{g}) \\rightarrow \\text{CO}_2(\\text{g}), \\quad \\Delta H_c = -393{,}5\\ \\text{kJ/mol}$$", porque: "Para el carbon la combustion es $\\text{C}(\\text{s}) + \\text{O}_2 \\rightarrow \\text{CO}_2$, con un mol de C por mol de combustible. Como $\\text{C}(\\text{s})$ y $\\text{O}_2$ son elementos en su forma estable, su $\\Delta H_f$ es cero, y por eso el $\\Delta H_f$ del $\\text{CO}_2$ da directamente el $\\Delta H$ de combustion: $-393{,}5\\ \\text{kJ/mol}$. Verificar que el valor sea negativo." },
            { paso: "Por mol de combustible con igual costo: el propano libera $\\frac{2220{,}65}{393{,}5} = 5{,}6$ veces mas calor que el carbon por mol.", porque: "Como el costo es el mismo por mol, el criterio es el calor liberado por mol: $\\frac{2220{,}65}{393{,}5} = 5{,}6$, o sea el propano libera casi $6$ veces mas calor que el carbon. Por eso el propano es la opcion mas conveniente. Conviene comparar en la misma base (por mol de combustible), tal como pide el enunciado." },
            { paso: "Tambien se puede comparar por mol de carbono: el propano tiene $3$ C por mol, pero el criterio pedido es por mol de combustible.", porque: "Es una comprobacion extra: por mol de carbono el propano tiene $3$ C, y $\\frac{2220{,}65}{3} = 740\\ \\text{kJ}$ por mol de C frente a $393{,}5\\ \\text{kJ}$ del carbon. La conclusion favorable al propano se mantiene, aunque la respuesta pedida es por mol de combustible. Sirve para ver que el resultado no depende de la base elegida." }
          ],
          resultado: "Propano: $-2220{,}7\\ \\text{kJ/mol}$. Carbon: $-393{,}5\\ \\text{kJ/mol}$. Mas conveniente: propano."
        },
        {
          parte: "b)",
          pasos: [
            { paso: "Gases en la reaccion: reactivos $1 + 5 = 6\\ \\text{mol}$; productos $3\\ \\text{mol}$ ($\\text{CO}_2$). El $\\text{H}_2\\text{O}$ es liquida y no cuenta.", porque: "Para saber si el volumen cambia a presion constante contamos solo los moles de gas: reactivos $1 + 5 = 6\\ \\text{mol}$ y productos $3\\ \\text{mol}$ de $\\text{CO}_2$. El agua es liquida y su volumen es despreciable frente al de los gases, por eso no entra en el balance. Error comun: contarla como gas." },
            { paso: "$$\\Delta n_{\\text{gas}} = 3 - 6 = -3\\ \\text{mol}$$ A presion constante, al bajar el numero de moles gaseosos baja el volumen ($\\Delta V < 0$).", porque: "A presion y temperatura constantes, $V$ es proporcional a $n$ (gas ideal), asi que pasar de $6$ a $3\\ \\text{mol}$ de gas reduce el volumen. Entonces $\\Delta n_{\\text{gas}} = 3 - 6 = -3\\ \\text{mol}$ y $\\Delta V < 0$. Verificar el signo del cambio, porque define el sentido del trabajo." },
            { paso: "$W = -P\\,\\Delta V > 0$: el entorno realiza trabajo sobre el sistema (compresion).", porque: "Con $W = -P\\,\\Delta V$, una compresion ($\\Delta V$ negativo) da $W$ positivo, lo que significa que el entorno hace trabajo sobre el sistema. Es un asunto de signo, no de magnitud. Error tipico: invertir el signo y decir que el sistema trabaja sobre el entorno." }
          ],
          resultado: "El entorno realiza trabajo sobre el sistema ($\\Delta V < 0$)."
        },
        {
          parte: "c)",
          pasos: [
            { paso: "Masa de agua: $0{,}70 \\times 800\\ \\text{kg} = 560\\ \\text{kg} = 560\\,000\\ \\text{g}$. $$n(\\text{H}_2\\text{O}) = \\frac{560\\,000}{18{,}02} = 31\\,077\\ \\text{mol}$$", porque: "Primero calculamos la masa de agua como el $70\\%$ de las $800\\ \\text{kg}$ de nueces: $0{,}70 \\times 800\\ \\text{kg} = 560\\ \\text{kg}$. Luego pasamos a gramos y dividimos por $18{,}02\\ \\text{g/mol}$ para obtener $n(\\text{H}_2\\text{O}) = \\frac{560\\,000}{18{,}02} = 31\\,077\\ \\text{mol}$, porque el calor del paso siguiente es por mol. Verificar la conversion de kg a g." },
            { paso: "Por mol de agua: calentar de $25$ a $100\\ \\text{C}$: $$75{,}29\\ \\text{J/(K mol)} \\times 75\\ \\text{K} = 5{,}647\\ \\text{kJ/mol}$$ Vaporizar: $40{,}88\\ \\text{kJ/mol}$. Total = $46{,}527\\ \\text{kJ/mol}$.", porque: "Cada mol de agua debe llevarse de $25$ a $100\\ \\text{C}$ con calor sensible: $75{,}29\\ \\text{J/(K mol)} \\times 75\\ \\text{K} = 5{,}647\\ \\text{kJ/mol}$. Despues se vaporiza a $100\\ \\text{C}$ con $\\Delta H_{\\text{vap}} = 40{,}88\\ \\text{kJ/mol}$, y la suma da $46{,}527\\ \\text{kJ/mol}$. Conviene pasar el $C_p$ de J a kJ antes de sumar." },
            { paso: "Calor necesario: $$Q = 31\\,077 \\times 46{,}527 = 1{,}446 \\times 10^{6}\\ \\text{kJ}$$", porque: "Como cada mol de agua necesita la misma energia ($46{,}527\\ \\text{kJ/mol}$), el calor total es esa cantidad por el numero de moles: $Q = n \\times q = 31\\,077 \\times 46{,}527 = 1{,}446 \\times 10^{6}\\ \\text{kJ}$. Es un calculo de proporcionalidad. Error comun: usar la masa en kg en lugar de los moles." },
            { paso: "$$n(\\text{propano}) = \\frac{Q}{2220{,}65\\ \\text{kJ/mol}} = 651\\ \\text{mol}$$", porque: "Dividimos el calor necesario entre el calor liberado por mol de propano para obtener cuantos moles hay que quemar: $n = \\frac{Q}{|\\Delta H_c|} = \\frac{1{,}446 \\times 10^{6}}{2220{,}65} = 651\\ \\text{mol}$. Redondear solo al final evita errores acumulados. El resultado es coherente con el calor involucrado." },
            { paso: "Supuestos: $100\\%$ del calor de combustion va al agua, toda el agua se evapora a $100\\ \\text{C}$ y $1\\ \\text{atm}$, y no se considera calentar la materia seca.", porque: "Suponemos que todo el calor de combustion se usa en calentar y evaporar el agua, sin perdidas al ambiente ni calentamiento de la materia seca, porque el enunciado no da esos datos. Con estos supuestos el resultado es una estimacion ideal. En la practica haria falta mas combustible." }
          ],
          resultado: "Aprox. $651\\ \\text{mol}$ de propano."
        }
      ],
      errores_tipicos: [
        {
          error: "Invertir la formula de entalpia de reaccion (reactivos - productos), o usar la DeltaHf del H2O(g) en la combustion del propano.",
          como_evitar: "DeltaH = Sum DeltaHf(productos) - Sum DeltaHf(reactivos), con H2O(l): propano -2220,7 kJ/mol."
        },
        {
          error: "En b), contar el H2O liquida en Delta n, o contar solo los O2.",
          como_evitar: "Delta n solo con gases: 3 - (1 + 5) = -3. Como baja, el entorno comprime al sistema."
        },
        {
          error: "En c), olvidar el calentamiento de 25 a 100 C o la vaporizacion, o tomar los 800 kg como si fueran agua.",
          como_evitar: "Primero sacar el agua (0,70 x 800 kg). Luego por mol de agua: 75,29 x 75 J + 40,88 kJ = 46,53 kJ/mol."
        }
      ]
    },
    {
      num: 3,
      temas: ["acidobase", "soluciones"],
      enunciado: "El vinagre de cocina es una solucion acuosa que tiene una concentracion de 5% m/V de acido acetico. Dato: Ka(CH3COOH) = 1,75 x 10^-5. a) Escriba los balances y expresiones que describen los equilibrios en el sistema dado y calcule el pH que tiene el vinagre explicitando las suposiciones que realiza en los calculos. b) Calcule % de ionizacion (alfa) del acido acetico en el vinagre. c) Calcule el pH que tendra la solucion resultante de mezclar 5 mL de vinagre con 95 mL de agua (considere que los volumenes son aditivos).",
      resolucion: [
        {
          parte: "a)",
          pasos: [
            { paso: "$$C = \\frac{50\\ \\text{g/L}}{60{,}05\\ \\text{g/mol}} = 0{,}8326\\ \\text{mol/L}$$", porque: "Un $5\\%$ m/V significa $5\\ \\text{g}$ de acido cada $100\\ \\text{mL}$, o sea $50\\ \\text{g/L}$. Para pasar a molaridad dividimos por la masa molar del acido acetico ($60{,}05\\ \\text{g/mol}$): $C = \\frac{50}{60{,}05} = 0{,}8326\\ \\text{mol/L}$. Error comun: tomar el $5\\%$ como $5\\ \\text{M}$." },
            { paso: "Equilibrio: $\\text{CH}_3\\text{COOH} \\rightleftharpoons \\text{H}^+ + \\text{CH}_3\\text{COO}^-$. $K_a = \\frac{[\\text{H}^+][\\text{CH}_3\\text{COO}^-]}{[\\text{CH}_3\\text{COOH}]}$.", porque: "Escribimos el equilibrio de disociacion del acido acetico, $\\text{CH}_3\\text{COOH} \\rightleftharpoons \\text{H}^+ + \\text{CH}_3\\text{COO}^-$, y su $K_a = \\frac{[\\text{H}^+][\\text{CH}_3\\text{COO}^-]}{[\\text{CH}_3\\text{COOH}]}$. Como es un acido debil, el equilibrio esta muy desplazado hacia el acido sin disociar. Esa expresion permite despejar el $\\text{pH}$ a partir de $C = 0{,}8326\\ \\text{mol/L}$." },
            { paso: "Balance de carga: $[\\text{H}^+] = [\\text{CH}_3\\text{COO}^-] + [\\text{OH}^-]$. Balance de masa: $C = [\\text{CH}_3\\text{COOH}] + [\\text{CH}_3\\text{COO}^-]$.", porque: "El balance de carga expresa la electroneutralidad: $[\\text{H}^+] = [\\text{CH}_3\\text{COO}^-] + [\\text{OH}^-]$, o sea las cargas positivas compensan a las negativas. El balance de masa indica que $C = 0{,}8326\\ \\text{M}$ se reparte entre la forma sin disociar y la disociada. Con ambos balances se puede plantear el sistema de ecuaciones." },
            { paso: "Suposiciones: $[\\text{OH}^-]$ despreciable; $[\\text{H}^+] = [\\text{CH}_3\\text{COO}^-] = x$; $x \\ll C$. Entonces $$x = \\sqrt{K_a \\times C} = \\sqrt{1{,}75 \\times 10^{-5} \\times 0{,}8326} = 3{,}82 \\times 10^{-3}\\ \\text{M}$$", porque: "Hacemos dos suposiciones: el $[\\text{OH}^-]$ es despreciable en medio acido, y $[\\text{H}^+] = [\\text{CH}_3\\text{COO}^-] = x$ con $x \\ll C$. Con eso la $K_a$ se simplifica a $\\frac{x^2}{C}$, y despejando $x = \\sqrt{K_a \\times C} = \\sqrt{1{,}75 \\times 10^{-5} \\times 0{,}8326} = 3{,}82 \\times 10^{-3}\\ \\text{M}$. Error comun: aceptar este valor sin verificar la aproximacion, que se comprueba en el paso siguiente." },
            { paso: "Verificacion: $\\frac{x}{C} = 0{,}46\\%$, valida. (Cuadratica exacta: $x = 3{,}81 \\times 10^{-3}\\ \\text{M}$, pH igual.) $$\\text{pH} = -\\log(3{,}81 \\times 10^{-3}) = 2{,}42$$", porque: "Aceptamos la aproximacion $x \\ll C$ si $\\frac{x}{C}$ es menor a $5\\%$, y aqui $\\frac{x}{C} = 0{,}46\\%$, asi que es valida. Con esa concentracion el $\\text{pH}$ es $-\\log(3{,}81 \\times 10^{-3}) = 2{,}42$. La cuadratica exacta da el mismo pH, lo que confirma que la aproximacion no cambia el resultado." }
          ],
          resultado: "$\\text{pH}$ del vinagre aprox. $2{,}42$."
        },
        {
          parte: "b)",
          pasos: [
            { paso: "$$\\alpha = \\frac{[\\text{H}^+]}{C} = \\frac{3{,}81 \\times 10^{-3}}{0{,}8326} = 4{,}6 \\times 10^{-3}$$", porque: "El grado de ionizacion $\\alpha$ es la fraccion del acido que se disocia: $\\frac{[\\text{H}^+]}{C}$. Calculamos $\\alpha = \\frac{3{,}81 \\times 10^{-3}}{0{,}8326} = 4{,}6 \\times 10^{-3}$, o sea $0{,}46\\%$, que cuantifica cuanto del acido se ioniza. Verificar que se use el $C$ total y no la concentracion disociada." },
            { paso: "Control: $\\alpha = \\sqrt{\\frac{K_a}{C}} = \\sqrt{\\frac{1{,}75 \\times 10^{-5}}{0{,}8326}} = 4{,}58 \\times 10^{-3}$.", porque: "Para un acido debil con $x \\ll C$, $\\alpha = \\sqrt{\\frac{K_a}{C}}$ se deduce de la misma aproximacion, y sirve como control independiente de $x$. Calculamos $\\sqrt{\\frac{1{,}75 \\times 10^{-5}}{0{,}8326}} = 4{,}58 \\times 10^{-3}$. El resultado coincide con el de $\\frac{[\\text{H}^+]}{C}$, lo que valida el calculo." }
          ],
          resultado: "$\\alpha$ aprox. $0{,}46\\%$."
        },
        {
          parte: "c)",
          pasos: [
            { paso: "Volumen final = $5 + 95 = 100\\ \\text{mL}$. Factor de dilucion $\\frac{5}{100} = \\frac{1}{20}$.", porque: "Al mezclar $5\\ \\text{mL}$ de vinagre con $95\\ \\text{mL}$ de agua sumamos los volumenes, como dice el enunciado: $V_{\\text{final}} = 5 + 95 = 100\\ \\text{mL}$. El factor de dilucion es el volumen de vinagre sobre el volumen total, $\\frac{5}{100} = \\frac{1}{20}$. Error comun: usar $\\frac{5}{95}$ o no contar el agua." },
            { paso: "$$C' = 0{,}8326 \\times 0{,}05 = 0{,}04163\\ \\text{mol/L}$$", porque: "En una dilucion se conservan los moles de acido ($C \\times V$), no la concentracion: $C' = 0{,}8326 \\times \\frac{5}{100} = 0{,}04163\\ \\text{mol/L}$. Es el paso que transforma la concentracion del vinagre en la de la solucion diluida." },
            { paso: "$$x = \\sqrt{K_a \\times C'} = \\sqrt{1{,}75 \\times 10^{-5} \\times 0{,}04163} = 8{,}54 \\times 10^{-4}\\ \\text{M}$$ Verificacion: $\\frac{x}{C'} = 2\\%$, aproximacion valida. (Incluyendo el agua, $\\text{pH}$ $3{,}07$ igual.)", porque: "Usamos la misma aproximacion de acido debil con la nueva concentracion: $x = \\sqrt{K_a \\times C'} = \\sqrt{1{,}75 \\times 10^{-5} \\times 0{,}04163} = 8{,}54 \\times 10^{-4}\\ \\text{M}$. Verificamos que $\\frac{x}{C'} = 2\\%$, menor que $5\\%$, asi que es valida. El aporte del agua es despreciable frente a $8{,}54 \\times 10^{-4}\\ \\text{M}$. Error comun: no volver a verificar la aproximacion con la concentracion diluida." },
            { paso: "$$\\text{pH} = -\\log(8{,}54 \\times 10^{-4}) = 3{,}07$$", porque: "Calculamos el $\\text{pH}$ como $-\\log[\\text{H}^+]$ aplicado a la concentracion calculada: $\\text{pH} = -\\log(8{,}54 \\times 10^{-4}) = 3{,}07$. Es un valor mayor que el del vinagre puro ($2{,}42$), lo que es coherente con la dilucion." }
          ],
          resultado: "$\\text{pH}$ aprox. $3{,}07$."
        }
      ],
      errores_tipicos: [
        {
          error: "En a), usar 5% m/V directamente como molaridad (5 M) o confundir % m/V con % m/m.",
          como_evitar: "5% m/V = 50 g/L; 50 / 60,05 = 0,833 mol/L."
        },
        {
          error: "En b), calcular alfa = Ka/C en lugar de alfa = [H+]/C, o no sacar la raiz.",
          como_evitar: "alfa = x/C = 3,81 x 10^-3 / 0,8326 = 0,46%."
        },
        {
          error: "En c), usar 5/95 = 1/19 como factor de dilucion, o no contar los 100 mL totales.",
          como_evitar: "Volumen final = 100 mL. C' = 0,8326 x 5/100 = 0,0416 M, pH = 3,07."
        }
      ]
    }
  ]
});

// ============ EXAMEN D: IMG-20260331-WA0028 ============
// Sin fecha ni tipo visibles en la foto (la foto empieza en los datos de R). Se marca "sin identificar".
// Ej1: el enunciado dice que se obtiene oxido nitrico, pero la ecuacion dada produce N2O5. Se usa la ecuacion para la estequiometria y NO para la estructura de Lewis de c).
// Ej2: tabla de DeltaHf: C2H6(g) = -84,7; CO2(g) = -393,5; H2O(l) = -286,0.
window.PARCIALES.push({
  id: "sin-fecha-2",
  tipo: "sin identificar",
  fecha: "sin fecha",
  fuente: "parciales/IMG-20260331-WA0028.jpg",
  ejercicios: [
    {
      num: 1,
      temas: ["reacciones", "gases", "uniones"],
      enunciado: "En la produccion industrial del acido nitrico se obtiene, en la primera etapa, oxido nitrico a partir de amoniaco y oxigeno segun la siguiente reaccion: 2 NH3(g) + 4 O2(g) -> N2O5(g) + 3 H2O(g), se sabe ademas que 0,044 moles de NH3 reaccionan con oxigeno y con un rendimiento del 90%. a) Calcule cuantos litros de vapor de agua medidos a 125 C y 1 atm se forman. b) Cuantos moles de oxigeno seran necesarios para que la reaccion ocurra? c) Dibuje la estructura de Lewis del amoniaco y del oxido nitrico y analice cual de los dos tiene mayor punto de ebullicion. Justifique en funcion de sus estructuras y las fuerzas intermoleculares que se establecen.",
      resolucion: [
        {
          parte: "a)",
          pasos: [
            { paso: "Teorico: $$n(\\text{H}_2\\text{O}) = 0{,}044 \\times \\frac{3}{2} = 0{,}066\\ \\text{mol}$$", porque: "Usamos la relacion $2\\,\\text{NH}_3 : 3\\,\\text{H}_2\\text{O}$ de la ecuacion, o sea $\\frac{3}{2}\\ \\text{mol}$ de $\\text{H}_2\\text{O}$ por cada mol de $\\text{NH}_3$, para pasar de $0{,}044\\ \\text{mol}$ de $\\text{NH}_3$ a moles de agua teoricos: $n(\\text{H}_2\\text{O}) = 0{,}044 \\times \\frac{3}{2} = 0{,}066\\ \\text{mol}$. Es el paso estequiometrico basico. Error tipico: invertir la relacion a $2:3$." },
            { paso: "Con rendimiento $90\\%$: $$n(\\text{H}_2\\text{O}) = 0{,}066 \\times 0{,}90 = 0{,}0594\\ \\text{mol}$$", porque: "Con rendimiento de $90\\%$ se obtiene solo el $90\\%$ del producto teorico, asi que el agua real es $0{,}066 \\times 0{,}90 = 0{,}0594\\ \\text{mol}$. Aqui el rendimiento reduce el producto, y por eso se multiplica. Verificar que el resultado sea menor que el teorico." },
            { paso: "$T = 125 + 273{,}15 = 398{,}15\\ \\text{K}$. $$V = \\frac{nRT}{P} = \\frac{0{,}0594 \\times 0{,}0821 \\times 398{,}15}{1} = 1{,}94\\ \\text{L}$$", porque: "El vapor de agua es un gas, asi que calculamos su volumen con $PV = nRT$, despejando $V = \\frac{nRT}{P}$. Pasamos $125\\ \\text{C}$ a kelvin ($T = 125 + 273{,}15 = 398{,}15\\ \\text{K}$) porque la ecuacion usa escala absoluta. Con $R = 0{,}0821\\ \\frac{\\text{L atm}}{\\text{mol K}}$ y $P = 1\\ \\text{atm}$: $V = \\frac{0{,}0594 \\times 0{,}0821 \\times 398{,}15}{1} = 1{,}94\\ \\text{L}$." },
            { paso: "Control: el teorico seria $2{,}16\\ \\text{L}$.", porque: "Calculamos el volumen teorico (sin aplicar el $90\\%$) como control: el volumen real debe ser menor, en proporcion $0{,}90$. Como $2{,}16 \\times 0{,}90 = 1{,}94\\ \\text{L}$, el resultado es consistente. Si el resultado fuera mayor, habria un error en el calculo o en el rendimiento." }
          ],
          resultado: "Aprox. $1{,}94\\ \\text{L}$ de vapor de agua a $125\\ \\text{C}$ y $1\\ \\text{atm}$."
        },
        {
          parte: "b)",
          pasos: [
            { paso: "Relacion $2\\,\\text{NH}_3 : 4\\,\\text{O}_2$, luego $n(\\text{O}_2) = 2 \\times 0{,}044 = 0{,}088\\ \\text{mol}$.", porque: "Usamos la relacion $2\\,\\text{NH}_3 : 4\\,\\text{O}_2$ para pasar de moles de $\\text{NH}_3$ a moles de $\\text{O}_2$: $n(\\text{O}_2) = 0{,}044 \\times \\frac{4}{2} = 0{,}088\\ \\text{mol}$. Es el mismo criterio de proporcion molar que en los otros ejercicios. Error comun: usar la relacion del agua ($\\frac{3}{2}$) en vez de la del oxigeno." },
            { paso: "El rendimiento no cambia cuanto reacciona: los $0{,}044\\ \\text{mol}$ de $\\text{NH}_3$ que reaccionan necesitan $0{,}088\\ \\text{mol}$ de $\\text{O}_2$.", porque: "El rendimiento afecta cuanto producto se obtiene, pero no cuanto reactivo reacciona. Por eso calculamos el oxigeno con los $0{,}044\\ \\text{mol}$ de $\\text{NH}_3$ que efectivamente reaccionan, como indica el enunciado. Verificar que el rendimiento no se aplique dos veces en la misma respuesta." },
            { paso: "Supuesto: no se ajusta el $\\text{O}_2$ por rendimiento. Si se interpretara que hay que ajustarlo, serian $0{,}098\\ \\text{mol}$.", porque: "Tomamos como base que $0{,}044\\ \\text{mol}$ de $\\text{NH}_3$ reaccionan, como indica el enunciado, y el $\\text{O}_2$ sale directamente de esa cantidad: $0{,}088\\ \\text{mol}$. Si se ajustara por rendimiento se llegaria a $0{,}098\\ \\text{mol}$, pero eso supone que el oxigeno tambien pierde eficiencia, un supuesto que el enunciado no hace. Conviene aclararlo en la respuesta." }
          ],
          resultado: "$0{,}088\\ \\text{mol}$ de $\\text{O}_2$ (si se ajusta por rendimiento, $0{,}098\\ \\text{mol}$)."
        },
        {
          parte: "c)",
          pasos: [
            { paso: "$\\text{NH}_3$: N central con $3$ enlaces simples a H y $1$ par libre. Geometria piramidal trigonal, molecula polar. Puede formar puentes de hidrogeno (H unido a N y par libre del N).", porque: "Contamos los electrones de valencia (N: $5$; H: $1$ cada uno) para armar Lewis: $3$ enlaces N-H y $1$ par libre en el N. Ese par libre da geometria piramidal y hace que la molecula sea polar. Como el H esta unido a N, el $\\text{NH}_3$ puede formar puentes de hidrogeno a traves de su par libre." },
            { paso: "$\\text{NO}$: $11$ electrones de valencia, impar. Es un radical: N=O con un electron desapareado. Molecula polar, con fuerzas dipolo-dipolo debiles y London. No tiene H unido a F, O o N.", porque: "El $\\text{NO}$ tiene $11$ electrones de valencia (numero impar), por lo que no puede cumplir el octeto en todos los atomos y queda un electron desapareado: es un radical. Como no tiene H unido a F, O o N, no forma puentes de hidrogeno, y sus fuerzas son dipolo-dipolo y London. Error comun: asumir que toda molecula polar forma puentes de hidrogeno." },
            { paso: "Punto de ebullicion: $\\text{NH}_3$ aprox. $-33\\ \\text{C}$, $\\text{NO}$ aprox. $-152\\ \\text{C}$. $\\text{NH}_3$ tiene mayor punto de ebullicion por los puentes de hidrogeno, pese a tener menor masa molar que el $\\text{NO}$.", porque: "Para comparar puntos de ebullicion miramos primero la intensidad de las fuerzas intermoleculares, que pesa mas que la masa molar. Los puentes de hidrogeno del $\\text{NH}_3$ son mas intensos que las fuerzas dipolo-dipolo y London del $\\text{NO}$, aunque el $\\text{NO}$ tenga mayor masa molar. Por eso el $\\text{NH}_3$ (aprox. $-33\\ \\text{C}$) hierve a mayor temperatura que el $\\text{NO}$ (aprox. $-152\\ \\text{C}$)." }
          ],
          resultado: "Mayor punto de ebullicion: $\\text{NH}_3$ (puentes de hidrogeno)."
        }
      ],
      errores_tipicos: [
        {
          error: "En a), no pasar 125 C a 398,15 K.",
          como_evitar: "T = 125 + 273,15 = 398,15 K. Usar V = nRT/P con T en kelvin."
        },
        {
          error: "En a) o b), usar la relacion 3:2 del agua para el oxigeno, o usar 1:2 en vez de 2:4 para el O2.",
          como_evitar: "Cada reaccion tiene sus propios coeficientes: H2O 3/2 de NH3; O2 4/2 = 2 de NH3. Para 0,044 mol de NH3: 0,088 mol de O2."
        },
        {
          error: "En c), decidir el punto de ebullicion por la masa molar (NO = 30 frente a NH3 = 17).",
          como_evitar: "Comparar fuerzas intermoleculares: NH3 tiene puentes de hidrogeno; NO solo dipolo-dipolo debil y London."
        }
      ]
    },
    {
      num: 2,
      temas: ["termodinamica", "liquidos"],
      enunciado: "Un secadero de yerba mate esta evaluando si usar etano (C2H6) gaseoso o carbon (C) como combustible para sus hornos de secado y dispone de los siguientes datos: C2H6(g) DeltaHf = -84,7 kJ/mol; CO2(g) DeltaHf = -393,5 kJ/mol; H2O(l) DeltaHf = -286,0 kJ/mol. a) Calcule las entalpias de combustion del etano y del carbon. Escriba las ecuaciones termoquimicas. Cual combustible sera mas conveniente si ambos tienen igual costo por mol de combustible? Justifique su respuesta. b) Si la combustion del etano se realiza a P y T constantes, indique describiendo su razonamiento si el sistema realiza trabajo sobre el entorno o el entorno sobre el sistema. c) Cual es la masa de hojas de yerba mate que se pueden secar, sabiendo que contienen un 70% de agua, se encuentran inicialmente a 25 C y se dispone de 1000 moles de etano como combustible para operar el horno de secado? Datos adicionales: DeltaHvap agua = 40,88 kJ/mol; Cp H2O(l) = 75,29 J/(K.mol).",
      resolucion: [
        {
          parte: "a)",
          pasos: [
            { paso: "Etano: $\\text{C}_2\\text{H}_6(\\text{g}) + \\frac{7}{2}\\,\\text{O}_2(\\text{g}) \\rightarrow 2\\,\\text{CO}_2(\\text{g}) + 3\\,\\text{H}_2\\text{O}(\\text{l})$. $$\\Delta H_c = [2(-393{,}5) + 3(-286{,}0)] - (-84{,}7) = -1560{,}3\\ \\text{kJ/mol}$$", porque: "Ajustamos primero la combustion por conservacion de atomos: $2$ C dan $2\\,\\text{CO}_2$, $6$ H dan $3\\,\\text{H}_2\\text{O}$, y los $7$ O requieren $\\frac{7}{2}\\,\\text{O}_2$. Luego calculamos el $\\Delta H$ por Hess: $2(-393{,}5) + 3(-286{,}0) - (-84{,}7) = -1560{,}3\\ \\text{kJ/mol}$. Error tipico: escribir el agua como gas, lo que cambia el $\\Delta H$." },
            { paso: "Carbon: $$\\text{C}(\\text{s}) + \\text{O}_2(\\text{g}) \\rightarrow \\text{CO}_2(\\text{g}), \\quad \\Delta H_c = -393{,}5\\ \\text{kJ/mol}$$", porque: "La combustion del carbon es $\\text{C}(\\text{s}) + \\text{O}_2 \\rightarrow \\text{CO}_2$, con $1\\ \\text{mol}$ de C por mol de combustible. Como $\\text{C}(\\text{s})$ y $\\text{O}_2$ son elementos en su forma estable, tienen $\\Delta H_f = 0$, y el $\\Delta H$ de combustion coincide con el $\\Delta H_f$ del $\\text{CO}_2$: $-393{,}5\\ \\text{kJ/mol}$. Verificar que el valor sea negativo, ya que es un proceso exotermico." },
            { paso: "Por mol de combustible con igual costo: el etano libera $\\frac{1560{,}3}{393{,}5} = 4{,}0$ veces mas calor que el carbon por mol.", porque: "Con igual costo por mol, comparamos el calor liberado por mol: $\\frac{1560{,}3}{393{,}5} = 3{,}97$ veces mas que el carbon. Por eso conviene el etano. El redondeo a $4{,}0$ es solo para presentar, y en calculos siguientes conviene usar el valor sin redondear. Error comun: invertir el cociente." }
          ],
          resultado: "Etano: $-1560{,}3\\ \\text{kJ/mol}$. Carbon: $-393{,}5\\ \\text{kJ/mol}$. Mas conveniente: etano."
        },
        {
          parte: "b)",
          pasos: [
            { paso: "Gases: reactivos $1 + 3{,}5 = 4{,}5\\ \\text{mol}$; productos $2\\ \\text{mol}$ ($\\text{CO}_2$). El $\\text{H}_2\\text{O}$ es liquida y no cuenta.", porque: "Para ver si el volumen cambia a presion constante contamos solo los moles de gas: reactivos $1 + 3{,}5 = 4{,}5\\ \\text{mol}$ y productos $2\\ \\text{mol}$ de $\\text{CO}_2$. El $\\text{H}_2\\text{O}$ es liquida y su volumen se desprecia frente al de los gases, por eso no entra en el balance." },
            { paso: "$$\\Delta n_{\\text{gas}} = 2 - 4{,}5 = -2{,}5\\ \\text{mol}$$ A $P$ constante, el volumen disminuye ($\\Delta V < 0$).", porque: "A $P$ y $T$ constantes, el volumen es proporcional al numero de moles de gas ($PV = nRT$). Como $\\Delta n_{\\text{gas}} = 2 - 4{,}5 = -2{,}5\\ \\text{mol}$, el volumen disminuye: $\\Delta V < 0$. Verificar el signo, porque determina si el entorno comprime al sistema." },
            { paso: "$W = -P\\,\\Delta V > 0$: el entorno realiza trabajo sobre el sistema.", porque: "Con $W = -P\\,\\Delta V$, una compresion ($\\Delta V$ negativo) da trabajo positivo, es decir que el entorno realiza trabajo sobre el sistema. Entonces el resultado es un asunto de signo y no de magnitud. Error tipico: confundir el signo del trabajo con su valor." }
          ],
          resultado: "El entorno realiza trabajo sobre el sistema (compresion)."
        },
        {
          parte: "c)",
          pasos: [
            { paso: "Calor de combustion: $$Q = 1000\\ \\text{mol} \\times 1560{,}3\\ \\text{kJ/mol} = 1{,}560 \\times 10^{6}\\ \\text{kJ}$$", porque: "Como el etano se da en moles, el calor total liberado es $Q = 1000\\ \\text{mol} \\times 1560{,}3\\ \\text{kJ/mol} = 1{,}560 \\times 10^{6}\\ \\text{kJ}$. Ese es el calor disponible para evaporar el agua de las hojas. Verificar que se use el calor de combustion del etano y no el del carbon." },
            { paso: "Por mol de agua: calentar de $25$ a $100\\ \\text{C}$: $75{,}29 \\times 75 = 5{,}647\\ \\text{kJ/mol}$. Vaporizar: $40{,}88\\ \\text{kJ/mol}$. Total = $46{,}527\\ \\text{kJ/mol}$.", porque: "Para cada mol de agua sumamos el calor sensible de $25$ a $100\\ \\text{C}$ ($75{,}29\\ \\text{J/(mol K)} \\times 75\\ \\text{K} = 5{,}647\\ \\text{kJ/mol}$) y el calor latente de vaporizacion ($40{,}88\\ \\text{kJ/mol}$), dando $46{,}527\\ \\text{kJ/mol}$. Como el $C_p$ esta en J, lo pasamos a kJ antes de sumar. Error comun: sumar J con kJ sin convertir." },
            { paso: "$$n(\\text{H}_2\\text{O}) = \\frac{1{,}560 \\times 10^{6}}{46{,}527} = 33\\,535\\ \\text{mol}$$ $m(\\text{H}_2\\text{O}) = 33\\,535 \\times 18{,}02 = 604{,}3\\ \\text{kg}$.", porque: "Dividimos el calor disponible entre el calor por mol para saber cuantos moles de agua se pueden evaporar: $n = \\frac{1{,}560 \\times 10^{6}}{46{,}527} = 33\\,535\\ \\text{mol}$. Luego $m = n \\times M$, con $M = 18{,}02\\ \\text{g/mol}$, da unos $604\\ \\text{kg}$ de agua. Es el paso que liga la energia con la masa de agua." },
            { paso: "Masa de hojas: el agua es el $70\\%$ de la masa de hojas, $$m = \\frac{604{,}3}{0{,}70} = 863\\ \\text{kg}$$", porque: "El agua es el $70\\%$ de la masa de las hojas, asi que la masa total de hojas es la masa de agua dividida $0{,}70$: $m = \\frac{604{,}3}{0{,}70} = 863\\ \\text{kg}$. Es la misma logica de dividir por una fraccion que se usa en otros ejercicios. Verificar que el resultado sea mayor que la masa de agua." },
            { paso: "Supuestos: $100\\%$ del calor va al agua; toda el agua se evapora a $100\\ \\text{C}$ y $1\\ \\text{atm}$; no se calienta la materia seca.", porque: "Suponemos que el $100\\%$ del calor de la combustion llega al agua, que toda el agua se evapora a $100\\ \\text{C}$ y $1\\ \\text{atm}$, y que la materia seca no se calienta. Lo hacemos porque el enunciado no da datos de perdidas ni de masa seca. Con estos supuestos el resultado es una estimacion ideal; en la practica haria falta mas combustible." }
          ],
          resultado: "Aprox. $863\\ \\text{kg}$ de hojas de yerba mate (con unos $604\\ \\text{kg}$ de agua evaporada)."
        }
      ],
      errores_tipicos: [
        {
          error: "En a), olvidar el 7/2 O2 o escribir el agua como gas en la combustion (cambia el DeltaH).",
          como_evitar: "C2H6 + 7/2 O2 -> 2 CO2 + 3 H2O(l): DeltaH = [2(-393,5) + 3(-286,0)] - (-84,7) = -1560,3 kJ/mol."
        },
        {
          error: "En b), calcular Delta n con 2 - 3,5 (sin contar el etano) o decir que el sistema trabaja sobre el entorno.",
          como_evitar: "Delta n = 2 - (1 + 3,5) = -2,5. El volumen baja, el entorno comprime al sistema."
        },
        {
          error: "En c), usar 1000 g de etano en lugar de 1000 mol, o usar la entalpia de combustion del carbon.",
          como_evitar: "Q = 1000 mol x 1560,3 kJ/mol = 1,56 x 10^6 kJ, con el etano, que es el combustible del enunciado."
        }
      ]
    },
    {
      num: 3,
      temas: ["acidobase", "equilibrio"],
      enunciado: "El acido benzoico (C6H5COOH) es un buen conservante de alimentos ya que inhibe el crecimiento bacteriano, siempre que el pH del medio creado sea igual o inferior a 4,0. Dato: pKa (acido benzoico) = 6,5. a) Escriba los balances y expresiones que describen los equilibrios en el sistema dado y calcule la minima concentracion inicial del acido (en molaridad) para preparar una solucion conservante explicitando las suposiciones que realiza. b) Calcule % de ionizacion (alfa) del acido benzoico. c) Si se quiere sustituir el acido benzoico por acido clorhidrico, calcule la concentracion molar de este ultimo para obtener una solucion con el mismo pH. Justificar su respuesta.",
      resolucion: [
        {
          parte: "a)",
          pasos: [
            { paso: "$K_a = 10^{-\\text{pKa}} = 10^{-6{,}5} = 3{,}16 \\times 10^{-7}$.", porque: "Como el dato viene como pKa, lo convertimos con $\\text{pKa} = -\\log K_a$, o sea $K_a = 10^{-\\text{pKa}} = 10^{-6{,}5} = 3{,}16 \\times 10^{-7}$. Trabajar con $K_a$ es necesario para usar las expresiones de equilibrio. Error comun: escribir $10^{6{,}5}$ en lugar de $10^{-6{,}5}$." },
            { paso: "Equilibrio: $\\text{C}_6\\text{H}_5\\text{COOH} \\rightleftharpoons \\text{H}^+ + \\text{C}_6\\text{H}_5\\text{COO}^-$. $K_a = \\frac{[\\text{H}^+][\\text{A}^-]}{[\\text{HA}]}$.", porque: "Escribimos la disociacion del acido benzoico, $\\text{HA} \\rightleftharpoons \\text{H}^+ + \\text{A}^-$, con $K_a = \\frac{[\\text{H}^+][\\text{A}^-]}{[\\text{HA}]}$. Como el acido es debil, el equilibrio esta desplazado hacia el acido sin disociar, y la mayor parte queda como $\\text{HA}$. Esta expresion es la que luego nos permite despejar la concentracion." },
            { paso: "Balance de carga: $[\\text{H}^+] = [\\text{A}^-] + [\\text{OH}^-]$. Balance de masa: $C = [\\text{HA}] + [\\text{A}^-]$.", porque: "El balance de carga expresa la electroneutralidad: $[\\text{H}^+] = [\\text{A}^-] + [\\text{OH}^-]$. El balance de masa dice que el acido total $C$ se reparte entre la forma sin disociar y la disociada: $C = [\\text{HA}] + [\\text{A}^-]$. Ambos balances permiten plantear las ecuaciones sin conocer cada concentracion." },
            { paso: "Suposiciones: $[\\text{OH}^-]$ despreciable (pH $4$); $[\\text{A}^-] = [\\text{H}^+] = 1{,}0 \\times 10^{-4}\\ \\text{M}$ (pH = $4{,}0$). Entonces $[\\text{HA}] = C - 1{,}0 \\times 10^{-4}$.", porque: "Fijamos la concentracion de $\\text{H}^+$ al valor del pH limite: pH $4{,}0$ corresponde a $[\\text{H}^+] = 1{,}0 \\times 10^{-4}\\ \\text{M}$. A ese pH el $[\\text{OH}^-]$ es despreciable, y asumimos $[\\text{A}^-] = [\\text{H}^+]$ porque es el ion que forma la disociacion. Entonces $[\\text{HA}] = C - 1{,}0 \\times 10^{-4}$. Estas suposiciones simplifican el balance sin cambiar el resultado de forma apreciable." },
            { paso: "$$K_a = \\frac{(10^{-4})^2}{C - 10^{-4}} \\rightarrow C = 10^{-4} + \\frac{10^{-8}}{3{,}16 \\times 10^{-7}} = 10^{-4} + 0{,}0316 = 0{,}0317\\ \\text{M}$$", porque: "Como $K_a = \\frac{[\\text{H}^+]^2}{C - [\\text{H}^+]}$, despejamos $C$ pasando $[\\text{H}^+]$ al otro lado: $C = [\\text{H}^+] + \\frac{[\\text{H}^+]^2}{K_a}$. Con $[\\text{H}^+] = 10^{-4}$ y $K_a = 3{,}16 \\times 10^{-7}$ se obtiene $C = 10^{-4} + 0{,}0316 = 0{,}0317\\ \\text{M}$. Verificar la cuenta, porque el segundo termino es el que domina." },
            { paso: "Como el $\\text{pH}$ debe ser igual o menor a $4{,}0$, la minima concentracion es la que da $\\text{pH} = 4{,}0$.", porque: "Un acido mas concentrado produce mas $\\text{H}^+$ y un pH mas bajo, asi que la condicion de pH igual o menor a $4{,}0$ se cumple con cualquier $C$ mayor o igual al valor calculado. Por eso la concentracion minima es la que da pH exactamente $4{,}0$. Error comun: tomar el maximo en lugar del minimo." }
          ],
          resultado: "C minima aprox. $0{,}032\\ \\text{M}$ ($3{,}2 \\times 10^{-2}\\ \\text{mol/L}$)."
        },
        {
          parte: "b)",
          pasos: [
            { paso: "Usando $C = 0{,}0317\\ \\text{M}$ (de a): $$\\alpha = \\frac{[\\text{H}^+]}{C} = \\frac{1{,}0 \\times 10^{-4}}{0{,}0317} = 3{,}15 \\times 10^{-3}$$", porque: "El grado de ionizacion $\\alpha$ es la fraccion del acido que se disocia: $\\alpha = \\frac{[\\text{H}^+]}{C} = \\frac{1{,}0 \\times 10^{-4}}{0{,}0317} = 3{,}15 \\times 10^{-3}$. Usamos $C = 0{,}0317\\ \\text{M}$ de a), que es la concentracion del acido en esa solucion. Expresado en porcentaje, $3{,}15 \\times 10^{-3}$ equivale a $0{,}32\\%$." },
            { paso: "Control: $\\alpha = \\sqrt{\\frac{K_a}{C}} = \\sqrt{\\frac{3{,}16 \\times 10^{-7}}{0{,}0317}} = 3{,}16 \\times 10^{-3}$.", porque: "Para un acido debil, $\\alpha = \\sqrt{\\frac{K_a}{C}}$ sale de la misma aproximacion usada antes, y sirve como control independiente del valor de $[\\text{H}^+]$. Calculamos $\\sqrt{\\frac{3{,}16 \\times 10^{-7}}{0{,}0317}} = 3{,}16 \\times 10^{-3}$. Los dos resultados ($3{,}15$ y $3{,}16 \\times 10^{-3}$) coinciden, lo que confirma el calculo." }
          ],
          resultado: "$\\alpha$ aprox. $0{,}32\\%$."
        },
        {
          parte: "c)",
          pasos: [
            { paso: "El $\\text{HCl}$ es un acido fuerte: se disocia totalmente, $\\text{HCl} \\rightarrow \\text{H}^+ + \\text{Cl}^-$. $[\\text{H}^+] = C_{\\text{HCl}}$.", porque: "El $\\text{HCl}$ es un acido fuerte, asi que se disocia $100\\%$ en $\\text{H}^+$ y $\\text{Cl}^-$: $\\text{HCl} \\rightarrow \\text{H}^+ + \\text{Cl}^-$, y $[\\text{H}^+] = C_{\\text{HCl}}$. Por eso no hace falta plantear equilibrio. Error comun: aplicar la formula de acido debil a un acido fuerte." },
            { paso: "Para $\\text{pH}$ $4{,}0$: $$[\\text{H}^+] = 1{,}0 \\times 10^{-4}\\ \\text{M}$$ El aporte del agua ($10^{-7}\\ \\text{M}$) es despreciable.", porque: "Con $\\text{pH}$ $4{,}0$ la $[\\text{H}^+]$ objetivo es $1{,}0 \\times 10^{-4}\\ \\text{M}$. El agua aporta $10^{-7}\\ \\text{M}$ de $\\text{H}^+$ por autoionizacion, un valor mucho menor que $1{,}0 \\times 10^{-4}\\ \\text{M}$, por lo que se puede despreciar. Verificar que este aporte sea chico frente a $10^{-4}$ antes de despreciarlo." },
            { paso: "Por lo tanto $$C_{\\text{HCl}} = 1{,}0 \\times 10^{-4}\\ \\text{M}$$ Es unas $300$ veces menos concentrado que el acido benzoico, porque el benzoico se ioniza muy poco.", porque: "Como el $\\text{HCl}$ aporta $1\\,\\text{H}^+$ por mol, su concentracion debe ser igual a la $[\\text{H}^+]$ objetivo: $C_{\\text{HCl}} = 1{,}0 \\times 10^{-4}\\ \\text{M}$. El acido benzoico, que se ioniza poco, necesita una concentracion $\\frac{0{,}0317}{10^{-4}} = 317$ veces mayor para llegar al mismo pH. Esto muestra la diferencia entre un acido fuerte y uno debil." }
          ],
          resultado: "$C_{\\text{HCl}} = 1{,}0 \\times 10^{-4}\\ \\text{mol/L}$."
        }
      ],
      errores_tipicos: [
        {
          error: "Confundir pKa con Ka (tomar Ka = 6,5) o escribir Ka = 10^6,5 en vez de 10^-6,5.",
          como_evitar: "Ka = 10^-pKa = 10^-6,5 = 3,16 x 10^-7."
        },
        {
          error: "En a), igualar la concentracion del acido con [H+] = 10^-4 M, tratando el acido debil como fuerte.",
          como_evitar: "Ka = [H+]^2/(C - [H+]) -> C = [H+] + [H+]^2/Ka = 1,0 x 10^-4 + 0,0316 = 0,0317 M."
        },
        {
          error: "En c), usar la misma concentracion del acido (0,0317 M) para el HCl, sin notar que el HCl es fuerte.",
          como_evitar: "HCl se disocia 100%: [H+] = C, por lo que C_HCl = 1,0 x 10^-4 M."
        }
      ]
    }
  ]
});
