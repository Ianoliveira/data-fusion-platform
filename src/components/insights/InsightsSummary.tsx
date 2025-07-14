
import React from 'react';
import { TrendingUp, AlertTriangle, TrendingDown } from 'lucide-react';
import { InsightCategoryCard } from './InsightCategoryCard';

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

interface InsightsSummaryProps {
  insights: Insight[];
}

export function InsightsSummary({ insights }: InsightsSummaryProps) {
  // Calculate counts from real data
  const opportunityInsights = insights.filter(insight => insight.category === 'opportunity');
  const alertInsights = insights.filter(insight => insight.category === 'alert');
  const trendInsights = insights.filter(insight => insight.category === 'trend');

  const opportunityHighPriority = opportunityInsights.filter(insight => insight.priority === 'high').length;
  const alertHighPriority = alertInsights.filter(insight => insight.priority === 'high').length;
  const trendHighPriority = trendInsights.filter(insight => insight.priority === 'high').length;

  return (
    <div className="grid gap-6 md:grid-cols-3">
      <InsightCategoryCard
        icon={TrendingUp}
        title="Oportunidades"
        description="Insights que podem gerar crescimento"
        count={opportunityInsights.length}
        priorityCount={opportunityHighPriority}
        iconColor="text-green-500"
        iconBgColor="bg-green-500/10"
      />
      
      <InsightCategoryCard
        icon={AlertTriangle}
        title="Alertas"
        description="Problemas que exigem atenção imediata"
        count={alertInsights.length}
        priorityCount={alertHighPriority}
        iconColor="text-red-500"
        iconBgColor="bg-red-500/10"
      />
      
      <InsightCategoryCard
        icon={TrendingDown}
        title="Tendências"
        description="Mudanças de comportamento e padrões"
        count={trendInsights.length}
        priorityCount={trendHighPriority}
        iconColor="text-blue-500"
        iconBgColor="bg-blue-500/10"
      />
    </div>
  );
}
