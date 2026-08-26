const L = require('/home/claude/notes_lib.js');
const {C,h1,h2,body,bullet,tnote,tip,compare,detail,infoBox,banner,glossary,fig,pageBreak,spacer,cover,build,linkBox} = L;
const k=[];

k.push(...cover("Professional Competencies II (DPTH 6821)","Module 3: Foundational Skill Competency — Bed Mobility + Transfers",
 "Lectures: 3.1 Patient Handling and Positioning • 3.2 Patient Transfers: Principles, Techniques, and Safety",
 ["Two lecture videos — watch them in your own Canvas module",
  "★ marks exam-relevant / clinically critical content · ⚠ marks safety contraindications · 🎙 callouts are instructor emphasis",
  "The documentation vocabulary here (levels of assistance, weight-bearing status) shows up in every clinical note you'll ever write"]));

/* ─────────────────────────── 3.1 ─────────────────────────── */
k.push(banner("LECTURE 3.1","Patient Handling and Positioning"));
k.push(spacer());
k.push(h1("1. The Five Key Principles of Patient Positioning"));
k.push(tnote("Safety is the first and foremost consideration — for both the patient and the clinician."));
k.push(detail(["Principle","What it means"],[
 ["**1. Safety**","Check the environment; set the patient up for success. The SAFEST position is not always the most comfortable — use reasoning and environmental awareness to balance both"],
 ["**2. Comfort**","Consider comfort at all times: pain, surgical positioning preferences, bodily functions that are easier in certain positions"],
 ["**3. Access to body regions**","The position must allow access to what you're treating: lateral knee → side-lying blocks access; lumbar spine → prone beats supine"],
 ["**4. Preventing pressure injuries**","Ulcerations from sustained pressure on tissue — detrimental, and actively preventable"],
 ["**5. Facilitating body functions**","Time in a position changes physiology: circulation, respiratory mechanics, organ function"]],[2600,6760]));
k.push(h1("2. Basic Positioning Principles"));
k.push(detail(["Principle","Details"],[
 ["**Modesty**","Introduce yourself appropriately; drape the patient; use towels, gowns, and clothing to uphold modesty throughout treatment"],
 ["**Safety & base of support**","Everything supported and comfortable. An awkward foot position before moving a patient shrinks your base of support and compromises safety — think before initiating any movement"],
 ["**Alignment**","Is the patient's alignment optimal for what you're about to do or ask them to do?"],
 ["**Precautions**","Pressure ulcerations especially threaten patients with paralysis or weakness — **move patients at least every 2 hours** to prevent pressure injuries and contractures"]],[2600,6760]));
k.push(h1("3. Prolonged Positioning and Pressure Injuries"));
k.push(bullet("Prolonged positioning shortens and stiffens tissue → decreased functional ROM, plus infection risk from pressure wounds. **Skin checks before AND after every treatment**: document red or **blanched** skin (blanching = inadequate circulatory flow) and prolonged tingling — and alert other providers to any of it."));
k.push(infoBox("⚠️ Pressure injuries — key facts",[
 "Can develop in as little as ONE HOUR or less, especially in paralyzed patients.",
 "Risk factors: bony prominences (sacrum, heels, elbows, occiput) · poor circulation or nutrition · immobility.",
 "★ Many patients carry multiple risk factors at once — proactive repositioning and skin checks are non-negotiable."],C.red,C.lightRed));
k.push(...glossary("Lecture 3.1 — Quick-Reference Glossary",[
 ["Pressure injury","Ulceration from sustained pressure; can develop in <1 hour in paralyzed patients"],
 ["Bony prominences","Sacrum, heels, elbows, occiput — highest pressure-injury risk"],
 ["Blanching","Skin pales under pressure — inadequate circulatory flow"],
 ["Draping","Towels/gowns/sheets maintaining modesty while allowing treatment access"],
 ["Contracture","Soft-tissue shortening/stiffening from prolonged immobility in one position"],
 ["Base of support","Area beneath a person; wider = more stable for transfers and repositioning"]]));
k.push(pageBreak());

/* ─────────────────────────── 3.2 ─────────────────────────── */
k.push(banner("LECTURE 3.2","Patient Transfers — Principles, Techniques, and Safety",C.teal));
k.push(spacer());
k.push(h1("1. Body Mechanics for Transfers"));
k.push(tnote("Good body mechanics protect the clinician and directly ensure patient safety — if the clinician is not safe, the patient is automatically not safe."));
k.push(bullet("**Three core principles:** (1) **Breathing** — never hold your breath during a lift; breath-holding = **Valsalva maneuver**, risking fainting or self-injury; (2) **Stay close to the patient** — enables effective lifting AND naturally produces (3) a **wide base of support** (legs spread, knees bent, big muscle groups) without separate thought."));
k.push(detail(["Why technique matters","Explanation"],[
 ["**Efficiency**","Transfers every 15–30 minutes across a shift: poor mechanics = fatigue and injury; efficient mechanics sustain a full day of care"],
 ["**Safety**","Unsafe clinician = unsafe patient. Optimal biomechanics + a prepared environment, both"],
 ["**Control**","Close + stable projects control — the patient feels it, and it drives their confidence and cooperation"]],[2400,6960]));
k.push(h1("2. Levels of Assistance (documentation vocabulary)"));
k.push(tnote("Standardized, predetermined definitions used in daily clinical documentation — you will document them for every patient, every session."));
k.push(detail(["Level","Description"],[
 ["**Dependent**","No active contribution from the patient; clinician(s) do all the work"],
 ["**Maximal assist (Max A)**","Patient provides minimal effort; clinician does the majority"],
 ["**Moderate assist (Mod A)**","Shared effort between patient and clinician"],
 ["**Minimal assist (Min A)**","Patient does most of the work; minor support or guidance"],
 ["**Standby assist (SBA)**","Clinician close and ready, no physical help — supervision for safety"],
 ["**Modified independent (Mod I)**","Independent WITH a device, extra time, or compensatory strategy"],
 ["**Independent (I)**","Safe completion with no assistance or devices"]],[3000,6360]));
k.push(bullet("Levels of assistance aren't only physical — they can reflect **cognitive or task-based** help too (verbal cueing, step-by-step instructions)."));
k.push(h1("3. Weight-Bearing Status"));
k.push(bullet("Standardized terminology for how much weight goes through a limb — applies to **lower extremities** (standing transfers, gait) AND **upper extremities** (push-up transfers, wheelchair mobility). **Prescribed by the surgeon or physician — non-negotiable precautions.**"));
k.push(detail(["Status","Description"],[
 ["**NWB** — non-weight-bearing","No weight through the limb"],
 ["**TTWB** — toe-touch","Foot touches the floor for balance ONLY; no actual loading"],
 ["**PWB** — partial","A specified percentage of body weight allowed (e.g., 50%)"],
 ["**WBAT** — as tolerated","As much as the patient tolerates; guided by pain and medical status"],
 ["**FWB** — full","Unrestricted weight through the limb"]],[3000,6360]));
k.push(pageBreak());
k.push(h1("4. The Four Procedural Components of a Transfer"));
k.push(tip("Plan → Communicate → Encourage Independence → Provide Physical Support. Know these in order."));
k.push(detail(["Component","The working version"],[
 ["**1. Plan ahead**","The most important first step — before touching the patient, scan the environment: what equipment is needed? What is the patient dealing with functionally (weakness, pain, cognition)? How do I position the patient and myself? Comfort and medical status? Resolve ALL of it before starting"],
 ["**2. Communicate**","Say what you're planning; break the transfer into components — no information overload. **Have the patient repeat the instructions back** (\"What are you going to do first?\" — \"Move forward\"). ★ TBI, cognitive impairment, dementia: match instructions to cognitive level; break steps down further, deliver one at a time"],
 ["**3. Encourage independence**","Don't do all the work for a Min-A patient. Challenge appropriately while keeping them safe — **under-assisting and over-assisting are both clinical errors**"],
 ["**4. Provide physical support**","Stay close · wide base · use bed/mat/table HEIGHT to your advantage · gait belt where appropriate · ask nursing/PTA/OT for help when the level of assist requires it"]],[2700,6660]));
k.push(infoBox("⚠️ Max assist or dependent = never alone",[
 "If the patient is max assist or dependent, ALWAYS use additional personnel.",
 "Attempting these transfers alone risks injury to both clinician and patient — you are not expected to perform them solo."],C.red,C.lightRed));
k.push(h1("5. Step-by-Step Transfer Process"));
k.push(bullet("**1. Instruct** the patient (and family if present) — steps in components, no overload. **2. Use momentum** — body strength plus available momentum, not static muscling. **3. Establish the leader** — typically the clinician; the patient may count it off (1-2-3); set a clear rhythm before moving. **4. Use the environment** — lower the bed, raise the mat, set surface heights BEFORE starting. **5. Ask for help** when the level of assistance requires it — safety sometimes means two clinicians."));
k.push(h1("6. Family Education"));
k.push(bullet("Teaching family members transfers for home uses the same principles — adapted: **break steps down even further** (they're not trained professionals), avoid overload by putting the **critical safety elements first**, make their role unmistakable, and **practice under supervision before the patient goes home**."));
k.push(h1("7. Pre-Transfer Safety Scan"));
k.push(detail(["Safety element","What to check"],[
 ["**Equipment security**","Wheelchair locked? Bed locked? Every chair and surface immobile?"],
 ["**Patient knowledge**","Baseline strength, cognition, current vitals — what to expect from this patient TODAY"],
 ["**Chart review**","Thorough review before any transfer: precautions, restrictions, recent changes"],
 ["**Adequate assistance**","Is one clinician enough for this level of assist? Call for help if not"],
 ["**Gait belt**","Apply where appropriate — the most commonly forgotten step"]],[2600,6760]));
k.push(infoBox("⚠️ Do not skip the gait belt",[
 "Consistently the most commonly forgotten safety step — and the thing providing critical control during an unexpected loss of balance."],C.gold,C.lightGold));
k.push(...glossary("Lecture 3.2 — Quick-Reference Glossary",[
 ["Levels of assistance","Dependent → Max A → Mod A → Min A → SBA → Mod I → Independent"],
 ["Weight-bearing status","NWB · TTWB · PWB · WBAT · FWB — physician-prescribed, non-negotiable"],
 ["Gait belt","Waist belt giving the clinician a secure grip point for transfers and gait"],
 ["Valsalva maneuver","Forced exhalation against a closed airway from breath-holding — fainting/injury risk"],
 ["Base of support","Wide BOS = stability; produced naturally by staying close"],
 ["Momentum","Controlled body motion assisting transfer initiation — beats static lifting"],
 ["Information overload","Too many instructions at once — break steps down, especially TBI/dementia"],
 ["Pre-transfer scan","Equipment locked · chart reviewed · assist level confirmed · gait belt on"]]));

build(k,"/home/claude/out/Module3_BedMobilityAndTransfers_StudyNotes.docx");