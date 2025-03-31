
import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input"> & { variant?: "default" | "neo" }>(
  ({ className, type, variant = "default", ...props }, ref) => {
    const variantStyles = {
      default: "border border-input bg-background px-3 py-2",
      neo: "border-none bg-secondary shadow-neo-inset-light dark:shadow-neo-inset-dark px-4 py-2"
    }

    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-lg text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm transition-all duration-200",
          variantStyles[variant],
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
