// One-off parser: reads the original static speaker HTML and emits structured
// JSON used by the Next.js speaker routes.
//
//   node scripts/parse-speakers.mjs
//
// Outputs:
//   data/speakers.json         — one entry per bio (detail pages + metadata)
//   data/speakers-listing.json — the /speakers listing cards, grouped & ordered
//
// The bio BODY is captured as raw HTML (inner of <section class="speaker-detail">)
// to preserve inline links / exact wording; only internal *.html links are
// rewritten to clean routes.

import { readFileSync, writeFileSync, readdirSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROJECT = join(__dirname, "..");
const SRC = "C:/Users/Owolabi Muktar/Desktop/MSJ Document/MSJ-Project/MSJ-Project";
const BIO_DIR = join(SRC, "speakers-bio");

function rewriteLinks(html) {
  return html
    .replace(/href="\/?index\.html"/g, 'href="/"')
    .replace(/href="\/?about\.html"/g, 'href="/about"')
    .replace(/href="\/?speakers\.html"/g, 'href="/speakers"')
    .replace(/href="\/?contact\.html"/g, 'href="/contact"')
    .replace(/href="\/?workshops\.html"/g, 'href="/workshops"')
    .replace(/href="\/?opportunities\.html"/g, 'href="/opportunities"')
    .replace(/href="\/?privacy\.html"/g, 'href="/privacy"')
    .replace(/href="\/?terms\.html"/g, 'href="/terms"');
}

function textOf(html) {
  return html
    .replace(/<[^>]+>/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function parseBio(file, group) {
  const html = readFileSync(file, "utf8");

  const nameM = html.match(/<h1 class="speaker-name">([\s\S]*?)<\/h1>/);
  const desM = html.match(/<p class="speaker-designation">([\s\S]*?)<\/p>/);
  const imgTagM = html.match(/<img\b[^>]*class="[^"]*speaker-image[^"]*"[^>]*>/);
  const imgTag = imgTagM ? imgTagM[0] : "";
  const srcM = imgTag.match(/src="([^"]*)"/);
  const altM = imgTag.match(/alt="([^"]*)"/);

  const sectionM = html.match(
    /<section class="speaker-detail container">([\s\S]*?)<\/section>/
  );

  return {
    group,
    name: nameM ? textOf(nameM[1]) : "",
    designation: desM ? textOf(desM[1]) : "",
    photo: srcM ? srcM[1] : "",
    alt: altM ? altM[1] : "",
    bodyHtml: sectionM ? rewriteLinks(sectionM[1]).trim() : "",
  };
}

// --- Bios ---------------------------------------------------------------
const speakers = {};

// main speakers: speaker-1..41
for (const f of readdirSync(BIO_DIR)) {
  const m = f.match(/^speaker-(\d+)\.html$/);
  if (m) speakers[`speaker-${m[1]}`] = { slug: `speaker-${m[1]}`, ...parseBio(join(BIO_DIR, f), "main") };
}
// graduate: g-speaker-1..4 (same URL level)
for (const f of readdirSync(BIO_DIR)) {
  const m = f.match(/^g-speaker-(\d+)\.html$/);
  if (m) speakers[`g-speaker-${m[1]}`] = { slug: `g-speaker-${m[1]}`, ...parseBio(join(BIO_DIR, f), "graduate") };
}
// 2025 speakers: 2025-speakers/speaker-01..22
const DIR_2025 = join(BIO_DIR, "2025-speakers");
for (const f of readdirSync(DIR_2025)) {
  const m = f.match(/^speaker-(\d+)\.html$/);
  if (m) speakers[`2025/speaker-${m[1]}`] = { slug: `speaker-${m[1]}`, ...parseBio(join(DIR_2025, f), "2025") };
}

// --- Listing (speakers.html) -------------------------------------------
const listingHtml = readFileSync(join(SRC, "speakers.html"), "utf8");
const cardRe = /<div class="speaker">([\s\S]*?)<\/div>/g;
const groups = { "2025": [], main: [], graduate: [] };
let cm;
while ((cm = cardRe.exec(listingHtml))) {
  const card = cm[1];
  const img = card.match(/<img\s+src="([^"]*)"\s+alt="([^"]*)"\s*\/?>/);
  const name = card.match(/<h2 class="speaker-name">([\s\S]*?)<\/h2>/);
  const des = card.match(/<p class="speaker-designation">([\s\S]*?)<\/p>/);
  const href = card.match(/<a\s+href="([^"]*)"[^>]*class="[^"]*view-more/);
  if (!img || !name || !href) continue;
  let route = href[1].replace(/\.html$/, "");
  if (!route.startsWith("/")) route = "/" + route;
  const g = route.includes("2025-speakers") ? "2025" : route.includes("g-speaker") ? "graduate" : "main";
  groups[g].push({
    photo: img[1],
    alt: img[2],
    name: textOf(name[1]),
    designation: des ? textOf(des[1]) : "",
    href: route,
  });
}

const listing = [
  { key: "2025", toggleHeading: "2025 Speakers", pageTitle: "Science Speakers 2025", cards: groups["2025"] },
  { key: "main", toggleHeading: "2023-2024 Speakers", pageTitle: "Science Speakers", cards: groups.main },
  { key: "graduate", toggleHeading: null, pageTitle: "Graduate School Speakers", cards: groups.graduate },
];

// --- Write --------------------------------------------------------------
mkdirSync(join(PROJECT, "data"), { recursive: true });
writeFileSync(join(PROJECT, "data", "speakers.json"), JSON.stringify(speakers, null, 2));
writeFileSync(join(PROJECT, "data", "speakers-listing.json"), JSON.stringify(listing, null, 2));

console.log("Bios parsed:", Object.keys(speakers).length);
console.log("Listing counts:", listing.map((g) => `${g.key}:${g.cards.length}`).join(" "));
