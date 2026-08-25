const L = require('/home/claude/notes_lib.js');
const {C,h1,h2,body,bullet,tnote,tip,compare,detail,infoBox,banner,glossary,pageBreak,spacer,footer,build,linkBox,run} = L;
const d = require('/home/claude/.npm-global/lib/node_modules/docx');
const {Paragraph, AlignmentType} = d;

function briefCover(title,sub){
  return [new Paragraph({children:[run("Professional Competencies I (DPTH 6811)",{italics:true,size:22,color:C.blue})],alignment:AlignmentType.CENTER,spacing:{before:200,after:80}}),
    new Paragraph({children:[run(title,{bold:true,size:34,color:C.navy})],alignment:AlignmentType.CENTER,spacing:{after:60}}),
    new Paragraph({children:[run("Module Brief — objectives, key ideas, and what to focus on",{italics:true,size:20,color:C.midGray})],alignment:AlignmentType.CENTER,spacing:{after:160}})];}

// ================= MODULE 1 =================
{
const k=[];
k.push(...briefCover("Module 1: What is Physical Therapy?",""));
k.push(banner("MODULE 1","Introduction to Physical Therapy Practice"));
k.push(spacer());
k.push(h1("The Module in One Paragraph"));
k.push(body("Per the Guide to Physical Therapist Practice 4.0, physical therapy is a dynamic, evidence-based profession focused on diagnosing and managing **movement dysfunction** to restore, maintain, and promote optimal function, health, and wellbeing. This module introduces the profession, the **APTA**, standards of practice, and professional behaviors."));
k.push(h1("Objectives"));
k.push(bullet("Describe the PT's role as a health professional using the APTA Standards of Practice and professional literature."));
k.push(bullet("Discuss professional behaviors consistent with APTA Core Values; describe the qualities of a healthcare professional and why professional behavior matters."));
k.push(bullet("Discuss professional development and the importance of membership and participation in professional associations."));
k.push(h1("Topic 1.1 — What is a Physical Therapist?"));
k.push(bullet("US physical therapy emerged in the **early 20th century**; the first American PT program was established at **Reed College, Portland, Oregon, 1914**."));
k.push(bullet("PTs diagnose and treat across the lifespan, build individualized plans of care toward patient goals, and educate patients for prevention and self-management."));
k.push(bullet("Ask yourself: the profession's historical foundation • what the practice of PT is • the PT's role as a health professional • which behaviors and qualities define a professional."));
k.push(h1("Topic 1.2 — The APTA"));
k.push(bullet("National professional organization of **100,000+** PTs, PTAs, and students. Mission: improve the health and quality of life of individuals in society by advancing PT practice, education, and research."));
k.push(bullet("Member services: continuing education, advocacy, research funding, networking. Watch Dr. Mallini's APTA introduction video in your Canvas module (~10 min)."));
k.push(tip("Assignments this module: Syllabus Review & Professional Readiness Worksheet + APTA Professionalism Module 1 Certificate."));
k.push(linkBox("▶ Explore (lecture videos: see your Canvas module)",[
 ["APTA Centennial: 100 Milestones of Physical Therapy","https://timeline.apta.org/centennial-timeline/#story-848",""],
 ["About the APTA","https://www.apta.org/apta-and-you/about-us",""],
 ["APTA membership benefits","https://www.apta.org/apta-and-you",""],
 ["APTA for Students","https://www.apta.org/for-students",""],
 ["Student leadership & getting involved","https://www.apta.org/apta-and-you/leadership-and-governance/student-leadership",""]]));
k.push(footer("Module brief compiled from the Canvas Module 1 pages — Augustana University DPT, Professional Competencies I (DPTH 6811). Source slides and transcripts are in this course's folders."));
build(k,"/home/claude/out/Module1_WhatIsPhysicalTherapy_ModuleBrief.docx");
}

// ================= MODULE 2 =================
{
const k=[];
k.push(...briefCover("Module 2: APTA Core Values & Code of Ethics",""));
k.push(banner("MODULE 2","APTA Core Values, Code of Ethics"));
k.push(spacer());
k.push(h1("The Module in One Paragraph"));
k.push(body("A deep dive into the **APTA Core Values** and **Code of Ethics**, plus Augustana-specific student standards, digital citizenship, and professional communication. Values give a shared framework for ethical decisions and professional conduct; the Code of Ethics turns them into standards you're accountable to."));
k.push(h1("Objectives"));
k.push(bullet("Describe the **five roles of the physical therapist** as they pertain to the APTA Code of Ethics."));
k.push(bullet("Discuss professional behaviors consistent with the Core Values, the qualities of a healthcare professional, and professional performance with peers and instructors."));
k.push(h1("Topic 2.1 — APTA Core Values"));
k.push(bullet("Know the **Core Values and sample indicators for each** — and what living them out looks like, down to email communication."));
k.push(bullet("Readings: APTA **Standards of Practice for Physical Therapy**; Miller & Brogan, *Professionalism in the Practice of Physical Therapy*, Ch. 1 (pp. 16–17)."));
k.push(h1("Topic 2.2 — APTA Code of Ethics"));
k.push(bullet("Opening scenario: a chronic-pain patient asks you to support an opioid dose increase — how do you respond? Bring reasoning, not just a rule."));
k.push(bullet("Ask yourself: the purpose of the Code • its key principles • how they align with your own values • consequences of failing them • how you promote ethical conduct among colleagues."));
k.push(bullet("Readings: APTA **Code of Ethics for the Physical Therapist**; Miller & Brogan Ch. 1 (pp. 10–14) on the Code's history and the move toward social and moral responsibility."));
k.push(tip("Assignment this module: APTA Professionalism (APTA Module 3)."));
k.push(linkBox("▶ Explore",[
 ["APTA Ethics and Professionalism","https://www.apta.org/your-practice/ethics-and-professionalism",""],
 ["Standards of Practice for Physical Therapy","https://www.apta.org/apta-and-you/leadership-and-governance/policies/standards-of-practice-pt",""],
 ["Code of Ethics for the Physical Therapist (PDF)","https://www.apta.org/siteassets/pdfs/policies/codeofethicshods06-20-28-25.pdf",""]]));
k.push(footer("Module brief compiled from the Canvas Module 2 pages — Augustana University DPT, Professional Competencies I (DPTH 6811)."));
build(k,"/home/claude/out/Module2_CoreValuesCodeOfEthics_ModuleBrief.docx");
}

// ================= MODULE 3 =================
{
const k=[];
k.push(...briefCover("Module 3: Scope of Practice & Delegation",""));
k.push(banner("MODULE 3","PT & PTA Scope of Practice and Delegation"));
k.push(spacer());
k.push(h1("The Module in One Paragraph"));
k.push(body("PT is the **only healthcare profession that includes its assistants in the same national association** — collaborative practice is a core principle. This module covers the scope of practice for PTs and PTAs and the legal/professional considerations of **delegation**, built around the APTA direction and supervision algorithms. Framing scenario: a confident PTA asks to take over a complex post-op shoulder patient — how do you decide what can be delegated?"));
k.push(h1("Objectives"));
k.push(bullet("Describe the PT's role as a health professional using the APTA Standards of Practice; describe professional qualities and the importance of professional behavior."));
k.push(h1("Topic 3.1 — PT and PTA Scope of Practice"));
k.push(bullet("**Scope of practice** = the activities a licensed professional is authorized and trained to perform, set by professional organizations, licensing boards, and regulators."));
k.push(bullet("Know the **three components that define a PT's scope of practice**, and what the PTA can and cannot do."));
k.push(bullet("APTA's **algorithmic guides** answer: when to direct interventions to the PTA, which interventions are appropriate to direct, and how to supervise once directed."));
k.push(h1("Topic 3.2 — PT Practice Settings"));
k.push(bullet("Watch Dr. Andreyo's **Physical Therapy Practice Settings** video (~20 min) in your Canvas module. Ask a non-healthcare friend what they picture when they hear \"physical therapy\" — sync discussion starter."));
k.push(bullet("Consider: how the PT's role evolves across outpatient, acute care, home health, pediatrics; how setting shapes interventions and collaboration; which settings surprised you."));
k.push(h1("Sync Session — Ethics Cases"));
k.push(infoBox("Real fraud cases discussed in this module's materials",[
 "Miami PTA convicted of fraudulent claims • PT healthcare kickbacks conviction • Drayer PT False Claims Act settlement • Hertel & Brown case.",
 "Worked with the **RIPS model of ethical decision-making** and a State Practice Act breakout activity — the case files and reflection prompts are in this course's folders."],C.purple,C.lightPurple));
k.push(tip("Assignment this module: APTA Professionalism (APTA Module 2)."));
k.push(linkBox("▶ Explore",[
 ["APTA: Physical Therapy Scope of Practice","https://www.apta.org/your-practice/scope-of-practice",""],
 ["PTA Direction and Supervision Algorithms","https://www.apta.org/your-practice/supervision-teamwork/pta-direction-and-supervision-algorithms",""],
 ["Guide to PT Practice — Ch. 2: Accessing PT Services","https://guide.apta.org/chapters/chapter-2",""],
 ["APTA: Practice Models and Settings","https://www.apta.org/your-practice/practice-models-and-settings",""],
 ["WebPT: Nontraditional PT Settings to Explore","https://www.webpt.com/blog/nontraditional-physical-therapy-settings-to-explore/",""]]));
k.push(footer("Module brief compiled from the Canvas Module 3 pages — Augustana University DPT, Professional Competencies I (DPTH 6811)."));
build(k,"/home/claude/out/Module3_ScopeOfPracticeDelegation_ModuleBrief.docx");
}
