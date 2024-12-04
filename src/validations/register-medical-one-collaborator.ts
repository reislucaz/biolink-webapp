import z from 'zod'

export const registerMedicalOneCollaboratorSchema = z.object({
  bloodType: z.string(),
  rhFactor: z.string(),
  healthConditions: z.string(),
  medicalHistory: z.string(),
  alergies: z.string(),
  continuosMeds: z.string(),
})

export type RegisterMedicalOneCollaboratorSchema = z.infer<typeof registerMedicalOneCollaboratorSchema>