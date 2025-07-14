
import React from "react";
import { Helmet } from "react-helmet";
import { PageHeader } from "@/components/insights/PageHeader";
import { InsightsSummary } from "@/components/insights/InsightsSummary";
import { RecentInsightsPanel } from "@/components/insights/RecentInsightsPanel";
import { InsightDistributionChart } from "@/components/insights/InsightDistributionChart";
import { useInsights } from "@/hooks/useSupabaseData";
import { Skeleton } from "@/components/ui/skeleton";

const SmartInsights = () => {
  const { data: insights, isLoading, error } = useInsights();

  if (isLoading) {
    return (
      <>
        <Helmet>
          <title>Smart Insights - DataFusion</title>
        </Helmet>
        
        <div className="space-y-6">
          <PageHeader />
          <div className="grid gap-4 md:grid-cols-4">
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} className="h-24 w-full" />
            ))}
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="md:col-span-2">
              <Skeleton className="h-96 w-full" />
            </div>
            <div className="h-[500px]">
              <Skeleton className="h-full w-full" />
            </div>
          </div>
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Helmet>
          <title>Smart Insights - DataFusion</title>
        </Helmet>
        
        <div className="space-y-6">
          <PageHeader />
          <div className="text-center py-8">
            <p className="text-muted-foreground">
              Erro ao carregar insights. Tente novamente mais tarde.
            </p>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Smart Insights - DataFusion</title>
      </Helmet>
      
      <div className="space-y-6">
        <PageHeader />
        <InsightsSummary insights={insights || []} />
        
        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <RecentInsightsPanel insights={insights || []} />
          </div>
          
          <div className="h-[500px]">
            <InsightDistributionChart insights={insights || []} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SmartInsights;
