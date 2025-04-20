
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { DataProvider, useDataVisualizationData } from "@/components/data-visualization/DataProvider";
import { DataHeader } from "@/components/data-visualization/DataHeader";
import { KPIDashboard } from "@/components/data-visualization/KPIDashboard";
import { ViewSwitcher } from "@/components/data-visualization/ViewSwitcher";
import { TrafficView } from "@/components/data-visualization/views/traffic";
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
      case "traffic": return "Análise de Visitas à Loja";
      case "devices": return "Canais de Compra";
      case "conversion": return "Análise de Vendas";
      case "pages": return "Desempenho do Catálogo";
      case "customer": return "Análise de Clientes";
      case "performance": return "Performance da Coleção";
      default: return "Análise de Visitas à Loja";
    }
  };

  const getViewDescription = () => {
    switch (activeView) {
      case "traffic": return "Análise detalhada do tráfego e comportamento dos visitantes na loja";
      case "devices": return "Distribuição de acessos e vendas por canal (Desktop, Mobile, App)";
      case "conversion": return "Métricas de conversão e análise do funil de vendas";
      case "pages": return "Performance dos produtos e categorias mais acessadas";
      case "customer": return "Perfil dos clientes, comportamento de compra e preferências";
      case "performance": return "Métricas de desempenho da coleção e ROI por categoria";
      default: return "Análise detalhada do tráfego e comportamento dos visitantes na loja";
    }
  };

  return (
    <>
      <Helmet>
        <title>Analytics de Moda - Twiggy.ai</title>
      </Helmet>
      
      <div className="space-y-6">
        <DataHeader dateRange={dateRange} setDateRange={setDateRange} />
        <KPIDashboard data={{
          trafficTrendSparkline: data.trafficTrendSparkline,
          conversionTrendSparkline: data.conversionTrendSparkline
        }} />
        <ViewSwitcher activeView={activeView} onViewChange={setActiveView} />
        
        <Card className="border-border/60 overflow-hidden shadow-sm">
          <CardHeader className="bg-card/50 pb-3">
            <CardTitle>{getViewTitle()}</CardTitle>
            <CardDescription>{getViewDescription()}</CardDescription>
          </CardHeader>
          <CardContent className="p-4 md:p-6 bg-gradient-to-b from-card/30 to-background">
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
