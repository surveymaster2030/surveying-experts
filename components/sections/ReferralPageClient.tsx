"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight, CheckCircle2, ChevronDown, ChevronUp,
  UserPlus, Send, BadgeCheck, Gift,
  Store, Banknote, Users, Building2,
  Tag, X, ShieldAlert,
} from "lucide-react";

// ─── Design helpers ────────────────────────────────────────────────────────────

function Eyebrow({ children, light, teal }: { children: React.ReactNode; light?: boolean; teal?: boolean }) {
  return (
    <span style={{
      display: "inline-block", fontFamily: "var(--font-sans)", fontSize: 12, fontWeight: 700,
      textTransform: "uppercase", letterSpacing: "0.18em",
      color: teal ? "var(--se-teal)" : light ? "var(--accent)" : "var(--se-blue)",
      background: teal ? "rgba(34,167,168,0.15)" : light ? "rgba(246,186,59,0.12)" : "var(--se-yellow-soft)",
      padding: "0.35em 0.85em", borderRadius: "var(--radius-pill)", marginBottom: "1.25rem",
    }}>
      {children}
    </span>
  );
}

function SecHead({ label, title, subtitle, light, centered, teal }: {
  label?: string; title: string; subtitle?: string; light?: boolean; centered?: boolean; teal?: boolean;
}) {
  return (
    <div style={{ marginBottom: "2.5rem", textAlign: centered ? "center" : "left" }}>
      {label && <Eyebrow light={light} teal={teal}>{label}</Eyebrow>}
      <h2 style={{
        fontFamily: "var(--font-display)", fontWeight: 700,
        fontSize: "clamp(1.625rem, 3vw, 2.25rem)",
        color: light ? "#fff" : "var(--text-strong)",
        lineHeight: 1.1, letterSpacing: "-0.02em",
        margin: label ? "0.5rem 0 0.875rem" : "0 0 0.875rem",
      }}>{title}</h2>
      {subtitle && (
        <p style={{
          fontFamily: "var(--font-sans)", fontSize: "var(--text-md)",
          color: light ? "rgba(255,255,255,0.65)" : "var(--text-muted)",
          lineHeight: 1.65, maxWidth: centered ? "58ch" : undefined,
          margin: centered ? "0 auto" : 0,
        }}>{subtitle}</p>
      )}
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%", border: "1.5px solid var(--border-default)",
  borderRadius: "var(--radius-md)", padding: "11px 14px",
  fontFamily: "var(--font-sans)", fontSize: 15,
  color: "var(--text-strong)", background: "var(--se-white)",
  outline: "none", boxSizing: "border-box", transition: "border-color 0.15s",
};

// ─── Data ──────────────────────────────────────────────────────────────────────

const steps = [
  {
    icon: <UserPlus size={22} />, num: "01", title: "Join & Register",
    desc: "Join the waitlist today. Upon launch, you will receive an official invitation to activate your account as a certified recommendation partner.",
  },
  {
    icon: <Send size={22} />, num: "02", title: "Recommend Clients",
    desc: "Direct engineering firms, contractors, or professionals who need GNSS, Total Stations, 3D Laser Scanners, or professional calibration services to us.",
  },
  {
    icon: <BadgeCheck size={22} />, num: "03", title: "Review & Approval",
    desc: "Our sales team will review the recommendation. Once it converts into a confirmed and completed purchase, your recommendation is approved in the system.",
  },
  {
    icon: <Gift size={22} />, num: "04", title: "Receive Rewards",
    desc: "Points are automatically added to your balance. You can redeem them as store credit or request a cash payout.",
  },
];

const equipmentTags = [
  "Total Stations",
  "GNSS & RTK Systems",
  "3D Laser Scanners",
  "Drone Mapping Solutions",
  "GPR (Underground Detection)",
  "Marine Surveying Equipment",
  "Corporate Maintenance & Calibration Packages",
];

const conditions = [
  {
    q: "Official Portal Registration Only",
    a: "Only recommendations submitted through the official program portal will be accepted. Verbal or unofficial recommendations cannot be tracked or rewarded.",
  },
  {
    q: "New Clients Only",
    a: "The recommended entity must be a new client to Surveying Experts with no prior purchasing history.",
  },
  {
    q: "Purchase Completion Required",
    a: "Points are calculated and awarded only after the payment is completed and the client receives their equipment.",
  },
  {
    q: "Independent Recommendations",
    a: "Recommending yourself or the direct commercial entity you work for is not permitted.",
  },
  {
    q: "Point Expiry After 12 Months",
    a: "Accumulated points expire after 12 consecutive months of account inactivity. A new successful recommendation resets the inactivity timer.",
  },
  {
    q: "Standalone Offers — No Stacking",
    a: "Recommendation rewards cannot be combined with other promotional offers or discounts.",
  },
];

// ─── Main component ────────────────────────────────────────────────────────────

export function ReferralPageClient() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);
  const [focused, setFocused] = useState<string | null>(null);
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({
    name: "", company: "", phone: "", email: "",
    referType: "", rewardPref: "", notes: "",
  });
  const [consent, setConsent] = useState(false);
  const [policyOpen, setPolicyOpen] = useState(false);
  const [policyAgreed, setPolicyAgreed] = useState(false);

  useEffect(() => {
    // TODO: replace with real analytics (e.g., window.gtag('event', 'referral_waitlist_view'))
    console.debug("[analytics] referral_waitlist_view");
  }, []);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => { const n = { ...prev }; delete n[name]; return n; });
  }

  function validate() {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Full name is required.";
    if (!form.company.trim()) errs.company = "Company / entity name is required.";
    if (!form.phone.trim()) errs.phone = "Mobile number is required.";
    if (!form.email.trim()) {
      errs.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = "Please enter a valid email address.";
    }
    if (!consent) errs.consent = "Please accept the terms to continue.";
    return errs;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setPolicyAgreed(false);
    setPolicyOpen(true);
  }

  function handlePolicyConfirm() {
    if (!policyAgreed) return;
    setPolicyOpen(false);
    // TODO: replace with real backend — Resend/EmailJS or Next.js API route
    // Example: await fetch('/api/referral-waitlist', { method: 'POST', body: JSON.stringify(form) })
    console.debug("[analytics] referral_waitlist_submit", form);
    setSent(true);
    console.debug("[analytics] referral_waitlist_success");
  }

  const focusStyle = (field: string): React.CSSProperties => ({
    ...inputStyle,
    borderColor: errors[field] ? "var(--se-red, #e63535)" : focused === field ? "var(--se-teal)" : "var(--border-default)",
    boxShadow: errors[field] ? "0 0 0 3px rgba(230,53,53,0.10)" : focused === field ? "0 0 0 3px rgba(34,167,168,0.12)" : "none",
  });

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────────────── */}
      <section style={{ background: "var(--se-blue-dark)", padding: "90px 0 72px", position: "relative", overflow: "hidden" }}>
        <div aria-hidden style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 1px 1px, rgba(34,167,168,0.07) 1px, transparent 0)", backgroundSize: "22px 22px" }} />
        <div aria-hidden style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg, var(--se-teal) 0%, var(--accent) 100%)" }} />
        <div className="se-container" style={{ position: "relative", textAlign: "center" }}>
          <span style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(246,186,59,0.15)", border: "1px solid rgba(246,186,59,0.35)",
            color: "var(--se-yellow)", fontFamily: "var(--font-sans)",
            fontSize: 12, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase",
            padding: "0.4em 1em", borderRadius: "var(--radius-pill)", marginBottom: "1.5rem",
          }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--se-yellow)", display: "inline-block" }} />
            Referral Experts | Coming Soon
          </span>
          <h1 style={{
            fontFamily: "var(--font-display)", fontWeight: 700, color: "#fff",
            fontSize: "clamp(32px, 5vw, 58px)", lineHeight: 1.05,
            letterSpacing: "-0.02em", margin: "0 0 20px", maxWidth: 760, marginInline: "auto",
          }}>
            Turn Your Professional Network Into Rewards.
          </h1>
          <p style={{
            fontFamily: "var(--font-sans)", color: "rgba(255,255,255,0.75)", fontSize: 18,
            lineHeight: 1.7, maxWidth: 600, marginInline: "auto", marginBottom: 36,
          }}>
            Earn valuable rewards when you recommend new clients for professional surveying technologies and services in Saudi Arabia. Register your interest now to be among our first certified partners upon launch.
          </p>
          <a href="#waitlist" style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            padding: "14px 32px", background: "var(--se-teal)", color: "#fff",
            fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 16,
            borderRadius: "var(--radius-md)", textDecoration: "none",
            boxShadow: "0 4px 24px rgba(34,167,168,0.35)",
          }}>
            Join the Waitlist <ArrowRight size={18} />
          </a>
          <div style={{ marginTop: 52, display: "flex", justifyContent: "center", gap: "clamp(24px, 5vw, 56px)", flexWrap: "wrap" }}>
            {[
              { val: "Q4 2025", label: "Planned Launch" },
              { val: "4 Steps", label: "Clear & Professional Process" },
              { val: "2 Options", label: "Flexible Reward Structures" },
            ].map((s) => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(20px,3vw,28px)", color: "var(--se-teal)", letterSpacing: "-0.01em" }}>{s.val}</div>
                <div style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "rgba(255,255,255,0.5)", marginTop: 4, letterSpacing: "0.04em" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ──────────────────────────────────────────────────────── */}
      <section style={{ background: "var(--se-white)", padding: "88px 0 72px" }}>
        <div className="se-container">
          <SecHead label="How It Works" title="Four Simple Steps to a Successful Partnership" subtitle="Once the official program launches, the recommendation process will be fully structured and transparent." centered />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20, marginTop: 12 }}>
            {steps.map((step, i) => (
              <div key={i} style={{
                background: "var(--se-gray-50)", borderRadius: "var(--radius-xl)",
                padding: "28px 24px", border: "1px solid var(--border-subtle)",
                position: "relative", overflow: "hidden",
              }}>
                <div aria-hidden style={{
                  position: "absolute", top: 16, right: 20,
                  fontFamily: "var(--font-display)", fontSize: 56, fontWeight: 800,
                  color: "var(--se-teal)", opacity: 0.07, lineHeight: 1, userSelect: "none",
                }}>{step.num}</div>
                <div style={{
                  width: 48, height: 48, borderRadius: "var(--radius-md)",
                  background: "var(--se-teal-soft)", color: "var(--se-teal)",
                  display: "grid", placeItems: "center", marginBottom: 16,
                }}>{step.icon}</div>
                <div style={{
                  fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 700,
                  letterSpacing: "0.14em", textTransform: "uppercase",
                  color: "var(--se-teal)", marginBottom: 6,
                }}>Step {step.num}</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 18, color: "var(--text-strong)", margin: "0 0 10px" }}>{step.title}</h3>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--text-muted)", lineHeight: 1.65, margin: 0 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reward Options ────────────────────────────────────────────────────── */}
      <section style={{ background: "var(--se-gray-50)", padding: "80px 0 72px", borderTop: "1px solid var(--border-subtle)", borderBottom: "1px solid var(--border-subtle)" }}>
        <div className="se-container">
          <SecHead label="Rewards" title="Two Ways to Invest Your Points" subtitle="Choose the reward method that best suits your professional needs. Both options will be available upon launch." centered />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, maxWidth: 760, marginInline: "auto" }}>
            <div style={{ background: "var(--se-white)", borderRadius: "var(--radius-xl)", padding: "36px 28px", border: "2px solid var(--se-teal)", boxShadow: "var(--shadow-md)" }}>
              <div style={{ width: 56, height: 56, borderRadius: "var(--radius-md)", background: "var(--se-teal-soft)", color: "var(--se-teal)", display: "grid", placeItems: "center", marginBottom: 20 }}><Store size={26} /></div>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 20, color: "var(--text-strong)", margin: "0 0 8px" }}>Online Store Credit</h3>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px,4vw,38px)", fontWeight: 800, color: "var(--se-teal)", letterSpacing: "-0.02em", margin: "12px 0" }}>1 Point = 1 SAR</div>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--text-muted)", lineHeight: 1.65, margin: 0 }}>
                Collect points and use them at full value (with no minimum limit) to order equipment or accessories directly from our official online store.
              </p>
            </div>
            <div style={{ background: "var(--se-white)", borderRadius: "var(--radius-xl)", padding: "36px 28px", border: "2px solid var(--border-subtle)", boxShadow: "var(--shadow-md)" }}>
              <div style={{ width: 56, height: 56, borderRadius: "var(--radius-md)", background: "var(--se-yellow-soft)", color: "var(--se-blue-dark)", display: "grid", placeItems: "center", marginBottom: 20 }}><Banknote size={26} /></div>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 20, color: "var(--text-strong)", margin: "0 0 8px" }}>Cash Rewards</h3>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px,4vw,38px)", fontWeight: 800, color: "var(--se-blue-dark)", letterSpacing: "-0.02em", margin: "12px 0" }}>2 Points = 1 SAR</div>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--text-muted)", lineHeight: 1.65, margin: 0 }}>
                Prefer cash? Convert your points into cash payouts as soon as you reach the minimum withdrawal threshold.
              </p>
            </div>
          </div>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--text-muted)", textAlign: "center", marginTop: 24, maxWidth: 620, marginInline: "auto", fontStyle: "italic", lineHeight: 1.6 }}>
            Note: Point calculation formulas, exact values, and payout schedules are subject to the official terms and conditions upon launch.
          </p>
        </div>
      </section>

      {/* ── Who Can Join ─────────────────────────────────────────────────────── */}
      <section style={{ background: "var(--se-white)", padding: "80px 0 64px" }}>
        <div className="se-container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(32px, 5vw, 72px)", alignItems: "center" }} className="kit-2col">
            <div>
              <SecHead label="Eligibility" title="Designed for Field Professionals" />
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, color: "var(--text-body)", lineHeight: 1.75, marginBottom: 20 }}>
                The recommendation program is dedicated to individuals and commercial entities based in Saudi Arabia with a professional connection to the surveying, construction, engineering consulting, and infrastructure sectors.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 20 }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                  <span style={{ color: "var(--se-teal)", marginTop: 2, flexShrink: 0 }}><Users size={18} /></span>
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: 15, color: "var(--text-body)", lineHeight: 1.6 }}><strong>Professionals</strong> — Engineers, Surveyors, Project Managers.</span>
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                  <span style={{ color: "var(--se-teal)", marginTop: 2, flexShrink: 0 }}><Building2 size={18} /></span>
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: 15, color: "var(--text-body)", lineHeight: 1.6 }}><strong>Commercial Entities</strong> — Contracting Companies, Engineering Offices.</span>
                </div>
              </div>
              <p style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--text-muted)", lineHeight: 1.65, fontStyle: "italic", margin: 0 }}>
                All applications are subject to review and approval to ensure the quality of our professional network.
              </p>
            </div>
            <div>
              <div style={{ background: "var(--se-gray-50)", borderRadius: "var(--radius-xl)", padding: "32px 28px", border: "1px solid var(--border-subtle)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                  <Tag size={18} style={{ color: "var(--se-teal)" }} />
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--text-muted)" }}>Eligible Products & Services</span>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                  {equipmentTags.map((tag) => (
                    <span key={tag} style={{ fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 600, color: "var(--se-blue-dark)", background: "var(--se-white)", border: "1.5px solid var(--border-subtle)", borderRadius: "var(--radius-pill)", padding: "6px 14px", lineHeight: 1 }}>{tag}</span>
                  ))}
                </div>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: "var(--text-muted)", marginTop: 16, marginBottom: 0, fontStyle: "italic" }}>
                  The final list of eligible products will be published upon launch.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Conditions Accordion ─────────────────────────────────────────────── */}
      <section style={{ background: "var(--se-gray-50)", padding: "80px 0 72px", borderTop: "1px solid var(--border-subtle)" }}>
        <div className="se-container">
          <SecHead label="Program Terms" title="Clear Professional Standards" subtitle="To ensure transparency, the program will be governed by the following guidelines." centered />
          <div style={{ maxWidth: 760, marginInline: "auto" }}>
            {conditions.map((item, i) => (
              <div key={i} style={{ borderBottom: i < conditions.length - 1 ? "1px solid var(--border-subtle)" : "none" }}>
                <button
                  onClick={() => setOpenAccordion(openAccordion === i ? null : i)}
                  style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, padding: "20px 0", background: "none", border: "none", cursor: "pointer", textAlign: "left" }}
                >
                  <span style={{ fontFamily: "var(--font-sans)", fontSize: 15, fontWeight: 600, color: openAccordion === i ? "var(--se-teal)" : "var(--text-strong)", lineHeight: 1.4, transition: "color 0.15s" }}>{item.q}</span>
                  {openAccordion === i
                    ? <ChevronUp size={18} style={{ flexShrink: 0, color: "var(--se-teal)" }} />
                    : <ChevronDown size={18} style={{ flexShrink: 0, color: "var(--text-muted)" }} />
                  }
                </button>
                {openAccordion === i && (
                  <p style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--text-muted)", lineHeight: 1.7, margin: "0 0 20px", paddingBottom: 4 }}>{item.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Company Disclaimer ────────────────────────────────────────────────── */}
      <section style={{ background: "var(--se-white)", padding: "72px 0 64px" }}>
        <div className="se-container">
          <div style={{ maxWidth: 760, marginInline: "auto", background: "rgba(246,186,59,0.08)", border: "1.5px solid rgba(246,186,59,0.35)", borderRadius: "var(--radius-xl)", padding: "32px 36px", borderLeft: "4px solid var(--se-yellow)" }}>
            <div style={{ fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.16em", color: "var(--se-blue-dark)", marginBottom: 12, opacity: 0.7 }}>Legal Disclaimer</div>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--text-body)", lineHeight: 1.8, margin: 0 }}>
              This page outlines a planned recommendation program that has not yet officially launched. All details, including reward structures and eligibility criteria, are subject to change. Registering on the waitlist does not constitute a contractual obligation. Final terms and conditions will be provided upon launch.
            </p>
          </div>
        </div>
      </section>

      {/* ── Waiting List Form ─────────────────────────────────────────────────── */}
      <section id="waitlist" style={{ background: "var(--se-gray-50)", padding: "88px 0 80px", borderTop: "1px solid var(--border-subtle)" }}>
        <div className="se-container">
          <SecHead label="The Waitlist" title="Register Your Interest Today" subtitle="Be among the first to join our partner network. We will contact you with full details and an activation link as soon as the program goes live." centered />
          <div style={{ maxWidth: 680, marginInline: "auto" }}>
            {sent ? (
              <div style={{ textAlign: "center", padding: "56px 32px", background: "var(--se-teal-soft)", border: "1.5px solid var(--se-teal)", borderRadius: "var(--radius-xl)" }}>
                <CheckCircle2 size={52} style={{ color: "var(--se-teal)", margin: "0 auto 20px", display: "block" }} />
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 24, color: "var(--text-strong)", margin: "0 0 12px" }}>You're on the List!</h3>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: 16, color: "var(--text-muted)", margin: "0 0 28px", lineHeight: 1.65 }}>
                  We'll be in touch as soon as Referral Experts launches with your activation details.
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ name: "", company: "", phone: "", email: "", referType: "", rewardPref: "", notes: "" }); setConsent(false); }}
                  style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 22px", background: "var(--se-teal)", color: "#fff", fontWeight: 700, fontSize: 14, borderRadius: "var(--radius-md)", border: "none", cursor: "pointer", fontFamily: "var(--font-sans)" }}>
                  Submit Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate style={{ background: "var(--se-white)", borderRadius: "var(--radius-xl)", padding: "clamp(24px, 4vw, 40px)", border: "1px solid var(--border-subtle)", boxShadow: "var(--shadow-md)", display: "flex", flexDirection: "column", gap: 20 }}>
                {/* Name + Company */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="kit-2col">
                  <div>
                    <label style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 700, color: "var(--text-strong)", marginBottom: 6 }}>Full Name <span style={{ color: "var(--se-teal)" }}>*</span></label>
                    <input required name="name" value={form.name} onChange={handleChange} onFocus={() => setFocused("name")} onBlur={() => setFocused(null)} placeholder="Your full name" style={focusStyle("name")} />
                    {errors.name && <p style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: "var(--se-red, #e63535)", margin: "4px 0 0" }}>{errors.name}</p>}
                  </div>
                  <div>
                    <label style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 700, color: "var(--text-strong)", marginBottom: 6 }}>Company / Entity Name <span style={{ color: "var(--se-teal)" }}>*</span></label>
                    <input required name="company" value={form.company} onChange={handleChange} onFocus={() => setFocused("company")} onBlur={() => setFocused(null)} placeholder="Your company or organization" style={focusStyle("company")} />
                    {errors.company && <p style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: "var(--se-red, #e63535)", margin: "4px 0 0" }}>{errors.company}</p>}
                  </div>
                </div>
                {/* Phone + Email */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="kit-2col">
                  <div>
                    <label style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 700, color: "var(--text-strong)", marginBottom: 6 }}>Mobile Number <span style={{ color: "var(--se-teal)" }}>*</span></label>
                    <input required type="tel" name="phone" value={form.phone} onChange={handleChange} onFocus={() => setFocused("phone")} onBlur={() => setFocused(null)} placeholder="+966 5X XXX XXXX" style={focusStyle("phone")} />
                    {errors.phone && <p style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: "var(--se-red, #e63535)", margin: "4px 0 0" }}>{errors.phone}</p>}
                  </div>
                  <div>
                    <label style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 700, color: "var(--text-strong)", marginBottom: 6 }}>Email Address <span style={{ color: "var(--se-teal)" }}>*</span> <span style={{ fontWeight: 400, color: "var(--text-muted)" }}>(Professional preferred)</span></label>
                    <input required type="email" name="email" value={form.email} onChange={handleChange} onFocus={() => setFocused("email")} onBlur={() => setFocused(null)} placeholder="you@company.com" style={focusStyle("email")} />
                    {errors.email && <p style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: "var(--se-red, #e63535)", margin: "4px 0 0" }}>{errors.email}</p>}
                  </div>
                </div>
                {/* Refer Type */}
                <div>
                  <label style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 700, color: "var(--text-strong)", marginBottom: 10 }}>Who do you plan to recommend most often?</label>
                  <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                    {[{ val: "individuals", label: "Individuals" }, { val: "companies", label: "Companies" }, { val: "both", label: "Both" }].map((opt) => (
                      <label key={opt.val} style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer", fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--text-body)" }}>
                        <input type="radio" name="referType" value={opt.val} checked={form.referType === opt.val} onChange={handleChange} style={{ accentColor: "var(--se-teal)", width: 16, height: 16 }} />
                        {opt.label}
                      </label>
                    ))}
                  </div>
                </div>
                {/* Reward Pref */}
                <div>
                  <label style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 700, color: "var(--text-strong)", marginBottom: 10 }}>Preferred Reward Type</label>
                  <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                    {[{ val: "store-credit", label: "Store Credit" }, { val: "cash", label: "Cash Reward" }, { val: "undecided", label: "Undecided" }].map((opt) => (
                      <label key={opt.val} style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer", fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--text-body)" }}>
                        <input type="radio" name="rewardPref" value={opt.val} checked={form.rewardPref === opt.val} onChange={handleChange} style={{ accentColor: "var(--se-teal)", width: 16, height: 16 }} />
                        {opt.label}
                      </label>
                    ))}
                  </div>
                </div>
                {/* Notes */}
                <div>
                  <label style={{ display: "block", fontFamily: "var(--font-sans)", fontSize: 13, fontWeight: 700, color: "var(--text-strong)", marginBottom: 6 }}>
                    Additional Notes <span style={{ fontWeight: 400, color: "var(--text-muted)" }}>(Optional)</span>
                  </label>
                  <textarea name="notes" value={form.notes} onChange={handleChange} onFocus={() => setFocused("notes")} onBlur={() => setFocused(null)} placeholder="Any information about your professional network or line of work…" rows={4} style={{ ...focusStyle("notes"), resize: "vertical", minHeight: 100 }} />
                </div>
                {/* Consent */}
                <div>
                  <label style={{ display: "flex", alignItems: "flex-start", gap: 12, cursor: "pointer", padding: "16px", borderRadius: "var(--radius-md)", background: errors.consent ? "rgba(230,53,53,0.06)" : "var(--se-gray-50)", border: errors.consent ? "1.5px solid rgba(230,53,53,0.35)" : "1.5px solid var(--border-subtle)" }}>
                    <input type="checkbox" checked={consent} onChange={(e) => { setConsent(e.target.checked); if (errors.consent) setErrors((p) => { const n = { ...p }; delete n.consent; return n; }); }} style={{ accentColor: "var(--se-teal)", width: 16, height: 16, marginTop: 2, flexShrink: 0 }} />
                    <span style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--text-body)", lineHeight: 1.6 }}>
                      I understand this is an early waitlist registration and I agree to be contacted upon the official launch of the program. <span style={{ color: "var(--se-teal)", fontWeight: 700 }}>*</span>
                    </span>
                  </label>
                  {errors.consent && <p style={{ fontFamily: "var(--font-sans)", fontSize: 12, color: "var(--se-red, #e63535)", margin: "4px 0 0" }}>{errors.consent}</p>}
                </div>
                <button type="submit" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 10, padding: "14px 32px", background: "var(--se-teal)", color: "#fff", fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 16, borderRadius: "var(--radius-md)", border: "none", cursor: "pointer", boxShadow: "0 4px 20px rgba(34,167,168,0.3)" }}>
                  Join the Waitlist <ArrowRight size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── Policy Modal ─────────────────────────────────────────────────────── */}
      {policyOpen && (
        <>
          <div onClick={() => setPolicyOpen(false)} style={{ position: "fixed", inset: 0, zIndex: 9998, background: "rgba(13,22,30,0.65)", backdropFilter: "blur(4px)" }} />
          <div style={{ position: "fixed", zIndex: 9999, top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "min(560px, calc(100vw - 32px))", maxHeight: "85vh", overflowY: "auto", background: "var(--se-white)", borderRadius: "var(--radius-xl)", boxShadow: "0 24px 64px rgba(13,22,30,0.35)" }}>
            <div style={{ height: 4, background: "linear-gradient(90deg, var(--se-teal) 0%, var(--accent) 100%)", borderRadius: "var(--radius-xl) var(--radius-xl) 0 0" }} />
            <button onClick={() => setPolicyOpen(false)} aria-label="Close" style={{ position: "absolute", top: 16, right: 16, width: 32, height: 32, borderRadius: "50%", background: "var(--se-gray-50)", border: "1px solid var(--border-subtle)", color: "var(--text-muted)", display: "grid", placeItems: "center", cursor: "pointer" }}>
              <X size={15} />
            </button>
            <div style={{ padding: "28px 32px 32px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                <div style={{ width: 44, height: 44, borderRadius: "var(--radius-md)", background: "rgba(246,186,59,0.15)", color: "var(--se-yellow, #f6ba3b)", display: "grid", placeItems: "center", flexShrink: 0 }}><ShieldAlert size={22} /></div>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 20, color: "var(--text-strong)", margin: 0 }}>Program Terms & Disclaimer</h3>
              </div>
              <div style={{ background: "var(--se-gray-50)", border: "1px solid var(--border-subtle)", borderRadius: "var(--radius-lg)", padding: "20px", marginBottom: 20, maxHeight: 320, overflowY: "auto" }}>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--text-body)", lineHeight: 1.8, margin: "0 0 14px" }}><strong>Please read carefully before submitting your registration:</strong></p>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--text-body)", lineHeight: 1.8, margin: "0 0 14px" }}>
                  This page outlines a planned recommendation program that has <strong>not yet officially launched</strong>. All details, including reward structures and eligibility criteria, are subject to change. Registering does not constitute a contractual obligation.
                </p>
                <p style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--text-body)", lineHeight: 1.8, margin: "0 0 10px" }}><strong>Key planned conditions:</strong></p>
                <ul style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--text-muted)", lineHeight: 1.8, margin: 0, paddingLeft: 20 }}>
                  <li>Only submissions through the official portal after launch are eligible.</li>
                  <li>The recommended entity must be a new client to Surveying Experts.</li>
                  <li>Points are awarded only after payment is completed.</li>
                  <li>Self-referrals or referrals of your own entity are not permitted.</li>
                  <li>Points expire after 12 months of account inactivity.</li>
                  <li>Rewards cannot be combined with other promotions or discounts.</li>
                </ul>
              </div>
              <label style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: "16px", borderRadius: "var(--radius-md)", background: policyAgreed ? "var(--se-teal-soft)" : "var(--se-gray-50)", border: policyAgreed ? "1.5px solid var(--se-teal)" : "1.5px solid var(--border-subtle)", cursor: "pointer", marginBottom: 20, transition: "all 0.15s" }}>
                <input type="checkbox" checked={policyAgreed} onChange={(e) => setPolicyAgreed(e.target.checked)} style={{ accentColor: "var(--se-teal)", width: 16, height: 16, marginTop: 2, flexShrink: 0 }} />
                <span style={{ fontFamily: "var(--font-sans)", fontSize: 13, color: "var(--text-body)", lineHeight: 1.65 }}>
                  I have read and understood the above disclaimer and planned program terms. I agree that this is a waitlist registration and not a confirmed enrollment.
                </span>
              </label>
              <div style={{ display: "flex", gap: 10 }}>
                <button onClick={handlePolicyConfirm} disabled={!policyAgreed} style={{ flex: 1, padding: "12px 20px", background: policyAgreed ? "var(--se-teal)" : "var(--se-gray-50)", color: policyAgreed ? "#fff" : "var(--text-muted)", fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 15, borderRadius: "var(--radius-md)", border: policyAgreed ? "none" : "1.5px solid var(--border-subtle)", cursor: policyAgreed ? "pointer" : "not-allowed", transition: "all 0.15s", display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
                  {policyAgreed ? <><CheckCircle2 size={16} /> Confirm & Submit</> : "Read & Check to Continue"}
                </button>
                <button onClick={() => setPolicyOpen(false)} style={{ padding: "12px 18px", background: "none", fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 14, color: "var(--text-muted)", border: "1.5px solid var(--border-subtle)", borderRadius: "var(--radius-md)", cursor: "pointer" }}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* ── Final CTA ────────────────────────────────────────────────────────── */}
      <section style={{ background: "var(--se-blue-dark)", padding: "72px 0 64px", position: "relative", overflow: "hidden" }}>
        <div aria-hidden style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 1px 1px, rgba(34,167,168,0.07) 1px, transparent 0)", backgroundSize: "22px 22px" }} />
        <div className="se-container" style={{ position: "relative", textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "#fff", fontSize: "clamp(24px, 3.5vw, 38px)", lineHeight: 1.1, letterSpacing: "-0.02em", margin: "0 0 16px" }}>Questions About the Program?</h2>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: 17, color: "rgba(255,255,255,0.65)", margin: "0 0 32px", lineHeight: 1.65 }}>
            Our team is ready to answer any questions you may have about the partnership structure and the upcoming recommendation program.
          </p>
          <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "13px 30px", background: "var(--se-teal)", color: "#fff", fontFamily: "var(--font-sans)", fontWeight: 700, fontSize: 15, borderRadius: "var(--radius-md)", textDecoration: "none", boxShadow: "0 4px 20px rgba(34,167,168,0.35)" }}>
            Contact Us Now <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
