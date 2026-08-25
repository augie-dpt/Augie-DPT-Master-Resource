const L = require('/home/claude/notes_lib.js');
const {C,h1,h2,body,bullet,tnote,tip,compare,detail,infoBox,banner,glossary,fig,pageBreak,spacer,cover,build,linkBox} = L;
const E="/home/claude/emb35/";
const k=[];

k.push(...cover("Human Anatomy (DPTH 6111)","Module 8: Abdomen",
 "Topics: 8.1 Digestive • 8.2 Urinary/Renal • 8.3 Reproductive • 8.4 Endocrine • 8.5 Lymphatic • 8.6 Abdominal Wall",
 ["Dr. Rocky Barrett (board-certified in cardiopulmonary PT) records this module — expect the clinical spotlights to lean on his home-health and geriatric practice",
  "**Knowledge Check #4 covers Module 8**",
  "The abdominal palpation skills list lives in this Drive folder",
  "This is the visceral tour: less origin-and-insertion memorising, more location-function-referral. Sync Session 8 tests exactly that with two patient cases"]));

/* ─────────────────────────── ORIENTATION ─────────────────────────── */
k.push(banner("ORIENTATION","Regions and Quadrants — the Map Everything Else Uses"));
k.push(spacer());
k.push(...fig(E+"fig_regions.png",1170,1071,"The nine abdominopelvic regions and the lines that draw them (8.6 deck)"));
k.push(compare("NINE ABDOMINOPELVIC REGIONS","FOUR QUADRANTS",
 ["Drawn by **4 parallel bisecting lines**: 2 vertical (mid-clavicle to mid-thigh) · 1 **subcostal** (inferior to rib 10) · 1 connecting the **ASISs**","Regions: **hypochondrium** (paired) · **epigastric** · **lumbar** (paired) · **umbilical** · **inguinal** (paired) · **hypogastric**"],
 ["Two perpendicular lines crossing **at the umbilicus** — vertical through mid-sternum and pubic symphysis, horizontal just superior to the iliac crests","**RUQ · LUQ · RLQ · LLQ** — the everyday clinical shorthand"],
 C.blue,C.teal,C.lightBlue,C.lightTeal));
k.push(detail(["Region","What lives there (per Sync 8)"],[
 ["**Hypochondriac**","R: liver, gallbladder · L: spleen, colon, pancreas"],
 ["**Epigastric**","Stomach, liver, pancreas, duodenum"],
 ["**Lumbar**","R: ascending colon, appendix, right kidney · L: descending colon, left kidney"],
 ["**Umbilical**","Small intestine"],
 ["**Inguinal**","R: appendix, cecum · L: descending + sigmoid colon"],
 ["**Hypogastric**","Bladder, sigmoid colon, anus, reproductive organs"]],[2400,6960]));
k.push(tip("Learn the map first and every later question gets easier. \"RLQ pain\" should instantly produce appendix and cecum; \"epigastric burning\" should produce stomach and duodenum. The sync session's whole clinical-reasoning drill runs on this table."));

/* ─────────────────────────── TOPIC 8.1 ─────────────────────────── */
k.push(pageBreak());
k.push(banner("TOPIC 8.1","Digestive System"));
k.push(spacer());

k.push(h1("1. Swallowing — Three Phases"));
k.push(detail(["Phase","Control","What happens"],[
 ["**Oral**","**Voluntary**","Tongue pushes food against the hard palate; **bolus** forms; the pharyngeal reflex fires when the bolus touches the **posterior pillars of the tonsils**"],
 ["**Pharyngeal**","**Involuntary** (brainstem)","Soft palate elevates to seal the nasopharynx; **epiglottis closes over the trachea to prevent aspiration**; pharyngeal muscles propel the bolus down"],
 ["**Esophageal**","Involuntary","**Peristalsis** carries the bolus down; the **lower esophageal sphincter relaxes** to admit it, then **closes to prevent reflux**"]],[1800,1900,5660]));
k.push(bullet("**Esophagus:** muscular tube, pharynx → stomach. Parasympathetic supply from the **vagus (CN X)** and recurrent laryngeal nerve; sympathetic from the cervical/thoracic trunk and **T5–T12.**"));

k.push(h1("2. Peritoneum and Its Folds"));
k.push(detail(["Structure","What it is and does"],[
 ["**Peritoneum**","Serous membrane: **parietal** lines the walls, **visceral** wraps the organs, the **peritoneal cavity** sits between. Protects, connects, suspends, and prevents friction"],
 ["**Mesentery**","Double layer of peritoneum tethering the intestines to the posterior wall — carries the **neurovascular supply of the gut**, stores fat, supports immunity"],
 ["**Greater omentum**","The largest peritoneal fold — immune cells, fat storage, absorbs bacteria and toxins from the cavity"]],[2300,7060]));
k.push(infoBox("Clinical spotlight — ascites",[
 "**Fluid accumulating in the peritoneal cavity**",
 "Causes: **cirrhosis** · heart failure · cancer · infection",
 "The cirrhosis link: dying, hardening liver tissue obstructs portal flow, and fluid backs into the cavity — which is why ascites and cirrhosis share a slide"],C.red,C.lightRed));

k.push(h1("3. The Organs"));
k.push(detail(["Organ","Location","Function highlights"],[
 ["**Stomach**","LUQ/epigastric","Parts: **cardia · fundus · body · pyloric part.** Wall: mucosa → submucosa → muscular (longitudinal + circular + **oblique**) → serosa. Mechanical + chemical digestion, absorption, hormone secretion"],
 ["**Spleen**","Left side, inferior to diaphragm, posterolateral to stomach, **anterior to ribs 9–10**","**Largest immune organ** — matures white cells, filters blood, recycles damaged erythrocytes"],
 ["**Liver**","**RUQ, directly inferior to the diaphragm**","Metabolism of absorbed substances · drug/chemical breakdown · **clotting-protein synthesis** · glucose storage as glycogen · **bile secretion**"],
 ["**Gallbladder + biliary ducts**","Under the liver","**Stores bile; empties it into the duodenum on demand** via the ducts"],
 ["**Pancreas**","Retroperitoneal, behind the stomach","Digestive enzymes (exocrine) + hormones (endocrine — full story in 8.4)"],
 ["**Small intestine**","Pylorus → ileocecal junction","**Duodenum** (receives chyme + enzymes + bile) → **jejunum** (main nutrient absorption) → **ileum** (completes absorption)"],
 ["**Large intestine**","Framing the abdomen","**Cecum → appendix → ascending → transverse → descending → sigmoid colon → rectum → anal canal.** Water/electrolyte absorption, feces formation and storage"]],[2100,2500,4760]));
k.push(tnote("Cirrhosis, from the lecture: healthy tissue → fibrotic tissue → carcinoma risk. The liver processes nearly everything absorbed from the gut, so when it hardens, pressure backs up through the portal system — the ascites story again, told from the other end."));

/* ─────────────────────────── TOPIC 8.2 ─────────────────────────── */
k.push(pageBreak());
k.push(banner("TOPIC 8.2","Urinary / Renal System"));
k.push(spacer());
k.push(bullet("**Jobs:** eliminate fluid and waste; regulate **blood volume, pressure, pH, and electrolytes.** Upper (abdominal) part = **kidneys + ureters**; lower (pelvic) part = **bladder + urethra.**"));

k.push(h1("1. Kidneys"));
k.push(detail(["Feature","Detail"],[
 ["**Location**","**Retroperitoneal, T12–L3**, either side of the column; the **right kidney sits lower because of the liver**; about three vertebrae tall; wrapped in perirenal fat"],
 ["**Protection**","Transverse processes, psoas, quadratus lumborum — but **vulnerable below rib 12 and above the iliac crest, lateral to the spine**"],
 ["**External / internal**","Two poles, two borders, fibrous capsule, hilum · cortex → medulla → renal pelvis"],
 ["**Neurovascular**","Renal artery and vein; renal plexus — **afferents carry pain**, efferents are sympathetic"],
 ["**Functions**","Eliminate toxic metabolites · regulate blood homeostasis and pressure · produce hormones"]],[2200,7160]));
k.push(infoBox("Kidney pain referral — the PT-relevant map",[
 "**Back / flank** on the affected side — the classic",
 "**Groin**",
 "**Lower abdomen** in severe infection",
 "This is why kidney involvement made the hypothesis list in BOTH the Module 7 and Module 8 patient cases: renal pain masquerades as musculoskeletal back pain"],C.gold,C.lightGold));

k.push(h1("2. Bladder, Urethra, and the UTI Story"));
k.push(bullet("**Bladder wall = detrusor muscle + mucosa**; internally the two **ureteric orifices + internal urethral orifice** frame the **trigone.** Innervation: vesical and inferior hypogastric plexuses."));
k.push(detail(["Male vs female","Male","Female"],[
 ["**Capacity**","~700 ml","~500 ml"],
 ["**Urethral length**","**18–20 cm**","**3–4 cm**"],
 ["**Detrusor thickness**","3.1–3.3 mm","2.7–2.9 mm"]],[2600,3300,3460]));
k.push(infoBox("Clinical spotlight — urinary tract infections",[
 "**Urethral length is the anatomy behind the epidemiology:** the short female urethra and its proximity to the anus make ascending infection far more common",
 "**Male risk rises with prostate hypertrophy** — constricting flow, causing retention, and retained urine breeds infection",
 "**Menopause** predisposes via decreased secretions — less outward flow, easier inward travel",
 "UTIs can escalate to **sepsis** — a pattern the lecturer sees repeatedly in geriatric home health. Hydration → urine flow → a flushed system is the simplest prevention",
 "Physical debility and reduced mobility are contributing factors — which makes this a PT problem, not just a medical one"],C.red,C.lightRed));

/* ─────────────────────────── TOPIC 8.3 ─────────────────────────── */
k.push(pageBreak());
k.push(banner("TOPIC 8.3","Reproductive System"));
k.push(spacer());

k.push(h1("1. Development — the Shared Start"));
k.push(detail(["Stage","Weeks","What happens"],[
 ["**Gonadal (indifferent)**","~5","Gonads exist before differentiating into testes or ovaries"],
 ["**Duct differentiation**","8–12","Depends on the **presence or absence of testosterone and Anti-Müllerian Hormone**"],
 ["**External genitalia**","9–14","Develop in response to hormonal secretions or their absence"],
 ["**Gonadal descent**","From 7","Continues **until after birth** in males; ovaries reach the pelvis around week 12"]],[2700,1200,5460]));

k.push(h1("2. Female"));
k.push(detail(["Division","Organs","Function"],[
 ["**Internal genitalia**","Ovary · uterine tube · uterus · vagina","Ova formation, **estrogen + progesterone** production, implantation, fetal development"],
 ["**External genitalia**","Vulva (mons pubis, labia majora/minora, clitoris, vestibule)","Reproduction, sensation, urination"]],[2200,3400,3760]));
 k.push(bullet("**Perineal supply:** internal pudendal artery (branches: inferior anorectal, perineal, vestibular-bulb, deep clitoral) · **pudendal nerve** (inferior anal, dorsal clitoral, perineal → posterior labial branches)."));
k.push(infoBox("Clinical spotlight — postpartum pelvic dysfunction",[
 "**Pelvic floor muscle weakness · pelvic organ prolapse · incontinence**",
 "**Diastasis recti** (returns in 8.6) · pelvic girdle pain",
 "Perineal pain and scarring · dyspareunia · pelvic nerve damage · coccyx pain",
 "This list is a preview of an entire PT specialty — pelvic health"],C.purple,C.lightPurple));

k.push(h1("3. Male"));
k.push(detail(["Division","Organs","Function"],[
 ["**Internal genitalia**","Testis, epididymis, spermatic cord, ductus deferens, ejaculatory duct + accessory glands (**seminal, prostate, bulbourethral**)","Sperm production/storage/transport; male sex hormones"],
 ["**External genitalia**","Penis (root · body · glans; **2 corpora cavernosa + 1 corpus spongiosum**), scrotum","Reproduction + urinary passage"]],[2200,3900,3260]));
k.push(bullet("**Penile innervation is a two-system job:** **pudendal nerve** — sensory and sympathetic (ejaculation); **pelvic splanchnic nerves** — parasympathetic (erection, via the prostatic plexus); ilioinguinal to the root skin."));
k.push(bullet("**Cremaster** (from the sync session): lateral part from internal oblique + transversus abdominis and the inguinal ligament, medial part from the pubic tubercle and crest → tunica vaginalis. **Retracts the testis.** Genital branch of the **genitofemoral nerve (L1–L2).**"));
k.push(infoBox("Clinical spotlight — prostate cancer",[
 "Symptoms: painful/difficult urination, erectile dysfunction",
 "Risks: **age > 50**, overweight, family history, **African or Caribbean descent**",
 "**The anatomical danger is lymphatic proximity** — the prostate sits in a high-density lymphatic neighbourhood, so metastasis comes early",
 "Very treatable **when caught early** — which is the whole argument for screening"],C.red,C.lightRed));

/* ─────────────────────────── TOPIC 8.4 ─────────────────────────── */
k.push(pageBreak());
k.push(banner("TOPIC 8.4","Endocrine System"));
k.push(spacer());
k.push(body("A network of glands controlling growth, metabolism, temperature, sexual maturation, reproduction, blood pressure, immunity and more — **by secreting hormones into the blood.** Ovaries and testes were covered in 8.3."));

k.push(h1("1. The Glands"));
k.push(detail(["Gland","Location","Hormones / function"],[
 ["**Pineal**","Center of the brain, part of the epithalamus","**Melatonin — circadian rhythm**"],
 ["**Hypothalamus**","Below thalamus, above pituitary","**TRH · CRH · GnRH** — the releasing hormones that run the pituitary"],
 ["**Pituitary**","Inferior to hypothalamus via the **infundibulum**","**Anterior:** GH, prolactin, FSH, LH, TSH, ACTH · **Posterior:** oxytocin, vasopressin"],
 ["**Thyroid**","**Inferior to the cricoid cartilage, anterior to the esophagus**","**T3, T4 (metabolism) + calcitonin (calcium)**"],
 ["**Parathyroids**","Embedded in the **posterior thyroid**","**PTH** — serum calcium and phosphorus"],
 ["**Thymus**","Thyroid → 4th costal cartilage","T-cell maturation (positive/negative selection); thymosin, thymopoietin, thymulin"],
 ["**Pancreas**","**Retroperitoneal, behind the stomach**","**Islets of Langerhans → insulin, glucagon, somatostatin** (endocrine) + digestive enzymes (exocrine)"],
 ["**Adrenals**","On top of each kidney, **near rib 12**","**Cortex:** cortisol, aldosterone, sex hormones · **Medulla:** epinephrine, norepinephrine"]],[1900,2900,4560]));
k.push(bullet("**The thyroid negative feedback loop, as the deck draws it:** ↑TRH (hypothalamus) → ↑TSH (pituitary) → ↑T3/T4 (thyroid) → **↓TRH and ↓TSH.** The template for every endocrine axis you'll meet in Physiology M10."));
k.push(compare("HYPOTHYROIDISM","DIABETES",
 ["Thyroid **under-produces T3/T4**","Metabolism, energy production and overall body function slow down"],
 ["A problem of **insulin and sugar regulation**","**Type 1: autoimmune** destruction of insulin-producing cells","Type 2: insulin resistance — the lifestyle-associated form"],
 C.gold,C.red,C.lightGold,C.lightRed));

/* ─────────────────────────── TOPIC 8.5 ─────────────────────────── */
k.push(banner("TOPIC 8.5","Lymphatic System"));
k.push(spacer());
k.push(bullet("**Functions:** fluid balance · immune response · fat absorption · blood pressure · waste transport."));
k.push(detail(["Organ","Detail"],[
 ["**Bone marrow**","**Red** in flat bones + long-bone ends (pelvis, sternum, ribs, vertebrae, skull, proximal femur/humerus) — makes and matures **B and T cells**. **Yellow** in long-bone shafts"],
 ["**Thymus**","T-cell finishing school (8.4)"],
 ["**Lymph nodes**","Clustered at the **neck, axilla, thorax, abdomen, groin, popliteal fossa** — filters holding macrophages and dendritic cells"],
 ["**Spleen**","Largest lymphoid organ (8.1)"],
 ["**Tonsils**","Pharyngeal, tubal, palatine, lingual"],
 ["**MALT**","Mucosa-associated lymphoid tissue — white-cell collections in mucosal linings"]],[2200,7160]));
k.push(compare("RIGHT LYMPHATIC DUCT","THORACIC DUCT",
 ["**Small.** Drains the **right head/neck, right arm, right thorax**","Empties into the **right subclavian vein**"],
 ["**Longest and largest**, running from the **cisterna chyli** (posterior to the aorta, anterior to **L1–L2**)","Drains **everything else — left side + both legs** — into the **left subclavian vein**"],
 C.blue,C.teal,C.lightBlue,C.lightTeal));
k.push(infoBox("Clinical spotlight — lymphedema",[
 "Swelling when the lymphatic system can't move fluid",
 "Causes: **lymph node removal in cancer surgery · radiation** · infection (filariasis → elephantiasis) · congenital defects · trauma",
 "**The PT population: cancer survivors post-node-dissection or radiation** — the lecturer names this as where therapists meet lymphedema most"],C.gold,C.lightGold));
k.push(tip("The duct asymmetry is the exam favourite: only the right upper quadrant of the body drains right — everything else, including both legs, goes to the thoracic duct. Draw the body, shade the right upper quarter, done."));

/* ─────────────────────────── TOPIC 8.6 ─────────────────────────── */
k.push(pageBreak());
k.push(banner("TOPIC 8.6","Anterior Abdominal Wall"));
k.push(spacer());
k.push(bullet("**Layers, superficial → deep:** skin → superficial fascia → **muscles** → transversalis fascia → extraperitoneal fat → **peritoneum.**"));
k.push(bullet("**Wall functions:** protect the viscera · **stabilize and rotate the trunk** · raise intra-abdominal pressure for coughing, defecating, vomiting — and, for PT purposes, trunk control."));

k.push(h1("1. The Five Muscles"));
k.push(detail(["Muscle","O → I","Action","Innervation"],[
 ["**Rectus abdominis**","Pubic symphysis + crest → xiphoid + costal cartilages 5–7","**Trunk flexion**, compresses viscera, expiration","Intercostals T7–T11 + subcostal T12"],
 ["**Pyramidalis**","Pubic symphysis + crest → linea alba","**Tenses the linea alba**","Subcostal (T12)"],
 ["**External oblique**","External surface of **ribs 5–12** → linea alba, pubic tubercle, anterior iliac crest","Bilateral: flexion, compression, expiration · Unilateral: **ipsilateral lateral flexion, CONTRAlateral rotation**","T7–T11, T12, iliohypogastric (L1)"],
 ["**Internal oblique**","Thoracolumbar fascia, anterior iliac crest, iliopectineal arch → ribs 10–12, linea alba, conjoint tendon","Bilateral: flexion, compression, expiration · Unilateral: **ipsilateral lateral flexion, IPSIlateral rotation**","T7–T11, T12, iliohypogastric + ilioinguinal (L1)"],
 ["**Transversus abdominis**","Costal cartilages 7–12, TL fascia, iliac crest, iliopectineal arch → linea alba, pubic crest, pectineal line","**Compression + expiration**; unilateral: ipsilateral rotation","Same as internal oblique"]],[2000,3100,2600,1660]));
k.push(tip("The rotation rule: external oblique rotates CONTRAlaterally, internal oblique IPSIlaterally — so right external + left internal fire together in a left trunk rotation. \"Same-side internal, opposite-side external\" wins a mark on nearly every abdominal question."));

k.push(h1("2. Rectus Sheath and Linea Alba"));
k.push(compare("UPPER THREE-QUARTERS","LOWER QUARTER (below arcuate line)",
 ["**Anterior wall:** external oblique + internal oblique aponeuroses","**Posterior wall:** internal oblique + transversus aponeuroses"],
 ["**ALL THREE aponeuroses pass ANTERIOR** to rectus abdominis","Posteriorly only transversalis fascia remains"],
 C.blue,C.gold,C.lightBlue,C.lightGold));
k.push(bullet("**Linea alba:** the tendinous raphe running down the midline where the aponeuroses interweave — the anchor line for every wall muscle, and the structure that fails in diastasis recti."));

k.push(h1("3. Clinical Spotlights"));
k.push(compare("ABDOMINAL HERNIA","DIASTASIS RECTI",
 ["**Viscera protruding through a weakness in the wall**","Common sites follow the wall's weak points — inguinal, umbilical, incisional"],
 ["**Separation of the rectus bellies along the linea alba**","Classically postpartum (it made the 8.3 list too) — core-training territory for PT"],
 C.red,C.purple,C.lightRed,C.lightPurple));

k.push(h1("4. Sync Session 8 — Two Cases"));
k.push(infoBox("Case 1: Robert, 55 — sternal burning on bench press",[
 "Fitness competitor; burning **along the sternum during supine pressing**, none on incline",
 "**TTP at the pectoralis major origin bilaterally**, no weakness or asymmetry",
 "**Recent bulking-phase diet change** — the planted clue",
 "Reasoning: muscles/tendons/joints UNDER the symptoms (pec origin, costochondral junctions — Module 7's costochondritis!) vs what else refers there — **esophagus/GERD**, with the diet change and supine position both pointing at reflux"],C.green,C.lightGreen));
k.push(infoBox("Case 2: Kasey, 53 — right lower abdominal pain in tennis",[
 "Avid tennis player; RLQ pain **during the forehand swing** but also intermittently at rest, worsening over 3 days",
 "**TTP right lower quadrant · negative McBurney's** (no rebound tenderness)",
 "Reasoning: obliques/transversus strain fits the swing mechanics — but the intermittent at-rest pain forces the visceral column: **appendix and cecum live in the RLQ**, ovary/ureter refer there",
 "The drill again ends in **primary / secondary / remote hypotheses** — contractile tissue first, viscera never off the list"],C.green,C.lightGreen));
k.push(tnote("Both cases teach the same reflex the module exists to build: symptoms in an abdominal region are only musculoskeletal after you've named the organs that live under — or refer into — that region."));

k.push(...glossary("Module 8 — Quick-Reference Glossary",[
 ["Nine regions","Hypochondriac ×2 · epigastric · lumbar ×2 · umbilical · inguinal ×2 · hypogastric"],
 ["Bolus / peristalsis / LES","Food ball · wave contraction · reflux gate"],
 ["Peritoneum / mesentery / omentum","Serous lining · gut tether with its blood supply · immune-and-fat apron"],
 ["Ascites","Peritoneal fluid accumulation, classically from cirrhosis"],
 ["Duodenum → jejunum → ileum","Receive · absorb · finish"],
 ["Kidney position","Retroperitoneal T12–L3; right lower than left (liver)"],
 ["Kidney referral","Flank, groin, lower abdomen"],
 ["Trigone","Bladder triangle between ureteric orifices and urethral orifice"],
 ["UTI anatomy","Short female urethra; male prostate hypertrophy → retention"],
 ["AMH + testosterone","The week 8–12 switch that differentiates the duct systems"],
 ["Cremaster","Genitofemoral n. (L1–L2); retracts the testis"],
 ["Thyroid axis","TRH → TSH → T3/T4 → negative feedback"],
 ["Islets of Langerhans","Insulin, glucagon, somatostatin"],
 ["Adrenal cortex vs medulla","Steroids vs catecholamines"],
 ["Thoracic duct","Cisterna chyli (L1–L2) → left subclavian; drains all but right upper quarter"],
 ["Lymphedema","Node removal/radiation are PT's usual causes"],
 ["Linea alba","Midline raphe; diastasis recti is its separation"],
 ["Rectus sheath rule","Below the arcuate line all aponeuroses pass anterior"],
 ["Oblique rotation rule","External = contralateral · internal = ipsilateral"],
 ["McBurney's test","Rebound tenderness screen for appendicitis — negative in Kasey's case"]]));

build(k,"/home/claude/out/Module8_Abdomen_StudyNotes.docx");
