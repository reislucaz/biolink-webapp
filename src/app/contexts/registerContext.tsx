/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react"
import {useMutation} from 'react-query'
import axios from 'axios'

// DTO para informações básicas de cadastro de usuário
export interface IUserRegistrationDTO {
  name: string;
  email: string;
  password: string;
  password_confirmation: string; // Para validação do campo "confirmed"
  type: 'RECEPTOR' | 'DOADOR' | 'ADMIN';
  birth_date: string; // Formato ISO 8601 (yyyy-MM-dd)
  cpf: string;  
  rg?: string;
  nationality?: string;
  gender: 'MASC' | 'FEM';
  address?: string;
  district?: string;
  city?: string;
  state?: string;
  zip_code?: string;
  phone?: string;

  // Campos adicionais específicos para RECEPTOR
  blood_type?: string; // Obrigatório se for RECEPTOR
  rh_factor?: string; // Obrigatório se for RECEPTOR
  health_problems?: string;
  medical_history?: string;
  transplant_history?: string;
  required_organ?: string; // Obrigatório se for RECEPTOR

  // Campos adicionais específicos para DOADOR
  organs_to_donate?: string[]; // Obrigatório se for DOADOR
  preexisting_conditions?: string;
  allergies?: string;
  continuous_medication?: string;
  alcohol_consumer?: boolean; // Obrigatório se for DOADOR
  smoker?: boolean; // Obrigatório se for DOADOR
  family_history?: string;
}

interface RegisterContextProps {
  step: number
  setStep: Dispatch<SetStateAction<number>>
  handleChangeStepFoward: () => void
  handleChangeStepBackwards: () => void
  form: Partial<IUserRegistrationDTO>
  setForm: Dispatch<SetStateAction<Partial<IUserRegistrationDTO>>>
  handleUserRegistration: (body: Partial<IUserRegistrationDTO>)=> Promise<any>
  isLoading: boolean
}

export const RegisterContext = createContext<RegisterContextProps>({} as RegisterContextProps)

async function registerUser(body: Partial<IUserRegistrationDTO>){
  const { data } = await axios.post('/register', body)
  return data
}

export function RegisterProvider({ children }: { children: ReactNode }) {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState<Partial<IUserRegistrationDTO>>({} as IUserRegistrationDTO)
  const {mutateAsync, isLoading} = useMutation({
    mutationFn: registerUser,
  })

  function handleChangeStepFoward() {
    const isLastStep = step === 4
    if(!isLastStep) setStep((prev) =>  prev + 1)
  }

  function handleChangeStepBackwards() {
    const isFirstStep = step === 0
    if(!isFirstStep) setStep((prev) =>  prev - 1)
  }

  return <RegisterContext.Provider value={{ step, setStep, handleChangeStepBackwards, handleChangeStepFoward, form, setForm, handleUserRegistration: mutateAsync, isLoading }}>
    {children}
  </RegisterContext.Provider>
}

export function useRegisterContext() {
  const registerContext = useContext(RegisterContext)
  return registerContext
}