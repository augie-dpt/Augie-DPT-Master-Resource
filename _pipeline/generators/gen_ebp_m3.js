const L = require('/home/claude/notes_lib.js');
const {C,h1,h2,body,bullet,tnote,tip,compare,detail,infoBox,banner,glossary,fig,pageBreak,spacer,cover,build,linkBox} = L;
const E="/home/claude/emb33/";
const k=[];

k.push(...cover("Evidence Based Practice I (DPTH 6311)","Module 3: Analyzing Data",
 "Topics 3.1–3.8 + Sync Session 3 — appraising a study, and reading the statistics inside it",
 ["**The biggest module in the course.** Topics 3.1–3.4 are required; **3.5–3.8 are marked (Recommended)** in Canvas — they are the statistics tour, and Module 6 assumes them",
  "Dr. Kristin Grimes records Topic 3.1. **Dr. Shane Koppenhaver, PT, PhD, OCS, FAAOMPT** records the statistics lectures in 3.5–3.8",
  "**File-naming warning:** Topics 3.2–3.8 are stored as “Module 5 …” files. Canvas order is what these notes follow",
  "Two newer decks — **Appraising Intervention Studies** and **Interpreting Study Results** — are attached to Topic 3.3 and Topic 3.6. Both are summarised in place"]));

/* ─────────────────────────── TOPIC 3.1 ─────────────────────────── */
k.push(banner("TOPIC 3.1","Critical Appraisal — Evaluating Research Reports"));
k.push(spacer());
k.push(body("Objectives: understand the purpose of critical appraisal; identify levels of evidence; apply a structured framework for appraisal; use critical appraisal tools and resources; evaluate research relevance to clinical practice."));

k.push(h1("1. Why Appraise At All"));
k.push(bullet("Critical appraisal is how research becomes practice. **The goal: assess the scientific rigour of a study, then judge its applicability to your patient.**"));
k.push(bullet("**Your responsibility as a clinician** is not just finding credible research — it's judging whether the findings support what you're already doing or point to a better alternative."));
k.push(tnote("Appraising research ensures that our interventions are backed by credible data, making them safer and more effective."));

k.push(h1("2. Levels of Evidence"));
k.push(compare("QUANTITATIVE HIERARCHY","QUALITATIVE HIERARCHY",
 ["**Level 1:** systematic reviews and meta-analyses","**Level 2:** randomized controlled trials","**Levels 3–4:** cohort, case-control, case series","**Level 5:** mechanistic reasoning, expert opinion"],
 ["**Level 1:** generalizable studies","**Levels 2–3:** conceptual and descriptive studies","**Level 4:** case studies"],
 C.blue,C.purple,C.lightBlue,C.lightPurple));
k.push(tip("Prefer higher levels, but never stop there. Design flaws can undermine a Level 1 study, and a well-run cohort can beat a badly-run RCT. Level tells you where to start reading, not what to conclude."));

k.push(h1("3. The Three Core Questions"));
k.push(detail(["Question","What you're checking"],[
 ["**1. Is the study valid?**","Are the methods and design appropriate to answer the research question?"],
 ["**2. Are the results meaningful?**","Are they statistically **and** clinically significant? Are they clearly presented?"],
 ["**3. Are the results relevant to my patient?**","Can the findings be generalised to your specific patient population?"]],[3400,5960]));
k.push(tnote("Abstracts alone are not enough to judge quality, so it's crucial to read the full study."));

k.push(h1("4. Question 1 — Validity"));
k.push(detail(["Element","What good looks like"],[
 ["**Research question**","Clearly stated and clinically relevant"],
 ["**Design**","Appropriate to the question being asked"],
 ["**Sample size and sampling**","Adequate size, robust sampling method"],
 ["**Methods**","Confounding controlled; data-collection procedures clearly defined and documented"],
 ["**Measures**","Reliability and validity of the instruments reported"],
 ["**Analysis**","Statistics match the research question **and** the study design"]],[2800,6560]));

k.push(h1("5. Question 2 — Meaningfulness"));
k.push(detail(["Element","What to look for"],[
 ["**Clarity of presentation**","Data shown in text, tables or figures with transparent analysis"],
 ["**Effect size**","Indicates the **importance** of the finding, beyond the p-value"],
 ["**Alternative explanations**","Could the result be explained by something the study didn't account for?"]],[3000,6360]));
k.push(tnote("An intervention might show a statistically significant improvement, but if the effect size is small, it might not justify a change in practice."));

k.push(h1("6. Question 3 — Relevance"));
k.push(detail(["Element","The question you ask"],[
 ["**Generalizability**","Are the study participants similar enough to my patient?"],
 ["**Feasibility**","Is this intervention practical in my clinical setting?"],
 ["**Cost-benefit**","Are the benefits worth the resources, time and risk involved?"]],[2900,6460]));

k.push(h1("7. Critically Appraised Topics (CATs)"));
k.push(bullet("A **CAT** is a short summary of the evidence answering **one focused clinical question.**"));
k.push(detail(["CAT component","Contents"],[
 ["**Clinical scenario**","The patient case that prompted the question"],
 ["**Clinical question**","Written in PICO format"],
 ["**Clinical bottom line**","How the results should influence practice"],
 ["**Evidence summary**","Key findings — and limitations — of the selected studies"]],[2800,6560]));
k.push(infoBox("Worked CAT example from the lecture",[
 "**Scenario:** older adults with dementia experiencing difficulty with daily functioning",
 "**PICO:** in older adults with dementia, does community-based occupational therapy improve daily functioning?",
 "**Bottom line:** therapy improves function **and** increases caregiver competence",
 "**Evidence summary:** effect sizes and retention rates from the selected studies"],C.green,C.lightGreen));
k.push(compare("WHY CATs HELP","WHERE CATs FALL SHORT",
 ["**Fast** — usable during a patient consultation","**Reusable** — revisit when a similar case arises","**Focused** — one question, one bottom line"],
 ["**Short shelf life** — must be updated as new research appears","**Narrow scope** — may not represent the whole body of evidence","**Reader beware** — you still have to verify each CAT's rigour and relevance","**Not a substitute for a systematic review**"],
 C.green,C.red,C.lightGreen,C.lightRed));

k.push(h1("8. Tools"));
k.push(detail(["Tool","What it does"],[
 ["**EQUATOR Network**","Reporting guidelines for transparent study reporting — randomized trials, observational studies and more"],
 ["**CATMaker**","Assists with building a CAT"],
 ["**EBM calculators**","Compute effect sizes, **NNT** (number needed to treat), **NNH** (number needed to harm)"],
 ["**Journal clubs and peer review**","The ongoing practice that turns appraisal into a habit"]],[2800,6560]));

k.push(...glossary("Quick-Reference Glossary — Topic 3.1",[
 ["Critical appraisal","Structured assessment of a study's rigour and applicability"],
 ["Levels of evidence","Hierarchy ranking study designs by confidence"],
 ["CAT","Critically Appraised Topic — a short, focused evidence summary"],
 ["Clinical bottom line","The practice-changing conclusion drawn from a CAT"],
 ["Effect size","Magnitude of a finding, independent of the p-value"],
 ["Generalizability","Whether findings apply beyond the study sample"],
 ["EQUATOR Network","Repository of reporting guidelines for research transparency"],
 ["NNT / NNH","Number needed to treat / number needed to harm"]]));

k.push(linkBox("🔗 Resource named in Topic 3.1",[
 ["EQUATOR Network — reporting guidelines","https://www.equator-network.org/",""]],C.teal));

k.push(pageBreak());

/* ─────────────── APPRAISING INTERVENTION STUDIES (3.1/3.3 deck) ─────────────── */
k.push(banner("SUPPLEMENT","Appraising Intervention Studies — Applicability and Quality"));
k.push(spacer());
k.push(body("A newer deck attached alongside Topic 3.3. It splits Topic 3.1's Step 3 into **two questions asked in order.**"));
k.push(compare("QUESTION 1 — APPLICABILITY","QUESTION 2 — QUALITY",
 ["**Is this study applicable to my patient?**","Asked FIRST — no point appraising quality on a study that could never apply"],
 ["**Is this study high-quality and rigorous?**","Asked SECOND — internal validity"],
 C.blue,C.teal,C.lightBlue,C.lightTeal));

k.push(h1("1. Applicability — Five Checks"));
k.push(detail(["Check","What you're asking"],[
 ["**Q1 — Study purpose**","Does the study address your clinical question? Does the intervention align with the patient's problem?"],
 ["**Q2 — Study population**","Inclusion and exclusion criteria — **age, gender, duration, comorbidities.** Use the **“close enough” principle**"],
 ["**Q3 — Intervention feasibility**","Is it realistic in your clinic? Can you replicate the **frequency, intensity and techniques**? Is the manual therapy within your skillset?"],
 ["**Q4 — Outcome measures**","Do the outcomes reflect what matters to your patient? Do they cover the **ICF domains** you care about — body function, activity, participation? Are they clinically meaningful and feasible?"],
 ["**Q5 — Follow-up**","Was follow-up long enough to capture functional change — return to work, sport, daily activities?"]],[2800,6560]));
k.push(tip("Q3 has two reporting guidelines behind it: CONSORT (Consolidated Standards of Reporting Trials) and TIDieR (Template for Intervention Description and Replication). If a paper follows TIDieR you can actually reproduce the intervention. If it doesn't, you're guessing."));

k.push(h1("2. Quality — Six Checks (Internal Validity)"));
k.push(detail(["Check","Why it matters"],[
 ["**Q1 — Randomization**","Reduces selection bias · balances groups at baseline · improves confidence in **causality**"],
 ["**Q2 — Sampling and power**","**Consecutive recruitment beats selective sampling.** Adequate sample size and power; clear recruitment procedures and settings"],
 ["**Q3 — Participant accounting**","Are all enrolled participants accounted for? Are dropout reasons reported? Is attrition **similar across groups**?"],
 ["**Q4 — Intention-to-treat**","Analyse participants in the group they were **originally assigned to**"],
 ["**Q5 — Masking and equal treatment**","Mask evaluators where possible — **testers ≠ treaters.** Equal attention and time across groups; **only the key intervention should differ**"],
 ["**Q6 — Funding and conflicts of interest**","Identify funding sources; look for COI statements; consider financial or professional interests"]],[2800,6560]));
k.push(infoBox("Intention-to-treat, in full",[
 "**Protects against bias** from dropout or crossover",
 "**Accounts for non-adherence** — but this can **dilute** an intervention's true effect",
 "Often presented alongside a **per-protocol analysis**",
 "**Reflects realistic clinical practice**, where patients don't always do what you asked"],C.gold,C.lightGold));
k.push(tnote("Best evidence = high applicability + high quality. Both must be considered before applying results."));

k.push(pageBreak());

/* ─────────────────────────── TOPIC 3.2 ─────────────────────────── */
k.push(banner("TOPIC 3.2","Descriptive Statistics"));
k.push(spacer());
k.push(body("Objectives: understand the role of descriptive statistics; summarise data using frequency distributions, central tendency and variability; use graphical methods to describe distributions; interpret normal distributions and standardized scores."));

k.push(h1("1. What They Do"));
k.push(bullet("**Descriptive statistics summarise and organise data.** They describe **shape, central tendency and variability**, and communicate the characteristics of a sample or population."));
k.push(tnote("Descriptive statistics do not infer or predict. They simply describe the data at hand."));

k.push(h1("2. Frequency Distributions"));
k.push(bullet("A **frequency distribution** is a table of ranked scores with how often each occurs. **Simple** = single scores; **grouped** = ranges. Grouping is usually necessary for continuous data."));
k.push(bullet("**Uses:** identify trends, clusters and outliers — and screen for data-entry errors."));
k.push(detail(["Graph type","What it shows"],[
 ["**Histogram**","Bars representing frequency — the clearest view of overall distribution"],
 ["**Line plot / frequency polygon**","Connects the midpoints of grouped data into a continuous curve"],
 ["**Stem-and-leaf plot**","Both visual and numerical — shows individual scores alongside frequency"],
 ["**Box plot**","Range, median, interquartile range, and outliers in one picture"]],[2900,6460]));

k.push(h1("3. Shapes of Distributions"));
k.push(compare("NORMAL CURVE","SKEWED DISTRIBUTIONS",
 ["**Symmetrical, bell-shaped**","Most data cluster around the mean","**Mean = median = mode**"],
 ["**Positive skew** — tail on the right (income data)","**Negative skew** — tail on the left (scores on an easy test)","**The mean gets pulled toward the tail**"],
 C.blue,C.gold,C.lightBlue,C.lightGold));

k.push(h1("4. Central Tendency"));
k.push(detail(["Measure","Definition","Best used when"],[
 ["**Mode**","Most frequent score","Categorical data"],
 ["**Median**","Middle score in rank order — the 50th percentile","**Skewed distributions** — it ignores outliers"],
 ["**Mean**","Arithmetic average","Continuous, roughly normal data — but it is **pulled by extreme values**"]],[1900,3600,3860]));

k.push(h1("5. Variability"));
k.push(detail(["Measure","What it captures"],[
 ["**Range**","Highest score minus lowest score. Simplest, most fragile"],
 ["**Percentiles and quartiles**","Relative position within the distribution"],
 ["**Variance**","Mean of the squared deviations from the mean"],
 ["**Standard deviation (SD)**","Square root of the variance — **expressed in the original units**, which is why it's the most interpretable"]],[3100,6260]));
k.push(tip("Central tendency without variability is half an answer. Two groups can share a mean and behave completely differently. Whenever a paper gives you a mean, look immediately for the SD next to it."));

k.push(h1("6. The Normal Distribution"));
k.push(detail(["Property","Value"],[
 ["Mean, median and mode","All at the centre"],
 ["**±1 SD**","**68.26%** of the data"],
 ["**±2 SD**","**95.45%** of the data"],
 ["**±3 SD**","**99.73%** of the data"]],[3800,5560]));
k.push(bullet("Real-world data rarely fit the normal curve perfectly, but many biological and clinical phenomena approximate it closely enough to be useful."));

k.push(h1("7. z-scores"));
k.push(bullet("A **z-score** expresses a raw score in **standard deviation units** — how far it sits from the mean."));
k.push(infoBox("The worked example",[
 "Mean pulse rate in the sample = **68 bpm**, SD = **10**",
 "A patient scores **80 bpm**",
 "**z = +1.2** — the score is 1.2 standard deviations above the mean"],C.teal,C.lightTeal));
k.push(bullet("**Why they matter:** z-scores let you compare data measured on different scales or from different distributions, and they flag anomalies quickly."));

k.push(...glossary("Quick-Reference Glossary — Topic 3.2",[
 ["Descriptive statistics","Methods that summarise and organise data without inferring beyond it"],
 ["Frequency distribution","Table of ranked scores and their frequencies"],
 ["Histogram","Bar graph of frequencies"],
 ["Stem-and-leaf plot","Combined tabular and graphical display of individual scores"],
 ["Box plot","Display of range, median, IQR and outliers"],
 ["Positive skew","Tail extends to the right"],
 ["Negative skew","Tail extends to the left"],
 ["Mode / median / mean","Most frequent / middle / arithmetic average"],
 ["Range","Highest minus lowest score"],
 ["Variance","Mean of squared deviations from the mean"],
 ["Standard deviation","Square root of the variance, in original units"],
 ["z-score","A score expressed in standard-deviation units from the mean"]]));

k.push(pageBreak());

/* ─────────────────────────── TOPIC 3.3 ─────────────────────────── */
k.push(banner("TOPIC 3.3","Foundations of Statistical Inference"));
k.push(spacer());
k.push(body("Objectives: understand probability and sampling error; construct and interpret confidence intervals; explore hypothesis testing; distinguish Type I and Type II errors; examine statistical power."));

k.push(h1("1. Descriptive vs Inferential"));
k.push(compare("DESCRIPTIVE","INFERENTIAL",
 ["**Summarise the sample data you have**","Answers: **what happened?**"],
 ["**Generalise from sample to population**","Answers: **is the difference due to chance?**","Requires **representative** and **random** samples to be valid"],
 C.blue,C.purple,C.lightBlue,C.lightPurple));
k.push(tnote("If these conditions aren't met — a representative sample and randomness in sampling — our conclusions may be invalid."));

k.push(h1("2. Probability"));
k.push(bullet("**Probability (p)** measures the likelihood of an event, from **0 (impossible) to 1 (certain).** Rolling a 3 on a die: p = 1/6 = 0.167. A coin landing heads: p = 0.5."));
k.push(bullet("Probability underpins the normal curve — which is what lets you say that about **68%** of values fall within ±1 SD of the mean."));

k.push(h1("3. Sampling Error"));
k.push(bullet("**Sampling error** is the difference between a **sample statistic** and the true **population parameter**, arising purely from chance."));
k.push(bullet("**Even with perfect random sampling, no single sample perfectly represents the population.** Larger samples reduce variability and improve the estimate — which is why trials chase sample size."));

k.push(h1("4. Confidence Intervals"));
k.push(detail(["Term","Meaning"],[
 ["**Point estimate**","A single value — usually the sample mean — approximating the population parameter"],
 ["**Confidence interval (CI)**","A **range** within which the population parameter is expected to lie, with a stated level of certainty (usually 95%)"],
 ["**Narrow CI**","Greater precision"],
 ["**Wide CI**","More uncertainty"]],[2900,6460]));
k.push(infoBox("The birth-weight example",[
 "Sample mean birth weight = **6.8 lbs**",
 "**95% CI = 6.4 to 7.2 lbs**",
 "Interpretation: we are **95% confident the true population mean lies in that range**",
 "A CI is more informative than a point estimate because it carries the variability with it"],C.green,C.lightGreen));

k.push(h1("5. Hypothesis Testing"));
k.push(compare("NULL HYPOTHESIS (H₀)","ALTERNATIVE HYPOTHESIS (H₁)",
 ["**Assumes no effect or difference between groups**","“A new treatment has no impact compared to standard care”"],
 ["**Suggests a real effect or difference exists**","“A new treatment improves outcomes compared to standard care”"],
 C.blue,C.green,C.lightBlue,C.lightGreen));
k.push(bullet("**The goal:** use sample data to reject H₀ in favour of H₁ — you never “prove” H₁, you only fail to sustain H₀."));

k.push(h1("6. Type I and Type II Errors"));
k.push(compare("TYPE I ERROR (α)","TYPE II ERROR (β)",
 ["**Rejecting H₀ when it is actually true**","A **false positive**","“Concluding a treatment is effective when it isn't”"],
 ["**Failing to reject H₀ when it is actually false**","A **false negative**","“Missing the effectiveness of a beneficial treatment”"],
 C.red,C.gold,C.lightRed,C.lightGold));
k.push(tip("Which error you'd rather make depends on the stakes, and the lecture says so directly: in trials of life-saving drugs, minimise Type II so you don't miss something that works. In trials of non-essential treatments, minimise Type I so you don't adopt something that doesn't."));

k.push(h1("7. Statistical Power"));
k.push(bullet("**Power = 1 − β:** the probability of correctly rejecting H₀ when a real effect exists. **80% power** is the conventional target."));
k.push(detail(["What raises power","Why"],[
 ["**Larger sample size**","Reduces variability, improves accuracy"],
 ["**Larger effect size**","Bigger differences are easier to detect"],
 ["**Higher significance level (α)**","Makes rejection of H₀ easier — at the cost of more Type I error"]],[3000,6360]));

k.push(...glossary("Quick-Reference Glossary — Topic 3.3",[
 ["Statistical inference","Generalising from sample data to a population"],
 ["Probability (p)","Likelihood of an event, 0 to 1"],
 ["Sampling error","Difference between sample statistic and population parameter, due to chance"],
 ["Point estimate","A single-value estimate of a population parameter"],
 ["Confidence interval","Range likely to contain the true population parameter"],
 ["Null hypothesis (H₀)","Assumption of no effect or difference"],
 ["Alternative hypothesis (H₁)","Assertion that a real effect exists"],
 ["Type I error (α)","False positive — rejecting a true H₀"],
 ["Type II error (β)","False negative — failing to reject a false H₀"],
 ["Statistical power (1−β)","Probability of detecting a real effect when one exists"]]));

k.push(pageBreak());

/* ─────────────── INTERPRETING STUDY RESULTS (3.2/3.6 deck) ─────────────── */
k.push(banner("SUPPLEMENT","Interpreting Study Results — Statistics and Clinical Meaning"));
k.push(spacer());
k.push(body("The second newer deck. It is the practical bridge between Topics 3.2/3.3 and the appraisal you actually have to do for assignments, and it is organised around five questions."));

k.push(h1("1. The Five Questions It Poses"));
k.push(detail(["#","Question"],[
 ["1","Descriptive vs inferential statistics — which is the article giving you?"],
 ["2","Is the result **clinically** important?"],
 ["3","Why does the mean ≠ the median?"],
 ["4","Why α = 0.05?"],
 ["5","Which indicates treatment effect: p-value, effect size, or NNT?"]],[700,8660]));

k.push(h1("2. Start With the Tables"));
k.push(bullet("**Read the tables before the text.** Identify baseline comparability, then interpret variability."));
k.push(infoBox("Baseline similarity — what to check",[
 "**Age**",
 "**Baseline function**",
 "**Severity**",
 "**Duration of symptoms or condition**",
 "**Comorbidities**"],C.blue,C.lightBlue));
k.push(tip("Groups that differ at baseline can produce a “significant” result that has nothing to do with the intervention. This is the first table in almost every RCT and the fastest way to spot a weak study."));

k.push(h1("3. Reliability and Validity, Applied to a Paper"));
k.push(detail(["Property","How the paper should report it"],[
 ["**Intra-rater reliability**","Consistency of a single rater across time"],
 ["**Inter-rater reliability**","Consistency between multiple raters in the same trial"],
 ["**Instrument reliability**","**ICC preferred.** Values **> 0.80** indicate high reliability"],
 ["**Internal validity**","Depends on randomization, control of confounders, blinding, adherence, attrition management"],
 ["**External validity**","Generalizability — do the results pertain to your patient population?"],
 ["**Measurement validity**","Content · criterion · construct"]],[3000,6360]));

k.push(h1("4. Parametric vs Nonparametric Assumptions"));
k.push(compare("PARAMETRIC ASSUMPTIONS","NONPARAMETRIC ASSUMPTIONS",
 ["**Interval or ratio data**","**Normal distribution**","**Homogeneity of variance**","**Observations independent of each other**"],
 ["**Distribution-free**","**Data points are independent**"],
 C.blue,C.teal,C.lightBlue,C.lightTeal));
k.push(detail(["Parametric test","Nonparametric counterpart"],[
 ["**t-tests** — means of 2 groups","**Mann-Whitney U** — medians of 2 groups"],
 ["**ANOVA** — means of 3+ groups","**Kruskal-Wallis** — medians of 3+ groups"],
 ["**F test** — variance of 2 groups","—"],
 ["**Correlation** — strength and direction of a linear relationship between 2 continuous variables","**Chi-square** — relationship between categorical variables"],
 ["**Regression**","**Regression** (nonparametric forms)"]],[4400,4960]));

k.push(h1("5. p-values and α"));
k.push(bullet("**α = 0.05** is the conventional threshold, and it is **set before testing.** p < 0.05 → statistically significant."));
k.push(tnote("Reporting values well below .05 — such as .0002 — does not make the results more significant than a value of .048."));
k.push(bullet("**A smaller p-value decreases the probability of a Type I error and increases the probability of a Type II error.** Increasing sample size or effect size raises power and reduces Type II error."));
k.push(bullet("**Multiple comparisons:** ANOVA followed by post-hoc tests inflates Type I error. The **Bonferroni correction** counters it."));

k.push(h1("6. Confidence Intervals in an Appraisal"));
k.push(detail(["What you see","What it means"],[
 ["**Narrow CI**","Precise estimate"],
 ["**Wide CI**","Imprecise — treat the point estimate with caution"],
 ["**CI crossing zero**","**Not statistically significant**"],
 ["**MCID falls outside the CI**","More likely to be a **clinically significant** finding"]],[3000,6360]));

k.push(h1("7. Effect Size, MCID and NNT"));
k.push(detail(["Statistic","Definition","Interpretation"],[
 ["**Cohen's d**","Difference between groups ÷ pooled SD — magnitude expressed in SD units","**Small 0.2–0.5 · Medium 0.5–0.8 · Large > 0.8.** Unitless, so it compares across studies on different scales"],
 ["**MCID**","Smallest change that would actually change patient care","Considers practical importance, effect size, patient-centred outcomes and quality of life — **not just statistical probability**"],
 ["**NNT**","How many patients need this treatment for **one** additional person to benefit, or one adverse outcome to be prevented","Used for **dichotomous outcomes** — return to sport, hospital readmission, independent ambulation. **Lower NNT = more effective**"]],[1800,3800,3760]));
k.push(tip("The distinction the sync session hammered on: MCID lives inside one measurement tool and tells you whether an individual patient truly changed. The p-value lives between groups and tells you whether the groups differed. They answer different questions and you need both."));

k.push(h1("8. The Clinical Bottom Line"));
k.push(infoBox("What goes into it",[
 "**Statistical significance**",
 "**Effect size**",
 "**Confidence intervals**",
 "**NNT**",
 "**Patient-centred relevance**"],C.green,C.lightGreen));

k.push(pageBreak());

/* ─────────────────────────── TOPIC 3.4 ─────────────────────────── */
k.push(banner("TOPIC 3.4","Ethical Use of AI in Physical Therapy"));
k.push(spacer());
k.push(body("Two lectures: **AI risks in background research** (scholarly work) and **AI risks in evidence-based PT practice** (clinical decisions). This topic is examinable — Quiz 3 covers responsible AI use explicitly."));

k.push(h1("1. What AI Does Well — and Poorly"));
k.push(compare("AI IS GOOD AT","AI DOES NOT",
 ["**Fluent, organised text**","**Predicting language patterns**"],
 ["**Reason**","**Evaluate**","**Verify facts**","**Ensure citations are authentic**"],
 C.green,C.red,C.lightGreen,C.lightRed));

k.push(h1("2. Risks in Scholarly Research"));
k.push(detail(["Risk","What it looks like"],[
 ["**Reference hallucination**","Fabricated or inaccurate citations that **look real**. Real authors combined with inaccurate information; findings misattributed to the wrong source"],
 ["**Inaccurate or oversimplified content**","**Confident tone does not equal correctness.** Subtle factual errors, oversimplification, misrepresentation — hard to detect without subject-matter knowledge"],
 ["**Lack of source traceability**","You cannot find the source or defend the statement"],
 ["**Outdated or temporally inaccurate evidence**","Presented as current. **Healthcare practice standards evolve rapidly**"],
 ["**Bias amplification**","Overrepresentation of dominant populations · conflicting findings unstated · distorted problem framing · poor representation of research gaps"],
 ["**False sense of scholarly mastery**","Fluent writing masks shallow understanding and prevents deep engagement with the evidence"]],[3000,6360]));
k.push(infoBox("Why hallucinated references are dangerous",[
 "**Undermined credibility**",
 "**Course failure**",
 "**Ethical violations**",
 "**Loss of trust**",
 "**Loss of career**"],C.red,C.lightRed));

k.push(h1("3. Risks in Clinical Practice"));
k.push(detail(["Risk","How it shows up in patient care"],[
 ["**Misrepresentation of evidence quality**","Treats all evidence as equal · ignores risk of bias · fails to recognise study limitations"],
 ["**Hallucinated or misattributed evidence**","Fabricates clinical practice guidelines, outcome measures, treatment effectiveness data"],
 ["**Overgeneralization of interventions**","Ignores comorbidities · misses contraindications · applies generic protocols to complex patients"],
 ["**Patient values and context**","Cannot reliably account for goals, preferences, psychosocial factors, health literacy or cultural context"],
 ["**Safety and screening**","**May miss red flags**, fail to recognise adverse responses, continue inappropriate recommendations"],
 ["**Temporal and guideline inaccuracy**","Outdated guidelines, superseded interventions, incomplete evidence updates"],
 ["**Bias and equity**","Reflects underrepresentation in research data and structural healthcare inequities"]],[3000,6360]));
k.push(tnote("Physical therapists remain responsible for all clinical decisions, patient outcomes, and ethical and legal standards."));

k.push(h1("4. Where AI Is Actually Appropriate"));
k.push(compare("APPROPRIATE USES","NOT APPROPRIATE",
 ["**Organising ideas** and literature","**Improving readability**","**Generating search terms**","**Drafting patient education materials — with review**","**Documentation efficiency**"],
 ["**Primary source of evidence**","**Source of citations**","**Independently generating treatment plans**","**Replacing clinical reasoning**"],
 C.green,C.red,C.lightGreen,C.lightRed));

k.push(infoBox("Student expectations for AI use in scholarly work — as stated",[
 "AI may be used as a **writing and organization aid only**",
 "**AI-generated factual claims must be independently verified**",
 "**All citations must be sourced from real, primary literature**",
 "AI **may not replace direct engagement** with peer-reviewed evidence",
 "**The researcher remains fully responsible for accuracy and integrity**"],C.gold,C.lightGold));
k.push(tip("Module 1's group-work rules already said “do not use AI-generated evidence.” This topic is the reasoning behind that rule, and Sync Session 3 makes you find the six errors in an AI-generated citation. Take it seriously — it's the one place in Trimester 1 where the course tests AI literacy directly."));

k.push(...glossary("Quick-Reference Glossary — Topic 3.4",[
 ["Reference hallucination","AI-generated citations that are fabricated or misattributed"],
 ["Source traceability","Ability to locate and verify the origin of a claim"],
 ["Bias amplification","AI reproducing and magnifying skew present in its training data"],
 ["Temporal inaccuracy","Outdated information presented as current"],
 ["Scholarly accountability","The researcher — not the tool — is responsible for accuracy"]]));

k.push(pageBreak());

/* ─────────────────────────── TOPIC 3.5 ─────────────────────────── */
k.push(banner("TOPIC 3.5","Comparing Two Means — The t-Test  (Recommended)"));
k.push(spacer());
k.push(body("Objectives: understand the purpose of the t-test; differentiate the two types; interpret results; evaluate assumptions; assess effect size and clinical significance."));

k.push(h1("1. The Idea"));
k.push(bullet("A **t-test** decides whether an observed difference between two sample means represents a **real** population difference — or just sampling error."));
k.push(bullet("**Two groups only.** Two levels of one independent variable."));
k.push(infoBox("The t-test as a signal-to-noise ratio",[
 "**t = difference between groups ÷ variability within groups**",
 "**Signal** = the difference between the means",
 "**Noise** = unexplained variability within the groups (error variance)",
 "**Larger t-values suggest a more meaningful difference**"],C.blue,C.lightBlue));
k.push(bullet("**Between-group variability** is explained by the treatment. **Within-group variability** is random error the treatment doesn't account for."));

k.push(h1("2. Assumptions (Shared by All Parametric Tests)"));
k.push(detail(["Assumption","The lecturer's caveat"],[
 ["**Samples randomly drawn from the population**","Rarely actually happens — just be careful with generalizations"],
 ["**Population is normally distributed**","Test statistically, graphically, or use common sense"],
 ["**Homogeneity of variance**","Especially important with **unequal group sizes.** Tested with **Levene's test**"],
 ["**Data on a ratio or interval scale**","Often done on ordinal data anyway — **a 10-point NPRS is probably OK, a 5-point MMT is not**"]],[3200,6160]));
k.push(tnote("Parametric tests are pretty robust to violations of these assumptions."));

k.push(h1("3. The Two Types"));
k.push(compare("INDEPENDENT (UNPAIRED) t-TEST","PAIRED t-TEST",
 ["**Between-subject design** — different people in each group","Groups created by **random assignment**","Example: a splint study measuring pinch strength in patients with rheumatoid arthritis"],
 ["**Within-subject design** — everyone gets both conditions","Compares paired data or repeated measures (pretest–posttest)","**More powerful** than the independent t-test because there is **less error variance**","Variance is assumed equal because it's the same people","Example: testing lumbar support effects on pelvic tilt"],
 C.blue,C.green,C.lightBlue,C.lightGreen));
k.push(bullet("The paired t-test works on each subject's **difference score.** H₀: mean difference = 0. H₁: mean difference ≠ 0."));

k.push(h1("4. Reading the Output"));
k.push(detail(["Element","How to read it"],[
 ["**Critical value**","The boundary for significance — e.g. **t = 2.101 for df = 18, α = 0.05**"],
 ["**p-value**","Probability the observed difference occurred by chance. Example: **t = 2.718, p = 0.014 → significant**"],
 ["**Levene's test p > 0.05**","Variances **not** significantly different → homogeneity assumption holds"],
 ["**Confidence interval**","Range in which the true difference between means likely lies. **CI excludes 0 → significant.** CI includes 0 → not significant"],
 ["**One-tailed vs two-tailed**","SPSS reports two-tailed. **To convert to one-tailed, divide by 2** — e.g. 0.014 becomes 0.007"]],[2800,6560]));
k.push(tip("The CI-and-p check is a free consistency test. If the p-value says significant but the CI crosses zero, something is wrong with your reading of the table. They must agree."));

k.push(h1("5. Power and Effect Size"));
k.push(bullet("**Power (1 − β):** likelihood of correctly rejecting a false null hypothesis."));
k.push(bullet("**Effect size (d):** magnitude of the difference. **Small 0.2 · Medium 0.5 · Large 0.8.** The pinch-strength example had **d = 1.2** — a large effect."));

k.push(h1("6. Misuse"));
k.push(infoBox("The rule you will be tested on",[
 "**The t-test compares TWO means only**",
 "**Running multiple t-tests on one dataset inflates Type I error**",
 "**For more than two groups, use ANOVA**"],C.red,C.lightRed));

k.push(...glossary("Quick-Reference Glossary — Topic 3.5",[
 ["t-test","Parametric test comparing two means"],
 ["Independent (unpaired) t-test","Between-subject comparison of two separate groups"],
 ["Paired t-test","Within-subject comparison of repeated or matched measures"],
 ["Difference score","Each subject's post-minus-pre value, the basis of the paired t-test"],
 ["Between-group variability","Variance explained by treatment"],
 ["Within-group variability","Random error variance"],
 ["Homogeneity of variance","Assumption that group variances are roughly equal"],
 ["Levene's test","Statistical test of homogeneity of variance"],
 ["Critical value","Threshold t-value for significance at a given df and α"],
 ["Degrees of freedom (df)","Number of values free to vary; sets the critical value"],
 ["Cohen's d","Standardized effect size: 0.2 small, 0.5 medium, 0.8 large"]]));

k.push(pageBreak());

/* ─────────────────────────── TOPIC 3.6 ─────────────────────────── */
k.push(banner("TOPIC 3.6","One-Way Analysis of Variance (ANOVA)  (Recommended)"));
k.push(spacer());
k.push(body("Three lectures sit under this topic: **one-way ANOVA**, **two-way ANOVA**, and **repeated measures ANOVA**. Same assumptions as the t-test throughout."));

k.push(h1("1. What ANOVA Adds"));
k.push(bullet("The t-test handles **two** groups. ANOVA handles **three or more groups** (three or more levels of one IV) **and/or two or more independent variables.**"));
k.push(bullet("**The question ANOVA answers:** are the observed differences across the *whole set* of means greater than would be expected by chance alone?"));
k.push(detail(["Classification","Distinction"],[
 ["**One-way vs two-way vs three-way**","How many **independent variables**"],
 ["**Independent groups (between-subject)**","Different people at each level of the IV"],
 ["**Repeated measures (within-subject)**","Same people at each level"],
 ["**Mixed model**","**At least one between-subject and one within-subject IV**"]],[3200,6160]));

k.push(h1("2. One-Way ANOVA, Independent Samples"));
k.push(bullet("Compares **variance between the grand (overall) mean and each group mean** against **variance within each group.**"));
k.push(infoBox("The limitation that creates post-hoc testing",[
 "A significant ANOVA (**p < 0.05**) tells you the group means differ",
 "**It does NOT tell you WHERE the difference is**",
 "Ultrasound vs ice? Ultrasound vs massage? Ultrasound vs no modality?",
 "**That is what post-hoc tests are for** — and why Bonferroni exists to control the inflated Type I error"],C.gold,C.lightGold));

k.push(h1("3. Two-Way ANOVA"));
k.push(bullet("A **2 × 3 ANOVA** produces **three** results: **main effect of A**, **main effect of B**, and the **interaction of A and B.**"));
k.push(...fig(E+"fig_interaction.png",890,370,"Interaction plots from the stretching example — plotted two ways. Non-parallel lines mean interaction (2-way ANOVA deck)"));
k.push(compare("NO INTERACTION","INTERACTION",
 ["**Lines parallel**","Scores across levels of factor A do **not** depend on the levels of factor B"],
 ["**Lines not parallel**","Scores across levels of factor A **do** depend on the levels of factor B"],
 C.green,C.red,C.lightGreen,C.lightRed));
k.push(detail(["Interaction type","What it means for interpretation"],[
 ["**Disordinal — lines cross**","**You cannot interpret significant main effects.** “Flexion vs extension is better depending on stretch type”"],
 ["**Ordinal — lines don't cross**","**You can (carefully) interpret significant main effects.** “Prolonged stretching is best regardless of knee position”"]],[3400,5960]));
k.push(tip("This is the exam-bait of the whole ANOVA block. A significant main effect in the presence of a disordinal interaction is uninterpretable — and papers report it anyway. Check the interaction plot before you believe a main effect."));
k.push(tnote("Three-way ANOVA and beyond is rarely seen because interpretation gets extremely complicated — a three-way design generates seven separate results."));

k.push(h1("4. Repeated Measures ANOVA"));
k.push(bullet("**Just like the paired t-test, but with more than two levels of time.** More powerful than independent ANOVA because there is less error variance."));
k.push(infoBox("Sphericity — the extra assumption",[
 "**Sphericity** = homogeneity of variance **of the differences**",
 "Tested with **Mauchly's Test of Sphericity**",
 "**A non-significant Mauchly result means the assumption holds**",
 "If the assumption fails, use a **correction / adjusted p-value**"],C.purple,C.lightPurple));
k.push(bullet("As with one-way ANOVA, a significant result tells you the means differ but not **where** — pronation vs neutral? pronation vs supination? — so post-hoc testing follows."));

k.push(h1("5. Mixed Design — The RCT Workhorse"));
k.push(bullet("A **2 × 2 mixed-model ANOVA** has at least one between-subjects IV (group) and at least one within-subjects IV (usually time). **This is the principal statistical analysis in a randomized controlled trial.**"));
k.push(detail(["Effect","What it asks","Is it useful?"],[
 ["**Main effect of time**","Do all subjects improve by about the same amount, regardless of group?","Sometimes"],
 ["**Main effect of group**","Collapsing across time","**Doesn't make much sense**"],
 ["**Interaction effect**","**Does the amount of improvement over time depend on group?**","**This is what we are most interested in**"]],[2400,4400,2560]));
k.push(tip("Memorise that last row. When you read an RCT that used a mixed-model ANOVA, the interaction term is the treatment effect. A paper that reports only main effects is dodging the question."));

k.push(...glossary("Quick-Reference Glossary — Topic 3.6",[
 ["ANOVA","Analysis of variance — compares 3+ means and/or 2+ independent variables"],
 ["One-way ANOVA","One independent variable with 3+ levels"],
 ["Two-way ANOVA","Two independent variables; yields two main effects plus an interaction"],
 ["Main effect","The effect of one IV, averaged across the other"],
 ["Interaction effect","Whether the effect of one IV depends on the level of another"],
 ["Ordinal interaction","Lines don't cross; main effects still interpretable"],
 ["Disordinal interaction","Lines cross; main effects not interpretable"],
 ["Repeated measures ANOVA","Within-subject ANOVA across 3+ time points"],
 ["Sphericity","Homogeneity of variance of the differences"],
 ["Mauchly's test","Test of the sphericity assumption"],
 ["Mixed-model ANOVA","At least one between- and one within-subject IV; the standard RCT analysis"],
 ["Grand mean","The overall mean across all groups"],
 ["Post-hoc test","Follow-up comparison locating where a significant ANOVA difference lies"],
 ["Bonferroni correction","Adjustment that controls inflated Type I error from multiple comparisons"]]));

k.push(pageBreak());

/* ─────────────────────────── TOPIC 3.7 ─────────────────────────── */
k.push(banner("TOPIC 3.7","Nonparametric Tests  (Recommended)"));
k.push(spacer());

k.push(h1("1. When to Reach for Them"));
k.push(bullet("Use nonparametric tests when the **parametric assumptions are not met:**"));
k.push(detail(["Violated assumption","Example"],[
 ["**Population normality**","Skewed distributions · bimodal distributions"],
 ["**Homogeneity of variance**","Especially with very unequal group sizes"],
 ["**Data are nominal or ordinal** rather than ratio/interval","Ordinal → Portney Ch. 22 · Nominal → Ch. 25 (chi-square)"]],[3600,5760]));

k.push(h1("2. How They Work"));
k.push(compare("BASED ON RANKS","BASED ON SIGNS",
 ["**Each score converted to a rank**","Asks: is the difference in **ranks** larger than chance alone would produce?","The nonparametric analogue of the **independent** t-test"],
 ["**Each score converted to a sign** — larger, smaller, or no difference","Asks: is the difference in **sign frequencies** larger than chance alone would produce?","The nonparametric analogue of the **paired** t-test"],
 C.blue,C.teal,C.lightBlue,C.lightTeal));

k.push(h1("3. The Cost"));
k.push(infoBox("Nonparametric tests are less powerful",[
 "**Roughly 65–95% of the power of the parametric equivalent**",
 "**Concretely:** if a parametric test needs **N = 70**, the nonparametric equivalent may need **N = 100**",
 "**They also cannot handle more complex designs** — no 2 × 3 factorial equivalent exists"],C.red,C.lightRed));

k.push(h1("4. The Equivalents Table"));
k.push(detail(["Comparison","Parametric test","Nonparametric test"],[
 ["**Two independent groups**","Unpaired t-test","**Mann-Whitney U test**"],
 ["**Two related scores**","Paired t-test","**Sign test** · **Wilcoxon signed-ranks test (T)**"],
 ["**Three or more independent groups**","One-way ANOVA (F)","**Kruskal-Wallis** analysis of variance by ranks (H or χ²)"],
 ["**Three or more related scores**","One-way repeated measures ANOVA (F)","**Friedman** two-way analysis of variance by ranks (χ²ᵣ)"]],[2900,3200,3260]));
k.push(tip("Learn this table as a table. Quiz questions in this course tend to give you a scenario — data type plus number of groups plus related or independent — and ask which test applies. All four rows are fair game."));

k.push(...glossary("Quick-Reference Glossary — Topic 3.7",[
 ["Nonparametric test","Distribution-free test used when parametric assumptions fail"],
 ["Mann-Whitney U","Nonparametric equivalent of the unpaired t-test"],
 ["Wilcoxon signed-ranks test","Nonparametric equivalent of the paired t-test (ranks)"],
 ["Sign test","Nonparametric paired comparison based on direction of change"],
 ["Kruskal-Wallis","Nonparametric equivalent of one-way ANOVA"],
 ["Friedman test","Nonparametric equivalent of repeated-measures ANOVA"]]));

k.push(pageBreak());

/* ─────────────────────────── TOPIC 3.8 ─────────────────────────── */
k.push(banner("TOPIC 3.8","Measuring Association for Categorical Variables — Chi-Square  (Recommended)"));
k.push(spacer());

k.push(h1("1. Placing Chi-Square Among the Tests"));
k.push(detail(["Test","IV level","DV level","Question it answers"],[
 ["**1. t-test**","Nominal","Continuous","Difference between means?"],
 ["**2. ANOVA**","Nominal","Continuous","Difference between means?"],
 ["**3. Nonparametric (Ch. 22)**","Nominal","Ordinal","Are the ranks different?"],
 ["**4. Correlation**","Continuous","Continuous","Strength of association?"],
 ["**5. Regression**","Continuous","Continuous","Strength of prediction?"],
 ["**6. Chi-square**","**Nominal**","**Nominal**","**Are the variables associated?**"]],[2600,1800,1800,3160]));
k.push(tip("If you memorise one table out of Topics 3.5–3.8, make it this one. It's the decision tree for every “which test should they have used?” question you'll be asked."));

k.push(h1("2. What Chi-Square Does"));
k.push(bullet("**Chi-square (χ²)** analyses categorical data — categorical IV, categorical DV. It asks whether **observed frequencies differ from expected frequencies** by more than chance."));
k.push(compare("GOODNESS OF FIT","TEST OF INDEPENDENCE (ASSOCIATION)",
 ["Compares observed frequencies of **one** variable against uniform expected frequencies","**Example:** flip a coin 50 times, get 15 heads and 35 tails — is that chance, or a real bias?"],
 ["**Much more common.** Compares observed frequencies of one variable against those of another","Based on a **contingency table**","**Example:** is owning a Mac laptop related to gender?"],
 C.blue,C.purple,C.lightBlue,C.lightPurple));

k.push(h1("3. Reading the Output"));
k.push(bullet("**p < 0.05 → the association is significant.** For cells with expected counts **< 5**, use the **continuity correction** or **Fisher's Exact Test.**"));
k.push(infoBox("Clinical-shaped examples from the deck",[
 "**Group proportions:** Group A (PC users) has 34 women and 42 men; Group B (Mac users) has 40 women and 33 men. Is the gender-proportion difference significant?",
 "**Outcome proportions:** paleo 45 of 84 kept weight off · low-fat 27 of 73 · Atkins 33 of 96. Is the between-group difference significant?",
 "The PT version of this is any dichotomous outcome across groups — returned to sport / didn't, readmitted / not"],C.teal,C.lightTeal));

k.push(h1("4. Two Related Tests"));
k.push(detail(["Test","Use"],[
 ["**McNemar test**","χ² requires that variable levels be **independent** (you can't be both “healed” and “unhealed”). McNemar is the form of χ² for a **2 × 2 with a correlated sample** — e.g. moving to the Pacific Northwest (pre/post) and allergy symptoms (yes/no)"],
 ["**Phi coefficient (φ)**","Degree of association in a **2 × 2** — the correlation coefficient for two nominal variables. **Values range −1.0 to 1.0**"]],[2600,6760]));

k.push(...glossary("Quick-Reference Glossary — Topic 3.8",[
 ["Chi-square (χ²)","Test of whether observed frequencies differ from expected"],
 ["Goodness of fit","χ² comparing one variable against uniform expected frequencies"],
 ["Test of independence","χ² comparing frequencies of two variables for association"],
 ["Contingency table","Cross-tabulation of two categorical variables"],
 ["Continuity correction","Adjustment used when expected cell counts are below 5"],
 ["Fisher's Exact Test","Alternative to χ² for small expected cell counts"],
 ["McNemar test","χ² variant for a 2×2 table with correlated (paired) samples"],
 ["Phi coefficient (φ)","Correlation coefficient for two nominal variables in a 2×2"]]));

k.push(pageBreak());

/* ─────────────────────────── SYNC SESSION 3 ─────────────────────────── */
k.push(banner("SYNC SESSION 3","Acquisition and Appraisal — plus the AI Citation Exercise"));
k.push(spacer());
k.push(body("The session runs the Bernice Jackson anchor case through Topic 3.1's three core questions, then pivots to AMA citations and an AI-generated citation you have to break."));

k.push(h1("1. The Case, Continued from Module 1"));
k.push(infoBox("Bernice Jackson",[
 "**56-year-old female**, right knee pain from **osteoarthritis**",
 "**PMH:** hypertension · **cardiac arrhythmia treated with a pacemaker** · hypercholesterolemia treated with medication",
 "**The question:** will strength training be effective in managing her knee OA?",
 "The session works from a **PEDro** search and asks which returned article best fits the question"],C.blue,C.lightBlue));

k.push(h1("2. Breakout Structure — The Three Questions Again"));
k.push(detail(["Question","What the groups had to establish"],[
 ["**Is the study valid?**","Research question · design and sample size · methods and data analysis"],
 ["**Are the results meaningful?**","Effect size · clinical significance · alternative explanations"],
 ["**Are the results meaningful to my patient?**","Generalizability · feasibility · cost-benefit analysis"],
 ["**What is your clinical bottom line for Ms. Jackson?**","The synthesis, in one or two sentences"]],[3400,5960]));

k.push(h1("3. Points Raised in the Session Worth Keeping"));
k.push(bullet("**Power and enrolment:** the group checked whether enough participants were enrolled to detect a difference — that's what power tells you, and it determines whether you can generalise the findings."));
k.push(bullet("**MCID vs p-value, applied:** on the **KOOS** (Knee injury and Osteoarthritis Outcome Score), a patient needs a change of roughly **10 to 12 points** before you can say a real change occurred rather than measurement error."));
k.push(tnote("The MCID applies to the individual measurement tool and tells you whether there was clinical significance on that tool. The p-value tells you whether there was a difference between the groups. Two different questions."));
k.push(bullet("**Feasibility and safety:** the group flagged her elevated blood pressure as a consideration when implementing the intervention — the same patient-circumstances pillar that made TENS questionable in Module 1."));
k.push(bullet("**The bottom line reached:** trunk stabilization would likely benefit her pain levels, and the KOOS outcome addresses functional mobility, which is what you'd want to affect in this patient."));

k.push(h1("4. The AMA Citation Exercise"));
k.push(body("The second half: generate an AMA citation for the chosen article, then critique one that ChatGPT produced from the prompt “generate a citation for this article” with the PDF attached."));
k.push(bullet("**AMA format for an online journal article:** Author AA. Title of article. Abbreviated Title of Journal. Year of publication;volume(issue):page numbers/article number. DOI"));
k.push(compare("CORRECT CITATION","AI-GENERATED CITATION",
 ["Nazir SNB, Rathore FA. Efficacy of Mulligan joint mobilizations and trunk stabilization exercises versus isometric knee strengthening in the management of knee osteoarthritis: a randomized controlled trial. **BMC Sports Sci Med Rehabil.** 2024;16:105. doi:10.1186/s13102-024-00893-7"],
 ["Nazir S, Rathore F, **Khan M, et al.** Effects of Mulligan mobilization and core stability versus quadriceps exercises for knee arthritis. **J Sports Med Rehabil.** **2023**;12(4):55-72. doi:10.1186/13102-2023-88937"],
 C.green,C.red,C.lightGreen,C.lightRed));
k.push(infoBox("The six errors the groups had to find",[
 "**Extra authors added** (“Khan M, et al.”)",
 "**Incorrect publication year**",
 "**Paraphrased article title** — not verbatim",
 "**Fabricated journal title abbreviation**",
 "**Invented volume, issue, and page numbers**",
 "**Invalid DOI structure**"],C.red,C.lightRed));
k.push(tip("Notice that the fabricated citation is plausible on every line. That's the point of Topic 3.4. If you drop an article into an AI tool and it adds authors, the entire output is suspect — check every field against the source, or write the citation yourself."));

k.push(h1("5. Assignment Structure for the Week"));
k.push(detail(["Item","What it required"],[
 ["**Group assignment**","Find studies related to the **anchor case**, provide the **search strategy** — database, search terms, results — and the best study **with its level of evidence**, plus the AMA citation"],
 ["**Quiz 3**","Module 3 critical appraisal · **the PEDro scale** · **responsible AI use**"],
 ["**Reminder from the session**","All assignments are tied to the anchor case. AI is a tool for the process, not a replacement for doing the assignment"]],[2800,6560]));
k.push(tnote("Citation managers were flagged in the session as producing more errors than doing it manually. University writing centres and library resources are the recommended backup."));

k.push(...glossary("Quick-Reference Glossary — Sync Session 3",[
 ["Anchor case","The Module 0 case every weekly assignment builds on — Bernice Jackson"],
 ["PEDro scale","Quality rating applied to PT intervention studies in the PEDro database"],
 ["KOOS","Knee injury and Osteoarthritis Outcome Score; MCID roughly 10–12 points"],
 ["AMA citation format","Author AA. Title. Abbrev Journal. Year;volume(issue):pages. DOI"],
 ["Clinical bottom line","The one- or two-sentence practice conclusion drawn from an appraisal"]]));

k.push(linkBox("🔗 Resources named in Module 3",[
 ["PEDro — Physiotherapy Evidence Database","https://pedro.org.au/",""],
 ["EQUATOR Network — reporting guidelines","https://www.equator-network.org/",""],
 ["CONSORT statement","https://www.equator-network.org/reporting-guidelines/consort/",""],
 ["TIDieR checklist","https://www.equator-network.org/reporting-guidelines/tidier/",""],
 ["AMA Manual of Style","https://www.amamanualofstyle.com/",""]],C.teal));

build(k,"/home/claude/out/Module3_AnalyzingData_StudyNotes.docx");
