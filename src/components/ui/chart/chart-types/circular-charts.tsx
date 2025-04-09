import React from "react";
import * as RechartsPrimitive from "recharts";
import { NeoChartContainer } from "../neo-chart";

export interface GaugeChartProps {
  value: number;
  min?: number;
  max?: number;
  thresholds?: { value: number; color: string; }[];
  label?: string;
  valueFormatter?: (value: number) => string;
  className?: string;
}

export const GaugeChart: React.FC<GaugeChartProps> = ({
  value,
  min = 0,
  max = 100,
  thresholds = [],
  label,
  valueFormatter = (value) => `${value}%`,
  className,
}) => {
  // If just a single color is provided through an old prop 'color', convert it to thresholds
  let chartThresholds = thresholds.length ? thresholds : [{ value: max, color: "#3b82f6" }];
  
  // Calculate percentage for the gauge
  const normalizedValue = ((value - min) / (max - min)) * 100;
  
  // Calculate the appropriate color based on thresholds
  const getColor = () => {
    for (const threshold of chartThresholds) {
      if (value <= threshold.value) {
        return threshold.color;
      }
    }
    return chartThresholds[chartThresholds.length - 1]?.color || "#3b82f6";
  };
  
  // Data for the gauge chart
  const data = [
    { name: "value", value: normalizedValue },
    { name: "empty", value: 100 - normalizedValue }
  ];
  
  return (
    <NeoChartContainer className={className}>
      <RechartsPrimitive.PieChart margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
        <RechartsPrimitive.Pie
          data={data}
          cx="50%"
          cy="50%"
          startAngle={180}
          endAngle={0}
          innerRadius="70%"
          outerRadius="100%"
          paddingAngle={0}
          dataKey="value"
        >
          <RechartsPrimitive.Cell key={`cell-0`} fill={getColor()} />
          <RechartsPrimitive.Cell key={`cell-1`} fill="rgba(0,0,0,0.05)" />
        </RechartsPrimitive.Pie>
        <RechartsPrimitive.Tooltip
          content={({ active, payload }) => {
            if (active && payload && payload.length && payload[0].name === "value") {
              return (
                <div className="rounded-lg border bg-background/95 p-2 shadow-md backdrop-blur-sm">
                  <span className="text-sm font-medium">
                    {valueFormatter(value)}
                  </span>
                </div>
              );
            }
            return null;
          }}
        />
        <RechartsPrimitive.Text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          className="fill-foreground text-lg font-semibold"
        >
          {valueFormatter(value)}
        </RechartsPrimitive.Text>
        {label && (
          <RechartsPrimitive.Text
            x="50%"
            y="65%"
            textAnchor="middle"
            dominantBaseline="middle"
            className="fill-muted-foreground text-xs"
          >
            {label}
          </RechartsPrimitive.Text>
        )}
      </RechartsPrimitive.PieChart>
    </NeoChartContainer>
  );
};

export const PieChart: React.FC<{
  data: any[];
  category: string;
  index?: string;
  colors?: string[];
  valueFormatter?: (value: any) => string;
  showLegend?: boolean;
  donut?: boolean;
  className?: string;
}> = ({
  data,
  category,
  index = "name",
  colors = ["#3b82f6", "#8b5cf6", "#f43f5e", "#10b981", "#f59e0b"],
  valueFormatter = (value) => value.toString(),
  showLegend = false,
  donut = false,
  className,
}) => {
  return (
    <NeoChartContainer className={className}>
      <RechartsPrimitive.PieChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <RechartsPrimitive.Pie
          data={data}
          dataKey={category}
          nameKey={index}
          innerRadius={donut ? "60%" : "0"}
          outerRadius={donut ? "80%" : "70%"}
          paddingAngle={2}
          strokeOpacity={0.2}
          stroke="var(--background)"
          strokeWidth={1}
        >
          {data.map((_, index) => (
            <RechartsPrimitive.Cell
              key={`cell-${index}`}
              fill={colors[index % colors.length]}
              className="hover:opacity-80 transition-opacity duration-300"
            />
          ))}
        </RechartsPrimitive.Pie>
        <RechartsPrimitive.Tooltip
          content={({ active, payload }) => {
            if (active && payload && payload.length) {
              const data = payload[0];
              return (
                <div className="rounded-lg border bg-background/95 p-2 shadow-md backdrop-blur-sm neo-card">
                  <div className="flex items-center gap-2">
                    <div
                      className="h-2.5 w-2.5 rounded-full"
                      style={{ backgroundColor: data.payload.fill }}
                    />
                    <span className="font-medium">{data.name}</span>
                  </div>
                  <div className="mt-1">
                    <span className="text-muted-foreground">Valor: </span>
                    <span className="font-medium">{valueFormatter(data.value)}</span>
                  </div>
                </div>
              );
            }
            return null;
          }}
        />
        {showLegend && (
          <RechartsPrimitive.Legend
            layout="horizontal"
            verticalAlign="bottom"
            align="center"
            className="text-sm"
            content={({ payload }) => {
              if (payload && payload.length) {
                return (
                  <div className="flex flex-wrap justify-center gap-4 pt-4">
                    {payload.map((entry, index) => (
                      <div
                        key={`legend-${index}`}
                        className="flex items-center gap-1.5"
                      >
                        <div
                          className="h-3 w-3 rounded-full"
                          style={{ backgroundColor: entry.color }}
                        />
                        <span className="text-sm">{entry.value}</span>
                      </div>
                    ))}
                  </div>
                );
              }
              return null;
            }}
          />
        )}
      </RechartsPrimitive.PieChart>
    </NeoChartContainer>
  );
};

export const DonutChart: React.FC<{
  data: any[];
  category: string;
  index?: string;
  colors?: string[];
  valueFormatter?: (value: any) => string;
  showLegend?: boolean;
  className?: string;
}> = (props) => {
  return <PieChart {...props} donut={true} />;
};

export const RadarChart: React.FC<{
  data: any[];
  categories: string[];
  index: string;
  colors?: string[];
  valueFormatter?: (value: any) => string;
  className?: string;
}> = ({
  data,
  categories,
  index,
  colors = ["#3b82f6", "#8b5cf6", "#f43f5e"],
  valueFormatter = (value) => value.toString(),
  className,
}) => {
  return (
    <NeoChartContainer className={className}>
      <RechartsPrimitive.RadarChart
        data={data}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      >
        <RechartsPrimitive.PolarGrid className="stroke-muted-foreground/20" />
        <RechartsPrimitive.PolarAngleAxis
          dataKey={index}
          className="text-xs text-muted-foreground fill-foreground"
          tick={{ fontSize: 12 }}
        />
        <RechartsPrimitive.Tooltip
          content={({ active, payload }) => {
            if (active && payload && payload.length) {
              return (
                <div className="rounded-lg border bg-background/95 p-2 shadow-md backdrop-blur-sm neo-card">
                  <div className="font-medium">{payload[0]?.payload[index]}</div>
                  <div className="mt-1 space-y-0.5">
                    {payload.map((entry: any, idx: number) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <div
                          className="h-2 w-2 rounded-full"
                          style={{ backgroundColor: entry.color }}
                        />
                        <span className="text-muted-foreground">
                          {entry.name}:
                        </span>
                        <span className="font-medium">
                          {valueFormatter(entry.value)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            }
            return null;
          }}
        />
        <RechartsPrimitive.Legend
          verticalAlign="bottom"
          align="center"
          content={({ payload }) => {
            if (payload && payload.length) {
              return (
                <div className="flex justify-center gap-4 mt-4">
                  {payload.map((entry: any, idx: number) => (
                    <div
                      key={idx}
                      className="flex items-center gap-1.5"
                    >
                      <div
                        className="h-3 w-3 rounded-full"
                        style={{ backgroundColor: entry.color }}
                      />
                      <span className="text-sm">{entry.value}</span>
                    </div>
                  ))}
                </div>
              );
            }
            return null;
          }}
        />
        {categories.map((category, idx) => (
          <RechartsPrimitive.Radar
            key={category}
            name={category}
            dataKey={category}
            stroke={colors[idx % colors.length]}
            fill={colors[idx % colors.length] + "40"}
            className="transition-opacity duration-300"
          />
        ))}
      </RechartsPrimitive.RadarChart>
    </NeoChartContainer>
  );
};
