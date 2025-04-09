
import * as React from "react"
import * as RechartsPrimitive from "recharts"
import { cn } from "@/lib/utils"
import { ChartContainer } from "./chart-base";

// Wrapper for neomorphic charts
export function NeoChartContainer({
  children,
  className,
  config = {},
}: {
  children: React.ReactNode;
  className?: string;
  config?: any;
}) {
  return (
    <div className={cn(
      "rounded-xl p-3 bg-card shadow-neo-light dark:shadow-neo-dark",
      "transition-all duration-300 hover:shadow-neo-inset-light dark:hover:shadow-neo-inset-dark",
      className
    )}>
      <ChartContainer config={config} className="p-2">
        {React.isValidElement(children) ? children : <div>Invalid chart content</div>}
      </ChartContainer>
    </div>
  );
}

// Enhanced wrapper for responsive charts
export function EnhancedResponsiveContainer({
  children,
  className,
  ...props
}: React.ComponentProps<typeof RechartsPrimitive.ResponsiveContainer> & {
  className?: string;
}) {
  return (
    <div className={cn("w-full h-full", className)}>
      <RechartsPrimitive.ResponsiveContainer width="100%" height="100%" {...props}>
        {children}
      </RechartsPrimitive.ResponsiveContainer>
    </div>
  );
}
