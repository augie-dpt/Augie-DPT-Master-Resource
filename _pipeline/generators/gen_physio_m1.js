const d = require('/home/claude/.npm-global/lib/node_modules/docx');
const fs = require('fs');
const {Document, Packer, Paragraph, TextRun, ImageRun, Table, TableRow, TableCell, WidthType,
       AlignmentType, BorderStyle, PageBreak, ShadingType} = d;

const C = {navy:"1F3864", blue:"2E75B6", lightBlue:"D6E4F0", teal:"1A7070", lightTeal:"D0EDED",
  green:"1E6B3C", lightGreen:"D4EDDA", gold:"9A6F00", lightGold:"FFF3CD",
  red:"B22222", lightRed:"FDECEA", purple:"5B2C8D", lightPurple:"EDE7F6",
  gray:"3D3D3D", midGray:"777777", white:"FFFFFF"};
const FULL = 9360;

const run = (t,o={}) => new TextRun({text:t, font:"Arial", size:20, color:C.gray, ...o});
function h1(t){return new Paragraph({children:[run(t,{bold:true,size:26,color:C.navy})],
  spacing:{before:240,after:100},
  border:{bottom:{color:C.blue,style:BorderStyle.SINGLE,size:6,space:1}}});}
function h2(t){return new Paragraph({children:[run(t,{bold:true,size:22,color:C.blue})],spacing:{before:160,after:80}});}
function parseB(t,runs,extra={}){const parts=t.split("**");parts.forEach((p,i)=>{if(p)runs.push(run(p,{bold:i%2===1,...extra}));});}
function body(t){const runs=[];parseB(t,runs);return new Paragraph({children:runs,spacing:{after:80}});}
function bullet(t,level=0){const runs=[];parseB(t,runs);
  return new Paragraph({children:runs,numbering:{reference:"bullets",level},spacing:{after:40}});}
function tnote(t){return new Paragraph({children:[run("\u{1F399} "+t,{italics:true,color:C.teal})],indent:{left:720},spacing:{after:80}});}
function tip(t){return new Paragraph({children:[run("★ "+t,{bold:true,color:C.gold})],indent:{left:720},spacing:{after:80}});}
function cell(t,{fill=C.white,bold=false,color=C.gray,w=4680,align=AlignmentType.LEFT}={}){
  const runs=[];parseB(t,runs,{bold,color});
  return new TableCell({children:[new Paragraph({children:runs,alignment:align,spacing:{after:20}})],
    width:{size:w,type:WidthType.DXA},shading:{type:ShadingType.CLEAR,fill},
    margins:{top:60,bottom:60,left:100,right:100}});}
function compare(lh,rh,li,ri,lc=C.blue,rc=C.teal,lf=C.lightBlue,rf=C.lightTeal){
  const rows=[new TableRow({children:[
    cell(lh,{fill:lc,bold:true,color:C.white,align:AlignmentType.CENTER}),
    cell(rh,{fill:rc,bold:true,color:C.white,align:AlignmentType.CENTER})]})];
  const n=Math.max(li.length,ri.length);
  for(let i=0;i<n;i++)rows.push(new TableRow({children:[cell(li[i]||"",{fill:lf}),cell(ri[i]||"",{fill:rf})]}));
  return new Table({rows,width:{size:FULL,type:WidthType.DXA},columnWidths:[4680,4680]});}
function detail(headers,rows,widths){
  const trs=[new TableRow({children:headers.map((h,i)=>cell(h,{fill:C.navy,bold:true,color:C.white,w:widths[i],align:AlignmentType.CENTER}))})];
  rows.forEach((r,ri)=>trs.push(new TableRow({children:r.map((c,i)=>cell(c,{fill:ri%2?C.white:C.lightBlue,w:widths[i]}))})));
  return new Table({rows:trs,width:{size:FULL,type:WidthType.DXA},columnWidths:widths});}
function infoBox(title,lines,accent=C.blue,light=C.lightBlue){
  const rows=[new TableRow({children:[cell(title,{fill:accent,bold:true,color:C.white,w:FULL})]})];
  lines.forEach(l=>rows.push(new TableRow({children:[cell(l,{fill:light,w:FULL})]})));
  return new Table({rows,width:{size:FULL,type:WidthType.DXA},columnWidths:[FULL]});}
function banner(label,subtitle,sub=C.blue){
  return new Table({rows:[
    new TableRow({children:[cell(label,{fill:C.navy,bold:true,color:C.white,w:FULL,align:AlignmentType.CENTER})]}),
    new TableRow({children:[cell(subtitle,{fill:sub,bold:true,color:C.white,w:FULL,align:AlignmentType.CENTER})]})],
    width:{size:FULL,type:WidthType.DXA},columnWidths:[FULL]});}
function glossary(title,terms){
  const rows=[new TableRow({children:[
    cell("Term",{fill:C.navy,bold:true,color:C.white,w:2400}),
    cell("Definition",{fill:C.navy,bold:true,color:C.white,w:6960})]})];
  terms.forEach(([t,def],i)=>rows.push(new TableRow({children:[
    cell(t,{bold:true,color:C.navy,fill:i%2?C.white:C.lightBlue,w:2400}),
    cell(def,{fill:i%2?C.white:C.lightBlue,w:6960})]})));
  return [h1(title),new Table({rows,width:{size:FULL,type:WidthType.DXA},columnWidths:[2400,6960]})];}
function fig(path,w,h,caption){
  const W=600, H=Math.round(W*h/w);
  const out=[new Paragraph({children:[new ImageRun({type:"png",data:fs.readFileSync(path),
    transformation:{width:W,height:H}})],alignment:AlignmentType.CENTER,spacing:{before:120,after:40}})];
  if(caption)out.push(new Paragraph({children:[run(caption,{italics:true,size:18,color:C.midGray})],
    alignment:AlignmentType.CENTER,spacing:{after:120}}));
  return out;}
const pageBreak=()=>new Paragraph({children:[new PageBreak()]});
const spacer=()=>new Paragraph({children:[run("",{size:8})],spacing:{after:60}});

const E="/home/claude/emb/";
const k=[];

// COVER
k.push(new Paragraph({children:[run("Human Physiology (DPTH 6131)",{italics:true,size:24,color:C.blue})],alignment:AlignmentType.CENTER,spacing:{before:1200,after:200}}));
k.push(new Paragraph({children:[run("Module 1: Cellular Physiology",{bold:true,size:48,color:C.navy})],alignment:AlignmentType.CENTER,spacing:{after:160}}));
k.push(new Paragraph({children:[run("Complete Study Guide",{italics:true,size:28,color:C.blue})],alignment:AlignmentType.CENTER,spacing:{after:160}}));
k.push(new Paragraph({children:[run("Augustana University — Doctor of Physical Therapy Program",{italics:true,size:20,color:C.midGray})],alignment:AlignmentType.CENTER,spacing:{after:120}}));
k.push(new Paragraph({children:[run("Lectures: Homeostasis • Cellular Physiology • Cell Injury & Healing • Inflammation",{size:20,color:C.gray})],alignment:AlignmentType.CENTER,spacing:{after:300}}));
k.push(infoBox("\u{1F4D6} How to Use These Notes",[
 "Best used with the lecture playing — keep these open, follow along, and add your own notes as you watch",
 "Lecture banners mark the start of each recorded lecture and run in the same order as the videos",
 "\u{1F399} Callouts = direct insights or key phrases from the instructor's transcript",
 "★ Tips = exam-relevant content or concepts the instructor told you to prepare for sync",
 "Figures are taken directly from the module's slide decks",
 "Each lecture ends with its own Quick-Reference Glossary",
 "Watch the assigned Khan Academy cell-introduction video before the Cellular Physiology lecture",
 "Written from last year's recordings — if a lecture has been re-recorded or resequenced, Canvas wins"]));
k.push(pageBreak());

// ===== LECTURE 1: HOMEOSTASIS =====
k.push(banner("TOPIC 1.1 — LECTURE 1","Homeostasis"));
k.push(spacer());
k.push(h1("1. What Homeostasis Is"));
k.push(tnote("Goldilocks analogy: not too hot, not too cold — the body wants the middle ground, the status quo. (She is probably guilty of breaking and entering, theft, and destruction of property, but it's a good analogy.)"));
k.push(bullet("**Definition (from the text): the maintenance of nearly constant conditions in the internal environment.**"));
k.push(tip("The instructor's words: circle it, tape it to your wall, set it as your desktop background. Homeostasis is the recurring theme of health and disease for this entire course."));
k.push(bullet("Everyday examples: blood pressure and body temperature held at **set points**."));
k.push(h1("2. Disease and Compensation"));
k.push(bullet("**Disease = a state of disrupted homeostasis** (text definition). Causes: infection, mutation, imbalance — flu (viral), sepsis (bacterial), cancer (DNA damage → mutation)."));
k.push(bullet("The body **compensates**: fever with viral infection (kill the virus, aid immune cells); raised blood pressure in kidney disease (restore excretion); and the PT example — after knee surgery (e.g., ACL reconstruction), joint inflammation and effusion trigger mechanoreceptors that **inhibit the quads**, possibly a defense mechanism to stop movement during injury."));
k.push(h1("3. Control Systems"));
k.push(bullet("Hundreds exist — some within organs, some across systems. Lecture examples:"));
k.push(bullet("**Oxygen:** hemoglobin binds O2 at its heme groups and releases it where tissue O2 is low, keeps it where O2 is plentiful.",1));
k.push(bullet("**CO2:** accumulation → increased breathing rate → CO2 expelled through ventilation.",1));
k.push(bullet("**Blood pressure:** baroreceptors in vessel walls sense stretch → brain signals vasodilation (or constriction).",1));
k.push(h1("4. Negative and Positive Feedback"));
k.push(compare("Negative feedback","Positive feedback",
 ["Returns the factor **toward a mean value** — maintains homeostasis","'Negative' means **opposite the stimulus**, not 'decrease': high BP is lowered AND low BP is raised","Applies to temperature, blood sugar, BP — anything with a set point"],
 ["**Amplifies** the stimulus — wants more of what started","**Childbirth:** head pushes cervix → nerve impulses → hormones → stronger contractions → loop","**Blood clotting:** once started, the process self-reinforces"]));
k.push(...fig(E+"positive_feedback.png",1650,663,"Positive feedback: the childbirth loop (Homeostasis deck)"));
k.push(h2("Gain — how good is the correction?"));
k.push(bullet("**Gain = correction ÷ error.** Text example: baseline BP 100 mmHg; a transfusion that would push a receptor-less system to 175 lands at 125 with baroreceptors intact. Correction = 50, error = 25, **gain = −2**."));
k.push(bullet("The point: control mechanisms are imperfect — they keep values **closer** to normal, not exact."));
k.push(tip("Come to the sync session prepared to discuss control mechanisms — the instructor says this directly."));
k.push(...glossary("Homeostasis — Quick-Reference Glossary",[
 ["Homeostasis","Maintenance of nearly constant conditions in the internal environment"],
 ["Set point","The target value a controlled variable is regulated around"],
 ["Disease","A state of disrupted homeostasis"],
 ["Compensation","A body response that offsets disrupted function (fever, BP rise, muscle inhibition)"],
 ["Baroreceptor","Vessel-wall pressure sensor driving BP regulation"],
 ["Negative feedback","Response opposite the stimulus, returning toward the set point"],
 ["Positive feedback","Response amplifying the stimulus (childbirth, clotting)"],
 ["Gain","Correction ÷ error — how effective a control system's correction is"]]));
k.push(pageBreak());

// ===== LECTURE 2: CELLULAR PHYSIOLOGY =====
k.push(banner("TOPIC 1.1 — LECTURE 2","Cellular Physiology",C.teal));
k.push(spacer());
k.push(h1("1. Scale and Cell Types"));
k.push(bullet("The cell is the basic living unit; tissues and organs are collections of many cell types."));
k.push(bullet("Scale: smallest visible object ~0.1 mm; grain of salt 0.3 mm; grain of rice ~6×2 mm; coffee bean ~12 mm. Cells: **1 to hundreds of μm, average ~100 μm**; 1,000 μm = 1 mm."));
k.push(...fig(E+"c5-05.png",2000,1125,"Prokaryotic vs eukaryotic cells (Cellular Physiology deck)"));
k.push(bullet("Human/animal cells are **eukaryotic**: definitive plasma membrane, definitive nucleus, organelles. **Prokaryotic** cells (bacteria, algae) lack these."));
k.push(h1("2. Cell Structure — the House Analogy"));
k.push(...fig(E+"c6-06.png",2000,1125,"The cell and its organelles (Cellular Physiology deck)"));
k.push(detail(["Organelle","House analogy","Function"],[
 ["Cell membrane","The house wall","Boundary; protein channels are the doors and windows (Na+, K+, glucose in/out)"],
 ["Cytoplasm","The air inside","Fluid medium containing ions"],
 ["Nucleus","The office","DNA/chromosomes — all the blueprints; contains the nucleolus"],
 ["Nucleolus","—","Generates ribosomes"],
 ["Ribosomes","—","Convert/transport mRNA toward protein"],
 ["Rough ER","The workshop / kitchen","Ribosome-studded; builds proteins and amino acids"],
 ["Smooth ER","—","Lipids, cholesterol, phospholipids, some steroid hormones"],
 ["Golgi apparatus","The garage","Packages and ships vesicles (proteins, lipids, hormones); exocytosis = taking out the trash"],
 ["Lysosomes","The Roomba","Vesicles that break down molecules and junk inside the cell"],
 ["Mitochondria","The utility closet","The powerhouse: glycolysis, Krebs cycle, electron transport chain → ATP"]],[1900,1900,5560]));
k.push(h1("3. Membrane Transport"));
k.push(...fig(E+"c8-08.png",2000,1125,"Simple diffusion, facilitated diffusion, and active transport (Cellular Physiology deck)"));
k.push(bullet("**Endocytosis** — material in: **pinocytosis** (small), **phagocytosis** (large; e.g., a macrophage engulfing debris); lysosomes digest and expel the remains."));
k.push(bullet("**Simple diffusion** — O2 and CO2 cross freely. **Facilitated (carrier-mediated) diffusion** — needs a carrier protein. **Active transport** — against a gradient; costs ATP."));
k.push(bullet("Diffusion is driven by **concentration**, **electrical charge**, and **pressure gradients**."));
k.push(h1("4. Osmosis, Osmolarity, Tonicity"));
k.push(bullet("**Osmosis** — water moves across a semipermeable membrane **toward the higher solute concentration** (solute particles disperse water and block its exit). Why salty food makes you thirsty — and the basis for renal and GI water handling later."));
k.push(bullet("**Osmolarity** — concentration of particles. **Osmotic pressure** — the pressure needed to stop net water movement."));
k.push(...fig(E+"c11-11.png",2000,1125,"Osmotic pressure and tonicity: hypertonic, isotonic, hypotonic (Cellular Physiology deck)"));
k.push(detail(["Solution","Outside vs inside","Water moves...","Result for the cell"],[
 ["Isotonic","Balanced","No net movement","Stable — what cells need"],
 ["Hypertonic","Higher concentration outside","Out of the cell","Shrivels"],
 ["Hypotonic","Lower concentration outside","Into the cell","Swells / can burst"]],[1700,2700,2200,2760]));
k.push(h1("5. Selective Permeability and the Na+/K+ Pump"));
k.push(bullet("Channels choose their traffic: sodium channels admit essentially only Na+, calcium channels only Ca2+. Gating: **voltage** (electrical) or **chemical** (e.g., acetylcholine)."));
k.push(...fig(E+"c13-13.png",2000,1125,"The sodium–potassium pump: 3 Na+ out, 2 K+ in, powered by ATPase (Cellular Physiology deck)"));
k.push(bullet("**Na+/K+ pump** — the most common **primary active transport**; keeps the inside of the cell **relatively negative** by swapping **3 Na+ out for 2 K+ in**, powered by ATPase splitting a phosphate off ATP. Foundation for nerve conduction (later modules)."));
k.push(h1("6. The Cell Life Cycle"));
k.push(bullet("Reproduction about every **10–30 hours** when uninhibited; the split itself = **mitosis**. **46 chromosomes in 23 pairs**; **centrioles** duplicate, migrate to opposite poles, and pull the chromosome material into two cells."));
k.push(...fig(E+"c15-15.png",2000,1125,"Stages of mitosis (Cellular Physiology deck)"));
k.push(bullet("Frequency varies: constant in **bone marrow and skin**; rare in smooth muscle; **neurons don't reproduce after fetal life** (neuroplasticity ≠ new neurons)."));
k.push(bullet("**Differentiation** — cells specialize by **selective gene repression**, and that repression is **never undone**: a white blood cell regenerates only as a white blood cell."));
k.push(compare("Apoptosis","Necrosis",
 ["**Programmed** cell death — intentional self-destruction","A cascade disassembles the cell for macrophage cleanup","Reasons: no longer needed, abnormal (infection), maintaining balance"],
 ["**Unintentional** death from injury","Chemical or physical damage overwhelms the cell","The cell cannot handle the stress"],
 C.blue,C.red,C.lightBlue,C.lightRed));
k.push(...glossary("Cellular Physiology — Quick-Reference Glossary",[
 ["Eukaryotic / Prokaryotic","With nucleus + organelles (human) / without (bacteria, algae)"],
 ["Nucleolus","Site of ribosome generation inside the nucleus"],
 ["Rough / Smooth ER","Protein production with ribosomes / lipid and hormone production"],
 ["Golgi apparatus","Packages and transports vesicles; exocytosis exports material"],
 ["Lysosome","Intracellular vesicle that breaks down molecules"],
 ["Pinocytosis / Phagocytosis","Endocytosis of small / large material"],
 ["Facilitated diffusion","Carrier-protein-assisted passive transport"],
 ["Active transport","Movement against a gradient using ATP"],
 ["Osmosis","Water movement toward higher solute concentration across a membrane"],
 ["Osmolarity / Osmotic pressure","Particle concentration / pressure needed to halt water movement"],
 ["Isotonic / Hypertonic / Hypotonic","Balanced / higher-outside / lower-outside solute concentration"],
 ["Na+/K+ pump","3 Na+ out, 2 K+ in via ATPase — keeps the cell interior relatively negative"],
 ["Mitosis","Cell division; driven by centrioles pulling chromosome pairs apart"],
 ["Differentiation","Specialization by permanent selective gene repression"],
 ["Apoptosis / Necrosis","Programmed / unintentional cell death"]]));
k.push(pageBreak());

// ===== LECTURE 3: CELL INJURY AND HEALING =====
k.push(banner("TOPIC 1.2 — LECTURE 1","Cell Injury and Healing",C.teal));
k.push(spacer());
k.push(h1("1. Pathology vs Pathophysiology"));
k.push(bullet("**Pathology** — the structural and functional changes caused by disease or trauma. **Pathophysiology** — the **process**: the physiologic events associated with disease or injury. This course cares most about the process."));
k.push(h1("2. What Injures a Cell"));
k.push(bullet("**Ischemia** (blood-flow deprivation), **infection** (bacteria, virus, fungi), **immune reactions** (allergy, autoimmunity), **chemical** (toxins), **genetic** (mutation, cancer), **mechanical stress** (load exceeds tissue tolerance), **nutritional** (deficit or imbalance), **physical trauma** (nail, hammer, heat)."));
k.push(bullet("Modifiers: environment, **physical activity** (too much impairs healing; sedentary is no better — a little goes a long way), and **psychosocial factors** (beliefs, stress — they change tissue-adaptation thresholds; more in the pain courses)."));
k.push(h1("3. Free Radicals and Antioxidants"));
k.push(bullet("**Free radical** — a molecule with an unpaired electron. Normal byproduct of energy production (**oxidation**); needed for inflammation and bacterial killing."));
k.push(bullet("In excess: each radical **steals an electron** from a neighbor, creating a chain reaction that damages tissue. Promoters: poor nutrition, tobacco, UV, pesticides, drugs, prolonged unrecovered exercise. Linked to heart disease, stroke, diabetes, Alzheimer's, cancer, premature aging."));
k.push(bullet("**Antioxidants** stabilize radicals by **donating an electron** — some endogenous, the rest from food (vitamin C, vitamin E, beta-carotene; 200+ substances)."));
k.push(h1("4. The Injury Cascade and Adaptations"));
k.push(...fig(E+"j5-05.png",1650,1275,"Cell injury concept map: adaptation → reversible → irreversible injury → necrosis or apoptosis (Cell Injury deck)"));
k.push(detail(["Adaptation","What happens"],[
 ["Atrophy","Cells shrink/degenerate; organ may get smaller"],
 ["Hypertrophy","Cell **size** increases (e.g., myocytes with training)"],
 ["Hyperplasia","Cell **number** increases; organ enlarges"],
 ["Metaplasia","Cell morphology changes (esophagus in reflux; lung in smoking)"],
 ["Dysplasia","Abnormal cells appear and gradually increase"]],[2400,6960]));
k.push(tip("Metaplasia and dysplasia are often prerequisites of, or associated with, cancer."));
k.push(...fig(E+"j6top.png",1650,663,"Reversible cell injury and the adaptation pathways (Cell Injury deck)"));
k.push(bullet("**Aging:** decreased capacity to respond to stressors; wear-and-tear accumulation (heart and brain regenerate poorly); **senescence** (dividing cells stop dividing); more free radicals."));
k.push(h1("5. Tissue Healing — Four Phases"));
k.push(...fig(E+"j8-08.png",1650,1275,"Hemostasis (platelet plug → fibrin mesh) and the inflammation phase (Cell Injury deck)"));
k.push(detail(["Phase","Timing","What happens"],[
 ["1. Hemostasis","Immediate","**Primary**: platelet plug. **Secondary**: clotting factors → fibrin mesh. Hematoma forms; affected cells die (degeneration)"],
 ["2. Inflammation","~First 24 h → days","Removes injurious agents and debris; initiates healing (full detail next lecture)"],
 ["3. Proliferation","First days onward","**Angiogenesis** brings blood; **fibroblasts** rebuild with fibronectin (scaffold), proteoglycans (hydration), elastin (elasticity), collagen (strength)"],
 ["4. Remodeling / maturation","Weeks → months","Epithelial cells migrate through the extracellular matrix; tissue gets smoother and stronger; redness fades slowly"]],[2100,1800,5460]));
k.push(tip("Type III collagen arrives first in wound healing; type I collagen is the strong, mature form — the main component of most mature scars."));
k.push(...fig(E+"j9-09.png",1650,1275,"Chronic-inflammation pathway and the proliferation/tissue-repair phase (Cell Injury deck)"));
k.push(bullet("**Chronic path:** persistent injury, repeated acute bouts, extensive necrosis, or poorly regenerating cells → chronic inflammation, scarring, altered structure/function, nerve hypersensitivity, possible chronic pain without a painful stimulus."));
k.push(h1("6. Which Tissues Regenerate"));
k.push(...fig(E+"j11-11.png",1650,1275,"Tissue regeneration by type, and primary vs secondary intention (Cell Injury deck)"));
k.push(detail(["Class","Behavior","Examples"],[
 ["Permanent","Doesn't regenerate after significant injury","Neurons (esp. peripheral), cardiac myocytes"],
 ["Stable","Doesn't usually divide, but can after injury","Liver (can regrow), skeletal muscle"],
 ["Labile","Always dividing; heals well","Skin/epithelium, GI tract, bone marrow"]],[1700,4200,3460]));
k.push(bullet("Timeframes: **bone ~6–12 weeks** (reparation phase — cell roles are an example here, detailed in later lectures); **tendon ~12–16 weeks**."));
k.push(compare("Primary intention","Secondary intention",
 ["Clean wound (surgical), edges approximated","Clean scar, heals well"],
 ["Irregular/larger traumatic wound","Fills with **granulation tissue** (fibrin, elastin — scar rather than epithelium); more scarring"]));
k.push(...glossary("Cell Injury & Healing — Quick-Reference Glossary",[
 ["Pathology / Pathophysiology","Structural-functional changes / the physiologic process of disease or injury"],
 ["Ischemia","Deprivation of blood flow — insufficient oxygen and nutrients"],
 ["Free radical","Molecule with an unpaired electron; chain-reacts by stealing electrons"],
 ["Oxidation","Electron addition/subtraction, often from oxygen molecules, in energy production"],
 ["Antioxidant","Stabilizes a free radical by donating an electron (endogenous + dietary)"],
 ["Atrophy / Hypertrophy","Smaller cells / larger cells"],
 ["Hyperplasia","More cells"],
 ["Metaplasia / Dysplasia","Changed morphology / abnormal cells increasing — both cancer-associated"],
 ["Senescence","Normally dividing cells reach a non-dividing state with age"],
 ["Hemostasis","Stopping blood loss: platelet plug, then coagulation/fibrin mesh"],
 ["Angiogenesis","New capillary growth into healing tissue"],
 ["Fibroblast","Repair cell producing the healing matrix"],
 ["Fibronectin / Proteoglycans / Elastin / Collagen","Scaffold / hydration / elasticity / tensile strength"],
 ["Granulation tissue","Scar-type fill of larger wounds (secondary intention)"],
 ["Primary / Secondary intention","Clean approximated healing / granulation-filled healing with more scar"]]));
k.push(pageBreak());

// ===== LECTURE 4: INFLAMMATION =====
k.push(banner("TOPIC 1.2 — LECTURE 2","Inflammation",C.teal));
k.push(spacer());
k.push(h1("1. Why This Matters to a PT"));
k.push(bullet("The same core concepts apply to a scraped knee, a sprained ankle, a biceps strain, and a brain injury. Triggers: pathogens, trauma, **microtrauma from exercise**, extreme temperatures, and every cell-injury cause from the last lecture."));
k.push(bullet("Goal: respond to the stimulus and **restore homeostasis** — eliminate the cause, clear dead tissue, start repair."));
k.push(h1("2. Cardinal Signs"));
k.push(bullet("Four classic signs (since Roman times): **heat, redness, swelling, pain** — plus the later fifth, **loss of function**, largely a consequence of the others."));
k.push(h1("3. Pathogenesis — Three Simultaneous Components (first 24–48 h)"));
k.push(h2("Hemodynamic changes"));
k.push(bullet("Smooth-muscle relaxation → **vasodilation** → blood floods the capillary network → redness, warmth, swelling (arterial blood is warm). Capillaries can't contract but dilate and are **leaky**: plasma and white cells slip between endothelial cells → **inflammatory edema**. Platelets then clog the openings ('leaves in the gutter') → flow slows and the area is walled off."));
k.push(h2("Humoral response — inflammatory mediators"));
k.push(...fig(E+"f12-12.png",2000,1125,"Inflammatory mediators: histamine from mast cells, vasodilation, chemotaxis (Inflammation deck)"));
k.push(detail(["Mediator","Source","Action"],[
 ["Histamine","Mast cells","Vasodilation"],
 ["Bradykinin","Plasma/local cells","Like histamine, over a longer duration"],
 ["Prostaglandins","Local cells","Inflammatory signaling"],
 ["Cytokines","White blood cells","'Call for more help'"]],[2200,2800,4360]));
k.push(h2("Cellular response"));
k.push(...fig(E+"f14-14.png",2000,1125,"Margination of neutrophils, adhesion of platelets, pavementing (Inflammation deck)"));
k.push(bullet("Slowed, packed flow is useful: infection stays contained and resources concentrate. RBCs line up (**rouleaux**), platelets seal openings, white cells congregate and migrate through the endothelium."));
k.push(...fig(E+"f16-16.png",2000,1125,"The leukocyte family — neutrophils, mast cells, macrophages and relatives (Inflammation deck)"));
k.push(bullet("Key cells for now: **neutrophils** (first responders, on patrol), **mast cells** (histamine), **macrophages**. Full family in immunology."));
k.push(bullet("**Chemotaxis** — leukocytes follow the chemical gradient (cytokines, bacterial particles) and squeeze through the swollen endothelium to the source."));
k.push(...fig(E+"f17-17.png",2000,1125,"Phagocytosis, apoptosis of spent cells, and pus (Inflammation deck)"));
k.push(bullet("**Phagocytosis** — neutrophils and macrophages engulf and neutralize debris/bacteria, then self-destruct by apoptosis. Accumulated spent cells = **pus**, the sign of a substantial infection being fought."));
k.push(...fig(E+"f18-18.png",2000,1125,"From injury to healed tissue: the pathway through inflammation (Inflammation deck)"));
k.push(h1("4. Classifying Inflammation"));
k.push(...fig(E+"f19-19.png",2000,1125,"Acute–subacute–chronic and local–systemic classification; septic shock (Inflammation deck)"));
k.push(compare("Acute","Chronic",
 ["Hours to first 24–48 h","High blood flow, vasodilation","**Neutrophil**-dominant"],
 ["Weeks to months","Less immediate vasodilation","More **macrophages** and other cells"]));
k.push(bullet("**Subacute** sits between — definitions vary between courses."));
k.push(infoBox("⚕ Clinical Spotlight — Systemic Inflammation (Sepsis)",[
 "Bacteria escape local containment into the bloodstream → the immune response goes global and can over-respond.",
 "Widespread vasodilation + vessel permeability → **blood pressure drops**; increased coagulation → clotting that **starves vital organs** (heart, lungs, brain) of flow.",
 "Systemic inflammation of this kind can be fatal — it is why sepsis is an emergency."],C.red,C.lightRed));
k.push(...glossary("Inflammation — Quick-Reference Glossary",[
 ["Cardinal signs","Heat, redness, swelling, pain (+ loss of function)"],
 ["Vasodilation","Vessel widening from smooth-muscle relaxation — drives redness and warmth"],
 ["Inflammatory edema","Swelling from plasma leaking through permeable capillaries"],
 ["Histamine / Bradykinin","Mast-cell mediator / longer-acting counterpart — both vasodilate"],
 ["Cytokines","WBC-released signals recruiting more immune cells"],
 ["Rouleaux","Alignment of red blood cells as flow slows"],
 ["Chemotaxis","Migration of leukocytes along a chemical gradient"],
 ["Neutrophil","First-responder white blood cell"],
 ["Mast cell / Macrophage","Histamine source / large phagocyte"],
 ["Phagocytosis","Engulfing and neutralizing debris or bacteria"],
 ["Pus","Accumulation of spent white blood cells after heavy phagocytosis"],
 ["Acute / Subacute / Chronic","Hours–days / in between / weeks–months"],
 ["Local / Systemic","Confined to the injury site / body-wide (e.g., sepsis)"],
 ["Sepsis","Systemic infection response: vasodilation + permeability → falling BP, clotting, organ hypoperfusion"]]));
k.push(pageBreak());

// SYNC
k.push(banner("MODULE 1","Sync Session 1 — Cellular Physiology",C.teal));
k.push(spacer());
k.push(bullet("Sync scenario documents (Scenarios 1–3) are in the course files for breakout discussion."));
k.push(tip("Prepare to discuss control mechanisms (negative and positive feedback, gain) — the Homeostasis lecture assigns this directly."));

k.push(new Paragraph({children:[run("Sources: Module 1 lecture transcripts and slide decks (Evan Andreyo, PT, DPT — Board-Certified Orthopaedic and Sports Clinical Specialist), Sync Session 1 scenarios — Augustana University Physical Therapy Program, Human Physiology (DPTH 6131), Module 1. Figures reproduced from the module slide decks.",{italics:true,size:18,color:C.midGray})],
  alignment:AlignmentType.CENTER,spacing:{before:300},
  border:{top:{color:C.blue,style:BorderStyle.SINGLE,size:6,space:4}}}));

const doc = new Document({
  numbering:{config:[{reference:"bullets",levels:[
    {level:0,format:"bullet",text:"•",alignment:AlignmentType.LEFT,style:{paragraph:{indent:{left:360,hanging:200}}}},
    {level:1,format:"bullet",text:"◦",alignment:AlignmentType.LEFT,style:{paragraph:{indent:{left:720,hanging:200}}}}]}]},
  sections:[{properties:{page:{size:{width:12240,height:15840},
    margin:{top:1008,right:1008,bottom:1008,left:1008}}},children:k}]});

Packer.toBuffer(doc).then(b=>{fs.writeFileSync("/home/claude/out/Module1_CellularPhysiology_StudyNotes.docx",b);
  console.log("written",b.length);});
