"use client";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

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
            <p className="text-brand-accent font-medium">No payment required today.</p>
            </div>
            
            {/* Form Backend: Web3Forms */}
            <form action="https://api.web3forms.com/submit" method="POST" className="p-8 space-y-6">
            
            {/* --- CRITICAL: YOUR ACCESS KEY IS HERE --- */}
            <input type="hidden" name="access_key" value="645d7413-e58a-4913-8a11-d141948c911b" />
            
            <input type="hidden" name="subject" value="New Intern Africa Application" />
            <input type="hidden" name="redirect" value="https://internafricahq.org/success" />

            {/* Personal Details */}
            <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-800 border-b pb-2">1. Personal Details</h3>
                <div className="grid md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <input name="name" required type="text" className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-primary focus:outline-none" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <input name="lastname" required type="text" className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-primary focus:outline-none" />
                </div>
                </div>
                <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input name="email" required type="email" className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-primary focus:outline-none" />
                </div>
            </div>

            {/* Program Selection */}
            <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-800 border-b pb-2">2. Program Preference</h3>
                <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Program</label>
                <select name="program" defaultValue={selectedProgram} className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-primary focus:outline-none bg-white">
                    <option value="medical-nursing-internship">Medical & Nursing</option>
                    <option value="legal-human-rights">Legal & Human Rights</option>
                    <option value="social-work-community">Social Work</option>
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