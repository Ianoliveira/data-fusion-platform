
import React, { createContext, useContext } from "react";
import * as trafficData from '@/data/mock/traffic-data';
import * as deviceData from '@/data/mock/device-data';
import * as conversionData from '@/data/mock/conversion-data';
import * as pagesData from '@/data/mock/pages-data';
import * as customerData from '@/data/mock/customer-data';
import * as performanceData from '@/data/mock/performance-data';
import * as trendsData from '@/data/mock/trends-data';

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
  const data = {
    ...trafficData,
    ...deviceData,
    ...conversionData,
    ...pagesData,
    ...customerData,
    ...performanceData,
    ...trendsData,
  };

  return (
    <DataContext.Provider value={{ data }}>
      {children}
    </DataContext.Provider>
  );
};

