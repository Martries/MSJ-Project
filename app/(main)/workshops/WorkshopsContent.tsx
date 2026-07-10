"use client";

import { useState } from "react";
import Modal from "react-bootstrap/Modal";

/* eslint-disable @next/next/no-img-element */

/**
 * Workshops page body. The original used Bootstrap's data-bs-toggle modals; here
 * the four "Read More" modals are driven by react-bootstrap <Modal> (no
 * bootstrap.js / jQuery). Content is reproduced verbatim from workshops.html.
 */
export default function WorkshopsContent() {
  const [show, setShow] = useState<number | null>(null);
  const close = () => setShow(null);

  return (
    <>
      {/* Hero */}
      <section className="workshops-hero">
        <div>
          <h1>Workshops</h1>
          <p>
            Bringing science to communities — through dialogue, collaboration, and hands-on
            engagement.
          </p>
        </div>
      </section>

      {/* Recent Workshop */}
      <div className="upcoming-section" id="upcoming">
        <div className="upcoming-inner">
          <h2>Recent Workshop</h2>
          <div className="section-divider"></div>

          <div className="past-workshop-card">
            <div style={{ gridColumn: "1 / -1", width: "100%" }}>
              <img
                src="/images/workshops/ss_updated_flier.jpeg"
                alt="Sickle Cell Disease Workshop Flyer"
                style={{ width: "100%", borderRadius: "10px", objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="workshop-info">
            <span className="workshop-tag" style={{ background: "#d1fae5", color: "#065f46" }}>
              18th June 2026
            </span>
            <h3>
              A Public Engagement Workshop on Sickle Cell Disease in African Communities
            </h3>
            <p className="workshop-date">
              Thursday, 18th June 2026 — 8:00 AM – 11:30 AM (BST) — Online via Zoom
            </p>
            <p>
              A space for meaningful dialogue between lived experience and scientific expertise
              on Sickle Cell Disease in African communities. Speakers include Dr. Siana Nkya,
              Dr. Mohamed Zahir and Arafa Salim.
            </p>
            <button className="workshop-btn" onClick={() => setShow(4)}>
              Read More
            </button>
            <a
              className="workshop-btn"
              href="https://youtube.com/playlist?list=PLN5ZoNe-sgzk&si=4b_KcpP2oj1JMG-m"
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch Session Videos
            </a>
          </div>
        </div>
      </div>

      {/* Past Workshops */}
      <div className="workshops-section">
        <h2>Spotlight on Previous Workshops</h2>
        <div className="section-divider"></div>

        <div className="past-workshops-grid">
          {/* Workshop 1 */}
          <div className="past-workshop-card">
            <div className="workshop-images">
              <img src="/images/workshops/workshop1a.jpg" alt="Future Researchers Poster Summit" />
              <img src="/images/workshops/workshop1b.jpg" alt="Future Researchers Poster Summit" />
              <img src="/images/workshops/workshop1c.jpg" alt="Future Researchers Poster Summit" />
            </div>
            <div className="workshop-info">
              <span className="workshop-tag">Science Communication</span>
              <h3>When Science Steps Out of the Classroom</h3>
              <p className="workshop-date">22nd January 2026 — Kenyatta University, Nairobi</p>
              <p>
                MSJ participated in the Future Researchers Poster Summit at Kenyatta
                University, organised by the Future Researchers Initiative — a convening
                designed to strengthen research culture and science communication among young
                scientists.
              </p>
              <button className="workshop-btn" onClick={() => setShow(1)}>
                Read More
              </button>
            </div>
          </div>

          {/* Workshop 2 */}
          <div className="past-workshop-card reverse">
            <div className="workshop-images">
              <img src="/images/workshops/workshop2a.jpg" alt="SCIJOURN-K Workshop" />
              <img src="/images/workshops/workshop2b.jpg" alt="SCIJOURN-K Workshop" />
              <img src="/images/workshops/workshop2c.jpg" alt="SCIJOURN-K Workshop" />
            </div>
            <div className="workshop-info">
              <span className="workshop-tag">Science Journalism</span>
              <h3>Connecting Scientists and Journalists for Impact</h3>
              <p className="workshop-date">28th November 2025 — Nairobi, Kenya</p>
              <p>
                MSJ joined the SCIJOURN-K Project end-of-program workshop, marking the close of
                an initiative focused on strengthening science journalism and science
                communication in Kenya. A meaningful opportunity to reflect, connect, and
                collectively look ahead.
              </p>
              <button className="workshop-btn" onClick={() => setShow(2)}>
                Read More
              </button>
            </div>
          </div>

          {/* Workshop 3 */}
          <div className="past-workshop-card">
            <div className="workshop-images">
              <img src="/images/workshops/workshop3d.jpg" alt="ICRF Science Communication Workshop" />
              <img src="/images/workshops/workshop3b.jpg" alt="ICRF Science Communication Workshop" />
              <img src="/images/workshops/workshop3c.jpg" alt="ICRF Science Communication Workshop" />
            </div>
            <div className="workshop-info">
              <span className="workshop-tag">Cancer Research Symposium</span>
              <h3>Science Communication Workshop — 2nd Cancer Research Symposium</h3>
              <p className="workshop-date">21st October 2025 — Kenyatta University, Nairobi</p>
              <p>
                MSJ proudly partnered with ICRF Kenya, Victor Oria, Patience Kiyuka and Hellen
                Shikanda to deliver an engaging Science Communication Workshop during the 2nd
                Cancer Research Symposium at Kenyatta University.
              </p>
              <button className="workshop-btn" onClick={() => setShow(3)}>
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal 1 */}
      <Modal show={show === 1} onHide={close} size="lg" scrollable aria-labelledby="modal1Label">
        <Modal.Header closeButton>
          <Modal.Title as="h5" id="modal1Label">
            When Science Steps Out of the Classroom
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <span className="modal-tag">Science Communication</span>
          <p className="modal-date">22nd January 2026 — Kenyatta University, Nairobi</p>
          <div className="modal-images">
            <img src="/images/workshops/workshop1a.jpg" alt="Future Researchers Poster Summit" />
            <img src="/images/workshops/workshop1b.jpg" alt="Future Researchers Poster Summit" />
            <img src="/images/workshops/workshop1c.jpg" alt="Future Researchers Poster Summit" />
          </div>
          <p>
            On 22 January 2026, <em>My Science Journey</em> (MSJ) was proud to participate in
            the Future Researchers Poster Summit at Kenyatta University, organized by the Future
            Researchers Initiative — a convening designed to strengthen research culture and
            science communication among young scientists.
          </p>
          <p>
            The summit created a rare and powerful space where young researchers presented their
            work, defended their ideas, and received critical feedback from a multidisciplinary
            jury. For many, it was their first opportunity to move research beyond coursework and
            into public conversation — a defining step in becoming a scientist.
          </p>
          <p>
            MSJ was represented by <strong>Lilian Ngina</strong>, who led discussions on science
            communication in a rapidly evolving digital world, emphasizing the importance of
            clarity, accessibility, and rigor in translating research for broader audiences.
          </p>
          <p>
            A key theme that emerged from both the panel discussions and student presentations
            was the importance of an entrepreneurial mindset in research — encouraging young
            scientists to think about relevance, usability, and impact from the very beginning of
            their work. Equally emphasized was the need to make science simple, without diluting
            its meaning, so that evidence can reach society, policy, and practice.
          </p>
          <p>
            What stood out most was the courage in the room: students asking bold questions,
            welcoming critique, and taking ownership of their work. It was a reminder that when
            young researchers are given the right platforms, they rise to the occasion.
          </p>
          <p>
            As <em>My Science Journey</em>, we remain committed to supporting early-career
            scientists to communicate with confidence, connect with broader audiences, and ensure
            their research travels beyond the lab and the lecture hall. The future of science is
            not just being written — it is being shared, shaped, and strengthened.
          </p>
        </Modal.Body>
      </Modal>

      {/* Modal 2 */}
      <Modal show={show === 2} onHide={close} size="lg" scrollable aria-labelledby="modal2Label">
        <Modal.Header closeButton>
          <Modal.Title as="h5" id="modal2Label">
            Connecting Scientists and Journalists for Impact
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <span className="modal-tag">Science Journalism</span>
          <p className="modal-date">28th November 2025 — Royal Tulip Hotel, Nairobi</p>
          <div className="modal-images">
            <img src="/images/workshops/workshop2a.jpg" alt="SCIJOURN-K Workshop" />
            <img src="/images/workshops/workshop2b.jpg" alt="SCIJOURN-K Workshop" />
            <img src="/images/workshops/workshop2c.jpg" alt="SCIJOURN-K Workshop" />
          </div>
          <p>
            On 28 November 2025, <em>My Science Journey</em> (MSJ) was proud to join the
            SCIJOURN-K Project end-of-program workshop, marking the close of an initiative
            focused on strengthening science journalism and science communication in Kenya.
          </p>
          <p>
            Held at Royal Tulip Hotel, and jointly led by Co-PIs <strong>Davis Mkoji</strong>{" "}
            and <strong>John Wahome</strong>, the workshop brought together 12 journalists and 6
            scientists, in collaboration with KEMRI Wellcome Trust, the University of California
            Santa Cruz, and Schmidt Sciences. Participants included journalists from Kenya media
            houses, communication officers from the Science for Africa Foundation and KEMRI
            Wellcome Trust, independent science journalists, and scientists from various research
            institutes.
          </p>
          <p>
            At the heart of the discussions was a shared question:{" "}
            <em>
              How can science stories become a national priority — accessible, accurate,
              people-centred, and rooted in Kenya&apos;s social realities?
            </em>
          </p>
          <p>
            The exchanges were honest and constructive. Journalists emphasized the need for
            timely access to data, clearer explanations of complex science, and human-centred
            storytelling. Scientists highlighted the importance of accuracy, context, and
            responsible communication of uncertainty.
          </p>
          <p>
            We are especially proud of our MSJ Ambassador, <strong>David Githaiga</strong>, who
            represented MSJ at the workshop — sharing our mission, vision, and the growing impact
            of our platform, including insights from our recent webinars advancing scientific
            literacy and youth engagement across Africa.
          </p>
          <p>
            We are grateful to <strong>Patience Kiyuka, Ph.D.</strong> for the continued
            collaboration, and we look forward to building an even stronger science communication
            culture in Kenya and beyond.
          </p>
        </Modal.Body>
      </Modal>

      {/* Modal 3 */}
      <Modal show={show === 3} onHide={close} size="lg" scrollable aria-labelledby="modal3Label">
        <Modal.Header closeButton>
          <Modal.Title as="h5" id="modal3Label">
            Science Communication Workshop — 2nd Cancer Research Symposium
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <span className="modal-tag">Cancer Research Symposium</span>
          <p className="modal-date">21st October 2025 — Kenyatta University, Nairobi</p>
          <div className="modal-images">
            <img src="/images/workshops/workshop3d.jpg" alt="ICRF Science Communication Workshop" />
            <img src="/images/workshops/workshop3b.jpg" alt="ICRF Science Communication Workshop" />
            <img src="/images/workshops/workshop3c.jpg" alt="ICRF Science Communication Workshop" />
            <img src="/images/workshops/workshop3e.jpg" alt="ICRF Science Communication Workshop" />
            <img src="/images/workshops/workshop3a.jpg" alt="ICRF Science Communication Workshop" />
          </div>
          <p>
            On 21st October 2025, <em>My Science Journey</em> proudly partnered with{" "}
            <strong>ICRF Kenya</strong>, <strong>Victor Oria, Ph.D.</strong>,{" "}
            <strong>Patience Kiyuka, Ph.D.</strong>, and <strong>Hellen Shikanda</strong> to
            deliver an engaging Science Communication Workshop during the 2nd Cancer Research
            Symposium at Kenyatta University.
          </p>
          <p>
            The workshop empowered researchers and students to communicate their scientific work
            more clearly and confidently — bridging the gap between research, media, and the
            public. Participants took part in real-life communication exercises, practicing how
            to share their research with general audiences, funders, and policymakers in clear,
            relatable, and impactful ways.
          </p>
          <p>
            Our founder, <strong>Ruth Nanjala</strong>, also shared the mission of{" "}
            <em>My Science Journey</em> — to make science relatable, accessible, and inspiring for
            young Africans. We connected with passionate scientists, exchanged ideas, and forged
            new collaborations to strengthen cancer awareness and research communication.
          </p>
          <p>
            This experience reaffirmed our belief that science grows stronger when shared — when
            researchers, communicators, and communities work hand in hand to tell the stories
            that matter. We&apos;re deeply grateful to our partners and to everyone who continues
            to walk this journey with us.
          </p>
        </Modal.Body>
      </Modal>

      {/* Modal 4 */}
      <Modal show={show === 4} onHide={close} size="lg" scrollable aria-labelledby="modal4Label">
        <Modal.Header closeButton>
          <Modal.Title as="h5" id="modal4Label">
            A Public Engagement Workshop on Sickle Cell Disease in African Communities
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="modal-date">
            Thursday, 18th June 2026 — 8:00 AM – 11:30 AM (BST) — Online via Zoom
          </p>

          <p>
            <strong>Speakers:</strong> Dr. Siana Nkya, Dr. Mohamed Zahir, Arafa Salim, Mrs
            Sainabou Laye Ndure
            <br />
            <strong>Moderator:</strong> Hellen Shikanda
            <br />
            <strong>Organizers:</strong> Lina Akinyi &amp; Ruth Nanjala
          </p>

          <br />
          <h6 style={{ color: "#005BB5", fontWeight: 700, marginBottom: "8px" }}>
            Workshop Overview
          </h6>
          <p>
            Sickle cell disease remains a significant public health concern across many African
            communities. Despite ongoing research advancements, misinformation, stigma, and
            limited awareness continue to affect early diagnosis, informed decision-making, and
            effective disease management.
          </p>
          <p>
            This workshop creates a space for meaningful dialogue between lived experience and
            scientific expertise. Through panel discussion and collaborative engagement,
            participants will strengthen their understanding and develop practical communication
            tools to share accurate, research-informed information within their networks.
          </p>

          <br />
          <h6 style={{ color: "#005BB5", fontWeight: 700, marginBottom: "8px" }}>Agenda</h6>
          <table className="agenda-table">
            <thead>
              <tr>
                <th>Time (BST)</th>
                <th>Activity</th>
                <th>Lead</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>9:00 – 9:05 AM</td>
                <td>Opening Remarks</td>
                <td>Ruth Nanjala</td>
              </tr>
              <tr>
                <td>9:05 – 9:15 AM</td>
                <td>Introduction to Genetics and Genetic Conditions</td>
                <td>Dr. Mohamed Zahir</td>
              </tr>
              <tr>
                <td>9:15 – 9:40 AM</td>
                <td>
                  Understanding Sickle Cell Disease: Diagnosis, Genotype Testing and Blood
                  Donation
                </td>
                <td>Dr. Siana Nkya</td>
              </tr>
              <tr>
                <td>9:40 – 10:05 AM</td>
                <td>Panel 1: Genetics, particularly Sickle Cell Disease, advocacy</td>
                <td>
                  Arafa Salim Said &amp; Mrs Sainabou Laye Ndure
                  <br />
                  <em>Moderator: Lina Ochieng</em>
                </td>
              </tr>
              <tr>
                <td>10:05 – 10:30 AM</td>
                <td>Panel 2: Scientific perspectives on Sickle Cell Disease</td>
                <td>
                  Dr. Mohamed Zahir &amp; Dr. Siana Nkya
                  <br />
                  <em>Moderator: Hellen Shikanda</em>
                </td>
              </tr>
              <tr>
                <td>10:30 – 10:35 AM</td>
                <td>Group photo &amp; break</td>
                <td>All participants</td>
              </tr>
              <tr>
                <td>10:35 – 11:05 AM</td>
                <td>Breakout Rooms: Small-Group Discussion Activity</td>
                <td>All participants</td>
              </tr>
              <tr>
                <td>11:05 – 11:25 AM</td>
                <td>Group Feedback and Collective Discussion</td>
                <td>Group representatives</td>
              </tr>
              <tr>
                <td>11:25 – 11:30 AM</td>
                <td>Closing Remarks</td>
                <td>Ruth Nanjala</td>
              </tr>
            </tbody>
          </table>

          <br />
          <h6 style={{ color: "#005BB5", fontWeight: 700, marginBottom: "16px" }}>
            Speakers, Moderator &amp; Organizers
          </h6>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            {[
              {
                img: "/images/speakers-images/34-Mohammed zahir.png",
                name: "Dr. Mohamed Zahir Alimohamed",
                role: "Speaker",
                color: "#005BB5",
                bio: "Molecular Geneticist and Genetic Counsellor. Lecturer and Research Scientist at MUHAS, Tanzania.",
              },
              {
                img: "/images/workshops/Siana_Nkya.jpeg",
                name: "Dr. Siana Nkya",
                role: "Speaker",
                color: "#FFA500",
                bio: "10 years of SCD genetic research. Co-founder and President, Tanzania Human Genetics Society.",
              },
              {
                img: "/images/workshops/Arafa-Salim-Said.webp",
                name: "Arafa Salim Said",
                role: "Speaker",
                color: "#005BB5",
                bio: "Founder, Sickle Cell Disease Patients Community of Tanzania. 7+ years of SCD advocacy.",
              },
              {
                img: "/images/workshops/Sainabou_Ndure.jpeg",
                name: "Mrs Sainabou Laye Ndure",
                role: "Panelist",
                color: "#005BB5",
                bio: "Commonwealth PhD Scholar in Kidney Genomics, Queen Mary University of London. Founder of Human Genetics Awareness Association. AfOx alumna.",
              },
              {
                img: "/images/workshops/Hellen_Shikanda.jpeg",
                name: "Hellen Shikanda",
                role: "Moderator",
                color: "#FFA500",
                bio: "Health and science journalist, Nation Media Group. 2024 AACR Cancer Journalism Award recipient.",
              },
              {
                img: "/images/workshops/Nanjala.jpg",
                name: "Ruth Nanjala",
                role: "Organizer",
                color: "#005BB5",
                bio: "Founder of My Science Journey. PhD candidate, University of Oxford.",
                bioEm: true,
              },
              {
                img: "/images/workshops/Lina-Ochieng.jpg",
                name: "Lina Akinyi",
                role: "Organizer",
                color: "#FFA500",
                bio: "DPhil student, University of Oxford. Research in inflammatory bowel disease.",
              },
            ].map((p) => (
              <div key={p.name} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <img
                  src={p.img}
                  alt={p.name}
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    flexShrink: 0,
                  }}
                />
                <div>
                  <p style={{ fontWeight: 700, margin: 0, fontSize: "0.9rem" }}>{p.name}</p>
                  <p
                    style={{
                      color: p.color,
                      fontSize: "0.78rem",
                      fontWeight: 600,
                      margin: "2px 0 4px",
                    }}
                  >
                    {p.role}
                  </p>
                  <p style={{ fontSize: "0.82rem", color: "#555", margin: 0 }}>
                    {p.bioEm ? (
                      <>
                        Founder of <em>My Science Journey</em>. PhD candidate, University of
                        Oxford.
                      </>
                    ) : (
                      p.bio
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
