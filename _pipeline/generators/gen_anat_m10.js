const L = require('/home/claude/notes_lib.js');
const {C,h1,h2,body,bullet,tnote,tip,compare,detail,infoBox,banner,glossary,fig,pageBreak,spacer,cover,build,linkBox} = L;
const k=[];

k.push(...cover("Human Anatomy (DPTH 6111)","Module 10: Head and Neck",
 "Topics: 10.1 Skull Osteology • 10.2 Neurocranial Structures • 10.3 Cranial Blood Flow • 10.4 Viscerocranium & Neck",
 ["Dr. Fernando Castillo presents the whole module, mostly live in the Complete Anatomy 3D app — the notes reconstruct his tour in reading order",
  "**Exam #2 sits in this module** — Respondus LockDown Browser + webcam",
  "This is the densest module of the course: skull → brain → vessels → face. The two case studies at the end are the best self-test the course gives you",
  "The head and neck palpation skills list lives in this Drive folder"]));

/* ─────────────────────────── TOPIC 10.1 ─────────────────────────── */
k.push(banner("TOPIC 10.1","Skull Osteology — Outer Bones, Landmarks, Foramina"));
k.push(spacer());

k.push(h1("1. Neurocranium vs Viscerocranium"));
k.push(compare("NEUROCRANIUM — the “head”","VISCEROCRANIUM — the “face”",
 ["**8 bones:** frontal · 2 parietal · 2 temporal · sphenoid · occipital · **ethmoid**","Houses the brain"],
 ["**15 bones** — headline members: maxilla ×2 · zygomatic ×2 · nasal ×2 · **mandible** · ethmoid again","*Viscero* loosely = emotion: the face is where expression muscles attach"],
 C.blue,C.teal,C.lightBlue,C.lightTeal));
k.push(bullet("**22 named bones total — but 8 + 15 = 23**, because the **ethmoid is shared:** its superior part (neural passageways) is neurocranial, its contribution to the nasal cavity is facial."));
k.push(detail(["Orbit wall","Built by"],[
 ["Superior","Frontal bone"],
 ["Posterior","**Sphenoid** (mostly the greater wing)"],
 ["Lateral","Zygomatic"],
 ["Medial","**Maxilla + ethmoid**"]],[2200,7160]));

k.push(h1("2. Landmarks Worth Owning"));
k.push(detail(["Landmark","Why it matters"],[
 ["**Mandible: body · ramus · coronoid process · condylar process**","Coronoid = **temporalis insertion**; condylar process fits the **mandibular fossa** of the temporal bone = the TMJ"],
 ["**Temporal fossa**","The big lateral indentation across frontal/parietal/temporal/sphenoid — **temporalis origin**; its fibers dive deep to the zygomatic arch"],
 ["**Zygomatic arch**","Zygomatic bone (anterior) + temporal bone (posterior)"],
 ["**Mastoid process**","Round bump behind the ear — **SCM attachment**"],
 ["**Styloid process**","Spike for jaw/neck stabilising muscles (and the stylomandibular ligament)"],
 ["**External acoustic meatus**","The ear canal — a **meatus**, not a foramen"],
 ["**Inion (external occipital protuberance)**","Palpable midline bump — **trapezius attachment**"],
 ["**Nuchal lines: supreme · superior · inferior**","Superior + supreme anchor the big neck extensors; **inferior anchors the suboccipitals**"]],[3200,6160]));
k.push(tnote("Foramen vs meatus vs fissure, as the lecture defines them: a foramen is a 2D hole (paper with a hole cut through — nerves and arteries); a meatus is a 3D drilled canal (usually air or sound); a fissure is just a very large foramen."));

k.push(h1("3. Inner Cranium — Sphenoid Geography and the Foramina"));
k.push(bullet("**Sphenoid parts:** lesser wings (sharp, superior) · greater wings (the mass you see laterally, most of the orbit's back wall) · **pterygoid plates/processes** · the **body**, whose saddle-shaped dip is the **sella turcica** (\"Turkish saddle\") — **the pituitary gland sits in it.**"));
k.push(detail(["Foramen / passage","Where","What passes (per 10.2's story)"],[
 ["**Cribriform foramina**","Cribriform plate of the **ethmoid**","**CN I** olfactory fibers"],
 ["**Optic canal**","Between lesser wing and sphenoid body","**CN II**"],
 ["**Superior orbital fissure (SOF)**","Between lesser and greater wings","**CN III, IV, V1, VI**"],
 ["**Foramen rotundum**","Greater wing","**CN V2**"],
 ["**Foramen ovale**","Greater wing","**CN V3**"],
 ["**Carotid canal**","Temporal bone (a true canal)","**Internal carotid artery**"],
 ["**Internal acoustic meatus**","Medial temporal bone","**CN VII + VIII**"],
 ["**Jugular foramen**","Between temporal and occipital","**CN IX, X, XI + the internal jugular vein** (via the sigmoid sinus)"],
 ["**Foramen magnum**","Occipital","Brainstem/spinal cord · **vertebral arteries** · CN XI entering"],
 ["**Hypoglossal canal**","Beside the foramen magnum","**CN XII**"]],[2700,2600,4060]));
k.push(tip("This table is half the exam. Learn it as pairs — SOF gets III–VI (V1 included), rotundum-to-ovale is V2-to-V3, jugular foramen bundles IX/X/XI with the vein. Labeling first, contents second, exactly as the lecturer advises."));

k.push(...glossary("Topic 10.1 — Quick-Reference Glossary",[
 ["Ethmoid","The shared bone: cribriform plate up top, nasal skeleton below"],
 ["Sella turcica","Sphenoid-body saddle seating the pituitary"],
 ["Temporal fossa","Temporalis origin across four bones"],
 ["Coronoid vs condylar process","Temporalis insertion vs TMJ articulation"],
 ["Mastoid / styloid process","SCM anchor / jaw-and-neck muscle spike"],
 ["Foramen · meatus · fissure","2D hole · 3D canal · giant foramen"],
 ["Cribriform plate","Ethmoid roof pierced by smell fibers"],
 ["Sutures","The skull's fibrous stitch lines; flexible in infancy, closing across the lifespan"]]));
k.push(pageBreak());

/* ─────────────────────────── TOPIC 10.2 ─────────────────────────── */
k.push(banner("TOPIC 10.2","Neurocranial Structures — CNS Development, Brain, Brainstem, Cranial Nerves"));
k.push(spacer());

k.push(h1("1. How the Brain Fits — the Three Cranial Fossae"));
k.push(detail(["Fossa","Built by","Holds"],[
 ["**Anterior**","Frontal + ethmoid + superior sphenoid","**Frontal lobes**"],
 ["**Middle**","Lesser wings/sella + anterior temporal bone","**Temporal lobes**"],
 ["**Posterior**","Posterior temporal + occipital","**Cerebellum, brainstem, proximal cord**"]],[1900,3900,3560]));

k.push(h1("2. Gray vs White — the Vocabulary Everything Uses"));
k.push(compare("GRAY MATTER (unmyelinated)","WHITE MATTER (myelinated)",
 ["Grouped as **nuclei** (CNS) / **ganglia** (PNS) — the **integrating decision-makers**","Named examples: **cerebral cortex** (the outer covering, folding in on itself) · **thalamus** · **basal ganglia** (a naming-rule breaker — they're really nuclei)"],
 ["Grouped as **tracts/pathways** — **messengers, not deciders**","Named subcortical regions: **corpus callosum** (bridge between hemispheres) · **internal capsule** (vertical band between thalamus and basal ganglia)"],
 C.blue,C.gold,C.lightBlue,C.lightGold));
k.push(bullet("**Organisation flips as you descend:** cerebrum — gray outside, white inside; brainstem — mixed; **spinal cord — gray inside, white outside**, because the cord is mostly a signal highway, not an integrator."));
k.push(detail(["Fiber type","Carries"],[
 ["**Commissural**","Hemisphere-to-hemisphere messages (corpus callosum)"],
 ["**Projection**","CNS ↔ periphery — descending motor from the precentral gyrus, ascending somatosensory to the postcentral gyrus"],
 ["**Association**","Cortex-to-cortex, nuclei-to-nuclei conversations"]],[2400,6960]));

k.push(h1("3. Embryological Divisions"));
k.push(detail(["Division","Subdivision","Structures"],[
 ["**Prosencephalon** (forebrain)","**Telencephalon** (outermost)","Hemispheres, cerebral cortex, subcortical white matter, basal ganglia"],
 ["","**Diencephalon** (between)","**Thalamus + hypothalamus**"],
 ["**Mesencephalon** (midbrain)","—","Develops independently — the midbrain"],
 ["**Rhombencephalon** (hindbrain — \"diamond brain,\" named partly for the 4th-ventricle space)","**Metencephalon** (\"beyond\")","**Pons + cerebellum**"],
 ["","**Myelencephalon** (\"spinal brain\")","**Medulla** — the junction with the cord"]],[3000,2500,3860]));

k.push(h1("4. The Six Lobes"));
k.push(detail(["Lobe","Primary cortex","Functions"],[
 ["**Frontal**","**Primary motor cortex — precentral gyrus**","Motor planning + attention, short-term memory, motivation, aspects of speech"],
 ["**Parietal**","**Primary somatosensory cortex — postcentral gyrus**","Somatosensory integration, visuospatial mapping, language processing"],
 ["**Temporal**","Primary auditory cortex","Auditory integration; shares language comprehension with parietal"],
 ["**Occipital**","Primary visual cortex","Visual perception"],
 ["**Insular** (hidden under the **operculum** of frontal/parietal/temporal)","—","**Visceral sensation including taste**; autonomic regulation"],
 ["**Limbic** (cingulate + parahippocampal gyri)","—","**Emotion, learning, memory** — fed by limbic-system members like the amygdala (fear) and hippocampus (memory)"]],[2400,3000,3960]));
k.push(bullet("**Landmark sulci:** the **central sulcus** separates frontal from parietal; the **lateral sulcus (Sylvian fissure)** separates temporal from both. Gyri = the ridges, sulci = the folds."));

k.push(h1("5. Lateralization, Broca and Wernicke"));
k.push(bullet("**Contralateral rule:** each hemisphere's primary cortices govern the **opposite side of the body** — left precentral gyrus moves the right side, right somatosensory cortex feels the left."));
k.push(compare("LEFT HEMISPHERE (dominant in ~90%)","RIGHT HEMISPHERE",
 ["**Broca's area** (frontal, anterior to precentral gyrus): the **analytical, articulation side of speech** — how to shape words","**Wernicke's area** (parietal/temporal): **language comprehension**"],
 ["Broca's unnamed cousin: the **creative side of speech** — sarcasm, emphasis, pacing","Wernicke's cousin: **analytical processing and spatial awareness**"],
 C.blue,C.purple,C.lightBlue,C.lightPurple));

k.push(h1("6. Deep Nuclei"));
k.push(detail(["Structure","Parts","Job"],[
 ["**Basal ganglia**","**Putamen · caudate nucleus · globus pallidus** (putamen + caudate = striatum; putamen + globus pallidus = lenticular nucleus)","**Motor planning and movement modulation**, in conversation with the primary motor cortex"],
 ["**Thalamus**","Left + right, bridged by the **interthalamic adhesion**","**The relay station** — nearly all projection/association fibers make a pit stop here to be routed (the big exception: **descending motor output skips it**)"],
 ["**Hypothalamus**","Stalk → **pituitary**, seated on the sella turcica","**Homeostatic control centre** — makes the hormones the pituitary releases"]],[2000,3600,3760]));

k.push(h1("7. Brainstem and Cerebellum"));
k.push(bullet("**Shared functions via the reticular formation** (a nuclei column through all three parts): alertness/consciousness, autonomic functions, motor coordination."));
k.push(detail(["Part","Specialised nuclei","Cranial nerves originating"],[
 ["**Midbrain**","**Pain modulation** (dampens ascending nociception), reflex movements, **dopamine production**","**III, IV**"],
 ["**Pons**","Doorway to the cerebellum; **respiratory centre that FINE-TUNES breathing rate**","**V** (only nerve straight off the pons); VI, VII, VIII at the **pontomedullary junction**"],
 ["**Medulla**","Respiratory groups that **SET the rate**; blood-pressure sensors modulating heart rhythm","**IX, X, XII**"]],[1500,4400,3460]));
k.push(bullet("**Cerebellum = movement coordination** — fine-tuning, precise timing, **error correction**, folding in proprioceptive and vestibular input. It talks to the brainstem through the **superior, middle, and inferior peduncles** (bundles of tracts)."));

k.push(h1("8. Ventricles, CSF, Meninges"));
k.push(bullet("**Ventricles:** two **lateral** (= first and second) → **third** (central) → **fourth** (between cerebellum and brainstem — the \"diamond\" of the rhombencephalon). They **produce and transport cerebrospinal fluid**, which cushions the CNS and exchanges nutrients and waste."));
k.push(detail(["Meningeal layer","Detail"],[
 ["**Dura mater**","Outermost; splits to enclose the big venous sinuses; folds into the **falx cerebri** (between hemispheres) and **tentorium cerebelli** (cerebrum over cerebellum)"],
 ["**Arachnoid mater**","Middle; beneath it the **subarachnoid space — where the CSF actually flows**"],
 ["**Pia mater**","Innermost, glued to the CNS surface"]],[2400,6960]));

k.push(h1("9. The Twelve Cranial Nerves"));
k.push(detail(["CN","Name","Origin","Exit","Function"],[
 ["**I**","Olfactory","**Forebrain** (not brainstem)","Cribriform foramina","Smell"],
 ["**II**","Optic","**Cerebrum** (not brainstem)","Optic canal","Vision (the X-shape = chiasm, saved for later courses)"],
 ["**III**","Oculomotor","Midbrain","SOF","Most eye muscles + **levator palpebrae superioris** (opens the eyelid)"],
 ["**IV**","Trochlear","Midbrain","SOF","**Superior oblique**"],
 ["**V**","Trigeminal","**Pons** (the only one)","V1 → SOF · V2 → rotundum · V3 → ovale","**Facial SENSATION** in three bands (ophthalmic, maxillary, mandibular) + V3 motor to **mastication**"],
 ["**VI**","Abducens","Pontomedullary junction","SOF","**Lateral rectus** (abducts the eye)"],
 ["**VII**","Facial","Pontomedullary junction","Internal acoustic meatus → out near mastoid/styloid","**Muscles of facial EXPRESSION** — no facial sensation"],
 ["**VIII**","Vestibulocochlear","Pontomedullary junction","Internal acoustic meatus — **stays in the temporal bone**","Hearing + balance"],
 ["**IX**","Glossopharyngeal","Medulla","Jugular foramen","Tongue/pharynx + **carotid sinus (baroreceptor) and carotid body (chemoreceptor)**"],
 ["**X**","Vagus (\"wandering\")","Medulla","Jugular foramen","**Parasympathetic rest-and-digest** to thorax and abdomen down to ~⅔ of the large intestine; larynx; pharynx assist"],
 ["**XI**","Spinal accessory","**Cervical cord C1–C6** (directly off the cord, not the roots) + a medullary twig","**Enters** via foramen magnum, exits via jugular foramen","**Trapezius + SCM**"],
 ["**XII**","Hypoglossal","Medulla","Hypoglossal canal","Tongue muscles (loops around the mandible line)"]],[700,1900,2200,2200,2360]));
k.push(tip("Two study anchors from the lecture itself: (1) pontomedullary junction = VI, VII, VIII; (2) the three non-brainstem nerves are I (forebrain), II (cerebrum), XI (cervical cord). Everything else falls out of the table."));

k.push(...glossary("Topic 10.2 — Quick-Reference Glossary",[
 ["Nuclei vs ganglia","Gray-matter groups in CNS vs PNS (basal ganglia = the exception)"],
 ["Corpus callosum / internal capsule","Inter-hemispheric bridge / thalamus-basal-ganglia band"],
 ["Precentral / postcentral gyrus","Primary motor / primary somatosensory cortex"],
 ["Operculum","Frontal-parietal-temporal cover over the insula"],
 ["Broca / Wernicke","Speech articulation (frontal, left) / language comprehension (parietal-temporal)"],
 ["Lateralization","Each hemisphere runs the contralateral body"],
 ["Striatum / lenticular nucleus","Putamen+caudate / putamen+globus pallidus"],
 ["Thalamus","The relay station (motor output skips it)"],
 ["Reticular formation","Shared brainstem nuclei: consciousness, ANS, coordination"],
 ["Peduncles","Superior/middle/inferior tract bundles to the cerebellum"],
 ["Ventricles","Lateral ×2 → third → fourth; make and move CSF"],
 ["Falx cerebri / tentorium cerebelli","Dura folds between hemispheres / over the cerebellum"],
 ["Subarachnoid space","Where CSF flows"],
 ["Pontomedullary junction","Origin of CN VI, VII, VIII"]]));
k.push(pageBreak());

/* ─────────────────────────── TOPIC 10.3 ─────────────────────────── */
k.push(banner("TOPIC 10.3","Cranial Blood Flow — Arteries, the Circle of Willis, Veins, and What Goes Wrong"));
k.push(spacer());

k.push(h1("1. Getting Blood to the Head"));
k.push(bullet("**Arch of the aorta → three vessels:** right side gets the **brachiocephalic trunk** (→ right common carotid + right subclavian); the **left common carotid and left subclavian come straight off the arch.** Each **subclavian gives the vertebral artery**, which climbs the **transverse foramina C6→C1** and enters via the **foramen magnum** (posterior supply). Each **common carotid splits at ~C3–C4**: the **external carotid** stays outside for the face; the **internal carotid (ICA)** enters via the **carotid canal** (anterior supply)."));
k.push(detail(["External carotid branch","Supplies"],[
 ["**Facial**","Dives medial to the mandible, wraps out across the cheek to the lateral nose"],
 ["**Occipital**","Back of the head"],
 ["**Posterior auricular**","Behind the ear"],
 ["**Superficial temporal**","The whole temporal-fossa region (terminal branch)"],
 ["**Transverse facial**","Off the superficial temporal, across the face"]],[3100,6260]));

k.push(h1("2. The Circle of Willis"));
k.push(detail(["Vessel","Story"],[
 ["**ICA → ACA ×2 + ACOM ×1**","Anterior cerebral arteries, bridged by the single anterior communicating artery"],
 ["**ICA → MCA ×2**","The massive lateral middle cerebral arteries"],
 ["**Vertebrals → anterior spinal ×1 · PICA ×2 (→ posterior spinals ×2)**","Posterior inferior cerebellar arteries"],
 ["**Vertebrals merge → BASILAR**","Supplies the **pons + rest of the cerebellum** via AICA ×2, pontine branches, superior cerebellars ×2"],
 ["**Basilar → PCA ×2**","Posterior cerebral arteries"],
 ["**PCOM ×2**","Bridge each PCA to each ICA — closing the ring"]],[3300,6060]));
k.push(tnote("Watch the C in every abbreviation: PICA/AICA are cereBELLar, ACA/MCA/PCA are cereBRal. The lecture flags this exact trap."));
k.push(detail(["Territory","Artery","So a stroke there costs…"],[
 ["**Medial hemisphere** incl. medial pre/postcentral gyri","**ACA**","**The LEGS and feet** — the medial cortex maps the distal body"],
 ["**Lateral hemisphere** — most of the lobes' outer surface","**MCA**","Face/arm motor and sensory, language areas (left), spatial awareness (right)"],
 ["**Occipital / posteromedial**","**PCA**","Vision — **cortical blindness** with intact eyes and optic nerves"],
 ["**Brainstem**","**Basilar**","**Locked-in syndrome** — cerebrum awake, brainstem offline"],
 ["**Cerebellum**","SCA / AICA / PICA","**Ataxia** — the \"drunken gait\""]],[2900,1600,4860]));
k.push(infoBox("Stroke (CVA) by lobe — the functional summary the lecture builds",[
 "**Frontal:** contralateral motor loss, motivation/personality, motor speech (Broca)",
 "**Parietal:** contralateral sensory integration, visuospatial mapping, language comprehension",
 "**Temporal:** auditory integration + comprehension",
 "**Occipital:** cortical blindness",
 "**Insular:** taste, autonomic and vestibular disruption",
 "**Limbic:** emotion, learning, memory",
 "**Left-hemisphere strokes** hit speech/communication; **right-hemisphere strokes** hit spatial awareness and emotional regulation — and patients often **don't know they're impaired**"],C.red,C.lightRed));

k.push(h1("3. Venous Drainage"));
k.push(bullet("**Veins have valves; sinuses don't** — sinuses are wide dural channels (structurally part of the meninges) that veins drain into. **Two brachiocephalic veins** (unlike the single arterial trunk) feed the SVC; each receives the **internal jugular** — which drains **both** neuro- and viscerocranium — while the smaller **external jugular** drains into the subclavian."));
k.push(detail(["Drainage route","Path"],[
 ["**Outer cerebrum**","Superior cerebral veins (along the central sulcus) → **superior sagittal sinus**; superficial middle cerebral + inferior anastomotic veins (along the lateral sulcus) → **transverse sinus**"],
 ["**Inner cerebrum**","Anterior cerebral vein → **basal vein** (drains the brainstem, cousin of the basilar) + **inferior sagittal sinus** → **straight sinus**"],
 ["**Out of the skull**","Everything merges → **transverse → sigmoid sinus** (S-shaped, grooving the temporal bone) → **jugular foramen → internal jugular → brachiocephalic → SVC → right atrium**"]],[2300,7060]));

k.push(h1("4. Bleeds — Hematomas and Hemorrhages"));
k.push(detail(["Bleed","Between","Character"],[
 ["**Epidural hematoma**","Skull and periosteal dura (a **potential space**)","Localized, clots fast — often sinus/arterial blood after fracture"],
 ["**Subdural hematoma**","Meningeal dura and arachnoid (potential space)","**Torn bridging veins** from shearing (concussions); localized because the layers adhere tightly"],
 ["**Subarachnoid hemorrhage**","The **real** (already-open) subarachnoid space","**Mass bleeding** — usually branches of the cerebral **arteries**"],
 ["**Intracerebral hemorrhage**","Within brain tissue","Rupture of a major cerebral artery — the most dangerous"]],[2500,3300,3560]));
k.push(tip("Space logic beats memorising: potential spaces (epi- and subdural) contain bleeds into hematomas; the one true pre-existing space (subarachnoid) lets blood spread into a hemorrhage. That single idea reconstructs the whole table."));

k.push(...glossary("Topic 10.3 — Quick-Reference Glossary",[
 ["Brachiocephalic trunk","Right side only (arteries); veins have one per side"],
 ["Vertebral artery route","Subclavian → transverse foramina C6–C1 → foramen magnum"],
 ["ICA vs ECA","Internal enters the carotid canal for the brain; external stays out for the face"],
 ["Circle of Willis","ICAs, ACAs+ACOM, MCAs, PCAs+PCOMs — the ring anastomosis"],
 ["Basilar artery","Vertebral merger; pons + cerebellum + PCAs"],
 ["PICA/AICA/SCA","The three cerebellar arteries"],
 ["Cortical blindness","PCA/occipital stroke with working eyes"],
 ["Locked-in syndrome","Basilar stroke — conscious cerebrum, silent brainstem"],
 ["Sinus vs vein","Valveless dural channel vs valved vessel"],
 ["Bridging veins","Arachnoid-to-dura connectors; shear → subdural hematoma"],
 ["Sigmoid sinus","S-shaped path to the jugular foramen"],
 ["Carotid sinus / body","Baroreceptor / chemoreceptor at the carotid split (CN IX)"]]));
k.push(pageBreak());

/* ─────────────────────────── TOPIC 10.4 ─────────────────────────── */
k.push(banner("TOPIC 10.4","Viscerocranium and Neck — Eye, Face, TMJ, Cervical Plexus"));
k.push(spacer());

k.push(h1("1. Extraocular Anatomy"));
k.push(detail(["Movement","Axis","Muscle","Nerve"],[
 ["**Adduction** (toward nose / nasal field)","Vertical","**Medial rectus**","III"],
 ["**Abduction** (toward ear / temporal field)","Vertical","**Lateral rectus**","**VI — abducens**"],
 ["**Elevation**","Transverse","**Superior rectus**","III"],
 ["**Depression**","Transverse","**Inferior rectus**","III"],
 ["**Intorsion** (+ depression assist)","A-P","**Superior oblique** (the slingshot)","**IV — trochlear**"],
 ["**Extorsion** (+ elevation assist)","A-P","**Inferior oblique**","III"],
 ["**Opens the eyelid**","—","**Levator palpebrae superioris**","III"]],[3000,1200,2700,2460]));
k.push(tip("The classic mnemonic fits the table: LR6 SO4, everything else 3 — lateral rectus by VI, superior oblique by IV, the rest (including the eyelid opener) by the oculomotor."));

k.push(h1("2. Facial Expression — CN VII's Story"));
k.push(detail(["Region","Standout muscle","Does"],[
 ["**Frontal**","**Occipitofrontalis** (epicranius)","Raises the eyebrows"],
 ["**Zygomatic**","**Zygomaticus major + minor**","The smile"],
 ["**Buccal**","**Buccinator** (deep to zygomaticus)","Cheek compression"],
 ["**Orbital**","**Orbicularis oculi**","**Closes** the eyelids (opening was CN III's levator)"],
 ["**Oral**","**Orbicularis oris**","Puckers the lips"]],[2000,3300,4060]));
k.push(tnote("Division of labour to keep straight forever: facial nerve (VII) = facial EXPRESSION, trigeminal (V) = facial SENSATION — and V3 alone adds mastication motor."));

k.push(h1("3. TMJ and Mastication — CN V3's Story"));
k.push(bullet("**Trigeminal dermatome logic:** the face isn't mapped by spinal segments — **V1 ophthalmic** takes forehead/eye/nose-bridge, **V2 maxillary** the cheek, **V3 mandibular** the jaw strip in front of the ear."));
k.push(detail(["TMJ element","Detail"],[
 ["**Ligaments**","**Lateral TMJ ligament** (stops the condyle slipping from the fossa) · stylomandibular · sphenomandibular"],
 ["**Articular disc**","The key structure — articulates on BOTH surfaces, creating **two compartments**, and stays interposed throughout motion"],
 ["**Superior compartment**","**Gliding (arthrodial):** protraction/retraction + lateral **excursion**"],
 ["**Inferior compartment**","**Hinge (ginglymus):** opening/closing"],
 ["**Classification**","**Ginglymoarthrodial** — hinge + glide in one capsule"]],[2400,6960]));
k.push(infoBox("Opening and closing, by the numbers",[
 "**Full opening ≈ 40° (40–60 mm between the teeth)**",
 "**First 20–25° / 20–25 mm = pure hinge** (inferior compartment)",
 "**The rest requires anterior GLIDE (protraction)** of the condyle in the superior compartment",
 "**Closing reverses it: retract first (15–20°), then hinge shut**",
 "The counterbalance: as the lateral pterygoids protract to open, the **temporalis brakes with retraction** — and vice versa on closing"],C.blue,C.lightBlue));
k.push(detail(["Mastication muscle","Attachments","Actions"],[
 ["**Temporalis**","Temporal fossa → **coronoid process**, deep to the zygomatic arch (through the infratemporal fossa)","**Elevation + retraction**"],
 ["**Masseter**","Zygomatic bone/arch → inferior ramus","**Elevation**"],
 ["**Medial pterygoid**","MEDIAL side of the lateral pterygoid plate → medial mandible","Elevation; contralateral excursion"],
 ["**Lateral pterygoid**","LATERAL side of the lateral pterygoid plate → condyle/disc","**Protraction — and the ONLY mastication muscle aiding depression**; contralateral excursion"]],[2200,3800,3360]));
k.push(bullet("**Lateral excursion** (e.g., to the left) = **contralateral** right pterygoids pushing across + **ipsilateral** left temporalis and masseter pulling home."));

k.push(h1("4. Hyoid Muscles"));
k.push(compare("SUPRAHYOIDS — skull → hyoid","INFRAHYOIDS — hyoid → sternum/clavicle",
 ["**Stylohyoid · mylohyoid · geniohyoid · digastric** (anterior + posterior bellies)","**Primary DEPRESSORS of the mandible** — they, not the pterygoids, actually open the jaw"],
 ["**Sternohyoid · sternothyroid · thyrohyoid · omohyoid** (superior + inferior bellies)","**Stabilise the hyoid** while the suprahyoids pull; depress the hyoid in swallowing. The **sternothyroid** is the outlier — attaches to the thyroid cartilage (laryngeal prominence, the Adam's apple) and stabilises the **larynx**"],
 C.teal,C.gold,C.lightTeal,C.lightGold));

k.push(h1("5. The Cervical Plexus"));
k.push(bullet("**Anterior rami C1–C5**, sitting atop the brachial plexus (C5 works in both). Its famous loop, **the ansa cervicalis (C1–C3)**, supplies **three of the four infrahyoids** (sternohyoid, sternothyroid, both omohyoid bellies)."));
k.push(detail(["Motor path","Supplies"],[
 ["**C1 fibers hitchhiking on the hypoglossal**","**Geniohyoid + thyrohyoid** (CN XII carries but does not own these fibers)"],
 ["**Ansa cervicalis (C1–C3)**","Sternohyoid, sternothyroid, omohyoid ×2"],
 ["**C3–C4–C5 → PHRENIC NERVE**","**The diaphragm — “C3, 4, 5 keep the diaphragm alive”**"],
 ["*(Not cervical plexus)*","Digastric, stylohyoid, mylohyoid — supplied elsewhere (CN V3 and VII territory)"]],[3300,6060]));
k.push(bullet("**Four sensory branches**, all surfacing at the posterior border of the SCM: **lesser occipital (C2)** · **great auricular** · **transverse cervical** · **supraclavicular.**"));

k.push(h1("6. The Two Case Studies — the Module's Self-Test"));
k.push(infoBox("Case 1 — 76-year-old, acute stroke",[
 "Worst-ever headache · **left visual field gone** · memory affected · **bumping into furniture turning left** · eyes MOVE normally · comprehension, logic, sensation and motor all intact",
 "**The reasoning:** intact eye movement rules out CN III/IV/VI; intact motor/sensory spares MCA/ACA territory. Left-field loss + left-side neglect + memory → **right occipital (± temporal-limbic) territory → PCA stroke** — cortical visual loss, not an eye problem",
 "The follow-ups walk the whole module: trace heart → arch → vertebral → basilar → PCA; coordination deficits would implicate the cerebellar arteries; venous return goes cerebral veins → sinuses → sigmoid → internal jugular, with sinuses living between dural layers"],C.green,C.lightGreen));
k.push(infoBox("Case 2 — 40-year-old, 23-foot fall, head + C-spine trauma",[
 "**Hoarseness + swallowing difficulty + broken autonomic HR/BP control + lost taste + weak right shrug**, with damage at **right C3–C4**",
 "**The mapping: CN X** (hoarseness — larynx; autonomic resetting) · **CN IX** (taste, swallowing, carotid sinus/body reflexes) · **CN XI** (trapezius shrug) — the jugular-foramen trio",
 "**C3–C4 roots** put the **PHRENIC NERVE** — breathing — on the line, the case's one \"major life function\"",
 "Sensory: lesser occipital / great auricular / transverse cervical / supraclavicular territories; root damage knocks out everything downstream, single-branch damage only its patch",
 "Jaw trouble follows: C1-via-hypoglossal (geniohyoid) and suprahyoid mechanics — then the TMJ groups re-derive the ginglymoarthrodial story and V3 vs VII division of labour"],C.green,C.lightGreen));

k.push(...glossary("Topic 10.4 — Quick-Reference Glossary",[
 ["LR6 SO4 rest 3","Extraocular innervation rule"],
 ["Levator palpebrae superioris","Opens the eyelid (III); orbicularis oculi closes it (VII)"],
 ["Occipitofrontalis / buccinator / orbicularis oris","Brow-raiser / cheek muscle / lip-puckerer"],
 ["V1 · V2 · V3","Ophthalmic (SOF) · maxillary (rotundum) · mandibular (ovale)"],
 ["Ginglymoarthrodial","Hinge (inferior compartment) + glide (superior compartment)"],
 ["Articular disc","Two-sided TMJ articulation, always interposed"],
 ["40°/40–60 mm","Full opening; first 20–25 is hinge, the rest is glide"],
 ["Lateral pterygoid","Protractor and the sole mastication-muscle depressor"],
 ["Suprahyoids / infrahyoids","Jaw openers / hyoid stabilisers (sternothyroid → larynx)"],
 ["Ansa cervicalis","C1–C3 loop → 3 of 4 infrahyoids"],
 ["Phrenic nerve","C3–C5 — keeps the diaphragm alive"],
 ["Cervical plexus sensory four","Lesser occipital · great auricular · transverse cervical · supraclavicular"]]));

build(k,"/home/claude/out/Module10_HeadAndNeck_StudyNotes.docx");
