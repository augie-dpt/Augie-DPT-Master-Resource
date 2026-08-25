const L = require('/home/claude/notes_lib.js');
const {C,h1,h2,body,bullet,tnote,tip,compare,detail,infoBox,banner,glossary,fig,pageBreak,spacer,cover,build,linkBox} = L;
const k=[];

k.push(...cover("Human Physiology (DPTH 6131)","Module 9: Bioenergetics and Nutrition",
 "Topics: 9.1 Macronutrients • 9.2 Glucose Metabolism • 9.3 Fat & Protein Metabolism • 9.4 Energy Availability • 9.5 Metabolic Diseases • Sync: three cases",
 ["Lectures by Dr. Evan Andreyo; watch in your own Canvas module — Guyton & Hall chapters 68–73 + 79 are the referenced readings",
  "The through-line: food → macronutrients → ATP → energy balance — and what breaks when balance tips either way (RED-S, obesity, diabetes, osteoporosis)",
  "The 38-ATP accounting of one glucose (2 glycolysis + 2 Krebs + 34 electron transport chain) is the number to know cold",
  "Sync 2's three cases (type 1 diabetes, RED-S runner, metabolic syndrome) are worked at the end"]));

/* ─────────────────────────── 9.1 MACRONUTRIENTS ─────────────────────────── */
k.push(banner("TOPIC 9.1","Macronutrients — Carbs, Proteins, Fats"));
k.push(spacer());

k.push(h1("1. Carbohydrates — the primary fuel"));
k.push(body("Carbs are saccharides: **poly** (10+ sugars — starch), **oligo**, **di** (sucrose, lactose), **mono** (glucose, fructose, galactose). Digestion funnels ~80% of it to **glucose**; the liver converts absorbed fructose and galactose to glucose too, so **>95% of circulating monosaccharide is glucose** — and glucose is the only one that crosses the blood-brain barrier to fuel the brain. Excess is stored as **glycogen** in liver and muscle (~300–400 g sits in muscle at any time)."));
k.push(bullet("Intake targets: **3–10 g/kg/day** for low-moderate activity, **8–12 g/kg/day** for high-intensity training — roughly **half or more of total calories**."));

k.push(h1("2. Proteins — the builders"));
k.push(bullet("Proteins are folded chains (polypeptides) of **amino acids**. Humans use ~20 AAs: **9 essential** (food only — leucine, lysine…), the rest non-essential or conditionally essential (make-able until starvation or metabolic error says otherwise)."));
k.push(bullet("Animal proteins (meat, dairy, fish) carry **all nine essentials**; plant sources each carry some — variety (soy is the closest to complete) covers the set."));
k.push(bullet("Jobs: tissue repair, immune function, inflammation control, muscle building, injury recovery — which is why **rehab patients benefit from raised protein intake**. Targets: **1.4–2 g/kg/day** baseline, up to 3 g/kg for hard-training athletes, **1.6–2.5 g/kg to protect muscle during an energy deficit**; ~10–35% of calories. Athletes, pregnancy, and older age all push the number up."));

k.push(h1("3. Fats — unfairly maligned"));
k.push(bullet("Structure: a **glycerol backbone + fatty-acid (carbon–hydrogen) tails**. Bond patterns make **saturated** vs **mono/polyunsaturated** (healthier), and double-bond position names the **omega-3/6/9** families. **EPA and DHA are essential** — marine/plant sourced, used for immune health, inflammation regulation, heart-disease protection."));
k.push(bullet("Digested fat arrives as **chylomicrons**, then splits into: **triglycerides** → energy; **phospholipids** → cell membranes; **cholesterol** (a steroid) → hormones (testosterone!). Storage = **adipocytes**, which also secrete **leptin** (appetite regulation) and insulate the organs."));
k.push(bullet("Cholesterol on a lipid panel: **LDL** adheres to vessel walls and builds plaque (the \"bad\"); **HDL** clears it back to the liver (the \"good\") — so lower LDL, higher HDL, and modest total triglycerides. Intake target: **0.5–1.5 g/kg/day, ~20–35% of calories**, weighted toward poly/monounsaturated."));

/* ─────────────────────────── 9.2 GLUCOSE METABOLISM ─────────────────────────── */
k.push(pageBreak());
k.push(banner("TOPIC 9.2","Glucose Metabolism — Making and Spending ATP"));
k.push(spacer());

k.push(h1("4. ATP, transport, and the insulin/glucagon switch"));
k.push(bullet("**ATP is the body's energy currency**: strip a phosphate (ATP → ADP) and the released bond energy powers cellular work."));
k.push(bullet("Glucose enters cells by **facilitated diffusion with sodium co-transport**, always chasing even concentrations. **Insulin multiplies that diffusion ~10×.**"));
k.push(bullet("The pancreas runs the thermostat: high blood glucose → **insulin** → glucose into cells and into liver/muscle storage as glycogen. Low blood glucose → **glucagon** → the liver breaks glycogen back down (**glycogenolysis**) and releases glucose. Storage direction = **glycogenesis** (glucose molecules chained into glycogen)."));

k.push(h1("5. The three-stage ATP factory"));
k.push(detail(["Stage","Where / oxygen?","What happens","ATP yield per glucose"],[
 ["Glycolysis","Cytoplasm; anaerobic","Invest 2 ATP to split 6-carbon glucose → **2 pyruvate** + 4 ATP. To keep it running, lactate dehydrogenase hands pyruvate the hydrogen off NADH (**fermentation**), regenerating NAD⁺ — lactate is the byproduct (the \"burn\" is likely more pH change than lactate itself, and lactate gets reused as fuel later)","**Net 2**"],
 ["Krebs (citric acid) cycle","Mitochondria","Pyruvate → **acetyl-CoA** (CO₂ off) → joins oxaloacetate → citrate; each turn strips hydrogens onto **NADH and FADH₂** and vents CO₂. Two pyruvates = two turns","**2** (+ the NADH/FADH₂ payload)"],
 ["Electron transport chain","Inner mitochondrial membrane; aerobic","Electrons off NADH/FADH₂ pump H⁺ into the intermembrane space; the H⁺ gradient flows back through **ATP synthase** (the molecular crank) phosphorylating ADP → ATP; oxygen accepts the electrons → H₂O","**Up to 34**"]],[16,17,47,20]));
k.push(tip("Total: 2 + 2 + 34 = 38 ATP per glucose. Anaerobic glycolysis alone nets 2 — which is why sustained work is an oxygen story."));

k.push(h1("6. The exercise energy systems"));
k.push(detail(["System","Duration","Sport picture"],[
 ["ATP–PCr (phosphocreatine)","First **8–10 s** — creatine kinase splits PCr in a fraction of a second, releasing energy AND a phosphate that rebuilds ATP","100 m dash, sprint to first base"],
 ["Anaerobic glycolysis","~**1.3–1.6 min**","200 m dash, 100 m swim"],
 ["Aerobic/oxidative (ETC)","**2+ min** to hours","Marathon, cross-country skiing"]],[30,40,30]));
k.push(bullet("The systems overlap — every activity blends them — and **training shifts the blend**: an elite runner cruises aerobically through work that would max out a sedentary person's systems."));

/* ─────────────────────────── 9.3 FAT & PROTEIN METABOLISM ─────────────────────────── */
k.push(banner("TOPIC 9.3","Fat & Protein Metabolism — the Backup Fuels"));
k.push(spacer());
k.push(bullet("**Fat:** bile (liver-made, gallbladder-stored) emulsifies dietary fat in the small intestine → chylomicrons → **free fatty acids**, stored or used. A triglyceride splits two ways into the ATP factory: the **glycerol backbone enters glycolysis directly**, and the **fatty-acid tails undergo β-oxidation into acetyl-CoA**, feeding the Krebs cycle."));
k.push(bullet("**Protein:** amino acids are for BUILDING; the body only oxidizes them for ~**10–15%** of energy, and reluctantly. **Transamination** converts AAs for fuel via two routes — **gluconeogenesis** (AA → glucose/pyruvate) and **ketogenesis** (AA → keto/fatty-acid derivatives, e.g., leucine and lysine). Byproducts are the cost: **ammonia → urea → urine**, plus ketones."));

/* ─────────────────────────── 9.4 ENERGY AVAILABILITY ─────────────────────────── */
k.push(pageBreak());
k.push(banner("TOPIC 9.4","Energy Availability — Balance, Deficit, Surplus"));
k.push(spacer());

k.push(h1("7. The energy budget"));
k.push(bullet("**Energy balance** = intake equals expenditure (at ANY body weight, balance holds you where you are). Unlike a car, the body adapts to both scarcity (shutting down non-essential systems, raiding stores) and surplus (storing for later)."));
k.push(bullet("A 70-kg man's ledger: resting metabolic rate ~**1,600 kcal**; + **thermogenic effect of food** ~200 kcal; + sitting upright ~2,000–2,200; ordinary daily function ~**3,000**; heavy labor/sport up to **6,000–7,000**. Overall split: ~**60% resting**, ~8% thermic effect of food, ~30% activity. Energy needs peak in childhood growth and taper across aging."));
k.push(bullet("Caloric density: **carbs 4, protein 4, fat 9 kcal/g**. Metabolic-rate movers: thyroxine (up to +50–100%), testosterone (+10–15%), growth hormone (+~20%), fever, sleep (−10–15%), malnutrition (down — less cellular activity)."));

k.push(h1("8. Too little energy"));
k.push(bullet("Deficit routes: **anorexia** (\"not eating\" — psychological, body-image, performance, or disease-driven appetite loss), **cachexia** (a metabolic disorder of RAISED expenditure — hyperthyroidism, cancer, AIDS), and the everyday athlete version: wrestlers, dancers, gymnasts, and distance runners **underestimating their caloric needs**."));
k.push(bullet("Starvation sequence: carbohydrate stores drain **within days** → fat carries the load → **protein last** (the body \"spares\" it for muscle and hormones as long as carbs and fat hold out). Deficits also drag vitamins (A, B, C, D → infections, metabolic/nervous dysfunction, scurvy, poor calcium absorption) and minerals (calcium, iron, potassium, zinc, iodine) down with them."));
k.push(infoBox("Female athlete triad → RED-S",[
 "The triad links three spokes: energy availability ↔ menstrual function ↔ bone mineral density — low energy availability suppresses estrogen → amenorrhea → bone loss/osteoporosis. Women in aesthetic/endurance sports are ~10× more affected than men",
 "**RED-S (Relative Energy Deficiency in Sport)** widens the lens: immune, GI, and cardiovascular function all sag too, and it includes male athletes",
 "Treatment: education, activity modification, nutritional restoration, mental-health support"],C.purple,C.lightPurple));

k.push(h1("9. Too much energy"));
k.push(bullet("Surplus (sedentary life, over-intake, hormonal issues) is stored as **adipose tissue** — subcutaneous, intra-abdominal, intrahepatic. Ideal body fat ~**11–14% (men)** / **16–23% (women)**. Measures: Bod Pod, hydrostatic weighing, skinfolds, bioimpedance; **BMI = kg/m²** is the accessible screen (~70% of US adults over 20 are overweight or obese)."));
k.push(bullet("Consequences: hypertension, high cholesterol, type 2 diabetes, sleep apnea, osteoarthritis, gallbladder disease — plus psychological/social harm and adult-obesity risk in childhood obesity. Treatments exist (appetite suppressants, GI surgery), but the **gold standard is caloric restriction + expenditure**."));

/* ─────────────────────────── 9.5 METABOLIC DISEASES ─────────────────────────── */
k.push(pageBreak());
k.push(banner("TOPIC 9.5","Metabolic Diseases — Diabetes & Osteoporosis"));
k.push(spacer());

k.push(h1("10. Insulin physiology in one paragraph"));
k.push(body("**Beta cells of the pancreas** secrete insulin in proportion to blood glucose (fasting normal ≈ **80–90 mg/dL**, where insulin idles). Insulin binds membrane receptors → GLUT transporters pull glucose into the cell → protein/fat/glycogen synthesis and glucose use all rise. Diabetes = broken glucose regulation, by two mechanisms: not enough insulin, or cells that stop listening to it."));
k.push(compare("TYPE 1 — INSULIN-DEPENDENT (5–10%)","TYPE 2 — INSULIN-RESISTANT (90–95%)",
 ["Beta-cell destruction (autoimmune/viral) → insulin deficiency",
  "Typical onset ~adolescence (14–15), occasionally to ~30; lifelong management",
  "Managed with monitoring (CGMs increasingly replacing finger sticks) + exogenous insulin (pen, syringe, or pump — know your patient's device)",
  "**Hypoglycemia** (50–70 mg/dL): shaking, sweating, anxiety, irritability, confusion, dizziness, hunger → **15-15 rule** (15 g carbs, recheck in 15 min); 20–50 mg/dL risks seizures/LOC",
  "**Hyperglycemia/DKA**: dry mouth, pale skin, **fruity breath**, headache, fatigue, nausea"],
 ["Tissues lose insulin **sensitivity** — gradual, adult onset (typically 50–60), usually beginning with obesity (lipid accumulation blunts insulin response); also steroids, pregnancy (gestational), genetics",
  "Travels with **metabolic syndrome**: insulin resistance + elevated fasting glucose + high cholesterol + hypertension + visceral abdominal fat",
  "Diagnosis: fasting glucose **>126 mg/dL** or **A1C ≥6.5**",
  "Long-run damage: heart disease, retinopathy, renal disease, neuropathy → skin breakdown → amputation risk",
  "Treatment: **weight management (gold standard)** via diet + exercise; bariatric surgery; metformin for insulin sensitivity"],
 C.blue,C.gold,C.lightBlue,C.lightGold));

k.push(h1("11. Osteoporosis"));
k.push(bullet("Low bone mass + degraded bone quality → fragile bone → fracture risk (femur and vertebral bodies lead). ~10 million in the US; mostly **postmenopausal women** (men usually 70+). **T-score** (vs peak same-sex bone mass): **−1 and up = normal; −1 to −2.5 = osteopenia; below −2.5 = osteoporosis.**"));
k.push(bullet("Risk factors: age 50+, sedentary lifestyle, smoking, alcohol, poor diet, family history, low body weight, long-term steroids — plus **eating disorders** (low protein AND low estrogen) and yo-yo dieting (muscle wasted, fat gained)."));
k.push(bullet("Treatment: **calcium ≥1,000 mg/day + vitamin D** (bank it before ~30 — absorption falls after), quit smoking/limit alcohol, **weight-bearing exercise** to stimulate bone deposition, and medications (estrogen replacement, anti-resorptives) once osteopenia/osteoporosis is established."));

/* ─────────────────────────── SYNC CASES ─────────────────────────── */
k.push(pageBreak());
k.push(banner("SYNC SESSION 2","The Three Cases, Worked"));
k.push(spacer());

k.push(h1("Case 1 — 33-year-old male, type 1 diabetes"));
k.push(bullet("**Insulin's role:** the key that lets glucose into cells and storage; secreted by pancreatic beta cells in proportion to blood glucose, boosting glucose diffusion ~10×."));
k.push(bullet("**T1 vs T2:** T1 = insulin **production** failure (autoimmune beta-cell loss, adolescent onset, insulin-dependent); T2 = insulin **sensitivity** failure (gradual, adult, obesity-linked, managed with lifestyle + metformin)."));
k.push(bullet("**Hypo vs hyper:** hypo (excess insulin, delayed/insufficient food) → shaky, sweaty, pale, confused, slurred speech — exactly the mid-session picture in this case. Hyper/DKA → dry mouth, fruity breath, fatigue, nausea."));
k.push(bullet("**Management + PT role:** monitoring (CGM/finger stick), insulin dosing, consistent carbs, exercise (raises glucose uptake). In clinic: know their pump, ask about pre-session food and glucose, keep fast carbs on hand, apply the 15-15 rule, and stop the session for symptoms."));

k.push(h1("Case 2 — 16-year-old cross-country runner with RED-S"));
k.push(bullet("**RED-S** = relative energy deficiency in sport — intake can't cover expenditure, degrading performance (impaired nerve function, reaction time, concentration, muscle performance and recovery) plus immune, GI, and cardiovascular function."));
k.push(bullet("**Causes of low energy availability** beyond sport: disordered eating/body image, appetite loss from illness (anorexia), raised expenditure states (cachexia — hyperthyroid, cancer), or plain underestimation of needs common in runners, dancers, gymnasts, wrestlers."));
k.push(bullet("**Menstrual function + bone:** deficit suppresses estrogen → amenorrhea → impaired calcium deposition → low bone mineral density; long term that's stress fractures now and early osteoporosis with fracture risk later."));
k.push(bullet("**The fix, specifically:** raise intake toward need (~carbs 8–12 g/kg for her training load; protein ~1.6–2.5 g/kg to protect muscle), fuel around workouts rather than skipping, planned rest/reduced volume while restoring, dietitian + mental-health referrals — and the PT tracks load, screens for stress-fracture pain, and helps schedule fueling with training."));

k.push(h1("Case 3 — 48-year-old male: BMI 32, 27% body fat, T2DM, HTN, HDL 23 / LDL 240"));
k.push(bullet("**Classification:** BMI 32 = **obese** (30+); 27% body fat is well above the ideal male 11–14%. With the diabetes + hypertension + dyslipidemia, this is textbook **metabolic syndrome**."));
k.push(bullet("**Fat deposition pipeline:** dietary fat → bile emulsification in the small intestine → chylomicrons → free fatty acids → re-esterified into triglycerides and stored in **adipocytes** (subcutaneous, intra-abdominal, intrahepatic)."));
k.push(bullet("**LDL vs HDL:** LDL deposits cholesterol on vessel walls (plaque); HDL hauls it back to the liver for processing. His HDL 23 (low) + LDL 240 (very high) is a high-cardiovascular-risk profile."));
k.push(bullet("**Long-term weight loss:** a sustained modest caloric deficit built on whole foods (cut simple sugars and saturated fat, raise fiber and protein for satiety); combine aerobic exercise with **resistance training** (muscle raises glucose utilization and metabolic rate); medications (e.g., metformin) and bariatric surgery as escalations. PT role: build the graded exercise program, protect his joints while loading, and track BP/glucose responses."));

k.push(...glossary("Module 9 — Quick-Reference Glossary",[
 ["ATP → ADP","Phosphate stripped, energy released — the cellular transaction"],
 ["Glycogenesis / glycogenolysis","Chaining glucose into glycogen for storage / breaking it back out"],
 ["Fermentation","NADH hands H to pyruvate → lactate, regenerating NAD⁺ so glycolysis keeps running"],
 ["ATP synthase","The inner-membrane crank that turns the H⁺ gradient into ATP (ETC)"],
 ["β-oxidation","Fatty-acid tails chopped into acetyl-CoA for the Krebs cycle"],
 ["Gluconeogenesis / ketogenesis","Amino acids converted toward glucose / toward keto-fatty acids (ammonia → urea as the toll)"],
 ["Thermogenic effect of food","~8% of daily expenditure — digestion itself costs energy"],
 ["Cachexia","Disease-driven RISE in energy expenditure causing deficit"],
 ["RED-S","Relative energy deficiency in sport — the female athlete triad, widened to all systems and both sexes"],
 ["15-15 rule","Hypoglycemia response: 15 g carbohydrate, recheck in 15 minutes"],
 ["Metabolic syndrome","Insulin resistance + fasting hyperglycemia + dyslipidemia + hypertension + visceral fat"],
 ["T-score","Bone density vs same-sex peak: −1 to −2.5 osteopenia, < −2.5 osteoporosis"]]));

build(k,"/home/claude/out/Module9_BioenergeticsNutrition_StudyNotes.docx");
