import type { Metadata } from "next";
import { notFound } from "next/navigation";
import speakersData from "@/data/speakers.json";
import SpeakerDetail from "@/app/components/SpeakerDetail";

type Speaker = {
  group: string;
  slug: string;
  name: string;
  designation: string;
  photo: string;
  alt: string;
  bodyHtml: string;
};

const speakers = speakersData as Record<string, Speaker>;

// Main speakers (speaker-1..41) and graduate speakers (g-speaker-1..4) both live
// at /speakers-bio/<slug>.
export function generateStaticParams() {
  return Object.values(speakers)
    .filter((s) => s.group === "main" || s.group === "graduate")
    .map((s) => ({ slug: s.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = speakers[slug];
  return {
    title: s ? s.name : "Speaker",
    alternates: { canonical: `/speakers-bio/${slug}` },
  };
}

export default async function SpeakerBioPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = speakers[slug];
  if (!s || (s.group !== "main" && s.group !== "graduate")) notFound();
  return <SpeakerDetail html={s.bodyHtml} />;
}
