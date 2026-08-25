const L = require('/home/claude/notes_lib.js');
const {C,h1,h2,body,bullet,tnote,tip,compare,detail,infoBox,banner,glossary,fig,pageBreak,spacer,cover,build,linkBox} = L;
const E="/home/claude/emb32/";
const k=[];

k.push(...cover("Evidence Based Practice I (DPTH 6311)","Module 2: Concepts of Measurement",
 "Topics 2.1–2.4 + Sync Session 2 — measuring well, and finding the evidence to check yourself against",
 ["Dr. Kimberly Castle, PT, PhD, PCS records Topics 2.1–2.3. Topic 2.4 is the search-skills lecture",
  "**This module is the statistical backbone of the whole course.** Reliability, validity, SEM, MDC, MCID, sensitivity and specificity all get introduced here and are assumed from Module 3 onward",
  "**File-naming warning:** Topic 2.4's transcript is filed under “Module 1 Searching the Literature.” Canvas order is what these notes follow"]));

/* ─────────────────────────── TOPIC 2.1 ─────────────────────────── */
k.push(banner("TOPIC 2.1","Principles of Measurement — The Role of Measurement in PT Practice"));
k.push(spacer());
k.push(body("Objectives: explain why measurement underpins clinical reasoning and EBP; define and operationalise variables; distinguish continuous from discrete data and the four levels of measurement; recognise the trade-off between precision and clinical feasibility; identify systematic versus random error."));

k.push(h1("1. Why We Measure"));
k.push(bullet("Measurement is integral to **clinical reasoning**, **evidence-based practice**, and **research design** — not just to research."));
k.push(detail(["What measurement buys you","Example"],[
 ["**Quantifies patient status**","Range of motion, strength — establishes a baseline and documents progress"],
 ["**Creates benchmarks**","Compares the patient against norms or clinical thresholds"],
 ["**Drives differential diagnosis**","Distinguishes between competing explanations for the presentation"],
 ["**Individualises the plan of care**","Without reliable numbers you cannot adjust interventions defensibly"]],[3000,6360]));
k.push(tnote("If you look at how we used to write notes long ago in physical therapy, we used to say the patient's balance is improving, but we didn't have a way to document how it's improving. How do you know it's improving? We shouldn't just be eyeballing range of motion or just describing it."));

k.push(h1("2. Operationalising Variables"));
k.push(bullet("**Operationalisation** = defining clearly what you are measuring and how numbers or categories get assigned to it."));
k.push(compare("DICHOTOMOUS","POLYTOMOUS",
 ["**Two possible outcomes**","Diagnostic tests that are simply positive or negative"],
 ["**More than two possible outcomes**","Tests with multiple grades or categories"],
 C.blue,C.purple,C.lightBlue,C.lightPurple));
k.push(tip("Abstract variables — pain, function — are the hard ones. Their subjectivity makes operationalisation difficult, and that difficulty follows you through the entire course."));

k.push(compare("CONTINUOUS VARIABLES","DISCRETE VARIABLES",
 ["**Capture subtle change**; finer granularity","Gait velocity · range of motion","**Preferred in research** because they detect progress or worsening more sensitively"],
 ["**Limited to integer values**","Presence or absence of spasticity · MMT grades","**May lack sensitivity** for certain outcomes"],
 C.green,C.gold,C.lightGreen,C.lightGold));

k.push(h1("3. Precision, Proxies and Feasibility"));
k.push(bullet("**Precision is a function of tool sensitivity.** A digital dynamometer gives an exact strength value; a manual muscle test gives a handful of grades."));
k.push(bullet("**Indirect measures / proxy variables** stand in for something you cannot measure directly — the **Timed Up and Go** as a proxy for mobility, or a parent/spouse reporting what someone can do at home."));
k.push(infoBox("The proxy failure worth remembering",[
 "A patient who does not speak English or cannot follow verbal instruction will score poorly on the TUG",
 "**You may conclude they lack mobility when what is actually limiting them is comprehension**",
 "Proxies may be useful, but they do not fully represent complex constructs like pain, function, or mobility"],C.red,C.lightRed));
k.push(tnote("Do we always need to analyze movement using all these markers and very high-tech, expensive tools? Or can we have lower-tech measurement that will give us sufficient data for clinical use? What is the tradeoff between clinical feasibility and precision of your measures?"));
k.push(bullet("**Technology reduces reliance on proxies** — instrumented gait analysis, EMG, motion capture — but adds setup time, training requirements, equipment cost, and analysis burden. **There is a cost-benefit analysis you have to do.**"));

k.push(h1("4. Measuring Constructs"));
k.push(bullet("**Construct validity** here means: does the tool actually measure the abstract thing you intend? Common PT constructs are **strength, pain, mobility, balance**."));
k.push(bullet("**PROMs (Patient-Reported Outcome Measures)** depend on psychometric properties AND on the patient — asking how often someone has fallen requires sufficient **memory** and **cognition** to answer accurately."));
k.push(tip("The cultural example from the lecture: assessing a child's floor mobility assumes floor play is safe, clean and practised in that family. If it isn't, a low score reflects exposure, not motor skill. Ask whether your tool is valid for the person in front of you, not just in general."));

k.push(h1("5. Levels of Measurement"));
k.push(detail(["Level","What it does","PT example"],[
 ["**Nominal**","Names categories. No rank, no interval","Walking with no device · with a cane · with a walker"],
 ["**Ordinal**","Order, but **no equal intervals**","Pain scales · MMT grades · functional tests"],
 ["**Interval**","Equal intervals, arbitrary zero","Change scores relative to a chosen reference point"],
 ["**Ratio**","Equal intervals **and** a true zero","Range of motion in degrees · dynamometer force in kg"]],[1700,3900,3760]));
k.push(tnote("A grade of four on a manual muscle test is not twice as much as a grade of two. So there is order, but no interval."));
k.push(bullet("**The level you choose governs which statistics are legitimate** and how much you can say about your patient."));

k.push(h1("6. The Step-Length Example (Table 8-1)"));
k.push(body("Four children, one variable — step length — expressed at all four levels. Same patients, progressively less information."));
k.push(detail(["Subject","Ratio (cm)","Interval","Ordinal","Nominal"],[
 ["A","23","4","2","Long"],
 ["B","24","5","3","Long"],
 ["C","19","0","1","Short"],
 ["D","28","9","4","Long"]],[1600,2000,1900,1900,1960]));
k.push(bullet("**Ratio** is the measured value. **Interval** sets the smallest value (19 cm) as zero and reports each subject's distance from it — effectively a change score. **Ordinal** ranks them 1 through 4. **Nominal** collapses everything to “Long” or “Short.”"));
k.push(tip("Read this from the payer's chair. “Long step length” tells an insurer nothing. Ordinal tells them a little. Ratio tells them whether therapy is working. That is the argument for measuring at the highest level you reasonably can."));

k.push(h1("7. Measurement Error"));
k.push(compare("SYSTEMATIC ERROR","RANDOM ERROR",
 ["**Predictable, one direction**","Miscalibrated tape measure — consistently over or under","**Affects validity, not reliability**"],
 ["**Unpredictable, any direction**","Patient movement, fatigue, mood","**Reduces reliability** — averaging multiple measures helps"],
 C.red,C.blue,C.lightRed,C.lightBlue));
k.push(bullet("**Ways to minimise error:** calibration · standardised procedures · rater training · careful attention to how measurements are actually taken."));
k.push(bullet("**Inter-rater reliability** matters most in **multi-site clinical trials**, where measurements must be comparable across clinicians — and in the clinic, where a patient may be seen by more than one therapist."));

k.push(...glossary("Quick-Reference Glossary — Topic 2.1",[
 ["Operationalisation","Defining precisely what a variable is and how it will be measured"],
 ["Dichotomous / polytomous","Two possible outcomes / more than two"],
 ["Continuous variable","Can take any value within a range — ROM, gait velocity"],
 ["Discrete variable","Restricted to whole categories or integers — MMT grades"],
 ["Proxy variable","An indirect measure standing in for a construct you cannot measure directly"],
 ["PROM","Patient-Reported Outcome Measure"],
 ["Nominal / ordinal / interval / ratio","The four levels of measurement, in ascending order of information"],
 ["Systematic error","Predictable, one-directional error — a validity problem"],
 ["Random error","Unpredictable error in any direction — a reliability problem"]]));

k.push(pageBreak());

/* ─────────────────────────── TOPIC 2.2 ─────────────────────────── */
k.push(banner("TOPIC 2.2","Concepts of Measurement Reliability"));
k.push(spacer());
k.push(body("Objectives: define reliability and its three targets; distinguish relative from absolute reliability and name their indices; describe the four ways reliability is tested; apply strategies to maximise reliability; interpret MDC."));

k.push(h1("1. Definition and the Three Targets"));
k.push(bullet("**Reliability** = the **consistency of a measured value over repeated assessments.** Without it, you cannot tell whether an observed change is real change or measurement error."));
k.push(detail(["What has to be reliable","What that means"],[
 ["**Reliable behaviour**","The patient gives consistent responses under stable conditions"],
 ["**Reliable examiner**","The rater assigns consistent scores to unchanging behaviour"],
 ["**Reliable instrument**","The tool produces consistent readings under similar conditions"]],[2900,6460]));
k.push(tnote("Perfect reliability is nearly impossible due to inherent limitations in both humans and instruments. So the best we can do is seek to minimize those factors that will influence reliability."));

k.push(h1("2. Three Sources of Measurement Error"));
k.push(detail(["Source","How it creeps in"],[
 ["**Rater**","Inexperience · distraction · **bias, conscious or unconscious**"],
 ["**Instrument**","Calibration drift · mechanical limitations"],
 ["**The characteristic being measured**","Natural physiological or emotional variation — anxiety, fatigue"]],[3400,5960]));
k.push(tip("The rater-bias example from the lecture is the one that should make you uncomfortable: if you have been working with someone and you really think they've gotten better, you may inflate their scores. That happens whether or not you intend it."));

k.push(h1("3. Worked Example — The TUG"));
k.push(body("The **Timed Up and Go** assesses balance, gait speed and fall risk, and it carries all three error sources at once."));
k.push(detail(["Error source","TUG-specific version"],[
 ["**Rater error**","Inconsistent timing — when exactly do you start and stop the watch?"],
 ["**Instrument error**","Stopwatch inaccuracy or malfunction"],
 ["**Characteristic variability**","The patient's fatigue, mood or anxiety on the day"]],[2900,6460]));

k.push(h1("4. Relative vs Absolute Reliability"));
k.push(compare("RELATIVE RELIABILITY","ABSOLUTE RELIABILITY",
 ["**Proportion of true variance** — how much of the score spread is real difference rather than error",
  "**ICC** (Intraclass Correlation Coefficient)","**Kappa** / Cohen's Kappa","**Unitless, 0 to 1** — higher is stronger",
  "TUG rater reliability **ICC > 0.95** in patients post-CVA"],
 ["**Expected measurement variation** — how much of a given score might be error",
  "**SEM** (Standard Error of Measurement)","**Reported in the original units** of the tool",
  "Directly useful for deciding whether a change you observed is bigger than the tool's own noise"],
 C.blue,C.teal,C.lightBlue,C.lightTeal));
k.push(tip("Know which one answers which question. ICC tells you whether the tool separates patients from each other. SEM tells you whether a change in ONE patient means anything. Exam questions live in that distinction."));

k.push(h1("5. Testing for Reliability"));
k.push(detail(["Type","What it checks"],[
 ["**Test–retest**","Consistency of the same tool over repeated administrations across time"],
 ["**Intra-rater**","One rater scoring consistently across trials"],
 ["**Inter-rater**","Different raters achieving similar scores on the same patient"],
 ["**Alternate forms**","Two versions of a tool producing similar scores"],
 ["**Internal consistency**","Items within a multi-item tool correlating — do they measure the same attribute?"]],[2600,6760]));

k.push(h1("6. Reliability Is Contextual, Not Binary"));
k.push(bullet("Reliability depends on **subject characteristics · rater training level · testing environment.**"));
k.push(bullet("**We do not label tools as reliable or unreliable.** We measure the *degree* of reliability and ask whether it is sufficient for the intended use."));
k.push(infoBox("Strategies to maximise reliability",[
 "**Standardise the protocol** — clear instructions and operational definitions",
 "**Train raters** until an agreed level of agreement is reached (this is exactly what research teams do before a study begins)",
 "**Calibrate instruments** on a regular schedule",
 "**Take multiple measurements and average them** to reduce random error",
 "**Sample across a range of scores** so reliability is estimated across the whole spectrum of the characteristic"],C.green,C.lightGreen));
k.push(tnote("Reliability doesn't only pertain to research studies. If you are looking at a person with a standardized test, that test should be given in the same way and interpreted with similar guidelines each time it's given."));

k.push(h1("7. Detecting Real Change"));
k.push(detail(["Concept","Definition"],[
 ["**MDC** — Minimal Detectable Change","The **smallest change that exceeds measurement error**. Below MDC, you cannot claim the patient actually changed"],
 ["**Regression to the mean**","Extreme scores tend to drift toward the average on retesting — be cautious interpreting a dramatic first score"]],[3600,5760]));

k.push(...glossary("Quick-Reference Glossary — Topic 2.2",[
 ["Reliability","Consistency of a measured value over repeated assessments"],
 ["Relative reliability","Proportion of score variance that is true variance — ICC, Kappa"],
 ["Absolute reliability","Expected measurement variation in original units — SEM"],
 ["ICC","Intraclass Correlation Coefficient; unitless 0–1"],
 ["Kappa","Agreement statistic for categorical ratings"],
 ["SEM","Standard Error of Measurement"],
 ["Test–retest reliability","Stability of a tool over repeated administrations"],
 ["Intra-rater reliability","One rater's consistency across trials"],
 ["Inter-rater reliability","Agreement between different raters"],
 ["Internal consistency","Correlation among items within a multi-item tool"],
 ["MDC","Minimal Detectable Change — smallest change beyond measurement error"],
 ["Regression to the mean","Tendency of extreme scores to move toward the average on retest"]]));

k.push(pageBreak());

/* ─────────────────────────── TOPIC 2.3 ─────────────────────────── */
k.push(banner("TOPIC 2.3","Concepts of Measurement Validity"));
k.push(spacer());
k.push(body("Objectives: define validity and separate it from reliability; state the three questions validity answers; apply sensitivity and specificity (SnNout / SpPin); describe content, criterion-related and construct validity; define MCID and contrast it with MDC."));

k.push(h1("1. Definition"));
k.push(bullet("**Validity** = the degree to which a tool **measures what it is intended to measure.**"));
k.push(bullet("The clinical example: a depression assessment tool must identify **depression** specifically, not a related construct like **general fatigue**."));
k.push(tnote("A ruler is a reliable tool for measuring leg length, but doesn't offer validity for assessing back pain. All measurements are repeatable, but they may still be inaccurate if they don't target the intended construct."));

k.push(h1("2. Reliability vs Validity — The Target"));
k.push(...fig(E+"fig_target.png",670,283,"Validity is hitting the centre. Reliability is grouping tightly. You can have either without the other (Topic 2.3 handout)"));
k.push(detail(["Panel","What it shows"],[
 ["**A — Reliable, not valid**","Tight cluster, consistently off the mark. **Systematic error**"],
 ["**B — Valid, not reliable**","Scattered around the centre; the average is right but no single measure is trustworthy"],
 ["**C — Neither**","Scattered and off-centre"],
 ["**D — Valid and reliable**","Tight cluster on the centre. What you're after"]],[3100,6260]));
k.push(tip("Panel A is the dangerous one clinically, because the measurements LOOK trustworthy. Consistency is not accuracy."));

k.push(h1("3. The Three Questions Validity Answers"));
k.push(detail(["Question","What it establishes"],[
 ["**Is it discriminative?**","Can the test identify those with vs without the condition — the SPIN/SNOUT territory"],
 ["**Does it evaluate magnitude or change?**","Can it measure the degree of a trait, or show change over time?"],
 ["**Does it have predictive value?**","Can current results infer a future status?"]],[3200,6160]));

k.push(h1("4. Sensitivity and Specificity — SnNout and SpPin"));
k.push(compare("SENSITIVITY (Sn)","SPECIFICITY (Sp)",
 ["Probability of a **positive test among patients who HAVE the condition**",
  "**True positives / all positives**",
  "**High sensitivity → SnNout: a NEGATIVE result rules the condition OUT**",
  "Picks up most of the positives, so a positive test isn't very informative — but a **negative test is likely accurate**"],
 ["Probability of a **negative test among patients WITHOUT the condition**",
  "**True negatives / all negatives**",
  "**High specificity → SpPin: a POSITIVE result rules the condition IN**",
  "Rules out most non-cases, so a negative test isn't very informative — but a **positive test is likely accurate**"],
 C.blue,C.red,C.lightBlue,C.lightRed));
k.push(tip("Two mnemonics, one trap: the mnemonic tells you which RESULT is useful, not which test is better. SnNout means a highly sensitive test is useful when it comes back NEGATIVE. Students lose points by reversing this every year."));

k.push(h1("5. Types of Validity Evidence"));
k.push(detail(["Type","What it establishes","How it's shown"],[
 ["**Content validity**","Do the test items adequately cover the theoretical content of the construct?","Expert opinion; systematic review of item coverage"],
 ["**Criterion-related — concurrent**","Does the test agree with a reference standard measured **at the same time**?","Correlate against a gold-standard tool"],
 ["**Criterion-related — predictive**","Do current test outcomes **predict future** status?","Follow the cohort forward and check"],
 ["**Construct validity**","Does the test align with the whole theoretical framework?","**Known-groups method · convergence · discrimination**"]],[2600,3600,3160]));

k.push(h1("6. Worked Example — The HINT"));
k.push(body("The **Harris Infant Neuromotor Test** detects neuromotor developmental problems early in infancy. It is the lecture's vehicle for walking each validity type through one tool."));
k.push(detail(["Validity type","Applied to the HINT"],[
 ["**Content**","Does it examine locomotion, posture and movement — the full range of neuromotor development? Established by expert opinion"],
 ["**Concurrent**","How does it compare against a gold-standard tool such as the Bayley or the Peabody?"],
 ["**Predictive**","Does it relate to future abilities — walking at a given age, or a later diagnosis such as cerebral palsy?"],
 ["**Construct**","Looking at those children further out, did it accurately identify who had and did not have developmental delay?"]],[2700,6660]));
k.push(tnote("You'll learn about the Bayley and the Peabody in pediatrics. The important part is those are tools that have known outcomes."));

k.push(h1("7. Validity in Abstract Constructs"));
k.push(bullet("**The challenge:** latent traits — anxiety, depression, pain — cannot be observed directly."));
k.push(bullet("**The solution:** use **proxies or correlates** (e.g., behavioural indicators of anxiety) to infer the construct — which makes validity evidence *more* important, not less."));

k.push(h1("8. MCID and the Clinical Consequences"));
k.push(bullet("**MCID — Minimal Clinically Important Difference:** the **smallest change in score that a patient or clinician perceives as beneficial** and that would prompt a change in the plan of care."));
k.push(compare("MDC — reliability question","MCID — validity question",
 ["**Is the change bigger than the tool's error?**","Derived from SEM","If a change is inside the measurement error, you cannot claim it happened"],
 ["**Does the change MATTER to the patient?**","Derived from patient/clinician perception","A change can be real and still be clinically meaningless"],
 C.teal,C.gold,C.lightTeal,C.lightGold));
k.push(tnote("Let's say I increase six degrees of range of motion at my shoulder. Does that make a difference? What if it's two degrees? Is that within the measurement error of the tool, so that's more of a reliability issue? Or is it a validity issue that it's really not that important to me?"));
k.push(infoBox("What valid measurement actually decides",[
 "**PT diagnosis** — a movement problem and its causes; an activity or participation limitation and its causes",
 "**PT prognosis** — how long will this take, how much therapy is needed, and what level do you believe they can reach",
 "**Intervention selection** and whether therapy continues or the patient is discharged",
 "**Reimbursement** — payers act on your documented measures"],C.purple,C.lightPurple));

k.push(h1("9. The Expanded Validity Framework"));
k.push(bullet("The traditional framework had **three C's** — content, construct, criterion-related. Two more types of evidence have been added:"));
k.push(detail(["New evidence type","What it evaluates"],[
 ["**Response process**","How accurately a person's responses to a test or survey reflect their actual thought processes"],
 ["**Testing consequences**","The impact of testing on examinees, educators, schools, patients or health systems — including the downstream effect of score cut-points and the labels attached to them"]],[3100,6260]));

k.push(...glossary("Quick-Reference Glossary — Topic 2.3",[
 ["Validity","Degree to which a tool measures what it is intended to measure"],
 ["Sensitivity","True positives / all positives; high Sn → SnNout"],
 ["Specificity","True negatives / all negatives; high Sp → SpPin"],
 ["SnNout","Sensitive test, Negative result, rules OUT"],
 ["SpPin","Specific test, Positive result, rules IN"],
 ["Content validity","Test items adequately represent the theoretical content"],
 ["Concurrent validity","Agreement with a reference standard measured at the same time"],
 ["Predictive validity","Current results predict future status"],
 ["Construct validity","Alignment with the full theoretical framework; known groups, convergence, discrimination"],
 ["Known-groups method","Testing whether the tool distinguishes groups known to differ"],
 ["Latent trait","A construct that cannot be observed directly — anxiety, pain"],
 ["MCID","Minimal Clinically Important Difference"],
 ["Response process","Validity evidence about how test items are actually interpreted by respondents"],
 ["Testing consequences","Validity evidence about the downstream impact of test results and cut-points"],
 ["PT prognosis","How long, how much therapy, and to what level the patient can be expected to progress"]]));

k.push(pageBreak());

/* ─────────────────────────── TOPIC 2.4 ─────────────────────────── */
k.push(banner("TOPIC 2.4","Searching the Literature — EBP Steps 1 and 2"));
k.push(spacer());
k.push(body("Objectives: construct a focused searchable PICO question and link outcomes to the ICF model; distinguish databases from search engines; describe a basic PubMed search strategy; identify options for accessing full-text articles, including after graduation."));
k.push(tnote("This topic is covered twice in the source material — a chapter lecture and a course-specific lecture. Both are summarised here; where they differ, the difference is noted."));

k.push(h1("1. Where This Sits in the EBP Process"));
k.push(detail(["Step","Focus"],[
 ["**Step 1**","Identify a need for information and develop a focused, searchable question"],
 ["**Step 2**","Conduct a search for the best available research evidence"],
 ["Step 3","Critically appraise the evidence — Module 3"],
 ["Step 4","Integrate evidence with clinical expertise and patient values"],
 ["Step 5","Evaluate outcomes and your process"]],[1900,7460]));
k.push(bullet("**Steps 1 and 2 are the foundation.** If they aren't done well, everything downstream is harder — you cannot appraise evidence you failed to find."));
k.push(bullet("Questions arise across the entire episode of care: **examination and evaluation · diagnosis and prognosis · intervention and outcomes measurement.**"));

k.push(h1("2. What Makes a Question Searchable"));
k.push(detail(["Component","The question it answers"],[
 ["**Patient characteristics**","**Who?** Age, diagnosis, key clinical features"],
 ["**Patient management**","**What?** Diagnosis, intervention, or prognosis"],
 ["**Outcome of interest**","**So what?** The measurable change you actually care about"]],[3000,6360]));
k.push(infoBox("Use the ICF model to define outcomes",[
 "**Body functions and structures** — pain, ROM, strength",
 "**Activity** — sitting tolerance, walking, swimming",
 "**Participation** — working as a truck driver, competing on a swim team"],C.blue,C.lightBlue));

k.push(h1("3. PICO"));
k.push(detail(["Element","Meaning","June Wilson example"],[
 ["**P**","Patient or population and key clinical characteristics","17-year-old female swimmer with neck pain"],
 ["**I**","Intervention of interest","Manual therapy techniques"],
 ["**C**","Comparison — alternative intervention or usual care","None specified"],
 ["**O**","Outcome of interest","Short-term pain reduction"]],[1200,4200,3960]));
k.push(body("**Resulting question:** “For a 17-year-old female swimmer with neck pain, are manual therapy techniques effective for short-term pain reduction?”"));
k.push(tip("PICO does not always need a C. If there's no clear comparison, omit it — that's stated explicitly in both lectures, and it's a common source of over-thinking on assignments."));
k.push(detail(["Question type","Components","Example"],[
 ["**Diagnostic**","Patient · test characteristics or result · presence/absence of a condition","“For a 17-year-old with radiating neck pain, how sensitive and specific is the Spurling test for detecting cervical nerve root impingement?”"],
 ["**Prognostic**","Patient or population · prognostic or risk factors · likelihood of a future event","“Among competitive high school swimmers, what risk factors are associated with the onset of cervical disk herniation?”"]],[1700,3400,4260]));

k.push(h1("4. Databases vs Search Engines"));
k.push(compare("DATABASE","SEARCH ENGINE",
 ["**Organised collection of citations or full-text articles**","**MEDLINE**","**Cochrane Library**","**PEDro**","**PubMed Central**"],
 ["**The interface that searches one or more databases**","**PubMed**","**Google Scholar**","**TRIP** (Turning Research Into Practice)","**PT Now**"],
 C.teal,C.purple,C.lightTeal,C.lightPurple));
k.push(tnote("You search with a search engine, but the evidence lives in databases."));
k.push(detail(["Resource","What it's good for"],[
 ["**PubMed** (searches MEDLINE)","Free, comprehensive biomedical database. **Core skill for every clinician**"],
 ["**PEDro**","PT-specific intervention studies, CPGs and systematic reviews; includes the **PEDro quality scale**"],
 ["**Cochrane Library**","Gold-standard systematic reviews across many conditions"],
 ["**CINAHL**","Nursing and allied health; carries specialised journals not indexed in MEDLINE"],
 ["**PT Now** (APTA members)","Clinical summaries, CPGs, systematic reviews"],
 ["**TRIP · Google Scholar**","Multisource tools; useful supplements, less precise"]],[2900,6460]));
k.push(tip("Practise logging into these through the university library and the APTA now, while you still have institutional access. Specific URLs and platforms change; the categories don't."));

k.push(h1("5. Types of Sources"));
k.push(detail(["Source type","Reliability for EBP"],[
 ["**Scientific journals**","Peer-reviewed original research. **Your go-to**"],
 ["**Magazines**","Less rigorous, often opinion-based. Informative, but not research-based evidence"],
 ["**Government and professional websites**","Reliable for health policy and guidelines"],
 ["**Grey literature**","Reports, theses, conference proceedings. **Valuable because it captures preliminary or negative findings that never reach journals** — but hard to locate"]],[3100,6260]));
k.push(compare("PRIMARY SOURCES","SECONDARY SOURCES",
 ["**Original studies reported firsthand by the researchers**","Journal articles presenting new research","Conference presentations","**Most reliable for understanding new evidence**"],
 ["**Summarise and analyse primary sources**","Review articles","Textbooks","**Can introduce bias or misinterpretation**"],
 C.green,C.gold,C.lightGreen,C.lightGold));
k.push(infoBox("The exception worth knowing",[
 "**Systematic reviews and meta-analyses are technically secondary sources**",
 "But they synthesise primary sources **rigorously**, which makes them excellent for EBP",
 "Especially useful for clinicians who need a defensible answer quickly"],C.blue,C.lightBlue));

k.push(h1("6. Building the Search"));
k.push(bullet("**Start from your PICO.** Pull key concepts — usually diagnosis/impairment + intervention + outcome. For June Wilson: *neck pain · manual therapy · exercise therapy · function or sport performance.*"));
k.push(bullet("**Brainstorm synonyms and related terms** — cervical pain, rehabilitation."));
k.push(compare("KEYWORDS","MeSH TERMS",
 ["Words you expect to appear in the **title or abstract**","Good starting point for therapy-related topics","**Many PTs rely primarily on keywords**"],
 ["**Medical Subject Headings** — standardised labels assigned to MEDLINE articles","Group similar articles even when authors word things differently","**Don't always map well onto PT-specific topics**"],
 C.blue,C.purple,C.lightBlue,C.lightPurple));
k.push(bullet("**Explode** a MeSH term to include its related subtopics. **Focus** (restrict) to studies where the MeSH term is the primary subject. **Subheadings** add further specificity — e.g., *physiopathology* under a shoulder-injury heading."));
k.push(tip("Try both approaches on the same question and compare the yield. The lecture's advice is that combining MeSH terms with keywords usually gives the most complete result — and that's what assignment rubrics tend to reward."));

k.push(h1("7. Boolean Operators and Truncation"));
k.push(detail(["Operator","Effect","Example"],[
 ["**OR**","**Broadens** — retrieves articles with either term","manual therapy OR musculoskeletal manipulation"],
 ["**AND**","**Narrows** — requires both concepts","neck pain AND exercise therapy"],
 ["**NOT**","**Excludes** — use sparingly, you may lose useful articles","neck pain NOT whiplash"]],[1500,3900,3960]));
k.push(bullet("**Truncation:** add an asterisk to a word stem to capture variants — *mobiliz\\** returns mobilize, mobilization, mobilizing."));
k.push(bullet("**Goal:** start broad, then narrow to a manageable set — **often 15 to 20 articles.**"));
k.push(tnote("The word OR with capital O-R broadens your search. AND, capital A-N-D, narrows your search. NOT should be used sparingly because you may unintentionally exclude useful articles."));

k.push(h1("8. Filters and the Evidence Pyramid"));
k.push(detail(["Level (top down)","What sits there"],[
 ["**1. Clinical practice guidelines · preappraised summaries**","**Start here.** Most efficient entry point"],
 ["**2. Systematic reviews and meta-analyses**","Rigorously synthesised primary evidence"],
 ["**3. Randomized controlled trials**","Individual high-quality intervention studies"],
 ["**4. Cohort and case-control studies, case series, case reports**","Descend only if the levels above are empty"]],[4000,5360]));
k.push(bullet("**PubMed filters** limit by article type (practice guideline, systematic review, RCT), publication date (e.g., last 5 years), language and species."));
k.push(tip("Clinical decisions should be made on a BODY of evidence, not a single study. Whenever you cite one article in this course, know where it sits on the pyramid and be ready to say so."));

k.push(h1("9. Getting Full Text"));
k.push(detail(["Route","Notes"],[
 ["**University library**","Subscriptions and interlibrary loan while you're a student — on campus and remote"],
 ["**PubMed Central**","Free full text for many federally funded studies; NIH-funded work is required to appear here"],
 ["**Open-access journals**","Free by design"],
 ["**Contact the author**","Most are happy to share their work"],
 ["**PT Now · TRIP**","Often link through to full text when available"]],[2700,6660]));
k.push(tip("Plan ahead for life after graduation. Your library access ends with your enrolment, and PubMed Central plus open access is what you'll be left with unless you keep an APTA membership."));

k.push(h1("10. Staying Organised and Knowing When to Stop"));
k.push(detail(["Tool","Use"],[
 ["**My NCBI** (PubMed)","Save searches, set email alerts, customise results"],
 ["**EndNote · Mendeley · Zotero**","Store references, organise them, format citations for submission"],
 ["**Journal TOC alerts · database alerts**","Keep current in your area"],
 ["**ResearchGate**","Follow researchers in your field"]],[2900,6460]));
k.push(infoBox("When have you searched enough?",[
 "**For a clinical decision:** a few high-quality trials or systematic reviews may be all you need",
 "**For a research project:** conduct a thorough review — definitions, theoretical underpinnings, methodologies",
 "**The saturation signal:** once the same references keep reappearing, you're close to done",
 "**Librarians are invaluable resources. Don't hesitate to ask for their help**"],C.green,C.lightGreen));

k.push(h1("11. The Workflow, End to End"));
k.push(detail(["Step","Action"],[
 ["1","Identify a clinical decision point and a knowledge gap"],
 ["2","Write a focused, searchable foreground question — PICO when appropriate"],
 ["3","Choose a search engine (usually PubMed) and relevant databases"],
 ["4","Select keywords and MeSH terms, combine with OR and AND, apply filters by pyramid level"],
 ["5","Scan titles and abstracts, choose the best available evidence, obtain full text, move to appraisal"]],[900,8460]));
k.push(tnote("Aim for the best available evidence, not a perfect match to your patient."));

k.push(...glossary("Quick-Reference Glossary — Topic 2.4",[
 ["PICO","Population · Intervention · Comparison · Outcome"],
 ["Foreground question","A specific, searchable clinical question about a particular patient"],
 ["ICF model","Framework for defining outcomes at body function/structure, activity, and participation levels"],
 ["Database","Organised collection of citations or articles — MEDLINE, Cochrane, PEDro"],
 ["Search engine","Interface that queries databases — PubMed, Google Scholar, TRIP"],
 ["MEDLINE","The biomedical database PubMed searches"],
 ["CINAHL","Nursing and allied health database"],
 ["PEDro","Physiotherapy Evidence Database, with its own quality scale"],
 ["MeSH","Medical Subject Headings — standardised vocabulary in MEDLINE"],
 ["Explode","Expanding a MeSH term to include its subtopics"],
 ["Truncation","Using * on a word stem to capture variants"],
 ["Boolean operators","AND, OR, NOT — the logic that shapes a search"],
 ["Grey literature","Reports, theses, conference proceedings not formally published"],
 ["Primary source","Original research reported by the investigators"],
 ["Secondary source","Summary or analysis of primary sources"],
 ["Evidence pyramid","Hierarchy of study designs used to prioritise what to read first"],
 ["PubMed Central","Free full-text archive, required destination for NIH-funded work"],
 ["My NCBI","PubMed account for saved searches and alerts"]]));

k.push(linkBox("🔗 Resources named in Topic 2.4",[
 ["PubMed","https://pubmed.ncbi.nlm.nih.gov/",""],
 ["MeSH Database","https://meshb.nlm.nih.gov/",""],
 ["PEDro — Physiotherapy Evidence Database","https://pedro.org.au/",""],
 ["Cochrane Library","https://www.cochranelibrary.com/",""],
 ["TRIP Database","https://www.tripdatabase.com/",""],
 ["APTA — Evidence-Based Practice Resources","https://www.apta.org/patient-care/evidence-based-practice-resources",""]],C.teal));

k.push(pageBreak());

/* ─────────────────────────── SYNC SESSION 2 ─────────────────────────── */
k.push(banner("SYNC SESSION 2","Diagnostic Accuracy in PT — the ACL Case"));
k.push(spacer());
k.push(body("The session applies Topic 2.3's sensitivity and specificity to a live case, then extends into predictive values and likelihood ratios."));

k.push(h1("1. Housekeeping (course mechanics)"));
k.push(detail(["Item","Rule"],[
 ["**Weekly quizzes**","**First attempt BEFORE the sync session.** Second attempt **at least 2 days after** the first attempt / sync session. Must be completed by **Friday 10 pm CST**"],
 ["**Assignments**","Due **Fridays by 10 pm CST**. Discussion boards: initial post by **Wednesday**, responses by **Friday**"],
 ["**Group assignments — structure**","**Each group member addresses the prompt individually**, then the group discusses, reaches consensus, and makes a **group submission**"],
 ["**Group assignments — formatting**","Label each independent response (Group Member #1, #2, #3 …) followed by the **Group Response**"],
 ["**Office hours**","Thursdays 3:00–4:30 pm"],
 ["**Module release**","Next module releases on **Friday**"]],[2900,6460]));
k.push(tnote("Dates and times shown in the source handouts are cohort-specific. Verify every deadline against your own Canvas calendar."));

k.push(h1("2. The Clinical Scenario"));
k.push(infoBox("Suspected ACL tear",[
 "**25-year-old soccer player** with acute knee pain",
 "**Mechanism:** non-contact pivoting injury",
 "**Pre-test probability estimated at 50%**",
 "PT performs the **Lachman** and **pivot shift** tests — **both positive**",
 "**What do the results mean?**"],C.blue,C.lightBlue));

k.push(h1("3. The 2×2 Table"));
k.push(body("Columns are **truth** (the gold or reference standard). Rows are **your test result.**"));
k.push(detail(["","Have torn ACL","Don't have torn ACL"],[
 ["**+ Prone Lachman**","**A** — true positive","**B** — false positive"],
 ["**− Prone Lachman**","**C** — false negative","**D** — true negative"]],[3000,3200,3160]));
k.push(compare("SENSITIVITY = A / (A + C)","SPECIFICITY = D / (B + D)",
 ["Ability to correctly identify those **WITH** the condition (true positive)","**SNOUT** — sensitive test, when negative, rules out","**Few false negatives**"],
 ["Ability to correctly identify those **WITHOUT** the condition (true negative)","**SPIN** — specific test, when positive, rules in","**Few false positives**"],
 C.blue,C.red,C.lightBlue,C.lightRed));
k.push(tip("Build this table from scratch on scratch paper before the quiz. Nearly every diagnostic-accuracy question in this course is answerable if you can place A, B, C and D correctly and remember which denominator goes with which statistic."));

k.push(h1("4. The Numbers"));
k.push(detail(["Test","Sensitivity","Specificity","LR+","LR−"],[
 ["**Lachman**","**87%**","**93%**","**14.17**","**0.16**"],
 ["**Pivot shift**","**48%**","**98%**","**31.5**","**0.38**"]],[2400,1800,1800,1700,1660]));
k.push(bullet("**Lachman** is both sensitive and specific — useful in either direction. **Pivot shift** is highly specific but poorly sensitive: **a negative pivot shift tells you almost nothing, but a positive one is strong evidence.**"));

k.push(h1("5. Predictive Values and Likelihood Ratios"));
k.push(detail(["Statistic","What it tells you"],[
 ["**PPV — Positive Predictive Value**","Likelihood the ACL tear **is present** after a positive test"],
 ["**NPV — Negative Predictive Value**","Likelihood the ACL tear **is absent** after a negative test. **Influenced by prevalence** (pre-test probability)"],
 ["**LR+**","How much a positive result **increases** the probability of the condition. **LR+ > 10 significantly increases probability**"],
 ["**LR−**","How much a negative result **decreases** it. **LR− < 0.1 significantly decreases probability**"]],[3200,6160]));
k.push(tip("The distinction that gets tested: sensitivity and specificity are properties of the TEST. Predictive values depend on PREVALENCE in the population you're testing. The same test performs differently in a sports clinic than in a general outpatient setting."));

k.push(h1("6. Clinical Application"));
k.push(infoBox("Putting it together",[
 "**Both tests are positive**",
 "**Post-test probability now exceeds 90%** (up from the 50% pre-test estimate)",
 "**Clinical decision: refer for imaging to confirm the ACL tear**"],C.green,C.lightGreen));
k.push(bullet("**The reasoning chain:** pre-test probability → apply tests with known LRs → post-test probability → decide. That chain is the point of the entire session."));

k.push(...glossary("Quick-Reference Glossary — Sync Session 2",[
 ["Pre-test probability","Estimated likelihood of the condition before testing; equivalent to prevalence in that setting"],
 ["Post-test probability","Revised likelihood after applying test results"],
 ["2×2 table","Test result crossed with truth: A true positive, B false positive, C false negative, D true negative"],
 ["PPV","Positive Predictive Value — probability the condition is present given a positive test"],
 ["NPV","Negative Predictive Value — probability the condition is absent given a negative test"],
 ["LR+","Positive likelihood ratio; >10 substantially raises probability"],
 ["LR−","Negative likelihood ratio; <0.1 substantially lowers probability"],
 ["Lachman test","ACL integrity test; Sn 87%, Sp 93%"],
 ["Pivot shift test","ACL integrity test; Sn 48%, Sp 98%"],
 ["Gold / reference standard","The comparison against which a new test's accuracy is judged"]]));

build(k,"/home/claude/out/Module2_ConceptsOfMeasurement_StudyNotes.docx");
