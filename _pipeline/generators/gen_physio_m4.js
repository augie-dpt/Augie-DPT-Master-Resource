const L = require('/home/claude/notes_lib.js');
const {C,h1,h2,body,bullet,tnote,tip,compare,detail,infoBox,banner,glossary,fig,pageBreak,spacer,cover,build,linkBox} = L;
const E="/home/claude/emb13/";
const k=[];

k.push(...cover("Human Physiology (DPTH 6131)","Module 4: The Respiratory System",
 "Topics: 4.1 Introduction to the Respiratory System (4 lectures) • 4.2 Common Conditions of the Respiratory System • 4.3 The Aging Respiratory System",
 ["Watch this module's lecture videos (Dr. K) in your own Canvas module — video links are cohort-specific",
  "Assessment: the Respiratory Case Study assignment; the sync session works five case vignettes (copies in this Drive)",
  "This module hands off directly to Cardiopulm — the volumes, the curve, and the obstructive/restrictive split all return there"]));

// ===== 4.1 =====
k.push(banner("TOPIC 4.1","Introduction to the Respiratory System"));
k.push(spacer());
k.push(h1("1. The Airway and the Alveolus"));
k.push(bullet("Three jobs: **gas exchange**, **ventilation**, and **blood-pH regulation via CO₂**. The path: mouth/nasal cavity (warming the air) → **trachea** (the upper/lower tract divider) → two mainstem bronchi → bronchioles → **millions of alveoli**."));
k.push(...fig(E+"i_p8.png",1500,844,"Gas exchange in the alveoli — one-cell-thick walls wrapped in capillaries (M4T1 intro deck)"));
k.push(bullet("Alveoli are built for diffusion: **walls literally one cell thick**, a huge surfactant-moistened surface area, and a capillary jacket. O₂ diffuses in, CO₂ diffuses out for the next exhale. The **diaphragm** (a supporting structure): contracts and descends to inhale; relaxes and rises to exhale — **exhalation is normally passive**; forced exhalation recruits extra muscle."));
k.push(h1("2. Mechanics of Breathing and the Volumes"));
k.push(bullet("Inhalation: diaphragm down + intercostals out → thoracic volume up → intrapulmonary pressure down → air in. Exhalation reverses it passively. **Accessory muscles (SCM, scalenes)** join only in labored breathing."));
k.push(tnote("Dr. K, from her telehealth cardio-respiratory practice: hypertrophied accessory muscles are one of the FIRST things she looks for — a visible record of chronic labored breathing when the diaphragm can't descend."));
k.push(...fig(E+"m_p5.png",1500,844,"Lung volumes and capacities on the spirometry trace (M4T1 mechanics deck)"));
k.push(detail(["Measure","What it is"],[
 ["**Tidal volume (TV)**","Air moved by one normal, everyday breath"],
 ["**Vital capacity (VC)**","Maximum exhale after a deep inhale — TV + inspiratory reserve + expiratory reserve"],
 ["**Residual volume (RV)**","Air left after maximal exhalation — you can NEVER blow it all out, and that's what keeps the lungs from collapsing"],
 ["FEV1 / FVC","Forced expiratory volume in 1 s / forced vital capacity — the SPEED measures; they run Topic 4.2's obstructive-restrictive split"]],[2400,6960]));
k.push(bullet("Measured by **spirometry** (TV, VC, FEV1) and **peak flow** (max exhalation speed). Abnormal volumes flag asthma, COPD, and restrictive disease — and give PTs the are-we-actually-improving numbers."));
k.push(h1("3. Gas Exchange, Transport, and Control"));
k.push(...fig(E+"g_p2.png",1500,844,"The alveolar-capillary interface and its three efficiency factors (M4T1 gas-exchange deck)"));
k.push(bullet("Exchange efficiency rides on **surface area, membrane thickness, and partial-pressure gradients** — bigger and thinner = better. **O₂ transport** = hemoglobin → oxyhemoglobin. Two classic failures: **anemia** (enough oxygen, not enough red cells to carry it — supplemental O₂ misses the problem) and **CO poisoning** (carbon monoxide outcompetes O₂ for hemoglobin)."));
k.push(bullet("**CO₂ rides three ways**: (1) the main route — CO₂ + H₂O → carbonic acid (carbonic anhydrase, abundant in RBCs) → dissociates to **bicarbonate + H⁺** (the blood-pH keystone); (2) a small fraction binds hemoglobin directly (carbaminohemoglobin); (3) ~5% dissolves free in plasma."));
k.push(...fig(E+"g_p4.png",1500,844,"The oxyhemoglobin dissociation curve — flat top, steep middle, and the right/left shifts (M4T1 gas-exchange deck)"));
k.push(compare("RIGHT shift — release O₂","LEFT shift — hold O₂",
 ["↑temperature · ↑CO₂ · **↓pH (acidosis)**","↓Hemoglobin affinity → oxygen unloaded to the tissues that need it"],
 ["↓temperature · ↓CO₂ · **↑pH (alkalosis)**","↑Affinity → oxygen binds and stays bound"],
 C.red,C.blue,C.lightRed,C.lightBlue));
k.push(bullet("Curve geography: **flat upper portion** (PO₂ > ~60 mmHg — hemoglobin nearly saturated; changes barely matter) vs the **steep middle (20–60 mmHg)** where small PO₂ shifts move saturation a lot. Dr. K: this is an important slide — sit with it."));
k.push(infoBox("★ Control of breathing — the exam favorite",[
 "Neural: the **medulla sets the basic rhythm; the pons modulates rate and depth** (brain injury there = altered breathing)",
 "Chemical: **HIGH CO₂ / low pH is THE driver of breathing rate** — not low O₂ (low O₂ stimulates, but far less). Don't fall for the common misconception",
 "Hyperventilation → CO₂ blown off → **respiratory alkalosis**; hypoventilation → CO₂ retained → **respiratory acidosis**"],C.gold,"FDF6E0"));
k.push(h1("4. The Respiratory System and Exercise"));
k.push(...fig(E+"x_p3.png",1500,844,"The ventilatory threshold — where ventilation outruns oxygen consumption (M4T1 exercise deck)"));
k.push(bullet("In exercise, **alveolar ventilation rises in step with metabolic demand** — until the **ventilatory threshold**, where ventilation rises disproportionately to VO₂ (anaerobic metabolism's extra CO₂). You feel it as breathlessness; PTs use it to dose programs and monitor athletes."));
k.push(bullet("**Connect the dots (her favorite move)**: past VT, lactic acid + H⁺ + CO₂ pile up → pH falls → the curve **right-shifts = the Bohr effect** → hemoglobin dumps O₂ to the working muscle — “Take it. I don't want it anymore.” That's why you can be gasping AND still pushing. Training at/just below VT improves delivery and utilization."));
k.push(bullet("Two ceilings: **pulmonary diffusion capacity** (a real limiter in elite endurance) and **respiratory muscle fatigue** (diaphragm + accessories tire; endurance training delays it; **respiratory muscle training** helps chronic respiratory patients)."));
k.push(compare("Hyperpnea — normal","Hyperventilation — treat it",
 ["↑Rate + depth **matched to demand** (exercise, stairs)","Physiologic. No intervention"],
 ["Breathing **beyond** CO₂-removal needs → low CO₂ → dizziness, tingling","Paper-bag rebreathing (re-inhale CO₂!), relaxation, treat the cause — usually anxiety, occasionally metabolic"],
 C.teal,C.red,C.lightTeal,C.lightRed));
k.push(...glossary("Topic 4.1 — Quick-Reference Glossary",[
 ["Alveolus","One-cell-thick, capillary-wrapped exchange sac (millions)"],
 ["TV / VC / RV","Normal breath / max exhale after max inhale / the un-exhalable reserve"],
 ["FEV1, FVC","The speed measures — Topic 4.2's diagnostic axis"],
 ["Bicarbonate pathway","CO₂ + H₂O → H₂CO₃ → HCO₃⁻ + H⁺ — CO₂'s main ride and pH's lever"],
 ["Right vs left shift","Acid/hot/CO₂-rich = release; alkaline/cold = hold"],
 ["Medulla / pons","Rhythm generator / rate-and-depth modulator"],
 ["CO₂ drive","High CO₂, not low O₂, sets breathing rate"],
 ["Ventilatory threshold + Bohr effect","Where breathing outruns VO₂ — and hemoglobin starts donating"],
 ["Hyperpnea vs hyperventilation","Demand-matched vs excessive breathing"]]));
k.push(pageBreak());

// ===== 4.2 =====
k.push(banner("TOPIC 4.2","Common Conditions of the Respiratory System",C.teal));
k.push(spacer());
k.push(...fig(E+"c_p3.png",1500,844,"Obstructive vs restrictive airway disease (M4T2 deck)"));
k.push(compare("OBSTRUCTIVE — can't get air OUT","RESTRICTIVE — can't get air IN",
 ["Narrowed/blocked airways","**↓FEV1 and ↓FEV1/FVC ratio** on PFTs","Lost ELASTICITY → lungs stay over-inflated"],
 ["Stiff lungs, ↓compliance — “blowing up a balloon underwater”","**↓FVC + ↓total lung capacity, normal-or-high FEV1/FVC**","Lost COMPLIANCE → lungs won't expand"],
 C.blue,C.red,C.lightBlue,C.lightRed));
k.push(h1("1. COPD"));
k.push(bullet("An umbrella over progressive airflow-limiting diseases: **emphysema** (alveolar wall destruction → big inefficient air spaces, lost surface area, lost elastic recoil → exhalation collapse → **air trapping**) and **chronic bronchitis** (bronchial inflammation + mucus overproduction → thickened, narrowed airways; defined by a **productive cough ≥3 months in 2 consecutive years**)."));
k.push(tnote("Dr. K's on-record caveat: your textbook lists bronchiolitis as COPD's third member, but the cardiopulmonary PT literature — and her later course — puts ASTHMA there instead. She's telling you now so the switch in Cardiopulm doesn't feel like a trick."));
k.push(...fig(E+"c_p6.png",1500,844,"The two classic COPD presentations (M4T2 deck)"));
k.push(compare("“Blue bloater” — chronic-bronchitis-dominant","“Pink puffer” — emphysema-dominant",
 ["**Cyanotic** (chronic hypoxemia — lips, fingertips)","Edema + weight gain from **cor pulmonale** (right-sided heart failure)","Productive morning cough, sedentary, frequent infections/admissions"],
 ["Near-normal color; severe **dyspnea** first and always","**Pursed-lip breathing** (self-made airway pressure prevents collapse) + puffed cheeks","Thin/cachectic (breathing burns the calories), **barrel chest**, accessory-muscle hypertrophy, minimal dry cough"],
 C.blue,C.red,C.lightBlue,C.lightRed));
k.push(bullet("(Dr. K's caveat on the labels: outdated and arguably offensive — used here only because the pattern recognition genuinely helps.) **PT toolkit for COPD**: airway clearance techniques, breathing exercises (diaphragmatic, pursed-lip), and **pulmonary rehab** — exercise + education + behavioral therapy, with big real-world quality-of-life gains."));
k.push(h1("2. Asthma"));
k.push(bullet("Chronic airway inflammation with **REVERSIBLE obstruction** — attacks (triggered by exercise, stress, cold air, allergens) inflame and narrow the airways while mucous glands enlarge and hypersecrete; bronchodilators/corticosteroids reverse it. Unmanaged, it steals daily function — and severe cases kill. PT: learn the patient's specific triggers, modify exercise, teach breathing techniques, and **teach correct inhaler use — TV demonstrates it wrong and most patients copy TV**."));
k.push(h1("3. Restrictive Diseases"));
k.push(...fig(E+"c_p12.png",1500,844,"IPF clinical presentation, including finger clubbing (M4T2 deck)"));
k.push(detail(["Disease","Pathophys","Presentation","PT role"],[
 ["**IPF** (idiopathic pulmonary fibrosis)","Progressive interstitial **scarring** → membrane no longer one cell thick → diffusion falls","Dyspnea on exertion → at rest; **DRY persistent cough** (vs bronchitis' wet one); fatigue, weight loss; **finger clubbing** late","Breathing techniques, pulmonary rehab, **energy conservation**, oxygen (nearly universal eventually), **psychosocial support — prognosis ~3–5 years**"],
 ["**Pneumonia**","Acute alveolar infection (bacteria/virus/fungus) → alveoli fill with pus + fluid → exchange compromised","Productive cough, fever, chills, dyspnea; exam: **rales/crackles + dull percussion**","Airway clearance, breathing exercises, **early mobility** (prevents atelectasis), effective-cough education, graded return to activity"]],[1400,2500,2700,2760]));
k.push(...glossary("Topic 4.2 — Quick-Reference Glossary",[
 ["FEV1/FVC rule","Low ratio = obstructive; preserved ratio with low TLC = restrictive"],
 ["Air trapping","Emphysema's exhalation collapse — the barrel chest's origin"],
 ["3-month/2-year rule","Chronic bronchitis' defining cough"],
 ["Cor pulmonale","Right-heart failure secondary to lung disease — the bloat"],
 ["Pursed-lip breathing","Self-generated back-pressure that splints airways open"],
 ["Reversible obstruction","Asthma's defining feature"],
 ["Finger clubbing","Late IPF nail-bed widening"],
 ["Rales/crackles","Pneumonia's auscultation signature"]]));
k.push(pageBreak());

// ===== 4.3 =====
k.push(banner("TOPIC 4.3","The Aging Respiratory System",C.teal));
k.push(spacer());
k.push(...fig(E+"a_p3.png",1500,844,"Structural changes with age — including senile emphysema (M4T3 deck)"));
k.push(detail(["Change","Consequence"],[
 ["Parenchyma loses elastic recoil + **alveolar spaces enlarge (“senile emphysema”)**","Natural aging — distinct from smoking-driven emphysema"],
 ["Chest wall stiffens + respiratory muscles weaken","Reduced lung volumes"],
 ["↓Vital capacity, ↑residual volume","Less usable breath"],
 ["↓Alveolar surface area + **thickened alveolar-capillary membrane**","↓Diffusion capacity → less efficient exchange → lower arterial O₂, hypoxemia risk"],
 ["↓Ciliary beat frequency + thicker mucus + weaker macrophages/neutrophils","Mucus buildup + **pneumonia and bronchitis susceptibility**"]],[4200,5160]));
k.push(bullet("Net effect: higher incidence of COPD, pneumonia, and pulmonary fibrosis with age. **PT levers**: pulmonary rehab (breathing exercises + respiratory muscle training), ACSM-guided aerobic + strength work, **vaccination advocacy**, early intervention, and interprofessional coordination — even in older adults who never smoked, senile emphysema makes this worth screening."));
k.push(linkBox("\u{1F4DA} Required reading — Topic 4.3",[
 ["Aging and the respiratory system (required article, DovePress)","https://www.dovepress.com/article/download/14905",""]]));
k.push(...glossary("Topic 4.3 — Quick-Reference Glossary",[
 ["Senile emphysema","Age-driven alveolar enlargement — no cigarettes required"],
 ["Diffusion-capacity decline","Smaller surface + thicker membrane"],
 ["Mucociliary slowdown","Slower cilia + thicker mucus = infection risk"],
 ["Aging PT levers","Pulmonary rehab, ACSM dosing, vaccines, early intervention"]]));
k.push(pageBreak());

// ===== Sync =====
k.push(banner("SYNC SESSION","Respiratory Case Vignettes",C.navy));
k.push(spacer());
k.push(body("The sync session works five case vignettes (full handout in this course's folders in this Drive). They test exactly the connections this module builds:"));
k.push(detail(["Vignette","What it tests"],[
 ["1. 30-y/o at 12,000 ft: SpO₂ 89%, pH 7.48, PaO₂ 60, PaCO₂ 30","Altitude hypoxemia → curve shifts, 2,3-BPG adaptation, tissue unloading — and why the pH says respiratory ALKALOSIS (blowing off CO₂)"],
 ["2. 55-y/o with ALS, increasing dyspnea","Respiratory muscle weakness → a RESTRICTIVE pattern without lung disease"],
 ["3–5. Further transport/condition applications","Bohr effect, obstructive vs restrictive reasoning, acid-base logic"]],[3800,5560]));
k.push(infoBox("✅ Module 4 assessments",[
 "**Respiratory Case Study** assignment",
 "Harmonize “Muddy Points” — optional",
 "Check your own Canvas for due dates"],C.teal,C.lightTeal));
k.push(tip("The three anchor drawings for this module: the spirometry volumes trace, the oxyhemoglobin curve with both shifts, and the obstructive-vs-restrictive PFT split. Every vignette resolves through one of them."));

build(k,"/home/claude/out/Module4_Respiratory_StudyNotes.docx");
