const L = require('/home/claude/notes_lib.js');
const {C,h1,h2,body,bullet,tnote,tip,compare,detail,infoBox,banner,glossary,fig,pageBreak,spacer,cover,build,linkBox} = L;
const k=[];

k.push(...cover("Clinical Neuroscience (DPTH 6141)","Module 5, Topic 4: Spinal Cord Lesions & Injury",
 "Lecture 1: The Spinal Region Part 4 — Segmental & Tract Lesions • Lecture 2: Traumatic SCI & the ASIA Exam — Dr. Lindsay Perry, PT, DPT, NCS",
 ["Watch both lectures in your own Canvas module",
  "★ Practice the syndromes in BOTH directions: signs → syndrome AND syndrome → signs",
  "The ASIA classification table and the autonomic-dysreflexia response are the two things to know cold"]));

/* ─────────────────────────── LECTURE 1 ─────────────────────────── */
k.push(banner("LECTURE 1","Segmental & Tract Lesions of the Spinal Region"));
k.push(spacer());
k.push(h1("1. Segmental vs Tract vs Peripheral"));
k.push(tnote("Tract impairments present BELOW the lesion; segmental impairments present AT the lesion. Often both at once. Two localizing questions: segmental, tract, or both? And motor, sensory, and/or autonomic?"));
k.push(compare("SEGMENTAL LESION (AT the level)","VERTICAL TRACT LESION (BELOW the level)",
 ["One horizontal cord level",
  "Sensory: dermatomal-pattern loss",
  "Motor: **LMN signs** — flaccid weakness, atrophy, fibrillations, fasciculations; absent stretch reflex at that level",
  "Autonomic signs less prominent (adjacent-segment redundancy — a C5 root lesion weakens biceps/brachioradialis but C6 keeps them from full paralysis)"],
 ["Ascending/descending pathways interrupted",
  "DCML → ipsilateral ↓ light touch + proprioception · SPT → contralateral ↓ pain + temperature",
  "CST → **UMN signs**: paralysis, spasticity, hypertonia, +Babinski",
  "Autonomic: BP regulation, sweating, bladder/bowel control impaired"],
 C.blue,C.teal,C.lightBlue,C.lightTeal));
k.push(bullet("**Peripheral nerve lesion vs spinal region:** peripheral = deficits in the PERIPHERAL-NERVE distribution (not dermatome/myotome), sensory + motor along the nerve path, absent stretch reflex, and **NO vertical tract signs**. Spinal region = dermatome/myotome pattern ± below-level tract signs ± UMN signs (spasticity, hyperreflexia, Babinski, clonus) ± autonomic change."));
k.push(h1("2. The Spinal Cord Syndromes (★ know location + signs + what's intact)"));
k.push(detail(["Syndrome — site","Lost vs intact"],[
 ["**Anterior cord** — anterior 2/3 (anterior spinal artery; also trauma/tumor)","LOST: bilateral pain + temperature (SPT) · bilateral motor — UMN below, LMN at level, spasticity develops. INTACT: light touch, proprioception, vibration — posterior columns ride a separate (posterior spinal) blood supply"],
 ["**Central cord** — central cervical cord, C4–C5 typical (hyperextension trauma, stenosis, tumor) — the MOST COMMON SCI syndrome","LOST: bilateral pain/temp AT the level (crossing spinothalamic fibers); larger lesions add **bilateral UE weakness, UE > LE** (medial CST carries the arms). INTACT: LE motor (lateral CST), light touch + proprioception. ★ Memory hook: central cord → center of cord → arms worse than legs"],
 ["**Brown-Séquard** — lateral hemisection (trauma, tumor, MS)","AT level: ipsilateral all-modality dermatomal loss + LMN signs. BELOW: **ipsilateral** motor paralysis (CST) + ↓ light touch/proprioception (DCML) with UMN signs · **contralateral** ↓ pain + temperature (SPT crosses within 1–2 levels of entry). ★ Same side loses movement and fine touch; opposite side loses pain and temperature"],
 ["**Cauda equina** — lumbosacral roots L1–S5, below the cord proper (tumor, trauma); complete lesions rare","Purely LMN: bilateral all-modality LE + saddle sensory loss · flaccid paralysis · absent LE DTRs · **areflexive bladder/bowel**. NO spasticity or hyperreflexia — the cord itself isn't involved; UE intact"],
 ["**Tethered cord** — developmental attachment of cord to surrounding structures","Cord stretches as the spine grows: LMN signs if the cauda equina is stretched, UMN signs if the cord is. Associated with spina bifida occulta / myelomeningocele at L4–S1; skin clues: dimple, hair tuft, hemangioma, fatty mass. Signs surface at GROWTH SPURTS; surgical untethering possible"]],[3000,6360]));
k.push(h1("3. Spinal Region Disorders"));
k.push(bullet("**Radiculopathy** (nerve-root lesion): dorsal root → dermatomal sensory loss, pain, **hyperalgesia if the DRG is compressed** (the DRG is more mechanically sensitive than the axons, and compression rewires its neuropeptides/ion channels toward amplified pain) · ventral root → myotomal weakness/atrophy, paralysis if severed, **fibrillations**, absent reflexes."));
k.push(compare("ERB'S PALSY (C5–C6 avulsion)","KLUMPKE'S PARALYSIS (C8–T1 avulsion)",
 ["Forceful head-shoulder separation — birth traction, motorcycle shoulder impact",
  "Lost: shoulder abduction + ER, elbow flexion; biceps + brachioradialis reflexes",
  "**\"Waiter's tip\"** posture: adducted/internally-rotated shoulder, extended elbow, pronated forearm"],
 ["Traction on the ABDUCTED arm",
  "Lost: hand intrinsics, long finger flexors + extensors",
  "**Claw hand**; grip and fine motor severely impaired; ventral-root severance → paralysis, atrophy, fibrillations"],
 C.blue,C.teal,C.lightBlue,C.lightTeal));
k.push(bullet("**Sciatica** — pain radiating from low back down the sciatic path: herniated disc on a lumbar root · spinal stenosis · piriformis syndrome · spondylolisthesis. **MS** — random multifocal CNS demyelination (brain AND cord); presentation varies with plaque location: DCML numbness/paresthesia, spinocerebellar ataxia, asymmetric weakness/hypertonia, optic neuritis, dysarthria/dysphagia, fatigue, cognitive change, bowel/bladder. ★ **Lhermitte's sign** — electric shock down the spine on neck FLEXION = cervical cord/MS involvement (high-yield). **Transverse myelitis** — autoimmune inflammation across a full cord segment → segmental AND tract signs at once; thoracic most common (autonomic involvement); typically a single confined episode, vs MS's multifocal recurrence."));
k.push(h1("4. Compression Disorders"));
k.push(tnote("Gradual onset + progressive worsening + no trauma history + combined segmental and tract signs → think tumor, stenosis, or syringomyelia."));
k.push(detail(["Disorder","Picture"],[
 ["**Tumor**","External (epidural/subarachnoid) or intramedullary; compresses cord, roots, vessels. **First and most common symptom: pain aggravated by coughing and sneezing**"],
 ["**Cervical stenosis / myelopathy**","Degenerative narrowing (spurs, facet hypertrophy, discs, ligamentum flavum). **FIRST sign: abnormal gait** (spinocerebellar + UMN tracts). UE: dermatomal sensory loss + LMN weakness (foraminal compression); LE: UMN signs (paresis, hyperreflexia, Babinski, clonus, spasticity); late: bladder/bowel"],
 ["**Lumbar stenosis**","LE + low-back pain aggravated by WALKING, relieved by REST; **flexion opens the canal** (leaning forward, sitting helps). Severe: paresis, foot drop, numbness, heavy limbs; may add cauda-equina LMN signs"],
 ["**Syringomyelia**","Rare, progressive, onset 35–45: a **syrinx** (CSF cavity) in the central cervical cord interrupts crossing SPT fibers → **\"cape-like\" UE pain/temperature loss** + UE paresis/atrophy (segmental) + LE UMN signs (vertical); eventually bowel/bladder"]],[2700,6660]));
k.push(infoBox("🚩 PT examination red flags",[
 "Spinal cord: bilateral altered/lost somatosensation (dermatomal or below-level) · ataxia (spinocerebellar) · UMN signs — spasticity, hypertonia, hyperreflexia, +Babinski, clonus · decreased voluntary power.",
 "Cauda equina: urinary/fecal incontinence or retention · saddle sensory loss · low-back pain · uni/bilateral sciatica · LE paresis + sensory deficits · reduced/absent LE DTRs.",
 "Cauda equina vs vascular claudication: cauda equina signs persist AT REST with saddle numbness and bladder/bowel change; claudication hurts with walking, resolves with brief rest, and shows reduced pulses/cyanosis with NO saddle or bladder involvement. Do not mistake one for the other."],C.red,C.lightRed));
k.push(pageBreak());

/* ─────────────────────────── LECTURE 2 ─────────────────────────── */
k.push(banner("LECTURE 2","Traumatic SCI & the ASIA Exam",C.teal));
k.push(spacer());
k.push(h1("1. Injury, Spinal Shock, and Stages"));
k.push(bullet("**Causes:** MVA, sports, falls — these typically do NOT sever the cord (damage = crush, hemorrhage, infarction, edema); penetrating wounds (knife/bullet) directly transect neurons. **Spinal shock**, immediately post-injury: K⁺ leaks from injured cells and blocks conduction below the lesion — paralysis, total sensory loss, absent somatic reflexes (stretch, withdrawal, crossed extension), lost autonomic reflexes (atonic bladder → catheterize against overflow), hypotension, no sweating/piloerection below. **Return of SACRAL reflexes = resolution beginning** (days–months, variable); neuroplasticity's new synapses can then overshoot into **hyperreflexia**."));
k.push(bullet("**Stages:** acute (includes spinal shock) → subacute (shock resolving, deficits fluctuating) → chronic (deficits STABLE — SCI is not progressive; secondary complications are the preventable part). ICF picture: UMN signs, lost voluntary motor, tone and sensory changes, autonomic + respiratory + bowel/bladder dysfunction → bed mobility/transfer/self-care/gait limits → participation restrictions shaped by environment and person."));
k.push(h1("2. Secondary Complications + PT Prevention"));
k.push(bullet("**The list:** UTI · spasticity (arrives as shock resolves) · chills/fever (thermoregulation) · decubiti · **autonomic dysreflexia** · contractures · **heterotopic ossification** · pneumonia. **PT counters:** early UPRIGHT mobilization (UTI, pneumonia, autonomic dysregulation) · ROM (contractures) · positioning + pressure-relief turning (decubiti) · gentle strengthening technique (HO risk) · compression garments (orthostatic hypotension)."));
k.push(h1("3. Autonomic Dysfunction at T6 and Above"));
k.push(detail(["Condition","Signs · triggers · response"],[
 ["**Autonomic dysreflexia — MEDICAL EMERGENCY**","Trigger: an UNPERCEIVED noxious stimulus below the lesion (full bladder, kinked catheter, ingrown toenail, wrinkled sheet) → **BP spikes + bradycardia + pounding headache**, pallor below / flushing-diaphoresis above; stroke is the immediate risk. **Response: 1) find and REMOVE the stimulus · 2) SIT the patient upright (lowers BP) · 3) monitor BP every 5 minutes · 4) call 911 if no improvement**"],
 ["**Poor thermoregulation — MEDICAL EMERGENCY**","HOT: no sweating below the lesion → heat stroke (high temp, rapid pulse, dry skin below) — cool environment, cool fluids, misting. COLD: no shivering below → hypothermia (confusion, lethargy, ↓HR/RR) — warm clothing, environment, fluids"],
 ["**Orthostatic hypotension**","Within 3 min of upright: **>20 mmHg systolic drop OR >10 diastolic OR >20 bpm HR rise** — lost sympathetic vasoconstriction + muscle pump. Prevention: compression stockings, ACE wraps, abdominal corset. Acute episode: **lay flat immediately** and keep monitoring"]],[2700,6660]));
k.push(bullet("**Interneuron changes below the lesion** explain the chronic UMN picture: reduced inhibitory-interneuron response to Ia afferents → **hyperreflexia**; facilitated cutaneous-afferent → LMN transmission (descending inhibition of withdrawal interneurons is gone). Muscle follows: denervation, progressive fibrosis, tonic-property shift, atrophy + spasticity. **Tetraplegia** (cervical): four limbs + trunk + pelvic organs; **above C4 = ventilator** (phrenic C3–5). **Paraplegia** (below cervical): arms spared; trunk/LE/pelvic organs affected."));
k.push(pageBreak());
k.push(h1("4. The ASIA Examination"));
k.push(bullet("The standardized SCI classification — the most used and validated tool. 🎙 Patient **SUPINE for the entire exam**; it can run 45+ minutes. **Motor:** 5 key UE muscles (C5–T1) + 5 key LE muscles (L2–S1), bilaterally = 20; graded **0–5 with NO plus/minus** (start at grade 3: fail → test 0/1/2; pass → test 4/5); sacral motor = **Voluntary Anal Contraction (VAC)**, yes/no. **Sensory:** pin prick (sharp/dull) + light touch (cotton) at every key dermatome point, **0 absent / 1 impaired / 2 intact**, bilaterally; sacral sensory = **Deep Anal Pressure (DAP)**, yes/no."));
k.push(detail(["ASIA motor grade","Meaning"],[
 ["0","Total paralysis — no visible or palpable contraction"],
 ["1","Palpable or visible contraction only"],
 ["2","Full ROM, gravity ELIMINATED"],
 ["3","Full ROM AGAINST gravity"],
 ["4","Against gravity + moderate resistance"],
 ["5","Normal — full resistance"],
 ["NT","Not testable (immobilization, pain >50% ROM, contracture)"]],[1800,7560]));
k.push(h1("5. Classification: Complete vs Incomplete + AIS Grades"));
k.push(bullet("**Complete** = NO sensory AND no motor in the lowest sacral segment S4–5 (no DAP, no VAC) = **AIS A**; the **Zone of Partial Preservation** (most caudal partially-innervated level below the NLI) applies ONLY to complete injuries. **Incomplete** = ANY sacral preservation (any yes on DAP or VAC, or S4–5 sensation) = grades B–D, better prognosis."));
k.push(detail(["AIS grade","Criteria"],[
 ["**A — complete**","No motor or sensory function preserved at S4–5"],
 ["**B — sensory incomplete**","Sensory preserved below the NLI including S4–5 (LT, PP, or DAP) · NO VAC · no motor >3 levels below the motor level"],
 ["**C — motor incomplete**","VAC present OR sensory-incomplete + motor >3 levels below the motor level · **FEWER than half of the 20 key muscles ≥ grade 3 (1–9)**"],
 ["**D — motor incomplete**","Same as C but **half or more ≥ grade 3 (10–20)**"],
 ["**E — normal**","All key muscles 5/5, all sensory 2/2 — usable only with a prior SCI deficit"]],[2400,6960]));
k.push(bullet("**Neurologic Level of Injury (NLI):** the most caudal level with INTACT motor AND sensory **bilaterally** — assessed as four values (R/L sensory, R/L motor), take the most CEPHALAD; where no key motor level exists (T2–L1), use the lowest intact sensory level. Asymmetry is common — score sides independently. 🎙 **Skeletal level (the imaged vertebral fracture) ≠ NLI** — patients will quote their fracture level; always clarify."));
k.push(h1("6. CPGs and Prognosis"));
k.push(bullet("**Central pattern generators** in the lumbar cord produce rhythmic stepping — and after a complete SCI the isolated cord below can still generate near-normal reciprocal stepping, activated by direct cord stimulation or patterned somatosensory input (**body-weight-supported treadmill locomotor training**; bilateral alternating leg movement amplifies it; works in complete AND incomplete SCI). What CPG stepping alone can't provide: postural control, cortical ankle-dorsiflexion control (foot clearance), adaptive afferent feedback — which is exactly where active rehab lives. Emerging: **brain-spinal-cord interfaces** (brain electrodes + spinal stimulator bypassing the lesion) + rehab → demonstrated functional stepping."));
k.push(bullet("**Why CNS axons don't regrow:** oligodendrocyte inhibitory molecules, glial scars, lower adult-neuron growth rates — the secondary cascade (bleed, edema, ischemia, inflammation) extends the damage. **Prognosis (Kirshblum 2021):** incomplete recovers faster than complete in the first 3 months · the **24 h–1 week ASIA exam is the best prognostic snapshot** (correlates with 6-month outcome) · spontaneous motor recovery plateaus at **12–18 months** · **B and C convert most** (A and D least) · **pin-prick preservation predicts motor recovery** · AIS A: 20–30% convert to incomplete within 30 days (half to B, half to C/D) · tetraplegia converts more (~30%) than paraplegia (~15–20%) · more caudal injury = better outlook · in C, intact VAC + sacral sensory sparing is the best sign — and gaining a motor level counts as a real outcome even without grade conversion."));
k.push(...glossary("Module 5.4 — Quick-Reference Glossary",[
 ["Segmental vs tract lesion","Deficits AT the level (LMN, dermatomal) vs BELOW it (UMN, tract)"],
 ["Anterior cord","Ant. spinal artery; loses pain/temp + motor; posterior columns spared"],
 ["Central cord","Most common; cervical; UE > LE weakness; LT + proprioception spared"],
 ["Brown-Séquard","Hemisection: ipsi motor + fine touch below, contra pain/temp"],
 ["Cauda equina","Roots only — pure LMN, areflexive bladder/bowel, no spasticity"],
 ["Lhermitte's sign","Neck-flexion electric shock — cervical cord / MS"],
 ["Syringomyelia","Central cervical syrinx → cape-like pain/temp loss"],
 ["Spinal shock","K⁺ conduction block below lesion; sacral reflex return = resolving"],
 ["Autonomic dysreflexia","BP spike + bradycardia + headache from stimulus below T6: remove → sit up → BP q5min → 911"],
 ["Orthostatic criteria",">20 systolic or >10 diastolic drop, or >20 bpm rise, within 3 min"],
 ["ASIA motor/sensory","20 key muscles 0–5 (no ±) · dermatomes 0/1/2 · VAC + DAP sacral"],
 ["AIS A–E","Complete · sensory-incomplete · motor <½ ≥3 · motor ≥½ ≥3 · normal"],
 ["NLI vs skeletal level","Most caudal bilaterally-intact level ≠ fracture level"],
 ["ZPP","Partial innervation below NLI — complete injuries only"],
 ["CPG","Lumbar stepping network; activated by stimulation or locomotor training"],
 ["Kirshblum 2021","24h–1wk exam best prognosis; plateau 12–18 mo; pin prick predicts motor"]]));

build(k,"/home/claude/out/Module5.4_SpinalCordLesionsAndSCI_StudyNotes.docx");