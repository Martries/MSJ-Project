import type { Metadata } from "next";
import Link from "next/link";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "About Us",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      {/* The Vision */}
      <section className="vision-video" id="vision-video">
        <div className="highlight recent-webinars">
          <h3>
            The Vision Behind <em>My Science Journey</em>
          </h3>
          <div className="webinars-container">
            <div className="webinar-item">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/tvlZUNsOj2g?si=WaNx_5s7eOKEnkwO"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      {/* The Vision End */}

      <div className="about-top">
        <section className="about" style={{ background: "#005BB5", padding: "60px 20px" }}>
          <div className="container story-vision-wrap">
            <div className="story-vision-text">
              <h2>Our Story</h2>
              <p>
                Founded in 2022, <em>My Science Journey</em> started as a small community
                supporting interns transitioning from the International Centre of Insect
                Physiology and Ecology to the real world. Today, we are a vibrant digital
                {"  "}platform hosting a plethora of events, talks, and resources aimed at
                making science accessible and relatable for African scientists. Through our
                platform, individuals can network, collaborate, and connect with mentors who
                share similar interests, facilitating their professional growth.
              </p>
              <br />
              <h2>Our Vision</h2>
              <p>
                To empower the present and next generation of African scientists with the
                networks, knowledge, confidence, and inspiration to pursue diverse career
                paths, shape global science, and drive meaningful change in their communities.
              </p>
            </div>
            <div className="story-vision-image">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/MSJ-Science-Communication-workshop-in-Kenya.jpeg"
                alt="MSJ in action"
              />
            </div>
          </div>
        </section>
      </div>

      <hr />
      <section className="team " id="experts">
        <h2>Meet the Team</h2>
        <div className="expert-box">
          {/* Ruth */}
          <div className="profile Ruthnanje">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/team/Ruth.jpg" alt="" />
            <h4>Ruth Nanjala</h4>
            <p>Founder &amp; Director</p>
            <div className="pro-links">
              <a href="https://www.facebook.com/share/zNZGztmDZkHzdEEo/?mibextid=LQQJ4d">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://www.instagram.com/ruth_nanje?igsh=aHFhaGQwMG9zOXpk&utm_source=qr"
                target="_blank"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/ruth-nanjala-17991117a/" target="_blank">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://x.com/Ruthnanje">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
            </div>
            <div className="probutton-container">
              <Link href="/team-deets/ruth" className="pro-button" target="_blank">
                View More
              </Link>
            </div>
          </div>

          {/* Cynthia */}
          <div className="profile">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/team/Cynthia.JPG" alt="" />
            <h4>Cynthia Wanyeki</h4>
            <p>Graphic Designer</p>
            <div className="pro-links">
              <a href="https://www.facebook.com/cycy.nic">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://www.instagram.com/cycy_wanyeki?igsh=MTBxZGcwNjdxaGY1bw=="
                target="_blank"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/cynthia-wanyeki-524a4215a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://x.com/CycyWanyeki?t=Vvh7kszhHck76jT1RpV3MA&s=09">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
            </div>
            <div className="probutton-container">
              <Link href="/team-deets/cynthia" className="pro-button" target="_blank">
                View More
              </Link>
            </div>
          </div>

          {/* Nehemiah */}
          <div className="profile">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/team/Nehemiah.JPG" alt="" />
            <h4>Nehemiah Ongeso</h4>
            <p>Brand Manager</p>
            <div className="pro-links">
              <a href="https://www.linkedin.com/in/nehemiah-ongeso/" target="_blank">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://x.com/NOngeso">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
            </div>
            <div className="probutton-container">
              <Link href="/team-deets/nehemiah" className="pro-button" target="_blank">
                View More
              </Link>
            </div>
          </div>

          {/* David */}
          <div className="profile">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/team/David.png" alt="" />
            <h4>David Githaiga</h4>
            <p>Video Editor</p>
            <div className="pro-links">
              <a
                href="https://www.instagram.com/dave_mainag?igsh=cDVsNGNqaDhqeXp1&utm_source=qr"
                target="_blank"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/david-githaiga-14272490/" target="_blank">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://x.com/tweedzvidz?s=21&t=IvfemMxPA1OupzcTANGeMA">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
            </div>
            <div className="probutton-container">
              <Link href="/team-deets/david" className="pro-button" target="_blank">
                View More
              </Link>
            </div>
          </div>

          {/* Lilian */}
          <div className="profile">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/team/Lilian.jpeg" alt="" />
            <h4>Lilian Ngina</h4>
            <p>Social Media Manager</p>
            <div className="pro-links">
              <a
                href="https://www.instagram.com/prof_ngina?igsh=MWVlZXZ3dTloeTljag=="
                target="_blank"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/lilianngina" target="_blank">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://x.com/ProfNgina?t=AYv8NlO3vwND4xsDimoGjw&s=08">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
            </div>
            <div className="probutton-container">
              <Link href="/team-deets/lilian" className="pro-button" target="_blank">
                View More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
