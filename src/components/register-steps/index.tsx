/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { useRegisterContext } from "@/app/contexts/registerContext";
import { RegisterStepOne } from "./step-1";
import { RegisterStepTwo } from "./step-2";
import { RegisterStepThree } from "./step-3";
import { RegisterStepFour } from "./step-4";
import { RegisterStepFive } from "./step-5";
import { FieldValues, UseFormReturn } from "react-hook-form";
import { UserRegistrationSchemaType } from "@/validation/register-schema";

export interface StepsProps {form: UseFormReturn<FieldValues, UserRegistrationSchemaType, undefined>}

export function RegisterSteps({form}: StepsProps) {
  const { step } = useRegisterContext()

  switch (step) {
    case 1:
      return <RegisterStepOne form={form} />
    case 2:
      return <RegisterStepTwo form={form} />
    case 3:
      return <RegisterStepThree form={form} />
    case 4:
      return <RegisterStepFour />
    case 5:
      return <RegisterStepFive />
    default:
      return <RegisterStepOne form={form} />
  }
}