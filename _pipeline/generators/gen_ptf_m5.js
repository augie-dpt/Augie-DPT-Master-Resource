const L = require('/home/claude/notes_lib.js');
const {C,h1,h2,body,bullet,tnote,tip,compare,detail,infoBox,banner,glossary,fig,pageBreak,spacer,cover,build,linkBox} = L;
const E="/home/claude/emb19/";
const k=[];

k.push(...cover("Physical Therapy Fundamentals (DPTH 6211)","Module 5: Manual Muscle Testing",
 "Topics: 5.1 Muscle Testing the Upper Quarter • 5.2 Lumbar Spine & Lower Extremity Muscle Testing • Sync: grading system + breakouts",
 ["Watch Dr. Bartley's 20:46 intro lecture in your own Canvas module; Topic 5.2 runs on the PhysioU regional videos",
  "“The only way to acquire mastery of manual muscle testing is to practice over and over again” — Daniels & Worthingham. That's the whole module in one line",
  "This week's assignment: record goniometry AND MMT at the shoulder OR hip, calling out the grade and the gravity-minimized alternative",
  "MMT is the sequel to Module 4's ROM: same PhysioU pages, same joint logic — now with resistance"]));

// ===== 5.1 =====
k.push(banner("TOPIC 5.1","Muscle Testing — Vocabulary, Why/When, and the Method"));
k.push(spacer());
k.push(h1("1. Contraction Vocabulary"));
k.push(detail(["Term","Definition","MMT relevance"],[
 ["**Eccentric**","Lengthening contraction — applied force EXCEEDS the muscle's force → forced lengthening of the contracting muscle-tendon system","What happens if your break test actually breaks the hold"],
 ["**Concentric**","Tension rises to meet a stable resistance while the muscle shortens through range","The “active resistance testing” variant resists this"],
 ["**Isometric**","Contraction WITHOUT movement","**The MMT contraction** — you position, they hold, you press"],
 ["**Isokinetic**","Machine-controlled constant speed (e.g., Cybex) — patient pushes, machine caps degrees/second","Lab + sports settings; big footprint"],
 ["**Open-packed position**","Least congruency/compression; capsule + ligaments lax, joint play maximized","Test HERE — keeps inert tissues from adding pain or inhibition (full treatment in MSK coursework)"]],[1800,4200,3260]));
k.push(h1("2. Why, When, Where, How"));
k.push(bullet("**Why:** identify weakness/imbalance · treatment planning · baseline + progress (objective markers motivate patients too) · functional capacity · compensation patterns · objective data for colleagues and third-party payers · research/EBP. **When:** initial eval, planning, progress checks, return-to-sport clearance thresholds, imbalance workups, discharge outcomes. Sync's concrete list: neuro events (SCI, CVA, lumbar radiculopathy), ortho (post-op ACL, subacromial pain, ankle sprain), fall/balance risk (assistive-device users, Parkinson's). **Where:** everywhere — acute care, inpatient rehab, SNF, clinic, home health, fitness/sports/tactical."));
k.push(...fig(E+"im_p8-08.png",1275,1650,"The three testing families: manual, handheld dynamometry (more objective, but position- and experience-dependent), and isokinetic machines (5.1 handout)"));
k.push(bullet("**How — three families:** MANUAL (isolate one muscle, or grade the functional group behind a joint motion); **functional muscle testing** (mimic the functional demand — clearer strength↔disability link, useful when MMT isn't possible; limited by positioning, equipment, and other body systems in play); MECHANICAL (handheld dynamometry, isokinetic)."));
k.push(tnote("Sync's documentation distinction: a grade is an OBJECTIVE measure (“R shoulder ER (infraspinatus) 4/5”) — it becomes an ASSESSMENT when you relate it to function (“ER weakness is contributing to the inability to reach the layback position needed for safe return to pitching”; “0/5 below C7 corresponds with the diagnosed complete SCI level”)."));
k.push(h1("3. The Procedure"));
k.push(bullet("Position (standardized!) → explain AND demonstrate → **PROM first** — a joint without full passive range cannot give a valid mid-range/open-pack test → screen AROM through the full available range **against gravity** → **palpate** the target muscle → if full AROM is present, position the joint and **gradually** apply isometric resistance **directly opposite the muscle's line of pull**, coaching best effort → grade. Two styles: **break test** (attempt to break the isometric hold — the Fundamentals standard) vs active resistance testing (resist through range; more skill). Hold **≥5 seconds**, compare to the uninvolved side, keep your sequence consistent, bilateral, test/retest."));
k.push(h1("4. Grading (Dutton Table 12.2 — sync's full + Fundamentals tables)"));
k.push(body("Dutton Table 12.2. The BOLD grades are the ones the sync deck marks “what we will learn/assess in Fundamentals” — the rest of the scale exists and you should recognise it, but it arrives later in the curriculum."));
k.push(detail(["Grade","ROM","Gravity","Resistance"],[
 ["**5 Normal**","Full","Against","Maximum"],
 ["4+ Good+  · later","Full","Against",">Moderate <Maximum"],
 ["**4 Good**","Full","Against","Moderate"],
 ["4− Good−  · later","Full","Against",">Minimum"],
 ["**3+ Fair+**","Full","Against","Minimum"],
 ["**3 Fair**","Full","Against","NONE — against gravity is the whole test"],
 ["3− Fair−  · later",">50% but <full","Against","None"],
 ["**2+ Poor+**","Full","**MINIMIZED**","Minimum"],
 ["**2 Poor**","Full","Minimized","None"],
 ["**2− Poor−**",">50% but <full","Minimized","None"],
 ["**1 Trace**","Palpable contraction <50% — no joint movement","Minimized","None"],
 ["**0 None**","No palpable contraction","Minimized","None"]],[2200,2800,2000,2360]));
k.push(tnote("The 2+ row catches people out: it is graded in the GRAVITY-MINIMIZED position — full ROM with gravity minimized, then tolerating minimal resistance. Bartley's dividing line in the lecture is exactly this: “from 3 minus and above, the patient's able to move the joint against gravity actively… but below a 3 minus, so 2 plus and down, we have to change the patient's position to either mitigate or eliminate the effects of gravity.” (Your textbook's full table also shows a >50%-against-gravity variant of 2+; Fundamentals uses the minimized-position definition above.)"));
k.push(tip("So: 3− and above = moves AGAINST gravity. 2+ and below = reposition to gravity-minimized before you conclude anything. If they can't move against gravity, check the limiting factor FIRST — did they understand the directions? is the ROM available? is it weakness? is it pain or discomfort? Re-demonstrate, rule out joint/soft-tissue restriction, THEN go gravity-minimized."));
k.push(h1("5. Validity, Reliability, and What Bends the Numbers"));
k.push(detail(["Domain","The list"],[
 ["**Validity requires**","Maximum contraction elicited (their max effort — some neuro conditions preclude it, which is itself a contraindication) · PROM/AROM comparison · open-packed position · muscle somewhat shortened · standardized positions · proper stabilization · force at the right spot · ≥5-second hold · side-to-side comparison · account for age/size/training (the norms came from “the average adult male”)"],
 ["**Reliability**","Intra-tester > inter-tester · proximal muscles > distal · upper quarter > lower quarter (big LE muscles can out-muscle a smaller tester) · tester experience"],
 ["**Influencing factors**","Age · contraction type · muscle size · speed · training/familiarity (an isolated hamstring curl is foreign to many) · joint position · fatigue · nutrition · motivation · pain · body type · limb dominance"],
 ["**Precautions / contraindications**","Pain + inflammation · post-op protected tissues + sutures · abdominal surgery · acute care · cardiovascular conditions (**Valsalva → blood-pressure swings**) · excessive-fatigue risk: multiple sclerosis, Guillain-Barré"],
 ["**Limitations of MMT**","Functional relevance · non-linear scale · variability over time · inter-rater and test-retest reliability · concentric-only framing · not every patient fits the scale"]],[2400,6960]));
k.push(bullet("Pain, cramp, or spasm mid-test: if the patient can still give best effort, continue and NOTE the complaint; if not, stop and note why. And know your expected patterns — the sync drills what you'd anticipate after CVA, ACL reconstruction, chronic shoulder pain, and SCI, plus the common substitutions patients use to “trip you up.”"));
k.push(linkBox("\u{1F4F1} Required PhysioU — Topic 5.1 (upper quarter MMT)",[
 ["Head/Neck MMT","https://app.clinicalpattern.com/physiou/rom_mmt/2580/",""],
 ["Thorax MMT","https://app.clinicalpattern.com/physiou/rom_mmt/2602/",""],
 ["Shoulder MMT","https://app.clinicalpattern.com/physiou/rom_mmt/2598/",""],
 ["Elbow MMT","https://app.clinicalpattern.com/physiou/rom_mmt/2576/",""],
 ["Wrist/Hand MMT","https://app.clinicalpattern.com/physiou/rom_mmt/2607/",""],
 ["Mini Sims — Manual Muscle Test (repeat until 100%)","https://app.clinicalpattern.com/physiou/rom_mmt_sim/2075/2075-2/",""]]));
k.push(...glossary("Topic 5.1 — Quick-Reference Glossary",[
 ["MMT contraction","Isometric — hold, don't move"],
 ["Break test","Try to break the isometric hold (the standard here)"],
 ["Open-packed position","Lax capsule/ligaments — inert tissues stay quiet"],
 ["PROM first","No full passive range → no valid test"],
 ["Line of pull","Resistance goes directly opposite it"],
 ["3 Fair","Full ROM against gravity, zero resistance — the pivot grade"],
 ["≥5-second hold","Fatigue/neuro window for the break attempt"],
 ["Intra > inter","Same tester over time beats different testers"],
 ["Valsalva caution","Cardiovascular precaution — BP swings under strain"]]));
k.push(pageBreak());

// ===== 5.2 =====
k.push(banner("TOPIC 5.2","Lumbar Spine & Lower Extremity MMT (PhysioU topic)",C.teal));
k.push(spacer());
k.push(bullet("Same why/when/how as 5.1 — but the leg and trunk bring **big, powerful muscles**, so YOUR position matters as much as the patient's: reliability drops in the lower quarter partly because testers get out-muscled. Set up your base of support, use body weight over arm strength, stabilize proximally, and expect the gravity-minimized alternatives to matter more (side-lying hip work, and remember the soleus-style knee-position tricks from Anatomy M5)."));
k.push(linkBox("\u{1F4F1} Required PhysioU — Topic 5.2 (lower quarter MMT)",[
 ["Lumbar MMT","https://app.clinicalpattern.com/physiou/rom_mmt/2594/",""],
 ["Hip/Thigh MMT","https://app.clinicalpattern.com/physiou/rom_mmt/2585/",""],
 ["Knee MMT","https://app.clinicalpattern.com/physiou/rom_mmt/2590/",""],
 ["Ankle/Foot MMT","https://app.clinicalpattern.com/physiou/rom_mmt/2571/",""],
 ["Mini Sims — Manual Muscle Test (lower quarter)","https://app.clinicalpattern.com/physiou/rom_mmt_sim/2075/2075-2/",""]]));
k.push(pageBreak());

// ===== Sync =====
k.push(banner("SYNC SESSION","Grading Applied + Breakouts",C.navy));
k.push(spacer());
k.push(body("The sync walks WHEN/WHERE/WHY/HOW, then the grading tables (folded into Topic 5.1 above), then breakout rooms: watch an assigned patient video, choose the muscle and plane of motion that achieve the functional task, and plan the complete test."));
k.push(detail(["Breakout field","What a complete answer includes"],[
 ["Muscle + plane of motion","Which muscle/group produces the functional task in the video"],
 ["Patient position — BOTH versions","Against-gravity AND gravity-minimized setups"],
 ["Joint stabilization","What you fix so the motion is pure"],
 ["Palpation landmarks","Where your fingers confirm the right muscle is firing"],
 ["Position of the PT","Base of support, line of resistance opposite the line of pull"],
 ["Record the grade","Number + what it means, out loud"]],[3200,6160]));
k.push(tip("This is the ROM breakout sheet from Module 4 with resistance added — and the recorded video assignment grades exactly these fields for shoulder OR hip. MMT of specific muscles + the practical exam land at lab immersion, next module. Practice now: your body, a willing patient, and the PhysioU playlists."));

build(k,"/home/claude/out/Module5_MMT_StudyNotes.docx");
