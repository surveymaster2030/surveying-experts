import type { Metadata } from "next";
import { HeaderAr } from "@/components/layout/HeaderAr";
import { FooterAr } from "@/components/layout/FooterAr";
import { FloatingCTA } from "@/components/ui/FloatingCTA";

export const metadata: Metadata = {
  title: {
    default: "معدات مساحية احترافية ودعم ميداني متكامل في المملكة العربية السعودية | خبراء المساحة",
    template: "%s | خبراء المساحة",
  },
  description:
    "خبراء المساحة توفر معدات مساحية احترافية وتدعم الفرق الميدانية في جميع أنحاء المملكة العربية السعودية بالاستشارات والصيانة والمعايرة وخدمات ما بعد البيع.",
  keywords: [
    "معدات مساحية السعودية",
    "أجهزة GNSS RTK",
    "توتال ستيشن",
    "خبراء المساحة",
    "معايرة أجهزة مساحة",
    "صيانة معدات مساحية",
  ],
};

export default function ArabicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div dir="rtl" lang="ar" style={{ fontFamily: "var(--font-sans, system-ui, sans-serif)" }}>
      <HeaderAr />
      <main style={{ paddingTop: "104px" }}>{children}</main>
      <FooterAr />
      <FloatingCTA lang="ar" />
    </div>
  );
}
