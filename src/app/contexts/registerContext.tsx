'use client'

import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react"

interface RegisterContextProps {
  step: number
  setStep: Dispatch<SetStateAction<number>>
  handleChangeStepFoward: () => void
  handleChangeStepBackwards: () => void
}

export const RegisterContext = createContext<RegisterContextProps>({} as RegisterContextProps)

export function RegisterProvider({ children }: { children: ReactNode }) {
  const [step, setStep] = useState(1)

  function handleChangeStepFoward() {
    const isLastStep = step === 5
    if(!isLastStep) setStep((prev) =>  prev + 1)
  }

  function handleChangeStepBackwards() {
    const isFirstStep = step === 0
    if(!isFirstStep) setStep((prev) =>  prev - 1)
  }

  return <RegisterContext.Provider value={{ step, setStep, handleChangeStepBackwards, handleChangeStepFoward }}>
    {children}
  </RegisterContext.Provider>
}

export function useRegisterContext() {
  const registerContext = useContext(RegisterContext)
  return registerContext
}