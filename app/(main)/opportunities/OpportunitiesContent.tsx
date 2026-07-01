"use client";

import { useState } from "react";

/* eslint-disable @next/next/no-img-element */

/**
 * Opportunities Hub body. The original used an inline filterOpps() function that
 * toggled category visibility; here it's React state. Content reproduced verbatim
 * from opportunities.html.
 */
type Opp = { name: string; desc: string; url: string };
type Category = {
  key: string;
  title: string;
  headerIconClass: string; // icon-blue | icon-orange | icon-green
  headerIcon: string; // boxicon for the category header
  cardLogoIcon: string; // boxicon inside each card
  dividerClass: string; // divider-blue | divider-orange | divider-green
  cardColor: string; // "" | "orange" | "green"
  items: Opp[];
};

const CATEGORIES: Category[] = [
  {
    key: "scholarship",
    title: "Scholarships & Fellowships",
    headerIconClass: "icon-blue",
    headerIcon: "bx-award",
    cardLogoIcon: "bx-trophy",
    dividerClass: "divider-blue",
    cardColor: "",
    items: [
      { name: "Best Graduate Schools", desc: "Comprehensive rankings and information on the best graduate schools to help you find the right programme for your scientific career.", url: "https://www.usnews.com/best-graduate-schools" },
      { name: "Find a PhD", desc: "A searchable database of PhD opportunities across the world. Find funded doctoral programmes that match your research interests.", url: "https://www.findaphd.com/" },
      { name: "Opportunities for Africans", desc: "A dedicated platform listing scholarships, fellowships, grants and other opportunities specifically for African students and researchers.", url: "https://www.opportunitiesforafricans.com/" },
      { name: "Scholarships for Development", desc: "Lists scholarships, fellowships and grants for students from developing countries, with a focus on science and development fields.", url: "https://www.scholars4dev.com/" },
      { name: "Opportunity Desk", desc: "A global platform aggregating scholarships, fellowships, conferences, competitions and internships for students and young professionals.", url: "https://opportunitydesk.org/" },
      { name: "MOEST Kenya", desc: "Kenya's Ministry of Education website listing government scholarships and funding opportunities for Kenyan students.", url: "https://www.education.go.ke/" },
      { name: "Chevening Scholarships", desc: "UK government's global scholarship programme offering fully funded master's degrees at UK universities for future leaders.", url: "https://www.chevening.org/scholarships/application-timeline/" },
      { name: "Commonwealth Scholarship", desc: "Commonwealth Shared Scholarship Scheme at UCL for students from developing Commonwealth countries to pursue master's degrees.", url: "https://www.ucl.ac.uk/scholarships/commonwealth-shared-scholarship-scheme" },
      { name: "Liverpool School of Tropical Medicine", desc: "Masters funding and scholarships at the Liverpool School of Hygiene and Tropical Medicine for global health researchers.", url: "https://www.lshtm.ac.uk/study/fees-and-funding/funding-scholarships/masters-funding" },
      { name: "Canadian Universities Scholarships", desc: "Masters scholarships available at Canadian universities for international students pursuing graduate studies in science.", url: "https://opportunitydesk.info/masters-scholarships-in-canada/" },
      { name: "Opportunitiespedia", desc: "British Council and other fully funded scholarships without IELTS requirements listed for international applicants.", url: "https://opportunitiespedia.com/british-council-scholarships-2022-23-without-ielts-fully-funded/" },
      { name: "Fully Funded Scholarships", desc: "Comprehensive list of fully funded scholarships for international students across Canada and other countries.", url: "https://greatyop.com/fully-funded-scholarships-for-international-students/" },
      { name: "McCall MacBain Scholarships — Canada", desc: "Full-funding scholarship at McGill University, Canada, for students with exceptional academic achievement and leadership potential.", url: "https://mccallmacbainscholars.org/" },
      { name: "Ireland Fellows Programme — Africa", desc: "Irish Aid Fellows Programme offering postgraduate scholarships for students from African countries to study in Ireland.", url: "https://www.irishaidfellowships.ie/strands/ireland-fellows-programme-africa" },
      { name: "University of South Australia Scholarships", desc: "Scholarship opportunities at the University of South Australia for international students across various disciplines.", url: "https://opportunitiespedia.com/university-of-south-australia-scholarships/" },
      { name: "Scholarship DB", desc: "A searchable database of scholarships from around the world, filterable by country, level of study and field.", url: "https://scholarshipdb.net/" },
      { name: "Agristok", desc: "Agricultural and science scholarships and opportunities blog with curated listings for African students and researchers.", url: "https://agristok.blogspot.com/" },
      { name: "Begenomics PhD Scholarships", desc: "PhD scholarship listings in genomics and related sciences, curated for African scientists interested in advanced research training.", url: "http://www.begenomics.com/phdscholarship/" },
      { name: "FindAMasters", desc: "A comprehensive search engine for masters programmes and scholarships at universities worldwide.", url: "https://www.findamasters.com/" },
    ],
  },
  {
    key: "job",
    title: "Jobs & Internships",
    headerIconClass: "icon-orange",
    headerIcon: "bx-briefcase",
    cardLogoIcon: "bx-briefcase",
    dividerClass: "divider-orange",
    cardColor: "orange",
    items: [
      { name: "Jobs and PhDs in UK — jobs.ac.uk", desc: "The leading job board for academic, research and science positions in the UK, including PhD studentships and postdoctoral roles.", url: "https://www.jobs.ac.uk/" },
      { name: "Indeed — USA Jobs", desc: "Search science and research job listings across the United States on one of the world's largest employment platforms.", url: "https://www.indeed.com/q-usa-jobs.html" },
      { name: "EURES — European Job Portal", desc: "The European Union's job mobility portal connecting jobseekers with employers across all EU member states.", url: "https://europa.eu/eures/portal/jv-se/home?lang=en" },
      { name: "Careers in Africa", desc: "Africa's leading recruitment platform connecting professionals with top employers across the continent in various sectors.", url: "https://www.careersinafrica.com/" },
      { name: "NGO Jobs in Africa", desc: "Dedicated job board for NGO and non-profit positions across Africa, including science communication and health roles.", url: "https://ngojobsinafrica.com/" },
      { name: "SEEK — Australia Jobs", desc: "Australia's largest employment marketplace with thousands of science and research job listings across the country.", url: "https://www.seek.com.au/jobs" },
    ],
  },
  {
    key: "phd",
    title: "Established PhD Studentship Programs",
    headerIconClass: "icon-blue",
    headerIcon: "bx-book-open",
    cardLogoIcon: "bx-book-open",
    dividerClass: "divider-blue",
    cardColor: "",
    items: [
      { name: "AfOx-Kennedy Trust Prize Studentship — Oxford", desc: "A fully funded DPhil (PhD) studentship at the University of Oxford, jointly supported by the Africa Oxford Initiative (AfOx) and the Kennedy Trust for Rheumatology Research. Open to African researchers pursuing doctoral studies in Oxford.", url: "https://www.kennedy.ox.ac.uk/study-with-us/the-afox-kennedy-trust-prize-studentship" },
      { name: "Vienna Biocenter PhD Programme", desc: "Internationally renowned PhD programme in molecular biology at the Vienna Biocenter in Austria, fully funded with competitive stipends.", url: "https://www.viennabiocenter.org/" },
      { name: "IST Austria PhD Programme", desc: "Fully funded PhD programme at the Institute of Science and Technology Austria, covering biology, physics, mathematics and computer science.", url: "https://phd.pages.ist.ac.at/funding-and-awards/" },
      { name: "iGRAD Plant — Düsseldorf", desc: "International graduate school in plant science at Heinrich Heine University Düsseldorf, offering structured PhD training.", url: "https://www.igrad-plant.hhu.de/" },
      { name: "Midlands Integrative Biosciences Training Partnership", desc: "BBSRC-funded doctoral training partnership at the University of Warwick offering interdisciplinary PhD projects in biosciences.", url: "https://warwick.ac.uk/fac/cross_fac/mibtp/about_mibtp/" },
      { name: "Wellcome Trust 4-Year PhD Studentships", desc: "Wellcome Trust funded four-year PhD studentship programmes in science for outstanding students with strong research potential.", url: "https://wellcome.org/research-funding/schemes/four-year-phd-studentships-science-closed" },
      { name: "Wellcome Sanger Institute PhD Programme", desc: "4-year PhD programme at the Wellcome Sanger Institute in genomics, bioinformatics and related fields with full funding.", url: "https://www.sanger.ac.uk/about/study/phd-programmes/4-year-phd-programme/" },
      { name: "Wellcome PhD Fellowships for Health Professionals", desc: "Wellcome Trust PhD fellowships for health professionals who want to develop their research skills and scientific career.", url: "https://wellcome.org/research-funding/schemes/phd-fellowships-health-professionals" },
    ],
  },
  {
    key: "grant",
    title: "Grants",
    headerIconClass: "icon-green",
    headerIcon: "bx-dollar-circle",
    cardLogoIcon: "bx-dollar-circle",
    dividerClass: "divider-green",
    cardColor: "green",
    items: [
      { name: "Gates Foundation Grant Opportunities", desc: "Bill & Melinda Gates Foundation grant opportunities supporting global health, development and education initiatives across Africa and beyond.", url: "https://www.gatesfoundation.org/about/how-we-work/grant-opportunities" },
      { name: "Wellcome Trust Funded Grants", desc: "Wellcome Trust's portfolio of funded grants supporting biomedical science, global health and the humanities and social sciences.", url: "https://wellcome.org/research-funding/funding-portfolio/funded-grants" },
      { name: "FRP — Funders for Reproductive Health", desc: "Grants and funding opportunities focused on reproductive health research and programmes, particularly in low and middle income countries.", url: "https://frp.org/" },
      { name: "Opportunities for Youth — Grants", desc: "A curated listing of grant opportunities for youth-led organisations and young researchers working in science and development.", url: "https://opportunitiesforyouth.org/?s=grants" },
    ],
  },
];

const FILTERS = [
  { key: "all", label: "All" },
  { key: "scholarship", label: "Scholarships & Fellowships" },
  { key: "phd", label: "PhD Programmes" },
  { key: "job", label: "Jobs & Internships" },
  { key: "grant", label: "Grants" },
];

export default function OpportunitiesContent() {
  const [active, setActive] = useState("all");

  return (
    <>
      {/* Hero */}
      <section className="opps-hero">
        <div>
          <h1>Opportunities Hub</h1>
          <p>
            Curated scholarships, fellowships, jobs and grants for African scientists — all in
            one place.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <div className="filter-bar">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            className={`filter-btn${active === f.key ? " active" : ""}`}
            onClick={() => setActive(f.key)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="opps-body">
        {CATEGORIES.map((cat) => {
          const visible = active === "all" || active === cat.key;
          return (
            <div
              key={cat.key}
              className="opps-category"
              data-category={cat.key}
              style={{ display: visible ? undefined : "none" }}
            >
              <div className="category-header">
                <div className={`category-icon ${cat.headerIconClass}`}>
                  <i className={`bx ${cat.headerIcon}`}></i>
                </div>
                <h2>{cat.title}</h2>
              </div>
              <div className={`section-divider ${cat.dividerClass}`}></div>
              <div className="opps-grid">
                {cat.items.map((opp) => (
                  <div key={opp.name} className={`opp-card${cat.cardColor ? " " + cat.cardColor : ""}`}>
                    <div className="opp-card-top">
                      <div className={`opp-logo-placeholder${cat.cardColor ? " " + cat.cardColor : ""}`}>
                        <i className={`bx ${cat.cardLogoIcon}`}></i>
                      </div>
                      <span className="opp-name">{opp.name}</span>
                    </div>
                    <span className="opp-deadline ongoing">
                      <i className="bx bx-time-five"></i> Rolling Applications
                    </span>
                    <p className="opp-description">{opp.desc}</p>
                    <a
                      href={opp.url}
                      className={`opp-apply-btn${cat.cardColor ? " " + cat.cardColor : ""}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit →
                    </a>
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        {/* Recent Events */}
        <section
          id="current-opportunities"
          style={{ background: "linear-gradient(135deg, #005BB5, #00bfff)", padding: "70px 20px" }}
        >
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "60px",
                alignItems: "center",
              }}
            >
              <div>
                <h2 style={{ color: "#fff", fontSize: "2.2rem", fontWeight: 700, marginBottom: "10px" }}>
                  Recent Events
                </h2>
                <div
                  style={{
                    width: "60px",
                    height: "4px",
                    background: "#FFA500",
                    borderRadius: "2px",
                    marginBottom: "24px",
                  }}
                ></div>
                <p
                  style={{
                    color: "rgba(255,255,255,0.9)",
                    fontSize: "1.05rem",
                    lineHeight: 1.75,
                    marginBottom: "20px",
                  }}
                >
                  Stay up to date with the latest events, workshops and initiatives from{" "}
                  <em>My Science Journey</em>. These are open opportunities for African scientists
                  and community members to engage, learn and grow.
                </p>
                <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.9rem" }}>
                  More opportunities are added regularly. Visit our{" "}
                  <a href="/opportunities" style={{ color: "#FFA500", fontWeight: 600 }}>
                    Opportunities Hub
                  </a>{" "}
                  for scholarships, jobs and grants.
                </p>
              </div>

              <div
                style={{
                  background: "#fff",
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.15)",
                }}
              >
                <div
                  style={{
                    background: "linear-gradient(135deg, #005BB5, #00bfff)",
                    padding: "24px",
                    textAlign: "center",
                  }}
                >
                  <img
                    src="/images/workshops/ss_updated_flier.jpeg"
                    alt="Sickle Cell Workshop Flyer"
                    style={{ width: "100%", borderRadius: "8px 8px 0 0", display: "block" }}
                  />
                </div>
                <div style={{ padding: "20px" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "16px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.88rem", color: "#444" }}>
                      <i className="bx bx-calendar" style={{ color: "#005BB5", fontSize: "1rem" }}></i>
                      <span>
                        <strong>Date:</strong> Thursday, 18th June 2026
                      </span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.88rem", color: "#444" }}>
                      <i className="bx bx-time" style={{ color: "#005BB5", fontSize: "1rem" }}></i>
                      <span>
                        <strong>Time:</strong> 8:00 AM – 11:30 AM (BST)
                      </span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.88rem", color: "#444" }}>
                      <i className="bx bx-video" style={{ color: "#005BB5", fontSize: "1rem" }}></i>
                      <span>
                        <strong>Format:</strong> Online via Zoom
                      </span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.88rem", color: "#444" }}>
                      <i className="bx bx-group" style={{ color: "#005BB5", fontSize: "1rem" }}></i>
                      <span>
                        <strong>Speakers:</strong> Dr. Siana Nkya, Dr. Mohamed Zahir, Arafa Salim
                      </span>
                    </div>
                  </div>
                  <div style={{ background: "#f0f5fc", borderRadius: "8px", padding: "12px", marginBottom: "16px" }}>
                    <p style={{ fontSize: "0.82rem", color: "#555", lineHeight: 1.6, margin: 0 }}>
                      A space for meaningful dialogue between lived experience and scientific
                      expertise on Sickle Cell Disease in African communities.
                    </p>
                  </div>
                  <a
                    href="/workshops#upcoming"
                    style={{
                      display: "block",
                      background: "#005BB5",
                      color: "#fff",
                      padding: "10px",
                      borderRadius: "50px",
                      textAlign: "center",
                      fontSize: "0.88rem",
                      fontWeight: 600,
                      textDecoration: "none",
                    }}
                  >
                    Learn More →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
