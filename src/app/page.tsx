'use client'
import Spinner from "@/components/ui/spinner";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const {push} = useRouter()
  const token = localStorage.getItem('token')
  console.log(token)
  useEffect(()=>{
    if(token){
      push('/dashboard')
    } else {
      push('/login')
    }
  },[])

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Spinner />
    </div>
  );
}
