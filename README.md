# Engineering Maths 1 — Worksheets

PreTeXt worksheets for **Engineering Maths 1 (EMAT10100), University of Bristol**.
Adapted from the structure and shared styling of `math152-hogu-sp26`.

Workshop 1 is a draft covering algebra, logarithms, differentiation and vectors through dot products,
including force resultants, projection and work. Tutor answers are in
`notes/worksheet1-solutions.md` and are not included in the built student site. Worksheets 2–12 are marked as planned
on the index; create their source files and build targets when needed. No term,
syllabus, programme expansion for “SSM”, or mathematical content is assumed.

## Work on Worksheet 1

Prerequisites: Node.js with npm (for the shared worksheet theme), plus Python 3.10 or newer.
Use Python 3.10 or newer (the local environment uses Python 3.12) and install the same PreTeXt version as the original project:

```sh
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
pretext build worksheet1
pretext view worksheet1
```

Edit `source/worksheet1.ptx`, then rebuild to see changes. Use the worksheet's
printer icon for the print view, including blank working space. The starter
has four pages: warm-up, two pages of practice, and a challenge.
The reusable template retains placeholders for future worksheets. Author text in British English;
this PreTeXt release requires `en-US` for its built-in English interface labels.
The XML dependency is pinned because newer versions change entity handling
used by this renderer (see the [lxml changelog](https://github.com/lxml/lxml/blob/master/CHANGES.txt)).

## Project layout

- `source/worksheet1.ptx`: the first worksheet and current editing starting point.
- `templates/worksheet.ptx`: clean placeholder template for future worksheets.
- `project.ptx`: one independently buildable HTML target per worksheet.
- `publication/publication.ptx`: shared headers, footers, numbering, and theme.
- `assets/custom.css`: shared sans-serif text, exercise labels, and print table fixes.
- `assets/`: shared images; add descriptive alternative text in the PreTeXt source.
- `site/index.html`: collection index, with planned entries for Worksheets 2–12.
- `output/`: generated files, excluded from Git.

## Add another worksheet

1. Copy `templates/worksheet.ptx` to `source/worksheet2.ptx`.
2. Replace `NUMBER` with `2` in the article ID and title, then edit the content.
3. Add this target inside `<targets>` in `project.ptx`, keeping numeric order:

```xml
<target name="worksheet2" format="html" source="worksheet2.ptx" deploy-dir="worksheet2">
  <stringparams html.css.extra="external/custom.css"/>
</target>
```

4. Replace the planned entry in `site/index.html` with a link to `worksheet2/`.
5. Run `pretext build worksheet2` and check both screen and print views.

Repeat for later worksheets; the structure is not limited to twelve. Keep
shared presentation changes in the publication file and CSS. Explicit `<page>`
elements control printed pages; `workspace` allocates writing space. Check page
fit after editing questions or adding images.

## Preview the whole collection

```sh
pretext build --deploys
pretext deploy --stage-only
python3 -m http.server 8000 --directory output/stage --bind 127.0.0.1
```

Open <http://localhost:8000>. The index and worksheet links use relative paths,
so the staged site can later be hosted under a repository URL.

The GitHub workflow builds and saves the staged site as an artifact; it does
not publish it. No remote repository or hosting destination is configured.

## Attribution

The project structure and CSS are adapted from the Math 152 Hands-On, Grades Up
repository. Its MIT licence is retained in `LICENSE`. Mathematical content,
Texas A&M branding, logos, and course-specific images have not been copied.
