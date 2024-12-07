"use client"; // Marca o componente como cliente, pois estamos usando o hook usePathname

import { usePathname } from "next/navigation"; // Importa o hook para capturar a URL atual
import Link from "next/link";
import Image from "next/image";
import logo from "@/app/_assets/logosm.svg";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname(); // Captura a URL atual
  const [isCadastrosOpen, setIsCadastrosOpen] = useState(false); // Estado para controlar a abertura do submenu

  const isActive = (currentPath: string, pathname: string) => {
    return currentPath.includes(pathname)
      ? "bg-secondary text-primary rounded-md"
      : "";
  };

  return (
    <nav
      className={`w-[17%] h-screen fixed left-0 top-0 bg-background text-card flex flex-col items-center py-6`}
    >
      <div className="my-12">
        <Link href="/dashboard">
          <Image src={logo} alt="Logo" width={50} height={50} />
        </Link>
      </div>

      <ul className="flex font-bold flex-col items-center space-y-6 ">
        {[
          { href: "/dashboard", label: "DASHBOARD" },
          { href: "/donor", label: "DOADORES" },
          { href: "/receivers", label: "RECEPTORES" },
          { href: "/management", label: "GERENCIAMENTO" },
          { href: "/hospitals", label: "HOSPITAIS" },
          { href: "/alerts", label: "ALERTAS" },
        ].map(({ href, label }) => (
          <li key={href} className="w-full">
            <Link
              href={href}
              className={`flex items-center justify-center w-full py-2 px-10 transition-all duration-300 hover:bg-secondary hover:text-primary hover:rounded-md ${isActive(
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
