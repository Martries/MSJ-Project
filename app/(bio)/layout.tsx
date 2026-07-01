// Layout for speaker bio pages. Matches the original bio pages: Bootstrap +
// speaker-bio.css (NOT styles.css / swiper), the reduced navbar, the preloader,
// and the simple footer. Fonts + icons are the same as the main site.
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/speaker-bio.css";

import Loader from "../components/Loader";
import SpeakerNavbar from "../components/SpeakerNavbar";
import Footer from "../components/Footer";

export default function BioLayout({
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
      <link href="https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css" rel="stylesheet" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
      />

      <Loader />
      <SpeakerNavbar />
      {children}
      <Footer />
    </>
  );
}
