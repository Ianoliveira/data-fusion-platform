
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Gift, RefreshCw, Search, ShoppingCart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  score: number;
  image: string;
};

export function ProductRecommendation() {
  const { toast } = useToast();
  const [customerId, setCustomerId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [recommendations, setRecommendations] = useState<Product[] | null>(null);
  
  const generateRecommendations = async () => {
    if (!customerId.trim()) {
      toast({
        title: "ID do cliente necessário",
        description: "Por favor, insira o ID do cliente para gerar recomendações.",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call for recommendations
    setTimeout(() => {
      // Sample recommendation results
      setRecommendations([
        {
          id: "p1",
          name: "Smartphone Premium XYZ",
          category: "Eletrônicos",
          price: 3499.90,
          score: 0.92,
          image: "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?auto=format&fit=crop&q=80&w=100&h=100"
        },
        {
          id: "p2",
          name: "Fone de Ouvido Bluetooth",
          category: "Acessórios",
          price: 249.90,
          score: 0.87,
          image: "https://images.unsplash.com/photo-1606131731446-5568d87113aa?auto=format&fit=crop&q=80&w=100&h=100"
        },
        {
          id: "p3",
          name: "Smartwatch Fitness",
          category: "Eletrônicos",
          price: 599.90,
          score: 0.81,
          image: "https://images.unsplash.com/photo-1617043786394-f977fa12eddf?auto=format&fit=crop&q=80&w=100&h=100"
        },
        {
          id: "p4",
          name: "Carregador Portátil 20000mAh",
          category: "Acessórios",
          price: 179.90,
          score: 0.73,
          image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&q=80&w=100&h=100"
        },
      ]);
      
      setIsLoading(false);
      
      toast({
        title: "Recomendações geradas",
        description: "Produtos recomendados para o cliente foram encontrados.",
      });
    }, 1500);
  };
  
  const getScoreColor = (score: number) => {
    if (score >= 0.9) return "text-green-500 bg-green-500/10";
    if (score >= 0.8) return "text-blue-500 bg-blue-500/10";
    if (score >= 0.7) return "text-yellow-500 bg-yellow-500/10";
    return "text-gray-500 bg-gray-500/10";
  };
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Digite o ID do cliente" 
            value={customerId}
            onChange={(e) => setCustomerId(e.target.value)}
            className="pl-8"
          />
        </div>
        <Button onClick={generateRecommendations} disabled={isLoading}>
          {isLoading ? (
            <>
              <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
              Processando...
            </>
          ) : (
            <>
              <Gift className="mr-2 h-4 w-4" />
              Gerar Recomendações
            </>
          )}
        </Button>
      </div>
      
      {recommendations && (
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Produtos Recomendados para Cliente #{customerId}</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {recommendations.map((product) => (
              <Card key={product.id} className="overflow-hidden">
                <div className="aspect-square bg-muted relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="object-cover w-full h-full"
                  />
                  <Badge className={`absolute top-2 right-2 ${getScoreColor(product.score)}`}>
                    {Math.round(product.score * 100)}% match
                  </Badge>
                </div>
                <div className="p-3">
                  <h4 className="font-medium line-clamp-1">{product.name}</h4>
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-sm text-muted-foreground">{product.category}</span>
                    <span className="font-medium">R$ {product.price.toFixed(2)}</span>
                  </div>
                  <Button variant="outline" size="sm" className="w-full mt-2">
                    <ShoppingCart className="h-3.5 w-3.5 mr-1" />
                    Adicionar ao Carrinho
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
