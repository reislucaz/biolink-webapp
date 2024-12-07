import { useRegisterContext } from "@/app/contexts/registerContext";
import { cn } from "@/lib/utils";

export function StepsIndicator() {
  const { step } = useRegisterContext()
  return <div className="flex justify-center items-center gap-2">
    {Array.from({ length: 4 }).map((_, idx) => {
      const active = step === idx + 2 
      return <div key={idx} className={cn("rounded-full p-1", active ? 'bg-background' : 'border border-black bg-white')} />
    })}
  </div>
}