
import { Helmet } from "react-helmet";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BarChart, PieChart } from "@/components/ui/chart";
import { recentInsights } from "@/data/mockData";
import { AlertTriangle, ArrowUpRight, Download, Filter, Info, Lightbulb, Sparkles, TrendingDown, TrendingUp } from "lucide-react";

const SmartInsights = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "opportunity":
        return <TrendingUp className="h-4 w-4" />;
      case "alert":
        return <AlertTriangle className="h-4 w-4" />;
      case "trend":
        return <TrendingDown className="h-4 w-4" />;
      default:
        return <Info className="h-4 w-4" />;
    }
  };

  const getCategoryText = (category: string) => {
    switch (category) {
      case "opportunity":
        return "Oportunidade";
      case "alert":
        return "Alerta";
      case "trend":
        return "Tendência";
      default:
        return category;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "opportunity":
        return "text-green-500 bg-green-500/10";
      case "alert":
        return "text-red-500 bg-red-500/10";
      case "trend":
        return "text-blue-500 bg-blue-500/10";
      default:
        return "text-gray-500 bg-gray-500/10";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "border-red-500 text-red-500";
      case "medium":
        return "border-yellow-500 text-yellow-500";
      case "low":
        return "border-green-500 text-green-500";
      default:
        return "border-gray-500 text-gray-500";
    }
  };

  const getPriorityText = (priority: string) => {
    switch (priority) {
      case "high":
        return "Alta";
      case "medium":
        return "Média";
      case "low":
        return "Baixa";
      default:
        return priority;
    }
  };

  return (
    <>
      <Helmet>
        <title>Smart Insights - Twiggy.ai</title>
      </Helmet>
      
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight flex items-center">
              <Sparkles className="mr-2 h-6 w-6 text-primary" />
              Smart Insights
            </h1>
            <p className="text-muted-foreground">
              Análises geradas por IA para impulsionar suas decisões estratégicas
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-1">
              <Filter className="h-4 w-4" />
              Filtrar
            </Button>
            <Button variant="outline" size="sm" className="gap-1">
              <Download className="h-4 w-4" />
              Exportar
            </Button>
            <Button size="sm" className="gap-1">
              <Lightbulb className="h-4 w-4" />
              Configurar Alertas
            </Button>
          </div>
        </div>
        
        <div className="grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl flex items-center">
                <div className="p-1.5 bg-green-500/10 rounded mr-2">
                  <TrendingUp className="h-5 w-5 text-green-500" />
                </div>
                Oportunidades
              </CardTitle>
              <CardDescription>
                Insights que podem gerar crescimento
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">23</div>
              <div className="text-sm text-muted-foreground">8 de alta prioridade</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl flex items-center">
                <div className="p-1.5 bg-red-500/10 rounded mr-2">
                  <AlertTriangle className="h-5 w-5 text-red-500" />
                </div>
                Alertas
              </CardTitle>
              <CardDescription>
                Problemas que exigem atenção imediata
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">7</div>
              <div className="text-sm text-muted-foreground">3 de alta prioridade</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl flex items-center">
                <div className="p-1.5 bg-blue-500/10 rounded mr-2">
                  <TrendingDown className="h-5 w-5 text-blue-500" />
                </div>
                Tendências
              </CardTitle>
              <CardDescription>
                Mudanças de comportamento e padrões
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">15</div>
              <div className="text-sm text-muted-foreground">5 de alta prioridade</div>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Insights Recentes</CardTitle>
                <CardDescription>
                  Análises e recomendações geradas nos últimos 7 dias
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentInsights.map((insight) => (
                    <div key={insight.id} className="p-4 border rounded-lg">
                      <div className="flex justify-between">
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className={getCategoryColor(insight.category)}>
                            <span className="flex items-center gap-1">
                              {getCategoryIcon(insight.category)}
                              {getCategoryText(insight.category)}
                            </span>
                          </Badge>
                          <Badge variant="outline" className={getPriorityColor(insight.priority)}>
                            Prioridade: {getPriorityText(insight.priority)}
                          </Badge>
                        </div>
                        <span className="text-xs text-muted-foreground">{insight.timestamp}</span>
                      </div>
                      <h3 className="mt-2 font-semibold">{insight.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{insight.description}</p>
                      <div className="mt-3 flex justify-end">
                        <Button variant="ghost" size="sm" className="text-primary">
                          Ver detalhes
                          <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card>
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
                  
                  <TabsContent value="category" className="h-[300px]">
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
                      className="h-[300px]"
                    />
                  </TabsContent>
                  
                  <TabsContent value="priority" className="h-[300px]">
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
                      className="h-[300px]"
                    />
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default SmartInsights;
