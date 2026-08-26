const L = require('/home/claude/notes_lib.js');
const {C,h1,h2,body,bullet,tnote,tip,compare,detail,infoBox,banner,glossary,fig,pageBreak,spacer,cover,build,linkBox} = L;
const k=[];

k.push(...cover("Cardiopulmonary Practice (DPTH 6612)","Module 12: Interventions and Outcome Measures",
 "Topics: 1 Interventions for Acute Settings • 2 Acute Care Specific Outcome Measures • 3 Applying Outcome Measures to Acute Settings • Sync: case application • Quiz 10",
 ["Three lecture videos by Dr. Mallory Kargela (~11, ~5, and ~6 min) — watch them in your own Canvas module; handouts, transcripts, and GUIDED NOTES for each are posted alongside",
  "Reading: Hillegass Ch 19–20 + 23; Paz & West Ch 23",
  "LAB EXPECTATION from the lecture: know how to set up and run the 6MWT before you arrive, practiced on healthy adults",
  "Sync resources worth keeping forever: the Walking Speed — the Sixth Vital Sign white paper and the FIST Training Manual"]));

/* ─────────────────────────── TOPIC 1 ─────────────────────────── */
k.push(banner("TOPIC 1","Interventions for Acute Settings"));
k.push(spacer());
k.push(bullet("The outpatient interventions from earlier in the course still apply in acute care — this lecture adds the acute-specific layer. The constant: interventions must be **highly individualized and responsive to changing medical status**. Before every session you're checking **vitals (HR, BP, RR, SpO₂), lab values, oxygen requirement, lines/tubes/drains, cognitive status and fatigue, hemodynamic stability, medications and their side effects, and the team's goals** — those factors decide IF and HOW therapy proceeds that day."));
k.push(bullet("**Billing frame:** the most commonly billed TIMED services are **therapeutic exercise · neuromuscular re-education · therapeutic activities · gait training** (the lecture's four categories); common UNTIMED services include NMES, canalith repositioning, and physical performance testing."));
k.push(h1("1. The Four Timed Categories, Acute-Care Style"));
k.push(detail(["Category","What it looks like in acute care"],[
 ["**Therapeutic exercise — ROM**","Passive → active-assisted → active. Preserves joint integrity, prevents contractures in sedated/bed-rest patients — and even PROM has systemic benefits (circulation, pressure-injury risk reduction). Example: AAROM for ICU-acquired weakness"],
 ["**Therapeutic exercise — strengthening**","Start basic: isometrics, gravity-minimized, functional strength tasks; low resistance, progress by tolerance with close cardiovascular monitoring. **Billing nuance from the lecture:** a bedside sit-to-stand billed as ther-ex must emphasize quad strengthening — the same task without that emphasis is therapeutic activity"],
 ["**Therapeutic exercise — aerobic**","Seated marching, cycle ergometer, ambulation. Improves oxygen utilization, fights deconditioning; intensity guided by **RPE, HR, and SpO₂** (example threshold: 3-min ergometer with SpO₂ > 90%). Know the deck's progression algorithm from ther-ex into gait training"],
 ["**Neuromuscular re-education**","Often overlooked; targets **ICU-acquired weakness** and the sensory-motor disconnect of immobility. Coordination/motor-control tasks (reaching, seated weight shifts, fine-motor clip tasks) and **postural control** (edge-of-bed sitting, therapy ball, supported standing, tilt table) — with intense vital monitoring for orthostatic intolerance"],
 ["**Therapeutic activities**","Functional, meaningful tasks: bed mobility, transfers, grooming, dressing — engagement + neuroplasticity even in the acute phase (for peds, PLAY is the therapeutic activity). Includes **substitution/compensatory training** (step-to pattern for a hemiparetic limb, adaptive equipment) — in acute care you're compensating for safety now, not chasing neuro recovery; that's rehab's job"],
 ["**Gait training**","The most visible intervention: walking on oxygen, with devices, stairs — restoring safe, efficient mobility while managing the \"tree\" (IV pole, chest tubes, Foley, telemetry) and monitoring vitals throughout"]],[2700,6660]));
k.push(bullet("**Discharge thinking starts inside the interventions:** home-safety assessment, DME recommendations, and patient/caregiver education (activity precautions, energy conservation, when to seek help) are all part of acute-care intervention — tub-transfer training with a shower chair is therapy AND discharge prep at once."));
k.push(tnote("The lecture's critical-thinking frame is predict → plan → manage: for each patient scenario, predict the physiologic response, plan the intervention and its parameters, and manage what actually happens against the vitals in front of you."));
k.push(pageBreak());

/* ─────────────────────────── TOPIC 2 ─────────────────────────── */
k.push(banner("TOPIC 2","Acute Care Specific Outcome Measures",C.teal));
k.push(spacer());
k.push(bullet("Why bother in a setting this fast: outcome measures **quantify progress, justify PT services, and communicate with the team** — objective data guides discharge plans and cuts practice variability when decisions happen day after day."));
k.push(h1("1. The Three Tools"));
k.push(detail(["Tool","The details you'll be tested on"],[
 ["**6-Minute Walk Test (6MWT)**","Submaximal **aerobic capacity + endurance**; validated in heart failure, COPD, post-ICU COVID recovery. Setup: 30-m flat hallway (shorter allowed), stopwatch, pulse ox, BP cuff, Borg RPE/dyspnea scales; pre/post vitals. \"Walk as far as you can in 6 minutes,\" self-paced, standing rests allowed — **once they sit, the test is over**; encouragement is STANDARDIZED (scripted phrases at each minute). Assistive device allowed but must be consistent"],
 ["**AM-PAC \"6-Clicks\" (Basic Mobility)**","Activity Measure for Post-Acute Care, short form. **Six tasks scored 1 (unable) → 4 (independent), total 6–24**; under 5 minutes; can be scored by clinical PERCEPTION without physically observing every item. PT documents Basic Mobility; OT typically covers Daily Activity. **Predicts discharge destination** — critical info for case managers"],
 ["**Acute Care Index of Function (ACIF)**","Developed FOR acute care; broadest view — **four domains: mental status, bed mobility, transfers, mobility**. Bed mobility/transfers/mobility scored unable–dependent–independent (mental status yes/no), averaged per domain. Use as a comprehensive screen at eval AND to track domains over time; favored for complex patients (post-cardiac procedures, ICU)"]],[2700,6660]));
k.push(h1("2. Interpretation Anchors"));
k.push(bullet("**6MWT:** distances **< 300 m** correlate with higher morbidity/mortality in CHF and COPD; clinically meaningful change ≈ **30–54 m** (diagnosis-dependent)."));
k.push(bullet("**AM-PAC:** higher = more independent; **score ≤ 17 predicts a non-home discharge** — the number to bring to the case manager."));
k.push(tip("Choosing between them: 6MWT when the question is endurance and aerobic response (telemetry, ICU step-down); AM-PAC when the question is where is this person going; ACIF when the patient is complex and you need to see WHICH domain is the problem."));
k.push(pageBreak());

/* ─────────────────────────── TOPIC 3 ─────────────────────────── */
k.push(banner("TOPIC 3","Applying Familiar Outcome Measures to Acute Care",C.teal));
k.push(spacer());
k.push(bullet("These are tools you already know from earlier coursework — the acute-care skill is **modifying them wisely**: select key items, shorten distances, allow devices, and interpret against a medically complex, rapidly changing picture. More data isn't the goal; data that shapes the plan of care is."));
k.push(detail(["Measure","Acute-care adaptation + the anchor number"],[
 ["**Berg Balance Scale**","Full 14 items is lengthy — in acute care, often SELECT key tasks and track them day to day (full test still allowed)"],
 ["**Timed Up & Go (TUG)**","Basic functional mobility; commonly shortened walking distance + assistive device allowed — time it CONSISTENTLY. **> 13.5 s = fall-risk indicator** (community-dwelling adults)"],
 ["**Gait speed (10MWT)**","\"**The sixth vital sign**\" — quick, responsive to change, predicts outcomes including discharge location. The sync white paper is the definitive read"],
 ["**Dynamic Gait Index (DGI)**","Balance during walking tasks (head turns, obstacles); partial administration acceptable for patients safe to ambulate. **< 19 = fall risk**"],
 ["**Functional Gait Assessment (FGA)**","DGI plus harder items (eyes closed, backward walking); more sensitive for HIGH-level balance; needs a medically stable patient who tolerates > 20 ft — often used piecemeal (the lecture's example: tracking a marathoner admitted with a DVT)"],
 ["**Function in Sitting Test (FIST)**","For patients who can't yet stand or walk: **14 items of seated balance/postural control, each 0–4**, bedside, 5–10 min (Gorman). Ideal for ICU and early mobility; responsive; bridges bed mobility → sitting → standing"]],[2500,6860]));
k.push(bullet("**The pairing logic:** DGI/FGA live at the high-functioning end, FIST at the low-functioning end — pick the tool that matches where the patient actually is today, and be ready to switch as they move."));
k.push(pageBreak());

/* ─────────────────────────── SYNC ─────────────────────────── */
k.push(banner("MODULE 12","Sync Session — Case Application + Quiz 10",C.navy));
k.push(spacer());
k.push(bullet("The sync applies intervention selection and outcome-measure choice through cases (details and slides in your own Canvas module). The two posted resources are keepers: the **Walking Speed: the Sixth Vital Sign white paper** and the **FIST Training Manual (Gorman, v1.5)** — both live beside these notes in the Drive."));
k.push(bullet("**Quiz 10** closes the module (Respondus LockDown Browser + webcam — check Canvas for details). The three lectures' critical-thinking questions are the best rehearsal: match measure to patient, name the modification, and justify with the anchor numbers above."));
k.push(...glossary("Module 12 — Quick-Reference Glossary",[
 ["Pre-session checks","Vitals · labs · O₂ · lines/tubes/drains · cognition · hemodynamics · meds · team goals"],
 ["Four timed categories","Ther-ex (ROM/strength/aerobic) · neuro re-ed · ther activity · gait training"],
 ["Sit-to-stand billing","Quad-strengthening emphasis = ther ex; otherwise = therapeutic activity"],
 ["ICU-acquired weakness","The target of neuro re-ed: coordination, motor control, postural tasks"],
 ["6MWT","30-m course, scripted encouragement, sit = done; < 300 m = worse outcomes; MCID ≈ 30–54 m"],
 ["AM-PAC 6-Clicks","6 items, 1–4 each, 6–24 total; ≤ 17 predicts non-home discharge"],
 ["ACIF","Four domains: mental status, bed mobility, transfers, mobility"],
 ["TUG","> 13.5 s = fall risk"],
 ["Gait speed","The sixth vital sign (10MWT)"],
 ["DGI / FGA","< 19 = fall risk / higher-level version, > 20 ft tolerance"],
 ["FIST","14 seated-balance items, 0–4, bedside — for patients not yet standing"]]));

build(k,"/home/claude/out/Module12_InterventionsAndOutcomeMeasures_StudyNotes.docx");