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
          { paso: "Z = 17: el atomo tiene 17 protones. Como es neutro, tiene 17 electrones.", porque: "Z es el numero de protones y es lo que identifica al elemento. Como el atomo es neutro, la carga total es 0, asi que el numero de electrones tiene que igualar al de protones. No confundir Z con A: A es protones mas neutrones." },
          { paso: "N = A - Z = 37 - 17 = 20 neutrones.", porque: "Es una resta: como A = Z + N, los neutrones se obtienen restando Z de A. Conviene chequear que Z + N vuelva a dar el numero masico original." }
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
          { paso: "Z = 16 corresponde al azufre, simbolo S.", porque: "Se busca en la tabla periodica el elemento con Z = 16, que es el azufre. Como el numero de protones determina la identidad del elemento, el simbolo S vale para cualquier especie con 16 protones, neutra o ionizada." },
          { paso: "A = Z + N = 16 + 18 = 34.", porque: "Se suman protones y neutrones para obtener el numero masico, con A = Z + N. Es la relacion inversa de la del paso anterior: aca se conocen Z y N y se calcula A." },
          { paso: "Carga = protones - electrones = 16 - 18 = -2, es decir S^2-. Es un anion.", porque: "La carga del ion es protones menos electrones; como da negativo, el ion tiene mas electrones que protones y gano carga negativa. Por eso se escribe el simbolo con el superindice 2- y se lo clasifica como anion." }
        ],
        resultado: "34S^2- (anion, con 18 electrones)"
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
          { paso: "Configuracion: 1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^5 (suma 25 electrones).", porque: "Se distribuyen los electrones en los subniveles de menor a mayor energia, siguiendo el diagrama de Moeller. Cada subnivel admite un maximo (2 en s, 6 en p, 10 en d) y se corta al completar los 25 electrones del atomo neutro. Error comun: llenar 3d antes que 4s, pero 4s tiene menor energia y se completa primero." },
          { paso: "Periodo = 4, porque el nivel mas externo es n = 4.", porque: "El periodo lo da el numero cuantico principal n del nivel mas externo de la configuracion. Aca el nivel mas alto es n = 4, asi que el periodo es 4, aunque haya electrones en 3d que pertenecen a n = 3." },
          { paso: "Grupo = 2 (de 4s) + 5 (de 3d) = 7.", porque: "En un elemento de bloque d, el grupo se obtiene sumando los electrones de los subniveles s y d de la capa externa. Son 2 de 4s mas 5 de 3d, total 7, lo que corresponde al grupo del manganeso. Esta regla vale para los grupos 3 a 12." }
        ],
        resultado: "1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^5; grupo 7, periodo 4"
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
          { paso: "Configuracion completa: 1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^10 4p^5 (suma 35). La CEE es 4s^2 4p^5.", porque: "Se completan los subniveles en orden de energia hasta sumar 35 electrones, y la CEE (configuracion electronica externa) se toma del nivel mas alto. Esa parte externa es la que participa en las uniones quimicas, por eso se la escribe aparte." },
          { paso: "Periodo 4 (n = 4). Grupo = 10 + 7 = 17.", porque: "En bloque p el grupo se calcula como 10 mas la cantidad de electrones de la CEE (s mas p). Esta formula sirve para los grupos 13 a 18, y el resultado identifica a los halogenos. Verificar que el periodo sea el mismo que el n del nivel externo." },
          { paso: "Desapareados: 4p^5 tiene 3 orbitales; se ocupan con un electron cada uno (3 desapareados) y luego se aparean 2, queda 1 desapareado.", porque: "Segun la regla de Hund, al llenar un subnivel cada electron ocupa primero un orbital vacio con espin paralelo, y recien despues se aparea. Con 5 electrones en 3 orbitales p, tres quedan solos y dos forman un par, por eso queda 1 desapareado. Error comun: contar 5 desapareados por tener 5 electrones." }
        ],
        resultado: "CEE 4s^2 4p^5; grupo 17, periodo 4; 1 electron desapareado"
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
          { paso: "Masa promedio = 0,199 x 10,013 u + 0,801 x 11,009 u = 10,81 u.", porque: "La masa atomica promedio es la suma de cada masa isotopica multiplicada por su abundancia en fraccion. Como es un promedio ponderado, el isotopo mas abundante pesa mas y el resultado queda mas cerca de su masa. Pasar los porcentajes a fraccion antes de multiplicar es imprescindible." },
          { paso: "Control: 19,9 % + 80,1 % = 100,0 %.", porque: "Es un chequeo de consistencia: si las abundancias no suman 100 %, hay un dato mal o falta un isotopo. Detectar este error antes de seguir evita arrastrarlo al resultado final." },
          { paso: "Masa en g = 10,81 u x 1,661 x 10^-24 g/u = 1,80 x 10^-23 g.", porque: "Se usa el factor 1 u = 1,661 x 10^-24 g para pasar la masa de un atomo de u a gramos. Ojo: este resultado es la masa de un solo atomo, no la masa molar, que se expresaria en g/mol." }
        ],
        resultado: "Masa atomica promedio = 10,81 u; un atomo promedio pesa 1,80 x 10^-23 g"
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
          { paso: "Fracciones: 0,601 para 69Ga y 0,399 para 71Ga.", porque: "Los porcentajes se dividen por 100 para obtener fracciones que sumen 1. Asi cada abundancia funciona como un peso en el promedio ponderado. Usar el porcentaje directamente multiplicaria el resultado por 100." },
          { paso: "Masa promedio = 0,601 x 68,93 u + 0,399 x 70,92 u = 69,72 u.", porque: "Es un promedio ponderado: cada masa isotopica se multiplica por su fraccion y se suman los dos productos. Como los pesos suman 1, el resultado es una masa en u comparable con el valor de la tabla periodica." },
          { paso: "Control: 69,72 u queda entre 68,93 u y 70,92 u, mas cerca de 69Ga, que es el mas abundante.", porque: "Un promedio ponderado nunca puede quedar fuera del rango de las masas que promedia: debe caer entre las dos masas isotopicas. Como el 69Ga es el mas abundante, el valor debe estar mas cerca de su masa; si no, hay un error de cuentas." }
        ],
        resultado: "Masa atomica promedio = 69,72 u"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Protones = Z = 31. Neutrones = A - Z = 71 - 31 = 40. Electrones = 31 - 3 = 28.", porque: "Z identifica al elemento (galio), y en un ion los protones no cambian. Como N = A - Z, se calcula con el numero masico, y la carga +3 indica que el ion perdio 3 electrones respecto del neutro. Error comun: sumar la carga en lugar de restarla al contar electrones." },
          { paso: "Configuracion del Ga^3+: 1s^2 2s^2 2p^6 3s^2 3p^6 3d^10 (suma 28).", porque: "Para la configuracion del cation se parte de la del atomo neutro y se quitan electrones del nivel mas externo primero. Los 3 electrones perdidos son el 4p^1 y el 4s^2, y el subnivel 3d^10 queda completo. Verificar que la suma de superindices sea 28." }
        ],
        resultado: "31 protones, 40 neutrones, 28 electrones; Ga^3+: 1s^2 2s^2 2p^6 3s^2 3p^6 3d^10"
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
          { paso: "A es neutro con 18 electrones, entonces Z = 18 (argon, Ar) y N = 40 - 18 = 22 neutrones.", porque: "En un atomo neutro los electrones igualan a Z, asi que el numero de electrones permite obtener Z directamente. Con Z identificado en la tabla, N se calcula por diferencia entre A y Z, como en los ejercicios anteriores." },
          { paso: "B: Z = A - N = 40 - 20 = 20, que corresponde al calcio (Ca).", porque: "Para un nucleido vale Z = A - N, relacion que sale de A = Z + N. Con A = 40 y N = 20 se despeja Z, y el valor obtenido se busca en la tabla periodica para identificar el elemento." },
          { paso: "Composicion: A = 18 p, 22 n, 18 e; B = 20 p, 20 n, 20 e (atomo neutro).", porque: "Se escribe la composicion de cada especie en el formato pedido, aplicando que en un atomo neutro electrones y protones son iguales. Como control, la suma de protones y neutrones debe dar el numero masico de cada una." }
        ],
        resultado: "A = 40Ar (18 p, 22 n, 18 e); B = 40Ca (20 p, 20 n, 20 e)"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Ca^2+ tiene 20 - 2 = 18 electrones.", porque: "Un cation divalente (carga 2+) perdio 2 electrones respecto del atomo neutro de Ca, por eso se restan 2 a los 20 electrones. Es el paso que distingue al atomo del ion: el elemento sigue siendo calcio, pero cambia el numero de electrones." },
          { paso: "Como el Ar tambien tiene 18 electrones, Ca^2+ es isoelectronico con A (Ar).", porque: "Las especies isoelectronicas tienen el mismo numero de electrones y la misma configuracion electronica, aunque difieran en protones. Como ambas cumplen con eso, Ca^2+ y Ar son isoelectronicos y comparten la misma nube electronica." }
        ],
        resultado: "Ca^2+ tiene 18 electrones; es isoelectronico con el Ar (atomo A)"
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
          { paso: "Electrones del cation: 2 + 2 + 6 + 2 + 6 + 5 = 23.", porque: "Se suman los electrones de todos los subniveles de la configuracion dada: 2, 2, 6, 2, 6 y 5. El resultado es el total de electrones del cation, que es el dato que despues se corrige por la carga." },
          { paso: "Atomo neutro: 23 + 3 = 26 electrones, entonces Z = 26 y X = Fe (hierro).", porque: "El cation +3 tiene 3 electrones menos que el atomo neutro, por eso se suman 3 para volver al neutro. En el atomo neutro electrones = Z, y Z = 26 identifica al hierro. Error comun: restar 3 en lugar de sumarlos." },
          { paso: "Configuracion neutra: 1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^6. El cation perdio 2 electrones de 4s y 1 de 3d.", porque: "Para escribir el cation se parte de la configuracion neutra y se quitan electrones: primero los 2 de 4s y luego 1 de 3d. Verificar que los electrones quitados coincidan con la carga del ion (2 + 1 = 3)." }
        ],
        resultado: "Z = 26, X = Fe; Fe: 1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^6"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Grupo 8 (2 de 4s + 6 de 3d del atomo neutro), periodo 4.", porque: "El grupo y el periodo se asignan con el atomo neutro, porque el ion no cambia la posicion del elemento en la tabla. Con la CEE del Fe neutro (4s^2 3d^6) el periodo es 4 y el grupo es 2 + 6 = 8." },
          { paso: "En 3d^5 hay 5 electrones en 5 orbitales: cada uno ocupa un orbital, asi que hay 5 desapareados.", porque: "Cada electron de un subnivel d ocupa un orbital distinto, con el mismo espin, mientras queden orbitales libres. Con 5 electrones en 5 orbitales d no hay apareamiento posible, asi que los 5 quedan desapareados. Ese numero explica el comportamiento magnetico del ion." }
        ],
        resultado: "Grupo 8, periodo 4; el cation X^3+ tiene 5 electrones desapareados"
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
          { paso: "X (Z = 15, fosforo): 1s^2 2s^2 2p^6 3s^2 3p^3; CEE = 3s^2 3p^3. Y (Z = 17, cloro): CEE = 3s^2 3p^5.", porque: "Hay que llenar los subniveles en orden de energia hasta completar Z electrones, y de esa configuracion se toman solo los electrones del nivel mas externo (n = 3), que son los que intervienen en el enlace. Para el fosforo es 3s^2 3p^3 y para el cloro 3s^2 3p^5." },
          { paso: "Periodo 3 para ambos. Grupo de X = 10 + 5 = 15; grupo de Y = 10 + 7 = 17.", porque: "En bloque p el grupo se calcula como 10 mas la cantidad de electrones de la CEE (s mas p). Asi X queda en grupo 15 con 5 electrones externos e Y en grupo 17 con 7. Verificar que ambos esten en el mismo periodo, que es el n del nivel externo." }
        ],
        resultado: "X: 3s^2 3p^3, grupo 15, periodo 3; Y: 3s^2 3p^5, grupo 17, periodo 3"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Mayor electronegatividad: Y (Cl), porque esta mas a la derecha en el periodo.", porque: "En un mismo periodo la carga nuclear aumenta de izquierda a derecha, y los electrones de valencia quedan mas fuertemente atraidos. Por eso el elemento mas a la derecha, aca Y (Cl), es el mas electronegativo. Error comun: comparar elementos de periodos distintos con esta regla." },
          { paso: "Mayor radio atomico: X (P), porque el radio disminuye al avanzar en el periodo.", porque: "En un mismo periodo el radio atomico disminuye al avanzar hacia la derecha, porque aumenta Z dentro del mismo nivel de energia. Asi el elemento mas a la izquierda, X (P), tiene el radio mayor. La comparacion solo es valida dentro del mismo periodo." }
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
          { paso: "Ar tiene 18 electrones; por ser isoelectronico, Y^2+ tambien tiene 18.", porque: "Ar tiene 18 electrones, y un ion con la misma cantidad de electrones y la misma configuracion es isoelectronico con el argon. Esa comparacion permite obtener los electrones de Y^2+ sin escribir su configuracion desde cero." },
          { paso: "Atomo neutro Y: 18 + 2 = 20 electrones, entonces Z = 20 y Y = Ca (calcio).", porque: "Para pasar del ion al atomo neutro se suma la carga a los electrones: 18 + 2 = 20. Como en el atomo neutro electrones = Z, se obtiene Z = 20, que corresponde al calcio. Error comun: restar la carga en lugar de sumarla." },
          { paso: "Configuracion de Ca^2+: 1s^2 2s^2 2p^6 3s^2 3p^6 (se pierden los 4s^2).", porque: "El Ca neutro tiene 4s^2 como nivel mas externo, y al formar el cation se quitan esos dos electrones. Queda la configuracion del argon, lo que confirma que Ca^2+ es isoelectronico con Ar." }
        ],
        resultado: "Y = Ca; Ca^2+: 1s^2 2s^2 2p^6 3s^2 3p^6"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "R(Ca^2+) < R(Ca): el cation perdio su nivel 4 externo y tiene menos repulsion electronica.", porque: "Un cation pierde electrones, y al disminuir la repulsion entre ellos la nube electronica se contrae. Ademas se elimina todo el nivel 4 externo del Ca. Por eso el radio del cation es menor que el del atomo neutro del que proviene." },
          { paso: "R(Ca^2+) < R(Ar): ambos tienen 18 electrones, pero Ca^2+ tiene Z = 20, con mas carga nuclear que atrae mas a la misma nube electronica.", porque: "En especies isoelectronicas la nube tiene la misma cantidad de electrones, pero el nucleo con mas protones la atrae mas fuerte. Como Ca tiene Z mayor que Ar, el Ca^2+ queda mas chico. Verificar siempre que la comparacion se base en Z." },
          { paso: "Ademas R(Ar) < R(Ca) porque Ca esta en el periodo 4 y Ar en el 3.", porque: "El radio aumenta al bajar en un grupo, porque aparece un nivel de energia adicional. El Ca esta en el periodo 4 y el Ar en el 3, asi que el Ca neutro es mas grande que el Ar. Esta comparacion se hace entre atomos neutros, no entre iones." }
        ],
        resultado: "R(Ca^2+) < R(Ar) < R(Ca)"
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
          { paso: "(a) no es valido: con n = 2, l puede valer 0 o 1, pero no 2.", porque: "Los numeros cuanticos tienen valores permitidos: l va de 0 a n - 1, m de -l a +l, y s solo puede ser +1/2 o -1/2. Con n = 2, l solo puede valer 0 o 1, por eso l = 2 no es valido." },
          { paso: "(b) es valido: n = 3, l = 1 (subnivel 3p), m = -1 esta entre -1 y +1, s = -1/2.", porque: "Hay que revisar cada numero contra su rango: con l = 1, m puede valer -1, 0 o +1, y m = -1 esta dentro. Con n = 3 y l = 1 el subnivel es 3p. Verificar que los cuatro numeros cumplan a la vez sus restricciones." },
          { paso: "(c) no es valido: con l = 0, m solo puede valer 0, y m = +1 no esta permitido.", porque: "Con l = 0 (subnivel s) el unico valor permitido de m es 0. Un m distinto de 0 no existe para ese subnivel, por eso +1 se descarta. Error comun: pensar que m puede tomar cualquier valor entre -1 y +1 sin mirar l." },
          { paso: "(d) es valido: n = 3, l = 2 (subnivel 3d), m = -2 es uno de los 5 valores (-2 a +2).", porque: "Con l = 2 el subnivel es 3d y m toma los cinco valores -2, -1, 0, +1 y +2. Como -2 esta en esa lista, la combinacion es valida. Recordar que cada subnivel tiene 2l + 1 orbitales." },
          { paso: "(e) no es valido: s = 0 no existe.", porque: "El numero de espin s es una propiedad del electron que solo admite los valores +1/2 y -1/2. Cualquier otro valor, como 0, no corresponde a un electron. Conviene revisar este numero al final, porque es el que mas se suele olvidar." }
        ],
        resultado: "Validos: (b) y (d)"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "(b) subnivel 3p: 3 orbitales x 2 electrones = maximo 6 electrones.", porque: "Cada orbital admite como maximo 2 electrones con espines opuestos, por el principio de exclusion de Pauli. El subnivel 3p tiene 2l + 1 = 3 orbitales, asi que el maximo es 3 x 2 = 6 electrones. Error comun: contar electrones antes de contar orbitales." },
          { paso: "(d) subnivel 3d: 5 orbitales x 2 electrones = maximo 10 electrones.", porque: "Con l = 2 el subnivel d tiene 2l + 1 = 5 orbitales. Como cada orbital admite 2 electrones, el maximo es 5 x 2 = 10. Es el mismo razonamiento del paso anterior, aplicado a un subnivel con mayor l." }
        ],
        resultado: "(b): subnivel 3p, maximo 6 electrones; (d): subnivel 3d, maximo 10 electrones"
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
          { paso: "S^2-: 16 + 2 = 18 electrones; Cl^-: 17 + 1 = 18; K^+: 19 - 1 = 18; Ca^2+: 20 - 2 = 18.", porque: "Para un anion se suma a Z el valor absoluto de la carga, y para un cation se resta la carga a Z. Por ejemplo, el S tiene Z = 16 y al ganar 2 electrones llega a 18. Este calculo sirve para contar electrones en cualquier ion a partir de Z." },
          { paso: "Los cuatro tienen 18 electrones y la misma configuracion 1s^2 2s^2 2p^6 3s^2 3p^6: son isoelectronicos.", porque: "Se comparan dos cosas: el numero de electrones (los cuatro tienen 18) y la configuracion (la misma en todos). Si ambas coinciden, las especies son isoelectronicas. Esta comprobacion es necesaria antes de aplicar la regla de radios." }
        ],
        resultado: "18 electrones en cada ion; son isoelectronicos"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Z: S = 16 < Cl = 17 < K = 19 < Ca = 20.", porque: "Como las especies tienen el mismo numero de electrones, la diferencia de tamano depende solo de la carga nuclear, es decir de Z. Ordenar los Z de menor a mayor permite ordenar los radios en sentido inverso. Verificar que se use Z y no la carga del ion." },
          { paso: "Mayor Z, menor radio: S^2- > Cl^- > K^+ > Ca^2+.", porque: "A mayor Z, mayor atraccion del nucleo sobre la nube electronica, que queda mas contraida. Por eso el S^2- (Z = 16) tiene el radio mayor y el Ca^2+ (Z = 20) el menor. Error comun: ordenar por la carga del ion en vez de por Z." }
        ],
        resultado: "S^2- > Cl^- > K^+ > Ca^2+"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "m = 33,97 u x 1,661 x 10^-24 g/u = 5,64 x 10^-23 g.", porque: "Es la masa de un solo atomo, por eso se usa la masa en u y el factor 1 u = 1,661 x 10^-24 g. Usar la masa molar aca daria la masa de un mol entero, que es muchisimo mayor." }
        ],
        resultado: "5,64 x 10^-23 g"
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
          { paso: "Llamo x a la fraccion de 85Rb; la de 87Rb es (1 - x), porque las abundancias suman 1.", porque: "Con dos isotopos hay dos incognitas, pero las fracciones suman 1, y eso permite escribir todo en funcion de una sola incognita x. Asi el problema se reduce a una ecuacion con una variable, que se resuelve despejando x." },
          { paso: "84,91 x + 86,91 (1 - x) = 85,47, es decir 86,91 - 2,00 x = 85,47, y x = 0,720.", porque: "Se multiplica cada masa isotopica por su fraccion y se suman los productos, igualando al promedio de la tabla. Luego se agrupan los terminos con x y se despeja: el coeficiente de x es la diferencia entre las dos masas isotopicas. Error comun: olvidar el signo al distribuir el termino (1 - x)." },
          { paso: "Abundancias: 85Rb = 72,0 %; 87Rb = 28,0 %.", porque: "Como porcentaje es fraccion x 100, cada fraccion se multiplica por 100 para expresarla en porcentaje. Verificar que los dos porcentajes sumen 100 %, lo que confirma que el despeje es correcto." }
        ],
        resultado: "85Rb: 72,0 %; 87Rb: 28,0 %"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "N(87Rb) = 87 - 37 = 50 neutrones.", porque: "El numero de neutrones se obtiene restando el numero atomico Z al numero masico A, que aca es 87. El Z del rubidio es el mismo para todos sus isotopos, asi que se toma de la tabla periodica." },
          { paso: "Rb^+ tiene 37 - 1 = 36 electrones.", porque: "Un cation de carga +1 pierde un electron respecto del atomo neutro, asi que a los electrones del neutro se les resta 1. El numero de protones (Z) no cambia al ionizar, solo cambian los electrones." }
        ],
        resultado: "87Rb: 50 neutrones; Rb^+: 36 electrones"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "m(87Rb) = 86,91 u x 1,661 x 10^-24 g/u = 1,44 x 10^-22 g.", porque: "Como el enunciado pide la masa de un isotopo puntual, se usa su masa isotopica de 86,91 u y no el promedio de la tabla. La conversion a gramos sigue siendo 1 u = 1,661 x 10^-24 g. Error comun: usar la masa promedio del elemento." }
        ],
        resultado: "1,44 x 10^-22 g"
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
          { paso: "Co neutro: 1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^7 (suma 27).", porque: "Se escribe la configuracion del neutro siguiendo el orden de llenado y se suman los electrones hasta 27, que es Z del cobalto. Verificar que la suma de todos los superindices de la configuracion dé 27 antes de seguir." },
          { paso: "Co^2+ (25 electrones): se quitan los 2 electrones de 4s: 1s^2 2s^2 2p^6 3s^2 3p^6 3d^7.", porque: "Al ionizar un metal de transicion, los electrones salen primero del nivel mas externo (4s), aunque en el neutro se llenen antes que los 3d. Por eso se quitan los 2 de 4s para formar Co^2+ y el 3d^7 se mantiene. Error comun: quitar electrones del 3d primero." },
          { paso: "En 3d^7 (5 orbitales): 5 electrones quedan solos y 2 se aparean, asi que hay 3 desapareados, tanto en Co como en Co^2+.", porque: "Con 7 electrones en 5 orbitales d, cada orbital recibe uno primero (5 desapareados) y los 2 restantes forman un par que elimina 2 desapareados: quedan 3. Esta cuenta vale para Co y para Co^2+, porque ambos tienen 7 electrones en el 3d." }
        ],
        resultado: "Co: 3d^7 4s^2, 3 desapareados; Co^2+: 3d^7, 3 desapareados"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Co^3+: 27 - 3 = 24 electrones, configuracion 1s^2 2s^2 2p^6 3s^2 3p^6 3d^6 (se quitan los 2 de 4s y 1 de 3d).", porque: "Co^3+ pierde 3 electrones respecto del neutro: primero los 2 de 4s y luego 1 de 3d. Restar la carga desde 27 da 24 electrones, que sirve como control para no equivocarse." },
          { paso: "En 3d^6: 5 orbitales con un electron cada uno y 1 par; quedan 4 desapareados.", porque: "En 3d^6 los electrones se reparten primero uno por orbital, lo que deja 5 desapareados, y el sexto forma un par que elimina 2 desapareados. Por la regla de Hund se maximiza el numero de desapareados antes de aparear, y el resultado es 4." }
        ],
        resultado: "Co^3+: 1s^2 2s^2 2p^6 3s^2 3p^6 3d^6, con 4 desapareados"
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
          { paso: "Suma de abundancias: 90,48 + 0,27 + 9,25 = 100,00 %.", porque: "La suma de abundancias debe dar 100 %, porque los tres isotopos cubren todo el neon natural. Si no diera 100 %, habria un error en los datos. Es un control que conviene hacer antes de promediar." },
          { paso: "Masa promedio = 0,9048 x 19,992 + 0,0027 x 20,994 + 0,0925 x 21,991 = 20,18 u.", porque: "Se pasan los porcentajes a fracciones dividiendo por 100 y se multiplica cada masa isotopica por su fraccion. Sumar esos productos da la masa atomica promedio, que coincide con la de la tabla. Verificar que se usen fracciones y no porcentajes." }
        ],
        resultado: "Masa atomica promedio = 20,18 u (verificada)"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "m = 20,18 u x 1,661 x 10^-24 g/u = 3,35 x 10^-23 g.", porque: "Un atomo promedio tiene la masa atomica promedio expresada en u, y pasarla a gramos requiere el factor 1 u = 1,661 x 10^-24 g. Es la masa de un solo atomo; la masa de un mol se obtendria con la masa molar." }
        ],
        resultado: "3,35 x 10^-23 g"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "21Ne: N = 21 - 10 = 11 neutrones.", porque: "Para el isotopo 21Ne, N = A - Z con Z = 10 tomado de la tabla periodica. Es el mismo calculo de neutrones usado antes, aplicado a otro isotopo del mismo elemento." },
          { paso: "Ne^2+: 10 - 2 = 8 electrones.", porque: "Un cation con carga +2 pierde 2 electrones respecto del atomo neutro. Como el Ne tiene 10 electrones, se restan 2 para llegar a 8." }
        ],
        resultado: "21Ne: 11 neutrones; Ne^2+: 8 electrones"
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
          { paso: "Electrones de M^3+: 2 + 2 + 6 + 2 + 6 + 3 = 21.", porque: "Se suman todos los electrones de la configuracion dada para obtener los electrones del cation M^3+. Es el primer paso para llegar al atomo neutro, que es el que define Z." },
          { paso: "Atomo neutro: 21 + 3 = 24 electrones, entonces Z = 24 y M = Cr (cromo).", porque: "El cation +3 tiene 3 electrones menos que el atomo neutro, por eso se suman 3 a los 21 que hay. El resultado es Z = 24, que corresponde al cromo. Error comun: restar la carga en vez de sumarla al pasar del ion al neutro." },
          { paso: "Cr: periodo 4 y grupo 6 (1 electron de 4s + 5 de 3d).", porque: "El periodo lo da el n mas alto de la configuracion externa, que aca es 4 (de 4s). En bloque d el grupo es la suma de los electrones de 4s y 3d, es decir 1 + 5 = 6." }
        ],
        resultado: "M = Cr, Z = 24, grupo 6, periodo 4"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Configuracion real del Cr: 1s^2 2s^2 2p^6 3s^2 3p^6 4s^1 3d^5. La esperada por orden de llenado seria 4s^2 3d^4.", porque: "El cromo es una excepcion al orden de llenado: un 3d semilleno (5 electrones, uno por orbital) tiene menor energia que 3d^4 con 4s^2. Por eso el atomo toma un electron de 4s para ocupar 3d^5. Verificar que la suma de electrones siga dando 24." },
          { paso: "Desapareados: 3d^5 tiene 5 electrones en 5 orbitales, y el 4s^1 aporta 1 mas: 6 desapareados.", porque: "Con 3d^5 y 4s^1 se cuentan los desapareados: cada uno de los 5 electrones del 3d ocupa un orbital distinto, y el electron de 4s tambien queda solo. Por la regla de Hund el total de desapareados es 6." }
        ],
        resultado: "Cr: 1s^2 2s^2 2p^6 3s^2 3p^6 4s^1 3d^5; 6 electrones desapareados"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "Sea x la fraccion de 35Cl: 34,97 x + 36,97 (1 - x) = 35,45.", porque: "Se escribe el promedio ponderado en funcion de x, la fraccion del 35Cl, y se usa que la fraccion del 37Cl es 1 - x. Es la misma tecnica del ejercicio del rubidio: una sola ecuacion con una sola incognita." },
          { paso: "36,97 - 2,00 x = 35,45, de donde x = 0,760.", porque: "Se distribuye el termino 36,97 (1 - x) y se agrupan los terminos con x. Luego se pasa 2,00 x a un lado y 35,45 al otro, y se divide por 2,00. Chequear que el valor de x quede entre 0 y 1." },
          { paso: "Abundancias: 35Cl = 76,0 %; 37Cl = 24,0 %.", porque: "Como porcentaje es fraccion x 100, cada fraccion se multiplica por 100. Verificar que los dos porcentajes sumen 100 %." }
        ],
        resultado: "35Cl: 76,0 %; 37Cl: 24,0 %"
      },
      {
        parte: "d)",
        pasos: [
          { paso: "Cr^3+ conserva Z = 24 pero tiene 3 electrones menos que el Cr neutro: la misma carga nuclear atrae a menos electrones y el radio se achica.", porque: "Un cation es mas chico que su atomo neutro porque pierde electrones: al haber menos repulsion entre ellos, la nube electronica se contrae, mientras la carga nuclear sigue siendo la misma. Error comun: comparar un ion con un atomo de otro elemento." },
          { paso: "Cr^3+ (+3) necesita 3 iones Cl^- (-1 cada uno) para que la carga total sea cero: 1 Cr por cada 3 Cl.", porque: "Para que el compuesto sea neutro, la carga positiva total (+3) debe igualar a la carga negativa total (3 x -1). Por eso se necesitan 3 Cl^- por cada Cr^3+. Error comun: poner un solo Cl por cada Cr." },
          { paso: "Formula: CrCl3 (cloruro de cromo(III)).", porque: "Los subindices salen de la relacion 1 : 3 ya igualada en carga. El (III) en el nombre indica la carga +3 del cromo, y sirve para distinguirlo de otros cloruros de cromo." }
        ],
        resultado: "R(Cr^3+) < R(Cr); formula CrCl3"
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
          { paso: "n = m / M = 10,0 g / 65,38 g/mol = 0,153 mol.", porque: "n = m/M relaciona la masa en gramos con la cantidad de sustancia en mol. Como la masa molar esta en g/mol, el resultado sale en mol sin cambios de unidad. Verificar que la masa este en g y no en mg o kg." },
          { paso: "N = n x N_A = 0,153 mol x 6,022 x 10^23 mol^-1 = 9,21 x 10^22 atomos.", porque: "Un mol contiene N_A unidades elementales, y multiplicar n por N_A da el numero de unidades. Como el Zn es monoatomico, cada unidad es un atomo, y el resultado es el numero de atomos pedido." }
        ],
        resultado: "0,153 mol de Zn y 9,21 x 10^22 atomos"
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
          { paso: "m = 40,08 u x 1,661 x 10^-24 g/u = 6,66 x 10^-23 g.", porque: "La masa atomica en u se convierte a gramos con 1 u = 1,661 x 10^-24 g, y el resultado es la masa de un solo atomo. Como es un valor muy chico, conviene revisar que la potencia de 10 sea la correcta." },
          { paso: "Control: M / N_A = 40,08 g/mol / 6,022 x 10^23 mol^-1 = 6,66 x 10^-23 g.", porque: "Un atomo pesa M/N_A gramos, porque un mol pesa M y contiene N_A atomos. Que el resultado coincida con la conversion desde u confirma que el factor 1 u = 1,661 x 10^-24 g esta bien aplicado." }
        ],
        resultado: "6,66 x 10^-23 g por atomo de Ca"
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
          { paso: "M(H2SO4) = 2 x 1,01 + 32,07 + 4 x 16,00 = 98,09 (u, y g/mol).", porque: "La masa molar se calcula sumando cada masa atomica tantas veces como indica su subindice: 2 H, 1 S y 4 O. El valor numerico en u y en g/mol coincide, aunque cambia la unidad. Error comun: olvidar multiplicar por el subindice." },
          { paso: "m = n x M = 0,250 mol x 98,09 g/mol = 24,5 g.", porque: "Con n = m/M se despeja m = n x M, que permite pasar de mol a gramos. Como la masa molar da gramos por cada mol, el producto queda en gramos." }
        ],
        resultado: "M = 98,09 u (98,09 g/mol); 0,250 mol pesan 24,5 g"
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
          { paso: "n = m / M = 5,00 g / 44,01 g/mol = 0,114 mol.", porque: "n = m/M relaciona la masa de la muestra con la cantidad de sustancia, con la masa molar en g/mol. Dividir la masa dada por la masa molar da los mol presentes en la muestra." },
          { paso: "N = n x N_A = 0,114 mol x 6,022 x 10^23 mol^-1 = 6,84 x 10^22 moleculas.", porque: "Cada mol contiene N_A moleculas, y el enunciado pide moleculas y no atomos. Como la sustancia es molecular, la unidad elemental es la molecula, por eso no se multiplica por la atomicidad." }
        ],
        resultado: "0,114 mol y 6,84 x 10^22 moleculas de CO2"
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
          { paso: "V_m = M / d = 46,07 g/mol / 0,789 g/cm^3 = 58,4 cm^3/mol.", porque: "El volumen molar es el volumen que ocupa un mol de liquido, y se obtiene dividiendo la masa de un mol por la densidad. Verificar que las unidades queden en cm^3/mol para que el resultado sea coherente." },
          { paso: "V = n x V_m = 2,00 mol x 58,4 cm^3/mol = 117 cm^3 (0,117 L).", porque: "El volumen total es proporcional a la cantidad de sustancia, asi que V = n x V_m. Como 1 cm^3 = 1 mL, el resultado en cm^3 se pasa a litros dividiendo por 1000." }
        ],
        resultado: "V_m = 58,4 cm^3/mol; 2,00 mol ocupan 117 cm^3"
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
          { paso: "n = 8,00 g / 32,00 g/mol = 0,250 mol de O2.", porque: "Se usa la masa molar de la molecula O2, que tiene 2 atomos de O. Es importante no usar la masa del O solo, porque la masa molar corresponde a la especie que se pesa." },
          { paso: "N = 0,250 mol x 6,022 x 10^23 mol^-1 = 1,51 x 10^23 moleculas.", porque: "Cada mol de moleculas contiene N_A unidades, asi que N = n x N_A da el numero de moleculas. Verificar que el resultado tenga el orden de magnitud esperado para la cantidad de moles calculada." }
        ],
        resultado: "1,51 x 10^23 moleculas de O2"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "n = 3,01 x 10^22 moleculas / 6,022 x 10^23 moleculas/mol = 0,0500 mol.", porque: "Para pasar de numero de particulas a cantidad de sustancia se divide por N_A, que es la operacion inversa de N = n x N_A. El factor de conversion es 6,022 x 10^23 moleculas/mol." },
          { paso: "m = n x M = 0,0500 mol x 44,01 g/mol = 2,20 g.", porque: "Con n en mol y M en g/mol, el producto m = n x M da gramos. Es la operacion inversa de n = m/M." }
        ],
        resultado: "2,20 g de CO2"
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
          { paso: "m = 500 mg = 0,500 g; n = 0,500 g / 180,17 g/mol = 2,78 x 10^-3 mol.", porque: "Antes de usar n = m/M hay que pasar la masa a gramos, porque la masa molar esta en g/mol. Como 1 g = 1000 mg, 500 mg equivalen a 0,500 g. Error comun: dividir 500 mg por la masa molar, lo que da un resultado 1000 veces mayor." },
          { paso: "N = 2,78 x 10^-3 mol x 6,022 x 10^23 mol^-1 = 1,67 x 10^21 moleculas.", porque: "Cada mol de moleculas contiene N_A moleculas, y N = n x N_A convierte la cantidad de sustancia en numero de moleculas. Chequear que el resultado sea del orden de 10^21, coherente con una muestra de 0,5 g." }
        ],
        resultado: "2,78 x 10^-3 mol y 1,67 x 10^21 moleculas"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Cada molecula tiene 9 atomos de C (subindice 9).", porque: "El subindice de un elemento en la formula indica cuantos atomos de ese elemento tiene cada molecula. Este valor, la atomicidad del C, se usa como factor para pasar de moleculas a atomos." },
          { paso: "Atomos de C = 9 x 1,67 x 10^21 = 1,50 x 10^22 atomos.", porque: "Los atomos totales de C se obtienen multiplicando la cantidad de moleculas por 9, porque cada molecula aporta 9 atomos de C. Verificar que el resultado sea 9 veces el numero de moleculas." }
        ],
        resultado: "1,50 x 10^22 atomos de C"
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
          { paso: "V = (2,00 cm)^3 = 8,00 cm^3.", porque: "El volumen de un cubo es la arista elevada al cubo, y como la arista esta en cm, el resultado queda en cm^3. Error comun: elevar al cubo el numero pero no la unidad." },
          { paso: "m = d x V = 2,70 g/cm^3 x 8,00 cm^3 = 21,6 g.", porque: "Con d = m/V se despeja m = d x V para obtener la masa. Como la densidad esta en g/cm^3 y el volumen en cm^3, las unidades se cancelan y queda la masa en gramos." }
        ],
        resultado: "21,6 g"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "n = 21,6 g / 26,98 g/mol = 0,801 mol.", porque: "Se aplica n = m/M con la masa molar del aluminio, que es la relacion que conecta la masa de la muestra con la cantidad de sustancia en mol." },
          { paso: "N = 0,801 mol x 6,022 x 10^23 mol^-1 = 4,82 x 10^23 atomos.", porque: "El aluminio es un metal monoatomico, asi que cada unidad elemental es un atomo. N = n x N_A da el numero de atomos, y conviene revisar que el resultado tenga el orden de magnitud esperado." }
        ],
        resultado: "0,801 mol y 4,82 x 10^23 atomos de Al"
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
          { paso: "M = m / n = 15,0 g / 0,500 mol = 30,0 g/mol.", porque: "La masa molar es la masa de un mol, por eso se despeja de n = m/M como M = m/n. Como n esta en mol y m en g, M queda en g/mol." },
          { paso: "m(H) = 15,0 g - 12,0 g = 3,0 g. n(C) = 12,0 g / 12,01 g/mol = 0,999 mol; n(H) = 3,0 g / 1,01 g/mol = 2,97 mol.", porque: "Como la muestra solo tiene C e H, la masa de H es la masa total menos la de C. Luego se aplica n = m/M a cada elemento, lo que permite conocer la proporcion entre sus atomos." },
          { paso: "Relacion C : H = 0,999 : 2,97 = 1 : 3. Formula empirica CH3, con M(CH3) = 15,04 g/mol.", porque: "La formula empirica sale de dividir los moles de cada elemento por el menor y tomar enteros pequenos. Como 2,97 es practicamente 3, la relacion es 1 : 3 y la formula es CH3. Verificar que los cocientes queden cerca de enteros." },
          { paso: "Formula molecular: M / M(empirica) = 30,0 / 15,04 = 2, entonces C2H6 (etano).", porque: "La formula molecular es un multiplo entero de la empirica, y ese multiplo se obtiene dividiendo la masa molar del problema por la masa molar de CH3. Error comun: usar la masa molar de la empirica como si fuera la molecular." }
        ],
        resultado: "Formula empirica CH3; formula molecular C2H6"
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
          { paso: "n = 4,00 x 10^23 moleculas / 6,022 x 10^23 moleculas/mol = 0,664 mol.", porque: "Pasar de moleculas a mol se hace dividiendo por N_A, que es la operacion inversa de N = n x N_A. El resultado debe quedar en mol, por eso se divide por el numero de moleculas por mol." },
          { paso: "m = 0,664 mol x 180,18 g/mol = 1,20 x 10^2 g.", porque: "m = n x M convierte mol a gramos. Como el dato de partida tiene 3 cifras significativas, el resultado se expresa tambien con 3 cifras." }
        ],
        resultado: "1,20 x 10^2 g"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Cada molecula tiene 6 atomos de O (subindice 6).", porque: "El subindice 6 indica cuantos atomos de O hay en cada molecula. Ese valor se usa como factor para pasar de moleculas a atomos." },
          { paso: "Atomos de O = 6 x 4,00 x 10^23 = 2,40 x 10^24 atomos.", porque: "Los atomos totales de O se obtienen multiplicando la cantidad de moleculas por 6, la atomicidad del O. Es el mismo criterio que se uso para el carbono." }
        ],
        resultado: "2,40 x 10^24 atomos de O"
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
          { paso: "n = 1,50 x 10^24 / 6,022 x 10^23 mol^-1 = 2,49 mol.", porque: "Como el dato es un numero de unidades, primero se pasa a mol dividiendo por N_A (n = N / N_A). Recien con los mol y la masa de la muestra se puede calcular la masa molar." },
          { paso: "M = m / n = 195 g / 2,49 mol = 78,3 g/mol.", porque: "M = m/n, con la masa dada y los mol calculados. Las cifras significativas se mantienen en 3 porque los datos tienen esa precision." }
        ],
        resultado: "2,49 mol; M(EF2) = 78,3 g/mol"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "M(E) = M(EF2) - 2 x M(F) = 78,3 - 2 x 19,00 = 40,3 u.", porque: "La masa molar del compuesto EF2 es la masa de E mas dos atomos de F, asi que para despejar la masa de E hay que restar 2 x 19,00. Verificar que se resten los dos atomos de F y no solo uno." },
          { paso: "40,3 u esta mas cerca de Ca (40,08 u) que de Mg (24,31 u) o Sr (87,62 u): E = Ca, y el compuesto es CaF2. La diferencia de 0,2 u viene de redondear.", porque: "Se compara el valor obtenido con las masas atomicas de la tabla para identificar el elemento mas cercano. La formula CaF2 es coherente con la valencia 2 del calcio y el 1- del fluor. Tener en cuenta la precision de los datos al interpretar pequenas diferencias." }
        ],
        resultado: "M(E) = 40,3 u; E = Ca (compuesto CaF2)"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "n(EF2) en 100 g = 100 g / 78,3 g/mol = 1,28 mol.", porque: "Con n = m/M se calcula la cantidad de sustancia de EF2 en la muestra de 100 g. Es el paso previo para contar los atomos de F." },
          { paso: "Atomos de F = 2 x 1,28 mol x 6,022 x 10^23 mol^-1 = 1,54 x 10^24 atomos.", porque: "Cada formula de EF2 tiene 2 atomos de F, asi que el total es 2 x n x N_A. Chequear que se multiplique por la atomicidad del F antes de aplicar N_A." }
        ],
        resultado: "1,54 x 10^24 atomos de F"
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
          { paso: "M(H2O) = 2 x 1,01 + 16,00 = 18,02 g/mol.", porque: "La masa molar se calcula sumando las masas atomicas, multiplicando cada una por su subindice: 2 H y 1 O. Es la base para pasar de masa a mol del agua." },
          { paso: "V_m = M / d = 18,02 g/mol / 0,998 g/cm^3 = 18,06 cm^3/mol.", porque: "V_m = M/d da el volumen que ocupa un mol de liquido, dividiendo su masa molar por la densidad. Verificar que las unidades de M (g/mol) y d (g/cm^3) den cm^3/mol." },
          { paso: "18,06 cm^3/mol = 0,01806 dm^3/mol, porque 1 dm^3 = 1000 cm^3.", porque: "Para pasar de cm^3 a dm^3 se divide por 1000, porque 1 dm^3 = 1000 cm^3. Es un cambio de unidades que conviene hacer antes de comparar con valores tabulados en L." }
        ],
        resultado: "V_m = 18,06 cm^3/mol = 0,01806 dm^3/mol"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "m = d x V = 0,998 g/cm^3 x 250 cm^3 = 249,5 g.", porque: "Como 250 mL equivalen a 250 cm^3, la densidad permite pasar de volumen a masa con m = d x V. Error comun: usar el volumen en mL con una densidad expresada en g/L." },
          { paso: "n = 249,5 g / 18,02 g/mol = 13,85 mol; N = 13,85 mol x 6,022 x 10^23 mol^-1 = 8,34 x 10^24 moleculas.", porque: "Con n = m/M se obtiene la cantidad de agua, y N = n x N_A da el numero de moleculas. Conviene mantener las cifras sin redondear antes de multiplicar por N_A." },
          { paso: "Masa de una molecula = M / N_A = 18,02 g/mol / 6,022 x 10^23 mol^-1 = 2,99 x 10^-23 g.", porque: "Un mol pesa M gramos y contiene N_A moleculas, asi que dividiendo M entre N_A se obtiene la masa de una sola molecula. Es el paso inverso al de contar moleculas en una masa dada." }
        ],
        resultado: "8,34 x 10^24 moleculas en 250 mL; 2,99 x 10^-23 g por molecula"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "El valor 22,4 L/mol corresponde a un gas ideal en CNPT (PV = nRT); en un gas las moleculas estan separadas por distancias mucho mayores que su tamano.", porque: "El valor 22,4 L/mol sale de la ecuacion de gases ideales PV = nRT en condiciones normales, y depende de P y T. Por eso verificar siempre que la sustancia sea un gas antes de aplicarlo." },
          { paso: "En el liquido las moleculas estan casi en contacto, asi que el volumen molar depende del tamano molecular y la densidad, y resulta del orden de cm^3/mol.", porque: "Un liquido no sigue la ecuacion de gases ideales, porque sus moleculas estan casi en contacto. Por eso su volumen molar se calcula con la masa molar y la densidad, que son datos propios de la sustancia. Error comun: usar 22,4 L/mol para cualquier sustancia." }
        ],
        resultado: "El agua liquida tiene V_m del orden de 18 cm^3/mol porque sus moleculas estan en contacto; 22,4 L/mol aplica solo a gases"
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
          { paso: "m(Cu) = 0,700 x 100,0 g = 70,0 g; m(Zn) = 30,0 g.", porque: "Los porcentajes en masa se aplican a la masa total de la muestra: el 70 % de 100,0 g son 70,0 g de Cu. Error comun: aplicar el porcentaje a los moles, lo que solo daria el mismo resultado si el porcentaje fuera molar." },
          { paso: "n(Cu) = 70,0 g / 63,55 g/mol = 1,10 mol; n(Zn) = 30,0 g / 65,38 g/mol = 0,459 mol.", porque: "Para cada elemento se aplica n = m/M con su masa atomica. Asi cada masa parcial se convierte en moles de atomos de Cu y de Zn por separado." }
        ],
        resultado: "1,10 mol de Cu y 0,459 mol de Zn"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "n total = 1,10 + 0,459 = 1,56 mol de atomos.", porque: "Como se pide el total de atomos, se suman los moles de ambos elementos. Cada atomo cuenta como una unidad, sin importar de que elemento sea." },
          { paso: "N = 1,56 mol x 6,022 x 10^23 mol^-1 = 9,40 x 10^23 atomos.", porque: "Con el total de moles de atomos, N = n x N_A da el numero total de atomos. Conviene sumar primero los moles y multiplicar por N_A una sola vez." }
        ],
        resultado: "9,40 x 10^23 atomos"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "V = m / d = 100,0 g / 8,47 g/cm^3 = 11,8 cm^3.", porque: "Con d = m/V se despeja V = m/d, que da el volumen a partir de la masa y la densidad. Verificar que el resultado quede en cm^3, porque la densidad esta en g/cm^3." }
        ],
        resultado: "11,8 cm^3"
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
          { paso: "n(H2) = 2,00 g / 2,02 g/mol = 0,990 mol; n(O2) = 2,00 g / 32,00 g/mol = 0,0625 mol.", porque: "Se aplica n = m/M a cada muestra con su masa molar: 2,02 g/mol para el H2 y 32,00 g/mol para el O2. Como las masas son iguales, la comparacion se hace con los moles y no con los gramos." },
          { paso: "Hay mas moleculas en el H2 (0,990 mol frente a 0,0625 mol), porque el numero de moleculas es proporcional a n.", porque: "Como N = n x N_A, el numero de moleculas depende solo de la cantidad de sustancia. Por eso la muestra con mas moles, que es la de H2, tiene mas moleculas aunque tenga la misma masa." }
        ],
        resultado: "El H2 tiene mas moleculas (0,990 mol contra 0,0625 mol)"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "Atomos de H = 2 x 0,990 mol x 6,022 x 10^23 mol^-1 = 1,19 x 10^24 atomos.", porque: "Cada molecula de H2 tiene 2 atomos de H, y el total de atomos se obtiene multiplicando la atomicidad por el numero de moleculas. Verificar que se use 2 y no 1 para el H2." }
        ],
        resultado: "1,19 x 10^24 atomos de H"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "Para una misma masa, N = m x N_A / M: cuanto menor es M, mayor es el numero de moleculas.", porque: "Combinando N = n x N_A con n = m/M se obtiene N = m x N_A / M. Para una misma masa, el numerador es fijo, asi que el numero de moleculas es inversamente proporcional a la masa molar. Error comun: pensar que es la masa la que cambia." },
          { paso: "Las moleculas de H2 pesan menos que las de O2, asi que la misma masa contiene mas moleculas de H2.", porque: "La masa molar del H2 (2,02 g/mol) es mucho menor que la del O2 (32,00 g/mol), por lo que cada molecula de H2 pesa menos. Con la misma masa total, entonces, hay mas moleculas de H2. Esta es la comparacion que decide la respuesta." }
        ],
        resultado: "A igual masa, menor M implica mas moleculas"
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
          { paso: "m(O) = 1,60 g - 1,12 g = 0,48 g de O.", porque: "En la muestra solo hay Fe y O, asi que la masa de O es la masa total menos la masa de Fe. Es una resta simple que da la masa de oxigeno combinado." },
          { paso: "n(Fe) = 1,12 / 55,85 = 0,02005 mol; n(O) = 0,48 / 16,00 = 0,0300 mol.", porque: "Con n = m/M para cada elemento se obtienen los moles de atomos de Fe y de O. Esos moles son los que se comparan para establecer la relacion entre ambos." },
          { paso: "Relacion Fe : O = 0,02005 : 0,0300 = 1 : 1,50 = 2 : 3. Formula empirica Fe2O3.", porque: "Se divide por el menor numero de moles (el del Fe) para obtener la relacion minima. El 1,50 se lleva a entero multiplicando todo por 2, lo que da la formula empirica Fe2O3. Error comun: redondear 1,5 a 1 o a 2." }
        ],
        resultado: "Formula empirica Fe2O3"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "M(Fe2O3) = 2 x 55,85 + 3 x 16,00 = 159,70 g/mol.", porque: "Se suma la masa atomica de cada elemento multiplicada por su subindice: 2 Fe y 3 O. Este valor se compara con la masa molar obtenida de la muestra para ver si la formula molecular coincide con la empirica." },
          { paso: "M = m / n = 39,9 g / 0,250 mol = 159,6 g/mol, que coincide con 159,7 g/mol: la formula molecular es Fe2O3.", porque: "Se despeja M = m/n con los datos de la muestra y se compara con la masa molar de Fe2O3. Como coinciden dentro del error de redondeo, la formula molecular es igual a la empirica." }
        ],
        resultado: "Formula molecular Fe2O3 (M = 159,7 g/mol verificada)"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "n(Fe2O3) = 1,60 g / 159,70 g/mol = 0,01002 mol.", porque: "Se aplica n = m/M con la masa molar del Fe2O3 calculada antes. Es el paso que lleva de gramos a mol de unidades formula." },
          { paso: "Atomos de O = 3 x 0,01002 mol x 6,022 x 10^23 mol^-1 = 1,81 x 10^22 atomos.", porque: "Cada formula de Fe2O3 tiene 3 atomos de O, asi que el total se obtiene multiplicando los moles por 3 y luego por N_A. Verificar que la atomicidad se aplique antes de convertir a atomos." }
        ],
        resultado: "1,81 x 10^22 atomos de O"
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
          { paso: "m(O) = 0,500 g - 0,261 g - 0,0658 g = 0,173 g de O.", porque: "Como X solo tiene C, H y O, la masa de O es el resto de la muestra despues de restar la de C y la de H. Es una resta que completa la composicion." },
          { paso: "n(C) = 0,261 / 12,01 = 0,0217 mol; n(H) = 0,0658 / 1,01 = 0,0652 mol; n(O) = 0,173 / 16,00 = 0,0108 mol.", porque: "Cada masa de elemento se divide por su masa atomica para obtener los moles de cada uno. Estos valores son la base para establecer la relacion entre los elementos." },
          { paso: "Relacion C : H : O = 0,0217 : 0,0652 : 0,0108 = 2,0 : 6,0 : 1, aprox. 2 : 6 : 1. Formula empirica C2H6O.", porque: "Se divide por el menor numero de moles, que es el del O, y se redondea a enteros, lo que da 2 : 6 : 1. Las pequenas desviaciones decimales se atribuyen al error de los datos, y la formula empirica es C2H6O." }
        ],
        resultado: "Formula empirica C2H6O"
      },
      {
        parte: "b)",
        pasos: [
          { paso: "M = d x V_m = 0,789 g/cm^3 x 58,4 cm^3/mol = 46,1 g/mol.", porque: "De V_m = M/d se despeja M = d x V_m. Multiplicar la densidad por el volumen molar da la masa molar del liquido." },
          { paso: "M(C2H6O) = 2 x 12,01 + 6 x 1,01 + 16,00 = 46,08 g/mol, que coincide con 46,1 g/mol: la formula molecular es C2H6O.", porque: "Se suma la masa atomica de cada elemento multiplicada por su subindice, lo que da la masa molar de C2H6O. Que el resultado coincida con 46,1 g/mol confirma que la formula molecular es igual a la empirica." }
        ],
        resultado: "M = 46,1 g/mol; formula molecular C2H6O"
      },
      {
        parte: "c)",
        pasos: [
          { paso: "m(2,00 mL) = 0,789 g/cm^3 x 2,00 cm^3 = 1,578 g; n = 1,578 g / 46,1 g/mol = 0,0342 mol.", porque: "Como 1 mL = 1 cm^3, el volumen se pasa a masa multiplicando por la densidad, y despues n = m/M lleva a mol. Error comun: dividir por M sin antes pasar el volumen a masa." },
          { paso: "N = 0,0342 mol x 6,022 x 10^23 mol^-1 = 2,06 x 10^22 moleculas.", porque: "Cada mol de moleculas tiene N_A unidades, asi que N = n x N_A da el numero de moleculas en la muestra. Verificar que el orden de magnitud sea coherente con la cantidad de moles." },
          { paso: "Atomos de H = 6 x 2,06 x 10^22 = 1,24 x 10^23 atomos.", porque: "Cada molecula de C2H6O tiene 6 atomos de H, asi que el total de H es 6 por el numero de moleculas. Es el mismo criterio de atomicidad usado en los pasos anteriores." }
        ],
        resultado: "2,06 x 10^22 moleculas y 1,24 x 10^23 atomos de H"
      },
      {
        parte: "d)",
        pasos: [
          { paso: "C2H6O admite dos estructuras: etanol, CH3-CH2-OH, y dimetileter, CH3-O-CH3.", porque: "La formula molecular indica que atomos de cada tipo hay, pero no como estan unidos. Distintas uniones entre los mismos atomos dan compuestos diferentes, llamados isomeros, y ese es el caso de C2H6O." },
          { paso: "Para distinguirlos se necesita un dato adicional: el etanol tiene grupo OH y reacciona con sodio liberando H2; el dimetileter no lo hace.", porque: "Para distinguir los dos isomeros se usa un ensayo quimico o un dato espectroscopico, como la reaccion con sodio. Estos ensayos revelan la presencia de un grupo funcional (aca el OH), algo que la formula molecular no muestra." }
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
