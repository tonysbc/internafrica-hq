"use server";

import { Resend } from "resend";
import { AdminEmail } from "../components/AdminEmail";
import { redirect } from "next/navigation";

// YOUR REAL API KEY
const resend = new Resend("re_bVMcaP4g_JDg7WcbdDhHviM7CXxgDw7Go"); 

export async function submitApplication(formData: FormData) {
  const rawFormData = {
    name: formData.get("name") as string,
    lastname: formData.get("lastname") as string,
    email: formData.get("email") as string,
    phone: formData.get("phone") as string,
    destination: formData.get("destination") as string,
    startDate: formData.get("start_date") as string,
    endDate: formData.get("end_date") as string,
    program: formData.get("program") as string,
  };

  try {
    // Attempt to send the email
    const { data, error } = await resend.emails.send({
      // FIX 1: Use the ROOT domain since that is what you verified.
      // Try 'info@internafricahq.org' or 'application@internafricahq.org'
      // instead of 'application@send.internafricahq.org'
      from: "Intern Africa App <application@internafricahq.org>", 
      
      // Recipients
      to: ["tonyseverines@gmail.com", "info@internafricahq.org"], 
      
      headers: {
        "Reply-To": rawFormData.email,
      },
      
      subject: `New Application: ${rawFormData.name}`,
      react: AdminEmail(rawFormData),
    });

    if (error) {
      // Log error but DO NOT crash the app. 
      // This prevents the "Application Error" screen.
      console.error("Resend API Error:", error);
    } else {
      console.log("Email sent successfully:", data);
    }
  } catch (error) {
    // Catch network/server errors and log them
    console.error("Failed to send email:", error);
  }

  // Always redirect to success so the user isn't stuck
  redirect("/success");
}