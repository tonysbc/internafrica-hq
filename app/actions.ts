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
    email: formData.get("email") as string, // Customer's email
    phone: formData.get("phone") as string,
    destination: formData.get("destination") as string,
    startDate: formData.get("start_date") as string,
    endDate: formData.get("end_date") as string,
    program: formData.get("program") as string,
  };

  try {
    // Attempt to send the email
    const { data, error } = await resend.emails.send({
      // OPTION A: If Domain is NOT Verified yet (Testing Mode)
      // Use this line. It only allows sending TO your own email.
      from: "Intern Africa App <onboarding@resend.dev>",
      
      // OPTION B: If Domain IS Verified (Production Mode)
      // Uncomment this line once DreamHost DNS is green in Resend.
      // from: "Intern Africa App <application@send.internafricahq.org>", 

      // RECIPIENTS:
      // In Testing Mode, you can ONLY send to tonyseverines@gmail.com (if that's your account).
      // Once verified, you can uncomment the array to send to both.
      to: ["tonyseverines@gmail.com"], 
      // to: ["tonyseverines@gmail.com", "info@internafricahq.org"], 

      // CRITICAL: This enables the "Reply to Customer" feature
      reply_to: rawFormData.email, 
      
      subject: `New Application: ${rawFormData.name} - ${rawFormData.program}`,
      react: AdminEmail(rawFormData),
    });

    if (error) {
      // Log the specific error from Resend so you can see it in Vercel logs
      console.error("Resend API Error:", error);
      // If you want the user to see an error page instead of success, throw here.
      // throw new Error("Email failed");
    } else {
      console.log("Email sent successfully:", data);
    }
  } catch (error) {
    console.error("Failed to send email:", error);
  }

  // Redirect to success page
  redirect("/success");
}