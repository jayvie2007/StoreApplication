"use client";
import React from "react";
import { FieldErrors, useForm } from "react-hook-form";
import { type formType, formSchema } from "@/lib/form/form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { formInputFields } from "@/lib/form/const";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Signup = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onValidSubmit(values: formType) {
    console.log(values);
    localStorage.setItem("users", JSON.stringify(values));

    router.push("/auth/sign-in");
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  function onInValidSubmit(errors: FieldErrors<formType>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(errors);
  }
  return (
    <div className="w-full h-[100svh] flex flex-col justify-center items-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onValidSubmit, onInValidSubmit)}
          className="h-auto w-[80%] md:w-[clamp(300px,30%,25vw)] bg-white rounded-2xl drop-shadow-xl p-8 py-10 space-y-8 border"
        >
          <div className="flex flex-col gap-y-4 text-center">
            <Label className=" flex justify-center font-bold text-center text-2xl">
              Login
            </Label>
            <Label className=" text-primary/90">
              Hey, Enter your details to Sign in your account
            </Label>
          </div>
          {formInputFields.map(({ name, errorMsg, placeholder }, index) => {
            return (
              <FormField
                key={name}
                control={form.control}
                name={name}
                render={({ field }) => (
                  <FormItem>
                    {/* <FormLabel>{name}</FormLabel> */}
                    <FormControl>
                      <Input placeholder={placeholder} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            );
          })}
          <div className="flex flex-col text-center gap-y-4">
            <Button type="submit" className="w-full">
              Submit
            </Button>
            <Link
              href={"/auth/sign-in"}
              // className={`${buttonVariants({ variant: "outline" })} w-full`}
              className={`text-xs w-full`}
            >
              Already have an account ?{" "}
              <span className="underline underline-offset-2"> Sin in here</span>
            </Link>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default Signup;
