'use client'

import { IUserRegistrationDTO, useRegisterContext } from "@/app/contexts/registerContext";
import { Button } from "../ui/button";
import { StepsIndicator } from "./steps-indicator";
import { ReactNode } from "react";
import Spinner from "../ui/spinner";

function BackwardsButton(){
  const { handleChangeStepBackwards } = useRegisterContext()
  return <Button onClick={handleChangeStepBackwards} size='xl'>Voltar</Button>
}

function FowardButton({ data, title }: {data?: Partial<IUserRegistrationDTO>, title?: string}){
  const { handleChangeStepFoward, setForm, form } = useRegisterContext()
  return <Button onClick={()=>{
    handleChangeStepFoward()
    setForm((prev)=> {
      return {...prev, ...data}
    })
    console.log(form)
  }} size='xl'>{title ?? "Próximo"}</Button>
}

function FinishButton(){
  const { handleUserRegistration, form, isLoading } = useRegisterContext()
  return isLoading ? <Button size='xl'><Spinner /></Button> : <Button onClick={async ()=>{
    await handleUserRegistration(form)
  }} size='xl'>Finalizar</Button>
}

function Root({children}: {children: ReactNode}) {
  return <div className="flex justify-between items-center w-full">
    {children}
  </div>
}

export const ButtonsSection = {
  Root,
  BackwardsButton,
  FowardButton,
  StepsIndicator,
  FinishButton
}