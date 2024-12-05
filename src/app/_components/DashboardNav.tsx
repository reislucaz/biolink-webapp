"use client"; // Marca o componente como cliente, pois estamos usando o hook usePathname

import { usePathname } from "next/navigation"; // Importa o hook para capturar a URL atual
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function DashboardNav() {
  const pathname = usePathname(); // Captura a URL atual
  const [isCadastrosOpen, setIsCadastrosOpen] = useState(false); // Estado para controlar a abertura do submenu

  const isActive = (currentPath: string, pathname: string) => {
    return currentPath.includes(pathname)
      ? "text-secondary bg-primary rounded-md"
      : "";
  };

  return (
    <div className="w-full flex flex-col items-center">
      <nav
        className={`my-8 px-10 mx-10 font-bold border border-secondary-foreground text-secondary-foreground items-center rounded-md`}
      >
        <ul className="flex flex-row items-center my-1">
          {[
            { href: "/dashboard", label: "DOADOR/RECEPTOR" },
            { href: "/organ", label: "ÓRGÃO" },
            { href: "/location", label: "LOCALIDADE" },
          ].map(({ href, label }) => (
            <li key={href} className="mx-4">
              <Link
                href={href}
                className={`flex items-center justify-center py-2 px-8 transition-all duration-300 hover:bg-primary hover:text-secondary hover:rounded-md ${isActive(
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
    </div>
  );
}
