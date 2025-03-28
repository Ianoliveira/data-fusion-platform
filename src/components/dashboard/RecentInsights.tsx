
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowUpRight, TrendingUp, TrendingDown, AlertTriangle } from "lucide-react";

type Insight = {
  id: string;
  title: string;
  description: string;
  category: "opportunity" | "alert" | "trend";
  priority: "high" | "medium" | "low";
  timestamp: string;
};

type RecentInsightsProps = {
  insights: Insight[];
};

export function RecentInsights({ insights }: RecentInsightsProps) {
  const getCategoryIcon = (category: Insight["category"]) => {
    switch (category) {
      case "opportunity":
        return <TrendingUp className="h-4 w-4" />;
      case "alert":
        return <AlertTriangle className="h-4 w-4" />;
      case "trend":
        return <TrendingDown className="h-4 w-4" />;
    }
  };

  const getCategoryText = (category: Insight["category"]) => {
    switch (category) {
      case "opportunity":
        return "Oportunidade";
      case "alert":
        return "Alerta";
      case "trend":
        return "Tendência";
    }
  };

  const getCategoryColor = (category: Insight["category"]) => {
    switch (category) {
      case "opportunity":
        return "text-green-500 bg-green-500/10";
      case "alert":
        return "text-red-500 bg-red-500/10";
      case "trend":
        return "text-blue-500 bg-blue-500/10";
    }
  };

  const getPriorityColor = (priority: Insight["priority"]) => {
    switch (priority) {
      case "high":
        return "border-red-500 text-red-500";
      case "medium":
        return "border-yellow-500 text-yellow-500";
      case "low":
        return "border-green-500 text-green-500";
    }
  };

  const getPriorityText = (priority: Insight["priority"]) => {
    switch (priority) {
      case "high":
        return "Alta";
      case "medium":
        return "Média";
      case "low":
        return "Baixa";
    }
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="flex items-center">
            <Sparkles className="mr-2 h-5 w-5 text-primary" />
            Smart Insights
          </CardTitle>
          <CardDescription>
            Insights gerados por IA nos últimos 7 dias
          </CardDescription>
        </div>
        <Button variant="outline" size="sm" className="gap-1">
          Ver todos <ArrowUpRight className="h-3.5 w-3.5" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {insights.map((insight) => (
            <div key={insight.id} className="p-4 border rounded-lg">
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
                <span className="text-xs text-muted-foreground">{insight.timestamp}</span>
              </div>
              <h3 className="mt-2 font-semibold">{insight.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{insight.description}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
