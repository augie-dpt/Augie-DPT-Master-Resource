const L = require('/home/claude/notes_lib.js');
const {C,h1,h2,body,bullet,tnote,tip,compare,detail,infoBox,banner,glossary,fig,pageBreak,spacer,cover,build,linkBox} = L;
const k=[];

k.push(...cover("Clinical Neuroscience (DPTH 6141)","Module 6: Motor Control — Cerebellum, Basal Ganglia & Brainstem",
 "Topics: 6.1 Cerebellum (intro + dysfunction) • 6.2 Basal Ganglia (anatomy + disorders) • 6.3 Brainstem (neuroanatomy + lesions) — Dr. Kerry Mallini & Dr. Lindsay Perry",
 ["Six lecture videos, two per topic — watch them in your own Canvas module",
  "References behind the lectures: Lundy-Ekman 6th ed · Blumenfeld 3rd ed",
  "The three exam engines: cerebellar lesion signs by region, the direct/indirect pathways with dopamine's role, and the crossed-signs brainstem localization rule"]));

/* ─────────────────────────── 6.1 L1 ─────────────────────────── */
k.push(banner("TOPIC 6.1 — LECTURE 1","Introduction to the Cerebellum"));
k.push(spacer());
k.push(bullet("The \"little brain\" sits below the occipital lobe behind the tentorium cerebelli. **Key properties:** adjusts posture and COORDINATES movement — never initiates it · all processing is **nonconscious** · **NO direct connection to lower motor neurons** — influence runs through UMNs (motor cortex, premotor, brainstem) · damage → incoordination and postural loss, **NOT weakness or sensory loss**. 🎙 The core loop: compare intended movement with actual movement, correct the difference. Inputs: frontal lobes (intent) + vestibular/proprioceptors (feedback) + brainstem motor areas and ventral horns (neural state)."));
k.push(bullet("**Cellular anatomy** — three cortical layers: outer interneurons · middle **Purkinje cell bodies** · inner interneurons (granule, Golgi). ★ **Purkinje cells are the ONLY cortical output — inhibitory (GABA) — to deep cerebellar and vestibular nuclei.** Afferents: **mossy fibers** (brainstem/spinal cord: somatosensation, arousal, balance, cortex → granule cells → parallel fibers → Purkinje) vs **climbing fibers** (inferior olivary nucleus: **movement error signals**, synapsing directly and powerfully on Purkinje cells)."));
k.push(bullet("**Gross anatomy:** anterior lobe (above the primary fissure) · posterior lobe (with the **cerebellar tonsils** inferiorly — ⚠ raised ICP or Arnold-Chiari can drive the tonsils into the foramen magnum, compressing the 4th ventricle and cardiorespiratory centers) · flocculonodular lobe (flocculus + nodulus, tucked against the brainstem). Vertical zones: midline **vermis** → vestibular/reticular nuclei · **paravermis** → red nucleus + motor cortex via thalamus · **lateral hemispheres** → dentate nucleus → thalamus → cortex. **Peduncles:** superior = midbrain, main OUTPUT · middle = pons, main INPUT (pontine nuclei) · inferior = medulla, both (spinocerebellar + vestibular)."));
k.push(detail(["Functional division","Location · input · output · job"],[
 ["**Vestibulocerebellum**","Flocculonodular lobe · ipsilateral vestibular apparatus/nuclei + visual afferents · out to vestibular nuclei → vestibulospinal tracts · equilibrium, postural control, eye/head movement coordination"],
 ["**Spinocerebellum**","Anterior-lobe vermis + paravermis · spinocerebellar tracts, vestibular + brainstem nuclei · out to vestibular/reticular nuclei and motor cortex via thalamus · fine-tunes ONGOING limb/trunk movement with real-time proprioception"],
 ["**Cerebrocerebellum**","Posterior-lobe lateral hemispheres · CONTRAlateral cortex via cortico-ponto-cerebellar path · out via dentate → VL thalamus → motor/premotor cortex · timing and accuracy of voluntary movement + cognitive motor functions"]],[2700,6660]));
k.push(tnote("The double-cross rule: cerebellar efferents go to the CONTRALATERAL cortex, and that cortex's corticospinal tract decussates at the medullary pyramids — so cerebellar lesion signs land on the SAME side as the lesion. The cerebellum is functionally ipsilateral."));
k.push(...glossary("6.1 L1 — Quick-Reference Glossary",[
 ["Purkinje cell","Sole cortical output; inhibitory (GABA) → deep + vestibular nuclei"],
 ["Mossy vs climbing fibers","Brainstem/cord multi-modal input vs inferior-olive ERROR signals"],
 ["Flocculonodular lobe","Home of the vestibulocerebellum"],
 ["Cerebellar tonsils","Herniate into the foramen magnum with raised ICP / Chiari"],
 ["Peduncles","Superior out (midbrain) · middle in (pons) · inferior both (medulla)"],
 ["Vermis / paravermis / hemispheres","Truncal · limb fine-tuning · planning-timing zones"],
 ["Dentate nucleus","Cerebrocerebellum's output nucleus → thalamus → cortex"],
 ["Double decussation","Why cerebellar signs are ipsilateral"]]));
k.push(pageBreak());

/* ─────────────────────────── 6.1 L2 ─────────────────────────── */
k.push(banner("TOPIC 6.1 — LECTURE 2","Cerebellar Dysfunction and Disorders",C.teal));
k.push(spacer());
k.push(detail(["Region lesioned","Signs (★ Dr. Mallini flagged this summary as high-yield)"],[
 ["**Vestibulocerebellum**","**Nystagmus** (rhythmic fast-slow eye movement) · unsteadiness · impaired sitting AND standing balance"],
 ["**Spinocerebellum — anterior vermis**","**Truncal ataxia**: trunk/neck/head incoordination, axial muscles hit, limbs relatively fine"],
 ["**Spinocerebellum — paravermal**","**Appendicular (limb) ataxia**: dysdiadochokinesia (can't rapidly alternate pronation/supination) · **dysmetria** (hypermetria = overshoot, hypometria = undershoot) · **action/intention tremor** (with movement, NOT at rest — the anti-Parkinson tremor) · dysarthria · wide-based staggering **ataxic gait** · **movement decomposition** (one joint at a time instead of fluid multi-joint motion)"],
 ["**Cerebrocerebellum**","**Finger ataxia** (buttons, typing, writing) · dysarthria"]],[3000,6360]));
k.push(compare("CEREBELLAR ATAXIA","SOMATOSENSORY ATAXIA",
 ["Present with eyes open AND closed — vision cannot compensate",
  "Vibration sense NORMAL · passive proprioception NORMAL · Achilles DTRs normal",
  "Romberg: falls with eyes open AND closed"],
 ["**Worse with eyes CLOSED** — vision compensates for lost proprioception",
  "Vibration IMPAIRED · proprioception IMPAIRED · Achilles DTRs may be reduced/absent",
  "Romberg: clearly better with eyes open — the classic positive Romberg"],
 C.blue,C.gold,C.lightBlue,C.lightGold));
k.push(bullet("**Cerebellar Cognitive Affective Syndrome (CCAS):** cognition and affect fall with cerebellar damage — visuospatial deficits (copying, visual recall, distance judgment) · language (word-finding, brief answers, long latency, no metaphor/ambiguity) · impaired planning/organizing · flat affect OR disinhibition. Severity tracks lesion location and extent."));
k.push(bullet("**Disorders hitting the cerebellum:** developmental — ASD and ADHD (reduced cerebellar/posterior-vermis volume), developmental dyslexia (hemisphere abnormalities) · acquired — MS (demyelination), **posterior-circulation stroke (PICA, AICA)**, tumor (medulloblastoma, mets), **alcoholic cerebellar degeneration** (anterior-lobe vermis → truncal/gait ataxia), foramen-magnum compression (Chiari, raised ICP)."));
k.push(...glossary("6.1 L2 — Quick-Reference Glossary",[
 ["Ataxia","Incoordination without weakness or spasticity — the cerebellar hallmark"],
 ["Truncal vs appendicular","Anterior vermis / paravermal lesion"],
 ["Dysdiadochokinesia","Can't rapidly alternate movements"],
 ["Dysmetria","Hypermetria overshoot · hypometria undershoot"],
 ["Action tremor","Shakes DURING movement — contrast PD's resting tremor"],
 ["Movement decomposition","Joint-by-joint instead of fluid multi-joint motion"],
 ["Romberg","Worse eyes-closed = somatosensory; bad in both = cerebellar"],
 ["CCAS","Visuospatial + language + executive + affect deficits from cerebellar damage"]]));
k.push(pageBreak());

/* ─────────────────────────── 6.2 L1 ─────────────────────────── */
k.push(banner("TOPIC 6.2 — LECTURE 1","Anatomic Orientation to the Basal Ganglia",C.navy));
k.push(spacer());
k.push(bullet("The BG = deep CNS nuclei (not peripheral ganglia). 🎙 They start, stop, and shape desired movements while inhibiting undesired ones — walking works because the BG activates one leg while inhibiting the other. **Functions:** motor control (turning motor programs ON/OFF) · goal-directed behavior · social behavior · emotion/motivation (reward, addiction, habit) · oculomotor control (saccades via superior colliculus). ★ Like the cerebellum, **no direct LMN connection** — influence flows through thalamus → motor cortex."));
k.push(detail(["Nucleus","Where + what"],[
 ["**Caudate**","Cerebrum; C-shaped head-body-tail partially wrapping the thalamus"],
 ["**Putamen**","Cerebrum, lateral to the globus pallidus — **the motor-pathway workhorse**"],
 ["**Globus pallidus (GPi + GPe)**","Internal + external segments; **GPi = primary output nucleus**"],
 ["**Subthalamic nucleus (STN)**","Diencephalon, below thalamus — the BG's **excitatory** structure"],
 ["**Substantia nigra (SNc + SNr)**","Midbrain, melanin-dark; **SNc makes dopamine**; SNr = output nucleus"]],[3000,6360]));
k.push(bullet("**Combined names to memorize:** **striatum = caudate + putamen** (striped; the INPUT zone) · **lentiform nucleus = globus pallidus + putamen** (🎙 the pizza slice: putamen is the crust laterally, globus pallidus the cheesy center pointing medially)."));
k.push(bullet("**Inputs → striatum:** cortex (massive, excitatory glutamate — putamen for motor) · SNc dopamine (excitatory OR inhibitory by receptor) · thalamus (glutamate) · brainstem (serotonin). **Outputs:** GPi + SNr, **all inhibitory (GABA)** → thalamus (VA/VL) → premotor/SMA/motor cortex; also limbic nuclei, reticular formation (reticulospinal), superior colliculus. 🎙 GPi = body output; SNr = head and neck."));
k.push(detail(["Neurotransmitter","Role in the circuits"],[
 ["**Glutamate (+)**","Cortex → striatum · STN → GPi/SNr · thalamus → cortex — the excitatory workhorse"],
 ["**GABA (−)**","Striatum → GPe/GPi · GPe → STN · GPi/SNr → thalamus — every BG OUTPUT is GABAergic"],
 ["**Dopamine (special)**","SNc → striatum (nigrostriatal): **D1 receptors excite the DIRECT pathway; D2 receptors inhibit the INDIRECT pathway — net effect EXCITATORY on thalamus, facilitating movement**. Lose it → net thalamic inhibition → Parkinson's"]],[2700,6660]));
k.push(compare("DIRECT PATHWAY — GO","INDIRECT PATHWAY — STOP",
 ["Net EXCITATORY → promotes movement initiation",
  "Cortex →(Glu+) striatum →(GABA−) GPi",
  "GPi inhibited → thalamus DISinhibited →(Glu+) cortex",
  "Dopamine via D1 = excitatory — more GO"],
 ["Net INHIBITORY → suppresses unwanted movement",
  "Cortex →(Glu+) striatum →(GABA−) GPe → STN disinhibited",
  "STN →(Glu+) GPi → thalamus INHIBITED",
  "Dopamine via D2 = inhibitory — less STOP · ★ dopamine tips BOTH pathways toward GO; its loss = less GO + more STOP = PD's poverty of movement"],
 C.green,C.red,C.lightGreen,C.lightRed));
k.push(bullet("**Nonmotor circuits:** goal-directed behavior (head of caudate — decisions, planning; damage → inattention, distractibility, poor short-term memory) · social behavior (head of caudate — cues, self-control, relevance-parsing) · **emotion/motivation (ventral striatum — REWARD SEEKING, addiction, habit)** · oculomotor (body of caudate → superior colliculus: reflexive **prosaccades** toward objects; **antisaccades** away. ★ BG pathology shows up as impaired saccades — clinically testable)."));
k.push(...glossary("6.2 L1 — Quick-Reference Glossary",[
 ["Striatum / lentiform","Caudate+putamen (input) / globus pallidus+putamen"],
 ["GPi & SNr","The two output nuclei — always GABA"],
 ["STN","The excitatory node of the indirect pathway"],
 ["SNc","Dopamine factory (nigrostriatal pathway)"],
 ["Direct vs indirect","GO (D1, excitatory) vs STOP (D2, inhibitory)"],
 ["Dopamine's net effect","Excites thalamus → movement; its loss = PD"],
 ["Prosaccade / antisaccade","Toward / away — body of caudate via superior colliculus"]]));
k.push(pageBreak());

/* ─────────────────────────── 6.2 L2 ─────────────────────────── */
k.push(banner("TOPIC 6.2 — LECTURE 2","Disorders of the Basal Ganglia",C.navy));
k.push(spacer());
k.push(bullet("**The split: hypokinetic** (too little movement — can't initiate/execute motor programs: PD, atypical parkinsonism, secondary parkinsonism) vs **hyperkinetic** (excess/unwanted movement: Huntington's, dystonia, Tourette's, dyskinetic CP)."));
k.push(h1("1. Parkinson's Disease"));
k.push(bullet("The most common BG motor disorder — hits voluntary AND automatic movement. Clinical diagnosis requires **upper-body hypokinesia + rigidity and/or resting tremor**. **Pathology:** progressive death of SNc dopamine neurons (a large share already gone at diagnosis; gross specimens show a depigmented substantia nigra) → underactive direct + disinhibited indirect pathway → net movement inhibition."));
k.push(compare("PIGD — AKINETIC/RIGID (~50%)","TREMOR-DOMINANT (~40%)",
 ["Rigidity, bradykinesia, akinesia/hypokinesia",
  "Forward-flexed kyphotic posture · masked face · shuffling gait, absent arm swing, lost trunk rotation · poor initiation (sit-to-stand)",
  "FASTER progression; more cognitive/autonomic involvement"],
 ["Resting AND action tremors — tremor is the main functional limit",
  "Rigidity and bradykinesia relatively mild",
  "SLOWER progression · differences trace to which SNc regions die"],
 C.blue,C.teal,C.lightBlue,C.lightTeal));
k.push(bullet("**PIGD sign vocabulary:** akinesia (absent movement) · hypokinesia (decreased + lost automatic movements) · bradykinesia (slow) · rigidity (**cogwheel** ratchety or **leadpipe** uniform, flexors AND extensors) · postural unsteadiness (worsens) · **freezing of gait** (doorways, surface changes) · masked face · **pill-rolling resting tremor** · nonmotor: depression, psychosis, PD dementia, **orthostatic hypotension** (★ monitor BP with position changes — every sit-to-stand)."));
k.push(detail(["Hoehn & Yahr stage","Picture"],[
 ["**1**","Unilateral only — typically mild single-limb tremor"],
 ["**2**","Bilateral; posture and gait affected; minimal disability"],
 ["**3**","Moderate generalized dysfunction; slowed movement; early equilibrium impairment standing/walking"],
 ["**4**","Severe; limited walking; rigidity + bradykinesia; cannot live alone"],
 ["**5**","Extreme weight loss; cannot stand or walk; constant nursing care"]],[1800,7560]));
k.push(bullet("**Treatment:** **L-dopa (carbidopa/levodopa)** — replaces dopamine, best for rigidity/bradykinesia, weaker on tremor; side effects: hallucinations, delusions, psychosis, **dyskinesia**; **wearing-off** ~3–4 h post-dose and the **on-off phenomenon** in advanced disease. **Rehab:** PT/OT preserve mobility and function; **intense resistance training beats standard exercise** for hypertrophy and function. **Invasive:** DBS (motor thalamus for tremor, STN for motor function, GPi for dyskinesia — inhibits overactive neurons), destructive surgery (thalamus/GPi), dopaminergic stem-cell transplant."));
k.push(h1("2. Atypical + Secondary Parkinsonism"));
k.push(bullet("**Atypical parkinsonism** (primary neurodegeneration, different pathology): **PSP** — early gait instability with BACKWARD falls, axial rigidity, freezing, depression, psychosis, rage attacks · **dementia with Lewy bodies** — early cognitive decline + visual hallucinations + PD-like signs · **MSA** — BG + cerebellum + autonomic + peripheral + cortical all at once · corticobasal degeneration. **Red flags for atypical over typical PD:** early postural unsteadiness · rapid progression · respiratory dysfunction · abnormal postures · **pseudobulbar affect** (uncontrollable inappropriate laughing/crying) · cerebellar, corticospinal, or gaze signs."));
k.push(bullet("**Secondary parkinsonism** (cause KNOWN): drug-induced (antipsychotics, some GI drugs — subacute BILATERAL onset, rapid progression, early postural tremor, face/mouth movements) · **CTE** — repeated head trauma (contact sports, abuse, epilepsy, war) → **tau accumulation** in the BG → parkinsonism + disordered thinking, depression, memory loss, disinhibition (★ contact sports + multiple head traumas → tau → PD-like + cognitive decline)."));
k.push(h1("3. The Four Hyperkinetic Disorders"));
k.push(detail(["Disorder","Picture"],[
 ["**Huntington's disease**","Fatal, autosomal dominant (testable genetics); striatum + cortex degenerate, lateral ventricles enlarge as the caudate atrophies. **Chorea** — jerky, rapid, involuntary — starts subtle, ends full-body; plus dementia; all independence eventually lost"],
 ["**Dystonia**","Sustained involuntary contractions → twisting postures; worse with activity and stress, **vanishes in sleep**. Focal (1 part, usually nonprogressive, PT/OT effective — spasmodic torticollis) · multifocal · generalized (often progressive)"],
 ["**Tourette's**","Vocal AND motor tics — abrupt, repetitive, stereotyped; childhood onset; worse with stress/excitement/fatigue; voluntarily suppressible until the urge wins"],
 ["**Dyskinetic CP**","BG + ventrolateral-thalamus damage → **choreoathetosis** (rapid jerky chorea + slow writhing athetosis), fluctuating tone and posture"]],[2400,6960]));
k.push(...glossary("6.2 L2 — Quick-Reference Glossary",[
 ["Hypokinetic vs hyperkinetic","Too little (PD family) vs too much (HD, dystonia, tics, dyskinetic CP)"],
 ["PIGD vs tremor-dominant","Rigid/akinetic, faster · tremor-led, slower"],
 ["Cogwheel / leadpipe","Ratchety / uniform rigidity"],
 ["Freezing of gait","Doorway-triggered stops"],
 ["Hoehn & Yahr","1 unilateral → 5 nursing care"],
 ["Wearing-off / on-off","End-dose return ~3–4 h / unpredictable dyskinesia-immobility swings"],
 ["DBS targets","Thalamus tremor · STN motor · GPi dyskinesia"],
 ["CTE","Tau from repeated head trauma → parkinsonism + cognitive decline"],
 ["Chorea / athetosis / choreoathetosis","Jerky · writhing · both (dyskinetic CP)"],
 ["Dystonia rule","Worse with activity/stress, gone in sleep"]]));
k.push(pageBreak());

/* ─────────────────────────── 6.3 L1 ─────────────────────────── */
k.push(banner("TOPIC 6.3 — LECTURE 1","Brainstem Neuroanatomy, Structures & Functions",C.teal));
k.push(spacer());
k.push(bullet("The brainstem = medulla → pons → midbrain (inferior to superior), hosting **CNs 3–12** (1 and 2 are not brainstem nerves), running life support (breathing, heart rate, arousal), relaying all body-brain traffic, and anchoring postural reflexes. Each level has an anterior section (motor tracts), a **tegmentum** (CN nuclei + sensory tracts + reticular formation), and — midbrain only — a **tectum**. ★ CST and DCML both decussate in the LOWER MEDULLA."));
k.push(detail(["Level","Contents by section"],[
 ["**Midbrain**","Basis pedunculi: CST + corticobulbar tracts, **substantia nigra**. Tegmentum: CN 3 + CN 4 nuclei, **PAG** (pain modulation, fight/flight/freeze around the aqueduct), red nucleus, locus coeruleus + **VTA**, **MLF** (conjugate eye-head movement). Tectum (★ midbrain only; the \"Mickey Mouse ears\" cross-section): **superior colliculi** (visual orienting) · **inferior colliculi** (auditory orienting) · pretectal area (pupillary light reflex)"],
 ["**Pons**","Basilar: **pontine nuclei** (cortex → cerebellum via middle peduncles), CST/CBT descending. Tegmentum: **CN 5, 6, 7, 8** nuclei; raphe nuclei (serotonin) + locus coeruleus; MLF; ascending medial lemniscus + spinothalamic"],
 ["**Medulla**","Anterior: **pyramids** (CST — 80–90% decussate here → lateral CST), **inferior olivary nucleus** (→ contralateral cerebellum; motor learning/timing), CN 12 nucleus. Posterior: CN 9, 10, 11 nuclei; **nucleus ambiguus** (larynx/pharynx/upper esophagus via 9, 10, 12); **solitary nucleus** (taste 7/9 + autonomic afferents 9/10); dorsal motor nucleus of CN 10 (parasympathetic); **DCML decussation** (gracile/cuneate → internal arcuate fibers → medial lemniscus). ★ The vital autonomic centers (respiratory, cardiovascular, emesis) live here — medullary compression is immediately life-threatening"]],[2200,7160]));
k.push(detail(["Cranial nerve","Function"],[
 ["**3 Oculomotor** (midbrain)","Eye movement (SR, IR, MR, IO) · pupil constriction · eyelid elevation"],
 ["**4 Trochlear** (midbrain)","Superior oblique — \"down and in\""],
 ["**5 Trigeminal** (pons)","Facial sensation · mastication · corneal reflex"],
 ["**6 Abducens** (pons)","Lateral rectus — lateral gaze"],
 ["**7 Facial** (pons)","Expression · taste anterior 2/3 tongue · lacrimation/salivation. ★ Lower face gets ONLY contralateral UMN input; upper face bilateral — UMN stroke spares the forehead, LMN Bell's palsy takes the whole ipsilateral face"],
 ["**8 Vestibulocochlear** (pons)","Hearing + vestibular sense"],
 ["**9 Glossopharyngeal** (medulla)","Taste posterior 1/3 · pharyngeal sensation · carotid body/sinus"],
 ["**10 Vagus** (medulla)","Autonomic thorax/abdomen · larynx/pharynx motor · visceral sensation"],
 ["**11 Spinal accessory** (medulla)","SCM + trapezius"],
 ["**12 Hypoglossal** (medulla)","Tongue movement"]],[2700,6660]));
k.push(bullet("**Reticular formation** — the brainstem's core, midbrain to medulla: **consciousness/arousal** (ARAS — damage → coma) · somatic motor tone (reticulospinal facilitation/inhibition) · autonomic regulation (CV, respiratory, digestive) · pain modulation (PAG-descending control of the dorsal horn). Named nuclei: **raphe** (midline, serotonin — mood/pain/sleep) · **locus coeruleus** (norepinephrine — peak when attentive, silent in sleep) · **VTA** (dopamine — reward; lit up by cocaine/amphetamines)."));
k.push(...glossary("6.3 L1 — Quick-Reference Glossary",[
 ["Basis pedunculi / tegmentum / tectum","Motor tracts · CN nuclei+sensory · colliculi (midbrain only)"],
 ["PAG","Pain modulation + fight/flight/freeze, around the aqueduct"],
 ["MLF","Conjugate eye-head coordination, full brainstem length"],
 ["Pyramidal decussation","80–90% of CST crosses in the lower medulla"],
 ["DCML","Fine touch/vibration/proprioception; crosses in the lower medulla"],
 ["Nucleus ambiguus","Larynx/pharynx motor via CNs 9, 10, 12 — dysarthria/dysphagia when hit"],
 ["Solitary nucleus","Taste + autonomic afferents"],
 ["Raphe / locus coeruleus / VTA","Serotonin · norepinephrine · dopamine-reward"],
 ["ARAS","Arousal system — damage → coma"]]));
k.push(pageBreak());

/* ─────────────────────────── 6.3 L2 ─────────────────────────── */
k.push(banner("TOPIC 6.3 — LECTURE 2","Brainstem Lesions and Clinical Presentation",C.teal));
k.push(spacer());
k.push(tnote("The localization rule: ipsilateral CRANIAL NERVE deficit + contralateral BODY motor/sensory loss = crossed signs = BRAINSTEM. No other level produces the pattern."));
k.push(h1("1. Wallenberg Syndrome (lateral medullary)"));
k.push(bullet("**The most common brainstem stroke — PICA occlusion**, lateral upper medulla. ★ Hallmark: **crossed sensory loss** (ipsilateral FACE + contralateral BODY pain/temperature) with **NO weakness** — the pyramids sit anteriorly, spared."));
k.push(detail(["Structure hit","Sign"],[
 ["Spinothalamic tract","CONTRAlateral body pain/temperature loss"],
 ["Trigeminal nucleus/tract (CN 5)","IPSIlateral face pain/temperature loss"],
 ["Vestibular nuclei","Vertigo, nausea, vomiting, nystagmus"],
 ["Inferior cerebellar peduncle","Ipsilateral limb + gait ataxia"],
 ["Nucleus ambiguus (CN 9, 10)","Ipsilateral dysphagia, dysarthria, hoarseness"],
 ["Descending sympathetics","Ipsilateral **Horner's syndrome**"]],[3200,6160]));
k.push(bullet("**Horner's triad (★ always ipsilateral):** **ptosis + miosis + anhidrosis** — think lateral brainstem (Wallenberg's usual culprit) or cervical cord."));
k.push(h1("2. The Syndrome Map"));
k.push(detail(["Level — syndrome","Presentation"],[
 ["**Midbrain — Weber's**","Ipsilateral CN 3 palsy (ptosis, \"down and out\" eye, dilated pupil) + contralateral hemiplegia"],
 ["**Pons — CN 6 palsy**","Ipsilateral lateral-gaze palsy, isolated or part of a larger lesion"],
 ["**Pons — CN 7, LMN vs UMN**","LMN (Bell's): entire ipsilateral face INCLUDING forehead · UMN (stroke): contralateral LOWER face, forehead spared (bilateral upper-face innervation)"],
 ["**Pons — INO**","MLF lesion: impaired ipsilateral ADDuction + contralateral abduction nystagmus — think MS"],
 ["**Pons — locked-in syndrome**","Ventral pontine stroke (mid-basilar occlusion): bilateral CST + CBT destroyed → **quadriplegia with fully intact consciousness and cognition**; vertical eye movements + blinking spared (CN 3) — the communication channel"],
 ["**Medulla — Wallenberg**","See above — crossed sensory, no hemiplegia"],
 ["**Medulla — medial medullary**","Ipsilateral CN 12 palsy + contralateral hemiplegia + contralateral DCML loss"]],[2700,6660]));
k.push(...glossary("6.3 L2 — Quick-Reference Glossary",[
 ["Crossed signs","Ipsilateral CN + contralateral body = brainstem"],
 ["Wallenberg","PICA, lateral upper medulla; crossed sensory; no weakness"],
 ["Horner's","Ptosis + miosis + anhidrosis, ipsilateral"],
 ["Weber's","Midbrain: CN 3 down-and-out + contralateral hemiplegia"],
 ["INO","MLF: no adduction ipsilaterally + abducting nystagmus — MS association"],
 ["Locked-in","Ventral pons: quadriplegic, conscious, vertical gaze intact"],
 ["Medial medullary","CN 12 + contralateral hemiplegia + contralateral DCML loss"],
 ["Bell's vs UMN facial palsy","Whole face vs forehead-sparing lower face"]]));

build(k,"/home/claude/out/Module6_MotorControlCerebellumBasalGangliaBrainstem_StudyNotes.docx");