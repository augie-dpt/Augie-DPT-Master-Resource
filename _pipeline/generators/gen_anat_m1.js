const d = require('/home/claude/.npm-global/lib/node_modules/docx');
const fs = require('fs');
const {Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, WidthType,
       AlignmentType, BorderStyle, PageBreak, ShadingType, HeadingLevel} = d;

const C = {navy:"1F3864", blue:"2E75B6", lightBlue:"D6E4F0", teal:"1A7070", lightTeal:"D0EDED",
  green:"1E6B3C", lightGreen:"D4EDDA", gold:"9A6F00", lightGold:"FFF3CD", orange:"B84A00",
  lightOrange:"FCE8D8", red:"B22222", lightRed:"FDECEA", purple:"5B2C8D", lightPurple:"EDE7F6",
  gray:"3D3D3D", midGray:"777777", lightGray:"F3F3F3", white:"FFFFFF"};
const FULL = 9360;

const run = (t,o={}) => new TextRun({text:t, font:"Arial", size:20, color:C.gray, ...o});
const P = (kids,o={}) => new Paragraph({children:Array.isArray(kids)?kids:[kids], spacing:{after:80}, ...o});

function h1(t){return new Paragraph({children:[run(t,{bold:true,size:26,color:C.navy})],
  spacing:{before:240,after:100},
  border:{bottom:{color:C.blue,style:BorderStyle.SINGLE,size:6,space:1}}});}
function h2(t){return new Paragraph({children:[run(t,{bold:true,size:22,color:C.blue})],spacing:{before:160,after:80}});}
function body(t,extra){const runs=[]; parseB(t,runs,extra); return new Paragraph({children:runs,spacing:{after:80}});}
function parseB(t,runs,extra={}){ // **bold** support
  const parts=t.split("**"); parts.forEach((p,i)=>{if(p)runs.push(run(p,{bold:i%2===1,...extra}));});}
function bullet(t,level=0){const runs=[]; parseB(t,runs);
  return new Paragraph({children:runs, numbering:{reference:"bullets",level}, spacing:{after:40}});}
function tnote(t){return new Paragraph({children:[run("\u{1F399} "+t,{italics:true,color:C.teal})],
  indent:{left:720}, spacing:{after:80}});}
function tip(t){return new Paragraph({children:[run("★ "+t,{bold:true,color:C.gold})],
  indent:{left:720}, spacing:{after:80}});}
function cell(t,{fill=C.white,bold=false,color=C.gray,w=4680,align=AlignmentType.LEFT}={}){
  const runs=[]; parseB(t,runs,{bold,color});
  return new TableCell({children:[new Paragraph({children:runs,alignment:align,spacing:{after:20}})],
    width:{size:w,type:WidthType.DXA}, shading:{type:ShadingType.CLEAR,fill},
    margins:{top:60,bottom:60,left:100,right:100}});}
function compare(lh,rh,li,ri,lc=C.blue,rc=C.teal,lf=C.lightBlue,rf=C.lightTeal){
  const rows=[new TableRow({children:[
    cell(lh,{fill:lc,bold:true,color:C.white,align:AlignmentType.CENTER}),
    cell(rh,{fill:rc,bold:true,color:C.white,align:AlignmentType.CENTER})]})];
  const n=Math.max(li.length,ri.length);
  for(let i=0;i<n;i++) rows.push(new TableRow({children:[cell(li[i]||"",{fill:lf}),cell(ri[i]||"",{fill:rf})]}));
  return new Table({rows,width:{size:FULL,type:WidthType.DXA},columnWidths:[4680,4680]});}
function detail(headers,rows,widths,fills){
  const trs=[new TableRow({children:headers.map((h,i)=>cell(h,{fill:C.navy,bold:true,color:C.white,w:widths[i],align:AlignmentType.CENTER}))})];
  rows.forEach((r,ri)=>trs.push(new TableRow({children:r.map((c,i)=>cell(c,{fill:(fills&&fills[ri])||(ri%2?C.white:C.lightBlue),w:widths[i]}))})));
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
const pageBreak = () => new Paragraph({children:[new PageBreak()]});
const spacer = () => new Paragraph({children:[run("",{size:8})],spacing:{after:60}});

const k = [];

// ---------- COVER ----------
k.push(new Paragraph({children:[run("Human Anatomy (DPTH 6111)",{italics:true,size:24,color:C.blue})],alignment:AlignmentType.CENTER,spacing:{before:1200,after:200}}));
k.push(new Paragraph({children:[run("Module 1: Introduction to Anatomy",{bold:true,size:48,color:C.navy})],alignment:AlignmentType.CENTER,spacing:{after:160}}));
k.push(new Paragraph({children:[run("Complete Study Guide",{italics:true,size:28,color:C.blue})],alignment:AlignmentType.CENTER,spacing:{after:160}}));
k.push(new Paragraph({children:[run("Augustana University — Doctor of Physical Therapy Program",{italics:true,size:20,color:C.midGray})],alignment:AlignmentType.CENTER,spacing:{after:120}}));
k.push(new Paragraph({children:[run("Topics: 1.1 • 1.2 • 1.3 • 1.4 • 1.5 • 1.6 • Lumbar Palpation • Sync Session 1",{size:20,color:C.gray})],alignment:AlignmentType.CENTER,spacing:{after:300}}));
k.push(infoBox("\u{1F4D6} How to Use These Notes",[
 "Best used with the lecture playing — keep these open, follow along, and add your own notes as you watch",
 "Lecture banners mark the start of each topic and run in the same order as the videos",
 "\u{1F399} Callouts = direct insights or key phrases from the instructor's transcript",
 "★ Tips = exam-relevant content flagged by the instructor or sync-session objectives",
 "Compare tables are used only for genuine side-by-side comparisons",
 "Each topic ends with its own Quick-Reference Glossary",
 "Topic 1.4 (Surface Anatomy & Palpation) is reviewed in PhysioU — no recorded lecture exists",
 "Written from last year's recordings — if a lecture has been re-recorded or resequenced, Canvas wins"]));
k.push(pageBreak());

// ---------- 1.1 ----------
k.push(banner("TOPIC 1.1","Directional Terms"));
k.push(spacer());
k.push(h1("1. Body Planes"));
k.push(body("All description starts from **anatomical position**. Each plane pairs with the directional terms used within it:"));
k.push(detail(["Plane","Divides the body...","Directional terms"],[
 ["Sagittal","Front to back (right/left portions); the **mid-sagittal** plane sits at the midline","**Medial** (toward midline) vs **lateral** (away from midline)"],
 ["Coronal / Frontal","Into front and back","**Anterior (ventral)** vs **posterior (dorsal)**"],
 ["Transverse","Into upper and lower","**Superior** (above) vs **inferior** (below)"]],[2000,3400,3960]));
k.push(bullet("**Proximal** — closer to the trunk; **distal** — farther from the trunk (shoulder is proximal to the elbow; the elbow is distal to the shoulder)."));
k.push(tnote("You have to know your plane of reference — for the body it is the midline; when we get into the hand and the foot, the reference points for medial and lateral will be a little bit different."));
k.push(h1("2. Patient Positioning"));
k.push(bullet("**Supine** — lying on the back."));
k.push(bullet("**Prone** — lying on the belly/stomach."));
k.push(bullet("**Side-lying** — lying on the side; named for the side the patient lies on (right or left side-lying)."));
k.push(h1("3. Applying the Terms"));
k.push(bullet("Sternum is **anterior** to the thoracic spine; the thoracic spine is **posterior** to the sternum."));
k.push(bullet("Ankle: **lateral malleolus** outside, **medial malleolus** toward the midline."));
k.push(bullet("Patella: **suprapatellar** (superior) vs **infrapatellar** (inferior) — terms describe the relationship, not the distance."));
k.push(bullet("**Radial vs ulnar** clarify the forearm: the elbow's medial collateral ligament can be called the **ulnar collateral ligament** to distinguish it from the knee's MCL."));
k.push(bullet("Hand: **palmar** (anterior in anatomical position) vs **dorsal** (posterior)."));
k.push(bullet("Foot: **plantar** = bottom of the foot; **dorsal** = the top/upper surface — the odd one out, explained later by embryological development of the lower extremity."));
k.push(...glossary("Topic 1.1 — Quick-Reference Glossary",[
 ["Anatomical position","Standard reference posture: standing, palms facing forward"],
 ["Sagittal plane","Divides body front to back into right and left portions; mid-sagittal = midline"],
 ["Coronal (frontal) plane","Divides body into anterior and posterior parts"],
 ["Transverse plane","Divides body into superior and inferior parts"],
 ["Medial / Lateral","Toward / away from the midline"],
 ["Anterior (ventral) / Posterior (dorsal)","Toward the front / toward the back"],
 ["Superior / Inferior","Above / below"],
 ["Proximal / Distal","Closer to / farther from the trunk"],
 ["Supine / Prone / Side-lying","On the back / on the stomach / on the side"],
 ["Palmar / Plantar / Dorsal","Palm side of hand / sole of foot / back of hand or top of foot"],
 ["Radial / Ulnar","Lateral / medial aspect of the forearm"]]));
k.push(pageBreak());

// ---------- 1.2 ----------
k.push(banner("TOPIC 1.2","Movement Terms",C.teal));
k.push(spacer());
k.push(h1("1. Planes, Axes, and Their Motions"));
k.push(detail(["Plane","Axis of rotation","Motion direction","Motions"],[
 ["Sagittal","Medial–lateral","Anterior–posterior","Flexion, extension; plantarflexion, dorsiflexion"],
 ["Coronal / Frontal","Anterior–posterior","Medial–lateral","Abduction, adduction; ulnar/radial deviation; side bending; inversion, eversion"],
 ["Transverse","Superior–inferior (vertical)","Rotational","Internal/medial & external/lateral rotation; pronation, supination"]],[1800,1900,1900,3760]));
k.push(tnote("Lecture demonstration: a tape dispenser spinning on its axis — orient the axis medial–lateral and the tape moves anterior–posterior; that is the sagittal plane."));
k.push(h1("2. Sagittal Plane — Flexion and Extension"));
k.push(compare("Flexion","Extension",
 ["Joint bends; angle between the bones **decreases**","Shoulder: arm moves anteriorly","Elbow: ulna–humerus angle decreases","Wrist: palm moves forward","Hip: trunk–thigh angle decreases","Knee: lower leg moves **posteriorly** (angle still decreases)","Ankle: **plantarflexion** — toward the sole"],
 ["Joint straightens; angle **increases**","Shoulder: arm moves posteriorly","Elbow: ulna moves posteriorly, angle increases","Wrist: dorsum of hand moves posteriorly","Hip: angle between trunk and thigh increases","Knee: lower leg moves **anteriorly**","Ankle: **dorsiflexion** — dorsum toward the tibia"]));
k.push(tip("The knee bends 'opposite' to other joints — flexion moves the lower leg posteriorly, but the joint angle still decreases. Reference the moving surface at the ankle: sole for plantarflexion, dorsum for dorsiflexion."));
k.push(h1("3. Coronal/Frontal Plane Motions"));
k.push(compare("Abduction","Adduction",
 ["Movement **away** from the midline","Shoulder or hip: limb moves out to the side","Fingers: away from the **third metacarpal** (the hand's midline reference)"],
 ["Movement **toward** the midline ('adding it back together')","Limb returns toward the body","Fingers: back toward the third digit"]));
k.push(bullet("**Ulnar deviation** — hand moves toward the ulna; **radial deviation** — toward the radius."));
k.push(bullet("**Lateral flexion (side bending)** — ear toward shoulder, or sliding a hand down the same-side thigh; named for the side you bend toward."));
k.push(bullet("**Inversion** — plantar surface turns toward the midline; **eversion** — away from the midline."));
k.push(h1("4. Transverse Plane — Rotation"));
k.push(bullet("Cervical/trunk rotation: nose or shoulder turns right = right rotation; left = left rotation."));
k.push(bullet("Shoulder and hip: **external (lateral) rotation** away from midline (foot turns out); **internal (medial) rotation** toward midline (toes turn in)."));
k.push(compare("Pronation","Supination",
 ["**Medial** rotation of the radius","Palm faces **posteriorly** (anatomical position) or **down** (elbow flexed)"],
 ["**Lateral** rotation of the radius","Palm faces **anteriorly** (anatomical position) or **up** (elbow flexed)"]));
k.push(h1("5. Translatory and Combined Motions"));
k.push(bullet("**Protrusion / retrusion** — forward/backward slide (mandible at the TMJ)."));
k.push(bullet("Scapula: **elevation** (superior glide), **depression** (inferior glide), **protraction** (away from spine), **retraction** (toward spine)."));
k.push(bullet("**Circumduction** — combined flexion + abduction + extension + adduction (shoulder, hip)."));
k.push(bullet("**Opposition** — thumb contacts a finger; **reposition** — thumb separates from the digits."));
k.push(h1("6. Movement Analysis Practice"));
k.push(body("The lecture closes by naming every joint position in four photos — e.g., a 'triple flexed' limb (hip flexion + knee flexion + dorsiflexion) opposite a triple extended one; a supinated forearm identified because the subject looks at her palm. Practice describing whole-body positions joint by joint."));
k.push(...glossary("Topic 1.2 — Quick-Reference Glossary",[
 ["Flexion / Extension","Bending (angle decreases) / straightening (angle increases)"],
 ["Plantarflexion / Dorsiflexion","Ankle motion toward the sole / dorsum toward the tibia"],
 ["Abduction / Adduction","Away from / toward the reference axis (body midline; 3rd metacarpal in the hand)"],
 ["Ulnar / Radial deviation","Wrist motion toward the ulna / radius"],
 ["Lateral flexion (side bending)","Trunk or neck bending to the side in the frontal plane"],
 ["Inversion / Eversion","Plantar side of foot toward / away from midline"],
 ["Internal (medial) / External (lateral) rotation","Rotation toward / away from the midline"],
 ["Pronation / Supination","Medial / lateral rotation of the radius (palm down / palm up)"],
 ["Protrusion / Retrusion","Forward / backward translatory slide (e.g., mandible)"],
 ["Elevation / Depression","Superior / inferior glide (e.g., scapula)"],
 ["Protraction / Retraction","Scapula away from / toward the spine"],
 ["Circumduction","Combined flexion, abduction, extension, adduction"],
 ["Opposition / Reposition","Thumb to a finger / thumb away from the digits"]]));
k.push(pageBreak());

// ---------- 1.3 ----------
k.push(banner("TOPIC 1.3","Peripheral Nervous System — Spinal Nerves",C.teal));
k.push(spacer());
k.push(h1("Learning Objectives"));
k.push(bullet("Identify and describe the structure, function, and location of nervous tissue."));
k.push(bullet("Differentiate the components of a typical spinal nerve."));
k.push(bullet("Relate neuromuscular deficits with the location of nervous-system pathology."));
k.push(tnote("This recorded lecture bridges until Kenhub access opens — either version covers the same content."));
k.push(h1("1. Nervous System Overview"));
k.push(bullet("**CNS** = brain + spinal cord. **PNS** = spinal nerves (largest component) + cranial nerves (Module 10)."));
k.push(tnote("Transportation analogy: information packets (cars) travel between destinations (brain ↔ periphery) on an interstate (spinal cord) and side roads (spinal nerves)."));
k.push(h1("2. The Bony Framework"));
k.push(bullet("Vertebral column: **33 bones, 5 regions** — 7 cervical, 12 thoracic, 5 lumbar, 5 sacral (fused), 4 coccygeal (fused)."));
k.push(bullet("**Vertebral foramen** (one vertebra) → stacked = **vertebral canal**, housing the cord and roots."));
k.push(bullet("**Intervertebral foramen** — the exit between adjacent vertebrae; formed by the articular processes, laminae, vertebral bodies, and the IVD."));
k.push(h1("3. Spinal Nerve Formation"));
k.push(body("The cord runs from the base of the skull to about **L1–L2**. Formation sequence: **rootlets → roots → spinal nerve**."));
k.push(compare("Anterior root","Posterior root",
 ["**Efferent / motor**","Carries stimuli **away** from the CNS to peripheral targets","Cell bodies in the **anterior horn** of the cord (no swelling)"],
 ["**Afferent / sensory**","Carries stimuli **into** the CNS from the periphery","Cell bodies in the **spinal (dorsal) root ganglion** — the visible swelling"],
 C.red,C.green,C.lightRed,C.lightGreen));
k.push(bullet("Anterior + posterior roots combine → spinal nerves are **mixed nerves** (both fiber types)."));
k.push(h1("4. Branches of a Spinal Nerve"));
k.push(bullet("**Posterior ramus** — smaller; deep back muscles and skin of the back."));
k.push(bullet("**Anterior ramus** — larger; most of the rest of the body at that segmental level."));
k.push(bullet("**Recurrent meningeal branches** — re-enter the foramen; innervate the meninges and vertebral-canal structures."));
k.push(compare("White rami communicantes","Gray rami communicantes",
 ["Arise from **T1–L2 only**","Carry **pre**ganglionic fibers","Spinal cord → sympathetic chain ganglia"],
 ["Arise from **all** spinal cord levels","Carry **post**ganglionic fibers","Sympathetic chain ganglia → target"]));
k.push(h1("5. The 31 Pairs and How They Exit"));
k.push(detail(["Region","Pairs","Exit pattern"],[
 ["Cervical","8","C1 exits between skull and C1; C1–C7 exit **above** their vertebra; C8 exits **below** C7 (no C8 vertebra)"],
 ["Thoracic","12","Below the corresponding vertebra"],
 ["Lumbar","5","Below the corresponding vertebra"],
 ["Sacral","5","Fused sacrum → S1–S4 exit via anterior & posterior **sacral foramina**; S5 via the **sacral hiatus**"],
 ["Coccygeal","1","One nerve despite 3–5 segments; exits the sacral hiatus with S5"]],[1700,900,6760]));
k.push(tip("8 cervical nerves but 7 cervical vertebrae — the above/below switch at C8 is classic exam material."));
k.push(h1("6. Spinal Cord Landmarks"));
k.push(bullet("**Conus medullaris (medullary cone)** — the end of the cord, ~L1–L2."));
k.push(bullet("**Cauda equina** ('horse's tail') — spinal nerves continuing below the conus."));
k.push(bullet("**Enlargements** = more wiring for the limbs: **cervical, C5–T1** → upper limb (brachial plexus, future module); **lumbosacral, L2–S3** → lower limb (lumbosacral plexus, next module)."));
k.push(...glossary("Topic 1.3 — Quick-Reference Glossary",[
 ["CNS / PNS","Brain + spinal cord / spinal nerves + cranial nerves"],
 ["Vertebral canal","Stacked vertebral foramina housing the spinal cord"],
 ["Intervertebral foramen","Exit space between adjacent vertebrae for the spinal nerve"],
 ["Rootlets / Roots","Filaments off the cord that combine into anterior and posterior roots"],
 ["Anterior root","Efferent (motor); cell bodies in the anterior horn"],
 ["Posterior root","Afferent (sensory); cell bodies in the dorsal root ganglion"],
 ["Mixed nerve","Contains both afferent and efferent fibers"],
 ["Posterior / Anterior ramus","Branch to deep back & skin / branch to most of the body segmentally"],
 ["Recurrent meningeal branch","Re-enters the foramen to innervate meninges and canal structures"],
 ["White / Gray rami communicantes","T1–L2 preganglionic / all levels postganglionic sympathetic connections"],
 ["Conus medullaris","End of the spinal cord (~L1–L2)"],
 ["Cauda equina","Nerve roots continuing below the conus"],
 ["Cervical / Lumbosacral enlargement","C5–T1 for the upper limb / L2–S3 for the lower limb"]]));
k.push(pageBreak());

// ---------- 1.4 ----------
k.push(banner("TOPIC 1.4","Surface Anatomy and Palpation",C.teal));
k.push(spacer());
k.push(infoBox("ℹ This topic lives in PhysioU",[
 "Topic 1.4 has no recorded lecture or handout — **PhysioU is the assigned resource** for reviewing surface anatomy and palpation content for this module.",
 "Pair it with the **Lumbar Palpation Skills List** at the end of these notes: spinous processes, transverse processes, and erector spinae, with patient positioning and movement cues.",
 "Palpation is tested hands-on at lab immersion — practice on people, not just screens."],C.gold,C.lightGold));
k.push(pageBreak());

// ---------- 1.5 ----------
k.push(banner("TOPIC 1.5","Lumbar Vertebrae",C.teal));
k.push(spacer());
k.push(h1("1. The Vertebral Column"));
k.push(bullet("33 vertebrae, 5 regions; height = bodies + IVDs. Motion happens mostly **above the sacrum**; sacral segments are fused and the coccyx fuses by ~age 30."));
k.push(bullet("**Bodies enlarge superior → inferior** with increasing load; **vertebral foramen shrinks** in the same direction (fewer nerves remain in the canal — by the lumbar levels only the cauda equina)."));
k.push(bullet("Normal curves: cervical **lordosis**, thoracic **kyphosis**, lumbar **lordosis** (driven by the lumbosacral angle), sacral kyphosis."));
k.push(h1("2. Anatomy of a Lumbar Vertebra"));
k.push(bullet("**Vertebral body** — supports body weight."));
k.push(bullet("**Vertebral arch** — protects the cord: **pedicle** (lateral border; short, thick) + **lamina** (posterior border; upper surface anchors the ligamentum flavum)."));
k.push(bullet("**Seven processes** — 4 articular (synovial joints with neighbors), 2 transverse + 1 spinous (muscle/ligament attachments)."));
k.push(infoBox("⚕ Clinical Spotlight — Spondylolysis & Spondylolisthesis",[
 "**Pars interarticularis** — the lamina region between the superior and inferior articular processes.",
 "**Spondylolysis** — fracture through the pars; the **'Scotty dog' fracture** (the fracture line runs through the dog's neck on oblique view).",
 "Bilateral fracture → the lamina no longer restrains the vertebra above → **spondylolisthesis** (e.g., L5 slides anteriorly on S1). Risk: neural compression."],C.red,C.lightRed));
k.push(h1("3. Inside the Vertebral Body"));
k.push(bullet("Thin compact shell containing cancellous bone; the vertebral body bears about **50% of the axial load**."));
k.push(bullet("**Trabeculae**: vertical supports for the endplates; horizontal supports stiffen the vertical ones. Aging mainly reduces the **horizontal** trabeculae → endplate change."));
k.push(bullet("Bone is dynamic: loss can start in the **early 20s** and shows as height loss in the **bodies, not the discs**. Compression + movement drive remodeling."));
k.push(bullet("Consequences of poor loading/density: **osteoporosis, traction spurs, osteophytes**."));
k.push(tip("Compression and movement are the counter to age-related bone loss — a theme that returns throughout the program."));
k.push(h1("4. Intervertebral Foramen and Nerve-Root Naming"));
k.push(bullet("Formed by the notches of adjacent vertebrae + the IVD; passes the spinal nerve and its vessels."));
k.push(bullet("Naming: the disc between L4 and L5 = **L4–L5 disc**; the root exiting that foramen is named for the vertebra **above** → the **L4 root**."));
k.push(h1("5. Zygapophysial (Facet) Joints"));
k.push(bullet("Superior articular process (below) + inferior articular process (above); **synovial plane joints** — slide only, with capsule and synovial fluid."));
k.push(bullet("Innervated by **two nerves** (medial branches of the posterior rami, above and below) → a potential **pain generator**."));
k.push(h1("6. Sacrum, Coccyx, and Variations"));
k.push(bullet("**Sacrum** — 5 fused vertebrae; strength/stability for the pelvis; transmits body weight to the pelvic girdle. Males: larger S1 body; females: wider relative to length."));
k.push(bullet("Landmarks: **sacral canal** (canal continuation), **sacral hiatus** (inferior opening), **auricular surface** (synovial SI joint), anterior & posterior **sacral foramina**."));
k.push(bullet("**Coccyx** — 4 vertebrae fusing ~age 30; anchors pelvic floor muscles and part of glute max."));
k.push(bullet("Variations (~5%): **cervical rib** at C7, **sacralized L5**, **lumbarized S1**, occasional lumbar rib at L1 — usually incidental."));
k.push(h1("7. Supply and Innervation"));
k.push(bullet("Arteries: segmental branches off the abdominal aorta — periosteal, equatorial, spinal branches. Venous drainage mirrors it via internal/external venous plexuses."));
k.push(bullet("The column itself is innervated by the **recurrent meningeal branches** — the 'U-turn' branch re-entering the foramen."));
k.push(...glossary("Topic 1.5 — Quick-Reference Glossary",[
 ["Pedicle / Lamina","Lateral / posterior parts of the vertebral arch"],
 ["Pars interarticularis","Lamina region between articular processes; spondylolysis fracture site"],
 ["Spondylolysis / Spondylolisthesis","Pars fracture / anterior slide of the vertebra above (bilateral fracture)"],
 ["Trabeculae","Cancellous bone struts: vertical (endplate support) + horizontal (stiffening)"],
 ["Intervertebral foramen","Nerve exit between vertebrae; root named for the vertebra above"],
 ["Zygapophysial (facet) joint","Synovial plane joint between articular processes; dual nerve supply"],
 ["Sacral canal / hiatus","Continuation of the vertebral canal / opening at the sacral base"],
 ["Auricular surface","Lateral sacral articulation for the SI joint"],
 ["Sacralized L5 / Lumbarized S1","L5 fused to sacrum / S1 unfused (extra mobile segment)"],
 ["Lordosis / Kyphosis","Curve with posterior / anterior concavity"],
 ["Recurrent meningeal branches","Spinal-nerve branches that re-enter to innervate the column"]]));
k.push(pageBreak());

// ---------- 1.6 ----------
k.push(banner("TOPIC 1.6","Lumbar Ligaments and the Intervertebral Disc",C.teal));
k.push(spacer());
k.push(h1("1. Ligaments of the Lumbar Spine"));
k.push(detail(["Ligament","Attachments","Function"],[
 ["**ALL** (anterior longitudinal)","Anterolateral vertebral bodies & IVDs; occiput/foramen magnum + anterior tubercle of C1 → upper sacrum","Supports vertebral-body joints; **prevents hyperextension**. Thick and fibrous"],
 ["**PLL** (posterior longitudinal)","Posterior bodies (mainly the **IVDs**) within the canal; C2 → sacrum; continues intracranially as the **tectorial membrane**","Narrower/weaker than ALL; **resists hyperflexion**; helps prevent **posterior disc herniation**"],
 ["**Ligamentum flavum**","Lamina to lamina (anterior surface above → posterior surface below)","High **elastin** (yellow); resists lamina separation in flexion; **aids return to erect posture**"],
 ["**Interspinous**","Between spinous processes, base to apex; blends with flavum and supraspinous","Resists flexion (prevents spinous separation)"],
 ["**Supraspinous**","Tips of spinous processes, **C7 → sacrum**; cord-like","Resists hyperflexion; can make spinous processes harder to palpate when taut"],
 ["**Intertransverse**","Between transverse processes; sheet-like, blends with muscles","**Limits lateral flexion**"]],[1900,3700,3760]));
k.push(tip("Each ligament resists the motion that would stretch it: anterior ligaments check extension, posterior ligaments check flexion. Anterior → posterior order: ALL → body/IVD → PLL → (cord) → flavum → interspinous → supraspinous."));
k.push(h1("2. The Intervertebral Disc"));
k.push(bullet("Fibrocartilaginous joint between bodies; **1/3–1/4 of column length**; **23 discs** (6 cervical, 12 thoracic, 5 lumbar); lumbar discs the thickest (~7–10 mm, ~4 cm across). Innervated via the **sinuvertebral nerves**."));
k.push(h2("Nucleus pulposus"));
k.push(bullet("Gelatinous proteoglycan core; more **type II collagen** — absorbs compression; conforms to pressure; **avascular**; sits **more posteriorly** in the lumbar spine; blends gradually into the annulus."));
k.push(h2("Annulus fibrosus"));
k.push(bullet("**Outer ligamentous annulus** — unites the vertebral rims; **type I collagen** resists tension; low proteoglycan; **anterior layers thicker than posterior**; only the outside fibers are innervated, by the **sinuvertebral nerve**."));
k.push(bullet("**Inner cartilaginous annulus** — load-bearing; high proteoglycan."));
k.push(bullet("Fiber layers alternate at **45°** in opposite directions → overlapping tensile strength."));
k.push(h2("Cartilage endplate"));
k.push(bullet("Hyaline cartilage ~**1 mm**, caps the vertebral endplate; penetrated by small **vascular buds**; the **diffusion pathway** for disc nutrition and the barrier between avascular nucleus and vascular body."));
k.push(h2("Disc nutrition"));
k.push(bullet("The adult disc is **avascular** — everything moves by **diffusion** (nutrients in, waste out). Supply fails with: blood-supply changes, **subchondral sclerosis**, **endplate ossification**, lifestyle (e.g., nicotine narrows vessels) → inflammation, impaired turnover, cell death, a less healthy disc."));
k.push(h2("How the disc moves"));
k.push(bullet("The nucleus shifts toward the compressed side to absorb load; the outer annulus resists tension (traction), torsion, and separation on the convex side of a bend."));
k.push(infoBox("⚕ Clinical Spotlight — Disc Herniation",[
 "Annulus tears and nucleus material seeps out — **a slow leak, not a jelly-donut pop** — and it is treatable in physical therapy.",
 "Most herniations are **posterolateral**: the nucleus sits posteriorly, the posterior annulus is thinner, and the PLL reinforces centrally but not where the nerves exit.",
 "Herniated material can compress exiting nerves or the cauda equina → symptoms **distal/remote** to the level. Cord compression is emergent. Full management comes in the spinal course."],C.red,C.lightRed));
k.push(h1("3. Curvatures and Motions"));
k.push(bullet("Normal: cervical lordosis, thoracic kyphosis, lumbar lordosis, sacral kyphosis. **Scoliosis** = abnormal frontal-plane curvature; alters weight bearing."));
k.push(bullet("Lumbar motions: flexion/extension (sagittal), side bending R/L (frontal), rotation R/L (transverse)."));
k.push(...glossary("Topic 1.6 — Quick-Reference Glossary",[
 ["ALL / PLL","Anterior ligament preventing hyperextension / posterior ligament resisting hyperflexion & posterior herniation"],
 ["Tectorial membrane","Intracranial continuation of the PLL"],
 ["Ligamentum flavum","Elastin-rich lamina-to-lamina ligament; recoils into extension"],
 ["Interspinous / Supraspinous ligaments","Between / atop the spinous processes; both resist flexion"],
 ["Intertransverse ligaments","Between transverse processes; limit lateral flexion"],
 ["Nucleus pulposus","Gelatinous, type-II-collagen disc core; absorbs compression"],
 ["Annulus fibrosus","Layered fibrocartilage ring; outer type-I layers resist tension"],
 ["Cartilage endplate","1-mm hyaline cap; diffusion pathway for disc nutrition"],
 ["Sinuvertebral nerve","Innervates the disc (outer annular fibers)"],
 ["Posterolateral herniation","Most common herniation path — thin posterior annulus, no PLL cover laterally"],
 ["Scoliosis","Abnormal frontal/coronal-plane spinal curvature"]]));
k.push(pageBreak());

// ---------- SKILLS + SYNC ----------
k.push(banner("MODULE 1 RESOURCES","Lumbar Palpation Skills • Sync Session 1",C.teal));
k.push(spacer());
k.push(h1("Lumbar Palpation Skills List"));
k.push(h2("Bony landmarks (posterior)"));
k.push(bullet("**Lumbar spinous processes** — palpate centrally; have the patient cross their arms and bend forward; feel each segment move under your fingers through flexion and extension."));
k.push(bullet("**Lumbar transverse processes** — find the spinous process, move just lateral; one thumb on each side; patient crosses arms, then side bends and/or rotates; repeat each segment."));
k.push(h2("Soft tissue (posterior)"));
k.push(bullet("**Erector spinae** — patient prone; resist active trunk extension; palpate as a group along the column, lateral to the spinous processes on both sides."));
k.push(h1("Sync Session 1"));
k.push(bullet("Sync sessions Wednesdays @ 10 AM; office hours after class and Thursdays 9–10 AM; the next module opens after sync ends."));
k.push(tip("Knowledge Check #1: opens 12 PM, closes Friday 4 PM — 10 questions, 90 seconds each, open book, solo."));
k.push(h2("Breakout objectives — treat these as the module's test blueprint"));
k.push(bullet("Describe a structure relative to its surroundings; know each plane and its motions."));
k.push(bullet("CNS vs PNS; how spinal nerves exit the vertebral canal; spinal cord vs cauda equina vs spinal nerves."));
k.push(bullet("Bony landmarks of the lumbar spine and sacrum; each ligament and the direction it resists; facet joint structure; IVD structure."));
k.push(tip("\"How does the IVD change throughout the day?\" — asked directly in the breakout list. Think diffusion, load, and disc height."));
k.push(infoBox("Patient Case — Jeanne",[
 "35-year-old physical therapy student with low back pain, recently increased after prolonged sitting while studying.",
 "Framework: joints and bony structures **under** the symptoms • muscles/tendons/soft tissue under the symptoms • structures that may **refer** into the area • other conditions to rule out."],C.purple,C.lightPurple));
k.push(bullet("Next week: Harmonize Lumbosacral Plexus assignment due before sync; Quiz #1 due Friday 4 PM."));

// footer
k.push(new Paragraph({children:[run("Sources: Module 1 lecture transcripts and slide handouts (Dr. Libby Litmer), Lumbar Palpation Skills List, Sync Session 1 slides — Augustana University Physical Therapy Program, Human Anatomy (DPTH 6111), Module 1.",{italics:true,size:18,color:C.midGray})],
  alignment:AlignmentType.CENTER, spacing:{before:300},
  border:{top:{color:C.blue,style:BorderStyle.SINGLE,size:6,space:4}}}));

const doc = new Document({
  numbering:{config:[{reference:"bullets",levels:[
    {level:0,format:"bullet",text:"•",alignment:AlignmentType.LEFT,style:{paragraph:{indent:{left:360,hanging:200}}}},
    {level:1,format:"bullet",text:"◦",alignment:AlignmentType.LEFT,style:{paragraph:{indent:{left:720,hanging:200}}}}]}]},
  sections:[{properties:{page:{size:{width:12240,height:15840},
    margin:{top:1008,right:1008,bottom:1008,left:1008}}},children:k}]});

Packer.toBuffer(doc).then(b=>{fs.writeFileSync("/home/claude/out/Module1_IntroductionToAnatomy_StudyNotes.docx",b);
  console.log("written",b.length);});
