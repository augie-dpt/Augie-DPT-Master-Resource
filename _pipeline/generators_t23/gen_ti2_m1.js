const L = require('/home/claude/notes_lib.js');
const {C,h1,h2,body,bullet,tnote,tip,compare,detail,infoBox,banner,glossary,fig,pageBreak,spacer,cover,build,linkBox} = L;
const k=[];

k.push(...cover("Therapeutic Interventions II (DPTH 6241)","Module 1: Physical Agents, Tissue Healing, and Pain",
 "Topic 1.1: Introduction to Physical Agents • Topic 1.2: Phases of Healing and Tissue Repair • Topic 1.3: Introduction to Pain and Pain Management • Lectures by Dr. Jake Awruch (course faculty: Dr. Awruch, Dr. Evan Andreyo, Dr. Alex Krull)",
 ["Watch the lectures in your own Canvas module — these notes condense them, they don't replace them",
  "★ The through-line of this whole course: a modality is an ADJUNCT chosen by healing stage and pain mechanism, then proven with test → treat → retest",
  "Texts: Cameron, Physical Agents in Rehabilitation (6th ed) — Ch 1 is this module · Kisner & Colby, Therapeutic Exercise (8th ed)"]));

/* ─────────────── TOPIC 1.1 ─────────────── */
k.push(banner("TOPIC 1.1","Introduction to Physical Agents"));
k.push(spacer());
k.push(infoBox("The perspective the course opens with (APTA, 2005)",["“The use of physical agents, in the absence of other skilled therapeutic or educational interventions, should not be considered physical therapy.” — i.e. modalities are an adjunct inside a comprehensive plan of care. A patient cannot come to PT for modalities alone and call it physical therapy."],C.gold,C.lightGold));
k.push(h1("1. Vocabulary That Sets the Course Up"));
k.push(detail(["Term","Definition"],[
 ["**Physical agent**","Energy and/or material applied to a patient to assist rehabilitation. Also called **biophysical agents** or, in the clinic, **modalities** — the three terms are interchangeable"],
 ["**Thermal agents**","Increase or decrease tissue temperature (cryotherapy, thermotherapy). Superficial: hot pack, ice pack. Deep: **ultrasound** (which has BOTH thermal and mechanical properties)"],
 ["**Electromagnetic agents**","Apply energy as electromagnetic radiation OR electrical current. This course focuses on **electrical currents** (TENS, NMES) rather than radiation, matching what APTA treats as standard practice"],
 ["**Mechanical agents**","Apply force to increase or decrease pressure on the body: **traction, compression, water/whirlpool**, ultrasound"],
 ["**Precautions**","Conditions where a treatment is applied with special care or limitations = **relative contraindications**"],
 ["**Contraindications**","Conditions where a treatment should NOT be applied = **absolute contraindications**"]],[2400,6960]));
k.push(h1("2. What Physical Agents Actually Accomplish"));
k.push(bullet("Four effects, and every modality in this course maps to at least one: **modify tissue inflammation and healing** · **relieve pain** · **alter muscle tone / ability to contract** · **alter collagen extensibility** (and therefore motion restrictions). Cameron tables 1.2–1.5 list which agent serves which purpose — worth tabbing before the midterm."));
k.push(h1("3. General Precautions and Contraindications ★"));
k.push(detail(["Condition","Why it matters"],[
 ["**Pregnancy**","Could the energy reach the fetus? Ultrasound over the abdomen or a hot pack on a pregnant patient's low back are the classic examples. Fetal development is poorly understood — added energy near the fetus may alter it, so it's precaution-to-contraindication territory"],
 ["**Malignancy / cancer**","Heat and some energy forms have been shown to increase the rate of metastasis — and a patient can have active malignancy in a region without knowing it yet. A HISTORY of cancer is itself a precaution"],
 ["**Pacemakers + implanted electronic devices**","Energy applied near the device can disrupt its rhythm or function"],
 ["**Impaired sensation**","For thermal and cryotherapy, the patient's own sensation of heat/cold is the safety mechanism that ends treatment. No sensation, no safety net"],
 ["**Impaired mentation**","If they can't tell you what they're feeling, you've lost your feedback loop — precaution or contraindication depending on the agent"]],[2400,6960]));
k.push(h1("4. Choosing an Agent — the Priority Ladder"));
k.push(bullet("**Priority order**: (1) the specific underlying problem, (2) the problem most likely to respond to treatment, (3) a treatment that addresses more than one problem at once, and last of all (4) **symptomatic treatment only**. Worked example from lecture: a patient with inflammation AND weakness — treat the inflammation first, because opening with NMES for the weakness can aggravate the inflammation and make everything worse. Second example: pain caused BY inflammation — pick the agent that treats both, because TENS treats the pain without touching the inflammation, which leaves you at the bottom rung, symptomatic-only."));
k.push(bullet("Then run the filter: can the agent achieve your goals and effects? → any contraindications or precautions (a contraindication removes the option instantly — move to the next safe choice) → what's the evidence? → cost, convenience, availability. Most physical agents act at the **body-structure-and-function** level of the ICF — so that's where you re-measure — but reduced pain and restored motion often cascade upward into activity and participation."));
k.push(tip("Evidence-based practice has three legs — best available evidence, clinician expertise, patient values — and you need all three to stand up. Physical agents have a thin high-quality evidence base (many studies predate modern trial design), which is exactly why reimbursement has fallen. The practical answer is the TEST → TREAT → RETEST model: measure ROM, apply the thermal agent for collagen extensibility, re-measure ROM. Effects should show up FAST — within a session for motion, a few sessions for pain or muscle function. If nothing changes, that's your evidence to change course."));
k.push(bullet("**Cost-effective use** also means asking who should apply it: PTAs, techs, and aides commonly deploy modalities — is a DPT's time best spent on the hot pack, or on the skilled care only they can provide? And think about **complementary combinations** the lecture asks you to reason through (RICE = compression + ice, heat + TENS, TENS + ice, e-stim + heat, e-stim + compression): for each, what does it affect — blood flow, tissue healing, swelling, muscle function — and what clinical presentation makes that pairing smart or counterproductive?"));

k.push(pageBreak());
/* ─────────────── TOPIC 1.2 ─────────────── */
k.push(banner("TOPIC 1.2","Inflammation and Tissue Repair"));
k.push(spacer());
k.push(bullet("This is deliberate scaffolding — you've met tissue healing in physiology, anatomy, and TI 1, and you'll meet it again. What's new is the frame: **the phase of healing dictates which intervention you're allowed to choose.** Cameron's line is the one to quote to a patient asking why they need PT instead of time: “the clinician can enhance healing by applying the appropriate physical agents, therapeutic exercises, or manual techniques.”"));
k.push(h1("1. The Three Phases ★"));
k.push(detail(["Phase","Timeline, events, and what it permits"],[
 ["**Inflammation (hemostatic)**","**Day 0–6.** Initial vasoconstriction → vasodilation, hemostasis and clot formation, wound closure begins — externally in skin or internally in tendon/ligament/cartilage/bone. Corresponds to the **acute** phase: pain BEFORE end range, primary goal **maximum protection**. The 5 cardinal signs: redness (rubor), swelling (tumor), heat (calor), pain (dolor) — plus loss of function"],
 ["**Proliferation**","**Day 6–20/21.** Epithelialization + collagen production — but this **collagen is WEAK**. The wound contracts; gentle motion is valuable, resistance and repetition are dangerous. Corresponds to the **subacute** phase: pain AT end range, primary goal **controlled movement with moderate protection**"],
 ["**Maturation (remodeling)**","**Day 21–60+, weeks to months — the longest phase.** Collagen remodels **according to the stress placed on it**, which is the whole argument for loading and moving in all functional directions. Corresponds to the **chronic** phase: pain only when stressed beyond resistance at end range, primary goal **return to function with minimal protection**"]],[2400,6960]));
k.push(h1("2. Chronic Inflammation Is Not Tendinosis"));
k.push(compare("CHRONIC INFLAMMATION","TENDINOSIS / TENDINOPATHY",
 ["Simultaneous progression of active inflammation, tissue destruction, and healing — persisting months to years. Driven by continued aggravation of injured tissue or an immune response, most often to foreign material or an **autoimmune condition** (rheumatoid arthritis is the model case, managed with medication + movement + exercise). Primary cells: **lymphocytes, macrophages, monocytes**. Treatment reasoning: settle the active inflammatory process."],
 ["A **degenerative** state with **NO active inflammation** occurring. Which is precisely why treating it like an inflammatory problem fails — the intervention choice looks completely different (load and remodel rather than cool and calm). Knowing which one you're looking at changes the modality you reach for."],
 C.blue,C.teal,C.lightBlue,C.lightTeal));
k.push(h1("3. Factors That Affect Healing"));
k.push(bullet("**Local factors**: type, size, and location of injury · **infection — probably the single biggest mediator of whether tissue heals at all** · vascular supply (the tissue-by-tissue predictor below) · movement and pressure (too much too early harms; too little later stalls remodeling) · temperature deviations, topical medications, electromagnetic injury — note that these last three are things **physical agents themselves do**, which is the point. **Systemic factors** (age, nutrition, comorbidity, medication, smoking) get their own table in Cameron Ch 1 — review it there."));
k.push(h1("4. Tissue-by-Tissue Healing ★"));
k.push(detail(["Tissue","Healing behavior"],[
 ["**Cartilage**","Very limited healing — poor blood supply, no lymphatics, no nerves. The exception: injuries that also involve **subchondral bone**, which lets inflammatory cells reach the lesion (classic knee femoral-condyle example). Even then the repair cartilage is never as strong as the original and degrades faster"],
 ["**Tendon**","Real repair potential, but **excessive movement or contraction within the first ~3 weeks worsens functional outcomes** — protect early, then progressively load to optimize healing"],
 ["**Ligament**","More limited; depends heavily on location — **intracapsular (ACL) heals poorly**, capsular/extracapsular better. Healed ligament regains only **~50% of intrinsic strength** but often heals THICKER; because ligaments aren't contractile, that strength loss is often functionally silent as long as the patient builds **dynamic muscular stability**. Ligaments heal better with **controlled early movement** — so even while protecting from active contraction, PROM is doing productive work"],
 ["**Skeletal muscle**","Injury from trauma, strain, or muscle disease; usually heals close to prior strength and function unless the injury is severe or rehab is incomplete. Watch for **myositis ossificans** — a calcified hematoma after severe contusion (classic deep quad injury). Rare, but the acute-phase management is to position the muscle in a **LENGTHENED** position to reduce that risk"],
 ["**Bone**","The best healer in the body. **Primary healing**: clean edges, cortex in contact — typical of ORIF/hardware cases. **Secondary healing** (the common route, 4 stages): inflammation → **soft callus** → **hard callus (3 weeks–4 months = the clinical healing window follow-up X-rays are looking for)** → remodeling of fibrous bone into lamellar bone"]],[2200,7160]));
k.push(tnote("Two reasoning questions from the sync session worth answering out loud: is inflammation normal after a fracture? (Yes — it's stage one of secondary bone healing.) Is NEW inflammation 8 weeks after surgery normal? (No — that's a flag, not a phase.) Then take each agent and ask what it DOES per phase: what does cold do in inflammation vs maturation? Heat? Electrical current? Mechanical pressure?"));

k.push(pageBreak());
/* ─────────────── TOPIC 1.3 ─────────────── */
k.push(banner("TOPIC 1.3","Introduction to Pain and Pain Management"));
k.push(spacer());
k.push(infoBox("The framing quote (Lorimer Moseley)",["“We tend to endorse the complexity of the brain and its fundamental role in what we experience. Unless, of course, we are talking about pain.” — patients (and clinicians) carry a sophisticated model of the brain and a rudimentary model of pain. Fixing that mismatch IS an intervention."],C.purple,C.lightPurple));
k.push(h1("1. Definitions ★"));
k.push(detail(["Term","Definition"],[
 ["**Pain (IASP)**","An unpleasant sensory and/or emotional experience associated with actual or potential tissue damage, or described in terms of such damage. Deliberately wide: subjective, sensory OR emotional, and only *associated* with damage"],
 ["**Pain matrix**","The variable group of cortical and subcortical regions processing nociception and pain perception — typically anterior cingulate cortex, thalamus, sensorimotor cortex"],
 ["**Pain neuromatrix theory**","The matrix UNCONSCIOUSLY integrates nociceptive + non-nociceptive sensory input with biological, psychological, and social factors to decide whether there's a **threat** requiring protection. Everyone has their own **neural signature**"],
 ["**Acute pain**","An EXPECTED physiologic response to noxious stimuli that can become pathologic; sudden onset, time-limited, motivates protective behavior (foot out of the fire)"],
 ["**Chronic / persistent pain**","Pain persisting beyond the expected tissue-healing time, **or present at least half the days for >6 months**. Preventing the acute→chronic transition is one of PT's central jobs"],
 ["**Nociceptors**","High-threshold sensory receptors of the peripheral somatosensory system that transduce and encode noxious stimuli. **They are NOT pain receptors** — the brain decides whether their signal becomes pain"],
 ["**Nociplasticity**","The nervous and immune systems' ability to undergo functional and structural changes that AMPLIFY nociceptive processing with no disease or lesion of the somatosensory system"],
 ["**Peripheral sensitization**","Nociceptor firing threshold LOWERS in response to substances released from nociceptive afferents → bigger response to stimuli and a larger area from which stimuli evoke action potentials"],
 ["**Central sensitization**","CNS changes increase the magnitude and duration of response to noxious stimuli, enlarging receptor fields and dropping thresholds so **non-noxious input becomes painful**. Model case: persistent LBP with severe pain on a few degrees of unloaded standing flexion"]],[2400,6960]));
k.push(bullet("The take-home the lecture states flatly: **pain is 100% of the time an output of the brain** — a multi-system protective output triggered when the brain perceives threat, shaped by that person's neural signature, prior experience, and psychosocial context. Nociception is one input, not the verdict."));
k.push(h1("2. Fiber Types and Pain Categories"));
k.push(compare("A-delta fibers (~20% of afferents)","C fibers (the majority)",
 ["Respond to intense mechanical stimulation plus heat and cold. **Short duration, sharp, stabbing, prickling.** Small and **MYELINATED** → fast conduction. The first jolt when you get punched in the arm. **NOT blocked by opioid medication.**"],
 ["**Longer duration, dull, throbbing, aching, burning, diffusely localized**, with autonomic company: sweating, ↑HR and BP, nausea. Small and **UNMYELINATED** → slower. Carry most of the afferent traffic that can produce a pain output — and they **CAN be blocked by opioids**, which is exactly the gap PT fills conservatively."],
 C.blue,C.teal,C.lightBlue,C.lightTeal));
k.push(bullet("**A-beta and A-alpha fibers** are myelinated and fast but carry NON-painful input — proprioception, vibration, mechanical touch. Hold onto that: they're the mechanism behind gate control and behind why TENS works. **By duration**: **transient** pain (nociceptors fire, no actual damage, resolves untreated — the stubbed toe) → **acute** → **chronic/persistent**. **By source and pattern**: musculoskeletal, **visceral** (organs, referring to superficial regions — left arm pain in male MI), and **neural**. **Radicular/neuropathic** pain travels ALONG the path of a nerve; **referred** pain is felt away from its source (hip arthritis presenting as exquisite knee pain with a clean knee) — and either can be acute or chronic."));
k.push(h1("3. Two Historical Theories (They Explain Your Modalities)"));
k.push(detail(["Theory","Mechanism + clinical payoff"],[
 ["**Gate control theory**","Noxious input travels A-delta and C fibers to the transmission cell → brain → pain. Inhibitory interneurons can shut that gate, but noxious input doesn't activate them. **Non-painful input (A-beta/A-alpha: vibration, proprioception, mechanical) DOES** — closing the gate on the transmission cell. This is why placing TENS electrodes and generating a novel buzzing sensation reduces perceived pain"],
 ["**Endogenous opioid system**","The body's own **opiopeptins** bind the same opioid receptors as morphine, released under emotional or physical stress, raising the pain threshold. Explains how a noxious stimulus can RELIEVE pre-existing pain (acupuncture), plus the battlefield and trapped-in-the-car stories — and if the body can withhold pain during real damage, it can also produce pain without it"]],[2600,6760]));
k.push(bullet("Both theories have real gaps against modern pain science — they're a starting point, not the finish line — but they're the mechanistic reason specific physical agents affect pain at all."));
k.push(h1("4. Measuring Pain, and Managing It"));
k.push(bullet("**Scales**: VAS, numeric 0–10 (“0 is nothing, 10 is call 911”), FACES; account for cognitive decline and pediatric patients (facial expression, semantic differential scales). The honest limitation: a score tells you what the patient reports, not which intervention to choose or whether it worked mechanistically. So pair it with the tools from PT Fundamentals — **body diagrams, symptom behavior (location, depth, 24-hour pattern), activity and pain logs, open-ended and structured interview questions, and physical exam findings that can change over time.** And take **cultural difference** seriously: some cultures express maximal pain until it resolves entirely, which is a communication norm, not a data error."));
k.push(bullet("**Management priority**: resolve the underlying pathology when possible → otherwise modify discomfort and suffering while restoring activity and participation → maximize function within limits the condition imposes. The toolkit: physical agents, **education (done well it lowers pain; done badly it raises it)**, manual therapy, and movement — with **persistent pain best served by an integrative multidisciplinary approach**, where PT contributes movement plus cognitive-behavioral strategies rather than pretending to own the whole problem. Cameron Ch 1 has the table matching pain type/duration → treatment goals → effective agents."));
k.push(tnote("The sync session's two killer prompts: (1) Two snowboarders tear up their knees on the same icy day — one reports 3/10, one 8/10. Who has more tissue damage? (Unanswerable — pain isn't a damage gauge.) (2) Jensen/Brant-Zawadzki, 'MRI of the Lumbar Spine in People without Back Pain': disc findings are common in painless people and pain is common in people with clean MRIs. Then the 34-year-old MVA patient six weeks out with negative imaging, 8/10 at rest, 15° cervical rotation, pain to light touch, guarding, disrupted sleep — that's a central-sensitization picture, and the first intervention is validating that the pain is real."));

k.push(pageBreak());
/* ─────────────── STUDY ─────────────── */
k.push(banner("MODULE 1","Reading Map, Course Map, and Glossary"));
k.push(spacer());
k.push(detail(["Topic","Source"],[
 ["Physical agents","Intro to Physical Agents lecture + handout; **Cameron Ch 1** (incl. tables 1.2–1.5 of agents by purpose)"],
 ["Tissue healing","TI2 Tissue Healing lecture + handout; Cameron's inflammation and tissue repair chapter (scan it with annotated headings if the review feels thin)"],
 ["Pain","TI2 Intro to Pain lecture + handout; Cameron Ch 1 pain-agent table; Moseley's public-facing pain science material"],
 ["Course arc","Wk 1 intro/healing/pain → Wk 2 thermal + ultrasound → Wk 3 electrical (pain, healing, muscle contraction) → Wk 4 mechanical (traction, compression, hydrotherapy) → Wk 5 soft tissue → Wk 6 post-surgical + peripheral nerve → Wk 7 acute/subacute interventions → Wk 8 lab immersion + final"],
 ["Assessment","5 quizzes (25%) · 2 case assignments — video, then home exercise plan (20%) · midterm (15%) · final (20%) · **lab practical (20%)**; 3-day lab immersion = modalities, then treatment interventions, then the practical"]],[2400,6960]));
k.push(spacer());
k.push(...glossary("Module 1 Quick-Reference Glossary",[
 ["Physical agent","Energy/material applied to assist rehab — aka modality, biophysical agent; an ADJUNCT, never the whole plan"],
 ["Thermal / electromagnetic / mechanical","Temperature change / radiation or electrical current / force and pressure"],
 ["Precaution vs contraindication","Apply with care (relative) vs do not apply (absolute)"],
 ["Four effects of agents","Modify inflammation + healing · relieve pain · alter muscle tone/contraction · alter collagen extensibility"],
 ["General contraindications","Pregnancy, malignancy, pacemaker/implanted electronics, impaired sensation, impaired mentation"],
 ["Priority ladder","Underlying problem → most responsive problem → treats two at once → symptomatic only (last resort)"],
 ["Test → treat → retest","Measure the impairment, apply the agent, re-measure — the practical face of EBP for modalities"],
 ["Inflammation phase","Day 0–6; vasoconstriction→dilation, clot, closure; acute; MAXIMUM PROTECTION"],
 ["Proliferation phase","Day 6–21; epithelialization + WEAK collagen; subacute; controlled movement, moderate protection"],
 ["Maturation phase","Day 21–60+; collagen remodels TO THE STRESS APPLIED; chronic; return to function, minimal protection"],
 ["5 cardinal signs","Rubor, tumor, calor, dolor + loss of function"],
 ["Chronic inflammation vs tendinosis","Active inflammation + destruction + healing (lymphocytes/macrophages/monocytes) vs degeneration with NO inflammation"],
 ["Infection","The strongest local mediator of whether tissue heals"],
 ["Cartilage healing","Poor (no blood supply/lymphatics/nerves) unless subchondral bone is involved"],
 ["Tendon vs ligament","Protect ~3 weeks then load / heals to ~50% strength but thicker; intracapsular (ACL) worst; controlled early motion helps"],
 ["Myositis ossificans","Calcified hematoma after severe contusion — position the muscle LENGTHENED in the acute phase"],
 ["Bone: primary vs secondary","Cortex-in-contact (ORIF) vs 4 stages with hard callus at 3 wk–4 months = clinical healing"],
 ["Pain (IASP)","Unpleasant sensory and/or emotional experience associated with actual or potential tissue damage"],
 ["Pain neuromatrix","Unconscious integration of nociceptive + non-nociceptive input with bio-psycho-social factors → threat verdict"],
 ["Nociceptors","High-threshold receptors that encode noxious stimuli — NOT pain receptors"],
 ["Peripheral vs central sensitization","Lowered nociceptor threshold + larger evoking area vs CNS amplification making non-noxious input painful"],
 ["A-delta vs C fibers","Myelinated, fast, sharp, ~20%, opioid-resistant vs unmyelinated, slower, dull/burning, majority, opioid-sensitive"],
 ["A-beta / A-alpha","Fast myelinated NON-painful input (vibration, proprioception) — the gate-closers behind TENS"],
 ["Radicular vs referred","Travels along a nerve's path vs felt away from its source (visceral; hip→knee)"],
 ["Gate control theory","Non-painful input activates inhibitory interneurons and closes the gate on the transmission cell"],
 ["Endogenous opioid system","Opiopeptins bind opioid receptors under stress, raising pain threshold"],
 ["Persistent-pain management","Integrative and multidisciplinary; PT brings movement, education, and CBT-adjacent strategies"]]));

build(k,"/home/claude/out/TI2_Module1_PhysicalAgentsTissueHealingPain_StudyNotes.docx");
