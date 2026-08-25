const L = require('/home/claude/notes_lib.js');
const {C,h1,h2,body,bullet,tnote,tip,compare,detail,infoBox,banner,glossary,fig,pageBreak,spacer,cover,build,linkBox} = L;
const E="/home/claude/emb31/";
const k=[];

k.push(...cover("Evidence Based Practice I (DPTH 6311)","Module 1: Foundations of Research and Evidence",
 "Topics 1.1–1.8 + Sync Session 1 — what EBP is, and how to rank what you find",
 ["Dr. Kimberly Castle, PT, PhD, PCS and Dr. Elizabeth Litmer, DPT, OCS run the sync sessions",
  "**Only Topics 1.1 and 1.2 are required.** Topics 1.3–1.8 are marked **(Recommended)** in Canvas — they are the research-design tour, and they are summarised here because Module 3 and Module 4 assume them",
  "**A warning about the source files:** EBP I's file names are a full module out of step with Canvas. Topics 1.3–1.8 are stored as “Module 4 …” files. Canvas order is what these notes follow"]));

/* ─────────────────────────── TOPIC 1.1 ─────────────────────────── */
k.push(banner("TOPIC 1.1","Frameworks for Generating and Applying Evidence — the EBP Model"));
k.push(spacer());
k.push(body("Objectives: define EBP and describe its purpose in physical therapy; identify and explain the three sources of evidence; outline and apply the five steps; recognise real-world barriers and strategies to address them."));

k.push(h1("1. What EBP Is"));
k.push(bullet("A **clinical decision-making approach** that integrates **best available research evidence**, **clinical expertise**, and **patient values and circumstances**."));
k.push(bullet("**Goal:** optimise patient benefit across diagnosis/prognosis · screening/examination/evaluation · intervention · patient carryover · wellness and prevention."));
k.push(infoBox("Why it matters",[
 "Patients **expect** up-to-date, evidence-based care tailored to their situation",
 "**Outdated habits, fads, or training alone are not acceptable bases for care**",
 "EBP enhances quality of care, professional credibility, and confidence in shared decisions"],C.blue,C.lightBlue));

k.push(h1("2. The Three Sources of Evidence"));
k.push(...fig(E+"pillars.png",1386,1090,"The three pillars, and what sits under each (Topic 1.1 handout)"));
k.push(detail(["Source","What it covers"],[
 ["**Research evidence**","Data from clinical and nonclinical studies — animal vs human · in-vitro vs in-vivo · type of research"],
 ["**Clinical expertise**","Professional wisdom from practice and reflection"],
 ["**Patient values and circumstances**","Beliefs · preferences · expectations · context"]],[2600,6760]));
k.push(bullet("**Optimal care emerges when all three are considered together.**"));
k.push(compare("CLINICAL RESEARCH","NONCLINICAL RESEARCH",
 ["**Human participants**","Diagnosis · intervention · prognosis · outcomes · prevention"],
 ["**Healthy humans, animals, cadavers, cells**","Informs **mechanisms** and what 'normal' is, as opposed to studying people with impairments","When clinical evidence is limited, nonclinical research can inform hypotheses — **with caution**"],
 C.blue,C.purple,C.lightBlue,C.lightPurple));
k.push(detail(["Question type — June Wilson worked example","Evidence"],[
 ["**Diagnostic**","Spurling test and imaging for cervical radiculopathy"],
 ["**Intervention**","Isometric cervical extensor exercise plus NSAIDs vs NSAIDs alone"],
 ["**Prognostic**","Risk factors for chronic neck pain in workers"],
 ["**Outcome measure**","MCID for the Neck Disability Index"],
 ["**Nonclinical**","Postural characteristics of competitive adolescent swimmers"]],[3400,5960]));

k.push(h1("3. Clinical Expertise and Patient Values"));
k.push(bullet("**Clinical expertise** is implicit and explicit knowledge developed over years — drawn from patient care, education, residencies, mentorship and collaboration. **Reflection turns experience into usable clinical knowledge.**"));
k.push(tip("The line worth underlining: experience must ALSO be appraised — expertise can be biased or outdated. Treat each patient as a single-subject research study."));
k.push(compare("VALUES","CIRCUMSTANCES",
 ["**Beliefs**","**Priorities**","**Cultural and spiritual views**","**Preferences** — what they want and don't want from care","**Expectations** — what they think PT will be like, and what outcomes they anticipate"],
 ["**Comorbidities**","**Access to care**","**Geography**","**Family and social environment**"],
 C.teal,C.gold,C.lightTeal,C.lightGold));
k.push(tnote("All of these are influenced by culture, but individual variation is large."));
k.push(infoBox("Shared informed decision making",[
 "Decision-making is a **partnership** between therapist and patient",
 "The therapist's role: **explain options · present evidence · explore patient goals and preferences · co-create the plan of care**"],C.green,C.lightGreen));

k.push(h1("4. The Five Steps"));
k.push(detail(["Step","What you do"],[
 ["**1. Identify the need for information**","Develop a focused, searchable clinical question. Triggered by a **knowledge gap**. Broad enough to capture relevant studies, narrow enough to be searchable"],
 ["**2. Search** for the best available research evidence","Use databases such as PubMed. **Start with evidence summaries** — clinical practice guidelines, systematic reviews — then move down the pyramid to RCTs, cohort studies, case-control, case series"],
 ["**3. Critically appraise** for applicability and quality","See the two-axis appraisal below"],
 ["**4. Integrate** appraised evidence with clinical expertise and patient values/circumstances","Research rarely dictates a single 'right' answer. Involves clinical judgment about **feasibility, safety and resources**, and occurs in real-time dialogue with patient and family"],
 ["**5. Evaluate** your decisions and process","Patient level: did they improve, and were the changes **clinically meaningful**? Practice level: how efficient and accurate were your search and appraisal? Identify gaps for next time"]],[2600,6760]));
k.push(compare("BACKGROUND QUESTIONS","FOREGROUND QUESTIONS",
 ["Seek **general** information, not specific to an individual patient","Answers found in a **general resource** such as a textbook","*June: “What tests are best to determine the cause of neck pain?”*"],
 ["Specific to the **patient, condition, or outcome** of interest","Answers found in **research studies and clinical practice guidelines**","*June: “For a 17-year-old swimmer with neck pain that worsens after prolonged swimming practice, is stretching or strengthening optimal?”*"],
 C.gold,C.blue,C.lightGold,C.lightBlue));
k.push(compare("APPLICABILITY","QUALITY (internal validity)",
 ["Similarity of the study **population, setting and intervention** to your patient and your context"],
 ["**Design · method · risk of bias · appropriate statistics · sample size**"],
 C.teal,C.purple,C.lightTeal,C.lightPurple));
k.push(tip("Studies fall along two continua — more or less applicable, higher or lower quality. Your task is to decide whether each study is good enough to inform practice. Searching efficiently is a skill learned through practice."));

k.push(h1("5. Barriers and Barrier Busters"));
k.push(detail(["Barrier","Barrier buster"],[
 ["**Limited time** for searching, reading and appraising","Develop faster search strategies; use **pre-appraised resources and summaries**"],
 ["**Difficulty applying group findings to individual patients**","Strengthen critical thinking about **applicability vs quality**"],
 ["**Limited research and statistical knowledge**","Focus on the **most common designs and analyses in PT**"],
 ["**Limited search and appraisal skills**","Deliberate practice with real cases and guided exercises"],
 ["**Restricted access to information resources**","Use free resources and institutional subscriptions"],
 ["**Variable culture of EBP** in workplaces and among colleagues","Model EBP, discuss evidence with colleagues, advocate for supportive systems"]],[3400,5960]));

k.push(...glossary("Quick-Reference Glossary — Topic 1.1",[
 ["Evidence-based practice","Integration of best available research evidence, clinical expertise, and patient values and circumstances"],
 ["Clinical research","Research on human participants addressing diagnosis, intervention, prognosis, outcomes or prevention"],
 ["Nonclinical research","Research on healthy humans, animals, cadavers or cells; informs mechanism"],
 ["Background question","General knowledge question answered by textbooks and general resources"],
 ["Foreground question","Patient-specific question answered by research studies and guidelines"],
 ["PICO","Population, Intervention, Comparison, Outcome — the structure of a foreground question"],
 ["Applicability","How closely a study's population, setting and intervention match your patient"],
 ["Internal validity","The degree to which a study's design and conduct support its causal claims"],
 ["MCID","Minimal clinically important difference — the smallest change a patient perceives as meaningful"],
 ["Shared informed decision making","Co-creating the plan of care with the patient from evidence, expertise and their values"]]));
k.push(pageBreak());

/* ─────────────────────────── TOPIC 1.2 ─────────────────────────── */
k.push(banner("TOPIC 1.2","Prioritizing Evidence Using the Research Pyramid"));
k.push(spacer());
k.push(body("The research pyramid is a visual model of the levels of evidence in health sciences. It helps you determine the **strength and rigour** of research, and supports evidence-based decision making."));
k.push(...fig(E+"pyr.png",1540,1165,"The appraisal ladder from basic science to guidelines (Topic 1.2 handout)"));
k.push(tnote("The three questions the pyramid exists to answer, quoted from the deck: “How do I choose which study(ies) to read?” · “I don't have time to read all of these studies!” · “One study says this intervention works and the other says it does not — what should I do?”"));

k.push(h1("1. The Levels, Bottom to Top"));
k.push(detail(["Level","What sits there","What it's for"],[
 ["**Base**","**Texts, expert opinion, narrative (non-systematic) reviews** — including your latest non-evidence-based con-ed course","**Lowest level, least stringent.** Useful for **background information**"],
 ["**Base — descriptive studies**","**Case reports · case series · observational studies**","Describe clinical conditions, patient presentations or phenomena. **Generating hypotheses, not testing them**"],
 ["**Transition level**","**Single-subject design studies** — small number of patients, repeated measures over time","Unique conditions · low-prevalence diagnoses · highly individualised interventions · **any time large-scale studies aren't feasible**"],
 ["**Mid-level**","**Cross-sectional · cohort · case-control**","Establish **associations** between variables. Critical for **prognosis and risk factors**"],
 ["**Controlled trials**","Non-randomized controlled trials","Stronger than observational studies. Evaluate **preliminary** intervention effectiveness"],
 ["**RCTs**","**2nd highest level** — the gold standard for intervention research","**Strongest causal inference** for PT intervention effectiveness"],
 ["**Top**","**Systematic reviews and meta-analyses**","**Highest level.** Synthesise multiple high-quality studies"]],[1800,3600,3960]));

k.push(h1("2. The Lower Levels in Detail"));
k.push(compare("CASE REPORT","CASE SERIES",
 ["Tells the story of **an individual**","Explores a unique or new topic in detail — a new intervention, or a rare but important phenomenon","**Heuristic value** — a starting point for future research","**N = 1**, so difficulty with generalisability","*Example: a unique patient and the problem-solving in their intervention*"],
 ["**Several case reports put together** to illustrate a single point","**N > 1 but usually < 20**","**High potential for bias**, but valuable heuristic value","*Example: multiple patients with trunk hypotonia treated with dynamic stability exercise to improve gait*"],
 C.gold,C.blue,C.lightGold,C.lightBlue));
k.push(...fig(E+"midlevel.png",1540,1165,"The transition level — single-subject design (Topic 1.2 handout)"));
k.push(detail(["Design","What it does","Use","Limits / example"],[
 ["**Cross-sectional**","Identify **prevalence**; explore associations between patient characteristics and clinical findings","Identify prevalence of a condition; explore associations","**Cannot establish cause and effect**"],
 ["**Cohort**","**One group** with a clinical characteristic, studied **prospectively** over time to assess disease development or another outcome","Understand **diagnosis, risk, prognosis (prediction) and etiology**","*Children in grades 1–6 receiving <1 hr/week of PE are more likely to become obese than those receiving >1 hr/week*"],
 ["**Case-control**","Observational, **two groups** — one with the condition, one control. **Retrospective**: look backwards to determine why some developed a condition when controls did not","Identify factors **associated** with the condition — **not causation**. Etiology studies of rare diseases","*Relationship between Parkinson's disease and past exposure to the Epstein-Barr virus*"]],[1700,3000,2300,2360]));

k.push(h1("3. The Top of the Pyramid"));
k.push(bullet("**Randomized controlled trials:** groups of similar people **randomly assigned** to different intervention groups · **prospective** design · random assignment **minimises bias**. *Example: high-intensity gait training will result in better gait recovery after CVA than low-intensity exercise training.*"));
k.push(bullet("**Systematic reviews:** synthesise multiple high-quality studies — **no new subjects**, they compile the work of others. Give you **strength of evidence**, **consistency of findings** across studies, and **identify gaps and limitations** in the literature."));
k.push(infoBox("Meta-analysis — the extra step",[
 "**Not all systematic reviews have one**",
 "Additional statistical analysis of **effect sizes and risk ratios**",
 "Provides **pooled effect estimates** for precision",
 "**Increased statistical power, reduced uncertainty**, and a better sense of the strength and consistency of an effect from pooling multiple high-level studies"],C.green,C.lightGreen));
k.push(tip("Using the pyramid: prioritise higher-level evidence when available, because it gives you a synopsis of many studies — but remember you may need to return to primary sources to understand specifics. Integrate with clinical expertise and patient values. And use lower-level evidence when high-level evidence isn't available."));

k.push(...glossary("Quick-Reference Glossary — Topic 1.2",[
 ["Research pyramid","Hierarchy organising evidence by rigour and strength"],
 ["Case report","Detailed description of a single patient; N=1"],
 ["Case series","Several case reports grouped to illustrate one point; N usually <20"],
 ["Heuristic value","Usefulness as a starting point for further inquiry"],
 ["Single-subject design","Repeated measures on a small number of patients over time"],
 ["Cross-sectional study","Snapshot at one time point; establishes prevalence, not causation"],
 ["Cohort study","One group followed prospectively for an outcome"],
 ["Case-control study","Retrospective comparison of those with and without a condition"],
 ["RCT","Randomized controlled trial; prospective, randomly assigned, gold standard for intervention"],
 ["Systematic review","Structured synthesis of all relevant studies on a focused question"],
 ["Meta-analysis","Statistical pooling of effect sizes across studies within a systematic review"]]));
k.push(pageBreak());

/* ─────────────────────────── TOPICS 1.3–1.8 ─────────────────────────── */
k.push(banner("TOPICS 1.3–1.8","The Recommended Design Tour",C.purple));
k.push(spacer());
k.push(tnote("These six topics are labelled Recommended in Canvas rather than required. They are worth the time anyway — Module 3 appraises these designs and Module 4 asks you to design them, so this is where the vocabulary is introduced."));

k.push(h2("1.3 — Quasi-Experimental Designs"));
k.push(bullet("Defined by their **lack of random assignment**, or at times a control group. Popular in healthcare because they **adapt to real-world clinical scenarios** where rigid controls are difficult or impossible — community interventions, long-term care studies, or wherever ethical or logistical barriers prevent randomization."));
k.push(bullet("**The tradeoff:** greater threats to internal validity. Without randomization or control groups it is hard to separate intervention effects from external factors. Counter it with **matching on key characteristics, thorough documentation, and blinding where practical** — mitigating biases such as **selection bias**."));
k.push(detail(["Type","Design","Example and analysis"],[
 ["**Time series**","**One-group pretest-posttest** — measurements before and after treatment in a single group. Useful before/after insight, but **no control group**, so vulnerable to confounding","Shoulder mobility improvement with a stretching intervention, compared with a **paired t-test**. External factors like daily routines could influence outcomes"],
 ["**Time series**","**Repeated measures** — adds more measurement points over a longer time frame; good for assessing **persistence** of treatment effects","Motor skill improvement in hemiplegia, data at intervals over 6 months, analysed with **repeated measures ANOVA**"],
 ["**Time series**","**Interrupted time series (ITS)** — multiple observations both before and after the intervention, revealing patterns","Impact of a new infection control protocol on hospital infection rates. **Segmented regression** or visual trend analysis"],
 ["**Non-equivalent group**","**Pretest-posttest control group without random assignment** — treatment and control groups give partial control over validity threats","A new PT protocol for neck pain vs a standard protocol. **Selection bias** is the known limitation, so **ANOVA** or participant matching"],
 ["**Non-equivalent group**","**Posttest-only control group** — groups compared only after intervention. **No baseline**, so limited causal inference","Useful in preliminary studies. **ANCOVA** can control statistically for some variables, but treat findings as **hypothesis-generating**"],
 ["**Historical controls**","Compare current outcomes to **previously collected data** when randomization is impossible","Cost-effective, can be implemented retrospectively"]],[1700,3600,4060]));

k.push(h2("1.4 — Single-Subject Designs (SSD)"));
k.push(tnote("Why they exist: traditional group designs are based on averages, which may mask the unique responses of individual patients. If a treatment benefits most patients but not a specific one, group averages won't reveal it."));
k.push(bullet("**Two core elements:** **repeated measurement** — systematically tracking the same behaviour or outcome many times — and **design phases**: a **baseline** phase establishing natural behaviour without intervention, and an **intervention** phase."));
k.push(infoBox("Reading the baseline",[
 "**Stability** — a consistent level of behaviour without major fluctuation",
 "**Trend** — any natural increase or decrease over time",
 "**For ethical reasons, baseline phases are kept short** where immediate intervention is necessary"],C.gold,C.lightGold));
k.push(detail(["Design","Structure","Notes"],[
 ["**A-B**","Baseline (A) then intervention (B)","The most basic. **Without a withdrawal or control phase it's hard to tell if change is solely due to treatment** — but simple and effective for tracking"],
 ["**A-B-A / A-B-A-B**","**Withdrawal designs** — reintroduce baseline after intervention; A-B-A-B repeats the intervention","If mobility improves only when treatment is active and regresses on withdrawal, that's stronger evidence. **Works best when the target behaviour is reversible**"],
 ["**Multiple baseline**","Treatment introduced at **staggered intervals** across different subjects, behaviours or settings","Used when **withdrawing treatment isn't ethical or feasible**. Similar improvements following each introduction let you attribute change to the intervention"],
 ["**Alternating treatment**","Rapidly switching between two or more treatments within the study","Direct comparison **without needing a baseline phase**. Works when treatments have **immediate effects and minimal carryover**"],
 ["**Changing criterion**","Incremental goals that increase as the patient improves","For **gradual** change — e.g. increasing goal distance or duration each week"],
 ["**N-of-1 trial**","Individualised **crossover** trial, often with a **washout period** to eliminate carryover","Especially useful for chronic conditions where symptoms fluctuate. **Involves the patient directly in the treatment decision**"]],[1800,3200,4360]));
k.push(bullet("**Analysis:** visual analysis of **level** (starting point) and **trend** (direction of change), supplemented by statistics — the **binomial test** for whether phase changes are significant, and the **two-standard-deviation band method** for whether intervention data falls significantly outside the baseline range."));

k.push(h2("1.5 — Exploratory Research: Observational Design"));
k.push(compare("DESCRIPTIVE OBSERVATIONAL","ANALYTIC OBSERVATIONAL",
 ["**Characterise a population** — often the prevalence of health-related variables across groups","*Rates of obesity across age groups or regions*","**Generate hypotheses**"],
 ["**Test** those hypotheses","Examine relationships between a **suspected cause and its health effect**"],
 C.blue,C.teal,C.lightBlue,C.lightTeal));
k.push(infoBox("The five criteria for arguing causation from observational data",[
 "**Temporal sequence** — exposure precedes the outcome",
 "**Strength of association** — how strongly exposure is linked to outcome",
 "**Biological plausibility** — does the link make biological sense (smoking and lung cancer)",
 "**Consistency** across multiple studies",
 "**Dose-response relationship** — does risk change with the level of exposure",
 "*These strengthen the argument, but observational studies must still control for bias and confounders*"],C.purple,C.lightPurple));
k.push(detail(["Design","Direction","Strength","Weakness"],[
 ["**Prospective longitudinal**","Forward in time — collect exposure data at the start, then monitor for outcomes","**Less bias**, because exposure is recorded before outcomes occur","**Costly and challenging**, especially with long follow-up. *Example: following stroke survivors to see who develops depression based on mobility and cognition*"],
 ["**Retrospective**","Backward, using pre-existing data","**Efficient and cost-effective**, especially for conditions that take years to develop","**Relies on the accuracy and completeness of historical data.** *Example: weight gain during pregnancy from past medical records*"],
 ["**Cross-sectional**","A snapshot at a single point — exposure and outcome measured simultaneously","Efficient for **prevalence** and identifying potential associations","**Can't confirm the exposure led to the outcome**, and risks **reverse causation**. *Example: obesity and screen time in children*"]],[1900,2900,2300,2260]));

k.push(h2("1.6 — Descriptive Research"));
k.push(bullet("Goal: capture the current characteristics of individuals or groups by **documenting what is**. It doesn't seek cause and effect — it explores patterns, behaviours and traits, creating a baseline understanding that leads to hypothesis-driven studies."));
k.push(detail(["Type","What it does","Example"],[
 ["**Developmental research**","Documents how traits and behaviours **change over time**; gives clinicians benchmarks","**Gesell** on infant motor development; **Erikson's** lifespan theory. If a child isn't meeting expected motor milestones, consider early intervention"],
 ["**Longitudinal**","Tracks the **same individuals** over an extended period, giving sequential rather than snapshot data","Infants who receive heart transplants — how motor skills and language development differ from typical development"],
 ["**Natural history**","Tracks disease progression from onset through stages **without intervention**","**ALS**, where motor deterioration progresses at a fairly consistent rate. Also gives drug trials a baseline against which to measure treatment"],
 ["**Cross-sectional**","Snapshot for quick insight into how a condition or behaviour is distributed","The **Multi-Center Orthopedic Outcome Network** on rotator cuff tears — symptom severity **wasn't always tied to duration** of the tear, suggesting individual differences matter"],
 ["**Normative research**","Establishes **benchmarks or normal values** for a population","**Grip strength by age or gender** — reference points for whether a patient falls in a typical range. Especially important where there's no straightforward diagnostic test"],
 ["**Descriptive surveys**","Collect data on health behaviours, risks and conditions across large populations","The CDC's **National Health Interview Survey** — healthcare utilisation, chronic conditions, health behaviours"]],[1900,3000,4460]));

k.push(h2("1.7 — Qualitative Research"));
k.push(compare("QUANTITATIVE ASKS","QUALITATIVE ASKS",
 ["**How many? How much?**"],
 ["**How does this experience feel? Why is this behaviour occurring?**"],
 C.blue,C.green,C.lightBlue,C.lightGreen));
k.push(tnote("Understanding a patient's journey through physical therapy can reveal emotional and psychological challenges that affect their motivation and progress — factors that might be missed in a purely statistical study. Subjective experience is treated as a valuable form of evidence."));
k.push(detail(["Approach","What it does","Healthcare example"],[
 ["**Ethnography**","Immersion in a culture or social setting to observe behaviours and norms; extensive **fieldwork and participant observation**","Research in a PT clinic revealing how teamwork and communication among staff affect patient satisfaction and outcomes"],
 ["**Grounded theory**","Builds theory **directly from the data**, not from a preconceived hypothesis","Interviewing patients recovering from amputation over time; the emotional journey described as **a pendulum swinging between hope and despair**"],
 ["**Phenomenology**","Captures the **essence** of individual experience","The hospital discharge experience — patients anxious about readiness to manage care at home, and what underlies that stress"],
 ["**Case study**","Detailed analysis of a specific situation or case","A comprehensive view of a complex healthcare scenario"]],[1800,3400,4160]));
k.push(bullet("**Analysis:** **coding** phrases and sentences into themes, then **constant comparison** to refine categories and find relationships, then **content analysis** to identify recurring themes across participants."));
k.push(infoBox("Trustworthiness — the qualitative equivalent of validity",[
 "**Credibility** — findings accurately reflect participants' experiences, often confirmed by sharing preliminary results with them",
 "**Transferability** — the extent findings apply to other contexts",
 "**Dependability** — consistency",
 "**Confirmability** — interpretations grounded in data rather than researcher bias",
 "Documented via **audit trails and reflective journals**"],C.teal,C.lightTeal));
k.push(bullet("**Mixed methods** combine both. *Diabetes management: surveys quantify adherence rates, interviews reveal personal barriers, photo diaries visually represent the impact of daily life on health behaviours.*"));

k.push(h2("1.8 — Synthesizing Literature: Systematic Reviews and Meta-Analyses"));
k.push(detail(["Type","Purpose"],[
 ["**Systematic review**","A single, **well-defined question**, critically evaluating all relevant research"],
 ["**Meta-analysis**","**Statistical techniques** to combine study results"],
 ["**Scoping review**","**Broader** — explores the extent of research available in emerging areas"],
 ["**Clinical practice guideline (CPG)**","Incorporates reviews **plus expert input** to create practical, directly applicable recommendations"]],[2800,6560]));
k.push(bullet("**The Cochrane Collaboration** sets the standard — the **Cochrane Handbook**, **RevMan** software, and the **PRISMA checklist** for transparent, high-quality reviews. Cochrane reviews are often the foundation for CPGs."));
k.push(detail(["Step","Detail"],[
 ["**1. Define the question**","**PICO** — population, intervention, comparison, outcome. *In patients with chronic neck pain, is manual therapy more effective than no intervention in reducing pain and improving function?*"],
 ["**2. Comprehensive search**","Multiple databases — **Medline, CINAHL** — using keywords, synonyms and controlled vocabulary such as **MeSH terms**. **Gray literature** (unpublished reports, dissertations) reduces bias"],
 ["**3. Screen and appraise**","Exclude studies that don't meet criteria"],
 ["**4. Interpret the results**","See the forest plot and funnel plot below"]],[2400,6960]));
k.push(compare("FOREST PLOT","FUNNEL PLOT",
 ["Each study's **effect size** with its **confidence interval**","The **diamond at the bottom** is the pooled effect size; the **width of the diamond indicates precision**","**I² statistic** measures **heterogeneity** — how much variation exists among studies. High heterogeneity means interpret the pooled result **more cautiously**"],
 ["Detects **publication bias** by plotting each study's effect size against its precision","**Ideally symmetrical, funnel-shaped.** If skewed, it may indicate **missing studies**","Studies with significant findings are more likely to be published, so this matters"],
 C.blue,C.red,C.lightBlue,C.lightRed));
k.push(tip("Two appraisal tools to know by name: AMSTAR II for systematic reviews, and AGREE II for guidelines. Effective appraisal ensures you aren't following evidence blindly."));
k.push(bullet("**Example CPG:** the American Physical Therapy Association's guideline on **knee osteoarthritis** gives specific recommendations on exercise type, dosage and progression."));

k.push(...glossary("Quick-Reference Glossary — Topics 1.3–1.8",[
 ["Quasi-experimental","Design lacking random assignment, and sometimes a control group"],
 ["Interrupted time series","Repeated observations before and after an intervention; analysed with segmented regression"],
 ["Non-equivalent groups","Comparison groups formed without randomization"],
 ["Historical control","Comparison against previously collected outcome data"],
 ["ANCOVA","Analysis of covariance — statistically adjusts for covariates"],
 ["A-B / A-B-A / A-B-A-B","Single-subject phase structures; withdrawal designs reintroduce baseline"],
 ["Multiple baseline design","Staggered introduction of treatment across subjects, behaviours or settings"],
 ["N-of-1 trial","Individualised crossover trial with washout periods"],
 ["Two-standard-deviation band","SSD method testing whether intervention data falls outside baseline variability"],
 ["Reverse causation","Uncertainty about which of two associated variables came first"],
 ["Natural history study","Documentation of untreated disease progression"],
 ["Normative research","Establishing population reference values"],
 ["Ethnography / grounded theory / phenomenology","Qualitative approaches: culture and norms / theory from data / essence of experience"],
 ["Coding and constant comparison","Qualitative analysis: categorising data, then iteratively refining categories"],
 ["Trustworthiness","Credibility, transferability, dependability and confirmability"],
 ["PRISMA","Reporting checklist for systematic reviews"],
 ["MeSH terms","Medical Subject Headings — controlled vocabulary for database searching"],
 ["Gray literature","Unpublished reports and dissertations, included to reduce publication bias"],
 ["Forest plot","Visual display of individual and pooled effect sizes"],
 ["I² statistic","Measure of heterogeneity among pooled studies"],
 ["Funnel plot","Plot used to detect publication bias"],
 ["AMSTAR II / AGREE II","Appraisal tools for systematic reviews / clinical practice guidelines"]]));
k.push(pageBreak());

/* ─────────────────────────── SYNC ─────────────────────────── */
k.push(banner("SYNC SESSION 1","Course Ground Rules and the Bernice Jackson Case",C.teal));
k.push(spacer());

k.push(h1("1. How This Course Runs"));
k.push(detail(["Element","How it works"],[
 ["**Quizzes**","Weekly, covering the current module. **You take the quiz BEFORE the sync session and again AFTER** — the **average of the pre- and post-sync grades** is used. They open Friday morning of the previous week and close Friday evening of the content week"],
 ["**Assignments**","Weekly, building toward the **final group assignment**. Even though most are group assignments, **each individual must submit their own initial contribution** in addition to the group submission. All assignments are based on the **Course Anchor Case** provided in Module 0"],
 ["**Sync sessions**","**Prepare beforehand. Cameras on. Participate in discussions.** Course times are Central"]],[2200,7160]));
k.push(tip("The quiz timing warning, quoted almost verbatim: you are responsible for allowing yourself enough time. If the quiz closes Friday at 9:59 pm and you start at 9:58, there is nothing I can do for you. If you have difficulty accessing a quiz, contact support."));
k.push(infoBox("Ground rules for group work",[
 "Communicate **professionally** — clear, timely, respectful",
 "**Share responsibility for the entire assignment, not just your part**",
 "Establish roles early — facilitator, evidence lead, editor, timekeeper — and **switch roles each week**",
 "Set internal deadlines before the final deadline, and meet them",
 "**Use high-quality evidence. Unless otherwise instructed, do not use AI-generated evidence**",
 "**Participate equitably — no “divide-and-dump”**",
 "Address conflict respectfully and early",
 "**Review and edit the full final product as a group**",
 "Hold yourselves and each other accountable through reflection and peer feedback"],C.gold,C.lightGold));
k.push(tnote("On active learning, from the deck: you engage in the learning process. Engage with all available material, and in some cases research and find other material. Reflect. Continue to work with the material. It is not always comfortable. It leads to higher learning, and this is necessary in clinical areas."));

k.push(h1("2. Module 1 Learning Objectives (as stated)"));
k.push(bullet("**1.0** Discuss EBP and examine how it relates to physical therapy practice. **1.1** Discuss basic terms related to research and EBP. **1.2** List and describe the **pillars of EBP**, relating their impact and implications to today's healthcare environment. **1.3** Differentiate between **background and foreground questions**, explaining the importance of each."));
k.push(bullet("**2.0** Evaluate the quality of evidence using standardized tools and metrics. **2.1** Critique the quality of literature pertinent to a clinical question by **ranking according to the hierarchy of evidence**."));

k.push(h1("3. The Bernice Jackson Case"));
k.push(body("**Bernice Jackson, 56**, right knee pain from osteoarthritis. **PMH: hypertension, cardiac arrhythmia treated with a pacemaker, hypercholesterolemia treated with medication.** The therapist proposes a lower-extremity strengthening programme. Mrs. Jackson says she thinks she just needs to rest her leg and wait for it to heal, because that's what helped her friend."));
k.push(detail(["Option offered in the sync session","How it fits the EBP model"],[
 ["Just allow the patient to do as she wishes","Patient values **alone** — no research evidence, no clinical expertise"],
 ["Insist she comply because you went to a con-ed course recently","Clinical expertise **alone**, and of the kind Topic 1.1 warns can be biased or outdated"],
 ["Google “exercise programs for knee osteoarthritis” and use a large practice's recommendations","Not appraised evidence — this is base-of-pyramid at best"],
 ["Apply findings of **all** RCTs with **any** adult subjects","High-quality design but **poor applicability** — the population isn't matched"],
 ["Apply systematic reviews on **adult males following sports-related hip injuries**","High level, **wrong population and wrong joint**"],
 ["Apply RCTs for **women with rheumatoid arthritis**","Right sex, **wrong condition** — RA is not OA"],
 ["**Look for the clinical practice guidelines for knee osteoarthritis in adults**","**Top of the pyramid AND applicable.** The AAOS knee OA CPG is the resource the session points to"]],[4200,5160]));
k.push(tip("Notice what the wrong answers are wrong ABOUT. Several are high-level evidence applied to the wrong population — which is exactly the applicability-versus-quality distinction from Topic 1.1. High level and inapplicable is still the wrong answer."));
k.push(infoBox("How to read a CPG — the structure the session walks through",[
 "**Summary of recommendations:** the summary statement · the **strength of recommendation** · a summary of the research used",
 "**For each recommendation:** rationale · **benefits and harms of implementation** · outcome importance · **cost effectiveness and resource utilisation** · applicability · feasibility · future research recommendations"],C.blue,C.lightBlue));
k.push(body("**The second half of the case.** Mrs. Jackson asks about **laser therapy** — another friend had wonderful results. Your clinic has a new laser unit **but you haven't been trained on it**. What does the literature say? What about your clinical expertise, and how do you navigate not having training on the device? You consider suggesting **TENS** instead."));
k.push(tip("The TENS question is the one with teeth. Mrs. Jackson has a PACEMAKER — the session asks explicitly whether there are additional considerations from her past medical history that may impact your decision. That is the patient-circumstances pillar overriding an otherwise reasonable intervention choice."));
k.push(tnote("All clinical reasoning begins with a question."));

k.push(...glossary("Quick-Reference Glossary — Sync Session 1",[
 ["Pillars of EBP","Best available research evidence, clinical expertise, patient values"],
 ["Course Anchor Case","The Module 0 case that every weekly assignment builds on"],
 ["CPG","Clinical practice guideline — synthesised evidence plus expert input, with graded recommendations"],
 ["Strength of recommendation","A CPG's rating of how confident the guideline is in a given recommendation"],
 ["TENS","Transcutaneous electrical nerve stimulation"],
 ["Divide-and-dump","Splitting a group assignment into parts nobody reviews together — explicitly prohibited"]]));

k.push(linkBox("🔗 Resource named in Sync Session 1",[
 ["AAOS Clinical Practice Guideline — Osteoarthritis of the Knee","https://www.aaos.org/globalassets/quality-and-practice-resources/osteoarthritis-of-the-knee/oak3cpg.pdf",""]],C.teal));

build(k,"/home/claude/out/Module1_FoundationsOfResearchAndEvidence_StudyNotes.docx");
