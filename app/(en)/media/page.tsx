import type { Metadata } from "next";
import Link from "next/link";
import { Play, Camera, Newspaper, ExternalLink } from "lucide-react";
import { getLatestVideos } from "@/lib/youtube";

export const metadata: Metadata = {
  title: "Media | Videos, Photos & News | Surveying Experts",
  description:
    "Watch Surveying Experts videos, explore field photography, and follow our latest news across YouTube, Facebook, TikTok, and LinkedIn.",
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
    platform: "YouTube",
    handle: "@surveyingexperts-sa",
    href: "https://www.youtube.com/@surveyingexperts-sa",
    icon: <IconYouTube />,
    color: "#FF0000",
    description: "Product demonstrations, field videos, and how-to guides for surveying equipment.",
    cta: "Visit Channel",
  },
  {
    platform: "Facebook",
    handle: "SurveyingExp1",
    href: "https://www.facebook.com/SurveyingExp1",
    icon: <IconFacebook />,
    color: "#1877F2",
    description: "News, product updates, promotions, and content for the professional field community.",
    cta: "Follow Us",
  },
  {
    platform: "LinkedIn",
    handle: "surveyingexperts",
    href: "https://www.linkedin.com/company/surveyingexperts",
    icon: <IconLinkedIn />,
    color: "#0A66C2",
    description: "Professional updates, industry insights, company news, and B2B content.",
    cta: "Connect",
  },
  {
    platform: "TikTok",
    handle: "@surveying.experts",
    href: "https://www.tiktok.com/@surveying.experts",
    icon: <IconTikTok />,
    color: "#010101",
    description: "Short field videos, equipment in action, and behind-the-scenes content.",
    cta: "Follow",
  },
];

const mediaTypes = [
  { icon: <Play size={22} />, title: "Product Videos", description: "Watch equipment demonstrations, field performance tests, and usage guides across our surveying technology range." },
  { icon: <Camera size={22} />, title: "Field Photography", description: "Visual documentation of equipment in use across Saudi Arabia's construction, infrastructure, and surveying projects." },
  { icon: <Newspaper size={22} />, title: "News & Updates", description: "Company announcements, new partnerships, equipment launches, and industry news from Surveying Experts." },
];

export default async function MediaPage() {
  const videos = await getLatestVideos(6);
  return (
    <>
      {/* Hero */}
      <section style={{ background: "var(--se-blue-dark)", position: "relative", overflow: "hidden", padding: "100px 0 80px", minHeight: 380 }}>
        <div aria-hidden style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 1px 1px, rgba(34,167,168,0.07) 1px, transparent 0)", backgroundSize: "22px 22px" }} />
        <div aria-hidden style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 80% at 80% 50%, rgba(34,167,168,0.12) 0%, transparent 70%)" }} />
        <div aria-hidden style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg, var(--accent), var(--se-teal), var(--accent))" }} />
        <div className="se-container" style={{ position: "relative" }}>
          <Eyebrow light>Media Center</Eyebrow>
          <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "#fff", fontSize: "clamp(32px,5vw,62px)", lineHeight: 1.05, letterSpacing: "-0.025em", margin: "16px 0 20px", maxWidth: 680 }}>
            See Surveying Experts in Action
          </h1>
          <p style={{ fontFamily: "var(--font-sans)", color: "#CFE3EC", fontSize: 18, lineHeight: 1.7, maxWidth: 520, margin: "0 0 36px" }}>
            Videos, field photography, and updates from our team across Saudi Arabia. Follow us on social media to stay connected.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {channels.map((c) => (
              <a key={c.platform} href={c.href} target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "9px 16px", color: "#fff", fontWeight: 600, fontSize: 13, borderRadius: "var(--radius-md)", border: "1px solid rgba(255,255,255,0.15)", textDecoration: "none", transition: "background 0.15s" }}>
                <span style={{ color: c.color }}>{c.icon}</span>
                {c.platform}
                <ExternalLink size={11} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* What We Share */}
      <section style={{ padding: "80px 0" }}>
        <div className="se-container">
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <Eyebrow>Content Types</Eyebrow>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.5rem,3vw,2.1rem)", color: "var(--text-strong)", margin: "12px 0 0", letterSpacing: "-0.02em" }}>What We Share</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
            {mediaTypes.map((m) => (
              <div key={m.title} style={{ border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-xl)", padding: "28px 24px" }}>
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

      {/* Latest Videos — live from YouTube RSS */}
      <section style={{ padding: "80px 0" }}>
        <div className="se-container">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 36, flexWrap: "wrap", gap: 16 }}>
            <div>
              <Eyebrow>YouTube</Eyebrow>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.375rem,2.5vw,1.875rem)", color: "var(--text-strong)", margin: "8px 0 0", letterSpacing: "-0.02em" }}>Latest Videos</h2>
            </div>
            <a href="https://www.youtube.com/@surveyingexperts-sa" target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 18px", background: "#FF0000", color: "#fff", fontWeight: 700, fontSize: 13, borderRadius: "var(--radius-md)", textDecoration: "none" }}>
              <IconYouTube /> View All Videos <ExternalLink size={12} />
            </a>
          </div>
          {videos.length === 0 ? (
            <div style={{ textAlign: "center", padding: "48px 0" }}>
              <a href="https://www.youtube.com/@surveyingexperts-sa" target="_blank" rel="noopener noreferrer"
                style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 22px", background: "#FF0000", color: "#fff", fontWeight: 700, fontSize: 14, borderRadius: "var(--radius-md)", textDecoration: "none" }}>
                <IconYouTube /> Watch on YouTube <ExternalLink size={12} />
              </a>
            </div>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
              {videos.map((v) => (
                <a key={v.id} href={v.videoUrl} target="_blank" rel="noopener noreferrer"
                  style={{ display: "block", borderRadius: "var(--radius-xl)", overflow: "hidden", textDecoration: "none", boxShadow: "var(--shadow-md)", border: "1px solid var(--border-subtle)" }}>
                  <div style={{ position: "relative", paddingTop: "56.25%", background: "#1a2b38", overflow: "hidden" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={v.thumbnailUrl} alt={v.title} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
                    <div aria-hidden style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.22)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <div style={{ width: 48, height: 48, borderRadius: "50%", background: "rgba(0,0,0,0.6)", display: "grid", placeItems: "center" }}>
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="white"><polygon points="6,3 20,12 6,21" /></svg>
                      </div>
                    </div>
                  </div>
                  <div style={{ padding: "14px 16px" }}>
                    <div style={{ fontFamily: "var(--font-sans)", fontSize: 11, color: "var(--text-muted)", marginBottom: 5 }}>
                      {new Date(v.published).toLocaleDateString("en-SA", { year: "numeric", month: "short" })}
                    </div>
                    <div style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 14, color: "var(--text-strong)", lineHeight: 1.4 }}>{v.title}</div>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Social channels */}
      <section style={{ background: "var(--se-blue-dark)", padding: "80px 0", position: "relative", overflow: "hidden" }}>
        <div className="se-container" style={{ position: "relative" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <Eyebrow light>Social Media</Eyebrow>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.5rem,3vw,2.1rem)", color: "#fff", margin: "12px 0 10px", letterSpacing: "-0.02em" }}>Follow Surveying Experts</h2>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 15, color: "#BDD4E2", maxWidth: "48ch", margin: "0 auto" }}>Stay updated with equipment news, field videos, promotions, and professional insights.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
            {channels.map((c) => (
              <a key={c.platform} href={c.href} target="_blank" rel="noopener noreferrer"
                style={{ display: "block", border: "1px solid rgba(255,255,255,0.12)", borderRadius: "var(--radius-xl)", padding: "28px 22px", textDecoration: "none" }}
              >
                <div style={{ width: 48, height: 48, borderRadius: "var(--radius-md)", background: c.color, color: "#fff", display: "grid", placeItems: "center", marginBottom: 16 }}>
                  {c.icon}
                </div>
                <div style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 16, color: "#fff", marginBottom: 4 }}>{c.platform}</div>
                <div style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: "#A3C3D8", marginBottom: 12 }}>{c.handle}</div>
                <div style={{ fontFamily: "var(--font-sans)", fontSize: 13, lineHeight: 1.6, color: "#C5DAE6", marginBottom: 18 }}>{c.description}</div>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 6, fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 700, color: "var(--se-teal)" }}>
                  {c.cta} <ExternalLink size={12} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "72px 0", textAlign: "center" }}>
        <div className="se-container">
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.375rem,2.5vw,1.875rem)", color: "var(--text-strong)", marginBottom: "1rem", letterSpacing: "-0.02em" }}>
            Want to See Our Equipment in Action?
          </h2>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, color: "var(--text-muted)", marginBottom: "2rem", maxWidth: "48ch", margin: "0 auto 2rem" }}>
            Our team can arrange a demonstration or connect you with field references near your project.
          </p>
          <Link href="/contact"
            style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 26px", color: "#fff", background: "var(--se-teal)", fontWeight: 700, fontSize: 15, borderRadius: "var(--radius-md)", textDecoration: "none" }}>
            Request a Demonstration
          </Link>
        </div>
      </section>
    </>
  );
}
