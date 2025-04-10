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

  // Ensure children are wrapped in a React element if they might be a string or other primitive
  const wrappedChildren = React.useMemo(() => {
    // If it's already a valid React element, return it directly
    if (React.isValidElement(children)) {
      return children;
    }
    
    // If it's a function (render prop pattern), execute it only if it's actually a function
    if (typeof children === 'function') {
      try {
        return children();
      } catch (e) {
        console.error('Error calling children as function:', e);
        return <React.Fragment>{children}</React.Fragment>;
      }
    }
    
    // Otherwise, wrap it in a fragment (this handles strings, arrays, etc.)
    return <React.Fragment>{children}</React.Fragment>;
  }, [children]);

  return (
    <div className={cn(variantStyles[variant], className)}>
      <ChartContainer config={config} className="p-2">
        {wrappedChildren}
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
  // Apply the same transformation for ShimmerChartContainer
  const wrappedChildren = React.useMemo(() => {
    if (React.isValidElement(children)) {
      return children;
    }
    
    if (typeof children === 'function') {
      try {
        return children();
      } catch (e) {
        console.error('Error calling children as function:', e);
        return <React.Fragment>{children}</React.Fragment>;
      }
    }
    
    return <React.Fragment>{children}</React.Fragment>;
  }, [children]);
  
  if (isLoading) {
    return (
      <div className={cn("rounded-2xl p-4 bg-white/30 dark:bg-black/30 backdrop-blur-xl shimmer h-[300px]", className)}></div>
    );
  }
  
  return (
    <div className={cn("rounded-2xl bg-white dark:bg-apple-gray-dark shadow-apple-card", className)}>
      {wrappedChildren}
    </div>
  );
}
