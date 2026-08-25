const L = require('/home/claude/notes_lib.js');
const {C,h1,h2,body,bullet,tnote,tip,compare,detail,infoBox,banner,glossary,fig,pageBreak,spacer,cover,build,linkBox} = L;
const E="/home/claude/emb28/";
const k=[];

k.push(...cover("Therapeutic Interventions I (DPTH 6231)","Module 4: Therapeutic Exercise Foundations",
 "Topics 4.1–4.5 + Sync Session 4 — dosing the intervention you already chose",
 ["Dr. Jake Awruch (4.1, 4.5), Dr. Lindsay Perry (4.2 aquatics), Dr. Erika Nelson-Wong (4.3 applications, 4.4 aging), Dr. Eric Brown (sync)",
  "The framing that matters: **FITT-VP does not create the exercise programme.** Module 3 already told you what the patient needs — this module tells you how much",
  "Seven lectures across five topics. Note the handout slide numbers (2.5, 6.3, 6.5, 6.7) are legacy — **Canvas order is what's followed here**"]));

/* ─────────────────────────── TOPIC 4.1 ─────────────────────────── */
k.push(banner("TOPIC 4.1","Therapeutic Exercise Prescription Principles — FITT-VP, What Matters Most"));
k.push(spacer());
k.push(body("FITT-VP: **F**requency, **I**ntensity, **T**ime, **T**ype, **V**olume, **P**rogression. Dr. Awruch's version answers a narrower question for each category — which single variable actually drives the result."));
k.push(...fig(E+"bigpic.png",925,758,"The one-line summary of the entire topic (Topic 4.1 handout)"));

k.push(h1("1. Aerobic / Cardio"));
k.push(detail(["Variable","Recommendation"],[
 ["**Frequency**","3–5 days/week"],
 ["**Intensity**","Moderate–hard. **Talk test** — can talk, not sing. **RPE ~12–16**"],
 ["**Time**","Sessions add up to a weekly total"],
 ["**Type**","Any rhythmic aerobic activity — **mode matters less than dose**. Road biking vs running, either way it's aerobic"],
 ["**Volume — MOST IMPORTANT**","**≥150 min/week moderate OR ≥75 min/week vigorous**"],
 ["**Progression**","Increase **time first**, then intensity"]],[2500,6860]));
k.push(tip("Takeaway: if weekly minutes are too low, intensity doesn't matter. Volume is the variable you increase first."));

k.push(h1("2. Strength / Resistance"));
k.push(detail(["Variable","Recommendation"],[
 ["**Frequency**","2–3×/week **per muscle group**"],
 ["**Intensity**","Load heavy enough that the final reps are hard, but not so heavy you get injured — **~6–12 reps close to fatigue**"],
 ["**Time**","Defined by **reps, sets and rest**, not minutes"],
 ["**Type**","Any resistance exercise — exercise choice is secondary"],
 ["**Volume — PRIMARY DRIVER**","**~10–20 hard sets per muscle per week**"],
 ["**Progression**","Increase load, reps, or sets over time — **not too quickly**, or you cause injury or wreck adherence"]],[2500,6860]));
k.push(tip("Takeaway: if it's not hard near fatigue, it's not strength training."));

k.push(h1("3. Mobility / Flexibility"));
k.push(detail(["Variable","Recommendation"],[
 ["**Frequency**","≥2–3 days/week (daily is fine)"],
 ["**Intensity**","Mild–moderate discomfort, **no pain**. You're not trying to rip muscle, you're trying to increase tissue length"],
 ["**Time**","**30–60 sec per stretch, 2–4 reps**"],
 ["**Type**","Static, dynamic, PNF — type matters less"],
 ["**Volume — KEY VARIABLE**","**Total time spent at end range**"],
 ["**Progression**","More end-range time, more range, or more load"]],[2500,6860]));
k.push(tip("Takeaway: range changes because you spend time there. If you never go to a certain range naturally, it's going to be hard to get there."));
k.push(tnote("The example that stuck with him from school: people who sit a lot at work with their knees bent most of the day may develop tighter hamstrings, because they're not extending their knees very often during the day."));

k.push(h1("4. Balance / Neuromotor"));
k.push(detail(["Variable","Recommendation"],[
 ["**Frequency**","2–3 days/week"],
 ["**Intensity**","**Challenging enough to cause errors.** If it isn't, it isn't testing the ability to stay upright"],
 ["**Time**","~20–30 min/session"],
 ["**Type**","Static · dynamic · **reactive** (a small push they have to recover from) · dual-task · functional"],
 ["**Volume**","Amount of challenging balance exposure"],
 ["**Progression**","Narrow base → unstable → dual task → faster → unpredictable"]],[2500,6860]));
k.push(tip("Takeaway: no errors = no balance training. If the patient never has an error, it might not be challenging enough."));

k.push(h1("5. Power / Speed"));
k.push(detail(["Variable","Recommendation"],[
 ["**Main driver**","**Intent to move fast**"],
 ["**Frequency**","1–3 days/week"],
 ["**Reps**","**1–5** — fewer, because power costs much more stress per minute"],
 ["**Sets**","3–6"],
 ["**Rest**","**Plenty**"],
 ["**Progression**","Faster intent → more load → more complexity"]],[2500,6860]));
k.push(tip("Takeaway: power is speed, not grinding. Fatigue kills power — you don't want to practise power when already fatigued, and it isn't necessarily the safest."));
k.push(tnote("The car analogy: accelerating as fast as a car can go is more stressful on the car than driving at a moderate speed on a normal street. That's why high-speed work needs more rest."));

k.push(infoBox("Where FITT-VP actually sits in your decision making",[
 "You **already** have the model that decides whether someone needs mobility or strength — that was Module 3",
 "FITT principles **don't create the exercise programme**. They influence sets, reps and intensity based on patient response",
 "Think of FITT-VP as a **progression-regression model**, not the way you craft the programme itself",
 "“How many sets and reps should I do?” — this is a really nice guide for that question, and that question only"],C.gold,C.lightGold));
k.push(tnote("The snowboard metaphor he apologises for and then lands anyway: learning a backflip meant finding deep snow — a low-stakes environment with a lot of repetitions, where you could fail without getting hurt, use the feedback, and dial it in. That's the balance section of this lecture. It's not balance training if you never fail. And it's what you're doing with patients: something a little harder than what they can already do, but still reachable."));

k.push(...glossary("Quick-Reference Glossary — Topic 4.1",[
 ["FITT-VP","Frequency, Intensity, Time, Type, Volume, Progression"],
 ["Talk test","Intensity gauge — moderate means you can talk but not sing"],
 ["RPE","Rating of perceived exertion; ~12–16 on the 6–20 Borg scale for moderate–hard aerobic work"],
 ["Hard set","A set taken close enough to fatigue to drive strength adaptation"],
 ["End-range time","Total accumulated time spent at the end of available range — the driver of flexibility change"],
 ["Reactive balance","Recovery from an unexpected external perturbation"],
 ["Dual task","Balance challenged while performing a simultaneous cognitive or motor task"]]));
k.push(pageBreak());

/* ─────────────────────────── TOPIC 4.2 ─────────────────────────── */
k.push(banner("TOPIC 4.2","Aquatic Based Exercise"));
k.push(spacer());
k.push(body("Aquatic therapy is the use of water for rehabilitation — exercises performed in water of various depths within immersion pools or tanks, used to deliver established therapeutic interventions: stretching, strengthening, joint mobilization, endurance training, balance and gait."));
k.push(bullet("**Named techniques:** Bad Ragaz Ring Method · Halliwick Method · WATSU · Aquastretch · Ai Chi · task-oriented approach."));

k.push(h1("1. Why Water Works — the Properties"));
k.push(...fig(E+"water.png",1873,1016,"The four properties that make water therapeutic (Topic 4.2 handout)"));
k.push(detail(["Property","What it does"],[
 ["**Buoyancy**","The upward force working opposite to gravity"],
 ["**Hydrostatic pressure**","Pressure exerted by the water on immersed objects"],
 ["**Viscosity**","Resistive drag opposite the direction of movement — **resistance is proportional to speed**"],
 ["**Surface tension**","The surface acts as a membrane under tension — **resistance is increased at the surface**"],
 ["**Hydromechanics**","Movement through water creating flow — turbulence, laminar flow, drag"],
 ["**Thermodynamics**","Water is an efficient conductor and **transfers heat 25× faster than air**"],
 ["**Density**","The body's density is slightly less than water's. More muscle, more density; more body fat, less"],
 ["**Centre of buoyancy**","Where buoyant vertical forces predictably act — the vertical standing position at the level of the **sternum**"]],[2400,6960]));
k.push(tip("Viscosity being proportional to speed is the single most useful property for dosing: the patient controls their own resistance by how fast they move. Move faster, work harder — no equipment change needed."));

k.push(h1("2. Goals and Indications"));
k.push(bullet("Range of motion · strengthening · weight bearing for functional activities · manual therapy techniques · cardiovascular aerobic endurance · balance and gait retraining · reducing or relieving pain."));

k.push(h1("3. Precautions and Contraindications"));
k.push(compare("PRECAUTIONS","CONTRAINDICATIONS — STOP",
 ["Fear of water","Cardiac dysfunction · **unstable angina** · cardiac failure","Neurological disorders · seizure disorders","Respiratory disorders · severe respiratory dysfunction","Peripheral vascular disease · kidney disease","Small open wounds and lines · G-tubes and suprapubic appliances · colostomy","Bladder and bowel disorders","Menstruation or vaginal bleeding","Some dermatological or skin infections"],
 ["**Contagious diseases**","**Danger of bleeding or hemorrhage**","**Water or airborne infections or diseases**"],
 C.gold,C.red,C.lightGold,C.lightRed));

k.push(h1("4. Water Temperature — the Numbers to Know"));
k.push(body("Immersion affects the body's ability to dissipate heat, which is why temperature is a safety parameter and not a comfort preference."));
k.push(compare("HOT — ≥37 °C / 98.6 °F","COLD — <25 °C / 77 °F",
 ["**Increases** cardiovascular demands","**Increases** cardiac output at rest and during exercise","**Reduces** peripheral blood flow resistance"],
 ["**Reduces** heart rate and cardiac output","Peripheral resistance, O₂ consumption and metabolism **increase**","**Cannot maintain safe core warmth**"],
 C.red,C.blue,C.lightRed,C.lightBlue));
k.push(detail(["Purpose","Temperature"],[
 ["**Flexibility, strength, gait training, relaxation**","**26–35 °C (78.8–95 °F)**"],
 ["**Painful MSK injuries, muscle spasms**","**33 °C (91.4 °F)**"],
 ["**Cardiovascular training**","**26–28 °C (78.8–82.4 °F)** to maximise efficiency"],
 ["**Intense aerobic training >80% HRmax**","**22–26 °C (71.6–78.8 °F)** to reduce risk of heat illness"]],[4200,5160]));
k.push(tip("Tolerance protocol: begin with a 10-minute immersion and work toward 20 minutes total, monitoring vital signs."));

k.push(h1("5. Practice Realities"));
k.push(detail(["Question","Answer"],[
 ["**Billing and coding**","**CPT 97113**"],
 ["**Who can provide it**","A licensed PT or PTA, at facilities that bill for the service"],
 ["**In the pool or out?**","It depends"],
 ["**Do I have to be certified?**","Currently no — but take the education needed to feel competent and safe providing it"]],[2800,6560]));
k.push(linkBox("🔗 Evidence-based aquatic resources named in the lecture",[
 ["Aquatic Exercise Association / ATRI","https://aeawave.org/atri",""],
 ["EWAC Medical — aquatic therapy knowledge","https://www.ewacmedical.com/knowledge/category/aquatic-therapy-knowledge/",""],
 ["International Organization of Aquatic Physiotherapists","https://world.physio/subgroups/aquatic",""],
 ["Aquatherapy — Physiopedia","https://www.physio-pedia.com/Aquatherapy",""],
 ["Academy of Aquatic Physical Therapy",null,"— named in the deck"]],C.teal));

k.push(...glossary("Quick-Reference Glossary — Topic 4.2",[
 ["Buoyancy","Upward force opposing gravity on an immersed body"],
 ["Hydrostatic pressure","Pressure water exerts on an immersed object, increasing with depth"],
 ["Viscosity","Fluid resistance to movement; drag proportional to speed"],
 ["Surface tension","Increased resistance encountered at the water's surface"],
 ["Centre of buoyancy","The point where buoyant force acts — roughly at the sternum in standing"],
 ["Bad Ragaz Ring Method","Supine, therapist-resisted PNF-style aquatic technique using flotation rings"],
 ["Halliwick Method","Aquatic approach teaching balance control and independence in water"],
 ["WATSU","Passive aquatic bodywork combining stretch and movement in warm water"],
 ["Ai Chi","Slow, flowing aquatic exercise based on tai chi principles"],
 ["CPT 97113","The billing code for aquatic therapy with therapeutic exercise"]]));
k.push(pageBreak());

/* ─────────────────────────── TOPIC 4.3 ─────────────────────────── */
k.push(banner("TOPIC 4.3","Applying FITT-VP to Physical Therapy"));
k.push(spacer());
k.push(body("Three application lectures — cardiorespiratory, resistance, and balance. All three open with the same public health baseline: **at least 150 minutes of moderate OR 75 minutes of vigorous aerobic exercise per week, AND strength training twice per week.**"));

k.push(h2("A. Cardiorespiratory"));
k.push(tnote("The question the deck asks about those guidelines: is this enough to improve cardiorespiratory fitness? To improve fitness you need a dose-response stimulus — usually increasing intensity and/or duration — and you individualise to the patient's starting point."));
k.push(h1("1. Measuring Intensity — the Heart Rate Maths"));
k.push(...fig(E+"thr.png",1656,902,"Target heart rate, worked through for a 54-year-old (Topic 4.3 cardiorespiratory handout)"));
k.push(detail(["Formula","Note"],[
 ["**Theoretical HRmax = 220 − age**","**Underestimates**"],
 ["**Tanaka: HRmax = 208 − (0.7 × age)**","**Preferred**"],
 ["**Heart Rate Reserve: HRR = HRmax − HRrest**","Measure HR immediately on waking for several days to get HRrest"],
 ["**THR = HRR × %intensity + HRrest**","**Preferred**"],
 ["**THR = HRmax × %intensity**","Less accurate — doesn't account for resting heart rate"]],[3600,5760]));
k.push(infoBox("The worked example — 54 years old, HRrest 50",[
 "HRmax = 208 − (0.7 × 54) = **170.2** (Tanaka) vs 220 − 54 = 166 (the underestimate)",
 "HRR = 170.2 − 50 = **120.2**",
 "For 65–80% intensity: 120.2 × 0.65 + 50 = **128 bpm** (lower), 120.2 × 0.80 + 50 = **146 bpm** (upper)",
 "**Target range 128–146 bpm.** The %HRmax method gives 111–136 for the same person — a lower range, because it ignores resting heart rate"],C.blue,C.lightBlue));
k.push(detail(["Variable","Recommendation"],[
 ["**Intensity — moderate**","**40–59% HRR**"],
 ["**Intensity — vigorous**","**60–89% HRR**"],
 ["**Interval training**","Work/rest cycles allow higher intensity for shorter periods, increasing total time spent at higher intensities"],
 ["**Time**","30–60 min moderate/day, 20–60 min vigorous/day, or a mix. **Each minute of vigorous = 2 minutes of moderate.** Several bouts under 10 minutes are fine"],
 ["**Type**","Individualise — goals, equipment access, interests, health conditions. Add **weight-bearing** for bone health, **cross-training** for balance"],
 ["**Volume**","**Double the recommendations for benefit: >300 min/week moderate or >150 min/week vigorous.** Higher energy expenditure is associated with lower cardiovascular disease and mortality"],
 ["**Progression**","Increase **one variable at a time**. For previously inactive people, 5–10 min/session every 1–2 weeks for the first month. Monitor for adverse effects"]],[2500,6860]));
k.push(tip("Take-home from this deck, stated bluntly: the physical activity guidelines might be insufficient. All activity is good activity, including short bouts. Calculate target heart rate using HRR."));

k.push(h2("B. Resistance"));
k.push(tnote("The most quotable slide in the module: To improve muscular fitness — strength, hypertrophy, power, local muscular endurance — we need to lift heavy things. We MUST load our patients. LOAD THEM."));
k.push(detail(["Term","Definition"],[
 ["**Repetition (rep)**","A single lift or repetition of an exercise"],
 ["**Set**","A group of reps performed for a single exercise without stopping"],
 ["**Repetition maximum (RM)**","The load that can be lifted a set number of times — 1RM is the load where only one lift can be completed; 10RM the load where ten reps but no more can be performed"]],[2400,6960]));
k.push(...fig(E+"resgoals.png",1656,923,"Prescription parameters by muscular fitness goal (Topic 4.3 resistance handout)"));
k.push(detail(["Goal","Intensity","Reps / set","Sets","Rest between sets"],[
 ["**Strength**","**> 85% 1RM**","**< 6**","2–6","**2–5 min**"],
 ["**Power — single lift**","80–90% 1RM","1–2","3–5","2–5 min"],
 ["**Power — multiple lifts**","30–80% 1RM","3–5","3–5","2–5 min"],
 ["**Hypertrophy**","67–85% 1RM","6–12","3–6","30–90 sec"],
 ["**Endurance**","**< 67% 1RM**","**> 12**","2–3","**< 30 sec**"]],[2200,2000,1600,1200,2360]));
k.push(detail(["Variable","Recommendation"],[
 ["**Frequency**","**> 2×/week.** Sedentary individuals can benefit from 1×/week at first due to neural adaptation, but **you need more than 2 sessions per week for true gains**. Highly trained individuals may need more"],
 ["**Prescribing intensity**","% of a tested RM · RPE · or **'feel'** — have them pick a weight they can lift for the requested reps with only **1–2 reps left in the tank**"],
 ["**Type**","Machines, free weights, suspension devices, strongman activities, body weight. Enjoyable and accessible · sufficient load · opposing muscle groups · large multi-joint exercises · every major muscle group weekly"],
 ["**Volume**","Limited time or untrained: **< 4 sets/week per muscle group**. Trained: dose-response, **5–10+ sets/week per muscle group** — insufficient evidence beyond that, and a law of diminishing returns"],
 ["**Progression**","One variable at a time — frequency OR intensity OR reps OR sets. **1 day/week may be enough for maintenance**"]],[2200,7160]));
k.push(tip("Take-home: load your patients. Load them. And do not guess — take the time to individualise the parameters based on current levels."));

k.push(h2("C. Balance"));
k.push(infoBox("The gap this lecture exists to fill",[
 "Falls are a **huge** problem — mortality, morbidity, health care costs, quality of life",
 "**Yet there are no recommendations for balance in the Physical Activity Guidelines**",
 "PTs know the importance. So the FITT-VP structure has to be adapted rather than looked up"],C.red,C.lightRed));
k.push(bullet("**What balance training is:** induce instability to practise recovery. You make people uncomfortable and push their limits **safely**, challenging the different systems — visual, vestibular, somatosensory — to promote positive adaptations, and training positive compensations where needed."));
k.push(detail(["Variable","How it works for balance"],[
 ["**Frequency**","Ambiguous by nature — number of sessions per week, or **number of losses of balance per day**?"],
 ["**Intensity & Time**","Inter-related with frequency. Multiple repeated stimuli to destabilise"],
 ["**Dose-response**","**Overdose → fear. Underdose → no benefit**"],
 ["**Type**","Anticipatory · reactive · exercise-based · functional · tai chi — and **not just for people with balance impairments**"],
 ["**Progression**","Increase challenge without overwhelming or inducing fear — **fear of falling increases fall risk**"]],[2200,7160]));
k.push(detail(["Evidence","Finding"],[
 ["Gerards et al., *Geriatr Gerontol Int* 2017;17:2294–2303","**1 session, 40 slips on a treadmill → no effect on falls.** 1 session, multiple **ground-based** slips → reduced falls"],
 ["Sherrington et al., *Br J Sports Med* 2017;51:1749–1757","**>3 hours/week reduced falls long-term**"]],[3200,6160]));
k.push(tnote("That is a lot of balance training. Which is exactly why the deck's other instruction is to go back to Movement Science — balance systems, and the motor learning principles of massed vs distributed practice, feedback schedules, type of feedback and stage of learning — and apply those inside your FITT-VP parameters."));

k.push(...glossary("Quick-Reference Glossary — Topic 4.3",[
 ["Tanaka equation","HRmax = 208 − (0.7 × age); preferred over 220 − age"],
 ["Heart rate reserve (HRR)","HRmax − HRrest"],
 ["Target heart rate (THR)","HRR × %intensity + HRrest"],
 ["Moderate / vigorous intensity","40–59% HRR / 60–89% HRR"],
 ["Interval training","Alternating work and rest to accumulate more time at higher intensity"],
 ["Repetition maximum (RM)","The load liftable for exactly a given number of reps"],
 ["Reps in reserve ('in the tank')","How many more reps could have been completed — a practical intensity gauge"],
 ["Dose-response","More stimulus produces more adaptation, up to a point"],
 ["Overload principle","The system must be challenged beyond habitual demand to adapt"]]));
k.push(pageBreak());

/* ─────────────────────────── TOPIC 4.4 ─────────────────────────── */
k.push(banner("TOPIC 4.4","Resistance Exercise and Aging"));
k.push(spacer());
k.push(body("Objectives: describe the changes that occur with aging in skeletal muscle, and begin applying that to modify, focus and optimise strengthening programmes for the older adult."));

k.push(h1("1. Sarcopenia — Review from Physiology"));
k.push(compare("PATHOGENESIS","ETIOLOGY",
 ["Decreased myofiber regeneration","**Selective loss of Type II fibers**","Decreased fiber size","Impaired excitation-contraction"],
 ["Metabolism","Endocrine","Nutrition","Physical activity","Inflammatory markers"],
 C.red,C.purple,C.lightRed,C.lightPurple));

k.push(h1("2. What Aging Does to Skeletal Muscle"));
k.push(bullet("**Increased intermuscular adipose tissue.**"));
k.push(bullet("**Lower neuromuscular activation** — loss of motor neurons, lower maximal firing rates, poor coordination."));
k.push(bullet("**Properties of single fibers are preserved**, despite reductions in whole-muscle cross-sectional area."));
k.push(bullet("**Selective atrophy of Type II fibers** — smaller and fewer in number. *(Reid et al., Eur J Appl Physiol, 2012)*"));
k.push(...fig(E+"aging.png",1658,864,"The number worth memorising (Topic 4.4 handout)"));
k.push(infoBox("The headline numbers",[
 "**You lose about 1% of muscle mass per year after age 40** — not too bad, right?",
 "**Muscle strength decreases three times as fast.** Loss of muscle *quality*, linked to mitochondrial loss",
 "**Exercise can slow this — but not reverse it** *(Peterson et al., J Aging Research, 2012)*"],C.gold,C.lightGold));
k.push(detail(["Study","Finding"],[
 ["Englund et al., *J Gerontol A Biol Sci Med Sci*, 2018","**12 weeks of progressive resistance training improves torque capacity and strength** in mobility-limited older adults"],
 ["Moore et al., *J Cachexia Sarcopenia Muscle*, 2018;9(4):747–754","**Low-load resistance exercise over just 6 sessions** was associated with increased muscle fiber CSA and capillarization in older adults"],
 ["Roberts et al., *Exp Gerontol*, 2018;106:116–124","**Sex differences:** females show myofiber **atrophy**, males show myofiber **loss**"]],[3400,5960]));

k.push(h1("3. NSCA Position Statement"));
k.push(detail(["Part","Content"],[
 ["**1 — Programme variables**","Resistance exercise is **safe for older adults when properly designed**. Individualise and work towards: **Frequency** 2–3×/week · **Intensity** 70–85% 1RM for strength, 40–60% 1RM for power · **Time** 2–3 sets of 1–2 multi-joint exercises for each major muscle group · **Type** progressive resistance strengthening plus higher-velocity power exercises"],
 ["**2 — Physiological adaptations**","Age-related changes **can be counteracted**. A well-designed programme enhances muscle strength, power and function. Adaptations are neuromuscular, neuroendocrine and hormonal"],
 ["**3 — Functional benefits**","Improves mobility, function and performance; helps **preserve functional independence**; improves resistance to injury and helps prevent catastrophic events such as **falls**; improves psychosocial well-being"],
 ["**4 — Frailty, sarcopenia, chronic conditions**","Programmes can be adapted and **must be individualised**. Equipment can be adapted to the living environment — assisted living, skilled nursing facilities"]],[2200,7160]));
k.push(body("*(All four parts: Fragala et al., J Strength Cond Res. 2019 Aug;33(8):2019–2052.)*"));
k.push(tip("The slide carries an explicit warning worth repeating: these NSCA numbers are DIFFERENT from the ACSM guidelines. Individualise, and progress TOWARD them — do not start there."));

k.push(...glossary("Quick-Reference Glossary — Topic 4.4",[
 ["Sarcopenia","Age-related loss of skeletal muscle mass and function"],
 ["Type II fiber","Fast-twitch fiber — selectively lost with aging"],
 ["Intermuscular adipose tissue","Fat deposited between muscle fibers and fascicles, increasing with age"],
 ["Muscle quality","Force produced per unit of muscle mass — declines faster than mass itself"],
 ["Capillarization","Density of capillaries supplying muscle tissue"],
 ["NSCA","National Strength and Conditioning Association"],
 ["Frailty","A state of decreased physiologic reserve and increased vulnerability to stressors"]]));
k.push(pageBreak());

/* ─────────────────────────── TOPIC 4.5 ─────────────────────────── */
k.push(banner("TOPIC 4.5","Clinical Reasoning & Intervention Selection — Needs Analysis Part 2"));
k.push(spacer());
k.push(body("Objective: apply MSK screening findings and MMT to select, progress or regress strengthening interventions using a **three-level** framework."));

k.push(h1("1. The Assessment Order"));
k.push(detail(["Step","What"],[
 ["**1**","Patient history"],
 ["**2**","MSK screen"],
 ["**3**","MMT"],
 ["**4**","Task-specific assessments"]],[1600,7760]));
k.push(compare("GONIOMETRY","MSK SCREEN",
 ["Trying to figure out **a number**","**Quantitative** data"],
 ["A **quick ROM screen**","**Qualitative** data","Answers two questions: **1.** Is there a mobility deficit — yes or no? **2.** Can they control full ROM — yes or no?"],
 C.blue,C.teal,C.lightBlue,C.lightTeal));
k.push(tip("The sync session adds the caveat: the MSK screen does NOT replace ROM measurement. It's a starter — do it before you take out the goniometer."));

k.push(h1("2. Strength Levels"));
k.push(...fig(E+"levels.png",1698,1155,"The three strength levels (Topic 4.5 handout)"));
k.push(detail(["Level","What it is","Lower extremity","Upper extremity"],[
 ["**Level 1**","**Isolated joint**","Long arc quad · hamstring curls · heel raises","Resisted ER at 0°"],
 ["**Level 2**","**Multi-joint**","Squat · single-leg squat → lunge · deadlift → single-leg deadlift","Resisted ER at 90° · prone **Y** (lower trap) · prone **T** (mid trap)"],
 ["**Level 3**","**Task specific**","*Discussed further later*","*Discussed further later*"]],[1500,2200,3000,2660]));
k.push(tip("The practical exam focuses on Levels 1 and 2. Level 3 is flagged as coming later in the programme."));

k.push(h1("3. Christina, Across Three Visits"));
k.push(detail(["Visit","What happens","What you do"],[
 ["**Day 1**","26-year-old runner, PT student. No pain at rest or during her day, knee pain from about **mile 8** training for Boston. ROM normal · joint mobility normal · **MMT 5/5** · single-leg squat: no pain but **valgus collapse** and difficulty · lunge: mild valgus collapse, no pain","Which strength levels will you work on, and which exercises do you start her with?"],
 ["**Day 2**","“The exercises you gave last time are a little too hard and I have pain that increases with them”","Update the plan — **regress**"],
 ["**Day 3**","“The exercises you gave last time are a little too easy”","Update the plan — **progress**"]],[1400,4400,3560]));
k.push(infoBox("Why this case is the point of the whole module",[
 "**5/5 MMT ≠ tolerance to repetitive load**",
 "Checklist: mobility normal · strength at rest (MMT) normal → **it's a task-demand problem**",
 "If ROM, joint mobility and strength at rest are all normal, symptoms during activity usually reflect **task-specific demands, not impairment**",
 "Normal impairment-level findings can still require intervention when task demands exceed tolerance"],C.teal,C.lightTeal));

k.push(...glossary("Quick-Reference Glossary — Topic 4.5",[
 ["MSK screen","Rapid qualitative range-of-motion screen answering mobility-deficit yes/no and control yes/no"],
 ["Goniometry","Quantitative measurement of joint angle"],
 ["Level 1 / 2 / 3","Isolated joint / multi-joint / task-specific strengthening"],
 ["Long arc quad","Seated knee extension through the available range — a Level 1 quadriceps exercise"],
 ["Prone Y / prone T","Prone shoulder raises targeting lower trapezius (Y) and middle trapezius (T)"],
 ["Task-demand problem","Symptoms driven by the load of the activity rather than by a measurable impairment"]]));
k.push(pageBreak());

/* ─────────────────────────── SYNC ─────────────────────────── */
k.push(banner("SYNC SESSION 4","Therapeutic Exercise Foundations — Six Cases",C.teal));
k.push(spacer());
k.push(body("Run by **Dr. Eric Brown, PT, DPT, OCS**. Two slogans open it: **“Movement is Medicine”** and the core concept, **“Challenging, but Successful.”**"));

k.push(h1("1. The Two Frames, Side by Side"));
k.push(compare("FITT-VP — HOW MUCH","LIMITATION → INTERVENTION — WHAT",
 ["**Cardio →** minutes","**Strength →** hard sets","**Mobility →** end-range time","**Balance →** errors","**Power →** speed"],
 ["**Weakness →** strengthen","**Mobility →** stretch / mobilize","**Pain →** education / hands-on / modalities"],
 C.blue,C.green,C.lightBlue,C.lightGreen));

k.push(h1("2. The Six Cases"));
k.push(detail(["Case","History","Findings"],[
 ["**1. Lola**","78-year-old female. Fractured **left ankle → ORIF**, immobilised 6 weeks, no longer in a boot. Seen at week 8","ROM: **dorsiflexion limited** · MMT: DF 4−/5, **PF 3/5**, inv/ev 3+/5 · **balance poor**"],
 ["**2. Jerry**","43-year-old construction worker. Lower back pain after picking up a chunk of cement, onset **1 week ago**","**8/10 pain with all spinal movements** · **Grade I lumbar PA mobs painful**"],
 ["**3. Nancy**","62-year-old female, **4 weeks post right TKA**. Struggled to regain mobility. Goal: walk with friends without pain","Knee PROM **−8° extension, 83° flexion** · MMT flexion/extension 4−/5 **with pain**"],
 ["**4. Carrie**","48-year-old female. Goal: complete a Couch to 5K programme","Limited to **10 minutes of walking** — out of breath and fatigued"],
 ["**5. Jeremy**","18-year-old high school track runner. **4/10 right knee pain during practice, 0/10 at rest.** Struggles to get enough lift to clear the hurdle","Full knee ROM · MMT right knee 4−/5, left 5/5 · both hips 4/5 · **+Ely's** · single-leg squat → **knee valgus**"],
 ["**6. Roger**","72-year-old male, **12 weeks post right rotator cuff repair**","Limited flexion, abduction, ER · **hypomobile inferior/posterior glides** · MMT 4/5 flexion and ER, 4+/5 periscapulars"]],[1400,3800,4160]));
k.push(tip("Each case asks the same four questions: what findings will you work on, what interventions will you pick, choose a regression, choose a progression. Jerry's runs across three visits — day 1 manage the pain, day 3 he can lift light objects but not >20 lb at work (why?), day 6 the exercises are easy and he does high reps without fatigue (which variable must change?)."));
k.push(tnote("Jerry day 6 is the FITT-VP question in disguise. High reps without fatigue means he's training endurance, not strength — so the variable that must change is intensity, the load. More reps won't get him there."));

k.push(h1("3. Lab Skills"));
k.push(detail(["Category","Skills"],[
 ["**MSK screen**","Upper extremity: shoulder ROM screen. Lower extremity: ROM screen"],
 ["**Pain modulation**","Gentle shoulder ROM · gentle knee ROM and **grade 1 knee mob** · **grade 1 shoulder mob**"],
 ["**Mobility — joint & tissue**","Knee screen · knee mobilization into flexion"]],[2200,7160]));

k.push(h1("4. What the Practical Actually Asks"));
k.push(infoBox("Practical exam format (day 3 of lab)",[
 "A case — some exam findings performed, some provided, with time to prep outside",
 "**Your task: come up with the impairment bucket, the task bucket, and the treatment bucket**",
 "Create an intervention plan",
 "**Day 2 the patient is worse → regress, and say how.** **Day 3 the patient is better → progress, and say how**",
 "**There is not one single right answer — you want to be able to justify why you are picking what you are picking**"],C.gold,C.lightGold));
k.push(detail(["Async content the exam draws on","What to know"],[
 ["**FITT-VP**","The concept · the recommended guidelines · create a home exercise programme based on them · **how to change one variable at a time**"],
 ["**Aquatic therapy**","Big-picture takeaway — which populations it's good for, and why"],
 ["**Aging & muscle**","Sarcopenia · Type II fiber loss · the physiology, and how it applies to patients"],
 ["**Clinical reasoning & intervention**","Strength levels · lab skills"]],[2600,6760]));

k.push(...glossary("Quick-Reference Glossary — Sync Session 4",[
 ["ORIF","Open reduction internal fixation"],
 ["TKA","Total knee arthroplasty"],
 ["Grade 1 mobilization","Small-amplitude oscillation at the start of range, used for pain modulation"],
 ["Lumbar PA mobs","Posterior-to-anterior pressure applied to lumbar segments"],
 ["Ely's test","Prone knee flexion test for rectus femoris tightness"],
 ["Knee valgus","Medial collapse of the knee under load"],
 ["Couch to 5K","A graded walk-run programme building to a continuous 5 km run"],
 ["HEP","Home exercise programme"]]));

k.push(linkBox("📚 Reference cited in Module 4",[
 ["Kisner C, Colby LA, Borstad J. Therapeutic Exercise: Foundations and Techniques",null,"— referenced on the Topic 4.2 aquatics deck"],
 ["Fragala et al. NSCA Position Statement. J Strength Cond Res. 2019;33(8):2019–2052",null,"— Topic 4.4"],
 ["Gerards et al. Geriatr Gerontol Int. 2017;17:2294–2303 · Sherrington et al. Br J Sports Med. 2017;51:1749–1757",null,"— Topic 4.3 balance"]],C.gold));

build(k,"/home/claude/out/Module4_TherapeuticExerciseFoundations_StudyNotes.docx");
