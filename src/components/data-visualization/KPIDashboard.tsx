
import React from "react";
import { MetricCard } from "./MetricCard";
import { ChartLine, ChartBar, Gauge } from "lucide-react";

interface KPIDashboardProps {
  data: {
    trafficTrendSparkline: any[];
    conversionTrendSparkline: any[];
  }
}

export const KPIDashboard: React.FC<KPIDashboardProps> = ({ data }) => {
  const { trafficTrendSparkline, conversionTrendSparkline } = data;
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <MetricCard 
        title="Sessões Totais" 
        value="142,854"
        change="+12.3%"
        trend="up"
        icon={<ChartLine className="h-4 w-4" />}
        sparklineData={trafficTrendSparkline}
        sparklineKey="value"
        sparklineColor="#3b82f6"
        description="Total de visitas ao site nos últimos 30 dias"
      />
      <MetricCard 
        title="Taxa de Conversão" 
        value="3.8%"
        change="+0.6%"
        trend="up"
        icon={<Gauge className="h-4 w-4" />}
        sparklineData={conversionTrendSparkline}
        sparklineKey="value"
        sparklineColor="#10b981"
        description="Percentual de visitantes que realizaram uma compra"
      />
      <MetricCard 
        title="Tempo Médio" 
        value="03:24"
        change="-0:18"
        trend="down"
        icon={<ChartLine className="h-4 w-4" />}
        description="Tempo médio de permanência no site"
      />
      <MetricCard 
        title="Taxa de Rejeição" 
        value="32.4%"
        change="+1.8%"
        trend="down"
        icon={<ChartBar className="h-4 w-4" />}
        description="Visitantes que saem sem interagir com a página"
      />
    </div>
  );
};
