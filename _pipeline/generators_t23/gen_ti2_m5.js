const L = require('/home/claude/notes_lib.js');
const {C,h1,h2,body,bullet,tnote,tip,compare,detail,infoBox,banner,glossary,fig,pageBreak,spacer,cover,build,linkBox} = L;
const k=[];

k.push(...cover("Therapeutic Interventions II (DPTH 6241)","Module 5: Soft Tissue Injury Phases and Management",
 "Topic 5.1: MSK Disorders and Tissue Response to Injury • 5.2: Acute Stage (Phase I) • 5.3: Subacute Stage (Phase II) • 5.4: Chronic Stage (Phase III) • 5.5: Chronic and Recurring Pain (Phase IV)",
 ["Watch the lectures in your own Canvas module — these notes condense them, they don't replace them",
  "★ Two frameworks carry this entire module: the TEN intervention-planning questions, and the HIERARCHY pyramid (pain → mobility → stability → movement → endurance → strength → power)",
  "The course pivots here from physical agents to therapeutic exercise — same reasoning, bigger toolbox"]));

/* ─────────────── TOPIC 5.1 ─────────────── */
k.push(banner("TOPIC 5.1","Musculoskeletal Disorders and Tissue Response to Injury"));
k.push(spacer());
k.push(infoBox("Intervention, per the APTA Guide to Physical Therapist Practice",["“The purposeful and skilled interaction of the physical therapist and the patient/client — and when appropriate, with other individuals involved in care — using various physical therapy procedures and techniques to produce changes in the condition consistent with the diagnosis and prognosis.” In practice: you choose interventions from the patient's **functional needs and mutually agreed goals**."],C.gold,C.lightGold));
k.push(h1("1. Soft Tissue Lesions — the Vocabulary List ★"));
k.push(detail(["Lesion","Definition"],[
 ["**Sprain**","Severe stress, stretch, or tear of soft tissue — capsule, ligament, tendon, or muscle; usually used specifically for **ligament**. Graded 1st (mild), 2nd (moderate), 3rd (severe)"],
 ["**Dislocation / subluxation**","Displacement of the bony partners with loss of anatomical relationship → soft tissue damage, inflammation, pain, spasm / an **incomplete or partial** dislocation, often with secondary soft tissue trauma"],
 ["**Muscle-tendon rupture or tear**","**Partial** → pain at the breach when the muscle is stretched or contracts against resistance. **Complete** → the muscle no longer pulls against the injury, so **stretch and contraction do NOT cause pain** — a quiet finding that must not be mistaken for recovery"],
 ["**Tendinopathy family**","**Tenosynovitis** = inflammation of the synovial membrane covering a tendon · **tendinitis** = inflammation of a tendon (may scar or calcify) · **tenovaginitis** = inflammation with **thickening of the tendon sheath** · **tendinosis** = **degeneration** from repetitive microtrauma"],
 ["**Synovitis**","Inflammation of the synovial membrane with excess synovial fluid in a joint or tendon sheath, from trauma or disease"],
 ["**Ganglion**","Ballooning of a joint capsule or tendon sheath wall, often post-trauma; also seen with rheumatoid arthritis"],
 ["**Bursitis / contusion**","Inflammation of a bursa / bruising from a direct blow → capillary rupture, bleeding, edema, inflammatory response"],
 ["**Overuse syndromes**","Cumulative trauma and repetitive strain: repeated submaximal overload and/or frictional wear → inflammation and pain"]],[2400,6960]));
k.push(h1("2. Clinical Conditions Resulting from Trauma or Pathology"));
k.push(detail(["Condition","What it means"],[
 ["**Dysfunction**","Loss of normal function of a tissue or region — from adaptive shortening, adhesions, weakness, or any loss of normal mobility"],
 ["**Joint dysfunction**","Mechanical loss of normal **joint play** in synovial joints. Precipitants: trauma, immobilization, disuse, aging, pathology (e.g. RA)"],
 ["**Contracture**","**Adaptive shortening** of skin, fascia, muscle, or joint capsule preventing normal mobility — largely preventable, which is the point"],
 ["**Adhesions**","Abnormal adherence of collagen fibers to surrounding structures during immobilization — post-trauma or post-surgical; restricts elasticity and gliding"],
 ["**Reflex muscle guarding**","Prolonged contraction in response to a painful stimulus; the muscle **functionally splints** the injured tissue. The pain source may be nearby, underlying, or referred"],
 ["**Intrinsic muscle spasm**","Prolonged contraction driven by **local circulatory and metabolic change** from sustained contraction — it becomes **self-perpetuating whether or not the original lesion is still irritable**. Also triggered by viral infection, cold, immobilization, emotional tension, or direct trauma"],
 ["**Muscle weakness**","Decreased contraction strength from systemic, chemical, or local nerve lesion (CNS, PNS, or myoneural junction), direct muscle insult, or plain inactivity"],
 ["**Myofascial compartment syndrome**","Increased interstitial pressure in a closed, non-expanding compartment → compromised vessels, muscles, nerves → ischemia and **irreversible muscle loss without intervention**. Causes: fracture, repetitive trauma, crush injury, skeletal traction, restrictive wraps or casts. **Limb- and life-threatening — this is a referral, not a treatment**"]],[2400,6960]));
k.push(tip("The pain–spasm–pain cycle is the loop to break: reflex muscle contraction → restricted movement → circulatory stasis → increased pain → more spasm → more restriction. Every acute-stage intervention in this module is aimed somewhere on that circle."));
k.push(h1("3. Grading Severity — applies to ALL soft tissue, not just ligament"));
k.push(detail(["Grade","Findings"],[
 ["**1st degree (mild)**","Mild pain at the time of injury or **within the first 24 hours**; mild swelling, local tenderness, pain when the tissue is stressed"],
 ["**2nd degree (moderate)**","Moderate pain **requiring the activity to stop**; stress and palpation markedly increase pain; **some ligament fibers torn → increased joint mobility**"],
 ["**3rd degree (severe)**","Near-complete or complete tear/avulsion. **Near-complete = severe pain; COMPLETE tear = stress to the tissue is usually PAINLESS** and palpation may be what reveals the defect. A torn ligament means joint instability"]],[2400,6960]));

k.push(pageBreak());
/* ─────────────── THE FRAMEWORKS ─────────────── */
k.push(banner("THE TWO FRAMEWORKS","Choosing Interventions — Memorize These"));
k.push(spacer());
k.push(h1("1. Ten Key Questions for Intervention Planning ★"));
k.push(bullet("**What is the stage of healing** — acute, subacute, or chronic? · **How long do you have** to treat this patient? · **What does the patient do** for activities (ADLs, recreational, competitive)? · **How compliant is the patient**? · **How much skilled PT is needed** and at what frequency? · **What must be taught to prevent recurrence**? · **Are referrals needed** (ortho, OT, others)? · **What has worked for similar patients** in your experience — remembering everyone is individual? · **Are there precautions**? · **What is YOUR skill level** — arguably the most important, because an intervention you're not competent in (say PNF) isn't an option today."));
k.push(h1("2. The Hierarchy of Interventions / Continuum of Treatment ★"));
k.push(infoBox("The pyramid, bottom to top",["**PAIN → MOBILITY → STABILITY → MOVEMENT → ENDURANCE → STRENGTH → POWER.** Impairments at the base get priority: mobility depends on how much pain there is, stability depends on mobility, and so on up. Treating out of order risks flare-up and injury. Each level lays the building blocks for the next."],C.green,C.lightGreen));
k.push(bullet("**The selection rules that follow from it**: you can't work on everything at once · **prioritize the qualities with immediate returns (pain, mobility)** · one intervention can address multiple qualities (ice treats pain AND edema; joint mobilization treats pain AND range) · time is at a premium, so **stack interventions within a session** for efficiency · and always advance intensity, complexity, and volume through a **logical progression**."));
k.push(h1("3. Stage Map"));
k.push(detail(["Stage","Timing · tissue response · clinical signs · goal"],[
 ["**ACUTE / inflammatory (Phase I)**","**Day 0–6** (inflammation can run 0 h to 2 weeks; hemostasis 0–8 h; peak 2–3 h). Vascular changes, clot formation, exudation of cells and chemicals, phagocytosis, neutralization of irritants — cleaning the wound site. **Pain BEFORE tissue resistance.** Goal: **MAXIMUM PROTECTION** + protected motion"],
 ["**SUBACUTE / proliferative (Phase II)**","**Days 4–22** (classically 14–21 from injury; usually lasts 10–17 days, but **up to 6 weeks or longer in poorly vascularized tissue like tendon**). Noxious stimuli removed, capillary beds grow in, collagen forms, **fragile granulation tissue**. Signs of inflammation progressively absent. **Pain SYNCHRONOUS with tissue resistance at end range.** Goal: **MODERATE PROTECTION → controlled, progressive loading**"],
 ["**CHRONIC / remodeling-maturation (Phase III)**","**Days 21–60+** — can run **6 months to a year** depending on tissue and damage. Connective tissue matures, scar contracts and remodels, **collagen aligns to applied stress**. **No signs of inflammation.** **STRETCH pain felt only at end range of tight structures.** Function limited by weakness, poor endurance, or poor neuromuscular control. Goal: **MINIMAL TO NO PROTECTION → functional and sensorimotor training**"],
 ["**CHRONIC / RECURRING PAIN (Phase IV)**","Not a timeline — a pattern. Chronic inflammation from overuse, cumulative trauma, repetitive strain, re-injury of old scar, contracture, or poor mobility"]],[2400,6960]));

k.push(pageBreak());
/* ─────────────── 5.2 ACUTE ─────────────── */
k.push(banner("TOPIC 5.2","Management During the Acute Stage — Phase I"));
k.push(spacer());
k.push(bullet("**The PT's three jobs**: patient education, protection of the injured tissue, and **prevention of the adverse effects of immobilization**."));
k.push(detail(["Job","Content"],[
 ["**Patient education**","Expected duration of symptoms (acute symptoms are usually short-lived, ~4–6 days); what they CAN do now; precautions and contraindications; what to expect as symptoms lessen. **Reassurance is treatment** — patients need to know what's safe"],
 ["**Protection**","**PRICE** — **P**rotection, **R**est, **I**ce, **C**ompression, **E**levation — for the first 24–48 hours. Rest via orthosis, sling, taping, or casting. Manual pain and edema control: **light effleurage massage and grade 1–2 joint oscillations**. Assistive devices for partial or non-weight-bearing in lower-extremity injury"],
 ["**Preventing immobilization effects**","**Complete continuous immobilization should be avoided whenever possible** — it causes developing fibrils to adhere to surrounding tissue, weakens connective tissue, and alters articular cartilage. Use **PROM within the limits of pain**, **isometric muscle setting**, **e-stim** for pain and muscle contraction, and maintain functional integrity where possible (AAROM, modified aerobic exercise, assistive devices)"]],[2400,6960]));
k.push(compare("PRECAUTION in the acute stage","CONTRAINDICATION in the acute stage",
 ["**Don't overdo it.** Too much causes further injury, more pain, and a bigger inflammatory response — the whole point right now is to let it settle."],
 ["**No stretching and no resistive exercise while inflammation and edema are present.** Any range gained here comes from decreased pain, swelling, and guarding — not from lengthening tissue."],
 C.blue,C.red,C.lightBlue,C.lightRed));
k.push(bullet("**The acute treatment menu**: PROM of the injured joint and the joints **above and below** · **grade 1–2 joint mobilizations** with distraction, gentle oscillation, and glides (improve fluid dynamics, maintain cartilage health, reflexively inhibit pain perception) · **isometric muscle setting** · **light effleurage** to move edema · and for associated areas, full ROM, resistance exercise, and functional activity. **Massage detail**: tendon lesions get gentle **transverse** friction with the tendon held **taut**; muscle lesions are treated with the muscle in a **SHORTENED** position so the healing breach isn't separated."));
k.push(tnote("Case — Joseph, 17, recreational snowboarder, fell backward onto his right wrist and kept riding four more hours. Priorities in order: educate (what he can do, how long it takes, how to protect it) → PRICE with a wrist brace or ACE wrap (protection AND compression in one) → ice 5–10 min on, 10 min off, 5–10 min on, then stop — because deeper tissues KEEP cooling for up to an hour after removal → gentle PROM progressing to AAROM using his uninvolved left hand at home. Heat is the wrong pick here: he's mid-inflammation. Ice is the efficient pick because it buys analgesia AND edema control at once."));

k.push(pageBreak());
/* ─────────────── 5.3 SUBACUTE ─────────────── */
k.push(banner("TOPIC 5.3","Management During the Subacute Stage — Phase II"));
k.push(spacer());
k.push(bullet("**How you know they've arrived**: days from injury (≈14–21) **and** a change in the pain-resistance relationship — **pain now comes synchronously with tissue resistance at the end of available range**, and only when new or tight tissue is stressed beyond tolerance. Muscles test weak; function is limited by the weakened tissue."));
k.push(infoBox("The central judgment of this phase",["The patient feels much better because pain is **no longer constant** — and that is exactly the trap. It is easy to do **too much too soon**, and equally easy to stay so cautious you never progress. **Non-destructive exercise** — within the tolerance of healing tissue, so it heals without re-injury or renewed inflammation — is the standard to hold every choice against."],C.gold,C.lightGold));
k.push(detail(["Element","How to run it"],[
 ["**Moderate protection**","Assistive device, orthosis, tape, or ACE wrap for compression and stability; **progressively increase the time the joint is free to move each day** and wean the device as supporting muscle strengthens"],
 ["**Patient education**","Healing time frame; **the signs that they've pushed past tissue tolerance**; return to normal activities that don't exacerbate symptoms while avoiding sport or work that would set healing back; a home program; and adaptation of work and recreation so the patient becomes an active participant"],
 ["**When to start active work**","Only once **swelling is decreasing, pain is no longer constant, and pain isn't provoked by motion within the available range**"],
 ["**Multi-angle submaximal isometrics**","The early-subacute starting point: initiate control and strengthening non-stressfully, and help the patient re-learn which muscle to use. **Place an injured healing muscle in its SHORTENED/relaxed position** so the new scar isn't pulled; for joint pathology use the **resting position**. Intensity always **below the perception of pain**"],
 ["**Active ROM and light resistance**","Pain-free ranges, **isolated single-plane motions** first, controlled light concentric work of the involved muscle and the muscles needed for proper joint mechanics. Diagonal patterns (PNF) can facilitate the target — but avoid patterns dominated by stronger muscles that let the weak ones coast"],
 ["**Muscular endurance**","**Emphasized in this phase** because **slow-twitch fibers atrophy first** with joint swelling, trauma, or immobilization: low intensity, high repetition, light resistance, correct movement patterns without substitution, and stop at fatigue or symptoms"],
 ["**Protected weight bearing**","Graded loading — for Joseph, leaning on a table, then wall push-ups"],
 ["**Stretching sequence**","**Warm the tissue** (modalities or AROM) → **relax the muscle** (hold-relax) → **joint mobilization first if joint play is the restriction** (grade 3 sustained or grade 3–4 oscillations to restore the slide before physiological stretch, minimizing compression of vulnerable cartilage) → then passive, self, or prolonged mechanical stretching for inert tissue"]],[2400,6960]));
k.push(tip("SIGNS OF OVERDOING IT — the precaution list to hand the patient and watch for yourself: soreness that does NOT decrease after 4 hours or resolve within 24 hours · pain that arrives earlier or is worse than the previous session · progressively increasing stiffness or DECREASING range over several sessions · swelling, redness, or warmth in healing tissue (all of which should be decreasing now) · progressive WEAKNESS over several sessions · decreased functional use of the involved part. Any of these means modify the exercise or the intensity. Increasing inflammation plus progressively decreasing range is how CHRONIC inflammation announces itself."));
k.push(bullet("**Joseph, week 2 day 1**: moderate edema, tender over the anatomical snuffbox (worth a scaphoid-fracture thought), 3/10 at rest, grossly 3/5 with pain, wrist flexion 70° / extension 60° / radial deviation 5° / ulnar deviation 20° / pronation 80° / supination 80° — all painful. Session: **UBE warm-up** for tissue temperature and blood flow → **grade 1–2 palmar and dorsal glides for pain, grade 3–4 if the goal is range** → effleurage for edema → AROM wrist circles → **four-way isometric muscle setting** (flexion, extension, pronation, supination) → prayer-position stretches → ice and e-stim for pain and edema."));

k.push(pageBreak());
/* ─────────────── 5.4 + 5.5 ─────────────── */
k.push(banner("TOPICS 5.4 & 5.5","Chronic Stage (Phase III) and Chronic/Recurring Pain (Phase IV)"));
k.push(spacer());
k.push(h1("Phase III — Chronic / Remodeling"));
k.push(detail(["Domain","Progression rules"],[
 ["**Patient education**","Support compliance; **teach how to avoid re-injury** and safe body mechanics (for Joseph: how to fall, and maybe snowboarding lessons); ergonomic counseling for work or school; tissue-specific self-stretching; **explicit criteria for what must be attained to safely return** to sport or work; re-examine and modify as they progress"],
 ["**Exercise progression**","**Submaximal → maximal resistance** · specificity (concentric AND eccentric, weight-bearing AND non-weight-bearing) · **single-plane → multi-plane** (PNF earns its place here) · simple → complex, total-body, functionally simulating movements · **proximal stability with superimposed distal motion** · low reps → high reps at slow speeds for endurance, then progress speed and time"],
 ["**Stretching**","Specific to the restricting contracture or adhesion: joint mobilization, **myofascial massage**, PNF stretching, passive stretching — aimed at joint, tissue, and muscle mobility together"],
 ["**Muscle performance**","Progressive strengthening until muscles meet the demands placed on them; **isolated unidirectional simple movements → complex multidirectional patterns** requiring coordination; isolate a muscle when inhibition, weakness, or substitution is present; add eccentrics; progress trunk stabilization, postural control, and balance"],
 ["**Return to high demand**","Drills that **simulate the actual work or sport**, increasing repetitions and speed; **plyometrics, agility, skill development**; then progress by changing the environment and introducing **surprise and uncontrolled events**"]],[2400,6960]));
k.push(bullet("**Joseph, week 5**: minimal-to-no edema, full weight-bearing on the palm, doorknob pain-free, 1/10 at end range, grossly 4/5, flexion 85° / extension 80° / radial deviation 15° — pain only at end range with overpressure. The impairment that now stands out is **residual weakness**, not pain or swelling — so he moves up the pyramid to endurance, strength, and neuromuscular work: warm-up, **grade 3–4 palmar/dorsal glides with end-range oscillations**, four-way wrist strengthening, grip work, and proprioceptive loading on a ball or BOSU."));
k.push(h1("Phase IV — Chronic and Recurring Pain"));
k.push(bullet("**The management focus is 'back to the drawing board'**: rest the part as appropriate, use modalities as appropriate, and above all **identify and MODIFY the mechanism of chronic irritation** — often biomechanical counseling about a substitution or a misuse pattern. This requires patient cooperation: everything you fix in the clinic is undone if the irritant continues at home. Explain how tissue reacts and breaks down under continued inflammation, and lay out the strategy explicitly."));
k.push(compare("Acute phase of chronic inflammation","Subacute phase of chronic inflammation",
 ["**Control the inflammation** — the aim is to stop ongoing tissue breakdown and excessive scar formation."],
 ["**Decrease pain**; constant pain should be receding. Begin progressing an exercise program under **controlled stresses**, so the connective tissue in the region learns to withstand what you and the patient's functional activities impose."],
 C.blue,C.teal,C.lightBlue,C.lightTeal));
k.push(tnote("Two things make Phase IV different. First, EDUCATION IS THE INTERVENTION: patients need to understand they are not causing continued tissue injury by being active, and that persistent pain reflects a sensitized central nervous system. Get that buy-in and the psychosocial pieces become addressable. Second, dose by TIME, NOT REPS — a time-contingent approach (two minutes, progressing to five) performed regardless of perceived pain has been shown to deactivate the brain's pain-facilitatory pathways. This is the top-down approach, and it teaches patients they can influence their own symptoms. Exercise itself stimulates endogenous analgesia. Know your skill level here — chronic pain is biopsychosocial, and the full treatment comes in the pain course."));

k.push(pageBreak());
/* ─────────────── SYNC + STUDY ─────────────── */
k.push(banner("MODULE 5","Sync Case, Reading Map, and Glossary"));
k.push(spacer());
k.push(h1("Sync Case — Joe, 53M office worker training for a 5K with his daughter ★"));
k.push(detail(["Touchpoint","Findings → reasoning"],[
 ["**Visit 1 — 2 days after a run**","Pain 6/10 now, 8/10 worst; **aggravated by knee flexion and walking, lasting all day**; eased by not moving and ibuprofen. **Visible measurable effusion**, decreased stance time with slight knee flexion, TTP laterally, **both tibial glides limited by swelling**, extension lacking 5° and flexion 100° both limited by PAIN, strength 4/5 and painful. → **ACUTE stage, high severity and irritability.** Priorities at the pyramid base: **pain and effusion first**, protected motion, grade 1–2 mobilizations, isometrics, education, activity modification (the 5K training pauses). Progress when pain stops being constant and effusion falls; regress if soreness outlasts 24 hours"],
 ["**Visit 4 — 2 weeks in**","Pain 0/10 now, 4/10 worst; aggravated only by **deep squatting (>90°) and walking >1 mile with ~30 min of soreness after**. **No effusion**, gait WNL, squat shows a weight shift to the right, **tibial posterior glide hypomobile**, extension 0°, flexion 130° limited by **STIFFNESS not pain**, Thomas test shows quad tightness, extension strength now 5/5, flexion 4/5. → **SUBACUTE, moderate-low irritability.** The limiter has changed from pain to **mobility and motor control**: posterior glide mobilization, quadriceps length work, squat retraining off the weight shift, progressive loading"],
 ["**Visit 8 — 6 weeks in**","Pain 0/10 now, 1/10 worst; sore ~10 minutes after running >1 mile. No effusion, walking WNL, **running gait shows decreased stance time on the left**, squat clean, glides WNL, flexion 140°, mild quad tightness, all strength 5/5. → **CHRONIC/remodeling, low irritability.** Now it's **endurance, strength, power, and sport specificity**: graded return-to-run progression toward the 5K in four months, plyometric and speed work, load tolerance beyond one mile"]],[2200,7160]));
k.push(bullet("The sync framing worth stealing: **focus on impairments, not the diagnosis**; emphasize stage of healing plus **severity and irritability (SINSS)**; consider manual therapy, exercise, modalities, AND education at every stage; and identify the patient's actual **task demands** before choosing anything."));
k.push(spacer());
k.push(detail(["Topic","Source"],[
 ["Tissue response","MSK Disorders, Tissue Response, and Injury lecture + slides (5.1); **APTA Guide** definition of intervention"],
 ["Stage management","Management lectures + slides for the Acute (5.2), Subacute (5.3), Chronic (5.4), and Chronic/Recurring Pain (5.5) stages; **Kisner & Colby** is the text behind this module"],
 ["Skills (lab practical)","Interventions across stages: **flexibility · resistance exercise · stabilization · balance · exercise patterns**"],
 ["Assessment","Quiz 4 · Sync 5 case (Joe, three touchpoints) · Case Study #2 (home exercise plan) later in the course"]],[2400,6960]));
k.push(spacer());
k.push(...glossary("Module 5 Quick-Reference Glossary",[
 ["Intervention (APTA)","Purposeful, skilled interaction using PT procedures to produce change consistent with diagnosis and prognosis"],
 ["Sprain grades","1st mild · 2nd moderate with some fibers torn and ↑joint mobility · 3rd near-complete or complete"],
 ["Complete tear paradox","A COMPLETE tear is usually painless on stress — palpation reveals the defect"],
 ["Tendinitis vs tendinosis","Inflammation of the tendon vs degeneration from repetitive microtrauma (no active inflammation)"],
 ["Tenosynovitis vs tenovaginitis","Inflamed synovial membrane covering a tendon vs inflammation with sheath thickening"],
 ["Contracture vs adhesion","Adaptive shortening preventing mobility vs abnormal collagen adherence restricting glide"],
 ["Reflex guarding vs intrinsic spasm","Protective contraction from a painful stimulus vs self-perpetuating contraction driven by local circulatory/metabolic change"],
 ["Pain–spasm–pain cycle","Contraction → restricted movement → circulatory stasis → ↑pain → more spasm"],
 ["Compartment syndrome","↑interstitial pressure in a closed compartment → ischemia and irreversible muscle loss; emergency"],
 ["Ten planning questions","Stage · time · activities · compliance · skill needed · prevention teaching · referrals · prior experience · precautions · YOUR skill level"],
 ["Hierarchy of interventions","Pain → mobility → stability → movement → endurance → strength → power"],
 ["Acute stage","Day 0–6; pain BEFORE resistance; maximum protection"],
 ["Subacute stage","Days 4–22 (14–21 typical); pain SYNCHRONOUS with resistance at end range; moderate protection, controlled loading"],
 ["Chronic stage","Days 21–60+ (to 6–12 months); STRETCH pain at end range only; minimal protection, functional training"],
 ["PRICE","Protection, Rest, Ice, Compression, Elevation"],
 ["Acute icing dose","5–10 min on, 10 min off, 5–10 min on; deep tissue keeps cooling up to an hour after removal"],
 ["Acute contraindication","No stretching or resistive exercise while inflammation and edema are present"],
 ["Massage positioning","Tendon: transverse friction with the tendon TAUT · muscle: SHORTENED position so the breach isn't separated"],
 ["Non-destructive exercise","Within the tolerance of healing tissue — heals without re-injury or new inflammation"],
 ["Early subacute isometrics","Multi-angle submaximal, muscle in shortened/relaxed position, intensity below pain perception"],
 ["Endurance in subacute","Slow-twitch fibers atrophy first → low intensity, high reps, light resistance"],
 ["Stretching sequence","Warm → relax → mobilize the joint (grade 3–4) → then stretch inert tissue"],
 ["Overdoing-it signs","Soreness >4 h or unresolved at 24 h · earlier/worse pain · ↑stiffness or ↓ROM over sessions · swelling/redness/warmth · progressive weakness · decreased functional use"],
 ["Chronic-stage progression","Submaximal→maximal · single→multi-plane · simple→complex · slow endurance→speed · drills→unpredictable environments"],
 ["Phase IV focus","Identify and MODIFY the mechanism of chronic irritation"],
 ["Time-contingent dosing","Dose by time, not reps, regardless of perceived pain — deactivates pain-facilitatory pathways (top-down)"],
 ["Exercise analgesia","Exercise stimulates endogenous analgesia — movement is itself a pain intervention"]]));

build(k,"/home/claude/out/TI2_Module5_SoftTissueInjuryPhases_StudyNotes.docx");
