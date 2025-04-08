
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { 
  BarChart, 
  FunnelChart, 
  LineChart, 
  RadarChart 
} from "@/components/ui/chart";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";

interface CustomerViewProps {
  data: {
    satisfactionMetrics: any[];
    customerJourneyData: any[];
    npsData: any[];
    customerInterestsData: any[];
    productPerformanceData: any[];
  }
}

export const CustomerView: React.FC<CustomerViewProps> = ({ data }) => {
  const { 
    satisfactionMetrics, 
    customerJourneyData, 
    npsData, 
    customerInterestsData, 
    productPerformanceData 
  } = data;

  return (
    <div className="space-y-8">
      <div className="h-[400px] w-full">
        <Tabs defaultValue="satisfaction">
          <TabsList className="mb-4">
            <TabsTrigger value="satisfaction">Satisfação</TabsTrigger>
            <TabsTrigger value="journey">Jornada</TabsTrigger>
            <TabsTrigger value="nps">NPS</TabsTrigger>
          </TabsList>
          
          <TabsContent value="satisfaction" className="h-[400px]">
            <BarChart
              data={satisfactionMetrics}
              categories={["value"]}
              index="name"
              colors={["#10b981"]}
              valueFormatter={(value) => `${value}%`}
            />
          </TabsContent>
          
          <TabsContent value="journey" className="h-[400px]">
            <FunnelChart
              data={customerJourneyData}
              category="value"
              index="name"
              colors={["#3b82f6", "#10b981", "#f59e0b", "#f43f5e", "#8b5cf6"]}
              valueFormatter={(value) => value.toString()}
            />
          </TabsContent>
          
          <TabsContent value="nps" className="h-[400px]">
            <LineChart
              data={npsData}
              categories={["score"]}
              index="name"
              colors={["#10b981"]}
              valueFormatter={(value) => value.toString()}
            />
          </TabsContent>
        </Tabs>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Áreas de Interesse</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="h-[300px] w-full">
              <RadarChart
                data={customerInterestsData}
                categories={["A", "B", "C"]}
                index="category"
                colors={["#3b82f6", "#10b981", "#f59e0b"]}
                valueFormatter={(value) => value.toString()}
              />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Performance de Produtos</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <ScrollArea className="h-[300px]">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Produto</TableHead>
                    <TableHead className="text-right">Vendas</TableHead>
                    <TableHead className="text-right">Avaliação</TableHead>
                    <TableHead className="text-right">Taxa de Recompra</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {productPerformanceData.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell>{row.name}</TableCell>
                      <TableCell className="text-right">{row.vendas}</TableCell>
                      <TableCell className="text-right">{row.reviews}</TableCell>
                      <TableCell className="text-right">{row.recompra}%</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
