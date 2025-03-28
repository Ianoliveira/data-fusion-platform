
import { Helmet } from "react-helmet";
import { IntegrationsList } from "@/components/dashboard/IntegrationsList";
import { RecentInsights } from "@/components/dashboard/RecentInsights";
import { MetricsOverview } from "@/components/dashboard/MetricsOverview";
import { NaturalQuerySection } from "@/components/dashboard/NaturalQuerySection";
import { activeIntegrations, recentInsights } from "@/data/mockData";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Twiggy.ai - Customer Data Platform</title>
      </Helmet>
      <div className="space-y-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Visão geral da sua plataforma de dados e insights para decisões estratégicas.
          </p>
        </div>

        <MetricsOverview />

        <div className="grid gap-6 md:grid-cols-2">
          <IntegrationsList integrations={activeIntegrations} />
          <RecentInsights insights={recentInsights} />
        </div>

        <NaturalQuerySection />
      </div>
    </>
  );
};

export default Index;
