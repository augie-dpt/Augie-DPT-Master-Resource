const L = require('/home/claude/notes_lib.js');
const {C,h1,h2,body,bullet,tnote,tip,compare,detail,infoBox,banner,glossary,fig,pageBreak,spacer,cover,build,linkBox} = L;
const k=[];

k.push(...cover("Clinical Neuroscience (DPTH 6141)","Module 3: Somatosensory Systems",
 "Topics 3.1–3.2 • Lectures by Dr. Lindsay Perry • Reading: Lundy-Ekman Ch 9, 10, 11",
 ["Watch the VOPPs in your own Canvas module — these notes condense them, they don't replace them",
  "★ The skill this module builds: draw the DCML and spinothalamic tracts through cord cross-sections — begin, synapse, cross, terminate — then predict deficits from any lesion point",
  "The ANS half decides your systems review; the tracts half decides your sensory exam"]));

/* ─────────────── TOPIC 3.1: ANS ─────────────── */
k.push(banner("TOPIC 3.1","Autonomic Nervous System and Disorders"));
k.push(spacer());
k.push(h1("1. What the ANS Does"));
k.push(bullet("**Homeostasis** = maintenance of an optimal internal environment (temperature, tissue/fluid chemistry). The ANS regulates homeostasis, reproduction, and the activity of internal organs and vasculature — circulation, respiration, digestion, metabolism, secretions, body temperature — mostly **below consciousness**."));
k.push(bullet("Four receptor types feed it: **mechanoreceptors** (stretch, pressure), **chemoreceptors** (chemical concentrations), **nociceptors** (stretch + ischemia — visceral pain), **thermoreceptors** (small temperature changes, inside and out)."));
k.push(h1("2. Afferent Side (one neuron)"));
k.push(bullet("Visceral afferents enter the CNS two ways: **dorsal roots → spinal cord**, or **cranial nerves → brainstem** — **CN IX glossopharyngeal** (chemoreceptors + pressure receptors, e.g., carotid sinus) and **CN X vagus** (larynx + thoracic/abdominal viscera). Brainstem visceral afferents converge on the **solitary nucleus**. Cord-entering visceral afferents synapse with visceral efferents AND with neurons ascending to brainstem, hypothalamus, thalamus."));
k.push(bullet("**Visceral pain is real pain**: tissue damage (or threat of it) fires visceral nociceptors; their connections with somatosensory nociceptive afferents produce **referred pain**, and connections with somatic efferents produce **muscle guarding**. Worked example — appendicitis: appendix nociceptors → T10 cord segment → visceral control areas; convergence with somatic afferents = referred pain; sympathetic efferents inhibit peristalsis while somatic efferents contract the abdominal wall."));
k.push(h1("3. Central Regulation: Control vs Modulation"));
k.push(compare("CONTROL — medulla + pons","MODULATE — diencephalon + emotion system",
 ["Vital functions: heart rate, respiration, vasoconstriction/vasodilation (pons shares respiration)",
  "Involuntary; efferent signals via cord + vagus",
  "Worked example — low blood O2: peripheral chemoreceptors → solitary nucleus → medullary neurons adjust depth + rate of breathing"],
 ["**Hypothalamus** acts on the pituitary + brainstem/cord control centers; **thalamus** relays visceral afferents onward",
  "**Emotion/motivation system (anterior insula + amygdala)** — emotions drive autonomic output: anxiety → ↑HR, embarrassment → blushing, involuntary crying"],
 C.blue,C.teal,C.lightBlue,C.lightTeal));
k.push(h1("4. Efferent Side: Somatic vs Autonomic, Sympathetic vs Parasympathetic"));
k.push(compare("SOMATIC efferent","AUTONOMIC efferent",
 ["Target: skeletal muscle",
  "Conscious, voluntary (plus somatic reflexes)",
  "**ONE-neuron** pathway out of the CNS, myelinated"],
 ["Target: organs, glands, vessels",
  "Non-conscious; also regulated by hormones; some organs run without CNS input (heart, enteric nervous system)",
  "**TWO-neuron** pathway — **preganglionic** (CNS → ganglion) synapses with **postganglionic** (ganglion → effector) OUTSIDE the CNS; transmitters: ACh, norepinephrine, epinephrine"],
 C.blue,C.teal,C.lightBlue,C.lightTeal));
k.push(detail(["System","Anatomy and function"],[
 ["**Sympathetic — thoracolumbar outflow**","Preganglionics exit the **lateral horn, T1–L2**. Cervical paravertebral ganglia (superior, middle, cervicothoracic/stellate — the last a fusion of inferior cervical + T1 ganglia) are fed by ascending upper-thoracic preganglionics: superior + stellate → facial arteries, **pupil dilation, eyelid elevation**; cervical/thoracic ganglia → heart + UE vessels; lower lumbar/sacral ganglia → LE vessels; thoracic + lumbosacral chains → abdominal/pelvic organs. **Adrenal medulla gets a DIRECT preganglionic connection** and dumps NE + epinephrine into the blood. Jobs: optimize organ blood flow, regulate temperature + metabolic rate; overactivity → vasoconstriction of skin/gut redirecting blood to skeletal muscle"],
 ["**Parasympathetic — craniosacral outflow**","Preganglionic cell bodies in the **brainstem + sacral cord**; ganglia are separate (not chained), sitting near or IN the target. Travels **CN III, VII, IX, X** — the vagus alone carries ~75% of parasympathetic outflow (viscera); sacral fibers run bowel, bladder, genitalia. Jobs: ↓cardiac activity, digestion, secretions (lungs, eyes, mouth), lens convexity + pupil constriction, voiding, erection/lubrication — **conserve and store energy (rest-and-digest)**"]],[2700,6660]));
k.push(tnote("Freeze = BOTH systems co-activated. Fight-or-flight = sympathetic up, parasympathetic down: vasoconstriction of skin + gut, ↑blood glucose, bronchi + coronary vessels dilate, ↑BP + HR, digestion suppressed. At homeostasis the systems are SYNERGISTIC, not opponents (pre-exercise: sympathetic drive rises while parasympathetic drops — a coordinated handoff). Unopposed functions exist on both sides: sympathetic alone runs limb/face/body effectors; parasympathetic alone rounds the lens."));
k.push(h1("5. ANS Dysfunction — What You'll See in Clinic"));
k.push(detail(["Presentation","Story"],[
 ["**Horner's syndrome**","Ipsilateral drooping eyelid (ptosis), constricted pupil, vasodilated skin, little/no sweating — a SYMPATHETIC failure; lesion in the cervical sympathetic chain (ischemia, trauma, tumor)"],
 ["**Trophic changes**","Red, shiny, thick skin; hair loss; temperature + elasticity changes. Common in peripheral nerve injury, PVD, neuropathy, **complex regional pain syndrome**; also possible after TBI/CVA"],
 ["**Autonomic dysreflexia**","SCI at **T6 or above** + noxious stimulus below the lesion → sympathetic overreaction → surging BP — a **medical emergency**. Full treatment in the spinal region module + Neuro 2"],
 ["**Brainstem lesions**","Vital-function loss (BP, HR, respiration); vagus involvement → widespread visceral/homeostasis failure"],
 ["**Hypothalamus / emotion-system lesions**","Metabolism problems (obesity, anorexia), temperature dysregulation, mood/emotion dysregulation"],
 ["**Orthostatic hypotension**","Can be an ANS problem, not a cardiac one: SCI (descending medullary signals to sympathetic preganglionics interrupted), Parkinson's (sympathetic degeneration), peripheral neuropathy (cord-to-vessel signals), TBI dysautonomia (abnormal exercise responses). Monitor vitals in exam AND treatment"],
 ["**POTS**","Postural orthostatic tachycardia syndrome — genuine autonomic dysfunction, often mislabeled anxiety: lightheadedness, fatigue, headache, palpitations, nausea, cognitive difficulty; **HR rises >30 bpm on position change WITHOUT orthostatic hypotension** and without another explanation"],
 ["**Syncope**","Three causes: neural-reflexive (**vasovagal** — vasodilation + HR drop), orthostatic hypotension (screen after prolonged bed rest!), cardiac (arrhythmia, structural)"]],[2700,6660]));
k.push(bullet("Screen the ANS in your systems review: observation + questions (eyelid droop? orthostatic complaints? sweating changes? bowel/bladder?). ANS findings can redirect your whole differential."));

k.push(pageBreak());
/* ─────────────── TOPIC 3.2a: PERIPHERAL ─────────────── */
k.push(banner("TOPIC 3.2","Peripheral Somatosensory System"));
k.push(spacer());
k.push(h1("1. The Three-Neuron Frame"));
k.push(bullet("**1st-order neuron**: receptor → spinal cord. **2nd-order**: cord → brainstem/thalamus. **3rd-order**: thalamus → cortex. Information reaching thalamus + cortex is **consciously perceived**; much sensory input is used **nonconsciously** (spinal level, cerebellum) to shape movement. This lecture = the 1st-order neuron."));
k.push(bullet("The 1st-order neuron is **pseudounipolar**: distal axon (receptor → **T-junction**), soma parked in the **dorsal root ganglion**, proximal axon (T-junction → cord). Signals normally bypass the soma at the T-junction."));
k.push(h1("2. Receptors"));
k.push(detail(["Receptor","Detects"],[
 ["**Mechanoreceptors (end-organs)** — discriminative touch","**Merkel + Ruffini** — stretch and pressure · **hair follicle + Meissner** — movement · **Pacinian corpuscle** — vibration. End-organs localize light/discriminative touch"],
 ["**Free nerve endings**","Pain, temperature, itch (**crude touch**); near the epidermis — why superficial burns hurt so much. Chemoreceptors (injury chemicals) + thermoreceptors are free nerve endings"],
 ["**Response modes**","**Tonic** — fires the whole time the stimulus is present · **phasic** — fires only on CHANGE"]],[2900,6460]));
k.push(bullet("**Receptive field** = skin area served by one afferent neuron. Distal skin (fingertips): small, dense fields → fine **two-point discrimination**. Proximal skin (trunk): large, sparse fields → two points feel like one. Incoming information is filtered by descending + local inhibition to prevent overload."));
k.push(h1("3. Afferent Classification — Diameter Is Destiny"));
k.push(bullet("Musculoskeletal afferents, declining diameter: **Ia, Ib, II, III, IV**. Cutaneous: **Aβ, Aδ, C**. Bigger diameter + myelin = faster conduction (less resistance + saltatory jumps). Clinical corollary: with compression or cold, **large axons fail FIRST** and small (pain) axons **recover first** — the burning/tingling sequence when your foot wakes up, and the sensations to warn patients about with cold modalities."));
k.push(h1("4. Proprioceptors — Redundant on Purpose"));
k.push(detail(["Structure","Function"],[
 ["**Muscle spindle**","Fusiform capsule of **intrafusal fibers** IN the muscle — sensation, not force: length + rate of change. **Ia** afferent = phasic (max discharge on quick stretch); **II** = tonic (proportional to stretch amount)"],
 ["**Golgi tendon organ**","In collagen near the musculotendinous junction; exquisitely sensitive to TENSION from active contraction or passive stretch; signals via **Ib**"],
 ["**Joint receptors**","Throughout capsule + ligaments: **Ruffini endings** (tonic — extreme end-range), **paciniform corpuscles** (phasic — movement), **ligament receptors** (tension, GTO-like), **free nerve endings** (pain; fired by inflammation)"]],[2600,6760]));
k.push(bullet("Normal proprioception draws on spindles + joint receptors + cutaneous mechanoreceptors at once. The redundancy is why total-hip-replacement patients keep good hip proprioception after losing their joint receptors. Measured as **static proprioception** and **kinesthesia** (movement sense)."));
k.push(h1("5. Peripheral Nerve vs Dermatome — the Localizing Question"));
k.push(compare("PERIPHERAL NERVE lesion","DORSAL ROOT lesion (radiculopathy)",
 ["Loss follows the NERVE's distribution (e.g., median nerve cut proximal to the wrist → median territory of the hand)",
  "Sensory changes + motor + reflex loss along that nerve; complete severance = complete loss in the distribution"],
 ["Loss follows the DERMATOME — the skin area entering the cord through ONE dorsal root (several peripheral nerves' fibers merge into it)",
  "Dermatomal pattern rules in radiculopathy or names the cord level. Trunk has NO peripheral-vs-dermatomal distinction. Maps vary between people (dotted lines = overlap)"],
 C.blue,C.teal,C.lightBlue,C.lightTeal));
k.push(bullet("**Neuropathy** (one nerve or poly-): GAIN of function (hypersensitivity, spontaneous pain) or LOSS (partial — diabetes, repetitive trauma; complete — severance). **Nociceptors change after injury**: silent nociceptors wake up and fire spontaneously; **peripheral sensitization** (nociplastic) — more action potentials per stimulus + stronger synapses = amplified messages to the CNS. **Nerve conduction velocity testing** measures axon + myelin integrity (latency, amplitude, velocity) — the right test for peripheral nerve injury."));
k.push(bullet("**Sensory ataxia** — incoordination NOT from weakness, one of three ataxias (cerebellar, vestibular, sensory). Lesions of peripheral sensory nerves, dorsal roots, or central somatosensory neurons. Impaired vibration + conscious proprioception (intact in cerebellar ataxia); balance collapses with narrowed base, darkness, or **eyes closed — the Romberg test separates sensory from cerebellar ataxia**. Think postural-control problem, not the flailing dysmetria of cerebellar ataxia."));

k.push(pageBreak());
/* ─────────────── TOPIC 3.2b: CENTRAL ─────────────── */
k.push(banner("TOPIC 3.2 (cont.)","Central Somatosensory System — DCML and Spinothalamic"));
k.push(spacer());
k.push(h1("1. Vocabulary and the Pathway Families"));
k.push(bullet("**Sensory information** = the impulse traveling the neurons. **Sensation** = awareness of the stimulus. **Perception** = interpretation into meaning (requires attention; brain-body-environment interaction). Tract names read **origin → termination of the 2nd-order neuron**: spino-thalamic = cord → thalamus."));
k.push(detail(["Family","Character"],[
 ["**Conscious relay pathways**","High-accuracy, somatotopically arranged, to the cortex: light touch, proprioception, fast nociception, temperature — WHAT YOUR SENSORY EXAM TESTS. The two stars: DCML + spinothalamic"],
 ["**Divergent pathways**","Not somatotopic; consciously AND nonconsciously used; to many brain areas (motor planning, alertness, emotion). Carry slow nociception"],
 ["**Nonconscious relay pathways**","Movement-related info to the **cerebellum** (spinocerebellar) — never perceived; drives automatic postural + movement corrections (the cerebellum = error-detection/correction center)"]],[2700,6660]));
k.push(h1("2. DCML — Light Touch, Conscious Proprioception, Vibration ★"));
k.push(detail(["Neuron","Route"],[
 ["**1st order**","Receptor → dorsal root ganglion → enters cord → **ascends IPSILATERALLY in the dorsal column** to the caudal medulla. Lower limb medial in the **fasciculus gracilis**; upper limb/trunk lateral in the **fasciculus cuneatus**"],
 ["**2nd order**","Synapse in **nucleus gracilis / nucleus cuneatus** (medulla) → **DECUSSATES** → ascends contralaterally as the **medial lemniscus** to the thalamus"],
 ["**3rd order**","**VPL nucleus of thalamus** → thalamocortical radiations (part of the internal capsule) → **primary somatosensory cortex, postcentral gyrus** (somatotopic homunculus — fingers + lips oversized because receptor density + use are high). Secondary somatosensory cortex (just posterior) adds stereognosis + tactile/spatial memory"]],[2150,7210]));
k.push(h1("3. Spinothalamic Tract — Fast Pain, Temperature, Crude Touch ★"));
k.push(detail(["Neuron","Route"],[
 ["**1st order**","Free nerve endings → dorsal root → synapses in the **superficial DORSAL HORN** at entry level (LE enters lumbar cord, UE cervical)"],
 ["**2nd order**","**CROSSES MIDLINE IMMEDIATELY in the cord** → ascends CONTRALATERALLY in the **anterolateral column** to the thalamus"],
 ["**3rd order**","VPL → primary + secondary somatosensory cortices. Crude touch + temperature travel in parallel, then project **thalamus → anterior + posterior insula**: lesion there spares light touch but blunts the EMOTIONAL aspect of touch"]],[2150,7210]));
k.push(compare("DCML crossing logic","SPINOTHALAMIC crossing logic",
 ["Crosses at the **medulla**",
  "Cord lesion below the medulla → **IPSILATERAL** loss of light touch + proprioception below the lesion",
  "Lesion above the decussation → contralateral loss"],
 ["Crosses **immediately in the cord**",
  "Any cord or cerebral lesion along the tract → **CONTRALATERAL** loss of pain + temperature",
  "Peripheral lesions → ipsilateral loss of BOTH systems. The mismatch (ipsi touch, contra pain) = **Brown-Séquard** — full story in the spinal module"],
 C.blue,C.teal,C.lightBlue,C.lightTeal));
k.push(bullet("**Divergent anterolateral tracts** (C-fiber slow pain, ~500 ms behind the 100 ms fast signal): **spinomesencephalic** → midbrain (orienting to pain, antinociception) · **spinoreticular** → reticular formation (arousal + autonomic responses — big in brain injury) · **spinolimbic** → limbic system (consciously felt; emotion, motivation, personality, autonomic, movement). This is why pain is a multimodal, emotional experience — sharp localized first, dull ache after."));
k.push(h1("4. Pain Processing — the Matrix, Gate, and Modulation"));
k.push(bullet("**Deep pain** encourages rest. **Referred pain** — perceived away from its source: visceral + cutaneous nociceptive afferents CONVERGE on the same 2nd-order neuron (cord) or 3rd-order neuron (thalamus). **The pain matrix** — top-down regulation of afferent nociception by brainstem, amygdala, hypothalamus, thalamus, cortex — decides whether pain is normal, **suppressed (antinociception)**, or **amplified (pronociception → nociplastic pain)** based on psychological, physiologic, genetic factors; pain can exist with NO nociceptive input."));
k.push(detail(["Mechanism","How it works"],[
 ["**Gate theory**","Light-touch (Aβ) afferent collaterals synapse on dorsal-horn interneurons that INHIBIT nociceptive projections → the PT toolkit: **TENS**, counterirritants (capsaicin, Biofreeze) suppress pain from underlying joints"],
 ["**Descending antinociception**","**Rostral ventromedial medulla** → releases **serotonin** in the dorsal horn (inhibitory interneurons) · **PAG (midbrain)** activates the RVM · **locus coeruleus (pons)** → **norepinephrine** inhibits spinothalamic activity in the dorsal horn"],
 ["**Endogenous opioids**","**Beta-endorphins** from pituitary + adrenal medulla bind opioid receptors — long-lasting; stress-induced analgesia; cortical input can trigger the descending system"],
 ["**Pronociception / nociplastic pain**","Peripheral: edema + injury chemicals sensitize free nerve endings. Central: dorsal-horn synapses strengthen with activity → amplification of painful AND non-painful input, even absent stimuli; feeds acute and chronic pain; worsened by anxiety + depression. Terminology: **nociplastic** replaces the older 'central sensitization' (your textbook still says sensitized)"]],[2700,6660]));
k.push(h1("5. Worked Example — the Module's Own Activity (Marvin and the Tack)"));
k.push(compare("Stepping on the tack, LEFT foot → pain","Feeling for the tack, LEFT hand → fine touch",
 ["Pathway: **spinothalamic** · receptor: free nerve ending (nociceptor) · fiber: **Aδ** (fast, sharp)",
  "1st order: left foot (≈L5/S1 dermatome) → dorsal root → superficial dorsal horn, LEFT side",
  "2nd order: crosses immediately → ascends RIGHT anterolateral column → VPL",
  "3rd order: VPL → RIGHT primary somatosensory cortex (foot area, medial homunculus)"],
 ["Pathway: **DCML** · receptors: Merkel/Meissner mechanoreceptor end-organs · fiber: **Aβ**",
  "1st order: left hand (≈C6–C8) → dorsal root → ascends LEFT **fasciculus cuneatus** to the medulla",
  "2nd order: synapse in nucleus cuneatus → decussates → RIGHT medial lemniscus → VPL",
  "3rd order: VPL → RIGHT postcentral gyrus (hand area, lateral homunculus)"],
 C.blue,C.teal,C.lightBlue,C.lightTeal));
k.push(tip("Reproduce both columns from memory with the eight activity rows: pathway, receptor, fiber class, 1st-order route + side, 1st synapse, 2nd-order route + side, 2nd synapse, 3rd-order route + side. That's the exam question in its natural habitat."));

k.push(pageBreak());
/* ─────────────── STUDY ─────────────── */
k.push(banner("MODULE 3","Reading Map and Glossary"));
k.push(spacer());
k.push(h1("1. Reading and Resources"));
k.push(detail(["Topic","Source"],[
 ["3.1 ANS","Lundy-Ekman Ch 9, pp. 132–146"],
 ["3.2 Peripheral somatosensory","Lundy-Ekman Ch 10, pp. 147–159"],
 ["3.2 Central somatosensory","Lundy-Ekman Ch 11, pp. 162–173 + 174–175"],
 ["Interactive","PhysioU: DCML + Spinothalamic modules · UBC activities: PCML tract, Spinothalamic tract, Acute Pain · 2-Minute Neuroscience: sympathetic, parasympathetic, DCML, anterolateral system, primary somatosensory cortex"],
 ["Optional","Osmosis somatosensory handout · documentary 'The Man Who Lost His Body' (Ian Waterman — life without proprioception)"]],[2600,6760]));
k.push(tnote("Assignments: Module 3 Knowledge Check; Exam 1 (Modules 1–2) also sits in this window. The 'Drawing for Tracts' sheet + Ascending Pathways activity from sync are in the course folder — do them on paper."));
k.push(spacer());
k.push(...glossary("Module 3 Quick-Reference Glossary",[
 ["Preganglionic / postganglionic","The two autonomic efferent neurons; synapse in a peripheral ganglion"],
 ["Thoracolumbar / craniosacral outflow","Sympathetic (T1–L2 lateral horn) / parasympathetic (brainstem CN III, VII, IX, X + sacral cord)"],
 ["Solitary nucleus","Brainstem convergence point for CN IX/X visceral afferents"],
 ["Horner's syndrome","Ipsilateral ptosis + miosis + anhidrosis — cervical sympathetic chain lesion"],
 ["Autonomic dysreflexia","SCI ≥T6: noxious stimulus → sympathetic surge → BP emergency"],
 ["POTS","HR ↑ >30 bpm on standing without orthostatic hypotension — autonomic dysfunction"],
 ["Pseudounipolar neuron","1st-order sensory neuron: two axons, soma in the dorsal root ganglion"],
 ["Receptive field","Skin area served by one afferent; small + dense distally"],
 ["Ia / II (spindle), Ib (GTO)","Quick-stretch phasic / tonic length / tendon tension afferents"],
 ["Aβ / Aδ / C fibers","Cutaneous afferents, large→small: touch / fast pain / slow pain"],
 ["Fasciculus gracilis / cuneatus","Dorsal-column subdivisions: lower limb medial / upper limb lateral"],
 ["Decussation","Midline crossing — DCML at the medulla, spinothalamic in the cord"],
 ["VPL nucleus","Thalamic relay where both tracts' 2nd-order neurons synapse"],
 ["Spinomesencephalic / spinoreticular / spinolimbic","Divergent slow-pain tracts: orienting / arousal-autonomic / emotional"],
 ["Referred pain","Visceral + cutaneous afferents converging on shared 2nd/3rd-order neurons"],
 ["Antinociception / pronociception","Pain-matrix suppression / amplification of nociceptive signaling"],
 ["Nociplastic pain","Amplified pain from strengthened central synapses (formerly 'central sensitization')"],
 ["Gate theory","Aβ collaterals excite inhibitory dorsal-horn interneurons → TENS, counterirritants"],
 ["Sensory ataxia","Incoordination from lost proprioception; Romberg-positive, eyes-closed unsteadiness"],
 ["Kinesthesia","Movement sense — the dynamic half of proprioception"]]));

build(k,"/home/claude/out/Module3_SomatosensorySystems_StudyNotes.docx");
