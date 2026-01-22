import { z } from "zod";

export const contactFormSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(/^[\d\s\-\(\)+]+$/, "Invalid phone number"),
  companyName: z.string().min(2, "Company name required"),
  businessType: z.string().optional(),
  message: z.string().max(500, "Message must be 500 characters or less").optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
