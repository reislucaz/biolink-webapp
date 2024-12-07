'use client'

import { IUserRegistrationDTO, useRegisterContext } from "@/app/contexts/registerContext";
import { Button } from "../ui/button";
import { StepsIndicator } from "./steps-indicator";
import { ReactNode } from "react";

function BackwardsButton(){
  const { handleChangeStepBackwards } = useRegisterContext()
  return <Button onClick={handleChangeStepBackwards} size='xl'>Anterior</Button>
}

function FowardButton({ data }: {data?: Partial<IUserRegistrationDTO>}){
  const { handleChangeStepFoward, setForm } = useRegisterContext()
  return <Button onClick={()=>{
    handleChangeStepFoward()
    setForm({...data})
    console.log(data)
  }} size='xl'>Próximo</Button>
}

function Root({children}: {children: ReactNode}) {
  return <div className="flex justify-between items-center">
    {children}
  </div>
}

export const ButtonsSection = {
  Root,
  BackwardsButton,
  FowardButton,
  StepsIndicator
}