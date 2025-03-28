
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { ArrowRight, BrainCircuit, RefreshCw, Sparkles } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ModelPredictionProps {
  type: "lifetime" | "custom";
}

export function ModelPrediction({ type }: ModelPredictionProps) {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<number | null>(null);
  const [naturalQuery, setNaturalQuery] = useState("");
  const [naturalQueryResult, setNaturalQueryResult] = useState<string | null>(null);
  
  const form = useForm({
    defaultValues: {
      customerId: "",
      timeframe: "12",
    },
  });
  
  const onSubmit = async (data: any) => {
    setIsLoading(true);
    
    // Simulate API call for prediction
    setTimeout(() => {
      if (type === "lifetime") {
        // Generate a random LTV value between $1000 and $5000
        const predictedValue = Math.floor(Math.random() * 4000) + 1000;
        setResult(predictedValue);
      }
      
      setIsLoading(false);
      
      toast({
        title: "Previsão concluída",
        description: "Os resultados do modelo foram calculados com sucesso.",
      });
    }, 1500);
  };
  
  const handleNaturalQuerySubmit = () => {
    if (!naturalQuery.trim()) return;
    
    setIsLoading(true);
    
    // Simulate AI processing
    setTimeout(() => {
      let response = "";
      
      if (naturalQuery.toLowerCase().includes("cliente") || naturalQuery.toLowerCase().includes("clientes")) {
        response = `Com base na análise dos dados dos seus clientes, identificamos que:
        
1. Os clientes que fazem compras frequentes (mais de 3x por mês) têm 78% mais chances de permanecer ativos por mais de 12 meses.
2. O segmento de clientes da faixa etária 25-34 anos apresenta o maior valor médio de compra (R$ 320 por pedido).
3. Clientes que utilizam o aplicativo móvel têm taxa de conversão 2.3x maior que os que acessam via desktop.
4. Recomendamos focar em estratégias de retenção para o segmento de "compradores ocasionais" que representam 42% da sua base.`;
      } else if (naturalQuery.toLowerCase().includes("vendas") || naturalQuery.toLowerCase().includes("faturamento")) {
        response = `Análise de vendas dos últimos 6 meses:
        
1. Crescimento médio mensal de 8.5% no faturamento geral.
2. Os produtos da categoria "Tecnologia" representam 37% das vendas totais.
3. O ticket médio aumentou 12% desde a implementação da feature de recomendação de produtos.
4. As vendas por canais digitais superaram as vendas presenciais em 215%.
5. Projeção para o próximo trimestre indica crescimento potencial de 15-18% se as tendências atuais se mantiverem.`;
      } else if (naturalQuery.toLowerCase().includes("marketing") || naturalQuery.toLowerCase().includes("campanha")) {
        response = `Análise de desempenho de marketing:
        
1. Campanhas via email marketing têm ROI de 4.2x, superior às demais canais.
2. Posts patrocinados no Instagram geram 3.8x mais conversões que no Facebook.
3. O custo de aquisição de cliente (CAC) reduziu 23% nos últimos 3 meses.
4. Recomendação: Aumentar investimento em campanhas de remarketing, que apresentam taxa de conversão 5.1x maior.
5. O segmento "dormant customers" responde melhor às campanhas com descontos acima de 20%.`;
      } else {
        response = `Baseado na sua consulta "${naturalQuery}", encontramos os seguintes insights:
        
1. Os dados mostram um padrão de comportamento consistente relacionado a este tema.
2. Nossa análise preditiva sugere que há uma oportunidade de crescimento significativa nesta área.
3. Comparado com benchmarks do setor, seu desempenho está 15% acima da média.
4. Recomendamos monitorar estes indicadores mais de perto nas próximas semanas para identificar tendências emergentes.`;
      }
      
      setNaturalQueryResult(response);
      setIsLoading(false);
      
      toast({
        title: "Consulta processada",
        description: "A IA analisou sua pergunta e gerou insights relevantes.",
      });
    }, 1800);
  };
  
  return (
    <div className="space-y-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="customerId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>ID do Cliente</FormLabel>
                  <FormControl>
                    <Input placeholder="Digite o ID do cliente" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="timeframe"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Período de Predição (meses)</FormLabel>
                  <FormControl>
                    <Input type="number" min="1" max="60" placeholder="12" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          
          <div className="flex justify-end">
            <Button type="submit" disabled={isLoading}>
              {isLoading ? (
                <>
                  <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                  Processando...
                </>
              ) : (
                <>
                  <BrainCircuit className="mr-2 h-4 w-4" />
                  Gerar Previsão
                </>
              )}
            </Button>
          </div>
        </form>
      </Form>
      
      {result !== null && (
        <Card className="p-4 bg-muted/50 border">
          <div className="text-center">
            <h3 className="text-lg font-medium mb-2">Valor Vitalício Estimado (LTV)</h3>
            <div className="text-3xl font-bold text-primary">R$ {result.toLocaleString()}</div>
            <p className="text-sm text-muted-foreground mt-2">
              Estimativa para os próximos {form.getValues().timeframe} meses baseada no histórico de compras e comportamento do cliente.
            </p>
          </div>
        </Card>
      )}
      
      <div className="pt-4 border-t">
        <h3 className="text-lg font-medium mb-3 flex items-center">
          <Sparkles className="mr-2 h-4 w-4 text-primary" />
          Consulta em Linguagem Natural
        </h3>
        <p className="text-sm text-muted-foreground mb-4">
          Faça perguntas sobre seus dados e obtenha insights gerados por IA
        </p>
        
        <div className="flex gap-2 mb-4">
          <Textarea 
            placeholder="Ex: Quais são os clientes com maior potencial de conversão?" 
            value={naturalQuery}
            onChange={(e) => setNaturalQuery(e.target.value)}
            className="min-h-[80px]"
          />
        </div>
        
        <div className="flex justify-end">
          <Button 
            onClick={handleNaturalQuerySubmit} 
            disabled={isLoading || !naturalQuery.trim()}
            variant="secondary"
          >
            {isLoading ? (
              <>
                <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                Processando...
              </>
            ) : (
              <>
                <Sparkles className="mr-2 h-4 w-4" />
                Analisar Consulta
              </>
            )}
          </Button>
        </div>
        
        {naturalQueryResult && (
          <Card className="mt-4 p-4 bg-muted/50 border">
            <h4 className="font-medium mb-2">Resultados da Análise</h4>
            <div className="text-sm whitespace-pre-line">
              {naturalQueryResult}
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}
