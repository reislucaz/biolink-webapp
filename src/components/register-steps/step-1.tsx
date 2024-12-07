/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { RadioGroup } from "@radix-ui/react-radio-group";
import Image from "next/image";
import { FieldValues, UseFormReturn } from 'react-hook-form';
import Card from "../ui/card";
import { FormControl, FormField } from "../ui/form";
import { Label } from "../ui/label";
import { RadioGroupItem } from "../ui/radio-group";
import { ButtonsSection } from "./buttons-sections";
import { UserRegistrationSchemaType } from "@/validation/register-schema";

export enum UserTypeEnum {
  ADMIN = 'ADMIN',
  RECEPTOR = 'RECEPTOR',
  DONATOR = 'DOADOR'
}

export function RegisterStepOne({ form }:{form: UseFormReturn<FieldValues, UserRegistrationSchemaType, undefined>}) {

  return <Card> 
      <div className="flex flex-col justify-center items-center p-5 px-10 gap-10">
        <Image width={120} height={145} src="/logo.svg" alt="logo" className="size-20" />
        <div className="flex-col flex gap-5 justify-start w-full">
          <h3 className="text-background font-bold">Cadastro de Doadores e Receptores</h3>
          <h2 className="text-foreground font-bold">Deseja se cadastrar como:</h2>
        </div>
        <FormField name="type" render={({field}) => {
          return <FormControl>
              <RadioGroup name={field.name} onChange={field.onChange} defaultValue={field.value} className="flex -mt-5 flex-col gap-2 w-full justify-start ml-10">
                <FormControl>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value={UserTypeEnum.RECEPTOR} id="receptor" />
                    <Label htmlFor="receptor">Receptor</Label>
                  </div>
                </FormControl>
                <FormControl>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value={UserTypeEnum.DONATOR} id="doador" />
                    <Label htmlFor="doador">Doador</Label>
                  </div>
                </FormControl>
            </RadioGroup>
          </FormControl>
        }} />
        <ButtonsSection.Root>
          <ButtonsSection.FowardButton data={{
            type: form.watch('type')
          }} />
        </ButtonsSection.Root>
      </div>
  </Card>
}