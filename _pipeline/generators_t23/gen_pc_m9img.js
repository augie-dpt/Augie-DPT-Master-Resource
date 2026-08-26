const L = require('/home/claude/notes_lib.js');
const {C,h1,h2,body,bullet,tnote,tip,compare,detail,infoBox,banner,glossary,fig,pageBreak,spacer,cover,build,linkBox} = L;
const k=[];

k.push(...cover("Primary Care Physical Therapy (DPTH 6711)","Module 9: Medical Imaging & Patient Observation",
 "Topics: 1 Introduction to Medical Imaging • 2 The Power of Observation (Dr. Jason Bartley)",
 ["Two lectures — watch them in your own Canvas module",
  "The two decision tools to own: the CT-vs-MRI quick guide and the ABCDE/HARMM skin-lesion screens",
  "★ marks exam-relevant content · 🎙 callouts are instructor emphasis"]));

/* ─────────────────────────── TOPIC 1 ─────────────────────────── */
k.push(banner("TOPIC 1","Introduction to Medical Imaging"));
k.push(spacer());
k.push(h1("1. Scope of PT Practice in Imaging"));
k.push(bullet("**Ordering and interpreting are distinct functions**, and the right to order varies by setting and state. Initial interpretation is typically the radiologist's, forwarded to the ordering provider; the PT then interprets findings **in the context of the plan of care**."));
k.push(bullet("**History + evidence:** military PTs have ordered imaging **since 1972** (DoD, PHS, Indian Health Service, VA, Bureau of Prisons) · James & Stewart (1975): PT-ordered imaging → similar outcomes with **~50% fewer radiographs** · AOPT Imaging SIG: saves time and money, speeds return to function · a systematic review found **20–40% of radiologist/resident statements erroneous**, some with life-threatening consequences. ★ Two interpreter-error types: **errors of observation** (faulty search patterns) vs **errors of interpretation** (failing to link abnormal signs to clinical data)."));
k.push(h1("2. Radiation + Radiographic Densities"));
k.push(bullet("**Ionizing radiation:** X-ray, fluoroscopy, bone scan, CT. **Non-ionizing (no known radiation risk): ultrasound and MRI.** Dose anchors: chest X-ray 0.1 mSv (the unit of comparison) · head CT ~30 chest films · neck CT **55** · chest CT ~117 · abdomen CT ~220 · **neonatal abdominal CT 20 mSv — two of them ≈ Hiroshima exposure (40 mSv)** · dental periapical 0.001 mSv · sea-level cosmic background 24 mrem/yr."));
k.push(bullet("**Four radiographic densities**, most → least radiolucent: **air/gas (black) → fat (dark gray) → water/soft tissue (gray) → bone (white)**; contrast media/hardware = brightest white. 🎙 Greater tissue density = greater X-ray absorption = whiter film. ★ The **fat pad sign**: displaced elbow fat pads = joint effusion — all four densities visible on one image."));
k.push(h1("3. The Modalities"));
k.push(detail(["Modality","What to know"],[
 ["**Radiograph (X-ray)**","Electron beam hits a metal target; blocked beam = white shadow, transmitted = black. Ionizing; **first-line, lowest-cost, quickest** in ortho/PT settings. Image quality factors: part thickness, patient motion, scatter, magnification, positioning distortion. **Fluoroscopy** = real-time X-ray (source under the table): fracture fixation, arthrography, myelography, diskography, biopsy, GI, sideline sports assessment, injection guidance"],
 ["**Bone scan (scintigraphy)**","Technetium-99m phosphate tracer absorbed by hydroxyapatite where bone activity is increased. **Highly sensitive, low specificity** — something is wrong, not what. Three phases; **delayed phase (4 h) most diagnostic**. Uses: early/subtle stress fractures (incl. non-displaced scaphoid invisible on X-ray), AVN, tumor/metastasis localization, osteomyelitis, prosthetic loosening. ★ Normal X-ray + positive scaphoid bone scan = non-displaced scaphoid fracture; the 3-phase scan is the most reliable test"],
 ["**Ultrasound (MSUS)**","Sonar-based, real-time, cross-sectional soft-tissue imaging; portable, low-cost, DYNAMIC (modify mid-exam, add contraction, traction, compression, ligament stress); no biologic hazards. Limits: small field of view, **highly operator-dependent**, can't penetrate bone or cross air, poor in obese patients. Uses: rotator cuff tears, congenital hip dysplasia, iliopsoas bursitis, cartilage thickness, effusion, Achilles/tendon integrity (dynamic contraction reveals tears), fracture-healing monitoring, hematoma/abscess/foreign body/masses"],
 ["**CT**","Hounsfield & Cormack (Nobel 1979): X-ray + computer processing → detailed 3D axial images; fast, available, cheaper than MRI. Best: complex/subtle fractures, loose bodies, serious trauma (ER first-line), spinal stenosis, osseous alignment, metal implants, claustrophobic patients. Limits: **HIGH dose** (neck = 55 chest films), less soft-tissue contrast — wrong tool for ligament/tendon injury"],
 ["**MRI**","Lauterbur & Mansfield (Nobel 2003): magnetic field + RF pulses align hydrogen in water — **no ionizing radiation**; tissue water content = signal. **T1 = anatomy, fluid DARK · T2 = pathology contrast, fluid BRIGHT (H₂O = bright on T2)**. Pros: best soft-tissue resolution, non-axial planes, no bone artifact. Cons: cost, time, ~10% claustrophobia (open MRI = lower accuracy), poor bone imaging; CONTRAindicated: pacemakers, aneurysm clips, cochlear implants, metal in eye/brain, large tattoos. Ortho: most sensitive for **early osteonecrosis**; ACL 95% accuracy, best for PCL; rotator cuff 90% (equal to CT for labrum); occult fractures, marrow changes, disc herniation, infection, neoplasm"]],[2400,6960]));
k.push(h1("4. CT vs MRI — the Quick Decision Guide (★)"));
k.push(compare("CHOOSE CT","CHOOSE MRI",
 ["Complex/displaced fracture — 3D bone detail",
  "Trauma in the ER — speed + availability",
  "Loose body in a joint · spinal stenosis (osseous detail)",
  "Patient with a metal implant (MRI contraindicated)"],
 ["ACL / PCL tear · rotator cuff tear (or US) — soft tissue",
  "Disc herniation — best for neural structures",
  "Early osteonecrosis — most sensitive",
  "Labral pathology: MRI or CT arthrogram — equal accuracy"],
 C.blue,C.teal,C.lightBlue,C.lightTeal));
k.push(tip("ACR Appropriateness Criteria (acr.org/Quality-Safety/AppropriatenessCriteria) are the evidence-based referral framework. The shoulder example: traumatic shoulder pain → X-ray first, everything else usually NOT appropriate initially; negative film + not resolving with conservative care → MRI without contrast usually appropriate, CT arthrogram or US maybe. Know the criteria as your ordering/recommendation framework."));
k.push(...glossary("Topic 1 — Quick-Reference Glossary",[
 ["Radiolucent / radio-opaque","Passes X-rays (dark: air, fat) / blocks them (white: bone, metal)"],
 ["Ionizing radiation","X-ray, fluoroscopy, bone scan, CT — NOT MRI or ultrasound"],
 ["Fluoroscopy","Real-time X-ray: fixation, arthrography, injections, GI"],
 ["Fat pad sign","Displaced elbow fat pads = joint effusion; all four densities on one film"],
 ["Bone scintigraphy","Tc-99m tracer; high sensitivity, low specificity; delayed phase at 4 h"],
 ["Sensitivity / specificity","True-positive rate / true-negative rate"],
 ["MSUS","Dynamic operator-dependent ultrasound; no radiation"],
 ["T1 vs T2","Anatomy, fluid dark vs pathology, fluid bright (H₂O bright on T2)"],
 ["AVN","Bone death from lost blood supply — bone scan + MRI most sensitive early"],
 ["ACR criteria","Evidence-based imaging-selection guidelines"]]));
k.push(pageBreak());

/* ─────────────────────────── TOPIC 2 ─────────────────────────── */
k.push(banner("TOPIC 2","The Power of Observation — Physical Examination Begins",C.teal));
k.push(spacer());
k.push(bullet("Observation starts **the moment you see the patient** — before a word is spoken. First visits demand rapport + data + diagnosis + plan, often inside 45 minutes, so observation is woven into history-taking. Core principles: **safety first** (observation catches life-threatening issues early) · **be thorough** (address concerning findings even off-complaint) · **ongoing process** (monitor for change beyond visit one) · **document clearly** and communicate to the team."));
k.push(h1("1. Integumentary Observation"));
k.push(bullet("Watch skin, hair, and nails in sun-exposed areas (face, neck, arms, hands). **Skin color:** pallor → anemia, shock, arterial insufficiency (check conjunctiva + palms) · **cyanosis** → respiratory/cardiac dysfunction (central vs peripheral below) · **jaundice** → liver disease, biliary obstruction, hemolytic anemia (sclera first) · gray/brown tones → adrenal insufficiency, hypertension, chronic illness (subtle)."));
k.push(compare("CENTRAL CYANOSIS","PERIPHERAL CYANOSIS",
 ["Oral mucosa, lips, tongue",
  "Pulmonary or cardiac pathology — arterial oxygen desaturation",
  "Does NOT resolve with warming",
  "★ REQUIRES IMMEDIATE MEDICAL REFERRAL — always urgent"],
 ["Fingers, toes, nail beds",
  "Circulation issues — vasoconstriction or venous stasis",
  "Less urgent — but still assess",
  "Follow up and monitor"],
 C.red,C.blue,C.lightRed,C.lightBlue));
k.push(h1("2. Skin Cancer Recognition"));
k.push(bullet("Skin cancer = the most common US malignancy (1M+ new cases/year), and **PTs see more skin than most providers** — the primary-care PT role is **recognition and referral, not diagnosis**. ★ In darker skin it often presents LATER and is more deadly from underscreening — your observational role matters even more."));
k.push(compare("ABCDE (lesion appearance)","HARMM (risk factors)",
 ["**A**symmetry — halves don't match",
  "**B**order — irregular, ragged, notched, blurred",
  "**C**olor — multiple colors/shades; black is concerning",
  "**D**iameter — > 6 mm (pencil eraser)",
  "**E**volution — any change over time"],
 ["**H**istory of melanoma — alone >3× risk, the strongest predictor",
  "**A**ge > 50",
  "**R**egular dermatologist ABSENT — no routine checks",
  "**M**ole changing",
  "**M**ale gender · ★ 4–5 factors = 4.4× melanoma likelihood; even 1–2 raises suspicion"],
 C.gold,C.red,C.lightGold,C.lightRed));
k.push(bullet("**Benign vs concerning:** symmetrical, well-defined, uniform, < 6 mm, slow-growing — vs asymmetry, irregular borders, multiple colors, > 6 mm, **friability** (easy bleeding), ulceration, rapid change."));
k.push(bullet("**Infection + abuse:** cardinal infection signs — redness, heat, edema, **red streaking (lymphangitis)**. Abuse: unusual face/neck/forearm bruising, unexplained burns, patterned grip marks — follow mandatory-reporting protocols; document thoroughly and objectively."));
k.push(bullet("**Hair + nails as systemic clues:** **clubbing** → pulmonary/cardiac disease (ask the history) · brittle/ridged nails → iron deficiency or systemic disease · discoloration → systemic or fungal (refer if persistent) · diffuse hair loss → hypothyroidism, lupus, medication effects. The three follow-up questions every time: how long? are you aware? does your physician know?"));
k.push(h1("3. Contours, Masses, and Lymph Nodes"));
k.push(bullet("**Surface anatomy red flags:** absent supraclavicular notch → enlarged node or thyroid mass (palpate + refer) · **tracheal deviation** → mediastinal mass or pneumothorax — urgent · breast asymmetry/dimpling → possible malignancy — immediate referral · **peau d'orange** breast skin → inflammatory breast cancer — immediate referral · visible neck/axilla/groin mass → palpate and document."));
k.push(compare("NORMAL LYMPH NODE","ABNORMAL LYMPH NODE",
 ["Small · mobile (moves freely)",
  "Soft consistency",
  "Non-tender"],
 ["Fixed · firm or hard",
  "**Hard + NON-tender is MORE concerning for malignancy than tender**",
  "New, changing, or unknown to the physician → REFER · ★ document size, location, mobility, consistency, tenderness for the receiving provider"],
 C.green,C.red,C.lightGreen,C.lightRed));
k.push(bullet("When palpating neck/shoulder, distinguish tight muscle bands, salivary glands, and lymph nodes."));
k.push(h1("4. Neurologic Observation — Eyes, Vision, Hearing"));
k.push(bullet("Start from the waiting room: gait, balance, tremors, facial symmetry, eye movements. **Pupils/eyes:** **mydriasis** (dilated) → CN III compression or pharmacologic · **miosis** (constricted) → Horner syndrome or medication · **ptosis** (droop) → CN III palsy or Horner — refer · **strabismus** (misaligned gaze) → cranial nerve or visual deficit. Follow-ups: noticed before? physician seen it? vision changes or eye pain?"));
k.push(bullet("**Visual symptoms to take seriously:** light flashes, **diplopia**, field loss, **photophobia** — possible retinal detachment, glaucoma, optic neuritis; ask directly and add cranial-nerve testing if concerned."));
k.push(infoBox("👂 Whispered voice test (the preferred hearing screen)",[
 "Stand BEHIND the patient, outside their visual field → cover one ear completely → whisper 3 familiar words or numbers → patient repeats → switch ears.",
 "Tuning forks are no longer recommended for routine screening.",
 "Red flag: NEW or SUDDEN hearing loss always requires medical referral. 🎙 Soft signs: repeatedly asking you to repeat yourself, or unexplained confusion without a language barrier."],C.blue,C.lightBlue));
k.push(...glossary("Topic 2 — Quick-Reference Glossary",[
 ["Pallor","Abnormal paleness — anemia, shock, arterial insufficiency"],
 ["Central vs peripheral cyanosis","Mucosa/lips/tongue = urgent referral vs digits/nail beds = circulation"],
 ["Jaundice","Yellow skin/sclera from bilirubin — liver/biliary dysfunction"],
 ["Lymphangitis","Red streaking = lymphatic-vessel infection — urgent"],
 ["ABCDE","Asymmetry · Border · Color · Diameter >6 mm · Evolution"],
 ["HARMM","History of melanoma · Age >50 · no Regular dermatologist · Mole changing · Male"],
 ["Friability","Lesion bleeds easily — malignancy red flag"],
 ["Nail clubbing","Flattened nail angle — pulmonary/cardiac association"],
 ["Peau d'orange","Orange-peel breast skin — inflammatory breast cancer, immediate referral"],
 ["Tracheal deviation","Mediastinal mass or pneumothorax — urgent"],
 ["Mydriasis / miosis / ptosis / strabismus","Dilated · constricted · drooping lid · misaligned gaze"],
 ["Diplopia / photophobia","Double vision · light sensitivity — both warrant work-up"],
 ["Whispered voice test","3 whispered words from behind, one ear covered — forks are out"]]));

build(k,"/home/claude/out/Module9_MedicalImagingPatientObservation_StudyNotes.docx");