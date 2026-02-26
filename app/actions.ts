"use server";

import { Resend } from "resend";
import { AdminEmail } from "../components/AdminEmail";
import { redirect } from "next/navigation";
import { applicationSchema } from "@/lib/validations";

// YOUR REAL API KEY
const resend = new Resend("re_bVMcaP4g_JDg7WcbdDhHviM7CXxgDw7Go"); 

export type FormState = {
  success: boolean;
  errors?: Record<string, string[]>;
  message?: string;
};

export async function submitApplication(prevState: any, formData: FormData): Promise<FormState | void> {
  const dataObject = Object.fromEntries(formData.entries());
  
  const validationResult = applicationSchema.safeParse(dataObject);

  if (!validationResult.success) {
    return {
      success: false,
      errors: validationResult.error.flatten().fieldErrors as Record<string, string[]>,
      message: "Please fix the errors in the form.",
    };
  }

  const validatedData = validationResult.data;

  const rawFormData = {
    name: validatedData.name,
    lastname: validatedData.lastname,
    email: validatedData.email,
    phone: validatedData.phone,
    destination: validatedData.destination,
    startDate: validatedData.start_date,
    endDate: validatedData.end_date,
    program: validatedData.program,
  };

  try {
    // Attempt to send the email
    const { data, error } = await resend.emails.send({
      from: "Intern Africa App <application@internafricahq.org>", 
      to: ["tonyseverines@gmail.com", "info@internafricahq.org"], 
      headers: {
        "Reply-To": rawFormData.email,
      },
      subject: `New Application: ${rawFormData.name}`,
      react: AdminEmail(rawFormData),
    });

    if (error) {
      console.error("Resend API Error:", error);
      return {
        success: false,
        message: "Failed to send application. Please try again later.",
      };
    }
  } catch (error) {
    console.error("Failed to send email:", error);
    return {
      success: false,
      message: "An unexpected error occurred. Please try again later.",
    };
  }

  // Always redirect to success so the user isn't stuck
  redirect("/success");
}