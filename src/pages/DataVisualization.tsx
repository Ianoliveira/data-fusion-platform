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
  SparklineChart,
  RadarChart,
  FunnelChart,
  ScatterChart,
  GaugeChart,
  TreeMapChart
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
  ChartArea,
  Info
} from "lucide-react";
import { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { 
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { ScrollArea } from "@/components/ui/scroll-area";

const DataVisualization = () => {
  const [activeView, setActiveView] = useState("traffic");
  const [dateRange, setDateRange] = useState("30d");
  
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

  // New data sets for additional metrics
  const averageOrderData = [
    { name: "Jan", valor: 120 },
    { name: "Fev", valor: 135 },
    { name: "Mar", valor: 142 },
    { name: "Abr", valor: 128 },
    { name: "Mai", valor: 156 },
    { name: "Jun", valor: 168 }
  ];

  const customerJourneyData = [
    { name: "Descoberta", value: 100 },
    { name: "Consideração", value: 72 },
    { name: "Decisão", value: 48 },
    { name: "Retenção", value: 34 },
    { name: "Advocacia", value: 22 }
  ];

  const contentEngagementData = [
    { name: "Blog Post A", views: 2450, engRate: 3.8, avgTime: 4.2 },
    { name: "Vídeo Tutorial", views: 1820, engRate: 6.2, avgTime: 8.5 },
    { name: "Guia PDF", views: 1240, engRate: 2.8, avgTime: 5.7 },
    { name: "Newsletter", views: 3240, engRate: 1.2, avgTime: 1.8 },
    { name: "Webinar", views: 980, engRate: 7.6, avgTime: 22.4 }
  ];

  const socialMediaData = [
    { name: "Instagram", followers: 12400, engagement: 3.2, clicks: 945 },
    { name: "Facebook", followers: 8750, engagement: 1.8, clicks: 623 },
    { name: "LinkedIn", followers: 5230, engagement: 2.4, clicks: 487 },
    { name: "Twitter", followers: 4120, engagement: 1.6, clicks: 325 },
    { name: "YouTube", followers: 2340, engagement: 4.5, clicks: 512 }
  ];

  const marketingROIData = [
    { name: "SEO", investment: 3000, revenue: 12000, roi: 400 },
    { name: "Paid Ads", investment: 5000, revenue: 18500, roi: 370 },
    { name: "Email", investment: 1200, revenue: 4200, roi: 350 },
    { name: "Social", investment: 2500, revenue: 7800, roi: 312 },
    { name: "Content", investment: 1800, revenue: 6500, roi: 361 }
  ];

  const productPerformanceData = [
    { name: "Produto A", vendas: 342, reviews: 4.8, recompra: 45 },
    { name: "Produto B", vendas: 289, reviews: 4.2, recompra: 38 },
    { name: "Produto C", vendas: 187, reviews: 3.9, recompra: 22 },
    { name: "Produto D", vendas: 145, reviews: 4.6, recompra: 41 },
    { name: "Produto E", vendas: 98, reviews: 4.1, recompra: 27 }
  ];
  
  const quarterlyRevenueData = [
    { name: "Q1", receita: 125000, meta: 120000 },
    { name: "Q2", receita: 148000, meta: 140000 },
    { name: "Q3", receita: 137000, meta: 150000 },
    { name: "Q4", receita: 182000, meta: 175000 }
  ];

  // Customer satisfaction data
  const satisfactionMetrics = [
    { name: "Atendimento", value: 85 },
    { name: "Facilidade de Uso", value: 82 },
    { name: "Preço", value: 78 },
    { name: "Qualidade do Produto", value: 92 },
    { name: "Entrega", value: 88 }
  ];
  
  // AB testing results
  const abTestData = [
    { name: "Versão A", conversão: 2.8, tempo: 2.5, rejeição: 34 },
    { name: "Versão B", conversão: 3.6, tempo: 2.1, rejeição: 28 }
  ];

  // Traffic sources by day of week
  const trafficByDayData = [
    { name: "Dom", Orgânico: 450, Pago: 380, Social: 210, Email: 140, Direto: 320 },
    { name: "Seg", Orgânico: 520, Pago: 420, Social: 250, Email: 390, Direto: 340 },
    { name: "Ter", Orgânico: 540, Pago: 450, Social: 270, Email: 180, Direto: 350 },
    { name: "Qua", Orgânico: 610, Pago: 520, Social: 230, Email: 160, Direto: 380 },
    { name: "Qui", Orgânico: 580, Pago: 480, Social: 260, Email: 210, Direto: 360 },
    { name: "Sex", Orgânico: 640, Pago: 550, Social: 290, Email: 230, Direto: 420 },
    { name: "Sáb", Orgânico: 520, Pago: 420, Social: 340, Email: 180, Direto: 390 }
  ];

  // Satisfaction score trend
  const npsData = [
    { name: "Jan", score: 67 },
    { name: "Fev", score: 72 },
    { name: "Mar", score: 75 },
    { name: "Abr", score: 74 },
    { name: "Mai", score: 79 },
    { name: "Jun", score: 82 }
  ];

  // User behavior data for scatter plot
  const userBehaviorData = [
    { timeOnSite: 1.2, pagesViewed: 2, value: 240 },
    { timeOnSite: 3.4, pagesViewed: 5, value: 320 },
    { timeOnSite: 2.8, pagesViewed: 4, value: 280 },
    { timeOnSite: 5.2, pagesViewed: 8, value: 410 },
    { timeOnSite: 4.7, pagesViewed: 6, value: 350 },
    { timeOnSite: 6.1, pagesViewed: 9, value: 460 },
    { timeOnSite: 2.3, pagesViewed: 3, value: 270 },
    { timeOnSite: 3.8, pagesViewed: 7, value: 380 },
    { timeOnSite: 5.5, pagesViewed: 10, value: 490 },
    { timeOnSite: 4.2, pagesViewed: 6, value: 330 },
    { timeOnSite: 3.1, pagesViewed: 4, value: 290 },
    { timeOnSite: 5.8, pagesViewed: 8, value: 420 },
    { timeOnSite: 2.9, pagesViewed: 3, value: 260 },
    { timeOnSite: 4.5, pagesViewed: 7, value: 370 },
    { timeOnSite: 6.3, pagesViewed: 11, value: 510 }
  ];

  // Customer interests for radar chart
  const customerInterestsData = [
    { category: 'Tecnologia', A: 120, B: 110, C: 140 },
    { category: 'Moda', A: 98, B: 130, C: 75 },
    { category: 'Esportes', A: 86, B: 70, C: 95 },
    { category: 'Casa', A: 99, B: 85, C: 110 },
    { category: 'Alimentos', A: 85, B: 75, C: 80 },
    { category: 'Saúde', A: 65, B: 105, C: 70 },
    { category: 'Viagens', A: 74, B: 100, C: 82 },
    { category: 'Entretenimento', A: 95, B: 92, C: 105 }
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
            <div className="flex gap-1 border rounded-lg p-0.5">
              <Button 
                variant={dateRange === "7d" ? "default" : "ghost"} 
                size="sm" 
                className="text-xs h-8"
                onClick={() => setDateRange("7d")}
              >
                7 dias
              </Button>
              <Button 
                variant={dateRange === "30d" ? "default" : "ghost"} 
                size="sm" 
                className="text-xs h-8"
                onClick={() => setDateRange("30d")}
              >
                30 dias
              </Button>
              <Button 
                variant={dateRange === "90d" ? "default" : "ghost"} 
                size="sm" 
                className="text-xs h-8"
                onClick={() => setDateRange("90d")}
              >
                90 dias
              </Button>
            </div>
            <Button variant="outline" size="sm" className="gap-1">
              <CalendarRange className="h-4 w-4" />
              Personalizar
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

        {/* Key Performance Indicators Dashboard */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <MetricCard 
            title="Sessões Totais" 
            value="142,854"
            change="+12.3%"
            trend="up"
            icon={<ChartLine className="h-4 w-4" />}
            sparklineData={trafficTrendSparkline}
            sparklineKey="value"
            sparklineColor="#3b82f6"
            description="Total de visitas ao site nos últimos 30 dias"
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
            description="Percentual de visitantes que realizaram uma compra"
          />
          <MetricCard 
            title="Tempo Médio" 
            value="03:24"
            change="-0:18"
            trend="down"
            icon={<ChartLine className="h-4 w-4" />}
            description="Tempo médio de permanência no site"
          />
          <MetricCard 
            title="Taxa de Rejeição" 
            value="32.4%"
            change="+1.8%"
            trend="down"
            icon={<ChartBar className="h-4 w-4" />}
            description="Visitantes que saem sem interagir com a página"
          />
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-6">
          <Card className={`cursor-pointer transition md:col-span-1 ${activeView === "traffic" ? "ring-2 ring-primary" : "hover:border-primary/50"}`}
               onClick={() => setActiveView("traffic")}>
            <CardHeader className="pb-2">
              <CardTitle className="text-md flex items-center">
                <ChartLine className="h-4 w-4 mr-2" />
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
                <ChartBar className="h-4 w-4 mr-2" />
                Páginas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-muted-foreground">
                Análise de desempenho de páginas
              </div>
            </CardContent>
          </Card>
          
          <Card className={`cursor-pointer transition md:col-span-1 ${activeView === "customer" ? "ring-2 ring-primary" : "hover:border-primary/50"}`}
               onClick={() => setActiveView("customer")}>
            <CardHeader className="pb-2">
              <CardTitle className="text-md flex items-center">
                <ChartPie className="h-4 w-4 mr-2" />
                Cliente
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-muted-foreground">
                Jornada e satisfação de cliente
              </div>
            </CardContent>
          </Card>
          
          <Card className={`cursor-pointer transition md:col-span-1 ${activeView === "performance" ? "ring-2 ring-primary" : "hover:border-primary/50"}`}
               onClick={() => setActiveView("performance")}>
            <CardHeader className="pb-2">
              <CardTitle className="text-md flex items-center">
                <ChartArea className="h-4 w-4 mr-2" />
                Performance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-muted-foreground">
                Análise de ROI e resultados
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
              {activeView === "customer" && "Análise de Cliente"}
              {activeView === "performance" && "Análise de Performance"}
            </CardTitle>
            <CardDescription>
              {activeView === "traffic" && "Visualização de sessões e usuários ao longo do tempo"}
              {activeView === "devices" && "Distribuição percentual de acessos por tipo de dispositivo"}
              {activeView === "conversion" && "Taxa de conversão em cada etapa do funil de vendas"}
              {activeView === "pages" && "Ranking das páginas mais acessadas do site"}
              {activeView === "customer" && "Análise da jornada do cliente e métricas de satisfação"}
              {activeView === "performance" && "ROI e métricas de desempenho de campanhas e produtos"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {activeView === "traffic" && (
              <div className="space-y-8">
                <div className="h-[400px]">
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
                
                <div className="grid md:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Localização</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <PieChart
                        data={countryData}
                        category="value"
                        index="name"
                        colors={["#3b82f6", "#f59e0b", "#10b981", "#8b5cf6"]}
                        valueFormatter={(value) => `${value}%`}
                      />
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Comportamento do Usuário</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <ScatterChart
                        data={userBehaviorData}
                        xAxis="timeOnSite"
                        yAxis="pagesViewed"
                        zAxis="value"
                        name="Comportamento"
                        color="#3b82f6"
                        valueFormatter={(value) => value.toString()}
                      />
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
            )}
            
            {activeView === "devices" && (
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
                
                {/* New A/B Testing Results */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Resultados de Teste A/B</CardTitle>
                    <CardDescription>Comparação de métricas entre versões de páginas</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-6">
                      <Card className="shadow-none border">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-md">Taxa de Conversão</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-center">
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <div className="text-3xl font-bold text-muted-foreground">2.8%</div>
                                <div className="text-sm text-muted-foreground">Versão A</div>
                              </div>
                              <div>
                                <div className="text-3xl font-bold text-primary">3.6%</div>
                                <div className="text-sm text-muted-foreground">Versão B</div>
                                <div className="text-xs text-green-500 flex items-center mt-1">
                                  <TrendingUp className="h-3 w-3 mr-1" /> +28.6%
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card className="shadow-none border">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-md">Tempo na Página</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-center">
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <div className="text-3xl font-bold text-muted-foreground">2.5m</div>
                                <div className="text-sm text-muted-foreground">Versão A</div>
                              </div>
                              <div>
                                <div className="text-3xl font-bold text-primary">2.1m</div>
                                <div className="text-sm text-muted-foreground">Versão B</div>
                                <div className="text-xs text-red-500 flex items-center mt-1">
                                  <TrendingDown className="h-3 w-3 mr-1" /> -16.0%
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      
                      <Card className="shadow-none border">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-md">Taxa de Rejeição</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="text-center">
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <div className="text-3xl font-bold text-muted-foreground">34%</div>
                                <div className="text-sm text-muted-foreground">Versão A</div>
                              </div>
                              <div>
                                <div className="text-3xl font-bold text-primary">28%</div>
                                <div className="text-sm text-muted-foreground">Versão B</div>
                                <div className="text-xs text-green-500 flex items-center mt-1">
                                  <TrendingUp className="h-3 w-3 mr-1" /> -17.6%
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
            
            {activeView === "conversion" && (
              <div className="space-y-8">
                <div className="h-[400px]">
                  <Tabs defaultValue="bar">
                    <TabsList className="mb-4">
                      <TabsTrigger value="bar">Gráfico de Barras</TabsTrigger>
                      <TabsTrigger value="funnel">Funil de Conversão</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="bar" className="h-[400px]">
                      <BarChart
                        data={conversionData}
                        categories={["Conversão"]}
                        index="name"
                        colors={["#3b82f6"]}
                        valueFormatter={(value) => `${value}%`}
                      />
                    </TabsContent>
                    
                    <TabsContent value="funnel" className="h-[400px]">
                      <FunnelChart
                        data={conversionData}
                        category="Conversão"
                        index="name"
                        colors={["#3b82f6", "#8b5cf6", "#10b981", "#f59e0b"]}
                        valueFormatter={(value) => `${value}%`}
                      />
                    </TabsContent>
                  </Tabs>
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
                
                {/* New Customer Journey Visualization */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Jornada do Cliente</CardTitle>
                    <CardDescription>Análise do funil completo de conversão</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px]">
                      <FunnelChart
                        data={customerJourneyData}
                        category="value"
                        index="name"
                        colors={["#3b82f6", "#8b5cf6", "#f59e0b", "#10b981", "#f43f5e"]}
                        valueFormatter={(value) => value.toString()}
                      />
                    </div>
                  </CardContent>
                  <CardFooter className="text-sm text-muted-foreground flex items-center gap-2">
                    <Info className="h-4 w-4 text-muted-foreground" />
                    22% dos clientes que iniciam o processo se tornam advogados da marca
                  </CardFooter>
                </Card>
                
                {/* New Order Value Metrics */}
                <div className="grid md:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Valor Médio de Pedido</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="h-[200px]">
                        <LineChart
                          data={averageOrderData}
                          categories={["valor"]}
                          index="name"
                          colors={["#8b5cf6"]}
                          valueFormatter={(value) => `R$${value}`}
                        />
                      </div>
                    </CardContent>
                    <CardFooter className="text-sm text-muted-foreground">
                      Aumento de 40% no valor médio em 6 meses
                    </CardFooter>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">NPS</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex flex-col items-center gap-4">
                        <GaugeChart
                          value={82}
                          min={0}
                          max={100}
                          color="#10b981"
                          className="h-[150px]"
                        />
                        <div className="text-center">
                          <div className="text-xs text-green-500 flex items-center justify-center">
                            <TrendingUp className="h-3 w-3 mr-1" /> +15 pontos em 6 meses
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Tendência NPS</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="h-[200px]">
                        <LineChart
                          data={npsData}
                          categories={["score"]}
                          index="name"
                          colors={["#10b981"]}
                          valueFormatter={(value) => value.toString()}
                        />
                      </div>
                    </CardContent>
                    <CardFooter className="text-sm text-muted-foreground">
                      Evolução constante do NPS nos últimos 6 meses
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
                  <TabsTrigger value="content">Conteúdo</TabsTrigger>
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
                
                <TabsContent value="content">
                  <div className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Desempenho de Conteúdo</CardTitle>
                        <CardDescription>Métricas de engajamento para diferentes tipos de conteúdo</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Conteúdo</TableHead>
                              <TableHead className="text-right">Visualizações</TableHead>
                              <TableHead className="text-right">Taxa Engajamento</TableHead>
                              <TableHead className="text-right">Tempo Médio</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {contentEngagementData.map((item, i) => (
                              <TableRow key={i}>
                                <TableCell>{item.name}</TableCell>
                                <TableCell className="text-right">{item.views.toLocaleString()}</TableCell>
                                <TableCell className="text-right">{item.engRate}%</TableCell>
                                <TableCell className="text-right">{item.avgTime} min</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Engajamento por Formato</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <TreeMapChart
                          data={[
                            { name: "Vídeos", value: 42 },
                            { name: "Artigos", value: 28 },
                            { name: "Infográficos", value: 18 },
                            { name: "E-books", value: 8 },
                            { name: "Podcasts", value: 4 }
                          ]}
                          dataKey="value"
                          colors={["#3b82f6", "#10b981", "#f59e0b", "#8b5cf6", "#f472b6"]}
                          valueFormatter={(value) => `${value}%`}
                          className="h-[300px]"
                        />
                      </CardContent>
                      <CardFooter className="text-sm text-muted-foreground">
                        Vídeos geram o maior engajamento entre todos os formatos
                      </CardFooter>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            )}
            
            {activeView === "customer" && (
              <div className="space-y-8">
                <div className="h-[400px]">
                  <Tabs defaultValue="journey">
                    <TabsList className="mb-4">
                      <TabsTrigger value="journey">Jornada</TabsTrigger>
                      <TabsTrigger value="satisfaction">Satisfação</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="journey" className="h-[400px]">
                      <FunnelChart
                        data={customerJourneyData}
                        category="value"
                        index="name"
                        colors={["#3b82f6", "#8b5cf6", "#f59e0b", "#10b981", "#f43f5e"]}
                        valueFormatter={(value) => value.toString()}
                      />
                    </TabsContent>
                    
                    <TabsContent value="satisfaction" className="h-[400px]">
                      <RadarChart
                        data={[satisfactionMetrics]}
                        categories={["valor"]}
                        index="name"
                        colors={["#10b981"]}
                        valueFormatter={(value) => `${value}%`}
                      />
                    </TabsContent>
                  </Tabs>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Score de Satisfação</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-col items-center gap-6">
                        <GaugeChart
                          value={85}
                          min={0}
                          max={100}
                          color="#10b981"
                          className="h-[180px]"
                        />
                        <div className="grid grid-cols-3 w-full text-center">
                          <div>
                            <div className="text-sm font-medium text-muted-foreground">NPS</div>
                            <div className="text-xl font-bold">82</div>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-muted-foreground">CSAT</div>
                            <div className="text-xl font-bold">85%</div>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-muted-foreground">CES</div>
                            <div className="text-xl font-bold">4.2/5</div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Evolução da Satisfação</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <LineChart
                        data={npsData}
                        categories={["score"]}
                        index="name"
                        colors={["#10b981"]}
                        valueFormatter={(value) => value.toString()}
                      />
                    </CardContent>
                    <CardFooter className="text-sm text-muted-foreground">
                      Aumento de 22% na satisfação nos últimos 6 meses
                    </CardFooter>
                  </Card>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Principais Métricas de Satisfação</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <BarList
                        data={satisfactionMetrics.map(item => ({
                          ...item,
                          color: item.valor > 85 ? "#10b981" : "#3b82f6"
                        }))}
                        valueFormatter={(value) => `${value}%`}
                      />
                    </CardContent>
                  </Card>
                  
                  <Card className="md:col-span-2">
                    <CardHeader>
                      <CardTitle className="text-lg">Análise de Feedback</CardTitle>
                      <CardDescription>Principais temas mencionados em feedbacks de clientes</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <TreeMapChart
                        data={[
                          { name: "Atendimento", value: 42 },
                          { name: "Qualidade", value: 28 },
                          { name: "Preço", value: 18 },
                          { name: "Entrega", value: 16 },
                          { name: "Usabilidade", value: 12 },
                          { name: "Variedade", value: 8 },
                        ]}
                        dataKey="value"
                        colors={["#10b981", "#3b82f6", "#f59e0b", "#8b5cf6", "#f472b6", "#f43f5e"]}
                        valueFormatter={(value) => `${value}%`}
                        className="h-[250px]"
                      />
                    </CardContent>
                    <CardFooter className="text-sm text-muted-foreground">
                      42% dos feedbacks mencionam a qualidade do atendimento
                    </CardFooter>
                  </Card>
                </div>
              </div>
            )}
            
            {activeView === "performance" && (
              <div className="space-y-8">
                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="md:col-span-2">
                    <CardHeader>
                      <CardTitle className="text-lg">Receita Trimestral vs Meta</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="h-[300px]">
                        <BarChart
                          data={quarterlyRevenueData}
                          categories={["receita", "meta"]}
                          index="name"
                          colors={["#3b82f6", "#f59e0b"]}
                          valueFormatter={(value) => `R$ ${(value/1000).toFixed(0)}k`}
                        />
                      </div>
                    </CardContent>
                    <CardFooter className="text-sm text-muted-foreground">
                      Q3 ficou 8.7% abaixo da meta, mas Q4 superou em 4%
                    </CardFooter>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Desempenho de Produtos</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <ScrollArea className="h-[300px] pr-4">
                        <Table>
                          <TableHeader>
                            <TableRow>
                              <TableHead>Produto</TableHead>
                              <TableHead className="text-right">Vendas</TableHead>
                              <TableHead className="text-right">Rating</TableHead>
                            </TableRow>
                          </TableHeader>
                          <TableBody>
                            {productPerformanceData.map((item, i) => (
                              <TableRow key={i}>
                                <TableCell>{item.name}</TableCell>
                                <TableCell className="text-right">{item.vendas}</TableCell>
                                <TableCell className="text-right">
                                  <div className="flex items-center justify-end gap-1">
                                    {item.reviews}
                                    <HoverCard>
                                      <HoverCardTrigger>
                                        <Info className="h-3 w-3 text-muted-foreground cursor-help" />
                                      </HoverCardTrigger>
                                      <HoverCardContent>
                                        <div className="text-xs">
                                          Taxa de recompra: {item.recompra}%
                                        </div>
                                      </HoverCardContent>
                                    </HoverCard>
                                  </div>
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </ScrollArea>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">ROI de Marketing</CardTitle>
                      <CardDescription>Retorno sobre investimento por canal</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Canal</TableHead>
                            <TableHead className="text-right">Investimento</TableHead>
                            <TableHead className="text-right">Receita</TableHead>
                            <TableHead className="text-right">ROI</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {marketingROIData.map((item, i) => (
                            <TableRow key={i}>
                              <TableCell>{item.name}</TableCell>
                              <TableCell className="text-right">R$ {item.investment}</TableCell>
                              <TableCell className="text-right">R$ {item.revenue}</TableCell>
                              <TableCell className="text-right">
                                <Badge variant={item.roi > 350 ? "secondary" : "default"}>
                                  {item.roi}%
                                </Badge>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Mídias Sociais</CardTitle>
                      <CardDescription>Desempenho de redes sociais</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Rede</TableHead>
                            <TableHead className="text-right">Seguidores</TableHead>
                            <TableHead className="text-right">Engajamento</TableHead>
                            <TableHead className="text-right">Clicks</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {socialMediaData.map((item, i) => (
                            <TableRow key={i}>
                              <TableCell>{item.name}</TableCell>
                              <TableCell className="text-right">{item.followers.toLocaleString()}</TableCell>
                              <TableCell className="text-right">{item.engagement}%</TableCell>
                              <TableCell className="text-right">{item.clicks}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </CardContent>
                    <CardFooter className="text-sm text-muted-foreground">
                      Instagram tem o maior número de seguidores e YouTube o maior engajamento
                    </CardFooter>
                  </Card>
                </div>
              </div>
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
  description?: string;
}

const MetricCard = ({ 
  title, 
  value, 
  change, 
  trend, 
  icon, 
  sparklineData, 
  sparklineKey = "value", 
  sparklineColor = "#3b82f6",
  description
}: MetricCardProps) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          <HoverCard>
            <HoverCardTrigger asChild>
              <div className="flex items-center gap-1">
                {title}
                {description && <Info className="h-3 w-3 text-muted-foreground cursor-help" />}
              </div>
            </HoverCardTrigger>
            {description && (
              <HoverCardContent side="top" className="text-xs w-[200px]">
                {description}
              </HoverCardContent>
            )}
          </HoverCard>
        </CardTitle>
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
