import Image from "next/image";

interface RegisterHeaderProps {
  title: string
  subtitle: string
}

export function RegisterHeader({subtitle, title}: RegisterHeaderProps){
  return  <div className="flex w-full justify-between items-center">
    <div className="flex flex-col w-full gap-2">
      <h2 className="font-bold text-background text-xl">{title}</h2>
      <h3 className="font-bold text-foreground text-lg">{subtitle}</h3>
    </div>
    <Image width={120} height={145} src="/logo.svg" alt="logo" className="size-20" />
  </div>
}