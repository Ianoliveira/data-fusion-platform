
import React from 'react';
import { cn } from "@/lib/utils";

interface MetricItemProps {
  label: string;
  value: string;
  subvalue: string;
  positive?: boolean;
  className?: string;
}

export const MetricItem = ({ label, value, subvalue, positive, className }: MetricItemProps) => {
  return (
    <div className={cn("border-b border-gray-100 dark:border-gray-800 pb-3 last:border-0 last:pb-0", className)}>
      <div className="text-sm font-medium text-muted-foreground">{label}</div>
      <div className="text-xl font-semibold mt-1">{value}</div>
      <div className={`text-xs mt-1 ${positive !== undefined ? (positive ? 'text-apple-green' : 'text-apple-red') : 'text-muted-foreground'}`}>
        {subvalue}
      </div>
    </div>
  );
};
