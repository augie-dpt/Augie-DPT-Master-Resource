// notes_web.js — drop-in replacement for notes_lib.js that emits HTML instead of .docx.
// Every gen_*.js script runs unchanged; only the require path is swapped by build_site.js.
const fs = require('fs');
const path = require('path');

const C = {navy:"1F3864", blue:"2E75B6", lightBlue:"D6E4F0", teal:"1A7070", lightTeal:"D0EDED",
  green:"1E6B3C", lightGreen:"D4EDDA", gold:"9A6F00", lightGold:"FFF3CD",
  red:"B22222", lightRed:"FDECEA", purple:"5B2C8D", lightPurple:"EDE7F6",
  gray:"3D3D3D", midGray:"777777", white:"FFFFFF"};
const FULL = 9360;

// hex -> semantic accent name, so the CSS controls the palette (and dark mode) not the generator
const ACCENT = {[C.navy]:"navy",[C.blue]:"blue",[C.teal]:"teal",[C.green]:"green",
  [C.gold]:"gold",[C.red]:"red",[C.purple]:"purple",
  [C.lightBlue]:"blue",[C.lightTeal]:"teal",[C.lightGreen]:"green",
  [C.lightGold]:"gold",[C.lightRed]:"red",[C.lightPurple]:"purple"};
const accentOf = (hex, fallback="teal") => ACCENT[hex] || fallback;

// ---- state collected while a generator runs -------------------------------
let S = null;
function blank(){ return {course:"", title:"", subtitle:"", headings:[], figures:[]}; }
function reset(){ S = Object.assign(blank(), {pages:[]}); }
function state(){ return S; }
reset();

// ---- helpers ---------------------------------------------------------------
const esc = s => String(s)
  .replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");

// **bold** -> <strong>, after escaping
function md(t){
  const parts = esc(t).split("**");
  return parts.map((p,i)=> p ? (i%2 ? `<strong>${p}</strong>` : p) : "").join("");
}

const slugify = s => esc(s).replace(/<[^>]*>/g,"").toLowerCase()
  .replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"").slice(0,60);

function addHeading(level, text){
  const base = slugify(text) || ("s"+S.headings.length);
  let id = base, n = 2;
  while (S.headings.some(h=>h.id===id)) id = base+"-"+(n++);
  S.headings.push({level, text, id});   // raw; escaped at render time
  return id;
}

// ---- block components ------------------------------------------------------
function h1(t){ const id = addHeading(2, t); return `<h2 id="${id}" class="h1">${md(t)}</h2>`; }
function h2(t){ const id = addHeading(3, t); return `<h3 id="${id}" class="h2">${md(t)}</h3>`; }
function body(t){ return `<p>${md(t)}</p>`; }
function bullet(t,level=0){ return `<ul class="b l${level}"><li>${md(t)}</li></ul>`; }
function tnote(t){ return `<aside class="callout transcript"><span class="ic" aria-hidden="true">🎙</span><div>${md(t)}</div></aside>`; }
function tip(t){ return `<aside class="callout tip"><span class="ic" aria-hidden="true">★</span><div>${md(t)}</div></aside>`; }
const spacer = () => "";
const pageBreak = () => "";
function footer(text){ return `<p class="doc-footer">${md(text)}</p>`; }
function run(t){ return md(t); }
function cell(t){ return md(t); }

function compare(lh,rh,li,ri,lc=C.blue,rc=C.teal){
  const L = accentOf(lc,"blue"), R = accentOf(rc,"teal");
  const n = Math.max(li.length, ri.length);
  let rows = "";
  for (let i=0;i<n;i++){
    rows += `<tr><td class="acc-${L}">${md(li[i]||"")}</td><td class="acc-${R}">${md(ri[i]||"")}</td></tr>`;
  }
  return `<div class="tw"><table class="cmp">
  <thead><tr><th class="hd-${L}">${md(lh)}</th><th class="hd-${R}">${md(rh)}</th></tr></thead>
  <tbody>${rows}</tbody></table></div>`;
}

function detail(headers, rows, widths){
  const total = (widths||[]).reduce((a,b)=>a+b,0) || 1;
  const cols = (widths||[]).map(w=>`<col style="width:${(w/total*100).toFixed(1)}%">`).join("");
  const head = headers.map(h=>`<th>${md(h)}</th>`).join("");
  const bodyRows = rows.map(r=>`<tr>${r.map((c,i)=>
     `<td${i===0?' class="k"':''} data-label="${esc(String(headers[i]||"").replace(/\*\*/g,""))}">${md(c)}</td>`).join("")}</tr>`).join("");
  return `<div class="tw"><table class="detail"><colgroup>${cols}</colgroup>
  <thead><tr>${head}</tr></thead><tbody>${bodyRows}</tbody></table></div>`;
}

function infoBox(title, lines, accent=C.blue){
  const a = accentOf(accent,"blue");
  return `<section class="box acc-${a}"><h4>${md(title)}</h4><ul>${
    lines.map(l=>`<li>${md(l)}</li>`).join("")}</ul></section>`;
}

function banner(label, subtitle, sub=C.blue){
  const id = addHeading(1, label + " — " + subtitle);
  const a = accentOf(sub,"blue");
  return `<header id="${id}" class="topic acc-${a}">
    <p class="eyebrow">${md(label)}</p><h2>${md(subtitle)}</h2></header>`;
}

function glossary(title, terms){
  const id = addHeading(2, title);
  const rows = terms.map(([t,def])=>
    `<tr><td class="term" data-label="Term">${md(t)}</td><td data-label="Definition">${md(def)}</td></tr>`).join("");
  return [`<h2 id="${id}" class="h1 gloss-h">${md(title)}</h2>`,
    `<div class="tw"><table class="detail gloss"><colgroup><col style="width:26%"><col style="width:74%"></colgroup>
     <thead><tr><th>Term</th><th>Definition</th></tr></thead><tbody>${rows}</tbody></table></div>`];
}

function pngSize(p){
  try{ const b=fs.readFileSync(p);
    if(b.length>24 && b[0]===0x89 && b[1]===0x50) return {w:b.readUInt32BE(16), h:b.readUInt32BE(20)};
  }catch(e){}
  return null;
}
function fig(p, w, h, caption){
  const s = pngSize(p); if (s){ w = s.w; h = s.h; }
  const name = path.basename(p).replace(/\.[a-z]+$/i,'');
  const dir  = path.basename(path.dirname(p));           // keep emb-dir to avoid name clashes
  const rel  = `assets/fig/${dir}__${name}.webp`;        // build_site converts + downscales
  S.figures.push({src:p, rel});
  const cap = caption ? `<figcaption>${md(caption)}</figcaption>` : "";
  return [`<figure class="fig"><a href="${rel}" target="_blank" rel="noopener">
    <img src="${rel}" width="${w}" height="${h}" loading="lazy" alt="${esc(caption||"Figure")}"></a>${cap}</figure>`];
}

function vlink(label, url, suffix){
  return `<ul class="b l0"><li><a href="${esc(url)}" target="_blank" rel="noopener">${md(label)}</a>${
    suffix?" "+md(suffix):""}</li></ul>`;
}

function linkBox(title, items, accent){
  const a = accentOf(accent,"teal");
  const lis = items.map(([label,url,suffix])=>{
    const text = md(label) + (suffix ? " "+md(suffix) : "");
    return `<li>${url ? `<a href="${esc(url)}" target="_blank" rel="noopener">${md(label)}</a>${suffix?" "+md(suffix):""}`
                      : `<span class="nolink">${text}</span>`}</li>`;
  }).join("");
  return `<section class="box links acc-${a}"><h4>${md(title)}</h4><ul>${lis}</ul></section>`;
}

function cover(course, title, lectures, extraLines){
  S.course = course; S.title = title; S.subtitle = lectures;
  return [`<div class="cover-meta" hidden data-course="${esc(course)}" data-title="${esc(title)}"></div>`,
    infoBox("📖 How to Use These Notes", [
      "Best used with the lecture playing — keep these open, follow along, and add your own notes as you watch",
      "Lecture banners mark the start of each topic and run in the same order as the videos",
      "🎙 Callouts = direct insights from the instructor's transcript",
      "★ Tips = exam-relevant content or things the instructor told you to prepare",
      "Figures are taken directly from the module's slide decks",
      "Each topic ends with its own Quick-Reference Glossary",
      "Written from last year's recordings — if a lecture has been re-recorded or resequenced, Canvas wins",
      ...(extraLines||[])], C.blue)];
}

function build(children, outPath){
  const bad = children.filter(c => c && typeof c !== "string");
  if (bad.length) throw new Error("non-HTML node (raw docx object?) x" + bad.length);
  S.pages.push({
    course: S.course, title: S.title, subtitle: S.subtitle,
    out: path.basename(outPath).replace(/\.docx$/,""),
    headings: S.headings, figures: S.figures,
    html: children.filter(Boolean).join("\n")
  });
  Object.assign(S, blank());          // ready for the next document in the same script
  return Promise.resolve();
}

module.exports = {C,FULL,run,h1,h2,body,bullet,tnote,tip,cell,compare,detail,infoBox,banner,
  glossary,fig,pageBreak,spacer,cover,footer,build,vlink,linkBox, __reset:reset, __state:state};
