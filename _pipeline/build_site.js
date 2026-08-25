// build_site.js — runs every gen_*.js through notes_web.js and emits a static site.
const fs   = require('fs');
const path = require('path');

const GEN_DIR = '/home/claude';
const OUT     = '/home/claude/site/dist';
const WEBLIB  = '/home/claude/site/notes_web.js';

// ---------------------------------------------------------------- course map
const B = require('./brand.js');

const COURSES = {
  '6111': {name:'Human Anatomy',                 slug:'human-anatomy',        term:'Trimester 1', mini:'Mini-mester 1.1', drive:'1jyJBZDHX4cgfDC52dO7-p3hNN0zpThu0', order:1,
           dept:'DPTH 6111', staff:'', total:13, next:'every module with notes is written',
           blurb:'Regional anatomy from the pelvis down, then back, trunk, head and upper limb. Complete.'},
  '6131': {name:'Human Physiology',              slug:'human-physiology',     term:'Trimester 1', mini:'Mini-mester 1.1', drive:'1cBHqgnIRz_PP2heIGYRwgLQIJD5BT2Kc', order:2,
           dept:'DPTH 6131', staff:'', total:12, next:'every module with notes is written',
           blurb:'Cell to system: integumentary, cardiovascular, respiratory, neuromuscular, MSK, endocrine, GI, renal and reproductive. Complete.'},
  '6211': {name:'Physical Therapy Fundamentals', slug:'pt-fundamentals',      term:'Trimester 1', mini:'Mini-mester 1.1', drive:'1j9eFrqSQvy_I81CvvPcFEtpu7DqzIvVA', order:3,
           dept:'DPTH 6211', staff:'Shepherd / Bartley', total:7, next:'every module with notes is written',
           blurb:'The hands-on core: vitals, transfers, gait and devices, ROM, MMT, documentation and the ADA. Complete.'},
  '6221': {name:'Movement Science',              slug:'movement-science',     term:'Trimester 1', mini:'Mini-mester 1.1', drive:'1uyDFSzcmclB_6gUS7Q9ETbWNCFuORuEt', order:4,
           dept:'DPTH 6221', staff:'Perry / Footer / Mallini', total:6, next:'every module with notes is written',
           blurb:'How to watch movement and say what is wrong with it — ICF, task analysis, gait, and motor learning. Complete.'},
  '6811': {name:'Professional Competencies I',   slug:'professional-competencies-i', term:'Trimester 1', mini:'Trimester-long', drive:'11vQptZ4rtACOU2UqTkagg6G2ZTLGHDZJ', order:5,
           dept:'DPTH 6811', staff:'', total:12, next:'communication, emotional intelligence, resilience, accountability still to come',
           blurb:'What it means to be a PT: scope, ethics, the interprofessional team, and how to study for this program.'},
  '6231': {name:'Therapeutic Interventions I',   slug:'therapeutic-interventions-i', term:'Trimester 1', mini:'Mini-mester 1.2', drive:'1mkkNBHXHPxndDPoKhmUDE2TUes3spVGL', order:6,
           dept:'DPTH 6231', staff:'', total:6, next:'every module with notes is written',
           blurb:'Biomechanics, muscle and tissue mechanics, exercise prescription, joint mechanics and manual therapy. Complete.'},
  '6311': {name:'Evidence Based Practice I',     slug:'evidence-based-practice-i', term:'Trimester 1', mini:'Mini-mester 1.2', drive:'1sz4o8AvGkZ7RLW0dCuhy6bZBH6aYzIWS', order:7,
           dept:'DPTH 6311', staff:'Castle / Litmer / Grimes / Koppenhaver', total:6, next:'every module with notes is written',
           blurb:'Asking the question, finding the evidence, appraising it with PEDro and CASP, and communicating what you found. Complete.'},
};

// Courses with no note pages yet — shown so the roadmap is visible, not clickable.
const ROADMAP = [
  {term:'Trimester 2', name:'MSK I · Ther Int II · Pharm · Clinical Neuro', dept:'Mini-mester 2.1',
   meta:'Sources sorted · notes before January', pill:'later', label:'COMING'},
  {term:'Trimester 2', name:'Integrated Practice Mgmt · MSK II', dept:'Mini-mester 2.2',
   meta:'Sources sorted', pill:'later', label:'COMING'},
  {term:'Trimester 3', name:'NMP I–II · MSK III–IV · Cardiopulmonary', dept:'Mini-mesters 3.1–3.2',
   meta:'Largely written already — being standardized', pill:'sources', label:'SOURCES READY'},
  {term:'Trimester 3', name:'Pediatrics', dept:'Mini-mester 3.2',
   meta:'No source materials available for this course', pill:'none', label:'NOT COVERED'},
];
const TERMS = [
  ['Trimester 1', 'your first 15 weeks · Aug–Dec'],
  ['Trimester 2', 'spring · Jan–Apr'],
  ['Trimester 3', 'summer · May–Aug'],
];
const DRIVE_ROOT = '1UH2MQSjjOHp9bkhaiQhKZhbZvVTkRd_o';
const driveUrl = id => `https://drive.google.com/drive/folders/${id}`;

// modules that exist in the course but produce no study notes
const NON_NOTE = {
  '6211': {6:'Lab Immersion'},
  '6221': {6:'Lab Immersion', 8:'Final Exam'},
  '6111': {6:'Lab Immersion'},
  '6131': {6:'Lab Immersion', 7:'Mid-Term Exam'},
  '6811': {6:'Lab Immersion', 8:'Holiday Week', 15:'Clinical Education Items Due', 16:'Lab Immersion'},
  '6231': {7:'Lab Immersion', 8:'Final Examination'},
  '6311': {7:'Group Presentations'},
};

const esc = s => String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");

// ------------------------------------------------------------- run generators
function collect(){
  const gens = fs.readdirSync(GEN_DIR).filter(f=>/^gen_.*\.js$/.test(f)).sort();
  const pages = [], skipped = [];
  const tmpDir = '/tmp/genweb'; fs.mkdirSync(tmpDir,{recursive:true});

  for (const g of gens){
    const src = fs.readFileSync(path.join(GEN_DIR,g),'utf8');
    if (/require\(['"].*node_modules\/docx['"]\)/.test(src)){
      skipped.push([g,'builds raw docx objects — no HTML equivalent']); continue;
    }
    const patched = src.replace(/require\(['"]\/home\/claude\/notes_lib\.js['"]\)/, `require(${JSON.stringify(WEBLIB)})`);
    const tmp = path.join(tmpDir, g);
    fs.writeFileSync(tmp, patched);
    const web = require(WEBLIB);
    web.__reset();
    try {
      delete require.cache[require.resolve(tmp)];
      require(tmp);
      const st = web.__state();
      if (!st.pages.length) { skipped.push([g,'produced no document']); continue; }
      st.pages.forEach(p => pages.push(Object.assign({gen:g}, p)));
    } catch(e){ skipped.push([g, e.message]); }
  }
  return {pages, skipped};
}

// --------------------------------------------------------------- page shaping
function shape(p){
  const code = (p.course.match(/DPTH\s*(\d{4})/)||[])[1] || '0000';
  const c    = COURSES[code] || {name:p.course, slug:'other', term:'Other', drive:DRIVE_ROOT, order:99, blurb:''};
  const mnum = parseInt((p.out.match(/^Module(\d+)/)||[])[1] || '0', 10);
  const kind = /_ModuleBrief$/.test(p.out) ? 'brief' : 'notes';
  // "Module 7: Patient Management Framework, ..."  ->  "Patient Management Framework, ..."
  const short = p.title.replace(/^Module\s*\d+\s*[:—-]\s*/,'').trim();
  return Object.assign(p, {code, course:c, mnum, kind, short,
    url:`courses/${c.slug}/module-${mnum}.html`});
}

// ------------------------------------------------------------------ HTML shell
function shell({title, desc, body, depth, active, extraHead=''}){
  const up = '../'.repeat(depth);
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(desc)}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;600&family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,600;1,400&family=IBM+Plex+Serif:wght@600&display=swap">
<link rel="stylesheet" href="${up}assets/style.css">
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><text y='26' font-size='26'>🦴</text></svg>">
${extraHead}
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
<nav class="topbar">
  <a class="brand" href="${up}index.html"><span class="mark">AU</span> ${B.TOPBAR_BRAND}</a>
  <div class="navlinks">
    <a href="${up}index.html"${active==='home'?' class="on"':''}>Courses</a>
    <a href="${up}start-here.html"${active==='start'?' class="on"':''}>Start Here</a>
    <a href="${up}search.html"${active==='search'?' class="on"':''}>Search</a>
    <a href="${driveUrl(DRIVE_ROOT)}" target="_blank" rel="noopener">Drive ↗</a>
  </div>
  <button class="themetog" type="button" aria-label="Switch between light and dark" title="Light / dark">
    <svg class="i-moon" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"
         fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20.5 14.6A8.5 8.5 0 1 1 9.4 3.5a7 7 0 0 0 11.1 11.1z"/></svg>
    <svg class="i-sun" viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"
         fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="4.2"/>
      <path d="M12 2.6v2.2M12 19.2v2.2M2.6 12h2.2M19.2 12h2.2M5.4 5.4l1.6 1.6M17 17l1.6 1.6M18.6 5.4L17 7M7 17l-1.6 1.6"/></svg>
    <span class="tt-label">Dark</span></button>
</nav>
<main id="main">
${body}
</main>
<footer class="sitefoot">
  <p><strong>${B.FOOTER_STRONG}</strong> Study notes written by a student, for incoming students. Not an official University publication.</p>
  <p class="fine">Course slides, handouts and transcripts stay in Google Drive and need an Augustana sign-in. Textbook content is cited, never reproduced.</p>
</footer>
<script src="${up}assets/site.js"></script>
</body>
</html>`;
}

function tocOf(p){
  const items = p.headings.filter(h=>h.level<=2);
  if (items.length < 3) return '';
  return `<nav class="toc"><p class="toc-h">On this page</p><ol>${
    items.map(h=>`<li class="lv${h.level}"><a href="#${h.id}">${esc(h.text)}</a></li>`).join("")}</ol></nav>`;
}

// ------------------------------------------------------------------- rendering
function modulePage(p, siblings){
  const c = p.course;
  const idx = siblings.findIndex(s=>s.mnum===p.mnum);
  const prev = idx>0 ? siblings[idx-1] : null;
  const next = idx>=0 && idx<siblings.length-1 ? siblings[idx+1] : null;
  const nav = `<nav class="prevnext">
    ${prev?`<a class="pn prev" href="module-${prev.mnum}.html"><span>← Module ${prev.mnum}</span><em>${esc(prev.short)}</em></a>`:'<span></span>'}
    ${next?`<a class="pn next" href="module-${next.mnum}.html"><span>Module ${next.mnum} →</span><em>${esc(next.short)}</em></a>`:'<span></span>'}
  </nav>`;

  const bodyHtml = `
<article class="module">
  <div class="crumbs"><a href="../../index.html">Courses</a> › <a href="index.html">${esc(c.name)}</a> › Module ${p.mnum}</div>
  <header class="modhead">
    <p class="eyebrow">${esc(p.course.name)} · ${esc(p.code)}</p>
    <h1>Module ${p.mnum} — ${esc(p.short)}</h1>
    ${p.subtitle?`<p class="lede">${esc(p.subtitle)}</p>`:''}
    <p class="actions">
      <a class="btn" href="${driveUrl(c.drive)}" target="_blank" rel="noopener">Word &amp; PDF in Drive ↗</a>
      <a class="btn ghost" href="${driveUrl(c.drive)}" target="_blank" rel="noopener">Slides, handouts &amp; transcripts ↗</a>
    </p>
  </header>
  ${tocOf(p)}
  <div class="prose">
${p.html.replace(/(src|href)="assets\//g, '$1="../../assets/')}
  </div>
  ${nav}
</article>`;
  return shell({title:`Module ${p.mnum} — ${p.short} · ${c.name}`,
    desc:`${c.name} Module ${p.mnum}: ${p.short}. Complete study notes for the Augustana DPT year-one curriculum.`,
    body:bodyHtml, depth:2, active:'home'});
}

function coursePage(c, mods){
  const missing = NON_NOTE[Object.keys(COURSES).find(k=>COURSES[k].slug===c.slug)] || {};
  const have = new Set(mods.map(m=>m.mnum));
  const maxM = Math.max(...mods.map(m=>m.mnum), ...Object.keys(missing).map(Number), 0);
  const rows = [];
  for (let i=1;i<=maxM;i++){
    const m = mods.find(x=>x.mnum===i);
    if (m) rows.push(`<li><a href="module-${i}.html"><span class="num">${i}</span>
        <span class="t">${esc(m.short)}</span><span class="go">Read →</span></a></li>`);
    else if (missing[i]) rows.push(`<li class="na"><span class="num">${i}</span>
        <span class="t">${esc(missing[i])}</span><span class="go">no notes</span></li>`);
  }
  const body = `
<div class="crumbs"><a href="../../index.html">Courses</a> › ${esc(c.name)}</div>
<header class="pagehead">
  <p class="eyebrow">${esc(c.term)} · ${esc(c.mini)}</p>
  <h1>${esc(c.name)}</h1>
  <p class="lede">${esc(c.blurb)}</p>
  <p class="actions"><a class="btn" href="${driveUrl(c.drive)}" target="_blank" rel="noopener">Course folder in Drive ↗</a></p>
</header>
<ol class="modlist">${rows.join("")}</ol>`;
  return shell({title:`${c.name}${B.TITLE_SUFFIX}`, desc:c.blurb, body, depth:2, active:'home'});
}

function progressBar(pct, accent){
  return `<div class="bar acc-${accent}" role="img" aria-label="${pct}% of this course's study notes are written">
    <i style="width:${pct}%"></i></div>`;
}

function liveCard(c, mods){
  const done = mods.length;
  const tot  = c.total;
  const pct  = tot ? Math.round(done / tot * 100) : (done ? 45 : 0);
  const complete = tot && done >= tot;
  const pill = complete ? ['done','COURSE COMPLETE'] : ['ready','STUDY NOTES LIVE'];
  const count = tot ? `${done} of ${tot} modules written` : `${done} modules written`;
  return `<a class="card live" href="courses/${c.slug}/index.html">
    <h3>${esc(c.name)}</h3>
    <p class="code">${esc([c.dept, c.staff].filter(Boolean).join(' · '))}</p>
    ${progressBar(pct, complete ? 'green' : 'teal')}
    <p class="meta"><strong>${esc(count)}</strong> · ${esc(c.next)}</p>
    <span class="pill ${pill[0]}">${pill[1]}</span></a>`;
}

function roadCard(r){
  return `<div class="card road">
    <h3>${esc(r.name)}</h3>
    <p class="code">${esc(r.dept)}</p>
    <p class="meta">${esc(r.meta)}</p>
    <span class="pill ${r.pill}">${esc(r.label)}</span></div>`;
}

function indexPage(byCourse){
  const live = Object.values(COURSES).sort((a,b)=>a.order-b.order);
  const total = Object.values(byCourse).reduce((n,a)=>n+a.length,0);

  const groups = TERMS.map(([term, sub]) => {
    const cards = [
      ...live.filter(c=>c.term===term).map(c => liveCard(c, byCourse[c.slug] || [])),
      ...ROADMAP.filter(r=>r.term===term).map(roadCard),
    ].join("");
    if (!cards) return "";
    return `<h2 class="trilabel">${esc(term)} <span>${esc(sub)}</span></h2>
      <div class="cards">${cards}</div>`;
  }).join("");

  const body = `
<header class="hero welcome">
  <p class="eyebrow">Augustana University · Doctor of Physical Therapy</p>
  <h1>Welcome, Class of 2028</h1>
  <p class="lede">Standardised study notes for ${B.HOME_LEDE_SCOPE} — written from the lectures, slides and
     transcripts by a student a year ahead of you, and kept in step with Canvas.</p>
  <p class="cue">Start with the course you're studying → open its module → read the study guide first, then the sources.</p>
  <p class="actions">
    <a class="btn" href="start-here.html">Start here →</a>
    <a class="btn ghost" href="search.html">Search all ${total} modules</a>
  </p>
</header>
${groups}
<section class="note">
  <h3>How this fits together</h3>
  <p>Each module page is the full study guide — tables, figures and glossaries included — readable on a phone with no download.
     The original Word and PDF versions, plus every slide deck, handout and transcript, live in the shared Google Drive and open with
     an Augustana sign-in.</p>
</section>`;
  return shell({title:B.SITE_NAME,
    desc:B.HOME_META_DESC,
    body, depth:0, active:'home'});
}

function startHerePage(byCourse){
  const body = `
<header class="pagehead">
  <p class="eyebrow">Read this first</p>
  <h1>Start Here</h1>
  <p class="lede">Five minutes now will save you a lot of thrashing in week one.</p>
</header>
<div class="prose">
<h2 class="h1">What this is</h2>
<p>A complete set of study notes for the Augustana DPT curriculum, written by a student who took these
   exact courses the year before you. Every module page is built from that module's lectures, slide decks and
   transcripts, arranged in the order the course teaches them.</p>

<h2 class="h1">How to use it</h2>
<ul class="b l0"><li><strong>Read them while the lecture plays.</strong> Each module page runs in the same order the
  lecture is delivered, so the topic banners line up with wherever you are in the recording. Open the recording from your
  own Canvas module — they are cohort-specific.</li></ul>
<ul class="b l0"><li><strong>Annotate as you go.</strong> These are a scaffold, not a transcript. Add what the instructor
  says off-slide, your own examples, the thing that finally made it click. The students who get the most out of them are the
  ones whose copy stops looking like the original.</li></ul>
<ul class="b l0"><li><strong>The callouts carry the signal.</strong> 🎙 marks something the instructor said out loud
  that isn't on the slide. ★ marks something exam-relevant or something you were told to prepare.</li></ul>
<ul class="b l0"><li><strong>Every topic ends with a glossary.</strong> Cover the right column and work down it — that is
  a complete self-quiz in about ninety seconds.</li></ul>
<ul class="b l0"><li><strong>Figures come from the real decks.</strong> Click any figure to open it full-size.</li></ul>

<h2 class="h1">What is NOT here</h2>
<ul class="b l0"><li>Lecture recordings, Panopto and Zoom links — those are tied to your cohort. Open them from your own Canvas.</li></ul>
<ul class="b l0"><li>Textbook chapters. Readings are cited by chapter and page; get the book through the library or VitalSource.</li></ul>
<ul class="b l0"><li>Anything with a due date. Assignment deadlines, exam times and room assignments change every year — Canvas is the source of truth.</li></ul>

<aside class="callout tip"><span class="ic">★</span><div>If a note and Canvas ever disagree, <strong>Canvas wins</strong>.
  Course content gets revised between cohorts. Tell whoever maintains this and it will get fixed.</div></aside>

<h2 class="h1">The Drive</h2>
<p>Slide decks, handouts, transcripts and the Word/PDF versions of these notes live in a shared Google Drive folder,
   organised the same way this site is. It opens with an Augustana sign-in.</p>
<section class="box links acc-teal"><h4>🔗 Open the Drive</h4><ul>
  <li><a href="${driveUrl(DRIVE_ROOT)}" target="_blank" rel="noopener">${B.DRIVE_FOLDER_LABEL}</a></li>
  ${Object.values(COURSES).sort((a,b)=>a.order-b.order).map(c=>
    `<li><a href="${driveUrl(c.drive)}" target="_blank" rel="noopener">${esc(c.name)}</a></li>`).join("")}
</ul></section>
</div>`;
  return shell({title:`Start Here${B.TITLE_SUFFIX}`, desc:'How to use the year-one resource.',
    body, depth:0, active:'start'});
}

function searchPage(){
  const body = `
<header class="pagehead">
  <p class="eyebrow">Everything, at once</p>
  <h1>Search</h1>
  <p class="lede">Every word of every module — tables, callouts and glossaries included.</p>
</header>
<div class="searchwrap">
  <input id="q" type="search" placeholder="Try: end feel, Trendelenburg, SOAP, gait cycle…" autocomplete="off" autofocus>
  <p id="stat" class="stat"></p>
  <div id="results"></div>
</div>`;
  return shell({title:`Search${B.TITLE_SUFFIX}`, desc:'Search the year-one study notes.',
    body, depth:0, active:'search',
    extraHead:'<script defer src="assets/index.js"></script>\n<script defer src="assets/search.js"></script>'});
}

// ---------------------------------------------------------------------- main
function main(){
  const {pages, skipped} = collect();
  const shaped = pages.map(shape).filter(p=>p.kind==='notes' && p.mnum>0);

  fs.rmSync(OUT,{recursive:true,force:true});
  fs.mkdirSync(path.join(OUT,'assets','fig'),{recursive:true});

  // legacy modules (written pre-notes_lib) converted from their shipped .docx
  const {LEGACY, convert} = require('/home/claude/site/legacy.js');
  LEGACY.forEach(item=>{
    const c = COURSES[item.code];
    const rel = 'assets/fig/legacy';
    const {html, headings} = convert(item, OUT, rel);
    shaped.push({course:c, code:item.code, mnum:item.mnum, short:item.short,
      title:`Module ${item.mnum}: ${item.short}`, subtitle:item.subtitle,
      kind:'notes', headings, figures:[], html, out:'legacy', legacy:true});
  });

  const byCourse = {};
  shaped.forEach(p=>{ (byCourse[p.course.slug] ||= []).push(p); });
  Object.values(byCourse).forEach(a=>a.sort((x,y)=>x.mnum-y.mnum));

  // figures: downscale to 1400px wide and convert to WebP (≈8x smaller, text stays crisp)
  const {execFileSync} = require('child_process');
  let figs = 0, missingFigs = 0;
  shaped.forEach(p=>p.figures.forEach(f=>{
    const dest = path.join(OUT, f.rel);
    if (fs.existsSync(dest)) return;
    if (!fs.existsSync(f.src)) { missingFigs++; return; }
    try { execFileSync('convert', [f.src,'-resize','1400x>','-strip','-quality','88',dest]); figs++; }
    catch(e){ fs.copyFileSync(f.src, dest.replace(/\.webp$/, path.extname(f.src))); }
  }));
  // legacy pandoc-extracted images get the same treatment, in place
  const legDir = path.join(OUT,'assets','fig','legacy');
  if (fs.existsSync(legDir)) fs.readdirSync(legDir).forEach(fn=>{
    const fp = path.join(legDir,fn);
    try { execFileSync('convert',[fp,'-resize','1400x>','-strip','-quality','88',fp]); } catch(e){}
  });

  // pages
  shaped.forEach(p=>{
    const dir = path.join(OUT,'courses',p.course.slug);
    fs.mkdirSync(dir,{recursive:true});
    fs.writeFileSync(path.join(dir,`module-${p.mnum}.html`), modulePage(p, byCourse[p.course.slug]));
  });
  Object.values(COURSES).forEach(c=>{
    const dir = path.join(OUT,'courses',c.slug);
    fs.mkdirSync(dir,{recursive:true});
    fs.writeFileSync(path.join(dir,'index.html'), coursePage(c, byCourse[c.slug]||[]));
  });
  // static assets
  ['style.css','site.js','search.js'].forEach(f=>
    fs.copyFileSync(path.join('/home/claude/site/assets',f), path.join(OUT,'assets',f)));

  fs.writeFileSync(path.join(OUT,'index.html'),      indexPage(byCourse));
  fs.writeFileSync(path.join(OUT,'start-here.html'), startHerePage(byCourse));
  fs.writeFileSync(path.join(OUT,'search.html'),     searchPage());
  fs.writeFileSync(path.join(OUT,'.nojekyll'), '');

  // search index — full text, split by section so hits deep-link to the right anchor
  const strip = h => h.replace(/<figcaption>[\s\S]*?<\/figcaption>/g,' ')
                      .replace(/<[^>]+>/g,' ')
                      .replace(/&amp;/g,'&').replace(/&lt;/g,'<').replace(/&gt;/g,'>')
                      .replace(/&quot;/g,'"').replace(/&#\d+;/g,' ')
                      .replace(/\s+/g,' ').trim();

  function sections(p){
    // split on any element carrying an id we registered as a heading
    const parts = p.html.split(/(?=<(?:h2|h3|header)[^>]*\sid=")/);
    const out = [];
    parts.forEach(chunk=>{
      const m = chunk.match(/\sid="([^"]+)"/);
      const id = m ? m[1] : '';
      const head = p.headings.find(h=>h.id===id);
      const text = strip(chunk);
      if (!text) return;
      const last = out[out.length-1];
      if (!head && last){ last.x += ' ' + text; return; }   // preamble folds into previous
      out.push({i:id, t:head ? head.text : p.short, x:text});
    });
    return out.filter(s=>s.x.length>20);
  }

  const index = shaped.map(p=>({
    u:`courses/${p.course.slug}/module-${p.mnum}.html`,
    c:p.course.name, m:p.mnum, t:p.short,
    s:sections(p)
  }));
  fs.writeFileSync(path.join(OUT,'assets','index.json'), JSON.stringify(index));
  // same data as a plain script, so search also works when the folder is opened
  // straight off disk (file://), where fetch() is blocked
  fs.writeFileSync(path.join(OUT,'assets','index.js'),
    'window.__AUDPT_INDEX = ' + JSON.stringify(index) + ';');

  console.log(`pages ${shaped.length}  courses ${Object.keys(byCourse).length}  figures ${figs}`);
  if (missingFigs) console.warn(`WARNING: ${missingFigs} figure source(s) missing — `
    + `kept whatever was already in dist/. Seed dist/assets/fig from the repo before `
    + `rebuilding without the emb*/ dirs, or those images will be stale/broken.`);
  require('./verify_brand.js').verify(OUT);
  console.log('branding OK');
  if (skipped.length) console.log('skipped:\n  ' + skipped.map(s=>s.join(' — ')).join('\n  '));
}
main();
