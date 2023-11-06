import * as z from "zod";

export const formSchema = z.object({
  email: z.string().min(2, { message: "min is 2" }).max(50),
  password: z.string().min(6).max(50),
});

export type formType = z.infer<typeof formSchema>;
