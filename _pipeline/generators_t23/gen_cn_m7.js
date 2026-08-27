const L = require('/home/claude/notes_lib.js');
const {C,h1,h2,body,bullet,tnote,tip,compare,detail,infoBox,banner,glossary,fig,pageBreak,spacer,cover,build,linkBox} = L;
const k=[];

k.push(...cover("Clinical Neuroscience (DPTH 6141)","Module 7: Cranial Nerves, Visual System, Vestibular System",
 "Topics 7.1–7.3 • Reading: Lundy-Ekman Ch 20 (pp. 360–381), Ch 22 (pp. 403–418), Ch 23 (pp. 422–432)",
 ["Watch the VOPPs in your own Canvas module — these notes condense them, they don't replace them",
  "★ Memorize three grids: the 12-nerve table (name, number, S/M/mixed, function, reflex), the visual-pathway lesion map, and the semicircular-canal pairs",
  "Peripheral CN lesions present IPSILATERAL; the exceptions and UMN twists are the exam traps"]));

/* ─────────────── TOPIC 7.1: CRANIAL NERVES ─────────────── */
k.push(banner("TOPIC 7.1","The Twelve Cranial Nerves"));
k.push(spacer());
k.push(bullet("Four jobs: motor to face/eyes/tongue/jaw + SCM/trapezius · somatosensation from face + TMJ · special senses (vision, hearing, vestibular, taste, smell, visceral) · parasympathetic regulation (pupil, lens, HR, BP, breathing, digestion). Numbered anterior → posterior. **Sensory only: I, II, VIII · motor only: III, IV, VI, XI, XII · mixed: V, VII, IX, X.** Sensory somas sit in ganglia OUTSIDE the brainstem (exception: facial proprioception — somas in the brainstem); motor somas in brainstem nuclei. CN outside the skull = PNS; **I and II are entirely within the skull**; CNs to head/neck muscles are LMNs. Origins: I–II cerebrum · III–IV midbrain · V–VIII pons · IX–XII medulla (IV is the only one emerging dorsally)."));
k.push(detail(["Nerve","Function ± lesion"],[
 ["**I Olfactory** (S)","Smell: olfactory epithelium → bulb → primary olfactory cortex, insula, amygdala, parahippocampal gyrus — **the ONLY CN reaching cortex directly, no thalamic relay**. Lesion: anosmia (head trauma, infection, toxins, Parkinson's/Alzheimer's association)"],
 ["**II Optic** (S)","Vision: retinal ganglion cell axons → optic chiasm (partial crossing) → optic tract → lateral geniculate nucleus → optic radiations → occipital cortex. Lesions: field deficits, acuity + color changes (neuritis, glaucoma, atrophy)"],
 ["**III Oculomotor** (M)","Superior/inferior/medial rectus + inferior oblique, levator of the eyelid, pupil constrictor + lens curvature (parasympathetic); midbrain nucleus. Palsy: diplopia, ptosis, **dilated fixed pupil** (trauma, aneurysm, tumor)"],
 ["**IV Trochlear** (M)","Superior oblique — depresses + inwardly rotates the adducted eye; VOR efferent; midbrain. Palsy: diplopia, trouble looking down-and-in"],
 ["**V Trigeminal** (mixed)","Largest CN. Sensory: ophthalmic (forehead, scalp, upper lids, nose interior) · maxillary (lower lids, cheek, upper lip/teeth/gums) · mandibular (lower lip, jaw, lower teeth/gums). Motor (mandibular only): masseter, pterygoids, temporalis + tensor tympani. Corneal-reflex AFFERENT"],
 ["**VI Abducens** (M)","Lateral rectus — abduction; pons near the pontomedullary junction; VOR efferent. Palsy: can't look laterally, diplopia (trauma, tumor, ↑ICP)"],
 ["**VII Facial** (mixed)","Motor: muscles of facial expression + stapedius (dampens loud sound). Sensory: touch/nociception/pressure from tongue, pharynx, posterior ear canal; **taste anterior 2/3 of tongue**. Glands: salivary, nasal, lacrimal. Corneal-reflex EFFERENT. Pons origin"],
 ["**VIII Vestibulocochlear** (S)","Two branches from the inner-ear labyrinth: vestibular (head position + movement) and cochlear (hearing)"],
 ["**IX Glossopharyngeal** (mixed)","Sensation: soft palate, pharynx, middle ear, posterior external ear canal; **taste posterior 1/3**; autonomic afferents from carotid sinus + body (BP, chemistry). Motor: swallowing; parasympathetic to parotid. **Gag-reflex afferent**. Medulla"],
 ["**X Vagus** (mixed)","Longest CN: somatosensation from pharynx/larynx/outer ear; motor to larynx + pharynx; autonomic afferents AND parasympathetic efferents for thorax + abdomen — speech, HR, respiration, digestion; gag + swallowing reflexes. Medulla"],
 ["**XI Accessory** (M)","SCM + trapezius; spinal accessory nucleus, ventral horn C1–C4"],
 ["**XII Hypoglossal** (M)","Intrinsic + extrinsic muscles of the IPSILATERAL tongue — speech, swallowing, chewing; medulla"]],[2350,7010]));
k.push(h1("Trigeminal Sensory Pathways and the Corneal Reflex"));
k.push(bullet("Facial somatosensation feeds three trigeminal nuclei: **mesencephalic** (proprioception — travels ipsilaterally, then reticular formation → insula, with collaterals to cerebellum), **main sensory** (light touch — 1st-order somas in the trigeminal ganglion, synapse at the pons; 2nd-order DECUSSATES → **VPM** of thalamus → 3rd-order → somatosensory cortex), **spinal trigeminal** (fast nociception + temperature — 1st-order descends INTO the cervical cord before synapsing; 2nd-order decussates → VPM → cortex)."));
k.push(bullet("**Corneal reflex**: touch cornea → CN V afferent → spinal trigeminal nucleus → interneurons BILATERALLY to facial nuclei → CN VII closes BOTH eyelids. One stimulus, two blinks — asymmetry localizes the lesion to V (no blink either eye) or VII (no blink on the weak side)."));
k.push(h1("Hearing: Cochlea → Cortex"));
k.push(bullet("Sound → tympanic membrane vibrates → ossicles (malleus, incus, stapes) amplify → oval window → cochlear fluid moves → basilar membrane + **organ of Corti** hair cells bend (stereocilia against the tectorial membrane) → neurotransmitter release → cochlear nerve → **cochlear nuclei** (brainstem) → three targets: **reticular formation** (sound wakes you), **inferior colliculus** (± superior olive — binaural sound LOCALIZATION), **medial geniculate body** (thalamic relay) → cortex. The cochlea is **tonotopic**: high frequencies at the base, low at the apex. Cortical triad: primary auditory cortex (intensity awareness) · auditory association cortex (language vs music vs noise) · **Wernicke's area** (comprehension of spoken language)."));

k.push(pageBreak());
/* ─────────────── CN DISORDERS ─────────────── */
k.push(banner("TOPIC 7.1 (cont.)","Disorders Affecting Cranial Nerves"));
k.push(spacer());
k.push(detail(["Disorder","Presentation"],[
 ["**Anosmia (I)**","Lost smell: frontal head trauma (bulb shear), infection, toxins, tumors, neurodegeneration, idiopathic; smoking/mucus interfere"],
 ["**Trigeminal branch severance (V)**","Sensory loss in that branch's territory; ophthalmic → blink/corneal reflex lost; mandibular → jaw DEVIATES TOWARD the lesioned side on opening"],
 ["**Trigeminal neuralgia (V)**","Unilateral stabbing/electric pain (usually lower face/jaw), seconds–minutes, triggered by touch, chewing, talking, cold wind; **no sensory loss**. Primary: idiopathic or classic (vessel compressing the nerve → local demyelination); secondary: trauma, MS, TMJ disorders"],
 ["**Facial (VII) palsy — LMN**","Lesion of the nucleus or nerve → IPSILATERAL paralysis of the WHOLE half-face incl. eye closure (eye protection: taping, patch, lubricants); ± ear pain, sound sensitivity. Causes: trauma, Lyme, MS, middle-ear cyst, tumor, herpes zoster. **Bell's palsy** = the idiopathic diagnosis-of-exclusion version (likely viral/immune swelling → compression + ischemia); most improve gradually"],
 ["**Corticobrainstem lesion — UMN face**","CONTRALATERAL LOWER-face paresis with the upper face SPARED (bilateral cortical innervation of the upper face): eyes close, emotional expression (laughing/crying) preserved. ★ The lower-vs-whole-face split is how you separate stroke from Bell's"],
 ["**Deafness (VIII)**","**Conductive** — outer/middle ear transmission problem (wax, otitis media, fluid, perforation, ossicle disease): sounds quieter, usually REVERSIBLE. **Sensorineural** — cochlea/hair-cell/nerve damage (acoustic neuroma, ototoxic drugs, Ménière's, noise, aging): often PERMANENT, poor clarity. Unilateral loss kills sound localization"],
 ["**Tinnitus**","Phantom ringing/buzzing/hissing (meds, receptor stimulation, ↑CNS responsiveness); distressing + sleep-disruptive; managed with masking, meds, habituation, TMS"],
 ["**Glossopharyngeal lesion (IX)**","Gag + swallow AFFERENT limb lost, ↓salivation; glossopharyngeal neuralgia = severe throat/tongue/ear pain triggered by swallowing"],
 ["**Vagus lesion (X)**","Dysphonia (hoarseness), dysphagia, poor digestion, ↓peristalsis, asymmetric palate elevation, lost gag + swallow reflexes"],
 ["**Accessory lesion (XI)**","LMN: flaccid paralysis of ipsilateral SCM + trap. UMN: PARESIS (bilateral cortical innervation) with hypertonia"],
 ["**Hypoglossal lesion (XII)**","Ipsilateral tongue atrophy; protruded tongue **deviates TOWARD the lesion**; speech + swallowing problems"]],[2700,6660]));
k.push(compare("DYSPHAGIA — swallowing","DYSARTHRIA — speech motor",
 ["Difficulty anywhere mouth → esophagus: choking, unawareness of food in the mouth, nasal regurgitation",
  "Think CN **V, VII, IX, X, XII** — or UMN lesions (stroke)"],
 ["Slurred, unclear speech from weak/paralyzed/incoordinated speech muscles; pitch + volume control poor",
  "ONLY vocal output affected — comprehension, reading, writing intact (that's what separates it from aphasia). CN V, VII, X, XII, UMN lesions, or muscle disease"],
 C.blue,C.teal,C.lightBlue,C.lightTeal));

k.push(pageBreak());
/* ─────────────── TOPIC 7.2: VISUAL ─────────────── */
k.push(banner("TOPIC 7.2","The Visual System"));
k.push(spacer());
k.push(h1("1. The Retinogeniculocalcarine Pathway"));
k.push(bullet("Retina → optic nerve → **optic chiasm** (nasal-retina fibers cross; temporal stay) → optic tract → **lateral geniculate nucleus** (thalamus) → optic radiations → primary visual cortex around the **calcarine fissure**. Field logic: the LEFT visual hemifield lands on the LEFT eye's NASAL retina + RIGHT eye's TEMPORAL retina, and all of it ends in the **RIGHT visual cortex** (nasal fibers cross at the chiasm; temporal fibers don't). Primary cortex discriminates shape/size/texture; secondary adds color + motion; then **ventral stream = perception** (what is it) and **dorsal stream = action** (where/how to move). Nonconscious branches reach the **superior colliculus + pretectal midbrain** for reflexes + orienting."));
k.push(h1("2. Visual Field Lesions ★"));
k.push(detail(["Lesion site","Deficit"],[
 ["**1 — Optic nerve** (before chiasm)","**Monocular blindness**, ipsilateral eye"],
 ["**2 — Optic chiasm**","**Bitemporal hemianopia** (crossing nasal fibers cut — both temporal fields lost; think pituitary tumor)"],
 ["**3 — Optic tract** (past chiasm)","**Contralateral homonymous hemianopia** — full field cut, the most common deficit PTs see (right tract → left field of BOTH eyes)"],
 ["**4 — Optic radiations, partial**","**Homonymous quadrantanopia** (superior or inferior quadrant, contralateral)"],
 ["**Visual cortex**","**Cortical blindness** — no conscious vision; **blindsight** can persist (pointing, motion + face detection via intact superior-colliculus/geniculate routes)"]],[3100,6260]));
k.push(bullet("**Field testing** (CN II screen): patient covers one eye, fixates your face; bring wiggling fingers in an arc from behind their head into each of the four quadrants; normal = detection in the far periphery; four quadrants × two eyes."));
k.push(h1("3. Reflexes and Eye Movements — Exam and Interpretation"));
k.push(detail(["Test","Method → interpretation"],[
 ["**Pupillary light reflex** (II afferent, III efferent)","Shine light in one eye: DIRECT constriction (that eye) + CONSENSUAL (other eye); pupils normally symmetric 3–6 mm. CN III lesion → ipsilateral dilated pupil, absent direct response. **Complete CN II lesion → NEITHER pupil reacts when light hits the affected eye** (consensual failure = afferent problem)"],
 ["**Convergence** (III + fusion)","Follow a target from ~2 ft to ~4 in from the nose: symmetric adduction. One eye stalling = CN III, visual perception, or central fusion deficit"],
 ["**Accommodation** (II + III parasympathetic)","Cover one eye; card with text approaches: focus should hold to ~4 in before 40 (recedes to ~39 in by middle age). Blur too early = II, III-parasympathetic, or constrictor-muscle lesion (bilateral tract→cortex lesions also impair it). Pupil rule: **close → constrict, distance → dilate**"],
 ["**Smooth pursuit — H test** (III, IV, VI)","Track your finger through an H, 1.5 ft away: conjugate, smooth, symmetric. Muscle map: III = medial/superior/inferior rectus + inferior oblique · IV = superior oblique (adducted eye down) · VI = lateral rectus. Pursuit problems → ipsilateral parieto-occipital pathways"],
 ["**Saccades**","Look left-right on command between two targets: fast conjugate jumps without overshoot. Deficits → contralateral frontal eye field"],
 ["**Optokinetic nystagmus**","Striped cloth moving across gaze: alternating pursuit + reset saccades — gaze stabilization working with the VOR"]],[2900,6460]));

k.push(pageBreak());
/* ─────────────── TOPIC 7.3: VESTIBULAR ─────────────── */
k.push(banner("TOPIC 7.3","Peripheral Vestibular System"));
k.push(spacer());
k.push(h1("1. The Apparatus (thumbnail-sized, temporal bone)"));
k.push(bullet("**Bony labyrinth** (perilymph inside) suspends the **membranous labyrinth** (endolymph inside) — cochlea for hearing + vestibular apparatus. **Three semicircular canals** (anterior, posterior, lateral/horizontal) sense **ANGULAR acceleration**; each ends in an **ampulla** containing the **crista** (hair cells + supports) topped by the gelatinous **cupula**. **Two otolith organs** sense **LINEAR acceleration + head position vs gravity**: **utricle** (horizontal plane — bending forward from upright) and **saccule** (vertical plane — sidelying to standing); their hair cells sit under a gelatinous membrane weighted with **otoconia** (calcium-carbonate crystals denser than endolymph — the bananas on the jello)."));
k.push(bullet("Mechanics: head still → both ears fire at baseline. Head turns → endolymph lags (inertia) → cupula + hair cells bend → **firing INCREASES in one ear and DECREASES in the other** — the brain reads direction from the DIFFERENCE. Constant rotation → endolymph catches up → sensation fades; stopping reverses the flow → post-spin dizziness + visible eye movement. **Canal pairs share an axis** (left posterior + right anterior; left anterior + right posterior; the two laterals), 90° apart, so one plane of rotation maximally excites one member and inhibits its partner."));
k.push(h1("2. Peripheral Vestibular Disorders"));
k.push(detail(["Disorder","Picture"],[
 ["**BPPV**","Otoconia break loose into a semicircular canal; position changes drag endolymph → cupula deflects far harder than the actual movement → 30 s–2 min spins with position change; ~1 in 4 adults eventually. Signal mismatch with vision/proprioception/other ear adds disequilibrium"],
 ["**Ménière's disease**","Endolymph pressure too high: triad of roaring tinnitus + fluctuating hearing loss + vertigo spells lasting hours–days (many past 'Ménière's' cases are now recognized as vestibular migraine)"],
 ["**Vestibular neuritis / labyrinthitis**","Viral (typically herpes simplex) infection of CN VIII's vestibular branch: sudden vertigo for hours–days + nausea + unsteadiness, **NO hearing loss**; labyrinthitis = same + cochlear branch → hearing loss too. Acute phase settles in days; residual dizziness = therapy's job"],
 ["**Acoustic neuroma (schwannoma)**","Slow benign nerve-sheath tumor in the internal auditory canal: hearing loss + tinnitus on that side, possible imbalance, usually little vertigo (slow growth lets the brain compensate); watch-and-wait vs surgery; rehab after either"],
 ["**Ototoxicity**","Gentamicin/streptomycin damage cochlea + vestibular apparatus BILATERALLY: hearing loss, unsteadiness, **oscillopsia** (world bounces — VOR gone); little dizziness because loss is symmetric. Hallmark: wide-based, markedly unsteady gait"],
 ["**Perilymphatic fistula**","Abnormal middle↔inner-ear connection at the round/oval window (head trauma, diving barotrauma): pressure changes (cough, sneeze, lift) → brief vertigo/hearing loss/oscillopsia"],
 ["**Superior canal dehiscence**","Congenital missing roof of the anterior canal: loud sound or pressure → symptoms; can hear their own eyes move/heartbeat; surgical fix + post-op therapy"]],[2700,6660]));

k.push(pageBreak());
k.push(banner("TOPIC 7.3 (cont.)","Central Vestibular System"));
k.push(spacer());
k.push(h1("1. Pathways and Reflexes"));
k.push(bullet("Vestibular nerve → **four vestibular nuclei** (medulla + caudal pons), which INTEGRATE vestibular + visual + proprioceptive + tactile + auditory input, in constant feedback with the **vestibulocerebellum** (the 'adaptive processor'). Outputs: medial + lateral **vestibulospinal tracts** (posture), ocular motor nuclei (eye movements), thalamus → **vestibular cortex** (conscious head-position awareness, body-vs-environment movement discrimination), **reticular formation** (arousal — and the nausea/vomiting of vestibular disorders + motion sickness), CN XI (head stabilization)."));
k.push(detail(["Reflex","Function"],[
 ["**VOR — vestibulo-ocular**","Eyes move equal-and-opposite to the head → stable gaze while walking, driving; test it by fixing eyes on this screen while shaking your head"],
 ["**VSR — vestibulospinal**","Otolith input → spinal + LE muscles → ankle/hip/stepping balance strategies; trunk leans right → left trunk musculature fires to re-erect"],
 ["**VCR — vestibulocollic**","Stabilizes the head in space via neck muscles (CN XI)"]],[2400,6960]));
k.push(h1("2. Postural Vertical Disorders — the Pulsions"));
k.push(bullet("An inaccurate internal 'vertical' makes the person tilt to match it — and passive correction feels like FALLING, so they resist it hard. **Lateropulsion** (= pusher syndrome/behavior, contraversive pushing): powerful pushing away from the LESS-paretic side in sitting, transfers, standing, gait — extends the non-paretic arm/leg and pushes; high fall risk; from otolith-signal imbalance; seen in central AND ~1/3 of unilateral peripheral disorders. **Retropulsion** (backward disequilibrium): backward tilt + resistance to correction — the perceived vertical drifts posteriorly with age-related vestibular loss; strongly correlated with falls in older adults. Anteropulsion = forward version."));
k.push(h1("3. Central Vestibular Disorders"));
k.push(bullet("Damage to the vestibular nuclei or their connections (brainstem/cerebellar ischemia or tumor, cerebellar degeneration, MS, Arnold-Chiari). Usually MILDER dizziness than peripheral — but the red flags for CENTRAL are: continuous all-day symptoms, severe dizziness >3 days with only mild nausea, **pure vertical positional nystagmus**, double vision, plus any hard neuro sign (sensory/motor loss, ataxia, dysarthria). **CPPV** mimics BPPV but shows different nystagmus on Dix-Hallpike and does NOT resolve with repositioning maneuvers. Thalamocortical/vestibular-cortex lesions typically cause NO dizziness (nuclei signals stay symmetric) — they cause pulsion instead."));
k.push(bullet("**Vestibular migraine** — now the most common cause of episodic vertigo (~3% of adults): minutes–days of vertigo ± headache, diagnosed by exclusion plus migraine features (photophobia, phonophobia, aura, visual motion sensitivity). **3PD (persistent postural-perceptual dizziness)** — ≥3 months of dizziness/unsteadiness, worse upright and in visually busy environments (grocery store, scrolling traffic), often after a concussion or another vestibular event; treated with rehab ± meds ± CBT — and it is NOT psychogenic."));

k.push(pageBreak());
/* ─────────────── STUDY ─────────────── */
k.push(banner("MODULE 7","Reading Map and Glossary"));
k.push(spacer());
k.push(detail(["Topic","Source"],[
 ["7.1 Cranial nerves + disorders","Lundy-Ekman Ch 20, pp. 360–375 + 375–381"],
 ["7.2 Visual system + eye movements","Lundy-Ekman Ch 22, pp. 403–411 + 411–418"],
 ["7.3 Vestibular system","Lundy-Ekman Ch 23, pp. 422–428 + 428–432; O'Sullivan Ch 8 pp. 212–213 (vestibular exam)"],
 ["Extras","Module 6+7 combined brainstem/CN/vision/vestibular handout · sync worksheet + brainstem lesion case · aVOR app for canal/VOR visualization"]],[2600,6760]));
k.push(tnote("Assignment: Module 7 Knowledge Check. Drill directions of deviation: jaw deviates TOWARD the CN V lesion, tongue TOWARD the CN XII lesion, uvula/palate AWAY from a vagus lesion — and the lower-face-only rule for UMN facial weakness."));
k.push(spacer());
k.push(...glossary("Module 7 Quick-Reference Glossary",[
 ["Sensory / motor / mixed CNs","I II VIII / III IV VI XI XII / V VII IX X"],
 ["Anosmia","Loss of smell — CN I"],
 ["Trigeminal neuralgia","Unilateral electric facial pain, no sensory loss; classic type = vascular compression"],
 ["Bell's palsy","Idiopathic LMN facial palsy — whole ipsilateral half-face, incl. eye closure"],
 ["UMN facial weakness","Contralateral LOWER face only; upper face spared by bilateral innervation"],
 ["Conductive vs sensorineural deafness","Outer/middle-ear transmission (reversible) vs inner-ear/nerve damage (often permanent)"],
 ["Organ of Corti","Cochlear hair-cell organ of hearing; tonotopic (high = base, low = apex)"],
 ["Dysphagia / dysarthria","Swallowing difficulty / motor speech disorder (language intact)"],
 ["Retinogeniculocalcarine pathway","Retina → chiasm → tract → lateral geniculate → radiations → calcarine cortex"],
 ["Bitemporal hemianopia","Chiasm lesion — both temporal fields (pituitary tumor)"],
 ["Homonymous hemianopia","Same-side field loss in both eyes — optic tract/radiations, contralateral"],
 ["Blindsight","Nonconscious visual orientation despite cortical blindness"],
 ["Ventral / dorsal visual streams","Perception (what) / action (where-how)"],
 ["Ampulla, crista, cupula","Canal swelling, its hair-cell organ, and the gelatinous cap that bends"],
 ["Otoconia","Calcium-carbonate crystals loading the otolith membrane; loose ones = BPPV"],
 ["Canal pairs","L-posterior + R-anterior · L-anterior + R-posterior · both laterals — shared axes, push-pull"],
 ["Oscillopsia","Bouncing vision from lost VOR (bilateral vestibular loss, ototoxicity)"],
 ["VOR / VSR / VCR","Gaze stabilization / postural (balance-strategy) / head-stabilization reflexes"],
 ["Lateropulsion (pusher)","Pushing away from the less-paretic side against a false vertical"],
 ["3PD","Persistent postural-perceptual dizziness ≥3 months, worse upright + visually busy"]]));

build(k,"/home/claude/out/Module7_CranialNervesVisualVestibular_StudyNotes.docx");
