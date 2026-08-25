const L = require('/home/claude/notes_lib.js');
const {C,h1,h2,body,bullet,tnote,tip,compare,detail,infoBox,banner,glossary,fig,pageBreak,spacer,cover,build,linkBox} = L;
const k=[];

k.push(...cover("Human Physiology (DPTH 6131)","Module 11: The Gastrointestinal System",
 "Topics: 11.1 GI Physiology (mouth → stomach → intestines) • 11.2 GI Disorders • Aging • Sync: the GI Mind Matrix + pathology cases",
 ["Lectures by Dr. Evan Andreyo; watch in your own Canvas module",
  "The sync session assigns the **GI Memory Matrix** (organ → function → secretion → stimulus/inhibition → pathology) plus a patient-case build (GERD demo; PUD, celiac, ulcerative colitis by group) — the matrix is filled in at the end of these notes",
  "The module's running case: a 67-year-old with \"low back pain\" whose real story is GI — the screening lesson is the point of the whole module",
  "Rule that organizes everything: parasympathetic (acetylcholine) turns the gut ON, sympathetic (norepinephrine) turns it OFF — reversed from the rest of the body's intuition"]));

/* ─────────────────────────── 11.1 GI PHYSIOLOGY ─────────────────────────── */
k.push(banner("TOPIC 11.1","GI Physiology — the Journey of a Meal"));
k.push(spacer());

k.push(h1("1. Who's in charge: the enteric nervous system"));
k.push(bullet("The gut runs its own unconscious nervous system. **Myenteric plexus** (outer layer) drives smooth-muscle movement → **peristalsis**. **Meissner's (submucosal) plexus** (deeper) drives **secretion and absorption** (plus some contraction)."));
k.push(bullet("**Rest-and-digest activates the gut:** parasympathetic **acetylcholine** stimulates GI function; sympathetic **norepinephrine** inhibits it."));

k.push(h1("2. Mouth and esophagus"));
k.push(bullet("**Mastication** turns food into a **bolus** — smaller pieces, more surface area, mixed with saliva. Taste (glossopharyngeal + facial nerves) triggers salivary secretion: **amylase** (carbs → monosaccharides — why bread turns sweet as you chew), **lipase** (fats → triglycerides), **proteolytic enzymes** (kill bacteria), and **mucus** (lubrication)."));
k.push(bullet("**Deglutition (swallowing):** trigeminal nerve senses palatal elevation, the epiglottis guards the airway, and the **vagus nerve** drives esophageal peristalsis down to the stomach."));

k.push(h1("3. Stomach"));
k.push(body("Food arriving triggers **gastrin** (from G-cells, via the bloodstream) → an acid factory spins up. In the **gastric pits**: **parietal cells** secrete hydrochloric (gastric) acid, **chief (peptic) cells** secrete **pepsinogen** (protein breakdown), and **mucous neck cells** coat the stomach in the protective mucus layer that keeps a **pH ~0.8** environment (≈3 million times more H⁺ than arterial blood) from digesting its owner. Mechanical **churning** turns it all into **chyme**, released into the duodenum."));
k.push(bullet("Acid throttle — stimulated by: gastrin, acetylcholine. Inhibited by: **prostaglandins** (which is why chronic NSAIDs endanger the gastric lining), **proton pump inhibitors** (block the H⁺ pump — e.g., omeprazole), and **bicarbonate** from the pancreas."));

k.push(h1("4. Small intestine (duodenum → jejunum → ileum)"));
k.push(detail(["Duodenal hormone","What it does"],[
 ["Secretin","Sensing acid, it tells the pancreas to send **bicarbonate** (neutralize the chyme) AND tells the stomach to ease off gastrin/acid — a self-balancing loop"],
 ["CCK (cholecystokinin)","Tells the pancreas to release digestive enzymes (trypsin, chymotrypsin, lipase…) and calls down **bile** — made by the liver, STORED in the gallbladder — to emulsify fat"],
 ["GIP","Prompts the pancreas to release **insulin**, prepping the body for the incoming glucose"]],[22,78]));
k.push(bullet("Movement shifts from pure peristalsis to **segmentation** (churn-and-mix) — the small intestine's length and squiggles buy TIME to finish digestion into absorbable units: monosaccharides, amino acids, glycerol + fatty acids."));
k.push(bullet("**Absorption happens mostly in the jejunum and ileum** (the stomach absorbs almost nothing). Surface area is the whole game: circular folds → **villi** (~10× absorption) → **microvilli** on the brush border (~another 20×), each villus with its own blood supply feeding absorbed nutrients straight into circulation."));

k.push(h1("5. Large intestine and the exit"));
k.push(bullet("Chyme enters through the **ileocecal valve** → ascending → transverse → descending colon → rectum. Main jobs: absorb **water and electrolytes** (sodium actively transported; water follows by osmosis — and **aldosterone** can turn absorption up), and host the **gut microbiota**: bacteria that digest the fiber we can't, producing vitamin K (clotting), B12, thiamine, riboflavin, and supporting immune health (the case for probiotics; methane is the odorous byproduct). What remains is feces."));
k.push(bullet("Two reflexes: **gastrocolic** (food entering the stomach signals the colon to make room — why meals trigger bathroom trips) and **rectosphincteric** (rectal distention relaxes the involuntary internal anal sphincter and creates urge; the **external sphincter is voluntary** — thank goodness)."));
k.push(tnote("Exercise and the gut ride a bell curve: sedentary life slows motility and worsens GI symptoms, moderate activity promotes motility and lowers disease/constipation/cancer risk — but heavy endurance work briefly cuts gastric emptying and gut blood flow, which is why marathoners know the port-a-potty line ('more marathons are lost in the port-a-potties than at the dinner table')."));

/* ─────────────────────────── 11.2 GI DISORDERS ─────────────────────────── */
k.push(pageBreak());
k.push(banner("TOPIC 11.2","GI Disorders — Top to Bottom"));
k.push(spacer());

k.push(h1("6. The screening mindset"));
k.push(body("The module's case: a 67-year-old man treated for **low back pain** who isn't improving, takes frequent restroom trips, and reports abdominal pain and sometimes-bloody diarrhea — and hasn't seen a physician. GI structures **refer pain** (including to the back), and GI signs (nausea, vomiting, diarrhea, constipation, anorexia, dysphagia, GI bleeding, incontinence) overlap with **constitutional symptoms** of systemic disease. The PT job: ask, cluster, refer. Diarrhea = usually failed absorption (many causes: infection, intolerance, malabsorption, meds, over-exercise); constipation = impaired transit (including plain dehydration)."));

k.push(h1("7. Esophagus and stomach"));
k.push(detail(["Disorder","What it is","PT-relevant management"],[
 ["Swallowing disorders / achalasia","CN V (palate), IX and X (swallow/peristalsis) failures; achalasia = the lower esophageal sphincter won't relax. Diagnosed by **barium swallow** (speech therapy territory)","Recognize dysphagia and refer"],
 ["Hiatal hernia","Stomach herniates through the diaphragmatic hiatus — **sliding** (GE junction rides up; the vast majority) vs rolling (junction stays, stomach pouches through). Diagnosed by endoscopy; high recurrence","**Avoid Valsalva** (especially supine!) — it spikes intra-abdominal pressure; treat the associated GERD; surgery if unmanageable"],
 ["GERD","Reflux of gastric contents into the esophagus — fatty/acidic/spicy food, alcohol, carbonation, hiatal hernia, possibly H. pylori, medications. Chronic reflux → esophageal inflammation and erosion","Lifestyle modification first; proton pump inhibitors (omeprazole)"],
 ["Gastritis","Inflammation of the gastric mucosa — irritants (alcohol, aspirin), H. pylori; chronic cases can atrophy the mucosa and cut acid production","Remove irritants; antibiotics if infectious — very treatable"],
 ["Peptic ulcer disease","An actual break in the stomach (gastric) or duodenal lining: protection down (H. pylori destroying mucus, NSAIDs cutting prostaglandins, tobacco/alcohol, stress, ischemia) and/or acid up. Complications: bleeding (~15%, with ~10% mortality when significant), perforation (surgical), and **metaplasia → gastric carcinoma** (H. pylori is a known carcinogen)","Treat the cause early (antibiotics for H. pylori, drop the NSAIDs) — prognosis then is very good"]],[18,52,30]));
k.push(infoBox("Heartburn vs heart attack — the clinic distinction",[
 "**Heartburn:** burning chest/throat after meals or when lying down, sour taste/regurgitation, tied to abdominal discomfort, eases on standing",
 "**Heart attack:** pressure/tightness spreading to arm, neck, jaw (distributions differ by sex), with shortness of breath and sweating",
 "A patient exercising in your clinic reporting chest burning gets this triage, every time"],C.red,C.lightRed));

k.push(h1("8. Intestinal disorders"));
k.push(detail(["Disorder","Essentials"],[
 ["Celiac disease","**Immune-mediated** (gluten-triggered, not spontaneous-autoimmune): gluten crossing the intestinal wall provokes T-cells/cytokines that flatten the villi (\"cobblestone\") → malabsorption: diarrhea, bloating, weight loss, abdominal pain — plus osteoporosis, iron-deficiency anemia, neurological issues, infertility, and sometimes dermatitis herpetiformis. Treatment: gluten-free diet"],
 ["Crohn's disease (IBD)","Autoimmune; **anywhere in the GI tract, patchy**, through **ALL bowel-wall layers**; wall thickening, mesenteric fat creep, mucosal ulcerations"],
 ["Ulcerative colitis (IBD)","Autoimmune with genetic lean; **large intestine only** (tail end), **mucosa + submucosa only**; T-cell ulcer formation → **left-lower-quadrant pain**, bloody stool, weight loss. Both IBDs: colonoscopy to diagnose; steroid anti-inflammatories (NSAIDs can worsen!); complications = bleeding, abscess, dehydration, and metaplasia → **colon cancer**"],
 ["Irritable bowel syndrome","A symptom cluster — chronic recurring abdominal pain + altered bowel habits with **NO identifiable structural/inflammatory/biochemical abnormality** (~11% of people). Mechanisms: slowed motility, altered microflora, increased permeability, visceral hypersensitivity — the **gut-brain connection**: stress and negative emotion flare it"],
 ["Diverticular disease","Diverticula = pouch-like colon protrusions (diverticulosis = many; diverticul**itis** = inflamed). Risks: low-fiber/high-red-meat diet, NSAIDs, connective-tissue disorders (Marfan, Ehlers-Danlos). Often asymptomatic; flares bring LLQ pain, fever if infected, nausea, bloody stool. Treat: fiber, antibiotics, surgery if severe"],
 ["Ileus & obstruction","Ileus = **paralyzed peristalsis** (denervation, post-surgical, medications); mechanical obstruction = adhesions, tumor, or hernia physically blocking transit"],
 ["Hernia","Organ (usually intestine) protruding through the peritoneal wall — **75% inguinal**; visible bump ± pain; from muscular weakness or trauma; watch-and-wait vs surgical repair"],
 ["Appendicitis","Obstruction/infection of the appendix (most common: young males) → inflammation → necrosis → **perforation → peritonitis**. Signature: RLQ pain at **McBurney's point** with **rebound tenderness**, nausea, fever. Appendectomy within ~24 h = good prognosis; delay can be deadly"]],[20,80]));

k.push(h1("9. Aging and the closing case"));
k.push(bullet("Aging hits every level: teeth/gum loss + dulled taste/smell + less saliva (harder bolus formation) → reduced gastric acid and gastric atrophy → fewer pancreatic beta-cell secretions → and a **less diverse gut microbiota**, hurting both digestion and absorption."));
k.push(bullet("Case resolution: add a history of **ulcerative colitis** and a family history of colon cancer to his bloody diarrhea and unexplained \"back pain,\" and the cluster points to **colorectal cancer** — a slow-growing polyp-to-carcinoma path (~10 years) that screening colonoscopy catches early. He wasn't being screened. The lesson: GI disease refers to the back, and the PT who asks the extra questions is sometimes the first screen the patient gets."));

/* ─────────────────────────── MEMORY MATRIX ─────────────────────────── */
k.push(pageBreak());
k.push(banner("GI MEMORY MATRIX","The Sync Worksheet, Filled In"));
k.push(spacer());
k.push(detail(["Organ/Region","Function","Secretion","Stimulus (+) / Inhibition (−)","Pathology"],[
 ["Mouth","Mastication → bolus; begin carb + fat digestion; kill bacteria","Saliva: amylase, lipase, proteolytic enzymes, mucus","+ Taste via CN VII/IX; − sympathetic tone","Dental/periodontal disease, ↓salivation with aging"],
 ["Esophagus","Deglutition + peristalsis to the stomach (CN V palate; CN IX/X swallow)","Mucus","+ Vagus (parasympathetic); − sympathetic","Dysphagia, achalasia, hiatal hernia, GERD"],
 ["Stomach","Churn food into chyme; protein digestion begins; almost no absorption","HCl (parietal), pepsinogen (chief), gastrin (G-cells), mucus (mucous neck cells)","+ Gastrin, acetylcholine; − prostaglandins, PPIs, bicarbonate, secretin feedback","Gastritis, peptic ulcer disease, gastric carcinoma"],
 ["Small intestine","Finish digestion; absorb nutrients (jejunum/ileum) via villi + microvilli; segmentation mixing","Secretin, CCK, GIP (duodenum)","+ Chyme arrival, parasympathetic; − sympathetic","Celiac disease, Crohn's, duodenal ulcer, lactose intolerance"],
 ["Pancreas","Neutralize acid; deliver digestive enzymes; endocrine glucose control","Bicarbonate, trypsin/chymotrypsin/lipase; insulin (GIP-stimulated)","+ Secretin (bicarb), CCK (enzymes), GIP (insulin)","Pancreatic insufficiency; beta-cell decline with aging"],
 ["Liver & gallbladder","Make (liver) and store/concentrate (gallbladder) bile for fat emulsification","Bile","+ CCK ejects stored bile","Gallbladder disease (obesity-linked)"],
 ["Large intestine","Absorb water + electrolytes (Na⁺ active transport, water follows; aldosterone assists); microbiota digest fiber → vitamin K, B12, thiamine, riboflavin","Mucus","+ Gastrocolic reflex, parasympathetic; − sympathetic","Ulcerative colitis, IBS, diverticular disease, colorectal cancer, appendicitis (cecal)"],
 ["Rectum/Anus","Store and expel feces","—","+ Rectosphincteric reflex (internal sphincter involuntary; external voluntary)","Incontinence, obstruction"]],[14,26,20,22,18]));

k.push(...glossary("Module 11 — Quick-Reference Glossary",[
 ["Myenteric vs Meissner's plexus","Movement (peristalsis) vs secretion/absorption"],
 ["Chyme","The acid-mushed food product the stomach ships to the duodenum"],
 ["Secretin / CCK / GIP","The duodenal traffic controllers: neutralize, digest, insulin-prep"],
 ["Villi + microvilli","The ~10× and ~20× surface-area multipliers of absorption"],
 ["Gastrocolic reflex","Food in → colon makes room"],
 ["H. pylori","The ulcer-driving, carcinogenic gastric bacterium"],
 ["Sliding vs rolling hiatal hernia","GE junction rides up (most common) vs stomach pouches beside it"],
 ["Crohn's vs ulcerative colitis","Anywhere/patchy/full-thickness vs colon-only/continuous/mucosal"],
 ["McBurney's point","RLQ landmark — rebound tenderness = appendicitis until proven otherwise"],
 ["Gut-brain connection","Stress ↔ IBS symptom flares via nervous-immune interaction"]]));

build(k,"/home/claude/out/Module11_Gastrointestinal_StudyNotes.docx");
