import { ReactNode } from "react";

export default function RegisterLayout({ children }: { children: ReactNode }) {
  return <div className="w-full h-screen flex justify-center items-center">
    {children}
  </div>
}