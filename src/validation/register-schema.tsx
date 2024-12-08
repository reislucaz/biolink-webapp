import { z } from 'zod';

// Objeto Zod para validar o DTO de registro de usuário
export const UserRegistrationSchema = z.object({
  name: z.string().max(255, "O nome deve ter no máximo 255 caracteres."),
  email: z
    .string()
    .email("E-mail inválido.")
    .max(255, "O e-mail deve ter no máximo 255 caracteres."),
  password: z.string().min(8, "A senha deve ter no mínimo 8 caracteres."),
  password_confirmation: z.string(),
  type: z.enum(['RECEPTOR', 'DOADOR', 'ADMIN'], {message: "Tipo de usuário inválido."}),
  birth_date: z.string().refine(
    (date) => !isNaN(Date.parse(date)),
    "Data de nascimento inválida."
  ),
  cpf: z.string().max(14, "O CPF deve ter no máximo 14 caracteres."),
  rg: z.string().max(20).optional(),
  nationality: z.string().max(100).optional(),
  gender: z.enum(['MASC', 'FEM'], {message: "Gênero inválido."}),
  address: z.string().max(255).optional(),
  district: z.string().max(100).optional(),
  city: z.string().max(100).optional(),
  state: z.string().max(100).optional(),
  zip_code: z.string().max(10).optional(),
  phone: z.string().max(15).optional(),

  // Campos adicionais para RECEPTOR
  blood_type: z.string().max(3, "O tipo sanguíneo deve ter no máximo 3 caracteres.").optional(),
  rh_factor: z.string().max(3, "O fator RH deve ter no máximo 3 caracteres.").optional(),
  health_problems: z.string().optional(),
  medical_history: z.string().optional(),
  transplant_history: z.string().optional(),
  required_organ: z.string().max(100).optional(),

  // Campos adicionais para DOADOR
  organs_to_donate: z.array(z.string()).optional(),
  preexisting_conditions: z.string().optional(),
  allergies: z.string().optional(),
  continuous_medication: z.string().optional(),
  alcohol_consumer: z.boolean().optional(),
  smoker: z.boolean().optional(),
  family_history: z.string().optional(), 
}).refine(
  (data) => data.password === data.password_confirmation,
  {
    message: "A confirmação da senha não corresponde à senha.",
    path: ["password_confirmation"],
  }
);

export type UserRegistrationSchemaType = z.infer<typeof UserRegistrationSchema>