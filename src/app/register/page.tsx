'use client'
import { RegisterSteps } from "@/components/register-steps";
import { RegisterProvider } from "../contexts/registerContext";

export default function Register() {
  return <RegisterProvider>
    <RegisterSteps />
  </RegisterProvider>
}