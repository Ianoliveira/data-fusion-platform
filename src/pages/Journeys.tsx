
import { Helmet } from "react-helmet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Camera, Search, Text, ShoppingBag, LayoutGrid } from "lucide-react";

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

export default Journeys;
