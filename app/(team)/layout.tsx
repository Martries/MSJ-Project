// Layout for team bio pages. Like the original team pages, these load ONLY the
// Google fonts and team-deets.css — no Bootstrap, navbar, or footer. The Owl
// carousel is replaced by Swiper (imported inside the template component).
import "../../styles/team-deets.css";

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
      {children}
    </>
  );
}
