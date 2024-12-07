import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { StepsProps } from "..";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface ItemProps {
  value: string
  label: string
}

interface SelectFormProps {
  items: ItemProps[],
  label: string
  name: string
  placeholder?: string
  classname?: string
}

export function SelectForm({form, items, label, name, classname, placeholder}: StepsProps & SelectFormProps){
  return <FormField
          control={form.control}
          name={name}
          render={({ field }) => (
            <FormItem className={classname}>
              <FormLabel>{label}</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder={placeholder} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                 {items.map((item)=> <SelectItem key={item.value} value={item.value}>{item.label}</SelectItem>)}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
}