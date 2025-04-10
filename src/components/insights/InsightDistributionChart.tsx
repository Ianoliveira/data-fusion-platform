
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PieChart, BarChart } from "@/components/ui/chart";

export function InsightDistributionChart() {
  return (
    <Card variant="neo" className="min-h-[450px]">
      <CardHeader>
        <CardTitle>Distribuição de Insights</CardTitle>
        <CardDescription>Por categoria e prioridade</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="category">
          <TabsList className="mb-4 w-full">
            <TabsTrigger value="category" className="flex-1">Categoria</TabsTrigger>
            <TabsTrigger value="priority" className="flex-1">Prioridade</TabsTrigger>
          </TabsList>
          
          <TabsContent value="category">
            <div className="h-[350px] w-full">
              <PieChart
                data={[
                  { name: "Oportunidades", value: 23 },
                  { name: "Alertas", value: 7 },
                  { name: "Tendências", value: 15 },
                ]}
                category="value"
                index="name"
                colors={["#10b981", "#ef4444", "#3b82f6"]}
                valueFormatter={(value) => `${value} insights`}
                className="h-[350px]"
              />
            </div>
          </TabsContent>
          
          <TabsContent value="priority">
            <div className="h-[350px] w-full">
              <BarChart
                data={[
                  { name: "Alta", value: 16 },
                  { name: "Média", value: 19 },
                  { name: "Baixa", value: 10 },
                ]}
                categories={["value"]}
                index="name"
                colors={["#ef4444"]}
                valueFormatter={(value) => `${value} insights`}
                className="h-[350px]"
              />
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
