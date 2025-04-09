
import React from "react";
import * as RechartsPrimitive from "recharts";
import { NeoChartContainer } from "../neo-chart";

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
    <NeoChartContainer className={className}>
      <RechartsPrimitive.BarChart 
        data={sortedData} 
        layout="vertical" 
        margin={{ top: 20, right: 30, left: 60, bottom: 20 }}
      >
        <RechartsPrimitive.CartesianGrid 
          strokeDasharray="3 3" 
          horizontal={true} 
          vertical={false}
          className="stroke-muted-foreground/20"
        />
        <RechartsPrimitive.XAxis 
          type="number"
          className="text-xs text-muted-foreground"
          tick={{ fontSize: 12 }}
          tickLine={false}
          axisLine={false}
        />
        <RechartsPrimitive.YAxis 
          dataKey={index} 
          type="category" 
          axisLine={false} 
          tickLine={false}
          className="text-xs text-muted-foreground"
          tick={{ fontSize: 12 }}
        />
        <RechartsPrimitive.Tooltip
          content={({ active, payload, label }) => {
            if (active && payload && payload.length) {
              return (
                <div className="rounded-lg border bg-background/95 p-2 shadow-md backdrop-blur-sm neo-card">
                  <div className="font-medium">{label}</div>
                  <div className="mt-1 flex items-center gap-2 text-sm">
                    <div
                      className="h-2 w-2 rounded-full"
                      style={{ backgroundColor: payload[0].color }}
                    />
                    <span className="text-muted-foreground">
                      {payload[0].name}:
                    </span>
                    <span className="font-medium">
                      {valueFormatter(payload[0].value)}
                    </span>
                  </div>
                </div>
              );
            }
            return null;
          }}
        />
        <RechartsPrimitive.Bar dataKey={category} radius={[0, 4, 4, 0]} className="hover:opacity-80 transition-opacity duration-300">
          {sortedData.map((entry, index) => (
            <RechartsPrimitive.Cell 
              key={`cell-${index}`} 
              fill={colors[index % colors.length]} 
            />
          ))}
        </RechartsPrimitive.Bar>
      </RechartsPrimitive.BarChart>
    </NeoChartContainer>
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
    <NeoChartContainer className={className}>
      <RechartsPrimitive.ScatterChart margin={{ top: 20, right: 20, left: 20, bottom: 20 }}>
        <RechartsPrimitive.CartesianGrid 
          strokeDasharray="3 3"
          className="stroke-muted-foreground/20"
        />
        <RechartsPrimitive.XAxis 
          dataKey={xAxis} 
          name={xAxis}
          className="text-xs text-muted-foreground"
          tick={{ fontSize: 12 }}
          tickLine={false}
          axisLine={false}
        />
        <RechartsPrimitive.YAxis 
          dataKey={yAxis} 
          name={yAxis}
          className="text-xs text-muted-foreground"
          tick={{ fontSize: 12 }}
          tickLine={false}
          axisLine={false}
        />
        <RechartsPrimitive.Tooltip 
          formatter={valueFormatter}
          cursor={{ strokeDasharray: '3 3' }}
          content={({ active, payload }) => {
            if (active && payload && payload.length) {
              const data = payload[0].payload;
              return (
                <div className="rounded-lg border bg-background/95 p-2 shadow-md backdrop-blur-sm neo-card">
                  <div className="font-medium">{name}</div>
                  <div className="mt-1 space-y-1">
                    <div className="flex items-center gap-1 text-sm">
                      <span className="text-muted-foreground">{xAxis}: </span>
                      <span className="font-medium">
                        {valueFormatter(data[xAxis])}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-sm">
                      <span className="text-muted-foreground">{yAxis}: </span>
                      <span className="font-medium">
                        {valueFormatter(data[yAxis])}
                      </span>
                    </div>
                    {zAxis && (
                      <div className="flex items-center gap-1 text-sm">
                        <span className="text-muted-foreground">{zAxis}: </span>
                        <span className="font-medium">
                          {valueFormatter(data[zAxis])}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              );
            }
            return null;
          }}
        />
        <RechartsPrimitive.Scatter
          name={name}
          data={data}
          fill={color}
          shape="circle"
          className="hover:opacity-80 transition-opacity duration-300"
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
    </NeoChartContainer>
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
    <NeoChartContainer className={className}>
      <RechartsPrimitive.ResponsiveContainer width="100%" height="100%">
        <RechartsPrimitive.Treemap
          data={data}
          dataKey={dataKey}
          nameKey={nameKey}
          aspectRatio={4/3}
          stroke="#fff"
          fill="#8884d8"
          animationDuration={500}
          className="overflow-hidden rounded-lg"
        >
          {data.map((entry, index) => (
            <RechartsPrimitive.Cell 
              key={`cell-${index}`} 
              fill={colors[index % colors.length]} 
              className="hover:opacity-80 transition-opacity duration-300"
            />
          ))}
          <RechartsPrimitive.Tooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                const data = payload[0].payload;
                return (
                  <div className="rounded-lg border bg-background/95 p-2 shadow-md backdrop-blur-sm neo-card">
                    <div className="font-medium">{data[nameKey]}</div>
                    <div className="mt-1 flex items-center gap-1 text-sm">
                      <span className="text-muted-foreground">Valor: </span>
                      <span className="font-medium">
                        {valueFormatter(data[dataKey])}
                      </span>
                    </div>
                  </div>
                );
              }
              return null;
            }}
          />
        </RechartsPrimitive.Treemap>
      </RechartsPrimitive.ResponsiveContainer>
    </NeoChartContainer>
  );
};
