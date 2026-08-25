# Site pipeline

Source for everything under the repo root (`index.html`, `courses/`, `assets/`,
`search.html`, `start-here.html`). **The repo root is generated output — never
hand-edit it.** Edit the source here and rebuild, or your change is reverted by
the next build.

That has already happened twice: the site's naming was fixed by hand
(`6ea100f`), silently reverted by a rebuild from stale templates (`c5f731c`),
restored by hand again (`fcefba0`), and this directory exists so it stops
happening. See "Branding" below.

## Layout

| Path | What it is |
|---|---|
| `brand.js` | **Single source of truth for every brand string.** Change names here and nowhere else. |
| `verify_brand.js` | Post-build assertion. Fails the build if output drifts from `brand.js`. |
| `build_site.js` | The site builder: course map, page templates, figure conversion, search index. |
| `notes_lib.js` | Component API the note content is written against (`h1`, `bullet`, `compare`, `detail`, `tip`, `tnote`, `fig`, `glossary`, `cover`, `build`, …). Emits **Word .docx**. |
| `notes_web.js` | Drop-in replacement for `notes_lib.js` with the same export surface. Emits **HTML**. `build_site.js` swaps the require path to render the site from the same source. |
| `generators/gen_*.js` | One file per module. Holds that module's content as calls against the component API. 39 files. |
| `legacy.js` | Handles Anatomy M1 + Physiology M1, which predate the component API. |
| `make_standalone.js` | Emits the single-file HTML build and `artifact_index.html`. Derives its course→Drive map from `build_site.js` at run time — do not hardcode one. |
| `assets/` | `style.css`, `site.js`, `search.js` sources. |

## Rebuild

```bash
node build_site.js        # -> dist/   (prints "branding OK" or throws)
```

Then replace the repo root with `dist/` and commit.

**Requires ImageMagick (`convert`) for figures.** The figure *sources* (the
`emb*/` directories, ~228 MB of cropped PNGs) are **not** in this repo — they are
re-derivable from the slide PDFs in Drive. `build_site.js` skips any figure whose
source is missing and **keeps whatever is already in `dist/`**, so:

> Before rebuilding without the `emb*/` dirs, copy the repo's existing
> `assets/fig/` into `dist/assets/fig/` first. The build warns if any source was
> missing, but it cannot warn about an image it never had.

## Branding

`brand.js` holds the names Jake settled on 2026-08-24:

- topbar: `<span class="mark">AU</span> Augustana Doctor of Physical Therapy`
- site name in titles and footer: **Augustana DPT Resource**
- home `<title>` is exactly the site name; course / start-here / search titles
  end `· Augustana DPT Resource`; **module titles take no suffix**
- scope is the whole program, not Year One

`verify_brand.js` runs at the end of every build and **throws** on: a missing or
altered topbar or footer brand, a wrong title shape, changed home lede or meta
description, any string from the `FORBIDDEN` list, or a missing
`/* long brand: responsive topbar */` block in `style.css` (the long name
overflows on phones without it).

Deliberately *not* renamed: the hero "Welcome, Class of 2028". The Start Here
Drive link label (`DRIVE_FOLDER_LABEL` in `brand.js`) must always match the
actual Drive root folder's name — both were renamed to "Augustana DPT Resource"
on 2026-08-25; if the folder is ever renamed again, change the label with it.

Run the check on its own against any built tree:

```bash
node verify_brand.js ../          # check the repo root
```

## Publishing

The repo is `augie-dpt/Augie-DPT-Master-Resource`, branch `main`, Pages = deploy
from branch / root. `git pull` before pushing. GitHub Desktop's token is not
reachable from a plain shell, so:

```bash
git add -A && git commit -m "..." && "$HOME/bin/gh" auth setup-git && git push
```

Pages redeploys in well under a minute.
