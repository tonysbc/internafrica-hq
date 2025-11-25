import Link from "next/link";
import { ArrowRight, CheckCircle, Users, Globe } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      
      {/* Hero */}
      <div className="bg-brand-primary text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            More Than Just an Internship.
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            We are a dedicated team in Arusha bridging the gap between global talent and African development.
          </p>
        </div>
      </div>

      {/* Mission */}
      <section className="py-20 px-4 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl font-bold text-brand-primary mb-6">Our Mission</h2>
          <p className="text-gray-600 text-lg mb-6 leading-relaxed">
            Intern Africa HQ was founded to provide safe, structured, and impactful career experiences in Tanzania. We realized that too many volunteer programs were "hands-off" or disconnected from real local needs.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            We focus on <strong>professional integration</strong>. Whether you are a medical student or a legal graduate, you don't just watch—you work alongside Tanzanian professionals to gain skills that matter.
          </p>
        </div>
        <div className="bg-gray-100 rounded-2xl h-80 flex items-center justify-center border-2 border-gray-200">
            <span className="text-gray-400 font-semibold">[Image: Team or Founder]</span>
        </div>
      </section>

      {/* Stats / Trust */}
      <div className="bg-brand-light py-16 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="w-12 h-12 bg-brand-accent/20 text-brand-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Users size={24} />
            </div>
            <h3 className="text-4xl font-bold text-brand-primary mb-2">500+</h3>
            <p className="text-gray-600 font-medium">Alumni Placed</p>
          </div>
          <div className="p-6">
            <div className="w-12 h-12 bg-brand-accent/20 text-brand-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe size={24} />
            </div>
            <h3 className="text-4xl font-bold text-brand-primary mb-2">15+</h3>
            <p className="text-gray-600 font-medium">Countries Represented</p>
          </div>
          <div className="p-6">
            <div className="w-12 h-12 bg-brand-accent/20 text-brand-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle size={24} />
            </div>
            <h3 className="text-4xl font-bold text-brand-primary mb-2">100%</h3>
            <p className="text-gray-600 font-medium">Safe Accommodation</p>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-24 text-center px-4">
        <h2 className="text-3xl font-bold text-brand-primary mb-6">Ready to join us?</h2>
        <Link 
          href="/#programs" 
          className="inline-flex items-center px-8 py-4 bg-brand-accent text-brand-dark font-bold rounded-full text-lg hover:bg-yellow-400 transition-colors"
        >
          Find Your Program <ArrowRight size={20} className="ml-2" />
        </Link>
      </div>

    </div>
  );
}