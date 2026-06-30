import type { Metadata } from "next";
import { ReferralPageClient } from "@/components/sections/ReferralPageClient";

export const metadata: Metadata = {
  title: "Referral Program — Coming Soon | Surveying Experts Saudi Arabia",
  description:
    "Join the Surveying Experts Referral Program waiting list. Earn rewards by referring surveying equipment clients across Saudi Arabia. Register your interest today.",
  openGraph: {
    title: "Promote Surveying Experts — Referral Program Coming Soon",
    description:
      "Earn store credit or cash by referring clients to our surveying equipment solutions. Join the waiting list for early access.",
    url: "https://surveyingexperts-sa.com/referral-program",
    siteName: "Surveying Experts Saudi Arabia",
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "/referral-program",
    languages: { ar: "/ar/referral-program" },
  },
};

export default function ReferralProgramPage() {
  return <ReferralPageClient />;
}
