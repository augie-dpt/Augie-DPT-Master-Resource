const L = require('/home/claude/notes_lib.js');
const {C,h1,h2,body,bullet,tnote,tip,compare,detail,infoBox,banner,glossary,fig,pageBreak,spacer,cover,build,linkBox} = L;
const E="/home/claude/emb14/";
const k=[];

k.push(...cover("Physical Therapy Fundamentals (DPTH 6211)","Module 4: Joint Motion, Mobility & Measuring ROM",
 "Topics: 4.1 Introduction to Joint Motion/Mobility • 4.2 Measuring ROM • Sync: goniometry, selective tissue tension, end feels",
 ["Watch Dr. Bartley's 19:57 intro lecture in your own Canvas module — handout + transcript are in this Drive folder",
  "PhysioU carries the how-to videos for EVERY joint region — those placements are exactly what your recorded video and practical are graded on",
  "Keep Fairchild Ch 6 (Basic Exercise: Passive and Active ROM) open beside these notes — the end-feel tables come straight from it",
  "This week's assignment: record yourself performing ROM/goniometry at the shoulder OR hip (your choice) — do it AFTER the lecture, readings, PhysioU videos, and sync"]));

// ===== 4.1 =====
k.push(banner("TOPIC 4.1","Introduction to Joint Motion / Mobility"));
k.push(spacer());
k.push(body("“Motion is lotion” — said by every physical therapist ever (Dr. Bartley's opener). Movement keeps the joint's natural lubricants present and moving, and that alone justifies a career's worth of ROM work."));
k.push(h1("1. The Vocabulary"));
k.push(detail(["Term","Definition","Watch for"],[
 ["**Range of motion (ROM)**","The **distance + direction** a joint can move (flexion, extension, internal rotation, abduction…)","Described by the action performed"],
 ["**Flexibility**","**PASSIVE** extensibility of connective tissue allowing a full, pain-free ROM","Hypo- OR hyper-mobility both change the ROM you'll measure"],
 ["**Accessory joint motion (joint play)**","Arthrokinematic, **non-physiologic** movement at the joint surfaces","Deferred to Therapeutic Interventions — just know it exists"],
 ["**Goniometry**","Measurement of the **total available ROM** at a specific joint","Goniometer or inclinometer — both are in your student kit"],
 ["**End feel**","The resistance felt when you apply **overpressure** at end range (ligament, capsule, muscle, or soft tissue pushing together)","Every joint has a normal expected end feel in **quantity AND quality** — wrong type or wrong point in the range = abnormal"]],[2300,4160,2800]));
k.push(h1("2. Why We Move Joints (and What It Moves)"));
k.push(bullet("Uses: keep soft tissue mobile • minimize motion loss after immobility or painful periods • mitigate further loss of range • maintain joint-structure health (the lubricant argument again)."));
k.push(bullet("Structures affected when a joint moves through range: joint cartilage + capsule, ligaments, muscles/tendons/fascia, arteries–veins–capillaries, nerves, skin, lymphatics. **Essentially every system** — which is why you assess quantity AND quality AND the patient's response, not just a number."));
k.push(h1("3. The Four Types of ROM"));
k.push(detail(["Type","Who produces the force","When you choose it"],[
 ["**PROM** (passive)","An outside force only — therapist, the patient's other limb, pulleys, a CPM machine. **No voluntary contraction**","AROM is painful; motion is restricted (acute post-op orders); or motion quality is altered and you're rebuilding joint awareness/symmetry"],
 ["**AAROM** (active-assisted)","Patient contracts as able; an outside force helps through the rest. **Patient participation required**","Weakness, fatigue, or pain limits full AROM; spasticity/high tone causes unwanted co-contraction; progressing out of PROM post-op"],
 ["**AROM** (active)","Fully the patient — no help from you, the machine, or the pulley","Maintain physiological muscle health (elasticity + contractility), coordination and neuromotor control, prevent blood pooling/clots, elicit a cardiopulmonary response"],
 ["**Resisted**","AROM **plus resistance beyond the weight of the limb**","That's therapeutic/progressive resisted exercise — next term's territory"]],[1800,3600,3860]));
k.push(tnote("PROM is NOT a stretch. PROM stays inside the currently available range — you stop at the normal end feel. A stretch deliberately pushes INTO resistance to increase range (or change the symptom response through it). Same hands, different intent."));
k.push(infoBox("⛔ Contraindications to ROM",[
 "Acute tear of tendon, ligament, or muscle",
 "Unstable, unhealed, or non-union fracture",
 "Anything demanding muscle contraction across an acutely repaired, still-healing muscle-tendon (so no ACTIVE work there)"],C.red,C.lightRed));
k.push(h1("4. Implementation Rules"));
k.push(bullet("Assess **quality, quantity, end feel, and patient response**. Move through the full available range, **in one plane, no compensations** — when a neighboring joint starts drifting (shoulder flexion wandering into abduction/ER), you've probably reached the mobilized joint's end range."));
k.push(bullet("**Body mechanics + hand placement**: limbs are heavy, and patients feel everything through your hands — “I got you, you're in skilled hands” is transmitted by grip and posture. Lab immersion drills this hard."));
k.push(tip("Two-joint muscles decide your setup. Goal = PROM? SLACKEN the muscle across the other joint — measuring hip extension, don't flex the knee (those hip flexors cross both). Goal = STRETCH? Do the opposite: elongate across BOTH joints — flex the knee to maximize the hip-flexor stretch. Same logic at the shoulder with biceps brachii and the elbow."));
k.push(h1("5. How Far Do I Go? P1–P2 and R1–R2"));
k.push(compare("Pain is dominant → move to PAIN","No pain limit → move to RESISTANCE",
 ["**P1** = first onset of pain","**P2** = motion limited BY pain (patient stops you before a normal end feel)","P1 and P2 can coincide (very acute joints) or sit far apart — hurts at 90° of abduction but tolerated to 120°"],
 ["**R1** = first onset of tissue resistance","**R2** = the limit of resistance — end of range from stiffness","**Hypomobile = R2 arrives at an abnormal quantity of range**"]));
k.push(bullet("The sync pushes the reasoning further: where the P's fall against the R's tells you what you're treating — pain versus abnormal tissue mobility — and connects to the **stage of healing**. Scenarios discussed: R2 arriving right at P1, P2 before R1 (pain is the whole story), a large gap between R1 and R2."));
k.push(linkBox("\u{1F4F1} Required PhysioU — Topic 4.1 (upper quarter)",[
 ["Head/Neck ROM","https://app.clinicalpattern.com/physiou/rom_mmt/2580/",""],
 ["Thorax ROM","https://app.clinicalpattern.com/physiou/rom_mmt/2602/",""],
 ["Shoulder ROM","https://app.clinicalpattern.com/physiou/rom_mmt/2598/",""],
 ["Elbow ROM","https://app.clinicalpattern.com/physiou/rom_mmt/2576/",""],
 ["Wrist/Hand ROM","https://app.clinicalpattern.com/physiou/rom_mmt/2607/",""],
 ["Mini Sims — Range of Motion (upper quarter learning activity)","https://app.clinicalpattern.com/physiou/rom_mmt_sim/2075/2075-1/",""]]));
k.push(body("Required reading: Fairchild 6e, Ch 6 — Basic Exercise: Passive and Active Range of Motion."));
k.push(...glossary("Topic 4.1 — Quick-Reference Glossary",[
 ["ROM vs flexibility","Distance+direction of joint movement vs passive connective-tissue extensibility"],
 ["Joint play","Arthrokinematic accessory motion at the joint surfaces (Ther Int later)"],
 ["PROM / AAROM / AROM / Resisted","None → partial → full → beyond-limb-weight patient effort"],
 ["PROM ≠ stretch","Stay inside available range vs push into resistance on purpose"],
 ["P1 / P2","Pain starts / pain stops the movement"],
 ["R1 / R2","Resistance starts / resistance ends the movement"],
 ["Two-joint rule","PROM: slacken the other joint · Stretch: elongate across both"]]));
k.push(pageBreak());

// ===== 4.2 =====
k.push(banner("TOPIC 4.2","Measuring ROM — Goniometry",C.teal));
k.push(spacer());
k.push(body("Mrs. Abdallah's surgeon wants numbers: current ROM by plane, what type of motion was measured, and how it changes over time. This topic is the how."));
k.push(h1("1. The Tool"));
k.push(...fig(E+"sync_p4-04.png",1500,844,"The three parts you will be graded on: body (protractor), stationary arm, moving arm — axis of rotation at the center (Sync Session 4 deck)"));
k.push(bullet("**Body** = the circular protractor. **Stationary arm** = fixed to the body, can't move independently. **Moving arm** = attached at the center, swings free. For EVERY joint you assess, know where those three parts belong — that placement is precisely what's graded on the recorded video and the practical exam. **Bubble inclinometer** (also in your kit) takes over for the spine, trunk, and head/neck; tape measures appear there too."));
k.push(...fig(E+"sync_p6-06.png",1500,844,"Goniometer on a real shoulder — supine shoulder flexion, axis at the joint, arms tracking the segments (Sync Session 4 deck)"));
k.push(h1("2. Measurement Rules"));
k.push(detail(["Rule","Why"],[
 ["**Bilateral, UNAFFECTED side first**","Builds the comparison baseline and shows the patient what's coming"],
 ["**At least 2 repetitions**","Rep 1 = watch (quantity, quality, symptom response, compensations). Rep 2 = measure with the goniometer"],
 ["**±5° measurement error**","Changes smaller than 5° can't be called real — that's the tool's noise floor"],
 ["**Intra-rater beats inter-rater reliability**","Same rater re-measuring is more trustworthy than different raters. Enhance it: standardized position, same tool, same person each time"]],[3100,6260]));
k.push(h1("3. Procedure for a ROM Exam (sync)"));
k.push(bullet("Determine the joint/motion → choose patient position → **palpate landmarks** → **AROM first** (how much, how it looks, how it feels to the patient, what's compensating) → if full AROM is impossible, PROM (painful? differentiate contractile vs non-contractile) → **assess end feel** (quality + WHERE in the range it lands) → measure with the goniometer."));
k.push(h1("4. Selective Tissue Tension Testing (sync)"));
k.push(detail(["Finding","Interpretation"],[
 ["AROM normal","Apply passive **overpressure** → assess the end feel"],
 ["AROM abnormal, PROM normal","Think **CONTRACTILE tissue (muscle)** — the joint moves fine when the muscle doesn't have to work"],
 ["AROM AND PROM abnormal","Must test **non-contractile** elements (ligament/capsule/inert structures, nerve)"]],[3400,5960]));
k.push(h1("5. End Feels (Fairchild Table 6.1)"));
k.push(compare("NORMAL end feels","ABNORMAL end feels",
 ["**Bony** — bone-to-bone approximation (elbow extension)","**Elastic** — muscle/tendon stretch (ankle DF with the knee extended)","**Soft-tissue approximation** — two muscle bulks meet (knee flexion)","**Capsular** — capsule/ligament stretch (shoulder flexion)"],
 ["**Empty** — stopped by pain/apprehension, no tissue resistance","A NORMAL end feel at the **wrong joint or wrong point** in the range","**Springy** — articular surface rebounding","**Boggy** — fluid in the joint","**Spasm** — reflex muscle contraction"],C.green,C.red));
k.push(linkBox("\u{1F4F1} Required PhysioU — Topic 4.2 (lower quarter)",[
 ["Lumbar ROM","https://app.clinicalpattern.com/physiou/rom_mmt/2594/",""],
 ["Hip/Thigh ROM","https://app.clinicalpattern.com/rom_mmt/2585/",""],
 ["Knee ROM","https://app.clinicalpattern.com/physiou/rom_mmt/2590/",""],
 ["Ankle/Foot ROM","https://app.clinicalpattern.com/physiou/rom_mmt/2571/",""],
 ["Mini Sims — Range of Motion (lower quarter learning activity)","https://app.clinicalpattern.com/physiou/rom_mmt_sim/2075/2075-1/",""]]));
k.push(body("Required reading: Fairchild 6e, Ch 6 (same chapter as 4.1 — it covers both performing and measuring)."));
k.push(...glossary("Topic 4.2 — Quick-Reference Glossary",[
 ["Goniometer parts","Body (protractor) · stationary arm (fixed) · moving arm (free)"],
 ["Inclinometer territory","Spine, trunk, head/neck"],
 ["Unaffected first","Always — it's your comparison baseline"],
 ["Rep 1 / Rep 2","Watch / measure"],
 ["±5°","Below this, it's measurement error, not change"],
 ["STTT logic","AROM bad + PROM good = muscle · both bad = test inert structures"],
 ["Normal end feels","Bony · elastic · soft-tissue approximation · capsular"],
 ["Abnormal end feels","Empty · misplaced-normal · springy · boggy · spasm"]]));
k.push(pageBreak());

// ===== Sync =====
k.push(banner("SYNC SESSION","Goniometry Applied + Breakout Planning",C.navy));
k.push(spacer());
k.push(body("The sync walks the goniometer, selective tissue tension testing, the ROM-measurement procedure, and end feels (all folded into the topics above), then breaks into rooms: watch an assigned patient video, decide which joint and plane of motion to measure to achieve the functional task, and plan the whole measurement."));
k.push(detail(["Breakout worksheet field (fill per joint)","What a complete answer includes"],[
 ["Joint + plane of motion","Which motion actually achieves the functional task in the video"],
 ["Patient position (why)","Standardized, stable, muscle slack where needed — justify it"],
 ["Joint stabilization (why)","What you hold still so the motion is pure"],
 ["Axis of rotation","The bony landmark the goniometer body centers on"],
 ["Stationary arm / moving arm","The segment references each arm follows"],
 ["Normal end feel","From the Table 6.1 list — expected type for that motion"],
 ["Normal ROM (AAOS)","The reference values — bring them to lab"]],[3700,5660]));
k.push(tip("A blank copy of the breakout data sheet is in this Drive folder — print a stack and drill it joint by joint. The video assignment (shoulder OR hip goniometry, recorded) grades exactly these fields, and MMT arrives next module riding the same outline."));

build(k,"/home/claude/out/Module4_ROM_StudyNotes.docx");
