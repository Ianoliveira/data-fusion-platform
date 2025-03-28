
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { ArrowRight, BrainCircuit, RefreshCw } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ModelPredictionProps {
  type: "lifetime" | "custom";
}

export function ModelPrediction({ type }: ModelPredictionProps) {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<number | null>(null);
  
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
    </div>
  );
}
