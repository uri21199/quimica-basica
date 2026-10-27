window.CONSTANTES = [
  { nombre: "R (gases)", valor: "8,31 J/mol·K = 0,0821 L·atm/mol·K = 1,99 cal/mol·K", tex: String.raw`8{,}31\ \text{J/(mol·K)} = 0{,}0821\ \text{L·atm/(mol·K)} = 1{,}99\ \text{cal/(mol·K)}`, nota: "Usá la que corresponda a la unidad de energía del ejercicio. Los parciales dan estos valores." },
  { nombre: "Presión", valor: "1 atm = 760 mmHg = 101325 Pa = 1,01325 bar", tex: String.raw`1\ \text{atm} = 760\ \text{mmHg} = 101\,325\ \text{Pa} = 1{,}01325\ \text{bar}`, nota: "1 MPa = 9,869 atm (dato de los parciales)." },
  { nombre: "CNPT", valor: "0 °C (273,15 K) y 1 atm; 1 mol de gas ideal ocupa 22,4 L", tex: String.raw`0\text{°C}\ (273{,}15\ \text{K}) \text{ y } 1\ \text{atm};\ 1\ \text{mol de gas ideal ocupa } 22{,}4\ \text{L}`, nota: "Si el enunciado dice CNPT, usá Vm = 22,4 L/mol." },
  { nombre: "Temperatura", valor: "T(K) = t(°C) + 273,15", tex: String.raw`T\,(\text{K}) = t\,(\text{°C}) + 273{,}15`, nota: "Siempre en K para gases y termodinámica." },
  { nombre: "Agua", valor: "d = 1 g/mL; Cp(l) = 4,18 J/g·K; ΔHfus = 6,02 kJ/mol; ΔHvap = 40,6 kJ/mol", tex: String.raw`d = 1\ \text{g/mL};\ c_p(\text{l}) = 4{,}18\ \text{J/(g·K)};\ \Delta H_{\text{fus}} = 6{,}02\ \text{kJ/mol};\ \Delta H_{\text{vap}} = 40{,}6\ \text{kJ/mol}`, nota: "Valores típicos. Si el enunciado da otros, usá los del enunciado." },
  { nombre: "Número de Avogadro", valor: "6,022·10²³ partículas/mol", tex: String.raw`6{,}022 \times 10^{23}\ \text{partículas/mol}`, nota: "" }
];

window.FORMULAS = [
  {
    grupo: "Cantidad de materia y concentración",
    items: [
      { nombre: "Moles", tex: "n = \\dfrac{m}{M}" },
      { nombre: "Número de partículas", tex: "N = n \\cdot N_A" },
      { nombre: "Porcentaje masa/masa", tex: "\\%\\,m/m = \\dfrac{m_{\\text{soluto}}}{m_{\\text{solución}}} \\cdot 100" },
      { nombre: "Porcentaje masa/volumen", tex: "\\%\\,m/V = \\dfrac{g_{\\text{soluto}}}{mL_{\\text{solución}}} \\cdot 100" },
      { nombre: "Densidad", tex: "d = \\dfrac{m}{V}" },
      { nombre: "Molaridad", tex: "M = \\dfrac{n_{\\text{soluto}}}{L_{\\text{solución}}}" },
      { nombre: "Molalidad", tex: "m = \\dfrac{n_{\\text{soluto}}}{kg_{\\text{solvente}}}" },
      { nombre: "Dilución", tex: "C_1 \\cdot V_1 = C_2 \\cdot V_2" }
    ]
  },
  {
    grupo: "Gases",
    items: [
      { nombre: "Ley de gases ideales", tex: "P \\cdot V = n \\cdot R \\cdot T" },
      { nombre: "Presiones parciales (Dalton)", tex: "P_i = x_i \\cdot P_{\\text{total}}, \\quad x_i = \\dfrac{n_i}{n_{\\text{total}}}" },
      { nombre: "Combinada", tex: "\\dfrac{P_1 V_1}{T_1} = \\dfrac{P_2 V_2}{T_2}" },
      { nombre: "Densidad de un gas", tex: "d = \\dfrac{P \\cdot M}{R \\cdot T}" }
    ]
  },
  {
    grupo: "Equilibrio químico",
    items: [
      { nombre: "Constante en concentraciones", tex: "aA + bB \\rightleftharpoons cC + dD \\;\\Rightarrow\\; K_c = \\dfrac{[C]^c [D]^d}{[A]^a [B]^b}" },
      { nombre: "Constante en presiones", tex: "K_p = K_c \\cdot (R T)^{\\Delta n}, \\quad \\Delta n = (c+d) - (a+b)" },
      { nombre: "Cociente de reacción", text: "Q se calcula igual que K con concentraciones iniciales. Q < K avanza hacia productos; Q > K hacia reactivos." }
    ]
  },
  {
    grupo: "Ácido-base",
    items: [
      { nombre: "pH y pOH", tex: "pH = -\\log[H^+], \\quad pOH = -\\log[OH^-], \\quad pH + pOH = 14 \\; (25\\text{ °C})" },
      { nombre: "Ácido fuerte", tex: "[H^+] = C_a \\quad (\\text{si } C_a > 10^{-6}\\text{ M})" },
      { nombre: "Base fuerte", tex: "[OH^-] = C_b" },
      { nombre: "Ácido débil (aprox.)", tex: "K_a = \\dfrac{[H^+]^2}{C_a - [H^+]} \\approx \\dfrac{[H^+]^2}{C_a} \\;\\Rightarrow\\; [H^+] = \\sqrt{K_a C_a}" },
      { nombre: "Base débil (aprox.)", tex: "K_b = \\dfrac{[OH^-]^2}{C_b - [OH^-]} \\;\\Rightarrow\\; [OH^-] = \\sqrt{K_b C_b}" },
      { nombre: "Relación Ka-Kb", tex: "K_a \\cdot K_b = K_w = 10^{-14}" },
      { nombre: "Grado de disociación", tex: "\\alpha = \\dfrac{[H^+]}{C_a}" },
      { nombre: "Ka y pKa", tex: "pK_a = -\\log K_a" }
    ]
  },
  {
    grupo: "Termodinámica y termoquímica",
    items: [
      { nombre: "Primer principio", tex: "\\Delta U = q + w" },
      { nombre: "Trabajo a presión constante", tex: "w = -P \\cdot \\Delta V = -\\Delta n \\cdot R \\cdot T \\;\\;(\\text{solo gases})" },
      { nombre: "Entalpía a presión constante", tex: "\\Delta H = \\Delta U + P \\cdot \\Delta V = \\Delta U + \\Delta n \\cdot R \\cdot T" },
      { nombre: "Calor sensible", tex: "q = m \\cdot c_e \\cdot \\Delta T" },
      { nombre: "Calor latente", tex: "q = m \\cdot \\Delta H_{\\text{cambio de estado}}" },
      { nombre: "Ley de Hess", tex: "\\Delta H_{\\text{reacción}} = \\sum \\Delta H_{\\text{pasos}}" },
      { nombre: "ΔH de reacción con formación", tex: "\\Delta H^\\circ_r = \\sum n \\, \\Delta H^\\circ_f(\\text{productos}) - \\sum n \\, \\Delta H^\\circ_f(\\text{reactivos})" },
      { nombre: "ΔH de combustión", tex: "\\Delta H^\\circ_c = \\sum n \\, \\Delta H^\\circ_f(\\text{productos}) - \\sum n \\, \\Delta H^\\circ_f(\\text{reactivos})", nota: "CO₂ y H₂O líquida como productos." },
      { nombre: "Calorimetría", tex: "q_{\\text{sistema}} = -q_{\\text{entorno}}, \\quad q = m \\cdot c \\cdot \\Delta T" }
    ]
  },
  {
    grupo: "Estequiometría y rendimiento",
    items: [
      { nombre: "Rendimiento", tex: "\\text{Rendimiento (\\%)} = \\dfrac{\\text{producto real}}{\\text{producto teórico}} \\cdot 100" },
      { nombre: "Pureza", tex: "m_{\\text{pura}} = m_{\\text{muestra}} \\cdot \\dfrac{\\text{pureza}}{100}" },
      { nombre: "Reactivo limitante", text: "El que da menos producto si se calcula desde cada reactivo con la relación molar." },
      { nombre: "Balanceo por ion-electrón", text: "Separar semirreacciones, balancear O con H₂O, H con H⁺ (medio ácido), cargas con e⁻, igualar e⁻ y sumar." }
    ]
  },
  {
    grupo: "Fuerzas intermoleculares y geometría",
    items: [
      { nombre: "Orden de intensidad", text: "Dispersión de London < dipolo-dipolo < puente de hidrógeno (a igual masa molar y forma)." },
      { nombre: "Molécula polar", text: "Tiene momento dipolar neto: enlaces polares y geometría asimétrica (los dipolos no se cancelan)." },
      { nombre: "TREPEV", text: "Los pares de electrones (enlazantes y no enlazantes) se ubican lo más lejos posible; los no enlazantes repelen más." }
    ]
  }
];
