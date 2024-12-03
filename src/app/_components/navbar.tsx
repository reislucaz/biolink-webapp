"use client"; // Marca o componente como cliente, pois estamos usando o hook usePathname

import { usePathname } from "next/navigation"; // Importa o hook para capturar a URL atual
import Link from "next/link";
import Image from "next/image";
import logo from "@/app/_assets/logosm.svg";
import { useState } from "react";
import { InriaSans } from "@/app/_fonts/fonts"; // Importe a fonte personalizada

export default function Navbar() {
  const pathname = usePathname(); // Captura a URL atual
  const [isCadastrosOpen, setIsCadastrosOpen] = useState(false); // Estado para controlar a abertura do submenu

  // OBS: Gustavo, removi essa lógica pois não é mais necessária, pois a Navbar agora é renderizada apenas nas páginas de dashboard
  // Se a URL for a raiz "/", que é a página de login, não renderiza a Navbar
  // if (pathname === "/") {
  //   return null;
  // }

  const isActive = (currentPath: string, pathname: string) => {
    return currentPath.includes(pathname)
      ? "text-red-700 bg-white rounded-md"
      : "";
  };

  return (
    <nav
      className={`w-[17%] h-screen fixed left-0 top-0 bg-red-700 text-white flex flex-col items-center py-6 ${InriaSans.className}`}
    >
      <div className="mb-12">
        <Link href="/dashboard">
          <Image src={logo} alt="Logo" width={80} height={80} />
        </Link>
      </div>

      <ul className="flex text-lg flex-col items-center space-y-6 ">
        {[
          { href: "/dashboard", label: "DASHBOARD" },
          { href: "/doadores", label: "DOADORES" },
          { href: "/receptores", label: "RECEPTORES" },
          { href: "/gerenciamento", label: "GERENCIAMENTO" },
          { href: "/alertas", label: "ALERTAS" },
        ].map(({ href, label }) => (
          <li key={href} className="w-full">
            <Link
              href={href}
              className={`flex items-center justify-center w-full py-2 px-10 transition-all duration-300 hover:text-red-700 hover:bg-white hover:rounded-md ${isActive(
                pathname,
                href
              )}`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
