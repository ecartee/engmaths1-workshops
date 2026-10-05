#!/usr/bin/env python3
"""Audit built worksheets for the things that silently break them.

  * a <solution>, <answer> or <hint> in the source (solutions are never published)
  * a print preview that is not laid out for A4
  * a page too full to fit, or so full that working space is squeezed
  * more printed pages than a 50-minute workshop can use
  * a missing course header or copyright footer
  * an <image> with no <description>, so no alt text
  * serif or low-contrast text, and faint ink inside images

Usage:
    tools/audit.py                  # every target in project.ptx
    tools/audit.py worksheet03      # one target

Build first (this reads output/<target>/). Exits non-zero if any check fails,
so it doubles as a pre-deploy gate. Needs Firefox or Chrome; set AUDIT_BROWSER
to the executable if it is somewhere unusual. Set AUDIT_DEBUG=1 to see how long
the print preview took to settle and in what order its parts finished.
"""
import functools
import glob
import http.server
import json
import os
import queue
import shutil
import subprocess
import sys
import tempfile
import threading
import urllib.parse
import xml.etree.ElementTree as ET

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
A4 = (794, 1123)      # 210mm x 297mm at 96dpi
MAX_PAGES = 6         # a workshop is about 50 minutes: 4 pages, 6 at most
TIMEOUT_S = 120       # must outlast SETTLE_TIMEOUT_MS in audit.html plus two page loads
HIDDEN = ("solution", "answer", "hint")

BROWSERS = [
    "/Applications/Firefox.app/Contents/MacOS/firefox",
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "firefox", "google-chrome", "chromium", "chromium-browser",
]
FIREFOX_PREFS = """\
user_pref("browser.shell.checkDefaultBrowser", false);
user_pref("browser.startup.homepage_override.mstone", "ignore");
user_pref("startup.homepage_welcome_url", "");
user_pref("startup.homepage_welcome_url.additional", "");
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("toolkit.telemetry.reportingpolicy.firstRun", false);
user_pref("app.update.enabled", false);
"""


def find_browser():
    candidates = [os.environ["AUDIT_BROWSER"]] if os.environ.get("AUDIT_BROWSER") else BROWSERS
    for candidate in candidates:
        path = candidate if os.path.isabs(candidate) else shutil.which(candidate)
        if path and os.access(path, os.X_OK):
            return path
    sys.exit("audit: no browser found; install Firefox or Chrome, or set AUDIT_BROWSER")


def browser_command(browser, profile, url):
    if "firefox" in os.path.basename(browser).lower():
        with open(os.path.join(profile, "user.js"), "w") as prefs:
            prefs.write(FIREFOX_PREFS)
        return [browser, "--headless", "--no-remote", "--profile", profile, url]
    return [browser, "--headless=new", "--disable-gpu", "--no-first-run",
            "--user-data-dir=" + profile, "--window-size=1200,1500", url]


class Handler(http.server.SimpleHTTPRequestHandler):
    results = queue.Queue()

    def do_POST(self):
        if self.path != "/__audit_result":
            self.send_error(404)
            return
        length = int(self.headers.get("Content-Length", 0))
        self.results.put(json.loads(self.rfile.read(length)))
        self.send_response(204)
        self.end_headers()

    def log_message(self, *args):
        pass


def targets_in_project():
    project = ET.parse(os.path.join(ROOT, "project.ptx")).getroot()
    return {t.get("name"): t.get("source") for t in project.iter("target") if t.get("name")}


def check_source(source):
    """Solutions are kept outside the repository: fail if the source has any."""
    path = os.path.join(ROOT, "source", source)
    found = [el.tag for el in ET.parse(path).getroot().iter() if el.tag in HIDDEN]
    if found:
        counts = ", ".join("%d <%s>" % (found.count(tag), tag) for tag in HIDDEN if tag in found)
        print("   FAIL  source/%s contains %s -- solutions must not be published" % (source, counts))
        return False
    print("   ok    no solutions, answers or hints in source")
    return True


def check_render(d):
    ok = True
    pages = d["pages"]
    if os.environ.get("AUDIT_DEBUG") and d.get("settled"):
        print("   info  print preview settled after %dms: %s"
              % (d["settled"]["ms"], "; ".join(d["settled"]["timeline"])))
        print("   info  page bottoms: %s (limit %s)"
              % (" ".join(str(p["bottom"]) for p in pages), pages[0]["limit"] if pages else "-"))

    if d["print"]["paper"] != "a4" or any((p["width"], p["height"]) != A4 for p in pages):
        ok = False
        size = "%dx%d" % (pages[0]["width"], pages[0]["height"]) if pages else "no pages"
        print("   FAIL  print preview is not A4 by default (%s, %s)" % (d["print"]["paper"], size))
    else:
        print("   ok    print preview defaults to A4")

    over = [p for p in pages if p["over"]]
    for p in over:
        ok = False
        print("   FAIL  page %d runs into the bottom margin: %dpx > %dpx"
              % (p["page"], p["bottom"], p["limit"]))
    if pages and not over:
        print("   ok    %d pages fit" % len(pages))
    for p in pages:
        if p["scale"] is not None and p["scale"] < 1:
            ok = False
            print("   FAIL  page %d is over-full: working space squeezed to %d%% of what the source asks for"
                  % (p["page"], round(100 * p["scale"])))
    if len(pages) > MAX_PAGES:
        ok = False
        print("   FAIL  %d pages: more than the %d-page limit for a workshop" % (len(pages), MAX_PAGES))

    if d["print"]["header"] and d["print"]["footer"] and "©" in d["print"]["footerText"]:
        print("   ok    header and copyright footer print by default")
    else:
        ok = False
        print("   FAIL  header or copyright footer missing from the default print preview")

    if d["solutions"]:
        ok = False
        print("   FAIL  %d solution/answer/hint element(s) in the built page" % d["solutions"])

    missing = [i for i in d["images"] if i["missing"]]
    for i in missing:
        ok = False
        print("   FAIL  no alt text: %s -- add a <description> to its <image>" % i["src"])
    if not missing:
        print("   ok    %d image(s), all with alt text" % len(d["images"]))

    serif = [t for t in d["text"] if t["serif"]]
    for t in serif[:3]:
        ok = False
        print("   FAIL  serif font %r on %r" % (t["font"], t["sample"]))
    if not serif:
        print("   ok    no serif text in print preview")

    faint = [t for t in d["text"] if t["fail"]]
    for t in faint:
        ok = False
        print("   FAIL  text contrast %s:1 (needs %s) on %r" % (t["ratio"], t["need"], t["sample"]))
    if d["text"] and not faint:
        print("   ok    text contrast (lowest %s:1)" % min(t["ratio"] for t in d["text"]))

    for k in d["ink"]:
        if k["verdict"] == "OK":
            continue
        ok = False
        need = "below 3:1, too faint even for a bare curve" if k["verdict"] == "FAIL" \
            else "needs 4.5:1 for a curve label"
        print("   FAIL  %s: %s ink rgb(%s) at %s:1 -- %s"
              % (k["src"], k["family"], k["rgb"], k["ratio"], need))
    if d["ink"] and all(k["verdict"] == "OK" for k in d["ink"]):
        print("   ok    image ink contrast")
    return ok


def render(target, browser, port):
    built = sorted(glob.glob(os.path.join(ROOT, "output", target, "*wks.html")))
    if not built:
        print("   FAIL  no build found -- run: pretext build %s" % target)
        return None
    page = "/" + os.path.relpath(built[0], ROOT).replace(os.sep, "/")
    url = "http://127.0.0.1:%d/tools/audit.html?t=%s" % (port, urllib.parse.quote(page, safe=""))
    profile = tempfile.mkdtemp(prefix="worksheet-audit-")
    process = subprocess.Popen(browser_command(browser, profile, url),
                               stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    try:
        return Handler.results.get(timeout=TIMEOUT_S)
    except queue.Empty:
        print("   FAIL  no result from the browser after %ds (page failed to load?)" % TIMEOUT_S)
        return None
    finally:
        process.terminate()
        try:
            process.wait(timeout=10)
        except subprocess.TimeoutExpired:
            process.kill()
        shutil.rmtree(profile, ignore_errors=True)


def main():
    known = targets_in_project()
    targets = sys.argv[1:] or list(known)
    browser = find_browser()
    handler = functools.partial(Handler, directory=ROOT)
    server = http.server.ThreadingHTTPServer(("127.0.0.1", 0), handler)
    threading.Thread(target=server.serve_forever, daemon=True).start()

    failed = False
    for target in targets:
        print("== %s" % target)
        if target not in known:
            print("   FAIL  no such target in project.ptx")
            failed = True
            continue
        ok = check_source(known[target])
        result = render(target, browser, server.server_address[1])
        if result is None:
            ok = False
        elif "error" in result:
            print("   FAIL  %s" % result["error"])
            ok = False
        else:
            ok = check_render(result) and ok
        failed = failed or not ok
    server.shutdown()

    print()
    print("AUDIT FAILED" if failed else "audit passed")
    sys.exit(1 if failed else 0)


if __name__ == "__main__":
    main()
