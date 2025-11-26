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
    await resend.emails.send({
      // Validated Sender Domain
      from: "Intern Africa App <application@send.internafricahq.org>", 
      
      // Admins receiving the notification
      to: ["tonyseverines@gmail.com", "info@internafricahq.org"], 
      
      // FIX: Use 'headers' to set Reply-To. This bypasses the TypeScript error.
      headers: {
        "Reply-To": rawFormData.email,
      },
      
      subject: `New Application: ${rawFormData.name}`,
      react: AdminEmail(rawFormData),
    });
  } catch (error) {
    console.error("Failed to send email:", error);
  }

  redirect("/success");
}