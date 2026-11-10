window.EJERCITACION = window.EJERCITACION || {};

// Masas atomicas usadas (tabla de la teoria, con 2 decimales salvo donde se indica): H 1,01; C 12,01; N 14,01; O 16,00; Ne 20,18; Ca 40,08; Zn 65,38; Cu 63,55; Al 26,98; Fe 55,85; F 19,00; S 32,07; Cl 35,45; Ga 69,72; Rb 85,47; Cr 52,00; Ar 39,95.
// Constantes: N_A = 6,022 x 10^23 mol^-1 ; 1 u = 1,661 x 10^-24 g.

window.EJERCITACION["atomo"] = [
  {
    num: 1,
    nivel: "Básico",
    temas: ["atomo"],
    enunciado: "Para el nucleido 37Cl (A = 37, Z = 17) del cloro, indique el numero de protones, neutrones y electrones de un atomo neutro de ese nucleido.",
    resolucion: [
      {
        parte: "",
        pasos: [
          { paso: "$Z = 17$: el atomo tiene 17 protones. Como es neutro, tiene 17 electrones.", porque: "Usamos que $Z$ es el numero de protones, y que en un atomo neutro los electrones igualan a los protones para que la carga total sea $0$. Como $Z = 17$, el atomo tiene 17 protones y, por ser neutro, tambien 17 electrones. Entonces el dato de $Z$ alcanza para obtener protones y electrones a la vez. Por eso no hay que confundirlo con $A = 37$, que es la suma de protones y neutrones." },
          { paso: "$$N = A - Z = 37 - 17 = 20$$ neutrones.", porque: "Usamos la relacion $A = Z + N$, que despejada da $N = A - Z$. Reemplazamos con $A = 37$ y $Z = 17$: $N = 37 - 17 = 20$ neutrones. Como control, $Z + N = 17 + 20$ da de nuevo el numero masico $37$, lo que confirma el resultado." }
        ],
        resultado: "17 protones, 20 neutrones y 17 electrones"
      }
    ],
    errores_tipicos: [
      { error: "Tomar A como numero de protones y responder 37 protones.", como_evitar: "Z es el numero de protones (Z = 17 es el cloro); A es protones mas neutrones." },
      { error: "Despejar mal N y escribir N = Z - A o N = A + Z.", como_evitar: "N = A - Z siempre: el numero de neutrones es la diferencia entre el numero masico y el atomico." }
    ]
  },
  {
    num: 2,
    nivel: "Básico",
    temas: ["atomo"],
    enunciado: "Un ion tiene 16 protones, 18 neutrones y 18 electrones. Escriba su simbolo nuclidico completo (A, Z, simbolo y carga) e indique si es un anion o un cation.",
    resolucion: [
      {
        parte: "",
        pasos: [
          { paso: "$Z = 16$ corresponde al azufre, simbolo $\\text{S}$.", porque: "Usamos la tabla periodica, donde cada elemento se identifica por su numero atomico $Z$, que es la cantidad de protones. Como $Z = 16$, buscamos el elemento con 16 protones, que es el azufre, de simbolo $\\text{S}$. Por eso el simbolo $\\text{S}$ vale para cualquier especie con 16 protones, sea neutra o ionizada." },
          { paso: "$$A = Z + N = 16 + 18 = 34$$", porque: "Usamos $A = Z + N$, la relacion entre el numero masico, los protones y los neutrones. Reemplazamos con $Z = 16$ y $N = 18$: $A = 16 + 18 = 34$. Entonces, conociendo $Z$ y $N$, se obtiene $A$, que es el numero que va arriba a la izquierda del simbolo." },
          { paso: "$$\\text{Carga} = \\text{protones} - \\text{electrones} = 16 - 18 = -2$$, es decir $\\text{S}^{2-}$. Es un anion.", porque: "Usamos que la carga del ion es protones menos electrones. Reemplazamos con $16$ protones y $18$ electrones: $16 - 18 = -2$. Como el resultado es negativo, el ion tiene mas electrones que protones, asi que es un anion con carga $2^{-}$, que se escribe como superindice. Por eso el simbolo final es ${}^{34}\\text{S}^{2-}$." }
        ],
        resultado: "${}^{34}\\text{S}^{2-}$ (anion, con 18 electrones)"
      }
    ],
    errores_tipicos: [
      { error: "Escribir la carga como +2 por invertir la resta (18 - 16).", como_evitar: "Carga = protones - electrones = 16 - 18 = -2. Mas electrones que protones implica carga negativa." },
      { error: "Escribir el simbolo sin el numero masico o sin la carga, por ejemplo solo S para el ion sulfuro.", como_evitar: "El simbolo nuclidico completo lleva A arriba a la izquierda y la carga como superindice; en este texto se escribe 34S^2-." }
    ]
  },
  {
    num: 3,
    nivel: "Básico",
    temas: ["atomo"],
    enunciado: "Escriba la configuracion electronica completa del manganeso (Z = 25) en su estado fundamental, e indique su periodo y su grupo en la tabla periodica.",
    resolucion: [
      {
        parte: "",
        pasos: [
          { paso: "Configuracion: $1\\text{s}^{2}\\,2\\text{s}^{2}\\,2\\text{p}^{6}\\,3\\text{s}^{2}\\,3\\text{p}^{6}\\,4\\text{s}^{2}\\,3\\text{d}^{5}$ (suma 25 electrones).", porque: "Usamos el diagrama de Moeller para llenar los subniveles de menor a mayor energia, con maximos de 2 electrones en s, 6 en p y 10 en d. Repartimos los 25 electrones del manganeso: $2 + 2 + 6 + 2 + 6 + 2 + 5 = 25$. Entonces la suma coincide con $Z$, y conviene recordar que $4\\text{s}$ se llena antes que $3\\text{d}$ aunque aparezca despues en la escritura." },
          { paso: "Periodo $= 4$, porque el nivel mas externo es $n = 4$.", porque: "Usamos que el periodo coincide con el numero cuantico principal $n$ del nivel mas externo de la configuracion. En la configuracion obtenida, el nivel mas alto es $n = 4$, asi que reemplazamos y el periodo es $4$. Por eso los electrones de $3\\text{d}$, que pertenecen a un nivel anterior, no cambian el periodo." },
          { paso: "$$\\text{Grupo} = 2\\ (\\text{de } 4\\text{s}) + 5\\ (\\text{de } 3\\text{d}) = 7$$", porque: "Usamos la regla para elementos de bloque d: el grupo es la suma de los electrones de los subniveles s y d de la capa externa. Reemplazamos con $2$ electrones de $4\\text{s}$ y $5$ de $3\\text{d}$: $2 + 5 = 7$. Entonces el manganeso queda en el grupo $7$, y esta regla vale para los grupos $3$ a $12$." }
        ],
        resultado: "$1\\text{s}^{2}\\,2\\text{s}^{2}\\,2\\text{p}^{6}\\,3\\text{s}^{2}\\,3\\text{p}^{6}\\,4\\text{s}^{2}\\,3\\text{d}^{5}$; grupo 7, periodo 4"
      }
    ],
    errores_tipicos: [
      { error: "Asignar grupo 2 contando solo los electrones de 4s.", como_evitar: "En bloque d se suman los electrones de s y d: 2 + 5 = 7." },
      { error: "Escribir 3d^6 por analogia con el hierro, sin contar electrones.", como_evitar: "Sumar la configuracion: 2+2+6+2+6+2+5 = 25, que es exactamente Z del manganeso." }
    ]
  },
  {
    num: 4,
    nivel: "Básico",
    temas: ["atomo"],
    enunciado: "Escriba la configuracion electronica externa (CEE) del bromo (Z = 35), indique su grupo y periodo, y cuantos electrones desapareados tiene en el estado fundamental.",
    resolucion: [
      {
        parte: "",
        pasos: [
          { paso: "Configuracion completa: $1\\text{s}^{2}\\,2\\text{s}^{2}\\,2\\text{p}^{6}\\,3\\text{s}^{2}\\,3\\text{p}^{6}\\,4\\text{s}^{2}\\,3\\text{d}^{10}\\,4\\text{p}^{5}$ (suma 35). La CEE es $4\\text{s}^{2}\\,4\\text{p}^{5}$.", porque: "Usamos el orden de llenado de los subniveles hasta completar los 35 electrones del bromo, lo que da $1\\text{s}^{2}\\,2\\text{s}^{2}\\,2\\text{p}^{6}\\,3\\text{s}^{2}\\,3\\text{p}^{6}\\,4\\text{s}^{2}\\,3\\text{d}^{10}\\,4\\text{p}^{5}$. Como la CEE es la parte correspondiente al nivel mas alto, tomamos $4\\text{s}^{2}\\,4\\text{p}^{5}$ del total. Por eso esa capa externa es la que interviene en las uniones quimicas y se escribe aparte." },
          { paso: "Periodo $4$ ($n = 4$). $$\\text{Grupo} = 10 + 7 = 17$$", porque: "Usamos la regla de bloque p: el grupo es $10$ mas la cantidad de electrones de la CEE, contando s y p. Reemplazamos con $10 + 7 = 17$, ya que la CEE $4\\text{s}^{2}\\,4\\text{p}^{5}$ tiene $7$ electrones. Entonces el bromo queda en el grupo $17$, que corresponde a los halogenos, y el periodo $4$ coincide con el nivel externo." },
          { paso: "Desapareados: $4\\text{p}^{5}$ tiene 3 orbitales; se ocupan con un electron cada uno (3 desapareados) y luego se aparean 2, queda 1 desapareado.", porque: "Usamos la regla de Hund: al llenar un subnivel, cada electron ocupa primero un orbital vacio, y recien despues se aparea. Con $5$ electrones en los $3$ orbitales de $4\\text{p}$, quedan $3$ solos y los $2$ restantes forman un par con dos de ellos. Por eso queda $1$ desapareado y no el total de electrones del subnivel." }
        ],
        resultado: "CEE $4\\text{s}^{2}\\,4\\text{p}^{5}$; grupo 17, periodo 4; 1 electron desapareado"
      }
    ],
    errores_tipicos: [
      { error: "Calcular el grupo solo con el orbital p: 5 + 10 = 15.", como_evitar: "La regla usa todos los electrones de la CEE (s y p): 2 + 5 = 7, y 10 + 7 = 17." },
      { error: "Decir que 4p^5 tiene 0 desapareados porque 'hay pares'.", como_evitar: "Un numero impar de electrones en un subnivel siempre deja al menos un electron desapareado." }
    ]
  },
  {
    num: 5,
    nivel: "Básico",
    temas: ["atomo"],
    enunciado: "El boro natural tiene dos isotopos: 10B (19,9 % de abundancia; masa 10,013 u) y 11B (80,1 %; masa 11,009 u). Calcule la masa atomica promedio del boro en u y la masa, en gramos, de un atomo promedio de boro.",
    resolucion: [
      {
        parte: "",
        pasos: [
          { paso: "$$\\text{Masa promedio} = 0{,}199 \\times 10{,}013\\ \\text{u} + 0{,}801 \\times 11{,}009\\ \\text{u} = 10{,}81\\ \\text{u}$$", porque: "Usamos la masa atomica promedio como suma ponderada, donde cada masa isotopica se multiplica por su abundancia en fraccion. Reemplazamos con $0{,}199 \\times 10{,}013\\ \\text{u} + 0{,}801 \\times 11{,}009\\ \\text{u}$, que da $10{,}81\\ \\text{u}$. Entonces el resultado queda entre las dos masas y mas cerca de $11{,}009\\ \\text{u}$, porque el ${}^{11}\\text{B}$ es el isotopo mas abundante." },
          { paso: "Control: $19{,}9\\ \\% + 80{,}1\\ \\% = 100{,}0\\ \\%$.", porque: "Usamos el control de que la suma de las abundancias de los isotopos debe dar $100\\ \\%$. Reemplazamos con $19{,}9\\ \\% + 80{,}1\\ \\%$, que da $100{,}0\\ \\%$, asi que los datos cierran. Por eso se puede avanzar con el promedio sin arrastrar un dato mal." },
          { paso: "$$\\text{Masa en g} = 10{,}81\\ \\text{u} \\times 1{,}661 \\times 10^{-24}\\ \\text{g/u} = 1{,}80 \\times 10^{-23}\\ \\text{g}$$", porque: "Usamos el factor $1\\ \\text{u} = 1{,}661 \\times 10^{-24}\\ \\text{g}$ para pasar la masa de un atomo promedio de u a gramos. Reemplazamos con $10{,}81\\ \\text{u} \\times 1{,}661 \\times 10^{-24}\\ \\text{g/u}$, que da $1{,}80 \\times 10^{-23}\\ \\text{g}$. Entonces el resultado es la masa de un solo atomo, y no la masa molar, que se expresaria en $\\text{g/mol}$." }
        ],
        resultado: "Masa atomica promedio = $10{,}81\\ \\text{u}$; un atomo promedio pesa $1{,}80 \\times 10^{-23}\\ \\text{g}$"
      }
    ],
    errores_tipicos: [
      { error: "Tomar como masa atomica la del isotopo mas abundante (11,009 u).", como_evitar: "La masa de la tabla es el promedio ponderado de todos los isotopos, no la de uno solo." },
      { error: "Multiplicar por 19,9 y 80,1 sin dividir por 100.", como_evitar: "Pasar cada porcentaje a fraccion (19,9 % -> 0,199) antes de ponderar." }
    ]
  },
  {
    num: 6,
    nivel: "Intermedio",
    temas: ["atomo"],
    enunciado: "El galio tiene dos isotopos naturales: 69Ga (60,1 % de abundancia; masa 68,93 u) y 71Ga (39,9 %; masa 70,92 u). a) Calcule la masa atomica promedio del galio. b) Para el ion 71Ga^3+, indique el numero de protones, neutrones y electrones, y escriba su configuracion electronica.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Fracciones: $0{,}601$ para ${}^{69}\\text{Ga}$ y $0{,}399$ para ${}^{71}\\text{Ga}$.", porque: "Usamos fracciones para ponderar, dividiendo los porcentajes por 100 para que cada abundancia funcione como un peso. Reemplazamos $60{,}1\\ \\%$ por $0{,}601$ y $39{,}9\\ \\%$ por $0{,}399$, de modo que ambas fracciones suman $1$. Entonces el promedio no sale multiplicado por $100$ y queda en la escala correcta." },
          { paso: "$$\\text{Masa promedio} = 0{,}601 \\times 68{,}93\\ \\text{u} + 0{,}399 \\times 70{,}92\\ \\text{u} = 69{,}72\\ \\text{u}$$", porque: "Usamos el promedio ponderado: cada masa isotopica se multiplica por su fraccion y luego se suman los productos. Reemplazamos con $0{,}601 \\times 68{,}93\\ \\text{u} + 0{,}399 \\times 70{,}92\\ \\text{u}$, que da $69{,}72\\ \\text{u}$. Como los pesos suman $1$, el resultado queda en u y es comparable con el valor de la tabla periodica del galio." },
          { paso: "Control: $69{,}72\\ \\text{u}$ queda entre $68{,}93\\ \\text{u}$ y $70{,}92\\ \\text{u}$, mas cerca de ${}^{69}\\text{Ga}$, que es el mas abundante.", porque: "Usamos la propiedad de que un promedio ponderado siempre queda entre las masas que promedia. Reemplazamos con $68{,}93\\ \\text{u}$ y $70{,}92\\ \\text{u}$, y $69{,}72\\ \\text{u}$ cae dentro de ese rango, mas cerca de $68{,}93\\ \\text{u}$. Como el ${}^{69}\\text{Ga}$ es el mas abundante, el valor debe quedar cerca de su masa; si no, hay un error en las cuentas." }
        ],
        resultado: "Masa atomica promedio = $69{,}72\\ \\text{u}$"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "$\\text{Protones} = Z = 31$. $\\text{Neutrones} = A - Z = 71 - 31 = 40$. $\\text{Electrones} = 31 - 3 = 28$.", porque: "Usamos que $Z$ identifica al elemento y que en un ion los protones no cambian. Con $A = 71$ y $Z = 31$, calculamos $N = 71 - 31 = 40$ neutrones. Como la carga es $+3$, el ion perdio $3$ electrones respecto del neutro, asi que $31 - 3 = 28$ electrones." },
          { paso: "Configuracion del $\\text{Ga}^{3+}$: $1\\text{s}^{2}\\,2\\text{s}^{2}\\,2\\text{p}^{6}\\,3\\text{s}^{2}\\,3\\text{p}^{6}\\,3\\text{d}^{10}$ (suma 28).", porque: "Usamos la configuracion del atomo neutro y quitamos electrones desde el nivel mas externo. Al perder $3$ electrones se van el $4\\text{p}^{1}$ y el $4\\text{s}^{2}$, y el $3\\text{d}^{10}$ queda completo. Por eso la suma de los superindices debe dar $28$, que es la cantidad de electrones del ion." }
        ],
        resultado: "31 protones, 40 neutrones, 28 electrones; $\\text{Ga}^{3+}$: $1\\text{s}^{2}\\,2\\text{s}^{2}\\,2\\text{p}^{6}\\,3\\text{s}^{2}\\,3\\text{p}^{6}\\,3\\text{d}^{10}$"
      }
    ],
    errores_tipicos: [
      { error: "Promediar las dos masas sin ponderar: (68,93 + 70,92)/2 = 69,93 u.", como_evitar: "Cada masa se multiplica por su abundancia antes de sumar; el isotopo mas abundante tira el promedio hacia su valor." },
      { error: "Quitar los electrones del 3d al formar el cation Ga^3+.", como_evitar: "Los electrones que se pierden salen del nivel mas externo (4s y 4p); el 3d se conserva." }
    ]
  },
  {
    num: 7,
    nivel: "Intermedio",
    temas: ["atomo"],
    enunciado: "Los nucleidos A y B son isobaros (tienen el mismo numero masico A = 40). El atomo neutro A tiene 18 electrones; el nucleido B tiene 20 neutrones. a) Identifique los elementos de A y de B, y escriba la composicion nuclear de cada uno. b) Indique cuantos electrones tiene el ion B^2+ y que especie es isoelectronica con A.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "A es neutro con 18 electrones, entonces $Z = 18$ (argon, $\\text{Ar}$) y $N = 40 - 18 = 22$ neutrones.", porque: "Usamos que en un atomo neutro los electrones igualan a $Z$, asi que $18$ electrones dan $Z = 18$, que corresponde al argon. Con $A = 40$ calculamos $N = 40 - 18 = 22$ neutrones. Entonces la composicion de A queda definida por $Z$ y $N$." },
          { paso: "B: $$Z = A - N = 40 - 20 = 20$$, que corresponde al calcio ($\\text{Ca}$).", porque: "Usamos $Z = A - N$, que sale de $A = Z + N$. Reemplazamos con $A = 40$ y $N = 20$: $Z = 40 - 20 = 20$, y ese valor corresponde al calcio en la tabla periodica. Por eso el nucleido B es ${}^{40}\\text{Ca}$ y no un isotopo del argon." },
          { paso: "Composicion: $\\text{A} = 18\\ \\text{p}, \\ 22\\ \\text{n}, \\ 18\\ \\text{e}$; $\\text{B} = 20\\ \\text{p}, \\ 20\\ \\text{n}, \\ 20\\ \\text{e}$ (atomo neutro).", porque: "Usamos que en un atomo neutro protones y electrones son iguales, y que la suma de protones y neutrones da el numero masico. Para A tenemos 18 p y 22 n, que suman 40; para B tenemos 20 p y 20 n, que tambien suman 40. Entonces la composicion de cada especie queda completa y coincide con lo pedido." }
        ],
        resultado: "A = ${}^{40}\\text{Ar}$ (18 p, 22 n, 18 e); B = ${}^{40}\\text{Ca}$ (20 p, 20 n, 20 e)"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "$\\text{Ca}^{2+}$ tiene $20 - 2 = 18$ electrones.", porque: "Usamos que un cation de carga $2+$ pierde $2$ electrones respecto del atomo neutro. Como el Ca tiene $20$ electrones, reemplazamos: $20 - 2 = 18$ electrones. Por eso el elemento sigue siendo calcio, pero el ion tiene menos electrones que el atomo." },
          { paso: "Como el Ar tambien tiene $18$ electrones, $\\text{Ca}^{2+}$ es isoelectronico con A (Ar).", porque: "Usamos la definicion de especies isoelectronicas: tienen la misma cantidad de electrones y la misma configuracion. Comparamos $\\text{Ca}^{2+}$, con $18$ electrones, con el Ar, que tambien tiene $18$. Entonces ambas especies son isoelectronicas, aunque tengan distinto numero de protones." }
        ],
        resultado: "$\\text{Ca}^{2+}$ tiene 18 electrones; es isoelectronico con el Ar (atomo A)"
      }
    ],
    errores_tipicos: [
      { error: "Decir que A y B son isotopos porque ambos tienen masa 40.", como_evitar: "Isotopos tienen el mismo Z; isobaros tienen el mismo A y distinto Z. Aca Z = 18 y 20: son isobaros." },
      { error: "Calcular N de B como A + Z (40 + 20 = 60).", como_evitar: "N = A - Z; el numero de neutrones se resta del numero masico." }
    ]
  },
  {
    num: 8,
    nivel: "Intermedio",
    temas: ["atomo"],
    enunciado: "Un cation X^3+ tiene la configuracion electronica 1s^2 2s^2 2p^6 3s^2 3p^6 3d^5. a) Indique el numero atomico y el simbolo del elemento X, y escriba la configuracion electronica del atomo neutro. b) Indique el grupo y el periodo de X, y cuantos electrones desapareados tiene el cation X^3+.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Electrones del cation: $$2 + 2 + 6 + 2 + 6 + 5 = 23$$.", porque: "Usamos la configuracion dada y sumamos los electrones de cada subnivel: $2 + 2 + 6 + 2 + 6 + 5$. Reemplazando, el total es $23$ electrones para el cation $\\text{X}^{3+}$. Ese valor es el punto de partida, porque despues se corrige por la carga para llegar al atomo neutro." },
          { paso: "Atomo neutro: $$23 + 3 = 26$$ electrones, entonces $Z = 26$ y $\\text{X} = \\text{Fe}$ (hierro).", porque: "Usamos que el cation $+3$ tiene $3$ electrones menos que el atomo neutro, asi que se suman $3$ a los $23$ del cation. Reemplazamos: $23 + 3 = 26$ electrones. Entonces en el neutro electrones $= Z$, y $Z = 26$ identifica al hierro. Conviene no restar $3$ en lugar de sumarlos." },
          { paso: "Configuracion neutra: $1\\text{s}^{2}\\,2\\text{s}^{2}\\,2\\text{p}^{6}\\,3\\text{s}^{2}\\,3\\text{p}^{6}\\,4\\text{s}^{2}\\,3\\text{d}^{6}$. El cation perdio 2 electrones de $4\\text{s}$ y 1 de $3\\text{d}$.", porque: "Usamos la configuracion del atomo neutro y quitamos electrones para escribir el cation. Del $4\\text{s}^{2}$ salen $2$ electrones, y del $3\\text{d}^{6}$ sale $1$, lo que da $3\\text{d}^{5}$. Por eso la suma de los electrones quitados, $2 + 1 = 3$, coincide con la carga del ion." }
        ],
        resultado: "$Z = 26$, $\\text{X} = \\text{Fe}$; $\\text{Fe}$: $1\\text{s}^{2}\\,2\\text{s}^{2}\\,2\\text{p}^{6}\\,3\\text{s}^{2}\\,3\\text{p}^{6}\\,4\\text{s}^{2}\\,3\\text{d}^{6}$"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Grupo $8$ ($2$ de $4\\text{s}$ + $6$ de $3\\text{d}$ del atomo neutro), periodo $4$.", porque: "Usamos que el grupo y el periodo se asignan con el atomo neutro, porque el ion no cambia la posicion del elemento en la tabla. Con la CEE del Fe neutro, $4\\text{s}^{2}\\,3\\text{d}^{6}$, el periodo es $4$ y el grupo es $2 + 6 = 8$. Entonces X se ubica en el grupo $8$ y en el periodo $4$." },
          { paso: "En $3\\text{d}^{5}$ hay 5 electrones en 5 orbitales: cada uno ocupa un orbital, asi que hay 5 desapareados.", porque: "Usamos la regla de Hund: cada electron de un subnivel ocupa primero un orbital vacio, y solo despues se aparea. Como $3\\text{d}^{5}$ tiene $5$ electrones en $5$ orbitales, cada uno queda solo y no hay apareamiento posible. Por eso el cation $\\text{X}^{3+}$ tiene $5$ electrones desapareados, y ese numero explica su comportamiento magnetico." }
        ],
        resultado: "Grupo $8$, periodo $4$; el cation $\\text{X}^{3+}$ tiene $5$ electrones desapareados"
      }
    ],
    errores_tipicos: [
      { error: "Quitar los electrones de 3d antes que los de 4s al formar el cation.", como_evitar: "Al ionizar, salen primero los de 4s y luego los de 3d, aunque en la escritura el 3d aparezca antes." },
      { error: "Ubicar el elemento en el grupo 5 contando la configuracion del ion (3d^5).", como_evitar: "La ubicacion en la tabla se hace con la configuracion del atomo neutro: grupo 8." }
    ]
  },
  {
    num: 9,
    nivel: "Intermedio",
    temas: ["atomo"],
    enunciado: "Los elementos X (Z = 15) e Y (Z = 17) pertenecen al mismo periodo. a) Escriba la configuracion electronica externa (CEE) de cada uno, e indique su grupo y periodo. b) Indique cual de los dos tiene mayor electronegatividad y cual tiene mayor radio atomico, justificando con su posicion en la tabla.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "X ($Z = 15$, fosforo): $1\\text{s}^{2}\\,2\\text{s}^{2}\\,2\\text{p}^{6}\\,3\\text{s}^{2}\\,3\\text{p}^{3}$; CEE = $3\\text{s}^{2}\\,3\\text{p}^{3}$. Y ($Z = 17$, cloro): CEE = $3\\text{s}^{2}\\,3\\text{p}^{5}$.", porque: "Usamos el orden de llenado de los subniveles hasta completar $Z$ electrones, con $Z = 15$ para X y $Z = 17$ para Y. De esa configuracion tomamos solo los electrones del nivel mas externo, que son los que intervienen en el enlace. Entonces la CEE de X es $3\\text{s}^{2}\\,3\\text{p}^{3}$ y la de Y es $3\\text{s}^{2}\\,3\\text{p}^{5}$." },
          { paso: "Periodo $3$ para ambos. $$\\text{Grupo de X} = 10 + 5 = 15$$; grupo de Y = $10 + 7 = 17$.", porque: "Usamos que el periodo coincide con el nivel externo, que es el $3$ para ambos elementos. Para el grupo en bloque p calculamos $10 + 5 = 15$ para X y $10 + 7 = 17$ para Y. Por eso X queda en el grupo $15$ con $5$ electrones externos e Y en el grupo $17$ con $7$." }
        ],
        resultado: "X: $3\\text{s}^{2}\\,3\\text{p}^{3}$, grupo 15, periodo 3; Y: $3\\text{s}^{2}\\,3\\text{p}^{5}$, grupo 17, periodo 3"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Mayor electronegatividad: Y (Cl), porque esta mas a la derecha en el periodo.", porque: "Usamos que en un mismo periodo la carga nuclear aumenta de izquierda a derecha, y los electrones de valencia quedan mas fuertemente atraidos. Como Y (Cl) esta mas a la derecha que X (P) en el periodo $3$, la atraccion sobre sus electrones es mayor. Entonces Y es el elemento mas electronegativo de los dos." },
          { paso: "Mayor radio atomico: X (P), porque el radio disminuye al avanzar en el periodo.", porque: "Usamos que en un periodo el radio atomico disminuye al avanzar hacia la derecha, porque aumenta $Z$ dentro del mismo nivel de energia. Como X (P) esta a la izquierda de Y (Cl), su nube electronica es mas grande. Por eso X (P) tiene el mayor radio atomico, y la comparacion solo vale dentro del mismo periodo." }
        ],
        resultado: "Mayor electronegatividad: Y (Cl); mayor radio atomico: X (P)"
      }
    ],
    errores_tipicos: [
      { error: "Decir que X e Y estan en el grupo 3 porque su n es 3.", como_evitar: "El n mas alto da el periodo (fila); el grupo (columna) sale de los electrones de la CEE." },
      { error: "Afirmar que el radio aumenta hacia la derecha en un periodo.", como_evitar: "En un periodo el radio disminuye hacia la derecha; en un grupo aumenta hacia abajo." }
    ]
  },
  {
    num: 10,
    nivel: "Intermedio",
    temas: ["atomo"],
    enunciado: "El ion Y^2+ es isoelectronico con el argon (Z = 18). a) Identifique el elemento Y y escriba la configuracion electronica del ion Y^2+. b) Compare el radio del ion Y^2+ con el del atomo neutro Y y con el del argon, justificando.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Ar tiene $18$ electrones; por ser isoelectronico, $\\text{Y}^{2+}$ tambien tiene $18$.", porque: "Usamos que el Ar tiene $18$ electrones, y que un ion isoelectronico con el argon tiene la misma cantidad. Reemplazamos: $\\text{Y}^{2+}$ tiene $18$ electrones. Por eso podemos obtener los electrones de $\\text{Y}^{2+}$ sin escribir su configuracion desde cero." },
          { paso: "Atomo neutro $\\text{Y}$: $$18 + 2 = 20$$ electrones, entonces $Z = 20$ y $\\text{Y} = \\text{Ca}$ (calcio).", porque: "Usamos que para pasar del ion al atomo neutro hay que sumar la carga a los electrones. Reemplazamos con $18 + 2 = 20$ electrones. Como en el atomo neutro electrones $= Z$, se obtiene $Z = 20$, que corresponde al calcio." },
          { paso: "Configuracion de $\\text{Ca}^{2+}$: $1\\text{s}^{2}\\,2\\text{s}^{2}\\,2\\text{p}^{6}\\,3\\text{s}^{2}\\,3\\text{p}^{6}$ (se pierden los $4\\text{s}^{2}$).", porque: "Usamos la configuracion del Ca neutro, cuyo nivel mas externo es $4\\text{s}^{2}$. Al formar $\\text{Ca}^{2+}$ se quitan esos dos electrones, y queda $1\\text{s}^{2}\\,2\\text{s}^{2}\\,2\\text{p}^{6}\\,3\\text{s}^{2}\\,3\\text{p}^{6}$. Entonces la configuracion coincide con la del argon, lo que confirma que $\\text{Ca}^{2+}$ es isoelectronico con Ar." }
        ],
        resultado: "$\\text{Y} = \\text{Ca}$; $\\text{Ca}^{2+}$: $1\\text{s}^{2}\\,2\\text{s}^{2}\\,2\\text{p}^{6}\\,3\\text{s}^{2}\\,3\\text{p}^{6}$"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "$R(\\text{Ca}^{2+}) < R(\\text{Ca})$: el cation perdio su nivel $4$ externo y tiene menos repulsion electronica.", porque: "Usamos que un cation pierde electrones, y al disminuir la repulsion entre ellos la nube electronica se contrae. Como el $\\text{Ca}^{2+}$ pierde los $2$ electrones de su nivel mas externo, el nivel $4$ desaparece. Por eso el radio del cation es menor que el del atomo neutro del que proviene." },
          { paso: "$R(\\text{Ca}^{2+}) < R(\\text{Ar})$: ambos tienen $18$ electrones, pero $\\text{Ca}^{2+}$ tiene $Z = 20$, con mas carga nuclear que atrae mas a la misma nube electronica.", porque: "Usamos que en especies isoelectronicas la nube tiene la misma cantidad de electrones, pero el nucleo con mas protones la atrae mas. Reemplazamos: $\\text{Ca}^{2+}$ tiene $Z = 20$ y el Ar tiene $Z = 18$, con $18$ electrones en ambos. Entonces el $\\text{Ca}^{2+}$ queda mas chico, porque su nucleo atrae con mas fuerza a la misma nube." },
          { paso: "Ademas $R(\\text{Ar}) < R(\\text{Ca})$ porque Ca esta en el periodo $4$ y Ar en el $3$.", porque: "Usamos que el radio aumenta al pasar a un periodo mayor, porque aparece un nivel de energia adicional. Como el Ca esta en el periodo $4$ y el Ar en el $3$, el Ca neutro tiene un nivel mas. Por eso el Ca neutro es mas grande que el Ar, y esta comparacion se hace entre atomos neutros." }
        ],
        resultado: "$R(\\text{Ca}^{2+}) < R(\\text{Ar}) < R(\\text{Ca})$"
      }
    ],
    errores_tipicos: [
      { error: "Decir que el cation es mas grande que el atomo porque tiene 'mas carga'.", como_evitar: "Un cation pierde electrones y su radio se achica; comparar siempre cation < atomo neutro." },
      { error: "Calcular los electrones del atomo neutro como 18 - 2 = 16.", como_evitar: "Atomo neutro = ion + carga positiva: 18 + 2 = 20 electrones." }
    ]
  },
  {
    num: 11,
    nivel: "Avanzado",
    temas: ["atomo"],
    enunciado: "Se presentan los siguientes cuartetos de numeros cuanticos (n, l, m, s) de electrones de atomos en estado fundamental: (a) (2, 2, 0, +1/2); (b) (3, 1, -1, -1/2); (c) (4, 0, 1, +1/2); (d) (3, 2, -2, +1/2); (e) (1, 0, 0, 0). a) Indique cuales son validos y justifique cada caso. b) Para los validos, indique el subnivel y el maximo de electrones que admite ese subnivel.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "(a) no es valido: con $n = 2$, $l$ puede valer $0$ o $1$, pero no $2$.", porque: "Usamos los rangos de cada numero cuantico: $l$ va de $0$ a $n - 1$, $m$ de $-l$ a $+l$, y $s$ solo puede valer $+\\frac{1}{2}$ o $-\\frac{1}{2}$. Con $n = 2$, los valores permitidos de $l$ son $0$ y $1$, asi que $l = 2$ no entra. Por eso la combinacion (a) no es valida, aunque los demas numeros sean correctos." },
          { paso: "(b) es valido: $n = 3$, $l = 1$ (subnivel $3\\text{p}$), $m = -1$ esta entre $-1$ y $+1$, $s = -\\frac{1}{2}$.", porque: "Usamos el rango de $m$ para $l = 1$, que permite $-1$, $0$ y $+1$. Con $n = 3$ y $l = 1$ el subnivel es $3\\text{p}$, y $m = -1$ cae dentro de ese rango. Como $s = -\\frac{1}{2}$ tambien es valido, los cuatro numeros cumplen sus restricciones a la vez." },
          { paso: "(c) no es valido: con $l = 0$, $m$ solo puede valer $0$, y $m = +1$ no esta permitido.", porque: "Usamos que con $l = 0$ (subnivel $\\text{s}$) el unico valor permitido para $m$ es $0$. Reemplazamos: como $m = +1$ es distinto de $0$, la combinacion (c) no existe para ese subnivel. Por eso se descarta, aunque $+1$ este dentro del rango de un $l$ mayor." },
          { paso: "(d) es valido: $n = 3$, $l = 2$ (subnivel $3\\text{d}$), $m = -2$ es uno de los $5$ valores ($-2$ a $+2$).", porque: "Usamos que con $l = 2$ el subnivel es $3\\text{d}$ y $m$ toma los cinco valores $-2$, $-1$, $0$, $+1$ y $+2$. Como $m = -2$ aparece en esa lista, la combinacion (d) es valida. Entonces cada subnivel tiene $2l + 1$ orbitales, en este caso $5$." },
          { paso: "(e) no es valido: $s = 0$ no existe.", porque: "Usamos que el numero de espin $s$ es una propiedad del electron que solo admite $+\\frac{1}{2}$ o $-\\frac{1}{2}$. Reemplazamos con $s = 0$, valor que no corresponde a ningun electron. Por eso el cuarteto (e) no es valido, y conviene revisar este numero al final porque es el que mas se olvida." }
        ],
        resultado: "Validos: (b) y (d)"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "(b) subnivel $3\\text{p}$: 3 orbitales $\\times$ 2 electrones = maximo $6$ electrones.", porque: "Usamos que cada orbital admite como maximo $2$ electrones con espines opuestos, por el principio de exclusion de Pauli. Con $l = 1$ el subnivel $3\\text{p}$ tiene $2l + 1 = 3$ orbitales, asi que reemplazamos: $3 \\times 2 = 6$ electrones. Entonces el maximo para (b) es $6$ electrones." },
          { paso: "(d) subnivel $3\\text{d}$: 5 orbitales $\\times$ 2 electrones = maximo $10$ electrones.", porque: "Usamos que el subnivel d tiene $2l + 1$ orbitales, y con $l = 2$ da $5$ orbitales. Como cada orbital admite $2$ electrones, reemplazamos: $5 \\times 2 = 10$ electrones. Entonces el subnivel $3\\text{d}$ de (d) admite un maximo de $10$ electrones, con el mismo razonamiento que en el caso anterior." }
        ],
        resultado: "(b): subnivel $3\\text{p}$, maximo $6$ electrones; (d): subnivel $3\\text{d}$, maximo $10$ electrones"
      }
    ],
    errores_tipicos: [
      { error: "No verificar la relacion entre n y l: aceptar (2, 2, 0, +1/2) porque m = 0 y s son correctos.", como_evitar: "Primero chequear l <= n - 1 y despues -l <= m <= +l y s = +/-1/2." },
      { error: "Decir que el subnivel 3d admite 2 electrones (confundir por orbital con por subnivel).", como_evitar: "Por orbital, 2; por subnivel, 2 x (2l + 1): el 3d tiene 5 orbitales y admite 10 electrones." }
    ]
  },
  {
    num: 12,
    nivel: "Avanzado",
    temas: ["atomo"],
    enunciado: "Se consideran los iones S^2-, Cl^-, K^+ y Ca^2+. a) Indique cuantos electrones tiene cada ion y justifique si son isoelectronicos. b) Ordene los cuatro iones de mayor a menor radio, justificando. c) Calcule la masa, en gramos, de un atomo de 34S (masa atomica 33,97 u).",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "$\\text{S}^{2-}$: $16 + 2 = 18$ electrones; $\\text{Cl}^{-}$: $17 + 1 = 18$; $\\text{K}^{+}$: $19 - 1 = 18$; $\\text{Ca}^{2+}$: $20 - 2 = 18$.", porque: "Usamos que para un anion se suma a $Z$ el valor absoluto de la carga, y para un cation se resta la carga a $Z$. Reemplazamos: $\\text{S}^{2-}$ con $16 + 2 = 18$, $\\text{Cl}^{-}$ con $17 + 1 = 18$, $\\text{K}^{+}$ con $19 - 1 = 18$ y $\\text{Ca}^{2+}$ con $20 - 2 = 18$. Entonces los cuatro iones tienen $18$ electrones." },
          { paso: "Los cuatro tienen $18$ electrones y la misma configuracion $1\\text{s}^{2}\\,2\\text{s}^{2}\\,2\\text{p}^{6}\\,3\\text{s}^{2}\\,3\\text{p}^{6}$: son isoelectronicos.", porque: "Usamos la definicion de isoelectronicos: deben tener el mismo numero de electrones y la misma configuracion. Comprobamos que los cuatro tienen $18$ electrones y la configuracion $1\\text{s}^{2}\\,2\\text{s}^{2}\\,2\\text{p}^{6}\\,3\\text{s}^{2}\\,3\\text{p}^{6}$. Por eso son isoelectronicos, y podemos aplicar la regla de radios." }
        ],
        resultado: "18 electrones en cada ion; son isoelectronicos"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "$Z$: $\\text{S} = 16 < \\text{Cl} = 17 < \\text{K} = 19 < \\text{Ca} = 20$.", porque: "Usamos que, con el mismo numero de electrones, la diferencia de tamano depende de la carga nuclear, es decir de $Z$. Ordenamos los $Z$ de menor a mayor: $\\text{S} = 16 < \\text{Cl} = 17 < \\text{K} = 19 < \\text{Ca} = 20$. Entonces el radio se ordena en sentido inverso, y conviene usar $Z$ y no la carga del ion." },
          { paso: "Mayor $Z$, menor radio: $\\text{S}^{2-} > \\text{Cl}^{-} > \\text{K}^{+} > \\text{Ca}^{2+}$.", porque: "Usamos la regla de que, entre isoelectronicos, a mayor $Z$ mayor atraccion del nucleo sobre la nube electronica, que queda mas contraida. Reemplazamos: $\\text{S}^{2-}$ tiene $Z = 16$ y $\\text{Ca}^{2+}$ tiene $Z = 20$. Por eso el $\\text{S}^{2-}$ es el de mayor radio y el $\\text{Ca}^{2+}$ el de menor." }
        ],
        resultado: "$\\text{S}^{2-} > \\text{Cl}^{-} > \\text{K}^{+} > \\text{Ca}^{2+}$"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "$$m = 33{,}97\\ \\text{u} \\times 1{,}661 \\times 10^{-24}\\ \\text{g/u} = 5{,}64 \\times 10^{-23}\\ \\text{g}$$", porque: "Usamos el factor $1\\ \\text{u} = 1{,}661 \\times 10^{-24}\\ \\text{g}$ para pasar la masa de un atomo de u a gramos. Reemplazamos con $33{,}97\\ \\text{u} \\times 1{,}661 \\times 10^{-24}\\ \\text{g/u}$, que da $5{,}64 \\times 10^{-23}\\ \\text{g}$. Entonces el resultado es la masa de un solo atomo, porque la masa molar daria la de un mol entero." }
        ],
        resultado: "$5{,}64 \\times 10^{-23}\\ \\text{g}$"
      }
    ],
    errores_tipicos: [
      { error: "Calcular los electrones del anion como Z - carga (S^2- con 14 electrones).", como_evitar: "Anion: electrones = Z + |carga| = 16 + 2 = 18." },
      { error: "Ordenar los iones isoelectronicos por carga y no por Z (decir que Ca^2+ es el mas grande).", como_evitar: "Entre isoelectronicos el radio disminuye al aumentar Z; el anion de menor Z es el mas grande." },
      { error: "Escribir la masa del atomo como 33,97 g.", como_evitar: "La masa en u es de un atomo; pasarla a g con 1 u = 1,661 x 10^-24 g da un valor del orden de 10^-23 g." }
    ]
  },
  {
    num: 13,
    nivel: "Avanzado",
    temas: ["atomo"],
    enunciado: "El rubidio natural tiene dos isotopos: 85Rb (masa 84,91 u) y 87Rb (masa 86,91 u). Sabiendo que la masa atomica promedio del Rb es 85,47 u, calcule: a) el porcentaje de abundancia de cada isotopo; b) el numero de neutrones del 87Rb y el numero de electrones del ion Rb^+; c) la masa, en gramos, de un atomo de 87Rb.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Llamo $x$ a la fraccion de ${}^{85}\\text{Rb}$; la de ${}^{87}\\text{Rb}$ es $(1 - x)$, porque las abundancias suman $1$.", porque: "Usamos que las abundancias suman $1$, por lo que si $x$ es la fraccion del ${}^{85}\\text{Rb}$, la del ${}^{87}\\text{Rb}$ es $1 - x$. Como hay dos incognitas pero una sola restriccion, el problema se reduce a una ecuacion con una variable. Entonces basta con despejar $x$ para obtener ambas abundancias." },
          { paso: "$$84{,}91\\,x + 86{,}91\\,(1 - x) = 85{,}47$$, es decir $86{,}91 - 2{,}00\\,x = 85{,}47$, y $x = 0{,}720$.", porque: "Usamos el promedio ponderado: cada masa isotopica se multiplica por su fraccion y la suma se iguala a $85{,}47\\ \\text{u}$. Reemplazamos con $84{,}91\\,x + 86{,}91\\,(1 - x) = 85{,}47$, que se reduce a $86{,}91 - 2{,}00\\,x = 85{,}47$. Entonces $x = 0{,}720$, y el signo del termino $(1 - x)$ no debe olvidarse al distribuir." },
          { paso: "Abundancias: ${}^{85}\\text{Rb} = 72{,}0\\ \\%$; ${}^{87}\\text{Rb} = 28{,}0\\ \\%$.", porque: "Usamos que el porcentaje es la fraccion multiplicada por $100$. Reemplazamos con $0{,}720 \\times 100 = 72{,}0\\ \\%$ para el ${}^{85}\\text{Rb}$, y el ${}^{87}\\text{Rb}$ queda con $28{,}0\\ \\%$. Entonces la suma de ambos da $100\\ \\%$, lo que confirma que el despeje es correcto." }
        ],
        resultado: "${}^{85}\\text{Rb}$: $72{,}0\\ \\%$; ${}^{87}\\text{Rb}$: $28{,}0\\ \\%$"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "$$N({}^{87}\\text{Rb}) = 87 - 37 = 50$$ neutrones.", porque: "Usamos $N = A - Z$, con $Z$ el numero atomico del rubidio, que es el mismo para todos sus isotopos. Reemplazamos con $A = 87$ y $Z = 37$: $N = 87 - 37 = 50$ neutrones. Por eso el ${}^{87}\\text{Rb}$ tiene $50$ neutrones, y el valor de $Z$ se toma de la tabla periodica." },
          { paso: "$\\text{Rb}^{+}$ tiene $37 - 1 = 36$ electrones.", porque: "Usamos que un cation de carga $+1$ pierde un electron respecto del atomo neutro. Reemplazamos con los $37$ electrones del neutro: $37 - 1 = 36$ electrones. Entonces el ion $\\text{Rb}^{+}$ tiene $36$ electrones, mientras que sus protones siguen siendo $37$." }
        ],
        resultado: "${}^{87}\\text{Rb}$: 50 neutrones; $\\text{Rb}^{+}$: 36 electrones"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "$$m({}^{87}\\text{Rb}) = 86{,}91\\ \\text{u} \\times 1{,}661 \\times 10^{-24}\\ \\text{g/u} = 1{,}44 \\times 10^{-22}\\ \\text{g}$$", porque: "Usamos la masa isotopica de $86{,}91\\ \\text{u}$, porque el enunciado pide un isotopo puntual y no el elemento natural. Reemplazamos con $86{,}91\\ \\text{u} \\times 1{,}661 \\times 10^{-24}\\ \\text{g/u}$, que da $1{,}44 \\times 10^{-22}\\ \\text{g}$. Entonces la masa del ${}^{87}\\text{Rb}$ se obtiene con el mismo factor de conversion." }
        ],
        resultado: "$1{,}44 \\times 10^{-22}\\ \\text{g}$"
      }
    ],
    errores_tipicos: [
      { error: "Usar la masa promedio 85,47 u para el atomo de 87Rb.", como_evitar: "La masa promedio es para el elemento natural; un isotopo concreto tiene su propia masa." },
      { error: "Calcular los neutrones como A + Z (87 + 37 = 124).", como_evitar: "N = A - Z siempre." },
      { error: "Plantear la ecuacion sin definir la incognita y obtener abundancias que no suman 100 %.", como_evitar: "Definir x explicitamente y verificar que 85,47 quede entre 84,91 y 86,91." }
    ]
  },
  {
    num: 14,
    nivel: "Avanzado",
    temas: ["atomo"],
    enunciado: "El cobalto (Z = 27) forma los cationes Co^2+ y Co^3+, muy usados en compuestos de coordinacion. a) Escriba la configuracion electronica del atomo neutro de Co y del ion Co^2+, e indique cuantos electrones desapareados tiene cada uno. b) Escriba la configuracion del ion Co^3+ e indique cuantos electrones desapareados tiene.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Co neutro: $1\\text{s}^{2}\\,2\\text{s}^{2}\\,2\\text{p}^{6}\\,3\\text{s}^{2}\\,3\\text{p}^{6}\\,4\\text{s}^{2}\\,3\\text{d}^{7}$ (suma 27).", porque: "Usamos el orden de llenado para escribir la configuracion del neutro, y sumamos los superindices hasta llegar a $27$, que es $Z$ del cobalto. Con $1\\text{s}^{2}\\,2\\text{s}^{2}\\,2\\text{p}^{6}\\,3\\text{s}^{2}\\,3\\text{p}^{6}\\,4\\text{s}^{2}\\,3\\text{d}^{7}$ la suma da $27$ electrones. Por eso la configuracion es correcta y podemos seguir con los desapareados." },
          { paso: "$\\text{Co}^{2+}$ (25 electrones): se quitan los 2 electrones de $4\\text{s}$: $1\\text{s}^{2}\\,2\\text{s}^{2}\\,2\\text{p}^{6}\\,3\\text{s}^{2}\\,3\\text{p}^{6}\\,3\\text{d}^{7}$.", porque: "Usamos que al ionizar un metal de transicion los electrones salen primero del nivel mas externo, es decir del $4\\text{s}$. Reemplazamos: $\\text{Co}^{2+}$ tiene $27 - 2 = 25$ electrones, al quitar los $2$ de $4\\text{s}$. Entonces el $3\\text{d}^{7}$ se mantiene y la configuracion del ion es $1\\text{s}^{2}\\,2\\text{s}^{2}\\,2\\text{p}^{6}\\,3\\text{s}^{2}\\,3\\text{p}^{6}\\,3\\text{d}^{7}$." },
          { paso: "En $3\\text{d}^{7}$ (5 orbitales): los 5 orbitales reciben un electron cada uno y los 2 restantes forman 2 pares, asi que hay 3 desapareados, tanto en Co como en $\\text{Co}^{2+}$.", porque: "Usamos la regla de Hund: cada orbital d recibe un electron antes de aparearse. Con $7$ electrones en $5$ orbitales, primero quedan $5$ solos y los $2$ restantes se aparean con $2$ de ellos, lo que deja $3$ desapareados. Por eso el resultado es $3$ tanto en Co como en $\\text{Co}^{2+}$, porque ambos tienen $3\\text{d}^{7}$." }
        ],
        resultado: "Co: $3\\text{d}^{7}\\,4\\text{s}^{2}$, 3 desapareados; $\\text{Co}^{2+}$: $3\\text{d}^{7}$, 3 desapareados"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "$\\text{Co}^{3+}$: $27 - 3 = 24$ electrones, configuracion $1\\text{s}^{2}\\,2\\text{s}^{2}\\,2\\text{p}^{6}\\,3\\text{s}^{2}\\,3\\text{p}^{6}\\,3\\text{d}^{6}$ (se quitan los 2 de $4\\text{s}$ y 1 de $3\\text{d}$).", porque: "Usamos que $\\text{Co}^{3+}$ pierde $3$ electrones respecto del neutro: primero los $2$ de $4\\text{s}$ y luego $1$ de $3\\text{d}$. Reemplazamos: $27 - 3 = 24$ electrones, que coincide con la configuracion $3\\text{d}^{6}$. Por eso el $24$ sirve como control para no equivocarse al escribir el ion." },
          { paso: "En $3\\text{d}^{6}$: 4 orbitales con un electron cada uno y 1 con par; quedan 4 desapareados.", porque: "Usamos la regla de Hund: los electrones del $3\\text{d}$ se reparten primero uno por orbital, y recien despues se aparean. Con $6$ electrones en $5$ orbitales, uno de los orbitales recibe dos y los otros cuatro quedan con un electron cada uno. Entonces hay $4$ desapareados, porque el par reduce en $1$ el total de electrones solos." }
        ],
        resultado: "$\\text{Co}^{3+}$: $1\\text{s}^{2}\\,2\\text{s}^{2}\\,2\\text{p}^{6}\\,3\\text{s}^{2}\\,3\\text{p}^{6}\\,3\\text{d}^{6}$, con 4 desapareados"
      }
    ],
    errores_tipicos: [
      { error: "Quitar los electrones de 3d antes que los de 4s al formar Co^2+.", como_evitar: "Al ionizar salen primero los del nivel mas externo (4s), aunque en la escritura el 3d aparezca antes." },
      { error: "Decir que Co^3+ tiene 3 desapareados por copiar el caso de Co^2+.", como_evitar: "Contar sobre la configuracion del ion: 3d^6 deja 4 desapareados." }
    ]
  },
  {
    num: 15,
    nivel: "Avanzado",
    temas: ["atomo"],
    enunciado: "El neon natural tiene tres isotopos: 20Ne (90,48 % de abundancia; masa 19,992 u), 21Ne (0,27 %; masa 20,994 u) y 22Ne (9,25 %; masa 21,991 u). a) Calcule la masa atomica promedio del neon y verifique que coincide con el valor de la tabla (20,18 u). b) Calcule la masa, en gramos, de un atomo promedio de neon. c) Indique cuantos neutrones tiene el isotopo 21Ne y cuantos electrones tiene el ion Ne^2+.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Suma de abundancias: $$90{,}48 + 0{,}27 + 9{,}25 = 100{,}00\\ \\%$$.", porque: "Usamos que los tres isotopos cubren todo el neon natural, por lo que sus abundancias deben sumar $100\\ \\%$. Reemplazamos: $90{,}48 + 0{,}27 + 9{,}25 = 100{,}00\\ \\%$. Entonces los datos son consistentes y podemos promediar sin arrastrar un error." },
          { paso: "Masa promedio $= 0{,}9048 \\times 19{,}992 + 0{,}0027 \\times 20{,}994 + 0{,}0925 \\times 21{,}991 = 20{,}18$ u.", porque: "Usamos la masa promedio como suma ponderada, pasando cada porcentaje a fraccion dividiendo por $100$. Reemplazamos: $0{,}9048 \\times 19{,}992 + 0{,}0027 \\times 20{,}994 + 0{,}0925 \\times 21{,}991 = 20{,}18\\ \\text{u}$. Por eso el resultado coincide con el valor de la tabla, $20{,}18\\ \\text{u}$, lo que verifica el calculo." }
        ],
        resultado: "Masa atomica promedio = $20{,}18\\ \\text{u}$ (verificada)"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "$$m = 20{,}18\\ \\text{u} \\times 1{,}661 \\times 10^{-24}\\ \\text{g/u} = 3{,}35 \\times 10^{-23}\\ \\text{g}$$", porque: "Usamos el factor $1\\ \\text{u} = 1{,}661 \\times 10^{-24}\\ \\text{g}$ para pasar la masa promedio de u a gramos. Reemplazamos con $20{,}18\\ \\text{u} \\times 1{,}661 \\times 10^{-24}\\ \\text{g/u}$, que da $3{,}35 \\times 10^{-23}\\ \\text{g}$. Entonces el resultado es la masa de un solo atomo promedio, y no la de un mol." }
        ],
        resultado: "$3{,}35 \\times 10^{-23}\\ \\text{g}$"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "${}^{21}\\text{Ne}$: $$N = 21 - 10 = 11$$ neutrones.", porque: "Usamos $N = A - Z$, con $Z = 10$ tomado de la tabla periodica para el neon. Reemplazamos con $A = 21$: $N = 21 - 10 = 11$ neutrones. Por eso el ${}^{21}\\text{Ne}$ tiene $11$ neutrones, un dato distinto del de los otros isotopos del mismo elemento." },
          { paso: "$\\text{Ne}^{2+}$: $10 - 2 = 8$ electrones.", porque: "Usamos que un cation con carga $+2$ pierde $2$ electrones respecto del atomo neutro. Reemplazamos con los $10$ electrones del Ne: $10 - 2 = 8$ electrones. Entonces el ion $\\text{Ne}^{2+}$ tiene $8$ electrones." }
        ],
        resultado: "${}^{21}\\text{Ne}$: 11 neutrones; $\\text{Ne}^{2+}$: 8 electrones"
      }
    ],
    errores_tipicos: [
      { error: "Tomar 20 u como masa promedio porque el 20Ne es el mas abundante.", como_evitar: "La masa promedio pondera los tres isotopos: da 20,18 u, no 20 u." },
      { error: "Escribir la masa de un atomo como 20,18 g (sin cambiar de unidad).", como_evitar: "Un atomo pesa del orden de 10^-23 g; el factor 1,661 x 10^-24 g/u es obligatorio." },
      { error: "Usar el porcentaje directamente en la suma (90,48 x 19,992) sin dividir por 100.", como_evitar: "Pasar cada porcentaje a fraccion antes de ponderar." }
    ]
  },
  {
    num: 16,
    nivel: "Tipo parcial",
    temas: ["atomo", "uniones"],
    enunciado: "En un laboratorio de analisis de minerales se estudia un compuesto desconocido de un metal M. Los datos de espectroscopia indican que el cation M^3+ tiene la configuracion electronica 1s^2 2s^2 2p^6 3s^2 3p^6 3d^3. Ademas, una muestra de cloro natural tiene masa atomica promedio de 35,45 u y esta formada por los isotopos 35Cl (34,97 u) y 37Cl (36,97 u). a) Identifique el elemento M: escriba su numero atomico, su simbolo y su ubicacion en grupo y periodo. b) Escriba la configuracion electronica del atomo neutro de M e indique cuantos electrones desapareados tiene. Justifique por que su configuracion no coincide con la esperada por el orden de llenado. c) Calcule el porcentaje de abundancia de cada isotopo del cloro. d) Justifique por que el radio del cation M^3+ es menor que el del atomo neutro M, y escriba la formula del cloruro que forma M^3+ con el ion Cl^-, justificando su estequiometria.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "Electrones de $\\text{M}^{3+}$: $$2 + 2 + 6 + 2 + 6 + 3 = 21$$.", porque: "Usamos la configuracion dada del $\\text{M}^{3+}$ y sumamos los superindices: $2 + 2 + 6 + 2 + 6 + 3$. Reemplazamos y obtenemos $21$ electrones en el cation. Ese valor es el punto de partida, porque el paso siguiente lo corrige con la carga para llegar al atomo neutro y a su $Z$." },
          { paso: "Atomo neutro: $$21 + 3 = 24$$ electrones, entonces $Z = 24$ y $\\text{M} = \\text{Cr}$ (cromo).", porque: "Usamos que el cation $+3$ tiene $3$ electrones menos que el atomo neutro, asi que se suman $3$ a los $21$ del cation. Reemplazamos: $21 + 3 = 24$ electrones. Entonces $Z = 24$ identifica al cromo, y conviene no restar la carga en lugar de sumarla." },
          { paso: "$\\text{Cr}$: periodo $4$ y grupo $6$ (1 electron de $4\\text{s}$ + 5 de $3\\text{d}$).", porque: "Usamos que el periodo lo da el $n$ mas alto de la configuracion externa, que en este caso es $4$. Para el bloque d el grupo es la suma de los electrones de $4\\text{s}$ y $3\\text{d}$, con $1 + 5 = 6$. Por eso el cromo queda en el grupo $6$ y el periodo $4$." }
        ],
        resultado: "$\\text{M} = \\text{Cr}$, $Z = 24$, grupo 6, periodo 4"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Configuracion real del Cr: $1\\text{s}^{2}\\,2\\text{s}^{2}\\,2\\text{p}^{6}\\,3\\text{s}^{2}\\,3\\text{p}^{6}\\,4\\text{s}^{1}\\,3\\text{d}^{5}$. La esperada por orden de llenado seria $4\\text{s}^{2}\\,3\\text{d}^{4}$.", porque: "Usamos la excepcion del cromo al orden de llenado: un $3\\text{d}$ semilleno tiene menor energia que el $3\\text{d}^{4}$ con $4\\text{s}^{2}$. Reemplazamos con $1\\text{s}^{2}\\,2\\text{s}^{2}\\,2\\text{p}^{6}\\,3\\text{s}^{2}\\,3\\text{p}^{6}\\,4\\text{s}^{1}\\,3\\text{d}^{5}$, que suma $24$ electrones. Por eso el atomo toma un electron de $4\\text{s}$ para ocupar el $3\\text{d}^{5}$, y el total de electrones se mantiene en $24$." },
          { paso: "Desapareados: $3\\text{d}^{5}$ tiene 5 electrones en 5 orbitales, y el $4\\text{s}^{1}$ aporta 1 mas: $6$ desapareados.", porque: "Usamos la regla de Hund: los 5 electrones del $3\\text{d}$ ocupan un orbital distinto cada uno, y el electron de $4\\text{s}$ queda solo. Reemplazamos: $5 + 1$ electrones desapareados, lo que da $6$. Entonces el cromo tiene $6$ electrones desapareados." }
        ],
        resultado: "Cr: $1\\text{s}^{2}\\,2\\text{s}^{2}\\,2\\text{p}^{6}\\,3\\text{s}^{2}\\,3\\text{p}^{6}\\,4\\text{s}^{1}\\,3\\text{d}^{5}$; 6 electrones desapareados"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "Sea $x$ la fraccion de ${}^{35}\\text{Cl}$: $$34{,}97\\,x + 36{,}97\\,(1 - x) = 35{,}45$$.", porque: "Usamos el promedio ponderado con $x$ como fraccion del ${}^{35}\\text{Cl}$, y $1 - x$ como fraccion del ${}^{37}\\text{Cl}$. Reemplazamos con $34{,}97\\,x + 36{,}97\\,(1 - x) = 35{,}45$, la misma tecnica del caso del rubidio. Entonces queda una sola ecuacion con una sola incognita, que se resuelve despejando $x$." },
          { paso: "$36{,}97 - 2{,}00\\,x = 35{,}45$, de donde $x = 0{,}760$.", porque: "Usamos la propiedad distributiva: $36{,}97\\,(1 - x) = 36{,}97 - 36{,}97\\,x$, y luego agrupamos los terminos con $x$. Reemplazamos: $36{,}97 - 2{,}00\\,x = 35{,}45$, de donde $x = 0{,}760$. Por eso $x$ queda entre $0$ y $1$, lo que confirma que es una fraccion valida." },
          { paso: "Abundancias: ${}^{35}\\text{Cl} = 76{,}0\\ \\%$; ${}^{37}\\text{Cl} = 24{,}0\\ \\%$.", porque: "Usamos que el porcentaje es la fraccion multiplicada por $100$. Reemplazamos con $0{,}760 \\times 100 = 76{,}0\\ \\%$ para el ${}^{35}\\text{Cl}$, y el ${}^{37}\\text{Cl}$ queda con $24{,}0\\ \\%$. Entonces la suma de ambos da $100\\ \\%$, lo que confirma el resultado." }
        ],
        resultado: "${}^{35}\\text{Cl}$: $76{,}0\\ \\%$; ${}^{37}\\text{Cl}$: $24{,}0\\ \\%$"
      },
      {
        parte: "d)",
        pasos: [
          { paso: "$\\text{Cr}^{3+}$ conserva $Z = 24$ pero tiene 3 electrones menos que el Cr neutro: la misma carga nuclear atrae a menos electrones y el radio se achica.", porque: "Usamos que un cation es mas chico que su atomo neutro porque pierde electrones, y la repulsion entre ellos disminuye. Como el $\\text{Cr}^{3+}$ conserva $Z = 24$, la carga nuclear atrae ahora a menos electrones. Por eso la nube electronica se contrae y el radio del $\\text{Cr}^{3+}$ es menor que el del Cr neutro." },
          { paso: "$\\text{Cr}^{3+}$ ($+3$) necesita 3 iones $\\text{Cl}^{-}$ ($-1$ cada uno) para que la carga total sea cero: 1 Cr por cada 3 Cl.", porque: "Usamos que, para que el compuesto sea neutro, la carga positiva total debe igualar a la negativa total. Reemplazamos: la carga $+3$ del $\\text{Cr}^{3+}$ se iguala con $3 \\times (-1)$ de los $\\text{Cl}^{-}$. Entonces hacen falta $3$ $\\text{Cl}^{-}$ por cada $\\text{Cr}^{3+}$, y no uno solo por cada Cr." },
          { paso: "Formula: $\\text{CrCl}_3$ (cloruro de cromo(III)).", porque: "Usamos la relacion $1 : 3$ que ya iguala las cargas, y la ponemos como subindices de la formula. Reemplazamos: 1 Cr y 3 Cl dan $\\text{CrCl}_3$. El (III) del nombre indica la carga $+3$ del cromo y sirve para distinguirlo de otros cloruros de cromo." }
        ],
        resultado: "$R(\\text{Cr}^{3+}) < R(\\text{Cr})$; formula $\\text{CrCl}_3$"
      }
    ],
    errores_tipicos: [
      { error: "Calcular los electrones del neutro restando la carga (21 - 3 = 18) en vez de sumarla.", como_evitar: "Atomo neutro = ion + carga positiva: 21 + 3 = 24 electrones." },
      { error: "Escribir la configuracion del Cr como 4s^2 3d^4 siguiendo el orden de llenado.", como_evitar: "Cr y Cu son excepciones: el 3d semilleno o lleno se estabiliza. Verificar que el numero de desapareados coincida con la configuracion real." },
      { error: "Calcular la abundancia promediando las masas sin ponderar: (34,97 + 36,97)/2 = 35,97 u.", como_evitar: "El promedio se pondera por abundancia; el 35Cl, mas abundante, tira el promedio hacia 35." }
    ]
  }
];

window.EJERCITACION["magnitudes"] = [
  {
    num: 1,
    nivel: "Básico",
    temas: ["magnitudes"],
    enunciado: "Calcule la cantidad de sustancia, en mol, de 10,0 g de cinc (Zn) y el numero de atomos presentes en esa muestra. Use M(Zn) = 65,38 g/mol.",
    resolucion: [
      {
        parte: "",
        pasos: [
          { paso: "$$n = \\frac{m}{M} = \\frac{10{,}0\\ \\text{g}}{65{,}38\\ \\text{g/mol}} = 0{,}153\\ \\text{mol}$$", porque: "Usamos $n = \\frac{m}{M}$, que relaciona la masa en gramos con la cantidad de sustancia en mol. Reemplazamos con $\\frac{10{,}0\\ \\text{g}}{65{,}38\\ \\text{g/mol}}$, que da $0{,}153\\ \\text{mol}$. Entonces, como la masa molar esta en $\\text{g/mol}$, el resultado sale en mol sin cambios de unidad." },
          { paso: "$N = n \\times N_{A} = 0{,}153\\ \\text{mol} \\times 6{,}022 \\times 10^{23}\\ \\text{mol}^{-1} = 9{,}21 \\times 10^{22}$ atomos.", porque: "Usamos $N = n \\times N_{A}$, porque un mol contiene $N_{A}$ unidades elementales. Reemplazamos con $0{,}153\\ \\text{mol} \\times 6{,}022 \\times 10^{23}\\ \\text{mol}^{-1}$, lo que da $9{,}21 \\times 10^{22}$ atomos. Por eso, como el Zn es monoatomico, cada unidad es un atomo y ese es el resultado pedido." }
        ],
        resultado: "$0{,}153\\ \\text{mol}$ de Zn y $9{,}21 \\times 10^{22}$ atomos"
      }
    ],
    errores_tipicos: [
      { error: "Multiplicar la masa por N_A sin pasar antes a mol.", como_evitar: "Primero n = m/M; despues N = n x N_A." },
      { error: "Redondear n a 0,15 mol antes de multiplicar (da 9,0 x 10^22).", como_evitar: "Guardar cifras intermedias y redondear solo el resultado final a 3 cifras significativas." }
    ]
  },
  {
    num: 2,
    nivel: "Básico",
    temas: ["magnitudes"],
    enunciado: "Calcule la masa, en gramos, de un atomo de calcio, sabiendo que su masa atomica es 40,08 u.",
    resolucion: [
      {
        parte: "",
        pasos: [
          { paso: "$$m = 40{,}08\\ \\text{u} \\times 1{,}661 \\times 10^{-24}\\ \\text{g/u} = 6{,}66 \\times 10^{-23}\\ \\text{g}$$", porque: "Usamos la conversion $1\\ \\text{u} = 1{,}661 \\times 10^{-24}\\ \\text{g}$ para pasar la masa atomica de u a gramos. Reemplazamos con $40{,}08\\ \\text{u} \\times 1{,}661 \\times 10^{-24}\\ \\text{g/u}$, que da $6{,}66 \\times 10^{-23}\\ \\text{g}$. Entonces el resultado es la masa de un solo atomo de calcio, del orden de $10^{-23}\\ \\text{g}$." },
          { paso: "Control: $\\frac{M}{N_{A}} = \\frac{40{,}08\\ \\text{g/mol}}{6{,}022 \\times 10^{23}\\ \\text{mol}^{-1}} = 6{,}66 \\times 10^{-23}\\ \\text{g}$.", porque: "Usamos que un atomo pesa $\\frac{M}{N_{A}}$ gramos, porque un mol pesa $M$ y contiene $N_{A}$ atomos. Reemplazamos con $\\frac{40{,}08\\ \\text{g/mol}}{6{,}022 \\times 10^{23}\\ \\text{mol}^{-1}}$, que da $6{,}66 \\times 10^{-23}\\ \\text{g}$. Por eso el resultado coincide con la conversion desde u, lo que confirma el factor $1\\ \\text{u} = 1{,}661 \\times 10^{-24}\\ \\text{g}$." }
        ],
        resultado: "$6{,}66 \\times 10^{-23}\\ \\text{g}$ por atomo de Ca"
      }
    ],
    errores_tipicos: [
      { error: "Responder 40,08 g: confundir u con g.", como_evitar: "La masa de un atomo es del orden de 10^-23 g; si da 40 g falta la conversion." },
      { error: "Usar 1 u = 1 g sin el factor 1/N_A.", como_evitar: "1 u = 1/N_A g = 1,661 x 10^-24 g." }
    ]
  },
  {
    num: 3,
    nivel: "Básico",
    temas: ["magnitudes"],
    enunciado: "Calcule la masa molecular del acido sulfurico (H2SO4), expresada en u, y la masa, en gramos, de 0,250 mol de esta sustancia.",
    resolucion: [
      {
        parte: "",
        pasos: [
          { paso: "$$M(\\text{H}_2\\text{SO}_4) = 2 \\times 1{,}01 + 32{,}07 + 4 \\times 16{,}00 = 98{,}09$$ (u, y g/mol).", porque: "Usamos que la masa molar se obtiene sumando cada masa atomica tantas veces como indica su subindice. Reemplazamos con $2 \\times 1{,}01$ para el H, $32{,}07$ para el S y $4 \\times 16{,}00$ para el O, que suman $98{,}09$. Entonces el valor es el mismo en u y en $\\text{g/mol}$, aunque cambie la unidad." },
          { paso: "$m = n \\times M = 0{,}250\\ \\text{mol} \\times 98{,}09\\ \\text{g/mol} = 24{,}5\\ \\text{g}$", porque: "Usamos $m = n \\times M$, que convierte mol en gramos, porque la masa molar da gramos por cada mol. Reemplazamos con $0{,}250\\ \\text{mol} \\times 98{,}09\\ \\text{g/mol}$, que da $24{,}5\\ \\text{g}$. Entonces el producto queda en gramos, como pide el enunciado." }
        ],
        resultado: "$M = 98{,}09\\ \\text{u}$ ($98{,}09\\ \\text{g/mol}$); $0{,}250\\ \\text{mol}$ pesan $24{,}5\\ \\text{g}$"
      }
    ],
    errores_tipicos: [
      { error: "No contar la atomicidad: tomar 4 O como 1 O (M = 2,02 + 32,07 + 16,00 = 50,09).", como_evitar: "Multiplicar cada masa por su subindice: 4 x 16,00 para el oxigeno." },
      { error: "Decir que 98,09 u es la masa de un mol.", como_evitar: "u es la masa de una molecula; g/mol es la masa de un mol. Mismo numero, distinta unidad." }
    ]
  },
  {
    num: 4,
    nivel: "Básico",
    temas: ["magnitudes"],
    enunciado: "Calcule la cantidad de sustancia, en mol, y el numero de moleculas de dioxido de carbono (CO2, M = 44,01 g/mol) presentes en 5,00 g de la sustancia.",
    resolucion: [
      {
        parte: "",
        pasos: [
          { paso: "$$n = \\frac{m}{M} = \\frac{5{,}00\\ \\text{g}}{44{,}01\\ \\text{g/mol}} = 0{,}114\\ \\text{mol}$$", porque: "Usamos $n = \\frac{m}{M}$, que relaciona la masa de la muestra con la cantidad de sustancia. Reemplazamos con $\\frac{5{,}00\\ \\text{g}}{44{,}01\\ \\text{g/mol}}$, que da $0{,}114\\ \\text{mol}$. Por eso dividir la masa dada por la masa molar da los mol presentes en esa muestra." },
          { paso: "$N = n \\times N_{A} = 0{,}114\\ \\text{mol} \\times 6{,}022 \\times 10^{23}\\ \\text{mol}^{-1} = 6{,}84 \\times 10^{22}$ moleculas.", porque: "Usamos $N = n \\times N_{A}$, porque cada mol contiene $N_{A}$ unidades. Reemplazamos con $0{,}114\\ \\text{mol} \\times 6{,}022 \\times 10^{23}\\ \\text{mol}^{-1}$, que da $6{,}84 \\times 10^{22}$ moleculas. Como el enunciado pide moleculas y la sustancia es molecular, la unidad elemental es la molecula y no se multiplica por la atomicidad." }
        ],
        resultado: "$0{,}114\\ \\text{mol}$ y $6{,}84 \\times 10^{22}$ moleculas de $\\text{CO}_2$"
      }
    ],
    errores_tipicos: [
      { error: "Calcular las moleculas multiplicando la masa por N_A (5,00 x 6,022 x 10^23).", como_evitar: "Primero n = m/M y despues N = n x N_A." },
      { error: "Contar atomos en lugar de moleculas (multiplicar por 3).", como_evitar: "Atomos solo si el enunciado los pide; aca la pregunta es por moleculas." }
    ]
  },
  {
    num: 5,
    nivel: "Básico",
    temas: ["magnitudes"],
    enunciado: "El etanol (C2H5OH, M = 46,07 g/mol) tiene densidad 0,789 g/cm^3 a 20 C. Calcule su volumen molar en cm^3/mol y el volumen que ocupan 2,00 mol de etanol liquido.",
    resolucion: [
      {
        parte: "",
        pasos: [
          { paso: "$$V_{m} = \\frac{M}{d} = \\frac{46{,}07\\ \\text{g/mol}}{0{,}789\\ \\text{g/cm}^{3}} = 58{,}4\\ \\text{cm}^{3}/\\text{mol}$$", porque: "Usamos que el volumen molar de un liquido es el volumen que ocupa un mol, y se obtiene dividiendo la masa de un mol por la densidad. Reemplazamos con $\\frac{46{,}07\\ \\text{g/mol}}{0{,}789\\ \\text{g/cm}^{3}}$, que da $58{,}4\\ \\text{cm}^{3}/\\text{mol}$. Entonces las unidades quedan en $\\text{cm}^{3}/\\text{mol}$, como corresponde." },
          { paso: "$V = n \\times V_{m} = 2{,}00\\ \\text{mol} \\times 58{,}4\\ \\text{cm}^{3}/\\text{mol} = 117\\ \\text{cm}^{3}$ ($0{,}117\\ \\text{L}$).", porque: "Usamos que el volumen total es proporcional a la cantidad de sustancia, con $V = n \\times V_{m}$. Reemplazamos con $2{,}00\\ \\text{mol} \\times 58{,}4\\ \\text{cm}^{3}/\\text{mol}$, que da $117\\ \\text{cm}^{3}$. Entonces el volumen se pasa a litros, y el resultado final es $0{,}117\\ \\text{L}$." }
        ],
        resultado: "$V_{m} = 58{,}4\\ \\text{cm}^{3}/\\text{mol}$; $2{,}00\\ \\text{mol}$ ocupan $117\\ \\text{cm}^{3}$"
      }
    ],
    errores_tipicos: [
      { error: "Invertir el cociente y calcular d / M.", como_evitar: "V_m = M/d: a igual masa molar, una densidad mayor da un volumen molar menor." },
      { error: "Usar 22,4 L/mol (valor de gas en CNPT) para un liquido.", como_evitar: "22,4 L/mol aplica solo a gases ideales en CNPT; un liquido se calcula con la densidad." }
    ]
  },
  {
    num: 6,
    nivel: "Intermedio",
    temas: ["magnitudes"],
    enunciado: "a) Calcule la cantidad de moleculas presentes en 8,00 g de oxigeno molecular (O2, M = 32,00 g/mol). b) Calcule la masa, en gramos, de una muestra que contiene 3,01 x 10^22 moleculas de CO2 (M = 44,01 g/mol).",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "$$n = \\frac{8{,}00\\ \\text{g}}{32{,}00\\ \\text{g/mol}} = 0{,}250\\ \\text{mol}$$ de $\\text{O}_2$.", porque: "Usamos $n = \\frac{m}{M}$ con la masa molar de la molecula $\\text{O}_2$, que tiene 2 atomos de O. Reemplazamos con $\\frac{8{,}00\\ \\text{g}}{32{,}00\\ \\text{g/mol}}$, que da $0{,}250\\ \\text{mol}$ de $\\text{O}_2$. Por eso se usa la masa molar de la especie que se pesa, y no la masa de un solo atomo de O." },
          { paso: "$N = 0{,}250\\ \\text{mol} \\times 6{,}022 \\times 10^{23}\\ \\text{mol}^{-1} = 1{,}51 \\times 10^{23}$ moleculas.", porque: "Usamos $N = n \\times N_{A}$, porque cada mol de moleculas contiene $N_{A}$ unidades. Reemplazamos con $0{,}250\\ \\text{mol} \\times 6{,}022 \\times 10^{23}\\ \\text{mol}^{-1}$, que da $1{,}51 \\times 10^{23}$ moleculas. Entonces el orden de magnitud $10^{23}$ es coherente con una cantidad de sustancia de $0{,}250\\ \\text{mol}$." }
        ],
        resultado: "$1{,}51 \\times 10^{23}$ moleculas de $\\text{O}_2$"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "$$n = \\frac{3{,}01 \\times 10^{22}}{6{,}022 \\times 10^{23}\\ \\text{moleculas/mol}} = 0{,}0500\\ \\text{mol}$$", porque: "Usamos que pasar de particulas a mol se hace dividiendo por $N_{A}$, la operacion inversa de $N = n \\times N_{A}$. Reemplazamos con $\\frac{3{,}01 \\times 10^{22}\\ \\text{moleculas}}{6{,}022 \\times 10^{23}\\ \\text{moleculas/mol}}$, que da $0{,}0500\\ \\text{mol}$. Por eso el factor de conversion es $6{,}022 \\times 10^{23}\\ \\text{moleculas/mol}$." },
          { paso: "$m = n \\times M = 0{,}0500\\ \\text{mol} \\times 44{,}01\\ \\text{g/mol} = 2{,}20\\ \\text{g}$.", porque: "Usamos $m = n \\times M$, que convierte mol a gramos con $M$ en $\\text{g/mol}$. Reemplazamos con $0{,}0500\\ \\text{mol} \\times 44{,}01\\ \\text{g/mol}$, que da $2{,}20\\ \\text{g}$ de $\\text{CO}_2$. Entonces esta es la operacion inversa de $n = \\frac{m}{M}$, y el resultado queda en gramos." }
        ],
        resultado: "$2{,}20\\ \\text{g}$ de $\\text{CO}_2$"
      }
    ],
    errores_tipicos: [
      { error: "Usar M(O) = 16,00 g/mol para el O2.", como_evitar: "Para O2, M = 2 x 16,00 = 32,00 g/mol: siempre contar la atomicidad de la especie." },
      { error: "En b) multiplicar el numero de moleculas por M (dando 1,32 x 10^24 g).", como_evitar: "De particulas a mol se divide por N_A; de mol a gramos se multiplica por M." }
    ]
  },
  {
    num: 7,
    nivel: "Intermedio",
    temas: ["magnitudes"],
    enunciado: "Una tableta de aspirina (C9H8O4, M = 180,17 g/mol) contiene 500 mg de sustancia activa. a) Calcule la cantidad de sustancia, en mol, y el numero de moleculas de C9H8O4 en una tableta. b) Calcule el numero de atomos de carbono presentes en la tableta.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "$m = 500\\ \\text{mg} = 0{,}500\\ \\text{g}$; $$n = \\frac{0{,}500\\ \\text{g}}{180{,}17\\ \\text{g/mol}} = 2{,}78 \\times 10^{-3}\\ \\text{mol}$$.", porque: "Usamos $n = \\frac{m}{M}$, pero antes hay que pasar la masa a gramos, porque la masa molar esta en $\\text{g/mol}$. Reemplazamos con $500\\ \\text{mg} = 0{,}500\\ \\text{g}$, y luego $\\frac{0{,}500\\ \\text{g}}{180{,}17\\ \\text{g/mol}}$, que da $2{,}78 \\times 10^{-3}\\ \\text{mol}$. Por eso no conviene dividir los miligramos directamente por la masa molar, porque el resultado saldria demasiado grande." },
          { paso: "$$N = 2{,}78 \\times 10^{-3}\\ \\text{mol} \\times 6{,}022 \\times 10^{23}\\ \\text{mol}^{-1} = 1{,}67 \\times 10^{21}$$ moleculas.", porque: "Usamos $N = n \\times N_{A}$, porque cada mol de moleculas contiene $N_{A}$ moleculas. Reemplazamos con $2{,}78 \\times 10^{-3}\\ \\text{mol} \\times 6{,}022 \\times 10^{23}\\ \\text{mol}^{-1}$, que da $1{,}67 \\times 10^{21}$ moleculas. Entonces el resultado es del orden de $10^{21}$, coherente con una muestra de $0{,}5\\ \\text{g}$ de sustancia." }
        ],
        resultado: "$2{,}78 \\times 10^{-3}\\ \\text{mol}$ y $1{,}67 \\times 10^{21}$ moleculas"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Cada molecula tiene 9 atomos de $\\text{C}$ (subindice $9$).", porque: "Usamos que el subindice de un elemento en la formula indica cuantos atomos de ese elemento tiene cada molecula. Como la formula es $\\text{C}_9\\text{H}_8\\text{O}_4$, el subindice $9$ corresponde al carbono. Por eso este $9$ es el factor que pasa de moleculas a atomos de $\\text{C}$." },
          { paso: "$$\\text{Atomos de C} = 9 \\times 1{,}67 \\times 10^{21} = 1{,}50 \\times 10^{22}$$ atomos.", porque: "Usamos que el total de atomos de C es el numero de moleculas multiplicado por 9, porque cada molecula aporta 9 atomos de C. Reemplazamos con $9 \\times 1{,}67 \\times 10^{21}$, que da $1{,}50 \\times 10^{22}$ atomos. Entonces el total resulta 9 veces el numero de moleculas, como se esperaba." }
        ],
        resultado: "$1{,}50 \\times 10^{22}$ atomos de $\\text{C}$"
      }
    ],
    errores_tipicos: [
      { error: "No pasar mg a g: calcular n = 500 / 180,17.", como_evitar: "1 g = 1000 mg; con mg el resultado sale 1000 veces mayor." },
      { error: "Contar 1 atomo de C por molecula sin mirar el subindice 9.", como_evitar: "El subindice multiplica: hay 9 atomos de C por molecula." }
    ]
  },
  {
    num: 8,
    nivel: "Intermedio",
    temas: ["magnitudes"],
    enunciado: "Un cubo macizo de aluminio tiene 2,00 cm de arista y densidad 2,70 g/cm^3. a) Calcule la masa del cubo, en gramos. b) Calcule la cantidad de sustancia de aluminio, en mol, y el numero de atomos presentes. Use M(Al) = 26,98 g/mol.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "$$V = (2{,}00\\ \\text{cm})^{3} = 8{,}00\\ \\text{cm}^{3}$$.", porque: "Usamos que el volumen de un cubo es la arista elevada al cubo. Reemplazamos con $(2{,}00\\ \\text{cm})^{3}$, que da $8{,}00\\ \\text{cm}^{3}$. Por eso la unidad tambien se eleva al cubo, y el resultado queda en $\\text{cm}^{3}$ y no en $\\text{cm}^{2}$." },
          { paso: "$$m = d \\times V = 2{,}70\\ \\text{g/cm}^{3} \\times 8{,}00\\ \\text{cm}^{3} = 21{,}6\\ \\text{g}$$", porque: "Usamos $m = d \\times V$, porque la densidad es la masa por unidad de volumen. Reemplazamos con $2{,}70\\ \\text{g/cm}^{3} \\times 8{,}00\\ \\text{cm}^{3}$, que da $21{,}6\\ \\text{g}$. Entonces las unidades $\\text{cm}^{3}$ se cancelan y el resultado queda en gramos." }
        ],
        resultado: "$21{,}6\\ \\text{g}$"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "$$n = \\frac{21{,}6\\ \\text{g}}{26{,}98\\ \\text{g/mol}} = 0{,}801\\ \\text{mol}$$.", porque: "Usamos $n = \\frac{m}{M}$, la relacion que conecta la masa de la muestra con la cantidad de sustancia en mol. Reemplazamos con $\\frac{21{,}6\\ \\text{g}}{26{,}98\\ \\text{g/mol}}$, que da $0{,}801\\ \\text{mol}$ de aluminio. Por eso la masa de $21{,}6\\ \\text{g}$ obtenida antes se convierte directamente en mol." },
          { paso: "$$N = 0{,}801\\ \\text{mol} \\times 6{,}022 \\times 10^{23}\\ \\text{mol}^{-1} = 4{,}82 \\times 10^{23}$$ atomos.", porque: "Usamos que el aluminio es monoatomico, asi que cada unidad elemental es un atomo. Reemplazamos con $N = 0{,}801\\ \\text{mol} \\times 6{,}022 \\times 10^{23}\\ \\text{mol}^{-1}$, que da $4{,}82 \\times 10^{23}$ atomos. Entonces el orden de magnitud $10^{23}$ es coherente con una muestra de aproximadamente un mol." }
        ],
        resultado: "$0{,}801\\ \\text{mol}$ y $4{,}82 \\times 10^{23}$ atomos de $\\text{Al}$"
      }
    ],
    errores_tipicos: [
      { error: "Calcular el volumen como arista al cuadrado (4,00 cm^3).", como_evitar: "Un cubo tiene volumen arista^3, no arista^2." },
      { error: "Invertir la densidad (m = V / d).", como_evitar: "d = m/V: la masa es densidad por volumen." }
    ]
  },
  {
    num: 9,
    nivel: "Intermedio",
    temas: ["magnitudes"],
    enunciado: "Una muestra de 15,0 g de un compuesto formado solo por C y H contiene 12,0 g de C. Sabiendo que 0,500 mol de la sustancia pesan 15,0 g, determine la formula empirica y la formula molecular del compuesto.",
    resolucion: [
      {
        parte: "",
        pasos: [
          { paso: "$$M = \\frac{m}{n} = \\frac{15{,}0\\ \\text{g}}{0{,}500\\ \\text{mol}} = 30{,}0\\ \\text{g/mol}$$", porque: "Usamos $M = \\frac{m}{n}$, porque la masa molar es la masa de un mol y $n$ se conoce a partir de los datos. Reemplazamos con $\\frac{15{,}0\\ \\text{g}}{0{,}500\\ \\text{mol}}$, que da $30{,}0\\ \\text{g/mol}$. Como $n$ esta en mol y $m$ en g, $M$ queda en $\\text{g/mol}$." },
          { paso: "$m(\\text{H}) = 15{,}0\\ \\text{g} - 12{,}0\\ \\text{g} = 3{,}0\\ \\text{g}$. $$n(\\text{C}) = \\frac{12{,}0\\ \\text{g}}{12{,}01\\ \\text{g/mol}} = 0{,}999\\ \\text{mol}$$; $n(\\text{H}) = \\frac{3{,}0\\ \\text{g}}{1{,}01\\ \\text{g/mol}} = 2{,}97\\ \\text{mol}$.", porque: "Usamos que la muestra solo tiene C e H, por lo que la masa de H es la total menos la de C. Reemplazamos: $15{,}0\\ \\text{g} - 12{,}0\\ \\text{g} = 3{,}0\\ \\text{g}$ de H. Luego aplicamos $n = \\frac{m}{M}$ a cada elemento, con $\\frac{12{,}0\\ \\text{g}}{12{,}01\\ \\text{g/mol}}$ para el C y $\\frac{3{,}0\\ \\text{g}}{1{,}01\\ \\text{g/mol}}$ para el H, lo que da la proporcion entre sus atomos." },
          { paso: "Relacion $\\text{C} : \\text{H} = 0{,}999 : 2{,}97 = 1 : 3$. Formula empirica $\\text{CH}_3$, con $M(\\text{CH}_3) = 15{,}04\\ \\text{g/mol}$.", porque: "Usamos que la formula empirica se obtiene dividiendo los moles de cada elemento por el menor y buscando enteros pequenos. Reemplazamos: $0{,}999 : 2{,}97 = 1 : 3$, porque $2{,}97$ es practicamente $3$. Por eso la formula empirica es $\\text{CH}_3$, con $M(\\text{CH}_3) = 15{,}04\\ \\text{g/mol}$, y conviene verificar que los cocientes queden cerca de enteros." },
          { paso: "Formula molecular: $$\\frac{M}{M(\\text{empirica})} = \\frac{30{,}0}{15{,}04} = 2$$, entonces $\\text{C}_2\\text{H}_6$ (etano).", porque: "Usamos que la formula molecular es un multiplo entero de la empirica, y que ese multiplo se obtiene dividiendo $M$ por la masa molar de la empirica. Reemplazamos con $\\frac{30{,}0}{15{,}04} = 2$, lo que indica que hay dos unidades de $\\text{CH}_3$. Entonces la formula molecular es $\\text{C}_2\\text{H}_6$, es decir etano. Conviene no usar la masa molar de la empirica como si fuera la molecular." }
        ],
        resultado: "Formula empirica $\\text{CH}_3$; formula molecular $\\text{C}_2\\text{H}_6$"
      }
    ],
    errores_tipicos: [
      { error: "Dar la formula empirica CH3 como molecular sin comparar con la masa molar.", como_evitar: "Calcular M/M(empirica): si da 2, la molecular es C2H6." },
      { error: "Redondear mal la relacion (2,97 : 1 escrito como 2 : 1).", como_evitar: "Dividir por el menor numero de moles y redondear al entero mas cercano (2,97 -> 3)." }
    ]
  },
  {
    num: 10,
    nivel: "Intermedio",
    temas: ["magnitudes"],
    enunciado: "La glucosa (C6H12O6, M = 180,18 g/mol) forma una muestra que contiene 4,00 x 10^23 moleculas. a) Calcule la masa de la muestra, en gramos. b) Calcule el numero de atomos de oxigeno presentes.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "$$n = \\frac{4{,}00 \\times 10^{23}\\ \\text{moleculas}}{6{,}022 \\times 10^{23}\\ \\text{moleculas/mol}} = 0{,}664\\ \\text{mol}$$", porque: "Usamos que pasar de moleculas a mol se hace dividiendo por $N_{A}$, la operacion inversa de $N = n \\times N_{A}$. Reemplazamos con $\\frac{4{,}00 \\times 10^{23}\\ \\text{moleculas}}{6{,}022 \\times 10^{23}\\ \\text{moleculas/mol}}$, que da $0{,}664\\ \\text{mol}$. Entonces el dato queda en mol, lista para convertirse en gramos." },
          { paso: "$m = 0{,}664\\ \\text{mol} \\times 180{,}18\\ \\text{g/mol} = 1{,}20 \\times 10^{2}\\ \\text{g}$", porque: "Usamos $m = n \\times M$, que convierte mol en gramos con $M$ en $\\text{g/mol}$. Reemplazamos con $0{,}664\\ \\text{mol} \\times 180{,}18\\ \\text{g/mol}$, que da $1{,}20 \\times 10^{2}\\ \\text{g}$. Como el dato de partida tiene la misma precision que $4{,}00 \\times 10^{23}$ moleculas, el resultado se expresa con esa cantidad de cifras." }
        ],
        resultado: "$1{,}20 \\times 10^{2}\\ \\text{g}$"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Cada molecula tiene 6 atomos de $\\text{O}$ (subindice $6$).", porque: "Usamos que el subindice $6$ de la formula $\\text{C}_6\\text{H}_{12}\\text{O}_6$ indica cuantos atomos de $\\text{O}$ hay en cada molecula. Reemplazamos con ese factor de $6$ para pasar de moleculas a atomos. Por eso el $6$ se multiplica por el numero de moleculas, igual que en el caso del carbono." },
          { paso: "$$\\text{Atomos de O} = 6 \\times 4{,}00 \\times 10^{23} = 2{,}40 \\times 10^{24}$$ atomos.", porque: "Usamos que el total de atomos de $\\text{O}$ es la cantidad de moleculas multiplicada por $6$, porque cada molecula aporta $6$ atomos de $\\text{O}$. Reemplazamos con $6 \\times 4{,}00 \\times 10^{23}$, que da $2{,}40 \\times 10^{24}$ atomos. Entonces el resultado aplica la atomicidad del $\\text{O}$ al numero de moleculas." }
        ],
        resultado: "$2{,}40 \\times 10^{24}$ atomos de $\\text{O}$"
      }
    ],
    errores_tipicos: [
      { error: "Multiplicar 4,00 x 10^23 por 180,18 directamente, sin pasar a mol.", como_evitar: "Moleculas -> mol (dividir por N_A) -> gramos (multiplicar por M)." },
      { error: "Olvidar multiplicar por 6 los atomos de O de la molecula.", como_evitar: "Cada subindice cuenta: 6 O por molecula." }
    ]
  },
  {
    num: 11,
    nivel: "Avanzado",
    temas: ["magnitudes"],
    enunciado: "Una muestra de 195 g de un compuesto ionico EF2 contiene 1,50 x 10^24 unidades formula. El fluor tiene masa atomica 19,00 u. a) Calcule la cantidad de sustancia, en mol, y la masa molar de EF2. b) Calcule la masa atomica de E e identifique el elemento entre Mg (24,31 u), Ca (40,08 u) y Sr (87,62 u). c) Calcule el numero de atomos de F contenidos en 100 g de EF2.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "$$n = \\frac{1{,}50 \\times 10^{24}}{6{,}022 \\times 10^{23}\\ \\text{mol}^{-1}} = 2{,}49\\ \\text{mol}$$", porque: "Usamos $n = \\frac{N}{N_{A}}$ para pasar un numero de unidades a mol. Reemplazamos con $\\frac{1{,}50 \\times 10^{24}}{6{,}022 \\times 10^{23}\\ \\text{mol}^{-1}}$, que da $2{,}49\\ \\text{mol}$. Recien con los mol y la masa de la muestra se puede calcular la masa molar." },
          { paso: "$$M = \\frac{m}{n} = \\frac{195\\ \\text{g}}{2{,}49\\ \\text{mol}} = 78{,}3\\ \\text{g/mol}$$", porque: "Usamos $M = \\frac{m}{n}$, con la masa de la muestra y los mol que calculamos antes. Reemplazamos con $\\frac{195\\ \\text{g}}{2{,}49\\ \\text{mol}}$, que da $78{,}3\\ \\text{g/mol}$. Como los datos tienen esa precision, el resultado se conserva con el mismo numero de cifras." }
        ],
        resultado: "$2{,}49\\ \\text{mol}$; $M(\\text{EF}_2) = 78{,}3\\ \\text{g/mol}$"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "$$M(\\text{E}) = M(\\text{EF}_2) - 2 \\times M(\\text{F}) = 78{,}3 - 2 \\times 19{,}00 = 40{,}3\\ \\text{u}$$", porque: "Usamos que la masa molar de $\\text{EF}_2$ es la masa de $\\text{E}$ mas dos atomos de $\\text{F}$. Reemplazamos: $M(\\text{E}) = 78{,}3 - 2 \\times 19{,}00 = 40{,}3\\ \\text{u}$. Por eso hay que restar los dos atomos de $\\text{F}$, y no solo uno." },
          { paso: "$40{,}3\\ \\text{u}$ esta mas cerca de $\\text{Ca}$ ($40{,}08\\ \\text{u}$) que de $\\text{Mg}$ ($24{,}31\\ \\text{u}$) o $\\text{Sr}$ ($87{,}62\\ \\text{u}$): $\\text{E} = \\text{Ca}$, y el compuesto es $\\text{CaF}_2$. La diferencia de $0{,}2\\ \\text{u}$ viene de redondear.", porque: "Usamos la comparacion de $40{,}3\\ \\text{u}$ con las masas atomicas de la tabla. Como $40{,}3$ esta mas cerca de $\\text{Ca}$ ($40{,}08\\ \\text{u}$) que de $\\text{Mg}$ ($24{,}31\\ \\text{u}$) o $\\text{Sr}$ ($87{,}62\\ \\text{u}$), E es el calcio. Entonces el compuesto es $\\text{CaF}_2$, y la diferencia de $0{,}2\\ \\text{u}$ se atribuye al redondeo." }
        ],
        resultado: "$M(\\text{E}) = 40{,}3\\ \\text{u}$; E = Ca (compuesto $\\text{CaF}_2$)"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "$n(\\text{EF}_2)$ en 100 g: $$n = \\frac{100\\ \\text{g}}{78{,}3\\ \\text{g/mol}} = 1{,}28\\ \\text{mol}$$.", porque: "Usamos $n = \\frac{m}{M}$ para hallar los mol de $\\text{EF}_2$ en la muestra de 100 g. Reemplazamos con $\\frac{100\\ \\text{g}}{78{,}3\\ \\text{g/mol}}$, que da $1{,}28\\ \\text{mol}$. Es el paso previo para contar los atomos de $\\text{F}$." },
          { paso: "$$\\text{Atomos de F} = 2 \\times 1{,}28\\ \\text{mol} \\times 6{,}022 \\times 10^{23}\\ \\text{mol}^{-1} = 1{,}54 \\times 10^{24}$$ atomos.", porque: "Usamos que cada formula de $\\text{EF}_2$ tiene $2$ atomos de $\\text{F}$, por lo que el total es $2 \\times n \\times N_{A}$. Reemplazamos con $2 \\times 1{,}28\\ \\text{mol} \\times 6{,}022 \\times 10^{23}\\ \\text{mol}^{-1}$, que da $1{,}54 \\times 10^{24}$ atomos. Por eso la atomicidad del $\\text{F}$ se aplica antes de convertir a atomos." }
        ],
        resultado: "$1{,}54 \\times 10^{24}$ atomos de $\\text{F}$"
      }
    ],
    errores_tipicos: [
      { error: "Dividir la masa por el numero de unidades (195 g / 1,50 x 10^24) como si diera la masa molar.", como_evitar: "M = m/n: primero pasar unidades a mol (dividir por N_A)." },
      { error: "En b) no restar la masa de los 2 F y dar E = 78,3 u.", como_evitar: "La formula tiene 2 F: M(E) = M(EF2) - 2 x 19,00." }
    ]
  },
  {
    num: 12,
    nivel: "Avanzado",
    temas: ["magnitudes"],
    enunciado: "El agua liquida a 20 C tiene densidad 0,998 g/cm^3. a) Calcule su volumen molar en cm^3/mol y en dm^3/mol. b) Calcule el numero de moleculas contenidas en 250 mL de agua, y la masa, en gramos, de una molecula. c) Justifique por que el volumen molar del agua liquida es muy distinto de 22,4 L/mol.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "$$M(\\text{H}_2\\text{O}) = 2 \\times 1{,}01 + 16{,}00 = 18{,}02\\ \\text{g/mol}$$", porque: "Usamos que la masa molar se calcula sumando las masas atomicas, multiplicadas por sus subindices: 2 H y 1 O. Reemplazamos con $2 \\times 1{,}01 + 16{,}00$, que da $18{,}02\\ \\text{g/mol}$. Entonces tenemos la base para pasar de masa a mol de agua." },
          { paso: "$$V_{m} = \\frac{M}{d} = \\frac{18{,}02\\ \\text{g/mol}}{0{,}998\\ \\text{g/cm}^{3}} = 18{,}06\\ \\text{cm}^{3}/\\text{mol}$$", porque: "Usamos $V_{m} = \\frac{M}{d}$, que da el volumen ocupado por un mol de liquido. Reemplazamos con $\\frac{18{,}02\\ \\text{g/mol}}{0{,}998\\ \\text{g/cm}^{3}}$, que da $18{,}06\\ \\text{cm}^{3}/\\text{mol}$. Conviene verificar que las unidades de $M$ ($\\text{g/mol}$) y $d$ ($\\text{g/cm}^{3}$) den $\\text{cm}^{3}/\\text{mol}$, como sucede aqui." },
          { paso: "$$18{,}06\\ \\text{cm}^{3}/\\text{mol} = 0{,}01806\\ \\text{dm}^{3}/\\text{mol}$$, porque $1\\ \\text{dm}^{3} = 1000\\ \\text{cm}^{3}$.", porque: "Usamos que $1\\ \\text{dm}^{3} = 1000\\ \\text{cm}^{3}$, lo que permite cambiar la unidad del volumen molar. Reemplazamos con $\\frac{18{,}06\\ \\text{cm}^{3}/\\text{mol}}{1000}$, que da $0{,}01806\\ \\text{dm}^{3}/\\text{mol}$. Por eso conviene hacer este cambio antes de comparar con valores tabulados en L." }
        ],
        resultado: "$V_{m} = 18{,}06\\ \\text{cm}^{3}/\\text{mol} = 0{,}01806\\ \\text{dm}^{3}/\\text{mol}$"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "$$m = d \\times V = 0{,}998\\ \\text{g/cm}^{3} \\times 250\\ \\text{cm}^{3} = 249{,}5\\ \\text{g}$$", porque: "Usamos $m = d \\times V$ para pasar de volumen a masa, porque $250\\ \\text{mL}$ equivalen a $250\\ \\text{cm}^{3}$. Reemplazamos con $0{,}998\\ \\text{g/cm}^{3} \\times 250\\ \\text{cm}^{3}$, que da $249{,}5\\ \\text{g}$. Conviene no usar el volumen en mL con una densidad expresada en otra unidad." },
          { paso: "$n = \\frac{249{,}5\\ \\text{g}}{18{,}02\\ \\text{g/mol}} = 13{,}85\\ \\text{mol}$; $$N = 13{,}85\\ \\text{mol} \\times 6{,}022 \\times 10^{23}\\ \\text{mol}^{-1} = 8{,}34 \\times 10^{24}$$ moleculas.", porque: "Usamos $n = \\frac{m}{M}$ para obtener la cantidad de agua, y luego $N = n \\times N_{A}$ para contar moleculas. Reemplazamos con $\\frac{249{,}5\\ \\text{g}}{18{,}02\\ \\text{g/mol}}$, que da $13{,}85\\ \\text{mol}$, y $13{,}85\\ \\text{mol} \\times 6{,}022 \\times 10^{23}\\ \\text{mol}^{-1}$ da $8{,}34 \\times 10^{24}$ moleculas. Por eso conviene no redondear antes de multiplicar por $N_{A}$." },
          { paso: "Masa de una molecula: $$\\frac{M}{N_{A}} = \\frac{18{,}02\\ \\text{g/mol}}{6{,}022 \\times 10^{23}\\ \\text{mol}^{-1}} = 2{,}99 \\times 10^{-23}\\ \\text{g}$$", porque: "Usamos que un mol pesa $M$ gramos y contiene $N_{A}$ moleculas, asi que la masa de una molecula es $\\frac{M}{N_{A}}$. Reemplazamos con $\\frac{18{,}02\\ \\text{g/mol}}{6{,}022 \\times 10^{23}\\ \\text{mol}^{-1}}$, que da $2{,}99 \\times 10^{-23}\\ \\text{g}$. Entonces es el paso inverso al de contar moleculas en una masa dada." }
        ],
        resultado: "$8{,}34 \\times 10^{24}$ moleculas en $250\\ \\text{mL}$; $2{,}99 \\times 10^{-23}\\ \\text{g}$ por molecula"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "El valor $22{,}4\\ \\text{L/mol}$ corresponde a un gas ideal en CNPT ($PV = nRT$); en un gas las moleculas estan separadas por distancias mucho mayores que su tamano.", porque: "Usamos la ecuacion de gases ideales $PV = nRT$, de la que sale el valor $22{,}4\\ \\text{L/mol}$ en condiciones normales. Como ese valor depende de $P$ y de $T$, solo se aplica a gases. Por eso conviene verificar siempre que la sustancia sea un gas antes de usarlo." },
          { paso: "En el liquido las moleculas estan casi en contacto, asi que el volumen molar depende del tamano molecular y la densidad, y resulta del orden de $\\text{cm}^{3}/\\text{mol}$.", porque: "Usamos que un liquido no sigue la ecuacion de gases ideales, porque sus moleculas estan casi en contacto. Reemplazamos el calculo con la masa molar y la densidad del agua: $18{,}02\\ \\text{g/mol}$ y $0{,}998\\ \\text{g/cm}^{3}$, que dan $18{,}06\\ \\text{cm}^{3}/\\text{mol}$. Entonces el volumen molar del agua liquida es del orden de $\\text{cm}^{3}/\\text{mol}$, y no del de $22{,}4\\ \\text{L/mol}$." }
        ],
        resultado: "El agua liquida tiene $V_{m}$ del orden de $18\\ \\text{cm}^{3}/\\text{mol}$ porque sus moleculas estan en contacto; $22{,}4\\ \\text{L/mol}$ aplica solo a gases"
      }
    ],
    errores_tipicos: [
      { error: "Tomar 250 mL como 250 g de agua, sin usar la densidad.", como_evitar: "Usar m = d x V antes de calcular moles." },
      { error: "Usar 22,4 L/mol para el agua liquida.", como_evitar: "22,4 L/mol es para gases en CNPT; el liquido se calcula con la densidad." },
      { error: "Escribir la masa de una molecula en u como si fuera gramos (18,02 g).", como_evitar: "La masa de una molecula es M/N_A, del orden de 10^-23 g." }
    ]
  },
  {
    num: 13,
    nivel: "Avanzado",
    temas: ["magnitudes"],
    enunciado: "Un laton comercial tiene 70,0 % en masa de Cu y 30,0 % en masa de Zn, y densidad 8,47 g/cm^3. Use M(Cu) = 63,55 g/mol y M(Zn) = 65,38 g/mol. En una muestra de 100,0 g de laton calcule: a) la cantidad de Cu y de Zn, en mol; b) el numero total de atomos; c) el volumen que ocupa la muestra.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "$m(\\text{Cu}) = 0{,}700 \\times 100{,}0\\ \\text{g} = 70{,}0\\ \\text{g}$; $m(\\text{Zn}) = 30{,}0\\ \\text{g}$.", porque: "Usamos que los porcentajes en masa se aplican a la masa total de la muestra. Reemplazamos: $0{,}700 \\times 100{,}0\\ \\text{g}$ da $70{,}0\\ \\text{g}$ de Cu, y el $30{,}0\\ \\%$ restante da $30{,}0\\ \\text{g}$ de Zn. Por eso cada masa parcial sirve de base para calcular los moles de cada elemento." },
          { paso: "$$n(\\text{Cu}) = \\frac{70{,}0\\ \\text{g}}{63{,}55\\ \\text{g/mol}} = 1{,}10\\ \\text{mol}$$; $n(\\text{Zn}) = \\frac{30{,}0\\ \\text{g}}{65{,}38\\ \\text{g/mol}} = 0{,}459\\ \\text{mol}$.", porque: "Usamos $n = \\frac{m}{M}$ para cada elemento, con su masa atomica. Reemplazamos con $\\frac{70{,}0\\ \\text{g}}{63{,}55\\ \\text{g/mol}}$, que da $1{,}10\\ \\text{mol}$ de Cu, y $\\frac{30{,}0\\ \\text{g}}{65{,}38\\ \\text{g/mol}}$, que da $0{,}459\\ \\text{mol}$ de Zn. Entonces cada masa parcial queda convertida en moles de atomos de su elemento." }
        ],
        resultado: "$1{,}10\\ \\text{mol}$ de Cu y $0{,}459\\ \\text{mol}$ de Zn"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "$n_{\\text{total}} = 1{,}10 + 0{,}459 = 1{,}56\\ \\text{mol}$ de atomos.", porque: "Usamos que el total de atomos es la suma de los moles de ambos elementos, porque cada atomo cuenta como una unidad. Reemplazamos con $1{,}10 + 0{,}459 = 1{,}56\\ \\text{mol}$ de atomos. Entonces el total de moles sirve para obtener el numero de atomos en el paso siguiente." },
          { paso: "$$N = 1{,}56\\ \\text{mol} \\times 6{,}022 \\times 10^{23}\\ \\text{mol}^{-1} = 9{,}40 \\times 10^{23}$$ atomos.", porque: "Usamos $N = n \\times N_{A}$, aplicado al total de moles de atomos. Reemplazamos con $1{,}56\\ \\text{mol} \\times 6{,}022 \\times 10^{23}\\ \\text{mol}^{-1}$, que da $9{,}40 \\times 10^{23}$ atomos. Por eso conviene sumar primero los moles y multiplicar por $N_{A}$ una sola vez." }
        ],
        resultado: "$9{,}40 \\times 10^{23}$ atomos"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "$$V = \\frac{m}{d} = \\frac{100{,}0\\ \\text{g}}{8{,}47\\ \\text{g/cm}^{3}} = 11{,}8\\ \\text{cm}^{3}$$", porque: "Usamos $d = \\frac{m}{V}$, que despejada da $V = \\frac{m}{d}$, el volumen a partir de la masa y la densidad. Reemplazamos con $\\frac{100{,}0\\ \\text{g}}{8{,}47\\ \\text{g/cm}^{3}}$, que da $11{,}8\\ \\text{cm}^{3}$. Como la densidad esta en $\\text{g/cm}^{3}$, el resultado queda directamente en $\\text{cm}^{3}$." }
        ],
        resultado: "$11{,}8\\ \\text{cm}^{3}$"
      }
    ],
    errores_tipicos: [
      { error: "Usar el porcentaje como cantidad de mol (30 mol de Zn).", como_evitar: "El porcentaje es en masa: pasar a gramos primero y despues n = m/M." },
      { error: "Contar los atomos solo del Cu y olvidar el Zn.", como_evitar: "La muestra tiene los dos elementos; el total de atomos suma ambos." }
    ]
  },
  {
    num: 14,
    nivel: "Avanzado",
    temas: ["magnitudes"],
    enunciado: "Un recipiente contiene 2,00 g de H2 y otro contiene 2,00 g de O2 (M(H2) = 2,02 g/mol; M(O2) = 32,00 g/mol). a) Compare la cantidad de sustancia de ambas muestras e indique en cual hay mas moleculas. b) Calcule el numero de atomos de H presentes en el recipiente de H2. c) Justifique por que, a igual masa, el gas mas liviano tiene mas moleculas.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "$$n(\\text{H}_2) = \\frac{2{,}00\\ \\text{g}}{2{,}02\\ \\text{g/mol}} = 0{,}990\\ \\text{mol}$$; $n(\\text{O}_2) = \\frac{2{,}00\\ \\text{g}}{32{,}00\\ \\text{g/mol}} = 0{,}0625\\ \\text{mol}$.", porque: "Usamos $n = \\frac{m}{M}$ con la masa molar de cada gas: $2{,}02\\ \\text{g/mol}$ para el $\\text{H}_2$ y $32{,}00\\ \\text{g/mol}$ para el $\\text{O}_2$. Reemplazamos con $\\frac{2{,}00\\ \\text{g}}{2{,}02\\ \\text{g/mol}}$, que da $0{,}990\\ \\text{mol}$, y $\\frac{2{,}00\\ \\text{g}}{32{,}00\\ \\text{g/mol}}$, que da $0{,}0625\\ \\text{mol}$. Como las masas son iguales, la comparacion se hace con los moles." },
          { paso: "Hay mas moleculas en el $\\text{H}_2$ ($0{,}990\\ \\text{mol}$ frente a $0{,}0625\\ \\text{mol}$), porque el numero de moleculas es proporcional a $n$.", porque: "Usamos $N = n \\times N_{A}$, por lo que el numero de moleculas es proporcional a la cantidad de sustancia. Reemplazamos: $0{,}990\\ \\text{mol}$ de $\\text{H}_2$ frente a $0{,}0625\\ \\text{mol}$ de $\\text{O}_2$. Por eso la muestra de $\\text{H}_2$ tiene mas moleculas, aunque la masa sea la misma." }
        ],
        resultado: "El $\\text{H}_2$ tiene mas moleculas ($0{,}990\\ \\text{mol}$ contra $0{,}0625\\ \\text{mol}$)"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "$$\\text{Atomos de H} = 2 \\times 0{,}990\\ \\text{mol} \\times 6{,}022 \\times 10^{23}\\ \\text{mol}^{-1} = 1{,}19 \\times 10^{24}$$ atomos.", porque: "Usamos que cada molecula de $\\text{H}_2$ tiene $2$ atomos de $\\text{H}$, y el total se obtiene multiplicando por la cantidad de moleculas. Reemplazamos con $2 \\times 0{,}990\\ \\text{mol} \\times 6{,}022 \\times 10^{23}\\ \\text{mol}^{-1}$, que da $1{,}19 \\times 10^{24}$ atomos. Por eso el $2$ de la atomicidad no puede omitirse." }
        ],
        resultado: "$1{,}19 \\times 10^{24}$ atomos de $\\text{H}$"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "Para una misma masa, $N = \\frac{m \\times N_{A}}{M}$: cuanto menor es $M$, mayor es el numero de moleculas.", porque: "Usamos la combinacion de $N = n \\times N_{A}$ con $n = \\frac{m}{M}$, que da $N = \\frac{m \\times N_{A}}{M}$. Para una misma masa, el numerador es fijo, asi que el numero de moleculas depende inversamente de la masa molar. Entonces, cuanto menor es $M$, mayor es el numero de moleculas en esa masa." },
          { paso: "Las moleculas de $\\text{H}_2$ pesan menos que las de $\\text{O}_2$, asi que la misma masa contiene mas moleculas de $\\text{H}_2$.", porque: "Usamos que la masa molar del $\\text{H}_2$ ($2{,}02\\ \\text{g/mol}$) es mucho menor que la del $\\text{O}_2$ ($32{,}00\\ \\text{g/mol}$), por lo que cada molecula de $\\text{H}_2$ pesa menos. Como la masa total es la misma en ambos recipientes, entran mas moleculas de $\\text{H}_2$. Por eso este es el criterio que decide la respuesta." }
        ],
        resultado: "A igual masa, menor $M$ implica mas moleculas"
      }
    ],
    errores_tipicos: [
      { error: "Usar M(H2) = 2,00 g/mol o M(H) = 1,00 g/mol.", como_evitar: "M(H2) = 2 x 1,01 = 2,02 g/mol." },
      { error: "Decir que el O2 tiene mas moleculas porque es mas pesado.", como_evitar: "A igual masa, la molecula mas liviana es mas numerosa: menor M, mas moles y mas moleculas." }
    ]
  },
  {
    num: 15,
    nivel: "Avanzado",
    temas: ["magnitudes"],
    enunciado: "Un oxido de hierro se analiza: una muestra de 1,60 g contiene 1,12 g de Fe, y el resto es O. Se sabe que 0,250 mol de este oxido pesan 39,9 g. Use Fe = 55,85 u y O = 16,00 u. a) Determine la formula empirica del oxido. b) Verifique con la masa molar la formula molecular. c) Calcule el numero de atomos de oxigeno presentes en la muestra de 1,60 g.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "$m(\\text{O}) = 1{,}60\\ \\text{g} - 1{,}12\\ \\text{g} = 0{,}48\\ \\text{g}$ de O.", porque: "Usamos que la muestra solo tiene Fe y O, por lo que la masa de O es la total menos la de Fe. Reemplazamos con $1{,}60\\ \\text{g} - 1{,}12\\ \\text{g}$, que da $0{,}48\\ \\text{g}$ de O. Entonces esta resta completa la composicion del oxido y permite seguir con los moles." },
          { paso: "$$n(\\text{Fe}) = \\frac{1{,}12}{55{,}85} = 0{,}02005\\ \\text{mol}$$; $n(\\text{O}) = \\frac{0{,}48}{16{,}00} = 0{,}0300\\ \\text{mol}$.", porque: "Usamos $n = \\frac{m}{M}$ para cada elemento, con sus masas atomicas: $55{,}85$ para el Fe y $16{,}00$ para el O. Reemplazamos con $\\frac{1{,}12}{55{,}85} = 0{,}02005\\ \\text{mol}$ de Fe, y $\\frac{0{,}48}{16{,}00} = 0{,}0300\\ \\text{mol}$ de O. Por eso estos moles son los que se comparan para establecer la relacion entre ambos elementos." },
          { paso: "Relacion $\\text{Fe} : \\text{O} = 0{,}02005 : 0{,}0300 = 1 : 1{,}50 = 2 : 3$. Formula empirica $\\text{Fe}_2\\text{O}_3$.", porque: "Usamos que la relacion minima se obtiene dividiendo por el menor numero de moles, que es el del Fe. Reemplazamos: $0{,}02005 : 0{,}0300 = 1 : 1{,}50$, y multiplicando por $2$ queda $2 : 3$. Entonces la formula empirica es $\\text{Fe}_2\\text{O}_3$, porque el $1{,}50$ no es entero hasta multiplicar por $2$." }
        ],
        resultado: "Formula empirica $\\text{Fe}_2\\text{O}_3$"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "$$M(\\text{Fe}_2\\text{O}_3) = 2 \\times 55{,}85 + 3 \\times 16{,}00 = 159{,}70\\ \\text{g/mol}$$", porque: "Usamos que la masa molar se obtiene sumando la masa atomica de cada elemento multiplicada por su subindice. Reemplazamos con $2 \\times 55{,}85 + 3 \\times 16{,}00$, que da $159{,}70\\ \\text{g/mol}$. Por eso este valor se compara con la masa molar obtenida de la muestra para verificar la formula molecular." },
          { paso: "$$M = \\frac{m}{n} = \\frac{39{,}9\\ \\text{g}}{0{,}250\\ \\text{mol}} = 159{,}6\\ \\text{g/mol}$$, que coincide con $159{,}7\\ \\text{g/mol}$: la formula molecular es $\\text{Fe}_2\\text{O}_3$.", porque: "Usamos $M = \\frac{m}{n}$ con los datos de la muestra: $39{,}9\\ \\text{g}$ y $0{,}250\\ \\text{mol}$. Reemplazamos con $\\frac{39{,}9\\ \\text{g}}{0{,}250\\ \\text{mol}}$, que da $159{,}6\\ \\text{g/mol}$, valor que coincide con $159{,}7\\ \\text{g/mol}$ dentro del error de redondeo. Por eso la formula molecular es igual a la empirica, $\\text{Fe}_2\\text{O}_3$." }
        ],
        resultado: "Formula molecular $\\text{Fe}_2\\text{O}_3$ ($M = 159{,}7\\ \\text{g/mol}$ verificada)"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "$$n(\\text{Fe}_2\\text{O}_3) = \\frac{1{,}60\\ \\text{g}}{159{,}70\\ \\text{g/mol}} = 0{,}01002\\ \\text{mol}$$", porque: "Usamos $n = \\frac{m}{M}$ con la masa molar de $\\text{Fe}_2\\text{O}_3$ calculada antes. Reemplazamos con $\\frac{1{,}60\\ \\text{g}}{159{,}70\\ \\text{g/mol}}$, que da $0{,}01002\\ \\text{mol}$ de unidades formula. Es el paso que lleva de gramos a mol para luego contar los atomos de $\\text{O}$." },
          { paso: "$$\\text{Atomos de O} = 3 \\times 0{,}01002\\ \\text{mol} \\times 6{,}022 \\times 10^{23}\\ \\text{mol}^{-1} = 1{,}81 \\times 10^{22}$$ atomos.", porque: "Usamos que cada formula de $\\text{Fe}_2\\text{O}_3$ tiene $3$ atomos de $\\text{O}$, por lo que hay que multiplicar los moles por $3$ antes de convertir a atomos. Reemplazamos con $3 \\times 0{,}01002\\ \\text{mol} \\times 6{,}022 \\times 10^{23}\\ \\text{mol}^{-1}$, que da $1{,}81 \\times 10^{22}$ atomos. Entonces la atomicidad se aplica antes de usar $N_{A}$." }
        ],
        resultado: "$1{,}81 \\times 10^{22}$ atomos de $\\text{O}$"
      }
    ],
    errores_tipicos: [
      { error: "Usar las masas como si fueran moles (1,12 : 0,48 = 7 : 3, dando Fe7O3).", como_evitar: "Pasar siempre masa a mol antes de comparar: n = m/M." },
      { error: "Escribir FeO1,5 al no multiplicar la relacion 1 : 1,5 por 2.", como_evitar: "Llevar la relacion a enteros pequenos: si queda 1,5, multiplicar por 2." }
    ]
  },
  {
    num: 16,
    nivel: "Tipo parcial",
    temas: ["magnitudes", "nomenclatura"],
    enunciado: "En un laboratorio se analiza un liquido organico incoloro, X, formado solo por C, H y O. El analisis elemental de 0,500 g de X indica 0,261 g de C y 0,0658 g de H; el resto es O. La densidad de X a 20 C es 0,789 g/cm^3 y su volumen molar es 58,4 cm^3/mol. a) Calcule la formula empirica de X. b) Calcule la masa molar de X a partir de los datos y verifique que coincide con la formula de a). c) Calcule el numero de moleculas y de atomos de H contenidos en 2,00 mL de X. d) Justifique por que la formula molecular C2H6O no alcanza para identificar de forma unica a X, y escriba las formulas semidesarrolladas de los dos isomeros posibles.",
    resolucion: [
      {
        parte: "a)",
        pasos: [
          { paso: "$m(\\text{O}) = 0{,}500\\ \\text{g} - 0{,}261\\ \\text{g} - 0{,}0658\\ \\text{g} = 0{,}173\\ \\text{g}$ de O.", porque: "Usamos que X solo tiene C, H y O, por lo que la masa de O es el resto de la muestra. Reemplazamos con $0{,}500\\ \\text{g} - 0{,}261\\ \\text{g} - 0{,}0658\\ \\text{g}$, que da $0{,}173\\ \\text{g}$ de O. Es una resta que completa la composicion de X." },
          { paso: "$$n(\\text{C}) = \\frac{0{,}261}{12{,}01} = 0{,}0217\\ \\text{mol}$$; $n(\\text{H}) = \\frac{0{,}0658}{1{,}01} = 0{,}0652\\ \\text{mol}$; $n(\\text{O}) = \\frac{0{,}173}{16{,}00} = 0{,}0108\\ \\text{mol}$.", porque: "Usamos $n = \\frac{m}{M}$ para cada elemento, dividiendo su masa por la masa atomica correspondiente. Reemplazamos: $\\frac{0{,}261}{12{,}01}$ da $0{,}0217\\ \\text{mol}$ de C; $\\frac{0{,}0658}{1{,}01}$ da $0{,}0652\\ \\text{mol}$ de H; y $\\frac{0{,}173}{16{,}00}$ da $0{,}0108\\ \\text{mol}$ de O. Estos valores son la base para establecer la relacion entre los tres elementos." },
          { paso: "Relacion $\\text{C} : \\text{H} : \\text{O} = 0{,}0217 : 0{,}0652 : 0{,}0108 = 2{,}0 : 6{,}0 : 1$, aprox. $2 : 6 : 1$. Formula empirica $\\text{C}_2\\text{H}_6\\text{O}$.", porque: "Usamos que la formula empirica sale de dividir por el menor numero de moles, que es el del O, y redondear a enteros. Reemplazamos: $0{,}0217 : 0{,}0652 : 0{,}0108$ da $2{,}0 : 6{,}0 : 1$, aprox. $2 : 6 : 1$. Por eso la formula empirica es $\\text{C}_2\\text{H}_6\\text{O}$, y las pequenas desviaciones decimales se atribuyen al error de los datos." }
        ],
        resultado: "Formula empirica $\\text{C}_2\\text{H}_6\\text{O}$"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "$$M = d \\times V_{m} = 0{,}789\\ \\text{g/cm}^{3} \\times 58{,}4\\ \\text{cm}^{3}/\\text{mol} = 46{,}1\\ \\text{g/mol}$$", porque: "Usamos que de $V_{m} = \\frac{M}{d}$ se despeja $M = d \\times V_{m}$, y eso da la masa molar del liquido. Reemplazamos con $0{,}789\\ \\text{g/cm}^{3} \\times 58{,}4\\ \\text{cm}^{3}/\\text{mol}$, que da $46{,}1\\ \\text{g/mol}$. Entonces este valor sirve para comparar con la masa molar de la formula empirica." },
          { paso: "$$M(\\text{C}_2\\text{H}_6\\text{O}) = 2 \\times 12{,}01 + 6 \\times 1{,}01 + 16{,}00 = 46{,}08\\ \\text{g/mol}$$, que coincide con $46{,}1\\ \\text{g/mol}$: la formula molecular es $\\text{C}_2\\text{H}_6\\text{O}$.", porque: "Usamos que la masa molar de $\\text{C}_2\\text{H}_6\\text{O}$ se calcula sumando cada masa atomica multiplicada por su subindice. Reemplazamos con $2 \\times 12{,}01 + 6 \\times 1{,}01 + 16{,}00$, que da $46{,}08\\ \\text{g/mol}$. Como coincide con $46{,}1\\ \\text{g/mol}$, la formula molecular es igual a la empirica, $\\text{C}_2\\text{H}_6\\text{O}$." }
        ],
        resultado: "$M = 46{,}1\\ \\text{g/mol}$; formula molecular $\\text{C}_2\\text{H}_6\\text{O}$"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "$$m(2{,}00\\ \\text{mL}) = 0{,}789\\ \\text{g/cm}^{3} \\times 2{,}00\\ \\text{cm}^{3} = 1{,}578\\ \\text{g}$$; $n = \\frac{1{,}578\\ \\text{g}}{46{,}1\\ \\text{g/mol}} = 0{,}0342\\ \\text{mol}$.", porque: "Usamos que la densidad permite pasar el volumen a masa, con $m = d \\times V$. Reemplazamos con $0{,}789\\ \\text{g/cm}^{3} \\times 2{,}00\\ \\text{cm}^{3}$, que da $1{,}578\\ \\text{g}$. Luego $n = \\frac{m}{M}$ con $M = 46{,}1\\ \\text{g/mol}$ da $0{,}0342\\ \\text{mol}$." },
          { paso: "$$N = 0{,}0342\\ \\text{mol} \\times 6{,}022 \\times 10^{23}\\ \\text{mol}^{-1} = 2{,}06 \\times 10^{22}$$ moleculas.", porque: "Usamos $N = n \\times N_{A}$, porque cada mol de moleculas tiene $N_{A}$ unidades. Reemplazamos con $0{,}0342\\ \\text{mol} \\times 6{,}022 \\times 10^{23}\\ \\text{mol}^{-1}$, que da $2{,}06 \\times 10^{22}$ moleculas. Por eso el orden de magnitud $10^{22}$ es coherente con la cantidad de moles de la muestra." },
          { paso: "$$\\text{Atomos de H} = 6 \\times 2{,}06 \\times 10^{22} = 1{,}24 \\times 10^{23}$$ atomos.", porque: "Usamos que cada molecula de $\\text{C}_2\\text{H}_6\\text{O}$ tiene $6$ atomos de $\\text{H}$, asi que el total de $\\text{H}$ es $6$ por el numero de moleculas. Reemplazamos con $6 \\times 2{,}06 \\times 10^{22}$, que da $1{,}24 \\times 10^{23}$ atomos de $\\text{H}$. Es el mismo criterio de atomicidad aplicado en los pasos anteriores." }
        ],
        resultado: "$2{,}06 \\times 10^{22}$ moleculas y $1{,}24 \\times 10^{23}$ atomos de $\\text{H}$"
      },
      {
        parte: "d)",
        pasos: [
          { paso: "$\\text{C}_2\\text{H}_6\\text{O}$ admite dos estructuras: etanol, $\\text{CH}_3\\text{-CH}_2\\text{-OH}$, y dimetileter, $\\text{CH}_3\\text{-O-CH}_3$.", porque: "Usamos que la formula molecular indica que atomos hay, pero no como estan unidos. Reemplazamos el caso de $\\text{C}_2\\text{H}_6\\text{O}$ con sus dos estructuras: etanol, $\\text{CH}_3\\text{-CH}_2\\text{-OH}$, y dimetileter, $\\text{CH}_3\\text{-O-CH}_3$. Por eso distintas uniones entre los mismos atomos dan isomeros, y ese es el caso de $\\text{C}_2\\text{H}_6\\text{O}$." },
          { paso: "Para distinguirlos se necesita un dato adicional: el etanol tiene grupo $\\text{OH}$ y reacciona con sodio liberando $\\text{H}_2$; el dimetileter no lo hace.", porque: "Usamos un ensayo quimico o un dato espectroscopico para distinguir ambos isomeros, porque la formula molecular no muestra el grupo funcional. Como el etanol tiene grupo $\\text{OH}$, reacciona con sodio liberando $\\text{H}_2$, y el dimetileter no lo hace. Entonces ese ensayo identifica cual de los dos es X." }
        ],
        resultado: "La formula molecular no alcanza: son posibles etanol y dimetileter, y hace falta un ensayo adicional"
      }
    ],
    errores_tipicos: [
      { error: "Usar las masas de C y H como si fueran moles (0,0658 mol de H sin dividir por 1,01).", como_evitar: "n = m/M para cada elemento; los datos son gramos." },
      { error: "Calcular el O restando solo el C (0,500 - 0,261 = 0,239 g de O).", como_evitar: "La muestra tiene C, H y O: hay que restar tambien el H." },
      { error: "Dar la formula molecular como identificacion definitiva del compuesto.", como_evitar: "La formula molecular no identifica un compuesto si admite isomeros; la estructura y los ensayos si." }
    ]
  }
];
