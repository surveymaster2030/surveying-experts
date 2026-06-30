import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const thmanyahSans = localFont({
  src: [
    { path: "../public/fonts/thmanyah/thmanyahsans-Light.woff2",   weight: "300", style: "normal" },
    { path: "../public/fonts/thmanyah/thmanyahsans-Regular.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/thmanyah/thmanyahsans-Medium.woff2",  weight: "500", style: "normal" },
    { path: "../public/fonts/thmanyah/thmanyahsans-Bold.woff2",    weight: "700", style: "normal" },
    { path: "../public/fonts/thmanyah/thmanyahsans-Black.woff2",   weight: "900", style: "normal" },
  ],
  variable: "--font-sans",
  display: "swap",
});

const thmanyahDisplay = localFont({
  src: [
    { path: "../public/fonts/thmanyah/thmanyahserifdisplay-Light.woff2",   weight: "300", style: "normal" },
    { path: "../public/fonts/thmanyah/thmanyahserifdisplay-Regular.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/thmanyah/thmanyahserifdisplay-Medium.woff2",  weight: "500", style: "normal" },
    { path: "../public/fonts/thmanyah/thmanyahserifdisplay-Bold.woff2",    weight: "700", style: "normal" },
    { path: "../public/fonts/thmanyah/thmanyahserifdisplay-Black.woff2",   weight: "900", style: "normal" },
  ],
  variable: "--font-display",
  display: "swap",
});

const thmanyahSerif = localFont({
  src: [
    { path: "../public/fonts/thmanyah/thmanyahseriftext-Light.woff2",   weight: "300", style: "normal" },
    { path: "../public/fonts/thmanyah/thmanyahseriftext-Regular.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/thmanyah/thmanyahseriftext-Medium.woff2",  weight: "500", style: "normal" },
    { path: "../public/fonts/thmanyah/thmanyahseriftext-Bold.woff2",    weight: "700", style: "normal" },
    { path: "../public/fonts/thmanyah/thmanyahseriftext-Black.woff2",   weight: "900", style: "normal" },
  ],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default:
      "Professional Surveying Equipment and Complete Field Support in Saudi Arabia | Surveying Experts",
    template: "%s | Surveying Experts",
  },
  description:
    "Surveying Experts supplies professional surveying equipment and supports field teams across Saudi Arabia with consultation, maintenance, calibration, and after-sales service.",
  keywords: [
    "surveying equipment Saudi Arabia",
    "GNSS RTK",
    "total station",
    "surveying experts",
    "calibration",
    "maintenance",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${thmanyahSans.variable} ${thmanyahDisplay.variable} ${thmanyahSerif.variable}`}
    >
      <body style={{ fontFamily: "var(--font-sans, system-ui, sans-serif)" }}>
        {children}
      </body>
    </html>
  );
}
