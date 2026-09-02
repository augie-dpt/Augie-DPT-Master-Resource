const L = require('/home/claude/notes_lib.js');
const {C,h1,h2,body,bullet,tnote,tip,compare,detail,infoBox,banner,glossary,fig,pageBreak,spacer,cover,build,linkBox} = L;
const k=[];

k.push(...cover("Therapeutic Interventions II (DPTH 6241)","Module 2: Thermal Agents",
 "Topic 2.1: Superficial Heat and Cold • Topic 2.2: Ultrasound • Lectures by Dr. Jake Awruch",
 ["Watch the lectures in your own Canvas module — these notes condense them, they don't replace them",
  "★ The sync-session decision loop: GOAL → SAFETY SCREEN → DOSE/PARAMETERS → RE-TEST. Every modality answer in this course runs that loop",
  "Skills list this module: cold pack + cryotherapy, hot pack + thermotherapy, and ultrasound with parameters matched to the goal"]));

/* ─────────────── TOPIC 2.1a: HEAT TRANSFER ─────────────── */
k.push(banner("TOPIC 2.1","Superficial Heat and Cold — the Physics First"));
k.push(spacer());
k.push(h1("1. Methods of Energy Transfer ★"));
k.push(detail(["Method","Definition + the example to remember"],[
 ["**Conduction**","Energy transfer between two materials in **direct contact**. Hot pack on skin; cold pack, ice massage, cold towels"],
 ["**Convection**","Energy transfer when one material **circulates past** the other. Whirlpool water moving around a limb; a fan of cool air"],
 ["**Conversion**","**Non-thermal energy converted to heat.** Ultrasound — sound energy in, thermal effect out"],
 ["**Radiation**","Energy transfer between materials **not in contact**. Infrared lamps — largely historical in contemporary PT practice"],
 ["**Evaporation** (cooling only)","Heat carried away as liquid vaporizes. Sweating is the physiologic version; vapor coolant spray the clinical one"]],[2200,7160]));
k.push(h1("2. What Determines How Much the Tissue Temperature Actually Changes"));
k.push(bullet("**Temperature gradient** — the bigger the difference between the agent and the tissue, the bigger the potential temperature change. **Specific heat of the material** — higher specific heat means more energy stored and slower loss (water vs paraffin; crushed ice vs a vinyl gel pack, which is why **crushed ice cools faster and more aggressively**). **Volume of tissue exposed.** And **the rate of transfer**: applied slowly, blood flow carries the heat away and balances the rise; applied too fast, blood can't keep up, the rise overshoots, and you get pain and burns. That last one is the entire reason hot packs need towel layers."));

k.push(h1("3. Superficial HEAT"));
k.push(infoBox("The perspective the lecture opens with",["Heat therapy provides pain relief, improves muscular strength, and increases flexibility. All of which sounds excellent — so the question worth carrying into the sync session is why we DON'T reach for heat more often as an intervention choice."],C.gold,C.lightGold));
k.push(detail(["Effect category","What heat does"],[
 ["**Hemodynamic**","**Vasodilation** → increased blood flow and circulation"],
 ["**Neuromuscular**","↑ nerve conduction velocity and firing rate → **↑ pain threshold**. Muscle strength: **DECREASED for the first 30 minutes** (useful for spasticity, guarding, pain modulation), then a **transient increase from 30 min to 2 hours**. Because that increase is temporary, heat is a poor strategy if actual strengthening is the goal"],
 ["**Metabolic**","↑ metabolic rate → metabolic material moves in and out of the area faster, which can support healing (and which is why phase of healing matters when you choose it)"],
 ["**Tissue extensibility**","The most common clinical reason to use it — **↑ collagen extensibility** → range of motion"]],[2400,6960]));
k.push(bullet("**Indications**: pain control · increased ROM · accelerated healing. **General precautions**: **edema** (vasodilation can worsen it), **pregnancy**, **cardiac insufficiency**. **In the treatment area**: acute injury or inflammation, impaired circulation, impaired thermal regulation, metal, open wound, topical medications/counterirritants, and **demyelinated nerves** (e.g. rheumatoid arthritis — heat can increase inflammation). The **absolute** contraindication the lecture singles out: **decreased mentation** — if they can't tell you it's getting too hot, there's no stop signal and the skin burns."));
k.push(tip("Hot pack technique, exactly as lectured: moist packs live in a HYDROCOLLATOR of very hot water (moist conducts better than dry). The cover counts as TWO layers; you need 6–10 total depending on skin, position, and preference. Treat ~20 minutes in a position the patient can hold comfortably. CHECK THE SKIN AT ~5 MINUTES — that's when the heat peaks. Screen skin integrity, sensation, and hot/cold discrimination first, ideally demonstrating on an uninvolved normal area. Target sensation = a warm towel fresh out of the dryer, not more."));
k.push(bullet("**Hot pack pitfalls**: bony prominences concentrate pressure → hot spots → burns; a patient lying ON the pack **compresses the towel layers** (thinner barrier) AND insulates the pack against the table so heat can't dissipate — prefer the patient prone with the pack on top. **Advantages**: easy, cheap, patients can use it at home. **Disadvantages**: passive — you can't treat the area while it's on, it can be too heavy over a painful shoulder, hard to conform to small irregular surfaces, and active motion during treatment is essentially impossible. **Other superficial heating agents** to recognize (common in hand therapy, low priority here): paraffin, fluidotherapy, infrared lamps, and **contrast baths** — which neatly solve heat's edema problem by alternating warm and cold."));

k.push(pageBreak());
/* ─────────────── TOPIC 2.1b: COLD ─────────────── */
k.push(banner("TOPIC 2.1 (cont.)","Superficial Cold — and the Argument About Ice"));
k.push(spacer());
k.push(infoBox("The perspective the lecture opens with",["Cold has been used routinely for immediate analgesia after acute soft tissue injury — but **prolonged ice application has been shown to DELAY the start of healing and lengthen recovery**. Much of our icing is historical habit rather than contemporary evidence."],C.red,C.lightRed));
k.push(bullet("**Ideal tissue temperature for cryotherapy: 15–25 °C (59–77 °F).** Magnitude of change depends on the same factors as heat (gradient, specific heat, volume, rate)."));
k.push(detail(["Effect category","What cold does"],[
 ["**Hemodynamic**","**Vasoconstriction** → reduced blood flow → edema control. **But only for roughly the first 10 minutes** — with prolonged exposure you get **cold-induced vasodilation** (CIVD), which is real but small and transient. Cold is NOT the agent to pick if your goal is increased circulation"],
 ["**Metabolic**","**↓ metabolic rate** — historically the rationale for 'controlling inflammation.' Which raises the module's central question: given that inflammation is stage one of healing, is suppressing it what we actually want? (Chronic inflammatory conditions are a different story)"],
 ["**Neuromuscular**","**↓ nerve conduction velocity** (the mirror of heat), reduced pain and ↑ pain threshold via gate control. **Short application (3–5 min) INCREASES motor excitability** → brief performance boost. **Decreased spasticity**: a short application gives a short reduction; ~20 minutes can reduce spasticity for up to an hour"]],[2400,6960]));
k.push(bullet("**Indications**: pain control · edema control via vasoconstriction · decreasing spasticity · inflammation control (with the caveat above). **Absolute contraindication: cold intolerance or hypersensitivity** (Raynaud-type vasospasm, cold urticaria); plus impaired circulation, impaired sensation, and impaired cognition/communication. Dr. Awruch's assignment on this one is explicit — don't memorize the list, go to Cameron, understand what each condition IS, and rehearse how you'd ask a patient about it in plain language."));
k.push(h1("Types of Cold Application"));
k.push(detail(["Agent","How to use it"],[
 ["**Cold/ice packs**","Clinic standard: vinyl packs of silica or saline-gelatin. **Crushed ice cools faster** (different specific heat). Home versions: water + rubbing alcohol, frozen vegetables. Cover with a damp pillowcase or thin towel — warm water on the cover eases the patient into the cold. **Treat 10–20 minutes, and STOP when analgesia/numbness arrives** — that stop-rule keeps you inside the vasoconstriction window and away from CIVD"],
 ["**Ice massage**","Applied directly to skin (Styrofoam cup or a purpose-made cup). **5–10 minutes for pain reduction**, **3–5 minutes for muscle facilitation**. Good for small, bony, contoured areas"],
 ["**Cold compression unit** (e.g. Game Ready)","Chilled water + air pumped through a body-part sleeve: **cold AND mechanical compression** for pain, edema, and inflammation. The post-op workhorse (knee, shoulder, ankle) — doesn't fit digits, trunk, or hips. Popular partly because it needs no therapist time and third-party payers still reimburse it"],
 ["**Vapor coolant spray**","The 'magic spray' of soccer sidelines; historically used in PT for **spray and stretch**. Largely abandoned — chemical volatility, inhalation risk, and better alternatives exist"]],[2400,6960]));
k.push(tnote("The assigned Bahram Jam article (APTEI, 2014) is the provocation behind this module: RICE trials support COMPRESSION but find no value in icing beyond temporary numbing (Hubbard et al 2004); animal cellular data doesn't transfer cleanly to humans in clinic. His question is the one to sit with — why would we rush to eliminate a normal, healthy inflammatory response? Meanwhile the sync session notes the JOSPT lateral ankle sprain CPG DOES include a cryotherapy recommendation in acute care. Both things are true: ice for analgesia so movement can start is defensible; ice to 'stop inflammation and heal faster' is not."));

k.push(pageBreak());
/* ─────────────── TOPIC 2.2: ULTRASOUND ─────────────── */
k.push(banner("TOPIC 2.2","Therapeutic Ultrasound"));
k.push(spacer());
k.push(infoBox("The perspective the lecture opens with",["Despite 60+ years of clinical use, the effectiveness of ultrasound for pain, injuries, and soft tissue lesions **remains questionable**. Apply the skeptic's rule: when one machine claims to lengthen tissue, shorten tissue, heal fractures, close wounds, and treat tendinopathy, that breadth is itself a reason to doubt."],C.red,C.lightRed));
k.push(h1("1. How the Machine Works"));
k.push(bullet("**Ultrasound is mechanical energy that begins as electrical current**: current → a **crystal in the sound head** → sound waves (conversion). The beam undergoes **attenuation** = **absorption** (the majority) + **reflection** (why you keep the head perpendicular — reflected energy passes through tissue twice) + **refraction** (as the beam crosses tissue interfaces; known but not clinically controlled)."));
k.push(bullet("**Spatial peak vs spatial average**: peak is the highest amplitude in the beam (typically the center of the transducer); average is what the machine's intensity setting actually reports. The **beam non-uniformity ratio (BNR)** is peak:average, set by crystal quality — machines run **2:1 to 8:1, and you want 2:1 to 5:1**. Do the math on why: set 1.2 W/cm² on a 5:1 machine and the peak is **6 W/cm²** — enough to hurt and to damage tissue. **This is the reason you never park the sound head.**"));
k.push(h1("2. Attenuation, Depth, and Which Tissues Respond"));
k.push(bullet("**Tissues with higher attenuation heat more** — which makes ultrasound theoretically best for **collagen-rich tissue: tendon, ligament, capsule, cartilage** (and skin for the proposed mechanical effects). **Low attenuation: blood, fat, nerve** — poor thermal targets. **Bone has very high attenuation** (hence the historical, NOT-recommended trick of using US discomfort to detect fracture — don't do this). Depth of penetration is **inversely related to attenuation**: energy absorbed early doesn't travel deep."));
k.push(compare("1 MHz — DEEPER","3 MHz — SUPERFICIAL",
 ["Penetrates up to about **5 cm**. Memory hook from the lecture: picture the numeral 1 as a thin arrow that goes deep. Heats more slowly at a given intensity.","Absorbed faster and closer to the surface, so it heats **significantly faster** but doesn't reach deep tissue. Draper 1995 found 3 MHz heats faster than 1 MHz at every dose tested — and at 1.5 W/cm² it became uncomfortable for some subjects by 6 minutes."],
 C.blue,C.teal,C.lightBlue,C.lightTeal));
k.push(infoBox("Draper, Castel & Castel 1995 — rate of temperature increase per minute (the assigned paper)",["**1 MHz**: 0.04 °C at 0.5 W/cm² · 0.16 °C at 1.0 · 0.33 °C at 1.5 · 0.38 °C at 2.0.  **3 MHz**: 0.3 °C at 0.5 W/cm² · 0.58 °C at 1.0 · 0.89 °C at 1.5 · **1.4 °C at 2.0**. No significant difference between the two depths tested within a frequency. Use it to reason about how long you'd need to treat to reach a target temperature rise — and note the paper is decades old, which is exactly the evidence-quality conversation this course wants you to have."],C.blue,C.lightBlue));
k.push(h1("3. Parameters and Technique ★"));
k.push(detail(["Parameter","Setting logic"],[
 ["**Duty cycle**","Time on ÷ (time on + time off). **100% = continuous = maximum thermal.** **20% = pulsed = non-thermal.** Dr. Awruch's advice: skip 50% — if you want thermal effects use 100% and control the dose with INTENSITY instead; if you want non-thermal use 20%. Note that mechanical effects occur at every setting"],
 ["**Frequency**","1 MHz for deep (≤5 cm), 3 MHz for superficial — modified by tissue quality and any hardware present"],
 ["**Intensity**","W/cm² (spatial average). Start low in high-attenuation tissue or near bone/metal (bone heats far faster than the tendon beside it) and titrate up on patient report of warmth"],
 ["**Area**","Treat **2–3× the effective radiating area (ERA)** of the sound head — small enough to keep energy density up, large enough to avoid hot spots"],
 ["**Speed**","Slow overlapping circles at about **1 cm/second**, overlapping the previous pass by half. Slow enough to heat properly and to feel relaxing; too fast reduces energy absorbed"],
 ["**Time**","**5–10 minutes.** If you're chasing thermal effects, START THE CLOCK when the patient first reports warmth — not when you switch the machine on. (The clinic's 8-minute default is a BILLING artifact, not a dosing rationale)"]],[2400,6960]));
k.push(bullet("**Proposed non-thermal/mechanical effects** — **stable cavitation** and **acoustic streaming**, theorized to move calcium into cells and drive cell function; used for skin ulcers and wound closure, with **limited evidence** for fracture healing. **Phonophoresis** (driving topical medication through skin with the US head) is worth recognizing but APTA does not consider it required entry-level content. Be honest that a substantial share of ultrasound's clinical survival is **patient expectation** — people who had it before and ask for it again."));
k.push(bullet("**Contraindications/precautions**: pregnancy (avoid abdomen, low back, pelvis), **malignancy in the treatment region**, active infection, thrombophlebitis or known DVT, over the **eyes and reproductive organs**, and impaired sensation in the region."));
k.push(tip("The defensible use, stated plainly in the sync deck: if your goal is a SHORT-WINDOW range-of-motion improvement in collagen-rich tissue AND you will re-test immediately and then use the window for manual therapy or exercise — ultrasound is defensible. Otherwise default to exercise, manual therapy, and education. Why not just a hot pack? Hot pack = broad superficial primer; ultrasound = focal target with parameter precision. Either way, treat it like any intervention: measure something before and after, and if nothing changed, change the treatment."));

k.push(pageBreak());
/* ─────────────── SYNC + STUDY ─────────────── */
k.push(banner("MODULE 2","Sync Session Reasoning, Reading Map, and Glossary"));
k.push(spacer());
k.push(h1("The Limiter Table — the single most useful thing in the sync deck ★"));
k.push(detail(["Limiter","Pick / Why / Next step"],[
 ["**High pain, irritability, or swelling**","**COLD** → ↓pain so movement becomes tolerable → cold → move/load → **re-test**"],
 ["**Stiffness with low pain**","**HEAT** → ↑comfort so ROM work goes better → heat → stretch/manual/exercise → **re-test**"],
 ["**A specific ROM target in collagen-rich tissue**","**ULTRASOUND (optional)** → focal primer only if you'll re-test → US → immediate ROM work → **re-test**"]],[3000,6360]));
k.push(bullet("**Cases to rehearse**: **Olivia**, acute post-op TKA (swelling, ROM −10° to 85°, 8/10 pain, poor quad activation, healing incision, sleep and driving limited, RW for gait) — what are the priorities acutely, and does anything change in remodeling and maturation? **Steph**, inversion ankle sprain 48 hours out, still painful with weight-bearing, wants it 'down fast' — goal today is **analgesia and tolerance for ROM/weight-bearing, not overnight healing**; cryotherapy as symptom modulation PAIRED with early protected movement. **The bike-fall hand injury** across three stages: A (0–72 h, bruising/swelling/high pain), B (~2 weeks, pain down, stiffness and guarding limiting function), C (8–10 weeks+) — for each: name the limiter, pick cold/heat/US/none, give one line of why, and name the measurable re-test."));
k.push(spacer());
k.push(detail(["Topic","Source"],[
 ["Heat and cold","Superficial Heat + Superficial Cold lectures and handouts; **Cameron** chapters on thermal agents (advantages/disadvantages tables for paraffin, fluidotherapy, contrast baths)"],
 ["The ice debate","Jam B. *Questioning the Use of Ice Given Inflammation Is a Perfectly Healthy Response Following Acute Musculoskeletal Injuries.* APTEI Clinical Library, 2014 (module folder) — read alongside the JOSPT lateral ankle sprain CPG"],
 ["Ultrasound","Ultrasound lecture + handout; **Draper DO, Castel JC, Castel D.** *Rate of Temperature Increase in Human Muscle During 1 MHz and 3 MHz Continuous Ultrasound.* JOSPT 1995 (module folder); PhysioU for technique"],
 ["Skills (lab practical)","Cold pack + cryotherapy for axial and extremity regions · hot pack thermotherapy for axial and extremity regions · ultrasound with parameters varied by goal (thermal vs non-thermal, superficial vs deep, soft tissue shortening vs healing/inflammation)"]],[2400,6960]));
k.push(spacer());
k.push(...glossary("Module 2 Quick-Reference Glossary",[
 ["Conduction / convection / conversion / radiation / evaporation","Direct contact / circulating past / non-thermal energy converted / no contact / vaporization"],
 ["Specific heat","Energy a material stores per degree — higher = slower loss (crushed ice cools faster than gel packs)"],
 ["Rate-of-transfer rule","Slow transfer is carried off by blood flow; too-fast transfer overshoots → pain and burns → hence towel layers"],
 ["Heat: hemodynamic effect","Vasodilation → ↑blood flow"],
 ["Heat: strength timeline","↓ strength first 30 min (useful for guarding/spasticity), transient ↑ from 30 min–2 h"],
 ["Heat indications","Pain control, ↑ROM via collagen extensibility, accelerated healing via ↑metabolic rate"],
 ["Heat precautions","Edema, pregnancy, cardiac insufficiency; locally: acute inflammation, impaired circulation, metal, open wound, topical meds, demyelinated nerve"],
 ["Hot pack protocol","Hydrocollator, cover = 2 layers, 6–10 total, 20 min, SKIN CHECK AT 5 MIN"],
 ["Absolute contraindication (heat)","Decreased mentation — no stop signal"],
 ["Cryotherapy target temp","15–25 °C (59–77 °F)"],
 ["Cold: vasoconstriction window","~first 10 minutes; prolonged exposure → cold-induced vasodilation"],
 ["Cold: neuromuscular","↓ nerve conduction velocity; 3–5 min ↑ motor excitability; ~20 min ↓ spasticity up to an hour"],
 ["Cold stop-rule","10–20 min, stop at analgesia/numbness"],
 ["Absolute contraindication (cold)","Cold intolerance/hypersensitivity — Raynaud-type vasospasm, cold urticaria"],
 ["Ice massage dosing","5–10 min for pain; 3–5 min for muscle facilitation"],
 ["Cold compression unit","Cold + mechanical compression (Game Ready); post-op joints; not digits/trunk/hips"],
 ["Attenuation","Absorption (most) + reflection + refraction; higher attenuation = more heating, less depth"],
 ["High vs low attenuation tissue","Bone, tendon, cartilage, skin vs blood, fat, nerve"],
 ["Spatial peak vs average","Highest amplitude (center of head) vs the machine's displayed setting"],
 ["BNR","Peak:average ratio, 2:1–8:1 by crystal quality; want ≤5:1 — the reason to keep the head moving"],
 ["1 MHz vs 3 MHz","Deep (≤5 cm), slower heating vs superficial, faster heating"],
 ["Duty cycle","100% continuous = thermal; 20% pulsed = non-thermal; control thermal dose with intensity, not 50%"],
 ["ERA rule","Treat 2–3× the effective radiating area, ~1 cm/sec, 5–10 min, clock starts at first warmth"],
 ["Draper rates","3 MHz at 2.0 W/cm² = 1.4 °C/min; 1 MHz at 1.5 W/cm² = 0.33 °C/min"],
 ["Cavitation / acoustic streaming","The proposed non-thermal mechanisms — theoretical, thin evidence"],
 ["Phonophoresis","Topical medication driven through skin by US; not required entry-level content per APTA"],
 ["US contraindications","Pregnancy (abdomen/low back/pelvis), malignancy, infection, DVT/thrombophlebitis, eyes, reproductive organs, impaired sensation"],
 ["Decision loop","Goal → safety screen → dose/parameters → re-test"]]));

build(k,"/home/claude/out/TI2_Module2_ThermalAgents_StudyNotes.docx");
