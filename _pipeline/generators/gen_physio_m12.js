const L = require('/home/claude/notes_lib.js');
const {C,h1,h2,body,bullet,tnote,tip,compare,detail,infoBox,banner,glossary,fig,pageBreak,spacer,cover,build,linkBox} = L;
const E = "/home/claude/emb36/";
const k=[];

k.push(...cover("Human Physiology (DPTH 6131)","Module 12: Hematology and Immunology",
 "Topics: 12.1 Blood Composition • 12.2 Hemostasis (the clotting cascade) • 12.3 Hematic Pathology • 12.4 Immune Pathology • Sync: the AJ leukemia case",
 ["Lectures by Dr. Evan Andreyo; watch in your own Canvas module",
  "The clotting cascade compresses to one chant: prothrombin activator → prothrombin → thrombin → fibrinogen → fibrin. Learn the chant, the rest follows",
  "Anemia naming is just Latin: micro/macro/normo (size) + hypo/normo (chromic = color) + -cytic (cell)",
  "The sync case (AJ, 42 — fatigue, nosebleeds, bruising, pallor, recurrent infections) is worked at the end: it ties hematopoiesis, leukemia, chemo, and clotting into one story"]));

/* ─────────────────────────── 12.1 BLOOD COMPOSITION ─────────────────────────── */
k.push(banner("TOPIC 12.1","Blood Composition"));
k.push(spacer());
k.push(bullet("Spin blood in a centrifuge and it layers by density: **plasma** on top (~55% — water plus glucose, lipids, salts, proteins, O₂/CO₂), a thin buffy coat of **white blood cells + platelets**, and **red blood cells** at the bottom (~45% — the **hematocrit**)."));
k.push(h1("1. Hematopoiesis — one stem cell, every blood cell"));
k.push(body("All blood cells descend from the **pluripotent hematopoietic stem cell** in bone marrow (fetal: yolk sac; childhood: long bones; adults: mostly vertebrae, sternum, ribs). Two family branches: **myeloid** → red blood cells, several white-cell types, and **megakaryocytes** (giant cells that fragment into platelets); **lymphoid** → **T cells and B cells**."));
k.push(detail(["Cell","Job","Details to keep"],[
 ["Red blood cells (erythrocytes)","Carry oxygen lungs → tissues via **hemoglobin** (binds O₂ reversibly — grabs in high-O₂ environments, releases in low)","Flexible enough to squeeze through capillaries; built from **iron + B12 + folic acid**; live ~**120 days**, recycled by the spleen (\"the scrap yard\")"],
 ["Platelets (thrombocytes)","Clotting, inflammation, healing","Nucleus-free megakaryocyte fragments — \"traveling piñatas\" of histamine, coagulation proteins, cytokines, growth factors"],
 ["White blood cells (leukocytes)","Defense — mobile units that hunt infection by **chemotaxis**","Made in marrow AND lymph tissue; myeloid types + lymphoid T/B cells"]],[22,32,46]));
k.push(bullet("**Erythropoietin (EPO):** the kidneys sense low oxygen in the blood filtering through them → release EPO → bone marrow steps up red-cell production. (Erythro = red cell, -poiesis = to make.)"));
k.push(...fig(E+"fig_marrow.png",2028,1153,"Where blood is made across the lifespan: yolk sac → liver → long bones → (by adulthood) vertebrae, sternum, ribs — and marrow cellularity falls with age (12.1 Blood Composition deck)"));

/* ─────────────────────────── 12.2 HEMOSTASIS ─────────────────────────── */
k.push(banner("TOPIC 12.2","Hemostasis — Stop, Hold, and Dissolve"));
k.push(spacer());
k.push(h1("2. The four steps of stopping a bleed"));
k.push(bullet("**1. Vasoconstriction** — immediate smooth-muscle clamp-down at the injury (vasodilation for inflammation comes AFTER the clot)."));
k.push(bullet("**2. Platelet plug** — platelets touching damaged endothelium swell, deform, turn sticky, and dump granules that recruit more platelets → **aggregation** into a loose plug. Fine for small injuries."));
k.push(bullet("**3. Fibrin clot** — the rebar in the concrete. Fibrin threads polymerize into chains that enmesh and reinforce the plug (seconds to start; a formed clot in ~3–6 min; bigger injury = bigger response). **Clot retraction** then shrinks it snug."));
k.push(bullet("**4. Fibrous organization/healing** grows through the clot."));
k.push(infoBox("The cascade, PT-sized",[
 "Injury releases **tissue factor** (the extrinsic trigger; intrinsic triggers act within the vessel) → forms **prothrombin activator**",
 "Prothrombin activator converts free-floating **prothrombin → thrombin**",
 "Thrombin converts free-floating **fibrinogen → fibrin**, which polymerizes into the mesh",
 "This is a **positive feedback** loop — it amplifies until stopped. Lab check: prothrombin time, reported as **INR** (know what the acronym is; look up norms when you see it)"],C.blue,C.lightBlue));
k.push(...fig(E+"fig_clotting.png",2028,1153,"The cascade in one picture: tissue factor → prothrombin activator → prothrombin→thrombin → fibrinogen→fibrin, polymerizing over the platelet plug (12.2 Hemostasis deck)"));
k.push(h1("3. Stopping and dissolving clots"));
k.push(bullet("**Why we don't clot everywhere:** smooth endothelium gives nothing to stick to; anticoagulants outnumber coagulants in circulating blood; fibrin itself soaks up thrombin locally; **thrombomodulin** on healthy vessel walls binds stray thrombin; and **antithrombin III + heparin** (yes, the drug) shut thrombin down fast."));
k.push(bullet("**Fibrinolysis:** tissue releases **tPA (tissue plasminogen activator)** → converts **plasminogen → plasmin** → plasmin \"Pac-Mans\" the clot apart. tPA is the drug given for ischemic stroke for exactly this reason."));

/* ─────────────────────────── 12.3 HEMATIC PATHOLOGY ─────────────────────────── */
k.push(pageBreak());
k.push(banner("TOPIC 12.3","Hematic Pathology — Anemia, Polycythemia, Clotting & Bleeding Disorders"));
k.push(spacer());
k.push(h1("4. Anemia — reduced oxygen-carrying capacity"));
k.push(body("Shared symptoms across all types: **fatigue, pallor, shortness of breath, weakness**. The names decode themselves: size (micro/macro/normo-cytic) + color = iron/hemoglobin loading (hypo/normo-chromic)."));
k.push(detail(["Type","Cells look like","Cause & notes"],[
 ["Normocytic normochromic","Normal cells, too few","Blood loss"],
 ["Iron-deficiency (microcytic hypochromic)","Small + pale","Low iron intake, chronic bleeding, or raised demand (pregnancy, growth); more common in females. Fix the iron (diet/supplement)"],
 ["Megaloblastic (macrocytic normochromic)","Oversized, normally colored","**B12 or folic acid** deficiency breaks cell production (affects white cells too). **Pernicious anemia** = the B12 subtype where the problem is missing **gastric intrinsic factor**, not intake"],
 ["Sickle cell","Sickled (abnormal shape)","Genetic hemoglobin defect; cells jam in vessels (worse in low O₂), live ~20 days instead of 120 → ischemia; most common in people of African descent, presenting by age 1–2"]],[22,22,56]));
k.push(h1("5. Polycythemia — too many red cells"));
k.push(bullet("Hematocrit rising to ~50–55%+ thickens the blood. **Primary (polycythemia vera):** genetic, uncontrolled red-cell production. **Secondary:** chronic low oxygen (altitude, chronic lung disease) driving EPO. Consequences: hypertension, clot risk, ruddy complexion, headaches."));
k.push(h1("6. Clotting and bleeding disorders"));
k.push(compare("CLOTTING TOO MUCH","BLEEDING TOO MUCH",
 ["**Thrombus** = a pathological clot — forms on roughened walls (arteriosclerosis) or in slowed flow (inactivity!)",
  "Body responses: lysis, rerouting flow, slow breakdown — but a fragment can break free as an **embolus**",
  "Where it lodges decides the disaster: coronary artery → MI; lungs → pulmonary embolism; brain → stroke; limbs → infarct",
  "**PT red flags: unexplained shortness of breath, coughing blood, calf pain** — the DVT/PE picture"],
 ["**Thrombocytopenia** — too few platelets (megakaryocyte failure: leukemia, medications, infection) → easy bruising, bleeding; may need platelet transfusion",
  "**Hemophilia** — congenital missing clotting factors: the cascade can't run → uncontrolled post-trauma bleeding",
  "Both change your treatment plan: soft-tissue work, falls, and vigorous loading all carry bleeding risk"],
 C.red,C.blue,C.lightRed,C.lightBlue));

/* ─────────────────────────── 12.4 IMMUNE PATHOLOGY ─────────────────────────── */
k.push(banner("TOPIC 12.4","Immune Pathology"));
k.push(spacer());
k.push(detail(["Category","What's happening","Examples & notes"],[
 ["Hypersensitivity","Exaggerated response to a harmless antigen: first exposure sensitizes (arms mast cells with antibodies), second exposure detonates — **histamine** floods out (hence swelling; hence ANTI-histamines)","**Anaphylaxis** (type 1 — bee stings, peanuts); allergic disease broadly; lupus sits in the hypersensitivity family too"],
 ["Autoimmunity","The immune system antigen-tags the body's OWN tissue","Systemic: lupus, rheumatoid arthritis (synovium). Organ-specific: multiple sclerosis (CNS), myasthenia gravis (neuromuscular junction)"],
 ["Immunodeficiency","Underpowered defense — **leukopenia** = low white cells","Primary (congenital) or secondary: chronic infection, cancer, metabolic disease, **chemotherapy**, HIV/AIDS"],
 ["Leukemia","Malignant cells infiltrate **bone marrow**; abnormal white cells multiply uncontrollably and crowd out normal production","Complications = anemia + thrombocytopenia + infection-prone (the marrow can't make what it should). Treatable — typically chemotherapy"],
 ["Lymphoma","Malignancy of the **lymphatic system** — lymph nodes (the filtration + T/B-cell factories) infiltrated","Node enlargement, poor lymphocyte production, anemia; classified Hodgkin vs non-Hodgkin"]],[18,44,38]));

/* ─────────────────────────── SYNC CASE ─────────────────────────── */
k.push(pageBreak());
k.push(banner("SYNC SESSION","The AJ Case, Worked"));
k.push(spacer());
k.push(body("**AJ, 42, teacher:** three weeks of fatigue, frequent nosebleeds, easy bruising, pallor, exertional shortness of breath, recurrent sinus infections. Every symptom maps to one failing organ: the bone marrow."));
k.push(h1("Breakout 1 — the physiology"));
k.push(bullet("**Differentiation:** pluripotent hematopoietic stem cell → myeloid line (RBCs, platelets via megakaryocytes, granulocyte white cells) and lymphoid line (T cells, B cells)."));
k.push(bullet("**White cells:** myeloid types (neutrophils, monocytes/macrophages, eosinophils, basophils) run the fast, non-specific **innate** response; lymphoid **B cells** (antibodies) and **T cells** (targeted attack + memory) run the **adaptive** response."));
k.push(bullet("**Erythropoietin:** kidney-sensed hypoxia → EPO → marrow makes more red cells."));
k.push(bullet("**Leukemia's effect:** malignant white-cell clones fill the marrow → normal production collapses → **anemia** (fatigue, pallor, dyspnea), **thrombocytopenia** (nosebleeds, bruising), **functional leukopenia** (recurrent infections) — AJ's exact triad."));
k.push(h1("Breakout 2 — function and PT"));
k.push(bullet("Impact: fatigue and anemia cap exercise tolerance; low platelets make bruising/bleeding a real treatment constraint; infection risk demands hygiene precautions. Monitor labs (hemoglobin, platelets, white count) and dose exercise accordingly — light-moderate activity helps fatigue and function, but check platelet thresholds before resistance work."));
k.push(bullet("**Chemotherapy** kills rapidly dividing cells — malignant ones, but also marrow, gut lining, hair follicles. Expect immunosuppression (neutropenia): infection precautions, scheduling around nadir days, and energy conservation are part of the plan of care."));
k.push(h1("Breakout 3 — clotting"));
k.push(bullet("**Normal cascade:** vasoconstriction → platelet plug (adhesion, granule release, aggregation) → tissue factor → prothrombin activator → prothrombin→thrombin → fibrinogen→fibrin mesh → retraction, then tPA/plasmin cleanup."));
k.push(bullet("**Pathological thrombus:** rough endothelium (arteriosclerosis) or sluggish flow (immobility, bed rest — relevant to every hospitalized patient you'll treat) lets the cascade fire without an injury. A fragment breaking loose = **embolus** — to the lungs (PE), brain (stroke), or heart (MI). This is why early mobility is a PT intervention with mortality stakes."));

k.push(...glossary("Module 12 — Quick-Reference Glossary",[
 ["Hematopoiesis","Blood-cell manufacture from marrow stem cells (myeloid + lymphoid lines)"],
 ["Hemoglobin","The iron-built O₂ shuttle inside red cells; needs iron, B12, folic acid"],
 ["Erythropoietin","Kidney hormone commanding red-cell production when oxygen runs low"],
 ["Hematocrit","Cell fraction of blood volume (~45%; polycythemia at 50–55%+)"],
 ["Prothrombin → thrombin → fibrin","The cascade's spine (fibrinogen is fibrin's inactive precursor)"],
 ["INR / prothrombin time","How fast the patient clots — check it before aggressive intervention"],
 ["Antithrombin III + heparin","The thrombin off-switch (and the anticoagulant drug it explains)"],
 ["tPA → plasmin","Clot demolition — and the ischemic-stroke drug"],
 ["Pernicious anemia","B12 deficiency from missing gastric intrinsic factor"],
 ["Thrombus vs embolus","Clot in place vs clot on the move"],
 ["Leukemia vs lymphoma","Marrow malignancy vs lymphatic-system malignancy"]]));

build(k,"/home/claude/out/Module12_HematologyImmunology_StudyNotes.docx");
