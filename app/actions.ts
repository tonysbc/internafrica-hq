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
    const { data, error } = await resend.emails.send({
      // PRODUCTION SENDER: Using your verified subdomain
      from: "Intern Africa App <application@send.internafricahq.org>", 
      
      // PRODUCTION RECIPIENTS: Send to both admins
      to: ["tonyseverines@gmail.com", "info@internafricahq.org"], 
      
      // REPLY-TO: Allows direct reply to the customer
      headers: {
        "Reply-To": rawFormData.email,
      },
      
      subject: `New Application: ${rawFormData.name}`,
      react: AdminEmail(rawFormData),
    });

    if (error) {
      console.error("Resend API Error:", error);
    } else {
      console.log("Email sent successfully:", data);
    }
  } catch (error) {
    console.error("Failed to send email:", error);
  }

  // Redirect to success page
  redirect("/success");
}