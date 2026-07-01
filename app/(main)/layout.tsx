// Styles for the main site pages, in the original cascade order:
// Bootstrap 5 first, then the site's custom stylesheet.
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/styles.css";

import Navbar from "../components/Navbar";
import Loader from "../components/Loader";

/**
 * Layout for the main site pages (home, about, speakers, workshops,
 * opportunities, contact, and the speaker/team detail routes). These share the
 * Bootstrap navbar, fonts, icons, and the preloader.
 *
 * The bare legal pages (privacy, terms) deliberately live under a separate
 * (bare) layout so they do NOT load Bootstrap or the navbar — matching the
 * original standalone privacy.html / terms.html.
 */
export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* Google Fonts — Roboto + Montserrat (React hoists these to <head>) */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;500;900&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Roboto:wght@100;500;900&display=swap"
        rel="stylesheet"
      />
      {/* Boxicons 2.1.2 */}
      <link href="https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css" rel="stylesheet" />
      {/* Font Awesome 6 — single source (replaces the original FA 5.15.4 CSS + FA
          kit). FA6 is required for fa-x-twitter / fa-tiktok, which 5.15.4 lacks. */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
      />

      <Loader />
      <Navbar />
      {children}
    </>
  );
}
