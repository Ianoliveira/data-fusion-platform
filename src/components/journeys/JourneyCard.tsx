
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface JourneyCardProps {
  title: string;
  description: string;
  value: string;
  change: string;
  positive: boolean;
  icon: React.ComponentType<any>;
  className?: string;
  variant?: "default" | "neo" | "glass" | "apple";
}

export const JourneyCard = ({ 
  title, 
  description, 
  value, 
  change, 
  positive, 
  icon: Icon,
  className,
  variant = "apple"
}: JourneyCardProps) => {
  return (
    <Card variant={variant} className={cn("overflow-hidden", className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className={cn(
          "rounded-full p-2", 
          variant === "apple" ? "bg-secondary/50" : ""
        )}>
          <Icon className="h-4 w-4 text-muted-foreground" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground mt-1">{description}</p>
        <div className={`mt-2 flex items-center text-xs ${positive ? 'text-apple-green' : 'text-apple-red'}`}>
          {positive ? '↑' : '↓'} {change}
        </div>
      </CardContent>
    </Card>
  );
};
