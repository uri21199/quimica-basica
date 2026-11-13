// Versión LaTeX de las fórmulas de temas.js. Clave: "<id del tema>#<índice en formulas>".
// Si falta una clave, la web muestra la fórmula original en texto plano.
window.FORMULAS_TEX = {
  "repaso#0": String.raw`N = b \times 10^{n} \quad \text{con } 1 \le b < 10`,
  "repaso#1": String.raw`\log(a\cdot b) = \log a + \log b \;;\; \log\left(\dfrac{a}{b}\right) = \log a - \log b \;;\; \log(a^b) = b\cdot\log a`,
  "repaso#2": String.raw`1\ \text{atm} = 760\ \text{mmHg} = 760\ \text{torr} = 1013\ \text{hPa} = 101{,}32\ \text{kPa}`,
  "repaso#3": String.raw`T\,(\text{K}) = t\,(\text{°C}) + 273{,}15`,
  "repaso#4": String.raw`1\ \text{dm}^3 = 1\ \text{L} \;;\; 1\ \text{mL} = 1\ \text{cm}^3 \;;\; 1\ \text{Å} = 10^{-10}\ \text{m}`,
  "repaso#5": String.raw`d = \dfrac{m}{V} \quad (\text{g/cm}^3 \;;\; \text{kg/m}^3)`,

  "materia#0": String.raw`\text{Atomicidad} = \text{número de átomos de un elemento en una molécula}`,
  "materia#1": String.raw`\text{Propiedad extensiva: depende de la cantidad (masa, volumen)} \;|\; \text{intensiva: no depende (T de ebullición, densidad)}`,
  "materia#2": String.raw`d = \dfrac{m}{V} \quad (\text{g/cm}^3)`,
  "materia#3": String.raw`\text{Sistema material} = \text{porción de materia que se aísla para su estudio}`,

  "atomo#0": String.raw`A = Z + N \;;\; Z = \text{nº de protones} \;;\; q_{\text{ion}} = Z - \text{nº de } e^-`,
  "atomo#1": String.raw`\overline{M} = \sum \left(\text{abundancia}_i \cdot m_i\right) \quad (\text{en u})`,
  "atomo#2": String.raw`1\ \text{u} = 1{,}661 \times 10^{-24}\ \text{g}`,
  "atomo#3": String.raw`l = 0 \dots n-1 \;;\; m_l = -l \dots +l \;;\; m_s = \pm\tfrac{1}{2} \;;\; \text{máx. } 2(2l+1)\ e^- \text{ por subnivel}`,
  "atomo#4": String.raw`\text{Orden de llenado: } 1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p, 5s, 4d, 5p, 6s, 4f, 5d, 6p, \dots`,
  "atomo#5": String.raw`\text{Grupo: } s \rightarrow \text{nº } e^- \text{ de la CEE} \;;\; p \rightarrow \text{nº } e^- \text{ de la CEE} + 10`,

  "magnitudes#0": String.raw`n = \dfrac{m}{M} \quad \left(\text{mol} = \dfrac{\text{g}}{\text{g/mol}}\right)`,
  "magnitudes#1": String.raw`N = n \cdot N_A, \quad N_A = 6{,}022 \times 10^{23}\ \text{mol}^{-1}`,
  "magnitudes#2": String.raw`1\ \text{u} = 1{,}661 \times 10^{-24}\ \text{g} = \dfrac{1}{N_A}\ \text{g}`,
  "magnitudes#3": String.raw`M_{\text{molecular}} = \sum (\text{atomicidad} \cdot \text{masa atómica}) \quad (\text{u})`,
  "magnitudes#4": String.raw`d = \dfrac{m}{V}\ (\text{g/cm}^3) \;;\; V_m = \dfrac{M}{d}\ (\text{cm}^3/\text{mol})`,

  "uniones#0": String.raw`\text{iónico si } \Delta\chi > 2 \;;\; \text{covalente si } \Delta\chi < 2 \quad \text{(criterio del apunte)}`,
  "uniones#1": String.raw`\mu = q \cdot d \quad (\text{debye, D})`,
  "uniones#2": String.raw`\text{2 pares: lineal } 180\text{°} \;;\; \text{3 pares: trigonal plana } 120\text{°} \;;\; \text{4 pares: tetraédrica } 109{,}5\text{°}`,
  "uniones#3": String.raw`\text{sp}^3\ (4\sigma,\ \text{tetraédrica}) \;;\; \text{sp}^2\ (3\sigma + 1p,\ \text{trigonal}) \;;\; \text{sp}\ (2\sigma + 2p,\ \text{lineal})`,
  "uniones#4": String.raw`\text{simple} = 1\sigma \;;\; \text{doble} = 1\sigma + 1\pi \;;\; \text{triple} = 1\sigma + 2\pi`,

  "nomenclatura#0": String.raw`\text{Sistemática: prefijos mono-, di-, tri-...}\quad \text{ej.: trióxido de dihierro} = \text{Fe}_2\text{O}_3 \;;\; \text{Stock: óxido de hierro(III)}`,
  "nomenclatura#1": String.raw`\text{Oxoácido (IUPAC): no metal(nº ox) de hidrógeno}\quad (\text{ej.: sulfato(VI) de hidrógeno} = \text{H}_2\text{SO}_4)`,
  "nomenclatura#2": String.raw`\text{Oxosal: anión de metal(nº ox)} \;;\; \text{sales de hidrácidos: nombre terminado en "uro"}`,
  "nomenclatura#3": String.raw`\text{Alcanos } C_nH_{2n+2} \;;\; \text{alquenos } C_nH_{2n} \;;\; \text{alquinos } C_nH_{2n-2} \;;\; \text{cicloalcanos } C_nH_{2n}`,
  "nomenclatura#4": String.raw`\text{Alcohol } R\text{–OH} \;;\; \text{aldehído } R\text{–CHO} \;;\; \text{cetona } R\text{–CO–}R' \;;\; \text{ácido } R\text{–COOH} \;;\; \text{éster } R\text{–COO–}R' \;;\; \text{amina } R\text{–NH}_2 \;;\; \text{amida } R\text{–CONH}_2 \;;\; \text{nitrilo } R\text{–CN}`,

  "gases#0": String.raw`P\cdot V = n\cdot R\cdot T \quad ;\quad R = 0{,}082\ \text{L·atm/(mol·K)}`,
  "gases#1": String.raw`T\,(\text{K}) = t\,(\text{°C}) + 273{,}15`,
  "gases#2": String.raw`P_{\text{total}} = \sum P_i \;;\; P_i = x_i\cdot P_{\text{total}} \;;\; x_i = \dfrac{n_i}{n_{\text{total}}}`,
  "gases#3": String.raw`Z = \dfrac{V_{\text{real}}}{V_{\text{ideal}}} \;;\; V_{\text{ideal}} = \dfrac{R\cdot T}{P}\ (\text{por mol})`,
  "gases#4": String.raw`\left(P + \dfrac{a\,n^2}{V^2}\right)(V - n\,b) = n\,R\,T \quad \text{(van der Waals)}`,
  "gases#5": String.raw`V_m = 22{,}4\ \text{L/mol} \quad \text{(gas ideal, CNPT)}`,

  "liquidos#0": String.raw`\sigma = \dfrac{\text{energía}}{\text{área}} = \dfrac{\text{fuerza}}{\text{distancia}} \;;\; [\sigma] = \text{N/m}\ (1\ \text{dina/cm} = 1\ \text{mN/m})`,
  "liquidos#1": String.raw`F = \mu \cdot A \cdot \dfrac{dv}{dz} \;;\; [\mu] = \text{Pa·s} \;;\; 1\ \text{cP} = 1\ \text{mPa·s} = 0{,}01\ \text{P}`,
  "liquidos#2": String.raw`\gamma_{sv} = \gamma_{sl} + \gamma_{lv}\cos\theta \quad \text{(Young)}`,
  "liquidos#3": String.raw`\Delta H_{\text{vap}} = H_m(\text{vapor}) - H_m(\text{líquido}) > 0 \;;\; \Delta H_{\text{cond}} = -\Delta H_{\text{vap}}`,
  "liquidos#4": String.raw`P_{\text{vap}}(\text{H}_2\text{O}, 100\text{°C}) = 760\ \text{mmHg} = 1\ \text{atm}`,

  "soluciones#0": String.raw`M = \dfrac{n_{\text{soluto}}}{V_{\text{solución}}\ (\text{L})} \quad (\text{mol/L})`,
  "soluciones#1": String.raw`m = \dfrac{n_{\text{soluto}}}{\text{kg de solvente}} \quad (\text{mol/kg})`,
  "soluciones#2": String.raw`\%\,m/m = \dfrac{m_{\text{soluto}}}{m_{\text{solución}}}\cdot 100 \;;\; \%\,m/V = \dfrac{\text{g soluto}}{\text{mL solución}}\cdot 100`,
  "soluciones#3": String.raw`\text{ppm} = \dfrac{\text{mg de soluto}}{\text{kg de solución}}`,
  "soluciones#4": String.raw`m_{\text{solución}} = m_{\text{soluto}} + m_{\text{solvente}} \;;\; N = \dfrac{\text{eq}}{\text{L}} \;;\; \text{eq} = \dfrac{\text{masa}}{\text{masa equivalente}}`,
  "soluciones#5": String.raw`C_c\cdot V_c = C_d\cdot V_d \quad (\text{mismas unidades de concentración})`,
  "soluciones#6": String.raw`S = k\cdot P \quad (\text{Ley de Henry: gases en líquidos})`,

  "reacciones#0": String.raw`n = \dfrac{m}{M} \quad \left(\text{mol} = \dfrac{\text{g}}{\text{g/mol}}\right)`,
  "reacciones#1": String.raw`V_{\text{gas}} = \dfrac{n\,R\,T}{P} \quad (R = 0{,}082\ \text{L·atm/(mol·K)},\ T \text{ en K})`,
  "reacciones#2": String.raw`\%\ \text{pureza} = \dfrac{m_{\text{puro}}}{m_{\text{muestra}}}\cdot 100`,
  "reacciones#3": String.raw`R\% = \dfrac{\text{cantidad real}}{\text{cantidad teórica}}\cdot 100`,
  "reacciones#4": String.raw`\text{Reactivo limitante: el de menor cociente} \;\dfrac{\text{moles disponibles}}{\text{coeficiente estequiométrico}}`,
  "reacciones#5": String.raw`\text{Combustión completa: } C_xH_y + O_2 \rightarrow CO_2 + H_2O \quad \text{(sin balancear: ajustar los coeficientes antes de usarla)}`,

  "equilibrio#0": String.raw`aA + bB \rightleftharpoons cC + dD \;;\quad K_c = \dfrac{[C]^c\,[D]^d}{[A]^a\,[B]^b} \quad (\text{mol/L})`,
  "equilibrio#1": String.raw`K_p = K_c\,(R\,T)^{\Delta n} \;;\; \Delta n = n_{\text{gas prod}} - n_{\text{gas react}} \;;\; R = 0{,}082\ \text{L·atm/(mol·K)}`,
  "equilibrio#2": String.raw`Q = \text{mismo cociente que } K,\ \text{con concentraciones o presiones actuales}`,
  "equilibrio#3": String.raw`Q = K \Rightarrow \text{equilibrio} \;;\quad Q < K \Rightarrow \text{avanza a productos} \;;\quad Q > K \Rightarrow \text{avanza a reactivos}`,

  "acidobase#0": String.raw`K_w = [H_3O^+][OH^-] = 1 \times 10^{-14}\ (25\text{°C}) \;;\; pH + pOH = 14`,
  "acidobase#1": String.raw`pH = -\log[H_3O^+] \;;\; pOH = -\log[OH^-] \;;\; pX = -\log[X]`,
  "acidobase#2": String.raw`K_a = \dfrac{[A^-][H_3O^+]}{[HA]} \;;\; K_b = \dfrac{[BH^+][OH^-]}{[B]} \;;\; K_a\cdot K_b = K_w`,
  "acidobase#3": String.raw`\text{Ácido débil (aprox.): } [H_3O^+] = \sqrt{K_a\cdot C} \;;\; pH = -\log[H_3O^+]`,
  "acidobase#4": String.raw`\alpha = \dfrac{x}{C_i}\ (\text{grado de ionización}) \;;\quad K_a \approx C_i\cdot\alpha^2`,

  "termodinamica#0": String.raw`\Delta U = Q + W \;;\quad W = -P_{\text{ext}}\cdot\Delta V \quad (1\ \text{atm·L} = 101{,}3\ \text{J})`,
  "termodinamica#1": String.raw`Q = m\cdot c\cdot\Delta T \;;\quad Q = C\cdot\Delta T \;;\quad 1\ \text{cal} = 4{,}184\ \text{J} \;;\quad R = 8{,}314\ \text{J/(mol·K)}`,
  "termodinamica#2": String.raw`\Delta H = \Delta U + P\,\Delta V = \Delta U + \Delta n_{\text{gas}}\,R\,T \;;\quad Q_v = \Delta U \;;\quad Q_p = \Delta H`,
  "termodinamica#3": String.raw`\Delta H^\circ_r = \sum n\,\Delta H^\circ_f(\text{productos}) - \sum n\,\Delta H^\circ_f(\text{reactivos})`,
  "termodinamica#4": String.raw`\Delta H^\circ_r = \sum \Delta H^\circ_c(\text{reactivos}) - \sum \Delta H^\circ_c(\text{productos})`,
  "termodinamica#5": String.raw`\Delta H^\circ_c(\text{C}_2\text{H}_6) \approx -1560\ \text{kJ/mol} \quad \text{(la guía pone } -1553{,}3\text{; con las } \Delta H^\circ_f \text{ de la tabla da } -1559{,}8\text{)}`,
  "termodinamica#6": String.raw`\text{PCS} = \text{PCI} - n_{\text{H}_2\text{O}}\cdot\Delta H_{\text{cond}} \quad (\Delta H_{\text{cond}} = -44\ \text{kJ/mol de H}_2\text{O})`
};
