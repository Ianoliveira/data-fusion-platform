
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { 
  ChartLine,
  PieChart,
  BarChart3,
  ChartBar,
  ChartPie,
  ChartArea
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
      title: "Tráfego",
      description: "Análise de sessões e usuários",
      icon: <ChartLine className="h-4 w-4 mr-2" />
    },
    {
      id: "devices",
      title: "Dispositivos",
      description: "Distribuição por tipo de dispositivo",
      icon: <PieChart className="h-4 w-4 mr-2" />
    },
    {
      id: "conversion",
      title: "Conversão",
      description: "Funil de conversão de vendas",
      icon: <BarChart3 className="h-4 w-4 mr-2" />
    },
    {
      id: "pages",
      title: "Páginas",
      description: "Análise de desempenho de páginas",
      icon: <ChartBar className="h-4 w-4 mr-2" />
    },
    {
      id: "customer",
      title: "Cliente",
      description: "Jornada e satisfação de cliente",
      icon: <ChartPie className="h-4 w-4 mr-2" />
    },
    {
      id: "performance",
      title: "Performance",
      description: "Análise de ROI e resultados",
      icon: <ChartArea className="h-4 w-4 mr-2" />
    }
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-6">
      {viewOptions.map((option) => (
        <Card 
          key={option.id}
          className={`cursor-pointer transition md:col-span-1 ${
            activeView === option.id ? "ring-2 ring-primary" : "hover:border-primary/50"
          }`}
          onClick={() => onViewChange(option.id)}
        >
          <CardHeader className="pb-2">
            <CardTitle className="text-md flex items-center">
              {option.icon}
              {option.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-muted-foreground">
              {option.description}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
