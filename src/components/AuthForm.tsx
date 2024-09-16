"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import CustomInput from "./CustomInput";
import { authFormSchema } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { getLoggedInUser, signIn, signUp } from "../lib/actions/user.actions";

const AuthForm = ({ type }: { type: string }) => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const formSchema = authFormSchema(type);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      clientid: "",
      password: ""
    },
  })
 
  // 2. Define a submit handler.
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    try {
      // Sign up with Appwrite & create plaid token
      
      if(type === 'sign-up') {
        const userData = {
          clientid: data.clientid,
          firstName: data.firstName,
          lastName: data.lastName,
          password: data.password,
          confirmPassword:data.confirmPassword
        }
        // const newUser = await signUp(userData);
        // setUser(newUser);
      }

      if(type === 'sign-in') {
        console.log(data.clientid, data.password)
        const response:any = await signIn({
          clientid: data.clientid,
          password: data.password,
        });
        console.log(response)
        if(response.message!="Invalid credentials") router.push('/')
        
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section className="auth-form">
      <header className="flex flex-col gap-5 md:gap-8">
        <Link href="/" className="cursor-pointer flex item-center gap-1">
          <Image
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="vivekfinance"
          />
          <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
            Finance
          </h1>
        </Link>

        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
            {user ? "Link Account" : type === "sign-in" ? "Sign-In" : "Sign-Up"}
          </h1>
          <p className="text-16 font-normal text-gray-600">
            {user
              ? "Link your account to get started"
              : "Please enter your details"}
          </p>
        </div>
      </header>
      {user ? (
        <div className="flex flex-col gap-4">{/* plaidlink */}</div>
      ) : (
        <>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

            <CustomInput control={form.control}  name="clientid" label="Client ID" placeholder="Enter client ID" />


              {type==="sign-up" && (
                <>
                  <div className="flex gap-4">
                    <CustomInput control={form.control}  name="firstName" label="First Name" placeholder="Enter First name" />
                    <CustomInput control={form.control}  name="lastName" label="Last Name" placeholder="Enter Last name" />
                  </div>
                </>
              )}
              <CustomInput control={form.control}  name="password" label="Password" placeholder="Enter Password" />
              {type==="sign-up" && (
                <>
                <CustomInput control={form.control}  name="confirmPassword" label="Confirm Password" placeholder="Confirm Password" />
                </>
              )}
              <div className="flex flex-col gap-4">
                <Button type="submit" disabled={isLoading} className="form-btn">
                  {isLoading ? (
                    <>
                      <Loader2 size={20}
                      className="animate-spin" /> &nbsp;
                      Loading...
                    </>
                  ):
                    type === "sign-in" ? "Sign-In" : "Sign-Up"
                }
                </Button>
              </div>
            </form>
          </Form>

          <footer className="flex justify-center gap-1">
              <p className="text-14 font-normal text-gray-600">{type === "sign-in" ? "Don't have an account?" : "Already have an account?"}</p>
              <Link className="form-link" href={type === "sign-in" ? "/sign-up" : "/sign-in"}>
                {type === "sign-in" ? "Sign Up" : "Sign-In"}
              </Link>
          </footer>
        </>
      )}
    </section>
  );
};

export default AuthForm;
