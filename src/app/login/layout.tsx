import { ReactNode } from "react";

export default function LoginLayout({ children }: { children: ReactNode }) {
  return <div className="w-full h-screen flex justify-center items-center">
    {children}
  </div>
}