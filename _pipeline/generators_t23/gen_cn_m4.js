const L = require('/home/claude/notes_lib.js');
const {C,h1,h2,body,bullet,tnote,tip,compare,detail,infoBox,banner,glossary,fig,pageBreak,spacer,cover,build,linkBox} = L;
const k=[];

k.push(...cover("Clinical Neuroscience (DPTH 6141)","Module 4: Motor Systems",
 "Topics 4.1–4.2 • Lower motor neurons, descending tracts, UMN syndrome • Reading: Lundy-Ekman Ch 13 (pp. 207–208, 211–223) + Ch 14 (pp. 224–231, 233–239, 242–245)",
 ["Watch the VOPPs in your own Canvas module — these notes condense them, they don't replace them",
  "★ The two exam skills: name each descending tract's origin, crossing, termination, and function — and sort ANY sign into UMN vs LMN, gain vs loss of function",
  "The 'Name that Motor Pathway' worksheets in the course folder are the drill"]));

/* ─────────────── TOPIC 4.1: LMN ─────────────── */
k.push(banner("TOPIC 4.1","Motor System Overview and Lower Motor Neurons"));
k.push(spacer());
k.push(h1("1. Top-Down Architecture"));
k.push(bullet("A movement's chain of command: decision (anterior frontal lobe) → motor planning areas + **control circuits** (cerebellum + basal ganglia, which regulate UMN activity) → **upper motor neurons** (somas in cortex/brainstem, axons projecting to the cord) → spinal interneurons → **lower motor neurons** → skeletal muscle. The LMN is the **final common path** — the only route from CNS to muscle."));
k.push(h1("2. Lower Motor Neurons"));
k.push(bullet("Somas in the **anterior (ventral) horn**; axons exit via the **ventral root**; communicate with muscle at the **neuromuscular junction** (ACh released at every junction of the unit). Organized into **motor neuron pools** by position: **medial pools → axial/proximal** muscles · **lateral → distal** · **anterior → extensors** · **posterior → flexors**."));
k.push(bullet("**Myotome** = muscles primarily innervated by ONE spinal nerve, segmentally organized (C5 → elbow flexion) — the clinical tool for detecting level-specific weakness. **Motor unit** = one alpha motor neuron + all fibers it innervates; **slow-twitch (type I)** = endurance/posture, **fast-twitch (type II)** = brief high-intensity bursts."));
k.push(compare("ALPHA motor neurons","GAMMA motor neurons",
 ["Large somas, large myelinated axons",
  "Innervate **EXTRAfusal** fibers — the force producers",
  "Drive gross voluntary movement (lifting, walking, running)"],
 ["Medium myelinated axons",
  "Innervate **INTRAfusal** fibers inside muscle spindles",
  "Tune spindle sensitivity so length feedback stays accurate DURING contraction. **Alpha-gamma coactivation** fires both together — tone, joint stability, honest proprioception"],
 C.blue,C.teal,C.lightBlue,C.lightTeal));
k.push(h1("3. The Cord's Own Coordination Toolkit"));
k.push(detail(["Mechanism","What it does"],[
 ["**Reciprocal inhibition**","Agonist activation + simultaneous inhibitory signal to the antagonist through the LMNs (biceps flexes, triceps stands down) → smooth, non-fighting movement"],
 ["**Muscle synergies**","Pre-packaged coordinated activation patterns — the CNS's compression trick for everyday movement (reach-and-grasp, gait)"],
 ["**Proprioceptive input**","Spindles + GTOs + joint/ligament receptors feed a running **body schema** — a proprioceptive model of the body in time and space for planning + adapting"],
 ["**Stepping (central) pattern generators**","Adaptable spinal interneuron networks producing rhythmic alternating flexion-extension — basic locomotion WITHOUT cortical input; sensory feedback fine-tunes; the brain modulates speed/terrain adaptation"]],[3000,6360]));
k.push(bullet("**Spinal reflexes** — involuntary responses to stimuli (receptor → afferent → synapse(s) → efferent → effector): **phasic stretch reflex** (contraction on quick stretch — your DTR hammer; works without brain input, but its gain reflects the state of the whole nervous system) and **withdrawal reflex** (cutaneous/noxious stimulus → automatic limb withdrawal; circuitry entirely spinal)."));
k.push(h1("4. Muscle Tissue Behavior"));
k.push(bullet("**Contracture** — shortening/stiffening of muscle + connective tissue, most commonly from prolonged immobilization in a shortened position: connective tissue thickens and loses elasticity, and **sarcomeres are deleted** from myofibril ends (immobilize lengthened → sarcomeres are ADDED). Result: lost ROM + joint stiffness."));
k.push(detail(["Involuntary contraction","Character"],[
 ["**Muscle cramp**","Severe painful contraction, seconds to minutes; can be benign"],
 ["**Fasciculation**","Quick twitch of ALL fibers of one motor unit — visible on the skin (eyelid twitch); occasionally normal, can signal pathology"],
 ["**Myoclonus**","Brief jerk of a muscle/group — hiccups, sleep starts"],
 ["**Tremor**","Rhythmic involuntary movement. **Resting** (visible at rest, ↓ with movement) vs **action**: postural (holding against gravity), orthostatic (standing, LE), intention (absent at rest, worsens approaching a target). **Essential tremor** = postural + intention, mainly head + hands. Exacerbated by anxiety, fatigue, caffeine, meds, withdrawal"],
 ["**Fibrillation**","Random contraction of SINGLE fibers — invisible, EMG-only, **ALWAYS pathologic**"]],[2600,6760]));
k.push(h1("5. LMN Lesions"));
k.push(bullet("Causes: trauma, Guillain-Barré (demyelination), polio (infection), diabetic neuropathy, degenerative/vascular disease, tumor. The five signs: **↓/absent reflexes** (efferent limb cut), **paresis/paralysis** (the only path to muscle is damaged), **atrophy** (neurogenic — vs disuse), **hypotonia or flaccidity**, **fibrillations**."));
k.push(bullet("**Electrodiagnostics:** nerve conduction studies localize the problem to **nerve vs NMJ vs muscle** (stimulate skin over nerve, record over muscle). **EMG** (surface or needle) distinguishes denervated muscle from **myopathy**, recorded in four conditions: insertion, rest, minimal and maximal voluntary contraction."));
k.push(bullet("**Polio** — virus selectively kills LMN cell bodies → denervated fibers. Recovery = **collateral sprouting**: survivors adopt orphaned fibers. **Post-polio syndrome**, decades later — NOT viral reactivation: the overextended survivors can't sustain their enlarged units and branches die back → progressive weakness in previously affected muscles, fatigue after activity, muscle + joint pain (overuse), atrophy, breathing problems."));

k.push(pageBreak());
/* ─────────────── TOPIC 4.2: DESCENDING TRACTS ─────────────── */
k.push(banner("TOPIC 4.2","Upper Motor Neurons and the Descending Motor Tracts"));
k.push(spacer());
k.push(h1("1. Cortical Motor Areas and Brainstem Landmarks"));
k.push(bullet("**Primary motor cortex** — precentral gyrus, frontal lobe; precise, predominantly contralateral control; somatotopic **motor homunculus** (lateral → medial: **FAT legs** — Face, Arm, Trunk, legs diving medially; hands + face oversized). **Premotor area** — lateral frontal surface; prepares movement, drives multi-joint activity. **SMA** — superior/medial surface; pre-activates for bimanual coordination."));
k.push(bullet("Anterior brainstem landmarks to know: **pyramids** (anterior inferior medulla ridges = the corticospinal tracts), **pyramidal decussation** (where most corticospinal fibers cross), **olive** (medulla ↔ cerebellum relay for fine-tuning + motor learning), **cerebral peduncles** (midbrain fiber bundles carrying ascending AND descending traffic)."));
k.push(h1("2. The Tract Table ★ (origin → crossing → termination → function)"));
k.push(detail(["Tract","Origin / route / function"],[
 ["**Reticulospinal** (medial)","Reticular formation (brainstem) → descends ipsilaterally + bilaterally → anterior horn, many levels. **Posture + gross limb movement**: anticipatory postural control, muscle SYNERGIES (gait — trunk + all four limbs; reach-and-grasp). No selective control — it speaks to muscle groups"],
 ["**Medial vestibulospinal** (medial)","Medial + inferior vestibular nuclei (medulla) → splits, descends BILATERALLY → cervical + thoracic cord. Stabilizes **head and neck** against vestibular input"],
 ["**Lateral vestibulospinal** (medial group)","Lateral vestibular nucleus (medulla) → descends IPSILATERALLY the whole cord. **Facilitates ipsilateral extensors, inhibits flexors** — anti-gravity posture, keeping center of gravity in the base of support"],
 ["**Medial (anterior/ventral) corticospinal** (medial)","Primary motor cortex + planning areas → internal capsule → anterior brainstem → ipsi-, contra-, and bilateral projections → cervical + upper thoracic cord. **Voluntary control of neck, shoulder, trunk**"],
 ["**Lateral corticospinal** (lateral) ★","Primary motor cortex + planning areas → internal capsule → cerebral peduncles → anterior pons → medullary pyramids → **~88% DECUSSATE at the pyramids** → lateral cord, synapsing at every level (the uncrossed 10–20% descend in the medial corticospinal tract to cervical/thoracic cord). **SELECTIVE MOTOR CONTROL** — activating individual muscles independently; the most important voluntary-movement pathway"],
 ["**Corticobrainstem (corticobulbar)**","Cortex motor areas → cranial nerve nuclei in the brainstem. Voluntary control of face, tongue, pharynx, larynx, trapezius, SCM"],
 ["**Nonspecific UMNs**","Background cord excitation, facilitate reflex arcs; fire with intense emotion — one reason performance degrades under high anxiety"]],[2700,6660]));
k.push(tip("Medial tracts = posture and proximal/gross control, often automatic and bilateral. The lateral corticospinal tract = distal selective control, crossed. Every UMN-syndrome sign below falls out of which of these is lost."));

k.push(pageBreak());
/* ─────────────── UMN SYNDROME ─────────────── */
k.push(banner("TOPIC 4.2 (cont.)","Upper Motor Neuron Syndrome"));
k.push(spacer());
k.push(bullet("**UMN syndrome** (= UMN lesion, UMN signs): damage to upper motor neurons — stroke, SCI, TBI, anoxia, abnormal development, ALS, tumor, infection, inflammatory or metabolic disorders. Presentation splits into **loss-of-function** and **gain-of-function** signs; mix depends on lesion site + extent."));
k.push(h1("1. Loss-of-Function Signs"));
k.push(detail(["Sign","Description"],[
 ["**Paresis / paralysis**","Partial weakness / complete loss of voluntary contraction. Distribution words: **hemiplegia** (one side), **paraplegia** (below the arms), **tetraplegia** (= quadriplegia, all four limbs)"],
 ["**Loss of selective motor control**","Lateral corticospinal interruption — the ONLY tract synapsing onto single muscles. Distal function suffers most: no isolated wrist/finger extension, digits move as a block (buttons, zippers, typing gone); LE: no isolated dorsiflexion → gait breaks down"],
 ["**Hypotonia / flaccidity (acute phase)**","In **spinal shock** (after SCI) or **cerebral shock** (after stroke/TBI), edema temporarily silences descending drive: stretch reflexes unelicitable, muscles hypotonic. When shock resolves, LMNs resume — now UNmodulated — and tone typically climbs"]],[2900,6460]));
k.push(h1("2. Muscle Tone — the Continuum"));
k.push(bullet("**Tone** = resistance to stretch in a resting muscle, assessed by passive ROM. Continuum: **flaccid** (none) → **hypotonic** (abnormally low — LMN lesions, developmental disorders like hypotonic CP/'floppy infant', severe spina bifida, CNS shock) → normal (minimal passive resistance) → **hypertonic**: **spasticity** (velocity-DEPENDENT) and **rigidity** (velocity-INdependent). Lundy-Ekman Table 14.1 summarizes it."));
k.push(h1("3. Gain-of-Function Signs"));
k.push(detail(["Sign","Description"],[
 ["**Spasticity**","Velocity-dependent resistance — slow stretch ≈ low resistance, quick stretch = strong resistance (so TEST with fast passive movement). Two engines: (1) neural — lost descending inhibition disinhibits spinal reflexes → hyperexcitable alpha pool; (2) **myoplasticity** — tissue adaptation: more weak actin-myosin bonds, disuse atrophy, contracture (sarcomere loss + stiffer connective tissue). CP, stroke, MS"],
 ["**Abnormal synergies**","Stereotyped mass patterns from reticulospinal drive without corticospinal selectivity — e.g., UE flexion synergy: ask for shoulder flexion, get shoulder flexion WITH elbow flexion instead of elbow/finger extension. Know the UE + LE flexion and extension synergy tables (starred = dominant components)"],
 ["**Rigidity**","Velocity-independent stiffness. **Leadpipe** — constant uniform resistance (Parkinson's hallmark) · **cogwheel** — ratchety, jerky catches (Parkinson's) · **decerebrate** — UE + LE EXTENDED (arms IR + pronated, ankles plantarflexed, jaw clenched): midbrain/pons damage, worse prognosis · **decorticate** — UE FLEXED to the chest, LE extended: cerebral-hemisphere/superior-midbrain damage, somewhat better prognosis"],
 ["**Hyperreflexia + abnormal reflexes**","**Babinski**: stroke lateral sole heel→toes; normal (negative) = toes curl; POSITIVE = great-toe extension + fanning → corticospinal damage (normal only under ~age 2). **Clonus**: rhythmic alternating contractions on quick stretch (classically the ankle); **sustained >5 beats = always pathologic**. **Clasp-knife**: sudden resistance then sudden release during passive movement (type II afferent mediated)"],
 ["**Co-contraction gone wrong**","Simultaneous agonist + antagonist firing is normal when it serves the goal (standing, gait). **Compensatory** co-contraction = stiffening to mask weakness; **pathologic** co-contraction = defeats the movement goal"]],[2700,6660]));
k.push(h1("4. ALS — UMN and LMN Signs Together"));
k.push(bullet("Amyotrophic lateral sclerosis (Lou Gehrig's disease): progressive, fatal degeneration of **BOTH upper and lower motor neurons** — the textbook example of mixed signs. **UMN side:** paresis, hyperreflexia, positive Babinski, spasticity. **LMN side:** paresis, hyporeflexia, hypotonia, atrophy, **fasciculations + fibrillations**. Cranial nerves join in (swallowing, speech, head control), emotional lability (uncontrollable laughing/crying), and respiratory muscle failure — the usual cause of death. Average survival 2–3 years post-diagnosis (Stephen Hawking's 55 years was extraordinary)."));
k.push(tnote("Sorting drill you should be able to do cold — reflexes: UMN hyper, LMN hypo. Tone: UMN spastic (after shock resolves), LMN flaccid/hypotonic. Atrophy: LMN severe + early (neurogenic), UMN mild (disuse). Twitches: fasciculations/fibrillations = LMN. Babinski + clonus = UMN. ALS = both columns at once."));

k.push(pageBreak());
/* ─────────────── STUDY ─────────────── */
k.push(banner("MODULE 4","Reading Map and Glossary"));
k.push(spacer());
k.push(h1("1. Reading and Resources"));
k.push(detail(["Topic","Source"],[
 ["4.1 LMNs + spinal motor function","Lundy-Ekman Ch 13, pp. 207–208 + 211–223"],
 ["4.2 UMNs + descending tracts","Lundy-Ekman Ch 14, pp. 224–231"],
 ["4.2 UMN syndrome","Lundy-Ekman Ch 14, pp. 233–239 + 242–245"],
 ["Interactive","PhysioU: Learn by Tract — Descending Tracts · UBC activities · 'Name that Motor Pathway' worksheets 1–3 (course folder)"]],[2600,6760]));
k.push(tnote("Assignment: Module 4 Knowledge Check. The sync session drilled tract identification from lesion vignettes — practice the direction sign→tract, not just tract→function."));
k.push(spacer());
k.push(...glossary("Module 4 Quick-Reference Glossary",[
 ["Motor unit","One alpha motor neuron + every fiber it innervates"],
 ["Alpha / gamma motor neurons","Extrafusal force fibers / intrafusal spindle-tuning fibers"],
 ["Alpha-gamma coactivation","Simultaneous firing keeping spindle feedback accurate during contraction"],
 ["Motor neuron pools","Medial=axial · lateral=distal · anterior=extensors · posterior=flexors"],
 ["Myotome","Muscles innervated primarily by one spinal nerve (C5 → elbow flexion)"],
 ["Reciprocal inhibition","Agonist contracts while its antagonist is reflexively inhibited"],
 ["Central (stepping) pattern generator","Spinal network producing rhythmic locomotion without cortical input"],
 ["Contracture","Immobilization-shortened muscle: sarcomere deletion + stiffened connective tissue"],
 ["Fasciculation / fibrillation","Whole-motor-unit twitch (visible) / single-fiber twitch (EMG-only, always pathologic)"],
 ["Pyramidal decussation","Medullary crossing point of ~88% of corticospinal fibers"],
 ["Selective motor control","Activating single muscles independently — lateral corticospinal exclusive"],
 ["Spinal / cerebral shock","Temporary post-lesion silence of reflexes + tone from edema; tone then rises"],
 ["Spasticity / rigidity","Velocity-dependent / velocity-independent hypertonia"],
 ["Myoplasticity","Muscle-tissue adaptation (weak cross-bridges, atrophy, contracture) feeding spasticity"],
 ["Leadpipe / cogwheel rigidity","Uniform vs ratchety resistance — both Parkinson's"],
 ["Decerebrate / decorticate","All-extended (midbrain/pons; worse) vs UE-flexed (hemispheres; better)"],
 ["Babinski sign","Great-toe extension + fanning on plantar stroke = corticospinal lesion"],
 ["Clonus","Rhythmic stretch-triggered oscillation; >5 beats always pathologic"],
 ["Clasp-knife response","Sudden give after initial resistance in passive movement"],
 ["ALS","Progressive fatal UMN + LMN degeneration; respiratory failure; ~2–3 yr survival"]]));

build(k,"/home/claude/out/Module4_MotorSystems_StudyNotes.docx");
