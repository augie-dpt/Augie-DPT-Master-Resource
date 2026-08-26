const L = require('/home/claude/notes_lib.js');
const {C,h1,h2,body,bullet,tnote,tip,compare,detail,infoBox,banner,glossary,fig,pageBreak,spacer,cover,build,linkBox} = L;
const k=[];

k.push(...cover("Primary Care Physical Therapy (DPTH 6711)","Module 14: Special Populations & Do-Not-Want-to-Miss List",
 "Lectures: 14.1 Obstetrics • 14.2 Pediatrics & Adolescents • 14.3 Geriatrics • 14.4 Do-Not-Want-to-Miss Conditions (Dr. Jason Bartley)",
 ["Reading thread: Boissonnault & VanWye Ch 17–20 — (B&V) tags below mark content sourced from the required text",
  "The DNWTM list of nine conditions is the module's capstone — every one mimics an MSK complaint and punishes delay",
  "⚑ One transcript discrepancy is flagged inline (PD arm swing) — B&V's reading retained"]));

/* ─────────────────────────── 14.1 ─────────────────────────── */
k.push(banner("LECTURE 14.1","Special Populations — Obstetrics"));
k.push(spacer());
k.push(h1("1. The Interview"));
k.push(bullet("**All obstetric patients:** current + prior pregnancies and complications · did symptoms predate pregnancy, arise during, or begin postpartum? · **urinary AND anal incontinence** (common, sensitive, both change the clinical picture) · medications started/stopped · mood and mental-health changes · pain map: back, pelvis, pubic symphysis, hip, rib."));
k.push(bullet("**Postpartum additions:** bed rest during pregnancy (prescribed or self-imposed)? · big activity drop? · **delivery type** — C-section (post-surgical complications?) vs vaginal (episiotomy? perineal tears repaired? forceps/vacuum?) · where is perineal-tissue healing now? 🎙 Most of these patients arrive with ordinary MSK complaints and happen to be pregnant or postpartum — your job is the medical screening process, not the MSK complaint in isolation."));
k.push(h1("2. Position Modifications"));
k.push(bullet("**Supine hypotension syndrome** (~10% of pregnant women): the gravid uterus compresses the IVC and/or aorta in supine → reduced cardiac output → reflexive hypotension + reduced uterine blood flow. Can also occur reclined or in prolonged standing depending on fetal position. **Relief: 30° left lateral tilt** (MRI-confirmed IVC decompression) (B&V Ch 18). **Prone: contraindicated 2nd–3rd trimester** once the uterus rises above the pelvic brim (~12–16 wk) — exception: specialty pregnancy-pillow cutouts. ★ Document which modified positions you used."));
k.push(h1("3. System Changes + What Can Go Wrong"));
k.push(detail(["System","Key facts"],[
 ["**Cardiovascular**","Blood volume up **40–50%**; HR up ~20 bpm on average (B&V). **Clots: 38% develop AFTER hospital discharge** — pain at the clot site (proximal thigh or calf more than inguinal), diffuse tenderness, discoloration, distal edema, prominent superficial veins, positive Homan's"],
 ["**HTN → preeclampsia → eclampsia**","**Preeclampsia** = elevated BP + urinary protein, typically after week 20 (serial BP + urine protein). **Eclampsia = seizures**, preceded by persistent headache, blurred vision/photosensitivity, SOB, unexplained edema (hands/feet/face), low-back or abdominal pain"],
 ["**Musculoskeletal**","Backache in **50–90%**, yet HNP is just 1 in 10,000. Diaphragm rises ~4 cm; rib circumference +6 cm (B&V). SI pain (may refer to knee/foot; sacroiliitis from peripartal infection) · **osteitis pubis** (late-term, exquisite tenderness, WB pain) · **pubic symphysis separation ≥ 10 mm** · 3rd-trimester rib dysfunction (treat DURING pregnancy — may not reverse) · headaches (migraines often resolve 3rd trimester on hormones; tension = mechanical/postural; 1st-trimester = dehydration, sleep, blood sugar, stress — education fixes these) · **diastasis recti** ≥ 2-finger RA separation, tendinous linea alba never re-shortens; low evidence for exercise/taping reducing existing separation · carpal tunnel from fluid compression of the median nerve"],
 ["**GI**","Nausea/vomiting/reflux normal (1st trimester); **hyperemesis gravidarum** = severe N/V + weight loss + electrolyte disturbance → hospitalization · constipation → pelvic-floor dysfunction, prolapse, hemorrhoids · **gallbladder disease risk rises — mimics MSK**: RUQ, thoracic, right shoulder/scapular pain (★ the classic PT pitfall — screen it)"],
 ["**Urogenital**","UTI mimics back/pelvic pain · acute cystitis = suprapubic + sacral pain · **pyelonephritis = fever + CVA tenderness + N/V** (flank pain on percussion = kidney) · up to 1/3 develop urinary incontinence, ~15% anal incontinence (possible pudendal injury) · organ prolapse may resolve or need treatment"],
 ["**Endocrine**","**Gestational diabetes** → HTN, preeclampsia, C-section risk + later type-2 DM; **cardio exercise beats diet alone** for glycemic control. IDDM in pregnancy: glucose checks before AND after exercise (post-exercise hypoglycemia), upper-body work preferred, 4 weeks of cardio produces measurable glucose change"],
 ["**Mental health**","Edinburgh Postnatal Depression Scale: good sensitivity/specificity but does NOT screen anxiety, neuroses, phobias, or personality disorders. Postpartum depression affects the child's cognitive development — and survival. Prenatal depression raises premature-birth risk (cortisol). ★ Only 18% of PTs formally screen — use the two-question screen from 14.4 and never let a scale override judgment"]],[2300,7060]));
k.push(infoBox("⚑ Eclampsia red flags — act, don't wait",[
 "Persistent headache + blurred vision/photosensitivity + unexplained edema = potential eclampsia.",
 "SOB + low-back or abdominal pain in a pregnant patient with known hypertension = urgent referral.",
 "Seizures = eclampsia = emergency services immediately."],C.red,C.lightRed));
k.push(...glossary("Lecture 14.1 — Quick-Reference Glossary",[
 ["Supine hypotension syndrome","~10%; IVC/aorta compression supine → 30° left lateral tilt"],
 ["Preeclampsia","BP + urinary protein after week 20; serial BP + urine testing"],
 ["Eclampsia","Seizures; preceded by HA, visual changes, SOB, edema, back/abdominal pain"],
 ["Hyperemesis gravidarum","Severe N/V + weight loss + electrolytes → hospitalization"],
 ["Pyelonephritis","Fever + CVA tenderness + N/V — mimics mechanical back pain"],
 ["Osteitis pubis / symphysis separation","Late-term pubic inflammation / ≥10 mm separation"],
 ["Diastasis recti","≥2-finger RA separation; linea alba never re-shortens"],
 ["Gestational diabetes","HTN/preeclampsia/C-section risk; cardio > diet for control"],
 ["Edinburgh scale","Depression screen — misses anxiety and personality disorders"]]));
k.push(pageBreak());

/* ─────────────────────────── 14.2 ─────────────────────────── */
k.push(banner("LECTURE 14.2","Special Populations — Pediatrics & Adolescents",C.teal));
k.push(spacer());
k.push(h1("1. Puberty, Nutrition, and the Growing Body"));
k.push(bullet("**Puberty** = sexual maturation; **5 Tanner stages**, stage 5 = sexually mature adult (B&V). Girls enter ~10 (signs as early as 8), peak ~14, **menarche 2–2.5 years after onset and before age 16**; boys enter ~11, peak ~16. Bone development is only confirmable by imaging. **Precocious puberty** = onset before 8 (girls) / 9 (boys) → possible CNS or endocrine disorder; ~1 in 5,000, **10× more common in girls**; early prognosticators: pubarche, thelarche, growth-rate jump."));
k.push(bullet("**Bone health:** **40% of lifetime bone mass is laid down during puberty**. Critical fat mass: **17% for menarche, 22% to maintain reproduction**. Low-BMD risk: low calories/calcium, carbonated drinks + caffeine, late/irregular menses, underweight/anorexia/bulimia, low weight-bearing activity. ★ 40% of school-age children (6–12) already carry ≥1 cardiovascular risk factor. **RED-S / Female Athlete Triad**: eating disorder + amenorrhea + low BMD — multi-system, full workup."));
k.push(bullet("**Cardiovascular development:** aerobic capacity ~65–70% of adult values · **lactate threshold HIGHER than adults** (they work at higher relative intensity) · anaerobic reserve smaller — they can't sustain anaerobic effort as long (B&V)."));
k.push(h1("2. Childhood Cancer"));
k.push(bullet("~1% of all cancers; **80% five-year survival**; average diagnosis age 6; **60% of survivors have late effects** (infertility, heart failure, secondary cancers). Driver = ACQUIRED mutation — adult carcinogen timelines don't apply. Types: leukemia, brain/spinal tumors, bone cancer, lymphomas, rhabdomyosarcoma, retinoblastoma. **Warning signs:** unusual lumps/swelling · unexplained pallor/lethargy (an active kid suddenly inactive) · new easy bruising/bleeding · ongoing localized pain · unexplained weight loss · limping · persistent fever/illness · frequent headaches WITH vomiting · sudden eye/vision changes."));
k.push(infoBox("⚑ The pediatric pain rule",[
 "Pain onset WITHOUT trauma in a child = red flag for neoplastic pathology.",
 "Children normally have transient pain WITH a cause — ongoing localized pain with no inciting incident warrants workup.",
 "Long-bone rule: constant unrelenting pain at the end of a long bone = malignant until proven otherwise; benign tumors hurt intermittently. Prevalence by site: distal femur 53% · proximal tibia 26% · humerus 12% · fibula 5% (B&V)."],C.red,C.lightRed));
k.push(h1("3. Osteochondrosis"));
k.push(bullet("**Definition:** developmental derangement of normal bone growth at the epiphyseal ossification centers — affects morphology, joint function, strength, mobility. Causes: repetitive overuse, synovitis, infection, granulation tissue disrupting blood flow. Healing is often spontaneous with normal medical care. **Four stages: avascularity → resorption → revascularization → bone healing** (residual deformity with return of function)."));
k.push(detail(["Named type — site","Presentation"],[
 ["**Panner's — capitulum**","Lateral elbow pain/swelling/ROM limits; possible loose body → shifting ROM restrictions. DDx: lateral ligament/tendon injury"],
 ["**Kienböck's — lunate**","Repetitive microtrauma or FOOSH; pain at end-range wrist extension"],
 ["**Legg-Calvé-Perthes — femoral head**","Weight-bearing bone → functional stakes: painful PROM, restricted hip IR, Trendelenburg gait, femoral-head flattening on imaging"],
 ["**Freiberg's — 2nd/3rd metatarsal**","MTP pain worse with WB and toe extension in gait. DDx: metatarsalgia"],
 ["**Scheuermann's — thoracic spine**","Marked kyphosis, especially in trunk flexion; bracing for progression + PT for mobility/strength"],
 ["**Osteochondritis dissecans**","Epiphyseal fragment separates and goes avascular: medial femoral condyle (most common), posterior patella, femoral head, talar dome, capitulum. Conservative = slow resorption; surgical removal or pinning if pain/function demand"]],[3000,6360]));
k.push(h1("4. Adolescent Idiopathic Scoliosis"));
k.push(bullet("An epiphyseal disorder; curves progress in **19% of girls vs 1% of boys**. **Adams forward-bend test is NOT reliably diagnostic** — a standing curve that corrects with flexion suggests FUNCTIONAL scoliosis (e.g., leg-length discrepancy), not structural. **Management by magnitude:** < 25° observe + PT (mobility, soft tissue, trunk strengthening) · 25–30° progressive → brace · **≥ 45–50° surgery** (instability or cardiopulmonary risk)."));
k.push(...glossary("Lecture 14.2 — Quick-Reference Glossary",[
 ["Tanner stages","5 stages of sexual maturation; 5 = adult"],
 ["Precocious puberty","<8 girls / <9 boys; CNS/endocrine workup; 10× girls"],
 ["Critical fat mass","17% menarche · 22% maintenance"],
 ["RED-S / triad","Eating disorder + amenorrhea + low BMD"],
 ["Osteochondrosis stages","Avascularity → resorption → revascularization → healing"],
 ["Panner's / Kienböck's / LCP / Freiberg's / Scheuermann's","Capitulum · lunate · femoral head · 2nd-3rd MT · thoracic spine"],
 ["Osteochondritis dissecans","Separated avascular fragment; medial femoral condyle most common"],
 ["AIS management","<25° observe · 25–30° brace · ≥45–50° surgery; Adams test unreliable"]]));
k.push(pageBreak());

/* ─────────────────────────── 14.3 ─────────────────────────── */
k.push(banner("LECTURE 14.3","Special Populations — Geriatrics",C.teal));
k.push(spacer());
k.push(h1("1. The Geriatric Red Flags"));
k.push(bullet("The six (2007 article): **frailty · delirium · dehydration · constipation · falls · depression** — plus **polypharmacy** as the added seventh. **Frailty** = \"the most problematic expression of aging\": vulnerability to even minor stressors — compromised cognition, sensorimotor change, polypharmacy, dehydration/malnutrition, lost muscle mass and strength, reduced respiratory + cardiovascular reserve, kyphosis, poor vision (B&V). Presents as extreme fatigue, unexplained weight loss, frequent infections → falls, disability, mortality. Team approach is critical."));
k.push(compare("DELIRIUM","DEMENTIA",
 ["**Acute onset · REVERSIBLE**",
  "Fluctuating awareness, disorganized thinking, memory impairment",
  "Often caused by infection or dehydration — a treatable underlying cause drives the urgency of workup"],
 ["**Chronic, gradual · progressive, NOT reversible**",
  "Consistent, progressive cognitive decline with memory impairment",
  "Structural neurological disease"],
 C.gold,C.navy,C.lightGold,C.lightBlue));
k.push(bullet("**Dehydration + constipation:** impaired thirst sensation + altered renal function predispose; dehydration worsens constipation AND can cause delirium — educate on hydration, nutrition, exercise; collaborate. **Falls:** 25–50% preventable, and **PTs are the ideal provider** for risk assessment; causes = medical (syncope, cardiac, neurogenic) + postural (MSK, neuro, vestibular); each fall cascades into lost function and mortality risk. **Polypharmacy** links directly to falls. **Depression:** diagnosed in 25–50% of geriatric inpatients, under-recognized and under-treated — keep running the two-question screen."));
k.push(tnote("The red-flag phrase: 'What should I expect since I'm not doing so well?' — that sentence (or anything like it) warrants immediate depression screening and possible referral, especially paired with fatigue."));
k.push(h1("2. Parkinson's Disease + Its Mimics"));
k.push(bullet("**PD cardinal four:** resting **pill-rolling tremor** · **bradykinesia** · rigidity (resistance to active AND passive ROM) · postural instability. Motor picture: **stooped shuffling gait with NARROW base** (the differentiator), decreased arm swing (⚑ transcript said \"increased\" — transcription error, B&V's decreased retained; verify with instructor), poor chair rises and bed mobility, **micrographia**, masked facies, slowed ADLs — movement shifts from subcortical to cortical control, so everything costs effort."));
k.push(bullet("**Normal pressure hydrocephalus:** ventricular enlargement WITHOUT raised ICP — **gait disturbance + urinary incontinence (+ dementia)**; often reversible with shunting. ★ Mimics PD's gait — incontinence plus absent tremor/rigidity is the tell."));
k.push(detail(["Parkinson's-plus (🎙 diagnosed by NO levodopa response)","Distinguishers"],[
 ["**Progressive supranuclear palsy (PSP)**","Bradykinesia + unstable gait with falls (33% fall frequently, 10% daily) · **vertical gaze palsy** (downward tracking) is the hallmark · faster cognitive decline · rapid progression"],
 ["**Multiple system atrophy (MSA)**","Basal ganglia + cortex + cerebellum degeneration · bradykinesia and rigidity **with a WIDE base** (vs PD's narrow) · frontal + autonomic dysfunction"]],[3400,5960]));
k.push(compare("PARKINSON'S DISEASE","HUNTINGTON'S DISEASE",
 ["Narrow base of support · INCREASED steps/minute",
  "Bradykinesia · pill-rolling resting tremor",
  "Responds to levodopa · slower cognitive decline"],
 ["WIDE base of support · DECREASED cadence",
  "Choreiform (jerky, arrhythmic) movements · no resting tremor",
  "No levodopa response · rapid cognitive + behavioral decline (dementia, memory, judgment, personality)"],
 C.blue,C.red,C.lightBlue,C.lightRed));
k.push(h1("3. PT Management"));
k.push(bullet("**PD:** exercise is **neuroprotective** — it can significantly slow progression. **Time sessions with levodopa's peak** (short half-life). Evidence: treadmill training for gait; progressive resistance for stairs, gait, TUG. Team: OT, speech, neuropsych, primary care. Early intervention + a follow-up plan as disease advances. **Parkinson's-plus + Huntington's:** some evidence exercise slows progression, but the focus shifts fast to maintaining current function, monitoring decline, family/caregiver education, adaptive equipment, and palliative care."));
k.push(...glossary("Lecture 14.3 — Quick-Reference Glossary",[
 ["Frailty","Vulnerability to minor stressors; fatigue + weight loss + infections"],
 ["Delirium vs dementia","Acute + reversible vs chronic + progressive"],
 ["Polypharmacy","The added red flag — linked to falls"],
 ["PD cardinal four","Resting tremor · bradykinesia · rigidity · postural instability"],
 ["NPH","Ventricular enlargement, normal ICP; gait + incontinence; shuntable"],
 ["PSP","Vertical gaze palsy + falls + rapid decline; no levodopa response"],
 ["MSA","Wide base + autonomic/frontal dysfunction; no levodopa response"],
 ["Huntington's","Chorea, wide base, decreased cadence, rapid decline"],
 ["Levodopa timing","Short half-life — schedule PT in the peak window"]]));
k.push(pageBreak());

/* ─────────────────────────── 14.4 ─────────────────────────── */
k.push(banner("LECTURE 14.4","The Do-Not-Want-to-Miss List — Nine Critical Conditions",C.navy));
k.push(spacer());
k.push(bullet("🎙 These are the conditions that, missed, end catastrophically — and PTs are uniquely positioned for early detection through detailed exams and patient trust. ★ The common thread: **high mortality/morbidity + diagnostic difficulty + MSK mimicry.** The nine: major depression · suicide risk · femoral head/neck fracture · cauda equina · cervical myelopathy · AAA · DVT · PE · atypical MI."));
k.push(detail(["Condition","Recognize + act"],[
 ["**1. Major depression**","Lifetime risk 10–25% women / 5–12% men (B&V; ⚑ transcript gave only the upper bounds — B&V retained); only **18% of PTs screen**. **Two-question screen** (past 2 weeks: down/depressed/hopeless? little interest or pleasure?) — **sensitivity 96%, specificity 57%**: negative rules OUT with confidence; positive → dig deeper. Risks: chronic illness, major loss, family history. Screen every patient"],
 ["**2. Suicide risk**","10th leading US cause of death; **3rd for ages 15–24**; 500k ED visits/yr; 2–3% of primary-care patients had ideation in the past month; **50–67% of completers saw a physician within 4 weeks** — you may be that provider. Highest risk: men 65+, ~90% with psychiatric history, substance use, recent losses. **Ask directly about intent and plans — direct questioning does not increase risk.** Then: clinic protocol, safety, urgent psych evaluation"],
 ["**3. Femoral head/neck fracture**","**Up to 30% die within a year**; 11% of athlete stress fractures hit the femoral neck. Classic: groin pain, limb shortening, external rotation — but nondisplaced can show NORMAL ROM/strength and **negative plain films for 2–3 months**. Tests: **patellar-pubic percussion** (percuss patella, auscultate pubic symphysis — asymmetric sound = occult fracture) + **fulcrum test** (forearm under thigh, gentle pressure at knee). ★ Early imaging prevents displacement — don't wait on films in high-risk patients"],
 ["**4. Cauda equina syndrome**","1–16% of disc herniations; urgent SURGICAL problem. Ask about ALL of: urinary retention/incontinence · **saddle anesthesia** · bilateral LE weakness (multi-level) · bowel dysfunction · sexual dysfunction · sensory deficits · new gait ataxia/balance loss. 🎙 Surgeons may not volunteer these — you ask. Retention + saddle anesthesia + bilateral weakness = cauda equina until proven otherwise; delay = permanent damage"],
 ["**5. Cervical myelopathy**","Causes: cervical spondylosis (older adults), trauma, **RA (atlantoaxial instability)**. Subtle early sign: **hand clumsiness** (buttons, handwriting) + gait/balance change, numb hands/feet, neck stiffness, urinary retention. UMN exam: hyperreflexia, clonus, **Babinski, Hoffman's**. Timely referral prevents irreversible cord damage"],
 ["**6. AAA**","The \"silent killer\" — asymptomatic until rupture, and rupture is usually fatal. At risk: **men > 65 with smoking/CVD history** (prevalence 65–75: men 9%, women 8%; smokers 5% vs 4%). Presentation: **non-mechanical** back/abdominal/groin pain (no change with position or movement) ± pulsatile abdominal mass (more palpable in thin patients). Refer immediately"],
 ["**7. DVT**","Common, potentially fatal via PE; **50% asymptomatic early**. Odds ratios: recent surgery **7.2** · pregnancy 6.8 · cancer 4.1 · immobility 3.9 · age 1.4/decade. Signs: calf pain/swelling/warmth/pitting edema; **calf > 3 cm vs other side**; whole-leg swelling; prior DVT. **Wells criteria** for pretest probability → duplex ultrasound when likely; ★ lingering suspicion justifies workup even with a low Wells score"],
 ["**8. Pulmonary embolism**","**Leading cause of preventable hospital death**; often from DVT post-surgery/immobility; frequently missed. New unexplained SOB, vague chest pain, tachypnea, cough, anxiety, palpitations. Wells for PE guides suspicion — refer early even when symptoms seem mild"],
 ["**9. Atypical MI**","**Most common cause of death in women — and 50% of women's MIs lack classic chest pain.** Atypicals: unexplained fatigue, SOB, sleep disturbance, nausea, pain in jaw/neck/arm/upper back. Older adults may show almost nothing — suspect on risk factors alone (smoking, HTN, DM, age, family history). Refer immediately; don't wait on more testing"]],[2300,7060]));
k.push(tip("The closing pearls: keep a high index of suspicion when the pattern isn't MSK · use the validated tools (two-question screen, Wells, the fracture special tests) · ASK DIRECTLY — suicidal intent, bowel/bladder/sexual function, atypical symptoms · collaborate and educate · refer on time. In these nine, delay is the enemy — the primary-care PT's job is to protect, not just treat."));
k.push(...glossary("Lecture 14.4 — Quick-Reference Glossary",[
 ["Two-question screen","Down/depressed/hopeless? Interest/pleasure? Sens 96% / spec 57%"],
 ["Suicide facts","3rd cause 15–24; 50–67% saw a provider within 4 weeks; ask directly"],
 ["Femoral neck fracture","30% one-year mortality; films negative 2–3 months if nondisplaced"],
 ["Patellar-pubic percussion / fulcrum","Occult-fracture special tests (B&V)"],
 ["Cauda equina","Retention + saddle anesthesia + bilateral weakness → immediate referral"],
 ["Cervical myelopathy","Hand clumsiness first; UMN signs: hyperreflexia, clonus, Babinski, Hoffman's"],
 ["AAA","Men >65 + smoking/CVD; non-mechanical pain ± pulsatile mass"],
 ["DVT odds ratios","Surgery 7.2 · pregnancy 6.8 · cancer 4.1 · immobility 3.9 · age 1.4/decade"],
 ["Wells criteria","Pretest probability for DVT and PE"],
 ["Atypical MI","Fatigue + SOB + nausea + jaw/neck/arm/upper-back pain — women especially"]]));

build(k,"/home/claude/out/Module14_SpecialPopulations_StudyNotes.docx");