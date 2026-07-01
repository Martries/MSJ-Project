import type { Metadata } from "next";
import Footer from "../../components/Footer";
import WorkshopsContent from "./WorkshopsContent";

export const metadata: Metadata = {
  title: "Workshops",
  alternates: { canonical: "/workshops" },
};

export default function WorkshopsPage() {
  return (
    <>
      <WorkshopsContent />
      <Footer />
    </>
  );
}
