const L = require('/home/claude/notes_lib.js');
const {C,h1,h2,body,bullet,tnote,tip,compare,detail,infoBox,banner,glossary,fig,pageBreak,spacer,cover,build,linkBox} = L;
const E = "/home/claude/emb35/";
const k=[];

k.push(...cover("Human Anatomy (DPTH 6111)","Module 12: Shoulder Girdle & Brachial Plexus",
 "Topics: 12.1 Shoulder Girdle — Osteology, Joints, Ligaments • 12.2 Brachial Plexus",
 ["The module splits cleanly in two: bones/joints/ligaments of the shoulder girdle, then the entire brachial plexus from roots to terminal branches",
  "The brachial plexus drawing assignment is due before the sync session — drawing it from memory is the single best way to learn it",
  "The quiz for this window covers 6 questions on Module 11 and 14 on Module 12, so weight your study time toward this module",
  "The mobility-vs-stability trade-off at the glenohumeral joint is the organizing idea for the whole shoulder — every ligament and clinical spotlight comes back to it"]));

/* ─────────────────────────── TOPIC 12.1 — OSTEOLOGY ─────────────────────────── */
k.push(banner("TOPIC 12.1a","Shoulder Girdle Osteology — Clavicle, Scapula, Humerus"));
k.push(spacer());

k.push(h1("1. The shoulder (pectoral) girdle as a whole"));
k.push(body("The shoulder girdle is an **incomplete bony ring** — clavicle + scapula on each side, joined to the axial skeleton only at the sternum (sternoclavicular joint) and open posteriorly. It attaches the upper limb to the trunk through the glenohumeral joint. The lecture's analogy: clavicle + scapula are to the arm what the pelvic bones are to the leg, and the humerus is the femur — except the shoulder trades the hip's bony stability for a far larger range of motion, mostly thanks to the freely gliding scapulothoracic articulation."));

k.push(h1("2. Clavicle"));
k.push(body("An S-shaped long bone lying right under the skin — **palpable along its entire length**. Three parts: sternal (proximal) end, body (shaft), acromial (distal) end. The sternal end is round and pyramidal and meets the manubrium (SC joint); the acromial end is broad and flat and meets the acromion (AC joint). Orientation trick: the **superior surface is smooth**, the **inferior surface is rough** with attachment landmarks."));
k.push(detail(["Inferior-surface landmark (medial → lateral)","What attaches / articulates"],[
 ["Sternal facet","Triangular articular surface for the manubrium"],
 ["Costal tuberosity","Broad rough area (~2 cm) — costoclavicular ligament"],
 ["Conoid tubercle","Rough eminence — conoid part of coracoclavicular ligament"],
 ["Trapezoid line","Runs laterally from the conoid tubercle — trapezoid part of coracoclavicular ligament"],
 ["Groove for subclavius","Mid-shaft groove — subclavius muscle"]],[42,58]));
k.push(bullet("Superior surface has one main landmark: the **acromial facet** at the far posterior edge of the acromial end — the articular surface for the AC joint."));

k.push(h1("3. Scapula"));
k.push(body("A triangular flat bone on the posterolateral thorax overlying **ribs 2–7**. Its medial side has no direct bony attachment to the axial skeleton — muscles hold it against the thoracic wall, which is exactly why it can glide so freely at the \"scapulothoracic joint.\""));
k.push(detail(["Feature","Key points"],[
 ["Borders (3)","Superior — shortest and thinnest. Medial (vertebral) — parallels the spine. Lateral (axillary) — thickest and strongest, from muscle pull toward the axilla"],
 ["Angles (3)","Lateral — carries the glenoid cavity. Superior — levator scapulae attaches. Inferior — where medial and lateral borders meet"],
 ["Glenoid cavity","Shallow, concave, oval; faces anterolaterally and slightly superiorly. Supraglenoid tubercle above (long head of biceps) • infraglenoid tubercle below (long head of triceps)"],
 ["Anterior surface","Subscapular fossa — the smooth concave costal surface facing the ribs"],
 ["Posterior surface","Spine divides it into supraspinous fossa (supraspinatus) and larger infraspinous fossa (infraspinatus). Root of spine — rhomboid minor. Deltoid tubercle on the spine — posterior deltoid. Spinoglenoid notch — neurovascular passage to the posterior scapula"],
 ["Processes (2)","Coracoid — beak-like, anterolateral, above the glenoid: pec minor + coracobrachialis + short head of biceps. Acromion — lateral extension of the spine arching over the GH joint, articulates with the clavicle. Suprascapular notch sits medial to the coracoid — suprascapular nerve passes through"]],[26,74]));
k.push(tip("Dry-needling tie-in from lecture: you needle scapular muscles safely by palpating the borders first — the scapula is your bony backdrop. But ~17% of people have a scapular foramina (a hole in the infraspinous/subscapular fossa), so lung puncture risk is never truly zero."));
k.push(tnote("Acromion shape predicts rotator cuff trouble: flat (type I) leaves the most room for the supraspinatus tendon, curved narrows it, and the hooked/upturned variant has the highest rotator cuff tear rate because it impinges directly into the tendon's path under the coracoacromial arch."));

k.push(h1("4. Humerus — proximal end and body"));
k.push(body("Longest and largest bone of the upper limb. This module covers the proximal end and shaft; the distal end waits for Module 13 (elbow)."));
k.push(detail(["Landmark","Why it matters"],[
 ["Head","Hemispheroidal, hyaline-covered; faces medially, superiorly, and posteriorly to meet the glenoid (which faces laterally, anteriorly, slightly superiorly)"],
 ["Anatomical neck","Narrowing just below the head — attachment of the GH joint capsule"],
 ["Surgical neck","More distal narrowing below the tubercles — **common fracture site** (and the axillary nerve wraps right behind it)"],
 ["Greater tubercle","Most lateral point; three flat impressions for rotator cuff attachments (Module 14)"],
 ["Lesser tubercle","Anterior; one rotator cuff attachment; forms the medial margin of the intertubercular sulcus"],
 ["Intertubercular (bicipital) sulcus","Between the tubercles — long head of biceps tendon plus the ascending branch of the anterior circumflex humeral artery. Medial lip = lesser tubercle, lateral lip = greater tubercle"],
 ["Deltoid tuberosity","Rough V on the anterolateral surface mid-shaft — deltoid insertion"],
 ["Radial groove","Shallow groove interrupting the lateral border — radial nerve + deep brachial artery travel here"]],[32,68]));

/* ─────────────────────────── TOPIC 12.1b — JOINTS ─────────────────────────── */
k.push(pageBreak());
k.push(banner("TOPIC 12.1b","Shoulder Girdle Joints — SC, AC, Scapulothoracic, Glenohumeral"));
k.push(spacer());

k.push(detail(["Joint","Type","Articulation","Movements"],[
 ["Sternoclavicular (SC)","Synovial saddle (contains an articular disc)","Manubrium ↔ sternal end of clavicle","Anterior/posterior • elevation/depression • circumduction"],
 ["Acromioclavicular (AC)","Synovial plane; multiaxial","Acromion ↔ acromial end of clavicle","Protraction/retraction • elevation/depression • axial rotation"],
 ["Scapulothoracic","Physiologic joint — no bones meeting, no ligaments; purely musculotendinous (trapezius, rhomboids, serratus anterior)","Anterior scapula ↔ posterior thoracic cage","Elevation/depression • protraction/retraction • upward/downward rotation"],
 ["Glenohumeral (GH)","Synovial ball-and-socket; multiaxial","Glenoid fossa ↔ humeral head","Flexion/extension • abduction/adduction • internal/external rotation • circumduction"]],[20,26,24,30]));
k.push(bullet("Innervation: SC — medial supraclavicular n. + nerve to subclavius. AC — suprascapular + lateral pectoral nn. GH — axillary, suprascapular, and lateral pectoral nn."));
k.push(bullet("GH blood supply: anterior + posterior circumflex humeral arteries, circumflex scapular and suprascapular arteries. Injury to the circumflex vessels can cause **avascular necrosis** of the humeral head."));

k.push(h1("5. Why the GH joint is so mobile — and so unstable"));
k.push(compare("GLENOID FOSSA","HUMERAL HEAD",
 ["Shallow, pear-shaped pit on the superolateral scapula",
  "Concavity is LESS than the head's convexity — decreased congruency",
  "Deepened by the glenoid labrum, a fibrocartilaginous ring attached to the fossa margins, thicker anteriorly than inferiorly"],
 ["Convex surface **3–4× larger** than the glenoid surface",
  "Only **1/3 of the head** is ever in contact with fossa + labrum at once",
  "Result: the most mobile joint in the body — and one of the most frequently injured"],
 C.blue,C.teal,C.lightBlue,C.lightTeal));
k.push(tnote("Contrast with the hip: the acetabulum swallows the femoral head (stability first); the glenoid barely cups the humeral head (mobility first). All the shoulder's real security comes from soft tissue — capsule, ligaments, labrum, rotator cuff."));
k.push(infoBox("Clinical spotlight: AC joint dislocation and the step-off deformity",[
 "Complete tear of the stabilizing AC ligaments separates the clavicle from the acromion",
 "The unanchored clavicle rides up, producing a visible **step-off**: high point = clavicle, step down = acromion",
 "You can see and palpate this on inspection — a classic contact-sport injury"],C.red,C.lightRed));

/* ─────────────────────────── TOPIC 12.1c — LIGAMENTS ─────────────────────────── */
k.push(pageBreak());
k.push(banner("TOPIC 12.1c","Shoulder Girdle Ligaments & Bursae"));
k.push(spacer());
k.push(body("For every ligament, the lecture wants two things: **attachments** and **what motion it restricts**."));

k.push(h1("6. Sternoclavicular ligaments"));
k.push(detail(["Ligament","Course & job"],[
 ["Anterior sternoclavicular (intrinsic)","Anterosuperior sternal end of clavicle → anterosuperior manubrium + 1st costal cartilage. Strong anterior reinforcement; resists excessive superior displacement"],
 ["Posterior sternoclavicular (intrinsic)","Same orientation on the back of the joint — broad but **weaker** than the anterior"],
 ["Interclavicular (extrinsic)","Connects both sternal ends across the jugular notch; strengthens the superior capsule and resists upward pull"],
 ["Costoclavicular (extrinsic)","1st rib → costal tuberosity of clavicle. Two laminae with opposing fiber directions (anterior runs superolaterally, posterior superomedially) forming an inverted cone; limits clavicular elevation and A-P movement"]],[34,66]));

k.push(h1("7. Acromioclavicular ligaments"));
k.push(detail(["Ligament","Course & job"],[
 ["Superior AC (intrinsic)","Superior acromion ↔ superior acromial clavicle; prevents joint-surface separation"],
 ["Inferior AC (intrinsic)","Same joint, inferior surfaces; thinner, may deteriorate/perforate with age"],
 ["Coracoclavicular (extrinsic) — trapezoid part","Superior coracoid → trapezoid line (anterolateral, quadrangular)"],
 ["Coracoclavicular (extrinsic) — conoid part","Posterior root of coracoid (just lateral to the scapular notch) → conoid tubercle (conical, posteromedial). The two parts fuse at the coracoid and enclose a triangular space containing fat or a bursa"]],[38,62]));
k.push(tip("The coracoclavicular ligament is the true suspender of the scapula from the clavicle — it's the ligament whose rupture defines the higher-grade AC separations behind the step-off deformity."));

k.push(h1("8. Intrascapular ligaments (scapula → scapula)"));
k.push(bullet("**Superior transverse scapular ligament** — bridges the suprascapular notch, turning it into a foramen. Suprascapular **nerve passes under** it; the suprascapular **artery passes over** it."));
k.push(bullet("**Spinoglenoid ligament** — spans the spinoglenoid notch between spine and glenoid; the suprascapular nerve hooks under it to reach the infraspinous fossa."));
k.push(bullet("**Coracoacromial ligament** — coracoid → acromion, roofing the GH joint. With a curved or hooked acromion it narrows the space the supraspinatus tendon runs through → impingement."));
k.push(tnote("Entrapment logic you'll be tested on: compression at the suprascapular notch knocks out supraspinatus AND infraspinatus; compression at the spinoglenoid notch spares supraspinatus and hits only infraspinatus. The instructor once caught this in clinic purely by spotting atrophy above and below the scapular spine."));

k.push(h1("9. Glenohumeral capsule and ligaments"));
k.push(body("The GH capsule is loose and fibrous, lined with synovium. Attachments: **anatomical neck** of the humerus; on the scapula, the **scapular neck** (anteroinferiorly) and the **glenoid labrum** directly (superoposteriorly). It arches over the supraglenoid tubercle, making the labrum and the long head of biceps tendon **intra-articular**. Two openings: one for the biceps tendon, one between the superior and middle GH ligaments where the subscapular bursa communicates with the joint cavity."));
k.push(detail(["Ligament","Location","Function"],[
 ["Superior GH","Supraglenoid tubercle → proximal lesser tubercle","Supports the rotator interval; prevents inferior translation of the humeral head, especially in **adduction** (arm at the side)"],
 ["Middle GH","Anterior glenoid margin (below SGHL) → lesser tubercle; blends with subscapularis tendon","Stabilizes the anterior capsule; limits external rotation at **45–60° abduction**"],
 ["Inferior GH","Glenoid labrum → inferomedial humeral neck; splits into anterior + posterior bands (axillary pouch between)","**Strongest of the three.** Both bands stabilize above **90° abduction**; anterior band limits ER, posterior band limits IR"],
 ["Transverse humeral","Greater ↔ lesser tubercle, roofing the bicipital groove","Holds the long head of biceps tendon in its canal"],
 ["Coracohumeral (accessory)","Coracoid → greater + lesser tubercles","Reinforces superiorly; limits excessive ER and inferior translation"]],[20,38,42]));
k.push(bullet("Group behavior: all three GH ligaments **tighten in external rotation**, relax in internal rotation, and together resist **anterior translation** of the humeral head."));
k.push(h2("Bursae of the shoulder"));
k.push(bullet("**Subacromial** — largest; under the acromion + coracoacromial ligament, above the capsule and supraspinatus tendon; does NOT normally communicate with the joint."));
k.push(bullet("**Subdeltoid** — deep to deltoid; works with the subacromial bursa to protect the supraspinatus tendon during abduction."));
k.push(bullet("**Subscapular** — deep to the subscapularis tendon; communicates with the GH joint cavity."));
k.push(bullet("**Subcoracoid** — inferior and deep to the coracoid process."));

/* ─────────────────────────── TOPIC 12.2 — BRACHIAL PLEXUS ─────────────────────────── */
k.push(pageBreak());
k.push(banner("TOPIC 12.2","The Brachial Plexus — Roots to Terminal Branches"));
k.push(spacer());

k.push(h1("10. The blueprint: Roots → Trunks → Divisions → Cords → Branches"));
k.push(body("Mnemonic from lecture: **\"Rugby Teams Don't Cover Bruises.\"** Anterior rami of **C5–T1** form the plexus and give the arm its complete motor and sensory supply."));
k.push(...fig(E+"fig_plexus.png",675,702,"The whole plexus in one picture: roots (green) → trunks → anterior (teal) and posterior (mauve) divisions → cords → five terminal branches (12.2 deck, KenHub)"));
k.push(detail(["Level","How it forms","Where it happens"],[
 ["Roots (5)","Anterior rami of C5, C6, C7, C8, T1","Exit the intervertebral foramina (C5–C7 exit ABOVE their vertebra; C8 exits below C7; T1 and below exit below their own)"],
 ["Trunks (3)","C5+C6 → superior • C7 alone → middle • C8+T1 → inferior","Lateral to the scalenes, emerging behind the anterior scalene"],
 ["Divisions (6)","Each trunk splits into an anterior + a posterior division. **No nerves originate here**","Roughly the middle third of the clavicle"],
 ["Cords (3)","Anterior divisions of superior+middle → lateral cord • anterior division of inferior → medial cord • all 3 posterior divisions → posterior cord","At the distal clavicle, entering the axilla — named for position around the **axillary artery**"],
 ["Terminal branches (5)","Musculocutaneous, Axillary, Radial, Median, Ulnar","In the axilla, fanning into the limb"]],[20,46,34]));
k.push(tip("Two memory anchors: the cords form an M shape in the axilla (your cadaver-lab landmark), and the \"M-named parts get single contributions\" — the Middle trunk is one root (C7), the Medial cord is one anterior division (inferior trunk)."));

k.push(h1("11. Nerves from the roots"));
k.push(detail(["Nerve","Origin","Course","Innervates"],[
 ["Dorsal scapular","C5 root","Pierces the middle scalene, descends between levator scapulae and posterior scalene/serratus posterior superior, runs along the medial scapular border at the anterior edge of the rhomboids","Levator scapulae, rhomboid minor, rhomboid major (no cutaneous)"],
 ["Long thoracic","C5, C6, C7 roots","Roots merge deep to the middle scalene; descends POSTERIOR to the rest of the plexus, deep to the clavicle, superficial to ribs 1–2, down the anterior thoracic wall","Serratus anterior only (no cutaneous)"]],[16,14,44,26]));
k.push(infoBox("Clinical spotlight: winging scapula",[
 "Long thoracic nerve injury → serratus anterior can no longer pin the medial border and inferior angle against the ribs",
 "The medial border lifts visibly off the thorax — the \"wing\"",
 "Classic causes: the nerve's exposed course makes it vulnerable in axillary surgery and with heavy backpack straps"],C.gold,C.lightGold));

k.push(h1("12. Nerves from the trunks (both from the SUPERIOR trunk)"));
k.push(detail(["Nerve","Origin","Course","Innervates"],[
 ["Subclavian","Superior trunk (C5–C6)","Anteriorly and inferiorly between anterior + middle scalenes with the subclavian vessels","Subclavius (no cutaneous)"],
 ["Suprascapular","Superior trunk (C5–C6)","Laterally, superior to the plexus, through the posterior triangle → under the superior transverse scapular ligament at the **suprascapular notch** → hooks through the **spinoglenoid notch**","Supraspinatus + infraspinatus; sensory to GH and AC joints"]],[15,17,42,26]));
k.push(bullet("**No nerves originate from the divisions.** That line is a free test question."));

k.push(h1("13. Nerves from the cords"));
k.push(h2("Lateral cord — \"Long-Legged Movers\" (lateral pectoral, lateral root of median*, musculocutaneous*)"));
k.push(detail(["Nerve","Details"],[
 ["Lateral pectoral (C5–C7)","Crosses anterior to the axillary vessels to the deep surface of pec major. Motor: pec major (+ some pec minor via the **ansa pectoralis**, the communicating loop it sends to the medial pectoral nerve). Sensory: GH joint"]],[28,72]));
k.push(h2("Medial cord — \"Make Many Moves Using Muscles\" (medial pectoral, medial brachial cutaneous, medial antebrachial cutaneous, ulnar*, medial root of median*)"));
k.push(detail(["Nerve","Details"],[
 ["Medial pectoral (C8–T1)","Starts posterior to the axillary artery, merges with the ansa pectoralis, pierces pec minor (motor to it) with some fibers reaching pec major"],
 ["Medial brachial cutaneous (C8–T1)","Purely sensory — skin of the medial lower arm; runs near the axillary vein on the medial arm"],
 ["Medial antebrachial cutaneous (C8–T1)","Purely sensory — medial forearm + olecranon; travels between axillary artery and vein, ends at the medial epicondyle splitting into anterior/posterior branches"]],[28,72]));
k.push(h2("Posterior cord — \"Rugbys Are Ultra-Competitive\" (upper subscapular, lower subscapular, thoracodorsal, axillary*, radial*)"));
k.push(detail(["Nerve","Details"],[
 ["Upper/superior subscapular (C5–C6)","First branch off the cord; short medial run in the posterior axilla → **upper subscapularis**"],
 ["Thoracodorsal (C6–C8)","Comes off between the two subscapular nerves; descends the posterior axillary wall with the latissimus neurovascular bundle, crosses teres major → **latissimus dorsi**"],
 ["Lower/inferior subscapular (C5–C6)","Runs farther distally along the posterior wall → **teres major + subscapularis**"]],[28,72]));

k.push(h1("14. The five terminal branches"));
k.push(detail(["Nerve (origin)","Course","Motor","Cutaneous"],[
 ["Musculocutaneous (lateral cord, C5–C7)","Emerges at pec minor's lateral border, **pierces coracobrachialis**, runs deep to biceps / superficial to brachialis","Coracobrachialis, biceps brachii, brachialis","Continues as lateral antebrachial cutaneous n. — anterolateral forearm"],
 ["Median (lateral + medial cords, C5–T1)","Superficial down the center of the arm by the brachial artery → between pronator teres heads → between FDS and FDP → **through the carpal tunnel** under the flexor retinaculum","Most forearm flexors, thenar muscles, lateral two lumbricals (details in Modules 13–14)","Palmar thumb + lateral 3½ digits and adjacent palm, plus their distal dorsal tips"],
 ["Ulnar (medial cord, C8–T1)","Medial to the brachial artery → behind the medial epicondyle in the **ulnar groove** → cubital tunnel → medial forearm → **superficial** to the flexor retinaculum, lateral to the pisiform through **Guyon's canal**","Flexor carpi ulnaris, medial half of FDP, most intrinsic hand muscles","Medial 1½ digits front and back + medial palm/dorsum"],
 ["Axillary (posterior cord, C5–C6)","Posterior to the axillary artery, anterior to subscapularis → through the **quadrangular space** with the posterior circumflex humeral artery → wraps medial to the **surgical neck**","Deltoid, teres minor","Skin over the deltoid/upper lateral arm; articular branch to the GH joint"],
 ["Radial (posterior cord, C5–T1 — the largest terminal branch)","Posterior to the axillary artery between coracobrachialis and teres major → obliquely between the medial and lateral triceps heads through the **radial groove** → wraps the distal humerus → anterior to the lateral condyle → splits into superficial (sensory) + deep (motor) branches at the cubital fossa","Triceps, anconeus, brachioradialis (more below the elbow in Module 13)","Posterior arm and middle posterior forearm"]],[22,36,20,22]));
k.push(tnote("Quadrangular space borders (where the axillary nerve exits): teres minor above, teres major below, long head of triceps medially, surgical neck of the humerus laterally."));
k.push(infoBox("Clinical spotlight: anterior shoulder dislocation → axillary nerve",[
 "Dislocations typically drive the humeral head **anteriorly and inferiorly**",
 "That stretches the axillary nerve at the surgical neck → weak deltoid (abduction) and teres minor, numb \"regimental badge\" patch over the deltoid",
 "Same event can also injure the labrum (Bankart lesion) and dent the humeral head (Hill-Sachs lesion)"],C.red,C.lightRed));

/* ─────────────────────────── PATIENT CASES ─────────────────────────── */
k.push(pageBreak());
k.push(banner("PATIENT CASES","The Sync-Session Cases, Worked"));
k.push(spacer());

k.push(h1("Case 1 — Overhead thrower with clicking: SLAP tear"));
k.push(bullet("**Joint anatomy:** the GH joint is humeral head + glenoid fossa; the labrum is the fibrocartilaginous rim that deepens the socket and enlarges the contact surface."));
k.push(bullet("**SLAP = Superior Labrum Anterior to Posterior** — a tear of the superior labrum running front to back."));
k.push(bullet("**Biceps–labral complex:** the long head of biceps anchors into the supraglenoid tubercle and superior labrum — that anchor is what peels."));
k.push(bullet("**Mechanism:** in late cocking (max ER) the GH ligaments load up; through cocking and deceleration the biceps tendon exerts a repeated **peel-back force** on the superior labrum."));
k.push(bullet("**Why the clicking/catching:** a torn labral flap disrupts smooth articulation of the humeral head."));
k.push(bullet("**If he'd dislocated anteriorly instead:** expect GH ligament injury, a **Bankart lesion** (anteroinferior labrum), and possibly a **Hill-Sachs lesion** (humeral head impaction)."));

k.push(h1("Case 2 — Traction injury with a weak shoulder: Erb palsy"));
k.push(bullet("**Localize first:** plexus order proximal→distal is roots, trunks, divisions, cords, terminal branches; the symptoms map to **C5–C6**."));
k.push(bullet("**Nerves hit:** axillary + musculocutaneous → weak **deltoid** (abduction) and **biceps** (elbow flexion + supination)."));
k.push(bullet("**Sensory map confirms it:** lateral shoulder = axillary (superior lateral cutaneous n. of arm); lateral forearm = musculocutaneous (lateral antebrachial cutaneous n.). Both are C5–C6 territories → **upper plexus** injury."));
k.push(bullet("**Pattern: Erb palsy (upper trunk).** Traction that widens the neck-to-shoulder angle stresses the upper trunk preferentially — classic in falls onto the shoulder and difficult deliveries."));
k.push(bullet("**Why the hand still works:** C8–T1 (lower trunk → median/ulnar) is untouched. **Why the biceps reflex is down:** that reflex runs on C5–C6 via the musculocutaneous nerve."));

k.push(...glossary("Module 12 — Quick-Reference Glossary",[
 ["Conoid tubercle / trapezoid line","Clavicular attachments of the two coracoclavicular ligament parts"],
 ["Spinoglenoid notch","Suprascapular nerve's hook-around point — entrapment here spares supraspinatus"],
 ["Surgical neck","Common humeral fracture site; axillary nerve wraps behind it"],
 ["Glenoid labrum","Fibrocartilage rim deepening the glenoid; thicker anteriorly; torn in SLAP/Bankart lesions"],
 ["Rotator interval","Gap between rotator cuff tendons, supported by the superior GH + coracohumeral ligaments"],
 ["Ansa pectoralis","Communicating loop between lateral and medial pectoral nerves"],
 ["Quadrangular space","Teres minor / teres major / long head of triceps / surgical neck — axillary nerve + posterior circumflex humeral artery"],
 ["Guyon's canal","Ulnar nerve's superficial entry into the hand, lateral to the pisiform"],
 ["Erb palsy","Upper-trunk (C5–C6) traction injury — weak deltoid/biceps, lateral sensory loss, hand spared"]]));

build(k,"/home/claude/out/Module12_ShoulderGirdle_BrachialPlexus_StudyNotes.docx");
