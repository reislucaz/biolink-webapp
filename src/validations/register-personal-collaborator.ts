import z from 'zod'

export const registerPersonalCollaboratorSchema = z.object({
  name: z.string(),
  nacionality: z.string(),
  bornDate: z.date(),
  sex: z.string(),
  cpf: z.string(),
  rg: z.string(),
  email: z.string().email(),
  phone: z.string(),
  address: z.string(),
  neighborhood: z.string(),
  number: z.string(),
  city: z.string(),
  state: z.string(),
  cep: z.string()
})

export type RegisterPersonalCollaboratorType = z.infer<typeof registerPersonalCollaboratorSchema>