/* eslint-disable @typescript-eslint/no-explicit-any */
import { StepsProps } from ".";
import Card from "../ui/card";
import { FormControl, FormField } from "../ui/form";
import { Label } from "../ui/label";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { ButtonsSection } from "./buttons-sections";
import { FormFieldCombobox } from "./forms/combobox-form";
import { SelectForm } from "./forms/select-form";
import { TextAreaForm } from "./forms/text-area-input";
import { RegisterHeader } from "./register-header";
import { UserTypeEnum } from "./step-1";

export function RegisterStepThree({form}: StepsProps) {
  const type = form.watch('type')
  const bloodType = [
    {
      label: 'A+',
      value: 'A+',
    },
    {
      label: 'A-',
      value: 'A-',
    },
    {
      label: 'B+',
      value: 'B+',
    },
    {
      label: 'B-',
      value: 'B-',
    },
    {
      label: 'AB+',
      value: 'AB+',
    },
    {
      label: 'AB-',
      value: 'AB-',
    },
    {
      label: 'O+',
      value: 'O+',
    },
    {
      label: 'O-',
      value: 'O-',
    },
  ];

  const rhFactor = [
    {
      label: 'Positivo',
      value: '+',
    },
    {
      label: 'Negativo',
      value: '-',
    },
  ];

  const organsToDonate = [
    {
      label: 'Coração',
      value: 'HEART',
    },
    {
      label: 'Pulmões',
      value: 'LUNGS',
    },
    {
      label: 'Fígado',
      value: 'LIVER',
    },
    {
      label: 'Rins',
      value: 'KIDNEYS',
    },
    {
      label: 'Pâncreas',
      value: 'PANCREAS',
    },
    {
      label: 'Intestino',
      value: 'INTESTINE',
    },
    {
      label: 'Córneas',
      value: 'CORNEAS',
    },
    {
      label: 'Tecido Ósseo',
      value: 'BONE_TISSUE',
    },
    {
      label: 'Pele',
      value: 'SKIN',
    },
    {
      label: 'Medula Óssea',
      value: 'BONE_MARROW',
    },
  ];
  
  
  
  return <Card>
   <div className="flex flex-col justify-center items-center p-5 px-10 gap-5 min-w-[64rem]">
    <RegisterHeader title={`CADASTRO ${type}`} subtitle="INFORMAÇÕES MÉDICAS"/>
    <div className="w-full grid grid-cols-12 gap-2 items-center">
      <SelectForm form={form} label="Tipo sanguíneo" name="blood_type" placeholder="Selecione o tipo sanguíneo" items={bloodType} classname="col-span-6"/>
      <SelectForm form={form} label="Fator RH" name="rh_factor" placeholder="Selecione o fator RH" items={rhFactor} classname="col-span-6"/>
      {type === UserTypeEnum.RECEPTOR && <>
        <TextAreaForm classname="col-span-12" label="Condições de saúde que exigem transplante:" name="health_problems" stepProps={{form}} placeholder="Insira suas condições de saúde que exijam transplante"/>
        <TextAreaForm classname="col-span-12" label="Histórico médico:" name="medical_history" stepProps={{form}} placeholder="(Inclua cirurgias e doenças crônicas)"/>
      </>}
      {type === UserTypeEnum.DONATOR && <TextAreaForm classname="col-span-12" label="Condições de saúde preexistentes:" name="medical_history" stepProps={{form}} placeholder="(Inclua cirurgias e doenças crônicas)"/>}
      <TextAreaForm classname="col-span-6" label="Alergias" name="allergies" stepProps={{form}} placeholder="Insira suas alergias caso possua"/>
      <TextAreaForm classname="col-span-6" label="Medicamentos de uso contínuo" name="continuous_medication" stepProps={{form}} placeholder="Insira caso possua medicamentos de uso contínuo"/>
        {type === UserTypeEnum.DONATOR && <div className="flex col-span-4 gap-2">
          <h3 className="font-bold text-lg">Fumante:</h3>
          <FormField name="smoker" render={({field}) => {
            return <FormControl>
                <RadioGroup name={field.name} onChange={field.onChange} defaultValue={field.value} className="flex gap-2 w-full justify-start">
                  <FormControl>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="sim" id="sim" />
                      <Label htmlFor="sim">Sim</Label>
                    </div>
                  </FormControl>
                  <FormControl>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="nao" id="nao" />
                      <Label htmlFor="nao">Não</Label>
                    </div>
                  </FormControl>
              </RadioGroup>
            </FormControl>
          }} />
        </div>}
        {type === UserTypeEnum.DONATOR && <div className="flex gap-2 col-span-4">
          <h3 className="font-bold text-lg text-nowrap">Bebida alcoólica:</h3>
          <FormField name="alcohol_consumer" render={({field}) => {
            return <FormControl>
                <RadioGroup name={field.name} onChange={field.onChange} defaultValue={field.value} className="flex gap-2 w-full justify-start">
                  <FormControl>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="sim" id="alcool_yes" />
                      <Label htmlFor="alcool_yes">Sim</Label>
                    </div>
                  </FormControl>
                  <FormControl>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="nao" id="alcool_no" />
                      <Label htmlFor="alcool_no">Não</Label>
                    </div>
                  </FormControl>
              </RadioGroup>
            </FormControl>
          }} />
        </div>}
      {type === UserTypeEnum.DONATOR && <FormField  name="organs_to_donate" render={({field})=><FormFieldCombobox classname="col-span-4 w-full"  options={organsToDonate} field={field} placeholder="Órgãos a serem doados"/>}/>}
      {type === UserTypeEnum.DONATOR && <TextAreaForm classname="col-span-12 w-full" label="Histórico familiar (Opcional)" name="family_history" stepProps={{form}} placeholder="Insira caso possua algum histórico de doenças genéticas"/>}
    </div>
      <ButtonsSection.Root>
        <ButtonsSection.BackwardsButton />
        <ButtonsSection.StepsIndicator />
        <ButtonsSection.FowardButton data={{
          blood_type: form.watch('blood_type'),
          rh_factor: form.watch('rh_factor'),
          health_problems: form.watch('health_problems'),
          medical_history: form.watch('medical_history'),
          allergies: form.watch('allergies'),
          continuous_medication: form.watch('continuous_medication'),
          alcohol_consumer: form.watch('alcohol_consumer') === 'sim' ? true : false,
          smoker: form.watch('smoker') === 'sim' ? true : false,
          organs_to_donate: form.watch('organs_to_donate')?.map((item: any)=>item.value) ?? []
        }} />
      </ButtonsSection.Root>
    </div>
  </Card>
}