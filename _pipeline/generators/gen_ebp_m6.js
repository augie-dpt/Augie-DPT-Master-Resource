const L = require('/home/claude/notes_lib.js');
const {C,h1,h2,body,bullet,tnote,tip,compare,detail,infoBox,banner,glossary,fig,pageBreak,spacer,cover,build,linkBox} = L;
const E="/home/claude/emb34/";
const k=[];

k.push(...cover("Evidence Based Practice I (DPTH 6311)","Module 6: Analyzing Data and Evaluating Research",
 "Topics 6.1–6.5 + Sync Session 6 — the last statistics block, and writing your own CAT",
 ["**Every topic in this module is marked (Recommended) in Canvas.** They are still the statistical vocabulary Trimester 2 assumes, and Quiz 6 covers technology and EBP in the real world",
  "**Dr. Shane Koppenhaver** records the regression and ANCOVA lectures; the rest follow the Module 2 and 3 pattern",
  "**The graded work is the CAT.** The Harmonize assignment has you write a Critically Appraised Topic using CATMaker, which is why the how-to paper and the worked example sit at the top of the module"]));

/* ─────────────────────────── TOPIC 6.1 ─────────────────────────── */
k.push(banner("TOPIC 6.1","Correlation  (Recommended)"));
k.push(spacer());
k.push(body("Objectives: define correlation and its application; differentiate the coefficients and their uses; interpret coefficients and their clinical significance; identify real-world applications in PT."));

k.push(h1("1. What Correlation Does"));
k.push(bullet("**Correlation quantifies the relationship between two variables** — how changes in one relate to changes in the other."));
k.push(detail(["Value","Meaning"],[
 ["**+1**","Perfect **positive** relationship"],
 ["**0**","**No** relationship"],
 ["**−1**","Perfect **negative** relationship"]],[2000,7360]));
k.push(bullet("**Clinical example:** the relationship between **gait speed and fall risk** in older adults."));
k.push(compare("STRENGTH","DIRECTION",
 ["**Weak: r ≤ 0.25**","**Moderate: r = 0.25 to 0.75**","**Strong: r ≥ 0.75**"],
 ["**Positive:** both variables increase together","**Negative:** one increases as the other decreases"],
 C.blue,C.teal,C.lightBlue,C.lightTeal));

k.push(h1("2. Which Coefficient"));
k.push(detail(["Coefficient","Use it for"],[
 ["**Pearson (r)**","**Linear relationships, continuous data**"],
 ["**Spearman's rho (rₛ)**","**Nonparametric** — ordinal or non-normally distributed data"],
 ["**Phi coefficient (φ)**","**Binary data** — the 2×2 case from Topic 3.8"],
 ["**Point biserial (r_pb)**","Links a **binary** variable to a **continuous** one"]],[2800,6560]));
k.push(tip("The coefficient follows the data type, exactly like the parametric/nonparametric table in Topic 3.7. If a paper reports Pearson's r on ordinal pain scores, that's a legitimate criticism to make in an appraisal."));

k.push(h1("3. Scatter Plots"));
k.push(bullet("**Positive correlation:** points trend upward. **Negative:** downward. **No correlation:** random pattern."));
k.push(bullet("**Always look at the scatter plot.** Linear correlation coefficients miss **nonlinear relationships** — age and strength being the standard example."));

k.push(h1("4. Significance vs Relevance"));
k.push(compare("STATISTICAL SIGNIFICANCE","CLINICAL RELEVANCE",
 ["The observed relationship is **unlikely to be due to chance** (p < 0.05)"],
 ["Considers the **magnitude** — r = 0.3 is not r = 0.8","**Even small correlations may matter clinically** in chronic disease management"],
 C.blue,C.green,C.lightBlue,C.lightGreen));

k.push(h1("5. Limitations"));
k.push(infoBox("What correlation cannot tell you",[
 "**Correlation does not imply causation**",
 "**Confounding variables** can drive the apparent relationship",
 "**The example:** hand strength and fall risk may both be driven by overall deconditioning — neither causes the other",
 "**Outliers** skew results — one unusually fast recovery distorts the coefficient",
 "**Restricted range** understates true correlations when variability is limited"],C.red,C.lightRed));
k.push(bullet("**Partial correlation** controls for a third variable to clarify the direct relationship between the two you care about."));

k.push(h1("6. Where It Shows Up"));
k.push(detail(["Research type","Correlation used to examine"],[
 ["**Diagnostic**","Imaging results vs clinical diagnosis accuracy"],
 ["**Prognostic**","Early mobility vs recovery rates"],
 ["**Outcome measures**","Physical activity levels vs quality of life in chronic conditions"]],[2500,6860]));

k.push(...glossary("Quick-Reference Glossary — Topic 6.1",[
 ["Correlation","Quantified relationship between two variables, −1 to +1"],
 ["Pearson r","Correlation coefficient for linear relationships in continuous data"],
 ["Spearman's rho","Nonparametric correlation for ordinal or non-normal data"],
 ["Phi coefficient","Correlation for two binary variables"],
 ["Point biserial correlation","Correlation between a binary and a continuous variable"],
 ["Scatter plot","Visual display of the relationship between two variables"],
 ["Partial correlation","Correlation between two variables controlling for a third"],
 ["Restricted range","Limited variability that artificially lowers a correlation"]]));

k.push(pageBreak());

/* ─────────────────────────── TOPIC 6.2 ─────────────────────────── */
k.push(banner("TOPIC 6.2","Regression  (Recommended)"));
k.push(spacer());
k.push(body("Two lectures sit here: **linear regression** and **analysis of covariance (ANCOVA)**, both from the Portney regression chapter."));

k.push(h1("1. From Correlation to Prediction"));
k.push(bullet("**Regression uses the correlation between two variables as a basis for prediction.**"));
k.push(detail(["Term","Role"],[
 ["**X**","**Independent variable** — the *predictor*"],
 ["**Y**","**Dependent variable** — the *criterion*. Its value depends on X, which is why it's called dependent"],
 ["**We use X to predict Y**",""]],[2400,6960]));
k.push(infoBox("The simple linear regression model",[
 "**Ŷ = a + bX** — an equation describing the line that best fits the data",
 "**Predicted Y = Y-intercept + (slope)(X)**",
 "**Predicted Y = regression constant + (regression coefficient)(X)** — equivalent expressions"],C.blue,C.lightBlue));

k.push(h1("2. The Line of Best Fit"));
k.push(...fig(E+"fig_bestfit.png",1232,402,"Left: the regression line through blood pressure against age. Right: the same data with residuals drawn in (Regression deck)"));
k.push(bullet("**Error from the line = residual.** Residuals are **squared** to eliminate sign and to penalise worse errors. **The line with the least squared errors is the line of best fit.**"));

k.push(h1("3. Assumptions"));
k.push(detail(["Assumption","Detail"],[
 ["**1. Linear relationship**","The line approximates the true relationship in the population"],
 ["**2. For every X there is a normal distribution of Y**","Sample data are random samplings from those distributions"],
 ["**3. Homogeneity of variance**",""]],[3400,5960]));
k.push(bullet("**Testing them:** plot **residuals on the Y-axis against predicted values on the X-axis.** A structureless cloud means the assumptions hold; a pattern means they don't."));
k.push(bullet("**If the relationship is non-linear**, you need a different technique — e.g. **polynomial regression** for a quadratic curve."));

k.push(h1("4. Outliers"));
k.push(bullet("Deviant scores (say **> 3 SD from the mean**) have a **large effect** on the regression line."));
k.push(compare("YOU MAY DISCARD IF","YOU MAY NOT DISCARD",
 ["An **identifiable error** exists: measurement error · recording error · equipment malfunction · miscalculation · an **aberrant subject who should have been excluded**"],
 ["**On statistical grounds alone.** “It's far from the line” is not a reason"],
 C.green,C.red,C.lightGreen,C.lightRed));

k.push(h1("5. Accuracy of Prediction"));
k.push(detail(["Statistic","What it tells you"],[
 ["**R** — correlation coefficient","Rough indicator of goodness of fit for the regression line. Same as r"],
 ["**R²** — coefficient of determination","**The proportion of variance in Y explained by X.** This is the number that matters"],
 ["**ANOVA of regression**","Tests whether the predictive relationship occurred by chance (**H₀: b = 0**). If the slope is zero the line is horizontal, meaning no relationship. **p < α → reject H₀ → the predictive relationship is significant**"]],[2800,6560]));
k.push(infoBox("Reading a linear regression output — the worked SBP example",[
 "**R² = 0.756:** age explains **75.6%** of systolic blood pressure",
 "**Model p < 0.05:** the model significantly predicts SBP",
 "**The equation: SBP = 64.58 + 1.39 (Age)**",
 "**Standardized Beta:** quantifies strength of prediction. **With only one predictor it equals R**",
 "**Predictor p < 0.05:** age significantly contributes to the model"],C.teal,C.lightTeal));
k.push(tip("R² is the number to quote and the number to look for. “Significant predictor” with an R² of 0.04 means the relationship is real and almost useless — a distinction papers rarely make for you."));

k.push(h1("6. ANCOVA — Analysis of Covariance"));
k.push(bullet("**The problem:** random assignment *should* produce homogeneous groups at baseline except for the IV — **but it doesn't always work, especially with smaller samples.**"));
k.push(bullet("**The solution:** when you cannot control a variable through design and sampling, **control it statistically.** ANCOVA removes the variance in the DV accounted for by the **covariate**, producing **adjusted means.**"));
k.push(tnote("ANCOVA is a combination of ANOVA and linear regression."));

k.push(h1("7. The ANCOVA Worked Example"));
k.push(detail(["Step","What happened"],[
 ["**Start**","One IV with two levels (teaching strategy); DV continuous (clinical performance). A **t-test** is the natural analysis"],
 ["**t-test result**","**Small mean difference. p > 0.05 — not significantly different**"],
 ["**The observation**","**GPA was substantially different between the groups** — and GPA is likely correlated with clinical performance, so it's a confounder"],
 ["**The fix**","Statistically adjust the mean clinical-performance scores **using GPA as a covariate**"],
 ["**ANCOVA result**","**Large adjusted mean difference.** GPA is significantly related to the DV, and **strategy is now significantly different between groups**"],
 ["**Also notice**","A **drastic decrease in unexplained variance**"]],[2200,7160]));
k.push(tip("This example is the cleanest demonstration in the whole course of why you read the methods before the results. The same data produced “no difference” and “significant difference” depending only on whether a known confounder was accounted for."));

k.push(h1("8. ANCOVA Assumptions"));
k.push(detail(["Assumption","Detail"],[
 ["**The usual parametric assumptions**","Normal distribution for the DV · homogeneity of variance for the DV · random sampling"],
 ["**Linear relationship between covariate and DV**","**Preferably with r > 0.60**"],
 ["**Homogeneity of slopes**","The groups should have the same slope in the population"]],[3400,5960]));

k.push(h1("9. Three Ways to Analyse a Pre/Post Trial"));
k.push(detail(["#","Approach"],[
 ["**1**","**t-test on change scores** as the DV"],
 ["**2**","**2 × 2 mixed-model ANOVA** — the approach from Topic 3.6"],
 ["**3**","**ANCOVA:** post-test score as the DV, **pre-test score as the covariate**"]],[700,8660]));
k.push(tnote("The deck cites Van Breukelen (2006), J Clin Epidemiol: ANCOVA versus change from baseline gives more power in randomized studies, and more bias in nonrandomized studies."));

k.push(...glossary("Quick-Reference Glossary — Topic 6.2",[
 ["Regression","Using a correlation as the basis for prediction"],
 ["Predictor variable (X)","The independent variable used to predict"],
 ["Criterion variable (Y)","The dependent variable being predicted"],
 ["Regression constant (a)","The Y-intercept"],
 ["Regression coefficient (b)","The slope"],
 ["Residual","The error between an observed value and the regression line"],
 ["Least squares","The criterion defining the line of best fit"],
 ["Polynomial regression","Regression technique for non-linear relationships"],
 ["R²","Coefficient of determination; proportion of variance in Y explained by X"],
 ["Standardized beta","Strength of prediction; equals R with a single predictor"],
 ["ANCOVA","Analysis of covariance; statistical control of a confounder"],
 ["Covariate","The variable being statistically controlled"],
 ["Adjusted means","Group means after removing covariate-explained variance"],
 ["Homogeneity of slopes","ANCOVA assumption that groups share a common slope"]]));

k.push(pageBreak());

/* ─────────────────────────── TOPIC 6.3 ─────────────────────────── */
k.push(banner("TOPIC 6.3","Measurement Revisited — Reliability and Validity Statistics  (Recommended)"));
k.push(spacer());
k.push(body("Objectives: define key reliability and validity concepts; explain ICC, SEM and kappa; discuss how MDC and MCID evaluate clinical change; highlight clinical applications."));
k.push(tnote("This topic is Module 2 with the statistics filled in. Everything defined conceptually in Topics 2.2 and 2.3 gets its actual index here."));

k.push(h1("1. ICC — Intraclass Correlation Coefficient"));
k.push(detail(["Aspect","Detail"],[
 ["**What it is**","A measure of **relative reliability** for **continuous** data"],
 ["**Range**","**0 (no reliability) to 1 (perfect reliability)**"],
 ["**Applications**","Test-retest reliability · **interrater and intrarater** reliability"],
 ["**ICC(2,1)**","**Generalizable across raters** — use when you want the result to apply to any similar rater"],
 ["**ICC(3,1)**","**Specific to the studied rater(s)** — the result applies to those raters only"]],[2600,6760]));
k.push(tip("The model number is not decoration. A paper reporting ICC(3,1) has told you its reliability estimate may not transfer to you as a different clinician. That distinction is exactly the kind of detail an appraisal is supposed to surface."));

k.push(h1("2. SEM — Standard Error of Measurement"));
k.push(bullet("**An absolute measure of reliability** reflecting the stability of scores."));
k.push(bullet("**Clinical use:** indicates the expected **range of error** in a patient's observed score, and is used to **calculate confidence intervals for individual measurements.**"));

k.push(h1("3. Agreement Measures"));
k.push(compare("PERCENT AGREEMENT","KAPPA (κ)",
 ["Simple calculation of **how often raters agree**","**Limitation: does not account for chance agreement**"],
 ["**Adjusts for chance agreement**","**Ranges 0 (none) to 1 (perfect)**","**Weighted kappa** accounts for the *severity* of disagreements"],
 C.gold,C.green,C.lightGold,C.lightGreen));

k.push(h1("4. Internal Consistency"));
k.push(bullet("**Cronbach's alpha (α)** assesses the consistency of items within a scale. **Values near 0.90 are considered strong.**"));
k.push(bullet("**Example:** multi-item functional assessments, where correlation among items confirms they measure the same construct."));

k.push(h1("5. Measuring Change — MDC and MCID"));
k.push(compare("MDC — Minimal Detectable Change","MCID — Minimal Clinically Important Difference",
 ["**The smallest change required to surpass measurement error**","**Tied to SEM** — it's derived from it","A reliability question"],
 ["**The smallest change perceived as meaningful by patients**","Established through **anchor-based approaches** such as patient-reported outcomes","A validity question"],
 C.blue,C.teal,C.lightBlue,C.lightTeal));

k.push(h1("6. Bland-Altman Plots and Limits of Agreement"));
k.push(detail(["Concept","What it does"],[
 ["**Bland-Altman plot**","Assesses **agreement between two measurement methods.** Plots the **differences against the means** of the two methods"],
 ["**What you look for**","Patterns of disagreement — **systematic vs random**"],
 ["**Why it matters**","Helps decide whether two methods are **interchangeable**"],
 ["**Limits of agreement (LoA)**","The range within which most differences between methods will fall. **Larger limits indicate poorer agreement**"]],[2800,6560]));
k.push(tip("Bland-Altman is the right tool when a paper claims a cheap tool can replace an expensive one. A high correlation between two methods does not mean they agree — two instruments can correlate perfectly while one reads consistently 10 degrees higher."));

k.push(h1("7. Clinical Application"));
k.push(infoBox("What to use reliability statistics for",[
 "**Select and validate measurement tools**",
 "**Track meaningful patient changes** using MDC and MCID",
 "**Ensure consistency across clinicians and settings**",
 "**Example:** assessing gait speed with the **10-metre walk test** for interrater reliability"],C.green,C.lightGreen));

k.push(...glossary("Quick-Reference Glossary — Topic 6.3",[
 ["ICC","Intraclass Correlation Coefficient; relative reliability for continuous data, 0–1"],
 ["ICC(2,1)","ICC model generalizable across raters"],
 ["ICC(3,1)","ICC model specific to the raters studied"],
 ["SEM","Standard Error of Measurement; absolute reliability in original units"],
 ["Percent agreement","Raw proportion of rater agreement; ignores chance"],
 ["Kappa (κ)","Agreement statistic adjusted for chance"],
 ["Weighted kappa","Kappa accounting for the severity of disagreements"],
 ["Cronbach's alpha","Internal consistency of items within a scale; ~0.90 strong"],
 ["MDC","Minimal Detectable Change; smallest change exceeding measurement error"],
 ["MCID","Minimal Clinically Important Difference; smallest change patients find meaningful"],
 ["Anchor-based approach","Establishing MCID against a patient-reported reference"],
 ["Bland-Altman plot","Differences vs means, used to assess agreement between methods"],
 ["Limits of agreement","Range containing most differences between two methods"],
 ["10mWT","10-metre walk test"]]));

k.push(pageBreak());

/* ─────────────────────────── TOPIC 6.4 ─────────────────────────── */
k.push(banner("TOPIC 6.4","Diagnostic Accuracy  (Recommended)"));
k.push(spacer());
k.push(body("Objectives: understand diagnostic accuracy and its importance; interpret sensitivity, specificity, predictive values and likelihood ratios; explore ROC curves and clinical prediction rules; apply these to PT scenarios."));
k.push(tnote("This is Sync Session 2's ACL case generalised. Everything there is here again with the tools that were only named in passing — ROC curves, nomograms and clinical prediction rules."));

k.push(h1("1. Sensitivity and Specificity"));
k.push(compare("SENSITIVITY — SnNout","SPECIFICITY — SpPin",
 ["Ability to identify **true positives**","**Sensitivity, Negative result, rules OUT**","**High sensitivity is excellent for screening** — e.g. catching at-risk patients for osteoporosis, ensuring no one is overlooked"],
 ["Ability to identify **true negatives**","**Specificity, Positive result, rules IN**","**High specificity is critical for confirming** — e.g. imaging for ligament tears"],
 C.blue,C.red,C.lightBlue,C.lightRed));

k.push(h1("2. Predictive Values"));
k.push(detail(["Value","What it tells you"],[
 ["**PV+ / PPV**","Probability that a **positive result truly reflects the presence** of the condition. **A PV+ of 90% means 9 out of 10 positives indicate the condition**"],
 ["**PV− / NPV**","Probability that a **negative result truly excludes** the condition"],
 ["**The catch**","**Predictive values are influenced by disease prevalence in the population being tested**"]],[2400,6960]));

k.push(h1("3. Likelihood Ratios"));
k.push(detail(["Ratio","Interpretation"],[
 ["**LR+**","How much a positive result **increases** confidence in the diagnosis. **LR+ > 10 strongly supports ruling IN**"],
 ["**LR−**","How much a negative result **decreases** confidence. **LR− < 0.1 strongly supports ruling OUT**"],
 ["**Worked example**","A rotator cuff tear test with **LR+ of 15** — a positive result strongly confirms the tear"]],[2200,7160]));

k.push(h1("4. Pretest and Posttest Probability"));
k.push(detail(["Term","Definition"],[
 ["**Pretest probability**","Your initial estimate of the condition's likelihood, from **clinical judgment or epidemiological data**"],
 ["**Posttest probability**","The **revised** likelihood after applying test results and likelihood ratios"],
 ["**Nomogram**","The tool that calculates posttest probability by combining pretest probability with the test's likelihood ratio"]],[2800,6560]));

k.push(h1("5. ROC Curves"));
k.push(bullet("A **Receiver Operating Characteristic curve** graphs the **trade-off between sensitivity and specificity across different cutoff values.**"));
k.push(detail(["Measure","What it means"],[
 ["**AUC — area under the curve**","Quantifies test performance. **AUC close to 1.0 indicates excellent accuracy**"],
 ["**Steeper curves**","Better discrimination"],
 ["**Clinical use**","Determines the **most appropriate cutoff point** — e.g. setting a balance-test threshold that maximises detection of fall risk"]],[3200,6160]));

k.push(h1("6. Clinical Prediction Rules"));
k.push(bullet("**CPRs** combine clinical findings to aid diagnosis, prognosis or treatment decisions — **streamlining complex decision-making into simpler, evidence-based rules.**"));
k.push(detail(["Example CPR","What it decides"],[
 ["**Ottawa Ankle Rules**","Whether an x-ray is needed — **reducing unnecessary imaging**"],
 ["**DVT risk assessment tool**","When to order imaging for suspected deep vein thrombosis"]],[2600,6760]));
k.push(bullet("**Why they matter:** CPRs enhance efficiency and **reduce variability in clinical practice.**"));
k.push(tip("You will meet the Ottawa rules again in musculoskeletal courses. Knowing here that they are a CPR — a validated combination of findings, not one clinician's checklist — is what lets you judge whether a new rule someone shows you has actually been validated."));

k.push(h1("7. Where Diagnostic Accuracy Applies"));
k.push(detail(["Scenario","Example"],[
 ["**Screening**","Identifying early risk factors for falls or diabetes"],
 ["**Diagnosis**","Confirming ligament injuries using imaging and special tests"],
 ["**Prognosis**","Predicting recovery times for post-surgical patients"]],[2200,7160]));
k.push(tnote("Diagnostic accuracy ensures the right patients get the right tests, avoiding over-testing and underdiagnosis."));

k.push(h1("8. Limitations"));
k.push(infoBox("What accuracy statistics cannot do",[
 "**Correlation ≠ causation** — a test result alone cannot establish cause and effect",
 "**Confounding variables** like age or comorbidities influence results",
 "**The example again:** grip strength and fall risk may both be driven by deconditioning",
 "**Always interpret test results in the context of the whole patient**"],C.red,C.lightRed));

k.push(...glossary("Quick-Reference Glossary — Topic 6.4",[
 ["Diagnostic accuracy","How well a test identifies the presence or absence of a condition"],
 ["Sensitivity / SnNout","True-positive rate; a negative result on a sensitive test rules out"],
 ["Specificity / SpPin","True-negative rate; a positive result on a specific test rules in"],
 ["PV+ / PV−","Predictive values; prevalence-dependent"],
 ["LR+ / LR−","Likelihood ratios; >10 rules in, <0.1 rules out"],
 ["Pretest probability","Estimated likelihood before testing"],
 ["Posttest probability","Revised likelihood after testing"],
 ["Nomogram","Graphical tool converting pretest probability plus LR into posttest probability"],
 ["ROC curve","Sensitivity vs specificity across cutoff values"],
 ["AUC","Area under the ROC curve; closer to 1.0 is better"],
 ["Clinical prediction rule (CPR)","Validated combination of findings guiding a clinical decision"],
 ["Ottawa Ankle Rules","CPR determining the need for ankle radiographs"]]));

k.push(pageBreak());

/* ─────────────────────────── TOPIC 6.5 ─────────────────────────── */
k.push(banner("TOPIC 6.5","Epidemiology — Measuring Risk  (Recommended)"));
k.push(spacer());
k.push(body("Objectives: define epidemiology and its relevance to PT; differentiate descriptive from analytic epidemiology; explain prevalence and incidence; interpret relative and absolute risk; apply ARR, RRR and NNT; recognise effect modification and confounding."));

k.push(h1("1. What Epidemiology Is"));
k.push(bullet("**The study of disease distribution and determinants in populations.** Its purpose: understand disease patterns, evaluate causative factors, assess health policy effectiveness."));
k.push(bullet("**Scope over time:** originally mortality and morbidity from **acute infectious disease**; broadened to **chronic disease, disability and health status** (the WHO definition); now focused on **identifying causes of health outcomes through population studies.**"));
k.push(compare("DESCRIPTIVE EPIDEMIOLOGY","ANALYTIC EPIDEMIOLOGY",
 ["**Describes patterns** of health, disease and disability","Study types: **case reports · correlational studies · cross-sectional surveys**","Organised around **person, place and time** — demographics · geographic and environmental factors · temporal and seasonal patterns"],
 ["**Tests hypotheses about causes**","Cohort, case-control and experimental designs","Produces the risk measures below"],
 C.blue,C.purple,C.lightBlue,C.lightPurple));

k.push(h1("2. Prevalence vs Incidence"));
k.push(compare("PREVALENCE","INCIDENCE",
 ["**Existing cases at a point in time**","**Point prevalence:** snapshot at a single moment","**Period prevalence:** cases over a specified period","Example: **22% obesity prevalence** from the National Health Interview Survey"],
 ["**New cases in a specific time period**","**Cumulative incidence:** proportion of a population developing the disease over a period","**Incidence rate:** adjusts for **person-time**, accounting for varying follow-up","Example: breast cancer incidence in the Nurses' Health Study"],
 C.gold,C.green,C.lightGold,C.lightGreen));
k.push(tnote("Both prevalence and incidence are influenced by time and population size."));

k.push(h1("3. Relative and Absolute Risk"));
k.push(detail(["Measure","Interpretation"],[
 ["**Relative risk (RR)**","Comparison of risk between **exposed vs unexposed** groups. **RR = 1** no difference · **RR > 1** increased risk · **RR < 1** protective effect"],
 ["**Absolute risk**","The **actual difference** in disease rates between exposed and unexposed"],
 ["**Worked example**","Physical activity and hip fracture risk: **RR = 0.78** — a protective effect"]],[2600,6760]));

k.push(h1("4. Measures of Treatment Effect"));
k.push(detail(["Measure","Definition"],[
 ["**EER**","**Experimental Event Rate** — event rate in the treatment group"],
 ["**CER**","**Control Event Rate** — event rate in the control group"],
 ["**RRR — relative risk reduction**","**Proportional** reduction in risk"],
 ["**ARR — absolute risk reduction**","The **actual difference** in event rates"],
 ["**Worked example**","Exercise and manipulative therapy for cervicogenic headaches"]],[2500,6860]));
k.push(tip("RRR and ARR describe the same result and sound wildly different. A drop from 2% to 1% is a 50% relative risk reduction and a 1% absolute risk reduction. Papers and marketing quote the relative figure; the absolute figure is what your patient actually experiences."));

k.push(h1("5. NNT and NNH"));
k.push(detail(["Measure","Definition"],[
 ["**NNT — number needed to treat**","How many patients must be treated to **prevent one adverse event**"],
 ["**NNH — number needed to harm**","How many must be treated to **cause one adverse event**"],
 ["**Worked example**","**NNT = 2** for cervicogenic headache treatment — two patients need treating to prevent one recurrence"],
 ["**Interpretation**","**Lower NNT and higher NNH indicate better treatment benefit**"]],[3000,6360]));

k.push(h1("6. Effect Modification vs Confounding"));
k.push(compare("EFFECT MODIFICATION","CONFOUNDING",
 ["**The effect of an exposure differs across subgroups**","Example: diabetes and endometrial cancer risk **modified by physical activity**","**A real finding you want to report**"],
 ["**An external variable distorts the true relationship** between exposure and outcome","Example: an influenza vaccine study **adjusted for functional status**","**A problem you have to control for**"],
 C.teal,C.red,C.lightTeal,C.lightRed));
k.push(tip("Students blur these two constantly. Effect modification is signal — the treatment genuinely works differently in different people. Confounding is noise — something else is producing the apparent effect. One you report, the other you remove."));

k.push(h1("7. Why a DPT Cares"));
k.push(infoBox("Using epidemiological data clinically",[
 "**Decide on interventions, assess risks, and balance benefits against harms**",
 "**Understand risk factors and treatment effects** for informed patient care",
 "**Example:** choosing between exercise interventions to reduce falls in older adults"],C.green,C.lightGreen));

k.push(...glossary("Quick-Reference Glossary — Topic 6.5",[
 ["Epidemiology","Study of disease distribution and determinants in populations"],
 ["Descriptive epidemiology","Describes patterns by person, place and time"],
 ["Analytic epidemiology","Tests hypotheses about causes"],
 ["Prevalence","Existing cases at a point (point) or over a period (period)"],
 ["Incidence","New cases within a time period"],
 ["Cumulative incidence","Proportion developing the disease over a period"],
 ["Incidence rate","Incidence adjusted for person-time"],
 ["Relative risk (RR)","Risk in exposed ÷ risk in unexposed; 1 = no difference"],
 ["Absolute risk","Actual difference in disease rates"],
 ["EER / CER","Experimental / control event rate"],
 ["RRR","Relative risk reduction; proportional"],
 ["ARR","Absolute risk reduction; actual difference in event rates"],
 ["NNT","Number needed to treat to prevent one event"],
 ["NNH","Number needed to treat to cause one adverse event"],
 ["Effect modification","Exposure effect genuinely differs across subgroups"],
 ["Confounding","External variable distorting the exposure–outcome relationship"]]));

k.push(pageBreak());

/* ─────────────────────────── THE CAT ─────────────────────────── */
k.push(banner("MODULE 6 ASSIGNMENT","Writing a Critically Appraised Topic (CATMaker)"));
k.push(spacer());
k.push(body("The module's graded work. Two resources sit at the top of Module 6 for it: the **Sadigh et al. how-to paper** and a **worked CAT example.**"));

k.push(h1("1. What a CAT Is — and Isn't"));
k.push(bullet("**A CAT is a standardized summary of research evidence organized around a clinical question**, providing both a **critique of the research** and a **statement of the clinical relevance** of the results."));
k.push(compare("A CAT IS","A CAT IS NOT",
 ["A critique of **internal validity, external validity (generalizability) and statistical rigour**","A summary of the best research evidence to date, **in a few pages**","**Writable by clinicians and practitioners**"],
 ["**Just an abstract** of existing evidence","**A systematic review** — those are written by content and methodology experts","**A substitute for a full appraisal** when a thorough answer is needed"],
 C.green,C.red,C.lightGreen,C.lightRed));
k.push(tnote("CATs provide easy access to the scientific literature for clinicians who are either too busy to pursue the answer among the mixed results from a search engine, or do not have the specialized skill to critically appraise the literature and reach an appropriate conclusion."));

k.push(h1("2. The Five Steps"));
k.push(detail(["Step","What you do"],[
 ["**1. Ask**","Formulate a **focused and answerable question** that translates uncertainty into something searchable. Usually a **foreground question** in **PICO** format — patient, intervention, comparator, outcome. **Sometimes there is no comparator, and it becomes PIO**"],
 ["**2. Search**","A thorough literature search. Three key steps: **identify terms to fit the PICO · search secondary sources · search primary sources.** Search terms must refer back to the original PICO"],
 ["**3. Appraise**","Critically appraise the evidence for **validity and clinical relevance**, assigning a **level of evidence**"],
 ["**4. Apply**","Apply the results to clinical practice"],
 ["**5. Evaluate**","**Evaluation of your own performance** — whether the process altered practice"]],[1900,7460]));
k.push(infoBox("What makes a question worth a CAT",[
 "**Important to the patient's well-being**",
 "**Relevant to the clinician's knowledge needs**",
 "**Of interest to the patient, clinician or learners**",
 "**Likely to recur in clinical practice**",
 "**Answerable in the time available**"],C.blue,C.lightBlue));

k.push(h1("3. The Validity Argument the Paper Makes"));
k.push(detail(["Concept","How the paper defines it"],[
 ["**Validity**","**Internal to the study** — the results are true for the population studied and are not the result of bias or confounding"],
 ["**Generalizability / applicability**","The ability to apply the results to a broader population"],
 ["**The dependency**","**Validity is a precondition for generalizability.** If the results aren't valid, there is nothing to apply anywhere"],
 ["**Bias**","Results reflect factors other than and distinct from those formally being studied"],
 ["**Confounding**","An apparent treatment effect — or lack of one — caused by another variable, which is associated with both treatment and outcome but is **not part of the mechanism of action**"]],[2800,6560]));
k.push(bullet("**Why the randomized double-blind trial ranks highest:** **randomization** allocates participants in a way no one can anticipate, balancing known and unknown prognostic factors and reducing confounding; **double-blinding** keeps both participant and outcome assessor unaware of allocation, removing two separate sources of bias. **Temporal order is also clear** — the intervention precedes the outcome."));
k.push(tip("Note what a single-blind trial costs you. The paper says explicitly that a randomized single-blind trial is more prone to bias — which is worth remembering when you score PEDro items 5 through 7 on a rehab study that could never blind its patients."));

k.push(h1("4. Appraisal Instruments Named"));
k.push(detail(["Instrument","Used for"],[
 ["**STARD**","Reporting standard for **diagnostic accuracy** studies"],
 ["**PRISMA**","**Reporting checklist** for systematic reviews and meta-analyses"],
 ["**AMSTAR**","Instrument for **evaluating the methodological quality** of systematic reviews — including whether an *a priori* design was specified"],
 ["**AGREE**","**Appraisal of Guidelines for Research and Evaluation** — the international gold standard for practice-guideline evaluation; 23 items scored on a 7-point Likert scale"],
 ["**CATMaker**","**The computer-assisted critical appraisal tool** the assignment uses, from the Centre for Evidence-Based Medicine"]],[2400,6960]));
k.push(tnote("PRISMA is a reporting checklist — it tells you whether a review reported what it should have. AMSTAR evaluates whether the review was actually done well. They are not interchangeable."));

k.push(...glossary("Quick-Reference Glossary — The CAT Assignment",[
 ["CAT","Critically Appraised Topic; a standardized, question-organized evidence summary"],
 ["Ask · Search · Appraise · Apply · Evaluate","The five steps of writing a CAT"],
 ["Foreground question","A specific clinical question about a particular patient situation"],
 ["PIO","PICO without a comparator"],
 ["Bias","Study results reflecting factors other than those being studied"],
 ["Confounding","A third variable producing an apparent (or masked) treatment effect"],
 ["STARD","Reporting standard for diagnostic accuracy studies"],
 ["PRISMA","Reporting checklist for systematic reviews and meta-analyses"],
 ["AMSTAR","Instrument for assessing the methodological quality of systematic reviews"],
 ["AGREE","Instrument for appraising clinical practice guidelines"],
 ["CATMaker","Computer-assisted appraisal tool from CEBM for building CATs"]]));

k.push(pageBreak());

/* ─────────────────────────── SYNC SESSION 6 ─────────────────────────── */
k.push(banner("SYNC SESSION 6","EBP in Physical Therapy — Technology as a Clinical Skill"));
k.push(spacer());
k.push(body("Objectives: differentiate push from pull technology; apply EBP technology to a patient case; translate evidence to stakeholders. **Quiz 6 covers technology and EBP in the real world.**"));

k.push(h1("1. The Problem This Solves"));
k.push(infoBox("The EBP challenge, stated plainly",[
 "**Limited time**",
 "**Rapid growth of the literature**",
 "**Staying current is difficult**"],C.red,C.lightRed));
k.push(bullet("**Technology supports efficient EBP.** Push and pull tools reduce time barriers; reference management enables long-term use of the evidence you've already appraised."));

k.push(h1("2. Pull vs Push"));
k.push(compare("PULL TECHNOLOGY","PUSH TECHNOLOGY",
 ["**On-demand information retrieval**","**Reactive** — answers the question you have *right now*","**Triggered by a specific clinical question (PICO)**","Requires the clinician to actively search, and requires **search and appraisal skills**","Used **at the point of care**","**Examples: PubMed · PEDro · TRIP**"],
 ["**Automatic delivery** — information is sent to you","**Proactive** — keeps you informed about new evidence **before you realise you need it**","**Triggered by preselected topics or searches**","**Supports staying current over time**, reduces repeated searching","**Examples: My NCBI alerts · podcasts · social media**"],
 C.blue,C.green,C.lightBlue,C.lightGreen));
k.push(tnote("Push identifies and alerts you to new evidence. Pull retrieves, appraises and applies it. Effective clinicians do not choose push or pull — they intentionally use both."));

k.push(h1("3. Reference Management"));
k.push(bullet("**Essential EBP infrastructure — not just extra software.** Tools that store, organise and retrieve research articles and citations: **Mendeley · Zotero · EndNote.**"));
k.push(detail(["What it enables","Why it matters"],[
 ["**Attach PDFs and notes**","The appraisal you already did stays attached to the article"],
 ["**Rapid retrieval — search and filter by topic or diagnosis**","Manual organization is inefficient and error-prone once you have any volume"],
 ["**Organise evidence by PICO or diagnosis**","**Supports CAT creation**"],
 ["**Efficient sharing with colleagues and payors**","Documentation · team communication · **justification of care**"]],[3200,6160]));

k.push(h1("4. Build Your Technology Profile"));
k.push(infoBox("The assignment's minimum",[
 "**1–2 pull tools**",
 "**1–2 push tools**",
 "**1 reference manager**"],C.gold,C.lightGold));
k.push(tip("Pick these now and actually configure them. The profile takes twenty minutes to set up and is the only thing from this course that keeps working for you after the final grade posts."));

k.push(h1("5. The Whole Course in Seven Steps"));
k.push(detail(["#","Step","Where it came from"],[
 ["**1**","**PICO question** — define the patient problem, intervention, comparison and outcomes","Topic 2.4"],
 ["**2**","**Pull technology** — search for the best available evidence (PubMed, PEDro)","Topic 2.4 · Sync 6"],
 ["**3**","**Article appraisal** — critically evaluate quality, bias and applicability","Topic 3.1 · Module 4 / PEDro"],
 ["**4**","**Evidence synthesis** — summarise findings across studies","Topic 3.1 · Module 3"],
 ["**5**","**Critically Appraised Topic (CAT)** — state the clinical bottom line","Topic 5.1 · Module 6"],
 ["**6**","**Knowledge translation** — convert evidence into patient-appropriate language","Topic 5.1 · Sync 5"],
 ["**7**","**Patient management** — implement, monitor outcomes, adapt the plan of care","The point of all of it"]],[700,5300,3360]));
k.push(bullet("**Organisation supports translation** — to patients and families, to other healthcare professionals including other PTs, to third-party payors, and to administrators."));

k.push(...glossary("Quick-Reference Glossary — Sync Session 6",[
 ["Pull technology","On-demand, PICO-driven searching at the point of care"],
 ["Push technology","Automatic delivery of new evidence on preselected topics"],
 ["My NCBI","PubMed account used to save searches and set alerts"],
 ["Reference manager","Software storing, organizing and retrieving citations and PDFs"],
 ["Technology profile","A clinician's chosen set of pull tools, push tools and reference manager"]]));

k.push(linkBox("🔗 Resources named in Module 6",[
 ["CEBM — CATMaker and appraisal tools","https://www.cebm.ox.ac.uk/resources",""],
 ["PRISMA statement","https://www.prisma-statement.org/",""],
 ["AMSTAR","https://amstar.ca/",""],
 ["AGREE II","https://www.agreetrust.org/",""],
 ["STARD","https://www.equator-network.org/reporting-guidelines/stard/",""],
 ["Zotero","https://www.zotero.org/",""],
 ["Mendeley","https://www.mendeley.com/",""],
 ["PEDro","https://pedro.org.au/",""],
 ["TRIP Database","https://www.tripdatabase.com/",""]],C.teal));

build(k,"/home/claude/out/Module6_AnalyzingDataAndEvaluatingResearch_StudyNotes.docx");
