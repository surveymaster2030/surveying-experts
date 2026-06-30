import type { Metadata } from "next";
import { ReferralPageClientAr } from "@/components/sections/ReferralPageClientAr";

export const metadata: Metadata = {
  title: "برنامج الإحالة — قريباً | خبراء المساحة السعودية",
  description:
    "انضم لقائمة انتظار برنامج إحالة خبراء المساحة. اكسب مكافآت بإحالة عملاء لمعدات المساحة في المملكة العربية السعودية. سجّل اهتمامك اليوم.",
  openGraph: {
    title: "سوّق لخبراء المساحة — برنامج الإحالة قريباً",
    description:
      "اكسب رصيداً في المتجر أو مكافأة نقدية بإحالة عملاء لحلول معدات المساحة. انضم لقائمة الانتظار للوصول المبكر.",
    url: "https://surveyingexperts-sa.com/ar/referral-program",
    siteName: "خبراء المساحة السعودية",
    locale: "ar_SA",
    type: "website",
  },
  alternates: {
    canonical: "/ar/referral-program",
    languages: { en: "/referral-program" },
  },
};

export default function ReferralProgramArPage() {
  return <ReferralPageClientAr />;
}
