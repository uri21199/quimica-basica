window.PARCIALES = window.PARCIALES || [];

// Constantes del examen: R = 8,31 J/mol·K = 0,0821 L·atm/mol·K = 1,99 cal/mol·K; 1 MPa = 9,869 atm.
// Grilla de corrección visible en la foto: Ej1 I-a 10, I-b 10, I-c 10, II 10 (40 pts); Ej2 a 8, b 10, c 12 (30 pts); Ej3 a 9, b 9, c 6, d 6 (30 pts). Total 100.
// Ojo con el dato del Ej3: el enunciado da ΔH < 0 para SbCl5(g) → SbCl3(g) + Cl2(g). Se usó tal cual; en la bibliografía la descomposición del SbCl5 suele ser endotérmica, así que si el profe lo corrigió, la respuesta de d) se invierte.
window.PARCIALES.push({
  id: "parcial-2024-05-30",
  tipo: "parcial",
  fecha: "30/05/2024",
  fuente: "parciales/IMG-20260331-WA0029.jpg",
  ejercicios: [
    {
      num: 1,
      temas: ["magnitudes", "reacciones", "gases", "uniones"],
      enunciado: "I) Una muestra de CaCO3 impurificado con arena se calienta y se produce la descomposición del CaCO3 en cal (CaO) y dióxido de carbono. El rendimiento de la reacción es de 85 % y al final se tienen 60 L de gas medidos en CNPT junto con 240 g de mezcla sólida (de arena, cal y CaCO3). Se pide calcular: a) los moles de gas formados; b) la masa de cal que se formó; c) la masa de CaCO3 en el sólido obtenido; d) la pureza del CaCO3 en la muestra original. II) Para el CaO y el CO2: dibuje la estructura de Lewis, indique tipos de enlace, fuerzas intermoleculares y polaridad del compuesto.",
      resolucion: [
        {
          parte: "I-a)",
          pasos: [
            { paso: "Reacción: CaCO3(s) → CaO(s) + CO2(g), relación 1:1:1.", porque: "Es la descomposición térmica del carbonato de calcio; la ecuación balanceada da la relación molar 1:1:1 que se usa en todo el ejercicio." },
            { paso: "En CNPT, 1 mol de gas ocupa 22,4 L: n(CO2) = 60 L / 22,4 L/mol = 2,679 mol.", porque: "En CNPT (0 °C y 1 atm) el volumen molar de un gas ideal es 22,4 L/mol, así que los moles salen de dividir el volumen medido por ese valor." },
            { paso: "El gas medido ya es el real (con rendimiento incluido), así que no se corrige por el 85 %.", porque: "El rendimiento mide la diferencia entre lo esperado y lo obtenido; como el gas medido es lo que efectivamente se formó, ya tiene ese efecto incorporado." }
          ],
          resultado: "2,68 mol de CO2"
        },
        {
          parte: "I-b)",
          pasos: [
            { paso: "n(CaO) = n(CO2) real = 2,679 mol.", porque: "Por la relación molar 1:1 de la ecuación, cada mol de CO2 se produce junto con un mol de CaO." },
            { paso: "M(CaO) = 56,08 g/mol → m = 2,679 mol × 56,08 g/mol = 150,2 g.", porque: "Masa = moles × masa molar, con M(CaO) = M(Ca) + M(O) = 40,08 + 16,00 g/mol." }
          ],
          resultado: "150,2 g de CaO (cal)"
        },
        {
          parte: "I-c)",
          pasos: [
            { paso: "El 85 % es el rendimiento sobre el CaCO3 inicial: n0 = 2,679 / 0,85 = 3,151 mol de CaCO3 en la muestra.", porque: "El rendimiento es la fracción del CaCO3 inicial que se descompuso, así que el mol que reaccionó se divide por 0,85 para volver al total inicial." },
            { paso: "CaCO3 que no reaccionó = 0,15 × 3,151 = 0,4727 mol.", porque: "Lo que no reaccionó es el 15 % restante del CaCO3 inicial (100 % − 85 %)." },
            { paso: "m = 0,4727 mol × 100,09 g/mol = 47,3 g.", porque: "Masa = moles × masa molar, con M(CaCO3) = 100,09 g/mol." },
            { paso: "Chequeo: 240 g = 150,2 (CaO) + 47,3 (CaCO3) + 42,5 (arena), cierra.", porque: "La masa del sólido es la suma de sus componentes; la arena no se calculó aparte sino por diferencia (240 − 150,2 − 47,3 = 42,5 g), así que el chequeo sólo verifica coherencia." },
            { paso: "Suposición: la arena no reacciona y el 85 % se aplica al CaCO3 inicial total.", porque: "La arena es inerte y no interviene en la reacción; el enunciado no aclara sobre qué masa se calcula el rendimiento, y se toma el CaCO3 inicial total." }
          ],
          resultado: "47,3 g de CaCO3 en el sólido"
        },
        {
          parte: "I-d)",
          pasos: [
            { paso: "La muestra original pierde solo el CO2: m(original) = 240 g + m(CO2) = 240 + 2,679 mol × 44,01 g/mol = 240 + 117,9 = 357,9 g.", porque: "Lo que se perdió al calentar es el CO2 que se escapó como gas; la muestra inicial pesaba el sólido que quedó más ese CO2." },
            { paso: "m(CaCO3 original) = 3,151 mol × 100,09 g/mol = 315,4 g.", porque: "La pureza se refiere a la muestra original, así que se usa todo el CaCO3 que había al inicio, no sólo el que quedó." },
            { paso: "Pureza = 315,4 g / 357,9 g × 100 = 88,1 %.", porque: "Pureza en masa = masa de CaCO3 / masa total de la muestra × 100." }
          ],
          resultado: "88,1 % de CaCO3 en la muestra original"
        },
        {
          parte: "II)",
          pasos: [
            { paso: "CaO: Ca2+ y O2−, enlace iónico. Lewis: [Ca]2+ [:O:]2−. Es una red cristalina, no hay moléculas discretas; las interacciones son electrostáticas ion-ion, no fuerzas intermoleculares propiamente dichas.", porque: "Un metal (Ca) con un no metal (O) forma enlace iónico por transferencia de electrones; en un sólido iónico no hay moléculas, así que no corresponden fuerzas intermoleculares." },
            { paso: "CO2: O=C=O, lineal. Enlaces covalentes polares (diferencia de electronegatividad C-O ≈ 0,9), pero la molécula es apolar porque los momentos dipolares de los dos enlaces se cancelan.", porque: "Cada enlace C=O es polar porque el O (3,44) es más electronegativo que el C (2,55), pero la geometría lineal hace que los dos dipolos opuestos se anulen." },
            { paso: "Fuerzas intermoleculares del CO2: solo dispersión de London.", porque: "Al ser una molécula apolar y sin H unido a F, O o N, la única interacción intermolecular es la dispersión de London." }
          ],
          resultado: "CaO: iónico, red cristalina. CO2: enlaces polares, molécula apolar, fuerzas de London"
        }
      ],
      errores_tipicos: [
        { error: "Aplicar el 85 % al gas medido (o multiplicarlo en vez de dividirlo) al volver al CaCO3 inicial.", como_evitar: "El gas medido es lo que realmente se obtuvo; el rendimiento se usa para pasar al CaCO3 inicial dividiendo por 0,85." },
        { error: "Calcular la pureza con los 240 g sin sumar el CO2 que se escapó, o tomar los 240 g como si fueran todo CaCO3.", como_evitar: "La masa de la muestra original es la masa del sólido más la masa de CO2 que se perdió (240 + 117,9 g)." },
        { error: "Decir que el CO2 es polar como molécula, o que el CaO tiene enlace covalente.", como_evitar: "Revisá la geometría: el CO2 es lineal y los dipolos se cancelan; el CaO es iónico y no forma moléculas." }
      ]
    },
    {
      num: 2,
      temas: ["termodinamica"],
      enunciado: "La combustión completa del etanol líquido (dato del enunciado: ΔHf etanol(l) = −277 kJ/mol) se estudia a 1 bar y 25 °C. Se pide: a) escribir la ecuación termoquímica para la combustión de 1 mol de etanol (l), 1 bar de presión y 25 °C; b) calcular el trabajo de expansión intercambiado entre sistema y medio cuando se produce la combustión de 1 mol de etanol, y definir su signo; c) suponiendo que se gastan 8 litros de bioetanol (etanol de fuente vegetal) para recorrer 100 km en un auto mediano preparado para funcionar con bioetanol puro, calcular los moles de octano necesarios para el mismo recorrido. DATOS: ΔHf H2O(l) = −285,8 kJ/mol; ΔHf CO2(g) = −393,5 kJ/mol; ΔHc octano = −5471 kJ/mol; ρ(etanol) = 0,789 kg/litro; Cp H2O(l) = 4,186 kJ/kg·K; ΔHv(H2O) = 40,66 kJ/mol; ρ(H2O) = 1 g/ml.",
      resolucion: [
        {
          parte: "a)",
          pasos: [
            { paso: "Reacción: C2H5OH(l) + 3 O2(g) → 2 CO2(g) + 3 H2O(l). Se usa H2O(l) porque el dato es ΔHf del agua líquida.", porque: "La combustión completa lleva el C a CO2 y el H a agua; el balance da 1 mol de etanol con 3 O2, y el agua se escribe líquida porque ese es el estado del dato de ΔHf provisto." },
            { paso: "ΔH° = Σ ΔHf(productos) − Σ ΔHf(reactivos) = [2(−393,5) + 3(−285,8)] − [−277] = −1644,4 + 277 = −1367,4 kJ/mol (ΔHf O2 = 0).", porque: "El ΔH de reacción se calcula con las entalpías de formación (ley de Hess), y la ΔHf de un elemento en su forma estándar, como el O2, vale cero." }
          ],
          resultado: "C2H5OH(l) + 3 O2(g) → 2 CO2(g) + 3 H2O(l)  ΔH° = −1367,4 kJ/mol"
        },
        {
          parte: "b)",
          pasos: [
            { paso: "Gases: reactivos 3 mol de O2, productos 2 mol de CO2 (los líquidos no cuentan). Δn = 2 − 3 = −1.", porque: "Para el trabajo de expansión sólo importan los gases, porque los líquidos prácticamente no cambian de volumen." },
            { paso: "Trabajo de expansión: W = −P·ΔV = −Δn·R·T = −(−1)(8,314 J/mol·K)(298,15 K) = +2478,9 J ≈ +2,48 kJ.", porque: "A presión constante, P·ΔV = Δn(gas)·R·T para un gas ideal, y T = 25 + 273,15 = 298,15 K." },
            { paso: "Convención: W > 0 cuando el medio hace trabajo sobre el sistema. Acá el gas disminuye de volumen (se comprime), así que el sistema recibe trabajo.", porque: "La convención química habitual toma W > 0 cuando el sistema recibe trabajo; como Δn < 0 el gas se comprime y el medio trabaja sobre él." }
          ],
          resultado: "W ≈ +2,48 kJ (positivo: el medio realiza trabajo sobre el sistema)"
        },
        {
          parte: "c)",
          pasos: [
            { paso: "Masa de etanol: 8 L × 0,789 kg/L = 6,312 kg = 6312 g.", porque: "La densidad convierte volumen en masa (m = ρ·V), y para calcular moles hace falta la masa en gramos." },
            { paso: "n(etanol) = 6312 g / 46,07 g/mol = 137,0 mol.", porque: "n = m / M, con M(C2H5OH) = 46,07 g/mol." },
            { paso: "Energía liberada: 137,0 mol × 1367,4 kJ/mol = 1,873 × 10^5 kJ (≈ 187 350 kJ).", porque: "Cada mol de etanol libera 1367,4 kJ según el punto a), así que la energía total es moles por energía por mol." },
            { paso: "Mismo recorrido ⇒ misma energía. n(octano) = 187 350 kJ / 5471 kJ/mol = 34,25 mol.", porque: "Se supone que el auto necesita la misma energía para el mismo recorrido, así que la combustión del octano debe aportar esa misma energía; con su ΔHc los moles salen de dividir." },
            { paso: "Suposiciones: el octano se quema a CO2 y H2O(l) con ΔHc dado; no hay pérdidas; el bioetanol es puro.", porque: "Son las hipótesis que hacen comparables los dos combustibles: la energía de combustión se toma como la útil, sin pérdidas y con combustible puro." }
          ],
          resultado: "≈ 34,2 mol de octano"
        }
      ],
      errores_tipicos: [
        { error: "Poner ΔH positivo en la combustión porque el enunciado dice que 'suministra' energía.", como_evitar: "La combustión es exotérmica: el ΔH es negativo, el calor sale del sistema." },
        { error: "Usar H2O(g) en la ecuación o en el cálculo de ΔH, cuando el dato es ΔHf del agua líquida.", como_evitar: "Verificá el estado de cada producto con el dato de ΔHf que tenés." },
        { error: "Usar 0,789 kg/L como g/L y dividir por la masa molar en g/mol sin convertir.", como_evitar: "Pasá 8 L × 0,789 kg/L a 6312 g antes de calcular moles." }
      ]
    },
    {
      num: 3,
      temas: ["equilibrio", "gases"],
      enunciado: "Se colocan 4 moles de SbCl5 puro en un recipiente rígido de 3 litros, a 182 °C. Ocurre la siguiente reacción: SbCl5(g) ⇌ SbCl3(g) + Cl2(g), ΔH < 0. Establecido el equilibrio, se encontró que el sistema contenía 0,17 moles de cloro gaseoso. a) Calcular Kc y Kp a 182 °C. Escriba las expresiones de ambas. b) Calcule el porcentaje de descomposición del SbCl5. c) Si se desea obtener más SbCl3, ¿conviene agregar o remover Cl2 del sistema? Justifique. d) Con el mismo propósito, ¿conviene aumentar o disminuir la temperatura? Justifique.",
      resolucion: [
        {
          parte: "a)",
          pasos: [
            { paso: "Expresiones: Kc = [SbCl3][Cl2] / [SbCl5]; Kp = p(SbCl3)·p(Cl2) / p(SbCl5).", porque: "La constante de equilibrio es el producto de productos sobre reactivos, cada uno elevado a su coeficiente; como todas las especies son gases, entran todas en la expresión." },
            { paso: "Equilibrio (moles): SbCl5 = 4 − 0,17 = 3,83; SbCl3 = 0,17; Cl2 = 0,17.", porque: "Por la estequiometría 1:1:1, cada mol de Cl2 formado implica un mol de SbCl5 consumido y un mol de SbCl3 formado." },
            { paso: "Concentraciones (V = 3 L): [SbCl5] = 1,277 mol/L; [SbCl3] = [Cl2] = 0,05667 mol/L.", porque: "La concentración molar es moles dividido el volumen, y las expresiones de Kc usan concentraciones, no moles." },
            { paso: "Kc = (0,05667)² / 1,277 = 2,52 × 10⁻³ mol/L.", porque: "Se reemplaza en la expresión de Kc; quedan unidades de mol/L porque el número de moles de gas cambia (Δn ≠ 0)." },
            { paso: "T = 182 + 273,15 = 455,15 K. Δn(gas) = 2 − 1 = +1.", porque: "La relación entre Kp y Kc usa la temperatura en kelvin, y Δn es moles de gas de productos menos los de reactivos (2 − 1)." },
            { paso: "Kp = Kc·(RT)^Δn = Kc·R·T = 2,515 × 10⁻³ × (0,08206 × 455,15) = 2,515 × 10⁻³ × 37,35 = 0,0939 atm.", porque: "De pV = nRT se obtiene p = c·R·T para cada gas, lo que da Kp = Kc(RT)^Δn; con Δn = 1 queda Kp = Kc·R·T." }
          ],
          resultado: "Kc ≈ 2,5 × 10⁻³ mol/L; Kp ≈ 0,094 atm"
        },
        {
          parte: "b)",
          pasos: [
            { paso: "Cada mol de Cl2 formado proviene de un mol de SbCl5 descompuesto: 0,17 mol.", porque: "Por la relación 1:1 de la ecuación, el Cl2 formado es igual al SbCl5 que se descompuso." },
            { paso: "% descomposición = 0,17 / 4 × 100 = 4,25 %.", porque: "El porcentaje de descomposición es los moles descompuestos sobre los moles iniciales de SbCl5 (4 mol), por 100." }
          ],
          resultado: "4,25 %"
        },
        {
          parte: "c)",
          pasos: [
            { paso: "Quitar Cl2 es quitar un producto: por Le Chatelier el equilibrio se desplaza hacia la derecha, formando más SbCl3 y Cl2.", porque: "Por el principio de Le Chatelier, al retirar un producto el sistema se desplaza en el sentido que lo repone." },
            { paso: "Agregar Cl2 desplazaría el equilibrio hacia la izquierda (más SbCl5).", porque: "Al aumentar la concentración de un producto el sistema consume ese producto, es decir se corre hacia los reactivos (Le Chatelier)." }
          ],
          resultado: "Conviene remover Cl2"
        },
        {
          parte: "d)",
          pasos: [
            { paso: "Con el dato del enunciado (ΔH < 0 para la reacción escrita en sentido directo), la reacción directa es exotérmica.", porque: "Un ΔH negativo indica que el sentido directo libera calor; se usa el signo tal como figura en el enunciado, aunque en la bibliografía la descomposición del SbCl5 suele ser endotérmica (ver comentario del ejercicio)." },
            { paso: "Al disminuir la temperatura, el equilibrio se desplaza hacia el lado exotérmico, es decir hacia la formación de SbCl3 y Cl2.", porque: "Por Le Chatelier, al bajar la temperatura el sistema favorece el sentido que libera calor, que con este dato es el directo." },
            { paso: "Si el signo real del ΔH fuera positivo, la respuesta se invierte (ver comentario del ejercicio).", porque: "Con ΔH > 0 el sentido directo absorbe calor y habría que aumentar la temperatura; se deja como advertencia por el dato dudoso." }
          ],
          resultado: "Conviene disminuir la temperatura (según el dato ΔH < 0)"
        }
      ],
      errores_tipicos: [
        { error: "Armar Kc con moles en lugar de concentraciones (no dividir por los 3 L).", como_evitar: "Dividí cada cantidad de mol por el volumen antes de escribir Kc." },
        { error: "Escribir Kp = Kc sin el factor (RT)^Δn, o usar Δn = −1 cuando los productos son 2 gases y el reactivo 1.", como_evitar: "Kp = Kc(RT)^Δn con Δn = 2 − 1 = +1, y T en K (182 + 273,15 = 455,15 K)." },
        { error: "Invertir Le Chatelier: pensar que agregar Cl2 favorece la formación de SbCl3.", como_evitar: "El equilibrio se corre en sentido contrario a lo que agregás y en el mismo sentido que lo que quitás." }
      ]
    }
  ]
});

// Examen sin fecha ni encabezado visible en la foto (el recorte empieza en el Ejercicio 1). Tipo asumido: parcial.
// Grilla de corrección: aparece el título pero no hay notas legibles en la foto.
// La cabecera de los datos del Ej2 está tapada por un garabato: se toma como datos del agua (cp del hielo y ΔHfusión).
window.PARCIALES.push({
  id: "parcial-sin-fecha-2",
  tipo: "parcial",
  fecha: "sin fecha",
  fuente: "parciales/IMG-20260331-WA0031.jpg",
  ejercicios: [
    {
      num: 1,
      temas: ["liquidos", "uniones", "materia"],
      enunciado: "a) El CO2 posee: punto triple (5,2 atm, −56,4 °C); temperatura de sublimación normal: −78 °C; punto crítico (73 atm, 31,1 °C); temperatura de ebullición a 50 atm: 15 °C; temperatura de fusión a 50 atm: −54 °C. Construir cualitativamente el diagrama de fases del CO2, indicando zonas y puntos característicos, curvas de equilibrio, etc. b) La plata cristaliza en una red cúbica centrada en las caras y su densidad es 10,49 g/cm³. (i) ¿Cuántos átomos hay por celda unitaria? Justifique en base a un esquema de la misma. (ii) ¿Cuál es la longitud de la arista de la celda unitaria? (iii) ¿Será un buen sólido conductor de la corriente eléctrica? Justifique. c) Dibuje las fórmulas semidesarrolladas del propano, la propanona y el agua. Indique cuáles son las fuerzas intermoleculares presentes en cada uno de ellos, y ordénelas por intensidad creciente. ¿Cuál o cuáles son moléculas polares? Justifique sus respuestas. d) Defina presión de vapor. Ordene las sustancias del ítem c en función de sus valores crecientes de esta propiedad. Justifique.",
      resolucion: [
        {
          parte: "a)",
          pasos: [
            { paso: "Punto triple (5,2 atm; −56,4 °C): único punto donde coexisten sólido, líquido y vapor en equilibrio.", porque: "Por definición, el punto triple es la única combinación de presión y temperatura en la que las tres fases están en equilibrio simultáneo." },
            { paso: "Punto crítico (73 atm; 31,1 °C): por encima, no se distingue líquido de gas (fluido supercrítico).", porque: "Por encima de la temperatura y la presión críticas desaparece la interfase entre líquido y gas; eso define al punto crítico." },
            { paso: "Sublimación a 1 atm: como 1 atm < 5,2 atm (presión del triple), el CO2 sólido pasa directo a gas a −78 °C; no existe líquido a presión atmosférica.", porque: "Por debajo de la presión del punto triple no puede existir líquido en equilibrio, así que el sólido sublima; el −78 °C es la temperatura de sublimación a 1 atm dada en el enunciado." },
            { paso: "Curva sólido-líquido: pendiente positiva (a 50 atm funde a −54 °C, por encima de −56,4 °C del triple). Curva líquido-vapor: une el triple con el crítico (a 50 atm hierve a 15 °C). Curva sólido-vapor: une el triple con el punto de sublimación.", porque: "Cada curva une los puntos donde dos fases coexisten; la pendiente de la sólido-líquido sale del dato de fusión a 50 atm, que está por encima de la temperatura del triple." },
            { paso: "Zonas: sólido (baja T y alta P), líquido (T intermedia, P > 5,2 atm), gas (baja P) y fluido supercrítico (por encima del crítico).", porque: "Cada zona es la fase estable para esas condiciones, y las curvas de equilibrio son las fronteras entre zonas." }
          ],
          resultado: "Diagrama cualitativo con triple (5,2 atm; −56,4 °C), crítico (73 atm; 31,1 °C) y sublimación a 1 atm"
        },
        {
          parte: "b)(i)",
          pasos: [
            { paso: "Celda FCC: 8 vértices × 1/8 + 6 caras × 1/2 = 1 + 3 = 4 átomos por celda.", porque: "Cada átomo de vértice es compartido por 8 celdas (1/8) y cada átomo de cara por 2 (1/2); así se cuenta el número de átomos de una red cúbica centrada en las caras." },
            { paso: "Esquema: cubo con átomos en los 8 vértices y en el centro de cada una de las 6 caras.", porque: "El enunciado pide justificar con un esquema: muestra qué átomos están compartidos y por eso el conteo de 4 átomos." }
          ],
          resultado: "4 átomos por celda"
        },
        {
          parte: "b)(ii)",
          pasos: [
            { paso: "ρ = z·M / (a³·N_A) → a³ = z·M / (ρ·N_A) = 4 × 107,87 g/mol / (10,49 g/cm³ × 6,022 × 10²³ mol⁻¹) = 6,83 × 10⁻²³ cm³.", porque: "La densidad es la masa de la celda (z átomos de masa molar M dividida por N_A) sobre su volumen a³; M(Ag) = 107,87 g/mol y N_A = 6,022 × 10²³ mol⁻¹ son valores tabulados, no dados en el enunciado." },
            { paso: "a = (6,83 × 10⁻²³)^(1/3) cm = 4,09 × 10⁻⁸ cm = 4,09 Å (409 pm).", porque: "La arista se despeja tomando la raíz cúbica del volumen de la celda, y 1 Å = 10⁻⁸ cm." },
            { paso: "Chequeo: en FCC a = 2√2·r; con r(Ag) ≈ 144 pm sale ≈ 407 pm, consistente.", porque: "En la red FCC los átomos de una diagonal de cara se tocan (a = 2√2·r); el radio de la plata (≈144 pm) es un dato tabulado externo al enunciado y sirve sólo como verificación de orden de magnitud." }
          ],
          resultado: "a ≈ 4,09 × 10⁻⁸ cm (≈ 409 pm)"
        },
        {
          parte: "b)(iii)",
          pasos: [
            { paso: "La plata es un metal: enlace metálico con electrones de valencia deslocalizados (mar de electrones) que se mueven ante un campo eléctrico.", porque: "La conducción eléctrica en metales se debe a electrones libres de moverse por toda la red, y el enlace metálico es el que los deslocaliza." }
          ],
          resultado: "Sí, es un buen conductor (electrones deslocalizados)"
        },
        {
          parte: "c)",
          pasos: [
            { paso: "Propano CH3–CH2–CH3: molécula apolar; fuerzas: solo dispersión de London.", porque: "Es un hidrocarburo sin heteroátomos ni H unido a F, O o N: no tiene dipolo permanente ni puentes de hidrógeno, sólo dispersión." },
            { paso: "Propanona CH3–CO–CH3: polar (C=O); fuerzas: dipolo-dipolo y dispersión.", porque: "El O es más electronegativo que el C y los dos grupos CH3 no anulan el dipolo del C=O, así que la molécula tiene dipolo neto." },
            { paso: "Agua H–O–H: angular y polar; fuerzas: puentes de hidrógeno (además de dipolo-dipolo y dispersión).", porque: "El H unido a O permite puentes de hidrógeno, la interacción más intensa de las tres; la forma angular impide que los dipolos se cancelen." },
            { paso: "Intensidad creciente: propano < propanona < agua.", porque: "El orden de intensidad es dispersión de London < dipolo-dipolo < puentes de hidrógeno." },
            { paso: "Polares: propanona y agua. El propano es apolar.", porque: "Una molécula es polar cuando sus dipolos de enlace no se cancelan, lo que depende de la diferencia de electronegatividad y de la geometría." }
          ],
          resultado: "Creciente: propano (London) < propanona (dipolo-dipolo) < agua (puentes H). Polares: propanona y agua"
        },
        {
          parte: "d)",
          pasos: [
            { paso: "Presión de vapor: presión que ejerce el vapor en equilibrio con su líquido a una temperatura dada.", porque: "Es la definición de presión de vapor, la presión de saturación del equilibrio líquido-vapor." },
            { paso: "Cuanto más débiles las fuerzas intermoleculares, más moléculas escapan a la fase vapor y mayor es la presión de vapor (relación inversa).", porque: "Las fuerzas intermoleculares retienen las moléculas en el líquido; si son débiles, es más fácil que escapen y la presión de vapor sube." },
            { paso: "Orden creciente: agua < propanona < propano.", porque: "Se invierte el orden del punto c: el propano (fuerzas más débiles) tiene la mayor presión de vapor y el agua (puentes H) la menor." }
          ],
          resultado: "Agua < propanona < propano"
        }
      ],
      errores_tipicos: [
        { error: "Dibujar la curva sólido-líquido del CO2 con pendiente negativa, como en el agua.", como_evitar: "Mirá los datos: a 50 atm el CO2 funde a −54 °C, más alto que el triple (−56,4 °C); la curva sube." },
        { error: "Decir que el propano, la propanona o la acetona forman puentes de hidrógeno, o que el propano es polar.", como_evitar: "Puente de H solo si hay H unido a F, O o N; la propanona tiene O pero no H unido a O. El propano es apolar." },
        { error: "Ordenar la presión de vapor al revés (más fuerzas, más presión de vapor).", como_evitar: "Relación inversa: mayor fuerza intermolecular, menor presión de vapor." }
      ]
    },
    {
      num: 2,
      temas: ["termodinamica"],
      enunciado: "La combustión completa del tolueno (metilbenceno, C7H8) líquido suministra 3920 kJ/mol, con agua líquida como producto. Se requiere este combustible para derretir completamente 18 g de hielo que se hallan a −15 °C. Datos del agua: ΔHfusión = 6,02 kJ/mol; cp agua(s) = 2,09 J/g·°C. a) Hallar la cantidad de calor que debe recibir el hielo, en kJ. b) ¿Cuántos gramos de tolueno se necesitarán para el proceso? Escriba la ecuación termoquímica de la combustión. c) En el proceso de evaporación de una sustancia X, ¿el sistema realiza trabajo sobre el entorno o recibe trabajo del mismo? Justifique.",
      resolucion: [
        {
          parte: "a)",
          pasos: [
            { paso: "Calentar el hielo de −15 °C a 0 °C: Q1 = m·c·ΔT = 18 g × 2,09 J/g·°C × 15 °C = 564 J = 0,564 kJ.", porque: "Mientras el hielo no cambia de fase el calor es m·c·ΔT, con el calor específico del hielo que da el enunciado (2,09 J/g·°C)." },
            { paso: "Fundir a 0 °C: n = 18 g / 18 g/mol = 1 mol → Q2 = 1 mol × 6,02 kJ/mol = 6,02 kJ.", porque: "Durante el cambio de fase la temperatura no varía y el calor es n·ΔHfusión; 18 g de agua son 1 mol porque M(H2O) = 18 g/mol." },
            { paso: "Q total = 0,564 + 6,02 = 6,58 kJ.", porque: "El calor es función de estado de cada etapa y el total del proceso es la suma de los calores de las etapas sucesivas." },
            { paso: "Suposición: el hielo queda como agua a 0 °C (no se pide calentar el agua).", porque: "El enunciado pide derretir el hielo y no calentar el agua resultante, así que el proceso termina en agua a 0 °C." }
          ],
          resultado: "6,58 kJ"
        },
        {
          parte: "b)",
          pasos: [
            { paso: "Ecuación: C7H8(l) + 9 O2(g) → 7 CO2(g) + 4 H2O(l)  ΔHc = −3920 kJ/mol (el enunciado habla de calor suministrado, que es calor liberado por el combustible).", porque: "El balance (C 7, H 8, O 18 = 14 + 4) usa H2O(l) como indica el enunciado; el ΔHc es negativo porque la energía sale del combustible al quemarse." },
            { paso: "n(tolueno) = 6,58 kJ / 3920 kJ/mol = 1,68 × 10⁻³ mol.", porque: "Moles = energía que debe aportar el tolueno / energía liberada por mol de combustible." },
            { paso: "m = 1,68 × 10⁻³ mol × 92,14 g/mol = 0,155 g.", porque: "Masa = moles × M(C7H8) = 92,14 g/mol." },
            { paso: "Suposición: todo el calor de combustión llega al hielo, sin pérdidas.", porque: "El enunciado no menciona pérdidas, así que se supone que toda la energía liberada se transfiere al hielo." }
          ],
          resultado: "0,155 g de tolueno (ecuación: C7H8(l) + 9 O2(g) → 7 CO2(g) + 4 H2O(l), ΔH = −3920 kJ/mol)"
        },
        {
          parte: "c)",
          pasos: [
            { paso: "La evaporación pasa de líquido a gas: el volumen aumenta (ΔV > 0).", porque: "El vapor ocupa mucho más volumen que el líquido que lo originó, así que la evaporación es una expansión." },
            { paso: "El sistema se expande contra la presión externa: realiza trabajo sobre el entorno. Con W = −P·ΔV, W < 0 (convención: W positivo si lo recibe el sistema).", porque: "Una expansión contra una presión externa es trabajo que sale del sistema; con la convención W > 0 si lo recibe el sistema, ese trabajo es negativo." }
          ],
          resultado: "El sistema realiza trabajo sobre el entorno (W < 0)"
        }
      ],
      errores_tipicos: [
        { error: "Calcular solo el calor de fusión y olvidar el calentamiento del hielo de −15 °C a 0 °C.", como_evitar: "Sumá los pasos: calentar el sólido, fundir a 0 °C y, si corresponde, calentar el líquido." },
        { error: "Usar cp del agua líquida (4,18 J/g·°C) para el hielo, o mezclar J con kJ.", como_evitar: "El hielo usa cp = 2,09 J/g·°C; pasá siempre J a kJ antes de sumar con el ΔH de fusión." },
        { error: "Multiplicar el calor por la masa molar en vez de dividir por la energía de combustión para hallar los moles de tolueno.", como_evitar: "n = Q / |ΔHc| y después m = n × M." }
      ]
    },
    {
      num: 3,
      temas: ["acidobase", "soluciones"],
      enunciado: "A) Calcule el pH final al mezclar 2 litros de solución de NaOH 0,001 M y 4 litros de solución de Ba(OH)2 0,005 M. ¿Qué volumen de solución de HCl 0,1 M se necesita para neutralizar dicha solución final? Escriba la reacción química de neutralización para una de las sales. B) Una solución de ácido acético (CH3COOH) tiene un pH de 3,06 y en el equilibrio está un 2 % disociado. (i) Escriba la ecuación de disociación del ácido acético en agua y exprese su constante de acidez. (ii) Calcule el valor de la constante de acidez y el valor de la concentración analítica de la solución. Indique todas las consideraciones que realice para los cálculos. (iii) Si se titula la solución anterior con una solución de NaOH, ¿cómo espera que sea el valor de pH del punto de equivalencia? Justifique. Escriba la reacción de neutralización correspondiente. Datos: R = 8,314 J/mol·K = 0,08206 L·atm/mol·K = 1,987 cal/mol·K.",
      resolucion: [
        {
          parte: "A) pH",
          pasos: [
            { paso: "NaOH: n(OH⁻) = 2 L × 0,001 mol/L = 0,002 mol.", porque: "El NaOH es base fuerte, se disocia completamente y aporta 1 OH⁻ por fórmula; moles = volumen × concentración." },
            { paso: "Ba(OH)2: n(Ba(OH)2) = 4 L × 0,005 mol/L = 0,020 mol → n(OH⁻) = 0,040 mol (2 OH⁻ por fórmula).", porque: "El Ba(OH)2 también es base fuerte y libera 2 OH⁻ por unidad fórmula, así que los moles de OH⁻ son el doble de los de base." },
            { paso: "Total OH⁻ = 0,042 mol en 6 L → [OH⁻] = 7,0 × 10⁻³ mol/L.", porque: "Al mezclar, los moles se suman y el volumen total es la suma de los volúmenes (2 + 4 = 6 L); la concentración es moles sobre volumen total." },
            { paso: "pOH = −log(7,0 × 10⁻³) = 2,15 → pH = 14 − 2,15 = 11,85.", porque: "pOH = −log[OH⁻] y, a 25 °C, pH + pOH = 14." }
          ],
          resultado: "pH ≈ 11,85"
        },
        {
          parte: "A) volumen de HCl",
          pasos: [
            { paso: "Neutralizar todo el OH⁻: n(H⁺) = n(OH⁻) = 0,042 mol.", porque: "En la neutralización cada H⁺ reacciona con un OH⁻ (H⁺ + OH⁻ → H2O), así que hacen falta igual cantidad de H⁺ que de OH⁻." },
            { paso: "V(HCl 0,1 M) = 0,042 mol / 0,1 mol/L = 0,42 L = 420 mL.", porque: "Volumen = moles / concentración, y el HCl aporta 1 H⁺ por mol." },
            { paso: "Reacciones (una por base): NaOH + HCl → NaCl + H2O; Ba(OH)2 + 2 HCl → BaCl2 + 2 H2O.", porque: "Son las reacciones de neutralización: el HCl aporta H⁺ que se combina con OH⁻ para dar agua y la sal; el Ba(OH)2 necesita 2 HCl por su estequiometría." },
            { paso: "Suposición: el enunciado dice 'sales', pero las reacciones de neutralización son de las bases; se escriben las de NaOH y Ba(OH)2.", porque: "La sal es el producto de la neutralización; escribir la reacción de cada base presente cubre lo que pide el enunciado." }
          ],
          resultado: "420 mL de HCl 0,1 M"
        },
        {
          parte: "B)(i)",
          pasos: [
            { paso: "CH3COOH(ac) + H2O(l) ⇌ CH3COO⁻(ac) + H3O⁺(ac).", porque: "El ácido acético es débil y cede H⁺ al agua; como el proceso no es total se escribe con doble flecha." },
            { paso: "Ka = [CH3COO⁻][H3O⁺] / [CH3COOH] (el agua no aparece por ser solvente).", porque: "En soluciones diluidas la actividad del agua es prácticamente 1, así que el solvente no entra en la constante." }
          ],
          resultado: "Ka = [CH3COO⁻][H3O⁺] / [CH3COOH]"
        },
        {
          parte: "B)(ii)",
          pasos: [
            { paso: "[H3O⁺] = 10^(−3,06) = 8,71 × 10⁻⁴ mol/L.", porque: "pH = −log[H3O⁺], así que [H3O⁺] = 10^(−pH)." },
            { paso: "Con α = 0,02: C = [H3O⁺] / α = 8,71 × 10⁻⁴ / 0,02 = 0,0436 mol/L (concentración analítica).", porque: "En un ácido débil [H3O⁺] = C·α, donde α es la fracción disociada que da el enunciado; de ahí se despeja la concentración analítica C." },
            { paso: "Ka = C·α² / (1 − α) = 0,0436 × (0,02)² / 0,98 = 1,78 × 10⁻⁵.", porque: "Las concentraciones de equilibrio son C(1 − α) para el ácido y Cα para cada ion, y al reemplazar en Ka se llega a Ka = Cα²/(1 − α) (ley de Ostwald)." },
            { paso: "Chequeo: [H3O⁺]² / (C − [H3O⁺]) = (8,71 × 10⁻⁴)² / (0,0436 − 0,00087) = 1,78 × 10⁻⁵.", porque: "Se verifica la Ka con las concentraciones de equilibrio directamente, sin depender de α, y da el mismo valor." },
            { paso: "Consideraciones: [CH3COO⁻] = [H3O⁺] (se desprecia el OH⁻ y la autoionización del agua); α = 0,02 es el dato del enunciado; la solución es diluida y las actividades se toman como concentraciones.", porque: "El ácido es la única fuente relevante de H⁺ frente a 10⁻⁴ M (la autoionización es despreciable), y a estas diluciones las actividades se aproximan a las concentraciones." }
          ],
          resultado: "Ka ≈ 1,8 × 10⁻⁵; C ≈ 0,0436 mol/L"
        },
        {
          parte: "B)(iii)",
          pasos: [
            { paso: "Reacción: CH3COOH + NaOH → CH3COONa + H2O.", porque: "La neutralización de un ácido con una base fuerte produce sal y agua, en relación 1:1." },
            { paso: "En el punto de equivalencia queda acetato de sodio. El anión CH3COO⁻ es base débil y se hidroliza: CH3COO⁻ + H2O ⇌ CH3COOH + OH⁻, generando OH⁻.", porque: "El acetato es la base conjugada de un ácido débil, por eso reacciona con el agua tomando H⁺ y liberando OH⁻." },
            { paso: "Por eso el pH del punto de equivalencia es mayor que 7 (básico).", porque: "La hidrólisis genera OH⁻, y un exceso de OH⁻ da pH > 7 a 25 °C." }
          ],
          resultado: "pH > 7 (básico) en el punto de equivalencia"
        }
      ],
      errores_tipicos: [
        { error: "Contar 1 OH⁻ por fórmula de Ba(OH)2 y subestimar los moles de base.", como_evitar: "Ba(OH)2 aporta 2 OH⁻ por mol; con 0,020 mol de Ba(OH)2 son 0,040 mol de OH⁻." },
        { error: "Confundir Ka con pKa o tomar Ka = [H3O⁺]/C como si fuera una constante.", como_evitar: "Ka = Cα²/(1 − α); pKa = −log Ka (≈ 4,75 para el acético), no lo mezcles con Ka." },
        { error: "Suponer que el punto de equivalencia de un ácido débil con una base fuerte da pH 7.", como_evitar: "La sal del ácido débil se hidroliza en medio básico: pH > 7." }
      ]
    }
  ]
});

// Primer recuperatorio 14/11/2025 (fecha leída del encabezado: 'Primer recuperatorio: 14/11/25 18:00').
// Grilla de corrección: tiene anotaciones manuscritas (notas por ítem y nota final) que no se pudieron leer con certeza; no se transcribe.
// En el Ej2 el enunciado dice 'Este muestra' (sic). Los datos de cp y ΔHvap se toman del enunciado.
window.PARCIALES.push({
  id: "1er-recuperatorio-2025-11-14",
  tipo: "1er recuperatorio",
  fecha: "14/11/2025",
  fuente: "parciales/IMG-20260331-WA0032.jpg",
  ejercicios: [
    {
      num: 1,
      temas: ["reacciones", "soluciones", "acidobase", "uniones"],
      enunciado: "El clorato de potasio se puede obtener a partir de la siguiente reacción: 3 Cl2(g) + 6 KOH(ac) → 5 KCl(ac) + KClO3(ac) + 3 H2O(l). Se sabe que reaccionan 45 g de cloro del 85 % de pureza con 500 mL de una solución de hidróxido de potasio de concentración 2,8 % m/v, y el rendimiento de la reacción es del 75 %. a) Corrobore el balanceo de la reacción aplicando el método de ion-electrón. b) Calcule la masa de clorato de potasio que se obtiene. c) Calcule el pH de la solución de hidróxido de potasio utilizada como reactivo en la obtención de la sal (considerando impurezas inertes). d) Escriba la estructura de Lewis del cloro y del cloruro de potasio y ordénelos por punto de ebullición creciente y presión de vapor creciente. Justifique en cada caso, en función de sus estructuras y las fuerzas intermoleculares que se establecen.",
      resolucion: [
        {
          parte: "a)",
          pasos: [
            { paso: "Medio básico (hay KOH). Reducción: Cl2 + 2 e⁻ → 2 Cl⁻ (×5).", porque: "El medio lo fija el KOH, así que se usan OH⁻ y H2O en lugar de H⁺; el Cl2 se reduce ganando 2 e⁻ por molécula." },
            { paso: "Oxidación: Cl2 + 12 OH⁻ → 2 ClO3⁻ + 6 H2O + 10 e⁻ (×1). Verificación: Cl 2 = 2, O 12 = 12, H 12 = 12, carga −12 = −12.", porque: "El cloro pasa de 0 a +5 (pierde 10 e⁻); el O se ajusta con H2O, el H con OH⁻, y la carga se verifica antes de sumar." },
            { paso: "Sumando (×5 + ×1) y simplificando: 3 Cl2 + 6 OH⁻ → 5 Cl⁻ + ClO3⁻ + 3 H2O. Agregando 6 K⁺ a ambos lados: 3 Cl2 + 6 KOH → 5 KCl + KClO3 + 3 H2O.", porque: "Multiplicar la reducción por 5 y la oxidación por 1 hace que se cancelen los 10 e⁻; los K⁺ espectadores se agregan para pasar a la forma molecular." }
          ],
          resultado: "Balanceo confirmado"
        },
        {
          parte: "b)",
          pasos: [
            { paso: "Cloro puro: 45 g × 0,85 = 38,25 g; n(Cl2) = 38,25 / 70,90 = 0,540 mol.", porque: "La pureza es la fracción en masa del cloro dentro de la muestra; n = m / M con M(Cl2) = 70,90 g/mol." },
            { paso: "KOH: 2,8 g por 100 mL → 14,0 g en 500 mL; n(KOH) = 14,0 / 56,11 = 0,2495 mol.", porque: "% m/v indica gramos de soluto cada 100 mL: 2,8 % m/v = 28 g/L, así que en 500 mL hay 14 g." },
            { paso: "Relación 6 KOH : 3 Cl2 → 0,540 mol de Cl2 pediría 1,08 mol de KOH; hay solo 0,2495 mol. El KOH es el reactivo limitante.", porque: "Por la estequiometría cada mol de Cl2 necesita 2 mol de KOH; comparando con lo disponible se ve cuál se agota primero." },
            { paso: "n(KClO3) teórico = 0,2495 / 6 = 0,04159 mol; m teórica = 0,04159 × 122,55 g/mol = 5,097 g.", porque: "La ecuación da 1 mol de KClO3 por cada 6 mol de KOH consumidos, y la masa sale de multiplicar por M(KClO3) = 122,55 g/mol." },
            { paso: "Con rendimiento 75 %: m = 0,75 × 5,097 g = 3,82 g.", porque: "El rendimiento es la fracción de la masa teórica que realmente se obtiene, así que se multiplica la masa teórica por 0,75." },
            { paso: "Suposición: las impurezas de ambos reactivos son inertes.", porque: "El enunciado no detalla las impurezas; se supone que no reaccionan ni consumen reactivo, y sólo se usa la masa pura." }
          ],
          resultado: "≈ 3,82 g de KClO3"
        },
        {
          parte: "c)",
          pasos: [
            { paso: "[KOH] = 28 g/L / 56,11 g/mol = 0,499 mol/L (KOH puro, impurezas inertes).", porque: "Concentración = masa por litro / masa molar; el 2,8 % m/v se pasa a 28 g/L, y se trata como KOH puro porque el enunciado dice que las impurezas son inertes." },
            { paso: "KOH es base fuerte: disociación total, [OH⁻] = 0,499 mol/L.", porque: "El KOH es base fuerte y se disocia por completo: 1 KOH aporta 1 OH⁻, así que [OH⁻] = [KOH]." },
            { paso: "pOH = −log(0,499) = 0,302 → pH = 14 − 0,302 = 13,70.", porque: "pOH = −log[OH⁻] y pH + pOH = 14 a 25 °C (temperatura estándar que se supone, el enunciado no la indica)." }
          ],
          resultado: "pH ≈ 13,70"
        },
        {
          parte: "d)",
          pasos: [
            { paso: "Cl2: Cl–Cl con 3 pares libres en cada Cl. Molécula apolar, gas a temperatura ambiente. Fuerzas intermoleculares: solo dispersión de London (débiles).", porque: "Es una molécula diatómica homonuclear, sin dipolo, así que sólo actúa la dispersión de London, que es débil; por eso es gas a temperatura ambiente." },
            { paso: "KCl: enlace iónico K⁺ Cl⁻ en red cristalina. Interacciones electrostáticas ion-ion muy intensas; sólido no volátil (ebulle cerca de 1400 °C).", porque: "Un sólido iónico tiene atracciones electrostáticas entre iones de carga opuesta, muy intensas; por eso su punto de ebullición es muy alto (valor tabulado ≈ 1420 °C, no dado en el enunciado)." },
            { paso: "Punto de ebullición creciente: Cl2 < KCl. Presión de vapor creciente: KCl < Cl2 (la del KCl es despreciable a temperatura ambiente).", porque: "Cuanto más intensas las fuerzas, mayor es el punto de ebullición y menor la presión de vapor, así que el orden se invierte entre ambas propiedades." }
          ],
          resultado: "Ebullición creciente: Cl2 < KCl. Presión de vapor creciente: KCl < Cl2"
        }
      ],
      errores_tipicos: [
        { error: "Balancear en medio ácido (con H⁺ y H2O) cuando el medio es básico por el KOH.", como_evitar: "Con KOH usá OH⁻ en las semirreacciones y verificá cargas antes de sumar." },
        { error: "Usar 2,8 como g/L, o no calcular el reactivo limitante y usar el cloro como limitante.", como_evitar: "2,8 % m/v = 28 g/L → 14 g en 500 mL; calculá el limitante antes del rendimiento." },
        { error: "Tratar el KOH como base débil en el pH, o aplicar el 75 % al revés.", como_evitar: "El KOH se disocia totalmente; el rendimiento multiplica la masa teórica (0,75 × teórica)." }
      ]
    },
    {
      num: 2,
      temas: ["termodinamica"],
      enunciado: "Se emplea 2-butanol (C4H10O) líquido con 92 % de pureza (en masa) como combustible para calentar y vaporizar agua. Las sustancias que acompañan al 2-butanol son inertes (no se queman) en las condiciones de trabajo. Este alcohol tiene un poder calorífico superior igual a 638 kcal/mol. Datos: cp agua(l) = 4,18 J/g·°C; cp agua(v) = 2,03 J/g·°C; ΔHvap = 40,626 kJ/mol. a) Escriba la ecuación termoquímica de la combustión completa. Calcule la masa de combustible impuro (en kg) necesaria para obtener 124 000 kJ. b) ¿Cuántos kg de agua se podrán calentar desde 50 °C hasta vapor a 110 °C, manteniendo la presión constante en 1 atm, si se hacen reaccionar 1,8 kg de 2-butanol puro y no hay pérdida de calor en la transferencia? c) ¿Qué volumen de aire en m³ (CNPT) requerirá la combustión completa de 14 kg del 2-butanol puro? Considere el aire compuesto por 21 % de O2 y 79 % de N2 V/V.",
      resolucion: [
        {
          parte: "a)",
          pasos: [
            { paso: "Ecuación: C4H10O(l) + 6 O2(g) → 4 CO2(g) + 5 H2O(l). Verificación: O 1 + 12 = 13 = 8 + 5.", porque: "La combustión completa de un alcohol da CO2 y agua; el balance de C (4) y H (10) fija los coeficientes y el O se verifica. El agua va líquida porque el dato es el poder calorífico superior." },
            { paso: "ΔHc = −638 kcal/mol × 4,184 kJ/kcal = −2669,4 kJ/mol.", porque: "Hay que pasar kcal a kJ (1 kcal = 4,184 kJ) para usar las mismas unidades que el calor pedido; el signo negativo indica combustión exotérmica." },
            { paso: "n(2-butanol) = 124 000 kJ / 2669,4 kJ/mol = 46,45 mol.", porque: "Moles = calor pedido / calor liberado por mol de combustible puro." },
            { paso: "m puro = 46,45 mol × 74,12 g/mol = 3443 g = 3,44 kg.", porque: "Masa = moles × M(C4H10O) = 74,12 g/mol." },
            { paso: "m impuro = 3,44 kg / 0,92 = 3,74 kg.", porque: "El 92 % en masa es la parte que aporta el alcohol; la masa de muestra es la del puro dividida por 0,92." }
          ],
          resultado: "≈ 3,74 kg de combustible impuro"
        },
        {
          parte: "b)",
          pasos: [
            { paso: "n = 1800 g / 74,12 g/mol = 24,29 mol → calor liberado = 24,29 × 2669,4 kJ = 64 830 kJ.", porque: "Con los 1,8 kg de alcohol puro se calcula el calor total disponible: moles por energía por mol." },
            { paso: "Calor por gramo de agua: (1) líquido 50 → 100 °C: 4,18 × 50 = 209 J/g; (2) vaporización a 100 °C: 40 626 J/mol / 18,015 g/mol = 2255 J/g; (3) vapor 100 → 110 °C: 2,03 × 10 = 20,3 J/g.", porque: "El agua pasa por tres etapas con su propio calor específico (líquido o vapor) y un cambio de fase a 100 °C; en cada etapa el calor es m·c·ΔT o m·ΔHvap." },
            { paso: "Total = 209 + 2255 + 20,3 = 2484 J/g = 2,484 kJ/g.", porque: "El calor total es la suma de los calores de cada etapa para llevar 1 g de agua de 50 °C a vapor a 110 °C." },
            { paso: "m(agua) = 64 830 kJ / 2,484 kJ/g = 26 099 g ≈ 26,1 kg.", porque: "La masa de agua es el calor disponible dividido por el calor necesario por gramo." },
            { paso: "Suposición: presión constante de 1 atm, sin pérdidas, el agua entra líquida a 50 °C.", porque: "El enunciado fija presión constante y ausencia de pérdidas, y la fase inicial líquida a 50 °C es la que da el calor de la primera etapa." }
          ],
          resultado: "≈ 26,1 kg de agua"
        },
        {
          parte: "c)",
          pasos: [
            { paso: "n(2-butanol) = 14 000 g / 74,12 g/mol = 188,9 mol.", porque: "Se pasan los 14 kg a gramos y se calculan moles con la masa molar." },
            { paso: "Ecuación: 1 mol de 2-butanol consume 6 mol de O2 → n(O2) = 6 × 188,9 = 1133 mol.", porque: "Por la ecuación balanceada del punto a), 1 mol de alcohol requiere 6 mol de O2." },
            { paso: "Aire: el O2 es el 21 % V/V → n(aire) = 1133 / 0,21 = 5397 mol.", porque: "En una mezcla gaseosa la fracción volumen equivale a la fracción molar, así que los moles de aire son los de O2 dividido 0,21." },
            { paso: "V(CNPT) = 5397 mol × 22,4 L/mol = 120 893 L = 120,9 m³.", porque: "En CNPT (0 °C, 1 atm) 1 mol de gas ideal ocupa 22,4 L; el volumen de aire es moles por volumen molar." }
          ],
          resultado: "≈ 120,9 m³ de aire (CNPT)"
        }
      ],
      errores_tipicos: [
        { error: "Olvidar la pureza del 92 % o multiplicarla en lugar de dividir al pasar a combustible impuro.", como_evitar: "m impuro = m puro / 0,92." },
        { error: "Usar 638 kcal como si fuera kJ, sin multiplicar por 4,184.", como_evitar: "Convertí a kJ antes de dividir por la energía: 638 kcal/mol = 2669,4 kJ/mol." },
        { error: "En b) olvidar el paso de vaporización (el más grande) o no calentar el vapor de 100 a 110 °C; y en c) usar solo el O2 como volumen de aire.", como_evitar: "Sumá las 3 etapas del agua y dividí los moles de O2 por 0,21 para obtener los de aire." }
      ]
    },
    {
      num: 3,
      temas: ["equilibrio", "gases"],
      enunciado: "Si se introduce 1 mol de N2O4 en un reactor de 10 L a 56 °C, se alcanza el equilibrio cuando el 30 % de la sustancia se descompone según: N2O4(g) ⇌ 2 NO2(g). a) Calcule las concentraciones de los gases en el equilibrio, indicando todas las consideraciones que realiza para los cálculos. b) Calcule los valores correspondientes de Kc y Kp y deduzca la relación entre ellos. c) i) Indique cómo se desplazaría el equilibrio de la situación anterior si se disminuyera el volumen del reactor. ii) Si al aumentar la temperatura aumenta la presión parcial del dióxido de nitrógeno, indique si la reacción es endotérmica o exotérmica. En ambos casos justifique su respuesta.",
      resolucion: [
        {
          parte: "a)",
          pasos: [
            { paso: "Se descompone 30 % de 1 mol: 0,30 mol de N2O4.", porque: "El porcentaje de descomposición se aplica al mol inicial de N2O4." },
            { paso: "Equilibrio: N2O4 = 1 − 0,30 = 0,70 mol; NO2 = 2 × 0,30 = 0,60 mol.", porque: "Por la estequiometría 1:2, cada mol de N2O4 que se descompone forma 2 mol de NO2." },
            { paso: "[N2O4] = 0,70 / 10 = 0,070 mol/L; [NO2] = 0,60 / 10 = 0,060 mol/L.", porque: "Concentración = moles / volumen (10 L)." },
            { paso: "Consideraciones: volumen constante (10 L), gases ideales, sistema cerrado, sin otros equilibrios.", porque: "Son las hipótesis necesarias para tratar el sistema con volumen fijo, gas ideal y sin especies adicionales; el enunciado pide explicitarlas." }
          ],
          resultado: "[N2O4] = 0,070 mol/L; [NO2] = 0,060 mol/L"
        },
        {
          parte: "b)",
          pasos: [
            { paso: "Kc = [NO2]² / [N2O4] = (0,060)² / 0,070 = 0,0514 mol/L.", porque: "Los coeficientes de la ecuación son los exponentes: el NO2 va al cuadrado y el N2O4 a la primera." },
            { paso: "T = 56 + 273,15 = 329,15 K; Δn(gas) = 2 − 1 = +1.", porque: "Para Kp se usa la temperatura en kelvin, y Δn es la diferencia entre moles de gas de productos y reactivos." },
            { paso: "Kp = Kc·(RT)^Δn = Kc·R·T = 0,0514 × (0,08206 × 329,15) = 0,0514 × 27,01 = 1,39 atm.", porque: "Para cada gas ideal p = c·R·T, y con Δn = +1 el factor de conversión es RT." },
            { paso: "Chequeo: n(total) = 1,3 mol → P = 1,3 × 27,01 / 10 = 3,51 atm; x(NO2) = 0,4615 → P(NO2) = 1,62 atm; P(N2O4) = 1,89 atm; Kp = 1,62² / 1,89 = 1,39 atm.", porque: "Se recalcula Kp con presiones parciales (p_i = x_i·P_total) para verificar que da el mismo valor." }
          ],
          resultado: "Kc ≈ 5,1 × 10⁻² mol/L; Kp ≈ 1,39 atm; relación Kp = Kc·R·T"
        },
        {
          parte: "c)(i)",
          pasos: [
            { paso: "Disminuir el volumen aumenta la presión total.", porque: "A temperatura constante, P = nRT/V: si el volumen baja, la presión sube." },
            { paso: "Por Le Chatelier el equilibrio se desplaza hacia el lado con menos moles de gas: 1 mol de N2O4 frente a 2 mol de NO2.", porque: "Al aumentar la presión el sistema responde disminuyendo el número de moles gaseosos, lo que favorece al lado con menos moles (el N2O4)." }
          ],
          resultado: "Se desplaza hacia la izquierda (formación de N2O4)"
        },
        {
          parte: "c)(ii)",
          pasos: [
            { paso: "Si al subir T aumenta p(NO2), el equilibrio se desplaza hacia la derecha al calentar.", porque: "El enunciado dice que la presión parcial de NO2 sube con la temperatura, es decir se forma más NO2: el equilibrio se corre a la derecha." },
            { paso: "Por Le Chatelier, al aumentar T el equilibrio se desplaza en el sentido que absorbe calor: el directo es endotérmico (ΔH > 0).", porque: "Un aumento de temperatura favorece el sentido que consume calor; como el sentido directo se favorece al calentar, consume calor y ΔH > 0." }
          ],
          resultado: "Endotérmica (ΔH > 0)"
        }
      ],
      errores_tipicos: [
        { error: "Poner 0,3 mol de NO2 olvidando el coeficiente 2 de la reacción.", como_evitar: "Por cada mol de N2O4 que se descompone aparecen 2 mol de NO2." },
        { error: "Usar Kp = Kc sin el factor (RT)^Δn, o dejar T en °C.", como_evitar: "Con Δn = +1, Kp = Kc·R·T con T en K (56 + 273,15 = 329,15 K)." },
        { error: "Invertir el efecto de la presión: pensar que al reducir V se favorece el lado con más moles gaseosos.", como_evitar: "Menor volumen = mayor presión: el equilibrio va al lado con menos moles de gas." }
      ]
    }
  ]
});

// Parcial 31/10/2025 (encabezado: 'Parcial-31/10/25 18:00 hs').
// Grilla de corrección visible: Ej1 a 15, b 5, c 10, d 10 (40 pts); Ej2 a 10, b 10, c 10 (30 pts); Ej3 a 10, b 10, c 10 (30 pts). Nota final sin completar en la foto.
// Ojo: en el Ej2 el dato impreso dice ΔHfusión = 293 kJ/mol, pero hay una anotación manuscrita que dice '= 6,01 kJ/mol'. Se usó 6,01 kJ/mol (valor real del agua). Si el profe usa 293, el resultado cambia mucho.
// Ojo: en el Ej3 el dato impreso dice Ka HClO2 = 3,0×10⁻⁹, pero al lado hay una anotación manuscrita '= 1,15×10⁻²' (que parece el valor real de esa Ka). Se usó el impreso; con 1,15×10⁻² el orden de acidez cambia a HClO2 > HF > C6H5COOH > HCN.
window.PARCIALES.push({
  id: "parcial-2025-10-31",
  tipo: "parcial",
  fecha: "31/10/2025",
  fuente: "parciales/IMG-20260331-WA0034.jpg",
  ejercicios: [
    {
      num: 1,
      temas: ["reacciones", "soluciones", "uniones", "liquidos"],
      enunciado: "a) Para la reacción química: MnO2(s) + NaCl(ac) + H2SO4(ac) → MnSO4(ac) + Cl2(g) + Na2SO4(ac) + H2O(l). Realizar el balanceo utilizando el método de ión-electrón. Indicar nombres de los reactivos y productos e identificar cuál es el agente oxidante y el agente reductor. b) Mencionar el tipo de unión química en: (i) NaCl, (ii) H2O, (iii) Fe. c) Mencionar el tipo de fuerza intermolecular dominante y la geometría molecular para las siguientes sustancias: i) CH3Cl, ii) CH3CH2OCH2CH3, iii) NH3. d) Se desea preparar 500 g de solución al 10 % m/m, a partir de una solución de ácido clorhídrico al 35 % m/m y densidad 1,18 g/mL. ¿Qué volumen de la solución concentrada debe tomarse para realizar la dilución?",
      resolucion: [
        {
          parte: "a)",
          pasos: [
            { paso: "Medio ácido (H2SO4). Reducción: MnO2 + 4 H⁺ + 2 e⁻ → Mn²⁺ + 2 H2O.", porque: "El H2SO4 aporta H⁺, así que se balancea en medio ácido: el O se ajusta con H2O y el H con H⁺." },
            { paso: "Oxidación: 2 Cl⁻ → Cl2 + 2 e⁻.", porque: "El Cl⁻ (−1) pasa a Cl2 (0) cediendo 1 e⁻ por átomo, es decir 2 e⁻ en total." },
            { paso: "Suma: MnO2 + 4 H⁺ + 2 Cl⁻ → Mn²⁺ + Cl2 + 2 H2O.", porque: "Ambas semirreacciones intercambian 2 e⁻, así que se suman directamente y los electrones se cancelan." },
            { paso: "Pasaje a molecular con los iones espectadores (Na⁺, SO4²⁻): MnO2(s) + 2 NaCl(ac) + 2 H2SO4(ac) → MnSO4(ac) + Cl2(g) + Na2SO4(ac) + 2 H2O(l). Chequeo: O 10 = 10, H 4 = 4, S 2 = 2, Na 2 = 2, Cl 2 = 2.", porque: "Se agregan los iones que no cambian para completar las sales de la ecuación molecular; el chequeo de átomos confirma el balance." },
            { paso: "Nombres: MnO2 dióxido de manganeso; NaCl cloruro de sodio; H2SO4 ácido sulfúrico; MnSO4 sulfato de manganeso(II); Cl2 cloro; Na2SO4 sulfato de sodio; H2O agua.", porque: "Son los nombres usuales de cada compuesto; el manganeso en MnSO4 tiene número de oxidación +2, por eso se indica (II)." },
            { paso: "Oxidante: MnO2 (Mn pasa de +4 a +2, se reduce). Reductor: NaCl (Cl⁻ pasa de −1 a 0, se oxida).", porque: "El oxidante es la especie que se reduce (gana electrones) y el reductor la que se oxida (los pierde)." }
          ],
          resultado: "MnO2(s) + 2 NaCl(ac) + 2 H2SO4(ac) → MnSO4(ac) + Cl2(g) + Na2SO4(ac) + 2 H2O(l); oxidante MnO2; reductor NaCl"
        },
        {
          parte: "b)",
          pasos: [
            { paso: "NaCl: unión iónica (Na⁺ y Cl⁻).", porque: "Un metal con un no metal de gran diferencia de electronegatividad forma enlace iónico por transferencia de electrones." },
            { paso: "H2O: unión covalente polar (O–H, diferencia de electronegatividad ≈ 1,2).", porque: "Dos no metales comparten electrones, y la diferencia de electronegatividad (O 3,44 − H 2,20 ≈ 1,2) hace que el enlace sea polar." },
            { paso: "Fe: unión metálica (electrones de valencia deslocalizados).", porque: "Entre átomos de metal los electrones de valencia se deslocalizan formando un mar de electrones compartido por toda la red." }
          ],
          resultado: "(i) iónica; (ii) covalente polar; (iii) metálica"
        },
        {
          parte: "c)",
          pasos: [
            { paso: "i) CH3Cl: molécula polar (C–Cl polar, no simétrica); tetraédrica en torno al C. Fuerza dominante: dipolo-dipolo.", porque: "El enlace C–Cl es polar y la molécula no es simétrica, así que tiene dipolo neto; no hay H unido a F, O o N, por eso no hay puentes de hidrógeno." },
            { paso: "ii) CH3CH2OCH2CH3 (éter dietílico): angular en torno al O (C–O–C), con momento dipolar pequeño. Fuerzas: dispersión de London y dipolo-dipolo; dominante: dispersión (dudoso, depende del criterio de la cátedra).", porque: "El O con geometría angular genera un dipolo, pero pequeño; en una molécula de este tamaño sin H unido a O, N o F suele dominar la dispersión. Es un criterio dudoso porque el enunciado no fija cuál usar." },
            { paso: "iii) NH3: piramidal trigonal, polar. Fuerza dominante: puentes de hidrógeno.", porque: "El H unido a N (muy electronegativo) permite puentes de hidrógeno, y el par libre del N hace que la molécula piramidal sea polar." }
          ],
          resultado: "i) dipolo-dipolo, tetraédrica; ii) London (dudoso), angular; iii) puentes de H, piramidal"
        },
        {
          parte: "d)",
          pasos: [
            { paso: "Masa de HCl necesaria: 500 g × 0,10 = 50 g.", porque: "10 % m/m significa 10 g de soluto por cada 100 g de solución, es decir el 10 % de 500 g." },
            { paso: "Masa de solución concentrada: 50 g / 0,35 = 142,9 g.", porque: "El 35 % m/m indica 0,35 g de soluto por cada gramo de solución concentrada, así que la masa de solución es el soluto dividido 0,35." },
            { paso: "Volumen: 142,9 g / 1,18 g/mL = 121,1 mL.", porque: "La densidad convierte masa en volumen (V = m / d), y el enunciado pide el volumen a tomar." },
            { paso: "Suposición: el dato es % m/m, por eso se trabaja en masas y la densidad pasa a volumen.", porque: "Con % m/m la base es la masa; la densidad sólo sirve para pasar a volumen al final." }
          ],
          resultado: "≈ 121 mL de HCl 35 % m/m"
        }
      ],
      errores_tipicos: [
        { error: "Invertir oxidante y reductor (decir que el oxidante es el que se oxida).", como_evitar: "El oxidante gana electrones (el Mn baja de +4 a +2); el reductor los pierde." },
        { error: "Balancear en medio ácido sin verificar cargas, o no incluir los H2O en el ajuste de H y O.", como_evitar: "Ajustá O con H2O, H con H⁺, y chequeá la carga antes de sumar las semirreacciones." },
        { error: "En d) usar la densidad al revés (V = d·m) o tomar la masa de la solución como la de soluto.", como_evitar: "m(soluto) = 50 g; m(solución) = 50 / 0,35; V = m / d." }
      ]
    },
    {
      num: 2,
      temas: ["termodinamica"],
      enunciado: "Una muestra de 13 g que contiene acetato de etilo líquido (C4H8O2) con un 87 % de pureza en masa libera, luego de combustionar en forma completa, 548 kcal/mol de acetato. Esta muestra se emplea para calentar hielo desde −14 °C hasta el estado vapor a 110 °C, a presión atmosférica. Datos del agua: ΔHfusión = 293 kJ/mol (ver comentario); cp agua(s) = 2,09 J/g·°C; cp agua(l) = 4,18 J/g·°C; cp agua(g) = 2,03 J/g·°C; ΔHvap = 40,626 kJ/mol. a) ¿Cuántos gramos de hielo a −14 °C se convertirán en vapor a 110 °C cuando se combustiona esta muestra a presión constante? b) Escriba la ecuación termoquímica de la combustión. ¿Qué masa en gramos de muestra de acetato de etilo se consumirá si se liberan 86 kJ? c) Determine el poder calorífico superior (PCS) y el poder calorífico inferior (PCI) del acetato de etilo, en kcal/mol.",
      resolucion: [
        {
          parte: "a)",
          pasos: [
            { paso: "Acetato puro: 13 g × 0,87 = 11,31 g; M(C4H8O2) = 88,11 g/mol → n = 0,1284 mol.", porque: "La pureza en masa indica qué fracción de la muestra es acetato; n = m / M con M(C4H8O2) = 88,11 g/mol." },
            { paso: "Calor liberado: 0,1284 mol × 548 kcal/mol = 70,34 kcal × 4,184 kJ/kcal = 294,3 kJ.", porque: "El calor es moles por energía por mol; se pasa kcal a kJ para usar la misma unidad que el calor que absorbe el agua." },
            { paso: "Calor por gramo de hielo: (1) hielo −14 → 0 °C: 2,09 × 14 = 29,3 J/g; (2) fusión: 6010 J/mol / 18,015 g/mol = 333,6 J/g; (3) agua 0 → 100 °C: 4,18 × 100 = 418 J/g; (4) vaporización: 40 626 J/mol / 18,015 g/mol = 2255 J/g; (5) vapor 100 → 110 °C: 2,03 × 10 = 20,3 J/g.", porque: "Cada etapa tiene su propio calor (cp del hielo, del agua líquida o del vapor, o ΔH de cambio de fase); se usa ΔHfusión = 6,01 kJ/mol y no los 293 kJ/mol impresos porque ése es el valor real del agua (corrección manuscrita del examen) y 293 kJ/mol sería casi 50 veces mayor." },
            { paso: "Total = 3057 J/g = 3,057 kJ/g.", porque: "El calor total por gramo es la suma de las cinco etapas, porque el proceso pasa por todas ellas en secuencia." },
            { paso: "m(hielo) = 294,3 kJ / 3,057 kJ/g = 96,3 g.", porque: "La masa de hielo es el calor disponible dividido por el calor necesario por gramo." },
            { paso: "Suposición: el calor de combustión se transfiere todo al hielo, sin pérdidas; la presión es 1 atm.", porque: "El enunciado no menciona pérdidas, así que se supone que todo el calor llega al hielo; 1 atm es la presión a la que ocurren los cambios de fase a 100 °C y 0 °C." }
          ],
          resultado: "≈ 96,3 g de hielo"
        },
        {
          parte: "b)",
          pasos: [
            { paso: "Ecuación: C4H8O2(l) + 5 O2(g) → 4 CO2(g) + 4 H2O(l). Verificación: O 2 + 10 = 12 = 8 + 4.", porque: "La combustión completa de un éster produce CO2 y agua; el balance de C (4) y H (8) da los coeficientes y el O se verifica." },
            { paso: "ΔH = −548 kcal/mol × 4,184 kJ/kcal = −2292,8 kJ/mol.", porque: "Convierte kcal a kJ (1 kcal = 4,184 kJ); el signo negativo indica que la combustión es exotérmica." },
            { paso: "n = 86 kJ / 2292,8 kJ/mol = 0,03751 mol; m puro = 0,03751 × 88,11 = 3,30 g.", porque: "Moles = energía a obtener / energía por mol, y la masa pura es moles por M." },
            { paso: "m de muestra = 3,30 g / 0,87 = 3,80 g.", porque: "La muestra tiene 87 % de acetato, así que la masa total es la pura dividida por 0,87." }
          ],
          resultado: "3,80 g de muestra (3,30 g de acetato puro)"
        },
        {
          parte: "c)",
          pasos: [
            { paso: "PCS = calor de combustión con H2O líquida = 548 kcal/mol (suposición: el dato es ese).", porque: "El PCS corresponde al calor de combustión con el agua condensada en los productos; se asume que el dato de 548 kcal/mol es ese valor." },
            { paso: "PCI = PCS − n(H2O)·ΔHvap, con el agua en vapor. ΔHvap = 40,626 kJ/mol = 9,71 kcal/mol; n(H2O) = 4 mol.", porque: "La ecuación de b) da 4 mol de H2O por mol de acetato, y el PCI descuenta la energía de vaporizar esa agua, que el PCS incluye como líquida." },
            { paso: "PCI = 548 − 4 × 9,71 = 548 − 38,84 = 509,2 kcal/mol.", porque: "Se resta la energía de vaporización de las 4 mol de agua formadas, en las mismas unidades (kcal)." }
          ],
          resultado: "PCS ≈ 548 kcal/mol; PCI ≈ 509 kcal/mol"
        }
      ],
      errores_tipicos: [
        { error: "No aplicar la pureza del 87 % a la muestra o aplicarla al revés (multiplicar en lugar de dividir).", como_evitar: "Acetato puro = 0,87 × muestra; muestra = puro / 0,87." },
        { error: "Usar cp del agua líquida para el hielo (o mezclar los tres cp).", como_evitar: "Hielo 2,09 (s), agua 4,18 (l), vapor 2,03 (g); cada etapa usa el suyo." },
        { error: "Sumar en vez de restar el calor de vaporización en el PCI, o no multiplicar por los 4 mol de H2O.", como_evitar: "PCI = PCS − n(H2O)·ΔHvap, con n = 4 y en las mismas unidades (kcal)." }
      ]
    },
    {
      num: 3,
      temas: ["acidobase", "equilibrio", "gases"],
      enunciado: "Considerando los valores de Ka de los ácidos HCN, C6H5COOH, HClO2 y HF, responda: a) ¿Cuál es el orden de mayor a menor acidez en agua? Calcule el valor de pH para una disolución acuosa de concentración 1,5 M de ácido HCN. Utilice balances de masa y carga. b) Exprese la Ka para el ácido benzoico (C6H5COOH) y halle el grado de disociación, en porcentaje, para una concentración inicial 0,12 M. c) (i) Escriba el balance de presiones que se utiliza para determinar la masa de magnesio del TP2. (ii) En dicha experiencia, ¿para qué se utiliza una regla graduada? ¿Y la densidad del mercurio? (iii) Escriba la relación entre la altura de Hg y la altura del agua. Datos: Ka HCN = 6,2 × 10⁻¹⁰; Ka C6H5COOH = 6,3 × 10⁻⁵; Ka HClO2 = 3,0 × 10⁻⁹ (ver comentario); Ka HF = 6,8 × 10⁻⁴. R = 8,314 J/mol·K = 0,08206 L·atm/mol·K = 1,987 cal/mol·K.",
      resolucion: [
        {
          parte: "a) orden",
          pasos: [
            { paso: "Según los Ka impresos, de mayor a menor acidez: HF (6,8 × 10⁻⁴) > C6H5COOH (6,3 × 10⁻⁵) > HClO2 (3,0 × 10⁻⁹) > HCN (6,2 × 10⁻¹⁰).", porque: "Un Ka más grande indica un ácido más disociado, es decir más fuerte; se ordena usando los valores impresos (con la corrección manuscrita 1,15 × 10⁻² para HClO2 el orden cambia a HClO2 > HF > C6H5COOH > HCN)." }
          ],
          resultado: "HF > C6H5COOH > HClO2 > HCN"
        },
        {
          parte: "a) pH",
          pasos: [
            { paso: "Balance de masa: [HCN] + [CN⁻] = 1,5 M.", porque: "Toda la concentración analítica de HCN se reparte entre la forma protonada y la forma disociada." },
            { paso: "Balance de carga: [H⁺] = [CN⁻] + [OH⁻] ≈ [CN⁻] (el OH⁻ es despreciable en medio ácido).", porque: "La neutralidad eléctrica iguala cargas positivas (H⁺) y negativas (CN⁻, OH⁻); el OH⁻ se descarta porque la solución es ácida." },
            { paso: "Ka = [H⁺]² / (1,5 − [H⁺]) ≈ [H⁺]² / 1,5 → [H⁺] = √(6,2 × 10⁻¹⁰ × 1,5) = 3,05 × 10⁻⁵ mol/L.", porque: "Ka = [H⁺][CN⁻]/[HCN] con [CN⁻] = [H⁺] y [HCN] = C − [H⁺]; como el ácido está poco disociado, C − [H⁺] ≈ C." },
            { paso: "pH = −log(3,05 × 10⁻⁵) = 4,52. Chequeo: [H⁺] ≪ 1,5, la aproximación vale.", porque: "pH = −log[H⁺]; la aproximación C − [H⁺] ≈ C es válida porque [H⁺] es muy menor que C (menos del 5 % de C)." }
          ],
          resultado: "pH ≈ 4,52"
        },
        {
          parte: "b)",
          pasos: [
            { paso: "Ka = [C6H5COO⁻][H3O⁺] / [C6H5COOH] = 6,3 × 10⁻⁵ (dato).", porque: "Es la expresión de Ka del ácido benzoico con sus especies en equilibrio; el valor se toma del enunciado." },
            { paso: "Con C = 0,12 M: Ka = Cα² / (1 − α) → 0,12 α² + 6,3 × 10⁻⁵ α − 6,3 × 10⁻⁵ = 0.", porque: "Como el denominador tiene (1 − α), sin aproximar la Ka en función de α es una ecuación cuadrática." },
            { paso: "α = 5,436 × 10⁻³ / 0,24 = 0,02265 → 2,27 %.", porque: "Es la raíz positiva de la cuadrática (fórmula resolvente con a = 0,12 y b = 6,3 × 10⁻⁵), y el grado de disociación en porcentaje es α × 100." },
            { paso: "Aproximación α ≈ √(Ka/C) = √(5,25 × 10⁻⁴) = 0,0229 (2,29 %), coincide.", porque: "Si α es chico, 1 − α ≈ 1 y α ≈ √(Ka/C); sirve como verificación del resultado exacto." }
          ],
          resultado: "α ≈ 2,27 % (≈ 2,3 %)"
        },
        {
          parte: "c)(i)",
          pasos: [
            { paso: "Balance de presiones en el nivel de referencia: P_atm = P(H2) + P(vapor de agua a T) ± presión de la columna líquida (ρ·g·h).", porque: "En el nivel de referencia la presión del gas (H2 más vapor de agua, por Dalton) más la de la columna de líquido iguala la presión atmosférica." },
            { paso: "Suposición: el esquema del TP2 no está en la foto, por eso el signo de la columna no se puede fijar con seguridad.", porque: "El signo de la columna depende de la disposición del montaje, que no se ve en la foto, así que queda como dato a confirmar." }
          ],
          resultado: "P_atm = P(H2) + P(H2O vapor) ± ρ·g·h (forma general, dudosa en el signo)"
        },
        {
          parte: "c)(ii)",
          pasos: [
            { paso: "La regla graduada mide las alturas (h) de las columnas de líquido.", porque: "Las alturas de las columnas son las que entran en la presión hidrostática P = ρ·g·h." },
            { paso: "La densidad del mercurio (13,6 g/mL) permite convertir una altura de Hg en presión (P = ρ·g·h) y compararla con la del agua.", porque: "Con ρ(Hg) = 13,6 g/mL (valor tabulado, no dado en el enunciado) la presión de la columna de mercurio se puede comparar con la del agua." }
          ],
          resultado: "Regla: medir alturas; densidad del Hg: pasar altura a presión"
        },
        {
          parte: "c)(iii)",
          pasos: [
            { paso: "Igualdad de presiones hidrostáticas: ρ(Hg)·h(Hg) = ρ(agua)·h(agua).", porque: "Ambas columnas equilibran la misma presión en el nivel de referencia, y la presión hidrostática es ρ·g·h (el g se cancela)." },
            { paso: "h(agua) = (ρ(Hg) / ρ(agua)) · h(Hg) = 13,6 · h(Hg).", porque: "Se despeja h(agua) de la igualdad; con ρ(agua) = 1 g/mL la relación de densidades es 13,6." }
          ],
          resultado: "h(agua) = 13,6 · h(Hg)"
        }
      ],
      errores_tipicos: [
        { error: "Tratar el HCN como ácido fuerte y calcular pH = −log(1,5).", como_evitar: "Es un ácido débil (Ka chica): [H⁺] = √(Ka·C) con balances de masa y carga." },
        { error: "Confundir Ka con pKa o con el grado de disociación al reportar el resultado.", como_evitar: "pKa = −log Ka; α es un porcentaje de disociación, no una constante. Para el orden de acidez se compara Ka (más grande = más ácido)." },
        { error: "Olvidar la densidad del mercurio en la relación de alturas (dejar h(agua) = h(Hg)).", como_evitar: "La columna de agua es 13,6 veces más alta que la de Hg para la misma presión." }
      ]
    }
  ]
});
