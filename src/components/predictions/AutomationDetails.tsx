
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, CheckCircle2, Clock, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type AutomationDetailsProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  automation: any; // Replace with proper type when available
};

export function AutomationDetails({ open, onOpenChange, automation }: AutomationDetailsProps) {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [logs, setLogs] = useState([
    {
      id: 1,
      timestamp: "2023-07-23 14:32:18",
      action: "Automação ativada",
      status: "success"
    },
    {
      id: 2,
      timestamp: "2023-07-23 15:45:12",
      action: "Execução automática (cliente ID: 8739)",
      status: "success"
    },
    {
      id: 3,
      timestamp: "2023-07-24 09:12:05",
      action: "Execução automática (cliente ID: 9283)",
      status: "warning",
      message: "Aviso: Limite de taxa da API atingido"
    },
    {
      id: 4,
      timestamp: "2023-07-25 11:23:42",
      action: "Execução automática (cliente ID: 6372)",
      status: "success"
    },
  ]);

  if (!automation) return null;

  const handleTestRun = () => {
    setIsLoading(true);
    toast({
      title: "Teste iniciado",
      description: "Executando teste da automação...",
    });
    
    setTimeout(() => {
      setLogs([
        {
          id: logs.length + 1,
          timestamp: new Date().toLocaleString('pt-BR', { 
            year: 'numeric', 
            month: '2-digit', 
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
          }).replace(',', ''),
          action: "Execução manual de teste",
          status: "success"
        },
        ...logs
      ]);
      
      setIsLoading(false);
      toast({
        title: "Teste concluído",
        description: "A automação foi testada com sucesso.",
      });
    }, 2000);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "success":
        return <CheckCircle2 className="h-4 w-4 text-green-500" />;
      case "error":
        return <AlertCircle className="h-4 w-4 text-destructive" />;
      case "warning":
        return <AlertCircle className="h-4 w-4 text-yellow-500" />;
      case "pending":
        return <Clock className="h-4 w-4 text-yellow-500" />;
      default:
        return null;
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Detalhes da Automação</DialogTitle>
          <DialogDescription>
            Gerenciar detalhes e histórico de execuções da automação
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid gap-4 py-2">
          <Card>
            <CardContent className="pt-6">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-muted-foreground">Modelo</p>
                  <p className="font-medium">
                    {automation.modelType === "churn" ? "Previsão de Churn" : 
                     automation.modelType === "recommendation" ? "Recomendação de Produtos" : 
                     automation.modelType === "segmentation" ? "Segmentação de Clientes" : 
                     "LTV Prediction"}
                  </p>
                </div>
                <div>
                  <p className="text-muted-foreground">Status</p>
                  <div className="flex items-center gap-1">
                    {automation.isActive ? (
                      <>
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span className="font-medium">Ativo</span>
                      </>
                    ) : (
                      <>
                        <AlertCircle className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">Inativo</span>
                      </>
                    )}
                  </div>
                </div>
                <div>
                  <p className="text-muted-foreground">Plataforma</p>
                  <p className="font-medium">
                    {automation.platform === "salesforce" ? "Salesforce" : 
                     automation.platform === "hubspot" ? "HubSpot" : 
                     automation.platform === "mailchimp" ? "Mailchimp" : 
                     automation.platform === "shopify" ? "Shopify" : 
                     "Facebook Ads"}
                  </p>
                </div>
                <div>
                  <p className="text-muted-foreground">Ação</p>
                  <p className="font-medium">{automation.action}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Limite de ativação</p>
                  <p className="font-medium">{automation.triggerThreshold}%</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Execuções</p>
                  <p className="font-medium">{automation.totalRuns} ({automation.success} bem-sucedidas)</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Criada em</p>
                  <p className="font-medium">23/07/2023</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Última execução</p>
                  <p className="font-medium">{automation.lastRun}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div>
            <h3 className="text-md font-medium mb-2">Histórico de Execuções</h3>
            <div className="space-y-2 max-h-[300px] overflow-y-auto pr-1">
              {logs.map((log) => (
                <div key={log.id} className="text-sm flex items-start border rounded-md p-2">
                  <div className="mt-0.5 mr-2">
                    {getStatusIcon(log.status)}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <span className="font-medium">{log.action}</span>
                      <span className="text-muted-foreground text-xs">{log.timestamp}</span>
                    </div>
                    {log.message && (
                      <p className="text-xs text-muted-foreground mt-1">{log.message}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-between mt-2">
            <Button variant="outline" onClick={() => onOpenChange(false)}>Fechar</Button>
            <Button 
              onClick={handleTestRun} 
              disabled={isLoading || !automation.isActive}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Executando...
                </>
              ) : (
                <>
                  Testar Automação
                </>
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
