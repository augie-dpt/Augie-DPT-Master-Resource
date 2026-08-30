const L = require('/home/claude/notes_lib.js');
const {C,h1,h2,body,bullet,tnote,tip,compare,detail,infoBox,banner,glossary,fig,pageBreak,spacer,cover,build,linkBox} = L;
const k=[];

k.push(...cover("Musculoskeletal Practice I (DPTH 6412)","Module 3: LBP Rehabilitation Part 1",
 "Topic 1: Evidence-Based Treatment for LBP • Topic 2: Rehab for Referred/Radiating Pain (+ common interventions) • Topic 3: Rehab for Mobility Impairment • Lectures by Dr. Barrett",
 ["Watch the lectures in your own Canvas module — these notes condense them, they don't replace them",
  "★ The spine of this module is the LBP decision tree + the treatment-progression schematic — every case walks one of those paths",
  "Big evidence theme: EXERCISE works, no single flavor wins, and matched directional preference is the one prescription with a 7.8× payoff"]));

/* ─────────────── TOPIC 1 ─────────────── */
k.push(banner("TOPIC 1","Introduction to Evidence-Based Treatment for LBP"));
k.push(spacer());
k.push(h1("1. Conservative vs Surgical — and Some Humility"));
k.push(bullet("Long-term outcomes for PT and surgery are **similar** (stenosis trial: equal function at 2 years — though 50% of the PT arm crossed over to surgery, and 65% of eligible patients refused randomization because they wanted surgery). Nobody treats LBP well enough yet — it's a worldwide epidemic — and PT needs to market its value better. Message for day one: conservative care is a legitimate first choice."));
k.push(h1("2. What the Evidence Actually Supports"));
k.push(detail(["Intervention","Verdict"],[
 ["**Exercise (any)**","Works — meta-analyses agree, especially exercise + education (even preventive). But **motor-control exercise = general exercise**, graded activity = graded exposure = general exercise, **McKenzie > placebo but = general exercise**. Rule of thumb: whatever exercise your patient will actually DO is the right exercise"],
 ["**Graded activity / graded exposure**","Behavioral-cognitive ramps toward normal activity: graded activity = operant-conditioning step-ladder of activity quotas; graded exposure = ranked feared-activity list, least-feared first (mailbox before the block). Both beat minimal treatment"],
 ["**Walking / aerobic exercise ★**","The LARGEST impact on reducing LBP: meta-analysis of 9 trials — walking matched other non-pharmacologic care at 1 year; cheap, accessible, ideal for the not-yet-exercise-tolerant. Dose target ≈ AHA's **150 min/week**"],
 ["**Manipulation + mobilization**","Both safe and both reduce pain + disability in chronic LBP; **manipulation showed the larger effect (especially disability)**. First-line for the right patient (CPR below): safe, effective acute + chronic, and takes ~45 seconds. Never a standalone plan"],
 ["**Dry needling**","Beats sham; beats acupuncture short-term (equal long-term); ≈ standard PT alone — works best MULTIMODAL. Proposed central mechanism: supraspinal pain control via periaqueductal gray + diffuse noxious inhibitory control"],
 ["**Education**","Acuity-matched: anatomy-model/biomedical teaching shows NO benefit and can worsen pain · acute → reassurance + return-to-normal-activity · chronic → **pain neuroscience education + active intervention** (improves fear, anxiety, pain, disability, and healthcare utilization)"]],[2700,6660]));

k.push(pageBreak());
/* ─────────────── TOPIC 2a: FRAMEWORK + CENTRALIZATION ─────────────── */
k.push(banner("TOPIC 2","Rehab for Referred/Radiating Pain — Framework and Centralization"));
k.push(spacer());
k.push(h1("1. The Decision Tree and Treatment Progression ★"));
k.push(bullet("**TBC decision tree** (module folder): centralizes with ≥2 movements in one direction, or centralizes one way + peripheralizes the other → **specific exercise (directional preference)**. Recent onset (<16 days) + no symptoms distal to the knee → **manipulation/mobilization**. Neither → weigh subgroup factors (favoring specific exercise: posture preference, centralization, peripheralization opposite the centralizing direction; against: back-pain-only, status quo with all movements)."));
k.push(bullet("**Nerve-root treatment progression** (2016 guideline schematic): irritable + inflamed? → settle inflammation (active rest, modalities, pain control) → peripheralizes with flexion AND extension or +crossed SLR? → consider **traction** → centralizes with flexion or extension? → **directional-preference exercise** (most discogenic patients START here) → stops centralizing, nothing below the knee? → consider **manipulation** → then address **movement coordination impairment**. Memorize the ladder; every case below climbs it."));
k.push(h1("2. Centralization Vocabulary and Mechanics"));
k.push(detail(["Term","Meaning"],[
 ["**Abolition centralization**","Most distal pain GONE, pain now only proximal — the best response"],
 ["**Reduction centralization**","Same location, lower intensity"],
 ["**Unstable centralization**","Improves during repeated movement, snaps back on weight-bearing — a clue, not yet a cure"],
 ["**Peripheralization**","Leg pain worsens/spreads distally — the direction to AVOID"],
 ["**No change**","Status quo — re-examine the classification"]],[2700,6660]));
k.push(bullet("**Directional preference is broader than centralization** (pain can hold steady while ROM or posture tolerance improves) — but centralization is its cardinal sign. The payoff data: DP + MATCHED exercise → **7.8× greater odds of a good outcome**; DP + UNmatched exercise → negatively associated (the wrong prescription can HARM); no DP initially but continued McKenzie care → 3.4× — some patients centralize on visit three, not visit one."));
k.push(bullet("**Extension progression + dosing**: prone lying 5 min (pillow under hips first if extension-intolerant, then slide it out) → prone on elbows 5 min (great home carryover) → **prone press-ups 3×10** (± PA overpressure; cue: press only until the ASIS begins to lift — locked elbows with hips off the table add nothing) → repeated **standing extension 3×10**. Mechanism evidence: 10 minutes of press-ups + PAs increased **water diffusion in the L5-S1 disc**, and the patients whose discs re-hydrated were the ones whose pain dropped. **Lateral shift first, always**: never pump extension into a shifted spine — correct it in prone (better tolerated) or standing against a wall (pelvis pressed across; rising back pain is fine while the leg clears). Flexion-preference patients get the mirror ladder: single → double knee-to-chest, seated → standing flexion. (Origin story: Robin McKenzie, 1956 — a patient lay prone on an accidentally raised table, arched into full extension, and stood up with the leg pain gone.)"));

k.push(pageBreak());
/* ─────────────── TOPIC 2b: TRACTION + NEURODYNAMICS ─────────────── */
k.push(banner("TOPIC 2 (cont.)","Traction, Neurodynamics, and the Three Patient Types"));
k.push(spacer());
k.push(h1("1. Traction — the Honest Literature Tour"));
k.push(bullet("**TBC traction criteria** (Fritz, Cleland & Childs 2007): leg symptoms + neurologic signs + peripheralization with movement testing + **crossed SLR** — i.e., the super-acute, flared, large-herniation radiculopathy patient. NOT for general chronic LBP or mobility impairment. Try **manual traction first** (hook-lying, lean back through the shins ± mobilization belt) — a two-minute audition before committing to the machine. The evidence seesaw: 2016 — mechanical traction added to extension-oriented treatment adds NOTHING; 2018 — prone traction + PT beat PT alone; 2013 — traction beat heat/IFC packages (i.e., beat almost-nothing); 2021 — supine traction added short-term benefit. **CPG verdict**: 2012 'conflicting'; **2021 — do NOT use mechanical traction for chronic LBP with leg pain**; small short-term effects only when added to low-value care, washed out when added to exercise + mobilization. Acute use = your clinical judgment, with a reason."));
k.push(h1("2. Neurodynamics"));
k.push(bullet("Nerves need **space, movement, and blood**; the nervous system is one continuous structure that slides with you. **Sliders** (slacken one end while tensioning the other — look up while extending the knee) = better tolerated; **tensioners** (both ends loaded, on-off — slump/SLR patterning) = stronger stimulus for chronic radiculopathy but can flare. Human-trial effects at optimal tension: enhanced pain inhibition, ↓nerve stiffness, ↑ROM; overload → minor adverse events. Dosing is wide open in the literature (1–5 min, 1–45 reps — reason it out); **neither is for the ACUTE stage**; sliders arrive subacute, tensioners subacute-to-chronic. Home versions: seated slump glide (sit up + knee extension + DF ↔ slump + flexion, ~30 reps), seated DF/PF glide, supine hip-flexed knee-extension glide."));
k.push(h1("3. Treatment by Presentation + Worked Cases"));
k.push(detail(["Patient type","Plan"],[
 ["**Referred pain (back > leg)**","Directional preference (usually extension) with extended time/reps · segmental PAs (central + unilateral) for extension mobility · manipulation only with clinical reasoning (herniation evidence is mixed/anecdotal; lumbar risk ≪ cervical) · then motor-control work · education = activity modification (why standing helps, lumbar roll in the car). **Case: 36F, yard work, 2-week onset, leg pain stays above the knee, clean neuro screen, flat lordosis + poor curve reversal, provocative hypomobile mid-lumbar segments, ODI 42%, FABQ 18** → internal disc derangement/referred pain: mobilize the hypomobile segments, extension DP, extension-biased mobility (NO child's-pose-style flexion), motor control later, ~2×/wk ×5 → 1×/wk ×2 (12 visits); track ODI + FABQ"],
 ["**Radiating pain (leg > back)**","Peripheralization + nerve-root signs: traction if the CPR fits · aggressive DP starting prone · **fix the lateral shift on the table before anything else** · PAs as extension mobilizations if extension centralizes · subacute: DP-consistent mobility exercise + sliders · chronic: tensioners + **cardiovascular dosing — exercise analgesia needs >50% VO2max for >10 min** (a 6-mile run ≈ 10 mg morphine; a lazy 12-minute bike spin ≠ analgesia); 150 min/wk moderate activity. **Case: 52M firefighter (work comp), woke 2 days after the job with debilitating pain, cannot sit 5 min, lay down for the 8-hour ride home; +SLR, +crossed SLR (slump DEFERRED — reasoned test selection), ↓L5-S1 dermatomes, weak DF/great-toe extension/PF, ↓Achilles** → acute herniation (screen for fracture given the occupation): pain-limited centralization (prone over pillow), PRONE mechanical traction (can't tolerate sitting/supine-with-bolster), dry needling + e-stim to hypertonic paraspinals, 'motion is lotion' in standing (walking, light elliptical — no bikes), return-to-ADL education, avoid flexion; STarT Back steers the prognosis conversation"],
 ["**Stenosis**","FLEXION preference: flexion in lying/sitting/standing ± clinician overpressure · sidelying rotational mobilizations grade 2–3 (patients love them) · manual traction in hook-lying · **hip work is half the battle**: hip-extension mobility, rectus femoris flexibility, hip longitudinal distraction (often treating coexisting hip OA at the same time), hip strength · trunk-flexor strength/endurance to control extension in gait · **avoid central PAs (they push INTO extension) and skip thrust manipulation** (end-range positioning is the problem). **Case: 83M, intermittent LBP history, 3 months of sharp/shooting LE pain + paresthesia with standing/walking, abolished by sitting/lying, now scooter-dependent and can't shower standing** → lateral foraminal stenosis: flexion-based activity modification + positional distraction, trunk-flexor endurance, hip extension ROM + strength; outcomes = **Patient-Specific Functional Scale** (his ADL goals) + ODI; frequency shaped partly by the Medicare cap. Keep them ACTIVE by any tolerable means: walking group, Tai Chi, chair/ball classes, aquatic therapy (offloads the spine)"]],[2500,6860]));
k.push(tnote("The 16-year-old cross-country runner from the DP lectures is the crossover case worth re-reading: Beighton 8/9, hypermobile L4-L5 PAs, lateral shift, tight hip flexors, abolition centralization with prone-on-elbows, ODI 30%, FABQ 12 — 'discogenic' symptoms at 16 mean the MOVEMENT is the driver. DP first (3 weeks), then reclassify to MCI: stabilization, hip-flexor flexibility, endurance-dosed exercise matched to the long-run mechanism (fatigue, not power), possible hypertonic pelvic floor. Protect the hypermobile segments — distribute extension to neighbors, don't hinge."));

k.push(pageBreak());
/* ─────────────── TOPIC 3 ─────────────── */
k.push(banner("TOPIC 3","Rehab for Mobility Impairment"));
k.push(spacer());
k.push(h1("1. Manipulation — Grades, Evidence, Candidates"));
k.push(bullet("**Maitland grades**: 1 (small, beginning-range) · 2–3 (mid-range) · 4 (end-range) · **5 = high-velocity low-amplitude thrust at end range** (= manipulation = thrust joint manipulation). Evidence: 2017 review, 15 RCTs, ~1,700 patients — spinal manipulation MODESTLY improves pain + function in acute LBP; lumbar manipulation is very safe (the scary case reports are cervical). Workhorse technique: **sidelying rotation manipulation** — patient sidelying, bottom leg slightly extended, top foot hooked behind the bottom knee, clear the scapula and pre-rotate from above, roll the patient toward you with the thrusting forearm, monitor the segment, rest your lower ribs on the pelvis, take up slack top + bottom, thrust with compression along the ribs + fingertip PA at the level (Puentedura's Thrust Joint Manipulation text = the optional deep-dive). Master a FEW techniques deeply rather than sampling many."));
k.push(detail(["Manipulation candidacy","Content"],[
 ["**2007 CPR (Fritz & Cleland)**","No symptoms distal to the knee · onset <16 days · lumbar hypomobility · **low FABQ** (translation: the patient is comfortable with — and believes in — the technique; skeptics respond worse) · ≥1 hip with IR >35°"],
 ["**2012 decision tree**","Not a centralizer → recent onset + nothing distal to the knee → manip/mob. Factors FAVORING: recent onset, back-pain-only, low FABQ. AGAINST: symptoms below the knee, increasing episode frequency, peripheralization on movement testing, NO pain with spring testing"]],[2700,6660]));
k.push(h1("2. The Rest of the Mobility Toolbox"));
k.push(bullet("Pain-dominant → **grade 1–2 mobilizations** for pain modulation; ROM-dominant → grades 3–4. **Post-isometric relaxation of the paraspinals**: patient draped over the table edge, ~10% effort pelvic lift on the inhale → exhale, release, therapist leans gently through sacrum + thorax into flexion — turns off guarding that blocks segmental motion. **SNAGs** (Mulligan sustained natural apophyseal glides): start TWO segments below the target, glide up + PA, sustain while the patient moves into flexion / extension / side-bend (belt version) — must be **pain-free**, repeated many times; not for the highly irritable."));
k.push(bullet("**Thrust-pattern plan**: manual therapy (thrust or non-thrust) + home exercise that KEEPS the new motion — extension gains → prone on elbows, repeated standing extension; flexion gains → single/double knee-to-chest, quadruped rock-back. Manual therapy without a matching HEP leaks away. **Subacute = regional interdependence**: screen thoracic spine, pelvis, hips + soft-tissue length; pelvis tools — anterior/posterior innominate mobilizations + muscle energy techniques; hip tools — extension + flexion mobilization, contract-relax, hip-flexor stretching."));
k.push(tnote("The hip debate, both barrels: passive hip extension IS reduced in active people with chronic LBP (2015) — but the trial titled 'When treating coexisting low back pain and hip impairments, focus on the back' found that ADDING hip-specific treatment to usual LBP care improved neither pain nor disability, short- or long-term. Treating the hip improves the hip; it may not move the back-pain needle. Let the exam and your reasoning decide, not habit."));

k.push(pageBreak());
/* ─────────────── STUDY ─────────────── */
k.push(banner("MODULE 3","Reading Map and Glossary"));
k.push(spacer());
k.push(detail(["Topic","Source"],[
 ["Framework","LBP Decision Tree 2021 (module folder) + the 2016 nerve-root treatment-progression schematic"],
 ["Handouts","Intro to Evidence-Based Treatment · Rehab: Referred/Radiating Pain · Common Interventions · Mobility Impairment handouts + Sync 3 student copy (module folder)"],
 ["Optional text","Puentedura, Thrust Joint Manipulation (technique videos in the lecture)"],
 ["Assessment","Quiz 3 · PhysioU intervention videos hyperlinked throughout the decks"]],[2600,6760]));
k.push(spacer());
k.push(...glossary("Module 3 Quick-Reference Glossary",[
 ["Directional preference","The movement direction that centralizes symptoms or improves function; matched exercise = 7.8× better odds"],
 ["Abolition / reduction / unstable centralization","Distal pain gone / same place, less intense / improves then rebounds on weight-bearing"],
 ["Graded activity vs graded exposure","Quota-based activity ramp vs ranked feared-activity reintroduction"],
 ["Exercise analgesia","Endorphin-mediated pain relief needing >50% VO2max for >10 min"],
 ["Prone progression","Prone 5 min → elbows 5 min → press-ups 3×10 → standing extension 3×10"],
 ["Lateral shift correction","Table or wall-based re-centering — always precedes extension work"],
 ["TBC traction criteria","Leg symptoms + neuro signs + peripheralization + crossed SLR"],
 ["2021 CPG traction verdict","Not for chronic LBP with leg pain; acute use = reasoned judgment"],
 ["Sliders vs tensioners","One end slack (gentler) vs both ends loaded (stronger, chronic-stage)"],
 ["Maitland grade 5","High-velocity low-amplitude end-range thrust = manipulation"],
 ["2007 manipulation CPR","<16 days, nothing distal to knee, hypomobility, low FABQ, hip IR >35°"],
 ["SNAG","Mulligan sustained natural apophyseal glide — pain-free, two levels below, sustained during movement"],
 ["Post-isometric relaxation","~10% contraction + exhale release to quiet guarding paraspinals"],
 ["Regional interdependence","Subacute screening of thoracic spine, pelvis, hips as contributors"],
 ["'Focus on the back' trial","Adding hip treatment to LBP care improved hip mobility but not pain/disability"],
 ["Patient-Specific Functional Scale","Patient-named activities rated over time — goal-tailored outcome measure"],
 ["Pain neuroscience education","Chronic-stage education paired with active care; reduces fear, pain, disability, utilization"],
 ["Motion is lotion","Acute-stage dosing philosophy: any tolerated movement in the preferred direction"]]));

build(k,"/home/claude/out/Module3_LBPRehabilitationPart1_StudyNotes.docx");
