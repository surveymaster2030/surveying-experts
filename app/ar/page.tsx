import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft, ExternalLink, MapPin,
  MessageSquare, Search, Package, Settings, Headphones, Wrench, Crosshair, ShieldCheck,
  ShoppingCart, Compass, Globe, Zap, Building, Layers,
  ScanLine, Plane, Waves, Radar,
  HardHat, PenTool, GitBranch,
  Check, Users, Briefcase, CreditCard, Calendar,
} from "lucide-react";
import { BannerHeroSectionAr } from "@/components/sections/BannerHeroSectionAr";
import { StatsSectionAr } from "@/components/sections/StatsSectionAr";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Marquee } from "@/components/ui/Marquee";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { ReferralPopupAr } from "@/components/sections/ReferralPopupAr";

export const metadata: Metadata = {
  title: "معدات مساحية احترافية ودعم ميداني متكامل في المملكة العربية السعودية",
  description:
    "خبراء المساحة توفر معدات مساحية احترافية وتدعم الفرق الميدانية في جميع أنحاء المملكة العربية السعودية بالاستشارات والصيانة والمعايرة وخدمات ما بعد البيع.",
};

function IconTile({ children, color = "teal", size = 44 }: { children: React.ReactNode; color?: "teal" | "blue" | "yellow"; size?: number }) {
  const bg = color === "teal" ? "var(--se-teal)" : color === "blue" ? "var(--se-blue)" : "var(--accent)";
  const fg = color === "yellow" ? "var(--se-blue-dark)" : "#fff";
  return (
    <div style={{ width: size, height: size, borderRadius: "var(--radius-md)", background: bg, color: fg, display: "grid", placeItems: "center", flexShrink: 0 }}>
      {children}
    </div>
  );
}

function TealChip({ label }: { label: string }) {
  return (
    <span style={{ display: "inline-block", fontFamily: "var(--font-sans)", fontSize: 12, fontWeight: 600, padding: "4px 10px", borderRadius: "var(--radius-pill)", background: "var(--se-teal-soft)", color: "var(--se-teal)", border: "1px solid rgba(34,167,168,0.2)", whiteSpace: "nowrap" }}>
      {label}
    </span>
  );
}

function Eyebrow({ children, light, teal }: { children: React.ReactNode; light?: boolean; teal?: boolean }) {
  const color = light ? "var(--accent)" : teal ? "var(--se-teal)" : "var(--se-blue)";
  const bg = light ? "rgba(246,186,59,0.12)" : teal ? "rgba(34,167,168,0.15)" : "var(--se-yellow-soft)";
  return (
    <span style={{ display: "inline-block", fontFamily: "var(--font-sans)", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.18em", color, background: bg, padding: "0.35em 0.85em", borderRadius: "var(--radius-pill)", marginBottom: "1.25rem" }}>
      {children}
    </span>
  );
}

function SecHead({ label, title, subtitle, light, centered }: { label?: string; title: string; subtitle?: string; light?: boolean; centered?: boolean }) {
  return (
    <div style={{ marginBottom: "2.5rem", textAlign: centered ? "center" : "right" }}>
      {label && <Eyebrow light={light}>{label}</Eyebrow>}
      <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.625rem, 3vw, 2.25rem)", color: light ? "#fff" : "var(--text-strong)", lineHeight: 1.1, letterSpacing: "-0.02em", margin: label ? "0.5rem 0 0.875rem" : "0 0 0.875rem" }}>
        {title}
      </h2>
      {subtitle && <p style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-md)", color: light ? "rgba(255,255,255,0.65)" : "var(--text-muted)", lineHeight: 1.65, maxWidth: centered ? "58ch" : undefined, margin: centered ? "0 auto" : 0 }}>{subtitle}</p>}
    </div>
  );
}

const support360 = [
  { icon: <MessageSquare size={26} />, title: "الاستشارة", text: "نفهم مشروعك وموقعك وميزانيتك قبل أن نوصي بأي شيء.", n: "01" },
  { icon: <Search size={26} />, title: "اختيار المعدات", text: "نساعدك في مقارنة التقنيات واختيار ما يناسب سير عملك.", n: "02" },
  { icon: <Package size={26} />, title: "توريد المعدات", text: "عروض أسعار سريعة، وتوفر الفروع، ومتجرنا الإلكتروني الرسمي.", n: "03" },
  { icon: <Settings size={26} />, title: "الإعداد والتوجيه", text: "نساعد فريقك على الإلمام بالجهاز الجديد قبل أول يوم في الميدان.", n: "04" },
  { icon: <Headphones size={26} />, title: "الدعم الميداني", text: "نجيب على الأسئلة التقنية حين يكون الفريق في الموقع والعمل جارٍ.", n: "05" },
  { icon: <Wrench size={26} />, title: "الصيانة", text: "فحص الجهاز وخدمته لحماية الأداء وإطالة عمره الافتراضي.", n: "06" },
  { icon: <Crosshair size={26} />, title: "المعايرة", text: "معايرة معتمدة للحفاظ على دقة قياساتك وموثوقيتها.", n: "07" },
  { icon: <ShieldCheck size={26} />, title: "دعم ما بعد البيع", text: "نتابعك ونبقى في متناول يدك بعد كل عملية شراء.", n: "08" },
];

const usps = [
  { icon: <CreditCard size={20} />, title: "خيارات امتلاك مرنة", text: "التقسيط، الأجهزة المستعملة، نظام الإيجار المنتهي بالتملك. خصم قيمة الإيجار عند الشراء." },
  { icon: <Calendar size={20} />, title: "إيجارات مرنة للأجهزة", text: "استأجر معدات المساحة باليوم أو الأسبوع أو الشهر، مع خيارات متعددة تناسب جدولك الزمني." },
  { icon: <Compass size={20} />, title: "نساعدك في اختيار الحل المناسب", text: "نختار المعدة الأنسب بناءً على طبيعة المشروع وظروف الموقع وطريقة عمل الفريق، ليس فقط المواصفات التقنية." },
  { icon: <Globe size={20} />, title: "مجموعة متكاملة من تقنيات المساحة", text: "GNSS/RTK، التوتال ستيشن، أجهزة المناسيب، المسح ثلاثي الأبعاد، SLAM Mapping، كشف الخدمات، المسح البحري، الطائرات المسيرة، الإكسسوارات، كل ذلك من مكان واحد." },
  { icon: <MapPin size={20} />, title: "دعم محلي وصيانة ومعايرة", text: "دعم فني عملي وصيانة ومعايرة من فرق تفهم ظروف الميدان السعودي وتقنياته." },
  { icon: <Zap size={20} />, title: "سرعة في البيع وخدمات ما بعد البيع", text: "من الاستفسار إلى عرض السعر، الشراء، الإيجار، الدعم الفني أو الصيانة. نتحرك بسرعة ونتواصل بوضوح." },
  { icon: <ShoppingCart size={20} />, title: "متجر إلكتروني للإكسسوارات والتعرّف على الحلول", text: "طلب الإكسسوارات وتصفح حلول الأجهزة قبل التواصل مع فريق المبيعات." },
];

const teamRoles = [
  { icon: <Briefcase size={20} />, title: "مهندسو المبيعات", text: "يتولون استشارة المعدات وعروض الأسعار وطلبات المتجر الإلكتروني وتنسيق المشتريات.", imgSrc: "/images/photos/showroom-interior.jpg" },
  { icon: <Wrench size={20} />, title: "مهندسو الصيانة", text: "مسؤولون عن فحص الأجهزة وخدمتها ومعايرتها والرعاية التقنية بعد الشراء.", imgSrc: "/images/photos/gnss-receiver.jpg" },
  { icon: <Settings size={20} />, title: "مهندسو الدعم الفني", text: "يدعمون العملاء في الإعداد والتوجيه التشغيلي واستكشاف الأعطال عبر جميع المعدات المدعومة.", imgSrc: "/images/photos/gnss-ertk25.jpg" },
  { icon: <Layers size={20} />, title: "التسويق وتقنية المعلومات والمالية", text: "النواة التشغيلية التي تدعم التواصل والبنية التحتية الرقمية واستمرارية الأعمال.", imgSrc: "/images/photos/team-culture.jpg" },
];

const industries = [
  { icon: <HardHat size={18} />, name: "المقاولون الإنشائيون", text: "للتخطيط الميداني والتسوية والحفر والتعديل ومتابعة التقدم وجاهزية المعدات.", solutions: ["GNSS & RTK", "توتال ستيشن", "تحكم الآلات", "رسم الخرائط الجوي"], imgSrc: "/images/photos/slam-scanning.jpg" },
  { icon: <Compass size={18} />, name: "مكاتب المساحة", text: "لقياسات يومية موثوقة وأجهزة دقيقة وملحقات ومعايرة ودعم متكامل.", solutions: ["GNSS & RTK", "توتال ستيشن", "مسح ثلاثي الأبعاد", "رسم الخرائط الجوي"], imgSrc: "/images/photos/gnss-receiver.jpg" },
  { icon: <PenTool size={18} />, name: "الاستشارات الهندسية", text: "لتوثيق المواقع والتحقق من التنفيذ والفحص والتقارير وبيانات الميدان الدقيقة.", solutions: ["توتال ستيشن", "GNSS & RTK", "مسح ثلاثي الأبعاد", "كشف تحت الأرض"], imgSrc: "/images/photos/gnss-ertk25.jpg" },
  { icon: <GitBranch size={18} />, name: "البنية التحتية والطرق", text: "للتحديد الموضعي والتحكم والتعديل ورسم الخرائط ومراقبة التقدم والعمل الميداني الممتد.", solutions: ["GNSS & RTK", "تحكم الآلات", "توتال ستيشن", "رسم الخرائط الجوي"], imgSrc: "/images/photos/showroom-brand.jpg" },
];

const highSolutions = [
  { icon: <ScanLine size={22} />, title: "الماسحات الضوئية وتصوير الواقع ثلاثي الأبعاد", short: "التقاط البيئات الحقيقية كبيانات رقمية دقيقة للتوثيق والتحليل وسير عمل التصميم.", imgSrc: "/images/photos/slam-scanning.jpg" },
  { icon: <Plane size={22} />, title: "الطائرات المسيرة ورسم الخرائط الجوي", short: "تغطية مساحات واسعة بسرعة أكبر ببيانات جوية للرسم والتفتيش والمراقبة والتوثيق.", imgSrc: "/images/photos/gnss-ertk25.jpg" },
  { icon: <Waves size={22} />, title: "المسح البحري", short: "مسح البيئات المائية باستخدام تقنيات هيدروغرافية لقياس الأعماق وجمع البيانات البحرية.", imgSrc: "/images/photos/gnss-receiver.jpg" },
  { icon: <Radar size={22} />, title: "الرادار الأرضي والكشف تحت الأرض", short: "الكشف عن التفاصيل المخفية تحت السطح ورسم خرائطها قبل الحفر أو البناء أو أعمال البنية التحتية.", imgSrc: "/images/photos/showroom-brand.jpg" },
];

const partners = [
  { name: "eSurvey", category: "GNSS & RTK", logo: "/images/brands/esurvey.png" },
  { name: "Survey Master", category: "توتال ستيشن وبحري", logo: "/images/brands/survey-master.png" },
  { name: "Radarteam", category: "الرادار الأرضي والكشف", logo: "/images/brands/radarteam.png" },
  { name: "OmniSLAM", category: "مسح ثلاثي الأبعاد", logo: "/images/brands/omnislam.png" },
  { name: "The Drone Center", category: "رسم الخرائط الجوي", logo: null },
  { name: "DJI", category: "تقنيات الطائرات المسيرة", logo: null },
  { name: "Quantum Systems", category: "طائرات مسيرة متقدمة", logo: null },
];

const clientLogos = [
  "Expert", "Mapa", "SNAD", "Alfawaz Contracting", "Qemmet Alrawasi",
  "Darkstone", "Buna", "Enjazco", "Modern Building Leader",
  "First Fix", "Al Saif Engineering", "Trading Development Partnership",
];

const timeline = [
  { year: "2011", title: "البداية الميدانية" },
  { year: "2018", title: "التأسيس الرسمي" },
  { year: "2021", title: "شراكة eSurvey" },
  { year: "2023", title: "شراكة Survey Master" },
  { year: "2024", title: "النمو الرقمي" },
  { year: "2025", title: "حلول جديدة" },
  { year: "2026", title: "توسع الطائرات المسيرة" },
];

const maintenancePackages = [
  { name: "الباقة الأساسية", featured: false },
  { name: "الباقة الاحترافية", featured: false },
  { name: "الباقة الذهبية", featured: true },
  { name: "الباقة البلاتينية", featured: false },
];

export default function ArHomePage() {
  return (
    <>
      {/* ── HERO: 3-banner carousel ── */}
      <BannerHeroSectionAr />

      {/* ── STATS BAND ── */}
      <StatsSectionAr />

      {/* ── من نحن ── */}
      <section
        style={{
          background: "var(--se-white)",
          position: "relative",
          overflow: "hidden",
          padding: "96px 0",
          backgroundImage:
            "linear-gradient(rgba(53,80,97,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(53,80,97,0.05) 1px,transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      >
        <div className="se-container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="kit-2col">
            <AnimateIn from="right">
              <SecHead label="من نحن" title="خبراء المساحة" />
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, lineHeight: 1.8, color: "var(--text-muted)", margin: "0 0 14px" }}>
                خبراء المساحة شركة سعودية متخصصة في المعدات المساحية الاحترافية والدعم الميداني المتكامل. نوفر تقنيات من علامات تجارية عالمية موثوقة، وندعم عملاءنا من خلال الاستشارة والبيع والإعداد والصيانة والمعايرة وخدمات ما بعد البيع.
              </p>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, lineHeight: 1.8, color: "var(--text-muted)", margin: "0 0 28px" }}>
                هدفنا واضح: مساعدة كل عميل على اختيار المعدات المناسبة واستخدامها بثقة تامة.
              </p>
              <Link href="/ar/about" className="se-btn" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "11px 20px", background: "var(--se-blue-soft)", color: "var(--se-blue)", fontWeight: 700, fontSize: 15, borderRadius: "var(--radius-md)", border: "1.5px solid var(--se-blue)", textDecoration: "none" }}>
                <ArrowLeft size={15} /> اعرف أكثر عنا
              </Link>
            </AnimateIn>

            {/* Editorial collage */}
            <AnimateIn from="left" delay={100} className="kit-collage">
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "240px 160px", gap: 14 }}>
                <AnimateIn from="scale" delay={200}>
                  <ImagePlaceholder
                    src="/images/photos/gnss-ertk25.jpg"
                    alt="جهاز GNSS من e-survey في الميدان"
                    height="100%"
                    style={{ height: "100%" }}
                    borderRadius="var(--radius-xl)"
                  />
                </AnimateIn>
                <AnimateIn from="scale" delay={300} style={{ gridColumn: 2, gridRow: "1 / 3" }}>
                  <div
                    style={{
                      height: "100%",
                      borderRadius: "var(--radius-xl)",
                      position: "relative",
                      overflow: "hidden",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                    }}
                  >
                    <img src="/images/photos/branch-storefront.jpg" alt="" loading="lazy" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
                    <div aria-hidden style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(13,22,30,0.92) 0%, rgba(13,22,30,0.4) 55%, rgba(13,22,30,0.15) 100%)" }} />
                    <div style={{ position: "absolute", top: 18, left: 18, background: "var(--accent)", borderRadius: "var(--radius-md)", padding: "6px 12px", textAlign: "center" }}>
                      <div style={{ fontWeight: 800, fontSize: 26, color: "var(--se-blue-dark)", lineHeight: 1, letterSpacing: "-0.02em" }}>+7</div>
                      <div style={{ fontSize: 10, color: "var(--se-blue-dark)", opacity: 0.75, marginTop: 1 }}>سنوات</div>
                    </div>
                    <div style={{ position: "relative", padding: "0 20px 22px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                        <div style={{ width: 32, height: 32, borderRadius: "var(--radius-md)", background: "var(--se-teal)", color: "#fff", display: "grid", placeItems: "center", flexShrink: 0 }}>
                          <ShieldCheck size={15} />
                        </div>
                        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.08em", color: "var(--se-teal)" }}>ISO 9001:2015</div>
                      </div>
                      <div style={{ fontWeight: 700, fontSize: 16, color: "#fff", marginBottom: 4 }}>جودة معتمدة دولياً</div>
                      <div style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", lineHeight: 1.6 }}>كل جهاز مدعوم وتتم صيانته ومعايرته وفق المعايير الدولية.</div>
                    </div>
                  </div>
                </AnimateIn>
                <AnimateIn from="scale" delay={400}>
                  <div style={{ height: "100%", borderRadius: "var(--radius-xl)", background: "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }}>
                    <div style={{ textAlign: "center" }}>
                      <div style={{ fontFamily: "var(--font-sans)", fontWeight: 800, fontSize: 38, color: "var(--se-blue-dark)", lineHeight: 1, letterSpacing: "-0.02em" }}>+3K</div>
                      <div style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 13, color: "var(--se-blue-dark)", marginTop: 4 }}>عميل B2B</div>
                    </div>
                  </div>
                </AnimateIn>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── رحلة الدعم 360 درجة ── */}
      <section
        style={{
          background: "var(--se-blue-dark)",
          position: "relative",
          overflow: "hidden",
          padding: "96px 0",
          backgroundImage:
            "linear-gradient(rgba(34,167,168,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(34,167,168,0.05) 1px,transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      >
        <div className="se-container" style={{ position: "relative" }}>
          <AnimateIn>
            <SecHead
              label="نموذج الدعم لدينا"
              title="دورة حياة متكاملة للمعدات 360 درجة"
              subtitle="ندعمك في كل مرحلة، من أول محادثة قبل الشراء إلى الاستخدام الميداني طويل الأمد وما بعد البيع."
              light
              centered
            />
          </AnimateIn>

          {/* Desktop: orbital 360 ring */}
          <div className="kit-desktop-only" style={{ display: "flex", justifyContent: "center", marginTop: 32 }}>
            <div style={{ position: "relative", width: "min(640px, 78vw)", aspectRatio: "1", margin: "0 auto" }}>
              {/* rings */}
              <div aria-hidden style={{ position: "absolute", inset: "8%", borderRadius: "50%", border: "1px solid rgba(255,255,255,0.06)" }} />
              <div aria-hidden style={{ position: "absolute", inset: "15%", borderRadius: "50%", border: "1.5px dashed rgba(34,167,168,0.4)" }} />
              {/* center hub */}
              <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "34%", height: "34%", borderRadius: "50%", background: "radial-gradient(circle at 50% 35%, rgba(34,167,168,0.30), var(--se-blue-darker) 70%)", border: "2px solid var(--se-teal)", boxShadow: "0 0 50px rgba(34,167,168,0.35)", display: "grid", placeItems: "center", textAlign: "center" }}>
                <div>
                  <Compass size={26} style={{ color: "var(--se-teal)", marginBottom: 2 }} />
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: "clamp(24px, 3.4vw, 40px)", color: "#fff", lineHeight: 1 }}>360°</div>
                  <div style={{ fontFamily: "var(--font-sans)", fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", color: "var(--se-teal)", marginTop: 6 }}>دورة حياة كاملة</div>
                </div>
              </div>
              {/* nodes */}
              {support360.map((s, i) => {
                const theta = (-90 + i * 45) * Math.PI / 180;
                const R = 43;
                const x = 50 + R * Math.cos(theta);
                const y = 50 + R * Math.sin(theta);
                return (
                  <div key={s.title} style={{ position: "absolute", top: `${y}%`, left: `${x}%`, transform: "translate(-50%,-50%)", width: 128, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
                    <div style={{ position: "relative", marginBottom: 8 }}>
                      <div className="se-glow-teal" style={{ width: 58, height: 58, borderRadius: "50%", background: "var(--se-blue-darker)", border: "2px solid var(--se-teal)", color: "var(--se-teal)", display: "grid", placeItems: "center", boxShadow: "0 4px 18px rgba(0,0,0,0.35)", transition: "transform 0.2s, box-shadow 0.2s" }}>
                        {s.icon}
                      </div>
                      <div style={{ position: "absolute", top: -4, insetInlineEnd: -4, width: 20, height: 20, borderRadius: "50%", background: "var(--se-teal)", display: "grid", placeItems: "center" }}>
                        <span style={{ fontFamily: "var(--font-mono)", fontWeight: 700, fontSize: 9, color: "#fff" }}>{s.n}</span>
                      </div>
                    </div>
                    <div style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 13, color: "#fff", lineHeight: 1.25 }}>{s.title}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile: compact icon + title rows (no descriptions) */}
          <div className="kit-mobile-only" style={{ flexDirection: "column", gap: 8, marginTop: 16 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
              {support360.map((s) => (
                <div key={s.title} style={{ display: "flex", gap: 10, alignItems: "center", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(34,167,168,0.18)", borderRadius: "var(--radius-md)", padding: "12px 14px" }}>
                  <div style={{ width: 36, height: 36, flexShrink: 0, borderRadius: "50%", background: "var(--se-teal)", color: "#fff", display: "grid", placeItems: "center" }}>{s.icon}</div>
                  <div>
                    <div style={{ fontFamily: "var(--font-mono)", fontWeight: 700, fontSize: 10, color: "var(--se-teal)", marginBottom: 2 }}>{s.n}</div>
                    <div style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 12, color: "#fff", lineHeight: 1.3 }}>{s.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── لماذا تختارنا ── */}
      <section
        style={{
          background: "var(--se-gray-50)",
          position: "relative",
          overflow: "hidden",
          padding: "96px 0",
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(34,167,168,0.10) 1px, transparent 0)",
          backgroundSize: "20px 20px",
        }}
      >
        <div className="se-container">
          <AnimateIn>
            <SecHead label="لماذا يختارنا الميدانيون" title="لماذا تختار الفرق الميدانية خبراء المساحة" centered />
          </AnimateIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 18 }}>
            {usps.map((u, i) => (
              <AnimateIn key={u.title} delay={(i % 4) * 80} from="up">
                <div
                  className="kit-card-teal"
                  style={{
                    background: "var(--se-white)",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: "var(--radius-lg)",
                    padding: "24px 22px",
                    boxShadow: "var(--shadow-sm)",
                    height: "100%",
                  }}
                >
                  <div className="se-glow-teal" style={{ width: 44, height: 44, borderRadius: "var(--radius-md)", background: "var(--se-teal)", color: "#fff", display: "grid", placeItems: "center", transition: "transform 0.2s, box-shadow 0.2s" }}>
                    {u.icon}
                  </div>
                  <div style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 15, color: "var(--text-strong)", margin: "14px 0 8px" }}>{u.title}</div>
                  <div style={{ fontFamily: "var(--font-sans)", fontSize: 14, lineHeight: 1.65, color: "var(--text-muted)" }}>{u.text}</div>
                </div>
              </AnimateIn>
            ))}
          </div>
          <AnimateIn delay={200}>
            <div style={{ textAlign: "center", marginTop: 36 }}>
              <a
                href="https://surveyingexperts-sa.com/collections/all"
                target="_blank"
                rel="noopener noreferrer"
                className="se-btn se-btn-yellow"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 24px", background: "var(--accent)", color: "var(--se-blue-dark)", fontWeight: 700, fontSize: 15, borderRadius: "var(--radius-md)", textDecoration: "none" }}
              >
                تصفح المتجر الإلكتروني <ExternalLink size={15} />
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── فريق الخبراء ── */}
      <section style={{ background: "var(--se-white)", padding: "96px 0" }}>
        <div className="se-container">
          <AnimateIn>
            <SecHead
              label="فريق الخبراء"
              title="الفريق الذي يدعم عملياتك الميدانية"
              subtitle="كل تفاعل مع العملاء يُدار بواسطة متخصص، منظم للاستجابة السريعة والدعم الدقيق في كل مرحلة."
              centered
            />
          </AnimateIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
            {teamRoles.map((r, i) => (
              <AnimateIn key={r.title} delay={i * 90} from="up">
                <div
                  className="kit-team-card"
                  style={{
                    borderRadius: "var(--radius-xl)",
                    overflow: "hidden",
                    boxShadow: "var(--shadow-md)",
                    background: "linear-gradient(135deg, var(--se-blue-dark) 0%, var(--se-blue) 100%)",
                    borderRight: "4px solid var(--se-teal)",
                  }}
                >
                  <ImagePlaceholder
                    src={r.imgSrc}
                    alt={r.title}
                    height={140}
                    dark
                    borderRadius="0"
                  />
                  <div style={{ padding: "20px 22px" }}>
                    <div style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 16, color: "#fff", marginBottom: 8 }}>{r.title}</div>
                    <div style={{ fontFamily: "var(--font-sans)", fontSize: 14, lineHeight: 1.65, color: "rgba(255,255,255,0.62)" }}>{r.text}</div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
          <AnimateIn delay={200}>
            <div style={{ textAlign: "center", marginTop: 32 }}>
              <Link href="/ar/about" className="se-btn" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "11px 20px", background: "var(--se-blue-soft)", color: "var(--se-blue)", fontWeight: 700, fontSize: 15, borderRadius: "var(--radius-md)", border: "1.5px solid var(--se-blue)", textDecoration: "none" }}>
                <ArrowLeft size={15} /> تعرف على فريقنا
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── الحلول حسب القطاع ── */}
      <section
        style={{
          background: "var(--se-gray-50)",
          position: "relative",
          overflow: "hidden",
          padding: "96px 0",
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(53,80,97,0.10) 1px, transparent 0)",
          backgroundSize: "22px 22px",
        }}
      >
        <div className="se-container">
          <AnimateIn>
            <SecHead
              label="الحلول حسب القطاع"
              title="حلول مساحية مصممة لقطاعك"
              subtitle="كل فريق له متطلباته الخاصة. نربط المعدات والدعم المناسبَين بواقع ميدانك."
              centered
            />
          </AnimateIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 18 }}>
            {industries.map((ind, i) => (
              <AnimateIn key={ind.name} delay={i * 80} from="up">
                <Link
                  href="/ar/solutions"
                  className="kit-card-teal"
                  style={{
                    display: "block",
                    background: "var(--se-white)",
                    border: "1px solid var(--border-subtle)",
                    borderRadius: "var(--radius-lg)",
                    overflow: "hidden",
                    boxShadow: "var(--shadow-sm)",
                    textDecoration: "none",
                    height: "100%",
                  }}
                >
                  <ImagePlaceholder src={ind.imgSrc} alt={ind.name} height={100} borderRadius="0" style={{ width: "100%" }} />
                  <div style={{ padding: "18px 20px" }}>
                    <div style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 16, color: "var(--text-strong)", marginBottom: 8 }}>{ind.name}</div>
                    <p style={{ fontFamily: "var(--font-sans)", fontSize: 13, lineHeight: 1.65, color: "var(--text-muted)", margin: "0 0 14px" }}>{ind.text}</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                      {ind.solutions.slice(0, 3).map((s) => <TealChip key={s} label={s} />)}
                      {ind.solutions.length > 3 && <TealChip label={`+${ind.solutions.length - 3} المزيد`} />}
                    </div>
                  </div>
                </Link>
              </AnimateIn>
            ))}
          </div>
          <AnimateIn delay={200}>
            <div style={{ textAlign: "center", marginTop: 28 }}>
              <Link href="/ar/solutions" className="se-btn" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "11px 20px", background: "var(--se-blue-soft)", color: "var(--se-blue)", fontWeight: 700, fontSize: 15, borderRadius: "var(--radius-md)", border: "1.5px solid var(--se-blue)", textDecoration: "none" }}>
                <ArrowLeft size={15} /> استكشف جميع الحلول حسب القطاع
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── الحلول المتقدمة ── */}
      <section
        style={{
          background: "var(--se-blue-darker)",
          position: "relative",
          overflow: "hidden",
          padding: "96px 0",
        }}
      >
        <div aria-hidden style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle, rgba(34,167,168,0.3) 1.5px, transparent 1.5px), radial-gradient(circle, rgba(34,167,168,0.12) 1px, transparent 1px)", backgroundSize: "60px 60px, 36px 36px", backgroundPosition: "0 0, 28px 18px", opacity: 0.6 }} />
        <div aria-hidden style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(34,167,168,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(34,167,168,0.05) 1px,transparent 1px)", backgroundSize: "36px 36px" }} />
        <div className="se-container" style={{ position: "relative" }}>
          <AnimateIn>
            <SecHead
              label="الحلول المتقدمة"
              title="تقنيات متقدمة للأعمال الميدانية المعقدة"
              subtitle="لمشاريع تتجاوز القياسات التقليدية: مسح ثلاثي الأبعاد، رسم خرائط جوي، مسح بحري، وكشف تحت الأرض."
              light
              centered
            />
          </AnimateIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 18 }}>
            {highSolutions.map((h, i) => (
              <AnimateIn key={h.title} delay={i * 80} from="scale">
                <div
                  className="kit-hs-card"
                  style={{
                    background: "rgba(34,167,168,0.06)",
                    border: "1px solid rgba(34,167,168,0.22)",
                    borderRadius: "var(--radius-xl)",
                    overflow: "hidden",
                  }}
                >
                  <ImagePlaceholder src={h.imgSrc} alt={h.title} height={110} borderRadius="0" style={{ width: "100%" }} />
                  <div style={{ padding: "20px 22px" }}>
                    <div style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 16, color: "#fff", marginBottom: 8, lineHeight: 1.3 }}>{h.title}</div>
                    <div style={{ fontFamily: "var(--font-sans)", fontSize: 13, lineHeight: 1.6, color: "rgba(255,255,255,0.58)" }}>{h.short}</div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
          <AnimateIn delay={200}>
            <div style={{ textAlign: "center", marginTop: 40 }}>
              <Link href="/ar/advanced-solutions" className="se-btn se-btn-teal" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 24px", background: "var(--se-teal)", color: "#fff", fontWeight: 700, fontSize: 15, borderRadius: "var(--radius-md)", textDecoration: "none" }}>
                <ArrowLeft size={15} /> استكشف الحلول المتقدمة
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── الصيانة والمعايرة ── */}
      <section
        style={{
          background: "var(--se-white)",
          position: "relative",
          overflow: "hidden",
          padding: "96px 0",
          backgroundImage:
            "linear-gradient(rgba(53,80,97,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(53,80,97,0.05) 1px,transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      >
        <div className="se-container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="kit-2col">
            <AnimateIn from="right">
              <SecHead label="الصيانة والمعايرة" title="حافظ على دقة معداتك وجاهزيتها الميدانية" />
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, lineHeight: 1.8, color: "var(--text-muted)", margin: "0 0 20px" }}>
                المعدات الاحترافية يجب أن تحافظ على دقتها بعد الشراء. ندعمك بالفحص والصيانة والمعايرة والمتابعة.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 28 }}>
                {["فحص الجهاز وخدمته", "معايرة مع شهادة معتمدة", "باقات لأساطيل المعدات", "أولوية في التسليم لعملاء الباقات"].map((item, i) => (
                  <AnimateIn key={item} delay={i * 60} from="right">
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <div className="se-pulse-teal" style={{ width: 22, height: 22, borderRadius: "50%", background: "var(--se-teal)", color: "#fff", display: "grid", placeItems: "center", flexShrink: 0, animationDelay: `${i * 0.3}s` }}>
                        <Check size={12} />
                      </div>
                      <span style={{ fontFamily: "var(--font-sans)", fontSize: 15, color: "var(--text-body)" }}>{item}</span>
                    </div>
                  </AnimateIn>
                ))}
              </div>
              <Link href="/ar/maintenance-calibration" className="se-btn" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "11px 20px", background: "var(--se-blue-soft)", color: "var(--se-blue)", fontWeight: 700, fontSize: 15, borderRadius: "var(--radius-md)", border: "1.5px solid var(--se-blue)", textDecoration: "none" }}>
                <ArrowLeft size={15} /> عرض جميع الباقات
              </Link>
            </AnimateIn>

            <AnimateIn from="left" delay={100}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                {maintenancePackages.map((pkg, i) => (
                  <AnimateIn key={pkg.name} delay={i * 70} from="scale">
                    <div
                      style={{
                        borderRadius: "var(--radius-lg)",
                        overflow: "hidden",
                        border: `${pkg.featured ? "2px solid var(--accent)" : "1px solid var(--border-subtle)"}`,
                        boxShadow: pkg.featured ? "0 12px 32px rgba(246,186,59,0.2)" : "var(--shadow-xs)",
                        transition: "transform 0.2s, box-shadow 0.2s",
                      }}
                      className="kit-card-teal"
                    >
                      <div style={{ background: pkg.featured ? "var(--se-blue)" : "var(--se-gray-50)", padding: "22px 14px", textAlign: "center" }}>
                        {pkg.featured && <div style={{ fontFamily: "var(--font-sans)", fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--accent)", marginBottom: 6 }}>الأنسب</div>}
                        <div style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 14, color: pkg.featured ? "#fff" : "var(--text-strong)", lineHeight: 1.2, marginBottom: 8 }}>{pkg.name}</div>
                        <div style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: pkg.featured ? "rgba(255,255,255,0.55)" : "var(--text-muted)" }}>خطة خدمة سنوية</div>
                      </div>
                    </div>
                  </AnimateIn>
                ))}
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── شركاؤنا ── */}
      <section
        style={{
          background: "var(--se-blue-dark)",
          position: "relative",
          overflow: "hidden",
          padding: "80px 0",
          backgroundImage:
            "linear-gradient(rgba(34,167,168,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(34,167,168,0.05) 1px,transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      >
        <div className="se-container" style={{ position: "relative" }}>
          <AnimateIn>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <Eyebrow light>شركاء التقنية</Eyebrow>
              <h2 style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "clamp(24px,3vw,34px)", color: "#fff", margin: "14px 0 10px", letterSpacing: "-0.02em" }}>تقنيات عالمية، دعم محلي</h2>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, color: "rgba(255,255,255,0.6)", maxWidth: "52ch", margin: "0 auto" }}>تقنيات مساحة ورسم خرائط واكتشاف ومسح ثلاثي الأبعاد وطائرات مسيّرة احترافية، مدعومة محلياً في جميع أنحاء المملكة العربية السعودية.</p>
            </div>
          </AnimateIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 14 }}>
            {partners.map((p, i) => (
              <AnimateIn key={p.name} delay={i * 60} from="up">
                <div
                  className="kit-partner-card"
                  style={{
                    background: "var(--se-white)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    borderRadius: "var(--radius-lg)",
                    padding: "20px 16px",
                    textAlign: "center",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 12,
                  }}
                >
                  <div style={{ height: 44, display: "flex", alignItems: "center", justifyContent: "center" }}>
                    {p.logo ? (
                      <Image src={p.logo} alt={p.name} width={150} height={44} style={{ height: 44, width: "auto", maxWidth: 150, objectFit: "contain" }} />
                    ) : (
                      <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 17, color: "var(--se-blue-dark)", lineHeight: 1.15 }}>{p.name}</span>
                    )}
                  </div>
                  <span style={{ display: "inline-block", fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 600, padding: "3px 9px", borderRadius: "var(--radius-pill)", background: "var(--se-teal-soft)", color: "var(--se-teal)" }}>{p.category}</span>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── شعارات العملاء ── */}
      <section
        style={{
          padding: "56px 0",
          borderTop: "1px solid var(--border-subtle)",
          borderBottom: "1px solid var(--border-subtle)",
          background: "var(--se-white)",
          overflow: "hidden",
        }}
      >
        <AnimateIn>
          <p style={{ textAlign: "center", fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.18em", color: "var(--text-muted)", marginBottom: 28 }}>
            موثوق من فرق الهندسة والمقاولات
          </p>
        </AnimateIn>
        <Marquee
          items={clientLogos.map((name) => (
            <div
              key={name}
              className="kit-logo-card"
              style={{ border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-md)", padding: "12px 20px", fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 13, color: "var(--se-gray-400)", whiteSpace: "nowrap", margin: "0 8px", background: "var(--se-white)", transition: "border-color 0.2s, color 0.2s, transform 0.2s" }}
            >
              {name}
            </div>
          ))}
          speed={46}
        />
        <div style={{ marginTop: 12 }}>
          <Marquee
            items={[...clientLogos].reverse().map((name) => (
              <div
                key={name}
                className="kit-logo-card"
                style={{ border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-md)", padding: "12px 20px", fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 13, color: "var(--se-gray-400)", whiteSpace: "nowrap", margin: "0 8px", background: "var(--se-white)", transition: "border-color 0.2s, color 0.2s, transform 0.2s" }}
              >
                {name}
              </div>
            ))}
            reverse
            speed={54}
          />
        </div>
      </section>

      {/* ── قصتنا ── */}
      <section
        style={{
          background: "var(--se-gray-50)",
          position: "relative",
          overflow: "hidden",
          padding: "96px 0",
          backgroundImage:
            "repeating-linear-gradient(45deg,rgba(53,80,97,0.03) 0,rgba(53,80,97,0.03) 1px,transparent 1px,transparent 10px)," +
            "repeating-linear-gradient(-45deg,rgba(53,80,97,0.03) 0,rgba(53,80,97,0.03) 1px,transparent 1px,transparent 10px)",
          backgroundSize: "14px 14px",
        }}
      >
        <div className="se-container">
          <AnimateIn>
            <SecHead
              label="قصتنا"
              title="من الخبرة الميدانية إلى الدعم 360 درجة"
              subtitle="بدأت خبراء المساحة من الميدان، وبنت شركة تركّز على الوصول إلى المعدات والدعم التقني وقيمة العميل طويلة الأمد."
              centered
            />
          </AnimateIn>
          <AnimateIn delay={100}>
            <div style={{ overflowX: "auto", paddingBottom: 8 }}>
              <div style={{ display: "flex", gap: 0, minWidth: 760, position: "relative" }}>
                <div
                  aria-hidden
                  style={{
                    position: "absolute",
                    top: 18,
                    left: "5%",
                    right: "5%",
                    height: 3,
                    background: "linear-gradient(90deg, transparent, var(--se-teal) 10%, var(--se-teal) 90%, transparent)",
                  }}
                />
                {timeline.map((t) => (
                  <div
                    key={t.year}
                    style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", padding: "0 5px", position: "relative" }}
                  >
                    <div
                      className="se-glow-teal"
                      style={{
                        width: 36, height: 36, borderRadius: "50%",
                        background: "var(--se-blue)", border: "3px solid var(--accent)",
                        color: "#fff", display: "grid", placeItems: "center",
                        position: "relative", zIndex: 1, marginBottom: 10, flexShrink: 0,
                        transition: "transform 0.2s, box-shadow 0.2s",
                      }}
                    >
                      <MapPin size={14} />
                    </div>
                    <div style={{ fontFamily: "var(--font-sans)", fontWeight: 800, fontSize: 18, color: "var(--accent)", marginBottom: 6, letterSpacing: "-0.02em", lineHeight: 1 }}>{t.year}</div>
                    <div
                      style={{
                        background: "var(--se-white)", border: "1px solid var(--border-subtle)",
                        borderRadius: "var(--radius-md)", padding: "10px 8px",
                        boxShadow: "var(--shadow-xs)", textAlign: "center", width: "100%",
                        transition: "border-color 0.2s, box-shadow 0.2s",
                      }}
                    >
                      <div style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 12, color: "var(--text-strong)", lineHeight: 1.35 }}>{t.title}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimateIn>
          <AnimateIn delay={200}>
            <div style={{ textAlign: "center", marginTop: 32 }}>
              <Link href="/ar/story" className="se-btn" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "11px 20px", background: "var(--se-blue-soft)", color: "var(--se-blue)", fontWeight: 700, fontSize: 15, borderRadius: "var(--radius-md)", border: "1.5px solid var(--se-blue)", textDecoration: "none" }}>
                <ArrowLeft size={15} /> اقرأ قصتنا
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── شريط برنامج الإحالة ── */}
      <section style={{ background: "var(--se-blue-dark)", borderTop: "1px solid rgba(34,167,168,0.2)", padding: "64px 0", position: "relative", overflow: "hidden" }}>
        <div aria-hidden style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 1px 1px, rgba(34,167,168,0.06) 1px, transparent 0)", backgroundSize: "22px 22px", pointerEvents: "none" }} />
        <div className="se-container" style={{ position: "relative" }}>
          <AnimateIn>
            <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 32, alignItems: "center", direction: "rtl" }} className="kit-2col">
              <div style={{ flexShrink: 0 }}>
                <Link href="/ar/referral-program" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 26px", background: "var(--se-teal)", color: "#fff", fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 15, borderRadius: "var(--radius-md)", textDecoration: "none", whiteSpace: "nowrap", boxShadow: "0 4px 20px rgba(34,167,168,0.3)" }}>
                  <ArrowLeft size={16} />
                  انضم لقائمة الانتظار
                </Link>
              </div>
              <div style={{ textAlign: "right" }}>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "rgba(246,186,59,0.15)", border: "1px solid rgba(246,186,59,0.4)", color: "#f6ba3b", fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", padding: "0.3em 0.85em", borderRadius: "var(--radius-pill)", marginBottom: 14 }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: "currentColor", display: "inline-block" }} />
                  قريباً
                </span>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(20px,2.5vw,28px)", color: "#fff", margin: "0 0 10px", letterSpacing: "0" }}>
                  برنامج الإحالة — اكسب مكافآت عن كل عميل تحيله
                </h3>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: 15, color: "rgba(255,255,255,0.6)", margin: 0, lineHeight: 1.8, maxWidth: "56ch" }}>
                  نطلق برنامج إحالة للمحترفين في قطاعات المساحة والهندسة. سجّل اهتمامك الآن وكن من أوائل المنضمين. خاضع للشروط النهائية للبرنامج عند الإطلاق.
                </p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── الدعوة للتصرف ── */}
      <section
        style={{
          background: "var(--se-blue-dark)",
          position: "relative",
          overflow: "hidden",
          padding: "100px 0",
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(34,167,168,0.10) 1px, transparent 0)",
          backgroundSize: "20px 20px",
        }}
      >
        <div
          aria-hidden
          style={{
            position: "absolute", top: "50%", left: "50%",
            transform: "translate(-50%, -50%)",
            width: 600, height: 400, borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(34,167,168,0.12) 0%, transparent 70%)",
            animation: "se-float-slow 8s ease-in-out infinite",
            pointerEvents: "none",
          }}
        />
        <div aria-hidden style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: "linear-gradient(90deg, var(--accent) 0%, var(--se-teal) 60%, var(--accent) 100%)" }} />
        <div className="se-container" style={{ position: "relative", textAlign: "center" }}>
          <AnimateIn>
            <div style={{ maxWidth: 580, margin: "0 auto" }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.75rem,4vw,2.75rem)", color: "#fff", marginBottom: "1rem", letterSpacing: "-0.02em" }}>
                هل أنت مستعد لتجهيز فريقك الميداني؟
              </h2>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-md)", color: "rgba(255,255,255,0.65)", marginBottom: "2.25rem", lineHeight: 1.65 }}>
                تصفح كتالوجنا الإلكتروني الرسمي أو تحدث مع فريقنا للحصول على توصية مخصصة بناءً على متطلبات مشروعك.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center" }}>
                <a
                  href="https://surveyingexperts-sa.com/collections/all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="se-btn se-btn-yellow"
                  style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 28px", background: "var(--accent)", color: "var(--se-blue-dark)", fontWeight: 700, fontSize: 16, borderRadius: "var(--radius-md)", textDecoration: "none" }}
                >
                  زيارة المتجر الإلكتروني <ExternalLink size={16} />
                </a>
                <Link
                  href="/ar/contact"
                  className="se-btn se-btn-outline"
                  style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 28px", background: "transparent", color: "#fff", fontWeight: 700, fontSize: 16, borderRadius: "var(--radius-md)", border: "1.5px solid rgba(255,255,255,0.4)", textDecoration: "none" }}
                >
                  طلب استشارة
                </Link>
                <Link
                  href="/ar/referral-program"
                  style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 28px", background: "rgba(34,167,168,0.15)", color: "var(--se-teal)", fontWeight: 700, fontSize: 16, borderRadius: "var(--radius-md)", border: "1.5px solid rgba(34,167,168,0.4)", textDecoration: "none" }}
                >
                  <ArrowLeft size={16} /> اكسب مكافآت بإحالة عميل
                </Link>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      <ReferralPopupAr />
    </>
  );
}
