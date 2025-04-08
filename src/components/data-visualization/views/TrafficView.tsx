
import React from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { 
  AreaChart, 
  LineChart, 
  BarChart, 
  DonutChart,
  PieChart,
  ScatterChart,
  BarList
} from "@/components/ui/chart";

interface TrafficViewProps {
  data: {
    trafficData: any[];
    trafficByDayData: any[];
    acquisitionData: any[];
    userEngagementData: any[];
    countryData: any[];
    userBehaviorData: any[];
  }
}

export const TrafficView: React.FC<TrafficViewProps> = ({ data }) => {
  const { 
    trafficData, 
    trafficByDayData,
    acquisitionData, 
    userEngagementData, 
    countryData,
    userBehaviorData
  } = data;

  return (
    <div className="space-y-8">
      <div className="h-[400px] w-full">
        <Tabs defaultValue="area">
          <TabsList className="mb-4">
            <TabsTrigger value="area">Gráfico de Área</TabsTrigger>
            <TabsTrigger value="line">Gráfico de Linha</TabsTrigger>
            <TabsTrigger value="daily">Tráfego Diário</TabsTrigger>
          </TabsList>
          
          <TabsContent value="area" className="h-[400px]">
            <AreaChart
              data={trafficData}
              categories={["Sessões", "Usuários"]}
              index="name"
              colors={["#3b82f6", "#10b981"]}
              valueFormatter={(value) => value.toLocaleString()}
            />
          </TabsContent>
          
          <TabsContent value="line" className="h-[400px]">
            <LineChart
              data={trafficData}
              categories={["Sessões", "Usuários"]}
              index="name"
              colors={["#3b82f6", "#10b981"]}
              valueFormatter={(value) => value.toLocaleString()}
            />
          </TabsContent>
          
          <TabsContent value="daily" className="h-[400px]">
            <BarChart
              data={trafficByDayData}
              categories={["Orgânico", "Pago", "Social", "Email", "Direto"]}
              index="name"
              colors={["#3b82f6", "#f59e0b", "#8b5cf6", "#10b981", "#f43f5e"]}
              valueFormatter={(value) => value.toLocaleString()}
            />
          </TabsContent>
        </Tabs>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Origens de Tráfego</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="h-[300px] w-full">
              <DonutChart
                data={acquisitionData}
                category="value"
                index="name"
                colors={["#8b5cf6", "#3b82f6", "#10b981", "#f59e0b", "#f43f5e"]}
                valueFormatter={(value) => `${value}%`}
              />
            </div>
          </CardContent>
          <CardFooter className="text-sm text-muted-foreground">
            42% do tráfego vem de pesquisa orgânica
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Usuários Novos vs Retorno</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="h-[300px] w-full">
              <LineChart
                data={userEngagementData}
                categories={["Retorno", "Novos"]}
                index="name"
                colors={["#8b5cf6", "#f59e0b"]}
                valueFormatter={(value) => `${value}%`}
              />
            </div>
          </CardContent>
          <CardFooter className="text-sm text-muted-foreground">
            Tendência de aumento de 23% em usuários recorrentes
          </CardFooter>
        </Card>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Localização</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="h-[250px] w-full">
              <PieChart
                data={countryData}
                category="value"
                index="name"
                colors={["#3b82f6", "#f59e0b", "#10b981", "#8b5cf6"]}
                valueFormatter={(value) => `${value}%`}
              />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Comportamento do Usuário</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="h-[250px] w-full">
              <ScatterChart
                data={userBehaviorData}
                xAxis="timeOnSite"
                yAxis="pagesViewed"
                zAxis="value"
                name="Comportamento"
                color="#3b82f6"
                valueFormatter={(value) => value.toString()}
              />
            </div>
          </CardContent>
          <CardFooter className="text-sm text-muted-foreground">
            Correlação entre tempo no site e páginas vistas
          </CardFooter>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Top Cidades</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
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
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
