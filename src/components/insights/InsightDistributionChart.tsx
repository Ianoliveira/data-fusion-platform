
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PieChart, BarChart } from "@/components/ui/chart";

interface Insight {
  id: string;
  category: string;
  priority: string;
  title: string;
  description: string;
  created_at: string;
  status: string;
  user_id: string;
  data: any;
}

interface InsightDistributionChartProps {
  insights: Insight[];
}

export function InsightDistributionChart({ insights }: InsightDistributionChartProps) {
  // Calculate category distribution
  const categoryData = [
    { 
      name: "Oportunidades", 
      value: insights.filter(insight => insight.category === 'opportunity').length 
    },
    { 
      name: "Alertas", 
      value: insights.filter(insight => insight.category === 'alert').length 
    },
    { 
      name: "Tendências", 
      value: insights.filter(insight => insight.category === 'trend').length 
    },
  ].filter(item => item.value > 0); // Only show categories with data

  // Calculate priority distribution
  const priorityData = [
    { 
      name: "Alta", 
      value: insights.filter(insight => insight.priority === 'high').length 
    },
    { 
      name: "Média", 
      value: insights.filter(insight => insight.priority === 'medium').length 
    },
    { 
      name: "Baixa", 
      value: insights.filter(insight => insight.priority === 'low').length 
    },
  ].filter(item => item.value > 0); // Only show priorities with data

  if (insights.length === 0) {
    return (
      <Card variant="neo" className="min-h-[480px]">
        <CardHeader>
          <CardTitle>Distribuição de Insights</CardTitle>
          <CardDescription>Por categoria e prioridade</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <p className="text-muted-foreground">
              Nenhum insight disponível para visualização.
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card variant="neo" className="min-h-[480px]">
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
            <div className="h-[380px] w-full">
              {categoryData.length > 0 ? (
                <PieChart
                  data={categoryData}
                  category="value"
                  index="name"
                  colors={["#10b981", "#ef4444", "#3b82f6"]}
                  valueFormatter={(value) => `${value} insights`}
                  className="h-[380px]"
                />
              ) : (
                <div className="flex items-center justify-center h-full">
                  <p className="text-muted-foreground">Sem dados de categoria para exibir</p>
                </div>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="priority">
            <div className="h-[380px] w-full">
              {priorityData.length > 0 ? (
                <BarChart
                  data={priorityData}
                  categories={["value"]}
                  index="name"
                  colors={["#ef4444"]}
                  valueFormatter={(value) => `${value} insights`}
                  className="h-[380px]"
                />
              ) : (
                <div className="flex items-center justify-center h-full">
                  <p className="text-muted-foreground">Sem dados de prioridade para exibir</p>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
