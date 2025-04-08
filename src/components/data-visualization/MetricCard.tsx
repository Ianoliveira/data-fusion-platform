
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown } from "lucide-react";
import { SparklineChart } from "@/components/ui/chart";

export interface MetricCardProps {
  title: string;
  value: string;
  change?: string;
  trend?: 'up' | 'down';
  icon?: React.ReactNode;
  sparklineData?: Array<{value: number}>;
  sparklineKey?: string;
  sparklineColor?: string;
  description?: string;
}

export const MetricCard: React.FC<MetricCardProps> = ({ 
  title, 
  value, 
  change, 
  trend,
  icon,
  sparklineData,
  sparklineKey,
  sparklineColor,
  description 
}) => {
  return (
    <Card className="overflow-hidden border-border/60 hover:border-primary/30 transition-colors h-full">
      <CardContent className="p-4 sm:p-6">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            {icon && <span className="p-1.5 rounded-md bg-primary/10 text-primary">{icon}</span>}
            <span className="text-sm font-medium text-muted-foreground">{title}</span>
          </div>
          {change && (
            <Badge variant={trend === 'up' ? 'default' : 'destructive'} className="text-xs h-5 px-1.5">
              <span className="flex items-center gap-0.5">
                {trend === 'up' ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                {change}
              </span>
            </Badge>
          )}
        </div>
        <div className="text-2xl sm:text-3xl font-bold mb-2">{value}</div>
        {sparklineData && sparklineKey && (
          <div className="h-[30px] mt-2 mb-2 w-full">
            <div className="h-full w-full">
              <SparklineChart 
                data={sparklineData} 
                dataKey={sparklineKey} 
                color={sparklineColor || "#3b82f6"}
                className="w-full h-full"
              />
            </div>
          </div>
        )}
        {description && (
          <div className="text-xs text-muted-foreground mt-1">{description}</div>
        )}
      </CardContent>
    </Card>
  );
};
