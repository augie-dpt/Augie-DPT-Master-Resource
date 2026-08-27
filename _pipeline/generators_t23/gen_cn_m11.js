const L = require('/home/claude/notes_lib.js');
const {C,h1,h2,body,bullet,tnote,tip,compare,detail,infoBox,banner,glossary,fig,pageBreak,spacer,cover,build,linkBox} = L;
const k=[];

k.push(...cover("Clinical Neuroscience (DPTH 6141)","Module 11: Impairment Testing Part 2 — CN, Sensory & Balance Exams",
 "Topics 11.1–11.3 • Reading: Lundy-Ekman Ch 22 (pp. 411–418) + Ch 31 (pp. 533–556) · Fell Ch 5, Ch 7 (pp. 191–208), Ch 9 (pp. 250–255), Ch 10 (pp. 299–300)",
 ["These are SKILL CHECK lectures — the procedures below are graded verbatim: setup, instructions, actions, interpretation",
  "★ Practice light touch, sharp/dull, proprioception, and kinesthesia until the scripts are automatic — they're on the skill check and practical",
  "Safety rule for every balance test: gait belt, close guarding, position to lower the patient — and don't trust anyone's balance until you've seen it across multiple sessions"]));

/* ─────────────── TOPIC 11.1 ─────────────── */
k.push(banner("TOPIC 11.1","Examination of Cranial Nerves — Reflexes and Eye Movements"));
k.push(spacer());
k.push(detail(["Test (nerves)","Procedure → interpretation"],[
 ["**Pupillary light reflex** (II afferent, III efferent)","Patient relaxed, looking straight ahead (not at the light). Shine light quickly into one eye → observe DIRECT constriction; repeat same eye watching the other for CONSENSUAL; repeat other side (hold the lid open if needed — instruct even non-alert patients). Normal: both constrict; pupils symmetric, 3–6 mm. **CN III lesion** → ipsilateral dilated pupil, slow/absent direct response. **Complete CN II lesion** → NEITHER pupil responds when light enters the affected eye. Near/far check: close → constrict, distance → dilate; a III lesion leaves the pupil dilated and unchanging"],
 ["**Convergence** (III + visual fusion)","Patient fixates an object tip moving from ~2 ft to ~4 in from the nose. Normal: symmetric adduction. One eye lagging/staying out = CN III lesion, visual-perception deficit, or defective CNS fusion control"],
 ["**Accommodation** (II + III parasympathetic + frontal eye field/visual cortex)","One eye covered; text card approaches from ~2 ft. Normal: focus holds to ~4 in before age 40 (recedes to ~39 in in middle age). Early blur = ipsilateral II, III-parasympathetic, constrictor muscle, or bilateral tract-to-cortex lesions"],
 ["**Smooth pursuit — H test** (III, IV, VI)","Trace an H ~1.5 ft from the face; eyes follow conjugately + smoothly. Muscle map: III — medial/superior/inferior rectus + inferior oblique (adducted eye up) · IV — superior oblique (adducted eye down) · VI — lateral rectus. Pursuit deficits → ipsilateral parieto-occipital pathways"],
 ["**Voluntary saccades** (frontal eye fields)","Two targets 1.5 ft from the nose, 3 ft apart; 'look left… right…' on command. Normal: fast conjugate accurate jumps. Deficits → contralateral frontal eye field"],
 ["**Optokinetic nystagmus**","Vertically striped cloth drawn across gaze; 'look from stripe to stripe' → normal alternation of pursuit + reset saccade (the train-window eye bounce)"]],[3000,6360]));
k.push(tnote("Framework findings: peripheral CN lesions present ipsilaterally; central oculomotor problems come from stroke, TBI, MS, or tumor hitting brainstem/cortical eye-movement areas. The VOR + optokinetic system stabilize GAZE; saccades, pursuit, and convergence steer DIRECTION of gaze. Full CN exam procedures: Fell Ch 7."));

k.push(pageBreak());
/* ─────────────── TOPIC 11.2 ─────────────── */
k.push(banner("TOPIC 11.2","Examination of Sensory Input"));
k.push(spacer());
k.push(h1("1. Framework"));
k.push(bullet("Sensation = conscious perception of afferent somatosensory signaling. **Superficial (tactile)**: light touch, pain (sharp/dull), temperature, pressure — skin receptors. **Deep (proprioceptive)**: joint position, movement (kinesthesia), muscle length — spindles, GTOs, joint receptors. **Combined/discriminative cortical senses**: tactile localization, stereognosis, two-point — the SCREEN, because they require everything below to work. Link each modality → receptor → tract (DCML vs spinothalamic) → crossing level; the crossing determines the distribution of loss."));
k.push(bullet("**Distribution patterns to recognize**: cortical lesion → contralateral unilateral loss · SCI → dermatomal, para/tetra pattern · sporadic → MS, tumors, ALS (scattered plaques/damage) · peripheral nerve → that nerve's territory · polyneuropathy → stocking-glove · radiculopathy → dermatomal. Document quantity (boundaries + distribution), quality (intact/impaired/absent — proper terminology), position, and modality; a body chart helps but objective language is required."));
k.push(h1("2. Universal Testing Principles"));
k.push(bullet("Informed consent (explain + demonstrate + possible findings) → position supported (supine or seated, feet flat, arms supported) → **vision eliminated** → establish a NORM REFERENCE on the face or uninvolved side → apply stimuli long enough for central processing, in a **random, unpredictable** order → never lead ('do you feel this?' is banned in this course) → patient told **'do not guess'** → adapt responses for communication disorders (thumbs, board). Score: **0 absent · 1 impaired · 2 intact** (or trials-correct out of total for proprioception/kinesthesia)."));
k.push(detail(["Test","Procedure highlights"],[
 ["**Light touch**","Cotton swab/camel-hair brush/tissue. 'Close your eyes; say NOW when you feel the touch, and whether it feels the same or different. Don't guess.' Brief wisp, slow small stroke; wait; compare to reference; unpredictable, regional or dermatomal. Add tactile localization ('where?') for discrimination"],
 ["**Pain (sharp/dull)**","Safety pin or sharp/dull instrument. Establish sharp AND dull references. Indent without blanching/breaking skin, hold a few seconds; patient reports sharp vs dull + same/different; randomize sharp/dull; several trials per region/dermatome. Absent = can't distinguish; impaired = feels sharp but different. Use Fell Table 5-2 for dermatome landmarks"],
 ["**Proprioception** (static position)","No equipment. Demonstrate the 2–3 positions with eyes OPEN first → eyes closed → **grip bony landmarks** (stabilize the tested joint, move the distal segment — minimize tactile cues) → move to a static position → 'what position?'. Modification: mirror-matching with the unaffected limb. Skill-check joints: **great toe, ankle, interphalangeal, wrist**"],
 ["**Kinesthesia** (movement sense)","Same setup; move the segment in SMALL amplitude and ask 'which direction are you moving?' DURING movement; enlarge amplitude only if small movements fail. Same joints as proprioception"]],[2700,6660]));
k.push(tip("The clinical logic: absent pain/temp/pressure = injury risk (teach visual monitoring of the area); impaired position sense = poorly-controlled movement + falls (vision partially compensates). Your test selection always follows the hypothesized impairment from history + movement analysis — screening uses the discriminative senses, full exams run light touch → sharp/dull → proprioception → kinesthesia."));

k.push(pageBreak());
/* ─────────────── TOPIC 11.3a ─────────────── */
k.push(banner("TOPIC 11.3","Examination of Balance — Body Structure & Function"));
k.push(spacer());
k.push(h1("1. Why Balance Testing Carries So Much Weight"));
k.push(bullet("Postural control = biomechanics + sensory systems + motor systems + CNS integration achieving **orientation** (segments↔body↔environment) and **stability** (COM over BOS). Impairment triggers the 'toilet-bowl effect': harder movement → assistance/aids/time → frustration → sedentary life → weaker, stiffer, less-practiced balance → worse balance. Fall math: 11–30% of community-dwelling older adults fall yearly (stroke: up to ~50%; up to 28% of stroke fallers injured); a fall-related ED visit every 13 seconds, a death every 20 minutes; a third of older adults fall each year and fewer than half tell their doctor."));
k.push(bullet("History first: falls + near-falls, **intrinsic** factors (vestibular/proprioceptive/visual dysfunction, weakness, incoordination, ROM loss) vs **extrinsic** (ice, throw rugs, lighting, pets, thresholds, cords — consider a home assessment; patients stop seeing their own hazards). Then examine every contributor: sensory receptors + integration, motor planning/execution, musculoskeletal integrity, cognition + attention, balance strategies, and **balance confidence — ABC scale**: 16 activities rated 0–100% confidence; average **<67% = elevated fall risk**."));
k.push(h1("2. The Three Sensory Systems and the mCTSIB"));
k.push(bullet("**Somatosensory** — surface contact + pressure (COP monitoring via the soles) + subconscious spindle position sense: dominant on firm surfaces. **Visual** — verticality references (horizon, windows), obstacle + motion information (escalator timing). **Vestibular** — head vs gravity + movement; takes over when vision + somatosensation are unreliable; runs the VOR + vestibulospinal tone. The CNS weights them by task/context (ankle position sense matters on firm ground, not foam; dark night → somatosensory + vestibular). Redundancy lets one system cover another's loss — and pathology (diabetic neuropathy, vestibular hypofunction, macular degeneration) or aging can strip several at once."));
k.push(detail(["mCTSIB condition","Disadvantaged → relying on"],[
 ["**1 Firm surface, eyes open**","Nothing — baseline; all three systems available"],
 ["**2 Firm surface, eyes closed**","Vision removed → somatosensory + vestibular. Instability here → suspect one of those two"],
 ["**3 Foam surface, eyes open**","Somatosensation degraded → vision + vestibular"],
 ["**4 Foam surface, eyes closed**","Somatosensation + vision gone → **vestibular only** — hardest for everyone; marked failure suggests vestibular dysfunction"]],[3000,6360]));
k.push(bullet("Record: hold time per condition (up to 30 s), sway/loss of balance, strategy used (excessive hip strategy, sway), and nausea/dizziness reports — all useful for change over time."));
k.push(h1("3. Postural Control Types, Strategies, and Atypical Findings"));
k.push(bullet("**Steady-state** (predictable conditions) · **anticipatory** (feedforward — pre-perturbation adjustments) · **reactive** (feedback — recovery after surprise). Standing strategies: **ankle** (small, slow perturbations — plantarflexors/tibialis anterior, quads, abdominals vs paraspinals/hamstrings by direction), **hip** (larger/faster or narrow surface), **stepping** (realign BOS under COM with rapid steps/hops), **reach** (extend BOS by grabbing a surface). Atypical responses come in three flavors — slow to DETECT (somatosensory/cognitive), slow to REACT (force production, hypotonia, timing), and WRONG AMPLITUDE (grading failure, spasticity, coactivation, hypermetria); alignment problems (asymmetry, ROM, tone) and impaired verticality perception shift COP and shrink limits of stability. Dual-tasking lengthens reaction time — test it."));

k.push(pageBreak());
/* ─────────────── FUNCTIONAL TESTS ─────────────── */
k.push(banner("TOPIC 11.3 (cont.)","Functional Balance Tests"));
k.push(spacer());
k.push(bullet("You remain responsible for previously learned measures — re-practice setup, instructions, scoring, cutoffs, and WHAT EACH TEST GIVES YOU (fall-risk cutoff? change over time? intervention planning?): static — **Romberg, Sharpened Romberg, Function in Sitting Test**; dynamic — **Functional Reach (standing AND seated), Berg Balance Scale, Dynamic Gait Index, Timed Up and Go, Four Square Step Test**. Selection logic: psychometrics, discriminative ability, sensitivity to change, time cost, patient cognition, space/equipment. Shirley Ryan's Rehab Measures Database is the psychometrics reference."));
k.push(detail(["Measure","Essentials"],[
 ["**FGA — Functional Gait Assessment**","10 items, 0–3 each, /30; modifies the DGI to cut its ceiling effect. Walk WITHOUT physical assistance (device allowed); stay a half-step behind — don't pace them. Equipment: stopwatch, marked walkway (12-inch width), 9-inch obstacle (two shoeboxes), steps with two rails. **≤22/30 = fall risk** (community-dwelling older adults). MDC: stroke 4.2 · vestibular 6 · Parkinson's 4 · older adults 4"],
 ["**Tinetti / POMA**","Balance (sitting → standing items, sternal nudge ×3 with feet together, eyes closed, 360° turn, sit down) + gait subscale (initiation, step length/height/symmetry/continuity, path, trunk, stance) = /28. Fall risk: **<19 high, 19–24 medium, 25–28 low**. NOT recommended by the APTA EDGE groups (ceiling effect; Sn 83%/Sp 72%) but still on boards + in clinics; best in older adults without specific neuro diagnosis"],
 ["**Mini-BESTest**","14 items, 3-level ordinal, ~10–15 min, four domains: **anticipatory** (sit-to-stand arms crossed, rise to toes 3 s, single-leg stance — best of 2 trials/side, 20 s = normal), **reactive postural control** (forward/backward/lateral lean-and-release 'trust falls' — normal = ONE large recovery step; score the worse side), **sensory orientation** (mCTSIB-style: firm/foam, eyes open/closed, incline), **dynamic gait**. Equipment: temper foam, incline ramp, armless + armed chairs, 9-inch box, stopwatch, 3 m tape"]],[2600,6760]));
k.push(tnote("Assignments: Module 11 Knowledge Check + the PhysioU Interactive Evaluation (sensory testing + outcome measures) with reflection. Skill check + practical draw directly from the starred sensory tests and these balance procedures."));
k.push(spacer());
k.push(...glossary("Module 11 Quick-Reference Glossary",[
 ["Direct vs consensual pupil response","Constriction of the lit eye vs the opposite eye"],
 ["Near triad","Convergence + accommodation + pupillary constriction for near targets"],
 ["Norm reference","Intact area (face/uninvolved side) tested first for comparison"],
 ["Intact / impaired / absent","2 / 1 / 0 on the sensory rating scale"],
 ["Tactile localization","Naming WHERE the stimulus landed — a discriminative sense"],
 ["Stocking-glove","Distal symmetric polyneuropathy distribution"],
 ["Orientation vs stability","Segment-environment relationships vs COM control over BOS"],
 ["ABC scale","16-item balance confidence; average <67% = fall-risk flag"],
 ["mCTSIB","Four-condition sensory-systems stress test (firm/foam × eyes open/closed)"],
 ["Steady-state / anticipatory / reactive","Predictable hold / feedforward preparation / feedback recovery"],
 ["Ankle / hip / stepping / reach strategies","Escalating responses to growing perturbations"],
 ["FGA","/30 gait-based balance; ≤22 = fall risk"],
 ["Tinetti (POMA)","/28 balance + gait; <19 high risk; ceiling-limited"],
 ["Mini-BESTest","14-item dynamic balance across 4 postural-control domains"],
 ["MDC","Minimal detectable change — the goal-writing number"],
 ["Intrinsic vs extrinsic fall factors","Patient-system impairments vs environmental hazards"]]));

build(k,"/home/claude/out/Module11_ImpairmentTestingPart2_StudyNotes.docx");
