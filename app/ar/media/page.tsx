import type { Metadata } from "next";
import Link from "next/link";
import { Play, Camera, Newspaper, BookOpen, ExternalLink, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "المركز الإعلامي | فيديوهات وصور وأخبار | خبراء المساحة",
  description:
    "شاهد فيديوهات خبراء المساحة، واستكشف التصوير الميداني، وتابع أحدث الأخبار على يوتيوب وفيسبوك وتيك توك ولينكد إن.",
};

function Eyebrow({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 10, marginBottom: "1.25rem" }}>
      <span style={{ display: "inline-block", width: 24, height: 2, background: light ? "var(--se-teal)" : "var(--se-blue)", borderRadius: 2, flexShrink: 0 }} />
      <span style={{ fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.2em", color: light ? "var(--se-teal)" : "var(--se-blue)" }}>
        {children}
      </span>
    </div>
  );
}

function IconFacebook() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}
function IconLinkedIn() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
function IconYouTube() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon fill="white" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
    </svg>
  );
}
function IconTikTok() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
    </svg>
  );
}

const channels = [
  {
    platform: "يوتيوب",
    handle: "@surveyingexperts-sa",
    href: "https://www.youtube.com/@surveyingexperts-sa",
    icon: <IconYouTube />,
    color: "#FF0000",
    description: "فيديوهات المنتجات، شروحات ميدانية، وأدلة استخدام معدات المساحة الاحترافية.",
    cta: "زيارة القناة",
  },
  {
    platform: "فيسبوك",
    handle: "SurveyingExp1",
    href: "https://www.facebook.com/SurveyingExp1",
    icon: <IconFacebook />,
    color: "#1877F2",
    description: "الأخبار، تحديثات المنتجات، العروض، ومحتوى للمجتمع الميداني الاحترافي.",
    cta: "تابعنا",
  },
  {
    platform: "لينكد إن",
    handle: "surveyingexperts",
    href: "https://www.linkedin.com/company/surveyingexperts",
    icon: <IconLinkedIn />,
    color: "#0A66C2",
    description: "تحديثات مهنية، رؤى الصناعة، أخبار الشركة، ومحتوى B2B.",
    cta: "تواصل",
  },
  {
    platform: "تيك توك",
    handle: "@surveying.experts",
    href: "https://www.tiktok.com/@surveying.experts",
    icon: <IconTikTok />,
    color: "#010101",
    description: "مقاطع ميدانية قصيرة، الأجهزة أثناء العمل، ومحتوى من وراء الكواليس.",
    cta: "تابعنا",
  },
];

const mediaTypes = [
  { icon: <Play size={22} />, title: "فيديوهات المنتجات", description: "مراجعات مفصلة لأجهزة المساحة ومقارنات وأدلة أداء ميدانية." },
  { icon: <Camera size={22} />, title: "تصوير ميداني", description: "لقطات حقيقية للمعدات أثناء العمل في مشاريع البناء والبنية التحتية والمساحة في المملكة العربية السعودية." },
  { icon: <Newspaper size={22} />, title: "أخبار وتحديثات", description: "أخبار الشركة، الشراكات الجديدة، إطلاق المعدات، وأخبار الصناعة من خبراء المساحة." },
  { icon: <BookOpen size={22} />, title: "محتوى تعليمي", description: "شروحات تقنية ونصائح عملية وإرشادات لفرق المساحة الميدانية." },
];

const placeholderVideos = [
  { title: "عرض ميداني: eSurvey GNSS RTK", category: "عرض منتج" },
  { title: "دليل إعداد التوتال ستيشن", category: "كيفية الاستخدام" },
  { title: "مسح ثلاثي الأبعاد في موقع إنشاء", category: "عمل ميداني" },
  { title: "سير عمل رسم خرائط الدرون بالسعودية", category: "عمل ميداني" },
  { title: "عرض GPR للكشف تحت الأرض", category: "عرض منتج" },
  { title: "معدات المساحة البحرية", category: "حلول متقدمة" },
];

export default function ArMediaPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: "var(--se-blue-dark)", position: "relative", overflow: "hidden", padding: "100px 0 80px", minHeight: 380 }}>
        <div aria-hidden style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 1px 1px, rgba(34,167,168,0.07) 1px, transparent 0)", backgroundSize: "22px 22px" }} />
        <div aria-hidden style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 80% at 20% 50%, rgba(34,167,168,0.12) 0%, transparent 70%)" }} />
        <div aria-hidden style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg, var(--accent), var(--se-teal), var(--accent))" }} />
        <div className="se-container" style={{ position: "relative" }}>
          <Eyebrow light>المركز الإعلامي</Eyebrow>
          <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "#fff", fontSize: "clamp(32px,5vw,62px)", lineHeight: 1.05, letterSpacing: "-0.025em", margin: "16px 0 20px", maxWidth: 640 }}>
            خبراء المساحة في الميدان
          </h1>
          <p style={{ fontFamily: "var(--font-sans)", color: "rgba(255,255,255,0.68)", fontSize: 18, lineHeight: 1.7, maxWidth: 520, margin: "0 0 36px" }}>
            فيديوهات، تصوير ميداني، وتحديثات من فريقنا في أنحاء المملكة العربية السعودية. تابعنا على منصاتنا للبقاء على اطلاع.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {channels.map((c) => (
              <a key={c.platform} href={c.href} target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "9px 16px", background: "rgba(255,255,255,0.08)", color: "#fff", fontWeight: 600, fontSize: 13, borderRadius: "var(--radius-md)", border: "1px solid rgba(255,255,255,0.15)", textDecoration: "none" }}>
                <span style={{ color: c.color }}>{c.icon}</span>
                {c.platform}
                <ExternalLink size={11} style={{ opacity: 0.5 }} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* What We Share */}
      <section style={{ background: "var(--se-white)", padding: "80px 0" }}>
        <div className="se-container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <Eyebrow>أنواع المحتوى</Eyebrow>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.5rem,3vw,2.1rem)", color: "var(--text-strong)", margin: "12px 0 0", letterSpacing: "-0.02em" }}>ماذا نشارك</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
            {mediaTypes.map((m) => (
              <div key={m.title} style={{ background: "var(--se-gray-50)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-xl)", padding: "28px 24px" }}>
                <div style={{ width: 48, height: 48, borderRadius: "var(--radius-md)", background: "var(--se-teal)", color: "#fff", display: "grid", placeItems: "center", marginBottom: 16 }}>
                  {m.icon}
                </div>
                <div style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 16, color: "var(--text-strong)", marginBottom: 8 }}>{m.title}</div>
                <div style={{ fontFamily: "var(--font-sans)", fontSize: 14, lineHeight: 1.65, color: "var(--text-muted)" }}>{m.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video grid */}
      <section style={{ background: "var(--se-gray-50)", padding: "80px 0" }}>
        <div className="se-container">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 36, flexWrap: "wrap", gap: 16 }}>
            <div>
              <Eyebrow>يوتيوب</Eyebrow>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.375rem,2.5vw,1.875rem)", color: "var(--text-strong)", margin: "8px 0 0", letterSpacing: "-0.02em" }}>آخر الفيديوهات</h2>
            </div>
            <a href="https://www.youtube.com/@surveyingexperts-sa" target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 18px", background: "#FF0000", color: "#fff", fontWeight: 700, fontSize: 13, borderRadius: "var(--radius-md)", textDecoration: "none" }}>
              <IconYouTube /> مشاهدة الكل <ExternalLink size={12} />
            </a>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
            {placeholderVideos.map((v) => (
              <a key={v.title} href="https://www.youtube.com/@surveyingexperts-sa" target="_blank" rel="noopener noreferrer"
                style={{ display: "block", borderRadius: "var(--radius-xl)", overflow: "hidden", background: "var(--se-blue-dark)", textDecoration: "none", boxShadow: "var(--shadow-md)" }}>
                <div style={{ height: 168, background: "linear-gradient(135deg, #1a2b38 0%, #243949 100%)", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                  <div aria-hidden style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 1px 1px, rgba(34,167,168,0.06) 1px, transparent 0)", backgroundSize: "18px 18px" }} />
                  <div style={{ width: 52, height: 52, borderRadius: "50%", background: "rgba(255,0,0,0.85)", display: "grid", placeItems: "center" }}>
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="white"><polygon points="5,3 19,12 5,21" /></svg>
                  </div>
                </div>
                <div style={{ padding: "14px 16px" }}>
                  <div style={{ display: "inline-block", fontFamily: "var(--font-sans)", fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--se-teal)", marginBottom: 6 }}>{v.category}</div>
                  <div style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 14, color: "#fff", lineHeight: 1.4 }}>{v.title}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Social channels */}
      <section style={{ background: "var(--se-blue-darker)", padding: "80px 0", position: "relative", overflow: "hidden" }}>
        <div aria-hidden style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(34,167,168,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(34,167,168,0.04) 1px,transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="se-container" style={{ position: "relative" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <Eyebrow light>وسائل التواصل الاجتماعي</Eyebrow>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.5rem,3vw,2.1rem)", color: "#fff", margin: "12px 0 10px", letterSpacing: "-0.02em" }}>تابع خبراء المساحة</h2>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 15, color: "rgba(255,255,255,0.55)", maxWidth: "50ch", margin: "0 auto" }}>ابقَ على اطلاع بأخبار المعدات، الفيديوهات الميدانية، العروض، والرؤى الاحترافية.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
            {channels.map((c) => (
              <a key={c.platform} href={c.href} target="_blank" rel="noopener noreferrer"
                style={{ display: "block", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "var(--radius-xl)", padding: "28px 22px", textDecoration: "none" }}>
                <div style={{ width: 48, height: 48, borderRadius: "var(--radius-md)", background: c.color, color: "#fff", display: "grid", placeItems: "center", marginBottom: 16 }}>
                  {c.icon}
                </div>
                <div style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 16, color: "#fff", marginBottom: 4 }}>{c.platform}</div>
                <div style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: "rgba(255,255,255,0.4)", marginBottom: 12 }}>{c.handle}</div>
                <div style={{ fontFamily: "var(--font-sans)", fontSize: 13, lineHeight: 1.6, color: "rgba(255,255,255,0.6)", marginBottom: 18 }}>{c.description}</div>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 6, fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 700, color: "var(--se-teal)" }}>
                  {c.cta} <ExternalLink size={12} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--se-white)", padding: "72px 0", textAlign: "center" }}>
        <div className="se-container">
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.375rem,2.5vw,1.875rem)", color: "var(--text-strong)", marginBottom: "1rem", letterSpacing: "-0.02em" }}>
            هل تريد رؤية معداتنا في العمل؟
          </h2>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, color: "var(--text-muted)", marginBottom: "2rem", maxWidth: "50ch", margin: "0 auto 2rem" }}>
            يمكن لفريقنا ترتيب عرض توضيحي أو ربطك بمراجع ميدانية قريبة من مشروعك.
          </p>
          <Link href="/ar/contact"
            style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 26px", background: "var(--se-teal)", color: "#fff", fontWeight: 700, fontSize: 15, borderRadius: "var(--radius-md)", textDecoration: "none" }}>
            <ArrowLeft size={15} /> طلب عرض توضيحي
          </Link>
        </div>
      </section>
    </>
  );
}
