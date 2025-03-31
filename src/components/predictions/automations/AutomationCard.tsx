
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { AlertCircle, CheckCircle2, Play, Settings, Zap } from "lucide-react";
import { Platform } from "./AutomationForm";

export type Automation = {
  id: string;
  modelType: string;
  platform: string;
  triggerThreshold: number;
  action: string;
  isActive: boolean;
  lastRun: string;
  totalRuns: number;
  success: number;
};

type AutomationCardProps = {
  automation: Automation;
  platforms: Platform[];
  onToggle: (id: string) => void;
  onRunNow: (id: string) => void;
  onOpenDetails: (automation: Automation) => void;
};

export function AutomationCard({ 
  automation, 
  platforms, 
  onToggle, 
  onRunNow, 
  onOpenDetails 
}: AutomationCardProps) {
  return (
    <Card className={automation.isActive ? "border-primary/20 shadow-sm" : ""}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className={`p-1.5 rounded mr-2 ${
              automation.modelType === "churn" ? "bg-red-500/10" : 
              automation.modelType === "recommendation" ? "bg-green-500/10" : 
              automation.modelType === "segmentation" ? "bg-blue-500/10" : 
              "bg-purple-500/10"
            }`}>
              <Zap className={`h-4 w-4 ${
                automation.modelType === "churn" ? "text-red-500" : 
                automation.modelType === "recommendation" ? "text-green-500" : 
                automation.modelType === "segmentation" ? "text-blue-500" : 
                "text-purple-500"
              }`} />
            </div>
            <CardTitle className="text-md">
              {automation.modelType === "churn" ? "Automação de Churn" : 
              automation.modelType === "recommendation" ? "Automação de Recomendação" : 
              automation.modelType === "segmentation" ? "Automação de Segmentação" : 
              "Automação de LTV"}
            </CardTitle>
          </div>
          <Switch 
            checked={automation.isActive}
            onCheckedChange={() => onToggle(automation.id)}
          />
        </div>
        <CardDescription className="flex items-center gap-1 mt-1">
          {automation.isActive ? (
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
          <span>Última execução: {automation.lastRun}</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-muted-foreground">Plataforma</p>
            <p className="font-medium">{platforms.find(p => p.id === automation.platform)?.name || automation.platform}</p>
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
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button 
          variant="outline" 
          size="sm" 
          onClick={() => onOpenDetails(automation)}
          className="gap-1"
        >
          <Settings className="h-4 w-4" />
          Detalhes
        </Button>
        <Button 
          variant="outline" 
          size="sm" 
          onClick={() => onRunNow(automation.id)}
          disabled={!automation.isActive}
          className="gap-1"
        >
          <Play className="h-4 w-4" />
          Executar
        </Button>
      </CardFooter>
    </Card>
  );
}
