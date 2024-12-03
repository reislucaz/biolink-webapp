import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return <div className="py-10 px-10 gap-5 min-w-96 min-h-96 flex justify-center items-center flex-col bg-secondary rounded-lg">
    <Image width={120} height={145} src="/logo.svg" alt="logo" className="size-20" />
    <div className="flex flex-col justify-start w-full">
      <label className="font-bold text-foreground" htmlFor="">Login</label>
      <Input />
    </div>
    <div className="flex flex-col justify-start w-full gap-2">
      <label className="font-bold text-foreground" htmlFor="">Senha</label>
      <Input />
      <div className="w-full flex justify-between">
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-xs font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Lembrar senha
          </label>
        </div>
        <Link href={"/"} className="text-xs hover:text-background">Esqueceu a senha?</Link>
      </div>
    </div>
    <Button size='xl'>Entrar</Button>
    <p className="text-sm">Não tem uma conta? <Link href="/register" className="text-background font-bold">Cadastre-se</Link></p>
  </div>
}