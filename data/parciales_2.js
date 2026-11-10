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
            { paso: "Reduccion: Cr2O7(2-) + 14 H+ + 6 e- -> 2 Cr(3+) + 7 H2O (cada Cr pasa de +6 a +3, 3 e- por Cr, 6 e- por dicromato).", porque: "Como la reaccion es en medio acido, primero balanceamos los O agregando H2O y despues los H con H+. Calculamos los electrones con los numeros de oxidacion: el Cr pasa de +6 a +3, o sea gana 3 e- por cada Cr, y como son 2 Cr del dicromato, hay 6 e- en total. Por eso la semirreaccion queda 14 H+ + 6 e- -> 2 Cr(3+) + 7 H2O, y conviene verificar que las cargas de ambos lados coincidan." },
            { paso: "Oxidacion: 2 Cl- -> Cl2 + 2 e-. Para igualar electrones se multiplica por 3: 6 Cl- -> 3 Cl2 + 6 e-.", porque: "Usamos la semirreaccion del cloro: dos Cl- forman un Cl2 y ceden 2 e-. Como la reduccion gano 6 e-, la oxidacion tiene que ceder la misma cantidad, por eso multiplicamos por 3 y aparecen 6 Cl- y 3 Cl2. Error comun: multiplicar por 2 y dejar 4 e- contra 6 e-." },
            { paso: "Suma: Cr2O7(2-) + 14 H+ + 6 Cl- -> 2 Cr(3+) + 3 Cl2 + 7 H2O. Se agregan los iones K+ y Cl- que faltan: K2Cr2O7 + 14 HCl -> 2 CrCl3 + 3 Cl2 + 2 KCl + 7 H2O.", porque: "Al sumar las dos semirreacciones los 6 e- aparecen a ambos lados y se cancelan. Para volver a la forma molecular agregamos los K+ del dicromato y los Cl- que no se oxidaron, los que forman CrCl3 y KCl. Por eso la ecuacion obtenida debe coincidir con la del enunciado, sin coeficientes nuevos." },
            { paso: "Verificacion: Cl 14 = 14, H 14 = 14, O 7 = 7, K 2 = 2, Cr 2 = 2.", porque: "Usamos el recuento de atomos como control final: Cl 14 = 14, H 14 = 14, O 7 = 7, K 2 = 2 y Cr 2 = 2. Los totales tienen que coincidir porque en una reaccion quimica los atomos se conservan, como indica la ley de conservacion de la masa. Si algun elemento no coincide, conviene revisar los coeficientes antes de hacer cualquier calculo estequiometrico." }
          ],
          resultado: "Correcto: la ecuacion esta balanceada."
        },
        {
          parte: "b)",
          pasos: [
            { paso: "M(CrCl3) = 52,00 + 3 x 35,45 = 158,35 g/mol. n(CrCl3) = 20 g / 158,35 g/mol = 0,1263 mol.", porque: "Para convertir los 20 g de CrCl3 en moles usamos n = m/M, con M = 52,00 + 3 x 35,45 = 158,35 g/mol. Dividimos 20 g por 158,35 g/mol y obtenemos 0,1263 mol. Hacemos este paso primero porque la estequiometria trabaja en moles y no directamente en gramos. Error comun: sumar mal la masa molar, por ejemplo no multiplicar el Cl por 3." },
            { paso: "Por estequiometria, 1 K2Cr2O7 da 2 CrCl3: n(K2Cr2O7) teorico = 0,1263/2 = 0,06315 mol.", porque: "Usamos la relacion 1 K2Cr2O7 : 2 CrCl3 de la ecuacion balanceada para pasar de moles de producto a moles de reactivo. Como se necesita la mitad de moles de dicromato que de CrCl3, dividimos 0,1263 por 2 y obtenemos 0,06315 mol. Esto vale porque los coeficientes indican proporciones molares y no masicas. Error comun: usar la relacion 1:1 o multiplicar por 2 en vez de dividir." },
            { paso: "M(K2Cr2O7) = 294,2 g/mol. m teorica = 0,06315 x 294,2 = 18,58 g.", porque: "Multiplicamos los moles de K2Cr2O7 por su masa molar, M = 294,2 g/mol, para pasar a gramos: 0,06315 x 294,2 = 18,58 g. Ese paso convierte la cantidad de sustancia en masa. Es la masa teorica, o sea la que se necesitaria con rendimiento del 100 % y reactivo puro, por eso hay que corregirla en el paso siguiente. Verificar que la masa molar tenga los 7 O del dicromato." },
            { paso: "Rendimiento 80%: m necesaria pura = 18,58 / 0,80 = 23,23 g. Pureza 75%: m de droga impura = 23,23 / 0,75 = 30,97 g.", porque: "Rendimiento y pureza son porcentajes que reducen la cantidad util: con 80 % de rendimiento se aprovecha 0,80 de lo calculado, y con 75 % de pureza solo 0,75 de la droga es dicromato. Como queremos saber cuanta droga hace falta, hacemos la cuenta inversa: 18,58 / 0,80 = 23,23 g y luego 23,23 / 0,75 = 30,97 g. Error tipico: multiplicar por 0,80 y 0,75, lo que daria una masa menor que la teorica." },
            { paso: "Supuesto: los 20 g son la cantidad de CrCl3 realmente obtenida.", porque: "El enunciado no dice si los 20 g de CrCl3 son la cantidad teorica o la real, asi que adoptamos un supuesto explicito: tomamos los 20 g como cantidad real. Con ese supuesto el rendimiento del 80 % se aplica al dicromato, que es lo que se pide calcular. Conviene escribir el supuesto en la respuesta, porque cambia el resultado final." }
          ],
          resultado: "Aprox. 31,0 g de droga impura (23,2 g de K2Cr2O7 puro)."
        },
        {
          parte: "c)",
          pasos: [
            { paso: "Relacion 2 CrCl3 : 2 KCl, luego n(KCl) = n(CrCl3) = 0,1263 mol.", porque: "En la ecuacion balanceada, 2 CrCl3 producen 2 KCl, asi que la relacion molar es 1:1. Entonces n(KCl) = n(CrCl3) = 0,1263 mol, sin conversion adicional. Error comun: usar la relacion del K2Cr2O7 (1:2 con el CrCl3) en vez de la del producto pedido." },
            { paso: "M(KCl) = 39,10 + 35,45 = 74,55 g/mol. m(KCl) = 0,1263 x 74,55 = 9,42 g.", porque: "Usamos m = n x M con M(KCl) = 39,10 + 35,45 = 74,55 g/mol, que es la suma de los pesos atomicos del K y del Cl. Calculamos 0,1263 x 74,55 = 9,42 g de KCl. Es el mismo criterio que antes, aplicado a la sustancia pedida, por eso conviene verificar que se use la masa molar del KCl y no la del CrCl3." },
            { paso: "Supuesto: se parte de los 20 g de CrCl3 obtenidos (el rendimiento ya esta contemplado).", porque: "El KCl se forma en la misma reaccion que el CrCl3, asi que su cantidad sale de los mismos moles de reaccion. Como tomamos los 20 g de CrCl3 como producto real, el rendimiento ya quedo incorporado y no hace falta volver a aplicar el 80 %. Aplicarlo de nuevo seria contar dos veces la perdida." }
          ],
          resultado: "Aprox. 9,42 g de KCl."
        },
        {
          parte: "d)",
          pasos: [
            { paso: "Gas: Cl2. Relacion 3 Cl2 : 2 CrCl3, luego n(Cl2) = (3/2) x 0,1263 = 0,1895 mol.", porque: "Usamos la relacion 3 Cl2 : 2 CrCl3 para pasar de CrCl3 a Cl2: por cada 2 mol de CrCl3 se forman 3 mol de Cl2. Entonces n(Cl2) = (3/2) x 0,1263 = 0,1895 mol, porque los coeficientes dan proporciones molares y el factor no es 1. Error tipico: tomar la relacion 1:1 y olvidar este factor." },
            { paso: "Condiciones normales: T = 273,15 K, P = 1 atm. V = nRT/P = 0,1895 x 0,0821 x 273,15 / 1 = 4,25 L.", porque: "En condiciones normales (273,15 K y 1 atm) aplicamos PV = nRT, despejando V = nRT/P con R = 0,0821 L atm/(mol K). Reemplazamos: V = 0,1895 x 0,0821 x 273,15 / 1 = 4,25 L. La temperatura tiene que estar en kelvin porque la ley de gases usa escala absoluta, y con P en atm el volumen sale en litros." },
            { paso: "Con V molar 22,4 L/mol se obtiene 4,24 L (diferencia por redondeo).", porque: "Usamos el volumen molar de 22,4 L/mol como control: sale de PV = nRT en CN (0,0821 x 273,15 = 22,4), asi que V = n x 22,4 debe dar casi lo mismo que el calculo con R. Con 0,1895 x 22,4 obtenemos 4,24 L. La pequena diferencia (4,25 contra 4,24 L) viene solo del redondeo de los valores intermedios." }
          ],
          resultado: "Aprox. 4,25 L de Cl2 en CN."
        },
        {
          parte: "e)",
          pasos: [
            { paso: "CrCl3 y KCl: solidos ionicos. La fuerza dominante es la atraccion ion-ion (electrostatica). Se asume que el CrCl3 se trata como ionico, como en la materia.", porque: "Para clasificar el solido miramos la naturaleza de los elementos: Cr y K son metales y Cl es no metal, asi que CrCl3 y KCl forman redes de iones. Esa red se mantiene por atraccion electrostatica entre cargas opuestas, que es la fuerza mas intensa en estos solidos. Error comun: tomar el CrCl3 como molecular por su formula sencilla." },
            { paso: "Cl2: a condiciones normales es gas. Como molecula apolar, su solido (si se enfria) tendria fuerzas de London (dispersion).", porque: "Para el Cl2 analizamos la molecula: como los dos atomos son iguales no hay diferencia de electronegatividad, asi que es apolar. Por eso solo actuan las fuerzas de London (dispersion), que son mas intensas cuanto mayor es la nube electronica. Verificar que no se confundan con puentes de hidrogeno o dipolo-dipolo." },
            { paso: "H2O: solido molecular (hielo), fuerza dominante: puentes de hidrogeno.", porque: "En el agua el H esta unido directamente a O, muy electronegativo, y eso deja al H con una carga parcial positiva marcada. Esa carga atrae al par libre del O de otra molecula y forma un puente de hidrogeno, la fuerza intermolecular mas intensa entre moleculas neutras. Entonces el H2O es un solido molecular con puentes de hidrogeno, porque el puente exige H unido a F, O o N." },
            { paso: "Analisis de puntos de fusion: CrCl3 (aprox. 1150 C) > KCl (aprox. 770 C) > H2O (0 C) > Cl2 (aprox. -101 C). El Cr(3+) tiene mayor carga y menor radio que el K(+), por lo que la energia reticular del CrCl3 es mayor. Entre los moleculares, el puente de hidrogeno del agua es mas fuerte que las fuerzas de London del Cl2.", porque: "Para ordenar los puntos de fusion comparamos dos casos. En los ionicos, la energia de red crece con la carga de los iones y disminuye con su radio: el Cr(3+) tiene mayor carga y menor radio que el K(+), por eso CrCl3 > KCl. En los moleculares, el puente de hidrogeno del agua es mas fuerte que las fuerzas de London del Cl2, por eso H2O > Cl2, aunque el Cl2 tenga mayor masa molar." }
          ],
          resultado: "Solidos ionicos: CrCl3 y KCl (ion-ion; CrCl3 con mayor punto de fusion). Solidos moleculares: H2O (puentes de hidrogeno) y Cl2 (London), con Cl2 el de menor punto de fusion."
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
            { paso: "Supuesto: la combustion es completa y el agua formada es liquida (es el estado que corresponde a los DeltaH dados).", porque: "Antes de escribir las ecuaciones fijamos el estado de los productos: la combustion completa produce CO2(g) y agua, y los DeltaH tabulados (-2220 y -2879,6 kJ/mol) corresponden a agua liquida. Si el agua fuera vapor, el DeltaH seria menos negativo, porque la vaporizacion absorbe calor. Conviene escribir este supuesto, porque cambia el valor de la entalpia." },
            { paso: "Propano: C3H8(g) + 5 O2(g) -> 3 CO2(g) + 4 H2O(l), DeltaH = -2220 kJ.", porque: "Ajustamos la ecuacion por conservacion de atomos, en este orden: primero los C (3 CO2), despues los H (8 H dan 4 H2O) y al final los O. Los O de los productos suman 10, lo que da 5 O2 en los reactivos. Como el DeltaH dado (-2220 kJ/mol) corresponde a 1 mol de propano, la ecuacion debe tener 1 mol de C3H8. Error tipico: ajustar los O antes que los C y H." },
            { paso: "Butano: C4H10(g) + 13/2 O2(g) -> 4 CO2(g) + 5 H2O(l), DeltaH = -2879,6 kJ. (Doblando coeficientes: 2 C4H10 + 13 O2 -> 8 CO2 + 10 H2O.)", porque: "Como el DeltaH dado es por mol de butano, el coeficiente del O2 tiene que ser 13/2 para que la ecuacion tenga 1 mol de C4H10: 4 C dan 4 CO2 y 10 H dan 5 H2O. Entonces los O de los productos se reparten en 6,5 O2. Si multiplicamos toda la ecuacion por 2 se obtiene la misma reaccion, pero con el DeltaH doblado. Error tipico: dejar 13 O2 para un mol de C4H10." }
          ],
          resultado: "C3H8(g) + 5 O2(g) -> 3 CO2(g) + 4 H2O(l) DeltaH = -2220 kJ/mol; C4H10(g) + 6,5 O2(g) -> 4 CO2(g) + 5 H2O(l) DeltaH = -2879,6 kJ/mol."
        },
        {
          parte: "b)",
          pasos: [
            { paso: "Propano: Q1 = 700 mol x 2220 kJ/mol = 1 554 000 kJ.", porque: "Como el DeltaH es por mol de combustible, calculamos Q1 = 700 mol x 2220 kJ/mol = 1 554 000 kJ. Se usa el valor absoluto porque el signo negativo solo indica que el calor sale del sistema. Verificar que se usen 700 mol de propano y no otra unidad." },
            { paso: "Butano: Q2 = 300 mol x 2879,6 kJ/mol = 863 880 kJ.", porque: "Repetimos el mismo calculo para el butano con sus 300 mol. Usamos su propio DeltaH (-2879,6 kJ/mol) y obtenemos Q2 = 300 x 2879,6 = 863 880 kJ. Cada combustible tiene su calor de combustion, por eso es un error frecuente usar el DeltaH del propano para el butano." },
            { paso: "Calor total = 2 417 880 kJ. Calor transferido al agua (90%) = 0,90 x 2 417 880 = 2 176 092 kJ.", porque: "Sumamos los dos aportes porque ambos combustibles se queman en el mismo proceso: 1 554 000 + 863 880 = 2 417 880 kJ. El enunciado dice que solo el 90 % del calor pasa al agua, asi que calculamos 0,90 x 2 417 880 = 2 176 092 kJ. Error tipico: aplicar el 90 % a un solo combustible o olvidarlo." }
          ],
          resultado: "Calor total generado: 2,42 x 10^6 kJ. Calor transferido al agua: 2,18 x 10^6 kJ."
        },
        {
          parte: "c)",
          pasos: [
            { paso: "n(agua) = 900 000 g / 18,02 g/mol = 49 945 mol.", porque: "Los datos de la parte c estan por mol de agua (Cp y DeltaH), entonces convertimos la masa de agua a moles con n = m/M. Pasamos 900 kg a 900 000 g y dividimos por 18,02 g/mol: n = 900 000 / 18,02 = 49 945 mol. Verificar la conversion de kg a g, que es un error frecuente." },
            { paso: "Calentar hielo de -5 a 0 C: Q1 = 49 945 x 33,60 x 5 = 8,39 x 10^3 kJ.", porque: "Calculamos el calor que el hielo necesita para subir de -5 a 0 C sin cambiar de fase, con Q = n x Cp x DeltaT. Usamos el Cp del solido (33,60 J/(mol K)) y DeltaT = 5 K: Q1 = 49 945 x 33,60 x 5 = 8,39 x 10^3 kJ, pasando de J a kJ. Es el primer tramo obligatorio, porque el agua no puede fundir antes de llegar a 0 C." },
            { paso: "Fundir a 0 C: Q2 = 49 945 x 6,03 = 301 168 kJ.", porque: "En la fusion la temperatura se mantiene en 0 C mientras el hielo pasa a liquido, asi que este calor no sube la temperatura sino que rompe la red cristalina. Por eso usamos Q = n x DeltaHfusion, porque el dato esta dado por mol: Q2 = 49 945 x 6,03 = 301 168 kJ. Error comun: tratar este calor como calor sensible (n x Cp x DeltaT)." },
            { paso: "Calentar liquido de 0 a 100 C: Q3 = 49 945 x 75,23 x 100 = 375 736 kJ.", porque: "Una vez que todo es liquido a 0 C, lo calentamos hasta 100 C a 1 atm con Q = n x Cp(liquido) x DeltaT, con DeltaT = 100 K. Usamos el Cp del liquido (75,23 J/(mol K)), no el del solido ni el del vapor: Q3 = 49 945 x 75,23 x 100 = 375 736 kJ. Verificar que la temperatura final sea 100 C, que es el limite antes de vaporizar." },
            { paso: "Suma de los pasos anteriores = 685 295 kJ. Queda disponible: 2 176 092 - 685 295 = 1 490 797 kJ.", porque: "Sumamos los tres tramos previos (calentar el hielo, fundir y calentar el liquido) porque ocurren en orden y todos consumen calor del total disponible: 8,39 x 10^3 + 301 168 + 375 736 = 685 295 kJ. Luego restamos esa suma a los 2 176 092 kJ transferidos al agua, y el saldo 1 490 797 kJ es la energia que queda para vaporizar. Error tipico: comparar el calor total directamente con el de vaporizacion sin descontar estos tramos." },
            { paso: "Vaporizar todo el agua requiere 49 945 x 40,7 = 2 032 762 kJ, asi que no alcanza para vaporizar todo.", porque: "Para vaporizar multiplicamos los moles de agua por el DeltaH de vaporizacion (Q = n x DeltaHvap), a 100 C y 1 atm: 49 945 x 40,7 = 2 032 762 kJ. Como el dato del enunciado no se lee bien, usamos 40,7 kJ/mol (valor de tabla del agua) y conviene dejar escrita esa suposicion. El calculo usa todos los moles de agua, para saber si la energia alcanza o no para vaporizarla completa." },
            { paso: "Fraccion vaporizada = 1 490 797 / 2 032 762 = 0,7334. Vapor = 0,7334 x 49 945 = 36 630 mol (aprox. 660 kg). Liquido = 13 315 mol (aprox. 240 kg).", porque: "Como la energia sobrante (1 490 797 kJ) es menor que la necesaria para vaporizar todo (2 032 762 kJ), la fraccion vaporizada es el cociente 1 490 797 / 2 032 762 = 0,7334. Entonces el vapor es 0,7334 x 49 945 = 36 630 mol, y el resto queda liquido: 13 315 mol. El calor sobrante se usa solo para el cambio de fase y no para subir la temperatura. Por ultimo, m = n x M con M = 18,02 g/mol pasa los moles de vapor y de liquido a kg." },
            { paso: "Como la temperatura queda en 100 C con coexistencia de fases, no hace falta Cp del vapor.", porque: "Como todavia hay liquido y vapor coexistiendo, la temperatura queda fija en 100 C y el vapor no se calienta por encima de ese valor. Por eso el Cp del vapor (36,28 J/(mol K)) no se usa en ningun calculo. Es un dato de distraccion que conviene reconocer para no sumarlo por error." }
          ],
          resultado: "Final a 100 C y 1 atm con dos fases: liquido (aprox. 240 kg) y vapor (aprox. 660 kg). Curva: tramo de calentamiento del hielo, meseta de fusion, calentamiento del liquido, meseta de vaporizacion (incompleta)."
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
            { paso: "Reaccion: 2 HCl(ac) + Ba(OH)2(ac) -> BaCl2(ac) + 2 H2O(l). Neta: H+ + OH- -> H2O.", porque: "Identificamos una neutralizacion de acido fuerte (HCl) con base fuerte (Ba(OH)2), que da sal y agua. Balanceamos con 2 HCl por cada Ba(OH)2, para que haya 2 H+ por cada 2 OH- y 2 Cl- por cada Ba(2+). La ecuacion neta H+ + OH- -> H2O es la que explica el pH. Error tipico: dejar el HCl sin el coeficiente 2." },
            { paso: "n(H+) = 9 L x 0,9 mol/L = 8,1 mol. n(OH-) = 12 L x 0,3 mol/L x 2 = 7,2 mol (cada Ba(OH)2 aporta 2 OH-).", porque: "Como HCl y Ba(OH)2 son electrolitos fuertes, se disocian por completo: cada HCl aporta 1 H+ y cada Ba(OH)2 aporta 2 OH-. Calculamos n = M x V con V en litros: n(H+) = 9 L x 0,9 mol/L = 8,1 mol y n(OH-) = 12 L x 0,3 mol/L x 2 = 7,2 mol. Error comun: olvidar el factor 2 del hidroxido de bario." },
            { paso: "Sobra H+: 8,1 - 7,2 = 0,9 mol. Volumen final = 21 L (aditivos).", porque: "H+ y OH- reaccionan 1 a 1, asi que si hay mas H+ que OH- queda H+ sin neutralizar. Entonces el exceso es 8,1 - 7,2 = 0,9 mol de H+, y para la concentracion usamos el volumen total, 9 L + 12 L = 21 L, como indica el enunciado. Verificar cual ion esta en exceso antes de restar." },
            { paso: "[H+] = 0,9 / 21 = 0,0429 mol/L. pH = -log(0,0429) = 1,37.", porque: "Con el exceso de H+ (0,9 mol) y el volumen final de 21 L obtenemos [H+] = 0,9 / 21 = 0,0429 M. Luego el pH es -log[H+] = 1,37, un valor acido, como corresponde a un exceso de acido. Error comun: usar el volumen parcial de 9 L." }
          ],
          resultado: "pH = 1,37 (medio acido)."
        },
        {
          parte: "b)",
          pasos: [
            { paso: "HClO(ac) <-> H+ + ClO-. Base conjugada: ClO- (ion hipoclorito).", porque: "Segun Bronsted-Lowry un acido es dador de H+, y su base conjugada es la especie que queda al perderlo. Escribimos HClO <-> H+ + ClO-, asi que la base conjugada es ClO- (ion hipoclorito) y su carga es -1. Escribir la disociacion ayuda a ver la carga de la base conjugada." },
            { paso: "HF(ac) <-> H+ + F-. Base conjugada: F- (ion fluoruro).", porque: "Aplicamos el mismo criterio de Bronsted-Lowry: el HF pierde su H+ y la especie resultante es el F- (ion fluoruro). Como el acido es neutro, la base queda con carga -1, lo que confirma la carga del paso anterior. Con esto identificamos la base conjugada del HF antes de ordenarlas." },
            { paso: "HCN(ac) <-> H+ + CN-. Base conjugada: CN- (ion cianuro).", porque: "Aplicamos el mismo criterio: el HCN pierde su H+ y queda CN- (ion cianuro), con carga -1 porque el acido era neutro. Con las tres bases conjugadas identificadas (ClO-, F- y CN-), podemos pasar a comparar su basicidad." },
            { paso: "Kb = Kw / Ka: Kb(CN-) = 10^-5; Kb(ClO-) = 10^-7; Kb(F-) = 10^-11.", porque: "Para comparar la basicidad usamos Kb, que se obtiene de Ka con Ka x Kb = Kw a 25 C, es decir Kb = Kw/Ka. Calculamos Kb(CN-) = 10^-14 / 10^-9 = 10^-5, Kb(ClO-) = 10^-7 y Kb(F-) = 10^-11. Error comun: usar Ka en lugar de Kb para las bases." },
            { paso: "Orden de basicidad: CN- > ClO- > F-. Cuanto mas fuerte es el acido, mas debil es su base conjugada (HF es el acido mas fuerte y F- la base mas debil).", porque: "Como Kb = Kw/Ka es inversa a Ka, un acido mas debil (Ka chica) tiene una base conjugada mas fuerte (Kb grande). Con los Kb calculados (10^-5, 10^-7 y 10^-11) el orden de mayor a menor basicidad queda CN- > ClO- > F-. Verificar el sentido: HF es el acido mas fuerte (Ka = 10^-3), y F- la base mas debil." }
          ],
          resultado: "Mayor a menor basicidad: CN- (cianuro) > ClO- (hipoclorito) > F- (fluoruro)."
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
            { paso: "Celdas: cubica simple = 1 particula por celda; cubica centrada en el cuerpo (BCC) = 2; cubica centrada en caras (FCC) = 4.", porque: "Contamos los atomos que pertenecen a la celda: cada atomo de vertice es compartido por 8 celdas y aporta 1/8, cada atomo de cara es compartido por 2 y aporta 1/2, y el atomo del centro aporta 1 completo. Asi, la cubica simple tiene 1, la BCC 2 y la FCC 4. Error comun: contar todos los atomos que se ven sin dividir por los compartidos." },
            { paso: "BCC = 2 = el doble de la simple (no el triple).", porque: "Calculamos el cociente BCC / cubica simple = 2 / 1 = 2, no 3, para la primera parte de la sentencia. Por eso la afirmacion del triple es falsa, aunque la BCC tenga mas particulas. Verificar siempre el cociente y no solo si una cantidad es mayor que la otra." },
            { paso: "Un tercio de FCC = 4/3 = 1,33, que tampoco es 2.", porque: "Esta comparacion verifica la segunda parte: ponemos la BCC (2) frente a un tercio de la FCC, 4/3 = 1,33, y vemos si coinciden. Como no coinciden, la sentencia es falsa aunque la primera parte se cumpla. Conviene chequear cada parte de una afirmacion por separado." }
          ],
          resultado: "Falsa: la BCC tiene el doble de particulas que la cubica simple, no el triple, y 2 no es un tercio de 4."
        },
        {
          parte: "b)",
          pasos: [
            { paso: "Lewis: CH4: C central con 4 enlaces simples a H. H2O: O con 2 enlaces O-H y 2 pares libres. HCl: H-Cl simple, Cl con 3 pares libres.", porque: "Dibujamos la estructura de Lewis contando electrones de valencia: CH4 con 4 enlaces simples, H2O con 2 enlaces y 2 pares libres en el O, y HCl con un enlace y 3 pares libres en el Cl. Con los pares libres y los enlaces deducimos la geometria y si la molecula es polar, datos necesarios para la fuerza intermolecular. Verificar que cada atomo cumpla el octeto (o el dueto en H)." },
            { paso: "Fuerza dominante: CH4 = London (dispersion). HCl = dipolo-dipolo (y London). H2O = puentes de hidrogeno.", porque: "El CH4 es apolar por su geometria tetraedrica simetrica, asi que solo presenta fuerzas de London. El HCl es polar, pero su H esta unido a Cl, que no es F, O ni N, por eso la fuerza dominante es dipolo-dipolo. Entonces el H2O, con H unido a O, forma puentes de hidrogeno, la mas intensa de las tres." },
            { paso: "Orden creciente de intensidad: CH4 < HCl < H2O.", porque: "Ordenamos por intensidad: puente de hidrogeno > dipolo-dipolo > London. Leido de menor a mayor, el orden es CH4 (London) < HCl (dipolo-dipolo) < H2O (puente de hidrogeno). El criterio es el tipo de fuerza dominante, no la masa molar." },
            { paso: "Punto de ebullicion normal: temperatura a la que la presion de vapor del liquido iguala 1 atm. Presion de vapor: presion del vapor en equilibrio con el liquido a una temperatura dada.", porque: "Definimos el punto de ebullicion normal como la temperatura a la que la presion de vapor del liquido iguala 1 atm. La presion de vapor es la que ejerce el vapor en equilibrio con su liquido a una temperatura dada. Como la presion de vapor depende de la temperatura, siempre se compara a igual T." },
            { paso: "Mayor punto de ebullicion: H2O (puentes de hidrogeno, aprox. 100 C frente a -85 C del HCl y -162 C del CH4). Mayor presion de vapor a igual temperatura: CH4, por tener las fuerzas intermoleculares mas debiles.", porque: "Cuanto mas intensas son las fuerzas intermoleculares, mas energia se necesita para separar las moleculas y pasarlas al gas: por eso el H2O, con puentes de hidrogeno, tiene el punto de ebullicion mas alto (aprox. 100 C frente a -85 C del HCl y -162 C del CH4). Con fuerzas mas debiles, como las de London del CH4, las moleculas escapan mas facilmente, y por eso el CH4 tiene la mayor presion de vapor a igual temperatura. Error comun: invertir la relacion entre fuerza y presion de vapor." }
          ],
          resultado: "Dominantes: CH4 London; HCl dipolo-dipolo; H2O puentes de hidrogeno. Orden creciente: CH4 < HCl < H2O. Mayor punto de ebullicion: H2O. Mayor presion de vapor: CH4."
        },
        {
          parte: "c)",
          pasos: [
            { paso: "La sublimacion ocurre a presiones por debajo de la del punto triple. Por encima, el solido funde o pasa a liquido antes de sublimar.", porque: "El punto triple es la unica combinacion de P y T donde coexisten solido, liquido y vapor. Si la presion esta por debajo de la del punto triple, el liquido no puede existir a ninguna temperatura y el solido pasa directo a vapor: eso es la sublimacion. Por eso la sublimacion se analiza a presiones menores que la del punto triple." },
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
            { paso: "Calor liberado por mol de H2: 8232 kJ / 200 mol = 41,16 kJ/mol. Como el calor sale del sistema, DeltaH < 0.", porque: "Si el sistema libera calor, el DeltaH de la reaccion es negativo por convencion (proceso exotermico). El dato corresponde a 200 mol de H2, asi que dividimos: 8232 / 200 = 41,16 kJ/mol, con signo negativo. Error tipico: dejar el signo positivo al pasar el calor liberado." },
            { paso: "Ecuacion: CO(g) + H2O(g) -> CO2(g) + H2(g), DeltaH = -41,16 kJ (por mol de H2 formado).", porque: "Como los coeficientes son 1 para todas las especies, el DeltaH de la ecuacion escrita corresponde a formar 1 mol de H2 y 1 mol de CO2. Por eso usamos directamente el valor de -41,16 kJ de la etapa anterior. Verificar que no haya coeficientes que cambien ese DeltaH." },
            { paso: "Control: DeltaH = DeltaHf(CO2) - DeltaHf(CO) - DeltaHf(H2O) da DeltaHf(CO) = -110,53 kJ/mol, valor coherente con la tabla.", porque: "Usamos la forma de Hess con entalpias de formacion: DeltaH = suma de DeltaHf de productos menos suma de DeltaHf de reactivos. Aqui sirve de control: DeltaH = DeltaHf(CO2) - DeltaHf(CO) - DeltaHf(H2O) = -41,16 da DeltaHf(CO) = -110,53 kJ/mol, valor coherente con la tabla. Error comun: invertir la resta." }
          ],
          resultado: "CO(g) + H2O(g) -> CO2(g) + H2(g)  DeltaH = -41,16 kJ."
        },
        {
          parte: "b)",
          pasos: [
            { paso: "Reaccion de combustion: CO(g) + 1/2 O2(g) -> CO2(g).", porque: "La combustion es la reaccion del compuesto con O2 para dar CO2. La entalpia de combustion estandar se define para 1 mol del combustible, por eso escribimos CO + 1/2 O2 -> CO2, con media mol de O2 para balancear el oxigeno. Verificar que el coeficiente del O2 sea fraccionario y no se multiplique la ecuacion." },
            { paso: "Hess: (CO + H2O -> CO2 + H2, DeltaH = -41,16) + (H2 + 1/2 O2 -> H2O(g), DeltaH = -241,82) = CO + 1/2 O2 -> CO2, DeltaH = -282,98 kJ.", porque: "La ley de Hess dice que, si una reaccion se obtiene sumando otras, su DeltaH es la suma de los DeltaH de esas etapas. Sumamos la reaccion del punto a) con la formacion del agua: -41,16 + (-241,82) = -282,98 kJ, y al hacerlo se cancelan H2 y H2O(g). Para que esto funcione, las ecuaciones deben sumarse exactamente." },
            { paso: "Control: DeltaHc = DeltaHf(CO2) - DeltaHf(CO) = -393,51 - (-110,53) = -282,98 kJ/mol.", porque: "Como el O2 tiene DeltaHf = 0 (es un elemento en su forma estable), la combustion se calcula solo con DeltaHf(CO2) menos DeltaHf(CO). Con -393,51 y -110,53 obtenemos -393,51 - (-110,53) = -282,98 kJ/mol, el mismo valor que por Hess, lo que confirma el resultado. Error comun: incluir el O2 en la cuenta o invertir la resta." }
          ],
          resultado: "CO(g) + 1/2 O2(g) -> CO2(g)  DeltaHc = -282,98 kJ/mol (aprox. -283,0 kJ/mol)."
        },
        {
          parte: "c)",
          pasos: [
            { paso: "Calor transferido: Q = 0,70 x 8232 kJ = 5762,4 kJ.", porque: "El enunciado indica que solo el 70 % del calor de la reaccion pasa al etanol, asi que multiplicamos 8232 kJ por 0,70: Q = 5762,4 kJ. Es el calor realmente disponible para calentar y vaporizar el etanol. Verificar el porcentaje antes de seguir, porque es facil olvidarlo." },
            { paso: "Por mol de etanol: calentar de 25 a 78 C: 0,112 kJ/(mol.C) x 53 C = 5,936 kJ/mol. Vaporizar a 78 C: 43,5 kJ/mol. Total: 49,436 kJ/mol.", porque: "Para llevar cada mol de etanol de 25 C a vapor a 78 C sumamos dos etapas: calentar el liquido con Q = n x Cp x DeltaT, con Cp = 0,112 kJ/(mol C) y DeltaT = 53 C (0,112 x 53 = 5,936 kJ/mol), y vaporizar con DeltaHvap = 43,5 kJ/mol. Entonces el total es 49,436 kJ/mol. La vaporizacion ocurre a 78 C, que es el punto de ebullicion normal, asi que no hace falta otra etapa. Error comun: omitir el calentamiento." },
            { paso: "n(etanol) = 5762,4 / 49,436 = 116,56 mol.", porque: "Dividimos el calor disponible entre el calor necesario por mol para saber cuantos moles de etanol se pueden calentar y vaporizar: n = Q / q = 5762,4 / 49,436 = 116,56 mol. Es una division porque a mayor calor por mol, menos moles. Verificar que las unidades den mol: kJ entre kJ/mol." },
            { paso: "M(C2H6O) = 46,07 g/mol. m = 116,56 x 46,07 = 5370 g.", porque: "Multiplicamos los moles de etanol por la masa molar del C2H6O (46,07 g/mol, suma de 2 C, 6 H y 1 O): m = 116,56 x 46,07 = 5370 g. Al final dividimos por 1000 para pasar de g a kg, con lo que queda 5,37 kg. Verificar que la masa molar corresponda al etanol." },
            { paso: "Supuesto: el calor de la reaccion del enunciado es 8232 kJ (el dato de 200 mol de H2).", porque: "El enunciado da 8232 kJ para la formacion de 200 mol de H2 y no da otra cantidad, por eso tomamos ese calor como el total disponible. Es un supuesto de lectura del problema y conviene escribirlo, porque cambiaria si la reaccion se hiciera a otra escala. Verificar que el dato usado coincida con el del enunciado." }
          ],
          resultado: "Aprox. 5,37 kg de vapor de etanol a 78 C y 1 atm."
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
            { paso: "Reaccion: CH3COOH(ac) + NaOH(ac) -> CH3COONa(ac) + H2O(l).", porque: "Identificamos la reaccion: un acido debil (CH3COOH) con una base fuerte (NaOH) da la sal del acido y agua. La relacion es 1:1 porque el acido tiene un solo H ionizable y el NaOH aporta un OH-, asi que escribimos CH3COOH + NaOH -> CH3COONa + H2O. Error comun: tratar el acido acetico como si fuera fuerte." },
            { paso: "Reactivos: acido acetico (acido etanoico) e hidroxido de sodio. Productos: acetato de sodio (etanoato de sodio) y agua.", porque: "Nombramos todos los reactivos y productos porque el enunciado lo pide. Los nombres sistematicos son acido etanoico (reactivo) y etanoato de sodio (producto), y los usuales son acido acetico y acetato de sodio. Conviene escribir ambos para que la respuesta quede completa." },
            { paso: "Fenolftaleina: incolora antes del punto de equivalencia (medio acido) y rosa despues (medio basico, pH mayor a aprox. 8,2).", porque: "La fenolftaleina es un indicador que vira por encima de pH aprox. 8,2. Antes del punto de equivalencia la solucion es acida, por debajo de ese valor, asi que queda incolora. Despues del PE hay exceso de base y el pH supera 8,2, por eso se vuelve rosa." }
          ],
          resultado: "CH3COOH + NaOH -> CH3COONa + H2O. Fenolftaleina: incolora antes del PE, rosa despues."
        },
        {
          parte: "b)",
          pasos: [
            { paso: "n(NaOH) = 0,1250 mol/L x 0,01785 L = 2,231 x 10^-3 mol. Relacion 1:1, luego n(acido) = 2,231 x 10^-3 mol en 3 mL.", porque: "Como la reaccion es 1:1, los moles de NaOH gastados hasta el viraje son exactamente los moles de acido de la muestra. Calculamos n = M x V con 0,01785 L de titulante: n(NaOH) = 0,1250 x 0,01785 = 2,231 x 10^-3 mol. Error comun: usar los mL sin pasarlos a litros." },
            { paso: "[acido] = 2,231 x 10^-3 / 0,003 L = 0,744 mol/L.", porque: "La concentracion del vinagre es moles de acido dividido el volumen de la muestra analizada: C = 2,231 x 10^-3 mol / 0,003 L = 0,744 mol/L. Usamos los 3 mL de muestra, no el volumen del titulante, que son distintos. Error comun: dividir por los 17,85 mL." },
            { paso: "% m/V: 0,744 x 60,05 g/L = 44,7 g/L = 4,47 % m/V.", porque: "La etiqueta usa % m/V (gramos de soluto cada 100 mL), asi que pasamos la molaridad a gramos por litro: 0,744 mol/L x 60,05 g/mol = 44,7 g/L. Como 44,7 g/L equivale a 4,47 g cada 100 mL, el resultado es 4,47 % m/V. Verificar la conversion de L a mL." },
            { paso: "Comparacion: la etiqueta declara 5% m/V, el valor medido es 4,47 % m/V (aprox. 10% menos). No cumple con lo declarado.", porque: "Para decidir si el vinagre cumple, comparamos el valor medido con el declarado en la etiqueta: 4,47 % frente a 5 % m/V. Como el valor medido es menor (aprox. 10 % menos), el vinagre no cumple con lo declarado, que es la conclusion que pide la parte b)." },
            { paso: "Nota: si el criterio fuera el minimo legal de 4 % m/V (a verificar en el Codigo Alimentario Argentino), cumpliria.", porque: "El enunciado no define un minimo legal, asi que la conclusion depende del criterio elegido: contra la etiqueta de 5 % m/V no cumple, y contra un minimo de 4 % m/V cumpliria. Ese minimo es un dato externo que debemos confirmar en el Codigo Alimentario Argentino antes de dar una conclusion definitiva." }
          ],
          resultado: "4,47 % m/V (0,744 M). No cumple con el 5% declarado en la etiqueta."
        },
        {
          parte: "c)",
          pasos: [
            { paso: "Reaccion: 2 CH3COOH(ac) + Ca(OH)2(ac) -> (CH3COO)2Ca(ac) + 2 H2O(l).", porque: "El Ca(OH)2 se disocia en Ca2+ y 2 OH-, asi que cada mol de base neutraliza 2 mol de acido. Por eso la ecuacion 2 CH3COOH + Ca(OH)2 -> (CH3COO)2Ca + 2 H2O refleja la relacion 2:1 con el acido acetico. Error comun: usar la relacion 1:1 que corresponde al NaOH." },
            { paso: "n(acido) en 5 mL = 0,744 mol/L x 0,005 L = 3,719 x 10^-3 mol.", porque: "Usamos la concentracion de b) (0,744 M) y el volumen de muestra de 5 mL para obtener los moles de acido: n = M x V = 0,744 x 0,005 = 3,719 x 10^-3 mol. Verificar que el volumen este en litros, porque la molaridad se usa con L." },
            { paso: "n(Ca(OH)2) = n(acido)/2 = 1,859 x 10^-3 mol (el Ca(OH)2 aporta 2 OH-).", porque: "Con la relacion 2:1 del acido respecto del Ca(OH)2, los moles de base son la mitad de los de acido: n(Ca(OH)2) = 3,719 x 10^-3 / 2 = 1,859 x 10^-3 mol. Es el paso que transforma la cantidad de acido en la de base necesaria, porque el Ca(OH)2 aporta 2 OH- por mol." },
            { paso: "V = 1,859 x 10^-3 mol / 0,1250 mol/L = 0,01487 L = 14,9 mL.", porque: "Despejamos el volumen de titulante de n = M x V como V = n / M: V = 1,859 x 10^-3 / 0,1250 = 0,01487 L, o sea 14,9 mL. Este resultado sirve como control frente a los 29,75 mL que se gastarian con NaOH de la misma molaridad." },
            { paso: "Control: con NaOH serian 29,75 mL; con Ca(OH)2 de igual molaridad se gasta la mitad.", porque: "Comparamos con la titulacion con NaOH de la misma molaridad: el NaOH reacciona 1:1 y el Ca(OH)2 aporta el doble de OH-, asi que el volumen de Ca(OH)2 debe ser la mitad: 29,75 / 2 = 14,9 mL. Este control sirve para detectar errores de factor 2 antes de entregar el resultado." }
          ],
          resultado: "Aprox. 14,9 mL de Ca(OH)2 0,1250 M."
        },
        {
          parte: "d)",
          pasos: [
            { paso: "Equilibrio: CH3COOH <-> H+ + CH3COO-. Ka = [H+][CH3COO-]/[CH3COOH] = 1,8 x 10^-5.", porque: "Escribimos el equilibrio de disociacion del acido acetico, CH3COOH <-> H+ + CH3COO-, con Ka = [H+][CH3COO-]/[CH3COOH] = 1,8 x 10^-5. Como el acido es debil, solo una parte se ioniza, por eso [H+] no es igual a C. La Ka es la herramienta para calcular esa fraccion." },
            { paso: "Balance de carga: [H+] = [CH3COO-] + [OH-]. Balance de masa: C = [CH3COOH] + [CH3COO-], con C = 0,744 M.", porque: "El balance de carga expresa que la solucion es neutra: [H+] = [CH3COO-] + [OH-]. El balance de masa indica que el acido total C = 0,744 M se reparte entre la forma sin disociar y la disociada: C = [CH3COOH] + [CH3COO-]. Con ambos balances planteamos el sistema de ecuaciones." },
            { paso: "Suposiciones: [OH-] despreciable (medio acido); [H+] = [CH3COO-] = x; ionizacion pequena, asi que [CH3COOH] = C - x = C.", porque: "Hacemos dos suposiciones: el [OH-] es despreciable porque la solucion es acida, y la ionizacion es chica, asi que [CH3COOH] = C - x es aprox. C. Con [H+] = [CH3COO-] = x, estas simplificaciones permiten despejar x directamente. La validez se comprueba al final con x/C menor a 5 %." },
            { paso: "x = sqrt(Ka x C) = sqrt(1,8 x 10^-5 x 0,744) = 3,66 x 10^-3 M. Verificacion: x/C = 0,49% < 5%, la aproximacion es valida. (Resolviendo la cuadratica se obtiene pH 2,44 tambien.)", porque: "Con [H+] = x, la Ka queda x^2/(C - x), que con x chico frente a C se simplifica a x^2/C. Despejamos x = sqrt(Ka x C) = sqrt(1,8 x 10^-5 x 0,744) = 3,66 x 10^-3 M. Verificar la comprobacion x/C = 0,49 % < 5 %, porque sin ella la aproximacion no esta justificada." },
            { paso: "pH = -log(3,66 x 10^-3) = 2,44. Si se usara 5% m/V (0,833 M) el pH seria aprox. 2,41.", porque: "Calculamos el pH como -log[H+] con x = 3,66 x 10^-3 M, que da pH = 2,44. Comparamos con el 5 % m/V (0,833 M) solo como referencia, porque la pregunta es el pH de la solucion tal como esta, y ese valor daria aprox. 2,41. Error comun: usar la concentracion de la etiqueta sin verificar cual se pide." }
          ],
          resultado: "pH inicial aprox. 2,44."
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
            { paso: "Supuesto: 10 mol de agua es el producto real. Moles de H2SO4 que reaccionan = 10 / 2 = 5 mol.", porque: "Por la ecuacion, 1 mol de H2SO4 produce 2 mol de H2O, asi que 10 mol de agua corresponden a 10 / 2 = 5 mol de acido. Tomamos el agua como producto real, y el rendimiento se aplica en el paso siguiente. Escribir este supuesto es importante porque cambia la cantidad de acido a usar." },
            { paso: "Con rendimiento 85%: n(H2SO4) necesarios = 5 / 0,85 = 5,882 mol.", porque: "Con rendimiento de 85 % solo se aprovecha ese porcentaje de lo que se consume, asi que para obtener 5 mol reales hay que partir de mas acido: n(H2SO4) = 5 / 0,85 = 5,882 mol. Es la misma logica de dividir por el rendimiento. Error comun: multiplicar por 0,85, lo que daria menos acido del necesario." },
            { paso: "M(H2SO4) = 98,08 g/mol. m = 5,882 x 98,08 = 576,9 g de H2SO4 puro.", porque: "Multiplicamos los moles de H2SO4 por su masa molar (M = 98,08 g/mol, con 2 x 1,008 + 32,07 + 4 x 16,00) para pasar a gramos de acido puro: m = 5,882 x 98,08 = 576,9 g. Ese paso convierte la cantidad de sustancia en una masa que se puede pesar. Verificar la masa molar del H2SO4." },
            { paso: "Solucion al 98% m/m: m(solucion) = 576,9 / 0,98 = 588,7 g.", porque: "Como la concentracion es 98 % m/m, el acido puro es el 98 % de la masa de la solucion. Por eso dividimos: m(solucion) = 576,9 / 0,98 = 588,7 g. Es el mismo criterio que el de rendimiento: si lo util es una fraccion, se divide para obtener el total. Error tipico: multiplicar por 0,98, lo que daria una masa menor." },
            { paso: "V = 588,7 g / 1,83 g/mL = 321,7 mL.", porque: "Usamos la densidad de la solucion (1,83 g/mL) para pasar de masa a volumen con V = m/d, ya que el acido se toma como solucion y se mide en volumen. Calculamos V = 588,7 g / 1,83 g/mL = 321,7 mL. Verificar que el resultado quede en mL, porque la densidad esta en g/mL." }
          ],
          resultado: "Aprox. 322 mL (0,322 L) de solucion de H2SO4 98% m/m."
        },
        {
          parte: "b)",
          pasos: [
            { paso: "Relacion: 1 H2SO4 : 2 HBr. Para 5,882 mol de H2SO4 se necesitan 11,76 mol de HBr.", porque: "Usamos la relacion 1 H2SO4 : 2 HBr para calcular cuanto HBr se necesita con todo el acido disponible: 5,882 x 2 = 11,76 mol. Ese valor se compara con los 15 mol disponibles para ver cual reactivo se agota primero. Error comun: usar la relacion 1:1." },
            { paso: "Hay 15 mol de HBr, por lo tanto el HBr esta en exceso.", porque: "Como hay 15 mol de HBr y solo se necesitan 11,76 mol, sobra HBr y queda en exceso. Eso significa que el H2SO4 se agota primero y limita la reaccion. Verificamos esta conclusion con el criterio de cociente del paso siguiente." },
            { paso: "Control por cociente n/coef: H2SO4 = 5,882 / 1 = 5,88; HBr = 15 / 2 = 7,5. El minimo es el H2SO4.", porque: "Para identificar el limitante dividimos cada cantidad disponible por su coeficiente y elegimos el menor valor: H2SO4 = 5,882 / 1 = 5,88 y HBr = 15 / 2 = 7,5. El minimo es el H2SO4, por lo tanto es el reactivo limitante. Es necesario porque los coeficientes son distintos y comparar moles absolutos no alcanza." },
            { paso: "Exceso de HBr = 15 - 11,76 = 3,24 mol.", porque: "Calculamos el exceso restando a los moles de HBr disponibles los que reaccionan: 15 - 11,76 = 3,24 mol. Usamos moles de la misma sustancia para poder restar. Verificar que el resultado sea positivo, lo que confirma que el HBr es el que sobra." }
          ],
          resultado: "Reactivo limitante: H2SO4. Exceso: HBr, 3,24 mol."
        },
        {
          parte: "c)",
          pasos: [
            { paso: "SO2: S central con dos enlaces con O en resonancia (S=O y S-O, orden de enlace 1,5 en cada uno), 1 par libre en S. Geometria angular, molecula polar.", porque: "Contamos los 18 electrones de valencia del SO2 para armar Lewis: el S queda con un par libre y los dos enlaces S-O se reparten en resonancia (orden 1,5). El par libre da geometria angular y, como los enlaces no se cancelan, la molecula es polar. Error tipico: dibujar el SO2 lineal." },
            { paso: "Br2: Br-Br con un enlace simple; cada Br tiene 3 pares libres. Molecula apolar.", porque: "Cada Br tiene 7 electrones de valencia: comparte uno en el enlace simple y completa el octeto con 3 pares libres. Como los dos atomos son identicos no hay diferencia de electronegatividad, asi que la molecula es apolar. Verificar que cada atomo cumpla el octeto." },
            { paso: "Supuesto: la misma temperatura es 25 C. SO2 tiene punto de ebullicion de -10 C, asi que es gas. Br2 tiene 70 electrones y fuerzas de London fuertes, punto de ebullicion 58,8 C, asi que es liquido.", porque: "Como el enunciado no informa la temperatura, suponemos 25 C. El estado de cada sustancia depende de si esa temperatura supera su punto de ebullicion: SO2 (-10 C) queda gas y Br2 (58,8 C) queda liquido. Conviene aclarar el supuesto en la respuesta." }
          ],
          resultado: "SO2 gas y Br2 liquido a 25 C, por la intensidad de las fuerzas intermoleculares (London en Br2 frente a dipolo-dipolo y masa menor en SO2)."
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
            { paso: "Propano: C3H8(g) + 5 O2(g) -> 3 CO2(g) + 4 H2O(l). DeltaHc = [3(-393,5) + 4(-286,0)] - (-103,85) = -2220,65 kJ/mol.", porque: "Aplicamos DeltaH = suma de DeltaHf de productos menos suma de DeltaHf de reactivos: 3(-393,5) + 4(-286,0) - (-103,85) = -2220,65 kJ/mol. El O2 no aporta porque su DeltaHf es cero, y el agua se toma liquida porque es el estado de la tabla. Error comun: olvidar el coeficiente 4 del agua." },
            { paso: "Carbon: C(s) + O2(g) -> CO2(g). DeltaHc = -393,5 kJ/mol.", porque: "Para el carbon la combustion es C(s) + O2 -> CO2, con un mol de C por mol de combustible. Como C(s) y O2 son elementos en su forma estable, su DeltaHf es cero, y por eso el DeltaHf del CO2 da directamente el DeltaH de combustion: -393,5 kJ/mol. Verificar que el valor sea negativo." },
            { paso: "Por mol de combustible con igual costo: el propano libera 2220,65 / 393,5 = 5,6 veces mas calor que el carbon por mol.", porque: "Como el costo es el mismo por mol, el criterio es el calor liberado por mol: 2220,65 / 393,5 = 5,6, o sea el propano libera casi 6 veces mas calor que el carbon. Por eso el propano es la opcion mas conveniente. Conviene comparar en la misma base (por mol de combustible), tal como pide el enunciado." },
            { paso: "Tambien se puede comparar por mol de carbono: el propano tiene 3 C por mol, pero el criterio pedido es por mol de combustible.", porque: "Es una comprobacion extra: por mol de carbono el propano tiene 3 C, y 2220,65 / 3 = 740 kJ por mol de C frente a 393,5 kJ del carbon. La conclusion favorable al propano se mantiene, aunque la respuesta pedida es por mol de combustible. Sirve para ver que el resultado no depende de la base elegida." }
          ],
          resultado: "Propano: -2220,7 kJ/mol. Carbon: -393,5 kJ/mol. Mas conveniente: propano."
        },
        {
          parte: "b)",
          pasos: [
            { paso: "Gases en la reaccion: reactivos 1 + 5 = 6 mol; productos 3 mol (CO2). El H2O es liquida y no cuenta.", porque: "Para saber si el volumen cambia a presion constante contamos solo los moles de gas: reactivos 1 + 5 = 6 mol y productos 3 mol de CO2. El agua es liquida y su volumen es despreciable frente al de los gases, por eso no entra en el balance. Error comun: contarla como gas." },
            { paso: "Delta n(gas) = 3 - 6 = -3 mol. A P constante, al bajar el numero de moles gaseosos baja el volumen (dV < 0).", porque: "A presion y temperatura constantes, V es proporcional a n (gas ideal), asi que pasar de 6 a 3 mol de gas reduce el volumen. Entonces Delta n(gas) = 3 - 6 = -3 mol y DeltaV < 0. Verificar el signo del cambio, porque define el sentido del trabajo." },
            { paso: "W = -P DeltaV > 0: el entorno realiza trabajo sobre el sistema (compresion).", porque: "Con W = -P DeltaV, una compresion (DeltaV negativo) da W positivo, lo que significa que el entorno hace trabajo sobre el sistema. Es un asunto de signo, no de magnitud. Error tipico: invertir el signo y decir que el sistema trabaja sobre el entorno." }
          ],
          resultado: "El entorno realiza trabajo sobre el sistema (DeltaV < 0)."
        },
        {
          parte: "c)",
          pasos: [
            { paso: "Masa de agua: 0,70 x 800 kg = 560 kg = 560 000 g. n(H2O) = 560 000 / 18,02 = 31 077 mol.", porque: "Primero calculamos la masa de agua como el 70 % de las 800 kg de nueces: 0,70 x 800 kg = 560 kg. Luego pasamos a gramos y dividimos por 18,02 g/mol para obtener n(H2O) = 560 000 / 18,02 = 31 077 mol, porque el calor del paso siguiente es por mol. Verificar la conversion de kg a g." },
            { paso: "Por mol de agua: calentar de 25 a 100 C: 75,29 J/(K.mol) x 75 K = 5,647 kJ/mol. Vaporizar: 40,88 kJ/mol. Total = 46,527 kJ/mol.", porque: "Cada mol de agua debe llevarse de 25 a 100 C con calor sensible: 75,29 J/(K mol) x 75 K = 5,647 kJ/mol. Despues se vaporiza a 100 C con DeltaHvap = 40,88 kJ/mol, y la suma da 46,527 kJ/mol. Conviene pasar el Cp de J a kJ antes de sumar." },
            { paso: "Calor necesario: Q = 31 077 x 46,527 = 1,446 x 10^6 kJ.", porque: "Como cada mol de agua necesita la misma energia (46,527 kJ/mol), el calor total es esa cantidad por el numero de moles: Q = n x q = 31 077 x 46,527 = 1,446 x 10^6 kJ. Es un calculo de proporcionalidad. Error comun: usar la masa en kg en lugar de los moles." },
            { paso: "n(propano) = Q / 2220,65 kJ/mol = 651 mol.", porque: "Dividimos el calor necesario entre el calor liberado por mol de propano para obtener cuantos moles hay que quemar: n = Q / |DeltaHc| = 1,446 x 10^6 / 2220,65 = 651 mol. Redondear solo al final evita errores acumulados. El resultado es coherente con el calor involucrado." },
            { paso: "Supuestos: 100% del calor de combustion va al agua, toda el agua se evapora a 100 C y 1 atm, y no se considera calentar la materia seca.", porque: "Suponemos que todo el calor de combustion se usa en calentar y evaporar el agua, sin perdidas al ambiente ni calentamiento de la materia seca, porque el enunciado no da esos datos. Con estos supuestos el resultado es una estimacion ideal. En la practica haria falta mas combustible." }
          ],
          resultado: "Aprox. 651 mol de propano."
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
            { paso: "C = 50 g/L / 60,05 g/mol = 0,8326 mol/L.", porque: "Un 5 % m/V significa 5 g de acido cada 100 mL, o sea 50 g/L. Para pasar a molaridad dividimos por la masa molar del acido acetico (60,05 g/mol): C = 50 / 60,05 = 0,8326 mol/L. Error comun: tomar el 5 % como 5 M." },
            { paso: "Equilibrio: CH3COOH <-> H+ + CH3COO-. Ka = [H+][CH3COO-]/[CH3COOH].", porque: "Escribimos el equilibrio de disociacion del acido acetico, CH3COOH <-> H+ + CH3COO-, y su Ka = [H+][CH3COO-]/[CH3COOH]. Como es un acido debil, el equilibrio esta muy desplazado hacia el acido sin disociar. Esa expresion permite despejar el pH a partir de C = 0,8326 mol/L." },
            { paso: "Balance de carga: [H+] = [CH3COO-] + [OH-]. Balance de masa: C = [CH3COOH] + [CH3COO-].", porque: "El balance de carga expresa la electroneutralidad: [H+] = [CH3COO-] + [OH-], o sea las cargas positivas compensan a las negativas. El balance de masa indica que C = 0,8326 M se reparte entre la forma sin disociar y la disociada. Con ambos balances se puede plantear el sistema de ecuaciones." },
            { paso: "Suposiciones: [OH-] despreciable; [H+] = [CH3COO-] = x; x << C. Entonces x = sqrt(Ka x C) = sqrt(1,75 x 10^-5 x 0,8326) = 3,82 x 10^-3 M.", porque: "Hacemos dos suposiciones: el [OH-] es despreciable en medio acido, y [H+] = [CH3COO-] = x con x << C. Con eso la Ka se simplifica a x^2/C, y despejando x = sqrt(Ka x C) = sqrt(1,75 x 10^-5 x 0,8326) = 3,82 x 10^-3 M. Error comun: aceptar este valor sin verificar la aproximacion, que se comprueba en el paso siguiente." },
            { paso: "Verificacion: x/C = 0,46%, valida. (Cuadratica exacta: x = 3,81 x 10^-3 M, pH igual.) pH = -log(3,81 x 10^-3) = 2,42.", porque: "Aceptamos la aproximacion x << C si x/C es menor a 5 %, y aqui x/C = 0,46 %, asi que es valida. Con esa concentracion el pH es -log(3,81 x 10^-3) = 2,42. La cuadratica exacta da el mismo pH, lo que confirma que la aproximacion no cambia el resultado." }
          ],
          resultado: "pH del vinagre aprox. 2,42."
        },
        {
          parte: "b)",
          pasos: [
            { paso: "alfa = [H+]/C = 3,81 x 10^-3 / 0,8326 = 4,6 x 10^-3.", porque: "El grado de ionizacion alfa es la fraccion del acido que se disocia: [H+] dividido C. Calculamos alfa = 3,81 x 10^-3 / 0,8326 = 4,6 x 10^-3, o sea 0,46 %, que cuantifica cuanto del acido se ioniza. Verificar que se use el C total y no la concentracion disociada." },
            { paso: "Control: alfa = sqrt(Ka/C) = sqrt(1,75 x 10^-5 / 0,8326) = 4,58 x 10^-3.", porque: "Para un acido debil con x << C, alfa = sqrt(Ka/C) se deduce de la misma aproximacion, y sirve como control independiente de x. Calculamos sqrt(1,75 x 10^-5 / 0,8326) = 4,58 x 10^-3. El resultado coincide con el de [H+]/C, lo que valida el calculo." }
          ],
          resultado: "alfa aprox. 0,46 %."
        },
        {
          parte: "c)",
          pasos: [
            { paso: "Volumen final = 5 + 95 = 100 mL. Factor de dilucion 5/100 = 1/20.", porque: "Al mezclar 5 mL de vinagre con 95 mL de agua sumamos los volumenes, como dice el enunciado: V final = 5 + 95 = 100 mL. El factor de dilucion es el volumen de vinagre sobre el volumen total, 5/100 = 1/20. Error comun: usar 5/95 o no contar el agua." },
            { paso: "C' = 0,8326 x 0,05 = 0,04163 mol/L.", porque: "En una dilucion se conservan los moles de acido (C x V), no la concentracion: C' = 0,8326 x 5/100 = 0,04163 mol/L. Es el paso que transforma la concentracion del vinagre en la de la solucion diluida." },
            { paso: "x = sqrt(Ka x C') = sqrt(1,75 x 10^-5 x 0,04163) = 8,54 x 10^-4 M. Verificacion: x/C' = 2%, aproximacion valida. (Incluyendo el agua, pH 3,07 igual.)", porque: "Usamos la misma aproximacion de acido debil con la nueva concentracion: x = sqrt(Ka x C') = sqrt(1,75 x 10^-5 x 0,04163) = 8,54 x 10^-4 M. Verificamos que x/C' = 2 %, menor que 5 %, asi que es valida. El aporte del agua es despreciable frente a 8,54 x 10^-4 M. Error comun: no volver a verificar la aproximacion con la concentracion diluida." },
            { paso: "pH = -log(8,54 x 10^-4) = 3,07.", porque: "Calculamos el pH como -log[H+] aplicado a la concentracion calculada: pH = -log(8,54 x 10^-4) = 3,07. Es un valor mayor que el del vinagre puro (2,42), lo que es coherente con la dilucion." }
          ],
          resultado: "pH aprox. 3,07."
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
            { paso: "Teorico: n(H2O) = 0,044 x 3/2 = 0,066 mol.", porque: "Usamos la relacion 2 NH3 : 3 H2O de la ecuacion, o sea 3/2 mol de H2O por cada mol de NH3, para pasar de 0,044 mol de NH3 a moles de agua teoricos: n(H2O) = 0,044 x 3/2 = 0,066 mol. Es el paso estequiometrico basico. Error tipico: invertir la relacion a 2:3." },
            { paso: "Con rendimiento 90%: n(H2O) = 0,066 x 0,90 = 0,0594 mol.", porque: "Con rendimiento de 90 % se obtiene solo el 90 % del producto teorico, asi que el agua real es 0,066 x 0,90 = 0,0594 mol. Aqui el rendimiento reduce el producto, y por eso se multiplica. Verificar que el resultado sea menor que el teorico." },
            { paso: "T = 125 + 273,15 = 398,15 K. V = nRT/P = 0,0594 x 0,0821 x 398,15 / 1 = 1,94 L.", porque: "El vapor de agua es un gas, asi que calculamos su volumen con PV = nRT, despejando V = nRT/P. Pasamos 125 C a kelvin (T = 125 + 273,15 = 398,15 K) porque la ecuacion usa escala absoluta. Con R = 0,0821 L atm/(mol K) y P = 1 atm: V = 0,0594 x 0,0821 x 398,15 / 1 = 1,94 L." },
            { paso: "Control: el teorico seria 2,16 L.", porque: "Calculamos el volumen teorico (sin aplicar el 90 %) como control: el volumen real debe ser menor, en proporcion 0,90. Como 2,16 x 0,90 = 1,94 L, el resultado es consistente. Si el resultado fuera mayor, habria un error en el calculo o en el rendimiento." }
          ],
          resultado: "Aprox. 1,94 L de vapor de agua a 125 C y 1 atm."
        },
        {
          parte: "b)",
          pasos: [
            { paso: "Relacion 2 NH3 : 4 O2, luego n(O2) = 2 x 0,044 = 0,088 mol.", porque: "Usamos la relacion 2 NH3 : 4 O2 para pasar de moles de NH3 a moles de O2: n(O2) = 0,044 x 4/2 = 0,088 mol. Es el mismo criterio de proporcion molar que en los otros ejercicios. Error comun: usar la relacion del agua (3/2) en vez de la del oxigeno." },
            { paso: "El rendimiento no cambia cuanto reacciona: los 0,044 mol de NH3 que reaccionan necesitan 0,088 mol de O2.", porque: "El rendimiento afecta cuanto producto se obtiene, pero no cuanto reactivo reacciona. Por eso calculamos el oxigeno con los 0,044 mol de NH3 que efectivamente reaccionan, como indica el enunciado. Verificar que el rendimiento no se aplique dos veces en la misma respuesta." },
            { paso: "Supuesto: no se ajusta el O2 por rendimiento. Si se interpretara que hay que ajustarlo, serian 0,098 mol.", porque: "Tomamos como base que 0,044 mol de NH3 reaccionan, como indica el enunciado, y el O2 sale directamente de esa cantidad: 0,088 mol. Si se ajustara por rendimiento se llegaria a 0,098 mol, pero eso supone que el oxigeno tambien pierde eficiencia, un supuesto que el enunciado no hace. Conviene aclararlo en la respuesta." }
          ],
          resultado: "0,088 mol de O2 (si se ajusta por rendimiento, 0,098 mol)."
        },
        {
          parte: "c)",
          pasos: [
            { paso: "NH3: N central con 3 enlaces simples a H y 1 par libre. Geometria piramidal trigonal, molecula polar. Puede formar puentes de hidrogeno (H unido a N y par libre del N).", porque: "Contamos los electrones de valencia (N: 5; H: 1 cada uno) para armar Lewis: 3 enlaces N-H y 1 par libre en el N. Ese par libre da geometria piramidal y hace que la molecula sea polar. Como el H esta unido a N, el NH3 puede formar puentes de hidrogeno a traves de su par libre." },
            { paso: "NO: 11 electrones de valencia, impar. Es un radical: N=O con un electron desapareado. Molecula polar, con fuerzas dipolo-dipolo debiles y London. No tiene H unido a F, O o N.", porque: "El NO tiene 11 electrones de valencia (numero impar), por lo que no puede cumplir el octeto en todos los atomos y queda un electron desapareado: es un radical. Como no tiene H unido a F, O o N, no forma puentes de hidrogeno, y sus fuerzas son dipolo-dipolo y London. Error comun: asumir que toda molecula polar forma puentes de hidrogeno." },
            { paso: "Punto de ebullicion: NH3 aprox. -33 C, NO aprox. -152 C. NH3 tiene mayor punto de ebullicion por los puentes de hidrogeno, pese a tener menor masa molar que el NO.", porque: "Para comparar puntos de ebullicion miramos primero la intensidad de las fuerzas intermoleculares, que pesa mas que la masa molar. Los puentes de hidrogeno del NH3 son mas intensos que las fuerzas dipolo-dipolo y London del NO, aunque el NO tenga mayor masa molar. Por eso el NH3 (aprox. -33 C) hierve a mayor temperatura que el NO (aprox. -152 C)." }
          ],
          resultado: "Mayor punto de ebullicion: NH3 (puentes de hidrogeno)."
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
            { paso: "Etano: C2H6(g) + 7/2 O2(g) -> 2 CO2(g) + 3 H2O(l). DeltaHc = [2(-393,5) + 3(-286,0)] - (-84,7) = -1560,3 kJ/mol.", porque: "Ajustamos primero la combustion por conservacion de atomos: 2 C dan 2 CO2, 6 H dan 3 H2O, y los 7 O requieren 7/2 O2. Luego calculamos el DeltaH por Hess: 2(-393,5) + 3(-286,0) - (-84,7) = -1560,3 kJ/mol. Error tipico: escribir el agua como gas, lo que cambia el DeltaH." },
            { paso: "Carbon: C(s) + O2(g) -> CO2(g). DeltaHc = -393,5 kJ/mol.", porque: "La combustion del carbon es C(s) + O2 -> CO2, con 1 mol de C por mol de combustible. Como C(s) y O2 son elementos en su forma estable, tienen DeltaHf = 0, y el DeltaH de combustion coincide con el DeltaHf del CO2: -393,5 kJ/mol. Verificar que el valor sea negativo, ya que es un proceso exotermico." },
            { paso: "Por mol de combustible con igual costo: el etano libera 1560,3 / 393,5 = 4,0 veces mas calor que el carbon por mol.", porque: "Con igual costo por mol, comparamos el calor liberado por mol: 1560,3 / 393,5 = 3,97 veces mas que el carbon. Por eso conviene el etano. El redondeo a 4,0 es solo para presentar, y en calculos siguientes conviene usar el valor sin redondear. Error comun: invertir el cociente." }
          ],
          resultado: "Etano: -1560,3 kJ/mol. Carbon: -393,5 kJ/mol. Mas conveniente: etano."
        },
        {
          parte: "b)",
          pasos: [
            { paso: "Gases: reactivos 1 + 3,5 = 4,5 mol; productos 2 mol (CO2). El H2O es liquida y no cuenta.", porque: "Para ver si el volumen cambia a presion constante contamos solo los moles de gas: reactivos 1 + 3,5 = 4,5 mol y productos 2 mol de CO2. El H2O es liquida y su volumen se desprecia frente al de los gases, por eso no entra en el balance." },
            { paso: "Delta n(gas) = 2 - 4,5 = -2,5 mol. A P constante, el volumen disminuye (DeltaV < 0).", porque: "A P y T constantes, el volumen es proporcional al numero de moles de gas (PV = nRT). Como Delta n(gas) = 2 - 4,5 = -2,5 mol, el volumen disminuye: DeltaV < 0. Verificar el signo, porque determina si el entorno comprime al sistema." },
            { paso: "W = -P DeltaV > 0: el entorno realiza trabajo sobre el sistema.", porque: "Con W = -P DeltaV, una compresion (DeltaV negativo) da trabajo positivo, es decir que el entorno realiza trabajo sobre el sistema. Entonces el resultado es un asunto de signo y no de magnitud. Error tipico: confundir el signo del trabajo con su valor." }
          ],
          resultado: "El entorno realiza trabajo sobre el sistema (compresion)."
        },
        {
          parte: "c)",
          pasos: [
            { paso: "Calor de combustion: Q = 1000 mol x 1560,3 kJ/mol = 1,560 x 10^6 kJ.", porque: "Como el etano se da en moles, el calor total liberado es Q = 1000 mol x 1560,3 kJ/mol = 1,560 x 10^6 kJ. Ese es el calor disponible para evaporar el agua de las hojas. Verificar que se use el calor de combustion del etano y no el del carbon." },
            { paso: "Por mol de agua: calentar de 25 a 100 C: 75,29 x 75 = 5,647 kJ/mol. Vaporizar: 40,88 kJ/mol. Total = 46,527 kJ/mol.", porque: "Para cada mol de agua sumamos el calor sensible de 25 a 100 C (75,29 J/(mol K) x 75 K = 5,647 kJ/mol) y el calor latente de vaporizacion (40,88 kJ/mol), dando 46,527 kJ/mol. Como el Cp esta en J, lo pasamos a kJ antes de sumar. Error comun: sumar J con kJ sin convertir." },
            { paso: "n(H2O) = 1,560 x 10^6 / 46,527 = 33 535 mol. m(H2O) = 33 535 x 18,02 = 604,3 kg.", porque: "Dividimos el calor disponible entre el calor por mol para saber cuantos moles de agua se pueden evaporar: n = 1,560 x 10^6 / 46,527 = 33 535 mol. Luego m = n x M, con M = 18,02 g/mol, da unos 604 kg de agua. Es el paso que liga la energia con la masa de agua." },
            { paso: "Masa de hojas: el agua es el 70% de la masa de hojas, m = 604,3 / 0,70 = 863 kg.", porque: "El agua es el 70 % de la masa de las hojas, asi que la masa total de hojas es la masa de agua dividida 0,70: m = 604,3 / 0,70 = 863 kg. Es la misma logica de dividir por una fraccion que se usa en otros ejercicios. Verificar que el resultado sea mayor que la masa de agua." },
            { paso: "Supuestos: 100% del calor va al agua; toda el agua se evapora a 100 C y 1 atm; no se calienta la materia seca.", porque: "Suponemos que el 100 % del calor de la combustion llega al agua, que toda el agua se evapora a 100 C y 1 atm, y que la materia seca no se calienta. Lo hacemos porque el enunciado no da datos de perdidas ni de masa seca. Con estos supuestos el resultado es una estimacion ideal; en la practica haria falta mas combustible." }
          ],
          resultado: "Aprox. 863 kg de hojas de yerba mate (con unos 604 kg de agua evaporada)."
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
            { paso: "Ka = 10^-pKa = 10^-6,5 = 3,16 x 10^-7.", porque: "Como el dato viene como pKa, lo convertimos con pKa = -log Ka, o sea Ka = 10^-pKa = 10^-6,5 = 3,16 x 10^-7. Trabajar con Ka es necesario para usar las expresiones de equilibrio. Error comun: escribir 10^6,5 en lugar de 10^-6,5." },
            { paso: "Equilibrio: C6H5COOH <-> H+ + C6H5COO-. Ka = [H+][A-]/[HA].", porque: "Escribimos la disociacion del acido benzoico, HA <-> H+ + A-, con Ka = [H+][A-]/[HA]. Como el acido es debil, el equilibrio esta desplazado hacia el acido sin disociar, y la mayor parte queda como HA. Esta expresion es la que luego nos permite despejar la concentracion." },
            { paso: "Balance de carga: [H+] = [A-] + [OH-]. Balance de masa: C = [HA] + [A-].", porque: "El balance de carga expresa la electroneutralidad: [H+] = [A-] + [OH-]. El balance de masa dice que el acido total C se reparte entre la forma sin disociar y la disociada: C = [HA] + [A-]. Ambos balances permiten plantear las ecuaciones sin conocer cada concentracion." },
            { paso: "Suposiciones: [OH-] despreciable (pH 4); [A-] = [H+] = 1,0 x 10^-4 M (pH = 4,0). Entonces [HA] = C - 1,0 x 10^-4.", porque: "Fijamos la concentracion de H+ al valor del pH limite: pH 4,0 corresponde a [H+] = 1,0 x 10^-4 M. A ese pH el [OH-] es despreciable, y asumimos [A-] = [H+] porque es el ion que forma la disociacion. Entonces [HA] = C - 1,0 x 10^-4. Estas suposiciones simplifican el balance sin cambiar el resultado de forma apreciable." },
            { paso: "Ka = (10^-4)^2 / (C - 10^-4) -> C = 10^-4 + 10^-8 / 3,16 x 10^-7 = 10^-4 + 0,0316 = 0,0317 M.", porque: "Como Ka = [H+]^2 / (C - [H+]), despejamos C pasando [H+] al otro lado: C = [H+] + [H+]^2 / Ka. Con [H+] = 10^-4 y Ka = 3,16 x 10^-7 se obtiene C = 10^-4 + 0,0316 = 0,0317 M. Verificar la cuenta, porque el segundo termino es el que domina." },
            { paso: "Como el pH debe ser igual o menor a 4,0, la minima concentracion es la que da pH = 4,0.", porque: "Un acido mas concentrado produce mas H+ y un pH mas bajo, asi que la condicion de pH igual o menor a 4,0 se cumple con cualquier C mayor o igual al valor calculado. Por eso la concentracion minima es la que da pH exactamente 4,0. Error comun: tomar el maximo en lugar del minimo." }
          ],
          resultado: "C minima aprox. 0,032 M (3,2 x 10^-2 mol/L)."
        },
        {
          parte: "b)",
          pasos: [
            { paso: "Usando C = 0,0317 M (de a): alfa = [H+]/C = 1,0 x 10^-4 / 0,0317 = 3,15 x 10^-3.", porque: "El grado de ionizacion alfa es la fraccion del acido que se disocia: alfa = [H+]/C = 1,0 x 10^-4 / 0,0317 = 3,15 x 10^-3. Usamos C = 0,0317 M de a), que es la concentracion del acido en esa solucion. Expresado en porcentaje, 3,15 x 10^-3 equivale a 0,32 %." },
            { paso: "Control: alfa = sqrt(Ka/C) = sqrt(3,16 x 10^-7 / 0,0317) = 3,16 x 10^-3.", porque: "Para un acido debil, alfa = sqrt(Ka/C) sale de la misma aproximacion usada antes, y sirve como control independiente del valor de [H+]. Calculamos sqrt(3,16 x 10^-7 / 0,0317) = 3,16 x 10^-3. Los dos resultados (3,15 y 3,16 x 10^-3) coinciden, lo que confirma el calculo." }
          ],
          resultado: "alfa aprox. 0,32 %."
        },
        {
          parte: "c)",
          pasos: [
            { paso: "El HCl es un acido fuerte: se disocia totalmente, HCl -> H+ + Cl-. [H+] = C_HCl.", porque: "El HCl es un acido fuerte, asi que se disocia 100 % en H+ y Cl-: HCl -> H+ + Cl-, y [H+] = C_HCl. Por eso no hace falta plantear equilibrio. Error comun: aplicar la formula de acido debil a un acido fuerte." },
            { paso: "Para pH 4,0: [H+] = 1,0 x 10^-4 M. El aporte del agua (10^-7 M) es despreciable.", porque: "Con pH 4,0 la [H+] objetivo es 1,0 x 10^-4 M. El agua aporta 10^-7 M de H+ por autoionizacion, un valor mucho menor que 1,0 x 10^-4 M, por lo que se puede despreciar. Verificar que este aporte sea chico frente a 10^-4 antes de despreciarlo." },
            { paso: "Por lo tanto C_HCl = 1,0 x 10^-4 M. Es unas 300 veces menos concentrado que el acido benzoico, porque el benzoico se ioniza muy poco.", porque: "Como el HCl aporta 1 H+ por mol, su concentracion debe ser igual a la [H+] objetivo: C_HCl = 1,0 x 10^-4 M. El acido benzoico, que se ioniza poco, necesita una concentracion 0,0317 / 10^-4 = 317 veces mayor para llegar al mismo pH. Esto muestra la diferencia entre un acido fuerte y uno debil." }
          ],
          resultado: "C_HCl = 1,0 x 10^-4 mol/L."
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
