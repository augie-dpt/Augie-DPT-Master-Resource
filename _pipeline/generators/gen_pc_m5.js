const L = require('/home/claude/notes_lib.js');
const {C,h1,h2,body,bullet,tnote,tip,compare,detail,infoBox,banner,glossary,fig,pageBreak,spacer,cover,build,linkBox} = L;
const k=[];

k.push(...cover("Professional Competencies I (DPTH 6811)","Module 5: Learning Strategies",
 "Topics: 5.1 Metacognition • 5.2 Self-Assessment & Learning Strategies (LASSI) • 5.3 Time Management • Professionalism Part III: the Oak Tree model",
 ["Every topic runs on short public videos + McGuire's Teach Yourself How to Learn (Ch 3, 5, 9) — links below, book beside the notes",
  "Assignment: take the LASSI online (login credentials are posted in your own Canvas module) and write the reflection; the sync is a LASSI jigsaw",
  "This lands the week before lab immersion on purpose — it's the how-to-survive-the-program module. Read it in week one, not week ten"]));

// ===== 5.1 =====
k.push(banner("TOPIC 5.1","Metacognition — Thinking About Your Thinking"));
k.push(spacer());
k.push(bullet("The module's opening scenario: hours reviewing notes, walking into lab feeling prepared — and freezing when the patient scenario demands APPLICATION. Memorizing is not the same as thinking about your thinking. **Metacognition = the ability to PLAN, MONITOR, and EVALUATE your own learning**: recognize what you actually know, find the gaps, and change strategy when one isn't working. It's the bridge from rote memorization to clinical reasoning that sticks — and the same habit that makes a clinician who keeps learning for a career."));
k.push(detail(["Ask yourself (the Canvas prompts — use them weekly)","What it's really testing"],[
 ["When I study, do I think about HOW I'm learning, or just memorize?","Whether you have a strategy at all"],
 ["Do I know if I UNDERSTAND the material, or just recognize it?","Recognition feels like knowledge until the practical exam"],
 ["When a strategy isn't working, do I change it or keep grinding?","Evaluation → adjustment is the whole loop"],
 ["How often do I stop mid-study to check progress?","Monitoring — the step almost everyone skips"]],[5000,4360]));
k.push(pageBreak());

// ===== 5.2 =====
k.push(banner("TOPIC 5.2","Self-Assessment & Learning Strategies — Closing the Confidence Gap",C.teal));
k.push(spacer());
k.push(bullet("Scenario two: you finish a practice practical CONFIDENT — then the score shows missed steps and overlooked details. That gap between **perceived and actual performance** is the topic (the TED-Ed video is the Dunning-Kruger effect in five minutes). The fix is evidence over feeling: **self-testing, error analysis, teaching someone else, applying concepts to NEW cases, adjusting based on quiz/lab/instructor feedback**. And when an assessment goes badly — analyze your preparation, don't blame the test."));
k.push(infoBox("📊 The LASSI (Learning and Study Strategies Inventory)",[
 "10 scales, scored as percentiles: ANXiety · ATTitude · CONcentration · INformation Processing · MOTivation · Selecting Main Ideas · Self-Testing · Test STrategies · Time ManagemenT · Using Academic Resources",
 "Take it online — the school number, username, and password are posted in your own Canvas module",
 "The assignment: reflect honestly on your two or three lowest scales and pair EACH with a concrete strategy from McGuire Ch 5",
 "The sync jigsaw: teams each dig into scales and teach the strategies back — arrive with your own report done"],C.blue,C.lightBlue));
k.push(pageBreak());

// ===== 5.3 =====
k.push(banner("TOPIC 5.3","Time Management — Protecting the Hours That Matter",C.teal));
k.push(spacer());
k.push(bullet("Scenario three: practical week, a nightly study plan, and then assignments + group meetings + life — exam day arrives with half the material reviewed. Time management here isn't tidiness; it's **protecting deep learning, self-care, and clinical preparation**. Tools: **time audits** (find where hours actually go), **weekly scheduling** (study time gets calendar slots exactly like class), **prioritization** when deadlines stack. The UBuffalo video opens with a calculation of how many study hours your credit load demands — run it for this trimester and compare it to your reality. Then defend sleep, exercise, and a personal life; they're part of the system, not the leftovers."));
k.push(pageBreak());

// ===== Oak tree =====
k.push(banner("PROFESSIONALISM PART III","The Oak Tree Model + the Contemporary Concepts",C.navy));
k.push(spacer());
k.push(detail(["Stage","Who's here","What it looks like"],[
 ["**Emerging professional** (the acorn)","Almost every student — and most new grads","Entry-level awareness that personal behaviors shape professional growth and opportunity; understanding self, wanting the skills"],
 ["**Reflecting professional** (the sapling's branches)","Growing practitioners","Reflective about interactions, DELIBERATE in responses, contemplative of feedback — the maturity required before leading others"],
 ["**Influencing professional** (the oak)","The pinnacle","Role model and mentor to other professionals, who knows the journey never fully \"arrives\""]],[2600,2400,4360]));
k.push(bullet("The journey is lifelong and intentional: **write short-term goals every trimester** (academic AND professional behaviors — anchor them to Professional Behaviors for the 21st Century and the core values from Module 2) plus a **long-term professional vision** (career trajectory, practice area, linked to the APTA vision — it will change, write it anyway). Feedback from peers, CIs, faculty, and self-reflection = \"deposits into your professional growth bank.\" **Graduation is the launching point, not the endpoint.**"));
k.push(detail(["Contemporary concept (course-long thread)","One-line definition"],[
 ["Effective communication","Healthcare demands a higher level of communication skill than most professions — next module goes deep"],
 ["**Emotional intelligence**","Three components: self, others, motivation — a LEARNED behavior: manage your emotions, read others'"],
 ["**Resilience vs grit**","Resilience = recovering from difficulty · grit = the toughness to keep pushing through it — often swapped, not the same"],
 ["**Accountability**","Accept the current reality → determine the next actionable steps. No blame, no excuses, no denial"],
 ["Cultural intelligence","EI + cultural nuance — how culture shapes interpersonal engagement and responses to change"],
 ["Social responsibility","The profession's commitment to society beyond the facility's walls"],
 ["**Management of self**","Everyday actions, interactions, and behavior when no one is watching — tied to EI, ethics, core values; requires DAILY reflection"]],[3100,6260]));
k.push(tip("The reflection that matters: which oak stage are you in (be honest — it's the acorn), what strategies move you toward influencing, and how do the three lenses of professionalism + the core values align with your growth plan? Write it down — it feeds every self-assessment this program asks of you, starting at lab immersion next week: punctuality, preparedness, respectful interaction, clean communication, and digital professionalism are the emerging professional's roots."));
k.push(linkBox("\u{1F4FA} Required videos — all public YouTube",[
 ["Metacognition: Thinking About Thinking (NAU, 2:16)","https://www.youtube.com/watch?v=pmz7eqKzbuU",""],
 ["Why Incompetent People Think They're Amazing (TED-Ed, 5:07)","https://www.youtube.com/watch?v=pOLmD_WVY-E",""],
 ["Hacking Your Textbook (CU Students, 3:16)","https://www.youtube.com/watch?v=5NvGa2rNCwc",""],
 ["Techniques for Studying Alone (CU Students, 2:49)","https://youtu.be/2kyChAhmYV8",""],
 ["Studying in Groups (CU Students, 2:45)","https://youtu.be/YKp1BpM2OKY",""],
 ["Time Management for College Students (UBuffalo, 7:29 — do the math)","https://youtu.be/2g_o-hRBeMA",""]]));
k.push(body("Required reading: McGuire, Teach Yourself How to Learn — Ch 3 (Metacognition), Ch 5 (Metacognitive Learning Strategies at Work), Ch 9 (Time Management, Test Taking, and Stress Reduction)."));
k.push(...glossary("Module 5 — Quick-Reference Glossary",[
 ["Metacognition","Plan · monitor · evaluate your own learning"],
 ["Perceived vs actual","The Dunning-Kruger gap self-testing closes"],
 ["LASSI","10-scale study-strategies inventory (percentiles) + reflection assignment"],
 ["Time audit","Find where the hours actually go before rescheduling them"],
 ["Oak Tree stages","Emerging → reflecting → influencing professional"],
 ["Feedback","Deposits into the professional growth bank"],
 ["Resilience vs grit","Recover vs push through"],
 ["Management of self","Behavior when no one is watching + daily reflection"]]));

build(k,"/home/claude/out/Module5_LearningStrategies_StudyNotes.docx");
