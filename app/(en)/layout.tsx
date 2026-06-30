import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingCTA } from "@/components/ui/FloatingCTA";

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main style={{ paddingTop: "104px" }}>{children}</main>
      <Footer />
      <FloatingCTA lang="en" />
    </>
  );
}
