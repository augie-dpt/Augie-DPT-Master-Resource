const L = require('/home/claude/notes_lib.js');
const {C,h1,h2,body,bullet,tnote,tip,compare,detail,infoBox,banner,glossary,fig,pageBreak,spacer,cover,build,linkBox} = L;
const k=[];

k.push(...cover("Clinical Neuroscience (DPTH 6141)","Module 9: Behavioral & Mental Health, Motor Control, Neuroplasticity",
 "Topics 9.1–9.4 • Dr. Perry + Dr. Heckendorf • Reading: Lundy-Ekman Ch 29 (pp. 505–519), Ch 17 (pp. 291–297), Ch 7 (pp. 99–110)",
 ["Watch the VOPPs in your own Canvas module — these notes condense them, they don't replace them",
  "★ Three big grids here: the prefrontal syndromes, the systems-of-motor-control map, and the four post-injury synaptic recovery mechanisms",
  "The impairments lecture is the bridge to Neuromuscular I/II — its DANISH mnemonic and UMN/LMN chart come back constantly"]));

/* ─────────────── TOPIC 9.1 ─────────────── */
k.push(banner("TOPIC 9.1","Prefrontal Cortex and Temporal Poles"));
k.push(spacer());
k.push(h1("1. Three Prefrontal Divisions (+ the temporal pole)"));
k.push(detail(["Area","Role → lesion syndrome"],[
 ["**Lateral prefrontal cortex**","The 'rational cortex' — **goal-directed behavior** circuit (identify goal → plan → execute → evaluate; working memory, judgment, planning, abstract reasoning, divided attention, sequencing) + **divergent thinking** + inhibiting socially inappropriate behavior; VOLUNTARY emotional regulation. Lesion: can't set goals, plan, or follow through; lacks initiative + behavioral flexibility — yet conventional IQ tests stay normal. Damaged in frontal TBI and substance abuse"],
 ["**Medial prefrontal cortex** (+ temporal poles)","Emotions, motivation, self-awareness — perceiving your own AND others' emotions, beliefs, intentions. Lesion: **apathy** (profound if bilateral — 'I feel nothing'), impaired social understanding, possible paranoia + delusions, loss of initiation down to eating and self-care"],
 ["**Ventral prefrontal cortex** (+ rostral cingulate)","**Social behavior circuit** (with caudate head, substantia nigra reticularis, medial thalamic nuclei) — mood, affect, gut-feeling ('somatic marker') decision-making. Lesion: inappropriate social behavior, poor judgment, risky impulsive choices, no empathy/embarrassment/guilt, **failure to learn from mistakes** — even in highly intelligent people"],
 ["**Ventral striatum** (caudate-putamen junction)","Motivation + reward: dopaminergic **reward-seeking pathway** from the ventral tegmental area ('wanting'); aversion pathway VTA → medial prefrontal cortex. Damage: apathy, lost initiative + spontaneous thought; excess activity: OCD; the dopamine-wanting link is the engine of **addiction** (wanting and pleasure are separate — addicts seek drugs even without pleasure)"]],[2900,6460]));
k.push(h1("2. The Emotion Network"));
k.push(bullet("**Emotion** = short-term subjective experience; **mood** = sustained. Beyond the medial prefrontal cortex, five structures recognize + generate emotion: **anterior insula** (awareness of emotions + body stimuli), **ventral striatum** (reward value), **amygdala** (generates feelings; reads faces, body language, social signals — damage → threats not perceived → dangerous decisions), **Brodmann area 25** (cingulate below the genu), **medial thalamic nuclei**. The textbook avoids the term 'limbic system' because the circuitry is this distributed. Emotional regulation: AUTOMATIC/nonconscious (ignore, leave, deny, redirect attention — rostral cingulate, ventrolateral + ventromedial prefrontal) and VOLUNTARY (lateral prefrontal)."));
k.push(bullet("**Emotional lability** (labile affect) — abnormal UNCONTROLLED emotional expression: abrupt mood shifts, involuntary expression without the matching subjective emotion, triggered by nonspecific stimuli (laughing while sad, weeping at trivia). Common across neurologic disease — expect it, don't misread it as the patient's true mood."));
k.push(bullet("**Stress response** — somatic + autonomic + neuroendocrine (sympathetic → adrenal medulla → epinephrine) systems; adaptive briefly, damaging when sustained: chronic cortisol → cardiovascular disease, colitis, adult-onset diabetes, emotional instability, cognitive deficits, suppressed immunity. Mindfulness-based stress reduction measurably improves immune function. **Personality has geography**: extraversion ↔ medial prefrontal volume; neuroticism ↔ threat/punishment circuits (amygdala, cingulate, hippocampus); agreeableness ↔ temporoparietal + medial prefrontal; conscientiousness ↔ lateral prefrontal."));

k.push(pageBreak());
/* ─────────────── TOPIC 9.2 ─────────────── */
k.push(banner("TOPIC 9.2","Neurologic and Psychiatric Signs & Symptoms"));
k.push(spacer());
k.push(h1("1. Core Signs — in Neurologic AND Psychiatric Disease"));
k.push(bullet("**Delusions** — false beliefs despite contrary evidence: SIMPLE (single theme — being followed; common in Alzheimer's + vascular dementia) vs COMPLEX (interconnected narrative — a spouse replaced by an imposter; schizophrenia, medication-induced in Parkinson's). **Hallucinations** — sensory perception without stimulus, any sense: visual → ocular/optic pathology, migraine, delirium, temporal-lobe seizures; auditory → mostly primary psychiatric. **Mania** — persistently elevated/expansive/irritable mood, racing thoughts, little sleep, impulsivity, grandiosity (drugs, bipolar, rarely right-hemisphere lesions). **Anxiety** — tension anticipating danger: autonomic overactivity, tense muscles, hypervigilance, disproportionate worry, sleep + concentration problems, avoidance."));
k.push(h1("2. Psychiatric Disorders — the PT-Relevant Sketches"));
k.push(detail(["Disorder","Essentials"],[
 ["**Personality disorders**","Inflexible maladaptive patterns (eccentric / acting-out / fearful clusters): rapid mood swings, judgment sensitivity, passive resistance. PT/OT focus: ADLs, work, leisure, physical function"],
 ["**Anxiety disorders**","Generalized (daily-event worry) · social · **panic disorder** (abrupt 10–15 min terror: pounding heart, choking, dyspnea, fear of dying — rule out cardiac, respiratory, endocrine, seizure, vestibular, drug causes)"],
 ["**OCD**","Intrusive obsessions + compulsive responses; ↓cognitive-area activity + ↑emotion-area/amygdala activity"],
 ["**PTSD**","Post-trauma re-experiencing (flashbacks, nightmares), avoidance, hyperarousal, angry outbursts; overactive amygdala/insula/anterior cingulate + underactive prefrontal inhibition"],
 ["**Major depression**","Persistent sadness, hopelessness, anhedonia; neurotransmitter/activity abnormality not structural — **area 25 tonically overactive**, low CSF serotonin metabolites"],
 ["**Bipolar disorder**","Mania ↔ depression swings; abnormal amygdala/orbitofrontal/hippocampal activation, hypoactive prefrontal cortices"],
 ["**Autism spectrum disorder**","Neurodevelopmental social-communication + repetitive-behavior spectrum; abnormally FAST early postnatal brain growth then slowed development; genetic ± immune factors"],
 ["**Schizophrenia**","Disordered thinking, delusions, hallucinations, apathy, social withdrawal; late-adolescent onset; impaired executive function + working memory; widespread anatomic + neurotransmitter + connectivity abnormalities"]],[2600,6760]));
k.push(tnote("'Psychogenic', 'psychosomatic', 'somatoform', 'conversion', 'medically unexplained' — these labels are rarely valid. Symptoms inconsistent with classical disease are now understood as multi-network brain dysfunction (see FND, Module 2), not subconscious symptom manufacture."));
k.push(h1("3. Traumatic Brain Injury — First Pass"));
k.push(bullet("Blow/jolt/penetration → diffuse axonal injury, contusion, hemorrhage, swelling, laceration; severity graded by the **Glasgow Coma Scale** (eye opening + verbal + motor). **Mild TBI = concussion**: LOC ≤ minutes, brief amnesia/confusion; usually no long-term abnormality, but a minority develop **post-concussion syndrome** (cognition, concentration, irritability up to a year). Moderate-severe (mostly MVAs) hits **frontal + temporal** regions → poor judgment, ↓goal-directed behavior + divergent thinking, memory deficits, slow processing, attention disorders + motor/sensory/visual/autonomic impairments. Full treatment in the neuromuscular courses."));

k.push(pageBreak());
/* ─────────────── TOPIC 9.3 ─────────────── */
k.push(banner("TOPIC 9.3","Neuroscience of Motor Control — Dr. Heckendorf"));
k.push(spacer());
k.push(h1("1. Movement Is a Computer, Not a Typewriter"));
k.push(bullet("Movement emerges from interacting **sensory, perceptual, cognitive, and action systems** (dynamic systems theory: individual × task × environment). **Feedforward** = preparation from prediction (you pre-scale force for your familiar coffee mug); **feedback** = online correction from proprioceptors + vestibular + vision (the slip-on-ice cascade). Receptor census: muscle spindles (dense where precision lives — hands, eyes, neck), GTOs (tension, fatigue modulation), joint receptors (Ruffini stress, Pacinian compression, ligament GTOs, free nerve endings), cutaneous receptors — the COMBINATION gives accurate movement detection."));
k.push(detail(["System","Role in movement (computer analogy)"],[
 ["**Spinal cord**","Simple input→output; flexion/extension patterns; stepping pattern generators; first sensory processing"],
 ["**Thalamus**","Motherboard/relay: filters + routes all senses (except smell) to cortex; also relays basal ganglia + cerebellum traffic"],
 ["**Visual + vestibular systems**","Object ID, visual proprioception, verticality cues · head position/movement, gaze stability, posture on unreliable surfaces"],
 ["**Somatosensory + association cortices**","Integration → homunculus map · perception-to-action transition, attention, memory, decisions"],
 ["**Motor cortex** (M1 + premotor + SMA)","Choose, plan, execute; force + speed; feeds corticospinal tract"],
 ["**Brainstem**","Battery/control panel: ascending + descending traffic, head/face/eye control, vital functions, reticular tone regulation"],
 ["**Cerebellum**","Spell-check: compares intended vs actual, corrects online, coordinates, grades force, times movement, drives motor learning"],
 ["**Basal ganglia**","Circuit board: initiate vs suppress movement, prepare/start/stop, tone, saccades, behavioral organization"],
 ["**Frontal/cognitive system**","Attention, motivation, problem-solving — intact sensing + moving still fails without attending + planning"]],[2900,6460]));
k.push(bullet("Three worked examples to rehearse: **posture** (somatosensory weight-bearing + visual verticality + vestibular head position shape stability reactions) · **walking** (frontal goal + attention → sensory adaptation → basal ganglia start/maintain/stop + tone → cerebellar timing/error-correction → reticulospinal axial coordination + vestibulospinal postural LMN tuning → lateral corticospinal command → spinal CPGs) · **reach-and-grasp** (vision locates + sizes → somatosensory body schema → plan → cerebellum + basal ganglia refine → descending pathways → cord → muscles → cerebellum updates from the sensory consequences)."));
k.push(h1("2. Impairments by Region (the bridge lecture)"));
k.push(bullet("**Signs** (objective — nystagmus, MMT, Ashworth) vs **symptoms** (subjective — dizziness, nausea). **Positive signs** = released NEW behaviors (spasticity, Babinski, nystagmus); **negative** = LOST normal behaviors (weakness, sensory loss). **Primary impairments** = direct lesion results (paresis, spasticity, vision loss); **secondary** = consequences (contracture from unmoved spastic biceps, deconditioning from paresis)."));
k.push(detail(["Region","Impairment picture"],[
 ["**Motor cortex / descending tracts**","Spasticity (sometimes FUNCTIONAL — a stiff quad may hold the knee in gait; removing it can worsen function) · abnormal synergies/coactivation replacing individuation. UE flexion synergy: scapular retraction-elevation, shoulder abduction-ER, elbow flexion + supination, wrist/finger flexion ('itch your ear with dirty fingers'). LE extension synergy: hip extension-adduction-IR, knee extension, plantarflexion-inversion ('have-to-pee legs')"],
 ["**Sensory cortex**","↓light touch, vibration, two-point, pain/temp + impaired INTEGRATION; poor proprioception → clumsiness, drops, falls, spatial-awareness problems"],
 ["**Right-hemisphere association**","**Hemineglect** (unaware of the left despite intact senses — ignores food, left-side dressing, the clock-drawing test) · **extinction** (misses left stimuli only during simultaneous right stimuli) · non-spatial: reorienting attention, novelty, vigilance"],
 ["**Cerebellum**","**DANISH**: Dysdiadochokinesia · Ataxia · Nystagmus · Intention tremor · Scanning/staccato speech (dysarthria) · Hypotonia — plus dysmetria (over/undershoot), poor sequencing/timing/grading, impaired error-correction → poor motor learning, ↓postural control"],
 ["**Basal ganglia**","HYPOkinetic: Parkinson's (dopaminergic degeneration — resting/pill-rolling tremor worse with stress, rigidity, bradykinesia). HYPERkinetic: chorea, medication-induced dyskinesias (peak-dose, after years of levodopa), athetoid CP (slow writhing), **dystonia** (sustained/intermittent contraction → twisting postures, worsened by voluntary action; common in hand + neck, painful)"],
 ["**Spinal cord / peripheral**","UMN column: hyperreflexia + new reflexes (Babinski, Hoffmann), hypertonia/spasticity, tract-patterned sensory loss. LMN column: hyporeflexia, hypotonia/flaccidity, atrophy in the nerve's distribution, patchy or dermatomal sensory loss (carpal tunnel, cubital tunnel, fibular nerve at the fibular head). Cord syndromes preview: Brown-Séquard (ipsilateral motor / contralateral pain-temp), anterior (motor + pain/temp lost, dorsal columns spared), posterior (proprioception lost, motor spared), central (UE > LE weakness) — full detail in Module 5.4"]],[2700,6660]));

k.push(pageBreak());
/* ─────────────── TOPIC 9.4 ─────────────── */
k.push(banner("TOPIC 9.4","Mechanisms of Neuroplasticity"));
k.push(spacer());
k.push(h1("1. Definitions and Everyday Plasticity"));
k.push(bullet("**Neuroplasticity** = neurons changing function, chemical profile (transmitter amounts/types), and/or structure. It powers all learning and memory — and it can be **maladaptive** (use-it-or-lose-it in reverse; chronic pain syndromes; post-amputation cortical reorganization → phantom limb pain). **Habituation** — the simplest form: decreased response to repeated benign stimuli; short-term = presynaptic ↓excitatory transmitter, long-term = postsynaptic receptor changes; reversible with time. PT uses it directly in **vestibular habituation exercises** (OT: tactile defensiveness)."));
k.push(bullet("**Experience-dependent (activity-dependent) plasticity** — persistent synapse-strength changes underlying motor learning (revisit the 10 principles from Movement Science). Early learning activates LARGE diffuse regions; with repetition the map SHRINKS to a small distinct region. Mechanisms: presynaptic transmitter-release changes, postsynaptic receptor density/efficiency, and the big two — **long-term potentiation** (correlated pre+post firing inserts AMPA receptors → silent synapses become active) and **long-term depression** (AMPA receptors removed → active synapses go silent). **Astrocytes** participate via gliotransmitters: synaptogenesis, transmitter release + reuptake modulation. **TMS** modulates cortical activity to enhance or inhibit learning (stroke rehab, psychiatric care)."));
k.push(h1("2. Injury and Repair"));
k.push(compare("PERIPHERAL axon injury — recovery possible","CENTRAL axon injury — regeneration blocked",
 ["Proximal segment: central chromatolysis (may die) · distal: wallerian degeneration; glia scavenge",
  "**Collateral sprouting** (neighbors adopt denervated targets) + **regenerative sprouting** (injured axon sends new sprouts)",
  "Schwann cells make NERVE GROWTH FACTOR, clear debris, and leave a guiding sheath → regrowth ~**1–3 mm/day (1–3 inches/month)**"],
 ["Cell death releases excess glutamate → **excitotoxicity** kills neighbors (stroke, TBI, neurodegeneration)",
  "Diffuse axonal injury: shear/twist damage PLUS a cascade of death, inflammation, dysregulation over hours–days",
  "**Glial scarring + no nerve growth factor** prevent functional axon regeneration; hope lies in neuroprosthetics, epidural/intraspinal/transcutaneous stimulation, exercise INTENSITY, stem cells (research ongoing)"],
 C.blue,C.teal,C.lightBlue,C.lightTeal));
k.push(detail(["Post-injury synaptic recovery mechanism","How it works"],[
 ["**1 Recovery of synaptic effectiveness**","Swelling resolves → strangled synapses simply work again"],
 ["**2 Denervation hypersensitivity**","New receptor sites sprout on the postsynaptic membrane → outsized response to whatever transmitter arrives"],
 ["**3 Synaptic hyper-effectiveness**","Some presynaptic branches die → survivors receive/release a concentrated share of transmitter"],
 ["**4 Unmasking of silent synapses**","Redundant dormant pathways switch on to substitute for lost ones (the LTP mechanism repurposed)"]],[3300,6060]));
k.push(tip("The rehab punchline: cortical maps reorganize with sensory input, experience, learning, AND injury. Skilled, intense, repeated practice enlarges the trained representation — in healthy brains and post-stroke. Experience-dependent plasticity is the mechanism YOU drive as the movement specialist; make the experience worth encoding."));

k.push(pageBreak());
/* ─────────────── STUDY ─────────────── */
k.push(banner("MODULE 9","Reading Map and Glossary"));
k.push(spacer());
k.push(detail(["Topic","Source"],[
 ["9.1 Prefrontal + temporal poles","Lundy-Ekman Ch 29, pp. 505–515"],
 ["9.2 Neurologic/psychiatric signs","Lundy-Ekman Ch 29, pp. 516–519"],
 ["9.3 Motor control","Lundy-Ekman Ch 17, pp. 291–297"],
 ["9.4 Neuroplasticity","Lundy-Ekman Ch 7, pp. 99–110 (+ Movement Science's 10 principles)"]],[2600,6760]));
k.push(spacer());
k.push(...glossary("Module 9 Quick-Reference Glossary",[
 ["Goal-directed behavior","Identify → plan → execute → evaluate; lateral prefrontal circuit"],
 ["Divergent thinking","Conceiving many possibilities — lateral prefrontal"],
 ["Somatic marker hypothesis","Gut feelings (visceral/hormonal memory) inform sound judgment"],
 ["Emotional lability","Uncontrolled expression incongruent with mood; abrupt, nonspecific triggers"],
 ["Ventral striatum","Caudate-putamen junction; dopamine 'wanting'; apathy when damaged, addiction when hijacked"],
 ["Simple vs complex delusion","Single-theme false belief vs interconnected narrative"],
 ["Area 25","Subgenual cingulate; tonically overactive in major depression"],
 ["Glasgow Coma Scale","Eye + verbal + motor responsiveness grading TBI severity"],
 ["Feedforward / feedback","Anticipatory pre-scaling vs online correction of movement"],
 ["Positive / negative signs","Released new behaviors (spasticity) vs lost normal ones (weakness)"],
 ["Primary / secondary impairment","Direct lesion result vs downstream consequence (contracture, deconditioning)"],
 ["Hemineglect / extinction","Left-side unawareness / left loss only under simultaneous right stimulation"],
 ["DANISH","Dysdiadochokinesia, Ataxia, Nystagmus, Intention tremor, Scanning speech, Hypotonia"],
 ["Dysmetria / dysdiadochokinesia","Over-/undershooting / impaired rapid alternating movements"],
 ["Dystonia","Sustained/intermittent contractions → twisting postures, action-worsened"],
 ["Habituation","Decreased response to repeated benign stimuli — vestibular rehab's tool"],
 ["LTP / LTD","AMPA receptors inserted (synapses activate) / removed (synapses silence)"],
 ["Excitotoxicity","Glutamate flood from dying cells killing neighbors"],
 ["Collateral vs regenerative sprouting","Neighbors adopt orphaned targets vs injured axon regrows (PNS, 1–3 mm/day)"],
 ["Unmasking","Dormant redundant synapses activating after injury"]]));

build(k,"/home/claude/out/Module9_BehavioralHealthMotorControlNeuroplasticity_StudyNotes.docx");
