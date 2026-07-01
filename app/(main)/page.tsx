import type { Metadata } from "next";
import Footer from "../components/Footer";
import HomeContent from "./HomeContent";

export const metadata: Metadata = {
  // Home keeps the plain brand title "My Science Journey" (root default).
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <HomeContent />
      <Footer variant="blue" />
    </>
  );
}
