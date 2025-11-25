import { programs } from '../../../data/programs'; // Adjust path for deeper nesting
import Link from "next/link";
import { CheckCircle, MapPin, DollarSign, ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

// 1. GENERATE STATIC PARAMS (REQUIRED for DreamHost/Static Export)
export async function generateStaticParams() {
  return programs.map((program) => ({
    slug: program.slug,
  }));
}

// 2. THE PAGE COMPONENT
export default function ProgramPage({ params }: { params: { slug: string } }) {
  const program = programs.find((p) => p.slug === params.slug);

  if (!program) {
    return notFound();
  }

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      
      {/* Hero Header */}
      <div className="bg-brand-primary text-white py-16 relative">
         <div className="max-w-7xl mx-auto px-4">
          <Link href="/" className="inline-flex items-center text-brand-accent hover:text-white mb-6 text-sm font-semibold transition-colors">
            <ArrowLeft size={16} className="mr-2" /> Back to Programs
          </Link>
          <span className="block w-fit py-1 px-3 rounded-full bg-brand-accent/20 border border-brand-accent text-brand-accent font-semibold text-xs mb-4 uppercase tracking-wider">
            {program.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">{program.title}</h1>
          <div className="flex flex-wrap gap-6 text-lg font-medium text-gray-200">
            <div className="flex items-center gap-2"><MapPin size={20} /> {program.location}</div>
            <div className="flex items-center gap-2"><DollarSign size={20} /> {program.price}</div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-8 grid lg:grid-cols-3 gap-10">
        
        {/* LEFT COLUMN: Main Content */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Overview */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-brand-primary mb-4">Program Overview</h2>
            <p className="text-gray-600 leading-relaxed text-lg">{program.description}</p>
          </div>

          {/* Highlights */}
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

          {/* Itinerary */}
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
        </div>

        {/* RIGHT COLUMN: Sticky "Apply" Card */}
        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 sticky top-24">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Interested?</h3>
            <p className="text-gray-500 text-sm mb-6">
              Fill out the application form to secure your spot. No payment is required today.
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-500">Duration</span>
                <span className="font-semibold">2 Weeks +</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-500">Accommodation</span>
                <span className="font-semibold text-green-600">Included</span>
              </div>
            </div>

            <Link 
              href={`/apply?program=${program.slug}`}
              className="block w-full py-4 bg-brand-primary text-white text-center font-bold rounded-xl hover:bg-brand-primary/90 transition-all mb-4"
            >
              Start Application
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}