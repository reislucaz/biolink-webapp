import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { StepsProps } from "..";
import { Input } from "@/components/ui/input";

interface InputFormProps {
  stepProps: StepsProps,
  name: string
  label: string
  placeholder?: string
  classname?: string
}

export function InputForm({stepProps, label, name, placeholder, classname}:InputFormProps){
  return <FormField
  control={stepProps.form.control}
  name={name}
  render={({ field }) => (
    <FormItem className={classname}>
      <FormLabel>{label}</FormLabel>
      <FormControl>
        <Input defaultValue='' placeholder={placeholder} {...field} />
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>
}