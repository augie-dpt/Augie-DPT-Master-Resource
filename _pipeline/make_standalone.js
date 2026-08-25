// make_standalone.js — turns dist/index.html into a single self-contained file.
// Two outputs: a complete .html document (email / Drive), and a body-only
// fragment for publishing as a hosted Artifact.
const fs = require('fs');
const path = require('path');

const DIST = '/home/claude/site/dist';
const OUT  = '/home/claude/out';
const B    = require('./brand.js');

const DRIVE = {
  'human-anatomy':               '1jyJBZDHX4cgfDC52dO7-p3hNN0zpThu0',
  'human-physiology':            '1cBHqgnIRz_PP2heIGYRwgLQIJD5BT2Kc',
  'pt-fundamentals':             '1j9eFrqSQvy_I81CvvPcFEtpu7DqzIvVA',
  'movement-science':            '1uyDFSzcmclB_6gUS7Q9ETbWNCFuORuEt',
  'professional-competencies-i': '11vQptZ4rtACOU2UqTkagg6G2ZTLGHDZJ',
};
const ROOT = 'https://drive.google.com/drive/folders/1UH2MQSjjOHp9bkhaiQhKZhbZvVTkRd_o';

let html = fs.readFileSync(path.join(DIST,'index.html'),'utf8');
const css = fs.readFileSync(path.join(DIST,'assets','style.css'),'utf8');
const js  = fs.readFileSync(path.join(DIST,'assets','site.js'),'utf8');

// ---- course cards point into Drive, not to pages that aren't in this file ----
html = html.replace(/href="courses\/([a-z-]+)\/index\.html"/g, (m, slug) => {
  const id = DRIVE[slug];
  return id ? `href="https://drive.google.com/drive/folders/${id}" target="_blank" rel="noopener"`
            : 'href="' + ROOT + '" target="_blank" rel="noopener"';
});
// the card is now an outbound link — say so
html = html.replace(/(<span class="pill (?:ready|done)">[^<]*<\/span>)/g,
  '$1<span class="cardgo">Open in Drive ↗</span>');

// ---- nav: only destinations that exist ----
html = html.replace(
  /<div class="navlinks">[\s\S]*?<\/div>/,
  `<div class="navlinks">
    <a href="#how">How to use</a>
    <a href="#courses">Courses</a>
    <a href="${ROOT}" target="_blank" rel="noopener">Drive ↗</a>
  </div>`);
html = html.replace('<a class="brand" href="index.html">', '<a class="brand" href="#main">');

// ---- hero buttons ----
html = html.replace(/<p class="actions">[\s\S]*?<\/p>\n<\/header>/,
`<p class="actions">
    <a class="btn" href="#how">How to use these notes →</a>
    <a class="btn ghost" href="${ROOT}" target="_blank" rel="noopener">Open the Drive folder</a>
  </p>
</header>`);

// ---- the "how to use" section, in place of the old closing note ----
const HOW = `
<section class="how" id="how">
  <h2>How to use these notes</h2>
  <p class="howlede">They're built to be read <em>during</em> the lecture, not instead of it.</p>
  <ol class="steps">
    <li><b>Open the module's notes beside the video.</b> They run in the same order the lecture is
        delivered, so the topic banners should line up with wherever you are in the recording.</li>
    <li><b>Annotate as you go.</b> The notes are a scaffold, not a transcript — add what the instructor
        says off-slide, your own examples, the thing that finally made it click. The students who get the
        most out of these are the ones whose copy stops looking like mine.</li>
    <li><b>Study guide first, sources second.</b> Read the notes for the shape of the module, then go to
        the slides, handouts and transcripts in Drive when you want the original.</li>
  </ol>
  <div class="legend">
    <p><span class="lg">🎙</span> <b>Callouts</b> are things the instructor actually said, pulled from the transcript.</p>
    <p><span class="lg">★</span> <b>Tips</b> flag exam-relevant material or something you were told to prepare.</p>
    <p><span class="lg">▤</span> <b>Glossaries</b> close every topic, so terms are always a scroll away.</p>
  </div>
  <p class="caveat"><b>Two things to know.</b> These were written from last year's recordings. If a lecture
     has been re-recorded or the modules resequenced, Canvas is right and I'm out of date — tell me and I'll
     fix it. And this is a student's work, not an official University publication: it supplements lecture,
     the textbook and your own studying rather than replacing any of them.</p>
</section>`;

html = html.replace(/<section class="note">[\s\S]*?<\/section>/, HOW);

// anchor for the nav
html = html.replace(/<h2 class="trilabel">/, '<h2 class="trilabel" id="courses">');

// ---- extra CSS for the pieces that only exist on this page ----
const EXTRA = `
/* ---------- standalone: how-to section ---------- */
.cardgo{display:block; margin-top:9px; font-size:12.5px; color:var(--blue); font-weight:500}
.how{margin-top:34px; padding-top:30px; border-top:1px solid var(--line)}
.how h2{font-family:var(--f-display); font-size:25px; font-weight:600; color:var(--navy); margin:0 0 6px}
.howlede{font-size:16.5px; color:var(--ink-2); margin:0 0 22px; max-width:var(--measure)}
.steps{counter-reset:s; list-style:none; margin:0 0 26px; padding:0; display:grid; gap:16px;
       max-width:var(--measure)}
.steps li{counter-increment:s; position:relative; padding-left:44px; font-size:15.5px; color:var(--ink-2)}
.steps li::before{
  content:counter(s); position:absolute; left:0; top:-1px;
  width:28px; height:28px; border-radius:50%; display:grid; place-items:center;
  background:var(--navy-w); color:var(--navy);
  font-family:var(--f-mono); font-size:13px; font-weight:600;
}
.steps b{color:var(--ink); font-weight:600}
.legend{display:grid; gap:9px; background:var(--surface-2); border:1px solid var(--line);
        border-radius:var(--radius); padding:17px 20px; margin-bottom:22px}
.legend p{margin:0; font-size:14.5px; color:var(--ink-2)}
.legend .lg{display:inline-block; width:22px; color:var(--teal)}
.legend b{color:var(--ink); font-weight:600}
.caveat{font-size:14px; color:var(--ink-3); max-width:var(--measure); margin:0;
        border-left:3px solid var(--gold); padding-left:14px}
.caveat b{color:var(--ink-2)}
@media (max-width:560px){
  .steps li{padding-left:38px}
  .steps li::before{width:25px; height:25px; font-size:12px}
}
`;

// ---- inline everything ----
let doc = html
  .replace(/<link rel="stylesheet" href="assets\/style\.css">/, `<style>\n${css}\n${EXTRA}\n</style>`)
  .replace(/<script (?:defer )?src="assets\/site\.js"><\/script>/, `<script>\n${js}\n</script>`);

// any other local asset reference would be a dead link in a single file
const leftovers = doc.match(/(?:src|href)="(?:assets|courses)\/[^"]*"/g);
if (leftovers) throw new Error('local refs still present:\n  ' + leftovers.join('\n  '));

fs.mkdirSync(OUT,{recursive:true});
fs.writeFileSync(path.join(OUT,'AugustanaDPT-YearOne.html'), doc);

// body-only fragment for the Artifact publisher (it supplies the page skeleton)
const head = doc.match(/<style>[\s\S]*?<\/style>/)[0];
const bodyInner = doc.match(/<body>([\s\S]*)<\/body>/)[1];
fs.writeFileSync(path.join(OUT,'artifact_index.html'),
  `<title>${B.SITE_NAME}</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;600&family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,600;1,400&family=IBM+Plex+Serif:wght@600&display=swap">
${head}
${bodyInner}`);

console.log('standalone', (fs.statSync(path.join(OUT,'AugustanaDPT-YearOne.html')).size/1024).toFixed(0)+'KB');
