
import React, { createContext, useContext } from "react";

interface DataContextType {
  data: {
    trafficData: any[];
    deviceData: any[];
    conversionData: any[];
    topPagesData: any[];
    tableData: any[];
    goalCompletionData: any[];
    acquisitionData: any[];
    userEngagementData: any[];
    countryData: any[];
    demoData: any[];
    timeOnSiteData: any[];
    pageSpeedData: any[];
    conversionByDeviceData: any[];
    trafficTrendSparkline: any[];
    conversionTrendSparkline: any[];
    averageOrderData: any[];
    customerJourneyData: any[];
    contentEngagementData: any[];
    socialMediaData: any[];
    marketingROIData: any[];
    productPerformanceData: any[];
    quarterlyRevenueData: any[];
    satisfactionMetrics: any[];
    abTestData: any[];
    trafficByDayData: any[];
    npsData: any[];
    userBehaviorData: any[];
    customerInterestsData: any[];
  };
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const useDataVisualizationData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useDataVisualizationData must be used within a DataProvider");
  }
  return context;
};

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // All mock data moved from the main component
  const data = {
    trafficData: [
      { name: "Jan", Sessões: 1200, Usuários: 980 },
      { name: "Fev", Sessões: 1900, Usuários: 1200 },
      { name: "Mar", Sessões: 2400, Usuários: 1980 },
      { name: "Abr", Sessões: 1800, Usuários: 1400 },
      { name: "Mai", Sessões: 2800, Usuários: 2320 },
      { name: "Jun", Sessões: 3200, Usuários: 2600 }
    ],
    deviceData: [
      { name: "Desktop", value: 46 },
      { name: "Mobile", value: 42 },
      { name: "Tablet", value: 12 }
    ],
    conversionData: [
      { name: "Visualização", Conversão: 100 },
      { name: "Adição ao Carrinho", Conversão: 62 },
      { name: "Checkout", Conversão: 38 },
      { name: "Compra", Conversão: 22 }
    ],
    topPagesData: [
      { name: "Página Inicial", value: 35423, color: "#3b82f6" },
      { name: "Catálogo de Produtos", value: 28732, color: "#10b981" },
      { name: "Blog", value: 18453, color: "#f59e0b" },
      { name: "Sobre Nós", value: 12253, color: "#8b5cf6" },
      { name: "Contato", value: 6123, color: "#f43f5e" }
    ],
    tableData: [
      { page: "Página Inicial", views: 35423, time: "02:45", bounce: "24%", trend: "up" },
      { page: "Catálogo de Produtos", views: 28732, time: "03:22", bounce: "32%", trend: "up" },
      { page: "Blog: 10 Dicas para...", views: 18453, time: "04:12", bounce: "21%", trend: "up" },
      { page: "Sobre Nós", views: 12253, time: "01:34", bounce: "45%", trend: "down" },
      { page: "Contato", views: 6123, time: "00:58", bounce: "52%", trend: "down" },
      { page: "FAQ", views: 5438, time: "03:02", bounce: "18%", trend: "up" },
      { page: "Termos de Serviço", views: 2384, time: "01:12", bounce: "67%", trend: "down" }
    ],
    goalCompletionData: [
      { name: "Registro", value: 68 },
      { name: "Compra", value: 42 },
      { name: "Newsletter", value: 86 },
      { name: "Review", value: 27 }
    ],
    acquisitionData: [
      { name: "Orgânico", value: 42 },
      { name: "Social", value: 28 },
      { name: "E-mail", value: 16 },
      { name: "Direto", value: 8 },
      { name: "Referral", value: 6 }
    ],
    userEngagementData: [
      { name: "Jan", Retorno: 42, "Novos": 58 },
      { name: "Fev", Retorno: 48, "Novos": 52 },
      { name: "Mar", Retorno: 45, "Novos": 55 },
      { name: "Abr", Retorno: 52, "Novos": 48 },
      { name: "Mai", Retorno: 58, "Novos": 42 },
      { name: "Jun", Retorno: 65, "Novos": 35 }
    ],
    countryData: [
      { name: "Brasil", value: 56 },
      { name: "EUA", value: 24 },
      { name: "Portugal", value: 12 },
      { name: "Outros", value: 8 }
    ],
    demoData: [
      { name: "18-24", Homens: 18, Mulheres: 24 },
      { name: "25-34", Homens: 28, Mulheres: 32 },
      { name: "35-44", Homens: 22, Mulheres: 21 },
      { name: "45-54", Homens: 14, Mulheres: 18 },
      { name: "55+", Homens: 8, Mulheres: 15 }
    ],
    timeOnSiteData: [
      { name: "Jan", tempo: 2.8 },
      { name: "Fev", tempo: 3.2 },
      { name: "Mar", tempo: 3.5 },
      { name: "Abr", tempo: 2.9 },
      { name: "Mai", tempo: 3.8 },
      { name: "Jun", tempo: 4.2 }
    ],
    pageSpeedData: [
      { name: "Desktop", Carregamento: 2.8, Renderização: 0.9 },
      { name: "Mobile", Carregamento: 3.6, Renderização: 1.4 }
    ],
    conversionByDeviceData: [
      { name: "Desktop", Taxa: 3.8 },
      { name: "Mobile", Taxa: 2.1 },
      { name: "Tablet", Taxa: 3.2 }
    ],
    trafficTrendSparkline: [
      { value: 28 }, { value: 32 }, { value: 36 }, { value: 30 },
      { value: 40 }, { value: 35 }, { value: 48 }, { value: 52 },
      { value: 55 }, { value: 60 }, { value: 65 }, { value: 68 }
    ],
    conversionTrendSparkline: [
      { value: 2.2 }, { value: 2.4 }, { value: 2.1 }, { value: 2.8 },
      { value: 3.2 }, { value: 3.5 }, { value: 3.2 }, { value: 3.8 },
      { value: 4.0 }, { value: 3.8 }, { value: 4.2 }, { value: 4.5 }
    ],
    averageOrderData: [
      { name: "Jan", value: 120 },
      { name: "Fev", value: 135 },
      { name: "Mar", value: 142 },
      { name: "Abr", value: 128 },
      { name: "Mai", value: 156 },
      { name: "Jun", value: 168 }
    ],
    customerJourneyData: [
      { name: "Descoberta", value: 100 },
      { name: "Consideração", value: 72 },
      { name: "Decisão", value: 48 },
      { name: "Retenção", value: 34 },
      { name: "Advocacia", value: 22 }
    ],
    contentEngagementData: [
      { name: "Blog Post A", views: 2450, engRate: 3.8, avgTime: 4.2 },
      { name: "Vídeo Tutorial", views: 1820, engRate: 6.2, avgTime: 8.5 },
      { name: "Guia PDF", views: 1240, engRate: 2.8, avgTime: 5.7 },
      { name: "Newsletter", views: 3240, engRate: 1.2, avgTime: 1.8 },
      { name: "Webinar", views: 980, engRate: 7.6, avgTime: 22.4 }
    ],
    socialMediaData: [
      { name: "Instagram", followers: 12400, engagement: 3.2, clicks: 945 },
      { name: "Facebook", followers: 8750, engagement: 1.8, clicks: 623 },
      { name: "LinkedIn", followers: 5230, engagement: 2.4, clicks: 487 },
      { name: "Twitter", followers: 4120, engagement: 1.6, clicks: 325 },
      { name: "YouTube", followers: 2340, engagement: 4.5, clicks: 512 }
    ],
    marketingROIData: [
      { name: "SEO", investment: 3000, revenue: 12000, roi: 400 },
      { name: "Paid Ads", investment: 5000, revenue: 18500, roi: 370 },
      { name: "Email", investment: 1200, revenue: 4200, roi: 350 },
      { name: "Social", investment: 2500, revenue: 7800, roi: 312 },
      { name: "Content", investment: 1800, revenue: 6500, roi: 361 }
    ],
    productPerformanceData: [
      { name: "Produto A", vendas: 342, reviews: 4.8, recompra: 45 },
      { name: "Produto B", vendas: 289, reviews: 4.2, recompra: 38 },
      { name: "Produto C", vendas: 187, reviews: 3.9, recompra: 22 },
      { name: "Produto D", vendas: 145, reviews: 4.6, recompra: 41 },
      { name: "Produto E", vendas: 98, reviews: 4.1, recompra: 27 }
    ],
    quarterlyRevenueData: [
      { name: "Q1", receita: 125000, meta: 120000 },
      { name: "Q2", receita: 148000, meta: 140000 },
      { name: "Q3", receita: 137000, meta: 150000 },
      { name: "Q4", receita: 182000, meta: 175000 }
    ],
    satisfactionMetrics: [
      { name: "Atendimento", value: 85 },
      { name: "Facilidade de Uso", value: 82 },
      { name: "Preço", value: 78 },
      { name: "Qualidade do Produto", value: 92 },
      { name: "Entrega", value: 88 }
    ],
    abTestData: [
      { name: "Versão A", conversão: 2.8, tempo: 2.5, rejeição: 34 },
      { name: "Versão B", conversão: 3.6, tempo: 2.1, rejeição: 28 }
    ],
    trafficByDayData: [
      { name: "Dom", Orgânico: 450, Pago: 380, Social: 210, Email: 140, Direto: 320 },
      { name: "Seg", Orgânico: 520, Pago: 420, Social: 250, Email: 390, Direto: 340 },
      { name: "Ter", Orgânico: 540, Pago: 450, Social: 270, Email: 180, Direto: 350 },
      { name: "Qua", Orgânico: 610, Pago: 520, Social: 230, Email: 160, Direto: 380 },
      { name: "Qui", Orgânico: 580, Pago: 480, Social: 260, Email: 210, Direto: 360 },
      { name: "Sex", Orgânico: 640, Pago: 550, Social: 290, Email: 230, Direto: 420 },
      { name: "Sáb", Orgânico: 520, Pago: 420, Social: 340, Email: 180, Direto: 390 }
    ],
    npsData: [
      { name: "Jan", score: 67 },
      { name: "Fev", score: 72 },
      { name: "Mar", score: 75 },
      { name: "Abr", score: 74 },
      { name: "Mai", score: 79 },
      { name: "Jun", score: 82 }
    ],
    userBehaviorData: [
      { timeOnSite: 1.2, pagesViewed: 2, value: 240 },
      { timeOnSite: 3.4, pagesViewed: 5, value: 320 },
      { timeOnSite: 2.8, pagesViewed: 4, value: 280 },
      { timeOnSite: 5.2, pagesViewed: 8, value: 410 },
      { timeOnSite: 4.7, pagesViewed: 6, value: 350 },
      { timeOnSite: 6.1, pagesViewed: 9, value: 460 },
      { timeOnSite: 2.3, pagesViewed: 3, value: 270 },
      { timeOnSite: 3.8, pagesViewed: 7, value: 380 },
      { timeOnSite: 5.5, pagesViewed: 10, value: 490 },
      { timeOnSite: 4.2, pagesViewed: 6, value: 330 },
      { timeOnSite: 3.1, pagesViewed: 4, value: 290 },
      { timeOnSite: 5.8, pagesViewed: 8, value: 420 },
      { timeOnSite: 2.9, pagesViewed: 3, value: 260 },
      { timeOnSite: 4.5, pagesViewed: 7, value: 370 },
      { timeOnSite: 6.3, pagesViewed: 11, value: 510 }
    ],
    customerInterestsData: [
      { category: 'Tecnologia', A: 120, B: 110, C: 140 },
      { category: 'Moda', A: 98, B: 130, C: 75 },
      { category: 'Esportes', A: 86, B: 70, C: 95 },
      { category: 'Casa', A: 99, B: 85, C: 110 },
      { category: 'Alimentos', A: 85, B: 75, C: 80 },
      { category: 'Saúde', A: 65, B: 105, C: 70 },
      { category: 'Viagens', A: 74, B: 100, C: 82 },
      { category: 'Entretenimento', A: 95, B: 92, C: 105 }
    ],
  };

  return (
    <DataContext.Provider value={{ data }}>
      {children}
    </DataContext.Provider>
  );
};
