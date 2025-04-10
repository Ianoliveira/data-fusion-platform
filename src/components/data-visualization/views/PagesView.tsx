
import React from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { 
  BarChart, 
  LineChart 
} from "@/components/ui/chart";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";
import { TrendingUp, TrendingDown } from "lucide-react";

interface PagesViewProps {
  data: {
    topPagesData: any[];
    tableData: any[];
    pageSpeedData: any[];
    timeOnSiteData: any[];
    contentEngagementData: any[];
  }
}

export const PagesView: React.FC<PagesViewProps> = ({ data }) => {
  const { 
    topPagesData, 
    tableData, 
    pageSpeedData, 
    timeOnSiteData, 
    contentEngagementData 
  } = data;

  return (
    <div className="space-y-8">
      <div className="h-[500px] w-full">
        <Tabs defaultValue="bar">
          <TabsList className="mb-4">
            <TabsTrigger value="bar">Páginas Populares</TabsTrigger>
            <TabsTrigger value="table">Visão Detalhada</TabsTrigger>
            <TabsTrigger value="speed">Velocidade de Carregamento</TabsTrigger>
          </TabsList>
          
          <TabsContent value="bar" className="h-[450px]">
            <div className="h-full w-full">
              <BarChart
                data={topPagesData}
                categories={["value"]}
                index="name"
                colors={["#3b82f6"]}
                valueFormatter={(value) => value.toLocaleString()}
                className="h-full"
              />
            </div>
          </TabsContent>
          
          <TabsContent value="table" className="h-[450px]">
            <ScrollArea className="h-full">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Página</TableHead>
                    <TableHead className="text-right">Visualizações</TableHead>
                    <TableHead className="text-right">Tempo Médio</TableHead>
                    <TableHead className="text-right">Taxa de Rejeição</TableHead>
                    <TableHead className="text-right">Tendência</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tableData.map((row) => (
                    <TableRow key={row.page}>
                      <TableCell>{row.page}</TableCell>
                      <TableCell className="text-right">{row.views.toLocaleString()}</TableCell>
                      <TableCell className="text-right">{row.time}</TableCell>
                      <TableCell className="text-right">{row.bounce}</TableCell>
                      <TableCell className="text-right">
                        {row.trend === "up" ? (
                          <TrendingUp className="h-4 w-4 text-green-500 ml-auto" />
                        ) : (
                          <TrendingDown className="h-4 w-4 text-red-500 ml-auto" />
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </ScrollArea>
          </TabsContent>
          
          <TabsContent value="speed" className="h-[450px]">
            <div className="h-full w-full">
              <BarChart
                data={pageSpeedData}
                categories={["Carregamento", "Renderização"]}
                index="name"
                colors={["#3b82f6", "#10b981"]}
                valueFormatter={(value) => `${value}s`}
                className="h-full"
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Tempo no Site</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="h-[400px] w-full">
              <LineChart
                data={timeOnSiteData}
                categories={["tempo"]}
                index="name"
                colors={["#10b981"]}
                valueFormatter={(value) => `${value} min`}
                className="h-full"
              />
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Engagement de Conteúdo</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <ScrollArea className="h-[400px]">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Conteúdo</TableHead>
                    <TableHead className="text-right">Visualizações</TableHead>
                    <TableHead className="text-right">Taxa de Eng.</TableHead>
                    <TableHead className="text-right">Tempo Médio</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {contentEngagementData.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell>{row.name}</TableCell>
                      <TableCell className="text-right">{row.views.toLocaleString()}</TableCell>
                      <TableCell className="text-right">{row.engRate}%</TableCell>
                      <TableCell className="text-right">{row.avgTime} min</TableCell>
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
