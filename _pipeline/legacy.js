// legacy.js — Anatomy M1 and Physiology M1 were written straight against docx, before
// notes_lib.js existed, so they can't be re-rendered through notes_web.js.
// We convert their shipped .docx with pandoc and rebuild the hierarchy pandoc can't see
// (their headings are bold runs, not heading styles).
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const LEGACY = [
  {docx:'/home/claude/out/Module1_IntroductionToAnatomy_StudyNotes.docx',
   code:'6111', mnum:1, short:'Introduction to Anatomy',
   subtitle:'Topics: 1.1–1.6 • Lumbar Palpation • Sync Session 1'},
  {docx:'/home/claude/out/Module1_CellularPhysiology_StudyNotes.docx',
   code:'6131', mnum:1, short:'Cellular Physiology',
   subtitle:'Topics: 1.1 Cell Structure & Function • 1.2 Membranes & Transport • Sync Session 1'},
];

const slugify = s => s.toLowerCase().replace(/<[^>]*>/g,'').replace(/&[a-z]+;/g,'')
  .replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'').slice(0,60);

function convert(item, outRoot, figDirRel){
  const media = fs.mkdtempSync('/tmp/legmedia-');
  let html = execFileSync('pandoc',
    [item.docx, '-t','html','--wrap=none', `--extract-media=${media}`],
    {encoding:'utf8', maxBuffer:64*1024*1024});

  // move extracted images into the site's figure folder, rewrite srcs
  const figAbs = path.join(outRoot, figDirRel);
  fs.mkdirSync(figAbs, {recursive:true});
  const walk = d => fs.readdirSync(d,{withFileTypes:true}).flatMap(e =>
    e.isDirectory() ? walk(path.join(d,e.name)) : [path.join(d,e.name)]);
  let n = 0;
  if (fs.existsSync(media)) walk(media).forEach(src => {
    const base = `${item.code}_m${item.mnum}_${String(++n).padStart(2,'0')}${path.extname(src)}`;
    fs.copyFileSync(src, path.join(figAbs, base));
    const esc = src.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
    html = html.replace(new RegExp(esc,'g'), `${figDirRel}/${base}`);
  });
  fs.rmSync(media,{recursive:true,force:true});

  // strip the cover block: everything before the "How to Use These Notes" table
  const cut = html.indexOf('<table');
  if (cut > 0) html = html.slice(cut);

  // bold-only paragraphs were headings in the original
  const headings = [];
  html = html.replace(/<p><strong>([^<]{3,90})<\/strong><\/p>/g, (m, text) => {
    let id = slugify(text) || ('s'+headings.length), base = id, k = 2;
    while (headings.some(h=>h.id===id)) id = base+'-'+(k++);
    headings.push({level:2, text, id});
    return `<h2 id="${id}" class="h1">${text}</h2>`;
  });

  // tables: give them the site's classes and a scroll wrapper
  html = html.replace(/<table>/g, '<div class="tw"><table class="detail">')
             .replace(/<\/table>/g, '</table></div>');
  // pandoc marks zebra rows itself; our CSS handles that
  html = html.replace(/ class="(odd|even|header)"/g, '');
  // images -> figures
  html = html.replace(/<p><img([^>]*)\/?><\/p>/g,
    '<figure class="fig"><img$1 loading="lazy"></figure>');

  return {html, headings};
}

module.exports = {LEGACY, convert};
