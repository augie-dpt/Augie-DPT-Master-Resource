const L = require('/home/claude/notes_lib.js');
const {C,h1,h2,body,bullet,tnote,tip,compare,detail,infoBox,banner,glossary,fig,pageBreak,spacer,cover,build,linkBox} = L;
const E="/home/claude/emb29/";
const k=[];

k.push(...cover("Therapeutic Interventions I (DPTH 6231)","Module 5: Joint Mechanics",
 "Topics 5.1–5.2 + Sync Session 5 — arthrokinematics, and choosing the direction",
 ["Joint Classifications and Joint Mechanics: **handouts credit Dr. Erika Nelson-Wong**, Canvas text credits Dr. Awruch (see the flag on the next page). Peripheral joints: **Dr. Andreyo**. Choosing Manual Therapy & Exercise: **Dr. Awruch**",
  "**Read the Module 5 Study Guide before anything else** — it narrows the scope enormously, and it's reproduced in full at the end of these notes",
  "The purpose, in the study guide's own words: **learn WHEN the model points you toward a joint/manual approach.** Module 6 is what the techniques are and how to apply them"]));

k.push(infoBox("⚠ Attribution conflict between Canvas and the handouts",[
 "The **Canvas Topic 5.1 page** says “Joint Classifications by **Dr. Awruch**” and “Joint Mechanics by **Dr. Awruch**”",
 "Both **handout title slides** credit **Erika Nelson-Wong, PT, DPT, PhD, CSCS**, and the narration style matches her other lectures",
 "The handout is the primary artifact, so these notes credit Nelson-Wong — but the Canvas page says otherwise. Worth a moment's confusion if you notice it"],C.red));

/* ─────────────────────────── TOPIC 5.1 ─────────────────────────── */
k.push(banner("TOPIC 5.1","Joint Mechanics"));
k.push(spacer());
k.push(tnote("Why this presentation exists, in the deck's own words: having a strong understanding of joint mechanics can almost be like having a crystal ball — you will soon see the power of how you can predict joint motion based on an understanding of the underlying joint mechanics."));

k.push(h1("1. The Two Words Everything Rests On"));
k.push(compare("OSTEOKINEMATICS","ARTHROKINEMATICS",
 ["Motion of the **bones** relative to the planes of the body","Also called **physiological motion** or **gross skeletal motion**","Describes the movement of body segments","Measured in **degrees of freedom** — the number of motions available at a joint"],
 ["Motion between the **articular surfaces** of the joint","Also called **accessory motion**, **joint mobility**, or **joint play**","A **small** amount of motion","**Highly dependent on the shape and type of the joint**"],
 C.blue,C.teal,C.lightBlue,C.lightTeal));
k.push(bullet("**Degrees of freedom** is determined by the number of planes motion is available in, or the number of axes of rotation. It **always ranges from 1 to 3**, since we have three planes and three axes."));

k.push(h1("2. Joint Classifications"));
k.push(detail(["Joint type","Degrees of freedom","Shape","Body examples"],[
 ["**Hinge**","**1**","Resembles a door hinge; one plane, one axis","**Humeroulnar** joint at the elbow · **interphalangeal** joints of fingers and toes"],
 ["**Pivot**","**1**","Allows the single motion of rotation, in the transverse plane","**Humeroradial** joint"],
 ["**Ellipsoid**","**2**","Almost a ball and socket, but oblong or elliptical — like an egg. Narrower along one axis, so no rotation about the third","**Radiocarpal** joint at the wrist"],
 ["**Ball and socket**","**3**","Round; allows a great deal of mobility in three planes about three axes","**Glenohumeral** joint · **coxofemoral** (hip) joint"],
 ["**Plane**","**1 or 2** — not always consistent, depends on required function and soft tissue constraints","Flat surfaces adjacent to each other","**Carpometacarpal** joints (except the thumb) · **intercarpal** · **intertarsal**. Also very common in the spine"],
 ["**Saddle**","**2**","Shaped like a rider on a saddle — rocks front-to-back and side-to-side. Shape does not allow axial rotation","**Thumb** (first CMC) · **sternoclavicular** joint"],
 ["**Condyloid**","**2**","More complex — has both concavities and convexities","**Metacarpophalangeal** joints · **tibiofemoral** joint"]],[1600,1700,2700,3360]));
k.push(tip("The lecture is blunt about the expectation: you are responsible for recognising which joint classification applies to EVERY joint in the body — so it's a great time to review your anatomy — plus its degrees of freedom, its available osteokinematic motions, and which planes and axes apply to each motion."));

k.push(h1("3. The Three Arthrokinematic Motions"));
k.push(detail(["Motion","Definition","The mental picture"],[
 ["**Roll**","Multiple points on one surface contact multiple points on the other. **Essentially the osteokinematic motion**","A tire rolling on a road, or a ball rolling on a table"],
 ["**Slide (glide)**","A single point on one surface contacts multiple points on the other","A tire skidding along a road"],
 ["**Spin**","A single point on one surface rotates on a single point of the other","A top spinning in place"]],[1600,4200,3560]));
k.push(tip("The one sentence that makes the rest of it solvable: if you can determine the direction the segment is moving in, that will ALWAYS correspond to and match the direction of roll."));

k.push(h1("4. Convex-Concave — the Rule Itself"));
k.push(body("**Joint congruency** is the reason this matters. Our joints must fit closely together to provide stability while allowing mobility — fitting like a puzzle, with maximised surface and contact area. Roll without slide, or slide without roll, would destroy that."));
k.push(...fig(E+"concave.png",1009,511,"Concave on convex — roll and slide in the SAME direction (Topic 5.1 handout)"));
k.push(...fig(E+"convex.png",1009,511,"Convex on concave — roll and slide in OPPOSITE directions (Topic 5.1 handout)"));
k.push(compare("CONCAVE MOVING ON CONVEX","CONVEX MOVING ON CONCAVE",
 ["Roll and slide occur in the **SAME direction**","**Worked example:** knee flexion, open chain. The **concave tibia** moves on the **convex femur**. Osteokinematic motion is posterior → **posterior roll AND posterior slide**"],
 ["Roll and slide occur in **OPPOSITE directions**","**Worked example:** the moving segment goes posteriorly, so roll is posterior — and there is a simultaneous **anterior slide**"],
 C.green,C.purple,C.lightGreen,C.lightPurple));
k.push(tnote("Why both must happen: if roll occurred without slide, the joint would gap and pull apart. If slide occurred without roll, the distal segment would slide past the proximal one. Either way you lose congruency — the motions must occur together to maintain the integrity of the joint."));

k.push(h1("5. Open Chain vs Closed Chain — the Reversal"));
k.push(...fig(E+"openclosed.png",1009,511,"How the rule is applied, and the reading that defends it (Topic 5.1 handout)"));
k.push(bullet("**We assess primarily in open chain**, and **passively** — muscle action would otherwise influence the arthrokinematic motion. In open chain the distal segment is free and moving on the proximal segment."));
k.push(infoBox("The reversal, at the tibiofemoral joint",[
 "**Open chain:** concave tibia moving on convex femur → roll and slide in the **same** direction",
 "**Closed chain:** convex femur moving on concave tibia → roll and slide in **opposite** directions",
 "**The structures haven't changed. What's moving relative to the other has changed.**"],C.gold,C.lightGold));
k.push(tnote("Functionally you might detect mobility limitations in closed chain, and these can be due to arthrokinematic limitations or muscle activation patterns, or both. You will eventually need to look at this from both views."));
k.push(tip("The assigned Neumann opinion article is required reading specifically because Dr. Neumann addresses why it is still worth teaching and learning the convex-concave patterns to guide treatment — even though they are not perfect and have real limitations."));

k.push(...glossary("Quick-Reference Glossary — Topic 5.1",[
 ["Osteokinematics","Motion of bones relative to the body's planes; physiological or gross skeletal motion"],
 ["Arthrokinematics","Motion between articular surfaces; accessory motion, joint play"],
 ["Degrees of freedom","Number of independent motions available at a joint; 1 to 3"],
 ["Roll","Multiple points on multiple points; matches the direction of the osteokinematic motion"],
 ["Slide (glide)","One point on the moving surface travelling across multiple points of the stable one"],
 ["Spin","Rotation of one point on a single point of the opposing surface"],
 ["Joint congruency","How closely the articular surfaces fit, maximising contact area for stability"],
 ["Concave-convex rule","Concave on convex: roll and slide the same direction"],
 ["Convex-concave rule","Convex on concave: roll and slide opposite directions"],
 ["Open chain","Distal segment free, moving on a fixed proximal segment"],
 ["Closed chain","Distal segment fixed; the proximal segment moves on it, reversing the rule"],
 ["Open-packed position","The loosest, least congruent joint position"],
 ["Close-packed position","The position of maximum congruency and capsular tautness"]]));
k.push(pageBreak());

/* ─────────────────────────── TOPIC 5.2 ─────────────────────────── */
k.push(banner("TOPIC 5.2","Mechanics of the Peripheral Joints"));
k.push(spacer());
k.push(body("Five regional lectures from **Dr. Andreyo**. The study guide narrows what you're accountable for: **primary knee and shoulder, ankle also important, spine secondary.** The regional detail below is ordered accordingly."));

k.push(h2("A. The Knee"));
k.push(h1("Tibiofemoral Joint"));
k.push(detail(["Property","Detail"],[
 ["**Classification**","**Hinge joint** — distal femur moving on the proximal tibia"],
 ["**Degrees of freedom**","**2** — flexion/extension, and internal/external rotation"],
 ["**Open-packed position**","**25° shy of full extension** — the loosest position"],
 ["**Close-packed position**","**Full extension and external rotation** — most taut on the capsule"],
 ["**Flexion/extension**","**Sagittal plane.** The axis **migrates** with the degree of flexion, because the condyle isn't perfectly spherical — so torque differs through range"],
 ["**Expected ROM**","Full extension = **0°**, or up to about **5° of hyperextension**. Flexion to about **140°**"],
 ["**Rotation**","**Transverse plane**, and unlike flexion/extension this is a **fixed axis**. Internal rotation ~**25°**, external up to ~**45°**. More flexion or extension puts tension on the capsule and restricts rotation"]],[2300,7060]));
k.push(detail(["Chain","Relationship","Extension","Flexion"],[
 ["**Open**","Concave tibia on convex femur — **same direction**","Anterior roll + **anterior slide**","Posterior roll + **posterior slide**"],
 ["**Closed**","Convex femur on concave tibia — **opposite directions**","**Posterior slide**","**Anterior slide**"]],[1400,3400,2300,2260]));
k.push(h1("The Screw-Home Mechanism"));
k.push(bullet("The knee very rarely moves purely in the sagittal plane. To reach **full extension** it must use the screw-home mechanism: through the **last ~30° of extension**, the articular surfaces require a small amount of rotation because they are not equal surfaces."));
k.push(compare("OPEN CHAIN","CLOSED CHAIN",
 ["As the leg goes into extension, the **tibia must externally rotate**"],
 ["The inverse — the **femur must internally rotate**"],
 C.blue,C.teal,C.lightBlue,C.lightTeal));
k.push(tnote("Both transcripts render this as “screw hole mechanism.” That is a transcription artifact — the term is screw-home. These notes use the correct term."));
k.push(h1("Patellofemoral Joint"));
k.push(bullet("A **plane joint** — analogous to a book moving on a table, though the condyles make it more of a divot. The patella slides in a groove."));
k.push(detail(["Knee motion","Patella moves","So to improve it…"],[
 ["**Flexion**","Pulled **inferiorly**",""],
 ["**Extension**","Pulled **superiorly**","**Mobilize the patella superiorly** — that's the direction it wants to move"]],[2200,2600,4560]));
k.push(bullet("Because it's a plane joint it has more motions than the obvious one: superior-inferior in the sagittal plane, plus **tilt** side to side, **medial-lateral shift**, and a very small amount of **rotation** in the groove."));
k.push(tnote("The patella is a sesamoid bone sitting within tissue, so it moves with that tissue — which is why so many external forces are pulling on it to say where it should and shouldn't go. Tight laterally-directed structures such as the iliotibial band can pull it laterally and alter how well it sits centred in the groove."));
k.push(bullet("**Compressive forces:** the more flexion you go into, the more the patella is pulled in toward the knee joint, creating tension across the quadriceps and patellar tendons and **more compressive force at the joint**."));

k.push(h2("B. The Shoulder Complex"));
k.push(body("Four joints in one region: **glenohumeral, acromioclavicular, sternoclavicular, scapulothoracic.** Very rarely does a shoulder movement involve only one of them."));
k.push(detail(["Property","Glenohumeral joint"],[
 ["**Classification**","**Ball and socket**, 3 degrees of freedom — though the deck notes it looks less like a ball in a socket and more like **a golf ball sitting on a tee**"],
 ["**Congruency**","Very little bony congruency — a small glenoid relative to a large humeral head. Great mobility, and therefore **more instability**"],
 ["**Stabilisers**","**Glenoid labrum** deepens the surface with softer tissue. Robust **ligaments anteriorly**, substantial **muscular structures posteriorly**"],
 ["**Open-packed position**","Slight **abduction and horizontal adduction** — i.e. the **scapular plane**"],
 ["**Close-packed position**","**Full abduction and external rotation**"],
 ["**Osteokinematics**","Flexion/extension · abduction/adduction · internal/external rotation — usually in combination"],
 ["**Arthrokinematics**","**Convex humeral head on concave glenoid → roll and slide in OPPOSITE directions.** Abduction gives a **superior roll and an inferior glide**"]],[2300,7060]));
k.push(tip("The inferior glide with abduction is the one to lock in — it's why glenohumeral inferior and posterior glides are on the practical's core skills checklist."));

k.push(h2("C. The Ankle"));
k.push(detail(["Property","Talocrural joint"],[
 ["**Articulation**","Distal **tibia and fibula on the talus**"],
 ["**Degrees of freedom**","Predominantly **1** — dorsiflexion / plantarflexion"],
 ["**Open-packed position**","Slight **plantarflexion**"],
 ["**Close-packed position**","**Maximal dorsiflexion**"],
 ["**Open chain**","**Convex talar head on concave tibia/fibula → opposite directions.** Dorsiflexion = **anterior roll + posterior glide**"],
 ["**Closed chain**","**Concave tibia on convex talus → same direction.** Dorsiflexion = **anterior roll + anterior slide**"]],[2300,7060]));
k.push(tip("This is exactly why the practical lists a talocrural POSTERIOR glide (including the mobilization-with-movement concept) as the skill for limited dorsiflexion — and it's the correction to the Module 1 Canvas page, which mistakenly names the calcaneus."));
k.push(bullet("**Subtalar joint** — talus on calcaneus. The lecture flags a genuine complication: the **posterior facet is a concave talus on a convex calcaneus**, while the **anterior and middle facets are the opposite**. Do they cancel out? Do you address the posterior facet because it's larger? **For simplicity the course treats it as a plane joint**, and unpacks it further in joint mobilization."));

k.push(h2("D. The Elbow"));
k.push(detail(["Articulation","Relationship","Flexion"],[
 ["**Humeroulnar**","**Concave ulna on convex humerus** — same direction","Roll **and** glide both **anterior**. Reverse for extension"],
 ["**Humeroradial**","**Concave radius on convex humerus** — same direction","Roll and slide both **anterior**"],
 ["**Proximal radioulnar**","**Convex radius on concave** — opposite directions","Roll **anterior** → glide **posterior**"]],[2200,3400,3760]));
k.push(tnote("Upper extremity mechanics are taught in open chain because that's how we use the arm functionally — not to discredit closed-chain upper extremity movement, which comes back in upper extremity MSK."));

k.push(h2("E. Wrist and Hand"));
k.push(detail(["Property","Detail"],[
 ["**Radiocarpal classification**","**Ellipsoid** — two main directions of movement"],
 ["**Motions**","**Flexion/extension** and **ulnar/radial deviation**"],
 ["**Resting position**","Neutral with **slight ulnar deviation** — put your hand flat on a desk and that's it"],
 ["**Arthrokinematics**","Proximal row is a **convexity moving on the concavity of the radius** → roll and slide in **opposite** directions"],
 ["**Axis of rotation**","The **capitate**"],
 ["**Midcarpal joint**","Between the proximal and distal rows — follows the same pattern as the radiocarpal joint"],
 ["**Ulnar variance**","Most of the articulation is on the **radius**, not the ulna — relevant to load distribution"]],[2300,7060]));

k.push(h2("F. Choosing Manual Therapy & Exercise"));
k.push(body("Dr. Awruch's decision pathway, tying Modules 3–5 together. **Rule 1: start with what you see.** Osteokinematics is what looks limited, painful or asymmetric — observe and measure the movement first."));
k.push(...fig(E+"bucket.png",1009,600,"Step 2 — tissue or joint (Topic 5.2, Choosing Manual Therapy handout)"));
k.push(detail(["Step","The question","The answer"],[
 ["**Entry — MSK screen**","Start with the limited or painful motion (e.g. knee flexion). **Is it a ROM problem, a pain problem, or both?**","**ROM problem = “can't get there”** (stiffness/limitation). **Pain problem = “won't go there”** (sensitivity/irritability). Measure with goniometry and symptom report, decide which limiter is primary"],
 ["**Step 2 — the bucket**","If it's a ROM issue, what's limiting it?","**Tissue** = muscle length / soft tissue → stretching, active mobility, STM. **Joint** = painful or hypomobile → manual therapy, and then: **which bone is moving?** Tip: use a gentle mob as a *test* — does it change symptoms or ROM?"],
 ["**Step 3 — access method**","Manual therapy and exercise are **not a hierarchy** — different methods, same target","**Assisted access (manual):** mobilization (usually a glide) · MWM · traction/distraction · manipulation (future class). **Owned access (exercise):** active mobility in the same direction · isometrics/gentle/partial range if sensitive · progress with FITT"],
 ["**Steps 4–6**","Access → re-test → ownership","**Access:** find the motion with the least symptoms. **Re-test:** repeat the same movement immediately — did ROM improve, did pain drop? **Ownership:** give a patient-performed drill for the same target motion"]],[2000,3400,3960]));
k.push(...fig(E+"rompain.png",1009,600,"The two-variable decision grid (Topic 5.2, Choosing Manual Therapy handout)"));
k.push(detail(["ROM","Pain","Do this"],[
 ["**↓ Limited**","**↑ High**","Assisted access + a supported owned version"],
 ["**↓ Limited**","**↓ Low**","Mobility + build capacity (progress)"],
 ["**Full**","**↑ High**","Pain modulation + graded exposure"],
 ["**Full**","**↓ Low**","**Strength / load / skill — skip mechanics entirely**"]],[1700,1700,5960]));
k.push(tip("Avoid random-exercise thinking. Be target-motion specific, confirm with an immediate re-test, then build capacity. Manual is assisted access; exercise is independent ownership. Same goal, different delivery."));

k.push(...glossary("Quick-Reference Glossary — Topic 5.2",[
 ["Tibiofemoral joint","The hinge articulation between femur and tibia; 2 degrees of freedom"],
 ["Screw-home mechanism","Obligatory rotation in the last ~30° of knee extension — tibia externally rotates in open chain, femur internally rotates in closed chain"],
 ["Patellofemoral joint","Plane articulation of the patella in the femoral groove"],
 ["Scapular plane","Roughly 30–45° anterior to the frontal plane; the glenohumeral open-packed position"],
 ["Glenoid labrum","Fibrocartilaginous rim deepening the glenoid"],
 ["Talocrural joint","Ankle mortise — distal tibia and fibula on the talus"],
 ["Subtalar joint","Talus on calcaneus; facets have opposing curvature, so the course treats it as a plane joint"],
 ["Humeroulnar / humeroradial / proximal radioulnar","The three articulations of the elbow complex"],
 ["Radiocarpal joint","Ellipsoid articulation of the proximal carpal row on the radius"],
 ["Ulnar variance","Relative length of the ulna to the radius at the wrist, affecting load distribution"],
 ["MWM","Mobilization with movement — a sustained glide applied while the patient actively moves"],
 ["STM","Soft tissue mobilization"]]));
k.push(pageBreak());

/* ─────────────────────────── STUDY GUIDE + SYNC ─────────────────────────── */
k.push(banner("SYNC SESSION 5 & THE STUDY GUIDES","What You Are Actually Accountable For",C.teal));
k.push(spacer());
k.push(body("Module 5 ships with two documents that exist purely to narrow your focus. Both are worth more than any single lecture at exam time."));

k.push(h1("1. The Module 5 Study Guide"));
k.push(tnote("Read this first: this does not add material. It narrows your focus and connects expectations to class resources and lab videos."));
k.push(compare("YOU ARE RESPONSIBLE FOR","YOU ARE NOT RESPONSIBLE FOR",
 ["**Identifying the joint limiter**","**Naming the direction**","Using class and lab resources **safely**","**Pairing manual + exercise**"],
 ["Exercises or skills from **elsewhere**","**Memorizing slide/glide rules for every joint in the body** and applying them to cases"],
 C.green,C.red,C.lightGreen,C.lightRed));
k.push(detail(["Scope tier","Joints"],[
 ["**Primary**","**Knee + shoulder**"],
 ["**Also important**","**Ankle**"],
 ["**Secondary exposure**","Spine — limited, case-dependent (that's Module 6)"]],[2600,6760]));
k.push(tnote("If it felt backwards, that's normal — we wanted the techniques to have a clear purpose when we get there. This module is the why/when setup; the next module is what it is plus the techniques."));

k.push(h1("2. The Case Loop — the Actual Skill"));
k.push(detail(["Step","What you do"],[
 ["**1. Bucket**","Pain/fear vs tissue extensibility vs joint mobility vs strength"],
 ["**2. Direction**","Name what motion is limited"],
 ["**3. Trial**","Choose **one** next step — a brief manual/joint approach, or an exercise"],
 ["**4. Re-test**","**The same metric, immediately** — ROM, pain, or function"],
 ["**5. Pair + ownership**","Directional exercise + a simple home rule (lab skill videos only)"],
 ["**6. If no change or worse**","Adjust — regress, or switch bucket"]],[2600,6760]));
k.push(infoBox("The study script — what “good” sounds like",[
 "“**Impairment bucket** is ______ because ______.”",
 "“**Direction of ROM** that is limited is ______.”",
 "“**ROM tested** is ______; **ROM re-tested** is ______.”",
 "“**Pair with a directional exercise** that reinforces ______.”",
 "**Boundary:** you are not expected to choose “new” exercises not covered in the course. If you know the direction, your best default is **Active ROM or Resisted ROM into that direction** — that is sufficient"],C.gold,C.lightGold));

k.push(h1("3. Why Open vs Closed Chain Matters (Three Reasons)"));
k.push(bullet("**To name the position** for communication — open chain vs closed chain."));
k.push(bullet("**To answer roll vs glide questions** — which bone is moving."));
k.push(bullet("**To pick a glide direction** that biases the motion you want to improve — focus on shoulder, knee, ankle."));
k.push(compare("MOBILIZATION — THE SIMPLE DEFINITION","THE TWO MAIN WAYS",
 ["The therapist uses their hands to help a **stiff or painful joint move better**"],
 ["**1. PROM with overpressure** — move the limb through the motion, often near end range","**2. A small joint-specific push or pull (a glide)** to bias the direction you want — **directional thinking only**, you don't need the full slide-glide chart"],
 C.blue,C.teal,C.lightBlue,C.lightTeal));
k.push(tnote("Why we learned glides: glides help you think about direction now. The next module connects that direction thinking to actual manual techniques."));

k.push(h1("4. The Practical Exam Guide"));
k.push(infoBox("Read this first, to reduce studying stress",[
 "Skills and exam questions come **ONLY from class resources** — Canvas modules, lab videos, handouts, slides, in-class labs",
 "If you hear an exercise or technique mentioned from outside the course, **treat it as an example only**",
 "**If a skill is not on the Core Skills Checklist, it will not be expected on the practical**"],C.teal,C.lightTeal));
k.push(detail(["What is graded","Detail"],[
 ["**Clinical reasoning**","Choose the right intervention bucket based on the **main limiter** — ROM deficit vs strength deficit vs high pain"],
 ["**Safe setup + execution**","Positioning, therapist mechanics, cues, patient safety"],
 ["**Progression/regression**","Make a logical change based on patient response"]],[2400,6960]));
k.push(detail(["Bucket","Core skills to demonstrate AND explain"],[
 ["**Pain modulation / fear**","Shoulder pendulums · gentle shoulder or knee AROM · **grade I mobilization**"],
 ["**Mobility — tissue extensibility**","PROM assessment (shoulder or knee) · hamstring stretch (self or manual) · Ely's / rectus femoris stretch (self or manual)"],
 ["**Mobility — joint**","**Glenohumeral posterior OR inferior glide** · **talocrural posterior glide** (including the MWM concept) · lumbar PA glides · **knee flexion OR extension mobilization**. *No patient self/home versions of joint mobilizations are required*"],
 ["**Strength / stability**","**Regular AROM of the target joint is a valid strengthening answer.** Progression: **AAROM → AROM → RROM**. Lower extremity: lunge sequence, lateral band walks, side-lying hip abduction. Upper extremity: rotator cuff ER, mid-trap **T**, lower-trap **Y**"]],[2400,6960]));
k.push(compare("SCOPE","NOT ON THE PRACTICAL",
 ["Most focus is on **shoulder and knee**; ankle may appear depending on the case","Skills from other modules may be asked as “please perform this skill” — **not as a case**"],
 ["**Thoracic manual therapy** — safety and exposure only","**Level 3 performance/testing** — hop testing, cone drills, plyometrics: recognise appropriate use, not a performance expectation","Any skill not on the Core Skills Checklist"],
 C.blue,C.red,C.lightBlue,C.lightRed));
k.push(tip("Two reassurances stated outright in the guide. You are assessed on decision-making and safety, not perfect technique for every variation. And you will not be double- or triple-dinged: choosing the wrong bucket costs points there, but you don't keep losing points for being on the wrong road."));
k.push(detail(["Step","What happens"],[
 ["**Prep**","Sign in, receive your case, use prep time to identify the main limiter + bucket"],
 ["**Day 1**","Identify impairment bucket and task; **pick 3 interventions** — the exact exercise can vary, but the bucket selection should be correct"],
 ["**Day 2**","Proctor prompts a status change, better or worse. **Regress or progress logically**"],
 ["**Day 3**","Second status change. Same reasoning process"]],[1800,7560]));
k.push(infoBox("The simple case script",[
 "**Bucket:** ____ because ____ (main limiter)",
 "**Direction / target:** ____ (what needs to change)",
 "**Intervention:** ____ (choose from core skills)",
 "**Re-test:** ____ (the same metric)",
 "**If better:** progress ____ / **If worse:** regress ____ — with a clear why"],C.gold,C.lightGold));

k.push(...glossary("Quick-Reference Glossary — Study Guides",[
 ["Joint limiter","The structure actually restricting the motion — what you name before choosing a technique"],
 ["Case loop","Bucket → direction → trial → re-test → pair and ownership → adjust"],
 ["Grade I mobilization","Small-amplitude oscillation at the start of range, for pain modulation"],
 ["AAROM / AROM / RROM","Active-assisted / active / resisted range of motion — the regression-to-progression ladder"],
 ["Pendulums","Gravity-assisted pain-free shoulder swinging used early after injury or surgery"],
 ["Ownership","Converting a manually-produced gain into a patient-performed drill"]]));

k.push(linkBox("📚 Required reading for Module 5",[
 ["Neumann p. 5–10 — Ch. 1, Osteokinematics up to Kinetics",null,"— Topic 5.1"],
 ["Neumann p. 30–34 — Ch. 2, Classification of Synovial Joints up to Histological Organization",null,"— Topic 5.1"],
 ["Neumann pp. 503–509, 561–563, 618–626, 137–149, 191–193, 269–273",null,"— Topic 5.2, osteokinematics and arthrokinematics by region"],
 ["The assigned Neumann opinion article on convex-concave patterns",null,"— required; it defends why the rule is still taught"]],C.gold));

build(k,"/home/claude/out/Module5_JointMechanics_StudyNotes.docx");
