const L = require('/home/claude/notes_lib.js');
const {C,h1,h2,body,bullet,tnote,tip,compare,detail,infoBox,banner,glossary,fig,pageBreak,spacer,cover,build,linkBox} = L;
const k=[];

k.push(...cover("Clinical Neuroscience (DPTH 6141)","Module 12: Impairment Testing Part 3 — Neuromotor Exam & Coordination",
 "Topics 12.1–12.3 • Reading: Fell Ch 6 (pp. 144–171, 171 Table 6-17, 177–180) · Lundy-Ekman Ch 15 (pp. 257–261, 264–268)",
 ["Watch the VOPPs in your own Canvas module — these notes condense them, they don't replace them",
  "★ The video skill check (Topic 12.3) tests six skills: LE light touch, wrist proprioception, biceps tone (slow + fast), finger-to-nose + ankle rapid alternating movements (eyes open, inter/intralimb, R+L), CN II visual fields, CN III/IV/VI H test",
  "Grading = inform → instruct → set up safely → position yourself → execute accurately (unaffected side for unilateral skills) → interpret"]));

/* ─────────────── TOPIC 12.1 ─────────────── */
k.push(banner("TOPIC 12.1","Principles of the Neuromotor Examination"));
k.push(spacer());
k.push(h1("1. The Systems Behind the Exam"));
k.push(bullet("Cortical motor trio (review): **primary motor cortex** (precentral gyrus, motor homunculus), **premotor cortex** (superior-lateral frontal — planning, activating supporting muscles), **SMA** (most anterior — complex coordinated motor programs). New vocabulary: **pyramidal system** = corticospinal + corticobulbar tracts (direct pathway from M1/premotor → anterior horn / brainstem CN nuclei): voluntary, fine, skilled movement. **Extrapyramidal system** = basal ganglia + cerebellum + reticular formation acting INDIRECTLY: posture, balance, muscle tone, movement modulation. Damage to either → motor disorder; recall negative signs (paresis/paralysis, lost selective control, low tone) vs positive signs (hypertonia, hyperreflexia, abnormal synergies, pathologic co-contraction) and the UMN vs LMN tables."));
k.push(bullet("Exam sequence: history (+ review of systems as indicated) → **systems review** (CV/pulm, integumentary, MSK, neuromuscular, communication/affect/cognition, movement) → select tests + measures from your movement analysis and hypothesized impairments. The motor exam splits into **joint range + muscle performance** (ROM, flexibility, strength, tone, fatigue/endurance) and **motor function** (motor control for movement, stability, coordination)."));
k.push(h1("2. Range, Strength, Fatigue"));
k.push(bullet("AROM first (full range against gravity? note movement QUALITY — the motor-control exam runs through everything you watch) → assist or gravity-eliminated if incomplete → PROM for joint/soft-tissue restriction (goniometer + end-feel). Strength: isometric (MMT, handheld dynamometry), isokinetic (fixed speed, equipment), isotonic (± resistance, concentric/eccentric), functional movement assessment — and **myotome testing** for SCI (more general than specific muscles). UMN caveat: traditional strength tests demand ISOLATED contraction many UMN patients can't produce — adapt. Fatigue = force decay with repeated activation (opposite of endurance); assess with isotonic/isokinetic equipment."));
k.push(h1("3. Muscle Tone Assessment ★ (skill check: biceps, slow + fast)"));
k.push(bullet("Tone = neuromuscular activity in a RESTING muscle, tested by **passive elongation slow, then fast**. Explain + demonstrate + consent → patient supported and relaxed (supine, prone, or supported sitting) → hands on bony prominences → 'relax while I move your arm slowly' → full slow range feeling for resistance → 'now quickly' → compare. The elongated muscle is the tested muscle."));
k.push(detail(["Finding","Interpretation"],[
 ["**Flaccidity**","Zero tone + areflexia + no voluntary activity: LMN lesions (anterior horn or peripheral motor fibers) — or TEMPORARY cerebral/spinal shock after a UMN lesion"],
 ["**Hypotonia**","Below-normal resistance, easier-than-normal PROM; associated with weakness: Down syndrome, partial LMN loss (polio), myasthenia gravis, muscular dystrophy, **cerebellar disorders**"],
 ["**Spasticity**","Velocity-dependent hypertonia (that's WHY we test slow then fast — the fast pass finds it). Cerebral lesions bias one side of a joint (UE flexors > extensors; LE extensors > flexors); SCI hits BOTH groups. ★ Differentiate from muscle TIGHTNESS: tightness grows near end-range regardless of speed; spasticity grows with velocity. Grade with the **Modified Ashworth Scale**: 0 none · 1 catch-and-release at end range · 1+ catch through <half the range · 2 marked through most of range but easily moved · 3 considerable, passive movement difficult · 4 rigid. (Know the Tardieu exists — Fell p. 163)"],
 ["**Rigidity**","Velocity-INdependent hypertonia, usually BOTH sides of the joint. Decerebrate/decorticate (severe brainstem/hemisphere damage) · leadpipe (smooth constant — Parkinson's) · cogwheel (repeated catch-release — Parkinson's). Quantify Parkinson's rigidity with the **UPDRS motor item**: 0 absent · 1 slight/only with activation · 2 mild-moderate · 3 marked through full range · 4 severe (five body regions)"]],[2500,6860]));
k.push(h1("4. Motor Function and Recovery"));
k.push(bullet("Motor-control-for-movement testing: active isolated movements one joint at a time (smoothness, initiation/cessation, **fractionation**, performance across speeds; document abnormal synergies) — quantify isolated range with a goniometer to track change; **task analysis** (rolling, supine→sit, sit→stand, gait, reach-and-grasp); standardized tools — this course uses the **Fugl-Meyer** (post-stroke: joint motion + pain, balance, sensation, UE/LE motor function, coordination, reflexes, synergy — the standard way to document stroke motor recovery). Stability = co-contraction control during steady weight-bearing."));
k.push(tnote("Brunnstrom recovery stages (Fell Table 16-5) track TONE and MOTOR CONTROL together: 1 flaccid, no movement → 2 spasticity emerging, weak synergy movement → 3 peak spasticity, voluntary-but-synergy-bound movement → 4 spasticity declining, movement emerging OUT of synergy → 5 further decline, mostly isolated control → 6 no spasticity, selective motor control. Useful shorthand for where a stroke patient sits and what to train next."));

k.push(pageBreak());
/* ─────────────── TOPIC 12.2 ─────────────── */
k.push(banner("TOPIC 12.2","Examination of Non-Equilibrium Coordination"));
k.push(spacer());
k.push(h1("1. Coordination and Ataxia Vocabulary (memorize — you document with THESE words)"));
k.push(bullet("Motor coordination = agonists grading ON while antagonists grade OFF — smooth, precise, controlled movement, largely cerebellum-mediated. **Ataxia/incoordination** = loss of that cooperation: muscles fight each other; force, range, and targeting go wrong. Components (mix depends on lesion site + extent): **intention tremor** (worsens approaching the target) · **dysmetria** (hypermetria overshoot / hypometria undershoot) · **dysdiadochokinesia** (impaired rapid alternating movements; a-diadochokinesia = absent) · **dyssynergia** (decomposition of movement — joints fired in sequence, not together) · **astasia** · movement decomposition + overcompensation. **Equilibrium** coordination involves postural control (Module 11); **non-equilibrium** = limb gross + fine motor, tested here."));
k.push(h1("2. Test Battery — Upper Extremity"));
k.push(detail(["Test","Procedure → looking for"],[
 ["**Finger-to-nose** ★","Seated, shoulder abducted 90°: 'touch the tip of your nose with your index finger.' Uninvolved side first; eyes open then closed; slow/normal/fast; enough reps to judge. → dysmetria, intention tremor, ataxia components"],
 ["**Alternate finger-to-nose (finger–nose–finger)**","Patient alternates nose ↔ therapist's finger (visual targeting added); vary speed, distance, direction — move your finger to test trajectory adjustment"],
 ["**Finger-to-finger**","Seated, shoulders 90° abducted; bring both index fingers together at chest level; eyes open/closed, three speeds → precision"],
 ["**Shape drawing (air)**","Draw a figure-8 or circle with the hand fixed in one position → QUALITY: symmetry, smoothness, speed (not targeting)"],
 ["**Rapid alternating movements** ★","Elbows 90°, wrist neutral: rapid supination/pronation ('palm up, palm down fast') — or wrist flex/ext, finger flex/ext, opposition. **Intralimb** (within one arm) and **interlimb** (arms alternating opposite positions, flipping together). Eyes open/closed, speeds → dys-/a-diadochokinesia"]],[2700,6660]));
k.push(h1("3. Test Battery — Lower Extremity"));
k.push(detail(["Test","Procedure → looking for"],[
 ["**Toe-to-finger**","Supine; touch the therapist's finger with the great toe; reps, speeds, eyes open/closed → precision, dysmetria, intention tremor"],
 ["**Heel-to-shin**","Sitting supported or supine: heel on the contralateral ankle, slide up the tibia to the knee and back down. → path consistency, heel stays on the shin, dysmetria, tremor"],
 ["**Shape drawing (air)**","Figure-8/circle with the foot, toes fixed → symmetry, smoothness, speed"],
 ["**Foot tapping** ★","Seated, hips/knees 90°, heel stays on the floor, tap toes up and down as fast as possible (DF/PF). Intralimb AND interlimb (alternating feet); eyes open/closed, speeds → dys-/a-diadochokinesia"]],[2700,6660]));
k.push(tip("Universal coordination rules: test the uninvolved side FIRST, always test both sides and compare, vary vision and speed, and collect enough repetitions before judging. Document with the ataxia vocabulary — 'clumsy' is not a finding; 'hypermetria with intention tremor on finger-to-nose, worse eyes-closed' is."));

k.push(pageBreak());
/* ─────────────── TOPIC 12.3 + STUDY ─────────────── */
k.push(banner("TOPIC 12.3","Video Skill Check + Reading Map"));
k.push(spacer());
k.push(h1("1. The Six Video Skills"));
k.push(bullet("1 **Sensory — light touch, lower extremity** · 2 **Sensory — proprioception, wrist** · 3 **Muscle tone — biceps, slow AND fast** · 4 **Coordination, eyes open — finger-to-nose (slow + fast, R + L) AND ankle DF/PF rapid alternating movements (slow + fast, interlimb + intralimb)** · 5 **CN II visual fields, R + L** · 6 **CN III/IV/VI H test, both eyes**. Rubric: inform the patient (what's tested, what they'll feel, adverse possibilities) → proper instructions → safe patient setup → your own positioning → accurate execution (unaffected side for unilateral skills) → interpretation. Rehearse the scripts from Modules 11 and 12 word-for-word."));
k.push(h1("2. Reading Map"));
k.push(detail(["Topic","Source"],[
 ["12.1 Neuromotor exam","Fell Ch 6, pp. 144–149 (foundations) + 149–171 (procedures)"],
 ["12.2 Coordination","Fell Ch 6, p. 171 Table 6-17 + pp. 177–180 · Lundy-Ekman Ch 15 (cerebellum), pp. 257–261 + 264–268 · Ch 21 brainstem reference pp. 672–696"],
 ["Assessment","Module 12 Knowledge Check + the video skill check"]],[2600,6760]));
k.push(spacer());
k.push(...glossary("Module 12 Quick-Reference Glossary",[
 ["Pyramidal system","Corticospinal + corticobulbar — direct, voluntary, skilled movement"],
 ["Extrapyramidal system","Basal ganglia, cerebellum, reticular formation — posture, tone, modulation"],
 ["Muscle tone","Resting neuromuscular activity, tested by slow-then-fast passive elongation"],
 ["Flaccidity vs hypotonia","No tone + areflexia + no voluntary activity vs below-normal resistance"],
 ["Spasticity vs tightness","Velocity-dependent resistance vs end-range resistance at any speed"],
 ["Modified Ashworth Scale","0 / 1 / 1+ / 2 / 3 / 4 spasticity grading — this course's tool"],
 ["UPDRS (rigidity item)","0–4 Parkinson's rigidity quantification"],
 ["Leadpipe / cogwheel","Constant vs catch-release rigidity (both Parkinson's)"],
 ["Fractionation / selective motor control","Isolating single-joint, single-muscle movement"],
 ["Brunnstrom stages 1–6","Flaccid → synergy-bound → out-of-synergy → selective control"],
 ["Fugl-Meyer","Standardized post-stroke motor recovery assessment"],
 ["Ataxia","Incoordination: agonist/antagonist cooperation lost (cerebellar)"],
 ["Dysmetria (hyper-/hypometria)","Overshooting / undershooting a target"],
 ["Dysdiadochokinesia","Impaired rapid alternating movements (a- = absent)"],
 ["Dyssynergia / decomposition","Movement broken into sequential single-joint pieces"],
 ["Intention tremor","Tremor that grows as the target nears"],
 ["Intralimb vs interlimb","Coordination within one limb vs between limbs"],
 ["Non-equilibrium coordination","Limb gross/fine coordination without a balance component"]]));

build(k,"/home/claude/out/Module12_NeuromotorExamAndCoordination_StudyNotes.docx");
