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
            { paso: "Reduccion: Cr2O7(2-) + 14 H+ + 6 e- -> 2 Cr(3+) + 7 H2O (cada Cr pasa de +6 a +3, 3 e- por Cr, 6 e- por dicromato).", porque: "En medio acido el ion electron usa H+ y H2O para balancear O e H; el cromo baja de +6 a +3 (gana 3 e- por cada Cr), y como hay 2 Cr se ganan 6 e-." },
            { paso: "Oxidacion: 2 Cl- -> Cl2 + 2 e-. Para igualar electrones se multiplica por 3: 6 Cl- -> 3 Cl2 + 6 e-.", porque: "Los electrones cedidos deben ser iguales a los ganados: el Cl- pierde 2 e- por molecula de Cl2, y para sumar 6 e- hacen falta 3 Cl2." },
            { paso: "Suma: Cr2O7(2-) + 14 H+ + 6 Cl- -> 2 Cr(3+) + 3 Cl2 + 7 H2O. Se agregan los iones K+ y Cl- que faltan: K2Cr2O7 + 14 HCl -> 2 CrCl3 + 3 Cl2 + 2 KCl + 7 H2O.", porque: "Al sumar las semirreacciones los electrones se cancelan; los iones K+ y Cl- que faltan se agregan para pasar a la forma molecular de la ecuacion dada." },
            { paso: "Verificacion: Cl 14 = 14, H 14 = 14, O 7 = 7, K 2 = 2, Cr 2 = 2.", porque: "Una ecuacion esta balanceada si cada elemento tiene la misma cantidad de atomos a ambos lados (conservacion de la masa), y eso es lo que se verifica aca." }
          ],
          resultado: "Correcto: la ecuacion esta balanceada."
        },
        {
          parte: "b)",
          pasos: [
            { paso: "M(CrCl3) = 52,00 + 3 x 35,45 = 158,35 g/mol. n(CrCl3) = 20 g / 158,35 g/mol = 0,1263 mol.", porque: "Para pasar de masa a moles se divide por la masa molar (n = m/M), y la masa molar se calcula con los pesos atomicos de la tabla." },
            { paso: "Por estequiometria, 1 K2Cr2O7 da 2 CrCl3: n(K2Cr2O7) teorico = 0,1263/2 = 0,06315 mol.", porque: "Los coeficientes de la ecuacion balanceada (1 K2Cr2O7 : 2 CrCl3) fijan la relacion molar entre el dicromato y el producto." },
            { paso: "M(K2Cr2O7) = 294,2 g/mol. m teorica = 0,06315 x 294,2 = 18,58 g.", porque: "Con los moles de dicromato y su masa molar se obtiene la masa teorica (m = n x M)." },
            { paso: "Rendimiento 80%: m necesaria pura = 18,58 / 0,80 = 23,23 g. Pureza 75%: m de droga impura = 23,23 / 0,75 = 30,97 g.", porque: "El rendimiento de 80 % significa que solo se obtiene ese porcentaje de lo teorico, y la pureza de 75 % que solo ese porcentaje de la droga es dicromato; por eso ambos factores van dividiendo." },
            { paso: "Supuesto: los 20 g son la cantidad de CrCl3 realmente obtenida.", porque: "El enunciado no aclara si los 20 g son teoricos o reales; se toma como producto real para que el rendimiento se aplique a la masa de dicromato, que es lo que se pide." }
          ],
          resultado: "Aprox. 31,0 g de droga impura (23,2 g de K2Cr2O7 puro)."
        },
        {
          parte: "c)",
          pasos: [
            { paso: "Relacion 2 CrCl3 : 2 KCl, luego n(KCl) = n(CrCl3) = 0,1263 mol.", porque: "En la ecuacion balanceada 2 CrCl3 producen 2 KCl, o sea la relacion molar es 1:1." },
            { paso: "M(KCl) = 39,10 + 35,45 = 74,55 g/mol. m(KCl) = 0,1263 x 74,55 = 9,42 g.", porque: "La masa se calcula como n x M, con la masa molar sumando los pesos atomicos de K y Cl." },
            { paso: "Supuesto: se parte de los 20 g de CrCl3 obtenidos (el rendimiento ya esta contemplado).", porque: "Si los 20 g de CrCl3 son el producto real, el KCl que se forma en la misma reaccion corresponde a esos mismos moles; el rendimiento ya esta incluido en esa cantidad real." }
          ],
          resultado: "Aprox. 9,42 g de KCl."
        },
        {
          parte: "d)",
          pasos: [
            { paso: "Gas: Cl2. Relacion 3 Cl2 : 2 CrCl3, luego n(Cl2) = (3/2) x 0,1263 = 0,1895 mol.", porque: "Los coeficientes de la ecuacion (3 Cl2 por cada 2 CrCl3) fijan la relacion molar entre el gas y el producto que se usa de base." },
            { paso: "Condiciones normales: T = 273,15 K, P = 1 atm. V = nRT/P = 0,1895 x 0,0821 x 273,15 / 1 = 4,25 L.", porque: "En condiciones normales (0 C = 273,15 K y 1 atm) un gas ideal cumple PV = nRT, y por eso se despeja V con esa ecuacion." },
            { paso: "Con V molar 22,4 L/mol se obtiene 4,24 L (diferencia por redondeo).", porque: "En CN un mol de gas ideal ocupa 22,4 L, por eso sirve como control independiente del calculo con R." }
          ],
          resultado: "Aprox. 4,25 L de Cl2 en CN."
        },
        {
          parte: "e)",
          pasos: [
            { paso: "CrCl3 y KCl: solidos ionicos. La fuerza dominante es la atraccion ion-ion (electrostatica). Se asume que el CrCl3 se trata como ionico, como en la materia.", porque: "Un metal combinado con un no metal forma una red de iones unidos por atraccion electrostatica (ion-ion), que es la fuerza dominante en los solidos ionicos." },
            { paso: "Cl2: a condiciones normales es gas. Como molecula apolar, su solido (si se enfria) tendria fuerzas de London (dispersion).", porque: "Una molecula diatomica formada por dos atomos iguales es apolar, y sus unicas fuerzas intermoleculares son las de London, que crecen con la masa molar." },
            { paso: "H2O: solido molecular (hielo), fuerza dominante: puentes de hidrogeno.", porque: "El H esta unido a O, un elemento muy electronegativo, y eso permite puentes de hidrogeno, la fuerza intermolecular mas intensa entre moleculas." },
            { paso: "Analisis de puntos de fusion: CrCl3 (aprox. 1150 C) > KCl (aprox. 770 C) > H2O (0 C) > Cl2 (aprox. -101 C). El Cr(3+) tiene mayor carga y menor radio que el K(+), por lo que la energia reticular del CrCl3 es mayor. Entre los moleculares, el puente de hidrogeno del agua es mas fuerte que las fuerzas de London del Cl2.", porque: "Mayor carga y menor radio del ion dan mayor energia de red, y los puentes de hidrogeno son mas fuertes que las fuerzas de London; por eso el punto de fusion sigue ese orden." }
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
            { paso: "Supuesto: la combustion es completa y el agua formada es liquida (es el estado que corresponde a los DeltaH dados).", porque: "Se toma el agua liquida porque es el estado que corresponde a los DeltaH de combustion tabulados, y la combustion completa produce CO2 y H2O." },
            { paso: "Propano: C3H8(g) + 5 O2(g) -> 3 CO2(g) + 4 H2O(l), DeltaH = -2220 kJ.", porque: "Se ajusta por conservacion de atomos: 3 C dan 3 CO2, 8 H dan 4 H2O, y los 10 O se reparten en 5 O2; el DeltaH dado es el de 1 mol de propano." },
            { paso: "Butano: C4H10(g) + 13/2 O2(g) -> 4 CO2(g) + 5 H2O(l), DeltaH = -2879,6 kJ. (Doblando coeficientes: 2 C4H10 + 13 O2 -> 8 CO2 + 10 H2O.)", porque: "Se usa 13/2 O2 para que la ecuacion sea de 1 mol de butano y coincida con el DeltaH por mol; doblar todos los coeficientes da la misma reaccion con el DeltaH doble." }
          ],
          resultado: "C3H8(g) + 5 O2(g) -> 3 CO2(g) + 4 H2O(l) DeltaH = -2220 kJ/mol; C4H10(g) + 6,5 O2(g) -> 4 CO2(g) + 5 H2O(l) DeltaH = -2879,6 kJ/mol."
        },
        {
          parte: "b)",
          pasos: [
            { paso: "Propano: Q1 = 700 mol x 2220 kJ/mol = 1 554 000 kJ.", porque: "El calor liberado es proporcional a los moles quemados: Q = n x |DeltaH| por mol de combustible." },
            { paso: "Butano: Q2 = 300 mol x 2879,6 kJ/mol = 863 880 kJ.", porque: "Misma relacion Q = n x |DeltaH| aplicada al butano, con su propio DeltaH de combustion." },
            { paso: "Calor total = 2 417 880 kJ. Calor transferido al agua (90%) = 0,90 x 2 417 880 = 2 176 092 kJ.", porque: "La energia se conserva: el calor total es la suma de lo que libera cada combustible, y segun el enunciado solo el 90 % pasa al agua." }
          ],
          resultado: "Calor total generado: 2,42 x 10^6 kJ. Calor transferido al agua: 2,18 x 10^6 kJ."
        },
        {
          parte: "c)",
          pasos: [
            { paso: "n(agua) = 900 000 g / 18,02 g/mol = 49 945 mol.", porque: "Para usar el calor por mol hay que pasar la masa de agua a moles (n = m/M)." },
            { paso: "Calentar hielo de -5 a 0 C: Q1 = 49 945 x 33,60 x 5 = 8,39 x 10^3 kJ.", porque: "El hielo debe llevarse de -5 a 0 C antes de fundir; ese calor sensible es n x Cp x DeltaT, con el Cp del solido." },
            { paso: "Fundir a 0 C: Q2 = 49 945 x 6,03 = 301 168 kJ.", porque: "Durante el cambio de fase la temperatura no cambia y el calor es n x DeltaH de fusion, que esta dado por mol." },
            { paso: "Calentar liquido de 0 a 100 C: Q3 = 49 945 x 75,23 x 100 = 375 736 kJ.", porque: "Una vez fundido, el agua liquida se calienta hasta 100 C a 1 atm (punto de ebullicion), con el Cp del liquido." },
            { paso: "Suma de los pasos anteriores = 685 295 kJ. Queda disponible: 2 176 092 - 685 295 = 1 490 797 kJ.", porque: "Los tramos de calentamiento y fusion se producen en orden y consumen calor; lo que sobra del calor disponible es el que puede usarse para vaporizar." },
            { paso: "Vaporizar todo el agua requiere 49 945 x 40,7 = 2 032 762 kJ, asi que no alcanza para vaporizar todo.", porque: "Vaporizar a 100 C y 1 atm consume el DeltaH de vaporizacion por mol; se usa 40,7 kJ/mol porque el dato de la foto esta ilegible (valor de tabla)." },
            { paso: "Fraccion vaporizada = 1 490 797 / 2 032 762 = 0,7334. Vapor = 0,7334 x 49 945 = 36 630 mol (aprox. 660 kg). Liquido = 13 315 mol (aprox. 240 kg).", porque: "Como la energia sobrante solo alcanza para una fraccion del agua, esa fraccion se evapora y el resto queda liquido a la misma temperatura; m = n x M pasa los moles a kg." },
            { paso: "Como la temperatura queda en 100 C con coexistencia de fases, no hace falta Cp del vapor.", porque: "Mientras haya liquido y vapor juntos la temperatura queda fija en el punto de ebullicion, y como el vapor no llega a calentarse, su Cp no interviene." }
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
            { paso: "Reaccion: 2 HCl(ac) + Ba(OH)2(ac) -> BaCl2(ac) + 2 H2O(l). Neta: H+ + OH- -> H2O.", porque: "Es una neutralizacion acido fuerte base fuerte: el H+ y el OH- se combinan en agua, y la ecuacion balanceada tiene 2 H, 2 Cl y 1 Ba a cada lado." },
            { paso: "n(H+) = 9 L x 0,9 mol/L = 8,1 mol. n(OH-) = 12 L x 0,3 mol/L x 2 = 7,2 mol (cada Ba(OH)2 aporta 2 OH-).", porque: "HCl y Ba(OH)2 son electrolitos fuertes que se disocian por completo, asi que los moles de iones son M x V; el Ba(OH)2 aporta 2 OH- por mol." },
            { paso: "Sobra H+: 8,1 - 7,2 = 0,9 mol. Volumen final = 21 L (aditivos).", porque: "En la neutralizacion H+ y OH- reaccionan 1:1, asi que lo que queda en exceso es la diferencia de moles; el volumen total es la suma de volumenes, como dice el enunciado." },
            { paso: "[H+] = 0,9 / 21 = 0,0429 mol/L. pH = -log(0,0429) = 1,37.", porque: "El pH se define como -log[H+], y la concentracion es el exceso de moles dividido el volumen final de la solucion." }
          ],
          resultado: "pH = 1,37 (medio acido)."
        },
        {
          parte: "b)",
          pasos: [
            { paso: "HClO(ac) <-> H+ + ClO-. Base conjugada: ClO- (ion hipoclorito).", porque: "Segun Bronsted-Lowry, el acido cede H+ y lo que queda es su base conjugada; el HClO queda como ClO-." },
            { paso: "HF(ac) <-> H+ + F-. Base conjugada: F- (ion fluoruro).", porque: "Mismo criterio: al perder H+ el HF queda como F-, su base conjugada." },
            { paso: "HCN(ac) <-> H+ + CN-. Base conjugada: CN- (ion cianuro).", porque: "Mismo criterio: al perder H+ el HCN queda como CN-, su base conjugada." },
            { paso: "Kb = Kw / Ka: Kb(CN-) = 10^-5; Kb(ClO-) = 10^-7; Kb(F-) = 10^-11.", porque: "Ka y Kb de un par conjugado se relacionan por Ka x Kb = Kw = 10^-14 a 25 C, asi que Kb = Kw/Ka." },
            { paso: "Orden de basicidad: CN- > ClO- > F-. Cuanto mas fuerte es el acido, mas debil es su base conjugada (HF es el acido mas fuerte y F- la base mas debil).", porque: "Cuanto mas debil es el acido, mas fuerte es su base conjugada (Kb = Kw/Ka es inversa a Ka); el orden de basicidad sale de los Kb calculados." }
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
            { paso: "Celdas: cubica simple = 1 particula por celda; cubica centrada en el cuerpo (BCC) = 2; cubica centrada en caras (FCC) = 4.", porque: "En la celda unitaria, un atomo de vertice aporta 1/8 y uno de cara aporta 1/2: cubica simple 8/8 = 1; BCC 8/8 + 1 = 2; FCC 8/8 + 6/2 = 4." },
            { paso: "BCC = 2 = el doble de la simple (no el triple).", porque: "Comparando las cantidades de particulas por celda se verifica si la BCC tiene el triple que la cubica simple: 2 no es 3 veces 1." },
            { paso: "Un tercio de FCC = 4/3 = 1,33, que tampoco es 2.", porque: "Para verificar la segunda parte de la sentencia se compara la BCC (2) con un tercio de la FCC (4/3)." }
          ],
          resultado: "Falsa: la BCC tiene el doble de particulas que la cubica simple, no el triple, y 2 no es un tercio de 4."
        },
        {
          parte: "b)",
          pasos: [
            { paso: "Lewis: CH4: C central con 4 enlaces simples a H. H2O: O con 2 enlaces O-H y 2 pares libres. HCl: H-Cl simple, Cl con 3 pares libres.", porque: "La estructura de Lewis muestra los pares de enlace y libres; de ahi salen la geometria y la polaridad, que se necesitan para identificar la fuerza intermolecular dominante." },
            { paso: "Fuerza dominante: CH4 = London (dispersion). HCl = dipolo-dipolo (y London). H2O = puentes de hidrogeno.", porque: "El CH4 es apolar y solo tiene London; el HCl es polar pero sin H unido a F, O o N, asi que es dipolo-dipolo; el H2O tiene H unido a O, asi que forma puentes de hidrogeno." },
            { paso: "Orden creciente de intensidad: CH4 < HCl < H2O.", porque: "Puente de hidrogeno > dipolo-dipolo > London en intensidad, y el orden creciente se arma con el tipo de fuerza dominante de cada sustancia." },
            { paso: "Punto de ebullicion normal: temperatura a la que la presion de vapor del liquido iguala 1 atm. Presion de vapor: presion del vapor en equilibrio con el liquido a una temperatura dada.", porque: "Son las definiciones de las propiedades pedidas: el punto de ebullicion normal es la T donde la presion de vapor iguala 1 atm, y la presion de vapor es la del vapor en equilibrio con el liquido." },
            { paso: "Mayor punto de ebullicion: H2O (puentes de hidrogeno, aprox. 100 C frente a -85 C del HCl y -162 C del CH4). Mayor presion de vapor a igual temperatura: CH4, por tener las fuerzas intermoleculares mas debiles.", porque: "Cuanto mas intensas son las fuerzas intermoleculares, mas energia hace falta para pasar al gas: el agua tiene el mayor punto de ebullicion, y el metano, con las fuerzas mas debiles, tiene la mayor presion de vapor a igual temperatura." }
          ],
          resultado: "Dominantes: CH4 London; HCl dipolo-dipolo; H2O puentes de hidrogeno. Orden creciente: CH4 < HCl < H2O. Mayor punto de ebullicion: H2O. Mayor presion de vapor: CH4."
        },
        {
          parte: "c)",
          pasos: [
            { paso: "La sublimacion ocurre a presiones por debajo de la del punto triple. Por encima, el solido funde o pasa a liquido antes de sublimar.", porque: "El punto triple es la unica combinacion de P y T donde coexisten solido, liquido y vapor; por debajo de esa presion no hay liquido estable, asi que el solido pasa directo a vapor." },
            { paso: "En el diagrama de fases, la sublimacion ocurre en la rama solido-vapor, que termina en el punto triple.", porque: "La curva solido-vapor es la frontera de sublimacion y termina en el punto triple, por eso la presion maxima de sublimacion es la de ese punto." }
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
            { paso: "Calor liberado por mol de H2: 8232 kJ / 200 mol = 41,16 kJ/mol. Como el calor sale del sistema, DeltaH < 0.", porque: "Por convencion, si el sistema libera calor el DeltaH es negativo (exotermico), y el valor se refiere a 1 mol de H2 formado." },
            { paso: "Ecuacion: CO(g) + H2O(g) -> CO2(g) + H2(g), DeltaH = -41,16 kJ (por mol de H2 formado).", porque: "Los coeficientes son de 1 mol de cada especie en la reaccion, asi que el DeltaH de la ecuacion es el de 1 mol de H2." },
            { paso: "Control: DeltaH = DeltaHf(CO2) - DeltaHf(CO) - DeltaHf(H2O) da DeltaHf(CO) = -110,53 kJ/mol, valor coherente con la tabla.", porque: "La ley de Hess permite calcular el DeltaH como sumatoria de DeltaHf de productos menos reactivos; se usa para comprobar que el dato es coherente con la tabla." }
          ],
          resultado: "CO(g) + H2O(g) -> CO2(g) + H2(g)  DeltaH = -41,16 kJ."
        },
        {
          parte: "b)",
          pasos: [
            { paso: "Reaccion de combustion: CO(g) + 1/2 O2(g) -> CO2(g).", porque: "La combustion es la reaccion con O2 que da CO2 (combustion completa); por definicion de entalpia de combustion estandar la ecuacion es para 1 mol de CO." },
            { paso: "Hess: (CO + H2O -> CO2 + H2, DeltaH = -41,16) + (H2 + 1/2 O2 -> H2O(g), DeltaH = -241,82) = CO + 1/2 O2 -> CO2, DeltaH = -282,98 kJ.", porque: "La ley de Hess dice que el DeltaH global es la suma de los DeltaH de las etapas; al sumar las dos ecuaciones se cancelan H2 y H2O(g)." },
            { paso: "Control: DeltaHc = DeltaHf(CO2) - DeltaHf(CO) = -393,51 - (-110,53) = -282,98 kJ/mol.", porque: "La entalpia de combustion estandar es DeltaHf(CO2) menos DeltaHf(CO), porque el O2 tiene DeltaHf = 0; sirve para verificar el resultado anterior." }
          ],
          resultado: "CO(g) + 1/2 O2(g) -> CO2(g)  DeltaHc = -282,98 kJ/mol (aprox. -283,0 kJ/mol)."
        },
        {
          parte: "c)",
          pasos: [
            { paso: "Calor transferido: Q = 0,70 x 8232 kJ = 5762,4 kJ.", porque: "Solo el 70 % del calor de la reaccion se transfiere al etanol, segun el enunciado." },
            { paso: "Por mol de etanol: calentar de 25 a 78 C: 0,112 kJ/(mol.C) x 53 C = 5,936 kJ/mol. Vaporizar a 78 C: 43,5 kJ/mol. Total: 49,436 kJ/mol.", porque: "El etanol liquido se calienta de 25 a 78 C (calor sensible con su Cp) y despues se vaporiza a su punto de ebullicion normal (calor latente con DeltaHvap); son dos etapas." },
            { paso: "n(etanol) = 5762,4 / 49,436 = 116,56 mol.", porque: "Con el calor total y el calor por mol se obtienen los moles que se pueden llevar a vapor (n = Q / q por mol)." },
            { paso: "M(C2H6O) = 46,07 g/mol. m = 116,56 x 46,07 = 5370 g.", porque: "Para pasar de moles a masa se multiplica por la masa molar (m = n x M)." },
            { paso: "Supuesto: el calor de la reaccion del enunciado es 8232 kJ (el dato de 200 mol de H2).", porque: "El enunciado da el calor solo para 200 mol de H2, asi que se toma ese calor como el total disponible de la reaccion." }
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
            { paso: "Reaccion: CH3COOH(ac) + NaOH(ac) -> CH3COONa(ac) + H2O(l).", porque: "Un acido debil con una base fuerte da la sal del acido y agua; la relacion es 1:1 porque el acido tiene 1 H ionizable y el NaOH aporta 1 OH-." },
            { paso: "Reactivos: acido acetico (acido etanoico) e hidroxido de sodio. Productos: acetato de sodio (etanoato de sodio) y agua.", porque: "Son los nombres de las sustancias que pide el enunciado: el acido etanoico (acetico) y el etanoato (acetato) de sodio." },
            { paso: "Fenolftaleina: incolora antes del punto de equivalencia (medio acido) y rosa despues (medio basico, pH mayor a aprox. 8,2).", porque: "La fenolftaleina vira en el rango de pH aprox. 8,2 a 10; antes del punto de equivalencia el pH esta por debajo de ese rango, por eso es incolora." }
          ],
          resultado: "CH3COOH + NaOH -> CH3COONa + H2O. Fenolftaleina: incolora antes del PE, rosa despues."
        },
        {
          parte: "b)",
          pasos: [
            { paso: "n(NaOH) = 0,1250 mol/L x 0,01785 L = 2,231 x 10^-3 mol. Relacion 1:1, luego n(acido) = 2,231 x 10^-3 mol en 3 mL.", porque: "En la titulacion 1:1 los moles de NaOH gastados son los del acido en la muestra (n = M x V)." },
            { paso: "[acido] = 2,231 x 10^-3 / 0,003 L = 0,744 mol/L.", porque: "La concentracion molar es moles sobre litros de la muestra analizada, que son 3 mL = 0,003 L." },
            { paso: "% m/V: 0,744 x 60,05 g/L = 44,7 g/L = 4,47 % m/V.", porque: "Para comparar con la etiqueta (% m/V = g cada 100 mL) se pasa la molaridad a g/L con la masa molar y luego a %." },
            { paso: "Comparacion: la etiqueta declara 5% m/V, el valor medido es 4,47 % m/V (aprox. 10% menos). No cumple con lo declarado.", porque: "El criterio de calidad que se usa es el valor declarado en la etiqueta (5 % m/V); el valor medido es menor." },
            { paso: "Nota: si el criterio fuera el minimo legal de 4 % m/V (a verificar en el Codigo Alimentario Argentino), cumpliria.", porque: "El enunciado no fija un minimo legal, asi que se muestra que el resultado depende del criterio; el valor de referencia debe confirmarse en la norma." }
          ],
          resultado: "4,47 % m/V (0,744 M). No cumple con el 5% declarado en la etiqueta."
        },
        {
          parte: "c)",
          pasos: [
            { paso: "Reaccion: 2 CH3COOH(ac) + Ca(OH)2(ac) -> (CH3COO)2Ca(ac) + 2 H2O(l).", porque: "El Ca(OH)2 aporta 2 OH- por mol, asi que necesita 2 mol de acido por mol de base." },
            { paso: "n(acido) en 5 mL = 0,744 mol/L x 0,005 L = 3,719 x 10^-3 mol.", porque: "Con la concentracion del punto b) y el volumen de 5 mL se calculan los moles de acido a titular (n = M x V)." },
            { paso: "n(Ca(OH)2) = n(acido)/2 = 1,859 x 10^-3 mol (el Ca(OH)2 aporta 2 OH-).", porque: "Por la relacion 2:1 del acido con el Ca(OH)2 se pasa de moles de acido a moles de base." },
            { paso: "V = 1,859 x 10^-3 mol / 0,1250 mol/L = 0,01487 L = 14,9 mL.", porque: "El volumen de titulante es moles de base divididos su concentracion (V = n/M)." },
            { paso: "Control: con NaOH serian 29,75 mL; con Ca(OH)2 de igual molaridad se gasta la mitad.", porque: "Con NaOH la relacion es 1:1; como el Ca(OH)2 aporta el doble de OH- con la misma molaridad, se necesita la mitad de volumen." }
          ],
          resultado: "Aprox. 14,9 mL de Ca(OH)2 0,1250 M."
        },
        {
          parte: "d)",
          pasos: [
            { paso: "Equilibrio: CH3COOH <-> H+ + CH3COO-. Ka = [H+][CH3COO-]/[CH3COOH] = 1,8 x 10^-5.", porque: "El acido acetico es debil y se disocia parcialmente; la Ka expresa el equilibrio con las concentraciones de cada especie." },
            { paso: "Balance de carga: [H+] = [CH3COO-] + [OH-]. Balance de masa: C = [CH3COOH] + [CH3COO-], con C = 0,744 M.", porque: "La solucion es electroneutra (cargas positivas iguales a negativas), y la masa del acido total C se conserva entre la forma sin disociar y la disociada." },
            { paso: "Suposiciones: [OH-] despreciable (medio acido); [H+] = [CH3COO-] = x; ionizacion pequena, asi que [CH3COOH] = C - x = C.", porque: "En una solucion acida el [OH-] es muy chico frente al [H+], y como el acido se ioniza poco, la concentracion sin disociar es aprox. C." },
            { paso: "x = sqrt(Ka x C) = sqrt(1,8 x 10^-5 x 0,744) = 3,66 x 10^-3 M. Verificacion: x/C = 0,49% < 5%, la aproximacion es valida. (Resolviendo la cuadratica se obtiene pH 2,44 tambien.)", porque: "Para un acido debil con [H+] = x, Ka = x^2/(C - x), que se simplifica a x = sqrt(Ka x C) si x es chico frente a C; el 5 % es el criterio para validar la aproximacion." },
            { paso: "pH = -log(3,66 x 10^-3) = 2,44. Si se usara 5% m/V (0,833 M) el pH seria aprox. 2,41.", porque: "El pH es -log[H+] con el valor calculado; el 5 % m/V de la etiqueta da otra concentracion, y el resultado se compara como referencia." }
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
            { paso: "Supuesto: 10 mol de agua es el producto real. Moles de H2SO4 que reaccionan = 10 / 2 = 5 mol.", porque: "Por la ecuacion, 1 mol de H2SO4 da 2 mol de H2O: 10 mol de agua corresponden a 5 mol de acido; se supone que esos 10 mol son el producto real." },
            { paso: "Con rendimiento 85%: n(H2SO4) necesarios = 5 / 0,85 = 5,882 mol.", porque: "El rendimiento de 85 % indica que solo ese porcentaje de lo teorico se obtiene, asi que para tener 5 mol reales hay que dividir por 0,85." },
            { paso: "M(H2SO4) = 98,08 g/mol. m = 5,882 x 98,08 = 576,9 g de H2SO4 puro.", porque: "Se pasa de moles a masa de acido puro con la masa molar (m = n x M)." },
            { paso: "Solucion al 98% m/m: m(solucion) = 576,9 / 0,98 = 588,7 g.", porque: "Como la solucion es 98 % m/m, el acido puro es el 98 % de la masa de solucion: m(solucion) = m(puro) / 0,98." },
            { paso: "V = 588,7 g / 1,83 g/mL = 321,7 mL.", porque: "La densidad relaciona masa y volumen de la solucion (V = m/d)." }
          ],
          resultado: "Aprox. 322 mL (0,322 L) de solucion de H2SO4 98% m/m."
        },
        {
          parte: "b)",
          pasos: [
            { paso: "Relacion: 1 H2SO4 : 2 HBr. Para 5,882 mol de H2SO4 se necesitan 11,76 mol de HBr.", porque: "Los coeficientes (1 H2SO4 : 2 HBr) dan la proporcion en que reaccionan; 5,882 mol de acido necesitan 11,76 mol de HBr." },
            { paso: "Hay 15 mol de HBr, por lo tanto el HBr esta en exceso.", porque: "Si el reactivo disponible supera lo necesario segun la relacion estequiometrica, ese reactivo queda en exceso." },
            { paso: "Control por cociente n/coef: H2SO4 = 5,882 / 1 = 5,88; HBr = 15 / 2 = 7,5. El minimo es el H2SO4.", porque: "El reactivo limitante es el de menor cociente n/coeficiente, criterio que compensa los coeficientes distintos." },
            { paso: "Exceso de HBr = 15 - 11,76 = 3,24 mol.", porque: "El exceso es lo disponible menos lo que reacciona, ambos en moles de HBr." }
          ],
          resultado: "Reactivo limitante: H2SO4. Exceso: HBr, 3,24 mol."
        },
        {
          parte: "c)",
          pasos: [
            { paso: "SO2: S central con dos enlaces con O en resonancia (S=O y S-O, orden de enlace 1,5 en cada uno), 1 par libre en S. Geometria angular, molecula polar.", porque: "Con 18 electrones de valencia el S tiene un par libre y los enlaces se reparten en resonancia; la geometria angular que deja ese par hace que la molecula sea polar." },
            { paso: "Br2: Br-Br con un enlace simple; cada Br tiene 3 pares libres. Molecula apolar.", porque: "Cada Br tiene 7 electrones de valencia: con un enlace simple completa el octeto con 3 pares libres. Como los dos atomos son iguales, la molecula es apolar." },
            { paso: "Supuesto: la misma temperatura es 25 C. SO2 tiene punto de ebullicion de -10 C, asi que es gas. Br2 tiene 70 electrones y fuerzas de London fuertes, punto de ebullicion 58,8 C, asi que es liquido.", porque: "El enunciado no da la temperatura, por eso se asume 25 C; el estado depende de si esa temperatura supera el punto de ebullicion de cada sustancia (SO2 -10 C, Br2 58,8 C)." }
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
            { paso: "Propano: C3H8(g) + 5 O2(g) -> 3 CO2(g) + 4 H2O(l). DeltaHc = [3(-393,5) + 4(-286,0)] - (-103,85) = -2220,65 kJ/mol.", porque: "La DeltaH de reaccion se calcula como sumatoria de DeltaHf de productos menos reactivos (Hess); el agua se toma liquida porque es el estado de la tabla y de la combustion completa." },
            { paso: "Carbon: C(s) + O2(g) -> CO2(g). DeltaHc = -393,5 kJ/mol.", porque: "Es la combustion de C(s) a CO2, con 1 mol de carbono por mol de combustible; el DeltaHf del CO2 es la combustion del C porque C(s) y O2 tienen DeltaHf = 0." },
            { paso: "Por mol de combustible con igual costo: el propano libera 2220,65 / 393,5 = 5,6 veces mas calor que el carbon por mol.", porque: "Con igual costo por mol, conviene el combustible que libera mas calor por mol; la comparacion es por mol de combustible, como pide el enunciado." },
            { paso: "Tambien se puede comparar por mol de carbono: el propano tiene 3 C por mol, pero el criterio pedido es por mol de combustible.", porque: "Es solo una comprobacion: por mol de carbono el propano sigue dando mas calor (2220,65 / 3 = 740 kJ frente a 393,5 kJ), aunque el enunciado pide por mol de combustible." }
          ],
          resultado: "Propano: -2220,7 kJ/mol. Carbon: -393,5 kJ/mol. Mas conveniente: propano."
        },
        {
          parte: "b)",
          pasos: [
            { paso: "Gases en la reaccion: reactivos 1 + 5 = 6 mol; productos 3 mol (CO2). El H2O es liquida y no cuenta.", porque: "El cambio de volumen a presion constante depende solo del numero de moles de gas; los liquidos tienen un volumen despreciable frente a los gases." },
            { paso: "Delta n(gas) = 3 - 6 = -3 mol. A P constante, al bajar el numero de moles gaseosos baja el volumen (dV < 0).", porque: "A P y T constantes el volumen es proporcional a n, asi que menos moles de gas implican menos volumen." },
            { paso: "W = -P DeltaV > 0: el entorno realiza trabajo sobre el sistema (compresion).", porque: "Con la convencion usual (W = -P DeltaV), si el sistema se comprime el trabajo es positivo, o sea que lo hace el entorno sobre el sistema." }
          ],
          resultado: "El entorno realiza trabajo sobre el sistema (DeltaV < 0)."
        },
        {
          parte: "c)",
          pasos: [
            { paso: "Masa de agua: 0,70 x 800 kg = 560 kg = 560 000 g. n(H2O) = 560 000 / 18,02 = 31 077 mol.", porque: "El 70 % de la masa de las nueces es agua; luego, los moles de agua salen de m/M." },
            { paso: "Por mol de agua: calentar de 25 a 100 C: 75,29 J/(K.mol) x 75 K = 5,647 kJ/mol. Vaporizar: 40,88 kJ/mol. Total = 46,527 kJ/mol.", porque: "Cada mol de agua debe calentarse de 25 a 100 C (calor sensible con su Cp) y luego vaporizarse a 100 C (calor latente con DeltaHvap)." },
            { paso: "Calor necesario: Q = 31 077 x 46,527 = 1,446 x 10^6 kJ.", porque: "El calor total es el calor por mol multiplicado por los moles de agua, porque cada mol necesita la misma energia." },
            { paso: "n(propano) = Q / 2220,65 kJ/mol = 651 mol.", porque: "El calor de combustion por mol de propano es 2220,65 kJ; dividir el calor necesario por ese valor da los moles a quemar." },
            { paso: "Supuestos: 100% del calor de combustion va al agua, toda el agua se evapora a 100 C y 1 atm, y no se considera calentar la materia seca.", porque: "El enunciado no da perdidas ni la capacidad calorifica de la materia seca, por eso se toman estos supuestos ideales y el calculo es una estimacion." }
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
            { paso: "C = 50 g/L / 60,05 g/mol = 0,8326 mol/L.", porque: "5 % m/V son 5 g por cada 100 mL, o sea 50 g/L; se pasa a molaridad dividiendo por la masa molar del acido acetico." },
            { paso: "Equilibrio: CH3COOH <-> H+ + CH3COO-. Ka = [H+][CH3COO-]/[CH3COOH].", porque: "El acido acetico es debil y se disocia parcialmente; la Ka describe ese equilibrio a partir de las concentraciones." },
            { paso: "Balance de carga: [H+] = [CH3COO-] + [OH-]. Balance de masa: C = [CH3COOH] + [CH3COO-].", porque: "La electroneutralidad exige que cargas positivas y negativas se compensen, y la masa del acido se conserva entre la forma sin disociar y la disociada." },
            { paso: "Suposiciones: [OH-] despreciable; [H+] = [CH3COO-] = x; x << C. Entonces x = sqrt(Ka x C) = sqrt(1,75 x 10^-5 x 0,8326) = 3,82 x 10^-3 M.", porque: "Con un acido debil y [OH-] despreciable, la ionizacion da [H+] = [A-] = x y el acido sin disociar queda aprox. C; se simplifica Ka = x^2/C." },
            { paso: "Verificacion: x/C = 0,46%, valida. (Cuadratica exacta: x = 3,81 x 10^-3 M, pH igual.) pH = -log(3,81 x 10^-3) = 2,42.", porque: "La aproximacion x << C se acepta si x/C es menor a 5 %; el pH es -log[H+] con la concentracion de H+ calculada." }
          ],
          resultado: "pH del vinagre aprox. 2,42."
        },
        {
          parte: "b)",
          pasos: [
            { paso: "alfa = [H+]/C = 3,81 x 10^-3 / 0,8326 = 4,6 x 10^-3.", porque: "El grado de ionizacion alfa es la fraccion disociada: [H+] (lo disociado) sobre C (el total)." },
            { paso: "Control: alfa = sqrt(Ka/C) = sqrt(1,75 x 10^-5 / 0,8326) = 4,58 x 10^-3.", porque: "Para un acido debil con x << C, alfa = sqrt(Ka/C); sirve como control independiente del calculo de x." }
          ],
          resultado: "alfa aprox. 0,46 %."
        },
        {
          parte: "c)",
          pasos: [
            { paso: "Volumen final = 5 + 95 = 100 mL. Factor de dilucion 5/100 = 1/20.", porque: "Al mezclar se suman los volumenes (dato del enunciado), y el factor de dilucion es el volumen de vinagre sobre el volumen total." },
            { paso: "C' = 0,8326 x 0,05 = 0,04163 mol/L.", porque: "En una dilucion se conservan los moles (C x V): C' = C x V inicial / V final." },
            { paso: "x = sqrt(Ka x C') = sqrt(1,75 x 10^-5 x 0,04163) = 8,54 x 10^-4 M. Verificacion: x/C' = 2%, aproximacion valida. (Incluyendo el agua, pH 3,07 igual.)", porque: "Se usa la misma aproximacion de acido debil; el 2 % es menor que el 5 % de criterio, por lo que es valida. El agua aporta 10^-7 M, despreciable." },
            { paso: "pH = -log(8,54 x 10^-4) = 3,07.", porque: "Es la definicion de pH con la [H+] calculada." }
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
            { paso: "Teorico: n(H2O) = 0,044 x 3/2 = 0,066 mol.", porque: "La relacion 2 NH3 : 3 H2O de la ecuacion balanceada da los moles de agua teoricos por cada mol de NH3." },
            { paso: "Con rendimiento 90%: n(H2O) = 0,066 x 0,90 = 0,0594 mol.", porque: "El rendimiento de 90 % indica que solo se obtiene ese porcentaje del producto teorico, por eso se multiplica por 0,90." },
            { paso: "T = 125 + 273,15 = 398,15 K. V = nRT/P = 0,0594 x 0,0821 x 398,15 / 1 = 1,94 L.", porque: "Los gases se miden con PV = nRT, con T en kelvin (escala absoluta) y R = 0,0821 L atm/(mol K)." },
            { paso: "Control: el teorico seria 2,16 L.", porque: "Comparar con el volumen teorico muestra el efecto del rendimiento: el teorico es mayor, como corresponde." }
          ],
          resultado: "Aprox. 1,94 L de vapor de agua a 125 C y 1 atm."
        },
        {
          parte: "b)",
          pasos: [
            { paso: "Relacion 2 NH3 : 4 O2, luego n(O2) = 2 x 0,044 = 0,088 mol.", porque: "Los coeficientes de la ecuacion dan la proporcion molar: por cada 2 mol de NH3 se necesitan 4 mol de O2." },
            { paso: "El rendimiento no cambia cuanto reacciona: los 0,044 mol de NH3 que reaccionan necesitan 0,088 mol de O2.", porque: "La cantidad de O2 depende de cuanto NH3 reacciona, y el rendimiento afecta el producto obtenido, no la cantidad de reactivo consumido." },
            { paso: "Supuesto: no se ajusta el O2 por rendimiento. Si se interpretara que hay que ajustarlo, serian 0,098 mol.", porque: "El enunciado dice que 0,044 mol de NH3 reaccionan, asi que esa es la base; el valor 0,098 supondria ajustar el O2 por rendimiento." }
          ],
          resultado: "0,088 mol de O2 (si se ajusta por rendimiento, 0,098 mol)."
        },
        {
          parte: "c)",
          pasos: [
            { paso: "NH3: N central con 3 enlaces simples a H y 1 par libre. Geometria piramidal trigonal, molecula polar. Puede formar puentes de hidrogeno (H unido a N y par libre del N).", porque: "El N tiene 5 electrones de valencia: 3 se usan para enlazar H y 2 forman un par libre, lo que da geometria piramidal (polar); el H unido a N con el par libre permite puentes de hidrogeno." },
            { paso: "NO: 11 electrones de valencia, impar. Es un radical: N=O con un electron desapareado. Molecula polar, con fuerzas dipolo-dipolo debiles y London. No tiene H unido a F, O o N.", porque: "Con un numero impar de electrones no se puede cumplir el octeto en todos los atomos, por eso queda un electron desapareado; y como no hay H unido a F, O o N, no hay puentes de hidrogeno." },
            { paso: "Punto de ebullicion: NH3 aprox. -33 C, NO aprox. -152 C. NH3 tiene mayor punto de ebullicion por los puentes de hidrogeno, pese a tener menor masa molar que el NO.", porque: "El punto de ebullicion depende sobre todo de la intensidad de las fuerzas intermoleculares, que pesan mas que la masa molar; los puentes de hidrogeno superan a las fuerzas dipolo-dipolo y London del NO." }
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
            { paso: "Etano: C2H6(g) + 7/2 O2(g) -> 2 CO2(g) + 3 H2O(l). DeltaHc = [2(-393,5) + 3(-286,0)] - (-84,7) = -1560,3 kJ/mol.", porque: "Se ajusta por conservacion de atomos: 2 C dan 2 CO2, 6 H dan 3 H2O y 7 O se reparten en 7/2 O2; la DeltaH se calcula por Hess con las DeltaHf de la tabla." },
            { paso: "Carbon: C(s) + O2(g) -> CO2(g). DeltaHc = -393,5 kJ/mol.", porque: "Es la combustion del C a CO2; el DeltaHf del CO2 coincide con la combustion del C porque C(s) y O2 tienen DeltaHf = 0." },
            { paso: "Por mol de combustible con igual costo: el etano libera 1560,3 / 393,5 = 4,0 veces mas calor que el carbon por mol.", porque: "Con igual costo por mol, conviene el combustible que da mas calor por mol; el cociente 1560,3 / 393,5 = 3,97 se redondea a 4,0." }
          ],
          resultado: "Etano: -1560,3 kJ/mol. Carbon: -393,5 kJ/mol. Mas conveniente: etano."
        },
        {
          parte: "b)",
          pasos: [
            { paso: "Gases: reactivos 1 + 3,5 = 4,5 mol; productos 2 mol (CO2). El H2O es liquida y no cuenta.", porque: "Para el cambio de volumen a presion constante solo cuentan los gases; el H2O liquida tiene volumen despreciable." },
            { paso: "Delta n(gas) = 2 - 4,5 = -2,5 mol. A P constante, el volumen disminuye (DeltaV < 0).", porque: "A P y T constantes el volumen es proporcional a n, asi que una disminucion de moles de gas reduce el volumen." },
            { paso: "W = -P DeltaV > 0: el entorno realiza trabajo sobre el sistema.", porque: "Con la convencion usual (W = -P DeltaV), la compresion da W positivo: el entorno realiza trabajo sobre el sistema." }
          ],
          resultado: "El entorno realiza trabajo sobre el sistema (compresion)."
        },
        {
          parte: "c)",
          pasos: [
            { paso: "Calor de combustion: Q = 1000 mol x 1560,3 kJ/mol = 1,560 x 10^6 kJ.", porque: "Los 1000 mol de etano del enunciado se multiplican por el calor de combustion por mol para obtener el calor total disponible." },
            { paso: "Por mol de agua: calentar de 25 a 100 C: 75,29 x 75 = 5,647 kJ/mol. Vaporizar: 40,88 kJ/mol. Total = 46,527 kJ/mol.", porque: "Cada mol de agua de las hojas debe calentarse a 100 C (calor sensible) y vaporizarse (calor latente); la Cp esta en J, por eso se pasa a kJ." },
            { paso: "n(H2O) = 1,560 x 10^6 / 46,527 = 33 535 mol. m(H2O) = 33 535 x 18,02 = 604,3 kg.", porque: "El calor disponible se reparte entre los moles de agua que se pueden evaporar (n = Q / kJ por mol), y m = n x M pasa a kg." },
            { paso: "Masa de hojas: el agua es el 70% de la masa de hojas, m = 604,3 / 0,70 = 863 kg.", porque: "Si el agua es el 70 % de la masa de las hojas, la masa total de hojas es la del agua dividida 0,70." },
            { paso: "Supuestos: 100% del calor va al agua; toda el agua se evapora a 100 C y 1 atm; no se calienta la materia seca.", porque: "El enunciado no da perdidas ni la masa seca de la hoja, por eso se toman estos supuestos ideales." }
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
            { paso: "Ka = 10^-pKa = 10^-6,5 = 3,16 x 10^-7.", porque: "pKa = -log Ka, por lo tanto Ka = 10^-pKa." },
            { paso: "Equilibrio: C6H5COOH <-> H+ + C6H5COO-. Ka = [H+][A-]/[HA].", porque: "El acido benzoico es debil y se disocia parcialmente; la Ka expresa ese equilibrio con las concentraciones de cada especie." },
            { paso: "Balance de carga: [H+] = [A-] + [OH-]. Balance de masa: C = [HA] + [A-].", porque: "La solucion es electroneutra y el acido total analitico C se reparte entre HA y A-." },
            { paso: "Suposiciones: [OH-] despreciable (pH 4); [A-] = [H+] = 1,0 x 10^-4 M (pH = 4,0). Entonces [HA] = C - 1,0 x 10^-4.", porque: "A pH 4 el [OH-] es del orden de 10^-10 y es despreciable; se supone que la [H+] es la del pH limite, 10^-4." },
            { paso: "Ka = (10^-4)^2 / (C - 10^-4) -> C = 10^-4 + 10^-8 / 3,16 x 10^-7 = 10^-4 + 0,0316 = 0,0317 M.", porque: "Se despeja C de la expresion de Ka: C - [H+] = [H+]^2 / Ka, por lo tanto C = [H+] + [H+]^2 / Ka." },
            { paso: "Como el pH debe ser igual o menor a 4,0, la minima concentracion es la que da pH = 4,0.", porque: "Un acido mas concentrado da pH menor; el enunciado pide pH igual o menor a 4,0, por lo que el minimo de C corresponde al pH exacto de 4." }
          ],
          resultado: "C minima aprox. 0,032 M (3,2 x 10^-2 mol/L)."
        },
        {
          parte: "b)",
          pasos: [
            { paso: "Usando C = 0,0317 M (de a): alfa = [H+]/C = 1,0 x 10^-4 / 0,0317 = 3,15 x 10^-3.", porque: "Alfa es la fraccion disociada: [H+] sobre la concentracion total del acido, y se usa la C minima de a)." },
            { paso: "Control: alfa = sqrt(Ka/C) = sqrt(3,16 x 10^-7 / 0,0317) = 3,16 x 10^-3.", porque: "Con la aproximacion de acido debil, alfa = sqrt(Ka/C), que sirve de control independiente." }
          ],
          resultado: "alfa aprox. 0,32 %."
        },
        {
          parte: "c)",
          pasos: [
            { paso: "El HCl es un acido fuerte: se disocia totalmente, HCl -> H+ + Cl-. [H+] = C_HCl.", porque: "El HCl es un acido fuerte y se disocia por completo, asi que su [H+] es igual a su concentracion." },
            { paso: "Para pH 4,0: [H+] = 1,0 x 10^-4 M. El aporte del agua (10^-7 M) es despreciable.", porque: "El pH 4,0 fija [H+] = 10^-4; el agua aporta 10^-7 M de H+, que es 0,1 % del total, por eso se desprecia." },
            { paso: "Por lo tanto C_HCl = 1,0 x 10^-4 M. Es unas 300 veces menos concentrado que el acido benzoico, porque el benzoico se ioniza muy poco.", porque: "El HCl produce 1 H+ por mol, asi que su concentracion iguala la [H+] objetivo; el benzoico, que se ioniza poco, necesita una concentracion unas 300 veces mayor (0,0317 / 10^-4 = 317) para llegar al mismo pH." }
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
