import type { Metadata } from "next";
import { ContactPageClientAr } from "@/components/sections/ContactPageClientAr";
import { BranchesSectionAr } from "@/components/sections/BranchesSectionAr";

export const metadata: Metadata = {
  title: "تواصل معنا والفروع | خبراء المساحة",
  description:
    "تحدث مع فريق خبراء المساحة للاستفسار عن المبيعات، الدعم الفني، الصيانة والمعايرة. 5 فروع في الرياض، جدة، الدمام، تبوك، وخميس مشيط.",
};

export default function ArContactPage() {
  return (
    <>
      <ContactPageClientAr />
      <BranchesSectionAr />
    </>
  );
}
