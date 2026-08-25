const L = require('/home/claude/notes_lib.js');
const {C,h1,h2,body,bullet,tnote,tip,compare,detail,infoBox,banner,glossary,fig,pageBreak,spacer,cover,build,linkBox} = L;
const k=[];

k.push(...cover("Evidence Based Practice I (DPTH 6311)","Module 4: Designing Clinical Research",
 "Topics 4.1–4.4 + Sync Session 4 — how studies are built, and the PEDro scale that grades them",
 ["**All four topics are required.** No “recommended” material this week",
  "**The sync session is where the PEDro scale is taught line by line** against a real knee-OA trial. Quiz 4 and the group assignment both run on it",
  "**File-naming warning:** all four transcripts are stored as “Module 3 …” files, and the handouts as “Topic 1–4 ppt.” Canvas order is what these notes follow"]));

/* ─────────────────────────── TOPIC 4.1 ─────────────────────────── */
k.push(banner("TOPIC 4.1","Choosing a Sample"));
k.push(spacer());
k.push(body("Objectives: understand why sampling matters; differentiate populations from samples and target from accessible populations; identify inclusion and exclusion criteria; compare probability and non-probability methods; connect sample size to power; reduce sampling error and bias; evaluate transparent reporting of participation."));

k.push(h1("1. Population vs Sample"));
k.push(compare("POPULATION","SAMPLE",
 ["**The entire group to whom findings are intended to apply**","e.g. all patients with a particular condition"],
 ["**The subset actually selected for study participation**","**Practicality:** studying everyone is usually impossible on time, cost or logistics","**Accuracy:** a well-chosen sample supports accurate inference without studying every individual"],
 C.blue,C.green,C.lightBlue,C.lightGreen));
k.push(compare("TARGET POPULATION","ACCESSIBLE POPULATION",
 ["**The ideal group you wish to generalise to**","e.g. all individuals with diabetes, globally"],
 ["**The group actually available** given location, access and resources","e.g. diabetic patients in one healthcare system"],
 C.teal,C.gold,C.lightTeal,C.lightGold));
k.push(tip("The gap between target and accessible population IS the generalizability question. When you appraise a paper, find the accessible population in the methods and ask honestly how far it sits from the population the discussion section claims to speak for."));

k.push(h1("2. Selection Criteria"));
k.push(detail(["Criterion","Definition","Example"],[
 ["**Inclusion**","Characteristics participants must have","Aged 40–60 · confirmed diagnosis of diabetes"],
 ["**Exclusion**","Factors that disqualify a participant","Pre-existing conditions that may interfere with treatment outcomes"]],[1900,3800,3660]));
k.push(bullet("**Why they matter:** clear criteria define the study population, **minimise confounding**, and improve **internal validity** by ensuring participants match the study's purpose."));

k.push(h1("3. Recruitment"));
k.push(bullet("**Methods:** phone calls · email invitations · clinic posters · community outreach · in-person recruitment at medical centres and research clinics."));
k.push(bullet("**The challenge:** not everyone invited agrees to participate, which affects both **sample size** and **diversity.**"));
k.push(tnote("The Framingham Heart Study recruited over several years using clinic-based and community outreach efforts. Its success hinged on careful sampling and recruitment that represented the community accurately, with adjustments along the way to ensure diversity and reduce bias."));

k.push(h1("4. Sampling Methods"));
k.push(compare("PROBABILITY SAMPLING","NON-PROBABILITY SAMPLING",
 ["**Random selection** — every individual has an equal chance of being selected","**Reduces bias, supports generalizability**"],
 ["**Selection is not random** — the sample may not represent the population equally","**Quicker, but less representative**"],
 C.green,C.red,C.lightGreen,C.lightRed));
k.push(detail(["Probability method","How it works"],[
 ["**Simple random**","Every individual in the population has an equal chance of being selected"],
 ["**Systematic**","Selecting every *n*th person from a list or queue"],
 ["**Stratified**","Dividing the population into subgroups (age, gender) and randomly sampling **from each subgroup**"],
 ["**Cluster**","Selecting whole clusters — communities, schools — then sampling individuals within them"]],[2600,6760]));
k.push(detail(["Non-probability method","How it works"],[
 ["**Convenience**","Participants who are readily available or easy to contact — e.g. patients at one clinic"],
 ["**Purposive**","Individuals chosen for specific traits important to the study — e.g. high-risk patients"],
 ["**Snowball**","Participants recruit others. Useful for **hard-to-reach populations** such as rare diseases"]],[2600,6760]));

k.push(h1("5. Sample Size and Power"));
k.push(detail(["Concept","What it does"],[
 ["**Sample size**","Number of participants. **Larger samples increase reliability**"],
 ["**Small samples**","May not capture the full range of population variability — **increasing false negatives**"],
 ["**Power**","Probability of detecting a true effect. **Low-powered studies miss significant findings**"]],[2500,6860]));

k.push(h1("6. Error and Bias"));
k.push(compare("SAMPLING ERROR","SAMPLING BIAS",
 ["**The difference between the sample's results and what would be true for the whole population**","A consequence of chance — unavoidable, but shrinkable"],
 ["**The sample does not accurately represent the population**","e.g. certain groups over-represented","A consequence of method — avoidable"],
 C.gold,C.red,C.lightGold,C.lightRed));
k.push(infoBox("Reducing bias",[
 "**Use random sampling methods** so every individual has an equal chance of selection",
 "**Stratify** to guarantee representation of important subgroups — age, gender"],C.green,C.lightGreen));

k.push(h1("7. Reporting Participation"));
k.push(bullet("**Flowcharts** show participant numbers at each stage — recruitment, intervention, follow-up. **Required by CONSORT** for transparent reporting."));
k.push(bullet("**Why they matter:** they expose attrition, dropout rates and the study's actual progression, which is where hidden bias shows up."));

k.push(...glossary("Quick-Reference Glossary — Topic 4.1",[
 ["Population","The entire group findings are intended to apply to"],
 ["Sample","The subset actually studied"],
 ["Target population","The ideal group you wish to generalise to"],
 ["Accessible population","The group actually available to study"],
 ["Inclusion criteria","Characteristics required for participation"],
 ["Exclusion criteria","Factors disqualifying a participant"],
 ["Probability sampling","Random selection; every individual has an equal chance"],
 ["Simple random sampling","Equal chance for all individuals"],
 ["Systematic sampling","Every nth person from a list"],
 ["Stratified sampling","Random sampling within predefined subgroups"],
 ["Cluster sampling","Sampling whole groups, then individuals within them"],
 ["Convenience sampling","Whoever is readily available"],
 ["Purposive sampling","Selected for specific traits"],
 ["Snowball sampling","Participants recruit further participants"],
 ["Sampling error","Chance difference between sample result and population truth"],
 ["Sampling bias","Systematic unrepresentativeness of the sample"],
 ["CONSORT flowchart","Required diagram of participant flow through a trial"]]));

k.push(pageBreak());

/* ─────────────────────────── TOPIC 4.2 ─────────────────────────── */
k.push(banner("TOPIC 4.2","Principles of Clinical Trials"));
k.push(spacer());
k.push(body("Objectives: understand trial structure and types; differentiate RCT, superiority, non-inferiority and equivalence designs; recognise the role of control groups, randomization and blinding; understand the ethical principles and phases governing trials; apply these to physical therapy research."));

k.push(h1("1. What a Clinical Trial Is"));
k.push(bullet("A **clinical trial** tests hypotheses about interventions **in human subjects.** The **RCT is the gold standard** for establishing cause-and-effect."));
k.push(detail(["Trial type","Focus","Example"],[
 ["**Therapeutic**","Treatment effects","Breast cancer surgery studies"],
 ["**Diagnostic**","Accuracy and clinical relevance of tests","DVT diagnostic comparisons"],
 ["**Preventive**","Interventions that reduce disease risk","The polio vaccine trial"]],[1900,3800,3660]));

k.push(h1("2. The Three Features of an RCT"));
k.push(detail(["Feature","What it does"],[
 ["**Manipulation of variables**","The independent variable is deliberately controlled"],
 ["**Random assignment**","Every participant has an equal chance of any group — **avoids selection bias**"],
 ["**Control group**","Provides the baseline for comparison"]],[2900,6460]));
k.push(compare("ACTIVE VARIABLES","ATTRIBUTE VARIABLES",
 ["**Can be manipulated**","e.g. treatment vs no treatment"],
 ["**Cannot be manipulated**","e.g. age, gender"],
 C.blue,C.purple,C.lightBlue,C.lightPurple));
k.push(bullet("**Random assignment strategies:** simple · **block** · **stratified** · cluster — all aimed at balancing groups."));

k.push(h1("3. Control Groups"));
k.push(detail(["Type","What the control group receives"],[
 ["**Inactive control**","Placebo or sham treatment"],
 ["**Active control**","An established treatment, compared against the new intervention"],
 ["**Wait-list control**","Delayed treatment — they get it eventually"]],[2600,6760]));

k.push(h1("4. Blinding (Masking)"));
k.push(detail(["Level","Who is unaware of group assignment"],[
 ["**Single-blind**","**Participants**"],
 ["**Double-blind**","**Participants and investigators**"],
 ["**Triple-blind**","**Participants, caregivers and assessors**"]],[2400,6960]));
k.push(bullet("**Purpose:** reduce bias and ensure objective outcomes."));
k.push(tip("Blinding is the hardest thing to achieve in rehab research and the first place a PEDro score loses points. A patient knows whether they were exercised. Note which levels a trial actually achieved rather than accepting the word “blinded” at face value."));

k.push(h1("5. Phases"));
k.push(detail(["Phase","What happens"],[
 ["**Preclinical**","Laboratory testing, often on animals"],
 ["**Phase I**","**Safety and dosage** in small groups"],
 ["**Phase II**","**Efficacy and side effects** in larger groups"],
 ["**Phase III**","**Large-scale RCTs** comparing new treatment to standard care"],
 ["**Phase IV**","**Post-marketing** trials studying long-term effects"]],[2000,7360]));

k.push(h1("6. Comparing Treatments"));
k.push(detail(["Trial type","What it demonstrates"],[
 ["**Superiority**","One treatment is **better** than another"],
 ["**Non-inferiority**","A new treatment is **no worse** than standard care — usually justified by ancillary benefits like safety or cost"],
 ["**Equivalence**","Treatments are **neither better nor worse.** Commonly used for drug bioequivalence"]],[2600,6760]));
k.push(tip("Non-inferiority is the design students misread most often. A non-inferiority trial that “found no significant difference” has NOT shown the treatments are equal — it has shown the new one doesn't fall below a pre-set margin. Check what that margin was."));

k.push(h1("7. Explanatory vs Pragmatic Trials"));
k.push(compare("EXPLANATORY (IDEAL) TRIALS","PRAGMATIC TRIALS (PCTs)",
 ["**High internal validity**","**Strict protocols**","**Controlled conditions**"],
 ["**Designed to reflect real-world clinical practice**","**Broader inclusion criteria**","**Diverse patient populations**"],
 C.blue,C.green,C.lightBlue,C.lightGreen));

k.push(h1("8. Ethics"));
k.push(detail(["Principle","What it requires"],[
 ["**Equipoise**","**Trials are only ethical when genuine uncertainty about the intervention exists.** Without equipoise, you are exposing participants to unnecessary risk"],
 ["**Informed consent**","Participants must understand the risks and benefits **before** enrollment"],
 ["**Randomized consent design**","Random assignment occurs **before** consent is sought — used in ethically challenging cases"]],[2800,6560]));
k.push(bullet("**Clinical trial registries** — such as **ClinicalTrials.gov** (NIH and FDA) — catalogue publicly available studies, **prevent duplication**, and enhance transparency by publishing trial information, results and progress."));
k.push(tip("Registries are also an appraisal tool. If a published paper's primary outcome doesn't match what was registered, that's outcome switching, and it's a reason to distrust the result."));

k.push(h1("9. Why This Is Harder in Physical Therapy"));
k.push(infoBox("Rehabilitation-specific challenges",[
 "**Controlling variables** in physical therapy interventions is genuinely difficult",
 "**Standardizing protocols** so interventions can be replicated for evidence-based guidelines",
 "**Adapting findings** to varied clinical settings with complex patient needs"],C.gold,C.lightGold));

k.push(...glossary("Quick-Reference Glossary — Topic 4.2",[
 ["Clinical trial","Test of a hypothesis about an intervention in human subjects"],
 ["RCT","Randomized controlled trial; the gold standard for causal inference"],
 ["Active variable","A variable the researcher can manipulate"],
 ["Attribute variable","A characteristic that cannot be manipulated"],
 ["Block randomization","Assignment in balanced blocks to keep group sizes even"],
 ["Inactive control","Placebo or sham comparison group"],
 ["Active control","Comparison against an established treatment"],
 ["Wait-list control","Group that receives the treatment after a delay"],
 ["Single / double / triple blind","Participants / plus investigators / plus caregivers and assessors unaware of allocation"],
 ["Phase I–IV","Safety · efficacy · large-scale comparison · post-marketing"],
 ["Superiority trial","Shows one treatment is better"],
 ["Non-inferiority trial","Shows a new treatment is not worse by more than a set margin"],
 ["Equivalence trial","Shows treatments are neither better nor worse"],
 ["Explanatory trial","Tightly controlled, high internal validity"],
 ["Pragmatic trial","Designed to mirror real-world practice"],
 ["Equipoise","Genuine uncertainty about efficacy, required for a trial to be ethical"],
 ["Randomized consent design","Allocation before consent, for ethically difficult cases"]]));

k.push(linkBox("🔗 Resource named in Topic 4.2",[
 ["ClinicalTrials.gov","https://clinicaltrials.gov/",""]],C.teal));

k.push(pageBreak());

/* ─────────────────────────── TOPIC 4.3 ─────────────────────────── */
k.push(banner("TOPIC 4.3","Design Validity"));
k.push(spacer());
k.push(body("Objectives: understand design validity's role; identify the four types; recognise common threats and strategies to mitigate them; apply validity concepts to critically evaluate studies; balance validity considerations when designing or appraising PT research."));
k.push(tnote("These types of validity build upon each other. Statistical conclusion validity ensures the analysis is appropriate. Internal validity asks whether the relationship is causal. Construct validity focuses on definitions and measurement. External validity asks whether it generalises."));

k.push(h1("1. The Four Types"));
k.push(detail(["Type","What it establishes"],[
 ["**Statistical conclusion validity**","**Proper use of statistical tests**"],
 ["**Internal validity**","**Establishing cause and effect**"],
 ["**Construct validity**","**Accurate definition of variables**"],
 ["**External validity**","**Generalizability of results**"]],[3400,5960]));

k.push(h1("2. Statistical Conclusion Validity"));
k.push(bullet("Determines whether the relationship between the independent and dependent variables is real."));
k.push(infoBox("Threats",[
 "**Low statistical power**",
 "**Violating the assumptions** of the statistical tests used",
 "**Variability in measurements**",
 "**Failure to use intention-to-treat (ITT) analysis**"],C.red,C.lightRed));

k.push(h1("3. Internal Validity"));
k.push(bullet("Ensures observed effects are **due to the intervention, not external factors.**"));
k.push(detail(["Criterion for causality","What it means"],[
 ["**Temporal precedence**","The cause must precede the effect"],
 ["**Covariation of cause and effect**","They must actually vary together"],
 ["**No plausible alternative explanations**","Everything else has been ruled out"]],[3000,6360]));
k.push(detail(["Threat","How it corrupts the result"],[
 ["**History**","External events during the study influence results"],
 ["**Maturation**","Participants change simply with time — healing, aging"],
 ["**Attrition**","Loss of participants unbalances the groups"],
 ["**Testing**","Pretesting itself changes later performance"],
 ["**Instrumentation**","Unreliable or drifting measures"],
 ["**Regression to the mean**","Extreme baseline scores drift toward average on retest"],
 ["**Selection bias**","Groups differed before the intervention ever started"]],[2900,6460]));
k.push(tip("Memorise these seven. They are the standard list, they map directly onto the PEDro items you'll score in the sync session, and “which threat to internal validity does randomization address?” is a natural quiz question."));

k.push(h1("4. Construct Validity"));
k.push(bullet("Ensures the independent and dependent variables are **accurately conceptualised.**"));
k.push(infoBox("Threats",[
 "**Operational definitions** — how the variables are actually measured",
 "**Time frame for interventions** — too short or too long to capture the construct",
 "**Multiple treatment interactions**",
 "**Experimental bias** from the expectations of subjects or researchers"],C.purple,C.lightPurple));

k.push(h1("5. External Validity"));
k.push(bullet("Generalizability of results to real-world settings, populations and times."));
k.push(infoBox("Threats",[
 "**Influence of selection** — volunteers bias the sample",
 "**Influence of settings** — a lab is not clinical practice",
 "**Influence of historical timing** — older studies may not apply today"],C.gold,C.lightGold));

k.push(h1("6. Controlling Confounding Variables"));
k.push(detail(["Strategy","How it controls the confounder"],[
 ["**Random assignment**","Balances confounders across groups"],
 ["**Homogeneous samples**","Select participants with similar characteristics"],
 ["**Blocking variables**","Incorporate the confounder as an independent factor in the design"],
 ["**Matching**","Pair subjects with similar characteristics across groups"],
 ["**Repeated measures**","**Subjects serve as their own control**"],
 ["**ANCOVA**","Statistically control for the confounder in the analysis"]],[2600,6760]));

k.push(h1("7. Non-Compliance and Missing Data"));
k.push(compare("INTENTION-TO-TREAT (ITT)","PER-PROTOCOL",
 ["**Includes all subjects as originally assigned**","**Preserves randomization**","**Better reflects clinical practice**"],
 ["**Only includes compliant subjects**","**May OVERESTIMATE treatment effects** by excluding non-compliers"],
 C.green,C.red,C.lightGreen,C.lightRed));
k.push(tnote("Best practice is to run both ITT and per-protocol analyses and compare the results."));
k.push(detail(["Missing data type","Meaning"],[
 ["**MCAR** — missing completely at random","Missingness unrelated to anything measured or unmeasured"],
 ["**MAR** — missing at random","Missingness explained by other observed variables"],
 ["**MNAR** — missing not at random","Missingness related to the unobserved value itself — **the most dangerous**"]],[3200,6160]));
k.push(bullet("**Handling strategies:** completer analysis (analyse only those who finished) · **imputation** — LOCF (last observation carried forward), mean imputation, **multiple imputation.**"));

k.push(h1("8. The Trade-off"));
k.push(infoBox("Balancing validity in clinical trials",[
 "**Efforts to control one type of validity may compromise another**",
 "**Internal validity is often prioritised** for experimental control",
 "**External validity is essential** for applying findings to clinical practice",
 "**There is no perfect study — transparent reporting is what lets clinicians judge the evidence**"],C.blue,C.lightBlue));

k.push(...glossary("Quick-Reference Glossary — Topic 4.3",[
 ["Statistical conclusion validity","Whether the statistical analysis correctly detects the relationship"],
 ["Internal validity","Whether the effect is attributable to the intervention"],
 ["Construct validity","Whether the variables are accurately defined and measured"],
 ["External validity","Whether results generalise beyond the study"],
 ["Temporal precedence","Cause precedes effect"],
 ["History (threat)","External events during the study influencing results"],
 ["Maturation","Change in participants due to the passage of time"],
 ["Attrition","Participant loss that unbalances groups"],
 ["Instrumentation","Measurement drift or unreliability"],
 ["Selection bias","Groups differed before the intervention"],
 ["Blocking variable","A confounder deliberately built into the design as a factor"],
 ["Matching","Pairing participants on key characteristics across groups"],
 ["ANCOVA","Analysis of covariance; statistical control of a confounder"],
 ["ITT analysis","Analysis by original assignment regardless of compliance"],
 ["Per-protocol analysis","Analysis restricted to compliant participants"],
 ["MCAR / MAR / MNAR","Missing completely at random / at random / not at random"],
 ["LOCF","Last observation carried forward; a simple imputation method"],
 ["Multiple imputation","Statistical method generating several plausible replacements for missing values"]]));

k.push(pageBreak());

/* ─────────────────────────── TOPIC 4.4 ─────────────────────────── */
k.push(banner("TOPIC 4.4","Experimental Designs"));
k.push(spacer());
k.push(body("Objectives: define the purpose of experimental designs; differentiate true from quasi-experiments; identify randomization, control groups and factorial designs; describe the design structures and when to use each; evaluate their strengths and limits for PT interventions."));

k.push(h1("1. Foundations"));
k.push(compare("TRUE EXPERIMENTS","QUASI-EXPERIMENTS",
 ["**Random assignment**","**High internal validity**"],
 ["**No random assignment**","**More practical for real-world settings** — and lower internal validity as the price"],
 C.green,C.gold,C.lightGreen,C.lightGold));
k.push(detail(["Choosing a design — factors to consider","—"],[
 ["**Number of independent variables**",""],
 ["**Number of levels of the independent variable**",""],
 ["**Number of groups**",""],
 ["**Group assignment method**",""],
 ["**Observation frequency**",""],
 ["**Sequence of interventions and measurements**",""]],[6400,2960]));

k.push(h1("2. The Design Catalogue"));
k.push(detail(["Design","Structure","Example and trade-off"],[
 ["**Pretest–posttest control group**","Random assignment to experimental or control; pretest and posttest scores compared","New therapeutic exercise for chronic low back pain. **Strong internal validity**, effective for causal claims"],
 ["**Posttest-only control group**","No pretest; outcomes measured only after the intervention","Educational interventions where a pretest may bias responses. **Avoids pretest sensitization, increases external validity**"],
 ["**Factorial**","Tests **multiple independent variables at once**","2 × 2 testing joint protection and hand exercises in osteoarthritis. **Allows study of interactions between variables**"],
 ["**Randomized block**","Groups participants by an extraneous variable (e.g. gender) **before** randomizing to treatment","Controlling for gender in a postural-control study. **Reduces confounding, increases internal validity**"],
 ["**Repeated measures**","The same participants experience **all** conditions","Cane use on the same vs opposite side in knee arthritis. **Controls individual differences, increases power** — but **practice and carryover effects** are the risk"],
 ["**Crossover**","Participants receive multiple treatments in varied order with a **washout period**","Prone vs supine positioning in preterm infants. **Controls between-subject variability**; the washout is essential to eliminate lingering effects"],
 ["**Mixed**","Combines repeated measures with independent groups","Stabilizing exercise for postpartum pelvic girdle pain. **Tests long-term effects across time while comparing groups**"],
 ["**Sequential clinical trial**","Data analysed **continuously** as collected","Opioid dosing for dyspnea in cancer patients. **Allows early stopping** if an effect is clear, reducing participants needed"]],[2300,3200,3860]));
k.push(tip("Cross-reference this against Topic 3.6. A pretest–posttest control group design is analysed with a mixed-model ANOVA, and the interaction term is the treatment effect. Design and statistic are the same question asked twice."));

k.push(h1("3. Control Groups, Again"));
k.push(compare("PLACEBO CONTROL","TREATMENT CONTROL",
 ["**No treatment or sham treatment**","Rules out the placebo effect","Example: a manual therapy study with a placebo control group"],
 ["**Compares the new treatment with standard care**","Ethically easier when withholding treatment would be harmful"],
 C.blue,C.teal,C.lightBlue,C.lightTeal));

k.push(h1("4. Takeaways"));
k.push(infoBox("What the lecture wants you to leave with",[
 "**Design selection follows the research question and the clinical context** — there is no universally best design",
 "**Every design trades internal validity against external validity**",
 "**Understanding designs improves your interpretation of research, not just your ability to run it**"],C.green,C.lightGreen));

k.push(...glossary("Quick-Reference Glossary — Topic 4.4",[
 ["True experiment","Design with random assignment and high internal validity"],
 ["Quasi-experiment","Design without random assignment"],
 ["Pretest–posttest control group design","Random allocation with measurement before and after"],
 ["Posttest-only control group design","Measurement only after the intervention"],
 ["Pretest sensitization","Pretesting itself altering later performance"],
 ["Factorial design","Two or more independent variables tested simultaneously"],
 ["Randomized block design","Grouping on an extraneous variable before randomizing"],
 ["Repeated measures design","Same participants across all conditions"],
 ["Carryover effect","Lingering influence of one condition on the next"],
 ["Crossover design","Multiple treatments in varied order with washout"],
 ["Washout period","Interval allowing one treatment's effects to dissipate"],
 ["Mixed design","Repeated measures combined with independent groups"],
 ["Sequential clinical trial","Continuous analysis permitting early stopping"]]));

k.push(pageBreak());

/* ─────────────────────────── SYNC SESSION 4 ─────────────────────────── */
k.push(banner("SYNC SESSION 4","Critical Appraisal — Applicability and Quality, and the PEDro Scale"));
k.push(spacer());
k.push(body("The session that makes appraisal systematic. It walks the **PEDro scale** item by item against a real four-arm knee-OA trial, then hands you a second article to score yourself."));

k.push(h1("1. Feedback on the Previous Assignment"));
k.push(infoBox("Common errors flagged",[
 "**Article selection: choosing a protocol instead of the completed study**",
 "**Citations: abbreviated and italicised journal title** formatted wrong",
 "**Citations: year of publication and location**",
 "**Citations: DOI vs URL** — they are not interchangeable"],C.red,C.lightRed));
k.push(tip("The protocol-vs-study error is the expensive one. A published protocol describes what a team INTENDS to do and contains no results. If your citation has no findings section, you appraised the wrong document."));

k.push(h1("2. Appraisal Tools Introduced"));
k.push(detail(["Tool","Used for"],[
 ["**PEDro scale**","**RCTs.** The tool this course scores you on"],
 ["**CASP**","**Systematic reviews** — the second half of the group assignment"],
 ["**JBI**","Joanna Briggs Institute checklists, mentioned as an alternative"]],[2500,6860]));

k.push(h1("3. The PEDro Scale — Purpose and Structure"));
k.push(infoBox("What PEDro is for",[
 "**Helps readers identify validity** — internal and external",
 "**Helps readers determine meaningfulness** — is there enough statistical information to interpret the results?",
 "**It does NOT cover:** clinical relevance, effect size, alternative explanations, cost-benefit analysis, feasibility. **You still have to judge those yourself**"],C.blue,C.lightBlue));
k.push(detail(["Items","What they establish"],[
 ["**Item 1**","**External validity.** NOT included in the total score"],
 ["**Items 2–9**","**Internal validity**"],
 ["**Items 10–11**","**Statistical sufficiency** — interpretation of results"]],[2200,7160]));

k.push(h1("4. The Eleven Items"));
k.push(detail(["#","Criterion","Scored?"],[
 ["**1**","Eligibility criteria were specified","**No** — external validity only"],
 ["**2**","Subjects were **randomly allocated** to groups","Yes"],
 ["**3**","**Allocation was concealed**","Yes"],
 ["**4**","Groups were **similar at baseline** on the most important prognostic indicators","Yes"],
 ["**5**","**Blinding of all subjects**","Yes"],
 ["**6**","**Blinding of all therapists** who administered the therapy","Yes"],
 ["**7**","**Blinding of all assessors** who measured at least one key outcome","Yes"],
 ["**8**","Key outcome measures obtained from **more than 85%** of subjects initially allocated","Yes"],
 ["**9**","All subjects with available outcome data received the allocated condition, **or data analysed by intention to treat**","Yes"],
 ["**10**","**Between-group statistical comparisons** reported for at least one key outcome","Yes"],
 ["**11**","**Both point measures and measures of variability** provided for at least one key outcome","Yes"]],[700,5700,2960]));
k.push(infoBox("Scoring and interpretation",[
 "**Total = items 2–11, one point per YES. Maximum 10.**",
 "**High quality: ≥ 7**",
 "**Moderate quality: 5–6**",
 "**Low quality: ≤ 4**"],C.green,C.lightGreen));
k.push(tip("Item 1 not counting toward the total is the single most common scoring error, and the assignment rubric awards points specifically for treating it as unscored. Write “/10” not “/11” and you've already banked part of the grade."));

k.push(h1("5. The Worked Article"));
k.push(body("**Sadeghi A, Rostami M, Khanlari Z, et al.** Effectiveness of muscle strengthening on the clinical outcomes of patients with knee osteoarthritis: a randomized four-arm controlled trial. *Caspian J Intern Med.* 2023;14(3):433-442. doi:10.22088/cjim.14.3.433"));
k.push(detail(["PEDro item","What the article actually reported"],[
 ["**1 — Eligibility**","Ages 40–70 with knee OA confirmed by a rheumatologist (Kellgren-Lawrence grades I–III), with pain, morning stiffness under 30 minutes, or crepitus. Exclusions: other musculoskeletal disease in either knee within 6 months, knee surgery history, intra-articular corticosteroid or hyaluronic acid within 30 days, NSAIDs or glucosamine within 30 days, prior knee strengthening programme within 6 months"],
 ["**Sampling**","Single-centre, parallel four-arm (1:1:1:1), single-blind (outcome assessor and statistical analyst), performed at a rheumatology clinic in Zanjan, Iran, March–May 2016"],
 ["**Groups**","G1 quadriceps strengthening · G2 hamstring strengthening · G3 both · **G4 no intervention (control)**"],
 ["**2–3 — Allocation**","A researcher not involved in the study generated the sequence in Excel using **blocked randomization with randomly varying blocks (size 4 and 8), stratified by Kellgren-Lawrence grade.** Participants received **concealed opaque envelopes** from a research assistant with no clinical involvement"],
 ["**5–7 — Blinding**","Pre- and post-treatment evaluations by the **same physiotherapist, blinded to allocation.** A different physiotherapist delivered the exercise. The **statistical analyst was blinded** as well"],
 ["**4 — Baseline similarity**","Baseline VAS: 54.58±20.21 · 50.21±21.79 · 56.04±19.84 · 55.00±21.67 mm. ANOVA showed **no significant difference (F(3,92) = 0.36, p = 0.779)**"],
 ["**10 — Between-group comparison**","At endpoint VAS differed significantly between groups (**F(3,92) = 16.11, p < 0.001**). Dunnett post-hoc: **G1 (MD −37.54, 95% CI −52.19 to −22.89, p<0.001)** and **G3 (MD −36.08, 95% CI −50.73 to −21.43, p<0.001)** decreased most vs G4; **G2 least (MD −21.98, 95% CI −36.63 to −7.33, p = 0.002)**"],
 ["**11 — Point measures and variability**","Paired t-tests: G1 **t(23) = −7.57, p<0.001, Cohen's d = −1.54 (large)** · G3 **t(23) = −7.74, p<0.001, d = −1.58 (large)** · G2 not significant **(t(23) = −1.69, p = 0.104)** · G4 VAS **increased** (t(23) = 4.64, p<0.001, d = 0.69, medium)"]],[2000,7360]));
k.push(tip("Read that last row twice. The control group got WORSE (VAS increased, medium effect). Part of the apparent benefit in G1 and G3 is untreated deterioration in G4 — which is exactly the kind of alternative explanation PEDro does not capture and you are supposed to notice yourself."));

k.push(h1("6. The Article You Score Yourself"));
k.push(body("**Qiu J, Zhou T, Jin H, et al.** Effect of adding hip exercises to general rehabilitation treatment of knee osteoarthritis on patients' physical functions: a randomized clinical trial. *BMC Sports Sci Med Rehabil.* 2023;15:148. doi:10.1186/s13102-023-0077"));
k.push(bullet("**The PICO the session used:** are strengthening exercises more effective in reducing pain in female patients with knee osteoarthritis compared to other physical therapy interventions?"));

k.push(h1("7. The Group Assignment — What Is Actually Graded"));
k.push(detail(["Part","Worth","What earns full marks"],[
 ["**RCT appraisal using PEDro**","**10 pts**","**Accurate scoring (4):** all items scored correctly, **Item 1 treated as unscored**, total calculated correctly · **Justification (3):** specific, article-based justification for most decisions · **Understanding (2):** explains how PEDro items relate to bias and internal validity · **Confidence statement (1):** clear and well justified"],
 ["**Systematic review appraisal using CASP**","**10 pts**","**Accurate CASP completion (3)** · **Evaluation of review methods (2):** critically evaluates search strategy, study selection and appraisal methods · plus the remaining CASP criteria"]],[2600,1200,5560]));

k.push(h1("8. The CASP Systematic Review Checklist"));
k.push(detail(["Section","Questions"],[
 ["**Section 1 — Are the results valid?**","**1.** Did the review address a clearly focused clinical question? (Population · intervention · comparison · outcomes important to PT) · **2.** Did the authors use appropriate methods to find relevant studies? · **3.** Were the included studies appropriate for answering the question? · **4.** Was the **quality / risk of bias** of included studies assessed?"],
 ["**Section 2 — What are the results?**","**5.** What were the main findings? · **6.** How **consistent** were the results across studies? · **7.** Are the results **clinically meaningful** for physical therapy?"],
 ["**Section 3 — Can I apply this?**","**8.** Are the findings applicable to your patient population? · **9.** Do the benefits outweigh potential harms, costs or burdens? · **10.** Overall clinical judgment, justified in 2–3 sentences"]],[2900,6460]));
k.push(tnote("Both worksheets end the same way: a one-sentence key takeaway for clinical practice. That sentence is the clinical bottom line from Module 3, and it is what the whole appraisal exists to produce."));

k.push(...glossary("Quick-Reference Glossary — Sync Session 4",[
 ["PEDro scale","11-item appraisal tool for RCTs; items 2–11 scored out of 10"],
 ["Allocation concealment","Preventing anyone from knowing the upcoming assignment before it is made"],
 ["Blocked randomization","Allocation in blocks to keep group sizes balanced through recruitment"],
 ["Stratified randomization","Randomization performed separately within prognostic strata"],
 ["Prognostic indicator","A baseline characteristic that predicts outcome"],
 ["CASP","Critical Appraisal Skills Programme checklists; used here for systematic reviews"],
 ["JBI","Joanna Briggs Institute appraisal checklists"],
 ["Dunnett post-hoc test","Post-hoc comparison of several groups against a single control"],
 ["VAS","Visual Analogue Scale for pain"],
 ["Kellgren-Lawrence grade","Radiographic severity grading for osteoarthritis"],
 ["Protocol paper","Published description of a planned study, containing no results"]]));

k.push(linkBox("🔗 Resources named in Module 4",[
 ["PEDro scale","https://pedro.org.au/english/resources/pedro-scale/",""],
 ["CASP checklists","https://casp-uk.net/casp-tools-checklists/",""],
 ["JBI critical appraisal tools","https://jbi.global/critical-appraisal-tools",""],
 ["ClinicalTrials.gov","https://clinicaltrials.gov/",""],
 ["CONSORT statement","https://www.equator-network.org/reporting-guidelines/consort/",""]],C.teal));

build(k,"/home/claude/out/Module4_DesigningClinicalResearch_StudyNotes.docx");
