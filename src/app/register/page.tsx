/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { RegisterSteps } from "@/components/register-steps";
import { Form } from "@/components/ui/form";
import { UserRegistrationSchema, UserRegistrationSchemaType } from "@/validation/register-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { RegisterProvider } from "../contexts/registerContext";

export default function Register() {
  const form = useForm<UserRegistrationSchemaType>({
    resolver: zodResolver(UserRegistrationSchema)
  })
  return <RegisterProvider>
     <Form {...form}>
      <form action="">
        <RegisterSteps form={form as any}/>
      </form>
    </Form>
  </RegisterProvider>
}