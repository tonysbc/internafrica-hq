import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Menu, Facebook, Instagram, Twitter } from "lucide-react";
import { GoogleAnalytics } from '@next/third-parties/google';
import { Analytics } from "@vercel/analytics/next"; // 1. Import Vercel Analytics

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });

export const metadata: Metadata = {
  title: "Intern Africa HQ | Transformative Internships in Tanzania",
  description: "Gain verified medical, legal, and social work experience in Tanzania & Zanzibar.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${montserrat.variable} font-sans text-brand-dark bg-white flex flex-col min-h-screen`}>
        
        {/* --- HEADER --- */}
        <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-2">
                <img src="/images/Intern-Africa-HQ-Logo.png" alt="Intern Africa HQ" className="h-12 w-auto" />
              </Link>

              {/* Desktop Nav */}
              <nav className="hidden lg:flex gap-6 items-center font-medium text-gray-600 text-sm">
                <Link href="/" className="hover:text-brand-primary transition-colors">Home</Link>
                <Link href="/about" className="hover:text-brand-primary transition-colors">About</Link>
                <Link href="/team" className="hover:text-brand-primary transition-colors">Team</Link>
                <Link href="/programs/medical-nursing-internship" className="hover:text-brand-primary transition-colors">Medical</Link>
                <Link href="/programs/legal-human-rights" className="hover:text-brand-primary transition-colors">Legal</Link>
                <Link href="/programs/social-work-community" className="hover:text-brand-primary transition-colors">Social</Link>
                <Link href="/programs/volunteering-tanzania-mainland" className="hover:text-brand-primary transition-colors">Tanzania</Link>
                <Link href="/programs/volunteering-zanzibar" className="hover:text-brand-primary transition-colors">Zanzibar</Link>
                <Link 
                  href="/apply" 
                  className="px-5 py-2 bg-brand-primary text-white rounded-full hover:bg-brand-primary/90 transition-all font-semibold"
                >
                  Apply Now
                </Link>
              </nav>

              <button className="lg:hidden p-2 text-gray-600">
                <Menu size={28} />
              </button>
            </div>
          </div>
        </header>

        <main className="flex-grow">
          {children}
        </main>

        {/* --- FOOTER --- */}
        <footer className="bg-brand-primary text-white pt-16 pb-8">
          <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <img src="/images/Intern-Africa-HQ-Logo.png" alt="Intern Africa HQ" className="h-12 w-auto brightness-0 invert mb-4" />
              <p className="text-gray-300 max-w-sm">
                Connecting global talent with meaningful volunteering and internship opportunities.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4 text-brand-accent">Programs</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li><Link href="/programs/medical-nursing-internship">Medical & Nursing</Link></li>
                <li><Link href="/programs/legal-human-rights">Legal & Human Rights</Link></li>
                <li><Link href="/programs/social-work-community">Social Work</Link></li>
                <li><Link href="/programs/volunteering-tanzania-mainland">Tanzania Guide</Link></li>
                <li><Link href="/programs/volunteering-zanzibar">Zanzibar Guide</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4 text-brand-accent">Contact</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>Arusha, Tanzania</li>
                <li>info@internafricahq.org</li>
                <li className="flex gap-4 mt-4">
                  <Facebook size={20} />
                  <Instagram size={20} />
                  <Twitter size={20} />
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center text-gray-400 text-sm border-t border-white/10 pt-8">
            © {new Date().getFullYear()} Intern Africa HQ. All rights reserved.
          </div>
        </footer>

        {/* Analytics Components */}
        <GoogleAnalytics gaId="G-XYZ123456" />
        <Analytics /> {/* 2. Add Vercel Analytics Component */}
      </body>
    </html>
  );
}