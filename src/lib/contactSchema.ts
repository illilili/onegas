import { z } from "zod";

export const contactSchema = z.object({
  title: z.string().min(1).max(100),
  name: z.string().min(1).max(50),
  phone: z.string().min(7).max(30),
  email: z.string().email().max(100),
  company: z.string().max(100).optional().or(z.literal("")),
  message: z.string().min(1).max(2000),
  agree: z.boolean().refine((value) => value === true),
  // honeypot
  website: z.string().max(200).optional().or(z.literal("")),
});

export type ContactInput = z.infer<typeof contactSchema>;
