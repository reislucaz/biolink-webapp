import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { StepsProps } from "..";

interface TextAreaFormProps {
  stepProps: StepsProps,
  name: string
  label: string
  placeholder?: string
  classname?: string
}

export function TextAreaForm({stepProps, label, name, placeholder, classname}: TextAreaFormProps){
  return <FormField
  control={stepProps.form.control}
  name={name}
  render={({ field }) => (
    <FormItem className={classname}>
      <FormLabel>{label}</FormLabel>
      <FormControl>
        <Textarea placeholder={placeholder} {...field} />
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>
}