
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { AreaChart, BarChart } from "@/components/ui/chart";

interface JourneyOverviewChartsProps {
  timeSeriesData: any[];
  deviceData: any[];
}

export const JourneyOverviewCharts: React.FC<JourneyOverviewChartsProps> = ({
  timeSeriesData,
  deviceData
}) => {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card variant="apple">
        <CardHeader>
          <CardTitle>Interações por Mês</CardTitle>
          <CardDescription>Tendência de uso das jornadas nos últimos 6 meses</CardDescription>
        </CardHeader>
        <CardContent>
          <AreaChart
            data={timeSeriesData}
            categories={["value"]}
            index="name"
            colors={["#8b5cf6"]}
            valueFormatter={(value) => `${value} interações`}
            className="h-[300px]"
          />
        </CardContent>
      </Card>
      <Card variant="apple">
        <CardHeader>
          <CardTitle>Dispositivos Utilizados</CardTitle>
          <CardDescription>Distribuição das interações por tipo de dispositivo</CardDescription>
        </CardHeader>
        <CardContent>
          <BarChart
            data={deviceData}
            categories={["interacoes"]}
            index="name"
            colors={["#3b82f6"]}
            valueFormatter={(value) => `${value}%`}
            className="h-[300px]"
          />
        </CardContent>
      </Card>
    </div>
  );
};
