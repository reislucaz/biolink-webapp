import { StepsProps } from ".";
import Card from "../ui/card";
import { ButtonsSection } from "./buttons-sections";
import { SelectForm } from "./forms/select-form";
import { TextAreaForm } from "./forms/text-area-input";
import { RegisterHeader } from "./register-header";

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
  
  
  return <Card>
   <div className="flex flex-col justify-center items-center p-5 px-10 gap-5 min-w-[64rem]">
    <RegisterHeader title={`CADASTRO ${type}`} subtitle="INFORMAÇÕES MÉDICAS"/>
    <div className="w-full grid grid-cols-12 gap-2 items-center">
      <SelectForm form={form} label="Tipo sanguíneo" name="blood_type" placeholder="Selecione o tipo sanguíneo" items={bloodType} classname="col-span-6"/>
      <SelectForm form={form} label="Fator RH" name="rh_factor" placeholder="Selecione o fator RH" items={rhFactor} classname="col-span-6"/>
      <TextAreaForm classname="col-span-12" label="Condições de saúde que exigem transplante:" name="health_problems" stepProps={{form}} placeholder="Insira suas condições de saúde que exijam transplante"/>
      <TextAreaForm classname="col-span-12" label="Histórico médico:" name="medical_history" stepProps={{form}} placeholder="(Inclua cirurgias e doenças crônicas)"/>
      <TextAreaForm classname="col-span-6" label="Alergias" name="allergies" stepProps={{form}} placeholder="Insira suas alergias caso possua"/>
      <TextAreaForm classname="col-span-6" label="Medicamentos de uso contínuo" name="continuous_medication" stepProps={{form}} placeholder="Insira caso possua medicamentos de uso contínuo"/>
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
        }} />
      </ButtonsSection.Root>
    </div>
  </Card>
}