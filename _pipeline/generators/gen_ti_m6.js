const L = require('/home/claude/notes_lib.js');
const {C,h1,h2,body,bullet,tnote,tip,compare,detail,infoBox,banner,glossary,fig,pageBreak,spacer,cover,build,linkBox} = L;
const E="/home/claude/emb30/";
const k=[];

k.push(...cover("Therapeutic Interventions I (DPTH 6231)","Module 6: Axial Skeleton/Spine Mechanics & Introduction to Manual Therapy",
 "Topics 6.1–6.4 + Sync Session 6 — the techniques themselves, at last",
 ["Dr. Erika Nelson-Wong (spine mechanics, graded mobilization, joint mobilization application), Dr. Evan Andreyo (mechanisms of manual therapy, soft tissue mobilization), plus four lab-skill demonstration videos",
  "**This is the module Module 5 was setting up.** Module 5 was why and when; this is what it is and how to apply it",
  "The last content module of Ther Int I — **Module 7 is lab immersion, Module 8 is the final exam**"]));

/* ─────────────────────────── TOPIC 6.1 ─────────────────────────── */
k.push(banner("TOPIC 6.1","Mechanics of the Axial Skeleton and Spine"));
k.push(spacer());
k.push(body("Objective: describe osteokinematic and arthrokinematic relationships for **all regions of the spine**."));
k.push(infoBox("The spine is a little different",[
 "**Planar joints** — facets and vertebral bodies",
 "**Six degrees of freedom**, not the usual one to three: flexion/extension · lateral flexion · rotation · anterior/posterior translation · medial/lateral translation · superior/inferior translation (gapping and approximation)"],C.blue,C.lightBlue));

k.push(h1("1. The Upper Cervical Spine"));
k.push(detail(["Joint","Structure","Primary motion","Range"],[
 ["**Atlanto-occipital (AO/OA)**","**Convex occiput on concave C1 facets** — apply convex/concave patterns, so **roll and slide are opposite**","**Flexion/extension** — nodding. Very little rotation or lateral flexion","Flexion ~**5°** · extension ~**10°** · **total flex/ext ~15°** · axial rotation minimal (**<5°**) · lateral flexion **3–5°**"],
 ["**Atlanto-axial (AA)**","Facet joints C1–C2, oriented **20° from the horizontal (transverse) plane**. A **pivot (median) joint**","**Rotation** — the facet orientation is close to horizontal. Arthrokinematically this is **spin**","Axial rotation **35–40°**, which is about **50% of total cervical rotation**"]],[2000,3200,2200,1960]));

k.push(h1("2. Coupled Motion"));
k.push(body("**Definition:** one motion around one plane is associated with another motion around a different plane. If you have one, you also have the other."));
k.push(compare("UPPER CERVICAL","MID / LOWER CERVICAL",
 ["**Lateral flexion coupled with CONTRALATERAL rotation**","**Rotation coupled with CONTRALATERAL lateral flexion**","Example: during left rotation at AO and AA there is a small degree of **right** lateral flexion. You may not see it"],
 ["Lateral flexion and rotation occur **together** — **ipsilateral**","**The upper cervical and mid/lower cervical spine have OPPOSITE patterns**"],
 C.blue,C.teal,C.lightBlue,C.lightTeal));
k.push(tip("Coupling patterns are accepted in the upper cervical and mid/lower cervical spine ONLY. Thoracic and lumbar regions have inconsistent coupling patterns — see the lumbar evidence below."));
k.push(tnote("Name rotation by the direction the SUPERIOR vertebral body is moving."));

k.push(h1("3. Facet Orientation by Region"));
k.push(detail(["Region","Facet orientation","Consequence"],[
 ["**C2**","**20°** to the horizontal plane","Rotation dominant"],
 ["**C3–C7**","**45°** to the horizontal and frontal plane","Motion follows the oblique plane created by the facets"],
 ["**Thoracic**","Generally the **frontal plane**, changing to **sagittal around T10–11**","The transition point matters clinically"],
 ["**Lumbar**","**90° to the transverse plane**","Primary motion **sagittal** (12–20° per segment) · secondary **frontal** (6° per segment) · tertiary **transverse** (2° per segment)"],
 ["**L5–S1**","**Oblique** — different from the rest of the lumbar spine","**Allows rotation and flexion, limits lateral flexion**"]],[1700,3200,4460]));

k.push(h1("4. Facet Arthrokinematics"));
k.push(detail(["Motion","What the facets do"],[
 ["**Approximation (closing)**","Facet surfaces move closer together"],
 ["**Separation (gapping/opening)**","Facet surfaces move further apart"],
 ["**Sliding (gliding)**","Linear translation of facet surfaces in the plane of the facet joint"]],[2900,6460]));
k.push(body("**Cervical spine** — the inferior facets of the superior vertebra move on the superior facets of the inferior vertebra:"));
k.push(detail(["Cervical motion","Arthrokinematics"],[
 ["**Flexion**","**Superior/anterior slide**"],
 ["**Extension**","**Inferior/posterior slide**"],
 ["**Lateral flexion**","**Ipsilateral** inferior/posterior slide AND **contralateral** superior/anterior slide"],
 ["**Rotation**","**Ipsilateral** inferior/posterior slide with some **approximation**, and **contralateral** superior/anterior slide with some **gapping**"]],[2400,6960]));
k.push(detail(["Lumbar motion","Arthrokinematics"],[
 ["**Flexion**","**Superior slide**"],
 ["**Extension**","**Inferior slide**"],
 ["**Lateral flexion**","**Ipsilateral inferior** slide and **contralateral superior** slide"],
 ["**Right rotation**","**Separation** (opening, gapping) of the **right** facet joint and **approximation** (closing, compression) of the **left**"],
 ["**Left rotation**","**Separation** of the **left** facet joint and **approximation** of the **right**"]],[2400,6960]));
k.push(tip("Lumbar coupled motion, and why to be careful: a systematic review found 24 articles investigating coupled lateral flexion/rotation in the lumbar spine. 17 found SOME coupled motion — but there was little agreement on what direction. The stated conclusion is that physical therapists should use caution applying coupled motion concepts to the lumbar spine. (Legaspi & Edmond, JOSPT 2007;37(4):169–78)"));

k.push(...glossary("Quick-Reference Glossary — Topic 6.1",[
 ["Atlanto-occipital (AO/OA)","Occiput on C1; convex on concave; primary motion is nodding flexion/extension"],
 ["Atlanto-axial (AA)","C1–C2 pivot joint; contributes ~50% of total cervical rotation via spin"],
 ["Coupled motion","One plane's motion obligately accompanied by motion in another plane"],
 ["Facet approximation","Closing/compression of facet surfaces"],
 ["Facet separation","Gapping/opening of facet surfaces"],
 ["Six degrees of freedom","Three rotations plus three translations available at spinal segments"]]));
k.push(pageBreak());

/* ─────────────────────────── TOPIC 6.2 ─────────────────────────── */
k.push(banner("TOPIC 6.2","Manual Therapy Basics"));
k.push(spacer());
k.push(body("Two lectures: **Graded Mobilization** (Nelson-Wong) establishes the vocabulary, and **Mechanisms of Manual Therapy** (Andreyo) asks whether and why it works."));

k.push(h2("A. Graded Mobilization"));
k.push(bullet("**Joint mobilization is using our hands to move a joint passively and skillfully.** The goal is to induce normal joint motion and mobility and reduce pain, by encouraging the correct **accessory (arthrokinematic)** and **physiological (osteokinematic)** motions. **Velocity and amplitude are important.**"));
k.push(tnote("A vocabulary note the lecture makes deliberately: this presentation only covers non-thrust techniques, grades 1–4. You will hear clinicians refer to any high-velocity thrust as a manipulation, but we are moving away from that language — really any mobilization we perform can be considered a manipulation of the joint."));
k.push(compare("OPEN-PACKED (resting, loose-packed)","CLOSE-PACKED",
 ["The position where the joint has the **greatest** mobility","The **least** tension from all passive structures — ligaments and capsule","Also the **position of comfort** for a swollen or painful joint","**Differs for each joint — you should know it for every joint**","**Where we assess joint play, and where we start mobilization treatment**"],
 ["The position where the **least** mobility is possible","Typically **greatest joint congruency** and greatest capsular and ligamentous tension","Sometimes used for **provocation testing** — differentiating joint-surface problems such as osteoarthritis from impingement of structures"],
 C.green,C.red,C.lightGreen,C.lightRed));

k.push(h1("The Maitland Grades"));
k.push(...fig(E+"grades.png",1656,795,"Grades are defined by location in range, amplitude and velocity (Topic 6.2 handout)"));
k.push(body("The diagram shows motion from the resting state toward end range. There is **available joint play**, then the first resistance from tissue — the **1st barrier, R1**. You can move through that resistance with tissue stretching until the **anatomical limit** — the **2nd barrier, R2**."));
k.push(detail(["Grade","Amplitude","Where in range","Rhythm","What it's for"],[
 ["**I**","**Small**","**Beginning** of range","Rhythmic oscillations, **rapid** — almost a small vibration","**Pain relief.** Stimulates joint mechanoreceptors. **Not** used to increase mobility"],
 ["**II**","**Large**","Within range, **not to the limit** — does not hit R1, does not stretch","**2–3 per second**","Pain relief, plus **joint lubrication and nourishment** through a larger arc of accessory motion"],
 ["**III**","**Large**","**Past R1, to the limit and into tissue resistance**","**2–3 per second**","**Gain motion**, plus lubrication"],
 ["**IV**","**Small**","**At R1 / into tissue resistance**, at end range","Rhythmic oscillations, **rapid**","**Gain end-range motion**"]],[1000,1500,2600,2200,2060]));
k.push(tnote("Two mnemonics straight from the lecture. For Grade I amplitude, her instructor described it as applying just enough motion and force to bend an ant's knees. For the 2–3 per second oscillation rhythm of grades II and III: much like you learned to sing Stayin' Alive during CPR, you can sing row row row your boat."));
k.push(tip("Grade IV is not a starting point, and definitely not for an acutely injured joint."));
k.push(tnote("From the Maitland demonstration video: always assess the full available range first — beginning of range to the end of tissue resistance — before you grade anything. The demo runs it on a foam block, then on a shoulder posterior glide."));

k.push(h2("B. Mechanisms of Manual Therapy"));
k.push(...fig(E+"mttree.png",1866,1013,"What counts as manual therapy (Topic 6.2 handout)"));
k.push(detail(["Category","Techniques"],[
 ["**Joint mobilization**","Thrust (manipulation) · non-thrust · mobilization with movement"],
 ["**Soft tissue mobilization**","Massage · deep tissue · instrument assisted"],
 ["**Stretching**","Muscle length"],
 ["**Nerve mobilization**","Nerve sliders · nerve tensioners"]],[2600,6760]));
k.push(bullet("**Joint mobilization/manipulation:** techniques used to modulate pain and treat joint impairments that limit ROM, by specifically addressing the altered mechanics of the joint. **Mobilization** may be used interchangeably with manipulation but has a less aggressive connotation; **manipulation** is a **high velocity, low amplitude thrust (HVLAT)**. *(Kisner & Colby 2022)*"));
k.push(infoBox("The three goals of manual therapy",[
 "**Decrease pain**",
 "**Improve mobility**",
 "**Build a therapeutic alliance** — “the sense of collaboration, warmth, and support between the client and therapist” *(Hall et al. 2010)*. Positively correlated with **treatment adherence and outcome**, and with improved pain, disability and treatment satisfaction"],C.teal,C.lightTeal));

k.push(h1("Does It Work? The Honest Answer"));
k.push(detail(["Finding","Detail"],[
 ["**Conflicting evidence**","Manual therapy does not clearly produce greater hypoalgesic effects than other interventions or controls"],
 ["**What it does do**","Can improve **short-term range of motion and pain pressure thresholds**"],
 ["**Possible systemic effect**","May influence **inflammatory and cortisol levels**"],
 ["**The comparison that matters**","**Manual therapy alone (A) vs exercise alone (B) vs manual therapy AND exercise (A+B)** — the combination is the question worth asking"]],[2400,6960]));
k.push(tnote("The deck quotes the debate directly, from Mintken et al. 2018: “Due to reported marginal effect sizes in systematic reviews for manual therapy as a stand-alone intervention for musculoskeletal disorders, some physical therapists have suggested abandoning manual therapy as an intervention. Blog posts such as ‘Why I am not a manual therapist' and ‘Manual Therapy Sucks' abound on the Internet.”"));

k.push(h1("The Three Zones (Bialosky et al. 2018)"));
k.push(...fig(E+"zones.png",1465,1037,"Everything that shapes the response to a manual technique (Topic 6.2 handout)"));
k.push(detail(["Zone","What it contains"],[
 ["**Zone 1 — the interaction**","The **stimulus** itself, and how it changes stiffness, muscle tone, ROM. **Plus the provider:** their beliefs about pain, clinical experience, level of confidence. **Plus the patient:** their preference, expectations (do they think it will hurt or help), beliefs about pain, and prior experiences with providers who helped or hurt them"],
 ["**Zone 2 — the nervous system response**","How the central and peripheral nervous system respond to the stimulus, and the psychological backstory the brain brings. **Does it perceive a threat, or a benefit?** Drives **pain modulation**, **neuromuscular response** (decreased muscle activity, guarding and tone), decreased **excitability of neural tissue**, and **endocrine** influences"],
 ["**Zone 3 — the outcomes**","**Pain inhibition** — decreased pain sensitivity, increased pain inhibition, decreased pain facilitation. Plus clinical outcomes: range of motion, pain level, satisfaction, ability to exercise without inhibition"]],[2400,6960]));
k.push(tip("The finding that proves it isn't purely local: changes in pain sensitivity are observed in response to manual therapy both at the site of application AND distal to it — evidence of a centrally mediated effect."));
k.push(tnote("On the placebo objection, answered head-on: does that mean it's just a placebo? No — there are a lot of layers. But perhaps there is a layer of placebo in it. The patient perceives it's going to help, therefore it does help. And if one of you says it's a placebo, throw it out — I'd say no. If it helps, it helps. Why would we throw that out?"));
k.push(bullet("**The virtuous cycle:** manual therapy input → patient perceives or experiences **less pain** → **decreased muscle tone** → **moves better** → **increased patient confidence** → further decreased pain."));

k.push(h1("Pain Mechanisms — and Why They Change the Technique"));
k.push(detail(["Mechanism","Definition","Manual therapy implication"],[
 ["**Nociceptive**","Pain arising from actual or threatened damage to **non-neural tissue** — a muscle injury, a connective tissue tear — activating nociceptors","**Most appropriate** for within- and between-session ROM/pain re-testing. Acute inflammatory pain"],
 ["**Neuropathic**","Pain caused by a lesion or disease **of a nerve** — an impinged nerve, radiculopathy",""],
 ["**Nociplastic**","Pain from **altered nociception** without evidence of actual or threatened tissue damage — overexcitability, sometimes called **central sensitization**. Common in chronic pain","Use **less aggressive techniques** with a **graded application**, and provide **pain neuroscience education** — strongly advocated"]],[1700,4000,3660]));
k.push(tnote("The sensitivity picture: for most individuals a painful stimulus still leaves room to do a lot and tolerate quite a bit. For some, the pain response heightens and the message to the brain is that we shouldn't move at all — a high level of sensitivity leaving little room for tolerance to activity without pain."));

k.push(h1("When Should I Use It?"));
k.push(infoBox("Person-centred manual therapy (Keter et al.)",[
 "**Remember the goals** — decreasing pain, improving mobility, building therapeutic alliance. If that's one of your goals, it's almost always a good time to use it",
 "**Use it WITH something else:** educate the patient, add manual therapy, then **move** — letting their body move and perform exercise builds confidence and lets them do what they want to do with less pain",
 "**Patient considerations:** expectations, past experiences, fear of movement",
 "**Evidence:** does research support this technique for this region or condition?",
 "**Your experience:** are you qualified to do it? Have you done it before?",
 "**Exam findings:** a specific tissue under stress, hypomobility, altered movement patterns?"],C.gold,C.lightGold));
k.push(tnote("Do you need to memorise the chart? No. But you should know there are a lot of variables that go into manual therapy — it is complex, and it can have a time, a place and an application. It is one piece of the puzzle. Context is key."));

k.push(...glossary("Quick-Reference Glossary — Topic 6.2",[
 ["Joint mobilization","Passive, skilful hands-on movement of a joint to restore motion and reduce pain"],
 ["HVLAT","High velocity, low amplitude thrust — manipulation"],
 ["Non-thrust","Grades I–IV oscillatory or sustained mobilization without a thrust"],
 ["R1 / first barrier","The onset of tissue resistance at the end of available joint play"],
 ["R2 / second barrier","The anatomical limit — as far as the joint can go"],
 ["Open-packed position","Greatest mobility, least passive tension; where assessment and initial treatment happen"],
 ["Close-packed position","Least mobility, greatest congruency; sometimes used for provocation testing"],
 ["Therapeutic alliance","Collaboration, warmth and support between patient and therapist; correlated with adherence and outcome"],
 ["Nociceptive pain","Pain from actual or threatened non-neural tissue damage"],
 ["Neuropathic pain","Pain caused by a lesion or disease of the somatosensory nervous system"],
 ["Nociplastic pain","Pain from altered nociception without identifiable tissue damage; central sensitization"],
 ["Pain neuroscience education","Teaching the patient about the biology of their pain as an intervention"]]));
k.push(pageBreak());

/* ─────────────────────────── TOPIC 6.3 ─────────────────────────── */
k.push(banner("TOPIC 6.3","Manual Therapy for Joint Mobility"));
k.push(spacer());
k.push(body("Objectives: apply arthrokinematic concepts to joint mobilization; identify indications, contraindications and precautions; describe different procedures; and select an appropriate manual therapy intervention to achieve a treatment goal."));

k.push(h1("1. Types of Joint Mobilization"));
k.push(detail(["Type","Description"],[
 ["**Self- or auto-mobilization**","Self-treatment with the patient's own hands or devices to apply joint traction or glides and direct a stretching force to the joint capsule"],
 ["**Mobilization with movement (MWM)**","Mobilization applied by the therapist while the **patient actively moves** into end-range physiological movement, with **overpressure applied**"],
 ["**Muscle energy (MET)**","An active **isometric contraction** used to cause the desired accessory motion at the joint while the PT stabilises the segment with the distal muscle attachment. *Positive effects likely due to the neurophysiology of muscle contraction (Fryer G. Int J Osteopath Med. 2011;14:3–9)*"]],[2600,6760]));

k.push(h1("2. Levers Matter"));
k.push(compare("PASSIVE-ANGULAR STRETCHING","JOINT-GLIDE STRETCHING (mobilization)",
 ["Uses force through the **bony lever** to stretch the capsule","Produces **roll without slide**, or with insufficient slide","**Increases compression and localised stress** at the joint surface in the direction of roll","Torque at the joint **increases with the length of the lever arm**"],
 ["Uses **accessory motion (slide)** to stretch the capsule","**Short lever** — force applied close to the joint","**Graded** mobilization, selectively applied to tissue","Slide directed **along the joint surface**, which **limits compression**"],
 C.red,C.green,C.lightRed,C.lightGreen));

k.push(h1("3. Benefits, Indications, Contraindications"));
k.push(bullet("**Benefits:** synovial fluid movement for **nutrient transport** to articular cartilage and fibrocartilaginous structures such as menisci · maintaining **extensibility and tensile strength** of tissues · restoring and maintaining **afferent nerve impulses** from joint receptors, which covers **proprioception, muscle tone and pain**."));
k.push(detail(["Indication","Mechanism","Grades"],[
 ["**Pain, muscle guarding, spasm**","Neurophysiological — **gate control theory of pain**. Mechanical — synovial fluid motion","**Grade I** primarily"],
 ["**Reversible joint hypomobility**","Elongate tight connective tissue (stretch), progressively","**Grades III–IV**"],
 ["**Functional immobility**","Use when the patient cannot move — **prevention of deterioration**",""]],[2600,4200,2560]));
k.push(compare("CONTRAINDICATIONS","PRECAUTIONS — EXTREME CARE",
 ["**Hypermobility** — no stretching; risk of **necrosis of ligaments or capsule**, and painful hypermobility","**Joint effusion** — no stretching, the capsule is already stretched with fluid. **If effusion increases after mobilization, back off**","**Inflammation** — no stretching"],
 ["Malignancy","Bone disease observed on x-ray","**Unhealed or non-union fracture**","Excessive pain","Hypermobility in **adjacent** joints — take care to stabilise","**Total joint replacements** — the anatomy is different","Newly formed scar tissue, or weakened tissue","Systemic connective tissue disease — RA, scleroderma","Elderly adults with weakened connective tissue"],
 C.red,C.gold,C.lightRed,C.lightGold));

k.push(h1("4. Technique Variables"));
k.push(compare("OSCILLATION","SUSTAINED",
 ["**Pain management** — grades I, II","Maintain available range — grade II"],
 ["**Longer holds → creep and plastic deformation** effects — grades III, IV","Maintain available range — grade II"],
 C.blue,C.purple,C.lightBlue,C.lightPurple));
k.push(infoBox("Position matters",[
 "The **patient and the joint must be relaxed**",
 "**Assess joint play and initiate treatment in the loose-packed position**",
 "**Progressively position the joint closer to end range** as the goal shifts toward increasing end-range motion",
 "**Firmly stabilise the proximal segment** before mobilising — apply force skilfully and specifically"],C.teal,C.lightTeal));
k.push(infoBox("Direction matters",[
 "Apply force **close to the joint surface** — this needs anatomical knowledge",
 "**Treatment plane:** perpendicular to a line running from the joint's axis of rotation to the middle of the **concave** articular surface",
 "**Glides: parallel** to the treatment plane. **Distractions: perpendicular** to the treatment plane",
 "**Move the entire bone** — without swinging, rolling, or using it as a lever",
 "*Refer to Figure 5.11 in Kisner & Colby*"],C.blue,C.lightBlue));

k.push(h1("5. The Three Lab-Skill Demonstrations"));
k.push(detail(["Skill","Setup and execution"],[
 ["**Glenohumeral inferior glide**","**Support the whole upper extremity** — as much contact as possible, hand and forearm against the patient's. Position in slight **horizontal abduction**. Take a **C grip** with the hand **just above the AC joint** and glide inferiorly. **Use your body, not just your hand** — lean into it. In neutral this doesn't treat toward end range, and only in abduction — **to improve flexion, bring them into more flexion and drop your body down** rather than leaning forward, get a soft tissue lock, and glide the humerus inferiorly. Now you can treat closer to end range at whatever grade you'd normally use"],
 ["**Talocrural posterior talar glide**","**To improve dorsiflexion.** Towel between you and your thigh, use your **thigh to brace the foot** and the **table to stabilise the tibia and tib-fib joint**. **Web space right over the talus**, lined up square, force **straight down**. You can work in the open position, but ideally **move into the range you want to improve** — more dorsiflexion, glide still posterior. **If you see the anterior tib kicking in, they need to relax more.** Keep your forearm in the vector of your force"],
 ["**Dorsiflexion mobilization with movement**","**Posterior tibial glide in open chain is an ANTERIOR glide of the tibia in closed chain** — so you assist that anterior tibial glide. Towel behind the ankle, **MWM belt behind the ankle above the calcaneus**, and **block the talus with your web space**. Sit back to pull the tibia anteriorly as the patient moves into dorsiflexion. If the patient isn't safe on a table, have them **stand with the foot on a stool**. **Check in — the belt can cut into the heel.** Lock your elbow so you're not overstraining your arm, and go through full range"]],[2100,7260]));
k.push(tip("The MWM entry is the one to reason through rather than memorise. It is the open-chain/closed-chain reversal from Module 5 applied directly to a technique: same joint, same goal, opposite glide direction, because a different bone is moving."));

k.push(...glossary("Quick-Reference Glossary — Topic 6.3",[
 ["Auto-mobilization","Patient-applied traction or glide using their own hands or a device"],
 ["MWM","Mobilization with movement — therapist glide sustained while the patient actively moves"],
 ["MET","Muscle energy technique — isometric contraction used to produce accessory motion"],
 ["Passive-angular stretching","Capsular stretch through a long bony lever; increases joint compression"],
 ["Joint-glide stretching","Capsular stretch via accessory slide through a short lever; limits compression"],
 ["Treatment plane","Plane perpendicular to a line from the axis of rotation to the middle of the concave surface"],
 ["Gate control theory","Non-noxious input closing the neural gate to nociceptive input"],
 ["Creep","Progressive deformation under sustained load — the target of sustained grade III–IV holds"],
 ["Joint effusion","Fluid accumulation within the joint capsule"]]));
k.push(pageBreak());

/* ─────────────────────────── TOPIC 6.4 ─────────────────────────── */
k.push(banner("TOPIC 6.4","Soft Tissue Mobilization"));
k.push(spacer());
k.push(body("Objectives: define soft tissue mobilization and describe its indications and contraindications; identify the different types and applications; describe its treatment goals."));
k.push(...fig(E+"stmwhat.png",1882,1021,"The tissues treated and the goals of treating them (Topic 6.4 handout)"));

k.push(h1("1. What It Is"));
k.push(compare("TISSUES TREATED","TREATMENT GOALS",
 ["Skin","Muscle","Tendon","Ligament","Fascia","Synovium"],
 ["**Decrease muscle tension**","**Improve myofascial mobility**","**Reduce scar tissue**","**Improve nerve mobility**","**Improve vascularity**","**Decrease pain**"],
 C.blue,C.green,C.lightBlue,C.lightGreen));
k.push(detail(["Delivery","Techniques"],[
 ["**Hands-on**","Swedish massage · myofascial release"],
 ["**Instrument assisted (IASTM)**","Graston · Gua Sha"],
 ["**Self-massage**","Foam rolling · massage gun"]],[2600,6760]));
k.push(tnote("A short history the deck includes: Egyptian paintings depict massage from 2500 BCE, along with reflexology. Gua Sha is instrument-assisted massage from early Chinese history, often worked in 'medians'. And in the 1700s, early massage therapists were called 'rubbers'."));

k.push(h1("2. How It Works"));
k.push(bullet("Introduce **controlled microtrauma** · **hydration of connective tissues** · **plastic deformation and elongation** of connective and scar tissue · improving **local tissue vascularity** · **stimulation of local nerve fibres**."));

k.push(h1("3. Indications, Contraindications, Precautions"));
k.push(detail(["Indications","Contraindications","Precautions"],[
 ["Pain","**Open wound**","Acute inflammation"],
 ["Scar tissue","**Infection**","Cancer"],
 ["Soft tissue restriction / inextensibility","**Lymphedema**","Severe varicose veins"],
 ["Trigger points","**Deep vein thrombosis (DVT)**","Arteriosclerosis"],
 ["Effusion","","Pregnancy"],
 ["Increased muscle tone","","Hypermobility"],
 ["Sensitization","","Bleeding disorder · sensitization"]],[3200,3200,2960]));
k.push(infoBox("Application requirements",[
 "**Parameters follow FITT-VP** — dependent on the treatment and the patient, relative risks and benefits, patient tolerance, and the treatment goal",
 "**Did I make a meaningful change?** (pain, ROM) — the same re-test discipline as everything else in this course",
 "**Must have patient consent**",
 "**Must drape appropriately — only leave the treatment area exposed**"],C.gold,C.lightGold));
k.push(compare("PETECHIAE","ERYTHEMA",
 ["Small spots of **bleeding under the skin**"],
 ["**Redness of skin** caused by increased blood flow in superficial capillaries"],
 C.red,C.gold,C.lightRed,C.lightGold));

k.push(h1("4. Swedish Massage — the Five Strokes"));
k.push(...fig(E+"swedish.png",2008,1165,"The five Swedish massage strokes and what the technique achieves (Topic 6.4 handout)"));
k.push(bullet("**Outcomes:** pain reduction · reduced stiffness · promotes relaxation · improved quality of life. *(Harris et al. 2010; Barreto et al. 2017; Yuan et al. 2015)*"));
k.push(detail(["Stroke","Description","Purpose"],[
 ["**Effleurage**","**Superficial gliding strokes** — long, broad movements","Spreads lotion · **desensitises tissue** · **“scanning”** to evaluate the tissue"],
 ["**Petrissage**","**Deep tissue mobilization**, typically between thumb and forefinger — kneading, rolling, lifting",""],
 ["**Friction**","See transverse friction below",""],
 ["**Tapotement**","Percussive strokes",""],
 ["**Vibration**","Oscillatory strokes",""]],[1700,4200,3460]));
k.push(detail(["Technique","Detail"],[
 ["**Deep tissue / compression**","Applies **greater pressure to deeper tissues**, typically with a **more pointed** contact — elbow, thumb. **May be less comfortable** for the patient. Often used for **trigger point release**"],
 ["**Trigger points**","**Hyperirritable spots in a taut band of skeletal muscle** that produce **local and referred pain**. Often accompany chronic musculoskeletal disorders. Trigger-point pain is reduced with massage treatment — **application of direct pressure**. *(Alvarez et al. 2021; Morosaka et al. 2017)*"],
 ["**Transverse friction**","Typically used for **smaller areas such as tendons**. Promotes **local microtrauma and mobilization of collagen fibres**. Mobilization is **perpendicular to the tissue direction**. The **Cyriax technique**"],
 ["**IASTM**","Instrument-assisted soft tissue mobilization — Graston, Gua Sha"],
 ["**Cupping**","Dates back to the Egyptians and Macedonians"],
 ["**Foam rolling**","Beneficial effects as a **warm-up**"]],[2200,7160]));
k.push(tip("PhysioU examples named in the deck for practice: adductor soft tissue mobilization, cervical paraspinals soft tissue mobilization, gastrocnemius soft tissue mobilization."));

k.push(...glossary("Quick-Reference Glossary — Topic 6.4",[
 ["Soft tissue mobilization","Manual or instrument-assisted treatment of skin, muscle, tendon, ligament, fascia and synovium"],
 ["Effleurage","Superficial long gliding strokes; used to spread lotion, desensitise and scan tissue"],
 ["Petrissage","Kneading, rolling and lifting between thumb and forefinger"],
 ["Tapotement","Rhythmic percussive strokes"],
 ["Transverse friction","Perpendicular cross-fibre technique for tendons; the Cyriax technique"],
 ["Trigger point","Hyperirritable spot in a taut band of skeletal muscle producing local and referred pain"],
 ["IASTM","Instrument-assisted soft tissue mobilization — Graston, Gua Sha"],
 ["Petechiae","Small spots of bleeding under the skin"],
 ["Erythema","Skin redness from increased superficial capillary blood flow"],
 ["Myofascial release","Sustained hands-on pressure into fascial restriction"]]));

k.push(linkBox("📚 Reading and references for Module 6",[
 ["Kisner & Colby — Chapter 5",null,"— required for Topic 6.3; used in lab and the video assignments"],
 ["Kisner & Colby Figure 5.11",null,"— the treatment plane diagram"],
 ["Legaspi & Edmond. J Orthop Sports Phys Ther. 2007;37(4):169–78",null,"— lumbar coupled motion caution"],
 ["Bialosky et al. 2018",null,"— the three-zone model of manual therapy mechanisms"],
 ["Mintken et al. 2018 · Cook et al. 2023 · Keter et al.",null,"— the manual therapy debate and person-centred framework"]],C.gold));

build(k,"/home/claude/out/Module6_SpineMechanicsManualTherapy_StudyNotes.docx");
