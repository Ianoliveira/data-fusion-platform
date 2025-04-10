
import React from 'react';
import { Helmet } from "react-helmet";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { JourneyCard } from "@/components/journeys/JourneyCard";
import { JourneyOverviewCharts } from "@/components/journeys/JourneyOverviewCharts";
import { JourneyTabContent } from "@/components/journeys/JourneyTabsContent";
import { journeyTabsData } from "@/components/journeys/JourneyData";

const Journeys = () => {
  return (
    <>
      <Helmet>
        <title>Jornadas - Twiggy.ai</title>
      </Helmet>
      <div className="space-y-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Jornadas de Personalização</h1>
          <p className="text-muted-foreground">
            Análise de desempenho das jornadas de personalização para seus clientes.
          </p>
        </div>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="overview">Visão Geral</TabsTrigger>
            <TabsTrigger value="photoSearch">Busca por Foto</TabsTrigger>
            <TabsTrigger value="similarSearch">Busca por Similar</TabsTrigger>
            <TabsTrigger value="textSearch">Busca por Texto</TabsTrigger>
            <TabsTrigger value="shopTheLook">Compre o Look</TabsTrigger>
            <TabsTrigger value="smartShowcase">Vitrine Inteligente</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {journeyTabsData.overview.metrics.map((metric, index) => (
                <JourneyCard 
                  key={`overview-metric-${index}`}
                  title={metric.title}
                  description={metric.description}
                  value={metric.value}
                  change={metric.change}
                  positive={metric.positive}
                  icon={metric.icon}
                  variant="apple"
                />
              ))}
            </div>

            <JourneyOverviewCharts 
              timeSeriesData={journeyTabsData.overview.timeSeriesData} 
              deviceData={journeyTabsData.overview.deviceData}
            />
          </TabsContent>

          <JourneyTabContent 
            value="photoSearch"
            title={journeyTabsData.photoSearch.title}
            metrics={journeyTabsData.photoSearch.metrics}
            chartData={journeyTabsData.photoSearch.chartData}
            chartCategories={journeyTabsData.photoSearch.chartCategories}
            chartColors={journeyTabsData.photoSearch.chartColors}
            additionalMetrics={journeyTabsData.photoSearch.additionalMetrics}
          />

          <JourneyTabContent 
            value="similarSearch"
            title={journeyTabsData.similarSearch.title}
            metrics={journeyTabsData.similarSearch.metrics}
            chartData={journeyTabsData.similarSearch.chartData}
            chartCategories={journeyTabsData.similarSearch.chartCategories}
            chartColors={journeyTabsData.similarSearch.chartColors}
            additionalMetrics={journeyTabsData.similarSearch.additionalMetrics}
          />

          <JourneyTabContent 
            value="textSearch"
            title={journeyTabsData.textSearch.title}
            metrics={journeyTabsData.textSearch.metrics}
            chartData={journeyTabsData.textSearch.chartData}
            chartCategories={journeyTabsData.textSearch.chartCategories}
            chartColors={journeyTabsData.textSearch.chartColors}
            additionalMetrics={journeyTabsData.textSearch.additionalMetrics}
          />

          <JourneyTabContent 
            value="shopTheLook"
            title={journeyTabsData.shopTheLook.title}
            metrics={journeyTabsData.shopTheLook.metrics}
            chartData={journeyTabsData.shopTheLook.chartData}
            chartCategories={journeyTabsData.shopTheLook.chartCategories}
            chartColors={journeyTabsData.shopTheLook.chartColors}
            additionalMetrics={journeyTabsData.shopTheLook.additionalMetrics}
          />

          <JourneyTabContent 
            value="smartShowcase"
            title={journeyTabsData.smartShowcase.title}
            metrics={journeyTabsData.smartShowcase.metrics}
            chartData={journeyTabsData.smartShowcase.chartData}
            chartCategories={journeyTabsData.smartShowcase.chartCategories}
            chartColors={journeyTabsData.smartShowcase.chartColors}
            additionalMetrics={journeyTabsData.smartShowcase.additionalMetrics}
          />
        </Tabs>
      </div>
    </>
  );
};

export default Journeys;
