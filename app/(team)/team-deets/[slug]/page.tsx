import type { Metadata } from "next";
import { notFound } from "next/navigation";
import teamData from "@/data/team.json";
import TeamContent from "./TeamContent";

type Slide = {
  className: string;
  id: string;
  heading: string;
  bodyHtml: string;
  linkHref: string;
  linkClass: string;
  linkText: string;
  img: string;
  alt: string;
};
type TeamMember = { slug: string; title: string; slides: Slide[] };

const team = teamData as Record<string, TeamMember>;

export function generateStaticParams() {
  return Object.keys(team).map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const name = slug.charAt(0).toUpperCase() + slug.slice(1);
  return {
    title: name,
    alternates: { canonical: `/team-deets/${slug}` },
  };
}

export default async function TeamPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const member = team[slug];
  if (!member) notFound();
  return <TeamContent slides={member.slides} />;
}
