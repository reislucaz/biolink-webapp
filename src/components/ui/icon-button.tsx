import * as React from "react"
import { cn } from "@/lib/utils"
import { Button, ButtonProps, buttonVariants } from "./button"

export interface IconButtonProps extends ButtonProps {
  icon: React.ReactNode
  radius?: string
  highContrast?: boolean
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ icon, className, variant, size = "icon", radius, highContrast, asChild = false, ...props }, ref) => {
    return (
      <Button
        className={cn(
          buttonVariants({ variant, size, className }),
          radius && `rounded-${radius}`,
          highContrast && "high-contrast"
        )}
        ref={ref}
        asChild={asChild}
        {...props}
      >
        <span className="flex items-center justify-center w-full h-full">
          {React.cloneElement(icon as React.ReactElement, { width: "100%", height: "100%" })}
        </span>
      </Button>
    )
  }
)
IconButton.displayName = "IconButton"

export { IconButton }