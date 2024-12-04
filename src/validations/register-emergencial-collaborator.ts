import z from 'zod'

export const registerEmergencialCollaboratorSchema = z.object({
  name: z.boolean(),
  degreeOfKindShip: z.string(),
  phone: z.string(),
  password: z.string(),
  confirmPassword: z.string()
})

export type RegisterEmergencialCollaboratorSchema = z.infer<typeof registerEmergencialCollaboratorSchema>