/* ============================================================================
   Electronics Trainer — course content
   Based on the lecture decks (Boylestad, "Introductory Circuit Analysis").
   Each lecture has:
     - notes:  sections of key, exam-useful info (definitions, formulas, units)
     - quiz:   concept & definition questions { q, options, answer, hint, explain }
               answer = index of the correct option
   ========================================================================== */

const LECTURES = [
/* ========================== LECTURE 1 ================================== */
{
  id: "l1",
  title: "L1 · Fundamentals",
  subtitle: "Charge, Voltage, Current, Resistance, Ohm's Law, Power",
  notes: [
    { h: "Engineering notation & prefixes", points: [
      "Scientific notation: one non-zero digit before the decimal point × a power of ten (e.g. 20 000 Hz = 2.0 × 10⁴ Hz).",
      "Common prefixes: T 10¹², G 10⁹, M 10⁶, k 10³, m 10⁻³, µ 10⁻⁶, n 10⁻⁹, p 10⁻¹².",
      "To convert, e.g. 20 kHz → MHz: 20 × 10³ Hz = 0.02 × 10⁶ Hz = 0.02 MHz."
    ]},
    { h: "Coulomb's law", points: [
      "Force between two charges: F = k·Q₁Q₂ / r²,  with k = 9 × 10⁹ N·m²/C².",
      "Like charges repel, opposite charges attract. Force is inversely proportional to the SQUARE of the distance r.",
      "Charge unit = coulomb (C); 1 C = charge of 6.24 × 10¹⁸ electrons. Electron charge = 1.6 × 10⁻¹⁹ C."
    ]},
    { h: "Voltage (potential difference)", points: [
      "Voltage = potential difference between two points = work per unit charge: V = W / Q.",
      "1 volt = 1 joule / coulomb (1 V = 1 J/C).",
      "It takes a difference in potential for current to flow — a single potential alone does nothing."
    ]},
    { h: "Current", points: [
      "Current = the orderly (net) movement of charge (electrons): I = Q / t.",
      "1 ampere = 1 coulomb / second (1 A = 1 C/s).",
      "Conventional current flows from + to −; electron flow is the opposite direction.",
      "Ammeter is connected in SERIES; voltmeter is connected in PARALLEL (across)."
    ]},
    { h: "Resistance", points: [
      "Resistance = opposition to current flow (collisions of electrons → heat).",
      "R = ρ·l / A:  resistance ↑ with length l, ↓ with cross-sectional area A; ρ = resistivity (material).",
      "Temperature: for metals/conductors R increases with temperature (positive temp. coefficient).",
      "For carbon, semiconductors and insulators R decreases with temperature (negative temp. coefficient).",
      "Conductance G = 1/R, measured in siemens (S). Higher G = easier current flow."
    ]},
    { h: "Resistor coding", points: [
      "Colour bands encode value & tolerance (4-, 5-, 6-band). First bands = digits, next = multiplier, then tolerance.",
      "SMD 3-digit: first two digits + number of zeros, e.g. 222 = 22 × 10² = 2.2 kΩ."
    ]},
    { h: "Ohm's law, power & energy", points: [
      "Ohm's law: V = I·R  (I = V/R, R = V/I). A resistor's V–I graph is a straight line through the origin.",
      "A semiconductor diode is NON-ohmic: its V–I curve is non-linear.",
      "Power: P = V·I = I²·R = V²/R, measured in watts (W).",
      "Energy: W = P·t (joules). Utility energy is billed in kilowatt-hours: 1 kWh = 1000 W for 1 hour."
    ]}
  ],
  quiz: [
    { q: "Voltage between two points is best defined as…", options: [
      "the work done per unit charge moved between them",
      "the number of electrons present at a point",
      "the opposition to current flow",
      "the rate of flow of charge"],
      answer: 0, hint: "Think energy ÷ charge.",
      explain: "Voltage (potential difference) = work per unit charge, V = W/Q, measured in volts (1 V = 1 J/C)." },
    { q: "Electric current is defined as…", options: [
      "potential difference between two points",
      "charge per unit time, I = Q/t",
      "energy stored in a field",
      "resistance times voltage"],
      answer: 1, hint: "It's a flow — something per second.",
      explain: "Current is the net rate of charge flow: I = Q/t. 1 ampere = 1 coulomb per second." },
    { q: "In Coulomb's law, the force between two charges is inversely proportional to…", options: [
      "the distance r",
      "the square of the distance, r²",
      "the cube of the distance, r³",
      "the square root of the distance"],
      answer: 1, hint: "It's an inverse-square law, like gravity.",
      explain: "F = kQ₁Q₂/r². Doubling the separation cuts the force to one quarter." },
    { q: "The resistance of a uniform wire…", options: [
      "increases with cross-sectional area",
      "is independent of length",
      "increases with length and decreases with cross-sectional area",
      "decreases with length"],
      answer: 2, hint: "R = ρl/A.",
      explain: "R = ρl/A — longer wire = more resistance; thicker wire (more area) = less resistance." },
    { q: "For a typical metallic conductor, raising the temperature…", options: [
      "increases its resistance",
      "decreases its resistance",
      "has no effect on resistance",
      "turns it into an insulator"],
      answer: 0, hint: "Metals have a POSITIVE temperature coefficient.",
      explain: "Metals: more thermal agitation → more collisions → higher resistance (positive temp. coefficient). Carbon/semiconductors do the opposite." },
    { q: "Conductance G is…", options: [
      "the same as resistance",
      "the reciprocal of resistance, measured in siemens",
      "measured in ohms",
      "voltage divided by power"],
      answer: 1, hint: "It's the 'ease' of current flow.",
      explain: "G = 1/R, unit siemens (S). Large G = small R = current flows easily." },
    { q: "Ohm's law states that…", options: [
      "V = I/R", "P = V·I", "V = I·R", "I = V·R"],
      answer: 2, hint: "Voltage is the product of the other two.",
      explain: "Ohm's law: V = I·R. Rearranged: I = V/R and R = V/I." },
    { q: "Which device has a NON-linear (non-ohmic) voltage–current characteristic?", options: [
      "a carbon film resistor", "a length of copper wire", "a semiconductor diode", "a wire-wound resistor"],
      answer: 2, hint: "Which one doesn't obey a straight-line V–I graph?",
      explain: "A diode's V–I curve is non-linear; ordinary resistors give a straight line through the origin." },
    { q: "Electrical power dissipated in a resistor can be written as…", options: [
      "P = V/I only", "P = I²R = V²/R = VI", "P = Q/t", "P = ρl/A"],
      answer: 1, hint: "Combine P = VI with Ohm's law.",
      explain: "P = VI, and substituting Ohm's law gives P = I²R = V²/R. Unit: watt." },
    { q: "One kilowatt-hour (kWh) is a unit of…", options: [
      "power", "energy", "current", "charge"],
      answer: 1, hint: "Power × time = ?",
      explain: "Energy W = P·t. A kWh is energy: 1000 W delivered for one hour." },
    { q: "An ammeter should be connected in the circuit…", options: [
      "in parallel with the element", "in series with the element", "across the supply only", "it doesn't matter"],
      answer: 1, hint: "It must carry the same current it measures.",
      explain: "Ammeters go in series (to pass the current); voltmeters go in parallel (across the element)." }
  ]
},

/* ========================== LECTURE 2 ================================== */
{
  id: "l2",
  title: "L2 · Network Theorems",
  subtitle: "Series/Parallel, KVL/KCL, Dividers, Mesh, Nodal, Thévenin/Norton",
  notes: [
    { h: "Series & parallel resistors", points: [
      "Series resistors add: R_T = R₁ + R₂ + … . Same CURRENT flows through all; voltages add.",
      "Parallel resistors: 1/R_T = 1/R₁ + 1/R₂ + … . Same VOLTAGE across all; currents add.",
      "Two in parallel: R_T = R₁R₂ / (R₁ + R₂) (product over sum). R_T is always smaller than the smallest branch."
    ]},
    { h: "Kirchhoff's laws", points: [
      "KVL (voltage law): the algebraic sum of voltages around any closed loop = 0 (rises = drops).",
      "KCL (current law): the algebraic sum of currents at any node = 0 (current in = current out)."
    ]},
    { h: "Divider rules", points: [
      "Voltage Divider Rule (VDR), series: V_x = (R_x / R_T)·E. Largest resistor gets the largest voltage.",
      "Current Divider Rule (CDR), two parallel: I₁ = (R₂ /(R₁+R₂))·I_T. The SMALLER resistor takes the LARGER current."
    ]},
    { h: "Source conversion & Δ-Y", points: [
      "A real voltage source E with series R_s ↔ a current source I = E/R_s with parallel R_s (same R).",
      "Δ↔Y (delta–wye / T–π) conversions transform three-resistor clusters that aren't simple series/parallel."
    ]},
    { h: "Systematic analysis methods", points: [
      "Branch-current analysis: assign a current to each branch, apply KCL + KVL, solve simultaneously.",
      "Mesh (loop) analysis: assign loop currents, write KVL per mesh, solve.",
      "Nodal analysis: pick a reference (0 V) node; for N nodes solve (N−1) node voltages via KCL."
    ]},
    { h: "Network theorems", points: [
      "Superposition: response = sum of responses from each source acting alone (zero the others: V-source → short, I-source → open). Only valid for linear networks.",
      "Thévenin: any linear two-terminal network ≈ one source E_Th in series with R_Th. E_Th = open-circuit voltage; R_Th = resistance looking in with sources zeroed.",
      "Norton: equivalent current source I_N in parallel with R_N. I_N = short-circuit current; R_N = R_Th.",
      "Maximum power transfer: a load receives maximum power when R_L = R_Th (then P_max = E_Th²/4R_Th)."
    ]}
  ],
  quiz: [
    { q: "Resistors in SERIES…", options: [
      "all have the same voltage across them",
      "all carry the same current, and resistances add",
      "have a total resistance smaller than the smallest one",
      "follow 1/R_T = Σ 1/R"],
      answer: 1, hint: "One single path for current.",
      explain: "Series elements share one current path; R_T = R₁+R₂+…, and the source voltage divides among them." },
    { q: "For two resistors in PARALLEL, the total resistance is…", options: [
      "R₁ + R₂",
      "always larger than either resistor",
      "R₁R₂/(R₁+R₂), smaller than the smaller resistor",
      "the average of R₁ and R₂"],
      answer: 2, hint: "Product over sum.",
      explain: "R_T = R₁R₂/(R₁+R₂); parallel combination is always less than the smallest branch resistance." },
    { q: "Kirchhoff's Voltage Law (KVL) states that around any closed loop…", options: [
      "the sum of currents is zero",
      "the algebraic sum of voltages is zero",
      "voltage equals current times power",
      "the largest voltage dominates"],
      answer: 1, hint: "Energy conservation around a loop.",
      explain: "KVL: the algebraic sum of all voltage rises and drops around a closed loop equals zero." },
    { q: "Kirchhoff's Current Law (KCL) is based on conservation of…", options: [
      "energy", "charge (current in = current out at a node)", "voltage", "power"],
      answer: 1, hint: "Charge can't pile up at a junction.",
      explain: "KCL: the sum of currents entering a node equals the sum leaving — conservation of charge." },
    { q: "In the Voltage Divider Rule, the largest series resistor…", options: [
      "drops the smallest voltage", "drops the largest voltage", "carries the most current", "is shorted out"],
      answer: 1, hint: "V_x = (R_x/R_T)·E.",
      explain: "Voltage divides in proportion to resistance, so the largest resistor takes the largest share of the source voltage." },
    { q: "In the Current Divider Rule, between two parallel resistors the SMALLER resistor carries…", options: [
      "the smaller current", "the larger current", "no current", "the same current as the larger one"],
      answer: 1, hint: "Current prefers the easier path.",
      explain: "Current takes the path of least resistance, so the smaller resistor carries the larger share of the current." },
    { q: "A practical voltage source (E in series with R_s) converts to an equivalent current source of value…", options: [
      "E·R_s", "E/R_s in parallel with R_s", "R_s/E", "E + R_s"],
      answer: 1, hint: "Ohm's law on the source resistance.",
      explain: "Source conversion: I = E/R_s with the same resistance now placed in parallel." },
    { q: "The Thévenin equivalent of a linear two-terminal network is…", options: [
      "a current source in parallel with a resistor",
      "a voltage source E_Th in series with a resistor R_Th",
      "just a single resistor",
      "two voltage sources in series"],
      answer: 1, hint: "Voltage source + series resistor.",
      explain: "Thévenin: E_Th (open-circuit voltage) in series with R_Th (resistance seen with sources zeroed)." },
    { q: "When finding R_Th (or R_N), independent sources are removed by…", options: [
      "shorting voltage sources and opening current sources",
      "opening voltage sources and shorting current sources",
      "doubling every source",
      "leaving all sources active"],
      answer: 0, hint: "Zero each source according to its type.",
      explain: "To zero sources: voltage sources → short circuit (0 V), current sources → open circuit (0 A)." },
    { q: "Norton's theorem represents a network as…", options: [
      "E_Th in series with R_Th",
      "a current source I_N (short-circuit current) in parallel with R_N",
      "a pure capacitor",
      "a voltage divider"],
      answer: 1, hint: "It's the dual of Thévenin.",
      explain: "Norton: I_N = short-circuit current in parallel with R_N (= R_Th)." },
    { q: "Maximum power is delivered to a load when…", options: [
      "R_L = 0", "R_L → ∞", "R_L = R_Th", "R_L = 2R_Th"],
      answer: 2, hint: "Match the load to the Thévenin resistance.",
      explain: "Maximum power transfer occurs at R_L = R_Th, giving P_max = E_Th²/(4R_Th)." },
    { q: "Superposition can be applied only to…", options: [
      "linear networks", "circuits with one source", "non-linear circuits", "AC circuits only"],
      answer: 0, hint: "It relies on proportionality.",
      explain: "Superposition requires linearity: total response = sum of responses to each source acting alone." }
  ]
},

/* ========================== LECTURE 3 ================================== */
{
  id: "l3",
  title: "L3 · Capacitors & Inductors",
  subtitle: "Electric field, capacitance, dielectrics, magnetism, inductance",
  notes: [
    { h: "Electric field & flux", points: [
      "An electric field is represented by flux lines from + charge to − charge; density shows field strength.",
      "Electric flux ψ is proportional to the charge (in coulombs). Flux density D = ψ/A = Q/A.",
      "Field strength E between plates: E = V/d (volts per metre)."
    ]},
    { h: "Capacitance", points: [
      "A capacitor stores charge on two plates separated by a dielectric (insulator).",
      "Capacitance C = Q/V, unit farad (F). 1 F = 1 coulomb per volt (very large; usual values µF, nF, pF).",
      "C = ε·A/d = ε₀·ε_r·A/d. Bigger plates (A↑) or thinner gap (d↓) → more capacitance.",
      "ε₀ = 8.85 × 10⁻¹² F/m (permittivity of vacuum); ε_r = relative permittivity (dielectric constant), ≥ 1.",
      "The dielectric becomes polarised (dipoles align); it raises capacitance and sets the maximum (breakdown) voltage."
    ]},
    { h: "Capacitor behaviour & energy", points: [
      "Voltage across a capacitor CANNOT change instantaneously (i = C·dv/dt).",
      "In DC steady state a capacitor is fully charged → acts as an OPEN circuit (no current).",
      "Energy stored: W = ½·C·V²  (joules)."
    ]},
    { h: "Magnetism & inductors", points: [
      "An inductor (coil) stores energy in a magnetic field when current flows. Inductance L, unit henry (H).",
      "Permeability µ = µ₀·µ_r. Ferromagnetic materials (iron, steel) have µ_r ≫ 1; air/most materials µ_r ≈ 1.",
      "Faraday's law: induced voltage v = L·di/dt (proportional to the RATE of change of current).",
      "Lenz's law: the induced voltage/current opposes the change that produced it.",
      "Core saturation: beyond a point, increasing current no longer increases flux proportionally."
    ]},
    { h: "Inductor behaviour & energy", points: [
      "Current through an inductor CANNOT change instantaneously.",
      "In DC steady state the inductor current is constant → it acts as a SHORT circuit (ideally 0 V across it).",
      "Energy stored: W = ½·L·I²  (joules)."
    ]}
  ],
  quiz: [
    { q: "Capacitance is defined as…", options: [
      "charge stored per unit voltage, C = Q/V",
      "voltage per unit charge",
      "the rate of change of current",
      "energy per unit time"],
      answer: 0, hint: "Charge ÷ voltage.",
      explain: "C = Q/V, unit farad (F = C/V). It measures how much charge a capacitor stores per volt applied." },
    { q: "To INCREASE the capacitance of a parallel-plate capacitor you could…", options: [
      "increase the plate separation d",
      "decrease the plate area A",
      "increase the plate area A or decrease the separation d",
      "remove the dielectric"],
      answer: 2, hint: "C = εA/d.",
      explain: "C = εA/d: larger area, smaller gap, or a higher-permittivity dielectric all increase capacitance." },
    { q: "The relative permittivity (dielectric constant) ε_r of an insulating material is…", options: [
      "always less than 1", "equal to 1 for all materials", "≥ 1, and raises capacitance compared with vacuum", "measured in farads"],
      answer: 2, hint: "Vacuum is the reference at 1.",
      explain: "ε_r ≥ 1 (vacuum = 1). A dielectric polarises and increases capacitance by the factor ε_r." },
    { q: "The voltage across a capacitor…", options: [
      "can change instantaneously", "cannot change instantaneously", "is always zero", "equals the current"],
      answer: 1, hint: "i = C·dv/dt — an instant jump needs infinite current.",
      explain: "Because i = C·dv/dt, an instantaneous voltage jump would require infinite current, so v_C changes gradually." },
    { q: "In DC steady state, an ideal capacitor behaves like…", options: [
      "a short circuit", "an open circuit", "a resistor equal to R", "a voltage source"],
      answer: 1, hint: "Fully charged → no more current.",
      explain: "Once charged, no further current flows, so the capacitor looks like an open circuit to DC." },
    { q: "Energy stored in a capacitor is…", options: [
      "W = ½CV²", "W = CV", "W = ½LI²", "W = QV²"],
      answer: 0, hint: "Half, C, V-squared.",
      explain: "W = ½CV² joules — energy held in the electric field between the plates." },
    { q: "The voltage induced across an inductor is proportional to…", options: [
      "the current itself", "the rate of change of current, di/dt", "the charge", "the resistance"],
      answer: 1, hint: "Faraday: v = L·di/dt.",
      explain: "v = L·di/dt — only a CHANGING current induces a voltage across an inductor." },
    { q: "Lenz's law says the induced effect always…", options: [
      "aids the change that caused it", "opposes the change that caused it", "is zero", "doubles the current"],
      answer: 1, hint: "Nature resists change.",
      explain: "Lenz's law: the induced voltage/current opposes the change in flux/current that produced it." },
    { q: "The current through an inductor…", options: [
      "can change instantaneously", "cannot change instantaneously", "is always zero in DC", "leads the voltage by 90° in DC"],
      answer: 1, hint: "Dual of the capacitor-voltage rule.",
      explain: "Because v = L·di/dt, the inductor current cannot jump instantly — it changes gradually." },
    { q: "In DC steady state, an ideal inductor behaves like…", options: [
      "an open circuit", "a short circuit", "a large resistor", "a capacitor"],
      answer: 1, hint: "Constant current, 0 V across it.",
      explain: "With constant current di/dt = 0, so v = 0 — the ideal inductor looks like a short circuit to DC." },
    { q: "A ferromagnetic core material is characterised by a relative permeability µ_r that is…", options: [
      "much greater than 1", "equal to 1", "less than 1", "negative"],
      answer: 0, hint: "Iron concentrates magnetic flux strongly.",
      explain: "Ferromagnetic materials (iron, steel) have µ_r ≫ 1, concentrating magnetic flux. 'Core saturation' limits this at high current." },
    { q: "Energy stored in an inductor is…", options: [
      "W = ½CV²", "W = ½LI²", "W = LI", "W = ½LI"],
      answer: 1, hint: "Half, L, I-squared.",
      explain: "W = ½LI² joules — energy held in the magnetic field of the coil." }
  ]
},

/* ========================== LECTURE 4 ================================== */
{
  id: "l4",
  title: "L4 · Sinusoidal AC Waveforms",
  subtitle: "Period, frequency, ω, phase, average & RMS values",
  notes: [
    { h: "The sinusoid", points: [
      "AC = alternating current/voltage that periodically reverses direction.",
      "Instantaneous value: e(t) = E_m · sin(ωt ± θ).  E_m = peak (maximum) amplitude.",
      "Peak value = E_m; peak-to-peak value = 2·E_m (positive peak to negative peak)."
    ]},
    { h: "Period, frequency, angular frequency", points: [
      "Period T = time for one complete cycle (seconds).",
      "Frequency f = number of cycles per second = 1/T, unit hertz (Hz).",
      "Angular frequency ω = 2πf = 2π/T, unit radians per second (rad/s).",
      "So e(t) = E_m·sin(2πf·t)."
    ]},
    { h: "Radians & degrees", points: [
      "One full cycle = 360° = 2π radians; 180° = π rad; 90° = π/2 rad.",
      "Convert: degrees = radians × (180/π);  radians = degrees × (π/180)."
    ]},
    { h: "Phase relationship", points: [
      "In e = E_m·sin(ωt ± θ), θ is the phase angle (a horizontal shift of the waveform).",
      "'Leads' = shifted left (occurs earlier); 'lags' = shifted right (occurs later)."
    ]},
    { h: "Average value", points: [
      "Average value = area under one cycle ÷ length of cycle.",
      "Over a FULL cycle a pure sine has an average value of 0 (equal positive and negative areas).",
      "For a half-cycle (or full-wave rectified sine) the average = 0.637·E_m = (2/π)·E_m."
    ]},
    { h: "RMS (effective) value — most important", points: [
      "RMS = the equivalent DC value that delivers the same average power to a resistor.",
      "For a sine: V_rms = 0.707·E_m = E_m/√2.  Conversely E_m = √2·V_rms = 1.414·V_rms.",
      "Mains '230 V' is an RMS value; its peak is about 325 V. AC meters read RMS."
    ]}
  ],
  quiz: [
    { q: "The frequency of a periodic waveform is…", options: [
      "the time for one cycle", "the number of cycles per second, f = 1/T", "the peak value", "2π times the period"],
      answer: 1, hint: "Cycles per second.",
      explain: "f = 1/T, unit hertz (Hz). Period and frequency are reciprocals." },
    { q: "Angular frequency ω equals…", options: [
      "1/T", "2πf", "f/2π", "E_m·sin(t)"],
      answer: 1, hint: "Radians per second.",
      explain: "ω = 2πf = 2π/T, in rad/s. It appears in e(t) = E_m·sin(ωt)." },
    { q: "The peak-to-peak value of a sine wave with amplitude E_m is…", options: [
      "E_m", "0.707 E_m", "2 E_m", "E_m/√2"],
      answer: 2, hint: "Top peak down to bottom peak.",
      explain: "Peak-to-peak = 2·E_m, the full span from the positive peak to the negative peak." },
    { q: "How many radians are in one complete cycle (360°)?", options: [
      "π", "π/2", "2π", "180"],
      answer: 2, hint: "Full circle in radians.",
      explain: "360° = 2π radians; so 180° = π rad and 90° = π/2 rad." },
    { q: "The average value of a pure sine wave over one FULL cycle is…", options: [
      "0.707 E_m", "0.637 E_m", "zero", "E_m"],
      answer: 2, hint: "Equal area above and below the axis.",
      explain: "Over a full cycle the positive and negative halves cancel, giving an average of zero." },
    { q: "The RMS (effective) value of a sinusoid relates to its peak by…", options: [
      "V_rms = E_m", "V_rms = 0.637 E_m", "V_rms = 0.707 E_m", "V_rms = 2 E_m"],
      answer: 2, hint: "Divide the peak by √2.",
      explain: "V_rms = E_m/√2 = 0.707·E_m. It's the DC-equivalent value for power." },
    { q: "Why is the RMS value important?", options: [
      "It is the largest instantaneous value",
      "It gives the equivalent DC value that delivers the same average power",
      "It equals the average over a full cycle",
      "It is the phase angle"],
      answer: 1, hint: "Think heating effect / power.",
      explain: "RMS is defined so that a DC of that value dissipates the same average power in a resistor as the AC waveform." },
    { q: "If a sinusoid is written e = E_m·sin(ωt − 30°), the waveform…", options: [
      "leads the reference by 30°", "lags the reference by 30°", "has a frequency of 30 Hz", "has zero amplitude"],
      answer: 1, hint: "Minus sign = shifted right (later).",
      explain: "A −θ shifts the waveform to the right in time, i.e. it LAGS the reference by 30°." },
    { q: "AC voltmeters and ammeters are normally calibrated to read…", options: [
      "peak values", "peak-to-peak values", "RMS (effective) values", "average values"],
      answer: 2, hint: "Same value quoted for mains voltage.",
      explain: "Standard AC meters read RMS, which is why mains is quoted as an RMS figure (e.g. 230 V)." },
    { q: "If the peak voltage is 100 V, the RMS value is approximately…", options: [
      "141 V", "70.7 V", "63.7 V", "100 V"],
      answer: 1, hint: "Multiply peak by 0.707.",
      explain: "V_rms = 0.707 × 100 V ≈ 70.7 V." }
  ]
},

/* ========================== LECTURE 5 ================================== */
{
  id: "l5",
  title: "L5 · Basic Elements & Phasors",
  subtitle: "R, L, C under AC · reactance · power factor · complex numbers",
  notes: [
    { h: "R, L, C response to a sinusoid", points: [
      "Resistor: voltage and current are IN PHASE (0° between them).",
      "Inductor: voltage LEADS current by 90° (current lags). Opposition = inductive reactance X_L = ωL = 2πfL.",
      "Capacitor: current LEADS voltage by 90° (voltage lags). Opposition = capacitive reactance X_C = 1/(ωC) = 1/(2πfC).",
      "Memory aid 'ELI the ICE man': in an inductor (L) E leads I; in a capacitor (C) I leads E."
    ]},
    { h: "How reactance changes with frequency", points: [
      "X_L = 2πfL — increases with frequency. At DC (f=0) an inductor is a short (X_L = 0).",
      "X_C = 1/(2πfC) — decreases with frequency. At DC a capacitor is an open (X_C → ∞).",
      "Reactance is measured in ohms but does NOT dissipate power."
    ]},
    { h: "Average power & power factor", points: [
      "Average power delivered to a PURE inductor or PURE capacitor over a cycle = 0 W (energy is only stored and returned).",
      "Only resistance dissipates real power.",
      "Average (real) power: P = V·I·cos θ, where θ is the angle between voltage and current.",
      "Power factor Fp = cos θ = P/(V·I). Fp = 1 for a pure resistor; Fp = 0 for a pure L or C.",
      "Lagging PF = inductive load; leading PF = capacitive load."
    ]},
    { h: "Complex numbers & phasors", points: [
      "A phasor represents a sinusoid by its magnitude and phase angle.",
      "Rectangular form: C = a + jb (j = √−1). Polar form: C = Z∠θ.",
      "Conversions: Z = √(a²+b²), θ = tan⁻¹(b/a); a = Z·cosθ, b = Z·sinθ.",
      "Add/subtract in rectangular form; multiply/divide easily in polar form."
    ]}
  ],
  quiz: [
    { q: "For an ideal resistor driven by AC, voltage and current are…", options: [
      "90° out of phase", "in phase (0°)", "180° out of phase", "45° out of phase"],
      answer: 1, hint: "Resistors don't shift phase.",
      explain: "In a resistor v and i are in phase — they peak and cross zero together." },
    { q: "In a pure inductor, the current…", options: [
      "leads the voltage by 90°", "lags the voltage by 90°", "is in phase with the voltage", "is zero"],
      answer: 1, hint: "ELI: E leads I in an inductor.",
      explain: "In an inductor voltage leads current by 90°, i.e. the current lags. (ELI the ICE man.)" },
    { q: "In a pure capacitor, the current…", options: [
      "lags the voltage by 90°", "leads the voltage by 90°", "is in phase with the voltage", "is always zero"],
      answer: 1, hint: "ICE: I leads E in a capacitor.",
      explain: "In a capacitor current leads voltage by 90° (voltage lags). (ICE part of 'ELI the ICE man'.)" },
    { q: "Inductive reactance X_L = 2πfL therefore…", options: [
      "decreases as frequency increases", "increases as frequency increases", "is independent of frequency", "is measured in farads"],
      answer: 1, hint: "f is in the numerator.",
      explain: "X_L = 2πfL rises with frequency; at DC (f=0) X_L = 0, so an inductor passes DC like a short." },
    { q: "Capacitive reactance X_C = 1/(2πfC) therefore…", options: [
      "increases as frequency increases", "decreases as frequency increases", "is constant with frequency", "equals ωL"],
      answer: 1, hint: "f is in the denominator.",
      explain: "X_C falls as frequency rises; at DC X_C → ∞, so a capacitor blocks DC (open circuit)." },
    { q: "The average power consumed by an IDEAL inductor or capacitor over a full cycle is…", options: [
      "maximum", "equal to VI", "zero", "negative"],
      answer: 2, hint: "Energy is stored then given back.",
      explain: "Pure reactive elements store energy and return it; net average power = 0 W. Only resistance dissipates real power." },
    { q: "Average (real) power in an AC circuit is given by…", options: [
      "P = VI", "P = VI·cos θ", "P = VI·sin θ", "P = V/I"],
      answer: 1, hint: "Include the cosine of the phase angle.",
      explain: "P = VI·cos θ, where θ is the angle between voltage and current; cos θ is the power factor." },
    { q: "The power factor of a purely resistive load is…", options: [
      "0", "0.5", "1", "infinite"],
      answer: 2, hint: "θ = 0, so cos θ = ?",
      explain: "For a resistor θ = 0°, so Fp = cos 0° = 1 (unity power factor)." },
    { q: "A 'lagging' power factor indicates a load that is predominantly…", options: [
      "resistive", "inductive", "capacitive", "open-circuit"],
      answer: 1, hint: "Current lags in this element.",
      explain: "Inductive loads make current lag voltage → lagging power factor. Capacitive loads give a leading PF." },
    { q: "The polar form of a complex number / phasor is written…", options: [
      "a + jb", "Z∠θ", "a − jb", "j(a+b)"],
      answer: 1, hint: "Magnitude and angle.",
      explain: "Polar form Z∠θ gives magnitude Z and phase angle θ; rectangular form is a + jb." },
    { q: "To ADD two phasors it is easiest to use…", options: [
      "polar form", "rectangular form (a + jb)", "degrees only", "RMS values"],
      answer: 1, hint: "Add real to real, imaginary to imaginary.",
      explain: "Addition/subtraction is done in rectangular form; multiplication/division is easier in polar form." }
  ]
},

/* ========================== LECTURE 6 ================================== */
{
  id: "l6",
  title: "L6 · AC Circuits",
  subtitle: "Impedance, phasor diagrams, AC power (real/reactive/apparent)",
  notes: [
    { h: "Impedance", points: [
      "Impedance Z is the total AC opposition (resistance + reactance), a complex quantity in ohms: Z = R + jX.",
      "Z_R = R∠0°;  Z_L = X_L∠+90° (= +jX_L);  Z_C = X_C∠−90° (= −jX_C).",
      "Series AC: impedances ADD (Z_T = Z₁ + Z₂ + …). Parallel AC: 1/Z_T = Σ 1/Z (admittances add).",
      "All DC techniques (KVL, KCL, mesh, nodal, Thévenin, VDR…) apply, but with complex numbers and impedances."
    ]},
    { h: "Phasor diagram", points: [
      "A phasor diagram shows voltage/current phasors as arrows at their relative angles.",
      "The impedance angle θ_Z equals the angle by which voltage leads current in that branch."
    ]},
    { h: "AC power — the power triangle", points: [
      "Real (active) power P = VI·cosθ, unit watt (W) — actually consumed by resistance.",
      "Reactive power Q = VI·sinθ, unit volt-ampere reactive (VAR) — shuttled to/from L and C.",
      "Apparent power S = V·I, unit volt-ampere (VA) — the product of RMS voltage and current.",
      "They form a right triangle: S² = P² + Q²; and S = P + jQ.",
      "Power factor Fp = cosθ = P/S."
    ]},
    { h: "Power factor correction", points: [
      "Most industrial loads are inductive (lagging PF), drawing extra current for the same real power.",
      "Adding a parallel capacitor supplies reactive power locally, raising the PF toward 1 and reducing line current.",
      "A higher power factor means less wasted current and lower losses for the same real power delivered."
    ]}
  ],
  quiz: [
    { q: "Impedance Z is best described as…", options: [
      "resistance only", "the total complex opposition to AC: resistance plus reactance", "reactance only", "a real number in farads"],
      answer: 1, hint: "It combines R and X as a complex number.",
      explain: "Z = R + jX (ohms) — the complete AC opposition, combining resistance and reactance with a phase angle." },
    { q: "The impedance of an ideal inductor is written…", options: [
      "X_L∠−90°", "X_L∠+90° (= +jX_L)", "R∠0°", "X_C∠−90°"],
      answer: 1, hint: "Voltage leads current by 90°.",
      explain: "Z_L = +jX_L = X_L∠+90°. The capacitor is the opposite: Z_C = −jX_C = X_C∠−90°." },
    { q: "Impedances in SERIES combine by…", options: [
      "adding their reciprocals", "simple addition: Z_T = Z₁ + Z₂ + …", "product over sum always", "averaging"],
      answer: 1, hint: "Same rule shape as series resistors.",
      explain: "Series impedances add directly (as complex numbers); parallel impedances add as reciprocals (admittances)." },
    { q: "Real (active) power, measured in watts, is given by…", options: [
      "S = VI", "P = VI·cos θ", "Q = VI·sin θ", "P = VI·tan θ"],
      answer: 1, hint: "It uses the cosine of the phase angle.",
      explain: "P = VI·cos θ (W) is the power actually consumed by resistance." },
    { q: "Reactive power Q is measured in…", options: [
      "watts (W)", "volt-amperes (VA)", "volt-amperes reactive (VAR)", "joules"],
      answer: 2, hint: "It has its own special unit.",
      explain: "Q = VI·sin θ has units of VAR (volt-amperes reactive); it is exchanged with L and C, not consumed." },
    { q: "Apparent power S equals…", options: [
      "VI·cos θ", "VI·sin θ", "the product of RMS voltage and current, V·I (in VA)", "P − Q"],
      answer: 2, hint: "Just voltage times current.",
      explain: "S = V·I in volt-amperes (VA) — the magnitude of the complex power." },
    { q: "The three powers are related by…", options: [
      "S = P + Q", "S² = P² + Q²", "P² = S² + Q²", "Q = P + S"],
      answer: 1, hint: "It's a right-angled (power) triangle.",
      explain: "S² = P² + Q² — the power triangle, with S the hypotenuse and θ the power-factor angle." },
    { q: "Power factor is defined as…", options: [
      "P/Q", "Q/S", "cos θ = P/S", "sin θ = Q/P"],
      answer: 2, hint: "Real over apparent power.",
      explain: "Fp = cos θ = P/S. Unity (1) means all apparent power is real power." },
    { q: "A typical industrial inductive load has a power factor that is…", options: [
      "leading", "lagging", "exactly unity", "negative"],
      answer: 1, hint: "Inductive → current lags.",
      explain: "Inductive loads give a lagging power factor; this is what power-factor correction aims to improve." },
    { q: "To correct a lagging (inductive) power factor you usually add…", options: [
      "a series resistor", "a parallel capacitor", "another inductor in parallel", "nothing can be done"],
      answer: 1, hint: "Capacitors supply the opposite reactive power.",
      explain: "A parallel capacitor supplies leading reactive power that offsets the inductive VARs, raising Fp toward 1 and cutting line current." },
    { q: "Analysing an AC network with mesh/nodal/Thévenin methods differs from DC analysis mainly in that…", options: [
      "the laws no longer apply", "you work with complex impedances and phasors instead of plain resistances",
      "only Ohm's law can be used", "superposition is forbidden"],
      answer: 1, hint: "Same theorems, complex arithmetic.",
      explain: "All the DC theorems still hold; you simply use complex impedances and phasor voltages/currents." }
  ]
},

/* ========================== LECTURE 7 ================================== */
{
  id: "l7",
  title: "L7 · Resonance & Transformers",
  subtitle: "Series/parallel resonance, Q, bandwidth, transformers",
  notes: [
    { h: "Series resonance", points: [
      "Resonance occurs when X_L = X_C; the reactances cancel.",
      "Resonant frequency: f_s = 1 / (2π√(LC)).",
      "At resonance the series circuit impedance is MINIMUM and purely resistive (Z = R), so current is MAXIMUM and the power factor is unity (1).",
      "Quality factor Q_s = X_L/R = ω_s·L/R (ratio of reactive to resistive). Higher Q = sharper (more selective) peak."
    ]},
    { h: "Bandwidth", points: [
      "Bandwidth BW = f₂ − f₁, between the half-power (−3 dB) frequencies where current = 0.707 × I_max.",
      "BW = f_s / Q_s. High Q → narrow bandwidth → more selective."
    ]},
    { h: "Parallel resonance (tank circuit)", points: [
      "A parallel L–C ('tank') circuit at resonance has MAXIMUM impedance.",
      "Line current is MINIMUM at resonance (opposite of the series case), while large currents circulate inside the tank.",
      "Roughly the same resonant frequency relationship f ≈ 1/(2π√(LC))."
    ]},
    { h: "Transformers", points: [
      "A transformer couples two coils magnetically; it transfers AC energy between windings and provides isolation.",
      "Turns ratio a = N_p/N_s. Voltage: V_p/V_s = N_p/N_s = a (voltages in proportion to turns).",
      "Current: I_p/I_s = N_s/N_p = 1/a (currents in INVERSE proportion to turns).",
      "Ideal transformer conserves power: S_p = S_s (V_p I_p = V_s I_s).",
      "Step-up (N_s > N_p): raises voltage, lowers current. Step-down: the reverse.",
      "Impedance transformation (reflection): Z_p = a²·Z_L — used for impedance matching.",
      "DC cannot be transformed — a transformer needs a CHANGING (AC) flux to induce a secondary voltage."
    ]}
  ],
  quiz: [
    { q: "A series circuit is at resonance when…", options: [
      "R = X_L", "X_L = X_C", "X_C = R", "the frequency is zero"],
      answer: 1, hint: "The two reactances cancel.",
      explain: "Resonance: X_L = X_C, so the reactive parts cancel and the circuit looks purely resistive." },
    { q: "The resonant frequency of an LC circuit is…", options: [
      "f = 2π√(LC)", "f = 1/(2π√(LC))", "f = 1/(2πRC)", "f = R/(2πL)"],
      answer: 1, hint: "One over 2π root LC.",
      explain: "f_s = 1/(2π√(LC)). It depends only on L and C." },
    { q: "At series resonance, the circuit impedance is…", options: [
      "maximum and purely reactive", "minimum and purely resistive (Z = R)", "infinite", "zero"],
      answer: 1, hint: "Reactances cancel, leaving R.",
      explain: "With X_L = X_C cancelling, only R remains: impedance is minimum and resistive, so current is maximum." },
    { q: "At series resonance the power factor is…", options: [
      "zero", "0.707", "unity (1)", "negative"],
      answer: 2, hint: "Purely resistive circuit.",
      explain: "Since the circuit is purely resistive at resonance, voltage and current are in phase → Fp = 1." },
    { q: "The quality factor Q_s of a series resonant circuit is…", options: [
      "R/X_L", "X_L/R (= ω_s L/R)", "R·X_C", "f_s · BW"],
      answer: 1, hint: "Reactance over resistance.",
      explain: "Q_s = X_L/R = ω_s L/R. A higher Q gives a sharper, more selective resonance." },
    { q: "Bandwidth and quality factor are related by…", options: [
      "BW = f_s · Q_s", "BW = f_s / Q_s", "BW = Q_s / f_s", "BW = R·Q_s"],
      answer: 1, hint: "High Q → narrow band.",
      explain: "BW = f_s/Q_s, measured between the −3 dB (0.707·I_max) half-power frequencies. High Q → narrow bandwidth." },
    { q: "A PARALLEL (tank) resonant circuit at resonance has…", options: [
      "minimum impedance and maximum line current",
      "maximum impedance and minimum line current",
      "zero impedance",
      "unity current gain"],
      answer: 1, hint: "Opposite behaviour to the series circuit.",
      explain: "A parallel tank shows maximum impedance at resonance, so the line current drawn from the source is minimum." },
    { q: "For an ideal transformer, the voltage ratio equals…", options: [
      "the inverse turns ratio N_s/N_p", "the turns ratio N_p/N_s", "the impedance ratio", "always 1"],
      answer: 1, hint: "Voltage follows turns directly.",
      explain: "V_p/V_s = N_p/N_s. More turns on a winding → more voltage on that winding." },
    { q: "In an ideal transformer the current ratio is…", options: [
      "I_p/I_s = N_p/N_s", "I_p/I_s = N_s/N_p (inverse of the turns ratio)", "I_p = I_s always", "proportional to a²"],
      answer: 1, hint: "Currents are inverse to turns (power is conserved).",
      explain: "I_p/I_s = N_s/N_p. Step-up voltage means step-down current, keeping V_pI_p = V_sI_s." },
    { q: "A step-up transformer (more secondary turns)…", options: [
      "increases voltage and decreases current",
      "increases both voltage and current",
      "decreases voltage and increases current",
      "changes frequency"],
      answer: 0, hint: "Power in ≈ power out.",
      explain: "Step-up raises voltage and lowers current (power conserved). A transformer never changes frequency." },
    { q: "The impedance seen at the primary when a load Z_L is on the secondary is…", options: [
      "Z_L", "a·Z_L", "a²·Z_L", "Z_L/a"],
      answer: 2, hint: "Turns ratio squared.",
      explain: "Reflected impedance Z_p = a²·Z_L (a = N_p/N_s) — the basis of impedance matching." },
    { q: "A transformer will NOT operate on a steady DC supply because…", options: [
      "DC is too high a voltage", "it needs a changing (AC) flux to induce a secondary voltage",
      "the windings short out", "DC has too high a frequency"],
      answer: 1, hint: "Induction needs dΦ/dt.",
      explain: "Induced voltage depends on a CHANGING magnetic flux; steady DC gives constant flux → no secondary voltage." }
  ]
},

/* ========================== PULSE / RC ================================= */
{
  id: "pulse",
  title: "Pulse Waveforms & RC Response",
  subtitle: "Pulse parameters, duty cycle, RC transients, scope probes",
  notes: [
    { h: "Ideal vs actual pulse", points: [
      "Reactive elements prevent instantaneous voltage/current changes, so real pulse edges are sloped, not vertical.",
      "Rising/leading edge: goes from low to high (nearest t = 0). Falling/trailing edge: high to low, follows the leading edge."
    ]},
    { h: "Pulse parameters", points: [
      "Amplitude: usually the peak-to-peak value of the pulse.",
      "Pulse width t_p: measured at 50 % of the peak value.",
      "Base-line voltage: the level the pulse starts from. Positive-going rises above it; negative-going drops below it.",
      "Rise time t_r and fall time t_f: time to go between 10 % and 90 % of the amplitude.",
      "Tilt (droop/sag): drop in the top of the pulse — caused by poor LOW-frequency response.",
      "Overshoot, preshoot and ringing: caused by HIGH-frequency effects; ringing is L–C interaction at a natural frequency."
    ]},
    { h: "Pulse trains", points: [
      "Period T = time between identical points on successive pulses.",
      "Pulse repetition frequency prf (or prr) = 1/T, in Hz (pulses/second).",
      "Duty cycle = (t_p / T) × 100 % — the fraction of the period the pulse is 'on'.",
      "Average value = (duty cycle)·(peak value) + (1 − duty cycle)·(base-line voltage)."
    ]},
    { h: "RC transient response", points: [
      "General solution: v_C(t) = V_f + (V_i − V_f)·e^(−t/RC).  V_i = initial, V_f = final (steady-state) voltage.",
      "Time constant τ = R·C. After about 5τ the transient is essentially complete (steady state).",
      "At t = τ the capacitor has reached 63.2 % of its total change toward the final value.",
      "Charging current: i = (V_f − V_i)/R · e^(−t/RC); current is largest at the instant of switching."
    ]},
    { h: "Square-wave (R-C) response — 3 cases", points: [
      "Compare half-period (½T) with 5τ:",
      "• ½T ≫ 5τ: v_C nearly reaches the input each half-cycle; output resembles the square wave; sharp current spikes.",
      "• ½T = 5τ: v_C just reaches its final value before switching.",
      "• ½T ≪ 5τ: v_C can't reach final value; output is small and triangular-looking; reaches steady state after ~5 cycles.",
      "In steady state the average value of v_C equals the average value of the applied square wave."
    ]},
    { h: "Oscilloscope ×10 probe & compensation", points: [
      "A ×10 attenuator probe reduces the input by 10; with a 1 MΩ scope input it adds 9 MΩ (so 9 MΩ + 1 MΩ).",
      "Stray capacitance distorts fast edges, so a variable capacitor compensates the probe.",
      "Correct compensation when the probe and scope time constants match: R_p·C_p = R_s·C_s → flat, frequency-independent response.",
      "Adjust the trimmer on a known square wave until the corners are sharp (not rounded = under-, not peaked = over-compensated)."
    ]}
  ],
  quiz: [
    { q: "The pulse width t_p of a pulse is measured at…", options: [
      "10 % of the peak value", "50 % of the peak value", "90 % of the peak value", "the base-line"],
      answer: 1, hint: "Half the height.",
      explain: "Pulse width (duration) is defined at the 50 % amplitude level of the pulse." },
    { q: "Rise time and fall time are defined as the time to change between…", options: [
      "0 % and 100 %", "10 % and 90 % of amplitude", "25 % and 75 %", "50 % and 100 %"],
      answer: 1, hint: "Avoid the rounded corners at the extremes.",
      explain: "Because the corners round off, t_r and t_f are measured between the 10 % and 90 % levels." },
    { q: "'Tilt' (droop or sag) on the top of a pulse is caused by…", options: [
      "poor high-frequency response", "poor low-frequency response", "excess amplitude", "a short rise time"],
      answer: 1, hint: "It's a slow, low-frequency effect.",
      explain: "Tilt is a drop in the peak level due to poor LOW-frequency response of the system the pulse passed through." },
    { q: "Ringing on a pulse edge is caused by…", options: [
      "low-frequency droop", "interaction of L and C elements at their natural frequency", "the base-line voltage", "duty cycle being too small"],
      answer: 1, hint: "A high-frequency, resonant effect.",
      explain: "Ringing is an L–C interaction at a natural/resonant frequency — a high-frequency effect, along with overshoot/preshoot." },
    { q: "The duty cycle of a pulse train is…", options: [
      "T / t_p × 100 %", "t_p / T × 100 %", "1 / T", "t_p × T"],
      answer: 1, hint: "On-time over the whole period.",
      explain: "Duty cycle = (t_p/T) × 100 % — the percentage of the period the pulse is 'on'." },
    { q: "Pulse repetition frequency (prf) equals…", options: [
      "1/T", "t_p/T", "T/t_p", "1/t_p"],
      answer: 0, hint: "Reciprocal of the period.",
      explain: "prf (or prr) = 1/T, in hertz (pulses per second); the pulse shape doesn't affect it." },
    { q: "In v_C(t) = V_f + (V_i − V_f)·e^(−t/RC), the time constant τ equals…", options: [
      "R/C", "R + C", "R·C", "1/(RC)"],
      answer: 2, hint: "Product of R and C.",
      explain: "τ = R·C (seconds). It sets how fast the capacitor charges/discharges." },
    { q: "A capacitor reaches about what fraction of its final voltage in one time constant?", options: [
      "37 %", "50 %", "63.2 %", "100 %"],
      answer: 2, hint: "1 − e⁻¹.",
      explain: "After one τ the capacitor has covered 63.2 % of its total change toward the final value." },
    { q: "After roughly how many time constants is an RC transient considered complete (steady state)?", options: [
      "1τ", "2τ", "5τ", "10τ"],
      answer: 2, hint: "Common rule of thumb.",
      explain: "After about 5τ the exponential has essentially settled, so the circuit is taken as being in steady state." },
    { q: "For a square wave driving an RC circuit, the output v_C looks most like a triangular wave when…", options: [
      "½T ≫ 5τ", "½T = 5τ", "½T ≪ 5τ (the period is short vs the time constant)", "the duty cycle is 50 %"],
      answer: 2, hint: "Capacitor never finishes charging.",
      explain: "When ½T ≪ 5τ the capacitor can't reach its final value, so v_C is small and roughly triangular." },
    { q: "An oscilloscope probe is 'correctly compensated' when…", options: [
      "the probe capacitance is as large as possible",
      "the probe and scope time constants match (R_pC_p = R_sC_s), giving a flat response",
      "the square wave shows large overshoot",
      "the corners are heavily rounded"],
      answer: 1, hint: "Matched time constants → frequency-independent.",
      explain: "Correct compensation matches the time constants (R_pC_p = R_sC_s); the displayed square wave then has sharp, flat corners." }
  ]
},

/* ===================== TRANSFER / FILTERS / BODE ====================== */
{
  id: "filters",
  title: "Decibels, Filters & Bode Plots",
  subtitle: "Logarithms, dB/dBm, LP/HP/BP/BS filters, cutoff, Bode plots",
  notes: [
    { h: "Logarithms (quick rules)", points: [
      "log(1) = 0; the log of a number < 1 is negative.",
      "log(a·b) = log a + log b;  log(a/b) = log a − log b;  log(aⁿ) = n·log a.",
      "Logs compress huge ranges — handy for frequency response and power/voltage levels."
    ]},
    { h: "Decibels", points: [
      "Power gain in decibels: R_dB = 10·log₁₀(P₂/P₁).",
      "Voltage gain in decibels: A_dB = 20·log₁₀(V₂/V₁) (the factor is 20, not 10).",
      "A 3 dB increase ≈ DOUBLING of power. A 6 dB increase ≈ DOUBLING of voltage.",
      "dBm: a power level referenced to 1 mW (commonly across 600 Ω): dBm = 10·log₁₀(P/1 mW).",
      "Cascaded stages: total gain in dB = sum of the individual stage gains in dB."
    ]},
    { h: "Filters — the four types", points: [
      "A filter selects or rejects a band of frequencies. Passive = R, L, C only (no power supply); active = also uses transistors/op-amps (needs power).",
      "Low-pass: passes low frequencies, rejects high. High-pass: passes high, rejects low.",
      "Band-pass: passes a band between two cutoffs (built from a low-pass + high-pass in CASCADE).",
      "Band-stop (notch): rejects a band (built from low-pass + high-pass in PARALLEL)."
    ]},
    { h: "Cutoff (critical) frequency", points: [
      "Cutoff f_c is where the output falls to 0.707 of maximum = −3 dB (half power).",
      "For a simple RC filter: f_c = 1/(2πRC).",
      "Low-pass at f_c: output LAGS input by 45°. High-pass at f_c: output LEADS input by 45°.",
      "Any frequency 'in the pass-band' passes with at least 70.7 % (0.707) of the maximum output."
    ]},
    { h: "Bode plots", points: [
      "A Bode plot is the magnitude (dB) and/or phase vs frequency, drawn with straight-line (asymptotic) segments.",
      "Roll-off of a single RC section: ±20 dB per decade = ±6 dB per octave.",
      "Octave = a 2:1 frequency ratio; decade = a 10:1 frequency ratio.",
      "The asymptotes meet at f_c; the real curve is 3 dB away from the corner at f_c (and 1 dB off at f_c/2 and 2f_c).",
      "Phase asymptotes: a single section swings over 90°, passing through 45° at f_c."
    ]}
  ],
  quiz: [
    { q: "Power gain expressed in decibels is…", options: [
      "20·log₁₀(P₂/P₁)", "10·log₁₀(P₂/P₁)", "log₁₀(P₂/P₁)", "P₂/P₁"],
      answer: 1, hint: "Power uses the factor 10.",
      explain: "For power, dB = 10·log₁₀(P₂/P₁). (Voltage uses 20·log.)" },
    { q: "Voltage gain in decibels is…", options: [
      "10·log₁₀(V₂/V₁)", "20·log₁₀(V₂/V₁)", "log₁₀(V₂/V₁)", "V₂/V₁"],
      answer: 1, hint: "Voltage uses the factor 20.",
      explain: "A_dB = 20·log₁₀(V₂/V₁); the 20 comes from power ∝ V², so log V² = 2·log V." },
    { q: "A 3 dB increase in a power level corresponds to…", options: [
      "no change", "halving the power", "doubling the power", "ten times the power"],
      answer: 2, hint: "3 dB is the classic 'double power' figure.",
      explain: "+3 dB ≈ ×2 power. (For voltage, doubling is +6 dB.)" },
    { q: "The reference power for the dBm scale is…", options: [
      "1 W", "1 mW", "1 µW", "600 W"],
      answer: 1, hint: "Milliwatt reference (often across 600 Ω).",
      explain: "dBm is referenced to 1 mW: dBm = 10·log₁₀(P/1 mW), commonly across a 600 Ω line." },
    { q: "The cutoff (critical) frequency of a filter is where the output drops to…", options: [
      "0.5 of maximum (−6 dB)", "0.707 of maximum (−3 dB)", "0.1 of maximum", "zero"],
      answer: 1, hint: "Half-power point.",
      explain: "At f_c the output is 0.707 × maximum, i.e. −3 dB (half power)." },
    { q: "For a simple RC filter the cutoff frequency is…", options: [
      "f_c = 2πRC", "f_c = 1/(2πRC)", "f_c = RC", "f_c = 1/(RC)"],
      answer: 1, hint: "One over 2π R C.",
      explain: "f_c = 1/(2πRC) for a first-order RC low-pass or high-pass filter." },
    { q: "A LOW-pass filter…", options: [
      "passes high frequencies and blocks low ones",
      "passes low frequencies and blocks high ones",
      "passes a narrow band only",
      "rejects a narrow band only"],
      answer: 1, hint: "The name says which frequencies pass.",
      explain: "A low-pass filter passes low frequencies and attenuates those above its cutoff." },
    { q: "At the cutoff frequency of a simple high-pass filter, the output…", options: [
      "lags the input by 45°", "leads the input by 45°", "is in phase with the input", "is 90° out of phase"],
      answer: 1, hint: "High-pass = leading phase.",
      explain: "At f_c a high-pass RC filter's output leads the input by 45° (a low-pass lags by 45°)." },
    { q: "A band-pass filter can be built from a low-pass and a high-pass filter connected…", options: [
      "in parallel", "in cascade (series)", "back-to-back as a bridge", "with a transformer"],
      answer: 1, hint: "One after the other.",
      explain: "Cascading a low-pass and a high-pass (with overlapping pass region) gives a band-pass; a PARALLEL arrangement gives a band-STOP." },
    { q: "On a Bode plot, the roll-off of a single RC section is…", options: [
      "20 dB per octave", "6 dB per decade", "20 dB per decade (= 6 dB per octave)", "3 dB per decade"],
      answer: 2, hint: "Per decade it's 20; per octave it's 6.",
      explain: "A first-order section rolls off at 20 dB/decade, which is the same as 6 dB/octave." },
    { q: "Two frequencies in a 10:1 ratio are said to be…", options: [
      "an octave apart", "a decade apart", "at resonance", "in phase"],
      answer: 1, hint: "Factor of ten.",
      explain: "A 10:1 ratio = one decade; a 2:1 ratio = one octave." },
    { q: "At the corner frequency f_c, the actual response differs from the idealised straight-line Bode asymptotes by…", options: [
      "0 dB", "1 dB", "3 dB", "6 dB"],
      answer: 2, hint: "Same as the half-power figure.",
      explain: "The real curve is 3 dB below the corner of the asymptotes at f_c (and about 1 dB off at f_c/2 and 2f_c)." }
  ]
}
];

/* ============================================================================
   NUMERIC PROBLEM-SOLVING questions (calculation practice).
   Same shape as concept questions; explanations show the worked solution.
   Attached to each lecture as `.calc`.
   ========================================================================== */
const CALC = {
  l1: [
    { q: "A 12 V supply is connected across a 4 Ω resistor. What current flows?",
      options:["3 A","48 A","0.33 A","16 A"], answer:0,
      hint:"Ohm's law: I = V/R.",
      explain:"I = V/R = 12 V / 4 Ω = 3 A." },
    { q: "A current of 2 A flows through a 10 Ω resistor. Power dissipated?",
      options:["40 W","20 W","5 W","400 W"], answer:0,
      hint:"P = I²R.",
      explain:"P = I²R = (2)² × 10 = 4 × 10 = 40 W." },
    { q: "12 V appears across a 6 Ω resistor. How much power is dissipated?",
      options:["24 W","2 W","72 W","144 W"], answer:0,
      hint:"P = V²/R.",
      explain:"P = V²/R = (12)² / 6 = 144 / 6 = 24 W." },
    { q: "A resistor has R = 25 Ω. What is its conductance?",
      options:["0.04 S","25 S","250 S","0.4 S"], answer:0,
      hint:"G = 1/R.",
      explain:"G = 1/R = 1/25 = 0.04 siemens." },
    { q: "A 100 W lamp runs for 2 hours. Energy used (in kWh)?",
      options:["0.2 kWh","200 kWh","2 kWh","50 kWh"], answer:0,
      hint:"Energy = power × time; convert W to kW.",
      explain:"W = P·t = 0.1 kW × 2 h = 0.2 kWh." },
    { q: "0.5 A flows through a 220 Ω resistor. Voltage across it?",
      options:["110 V","440 V","0.0023 V","220 V"], answer:0,
      hint:"V = I·R.",
      explain:"V = I·R = 0.5 × 220 = 110 V." }
  ],
  l2: [
    { q: "Two 6 Ω resistors are connected in parallel. Total resistance?",
      options:["3 Ω","12 Ω","6 Ω","1.5 Ω"], answer:0,
      hint:"Equal parallel resistors: R/n.",
      explain:"R_T = R₁R₂/(R₁+R₂) = (6×6)/12 = 3 Ω (half of one, since they're equal)." },
    { q: "Resistors of 10 Ω, 20 Ω and 30 Ω are in series. Total resistance?",
      options:["60 Ω","5.45 Ω","30 Ω","20 Ω"], answer:0,
      hint:"Series resistances add.",
      explain:"R_T = 10 + 20 + 30 = 60 Ω." },
    { q: "20 V is applied across 2 kΩ in series with 3 kΩ. Voltage across the 3 kΩ?",
      options:["12 V","8 V","20 V","6 V"], answer:0,
      hint:"VDR: V_x = (R_x/R_T)·E.",
      explain:"V = (3k / 5k) × 20 = 0.6 × 20 = 12 V." },
    { q: "A 10 Ω and a 40 Ω resistor are in parallel. Total resistance?",
      options:["8 Ω","50 Ω","25 Ω","4 Ω"], answer:0,
      hint:"Product over sum.",
      explain:"R_T = (10×40)/(10+40) = 400/50 = 8 Ω." },
    { q: "6 A enters a 2 Ω resistor in parallel with a 4 Ω resistor. Current in the 2 Ω branch?",
      options:["4 A","2 A","6 A","3 A"], answer:0,
      hint:"CDR: I₁ = (R₂/(R₁+R₂))·I_T — smaller R takes more current.",
      explain:"I(2Ω) = I_T · R_other/(R₁+R₂) = 6 × 4/6 = 4 A." },
    { q: "A practical source is 10 V in series with 5 Ω. Equivalent current source value?",
      options:["2 A","50 A","0.5 A","10 A"], answer:0,
      hint:"Source conversion: I = E/R_s.",
      explain:"I = E/R_s = 10/5 = 2 A (in parallel with the same 5 Ω)." }
  ],
  l3: [
    { q: "Energy stored in a 100 µF capacitor charged to 10 V?",
      options:["5 mJ","10 mJ","50 mJ","0.5 mJ"], answer:0,
      hint:"W = ½CV².",
      explain:"W = ½CV² = ½ × 100×10⁻⁶ × (10)² = ½ × 100×10⁻⁶ × 100 = 5×10⁻³ = 5 mJ." },
    { q: "A capacitor holds 2 µC at 4 V. What is its capacitance?",
      options:["0.5 µF","8 µF","2 µF","0.25 µF"], answer:0,
      hint:"C = Q/V.",
      explain:"C = Q/V = 2 µC / 4 V = 0.5 µF." },
    { q: "Energy stored in a 2 H inductor carrying 3 A?",
      options:["9 J","6 J","18 J","3 J"], answer:0,
      hint:"W = ½LI².",
      explain:"W = ½LI² = ½ × 2 × (3)² = ½ × 2 × 9 = 9 J." },
    { q: "A 10 µF capacitor stores 50 µC of charge. Voltage across it?",
      options:["5 V","500 V","0.2 V","50 V"], answer:0,
      hint:"V = Q/C.",
      explain:"V = Q/C = 50 µC / 10 µF = 5 V." },
    { q: "Current through a 2 H inductor changes at 3 A/s. Induced voltage?",
      options:["6 V","0.67 V","1.5 V","5 V"], answer:0,
      hint:"v = L·di/dt.",
      explain:"v = L·di/dt = 2 × 3 = 6 V." }
  ],
  l4: [
    { q: "A waveform has a period of 20 ms. Its frequency is?",
      options:["50 Hz","20 Hz","0.05 Hz","2000 Hz"], answer:0,
      hint:"f = 1/T.",
      explain:"f = 1/T = 1 / 0.020 s = 50 Hz." },
    { q: "For a 60 Hz sine wave, the angular frequency ω is?",
      options:["377 rad/s","60 rad/s","6.28 rad/s","9.55 rad/s"], answer:0,
      hint:"ω = 2πf.",
      explain:"ω = 2πf = 2π × 60 ≈ 377 rad/s." },
    { q: "A sine wave has a peak of 170 V. Its RMS value is approximately?",
      options:["120 V","240 V","170 V","85 V"], answer:0,
      hint:"V_rms = 0.707 × E_m.",
      explain:"V_rms = 0.707 × 170 ≈ 120 V (this is how 120 V mains has a 170 V peak)." },
    { q: "An AC supply is 230 V RMS. Its peak value is approximately?",
      options:["325 V","163 V","460 V","230 V"], answer:0,
      hint:"E_m = √2 × V_rms.",
      explain:"E_m = 1.414 × 230 ≈ 325 V." },
    { q: "A 1 kHz sine wave has a period of?",
      options:["1 ms","1 µs","1000 s","0.5 ms"], answer:0,
      hint:"T = 1/f.",
      explain:"T = 1/f = 1/1000 = 1 ms." },
    { q: "A sinusoid has a peak amplitude of 10 V. Its peak-to-peak value is?",
      options:["20 V","10 V","7.07 V","5 V"], answer:0,
      hint:"Peak-to-peak = 2 × peak.",
      explain:"V_pp = 2 × E_m = 2 × 10 = 20 V." }
  ],
  l5: [
    { q: "A 10 mH inductor at 1 kHz. Inductive reactance X_L?",
      options:["≈ 62.8 Ω","≈ 6.28 Ω","≈ 628 Ω","≈ 0.628 Ω"], answer:0,
      hint:"X_L = 2πfL.",
      explain:"X_L = 2πfL = 2π × 1000 × 0.010 ≈ 62.8 Ω." },
    { q: "A 1 µF capacitor at 1 kHz. Capacitive reactance X_C?",
      options:["≈ 159 Ω","≈ 6283 Ω","≈ 1.59 Ω","≈ 15.9 Ω"], answer:0,
      hint:"X_C = 1/(2πfC).",
      explain:"X_C = 1/(2π × 1000 × 1×10⁻⁶) ≈ 159 Ω." },
    { q: "At DC (f = 0), the reactance of an ideal inductor is?",
      options:["0 Ω (a short)","infinite","equal to R","2πL"], answer:0,
      hint:"X_L = 2πfL with f = 0.",
      explain:"X_L = 2π(0)L = 0 Ω — at DC the inductor looks like a short circuit." },
    { q: "Voltage and current are 60° apart in a load. Power factor?",
      options:["0.5","0.866","1","0"], answer:0,
      hint:"Fp = cos θ.",
      explain:"Fp = cos 60° = 0.5." },
    { q: "V = 100 V, I = 2 A, phase angle θ = 60°. Average (real) power?",
      options:["100 W","200 W","173 W","0 W"], answer:0,
      hint:"P = VI·cos θ.",
      explain:"P = VI cos θ = 100 × 2 × cos 60° = 200 × 0.5 = 100 W." }
  ],
  l6: [
    { q: "A load draws 5 A at 120 V. Apparent power S?",
      options:["600 VA","600 W","24 VA","125 VA"], answer:0,
      hint:"S = V·I (units VA).",
      explain:"S = VI = 120 × 5 = 600 VA." },
    { q: "Apparent power is 600 VA and the power factor is 0.8. Real power P?",
      options:["480 W","600 W","360 W","750 W"], answer:0,
      hint:"P = S·cos θ.",
      explain:"P = S × Fp = 600 × 0.8 = 480 W." },
    { q: "With S = 600 VA and P = 480 W, the reactive power Q is?",
      options:["360 VAR","120 VAR","1080 VAR","480 VAR"], answer:0,
      hint:"Power triangle: Q = √(S² − P²).",
      explain:"Q = √(600² − 480²) = √(360000 − 230400) = √129600 = 360 VAR." },
    { q: "A circuit uses 800 W of real power with 1000 VA apparent. Power factor?",
      options:["0.8","1.25","0.6","8"], answer:0,
      hint:"Fp = P/S.",
      explain:"Fp = P/S = 800/1000 = 0.8 (lagging or leading depending on the load)." },
    { q: "Reactive power consumed by a purely resistive load is?",
      options:["0 VAR","equal to P","equal to S","maximum"], answer:0,
      hint:"θ = 0, so sin θ = 0.",
      explain:"Q = VI sin θ = VI sin 0° = 0 VAR — a resistor consumes only real power." }
  ],
  l7: [
    { q: "L = 1 mH and C = 1 µF. Resonant frequency f_s?",
      options:["≈ 5.03 kHz","≈ 1.59 kHz","≈ 31.8 kHz","≈ 503 Hz"], answer:0,
      hint:"f_s = 1/(2π√(LC)).",
      explain:"√(LC) = √(10⁻³ × 10⁻⁶) = √(10⁻⁹) ≈ 3.16×10⁻⁵. f_s = 1/(2π × 3.16×10⁻⁵) ≈ 5.03 kHz." },
    { q: "At resonance X_L = 500 Ω and R = 10 Ω. Quality factor Q_s?",
      options:["50","5000","0.02","510"], answer:0,
      hint:"Q_s = X_L/R.",
      explain:"Q_s = X_L/R = 500/10 = 50." },
    { q: "A resonant circuit has f_s = 10 kHz and Q = 50. Bandwidth?",
      options:["200 Hz","500 kHz","2 kHz","50 Hz"], answer:0,
      hint:"BW = f_s/Q.",
      explain:"BW = f_s/Q = 10 000 / 50 = 200 Hz." },
    { q: "A transformer has N_p/N_s = 10 and 120 V on the primary. Secondary voltage?",
      options:["12 V","1200 V","120 V","10 V"], answer:0,
      hint:"V_s = V_p × N_s/N_p.",
      explain:"V_s = V_p × (N_s/N_p) = 120 × (1/10) = 12 V (step-down)." },
    { q: "An ideal transformer: 120 V / 1 A on the primary, 12 V secondary. Secondary current?",
      options:["10 A","1 A","0.1 A","120 A"], answer:0,
      hint:"Power in = power out: V_pI_p = V_sI_s.",
      explain:"I_s = V_pI_p / V_s = (120×1)/12 = 10 A." },
    { q: "Turns ratio a = 10 and the load is 8 Ω. Impedance seen at the primary?",
      options:["800 Ω","80 Ω","8 Ω","0.08 Ω"], answer:0,
      hint:"Z_p = a²·Z_L.",
      explain:"Z_p = a²Z_L = (10)² × 8 = 100 × 8 = 800 Ω." }
  ],
  pulse: [
    { q: "R = 5 kΩ and C = 10 nF. Time constant τ?",
      options:["50 µs","5 µs","500 µs","0.5 ms"], answer:0,
      hint:"τ = R·C.",
      explain:"τ = RC = 5000 × 10×10⁻⁹ = 50×10⁻⁶ s = 50 µs." },
    { q: "A pulse has t_p = 2 µs in a period T = 10 µs. Duty cycle?",
      options:["20%","50%","5%","200%"], answer:0,
      hint:"Duty = (t_p/T) × 100%.",
      explain:"Duty cycle = (2/10) × 100% = 20%." },
    { q: "A pulse train has period T = 25 µs. Pulse repetition frequency?",
      options:["40 kHz","25 kHz","40 Hz","4 kHz"], answer:0,
      hint:"prf = 1/T.",
      explain:"prf = 1/T = 1/(25×10⁻⁶) = 40 000 Hz = 40 kHz." },
    { q: "With τ = 50 µs, the RC circuit is taken as steady-state after about?",
      options:["250 µs","50 µs","500 µs","5 µs"], answer:0,
      hint:"Steady state ≈ 5τ.",
      explain:"5τ = 5 × 50 µs = 250 µs." },
    { q: "A capacitor charges from 0 V toward 10 V. Voltage after one time constant?",
      options:["6.32 V","3.68 V","10 V","5 V"], answer:0,
      hint:"After 1τ it reaches 63.2% of the final value.",
      explain:"v_C(τ) = 0.632 × 10 = 6.32 V." },
    { q: "A pulse has 20% duty cycle, 5 V peak, 0 V base-line. Average value?",
      options:["1 V","5 V","0.2 V","2.5 V"], answer:0,
      hint:"V_av = duty × peak + (1−duty) × base-line.",
      explain:"V_av = 0.2 × 5 + 0.8 × 0 = 1 V." }
  ],
  filters: [
    { q: "An RC filter has R = 5 kΩ and C = 1 nF. Cutoff frequency f_c?",
      options:["≈ 31.8 kHz","≈ 3.18 kHz","≈ 318 kHz","≈ 5 kHz"], answer:0,
      hint:"f_c = 1/(2πRC).",
      explain:"f_c = 1/(2π × 5000 × 1×10⁻⁹) = 1/(3.14×10⁻⁵) ≈ 31.8 kHz." },
    { q: "A voltage gain V₂/V₁ = 10. Expressed in decibels?",
      options:["20 dB","10 dB","100 dB","6 dB"], answer:0,
      hint:"Voltage dB = 20·log₁₀(ratio).",
      explain:"20·log₁₀(10) = 20 × 1 = 20 dB." },
    { q: "A power ratio P₂/P₁ = 100. Expressed in decibels?",
      options:["20 dB","100 dB","40 dB","10 dB"], answer:0,
      hint:"Power dB = 10·log₁₀(ratio).",
      explain:"10·log₁₀(100) = 10 × 2 = 20 dB." },
    { q: "A filter's maximum output is 10 V. Output level at the cutoff frequency?",
      options:["7.07 V","5 V","3 V","10 V"], answer:0,
      hint:"At f_c output = 0.707 × max (−3 dB).",
      explain:"V(f_c) = 0.707 × 10 = 7.07 V." },
    { q: "A single RC section rolls off at 20 dB/decade. Drop over two decades?",
      options:["40 dB","20 dB","6 dB","12 dB"], answer:0,
      hint:"Multiply the per-decade rate by the number of decades.",
      explain:"2 decades × 20 dB/decade = 40 dB." },
    { q: "An amplifier has a voltage gain of 1000. In decibels?",
      options:["60 dB","30 dB","1000 dB","20 dB"], answer:0,
      hint:"20·log₁₀(1000).",
      explain:"20·log₁₀(1000) = 20 × 3 = 60 dB." }
  ]
};
LECTURES.forEach(l => { l.calc = CALC[l.id] || []; l.group = l.group || "lecture"; });

/* ============================================================================
   PAST EXAMS — reconstructed from the real questions on previous papers.
   Student "answer banks" were unreliable (and full of jokes/profanity), so
   every answer and explanation here has been written/verified from scratch.
   ========================================================================== */
const EXAMS = [
{
  id: "exam1",
  title: "Exam 1 · Past paper",
  subtitle: "Concept questions reconstructed from a previous Exam 1 (clean answers)",
  notes: [
    { h: "About this past paper", points: [
      "These are the genuine concept questions that appeared on a previous Exam 1, rewritten clearly.",
      "Answers and explanations were written from scratch and verified — the original student 'answer bank' was unreliable.",
      "Topic mix: fundamentals, network theorems, capacitors/inductors, AC, resonance, three-phase, decibels.",
      "Treat it as a realistic dry-run: read the question, commit to an answer, then check the explanation."
    ]}
  ],
  quiz: [
    { q:"The magnitude of the line voltage of a Y-connected (star) generator is…",
      options:["√3 (≈1.73) times the phase voltage","equal to the phase voltage","half the phase voltage","3 times the phase voltage"], answer:0,
      hint:"Star connection factor.", explain:"For a Y connection, V_line = √3 · V_phase ≈ 1.73 · V_phase." },
    { q:"A 'balanced load' in a three-phase system means…",
      options:["the three load impedances are equal (Z₁ = Z₂ = Z₃)","all line currents are zero","the neutral carries maximum current","the source is disconnected"], answer:0,
      hint:"Equal impedances.", explain:"Balanced load: Z₁ = Z₂ = Z₃, so the three phase currents are equal in magnitude and 120° apart." },
    { q:"Why is the phase sequence important in a three-phase system?",
      options:["it determines the direction of rotation of three-phase motors","it sets the supply frequency","it has no practical effect","it determines the wire colour"], answer:0,
      hint:"Think induction motors.", explain:"Interchanging two phases reverses the phase sequence, which reverses a three-phase motor's direction of rotation." },
    { q:"'The algebraic sum of the currents entering and leaving a junction is zero.' This is…",
      options:["Kirchhoff's Current Law (KCL)","Kirchhoff's Voltage Law","Ohm's law","Thévenin's theorem"], answer:0,
      hint:"Currents at a node.", explain:"That statement is Kirchhoff's Current Law — conservation of charge at a node." },
    { q:"In the s-domain (Laplace), a capacitor is described by…",
      options:["V(s) = (1/sC)·I(s) + v(0)/s","V(s) = sC·I(s)","V(s) = R·I(s)","V(s) = sL·I(s)"], answer:0,
      hint:"Includes the initial condition v(0).", explain:"V(s) = (1/sC)·I(s) + v(0)/s — the 1/sC is the capacitive impedance and v(0)/s carries the initial voltage." },
    { q:"By definition, the electric field strength is…",
      options:["force per unit charge, E = F/Q","charge per unit area","voltage × current","½CV²"], answer:0,
      hint:"Force on a test charge.", explain:"Electric field strength E = F/Q — the force experienced per unit positive charge (V/m)." },
    { q:"The cut-off (critical) frequency of an RC filter is…",
      options:["f_c = 1/(2πRC)","f_c = 2πRC","f_c = RC","f_c = 1/(RC)"], answer:0,
      hint:"One over 2π R C.", explain:"f_c = 1/(2πRC), the −3 dB (0.707) point." },
    { q:"The energy stored by an inductor is…",
      options:["W = ½LI²","W = ½CV²","W = LI","W = I²R"], answer:0,
      hint:"Magnetic-field energy.", explain:"W = ½LI² joules, stored in the magnetic field." },
    { q:"Which property of logarithms is true?",
      options:["log(a·b) = log a + log b","log(a·b) = log a · log b","log(a+b) = log a + log b","log(a/b) = log a · log b"], answer:0,
      hint:"Product → sum.", explain:"log(a·b) = log a + log b; and log(a/b) = log a − log b." },
    { q:"By the maximum power transfer theorem (AC), maximum power reaches the load when its impedance is…",
      options:["the complex conjugate of the Thévenin impedance (Z_L = Z_Th*)","zero","infinite","purely inductive"], answer:0,
      hint:"Conjugate match.", explain:"For AC, Z_L = Z_Th* (same resistance, opposite reactance) delivers maximum power." },
    { q:"The time constant of an R-L circuit is…",
      options:["τ = L/R","τ = R/L","τ = RC","τ = RL"], answer:0,
      hint:"Inductance over resistance.", explain:"τ = L/R seconds for an R-L circuit (compare τ = RC for R-C)." },
    { q:"The resonant condition of an RLC circuit is…",
      options:["X_L = X_C","R = X_L","X_C = 2R","X_L = 0"], answer:0,
      hint:"Reactances cancel.", explain:"At resonance X_L = X_C, so the reactances cancel and the circuit is purely resistive." },
    { q:"For an ideal capacitor, the energy dissipated when a voltage is applied is…",
      options:["zero — an ideal capacitor dissipates no energy","½CV²","equal to the stored energy","maximum at t = 0"], answer:0,
      hint:"It stores, it doesn't burn.", explain:"An ideal capacitor only stores and returns energy; it dissipates 0 W (no resistance)." },
    { q:"Convert 0.0047 µF to picofarads (pF).",
      options:["4700 pF","47 pF","470 000 pF","0.47 pF"], answer:0,
      hint:"µF → pF is ×10⁶.", explain:"0.0047 µF = 4.7 nF = 0.0047 × 10⁶ pF = 4700 pF." },
    { q:"For the charging phase of an R-C network, the current i_C is…",
      options:["i_C = (E/R)·e^(−t/RC)","i_C = (E/R)·(1 − e^(−t/RC))","i_C = E·R·e^(−t/RC)","i_C = E/R, constant"], answer:0,
      hint:"Starts at E/R, decays.", explain:"Charging current starts at its peak E/R and decays: i_C = (E/R)·e^(−t/RC)." },
    { q:"How many electrons pass through a wire in 1 second to give a current of 1 ampere?",
      options:["6.242 × 10¹⁸","1.6 × 10⁻¹⁹","9 × 10⁹","6.022 × 10²³"], answer:0,
      hint:"1 C ÷ electron charge.", explain:"1 A = 1 C/s, and 1 C = 1/(1.6×10⁻¹⁹) ≈ 6.242 × 10¹⁸ electrons." },
    { q:"'The current/voltage in any element equals the algebraic sum of the contributions of each source acting alone.' This is…",
      options:["the Superposition theorem","Thévenin's theorem","KCL","the maximum power transfer theorem"], answer:0,
      hint:"One source at a time.", explain:"That is Superposition — valid for linear networks." },
    { q:"The definition of 1 volt is…",
      options:["1 volt = 1 joule per coulomb (J/C)","1 volt = 1 coulomb per second","1 volt = 1 ampere per ohm","1 volt = 1 watt per second"], answer:0,
      hint:"Energy per charge.", explain:"1 V = 1 J/C — one joule of work per coulomb of charge moved." },
    { q:"The relative permeability of diamagnetic materials is…",
      options:["slightly less than 1 (μ_r < 1)","much greater than 1","exactly 1","negative"], answer:0,
      hint:"They weakly oppose the field.", explain:"Diamagnetic materials have μ_r slightly less than 1 (ferromagnetic ≫ 1, paramagnetic just above 1)." },
    { q:"Moving a conductor through a magnetic field at right angles to the flux generates…",
      options:["an induced EMF (voltage)","a magnetic monopole","heat only","no effect"], answer:0,
      hint:"Faraday's law of induction.", explain:"Cutting magnetic flux lines induces an EMF (voltage) in the conductor." },
    { q:"When deactivated in a network theorem, an independent current source is replaced by…",
      options:["an open circuit","a short circuit","a 1 Ω resistor","a voltage source"], answer:0,
      hint:"Zero current = ?", explain:"Deactivated current source → open circuit (0 A); deactivated voltage source → short circuit (0 V)." },
    { q:"Coulomb's law for the force between charges Q₁ and Q₂ a distance r apart is…",
      options:["F = k·Q₁Q₂/r²","F = k·Q₁Q₂/r","F = k·Q₁Q₂·r²","F = k·(Q₁+Q₂)/r"], answer:0,
      hint:"Inverse-square.", explain:"F = k·Q₁Q₂/r² with k = 9×10⁹ N·m²/C²." },
    { q:"Reactive power Q is best described as…",
      options:["the power alternately stored and returned by L and C (Q = VI·sin θ)","the power dissipated as heat","always zero","identical to apparent power"], answer:0,
      hint:"It shuttles, it doesn't burn.", explain:"Reactive power Q = VI·sin θ (VAR) is exchanged with reactive elements, not consumed." },
    { q:"The maximum value of a waveform measured from its average (mean) value is called…",
      options:["the peak amplitude","the RMS value","the period","the average value"], answer:0,
      hint:"Crest above the mean.", explain:"That is the peak amplitude (peak value) of the waveform." },
    { q:"At the instant charging begins, an initially uncharged capacitor behaves like…",
      options:["a short circuit","an open circuit","a constant voltage source","an inductor"], answer:0,
      hint:"v_C starts at 0 and can't jump.", explain:"Starting from 0 V (and unable to change instantly), the capacitor momentarily acts as a short circuit; fully charged it acts as an open circuit." },
    { q:"Which expression does NOT represent the magnitude of average power for a sinusoid?",
      options:["P = VI·sin θ","P = VI·cos θ","P = I²·R","P = V²_rms/R"], answer:0,
      hint:"sin θ belongs to which power?", explain:"VI·sin θ is REACTIVE power (Q), not average (real) power. Average power uses cos θ." },
    { q:"The phase relationship between voltage and current for an inductor is…",
      options:["voltage leads current by 90°","current leads voltage by 90°","they are in phase","they are 180° apart"], answer:0,
      hint:"ELI the ICE man.", explain:"In an inductor (L) voltage leads current by 90° — the 'ELI' part of 'ELI the ICE man'." }
  ]
},
{
  id: "exam2",
  title: "Exam 2 · Past paper",
  subtitle: "Concept questions reconstructed from a previous Exam 2 (clean answers)",
  notes: [
    { h: "About this past paper", points: [
      "Genuine concept questions from a previous Exam 2 — rewritten clearly, with verified answers.",
      "Exam 2 ranges wider: three-phase, Laplace/transfer functions, pulse & RC, decibels/filters/Bode, two-port networks and transmission lines.",
      "A few of these topics go beyond the core lectures — they're included so the past paper is complete.",
      "Mascot: this paper is where Template-Chan comes from (see the dashboard). 📋"
    ]}
  ],
  quiz: [
    { q:"In a three-phase generator, the voltages induced across the three coils are…",
      options:["equal in magnitude and 120° out of phase","equal in magnitude and in phase","different magnitudes, 90° apart","all zero"], answer:0,
      hint:"Symmetric three-phase set.", explain:"The three coil EMFs are equal in magnitude and separated by 120°." },
    { q:"At any instant, the algebraic sum of the three (balanced) phase voltages equals…",
      options:["zero","1.73 V","the line voltage","the peak voltage"], answer:0,
      hint:"Three vectors 120° apart.", explain:"For a balanced set the three phase voltages sum to zero at every instant." },
    { q:"For a balanced load in a Y-Y connection, the neutral wire is…",
      options:["not necessary (it carries no current)","the main current path","required for safety only","carrying the largest current"], answer:0,
      hint:"Balanced → neutral current = 0.", explain:"With a balanced load the three currents sum to zero, so the neutral carries no current and is not strictly necessary." },
    { q:"The Aron (two-wattmeter) configuration is used for…",
      options:["measuring power in a three-phase system","measuring frequency","measuring inductance","generating three phases"], answer:0,
      hint:"Two wattmeters.", explain:"The two-wattmeter (Aron) method measures total three-phase power (real, and reactive when balanced)." },
    { q:"The Laplace transform can be applied to functions f(t) that satisfy…",
      options:["f(t) = 0 for t < 0","f(t) is periodic","f(t) is always negative","f(t) → ∞"], answer:0,
      hint:"Causal signals.", explain:"The (one-sided) Laplace transform assumes f(t) = 0 for t < 0 — a causal function." },
    { q:"In F(s) = P(s)/Q(s), the roots of the numerator P(s) are called the…",
      options:["zeros of F(s)","poles of F(s)","residues of F(s)","time constants"], answer:0,
      hint:"Numerator → makes F = 0.", explain:"Roots of the numerator are the zeros; roots of the denominator Q(s) are the poles." },
    { q:"To obtain a transfer function, all initial conditions are…",
      options:["set equal to zero","maximised","doubled","left unknown"], answer:0,
      hint:"Zero-state.", explain:"A transfer function is defined with all initial conditions set to zero (zero-state response)." },
    { q:"If a second-order transfer network is overdamped, its impulse response…",
      options:["decays without oscillation","oscillates forever","is a pure sine wave","is a unit step"], answer:0,
      hint:"Overdamped = sluggish, no ringing.", explain:"Overdamped systems have two real poles → the response decays exponentially with no oscillation." },
    { q:"Rise time is defined as the time for the signal to increase from…",
      options:["10% to 90% of amplitude","0% to 100%","50% to 100%","25% to 75%"], answer:0,
      hint:"Avoid the rounded corners.", explain:"Rise time t_r is measured between the 10% and 90% amplitude levels." },
    { q:"With the approximation t = 5RC and V_initial = 0, the steady-state error in an RC circuit is…",
      options:["less than 1% (≈0.7%)","about 10%","about 50%","exactly 0%"], answer:0,
      hint:"e⁻⁵ ≈ 0.0067.", explain:"After 5 time constants, e⁻⁵ ≈ 0.0067, so the remaining error is about 0.7% — less than 1%." },
    { q:"An oscilloscope probe is insensitive to frequency (correctly compensated) when…",
      options:["R_pC_p = R_sC_s (matched time constants)","R_p = R_s only","C_p = C_s only","R_p = C_s"], answer:0,
      hint:"Match the time constants.", explain:"Correct compensation requires R_pC_p = R_sC_s so the divider ratio is frequency-independent." },
    { q:"A waveform with odd (point) symmetry can be fully described by just…",
      options:["sine terms","cosine terms","a DC term","even harmonics"], answer:0,
      hint:"Odd function → odd basis.", explain:"Odd-symmetry (point-symmetric) waveforms contain only sine terms in their Fourier series." },
    { q:"A time shift in the time domain corresponds, in the frequency domain, to…",
      options:["a phase shift","a magnitude change","a change of frequency","no change at all"], answer:0,
      hint:"Shift theorem.", explain:"Delaying a signal in time multiplies its spectrum by e^(−jωt₀) — i.e. it adds a phase shift, leaving magnitude unchanged." },
    { q:"The ratio of two powers P₂/P₁ expressed in decibels is…",
      options:["10·log₁₀(P₂/P₁)","20·log₁₀(P₂/P₁)","log₁₀(P₂/P₁)","P₂/P₁"], answer:0,
      hint:"Power uses 10.", explain:"Power ratio in dB = 10·log₁₀(P₂/P₁). (Voltage ratio uses 20·log.)" },
    { q:"A power change of +3 dB means the power has…",
      options:["doubled (×2)","halved","increased ten-fold","stayed the same"], answer:0,
      hint:"3 dB ≈ ×2 power.", explain:"+3 dB corresponds to doubling the power level." },
    { q:"An RC circuit with the output taken across the capacitor acts as a…",
      options:["low-pass filter","high-pass filter","band-stop filter","oscillator"], answer:0,
      hint:"Capacitor shorts high frequencies.", explain:"Output across C: high frequencies are shorted to ground → it passes low frequencies (low-pass)." },
    { q:"The cut-off frequency of an RC filter is given by…",
      options:["f_c = 1/(2πRC)","f_c = 2πRC","f_c = RC","f_c = 1/(RC)"], answer:0,
      hint:"−3 dB point.", explain:"f_c = 1/(2πRC)." },
    { q:"Two frequencies separated by a 2:1 ratio are said to be…",
      options:["an octave apart","a decade apart","a bel apart","in phase"], answer:0,
      hint:"Factor of two.", explain:"A 2:1 ratio = one octave; a 10:1 ratio = one decade." },
    { q:"At f = f_c, the actual response curve compared with the idealized straight-line Bode plot is…",
      options:["3 dB below it","6 dB below it","exactly on it","20 dB below it"], answer:0,
      hint:"The half-power figure.", explain:"At the corner frequency the real curve sits 3 dB below the asymptotic Bode plot." },
    { q:"A two-port network is, by definition…",
      options:["a linear network with one input port and one output port","any non-linear amplifier","a single resistor","a three-terminal device only"], answer:0,
      hint:"Two ports = four terminals.", explain:"A two-port is a (usually linear) network with one input port and one output port (two terminal pairs)." },
    { q:"The admittance (Y) parameters of a two-port are also called…",
      options:["short-circuit parameters","open-circuit parameters","hybrid parameters","transmission parameters"], answer:0,
      hint:"Measured with ports shorted.", explain:"Y-parameters are the short-circuit parameters (Z-parameters are the open-circuit ones)." },
    { q:"Transmission-line theory must be used whenever…",
      options:["the line length is comparable to the signal wavelength","the voltage is high","the signal is DC","the wire is made of copper"], answer:0,
      hint:"Length vs wavelength.", explain:"Distributed (transmission-line) effects matter when the line length is a significant fraction of the wavelength." },
    { q:"For a matched transmission line, the load reflection coefficient Γ is…",
      options:["0","1","−1","infinite"], answer:0,
      hint:"No reflection from a matched load.", explain:"A matched load absorbs all incident power, so Γ = 0 and VSWR = 1. (The students' bank said 1 — that's wrong.)" },
    { q:"A short-circuited transmission line one quarter-wavelength (λ/4) long behaves like…",
      options:["an open circuit (parallel-resonant)","a short circuit","a pure resistor","a battery"], answer:0,
      hint:"λ/4 line inverts impedance.", explain:"A λ/4 line is an impedance inverter, so a shorted λ/4 stub looks like an open circuit at its input." },
    { q:"Which of the following is an even function?",
      options:["cosine","sine","tangent","a ramp (t)"], answer:0,
      hint:"f(−x) = f(x)?", explain:"cos(−x) = cos(x), so cosine is even; sine is odd." },
    { q:"The Laplace transform of the unit step function u(t) is…",
      options:["1/s","s","1","e^(−s)"], answer:0,
      hint:"Integral of e^(−st) from 0 to ∞.", explain:"L{u(t)} = 1/s." }
  ]
}
];
EXAMS.forEach(e => { e.calc = []; e.group = "exam"; });
LECTURES.push(...EXAMS);

/* ============================================================================
   GOON CORNER — 20 SFW, fully-dressed, original cute anime-girl ASCII portraits.
   (Just for fun. Nothing here is NSFW or a real/copyrighted character.)
   ========================================================================== */
const GOON = [
  { n:"Hina", a:"  ✿｡☆｡✿\n ( ◕   ◕ )\n (    ω   )\n  ╰~~~~╯" },
  { n:"Mika", a:"  ❀ ╱╲ ❀\n ( ^   ^ )\n (    ◡   )\n  ╰~~~~╯" },
  { n:"Yuki", a:"  ☆彡 彡☆\n ( •   • )\n (    ‿   )\n  ╰~~~~╯" },
  { n:"Rei",  a:"  ♪｡ﾟ｡♪\n ( ◔   ◔ )\n (    ε   )\n  ╰~~~~╯" },
  { n:"Aoi",  a:"  .~ ✦ ~.\n ( ◑   ◐ )\n (    ω   )\n  ╰~~~~╯" },
  { n:"Sora", a:"  ❉ ﹏ ❉\n ( ˘   ˘ )\n (    ᴗ   )\n  ╰~~~~╯" },
  { n:"Nana", a:"  ✾ ～ ✾\n ( ◠   ◠ )\n (    ▽   )\n  ╰~~~~╯" },
  { n:"Emi",  a:"  ★ ╮╭ ★\n ( ●   ● )\n (    ３   )\n  ╰~~~~╯" },
  { n:"Rin",  a:"  ♡ ～ ♡\n ( >   < )\n (    ◡   )\n  ╰~~~~╯" },
  { n:"Saki", a:"  ❄ ﹏ ❄\n ( ☆   ☆ )\n (    ω   )\n  ╰~~~~╯" },
  { n:"Mei",  a:"  ☘ ~ ☘\n ( ◕   ◔ )\n (    ‿   )  ~\n  ╰~~~~╯" },
  { n:"Yua",  a:"  ✧ ～～ ✧\n ( ´   ` )\n (    ▿   )\n  ╰~~~~╯" },
  { n:"Koko", a:"  ❀ ﹏ ❀\n ( ⚆   ⚆ )\n (    o   )\n  ╰~~~~╯" },
  { n:"Hana", a:"  ♬ ～ ♬\n ( ◉   ◉ )\n (    ‸   )\n  ╰~~~~╯" },
  { n:"Riko", a:"  ✿ ╱╲ ✿\n ( ＾   ＾ )\n (    ω   )\n  ╰~~~~╯" },
  { n:"Miu",  a:"  ☆ ～～ ☆\n ( ◝   ◜ )\n (    ◡   )\n  ╰~~~~╯" },
  { n:"Aya",  a:"  ✦｡ ｡✦\n ( ｡   ｡ )\n (    ～   )\n  ╰~~~~╯" },
  { n:"Chii", a:"  ❉ ～ ❉\n ( ¬   ¬ )\n (    ε   )\n  ╰~~~~╯" },
  { n:"Tama", a:"  ≧ ✿ ≦\n ( ◕   ◕ )\n (    ▽   )\n  ╰~~~~╯" },
  { n:"Nori", a:"  .✿ ～ ✿.\n ( ô   ô )\n (    ‿   )\n  ╰~~~~╯" }
];
