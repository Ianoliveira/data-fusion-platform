
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Shirt,
  ShoppingBag,
  BarChart3,
  Image,
  Users,
  Package
} from "lucide-react";

interface ViewOption {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface ViewSwitcherProps {
  activeView: string;
  onViewChange: (view: string) => void;
}

export const ViewSwitcher: React.FC<ViewSwitcherProps> = ({ activeView, onViewChange }) => {
  const viewOptions: ViewOption[] = [
    {
      id: "traffic",
      title: "Visitas à Loja",
      description: "Análise de tráfego e navegação",
      icon: <Users className="h-4 w-4" />
    },
    {
      id: "devices",
      title: "Canais de Compra",
      description: "Desktop, Mobile e App",
      icon: <Package className="h-4 w-4" />
    },
    {
      id: "conversion",
      title: "Vendas",
      description: "Funil de conversão e pedidos",
      icon: <ShoppingBag className="h-4 w-4" />
    },
    {
      id: "pages",
      title: "Catálogo",
      description: "Desempenho dos produtos",
      icon: <Image className="h-4 w-4" />
    },
    {
      id: "customer",
      title: "Clientes",
      description: "Perfil e comportamento",
      icon: <Shirt className="h-4 w-4" />
    },
    {
      id: "performance",
      title: "Performance",
      description: "ROI e métricas de coleção",
      icon: <BarChart3 className="h-4 w-4" />
    }
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
      {viewOptions.map((option) => (
        <Card 
          key={option.id}
          className={`cursor-pointer transition h-full ${
            activeView === option.id ? "ring-2 ring-primary border-primary/70 bg-primary/5" : "hover:border-primary/50 hover:bg-muted/30"
          }`}
          onClick={() => onViewChange(option.id)}
        >
          <CardContent className="p-3 sm:p-4 flex flex-col h-full">
            <div className="flex items-center mb-1">
              <span className={`${activeView === option.id ? "text-primary" : "text-muted-foreground"} mr-2`}>
                {option.icon}
              </span>
              <h3 className="text-sm font-medium">{option.title}</h3>
            </div>
            <div className="text-xs text-muted-foreground mt-1">
              {option.description}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
