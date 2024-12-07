import Image from "next/image";
import { ButtonsSection } from "./buttons-sections";
import Card from "../ui/card";

export function RegisterStepFive() {
  return <Card>
    <div className="flex flex-col justify-center items-center p-5 px-10 gap-5">
      <Image width={120} height={145} src="/logo.svg" alt="logo" className="size-20" />
      <h3 className="text-background font-bold">Step 05</h3>
      <ButtonsSection.Root>
        <ButtonsSection.BackwardsButton />
        <ButtonsSection.StepsIndicator />
        <ButtonsSection.FowardButton />
      </ButtonsSection.Root>
    </div>
  </Card>
}