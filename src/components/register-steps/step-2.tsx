import { StepsProps } from ".";
import Card from "../ui/card";
import { ButtonsSection } from "./buttons-sections";
import { CalendarForm } from "./forms/calendar-form";
import { InputForm } from "./forms/input-form";
import { SelectForm } from "./forms/select-form";
import { RegisterHeader } from "./register-header";

export function RegisterStepTwo({form}: StepsProps) {
  const type = form.watch('type')
  const items = [
    {
      label: 'Masculino',
      value: 'MASC'
    },
    {
      label: 'Feminino',
      value: 'FEM'
    }
  ]
  return <Card> 
  <div className="flex flex-col justify-center items-center p-5 px-10 gap-5">
    <RegisterHeader title={`CADASTRO ${type}`} subtitle="DADOS PESSOAIS"/>
    <div className="w-full grid grid-cols-12 gap-2 items-center">
      <InputForm classname="col-span-10" label="Nome" name="name" stepProps={{form}} placeholder="Insira seu nome"/>
      <InputForm classname="col-span-2" label="Nacionalidade" name="nationality" stepProps={{form}} placeholder="Insira sua nacionalidade"/>
      <CalendarForm form={form} label="Data de nascimento" name="birth_date" classname="col-span-3" />
      <SelectForm form={form} label="Sexo" name="gender" placeholder="Selecione o gênero" items={items} classname="col-span-3"/>
      <InputForm classname="col-span-3" label="CPF" name="cpf" stepProps={{form}} placeholder="Insira seu cpf"/>
      <InputForm classname="col-span-3" label="RG" name="rg" stepProps={{form}} placeholder="Insira seu rg"/>
      <InputForm classname="col-span-6" label="Email" name="email" stepProps={{form}} placeholder="Insira seu email"/>
      <InputForm classname="col-span-6" label="Telefone" name="phone" stepProps={{form}} placeholder="Insira seu telefone"/>
      <InputForm classname="col-span-6" label="Endereço" name="address" stepProps={{form}} placeholder="Insira seu endereço"/>
      <InputForm classname="col-span-6" label="Bairro" name="district" stepProps={{form}} placeholder="Insira seu bairro"/>
      <InputForm classname="col-span-4" label="Cidade" name="city" stepProps={{form}} placeholder="Insira sua cidade"/>
      <InputForm classname="col-span-4" label="Estado" name="state" stepProps={{form}} placeholder="Insira seu estado"/>
      <InputForm classname="col-span-4" label="CEP" name="zip_code" stepProps={{form}} placeholder="Insira seu CEP"/>
    </div>
    <ButtonsSection.Root>
      <ButtonsSection.BackwardsButton />
      <ButtonsSection.StepsIndicator />
      <ButtonsSection.FowardButton data={{
        name: form.watch('name'),
        nationality: form.watch('nationality'),
        birth_date: form.watch('birth_date') 
        ? new Date(form.watch('birth_date')).toISOString().slice(0, 19).replace('T', ' ') 
        : '',
        gender: form.watch('gender'),
        cpf: form.watch('cpf'),
        rg: form.watch('rg'),
        email: form.watch('email'),
        phone: form.watch('phone'),
        address: form.watch('address'),
        district: form.watch('district'),
        city: form.watch('city'),
        state: form.watch('state'),
        zip_code: form.watch('zip_code'),
      }} />
    </ButtonsSection.Root>
  </div>
</Card>
}