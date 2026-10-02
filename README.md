# Engineering Maths 1 — Workshop worksheets

PreTeXt worksheets for the **Engineering Maths 1 (EMAT10100)** workshops at the
University of Bristol. Each workshop (the session) has one worksheet (the
problems): Workshop 1 uses `worksheet01`, and so on.

Workshop 1 is a draft covering a little Week 1 bridging material and vectors up
to dot products.

## Build a worksheet

Prerequisites: Python 3.10 or newer, and Node.js with npm on your `PATH` (the
worksheet theme is built with Node).

```sh
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
pretext build worksheet01
pretext view worksheet01
```

Edit `source/worksheet01.ptx`, then rebuild to see changes. Use the worksheet's
printer icon for the print view, which includes blank working space.

The PreTeXt and lxml versions are pinned: newer lxml releases change entity
handling used by this renderer (see the
[lxml changelog](https://github.com/lxml/lxml/blob/master/CHANGES.txt)).

## Conventions

- **Length.** A workshop lasts about 50 minutes: use 4 or 6 printed pages, so
  that double-sided sheets have no blank side. Each `<page>` element is one
  printed page, and `workspace` sets the
  relative amount of working space after a question.
- **Numbering.** Exercises are numbered continuously through a worksheet. Do
  not set `number` on an exercise.
- **Paper.** Worksheets print on A4. `assets/print-defaults.js` makes A4 the
  default in the print preview and shows the header and footer; a reader can
  still choose Letter there.
- **Language.** Write in British English. The files declare `en-US` only
  because this PreTeXt release needs it for its built-in interface labels.
- **Solutions.** Solutions are written and kept outside this repository. Do not
  add `<solution>`, `<answer>` or `<hint>` elements: PreTeXt would publish
  them. `notes/` and `solutions/` are ignored by Git as a safeguard.
- **Images.** Put shared images in `assets/` and give every `<image>` a
  `<description>` for alternative text.

## Check a worksheet

```sh
tools/audit.py worksheet01      # omit the argument to check every worksheet
```

Build first. The audit opens the print preview in headless Firefox or Chrome
and fails if the source contains solutions, the preview is not A4, a page is
over-full, there are more than 6 pages, the header or copyright footer is
missing, an image lacks alternative text, or text is serif or low-contrast.

It waits for the preview to settle (pages laid out, MathJax typeset, fonts
loaded, layout no longer changing) and then re-runs PreTeXt's workspace fit,
because PreTeXt fits the pages without waiting for MathJax. It fails with a
clear message if the preview never settles. Set `AUDIT_DEBUG=1` to see how long
settling took and what happened in what order.

## Project layout

- `source/worksheetNN.ptx`: one file per worksheet.
- `source/docinfo.ptx`: notation macros shared by every worksheet.
- `templates/worksheet.ptx`: placeholder template for new worksheets.
- `project.ptx`: one independently buildable HTML target per worksheet.
- `publication/publication.ptx`: shared headers, footers, numbering and theme.
- `assets/custom.css`: shared sans-serif text, exercise labels, print fixes.
- `assets/print-defaults.js`: A4 and header/footer defaults for printing.
- `site/index.html`: landing page listing the worksheets.
- `tools/audit.py`, `tools/audit.html`: the worksheet audit.
- `tools/strip-debug-assets.sh`: removes debugging files before deploying.
- `deploy.sh`: builds, checks and publishes the whole site.
- `output/`: generated files, ignored by Git.

## Add another worksheet

1. Copy `templates/worksheet.ptx` to `source/worksheet02.ptx`.
2. Replace `NN` with `02` and `N` with `2`, then write the questions.
3. Add a target inside `<targets>` in `project.ptx`, keeping numeric order:

```xml
<target name="worksheet02" format="html" source="worksheet02.ptx" deploy-dir="worksheet02">
  <stringparams html.css.extra="external/custom.css" html.js.extra="external/print-defaults.js"/>
</target>
```

4. Add a row linking to `worksheet02/` in `site/index.html`.
5. Run `pretext build worksheet02`, then `tools/audit.py worksheet02`.

## Preview the whole collection

```sh
./deploy.sh --preview
python3 -m http.server 8000 --directory output/stage --bind 127.0.0.1
```

Open <http://localhost:8000>. This builds every worksheet, runs the audit and
stages the site in `output/stage` without publishing anything.

## Deploy

```sh
./deploy.sh
```

Run it from `main` with everything committed. It pulls, builds every target in
`project.ptx`, strips debugging files that readers never need, runs the audit,
and publishes to the `gh-pages` branch: the landing page at the site root and
each worksheet at `/worksheetNN/`. It stops without publishing if the audit
fails.

The published site can be read by anyone. The first time, turn on GitHub Pages
in the repository settings, choosing the `gh-pages` branch and the `/ (root)`
folder.

The GitHub workflow only checks that the worksheets build, and saves the staged
site as an artifact; it does not publish.

## Copyright

Worksheets and mathematical content are Copyright (c) 2026 Elliot Cartee; see
`LICENSE`. The PreTeXt project scaffolding retains its original notice; see
`NOTICE.md`.
