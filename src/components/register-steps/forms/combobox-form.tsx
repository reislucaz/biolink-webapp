/* eslint-disable @typescript-eslint/no-explicit-any */
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"
import { Check, ChevronsUpDown } from "lucide-react"
import { useEffect, useState } from "react"

interface FormFieldComboboxProps {
  options: {label: string, value: string}[]
  field: any
  placeholder?: string
  classname?: string
}

export function FormFieldCombobox({ field, options, placeholder, classname }: FormFieldComboboxProps) {
  const [multipleOptionSelected, setMultipleOptionSelected] = useState<{label: string, value: string}[]>([])

  useEffect(() => {
    if (field.value) {
      setMultipleOptionSelected(field.value)
    }
  }, [field.value])

  return (
    <Popover>
      <PopoverTrigger id={field.name} asChild>
        <Button
          variant="outline"
          role="combobox"
          className={cn(
            'h-12 bg-white dark:bg-background w-full justify-between',
            !field.value && 'text-gray-400', classname
          )}
        >
            <div className="space-x-2">
              {multipleOptionSelected.map((option) => (
                <Badge className="text-white dark:bg-black" key={option.value}>
                  {option.label}
                </Badge>
              ))}
              {multipleOptionSelected.length < 1 && (
                <span className="text-gray-400">{placeholder}</span>
              )}
            </div>
          <ChevronsUpDown className="ml-2 size-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[--radix-popover-trigger-width]">
        <Command>
          <CommandInput
            className="placeholder:text-gray-400"
            placeholder={placeholder}
          />
          <CommandEmpty>Nenhum resultado encontrado</CommandEmpty>

          <CommandList>
            <ScrollArea className="max-h-[200px]">
              <CommandGroup>
                {options.map((option, index) => (
                  <CommandItem
                    className={cn(
                      'my-1 gap-2 hover:cursor-pointer hover:!bg-input transition-all',
                      field.value?.value === option.value ||
                        (multipleOptionSelected.some(
                          ({ value }) => value === option.value,
                        ) &&
                          'bg-input aria-selected:bg-input brightness-95'),
                    )}
                    key={option.label + index}
                    onSelect={() => {
                        setMultipleOptionSelected((prevState) => {
                          const optionAlreadySelected = prevState.find(
                            (v) => v.value === option.value,
                          )

                          if (optionAlreadySelected) {
                            const filteredList = [
                              ...prevState.filter(
                                (o) => o.value !== optionAlreadySelected.value,
                              ),
                            ]
                            field.onChange(filteredList)
                            return filteredList
                          }
                          const newState = [...prevState, option]
                          field.onChange(newState)
                          return newState
                        })
                    }}
                    value={String(option.label)}
                  >
                    (
                      <Check
                        className={cn(
                          'h-4 w-4',

                          multipleOptionSelected.some(
                            ({ value }) => value === option.value,
                          )
                            ? 'opacity-100'
                            : 'opacity-0',
                        )}
                      />
                    )

                    {option.label}
                  </CommandItem>
                ))}
              </CommandGroup>
              <ScrollBar orientation="vertical" />
            </ScrollArea>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
