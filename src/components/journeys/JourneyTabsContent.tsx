
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { JourneyCard } from './JourneyCard';
import { MetricItem } from './MetricItem';
import { AreaChart, BarChart } from "@/components/ui/chart";
import { TabsContent } from "@/components/ui/tabs";
import { Camera, Search, Text, ShoppingBag, LayoutGrid, BarChart3 } from 'lucide-react';

interface JourneyTabContentProps {
  value: string;
  title: string;
  metrics: {
    title: string;
    description: string;
    value: string;
    change: string;
    positive: boolean;
    icon: React.ComponentType<any>;
  }[];
  chartData: any[];
  chartCategories: string[];
  chartColors: string[];
  additionalMetrics: {
    label: string;
    value: string;
    subvalue: string;
    positive?: boolean;
  }[];
}

export const JourneyTabContent: React.FC<JourneyTabContentProps> = ({
  value,
  title,
  metrics,
  chartData,
  chartCategories,
  chartColors,
  additionalMetrics
}) => {
  // Map icon names to components
  const iconMap = {
    Camera,
    Search,
    Text,
    ShoppingBag,
    LayoutGrid,
    BarChart3
  };
  
  return (
    <TabsContent value={value} className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {metrics.map((metric, index) => (
          <JourneyCard 
            key={`${value}-metric-${index}`}
            title={metric.title} 
            description={metric.description}
            value={metric.value}
            change={metric.change}
            positive={metric.positive}
            icon={metric.icon}
            variant="apple"
          />
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card variant="apple" className="min-h-[400px]">
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>Evolução mensal de métricas importantes</CardDescription>
          </CardHeader>
          <CardContent className="min-h-[320px]">
            <div className="h-full w-full min-h-[320px]">
              <AreaChart
                data={chartData}
                categories={chartCategories}
                index="name"
                colors={chartColors}
                valueFormatter={(value) => `${value}`}
                className="h-[320px]"
              />
            </div>
          </CardContent>
        </Card>
        <Card variant="apple" className="min-h-[400px]">
          <CardHeader>
            <CardTitle>Métricas Adicionais</CardTitle>
            <CardDescription>Informações detalhadas sobre {title.toLowerCase()}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {additionalMetrics.map((metric, index) => (
              <MetricItem 
                key={`${value}-additional-${index}`}
                label={metric.label} 
                value={metric.value} 
                subvalue={metric.subvalue}
                positive={metric.positive}
              />
            ))}
          </CardContent>
        </Card>
      </div>
    </TabsContent>
  );
};
