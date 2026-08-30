const L = require('/home/claude/notes_lib.js');
const {C,h1,h2,body,bullet,tnote,tip,compare,detail,infoBox,banner,glossary,fig,pageBreak,spacer,cover,build,linkBox} = L;
const k=[];

k.push(...cover("Musculoskeletal Practice I (DPTH 6412)","Module 1: Clinical Reasoning and Lumbar Examination",
 "Topic 1: Clinical Reasoning + the SCRIPT (Dr. Andreyo) • Topic 2: Lumbar Examination & Triage (Dr. Bartley) • Topic 3: Lumbar Bony Pathology (Dr. Barrett) • Reading: Magee Ch 1",
 ["Watch the lectures in your own Canvas module — these notes condense them, they don't replace them",
  "★ Two tools run this whole course: SINSS and the SCRIPT. Learn them in Module 1 and every later module gets easier",
  "The exam flow is organized BY PATIENT POSITION (standing → sitting → supine → prone) — sequence yours the same way, always"]));

/* ─────────────── TOPIC 1 ─────────────── */
k.push(banner("TOPIC 1","Clinical Reasoning in the Patient Evaluation"));
k.push(spacer());
k.push(h1("1. Think About How You Think"));
k.push(bullet("**Metacognition** — awareness of your own decision-making — is the antidote to the classic student mistakes: jumping to ONE hypothesis without generating alternatives, clinging to it as contradictory findings surface, and stopping at impairments without tying them to function. The cautionary case: 34-year-old female runner with posterior thigh pain → 'tight hamstrings, stretch them' → two weeks later, no better. One data point is not a diagnosis."));
k.push(compare("CONFIRMATION bias","ANCHORING bias",
 ["Testing only what supports your existing belief",
  "'I think it's X, so I'll only test for X' — instead of ruling every candidate up or down"],
 ["Deciding early and refusing to update",
  "Contradictory findings surface and you stick to your guns anyway"],
 C.blue,C.teal,C.lightBlue,C.lightTeal));
k.push(bullet("The fix: **generate MULTIPLE hypotheses early** (forward reasoning — matching subjective + objective data to patterns), starting during the paperwork and subjective. 'I think it's X, Y, or Z, therefore I test X, Y, and Z.' Clinical reasoning is **continuous** — from first handshake to discharge, with the diagnosis allowed to change as the patient responds to treatment."));
k.push(bullet("**A PT diagnosis ≠ a medical diagnosis** (Guide to PT Practice): not just 'medial meniscus tear' but a **cluster of signs and symptoms** tied to impairments of body structure/function, activity limitations, and participation restrictions — because that's what the patient actually cares about. Use the **ICF** to escape the impairment-only trap: impairments → activity → participation → personal + environmental factors (the factors routinely decide whether your plan works — you treat people, not robots). **'Listen to your patients — they're telling you the diagnosis'**: firm hypotheses should exist by the END of the subjective; the objective exists to confirm or refute them."));
k.push(h1("2. SINSS — the Dial for Exam Vigor"));
k.push(detail(["Letter","What it tells you"],[
 ["**S — Severity**","Intensity (0–10) AND functional impact — impact is relative (older adult vs athlete)"],
 ["**I — Irritability ★**","How easily symptoms come on + how long they take to settle. THE governing variable: high severity + high irritability = go gently or you'll never see them again; low irritability (symptoms at mile 12 of a run) = you'll have to push harder to provoke anything"],
 ["**N — Nature**","What system/tissue is likely generating it — mostly MSK in this course; primary care widens the lens"],
 ["**S — Stage**","Acute / subacute / chronic — dictates intervention choices"],
 ["**S — Stability**","Getting better, worse, or unchanged — better: find what's working; worse: find what must change"]],[2400,6960]));
k.push(bullet("Symptom provocation is usually NECESSARY (reproducing the **comparable sign** proves you're barking up the right tree) — SINSS decides how hard you may push and **where in the sequence** each test goes: save the most provocative, most sensitive tests for LAST so one flare doesn't wreck the whole exam."));
k.push(h1("3. The SCRIPT Tool"));
k.push(bullet("Adapted from an orthopedic manual-therapy clinical-reasoning framework (the full version is post-graduation material; the course version is in your module files). The flow: **(1) Body chart** — draw and label every symptom area S1/S2/S3 ('P' for pain undersells it — could be numbness/tingling) → **(2) For each area**: what joint/bony structures lie under it? what muscle/tendon structures? what can REFER there? any systemic/red-flag conditions to consider? → **(3) Primary, secondary, remote hypotheses** → **(4) SINSS per symptom area** → **(5) Plan the exam**: neuro screen indicated? which region? which tests per hypothesis, in what order (sequenced by BODY POSITION and by SINSS), any personal/cultural factors? → **(6) Key findings** — support or refute each hypothesis → **(7) Key impairments** via the PhysioU Rehab Progression Pyramid (bottom of the pyramid outranks the top — pain/inflammation before muscle performance) → **(8) Interventions + expected response**."));
k.push(detail(["SCRIPT worked case — the 34F distance runner","How it played out"],[
 ["**Chart**","S1 right posterior upper thigh (deep ache, running/stretching) · S2 tingling/numbness into right lower leg (on asking about symptoms BELOW) · S3 low back + hip stiffness, ~1 year (on asking about symptoms ABOVE). Ask about 'symptoms', not 'pain' — less leading"],
 ["**Hypotheses**","1° hamstring strain · 2° lumbar spine — named properly as 'LBP with referred/radiating LE symptoms' (a region is not a hypothesis) · remote: femoral stress fracture (female distance runner)"],
 ["**SINSS**","S1: severity mod-severe (8/10, limits running), irritability moderate+ (on within a mile, lasts hours), MSK, subacute, worsening · S2: mild, neuro nature, subacute, worsening · S3: mild, chronic, unchanged"],
 ["**Plan**","Neuro/LQ screen indicated. Sequence: lumbar AROM (standing) → neuro screen + slump (sitting) → SLR, hip ROM (supine) → femoral tests (fulcrum, patellar percussion — testing the unlikely remote FIRST) → hamstring 90-90 + MMT LAST (most irritable)"],
 ["**Findings → plan**","Lumbar AROM restricted but non-provocative, neuro screen + slump negative (kept in the back pocket — maybe under-provoked), 90-90 + palpation + resisted hamstring all painful → hamstring involvement. But don't dead-end on stretching: test PROXIMAL hip/core strength (found weak → the driver), treat symptoms locally (STM/dry needling), taper training load, build proximal capacity, re-screen the lumbar spine over time, assess running gait once irritability drops"]],[2700,6660]));
k.push(tnote("Reflective reasoning after every case (sims included): how did you determine the diagnosis? how did findings support or negate the initial hypotheses? how does the priority impairment link to the patient's goals? what personal/environmental factors touch the prognosis and plan?"));

k.push(pageBreak());
/* ─────────────── TOPIC 2a: SUBJECTIVE + TRIAGE ─────────────── */
k.push(banner("TOPIC 2","Lumbar Examination & Triage — the Subjective Interview"));
k.push(spacer());
k.push(h1("1. Triage Comes Before Diagnosis"));
k.push(bullet("A strong lumbar exam begins before you touch the patient. By the end of the subjective you should hold a working hypothesis, a severity/irritability read, and — the first-order call — the patient's **triage bucket**: **medical management** (red flags, serious pathology, progressive neuro deficits → refer), **rehabilitation management** (mechanical LBP — most of your caseload), or **self-care management** (minor symptoms, low disability → reassurance + education). Treating someone who needed referral is unsafe; over-treating someone who needed reassurance is inefficient and unethical."));
k.push(compare("RED flags — stop and refer","YELLOW flags — treat differently, not less",
 ["History of cancer · unexplained weight loss · night pain unrelieved by rest · fever/systemic symptoms · **saddle anesthesia, bladder/bowel dysfunction → cauda equina = medical emergency**",
  "They don't confirm pathology — they raise suspicion enough to stop and refer (worsening pain + night pain + weight loss = not MSK, even if movement looks normal)"],
 ["Fear-avoidance beliefs · depression/anxiety/stress history · passive coping, reliance on medication/passive care",
  "Predict CHRONICITY. These patients need psychologically-informed PT (graded exposure, education), not just exercises — ignoring yellow flags makes outcomes worse"],
 C.blue,C.teal,C.lightBlue,C.lightTeal));
k.push(bullet("**First-time acute LBP**: usually mechanical, clear mechanism, favorable prognosis (most improve in 4–6 weeks) — your job is reassurance, stay-active education, no bed rest, no aggressive intervention. **Recurrent LBP** (the majority in clinic): repeated episodes with symptom-free windows, movement faults + load intolerance, higher chronicity risk — shift toward motor-control retraining, ergonomic/lifestyle change, and long-term self-management. Recurrent pain is about movement BEHAVIOR over time, not weak muscles alone."));
k.push(h1("2. Reading the Pain"));
k.push(bullet("**Pain diagram = roadmap**: local pain → mechanical/somatic structures · **referred** pain → diffuse spread into glute/thigh · **radicular** pain → follows a dermatomal pattern = nerve-root involvement. The PATTERN outranks the intensity (2/10 pain running down the leg matters more than 8/10 local ache). **Constant pain should always slow you down** — suspicion of something sinister or a worse PT prognosis."));
k.push(detail(["Descriptor / behavior","Suggests"],[
 ["Worse with sitting + bending","Flexion intolerance → possibly discogenic"],
 ["Worse with standing + walking","Extension intolerance → stenosis or facet involvement"],
 ["Pain with cough/sneeze shooting down the leg","↑intrathecal pressure on a nerve root"],
 ["Constant ache","Inflammatory tint · pain WITH movement → mechanical stress"],
 ["Accumulates over the day","Repetitive stress · with sustained postures → tissue creep/muscle fatigue"],
 ["Pinching (esp. with extension ± rotation)","Facet involvement"],
 ["'Good pain' at a pressure point","Myofascial trigger point"],
 ["Deep ache / dull / soreness","Muscular fatigue, accumulated stress, ligamentous"],
 ["Stabbing/shooting · paresthesia · numbness · unexplained weakness","Nerve-root involvement"],
 ["Burning","The hardest one — neuropathy, vascular, muscular tension, OR nerve root"]],[3400,5960]));
k.push(tnote("None of these are pathognomonic — symptom quality REFINES the hypothesis, it never replaces the exam. Ask position-by-position (lying to sleep? first thing in the morning? prolonged sitting? sit-to-stand? walking? driving?) and interpret better-vs-worse for each."));
k.push(h1("3. Outcome Measures — Stratify Risk, Don't Just Collect Data ★"));
k.push(detail(["Tool","Essentials"],[
 ["**STarT Back (SBST)**","Chronicity-risk stratification: 9 items (8 yes/no + 1 Likert), total 0–9, psychosocial subscale items 5–9 (0–5). **Low ≤3 → education/reassurance · Medium ≥4 with psychosocial ≤3 → standard PT · High psychosocial ≥4 → psychologically-informed PT.** It tells you HOW to treat, not whether"],
 ["**FABQ**","Fear-avoidance: 16 items, 0–6 Likert; subscales Physical Activity 0–24 and Work 0–42. Elevated: **PA >14; Work >34** (work-disability risk); MCID ~13 (work). High scorers need graded exposure + education, NOT rest"],
 ["**Pain Catastrophizing Scale**","Rumination + magnification + helplessness: 13 items ×0–4, total 0–52. **>20 elevated, ≥30 clinically significant**; MCID ~9–10. Flags who benefits from pain neuroscience education"],
 ["**Modified Oswestry (ODI)**","THE disability gold standard: 10 sections ×0–5, (score÷50)×100 = % disability. 0–20 minimal · 21–40 moderate · 41–60 severe · 61–80 crippled · 81–100 bed-bound. **MCID ~10–12 points (~30% baseline change)**"]],[2600,6760]));
k.push(bullet("Quick comparison: STarT Back = risk stratification (doesn't track change) · FABQ = fear (high psychosocial emphasis) · PCS = catastrophizing (tracks change, very high psychosocial) · ODI = disability (tracks change, low psychosocial). Use them to justify care and steer the plan — the review copies of all four + the summary cheat-sheet live in the module folder."));

k.push(pageBreak());
/* ─────────────── TOPIC 2b: PHYSICAL EXAM ─────────────── */
k.push(banner("TOPIC 2 (cont.)","The Lumbar Physical Exam — by Position"));
k.push(spacer());
k.push(tnote("Design rule: group every test by patient position (standing → sitting → supine → prone) instead of ping-ponging positions — efficient, and it protects irritable patients from false positives caused by constant repositioning. The exam tests the hypothesis you already formed; it does not start from scratch, and it never means running every test you know."));
k.push(h1("1. Standing"));
k.push(bullet("**Observe**: lateral shift, altered lordosis, guarding/spasm. **Gait**: antalgic pattern; **Trendelenburg sign** (contralateral hip drop → glute med weakness or L5 involvement); **heel walk + toe walk** = fast dorsiflexor/plantarflexor neuro screen (foot drop). **AROM**: quality before quantity — watch for **aberrant motion** on flexion return (painful arc, hitching) and **lumbar curve reversal** (should reverse naturally); measure with the inclinometer (PT Fundamentals technique), add overpressure when appropriate. **Extension** loads the posterior elements → facet, stenosis, or pars stress logic; WHERE and HOW the pain occurs matters more than the range."));
k.push(bullet("**Side bend + rotation** (coupled motions): cue against mixing in flexion/extension; overpressure shoulder-to-opposite-hip if appropriate. Disc logic: a postero-MEDIAL bulge side-bends more easily TOWARD the lesion (unloads it); postero-LATERAL bulge side-bends more easily AWAY. Gross rotation restriction often implicates the thoracic spine (lumbar rotation is anatomically small). **Progression of forces**: AROM → overpressure → combined/quadrant testing (e.g., extension + side bend + rotation — the check-the-blind-spot position) → **repeated movements**, which reveal load intolerance and **centralization vs peripheralization** — the classifier for referred/radicular pain (chase what centralizes, avoid what peripheralizes). Skip the escalation once concordant pain is already reproduced."));
k.push(h1("2. Sitting — the Neuro Screen"));
k.push(bullet("Dermatomes, myotomes, reflexes + **slump test** (adverse neural tension — add components stepwise) + **clonus** (upper-motor-neuron check)."));
k.push(h1("3. Supine — SLR Family + Hip Screen"));
k.push(bullet("**Straight leg raise** interpretation by range: 0–35° = sciatic slack (pain here is probably NOT neural/dural) · **35–70° = the nerve-root window** — pain here raises dural/neural involvement · >70° = no further root deformation. Sensitize like the slump: hip rotation, ankle dorsiflexion, neck flexion. Nerve-specific bias: **dorsiflexion + eversion → tibial nerve · dorsiflexion + inversion → sural · plantarflexion + inversion → common fibular** — connect the result to the dermatome/myotome/reflex findings before calling it radicular. **Crossed (well) SLR**: lift the UNaffected leg — reproduction in the affected leg is highly SPECIFIC for a large (often medial) disc herniation; a negative doesn't rule one out."));
k.push(bullet("**Hip screen in the same position**: hip PROM + end-feels, **FABER** (hip-joint pain generator), abdominal/core MMT. The hip is the joint below — screen it in every lumbar exam."));
k.push(h1("4. Prone — Finishing Moves"));
k.push(bullet("Hip internal rotation (feeds the manipulation clinical-prediction-rule later in the course), hip extension, **lumbar accessory motion testing** (central + unilateral PA glides), **prone knee bend** (femoral nerve tension). Special-case add-ons when indicated: sustained positioning for centralization durability, SI joint testing (later module), piriformis soft tissue (its course entangles the sciatic nerve), pelvic-girdle stability + movement coordination."));
k.push(h1("5. Interpreting the Whole"));
k.push(bullet("Look for PATTERNS, not single positives: mechanical vs non-mechanical · **directional preference** (extension, flexion, or lateral-shift correction that centralizes symptoms) · neural involvement · irritability level. Severe all-plane restriction vs blocked extension ± lateral shift carry different prognoses and treatments. **If movement changes nothing** — neither better nor worse — re-question whether this is mechanical at all: back to red flags. Then close the loop: treat, modify, or refer. Back-dominant vs leg-dominant pain plus flexion/extension response feeds the treatment-based classification buckets coming in Modules 2–4."));

k.push(pageBreak());
/* ─────────────── TOPIC 3 ─────────────── */
k.push(banner("TOPIC 3","Lumbar Bony Pathology — Dr. Barrett"));
k.push(spacer());
k.push(h1("1. The Imaging Caveat You'll Repeat Forever ★"));
k.push(bullet("**80% of the population will have low back pain**; it's a leading cause of disability in industrialized nations — but only a subset become chronic, and the research race is to find who and why. Meanwhile, **lumbar imaging routinely 'finds' things in pain-free people**: 81% of asymptomatics with a disc bulge and 56% with annular tears (one study); 52% bulge / 27% protrusion (another); herniated disc material in 20–76% of people WITHOUT sciatica. It worsens with age: disc degeneration, facet OA, or osteophytes in **90–100% of people over 65** at autopsy; central stenosis in 21% over 60 and 80% of those over 70. Wrinkles on the outside, wrinkles on the inside."));
k.push(tnote("Communication consequence (the 'Sticks and Stones' reading): never tell a patient 'your MRI explains your pain' — the spine may have looked identical before the pain and will look identical after it resolves. Function over diagnosis; the biopsychosocial model over the biomedical one. Words can hurt patients."));
k.push(h1("2. The Spondylo- Family (spondylo = vertebra)"));
k.push(detail(["Term","What it is"],[
 ["**Spondylosis**","Generic degenerative change — osteophytes, joint hypertrophy; near-universal with age"],
 ["**Spondylolysis**","**Fracture of the pars interarticularis** (between transverse process and upper lamina) — the 'collar on the Scotty dog' from anatomy. Classic mechanism: hyperextension (gymnasts, linemen)"],
 ["**Spondylolisthesis**","BILATERAL pars fracture → forward slippage of one vertebra on the next, graded I–IV by displacement. Types: **isthmic** (from spondylolysis — the pars is the 'isthmus') · **degenerative** (aging) · traumatic · pathological (osteoporosis, tumor) · congenital. Palpation clue: a **step deformity** — a small bump above the sacrum where the detached spinous process stays behind (rare to actually feel)"],
 ["**Retrolisthesis**","BACKWARD displacement, mostly in the elderly (degenerative) — can compress the **cauda equina** → bowel/bladder signs + leg weakness = the same emergency logic as any cauda equina syndrome"]],[2500,6860]));
k.push(bullet("Optional depth: the Ask Mike Reinold podcast on managing spondylolysis in athletes (load management + sport-specific rehab). Compression, wedge, and burst fractures are deferred to the thoracic-spine module where they're most common."));
k.push(h1("3. Two Skeletal Disorders"));
k.push(bullet("**Scheuermann's disease** — hereditary, mostly boys 13–15 (US prevalence 0.4–8%); regression of vertebral end-plate vessels → anterior vertebral body under-grows → wedging → pronounced **thoracic kyphosis**."));
k.push(bullet("**Ankylosing spondylitis** — chronic inflammatory disease that progressively FUSES the spine (**'bamboo spine'** radiograph); starts low (lumbar + SI) and climbs, eventually stiffening costovertebral joints and reducing chest expansion. Typical patient: **active male ~30** whose 'back pain and stiffness' (81% of cases) walks into PT, not the ER — **you are the clinician most likely to catch it and refer for imaging + blood work**."));
k.push(detail(["AS clinical prediction rule (4 of 5 → specificity 82%)","Detail"],[
 ["**Age of onset < 40**","Sensitivity 100% on its own — they'll report stiffness since their 30s even if they present later"],
 ["**Pain NOT relieved by lying supine**","Muscle-fatigue pain usually eases supine; AS doesn't"],
 ["**Morning back stiffness**","The inflammation brewing overnight"],
 ["**Duration > 3 months**","Chronic, insidious course"],
 ["**Chest expansion ≤ 2.5 cm**","Tape measure around the chest, deep breath in — an objective test you ADD for this suspicion"]],[3400,5960]));

k.push(pageBreak());
/* ─────────────── STUDY ─────────────── */
k.push(banner("MODULE 1","Reading Map and Glossary"));
k.push(spacer());
k.push(detail(["Topic","Source"],[
 ["1 Clinical reasoning","Magee, Orthopedic Physical Assessment 7e, Ch 1 (applied anatomy, history, observation, examination principles, functional assessment) · the SCRIPT tool + Modified SCRIPT (module folder)"],
 ["2 Lumbar exam","LBP Clinical Examination & Triage handout · outcome-measure forms + DPT summary sheet (module folder) · PhysioU: outcome measures, AROM/overpressure, repeated + quadrant motions, SLR/well-leg videos"],
 ["3 Bony pathology","Lumbar Bony Pathology handout · 'Sticks and Stones' viewpoint (3-page read) · 'Back to Basics: 10 Facts' (Sullivan et al.)"],
 ["Assessment","Quiz 1 · Sync 1 covered the SCRIPT + outcome-measures cheat sheet (handouts in the module folder)"]],[2600,6760]));
k.push(spacer());
k.push(...glossary("Module 1 Quick-Reference Glossary",[
 ["Metacognition","Thinking about your own clinical thinking — the bias check"],
 ["Confirmation / anchoring bias","Testing only your belief / refusing to update it"],
 ["Forward reasoning","Matching accumulating data to known patterns to build hypotheses early"],
 ["SINSS","Severity, Irritability, Nature, Stage, Stability — sets exam vigor + sequencing"],
 ["Comparable sign","The patient's own symptom you aim to reproduce to confirm the source"],
 ["SCRIPT","The course's structured reasoning worksheet: chart → structures → hypotheses → SINSS → exam plan → findings → impairments → interventions"],
 ["Red vs yellow flags","Serious-pathology signs (refer) vs chronicity predictors (psychologically-informed PT)"],
 ["Cauda equina syndrome","Saddle anesthesia + bladder/bowel dysfunction — medical emergency"],
 ["Local / referred / radicular pain","Focal somatic · diffuse regional spread · dermatomal nerve-root pattern"],
 ["Centralization / peripheralization","Symptoms retreating toward the spine (good) vs spreading down the limb (avoid)"],
 ["Directional preference","The repeated-movement direction that centralizes or abolishes symptoms"],
 ["Aberrant motion","Painful, hitching, curve-reversal-disrupted return from flexion"],
 ["Trendelenburg sign","Contralateral hip drop — glute med weakness or L5 involvement"],
 ["Slump test / SLR 35–70°","Neural-tension tests; the SLR's mid-range is the nerve-root window"],
 ["Crossed (well) SLR","Unaffected-leg raise reproducing affected-leg pain — highly specific for large disc herniation"],
 ["Quadrant testing","Combined extension + side bend + rotation to provoke stubborn symptoms"],
 ["Pars interarticularis","The Scotty-dog collar; its fracture = spondylolysis"],
 ["Spondylolisthesis grades I–IV","Forward-slip severity after bilateral pars fracture"],
 ["Bamboo spine","Fused-vertebrae radiograph of ankylosing spondylitis"],
 ["STarT Back / FABQ / PCS / ODI","Risk stratification / fear-avoidance / catastrophizing / disability"]]));

build(k,"/home/claude/out/Module1_ClinicalReasoningAndLumbarExamination_StudyNotes.docx");
