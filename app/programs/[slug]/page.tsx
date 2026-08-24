import { programs } from "@/data/programs";
import Link from "next/link";
import { CheckCircle, MapPin, DollarSign, ArrowLeft, Instagram } from "lucide-react";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const program = programs.find((p) => p.slug === slug);

  if (!program) {
    return {
      title: "Program Not Found | Intern Africa HQ",
    };
  }

  return {
    title: `${program.title} | Intern Africa HQ`,
    description: program.description.substring(0, 160),
    openGraph: {
      title: `${program.title} | Intern Africa HQ`,
      description: program.description.substring(0, 160),
      images: [program.image],
    },
  };
}

export default async function ProgramPage({ params }: { params: Promise<{ slug: string }> }) {
  // Vercel/Next.js 15+ requires params to be awaited
  const { slug } = await params;
  
  const program = programs.find((p) => p.slug === slug);

  if (!program) {
    return notFound();
  }

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      
      {/* Hero Header */}
      <div className="bg-brand-primary text-white py-16 relative">
         <div className="max-w-7xl mx-auto px-4">
          <Link href="/#programs" className="inline-flex items-center text-brand-accent hover:text-white mb-6 text-sm font-semibold transition-colors">
            <ArrowLeft size={16} className="mr-2" /> Back to Programs
          </Link>
          <span className="block w-fit py-1 px-3 rounded-full bg-brand-accent/20 border border-brand-accent text-brand-accent font-semibold text-xs mb-4 uppercase tracking-wider">
            {program.category}
          </span>
          <h1 className="text-3xl md:text-5xl font-heading font-bold mb-6">{program.title}</h1>
          <div className="flex flex-wrap gap-6 text-lg font-medium text-gray-200">
            <div className="flex items-center gap-2"><MapPin size={20} /> {program.location}</div>
            <div className="flex items-center gap-2"><DollarSign size={20} /> {program.price}</div>
          </div>
          <p className="text-sm text-gray-300 mt-2">{program.priceNote}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-8 grid lg:grid-cols-3 gap-10">
        
        {/* LEFT COLUMN: Main Content */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-brand-primary mb-4">Program Overview</h2>
            <p className="text-gray-600 leading-relaxed text-lg">{program.description}</p>
            {program.partner && (
              <p className="text-gray-600 leading-relaxed text-lg mt-4">
                This placement is hosted at <strong>{program.partner}</strong>, giving interns direct exposure to real cases and clients under professional supervision.
              </p>
            )}
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-brand-primary mb-6">What You Will Do</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {program.highlights.map((item, idx) => (
                <div key={idx} className="flex gap-3 items-start">
                  <CheckCircle className="text-brand-accent shrink-0 mt-1" size={20} />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-brand-primary mb-6">Typical Itinerary</h2>
            <div className="space-y-6">
              {program.itinerary.map((item, idx) => (
                <div key={idx} className="pl-4 border-l-4 border-brand-light">
                  <h3 className="font-bold text-lg text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-brand-primary mb-4">Where You&apos;ll Stay</h2>
            <p className="text-gray-600 leading-relaxed">
              Accommodation is arranged at <strong>Njiro Bed &amp; Breakfast</strong>, in a secure and accessible area of
              {program.location === "Zanzibar" ? " Zanzibar" : " Arusha, Tanzania"}. Rooms are clean and well-maintained
              (shared or private options), with water, electricity, and Wi-Fi included, plus breakfast and dinner provided
              daily and convenient access to your internship placement and city amenities.
            </p>
          </div>

          {program.instagramUrl && (
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-brand-primary mb-4">Follow This Program</h2>
              <a
                href={program.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-brand-primary font-semibold hover:underline"
              >
                <Instagram size={20} /> See placement updates on Instagram
              </a>
            </div>
          )}
        </div>

        {/* RIGHT COLUMN: Sticky "Apply" Card */}
        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 sticky top-24">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Interested?</h3>
            <p className="text-gray-500 text-sm mb-6">
              Fill out the application form to secure your spot. No payment is required today. Your program fee is paid before you travel.
            </p>

            <div className="flex justify-between py-2 mb-4 border-b border-gray-100">
              <span className="text-gray-500">Duration</span>
              <span className="font-semibold">2 Weeks +</span>
            </div>

            <h4 className="font-bold text-brand-primary mb-3 text-sm uppercase tracking-wider">What&apos;s Included</h4>
            <ul className="space-y-2 mb-6">
              {program.inclusions.map((inc) => (
                <li key={inc} className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle size={16} className="text-brand-accent shrink-0 mt-0.5" />
                  {inc}
                </li>
              ))}
            </ul>

            <Link 
              href={`/apply?program=${program.slug}`}
              className="block w-full py-4 bg-brand-primary text-white text-center font-bold rounded-xl hover:bg-brand-primary/90 transition-all mb-4"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}