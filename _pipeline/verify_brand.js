// ---------------------------------------------------------------------------
// Post-build branding assertion. build_site.js calls this at the end of every
// run; it throws (non-zero exit) if the built output drifts from brand.js.
//
// Why this exists: the site's naming was silently reverted twice by rebuilding
// from stale templates. A rebuild that reverts a rename must now FAIL, not ship.
// Can also be run standalone against a built tree:  node verify_brand.js dist
// ---------------------------------------------------------------------------
const fs   = require('fs');
const path = require('path');
const B    = require('./brand.js');

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, {withFileTypes:true})) {
    const fp = path.join(dir, e.name);
    if (e.isDirectory()) walk(fp, out);
    else if (e.name.endsWith('.html')) out.push(fp);
  }
  return out;
}

function verify(OUT) {
  const pages = walk(OUT);
  if (!pages.length) throw new Error('verify_brand: no HTML pages found in ' + OUT);
  const fails = [];
  const add = (f, msg) => fails.push(`${path.relative(OUT, f)}: ${msg}`);

  for (const f of pages) {
    const html = fs.readFileSync(f, 'utf8');
    const rel  = path.relative(OUT, f);
    const isModule = /^courses\/.+\/module-\d+\.html$/.test(rel);
    const isHome   = rel === 'index.html';

    // -- required on every page ------------------------------------------
    if (!html.includes(`<span class="mark">AU</span> ${B.TOPBAR_BRAND}</a>`))
      add(f, 'topbar brand missing or altered');
    if (!html.includes(`<strong>${B.FOOTER_STRONG}</strong>`))
      add(f, 'footer brand missing or altered');

    // -- titles -----------------------------------------------------------
    const title = (html.match(/<title>([^<]*)<\/title>/) || [])[1];
    if (!title) add(f, 'no <title>');
    else if (isHome) {
      if (title !== B.SITE_NAME)
        add(f, `home title is "${title}", expected exactly "${B.SITE_NAME}"`);
    } else if (isModule) {
      if (title.endsWith(B.TITLE_SUFFIX))
        add(f, 'module title must NOT carry the site-name suffix');
    } else if (!title.endsWith(B.TITLE_SUFFIX)) {
      add(f, `title "${title}" should end "${B.TITLE_SUFFIX}"`);
    }

    // -- home-only scope strings ------------------------------------------
    if (isHome) {
      if (!html.includes(B.HOME_LEDE_SCOPE)) add(f, 'home lede scope wording changed');
      if (!html.includes(B.HOME_META_DESC))  add(f, 'home meta description changed');
    }

    // -- nothing from the old naming may survive ---------------------------
    for (const bad of B.FORBIDDEN) {
      if (!html.includes(bad)) continue;
      // the Drive link label legitimately contains old wording
      if (B.DRIVE_FOLDER_LABEL.includes(bad)) continue;
      add(f, `FORBIDDEN legacy string present: ${JSON.stringify(bad)}`);
    }
  }

  // -- the long brand needs its responsive CSS or the topbar overflows -----
  const css = path.join(OUT, 'assets', 'style.css');
  if (!fs.existsSync(css)) fails.push('assets/style.css missing');
  else if (!fs.readFileSync(css, 'utf8').includes('long brand: responsive topbar'))
    fails.push('assets/style.css: "long brand: responsive topbar" block missing '
             + '(the long topbar name overflows on phones without it)');

  if (fails.length) {
    throw new Error(
      `\n\nBRANDING CHECK FAILED — ${fails.length} problem(s), build not trustworthy.\n`
      + `Fix brand.js / the templates rather than editing built HTML.\n\n  `
      + fails.slice(0, 40).join('\n  ')
      + (fails.length > 40 ? `\n  ...and ${fails.length - 40} more` : '') + '\n');
  }
  return pages.length;
}

module.exports = {verify};

if (require.main === module) {
  const dir = process.argv[2] || path.join(__dirname, 'dist');
  console.log(`branding OK — ${verify(dir)} pages checked in ${dir}`);
}
