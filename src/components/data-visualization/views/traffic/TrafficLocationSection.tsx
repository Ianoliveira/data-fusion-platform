
import React from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { PieChart, ScatterChart } from "@/components/ui/chart";
import { BarList } from "@/components/ui/chart/chart-types/basic-charts";

interface TrafficLocationSectionProps {
  countryData: any[];
  userBehaviorData: any[];
}

export const TrafficLocationSection: React.FC<TrafficLocationSectionProps> = ({ 
  countryData, 
  userBehaviorData 
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card className="overflow-hidden border-border/60">
        <CardHeader>
          <CardTitle className="text-lg">Localização</CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="h-[350px] w-full">
            <PieChart
              data={countryData}
              category="value"
              index="name"
              colors={["#3b82f6", "#f59e0b", "#10b981", "#8b5cf6"]}
              valueFormatter={(value) => `${value}%`}
              showLegend={true}
              className="h-full"
            />
          </div>
        </CardContent>
      </Card>
      
      <Card className="overflow-hidden border-border/60">
        <CardHeader>
          <CardTitle className="text-lg">Comportamento do Usuário</CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="h-[350px] w-full">
            <ScatterChart
              data={userBehaviorData}
              xAxis="timeOnSite"
              yAxis="pagesViewed"
              zAxis="value"
              name="Comportamento"
              color="#3b82f6"
              valueFormatter={(value) => value.toString()}
              className="h-full"
            />
          </div>
        </CardContent>
        <CardFooter className="text-xs text-muted-foreground">
          Correlação entre tempo no site e páginas vistas
        </CardFooter>
      </Card>
      
      <Card className="overflow-hidden border-border/60">
        <CardHeader>
          <CardTitle className="text-lg">Top Cidades</CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="h-[350px] w-full flex items-center">
            <BarList
              data={[
                { name: "São Paulo", value: 32, color: "#3b82f6" },
                { name: "Rio de Janeiro", value: 18, color: "#10b981" },
                { name: "Belo Horizonte", value: 12, color: "#f59e0b" },
                { name: "Brasília", value: 10, color: "#8b5cf6" },
                { name: "Porto Alegre", value: 8, color: "#f472b6" }
              ]}
              valueFormatter={(value) => `${value}%`}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
