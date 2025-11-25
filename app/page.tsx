import Link from 'next/link';
import { MapPin, ArrowRight, CheckCircle } from 'lucide-react';
// CORRECT IMPORT PATH FOR ROOT STRUCTURE
import { programs } from '../data/programs'; 

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* --- HERO SECTION --- */}
      <section className="relative h-[90vh] flex items-center justify-center bg-brand-primary overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ backgroundImage: "url('/images/hero-kilimanjaro.jpg')" }} 
        />

        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto text-white">
          <span className="inline-block py-1 px-3 rounded-full bg-brand-accent/20 border border-brand-accent text-brand-accent font-semibold text-sm mb-6">
            Recruiting for 2025/2026 Season
          </span>
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 tracking-tight leading-tight">
            Internships that <br/>
            <span className="text-brand-accent">Change Lives.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto font-sans">
            Gain verified medical, legal, and social work experience in Tanzania & Zanzibar. 
            Safe, structured, and impactful.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="#programs" 
              className="px-8 py-4 bg-brand-accent text-brand-dark font-bold rounded-full text-lg hover:bg-yellow-400 transition-colors flex items-center justify-center gap-2"
            >
              Find Your Program <ArrowRight size={20} />
            </Link>
            <Link 
              href="/about" 
              className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white text-white font-bold rounded-full text-lg hover:bg-white/20 transition-colors"
            >
              Why Intern Africa?
            </Link>
          </div>
        </div>
      </section>

      {/* --- TRUST BADGES --- */}
      <div className="bg-brand-light py-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-8 md:gap-16 text-gray-500 font-semibold uppercase tracking-wider text-sm">
          <span>Trusted by Students From:</span>
          <span className="text-brand-dark flex items-center gap-2">🇬🇧 UK</span>
          <span className="text-brand-dark flex items-center gap-2">🇺🇸 USA</span>
          <span className="text-brand-dark flex items-center gap-2">🇩🇪 Germany</span>
          <span className="text-brand-dark flex items-center gap-2">🇳🇱 Netherlands</span>
        </div>
      </div>

      {/* --- PROGRAM CATEGORIES (UPDATED WITH IMAGES) --- */}
      <section id="programs" className="py-24 max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-brand-primary mb-4">Choose Your Path</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We specialize in high-impact placements. We don't do "voluntourism." 
            We do professional career development.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
           {programs.map((program) => (
             <Link 
               key={program.id} 
               href={`/programs/${program.slug}`}
               className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col"
             >
               {/* CARD IMAGE */}
               <div className="h-56 overflow-hidden relative">
                 <img 
                   src={program.image} 
                   alt={program.title} 
                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                 />
                 <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-brand-primary uppercase tracking-wider">
                   {program.category}
                 </div>
               </div>

               {/* CARD CONTENT */}
               <div className="p-8 flex flex-col flex-grow">
                 <h3 className="text-xl font-bold text-brand-primary mb-3 line-clamp-2 group-hover:text-brand-accent transition-colors">
                   {program.title}
                 </h3>
                 <p className="text-gray-600 mb-6 flex-grow text-sm line-clamp-3">
                   {program.description}
                 </p>
                 <div className="flex items-center text-sm font-semibold text-brand-accent mt-auto pt-4 border-t border-gray-50">
                   <MapPin size={16} className="mr-1" /> {program.location}
                 </div>
               </div>
             </Link>
           ))}
        </div>
      </section>

      {/* --- VALUE PROPOSITION --- */}
      <section className="bg-brand-primary text-white py-24">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-heading font-bold mb-6">We Handle the Logistics. <br/>You Focus on the Work.</h2>
            <div className="space-y-6">
              <FeatureRow title="Safe, Private Accommodation" desc="Stay in our secure volunteer house with 24/7 security and Wi-Fi." />
              <FeatureRow title="Visa & Permit Support" desc="We guide you through the Tanzanian Class C Visa process step-by-step." />
              <FeatureRow title="In-Country Team" desc="Our HQ is in Arusha. We are not a remote agency. We are here with you." />
            </div>
          </div>
          <div className="h-96 bg-gray-800 rounded-2xl overflow-hidden border-4 border-brand-accent/30 relative shadow-2xl">
             <div 
               className="absolute inset-0 bg-cover bg-center"
               style={{ backgroundImage: "url('/images/team-logistics.jpg')" }} 
             />
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureRow({ title, desc }: any) {
  return (
    <div className="flex gap-4">
      <div className="mt-1">
        <CheckCircle className="text-brand-accent shrink-0" size={24} />
      </div>
      <div>
        <h4 className="text-xl font-bold mb-1">{title}</h4>
        <p className="text-gray-300 leading-relaxed text-sm opacity-90">{desc}</p>
      </div>
    </div>
  );
}