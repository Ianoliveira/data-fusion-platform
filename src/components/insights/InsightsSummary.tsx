
import React from 'react';
import { TrendingUp, AlertTriangle, TrendingDown } from 'lucide-react';
import { InsightCategoryCard } from './InsightCategoryCard';

export function InsightsSummary() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      <InsightCategoryCard
        icon={TrendingUp}
        title="Oportunidades"
        description="Insights que podem gerar crescimento"
        count={23}
        priorityCount={8}
        iconColor="text-green-500"
        iconBgColor="bg-green-500/10"
      />
      
      <InsightCategoryCard
        icon={AlertTriangle}
        title="Alertas"
        description="Problemas que exigem atenção imediata"
        count={7}
        priorityCount={3}
        iconColor="text-red-500"
        iconBgColor="bg-red-500/10"
      />
      
      <InsightCategoryCard
        icon={TrendingDown}
        title="Tendências"
        description="Mudanças de comportamento e padrões"
        count={15}
        priorityCount={5}
        iconColor="text-blue-500"
        iconBgColor="bg-blue-500/10"
      />
    </div>
  );
}
