
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { AlertCircle, CheckCircle2, ExternalLink, Info, Play, RotateCw, Settings, Zap } from "lucide-react";
import { AutomationDetails } from "./AutomationDetails";

const formSchema = z.object({
  modelType: z.string(),
  platform: z.string(),
  triggerThreshold: z.number().min(0).max(100),
  action: z.string(),
  isActive: z.boolean().default(false),
});

type Platform = {
  id: string;
  name: string;
  icon: string;
  connected: boolean;
  actions: string[];
};

const platforms: Platform[] = [
  { 
    id: "salesforce", 
    name: "Salesforce", 
    icon: "crm", 
    connected: true, 
    actions: ["Criar oportunidade", "Atualizar lead", "Enviar alerta", "Adicionar à campanha"] 
  },
  { 
    id: "hubspot", 
    name: "HubSpot", 
    icon: "crm", 
    connected: true, 
    actions: ["Criar ticket", "Atualizar contato", "Enviar email", "Adicionar à sequência"] 
  },
  { 
    id: "mailchimp", 
    name: "Mailchimp", 
    icon: "marketing", 
    connected: true, 
    actions: ["Adicionar à lista", "Enviar campanha", "Atualizar tags", "Criar segmento"] 
  },
  { 
    id: "shopify", 
    name: "Shopify", 
    icon: "ecommerce", 
    connected: true, 
    actions: ["Criar desconto", "Enviar abandonos", "Atualizar produto", "Notificar equipe"] 
  },
  { 
    id: "ads", 
    name: "Facebook Ads", 
    icon: "ads", 
    connected: false, 
    actions: ["Ajustar orçamento", "Pausar campanha", "Criar público", "Duplicar anúncio"] 
  },
];

export function ModelAutomations() {
  const { toast } = useToast();
  const [selectedAutomation, setSelectedAutomation] = useState<any>(null);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [activeAutomations, setActiveAutomations] = useState<any[]>([
    {
      id: "auto1",
      modelType: "churn",
      platform: "salesforce",
      triggerThreshold: 75,
      action: "Criar oportunidade",
      isActive: true,
      lastRun: "2 horas atrás",
      totalRuns: 28,
      success: 26,
    },
    {
      id: "auto2",
      modelType: "recommendation",
      platform: "mailchimp",
      triggerThreshold: 85,
      action: "Enviar campanha",
      isActive: true,
      lastRun: "6 horas atrás",
      totalRuns: 12,
      success: 12,
    }
  ]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      modelType: "segmentation",
      platform: "salesforce",
      triggerThreshold: 70,
      action: "Criar oportunidade",
      isActive: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const newAutomation = {
      id: `auto${activeAutomations.length + 1}`,
      ...values,
      lastRun: "Nunca",
      totalRuns: 0,
      success: 0,
    };
    
    setActiveAutomations([...activeAutomations, newAutomation]);
    
    toast({
      title: "Automação criada",
      description: "A nova automação foi configurada com sucesso.",
    });
  }

  const handleToggleAutomation = (id: string) => {
    setActiveAutomations(
      activeAutomations.map((auto) => 
        auto.id === id ? { ...auto, isActive: !auto.isActive } : auto
      )
    );
    
    const automation = activeAutomations.find(auto => auto.id === id);
    if (automation) {
      toast({
        title: `Automação ${automation.isActive ? 'desativada' : 'ativada'}`,
        description: `A automação foi ${automation.isActive ? 'desativada' : 'ativada'} com sucesso.`,
      });
    }
  };

  const handleRunNow = (id: string) => {
    toast({
      title: "Executando automação",
      description: "A automação está sendo executada manualmente.",
    });
    
    setTimeout(() => {
      setActiveAutomations(
        activeAutomations.map((auto) => 
          auto.id === id 
            ? { 
                ...auto, 
                lastRun: "Agora", 
                totalRuns: auto.totalRuns + 1,
                success: auto.success + 1
              } 
            : auto
        )
      );
      
      toast({
        title: "Automação executada",
        description: "A automação foi executada com sucesso.",
      });
    }, 1500);
  };

  const openAutomationDetails = (automation: any) => {
    setSelectedAutomation(automation);
    setDetailsOpen(true);
  };

  const getContextColors = (type: string) => {
    switch (type) {
      case "churn":
        return "bg-red-500/10 text-red-500";
      case "recommendation":
        return "bg-green-500/10 text-green-500";
      case "segmentation":
        return "bg-blue-500/10 text-blue-500";
      case "lifetime":
        return "bg-purple-500/10 text-purple-500";
      default:
        return "bg-primary/10 text-primary";
    }
  };

  return (
    <>
      <Tabs defaultValue="active" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="active">Automações Ativas</TabsTrigger>
          <TabsTrigger value="create">Criar Automação</TabsTrigger>
        </TabsList>
        
        <TabsContent value="active" className="space-y-4 mt-4">
          {activeAutomations.length === 0 ? (
            <div className="text-center py-10 border rounded-lg">
              <p className="text-muted-foreground">Nenhuma automação configurada</p>
              <Button variant="outline" className="mt-4">Criar primeira automação</Button>
            </div>
          ) : (
            activeAutomations.map((auto) => (
              <Card key={auto.id} className={auto.isActive ? "border-primary/20 shadow-sm" : ""}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className={`p-1.5 rounded mr-2 ${
                        auto.modelType === "churn" ? "bg-red-500/10" : 
                        auto.modelType === "recommendation" ? "bg-green-500/10" : 
                        auto.modelType === "segmentation" ? "bg-blue-500/10" : 
                        "bg-purple-500/10"
                      }`}>
                        <Zap className={`h-4 w-4 ${
                          auto.modelType === "churn" ? "text-red-500" : 
                          auto.modelType === "recommendation" ? "text-green-500" : 
                          auto.modelType === "segmentation" ? "text-blue-500" : 
                          "text-purple-500"
                        }`} />
                      </div>
                      <CardTitle className="text-md">
                        {auto.modelType === "churn" ? "Automação de Churn" : 
                        auto.modelType === "recommendation" ? "Automação de Recomendação" : 
                        auto.modelType === "segmentation" ? "Automação de Segmentação" : 
                        "Automação de LTV"}
                      </CardTitle>
                    </div>
                    <Switch 
                      checked={auto.isActive}
                      onCheckedChange={() => handleToggleAutomation(auto.id)}
                    />
                  </div>
                  <CardDescription className="flex items-center gap-1 mt-1">
                    {auto.isActive ? (
                      <>
                        <CheckCircle2 className="h-3 w-3 text-green-500" />
                        <span>Ativo</span>
                      </>
                    ) : (
                      <>
                        <AlertCircle className="h-3 w-3 text-muted-foreground" />
                        <span>Inativo</span>
                      </>
                    )}
                    <span className="mx-1">•</span>
                    <span>Última execução: {auto.lastRun}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-2">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Plataforma</p>
                      <p className="font-medium">{platforms.find(p => p.id === auto.platform)?.name || auto.platform}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Ação</p>
                      <p className="font-medium">{auto.action}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Limite de ativação</p>
                      <p className="font-medium">{auto.triggerThreshold}%</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Execuções</p>
                      <p className="font-medium">{auto.totalRuns} ({auto.success} bem-sucedidas)</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => openAutomationDetails(auto)}
                    className="gap-1"
                  >
                    <Settings className="h-4 w-4" />
                    Detalhes
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => handleRunNow(auto.id)}
                    disabled={!auto.isActive}
                    className="gap-1"
                  >
                    <Play className="h-4 w-4" />
                    Executar
                  </Button>
                </CardFooter>
              </Card>
            ))
          )}
        </TabsContent>
        
        <TabsContent value="create" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Nova Automação</CardTitle>
              <CardDescription>
                Configure uma automação baseada em previsões de modelo de machine learning
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="modelType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Modelo</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecione um modelo" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="segmentation">Segmentação de Clientes</SelectItem>
                            <SelectItem value="recommendation">Recomendação de Produtos</SelectItem>
                            <SelectItem value="churn">Previsão de Churn</SelectItem>
                            <SelectItem value="lifetime">LTV Prediction</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormDescription>
                          Selecione o modelo que deseja utilizar para esta automação
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="platform"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Plataforma</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecione uma plataforma" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {platforms.map((platform) => (
                              <SelectItem key={platform.id} value={platform.id} disabled={!platform.connected}>
                                {platform.name} {!platform.connected && "(Não conectado)"}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormDescription>
                          Selecione a plataforma onde a ação será executada
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="action"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Ação</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecione uma ação" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {platforms
                              .find(p => p.id === form.watch("platform"))
                              ?.actions.map((action) => (
                                <SelectItem key={action} value={action}>
                                  {action}
                                </SelectItem>
                              ))}
                          </SelectContent>
                        </Select>
                        <FormDescription>
                          Selecione a ação que será executada quando o limite for atingido
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="triggerThreshold"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Limite de ativação: {field.value}%</FormLabel>
                        <FormControl>
                          <Slider
                            value={[field.value]}
                            min={0}
                            max={100}
                            step={1}
                            onValueChange={(value) => field.onChange(value[0])}
                            className="mt-2"
                          />
                        </FormControl>
                        <FormDescription>
                          Defina o percentual de confiança do modelo que acionará a automação
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="isActive"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                        <div className="space-y-0.5">
                          <FormLabel>Ativar automação</FormLabel>
                          <FormDescription>
                            A automação estará ativa imediatamente após a criação
                          </FormDescription>
                        </div>
                        <FormControl>
                          <Switch
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  
                  <Button type="submit" className="w-full">
                    <Zap className="mr-2 h-4 w-4" /> Criar Automação
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      <AutomationDetails 
        open={detailsOpen} 
        onOpenChange={setDetailsOpen} 
        automation={selectedAutomation} 
      />
    </>
  );
}
