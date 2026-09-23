import type { Metadata } from "next";
import { Poppins, Montserrat, Roboto_Slab } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

const poppins = Poppins({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-poppins", display: "swap" });
const montserrat = Montserrat({ subsets: ["latin"], weight: ["300", "400", "500", "600"], variable: "--font-montserrat", display: "swap" });
const robotoSlab = Roboto_Slab({ subsets: ["latin"], weight: ["400"], variable: "--font-roboto-slab", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://summit.afrifoodnetwork.com"),
  title: { default: "African Food Summit & Expo UK 2026 | London", template: "%s - African Food Summit & Expo" },
  description: "Africa's leading food summit comes to London, convening the policymakers, innovators, and cultural leaders shaping the global food future. Become A Sponsor.",
  alternates: { canonical: "./" },
  icons: { icon: "/img/AFSE-Logo-01.png" },
  openGraph: { type: "website", locale: "en_GB", url: "./", siteName: "African Food Summit & Expo", images: ["/img/Summit-Hero-1-scaled.png"] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${montserrat.variable} ${robotoSlab.variable}`}>
      <body style={{ ["--font-display" as string]: "var(--font-poppins)", ["--font-body" as string]: "var(--font-montserrat)", ["--font-quote" as string]: "var(--font-roboto-slab)" }}>
        <StructuredData />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
