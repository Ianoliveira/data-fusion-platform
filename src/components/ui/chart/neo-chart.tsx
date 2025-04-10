
import * as React from "react"
import * as RechartsPrimitive from "recharts"
import { cn } from "@/lib/utils"
import { ChartContainer } from "./chart-base";

// Wrapper for neomorphic/Apple-style charts
export function NeoChartContainer({
  children,
  className,
  config = {},
  variant = "neo",
}: {
  children: React.ReactNode;
  className?: string;
  config?: any;
  variant?: "neo" | "apple" | "glass";
}) {
  const variantStyles = {
    neo: "rounded-xl p-3 bg-card shadow-neo-light dark:shadow-neo-dark transition-all duration-300 hover:shadow-neo-inset-light dark:hover:shadow-neo-inset-dark",
    apple: "rounded-2xl p-4 bg-white dark:bg-apple-gray-dark shadow-apple-card border border-white/10 dark:border-black/20 transition-all duration-300",
    glass: "rounded-xl p-3 bg-white/30 dark:bg-white/10 backdrop-blur-lg border border-white/20 dark:border-white/10 shadow-lg"
  }

  return (
    <div className={cn(variantStyles[variant], className)}>
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

// Apple-style shimmer effect wrapper for charts
export function ShimmerChartContainer({
  children,
  className,
  isLoading = false,
}: {
  children: React.ReactNode;
  className?: string;
  isLoading?: boolean;
}) {
  if (isLoading) {
    return (
      <div className={cn("rounded-2xl p-4 bg-white/30 dark:bg-black/30 backdrop-blur-xl shimmer h-[300px]", className)}></div>
    );
  }
  
  return (
    <div className={cn("rounded-2xl bg-white dark:bg-apple-gray-dark shadow-apple-card", className)}>
      {React.isValidElement(children) ? children : <div>Invalid chart content</div>}
    </div>
  );
}
