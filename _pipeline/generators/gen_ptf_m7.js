const L = require('/home/claude/notes_lib.js');
const {C,h1,h2,body,bullet,tnote,tip,compare,detail,infoBox,banner,glossary,fig,pageBreak,spacer,cover,build,linkBox} = L;
const E="/home/claude/emb23/";
const k=[];

k.push(...cover("Physical Therapy Fundamentals (DPTH 6211)","Module 7: Patient Management Framework, Documentation, the ADA & Environment",
 "Topics: 7.1 Patient Management Framework • 7.2 Patient Examination (subjective, objective, evaluation) • 7.3 Documentation / SOAP Note • 7.4 ADA & Architectural Barriers",
 ["Dr. Bartley carries six of the seven lectures; Dr. Thomas takes the ADA topic — watch them in your own Canvas module",
  "This is the biggest module in the course: seven lectures, two journal readings, a documentation assignment, and the final-exam concept list",
  "The audio still says “Week 1” and “Week 2” — these lectures were originally split across two weeks and Canvas now groups them all in Module 7",
  "The full Final Exam Concept List is reproduced at the end of these notes — it covers the WHOLE course, not just this module"]));

// ===== 7.1 =====
k.push(banner("TOPIC 7.1","The Patient/Client Management Framework"));
k.push(spacer());
k.push(h1("1. How Patients Reach You"));
k.push(bullet("**Direct access** = the legal ability for a PT to perform an examination and/or carry out treatment WITHOUT an outside referral. Every state has some form of it — some unrestricted, most with provisions, a few more limited. Washington's provisions, as an example: providing a foot/ankle orthosis or prosthetic requires an authorized provider's referral, and the scope language explicitly requires referring out when red flags appear. **Look up your own state's provisions before you practice there.**"));
k.push(detail(["Access route","What it looks like"],[
 ["**Direct access / self-referral**","The patient comes straight to you"],
 ["**Other providers**","Physicians, chiropractors, nurse practitioners, naturopaths — wherever state law authorizes them to refer"],
 ["**Other physical therapists**","A colleague refers for your niche — the low-back-pain patient whose evaluation reveals a pelvic-health component, and you hold that certification"]],[2400,6960]));
k.push(detail(["Once they're yours","What it means"],[
 ["**Direct provider**","You supervise the plan of care through a typical PT episode"],
 ["**Consultation**","You advise, or you send them to someone who does — the anxious patient referred to a counselor because it affects their ability to participate and change"],
 ["**Co-management**","Concurrent care with another provider — trauma patient seeing you for spine while a certified hand therapist handles the wrist fractures"],
 ["**Referral out**","You're no longer directly involved. This is where medical screening leads"]],[2400,6960]));
k.push(h1("2. The Six Elements of the Model"));
k.push(...fig(E+"pcm_elements.png",1400,795,"Examination → Evaluation → Diagnosis + Prognosis → Intervention → Outcomes, with referral/consultation branching off evaluation and the feedback loops running back up (Topic 7.1 deck)"));
k.push(detail(["Element","What happens"],[
 ["**Examination**","Data gathering: patient history, systems review, tests and measures. Often leads to a diagnostic classification. FIRST place you may identify the need for consultation or referral"],
 ["**Evaluation**","What you DO with the data — interpret and integrate it. Clinicians use “exam” and “eval” interchangeably; for this course they are different things"],
 ["**Diagnosis**","Organizing exam data into clusters, syndromes, or classifications WITHIN PT scope — cervical radiculopathy, Parkinson's, shoulder impingement syndrome, thoracic outlet syndrome. Based on things we can change"],
 ["**Prognosis**","Expected optimal level of improvement, the time required to get there, and the frequency/duration of the plan"],
 ["**Intervention**","Methods and techniques to produce change — and they must be **matched** to the diagnosis and prognosis. You don't apply interventions blindly off a diagnostic label"],
 ["**Outcomes**","Results across pathology, impairments, limitations, disability, resources, and satisfaction — the feedback loop that answers: continue, discharge, or refer?"]],[2000,7360]));
k.push(h1("3. Models of Disablement"));
k.push(bullet("The older **NAGI** scheme (pathology → impairment → functional limitation → disability) gave way to the **ICF**: health condition → body function and structure **impairments** → **activity limitations** (day-to-day: walking, sitting, feeding yourself, driving) → **participation restrictions** (those same activities embedded in life roles — your job). What the ICF adds is **environmental and personal factors**: two patients can carry the same shoulder impingement and near-identical impairments, and be limited in completely different ways."));
k.push(h1("4. HOAC II — the Clinical Model"));
k.push(body("Hypothesis-Oriented Algorithm for Clinicians II (Rothstein et al. — your required reading). Patient-centered, and it speaks the same language as the ICF and the Guide to PT Practice."));
k.push(...fig(E+"hoac1.png",1400,795,"HOAC II Part 1 — note the PIPs list sits at ACTIVITY and PARTICIPATION level, and consultation branches out early (Topic 7.1 deck)"));
k.push(detail(["HOAC II step","What it demands"],[
 ["Collect initial data","Referral information, the medical record, observation BEFORE any formal evaluation, and the interview"],
 ["**Generate the PIPs list**","**Patient-Identified Problems** — described solely in patient-oriented terms of what they can and cannot do. These are activity limitations and participation restrictions, **NOT impairments**"],
 ["Formulate examination strategy","Built on the initial hypotheses from available data and the nature of the PIPs (consultation here if needed)"],
 ["Conduct exam, analyze, refine","Carry out additional procedures needed to confirm or deny hypotheses"],
 ["Identify **non-patient-identified problems**","The impairments — plus, as a DPT, the problems you can ANTICIPATE from what's happening now"],
 ["Hypothesis generation","A hypothesis is simply another form of diagnostic label"],
 ["**Refine the problem list**","Most problems continue unmodified. Identify problems belonging to other providers, remove them, refer, and document the referral. Annotate problems not amenable to full resolution. Change PIPs only after discussion with the patient and with proper documentation"],
 ["**Establish goals for each problem**","Measurable target level of function WITH a temporal element. For anticipated problems, the goal states what will be AVOIDED. Always patient-centered, always tied to current or future quality of life"],
 ["Establish criteria → plan → tactics","“Tactics” is HOAC's word for interventions"],
 ["Outcomes → loop back","Re-evaluate the data: refer out, or generate a new diagnosis/prognosis/plan, then re-check outcomes"]],[2500,6860]));
k.push(...fig(E+"hoac2.png",1400,795,"Refining the problem list and writing goals — the language here is exactly what your documentation needs to reflect (Topic 7.1 deck)"));
k.push(bullet("**Part 2** runs two parallel flow sheets — one for existing problems, one for anticipated problems — asking the same three questions at each pass: did I gather the necessary information, are the findings consistent, and did I produce change?"));
k.push(linkBox("\u{1F4D6} Required reading — Topic 7.1",[
 ["Rothstein et al. The Hypothesis-Oriented Algorithm for Clinicians II (in this Drive folder)","",""],
 ["Fairchild 6e Ch 1: Preparation for Patient Care Activities, pp. 8–11","",""]]));
k.push(...glossary("Topic 7.1 — Quick-Reference Glossary",[
 ["Direct access","Examine/treat with no outside referral — every state has some form"],
 ["The six elements","Examination · Evaluation · Diagnosis · Prognosis · Intervention · Outcomes"],
 ["Exam vs eval","Gathering the data vs interpreting it"],
 ["ICF adds","Environmental and personal factors"],
 ["Activity vs participation","Day-to-day doing vs the life role it sits inside"],
 ["PIPs","Patient-Identified Problems — the patient's own words, never impairments"],
 ["Non-PIPs","The impairments you find, plus the ones you anticipate"],
 ["Tactics","HOAC's word for interventions"]]));
k.push(pageBreak());

// ===== 7.2 =====
k.push(banner("TOPIC 7.2","The Patient Examination",C.teal));
k.push(spacer());
k.push(h2("A. The Subjective Exam"));
k.push(tnote("Dr. Bartley's headline, from a 2008 article: 80% of the information you need to make a diagnosis is contained in the subjective examination. It isn't just the patient telling their story — done well, it front-loads the diagnosis."));
k.push(h1("1. Three Terms People Confuse"));
k.push(detail(["Term","Definition"],[
 ["**Differential diagnosis**","Differentiating problems of a serious nature from those that are not, using the history and physical exam — MSK vs non-MSK, systemic vs joint-specific. Running constantly in your head"],
 ["**Medical screening**","The process of confirming or ruling out the appropriateness of PT intervention, the need for referral, and the presence of red-flag risk factors. The question is narrower: **is this my patient, right now?**"],
 ["**Red flags**","Signs or symptoms that may warrant immediate communication with the referring provider, or referral/consultation to a practitioner the patient hasn't seen yet"]],[2300,7060]));
k.push(infoBox("\u{1F6A6} The stoplight",[
 "**GREEN** — appropriate for PT. Continue examining, evaluate, treat",
 "**YELLOW** — continue PT, but note a probable need for further consultation: difficulty coping, anxiety/depression history, progressive weakness, circulatory issues, dizziness, **kinesiophobia** (fear of movement). Doesn't rise to stopping",
 "**RED** — stop, at least in this moment, and refer. Non-musculoskeletal or non-mechanical origin, systemic pathology outside our scope, or a true medical emergency"],C.gold,C.lightGold));
k.push(bullet("**Why we screen:** patients are sicker than they've ever been — more comorbidities, longer lives, more extensive histories. They progress through rehab faster, disease processes progress faster, and direct access means we are often the first provider anyone has seen. If a patient tells you they've been feeling depressed or unable to enjoy things, that IS the reason to screen for a major depressive episode."));
k.push(bullet("**Red flags to memorize:** trauma · fever · chills · unremitting night pain · bilateral symptoms · unintentional weight loss or gain · bowel or bladder dysfunction · recent infection · unexplained lower-extremity swelling. Many arrive through a patient-reported questionnaire — **your job is to CONFIRM responses, not assume them.** Example: after ACL reconstruction you expect significant local swelling; swelling inconsistent with that expectation may mean infection and warrants a call back to the surgeon. Red flags sort into three buckets: requiring immediate medical attention · requiring precautionary examination before proceeding · requiring further physical testing and differential diagnosis."));
k.push(tip("“When you hear hoofbeats, think horses, not zebras — but if you never look up, you won't see the zebra the one time it comes by.” Ask the questions consistently and have a process, whatever your setting."));
k.push(h1("2. Subjective Exam Flow (six steps)"));
k.push(detail(["Step","What you do"],[
 ["1","Review baseline information / chart review — outpatient paperwork or the EMR. General health status, recent imaging, surgical and medical history, current medications. **Stay aware of bias:** what you read pre-loads assumptions"],
 ["2","Establish rapport — open the lines of communication, clarify expectations for the session and the whole plan of care"],
 ["3","Gather general information — patient profile, chief complaints, body chart, aggravating and easing factors, 24-hour behavior"],
 ["4","Analyze information and generate hypotheses"],
 ["5","Gather specific information — onset, progression, previous treatment; refine the hypotheses"],
 ["6","Plan the objective exam"]],[700,8660]));
k.push(bullet("**Body chart — problem areas:** location of each area of pain/symptoms · quality or type · depth · frequency · relationships between areas · clearing relevant areas. It records where symptoms are **NOT**, which is what stops you assuming or omitting. Quantify pain with the **NPRS (0–10)** or a **VAS** so you can track it objectively. (A blank body chart is in this Drive folder.)"));
k.push(h1("3. SINSS"));
k.push(detail(["Letter","Refers to","Examples"],[
 ["**S**everity","The intensity of symptoms and the extent they limit normal activity — rated minimal, moderate, severe","0–10 NPRS · functional statements: “I'm unable to bend over and pick something up off the floor because of the pain” vs “I can touch my toes but it hurts a little”"],
 ["**I**rritability","The ease with which symptoms are produced AND the time they take to settle","Symptom onset · symptom relief"],
 ["**N**ature","The type and extent/degree of injury or illness","Type: aching, throbbing, burning, stabbing, sharp, dull, deep, superficial · Behavior: radiating, referred, local · Tissue/injury: sprain, DJD, OCD, fracture, osteoporosis, trauma, neural tension"],
 ["**S**tage","Where the condition sits in time","Acute · sub-acute · chronic · acute-on-chronic"],
 ["**S**tability","How the symptoms are changing","Better, worse, or the same?"]],[1200,3200,4960]));
k.push(bullet("The subjective closes with the **systems review** — musculoskeletal, neurological, cardiopulmonary, integumentary, cognitive — which sets up the objective exam."));
k.push(h2("B. The Objective Exam"));
k.push(tnote("“Don't touch your patient — state first what you see.” The objective exam starts before you introduce yourself: posture, willingness to move, how they walk, mood, obvious pain. Cultivate the powers of observation."));
k.push(h1("4. Two Terms That Run Your Reassessments"));
k.push(compare("Comparable sign","Asterisk (*) sign",
 ["The physical-exam finding related to the chief complaint that YOU reproduce during the exam","Patient reports pain reaching into a cabinet → active shoulder flexion reproduces familiar pain","That's your comparable sign — something you can return to"],
 ["Clinical indicators that are **measurable, reproducible, and relevant** to the patient's condition, used to reassess and measure progress","**Objective asterisk:** the comparable sign, shoulder ROM","**Subjective asterisk:** what they report — “does it still happen? at the same intensity? after five dishes instead of one?”"],
 C.teal,C.purple,C.lightTeal,C.lightPurple));
k.push(h1("5. Goals and Organizing Rules"));
k.push(bullet("**Goals:** find the tissue or systems involved · produce comparable signs (reproduce symptoms — “make the patient squeak”) · look for patterns of restriction and limitation · confirm or rule out the working hypothesis. Think **“if this, then what”** — if the patient tells me X, what do I expect to find, or not find?"));
k.push(detail(["Rule","Why"],[
 ["**Be specific — no shotgun approach**","A good subjective tells you which tests will rule things in or out. Don't run every knee test you know just because the knee hurts"],
 ["**Minimize position changes**","Group tests by patient position — seated (movement, strength, neuro, vitals) then standing (functional tests). Don't bounce them sit → stand → prone → stand → sit. This is an irritability decision"],
 ["**Get baseline symptoms first**","You know their worst day from the history. What's happening RIGHT NOW? Otherwise you can't tell what your testing changed"],
 ["**Test the unaffected side first**","It teaches you what normal looks like for THIS patient — movement, strength, function"],
 ["**Painful and provocative tests LAST**","Flare them to 7/10 early and every subsequent test happens under 7/10 pain — you'll harvest false positives"],
 ["**Set expectations afterward**","Patients often get sore. Tell them what to expect without biasing them into believing they'll be wrecked for two days"]],[2600,6760]));
k.push(h1("6. Components, System by System"));
k.push(bullet("**Observations · systems review · vital signs · functional tests · movement/ROM · joint mobility · neurological screening · special tests · clearing tests · palpation.** Observation covers general appearance (disheveled? obvious pain?), willingness to move, assistive devices, obvious deformity or posture, atrophy, inflammatory signs, bracing/slings, ecchymosis, skin lesions, breathing devices — all of it trackable over the plan of care."));
k.push(detail(["System","What you screen / test"],[
 ["**Cognitive**","Communication, affect, language, learning style, orientation to person/place/time. Escalate to a specific screen (e.g. Oxford Cognitive Screen — praxis, memory, attention, numbers and calculation) only when the interview raises a question"],
 ["**Integumentary**","Skin PLUS arterial and venous systems — is blood and oxygen reaching tissue? Scars (disrobe enough to see a fresh surgical scar), inflammation or infection signs, pressure ulcers"],
 ["**Cardiopulmonary**","HR, RR, BP, edema — **required by the Guide to PT Practice for every patient**"],
 ["**Neurological**","Gross coordinated movement, peripheral and cranial nerve integrity, UMN and LMN signs, sensation, deep tendon reflexes, muscle tone"],
 ["**Musculoskeletal**","The most frequently tested, usually alongside neuromuscular: movement, ROM, strength, anthropometrics"]],[1900,7460]));
k.push(h1("7. Test Logic"));
k.push(bullet("Start with **functional / “show me” tests** (they said stairs hurt — have them show you). Then **clearing tests**, built on **regional interdependence**: shoulder pain → clear the cervical spine and elbow; knee pain → examine the hip and foot/ankle. Then **AROM** (their own movement — quality, range, response; goniometer or inclinometer), **PROM** (inert tissue; end feel), and **resisted isometric testing in mid-range** to minimize inert-tissue stress."));
k.push(detail(["Finding","Interpretation"],[
 ["Strong/weak × painful/painless on resisted isometrics","The four-way grid pointing to contractile vs neurological problems"],
 ["Pain on passive STRETCH","**Contractile** tissue lesion"],
 ["Pain in the SAME direction actively and passively","**Non-contractile** lesion"],
 ["Greater passive than active movement, painless weakness","**Neurological** lesion"],
 ["**LMN** testing (peripheral to cord)","Resisted isometrics, reflexes, dermatomal sensory testing"],
 ["**UMN** testing (cord to brain)","Pathological reflexes — **Babinski, clonus** — and balance tests such as **Romberg**"]],[3400,5960]));
k.push(bullet("**Passive accessory joint mobility (joint play)** tests the accessory motion required for normal physiologic motion — classified normal, hypomobile, or hypermobile; painful or painless. **Palpation goes LAST** — it confirms or reinforces the diagnosis by identifying the affected tissue, and it needs patient relaxation, anatomical knowledge, and careful pressure. Additional diagnostic studies (radiographic, lab, electrodiagnostic) may further inform findings or trigger a referral."));
k.push(h2("C. The Evaluation Process"));
k.push(h1("8. Three Steps, and the PT Diagnosis"));
k.push(detail(["Step","Content"],[
 ["**1. Analyze data**","Integrate subjective and objective findings; establish a **working diagnosis (hypothesis)**; build the problem list — impairments plus activity limitations and participation restrictions, mapped to the ICF"],
 ["**2. Determine prognosis**","The level of optimal improvement obtainable from intervention AND the time required. Rated **poor / guarded / fair / good / excellent**"],
 ["**3. Formulate the plan of care**","Specify interventions · duration and frequency · goal setting · outcome measures · modify as the case progresses (or fails to)"]],[2200,7160]));
k.push(compare("MD diagnosis","PT diagnosis",
 ["“Left hip osteoarthritis”","Gives no context for the individual and no guidance for intervention"],
 ["“Left hip osteoarthritis with associated mobility deficits causing difficulty with ambulating >200 feet and limited ADL performance”","Identifies the limitations of function and quality of life within THIS person's context — which is what you can actually change"],
 C.gold,C.teal,C.lightGold,C.lightTeal));
k.push(bullet("Often the PT diagnosis is a **diagnostic syndrome or classification** rather than a pathoanatomical label — upper crossed syndrome, or the treatment-based classification systems for low back pain you'll meet in the MSK courses."));
k.push(infoBox("\u{1F501} The treatment-decision algorithm",[
 "**Do the findings make sense?** Yes → develop the plan, treat, set goals, assess change over time with outcome measures",
 "**No** → reiterate: review the history further, examine the system or movement component you skipped, consider consultation. Then ask again",
 "**Still no** → is there a colleague with more experience in a specialty area? Or is this patient not appropriate for PT — or for your level of expertise?"],C.blue,C.lightBlue));
k.push(linkBox("\u{1F4D6} Required reading + optional listening — Topic 7.2",[
 ["Petersen et al. Severity, Irritability, Nature, Stage, and Stability (SINSS), 2021 — in this Drive folder","",""],
 ["EIM podcast: The Importance of the Subjective Examination (Dr. Chris Dickerson) — optional","https://evidenceinmotion.com/clinical-podcast-subjective-exam-dr-chris-dickerson/",""]]));
k.push(...glossary("Topic 7.2 — Quick-Reference Glossary",[
 ["80%","Share of diagnostic information that lives in the subjective exam"],
 ["Screening vs differential dx","Is this my patient? vs how serious is this?"],
 ["Green / yellow / red","Proceed · proceed with consultation in mind · stop and refer"],
 ["SINSS","Severity · Irritability · Nature · Stage · Stability"],
 ["Comparable sign","The finding YOU reproduce that matches their complaint"],
 ["Asterisk sign","Measurable, reproducible, relevant — objective OR subjective"],
 ["Unaffected side first","Establishes this patient's normal"],
 ["Painful tests last","Protects every test that came before from false positives"],
 ["Regional interdependence","Why shoulder pain means clearing the neck and elbow"],
 ["Prognosis grades","Poor · guarded · fair · good · excellent"]]));
k.push(pageBreak());

// ===== 7.3 =====
k.push(banner("TOPIC 7.3","The Medical Record & Defensible Documentation",C.teal));
k.push(spacer());
k.push(h1("1. What the Record Is For"));
k.push(compare("MEDICAL uses","LEGAL uses",
 ["Chronological record of care **including the rationale** it was based on","Communication between professionals — PT, OT, SLP, physicians, psychologists, psychiatrists all write into one record","Continuity-of-care planning","Quality-improvement review, and research data (with limits)"],
 ["Evidence that proper care was given if a malpractice claim arises — **“if it wasn't recorded, it wasn't done”** (and in the EMR era the reverse is also true more often than we'd like to admit)","Evidence of injury and disability for insurance, medical retirement, civil litigation","Possible evidence in a criminal investigation","Meeting licensure and accreditation requirements"],
 C.teal,C.red,C.lightTeal,C.lightRed));
k.push(tnote("Bartley's framing: you can withdraw cash from an ATM in Antarctica without a glitch. Fall ill there, and the hospital may not be able to see your records or know what medications you're on."));
k.push(h1("2. Ownership, Storage, Access"));
k.push(bullet("Ownership varies by state — provider or hospital in some, the patient in others. **Since 2014, demonstrating “meaningful use” of EMRs has been required**; Medicare reduces payment rates for providers who don't. Paper charts survive where state retention rules predate 2014 (color-coded folders — green Medicare, red motor-vehicle accident). Retention varies: **Tennessee 10 years, Texas 7–10, Washington has no general law** and follows the medical association's 7–10 recommendation. Records for minors are often kept until adulthood plus a further period; some indefinitely. Paper needed controlled access; electronic needs individual logins — **log out when you walk away**, or a colleague's charting appears under your name."));
k.push(detail(["Setting","What's in the record"],[
 ["**Outpatient**","Physical exam results · consent forms (carrying a lot of history) · initial evaluation, follow-up, treatment and discharge notes · immunizations · labs · x-ray reports · referrals · problem list · medical history · discharge summary from the referring hospital or physician"],
 ["**Acute / subacute** (hospital, SNF)","Summary of why they were admitted · history and physical · physician assessment · progress notes · nursing notes and medication administration times · imaging and labs · orders for tests and services"]],[2400,6960]));
k.push(h1("3. HIPAA"));
k.push(bullet("**Health Insurance Portability and Accountability Act of 1996.** Sets limits on how health information is used and shared. Applies to **covered entities** — any provider, health plan, or health care clearinghouse."));
k.push(tip("The distinction to memorize: your medical record is PRIVATE but not CONFIDENTIAL. Not confidential = you don't give permission for each individual person. Private = only people who need the information may access it. Who may look: the patient (limited access; hand-carrying allowed in special conditions — and a hard copy can be left in a car, lost in an accident, dropped on the ground), authorized medical personnel who diagnose, assess, or treat you, and designated representatives (parent/guardian of a minor, power of attorney, spouse) as indicated on the consent and intake paperwork."));
k.push(h1("4. Defensible Documentation (APTA)"));
k.push(bullet("Why it matters: demonstrates compliance that care was **medically necessary**, provides an accurate historical account for legal situations, and secures reimbursement from third-party payers."));
k.push(infoBox("✅ The rules",[
 "**Black ink** (if you write anything on paper — an outcome measure to be scanned in, for example)",
 "Relevant patient statements **in quotes** — patients often say it better than you can",
 "**Facts only. No opinions.**",
 "**Standard abbreviations only** — Ch 5 of your text lists them. Many practices now prohibit abbreviations entirely because they get misread",
 "**Date and time** every entry, page, and signature",
 "Signature **plus printed name** — an illegible signature creates reimbursement and legal problems",
 "**Never delete or obliterate.** On paper: strike through, initial, rewrite. In an EMR: once it's signed, it stays",
 "Be complete and informative; use proper format; date follow-up visits",
 "**Document missed appointments and non-compliance** — critical in a workers' compensation claim",
 "**Never** unnecessary or uncomplimentary comments about a patient, their family, or another provider. If you think someone is being a jerk, the medical record is not the place"],C.green,C.lightGreen));
k.push(h1("5. The SOAP Note"));
k.push(bullet("Originated with **Dr. Lawrence Weed** to organize the (then paper) medical record. PT uses it because it maps cleanly onto the patient/client management process — documentation touches every phase of that model."));
k.push(detail(["Note type","When"],[
 ["**Initial evaluation**","Documentation of the FIRST visit of an episode of care, in any setting. (“I had three initial evals today” = three first-time patients)"],
 ["**Progress note**","The FORMAL reassessment — triggered by a change in patient status or by third-party requirements for continued authorization"],
 ["**Daily note**","Each session. Done well, it captures a reassessment every visit — but it isn't the formal progress note unless status changed significantly"],
 ["**Discharge note**","At discharge — and sometimes written WITHOUT the patient present (they transfer settings, leave early, or stop showing up), so it leans entirely on your prior documentation"]],[2200,7160]));
k.push(detail(["","Definition (sync handout)","What goes in it"],[
 ["**S**ubjective","Anything the patient **states or provides**","Chief complaints, aggravating and easing factors, functional status/activity level, direct patient quotes. Purpose: plan the objective exam, set relevant goals, track response AND **compliance** (did you try it? if not, what were the barriers?)"],
 ["**O**bjective","Anything the PT **measures or observes**","Test and measure results, observations, reassessment data: appearance and swelling/atrophy changes, ROM, MMT, special tests, vital signs, gait and transfers (level of assistance AND quality) — plus the interventions performed, usually on a flow sheet with dosage"],
 ["**A**ssessment","What does the subjective and objective information **MEAN**?","PT diagnosis (ICD-10 coded — e.g. difficulty walking), prognosis, and goals. This is where you put it all together"],
 ["**P**lan","What are you going to **do**?","Planned interventions, duration and frequency, referral or consultation, discharge planning"]],[1400,2600,5360]));
k.push(tnote("Worked Assessment from the lecture: “45-year-old female presents with low back pain secondary to movement coordination impairments and an impaired pain response, associated with an ODI score of 45% — meaning she rates herself 45% disabled. Presentation is complicated by decreased social interaction and fear of movement. Considering the patient's strong familial support system and motivation, prognosis is fair to good.” And a Plan: “Patient will receive treatment 1×/week for 4–6 weeks consisting of motor control exercises, mobility interventions, and aerobic exercise.”"));
k.push(h1("6. Goals"));
k.push(compare("SHORT-term / anticipated goals","LONG-term / outcome goals",
 ["The steps along the way to the final outcome","Usually written at the **impairment level** — change in ROM, muscle strength, flexibility, standing tolerance","They set priorities once your problem list exists"],
 ["The functional end product of the PT episode","Written in **functional terms** — reach into the cabinet to put dishes away · walk to the mailbox and back · drive to work · tolerate sitting long enough to work","You may have several"],
 C.blue,C.green,C.lightBlue,C.lightGreen));
k.push(bullet("Goals are developed **with the patient**, so they're relevant to what the patient actually wants; they direct interventions; they let you measure effectiveness on reassessment; they communicate with co-providers; and they give third-party payers the rationale that your treatment choices match this patient's needs. Write them **SMART — Specific, Measurable, Attainable, Relevant, Time-based.**"));
k.push(linkBox("\u{1F4D6} Required reading — Topic 7.3",[
 ["APTA: Physical Therapy Documentation of Patient/Client Management (guidelines PDF)","https://www.apta.org/siteassets/pdfs/policies/guidelines-documentation-patient-client-management.pdf",""]]));
k.push(...glossary("Topic 7.3 — Quick-Reference Glossary",[
 ["HIPAA","1996; covered entity = provider, health plan, or clearinghouse"],
 ["Private but not confidential","Only those who need it — but not per-person permission"],
 ["Meaningful use","EMR requirement since 2014; Medicare pays less without it"],
 ["If it wasn't recorded…","…it wasn't done"],
 ["Never delete","Strike through on paper; signed EMR entries stand"],
 ["SOAP","States/provides · measures/observes · what it MEANS · what you'll DO"],
 ["Note types","Initial eval · progress (formal reassessment) · daily · discharge"],
 ["Short vs long-term goals","Impairment level vs functional level"],
 ["SMART","Specific · Measurable · Attainable · Relevant · Time-based"],
 ["Prognosis grades","Poor · guarded · fair · good · excellent"]]));
k.push(pageBreak());

// ===== 7.4 =====
k.push(banner("TOPIC 7.4","The ADA & Architectural Barriers",C.teal));
k.push(spacer());
k.push(body("Dr. Shelene Thomas. Her framing question for students: “I've seen sidewalks changed, and I understand it's for people with disabilities — but why does a PT need to know this?”"));
k.push(h1("1. Legislative History"));
k.push(detail(["Law","Year"],[
 ["Civil Rights Act","1964"],
 ["Fair Housing and Architectural Barriers Act (amended 1988)","1968"],
 ["Section 504, Rehabilitation Act","1973"],
 ["IDEA — Individuals with Disabilities Education Act","1973"],
 ["**Americans with Disabilities Act — signed July, amended 2008 (effective 2009)**","**1990**"]],[6960,2400]));
k.push(bullet("The ADA is **federal anti-discrimination legislation** that provided enforceable prohibitions and standards banning discrimination based on disability — extending civil rights to improve employment opportunity with private-sector employers, access to public accommodations and services (including Amtrak), and access to certain telecommunications. The 2008 Amendments Act aimed to “create a clear and comprehensive national mandate for the elimination of discrimination and clear, strong, consistent, enforceable standards” by reinstating a broad scope of protection — the definition of **disability** was the central fight, and remains partly open to interpretation."));
k.push(h1("2. The Five Titles"));
k.push(detail(["Title","Covers","Detail"],[
 ["**I**","Employment","Prohibits discriminating against a qualified individual on the basis of disability alone. Once hired, the employer must accommodate a **known impairment** so the employee can achieve the same level of performance and enjoy benefits equal to a similarly situated employee without a disability"],
 ["**II**","Public transportation",""],
 ["**III**","Public accommodations","Protects full and equal access to services, facilities, accommodations, privileges of any public accommodation, binding whoever owns, leases, or operates it. Requires removal/modification of structural barriers when readily achievable without significant difficulty or expense: **ramps, wider doorways, door hardware, alternate pathways, grab bars, accessible parking, wheelchair-accessible telephones and water fountains, curb cuts**"],
 ["**IV**","Telecommunications",""],
 ["**V**","Miscellaneous provisions",""]],[800,2200,6360]));
k.push(bullet("The ADA interfaces with **FMLA**, the **Occupational Safety and Health Act**, and state **workers' compensation** laws."));
k.push(infoBox("\u{1F4B0} The cost objection, answered",[
 "Sears study of **436 reasonable accommodations** at one company, 1978–1992: **69% cost nothing. 28% cost under $1,000. 3% cost more than $1,000**",
 "Extensive remodeling is usually NOT required — creativity and innovation resolve most accessibility problems",
 "The gap that motivates it: of 56.7 million non-institutionalized Americans aged 16+ with some type of disability, **41% were employed vs 79% of people without disabilities**"],C.purple,C.lightPurple));
k.push(h1("3. Environmental Assessment — Your Role"));
k.push(bullet("A residence is **accessible** if a person with a disability can function in it as independently as possible: build with universal design, or modify an existing structure — an entry ramp for steps, wall- or floor-mounted grab bars, an elevated toilet seat. **Note: health insurance does not cover durable medical equipment in the bathroom.**"));
k.push(bullet("**The assessment process:** at least one interview with the patient, family, and employer where possible · at least one site visit to the residence and/or workplace and the most frequently used community sites · complete a form for the record and a final written document containing recommendations, diagrams, photographs, or plans. Expect several sessions or visits, done with **interprofessional collaboration** — OT, social worker, even a contractor. Think broader than the home: PTs consult on factory and workplace safety, and some build whole careers there (often the mechanically minded, ex-engineer types). An employer should vet the consultant's credentials, qualifications, and past experience, and agree the expected product, timeframe, costs, and payment method up front."));
k.push(tip("For discharge planning the three that matter most are door width, ramp slope, and sidewalk width — and the room with the most challenges is almost always the bathroom. Measure and practice mobility in ALL areas of the home, or simulate the surroundings in your setting, before you send them home."));
k.push(h1("4. Fairchild Table 13.2 — Wheelchair-Accessible Home Specifications"));
k.push(detail(["Feature","Specification"],[
 ["Sidewalk width","36 in minimum; slope no greater than for a ramp; smooth, firm surface"],
 ["**Door width**","**32 in minimum, 36 in preferable**; clearance and space for the chair to open the door and enter; pocket doors conserve space and ease emergency access"],
 ["Hall width","32 in minimum, 40 in preferable"],
 ["Threshold height","Absent, or 0.5 in maximum"],
 ["Electrical outlets","18 in from the floor; ground-fault interrupting"],
 ["Electrical controls","48 in maximum from the floor, 40 in optimal; rocker-type switch"],
 ["Telephone access","18 in from the floor; jacks in every room"],
 ["Floor surface","Firm (wood, tile, linoleum); slip resistant; ≤0.5 in pile carpet with firm underlay"],
 ["Door handles","36 in maximum from the floor; lever type"],
 ["Window height","36 in from the floor; vertical sliding or crank operation"],
 ["**Ramp**","**36–48 in wide; no more than 1-inch rise for each FOOT of length**; firm, slip-resistant surface; ramps longer than 30 feet need a direction change and may need a landing area"],
 ["Access clearance","30 × 48 in in front of fixtures, work areas, and appliances"],
 ["Reach zone","Comfortable reach for a seated person is 20–44 in"]],[2300,7060]));
k.push(detail(["Room","Specifications"],[
 ["**Kitchen**","U- or L-shaped floor plan · 5 × 5 ft turning radius · countertops 30–34 in (29 in minimum knee clearance) · sink 32–34 in, open front with insulated/shielded plumbing, 5–8 in depth · range 32–34 in, smooth cooktop, front controls, side-hinged oven door · cabinets within reach zone, toe kick recessed more than the normal 4 in · outlets, microwave and small appliances within the access and reach zone"],
 ["**Bathroom**","Toilet 16 in or less from the floor if a wheeled commode/shower chair is used, 18 in for a sitting transfer; 3-foot space in front and to one side · roll-in shower 30 × 60 in minimum (5 × 4 ft preferable) · regular shower 36 × 36 in with fixed seat, handheld showerhead, single-lever control · sink 34 in maximum, bowl sloping front to back · bathtub with integrated seat, waterproof floor and drain, 30 × 60 in minimum, 18 in deep · **grab bars 24–30 in long, positioned to individual need, attached to floor, wall stud, or reinforced underlay (3/4-in plywood attached to studs)**"],
 ["**Bedroom**","Bed 18–22 in from the floor, firm mattress, space for a transfer on one side · closet with sliding entry doors, rods adjustable or 48 in maximum, roll-in beneficial · dressers within the access and reach zone, D-shaped handles · room size providing free space for access, transfers, and obtaining clothing"],
 ["**Garage**","10-ft minimum height if a raised-roof van is used; 8 ft for a wheelchair lift; 5 ft for a wheelchair transfer; should have direct entrance into the house"]],[1500,7860]));
k.push(linkBox("\u{1F517} Required reading + resource — Topic 7.4",[
 ["ADA National Network — ADA overview fact sheet","https://adata.org/factsheet/ADA-overview",""],
 ["Fairchild 6e Ch 13: Americans with Disabilities Act and Environmental Assessments, pp. 333–343","",""]]));
k.push(...glossary("Topic 7.4 — Quick-Reference Glossary",[
 ["ADA","Signed July 1990; amended 2008, effective 2009"],
 ["Five titles","Employment · transportation · public accommodations · telecom · misc"],
 ["Title I","Accommodate a known impairment once hired"],
 ["Title III","Remove structural barriers when readily achievable"],
 ["Ramp rule","1-inch rise per foot of length; >30 ft needs a direction change"],
 ["Door width","32 in min, 36 preferable"],
 ["Grab bars","24–30 in, into studs or reinforced underlay"],
 ["Sears data","69% of accommodations cost nothing"],
 ["Bathroom DME","Not covered by health insurance"]]));
k.push(pageBreak());

// ===== Sync + exam =====
k.push(banner("SYNC SESSION 7 & THE FINAL","Documentation Practice and the Concept List",C.navy));
k.push(spacer());
k.push(body("The sync runs a lab debrief, final-exam prep, questions on concepts through the lab material, a cohort discussion of the documentation assignment, then breakout rooms to work on it. The handout consolidates the SOAP definitions, the six-step subjective flow, the body-chart list, all five SINSS elements, objective-exam goals and components, the three-step evaluation layout, and the MD-vs-PT diagnosis example — all of which are in the topic sections above."));
k.push(h1("The Documentation Assignment — what it asks"));
k.push(detail(["Part","Task"],[
 ["**I** (12 pts, 4 each)","Rewrite three vague history statements clearly, concisely, and professionally. The instruction that matters: **supply additional information as needed** to make each statement more informative, objective, and useful — demonstrate what you've learned, don't just rephrase"],
 ["**II** (18 pts)","Write the History portion of a note from a bag of unordered facts (33-year-old male, right wrist sprain, fell at work onto an extended wrist, transcriptionist typing up to 8 hours/day with MD limit of 4, 7/10 pain with typing, difficulty holding a fork, right-hand dominant, lives with wife, no prior splint, one multivitamin, non-smoker). **Organize and group logically** so it reads easily"],
 ["**III** (20 pts, 1 each)","Twenty short questions"]],[1400,7960]));
k.push(tnote("The assignment packet includes worked examples — a full History paragraph for a 25-year-old flight attendant with right supraspinatus tendonitis, a Systems Review block, and a deliberately thin Tests and Measures block, with the note that Tests and Measures will change dramatically as you learn more. Use the examples for STRUCTURE; the content has to be yours."));
k.push(h1("Final Exam Concept List — the whole course"));
k.push(body("50 multiple-choice questions, 75 minutes. This list is the course's own study map, reproduced from the sync-session documents."));
k.push(detail(["#","Area","What to know"],[
 ["1","Reflex testing and myotomes","Testing myotomes, dermatomes, and reflexes"],
 ["2","Vital signs assessment","Manual heart rate technique · blood pressure classifications · resting heart rate interpretation"],
 ["3","Assistance levels and transfers","Defining assistance levels (minimal, moderate, contact guard) · matching transfers to assistance level and patient condition · dependent transfer options"],
 ["4","Assistive devices and gait patterns","Device selection post-surgery (THA, TKA) · WBAT considerations · fitting walkers and crutches · 2-point, 3-point, 4-point patterns · device use during transfers and gait training"],
 ["5","Wheelchair assessments","Fit assessment (two-finger test, weight confirmation) · recommendations for different patient needs"],
 ["6","ROM and end feels","Types of end feel (empty, bone-to-bone) · purpose and documentation of ROM exercise · goniometry and proper goniometer placement"],
 ["7","Manual muscle testing","Grades and requirements for accurate testing · concentric, eccentric, isometric contractions · indications and limitations of MMT"],
 ["8","Health information privacy","HIPAA compliance scenarios · patient consent and access · storing and documenting records"],
 ["9","SOAP note documentation","The four components · requirements for accurate documentation"],
 ["10","Professional communication","Empathy and rapport · the therapeutic relationship and its impact on patient outcomes"]],[500,2200,6660]));
k.push(tip("Notice how much of that list is Modules 1–6, not this one. Modules 1–5 study notes in this Drive folder cover items 1–7 directly; items 8–10 come from this module and Module 8. Build your review around the list, not around the last thing you studied."));

build(k,"/home/claude/out/Module7_PatientManagementDocumentationADA_StudyNotes.docx");
