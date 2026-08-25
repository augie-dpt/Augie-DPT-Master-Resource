const L = require('/home/claude/notes_lib.js');
const {C,h1,h2,body,bullet,tnote,tip,compare,detail,infoBox,banner,glossary,fig,pageBreak,spacer,cover,build,linkBox} = L;
const E="/home/claude/emb9/";
const k=[];

k.push(...cover("Human Physiology (DPTH 6131)","Module 3: The Cardiovascular System",
 "Topics: 3.1 Introduction to the Cardiovascular System (4 lectures) • 3.2 Common Cardiovascular Conditions • 3.3 The Aging Cardiovascular System",
 ["Watch this module's lecture videos (Dr. K) in your own Canvas module — video links are cohort-specific",
  "Assessments: Cardiovascular Individual Quiz → Team Quiz (Zoom + webcam); sync session runs a team quiz + 5 case studies",
  "Dr. K teaches Cardiopulm, Pharm, and Complex Patients later — everything here is the foundation she will build on"]));

// ===== 3.1 =====
k.push(banner("TOPIC 3.1","Introduction to the Cardiovascular System"));
k.push(spacer());
k.push(h1("1. Components and the Path of Blood"));
k.push(bullet("Three components: the **heart** (central pump), the **vessels** (network), and the **blood** (the transport medium for oxygen, nutrients, hormones, and waste). The system also regulates **temperature, pH, and fluid balance**, and protects through immune responses and clotting."));
k.push(infoBox("🫀 The blood-flow sequence — memorize it cold",[
 "Vena cava → **right atrium** → tricuspid valve → **right ventricle** → pulmonary valve → pulmonary artery → **lungs**",
 "Lungs → pulmonary vein → **left atrium** → mitral valve → **left ventricle** → aortic valve → **aorta** → body",
 "Valve disorders and CHF are diseases of this path — that's why PTs need it automatic"],C.blue,C.lightBlue));
k.push(...fig(E+"a_p10.png",1500,844,"Parts of the heart — use this slide as a self-quiz, as Dr. K suggests (M3T1 intro deck)"));
k.push(h1("2. The Cardiac Cycle, Heart Sounds, and Conduction"));
k.push(bullet("**Course convention: systole and diastole always refer to the VENTRICLES.** Diastole = ventricles relax and fill (includes rapid filling + atrial contraction — the atria contract while the ventricles relax); systole = ventricles contract and eject."));
k.push(detail(["Heart sound","When","What closes"],[
 ["**S1 — “lub”","Start of systole","**Mitral + tricuspid** (AV valves)"],
 ["**S2 — “dub”","End of systole / start of diastole","**Aortic + pulmonary** (semilunar valves)"],
 ["S3 / S4","—","Pathological — parked until Cardiopulm"]],[2100,3100,4160]));
k.push(...fig(E+"b_p5.png",1500,844,"The conduction system: SA node → AV node → bundle of His → Purkinje fibers (M3T1 cardiac-cycle deck)"));
k.push(bullet("**Conduction**: the **SA node** (right atrium — the natural pacemaker) fires → impulse spreads across the atria → **AV node delays the signal so the ventricles can fill** → bundle of His → **Purkinje fibers** → coordinated ventricular contraction."));
k.push(...fig(E+"b_p6.png",1500,844,"ECG waves: P, QRS, T (M3T1 cardiac-cycle deck)"));
k.push(bullet("**ECG**: P wave = atrial depolarization (atrial systole); QRS = ventricular depolarization (systole); T = ventricular repolarization (recovery). You are NOT being asked to read complex ECGs in this course — just know what the waves mean."));
k.push(...fig(E+"b_p7.png",1500,844,"Wiggers diagram — pressures, volumes, ECG, and heart sounds on one timeline (M3T1 cardiac-cycle deck)"));
k.push(bullet("**Wiggers diagram**, walked systematically: LV pressure spikes in systole (ejection) and falls in diastole (filling); LV volume does the opposite — **pressure and volume are inversely related**. Max volume = **LVEDV**, minimum = **LVESV**, and **stroke volume = EDV − ESV**. The ECG events fire BEFORE the mechanical changes — electrical causes mechanical. S1 sits at the start of systole, S2 at the start of diastole."));
k.push(h1("3. Hemodynamics: Blood Pressure and Its Four Regulators"));
k.push(bullet("**Blood pressure** = force of circulating blood on vessel walls: **systolic** (peak, during contraction) over **diastolic** (minimum, between contractions)."));
k.push(detail(["Regulator","Sensor / trigger","Response"],[
 ["**Baroreceptors**","Carotid sinus + aortic arch — vessel-wall **stretch**","↑BP → parasympathetic (↓HR, vasodilation); ↓BP → sympathetic (↑HR, vasoconstriction). The rapid responder"],
 ["**Chemoreceptors**","Carotid + aortic bodies — blood **O₂, CO₂, pH**","Low O₂ / high CO₂ / low pH → ↑respiratory rate + sympathetic drive → ↑HR and BP"],
 ["**RAAS**","Kidneys sense ↓BP → release **renin**","→ angiotensin II (vasoconstriction + aldosterone release) → aldosterone → **Na⁺ + water retention** → ↑BP"],
 ["**Autonomic NS**","Central control","Sympathetic ↑HR + vasoconstriction; parasympathetic ↓HR + vasodilation"]],[1900,3100,4360]));
k.push(...fig(E+"c_p6.png",1500,844,"The renin-angiotensin-aldosterone system (M3T1 hemodynamics deck)"));
k.push(tnote("On RAAS, Dr. K is explicit: “Please don't skip on this one.” Most blood-pressure medications act on this system, and it returns in Pharm, Cardiopulm, and Complex Patients — all courses you take with her."));
k.push(h1("4. Vessels and the Two Circulations"));
k.push(detail(["Vessel","Structure","Function"],[
 ["Arteries","**Thickest walls** — withstand pump pressure","Carry blood AWAY from the heart (oxygenated — except pulmonary arteries)"],
 ["Arterioles","Muscular regulators","Control flow into capillary beds"],
 ["**Capillaries**","**Thinnest walls — one cell**","Gas, nutrient, and waste exchange"],
 ["Venules","Thin collectors","Gather blood from capillaries"],
 ["Veins","Less muscular, low pressure, **one-way valves**","Return blood to the heart (deoxygenated — except pulmonary veins)"]],[1500,3400,4460]));
k.push(...fig(E+"c_p11.png",1500,844,"Systemic vs pulmonary circulation, side by side (M3T1 hemodynamics deck)"));
k.push(compare("Systemic circulation","Pulmonary circulation",
 ["**LV → aorta → body → RA**","Delivers oxygen + nutrients, removes waste"],
 ["**RV → pulmonary arteries → lungs → pulmonary veins → LA**","CO₂ traded for O₂ — the gas-exchange loop (more next module)"],
 C.red,C.blue,C.lightRed,C.lightBlue));
k.push(h1("5. Cardiovascular Response to Exercise"));
k.push(bullet("Two headline adaptations: **blood flow shifts to active muscle**, and **peripheral vasodilation** in the working muscle lets it through. **HR rises linearly with intensity** (sympathetic on, parasympathetic off) until HRmax; **SV rises** (venous return + contractility) then plateaus; **CO = HR × SV** reaches **20–30 L/min** in intense exercise."));
k.push(...fig(E+"d_p5.png",1500,844,"Where cardiac output goes: rest vs exercise — away from the gut, to muscle AND the heart itself (M3T1 exercise deck)"));
k.push(...fig(E+"d_p6.png",1500,844,"Factors influencing cardiac output: contractility, preload, afterload, heart rate (M3T1 exercise deck)"));
k.push(detail(["Factor","Mechanism → effect on CO"],[
 ["**Contractility**","Stronger contraction → more complete ejection → ↑SV → ↑CO"],
 ["**Preload**","↑venous return stretches the ventricle → **Frank-Starling law** → stronger contraction → ↑SV → ↑CO"],
 ["**Afterload**","↓resistance downstream → easier ejection → ↑SV → ↑CO"],
 ["**Heart rate**","↑cycles/min → ↑CO — **until it's too fast**: diastolic filling time shrinks, SV falls, CO can drop. Balance matters"]],[2200,7160]));
k.push(bullet("**Endurance-training effects** — at the heart: ↑SV (contractility + venous return), ↓resting HR (more parasympathetic tone), more efficient function. At the muscle: **capillary growth** (better gas/nutrient exchange), better redistribution via vasodilation."));
k.push(bullet("**The PT loop Dr. K wants you to internalize**: assess capacity (exercise/field tests, 1RM, physical-activity measures) → prescribe individually → adjust within/between sessions (**RPE, dyspnea scales, talk test, HR**) → reassess → progress workload so RPE stays constant as the patient adapts. That loop IS the job, in every setting."));
k.push(...glossary("Topic 3.1 — Quick-Reference Glossary",[
 ["Systole / diastole","Ventricular contraction-ejection / relaxation-filling (course convention: ventricles)"],
 ["S1 / S2","AV-valve closure at systole's start / semilunar closure at its end"],
 ["SA → AV → His → Purkinje","The conduction chain; AV node delays for filling"],
 ["P / QRS / T","Atrial depolarization / ventricular depolarization / repolarization"],
 ["LVEDV − LVESV","= stroke volume, straight off the Wiggers diagram"],
 ["Baroreceptors vs chemoreceptors","Stretch sensors vs O₂-CO₂-pH sensors"],
 ["RAAS","Renin → angiotensin II → aldosterone → sodium + water retention → ↑BP"],
 ["CO = HR × SV","Up to 20–30 L/min in intense exercise"],
 ["Frank-Starling law","More stretch (preload) → stronger contraction"],
 ["Preload / afterload","Filling load before contraction / resistance after ejection"]]));
k.push(pageBreak());

// ===== 3.2 =====
k.push(banner("TOPIC 3.2","Common Cardiovascular Conditions",C.teal));
k.push(spacer());
k.push(tnote("Dr. K's frame for every condition: define it, get the basic pathophys, recognize the signs, know the PT implications. The deep dive waits for Cardiopulm — this is the foundation. (Her words on this lecture: it's longer, “please don't skip this one.”)"));
k.push(h1("1. Atherosclerosis"));
k.push(...fig(E+"e_p3.png",1500,844,"Atherosclerosis, stage by stage: endothelial damage → LDL → foam cells → fatty streak → fibrous cap → plaque (M3T2 deck)"));
k.push(bullet("**The cascade**: endothelial damage (hypertension, smoking, high cholesterol) → **LDL** enters the artery wall → macrophages engulf it and become **foam cells** → **fatty streak** (the earliest visible sign) → smooth-muscle cells migrate and form the **fibrous cap** → plaque. The wall thickens, loses elasticity, and the lumen narrows."));
k.push(detail(["Where","Result","Presentation"],[
 ["Coronary arteries","**CAD**","Angina, shortness of breath, fatigue; ↑MI risk"],
 ["Cerebral vessels","**Stroke/CVA, TIAs**","Limb weakness, speech difficulty, vision changes"],
 ["Aorta","**Aneurysm** (wall weakening)","Rupture = massive internal bleed; the most-reported survivor symptom is a **sudden severe headache**"],
 ["Peripheral (legs)","**PAD**","**Claudication** — painful cramping with activity, relieved by rest; non-healing wounds; necrosis/gangrene → amputation"]],[2000,2400,4960]));
k.push(bullet("PT role: exercise to support circulation, and risk-factor education — **modifiable** (diet, smoking, behavior) vs **non-modifiable** (age, gender, heredity)."));
k.push(h1("2. Hypertension"));
k.push(bullet("Chronic BP elevation; the core mechanism is **increased peripheral resistance** from narrowed or stiffened vessels (Dr. K's analogy: drinking through a cocktail straw instead of a boba straw). RAAS activation, sympathetic overactivity, and sodium/water retention contribute. Often **asymptomatic** — progression brings headaches, dizziness, blurred vision, SOB. Diagnosis takes **repeated measurements**, never one reading."));
k.push(...fig(E+"e_p8.png",1500,844,"AHA blood-pressure categories + ACSM exercise guidance for hypertension (M3T2 deck)"));
k.push(tip("Normal is BELOW 120 AND below 80 — 120/80 itself is NOT normal, whatever your parents think. Learn the AHA categories now; they follow you through the whole profession."));
k.push(bullet("**Why PTs own this**: patients see us far more often than their PCP. Best practice = **check BP every visit** — if diagnosis requires repeated readings, we're the ones positioned to catch it. Then: lifestyle/risk-factor education and ACSM-guided exercise prescription (aerobic emphasized throughout this system)."));
k.push(h1("3. Valve Disorders"));
k.push(...fig(E+"e_p9.png",1500,844,"Normal, stenosis, regurgitation — and mitral valve prolapse (M3T2 deck)"));
k.push(detail(["Type","Problem"],[
 ["**Stenosis**","Valve **won't open** properly"],
 ["**Regurgitation**","Valve **won't close** — blood leaks backward"],
 ["**Prolapse** (mitral = most common)","Leaflets bulge into the atrium during contraction → can leak; usually milder than true regurgitation. Signature sound: **mid-systolic click**"]],[3000,6360]));
k.push(bullet("S&S: **murmurs** (turbulent flow), fatigue with activity, palpitations, SOB (exertion or lying down), sharp chest pain (MVP leaflet tension), dizziness/**syncope** (classically aortic stenosis), LE/abdominal swelling, persistent cough or wheeze (severe left-sided disease)."));
k.push(compare("Valve repair","Valve replacement",
 ["**Preferred when possible** — preserves the native valve","Better long-term outcomes"],
 ["**Mechanical** (titanium/carbon): very durable but **lifelong anticoagulation**","**Biological** (pig/cow/human tissue): no long-term anticoagulation, but replaced every **10–20 years**"],
 C.teal,C.blue,C.lightTeal,C.lightBlue));
k.push(h1("4. Arrhythmias"));
k.push(bullet("**AFib** (incredibly common): chaotic atrial signals — the atria **quiver instead of contracting** → poor ventricular filling; raises stroke and MI risk. **VTach** (incredibly dangerous): abnormal VENTRICULAR signals — life-threatening; managed with meds, cardioversion, or an ICD. Both present with palpitations, dizziness, syncope, fatigue."));
k.push(infoBox("⚠ The PT emergency rule",[
 "At bedside you CANNOT tell AFib from VTach by symptoms alone.",
 "**Symptomatic patient → get the AED.** VTach is a shockable rhythm; the AED decides.",
 "ECG-strip recognition training comes in Cardiopulm — the preparedness mindset starts now."],C.red,C.lightRed));
k.push(h1("5. Congestive Heart Failure"));
k.push(...fig(E+"e_p16.png",1500,844,"CHF fluid overload: effusions, pulmonary edema, ascites, distal edema (M3T2 deck)"));
k.push(bullet("The heart **can't pump effectively** → fluid backs up. Pathophys: weakened muscle, **reduced ejection fraction**, fluid overload. S&S: SOB, chronic cough, fatigue — and the fluid map: **pleural effusion = fluid AROUND the lungs; pulmonary edema = fluid WITHIN the lungs** (know the difference), plus ascites (abdomen) and distal edema."));
k.push(bullet("PT: assess exercise tolerance, teach **energy conservation**, address respiratory limitations, prescribe by the ACSM CHF guidelines (aerobic emphasized)."));
k.push(...glossary("Topic 3.2 — Quick-Reference Glossary",[
 ["Foam cells / fatty streak","Lipid-stuffed macrophages / earliest visible atherosclerosis"],
 ["CAD · CVA · PAD","Atherosclerosis in coronary, cerebral, peripheral arteries"],
 ["Claudication","Activity-triggered leg cramping relieved by rest — the PAD signature"],
 ["AHA normal BP","<120 systolic AND <80 diastolic"],
 ["Stenosis vs regurgitation","Won't open vs won't close"],
 ["Mid-systolic click","The mitral-valve-prolapse sound"],
 ["Mechanical vs biological valve","Lifelong anticoagulation vs 10–20-year lifespan"],
 ["AFib vs VTach","Common quivering atria vs life-threatening ventricular rhythm — AED when in doubt"],
 ["Pleural effusion vs pulmonary edema","Fluid around vs within the lungs"],
 ["Ejection fraction","The pumping-effectiveness number that falls in CHF"]]));
k.push(pageBreak());

// ===== 3.3 =====
k.push(banner("TOPIC 3.3","The Aging Cardiovascular System",C.teal));
k.push(spacer());
k.push(...fig(E+"f_p3.png",1500,844,"Structural changes of the aging heart and vessels (M3T3 deck)"));
k.push(detail(["Aging change","Consequence"],[
 ["Large-artery fibrosis → **stiffness**","**Blood pressure rises**"],
 ["↓Left-ventricular compliance + **ventricular hypertrophy**","Less filling space → **↓cardiac output**"],
 ["Impaired conduction (SA → AV → Purkinje)","Impaired contractility"],
 ["**Valvular stiffening**","Stenosis"],
 ["Max heart rate declines","Lower exercise ceiling"]],[4200,5160]));
k.push(bullet("Functional bottom line: **higher BP, lower exercise tolerance, higher risk of hypertension and CHF**. These are NORMAL aging changes — and they're exactly why aging adults need more aerobic exercise than most of them realize."));
k.push(...fig(E+"f_p6.png",1500,844,"Key considerations + the test-and-measure reference list for aging adults (M3T3 deck)"));
k.push(bullet("**PT prescription**: aerobic work (walking, cycling) for endurance, strength training to hold muscle mass, flexibility/balance to cut fall risk. Assess individually, start moderate, progress gradually, monitor for adverse effects. Reference tests to know: **6-minute walk, gait speed, dual-task walking speed, Short Physical Performance Battery, strength testing, functional mobility, VO₂max** — no lab in this course, but they return before and during Cardiopulm."));
k.push(linkBox("\u{1F4DA} Required reading — Topic 3.3",[
 ["Clinical Implications of Physiological Changes in the Aging Heart","https://www.researchgate.net/publication/11996676_Clinical_Implications_of_Physiological_Changes_in_the_Aging_Heart","(required article)"]]));
k.push(...glossary("Topic 3.3 — Quick-Reference Glossary",[
 ["Arterial stiffness","Fibrosis of large arteries → the aging BP rise"],
 ["Ventricular hypertrophy","Thicker walls, smaller filling volume, lower CO"],
 ["Valvular stiffening","Age-related stenosis"],
 ["6MWT / SPPB / gait speed","Core aging-adult capacity measures"],
 ["Aging triad","↑BP, ↓exercise tolerance, ↑HTN + CHF risk"]]));
k.push(pageBreak());

// ===== Sync =====
k.push(banner("SYNC SESSION","Team Quiz + Case Studies",C.navy));
k.push(spacer());
k.push(body("The sync session runs the module's team-based quiz plus a five-case application activity (the case handout and the “Story Telling — Cardiac Physiology” worked example are both in this course's folders in this Drive). The cases preview exactly what the module wants you to connect:"));
k.push(detail(["Case","What it tests"],[
 ["1. 70-y/o, elevated BP, arterial stiffness","Aging changes → hypertension mechanisms"],
 ["2. S2 sound + diastolic dysfunction","Aortic/pulmonary valve closure; ventricular relaxation and filling"],
 ["3. 55-y/o smoker, calf pain at 10 min of walking, relieved by rest","**PAD / intermittent claudication** pathophysiology"],
 ["4. SV plateaus while HR keeps climbing","Afterload + ventricular filling time"],
 ["5. Reading a P wave on ECG","Atrial depolarization; arrhythmia screening logic"]],[3600,5760]));
k.push(infoBox("✅ Module 3 Assessments",[
 "Cardiovascular Individual Quiz — timed, no resources",
 "Cardiovascular Team Quiz — requires Zoom + webcam",
 "Harmonize “Muddy Points” — optional"],C.teal,C.lightTeal));
k.push(tip("If the module feels big, anchor on three drawings: the blood-flow path, the Wiggers diagram, and the RAAS chart. Every quiz question in this module is within one step of one of those three."));

build(k,"/home/claude/out/Module3_Cardiovascular_StudyNotes.docx");
