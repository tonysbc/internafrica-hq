import { Linkedin, Twitter } from "lucide-react";

export default function TeamPage() {
  return (
    <div className="bg-white min-h-screen pb-20">
      <div className="bg-brand-primary text-white py-16 text-center px-4">
        <h1 className="text-4xl font-bold font-heading mb-4">Meet Our Team</h1>
        <p className="text-xl text-gray-200">The passionate professionals driving our mission forward.</p>
      </div>

      <div className="max-w-5xl mx-auto px-4 mt-16 space-y-20">
        
        {/* Member 1: Saida Kessy */}
        <div className="grid md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-4">
            <div className="aspect-[3/4] bg-gray-100 rounded-xl overflow-hidden mb-4 border border-gray-200 shadow-sm">
               {/* Updated Image for Saida */}
               <img 
                 src="/images/Saida.jpeg" 
                 alt="Saida Kessy" 
                 className="w-full h-full object-cover"
               />
            </div>
            <div className="flex gap-4 justify-center">
              <a href="#" className="p-2 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100"><Twitter size={20} /></a>
              <a href="#" className="p-2 bg-blue-50 text-blue-700 rounded-full hover:bg-blue-100"><Linkedin size={20} /></a>
            </div>
          </div>
          <div className="md:col-span-8">
            <h2 className="text-3xl font-bold text-brand-primary">Saida Kessy</h2>
            <p className="text-brand-accent font-bold text-lg mb-6 uppercase tracking-wider">Program Coordinator</p>
            
            <div className="prose text-gray-600 space-y-4 leading-relaxed">
              <p>
                Saida, former Ms. Tanzania 1997, stands as a beacon of hope and a driving force for positive change in Tanzania. As the Director of <strong>DUNIA MOJA PAMOJA (DMP)</strong>, a non-governmental, non-denominational, non-political, and non-profit organization, her unwavering commitment to public health and youth development is truly inspiring.
              </p>
              <p>
                With 20 years of dedicated service in Community Development and Administration, Saida is a highly qualified and seasoned professional. Her impressive career includes valuable experience working with UN agencies, notably the <strong>United Nations Criminal Tribunal for Rwanda (UNICTR)</strong>. This exposure to international organizations has honed her skills in public relations, human resource management, and project coordination.
              </p>
              <p>
                As the Director of DMP, Saida leads the organization’s mission to address public health needs in communities. DMP focuses on combating drug and drug abuse through comprehensive public education and rehabilitation programs. Additionally, DMP fosters employment opportunities for girls through initiatives like beauty pageants and promotes environmental protection. As program coordinator for Intern Africa HQ, Saida uses her vast experience to ensure the right placements and experience for all interns.
              </p>
            </div>
          </div>
        </div>

        {/* Member 2: Dr. Happy Herbert Mlacha */}
        <div className="grid md:grid-cols-12 gap-8 items-start pt-16 border-t border-gray-100">
          <div className="md:col-span-4">
            <div className="aspect-[3/4] bg-gray-100 rounded-xl overflow-hidden mb-4 border border-gray-200 shadow-sm">
               {/* Updated Image for Dr. Happy */}
               <img 
                 src="/images/Happy.jpeg" 
                 alt="Dr. Happy Herbert Mlacha" 
                 className="w-full h-full object-cover"
               />
            </div>
            <div className="flex gap-4 justify-center">
              <a href="#" className="p-2 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100"><Twitter size={20} /></a>
              <a href="#" className="p-2 bg-blue-50 text-blue-700 rounded-full hover:bg-blue-100"><Linkedin size={20} /></a>
            </div>
          </div>
          <div className="md:col-span-8">
            <h2 className="text-3xl font-bold text-brand-primary">Dr. Happy Herbert Mlacha</h2>
            <p className="text-brand-accent font-bold text-lg mb-6 uppercase tracking-wider">Technical Lead</p>
            
            <div className="prose text-gray-600 space-y-4 leading-relaxed">
              <p>
                Dr. Happy Herbert Mlacha is a distinguished Tanzanian legal professional, advocate, and passionate mentor. With a strong background in law and business, she has consistently demonstrated a commitment to empowering young people through education, mentorship, and community-driven initiatives.
              </p>
              <p>
                As the founder and chairperson of the <strong>New Vision Foundation for Children and Youth Education</strong>, Herbert has dedicated his career to creating opportunities for the next generation of leaders to thrive. Happy’s expertise spans business law, human rights, and governance, and she has actively contributed to international legal forums.
              </p>
              <p>
                At Intern Africa, Happy Mlacha plays a pivotal role in guiding young professionals, offering invaluable support and mentorship as they navigate their career paths. Her dedication to providing a collaborative environment for interns ensures that they have the tools and experiences necessary to excel in their chosen fields.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}