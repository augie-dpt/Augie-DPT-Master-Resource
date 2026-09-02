const L = require('/home/claude/notes_lib.js');
const {C,h1,h2,body,bullet,tnote,tip,compare,detail,infoBox,banner,glossary,fig,pageBreak,spacer,cover,build,linkBox} = L;
const k=[];

k.push(...cover("Therapeutic Interventions II (DPTH 6241)","Module 4: Mechanical Agents",
 "Topic 4.1: Traction • Topic 4.2: Compression and Hydrotherapy • Lectures by Dr. Jake Awruch",
 ["Watch the lectures in your own Canvas module — these notes condense them, they don't replace them",
  "★ The traction response rule you will be tested on: WORSE → stop · PARTIAL relief → maintain · NO CHANGE → progress force in small increments",
  "This module closes the physical-agents half of the course — the midterm covers Modules 1–4"]));

/* ─────────────── TOPIC 4.1: TRACTION ─────────────── */
k.push(banner("TOPIC 4.1","Spinal Traction"));
k.push(spacer());
k.push(infoBox("The perspective (Saunders, 1983)",["“Effective traction treatment is not as easy or as simple to administer as it may appear. Many variations of the technique exist, some of questionable value. It must be emphasized that spinal traction is only a part of the total management treatment regimen.” Worth noting who wrote it: Saunders created many of the traction tables still in use — read the source's interest along with the claim. The real determinant stays the same: **does it produce the change you hypothesized?**"],C.gold,C.lightGold));
k.push(bullet("**Definition**: the application of a force or system of forces through mechanical devices in an attempt to **separate bony surfaces and elongate surrounding soft tissue**."));
k.push(h1("1. Mechanisms — name three, and when each fits ★"));
k.push(detail(["Mechanism","Clinical relevance"],[
 ["**Joint distraction**","Stretches the facet joint capsule (cervical, thoracic, lumbar) and can relieve **facet joint impingement**"],
 ["**Mechanoreceptor stimulation**","Traction around the joint fires mechanoreceptors → **pain modulation** and reduced guarding"],
 ["**↑ intervertebral foraminal dimensions**","**The biggest surviving clinical rationale** — creating space around the nerve root"],
 ["**↓ intradiscal pressure**","May help **small disc bulges and protrusions**; unimpressive for large or calcified chronic herniations"],
 ["**Soft tissue elongation**","Requires **gradual, continuous, sustained** pull over time"],
 ["**Muscle relaxation**","The same principle as distraction techniques elsewhere in the body — reduces guarding"]],[2600,6760]));
k.push(h1("2. Types of Traction"));
k.push(detail(["Type","What it is and where it lives now"],[
 ["**Continuous**","Small constant force for several hours a day over days to weeks. **Essentially obsolete** in modern PT — bedridden-era treatment. Still seen in severe trauma to realign fractures. For acute LBP it's **less effective than activity**, and a patient that immobile is often better served by surgery plus early movement"],
 ["**Static / sustained**","Continuous but short — **45 minutes or less**, which permits **greater force**. Produces muscle relaxation, soft tissue stretch, joint separation. **Preferred for acute symptoms**, where you don't want repeated on-off movement irritating chemically inflamed tissue"],
 ["**Intermittent**","Force applied on and off — mechanically similar to sustained, but functionally **a joint mobilization**: traction/relax, traction/relax instead of AP glides. All the usual mobilization indications apply (pain control, mobility)"],
 ["**Manual**","Most common in practice, especially **cervical**. Minimal force for the desired result, real-time feedback, and it can precede a thrust manipulation. Thoracolumbar manual traction is possible with creative setup and body weight"],
 ["**Positional**","Manual or mechanical traction applied in a **combined position** — e.g. cervical flexion plus rotation or side-bending, or lumbar side-bending/rotation. Great for progressing treatment and for teaching a home position of relief"]],[2400,6960]));
k.push(tip("The therapeutic target is NOT complete resolution — it's REDUCTION or CENTRALIZATION of symptoms. Traction is a test and a treatment at the same time: if radiating pain retreats toward the spine, you have your answer. And if a patient reports their pain has vanished entirely, do a neuro check before you celebrate — you need to rule out that you've created a complete occlusion of the nerve root."));
k.push(h1("3. Indications, Precautions, Contraindications"));
k.push(compare("INDICATIONS","PRECAUTIONS",
 ["**The top three (best evidence and historical use): disc bulge/herniation · nerve root impingement · degenerative disc disease.** Then: degenerative joint disease and spondylosis, joint hypomobility (intermittent traction as a mobilization), subacute paraspinal spasm, facet joint impingement, and subacute-to-chronic compression fractures."],
 ["**Spinal instability/hypermobility** — and note that hypomobile and hypermobile segments live next to each other, and traction can't select between them. **Pregnancy (lumbar)** — setup and harness. Patient **anxiety** about traction. **Cardiac/respiratory insufficiency** with a lumbar harness compressing the trunk. **Complete symptom resolution** (neuro-check it). And the **rebound effect** — patients often feel fine in the harness and hurt when they reload the spine, so start low."],
 C.blue,C.teal,C.lightBlue,C.lightTeal));
k.push(bullet("**Contraindications**: joint instability · tumor · **rheumatoid arthritis** (chronic steroid use raises instability risk) · acute sprain or strain (interferes with healing and scar formation) · acute inflammation or infection · **peripheralization of symptoms** · **uncontrolled hypertension** (lumbar mechanical traction raises blood pressure) · **TMJ dysfunction** for cervical traction (the harness) · healing fracture · hiatal hernia (lumbar) · uncontrolled increasing pain during treatment. **Osteoporosis carries a question mark** — it depends entirely on force, and a gentle intermittent dose used as a mobilization may actually be appropriate."));
k.push(h1("4. Parameters ★"));
k.push(compare("CERVICAL traction","LUMBAR traction",
 ["Usually **supine** (sitting possible with home units), positioned to relax the facet joints. **Neutral targets the UPPER cervical spine; flexion targets the LOWER cervical spine.** **Start 8–10 lb**, increase **3–5 lb per session**, and **rarely exceed 30 lb**. Static for acute symptoms; **muscle spasm = a few seconds on/off** (gentle oscillation); **disc = ~1 min on : 20 s off**; **joint = 15 s on : 15 s off**. Begin at **5 minutes**, build to **10** for acute, up to **30 minutes** for spasm or disc goals."],
 ["**Supine** favors the upper lumbar spine and facet problems; **prone** favors the lower lumbar spine and posterior disc problems; sidelying or rotation for manual positional traction. Forces start higher because **about 25% of body weight is consumed just overcoming friction between the patient and the table** before any therapeutic force reaches the spine. Same timing logic as cervical. Watch blood pressure and the harness's effect on the trunk."],
 C.blue,C.teal,C.lightBlue,C.lightTeal));
k.push(bullet("**Progression rules**: aim for **maximum result with minimum force**; **change ONE variable at a time**, and generally **increase TIME before you increase FORCE**; reassess symptoms continuously. Then the response algorithm: **complete relief → check nerve conduction** (AROM, reflexes, sensation) · **worse or peripheralizing → stop** · **too painful/uncomfortable → decrease force** · **partial relief → maintain the dose and re-test** · **no change → increase force in small increments over the next couple of visits**."));

k.push(pageBreak());
/* ─────────────── TOPIC 4.2: COMPRESSION ─────────────── */
k.push(banner("TOPIC 4.2","Compression and Hydrotherapy"));
k.push(spacer());
k.push(h1("1. External Compression"));
k.push(bullet("**Mechanism**: increases **external hydrostatic pressure** → improves **venous and lymphatic circulation**. **Intermittent beats static** for fluid movement, because the milking action drives fluid distal→proximal back toward the heart. Compression also **limits the shape and size of tissue** (post-amputation residual limb shaping, burn scar management) and raises tissue temperature, which factors into scar control."));
k.push(bullet("**Uses**: edema control · **DVT prevention** · prevention of venous stasis ulcers in immobile patients · post-surgical compression garments (those post-op compression socks). **Edema mechanism**: an imbalance between **hydrostatic and osmotic pressure** inside and outside the vessels — plus immobility, pregnancy, and incompetent valves. **The hard scope limit: edema or lymphedema from SYSTEMIC disease is not treated with compression** — heart failure and pulmonary edema are contraindications to intermittent/sequential pumps, not indications."));
k.push(detail(["Application step","Parameters"],[
 ["**Position**","**Elevate the treated area above the heart** so flow returns toward the heart"],
 ["**Pressure**","**Take the patient's blood pressure and set the machine's maximum just BELOW their diastolic**"],
 ["**Inflation:deflation ratio**","Roughly **3:1**"],
 ["**Edema / DVT / ulcer prevention**","**80–100 seconds on : 25–35 seconds off**"],
 ["**Residual limb shaping**","**Up to 60 seconds on : 10–15 seconds off**"],
 ["**Duration**","Can run a couple of hours at a time; between clinic sessions, transition to bandages, Velcro devices, or garments the patient manages themselves"]],[2800,6560]));
k.push(tnote("The emerging-evidence footnote: intermittent compression boots (Normatec) show enough evidence to support reduced blood lactate after short bursts of high-intensity exercise — which may mean better recovery and less soreness in an athletic population. That's a narrow claim about a narrow population; general clinical usefulness for these devices (and Game Ready) is still thin."));
k.push(h1("2. Hydrotherapy"));
k.push(detail(["Property","Effect"],[
 ["**Thermal**","Water has **high specific heat and thermal conductivity**, transferring by **conduction and convection**. The **more of the body immersed, the greater the heating effect**, since the body can't dissipate heat to air"],
 ["**Buoyancy**","Upward thrust against gravity **unloads painful joints** and makes movement possible sooner"],
 ["**Viscosity/resistance**","**The faster you move, the more resistance** — built-in graded strengthening"],
 ["**Hydrostatic pressure**","Increases with depth — deeper immersion, more pressure and more of its effects"],
 ["**Cleansing**","Softens and debrides wound material — necrotic tissue, exudate, dirt; cleaning agents can be added to a hydro tub"],
 ["**Cardiovascular**","Upright immersion displaces venous blood centrally: **neck-deep immersion can ↑ blood volume up to 60% and cardiac volume up to 30%**, ↑ cardiac output — but the **heart rate response to exercise is BLUNTED**"],
 ["**Respiratory**","Chest-wall compression makes breathing harder (indication or precaution depending on the patient); humid indoor pool environments can flare **exercise-induced asthma**"],
 ["**Renal**","Greater immersion → **increased urine production** via increased renal blood flow"],
 ["**Psychological**","Relaxing or invigorating depending on temperature; suitable across ages, absent water phobia"]],[2200,7160]));
k.push(tip("Because immersion blunts heart rate, DOSE AQUATIC EXERCISE BY RATE OF PERCEIVED EXERTION, not heart rate. This shows up on the midterm guide as its own self-check question — RPE, not HR, not BP, not SpO₂."));
k.push(bullet("**Uses**: superficial heating and cooling · exercise · pain control · swelling control · **wound care**. Screen cardiopulmonary status, infection spread, skin **maceration**, and general safety; non-immersion hydrotherapy (a directed water stream) carries its own precaution list. Cameron has the temperature reference table for whirlpool, hydro tub, and exercise pool by purpose."));
k.push(h1("3. Physical Agents We Named But Didn't Cover"));
k.push(bullet("Recognize these if you meet them in the clinic — all covered in Cameron for reference: **diathermy · EMG biofeedback** (a form of electrical-current application) **· laser and light therapy · infrared lamps · shockwave therapy**. Of those, **shockwave is showing decent evidence** but is still uncommon in most settings. The rest have largely faded on evidence, cumbersome application, or billing structure."));

k.push(pageBreak());
/* ─────────────── SYNC + MIDTERM ─────────────── */
k.push(banner("MODULE 4","Sync Session, Midterm Guide, and Glossary"));
k.push(spacer());
k.push(h1("Sync Session Answers Worth Memorizing"));
k.push(detail(["Question","Answer"],[
 ["The most defensible reason to include traction","**It produces a measurable improvement on a re-test** — not that it 'fixes discs,' not comfort, not billability"],
 ["Primary clinical goal in radicular presentations","**Centralization / reduction of radiating symptoms** — not peripheralization, not instant 0/10"],
 ["A clear stop rule for traction","**Symptoms peripheralize or worsen**"],
 ["Compression primarily supports","**Venous/lymphatic return and edema control**"],
 ["Hydrotherapy exercise intensity guided by","**Perceived exertion (RPE)**"],
 ["Quiz 3 corrections carried into sync","E-stim for **edema**: off time **2–5 seconds** (not 6–10) · open wounds are **NOT** a contraindication to electrical currents (False) · the phases figure had **4** phases"]],[3000,6360]));
k.push(bullet("**Sync case**: a cervical patient with **decreased C6/C7 myotomes, decreased dermatomal sensation, 1+ reflexes, positive upper limb tension test**, neck and upper-extremity pain with ROM, and hand tingling → **neck pain with radiating pain, with hard neurological signs present** — the textbook traction candidate, treated toward centralization with test-retest at every step."));
k.push(h1("Midterm Guide (Modules 1–4) — the faculty's own checklist ★"));
k.push(infoBox("The universal decision loop (it shows up everywhere)",["**Primary limiter** → what are you trying to change today? **Safety screen** → contraindications/precautions for THIS patient? **Pick the modality only if you can name a measurable re-test.** **Dose with 1–2 key parameters.** **Re-test** → keep it only if it moves the outcome; otherwise pivot."],C.green,C.lightGreen));
k.push(detail(["Module","What you must be able to do"],[
 ["**1 — Intro, healing, fundamentals**","Explain why we use modalities (symptom control to enable movement; never stand-alone) · why we measure pain (monitor change and effectiveness) · **rank evidence: applicable RCTs and systematic reviews > cohort > case reports** · healing basics: fracture stages and clinical healing, cartilage's limited healing, wounds depend on vascular supply and infection"],
 ["**2 — Thermal**","**Cryo**: best fit for acute irritability; cold intolerance/Raynaud precautions; cold pack vs ice massage · **Heat**: screen circulation, sensation, skin integrity; match dose to tolerance; know what is NOT a precaution · **US**: 1 MHz deeper vs 3 MHz superficial; pulsed vs continuous; **discontinue if no measurable change after ~2–3 visits**"],
 ["**3 — Electrical**","**Larger electrodes ↓ current density → better tolerance** · TENS/IFC work by gate control (A-beta); IFC uses carrier frequencies; modulation reduces accommodation · NMES contractions recruit differently and fatigue faster; **increase loading mainly by increasing amplitude** to a strong, tolerable contraction · HVPC/ionto: edema placement logic, screen adhesive allergy/skin integrity/sensation, and remember medication charge and pH affect ion delivery"],
 ["**4 — Mechanical**","**Traction**: radiating symptoms with a centralization goal; 2–3 mechanisms; the response rule; position by goal; re-test · **Compression**: supports venous/lymph return; hard stops are systemic fluid overload and unsafe arterial circulation; re-test girth, ROM, function · **Hydro**: immersion ↑ venous return and central volume, HR blunted → use RPE; wound cleansing and softening; screen cardiopulm, infection spread, maceration, safety"]],[2400,6960]));
k.push(tnote("The exam format the guide warns about: it lists what to know, but the questions apply it to short cases — best fit, safety screen, dosing cue, and re-test. Midterm is Modules 1–4, 50 multiple choice, 90 seconds per question, Respondus lockdown, closed note. Rehearse the eight self-check questions at the end of the guide out loud; they map one-to-one onto question stems."));
k.push(spacer());
k.push(...glossary("Module 4 Quick-Reference Glossary",[
 ["Spinal traction","Force applied to separate bony surfaces and elongate surrounding soft tissue"],
 ["Traction mechanisms","Joint distraction · mechanoreceptor stimulation · ↑foraminal space · ↓intradiscal pressure · soft tissue elongation · muscle relaxation"],
 ["Continuous vs static/sustained","Hours over days (obsolete outside trauma) vs ≤45 min with greater force (preferred acutely)"],
 ["Intermittent traction","On/off force = a joint mobilization in traction form"],
 ["Positional traction","Traction in a combined position (flexion + rotation/side-bending); good for HEP and progression"],
 ["Traction goal","REDUCTION or CENTRALIZATION of symptoms — not complete resolution"],
 ["Traction top-three indications","Disc bulge/herniation · nerve root impingement · degenerative disc disease"],
 ["Traction contraindications","Instability, tumor, RA, acute sprain/strain, acute inflammation/infection, peripheralization, uncontrolled HTN, TMJ (cervical), healing fracture, hiatal hernia"],
 ["Cervical parameters","Start 8–10 lb, +3–5 lb/session, rarely >30 lb; neutral = upper C-spine, flexion = lower; 5→10 min acute, up to 30 min"],
 ["Cervical timing by target","Spasm = seconds on/off · disc = 1 min : 20 s · joint = 15 s : 15 s"],
 ["Lumbar 25% rule","About a quarter of body weight is spent overcoming table friction before any therapeutic force applies"],
 ["Lumbar positioning","Supine = upper lumbar/facet · prone = lower lumbar/posterior disc"],
 ["Traction response rule","Worse → stop · partial → maintain · none → progress force in small increments; complete relief → neuro check"],
 ["Compression mechanism","↑external hydrostatic pressure → venous and lymphatic return; intermittent milks distal→proximal"],
 ["Compression parameters","Elevate above heart · max pressure just below diastolic BP · 3:1 inflation:deflation · edema 80–100 s on : 25–35 s off · limb shaping 60 s : 10–15 s"],
 ["Compression hard stop","Systemic causes — heart failure, pulmonary edema; unsafe arterial circulation"],
 ["Hydrotherapy properties","High specific heat/conductivity · buoyancy · speed-dependent resistance · hydrostatic pressure by depth"],
 ["Immersion cardiovascular effect","Neck-deep: blood volume ↑ up to 60%, cardiac volume ↑ up to 30%, ↑cardiac output, blunted HR response"],
 ["Aquatic dosing rule","Use RPE, not heart rate"],
 ["Hydro renal/respiratory","↑urine production with immersion; chest-wall compression + humid pool environments affect breathing"],
 ["Named-but-not-covered agents","Diathermy · EMG biofeedback · laser/light therapy · infrared · shockwave (best emerging evidence)"],
 ["The decision loop","Limiter → safety screen → modality with a named re-test → dose 1–2 parameters → re-test and keep or pivot"]]));

build(k,"/home/claude/out/TI2_Module4_MechanicalAgents_StudyNotes.docx");
