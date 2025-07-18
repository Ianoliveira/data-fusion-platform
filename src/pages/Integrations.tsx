
import { useState } from "react";
import { Helmet } from "react-helmet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Plus, 
  Check, 
  AlertTriangle, 
  Clock, 
  Database, 
  ArrowRight, 
  Link2,
  Zap,
  Settings,
  FileText,
  Layers,
  Workflow
} from "lucide-react";
import { availableIntegrations, activeIntegrations } from "@/data/mockData";
import { useToast } from "@/hooks/use-toast";

const Integrations = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredIntegrations = (integrations: any) => {
    return Object.entries(integrations).map(([category, items]) => ({
      category,
      items: (items as any[]).filter(item => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    })).filter(category => category.items.length > 0);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "connected":
        return <Check className="h-4 w-4 text-green-500" />;
      case "error":
        return <AlertTriangle className="h-4 w-4 text-destructive" />;
      case "pending":
        return <Clock className="h-4 w-4 text-yellow-500" />;
      default:
        return null;
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case "crm":
        return "CRM";
      case "erp":
        return "ERP";
      case "analytics":
        return "Analytics";
      case "ads":
        return "ADS";
      case "ecommerce":
        return "E-commerce";
      default:
        return category;
    }
  };

  const handleShowAutomations = () => {
    toast({
      title: "Redirecionando para automações",
      description: "Você está sendo redirecionado para a página de automações.",
    });
    
    // In a real application, this would navigate to the automations page
    setTimeout(() => {
      window.location.href = "/predictive-models";
    }, 1000);
  };

  return (
    <>
      <Helmet>
        <title>Integrações - Twiggy.ai</title>
      </Helmet>
      
      <div className="space-y-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Integrações</h1>
          <p className="text-muted-foreground">
            Conecte suas plataformas e centralize seus dados em um único lugar.
          </p>
        </div>

        <div className="flex items-center justify-between">
          <div className="relative w-64">
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar integrações..."
              className="pl-8"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Nova Integração
          </Button>
        </div>

        <Tabs defaultValue="active">
          <TabsList>
            <TabsTrigger value="active">Ativas</TabsTrigger>
            <TabsTrigger value="available">Disponíveis</TabsTrigger>
            <TabsTrigger value="data-flow">Fluxo de Dados</TabsTrigger>
            <TabsTrigger value="capabilities">Capacidades</TabsTrigger>
          </TabsList>
          
          <TabsContent value="active" className="mt-6">
            <div className="grid gap-6">
              {activeIntegrations.filter(integration => 
                integration.name.toLowerCase().includes(searchTerm.toLowerCase())
              ).map(integration => (
                <Card key={integration.id}>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                          <Database className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{integration.name}</CardTitle>
                          <CardDescription>
                            <Badge variant="outline" className="mt-1">{integration.category}</Badge>
                          </CardDescription>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant={integration.status === "connected" ? "outline" : integration.status === "error" ? "destructive" : "secondary"} className="gap-1">
                          {getStatusIcon(integration.status)}
                          <span>
                            {integration.status === "connected" ? "Conectado" : 
                             integration.status === "error" ? "Erro" : "Pendente"}
                          </span>
                        </Badge>
                        <Button variant="outline" size="sm">Configurar</Button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Última sincronização</p>
                        <p className="font-medium">{integration.lastSync}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Pontos de dados</p>
                        <p className="font-medium">{integration.dataPoints.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Próxima sincronização</p>
                        <p className="font-medium">
                          {integration.status === "connected" ? "Em 1 hora" : 
                           integration.status === "error" ? "Manual necessário" : "Após configuração"}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="available" className="mt-6">
            <div className="space-y-8">
              {filteredIntegrations(availableIntegrations).map(({ category, items }) => (
                <div key={category}>
                  <h3 className="text-lg font-semibold mb-4">{getCategoryLabel(category)}</h3>
                  <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {items.map((item: any) => (
                      <Card key={item.id} className="hover:bg-muted/50 transition-colors">
                        <CardHeader className="p-4">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                              <Database className="h-5 w-5 text-primary" />
                            </div>
                            <div>
                              <CardTitle className="text-base">{item.name}</CardTitle>
                            </div>
                          </div>
                        </CardHeader>
                        <CardFooter className="p-4 pt-0">
                          <Button variant="outline" size="sm" className="w-full">
                            <Link2 className="h-4 w-4 mr-1" />
                            Conectar
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
              
              {filteredIntegrations(availableIntegrations).length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">Nenhuma integração encontrada para "{searchTerm}"</p>
                </div>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="data-flow" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Fluxo de Dados</CardTitle>
                <CardDescription>
                  Visualize como os dados fluem entre suas integrações e o Data Lake
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-muted/50 p-6 rounded-lg text-center">
                  <div className="grid sm:grid-cols-3 gap-4 items-center mb-8">
                    <div className="space-y-2">
                      <h3 className="font-medium">Fontes de Dados</h3>
                      <div className="grid gap-2">
                        {["Salesforce", "Google Analytics", "Shopify", "Meta Ads", "HubSpot"].map(source => (
                          <div key={source} className="border bg-card p-2 rounded flex items-center justify-center shadow-sm">
                            {source}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <ArrowRight className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <div className="border border-primary bg-primary/5 p-4 rounded-lg flex items-center justify-center shadow">
                      <div className="text-center">
                        <Database className="h-10 w-10 text-primary mx-auto mb-2" />
                        <h3 className="font-medium text-lg">Data Lake</h3>
                        <p className="text-sm text-muted-foreground">ETL Automatizado</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid sm:grid-cols-3 gap-4 items-center">
                    <div className="border border-primary bg-primary/5 p-4 rounded-lg flex items-center justify-center shadow order-3 sm:order-1">
                      <div className="text-center">
                        <h3 className="font-medium text-lg">Insights & Predições</h3>
                        <p className="text-sm text-muted-foreground">Modelos de IA & Análises Automáticas</p>
                      </div>
                    </div>
                    <div className="flex justify-center order-2">
                      <ArrowRight className="h-8 w-8 text-muted-foreground transform rotate-90 sm:rotate-0" />
                    </div>
                    <div className="space-y-2 order-1 sm:order-3">
                      <h3 className="font-medium">Outputs & Ações</h3>
                      <div className="grid gap-2">
                        {["Relatórios", "Automações", "Alertas", "Visualizações", "API"].map(output => (
                          <div key={output} className="border bg-card p-2 rounded flex items-center justify-center shadow-sm">
                            {output}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <p className="text-sm text-muted-foreground">
                  Os dados são processados, normalizados e armazenados de forma segura no Data Lake antes de serem utilizados para análises e ações.
                </p>
              </CardFooter>
            </Card>
          </TabsContent>
          
          <TabsContent value="capabilities" className="mt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Zap className="h-5 w-5 mr-2 text-amber-500" />
                    Automações MCP
                  </CardTitle>
                  <CardDescription>
                    Machine Control Points para automação de ações nas plataformas integradas
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <h4 className="font-medium mb-2">Ações disponíveis</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        <span>Criação de registros em CRMs</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        <span>Envio de comunicações automatizadas</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        <span>Segmentação de audiências para campanhas</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-green-500" />
                        <span>Gatilhos baseados em modelos preditivos</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="rounded-lg border p-4">
                    <h4 className="font-medium mb-2">Plataformas conectadas com automação</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="flex items-center gap-1">
                        <Check className="h-4 w-4 text-green-500" />
                        <span>Salesforce</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Check className="h-4 w-4 text-green-500" />
                        <span>HubSpot</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Check className="h-4 w-4 text-green-500" />
                        <span>Mailchimp</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Check className="h-4 w-4 text-green-500" />
                        <span>Shopify</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <AlertTriangle className="h-4 w-4 text-yellow-500" />
                        <span>Facebook Ads (pendente)</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <AlertTriangle className="h-4 w-4 text-yellow-500" />
                        <span>Google Ads (pendente)</span>
                      </div>
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full" 
                    variant="default"
                    onClick={handleShowAutomations}
                  >
                    <Workflow className="h-4 w-4 mr-2" />
                    Ver Automações Configuradas
                  </Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Settings className="h-5 w-5 mr-2 text-blue-500" />
                    Capacidades de Integração
                  </CardTitle>
                  <CardDescription>
                    Recursos e funcionalidades disponíveis nas plataformas integradas
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="rounded-lg border p-4">
                    <h4 className="font-medium mb-2">Recursos de dados</h4>
                    <div className="grid gap-2 text-sm">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          <Layers className="h-4 w-4 text-primary" />
                          <span>Sincronização bidirecional</span>
                        </div>
                        <Badge>Disponível</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          <Layers className="h-4 w-4 text-primary" />
                          <span>Transformação automática</span>
                        </div>
                        <Badge>Disponível</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          <Layers className="h-4 w-4 text-primary" />
                          <span>Enriquecimento de dados</span>
                        </div>
                        <Badge>Disponível</Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          <Layers className="h-4 w-4 text-primary" />
                          <span>Histograma de alterações</span>
                        </div>
                        <Badge variant="outline">Em breve</Badge>
                      </div>
                    </div>
                  </div>
                  
                  <div className="rounded-lg border p-4">
                    <h4 className="font-medium mb-2">Protocolos suportados</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="flex items-center gap-1">
                        <Check className="h-4 w-4 text-green-500" />
                        <span>REST API</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Check className="h-4 w-4 text-green-500" />
                        <span>Webhooks</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Check className="h-4 w-4 text-green-500" />
                        <span>OAuth 2.0</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Check className="h-4 w-4 text-green-500" />
                        <span>SFTP</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Check className="h-4 w-4 text-green-500" />
                        <span>GraphQL</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <AlertTriangle className="h-4 w-4 text-yellow-500" />
                        <span>SOAP (limitado)</span>
                      </div>
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full">
                    <FileText className="h-4 w-4 mr-2" />
                    Ver Documentação de API
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default Integrations;
