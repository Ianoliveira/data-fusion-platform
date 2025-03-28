
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, AlertCircle, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

type Integration = {
  id: string;
  name: string;
  category: string;
  status: "connected" | "error" | "pending";
  lastSync: string;
  dataPoints: number;
};

type IntegrationsListProps = {
  integrations: Integration[];
};

export function IntegrationsList({ integrations }: IntegrationsListProps) {
  const getStatusIcon = (status: Integration["status"]) => {
    switch (status) {
      case "connected":
        return <CheckCircle2 className="h-4 w-4 text-green-500" />;
      case "error":
        return <AlertCircle className="h-4 w-4 text-destructive" />;
      case "pending":
        return <Clock className="h-4 w-4 text-yellow-500" />;
    }
  };

  const getStatusText = (status: Integration["status"]) => {
    switch (status) {
      case "connected":
        return "Conectado";
      case "error":
        return "Erro";
      case "pending":
        return "Pendente";
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "CRM":
        return "bg-blue-500";
      case "ERP":
        return "bg-purple-500";
      case "Analytics":
        return "bg-green-500";
      case "ADS":
        return "bg-red-500";
      case "E-commerce":
        return "bg-yellow-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Integrações Ativas</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {integrations.map((integration) => (
            <div
              key={integration.id}
              className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className={cn("w-2 h-10 rounded-full", getCategoryColor(integration.category))} />
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium">{integration.name}</h3>
                    <Badge variant="outline">{integration.category}</Badge>
                  </div>
                  <div className="flex items-center mt-1 text-sm text-muted-foreground">
                    {getStatusIcon(integration.status)}
                    <span className="ml-1">{getStatusText(integration.status)}</span>
                    <span className="mx-2">•</span>
                    <span>Última sincronização: {integration.lastSync}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-32">
                  <div className="flex justify-between text-xs mb-1">
                    <span>Pontos de dados</span>
                    <span>{integration.dataPoints.toLocaleString()}</span>
                  </div>
                  <Progress value={Math.min(integration.dataPoints / 100, 100)} className="h-1.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
