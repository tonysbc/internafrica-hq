"use client";
import { useSearchParams } from "next/navigation";
import { Suspense, useActionState } from "react";
import Link from "next/link";
import { ArrowLeft, Loader2, AlertCircle } from "lucide-react";
import { submitApplication, FormState } from "../actions";

const APPLICATION_STEPS = [
  { title: "Application Submission", desc: "Submit your academic background, preferred internship area, duration, and career interests." },
  { title: "Review & Evaluation", desc: "Our team reviews each application to assess suitability and readiness." },
  { title: "Placement Matching", desc: "Qualified candidates are matched with a host institution based on field, skills, and career goals." },
  { title: "Offer & Confirmation", desc: "You receive formal confirmation of your host organization, role, duration, and fee structure." },
  { title: "Pre-Arrival Preparation", desc: "We guide you through travel arrangements, documentation, and cultural orientation." },
  { title: "Arrival & Orientation", desc: "You're met with airport pickup and an orientation covering program structure and safety." },
  { title: "Program Participation & Monitoring", desc: "We stay in regular contact with you and your host institution throughout the program." },
];

export default function ApplyPage() {
  return (
    <Suspense fallback={<div>Loading form...</div>}>
      <ApplyForm />
    </Suspense>
  );
}

const initialState: FormState = {
  success: false,
};

function ApplyForm() {
  const searchParams = useSearchParams();
  const selectedProgram = searchParams.get("program") || "";
  const [state, formAction, isPending] = useActionState(submitApplication, initialState);

  return (
    <div className="min-h-screen bg-brand-light py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <Link href="/" className="inline-flex items-center text-brand-primary mb-6 font-semibold hover:underline">
           <ArrowLeft size={18} className="mr-2" /> Back Home
        </Link>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
          <h2 className="text-2xl font-bold text-brand-primary mb-6">How the Application Process Works</h2>
          <ol className="space-y-4">
            {APPLICATION_STEPS.map((step, i) => (
              <li key={step.title} className="flex gap-4">
                <span className="shrink-0 w-8 h-8 rounded-full bg-brand-accent text-brand-dark font-bold flex items-center justify-center text-sm">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-bold text-gray-800">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-brand-primary p-6 text-center text-white">
            <h1 className="text-3xl font-bold mb-2">Apply for Internship</h1>
            <p className="text-brand-accent font-medium">Tell us more about your trip details.</p>
            </div>
            
            {/* Global Error Message */}
            {state?.message && (
              <div className="m-8 p-4 bg-red-50 border border-red-100 text-red-600 rounded-lg flex items-center gap-3">
                <AlertCircle size={20} />
                <p className="text-sm font-medium">{state.message}</p>
              </div>
            )}

            <form action={formAction} className="p-8 space-y-6">
            
            {/* 1. Contact Details */}
            <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-800 border-b pb-2">1. Personal Details</h3>
                <div className="grid md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                        <input name="name" type="text" className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-brand-primary focus:outline-none ${state?.errors?.name ? 'border-red-500 bg-red-50' : 'border-gray-200'}`} />
                        {state?.errors?.name && <p className="mt-1 text-xs text-red-500">{state.errors.name[0]}</p>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                        <input name="lastname" type="text" className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-brand-primary focus:outline-none ${state?.errors?.lastname ? 'border-red-500 bg-red-50' : 'border-gray-200'}`} />
                        {state?.errors?.lastname && <p className="mt-1 text-xs text-red-500">{state.errors.lastname[0]}</p>}
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                        <input name="email" type="email" className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-brand-primary focus:outline-none ${state?.errors?.email ? 'border-red-500 bg-red-50' : 'border-gray-200'}`} />
                        {state?.errors?.email && <p className="mt-1 text-xs text-red-500">{state.errors.email[0]}</p>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                        <input name="phone" type="tel" className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-brand-primary focus:outline-none ${state?.errors?.phone ? 'border-red-500 bg-red-50' : 'border-gray-200'}`} />
                        {state?.errors?.phone && <p className="mt-1 text-xs text-red-500">{state.errors.phone[0]}</p>}
                    </div>
                </div>
            </div>

            {/* 2. Trip Details */}
            <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-800 border-b pb-2">2. Trip Details</h3>
                
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Destination *</label>
                    <select name="destination" className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-brand-primary focus:outline-none bg-white ${state?.errors?.destination ? 'border-red-500 bg-red-50' : 'border-gray-200'}`}>
                        <option value="">Select one option</option>
                        <option value="Tanzania">Tanzania</option>
                        <option value="Zanzibar">Zanzibar</option>
                    </select>
                    {state?.errors?.destination && <p className="mt-1 text-xs text-red-500">{state.errors.destination[0]}</p>}
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Start Date *</label>
                        <input name="start_date" type="date" className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-brand-primary focus:outline-none ${state?.errors?.start_date ? 'border-red-500 bg-red-50' : 'border-gray-200'}`} />
                        {state?.errors?.start_date && <p className="mt-1 text-xs text-red-500">{state.errors.start_date[0]}</p>}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">End Date *</label>
                        <input name="end_date" type="date" className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-brand-primary focus:outline-none ${state?.errors?.end_date ? 'border-red-500 bg-red-50' : 'border-gray-200'}`} />
                        {state?.errors?.end_date && <p className="mt-1 text-xs text-red-500">{state.errors.end_date[0]}</p>}
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Program of Interest</label>
                    <select name="program" defaultValue={selectedProgram} className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-brand-primary focus:outline-none bg-white ${state?.errors?.program ? 'border-red-500 bg-red-50' : 'border-gray-200'}`}>
                        <option value="medical-nursing-internship">Medical & Nursing</option>
                        <option value="legal-human-rights">Legal & Human Rights</option>
                        <option value="social-work-community">Social Work</option>
                        <option value="volunteering-tanzania-mainland">Volunteering (Tanzania)</option>
                        <option value="volunteering-zanzibar">Volunteering (Zanzibar)</option>
                    </select>
                    {state?.errors?.program && <p className="mt-1 text-xs text-red-500">{state.errors.program[0]}</p>}
                </div>
            </div>

            <button 
                type="submit" 
                disabled={isPending}
                className={`w-full py-4 bg-brand-accent text-brand-dark font-bold text-lg rounded-xl hover:bg-yellow-400 transition-all flex items-center justify-center gap-2 ${isPending ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
                {isPending ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Submitting...
                  </>
                ) : 'Submit Application'}
            </button>
            </form>
        </div>
      </div>
    </div>
  );
}