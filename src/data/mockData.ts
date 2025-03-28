
// Mock data for the Twiggy.ai CDP platform

// Active integrations
export const activeIntegrations = [
  {
    id: "1",
    name: "Salesforce",
    category: "CRM",
    status: "connected",
    lastSync: "Hoje, 14:32",
    dataPoints: 4523,
  },
  {
    id: "2",
    name: "HubSpot",
    category: "CRM",
    status: "connected",
    lastSync: "Hoje, 12:15",
    dataPoints: 3211,
  },
  {
    id: "3",
    name: "Google Analytics",
    category: "Analytics",
    status: "connected",
    lastSync: "Hoje, 15:20",
    dataPoints: 8754,
  },
  {
    id: "4",
    name: "Meta Ads",
    category: "ADS",
    status: "error",
    lastSync: "Ontem, 22:45",
    dataPoints: 1567,
  },
  {
    id: "5",
    name: "Shopify",
    category: "E-commerce",
    status: "connected",
    lastSync: "Hoje, 13:05",
    dataPoints: 6342,
  },
  {
    id: "6",
    name: "SAP",
    category: "ERP",
    status: "pending",
    lastSync: "Configuração necessária",
    dataPoints: 0,
  },
];

// Recent insights
export const recentInsights = [
  {
    id: "1",
    title: "Queda de 25% na taxa de conversão do produto 'Smartphone XYZ'",
    description: "Detectamos uma queda significativa nas conversões deste produto nas últimas 48 horas. Recomendamos verificar se houve alteração na página ou se há problemas técnicos.",
    category: "alert",
    priority: "high",
    timestamp: "Há 2 horas",
  },
  {
    id: "2",
    title: "Oportunidade de remarketing para carrinhos abandonados",
    description: "234 clientes adicionaram produtos ao carrinho sem finalizar a compra nos últimos 7 dias. Uma campanha de e-mail com cupom de 10% pode recuperar estas vendas.",
    category: "opportunity",
    priority: "medium",
    timestamp: "Há 6 horas",
  },
  {
    id: "3",
    title: "Aumento no custo de aquisição via Google Ads",
    description: "O CAC aumentou 18% nos últimos 15 dias. Recomendamos ajustar os lances e revisar o direcionamento da campanha 'Promoção de Inverno'.",
    category: "trend",
    priority: "medium",
    timestamp: "Ontem",
  },
  {
    id: "4",
    title: "Segmento de clientes com alto potencial de upsell identificado",
    description: "Identificamos um segmento de 472 clientes que compraram produtos da categoria A e têm alta propensão a comprar produtos complementares da categoria B.",
    category: "opportunity",
    priority: "high",
    timestamp: "Há 2 dias",
  },
];

// Customer segments data
export const customerSegments = [
  {
    id: "1",
    name: "Alto Valor",
    count: 1283,
    avgValue: 950,
    retentionRate: 78,
    preferredChannel: "Email",
  },
  {
    id: "2",
    name: "Novos Clientes",
    count: 3456,
    avgValue: 250,
    retentionRate: 35,
    preferredChannel: "Meta Ads",
  },
  {
    id: "3",
    name: "Em Risco",
    count: 728,
    avgValue: 450,
    retentionRate: 25,
    preferredChannel: "WhatsApp",
  },
  {
    id: "4",
    name: "Recorrentes",
    count: 2145,
    avgValue: 600,
    retentionRate: 85,
    preferredChannel: "Email",
  },
];

// Available integrations
export const availableIntegrations = {
  crm: [
    { id: "crm1", name: "Salesforce", logo: "salesforce.png" },
    { id: "crm2", name: "HubSpot", logo: "hubspot.png" },
    { id: "crm3", name: "RD Station", logo: "rdstation.png" },
    { id: "crm4", name: "Pipedrive", logo: "pipedrive.png" },
  ],
  erp: [
    { id: "erp1", name: "SAP", logo: "sap.png" },
    { id: "erp2", name: "Oracle", logo: "oracle.png" },
    { id: "erp3", name: "TOTVS", logo: "totvs.png" },
    { id: "erp4", name: "Microsoft Dynamics", logo: "dynamics.png" },
  ],
  analytics: [
    { id: "analytics1", name: "Google Analytics", logo: "google-analytics.png" },
    { id: "analytics2", name: "Adobe Analytics", logo: "adobe-analytics.png" },
    { id: "analytics3", name: "Power BI", logo: "power-bi.png" },
    { id: "analytics4", name: "Mixpanel", logo: "mixpanel.png" },
  ],
  ads: [
    { id: "ads1", name: "Google Ads", logo: "google-ads.png" },
    { id: "ads2", name: "Meta Ads", logo: "meta-ads.png" },
    { id: "ads3", name: "TikTok Ads", logo: "tiktok-ads.png" },
    { id: "ads4", name: "LinkedIn Ads", logo: "linkedin-ads.png" },
  ],
  ecommerce: [
    { id: "ecom1", name: "Shopify", logo: "shopify.png" },
    { id: "ecom2", name: "VTEX", logo: "vtex.png" },
    { id: "ecom3", name: "Magento", logo: "magento.png" },
    { id: "ecom4", name: "WooCommerce", logo: "woocommerce.png" },
  ],
};

// AI predictive models
export const predictiveModels = [
  {
    id: "model1",
    name: "Previsão de Churn",
    description: "Identifica clientes com maior probabilidade de abandono nos próximos 30 dias",
    accuracy: 87,
    lastTrained: "12/07/2023",
    status: "active",
  },
  {
    id: "model2",
    name: "Propensão à Compra",
    description: "Classifica clientes por probabilidade de conversão para campanhas específicas",
    accuracy: 92,
    lastTrained: "15/07/2023",
    status: "active",
  },
  {
    id: "model3",
    name: "Recomendação de Produtos",
    description: "Sugere produtos com base no histórico e comportamento do cliente",
    accuracy: 84,
    lastTrained: "10/07/2023",
    status: "active",
  },
  {
    id: "model4",
    name: "Previsão LTV",
    description: "Projeta o valor vitalício do cliente com base em comportamentos iniciais",
    accuracy: 79,
    lastTrained: "05/07/2023",
    status: "training",
  },
];

// Available automation templates
export const automationTemplates = [
  {
    id: "auto1",
    name: "Recuperação de Carrinho",
    description: "Envia emails automáticos para clientes que abandonaram o carrinho",
    category: "E-commerce",
    difficulty: "Fácil",
  },
  {
    id: "auto2",
    name: "Alerta de Queda de Conversão",
    description: "Notifica quando houver queda significativa na taxa de conversão",
    category: "Analytics",
    difficulty: "Médio",
  },
  {
    id: "auto3",
    name: "Onboarding de Novos Clientes",
    description: "Sequência de emails para novos clientes conhecerem seus produtos",
    category: "CRM",
    difficulty: "Médio",
  },
  {
    id: "auto4",
    name: "Ajuste Automático de Bid",
    description: "Ajusta lances em campanhas Google Ads com base em performance",
    category: "Ads",
    difficulty: "Avançado",
  },
];

// Sample case studies
export const caseStudies = [
  {
    id: "case1",
    company: "Moda Express",
    industry: "Vestuário",
    challenge: "Altos custos de aquisição e baixa retenção de clientes",
    solution: "Unificação de dados de CRM e comportamento web para segmentação avançada",
    result: "Redução de 22% no CAC e aumento de 18% na retenção em 3 meses",
  },
  {
    id: "case2",
    company: "Tech Store",
    industry: "Eletrônicos",
    challenge: "Baixa conversão em campanhas de Google Ads",
    solution: "Implementação de modelos preditivos para otimização de campanhas",
    result: "Aumento de 35% no ROAS e 28% mais conversões com o mesmo orçamento",
  },
  {
    id: "case3",
    company: "Supermercado Online",
    industry: "Alimentação",
    challenge: "Dificuldade em personalizar ofertas para clientes recorrentes",
    solution: "Modelo de recomendação baseado em histórico de compras e sazonalidade",
    result: "Crescimento de 42% em vendas cruzadas e 15% no valor médio do pedido",
  },
];
