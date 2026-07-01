// Layout for team bio pages. The Owl carousel is replaced by Swiper (imported in
// the template). Bootstrap is loaded (before team-deets.css so the carousel
// styles still win) so the shared uniform Footer renders correctly; Font Awesome
// provides the footer's social icons.
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/team-deets.css";

import Footer from "../components/Footer";

export default function TeamLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
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
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
      />
      {children}
      <Footer />
    </>
  );
}
