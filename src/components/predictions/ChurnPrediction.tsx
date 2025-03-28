
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Badge } from "@/components/ui/badge";
import { useForm } from "react-hook-form";
import { ArrowRight, RefreshCw, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { BarChart } from "@/components/ui/chart";

type ChurnResult = {
  customerId: string;
  churnProbability: number;
  riskLevel: "low" | "medium" | "high";
  retentionFactors: { factor: string; impact: number }[];
  churnFactors: { factor: string; impact: number }[];
};

export function ChurnPrediction() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<ChurnResult | null>(null);
  
  const form = useForm({
    defaultValues: {
      customerId: "",
    },
  });
  
  const onSubmit = async (data: any) => {
    setIsLoading(true);
    
    // Simulate API call for churn prediction
    setTimeout(() => {
      // Random churn probability between 0.1 and 0.9
      const probability = Math.random() * 0.8 + 0.1;
      let riskLevel: "low" | "medium" | "high";
      
      if (probability < 0.3) riskLevel = "low";
      else if (probability < 0.7) riskLevel = "medium";
      else riskLevel = "high";
      
      setResult({
        customerId: data.customerId,
        churnProbability: probability,
        riskLevel,
        churnFactors: [
          { factor: "Inatividade recente", impact: Math.random() * 0.5 + 0.2 },
          { factor: "Alto número de reclamações", impact: Math.random() * 0.3 + 0.1 },
          { factor: "Baixo engajamento com emails", impact: Math.random() * 0.2 + 0.1 },
        ],
        retentionFactors: [
          { factor: "Histórico de compras frequentes", impact: Math.random() * 0.3 + 0.1 },
          { factor: "Participação em programa de fidelidade", impact: Math.random() * 0.2 + 0.1 },
          { factor: "Engajamento em redes sociais", impact: Math.random() * 0.2 + 0.1 },
        ]
      });
      
      setIsLoading(false);
      
      toast({
        title: "Análise de Churn concluída",
        description: "A previsão de abandono foi calculada com sucesso.",
      });
    }, 1800);
  };
  
  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "high":
        return "text-red-500 bg-red-500/10 border-red-500/30";
      case "medium":
        return "text-yellow-500 bg-yellow-500/10 border-yellow-500/30";
      case "low":
        return "text-green-500 bg-green-500/10 border-green-500/30";
      default:
        return "";
    }
  };
  
  return (
    <div className="space-y-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-4">
          <FormField
            control={form.control}
            name="customerId"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>ID do Cliente</FormLabel>
                <FormControl>
                  <Input placeholder="Digite o ID do cliente" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          
          <div className="self-end">
            <Button type="submit" disabled={isLoading}>
              {isLoading ? (
                <>
                  <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                  Analisando...
                </>
              ) : (
                "Analisar Risco"
              )}
            </Button>
          </div>
        </form>
      </Form>
      
      {result && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <Card className="p-4 border">
            <div className="text-center mb-4">
              <h3 className="text-lg font-medium">Probabilidade de Churn</h3>
              <div className="relative inline-block my-4">
                <svg className="w-32 h-32">
                  <circle
                    className="text-muted-foreground/20"
                    strokeWidth="8"
                    stroke="currentColor"
                    fill="transparent"
                    r="56"
                    cx="64"
                    cy="64"
                  />
                  <circle
                    className={result.riskLevel === "high" ? "text-red-500" : result.riskLevel === "medium" ? "text-yellow-500" : "text-green-500"}
                    strokeWidth="8"
                    strokeDasharray={`${result.churnProbability * 352} 352`}
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                    r="56"
                    cx="64"
                    cy="64"
                    transform="rotate(-90 64 64)"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold">{Math.round(result.churnProbability * 100)}%</span>
                </div>
              </div>
              <Badge variant="outline" className={getRiskColor(result.riskLevel)}>
                Risco {result.riskLevel === "high" ? "Alto" : result.riskLevel === "medium" ? "Médio" : "Baixo"}
              </Badge>
            </div>
            
            <div className="space-y-2 mt-4">
              <h4 className="text-sm font-medium">Ações Recomendadas:</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                {result.riskLevel === "high" && (
                  <>
                    <li>• Contato direto via telefone</li>
                    <li>• Oferta personalizada de desconto</li>
                    <li>• Programa de fidelidade premium</li>
                  </>
                )}
                {result.riskLevel === "medium" && (
                  <>
                    <li>• Email com oferta exclusiva</li>
                    <li>• Convite para programa de fidelidade</li>
                    <li>• Incentivo para nova compra</li>
                  </>
                )}
                {result.riskLevel === "low" && (
                  <>
                    <li>• Manter comunicação regular</li>
                    <li>• Convidar para avaliações de produtos</li>
                    <li>• Compartilhar novidades da marca</li>
                  </>
                )}
              </ul>
            </div>
          </Card>
          
          <div className="space-y-6">
            <Card className="p-4">
              <h3 className="text-sm font-medium mb-3">Fatores de Churn</h3>
              <BarChart
                data={result.churnFactors.map(item => ({ 
                  name: item.factor, 
                  Impacto: Math.round(item.impact * 100) 
                }))}
                categories={["Impacto"]}
                index="name"
                colors={["#ef4444"]}
                valueFormatter={(value) => `${value}%`}
                className="h-[120px]"
              />
            </Card>
            
            <Card className="p-4">
              <h3 className="text-sm font-medium mb-3">Fatores de Retenção</h3>
              <BarChart
                data={result.retentionFactors.map(item => ({ 
                  name: item.factor, 
                  Impacto: Math.round(item.impact * 100) 
                }))}
                categories={["Impacto"]}
                index="name"
                colors={["#10b981"]}
                valueFormatter={(value) => `${value}%`}
                className="h-[120px]"
              />
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}
