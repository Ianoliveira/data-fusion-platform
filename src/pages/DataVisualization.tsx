
import { Helmet } from "react-helmet";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  AreaChart, 
  BarChart, 
  PieChart, 
  BarList, 
  LineChart,
  DonutChart,
  SparklineChart
} from "@/components/ui/chart";
import { 
  BarChart3, 
  Download,
  LineChart as LineChartIcon,
  PieChart as PieChartIcon,
  TrendingUp,
  TrendingDown,
  Share2,
  CalendarRange,
  Gauge,
  ChartLine,
  ChartPie,
  ChartBar,
  ChartArea
} from "lucide-react";
import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

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
    { page: "Página Inicial", views: 35423, time: "02:45", bounce: "24%", trend: "up" },
    { page: "Catálogo de Produtos", views: 28732, time: "03:22", bounce: "32%", trend: "up" },
    { page: "Blog: 10 Dicas para...", views: 18453, time: "04:12", bounce: "21%", trend: "up" },
    { page: "Sobre Nós", views: 12253, time: "01:34", bounce: "45%", trend: "down" },
    { page: "Contato", views: 6123, time: "00:58", bounce: "52%", trend: "down" },
    { page: "FAQ", views: 5438, time: "03:02", bounce: "18%", trend: "up" },
    { page: "Termos de Serviço", views: 2384, time: "01:12", bounce: "67%", trend: "down" }
  ];

  // New metrics data
  const goalCompletionData = [
    { name: "Registro", value: 68 },
    { name: "Compra", value: 42 },
    { name: "Newsletter", value: 86 },
    { name: "Review", value: 27 }
  ];
  
  const acquisitionData = [
    { name: "Orgânico", value: 42 },
    { name: "Social", value: 28 },
    { name: "E-mail", value: 16 },
    { name: "Direto", value: 8 },
    { name: "Referral", value: 6 }
  ];

  const userEngagementData = [
    { name: "Jan", Retorno: 42, "Novos": 58 },
    { name: "Fev", Retorno: 48, "Novos": 52 },
    { name: "Mar", Retorno: 45, "Novos": 55 },
    { name: "Abr", Retorno: 52, "Novos": 48 },
    { name: "Mai", Retorno: 58, "Novos": 42 },
    { name: "Jun", Retorno: 65, "Novos": 35 }
  ];

  const countryData = [
    { name: "Brasil", value: 56 },
    { name: "EUA", value: 24 },
    { name: "Portugal", value: 12 },
    { name: "Outros", value: 8 }
  ];

  const demoData = [
    { name: "18-24", Homens: 18, Mulheres: 24 },
    { name: "25-34", Homens: 28, Mulheres: 32 },
    { name: "35-44", Homens: 22, Mulheres: 21 },
    { name: "45-54", Homens: 14, Mulheres: 18 },
    { name: "55+", Homens: 8, Mulheres: 15 }
  ];

  const timeOnSiteData = [
    { name: "Jan", tempo: 2.8 },
    { name: "Fev", tempo: 3.2 },
    { name: "Mar", tempo: 3.5 },
    { name: "Abr", tempo: 2.9 },
    { name: "Mai", tempo: 3.8 },
    { name: "Jun", tempo: 4.2 }
  ];

  const pageSpeedData = [
    { name: "Desktop", Carregamento: 2.8, Renderização: 0.9 },
    { name: "Mobile", Carregamento: 3.6, Renderização: 1.4 }
  ];

  const conversionByDeviceData = [
    { name: "Desktop", Taxa: 3.8 },
    { name: "Mobile", Taxa: 2.1 },
    { name: "Tablet", Taxa: 3.2 }
  ];

  const trafficTrendSparkline = [
    { value: 28 }, { value: 32 }, { value: 36 }, { value: 30 },
    { value: 40 }, { value: 35 }, { value: 48 }, { value: 52 },
    { value: 55 }, { value: 60 }, { value: 65 }, { value: 68 }
  ];
  
  const conversionTrendSparkline = [
    { value: 2.2 }, { value: 2.4 }, { value: 2.1 }, { value: 2.8 },
    { value: 3.2 }, { value: 3.5 }, { value: 3.2 }, { value: 3.8 },
    { value: 4.0 }, { value: 3.8 }, { value: 4.2 }, { value: 4.5 }
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

        {/* KPI Overview Cards */}
        <div className="grid gap-4 md:grid-cols-4">
          <MetricCard 
            title="Sessões Totais" 
            value="142,854"
            change="+12.3%"
            trend="up"
            icon={<LineChartIcon className="h-4 w-4" />}
            sparklineData={trafficTrendSparkline}
            sparklineKey="value"
            sparklineColor="#3b82f6"
          />
          <MetricCard 
            title="Taxa de Conversão" 
            value="3.8%"
            change="+0.6%"
            trend="up"
            icon={<Gauge className="h-4 w-4" />}
            sparklineData={conversionTrendSparkline}
            sparklineKey="value"
            sparklineColor="#10b981"
          />
          <MetricCard 
            title="Tempo Médio" 
            value="03:24"
            change="-0:18"
            trend="down"
            icon={<ChartLine className="h-4 w-4" />}
          />
          <MetricCard 
            title="Taxa de Rejeição" 
            value="32.4%"
            change="+1.8%"
            trend="down"
            icon={<ChartBar className="h-4 w-4" />}
          />
        </div>
        
        <div className="grid gap-6 md:grid-cols-4">
          <Card className={`cursor-pointer transition md:col-span-1 ${activeView === "traffic" ? "ring-2 ring-primary" : "hover:border-primary/50"}`}
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
          
          <Card className={`cursor-pointer transition md:col-span-1 ${activeView === "devices" ? "ring-2 ring-primary" : "hover:border-primary/50"}`}
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
          
          <Card className={`cursor-pointer transition md:col-span-1 ${activeView === "conversion" ? "ring-2 ring-primary" : "hover:border-primary/50"}`}
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
          
          <Card className={`cursor-pointer transition md:col-span-1 ${activeView === "pages" ? "ring-2 ring-primary" : "hover:border-primary/50"}`}
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
              <div className="space-y-8">
                <div className="h-[400px]">
                  <AreaChart
                    data={trafficData}
                    categories={["Sessões", "Usuários"]}
                    index="name"
                    colors={["#3b82f6", "#10b981"]}
                    valueFormatter={(value) => value.toLocaleString()}
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Origens de Tráfego</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <DonutChart
                        data={acquisitionData}
                        category="value"
                        index="name"
                        colors={["#8b5cf6", "#3b82f6", "#10b981", "#f59e0b", "#f43f5e"]}
                        valueFormatter={(value) => `${value}%`}
                      />
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
                      <LineChart
                        data={userEngagementData}
                        categories={["Retorno", "Novos"]}
                        index="name"
                        colors={["#8b5cf6", "#f59e0b"]}
                        valueFormatter={(value) => `${value}%`}
                      />
                    </CardContent>
                    <CardFooter className="text-sm text-muted-foreground">
                      Tendência de aumento de 23% em usuários recorrentes
                    </CardFooter>
                  </Card>
                </div>
              </div>
            )}
            
            {activeView === "devices" && (
              <div className="space-y-8">
                <div className="h-[400px]">
                  <PieChart
                    data={deviceData}
                    category="value"
                    index="name"
                    colors={["#3b82f6", "#10b981", "#f59e0b"]}
                    valueFormatter={(value) => `${value}%`}
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Conversão por Dispositivo</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <BarChart
                        data={conversionByDeviceData}
                        categories={["Taxa"]}
                        index="name"
                        colors={["#8b5cf6"]}
                        valueFormatter={(value) => `${value}%`}
                      />
                    </CardContent>
                    <CardFooter className="text-sm text-muted-foreground">
                      Desktop tem a maior taxa de conversão (3.8%)
                    </CardFooter>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Velocidade da Página</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <BarChart
                        data={pageSpeedData}
                        categories={["Carregamento", "Renderização"]}
                        index="name"
                        colors={["#f59e0b", "#10b981"]}
                        valueFormatter={(value) => `${value}s`}
                      />
                    </CardContent>
                    <CardFooter className="text-sm text-muted-foreground">
                      Tempo médio de carregamento: Desktop (2.8s) vs Mobile (3.6s)
                    </CardFooter>
                  </Card>
                </div>
              </div>
            )}
            
            {activeView === "conversion" && (
              <div className="space-y-8">
                <div className="h-[400px]">
                  <BarChart
                    data={conversionData}
                    categories={["Conversão"]}
                    index="name"
                    colors={["#3b82f6"]}
                    valueFormatter={(value) => `${value}%`}
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Metas Completadas</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <BarList
                        data={goalCompletionData.map(item => ({
                          ...item,
                          color: item.name === "Compra" ? "#f59e0b" : "#3b82f6"
                        }))}
                        valueFormatter={(value) => `${value}%`}
                      />
                    </CardContent>
                    <CardFooter className="text-sm text-muted-foreground">
                      Registro na newsletter tem a maior taxa de conversão
                    </CardFooter>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Tempo no Site</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <LineChart
                        data={timeOnSiteData}
                        categories={["tempo"]}
                        index="name"
                        colors={["#10b981"]}
                        valueFormatter={(value) => `${value} min`}
                      />
                    </CardContent>
                    <CardFooter className="text-sm text-muted-foreground">
                      O tempo médio no site aumentou 50% nos últimos 6 meses
                    </CardFooter>
                  </Card>
                </div>
              </div>
            )}
            
            {activeView === "pages" && (
              <Tabs defaultValue="chart">
                <TabsList className="mb-4">
                  <TabsTrigger value="chart">Gráfico</TabsTrigger>
                  <TabsTrigger value="table">Tabela</TabsTrigger>
                  <TabsTrigger value="demographics">Demografia</TabsTrigger>
                  <TabsTrigger value="geo">Localização</TabsTrigger>
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
                        <TableHead className="text-right">Tendência</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {tableData.map((item, i) => (
                        <TableRow key={i}>
                          <TableCell>{item.page}</TableCell>
                          <TableCell className="text-right">{item.views.toLocaleString()}</TableCell>
                          <TableCell className="text-right">{item.time}</TableCell>
                          <TableCell className="text-right">{item.bounce}</TableCell>
                          <TableCell className="text-right">
                            {item.trend === "up" ? (
                              <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                                <TrendingUp className="h-3 w-3 mr-1" /> Alta
                              </Badge>
                            ) : (
                              <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
                                <TrendingDown className="h-3 w-3 mr-1" /> Queda
                              </Badge>
                            )}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TabsContent>
                
                <TabsContent value="demographics">
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Demografia de Usuários</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <BarChart
                          data={demoData}
                          categories={["Homens", "Mulheres"]}
                          index="name"
                          colors={["#3b82f6", "#f472b6"]}
                          valueFormatter={(value) => `${value}%`}
                        />
                      </CardContent>
                      <CardFooter className="text-sm text-muted-foreground">
                        Maior engajamento entre adultos de 25-34 anos
                      </CardFooter>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Interesses de Usuários</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <BarList
                          data={[
                            { name: "Tecnologia", value: 42, color: "#3b82f6" },
                            { name: "Moda", value: 38, color: "#f472b6" },
                            { name: "Esportes", value: 31, color: "#10b981" },
                            { name: "Viagens", value: 28, color: "#f59e0b" },
                            { name: "Gastronomia", value: 24, color: "#8b5cf6" }
                          ]}
                          valueFormatter={(value) => `${value}%`}
                        />
                      </CardContent>
                      <CardFooter className="text-sm text-muted-foreground">
                        Baseado em análise de comportamento e interesses
                      </CardFooter>
                    </Card>
                  </div>
                </TabsContent>
                
                <TabsContent value="geo">
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Distribuição Geográfica</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <PieChart
                          data={countryData}
                          category="value"
                          index="name"
                          colors={["#3b82f6", "#f59e0b", "#10b981", "#8b5cf6"]}
                          valueFormatter={(value) => `${value}%`}
                        />
                      </CardContent>
                      <CardFooter className="text-sm text-muted-foreground">
                        56% dos visitantes são do Brasil
                      </CardFooter>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Top Cidades</CardTitle>
                      </CardHeader>
                      <CardContent>
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
                      <CardFooter className="text-sm text-muted-foreground">
                        São Paulo representa 32% de todo o tráfego
                      </CardFooter>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            )}
          </CardContent>
        </Card>
      </div>
    </>
  );
};

interface MetricCardProps {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down" | "neutral";
  icon: React.ReactNode;
  sparklineData?: any[];
  sparklineKey?: string;
  sparklineColor?: string;
}

const MetricCard = ({ 
  title, 
  value, 
  change, 
  trend, 
  icon, 
  sparklineData, 
  sparklineKey = "value", 
  sparklineColor = "#3b82f6" 
}: MetricCardProps) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className="h-4 w-4 text-muted-foreground">{icon}</div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <div className={`
          flex items-center text-xs mt-2
          ${trend === "up" ? "text-green-500" : trend === "down" ? "text-red-500" : "text-muted-foreground"}
        `}>
          {trend === "up" ? <TrendingUp className="h-3 w-3 mr-1" /> : 
           trend === "down" ? <TrendingDown className="h-3 w-3 mr-1" /> : null}
          {change}
        </div>
        
        {sparklineData && (
          <div className="mt-3">
            <SparklineChart 
              data={sparklineData}
              dataKey={sparklineKey}
              color={sparklineColor}
              height={24}
            />
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default DataVisualization;
