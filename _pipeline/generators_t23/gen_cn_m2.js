const L = require('/home/claude/notes_lib.js');
const {C,h1,h2,body,bullet,tnote,tip,compare,detail,infoBox,banner,glossary,fig,pageBreak,spacer,cover,build,linkBox} = L;
const k=[];

k.push(...cover("Clinical Neuroscience (DPTH 6141)","Module 2: Cerebrum and Vasculature",
 "Topics 2.1–2.4 • Lectures by Dr. Kerry Mallini • Reading: Lundy-Ekman Ch 25–27",
 ["Watch all VOPPs in your own Canvas module — these notes condense them, they don't replace them",
  "★ The exam logic of this module: given impairments → name the artery, hemisphere, and structure. Practice every syndrome in that direction",
  "Exam 1 covers Modules 1 and 2 — the sync mini-cases below are the rehearsal"]));

/* ─────────────── TOPIC 2.1a: CEREBRAL CORTEX ─────────────── */
k.push(banner("TOPIC 2.1","The Cerebral Cortex"));
k.push(spacer());
k.push(h1("1. Structure and Organization"));
k.push(bullet("The cortex is surface gray matter (somas, axons, dendrites) organized into **six layers**: molecular (outermost — mostly axons + dendrites), external granular, external pyramidal, internal granular, internal pyramidal, multiform (projects to the thalamus). **Granule cells** = small interneurons that stay in the cortex; **pyramidal cells** = the cortex's OUTPUT cells, their axons leaving as projection, commissural, or association fibers."));
k.push(bullet("**Brodmann** mapped 52 cortical areas by cellular structure (area 4 = primary motor, 3-1-2 = primary somatosensory, 17 = primary visual). **Do NOT memorize the numbers** — just recognize what they are when the literature uses them. Modern localization adds neurosurgical stimulation mapping and fMRI."));
k.push(h1("2. Five Specialized Categories — and How They Chain"));
k.push(detail(["Category","Job"],[
 ["**Primary sensory cortex**","Discriminates intensity and quality of one sense's raw input"],
 ["**Secondary sensory cortex**","More complex analysis — recognition"],
 ["**Association cortex**","Controls behavior, interprets sensation, processes emotion + memory"],
 ["**Motor planning areas**","Organize movement"],
 ["**Primary motor cortex**","Descending control of motor output"]],[2600,6760]));
k.push(bullet("The bell example, worth reproducing on the exam: primary visual cortex discriminates shape/brightness → secondary visual cortex recognizes it's a bell → association cortex names it, recalls its sound, decides to ring it → premotor cortex plans the reach → primary motor cortex sends the commands down the cord."));
k.push(h1("3. Primary Sensory Areas — Location, Job, Lesion"));
k.push(detail(["Area (location)","Function → lesion effect"],[
 ["**Primary somatosensory** — postcentral gyrus + central sulcus (parietal)","Discriminates shape, texture, size via the 3-neuron pathway (peripheral afferent → dorsal column/medial lemniscus → thalamus → cortex). Lesion: **loss of tactile localization + conscious proprioception**"],
 ["**Primary auditory** — lateral sulcus + superior temporal gyrus","Discriminates loudness + pitch; input from BOTH cochleae via inferior colliculus → medial geniculate. Unilateral lesion: **loss of sound LOCALIZATION** (not deafness)"],
 ["**Primary vestibular** — posterior end of lateral fissure (parieto-insular cortex)","Discriminates head position/movement; contributes to perceived vertical. Lesion: altered head-position awareness + **lateropulsion**"],
 ["**Primary visual** — calcarine sulcus + adjacent gyri (occipital, medial)","Distinguishes light intensity, shape, size, location, movement; retina → lateral geniculate → cortex. Lesion: **contralateral homonymous hemianopia**"]],[3300,6060]));
k.push(tnote("Homunculus: both primary strips are somatotopic, with disproportionate territory for hand + face (fine control). Sync mnemonic for the lateral-to-medial order: FAT LEGS — Face, Arm, Trunk laterally, legs hanging over the medial edge. This single map explains why MCA strokes hit face + arm and ACA strokes hit the leg."));
k.push(h1("4. Perception: Secondary and Association Areas"));
k.push(bullet("**Perception** = interpretation of sensations into meaningful forms — an active process involving brain + body + environment, memory, motivation, expectation, and active search for relevant input. Secondary areas analyze input from thalamus AND primary cortex, one modality each: **secondary somatosensory** → stereognosis (identify objects by touch, comparing with memories) · **secondary visual** → color, motion, object recognition, spatial relationships, visual fixation · **secondary auditory** → classifies sounds as language, music, or noise against memory. **Association areas** integrate across modalities for perception, memory, language, problem-solving."));
k.push(h1("5. Motor Cortex and Planning Areas"));
k.push(bullet("**Primary motor cortex** — precentral gyrus, anterior to the central sulcus; source of most **corticospinal tract** neurons; selective control of **contralateral** voluntary movement, especially fine hand + face movements. Motor planning sits anterior to it and receives from secondary sensory areas, basal ganglia, and cerebellum (relayed by thalamus)."));
k.push(detail(["Planning area","Function → lesion"],[
 ["**Supplementary motor area (SMA)**","Initiation of movement, eye/head orientation, bimanual + sequential movement planning → lesion: **apraxia**"],
 ["**Premotor cortex**","Goal-oriented action: prepares, selects, initiates movement → lesion: apraxia; also impaired speed/automaticity of contralateral reach + grasp, impaired sequential movements, gait + posture"],
 ["**Inferior frontal gyrus — LEFT (language-dominant)**","**Broca's area**: plans speech movements + grammar → lesion: **Broca's (expressive) aphasia** — comprehends but can't form words, spoken AND written"],
 ["**Inferior frontal gyrus — RIGHT**","Plans NONVERBAL communication (emotional gestures, tone of voice) + social/spatial processing → lesion: difficulty producing nonverbal communication"]],[3300,6060]));

k.push(pageBreak());
/* ─────────────── TOPIC 2.1b: DIENCEPHALON + SUBCORTICAL ─────────────── */
k.push(banner("TOPIC 2.1 (cont.)","Diencephalon and Subcortical Structures"));
k.push(spacer());
k.push(h1("1. The Cerebrum's Parts"));
k.push(bullet("Cerebrum = **diencephalon + two cerebral hemispheres**. Hemispheres = cerebral cortex (surface gray) + subcortical structures (subcortical white matter, basal ganglia, amygdala). The diencephalon sits center-cerebrum, above the brainstem, nearly enveloped by the hemispheres."));
k.push(h1("2. Thalamus — Gatekeeper of the Cortex"));
k.push(bullet("Largest diencephalon subdivision; bilateral, egg-shaped nuclei collection above the brainstem. Receives from basal ganglia, cerebellum, and **every sensory system EXCEPT olfaction**; regulates all information flow to the cortex. Anatomical divisions: anterior, medial, lateral (lateral subdivides dorsal/ventral) + three outliers (interlaminar, reticular, midline)."));
k.push(detail(["Functional group","Role"],[
 ["**Relay nuclei**","Convey sensory info (except smell) to cortex, basal ganglia, cerebellum"],
 ["**Association nuclei**","Process emotional + some memory information; integrate sensations"],
 ["**Nonspecific nuclei**","Regulate consciousness, arousal, attention"]],[2600,6760]));
k.push(h1("3. Hypothalamus, Pituitary, Epithalamus, Subthalamus"));
k.push(bullet("**Hypothalamus** — below the thalamus; structurally diencephalon, functionally limbic. Runs homeostasis: eating, reproductive + defensive behaviors, emotional expression (pleasure, rage, fear, aversion), circadian rhythms, endocrine regulation, sympathetic activation. Controls the **pituitary** via the pituitary stalk → metabolism, reproduction, stress response, urine production."));
k.push(compare("ANTERIOR pituitary hormones","POSTERIOR pituitary hormones",
 ["Growth hormone (GH)","Thyroid-stimulating (TSH)","Adrenocorticotropic (ACTH)","Luteinizing (LH) + follicle-stimulating (FSH)","Prolactin"],
 ["Antidiuretic hormone (ADH)","Oxytocin","Targets overall: adrenal cortex, thyroid, ovaries/testes"],
 C.blue,C.teal,C.lightBlue,C.lightTeal));
k.push(bullet("**Epithalamus** — between hemispheres and midbrain; contains the **pineal gland** → melatonin → circadian/sleep-wake regulation; also influences pituitary, adrenal, parathyroid secretion and the islets of Langerhans (blood sugar). **Subthalamus** — superior to the substantia nigra; key basal-ganglia circuit node that facilitates BG output."));
k.push(bullet("**Basal ganglia** — deep nuclei for motor control AND psychological function: predicts effects of actions, makes + executes action plans, sequences movement, regulates muscle tone + force, turns motor programs on and off (inhibits some movements, permits others); also cognition, behavior, emotion."));
k.push(h1("4. Subcortical White Matter — Three Fiber Classes"));
k.push(detail(["Class","Connects"],[
 ["**Projection fibers**","Subcortical structures ↔ cortex, and cortex → spinal cord, brainstem, basal ganglia, thalamus. Nearly all pass through the **internal capsule** then fan out as the **corona radiata**"],
 ["**Commissural fibers**","Homologous structures across the midline: **corpus callosum** (largest — links the hemispheres), **anterior commissure**"],
 ["**Association fibers**","Cortical regions within ONE hemisphere: short fibers connect adjacent gyri; long fibers connect lobes (e.g., the **cingulum** ties frontal, parietal, temporal cortices together)"]],[2600,6760]));

k.push(pageBreak());
/* ─────────────── TOPIC 2.2: DISORDERS OF THE CEREBRUM ─────────────── */
k.push(banner("TOPIC 2.2","Disorders Affecting the Cerebrum"));
k.push(spacer());
k.push(h1("1. Structural Lesions"));
k.push(detail(["Lesion","Presentation"],[
 ["**Thalamic lesion**","Disrupts ascending sensory flow → severely reduced or absent **contralateral sensation, proprioception most affected**. Intralaminar-nuclei loss (Parkinson's, thalamic stroke, TBI) → impaired consciousness up to minimally-conscious/vegetative states. **Posterior thalamic stroke** interrupts vestibular-nuclei → thalamus → vestibular-cortex pathway → **lateropulsion (pusher behavior)**: patient pushes from the strong side toward the paretic side"],
 ["**Pituitary tumor**","~10% of intracranial neoplasms; mostly benign + slow-growing. Symptoms from mass effect + hypo/hypersecretion: headache, nausea, irregular menses/lactation, sexual dysfunction, BP + glucose changes, growth disorders. **Bitemporal hemianopia** with large tumors — the optic chiasm sits directly above the gland"],
 ["**Internal capsule lesion**","Dense projection axons → even a SMALL lesion is severe (commonly occlusion/hemorrhage of its supplying artery): contralateral motor + sensory deficits, hemiplegia/hemiparesis, spasticity, impaired coordination"],
 ["**Callosotomy**","Surgical partial/complete severing of the corpus callosum for drug-resistant epilepsy — stops seizure spread between hemispheres; hemispheres can no longer share information (split-brain effects; one cause of alien hand)"]],[2900,6460]));
k.push(h1("2. Lesion Effects by Cortical Area"));
k.push(compare("PRIMARY sensory lesions","SECONDARY sensory lesions → AGNOSIAS + optic ataxia",
 ["Somatosensory → lost tactile localization + conscious proprioception",
  "Auditory (unilateral) → can't localize sound",
  "Vestibular → lateropulsion",
  "Visual → contralateral homonymous hemianopia"],
 ["**Agnosia** = can't recognize via one sense despite intact sense. **Astereognosis** — can't identify by touch (secondary somatosensory)",
  "**Visual agnosia** — describes shape/size but can't identify (ventral visual stream)",
  "**Auditory agnosia** — impaired sound ID despite intact hearing (secondary auditory)",
  "**Optic ataxia** — perceives objects fine but can't USE vision to direct movement (dorsal visual stream)"],
 C.blue,C.teal,C.lightBlue,C.lightTeal));
k.push(bullet("**Primary motor cortex lesion** → contralateral paresis, loss of selective motor control (worst in hand + lower face), **spastic dysarthria** (harsh, awkward — UMN) vs **flaccid dysarthria** (breathy, soft, imprecise — LMN). **Alien hand syndrome** — involuntary, seemingly purposeful limb movement perceived as foreign; only the isolated contralateral primary motor cortex activates; caused by callosotomy or various cortical/subcortical lesions."));
k.push(bullet("**Apraxia** — a motor agnosia: skilled-movement knowledge lost despite intact sensation, strength, coordination, comprehension (socks over shoes); damage to premotor cortex, SMA, or inferior parietal lobe. **Motor perseveration** — uncontrollable repetition of a movement (lock-unlock-lock the wheelchair brakes); tracks AMOUNT of cerebral damage, not a specific site."));
k.push(h1("3. Functional Neurologic Disorder (FND)"));
k.push(bullet("Signs/symptoms unexplained by classical neurologic disease — a genuine multi-network **dysfunction of cerebral networks** (function, not structure). Patients are NOT faking or malingering; old labels (psychogenic, conversion, non-organic) are obsolete. Diagnosis rests on **incompatibility between exam findings and function**, not exclusion. Second most commonly diagnosed disorder in neurology; pain, fatigue, cognitive issues often ride along."));
k.push(compare("FUNCTIONAL SENSORY disorders","FUNCTIONAL MOVEMENT disorders",
 ["Dizziness, somatosensory, or visual symptoms; consensus term for functional dizziness: **persistent postural-perceptual dizziness (3PD)**",
  "Clinical flags: absent LE joint-position sense YET normal tandem gait · absent UE position sense YET normal eyes-closed finger-to-nose · **sensory loss with a sharp midline edge**"],
 ["Genuine weakness/abnormal movement without classic disease",
  "Flags: abrupt onset, fast progression to max disability · **inconsistent** amplitude/frequency/distribution · improves with DISTRACTION, worsens under observation · disability greater than exam findings predict"],
 C.blue,C.teal,C.lightBlue,C.lightTeal));
k.push(bullet("**Diseases affecting many cerebral structures:** stroke (deficits depend on etiology, location, size — intensive task-specific PT/OT/speech beats remediation approaches; more in Neuromuscular II) · tumor (compression effects by size + location; named for cell type; prognosis by histology, size, location, age, treatment response) · **epilepsy** (sudden excessive cortical discharge; focal = restricted cortex, generalized = whole cortex; post-ictal confusion + amnesia; treated with drugs, surgery, behavior change, vagus-nerve stimulation)."));

k.push(pageBreak());
/* ─────────────── TOPIC 2.3: CSF SYSTEM ─────────────── */
k.push(banner("TOPIC 2.3","Cerebrospinal Fluid System"));
k.push(spacer());
k.push(h1("1. Ventricles — the Full Anatomy"));
k.push(bullet("**Lateral ventricles** (paired, C-shaped): body + atrium + anterior/posterior/inferior horns, extending into every lobe; much of the wall is the **caudate nucleus**; separated medially by the **septum pellucidum**. → **interventricular foramen (Monro)** → **3rd ventricle** (midline slit in the diencephalon, walled by thalamus + hypothalamus) → **cerebral aqueduct (Sylvius)** through the midbrain → **4th ventricle** (posterior to pons + medulla, anterior to cerebellum; continuous inferiorly with the cord's central canal) → subarachnoid space via **two lateral foramina of Luschka + one medial foramen of Magendie** → arachnoid villi reabsorb CSF into the venous sinuses."));
k.push(bullet("CSF: clear filtrate of blood made mostly by the **choroid plexus** (capillary network in lateral, 3rd, 4th ventricles) plus extracellular-fluid leakage (filtration + active transport). Functions: mechanical protection + shock absorption, **buoyancy (cuts effective brain weight ~95%)**, homeostasis (water, amino acids, vitamins, proteins, ions), metabolite/waste removal, immune protection."));
k.push(bullet("**Glymphatic system** (glial + lymphatic): moves fluid from peri-arterial channels through brain tissue into lymphatic channels around vessels and CN tracts — the brain's waste-clearance subsystem, **most active during sleep**; impaired clearance is implicated in neurodegeneration."));
k.push(h1("2. Meninges — with the Detail M1 Skipped"));
k.push(bullet("**Pia** — thin, vascular, adherent, nourishes the cord/brain; its **denticulate ligaments** anchor the cord to the dura. **Subarachnoid space** (between pia and arachnoid) holds CSF + vessels. **Arachnoid** — web-like collagen/elastic layer; its **villi** protrude into venous sinuses to reabsorb CSF. **Dura** — tough, fibrous, bound to the skull; contains vessels + venous sinuses. Clinically relevant spaces: epidural (skull-dura), subdural (dura-arachnoid), subarachnoid."));
k.push(h1("3. Clinical Disorders of the CSF System"));
k.push(compare("EPIDURAL hematoma","SUBDURAL hematoma",
 ["Between **skull and dura**",
  "Head injury with skull fracture tearing an ARTERY (classically middle meningeal)",
  "**Rapid** onset: LOC → **lucid interval** (hours of seeming normal) → headache, vomiting, confusion, falling consciousness",
  "Emergency surgery to evacuate + repair"],
 ["Between **dura and arachnoid**",
  "Trauma tearing bridging VEINS",
  "Acute (rapid) or **chronic** (slow — subtle behavior/cognition changes, easy to miss in older adults)",
  "Both types compress + displace neural tissue — life-threatening"],
 C.blue,C.teal,C.lightBlue,C.lightTeal));
k.push(detail(["Disorder","Picture"],[
 ["**Hydrocephalus — communicating**","Ventricular system open; CSF flows but is inadequately REABSORBED"],
 ["**Hydrocephalus — noncommunicating**","Blockage within the system, most often the **cerebral aqueduct**"],
 ["**Infant presentation**","Skull unfused → enlarging head, rapidly rising head circumference, irritability, poor feeding, inactivity, downward (sunsetting) gaze. Congenital causes: 4th-ventricle foramina fail to open, aqueduct blockage, 4th-ventricle cysts, Arnold-Chiari"],
 ["**Older child/adult presentation**","Rigid cranium → pressure compresses white matter: gait + balance impairment, incontinence, headache, frontal-lobe signs (emotion, planning, memory, intellect), visual problems, nausea. Language + declarative memory usually SPARED. Treatment: **shunt** diverting CSF for reabsorption (one-way valve if progressive)"],
 ["**Meningitis**","Bacterial or viral inflammation of the meninges: headache, fever, confusion, vomiting, **neck stiffness**, pain intensified by upright position, head movement, sneezing, coughing"]],[3100,6260]));

k.push(pageBreak());
/* ─────────────── TOPIC 2.4: VASCULAR DISORDERS ─────────────── */
k.push(banner("TOPIC 2.4","Blood Supply, Stroke, Fluid Dynamics, Intracranial Pressure"));
k.push(spacer());
k.push(h1("1. Classifying Vascular Events by Progression"));
k.push(bullet("**TIA** — brief FOCAL loss of brain function, full recovery within **24 hours**; ischemic; still a medical emergency. **Completed stroke** — deficits persist beyond a day and are STABLE. **Progressive stroke** — deficits increase intermittently (continued clot formation or repeated clots)."));
k.push(h1("2. Ischemic vs Hemorrhagic Stroke (CVA)"));
k.push(compare("ISCHEMIC (infarction) — 85–90%","HEMORRHAGIC",
 ["Clot/debris blocks a vessel: **thrombus** (forms in the brain vessel) vs **embolus** (forms elsewhere, travels up)",
  "**MCA is the most commonly affected artery**; abrupt deprivation → near-immediate deficits",
  "**Lacunar infarcts** — small deep arteries (basal ganglia, internal capsule, thalamus, brainstem): slow-developing, purely motor OR purely sensory, usually good recovery",
  "SLOW occlusion allows collateral circulation → better outcomes than abrupt"],
 ["Vessel ruptures: downstream vessels starved AND extravascular blood presses on tissue (blood is toxic to brain)",
  "Worst deficits in the first hours, then gradual improvement as edema resolves and blood clears",
  "**Intracerebral** — bleeding into brain tissue (often trauma, HTN)",
  "**Subarachnoid** — sudden excruciating headache + brief LOC; initial findings NOT focal; progressive from continued bleeding or secondary hydrocephalus; vasospasm + infarction are common sequelae"],
 C.blue,C.teal,C.lightBlue,C.lightTeal));
k.push(bullet("Common symptoms across strokes: sudden unilateral numbness/weakness of face, arm, or leg · sudden confusion, trouble speaking or understanding · sudden visual loss in one or both eyes · severe headache without known cause."));
k.push(h1("3. Stroke Syndromes by Artery ★ THE exam table"));
k.push(detail(["Territory","Presentation"],[
 ["**Vertebral / basilar (posterior, ~20% of ischemic strokes)**","Vertebral dissection: posterior neck/occiput pain into the shoulders. Vertebrobasilar ischemia: gait + limb ataxia, limb weakness, oculomotor palsies, oropharyngeal dysfunction (+ vision loss, diplopia, numbness, dizziness) — patients show SEVERAL at once; one symptom alone is probably not VB ischemia. Intracranial vertebral emboli → **cerebellar infarction**: dizziness/vertigo, can't sit unsupported, difficulty walking, nausea, dysarthria, headache"],
 ["**Basilar occlusion**","Complete = fatal (brainstem vital centers). Partial: tetraplegia, sensory loss, coma, CN signs. **Locked-in syndrome** — consciousness preserved, no voluntary movement below the neck, no speech"],
 ["**ACA — cortical branches**","Personality change (emotional unresponsiveness, impulsivity), divergent-thinking deficits; **contralateral hemiplegia + fine-touch hemisensory loss, LE ≫ face/UE** (medial homunculus)"],
 ["**ACA — deep branches**","**Gait apraxia** (anterior putamen + frontopontine axons in the internal capsule): can't walk despite intact sensation, automatic output, and task understanding"],
 ["**MCA — cortical branches**","Optic radiation + lateral sensorimotor cortex: contralateral **homonymous hemianopia**, hemiplegia + hemisensory loss **face/UE ≫ LE**. LEFT (language) hemisphere → **aphasia**; RIGHT hemisphere → impaired nonverbal communication, spatial disorganization → **apraxia**, **neglect** (behaves as if one side of body/space doesn't exist)"],
 ["**MCA — deep branches**","Striatum + internal capsule → contralateral hemiplegia affecting **face, UE, LE equally**"],
 ["**PCA**","Midbrain branches → oculomotor paresis. Calcarine branches → **cortical blindness** in the contralateral visual field. Deep/thalamic branches → **thalamic stroke**: severe pain, contralateral hemisensory loss, flaccid hemiparesis"],
 ["**Watershed areas**","Anastomotic border zones between distal cerebral-artery branches — the backup routes, and the first casualties of LOW global flow: **upper-limb paresis + paresthesias**"]],[2700,6660]));
k.push(tip("Homunculus shortcut for the two big cortical syndromes: ACA = leg, MCA = face + arm. Add the hemisphere rule (left = language, right = spatial/nonverbal + neglect) and you can decode most cortical stroke vignettes."));

k.push(pageBreak());
k.push(banner("TOPIC 2.4 (cont.)","Vascular Formation, Fluid Dynamics, ICP, Herniation"));
k.push(spacer());
k.push(h1("4. Vascular Formation Disorders"));
k.push(bullet("**AV malformation (AVM)** — developmental tangle connecting arteries directly to veins WITHOUT capillaries; usually silent until rupture (then: ischemia downstream + pressure from extravascular blood); most common in brain and spinal cord; if found early, surgically repairable. **Aneurysm** — abnormal ballooning of a weakened vessel wall (most common: cerebral arteries + aorta); thin wall → rupture risk → sudden death or massive deficits."));
k.push(h1("5. Blood-Brain Barrier and Autoregulation"));
k.push(bullet("**BBB** — tight junctions between capillary endothelial cells exclude large molecules (proteins, some amino acids, free fatty acids), pathogens — and many DRUGS (dopamine can't cross; its precursor **L-dopa** can — the Parkinson's strategy). Absent in parts of the hypothalamus and around the 3rd/4th ventricles, where **tanycytes** guard chemical communication sites."));
k.push(bullet("The brain stores essentially no glucose or oxygen — it needs constant flow. Oxygen demand RISES from brainstem to cortex, so **the cortex succumbs to hypoxia first** — the anatomy behind persistent vegetative states (cortices destroyed, brainstem survives). **Autoregulation** by BP + metabolites: arteries DILATE when BP/O2 low, blood acidotic, CO2/lactic acid high; CONSTRICT when the reverse. **Cerebral edema** — excess tissue fluid from concussion (leaky capillaries), cardiac arrest, or high altitude (HACE — a self-amplifying pressure-ischemia-dilation cycle; treat by descending, medication, shunts)."));
k.push(h1("6. Intracranial Pressure"));
k.push(bullet("ICP = CSF pressure inside the skull. **Normal 5–15 mmHg; >15 abnormal; >20 pathologic** and potentially fatal — compresses tissue, displaces structures, causes hydrocephalus, herniation, and strangled blood supply. Causes of elevation: cerebral edema, hydrocephalus, tumor, bleeding, other mass lesions. Signs: headache, drowsiness, nausea/vomiting, altered consciousness, visual changes, neurologic deficits (e.g., frontal-lobe gait ataxia)."));
k.push(h1("7. Brain Herniations — Know All Four"));
k.push(detail(["Type","Mechanism → signs"],[
 ["**Cingulate**","Cingulate cortex forced UNDER the falx cerebri by a hemispheric mass. May be silent — or compresses the **ACA** → contralateral LE motor deficits"],
 ["**Uncal**","**Uncus** (innermost temporal lobe) displaced medially into the tentorial opening → **brainstem compression + oculomotor (CN III) dysfunction + impaired consciousness**"],
 ["**Central**","Cerebral lesion pushes the diencephalon, midbrain, pons INFERIORLY → basilar branches stretch → brainstem ischemia/edema → **bilateral paralysis**, consciousness + oculomotor impairment"],
 ["**Tonsillar**","Cerebellar tonsils forced through the **foramen magnum** (hydrocephalus, tumor, hemorrhage, edema, trauma) → compresses brainstem vital centers (breathing, heart rate, consciousness, CSF flow) — life-threatening"]],[2400,6960]));
k.push(bullet("**Venous drainage:** superficial veins (cortex + adjacent white matter) → superior sagittal sinus or inferior sinuses (incl. cavernous); deep veins (basal ganglia, diencephalon) → straight sinus; the two systems join at the **confluence of sinuses** → transverse sinuses → **internal jugular veins**."));

k.push(pageBreak());
/* ─────────────── REQUIRED STRUCTURES + STUDY ─────────────── */
k.push(banner("MODULE 2","Required Structures, Cases, and Reading Map"));
k.push(spacer());
k.push(h1("1. Required Structures (know location + function)"));
k.push(bullet("**Cortex:** primary sensory (postcentral gyrus), primary motor (precentral gyrus), SMA, Broca's area, premotor cortex, primary visual, primary auditory, secondary sensory. **Subcortical:** thalamus, hypothalamus, epithalamus, subthalamus, pituitary, basal ganglia (caudate, putamen, globus pallidus, substantia nigra, subthalamic nucleus). **White matter:** internal capsule, corona radiata, corpus callosum, anterior commissure. **Ventricular:** lateral ventricles, interventricular foramen, 3rd ventricle, cerebral aqueduct, 4th ventricle. **Meninges + spaces:** pia, arachnoid, dura, subarachnoid, subdural, epidural. **Cord vessels:** anterior + posterior spinal arteries. Use UBC (3D models, slices, stroke model) + KenHub + the Lundy-Ekman atlas."));
k.push(h1("2. Sync Mini-Cases — the Exam Rehearsal"));
k.push(detail(["Vignette","Answer chain"],[
 ["Intact light touch + proprioception, can't identify a key in the pocket by touch","SECONDARY deficit → **astereognosis** → secondary somatosensory cortex → trouble functioning in the dark/low light"],
 ["Describes an object's size + shape, can't say what it is; vision intact","**Visual agnosia** — PERCEPTUAL problem → visual association areas (occipital + temporal); primary visual cortex intact, hence the preserved description; safety risk: unrecognized hazards"],
 ["Normal strength + sensation, follows commands, can't sequence a sit-to-stand","**Apraxia** → premotor cortex + SMA; primary motor cortex intact, planning disrupted"],
 ["R facial droop + R arm > leg weakness + expressive aphasia + R visual field cut","**LEFT MCA**: UE ≫ LE fits the MCA homunculus territory; aphasia localizes to the left; primary motor cortex + Broca's area (IFG) affected"],
 ["Post-anticoagulant-discontinuation stroke, contralateral LE-dominant hemiparesis; 6 weeks later NEW language deficit + R homonymous hemianopia","Initial: **ischemic ACA** (embolic risk after stopping Coumadin; medial frontal/parietal + SMA). The new findings are NOT an ACA extension — language + optic radiation are **MCA/PCA territory** → new event"]],[3400,5960]));
k.push(h1("3. Reading Map (Lundy-Ekman)"));
k.push(detail(["Topic","Chapter and pages"],[
 ["2.1 Cerebrum","Ch 27, pp. 474–485 (diencephalon/subcortical 474–481 · cortex 481–485)"],
 ["2.2 Disorders of the cerebrum","Ch 27, pp. 486–492"],
 ["2.3 CSF system","Ch 25, pp. 453–458"],
 ["2.4 Blood supply, stroke, fluid dynamics, ICP","Ch 26, pp. 459–472"]],[2600,6760]));
k.push(tnote("Assignments: Neuroanatomy Explorer Challenge #2 + Module 2 Knowledge Check (retake window — dates in Canvas). Then Exam 1 (Modules 1–2). Required 2-minute videos are linked in each topic page: cerebral cortex, lobes/landmarks, alien hand, brain tumors, ventricles, meninges, hydrocephalus, meningitis, stroke, blood supply, aneurysm, blood-brain barrier — plus the 4-minute FND patient-story video in Topic 2.2."));
k.push(spacer());
k.push(...glossary("Module 2 Quick-Reference Glossary",[
 ["Perception","Interpretation of sensations into meaningful forms (secondary + association areas)"],
 ["Stereognosis / astereognosis","Identify objects by touch alone / its loss (secondary somatosensory lesion)"],
 ["Agnosia","Inability to recognize via one sense despite the sense being intact"],
 ["Optic ataxia","Can't use vision to guide movement — dorsal visual stream"],
 ["Apraxia","Lost knowledge of skilled movement despite intact strength, sensation, comprehension"],
 ["Motor perseveration","Uncontrollable repetition of a movement; tracks amount of cerebral damage"],
 ["Dysarthria (spastic vs flaccid)","UMN harsh/awkward vs LMN breathy/imprecise speech"],
 ["Lateropulsion (pusher behavior)","Pushing from the strong side toward the paretic side — posterior thalamus/vestibular pathway"],
 ["Homonymous hemianopia","Loss of the same half of the visual field in both eyes"],
 ["Bitemporal hemianopia","Both temporal fields lost — optic chiasm compression (pituitary tumor)"],
 ["TIA","Focal deficit fully resolving within 24 h — still an emergency"],
 ["Thrombus / embolus","Clot forming in place / clot traveling from elsewhere"],
 ["Lacunar infarct","Small deep-artery infarct: purely motor or purely sensory, good recovery"],
 ["Locked-in syndrome","Basilar occlusion: consciousness intact, no voluntary movement below the neck, no speech"],
 ["Neglect","Behaving as if one side of body/space doesn't exist (usually right-MCA)"],
 ["Watershed area","Anastomotic border zone between arterial territories; fails first in low flow"],
 ["Glymphatic system","Sleep-active glial-lymphatic waste clearance for the brain"],
 ["Communicating vs noncommunicating hydrocephalus","Reabsorption failure vs flow blockage (usually the aqueduct)"],
 ["Tanycytes","Barrier cells at BBB-free zones near the 3rd/4th ventricles"],
 ["ICP","Normal 5–15 mmHg; >20 pathologic"]]));

build(k,"/home/claude/out/Module2_CerebrumAndVasculature_StudyNotes.docx");
