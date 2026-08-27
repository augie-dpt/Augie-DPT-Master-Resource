const L = require('/home/claude/notes_lib.js');
const {C,h1,h2,body,bullet,tnote,tip,compare,detail,infoBox,banner,glossary,fig,pageBreak,spacer,cover,build,linkBox} = L;
const k=[];

k.push(...cover("Clinical Neuroscience (DPTH 6141)","Module 1: Introduction to Neuroscience and Neuroanatomy",
 "Topics 1.1–1.4 • Lectures by Dr. Kerry Mallini and Dr. Lindsay Perry • Reading: Lundy-Ekman Ch 2, 3, 5, 6, 8",
 ["Watch all VOPPs in your own Canvas module — these notes condense them, they don't replace them",
  "★ This module is the vocabulary for the whole course: orientation terms, white vs gray matter, and the required-structures list come back on every exam",
  "Exam 1 covers Modules 1 and 2 together — build your structure/function/impairment tables from day one"]));

/* ─────────────── TOPIC 1.1: DEVELOPMENT ─────────────── */
k.push(banner("TOPIC 1.1","Development of the Nervous System — Dr. Kerry Mallini"));
k.push(spacer());
k.push(h1("1. Three Stages of Development in Utero"));
k.push(detail(["Stage","Timing and what happens"],[
 ["**Pre-embryonic**","Conception → ~day 14. Fertilized ovum divides as it travels the uterine tube → solid sphere → cavity opens (outer layer → placenta, inner cells → embryo) → implants in the endometrium. Inner cell mass becomes the **embryonic disk**: ectoderm + endoderm, with **mesoderm** forming between them shortly after"],
 ["**Embryonic**","Day 15 → end of week 8. Organs form. **Ectoderm → sensory organs, epidermis, NERVOUS SYSTEM** · mesoderm → dermis, muscle, skeleton, excretory + circulatory systems · endoderm → gut/organ linings"],
 ["**Fetal**","End of week 8 → birth. Nervous system develops more fully; **myelination begins**"]],[2150,7210]));
k.push(h1("2. Neural Tube Formation (days 18–26)"));
k.push(bullet("**Neural plate** forms on the embryo's surface (head → tail, touching amniotic fluid) → folds inward creating the **neural groove** → the folds touch = **neural tube**. Swellings at the top become the brain; the tube down the back becomes the spinal cord."));
k.push(bullet("Closure starts in the **cervical region**; the open ends — **superior and inferior neuropores** — close by **day 30**. Inferior neuropore fails to close → **spina bifida**; superior fails → **anencephaly**."));
k.push(bullet("**Neural crest** = cells adjacent to the tube that separate and combine with remaining ectoderm; they form the **peripheral sensory neurons** that connect to the cord and innervate the somite regions (future dermatomes)."));
k.push(bullet("By day 26 the tube differentiates into two concentric rings: **inner layer (somas) → gray matter**, **outer layer (axons + glia) → white matter**. Tube complete by end of **week 4**; the entire brain and spinal cord derive from it."));
k.push(h1("3. Somites and the Plates"));
k.push(detail(["Structure","Becomes"],[
 ["**Sclerotome** (anterior-medial somite)","Vertebrae and skull"],
 ["**Myotome** (posterior-medial somite)","Skeletal muscle"],
 ["**Dermatome** (lateral somite)","Dermis — neural-crest columns segment to match (C3, C4, C5...), and week-5 limb buds carry these segments into the adult dermatome map"],
 ["**Motor (basal) plate** — ventral tube","Axons grow out to innervate the myotome → **lower motor neurons**; this gray matter = the adult **VENTRAL horn** (motor)"],
 ["**Association (alar) plate** — dorsal tube","Interneurons + projection neurons carrying sensory info; this gray matter = the adult **DORSAL horn** (sensory)"]],[3100,6260]));
k.push(tnote("Somites appear first in the occipital region, then are added caudally — development runs head-to-tail, which is why higher structures are furthest along at any moment in utero."));
k.push(h1("4. Why the Cord Ends at L1–L2"));
k.push(bullet("Until ~month 3 in utero, cord segments align with their vertebrae. The vertebral column then outgrows the cord, so the adult cord ends at **L1–L2** as the **conus medullaris**, with the lumbosacral **cauda equina** (peripheral nerves) continuing below."));
k.push(h1("5. Brain Formation (begins ~day 28)"));
k.push(detail(["Primary vesicle","Adult derivatives and ventricle"],[
 ["**Hindbrain (rhombencephalon)**","Medulla, pons, cerebellum · central canal expands into the **4th ventricle**"],
 ["**Midbrain (mesencephalon)**","Keeps its name · central canal → **cerebral aqueduct** (connects 3rd and 4th ventricles)"],
 ["**Forebrain (prosencephalon), posterior part**","**Diencephalon** — thalamus + hypothalamus · midline cavity → **3rd ventricle**"],
 ["**Forebrain, anterior part**","**Telencephalon** → cerebral hemispheres, which envelop the diencephalon; deep nuclei (basal ganglia), white matter, and surface cortex; expanding growth forms the temporal lobe and gives the brain (and structures like the caudate and lateral ventricles) their **C-shape**"]],[3300,6060]));

k.push(pageBreak());
/* ─────────────── DEVELOPMENTAL DISORDERS ─────────────── */
k.push(banner("TOPIC 1.1 (cont.)","Common Developmental Disorders of the CNS"));
k.push(spacer());
k.push(tnote("The CNS is most vulnerable to MAJOR malformation from day 14 to week 20 — the structural foundation is being laid. Damage after week 20 tends to produce functional disturbance instead: autism, cerebral palsy, ADHD, cognitive disability, coordination disorders."));
k.push(h1("1. Anencephaly"));
k.push(bullet("**Superior neuropore fails to close** → forebrain never develops, no skull forms; malformed brainstem without cerebral or cerebellar hemispheres, often exposed. Most fetuses die before birth; survivors almost never live past a week."));
k.push(h1("2. Arnold-Chiari Malformation (hindbrain deformity)"));
k.push(compare("TYPE 1 — often asymptomatic","TYPE 2 — presents in infancy",
 ["NOT a neural-tube-closure defect",
  "**Cerebellar tonsils herniate through the foramen magnum**; pons + medulla small and malformed",
  "Symptoms (if any) start adolescence/young adulthood: **severe headache and neck pain**; possible upper-cervical cord injury → loss of pain/temp over shoulders + lateral UEs",
  "Lower CN + cerebellar malformation → tongue/facial weakness, ↓hearing, dizziness, eye-muscle weakness, incoordination",
  "Can block CSF flow → **hydrocephalus** (see Lundy-Ekman Pathology Box 8.1, p. 123)"],
 ["**Medulla AND inferior cerebellum extend into the foramen magnum** — more brain herniated than Type 1",
  "Progressive hydrocephalus, SCM paralysis, deafness, bilateral lateral-gaze weakness, facial weakness",
  "**Almost always paired with myelomeningocele** (incomplete lower neural tube closure)"],
 C.blue,C.teal,C.lightBlue,C.lightTeal));
k.push(h1("3. Spina Bifida"));
k.push(bullet("**Inferior neuropore fails to close** → vertebrae don't form properly around the open tube → bony defect at the distal end. Higher incidence with insufficient maternal **folic acid**."));
k.push(detail(["Form","Presentation"],[
 ["**Occulta** (hidden)","Neural tissue stays inside the vertebral column; cord function preserved, usually normal"],
 ["**Aperta — meningocele**","Meninges protrude through the bony defect; may be asymptomatic, cord function may be impaired"],
 ["**Aperta — myelomeningocele**","Neural tissue AND meninges protrude; always abnormal cord growth + some LE dysfunction; **impaired bowel/bladder control**; cognition usually normal"],
 ["**Aperta — myeloschisis**","Most severe: malformed cord OPEN to the body surface (neural folds never closed); presents like myelomeningocele"]],[3100,6260]));
k.push(tip("Aperta means open or exposed. Severity ladder: meningocele → myelomeningocele → myeloschisis. Lundy-Ekman's table on p. 126 has pictures worth studying."));

k.push(pageBreak());
/* ─────────────── TOPIC 1.2: NEUROANATOMY OVERVIEW ─────────────── */
k.push(banner("TOPIC 1.2","Overview of Neuroanatomy — Dr. Kerry Mallini"));
k.push(spacer());
k.push(h1("1. Orientation: the 90° Bend"));
k.push(bullet("In linear nervous systems (fish, reptiles): **ventral** = toward the ground (belly), **dorsal** = toward the sky (back), **rostral** = toward the snout (beak), **caudal** = toward the tail. Humans stand, so the nervous system bends ~90° at the **midbrain-diencephalic junction**."));
k.push(compare("ABOVE the midbrain","AT the midbrain and BELOW",
 ["Linear-animal rules apply as-is",
  "Dorsal = top of the head, ventral = underside of the brain",
  "Rostral = toward the face, caudal = toward the back of the head"],
 ["Cord runs perpendicular to the ground, so:",
  "anterior = ventral · posterior = dorsal",
  "superior = rostral · inferior = caudal"],
 C.blue,C.teal,C.lightBlue,C.lightTeal));
k.push(bullet("**Planes of section:** horizontal (axial/transverse) = upper vs lower · coronal (crown/tiara) = anterior vs posterior · sagittal (bow-and-arrow) = left vs right — **midsagittal** through midline, **parasagittal** off midline, **oblique** anything between planes."));
k.push(h1("2. Organization of the Nervous System"));
k.push(bullet("**CNS** = brain + spinal cord. **PNS** = everything outside: nerves, sensory receptors, connections to muscles and glands. PNS divides into **somatic** (skeletal muscle) and **autonomic** (smooth muscle + glands; sympathetic vs parasympathetic)."));
k.push(bullet("**Afferent** division carries sensory info INTO the CNS (visual, auditory, chemo-, somatosensory receptors). **Efferent** division carries motor commands OUT (skeletal muscle + autonomic effectors). Candle example: afferent axons report the heat → CNS processes → efferent axons command the hand away."));
k.push(h1("3. White vs Gray Matter"));
k.push(compare("WHITE MATTER — conveys","GRAY MATTER — integrates",
 ["**Axons + myelin** (white from myelin's fat)",
  "Bundled myelinated axons in the CNS get special names: **tract, lemniscus, fasciculus, column, peduncle, capsule**",
  "Example: the **internal capsule** — the highway to and from cerebral cortex"],
 ["**Somas + dendrites** — processing",
  "Cell-body groups: **ganglia** in the PNS, **nuclei** in the CNS",
  "Gray matter on the brain's surface = **cortex**"],
 C.blue,C.teal,C.lightBlue,C.lightTeal));
k.push(h1("4. Spinal Region"));
k.push(bullet("Cord runs from brainstem to **L1–L2** inside the vertebral column. Cross-section: **white matter OUTSIDE** (afferent/efferent fibers) and **gray matter INSIDE** — the H/butterfly of cell bodies. Afferent info ascends, efferent descends."));
k.push(h1("5. Brainstem and Cranial Nerves"));
k.push(detail(["Part","Functions"],[
 ["**Midbrain** (top)","Vision, hearing, motor control, sleep/wake cycle, consciousness"],
 ["**Pons** (middle)","Facial expression + sensation nuclei; equilibrium and postural functions"],
 ["**Medulla** (bottom)","Blood pressure, breathing, swallowing, coughing, vomiting, digestion"]],[2150,7210]));
k.push(bullet("All sensory and motor traffic between body and brain passes through the brainstem; some tracts begin or end there, and its nuclei run equilibrium, cardiovascular, and respiratory control. **CN origins: I–II from the cerebrum · III–IV midbrain · V–VIII pons · IX–XII medulla.** Know each nerve's name, function, and whether it's sensory, motor, or mixed."));
k.push(h1("6. Cerebellum"));
k.push(bullet("Sits above the brainstem, below the occipital lobes. **Coordinates and refines voluntary movement** — balance, posture, smooth precise motion. Receives input from muscles, joints, inner ear, and cortex; integrates; sends corrections to motor cortex. Stores motor memory (bike-riding) and contributes to attention, language processing, working memory. Damage → clumsiness, tremor, balance problems."));

k.push(pageBreak());
/* ─────────────── CEREBRUM ─────────────── */
k.push(banner("TOPIC 1.2 (cont.)","Overview of the Cerebrum"));
k.push(spacer());
k.push(h1("1. Hemispheres and the Diencephalon"));
k.push(bullet("The cerebrum is the largest CNS structure: two hemispheres split by the **longitudinal fissure** (= cerebral/interhemispheric/median longitudinal fissure — all synonyms) and connected by the **corpus callosum**. Runs the higher-order show: thinking, memory, perception, consciousness, voluntary movement, language, emotion, integration."));
k.push(detail(["Diencephalon structure","Role"],[
 ["**Thalamus**","Largest — two egg-shaped nuclear masses. **Relay station**: sorts and directs sensory input (eyes, ears, skin) to the right cortical areas; also emotional/memory processing, consciousness, arousal, attention"],
 ["**Hypothalamus**","Below the thalamus. **Homeostasis control center**: temperature, hunger, thirst, fluid balance; drives the pituitary (endocrine); emotion/behavior (aggression, pleasure, sexual behavior); circadian rhythm"],
 ["**Epithalamus**","Contains the **pineal gland** → melatonin → sleep/wake regulation"],
 ["**Subthalamus**","Motor control; associated with **Parkinson's disease**"]],[2600,6760]));
k.push(h1("2. Six Lobes (know all six, not four)"));
k.push(detail(["Lobe","Functions"],[
 ["**Frontal**","Executive function (planning, decisions, problem-solving) · **primary motor cortex** (posterior frontal) · personality + social behavior · working memory"],
 ["**Parietal**","Touch, temperature, pain, proprioception processing · spatial perception · sensory integration"],
 ["**Temporal**","**Primary auditory cortex** · memory (hippocampus — long-term formation and retrieval) · language comprehension · emotional processing"],
 ["**Occipital**","**Primary visual cortex** — receives and processes visual input"],
 ["**Limbic**","Interconnected network — amygdala, hippocampus, hypothalamus, thalamus, fornix, cingulate cortex — the brain's **emotional center** (limbus = fringe, at the medial edge)"],
 ["**Insular**","Deep in the lateral sulcus: emotional processing, autonomic function, empathy, taste, smell, pain, decision-making, language"]],[2150,7210]));
k.push(h1("3. Landmarks to Identify"));
k.push(bullet("**Central sulcus (of Rolando)** — frontal/parietal boundary. **Sylvian (lateral) fissure** — frontal/temporal boundary. **Parieto-occipital sulcus** — parietal/occipital boundary, seen on the MEDIAL view only. Folds: **sulci** (grooves) and **gyri** (ridges) multiply cortical surface area."));
k.push(h1("4. Deep White and Gray Matter"));
k.push(compare("WHITE MATTER structures","DEEP GRAY nuclei",
 ["**Corpus callosum** — millions of myelinated axons bridging the hemispheres (wide flat sheet on midsagittal view, horizontal band on coronal)",
  "**Internal capsule** — axons projecting cortex ↔ subcortical structures; THE major motor + sensory pathway, fanning out to the whole cortex"],
 ["**Basal ganglia** — caudate + putamen + globus pallidus (putamen + GP together = **lenticular nucleus**); social/goal-directed behavior, movement, emotion",
  "**Amygdala** — emotion + motivation",
  "**Hippocampus** — declarative (fact) memory"],
 C.blue,C.teal,C.lightBlue,C.lightTeal));

k.push(pageBreak());
/* ─────────────── CSF + BLOOD SUPPLY ─────────────── */
k.push(banner("TOPIC 1.2 (cont.)","Cerebrospinal Fluid System and Blood Supply"));
k.push(spacer());
k.push(h1("1. Ventricles and CSF"));
k.push(bullet("Four ventricles: **two lateral** (C-shaped, one per hemisphere) → **interventricular foramen (of Monro)** → **3rd ventricle** (slit between the two thalami) → **cerebral aqueduct (of Sylvius)** along the midbrain → **4th ventricle** (between brainstem and cerebellum) → subarachnoid space → reabsorbed into venous blood at the dural sinuses."));
k.push(bullet("CSF is made mainly by the **choroid plexus** (inside lateral, 3rd, and 4th ventricles). Functions: **supports** the brain's weight, **shock absorption**, homeostasis (temperature, electrolytes, pressure), **nutrition** (glucose, proteins, lipids, electrolytes), immune function."));
k.push(tip("Trace the CSF route out loud until it's automatic: lateral → Monro → 3rd → aqueduct → 4th → subarachnoid → venous. Blockage anywhere upstream = hydrocephalus — this thread returns in Module 2 with ICP."));
k.push(h1("2. Meninges — PAD, inside → out"));
k.push(detail(["Layer","Character"],[
 ["**Pia mater**","Thin, adheres to the brain surface, follows every gyrus and sulcus"],
 ["**Arachnoid**","Wispy, spidery; CSF percolates through the subarachnoid space over the brain"],
 ["**Dura mater**","Hard, two tough fibrous layers; outer layer sticks to the skull. Inner layer folds down as the **falx cerebri** (into the longitudinal fissure, separating hemispheres) and the **tentorium cerebelli** (tent over the cerebellum, separating it from posterior hemispheres). Between the layers: **dural sinuses** — CSF + venous blood drain to the jugular veins"]],[2150,7210]));
k.push(h1("3. Blood Supply and the Circle of Willis"));
k.push(compare("ANTERIOR supply — internal carotids","POSTERIOR supply — vertebrals → basilar",
 ["Arise from the common carotids in the neck",
  "Give rise to the **ACA** (medial frontal + parietal surface) and **MCA** (lateral hemisphere — motor and sensory territory)"],
 ["Vertebrals join at the pons-medulla junction → **basilar artery** (supplies pons + most of cerebellum)",
  "Basilar divides at the pons-midbrain junction → **PCA** (occipital + inferior/medial temporal)"],
 C.blue,C.teal,C.lightBlue,C.lightTeal));
k.push(bullet("The anterior and posterior supplies join in a ring at the base of the brain — the **Circle of Willis** — linked by the **anterior and posterior communicating arteries**, which give blood alternate routes when a main artery is compromised. All three cerebral arteries (ACA, MCA, PCA) arise from this ring."));
k.push(tnote("Territory map to memorize now, stroke syndromes later: ACA = anterior-medial surface (frontal → anterior parietal) · MCA = dorsal-lateral surface · PCA = inferior-medial temporal + occipital. Module 2 builds the stroke presentations directly on this."));

k.push(pageBreak());
/* ─────────────── TOPIC 1.3: NEUROPHYSIOLOGY ─────────────── */
k.push(banner("TOPIC 1.3","Neurophysiology Review — Dr. Lindsay Perry (Lundy-Ekman Ch 5–6)"));
k.push(spacer());
k.push(h1("1. The Neuron"));
k.push(bullet("Four components: **dendrites** (main input, branch-like), **soma** (synthesizes proteins/neurotransmitters), **axon** (output unit), **presynaptic terminals** (transmitting elements). Signal transport runs **anterograde** (soma → terminal) or **retrograde** (synapse → soma)."));
k.push(bullet("Three shapes: **multipolar** (many dendrites, one axon — cord-to-skeletal-muscle neurons), **bipolar** (one dendritic root, one axon), **pseudounipolar** (two axonal roots — carries info periphery → CNS)."));
k.push(h1("2. Membrane Potentials"));
k.push(detail(["Potential","Behavior"],[
 ["**Resting**","−70 mV steady state. Ion players: Na+, Cl−, Ca2+ want in; K+ wants out — driven by concentration gradients AND the electrochemical pull of the negative interior"],
 ["**Local** (graded)","Small, passive spread, confined to a small membrane patch. Two kinds: **receptor potentials** (at sensory receptors — stretch, compression, thermal, chemical) and **synaptic potentials** (at postsynaptic membranes). Strength modulates by **temporal summation** (potentials within ~1 ms of each other add) and **spatial summation** (potentials from different regions add)"],
 ["**Action**","Threshold **−55 mV** → large, **all-or-none** depolarization actively **propagated** along the axon by repeated regeneration. This is how signals travel head-to-toe"]],[2150,7210]));
k.push(h1("3. Conduction Velocity"));
k.push(bullet("Two upgrades make axons faster: **bigger diameter** (wider hose) and **myelination** (insulation that stops the signal dissipating, so it travels farther before regenerating). Regeneration happens at the **nodes of Ranvier** (myelin gaps) → **saltatory conduction** — the action potential jumps node to node."));
k.push(h1("4. Glial Cells (six types)"));
k.push(detail(["Cell","Job"],[
 ["**Oligodendrocyte**","Myelin in the **CNS**"],
 ["**Schwann cell**","Myelin in the **PNS** — wraps one axon fully or several partially; provides trophic factors for axon REPAIR (PNS can regenerate)"],
 ["**Astrocyte**","Signals with neurons + other astrocytes; regulates CNS extracellular fluid; key part of the **blood-brain barrier**"],
 ["**Microglia**","CNS cleanup crew; overactive microglia contribute to neurodegenerative damage"],
 ["**Satellite cell**","Covers somas in the PNS; regulates their environment"],
 ["**Ependymal cell**","Lines ventricles + central canal; regulates CSF flow"]],[2600,6760]));
k.push(compare("MULTIPLE SCLEROSIS — CNS","GUILLAIN-BARRÉ — PNS",
 ["Demyelination of **oligodendrocytes**",
  "Central diagnosis: brain + spinal cord plaques",
  "Review Lundy-Ekman Pathology Table 5.1 (p. 78): etiology, onset speed, signs, region, impairments"],
 ["Demyelination of **Schwann cells**",
  "Peripheral diagnosis; progresses **distal → proximal**",
  "PNS remyelinates → plateau, reversal, usually good recovery (Table 5.2, p. 80)"],
 C.blue,C.teal,C.lightBlue,C.lightTeal));
k.push(bullet("**Neural stem cells** — immature, self-renewing precursors of neurons and glia; present in healthy adult brains (memory formation, learning). Being explored in ALS, SCI, and orthopedic joints. Open questions (Lundy-Ekman): will they differentiate properly, survive, integrate, avoid becoming cancerous, and what dosing/timing produces meaningful gains? **Regenerative rehabilitation** = rehab principles applied together with regenerative-medicine therapeutics to optimize recovery through tissue regeneration, remodeling, or repair."));

k.push(pageBreak());
/* ─────────────── SYNAPTIC TRANSMISSION ─────────────── */
k.push(banner("TOPIC 1.3 (cont.)","Neural Communication via Synaptic Transmission"));
k.push(spacer());
k.push(h1("1. The Synapse"));
k.push(bullet("Where a neuron communicates with a postsynaptic cell (another neuron, muscle, gland, organ, vessel). **Electrical synapses**: gap junctions physically join neurons — used where speed and automaticity matter (brainstem respiration). **Most synapses are chemical** and rely on neurotransmitters crossing the synaptic cleft."));
k.push(bullet("Named by what the axon contacts: **axosomatic** (→ soma), **axodendritic** (→ dendrite), **axoaxonic** (→ another axon — this is how presynaptic facilitation/inhibition adjusts transmitter release)."));
k.push(bullet("Release sequence (Lundy-Ekman p. 86): action potential arrives → ion channels open → vesicle proteins change → transmitter released, diffuses across the cleft → receptors bind it and change shape. **Any failure along the chain = failed communication** — that's the logic of every neurotransmission disease."));
k.push(h1("2. Strength and Regulation"));
k.push(bullet("Synaptic strength = **amount** of transmitter × **duration** of release. Hot stove vs pinprick: both noxious, but the stove gets a large, long release driving a big fast withdrawal."));
k.push(bullet("Four cleanup/regulation mechanisms: **reuptake transporters** (pump transmitter back into the presynaptic terminal), **cleft enzymes** (degrade residual transmitter), **diffusion** away, and **postsynaptic modification** (e.g., phosphorylation inactivating receptors)."));
k.push(bullet("Postsynaptic potentials are **excitatory (EPSP)** or **inhibitory (IPSP)**; skeletal muscle, organs, and glands mostly receive excitatory input. Presynaptic (axoaxonic) input can dial release up or down."));
k.push(h1("3. Neurotransmitters You Must Know"));
k.push(detail(["Transmitter","Story"],[
 ["**Acetylcholine** (cholinergic)","Excitatory; essential for muscle contraction at the NMJ. **Myasthenia gravis**: autoimmune loss of postsynaptic ACh receptors → weakness + fatigue. Managed with immunosuppression + ACh-mimicking (agonist) drugs; PT/OT support function through crises"],
 ["**Glutamate** (amino acid)","The main excitatory CNS transmitter; excess → excitotoxicity; amino-acid family drugs include antiepileptics"],
 ["**GABA + glycine** (amino acids)","Main inhibitory transmitters. Low GABA → seizures, anxiety. **Agonists mimic it**: Valium, barbiturates, **baclofen** (SCI spasticity — mimics GABA to inhibit unwanted contraction; monitor sedation)"],
 ["**Dopamine** (amine)","Three sites of action; basal-ganglia loss = **Parkinson's disease** → dopamine-replacement agents"],
 ["**Norepinephrine** (amine)","Arousal and autonomic tone; know its table"],
 ["**Serotonin** (amine)","Low → anxiety/depression; excess → schizophrenia association in your table"],
 ["**Peptides / opioids**","Pain-management relevance; gas class (NO) exists — know the categories: cholinergic, amino acid, amine, peptide, gas"]],[2600,6760]));
k.push(tip("Agonist mimics the transmitter; antagonist blocks the receptor. Logic you can derive instead of memorize: excess excitation → give an antagonist; missing inhibition → give an agonist of the inhibitor. That single rule generates baclofen, benzodiazepines, and the Parkinson's strategy."));

k.push(pageBreak());
/* ─────────────── TOPIC 1.4: NEUROLOGIC DISEASE OVERVIEW ─────────────── */
k.push(banner("TOPIC 1.4","Neurologic Disease Overview — Dr. Lindsay Perry (Lundy-Ekman Ch 3)"));
k.push(spacer());
k.push(h1("1. Vocabulary"));
k.push(bullet("**Neurologic diagnosis** = umbrella for disease or disorder. **Disorder** = a set of problems within CNS/PNS structures (malfunction, injury, or pathological process). **Disease** = distinct and measurable over time. **Syndrome** = a collection of signs and symptoms without a specified origin. **Signs** = observable impairments you examine (weakness, sensory loss); **symptoms** = the patient's subjective experience. You treat a syndrome the same way you treat a disease: examine the signs, account for the symptoms, tie both to function."));
k.push(h1("2. Six Components to Know for EVERY Diagnosis"));
k.push(bullet("1 **Etiology** (pathology/pathogenesis, risk factors, incidence + prevalence) · 2 **Diagnostics** (signs, symptoms, neurodiagnostic tests — used to hypothesize impairments and pick tests/measures) · 3 **Prognosis** (progressive vs non-progressive, progression trends, prognostic factors, expected sequelae — feeds your rehab prognosis and goals) · 4 **Medical/surgical management** · 5 **Implications for PT** (role, options, contraindications/precautions, prevention, team) · 6 **Consumer + professional resources** (support organizations you can hand patients)."));
k.push(h1("3. Eight Etiology Categories"));
k.push(detail(["Category","Exemplars and logic"],[
 ["**Inflammatory**","Guillain-Barré (Schwann-cell myelin; PNS regenerates → plateau, reversal, usually full recovery), transverse myelitis, meningitis; often viral. Post-polio syndrome: LMN deficits years after polio"],
 ["**Degenerative**","Progressive — function worsens as disease advances; some idiopathic. Taught by brain region in later modules"],
 ["**Immunological**","MS and kin — immune attack on CNS myelin"],
 ["**Toxic-metabolic**","Toxins, metabolic derangement"],
 ["**Traumatic**","TBI (open vs closed; epidural/subdural bruising; **diffuse axonal injury** — shearing tears axons, and CNS axons don't regenerate → severe functional loss) and SCI (tetraplegia vs paraplegia, complete vs incomplete). Highest incidence: young males; survivors age WITH their impairments. Non-progressive"],
 ["**Vascular**","Stroke/CVA: **ischemic** (clot blocks flow → neuronal death) vs **hemorrhagic** (blood leaks — toxic to tissue + raises ICP). Congenital AV malformations can be repaired if found early. Non-progressive"],
 ["**Developmental**","This module's neural-tube defects and their kin"],
 ["**Tumor**","Gliomas, meningiomas; benign or malignant; compress/shift structures and choke blood supply → presentation maps to location, like stroke. Remember chemo/radiation side effects in your plan"]],[2600,6760]));
k.push(h1("4. The Seven Clinical-Reasoning Questions"));
k.push(bullet("1 **PNS or CNS?** (UMN vs LMN signs differentiate) · 2 **Focal, multifocal, or diffuse?** (focal = one localized lesion, e.g., tumor; multifocal = several, e.g., MS; diffuse = bilateral without crossing midline, e.g., Alzheimer's) · 3 **Symmetric right vs left?** (unilateral signs point to the contralateral hemisphere — tracts cross) · 4 **Does the pattern indicate a syndrome?** · 5 **Which region(s)?** (map signs to neuroanatomy) · 6 **Speed of onset and pattern of progression?** (stage of healing; progressive vs static — drives goals toward recovery vs compensation/adaptation/family education) · 7 **What is the diagnosis?** — confirm it, or collect the data and refer."));
k.push(tnote("PTs do not medically diagnose. Direct-access script when you suspect (say) Parkinson's from stooped posture, shuffle, freezing, reduced unilateral arm swing: document the findings, keep treating the referral problem, and recommend a neurologist to patient AND physician using only your data — never a diagnosis. Rehearse this framing; you will be asked to produce it."));
k.push(bullet("**Fell Compendium of Neurologic Disorders** — the F.A. Davis reference linked in your Canvas module (Topic 1.4 Downloadable Resource). Don't memorize it; use it to look up each diagnosis's components as the course introduces them."));

k.push(pageBreak());
/* ─────────────── REQUIRED STRUCTURES + RESOURCES ─────────────── */
k.push(banner("MODULE 1","Required Structures, Resources, and Study System"));
k.push(spacer());
k.push(h1("1. Required Neuroanatomical Structures"));
k.push(bullet("You are responsible for the **location AND function** of every structure on the Module 1 list, examined via the UBC Functional Neuroanatomy site (3D models: whole brain, ¾ brain, brainstem + Circle of Willis, limbic system, brainstem + cranial nerves; coronal/horizontal slices + micrographs) and these regions: basal ganglia, cortical + vertebrobasilar blood supply, brainstem, cerebellum, Circle of Willis, cortex, cranial nerves, herniations, Broca/Wernicke language areas, limbic system, meninges, spinal cord (spinothalamic, corticospinal, DCML pathways), subcortical fibers, thalamus + diencephalon, ventricles, visual system."));
k.push(linkBox("Required structure-study links",[
 ["UBC Functional Neuroanatomy","https://neuroanatomy.ca/","— 3D models, cross-sections, learning activities"],
 ["KenHub Neuroanatomy","https://www.kenhub.com/","— alternate atlas"]]));
k.push(h1("2. Required Study System (from the sync session)"));
k.push(bullet("Required: faculty **VOPPs** · **Lundy-Ekman** (Neuroscience: Fundamentals for Rehabilitation) · **Fell** (Lifespan Neurorehabilitation) · **PhysioU** (join via the cohort link in Canvas): Learn by Slice, Neuroanatomy Explorer, impairment testing + outcome-measure videos · Neuroscientifically Challenged 2-minute videos. Extra: UBC site, KenHub, optional module sections."));
k.push(bullet("**The course's mastery ladder** — every module climbs it: identify/locate structures → know functions → describe impairments → link impairments to structures → recognize the clinical pattern → perform examination → create evaluation → design plan of care. Passive review (re-reading, highlighting, clicking through) is for first exposure only; build **structure/location/function/impairment/clinical-presentation tables** and use discussion, concept maps, cases, and peer teaching for mastery."));
k.push(h1("3. Module 1 Reading Map (Lundy-Ekman)"));
k.push(detail(["Topic","Chapter and pages"],[
 ["1.1 Development","Ch 8: Development of the Nervous System, pp. 112–123"],
 ["1.2 Neuroanatomy","Ch 2: Neuroanatomy, pp. 4–43"],
 ["1.3 Neurophysiology","Ch 5, pp. 61–67 + 72–82 · Ch 6, pp. 85–89 + 90–98"],
 ["1.4 Disease overview","Ch 3: Neurologic Disorders and the Neurologic Examination, pp. 44–47"]],[2600,6760]));
k.push(tnote("Module assignments: Neuroanatomy Explorer Challenge #1 and the Module 1 Knowledge Check (retake window available — check current dates in Canvas). Exam 1 covers Modules 1 and 2."));
k.push(spacer());
k.push(...glossary("Module 1 Quick-Reference Glossary",[
 ["Neural tube","Folded neural plate; source of the entire CNS. Closes cervical-first; neuropores close by day 30"],
 ["Neural crest","Cells that split from the tube; become peripheral sensory neurons"],
 ["Conus medullaris","Tapered end of the cord at L1–L2; cauda equina continues below"],
 ["Sclerotome / myotome / dermatome","Somite parts → vertebrae + skull / skeletal muscle / dermis"],
 ["Motor (basal) plate","Ventral neural tube → LMNs → adult ventral horn"],
 ["Association (alar) plate","Dorsal neural tube → sensory interneurons → adult dorsal horn"],
 ["Tract / lemniscus / fasciculus / column / peduncle / capsule","Names for bundled myelinated CNS axons"],
 ["Ganglia vs nuclei","Cell-body groups in PNS vs CNS; surface gray matter = cortex"],
 ["Choroid plexus","Vascular CSF factory in lateral, 3rd, 4th ventricles"],
 ["Falx cerebri / tentorium cerebelli","Dural folds: between hemispheres / over the cerebellum"],
 ["Circle of Willis","Arterial ring joining carotid (anterior) and vertebrobasilar (posterior) supplies"],
 ["Saltatory conduction","Action potential jumping node-to-node along myelinated axons"],
 ["Temporal / spatial summation","Adding local potentials over time / across membrane regions"],
 ["EPSP / IPSP","Excitatory vs inhibitory postsynaptic potential"],
 ["Agonist / antagonist","Mimics the transmitter / blocks its receptor"],
 ["Focal / multifocal / diffuse","One lesion / several lesions / bilateral without crossing midline"],
 ["Anterograde / retrograde","Transport soma → terminal / terminal → soma"]]));

build(k,"/home/claude/out/Module1_IntroductionToNeuroscienceAndNeuroanatomy_StudyNotes.docx");
