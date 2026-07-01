import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../../components/Footer";
import listingData from "@/data/speakers-listing.json";

/* eslint-disable @next/next/no-img-element */

export const metadata: Metadata = {
  title: "Speakers",
  alternates: { canonical: "/speakers" },
};

type Card = { photo: string; alt: string; name: string; designation: string; href: string };
type Group = { key: string; toggleHeading: string | null; pageTitle: string; cards: Card[] };

const listing = listingData as Group[];

function SpeakerGrid({ group }: { group: Group }) {
  return (
    <>
      {group.toggleHeading ? (
        <h2 id={`toggle-${group.key}`} className="toggle-heading">
          {group.toggleHeading}
        </h2>
      ) : null}
      <section className="bg-light py-5 speakers-section">
        <div className="container text-center">
          <div className="speaker-background" id="speakers-portfolio">
            <div className="speaker-overlay">
              <h2 className="page-title">{group.pageTitle}</h2>
              <div className="speakers-container">
                {group.cards.map((c) => (
                  <div className="speaker" key={c.href}>
                    <img src={c.photo} alt={c.alt} />
                    <h2 className="speaker-name">{c.name}</h2>
                    <p className="speaker-designation">{c.designation}</p>
                    <Link href={c.href} className="view-more page-loader">
                      View More
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default function SpeakersPage() {
  return (
    <>
      <section className="py-5">
        <div className="container text-center">
          <h2>Background</h2>
          <div className="row">
            <p>
              Since the inception of <em>My Science Journey</em> (MSJ) webinar series, our esteemed
              speakers have been the driving force behind realizing the mission of empowering
              scientists to navigate the complexities of their career growth. Each speaker,
              representing diverse fields from industry, research, and academia, has generously
              shared their time, personal experiences, and invaluable advice. Our speakers have
              shared timely experiences and problems they are solving in their respective
              disciplines, such as biotechnology, epidemiology, healthcare, food security,
              environmental health, pharmaceuticals, population genetics, aerospace engineering,
              and more. Their contributions have enriched our understanding of these fields and
              inspired My ScienceJourney community.
            </p>
          </div>
          <div className="bg-light text-center">
            <h2>Become a Speaker</h2>
            <p>
              Interested in sharing your scientific journey with our community? We&apos;d love to
              hear from you.
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSf7lqfrWDYfUstH1EZkdnF67ilYOD1nXrJvnpCHlfW9IfSchg/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Apply Now
            </a>
          </div>
        </div>
      </section>

      {listing.map((group) => (
        <SpeakerGrid key={group.key} group={group} />
      ))}

      <Footer variant="light" backToTop />
    </>
  );
}
