// One-off parser for the 6 team bio pages -> data/team.json
//   node scripts/parse-team.mjs
//
// Each team page is a small Owl carousel of "slides" (content + image). We
// capture each slide's inner HTML verbatim (rewriting /about.html links) plus
// its class/id, so the Swiper-based template can reproduce them exactly.

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROJECT = join(__dirname, "..");
const SRC = "C:/Users/Owolabi Muktar/Desktop/MSJ Document/MSJ-Project/MSJ-Project/team-deets";

const SLUGS = ["anita", "cynthia", "david", "lilian", "nehemiah", "ruth"];

function rewriteLinks(html) {
  return html
    .replace(/href="\/?about\.html#experts"/g, 'href="/about#experts"')
    .replace(/href="\/?about\.html"/g, 'href="/about"')
    .replace(/href="\/?index\.html"/g, 'href="/"')
    .replace(/href="\/?speakers\.html"/g, 'href="/speakers"')
    .replace(/href="\/?contact\.html"/g, 'href="/contact"');
}

function parseTeam(slug) {
  const html = readFileSync(join(SRC, `${slug}.html`), "utf8");
  const titleM = html.match(/<title>([\s\S]*?)<\/title>/);

  // Grab the slider block (up to the first <script>).
  const sliderStart = html.indexOf('<div class="slider');
  const scriptStart = html.indexOf("<script", sliderStart);
  const sliderBlock = html.slice(sliderStart, scriptStart);

  // Split into slides on the slide-div marker. The trailing space is required
  // so we don't also match the outer `<div class="slider ...">` wrapper.
  const parts = sliderBlock.split('<div class="slide ');
  const slides = [];
  for (let i = 1; i < parts.length; i++) {
    const chunk = parts[i];
    const gt = chunk.indexOf(">");
    const opening = chunk.slice(0, gt); // e.g. `gradient-background" id="slide1"`
    const rest = chunk.slice(gt + 1);
    const lastClose = rest.lastIndexOf("</div>");
    const inner = rewriteLinks((lastClose >= 0 ? rest.slice(0, lastClose) : rest).trim());

    const classExtra = opening.slice(0, opening.indexOf('"')).trim();
    const className = ("slide " + classExtra).trim();
    const idM = opening.match(/id="([^"]*)"/);

    // Break the slide into its structured pieces so they can render as direct
    // children of the Swiper slide (matching the original .slide > content/img).
    const headingM = inner.match(/<h2>([\s\S]*?)<\/h2>/);
    const pM = inner.match(/<p>([\s\S]*?)<\/p>/);
    const aM = inner.match(/<a\s+href="([^"]*)"[^>]*class="([^"]*)"[^>]*>([\s\S]*?)<\/a>/);
    const imgM = inner.match(/<img\s+src="([^"]*)"\s+alt="([^"]*)"\s*\/?>/);

    slides.push({
      className,
      id: idM ? idM[1] : "",
      heading: headingM ? headingM[1].trim() : "",
      bodyHtml: pM ? pM[1].trim() : "",
      linkHref: aM ? aM[1] : "/about#experts",
      linkClass: aM ? aM[2] : "know-more",
      linkText: aM ? aM[3].trim() : "Go Back",
      img: imgM ? imgM[1] : "",
      alt: imgM ? imgM[2] : "",
    });
  }

  return {
    slug,
    title: titleM ? titleM[1].trim() : slug,
    slides,
  };
}

const team = {};
for (const slug of SLUGS) team[slug] = parseTeam(slug);

mkdirSync(join(PROJECT, "data"), { recursive: true });
writeFileSync(join(PROJECT, "data", "team.json"), JSON.stringify(team, null, 2));

console.log(
  "Team parsed:",
  Object.values(team)
    .map((t) => `${t.slug}:${t.slides.length}slide(s)`)
    .join(" ")
);
