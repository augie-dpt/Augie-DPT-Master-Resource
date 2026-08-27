const L = require('/home/claude/notes_lib.js');
const {C,h1,h2,body,bullet,tnote,tip,compare,detail,infoBox,banner,glossary,fig,pageBreak,spacer,cover,build,linkBox} = L;
const k=[];

k.push(...cover("Clinical Neuroscience (DPTH 6141)","Module 5: Peripheral and Spinal Regions",
 "Topics 5.1–5.3 • Lectures by Dr. Lindsay Perry • Reading: Lundy-Ekman Ch 18 (pp. 299–312) + Ch 19 (pp. 334–341)",
 ["Watch the VOPPs in your own Canvas module — these notes condense them, they don't replace them",
  "★ Topic 5.4 (segmental + tract lesions, spinal cord syndromes, traumatic SCI + the ASIA exam) lives in its own doc: Module5.4_SpinalCordLesionsAndSCI_StudyNotes",
  "The recurring exam move here: peripheral-nerve distribution vs dermatome, and cord segment vs vertebral level — never conflate either pair"]));

/* ─────────────── TOPIC 5.1a ─────────────── */
k.push(banner("TOPIC 5.1","Neuroanatomy of the Peripheral Region"));
k.push(spacer());
k.push(h1("1. What Counts as Peripheral"));
k.push(bullet("Everything distal to the spinal nerves + the cranial-nerve axons outside the skull — the neural structures NOT encased in bone. Contains the **somatic** (voluntary) and **autonomic** systems. Peripheral nerves are MIXED: cutaneous branches also carry sympathetic efferents (sweat glands, arrector pili, arterioles); muscular branches also carry proprioceptor afferents."));
k.push(h1("2. Nerve Architecture, Inside Out"));
k.push(bullet("**Endoneurium** wraps each axon (± myelin — Schwann cells myelinate the large-diameter axons; small ones are un-/partially myelinated, hence slower). Axons bundle into a **fascicle** wrapped in **perineurium**; the whole trunk is wrapped in **epineurium**, surrounded by connective tissue that permits nerve motility — and is dense with nociceptive free nerve endings, which is why nerve pathology HURTS. Blood arrives via segmental arterial branches."));
k.push(bullet("Axon classification (Lundy-Ekman Fig 18.4, p. 300): letters (A/B/C — sensory AND motor) and Roman numerals (I–IV — sensory only). Speed spans two orders of magnitude: fastest ≈ a football field per second; slowest ≈ an arm span per second. **Diameter + myelin = velocity.**"));
k.push(h1("3. The Four Plexuses"));
k.push(detail(["Plexus (roots)","Territory"],[
 ["**Cervical (C1–C4)**","Deep to SCM; sensory posterior scalp → clavicle; anterior neck muscles; **phrenic nerve (C3–C5)** — the diaphragm's ONLY motor supply + its main sensory nerve"],
 ["**Brachial (C5–T1)**","Between anterior + middle scalenes, under the clavicle into the axilla; the ENTIRE upper limb"],
 ["**Lumbar (L1–L4)**","Forms in psoas major; skin + muscles of anterior/medial thigh"],
 ["**Sacral (S1–S4)**","Anterior to piriformis; posterior thigh + most of leg and foot; carries PARASYMPATHETIC axons (cervical/brachial/lumbar plexuses carry sympathetic via the chain)"]],[2700,6660]));
k.push(bullet("**Nerves need movement**: blood flow + axoplasm viscosity depend on it. Stretch happens in three ordered phases — (1) viscoelastic tubes stretch, axons unfold, fascicles glide; (2) the nerve slides relative to surrounding structures; (3) neural tissue elongates and tensile stress develops — reversed on release. This is the physiology under every neural-tension test."));
k.push(bullet("**Neuromuscular junction** = peripheral region. Each motor-axon depolarization releases enough ACh to fire every innervated fiber; between contractions, **miniature end-plate potentials** (tiny ACh releases, no contraction) keep the muscle from atrophying."));

k.push(pageBreak());
/* ─────────────── TOPIC 5.1b ─────────────── */
k.push(banner("TOPIC 5.1 (cont.)","Peripheral Nerve Dysfunction"));
k.push(spacer());
k.push(h1("1. What Neuropathy Looks Like"));
k.push(bullet("Mixed nerves → mixed deficits, in combination: **sensory** (total loss → hyperesthesia), **autonomic** (sweating, BP/HR regulation, bowel/bladder, impotence), **motor** (paresis → paralysis; EMG activity drops ~a week post-injury; atrophy progresses fast; **fibrillations** from ACh hypersensitivity at the NMJ — a hallmark), **trophic changes** (shiny skin, brittle nails, thickened skin, poor wound healing, neurogenic joint damage)."));
k.push(h1("2. Mononeuropathy — Three Severity Grades"));
k.push(detail(["Grade","Pathology → prognosis"],[
 ["**Neurapraxia** (traumatic demyelination / myelinopathy)","Focal compression damages MYELIN only. Gain-of-function signs from ectopic foci + neuroinflammation (tingling, hypersensitivity, spontaneous pain) and/or loss of function from slowed conduction. **Rapid remyelination → complete recovery.** Clinical face: carpal tunnel — median-distribution numbness/tingling/burning, symptoms provoked by compression or neural-tension testing, ± sweating loss, thenar atrophy + paresis"],
 ["**Axonotmesis** (axonopathy)","Crush injury damages the AXON → **wallerian degeneration distal to the lesion**; mixed sensory/reflex/motor impairment + atrophy. **Slow regrowth, good recovery**"],
 ["**Neurotmesis**","Laceration/severe stretch RUPTURES the nerve: immediate sensory loss + flaccid paralysis. **Slow, poor recovery**, complications likely"]],[2900,6460]));
k.push(h1("3. Multiple Mononeuropathy and Polyneuropathy"));
k.push(bullet("**Multiple mononeuropathy** — ASYMMETRIC involvement of several single-nerve distributions; ischemic causes (diabetes, vasculitis); slow but real recovery. **Polyneuropathy** — SYMMETRIC **stocking-glove** pattern, distal first then proximal; stable or progressive; recovery less likely."));
k.push(detail(["Polyneuropathy","Profile"],[
 ["**Diabetic neuropathy**","Sensory > motor, stocking-glove; ALL sensory axon sizes → ↓sensation + pain, paresthesias, dysesthesias; **impaired vibration sense is among the FIRST signs**, ankle reflexes fade; autonomic loss of blood-flow regulation → ↑bone resorption; painless feet + abnormal joint stresses → joint/foot damage; balance + coordination suffer"],
 ["**Guillain-Barré**","Autoimmune inflammatory attack; **rapid distal→proximal paralysis**, progressive ~6 weeks then reversal; motor > sensory, areflexia + hypotonia; ventilator when it reaches respiratory muscles; **~80% full recovery**"],
 ["**Charcot-Marie-Tooth**","HEREDITARY motor + sensory neuropathy (1 in 2,500): defective proteins for peripheral axons/myelin; onset adolescence/young adulthood; neuropathic pain (Aδ + C loss); foot drop + steppage gait — PT helps with strengthening, stretching, conditioning, protection"]],[2700,6660]));
k.push(bullet("**NMJ + muscle disorders** to keep separate from neuropathy: **myasthenia gravis** — autoimmune loss of postsynaptic ACh receptors → weakness that WORSENS with repeated contraction; stable or slowly progressive. **Myopathy** — disease intrinsic to muscle (inherited: muscular dystrophy; acquired: toxins, infection): degeneration of fibers with sensation + autonomic function INTACT; tone/reflex/coordination changes only once atrophy is severe."));
k.push(h1("4. Testing and the Peripheral-vs-Central Call"));
k.push(bullet("**Nerve conduction studies** differentiate myelinopathy vs axonopathy, UMN vs LMN paresis, mono vs poly. **EMG** isolates muscle-intrinsic disease. **Three clinical signs of peripheral neuropathy** (common ≥50 y — two or three of these rules it in): absent ankle-jerk reflex, impaired vibration sense (tuning fork), impaired great-toe position sense."));
k.push(tnote("The distribution decides the localization: peripheral nerve pattern → that nerve; dermatomal/myotomal pattern → root or cord; UMN signs present → central. Review Lundy-Ekman Table 18.3 until the columns are automatic."));

k.push(pageBreak());
/* ─────────────── TOPIC 5.2 PART 1 ─────────────── */
k.push(banner("TOPIC 5.2","The Spinal Region Part 1 — Neuroanatomy"));
k.push(spacer());
k.push(h1("1. Cord vs Column — the Level Problem ★"));
k.push(bullet("Spinal region = cord, dorsal + ventral roots, spinal nerves, meninges. The cord runs medulla → **L1–L2**, much shorter than the column. Spinal nerves: **C1–C7 exit ABOVE their vertebra, C8 exits between C7 and T1** (no C8 vertebra), **T1 and below exit BELOW** — 31 pairs total (8 cervical, 12 thoracic, 5 lumbar, 5 sacral, 1 coccygeal)."));
k.push(bullet("Cord segments sit HIGHER than same-numbered vertebrae: C8 segment ≈ C7 vertebral body; T10 segment behind the T9 body / T8 spinous process; **L2–L5 segments ≈ T10 vertebra**; **S1–S5 segments ≈ L1** — then cauda equina. This is why a fracture level is NOT the neurologic level of injury: the level is assigned from the motor + sensory presentation, not the broken bone."));
k.push(h1("2. Roots, Nerves, Rami"));
k.push(bullet("**Ventral = motor**: LMN somas in the ventral horn → ventral rootlets → ventral root (efferent). **Dorsal = sensory**: afferent axons enter via the dorsal root; somas in the **dorsal root ganglion** (the visible bulge). Roots conjoin into the **spinal nerve** (mixed: sensory + motor + autonomic for one segment), exiting the **intervertebral foramen**, then splitting into mixed **dorsal + ventral rami** — the anatomy behind dermatome + myotome maps."));
k.push(bullet("Root protection in the foramen: 23–50% of the space is fat cushion, plus dural sleeves + ligaments. Physiologic motion doesn't meaningfully narrow a normal canal — but **cervical extension or lateral bending closes the foramen** and provokes root signs when something's wrong (your MSK Spurling logic). Neural-tension tests (**slump**, straight-leg raise) load the meninges + continuous connective tissue — decreased knee extension in slump = positive."));
k.push(h1("3. Inside the Cord"));
k.push(bullet("**Gray matter H**: dorsal horn (sensory) · **lateral horn (autonomic, T1–L2 ONLY)** · ventral horn (motor, LMN somas); mostly interneurons — some staying in gray matter, some traveling white matter between levels. **White matter**: propriospinal axons (begin AND end in the cord) + vertical tract axons linking cord ↔ brain, somatotopically organized (C/T/L/S labeled in the cross-section) — dorsal columns (DCML), anterolateral (spinothalamic), spinocerebellar; descending corticospinal, reticulospinal, vestibulospinal."));
k.push(bullet("**Meninges** continue from the skull: dura (epidural space vertebra↔dura — the injection space), arachnoid (subdural between), pia adherent to cord (subarachnoid holds CSF); anchoring lets the cord move with the spine. **Blood**: three vertical spinal arteries — one anterior-medial, two posterior — fed by vertebral arteries (upper cord) + segmental **medullary arteries** from vertebral/cervical/thoracic/lumbar arteries."));

k.push(pageBreak());
/* ─────────────── TOPIC 5.2 PARTS 2-3 ─────────────── */
k.push(banner("TOPIC 5.2 (cont.)","Part 2 — Cord Function · Part 3 — Pelvic Organ Control"));
k.push(spacer());
k.push(h1("1. Interneurons Shape Motor Output"));
k.push(bullet("A single alpha motor neuron fires only when the summation across its **20,000–50,000 synapses** says so — spindle + GTO afferents, interneurons, and descending UMN tracts all vote. Clinical use: a 'missing' DTR can be facilitated with the **Jendrassik maneuver** (patient hooks fingertips and pulls — UMN activity raises cord excitation, and the reflex appears)."));
k.push(detail(["Circuit","Function"],[
 ["**Central (stepping) pattern generators**","Rhythmic alternating flexion-extension of hips/knees (visible in 2-month-olds held standing). Voluntary gait starts them via descending signals; the CPG computes a proprioceptive 'biomechanical snapshot' (Ia, Ib, II input) each instant, modulated by task, environment, **and gait phase** — the same foot e-stim excites tibialis anterior at swing onset but not elsewhere; trailing-limb hip stretch drives hip-flexor activation. ★ Locomotor-training implication: start the affected limb in trailing-limb position to exploit the CPG"],
 ["**Withdrawal + crossed extension reflexes**","Interneuron circuits spanning cord segments remove a limb from a stimulus (collaterals recruit muscles innervated at OTHER segments) while the opposite limb's extensors brace to prevent a fall"],
 ["**Reciprocal inhibition**","Inhibitory interneurons silence the antagonist while the agonist works (the PNF contract-relax / hold-relax mechanism); suppressible when co-contraction is wanted (novel or unpredictable tasks)"],
 ["**Recurrent inhibition (Renshaw cells)**","The mirror image: a collateral off the alpha motor neuron excites a Renshaw cell that inhibits that SAME neuron + synergists and disinhibits antagonists — focusing motor activity. Lost descending control of Renshaw cells → degraded fine motor control"]],[3000,6360]));
k.push(h1("2. Bladder, Bowel, Sexual Function (Part 3)"));
k.push(bullet("**Bladder circuitry**: wall stretch receptors (afferent) · **T11–L2 sympathetic** relaxes the bladder wall + contracts the internal sphincter (storage) · **S2–S4 parasympathetic** contracts the wall + relaxes the internal sphincter (voiding); somatic efferents hold the external sphincter until released. **Voluntary control needs three CNS centers**: frontal cortex (inhibits until safe) → pontine urination center → sacral cord center. Bowel runs on the same design (rectal stretch → lumbar/sacral cord → brain; relax sphincters + pelvic floor, rectum contracts)."));
k.push(compare("Lesion AT S2–S4 (or cauda) — AREFLEXIVE","Lesion ABOVE sacral cord — REFLEXIVE",
 ["Reflex circuit itself destroyed → **flaccid (LMN) bladder**: leakage, incontinence, paralysis of voiding",
  "Sexual function: impotence, absent genital sensation — LMN picture",
  "Complete lumbosacral lesions: afferent + parasympathetic disruption kills reflexive control"],
 ["Ascending/descending axons cut: stretch not FELT, volume capacity drops, but the sacral reflex arc survives → **automatic (reflexive) emptying**; UMN version can turn hypertonic/hyperreflexive → backflow risk → relaxants, catheterization, surgery",
  "Above T12: psychogenic erection lost, REFLEXogenic erection/ejaculation preserved, genital sensation absent · L2–S2: reflex AND psychogenic preserved, sensation absent",
  "Autonomic neurons spared on one side → voluntary bladder/bowel control usually returns after spinal shock"],
 C.blue,C.teal,C.lightBlue,C.lightTeal));
k.push(bullet("**Fertility in women returns to normal** after SCI — conception is possible; delivery often requires cesarean (impaired volitional motor control + vaginal sensation). Erection/engorgement/lubrication have **psychogenic** (erotic thought, sympathetic L1–L2) and **reflexogenic** (parasympathetic S2–S4) routes; ejaculation = sympathetic L1–L2 + pudendal S2–S4."));
k.push(tnote("Topic 5.4 continues from here: segmental vs tract lesions, the cord syndromes (anterior, central, Brown-Séquard, cauda equina, tethered), traumatic SCI and the ASIA exam — all in Module5.4_SpinalCordLesionsAndSCI_StudyNotes in this same folder."));

k.push(pageBreak());
/* ─────────────── STUDY ─────────────── */
k.push(banner("MODULE 5","Reading Map and Glossary"));
k.push(spacer());
k.push(h1("1. Reading and Resources"));
k.push(detail(["Topic","Source"],[
 ["5.1 Peripheral region","Lundy-Ekman Ch 18: anatomy pp. 299–304 · dysfunction pp. 304–312 (Table 18.3 ★, plexus appendices)"],
 ["5.2 Spinal region parts 1–3","Lundy-Ekman Ch 19, pp. 334–341 (bladder box p. 340)"],
 ["5.4 Lesions + SCI","Module5.4 study notes + Lundy-Ekman Ch 19 remainder; sync activity: SC syndromes worksheet"],
 ["Handouts","M5 Topic 1 Parts 1–2, M5 T2 Parts 1–4, Topic 3 SCI/ASIA handout, AD consortium executive summary — all in the module folder"]],[2600,6760]));
k.push(spacer());
k.push(...glossary("Module 5 Quick-Reference Glossary",[
 ["Endo- / peri- / epineurium","Sheaths around axon / fascicle / nerve trunk"],
 ["Phrenic nerve (C3–C5)","Sole motor supply of the diaphragm"],
 ["Miniature end-plate potential","Trickle ACh release that prevents muscle atrophy"],
 ["Neurapraxia / axonotmesis / neurotmesis","Myelin only (fast, full recovery) / axon crush + wallerian degeneration (slow, good) / severance (poor)"],
 ["Wallerian degeneration","Axon breakdown distal to an axonal lesion"],
 ["Stocking-glove distribution","Symmetric distal-first polyneuropathy pattern (diabetes)"],
 ["Charcot-Marie-Tooth","Hereditary motor-sensory neuropathy; foot drop + steppage gait"],
 ["Trophic changes","Shiny thickened skin, brittle nails, poor healing — autonomic + sensory loss"],
 ["Cauda equina","Lumbosacral roots below the conus medullaris (peripheral nerves)"],
 ["Conus medullaris","Cord's end at L1–L2"],
 ["Lateral horn","Autonomic gray matter, T1–L2 only"],
 ["Propriospinal axons","White-matter axons beginning and ending within the cord"],
 ["Jendrassik maneuver","Pull-apart grip that facilitates a hard-to-elicit DTR"],
 ["Renshaw cell","Interneuron for recurrent inhibition — focuses motor activity"],
 ["Crossed extension reflex","Stance-limb extensor burst when the other limb withdraws"],
 ["Reflexive vs areflexive bladder","Lesion above sacral cord (arc intact, automatic emptying) vs sacral/cauda lesion (flaccid, incontinent)"],
 ["Psychogenic vs reflexogenic arousal","Cortically-driven (sympathetic L1–L2) vs local-reflex (parasympathetic S2–S4)"],
 ["Slump test / SLR","Neural-tension tests loading meninges + peripheral nerve connective tissue"]]));

build(k,"/home/claude/out/Module5_PeripheralAndSpinalRegions_StudyNotes.docx");
