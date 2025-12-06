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

  // 1. Attempt to send email
  const { data, error } = await resend.emails.send({
    // Ensure this matches your verified domain exactly
    from: "Intern Africa App <application@send.internafricahq.org>", 
    
    // Recipients
    to: ["tonyseverines@gmail.com", "info@internafricahq.org"], 
    
    headers: {
      "Reply-To": rawFormData.email,
    },
    
    subject: `New Application: ${rawFormData.name}`,
    react: AdminEmail(rawFormData),
  });

  // 2. CRITICAL DEBUGGING: 
  // If there is an error, THROW it so you see it on the screen.
  if (error) {
    console.error("Resend API Error:", error);
    throw new Error(`Email Failed: ${error.message}`);
  }

  // 3. Only redirect if successful
  redirect("/success");
}