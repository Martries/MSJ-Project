// The bare legal pages (privacy, terms) load ONLY the original terms.css —
// no Bootstrap, no fonts, no navbar — exactly like the standalone
// privacy.html / terms.html in the source site.
import "../../styles/terms.css";

export default function BareLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
