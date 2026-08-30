const L = require('/home/claude/notes_lib.js');
const {C,h1,h2,body,bullet,tnote,tip,compare,detail,infoBox,banner,glossary,fig,pageBreak,spacer,cover,build,linkBox} = L;
const k=[];

k.push(...cover("Musculoskeletal Practice I (DPTH 6412)","Module 2: LBP Classifications — Assessment",
 "Topic 1: Referred/Radiating Pain (disc disease + stenosis) • Topic 2: Mobility Impairment (facet/DJD) • Topic 3: Movement Coordination Impairments • Lectures by Dr. Barrett",
 ["Watch the lectures in your own Canvas module — these notes condense them, they don't replace them",
  "★ This module sorts LBP into the CPG's ICF categories — each category's presentation table is what quizzes and practicals draw from",
  "Recurring theme: imaging findings are near-universal with age; classify by PRESENTATION, and watch your language with patients"]));

/* ─────────────── TOPIC 1a: DISC ─────────────── */
k.push(banner("TOPIC 1","LBP with Referred or Radiating Pain — Intervertebral Disc Disease"));
k.push(spacer());
k.push(h1("1. Referred Pain vs Radiculopathy — the Sorting Question"));
k.push(compare("REFERRED pain — 'my BACK hurts (and my leg too)'","RADICULOPATHY — 'my LEG is killing me'",
 ["Chief complaint = back; leg pain secondary",
  "Discogenic/chemical mechanism — nerve root IRRITATED by inflammatory chemicals, not compressed",
  "**Neuro screen typically UNAFFECTED** (dermatomes, myotomes, DTRs normal)",
  "**Centralizes** with the right movements/postures"],
 ["Chief complaint = leg; usually unilateral, radiates to foot/toes",
  "Nerve-root compression signs: numbness, tingling + **axon-loss signs — myotomal weakness, dermatomal sensory loss, depressed/absent DTR** (usually one root)",
  "Reality check: ~70% of LBP-with-leg-symptoms patients do NOT have radiculopathy; only ~5% do",
  "'Sciatica' is an umbrella term — this course says radiating pain / radiculopathy"],
 C.blue,C.teal,C.lightBlue,C.lightTeal));
k.push(h1("2. Disc Degeneration and Discogenic Pain"));
k.push(bullet("Triggers (age, mechanical pressure, vibration loading, genetics, inflammatory changes) → matrix degeneration, neovascularization, catabolic cytokines, nerve ingrowth → ↓disc height, bulging, annular fissures, osteophytes. **Only the outer third of the annulus is innervated**: nuclear material irritates it inside-out; radial fissures grow from the inner two-thirds outward → BACK pain first. Fissuring → gradual prolapse → CHEMICAL irritation of the root ('chemical soup' activating nociceptors) → radicular-type pain without true compression."));
k.push(compare("CHEMICAL pain","MECHANICAL pain",
 ["Inflammatory-irritant driven; better briefly with movement but relief doesn't LAST",
  "Repeated motion/sustained positions don't abolish it; consider pharmacology/physical agents acutely"],
 ["Nociceptors fired by physical force/deformation",
  "CAN be reduced or abolished by repeated movements or sustained positioning (McKenzie logic — the rehab lectures build on this); constant with internal derangement"],
 C.blue,C.teal,C.lightBlue,C.lightTeal));
k.push(bullet("**DDD/referred-pain presentation**: age ~20–50; pain starts central low back, may travel down the leg (can cross the knee); mechanism = bending/lifting/twisting (moving day, shoveling, raking, weekend-warrior sport), often a history of recurring acute episodes; **worse sitting** (flexed spine loads the disc); may show limited extension, flat back, or a lateral trunk shift. Exam centerpiece: hunt for movements that **CENTRALIZE** (pain out of the leg, into the back — even if back pain worsens, that's a WIN; explain that to the patient). Peripheralization = pain spreading down the leg = the direction to avoid."));
k.push(h1("3. True Herniation and Radiculopathy"));
k.push(bullet("Epidemiology: **5–20 per 100,000**; 30s–50s; **male:female 2:1**; symptomatic lumbar herniation prevalence 1–3%; **98% at L4-L5 or L5-S1**. Herniation locations: **central / paracentral** (can encroach the cauda equina — screen those red flags!), **foraminal** (the exiting root), **far lateral**. Types: **protrusion/bulge** (inner annulus torn, outer intact), **subannular extrusion** (broader spread under the annulus), **extrusion** (through the annulus), **sequestered** (fragment detaches and floats). L1–3 compression is rare and refers to the anterior hip/thigh (lumbar plexus), not the sciatic line."));
k.push(compare("HARD lesion","SOFT lesion",
 ["Annular fibers tear, nucleus uninvolved",
  "Audible pop → IMMEDIATE local pain, minimal distal symptoms",
  "Responds well to treatment — a true acute annular injury"],
 ["Progressive small annular tears let nuclear material weave outward",
  "**Activity was TWO DAYS AGO** — pain builds slowly; **worst in the morning** (overnight disc hydration; improves weight-bearing through the day, refills overnight)",
  "Slower recovery; responds to manual therapy; the traction-candidate category"],
 C.blue,C.teal,C.lightBlue,C.lightTeal));
k.push(bullet("**Exiting vs transiting roots ★**: at L4-L5, the L4 root EXITS below the L4 pedicle while L5 TRANSITS past the disc to exit below L5. So a **paracentral** L4-L5 herniation hits the TRANSITING L5; a **foraminal/lateral** one hits the EXITING L4 — the same disc can produce two different radiculopathies, and a central bulge can catch the whole cauda equina. This is why imaging level ≠ affected root until your physical exam correlates it."));
k.push(detail(["Root","Signature (dermatome · myotome · reflex)"],[
 ["**L1–L2** (rare)","Inguinal/anterior-thigh pain + paresthesia; reflexes normal; differentials: ilioinguinal/genitofemoral neuropathy, lateral femoral cutaneous (sensory-only), femoral neuropathy"],
 ["**L3** (uncommon)","Anterior thigh to MEDIAL knee — doesn't pass the knee; weak hip flexion/adduction + knee extension; patellar reflex depressed/absent"],
 ["**L4** (fairly common)","Medial lower-leg sensory loss; weak hip adduction, knee extension, some dorsiflexion; patellar reflex depressed/absent"],
 ["**L5 ★**","Anterolateral leg + dorsum of foot; **foot drop + weak great-toe extension**; (reflex overlap minimal — think tibialis posterior/medial hamstring clinically)"],
 ["**S1 ★**","Lateral foot + sole; weak plantarflexion, knee flexion, hip extension; **Achilles reflex** depressed/absent"]],[2200,7160]));
k.push(bullet("**Lateral shift logic**: herniation LATERAL to the root → leaning TOWARD it compresses → patient shifts AWAY; herniation MEDIAL to the root → the reverse. Test with **lateral shift correction** (shoulder blocks thorax, hands guide pelvis straight): centralizes → green light, that's a treatment; zings down the leg → red light, not yet. Stage behavior: acute = stiff, initial-to-midrange painful, positive neuro screen, hates sitting (the bar-table stander — take the subjective standing if they won't sit); subacute = midrange mobility returns; chronic = symptoms mainly with SUSTAINED end-range."));
k.push(tnote("Language matters twice: explaining pathoanatomy/biomechanics to patients INCREASES fear and pain — save this lecture's vocabulary for colleagues. And the discectomy jar study: patients handed their excised disc fragment in a jar ('here's the problem, it's out') had less pain, less medication use, and even less limb weakness — patient beliefs shape outcomes, so build the narrative deliberately."));

k.push(pageBreak());
/* ─────────────── TOPIC 1b: STENOSIS ─────────────── */
k.push(banner("TOPIC 1 (cont.)","Spinal Stenosis"));
k.push(spacer());
k.push(h1("1. Pathoanatomy and Presentation"));
k.push(bullet("Degenerative narrowing of the central canal, lateral recess/nerve-root canal, and/or intervertebral foramen — disc degeneration + **ligamentum flavum hypertrophy** + facet arthropathy ± spondylolisthesis, in the aging spine. Prevalence climbs with how you count: clinical diagnosis ~11% general population vs 39% in care settings; radiologic ~38% general, 11% asymptomatic, 21% in care. Central compression ABOVE the cord's end (cervical/thoracic) → **myelopathy** (UMN signs, hyperreflexia); central lumbar narrowing squeezes the **cauda equina** (LMN → hyporeflexia) — chronic stenosis can blur the cauda-equina red-flag picture, so judge whether signs are longstanding-stenotic or NEW and progressing (new = refer)."));
k.push(bullet("**The dynamic component ★**: extension/standing/walking SHRINK canal cross-section → symptoms; flexion/sitting EXPAND it → relief. Classic picture: **diminished walking tolerance relieved by sitting** (grandma navigating store benches; the rollator-with-a-seat fix), limited + symptomatic extension, bilateral side-bend limitation, possible hip-extension stiffness + weakness (stiff hips tip the pelvis anteriorly → more lordosis → more compression), neuro findings ± positive SLR."));
k.push(h1("2. Prediction Rules and the Claudication Differential ★"));
k.push(detail(["Tool","Contents"],[
 ["**Cook CPR (5 items)**","Bilateral symptoms · leg pain > back pain · pain during walking/standing · relief upon sitting · age > 48. **0/5 → Sn 96% (rules OUT) · 4/5 → Sp 98% (rules IN)**"],
 ["**Scored stenosis rule**","Points for age 60–70 / >70, absence of diabetes, **good peripheral circulation (3 pts — vascular is THE differential)**, symptom behaviors; **positive SLR = MINUS 2** (points to disc/root, not central narrowing). **Total ≥7 → Sn 93%**"],
 ["**Two-stage treadmill test**","Flat then incline: VASCULAR worsens uphill (more muscular demand); NEUROGENIC often walks FARTHER uphill (the incline flexes them forward)"],
 ["**Bicycle test**","Ride to symptoms → slump into flexion: symptoms ease in flexion + return erect = neurogenic; no positional change = think vascular"]],[2700,6660]));
k.push(compare("NEUROGENIC claudication","VASCULAR claudication",
 ["Central narrowing; posture-dependent",
  "Numbness, tingling, burning — back/buttock/legs",
  "Pulses PRESENT · **shopping-cart sign PRESENT** (walks farther leaning on a cart/walker)",
  "Relief needs positional change (sit/flex), not just stopping"],
 ["Peripheral vascular disease — nothing to do with the spine",
  "Cramping, aching, squeezing with ANY muscular activity",
  "Pulses ABSENT · shopping-cart sign absent; ultrasound can rule in/out",
  "Eases when movement STOPS, even standing still"],
 C.blue,C.teal,C.lightBlue,C.lightTeal));
k.push(bullet("**Natural history favors patience**: over 3.5 years only 10% worsened in back pain, 13% in leg pain, 22% in walking ability — and a larger share IMPROVED. If symptoms are manageable, conservative care + watchful waiting beats rushing to surgery — solid day-one counsel."));

k.push(pageBreak());
/* ─────────────── TOPIC 2 ─────────────── */
k.push(banner("TOPIC 2","LBP with Mobility Impairment — Facet Syndrome / DJD"));
k.push(spacer());
k.push(h1("1. The Facet Joint Problem"));
k.push(bullet("Lumbosacral **facet (zygapophyseal) syndrome** — degenerative joint disease of the spine's synovial joints: repetitive overuse/microtrauma, strains, mechanics, obesity, age-linked disc degeneration → joint-space narrowing, cartilage + synovial fluid loss, bony overgrowth, local inflammation. Five mechanisms of facet dysfunction: **acute synovitis** (effusion/bleeding → protective muscle guarding), **stiffness** (collagen cross-binding/adhesions post-injury), **mechanical block** (painless lock after stooping — meniscoid/cartilage fragment), **painful capsular entrapment** (sudden awkward move → one-sided pain; responds to multifidus isometrics or gapping), **degenerative arthrosis** (stiff + painful mornings)."));
k.push(bullet("Numbers: primary pain source in 10–15% of young adults and ~40% of older adults with chronic LBP; facet OA present in 36% under 45, 67% at 45–64, **89% over 65** — normal aging again. Women > men (the reverse of herniation); risk ~3× overweight, ~5× obese (central abdominal fat loads the spine). And the 2018 evidence: **no reliable correlation between symptoms, exam, and degenerative imaging findings** — same story as discs. Referral pattern: most often a unilateral band across the low back → glutes → sometimes thigh (usually stays above the knee; occasionally crosses; occasionally anterior)."));
k.push(h1("2. The Mobility-Impairment Category and Its Treatment Subgroups"));
k.push(detail(["Subgroup","Who lands here"],[
 ["**Non-thrust → active rest**","First 24–48 h, everything hurts: protective posture, painful sit-to-stand, painful all-range AROM/SLR/spring testing. Pain-dominant, not stiffness-dominant"],
 ["**Non-thrust → blocked extension**","Younger, severe pain ± posterolateral leg spread, sudden bend/lift/twist onset, everything upright hurts but **recumbency relieves**; morning pain blocks getting out of bed — think disc lesion"],
 ["**Directional-preference exercise**","Pain + stiffness mixed (inflammation + mechanical dysfunction); the exam finds the position/direction that subsides symptoms (extension, flexion, or shift correction) and THAT becomes the treatment"],
 ["**Thrust pattern ★ (the classic mobility deficit)**","Low-moderate pain, **stiffness > pain**, articular/mechanical source. Subacute hallmark: stiffness spreads — thoracic, pelvis, or hip restriction joins in from a month of guarded movement"]],[2900,6460]));
k.push(bullet("Presentation vs disc disorder: localized, often sharp-but-**intermittent** unilateral symptoms, worse PROXIMAL than distal, usually **no neuro signs**; aggravated by extension-biased tasks (prolonged standing, walking, prone sleeping), pain accumulating through the day + morning STIFFNESS ('I just feel old') rather than the disc's violent morning leg pain; eased by rest, sitting, flexion, and light movement — until they overdo it. Onset often an unguarded/awkward movement; segmental testing finds **hypomobile, symptom-provoking segments**."));
k.push(bullet("**Exam additions**: double-inclinometer ROM (objectify the stiffness), central + unilateral (± transverse) PA accessory testing to map hypomobile segments, and the **quadrant test** — side bend + rotation + extension over your shoulder to three levels of resistance, both sides: closes the facet down. **Highly SENSITIVE: a negative quadrant makes facet involvement unlikely** — but never diagnose off one positive special test. Facet CPR picture: localized unilateral pain · pain on unilateral pressure over facet/TP · no nerve-root signs · referral (if any) stays above the knee · eased by flexion · reduced movement toward the painful side · unilateral spasm · pain with extension + side bend + rotation."));

k.push(pageBreak());
/* ─────────────── TOPIC 3 ─────────────── */
k.push(banner("TOPIC 3","Movement Coordination Impairments (MCI)"));
k.push(spacer());
k.push(h1("1. Motor Control Foundations"));
k.push(bullet("**Panjabi's model**: three interdependent subsystems — **neural (control), passive (spinal column + ligaments), active (muscles)** — that compensate for each other (ligamentous laxity? the neural + active systems pick up the slack). Pain/injury arrives when compensation FAILS. The **neutral zone** hypothesis: injury/degeneration may not change total ROM but enlarges the neutral zone (lazy midrange) and shrinks the elastic zone, demanding more muscular work to control motion."));
k.push(bullet("Four motor-control changes in LBP: **altered muscle timing** (TrA/oblique pre-activation before limb movement becomes inconsistent; activity redistributes within + between muscles; glute-med co-activation patterns predispose in standing) · **altered muscle quality** (multifidus fatty infiltration, degeneration, inflammation, ↓vascularity in chronic LBP) · **altered stiffness** (multifidus structural integrity ↓ → less segmental stiffness) · **altered proprioception** (position-sense + repositioning errors — the multifidus is a key spine proprioceptor). Post-injury cycle: altered function → suboptimal control → adipose infiltration + slow-to-fast fiber transition → recurrence. Terminology note: the field has moved AWAY from 'instability' (Hodges: relevant for some, not all) toward **movement coordination impairment**."));
k.push(h1("2. Two Acute Doorways into the MCI Bucket"));
k.push(compare("LUMBAR SPRAIN/STRAIN (~70% of mechanical LBP)","MCI 'instability-type' onset",
 ["Recent unaccustomed repetitive bending/lifting (snow shoveling), unexpected strain, or blunt trauma; #1 lumbar injury in sport (54%; football ♂, gymnastics ♀; more at PRACTICE than competition — fatigue)",
  "Pain with extensor CONTRACTION (standing up from forward bend) and with full-flexion stretch; provocative testing of erector spinae/QL/psoas painful; initial-to-midrange motion limited",
  "**Improved by neutral spine + gentle abdominal bracing**; respect tissue-healing timelines (inflammation → repair → remodeling)",
  "Muscles refer too: QL → low back + glute; glute max, paraspinals, glute med, deep rotators all can join"],
 ["NO clear mechanism — recurrent episodes over months/years; pain 'grabs' in benign mid-bent postures (brushing teeth, dishes)",
  "**Initial-to-MIDRANGE movement hurts** (vs disc's end-range story); segmental provocation positive; possible hypermobility",
  "**Aberrant movements ★**: painful arc in flexion · instability catch/judder on return · **Gower sign** (hands walking up the thighs) · reversed lumbopelvic rhythm (hips move first)",
  "Subacute → recurring flares + secondary stiffness above/below + weakening; chronic → sustained end-range pain, mobility deficits, diminished trunk/pelvic strength, MCI in work/community tasks"],
 C.blue,C.teal,C.lightBlue,C.lightTeal));
k.push(bullet("Adaptive-behavior cycle: pain → patient invents a non-painful pattern (negative reinforcement: fear; positive: control) → variability collapses around the new pattern → more co-contraction, big-moment-arm muscles favored → joint/muscle consequences + cortical reorganization → more perceived threat → deeper adaptation. **Four subjective hallmarks of MCI-as-root-cause**: can't sustain semi-flexed postures · can't sustain ANY position long (movies, recliner, bed → 'I'm getting old') · pain on CHANGING position · better with low-level activity, worse with high-level."));
k.push(h1("3. Directional Provocation Groups"));
k.push(compare("FLEXION provocation","EXTENSION provocation",
 ["Resting posture already flexed: flat lumbar spine, posterior pelvic tilt, pelvis swayed forward/hips hyperextended",
  "Forward bending provokes; **extension relieves**",
  "Movement tests: quadruped rock-back (watch the rounding), seated extension, sit-to-stand; expect impaired multifidus activation + hyperactive erector spinae"],
 ["Resting posture lordotic: anterior pelvic tilt, hip flexion, tight hip flexors + paraspinals, long weak abdominals (prone lying may be intolerable)",
  "Extension provokes — any paraspinal contraction can",
  "Tests: squat, seated knee extension/hip flexion, prone hip extension; flexion happens late-then-all-at-once (held lordosis → sudden collapse), return led from the top; erector hypertrophy + reduced multifidus lift"],
 C.blue,C.teal,C.lightBlue,C.lightTeal));
k.push(bullet("**Rotation provocation** rarely rides alone (usually flexion+rotation or extension+rotation — treat the dominant plane first): trunk lean/lateral shift at rest, pelvic + hip rotation dysfunction; sagittal-plane MCI predicts transverse-plane MCI even in pain-free men."));
k.push(h1("4. MCI Exam Additions"));
k.push(bullet("**Posture** (hinged-extension vs flat-back) · **flexibility**: Thomas test, knee-extension hamstring length, Ober's · **movement testing** (objectify what your eyes see; add/subtract freely, retest in 4 weeks): forward/backward/side bend quality, **quadruped rock-back**, **active hip abduction** (sidelying; positive = unsmooth frontal-plane motion or pelvic rotation), **prone hip rotation** (pelvis should stay still), **bent-knee fallout** (hook-lying hip abduction-ER; navel drift/pelvic rotation = positive — catches non-sagittal MCI). If repeated movement testing CENTRALIZES them, move them to the directional-preference group first, then return to MCI work."));
k.push(bullet("**Muscle tests**: TrA biofeedback-cuff test prone (positive = can't reduce/hold **7–10 mmHg**; conflicting literature — a cueing tool, not gospel) · lower-abdominal strength + coordination (0–5) · trunk-flexion leg-lowering (0–5) · **multifidus lift test** (prone, shoulder 120° abducted, elbow 90°, lift the arm; palpate just lateral to the spinous process at L4-L5/L5-S1 for the bulge) · **Beighton score** for generalized laxity (pinky >90°, thumb-to-forearm, elbow + knee hyperextension, palms-to-floor)."));
k.push(detail(["Stabilization-classification evidence (Fritz et al., treatment-based classification)","Detail"],[
 ["**3 of 4 → stabilization category**","Average SLR **>91°** · positive **prone instability test** · **aberrant movements** present · **age <40**"],
 ["Factors FAVORING stabilization","Spring-testing hypermobility, aberrant motions, increasing episode frequency (3+ prior episodes), younger age, greater SLR"],
 ["Factors AGAINST","SLR side-to-side discrepancy >10° (points to a root/disc problem), low FABQ"],
 ["**Prone instability test**","Feet on floor, find the painful segment, spring it → lift legs → re-spring: LESS pain with muscles active = stabilization should help. Sn 72 / Sp 58 — a toolbox item, never a verdict; most lumbar special tests are weak alone and only work in CLUSTERS"]],[3400,5960]));

k.push(pageBreak());
/* ─────────────── STUDY ─────────────── */
k.push(banner("MODULE 2","Reading Map and Glossary"));
k.push(spacer());
k.push(detail(["Topic","Source"],[
 ["CPG categories","LBP Clinical Practice Guideline ICF categories (intro'd in the module overview; the decision tree arrives in Module 3)"],
 ["Handouts","IVD Disease, Spinal Stenosis, Mobility Deficits, Instability/MCI handouts + Sync 2 student copy (module folder)"],
 ["Deep dive","The delayed-timing/motor-control PTJ article lives behind the Canvas link in Topic 3 (journal copyright — not in the shared folder)"],
 ["Assessment","Quiz 2"]],[2600,6760]));
k.push(spacer());
k.push(...glossary("Module 2 Quick-Reference Glossary",[
 ["Referred vs radicular pain","Back-dominant chemical irritation (clean neuro screen) vs leg-dominant root compression (myotome/dermatome/DTR loss)"],
 ["Chemical vs mechanical pain","Inflammatory-soup nociception vs force-provoked, movement-modifiable pain"],
 ["Centralization / peripheralization","Pain retreating to midline (good, even if back pain rises) vs spreading down the leg"],
 ["Protrusion / extrusion / sequestration","Bulge with intact outer annulus / through the annulus / detached fragment"],
 ["Hard vs soft disc lesion","Acute annular tear (pop, local, quick recovery) vs progressive nuclear migration (2-day delay, worst mornings)"],
 ["Exiting vs transiting root","Paracentral herniation catches the transiting (lower) root; foraminal catches the exiting root"],
 ["Lateral shift correction","Manual re-centering: centralizes = treatment; peripheralizes = not yet"],
 ["Neurogenic vs vascular claudication","Posture-dependent, pulses present, shopping-cart sign vs activity-dependent, pulses absent"],
 ["Cook stenosis CPR","Bilateral symptoms, leg>back, walking/standing pain, sitting relief, age>48 — 4/5 Sp 98%"],
 ["Facet (zygapophyseal) syndrome","Degenerative synovial-joint pain: unilateral band, above-knee referral, extension-provoked"],
 ["Quadrant test","Extension + side bend + rotation; highly sensitive for facet involvement"],
 ["Thrust vs non-thrust patterns","Stiffness-dominant articular deficit vs pain-dominant (active rest / blocked extension) presentations"],
 ["Panjabi's subsystems","Neural + passive + active — compensating until they can't"],
 ["Neutral zone","Low-resistance midrange that enlarges with injury, demanding more muscular control"],
 ["Aberrant movements","Painful arc, instability catch/judder, Gower sign, reversed lumbopelvic rhythm"],
 ["Gower sign","Walking the hands up the thighs to rise from flexion"],
 ["Multifidus lift test","Prone arm lift; palpable multifidus bulge beside the spinous process"],
 ["Beighton score","Generalized-hypermobility count (pinky, thumb, elbows, knees, palms-to-floor)"],
 ["Prone instability test","Spring painful segment with legs lifted; relief = stabilization candidate (Sn 72/Sp 58)"],
 ["Stabilization 3-of-4 rule","SLR >91°, +prone instability, aberrant movements, age <40"]]));

build(k,"/home/claude/out/Module2_LBPClassificationsAssessment_StudyNotes.docx");
