
import React from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { DonutChart, LineChart } from "@/components/ui/chart";

interface TrafficSourcesSectionProps {
  acquisitionData: any[];
  userEngagementData: any[];
}

export const TrafficSourcesSection: React.FC<TrafficSourcesSectionProps> = ({ 
  acquisitionData, 
  userEngagementData 
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card className="overflow-hidden border-border/60">
        <CardHeader>
          <CardTitle className="text-lg">Origens de Tráfego</CardTitle>
        </CardHeader>
        <CardContent className="pt-0 h-[300px]">
          <div className="h-full w-full">
            <DonutChart
              data={acquisitionData}
              category="value"
              index="name"
              colors={["#8b5cf6", "#3b82f6", "#10b981", "#f59e0b", "#f43f5e"]}
              valueFormatter={(value) => `${value}%`}
              showLegend={true}
              className="h-full"
            />
          </div>
        </CardContent>
        <CardFooter className="text-xs text-muted-foreground">
          42% do tráfego vem de pesquisa orgânica
        </CardFooter>
      </Card>
      
      <Card className="overflow-hidden border-border/60">
        <CardHeader>
          <CardTitle className="text-lg">Usuários Novos vs Retorno</CardTitle>
        </CardHeader>
        <CardContent className="pt-0 h-[300px]">
          <div className="h-full w-full">
            <LineChart
              data={userEngagementData}
              categories={["Retorno", "Novos"]}
              index="name"
              colors={["#8b5cf6", "#f59e0b"]}
              valueFormatter={(value) => `${value}%`}
              showLegend={true}
              showGridLines={true}
              className="h-full"
            />
          </div>
        </CardContent>
        <CardFooter className="text-xs text-muted-foreground">
          Tendência de aumento de 23% em usuários recorrentes
        </CardFooter>
      </Card>
    </div>
  );
};
