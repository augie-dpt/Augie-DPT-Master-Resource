const L = require('/home/claude/notes_lib.js');
const {C,h1,h2,body,bullet,tnote,tip,compare,detail,infoBox,banner,glossary,fig,pageBreak,spacer,cover,build,linkBox} = L;
const E = "/home/claude/emb36/";
const k=[];

k.push(...cover("Human Physiology (DPTH 6131)","Module 13: The Renal System",
 "Topics: 13.1 The Kidney & Nephron • 13.2 Glomerular Filtration • 13.3 Acid-Base Regulation • 13.4 Acid-Base Disturbances • 13.5 Renal Disease • Sync: Kris & Antonio",
 ["Lectures by Dr. Evan Andreyo; watch in your own Canvas module (anatomy of the renal system was covered in Anatomy — this is pure physiology)",
  "The instructor flags it directly: the four acid-base disturbances and their compensations **will be on your board exam**",
  "Numbers to own: plasma filtered ~60×/day, >99% reabsorbed, ~1% excreted; blood pH lives at 7.35–7.45",
  "The two sync cases (Kris — acute glomerulonephritis; Antonio — vomiting → metabolic alkalosis) are worked at the end"]));

/* ─────────────────────────── 13.1 KIDNEY & NEPHRON ─────────────────────────── */
k.push(banner("TOPIC 13.1","The Kidney and the Nephron"));
k.push(spacer());
k.push(h1("1. What the renal system actually does"));
k.push(bullet("Excretes **metabolic waste** (urea, creatinine); regulates **water + electrolyte balance** (and through it, **blood pressure**); maintains **acid-base balance**; and drives red-cell production via **erythropoietin** (Module 12)."));
k.push(h1("2. The nephron — the functional unit"));
k.push(body("Millions per kidney; regenerate in health, decline with age and disease. Blood arrives by the renal artery → **afferent arteriole** → glomerular capillaries inside **Bowman's capsule** → **efferent arteriole** out. Fenestrations admit only small molecules — about **20% of renal plasma flow** filters in, carrying sodium, glucose, amino acids; red cells, white cells, and large proteins never enter (red cells are the spleen's job)."));
k.push(...fig(E+"fig_nephron.png",1965,1079,"The nephron: cortical and juxtamedullary nephrons with the full tubule route from Bowman's capsule to collecting duct (13.1 Kidney & Nephron deck)"));
k.push(detail(["Step","What happens"],[
 ["Filtration","Plasma + small solutes pushed from glomerulus into Bowman's capsule"],
 ["Reabsorption","What we want returns to blood: glucose, amino acids, sodium/chloride/potassium, bicarbonate — and **water follows the electrolytes by osmosis** (pull sodium, water comes; this is THE blood-pressure lever)"],
 ["Secretion","Blood → tubule dumping of what we want gone — notably **hydrogen ions** and (as needed) bicarbonate, the acid-base dials"],
 ["Excretion","Whatever's left becomes urine: urea, creatinine, surplus electrolytes and water, H⁺/HCO₃⁻ per acid-base needs"]],[18,82]));
k.push(detail(["Nephron segment","What it reabsorbs"],[
 ["Proximal tubule","The bulk buy: ~**65%** of sodium + water, plus nearly all glucose and amino acids"],
 ["Loop of Henle","More sodium (especially the ascending limb) makes the medulla salty → osmosis pulls more water; chloride and potassium too"],
 ["Distal tubule + juxtaglomerular apparatus","The **macula densa** cells sense sodium (and pressure) — the fine-tuning checkpoint that cues extra absorption and the RAAS story below"],
 ["Collecting tubule/duct","The last call, mostly for water — dialed by **ADH** (pituitary), **aldosterone** (adrenal; also excretes potassium in hyperkalemia), **angiotensin II**, and **PTH** (calcium retention)"]],[30,70]));
k.push(tnote("Why filter 60 plasma-volumes a day and take 99% of it back? Because homeostasis turns on a dime — constant filtration means the subtlest shift in pressure, electrolytes, waste, or pH can be corrected within minutes. Only ~1% of filtrate ever becomes urine."));

/* ─────────────────────────── 13.2 GLOMERULAR FILTRATION ─────────────────────────── */
k.push(banner("TOPIC 13.2","Glomerular Filtration Rate & RAAS"));
k.push(spacer());
k.push(h1("3. GFR — the coffee-brewing analogy"));
k.push(body("GFR = how much filters from glomerulus into Bowman's capsule per unit time, autoregulated to a sweet spot. The control knobs are the **afferent (inlet) and efferent (outlet) arterioles**: kink the inlet → less flow, less glomerular pressure, **GFR falls**; kink the outlet → pressure builds behind the kink, **GFR rises** (biphasic — sustained outlet constriction eventually backs everything up and GFR drops again)."));
k.push(compare("DECREASES GFR","INCREASES GFR",
 ["**Sympathetic activation** (epinephrine/norepinephrine) — blood shunts from kidneys to brain and muscle",
  "**Aging** — renal blood flow declines"],
 ["**Prostaglandins** (inflammatory vasodilation opens both arterioles)",
  "**Angiotensin II** ★ (see RAAS)",
  "More protein, glucose, lipids, or salt in the blood — the body filters harder to clear what it doesn't want"],
 C.red,C.green,C.lightRed,C.lightGreen));
k.push(infoBox("RAAS — renin-angiotensin-aldosterone system",[
 "The juxtaglomerular apparatus (JG cells + macula densa) senses **low pressure / low sodium** → releases **renin**",
 "Renin converts liver-made **angiotensinogen → angiotensin I → angiotensin II** (the mover and shaker)",
 "Angiotensin II vasoconstricts everywhere but ESPECIALLY the **efferent arteriole** — kinking the outlet to PREVENT GFR from falling — and boosts sodium + water reabsorption",
 "It also triggers **aldosterone** release, which retains still more sodium and water → blood pressure recovers"],C.blue,C.lightBlue));
k.push(...fig(E+"fig_raas.png",1958,1041,"RAAS: JG cells sense pressure, macula densa senses sodium → renin → angiotensinogen → angiotensin II (13.2 Glomerular Filtration deck)"));

/* ─────────────────────────── 13.3 + 13.4 ACID-BASE ─────────────────────────── */
k.push(pageBreak());
k.push(banner("TOPIC 13.3","Acid-Base Regulation"));
k.push(spacer());
k.push(h1("4. The pH tightrope and the master equation"));
k.push(bullet("Blood pH lives between **7.35 and 7.45**. Below = **acidemia**, above = **alkalemia**. The lever is **hydrogen**: more H⁺ = more acidic (lower pH). **Bicarbonate (HCO₃⁻)** is the base that binds and eliminates H⁺; **CO₂** shifts the balance toward making more H⁺."));
k.push(bullet("Master equation: **CO₂ + H₂O ⇌ H₂CO₃ (carbonic acid) ⇌ HCO₃⁻ + H⁺** — same atoms in three forms, sliding left or right to soak up or release acid."));
k.push(detail(["Corrective system","Speed","Muscle"],[
 ["Bicarbonate buffer","**Seconds** — HCO₃⁻ binds/releases H⁺ chemically","Fast but small-margin"],
 ["Respiratory","**Minutes** — breathe more (blow off CO₂ → less H⁺) or less (retain CO₂ → more H⁺)","Bigger effect"],
 ["Renal","**Hours to days** — retain/excrete bicarbonate and hydrogen directly","The biggest effect, the slowest arrival"]],[30,42,28]));

k.push(banner("TOPIC 13.4","The Four Acid-Base Disturbances (board-exam material)"));
k.push(spacer());
k.push(body("Naming = cause + result: **metabolic** (renal/chemical) or **respiratory** (ventilation) + **acidosis** or **alkalosis**. The compensation ALWAYS comes from the other system — a metabolic problem gets a respiratory fix and vice versa. Don't confuse the cause with the compensating response."));
k.push(detail(["Disturbance","Causes","pH / HCO₃⁻ / CO₂","Compensation"],[
 ["Metabolic acidosis","Too much H⁺ or lost bicarbonate: **lactic acidosis** (anaerobic overdrive), **diabetic ketoacidosis** (no insulin → fatty acids → ketones), renal disease (can't excrete H⁺ / keep HCO₃⁻), **Addison's** (no aldosterone → H⁺ retained), toxins","pH ↓ • HCO₃⁻ ↓ • CO₂ ↓","**Hyperventilation** — blow off CO₂ (the heavy-breathing patient)"],
 ["Metabolic alkalosis","Lost H⁺ / gained HCO₃⁻: **excessive vomiting** (HCl lost), antacid overuse, **hyperaldosteronism** (H⁺ excreted, HCO₃⁻ kept), diuretics (fluid loss concentrates HCO₃⁻)","pH ↑ • HCO₃⁻ ↑ • CO₂ ↑","**Hypoventilation** — retain CO₂"],
 ["Respiratory acidosis","**Hypoventilation** → CO₂ retention: airway obstruction, obesity restricting the diaphragm, **COPD/emphysema**, stroke impairing breathing drive","pH ↓ • HCO₃⁻ ↑ (compensating) • CO₂ ↑","Kidneys **reabsorb more bicarbonate** (delayed — shows up in later labs)"],
 ["Respiratory alkalosis","**Hyperventilation** / poor O₂ exchange → CO₂ blown off: pulmonary embolism, hypoxemia (altitude sickness), **anxiety/panic attacks**","pH ↑ • HCO₃⁻ ↓ (compensating) • CO₂ ↓","Kidneys **excrete more bicarbonate** (delayed)"]],[16,40,20,24]));

/* ─────────────────────────── 13.5 RENAL DISEASE ─────────────────────────── */
k.push(pageBreak());
k.push(banner("TOPIC 13.5","Renal Disease & Aging"));
k.push(spacer());
k.push(h1("5. Acute vs chronic"));
k.push(compare("ACUTE KIDNEY INJURY (often recoverable)","CHRONIC KIDNEY DISEASE (usually not)",
 ["**Trauma** — direct blow to the back (sport, MVA)",
  "**Ischemia** — shock or severe injury starving the kidneys of blood",
  "**Acute glomerulonephritis** — nephron inflammation, typically post-infection or from an abnormal immune response damaging the glomeruli"],
 ["**Diabetes + hypertension cause ~70% of end-stage renal disease** — chronic hyperglycemia and high pressure both batter nephrons and their vessels",
  "Chronic/unresolved glomerulonephritis",
  "**Polycystic kidney disease** — genetic; fluid-filled cysts replace functional tissue",
  "\"End-stage renal disease\" = the terminal stretch of CKD"],
 C.gold,C.red,C.lightGold,C.lightRed));
k.push(h1("6. Consequences, the vicious cycle, and detection"));
k.push(bullet("Failing filtration means **retention**: water + electrolytes (peripheral edema, hypertension), **urea + creatinine** (the lab markers), plus **proteinuria** (a damaged filter lets big proteins through), **metabolic acidosis** (pH below ~6.8 → coma/death), and **anemia** (no EPO)."));
k.push(bullet("**The vicious cycle:** fewer nephrons → survivors hypertrophy and filter at higher pressure → glomerular sclerosis (scarring) → more nephron death. Meanwhile aging alone costs ~**10% of functional nephrons per decade after 40**."));
k.push(bullet("**Detection: eGFR**, estimated mostly from serum **creatinine** (plus age and other factors), scaled ~0–120 from normal through CKD stages to failure. Equity note the lecture makes a point of: the old race-adjusted eGFR equation assumed higher creatinine in Black patients, systematically under-flagging their kidney disease and delaying care — an inequity baked into an equation."));
k.push(infoBox("Dialysis and the PT",[
 "When kidneys fail: transplant, or **dialysis** — an artificial kidney filtering urea, creatinine, H⁺, and surplus electrolytes",
 "Dialysis is exhausting — typically several clinic sessions a week, feeling poor before (unfiltered) and wiped out after",
 "**Schedule PT around dialysis days** — catch patients at their best, not right after a session"],C.teal,C.lightTeal));

/* ─────────────────────────── SYNC CASES ─────────────────────────── */
k.push(banner("SYNC SESSION","Kris and Antonio, Worked"));
k.push(spacer());
k.push(h1("Case 1 — Kris, 73: acute glomerulonephritis after strep"));
k.push(bullet("Presentation: foot swelling, rising BP, changed urine color, 2 weeks after a streptococcal infection. Labs: **sodium 150 (high), creatinine 2.5 (high), BUN 30 (high), proteinuria**."));
k.push(bullet("**Normal reabsorption:** glucose + amino acids (nearly 100%, proximal tubule), sodium/chloride/potassium and bicarbonate by active transport, water following by osmosis; urine normally carries urea, creatinine, surplus electrolytes/water — and essentially **no protein**."));
k.push(bullet("**GFR variables:** afferent/efferent arteriole tone, sympathetic activity (↓), prostaglandins and angiotensin II (↑), blood solute load, and RAAS."));
k.push(bullet("**Why her labs look like this:** post-infectious inflammation damages the glomeruli → filtration falls (creatinine and urea back up in blood), the damaged filter leaks **protein into urine**, and impaired sodium/water excretion drives the **edema, hypernatremia, and hypertension**."));
k.push(h1("Case 2 — Antonio, 64: persistent vomiting in the ICU"));
k.push(bullet("Labs: **pH 7.50 (alkalemic), HCO₃⁻ 34 (high), PaCO₂ 47 (high), creatinine normal**."));
k.push(bullet("**Diagnosis: metabolic alkalosis** — vomiting dumps hydrochloric acid (H⁺), tipping the master equation basic; his diuretic (for hypertension) concentrates bicarbonate further. Normal creatinine rules out a renal cause."));
k.push(bullet("**The compensation in his labs:** the HIGH PaCO₂ is his respiratory system **hypoventilating on purpose** to retain CO₂ → generate H⁺ → pull pH back down. Cause = metabolic, compensation = respiratory — exactly the cross-system rule."));
k.push(detail(["Disturbance","HCO₃⁻","pH","CO₂","Compensation"],[
 ["Metabolic acidosis","↓","↓","↓","Hyperventilation"],
 ["Metabolic alkalosis","↑","↑","↑","Hypoventilation"],
 ["Respiratory acidosis","↑","↓","↑","↑ HCO₃⁻ reabsorption (delayed)"],
 ["Respiratory alkalosis","↓","↑","↓","↓ HCO₃⁻ reabsorption (delayed)"]],[28,14,14,14,30]));

k.push(...glossary("Module 13 — Quick-Reference Glossary",[
 ["Nephron","The kidney's functional unit: filter → reabsorb → secrete → excrete"],
 ["Bowman's capsule","Where the glomerulus meets the tubule — filtration's front door"],
 ["Macula densa / JG apparatus","Sodium-and-pressure sensors that fire RAAS"],
 ["Renin → angiotensin II → aldosterone","The low-pressure rescue chain: efferent constriction + sodium/water retention"],
 ["GFR / eGFR","Filtration rate; estimated clinically from serum creatinine"],
 ["Proteinuria","Protein in urine = damaged glomerular filter"],
 ["Bicarbonate buffer","The seconds-fast H⁺ sponge; respiratory = minutes, renal = days"],
 ["Acidemia / alkalemia","Blood pH below 7.35 / above 7.45"],
 ["Diabetic ketoacidosis","No insulin → fatty-acid metabolism → ketone acids → metabolic acidosis"],
 ["End-stage renal disease","Terminal CKD — dialysis or transplant territory; diabetes + hypertension cause ~70%"]]));

build(k,"/home/claude/out/Module13_Renal_StudyNotes.docx");
