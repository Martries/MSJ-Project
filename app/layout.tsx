import type { Metadata } from "next";

// Empty global stylesheet (kept so there's always a root-level global import).
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mysciencejourney.com"),
  title: {
    default: "My Science Journey",
    template: "%s | My Science Journey",
  },
  description:
    "My Science Journey empowers the present and next generation of African scientists with networks, knowledge, and inspiration to pursue diverse career paths and shape global science.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: {
      default: "My Science Journey",
      template: "%s | My Science Journey",
    },
    description:
      "Empowering African scientists with networks, knowledge, and inspiration.",
    siteName: "My Science Journey",
    type: "website",
    locale: "en_US",
    url: "/",
    images: ["/images/msjnew-logo.JPG"],
  },
  twitter: {
    card: "summary_large_image",
    title: {
      default: "My Science Journey",
      template: "%s | My Science Journey",
    },
    description:
      "Empowering African scientists with networks, knowledge, and inspiration.",
    images: ["/images/msjnew-logo.JPG"],
  },
  icons: {
    icon: "/images/favicon_io (7)/favicon.ico",
    shortcut: "/images/favicon_io (7)/favicon.ico",
    apple: "/images/favicon_io (7)/apple-touch-icon.png",
  },
  // Preserved from the original index.html <meta google-site-verification>.
  verification: {
    google: "Pcppg-sFWGjcKfbwPLKQ3GrjL-7MZcVZExE1Zvmpkzw",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
