import type { MetadataRoute } from "next";
import speakersData from "@/data/speakers.json";
import teamData from "@/data/team.json";

const BASE = "https://mysciencejourney.com";

type Speaker = { group: string; slug: string };

// Required for static export (output: 'export') — emits a static sitemap.xml.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "/",
    "/about",
    "/speakers",
    "/workshops",
    "/opportunities",
    "/contact",
    "/privacy",
    "/terms",
  ];

  const speakers = Object.values(speakersData as Record<string, Speaker>).map((s) =>
    s.group === "2025"
      ? `/speakers-bio/2025-speakers/${s.slug}`
      : `/speakers-bio/${s.slug}`
  );

  const team = Object.keys(teamData as Record<string, unknown>).map(
    (slug) => `/team-deets/${slug}`
  );

  return [...staticRoutes, ...speakers, ...team].map((path) => ({
    url: `${BASE}${path}`,
  }));
}
