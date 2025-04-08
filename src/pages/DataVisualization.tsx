
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { DataProvider, useDataVisualizationData } from "@/components/data-visualization/DataProvider";
import { DataHeader } from "@/components/data-visualization/DataHeader";
import { KPIDashboard } from "@/components/data-visualization/KPIDashboard";
import { ViewSwitcher } from "@/components/data-visualization/ViewSwitcher";
import { TrafficView } from "@/components/data-visualization/views/TrafficView";
import { DevicesView } from "@/components/data-visualization/views/DevicesView";
import { ConversionView } from "@/components/data-visualization/views/ConversionView";
import { PagesView } from "@/components/data-visualization/views/PagesView";
import { CustomerView } from "@/components/data-visualization/views/CustomerView";
import { PerformanceView } from "@/components/data-visualization/views/PerformanceView";

const DataVisualizationContent: React.FC = () => {
  const [activeView, setActiveView] = useState("traffic");
  const [dateRange, setDateRange] = useState("30d");
  const { data } = useDataVisualizationData();

  const renderActiveView = () => {
    switch (activeView) {
      case "traffic":
        return <TrafficView data={{
          trafficData: data.trafficData,
          trafficByDayData: data.trafficByDayData,
          acquisitionData: data.acquisitionData,
          userEngagementData: data.userEngagementData,
          countryData: data.countryData,
          userBehaviorData: data.userBehaviorData,
        }} />;
      case "devices":
        return <DevicesView data={{
          deviceData: data.deviceData,
          customerInterestsData: data.customerInterestsData,
          demoData: data.demoData,
          conversionByDeviceData: data.conversionByDeviceData,
        }} />;
      case "conversion":
        return <ConversionView data={{
          conversionData: data.conversionData,
          customerJourneyData: data.customerJourneyData,
          goalCompletionData: data.goalCompletionData,
          abTestData: data.abTestData,
          averageOrderData: data.averageOrderData,
        }} />;
      case "pages":
        return <PagesView data={{
          topPagesData: data.topPagesData,
          tableData: data.tableData,
          pageSpeedData: data.pageSpeedData,
          timeOnSiteData: data.timeOnSiteData,
          contentEngagementData: data.contentEngagementData,
        }} />;
      case "customer":
        return <CustomerView data={{
          satisfactionMetrics: data.satisfactionMetrics,
          customerJourneyData: data.customerJourneyData,
          npsData: data.npsData,
          customerInterestsData: data.customerInterestsData,
          productPerformanceData: data.productPerformanceData,
        }} />;
      case "performance":
        return <PerformanceView data={{
          marketingROIData: data.marketingROIData,
          quarterlyRevenueData: data.quarterlyRevenueData,
          socialMediaData: data.socialMediaData,
        }} />;
      default:
        return <TrafficView data={{
          trafficData: data.trafficData,
          trafficByDayData: data.trafficByDayData,
          acquisitionData: data.acquisitionData,
          userEngagementData: data.userEngagementData,
          countryData: data.countryData,
          userBehaviorData: data.userBehaviorData,
        }} />;
    }
  };

  const getViewTitle = () => {
    switch (activeView) {
      case "traffic": return "Análise de Tráfego";
      case "devices": return "Distribuição de Dispositivos";
      case "conversion": return "Funil de Conversão";
      case "pages": return "Desempenho de Páginas";
      case "customer": return "Análise de Cliente";
      case "performance": return "Análise de Performance";
      default: return "Análise de Tráfego";
    }
  };

  const getViewDescription = () => {
    switch (activeView) {
      case "traffic": return "Visualização de sessões e usuários ao longo do tempo";
      case "devices": return "Distribuição percentual de acessos por tipo de dispositivo";
      case "conversion": return "Taxa de conversão em cada etapa do funil de vendas";
      case "pages": return "Ranking das páginas mais acessadas do site";
      case "customer": return "Análise da jornada do cliente e métricas de satisfação";
      case "performance": return "ROI e métricas de desempenho de campanhas e produtos";
      default: return "Visualização de sessões e usuários ao longo do tempo";
    }
  };

  return (
    <>
      <Helmet>
        <title>Visualização de Dados - Twiggy.ai</title>
      </Helmet>
      
      <div className="space-y-6">
        <DataHeader dateRange={dateRange} setDateRange={setDateRange} />
        <KPIDashboard data={{
          trafficTrendSparkline: data.trafficTrendSparkline,
          conversionTrendSparkline: data.conversionTrendSparkline
        }} />
        <ViewSwitcher activeView={activeView} onViewChange={setActiveView} />
        
        <Card>
          <CardHeader>
            <CardTitle>{getViewTitle()}</CardTitle>
            <CardDescription>{getViewDescription()}</CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            {renderActiveView()}
          </CardContent>
        </Card>
      </div>
    </>
  );
};

const DataVisualization: React.FC = () => {
  return (
    <DataProvider>
      <DataVisualizationContent />
    </DataProvider>
  );
};

export default DataVisualization;
