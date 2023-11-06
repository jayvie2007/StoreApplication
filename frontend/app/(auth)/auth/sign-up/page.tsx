"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FieldErrors, useForm } from "react-hook-form";
import {
  TSignInValidation,
  TSignUpValidation,
  signUpSchema,
} from "@/lib/form-schema";
import { formInputFieldsSignUp } from "@/lib/constant/form/form";
import { cn } from "@/lib/utils";

const Signup = () => {
  const router = useRouter();
  const form = useForm<TSignUpValidation>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      password: "",
      // confirmPassword: "",
    },
  });

  function onValidSubmit(values: TSignInValidation) {
    console.log(values);
    localStorage.setItem("users", JSON.stringify(values));

    router.push("/auth/sign-in");
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  function onInValidSubmit(errors: FieldErrors<TSignInValidation>) {
    console.log(errors);
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(errors);
  }
  return (
    <div className="w-full h-[100svh] flex flex-col justify-center items-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onValidSubmit, onInValidSubmit)}
          className="h-auto w-[80%] md:w-[clamp(500px,30%,25vw)] bg-white rounded-2xl drop-shadow-xl p-8 py-10 space-y-8 border"
        >
          <div className="flex flex-col gap-y-4 text-center">
            <Label className=" flex justify-center font-bold text-center text-2xl">
              Register
            </Label>
            <Label className=" text-primary/90">
              Hey, Enter your details to Sign in your account
            </Label>
          </div>
          <div className="grid grid-cols-2 gap-2 place-items-stretch">
            {formInputFieldsSignUp.map(({ name, placeHolder }, index) => {
              return (
                <FormField
                  key={name}
                  control={form.control}
                  name={name}
                  render={({ field }) => (
                    <FormItem
                      className={cn({
                        "w-full hover:place-items-stretch": name === "address",
                      })}
                    >
                      <FormControl>
                        <Input placeholder={placeHolder} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              );
            })}
          </div>
          <div className="flex flex-col text-center gap-y-4">
            <Button type="submit" className="w-full">
              Sign up
            </Button>
            <Link href={"/auth/sign-in"} className={`text-xs w-full`}>
              Already have an account ?
              <span className="underline underline-offset-2">
                {" "}
                Sign in here
              </span>
            </Link>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default Signup;
