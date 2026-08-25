const L = require('/home/claude/notes_lib.js');
const {C,h1,h2,body,bullet,tnote,tip,compare,detail,infoBox,banner,glossary,fig,pageBreak,spacer,cover,build,linkBox} = L;
const E="/home/claude/emb25/";
const k=[];

k.push(...cover("Therapeutic Interventions I (DPTH 6231)","Module 2: Muscle Mechanics",
 "Topics 2.1–2.4 + Sync Session 2 — how muscle makes force, and how we change it",
 ["Dr. Jake Awruch (2.1, 2.2, 2.4), Dr. Erika Nelson-Wong (2.3 stretching), Dr. Perry (2.3 PNF)",
  "Running theme Canvas states up front: **throughout this module, think of ways PTs can vary force for our patients**",
  "Required reading spans Neumann, ACSM and Kisner & Colby — page ranges are cited at each topic"]));

/* ─────────────────────────── TOPIC 2.1 ─────────────────────────── */
k.push(banner("TOPIC 2.1","Muscle Mechanics"));
k.push(spacer());
k.push(body("Objectives: describe the biomechanical muscle model, describe muscle architecture, understand length-tension, understand force-velocity."));

k.push(h1("1. The Passive Components"));
k.push(body("Three connective-tissue layers. None of them contract, but all of them generate force — as a stretch response, not a contraction."));
k.push(detail(["Layer","What it surrounds"],[
 ["**Endomysium**","Individual muscle fibres"],
 ["**Perimysium**","Muscle fibre bundles"],
 ["**Epimysium**","The entire muscle — outermost layer, and it **becomes the tendon**"]],[2600,6760]));
k.push(tnote("Even though these three layers have no contractile ability to generate force directly, they can contribute force more like a stretch response — they create a passive elasticity when overstretched."));

k.push(h1("2. The Motor Unit"));
k.push(body("A motor unit is a motor neuron (an axon) plus the group of muscle fibres it innervates. When you look at someone's muscle externally you are seeing thousands of motor units and all the neurologic machinery that goes with them."));
k.push(compare("SMALL MOTOR NEURONS","LARGE MOTOR NEURONS",
 ["**Slow** fibres","**Long** twitch duration","**Small** amplitude","**Fatigue resistant** — endurance","Think marathoner"],
 ["**Fast** fibres","**Short** twitch duration","**High** amplitude","**Fatigue quickly**","Think sprinter, or a running back"],
 C.teal,C.red,C.lightTeal,C.lightRed));

k.push(h1("3. Architecture: Fusiform vs Pennate"));
k.push(compare("FUSIFORM","PENNATE",
 ["Fibres run **parallel** to each other and to the central tendon","Fibres go **straight** from origin to insertion","Less room to pack fibres → **less surface area**","Generally produces **less** force"],
 ["Fibres sit at an **angle** to the central tendon","Converge from several directions — think pectoralis","The angle creates **more room and surface area**","Packs more fibres → generally produces **more** force"],
 C.blue,C.green,C.lightBlue,C.lightGreen));

k.push(h1("4. Length-Tension"));
k.push(bullet("**Too long** — actin and myosin cross-bridges can't reach each other to pull. The longer the muscle, the fewer can engage. **Tension is reduced.**"));
k.push(bullet("**Too short** — the filaments overlap so far they're already 'zipped up' and can't pull. **Tension is also reduced.**"));
k.push(bullet("Somewhere in between is an **optimal length** that produces the most force."));
k.push(infoBox("Total tension = passive tension + active tension",[
 "A short muscle has almost no passive component — there's no stretch on it yet",
 "As the muscle elongates you get more active tension AND more passive elastic tension",
 "Which is why maximum total tension for a single muscle fibre occurs at **1.2 × resting length**"],C.blue,C.lightBlue));
k.push(tip("Total strength is length-tension PLUS moment arm. Changing the joint angle changes both, and whichever one has the bigger influence dominates the torque at that angle."));
k.push(...fig(E+"totstr.png",1302,945,"Total strength = length-tension + moment arm (Sync 2 deck)"));

k.push(h1("5. Force-Velocity"));
k.push(body("Force depends on the velocity of shortening. Move fast and there isn't time for enough cross-bridges to form, so force drops. Move slowly and force is higher."));
k.push(tnote("The road-bike analogy from the lecture: pedalling when you're moving very slowly, the crank arms are hard to push — you need high torque. Coasting at speed, pedalling is easy because you're already moving."));

k.push(...glossary("Quick-Reference Glossary — Topic 2.1",[
 ["Endomysium / Perimysium / Epimysium","Passive connective-tissue layers around fibres, bundles, and the whole muscle; the epimysium becomes tendon"],
 ["Motor unit","A motor neuron and every muscle fibre it innervates"],
 ["Fusiform","Fibres parallel to the central tendon; less cross-sectional area, less force"],
 ["Pennate","Fibres angled to the central tendon; more area, more force"],
 ["Length-tension","Force varies with muscle length — weak when too long or too short, strongest in mid-range"],
 ["1.2 × resting length","The single-fibre length at which total (active + passive) tension peaks"],
 ["Force-velocity","Faster shortening → less force; slower shortening → more force"]]));
k.push(pageBreak());

/* ─────────────────────────── TOPIC 2.2 ─────────────────────────── */
k.push(banner("TOPIC 2.2","Factors for Force Production"));
k.push(spacer());
k.push(body("Objectives: evaluate muscle function and roles, describe contraction types, describe fibre types, understand neurological control, describe the stretch-shortening cycle, differentiate mono- from multi-articular."));

k.push(h1("1. Muscle Roles"));
k.push(detail(["Role","What it does","Worked example"],[
 ["**Agonist**","The prime mover — the most important muscle in that movement","Picking up a glass of water: **biceps / brachialis**"],
 ["**Antagonist**","Opposite action to the agonist. It isn't opposing during normal movement, but it could — that's co-contraction","**Triceps**"],
 ["**Synergist**","Assists the movement; important for coordination and control","**Brachioradialis**, which also assists elbow flexion"]],[1700,3900,3760]));
k.push(bullet("Second example from the lecture — **shoulder flexion**: anterior deltoid is the agonist; upper trap slightly, and lower trap providing posterior rotation of the scapula plus stability, are synergists. Those muscles aren't driving the motion, they're assisting and controlling it."));

k.push(h1("2. Contraction Types"));
k.push(detail(["Type","Length","Torque","Example"],[
 ["**Concentric**","**Shortening**","Internal torque **>** external","Picking something up"],
 ["**Isometric**","**Same length**","Internal **=** external","Planks"],
 ["**Eccentric**","**Elongating**","External torque **>** internal","Descending from a squat"]],[1700,2100,2700,2860]));
k.push(tip("The rule of thumb worth memorising: in the lower body, if the patient is moving DOWNWARD, assume everything is eccentric — quads, glutes, hamstrings, calves. As they stand back up it flips to concentric for those same muscles."));

k.push(h1("3. Fibre Types"));
k.push(compare("TYPE I — SLOW TWITCH","TYPE II — FAST TWITCH",
 ["**Smaller** fibres","**Fatigue resistant** — good endurance","**Aerobic**","Posture and sustained activity","Marathoner, ultramarathoner"],
 ["**Larger** fibres","**Fatigue quicker**","**Anaerobic**","Athletics, cutting, agility, power, strength training","Sprinter"],
 C.teal,C.red,C.lightTeal,C.lightRed));

k.push(h1("4. Neurological Control and the Force-Time Relationship"));
k.push(bullet("**Size principle** — small motor neurons activate first, then larger ones. That layering gives a smooth, controlled development of force."));
k.push(bullet("**Rate coding** — the firing frequency of those axons. Clinically it won't change much; what matters is that force develops over time."));
k.push(bullet("**Force-time** — the time to develop force is clinically tiny, but real: electromechanical delay → cross-bridge formation → force transmission."));
k.push(tnote("Think about myotome testing or manual muscle testing — it makes sense that you gradually increase the resistance, because it takes a little time for force to develop."));

k.push(h1("5. The Stretch-Shortening Cycle"));
k.push(compare("MECHANICAL","NEUROLOGICAL",
 ["**Series elastic components (SEC)**","Muscle is stretched, energy is stored, then released with the concentric contraction"],
 ["**Muscle spindles**","Muscle is stretched quickly, spindles activate and increase agonist activity (potentiation)","This is the **stretch (myotatic) reflex**"],
 C.blue,C.purple,C.lightBlue,C.lightPurple));
k.push(...fig(E+"ssc.png",1743,1173,"The three phases of the stretch-shortening cycle (Topic 2.2 handout)"));
k.push(detail(["Phase","What happens"],[
 ["**Eccentric**","Agonist is stretched · energy stored in the SEC · muscle spindles stimulated"],
 ["**Amortization**","The pause between eccentric and concentric. Time for the stretch reflex to occur — **Type Ia afferents → alpha motor neurons** → increased agonist contraction"],
 ["**Concentric**","Agonist fibres shorten · SEC release their elastic energy · agonist contraction increased by alpha motor neurons"]],[2200,7160]));
k.push(tnote("The runner's foot hits the ground, there's a quick dorsiflexion into the calf, and that calf reflexively pushes back. Some of the propulsion in running is active contraction and some of it is stored energy."));

k.push(h1("6. Biarticular Muscles"));
k.push(body("Muscles that cross two joints. The triceps crosses the shoulder (scapular attachment) and the elbow (ulna). The hamstrings cross the hip (pelvis) and the knee (tibia and fibula)."));
k.push(detail(["Hamstring position","Effect"],[
 ["Hip **flexed**","Hamstring **stretched**"],
 ["Knee **extended**","Hamstring **stretched**"],
 ["Hip **extended**","Hamstring on **slack**"],
 ["Knee **flexed**","Hamstring on **slack**"]],[3400,5960]));
k.push(bullet("Done together, the stretch **adds up** — which is why the long-sit test felt tight in school. Hip flexion plus knee extension lengthens the hamstring from both ends and it runs out of range fast. Bend the knee and you get more room to flex the hip."));
k.push(tip("Try it on yourself for the triceps: arm at your side, bend the elbow — little tightness. Now reach straight overhead, then try to touch your back. That tightness is passive insufficiency: the muscle is too tight to allow elongation at both joints at once."));
k.push(bullet("Biarticular muscles do change force production, but where it matters more is **passive range of motion and flexibility** — they reduce available range, and often do."));

k.push(...glossary("Quick-Reference Glossary — Topic 2.2",[
 ["Agonist / Antagonist / Synergist","Prime mover / opposite action / assists and controls"],
 ["Concentric / Isometric / Eccentric","Shortening / same length / lengthening under load"],
 ["Size principle","Small motor neurons recruited before large ones, giving smooth force development"],
 ["Rate coding","Frequency of motor-neuron firing"],
 ["Electromechanical delay","Lag between neural signal and measurable force"],
 ["Series elastic component (SEC)","Passive elastic structures that store and return energy"],
 ["Amortization phase","The pause between eccentric and concentric phases, when the stretch reflex occurs"],
 ["Biarticular","Crossing two joints — triceps, hamstrings, rectus femoris"],
 ["Passive insufficiency","A multi-joint muscle can't be stretched enough to give full range at every joint it crosses at once"]]));
k.push(pageBreak());

/* ─────────────────────────── TOPIC 2.3 ─────────────────────────── */
k.push(banner("TOPIC 2.3","Flexibility, Stretching and PNF"));
k.push(spacer());
k.push(body("Two things are needed for flexibility: **joint mobility** and **tissue extensibility**. Limit either one and range of motion drops, so both have to be sufficient for the activity. Tissue extensibility deficits are treated with stretching; joint mobility deficits are treated with joint mobilisation."));

k.push(h1("1. What 'Flexibility' Actually Means"));
k.push(compare("DYNAMIC FLEXIBILITY","PASSIVE FLEXIBILITY",
 ["= **active range of motion (AROM)**","How much the joint moves **with active muscle contraction**"],
 ["= **passive range of motion (PROM)**","How much the joint can be moved **without active contraction**"],
 C.blue,C.teal,C.lightBlue,C.lightTeal));
k.push(tnote("We tend to place value judgements on flexibility by thinking more is always better, and this isn't always the case. There will be an optimal level of mobility for each person, unique to them, based on structure, age, activity level and type, and any medical conditions."));
k.push(bullet("How much is enough? Refer to **ROM norms for each joint**, and to the tasks the person actually performs. There is **no reliable or valid test for general 'flexibility'**."));

k.push(h1("2. Is Stretching Good or Bad?"));
k.push(body("It depends — on whether the effect you want is chronic or the effect you'll get is acute."));
k.push(compare("CHRONIC EFFECTS","ACUTE EFFECTS",
 ["**Increases** range of motion — good if that's the goal","**Decreases** musculotendinous stiffness — good if that's the goal"],
 ["**Decreases strength, power, speed and movement performance** immediately post-stretch — bad before competition","Only when the stretch is held **longer than 90 seconds** (Kay et al. 2012)"],
 C.green,C.red,C.lightGreen,C.lightRed));
k.push(infoBox("The practical conclusion",[
 "**Pre-exercise stretching is fine if held under 60 seconds** (Kisner p. 91)",
 "Might not matter at all if you're stretching before bed — might matter a great deal before the 200 m hurdles",
 "For an athlete, any decrement in performance can be a problem, so favour dynamic work pre-exercise"],C.gold,C.lightGold));

k.push(h1("3. Strategies to Optimise a Static Stretch"));
k.push(detail(["Strategy","Why it works"],[
 ["**Positioning**","The muscle must be relaxed — not contracting to hold a position or fight gravity. A standing toe-touch has the hamstrings working eccentrically to keep you from falling on your nose, so the sarcomeres are shortening and you aren't elongating all the tissue"],
 ["**Autogenic inhibition**","Contract the muscle (usually isometrically against resistance), then relax — the **Golgi tendon organ** inhibits that same muscle and you move further into range. This is the **contract-relax** PNF technique"],
 ["**Reciprocal inhibition**","Contracting the agonist inhibits the antagonist via muscle spindle activity, allowing unimpeded motion. Also called an **assisted stretch**"],
 ["**Avoid the stretch reflex**","Quick stretch activates the muscle spindle and makes the muscle you're stretching contract — counterproductive"],
 ["**Prolonged and static**","No bouncing; work into the plastic region"]],[2300,7060]));
k.push(tnote("On reciprocal inhibition, Dr. Nelson-Wong is careful: it is unclear whether this is really the underlying mechanism, as it has only been documented in animal studies."));

k.push(h1("4. Indications and Contraindications"));
k.push(compare("INDICATIONS (Kisner Box 4.1)","CONTRAINDICATIONS (Kisner Box 4.2)",
 ["Limited ROM from **loss of tissue extensibility**","To prevent future structural issues from restricted motion","Limited ROM from muscle weakness and shortening of the opposing tissue","Part of a programme for injury risk reduction","As part of warm-up and/or cool-down"],
 ["Motion limited by a **bony block**","Recent or incompletely healed **fracture**","**Acute inflammation or infection** (heat, swelling)","Would disrupt adjacent healing tissue (e.g. post tendon or ligament repair)","**Sharp, acute pain** with movement or stretch","Tissue trauma such as **haematoma**","**Hypermobility**","Shortened tissue provides stability that can't be achieved another way","**Shortened tissue is necessary for function**"],
 C.green,C.red,C.lightGreen,C.lightRed));

k.push(h1("5. Passive Insufficiency and Tenodesis"));
k.push(body("A multi-joint muscle cannot be stretched enough to produce full range at every joint it crosses simultaneously. Note the word **passive** — this is about extensibility, not strength, force or contraction."));
k.push(bullet("Try it: make a tight fist and maximally flex your wrist. Either you don't get full wrist flexion, or your fingers open. That's passive insufficiency of the long finger extensors."));
k.push(bullet("Full hip flexion with full knee extension at the same time — unlikely, because of hamstring passive insufficiency."));
k.push(tip("Tenodesis is the clinically important case. People with spinal cord injury who have wrist extension use the tightness in their finger flexors and extensors to pick up and release objects. We would never stretch those muscles for more range — it would have a hugely negative impact on their independence and quality of life. This is the last contraindication on the list, made concrete."));
k.push(body("Review 'selective stretching' in Kisner p. 88, and watch Mason Ellis's tenodesis video linked on the Canvas topic page."));

k.push(h1("6. Modes of Stretching"));
k.push(body("Read Kisner p. 99–110 and come to the sync session ready to discuss which mode suits which situation: static · cyclic/intermittent · ballistic · PNF · manual · mechanical · self · passive · active."));

k.push(h1("7. PNF — Proprioceptive Neuromuscular Facilitation"));
k.push(body("Developed in the 1940s–50s by a neurophysiologist, a physician and two PTs, as a hands-on treatment to facilitate and strengthen effective patterns of movement, applied in functional positions and activities."));
k.push(infoBox("Four key components of PNF",[
 "**Synergistic patterns** — organisational elements of the CNS that stabilise performance. In PNF they are **rotational and diagonal**: think putting on a seatbelt, or looping a belt through your belt loops",
 "**Repetition, specific hand and body placement, and varying manual resistance** to drive timing, coordination, force production, stabilisation and flexibility",
 "**Recovery through functional positions and activities** — rolling, the unilateral lift, hip flexion-adduction patterns",
 "**Motor learning and motor control principles** — practice and feedback schedules for retention and transfer"],C.purple,C.lightPurple));
k.push(detail(["Goal","Techniques"],[
 ["Promote **activation and coordination**","Rhythmic initiation · quick stretch"],
 ["Promote **stabilization**","Stabilizing reversals · rhythmic stabilization"],
 ["Promote **strengthening**","Combination of isotonics · dynamic reversals · timing for emphasis"],
 ["Promote **flexibility**","**Contract-relax · hold-relax** — the two for this module"]],[2900,6460]));
k.push(compare("CONTRACT-RELAX","HOLD-RELAX",
 ["Performed at a point of **limited range of motion**","Uses **autogenic inhibition and reciprocal inhibition**","Think: increasing hamstring flexibility"],
 ["Also for stretching and flexibility, but often selected when the patient presents with **pain**","Active movement into **pain-free end range** → isometric contraction of the agonist → relax → passive movement into the new range","Uses **autogenic inhibition**","Think: waking with neck pain after sleeping badly"],
 C.blue,C.teal,C.lightBlue,C.lightTeal));
k.push(bullet("**Barriers and contraindications:** cognitive or behavioural limitations (PNF relies on following commands and visual tracking) · patients needing maximal or dependent assistance may not be ready for advanced strengthening · repeated quick stretch is **contraindicated** with joint instability, pain or injured muscle · contract-relax and hold-relax are **contraindicated** with recent muscle injury, acute swelling or inflammation, or surgery — apply them later in healing · flaccid or contracted muscle tone needs a different approach."));
k.push(tnote("Dr. Perry, on how to study this: 'If you're asked why patient positioning is important when applying PNF, you could put it in your own words.' Notice the operative verbs in the objectives — recall, understand, differentiate, evaluate, apply."));
k.push(linkBox("🔗 Required PhysioU viewing — PNF for flexibility",[
 ["Contract Relax (playlist)","https://app.clinicalpattern.com/pnf/2098/2107/",""],
 ["Introduction: Contract Relax","https://app.clinicalpattern.com/pnf/2098/2107/p5493/",""],
 ["Main: Contract Relax","https://app.clinicalpattern.com/pnf/2098/2107/p5494/",""],
 ["Hold Relax (playlist)","https://app.clinicalpattern.com/pnf/2098/2109/",""],
 ["Introduction: Hold Relax","https://app.clinicalpattern.com/pnf/2098/2109/p5495/",""],
 ["Main: Hold Relax","https://app.clinicalpattern.com/pnf/2098/2109/p5496/",""]],C.teal));

k.push(h1("8. ACSM Guidelines for Flexibility"));
k.push(bullet("Static, ballistic and PNF all improve joint-specific range of motion — but **not immediately before a bout of exercise**, and they work best on **warm muscle**, so post-exercise is generally the time to target range."));
k.push(bullet("**Dynamic stretching is encouraged prior to exercise** and can improve performance."));
k.push(...fig(E+"fitt.png",1664,813,"ACSM FITT-VP applied to flexibility (Topic 2.3 handout)"));
k.push(detail(["FITT-VP","Recommendation"],[
 ["**Frequency**","≥ 2–3 days/week — daily is best"],
 ["**Intensity**","Stretch to the point of tightness / slight discomfort"],
 ["**Time**","Static: **10–30 s** for adults, **30–60 s** for older adults. PNF: **3–6 s contract at 20–75% MVC**, then a **10–30 s** assisted stretch"],
 ["**Type**","Include each major muscle unit; static, dynamic, ballistic and PNF are all effective"],
 ["**Volume**","**90 s total per joint** — e.g. 3 × 30 s"],
 ["**Progression**","Based on stretch tolerance (discomfort) and range of motion"]],[2100,7260]));
k.push(tip("Tolerance to stretch is highly individual — the lecture explicitly compares it to pain. That individual variation is where a lot of the disagreement in the literature comes from."));

k.push(...glossary("Quick-Reference Glossary — Topic 2.3",[
 ["Flexibility","Range of motion allowed at a joint by the extensibility of surrounding tissue, not by skeletal structure"],
 ["Dynamic / passive flexibility","AROM / PROM"],
 ["Self-stretching","Stretching performed independently"],
 ["Passive vs assistive stretching","Muscle completely relaxed vs muscle assisting further into motion"],
 ["Autogenic inhibition","GTO-mediated inhibition of the same muscle following its contraction — basis of contract-relax"],
 ["Reciprocal inhibition","Agonist contraction inhibits the antagonist (animal studies only)"],
 ["Stretch reflex","Spindle-mediated contraction in response to a quick stretch — avoid it when stretching"],
 ["Tenodesis","Functional grasp and release using passive insufficiency of the finger flexors and extensors with wrist extension"],
 ["Contract-relax","PNF flexibility technique at limited range, using autogenic and reciprocal inhibition"],
 ["Hold-relax","PNF flexibility technique into pain-free end range, using autogenic inhibition; chosen when pain is present"],
 ["FITT-VP","Frequency, Intensity, Time, Type, Volume, Progression — the ACSM prescription framework"]]));
k.push(pageBreak());

/* ─────────────────────────── TOPIC 2.4 ─────────────────────────── */
k.push(banner("TOPIC 2.4","Strength Testing and Benefits of Exercise"));
k.push(spacer());
k.push(body("Objectives: understand the benefits of resistance exercise, describe methods for strength assessment, discuss how those findings relate to exercise prescription, and determine the most appropriate method for a given individual."));

k.push(h1("1. SAID and the Adaptation Timeline"));
k.push(body("**Specific Adaptation to Imposed Demands.** Train with no load and you may get exercise benefits, but minimal strength change. Load it and the body adapts."));
k.push(...fig(E+"said.png",1946,1173,"Neural adaptation precedes hypertrophy across the first 4–10 weeks (Sync 2 deck)"));
k.push(detail(["Timepoint","What's happening"],[
 ["**~2 weeks**","Small adaptation — and it is **neural**"],
 ["**~4 weeks**","Real adaptation starting — **muscle**"],
 ["**6–8 weeks**","Peak of the strength adaptation curve"]],[2100,7260]));
k.push(tip("Exam-relevant and clinically constant: if a patient improves in the first two weeks, that is motor control and neural adaptation, not hypertrophy. Sync 2 Case 1 tests exactly this — Preston performs a clean pain-free single-leg squat at visit 2, and the answer is that it's too early for true hypertrophic change."));

k.push(h1("2. What Strength Training Changes"));
k.push(compare("MUSCULAR","NEUROLOGICAL",
 ["**Hypertrophy** — enlargement of fibre cross-sectional area","New **sarcomeres** added","Increased actin and myosin","Increased muscle protein synthesis","Hyperplasia"],
 ["Increased **agonist recruitment**","Improved **neuronal firing rates**","Improved **synchronisation and timing** of neural discharge","**Reduction in inhibitory mechanisms**"],
 C.red,C.purple,C.lightRed,C.lightPurple));
k.push(detail(["System","Benefit"],[
 ["**Muscle**","Strength, power and endurance → activities of daily living, independence"],
 ["**Bone**","Increased bone mass; reduced risk of osteopenia, osteoporosis and fall-related injury"],
 ["**Metabolic**","Improved glucose tolerance — prevention and regulation of diabetes; muscle cells take in and use glucose more efficiently"],
 ["**Body composition**","Increased lean body mass → increased resting metabolic rate → weight control"],
 ["**Connective tissue**","Stronger tendons and ligaments"],
 ["**Mortality**","Lowers all-cause mortality"]],[2100,7260]));
k.push(body("Review ACSM Guidelines p. 10–12."));

k.push(h1("3. The Cost of Disuse"));
k.push(bullet("**Atrophy** — reduced fibre size, reduced physiological cross-sectional area (PCSA), fewer sarcomeres, fewer contractile proteins."));
k.push(bullet("A **20% decrease in PCSA produces a 40% decrease in strength.**"));
k.push(bullet("Reduced neural drive · increased fatty deposits in muscle · decreased functional ability · faster fatigue · mobility and balance problems, since balance is partly a strength issue."));
k.push(tnote("The good news is that it's reversible with training. The body adapts to a reduction in activity the same way it adapts to an increase — it's maintaining efficiency either way."));

k.push(h1("4. Choosing a Test"));
k.push(body("Start from why you are testing. There is never enough time to run every test you know, so pick the ones that answer your question."));
k.push(detail(["Patient","What to test"],[
 ["Soccer player post-ACL reconstruction, return-to-sport question","Symmetry of overall strength; **hop testing** for single-leg stability"],
 ["Lower-functioning patient returning to ADLs","**Sit-to-stand** testing"],
 ["Endurance athlete","Endurance-weighted tests"],
 ["Power lifter or sprinter","Strength and power tests"]],[3600,5760]));
k.push(infoBox("General testing principles",[
 "**Warm-up** — 5–10 min light aerobic exercise, dynamic stretching, light-intensity reps of the test exercise",
 "**Familiarise** the patient with the task and the equipment",
 "**Consistent posture** — don't let them change it; **consistent speed** — use a metronome if the protocol calls for it",
 "**Full range of motion** — no shortcuts. In a sit-to-stand, not fully sitting is skipping part of the range",
 "**Spotter** if necessary. You can never let anyone fall",
 "Recognise your real limits: equipment, space and time"],C.blue,C.lightBlue));

k.push(h1("5. The Measures"));
k.push(detail(["Measure","What it gives you","Watch out for"],[
 ["**MMT**","The most common strength test","**Maxes out fast.** 5/5 doesn't mean excessively strong — it means they met the quota for 5/5"],
 ["**Hand grip strength**","Simple, cheap, good measure of general upper-extremity strength; **predicts function and health in older adults**",""],
 ["**One repetition max**","Maximum strength in a particular movement",""],
 ["**Dynamometry**","An answer **in pounds** rather than a grade — highly accurate, ideal for tracking progress and limb symmetry","Expensive; clinics usually have one or two"],
 ["**Muscular endurance**","Reps to fatigue at a prescribed load, repeated on another date and compared. Push-up test for upper body and trunk",""],
 ["**Power**","**Vertical jump test** — norms exist by age and sex. **5× sit-to-stand** for older adults: not a true power test, but valuable information",""]],[1900,4400,3060]));
k.push(tnote("Why dynamometry matters, from the lecture: a patient with an advanced C7 radiculopathy shows up with a triceps that's significantly weaker on one side. 'You're still weak, but you seem like you can push a little bit heavier' is guessing. The dynamometer says 8 pounds last week, 12 today. Still not full — but that's improvement, and I know it."));
k.push(tip("Sync 2 Case 2 asks how you would establish >90% quad limb symmetry before return to sport. The answer is the dynamometer — MMT is not specific enough for that question."));

k.push(...glossary("Quick-Reference Glossary — Topic 2.4",[
 ["SAID","Specific Adaptation to Imposed Demands"],
 ["Hypertrophy","Increase in muscle fibre cross-sectional area, with added sarcomeres and contractile protein"],
 ["PCSA","Physiological cross-sectional area — a 20% loss costs roughly 40% of strength"],
 ["1 RM","One repetition maximum — the greatest load moved once through the range"],
 ["Dynamometry","Instrumented strength measurement reported in pounds, accurate enough to track change and symmetry"],
 ["5× sit-to-stand","Functional test for older adults; informative but not a true measure of power"],
 ["Hop testing","Single-leg hop battery used in return-to-sport decision making"]]));
k.push(pageBreak());

/* ─────────────────────────── SYNC ─────────────────────────── */
k.push(banner("SYNC SESSION 2","Prioritization, Cases and Lab Skills",C.teal));
k.push(spacer());
k.push(h1("1. The Prioritization Pyramid"));
k.push(body("The organising idea of the whole sync session: find the ONE primary variable, because it drives every intervention."));
k.push(...fig(E+"prio.png",1869,974,"Clinical decision making — influence increases as you move down the pyramid (Sync 2 deck)"));
k.push(detail(["Level","Influence on your decision"],[
 ["Length-tension","**Lowest**"],
 ["Moment arm / torque","↓"],
 ["Skill / motor control / readiness","↓"],
 ["**Primary variable → the #1 target**","**Highest**"]],[4200,5160]));
k.push(infoBox("If you remember only four things from Sync 2",[
 "Find the **ONE primary variable** — it drives every intervention",
 "**Moment arm / torque** is why exercises feel harder or easier",
 "**Length-tension matters, but WAY less than people think**",
 "Interventions and tests focus on the **injury mechanism** — prevent reinjury"],C.gold,C.lightGold));

k.push(h1("2. Applying Length-Tension and Moment Arm"));
k.push(detail(["Movement","Strong at","Weak at","Why"],[
 ["**Biceps curl**","**90° flexion**","Fully straight and full flexion","Best actin–myosin overlap **and** the largest moment arm at mid-range"],
 ["**Quad / knee extension**","**45° of flexion**","Full straight, full flexed","*MMT position is 45°*"],
 ["**Hamstring strength**","**Mid-range**","Full straight, full flexed","*MMT position is 45°*"]],[2000,1700,2100,3560]));
k.push(tip("Concentric vs eccentric, from the quiz review: someone climbing UP is working concentrically in the standing leg; moving DOWN is eccentric. Nice to know — in gait, the standing leg is always the one doing more work. Stand on one leg and do a single-leg squat: the leg you're standing on is working harder."));

k.push(h1("3. The Two Cases"));
k.push(detail(["Case","Question","Answer"],[
 ["**Preston**, 37, training for a January marathon. Knee pain only when running. MMT 5/5, normal ROM, pain and difficulty with single-leg squat to 60° with valgus collapse reproducing his concordant pain. At visit 2 he performs a clean, pain-free single-leg squat.","Why the fast change?","At two weeks he only has **neurologic adaptation**. It is too early for true improvement from hypertrophy."],
 ["**Yana**, 17, varsity soccer midfielder, month 9 post-ACL rehab, being cleared to practice and scrimmage. One criterion is limb symmetry in strength.","How do you find out whether quad strength is >90% of the other limb?","**Dynamometer.** MMT is not specific enough for this."]],[3800,2400,3160]));

k.push(h1("4. Lab Skills for the Practical"));
k.push(detail(["Skill","Note"],[
 ["**Ely's test**","Stretch of a biarticular muscle → **rectus femoris**"],
 ["**Hamstrings 90/90**","Stretch of a biarticular muscle → **hamstrings**"],
 ["**Eccentric**","Lengthening under load → usually moving down"],
 ["**Concentric**","Shortening under load → usually moving up"],
 ["**Isometric**","No movement → hold a plank"],
 ["**Stretching types**","Passive, assisted, autogenic inhibition, reciprocal inhibition, dynamic. For the practical: know **when** to stretch (ROM limited by tissue extensibility) and demonstrate the one you choose"],
 ["**PNF**","Contract-relax, hold-relax, alternating isometrics"],
 ["**Handheld dynamometry**","More accurate measurement — e.g. left-to-right symmetry"],
 ["**Movement assessment**","Single-leg squat and squat movement assessment"],
 ["**Power testing**","Squat jump; 5× sit-to-stand"],
 ["**Return to sport**","Hop testing — high value with athletes, particularly in cutting sports like basketball and soccer"]],[2500,6860]));

k.push(...glossary("Quick-Reference Glossary — Sync Session 2",[
 ["Primary variable","The single biggest driver of the patient's problem; the #1 target for intervention"],
 ["Concordant pain","The patient's familiar, presenting pain — the one you are trying to reproduce and treat"],
 ["Valgus collapse","Medial knee deviation under load, commonly seen on single-leg squat"],
 ["Ely's test","Prone knee flexion test for rectus femoris tightness"],
 ["Hamstrings 90/90","Hip at 90°, knee extended from 90° to assess hamstring extensibility"],
 ["Limb symmetry index","Involved-to-uninvolved strength ratio used in return-to-sport criteria"]]));

k.push(linkBox("📚 Required reading for Module 2",[
 ["Neumann pg. 51–64",null,"— Topic 2.1"],
 ["Neumann pg. 17–20 and 61–76",null,"— Topic 2.2"],
 ["ACSM pg. 100–103 and 160; ACSM online pg. 40 and 56 (Flexibility and FITT)",null,"— Topic 2.3"],
 ["Kisner & Colby pg. 86–91, 99–110, and 216",null,"— Topic 2.3"],
 ["ACSM pg. 10–12, 90–100, and 153–157",null,"— Topic 2.4"],
 ["ACSM online pg. 17–19 (Health Benefits of Improving Muscular Fitness), pg. 39 (Muscular Fitness), pg. 59 (Resistance Training)",null,"— Topic 2.4"]],C.gold));

build(k,"/home/claude/out/Module2_MuscleMechanics_StudyNotes.docx");
