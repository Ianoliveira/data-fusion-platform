
import React from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { 
  FunnelChart, 
  BarChart, 
  LineChart 
} from "@/components/ui/chart";

interface ConversionViewProps {
  data: {
    conversionData: any[];
    customerJourneyData: any[];
    goalCompletionData: any[];
    abTestData: any[];
    averageOrderData: any[];
  }
}

export const ConversionView: React.FC<ConversionViewProps> = ({ data }) => {
  const { 
    conversionData, 
    customerJourneyData, 
    goalCompletionData, 
    abTestData, 
    averageOrderData 
  } = data;

  return (
    <div className="space-y-8">
      <div className="h-[500px] w-full">
        <Tabs defaultValue="funnel">
          <TabsList className="mb-4">
            <TabsTrigger value="funnel">Funil de Conversão</TabsTrigger>
            <TabsTrigger value="journey">Jornada do Cliente</TabsTrigger>
            <TabsTrigger value="goals">Metas</TabsTrigger>
          </TabsList>
          
          <TabsContent value="funnel" className="h-[450px]">
            <div className="h-full w-full">
              <FunnelChart
                data={conversionData}
                category="Conversão"
                index="name"
                colors={["#3b82f6", "#10b981", "#f59e0b", "#f43f5e"]}
                valueFormatter={(value) => `${value}%`}
                className="h-full"
              />
            </div>
          </TabsContent>
          
          <TabsContent value="journey" className="h-[450px]">
            <div className="h-full w-full">
              <FunnelChart
                data={customerJourneyData}
                category="value"
                index="name"
                colors={["#3b82f6", "#10b981", "#f59e0b", "#f43f5e", "#8b5cf6"]}
                valueFormatter={(value) => value.toString()}
                className="h-full"
              />
            </div>
          </TabsContent>
          
          <TabsContent value="goals" className="h-[450px]">
            <div className="h-full w-full">
              <BarChart
                data={goalCompletionData}
                categories={["value"]}
                index="name"
                colors={["#10b981"]}
                valueFormatter={(value) => `${value}%`}
                className="h-full"
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">A/B Testing</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="h-[400px] w-full">
              <BarChart
                data={abTestData}
                categories={["conversão", "tempo", "rejeição"]}
                index="name"
                colors={["#3b82f6", "#10b981", "#f43f5e"]}
                valueFormatter={(value) => value.toString()}
                className="h-full"
              />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Valor Médio de Pedido</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="h-[400px] w-full">
              <LineChart
                data={averageOrderData}
                categories={["value"]}
                index="name"
                colors={["#f59e0b"]}
                valueFormatter={(value) => `R$ ${value}`}
                className="h-full"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
