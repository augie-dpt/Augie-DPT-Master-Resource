const L = require('/home/claude/notes_lib.js');
const {C,h1,h2,body,bullet,tnote,tip,compare,detail,infoBox,banner,glossary,fig,pageBreak,spacer,cover,build,linkBox} = L;
const k=[];

k.push(...cover("Evidence Based Practice I (DPTH 6311)","Module 5: Clinical Research Designs",
 "Topic 5.1 + Sync Session 5 — health literacy, stakeholders, and knowledge translation",
 ["**A short module with one topic and a long sync session.** Quiz 5 covers health literacy, communicating evidence, and CATs",
  "**The module title is misleading.** Canvas calls it “Clinical Research Designs,” but the content is entirely about **communicating** evidence — the research-design material was in Module 4",
  "**Sync Session 5 is the Knowledge Brokering role-play** and produces the group assignment. The roles and worksheets are reproduced here"]));

/* ─────────────────────────── TOPIC 5.1 ─────────────────────────── */
k.push(banner("TOPIC 5.1","Communicating Evidence for Best Practice"));
k.push(spacer());
k.push(body("Objectives: define health literacy and its clinical importance; identify who makes decisions in physical therapy practice; introduce knowledge translation; identify tools for storing and communicating evidence."));
k.push(tnote("Evidence-based practice involves more than finding and appraising articles. The strength of evidence-based practice lies in how effectively we integrate this evidence into our clinical reasoning and how well we communicate it to others."));

k.push(h1("1. Health Literacy"));
k.push(bullet("**Health literacy** is the ability to **obtain · process · understand · use** health information. **It goes beyond reading ability** — it includes comprehending, contextualising and applying health information to everyday life."));
k.push(infoBox("Why it matters in PT specifically",[
 "**Adherence to home exercise programs** — they have to understand it to do it",
 "**Safety and accuracy of exercise performance** — they can't recognise unsafe technique in a program they didn't understand",
 "**Engagement in shared decision-making**",
 "**Outcomes**",
 "**Patient satisfaction and empowerment**"],C.blue,C.lightBlue));
k.push(tnote("Low health literacy is one of the strongest predictors of poor health outcomes."));
k.push(detail(["Your responsibility as the PT","What it looks like"],[
 ["**Assess comprehension**","Don't assume it. Check"],
 ["**Adapt materials to literacy level**","Rewrite, don't just hand over"],
 ["**Consider preferred language**","Including whether the patient prefers written or visual"],
 ["**Use multiple communication modes**","**Spoken · written · visual**"]],[3200,6160]));

k.push(h1("2. Strategies That Work"));
k.push(detail(["Strategy","Detail"],[
 ["**Use simple, direct language**","The CDC and Harvard School of Public Health both emphasise clarity and brevity"],
 ["**Identify reading level and adapt**","**The AMA recommends writing at a 5th- to 6th-grade level**"],
 ["**Keep it brief and focused**",""],
 ["**Tie information to patient goals**","Explain *why* you're asking for this task and how it connects to what they want"],
 ["**Repeat and clarify key points**",""],
 ["**Teach-back**","**Ask the patient to explain the exercise or plan in their own words.** Evidence-supported"],
 ["**Use visuals**","Where they help"]],[2900,6460]));
k.push(tip("Teach-back is the one to actually build into your habit now. It costs thirty seconds, it's the only reliable way to know whether your HEP instructions landed, and it will show up again in every clinical course you take."));

k.push(h1("3. Who the Decision-Makers Are"));
k.push(bullet("**PT decisions are rarely made in isolation.** Each stakeholder has different goals and different levels of health literacy:"));
k.push(detail(["Stakeholder","What they prioritise"],[
 ["**Patients and families**","Pain, function, return to work or play. **They don't care about effect sizes**"],
 ["**Other healthcare professionals**","Alignment across disciplines so everyone works the same plan"],
 ["**Managers and administrators**","Cost-effectiveness, program quality, staffing, efficiency"],
 ["**Insurance companies and payers**","Cost-effectiveness and demonstrated quality"],
 ["**Policy-makers and regulatory agencies**","Reimbursement and service-delivery models"],
 ["**Community stakeholders and referral sources**","Access and outcomes in their population"]],[3000,6360]));

k.push(h1("4. Communicating With Patients and Families"));
k.push(detail(["Principle","In practice"],[
 ["**Use shared decision-making**","Clarify goals together"],
 ["**Interpret evidence in terms meaningful to the patient**","Connect research to what matters to them"],
 ["**Clarify patient goals with specific examples**",""],
 ["**Explain how research supports your recommendation**",""],
 ["**Distinguish research evidence from clinical experience**","Be explicit about which is which"]],[3400,5960]));
k.push(infoBox("Box 11.1 — phrasing that models transparency and partnership",[
 "“**The research and my clinical experience suggest that…**”",
 "“**There is not a lot of research on the best treatment, but my review of it coupled with my experience and your specific goal of … suggest that … might be our best course of action.**”",
 "“**Yes, there is considerable research on physical therapy for your goal. Because you would like to review the research, I have some suggested websites or summaries that might be helpful. Let's discuss this again at your next visit, but here is my suggestion today: …**”",
 "“**I have not been able to locate published research evidence on …, but I have consulted with colleagues, and with my own experience and theirs, I would suggest….**”"],C.green,C.lightGreen));
k.push(tnote("You don't have to use these exact words. They're examples of ways you might think about communicating with patients and their families."));

k.push(h1("5. Communicating With Managers, Insurers and Decision-Makers"));
k.push(compare("WHAT CHANGES","THE FORMATS THAT WORK",
 ["**The focus shifts from the individual patient to system-wide thinking**","Relate evidence to **cost-effectiveness**","**Program quality**","**Outcomes**","**Efficiencies**"],
 ["**Written summaries**","**Email briefs**","**CATs**","Understand administrative and policy-level priorities","**Identify barriers and facilitators** to implementing the evidence"],
 C.blue,C.teal,C.lightBlue,C.lightTeal));
k.push(tip("Same evidence, different framing, is the whole point of this module and the entire sync session. A finding that reads as “large effect size, p<0.001” to you has to read as “fewer visits to reach the same outcome” to an administrator and “you'll be walking to the mailbox again” to the patient."));

k.push(h1("6. Knowledge Translation"));
k.push(bullet("**Knowledge translation (KT)** is the process of **synthesizing, sharing and applying** research evidence to improve clinical practice. It is how evidence moves from publication into practice."));
k.push(detail(["KT includes","What it means"],[
 ["**Dissemination**","Getting the evidence in front of the people who need it"],
 ["**Education**","Building the understanding to act on it"],
 ["**Implementation of practice changes**","Actually changing what gets done"],
 ["**Ongoing evaluation**","Checking whether the change held and helped"]],[2900,6460]));
k.push(tnote("Knowing the evidence is not enough. We must actively support adoption of these clinical practices. Knowledge translation involves personal communication as well as systems-level planning."));

k.push(h1("7. Knowledge Brokers"));
k.push(infoBox("What a knowledge broker does",[
 "**Acts as a local champion** who supports adoption of evidence-based change",
 "**Facilitates communication** between researchers and clinicians",
 "**Helps overcome barriers** to implementing best practice — identifying obstacles and finding ways around them",
 "**Translates research into actionable steps**, provides training, supports organizational change",
 "**Found to be effective in both pediatric and adult rehabilitation settings**"],C.purple,C.lightPurple));
k.push(bullet("**Many PT departments informally rely on faculty or clinical specialists to fill this role** — it is often a hat someone wears rather than a job title."));

k.push(h1("8. Tools for Storing and Communicating Evidence"));
k.push(detail(["Tool","What it gives you"],[
 ["**Critically Appraised Topics (CATs)**","Concise, actionable findings for busy clinicians"],
 ["**Technology profiles**","Reference managers and databases organised into a personal system"],
 ["**Online repositories**","Curated, summarised or applied evidence — CEBM, BestBETs, CanChild"],
 ["**Tailored summaries**","Different versions for **patients · clinicians · administrators**"]],[3000,6360]));

k.push(h1("9. CATs, Revisited"));
k.push(detail(["A CAT contains","—"],[
 ["**Clinical question**",""],
 ["**Study design**",""],
 ["**Methodological strengths and limitations**",""],
 ["**Clinical bottom line**",""],
 ["**Actionable recommendations**",""]],[5400,3960]));
k.push(bullet("**Where CATs get used:** journal clubs · clinical meetings · **your documentation, to support your recommendations.** They are especially useful where a full systematic review isn't feasible."));
k.push(tnote("CATs promote clinical reasoning grounded in evidence, but are concise enough to use right at the point of care."));

k.push(h1("10. Technology Profiles — A Concrete Workflow"));
k.push(bullet("A **technology profile** is your personalised digital system for finding, storing, organising and retrieving evidence — so that evidence-based decision-making becomes **routine rather than overwhelming.**"));
k.push(detail(["Step","Action"],[
 ["**1**","**Save articles to Zotero**, tagged by patient population"],
 ["**2**","**Store PDFs in Drive**, linked back to Zotero"],
 ["**3**","**Write quick summaries or CATs**, stored in a Google folder called “EBP Clinical Resources”"],
 ["**4**","**Bookmark PEDro** and check it to verify quality before recommending an intervention"]],[900,8460]));
k.push(tip("Build this now, not in your third year. Every article you appraise for this course is one you'd have to find again later — tagging as you go costs nothing and compounds."));

k.push(h1("11. Repositories and Alerts"));
k.push(detail(["Repository","What's in it"],[
 ["**CEBM** — Centre for Evidence-Based Medicine","**CATmaker templates** · appraisal tools · EBP tutorials · examples of high-quality CATs"],
 ["**BestBETs**","Originally emergency medicine, now includes some physiotherapy. Best-evidence summaries, appraisal guidelines, clinical bottom lines"],
 ["**CanChild**","Premier pediatric rehab research hub — family-friendly summaries, clinician practice tools, research snapshots, KT resources"],
 ["**APTA**","CPGs · article search · **tests and measures** · interventions · clinical summaries"]],[3000,6360]));
k.push(tnote("Repositories differ from databases in that they include curated, summarised or applied evidence. They are secondary sources — someone else has translated the evidence for you."));
k.push(detail(["Evidence alerts — where to set them","—"],[
 ["**PubMed · CINAHL · Cochrane Library · PEDro**","Set a delivery frequency that suits you — daily, weekly, monthly"],
 ["**PTJ alerts**","Journal table-of-contents alerts from Physical Therapy"],
 ["**EvidenceAlerts.com**","Evidence in your inbox, updated monthly"],
 ["**REHAB+**",""]],[3400,5960]));

k.push(...glossary("Quick-Reference Glossary — Topic 5.1",[
 ["Health literacy","Ability to obtain, process, understand and use health information"],
 ["Teach-back","Asking the patient to restate the plan in their own words to confirm comprehension"],
 ["Shared decision-making","Partnership between clinician and patient in choosing the plan of care"],
 ["Stakeholder","Any party with a stake in the decision — patient, provider, manager, payer, policy-maker"],
 ["Knowledge translation (KT)","Synthesizing, sharing and applying research to improve practice"],
 ["Dissemination","Getting evidence in front of those who need it"],
 ["Knowledge broker","A local champion who facilitates adoption of evidence-based change"],
 ["CAT","Critically Appraised Topic — a concise, structured evidence summary"],
 ["Technology profile","A personal digital system for finding, storing and retrieving evidence"],
 ["Online repository","Curated secondary source of summarised or applied evidence"],
 ["Evidence alert","Automated notification of new publications on a chosen topic"]]));

k.push(linkBox("🔗 Resources named in Topic 5.1",[
 ["CEBM — Centre for Evidence-Based Medicine","https://www.cebm.net/",""],
 ["BestBETs","https://www.bestbets.org/",""],
 ["CanChild","https://canchild.ca/",""],
 ["APTA — Evidence-Based Practice Resources","https://www.apta.org/patient-care/evidence-based-practice-resources",""],
 ["Physical Therapy (PTJ) journal alerts","https://academic.oup.com/ptj/pages/alerts",""],
 ["EvidenceAlerts","https://www.evidencealerts.com/",""],
 ["Zotero","https://www.zotero.org/",""]],C.teal));

k.push(pageBreak());

/* ─────────────────────────── SYNC SESSION 5 ─────────────────────────── */
k.push(banner("SYNC SESSION 5","From Evidence to Action — Knowledge Brokering in PT Practice"));
k.push(spacer());
k.push(body("Objectives: apply EBP beyond appraisal to effect change; identify key stakeholders in a clinical system; translate evidence into stakeholder-appropriate messages; demonstrate the role of a knowledge broker in facilitating practice change."));

k.push(h1("1. The Premise"));
k.push(infoBox("Why evidence doesn't automatically change practice",[
 "**Evidence alone does not change behaviour. Evidence ≠ adoption**",
 "**Why not? What are the barriers?**",
 "**Context and communication matter**"],C.red,C.lightRed));

k.push(h1("2. The Clinical Scenario"));
k.push(infoBox("Riverview Outpatient Rehabilitation",[
 "A **hospital-affiliated clinic serving adults with neurological conditions**",
 "The clinic has identified **inconsistent outcomes in patients with chronic stroke**, particularly **walking speed and community ambulation**",
 "**Leadership has asked the team to review the evidence and make practice recommendations that do not increase cost or visit length**"],C.blue,C.lightBlue));
k.push(bullet("**The clinical question:** in adults with chronic stroke, does **task-specific gait training** compared to **traditional impairment-based exercise** improve walking speed and community ambulation?"));
k.push(tip("Note the constraint in the last line of the scenario. “No increased cost or visit length” is not a detail — it is the administrator's stake in the decision, and any recommendation that ignores it fails the exercise regardless of how good the evidence is."));

k.push(h1("3. The Two Evidence Sources"));
k.push(detail(["Assigned to","Source"],[
 ["**Groups 1–11**","**Cochrane systematic review.** French B, Thomas LH, Coupe J, et al. Repetitive task training for improving functional ability after stroke. *Cochrane Database Syst Rev.* 2007;(11). doi:10.1002/14651858.CD006073.pub3"],
 ["**Groups 12–22**","**APTA Neurology Academy CPG.** Hornby TG, Reisman DS, Ward IG, et al. Clinical Practice Guideline to Improve Locomotor Function Following Chronic Stroke, Incomplete Spinal Cord Injury, and Brain Injury. *J Neurol Phys Ther.* 2020;44(1):49-100. doi:10.1097/NPT.0000000000000303"]],[2200,7160]));
k.push(bullet("**The point of splitting them:** the large-group report-out compares the recommendations produced by a **systematic review** versus a **clinical practice guideline** — and asks how you reconcile the differences."));

k.push(h1("4. The Four Breakout Roles"));
k.push(detail(["Role","What you represent"],[
 ["**Evidence Appraiser**","Interprets the evidence summary for the outcome of interest. Identifies **strength, limitations and applicability**"],
 ["**Clinician Advocate**","Represents frontline PT concerns: **feasibility · time · patient adherence**"],
 ["**Administrator / Manager**","Focuses on **cost · productivity and outcomes · staffing · policy**"],
 ["**Knowledge Broker**","**Facilitates the discussion.** Integrates each member's viewpoint, translates evidence for each stakeholder, and helps the group reach a **shared recommendation**"]],[2900,6460]));
k.push(infoBox("Breakout ground rules",[
 "**Stay in character**",
 "**Focus on translation, not searching — no new evidence needed**",
 "**Active engagement**",
 "**Respectful disagreement**",
 "**Consider both evidence AND feasibility**"],C.gold,C.lightGold));

k.push(h1("5. Mission 1 — Interpret the Evidence"));
k.push(detail(["Question","What to produce"],[
 ["**What does the evidence support?**","The practice recommendation your assigned source actually justifies"],
 ["**What are the limitations?**",""],
 ["**Is it sufficient to recommend change?**","Including the **strength** of the recommendation"]],[3200,6160]));
k.push(body("**The comparison worksheet** for this task asks you to fill both the CPG column and the Cochrane column across ten domains:"));
k.push(detail(["Comparison domain","—"],[
 ["**Primary purpose of the resource**",""],
 ["**Type of evidence**",""],
 ["**Population addressed**",""],
 ["**Key findings**",""],
 ["**Strength of evidence**",""],
 ["**Clinical applicability**",""],
 ["**Feasibility considerations**",""],
 ["**Implications for clinicians**",""],
 ["**Implications for administrators**",""],
 ["**How evidence should be translated**",""]],[5400,3960]));

k.push(h1("6. Mission 2 — Stakeholder Translation"));
k.push(body("The worksheet is a three-row grid. Same body of evidence, three different audiences — **what matters most to each, and how the message must change.**"));
k.push(detail(["Stakeholder","What matters most (priorities and constraints)","How the evidence should be framed (language and emphasis)"],[
 ["**Clinicians**","Feasibility · time · patient adherence · does this fit into a real session?","Practical, protocol-level, honest about effort required"],
 ["**Patients / caregivers**","Pain · function · return to the activities they care about","Plain language tied to their goals — not effect sizes"],
 ["**Administrators / managers**","Cost · productivity · outcomes · staffing · policy","Brief, quantified, framed against cost-effectiveness and quality"]],[2400,3600,3360]));
k.push(tnote("The two right-hand columns are what you fill in during the session. The entries above are the direction Topic 5.1 points, not the graded answer."));

k.push(h1("7. Mission 3 — Implementation Strategy"));
k.push(detail(["Deliverable","What it requires"],[
 ["**One clear recommendation**","The practice change you're proposing"],
 ["**One implementation strategy**","An approach that accounts for each constituent group"],
 ["**One anticipated barrier and mitigation plan**","**Obstacles per stakeholder group** — clinicians, patients, administrators — and specific steps to avoid or mitigate each"]],[3200,6160]));
k.push(tip("The barrier question is where the grade lives. A recommendation with no named obstacle reads as though you didn't think about implementation — which is the exact failure mode the whole session is built to demonstrate."));

k.push(h1("8. Key Takeaways"));
k.push(infoBox("What the session wants you to leave with",[
 "**EBP is relational**",
 "**Knowledge brokering is a PT skill**",
 "**Communication drives impact**",
 "The open question it ends on: **what methods actually increase understanding, buy-in and uptake?**"],C.green,C.lightGreen));

k.push(...glossary("Quick-Reference Glossary — Sync Session 5",[
 ["Task-specific gait training","Practising walking itself, rather than the impairments underlying it"],
 ["Impairment-based exercise","Training the underlying deficits — strength, ROM — rather than the task"],
 ["Community ambulation","Walking function sufficient for real-world environments"],
 ["Evidence appraiser","Breakout role interpreting strength, limitations and applicability"],
 ["Clinician advocate","Breakout role representing feasibility, time and adherence"],
 ["Knowledge broker","Breakout role facilitating translation and consensus"],
 ["Implementation strategy","The concrete plan for turning a recommendation into practice"],
 ["Barrier / facilitator","Factors that impede or support adoption of evidence"]]));

k.push(linkBox("🔗 Sources used in Sync Session 5",[
 ["Cochrane — Repetitive task training for improving functional ability after stroke","https://doi.org/10.1002/14651858.CD006073.pub3",""],
 ["APTA Neurology Academy CPG — Locomotor Function Following Chronic Stroke, Incomplete SCI, and Brain Injury","https://doi.org/10.1097/NPT.0000000000000303",""]],C.teal));

build(k,"/home/claude/out/Module5_ClinicalResearchDesigns_StudyNotes.docx");
