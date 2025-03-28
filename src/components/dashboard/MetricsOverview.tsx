
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AreaChart, BarChart, BarList } from "@/components/ui/chart";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowUpRight, ArrowDownRight, TrendingUp, Users, ShoppingCart, DollarSign } from "lucide-react";

export function MetricsOverview() {
  // Sample data for charts
  const revenueData = [
    { name: "Jan", value: 2400 },
    { name: "Fev", value: 1398 },
    { name: "Mar", value: 9800 },
    { name: "Abr", value: 3908 },
    { name: "Mai", value: 4800 },
    { name: "Jun", value: 3800 },
    { name: "Jul", value: 4300 },
  ];

  const conversionData = [
    { name: "Jan", value: 240 },
    { name: "Fev", value: 139 },
    { name: "Mar", value: 980 },
    { name: "Abr", value: 390 },
    { name: "Mai", value: 480 },
    { name: "Jun", value: 380 },
    { name: "Jul", value: 430 },
  ];

  const channelData = [
    { name: "Google Ads", value: 35 },
    { name: "Meta Ads", value: 30 },
    { name: "Email Marketing", value: 15 },
    { name: "SEO Orgânico", value: 12 },
    { name: "TikTok Ads", value: 8 },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Receita Total</CardTitle>
          <DollarSign className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">R$ 45.231,89</div>
          <div className="flex items-center pt-1 text-xs text-green-500">
            <ArrowUpRight className="mr-1 h-3 w-3" />
            <span>+20.1% em relação ao último mês</span>
          </div>
          <div className="mt-4 h-[80px]">
            <AreaChart
              data={revenueData}
              categories={["value"]}
              index="name"
              colors={["#3b82f6"]}
              valueFormatter={(value) => `R$${value.toLocaleString()}`}
              showLegend={false}
              showXAxis={false}
              showYAxis={false}
              showGridLines={false}
              className="h-[80px]"
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Conversões</CardTitle>
          <ShoppingCart className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">6,218</div>
          <div className="flex items-center pt-1 text-xs text-green-500">
            <ArrowUpRight className="mr-1 h-3 w-3" />
            <span>+12.4% em relação ao último mês</span>
          </div>
          <div className="mt-4 h-[80px]">
            <BarChart
              data={conversionData}
              categories={["value"]}
              index="name"
              colors={["#3b82f6"]}
              valueFormatter={(value) => value.toString()}
              showLegend={false}
              showXAxis={false}
              showYAxis={false}
              showGridLines={false}
              className="h-[80px]"
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Taxa de Conversão</CardTitle>
          <TrendingUp className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">3.24%</div>
          <div className="flex items-center pt-1 text-xs text-red-500">
            <ArrowDownRight className="mr-1 h-3 w-3" />
            <span>-1.5% em relação ao último mês</span>
          </div>
          <div className="mt-4 h-[80px]">
            <AreaChart
              data={[
                { name: "Jan", value: 2.1 },
                { name: "Fev", value: 2.3 },
                { name: "Mar", value: 3.5 },
                { name: "Abr", value: 2.8 },
                { name: "Mai", value: 3.1 },
                { name: "Jun", value: 3.0 },
                { name: "Jul", value: 3.24 },
              ]}
              categories={["value"]}
              index="name"
              colors={["#3b82f6"]}
              valueFormatter={(value) => `${value}%`}
              showLegend={false}
              showXAxis={false}
              showYAxis={false}
              showGridLines={false}
              className="h-[80px]"
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Novos Clientes</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">1,429</div>
          <div className="flex items-center pt-1 text-xs text-green-500">
            <ArrowUpRight className="mr-1 h-3 w-3" />
            <span>+8.2% em relação ao último mês</span>
          </div>
          <div className="mt-4 h-[80px]">
            <AreaChart
              data={[
                { name: "Jan", value: 890 },
                { name: "Fev", value: 950 },
                { name: "Mar", value: 1100 },
                { name: "Abr", value: 1250 },
                { name: "Mai", value: 1320 },
                { name: "Jun", value: 1280 },
                { name: "Jul", value: 1429 },
              ]}
              categories={["value"]}
              index="name"
              colors={["#3b82f6"]}
              valueFormatter={(value) => value.toString()}
              showLegend={false}
              showXAxis={false}
              showYAxis={false}
              showGridLines={false}
              className="h-[80px]"
            />
          </div>
        </CardContent>
      </Card>

      <Card className="col-span-2">
        <CardHeader>
          <CardTitle>Desempenho por Canal</CardTitle>
          <CardDescription>
            Distribuição de conversões por canal de marketing
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="chart">
            <TabsList className="mb-4">
              <TabsTrigger value="chart">Gráfico</TabsTrigger>
              <TabsTrigger value="table">Tabela</TabsTrigger>
            </TabsList>
            <TabsContent value="chart" className="h-[300px]">
              <BarChart
                data={channelData}
                categories={["value"]}
                index="name"
                colors={["#3b82f6"]}
                valueFormatter={(value) => `${value}%`}
                className="h-[300px]"
              />
            </TabsContent>
            <TabsContent value="table">
              <div className="mt-2">
                <BarList
                  data={channelData.map(item => ({
                    name: item.name,
                    value: item.value,
                    color: "#3b82f6"
                  }))}
                  valueFormatter={(value) => `${value}%`}
                />
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
      
      <Card className="col-span-2">
        <CardHeader>
          <CardTitle>Previsão de Compra</CardTitle>
          <CardDescription>
            Clientes com maior propensão de compra nos próximos 30 dias
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-3 text-sm font-medium">
              <div>Nome</div>
              <div>Probabilidade</div>
              <div>Valor Estimado</div>
            </div>
            {[
              { id: 1, name: "Carlos Silva", email: "carlos@email.com", score: 92, value: "R$ 849,00" },
              { id: 2, name: "Ana Beatriz", email: "ana@email.com", score: 87, value: "R$ 1.320,00" },
              { id: 3, name: "Pedro Gomes", email: "pedro@email.com", score: 83, value: "R$ 567,00" },
              { id: 4, name: "Luíza Ferreira", email: "luiza@email.com", score: 78, value: "R$ 741,00" },
              { id: 5, name: "Felipe Santos", email: "felipe@email.com", score: 75, value: "R$ 932,00" }
            ].map((item) => (
              <div key={item.id} className="grid grid-cols-3 items-center py-3 border-b text-sm last:border-0">
                <div>
                  <div>{item.name}</div>
                  <div className="text-xs text-muted-foreground">{item.email}</div>
                </div>
                <div>
                  <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary" 
                      style={{ width: `${item.score}%` }}
                    />
                  </div>
                  <div className="text-xs mt-1">{item.score}%</div>
                </div>
                <div>{item.value}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
