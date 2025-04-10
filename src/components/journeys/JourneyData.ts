
import { Camera, Search, Text, ShoppingBag, LayoutGrid, BarChart3 } from 'lucide-react';

export const timeSeriesData = [
  { name: 'Jan', value: 420 },
  { name: 'Fev', value: 380 },
  { name: 'Mar', value: 510 },
  { name: 'Abr', value: 580 },
  { name: 'Mai', value: 620 },
  { name: 'Jun', value: 670 }
];

export const deviceData = [
  { name: 'Mobile', interacoes: 65 },
  { name: 'Desktop', interacoes: 28 },
  { name: 'Tablet', interacoes: 7 }
];

export const journeyTabsData = {
  overview: {
    metrics: [
      {
        title: "Busca por Foto",
        description: "Usuários que buscam produtos através de imagens",
        value: "3,842",
        change: "+12.5%",
        positive: true,
        icon: Camera
      },
      {
        title: "Busca por Similar",
        description: "Produtos encontrados por similaridade",
        value: "5,621",
        change: "+8.3%",
        positive: true,
        icon: Search
      },
      {
        title: "Busca por Texto",
        description: "Consultas por descrição textual",
        value: "12,938",
        change: "-2.1%",
        positive: false,
        icon: Text
      },
      {
        title: "Compre o Look",
        description: "Conjuntos completos adquiridos",
        value: "943",
        change: "+24.7%",
        positive: true,
        icon: ShoppingBag
      },
      {
        title: "Vitrine Inteligente",
        description: "Interações com recomendações personalizadas",
        value: "8,726",
        change: "+15.2%",
        positive: true,
        icon: LayoutGrid
      },
      {
        title: "Taxa de Conversão Geral",
        description: "Média de conversão das jornadas",
        value: "4.2%",
        change: "+0.8%",
        positive: true,
        icon: BarChart3
      }
    ],
    timeSeriesData,
    deviceData
  },
  photoSearch: {
    title: "Tendência de Buscas por Foto",
    metrics: [
      {
        title: "Total de Buscas",
        description: "Número total de buscas por foto",
        value: "3,842",
        change: "+12.5%",
        positive: true,
        icon: Camera
      },
      {
        title: "Taxa de Conversão",
        description: "Buscas que resultaram em compra",
        value: "5.8%",
        change: "+1.2%",
        positive: true,
        icon: ShoppingBag
      },
      {
        title: "Tempo Médio",
        description: "Tempo médio para encontrar o produto",
        value: "45s",
        change: "-8s",
        positive: true,
        icon: BarChart3
      }
    ],
    chartData: [
      { name: 'Jan', buscas: 320, conversoes: 18 },
      { name: 'Fev', buscas: 340, conversoes: 24 },
      { name: 'Mar', buscas: 380, conversoes: 28 },
      { name: 'Abr', buscas: 410, conversoes: 32 },
      { name: 'Mai', buscas: 490, conversoes: 38 },
      { name: 'Jun', buscas: 520, conversoes: 42 }
    ],
    chartCategories: ["buscas", "conversoes"],
    chartColors: ["#f43f5e", "#10b981"],
    additionalMetrics: [
      {
        label: "Categorias Mais Buscadas",
        value: "Roupas Femininas (42%)",
        subvalue: "Acessórios (28%)"
      },
      {
        label: "Taxa de Clique em Similares",
        value: "68%", 
        subvalue: "+5.2% vs mês anterior",
        positive: true
      },
      {
        label: "Resolução Média das Imagens", 
        value: "1.2 MP",
        subvalue: "+0.3 MP vs mês anterior", 
        positive: true
      },
      {
        label: "Taxa de Engajamento", 
        value: "42%", 
        subvalue: "-3.1% vs mês anterior", 
        positive: false
      }
    ]
  },
  similarSearch: {
    title: "Desempenho de Busca por Similar",
    metrics: [
      {
        title: "Produtos Similares",
        description: "Total de buscas por similaridade",
        value: "5,621",
        change: "+8.3%",
        positive: true,
        icon: Search
      },
      {
        title: "Taxa de Relevância",
        description: "Precisão das recomendações similares",
        value: "89.3%",
        change: "+2.7%",
        positive: true,
        icon: BarChart3
      },
      {
        title: "Engajamento",
        description: "Cliques em produtos similares",
        value: "12,483",
        change: "+15.6%",
        positive: true,
        icon: BarChart3
      }
    ],
    chartData: [
      { name: 'Jan', buscas: 620, conversoes: 42 },
      { name: 'Fev', buscas: 680, conversoes: 48 },
      { name: 'Mar', buscas: 720, conversoes: 55 },
      { name: 'Abr', buscas: 810, conversoes: 61 },
      { name: 'Mai', buscas: 920, conversoes: 70 },
      { name: 'Jun', buscas: 1010, conversoes: 82 }
    ],
    chartCategories: ["buscas", "conversoes"],
    chartColors: ["#3b82f6", "#10b981"],
    additionalMetrics: [
      {
        label: "Produtos Vistos por Sessão",
        value: "4.8 produtos",
        subvalue: "+0.6 vs mês anterior",
        positive: true
      },
      {
        label: "Tempo em Produtos Similares",
        value: "2.4 min",
        subvalue: "+0.3 min vs mês anterior",
        positive: true
      },
      {
        label: "Tamanho Médio do Carrinho",
        value: "R$ 245,80",
        subvalue: "+R$ 18,40 vs mês anterior",
        positive: true
      },
      {
        label: "Taxa de Acurácia do Modelo",
        value: "92.1%",
        subvalue: "+1.8% vs mês anterior",
        positive: true
      }
    ]
  },
  textSearch: {
    title: "Tendência de Busca por Texto",
    metrics: [
      {
        title: "Consultas de Texto",
        description: "Total de buscas por texto",
        value: "12,938",
        change: "-2.1%",
        positive: false,
        icon: Text
      },
      {
        title: "Precisão",
        description: "Acurácia dos resultados retornados",
        value: "78.2%",
        change: "+4.5%",
        positive: true,
        icon: BarChart3
      },
      {
        title: "Tempo de Resposta",
        description: "Tempo médio para processar consultas",
        value: "0.8s",
        change: "-0.2s",
        positive: true,
        icon: BarChart3
      }
    ],
    chartData: [
      { name: 'Jan', buscas: 1820, conversoes: 85 },
      { name: 'Fev', buscas: 2120, conversoes: 92 },
      { name: 'Mar', buscas: 1950, conversoes: 84 },
      { name: 'Abr', buscas: 2210, conversoes: 97 },
      { name: 'Mai', buscas: 2080, conversoes: 90 },
      { name: 'Jun', buscas: 2040, conversoes: 88 }
    ],
    chartCategories: ["buscas", "conversoes"],
    chartColors: ["#6b7280", "#10b981"],
    additionalMetrics: [
      {
        label: "Termos Mais Buscados",
        value: "'vestido preto', 'tênis casual'",
        subvalue: "32% das buscas"
      },
      {
        label: "Comprimento Médio da Consulta", 
        value: "3.2 palavras",
        subvalue: "+0.4 vs mês anterior",
        positive: true
      },
      {
        label: "Taxa de Correção Ortográfica", 
        value: "18.5%",
        subvalue: "-2.1% vs mês anterior",
        positive: true
      },
      {
        label: "Resultados por Consulta", 
        value: "24.8",
        subvalue: "-3.2 vs mês anterior",
        positive: true
      }
    ]
  },
  shopTheLook: {
    title: "Desempenho de Compre o Look",
    metrics: [
      {
        title: "Looks Comprados",
        description: "Conjuntos completos adquiridos",
        value: "943",
        change: "+24.7%",
        positive: true,
        icon: ShoppingBag
      },
      {
        title: "Ticket Médio",
        description: "Valor médio das compras de looks",
        value: "R$ 389,50",
        change: "+32.1%",
        positive: true,
        icon: BarChart3
      },
      {
        title: "Looks por Cliente",
        description: "Média de looks por cliente",
        value: "1.7",
        change: "+0.3",
        positive: true,
        icon: BarChart3
      }
    ],
    chartData: [
      { name: 'Jan', looks: 98, receita: 32540 },
      { name: 'Fev', looks: 125, receita: 43280 },
      { name: 'Mar', looks: 142, receita: 54620 },
      { name: 'Abr', looks: 168, receita: 62450 },
      { name: 'Mai', looks: 187, receita: 71820 },
      { name: 'Jun', looks: 220, receita: 89340 }
    ],
    chartCategories: ["looks", "receita"],
    chartColors: ["#8b5cf6", "#f97316"],
    additionalMetrics: [
      {
        label: "Itens Médios por Look", 
        value: "3.8 itens",
        subvalue: "+0.3 vs mês anterior",
        positive: true
      },
      {
        label: "Taxa de Alteração do Look", 
        value: "32.4%",
        subvalue: "-1.5% vs mês anterior",
        positive: true
      },
      {
        label: "Sazonalidade", 
        value: "Pico aos Domingos",
        subvalue: "28% acima da média",
        positive: true
      },
      {
        label: "Looks Criados por IA", 
        value: "68.3%",
        subvalue: "+12.4% vs mês anterior",
        positive: true
      }
    ]
  },
  smartShowcase: {
    title: "Performance da Vitrine Inteligente",
    metrics: [
      {
        title: "Interações",
        description: "Total de interações com a vitrine",
        value: "8,726",
        change: "+15.2%",
        positive: true,
        icon: LayoutGrid
      },
      {
        title: "Taxa de Clique",
        description: "Porcentagem de cliques nas recomendações",
        value: "18.3%",
        change: "+3.5%",
        positive: true,
        icon: BarChart3
      },
      {
        title: "Receita Gerada",
        description: "Vendas originadas da vitrine inteligente",
        value: "R$ 468.320",
        change: "+22.1%",
        positive: true,
        icon: BarChart3
      }
    ],
    chartData: [
      { name: 'Jan', interacoes: 980, cliques: 178 },
      { name: 'Fev', interacoes: 1240, cliques: 220 },
      { name: 'Mar', interacoes: 1380, cliques: 254 },
      { name: 'Abr', interacoes: 1520, cliques: 287 },
      { name: 'Mai', interacoes: 1680, cliques: 310 },
      { name: 'Jun', interacoes: 1920, cliques: 342 }
    ],
    chartCategories: ["interacoes", "cliques"],
    chartColors: ["#0ea5e9", "#f97316"],
    additionalMetrics: [
      {
        label: "Personalização Efetiva", 
        value: "82.6%",
        subvalue: "+4.2% vs mês anterior",
        positive: true
      },
      {
        label: "Tempo Médio na Vitrine", 
        value: "3.4 minutos",
        subvalue: "+0.6 min vs mês anterior",
        positive: true
      },
      {
        label: "Produtos Visualizados", 
        value: "8.2 por sessão",
        subvalue: "+1.3 vs mês anterior",
        positive: true
      },
      {
        label: "Taxa de Retorno à Vitrine", 
        value: "42.8%",
        subvalue: "+6.9% vs mês anterior",
        positive: true
      }
    ]
  }
};
