import { z } from "zod";

export const signInSchema = z.object({
  email: z.string().min(1, { message: "Email is required" }).email({
    message: "Must be a valid email",
  }),
  password: z
    .string()
    .min(6, { message: "Password must be atleast 6 characters" }),
});

export const signUpSchema = signInSchema
  .extend({
    username: z.string().min(1, { message: "Username is required" }),
    firstName: z.string().min(1, { message: "Firstname is required" }),
    lastName: z.string().min(1, { message: "Lastname is required" }),
    birthday: z.string().min(1, { message: "Birthday is required" }),
    address: z.string().min(1, { message: "Address is required" }),
    mobile: z.string().min(1, { message: "Mobile is required" }),
    confirmPassword: z
      .string()
      .min(1, { message: "Confirm Password is required" }),
    terms: z.literal(true, {
      errorMap: () => ({ message: "You must accept Terms and Conditions" }),
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Password don't match",
  });

export type TSignInValidation = z.infer<typeof signInSchema>;
export type TSignUpValidation = z.infer<typeof signUpSchema>;
