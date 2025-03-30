
import { Helmet } from "react-helmet";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  PieChart, 
  BarChart 
} from "@/components/ui/chart";
import { 
  Brain, 
  Download, 
  Filter, 
  Info, 
  PieChart as PieChartIcon, 
  BarChart3, 
  LineChart,
  CheckCircle,
  Users,
  ShoppingCart,
  TrendingUp,
  Zap
} from "lucide-react";
import { useState } from "react";
import { ModelPrediction } from "@/components/predictions/ModelPrediction";
import { CustomerSegmentation } from "@/components/predictions/CustomerSegmentation";
import { ProductRecommendation } from "@/components/predictions/ProductRecommendation";
import { ChurnPrediction } from "@/components/predictions/ChurnPrediction";
import { ModelAutomations } from "@/components/predictions/ModelAutomations";

const PredictiveModels = () => {
  const [activeModel, setActiveModel] = useState("segmentation");
  const [activeTab, setActiveTab] = useState("models");

  return (
    <>
      <Helmet>
        <title>Modelos Preditivos - Twiggy.ai</title>
      </Helmet>
      
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight flex items-center">
              <Brain className="mr-2 h-6 w-6 text-primary" />
              Modelos Preditivos
            </h1>
            <p className="text-muted-foreground">
              Previsões e insights baseados em modelos de machine learning
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="mr-2">
              <TabsList>
                <TabsTrigger value="models">
                  <Brain className="h-4 w-4 mr-1" />
                  Modelos
                </TabsTrigger>
                <TabsTrigger value="automations">
                  <Zap className="h-4 w-4 mr-1" />
                  Automações
                </TabsTrigger>
              </TabsList>
            </Tabs>
            <Button variant="outline" size="sm" className="gap-1">
              <Filter className="h-4 w-4" />
              Filtrar
            </Button>
            <Button variant="outline" size="sm" className="gap-1">
              <Download className="h-4 w-4" />
              Exportar
            </Button>
            <Button size="sm" className="gap-1">
              <Info className="h-4 w-4" />
              Como funciona
            </Button>
          </div>
        </div>
        
        {activeTab === "models" ? (
          <>
            <div className="grid gap-6 md:grid-cols-4">
              <Card className={`cursor-pointer transition ${activeModel === "segmentation" ? "ring-2 ring-primary" : "hover:border-primary/50"}`}
                  onClick={() => setActiveModel("segmentation")}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-md flex items-center">
                    <div className="p-1.5 bg-blue-500/10 rounded mr-2">
                      <Users className="h-4 w-4 text-blue-500" />
                    </div>
                    Segmentação de Clientes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-muted-foreground">
                    Agrupa clientes com comportamentos similares
                  </div>
                  <Badge variant="outline" className="mt-2 bg-blue-500/10 text-blue-500 border-blue-500/30">Ativo</Badge>
                </CardContent>
              </Card>
              
              <Card className={`cursor-pointer transition ${activeModel === "recommendation" ? "ring-2 ring-primary" : "hover:border-primary/50"}`}
                  onClick={() => setActiveModel("recommendation")}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-md flex items-center">
                    <div className="p-1.5 bg-green-500/10 rounded mr-2">
                      <ShoppingCart className="h-4 w-4 text-green-500" />
                    </div>
                    Recomendação de Produtos
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-muted-foreground">
                    Sugere produtos relevantes para cada cliente
                  </div>
                  <Badge variant="outline" className="mt-2 bg-green-500/10 text-green-500 border-green-500/30">Ativo</Badge>
                </CardContent>
              </Card>
              
              <Card className={`cursor-pointer transition ${activeModel === "churn" ? "ring-2 ring-primary" : "hover:border-primary/50"}`}
                  onClick={() => setActiveModel("churn")}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-md flex items-center">
                    <div className="p-1.5 bg-red-500/10 rounded mr-2">
                      <TrendingUp className="h-4 w-4 text-red-500" />
                    </div>
                    Previsão de Churn
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-muted-foreground">
                    Identifica clientes com risco de abandono
                  </div>
                  <Badge variant="outline" className="mt-2 bg-red-500/10 text-red-500 border-red-500/30">Ativo</Badge>
                </CardContent>
              </Card>
              
              <Card className={`cursor-pointer transition ${activeModel === "lifetime" ? "ring-2 ring-primary" : "hover:border-primary/50"}`}
                  onClick={() => setActiveModel("lifetime")}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-md flex items-center">
                    <div className="p-1.5 bg-purple-500/10 rounded mr-2">
                      <CheckCircle className="h-4 w-4 text-purple-500" />
                    </div>
                    LTV Prediction
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-muted-foreground">
                    Estima o valor vitalício de cada cliente
                  </div>
                  <Badge variant="outline" className="mt-2 bg-purple-500/10 text-purple-500 border-purple-500/30">Ativo</Badge>
                </CardContent>
              </Card>
            </div>
            
            <div className="grid gap-6 md:grid-cols-3">
              <div className="col-span-full">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      {activeModel === "segmentation" && (
                        <>
                          <Users className="h-5 w-5 mr-2 text-blue-500" />
                          Segmentação de Clientes
                        </>
                      )}
                      {activeModel === "recommendation" && (
                        <>
                          <ShoppingCart className="h-5 w-5 mr-2 text-green-500" />
                          Recomendação de Produtos
                        </>
                      )}
                      {activeModel === "churn" && (
                        <>
                          <TrendingUp className="h-5 w-5 mr-2 text-red-500" />
                          Previsão de Churn
                        </>
                      )}
                      {activeModel === "lifetime" && (
                        <>
                          <CheckCircle className="h-5 w-5 mr-2 text-purple-500" />
                          LTV Prediction
                        </>
                      )}
                    </CardTitle>
                    <CardDescription>
                      {activeModel === "segmentation" && "Visualize e teste o modelo de segmentação de clientes"}
                      {activeModel === "recommendation" && "Teste o modelo de recomendação de produtos para seus clientes"}
                      {activeModel === "churn" && "Identifique clientes com maior probabilidade de abandono"}
                      {activeModel === "lifetime" && "Estime o valor vitalício futuro de seus clientes"}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {activeModel === "segmentation" && <CustomerSegmentation />}
                    {activeModel === "recommendation" && <ProductRecommendation />}
                    {activeModel === "churn" && <ChurnPrediction />}
                    {activeModel === "lifetime" && <ModelPrediction type="lifetime" />}
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Modelos Ativos</CardTitle>
                  <CardDescription>
                    Status e performance dos modelos ativos
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="accuracy">
                    <TabsList className="mb-4 w-full">
                      <TabsTrigger value="accuracy" className="flex-1">
                        <LineChart className="h-4 w-4 mr-1" />
                        Acurácia
                      </TabsTrigger>
                      <TabsTrigger value="usage" className="flex-1">
                        <BarChart3 className="h-4 w-4 mr-1" />
                        Uso
                      </TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="accuracy" className="h-[300px]">
                      <BarChart
                        data={[
                          { name: "Segmentação", Acurácia: 92 },
                          { name: "Recomendação", Acurácia: 87 },
                          { name: "Churn", Acurácia: 83 },
                          { name: "LTV", Acurácia: 78 },
                        ]}
                        categories={["Acurácia"]}
                        index="name"
                        colors={["#3b82f6"]}
                        valueFormatter={(value) => `${value}%`}
                        className="h-[300px]"
                      />
                    </TabsContent>
                    
                    <TabsContent value="usage" className="h-[300px]">
                      <PieChart
                        data={[
                          { name: "Segmentação", value: 42 },
                          { name: "Recomendação", value: 28 },
                          { name: "Churn", value: 16 },
                          { name: "LTV", value: 14 },
                        ]}
                        category="value"
                        index="name"
                        colors={["#3b82f6", "#10b981", "#ef4444", "#8b5cf6"]}
                        valueFormatter={(value) => `${value}%`}
                        className="h-[300px]"
                      />
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Histórico de Treinamento</CardTitle>
                  <CardDescription>
                    Informações sobre os últimos treinamentos dos modelos
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-3 border rounded-lg">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">Segmentação de Clientes</span>
                        <Badge variant="outline" className="bg-blue-500/10 text-blue-500 border-blue-500/30">
                          Treinado: 2 dias atrás
                        </Badge>
                      </div>
                      <div className="mt-2 flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Dados utilizados: 12.495 clientes</span>
                        <span className="text-sm text-muted-foreground">Acurácia: 92.3%</span>
                      </div>
                    </div>
                    
                    <div className="p-3 border rounded-lg">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">Recomendação de Produtos</span>
                        <Badge variant="outline" className="bg-green-500/10 text-green-500 border-green-500/30">
                          Treinado: 1 semana atrás
                        </Badge>
                      </div>
                      <div className="mt-2 flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Dados utilizados: 28.752 interações</span>
                        <span className="text-sm text-muted-foreground">Acurácia: 87.1%</span>
                      </div>
                    </div>
                    
                    <div className="p-3 border rounded-lg">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">Previsão de Churn</span>
                        <Badge variant="outline" className="bg-red-500/10 text-red-500 border-red-500/30">
                          Treinado: 2 semanas atrás
                        </Badge>
                      </div>
                      <div className="mt-2 flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Dados utilizados: 9.843 clientes</span>
                        <span className="text-sm text-muted-foreground">Acurácia: 83.4%</span>
                      </div>
                    </div>
                    
                    <div className="p-3 border rounded-lg">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">LTV Prediction</span>
                        <Badge variant="outline" className="bg-purple-500/10 text-purple-500 border-purple-500/30">
                          Treinado: 1 mês atrás
                        </Badge>
                      </div>
                      <div className="mt-2 flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Dados utilizados: 7.216 clientes</span>
                        <span className="text-sm text-muted-foreground">Acurácia: 78.9%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </>
        ) : (
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="h-5 w-5 mr-2 text-primary" />
                  Automações de Modelos
                </CardTitle>
                <CardDescription>
                  Configure automações para executar ações nas plataformas integradas com base em previsões de modelos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ModelAutomations />
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </>
  );
};

export default PredictiveModels;
