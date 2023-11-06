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
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { formInputFields } from "@/lib/form/const";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { toast, useToast } from "@/components/ui/use-toast";

const Signin = () => {
  const router = useRouter();
  const form = useForm<formType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onValidSubmit(values: formType) {
    console.log(values);
    // const user: formType = { email: "test123@gmail.com", password: "123456" };
    const fromDb = JSON.parse(localStorage.getItem("users")!) as formType;
    console.log(fromDb);
    if (fromDb) {
      if (
        values.email === fromDb.email &&
        values.password === fromDb.password
      ) {
        console.log("loggedin");
        router.push("/");
      }
    }
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  function onInValidSubmit(errors: FieldErrors<formType>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.

    toast({
      title: "Something went wrong",
      description: "Authentication",
    });

    console.log(errors);
  }
  return (
    <div className="w-full h-[100svh] flex justify-center items-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onValidSubmit, onInValidSubmit)}
          className="space-y-8 border"
        >
          <Label>TEST</Label>
          {formInputFields.map(({ name, errorMsg, placeholder }, index) => {
            return (
              <FormField
                key={name}
                control={form.control}
                name={name}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{name}</FormLabel>
                    <FormControl>
                      <Input placeholder={placeholder} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            );
          })}
          <Button type="submit">Submit</Button>
        </form>
        <Link href={"/auth/sign-up"}>Sign up</Link>
      </Form>
    </div>
  );
};

export default Signin;
