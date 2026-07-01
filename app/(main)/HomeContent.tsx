"use client";

/* eslint-disable @next/next/no-img-element, react/no-unescaped-entities */

import { useEffect, useRef } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const JOIN_FORM =
  "https://docs.google.com/forms/d/e/1FAIpQLSdCCoCsv9qBmRegc7xTqRtZGYzaPi1HMtU8tA-5-ynMPXI7Cg/viewform";

type Testimonial = { img: string; alt: string; quote: React.ReactNode; details: React.ReactNode };

const TESTIMONIALS: Testimonial[] = [
  {
    img: "/images/speakers-images/39-Francis-Makokha.JPG",
    alt: "Dr.Francis Makokha",
    quote:
      'MSJ is evolving into a platform that brings students and scientists at different levels to share and learn from each other. Students and young scientists get to learn about charting their career paths while senior scientists learn from their peers ways of navigating different environments and challenges in their research.   It\'s a stage for disseminating the "behind the scenes" knowledge that we never get to talk about on any forum, yet this information is very important for inspiring colleagues who may be discouraged or students who may have lost hope in pursuing their careers.',
    details: (
      <>
        <span className="name">Dr.Francis Makokha</span>
        <span className="job">Head of Human Health Research - Mt Kenya University</span>
      </>
    ),
  },
  {
    img: "/images/people/Michelle_Njogu.png",
    alt: "Michelle Njogu",
    quote:
      "Collaborating with MSJ during our inaugural Future Researchers Science Communication Summit was a truly memorable experience for both my team and the participants. We had engaging and insightful discussions on science communication in a rapidly evolving digital world, which sparked new ideas and perspectives. I have also benefitted from the Online Café sessions, where I had the opportunity to learn about the diverse career paths of scientists. These conversations have significantly shaped my mindset and broadened my view of science as a career.",
    details: (
      <>
        <span className="name">Michelle Njogu</span>
      </>
    ),
  },
  {
    img: "/images/people/Nathaniel_Boateng.jpeg",
    alt: "Nathaniel Boateng",
    quote: (
      <>
        I had the honour of working with Ruth Nanjala and <em>My Science Journey</em> on a
        bioinformatics webinar. My initiative, Bio-Research Enthusiasts, invited Ruth, who
        wholeheartedly accepted. During the session, Ruth delved into how bioinformatics is
        shaping health research, expertly breaking down the essential skills students need to
        learn, the computational challenges, and viable career pathways. Her dedication to
        bridging the gap for emerging African scientists is truly inspiring.{" "}
        <em>My Science Journey</em> is dedicated to mentoring and empowering students by
        providing a platform for them to network, collaborate, and connect with established
        scientists. Ruth’s passion and expertise left a lasting impact on our community,
        equipping participants with the confidence to embark on their own scientific journeys. I
        highly encourage students and early-career scientists to join <em>My Science Journey</em>.
      </>
    ),
    details: (
      <>
        <span className="name">Nathaniel Boateng</span>
      </>
    ),
  },
  {
    img: "/images/people/Sharon_Addy.jpeg",
    alt: "Sharon Addy",
    quote:
      "Since I joined MSJ, I have been inspired to dream big as a budding scientist. The stories of renowned African scientists and startups, particularly, my enlightening experience at Yemaachi Biotech-a biotech startup in Ghana- have reshaped my perspective and opened my eyes to new possibilities. MSJ is a community that provides networking opportunities, valuable insights, and a platform to address pressing issues. If you are an African scientist looking for the right community, you have come to the right place. Let’s embark on this journey together, break barriers, and change the narrative of scientific research in Africa.",
    details: (
      <>
        <span className="name">Sharon Addy</span>
        <span className="job">Science Student</span>
      </>
    ),
  },
  {
    img: "/images/people/David_Adu.jpeg",
    alt: "David Adu",
    quote:
      "My experience with MSJ has been both inspiring and  informative.Through its different types of resources including mentorship seminars, articles, networking coupled  with a field visit to Yemaachi Biotech (one of Africa's fast rising biotech startups here in Ghana) helped me gain deep insights  into latest research developments that has helped me grow and shaped me significantly. MSJ is a great platform that I recommend for all young and passionate scientists to connect with other like minded folks.",
    details: (
      <>
        <span className="name">David Adu</span>
        <span className="job">Science Student</span>
      </>
    ),
  },
  {
    img: "/images/speakers-images/33-Dr-Caleb-Kibet.jpg",
    alt: "Parcelli Jepchirchir",
    quote:
      "MSJ originally started as a platform for intern mentorship, but it has evolved into a platform that influences scientists at every stage of their careers. It is a fantastic platform for sharing experiences, learning from one another, and networking. In MSJ, we learn, get motivated, feel encouraged, and grow.",
    details: (
      <>
        <span className="name">Dr. Caleb Kibet</span>
        <span className="job">
          Bioinformatician, International AIDS Vaccine Initiative (IAVI), Kenya
        </span>
      </>
    ),
  },
  {
    img: "/images/people/Parcelli.jpeg",
    alt: "Parcelli Jepchirchir",
    quote:
      "MSJ has allowed me to stand on the shoulders of the giants, gaining insights and wisdom from renowned scientists. As a young lady in science.... seeing and hearing from women science who've succeeded ...makes me believe that it's indeed possible for me too. MSJ has been like that big brother always there to provide guidance.",
    details: (
      <>
        <span className="name">Parcelli Jepchirchir</span>
        <span className="job">MSc Student, Bioinformatics </span>
      </>
    ),
  },
  {
    img: "/images/people/Dr-Fredrick.png",
    alt: "Dr. Fredrick Mobegi",
    quote:
      "MSJ has created a unique collaboration platform that has made it possible for potential mentors and upcoming researchers to interact. Personally, I've gained invaluable insight into science leadership and expended my networks.",
    details: (
      <>
        <span className="name">Dr. Fredrick Mobegi</span>
        <span className="job">Bioinformatics Lead, Western Australia, Department of Health</span>
      </>
    ),
  },
  {
    img: "/images/people/Joseph.jpeg",
    alt: "Joseph Ochieng ",
    quote:
      "The sight of seeing young people get mentored and coached in their career pursuit fills me with great joy. What we craved for while circling these ground being made possible by relentless individuals. Keep making it attainable to others out there. You are doing well. Thank you for making the journey worth taking.",
    details: (
      <>
        <span className="name">Joseph Ochieng</span>
        <span className="job">Inventory Analysts</span>
      </>
    ),
  },
  {
    img: "/images/people/Abigail.jpg",
    alt: "Abigail Ayorinde ",
    quote:
      "Joining \"MSJ\" platform has enabled me to connect with African scientists who are experts in their field. I have learnt from their inspiring scientific journey and the impact of their work within communities. Networking with peers and potential mentors have been very beneficial in shaping my future career aspirations.",
    details: (
      <>
        <span className="name">Abigail Ayorinde </span>
        <span className="job">
          Medical Laboratory Assistant [MLA] <br /> - Macclesfield District General Hospital.
        </span>
      </>
    ),
  },
  {
    img: "/images/people/Rodney.jpeg",
    alt: "Rodney Omukuti",
    quote: (
      <>
        The <em>My Science Journey</em> Seminar has been an inspiring experience. Listening to the
        speakers has motivated me to seek mentorship and approach my research career with an open
        mind. The tips shared on making successful applications have been invaluable. I highly
        encourage others to join and benefit from this insightful seminar.
      </>
    ),
    details: (
      <>
        <span className="name">Rodney Omukuti</span>
        <span className="job">MSc. Bioinformatics,Pwani University (PU);</span>
        <span className="job">
          Research Assistant,Pwani University Bioscience Research Center (PUBReC){" "}
        </span>
      </>
    ),
  },
  {
    img: "/images/people/Bravin.jpg",
    alt: "Bravin Otieno Ndiya",
    quote:
      "MSJ has profoundly influenced my approach to tackling scientific problems, fostering creativity and a willingness to think outside the box. It has underscored the importance of patience and utilizing all available opportunities. Moreover, MSJ has provided me with a clear and fundamental direction for my future in science. I have gained invaluable insights into the dos and don'ts as I progress in both research and academic advancement.",
    details: (
      <>
        <span className="name">Bravin Otieno Ndiya</span>
        <span className="job">Intern at ICIPE & B. Tech at the Technical University of Kenya</span>
      </>
    ),
  },
];

function SlideButtons() {
  return (
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
      <a href={JOIN_FORM} target="_blank" rel="noopener noreferrer">
        <button type="button" className="t-btn1 btn btn-primary btn-lg btn-light px-4 me-md-2">
          Join Us
        </button>
      </a>
      <a href="/contact">
        <button type="button" className="t-btn2 btn btn-outline-secondary btn-lg btn-outline-light px-4">
          Contact Us
        </button>
      </a>
    </div>
  );
}

export default function HomeContent() {
  const eventsRef = useRef<HTMLDivElement>(null);

  // Auto-scroll the Upcoming Events list (reproduces js/script.js behavior).
  useEffect(() => {
    const container = eventsRef.current;
    if (!container) return;
    let amount = 0;
    const speed = 0.2;
    const id = setInterval(() => {
      if (amount >= container.scrollHeight - container.clientHeight) amount = 0;
      else amount += speed;
      container.scrollTo(0, amount);
    }, 50);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      {/* Title Section - Carousel */}
      <section id="title" className="gradient-background title-section">
        <Carousel id="titleCarousel" interval={4000} className="slide">
          <Carousel.Item>
            <div className="container px-4 py-5 my-5 text-center">
              <h1 className="display-5 fw-bold text-body-emphasis">
                Welcome to <em>My Science Journey</em> (MSJ)
              </h1>
              <div className="col-lg-8 mx-auto">
                <p className="lead mb-4">
                  Your one-stop platform for inspiring stories, mentorship, and real-world
                  scientific exploration.
                </p>
                <SlideButtons />
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item className="title-section-1">
            <div className="container px-4 py-5 my-5 text-center">
              <div className="col-lg-8 mx-auto">
                <p className="lead fw-bold text-body-emphasis">
                  MSJ site visit to Yemaachi Biotech, Accra, Ghana.
                </p>
                <SlideButtons />
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item className="title-section-2">
            <div className="container px-4 py-5 my-5 text-center">
              <div className="col-lg-8 mx-auto">
                <p className="lead mb-4 fw-bold text-body-emphasis">
                  MSJ Site Visit to KEMRI Wellcome Trust, Kilifi, Kenya.
                </p>
                <SlideButtons />
              </div>
            </div>
          </Carousel.Item>

          <Carousel.Item className="title-section-3">
            <div className="container px-4 py-5 my-5 text-center">
              <div className="col-lg-8 mx-auto d-flex flex-column">
                <p className="lead fw-bold text-body-emphasis pt-5">
                  MSJ site visit to Novo Nordisk, Oxford, United Kingdom.
                </p>
                <SlideButtons />
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </section>

      {/* Introduction Section */}
      <section className="py-5 pb-0 intro-section">
        <div className="container text-center">
          <h2>What we offer</h2>
          <p className="lead">
            <em>My Science Journey</em> is a digital platform creating spaces where African
            scientists can share their lived experiences and offer practical advice to support the
            current and next generation. Dedicated to amplifying the voices of African scientists,{" "}
            <em>My Science Journey</em> also spotlights the brilliance, resilience, and diverse
            contributions of African scientists across all career stages. By showcasing personal
            narratives, we challenge the “danger of a single story” and demonstrate that science is
            not a one-size-fits-all path — it can take many forms across academia, industry, and
            community-driven initiatives. Beyond storytelling, we foster mentorship, networking,
            and career exploration, enabling scientists to learn from one another.
          </p>
        </div>
      </section>

      {/* Feature Cards */}
      <div className="card-container">
        <div className="feature-card">
          <h2 className="feature-heading s-narrative">Lived Experiences</h2>
          <div className="feature-card-circle">
            <h2>Innovative Perspectives</h2>
          </div>
          <div className="feature-card-content">
            <p>
              The bi-weekly webinar series serves as a platform for seasoned African scientists to
              share their journey.
            </p>
            <button></button>
          </div>
        </div>

        <div className="feature-card">
          <h2 className="feature-heading mentorship">Workshops &amp; Industry Visits</h2>
          <div className="feature-card-circle"></div>
          <div className="feature-card-content">
            <p>
              We recognise that exposure can greatly accelerate a scientific career. Through
              workshops and industry visits, MSJ connects African scientists with real-world
              experiences, broadening their perspectives and opening opportunities beyond academic
              training.
            </p>
            <button></button>
          </div>
        </div>

        <div className="feature-card">
          <h2 className="feature-heading networking">Networking & Mentorship</h2>
          <div className="feature-card-circle">
            <h2>Grow Together</h2>
          </div>
          <div className="feature-card-content">
            <p>
              We connect scientists and cultivate meaningful mentorship and professional networks
              that support career growth, open opportunities, and foster long-term success.
            </p>
            <button></button>
          </div>
        </div>

        <div className="feature-card">
          <h2 className="feature-heading s-oppurtunities">Science Opportunities</h2>
          <div className="feature-card-circle">
            <h2>Endless Possibilities</h2>
          </div>
          <div className="feature-card-content">
            <p>We also share a plethora of  science opportunities with our audience.</p>
            <button></button>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <section className="testimonial-container testimonial-gradient-background">
        <Swiper
          className="testimonial mySwiper"
          wrapperClass="testi-content"
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          grabCursor
          loop
          pagination={{ clickable: true, el: ".swiper-pagination" }}
          navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
        >
          <div slot="container-start" className="testimonial-heading">
            <h3>Testimonials</h3>
          </div>

          {TESTIMONIALS.map((t, i) => (
            <SwiperSlide className="slide" key={i}>
              <img src={t.img} alt={t.alt} className="image" />
              <p>{t.quote}</p>
              <i className="bx bxs-quote-alt-left quote-icon"></i>
              <div className="testimonial-details">{t.details}</div>
            </SwiperSlide>
          ))}

          <div slot="container-end" className="swiper-button-next nav-btn"></div>
          <div slot="container-end" className="swiper-button-prev nav-btn"></div>
          <div slot="container-end" className="swiper-pagination"></div>
        </Swiper>
      </section>

      {/* Highlights Section */}
      <br />
      <section className="highlights-heading">
        <h2>Highlights</h2>
        <div className="highlights-section">
          <div className="highlight upcoming-events">
            <h3>Upcoming Events</h3>
            <div className="events-container" ref={eventsRef}>
              <div className="event-item">
                <p>Sickle Cell Awareness Workshop — 18th June 2026 ✓ Completed</p>
              </div>
            </div>
          </div>
          <div className="highlight recent-webinars">
            <h3>Recent Webinars</h3>
            <div className="webinars-container">
              <div className="webinar-item">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/VX_1gNv5qKE?si=vLv8OP08lgR776r0"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
                <p className="video-description">
                  MSJ Webinar ft Professor Christian Happi (Nigeria)
                </p>
              </div>

              <div className="webinar-item">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/v-QznDHb9IA?si=g_4DwcrWPkf00iCp"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
                <p className="video-description">
                  Dr. Yaw Bediako: Revolutionizing Precision Oncology with Yemaachi Biotech | CEO
                  Insights (Part 1)
                </p>
              </div>

              <div className="webinar-item">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/4Zui4gOf2PQ?si=tnxHU4HGHvFKl5-L"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
                <p className="video-description">A science life of mentorship, consistency and...</p>
              </div>
              <div className="webinar-item">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/MNyEvegq4eQ?si=wM2xOr2FLrRMuWZQ"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
                <p className="video-description">
                  How to start your science career journey by Dr Shadrak Matuko
                </p>
              </div>
              <div className="webinar-item">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/7-Cq6e3WdOg?si=hMWucdmLIQJAdJBP"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
                <p className="video-description">Navigating Changing Career Paths</p>
              </div>
              <div className="webinar-item">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/lUumnB5JS60?si=s-SX-M1Zrgu41Y4P"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
                <p className="video-description">Dr Gerald Mobowa's Science Journey</p>
              </div>
            </div>
            <div className="vidbutton-container">
              <a
                href="https://www.youtube.com/channel/UCkjOxPLvwRabAmovDXQZUng/videos"
                className="view-all-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                More Videos
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news">
        <div className="container">
          <h2>News</h2>
          <div className="news-grid">
            <article className="news-card">
              <span className="news-date">June 2026</span>
              <h3>Sickle Cell Awareness Workshop — 18th June</h3>
              <p>
                On World Sickle Cell Day, MSJ hosted a public engagement workshop on Sickle Cell
                Disease for African communities. Thank you to all who participated!
              </p>
              <a href="/opportunities#current-opportunities">Read More →</a>
            </article>

            <article className="news-card">
              <span className="news-date">April 2026</span>
              <h3>Catch up on previous webinars</h3>
              <p>
                Watch recordings of our past webinars featuring leading African scientists sharing
                their journeys and insights.
              </p>
              <a
                href="https://www.youtube.com/channel/UCkjOxPLvwRabAmovDXQZUng/videos"
                target="_blank"
                rel="noopener noreferrer"
              >
                Watch now →
              </a>
            </article>

            <article className="news-card">
              <span className="news-date">March 2026</span>
              <h3>MSJ Site Visit Recap — KEMRI Wellcome Trust</h3>
              <p>
                Members of the MSJ community visited KEMRI Wellcome Trust in Kilifi, Kenya for an
                inspiring industry experience.
              </p>
              <a href="#">Read more →</a>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
