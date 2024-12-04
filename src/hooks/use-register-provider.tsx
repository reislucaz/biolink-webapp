import { zodResolver } from '@hookform/resolvers/zod'
import { createContext, useContext, type ReactNode } from 'react'
import { useForm, type UseFormReturn } from 'react-hook-form'
import { registerEmergencialCollaboratorSchema, RegisterEmergencialCollaboratorSchema } from '../validations/register-emergencial-collaborator'
import { registerMedicalOneCollaboratorSchema, RegisterMedicalOneCollaboratorSchema } from '../validations/register-medical-one-collaborator'
import { registerMedicalTwoCollaboratorSchema, RegisterMedicalTwoCollaboratorSchema } from '../validations/register-medical-two-collaborator'
import { registerPersonalCollaboratorSchema, RegisterPersonalCollaboratorType } from '../validations/register-personal-collaborator'

type RegisterStepsContextType = {
  personalForm: UseFormReturn<RegisterPersonalCollaboratorType>
  MedicalOneForm: UseFormReturn<RegisterMedicalOneCollaboratorSchema>
  MedicalTwoForm: UseFormReturn<RegisterMedicalTwoCollaboratorSchema>
  EmergencialForm: UseFormReturn<RegisterEmergencialCollaboratorSchema>
}

const RegisterStepsContext = createContext<RegisterStepsContextType>(
  {} as RegisterStepsContextType,
)

type Props = {
  children: ReactNode
}

export function RegisterStepsProvider({ children }: Props) {

  const personalForm = useForm<RegisterPersonalCollaboratorType>({
    resolver: zodResolver(registerPersonalCollaboratorSchema),
  })

  const MedicalOneForm = useForm<RegisterMedicalOneCollaboratorSchema>({
    resolver: zodResolver(registerMedicalOneCollaboratorSchema),
  })

  const MedicalTwoForm = useForm<RegisterMedicalTwoCollaboratorSchema>({
    resolver: zodResolver(registerMedicalTwoCollaboratorSchema),
  })

  const EmergencialForm = useForm<RegisterEmergencialCollaboratorSchema>({
    resolver: zodResolver(registerEmergencialCollaboratorSchema),
  })

  return (
    <RegisterStepsContext.Provider
      value={{
        personalForm,
        MedicalOneForm,
        MedicalTwoForm,
        EmergencialForm,
      }}
    >
      {children}
    </RegisterStepsContext.Provider>
  )
}

export function useRegisterStepsProvider() {
  const context = useContext(RegisterStepsContext)

  if (!context) {
    throw new Error(
      'useRegisterStepsProvider deve ser usado dentro de um RegisterStepsProvider',
    )
  }

  return context
}
