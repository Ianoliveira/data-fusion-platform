
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, TrendingUp, TrendingDown, AlertTriangle } from "lucide-react";

interface Insight {
  id: string;
  category: string;
  priority: string;
  title: string;
  description: string;
  created_at: string;
  status: string;
  user_id: string;
  data: any;
}

interface RecentInsightsPanelProps {
  insights: Insight[];
}

export function RecentInsightsPanel({ insights }: RecentInsightsPanelProps) {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "opportunity":
        return <TrendingUp className="h-4 w-4" />;
      case "alert":
        return <AlertTriangle className="h-4 w-4" />;
      case "trend":
        return <TrendingDown className="h-4 w-4" />;
      default:
        return null;
    }
  };

  const getCategoryText = (category: string) => {
    switch (category) {
      case "opportunity":
        return "Oportunidade";
      case "alert":
        return "Alerta";
      case "trend":
        return "Tendência";
      default:
        return category;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "opportunity":
        return "text-green-500 bg-green-500/10";
      case "alert":
        return "text-red-500 bg-red-500/10";
      case "trend":
        return "text-blue-500 bg-blue-500/10";
      default:
        return "text-gray-500 bg-gray-500/10";
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "border-red-500 text-red-500";
      case "medium":
        return "border-yellow-500 text-yellow-500";
      case "low":
        return "border-green-500 text-green-500";
      default:
        return "border-gray-500 text-gray-500";
    }
  };

  const getPriorityText = (priority: string) => {
    switch (priority) {
      case "high":
        return "Alta";
      case "medium":
        return "Média";
      case "low":
        return "Baixa";
      default:
        return priority;
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  // Show most recent insights first
  const recentInsights = insights
    .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
    .slice(0, 5);

  if (recentInsights.length === 0) {
    return (
      <Card variant="neo">
        <CardHeader>
          <CardTitle>Insights Recentes</CardTitle>
          <CardDescription>
            Análises e recomendações geradas nos últimos 7 dias
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <p className="text-muted-foreground">
              Nenhum insight encontrado. Conecte suas integrações para começar a gerar insights.
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card variant="neo">
      <CardHeader>
        <CardTitle>Insights Recentes</CardTitle>
        <CardDescription>
          Análises e recomendações geradas nos últimos 7 dias
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentInsights.map((insight) => (
            <div key={insight.id} className="p-4 border rounded-lg shadow-neo-inset-light dark:shadow-neo-inset-dark bg-secondary">
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className={getCategoryColor(insight.category)}>
                    <span className="flex items-center gap-1">
                      {getCategoryIcon(insight.category)}
                      {getCategoryText(insight.category)}
                    </span>
                  </Badge>
                  <Badge variant="outline" className={getPriorityColor(insight.priority)}>
                    Prioridade: {getPriorityText(insight.priority)}
                  </Badge>
                </div>
                <span className="text-xs text-muted-foreground">{formatDate(insight.created_at)}</span>
              </div>
              <h3 className="mt-2 font-semibold">{insight.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{insight.description}</p>
              <div className="mt-3 flex justify-end">
                <Button variant="ghost" size="sm" className="text-primary">
                  Ver detalhes
                  <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
