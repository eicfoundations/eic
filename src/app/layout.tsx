import type { Metadata } from "next";
import { Sora, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SiteNotice from "../components/SiteNotice";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  title: "Energy Intelligence Coin (EIC) | EIC Foundations",
  description:
    "Official documentation-first site for Energy Intelligence Coin (EIC), a live Base Mainnet asset maintained by Energy Intelligence Coin Emergent Technologies and publicly stewarded through EIC Foundations in Observed Mode.",
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${sora.variable} antialiased`}
      >
        <div className="page-shell">
          <SiteNotice />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
