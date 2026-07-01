import type { Metadata } from "next";
import Footer from "../../components/Footer";
import OpportunitiesContent from "./OpportunitiesContent";

export const metadata: Metadata = {
  title: "Opportunities",
  alternates: { canonical: "/opportunities" },
};

export default function OpportunitiesPage() {
  return (
    <>
      <OpportunitiesContent />
      <Footer variant="plain" />
    </>
  );
}
