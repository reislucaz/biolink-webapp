import { useEffect } from "react";
import { StepsProps } from ".";
import Card from "../ui/card";
import { ButtonsSection } from "./buttons-sections";
import { InputForm } from "./forms/input-form";
import { RegisterHeader } from "./register-header";
import { useRegisterContext } from "@/app/contexts/registerContext";

export function RegisterStepFour({form}:StepsProps) {
  const type = form.watch('type')
  const password = form.watch('password')
  const confirmPassword = form.watch('password_confirmation')
  const {setForm} = useRegisterContext()

  useEffect(()=>{
    setForm((prev)=>{
      return {...prev, password, password_confirmation: confirmPassword}
    })
  },[password, setForm, confirmPassword])

  return <Card>
    <div className="flex flex-col justify-center items-center p-5 px-10 gap-5 min-w-[48rem]">
      <RegisterHeader title={`CADASTRO ${type}`} subtitle="AUTENTICAÇÃO"/>
      <div className="w-full grid grid-cols-12 gap-2 items-center">
      <InputForm classname="col-span-6" label="Senha" name="password" type="password" stepProps={{form}} placeholder="Insira sua senha"/>
      <InputForm classname="col-span-6" label="Confirme sua senha" name="password_confirmation" stepProps={{form}} type="password" placeholder="Insira sua senha novamente"/>
      </div>
      <ButtonsSection.Root>
        <ButtonsSection.BackwardsButton />
        <ButtonsSection.StepsIndicator />
        <ButtonsSection.FinishButton />
      </ButtonsSection.Root>
    </div>
  </Card>
}