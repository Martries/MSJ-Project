import type { Metadata } from "next";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Contact Us",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="py-5 contact-section">
        <div className="container">
          <h2 className="text-center">Get in Touch</h2>
          {/* Formspree endpoint preserved exactly (plain HTML POST, no JS). */}
          <form
            className="mt-4"
            action="https://formspree.io/f/mblrdlvl"
            method="POST"
            data-redirect="https://formspree.io/thanks?language=enu"
          >
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input type="text" name="name" className="form-control" id="name" required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input type="email" name="email" className="form-control" id="email" required />
            </div>
            <div className="mb-3">
              <label htmlFor="subject" className="form-label">
                Subject
              </label>
              <input type="text" name="subject" className="form-control" id="subject" required />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea className="form-control" id="message" rows={5} name="message" required></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="bg-light py-5">
        <div className="container text-center">
          <h2>Connect with Us</h2>
          <div>
            <a
              href="https://x.com/Journey2Science"
              className="btn btn-outline-dark btn-social mx-1"
            >
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/my-science-journey/"
              className="btn btn-outline-dark btn-social mx-1"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://www.instagram.com/msj.2023?igsh=MTdzMjEyaHUwd2d1OQ%3D%3D&utm_source=qr"
              className="btn btn-outline-dark btn-social mx-1"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61563228813760"
              className="btn btn-outline-dark btn-social mx-1"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a
              href="https://www.tiktok.com/@msj05794?_t=8oLIpHzeXUf&_r=1"
              className="btn btn-outline-dark btn-social mx-1"
            >
              <i className="fa-brands fa-tiktok"></i>
            </a>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container text-center">
          <h2>Other Ways to Reach Us</h2>
          <p>
            Email:{" "}
            <a href="mailto:journeythescience@gmail.com">journeythescience@gmail.com</a>
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
