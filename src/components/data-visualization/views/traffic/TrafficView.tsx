
import React from "react";
import { TrafficChartSection } from "./TrafficChartSection";
import { TrafficSourcesSection } from "./TrafficSourcesSection";
import { TrafficLocationSection } from "./TrafficLocationSection";

interface TrafficViewProps {
  data: {
    trafficData: any[];
    trafficByDayData: any[];
    acquisitionData: any[];
    userEngagementData: any[];
    countryData: any[];
    userBehaviorData: any[];
  }
}

export const TrafficView: React.FC<TrafficViewProps> = ({ data }) => {
  const { 
    trafficData, 
    trafficByDayData,
    acquisitionData, 
    userEngagementData, 
    countryData,
    userBehaviorData
  } = data;

  return (
    <div className="space-y-6">
      {/* Main Traffic Chart Section */}
      <TrafficChartSection 
        trafficData={trafficData} 
        trafficByDayData={trafficByDayData} 
      />
      
      {/* Traffic Sources and Engagement Section */}
      <TrafficSourcesSection 
        acquisitionData={acquisitionData}
        userEngagementData={userEngagementData}
      />
      
      {/* Traffic Location and Behavior Section */}
      <TrafficLocationSection 
        countryData={countryData}
        userBehaviorData={userBehaviorData}
      />
    </div>
  );
};
