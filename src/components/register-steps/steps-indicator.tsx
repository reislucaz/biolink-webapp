import { useRegisterContext } from "@/app/contexts/registerContext";
import { cn } from "@/lib/utils";

export function StepsIndicator() {
  const { step } = useRegisterContext()
  return <div className="flex justify-center items-center gap-2 w-full">
    {Array.from({ length: 3 }).map((_, idx) => {
      const active = step === idx + 2
      return <div key={idx} className={cn("rounded-full p-1 border border-black", active ? 'bg-background' : 'bg-white')} />
    })}
  </div>
}