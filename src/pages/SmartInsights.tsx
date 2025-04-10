
import React from "react";
import { Helmet } from "react-helmet";
import { PageHeader } from "@/components/insights/PageHeader";
import { InsightsSummary } from "@/components/insights/InsightsSummary";
import { RecentInsightsPanel } from "@/components/insights/RecentInsightsPanel";
import { InsightDistributionChart } from "@/components/insights/InsightDistributionChart";

const SmartInsights = () => {
  return (
    <>
      <Helmet>
        <title>Smart Insights - Twiggy.ai</title>
      </Helmet>
      
      <div className="space-y-6">
        <PageHeader />
        <InsightsSummary />
        
        <div className="grid gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <RecentInsightsPanel />
          </div>
          
          <div className="h-[500px]">
            <InsightDistributionChart />
          </div>
        </div>
      </div>
    </>
  );
};

export default SmartInsights;
