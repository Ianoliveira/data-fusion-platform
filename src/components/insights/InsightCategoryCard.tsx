
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface InsightCategoryCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  count: number;
  priorityCount: number;
  iconColor: string;
  iconBgColor: string;
}

export function InsightCategoryCard({
  icon: Icon,
  title,
  description,
  count,
  priorityCount,
  iconColor,
  iconBgColor,
}: InsightCategoryCardProps) {
  return (
    <Card variant="neo">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl flex items-center">
          <div className={`p-1.5 ${iconBgColor} rounded mr-2`}>
            <Icon className={`h-5 w-5 ${iconColor}`} />
          </div>
          {title}
        </CardTitle>
        <CardDescription>
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold">{count}</div>
        <div className="text-sm text-muted-foreground">{priorityCount} de alta prioridade</div>
      </CardContent>
    </Card>
  );
}
