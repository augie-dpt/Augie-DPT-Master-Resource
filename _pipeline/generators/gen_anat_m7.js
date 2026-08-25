const L = require('/home/claude/notes_lib.js');
const {C,h1,h2,body,bullet,tnote,tip,compare,detail,infoBox,banner,glossary,fig,pageBreak,spacer,cover,build,linkBox} = L;
const E="/home/claude/emb35/";
const k=[];

k.push(...cover("Human Anatomy (DPTH 6111)","Module 7: Back Region",
 "Topics: 7.1 Thoracic Spine and Ribs • 7.2 Superficial Back Muscles • 7.3 Deep Back Muscles",
 ["Watch the lecture videos in your own Canvas module — links are cohort-specific",
  "**Knowledge Check #3 covers Module 7:** 10 questions, 15 minutes",
  "The thoracic palpation skills list lives in this Drive folder — your body is the teacher",
  "This module deliberately points forward: splenius and semispinalis capitis/cervicis wait for Module 11, thoracic cage muscle *function* returns in Module 9 (pulmonary), and lat/trap insertions return with the upper extremity"]));

/* ─────────────────────────── TOPIC 7.1 ─────────────────────────── */
k.push(banner("TOPIC 7.1","Thoracic Spine and Ribs — Osteology, Joints, Ligaments, Cage Muscles"));
k.push(spacer());
k.push(body("The thoracic cage = **12 thoracic vertebrae + 12 pairs of ribs + the sternum.** Three jobs: **protect** the heart and lungs, provide a **rigid attachment frame** for upper-body muscles and the weight of the upper limbs, and **facilitate breathing.**"));

k.push(h1("1. Thoracic Vertebrae"));
k.push(compare("TYPICAL — T2–T9","ATYPICAL — T1, T10–T12",
 ["**12 separate articulations each:** 4 zygapophyseal · 2 costotransverse · 4 costovertebral · 2 intervertebral"],
 ["**T1:** one demifacet + one full facet per side","**T10:** single costal facet per side","**T11–T12:** single costal facet per side and **no costotransverse joints**"],
 C.blue,C.gold,C.lightBlue,C.lightGold));
k.push(detail(["Feature","Thoracic version"],[
 ["**Vertebral body**","**Heart-shaped**; grows in size descending toward lumbar — bigger than cervical, smaller than lumbar"],
 ["**Vertebral foramen**","Smaller than cervical, larger than lumbar"],
 ["**Spinous process**","**Angled sharply downward** compared with other regions"],
 ["**Transverse process**","Thick, strong, club-ended, with a small **concave facet for the rib tubercle**"],
 ["**Costal facets**","**Three per side on typical vertebrae:** transverse costal facet + superior and inferior **demifacets** on the body"]],[2600,6760]));
k.push(bullet("**How ribs seat between vertebrae:** the head of a typical rib articulates with the **inferior costal facet of the vertebra above** and the **superior costal facet of its own vertebra** — rib 7 meets T6's inferior demifacet, T7's superior demifacet, and T7's transverse costal facet."));
k.push(tip("The demifacet arithmetic is the classic exam question. Typical vertebra: 3 costal facets per side. T1, T10, T11, T12: full facets, one per rib. T11–T12: no transverse articulation at all. Draw it once and it stays."));

k.push(h1("2. Ribs"));
k.push(detail(["Class","Ribs","Sternal connection"],[
 ["**True (vertebrosternal)**","**1–7**","Directly, via their own costal cartilage"],
 ["**False (vertebrochondral)**","**8–10**","Indirectly — each cartilage joins the cartilage of the rib above (10→9→8→7)"],
 ["**Floating**","**11–12**","**None** — they end in the posterior abdominal wall musculature"]],[2900,1600,4860]));
k.push(detail(["Rib","Why it's atypical"],[
 ["**Rib 1**","**One articular facet** (T1 body only). Superior surface grooved for the **subclavian artery and vein**, separated by the **scalene tubercle** where anterior scalene attaches"],
 ["**Rib 2**","Thinner, much longer; two head facets (T1 + T2); **roughened tuberosity for serratus anterior**"],
 ["**Ribs 10–12**","Single facet; 11–12 also have **no neck or tubercle** and rudimentary unattached costal cartilage"]],[1500,7860]));
k.push(bullet("**Typical rib (3–9) parts:** **head** (two facets — larger for its own vertebra, smaller for the one above) → **neck** → **tubercle** at the neck-body junction (smooth part articulates with the transverse costal facet; rough part anchors the costotransverse ligament) → **body**, curving at the **costal angle**."));
k.push(infoBox("The costal groove — one detail with a procedure attached",[
 "The internal surface of the body carries a **costal groove protecting the neurovascular bundle** (intercostal vein, artery, nerve)",
 "**Chest tubes are inserted at the SUPERIOR margin of a rib** precisely to avoid that bundle",
 "Floating ribs protect the **kidneys** and anchor the diaphragm, intercostals, and abdominal wall muscles"],C.red,C.lightRed));

k.push(h1("3. Sternum"));
k.push(detail(["Part","Level and articulations"],[
 ["**Manubrium**","Thicker and wider. **Jugular (suprasternal) notch** superiorly; **clavicular notches**; articulates with the clavicle, **rib 1, and the superior half of rib 2**"],
 ["**Body**","**T5–T9.** Convex anterior, concave posterior; articulates with **six ribs (2–7)**"],
 ["**Xiphoid process**","**T10.** Inferior margin of the thoracic cavity; marks the **infrasternal (subcostal) angle**; attachment for abdominals and part of the diaphragm"]],[2100,7260]));
k.push(tnote("Two congenital sternal shapes get named for your cardiopulmonary course: pectus excavatum (sunken chest) and pectus carinatum (protruding sternum) — both can affect cardiovascular and pulmonary function."));

k.push(h1("4. Joints of the Thoracic Cage"));
k.push(...fig(E+"fig_facets.png",445,720,"Facet orientation is transitional: more vertical and more medial-lateral angled than cervical, less than lumbar (7.1 joints deck)"));
k.push(bullet("**Familiar from the lumbar module:** zygapophyseal joints (4 per vertebra — same joint, different orientation, which is what dictates available motion) and the intervertebral symphysis (body – endplate – disc – endplate – body)."));
k.push(compare("COSTOCORPOREAL (HEAD-OF-RIB) JOINTS","COSTOTRANSVERSE JOINTS",
 ["Head of rib ↔ vertebral bodies","Superior facet of the rib head → **inferior costal facet of the vertebra above**; larger inferior facet → **superior costal facet of the same-named vertebra**","Ribs 2–9: demifacet-to-demifacet. Ribs 1, 10, 11, 12: **one full facet each**"],
 ["Rib tubercle ↔ transverse costal facet of its own vertebra","**Absent at T11–T12** (no tubercles, no transverse facets)","Fibrous capsule lined with synovial membrane"],
 C.blue,C.teal,C.lightBlue,C.lightTeal));
k.push(detail(["Anterior cage joints","What they connect"],[
 ["**Costochondral** (10 pairs)","Sternal end of rib ↔ its costal cartilage. Slight bending and twisting"],
 ["**Sternochondral** (7 pairs)","True-rib cartilage ↔ sternum. **Facilitate mechanical ventilation**"],
 ["**Interchondral**","Between adjacent costal cartilages (the 8–10 chain)"],
 ["**Manubriosternal · Xiphosternal**","The two sternal joints"]],[3100,6260]));
k.push(infoBox("Clinical spotlight — costochondritis",[
 "**Benign chest wall pain from inflamed costal cartilage** at the rib-to-sternum articulation",
 "Triggered by vigorous UE activity, coughing, or strenuous exertion",
 "**16% of ER chest-pain presentations**; primarily affects the **2nd–5th junctions**",
 "Matters to you twice: as a differential for cardiac chest pain, and as a musculoskeletal condition PT sees"],C.gold,C.lightGold));

k.push(h1("5. Ligaments Unique to the Region"));
k.push(detail(["Ligament","Runs"],[
 ["**Radiate**","Fans from the rib head to both vertebral bodies and the disc (costocorporeal)"],
 ["**Intra-articular**","Inside the head-of-rib joint, to the disc"],
 ["**Costotransverse**","Rib neck → its own transverse process (short horizontal fibers)"],
 ["**Superior costotransverse**","Superior rib neck → transverse process of the vertebra **above**"],
 ["**Lateral costotransverse**","Tip of the transverse process → the rough, non-articular part of the tubercle"],
 ["**Accessory**","Medial to the superior costotransverse — **separated from it by the posterior ramus of the thoracic spinal nerve**"]],[3200,6160]));

k.push(h1("6. Intrinsic Thoracic Cage Muscles"));
k.push(bullet("**Intrinsic = origin AND insertion within the cage** (extrinsic muscles — coming in 7.2 — start here but insert on the upper limb)."));
k.push(detail(["Muscle","O / I","Action","Innervation"],[
 ["**Serratus posterior superior**","Nuchal lig. + SPs C7–T3 → superior borders ribs 2–5","**Elevates ribs**","Intercostal nn. 2–5"],
 ["**Serratus posterior inferior**","SPs T11–L2 → inferior borders ribs 9–12","**Depresses ribs** / draws them inferoposteriorly","Anterior rami T9–T12 (9th–11th intercostals + subcostal)"],
 ["**Levatores costarum**","TPs C7–T11 → superior borders ribs 1–12","Elevate ribs","—"],
 ["**Subcostals**","Internal surface of lower ribs → internal surface **2–3 ribs below**","Depress ribs in **forced exhalation**","Intercostal nn."],
 ["**External intercostals**","Inferior border of rib → superior border of rib below; fibers **inferomedial**","Support the spaces; **elevate ribs in inspiration**","Intercostal nn. T1–T11"],
 ["**Internal + innermost intercostals**","Costal groove → superior border of rib below; fibers **inferoposterior**","Support the spaces; **depress ribs in forced expiration**","Intercostal nn. T1–T11"],
 ["**Transversus thoracis**","Inferoposterior sternum + xiphoid → internal surfaces of costal cartilages 2–6","**Weak depressor**, assists expiration","Intercostal nn."]],[2300,3200,2300,1560]));
k.push(tip("Fiber direction is the memory hook for the intercostals: hands-in-pockets = external (inferomedial, inspiration); the internals run the other way and do the opposite. Function gets its full treatment in Module 9 — here you only owe O/I/N."));

k.push(h1("7. Innervation, Perfusion, Rib Mechanics"));
k.push(bullet("**Intercostal nerves = anterior rami of T1–T11.** Mixed motor + sensory, segmental to the thoracic and abdominal walls; they run in the costal groove **below the intercostal artery and vein**, ending as cutaneous branches on the anterior chest. **Subcostal nerve = anterior ramus of T12**, running below rib 12 — the only cage muscle it owns is serratus posterior inferior."));
k.push(bullet("**Blood supply:** intercostal and subcostal arteries, travelling the same groove."));
k.push(compare("UPPER RIBS — PUMP HANDLE","LOWER RIBS — BUCKET HANDLE",
 ["Move **anterosuperiorly** with inhalation, inferoposteriorly with exhalation","Expands the chest **front-to-back**"],
 ["Axis of rotation shifts, so the ribs swing **laterally**","Expands the chest **side-to-side**"],
 C.blue,C.green,C.lightBlue,C.lightGreen));

k.push(...glossary("Topic 7.1 — Quick-Reference Glossary",[
 ["Typical thoracic vertebrae","T2–T9; 12 articulations each"],
 ["Demifacets","Paired half-facets on typical bodies; the rib head bridges two vertebrae"],
 ["True / false / floating ribs","1–7 direct to sternum · 8–10 via cartilage above · 11–12 unattached"],
 ["Scalene tubercle","Rib 1 landmark separating the subclavian vein and artery grooves"],
 ["Costal groove","Inferior internal rib surface protecting the neurovascular bundle — chest tubes go superior"],
 ["Costocorporeal joint","Head of rib ↔ vertebral bodies (radiate + intra-articular ligaments)"],
 ["Costotransverse joint","Rib tubercle ↔ transverse process; absent T11–T12"],
 ["Costochondritis","Benign costal-cartilage chest pain; 2nd–5th junctions; 16% of ER chest pain"],
 ["Intercostal nerves","Anterior rami T1–T11; subcostal = T12"],
 ["Pump vs bucket handle","Upper ribs anteroposterior expansion · lower ribs lateral expansion"]]));
k.push(pageBreak());

/* ─────────────────────────── TOPIC 7.2 ─────────────────────────── */
k.push(banner("TOPIC 7.2","Superficial Back Muscles"));
k.push(spacer());
k.push(body("**Extrinsic (\"immigrant\") muscles** — upper-limb muscles that migrated to the back in fetal development. They originate on the back and insert on the **scapula, clavicle, or humerus**, which means everything they do is really an upper-extremity or scapular action."));

k.push(h1("1. The Five, In Full"));
k.push(detail(["Muscle","Origin","Insertion","Action","Innervation"],[
 ["**Latissimus dorsi**","SPs T7–T12, thoracolumbar fascia, ribs 9–12, iliac crest, inferior angle of scapula — one of the broadest origins in the body","**Intertubercular sulcus of humerus**","Arm **extension, adduction, internal rotation**","**Thoracodorsal n.**"],
 ["**Upper trapezius**","Medial ⅓ superior nuchal line + external occipital protuberance","Lateral ⅓ clavicle","**Scapular elevation** + stabilization; unilateral: ipsilateral lateral flexion + **contralateral rotation** of head; bilateral: head extension","**Accessory n. (CN XI)**"],
 ["**Middle trapezius**","Nuchal ligament (SPs C1–C6) + SPs/supraspinous ligs C7–T3","Medial acromion + superior crest of scapular spine","**Scapular retraction** + stabilization","Accessory n. (CN XI)"],
 ["**Lower trapezius**","SPs + supraspinous ligs T4–T12","Lateral scapular spine","**Scapular depression** + stabilization","Accessory n. (CN XI)"],
 ["**Levator scapulae**","TPs C1–C4","Medial margin of scapula","Scapular **elevation + downward rotation**; unilateral: ipsilateral neck lateral flexion; bilateral: neck extension","**Dorsal scapular n.** + anterior rami C3–C4"],
 ["**Rhomboid major**","SPs T2–T5","Medial border of scapula (inferior angle → root of spine)","**Retraction, downward rotation**, stabilization","Dorsal scapular n."],
 ["**Rhomboid minor**","Nuchal lig. + SPs C7–T1","Base of medial end of scapular spine","Retraction, downward rotation, stabilization","Dorsal scapular n."]],[1800,2400,2000,2100,1060]));
k.push(tnote("The lat is the handcuff muscle: extend, adduct, and internally rotate to put your hands behind your lower back — that position IS its action list."));

k.push(h1("2. The Three Nerves"));
k.push(detail(["Nerve","Origin and course","Supplies"],[
 ["**Thoracodorsal**","Posterior cord of brachial plexus (**C6–C8**); descends the posterior axillary wall, crosses teres minor's inferior margin, pierces the lat","**Latissimus dorsi only**"],
 ["**Accessory (CN XI)**","Rootlets along the upper cervical cord; **exits the skull through the jugular foramen**","**Trapezius + sternocleidomastoid**"],
 ["**Dorsal scapular**","Anterior ramus of **C5**; pierces middle scalene, descends between levator scapulae and serratus posterior superior, runs along the anterior border of the rhomboids","**Rhomboids + levator scapulae**"]],[2100,4700,2560]));
k.push(tip("The sync session drilled this as a four-line table — rhomboids + levator = dorsal scapular, lat = thoracodorsal, all three trapezius parts = spinal accessory. If a knowledge-check question gives you a scapular muscle, the answer is one of three nerves."));

k.push(h1("3. Trapezius by Part"));
k.push(detail(["Part","One-word action"],[
 ["**Upper**","**Elevation**"],
 ["**Middle**","**Retraction**"],
 ["**Lower**","**Depression**"]],[2400,6960]));
k.push(bullet("All three parts stabilize the scapula continuously; the one-word actions are what changes between them. Levator scapulae and both rhomboids pull the medial scapula upward/inward → **downward rotation of the glenoid**, which will matter enormously when shoulder mechanics arrive in Module 12."));

k.push(...glossary("Topic 7.2 — Quick-Reference Glossary",[
 ["Extrinsic / immigrant muscles","Upper-limb muscles that migrated onto the back; origin on spine, insertion on limb"],
 ["Latissimus dorsi","Handcuff muscle — extension, adduction, internal rotation; thoracodorsal n."],
 ["Trapezius parts","Upper elevates · middle retracts · lower depresses; all via CN XI"],
 ["Levator scapulae","TPs C1–C4 → medial scapula; elevation + downward rotation"],
 ["Rhomboids","Retraction + downward rotation; dorsal scapular n."],
 ["Thoracodorsal nerve","Posterior cord, C6–C8; motor only, to the lat"],
 ["Accessory nerve (CN XI)","Jugular foramen; trapezius + SCM"],
 ["Dorsal scapular nerve","C5, pierces middle scalene; rhomboids + levator scapulae"],
 ["Serratus posterior sup./inf.","The intermediate back layer — respiratory helpers from Topic 7.1"]]));
k.push(pageBreak());

/* ─────────────────────────── TOPIC 7.3 ─────────────────────────── */
k.push(banner("TOPIC 7.3","Deep (Intrinsic) Back Muscles"));
k.push(spacer());
k.push(body("Three layers: **superficial (spinotransversales)** — splenius capitis and cervicis, deferred to Module 11 · **intermediate (erector spinae)** · **deep (transversospinalis)**, which itself has superficial, intermediate, and deep sub-layers."));

k.push(h1("1. Erector Spinae — the Intermediate Layer"));
k.push(infoBox("“I Love Standing” — lateral to medial",[
 "**I**liocostalis — most lateral",
 "**L**ongissimus — middle",
 "**S**pinalis — most medial",
 "The lecture's own advice: don't memorize exact segmental levels — **know the lateral-to-medial order and the regional pattern**"],C.blue,C.lightBlue));
k.push(detail(["Muscle","Parts and attachments (pattern)","Action"],[
 ["**Iliocostalis**","Lumborum from sacrum/iliac crest/TL fascia → rib angles; thoracis rib-to-rib; cervicis ribs 3–6 → TPs C4–C6","Unilateral: **ipsilateral lateral flexion** · bilateral: **extension**"],
 ["**Longissimus**","Thoracis from L1–L5/sacrum/iliac crest → thoracic vertebrae + lower 6 ribs; cervicis TPs T1–T5 → TPs C2–C6; **capitis → mastoid process**","Same pattern, adding head control"],
 ["**Spinalis**","SP-to-SP: thoracis SPs T11–L2 → SPs T2–T8; cervicis and capitis near midline","Same pattern"]],[1900,4400,3060]));
k.push(bullet("**Innervation for the whole group:** lateral branches of the **posterior rami** of cervical, thoracic and lumbar spinal nerves."));

k.push(h1("2. Transversospinalis — the Deep Layer"));
k.push(bullet("Name = route: **transverse process up to spinous process.** The shorter and deeper the muscle, the more it stabilises rather than moves."));
k.push(detail(["Sub-layer","Muscle","O → I","Action"],[
 ["**Superficial**","**Semispinalis thoracis** (capitis + cervicis in M11)","TPs T6–T10 → SPs C6–T4 (spans ~6 levels)","Unilateral: ipsilateral lateral flexion + **contralateral rotation** · bilateral: extension"],
 ["**Intermediate**","**Multifidus**","Sacrum/PSIS/mamillary + transverse processes → SPs **2–5 levels above**","**Stabilizes vertebrae during spinal movement**; unilateral: ipsilateral lateral flexion + contralateral rotation · bilateral: extension"],
 ["**Intermediate**","**Rotatores** (brevis 1 level, longi 2)","TPs → laminae/SPs above; **best developed in thoracic region**","Stabilize; unilateral: **contralateral rotation** · bilateral: extension"],
 ["**Deep**","**Interspinales**","SP to SP; well developed cervical + lumbar","Stabilize adjoining vertebrae; assist extension"],
 ["**Deep**","**Intertransversarii**","TP to TP (cervical sets + 4 lumbar pairs)","Stabilize; unilateral: ipsilateral lateral flexion"],
 ["**Deep**","**Levatores costarum**","Covered in Topic 7.1",""]],[1700,2100,3000,2560]));
k.push(bullet("**Innervation pattern worth noticing:** erector spinae = **lateral** branches of posterior rami; transversospinalis = **medial** branches of posterior rami. Interspinales/intertransversarii take posterior (and some anterior) rami of their own levels."));
k.push(tip("Multifidus is the clinically loaded one — the lumbar stabiliser that atrophies with low back pain and that you'll retrain in patients for years. Note its unique origins (mamillary processes, PSIS, posterior sacroiliac ligament) now; the motor-control story comes later."));

k.push(h1("3. Quadratus Lumborum — Posterior Abdominal Wall Guest"));
k.push(detail(["Item","Detail"],[
 ["**Origin → insertion**","Iliac crest + iliolumbar ligament → **inferior border of rib 12** + TPs L1–L4"],
 ["**Action**","Unilateral: ipsilateral trunk lateral flexion · bilateral: trunk extension **and fixing rib 12 during inspiration**"],
 ["**Innervation**","Subcostal n. (T12) + anterior rami L1–L4"]],[2400,6960]));

k.push(h1("4. Group Function Summary (from the deck)"));
k.push(detail(["Motion","Muscles (U = unilateral, B = bilateral)"],[
 ["**Lateral flexion**","Erector spinae (U) · semispinalis (U) · multifidus (U) · intertransversarii (U)"],
 ["**Extension**","Erector spinae (B) · semispinalis (B) · multifidus (B) · rotatores (B) · interspinales"],
 ["**Rotation**","Semispinalis (U) · multifidus (U) · rotatores (U) — all to the **contralateral** side"]],[2400,6960]));

k.push(h1("5. Sync Session — The Patient Case and the Triangle"));
k.push(infoBox("Case: Jack, 26 — right lower back pain after mulch-lifting",[
 "Sedentary accountant, 60-hour desk weeks; goal = decrease pain, return to daily activities",
 "**Findings:** limited trunk flexion and LEFT side bending with pain · tenderness over the right lower back · pain with RESISTED extension and RIGHT side bending · no numbness/tingling · normal neuro screen",
 "**The reasoning drill:** name the joints and bones UNDER the symptoms → the muscles/tendons UNDER them → the structures that REFER there",
 "**Hypotheses reached: primary = muscle strain · secondary = intervertebral disc involvement · tertiary = kidney involvement**"],C.green,C.lightGreen));
k.push(tnote("Why the exam findings point at muscle: pain on the stretched side (left side bend stretches the right erector spinae) AND on resisted contraction (right side bend / extension) with a clean neuro screen is the contractile-tissue pattern. The floating ribs sit over the kidneys — which is exactly why kidney referral makes the list at all."));
k.push(bullet("**Triangle of auscultation:** the thin window bounded by the **trapezius (medially), latissimus dorsi (inferiorly), and medial border of the scapula** — the logical place to listen to breath sounds posteriorly because the least muscle sits between stethoscope and lung."));
k.push(bullet("**Cross-section anchor (L3 level):** from lateral to medial in the posterior compartment — iliocostalis lumborum · longissimus thoracis · multifidus, with **quadratus lumborum and psoas major** anterior to the transverse processes, all wrapped in **thoracolumbar fascia**."));

k.push(...glossary("Topic 7.3 — Quick-Reference Glossary",[
 ["I Love Standing","Iliocostalis · Longissimus · Spinalis, lateral → medial"],
 ["Erector spinae action","Unilateral lateral flexion; bilateral extension; lateral branches of posterior rami"],
 ["Transversospinalis","TP → SP muscles; medial branches of posterior rami"],
 ["Semispinalis thoracis","Spans ~6 levels; contralateral rotation"],
 ["Multifidus","2–5 level spans; THE segmental stabiliser; atrophies in LBP"],
 ["Rotatores brevis/longi","1- and 2-level spans; contralateral rotation; best developed thoracically"],
 ["Interspinales / intertransversarii","Single-segment stabilisers; SP-SP and TP-TP"],
 ["Quadratus lumborum","Iliac crest → rib 12 + TPs L1–L4; fixes rib 12 in inspiration"],
 ["Triangle of auscultation","Trapezius + lat + medial scapula border; posterior breath sounds"],
 ["Contractile-tissue pain pattern","Pain on stretch AND on resisted contraction, neuro screen clean"]]));

build(k,"/home/claude/out/Module7_BackRegion_StudyNotes.docx");
