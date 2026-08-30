const L = require('/home/claude/notes_lib.js');
const {C,h1,h2,body,bullet,tnote,tip,compare,detail,infoBox,banner,glossary,fig,pageBreak,spacer,cover,build,linkBox} = L;
const k=[];

k.push(...cover("Musculoskeletal Practice I (DPTH 6412)","Module 4: MCI Rehab, Lumbar Surgery, and the SI Joint",
 "Topic 1: Rehab for Movement Coordination Impairments • Topic 2: Surgical Procedures & Post-Op Rehab • Topic 3: Sacroiliac Joint • Dr. Barrett + guest biomechanics lecture",
 ["Watch the lectures in your own Canvas module — these notes condense them, they don't replace them",
  "★ Learn the activation → acquisition → assimilation ladder cold — it structures every MCI plan of care",
  "The SI joint section is deliberately two-sided: know the tests AND the evidence fight about what they mean"]));

/* ─────────────── TOPIC 1 ─────────────── */
k.push(banner("TOPIC 1","Rehab for Movement Coordination Impairments"));
k.push(spacer());
k.push(h1("1. The Movement-Control Schema: Local Mobility + Global Stability"));
k.push(bullet("Every MCI plan sits on six boxes (always inside the patient's biobehavioral + socio-occupational context). **Local mobility** = adequate **neural** (slump/SLR/femoral tension → sliders/tensioners), **joint** (hip, innominate, lumbar — a 'bad squat' is often just missing hip flexion), and **soft-tissue** mobility (hamstrings, iliopsoas, rectus femoris, QL — a wobbling pelvis in a split squat may be fighting iliopsoas length, not instability). **You cannot stabilize a range you cannot reach** — mobility first. **Global stability** = the three-phase progression below."));
k.push(detail(["Phase","Exam findings → treatment"],[
 ["**Activation**","Poor ability to activate TrA/multifidus (± abnormal breathing) → train activation largely in ISOLATION, benign positions: supine bracing + limb movements, bent-knee fallout (watch pelvic rotation; respect true joint end-range — cue to THEIR end range if it's bony), quadruped weight shifts + activation. High motor control demand, low strength demand"],
 ["**Acquisition**","Can't DISSOCIATE thoracolumbar/lumbopelvic/hip movement (failed active SLR, active hip abduction) → train dissociation: dead bug (opposite arm+leg), straight-leg lowering (longer moment arm), loaded side plank with hip ER/abduction, corrective bridge with shoulder extension, banded bird-dog. Stable trunk, moving limbs, growing loads"],
 ["**Assimilation**","Poor control under DYNAMIC multiplanar load (FMS squat, hurdle step, rotary stability) → load real movement: monster walks, assisted/front squat, deadlift, half-kneeling chop + lift, single-leg deadlift, walking lunge + rotation, Turkish get-up, ball rotation throws, plank weight drags. Strength + endurance now lead; motor control rides along"]],[2400,6960]));
k.push(tnote("Restraint is the skill: patients (and gyms) want the flashy assimilation exercises immediately, but complexity ≠ benefit. Foundation first — and remember new motor skills need SEVERAL THOUSAND repetitions (the forest-trail → dirt-road → highway neural-pathway story), so keep intensity low enough to allow massive repetition when motor skill is the target."));
k.push(bullet("**The continuum**: symptom modulation → (bridge: mobility) → movement control (activation → acquisition → assimilation) → (bridge: endurance) → functional optimization (sport/occupation-specific). Discharge can legitimately happen at ANY stage — the grandkids-to-the-zoo patient may not need a weighted Turkish get-up; the patient's goals drive the depth. Applied to the two acute doorways: **sprain/strain** — gentle grade 1–2 sidelying rotation mobilizations in neutral (→ 3–4 or manipulation later), post-isometric relaxation, erector/hip soft tissue, hamstring + iliopsoas length; pain-limited exercise = diaphragmatic breathing, abdominal bracing, quadruped rock-back (nothing that radiates). **Instability-type** — same pain modulation + early lumbopelvic ACTIVATION for timely muscle recruitment; **mobilize the stiff segments above/below, never the hypermobile segment**; rotational mobility on a fixed pelvis (foam roll between knees + trunk rotation; quadruped rock-back rotation); flexion-provocation patients get extension-family homework, extension-provocation get posterior-tilt work (cat/cow bias, heel-sitting, quadruped with PPT cues), rotation-provocation patients control the pelvis while LIMBS supply rotation (standing hip flexion/extension → quadruped → prone knee flexion + prone hip rotation as exercise)."));
k.push(bullet("Evidence honesty: higher lumbar-instability-index scorers DO respond better to movement-coordination programs; low-load training ≈ (or beats) heavy strengthening depending on the target; but trunk-specific training is NOT superior to general exercise for chronic LBP overall — something beats nothing, so win the buy-in. The stabilization-classification factors (Module 2's 3-of-4 rule + favoring/against lists) still pick your best responders."));

k.push(pageBreak());
/* ─────────────── TOPIC 2 ─────────────── */
k.push(banner("TOPIC 2","Lumbar Surgical Procedures & Post-Op Rehabilitation"));
k.push(spacer());
k.push(h1("1. Decompression: Discectomy + Laminectomy"));
k.push(bullet("Decompression = for herniation or stenosis compressing neural tissue: leg pain/neuro symptoms > back pain, low disc height, NO instability/spondylolisthesis, and **failed ≥6 weeks of conservative care**. Relative contraindications: smoking, uncontrolled diabetes/HTN/hyperlipidemia/psychiatric disease, discogenic pain without radiculopathy, infection. **Discectomy** (the most common US spine surgery; unilateral radiculopathy, severe/worsening motor deficits): classic (midline + partial laminectomy) vs **microdiscectomy** (less bone, less invasive — erector spinae retracted not cut, ligamentum flavum opened, nerve root retracted, ONLY the herniated fragment removed → leg pain relief is often immediate; weakness/numbness heal over weeks-months) vs percutaneous (fluoroscopy-guided). **Laminectomy** (stenosis): lamina + spinous process removed, facets undercut — 85–90% success for neurogenic claudication; fun palpation fact: no spinous process afterward."));
k.push(tnote("The counseling gold: herniated discs REGRESS SPONTANEOUSLY — sequestered 96%, extruded 70%, protruded 41%, bulging 13% (systematic review) — mostly within a year, starting as early as 2–3 months. The WORSE it looks on imaging, the MORE likely it resolves (though regression ≠ clinical outcome). Tell your patients."));
k.push(h1("2. Fusion (and the Disc Replacement Alternative)"));
k.push(bullet("**Fusion** = true instability, bone loss (infection/tumor), scoliosis, spondylolisthesis, or far-progressed degeneration — after **6–12 months** of failed conservative care, with the disc space confirmed as the pain generator. The sober math: chronic-LBP outcomes ≈ conservative care; healing takes 3–6 (up to 18) months; fused segments permanently shift stress to neighbors → **adjacent-segment degeneration**; infection + surgical risk. Negative predictors: smoking (**nicotine is a bone toxin — it handicaps osteoblasts in the osteoblast-vs-osteoclast race that IS fusion**; the one modifiable factor worth the soapbox), obesity, osteoporosis, chronic steroids, diabetes, prior fusion, malnutrition. Menu (read the surgeon's OP REPORT — request it, patterns emerge): **posterolateral fusion** (pedicle screws + rods + grafted gutters), **PLIF** (posterior interbody cage), **I-LIF** (interlaminar/spinous-process plates), **ALIF** (anterior abdominal approach — vessels + viscera retracted, so expect post-op GI/abdominal complaints), **TLIF** (off-midline transforaminal), **360°** (anterior + posterior combined). **Artificial disc replacement** (ProDisc-L style ball-and-socket, L3–S1 one level): needs 1–2 truly discogenic levels, NO significant facet disease or bony nerve compression, non-obese — preserves motion."));
k.push(h1("3. Post-Op Rehab ★"));
k.push(detail(["Element","Content"],[
 ["**Hospital + early rules**","LOS: discectomy/laminectomy 0–3 days (usually ~0), fusion 3–7. Ambulate + UE/LE ROM in hospital; bracing = surgeon preference (evidence: 50 open discectomies with NO restrictions → faster return to work, no extra complications — but braces don't physically prevent bad motion anyway). Outpatient: aerobic conditioning + active ROM + strengthening, **NO passive ROM at the operated level ×3 months**; shower when the wound seals; **no heavy lifting/exercise ×3 months**"],
 ["**The BLT rule**","**No Bending, Lifting (>10 lb), or Twisting for 6 weeks** — no kids, boxes, laundry baskets; >10 lb waits until ~12 weeks. Avoid prolonged sitting (protect lordosis + wound healing)"],
 ["**Red flags**","CHANGE in neuro findings (post-op flare ≠ new deficits) · worsening pain · bowel/bladder change · fever · wound drainage — spinal infection strikes the healthiest patients too (the two-weeks-out 'spewing fountain' story → emergency washout + IV antibiotics); you may be the one who sees it first"],
 ["**Discectomy phases**","P1 (0–2 wk): pain/swelling, ROM, prevent neural adhesions, body mechanics; progress with healed wound, ADL-level pain control, posture, pain-free abdominal bracing → P2 (3–6 wk): preserve trunk strength, lumbar ROM, cardio; progress at 20 min aerobic (walking/elliptical — NOT the flexed-posture bike) → P3 (7–12 wk): functional sensorimotor training, trunk + LE strength → discharge: full functional pain-free ROM + an established WALKING/aerobic program (walking is the single best post-op behavior)"],
 ["**Fusion phases**","P1 (0–2 wk): pain/inflammation, protect the repair, brace independence, pain-free bed mobility → P2 (3–6 wk): neutral-spine training, TrA + multifidus activation, mechanics, aerobic base, hip flexibility (these patients arrive with MORE baseline dysfunction) → P3 (8–16 wk): automatic deep-core activation, dynamic stabilization progression, aerobic progression, work/sport simulation"]],[2500,6860]));

k.push(pageBreak());
/* ─────────────── TOPIC 3a: SIJ BIOMECHANICS ─────────────── */
k.push(banner("TOPIC 3","The Sacroiliac Joint — Biomechanics and the Evidence Debate"));
k.push(spacer());
k.push(h1("1. Anatomy and Kinematics"));
k.push(bullet("Triangular sacrum wedged between the innominates: apex (S5→coccyx), base/promontory (S1, facets to L5 = lumbosacral joint), ala with **auricular (ear-shaped) surfaces** forming the boomerang-shaped, RIGID SI joints. Functions: weight-bearing stress relief, load transfer spine↔pelvis↔legs, lumbopelvic-hip stability. Ligament suite: anterior SI + interosseous (front), iliolumbar + short/long posterior SI (back), sacrotuberous + sacrospinous (secondary but clinically busy). Real motion is tiny — **1–4° rotation, 1–2 mm translation** — more arthrokinematic than osteokinematic."));
k.push(compare("NUTATION — 'forward nod' ★","COUNTERNUTATION — 'backward nod'",
 ["Sacral base rotates ANTERIOR/inferior relative to the ilia",
  "**Closed-packed, most stable** position: maximal auricular congruence, sacrotuberous + interosseous ligaments taut, best load transfer",
  "Relative motions: pelvis in relative POSTERIOR tilt · L5-S1 in relative EXTENSION",
  "Weight-bearing drives it — **nutation torque**: body-weight vector tilts the sacrum forward while hip-compression tilts the pelvis back; erector spinae pull the sacrum on, the rectus abdominis + biceps femoris force couple posteriorly tilts the pelvis — articular + ligamentous + muscular stability in synergy"],
 ["Sacral base rotates POSTERIOR/superior",
  "**Loose-packed, least stable**; checked by the long posterior (dorsal) SI ligament",
  "Relative motions: pelvis in relative ANTERIOR tilt · L5-S1 in relative FLEXION",
  "Clinical relevance: the small motions relieve pelvic stress in gait/running and matter during childbirth; SIJ loading runs ~5× higher with a 1 cm leg-length difference (2012 model)"],
 C.blue,C.teal,C.lightBlue,C.lightTeal));
k.push(h1("2. The Mobility Controversy — Honest History"));
k.push(bullet("Hippocrates (377 BC): moves only in pregnancy → Diemerbroeck (1689): both sexes move → nutation described in the 1800s, revisited 1955 → mid-century: 'intermediate joint,' then 'no motion except pregnancy' → 50 years out of fashion → 1990s resurgence. Vleeming's synthesis: corrected studies agree on LIMITED motion; the sacrum moves, so the SIJ moves a little, and via L5-S1 that motion touches the lumbar chain. **Palpation-based mobility tests fail**: **Gillet/stork** — no radiographic correlation with hypomobility, terrible reliability, 16% false positives, actual motion 0.2–0.6° (Sturesson: you're watching pelvis-on-hips motion, an illusion); **standing flexion test** — same story. Both still EARN clinic time as motor-control/balance observations — just report them as that, never as 'your SI joint is stuck.'"));
k.push(tnote("The 2019 PTJ exchange, worth knowing verbatim-ish: perspective authors — SIJ movements are too small to assess manually; movement-dysfunction diagnosis isn't evidence-supported; clinicians should stop 'perpetuating implausible pathoanatomical diagnoses' ('your hips are out of alignment'). Cibulka's rebuttal — it's synovial, therefore it moves; 100 years of clinical relevance deserves a better lens. Authors' reply — point the lens at ourselves as manual therapists. Dr. Barrett's stated position: the joint barely moves, manual mobility assessment isn't feasible, and alignment narratives should go. Hold your view loosely and read deeply if you treat this population."));

k.push(pageBreak());
/* ─────────────── TOPIC 3b: SIJ EXAM + TREATMENT ─────────────── */
k.push(banner("TOPIC 3 (cont.)","SI Joint Dysfunction — Examination and Treatment"));
k.push(spacer());
k.push(h1("1. History and Referral"));
k.push(bullet("Mechanisms: fall onto one innominate, **pregnancy/childbirth**, gradual creep (arthritis, sustained asymmetric postures — the hip-cocked charting nurse), sport/work postures. History clues pointing pelvic rather than lumbar: **sharp pain turning in bed**, pain with walking, stairs, sit-to-stand, hopping/unilateral stance — anything shearing one innominate on the other (**lunges hurt more than squats**); +SLR near END-range; pain with extension + ipsilateral side-bend. Screen red flags (LE weakness, urinary), psychosocial factors, RA — and **ankylosing spondylitis in young men** (it starts at the SIJ). Innervation is a mess (anterior L2–S2 ± obturator/superior gluteal/lumbosacral trunk; posterior rami L5–S3) → referral chaos: 50 patients produced 18 patterns — **94% buttock**, 72% low lumbar, 50% LE, 28% distal-to-knee, 14% groin, 14% foot."));
k.push(h1("2. Examination ★"));
k.push(detail(["Test","Details"],[
 ["**Movement screens**","Pelvic tilt test (golf-posture anterior↔posterior tilt: clean both ways, no shudder) and pelvic rotation test ('rotate in a barrel' on a still torso; if failed, stabilize the shoulders and retest — easy now = stability problem, still failed = mobility problem). Also excellent MCI screens"],
 ["**Provocation cluster**","**Thigh thrust (P4)** — flexed hip, posterior force through the femur onto a sacral wedge · **distraction** — crossed-arm posterolateral force on both ASISs · **compression** — sidelying medial force · **sacral thrust** — prone PA at S3 (≤6 reps)"],
 ["**Laslett's rule**","2 of the 4 provocation tests positive → consider the SIJ; adding **Gaenslen's** (edge-of-table: flexed hip held while the hanging leg is pushed toward the floor) + sacral-sulcus palpation (medial to the PSIS): 3+ of 6 → SIJ pathology on the differential"],
 ["**2021 JOSPT reality check**","A POSITIVE cluster = only ~35% certainty the SIJ is the source (nerve-root pain fakes positives) — but a NEGATIVE cluster rules the SIJ out with **92% certainty**. And: **SIJ pain does not centralize** — if repeated movements centralize or peripheralize symptoms, call the SIJ tests false positives and think disc"]],[2700,6660]));
k.push(h1("3. Treatment — Form and Force Closure"));
k.push(compare("'HYPOMOBILE' presentation (pain when the joint is strained)","'HYPERMOBILE' presentation (pain with standing/walking)",
 ["Manual therapy: sidelying rotation mobilizations grade 3–4, sidelying anterior/posterior pelvic tilts, long-axis hip traction, muscle energy techniques, and the classic **supine SIJ manipulation** (leg crossed away, side-bend away + rotate toward to lock the lumbar spine, pressure on the ASIS, exhale, HVLA thrust inferolateral)",
  "**Isometric mobilizations (MET)**: resisted hip-flexor drive corrects a posteriorly rotated innominate while contralateral hip-extensor drive corrects an anterior one — 7-second holds ×3, finish with knee-squeeze 'pubis balancing'; home versions with self-resistance",
  "Practical rule: treat the SYMPTOMATIC side, guided by the pelvis's overall tilt from your movement screen rather than claimed rotational palpation"],
 ["Typical patient: younger women, pregnancy/postpartum, dancers, gymnasts",
  "Mobilization of the joint itself does little — **mobilize ABOVE and BELOW** instead, and build **force closure**: general lumbopelvic stabilization recruiting the inner unit + sling systems (posterior/anterior oblique, longitudinal, lateral)",
  "**Pelvic floor activation** is central (cue: stop urine midstream) · abdominal brace + pelvic floor + ball squeeze/banded abduction 3 s ×20 · **lat pulldown + glute bridge force-couple** 3 s ×20, later combined simultaneously",
  "**SI belt**: mixed evidence — stability + proprioception theory; worth a trial"],
 C.blue,C.teal,C.lightBlue,C.lightTeal));

k.push(pageBreak());
/* ─────────────── STUDY ─────────────── */
k.push(banner("MODULE 4","Reading Map and Glossary"));
k.push(spacer());
k.push(detail(["Topic","Source"],[
 ["MCI rehab","Common Interventions for MCI (2 parts) + MCI rehab handouts; PhysioU exercise videos hyperlinked in the decks"],
 ["Surgery","Lumbar Surgical Procedures handout + **Laminectomy/Discectomy Post-op Protocol** (module folder); PhysioU discectomy + fusion phase outlines"],
 ["SI joint","Clinical Biomechanics of the SIJ + Treatment of SIJ Dysfunction handouts + Sync 4 student copy (module folder)"],
 ["Assessment","Quiz 4"]],[2600,6760]));
k.push(spacer());
k.push(...glossary("Module 4 Quick-Reference Glossary",[
 ["Activation / acquisition / assimilation","Isolated recruitment → limb-trunk dissociation → loaded multiplanar function"],
 ["Local mobility / global stability","Neural + joint + soft-tissue range must precede the stability work that uses it"],
 ["Dead bug / bird-dog / bent-knee fallout","Signature acquisition-phase dissociation drills"],
 ["BLT rule","No Bending, Lifting (>10 lb), Twisting ×6 weeks post-op (>10 lb waits ~12 weeks)"],
 ["Microdiscectomy","Fragment-only removal via small midline window; leg pain relief often immediate"],
 ["Spontaneous disc regression","Sequestered 96% · extruded 70% · protruded 41% · bulge 13% — worse image, better odds"],
 ["Adjacent-segment degeneration","Accelerated wear above/below a fusion"],
 ["Nicotine + fusion","Bone toxin that hobbles osteoblasts — the top modifiable failure factor"],
 ["ALIF / PLIF / TLIF / I-LIF / 360°","Anterior · posterior interbody · transforaminal · interlaminar-plate · combined fusions"],
 ["Nutation / counternutation","Sacral forward/backward nod; nutation = closed-packed, stable, ligament-taut position"],
 ["Nutation torque","Body-weight + hip-compression vectors + erector/rectus-biceps force couples locking the SIJ in weight-bearing"],
 ["Gillet + standing flexion tests","Unreliable for SIJ mobility (0.2–0.6° real motion) — useful only as motor-control observations"],
 ["Thigh thrust / distraction / compression / sacral thrust","The four-provocation cluster (2+ positive → suspect SIJ)"],
 ["Gaenslen's test","Edge-of-table counter-rotation provocation — the cluster's fifth member"],
 ["Laslett's rule","2/4 provocation or 3/6 with Gaenslen's + sulcus palpation"],
 ["35% / 92% rule","Positive cluster confirms poorly; negative cluster rules OUT with 92% certainty"],
 ["Centralization veto","Symptoms that centralize are NOT SIJ — call the SIJ tests false positives"],
 ["Form vs force closure","Joint architecture vs muscular sling compression as SIJ stability sources"],
 ["Muscle energy technique","7-second resisted isometrics using hip muscles to 'rotate' the innominate + pubis-balancing squeeze"],
 ["SI belt","Mixed-evidence external stability/proprioception aid for the hypermobile presentation"]]));

build(k,"/home/claude/out/Module4_MCIRehabSurgerySIJoint_StudyNotes.docx");
