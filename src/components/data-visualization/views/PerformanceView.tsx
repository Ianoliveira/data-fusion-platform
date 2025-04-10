
import React from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { 
  BarChart, 
  LineChart 
} from "@/components/ui/chart";
import { GaugeChart } from "@/components/ui/chart/chart-types/circular-charts";
import { TreeMapChart } from "@/components/ui/chart/chart-types/advanced-charts";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";

interface PerformanceViewProps {
  data: {
    marketingROIData: any[];
    quarterlyRevenueData: any[];
    socialMediaData: any[];
  }
}

export const PerformanceView: React.FC<PerformanceViewProps> = ({ data }) => {
  const { marketingROIData, quarterlyRevenueData, socialMediaData } = data;

  return (
    <div className="space-y-8">
      <div className="h-[500px] w-full">
        <Tabs defaultValue="roi">
          <TabsList className="mb-4">
            <TabsTrigger value="roi">ROI Marketing</TabsTrigger>
            <TabsTrigger value="revenue">Receita Trimestral</TabsTrigger>
            <TabsTrigger value="social">Redes Sociais</TabsTrigger>
          </TabsList>
          
          <TabsContent value="roi" className="h-[450px]">
            <div className="h-full w-full">
              <BarChart
                data={marketingROIData}
                categories={["roi"]}
                index="name"
                colors={["#10b981"]}
                valueFormatter={(value) => `${value}%`}
                className="h-full"
              />
            </div>
          </TabsContent>
          
          <TabsContent value="revenue" className="h-[450px]">
            <div className="h-full w-full">
              <LineChart
                data={quarterlyRevenueData}
                categories={["receita", "meta"]}
                index="name"
                colors={["#3b82f6", "#f59e0b"]}
                valueFormatter={(value) => `R$ ${(value/1000).toFixed(0)}k`}
                className="h-full"
              />
            </div>
          </TabsContent>
          
          <TabsContent value="social" className="h-[450px]">
            <ScrollArea className="h-full">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Plataforma</TableHead>
                    <TableHead className="text-right">Seguidores</TableHead>
                    <TableHead className="text-right">Engagement</TableHead>
                    <TableHead className="text-right">Cliques</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {socialMediaData.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell>{row.name}</TableCell>
                      <TableCell className="text-right">{row.followers.toLocaleString()}</TableCell>
                      <TableCell className="text-right">{row.engagement}%</TableCell>
                      <TableCell className="text-right">{row.clicks}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </ScrollArea>
          </TabsContent>
        </Tabs>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Custo por Aquisição</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col items-center justify-center gap-2">
                <div className="text-2xl font-bold">R$ 28,45</div>
                <div className="text-xs text-muted-foreground text-center">
                  Custo médio por cliente adquirido
                </div>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="h-[220px] w-[220px] mx-auto">
                  <GaugeChart
                    value={72}
                    min={0}
                    max={100}
                    thresholds={[{ value: 100, color: "#3b82f6" }]}
                  />
                </div>
                <div className="text-xs text-muted-foreground mt-2 text-center">
                  Eficiência de Aquisição
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Valor do Cliente</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="h-[300px] w-full">
              <TreeMapChart
                data={[
                  { name: "Alto valor", value: 45 },
                  { name: "Médio valor", value: 30 },
                  { name: "Baixo valor", value: 25 },
                ]}
                dataKey="value"
                nameKey="name"
                colors={["#10b981", "#f59e0b", "#f43f5e"]}
                valueFormatter={(value) => `${value}%`}
              />
            </div>
            <div className="text-xs text-muted-foreground mt-4 text-center">
              Segmentação de clientes por valor vitalício (LTV)
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
