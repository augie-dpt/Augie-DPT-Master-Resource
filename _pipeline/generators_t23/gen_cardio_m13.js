const L = require('/home/claude/notes_lib.js');
const {C,h1,h2,body,bullet,tnote,tip,compare,detail,infoBox,banner,glossary,fig,pageBreak,spacer,cover,build,linkBox} = L;
const k=[];

k.push(...cover("Cardiopulmonary Practice (DPTH 6612)","Module 13: Discharge Planning and Communication",
 "Topics: 1 Discharge Planning (home · post-acute · specialized · outcome measures · DME) • 2 Decision Making as Part of the Rehab Team • 3 Communication • 4 Documentation • Quiz 11",
 ["Eight short lecture videos by Dr. Mallory Kargela (~4–6 min each) — watch them in your own Canvas module; every one has a handout, transcript, and GUIDED NOTES",
  "Topic 1 alone bundles five lectures: DC for home, DC for sub-/post-acute, DC to cardiac/pulm rehab, using outcome measures for DC, and DME",
  "The module's spine: where should this patient go, who decides, how do you say it in rounds, and how do you write it so it sticks",
  "Know the AM-PAC and 6MWT discharge cutoffs cold — they anchor half the critical-thinking cases"]));

/* ─────────────────────────── TOPIC 1 ─────────────────────────── */
k.push(banner("TOPIC 1","Discharge Planning — Home, Post-Acute, Specialized, and DME"));
k.push(spacer());
k.push(h1("1. Discharge Planning for Home"));
k.push(bullet("Why it matters: patients discharged home before they're ready are at risk for **readmission, falls, and further functional decline** — your input on mobility, endurance, and support needs is what makes the discharge safe. The decision integrates **physical function (balance, gait, endurance, strength), cognitive status, home environment, medical complexity, and patient preferences**. No single item decides it; the question is whether they can mobilize safely, are medically stable, have adequate support, and are cognitively/emotionally ready to manage at home."));
k.push(detail(["The three home-discharge paths","Who fits"],[
 ["**Home, no further PT**","Functionally independent in mobility, transfers, ADLs; stable vitals with activity; no impairment that would benefit from continued PT (rapid improvement or back to baseline)"],
 ["**Home with HOME HEALTH PT**","**The homebound requirement is non-negotiable**: leaving home takes considerable, taxing effort even WITH assistance (CMS language: normal inability to leave; cannot leave under simple circumstances). Not \"independent but wants extra PT\" — truly homebound, with skilled, intermittent needs (endurance, balance, functional mobility worked in the home)"],
 ["**Home + OUTPATIENT PT**","Safe at home but with clinic-addressable deficits (endurance, pain with activity, balance, residual weakness); medically stable AND able to get to and from the clinic safely, independently or with help"]],[3000,6360]));
k.push(bullet("**How you decide:** integrate objective data — gait speed, five-times sit-to-stand, 6MWT, oxygen use — with context: what the home looks like and who's in it. Documentation must paint that picture: ambulation distance, level of assistance, endurance, vitals, and how the patient's ability matches the recommended level of care."));
k.push(h1("2. Sub-Acute and Post-Acute Settings"));
k.push(detail(["Setting","Focus · stay · therapy intensity · who fits"],[
 ["**SNF** (skilled nursing facility)","Sub-acute rehab + nursing care · ~1–3 weeks or more · **1–1.5 h therapy/day**. Criteria: 3 midnight hospital stays; needs daily skilled nursing + ≥1 skilled service (PT/OT/wound care); functionally unable to return home but improving; stable enough to not need daily physician visits. Cardiopulm examples: CHF exacerbation with deconditioning; COPD flare needing O₂ weaning + slow progression"],
 ["**IRF** (inpatient rehab facility)","Intensive multidisciplinary rehab · ~10–14 days · **3 h/day, 5 days/week**. Criteria: tolerates and actively participates in 3 h/day; requires **≥2 therapy disciplines**; medically stable but needs close oversight; potential for significant improvement. Examples: sternal precautions post-CABG needing mobility training; stroke; deconditioning after sepsis + respiratory failure; acute decompensated heart failure"],
 ["**LTACH** (long-term acute care hospital)","Medically complex, still hospital-level care · weeks to months · variable/lower intensity. Examples: extended **ventilator weaning**, complex wounds, long-term IV antibiotics, multi-organ support — too ill for IRF or SNF, not ready for home"]],[2400,6960]));
k.push(bullet("Your role: assess mobility, endurance, safety, and **rehab tolerance** (can they handle 3 h/day?), then advocate with documentation that proves medical necessity and rehab potential. And know the limits: **insurance authorization, bed availability, and social factors also drive placement** — advocate anyway, and revisit recommendations as status changes."));
k.push(pageBreak());
k.push(h1("3. Specialized Discharge — Cardiac and Pulmonary Rehab"));
k.push(compare("CARDIAC REHAB","PULMONARY REHAB",
 ["Structured OUTPATIENT program: monitored exercise + education + counseling",
  "**Phases: I inpatient · II outpatient (your referral target) · III long-term maintenance**",
  "Indications insurers recognize: **recent MI (within 12 months), CABG or PCI, stable angina, HFrEF, heart transplant**"],
 ["Outpatient, multidisciplinary: supervised exercise + breathing strategies + education",
  "Best suited for **COPD, interstitial lung disease, pulmonary hypertension, post-lung-procedure/transplant**",
  "**Persistent dyspnea interfering with daily activities despite medication should prompt the referral**"],
 C.red,C.blue,C.lightRed,C.lightBlue));
k.push(bullet("**Readiness:** medically stable, adequate mobility, manageable symptoms, insight and motivation, and the practical piece — can they **travel to multiple sessions per week**? Documented barriers (transportation is the repeat offender in the evidence, plus cognitive/literacy limits and insurance) may mean home health FIRST or case-management involvement before the outpatient program. Document gait speed, 6MWT distance, perceived exertion — plus motivation and ability to learn, because those are inherent to both programs."));
k.push(h1("4. Using Outcome Measures to Drive the Discharge Plan"));
k.push(detail(["AM-PAC 6-Clicks (6–24)","What it suggests"],[
 ["**> 18**","Home discharge, typically without services"],
 ["**14–18**","Home WITH home health PT or outpatient rehab"],
 ["**< 14**","Further rehab — IRF, SNF, or LTACH (then pick which, using the criteria above)"]],[2800,6560]));
k.push(bullet("The lecture's honesty clause: research varies, and **17–18 is the true home-vs-facility cutoff** — the three bands are training wheels for turning numbers into plans. **6MWT:** > 300 m ↔ community ambulation and independent living; **< 200 m** ↔ significant limitation, usually SNF/IRF-level need; change of ~30–54 m is clinically meaningful progress."));
k.push(tip("Never document the number alone — document the number PLUS the meaning: \"AM-PAC 12/24, ambulated 100 m in 6 minutes with moderate dyspnea — recommend IRF for continued endurance training and oxygen management.\" That sentence is the whole skill."));
k.push(h1("5. Durable Medical Equipment (DME)"));
k.push(bullet("**DME = reusable, medically necessary equipment for home care, prescribed by a provider** so insurance (e.g., Medicare) covers it: oxygen, walkers, wheelchairs, hospital beds, commodes, shower chairs/benches. Cardiopulm patterns: heart failure → home O₂ and rolling walker for limited endurance; worse disease → more equipment (fatigue, orthostatic hypotension)."));
k.push(bullet("**When:** the patient cannot safely complete mobility or self-care because of endurance, strength, or other exam-based limits — think DME whenever you see fall risk, desaturation, or fatigue-related instability. **Measures that flag it:** AM-PAC < 18, 6MWT vital responses, TUG fall risk. **Document the functional barrier + how the equipment mitigates it** (the classic: needs one-person assist to walk — hand them a walker and they're independent; that's your medical-necessity sentence). Then advocate: tell the case manager, confirm the equipment arrives BEFORE discharge, and teach the patient/family to use it."));
k.push(pageBreak());

/* ─────────────────────────── TOPIC 2 ─────────────────────────── */
k.push(banner("TOPIC 2","Decision Making as Part of the Rehab Team",C.teal));
k.push(spacer());
k.push(bullet("Team-based rehab sees the whole person. In acute care the interdisciplinary team spans physicians, nurses, respiratory therapists, OTs, dietitians, social workers, case managers — and **PT/OT co-evaluations** are the topic's centerpiece: they improve patient experience and efficiency, and put direct communication in place of typed-note telephone."));
k.push(detail(["Co-eval mechanics","The lecture's playbook"],[
 ["**Roles**","PT: mobility, cardiopulmonary response, discharge planning. OT: ADLs, cognition, UE function — informing the same discharge plan. Respect the scopes; divide the labor accordingly"],
 ["**When to co-eval**","Complex patients needing both mobility AND ADL assessment · limited patient availability · low tolerance for multiple sessions · early discharge decisions needed"],
 ["**Before**","Review the chart independently → set session goals together → agree on division of labor and safety parameters"],
 ["**During**","Joint introduction (\"I'm the PT, this is my OT colleague\" — separate, distinct roles) · alternate or combine tasks (PT leads bed mobility, OT initiates grooming at the sink) · shared decision-making in real time — adjust for fatigue or confusion, huddle mid-session if needed"],
 ["**Outcome**","A holistic functional picture → next-level-of-care recommendation → efficient handoff to case management → confidence in patient safety"]],[2300,7060]));
k.push(pageBreak());

/* ─────────────────────────── TOPIC 3 ─────────────────────────── */
k.push(banner("TOPIC 3","Communication — Rounds and Discharge Planning",C.teal));
k.push(spacer());
k.push(bullet("**Rounding** = the routine (usually daily) interdisciplinary meetings — bedside or huddle — where progress, plans, and discharge readiness get decided, with physicians, nurses, case managers, and rehab at the table. You'll often be the ONLY person who has actually seen the patient get out of bed, walk, try stairs. Rounds are **the communication bridge between bedside care and the discharge plan**."));
k.push(bullet("**Your basic message, prepared in advance** (rounds move fast): what can the patient physically do right now · what help do they need to be safe · what do you recommend for discharge, and why. Use **SBAR** structure, speak confidently, keep it function-focused, and skip the jargon — \"requires assistance,\" \"unable to perform stairs,\" \"not safe for home alone.\""));
k.push(infoBox("🗣️ When the team disagrees",[
 "The medical team wants discharge today; your exam says the patient still needs help with all mobility.",
 "Lean on findings — facts and function, not opinion: \"This patient requires moderate assist with toileting, and there's no caregiver available during the day — I'm concerned about their safety at home.\"",
 "You're not saying no; you're offering a professional recommendation grounded in patient safety. Your voice is what prevents premature discharges and readmissions."],C.gold,C.lightGold));
k.push(bullet("**Back it up in the chart:** every rounds recommendation needs matching documentation — the objective data behind it AND the fact that the communication happened: \"Patient ambulated 75 ft with contact-guard assist; discussed with case manager and MD; recommend SNF due to safety and lack of caregiver.\" That reinforces the recommendation, records the team decision, and protects the patient."));
k.push(pageBreak());

/* ─────────────────────────── TOPIC 4 ─────────────────────────── */
k.push(banner("TOPIC 4","Documentation in Acute Care",C.navy));
k.push(spacer());
k.push(bullet("Every note is a **communication tool, legal protection, reimbursement support, and discharge evidence** at once — \"a strong note is your voice when you're not there to say it yourself.\" Your audience is broad: physicians, nurses, case managers, and **external reviewers**. Write so any of them understands why a PT was in that room."));
k.push(detail(["Note type","What it must do"],[
 ["**Initial evaluation**","Sets the stage: the patient's story (why they're here, their goals) → objective findings → interpretation → a realistic, functionally focused plan — plus any team/family communication"],
 ["**Daily treatment note**","Interventions + the patient's RESPONSE, specifically: tasks practiced, performance, barriers, supports (if the parent in the room made the peds session work, say so). Shows the plan is working; justifies ongoing care"],
 ["**Discharge summary**","Ties it together to support the transition to the next level of care"],
 ["**Progress note**","Occasional in acute care — mid-stay resets (new surgery, a fall) that re-anchor the picture"]],[2400,6960]));
k.push(bullet("**The reviewer test — write to support medical necessity:** does the note show why a PT (not an aide or tech) was needed? Does it describe the complexity? Does it connect interventions to meaningful goals? Does it justify the service as necessary AND skilled?"));
k.push(compare("STRONG LANGUAGE","WEAK LANGUAGE (avoid)",
 ["\"Impaired balance impacting discharge readiness\"",
  "\"Unable to safely ambulate > 10 ft due to SOB, requiring rest and cueing\"",
  "\"Intervention focused on safe bed mobility with sternal precautions\"",
  "Vitals used to describe session tolerance"],
 ["\"Patient tolerated well\" — describe what actually happened instead",
  "Copy-paste notes that overlook new findings (the physician-documentation disease)",
  "Missing functional goals; no barriers or risks named",
  "\"Mobility impaired. PT recommended.\" — tells a reviewer nothing"],
 C.green,C.red,C.lightGreen,C.lightRed));
k.push(tnote("The lecture's closing critical-thinking set hands you six real note excerpts to grade strong vs weak — do them. The pattern for fixing a weak one is always the same: replace the verdict with the evidence (task, distance, assist level, vitals, barrier, recommendation)."));
k.push(bullet("**Quiz 11** closes the module (Respondus LockDown Browser + webcam — details in Canvas)."));
k.push(...glossary("Module 13 — Quick-Reference Glossary",[
 ["Three home paths","No PT · home health (HOMEBOUND is non-negotiable) · outpatient"],
 ["Homebound (CMS)","Normal inability to leave home; leaving takes considerable, taxing effort"],
 ["SNF","3 midnight stays · daily skilled nursing + ≥1 skilled service · 1–1.5 h/day therapy"],
 ["IRF","3 h/day, 5 d/wk · ≥2 disciplines · significant improvement potential"],
 ["LTACH","Hospital-level care long-term: vent weaning, complex wounds, IV antibiotics"],
 ["Cardiac rehab","Phase I inpatient → II outpatient → III maintenance; MI/CABG/PCI/angina/HFrEF/transplant"],
 ["Pulmonary rehab","COPD, ILD, pulm HTN, post-procedure; persistent dyspnea despite meds → refer"],
 ["AM-PAC bands","> 18 home · 14–18 home + services · < 14 facility (true cutoff 17–18)"],
 ["6MWT bands","> 300 m community · < 200 m SNF/IRF-level · MCID ≈ 30–54 m"],
 ["DME","Reusable, medically necessary, prescribed; document barrier + how equipment fixes it"],
 ["Co-eval","Chart review apart, goals together, joint intro, divided tasks, mid-session huddles"],
 ["Rounds message","What they can do · what help they need · where they should go · why (SBAR)"],
 ["The reviewer test","Why a PT, what complexity, which goal, why skilled"]]));

build(k,"/home/claude/out/Module13_DischargePlanningAndCommunication_StudyNotes.docx");