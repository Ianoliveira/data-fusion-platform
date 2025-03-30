
import { Helmet } from "react-helmet";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Zap } from "lucide-react";
import { ModelAutomations } from "@/components/predictions/ModelAutomations";

const Automations = () => {
  return (
    <>
      <Helmet>
        <title>Automações - Twiggy.ai</title>
      </Helmet>
      
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight flex items-center">
              <Zap className="mr-2 h-6 w-6 text-primary" />
              Automações
            </h1>
            <p className="text-muted-foreground">
              Configure automações para executar ações nas plataformas integradas com base em previsões de modelos
            </p>
          </div>
        </div>
        
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
      </div>
    </>
  );
};

export default Automations;
