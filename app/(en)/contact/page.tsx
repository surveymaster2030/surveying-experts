import type { Metadata } from "next";
import { ContactPageClient } from "@/components/sections/ContactPageClient";
import { BranchesSection } from "@/components/sections/BranchesSection";

export const metadata: Metadata = {
  title: "Contact & Branches | Surveying Experts Saudi Arabia",
  description:
    "Get in touch with Surveying Experts and find our 5 branches across Saudi Arabia. Contact us for equipment inquiries, technical support, maintenance bookings, or consultations.",
};

export default function ContactPage() {
  return (
    <>
      <ContactPageClient />
      <BranchesSection />
    </>
  );
}
