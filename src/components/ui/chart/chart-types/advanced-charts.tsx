
import React from "react";
import * as RechartsPrimitive from "recharts";
import { ChartContainer } from "../chart-base";

export const FunnelChart: React.FC<{
  data: any[];
  category: string;
  index?: string;
  colors?: string[];
  valueFormatter?: (value: any) => string;
  className?: string;
}> = ({
  data,
  category,
  index = "name",
  colors = ["#3b82f6", "#8b5cf6", "#f43f5e", "#10b981", "#f59e0b"],
  valueFormatter = (value) => value.toString(),
  className,
}) => {
  // Sort data in descending order for funnel visualization
  const sortedData = [...data].sort((a, b) => b[category] - a[category]);
  
  return (
    <ChartContainer config={{}} className={className}>
      <RechartsPrimitive.BarChart 
        data={sortedData} 
        layout="vertical" 
        margin={{ top: 20, right: 30, left: 60, bottom: 20 }}
      >
        <RechartsPrimitive.CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
        <RechartsPrimitive.XAxis type="number" />
        <RechartsPrimitive.YAxis dataKey={index} type="category" axisLine={false} tickLine={false} />
        <RechartsPrimitive.Tooltip formatter={valueFormatter} />
        <RechartsPrimitive.Bar dataKey={category} radius={[0, 4, 4, 0]}>
          {sortedData.map((entry, index) => (
            <RechartsPrimitive.Cell 
              key={`cell-${index}`} 
              fill={colors[index % colors.length]} 
            />
          ))}
        </RechartsPrimitive.Bar>
      </RechartsPrimitive.BarChart>
    </ChartContainer>
  );
};

export const ScatterChart: React.FC<{
  data: any[];
  xAxis: string;
  yAxis: string;
  zAxis?: string;
  name?: string;
  color?: string;
  valueFormatter?: (value: any) => string;
  className?: string;
}> = ({
  data,
  xAxis,
  yAxis,
  zAxis,
  name = "",
  color = "#3b82f6",
  valueFormatter = (value) => value.toString(),
  className,
}) => {
  return (
    <ChartContainer config={{}} className={className}>
      <RechartsPrimitive.ScatterChart margin={{ top: 20, right: 20, left: 20, bottom: 20 }}>
        <RechartsPrimitive.CartesianGrid strokeDasharray="3 3" />
        <RechartsPrimitive.XAxis dataKey={xAxis} name={xAxis} />
        <RechartsPrimitive.YAxis dataKey={yAxis} name={yAxis} />
        <RechartsPrimitive.Tooltip 
          formatter={valueFormatter}
          cursor={{ strokeDasharray: '3 3' }}
        />
        <RechartsPrimitive.Scatter
          name={name}
          data={data}
          fill={color}
          shape="circle"
        >
          {zAxis && data.map((entry, index) => (
            <RechartsPrimitive.Cell 
              key={`cell-${index}`} 
              radius={entry[zAxis] / 5 + 2} // Dynamic size based on zAxis value
            />
          ))}
        </RechartsPrimitive.Scatter>
        <RechartsPrimitive.Legend />
      </RechartsPrimitive.ScatterChart>
    </ChartContainer>
  );
};

export const TreeMapChart: React.FC<{
  data: any[];
  dataKey: string;
  nameKey?: string;
  colors?: string[];
  valueFormatter?: (value: any) => string;
  className?: string;
}> = ({
  data,
  dataKey,
  nameKey = "name",
  colors = ["#3b82f6", "#8b5cf6", "#f43f5e", "#10b981", "#f59e0b"],
  valueFormatter = (value) => value.toString(),
  className,
}) => {
  return (
    <ChartContainer config={{}} className={className}>
      <RechartsPrimitive.Treemap
        data={data}
        dataKey={dataKey}
        nameKey={nameKey}
        aspectRatio={4/3}
        stroke="#fff"
        fill="#8884d8"
      >
        {data.map((entry, index) => (
          <RechartsPrimitive.Cell 
            key={`cell-${index}`} 
            fill={colors[index % colors.length]} 
          />
        ))}
        <RechartsPrimitive.Tooltip formatter={valueFormatter} />
      </RechartsPrimitive.Treemap>
    </ChartContainer>
  );
};
