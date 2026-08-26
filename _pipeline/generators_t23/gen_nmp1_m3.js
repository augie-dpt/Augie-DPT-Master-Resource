const L = require('/home/claude/notes_lib.js');
const {C,h1,h2,body,bullet,tnote,tip,compare,detail,infoBox,banner,glossary,fig,pageBreak,spacer,cover,build,linkBox} = L;
const k=[];

k.push(...cover("Neuromuscular Practice I (DPTH 6512)","Module 3: TBI — Examination and Evaluation",
 "Lectures: 3.1 Medical & Pharmacological Management of Brain Injury • 3.2 Rancho Los Amigos Levels of Cognitive Functioning (Dr. Mierau) • 3.3 Neurologic Examination & Intervention Strategies (interactive module — work it in Canvas)",
 ["★ marks exam-relevant content · ⚠ marks ICP thresholds and contraindications — the ICP table is the safety-critical content of this module",
  "Lecture 3.3 is an interactive Canvas module with no separate notes — complete it in your own Canvas module",
  "The RLAS-R levels + matched PT techniques are the module's core testable structure"]));

/* ─────────────────────────── 3.1 ─────────────────────────── */
k.push(banner("LECTURE 3.1","Medical & Pharmacological Management of Brain Injury"));
k.push(spacer());
k.push(bullet("**Objectives:** differentiate primary vs secondary brain damage · interpret **ICP values** for clinical decisions · identify prevention strategies for common secondary impairments."));
k.push(h1("1. Epidemiology + Classification"));
k.push(bullet("★ **TBI is the leading cause of injury-related death and disability in the US.** Leading causes in order: **falls** → assault → struck by/against → MVA. Risk by age: **adults >75 highest** (falls) · children 0–4 second (falls) · 14–24 close third (risk behavior + new drivers). **Males 1.5× more likely** than females."));
k.push(bullet("**By skull integrity:** open head injury — skull fractured, often with hematoma; compound fractures associated with dural tears and sometimes infection · closed head injury — skull intact."));
k.push(h1("2. Primary Brain Damage (AT the time of injury)"));
k.push(detail(["Type","Description"],[
 ["**Focal**","Injury under the site of impact"],
 ["**Coup-contrecoup**","\"Bouncing brain\" — brain suspended in CSF strikes front AND back of the skull (rear-end MVA → anterior + posterior damage)"],
 ["**Polar**","Anterior-inferior surfaces of the temporal and frontal lobes are the most susceptible"],
 ["**Blast**","Shock wave drives pressure oscillations in blood vessels — common in the military"],
 ["**Diffuse axonal injury (DAI)**","Diffuse stretching/tearing of axons in subcortical white matter — most common in concussion"]],[2600,6760]));
k.push(h1("3. Secondary Brain Damage (minutes to hours after)"));
k.push(bullet("**Intracranial hematomas** — epidural, subdural, or intracerebral bleeding; within minutes OR delayed hours; raises ICP → compression → herniation risk."));
k.push(detail(["Herniation","Mechanism"],[
 ["**Transtentorial (uncal)**","Medial temporal lobe squeezed by a unilateral mass (e.g., subdural hematoma) across and under the tentorium — often → coma"],
 ["**Central**","BOTH temporal lobes herniate through the tentorial notch — bilateral mass effect or diffuse edema"],
 ["**Tonsillar**","Cerebellar tonsils forced through the foramen magnum by an expanding infratentorial mass (e.g., cerebellar hemorrhage)"]],[2600,6760]));
k.push(bullet("**Hypoxic-ischemic injury** — less oxygenated blood to the brain → widespread damage; causes (one or several together, ★): arterial hypoxemia (pneumothorax, obstructed airway, PE) · arterial hypotension (blood loss) · increased ICP shifting the brain and cutting off O₂ · vasospasm. **Other secondary damage:** epilepsy/seizures (immediate OR delayed up to 2 years) · intracranial infections (catheter, monitor, skull fracture) · blast shrapnel."));
k.push(tnote("TBI vs stroke: a stroke's lesion location dictates impairments (typically one side). TBI can be diffuse — impairments may appear in ALL FOUR limbs, the trunk, and the face."));
k.push(h1("4. Medical Management + ICP"));
k.push(bullet("Goals: **restore vital functions · prevent secondary injury · monitor the Glasgow Coma Scale** (verbal, motor, eye). ICP can be monitored directly via an extracorporeal transducer placed in a ventricle."));
k.push(detail(["ICP value","Meaning + PT action"],[
 ["**4–15 mmHg**","Normal adult ICP (lower in children/infants — confirm pediatric norms with the medical team)"],
 ["**15–20 mmHg**","Acceptable after TBI"],
 ["**> 20 mmHg**","ACTION: elevate head of bed ≥ 30° FIRST, then notify nurses and MDs"],
 ["**> 30 mmHg**","**PT IS CONTRAINDICATED** — in the chart: cancel the session; during a session: stop immediately and notify"],
 ["**40 mmHg**","Impairs blood flow — life-threatening; herniation risk"]],[2400,6960]));
k.push(infoBox("⚠️ The two ICP rules to never break",[
 "ICP > 20: elevate the head of bed to at least 30° immediately, then notify — NEVER lay the patient flat with elevated ICP.",
 "ICP > 30: PT is contraindicated, full stop."],C.red,C.lightRed));
k.push(pageBreak());
k.push(h1("5. ICF Picture + Outcome Measures"));
k.push(detail(["ICF level","Common findings · measures"],[
 ["**Body structure/function**","Ataxia, blurred vision, weakness/plegia, bowel-bladder dysfunction, impaired proprioception, imbalance, behavioral + cognitive impairment. Measures: visual testing, MMT, sensation/coordination, static standing balance, **GCS**, CTSIB, Moss Attention Rating Scale, **RLAS-Revised**, Coma Recovery Scale, DHI, Modified Ashworth"],
 ["**Activity**","Impaired transfers (sit-to-stand), impaired gait (device needed), falls, ADL limitation, impaired bed mobility. Measures: 10MWT (10-foot if space-limited), FGA, FIM, 2- or 6-minute walk, DGI, Functional Reach, HiMAT, Action Research Arm Test, Functional Status Exam, TUG"],
 ["**Participation**","Unable to return to school, sports, or life roles (varies by age). Measures: Agitated Behavior Scale, Community Integration Questionnaire, Community Balance & Mobility Scale"]],[2600,6760]));
k.push(h1("6. Craniectomy + PT's Prevention Role"));
k.push(bullet("**Craniectomy:** when ICP turns life-threatening, part of the skull is removed so the brain expands OUTWARD instead of herniating down through the brainstem; the bone flap is stored **in the abdomen** to keep it alive until replacement — the patient may go months without skull protection. ⚠ Extreme caution over the exposed region."));
k.push(bullet("**Preventing secondary impairments is a MAJOR PT role in the acute phase — early assisted mobilization is critical.** Contraindications: unstable spine · ICP > 30. Precautions (modify, don't exclude): weight-bearing restrictions, skin/joint integrity, autonomic instability, cardiovascular status."));
k.push(detail(["Prevention tool","Details"],[
 ["**Bed positioning**","Head neutral, hips and knees flexed · regular ROM against contractures · reposition at least every 2 hours against pressure injuries · specialized heel-protection boot (~1 inch heel-to-bed clearance on a metal bar)"],
 ["**Serial casting**","For present contractures: cast at a given ROM → few days → recast at increased ROM. Common targets: plantar-flexion and biceps-flexion contractures"],
 ["**Wheelchair positioning**","Seated postural control is often impaired — reclining or tilt-in-space chair; assess and educate on pelvic and head positioning"]],[2600,6760]));
k.push(...glossary("Lecture 3.1 — Quick-Reference Glossary",[
 ["TBI","External-force brain injury; open (skull fractured) vs closed (intact)"],
 ["Coup-contrecoup","Impact site AND opposite side injured — brain bouncing in CSF"],
 ["DAI","Diffuse axonal stretching/tearing in subcortical white matter; concussion's signature"],
 ["Primary vs secondary damage","At the moment of injury vs minutes-to-hours after, caused by it"],
 ["ICP","Normal 4–15 · >20 act (HOB ≥30° + notify) · >30 PT contraindicated · 40 life-threatening"],
 ["Herniation","Transtentorial/uncal · central · tonsillar"],
 ["Craniectomy","Skull section removed for ICP; bone stored in the abdomen"],
 ["Serial casting","Progressive recasting into more ROM against contracture"],
 ["GCS","Verbal + motor + eye responses; tracked through recovery"]]));
k.push(pageBreak());

/* ─────────────────────────── 3.2 ─────────────────────────── */
k.push(banner("LECTURE 3.2","Rancho Los Amigos Levels of Cognitive Functioning",C.teal));
k.push(spacer());
k.push(bullet("**Two scales:** RLAS **original (1972**, Dr. Chris Hagen, Rancho Los Amigos National Rehab Center) — 8 levels, named by expected cognitive functioning, still on the NPTE and in clinics · RLAS **Revised (2022)** — **10 levels**, responses spread out, **levels of required assist added**; original level 8 expanded into 8/9/10 by amount of assistance."));
k.push(tnote("The revised scale tracks cognitive-behavioral recovery as patients EMERGE FROM COMA — not appropriate while still comatose. It doesn't name specific deficits; it's for cross-discipline communication and treatment planning. ★ Patients can plateau at ANY level — not everyone reaches 10."));
k.push(detail(["Level","Name — level of assist"],[
 ["1","No Response — Total Assistance"],
 ["2","Generalized Response — Total Assistance"],
 ["3","Localized Response — Total Assistance"],
 ["4","Confused, Agitated — Maximal Assistance"],
 ["5","Confused, Inappropriate, Non-Agitated — Maximal Assistance"],
 ["6","Confused, Appropriate — Moderate Assistance"],
 ["7","Automatic, Appropriate — Minimal Assistance (daily living skills)"],
 ["8","Purposeful, Appropriate — Standby Assistance"],
 ["9","Purposeful, Appropriate — Standby Assistance on Request"],
 ["10","Purposeful, Appropriate — Modified Independent"]],[1400,7960]));
k.push(h1("1. Levels 1–3 (response-based) + PT Techniques"));
k.push(bullet("**L1 No Response** — no observable behavior change to visual, auditory, tactile, proprioceptive, vestibular, or painful stimuli. **L2 Generalized** — inconsistent, NON-purposeful responses; the same regardless of stimulus type. **L3 Localized** — still inconsistent but **stimulus-specific**: withdrawal/vocalization to pain, turning toward/away from sound, blinking to strong light, tracking a moving object, pulling at tubes, inconsistent response to simple commands; more responsive to familiar people."));
k.push(bullet("**PT at 1–3:** ★ **always assume the patient can hear and understand** — introduce yourself and speak normally · reorient to time/date/situation · normal calm slow voice, simple instructions, yes/no questions, ample response time · cut extra stimulation (lights, sound, smell, tactile) · 1–2 people in the room · music they enjoy, 5–10 minutes at a time."));
k.push(h1("2. Level 4 — Confused, Agitated"));
k.push(bullet("Agitation comes from **INTERNAL confusion, not the environment**: hyperactive, bizarre, non-purposeful behavior; purposeful attempts to pull restraints/tubes or crawl out of bed; motor activity without purpose; **absent short-term memory**; crying or screaming disproportionate to stimulus; aggressive or flight behavior; euphoric-to-hostile mood swings; incoherent verbalization."));
k.push(infoBox("⚠️ Aggressively agitated patients",[
 "Do NOT put hands on a patient who is aggressively agitated — activate the behavioral response team (trained for exactly this at most TBI centers).",
 "Otherwise: calm quiet room, few people, one simple task at a time, seconds-to-minutes for responses; if agitated, stay with them until control returns — music, dim lights, soothing touch and deep pressure. Never react negatively to shouting, cursing, or outbursts; redirect gently after control returns."],C.red,C.lightRed));
k.push(h1("3. Levels 5–6 + PT Techniques"));
k.push(bullet("**L5 Confused, Inappropriate, Non-Agitated (Max A)** — more consistent with simple commands; non-purposeful/random with complex ones; behavior and speech often inappropriate; **confabulates**. **L6 Confused, Appropriate (Mod A)** — follows simple commands CONSISTENTLY; retains learning for FAMILIAR tasks but not new ones; more aware of self and situation; still unaware of specific impairments and safety; answers may be wrong (memory) but situation-appropriate."));
k.push(detail(["Memory-aid type","Examples"],[
 ["**Auditory**","Watch/phone alarms — medication, exercise, appointment reminders"],
 ["**Visual**","Written schedule (11 am medicine · 12 pm lunch · 1 pm therapy)"],
 ["**Photo-based**","Photos of the patient doing the exercises or daily tasks"],
 ["**Journal**","Writing today's activity to cue tomorrow's"]],[2400,6960]));
k.push(tip("ROUTINES are critical at levels 5–6: same therapist, same time of day, similar tasks each session — that consistency is what builds cognitive independence. Keep redirecting inappropriate actions in a calm, gentle tone."));
k.push(h1("4. Level 7 — Automatic, Appropriate"));
k.push(bullet("Oriented in familiar settings; daily routine runs automatically with minimal confusion; **carry-over now works for NEW tasks and familiar ones**; superficially aware of the diagnosis but not specific impairments; insight, judgment, and safety awareness still lacking; interest in social/recreational activity returns in structured settings; minimum supervision for learning and safety."));
k.push(infoBox("⚠️ Level 7 speech rule",[
 "No jokes, synonyms, slang, or sarcasm — the patient takes everything LITERALLY and cannot pick up nuance.",
 "Clear, consistent words, actions, and gestures; routine + schedule (involve family); lists, calendars, reminder apps; calm gentle feedback; keep supervising — insight and judgment still lag."],C.gold,C.lightGold));
k.push(h1("5. Levels 8–10 — Purposeful, Appropriate"));
k.push(detail(["Level","Characteristics + PT techniques"],[
 ["**8 — Standby Assist**","Consistently oriented ×3; independent with familiar tasks in NON-distracting environments; beginning awareness of specific impairments; uses memory devices; acknowledges others' emotions. 🎙 Often depressed, irritable, low frustration tolerance — **cognitive overload**: physically able, cognitively unable. PT: safe independence at home/work/school; schedule independent AND supervised activities; supervise executive tasks (checkbook, spending); schedule rest breaks; keep the memory devices"],
 ["**9 — Standby on Request**","Shifts between tasks and completes them independently; acknowledges impairments when they interfere; uses compensatory strategies to anticipate obstacles; weighs consequences WITH assistance; depression and low frustration threshold persist. PT: challenge with multitasking and task-switching; independent portable memory devices; assist problem-solving as needed; occasional help reading social nuance"],
 ["**10 — Modified Independent**","Multitasks across environments with extra time or devices; creates OWN memory methods; independently anticipates obstacles and corrects; independent, appropriate decisions (may need extra time); depression/frustration now intermittent and **stress- or fatigue-triggered**; socially appropriate. PT: allow extra time; teach compensatory strategies for pre-injury tasks; monitor physical AND mental fatigue, schedule rest"]],[2200,7160]));
k.push(tnote("The family education that matters at level 10: when fatigued, compensatory strategies break down and the patient functions below their usual level. Fatigue management is the key."));
k.push(...glossary("Lecture 3.2 — Quick-Reference Glossary",[
 ["RLAS-R","Revised 2022, 10 levels; cognition/behavior emerging from coma; assist levels built in"],
 ["Confabulation","Filling memory gaps with fabrication — NOT lying; common at levels 5–6"],
 ["Agitation (L4)","Hyperactivity from INTERNAL confusion; may include aggression"],
 ["Carry-over","Retaining learning across sessions: familiar tasks at 6, new tasks at 7"],
 ["Executive tasks","Finances, planning, decisions — impaired even with good physical function"],
 ["Cognitive overload","Task demands exceed capacity → frustration and breakdown; levels 8–10"],
 ["Memory aids","Schedules, photos, journals, alarms, apps"],
 ["Behavioral response team","The trained team for aggressive agitation — call them, don't grab"],
 ["Modified independent","Level 10 — independent with extra time or compensatory strategies"]]));

build(k,"/home/claude/out/Module3_TBIExaminationAndEvaluation_StudyNotes.docx");