import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  Users,
  Globe,
  Target,
  Heart,
  Scale,
  Stethoscope,
  HandHeart,
  ShieldCheck,
  Award,
  Handshake,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

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

      {/* Introduction */}
      <section className="py-20 px-4 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-brand-primary mb-6">Who We Are</h2>
        <p className="text-gray-600 leading-relaxed text-lg mb-4">
          Intern Africa is a non-governmental organization established in Tanzania and headquartered in Arusha,
          dedicated to providing structured, high-impact internship and volunteer opportunities across Africa —
          with placements now available in both Tanzania and Zanzibar.
        </p>
        <p className="text-gray-600 leading-relaxed text-lg">
          We were founded to bridge the persistent gap between academic education and practical, real-world
          professional experience. Graduates often leave university with strong theoretical knowledge but limited
          exposure to actual work environments — a gap that affects employability, confidence, and career readiness.
          Intern Africa addresses this by creating pathways for students and recent graduates to transition from
          classrooms into professional settings where they can apply, test, and refine their knowledge, working
          closely with a network of reputable law firms, hospitals, and NGOs so every placement provides meaningful
          engagement rather than passive observation.
        </p>
      </section>

      {/* Vision & Mission */}
      <section className="bg-brand-light py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="text-2xl font-bold text-brand-primary mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To become Africa&apos;s leading platform for experiential learning and career development, producing
              globally competitive professionals equipped with practical skills, ethical awareness, and
              cross-cultural competence — empowering African youth to compete and excel on a global stage.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="text-2xl font-bold text-brand-primary mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To provide accessible, well-structured, and professionally supervised internship opportunities that
              enable students and graduates to gain practical experience, build confidence, and develop
              career-relevant skills — through strong partnerships with host institutions and a commitment to
              participant success and safety.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-brand-primary mb-4">Our Core Values</h2>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          <ValueCard icon={ShieldCheck} title="Integrity" desc="We uphold transparency, honesty, and accountability in all our operations and partnerships." />
          <ValueCard icon={Award} title="Excellence" desc="We deliver high-quality programs that meet international standards and exceed participant expectations." />
          <ValueCard icon={TrendingUp} title="Impact" desc="We focus on creating meaningful experiences that contribute to individual growth and community development." />
          <ValueCard icon={Handshake} title="Collaboration" desc="We build strong partnerships that create mutual value and long-term sustainability." />
          <ValueCard icon={Briefcase} title="Professional Growth" desc="We prioritize the development of practical skills, discipline, and career readiness." />
          <ValueCard icon={Globe} title="Cultural Exchange" desc="We promote understanding, diversity, and global connection through immersive experiences." />
        </div>
      </section>

      {/* Areas of Focus */}
      <section className="bg-brand-primary text-white py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Areas of Focus</h2>
            <p className="text-gray-200 max-w-2xl mx-auto">
              Sectors carefully selected to give participants relevant, practical, and transferable skills.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <FocusCard
              icon={Scale}
              title="Legal & Human Rights"
              desc="Placed at Mlacha & Associates Advocates, interns take part in legal research and case analysis, drafting legal documents and reports, observing court proceedings, supporting ongoing cases under supervision, and human rights advocacy."
            />
            <FocusCard
              icon={Stethoscope}
              title="Medical & Healthcare"
              desc="Placed in hospitals and health centers, interns gain observational and assisted clinical experience, interact with healthcare professionals and patients, and are exposed to public health challenges in an African context."
            />
            <FocusCard
              icon={HandHeart}
              title="Social Work & Community Development"
              desc="Working with NGOs and grassroots organizations, interns take part in community outreach, youth development initiatives, education and awareness campaigns, and support for vulnerable groups."
            />
          </div>
        </div>
      </section>

      {/* What You Will Gain */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-brand-primary mb-4">What You Will Gain</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join us to transform your career and perspective through immersion in Tanzania&apos;s dynamic professional landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
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

          <div className="flex gap-4">
            <div className="mt-1 bg-brand-accent/10 p-3 rounded-full h-fit">
              <Globe className="text-brand-accent" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-brand-primary mb-2">Cultural Immersion & Global Perspective</h3>
              <p className="text-gray-600 leading-relaxed">
                Living and working in Tanzania allows interns to engage deeply with local communities, understand the country&apos;s unique history and socio-political landscape, and develop intercultural competence — essential for anyone seeking to work in international development, law, or humanitarian work.
              </p>
            </div>
          </div>

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

function ValueCard({ icon: Icon, title, desc }: { icon: LucideIcon; title: string; desc: string }) {
  return (
    <div className="p-6 rounded-2xl border border-gray-100 bg-white shadow-sm">
      <div className="mb-4 bg-brand-accent/10 p-3 rounded-full w-fit">
        <Icon className="text-brand-accent" size={24} />
      </div>
      <h3 className="text-lg font-bold text-brand-primary mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

function FocusCard({ icon: Icon, title, desc }: { icon: LucideIcon; title: string; desc: string }) {
  return (
    <div className="bg-white/10 backdrop-blur p-8 rounded-2xl border border-white/20">
      <div className="mb-4 bg-brand-accent/20 p-3 rounded-full w-fit">
        <Icon className="text-brand-accent" size={24} />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-200 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}
