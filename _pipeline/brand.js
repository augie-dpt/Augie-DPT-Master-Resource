// ---------------------------------------------------------------------------
// SINGLE SOURCE OF TRUTH FOR SITE BRANDING.
//
// Jake settled these names on 2026-08-24. They were reverted twice by
// regenerating the site from templates that still held the old strings
// (c5f731c), and restored by hand both times (6ea100f, fcefba0).
//
// Change a name HERE and nowhere else. build_site.js and make_standalone.js
// both read from this file, and verify_brand.js asserts the built output
// matches — the build fails loudly rather than silently reverting a rename.
// ---------------------------------------------------------------------------

// Topbar, every page. Rendered as: <span class="mark">AU</span> {TOPBAR_BRAND}
// The long name needs the responsive block at the end of assets/style.css.
const TOPBAR_BRAND = 'Augustana Doctor of Physical Therapy';

// Site name used in <title>s and the footer.
const SITE_NAME = 'Augustana DPT Resource';

// Home page <title> is exactly SITE_NAME (no suffix, no dash).
// Course / start-here / search titles end with this suffix.
// Module titles get NO suffix — they end "Module N — Topic · Course".
const TITLE_SUFFIX = ` · ${SITE_NAME}`;

// Footer bold lead-in, every page.
const FOOTER_STRONG = `${SITE_NAME}.`;

// Scope is the whole program, not just Year One.
const HOME_LEDE_SCOPE = 'every module of every course in the program';
const HOME_META_DESC =
  'Study notes for every module of the Augustana University DPT curriculum.';

// Deliberately NOT renamed (Jake, 2026-08-24):
//  - hero "Welcome, Class of 2028"
//  - the Start Here Drive link label, which must keep matching the actual Drive
//    folder name (renamed to "Augustana DPT Resource" on 2026-08-25).
const DRIVE_FOLDER_LABEL = 'Augustana DPT Resource (root folder)';

// Strings that must never reappear in built output. verify_brand.js fails the
// build on any of these. DRIVE_FOLDER_LABEL is whitelisted there by exact match.
const FORBIDDEN = [
  '<span class="mark">AU</span> DPT Year One',
  'Augustana DPT — Year One Resource.',   // old footer (trailing period)
  '· Augustana DPT Year One',             // old title suffix
  '<title>Augustana DPT — Year One Resource</title>',
  '<title>Augustana DPT Year One</title>',
  'every module of Year One',
  'DPT first-year curriculum',
];

module.exports = {
  TOPBAR_BRAND, SITE_NAME, TITLE_SUFFIX, FOOTER_STRONG,
  HOME_LEDE_SCOPE, HOME_META_DESC, DRIVE_FOLDER_LABEL, FORBIDDEN,
};
