'use client'
import Image from "next/image";
import Card from "../ui/card";
import { ButtonsSection } from "./buttons-sections";

export function RegisterStepOne() {
  return <Card> 
    <div className="flex flex-col justify-center items-center p-5 px-10 gap-5">
      <Image width={120} height={145} src="/logo.svg" alt="logo" className="size-20" />
      <h3 className="text-background font-bold">Cadastro de Doadores e Receptores</h3>
      <ButtonsSection.Root>
        <ButtonsSection.FowardButton />
      </ButtonsSection.Root>
    </div>
  </Card>
}