import Link from "next/link";
import { ArrowRight, CheckCircle, Users, Globe, Target, Briefcase, Heart } from "lucide-react";

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

      {/* Main Content: What Interns Gain */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-brand-primary mb-4">What You Will Gain</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join us to transform your career and perspective through immersion in South Africa's dynamic professional landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Practical Work Experience */}
          <div className="flex gap-4">
            <div className="mt-1 bg-brand-accent/10 p-3 rounded-full h-fit">
              <Briefcase className="text-brand-accent" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-brand-primary mb-2">Practical Work Experience</h3>
              <p className="text-gray-600 leading-relaxed">
                Intern Africa connects participants with real-world opportunities in law, human rights, social justice, education, healthcare, and community development. Interns gain hands-on experience, sharpen their skills, and build strong portfolios that set them apart in the global job market.
              </p>
            </div>
          </div>

          {/* Mentorship */}
          <div className="flex gap-4">
            <div className="mt-1 bg-brand-accent/10 p-3 rounded-full h-fit">
              <Users className="text-brand-accent" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-brand-primary mb-2">Mentorship & Professional Development</h3>
              <p className="text-gray-600 leading-relaxed">
                Interns are guided by experienced professionals who are passionate about capacity building and mentorship. Whether attending court sessions, working in grassroots organizations, or contributing to research and policy work, participants receive support and guidance to help shape their future careers.
              </p>
            </div>
          </div>

          {/* Cultural Immersion */}
          <div className="flex gap-4">
            <div className="mt-1 bg-brand-accent/10 p-3 rounded-full h-fit">
              <Globe className="text-brand-accent" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-brand-primary mb-2">Cultural Immersion & Global Perspective</h3>
              <p className="text-gray-600 leading-relaxed">
                Living and working in South Africa allows interns to engage deeply with local communities, understand the country’s unique history and socio-political landscape, and develop intercultural competence. This global awareness is essential for anyone seeking to work in international development, law, or humanitarian work.
              </p>
            </div>
          </div>

          {/* Networking */}
          <div className="flex gap-4">
            <div className="mt-1 bg-brand-accent/10 p-3 rounded-full h-fit">
              <Target className="text-brand-accent" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-brand-primary mb-2">Networking & Career Opportunities</h3>
              <p className="text-gray-600 leading-relaxed">
                Intern Africa provides opportunities to build strong professional networks with lawyers, NGO leaders, academics, activists, and fellow interns from around the world. These connections often lead to future collaborations, job opportunities, and academic pursuits.
              </p>
            </div>
          </div>

          {/* Personal Growth */}
          <div className="flex gap-4">
            <div className="mt-1 bg-brand-accent/10 p-3 rounded-full h-fit">
              <Heart className="text-brand-accent" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-brand-primary mb-2">Personal Growth & Purpose</h3>
              <p className="text-gray-600 leading-relaxed">
                Above all, interns and volunteers walk away with a sense of purpose. By contributing to meaningful causes and being part of positive change, they gain confidence, resilience, empathy, and a deeper understanding of their own potential and role in the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="bg-brand-light py-24 text-center px-4">
        <h2 className="text-3xl font-bold text-brand-primary mb-6">Ready to start your journey?</h2>
        <Link 
          href="/#programs" 
          className="inline-flex items-center px-8 py-4 bg-brand-primary text-white font-bold rounded-full text-lg hover:bg-brand-primary/90 transition-colors"
        >
          Find Your Program <ArrowRight size={20} className="ml-2" />
        </Link>
      </div>

    </div>
  );
}