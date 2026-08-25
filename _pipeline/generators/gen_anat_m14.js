const L = require('/home/claude/notes_lib.js');
const {C,h1,h2,body,bullet,tnote,tip,compare,detail,infoBox,banner,glossary,fig,pageBreak,spacer,cover,build,linkBox} = L;
const k=[];

k.push(...cover("Human Anatomy (DPTH 6111)","Module 14: Shoulder, Arm, Forearm & Hand — Musculature & Neurovasculature",
 "Topics: 14.1 Anterior Shoulder & Arm • 14.2 Posterior Shoulder & Arm • 14.3 Anterior Forearm & Hand • 14.4 Posterior Forearm & Hand",
 ["Every muscle follows the same recipe: origin, insertion, action, innervation — the instructor's advice is to hunt for PATTERNS, not memorize rows",
  "The organizing patterns: medial epicondyle = flexors (median n. territory), lateral epicondyle = extensors (radial n. territory), ulnar side = ulnar n.",
  "This is the final async module of the course — the last sync session runs the rotator cuff and carpal tunnel patient cases below",
  "Three vascular/nerve \"spaces\" (triangular space, quadrangular space, triangular interval) are classic exam material — borders and contents"]));

/* ─────────────────────────── TOPIC 14.1 ─────────────────────────── */
k.push(banner("TOPIC 14.1","Anterior Shoulder & Arm"));
k.push(spacer());

k.push(h1("1. Anterior muscles"));
k.push(detail(["Muscle","Origin","Insertion","Action","Nerve"],[
 ["Pectoralis major","3 parts: clavicular (medial ½ clavicle), sternal (sternum + costal cartilages 1–6), abdominal (rectus sheath)","**Lateral lip** of intertubercular sulcus","GH adduction, internal rotation, flexion (clavicular head)","Lateral + medial pectoral (C5–T1)"],
 ["Pectoralis minor","Costal cartilages of ribs 3–5","Coracoid process","Scapular protraction + downward rotation","Medial pectoral (+ some lateral)"],
 ["Deltoid","Anterior: lateral ⅓ clavicle • Middle: acromion • Posterior: spine of scapula","Deltoid tuberosity","Anterior: flexion + IR • Middle: abduction **beyond ~15°** • Posterior: extension + ER","Axillary (C5–C6)"],
 ["Coracobrachialis","Coracoid process","Anteromedial humerus","GH flexion + adduction","Musculocutaneous (C5–C7)"],
 ["Biceps brachii","Short head: coracoid • Long head: supraglenoid tubercle (intra-articular!)","Radial tuberosity","**Elbow flexion, supination**, weak GH flexion","Musculocutaneous (C5–C6)"],
 ["Brachialis","Distal ½ anterior humerus","Coronoid process + ulnar tuberosity","**Strongest elbow flexor** (only crosses the elbow)","Musculocutaneous (C5–C6) + radial (C7)"],
 ["Brachioradialis","Lateral supracondylar ridge","Proximal to radial styloid","Elbow flexion **in neutral** (thumb-up) position","Radial (C5–C6)"]],[15,27,20,23,15]));
k.push(tip("Three muscles attach to the coracoid process: pec minor, coracobrachialis, and the short head of biceps. And the intertubercular sulcus hosts 'a lady between two majors' — pec major on the lateral lip, latissimus dorsi in the groove, teres major on the medial lip."));
k.push(infoBox("Clinical spotlight: biceps brachii rupture",[
 "The long head detaches proximally and the muscle belly balls up distally toward the radial tuberosity",
 "The classic **\"Popeye deformity\"** on the anterior arm"],C.red,C.lightRed));

k.push(h1("2. Anterior nerves (Module 12 recap, applied)"));
k.push(bullet("**Medial pectoral** (medial cord, C8–T1) — pierces pec minor, some fibers to pec major. **Lateral pectoral** (lateral cord, C5–C7) — deep surface of pec major + some pec minor; also sensory to the GH joint."));
k.push(bullet("**Axillary** (posterior cord, C5–C6) — quadrangular space → deltoid, teres minor, skin over the deltoid."));
k.push(bullet("**Musculocutaneous** (lateral cord, C5–C7) — the anterior arm's workhorse: pierces coracobrachialis, runs between biceps and brachialis, innervates all three, ends as the lateral antebrachial cutaneous nerve (anterolateral forearm skin)."));

k.push(h1("3. Function — scapulohumeral rhythm and GH movers"));
k.push(body("Overhead motion is **scapulothoracic + glenohumeral movement in coordination** (scapulohumeral rhythm). Anterior-side contributions: pec minor protracts the scapula; at the GH joint — flexion: anterior deltoid + coracobrachialis + pec major (clavicular); adduction: pec major; internal rotation: pec major + anterior deltoid; abduction past ~15°: middle deltoid. Elbow flexion: brachialis (strongest), biceps (adds supination), brachioradialis (neutral grip position)."));

/* ─────────────────────────── TOPIC 14.2 ─────────────────────────── */
k.push(pageBreak());
k.push(banner("TOPIC 14.2","Posterior Shoulder & Arm"));
k.push(spacer());

k.push(h1("4. Posterior muscles"));
k.push(detail(["Muscle","Origin","Insertion","Action","Nerve"],[
 ["Serratus anterior","Lateral surfaces of ribs 1–8/9","Anterior scapula: superior angle, medial border, inferior angle","Scapular **upward rotation + protraction**; pins the scapula to the thoracic wall","Long thoracic (C5–C7)"],
 ["Supraspinatus","Supraspinous fossa","Greater tubercle","**First ~15° of abduction**; stabilizes humeral head","Suprascapular (C5–C6)"],
 ["Infraspinatus","Infraspinous fossa","Greater tubercle","GH external rotation; stabilizer","Suprascapular (C5–C6)"],
 ["Teres minor","Lateral border of scapula","Greater tubercle","GH external rotation + adduction; stabilizer","Axillary (C5–C6)"],
 ["Subscapularis","Subscapular fossa","**Lesser** tubercle","GH internal rotation; stabilizer","Upper + lower subscapular (C5–C6)"],
 ["Teres major","Inferior angle + lower lateral border","**Medial lip** of intertubercular sulcus","GH extension + internal rotation","Lower subscapular (C5–C7)"],
 ["Triceps brachii","Long head: infraglenoid tubercle • Medial head: posterior humerus below radial groove • Lateral head: above radial groove","Olecranon","Elbow extension; long head adds GH extension + adduction","Radial (C6–C8)"],
 ["Anconeus","Lateral epicondyle","Lateral olecranon","Assists elbow extension; stabilizes/\"unlocks\" the elbow (the popliteus of the arm)","Radial (C7–C8)"]],[15,27,20,23,15]));
k.push(infoBox("Clinical spotlight: the rotator cuff",[
 "**S**upraspinatus, **I**nfraspinatus, **T**eres minor, **S**ubscapularis form a tendinous sleeve whose collective job is compressing and centering the humeral head in the glenoid during motion",
 "Insertion order on the humerus, posterior → anterior: **T-I-S on the greater tubercle, then S (subscapularis) on the lesser**",
 "Supraspinatus is the most-torn tendon — it runs under the coracoacromial arch, where a curved/hooked acromion narrows its space (Module 12's acromion-shape story pays off here)"],C.gold,C.lightGold));

k.push(h1("5. Posterior nerves and the three clinical spaces"));
k.push(bullet("**Long thoracic** (C5–C7 roots) → serratus anterior (winging scapula if injured). **Suprascapular** (superior trunk) → supraspinatus + infraspinatus; entrapment under the superior transverse scapular ligament hits both, at the spinoglenoid notch only infraspinatus. Memory hook from lecture: **\"Air force above, Navy below\"** — the suprascapular Artery passes ABOVE the ligament, the Nerve BELOW it."));
k.push(bullet("**Upper subscapular** → subscapularis. **Lower subscapular** → subscapularis + teres major. **Radial** (posterior cord) in the arm → triceps, anconeus, brachioradialis + posterior arm skin."));
k.push(detail(["Space","Borders","Contents"],[
 ["Triangular space","Teres minor (superior), teres major (inferior), long head of triceps (lateral)","**Circumflex scapular artery**"],
 ["Quadrangular space","Teres minor (superior), teres major (inferior), long head of triceps (medial), surgical neck of humerus (lateral)","**Axillary nerve + posterior circumflex humeral artery**"],
 ["Triangular interval","Teres major (superior), long head of triceps (medial), humeral shaft (lateral)","**Radial nerve + deep brachial artery**"]],[22,46,32]));

k.push(h1("6. Function — GH movers by motion"));
k.push(detail(["Motion","Primary movers"],[
 ["Abduction","Supraspinatus (0–15°) → middle deltoid (beyond 15°)"],
 ["Adduction","Pec major, teres major, latissimus dorsi, triceps long head"],
 ["Extension","Posterior deltoid, triceps long head, teres major, latissimus dorsi"],
 ["External rotation","Infraspinatus + teres minor (with posterior deltoid)"],
 ["Internal rotation","Subscapularis + pec major (with anterior deltoid, teres major, lats)"],
 ["Elbow extension","Triceps, assisted by anconeus"]],[30,70]));

/* ─────────────────────────── TOPIC 14.3 ─────────────────────────── */
k.push(pageBreak());
k.push(banner("TOPIC 14.3","Anterior (Ventral) Forearm & Hand"));
k.push(spacer());

k.push(h1("7. Anterior forearm — superficial and deep"));
k.push(detail(["Muscle","Origin","Insertion","Action","Nerve"],[
 ["Pronator teres (superficial)","Medial supracondylar ridge + coronoid process","Lateral radius (distal to supinator)","Pronation (proximal RUJ); elbow flexion","Median (C6–C7)"],
 ["Flexor carpi radialis","Medial epicondyle","Bases of MC 2–3","Wrist flexion + radial deviation","Median (C6–C7)"],
 ["Palmaris longus","Medial epicondyle","Flexor retinaculum + palmar aponeurosis","Wrist flexion; tenses the aponeurosis","Median (C7–C8)"],
 ["Flexor carpi ulnaris","Medial epicondyle + olecranon/posterior ulna","Pisiform, hamate, base of MC 5","Wrist flexion + ulnar deviation","**Ulnar** (C7–T1)"],
 ["Flexor digitorum superficialis","Humeroulnar head: medial epicondyle + coronoid • Radial head: anterior radius","Sides of **middle phalanges** 2–5","MCP + **PIP** flexion, digits 2–5","Median (C8–T1)"],
 ["Flexor digitorum profundus (deep)","Proximal ½ anterior ulna + interosseous membrane","Palmar **distal phalanges** 2–5 (\"profundus goes profoundly deep — all the way to the tip\")","MCP + IP flexion (only DIP flexor)","Digits 2–3: median (AIN) • Digits 4–5: **ulnar**"],
 ["Flexor pollicis longus (deep)","Anterior radius + interosseous membrane","Distal phalanx of thumb","Thumb MCP + IP flexion","Median — anterior interosseous (C7–C8)"],
 ["Pronator quadratus (deep)","Distal anterior ulna","Distal anterior radius","Pronation (distal RUJ)","Median — anterior interosseous"]],[17,25,22,20,16]));
k.push(tnote("Carpal tunnel contents vs. bypassers: FDS, FDP, and FPL tendons plus the MEDIAN NERVE run deep to the flexor retinaculum; flexor carpi radialis, palmaris longus, and flexor carpi ulnaris stay superficial to it, so carpal tunnel compression never touches them."));

k.push(h1("8. Hand muscles — the five compartments"));
k.push(detail(["Compartment (count)","Muscles → key facts"],[
 ["Thenar (3)","**Abductor pollicis brevis** (scaphoid + trapezium tubercles → lateral base of proximal phalanx 1; thumb abduction), **flexor pollicis brevis** (superficial head from retinaculum — median; deep head from trapezoid/capitate — ulnar), **opponens pollicis** (trapezium → radial border of MC1; opposition). All median (recurrent branch, C8–T1) except FPB's deep head"],
 ["Adductor (1)","**Adductor pollicis** — transverse head (palmar MC3) + oblique head (capitate, MC2–3 bases) → medial base of proximal phalanx 1. Deep ulnar branch"],
 ["Hypothenar (3)","**Abductor digiti minimi** (from the pisiform), **flexor digiti minimi brevis** and **opponens digiti minimi** (both from hook of hamate + retinaculum). All deep ulnar branch"],
 ["Central (1)","**Lumbricals 1–4** — originate from the **FDP tendons** (no bone!), insert on the extensor expansion → MCP flexion WITH IP extension (the \"flat-finger, bent-knuckle\" muscles). Lateral two: median; medial two: ulnar"],
 ["Interosseous (2)","**Palmar interossei** — **PAD**duct; **dorsal interossei** — **DAB**duct (reference line = digit 3); both also flex MCPs + extend IPs via the expansions. Deep ulnar branch"]],[24,76]));
k.push(bullet("**Palmaris brevis** sits outside the compartments (superficial): palmar aponeurosis → hypothenar skin, tightens the grip; superficial ulnar branch."));

k.push(h1("9. Median and ulnar nerves in the forearm and hand"));
k.push(compare("MEDIAN NERVE (C5–T1)","ULNAR NERVE (C8–T1)",
 ["Between pronator teres heads → between FDS/FDP → **through the carpal tunnel**",
  "Motor: pronators, FCR, PL, FDS, lateral FDP, FPL, thenar eminence (via recurrent branch), lateral 2 lumbricals",
  "Cutaneous: palmar thumb + lateral 3½ digits + adjacent palm and their dorsal tips",
  "**Pronator syndrome** — compression between the pronator teres heads; reproduced by resisted pronation",
  "**Carpal tunnel syndrome** — see Case 2 below"],
 ["Behind the medial epicondyle → cubital tunnel → **superficial** to the retinaculum through Guyon's canal",
  "Motor: FCU, medial FDP, adductor pollicis, deep FPB head, hypothenar 3, palmaris brevis, ALL interossei, medial 2 lumbricals",
  "Cutaneous: ulnar 1½ digits front and back + medial palm/dorsum",
  "The \"fine motor\" nerve — nearly every intrinsic hand muscle that isn't thenar",
  "Vulnerable at the elbow (ulnar groove) and at Guyon's canal"],
 C.blue,C.teal,C.lightBlue,C.lightTeal));

k.push(h1("10. Function — anterior side"));
k.push(bullet("**Pronation:** pronator teres (proximal RUJ) + pronator quadratus (distal RUJ). **Wrist flexion:** FCR, PL, FCU primary; FDS/FDP/FPL assist. **Radial deviation:** FCR (with the radial wrist extensors). **Ulnar deviation:** FCU (with extensor carpi ulnaris)."));
k.push(bullet("**Fingers:** MCP flexion — lumbricals + FDS + FDP; PIP — FDS + FDP; DIP — **FDP only**. **Thumb:** abduction APB, adduction AP, flexion FPB + FPL, opposition OP."));

/* ─────────────────────────── TOPIC 14.4 ─────────────────────────── */
k.push(pageBreak());
k.push(banner("TOPIC 14.4","Posterior (Dorsal) Forearm & Hand"));
k.push(spacer());

k.push(h1("11. Posterior forearm — superficial and deep"));
k.push(detail(["Muscle","Origin","Insertion","Action","Nerve"],[
 ["Brachioradialis (superficial)","Lateral supracondylar ridge","Proximal to radial styloid","Elbow flexion in neutral","Radial (C5–C6)"],
 ["Extensor carpi radialis longus","Lateral supracondylar ridge","Posterior base of MC 2","Wrist extension + radial deviation","Radial (C5–C8)"],
 ["Extensor carpi radialis brevis","Lateral epicondyle (**common extensor tendon**)","Posterior base of MC 3","Wrist extension + radial deviation","Radial (C5–C6)"],
 ["Extensor digitorum","Lateral epicondyle (common extensor tendon)","Extensor expansions 2–5","MCP + IP extension, digits 2–5","Posterior interosseous (C7–C8)"],
 ["Extensor digiti minimi","Lateral epicondyle (common extensor tendon)","Extensor expansion of digit 5","MCP 5 extension","Posterior interosseous"],
 ["Extensor carpi ulnaris","Lateral epicondyle + posterior ulna","Base of MC 5","Wrist extension + ulnar deviation","Posterior interosseous"],
 ["Supinator (deep)","Lateral epicondyle, radial collateral lig., annular lig., supinator crest","Wraps to the proximal ⅓ of the radius","Supination (proximal RUJ)","Posterior interosseous"],
 ["Abductor pollicis longus (deep)","Posterior radius + ulna + IO membrane","Base of MC 1 (± trapezium)","Thumb CMC abduction + extension; wrist extension","Posterior interosseous"],
 ["Extensor pollicis brevis (deep)","Posterior distal radius + IO membrane","Base of **proximal** phalanx 1","Thumb CMC + MCP extension","Posterior interosseous"],
 ["Extensor pollicis longus (deep)","Posterior middle ulna + IO membrane","Base of **distal** phalanx 1","Thumb MCP + IP extension","Posterior interosseous"],
 ["Extensor indicis (deep)","Posterior distal ulna + IO membrane","Extensor expansion of digit 2","Index extension; weak wrist extension","Posterior interosseous"]],[18,27,20,19,16]));
k.push(infoBox("Clinical spotlights on the extensor side",[
 "**Tennis elbow (lateral epicondylalgia)** — irritation of the common extensor tendon at the lateral epicondyle (ECRB, ED, EDM ± ECU)",
 "**Mallet finger** — forced hyperflexion ruptures the terminal extensor tendon at the DIP → the fingertip droops and can't actively extend",
 "**Anatomical snuffbox** — bounded by the EPL tendon (medial) and EPB + APL tendons (lateral); floor = the scaphoid, which is why you palpate here after a FOOSH; the radial nerve's superficial branch and radial artery cross it"],C.gold,C.lightGold));

k.push(h1("12. Radial nerve, finished"));
k.push(body("At the cubital fossa the radial nerve splits. The **deep motor branch pierces the supinator** and re-emerges renamed the **posterior interosseous nerve (PIN)** — everything extensor beyond the ECRL/ECRB (which are innervated before the split) belongs to it. The **superficial sensory branch** rides deep to brachioradialis, crosses the anatomical snuffbox, and supplies the dorsal radial hand: dorsum of the thumb to the IP, dorsum of digits 2 and half of 3 to the PIPs, plus the posterior arm and central posterior forearm."));
k.push(infoBox("Clinical spotlight: radial nerve injury",[
 "Classic mechanism: mid-shaft humeral fracture through the radial (spiral) groove",
 "Result: **wrist drop** — the wrist and finger extensors go silent, and grip strength collapses because the wrist can't be stabilized in extension"],C.red,C.lightRed));

k.push(h1("13. Function — posterior side"));
k.push(bullet("**Supination:** supinator (biceps assists powerfully in flexion). **Wrist extension:** ECRL, ECRB, ECU primary; ED, EI, EDM assist. **Radial deviation:** ECRL + ECRB (pairing with FCR); **ulnar deviation:** ECU (pairing with FCU)."));
k.push(bullet("**Fingers:** extensor digitorum pulls the extensor hood → MCP + PIP + DIP extension together. **Thumb:** APL abducts/extends the CMC, EPB extends the MCP, EPL extends the IP and pulls the thumb up and out of opposition."));

/* ─────────────────────────── PATIENT CASES ─────────────────────────── */
k.push(pageBreak());
k.push(banner("PATIENT CASES","The Sync-Session Cases, Worked"));
k.push(spacer());

k.push(h1("Case 1 — Painful arc + weak abduction/ER: rotator cuff tendinopathy"));
k.push(bullet("**Anatomy:** GH joint = humeral head + glenoid; the cuff tendons (supraspinatus, infraspinatus, teres minor) insert on the **greater tubercle**, subscapularis on the lesser."));
k.push(bullet("**Most-injured muscle: supraspinatus.** The cuff's job is dynamic stabilization — centering the head in the glenoid; in elevation it counters the deltoid's superior pull on the humeral head."));
k.push(bullet("**Mechanism:** repetitive overhead work loads the tendons in the subacromial space, narrowed by acromion shape/osteophytes, the subacromial bursa, and the coracoacromial ligament."));
k.push(bullet("**Why the exam looks like this:** active abduction hurts (the injured tendon must contract) while passive ROM is full; lowering the arm hurts because **eccentric** cuff control loads the tendon hardest — hence the 70–120° painful arc."));

k.push(h1("Case 2 — Nocturnal numb thumb/index/middle: carpal tunnel syndrome"));
k.push(bullet("**Tunnel anatomy:** roof = **flexor retinaculum**; floor and walls = the concave carpal arch (scaphoid + trapezium radially, pisiform + hamate ulnarly)."));
k.push(bullet("**Compressed structure: the median nerve.** Sensory territory = palmar thumb, index, middle, radial half of ring finger — exactly this patient's complaint."));
k.push(bullet("**Neighbors in the tunnel:** FDS + FDP tendons (plus FPL). Tendon swelling from repetitive typing raises pressure in a space that can't expand → nerve compression. Night symptoms come from sleeping in wrist flexion, which raises tunnel pressure further."));
k.push(bullet("**Weak opposition** because the recurrent median branch drives the thenar muscles."));
k.push(bullet("**The classic sparing:** thenar-eminence SKIN stays normal because the **palmar cutaneous branch leaves the median nerve proximal to the tunnel** and travels over the retinaculum, not through it."));

k.push(...glossary("Module 14 — Quick-Reference Glossary",[
 ["Rotator cuff (SITS)","Supraspinatus, infraspinatus, teres minor (greater tubercle) + subscapularis (lesser) — head-centering sleeve"],
 ["Scapulohumeral rhythm","Coordinated scapulothoracic + GH motion for overhead reach"],
 ["Quadrangular space","Teres minor/major, long head of triceps, surgical neck — axillary n. + posterior circumflex humeral a."],
 ["Triangular interval","Teres major, triceps long head, humeral shaft — radial n. + deep brachial a."],
 ["Common extensor tendon","ECRB + ED + EDM (± ECU) origin at the lateral epicondyle — tennis elbow's address"],
 ["Posterior interosseous nerve","The radial nerve's deep motor branch after piercing supinator"],
 ["Recurrent median branch","The thenar motor branch — opposition lives here"],
 ["Lumbrical paradox","FDP-tendon origin + extensor-hood insertion = MCP flexion with IP extension"],
 ["PAD / DAB","Palmar interossei ADduct, Dorsal ABduct (reference: digit 3)"],
 ["Wrist drop","Radial nerve palsy (spiral-groove humeral fracture) — lost wrist/finger extension"]]));

build(k,"/home/claude/out/Module14_ShoulderArmForearmHand_Musculature_StudyNotes.docx");
