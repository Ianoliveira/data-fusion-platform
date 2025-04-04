
import { Helmet } from "react-helmet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Camera, Search, Text, ShoppingBag, LayoutGrid } from "lucide-react";
import { AreaChart, BarChart } from "@/components/ui/chart";

const Journeys = () => {
  // Dados para os gráficos
  const timeSeriesData = [
    { name: 'Jan', value: 420 },
    { name: 'Fev', value: 380 },
    { name: 'Mar', value: 510 },
    { name: 'Abr', value: 580 },
    { name: 'Mai', value: 620 },
    { name: 'Jun', value: 670 }
  ];

  const deviceData = [
    { name: 'Mobile', interacoes: 65 },
    { name: 'Desktop', interacoes: 28 },
    { name: 'Tablet', interacoes: 7 }
  ];

  const photoSearchTimeSeries = [
    { name: 'Jan', buscas: 320, conversoes: 18 },
    { name: 'Fev', buscas: 340, conversoes: 24 },
    { name: 'Mar', buscas: 380, conversoes: 28 },
    { name: 'Abr', buscas: 410, conversoes: 32 },
    { name: 'Mai', buscas: 490, conversoes: 38 },
    { name: 'Jun', buscas: 520, conversoes: 42 }
  ];

  const similarSearchTimeSeries = [
    { name: 'Jan', buscas: 620, conversoes: 42 },
    { name: 'Fev', buscas: 680, conversoes: 48 },
    { name: 'Mar', buscas: 720, conversoes: 55 },
    { name: 'Abr', buscas: 810, conversoes: 61 },
    { name: 'Mai', buscas: 920, conversoes: 70 },
    { name: 'Jun', buscas: 1010, conversoes: 82 }
  ];

  const textSearchTimeSeries = [
    { name: 'Jan', buscas: 1820, conversoes: 85 },
    { name: 'Fev', buscas: 2120, conversoes: 92 },
    { name: 'Mar', buscas: 1950, conversoes: 84 },
    { name: 'Abr', buscas: 2210, conversoes: 97 },
    { name: 'Mai', buscas: 2080, conversoes: 90 },
    { name: 'Jun', buscas: 2040, conversoes: 88 }
  ];

  const shopTheLookTimeSeries = [
    { name: 'Jan', looks: 98, receita: 32540 },
    { name: 'Fev', looks: 125, receita: 43280 },
    { name: 'Mar', looks: 142, receita: 54620 },
    { name: 'Abr', looks: 168, receita: 62450 },
    { name: 'Mai', looks: 187, receita: 71820 },
    { name: 'Jun', looks: 220, receita: 89340 }
  ];

  const smartShowcaseTimeSeries = [
    { name: 'Jan', interacoes: 980, cliques: 178 },
    { name: 'Fev', interacoes: 1240, cliques: 220 },
    { name: 'Mar', interacoes: 1380, cliques: 254 },
    { name: 'Abr', interacoes: 1520, cliques: 287 },
    { name: 'Mai', interacoes: 1680, cliques: 310 },
    { name: 'Jun', interacoes: 1920, cliques: 342 }
  ];

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
            <TabsTrigger value="photo-search">Busca por Foto</TabsTrigger>
            <TabsTrigger value="similar-search">Busca por Similar</TabsTrigger>
            <TabsTrigger value="text-search">Busca por Texto</TabsTrigger>
            <TabsTrigger value="shop-the-look">Compre o Look</TabsTrigger>
            <TabsTrigger value="smart-showcase">Vitrine Inteligente</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <JourneyCard 
                title="Busca por Foto" 
                description="Usuários que buscam produtos através de imagens"
                value="3,842"
                change="+12.5%"
                positive={true}
                icon={Camera}
              />
              <JourneyCard 
                title="Busca por Similar" 
                description="Produtos encontrados por similaridade"
                value="5,621"
                change="+8.3%"
                positive={true}
                icon={Search}
              />
              <JourneyCard 
                title="Busca por Texto" 
                description="Consultas por descrição textual"
                value="12,938"
                change="-2.1%"
                positive={false}
                icon={Text}
              />
              <JourneyCard 
                title="Compre o Look" 
                description="Conjuntos completos adquiridos"
                value="943"
                change="+24.7%"
                positive={true}
                icon={ShoppingBag}
              />
              <JourneyCard 
                title="Vitrine Inteligente" 
                description="Interações com recomendações personalizadas"
                value="8,726"
                change="+15.2%"
                positive={true}
                icon={LayoutGrid}
              />
              <JourneyCard 
                title="Taxa de Conversão Geral" 
                description="Média de conversão das jornadas"
                value="4.2%"
                change="+0.8%"
                positive={true}
                icon={BarChart3}
              />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
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
              <Card>
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
          </TabsContent>

          <TabsContent value="photo-search" className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <JourneyCard 
                title="Total de Buscas" 
                description="Número total de buscas por foto"
                value="3,842"
                change="+12.5%"
                positive={true}
                icon={Camera}
              />
              <JourneyCard 
                title="Taxa de Conversão" 
                description="Buscas que resultaram em compra"
                value="5.8%"
                change="+1.2%"
                positive={true}
                icon={ShoppingBag}
              />
              <JourneyCard 
                title="Tempo Médio" 
                description="Tempo médio para encontrar o produto"
                value="45s"
                change="-8s"
                positive={true}
                icon={BarChart3}
              />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Tendência de Buscas por Foto</CardTitle>
                  <CardDescription>Evolução mensal de buscas e conversões</CardDescription>
                </CardHeader>
                <CardContent>
                  <AreaChart
                    data={photoSearchTimeSeries}
                    categories={["buscas", "conversoes"]}
                    index="name"
                    colors={["#f43f5e", "#10b981"]}
                    valueFormatter={(value) => `${value}`}
                    className="h-[300px]"
                  />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Métricas Adicionais</CardTitle>
                  <CardDescription>Informações detalhadas sobre busca por foto</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <MetricItem 
                    label="Categorias Mais Buscadas" 
                    value="Roupas Femininas (42%)" 
                    subvalue="Acessórios (28%)" 
                  />
                  <MetricItem 
                    label="Taxa de Clique em Similares" 
                    value="68%" 
                    subvalue="+5.2% vs mês anterior" 
                    positive={true}
                  />
                  <MetricItem 
                    label="Resolução Média das Imagens" 
                    value="1.2 MP" 
                    subvalue="+0.3 MP vs mês anterior" 
                    positive={true}
                  />
                  <MetricItem 
                    label="Taxa de Engajamento" 
                    value="42%" 
                    subvalue="-3.1% vs mês anterior" 
                    positive={false}
                  />
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="similar-search" className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <JourneyCard 
                title="Produtos Similares" 
                description="Total de buscas por similaridade"
                value="5,621"
                change="+8.3%"
                positive={true}
                icon={Search}
              />
              <JourneyCard 
                title="Taxa de Relevância" 
                description="Precisão das recomendações similares"
                value="89.3%"
                change="+2.7%"
                positive={true}
                icon={BarChart3}
              />
              <JourneyCard 
                title="Engajamento" 
                description="Cliques em produtos similares"
                value="12,483"
                change="+15.6%"
                positive={true}
                icon={BarChart3}
              />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Desempenho de Busca por Similar</CardTitle>
                  <CardDescription>Evolução mensal de buscas e conversões por similaridade</CardDescription>
                </CardHeader>
                <CardContent>
                  <AreaChart
                    data={similarSearchTimeSeries}
                    categories={["buscas", "conversoes"]}
                    index="name"
                    colors={["#3b82f6", "#10b981"]}
                    valueFormatter={(value) => `${value}`}
                    className="h-[300px]"
                  />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Métricas Adicionais</CardTitle>
                  <CardDescription>Informações detalhadas sobre busca por similaridade</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <MetricItem 
                    label="Produtos Vistos por Sessão" 
                    value="4.8 produtos" 
                    subvalue="+0.6 vs mês anterior" 
                    positive={true}
                  />
                  <MetricItem 
                    label="Tempo em Produtos Similares" 
                    value="2.4 min" 
                    subvalue="+0.3 min vs mês anterior" 
                    positive={true}
                  />
                  <MetricItem 
                    label="Tamanho Médio do Carrinho" 
                    value="R$ 245,80" 
                    subvalue="+R$ 18,40 vs mês anterior" 
                    positive={true}
                  />
                  <MetricItem 
                    label="Taxa de Acurácia do Modelo" 
                    value="92.1%" 
                    subvalue="+1.8% vs mês anterior" 
                    positive={true}
                  />
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="text-search" className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <JourneyCard 
                title="Consultas de Texto" 
                description="Total de buscas por texto"
                value="12,938"
                change="-2.1%"
                positive={false}
                icon={Text}
              />
              <JourneyCard 
                title="Precisão" 
                description="Acurácia dos resultados retornados"
                value="78.2%"
                change="+4.5%"
                positive={true}
                icon={BarChart3}
              />
              <JourneyCard 
                title="Tempo de Resposta" 
                description="Tempo médio para processar consultas"
                value="0.8s"
                change="-0.2s"
                positive={true}
                icon={BarChart3}
              />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Tendência de Busca por Texto</CardTitle>
                  <CardDescription>Evolução mensal de buscas e conversões textuais</CardDescription>
                </CardHeader>
                <CardContent>
                  <AreaChart
                    data={textSearchTimeSeries}
                    categories={["buscas", "conversoes"]}
                    index="name"
                    colors={["#6b7280", "#10b981"]}
                    valueFormatter={(value) => `${value}`}
                    className="h-[300px]"
                  />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Métricas Adicionais</CardTitle>
                  <CardDescription>Informações detalhadas sobre busca textual</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <MetricItem 
                    label="Termos Mais Buscados" 
                    value="'vestido preto', 'tênis casual'" 
                    subvalue="32% das buscas" 
                  />
                  <MetricItem 
                    label="Comprimento Médio da Consulta" 
                    value="3.2 palavras" 
                    subvalue="+0.4 vs mês anterior" 
                    positive={true}
                  />
                  <MetricItem 
                    label="Taxa de Correção Ortográfica" 
                    value="18.5%" 
                    subvalue="-2.1% vs mês anterior" 
                    positive={true}
                  />
                  <MetricItem 
                    label="Resultados por Consulta" 
                    value="24.8" 
                    subvalue="-3.2 vs mês anterior" 
                    positive={true}
                  />
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="shop-the-look" className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <JourneyCard 
                title="Looks Comprados" 
                description="Conjuntos completos adquiridos"
                value="943"
                change="+24.7%"
                positive={true}
                icon={ShoppingBag}
              />
              <JourneyCard 
                title="Ticket Médio" 
                description="Valor médio das compras de looks"
                value="R$ 389,50"
                change="+32.1%"
                positive={true}
                icon={BarChart3}
              />
              <JourneyCard 
                title="Looks por Cliente" 
                description="Média de looks por cliente"
                value="1.7"
                change="+0.3"
                positive={true}
                icon={BarChart3}
              />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Desempenho de Compre o Look</CardTitle>
                  <CardDescription>Evolução mensal de looks comprados e receita</CardDescription>
                </CardHeader>
                <CardContent>
                  <AreaChart
                    data={shopTheLookTimeSeries}
                    categories={["looks", "receita"]}
                    index="name"
                    colors={["#8b5cf6", "#f97316"]}
                    valueFormatter={(value) => `${value}`}
                    className="h-[300px]"
                  />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Métricas Adicionais</CardTitle>
                  <CardDescription>Informações detalhadas sobre Compre o Look</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <MetricItem 
                    label="Itens Médios por Look" 
                    value="3.8 itens" 
                    subvalue="+0.3 vs mês anterior" 
                    positive={true}
                  />
                  <MetricItem 
                    label="Taxa de Alteração do Look" 
                    value="32.4%" 
                    subvalue="-1.5% vs mês anterior" 
                    positive={true}
                  />
                  <MetricItem 
                    label="Sazonalidade" 
                    value="Pico aos Domingos" 
                    subvalue="28% acima da média" 
                    positive={true}
                  />
                  <MetricItem 
                    label="Looks Criados por IA" 
                    value="68.3%" 
                    subvalue="+12.4% vs mês anterior" 
                    positive={true}
                  />
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="smart-showcase" className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <JourneyCard 
                title="Interações" 
                description="Total de interações com a vitrine"
                value="8,726"
                change="+15.2%"
                positive={true}
                icon={LayoutGrid}
              />
              <JourneyCard 
                title="Taxa de Clique" 
                description="Porcentagem de cliques nas recomendações"
                value="18.3%"
                change="+3.5%"
                positive={true}
                icon={BarChart3}
              />
              <JourneyCard 
                title="Receita Gerada" 
                description="Vendas originadas da vitrine inteligente"
                value="R$ 468.320"
                change="+22.1%"
                positive={true}
                icon={BarChart3}
              />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Performance da Vitrine Inteligente</CardTitle>
                  <CardDescription>Evolução mensal de interações e cliques</CardDescription>
                </CardHeader>
                <CardContent>
                  <AreaChart
                    data={smartShowcaseTimeSeries}
                    categories={["interacoes", "cliques"]}
                    index="name"
                    colors={["#0ea5e9", "#f97316"]}
                    valueFormatter={(value) => `${value}`}
                    className="h-[300px]"
                  />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Métricas Adicionais</CardTitle>
                  <CardDescription>Informações detalhadas sobre a Vitrine Inteligente</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <MetricItem 
                    label="Personalização Efetiva" 
                    value="82.6%" 
                    subvalue="+4.2% vs mês anterior" 
                    positive={true}
                  />
                  <MetricItem 
                    label="Tempo Médio na Vitrine" 
                    value="3.4 minutos" 
                    subvalue="+0.6 min vs mês anterior" 
                    positive={true}
                  />
                  <MetricItem 
                    label="Produtos Visualizados" 
                    value="8.2 por sessão" 
                    subvalue="+1.3 vs mês anterior" 
                    positive={true}
                  />
                  <MetricItem 
                    label="Taxa de Retorno à Vitrine" 
                    value="42.8%" 
                    subvalue="+6.9% vs mês anterior" 
                    positive={true}
                  />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

interface JourneyCardProps {
  title: string;
  description: string;
  value: string;
  change: string;
  positive: boolean;
  icon: React.ComponentType<any>;
}

const JourneyCard = ({ title, description, value, change, positive, icon: Icon }: JourneyCardProps) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">{description}</p>
        <div className={`mt-2 flex items-center text-xs ${positive ? 'text-green-500' : 'text-red-500'}`}>
          {positive ? '↑' : '↓'} {change}
        </div>
      </CardContent>
    </Card>
  );
};

interface MetricItemProps {
  label: string;
  value: string;
  subvalue: string;
  positive?: boolean;
}

const MetricItem = ({ label, value, subvalue, positive }: MetricItemProps) => {
  return (
    <div className="border-b border-gray-100 pb-3 last:border-0 last:pb-0">
      <div className="text-sm font-medium text-gray-500">{label}</div>
      <div className="text-xl font-semibold mt-1">{value}</div>
      <div className={`text-xs ${positive !== undefined ? (positive ? 'text-green-500' : 'text-red-500') : 'text-gray-500'}`}>
        {subvalue}
      </div>
    </div>
  );
};

export default Journeys;

