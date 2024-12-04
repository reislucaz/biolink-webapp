import z from 'zod'

export const registerMedicalTwoCollaboratorSchema = z.object({
  beforeHistory: z.boolean(),
  organ: z.string(),
  timeInWaitList: z.string(),
  organNeeded: z.string(),
})

export type RegisterMedicalTwoCollaboratorSchema = z.infer<typeof registerMedicalTwoCollaboratorSchema>