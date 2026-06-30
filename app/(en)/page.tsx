import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight, ExternalLink, MapPin,
  MessageSquare, Search, Package, Settings, Headphones, Wrench, Crosshair, ShieldCheck,
  ShoppingCart, Compass, Globe, Zap, Building, Layers,
  ScanLine, Plane, Waves, Radar,
  HardHat, PenTool, GitBranch,
  Check, Users, Briefcase, CreditCard, Calendar,
} from "lucide-react";
import { BannerHeroSection } from "@/components/sections/BannerHeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { AnimateIn } from "@/components/ui/AnimateIn";
import { Marquee } from "@/components/ui/Marquee";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { ReferralPopup } from "@/components/sections/ReferralPopup";

export const metadata: Metadata = {
  title: "Professional Surveying Equipment and Complete Field Support in Saudi Arabia",
  description:
    "Surveying Experts supplies professional surveying equipment and supports field teams across Saudi Arabia with consultation, maintenance, calibration, and after-sales service.",
};

function IconTile({ children, color = "teal", size = 44 }: { children: React.ReactNode; color?: "teal" | "blue" | "yellow"; size?: number }) {
  const bg = color === "teal" ? "var(--se-teal)" : color === "blue" ? "var(--se-blue)" : "var(--accent)";
  const fg = color === "yellow" ? "var(--se-blue-dark)" : "#fff";
  return (
    <div style={{ width: size, height: size, borderRadius: "var(--radius-md)", background: bg, color: fg, display: "grid", placeItems: "center", flexShrink: 0, transition: "transform 0.2s, box-shadow 0.2s" }}>
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
    <div style={{ marginBottom: "2.5rem", textAlign: centered ? "center" : "left" }}>
      {label && <Eyebrow light={light}>{label}</Eyebrow>}
      <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.625rem, 3vw, 2.25rem)", color: light ? "#fff" : "var(--text-strong)", lineHeight: 1.1, letterSpacing: "-0.02em", margin: label ? "0.5rem 0 0.875rem" : "0 0 0.875rem" }}>
        {title}
      </h2>
      {subtitle && <p style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-md)", color: light ? "rgba(255,255,255,0.65)" : "var(--text-muted)", lineHeight: 1.65, maxWidth: centered ? "58ch" : undefined, margin: centered ? "0 auto" : 0 }}>{subtitle}</p>}
    </div>
  );
}

const support360 = [
  { icon: <MessageSquare size={26} />, title: "Consultation", text: "We understand your project, site, and budget before recommending anything.", n: "01" },
  { icon: <Search size={26} />, title: "Equipment Selection", text: "We help you compare technologies and choose what fits your workflow.", n: "02" },
  { icon: <Package size={26} />, title: "Equipment Supply", text: "Fast quotation, branch availability, and our official online store.", n: "03" },
  { icon: <Settings size={26} />, title: "Setup & Guidance", text: "We help your team get confident with a new device before the first field day.", n: "04" },
  { icon: <Headphones size={26} />, title: "Field Support", text: "Technical questions answered when the team is on site and the job is moving.", n: "05" },
  { icon: <Wrench size={26} />, title: "Maintenance", text: "Device inspection and servicing to protect performance and extend lifespan.", n: "06" },
  { icon: <Crosshair size={26} />, title: "Calibration", text: "Certified calibration to keep your measurements accurate and trustworthy.", n: "07" },
  { icon: <ShieldCheck size={26} />, title: "After-Sales Support", text: "We follow up and stay reachable after every purchase.", n: "08" },
];

const usps = [
  { icon: <CreditCard size={20} />, title: "Flexible Ownership Options", text: "Purchase outright, on installment, choose from used equipment, or rent with the option to own. Rental fees are deducted from the purchase price." },
  { icon: <Calendar size={20} />, title: "Flexible Equipment Rentals", text: "Rent surveying equipment by the day, week, or month across a wide range of categories to match your project timeline." },
  { icon: <Compass size={20} />, title: "The Right Solution for Your Work", text: "We help you choose the right equipment based on your project type, field conditions, and team workflow, not just specs on a datasheet." },
  { icon: <Globe size={20} />, title: "Complete Surveying Technology Range", text: "GNSS/RTK, total stations, leveling, 3D scanning, SLAM mapping, underground detection, marine, drone, and accessories, all from one partner." },
  { icon: <MapPin size={20} />, title: "Local Support, Maintenance and Calibration", text: "Practical technical support, servicing, and certified calibration from teams that understand Saudi field conditions." },
  { icon: <Zap size={20} />, title: "Fast Sales and After-Sales Response", text: "From inquiry to quotation, purchase, rental, field support, or service. We respond quickly and communicate clearly." },
  { icon: <ShoppingCart size={20} />, title: "Online Store for Accessories and Equipment Awareness", text: "Order accessories directly and explore solutions online before speaking with our sales team." },
];

const teamRoles = [
  { icon: <Briefcase size={20} />, title: "Sales Engineers", text: "Handle equipment consultation, quotations, online store orders, and purchasing coordination.", imgSrc: "/images/photos/showroom-interior.jpg" },
  { icon: <Wrench size={20} />, title: "Maintenance Engineers", text: "Responsible for device inspection, servicing, calibration, and technical care after purchase.", imgSrc: "/images/photos/gnss-receiver.jpg" },
  { icon: <Settings size={20} />, title: "Technical Support Engineers", text: "Support clients with setup, operation guidance, and troubleshooting across all supported equipment.", imgSrc: "/images/photos/gnss-ertk25.jpg" },
  { icon: <Layers size={20} />, title: "Marketing, IT & Finance", text: "The operational core that supports communication, digital infrastructure, and business continuity.", imgSrc: "/images/photos/team-culture.jpg" },
];

const industries = [
  { icon: <HardHat size={18} />, name: "Construction Contractors", text: "For site layout, leveling, excavation, grading, progress tracking, and equipment readiness.", solutions: ["GNSS & RTK", "Total Station", "Machine Control", "Drone Mapping"], imgSrc: "/images/photos/slam-scanning.jpg" },
  { icon: <Compass size={18} />, name: "Surveying Offices", text: "For daily field measurement, reliable devices, accessories, calibration, and support.", solutions: ["GNSS & RTK", "Total Station", "3D Scanning", "Drone Mapping"], imgSrc: "/images/photos/gnss-receiver.jpg" },
  { icon: <PenTool size={18} />, name: "Engineering Consultants", text: "For documentation, as-built verification, inspection, reporting, and accurate field data.", solutions: ["Total Station", "GNSS & RTK", "3D Scanning", "Underground Detection"], imgSrc: "/images/photos/gnss-ertk25.jpg" },
  { icon: <GitBranch size={18} />, name: "Infrastructure & Roads", text: "For positioning, control, grading, mapping, progress monitoring, and long-distance field work.", solutions: ["GNSS & RTK", "Machine Control", "Total Station", "Drone Mapping"], imgSrc: "/images/photos/showroom-brand.jpg" },
];

const highSolutions = [
  { icon: <ScanLine size={22} />, title: "Laser Scanners and 3D Reality Capture", short: "Capture real-world environments as accurate digital data for documentation, analysis, and design workflows.", imgSrc: "/images/photos/slam-scanning.jpg" },
  { icon: <Plane size={22} />, title: "Drone and Aerial Mapping", short: "Capture large areas faster with aerial data for mapping, inspection, monitoring, and documentation.", imgSrc: "/images/photos/gnss-ertk25.jpg" },
  { icon: <Waves size={22} />, title: "Marine Surveying", short: "Survey water-based environments using hydrographic technologies for depth measurement and marine data collection.", imgSrc: "/images/photos/gnss-receiver.jpg" },
  { icon: <Radar size={22} />, title: "GPR and Underground Detection", short: "Detect and map what is hidden below the surface before excavation, construction, or infrastructure work.", imgSrc: "/images/photos/showroom-brand.jpg" },
];

const partners = [
  { name: "eSurvey", category: "GNSS & RTK", logo: "/images/brands/esurvey.png" },
  { name: "Survey Master", category: "Total Station & Marine", logo: "/images/brands/survey-master.png" },
  { name: "Radarteam", category: "GPR & Detection", logo: "/images/brands/radarteam.png" },
  { name: "OmniSLAM", category: "3D Scanning", logo: "/images/brands/omnislam.png" },
  { name: "The Drone Center", category: "Drone Mapping", logo: null },
  { name: "DJI", category: "Drone Technologies", logo: null },
  { name: "Quantum Systems", category: "Advanced Drones", logo: null },
];

const clientLogos = [
  "Expert", "Mapa", "SNAD", "Alfawaz Contracting", "Qemmet Alrawasi",
  "Darkstone", "Buna", "Enjazco", "Modern Building Leader",
  "First Fix", "Al Saif Engineering", "Trading Development Partnership",
];

const timeline = [
  { year: "2011", title: "Field Beginning" },
  { year: "2018", title: "Official Establishment" },
  { year: "2021", title: "eSurvey Partnership" },
  { year: "2023", title: "Survey Master Partnership" },
  { year: "2024", title: "Digital Growth" },
  { year: "2025", title: "New Solutions" },
  { year: "2026", title: "Drone Expansion" },
];

const maintenancePackages = [
  { name: "Basic Plan",    featured: false },
  { name: "Premium Plan",  featured: false },
  { name: "Gold Plan",     featured: true },
  { name: "Platinum Plan", featured: false },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO: 3-banner carousel ── */}
      <BannerHeroSection />

      {/* ── STATS BAND (client, count-up) ── */}
      <StatsSection />

      {/* ── WHO WE ARE ── */}
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
            <AnimateIn from="left">
              <SecHead label="About Us" title="Who We Are" />
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, lineHeight: 1.8, color: "var(--text-muted)", margin: "0 0 14px" }}>
                Surveying Experts is a Saudi company specialized in professional surveying equipment and complete field support. We supply technologies from trusted global brands and support clients through consultation, sales, setup guidance, maintenance, calibration, and after-sales service.
              </p>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, lineHeight: 1.8, color: "var(--text-muted)", margin: "0 0 28px" }}>
                Our goal is simple: help every client choose the right equipment and use it with confidence.
              </p>
              <Link href="/about" className="se-btn" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "11px 20px", background: "var(--se-blue-soft)", color: "var(--se-blue)", fontWeight: 700, fontSize: 15, borderRadius: "var(--radius-md)", border: "1.5px solid var(--se-blue)", textDecoration: "none" }}>
                Learn More About Us <ArrowRight size={15} />
              </Link>
            </AnimateIn>

            {/* Editorial collage */}
            <AnimateIn from="right" delay={100} className="kit-collage">
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "240px 160px", gap: 14 }}>
                <AnimateIn from="scale" delay={200}>
                  <ImagePlaceholder
                    src="/images/photos/gnss-ertk25.jpg"
                    alt="eRTK25 GNSS receiver in the field"
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
                    <div style={{ position: "absolute", top: 18, right: 18, background: "var(--accent)", borderRadius: "var(--radius-md)", padding: "6px 12px", textAlign: "center" }}>
                      <div style={{ fontWeight: 800, fontSize: 26, color: "var(--se-blue-dark)", lineHeight: 1, letterSpacing: "-0.02em" }}>7+</div>
                      <div style={{ fontSize: 10, color: "var(--se-blue-dark)", opacity: 0.75, marginTop: 1 }}>Years</div>
                    </div>
                    <div style={{ position: "relative", padding: "0 20px 22px" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                        <div style={{ width: 32, height: 32, borderRadius: "var(--radius-md)", background: "var(--se-teal)", color: "#fff", display: "grid", placeItems: "center", flexShrink: 0 }}>
                          <ShieldCheck size={15} />
                        </div>
                        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "var(--se-teal)" }}>ISO 9001:2015</div>
                      </div>
                      <div style={{ fontWeight: 700, fontSize: 16, color: "#fff", marginBottom: 4 }}>Certified Quality</div>
                      <div style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", lineHeight: 1.5 }}>Every device supported, serviced, and certified to international standards.</div>
                    </div>
                  </div>
                </AnimateIn>
                <AnimateIn from="scale" delay={400}>
                  <div style={{ height: "100%", borderRadius: "var(--radius-xl)", background: "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }}>
                    <div style={{ textAlign: "center" }}>
                      <div style={{ fontFamily: "var(--font-sans)", fontWeight: 800, fontSize: 38, color: "var(--se-blue-dark)", lineHeight: 1, letterSpacing: "-0.02em" }}>3K+</div>
                      <div style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 13, color: "var(--se-blue-dark)", marginTop: 4 }}>B2B Clients</div>
                    </div>
                  </div>
                </AnimateIn>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── 360 SUPPORT JOURNEY ── */}
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
              label="Our Support Model"
              title="A Complete 360 Degree Equipment Lifecycle"
              subtitle="We support every stage, from the first conversation before purchase to long-term field use and after-sales care."
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
                  <div style={{ fontFamily: "var(--font-sans)", fontSize: 10, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--se-teal)", marginTop: 6 }}>Full Lifecycle</div>
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

          {/* Mobile: compact icon + title rows (no descriptions — see full details on maintenance/solutions pages) */}
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

      {/* ── WHY CHOOSE US ── */}
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
            <SecHead label="Why Field Teams Choose Us" title="Why Field Teams Choose Surveying Experts" centered />
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
                Browse Online Store <ExternalLink size={15} />
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── EXPERT LINEUP ── */}
      <section style={{ background: "var(--se-white)", padding: "96px 0" }}>
        <div className="se-container">
          <AnimateIn>
            <SecHead
              label="The Expert Lineup"
              title="The Team Behind Your Field Operations"
              subtitle="Every client interaction is handled by a specialist, structured to respond fast and support accurately at every stage."
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
                    borderLeft: "4px solid var(--se-teal)",
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
              <Link href="/about" className="se-btn" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "11px 20px", background: "var(--se-blue-soft)", color: "var(--se-blue)", fontWeight: 700, fontSize: 15, borderRadius: "var(--radius-md)", border: "1.5px solid var(--se-blue)", textDecoration: "none" }}>
                Meet Our Team <ArrowRight size={15} />
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── INDUSTRY PREVIEW ── */}
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
              label="Solutions by Industry"
              title="Surveying Solutions Built Around Your Industry"
              subtitle="Different teams need different workflows. We match the right equipment and support to your field reality."
              centered
            />
          </AnimateIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 18 }}>
            {industries.map((ind, i) => (
              <AnimateIn key={ind.name} delay={i * 80} from="up">
                <Link
                  href="/solutions"
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
                      {ind.solutions.length > 3 && <TealChip label={`+${ind.solutions.length - 3} more`} />}
                    </div>
                  </div>
                </Link>
              </AnimateIn>
            ))}
          </div>
          <AnimateIn delay={200}>
            <div style={{ textAlign: "center", marginTop: 28 }}>
              <Link href="/solutions" className="se-btn" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "11px 20px", background: "var(--se-blue-soft)", color: "var(--se-blue)", fontWeight: 700, fontSize: 15, borderRadius: "var(--radius-md)", border: "1.5px solid var(--se-blue)", textDecoration: "none" }}>
                Explore All Solutions by Industry <ArrowRight size={15} />
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── HIGH SOLUTIONS PREVIEW ── */}
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
              label="Advanced Solutions"
              title="Advanced Technologies for Complex Field Work"
              subtitle="For projects that need more than traditional measurement: 3D scanning, drone mapping, marine surveying, and underground detection."
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
              <Link href="/advanced-solutions" className="se-btn se-btn-teal" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 24px", background: "var(--se-teal)", color: "#fff", fontWeight: 700, fontSize: 15, borderRadius: "var(--radius-md)", textDecoration: "none" }}>
                Explore Advanced Solutions <ArrowRight size={15} />
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── MAINTENANCE PREVIEW ── */}
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
            <AnimateIn from="left">
              <SecHead label="Maintenance & Calibration" title="Keep Your Equipment Accurate and Field-Ready" />
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, lineHeight: 1.8, color: "var(--text-muted)", margin: "0 0 20px" }}>
                Professional equipment must stay accurate after purchase. We support inspection, maintenance, calibration, and after-sales follow-up.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 28 }}>
                {["Device inspection and servicing", "Calibration with certificate", "Package plans for company fleets", "Priority turnaround for package clients"].map((item, i) => (
                  <AnimateIn key={item} delay={i * 60} from="left">
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <div className="se-pulse-teal" style={{ width: 22, height: 22, borderRadius: "50%", background: "var(--se-teal)", color: "#fff", display: "grid", placeItems: "center", flexShrink: 0, animationDelay: `${i * 0.3}s` }}>
                        <Check size={12} />
                      </div>
                      <span style={{ fontFamily: "var(--font-sans)", fontSize: 15, color: "var(--text-body)" }}>{item}</span>
                    </div>
                  </AnimateIn>
                ))}
              </div>
              <Link href="/maintenance-calibration" className="se-btn" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "11px 20px", background: "var(--se-blue-soft)", color: "var(--se-blue)", fontWeight: 700, fontSize: 15, borderRadius: "var(--radius-md)", border: "1.5px solid var(--se-blue)", textDecoration: "none" }}>
                View All Packages <ArrowRight size={15} />
              </Link>
            </AnimateIn>

            <AnimateIn from="right" delay={100}>
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
                        {pkg.featured && <div style={{ fontFamily: "var(--font-sans)", fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--accent)", marginBottom: 6 }}>Recommended</div>}
                        <div style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 14, color: pkg.featured ? "#fff" : "var(--text-strong)", lineHeight: 1.2, marginBottom: 8 }}>{pkg.name}</div>
                        <div style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: pkg.featured ? "rgba(255,255,255,0.55)" : "var(--text-muted)" }}>Annual service plan</div>
                      </div>
                    </div>
                  </AnimateIn>
                ))}
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ── PARTNERS ── */}
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
              <Eyebrow light>Technology Partners</Eyebrow>
              <h2 style={{ fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: "clamp(24px,3vw,34px)", color: "#fff", margin: "14px 0 10px", letterSpacing: "-0.02em" }}>Global Technologies, Local Support</h2>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, color: "rgba(255,255,255,0.6)", maxWidth: "52ch", margin: "0 auto" }}>Professional surveying, mapping, detection, scanning, and drone technologies, supported locally across Saudi Arabia.</p>
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

      {/* ── CLIENT LOGOS (animated marquee) ── */}
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
            Trusted by Engineering and Contracting Teams
          </p>
        </AnimateIn>
        {/* Row 1: forward */}
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
        {/* Row 2: reverse */}
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

      {/* ── STORY PREVIEW ── */}
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
              label="Our Story"
              title="From Field Experience to 360 Degree Support"
              subtitle="Surveying Experts started from the field and built a company focused on equipment access, technical support, and long-term client value."
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
                {timeline.map((t, i) => (
                  <div
                    key={t.year}
                    style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", padding: "0 5px", position: "relative" }}
                  >
                    <div
                      className="se-glow-teal"
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: "50%",
                        background: "var(--se-blue)",
                        border: "3px solid var(--accent)",
                        color: "#fff",
                        display: "grid",
                        placeItems: "center",
                        position: "relative",
                        zIndex: 1,
                        marginBottom: 10,
                        flexShrink: 0,
                        transition: "transform 0.2s, box-shadow 0.2s",
                      }}
                    >
                      <MapPin size={14} />
                    </div>
                    <div style={{ fontFamily: "var(--font-sans)", fontWeight: 800, fontSize: 18, color: "var(--accent)", marginBottom: 6, letterSpacing: "-0.02em", lineHeight: 1 }}>{t.year}</div>
                    <div
                      style={{
                        background: "var(--se-white)",
                        border: "1px solid var(--border-subtle)",
                        borderRadius: "var(--radius-md)",
                        padding: "10px 8px",
                        boxShadow: "var(--shadow-xs)",
                        textAlign: "center",
                        width: "100%",
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
              <Link href="/story" className="se-btn" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "11px 20px", background: "var(--se-blue-soft)", color: "var(--se-blue)", fontWeight: 700, fontSize: 15, borderRadius: "var(--radius-md)", border: "1.5px solid var(--se-blue)", textDecoration: "none" }}>
                Read Our Story <ArrowRight size={15} />
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── REFERRAL PROGRAM DISCLAIMER STRIP ── */}
      <section style={{ background: "var(--se-blue-dark)", borderTop: "1px solid rgba(34,167,168,0.2)", padding: "64px 0" }}>
        <div aria-hidden style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 1px 1px, rgba(34,167,168,0.06) 1px, transparent 0)", backgroundSize: "22px 22px", pointerEvents: "none" }} />
        <div className="se-container">
          <AnimateIn>
            <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 32, alignItems: "center" }} className="kit-2col">
              <div>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "rgba(246,186,59,0.15)", border: "1px solid rgba(246,186,59,0.4)", color: "#f6ba3b", fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", padding: "0.3em 0.85em", borderRadius: "var(--radius-pill)", marginBottom: 14 }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: "currentColor", display: "inline-block" }} />
                  Coming Soon
                </span>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(20px,2.5vw,28px)", color: "#fff", margin: "0 0 10px", letterSpacing: "-0.02em" }}>
                  Referral Program — Earn Rewards for Every Client You Bring
                </h3>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: 15, color: "rgba(255,255,255,0.6)", margin: 0, lineHeight: 1.7, maxWidth: "56ch" }}>
                  We're launching a referral program for professionals in the surveying and engineering sectors. Register your interest now and be first to join. Subject to final program terms upon launch.
                </p>
              </div>
              <div style={{ flexShrink: 0 }}>
                <Link href="/referral-program" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 26px", background: "var(--se-teal)", color: "#fff", fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 15, borderRadius: "var(--radius-md)", textDecoration: "none", whiteSpace: "nowrap", boxShadow: "0 4px 20px rgba(34,167,168,0.3)" }}>
                  Join Waiting List <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
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
        {/* Animated gradient orb */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 600,
            height: 400,
            borderRadius: "50%",
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
                Ready to Equip Your Field Team?
              </h2>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-md)", color: "rgba(255,255,255,0.65)", marginBottom: "2.25rem", lineHeight: 1.65 }}>
                Browse our official online catalog or talk to our team for a tailored recommendation based on your project requirements.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center" }}>
                <a
                  href="https://surveyingexperts-sa.com/collections/all"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="se-btn se-btn-yellow"
                  style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 28px", background: "var(--accent)", color: "var(--se-blue-dark)", fontWeight: 700, fontSize: 16, borderRadius: "var(--radius-md)", textDecoration: "none" }}
                >
                  Visit Online Store <ExternalLink size={16} />
                </a>
                <Link
                  href="/contact"
                  className="se-btn se-btn-outline"
                  style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 28px", background: "transparent", color: "#fff", fontWeight: 700, fontSize: 16, borderRadius: "var(--radius-md)", border: "1.5px solid rgba(255,255,255,0.4)", textDecoration: "none" }}
                >
                  Request Consultation
                </Link>
                <Link
                  href="/referral-program"
                  style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 28px", background: "rgba(34,167,168,0.15)", color: "var(--se-teal)", fontWeight: 700, fontSize: 16, borderRadius: "var(--radius-md)", border: "1.5px solid rgba(34,167,168,0.4)", textDecoration: "none" }}
                >
                  Earn Rewards — Refer a Client
                </Link>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      <ReferralPopup />
    </>
  );
}
