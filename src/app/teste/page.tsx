import Image from "next/image";
import logoB from "@/app/_assets/logo-branca.svg";
import { IconButton } from "@/components/ui/icon-button";
import { Bell, User } from "lucide-react";
import { CustomDropdownMenu } from "@/components/ui/drop-menu";

export default function Teste() {
  return (
    <div className="py-10 px-10 gap-5 min-w-96 min-h-96 h-full max-h-screen w-full rounded-lg overflow-auto">
      <div className="flex justify-between items-start flex-row">
        <Image width={120} height={145} src={logoB} alt="logo" className="size-20" />
        <div className="ml-auto flex gap-5">
          <IconButton icon={<Bell width={18} height={18} />} radius="full" className="size-12" />
          <CustomDropdownMenu profileType="Doador">
            <IconButton icon={<User width={18} height={18} />} radius="full" color="gray" variant="outline" highContrast className="size-12" />
          </CustomDropdownMenu>
        </div>
      </div>
      <div className="flex py-10 px-10 flex-col justify-center min-w-96 min-h-96">
        <div className="flex justify-start items-center flex-row gap-4 mt-10">
          <Image width={120} height={145} src={logoB} alt="logo" className="size-80" />
          <div className="flex flex-col gap-4">
            <h1 className="text-white text-4xl font-bold">Bem-vindo ao BioLink</h1>
            <h2 className="text-white text-2xl">Olá, <a className="font-bold">(nome do cliente)</a></h2>
            <h3 className="text-white text-xl">Agradecemos por fazer parte dessa rede de solidariedade e esperança. Sua generosidade tem o poder de salvar vidas e transformar o futuro de muitas pessoas. Aqui você pode acompanhar o seu cadastro de doador, verificar a compatibilidade para doações e atualizar suas informações sempre que necessário.</h3>
          </div>
        </div>
      </div>
    </div>
  );
}