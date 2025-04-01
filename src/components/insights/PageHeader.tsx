
import React from 'react';
import { Button } from "@/components/ui/button";
import { Filter, Download, Lightbulb, Sparkles } from "lucide-react";

export function PageHeader() {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <div>
        <h1 className="text-3xl font-bold tracking-tight flex items-center">
          <Sparkles className="mr-2 h-6 w-6 text-primary" />
          Smart Insights
        </h1>
        <p className="text-muted-foreground">
          Análises geradas por IA para impulsionar suas decisões estratégicas
        </p>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm" className="gap-1">
          <Filter className="h-4 w-4" />
          Filtrar
        </Button>
        <Button variant="outline" size="sm" className="gap-1">
          <Download className="h-4 w-4" />
          Exportar
        </Button>
        <Button size="sm" className="gap-1">
          <Lightbulb className="h-4 w-4" />
          Configurar Alertas
        </Button>
      </div>
    </div>
  );
}
