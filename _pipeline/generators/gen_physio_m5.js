const L = require('/home/claude/notes_lib.js');
const {C,h1,h2,body,bullet,tnote,tip,compare,detail,infoBox,banner,glossary,fig,pageBreak,spacer,cover,build,linkBox} = L;
const E="/home/claude/emb18/";
const k=[];

k.push(...cover("Human Physiology (DPTH 6131)","Module 5: The Neuromuscular System",
 "Topics: 5.1 Structure & Function of Nerves and the Nervous System • 5.2 Nervous System Motor Control • 5.3 Neuromuscular Pathophysiology & Aging • Sync: three case scenarios",
 ["Lectures by Dr. Evan Andreyo (PT, DPT — board-certified orthopaedic + sports specialist); watch in your own Canvas module",
  "Required videos: Osmosis \"Neuron Action Potential — Physiology\" (linked in Topic 5.1 below) + Khan Academy (Peripheral Somatosensation, Motor Unit, Muscle Stretch Reflex, Autonomic NS) — on the Canvas topic pages",
  "Guyton & Hall 14e Ch 5, 46–49 (listed pages), 55, 61; Damjanov Pathology Ch 20–21 — keep them beside these notes",
  "Next week is lab immersion — this module closes mini-mester content, and the Neuromuscular Case Study rides on it"]));

// ===== 5.1 =====
k.push(banner("TOPIC 5.1","Nervous System Physiology — Synapses to Dermatomes"));
k.push(spacer());
k.push(body("Dr. Andreyo's opener: the nervous system is king (or queen — \"the queen is way cooler in chess anyways\"). Muscle doesn't work without it, organs don't work without it — there is no \"I'm an ortho PT, I don't do neuro.\""));
k.push(h1("1. The Synapse"));
k.push(...fig(E+"n_p6-06.png",2000,1125,"Chemical vs electrical synapses — vesicles + neurotransmitters (\"Wi-Fi\") vs gap junctions (\"direct plug\") (5.1 deck)"));
k.push(bullet("Presynaptic axon terminal → postsynaptic dendrite. **Chemical (dominant):** Ca²⁺ influx through presynaptic calcium channels signals vesicles to release neurotransmitters across the cleft. **Electrical:** gap junctions transmit straight across — faster and more efficient, but rarer. Of the **50+ neurotransmitters**, anchor on acetylcholine, norepinephrine/epinephrine, histamine, serotonin, glutamate. They land via gated ion channels (depolarizing cascade) or second-messenger receptors (cascade without entry)."));
k.push(detail(["Direction","Mechanism","Effect"],[
 ["**Excitation**","Neurotransmitter promotes **Na⁺ influx** (positive charge in)","Membrane climbs toward threshold — \"keep the party going\""],
 ["**Inhibition**","**Cl⁻ influx** or **K⁺ efflux** (more negative inside)","Cell calmed — useful when you WANT less activity (relaxing overactive muscle)"]],[1900,3800,3560]));
k.push(linkBox("\u{1F4FA} Required watching — the action potential",[
 ["Neuron Action Potential — Physiology (Osmosis)","https://youtu.be/BbUcWbtVjT4",""]]));
k.push(...fig(E+"n_p10-10.png",2000,1125,"Summation: EPSPs of ~0.5–1 mV each stack toward threshold — spatially (many synapses) or temporally (one persistent input) (5.1 deck)"));
k.push(bullet("Resting potential ≈ **−65 to −70 mV**. One terminal's EPSP nudges ~0.5–1 mV; threshold needs a **10–20 mV** swing — so potentials must **summate**: **spatial** (many synapses at once; channels linger open a few ms, sensitizing the next hit) or **temporal** (one persistent input firing again and again; a 1–2 ms self-shutoff keeps signals moving forward, not backward)."));
k.push(h1("2. Organization + Development"));
k.push(...fig(E+"n_p14-14.png",2000,1125,"The whole map: CNS (brain + cord) vs PNS; somatic (voluntary skeletal) vs autonomic (sympathetic + parasympathetic) (5.1 deck)"));
k.push(bullet("Development: the **neural tube** forms within the first weeks (its tip just ~3 mm) and closes to become brain + cord — incomplete closure = **spina bifida**. In utero the nervous system adds ~**250,000 nerve cells a minute**; at birth: billions of neurons, trillions of connections."));
k.push(compare("Sympathetic — fight or flight","Parasympathetic — rest and digest",
 ["Origin **T1–L2**, intermediolateral horn → ventral root → white ramus → **sympathetic chain** (headquarters; ganglia = satellite shipping centers) → gray ramus/spinal nerve, chain up/down, or peripheral ganglia","↑HR, vasoconstricts the non-essentials (gut), rapid eye movements, piloerection — the chills making your hair stand up"],
 ["**CN 3, 7, 9, 10 + S2–4**; ~75% of it is the **VAGUS** (heart, lungs, stomach, intestines, liver, gallbladder, pancreas, kidneys, ureters)","No chain — postganglionic neurons sit IN the organ walls. ↓HR, digestion back on"]));
k.push(h1("3. Sensory System"));
k.push(detail(["Receptor class","Detects"],[
 ["Mechanoreceptors","Pressure, touch, tactile sensation"],
 ["Thermoreceptors","Temperature"],
 ["Nociceptors","Pain"],
 ["Electromagnetic receptors","Light (retina)"],
 ["Chemoreceptors","Taste, smell, ion concentrations"]],[3000,6360]));
k.push(bullet("Conduction velocity rides on **myelination** (saltatory conduction — the \"electrical tape on the wire\") and **diameter** (bigger = faster). Spindles + Golgi tendon organs report FAST (reflex-hammer fast); aching pain and crude touch crawl. Stimulus transduction is mostly **deformation** of the ending (or temperature/chemical change)."));
k.push(...fig(E+"n_p20-20.png",2000,1125,"The nerve-ending zoo — free endings, Meissner's (+Merkel's discs), Krause's, Pacinian (deep pressure), Ruffini, GTOs, spindles (5.1 deck, Guyton figure)"));
k.push(detail(["Adaptation speed","Members","Why it makes sense"],[
 ["**Slow-adapting**","Muscle spindles, pain receptors, baroreceptors","Signal stays constant while the stimulus lasts — under a heavy lift or in real pain you want LIVE feedback, not a fading one"],
 ["**Rapidly-adapting**","Pacinian corpuscles, hair receptors","First contact is loud, then it fades — the shirt on your back disappears from awareness"]],[2100,3100,4060]));
k.push(tip("Dermatomes got the instructor's exact words: \"star, circle, asterisk.\" Light coverage now — but nerve-root mapping is a daily tool for the PT you're becoming. Anatomy M5's L5/S1 myotome anchors are the same story from the motor side."));
k.push(h1("4. Pain (the preview)"));
k.push(bullet("**Fast, sharp pain** = large myelinated A-delta fibers (the nail, the first touch of the stove); **slow, lingering pain** = small/unmyelinated fibers (the throb after). Capsaicin fires the SAME pain/temperature receptors — hence the burn and the sweat. Endogenous **analgesia**: opiates you make yourself (endorphins, enkephalins), tactile inhibition (you rub the elbow you bumped — peripheral tactile input inhibits pain from the same area), electrical stimulation. Taxonomy for later: nociceptive · neuropathic · nociplastic (central sensitization) — fear, beliefs, pain duration, depression, and sleep all tune the experience. A whole pain course is coming."));
k.push(h1("5. Neuromuscular Adaptation to Training"));
k.push(...fig(E+"n_p28-28.png",2000,1125,"Early strength gains are NEURAL; hypertrophy joins around week six (5.1 deck)"));
k.push(bullet("First ~1–2 weeks of a strength program: gains are **neural** — increased agonist recruitment, faster firing rates, better synchronization, reduced inhibitory mechanisms. Muscle size catches up around ~6 weeks; beyond that it's both. Neuroplasticity proper returns in Topic 5.3."));
k.push(...glossary("Topic 5.1 — Quick-Reference Glossary",[
 ["Chemical vs electrical synapse","Vesicles + neurotransmitters vs gap junctions (fast, rare)"],
 ["EPSP math","~0.5–1 mV each; 10–20 mV to threshold; rest ≈ −65 to −70 mV"],
 ["Spatial / temporal summation","Many synapses at once / one input repeating"],
 ["Sympathetic addresses","T1–L2 + the sympathetic chain"],
 ["Parasympathetic addresses","CN 3, 7, 9, 10 + S2–4; vagus ≈ 75%"],
 ["Saltatory conduction","Myelin + big diameter = speed"],
 ["Slow vs rapid adapting","Spindles/pain/baro stay loud · Pacinian/hair fade"],
 ["Fast vs slow pain","A-delta sharp now · unmyelinated throb after"],
 ["Early strength gains","Neural first (1–2 wk), hypertrophy ~6 wk"]]));
k.push(pageBreak());

// ===== 5.2 =====
k.push(banner("TOPIC 5.2","Nervous System Motor Control (video + reading topic)",C.teal));
k.push(spacer());
k.push(bullet("This topic runs on two Khan Academy videos — **Motor Unit** (9:35) and **Muscle Stretch Reflex** (9:34) — plus Guyton Ch 55 pp 686–691 (muscle spindles + Golgi tendon organs in cord reflexes). The working vocabulary: a **motor unit** = one motor neuron + every fiber it innervates; the **stretch reflex** = spindle detects stretch → monosynaptic excitation of the stretched muscle + inhibition of the antagonist (your reflex hammer in physiology form); **GTOs** guard tension. Movement Science's motor-control constructs sit on exactly this machinery."));
k.push(pageBreak());

// ===== 5.3 =====
k.push(banner("TOPIC 5.3","Neuromuscular Pathophysiology + Aging",C.teal));
k.push(spacer());
k.push(h1("1. Peripheral Nerves: Space, Blood, Movement"));
k.push(bullet("Every peripheral nerve needs three things — **space, blood, and the ability to move/glide**. Pathology is what happens when one goes missing: compression, devascularization, or lost excursion. Insult menu for any neuron: immune attack, trauma, ischemia, neurotransmitter dysregulation, free radicals, metabolic compromise, external toxins → necrosis or apoptosis."));
k.push(...fig(E+"m_p6-06.png",2000,1125,"The injury ladder: neurapraxia → axonotmesis → neurotmesis, with Wallerian degeneration below (5.3 deck, Physiopedia figure)"));
k.push(detail(["Grade","What's damaged","Course"],[
 ["**Neurapraxia**","Myelin insulted (ischemia/compression); AXON INTACT","Conducts, but less efficiently — mild paresis/sensory change; regenerates"],
 ["**Axonotmesis**","Axon + myelin damaged; connective sheaths (endo-/peri-/epineurium) intact","Prolonged compression, radiculopathy; real motor + sensory deficits; heals partially — sometimes not fully"],
 ["**Neurotmesis**","Complete severance (gunshot, stab)","Total loss of function distally"]],[1900,3700,3660]));
k.push(tnote("Axonotmesis and neurotmesis trigger WALLERIAN DEGENERATION (the transcript's \"bolerian\"): anterograde die-back of everything distal to the lesion, macrophages clearing debris. Axonal sprouting can rebuild — slowly, and only across small gaps."));
k.push(bullet("Compression happens at every level of the chain: **carpal tunnel** (median n. at the wrist) → the same event higher up is a different entrapment → in the neck it's **radiculopathy** → at the plexus/first rib it's **thoracic outlet**. Whatever compresses, the deficit falls BELOW it. PT's job for compressive injuries: restore space, movement, and vascularity (nerve mobilizations, soft-tissue work)."));
k.push(...fig(E+"m_p8-08.png",2000,1125,"Diabetic neuropathy: hyperglycemia → vascular damage + reduced nerve growth factor → stocking-and-glove distal loss (5.3 deck)"));
k.push(h1("2. CNS: When Transmission Fails"));
k.push(detail(["Neurotransmitter","Dysfunction","Condition"],[
 ["**Glutamate** (main CNS excitatory; lets Ca²⁺ in via ligand-gated + metabotropic routes)","**Excitotoxicity** — excess glutamate floods cells with calcium and kills them","Stroke, brain injury, spinal cord injury, ALS"],
 ["**Acetylcholine** (neuromuscular junction)","Decreased levels, or antibodies destroying nerve-muscle communication","Alzheimer's (↓ACh); **myasthenia gravis** (autoimmune; immunosuppressive treatment)"],
 ["**Dopamine** (substantia nigra, basal ganglia)","Production falls → motor programming + initiation fail","**Parkinson's disease** → levodopa"],
 ["Serotonin / GABA / substance P","Sleep regulation / seizure prevention (↓GABA → seizures) / pain regulation","Named for context — details later"]],[3300,3200,2860]));
k.push(...fig(E+"m_p13-13.png",2000,1125,"The substantia nigra — where dopamine is made, and where Parkinson's begins (5.3 deck)"));
k.push(h1("3. Glial Cells + Demyelination"));
k.push(bullet("**Microglia** = the CNS's immune cells (cleanup crew). **Macroglia**: astrocytes (\"connective tissue of the nervous system\" — bind neuron↔neuron and neuron↔capillary), **oligodendrocytes** (CNS myelin), **Schwann cells** (PNS myelin), satellite cells. **Multiple sclerosis** = autoimmune attack on CNS myelin + oligodendrocytes → demyelination, plaque/scarring, cortical atrophy; progressive and person-variable; disease-modifying drugs reduce lesion development and atrophy."));
k.push(...fig(E+"m_p18-18.png",2000,1125,"MS on MRI — the plaques of demyelination (5.3 deck). Sync Case 1 asks you to explain exactly this"));
k.push(h1("4. Trauma + Infarction"));
k.push(bullet("**Brain injury** mechanisms: direct impact, acceleration-deceleration (car crash), blast. **Primary injury** = the impact force itself. **Secondary injury** — usually the worse one — is the metabolic cascade: ischemia → glutamate excitotoxicity, hematoma, edema, blood-brain-barrier disruption → **rising intracranial pressure** → compression → neuronal death, worsening over days to weeks."));
k.push(...fig(E+"m_p22-22.png",2000,1125,"Stroke: ischemic (clot) vs hemorrhagic (bleed) — with the largely preventable risk-factor column (5.3 deck)"));
k.push(infoBox("🧠 Ischemic vs hemorrhagic — why the distinction is life-or-death",[
 "Ischemic = not enough blood (clot) → treat by BUSTING the clot",
 "Hemorrhagic = too much blood (burst vessel) → clot-busters/thinners would be catastrophic; management is surgical/other",
 "Risk factors for both are largely preventable — same lifestyle story as the cardiopulmonary modules"],C.red,C.lightRed));
k.push(h1("5. Aging + Neuroplasticity"));
k.push(bullet("Aging (\"we don't age like wine\"): ↓motor + sensory fiber counts (↓vascularity), ↓synaptic transmission efficiency, **↓nociceptive input** (older adults may not feel a wound happen), microglial inflammation that never fully switches off, accumulating **free radicals** → oxidative stress — correlated with Alzheimer's, Parkinson's, ALS. ALS itself = attack on motor neurons; multifactorial (excitotoxicity + oxidative damage + autoimmune components)."));
k.push(tip("The silver lining is NEUROPLASTICITY — \"our bread and butter\": regeneration (when the cell body survives), cortical remapping (healthy areas take over post-stroke/TBI), substitution (blind individuals' heightened tactile sensitivity). In the acute window, PT's task-specific retraining is literally steering plasticity."));
k.push(...glossary("Topic 5.3 — Quick-Reference Glossary",[
 ["Space · blood · movement","What every peripheral nerve needs — lose one, get pathology"],
 ["Neurapraxia / axonotmesis / neurotmesis","Myelin only / axon too / complete severance"],
 ["Wallerian degeneration","Anterograde die-back distal to axonal injury"],
 ["Stocking-and-glove","Diabetic neuropathy's distal-first sensory pattern"],
 ["Excitotoxicity","Glutamate + calcium overload kill neurons (stroke, TBI, SCI, ALS)"],
 ["Myasthenia gravis","Autoimmune vs the neuromuscular junction (ACh)"],
 ["Parkinson's","Substantia nigra stops making dopamine → initiation fails → levodopa"],
 ["Oligodendrocyte vs Schwann","CNS vs PNS myelin — the MS case hinges on it"],
 ["Primary vs secondary brain injury","Impact force vs the days-long metabolic cascade"],
 ["Neuroplasticity trio","Regeneration · cortical remapping · substitution"]]));
k.push(pageBreak());

// ===== Sync =====
k.push(banner("SYNC SESSION","Pair-and-Share + Three Cases",C.navy));
k.push(spacer());
k.push(body("Warm-up (Action Potential slides): describe synaptic transmission and action-potential propagation out loud, then spatial vs temporal summation. Then three cases — worksheets are in this Drive folder."));
k.push(detail(["Case","Prompts","Where the answers live"],[
 ["**1 — 48F with multiple sclerosis**","What MS is; role of demyelination, plaques, atrophy · CNS vs PNS myelination · long-term outcomes · PT's role","Topic 5.3 §3 — oligodendrocytes (CNS) vs Schwann cells (PNS) is the trap question"],
 ["**2 — 78M, T2DM + peripheral neuropathy**","Sensory receptor types + their nerve endings · mechanism + symptoms of diabetic neuropathy · daily-function impact · PT's role","Topic 5.1 §3 (receptor zoo) + 5.3 §1 — stocking-and-glove, wound risk, balance/falls"],
 ["**3 — 35M, traumatic LEFT C7 root injury**","Three injury grades + expected findings · C7 presentation (dermatome, myotome, reflex) · recovery potential · PT's role","Topic 5.3 §1 — grades + Wallerian; C7 classically: middle-finger dermatome, elbow-extension/wrist-flexion myotome, triceps reflex"]],[2500,4200,2660]));
k.push(tip("The pattern across all three cases is the module's whole point: name the physiology → locate the failure → predict the presentation → say what PT does about it. Practice answering each in that order and the case study assignment writes itself."));

build(k,"/home/claude/out/Module5_Neuromuscular_StudyNotes.docx");
