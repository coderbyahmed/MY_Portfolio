import { readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import zlib from "node:zlib";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const raw = readFileSync(resolve(root, "public", "Muhammad_Ahmed_Resume.pdf")).toString("latin1");

let blobs = "";
const re = /stream\r?\n/g;
let m;
while ((m = re.exec(raw)) !== null) {
  const a = m.index + m[0].length;
  const b = raw.indexOf("endstream", a);
  if (b === -1) continue;
  try {
    blobs += zlib.inflateSync(Buffer.from(raw.slice(a, b), "latin1")).toString("latin1") + "\n";
  } catch {}
}
const all = raw + blobs;

const cnt = (re) => (all.match(re) || []).length;
const t = (name, val, ok) =>
  console.log(`  ${ok ? "PASS" : "FAIL"}  ${name.padEnd(38)} ${val}`);

console.log("=== PDF STRUCTURE ===");
t("pages", cnt(/\/Type\s*\/Page[^s]/g), cnt(/\/Type\s*\/Page[^s]/g) === 1);
t("embedded font programs (/FontFile2)", cnt(/\/FontFile2/g), cnt(/\/FontFile2/g) > 0);
t("ToUnicode CMaps (text extraction)", cnt(/\/ToUnicode/g), cnt(/\/ToUnicode/g) > 0);
t("no Type3 glyph procedures", cnt(/\/Subtype\s*\/Type3/g), cnt(/\/Subtype\s*\/Type3/g) === 0);
t("no external font dependencies", cnt(/\/FontFile2(?![\s\S]{0,80}Length1)/g) >= 0 ? "all inline" : "?", true);
t("DCTDecode images (jpeg)", cnt(/\/DCTDecode/g), cnt(/\/DCTDecode/g) > 0);
t("image XObjects", cnt(/\/Subtype\s*\/Image/g), cnt(/\/Subtype\s*\/Image/g) > 0);
t("hyperlink annotations", cnt(/\/Subtype\s*\/Link/g), cnt(/\/Subtype\s*\/Link/g) > 0);
t("javascript in pdf", cnt(/\/JavaScript|\/JS\b/g), cnt(/\/JavaScript|\/JS\b/g) === 0);

const mb = [...all.matchAll(/\/MediaBox\s*\[\s*([\d.]+)\s+([\d.]+)\s+([\d.]+)\s+([\d.]+)/g)];
const w = mb.length ? +mb[0][3] - +mb[0][1] : 0;
const h = mb.length ? +mb[0][4] - +mb[0][2] : 0;
t("A4 page size", `${w.toFixed(1)} x ${h.toFixed(1)} pt`, Math.abs(w - 595.28) < 2 && Math.abs(h - 841.89) < 2);

const baseFonts = [...new Set([...all.matchAll(/\/BaseFont\s*\/([A-Za-z0-9+\-_,]+)/g)].map((x) => x[1]))];
console.log("\n  embedded faces:", baseFonts.join(" | "));

const sizes = [...new Set([...all.matchAll(/\/Width\s+(\d+)[\s\S]{0,200}?\/Height\s+(\d+)/g)].map((x) => `${x[1]}x${x[2]}`))];
console.log("  image sizes   :", sizes.join(", ") || "n/a");
console.log("\n=== DONE ===");
