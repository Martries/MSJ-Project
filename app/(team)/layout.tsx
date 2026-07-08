// Layout for team bio pages. The Owl carousel is replaced by Swiper (imported in
// the template). Bootstrap is loaded before team-deets.css so the carousel
// styles still win.
import "bootstrap/dist/css/bootstrap.min.css";
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
