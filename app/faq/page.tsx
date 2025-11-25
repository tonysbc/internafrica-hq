export default function FAQPage() {
  return (
    <div className="bg-white min-h-screen pb-20">
      
      <div className="bg-brand-primary text-white py-20 px-4 text-center">
        <h1 className="text-4xl font-heading font-bold mb-4">Frequently Asked Questions</h1>
        <p className="text-xl text-gray-200">Immerse Yourself in Africa’s Thriving Industries.</p>
      </div>

      <div className="max-w-3xl mx-auto px-4 mt-16 space-y-6">
        
        <FAQItem 
          question="What types of internships does Africa Intern HQ offer?"
          answer="We provide a wide range of internships in fields such as healthcare, education, business, conservation, and more."
        />
        
        <FAQItem 
          question="How do I apply for an internship?"
          answer="Simply browse our listings, select your preferred program, and follow the guided application process online via our Apply page."
        />

        <FAQItem 
          question="Are internships paid or unpaid?"
          answer="Most internships are unpaid, but some may offer allowances or stipends depending on the organization and location."
        />

        <FAQItem 
          question="Can I choose the country where I intern?"
          answer="Yes, you can select from various countries across Africa based on your field of interest and career goals."
        />

      </div>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
  return (
    <div className="bg-brand-light p-6 rounded-xl border border-gray-100">
      <h3 className="text-xl font-bold text-brand-primary mb-2">{question}</h3>
      <p className="text-gray-600 leading-relaxed">{answer}</p>
    </div>
  );
}