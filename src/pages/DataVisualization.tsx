
import { Helmet } from "react-helmet";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AreaChart, BarChart, PieChart, BarList } from "@/components/ui/chart";
import { 
  BarChart3, 
  Download,
  LineChart as LineChartIcon,
  PieChart as PieChartIcon,
  Share2,
  CalendarRange
} from "lucide-react";
import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const DataVisualization = () => {
  const [activeView, setActiveView] = useState("traffic");
  
  const trafficData = [
    { name: "Jan", Sessões: 1200, Usuários: 980 },
    { name: "Fev", Sessões: 1900, Usuários: 1200 },
    { name: "Mar", Sessões: 2400, Usuários: 1980 },
    { name: "Abr", Sessões: 1800, Usuários: 1400 },
    { name: "Mai", Sessões: 2800, Usuários: 2320 },
    { name: "Jun", Sessões: 3200, Usuários: 2600 }
  ];
  
  const deviceData = [
    { name: "Desktop", value: 46 },
    { name: "Mobile", value: 42 },
    { name: "Tablet", value: 12 }
  ];
  
  const conversionData = [
    { name: "Visualização", Conversão: 100 },
    { name: "Adição ao Carrinho", Conversão: 62 },
    { name: "Checkout", Conversão: 38 },
    { name: "Compra", Conversão: 22 }
  ];
  
  const topPagesData = [
    { name: "Página Inicial", value: 35423, color: "#3b82f6" },
    { name: "Catálogo de Produtos", value: 28732, color: "#10b981" },
    { name: "Blog", value: 18453, color: "#f59e0b" },
    { name: "Sobre Nós", value: 12253, color: "#8b5cf6" },
    { name: "Contato", value: 6123, color: "#f43f5e" }
  ];
  
  const tableData = [
    { page: "Página Inicial", views: 35423, time: "02:45", bounce: "24%" },
    { page: "Catálogo de Produtos", views: 28732, time: "03:22", bounce: "32%" },
    { page: "Blog: 10 Dicas para...", views: 18453, time: "04:12", bounce: "21%" },
    { page: "Sobre Nós", views: 12253, time: "01:34", bounce: "45%" },
    { page: "Contato", views: 6123, time: "00:58", bounce: "52%" },
    { page: "FAQ", views: 5438, time: "03:02", bounce: "18%" },
    { page: "Termos de Serviço", views: 2384, time: "01:12", bounce: "67%" }
  ];

  return (
    <>
      <Helmet>
        <title>Visualização de Dados - Twiggy.ai</title>
      </Helmet>
      
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight flex items-center">
              <BarChart3 className="mr-2 h-6 w-6 text-primary" />
              Visualização de Dados
            </h1>
            <p className="text-muted-foreground">
              Análise visual e insights sobre seus dados integrados
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-1">
              <CalendarRange className="h-4 w-4" />
              Últimos 30 dias
            </Button>
            <Button variant="outline" size="sm" className="gap-1">
              <Download className="h-4 w-4" />
              Exportar
            </Button>
            <Button size="sm" className="gap-1">
              <Share2 className="h-4 w-4" />
              Compartilhar
            </Button>
          </div>
        </div>
        
        <div className="grid gap-6 md:grid-cols-4">
          <Card className={`cursor-pointer transition ${activeView === "traffic" ? "ring-2 ring-primary" : "hover:border-primary/50"}`}
               onClick={() => setActiveView("traffic")}>
            <CardHeader className="pb-2">
              <CardTitle className="text-md flex items-center">
                <LineChartIcon className="h-4 w-4 mr-2" />
                Tráfego
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-muted-foreground">
                Análise de sessões e usuários
              </div>
            </CardContent>
          </Card>
          
          <Card className={`cursor-pointer transition ${activeView === "devices" ? "ring-2 ring-primary" : "hover:border-primary/50"}`}
               onClick={() => setActiveView("devices")}>
            <CardHeader className="pb-2">
              <CardTitle className="text-md flex items-center">
                <PieChartIcon className="h-4 w-4 mr-2" />
                Dispositivos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-muted-foreground">
                Distribuição por tipo de dispositivo
              </div>
            </CardContent>
          </Card>
          
          <Card className={`cursor-pointer transition ${activeView === "conversion" ? "ring-2 ring-primary" : "hover:border-primary/50"}`}
               onClick={() => setActiveView("conversion")}>
            <CardHeader className="pb-2">
              <CardTitle className="text-md flex items-center">
                <BarChart3 className="h-4 w-4 mr-2" />
                Conversão
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-muted-foreground">
                Funil de conversão de vendas
              </div>
            </CardContent>
          </Card>
          
          <Card className={`cursor-pointer transition ${activeView === "pages" ? "ring-2 ring-primary" : "hover:border-primary/50"}`}
               onClick={() => setActiveView("pages")}>
            <CardHeader className="pb-2">
              <CardTitle className="text-md flex items-center">
                <BarChart3 className="h-4 w-4 mr-2" />
                Páginas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-muted-foreground">
                Análise de desempenho de páginas
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>
              {activeView === "traffic" && "Análise de Tráfego"}
              {activeView === "devices" && "Distribuição de Dispositivos"}
              {activeView === "conversion" && "Funil de Conversão"}
              {activeView === "pages" && "Desempenho de Páginas"}
            </CardTitle>
            <CardDescription>
              {activeView === "traffic" && "Visualização de sessões e usuários ao longo do tempo"}
              {activeView === "devices" && "Distribuição percentual de acessos por tipo de dispositivo"}
              {activeView === "conversion" && "Taxa de conversão em cada etapa do funil de vendas"}
              {activeView === "pages" && "Ranking das páginas mais acessadas do site"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {activeView === "traffic" && (
              <div className="h-[400px]">
                <AreaChart
                  data={trafficData}
                  categories={["Sessões", "Usuários"]}
                  index="name"
                  colors={["#3b82f6", "#10b981"]}
                  valueFormatter={(value) => value.toLocaleString()}
                />
              </div>
            )}
            
            {activeView === "devices" && (
              <div className="h-[400px]">
                <PieChart
                  data={deviceData}
                  category="value"
                  index="name"
                  colors={["#3b82f6", "#10b981", "#f59e0b"]}
                  valueFormatter={(value) => `${value}%`}
                />
              </div>
            )}
            
            {activeView === "conversion" && (
              <div className="h-[400px]">
                <BarChart
                  data={conversionData}
                  categories={["Conversão"]}
                  index="name"
                  colors={["#3b82f6"]}
                  valueFormatter={(value) => `${value}%`}
                />
              </div>
            )}
            
            {activeView === "pages" && (
              <Tabs defaultValue="chart">
                <TabsList className="mb-4">
                  <TabsTrigger value="chart">Gráfico</TabsTrigger>
                  <TabsTrigger value="table">Tabela</TabsTrigger>
                </TabsList>
                
                <TabsContent value="chart" className="h-[400px]">
                  <BarList
                    data={topPagesData}
                    valueFormatter={(value) => value.toLocaleString()}
                  />
                </TabsContent>
                
                <TabsContent value="table">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Página</TableHead>
                        <TableHead className="text-right">Visualizações</TableHead>
                        <TableHead className="text-right">Tempo Médio</TableHead>
                        <TableHead className="text-right">Taxa de Rejeição</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {tableData.map((item, i) => (
                        <TableRow key={i}>
                          <TableCell>{item.page}</TableCell>
                          <TableCell className="text-right">{item.views.toLocaleString()}</TableCell>
                          <TableCell className="text-right">{item.time}</TableCell>
                          <TableCell className="text-right">{item.bounce}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TabsContent>
              </Tabs>
            )}
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default DataVisualization;
