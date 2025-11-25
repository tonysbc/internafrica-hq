import Link from "next/link";
import { CheckCircle, ArrowLeft } from "lucide-react";

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-brand-light flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center max-w-md border border-gray-100">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={32} />
        </div>
        <h1 className="text-3xl font-heading font-bold text-brand-primary mb-2">Application Received!</h1>
        <p className="text-gray-600 mb-8 font-sans">
          Thank you. We have received your details. One of our coordinators will contact you via WhatsApp or Email within 24 hours to arrange your placement.
        </p>
        <Link 
          href="/" 
          className="inline-flex items-center justify-center w-full py-3 bg-brand-primary text-white font-bold rounded-xl hover:bg-brand-primary/90 transition-all"
        >
          <ArrowLeft size={18} className="mr-2" /> Return to Home
        </Link>
      </div>
    </div>
  );
}