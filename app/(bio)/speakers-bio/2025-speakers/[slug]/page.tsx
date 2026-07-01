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

// 2025 speakers live at /speakers-bio/2025-speakers/<slug> and are keyed
// "2025/<slug>" in the data file.
export function generateStaticParams() {
  return Object.values(speakers)
    .filter((s) => s.group === "2025")
    .map((s) => ({ slug: s.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = speakers[`2025/${slug}`];
  return {
    title: s ? s.name : "Speaker",
    alternates: { canonical: `/speakers-bio/2025-speakers/${slug}` },
  };
}

export default async function Speaker2025BioPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = speakers[`2025/${slug}`];
  if (!s) notFound();
  return <SpeakerDetail html={s.bodyHtml} />;
}
