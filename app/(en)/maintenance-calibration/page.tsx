import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, CheckCircle2, ExternalLink,
  Radio, Compass, Layers, Package,
  ClipboardCheck, Search, Wrench, FlaskConical, Truck, Award,
  Box, Shield, Cpu, RotateCcw,
} from "lucide-react";
import { MaintenanceFAQ } from "@/components/sections/MaintenanceFAQ";

export const metadata: Metadata = {
  title: "Maintenance & Calibration | Surveying Experts Saudi Arabia",
  description:
    "Professional maintenance, calibration, and servicing for Total Stations, GNSS/RTK, and Auto Level devices. Plans from 12,750 SAR with same-day turnaround.",
};

function Eyebrow({ children, light, teal }: { children: React.ReactNode; light?: boolean; teal?: boolean }) {
  return (
    <span style={{ display: "inline-block", fontFamily: "var(--font-sans)", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.18em", color: teal ? "var(--se-teal)" : light ? "var(--accent)" : "var(--se-blue)", background: teal ? "rgba(34,167,168,0.15)" : light ? "rgba(246,186,59,0.12)" : "var(--se-yellow-soft)", padding: "0.35em 0.85em", borderRadius: "var(--radius-pill)", marginBottom: "1.25rem" }}>
      {children}
    </span>
  );
}

function SecHead({ label, title, subtitle, light, centered, teal }: { label?: string; title: string; subtitle?: string; light?: boolean; centered?: boolean; teal?: boolean }) {
  return (
    <div style={{ marginBottom: "2.5rem", textAlign: centered ? "center" : "left" }}>
      {label && <Eyebrow light={light} teal={teal}>{label}</Eyebrow>}
      <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.625rem, 3vw, 2.25rem)", color: light ? "#fff" : "var(--text-strong)", lineHeight: 1.1, letterSpacing: "-0.02em", margin: label ? "0.5rem 0 0.875rem" : "0 0 0.875rem" }}>{title}</h2>
      {subtitle && <p style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-md)", color: light ? "rgba(255,255,255,0.65)" : "var(--text-muted)", lineHeight: 1.65, maxWidth: centered ? "58ch" : undefined, margin: centered ? "0 auto" : 0 }}>{subtitle}</p>}
    </div>
  );
}

const equipment = [
  { icon: <Radio size={20} />, name: "GNSS & RTK Systems", desc: "Real-time kinematic and GNSS receivers for precision positioning. We service, calibrate, and update all major brands." },
  { icon: <Compass size={20} />, name: "Total Station", desc: "Electronic total stations for angle and distance measurement. Full calibration, axis alignment, and software update." },
  { icon: <Layers size={20} />, name: "Auto Level", desc: "Optical and digital auto levels for elevation. Line-of-sight adjustment, accuracy check, and cleaning." },
  { icon: <Package size={20} />, name: "Selected Equipment", desc: "Other surveying devices on request. Contact our team to confirm compatibility and service scope." },
];

const packages = [
  {
    name: "Basic Plan",
    price: "12,750",
    original: "15,000",
    devices: "Less than 25 devices",
    turnaround: "Within 48 hours",
    certificate: true,
    dashboard: true,
    featured: false,
    maintenanceDiscount: null,
    partsDiscount: null,
    discount: "15% Discount",
    features: ["Full device calibration", "Next calibration reminder", "Internal & external cleaning", "Latest software update"],
  },
  {
    name: "Premium Plan",
    price: "25,500",
    original: "30,000",
    devices: "Up to 50 devices",
    turnaround: "Next day",
    certificate: true,
    dashboard: true,
    featured: false,
    maintenanceDiscount: "20%",
    partsDiscount: "20%",
    discount: "15% Discount",
    features: ["Full device calibration", "Next calibration reminder", "Internal & external cleaning", "Latest software update"],
  },
  {
    name: "Gold Plan",
    price: "34,000",
    original: "40,000",
    devices: "Up to 100 devices",
    turnaround: "Same day",
    certificate: true,
    dashboard: true,
    featured: true,
    maintenanceDiscount: "30%",
    partsDiscount: "30%",
    discount: "15% Discount",
    features: ["Full device calibration", "Next calibration reminder", "Internal & external cleaning", "Latest software update"],
  },
  {
    name: "Platinum Plan",
    price: "42,500",
    original: "50,000",
    devices: "Unlimited devices",
    turnaround: "Immediate / priority handling",
    certificate: true,
    dashboard: true,
    featured: false,
    maintenanceDiscount: "40%",
    partsDiscount: "40%",
    discount: "15% Discount",
    features: ["Full device calibration", "Next calibration reminder", "Internal & external cleaning", "Latest software update"],
  },
];

const calibrationServices = [
  {
    name: "Level Devices Calibration",
    price: "200",
    original: "250",
    discount: "20% Discount",
    includes: ["Accuracy check", "Line-of-sight adjustment", "Circular bubble calibration", "Stadia accuracy test", "Internal & external cleaning"],
  },
  {
    name: "Total Station Calibration",
    price: "400",
    original: "450",
    discount: "11% Discount",
    includes: ["Horizontal & vertical axis check", "Collimation error correction", "ATR calibration (if applicable)", "Prism constant verification", "Software and firmware update"],
  },
  {
    name: "GPS/GNSS Service",
    price: "800",
    original: "900",
    discount: "11% Discount",
    includes: ["Firmware update", "Network connectivity check", "Calibration certificate", "Antenna inspection", "Battery and port inspection"],
  },
];

const maintSteps = [
  { n: "01", icon: <Truck size={20} />, title: "Device Receiving", text: "Bring or ship your device to our service center. We confirm receipt and inspect the packaging." },
  { n: "02", icon: <Search size={20} />, title: "Inspection", text: "We examine the device externally for damage, wear, or missing accessories and document initial condition." },
  { n: "03", icon: <ClipboardCheck size={20} />, title: "Diagnosis", text: "Technical assessment of the device performance, axis readings, and software version." },
  { n: "04", icon: <Wrench size={20} />, title: "Service & Repair", text: "Calibration, adjustments, cleaning, firmware updates, and any required part replacements." },
  { n: "05", icon: <FlaskConical size={20} />, title: "Testing", text: "Post-service verification against accuracy standards. We confirm the device performs within specification." },
  { n: "06", icon: <Award size={20} />, title: "Delivery", text: "Device returned with a calibration certificate and service summary. Package clients receive a digital copy." },
];

const calSteps = [
  { n: "01", icon: <Truck size={20} />, title: "Device Receiving", text: "Bring your device to our calibration center. A service ticket is created and your device is logged in." },
  { n: "02", icon: <Compass size={20} />, title: "Calibration", text: "We perform the full calibration procedure for your device type: level, total station, or GNSS/RTK." },
  { n: "03", icon: <FlaskConical size={20} />, title: "Verification", text: "Calibration results are verified against reference standards and documented." },
  { n: "04", icon: <Award size={20} />, title: "Certificate Issuance", text: "A calibration certificate is issued. Platinum clients receive a website-verifiable version." },
  { n: "05", icon: <RotateCcw size={20} />, title: "Follow-Up", text: "We schedule your next calibration reminder so your devices remain ready for field use." },
];

export default function MaintenancePage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: "var(--se-blue-dark)", padding: "80px 0 64px", position: "relative", overflow: "hidden" }}>
        <div aria-hidden style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 1px 1px, rgba(34,167,168,0.07) 1px, transparent 0)", backgroundSize: "22px 22px" }} />
        <div aria-hidden style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "var(--accent)" }} />
        <div className="se-container" style={{ position: "relative" }}>
          <Eyebrow light>Maintenance & Calibration</Eyebrow>
          <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "#fff", fontSize: "clamp(30px,4vw,52px)", lineHeight: 1.06, letterSpacing: "-0.02em", margin: "18px 0 16px", maxWidth: 620 }}>
            Keep Your Devices Accurate and Field-Ready
          </h1>
          <p style={{ fontFamily: "var(--font-sans)", color: "rgba(255,255,255,0.7)", fontSize: 18, lineHeight: 1.65, maxWidth: 520, margin: "0 0 32px" }}>
            Professional maintenance, calibration, and servicing for Total Stations, GNSS/RTK, and Auto Level devices. Packages for field teams, calibration for individual devices.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            <Link href="#packages"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 22px", background: "var(--accent)", color: "var(--se-blue-dark)", fontWeight: 700, fontSize: 15, borderRadius: "var(--radius-md)", textDecoration: "none" }}>
              View Packages <ArrowRight size={15} />
            </Link>
            <Link href="/contact"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 22px", background: "transparent", color: "#fff", fontWeight: 700, fontSize: 15, borderRadius: "var(--radius-md)", border: "1.5px solid rgba(255,255,255,0.4)", textDecoration: "none" }}>
              Talk to a Specialist
            </Link>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section style={{ background: "var(--se-white)", position: "relative", overflow: "hidden", padding: "96px 0", backgroundImage: "linear-gradient(var(--se-gray-100) 1px,transparent 1px),linear-gradient(90deg,var(--se-gray-100) 1px,transparent 1px)", backgroundSize: "44px 44px" }}>
        <div className="se-container">
          <SecHead label="Why It Matters" title="Equipment We Service" subtitle="Regular calibration and maintenance keeps your devices accurate and extends their service life." centered />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20 }}>
            {equipment.map((eq) => (
              <div key={eq.name} style={{ background: "var(--se-white)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-lg)", padding: "24px 20px", boxShadow: "var(--shadow-xs)" }}>
                <div style={{ width: 44, height: 44, borderRadius: "var(--radius-md)", background: "var(--se-teal-soft)", color: "var(--se-teal)", display: "grid", placeItems: "center", marginBottom: 14, flexShrink: 0 }}>
                  {eq.icon}
                </div>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 16, color: "var(--text-strong)", marginBottom: 8 }}>{eq.name}</div>
                <div style={{ fontFamily: "var(--font-sans)", fontSize: 14, lineHeight: 1.6, color: "var(--text-muted)" }}>{eq.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance Packages */}
      <section id="packages" style={{ background: "var(--se-gray-50)", position: "relative", overflow: "hidden", padding: "96px 0", backgroundImage: "radial-gradient(circle at 1px 1px, rgba(53,80,97,0.10) 1px, transparent 0)", backgroundSize: "22px 22px" }}>
        <div className="se-container">
          <SecHead label="Maintenance Packages" title="Annual Maintenance Plans" subtitle="Annual contracts for companies with multiple devices. Priority service, calibration included, discounts on parts and ad-hoc work." centered />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20, alignItems: "start" }}>
            {packages.map((pkg) => (
              <div key={pkg.name} style={{ background: pkg.featured ? "var(--se-blue-dark)" : "var(--se-white)", border: `2px solid ${pkg.featured ? "var(--se-teal)" : "var(--border-subtle)"}`, borderRadius: "var(--radius-xl)", padding: "28px 24px", boxShadow: pkg.featured ? "var(--shadow-lg)" : "var(--shadow-xs)", position: "relative" }}>
                {pkg.featured && (
                  <div style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)", background: "var(--se-teal)", color: "#fff", fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 700, padding: "4px 14px", borderRadius: "var(--radius-pill)", whiteSpace: "nowrap" }}>
                    Recommended
                  </div>
                )}
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18, color: pkg.featured ? "#fff" : "var(--text-strong)", marginBottom: 4 }}>{pkg.name}</div>
                <div style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: pkg.featured ? "rgba(255,255,255,0.6)" : "var(--text-muted)", marginBottom: 20 }}>{pkg.devices}</div>
                <div style={{ marginBottom: 20 }}>
                  <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 32, color: pkg.featured ? "var(--se-teal)" : "var(--se-blue)", letterSpacing: "-0.02em" }}>{pkg.price}</span>
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: pkg.featured ? "rgba(255,255,255,0.5)" : "var(--text-muted)", marginLeft: 4 }}>SAR / year</span>
                  <div style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: pkg.featured ? "rgba(255,255,255,0.35)" : "var(--text-muted)", textDecoration: "line-through", marginTop: 2 }}>
                    {pkg.original} SAR
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 20 }}>
                  <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                    <CheckCircle2 size={15} style={{ color: "var(--se-teal)", flexShrink: 0, marginTop: 1 }} />
                    <span style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: pkg.featured ? "rgba(255,255,255,0.75)" : "var(--text-body)" }}>Turnaround: {pkg.turnaround}</span>
                  </div>
                  {pkg.maintenanceDiscount && (
                    <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                      <CheckCircle2 size={15} style={{ color: "var(--se-teal)", flexShrink: 0, marginTop: 1 }} />
                      <span style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: pkg.featured ? "rgba(255,255,255,0.75)" : "var(--text-body)" }}>Ad-hoc maintenance: {pkg.maintenanceDiscount} off</span>
                    </div>
                  )}
                  {pkg.partsDiscount && (
                    <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                      <CheckCircle2 size={15} style={{ color: "var(--se-teal)", flexShrink: 0, marginTop: 1 }} />
                      <span style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: pkg.featured ? "rgba(255,255,255,0.75)" : "var(--text-body)" }}>Spare parts: {pkg.partsDiscount} off</span>
                    </div>
                  )}
                  {pkg.certificate && (
                    <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                      <CheckCircle2 size={15} style={{ color: "var(--se-teal)", flexShrink: 0, marginTop: 1 }} />
                      <span style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: pkg.featured ? "rgba(255,255,255,0.75)" : "var(--text-body)" }}>Digital Official Certificate</span>
                    </div>
                  )}
                  {pkg.dashboard && (
                    <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                      <CheckCircle2 size={15} style={{ color: "var(--se-teal)", flexShrink: 0, marginTop: 1 }} />
                      <span style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: pkg.featured ? "rgba(255,255,255,0.75)" : "var(--text-body)" }}>Dashboard Option</span>
                    </div>
                  )}
                  {pkg.features.map((f) => (
                    <div key={f} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                      <CheckCircle2 size={15} style={{ color: "var(--se-teal)", flexShrink: 0, marginTop: 1 }} />
                      <span style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: pkg.featured ? "rgba(255,255,255,0.75)" : "var(--text-body)" }}>{f}</span>
                    </div>
                  ))}
                </div>
                <Link href="/contact"
                  style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "11px 18px", background: pkg.featured ? "var(--se-teal)" : "var(--se-blue-soft)", color: pkg.featured ? "#fff" : "var(--se-blue)", fontWeight: 700, fontSize: 14, borderRadius: "var(--radius-md)", textDecoration: "none" }}>
                  Get This Plan <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calibration Services */}
      <section style={{ background: "var(--se-white)", padding: "96px 0" }}>
        <div className="se-container">
          <SecHead label="Individual Calibration" title="Calibration Services" subtitle="Single-device calibration for teams not on a package plan. Each service includes a calibration certificate." centered />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
            {calibrationServices.map((svc) => (
              <div key={svc.name} style={{ background: "var(--se-white)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-xl)", padding: "28px 24px", boxShadow: "var(--shadow-sm)" }}>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18, color: "var(--text-strong)", marginBottom: 8 }}>{svc.name}</div>
                <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 4 }}>
                  <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 28, color: "var(--se-teal)", letterSpacing: "-0.02em" }}>{svc.price}</span>
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--text-muted)" }}>SAR</span>
                </div>
                <div style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: "var(--text-muted)", textDecoration: "line-through", marginBottom: 4 }}>{svc.original} SAR</div>
                <div style={{ display: "inline-block", fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 700, color: "var(--se-teal)", background: "var(--se-teal-soft)", padding: "3px 10px", borderRadius: "var(--radius-pill)", marginBottom: 20 }}>{svc.discount}</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                  {svc.includes.map((item) => (
                    <div key={item} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <CheckCircle2 size={14} style={{ color: "var(--se-teal)", flexShrink: 0 }} />
                      <span style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--text-body)" }}>{item}</span>
                    </div>
                  ))}
                </div>
                <Link href="/contact"
                  style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "10px 18px", background: "var(--se-teal)", color: "#fff", fontWeight: 700, fontSize: 13, borderRadius: "var(--radius-md)", textDecoration: "none", marginTop: 20 }}>
                  Book Calibration <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steppers */}
      <section style={{ background: "var(--se-gray-50)", position: "relative", overflow: "hidden", padding: "96px 0", backgroundImage: "radial-gradient(circle at 1px 1px, rgba(53,80,97,0.10) 1px, transparent 0)", backgroundSize: "22px 22px" }}>
        <div className="se-container">
          <SecHead label="Our Process" title="How It Works" centered />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }} className="kit-2col">
            {/* Maintenance stepper */}
            <div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 20, color: "var(--text-strong)", marginBottom: 28 }}>Maintenance Process</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                {maintSteps.map((step, i) => (
                  <div key={step.title} style={{ display: "flex", gap: 16, position: "relative" }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                      <div style={{ width: 44, height: 44, borderRadius: "50%", background: "var(--se-teal)", color: "#fff", display: "grid", placeItems: "center", flexShrink: 0 }}>
                        {step.icon}
                      </div>
                      {i < maintSteps.length - 1 && (
                        <div style={{ width: 2, background: "rgba(34,167,168,0.2)", flex: 1, minHeight: 24, margin: "4px 0" }} />
                      )}
                    </div>
                    <div style={{ paddingBottom: i < maintSteps.length - 1 ? 24 : 0 }}>
                      <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, fontWeight: 700, color: "var(--se-teal)", letterSpacing: "0.1em", marginBottom: 2 }}>{step.n}</div>
                      <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15, color: "var(--text-strong)", marginBottom: 4 }}>{step.title}</div>
                      <div style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6 }}>{step.text}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Calibration stepper */}
            <div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 20, color: "var(--text-strong)", marginBottom: 28 }}>Calibration Process</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                {calSteps.map((step, i) => (
                  <div key={step.title} style={{ display: "flex", gap: 16, position: "relative" }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                      <div style={{ width: 44, height: 44, borderRadius: "50%", background: "var(--se-blue)", color: "#fff", display: "grid", placeItems: "center", flexShrink: 0 }}>
                        {step.icon}
                      </div>
                      {i < calSteps.length - 1 && (
                        <div style={{ width: 2, background: "rgba(53,79,97,0.2)", flex: 1, minHeight: 24, margin: "4px 0" }} />
                      )}
                    </div>
                    <div style={{ paddingBottom: i < calSteps.length - 1 ? 24 : 0 }}>
                      <div style={{ fontFamily: "var(--font-mono)", fontSize: 10, fontWeight: 700, color: "var(--se-blue)", letterSpacing: "0.1em", marginBottom: 2 }}>{step.n}</div>
                      <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15, color: "var(--text-strong)", marginBottom: 4 }}>{step.title}</div>
                      <div style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--text-muted)", lineHeight: 1.6 }}>{step.text}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accessories / Store CTA */}
      <section style={{ background: "var(--se-blue-darker)", position: "relative", overflow: "hidden", padding: "80px 0" }}>
        <div aria-hidden style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 1px 1px, rgba(34,167,168,0.08) 1px, transparent 0)", backgroundSize: "22px 22px" }} />
        <div className="se-container" style={{ position: "relative", textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 12, background: "rgba(34,167,168,0.12)", border: "1px solid rgba(34,167,168,0.2)", borderRadius: "var(--radius-xl)", padding: "12px 20px", marginBottom: 24 }}>
            <Box size={22} style={{ color: "var(--se-teal)" }} />
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 16, color: "#fff" }}>Field Accessories & Spare Parts</span>
          </div>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.5rem,3vw,2rem)", color: "#fff", marginBottom: "0.875rem" }}>Need Accessories for Your Equipment?</h2>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-md)", color: "rgba(255,255,255,0.6)", marginBottom: "2rem", maxWidth: "52ch", margin: "0 auto 2rem" }}>
            Browse our online store for surveying accessories, spare parts, batteries, cases, and more.
          </p>
          <a href="https://surveyingexperts-sa.com/collections/all" target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 26px", background: "var(--accent)", color: "var(--se-blue-dark)", fontWeight: 700, fontSize: 16, borderRadius: "var(--radius-md)", textDecoration: "none" }}>
            Browse Online Store <ExternalLink size={15} />
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: "var(--se-white)", padding: "96px 0" }}>
        <div className="se-container">
          <SecHead label="FAQ" title="Common Questions" centered />
          <MaintenanceFAQ />
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--se-blue-dark)", position: "relative", overflow: "hidden", padding: "80px 0" }}>
        <div aria-hidden style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 1px 1px, rgba(34,167,168,0.07) 1px, transparent 0)", backgroundSize: "22px 22px" }} />
        <div className="se-container" style={{ position: "relative", textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.5rem,3vw,2rem)", color: "#fff", marginBottom: "0.875rem" }}>Ready to Service Your Equipment?</h2>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-md)", color: "rgba(255,255,255,0.65)", marginBottom: "2rem" }}>Talk to our team to choose a package or book an individual calibration.</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center" }}>
            <Link href="/contact"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 26px", background: "var(--accent)", color: "var(--se-blue-dark)", fontWeight: 700, fontSize: 16, borderRadius: "var(--radius-md)", textDecoration: "none" }}>
              Get a Plan <ArrowRight size={16} />
            </Link>
            <Link href="/contact"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 26px", background: "transparent", color: "#fff", fontWeight: 700, fontSize: 16, borderRadius: "var(--radius-md)", border: "1.5px solid rgba(255,255,255,0.4)", textDecoration: "none" }}>
              Book Calibration
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
