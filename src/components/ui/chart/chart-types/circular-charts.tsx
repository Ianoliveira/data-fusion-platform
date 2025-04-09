
import React from "react";
import * as RechartsPrimitive from "recharts";
import { NeoChartContainer } from "../neo-chart";

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

export const GaugeChart: React.FC<{
  value: number;
  min?: number;
  max?: number;
  thresholds?: { value: number; color: string }[];
  label?: string;
  valueFormatter?: (value: number) => string;
  className?: string;
}> = ({
  value,
  min = 0,
  max = 100,
  thresholds = [
    { value: 25, color: "#ef4444" },
    { value: 75, color: "#f59e0b" },
    { value: 100, color: "#10b981" },
  ],
  label,
  valueFormatter = (value) => `${value}%`,
  className,
}) => {
  // Get color based on value and thresholds
  const getColor = (value: number) => {
    const threshold = thresholds
      .slice()
      .sort((a, b) => a.value - b.value)
      .find((t) => value <= t.value);
    return threshold ? threshold.color : thresholds[thresholds.length - 1].color;
  };

  const normalizedValue = Math.max(min, Math.min(max, value));
  const percentage = ((normalizedValue - min) / (max - min)) * 100;
  const color = getColor(percentage);

  // Create data for gauge
  const data = [
    { name: "value", value: percentage },
    { name: "empty", value: 100 - percentage },
  ];

  return (
    <NeoChartContainer className={className}>
      <div className="flex flex-col items-center justify-center h-full">
        <RechartsPrimitive.PieChart margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
          <RechartsPrimitive.Pie
            data={data}
            dataKey="value"
            innerRadius={70}
            outerRadius={80}
            startAngle={180}
            endAngle={0}
            cy="80%"
          >
            <RechartsPrimitive.Cell key="value" fill={color} />
            <RechartsPrimitive.Cell key="empty" fill="#e5e7eb" className="dark:fill-muted/20" />
          </RechartsPrimitive.Pie>
        </RechartsPrimitive.PieChart>
        <div className="absolute flex flex-col items-center mt-[-50px]">
          <div className="text-3xl font-bold">{valueFormatter(value)}</div>
          {label && <div className="text-sm text-muted-foreground mt-1">{label}</div>}
        </div>
      </div>
    </NeoChartContainer>
  );
};
