const L = require('/home/claude/notes_lib.js');
const {C,h1,h2,body,bullet,tnote,tip,compare,detail,infoBox,banner,glossary,fig,pageBreak,spacer,cover,footer,build} = L;
const E="/home/claude/emb2/";
const k=[];

k.push(...cover("Physical Therapy Fundamentals (DPTH 6211)","Module 1: Vital Signs & the Neurological Screen",
 "Topics: 1.1 Vitals • 1.2 Neuromuscular System • Sync Session 1",
 ["PhysioU is the primary source for measurement TECHNIQUE — these notes cover the what and why; PhysioU shows the how"]));

// ===== TOPIC 1.1 VITALS =====
k.push(banner("TOPIC 1.1","Assessing Vital Signs"));
k.push(spacer());
k.push(h1("1. Why Vitals"));
k.push(tnote("\"We are the only profession uniquely situated to address this issue nonpharmacologically and the myriad conditions that may lead to cardiovascular disease.\" — R. Severin, 2022"));
k.push(bullet("The Guide to Physical Therapist Practice makes vitals an **essential component of every new patient exam**."));
k.push(bullet("PTs screen for conditions that negatively impact response to intervention (e.g., high BP limiting tolerance of standing exercise after LE surgery)."));
k.push(bullet("**Patients are often asymptomatic despite abnormal vitals** — that is exactly why we measure."));
k.push(bullet("The set: heart rate, blood pressure, respiration rate, body temperature + the modern additions — **gait speed, waist circumference, BMI**."));
k.push(h1("2. Heart Rate"));
k.push(bullet("Normal adult resting: **60–100 bpm**. Below 60 = **bradycardia**; above 100 = **tachycardia** (more in cardiopulm courses)."));
k.push(bullet("Manual sites: **brachial, radial, carotid, femoral, dorsalis pedis**. Devices: pulse oximeter (in your lab kit), digital BP monitor."));
k.push(bullet("Affected by: medications, emotional status, age, gender, environmental temperature, physical conditioning."));
k.push(h1("3. Blood Pressure"));
k.push(bullet("**Normal: <120 systolic AND <80 diastolic.** **Elevated: 120–129 AND <80.** Then stage 1, stage 2 hypertension, hypertensive crisis per the staging table."));
k.push(...fig(E+"vit6-06.png",1650,1275,"Factors affecting HR and the current adult BP staging table (Vitals deck)"));
k.push(tip("The BP staging table is the module's learning activity — you match levels to stages. Know it cold, and expect sync to cover when values indicate or contraindicate activity."));
k.push(bullet("Affected by: age, heart rate, blood volume, dehydration, cardiac output, peripheral vascular resistance, blood viscosity."));
k.push(h1("4. Respiratory Rate"));
k.push(bullet("Adult (>12 y): **12–20 breaths/min**; know the norms across the lifespan (pediatric reference sheet is linked in the course page)."));
k.push(bullet("Assess **rate, rhythm, depth, character** — even inhale/exhale timing? Shallow or deep? Distress or noise?"));
k.push(bullet("Affected by: age, body size/stature, exercise, body position, environment, emotional stress, medications."));
k.push(h1("5. The Modern Vitals"));
k.push(bullet("**Walking speed — the functional vital sign.** Normal adult 10-m speed ≈ **1.2–1.4 m/s**. Predicts hospitalization, adverse events, need for help with ADLs, independent ambulation, household activity — and PT is uniquely positioned to improve it."));
k.push(bullet("**BMI** = weight ÷ height². Screens weight categories; **does not diagnose** body fatness or health (a muscular person can carry a high BMI)."));
k.push(bullet("**Waist circumference** — measured at the **iliac crest** (≈ umbilicus). Sex-specific cutoffs for metabolic/cardiovascular risk."));
k.push(...fig(E+"vit10-10.png",1650,1275,"Walking speed as a predictor, and waist circumference measurement (Vitals deck)"));
k.push(bullet("**BMI + waist circumference together** stratify risk best: overweight BMI + normal waist = increased risk; the same BMI + high waist = **high risk**."));
k.push(tip("Activity can outweigh the number: the least-active people with BMI <25 showed a 33% cardiovascular mortality rate — HIGHER than the most-active people with BMI >30."));
k.push(...glossary("Topic 1.1 — Quick-Reference Glossary",[
 ["Bradycardia / Tachycardia","Resting HR <60 / >100 bpm in adults"],
 ["Normal adult BP","<120 systolic and <80 diastolic"],
 ["Elevated BP","120–129 systolic and <80 diastolic"],
 ["Normal adult RR","12–20 breaths per minute (>12 years old)"],
 ["Rate–rhythm–depth–character","The four qualities assessed in respiration"],
 ["Walking speed","The functional vital sign; normal ≈ 1.2–1.4 m/s over 10 m"],
 ["BMI","Weight ÷ height²; a screen, not a diagnosis"],
 ["Waist circumference","Measured at the iliac crest; pairs with BMI for risk stratification"],
 ["Pulse sites","Brachial, radial, carotid, femoral, dorsalis pedis"]]));
k.push(pageBreak());

// ===== TOPIC 1.2 NEURO SCREEN =====
k.push(banner("TOPIC 1.2","The Neurological Screen",C.teal));
k.push(spacer());
k.push(h1("1. Where the Screen Sits and Why"));
k.push(bullet("Between examination and evaluation: subjective clues about the neurological system → tests and measures to **rule in or out** impairment and locate it."));
k.push(bullet("The screen's purpose: differentiate **where** a neurological impairment may be — which requires knowing upper vs lower motor neuron."));
k.push(h1("2. Upper vs Lower Motor Neuron"));
k.push(...fig(E+"neu3-03.png",2000,1125,"UMN vs LMN anatomy and the differences table (Neuro Screen deck)"));
k.push(compare("Upper motor neuron (UMN)","Lower motor neuron (LMN)",
 ["Brain, brainstem, spinal cord — **before** the anterior horn cell","Examples: spinal cord compression, stroke, TBI","Tone **increased**; power preserved","Reflexes **exaggerated**; Babinski/clonus present"],
 ["Anterior horn cell → peripheral nerve → muscle","Example: radiculopathy (disc pinching a root)","Tone **decreased**; power **lost**","Reflexes **lost or diminished**"],
 C.red,C.blue,C.lightRed,C.lightBlue));
k.push(bullet("Four screen components: **motor (myotomes), somatosensory (dermatomes), reflexes, CNS screens**."));
k.push(h1("3. Myotomes (Motor)"));
k.push(bullet("A **myotome** = the group of muscles innervated by a single spinal nerve root. 31 spinal nerves; 16 have specific myotomes. Most limb muscles are multi-root (biceps = C5–6–7), so the tested movements are the **strongest associations**."));
k.push(bullet("**Functional screen:** step-up ≈ **L3–4**; heel walking ≈ **L4–5**; toe walking ≈ **L5–S1**. Watch quality — fasciculations, clonus, odd motor performance."));
k.push(...fig(E+"neu11-11.png",2000,1125,"Upper-quarter myotome screen with levels (Neuro Screen deck)"));
k.push(...fig(E+"neu12-12.png",2000,1125,"Lower-quarter myotome screen with levels (Neuro Screen deck)"));
k.push(detail(["Level","Movement (UQ)","Level","Movement (LQ)"],[
 ["C1–2","Cervical flexion","L2","Hip flexion"],
 ["C3","Cervical side flexion","L3","Knee extension"],
 ["C4","Shoulder elevation","L4","Ankle dorsiflexion"],
 ["C5","Shoulder abduction (C5–6 elbow flexion)","L5","Great-toe extension"],
 ["C6","Wrist extension","S1","Ankle plantarflexion"],
 ["C7","Elbow extension","",""],
 ["C8","Finger flexion / thumb abduction","",""],
 ["T1","Finger abduction","",""]],[1100,3580,1100,3580]));
k.push(bullet("**Procedure:** demonstrate → ask if anything changed → \"hold the position\" → stabilize proximal → resist the distal segment in the exact opposite direction at end range (**except shoulder abduction and elbow extension — resist at 90°**) → hold 4–5 seconds."));
k.push(bullet("This is **not** an MMT: MMT has fixed positions (later in the course). The neuro screen can be run in any comfortable position — **gravity does not impact the nervous system**, only the musculoskeletal one."));
k.push(tip("Positive finding = significant weakness with a prolonged hold relative to the opposite side → think lower motor neuron."));
k.push(h1("4. Dermatomes (Sensory)"));
k.push(bullet("A **dermatome** = the skin area innervated by **afferent** fibers from the dorsal root of a single nerve root (afferent = periphery → brain; efferent = brain → periphery). **30 dermatomes** relay sensation."));
k.push(bullet("Roots intermingle in plexuses, so one root feeds several peripheral nerves (median n. = C6–T1; ulnar = C7–T1). Testing distinguishes **single-segment loss (root/radiculopathy)** from a **neurological-level pattern (cord lesion)**."));
k.push(bullet("**Light touch procedure:** demonstrate on an intact region (face) → eyes closed → stroke 1–2 cm at the landmark once → patient reports when, where, and same/different intensity. Tools: fingertip, cotton ball, or clothespin (sharp side / dull side)."));
k.push(...fig(E+"neu15-15.png",2000,1125,"Upper-quarter dermatome test points (Neuro Screen deck)"));
k.push(...fig(E+"neu16-16.png",2000,1125,"Lower-quarter dermatome test points (Neuro Screen deck)"));
k.push(detail(["Level","UQ landmark","Level","LQ landmark"],[
 ["C4","AC joint","L1","Inguinal area"],
 ["C5","Lateral side of elbow","L2","Anterior mid-thigh"],
 ["C6","Dorsal surface next to thumb","L3","Medial knee"],
 ["C7","Dorsal surface next to middle finger","L4","Medial malleolus"],
 ["C8","Dorsal surface next to little finger","L5","Distal medial dorsum of foot"],
 ["T1","Medial side of elbow","S1","Lateral border of foot"],
 ["T2","Apex of axilla","S2","Medial / posterior calcaneus"]],[900,3780,900,3780]));
k.push(h1("5. Reflexes"));
k.push(bullet("A reflex is a **monosynaptic** loop: tendon tap → quick stretch → muscle spindle → contraction. **Hypo**reflexia → LMN concern; **hyper**reflexia → UMN. Tap **several times** to reveal fatigue or fading."));
k.push(...fig(E+"ref3-03.png",2000,1125,"Upper-quarter reflexes: biceps C5, brachioradialis C6, triceps C7 (Reflex deck)"));
k.push(bullet("**Biceps (C5):** cradle the arm, thumb over the tendon, strike your own thumbnail. **Brachioradialis (C6):** hold the patient's thumb firmly to pop up the tendon, strike the tendon. **Triceps (C7):** unweight the arm to relax and lengthen the muscle."));
k.push(...fig(E+"ref4-04.png",2000,1125,"Lower-quarter reflexes: patellar L2–4, Achilles S1–2 (Reflex deck)"));
k.push(bullet("**Patellar (L2–4):** strike the broad quad tendon. **Achilles (S1–2):** dorsiflex the foot to put the tendon on stretch; normal = the foot pushes into your hand."));
k.push(...fig(E+"ref5-05.png",2000,1125,"Reflex grading and the Jendrassik maneuver (Reflex deck)"));
k.push(bullet("**Grading:** 4+ very brisk (may accompany clonus) · 2+ normal · 1+ diminished · 0 none. Correlate diminished/absent with dermatome findings for root pathology; hyperactive suggests UMN."));
k.push(bullet("**Jendrassik maneuver** — patients can consciously suppress reflexes: clasp hands and pull, look away, answer questions while you strike. Document **(R)** when reinforcement was needed."));
k.push(h1("6. Central Nervous System Screens"));
k.push(bullet("**Clonus** — quick dorsiflexion → involuntary rhythmic beating; a CNS sign (stroke, cord damage, MS). **Sustained clonus (5+ beats) is abnormal.** Watch the linked video — you must recognize it."));
k.push(...fig(E+"ref7-07.png",2000,1125,"Babinski: normal toe curl vs abnormal fanning (Reflex deck)"));
k.push(bullet("**Babinski** — stroke firmly along the lateral border of the foot and around the toes. Normal = toes curl/withdraw. **Abnormal = hallux extends, toes fan → UMN.**"));
k.push(bullet("**Hoffman** — bracket the middle finger, flick the distal IP joint; positive = index/thumb flexion → think cervical cord compression."));
k.push(bullet("**Inverted supinator sign** — strike the brachioradialis region; positive = pronation or finger grasping → UMN."));
k.push(...fig(E+"ref10-10.png",2000,1125,"Summary: UMN vs LMN lesion signs (Reflex deck)"));
k.push(...glossary("Topic 1.2 — Quick-Reference Glossary",[
 ["UMN / LMN","Brain-brainstem-cord vs anterior horn cell-nerve-muscle; opposite tone and reflex findings"],
 ["Myotome","Muscle group innervated by one spinal nerve root"],
 ["Dermatome","Skin area innervated by afferent fibers of one dorsal root"],
 ["Afferent / Efferent","Sensory, periphery → brain / motor, brain → periphery"],
 ["Radiculopathy","Nerve-root pathology — the classic LMN screen finding"],
 ["Monosynaptic reflex","Single-synapse tendon-tap loop via the muscle spindle"],
 ["Reflex grades","4+ brisk/clonus · 2+ normal · 1+ diminished · 0 absent"],
 ["Jendrassik maneuver","Distraction reinforcement (clasp-and-pull) to unmask suppressed reflexes; document (R)"],
 ["Clonus","Rhythmic involuntary beating on quick stretch; sustained ≥5 beats = abnormal"],
 ["Babinski","Lateral-foot stroke; hallux extension + toe fanning = UMN sign"],
 ["Hoffman / Inverted supinator","UQ UMN screens: finger-flick → thumb/index flexion; brachioradialis strike → pronation/grasp"]]));
k.push(pageBreak());

// ===== SYNC =====
k.push(banner("MODULE 1","Sync Session — Week 1",C.teal));
k.push(spacer());
k.push(bullet("Weekly flow: async prep → sync session → practice and reflection. Tools: **PhysioU**, Canvas, lab kit, Zoom breakouts."));
k.push(tip("Two graded videos this module: Vital Signs (HR, BP, RR) and Neuro Screen (upper OR lower quarter). Graded on technique/accuracy and safety/communication — review the rubric before recording."));
k.push(bullet("Demo pearls: **no thumbs** on pulses; **be sneaky with RR** (patients change breathing when watched); make the math easy; practice a lot."));
k.push(infoBox("Breakout cases",[
 "**Mr. Allen, 55, post-knee surgery** — which vitals to measure and why, how to set up the patient, which findings change the plan of care.",
 "**Ms. Lopez, 42, right UE numbness** — which tests to perform, positioning and cueing, and what findings suggest UMN vs LMN."],C.purple,C.lightPurple));
k.push(bullet("Key takeaways: vitals = baseline for safe care; neuro screen = rule in/out neural involvement; communicate clearly, stay systematic, ensure safety."));
k.push(bullet("On small differences between resources: \"Discrepancies... let it go... for now.\" **PhysioU is the standard for technique.**"));
k.push(footer("Sources: Module 1 lecture transcripts and slide decks (Dr. Shelene Thomas; vitals lecture), Upper/Lower Quarter Systems Review documents, Sync Week 1 slides (Dr. Jason Bartley, Anthony Vertalino) — Augustana University Physical Therapy Program, PT Fundamentals (DPTH 6211), Module 1. Figures reproduced from the module slide decks."));

build(k,"/home/claude/out/Module1_VitalsAndNeuroScreen_StudyNotes.docx");
