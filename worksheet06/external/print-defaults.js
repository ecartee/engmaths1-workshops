/*
 * Print defaults for the worksheet print preview: A4 paper, with the course
 * header and copyright footer shown.
 *
 * PreTeXt keeps these choices in localStorage. With nothing stored it lays the
 * first preview out as US Letter (while it looks up the reader's region from a
 * third-party service) and hides headers and footers. Storing our defaults
 * before PreTeXt's start-up code runs avoids both, and skips that lookup.
 *
 * Only missing values are filled in, so a reader who picks Letter or turns a
 * header off in the print preview keeps that choice.
 *
 * Loaded at the end of each page via html.js.extra in project.ptx.
 */
(function () {
  var defaults = {
    "papersize": "a4",
    "print-first-page-header": "true",
    "print-running-header": "true",
    "print-first-page-footer": "true",
    "print-running-footer": "true"
  };
  var paperSize = defaults.papersize;
  try {
    Object.keys(defaults).forEach(function (key) {
      if (!window.localStorage.getItem(key)) {
        window.localStorage.setItem(key, defaults[key]);
      }
    });
    paperSize = window.localStorage.getItem("papersize");
  } catch (e) {
    /* Storage unavailable (e.g. private browsing): PreTeXt's defaults apply. */
  }

  /*
   * PreTeXt sizes the on-screen pages but leaves the printed paper size to the
   * print dialog, which follows the computer's regional settings. Ask for the
   * matching paper size so "Save as PDF" produces A4 as well.
   */
  function setPrintedPaperSize(size) {
    var style = document.getElementById("paper-size-css");
    if (!style) {
      style = document.createElement("style");
      style.id = "paper-size-css";
      document.head.appendChild(style);
    }
    style.textContent = "@page { size: " + (size === "letter" ? "letter" : "A4") + " portrait; }";
  }
  setPrintedPaperSize(paperSize);
  document.addEventListener("change", function (event) {
    if (event.target && event.target.name === "papersize") {
      setPrintedPaperSize(event.target.value);
    }
  });
})();
