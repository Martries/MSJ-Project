import Link from "next/link";

/**
 * Site footer. The original site has three footer background variants across
 * pages (an authoring inconsistency, preserved here for pixel parity):
 *   - "blue"  : wrapper .container,          <footer style="background:#f0f5fc"> (home, opportunities)
 *   - "light" : wrapper .bg-light .container, plain <footer>                     (about, speakers, contact)
 *   - "plain" : wrapper .container,           plain <footer>                     (workshops, privacy, terms)
 * Every page passes the variant matching its current live counterpart.
 */
type FooterVariant = "blue" | "light" | "plain";

export default function Footer({
  variant = "plain",
  backToTop = false,
}: {
  variant?: FooterVariant;
  backToTop?: boolean;
}) {
  const wrapperClass = variant === "light" ? "bg-light container" : "container";
  const footerStyle = variant === "blue" ? { background: "#f0f5fc" } : undefined;

  return (
    <div className={wrapperClass}>
      <footer
        className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-3 my-3 mx-0 border-top"
        style={footerStyle}
      >
        <div className="col mb-3">
          <a
            href="/"
            className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none"
          >
            <svg className="bi me-2" width="40" height="32">
              <use xlinkHref="#bootstrap"></use>
            </svg>
          </a>
          <p className="text-body-secondary copyright">{"© 2026  My Science Journey"}</p>
        </div>

        <div className="col mb-3"></div>

        <div className="col mb-3">
          <h5>Quick Links</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2 footer-nav-link">
              <Link href="/" className="nav-link p-0 text-body-secondary">
                Home
              </Link>
            </li>
            <li className="nav-item mb-2 footer-nav-link">
              <Link href="/terms" className="nav-link p-0 text-body-secondary" target="_blank">
                {"Terms & Conditions "}
              </Link>
            </li>
            <li className="nav-item mb-2">
              <Link href="/privacy" className="nav-link p-0 text-body-secondary" target="_blank">
                Privacy Policy
              </Link>
            </li>
            <li className="nav-item mb-2 footer-nav-link">
              <Link href="/speakers" className="nav-link p-0 text-body-secondary">
                Speakers
              </Link>
            </li>
            <li className="nav-item mb-2 footer-nav-link">
              <Link href="/about" className="nav-link p-0 text-body-secondary">
                About
              </Link>
            </li>
          </ul>
        </div>

        <div className="col mb-3">
          <h5>Connect With Us</h5>
          <ul className="nav flex-row justify-content-evenly">
            <li className="nav-item ">
              <a
                className="link-primary pro-links"
                href="https://www.linkedin.com/company/my-science-journey/"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li className="nav-item mb-2">
              <a className="link-primary pro-links" href="https://x.com/Journey2Science">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
            </li>
            <li className="nav-item mb-2">
              <a
                className="link-primary pro-links"
                href="https://www.instagram.com/msj.2023?igsh=MTdzMjEyaHUwd2d1OQ%3D%3D&utm_source=qr"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li className="nav-item mb-2">
              <a
                className="link-primary pro-links"
                href="https://www.facebook.com/profile.php?id=61563228813760"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>
            </li>
            <li className="nav-item mb-2">
              <a
                className="link-primary pro-links"
                href="https://www.tiktok.com/@msj05794?_t=8oLIpHzeXUf&_r=1"
              >
                <i className="fa-brands fa-tiktok"></i>
              </a>
            </li>
          </ul>
        </div>

        {backToTop ? (
          <div className="col mb-3">
            <h5 className="nav-item mb-2">
              <a href="#top-logo" className="nav-link p-0 text-body-secondary">
                Back to Top
              </a>
            </h5>
          </div>
        ) : (
          <div className="col mb-3"></div>
        )}
      </footer>
    </div>
  );
}
