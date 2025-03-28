
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { PieChart } from "@/components/ui/chart";
import { ArrowRight, RefreshCw, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";

export function CustomerSegmentation() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [segments, setSegments] = useState<null | {
    name: string;
    color: string;
    description: string;
    attributes: string[];
    percentage: number;
  }[]>(null);
  
  const runSegmentation = async () => {
    setIsLoading(true);
    
    // Simulate API call for segmentation
    setTimeout(() => {
      // Sample segmentation result
      setSegments([
        {
          name: "VIP",
          color: "#f43f5e",
          description: "Clientes de alto valor com compras frequentes",
          attributes: ["Faixa etária: 30-45", "Gasto médio: R$ 780", "Frequência: 3.2 compras/mês"],
          percentage: 12
        },
        {
          name: "Emergentes",
          color: "#3b82f6",
          description: "Clientes com crescimento recente de compras",
          attributes: ["Faixa etária: 25-35", "Gasto médio: R$ 420", "Frequência: 1.8 compras/mês"],
          percentage: 23
        },
        {
          name: "Ocasionais",
          color: "#10b981",
          description: "Clientes que compram eventualmente",
          attributes: ["Faixa etária: 20-60", "Gasto médio: R$ 280", "Frequência: 0.7 compras/mês"],
          percentage: 38
        },
        {
          name: "Inativos",
          color: "#6b7280",
          description: "Clientes sem compras recentes",
          attributes: ["Faixa etária: 25-55", "Gasto médio: R$ 150", "Frequência: 0.2 compras/mês"],
          percentage: 27
        }
      ]);
      
      setIsLoading(false);
      
      toast({
        title: "Segmentação concluída",
        description: "Os segmentos de clientes foram identificados com sucesso.",
      });
    }, 2000);
  };
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-end gap-4 mb-6">
        <div className="flex-1">
          <label className="block text-sm font-medium mb-1">Número de Segmentos</label>
          <Input type="number" min="2" max="8" defaultValue="4" />
        </div>
        <div className="flex-1">
          <label className="block text-sm font-medium mb-1">Algoritmo</label>
          <Input defaultValue="K-Means Clustering" readOnly />
        </div>
        <div>
          <Button onClick={runSegmentation} disabled={isLoading}>
            {isLoading ? (
              <>
                <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                Processando...
              </>
            ) : (
              <>
                <Users className="mr-2 h-4 w-4" />
                Executar Segmentação
              </>
            )}
          </Button>
        </div>
      </div>
      
      {segments && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-4">
            <h3 className="text-lg font-medium mb-4">Distribuição de Segmentos</h3>
            <div className="h-[300px]">
              <PieChart
                data={segments.map(segment => ({ 
                  name: segment.name, 
                  value: segment.percentage 
                }))}
                category="value"
                index="name"
                colors={segments.map(segment => segment.color)}
                valueFormatter={(value) => `${value}%`}
                className="h-[300px]"
              />
            </div>
          </Card>
          
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Características dos Segmentos</h3>
            
            {segments.map((segment, index) => (
              <Card key={index} className="p-3 border-l-4" style={{ borderLeftColor: segment.color }}>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium">{segment.name}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{segment.description}</p>
                  </div>
                  <Badge style={{ backgroundColor: `${segment.color}20`, color: segment.color }}>
                    {segment.percentage}%
                  </Badge>
                </div>
                <div className="mt-2 grid grid-cols-1 gap-1">
                  {segment.attributes.map((attribute, i) => (
                    <span key={i} className="text-xs text-muted-foreground">• {attribute}</span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
