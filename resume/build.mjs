/**
 * Builds public/Muhammad_Ahmed_Resume.pdf from resume/template.html
 *
 *   node resume/build.mjs
 *
 * - Inlines the hero profile photo (public/Ahmed_hero_img.jpeg) as base64 so the
 *   PDF can never fail to render it.
 * - Inlines static font instances (Inter / JetBrains Mono) so typography is
 *   identical on every machine and the text stays selectable/searchable.
 * - Renders with headless Chrome to an exact A4 single page.
 */
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { inflateSync } from "node:zlib";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import os from "node:os";

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, "..");

const TEMPLATE = resolve(here, "template.html");
const AVATAR = resolve(root, "public", "Ahmed_hero_img.jpeg");
const FONT_DIR = resolve(here, "fonts");
const BUILT = resolve(here, "cv.built.html");
const OUT_PDF = resolve(root, "public", "Muhammad_Ahmed_Resume.pdf");

const FONTS = [
  { file: "Inter-400", token: "INTER_400" },
  { file: "Inter-500", token: "INTER_500" },
  { file: "Inter-600", token: "INTER_600" },
  { file: "Inter-700", token: "INTER_700" },
  { file: "Inter-800", token: "INTER_800" },
  { file: "JetBrainsMono-500", token: "MONO_500" },
  { file: "JetBrainsMono-600", token: "MONO_600" },
];

const CHROME_CANDIDATES = [
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
  "C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe",
];

for (const f of [
  TEMPLATE,
  AVATAR,
  ...FONTS.map((n) => resolve(FONT_DIR, n.file + ".woff2")),
]) {
  if (!existsSync(f)) {
    console.error("Missing required input:", f);
    process.exit(1);
  }
}

const b64 = (p) => readFileSync(p).toString("base64");

// 1. Assemble HTML with embedded assets
let html = readFileSync(TEMPLATE, "utf8");
html = html.replace("{{AVATAR_B64}}", b64(AVATAR));
for (const n of FONTS) {
  const token = "{{" + n.token + "}}";
  if (!html.includes(token)) {
    console.error("Template is missing token:", token);
    process.exit(1);
  }
  html = html.split(token).join(b64(resolve(FONT_DIR, n.file + ".woff2")));
}

const leftover = html.match(/\{\{[A-Z0-9_]+\}\}/g);
if (leftover) {
  console.error("Unreplaced token(s) left in template:", [...new Set(leftover)]);
  process.exit(1);
}
writeFileSync(BUILT, html);
console.log("✓ assembled", BUILT, `(${(html.length / 1024).toFixed(0)} KB)`);

// 2. Locate a Chromium browser
const browser = CHROME_CANDIDATES.find((p) => existsSync(p));
if (!browser) {
  console.error("No Chrome/Edge found. Install Chrome or edit CHROME_CANDIDATES.");
  process.exit(1);
}
console.log("✓ browser:", browser);

// 3. Print to PDF (A4, no header/footer, background graphics on)
const profile = resolve(os.tmpdir(), "cv-build-profile");
mkdirSync(profile, { recursive: true });

const args = [
  "--headless=new",
  "--disable-gpu",
  "--no-sandbox",
  "--no-first-run",
  "--no-pdf-header-footer",
  "--print-to-pdf-no-header",
  "--virtual-time-budget=10000",
  `--user-data-dir=${profile}`,
  `--print-to-pdf=${OUT_PDF}`,
  "file:///" + BUILT.replace(/\\/g, "/"),
];

execFileSync(browser, args, { stdio: ["ignore", "ignore", "pipe"] });

if (!existsSync(OUT_PDF)) {
  console.error("PDF was not produced:", OUT_PDF);
  process.exit(1);
}
const kb = (readFileSync(OUT_PDF).length / 1024).toFixed(1);
console.log("✓ wrote", OUT_PDF, `(${kb} KB)`);

// 4. Assert the fonts actually embedded (guards against silent fallback to
//    system fonts, which would change the typography of the finished CV).
const raw = readFileSync(OUT_PDF).toString("latin1");
let inflated = "";
const sre = /stream\r?\n/g;
let sm;
while ((sm = sre.exec(raw)) !== null) {
  const a = sm.index + sm[0].length;
  const b = raw.indexOf("endstream", a);
  if (b === -1) continue;
  try {
    inflated += inflateSync(Buffer.from(raw.slice(a, b), "latin1")).toString("latin1");
  } catch {
    /* not a flate stream */
  }
}
const all = raw + inflated;
const baseFonts = [...new Set([...all.matchAll(/\/BaseFont\s*\/([A-Za-z0-9+\-_,]+)/g)].map((m) => m[1]))];
const type3 = /\/Subtype\s*\/Type3/.test(all);
const pages = (all.match(/\/Type\s*\/Page[^s]/g) || []).length;

console.log("\n  pages      :", pages, pages === 1 ? "OK" : "!! expected 1");
console.log("  fonts      :", baseFonts.join(" | ") || "none");
console.log("  Type3 glyphs:", type3 ? "yes (text not searchable)" : "no (text selectable)");

if (pages !== 1) {
  console.error("\n!! CV overflowed to " + pages + " pages — trim resume/template.html content.");
  process.exit(1);
}
if (type3) {
  console.error("\n!! Type3 fonts detected — text is not selectable. Check the @font-face blocks.");
  process.exit(1);
}
if (!baseFonts.length) {
  console.error("\n!! No embedded fonts — the @font-face data URIs did not load.");
  process.exit(1);
}
console.log("  RESULT     : PASS — single page, real embedded fonts\n");
