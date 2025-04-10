
import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { AreaChart, LineChart, BarChart } from "@/components/ui/chart";

interface TrafficChartSectionProps {
  trafficData: any[];
  trafficByDayData: any[];
}

export const TrafficChartSection: React.FC<TrafficChartSectionProps> = ({ 
  trafficData, 
  trafficByDayData 
}) => {
  return (
    <div className="h-[500px] w-full bg-card/30 rounded-lg border border-border/40">
      <Tabs defaultValue="area" className="h-full">
        <div className="px-4 pt-4">
          <TabsList className="mb-4 p-1 bg-background/80 backdrop-blur-sm">
            <TabsTrigger value="area">Gráfico de Área</TabsTrigger>
            <TabsTrigger value="line">Gráfico de Linha</TabsTrigger>
            <TabsTrigger value="daily">Tráfego Diário</TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="area" className="h-[450px] px-2">
          <div className="h-full w-full">
            <AreaChart
              data={trafficData}
              categories={["Sessões", "Usuários"]}
              index="name"
              colors={["#3b82f6", "#10b981"]}
              valueFormatter={(value) => value.toLocaleString()}
              showLegend={true}
              className="h-full"
            />
          </div>
        </TabsContent>
        
        <TabsContent value="line" className="h-[450px] px-2">
          <div className="h-full w-full">
            <LineChart
              data={trafficData}
              categories={["Sessões", "Usuários"]}
              index="name"
              colors={["#3b82f6", "#10b981"]}
              valueFormatter={(value) => value.toLocaleString()}
              showLegend={true}
              className="h-full"
            />
          </div>
        </TabsContent>
        
        <TabsContent value="daily" className="h-[450px] px-2">
          <div className="h-full w-full">
            <BarChart
              data={trafficByDayData}
              categories={["Orgânico", "Pago", "Social", "Email", "Direto"]}
              index="name"
              colors={["#3b82f6", "#f59e0b", "#8b5cf6", "#10b981", "#f43f5e"]}
              valueFormatter={(value) => value.toLocaleString()}
              showLegend={true}
              className="h-full"
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
