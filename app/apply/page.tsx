"use client";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { submitApplication } from "../actions";

export default function ApplyPage() {
  return (
    <Suspense fallback={<div>Loading form...</div>}>
      <ApplyForm />
    </Suspense>
  );
}

function ApplyForm() {
  const searchParams = useSearchParams();
  const selectedProgram = searchParams.get("program") || "";

  return (
    <div className="min-h-screen bg-brand-light py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <Link href="/" className="inline-flex items-center text-brand-primary mb-6 font-semibold hover:underline">
           <ArrowLeft size={18} className="mr-2" /> Back Home
        </Link>
        
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-brand-primary p-6 text-center text-white">
            <h1 className="text-3xl font-bold mb-2">Apply for Internship</h1>
            <p className="text-brand-accent font-medium">Tell us more about your trip details.</p>
            </div>
            
            {/* Form uses the Server Action from app/actions.ts */}
            <form action={submitApplication} className="p-8 space-y-6">
            
            {/* 1. Contact Details */}
            <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-800 border-b pb-2">1. Personal Details</h3>
                <div className="grid md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                        <input name="name" required type="text" className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-primary focus:outline-none" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                        <input name="lastname" required type="text" className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-primary focus:outline-none" />
                    </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                        <input name="email" required type="email" className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-primary focus:outline-none" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                        <input name="phone" required type="tel" className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-primary focus:outline-none" />
                    </div>
                </div>
            </div>

            {/* 2. Trip Details */}
            <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-800 border-b pb-2">2. Trip Details</h3>
                
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Destination *</label>
                    <select name="destination" required className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-primary focus:outline-none bg-white">
                        <option value="">Select one option</option>
                        <option value="Tanzania">Tanzania</option>
                        <option value="Zanzibar">Zanzibar</option>
                    </select>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Start Date *</label>
                        <input name="start_date" required type="date" className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-primary focus:outline-none" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">End Date *</label>
                        <input name="end_date" required type="date" className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-primary focus:outline-none" />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Program of Interest</label>
                    <select name="program" defaultValue={selectedProgram} className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-primary focus:outline-none bg-white">
                        <option value="medical-nursing-internship">Medical & Nursing</option>
                        <option value="legal-human-rights">Legal & Human Rights</option>
                        <option value="social-work-community">Social Work</option>
                        <option value="volunteering-tanzania">Volunteering (Tanzania)</option>
                        <option value="volunteering-zanzibar">Volunteering (Zanzibar)</option>
                    </select>
                </div>
            </div>

            <button 
                type="submit" 
                className="w-full py-4 bg-brand-accent text-brand-dark font-bold text-lg rounded-xl hover:bg-yellow-400 transition-all"
            >
                Submit Application
            </button>
            </form>
        </div>
      </div>
    </div>
  );
}