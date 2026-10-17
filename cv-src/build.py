"""Render the CV pages in cv-src/ to PDFs in docs/.

Usage (from the repository root):
    pip install playwright && playwright install chromium
    python3 cv-src/build.py
"""

import functools
import http.server
import threading
from pathlib import Path

from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parent.parent
PAGES = {
    "cv-src/cv-en.html": "docs/Reinaldo-Del-Dotore-CV-EN.pdf",
    "cv-src/cv-pt.html": "docs/Reinaldo-Del-Dotore-CV-PT.pdf",
}


def main() -> None:
    handler = functools.partial(http.server.SimpleHTTPRequestHandler, directory=str(ROOT))
    server = http.server.ThreadingHTTPServer(("127.0.0.1", 0), handler)
    threading.Thread(target=server.serve_forever, daemon=True).start()
    port = server.server_address[1]
    try:
        with sync_playwright() as p:
            browser = p.chromium.launch()
            page = browser.new_page()
            for src, out in PAGES.items():
                page.goto(f"http://127.0.0.1:{port}/{src}")
                page.evaluate("document.fonts.ready")
                page.pdf(path=str(ROOT / out), format="A4", print_background=True, prefer_css_page_size=True)
                print(f"{src} -> {out}")
            browser.close()
    finally:
        server.shutdown()


if __name__ == "__main__":
    main()
