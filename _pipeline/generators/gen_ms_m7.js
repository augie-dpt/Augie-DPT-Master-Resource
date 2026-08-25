const L = require('/home/claude/notes_lib.js');
const {C,h1,h2,body,bullet,tnote,tip,compare,detail,infoBox,banner,glossary,fig,pageBreak,spacer,cover,build,linkBox} = L;
const E="/home/claude/emb22/";
const k=[];

k.push(...cover("Movement Science (DPTH 6221)","Module 7: Applying Motor Learning Principles to Intervention",
 "Topics: 7.1 Developing an Intervention Plan to Recover Functional Movement • 7.2 Developing Interventions to Improve Gait • Sync 7: motor learning applied + the group assignment",
 ["Dr. Lindsay Perry lectures both topics — watch them in your own Canvas module",
  "This is the LAST didactic module of Movement Science. Canvas lists a second “Module 7” that is the final exam, and Module 6 is lab immersion",
  "Everything in Modules 1–5 was analysis. This module is the payoff: you saw the problem, now you pick the treatment",
  "The Motor Learning Assignment (groups of 3) is answered directly out of these pages — its nine questions are reproduced at the end"]));

// ===== 7.1 =====
k.push(banner("TOPIC 7.1","Intervention Selection to Recover Function"));
k.push(spacer());
k.push(h1("1. The Task-Oriented Approach — Three Goals"));
k.push(detail(["Goal","What it means"],[
 ["**1. Reduce underlying impairments**","Address the body-structure-and-function problems that constrain mobility — though many of them improve through task-specific practice itself"],
 ["**2. Modify the task**","Change the task so the patient CAN achieve the critical events, demands, or muscle-activity requirements of the activity"],
 ["**3. Develop adaptability**","Build the ability to adapt the activity to changing task and environmental demands"]],[2700,6660]));
k.push(tnote("Scope check: in this course your intervention targets the ACTIVITY limitation. Plans of care spanning every ICF level come in the clinical management courses — don't over-build the answer on an exam here."));
k.push(h1("2. The Matching Rule"));
k.push(bullet("**“Interventions can only be effective if they are targeting the problem.”** Select a task-specific intervention that MIMICS the activity — that's the neuroplastic principle of **specificity** — and then tune the DELIVERY to whichever movement construct is in deficit."));
k.push(detail(["Construct in deficit","How you tailor the delivery"],[
 ["**Speed**","Give the patient a time frame to complete the task — now you've built in a speed demand"],
 ["**Alignment**","Visual or verbal feedback and extrinsic cueing so the patient can realign themselves"],
 ["**Coordination** (accuracy, sequencing)","Build those constructs into the structure and delivery of the intervention itself"]],[2400,6960]));
k.push(...fig(E+"apply_all.png",1070,600,"The checklist to run on EVERY functional-activity retraining plan — stage, feedback, use it and improve it, specificity, intensity/repetition, salience, transference (Topic 7.2 deck)"));
k.push(bullet("You are observing for construct deficits (symmetry, speed, amplitude, alignment, postural control, smoothness, accuracy, timing, sequence) PLUS deficits of critical events, forces, ROM, and muscle activity — always referenced to typical performance. Those synthesize into **movement system diagnoses** (force production, movement coordination, fractionated movement, postural vertical, sensory selection/weighting, sensory detection, hypokinesia, dysmetria, endurance/effort, soft-tissue flexibility). **You are not asked to assign a diagnosis in this course** — but you need to know what they are and which constructs relate to each."));
k.push(h1("3. Neuroplastic Principles, as Perry Frames Them"));
k.push(detail(["Principle","The clinical version"],[
 ["**Use it or lose it / use it and improve it**","Foundational. Make the patient use what's affected or you build **learned non-use** and a stack of secondary impairments"],
 ["**Intensity + repetition**","The brain learns better when BDNF is present, and higher intensity raises BDNF. Pick practice parameters that support volume — especially early, when performance is what you're building"],
 ["**Specificity**","Choose an intervention that mimics the activity. This is also the natural home of part-vs-whole practice: train the whole task, or the critical event the patient can't do"],
 ["**Salience**","Make it meaningful — the most fun part of the job. (Watch the linked patient-journey video; it's the “why you went to PT school” reminder)"],
 ["**Age + time**","Mostly outside your control: younger is more advantageous than older, earlier intervention beats later"],
 ["**Transference**","Stacking multiple neuroplastic-enhancing methods can yield greater change"],
 ["**Interference**","Order and sequence matter — don't let one thing you're training spoil acquisition of another"]],[2400,6960]));
k.push(h1("4. Open vs Closed Kinetic Chain"));
k.push(compare("CLOSED kinetic chain","OPEN kinetic chain",
 ["Terminal segment meets considerable external resistance so distal movement is restrained — proximal segments move over a stationary distal segment","**Distally fixed · kinetic chain · multiple joint · weight-bearing · TASK SPECIFIC**","Squatting, pushing up off a chair armrest, progressing your body over the stance limb in gait","**Benefits:** better presumed carryover to function; greater proprioceptive and kinesthetic feedback; increased joint approximation enhancing sensory input and stability; control and stability come from muscle contraction","**Limitation:** can mask weakness in muscle groups"],
 ["Terminal segment free to move in an unrestricted manner","**Non-distally fixed · distal segment free · joint isolation · single joint · NON-task specific**","Free weights, hamstring curl, bicep curl","**Benefits:** improves individual muscle performance; greater control with a single moving joint; useful early in single-joint rehab (e.g. acute post-ACL reconstruction)","**Limitations:** requires externally applied stabilization; does NOT simulate functional activity performance"],
 C.teal,C.gold,C.lightTeal,C.lightGold));
k.push(tip("The caveat that shows up on exams: reaching IS technically open chain — but it's multi-joint, multi-segment, and complex. An intervention for reach must still simulate the motor-control and biomechanical complexity of the real task. “Freely moving limb” does not mean “bicep curl will do.”"));
k.push(bullet("The class's target activities — **rolling, coming to sit, sit to stand, walking and stair climbing, reach and grasp** — are complex movement programs, mostly closed chain. Movement is a complex behavior across multiple joints and segments, so evidence, motor-learning principles, and task-specific training all converge: **the exercise must simulate the functional requirements and goals of the task.**"));
k.push(h1("5. Prescribing and Progressing"));
k.push(bullet("Consider together: neuroplastic principles • stage of motor learning • **practice parameters** (part vs whole, blocked vs random, distributed vs massed, physical vs imagery) • **feedback parameters** (intrinsic vs extrinsic, knowledge of results vs performance, constant vs faded vs variable). As the patient moves through the stages, change the challenge through those parameters and through environmental conditions."));
k.push(bullet("The same reasoning extrapolates to **reach and grasp** even though the hand isn't distally fixed: the BODY is in a closed-chain position, so you can still challenge base of support, surface, and balance — and you can change the object's size, shape, and consistency to change the demand. Body-weight-support devices exist for the upper extremity too, not just for gait."));
k.push(linkBox("\u{1F517} Required reading + articles — Topic 7.1",[
 ["McClure et al. The 4-Element Movement System Model to Guide PT Education, Practice, and Movement-Related Research","https://pubmed.ncbi.nlm.nih.gov/33482006/",""],
 ["Quinn, Riley, Tyrell et al. A Framework for Movement Analysis of Tasks (ANPT Movement System Task Force)","https://pubmed.ncbi.nlm.nih.gov/34160044/",""]]));
k.push(body("Required texts: Shumway-Cook & Woollacott, Motor Control 6e; Kisner & Colby, Therapeutic Exercise 8e."));
k.push(...glossary("Topic 7.1 — Quick-Reference Glossary",[
 ["Three goals","Reduce impairments · modify the task · develop adaptability"],
 ["The matching rule","Intervention must target the actual deficit, in the manner of the construct in deficit"],
 ["Specificity","Pick the intervention that mimics the activity"],
 ["Learned non-use","What you cause by not making the patient use the affected side"],
 ["CKC","Distally fixed, multi-joint, weight-bearing, task specific"],
 ["OKC","Distal segment free, single joint, non-task specific"],
 ["CKC masks","Weakness in smaller muscle groups"],
 ["Reach caveat","Open chain but complex — must still simulate task demands"]]));
k.push(pageBreak());

// ===== 7.2 =====
k.push(banner("TOPIC 7.2","Walking Recovery: Interventions",C.teal));
k.push(spacer());
k.push(h1("1. Same Three Goals, Gait Version"));
k.push(bullet("(1) Reduce underlying impairments constraining gait. (2) **Modify the gait pattern to meet the progression and stability requirements of gait.** (3) Develop the ability to adapt gait to changing task and environmental demands. Five neuroplastic principles get top billing for walking recovery: **use it and improve it, specificity, intensity, repetition, salience.**"));
k.push(infoBox("\u{1F3C3} Training parameters, in three words",[
 "**Specificity → WALK.** Specificity of training for walking is walking itself",
 "**Intensity → HARD.** Aim for the vigor that releases BDNF through the cardiovascular system and primes the brain for learning and retention",
 "**Repetition → OFTEN.** Evidence supports that repetition changes the brain — promote as many reps as possible",
 "A treadmill helps achieve all three, but your clinic may not have one — you can still drive reps without a moving belt"],C.teal,C.lightTeal));
k.push(tnote("The question students always ask: if they already knew how to walk, why are they in the COGNITIVE stage? Because relearning under a new constraint — an injured body system, or an external restraint forcing a new pattern — places new demands on an otherwise ingrained program. So high-repetition, high-intensity parameters are the right starting prescription. And gait does NOT have to be flawless to leave the cognitive stage: the transition shows when the patient stops needing immediate feedback and starts experimenting with conditions."));
k.push(h1("2. Critical Events = the Intervention Targets"));
k.push(detail(["Task","Subphase","Critical event to train"],[
 ["**Weight acceptance**","Initial contact","Heel-first contact"],
 ["","Loading response","Controlled ankle PF · controlled knee flexion · hip stability"],
 ["**Single limb support**","Mid stance","Controlled tibial advancement"],
 ["","Terminal stance","Controlled ankle DF with heel rise · trailing-limb posture"],
 ["**Swing limb advancement**","Pre-swing","Rapid ankle PF · passive knee flexion to 40°"],
 ["","Initial swing","Max knee flexion · hip flexion to 15°"],
 ["","Mid swing","DF to neutral · max hip flexion to 25°"],
 ["","Terminal swing","Knee extension to neutral"]],[2100,2100,5160]));
k.push(...fig(E+"dev_ankle.png",1070,600,"Common deviations by segment — ankle (toe drag, lack of heel rise, contralateral vaulting), foot (inv/ev, foot slap, forefoot contact), knee (hyperextension, wobbling) (Topic 7.2 deck)"));
k.push(...fig(E+"dev_hip.png",1070,600,"And above: hip circumduction and excessive stance hip flexion, Trendelenburg at midstance, posterior lurch / lateral lean / forward trunk lean — with the part-task handling that trains them (Topic 7.2 deck)"));
k.push(h1("3. Building Part-Task Practice for Gait"));
k.push(bullet("**Worked example 1 — no heel strike at initial contact.** Target the initial-contact subphase directly: facilitate heel strike, address the construct deficits present, and set feedback and practice parameters to the stage of learning."));
k.push(bullet("**Worked example 2 — circumduction, hip hiking, lateral trunk lean.** All three are swing-phase clearance compensations. The cause may sit in the PRECEDING subphase: weak plantarflexion from terminal stance into pre-swing, weak hip flexion affecting pull-off at initial swing, or knee hypermobility limiting knee flexion into swing. So train terminal stance → pre-swing → initial swing as a transition, and the circumducted pattern reduces on its own."));
k.push(tip("Perry's caution, worth taking to clinic: PTs get caught in a perfectionist mentality with gait, trying to eliminate every deviation and make the pattern normal again. For many diagnoses — especially upper-motor-neuron injury — that isn't realistic. Recognize the deviation, understand the impairment, and modify what you can toward progression, stability, and adaptability."));
k.push(h1("4. Salience and Outcome-Measure-Driven Design"));
k.push(bullet("**Salience:** an inpatient rehab gym in Charleston, SC had four terrains — sidewalk, grass, gravel, and cobblestone — because historic downtown Charleston is cobblestone and it's brutal even for able bodies. Northern natives take to ice better than a Floridian does. Getting to know your patient's actual environment is a professional responsibility, not a nicety."));
k.push(bullet("**Let the outcome measure generate the intervention.** Whole-task practice for speed and endurance outcomes. For adaptability measures (**FGA, DGI, HiMAT**), the intervention must simulate the ITEMS. Example: the FGA has a walk-backwards item → the intervention is practicing walking backwards. If the patient manages only 2–3 backward steps, modify to get volume — mirror for intrinsic feedback, tactile assistance through the hands, visual cues on the floor — then fade the cues as they improve. There is no fixed prescription; you build the intervention from the task that needs accomplishing and set parameters from what you observe and the stage of learning."));
k.push(body("Required reading: Motor Control Ch 16 — Table 16.6 lists gait and gait-adaptability dimensions (distance, speed, terrain, attentional demands) with goals and activity ideas. Build from that list."));
k.push(linkBox("\u{1F517} Required links — Topic 7.2",[
 ["PhysioU gait case: “63-year-old with lower extremity paresthesias”","https://app.clinicalpattern.com/physiou/gait/2410/p6948/",""],
 ["van der Krogt, Delp & Schwartz. How robust is human gait to muscle weakness?","https://pubmed.ncbi.nlm.nih.gov/22386624/",""]]));
k.push(...glossary("Topic 7.2 — Quick-Reference Glossary",[
 ["Walk · Hard · Often","Specificity · intensity · repetition, in three words"],
 ["Why cognitive stage","New constraint = new demands on an ingrained program"],
 ["Preceding-subphase rule","Swing clearance problems are often terminal-stance problems"],
 ["Perfectionism trap","Don't chase normal gait in UMN injury — chase progression, stability, adaptability"],
 ["Item simulation","Train the actual items of the FGA / DGI / HiMAT"],
 ["Salience","Match the terrain and conditions to the patient's real life"]]));
k.push(pageBreak());

// ===== Sync =====
k.push(banner("SYNC SESSION 7","Motor Learning Applied — the Reference Tables",C.navy));
k.push(spacer());
k.push(h1("1. What Motor Learning Is"));
k.push(bullet("**“A set of internal processes associated with practice or experience leading to relatively permanent changes in the capability for skilled behavior.”** Second definition: the interaction of perception/cognition and action processes, where the task solution is new strategies for perceiving and acting."));
k.push(compare("LEARNING","PERFORMANCE",
 ["Relatively permanent change over time","What you're actually after"],
 ["**Temporary** change in motor behavior seen within a practice session","Looks like success, may not last"],C.green,C.gold,C.lightGreen,C.lightGold));
k.push(bullet("**Four concepts:** learning is a process • learning results from experience or practice • learning **cannot be measured directly** — it is inferred from behavior • learning produces relatively permanent changes that **transfer across environments**."));
k.push(...fig(E+"stages.png",1600,900,"The three stages and the question each one is asking (Sync 7)"));
k.push(h1("2. Clues for the Stage — What the Patient Actually Says"));
k.push(detail(["Stage","What you hear"],[
 ["**Cognitive** — “What to do?”","“I am not sure **what** to do to be successful.” · “Can you show me **what** to do?” · “Tell me if I am doing it right **while** I am doing it, please.” · “Is this right? I am not sure I am doing this correctly.” · “I am **concentrating a lot** while I am doing the movement, this is hard.” · “I definitely **can't be distracted** while I try to do this, or it falls apart.” (increased need for attention and concentration)"],
 ["**Associative** — “How to do?”","“Can you tell me **how** this should feel when performing it?” · “Ok, ok, I think I got it. Just tell me if I am doing **something wrong**.” · “I am getting the feel for it, but still trying to figure out **how** to do this the best way.”"],
 ["**Autonomous** — “How to succeed?”","“Can you tell me **how** I did after I do it and how I can make it better?” · “I am **concentrating less**, it is feeling more natural, but still having some problems.”"]],[2200,7160]));
k.push(h1("3. Feedback Parameters"));
k.push(detail(["Parameter","Option","Definition / effect"],[
 ["**Mode**","Intrinsic","Inherent to the sensory system"],
 ["","Extrinsic (augmented)","Uses visual, auditory, and tactile cues. **Knowledge of RESULTS** = outcome, improves the next trial. **Knowledge of PERFORMANCE** = quality, improves accuracy"],
 ["**Intensity**","Constant","FB in high volume and frequency — **improves performance, reduces retention**"],
 ["","Variable","FB in smaller volume, less frequently — **improves retention**"],
 ["**Schedule**","Constant","FB after each trial"],
 ["","Variable — Summed","FB after a set number of trials decided by the clinician"],
 ["","Variable — Faded","FB after every trial at first, then fades to less frequently"],
 ["","Variable — Bandwidth","FB only when an error has occurred — performance outside a predetermined range"],
 ["","Variable — Delayed","FB after a brief delay following the performance — gives the learner time to reflect"]],[1500,2100,5760]));
k.push(h1("4. Practice Parameters"));
k.push(body("“Practice is the most important factor in retraining motor skills.”"));
k.push(detail(["Parameter","Option","Definition (and where it belongs)"],[
 ["**Distribution**","Massed","Practice time is **greater than** rest time"],
 ["","Distributed","Practice time **equals** rest time"],
 ["**Variation**","Constant","No surprises, long duration of the same task — **cognitive stage**"],
 ["","Variable","Changing demands of the task, involves changing the task — **associative and autonomous**"],
 ["**Order**","Blocked","**Cognitive stage** — enhances performance"],
 ["","Serial","**Associative stage** — improves retention"],
 ["","Random","**Associative → autonomous** — enhances transfer of learning"]],[1500,2100,5760]));
k.push(infoBox("\u{1F9E9} Part task → whole task practice",[
 "Break complex tasks down into smaller components",
 "There must be **obvious breaks** in the task being performed",
 "It must be practiced as **whole-task practice eventually** — part-task is a stage, not a destination"],C.navy,C.lightBlue));
k.push(h1("5. Stages × Training Strategies (O'Sullivan Table 2.2)"));
k.push(detail(["","Cognitive","Associative","Autonomous"],[
 ["**Characteristics**","Develops understanding of the task; assesses abilities and task demands; performs initial approximation. High cognitive monitoring; high dependence on VISUAL feedback","Practices and refines the motor program; errors and extraneous movements decrease. Decreasing dependence on visual feedback, increasing PROPRIOCEPTIVE feedback; cognitive monitoring decreases","Continues refining. Movements largely **error-free**; minimal cognitive monitoring"],
 ["**Feedback**","Emphasize intact sensory systems and intrinsic mechanisms; visual FB to establish the initial motor program. Pair extrinsic carefully. **KP** on consistent errors, **KR** on successful outcome. Constant FB improves early performance; variable FB improves retention but may decrease performance initially","Emphasize proprioceptive FB to build an internal **reference of correctness**. Avoid excessive augmented FB. Continue KP — intervene when errors become consistent; continue KR stressing functional outcome. Use **variable feedback** (summed, fading, bandwidth) for retention","Learner self-evaluates appropriately. Provide **occasional** feedback (KP or KR) when errors are evident"],
 ["**Practice**","**Distributed** practice if the task is complex, long, or the learner fatigues. **Blocked** practice of the same task improves performance. **Variable** practice of related skills increases retention but may decrease performance initially. **Parts-to-whole** for complex tasks — teach both parts and integrated whole. **Mental practice** improves performance and learning and reduces anxiety","Encourage consistency of practice. Focus on **variable** practice order (serial or random) of related skills to improve retention","Stress consistency of performance in variable environments with variations of tasks. High levels of practice (**massed practice**) are appropriate"],
 ["**Environment**","Reduce extraneous stimuli and distractors. Emphasize **closed environments**, gradually progressing to open","Progress toward changing, **open environment**. Prepare the learner for home, community, work, and real-world environments","**Vary** the environments to challenge the learner. Practice in real-world environments when possible"],
 ["**Training strategies**","Highlight the purpose of the task in functionally relevant terms. Demonstrate ideal performance to establish a reference of correctness. Manual guidance to assist initially. Ask the learner to evaluate performance and outcomes. Assess and modify arousal levels","**Manual guidance can be counterproductive** at this stage. Assist the learner in improved self-evaluation and decision-making","Assess need for conscious attention and automaticity of movements. Focus on competitive aspects of skills as appropriate (e.g. adaptive sports)"]],[1400,2700,2700,2560]));
k.push(h1("6. Applying Neuroplastic Principles"));
k.push(detail(["Principle","Description"],[
 ["**Use it or lose it**","Failure to drive specific brain function can lead to functional degradation"],
 ["**Use it and improve it**","Training that drives a specific brain function can lead to an enhancement of that function"],
 ["**Specificity**","The nature of the training experience dictates the nature of the plasticity"],
 ["**Repetition matters**","Induction of plasticity requires sufficient repetition"],
 ["**Intensity matters**","Induction of plasticity requires sufficient training intensity"],
 ["**Time matters**","Different forms of plasticity occur at different times during training"],
 ["**Salience matters**","The training experience must be sufficiently salient to induce plasticity"],
 ["**Age matters**","Training-induced plasticity occurs more readily in younger brains"],
 ["**Transference**","Plasticity in response to one training experience can enhance the acquisition of similar behaviors"],
 ["**Interference**","Plasticity in response to one experience can interfere with the acquisition of other behaviors"]],[2300,7060]));
k.push(h1("7. The Sync Case"));
k.push(infoBox("\u{1F9D1}‍⚕️ Let's practice",[
 "A **63-year-old man in inpatient rehabilitation** is learning to transfer from his bed to a wheelchair, **1 week after a stroke causing severe left hemiparesis**",
 "Medically stable and eager to learn how to transfer himself out of bed",
 "He has been transferred out of bed before, but **has not been an active participant** in the transfer until today",
 "Task: use motor learning principles to structure an intervention session teaching bed-to-wheelchair transfer"],C.navy,C.lightBlue));
k.push(h1("8. The Motor Learning Assignment — the Nine Questions"));
k.push(body("Groups of three, case-based. Every answer comes out of the tables above — this is the worksheet, reproduced so you can drill it before your group meets."));
k.push(detail(["#","Question"],[
 ["1","Identify at least one relevant **activity limitation** and one relevant potential **participation restriction**, with strong rationale"],
 ["2","Hypothesize one **body structure and function impairment** likely contributing to the movement problem, with strong rationale"],
 ["3","Select the **outcome measure** that BEST assesses the activity limitation, with strong rationale"],
 ["4","Identify the patient's **stage of motor learning** in context, and explain why"],
 ["5","Given that stage and context, what **type and schedule of feedback** would you use? Describe **mode, intensity, and schedule**"],
 ["6","Given that stage and context, what **practice schedule** in the first session? Describe **distribution, variation, and order**"],
 ["7","How would you use **part-task training** to teach this mobility skill? Give a part-task AND a whole-task example"],
 ["8","Give an example of promoting **patient decision-making** so the patient is an active participant"],
 ["9","Identify the **3 most relevant neuroplastic principles** for the case, explain why, and describe how you'd apply them in the session"]],[600,8760]));
k.push(tip("Reading questions 5 and 6 together is the whole course in miniature: name the stage, then let the stage dictate feedback mode/intensity/schedule and practice distribution/variation/order. If you can do that out loud for any case, you can pass the final."));
k.push(...glossary("Sync 7 — Quick-Reference Glossary",[
 ["Motor learning","Internal processes → relatively permanent change in capability for skilled behavior"],
 ["Learning vs performance","Permanent across sessions vs temporary within one"],
 ["Inferred, not measured","You never see learning directly — only behavior"],
 ["KR vs KP","Outcome (improves next trial) vs quality (improves accuracy)"],
 ["Constant vs variable FB","Performance now vs retention later"],
 ["Summed · faded · bandwidth · delayed","The four variable FB schedules"],
 ["Massed vs distributed","Practice > rest vs practice = rest"],
 ["Blocked · serial · random","Performance · retention · transfer"],
 ["Manual guidance","Helpful in cognitive, COUNTERPRODUCTIVE in associative"]]));

build(k,"/home/claude/out/Module7_MotorLearningInterventions_StudyNotes.docx");
