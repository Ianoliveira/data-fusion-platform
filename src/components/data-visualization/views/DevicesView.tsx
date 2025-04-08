
import React from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { 
  PieChart, 
  DonutChart, 
  RadarChart,
  BarChart
} from "@/components/ui/chart";

interface DevicesViewProps {
  data: {
    deviceData: any[];
    customerInterestsData: any[];
    demoData: any[];
    conversionByDeviceData: any[];
  }
}

export const DevicesView: React.FC<DevicesViewProps> = ({ data }) => {
  const { 
    deviceData, 
    customerInterestsData, 
    demoData, 
    conversionByDeviceData 
  } = data;

  return (
    <div className="space-y-8">
      <div className="h-[400px]">
        <Tabs defaultValue="pie">
          <TabsList className="mb-4">
            <TabsTrigger value="pie">Gráfico de Pizza</TabsTrigger>
            <TabsTrigger value="donut">Gráfico de Donut</TabsTrigger>
            <TabsTrigger value="radar">Radar de Interesses</TabsTrigger>
          </TabsList>
          
          <TabsContent value="pie" className="h-[400px]">
            <PieChart
              data={deviceData}
              category="value"
              index="name"
              colors={["#3b82f6", "#10b981", "#f59e0b"]}
              valueFormatter={(value) => `${value}%`}
            />
          </TabsContent>
          
          <TabsContent value="donut" className="h-[400px]">
            <DonutChart
              data={deviceData}
              category="value"
              index="name"
              colors={["#3b82f6", "#10b981", "#f59e0b"]}
              valueFormatter={(value) => `${value}%`}
            />
          </TabsContent>
          
          <TabsContent value="radar" className="h-[400px]">
            <RadarChart
              data={customerInterestsData}
              categories={["A", "B", "C"]}
              index="category"
              colors={["#3b82f6", "#10b981", "#f59e0b"]}
              valueFormatter={(value) => value.toString()}
            />
          </TabsContent>
        </Tabs>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Demografia de Usuários</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="h-[300px] w-full">
              <BarChart
                data={demoData}
                categories={["Homens", "Mulheres"]}
                index="name"
                colors={["#3b82f6", "#f472b6"]}
                valueFormatter={(value) => `${value}%`}
              />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Taxa de Conversão por Dispositivo</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="h-[300px] w-full">
              <BarChart
                data={conversionByDeviceData}
                categories={["Taxa"]}
                index="name"
                colors={["#10b981"]}
                valueFormatter={(value) => `${value}%`}
              />
            </div>
          </CardContent>
          <CardFooter className="text-sm text-muted-foreground">
            Desktop apresenta a melhor taxa de conversão
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};
