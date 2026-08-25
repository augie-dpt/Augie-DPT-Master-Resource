const L = require('/home/claude/notes_lib.js');
const {C,h1,h2,body,bullet,tnote,tip,compare,detail,infoBox,banner,glossary,fig,pageBreak,spacer,cover,build,linkBox} = L;
const k=[];

k.push(...cover("Human Physiology (DPTH 6131)","Module 8: The Musculoskeletal System",
 "Topics: 8.1 Muscle Physiology • 8.2 Connective Tissue • 8.3 Muscle Pathophysiology & Aging • Sync: three case scenarios",
 ["Lectures by Dr. Evan Andreyo (PT, DPT — board-certified orthopaedic + sports specialist); watch in your own Canvas module",
  "Required videos: Khan Academy muscle-tissue series + the Osmosis bone videos linked on the Canvas topic pages",
  "References: Guyton & Hall 14e Ch 6–8; Goodman & Fuller Pathology Ch 22–23, 25–26 (optional but heavily mined for these lectures)",
  "The three sync scenarios (osteoporosis, sprinter's hamstring, knee OA) are worked at the end — they're the best self-test of the module"]));

/* ─────────────────────────── 8.1 MUSCLE PHYSIOLOGY ─────────────────────────── */
k.push(banner("TOPIC 8.1","Muscle Physiology — From Action Potential to Adaptation"));
k.push(spacer());

k.push(h1("1. Excitation: neuron → muscle"));
k.push(body("The working unit is the **motor unit** — one motor neuron plus every fiber it innervates. At the **neuromuscular junction** the neuron releases **acetylcholine**; ACh receptors on the sarcolemma open sodium channels, Na+ rushes into the (~−70 mV) muscle cell, and the depolarization propagates along the muscle membrane exactly the way it did along the neuron. The signal dives to the fiber's core through the **T (transverse) tubules** to reach the **sarcoplasmic reticulum — the calcium bank** — which dumps a flood of Ca²⁺ into the cytoplasm."));
k.push(h1("2. Contraction: the calcium switch"));
k.push(bullet("**Tropomyosin** winds around actin \"like a Twizzler,\" physically covering the active sites so myosin can't bind; **troponin is the glue** holding tropomyosin in place."));
k.push(bullet("Ca²⁺ binds the troponin complex → tropomyosin swings off the active sites → myosin heads bind actin and, using **ATP**, execute the **power stroke** that slides the filaments past each other."));
k.push(bullet("Relaxation = pumping Ca²⁺ back into the SR (which also costs ATP), re-blocking the sites until the next action potential."));
k.push(bullet("Graded force comes from **summation**: more stimulus → more action potentials → more fibrils recruited and re-stimulated → stronger contraction."));

k.push(h1("3. Fueling the contraction — and why it fails"));
k.push(detail(["Energy source","Lasts about","Notes"],[
 ["Free ATP in the fiber","1–2 s","Instant but tiny reserve"],
 ["Phosphocreatine","5–8 s","Rapidly rebuilds ATP; more total energy than the ATP pool"],
 ["Glycolysis","~1 minute","Burns glucose/glycogen anaerobically"],
 ["Oxidative metabolism","Minutes → hours","Mitochondrial electron transport chain — needs oxygen delivery"]],[30,22,48]));
k.push(tnote("Why you can't hold a wall squat forever: a sustained isometric contraction (1) burns through local muscle glycogen and (2) clamps down its own blood flow, cutting off the oxygen and glucose that glycolysis and oxidative metabolism need. Fatigue is built into the mechanics."));

k.push(h1("4. Mechanical behavior of a fiber"));
k.push(bullet("**Length–tension:** muscle generates the most force at mid-range (\"the sweet spot,\" ~90° for a biceps curl) where actin–myosin overlap is optimal; too shortened or too lengthened and cross-bridge interaction drops. (TI 1 builds on this.)"));
k.push(bullet("**Load–velocity:** light loads move fast; heavy loads move slowly, because recruiting and coordinating the larger fiber pools takes time. These curves describe single parallel fibers — whole muscles with their many architectures (pennate, fusiform…) get more complicated."));

k.push(h1("5. Fiber types and recruitment"));
k.push(compare("TYPE I — SLOW TWITCH","TYPE II — FAST TWITCH",
 ["Small motor neurons, recruited FIRST (low threshold)",
  "Mitochondria-rich → aerobic/oxidative, **fatigue-resistant**",
  "Slow to contract and relax; limited rapid-force ability",
  "Jobs: posture, endurance — sitting tall, the long slow run",
  "Trained by higher-rep work (~12–20 RM range)"],
 ["Large motor neurons, recruited as force demands climb",
  "Fewer mitochondria → glycolytic, **fatigable**",
  "**IIa = the middleman** (more capillaries, some aerobic capacity) • **IIx = pure fast**",
  "Jobs: strength and power — sprints, Olympic lifts",
  "Trained by heavy work (~1–5 RM) • mixed 6–10 RM hits both"],
 C.blue,C.red,C.lightBlue,C.lightRed));
k.push(bullet("**Strength vs power:** strength = force you can generate; power = work/time (work = force × displacement) — power has a **velocity** component. Most muscles (e.g., quadriceps) carry a task-matched mix of fiber types, and that mix is **mostly hereditary** — training shifts maybe 10–20%."));
k.push(tip("Exercise-prescription takeaway the lecture hammers: \"2 sets of 10 for everything\" ignores all of this. Ask what the patient needs — endurance, strength, or power — and dose the rep range to the fiber population you're trying to change."));

k.push(h1("6. Adaptation: how muscles actually get stronger"));
k.push(bullet("**Weeks 0–~6: neural gains.** Better agonist recruitment, faster firing rates, better synchronization, less inhibition — stronger without bigger. This is why PT strength goals are written at 6–8 weeks."));
k.push(bullet("**~6 weeks on: hypertrophy.** Fiber cross-sectional area grows via more actin + myosin per fiber, increased muscle protein synthesis (titin, nebulin), and new sarcomeres added in series (muscles can get longer, too). True **hyperplasia** (new fibers) is rare."));
k.push(bullet("**Exercise-induced muscle damage (EIMD)** is part of the stimulus: micro-damage triggers hormonal (growth hormone, AMPK), immune/inflammatory, and metabolic responses that rebuild the tissue stronger."));
k.push(bullet("**Atrophy** is the mirror image: with disuse (sling, bed rest, desk life), degradation of contractile proteins outruns replacement and mass drains away."));

/* ─────────────────────────── 8.2 CONNECTIVE TISSUE ─────────────────────────── */
k.push(pageBreak());
k.push(banner("TOPIC 8.2","Connective Tissue — Bone and Joint"));
k.push(spacer());

k.push(h1("7. Bone: function, development, remodeling"));
k.push(bullet("**Functions:** structure and levers for movement; storage of calcium, phosphate, sodium, magnesium; **hematopoiesis** in the marrow."));
k.push(bullet("**Development:** most long bones grow by **endochondral ossification** (the hyaline-cartilage model) — osteoblasts convert the cartilage template to periosteum and spongy bone while osteoclasts hollow the medullary cavity; growth continues at the **epiphyseal plate**, where chondrocytes age, degenerate, and are replaced by new bone. (Skull bones use intramembranous ossification instead.)"));
k.push(detail(["Development problem","What it is","Management"],[
 ["Traction apophysitis (e.g., Osgood-Schlatter at the tibial tubercle)","Repetitive tendon traction inflames the **apophysis** (the tendon-bone growth attachment) in growing athletes — also seen at the calcaneus and inferior patellar pole","Relative rest / activity modification"],
 ["Salter-Harris fracture","Traumatic fracture **through the physis** (growth plate), staged by pattern","Usually immobilization; complex patterns can disturb later growth"],
 ["Avascular necrosis (osteonecrosis)","Blood supply to growing bone is cut off — idiopathic, trauma, metabolic disease, or corticosteroid use — and the bone tissue dies; painful weight-bearing","Often watch-and-wait for revascularization; severe cases → surgery, possibly joint replacement years later"]],[26,44,30]));
k.push(bullet("**Remodeling** answers three inputs: **mechanical stress** (load builds bone, inactivity wastes it), **blood calcium/phosphate** needs, and **hormones** — PTH pulls calcium OUT of bone, calcitonin deposits it back IN, and vitamin D assists."));
k.push(bullet("**Aging:** peak density in the **late 20s–30s**; menopause (40s–50s) drops estrogen and accelerates calcium loss → osteopenia → osteoporosis → **insufficiency fracture** (normal stress breaking abnormally weak bone)."));
k.push(detail(["Fracture type","Mechanism"],[
 ["Traumatic","One-time load beyond the bone's capacity"],
 ["Stress","Repeated micro-trauma — much subtler on imaging"],
 ["Insufficiency","Normal stress on demineralized bone (osteoporosis, post-radiation)"],
 ["Pathologic","Bone weakened by disease — e.g., neoplastic/metastatic lesions"]],[26,74]));
k.push(bullet("**Healing** runs the standard phases — hematoma/inflammation → reparation (callus) → remodeling/ossification — and slows with age: children **4–6 weeks**, adolescents **6–8**, adults **10–18**."));

k.push(h1("8. Ligaments"));
k.push(body("**Dense regular connective tissue** (parallel fibers), attaching **bone to bone** to stabilize joints — versus tendons, which attach muscle to bone to move them. Fibroblasts synthesize mostly **type I collagen**, with elastic fibers adding a little accommodating stretch. Sprains are graded 1–3 by damage extent; healing follows hemorrhage → inflammation → proliferation → remodeling, but the repaired tissue often comes back as **fibrotic scar** with less integrity than the original."));
k.push(tnote("Two clinical judgment calls the lecture flags: (1) immobilization has a sweet spot — too much movement too early and the ligament never regains integrity, too little and it heals weak and lax; (2) LOCATION rules prognosis — extra-articular ligaments (MCL, ATFL) heal well, intra-articular ones (ACL) mostly don't, which is why ACL tears get reconstructed."));

k.push(h1("9. Cartilage — three types, two problem children"));
k.push(detail(["Type","Where","Character"],[
 ["Elastic","Ear, epiglottis, trachea","Springy, shape-holding"],
 ["Fibrocartilage","Menisci, vertebral discs","Dense IRREGULAR tissue (fibers crisscross) built for cushioning axial load — but shear/twisting forces tear it. Meniscal healing depends on the red → pink → white vascularity zones"],
 ["Hyaline (articular)","Joint surfaces","Mostly water, ultra-slick; chondrocytes maintain the matrix. **Aneural** (you don't feel damage until it reaches bone) and **avascular** (it barely heals — and what does heal comes back as rougher fibrocartilage)"]],[16,26,58]));

k.push(h1("10. Arthritis: OA vs RA"));
k.push(compare("OSTEOARTHRITIS (degenerative)","RHEUMATOID ARTHRITIS (systemic)",
 ["The most common MSK disorder worldwide; weight-bearing joints (hips, knees) + hands",
  "Slow progressive loss of articular cartilage with bony overgrowth (osteophytes), hypertrophic changes, bony end-feel",
  "By age 60, ~**80%** have it — but only ~**15%** are symptomatic",
  "Risk factors: previous injury, biomechanics/alignment, obesity, hypermobility",
  "Treatment ladder: weight loss, diet + exercise, anti-inflammatory meds, injections (cortisone, viscosupplementation), then surgery/replacement"],
 ["Chronic **systemic inflammatory** disease — immune cells infiltrate and attack the **synovium**",
  "Progresses in stages: soft-tissue swelling → bony erosion → obliterated joint space (hands are the classic site)",
  "~1–2% of US adults; **3× more common in women**; genetic component",
  "Because it's autoimmune, treatment is primarily **medication** — anti-inflammatories and immunosuppressants",
  "PT role centers on function and joint protection, not fixing the immune process"],
 C.teal,C.blue,C.lightTeal,C.lightBlue));

/* ─────────────────────────── 8.3 PATHOPHYS & AGING ─────────────────────────── */
k.push(pageBreak());
k.push(banner("TOPIC 8.3","Muscle Pathophysiology & Aging"));
k.push(spacer());

k.push(h1("11. Sarcopenia"));
k.push(body("**Age-related loss of muscle mass AND strength** (sarco = flesh, penia = deficiency) — distinct from simple disuse atrophy. Mechanisms: reduced myofiber regeneration, outright fiber loss with **preferential loss of type II (power) fibers**, shrinkage of surviving fibers, delayed excitation–contraction coupling, plus metabolic (glucose handling), endocrine (falling testosterone/growth hormone), nutritional, activity, and inflammatory (free-radical) contributions. Collagen and fatty infiltration also stiffen aging muscle and cost flexibility."));
k.push(infoBox("Exercise is medicine — the counterpunch",[
 "Multiset resistance training, ~10–15 reps, **2–3×/week** produces real strength gains and measurable cross-sectional-area growth in older adults",
 "Bonus effects: better flexibility and improved glucose utilization (a gift for patients with diabetes)",
 "The instructor's editorial: PTs habitually UNDER-prescribe for older adults — they can usually handle more than we give them credit for, as long as progression is sensible (aged tissue is easier to damage)"],C.green,C.lightGreen));

k.push(h1("12. Musculotendinous injury"));
k.push(detail(["Injury","What happens","Management logic"],[
 ["Contusion","Direct impact → swelling/effusion; rare calcification within the muscle","Standard soft-tissue care"],
 ["Strain (muscle or musculotendinous junction)","Traction/overexertion injury — think sprinter's hamstring; graded 1–3","Muscle regenerates: hemostasis → inflammation → debridement → myofibril regeneration/remodeling. Ice/NSAIDs early, then the same sweet-spot rule as ligaments: too much activity re-tears, too much immobilization atrophies"],
 ["Tendinopathy","**Tendinitis** = acute inflammatory response. **Tendinosis** = chronic DEGENERATIVE collagen change with no active inflammation (most chronic \"tendinitis\" is really this)","Acute: relative rest ± anti-inflammatories. Degenerative: the opposite — **progressive loading (especially eccentric)** and soft-tissue work to re-provoke a healing response"],
 ["Rhabdomyolysis","Extreme exertion breaks down skeletal muscle → myoglobin + creatine phosphokinase flood the blood; kidneys can't process it → dark urine, possible **acute renal failure** (statins raise risk)","Aggressive rehydration + electrolyte rebalancing; severe cases need dialysis"]],[18,44,38]));
k.push(bullet("A **tendon** itself is dense regular connective tissue (collagen bundles \"like uncooked ramen noodles\"), maintained by sparse tenoblasts/tenocytes — it attaches **muscle to bone** and transmits pull."));

k.push(h1("13. Genetic conditions"));
k.push(bullet("**Down syndrome (trisomy 21)** — three copies of chromosome 21. MSK signature: **hypotonia + soft-tissue laxity** → joint instability, dislocations, scoliosis risk. PT implications: joint mobilizations/manipulations are generally **off the table**; focus on function. Incidence climbs steeply with maternal age (40s)."));
k.push(bullet("**Muscular dystrophy** — six major inherited, progressive neuromuscular disorders with ongoing muscle wasting, often surfacing by ~age 10. The double bind: aggressive strengthening can overload tissue that can't rebuild, but prolonged rest produces unrecoverable atrophy — dosing is everything. (Neuromuscular courses go deeper.)"));

/* ─────────────────────────── SYNC SCENARIOS ─────────────────────────── */
k.push(pageBreak());
k.push(banner("SYNC SESSION","The Three Scenarios, Worked"));
k.push(spacer());

k.push(h1("Scenario 1 — 73-year-old with osteoporosis who wants to get \"stronger\""));
k.push(bullet("**Sarcopenia** = age-related loss of muscle mass + strength (preferential type II loss). Treatment: progressive resistance training (10–15 reps, multiset, 2–3×/wk), protein/nutrition support, and staying active."));
k.push(bullet("**Week 2 vs week 6:** early gains are **neural** (recruitment, firing rate, synchronization, disinhibition); real **hypertrophy** (more actin/myosin, protein synthesis, added sarcomeres) doesn't dominate until ~6+ weeks."));
k.push(bullet("**Bone remodeling** is load- hormone- and mineral-driven (PTH out, calcitonin in, vitamin D assisting). In **osteoporosis** resorption outpaces formation — worsened by post-menopausal estrogen loss — leaving porous, fragile bone."));
k.push(bullet("**Consequences:** insufficiency fractures (hip, vertebrae, wrist) from normal loads. **Treatments:** load-bearing + resistance exercise, calcium/vitamin D, anti-resorptive medications, fall-risk reduction — chair-rise and floor-transfer training doubles as both goal and therapy for this patient."));

k.push(h1("Scenario 2 — 20-year-old sprinter, proximal hamstring strain at the MT junction"));
k.push(bullet("**Fiber type:** a 100/200 m sprinter leans on **type IIx** (and IIa) — large, fast, glycolytic, fatigable — versus small, aerobic, fatigue-resistant type I."));
k.push(bullet("**Strain vs sprain:** strain = **muscle/tendon** (contractile tissue + its dense regular tendon); sprain = **ligament** (bone-to-bone dense regular CT). Different tissue, same grading 1–3."));
k.push(bullet("**Tendon structure:** parallel type-I collagen bundles with sparse tenocytes — unlike bone (mineralized, vascular, remodeling), muscle (contractile, well-vascularized, regenerates), or ligament (same fabric as tendon but anchoring bone to bone)."));
k.push(bullet("**What does he need? Power.** Strength = max force; power = work/time (force × velocity); endurance = repeated submaximal output. Late-stage rehab dosing: strength = heavy/low-rep (1–5 RM), power = moderate load moved FAST with full recovery, endurance = lighter/high-rep — a sprinter finishes with heavy strength work plus high-velocity power work."));

k.push(h1("Scenario 3 — 68-year-old with bilateral knee OA"));
k.push(bullet("**OA vs RA:** OA = degenerative cartilage loss with osteophytes, local and mechanical; RA = systemic autoimmune synovitis, staged erosion, hand-predominant, 3× female. Other arthritides exist (psoriatic, gout, septic…)."));
k.push(bullet("**Risk factors — modifiable:** obesity, biomechanics/muscle control, activity load. **Non-modifiable:** age, previous joint injury, genetics, hypermobility."));
k.push(bullet("**Femoral condyle cartilage = hyaline (articular):** water-rich, slick, aneural, avascular — unlike elastic cartilage (ear/epiglottis) or the tough, irregular, shear-sensitive fibrocartilage of the menisci."));
k.push(bullet("**Treatments:** weight loss + exercise first (the evidence-backed core), NSAIDs, injections (corticosteroid, viscosupplementation), and joint replacement as the last resort."));

k.push(...glossary("Module 8 — Quick-Reference Glossary",[
 ["Sarcoplasmic reticulum","The muscle fiber's calcium bank — releases Ca²⁺ on excitation, repumps it for relaxation"],
 ["Troponin–tropomyosin","The actin gatekeepers; calcium binding moves them off the active sites"],
 ["Power stroke","ATP-driven myosin head pivot that slides actin"],
 ["Type IIa","The hybrid fast-twitch fiber — glycolytic speed with extra aerobic capacity"],
 ["Neural phase","First ~6 weeks of strength gain — recruitment, not size"],
 ["Endochondral ossification","Long-bone growth through a hyaline cartilage template"],
 ["Apophysitis","Inflamed tendon-bone growth attachment (Osgood-Schlatter)"],
 ["Insufficiency fracture","Normal load, abnormally weak (osteoporotic) bone"],
 ["Tendinosis","Degenerative, non-inflammatory tendon change — treated with loading, not rest"],
 ["Rhabdomyolysis","Exertional muscle breakdown → myoglobin → renal risk"],
 ["Sarcopenia","Age-related muscle mass + strength loss, hitting type II fibers hardest"]]));

build(k,"/home/claude/out/Module8_Musculoskeletal_StudyNotes.docx");
