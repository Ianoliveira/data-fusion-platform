
import { useState } from "react";
import { z } from "zod";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { AutomationDetails } from "./AutomationDetails";
import { ActiveAutomations } from "./automations/ActiveAutomations";
import { AutomationForm } from "./automations/AutomationForm";
import { PLATFORMS } from "./automations/constants";
import { Automation } from "./automations/AutomationCard";

export function ModelAutomations() {
  const { toast } = useToast();
  const [selectedAutomation, setSelectedAutomation] = useState<Automation | null>(null);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [activeAutomations, setActiveAutomations] = useState<Automation[]>([
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

  function onSubmit(values: z.infer<any>) {
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

  const openAutomationDetails = (automation: Automation) => {
    setSelectedAutomation(automation);
    setDetailsOpen(true);
  };

  return (
    <>
      <Tabs defaultValue="active" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="active">Automações Ativas</TabsTrigger>
          <TabsTrigger value="create">Criar Automação</TabsTrigger>
        </TabsList>
        
        <TabsContent value="active" className="space-y-4 mt-4">
          <ActiveAutomations 
            automations={activeAutomations}
            platforms={PLATFORMS}
            onToggleAutomation={handleToggleAutomation}
            onRunNow={handleRunNow}
            onOpenDetails={openAutomationDetails}
          />
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
              <AutomationForm 
                platforms={PLATFORMS}
                onSubmit={onSubmit}
              />
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
