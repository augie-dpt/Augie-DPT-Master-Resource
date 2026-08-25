const d = require('/home/claude/.npm-global/lib/node_modules/docx');
const fs = require('fs');
const {Document, Packer, Paragraph, TextRun, ImageRun, Table, TableRow, TableCell, WidthType,
       AlignmentType, BorderStyle, PageBreak, ShadingType, ExternalHyperlink} = d;

const C = {navy:"1F3864", blue:"2E75B6", lightBlue:"D6E4F0", teal:"1A7070", lightTeal:"D0EDED",
  green:"1E6B3C", lightGreen:"D4EDDA", gold:"9A6F00", lightGold:"FFF3CD",
  red:"B22222", lightRed:"FDECEA", purple:"5B2C8D", lightPurple:"EDE7F6",
  gray:"3D3D3D", midGray:"777777", white:"FFFFFF"};
const FULL = 9360;

const run = (t,o={}) => new TextRun({text:t, font:"Arial", size:20, color:C.gray, ...o});
function parseB(t,runs,extra={}){const parts=t.split("**");parts.forEach((p,i)=>{if(p)runs.push(run(p,{bold:i%2===1,...extra}));});}
function h1(t){return new Paragraph({children:[run(t,{bold:true,size:26,color:C.navy})],
  spacing:{before:240,after:100},
  border:{bottom:{color:C.blue,style:BorderStyle.SINGLE,size:6,space:1}}});}
function h2(t){return new Paragraph({children:[run(t,{bold:true,size:22,color:C.blue})],spacing:{before:160,after:80}});}
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
// Read the real pixel size out of the PNG header (IHDR) so a re-cropped figure
// never comes out stretched — the w/h args are only a fallback now.
function pngSize(p){
  try{ const b=fs.readFileSync(p);
    if(b.length>24 && b[0]===0x89 && b[1]===0x50) return {w:b.readUInt32BE(16), h:b.readUInt32BE(20)};
  }catch(e){}
  return null;}
function fig(path,w,h,caption){
  const s=pngSize(path); if(s){ w=s.w; h=s.h; }
  const W=600, H=Math.round(W*h/w);
  const out=[new Paragraph({children:[new ImageRun({type:"png",data:fs.readFileSync(path),
    transformation:{width:W,height:H}})],alignment:AlignmentType.CENTER,spacing:{before:120,after:40}})];
  if(caption)out.push(new Paragraph({children:[run(caption,{italics:true,size:18,color:C.midGray})],
    alignment:AlignmentType.CENTER,spacing:{after:120}}));
  return out;}
const pageBreak=()=>new Paragraph({children:[new PageBreak()]});
function vlink(label,url,suffix){
  // bullet with a clickable link: "label (suffix)" where label is the hyperlink
  const kids=[new ExternalHyperlink({children:[run(label,{color:"2E75B6",underline:{}})],link:url})];
  if(suffix)kids.push(run(" "+suffix));
  return new Paragraph({children:kids,numbering:{reference:"bullets",level:0},spacing:{after:40}});}
function linkBox(title,items,accent,light){
  // items: [label,url,suffix]
  const rows=[new TableRow({children:[cell(title,{fill:accent||C.teal,bold:true,color:C.white,w:FULL})]})];
  items.forEach(([label,url,suffix])=>{
    const kids=[new ExternalHyperlink({children:[run(label,{color:"2E75B6",underline:{}})],link:url})];
    if(suffix)kids.push(run(" "+suffix));
    rows.push(new TableRow({children:[new TableCell({children:[new Paragraph({children:kids,spacing:{after:20}})],
      width:{size:FULL,type:WidthType.DXA},shading:{type:ShadingType.CLEAR,fill:light||C.lightTeal},
      margins:{top:60,bottom:60,left:100,right:100}})]}));});
  return new Table({rows,width:{size:FULL,type:WidthType.DXA},columnWidths:[FULL]});}
const spacer=()=>new Paragraph({children:[run("",{size:8})],spacing:{after:60}});
function cover(course,title,lectures,extraLines){
  const k=[];
  k.push(new Paragraph({children:[run(course,{italics:true,size:24,color:C.blue})],alignment:AlignmentType.CENTER,spacing:{before:1200,after:200}}));
  k.push(new Paragraph({children:[run(title,{bold:true,size:48,color:C.navy})],alignment:AlignmentType.CENTER,spacing:{after:160}}));
  k.push(new Paragraph({children:[run("Complete Study Guide",{italics:true,size:28,color:C.blue})],alignment:AlignmentType.CENTER,spacing:{after:160}}));
  k.push(new Paragraph({children:[run("Augustana University — Doctor of Physical Therapy Program",{italics:true,size:20,color:C.midGray})],alignment:AlignmentType.CENTER,spacing:{after:120}}));
  k.push(new Paragraph({children:[run(lectures,{size:20,color:C.gray})],alignment:AlignmentType.CENTER,spacing:{after:300}}));
  k.push(infoBox("\u{1F4D6} How to Use These Notes",[
   "Best used with the lecture playing — keep these open, follow along, and add your own notes as you watch",
   "Lecture banners mark the start of each topic and run in the same order as the videos",
   "\u{1F399} Callouts = direct insights from the instructor's transcript",
   "★ Tips = exam-relevant content or things the instructor told you to prepare",
   "Figures are taken directly from the module's slide decks",
   "Each topic ends with its own Quick-Reference Glossary",
   "Written from last year's recordings — if a lecture has been re-recorded or resequenced, Canvas wins",
   ...(extraLines||[])]));
  k.push(pageBreak());
  return k;}
function footer(text){
  return new Paragraph({children:[run(text,{italics:true,size:18,color:C.midGray})],
    alignment:AlignmentType.CENTER,spacing:{before:300},
    border:{top:{color:C.blue,style:BorderStyle.SINGLE,size:6,space:4}}});}
function build(children,outPath){
  const doc = new Document({
    numbering:{config:[{reference:"bullets",levels:[
      {level:0,format:"bullet",text:"•",alignment:AlignmentType.LEFT,style:{paragraph:{indent:{left:360,hanging:200}}}},
      {level:1,format:"bullet",text:"◦",alignment:AlignmentType.LEFT,style:{paragraph:{indent:{left:720,hanging:200}}}}]}]},
    sections:[{properties:{page:{size:{width:12240,height:15840},
      margin:{top:1008,right:1008,bottom:1008,left:1008}}},children}]});
  return Packer.toBuffer(doc).then(b=>{fs.writeFileSync(outPath,b);console.log("written",outPath,b.length);});}

module.exports = {C,FULL,run,h1,h2,body,bullet,tnote,tip,cell,compare,detail,infoBox,banner,glossary,fig,pageBreak,spacer,cover,footer,build,vlink,linkBox};
