
import React from "react";
import { Button } from "@/components/ui/button";
import { 
  BarChart3, 
  Download,
  Share2,
  CalendarRange 
} from "lucide-react";

interface DataHeaderProps {
  dateRange: string;
  setDateRange: (range: string) => void;
}

export const DataHeader: React.FC<DataHeaderProps> = ({ dateRange, setDateRange }) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-3 border-b border-border/40 mb-6">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight flex items-center">
          <BarChart3 className="mr-2 h-6 w-6 text-primary" />
          Visualização de Dados
        </h1>
        <p className="text-muted-foreground text-sm md:text-base">
          Análise visual e insights sobre seus dados integrados
        </p>
      </div>
      <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-hide">
        <div className="flex gap-1 border rounded-lg p-0.5 bg-background shadow-sm">
          <Button 
            variant={dateRange === "7d" ? "default" : "ghost"} 
            size="sm" 
            className="text-xs h-8 px-2 md:px-3"
            onClick={() => setDateRange("7d")}
          >
            7 dias
          </Button>
          <Button 
            variant={dateRange === "30d" ? "default" : "ghost"} 
            size="sm" 
            className="text-xs h-8 px-2 md:px-3"
            onClick={() => setDateRange("30d")}
          >
            30 dias
          </Button>
          <Button 
            variant={dateRange === "90d" ? "default" : "ghost"} 
            size="sm" 
            className="text-xs h-8 px-2 md:px-3"
            onClick={() => setDateRange("90d")}
          >
            90 dias
          </Button>
        </div>
        <Button variant="outline" size="sm" className="gap-1 text-xs hidden sm:flex">
          <CalendarRange className="h-4 w-4" />
          Personalizar
        </Button>
        <Button variant="outline" size="sm" className="gap-1 text-xs hidden sm:flex">
          <Download className="h-4 w-4" />
          Exportar
        </Button>
        <Button size="sm" className="gap-1 text-xs">
          <Share2 className="h-4 w-4" />
          <span className="hidden sm:inline">Compartilhar</span>
        </Button>
      </div>
    </div>
  );
};
