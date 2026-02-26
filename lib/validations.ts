import { z } from "zod";

export const applicationSchema = z.object({
  name: z.string().min(2, "First name must be at least 2 characters."),
  lastname: z.string().min(2, "Last name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().min(5, "Please enter a valid phone number."),
  destination: z.enum(["Tanzania", "Zanzibar"], {
    message: "Please select a destination.",
  }),
  start_date: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Please enter a valid start date.",
  }),
  end_date: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Please enter a valid end date.",
  }),
  program: z.string().min(1, "Please select a program of interest."),
});

export type ApplicationInput = z.infer<typeof applicationSchema>;
