const L = require('/home/claude/notes_lib.js');
const {C,h1,h2,body,bullet,tnote,tip,compare,detail,infoBox,banner,glossary,fig,pageBreak,spacer,cover,build,linkBox} = L;
const k=[];

k.push(...cover("Therapeutic Interventions II (DPTH 6241)","Module 3: Electrotherapeutic Modalities",
 "Topic 3.1: Intro to Electrical Currents + Current for Muscle Contraction • Topic 3.2: Electrical Current for Pain Control • Topic 3.3: Electrical Currents for Soft Tissue Healing • Lectures by Dr. Jake Awruch",
 ["Watch the lectures in your own Canvas module — these notes condense them, they don't replace them",
  "★ Everything in this module runs off ONE figure: the strength-duration curve. Pulse duration picks the nerve fiber; amplitude gets you there; frequency decides what the response feels like",
  "Skills list: NMES/Russian stim · TENS/IFC · HVPC + iontophoresis. Midterm covers Modules 1–4"]));

/* ─────────────── TOPIC 3.1a: PRINCIPLES ─────────────── */
k.push(banner("TOPIC 3.1","Introduction to Electrical Currents"));
k.push(spacer());
k.push(infoBox("The perspective (Dr. Kyle Adams, South College)",["“You would only have to own ONE electrical stimulation machine if you could adjust all the parameters. Unfortunately, that doesn't happen — because it's not going to make as much money.” The parameters are the whole subject; the machine names are marketing on top of them."],C.gold,C.lightGold));
k.push(h1("1. What Electrical Stimulation Actually Does"));
k.push(bullet("Electrical current = **the flow of charged particles (electrons or ions)**; the therapeutic goal is to **depolarize nerve membranes and elicit an action potential**. Which nerve you depolarize determines what you get: muscle contraction, altered sensation, or pain modulation. Current needs **two electrodes** — the **anode** (positive) and **cathode** (negative)."));
k.push(compare("DIRECT CURRENT (DC)","ALTERNATING CURRENT (AC)",
 ["Stays on ONE side of the isoelectric line → produces a **net charge under the electrode**. That charge is the point when you want it: **iontophoresis** uses it to drive medication through skin, and **HVPC** uses polarity to push charged cells. In monophasic DC, **phase duration and pulse duration are the same thing**."],
 ["Flow reverses direction → **no net charge** under the electrodes. This is what **TENS, IFC, NMES, and Russian stim** all use. A biphasic pulse has two phases (one each side of the isoelectric line) — so four phases equals two pulses."],
 C.blue,C.teal,C.lightBlue,C.lightTeal));
k.push(bullet("**Pulse vs phase**: a **phase** runs from the start of flow until the flow changes direction; a **pulse** is the entire continuous flow regardless of crossing the line, until it stops or pauses. The **interpulse interval** is the gap between pulses (this is NOT the same as on/off time). Waveforms come as **monophasic, biphasic, or polyphasic**."));
k.push(h1("2. The Strength-Duration Curve ★ — the most important figure in the course"));
k.push(detail(["Pulse duration","Fiber targeted / clinical use"],[
 ["**50–80 μs**","**A-beta sensory fibers** → tingling, non-painful stimulus. **Conventional TENS and IFC** for pain control via gate control. Comfortable at the low end of duration with the frequency turned up"],
 ["**125–200 μs**","**Motor fibers, small muscles** — NMES/Russian. Wide separation from A-beta and A-delta here, so stimulating small muscles is usually comfortable"],
 ["**200–350 μs**","**Motor fibers, large muscles.** Necessary for big muscle groups but it drifts toward the A-delta fibers, which is why quad stim on a large athlete gets uncomfortable"],
 ["**150–300 μs**","**A-delta + muscle** → **acupuncture-like (low-rate) TENS**: brief sharp stimulus producing visible muscle twitches, working through endogenous opioid release"],
 ["**Milliseconds (far right)**","**Denervated muscle** can be stimulated here — but it only contracts while the current is on, and it does NOT drive reinnervation"]],[2200,7160]));
k.push(tnote("The curve is a best-case theoretical map — every patient has their own curve. Use it to get pointed the right direction, then let the patient's response tell you whether to adjust pulse duration or amplitude. And the general principle behind it: get as SPECIFIC as possible while staying as COMFORTABLE as possible."));
k.push(h1("3. Frequency, On/Off, Ramp, Amplitude"));
k.push(detail(["Parameter","Ranges and reasoning"],[
 ["**Frequency (pps or Hz)**","**2–10 pps** = slow pulses, muscle twitches (acupuncture-like feel) · **35–50 pps** = **tetanic contraction** (as low as 20 for small muscles, up to 80 for large — but higher fatigues faster) · **100–150 pps** = tingling for pain control. **Higher frequency = lower impedance = theoretically more comfortable + deeper penetration** — which is why home TENS units for all-day wear sit up in that range"],
 ["**On:off time**","The active treatment window vs the rest window — NOT the interpulse interval. Ratio drives the effect (strengthening needs long rests; edema pumping needs equal on:off)"],
 ["**Ramp up / ramp down**","Comfort, not treatment: lets sensory and motor fibers build to the target instead of snapping into a tetanic contraction. **Ramp time is not counted as active treatment time**"],
 ["**Amplitude (= intensity)**","Magnitude of current flow; adjust to patient response, remembering **accommodation** develops over time"]],[2400,6960]));
k.push(tip("When a patient says they can't feel it anymore, DON'T just turn the intensity up — that changes the treatment effect. Instead: use LARGER electrodes (↓current density), move electrodes FURTHER APART (↑depth, spreads effect), INCREASE frequency (↓impedance, more comfortable, deeper), or DECREASE pulse duration (moves you left on the curve). Modulating amplitude, pulse duration, or frequency is also how you fight accommodation deliberately. Turning the dial up and down is the tech-and-aide move; parameter reasoning is the DPT move."));
k.push(bullet("Two more principles: **orthodromic vs antidromic** — normal propagation runs distal→proximal in sensory nerves and proximal→distal in motor nerves, but injected current fires action potentials in **BOTH directions**, which is part of why an e-stim contraction is processed differently by the body than a voluntary one. And **current density** = current ÷ electrode size: smaller electrode concentrates the same current into less tissue, changing the sensation and raising burn risk."));

k.push(pageBreak());
/* ─────────────── TOPIC 3.1b: MUSCLE CONTRACTION ─────────────── */
k.push(banner("TOPIC 3.1 (cont.)","Electrical Current for Muscle Contraction — NMES and Russian"));
k.push(spacer());
k.push(infoBox("The perspective",["Although electrical stimulation can produce movement in denervated, paralyzed, or spastic muscle, it is **inherently less efficient than human movement**. It is an adjunct to exercise, a bridge before exercise is appropriate, or an option when exercise isn't — never a substitute."],C.gold,C.lightGold));
k.push(compare("PHYSIOLOGIC contraction","ELECTRICALLY STIMULATED contraction",
 ["**Slow-twitch type I recruited first**, building through the size principle. **ASYNCHRONOUS** recruitment — motor units take turns, so force builds smoothly and fatigue is delayed."],
 ["**Fast-twitch type II recruited first** — which is actually a rehab ADVANTAGE, since type II atrophies first with age and disuse. **SYNCHRONOUS** recruitment — everything fires at once, producing fast, sometimes uncomfortable contractions that **fatigue much faster**, so you must build in more rest than you would for active exercise."],
 C.blue,C.teal,C.lightBlue,C.lightTeal));
k.push(h1("1. Indications"));
k.push(bullet("**Orthopedic strengthening** — post-op quad after TKA or ACL reconstruction is the signature use. **Cardiorespiratory patients** — quad function, ↑O₂ uptake, better walk-test distance, better quality of life. **Neurologic muscle re-education** — including **functional electrical stimulation (FES)**: a heel pressure sensor firing the anterior tibialis to fight foot drop, or a unit driving wrist extension for grip. FES is underused relative to its promise because so many parameters must line up (enough force, comfortable, reliable, consistent). **Edema and circulation** via muscle pump → ↑peripheral fluid flow, tissue healing, and reduced DVT risk. **Denervated muscle** — slows atrophy, but works only while the current is on and does not produce reinnervation. **CNS conditions** (stroke, SCI, TBI, CP, MS) work as long as the **peripheral nerve, neuromuscular junction, and muscle are intact**. Even NASA uses it against astronaut atrophy — and it's still not a replacement for exercise."));
k.push(h1("2. Positioning and Electrode Placement"));
k.push(bullet("**For edema**: limb elevated above the heart, but support the joints above and below and **avoid the closed-packed position** — an elevated ankle with the knee locked in full extension is uncomfortable and often counterproductive (unless improving knee extension IS a goal). Watch that the distal segment isn't lower than the proximal one, or fluid just pools distally. **For strengthening**: the contraction must be **pain-free — pain inhibits force**; a bolster under the knee (≈30° flexion, open-packed) usually lets a patient generate more quadriceps force than full extension. Isometric setups are most practical; isotonic e-stim through range is more functional but very hard to time against the on-cycle."));
k.push(bullet("**Electrodes**: one over the **motor point** of the target muscle, the other **on the same muscle group as far away as reasonably possible** — at minimum, separated by the width of one electrode. Dr. Kyle Adams's motor-point reference (anterior/posterior thigh, anterior/posterior lower leg, anterior/posterior upper extremity, posterior trunk) is in the module folder; small superficial muscles can be hard to target if you don't have small enough electrodes."));
k.push(h1("3. NMES vs Russian, and the Parameter Table ★"));
k.push(compare("NMES","RUSSIAN STIMULATION",
 ["**Biphasic alternating current** — each pulse crosses both sides of the isoelectric line during on-time. The everyday clinic workhorse for post-op quads and muscle re-education."],
 ["'NMES on steroids,' developed in the 1970s for Soviet Olympic athletes. **Polyphasic**: a **2,500 Hz carrier frequency** delivered in **10-millisecond bursts at 50 bursts/second**. The high carrier frequency penetrates deeply for a strong contraction — at the cost of comfort, since it reaches A-delta and possibly C fibers."],
 C.blue,C.teal,C.lightBlue,C.lightTeal));
k.push(detail(["Goal","Frequency · Pulse duration · Amplitude · On:off · Ramp · Time"],[
 ["**Muscle strengthening**","**35–80 pps** · 150–200 μs small / 200–350 μs large muscles · **>10% MVIC in injured tissue, >50% MVIC in uninjured** · **6–10 s on : 50–120 s off, ratio 1:5 initially** (reduce off-time with repeated treatments, progressing toward 1:3) · ramp ≥2 s (2–5 s typical, equal up and down) · 10–20 min for **10–20 reps** · **every 2–3 hours while awake** if a home unit is available"],
 ["**Muscle re-education**","35–50 pps · same durations · amplitude sufficient for the functional activity · on:off depends on the activity · ramp ≥2 s · time depends on the activity"],
 ["**Muscle spasm reduction**","35–50 pps · same durations · **to visible contraction** · **2–5 s on : 2–5 s off (EQUAL)** · ramp ≥1 s · 10–30 min · every 2–3 hours until the spasm resolves"],
 ["**Edema reduction (muscle pump)**","35–50 pps · same durations · **to visible contraction** · **2–5 s on : 2–5 s off (EQUAL)** · ramp ≥1 s · **30 min** · twice a day"]],[2200,7160]));
k.push(bullet("**Worked dose from lecture**: first treatment at 6 s on / 30 s off with a 3-second ramp, 10 repetitions — which lands around a 7-minute treatment (ramps don't count as active time). Progress by adding two reps at a time. **Overload principle with e-stim**: increase pulse duration (more action potentials), increase amplitude, increase electrode size (more motor recruitment), or **add external resistance during the on-time**. Clinically you rarely measure MVIC — so the practical target is **a tetanic contraction that is not necessarily comfortable but is tolerable**."));

k.push(pageBreak());
/* ─────────────── TOPIC 3.2: PAIN ─────────────── */
k.push(banner("TOPIC 3.2","Electrical Current for Pain Control — TENS and IFC"));
k.push(spacer());
k.push(infoBox("The perspective (Cochrane)",["“It may appear disappointing that after 51 clinical trials, multiple Cochrane Reviews, and an overview of these reviews, **we do not have adequate evidence to recommend or not TENS** for management of chronic pain.” Read the qualifiers — but the honest position is that e-stim is an ADJUNCT to active care, not the engine of long-term pain control."],C.red,C.lightRed));
k.push(bullet("**Indication**: relieve pain as an adjunct to more active, independent treatment — and in doing so **reduce reliance on pain medication**, which matters directly against the opioid epidemic. If a modality gets a patient moving and participating in their own pain management, that's the win. **Precaution worth understanding rather than memorizing**: malignant tumors — e-stim can increase tissue growth where applied, so it's contraindicated in most contexts; but for a patient no longer responding to conventional cancer treatment, pain relief may be the priority they choose. That's why it's a precaution and not an absolute."));
k.push(compare("TENS","IFC (interferential current)",
 ["Alternating current, no charge buildup. Works through **gate control** and **endogenous opioid** mechanisms. Uses **2 or 4 electrodes** in several placement patterns (surround the painful area). Usually **much cheaper** — home units are typically TENS."],
 ["'TENS on steroids.' Same two mechanisms, but delivered by **two medium-frequency AC currents that interfere with each other** — e.g. 5,000 Hz and 5,100 Hz, producing a **beat frequency** (the analog of TENS frequency). Higher carrier frequency = theoretically deeper, more comfortable, wider coverage — **though the research is conflicting**. **Always 4 electrodes in a crisscross pattern**, treating the area where the currents intersect."],
 C.blue,C.teal,C.lightBlue,C.lightTeal));
k.push(bullet("**Electrode placement**: TENS has multiple valid patterns (surrounding, bracketing, along the dermatome); IFC is crisscross only. **Avoid transcranial placement, over the genitalia, and directly over the spinal column** (bone sits too close to the skin there)."));
k.push(h1("Conventional vs Low-Rate (Acupuncture-Like) ★"));
k.push(detail(["Setting","Parameters, sensation, and what to promise the patient"],[
 ["**CONVENTIONAL**","**Gate control mechanism** · pulse duration **50–80 μs** · high frequency (**80–150 pps**) · surround the painful area · target sensation = **strong but comfortable tingling, no muscle grabbing** · as short as **15 minutes, or worn all day** on a home unit · **immediate relief, little residual** — relief lasts while the current is on. Start here with a patient who has never had e-stim"],
 ["**LOW-RATE / ACUPUNCTURE-LIKE**","**Endogenous opioid (endorphin) release** · pulse duration **150–300 μs** (A-delta) · **low frequency (2–10 pps)** · electrodes must be **over a muscle belly** near the painful area · target = **strong VISIBLE muscle twitching** · **20–30 minutes, never beyond ~45** (longer risks DOMS) · relief begins after roughly 5 minutes and can persist **up to 5 hours after treatment ends**"]],[2600,6760]));
k.push(tip("Match the setting to the patient's life, not just the pathology. Low-rate is the answer for someone who can't wear electrodes through the day — no home unit, can't afford one, works around water (lifeguard), or sweats the pads off — but needs hours of relief. And be careful how you frame conventional TENS: if you tell a patient relief only lasts while it's on, that's exactly what they'll experience. Framed as a window that lets them move and engage in active treatment, the relief often outlasts the session."));
k.push(bullet("**Waveform detail**: conventional TENS is **asymmetric but biphasic** — the negative phase looks different from the positive, which itself helps with accommodation, while equal on/off and amplitude keep it a true alternating current with no charge buildup. **Anti-accommodation tools**: TENS units offer modulation of amplitude, frequency, and/or pulse duration — **read the manual**, because some preset modes drop the frequency into acupuncture-like territory when you meant to stay conventional. IFC is more consistent across machines: **sweep** modulates the beat frequency (e.g. 5,100→5,150 Hz against a fixed 5,000, giving a beat of 100–150), and **scan** modulates amplitude, which some patients perceive as the treatment roaming over a larger area."));

k.push(pageBreak());
/* ─────────────── TOPIC 3.3: TISSUE HEALING ─────────────── */
k.push(banner("TOPIC 3.3","Electrical Currents for Soft Tissue Healing — HVPC and Iontophoresis"));
k.push(spacer());
k.push(h1("1. High-Volt Pulsed Current (HVPC)"));
k.push(bullet("**Waveform: monophasic twin-peak pulsed DIRECT current** — not something you adjust; know it to distinguish it from everything else. Uses: **acute (inflammatory-phase) edema control** and **wound management**. Evidence caveat stated plainly in lecture: the foundational study — HVPC plus good nursing care significantly increasing healing rates of pelvic ulcers in patients with spinal cord injury — is from the **early 1990s**, and little has validated or invalidated it in 30+ years. Not bad evidence, but old evidence built with older methods."));
k.push(detail(["Application","How it's set up"],[
 ["**Acute edema (inflammatory phase)**","Use the **NEGATIVE (cathode) electrode over the treatment area** — the polarity repels the negatively charged cells and proteins thought to drive the inflammatory response. Comfortable position, 20–30 minutes. Because you're not eliciting a contraction, you don't need to avoid bony prominences or superficial nerves. Dispersive electrode goes on a muscle belly as far away as practical; use larger electrodes"],
 ["**Non-inflammatory edema**","If you're past the inflammatory phase and the swelling is from disuse or restricted movement, switch to an **NMES waveform and use the muscle pump** instead"],
 ["**Wound in inflammatory phase**","Negative electrode **in the wound bed** (with wound filler), dispersive positive electrode remote — e.g. on the opposite buttock for a sacral wound"],
 ["**Wound in proliferative phase**","Theory flips the polarity: use the **POSITIVE electrode** over the healing wound"]],[2600,6760]));
k.push(bullet("**Proposed healing mechanisms**: increased antimicrobial activity, improved circulation via **angiogenesis**, **fibroblast activation → increased collagen content**, plus other cellular processes detailed in Cameron. **Scope limit**: this treats local edema, NOT systemic causes — a patient with heart, liver, or kidney failure needs their medical team, not your stim unit."));
k.push(h1("2. Iontophoresis ★"));
k.push(bullet("**Definition**: transcutaneous delivery of a drug or compound by converting it to ions and using **direct current** — the charge buildup under the electrode **repels like-charged ions through the skin**. **Advantages**: non-invasive (no injection) and avoids **first-pass metabolism** (no systemic oral dose) — ideal when the target is small and superficial, like the lateral elbow or Achilles. **Requirements for the drug**: must ionize, be stable enough in solution not to be altered by the current, and be small-to-moderate in size. **Limitations**: penetrates only a few millimeters, so the tissue must be superficial and localized — and the effect may owe as much to **increased permeability of the outer skin layer** as to ionic repulsion."));
k.push(detail(["Concept","Details"],[
 ["**Drugs**","**Dexamethasone** is the workhorse — anti-inflammatory, **negative polarity, so the CATHODE is the active electrode**. Also seen: acetate (calcium deposits) and chloride (scar tissue)"],
 ["**Active vs dispersive**","The **active** electrode holds the medication and matches its polarity; the **dispersive** (larger) electrode goes over a remote muscle belly purely to complete the circuit and lower current density. **No treatment happens at the dispersive electrode**"],
 ["**Efficacy factors**","**Skin integrity** — scratches/abrasions let the drug through too readily; heavy callus should be washed and gently roughened. **Polarity** — negative delivery needs LOWER current (higher skin-irritation risk); acidic positively charged drugs need HIGHER current because the pH lowers ionization. **Prior thermal treatment** changes permeability, and increased circulation can carry the drug away from the target"],
 ["**Current density limits**","Current density = intensity ÷ electrode surface area. **≤0.5 mA/cm² for a negative (cathode) delivery electrode; up to 1 mA/cm² for a positive (anode)**"],
 ["**Dosage**","**Intensity × time = mA·min. Typical 40–80 mA·min**, starting at 40 on treatment one and progressing toward 80 as tolerated. Most machines max around **4 mA**, and total treatment should stay **under ~30 minutes** to limit irritation"],
 ["**Worked calculation**","Active cathode area **6 cm²** × 0.5 mA/cm² = **3 mA maximum safe intensity**. Then time = dose ÷ intensity. Titrate up to a strong tingle or tolerable discomfort, or the safe limit — **whichever comes first**"]],[2400,6960]));
k.push(tnote("Practicalities worth knowing before clinic: the classic Dupel unit is finicky and beeps at you — treat the troubleshooting list as a pre-flight checklist. Newer integrated electrodes with a built-in battery or rechargeable activator deliver very low current over a much longer wear time, which minimizes the main adverse effect (skin irritation) and frees the patient from sitting tethered in the clinic. And a real access barrier: in some states dexamethasone is a controlled substance the clinic can't stock, so the patient must bring their own prescription — forget it, can't afford it, can't get it, and there's no treatment."));

k.push(pageBreak());
/* ─────────────── SYNC + STUDY ─────────────── */
k.push(banner("MODULE 3","Sync Cases, Reading Map, and Glossary"));
k.push(spacer());
k.push(detail(["Case","How to reason it"],[
 ["**Carlos — 45M warehouse worker, 3 weeks LBP**","4/10 with >1 hour of work, 0/10 at rest; can't tolerate prolonged standing or carrying. Lumbar extension moderately limited by pain; neuro screen clean. Goal: pain reduction to work. Reason through: pain-control modality → **conventional TENS or IFC** (gate control) → pulse duration 50–80 μs, frequency 80–150 pps → electrodes surrounding the painful lumbar area (crisscross if IFC, and **not directly over the spinal column**) → cue 'strong but comfortable tingling, no grabbing' → **re-assess something measurable**: extension AROM, standing tolerance, pain with the aggravating task → and pair it with active care, because TENS alone is not the plan"],
 ["**Josie — 28F recreational runner, Achilles pain**","1/10 rest, 5/10 after running; referral suggests **iontophoresis with dexamethasone**; ROM WNL, MMT 4/5 limited by pain, TTP at the Achilles insertion. Dexamethasone is negative → **cathode is active**. **6 cm² cathode × 0.5 mA/cm² = 3 mA max safe intensity**; dose 40–80 mA·min → at 3 mA, 40 mA·min ≈ 13 minutes. How it differs from TENS/NMES/IFC: **direct current with net charge to deliver a drug**, not depolarization for a sensory or motor response. Then the real plan: tendon loading"],
 ["**James — 19M, 2 weeks post ACL reconstruction**","Clean incision, knee effusion, **poor volitional quad activation** (quadriceps lag). Choose **NMES** for strengthening/re-education: 35–80 pps, **200–350 μs** (large muscle), **6–10 s on : 50–120 s off at 1:5**, ramp 2–5 s, 10–20 reps, ideally every 2–3 hours with a home unit. Amplitude to a **tetanic contraction ≥10% MVIC** in injured tissue — tolerable, not necessarily comfortable. Electrodes over the **VMO and proximal-lateral quadriceps motor points**. Overload over time: ↑pulse duration, ↑amplitude, larger electrodes, add external resistance during on-time"]],[2400,6960]));
k.push(spacer());
k.push(detail(["Topic","Source"],[
 ["Principles + muscle contraction","Intro to Electrical Currents and E-stim for Muscle Contractions lectures + handouts; **Cameron Table 12-1** (the parameter table reproduced above); **Motor Points for NMES and Russian Stimulation** (Dr. Kyle Adams, module folder)"],
 ["Evidence","**Stevens-Lapsley et al 2012** — early NMES to improve quadriceps strength after TKA (RCT, module folder); the Cochrane TENS overview quoted above"],
 ["Pain control","E-stim Pain Control lecture + handout (TENS vs IFC, conventional vs low-rate, sweep/scan)"],
 ["Tissue healing","E-stim HVPC and Iontophoresis lectures + handouts; Cameron chapters on electrical currents for tissue healing"],
 ["Assessment","Quiz 3 · **Case Study #1** (report to CI ≤90 s + patient interview ≤2.5 min, under 5 min total, rubric in Canvas) · **Midterm: Modules 1–4, 50 multiple choice, 90 seconds per question, Respondus, closed note**"]],[2400,6960]));
k.push(spacer());
k.push(...glossary("Module 3 Quick-Reference Glossary",[
 ["Electrical current","Flow of charged particles to depolarize nerve membranes and elicit an action potential"],
 ["Anode / cathode","Positive electrode / negative electrode"],
 ["DC vs AC","Stays one side of the isoelectric line, net charge (ionto, HVPC) vs reverses, no net charge (TENS, IFC, NMES, Russian)"],
 ["Pulse vs phase","Whole flow until it stops vs flow until it changes direction; monophasic = pulse duration equals phase duration"],
 ["Strength-duration curve","Pulse duration selects the fiber: 50–80 μs A-beta · 125–200 μs small motor · 200–350 μs large motor · 150–300 μs A-delta · ms denervated"],
 ["Frequency guide","2–10 pps twitch · 35–50 pps tetanic · 100–150 pps tingling; higher frequency = lower impedance = deeper, more comfortable"],
 ["Ramp time","Comfort ramp up and down; not counted as active treatment time"],
 ["Accommodation fixes","Larger electrodes, wider spacing, ↑frequency, ↓pulse duration, modulation — not just turning intensity up"],
 ["Orthodromic vs antidromic","Normal direction vs reverse; injected current fires both ways"],
 ["Current density","Current ÷ electrode area — smaller electrode = higher density = more burn risk"],
 ["Physiologic vs e-stim recruitment","Type I first, asynchronous vs type II first, synchronous (faster fatigue, more rest needed)"],
 ["NMES vs Russian","Biphasic AC vs polyphasic 2,500 Hz carrier in 10 ms bursts at 50 bursts/sec — deeper, stronger, less comfortable"],
 ["FES","Functional electrical stimulation — sensor-triggered stim for foot drop, grip, etc."],
 ["Strengthening dose","35–80 pps, 6–10 s on : 50–120 s off (1:5 → 1:3), ramp 2–5 s, 10–20 reps, >10% MVIC injured / >50% uninjured, q2–3 h"],
 ["Edema/spasm dose","35–50 pps, EQUAL 2–5 s on:off, to visible contraction, 30 min (edema) or 10–30 min (spasm)"],
 ["Overload with e-stim","↑pulse duration, ↑amplitude, larger electrodes, external resistance during on-time"],
 ["Motor point rule","One electrode on the motor point, the other on the same muscle group as far away as practical"],
 ["Conventional TENS","Gate control · 50–80 μs · 80–150 pps · strong comfortable tingle · 15 min to all day · immediate relief, little residual"],
 ["Low-rate / acupuncture-like TENS","Endogenous opioids · 150–300 μs · 2–10 pps · over muscle belly · visible twitch · 20–30 min (≤45) · relief up to 5 hours"],
 ["IFC","Two medium-frequency currents interfering; beat frequency = TENS frequency; 4 crisscross electrodes; sweep = frequency modulation, scan = amplitude"],
 ["Placement no-go zones","Transcranial, genitalia, directly over the spinal column"],
 ["HVPC","Monophasic twin-peak pulsed DC; negative electrode for inflammatory edema and inflammatory-phase wounds, positive for proliferative wounds"],
 ["HVPC healing mechanisms","Antimicrobial activity, angiogenesis, fibroblast activation → collagen"],
 ["Iontophoresis","DC-driven transcutaneous drug delivery; dexamethasone = negative = cathode active; avoids first-pass metabolism"],
 ["Ionto safety limits","≤0.5 mA/cm² cathode, ≤1 mA/cm² anode; dose 40–80 mA·min; ≤~30 min; machines max ~4 mA"],
 ["Ionto worked example","6 cm² cathode → 3 mA max safe intensity"]]));

build(k,"/home/claude/out/TI2_Module3_ElectrotherapeuticModalities_StudyNotes.docx");
