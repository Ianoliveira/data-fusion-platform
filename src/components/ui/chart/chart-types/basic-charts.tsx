
import React from "react";
import * as RechartsPrimitive from "recharts";
import { ChartContainer } from "../chart-base";
import { NeoChartContainer, EnhancedResponsiveContainer } from "../neo-chart";

export interface BarListItemProps {
  name: string;
  value: number;
  href?: string;
  color?: string;
  className?: string;
}

export const BarList: React.FC<{
  data: BarListItemProps[];
  valueFormatter?: (value: number) => string;
  className?: string;
}> = ({
  data,
  valueFormatter = (value) => value.toString(),
  className,
}) => {
  const total = data.reduce((acc, item) => acc + item.value, 0);

  return (
    <div className={className}>
      <ul className="space-y-2.5">
        {data.map((item, index) => (
          <li key={index} className="group">
            <div className="flex items-center gap-2.5">
              <div className="w-full flex-1 space-y-1.5">
                <div className="flex justify-between gap-2 text-sm">
                  <p className="font-medium">{item.name}</p>
                  <p className="text-muted-foreground transition-colors group-hover:text-foreground">
                    {valueFormatter(item.value)}
                  </p>
                </div>
                <div className="overflow-hidden rounded-full bg-secondary h-2 shadow-neo-inset-light dark:shadow-neo-inset-dark">
                  <div
                    className="h-full rounded-full transition-all duration-300"
                    style={{
                      width: `${(item.value / total) * 100}%`,
                      backgroundColor: item.color,
                    }}
                  />
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const AreaChart: React.FC<{
  data: any[];
  categories: string[];
  index: string;
  colors?: string[];
  valueFormatter?: (value: any) => string;
  showLegend?: boolean;
  showGridLines?: boolean;
  className?: string;
}> = ({
  data,
  categories,
  index,
  colors = ["#3b82f6"],
  valueFormatter = (value) => value.toString(),
  showLegend = false,
  showGridLines = false,
  className,
}) => {
  return (
    <NeoChartContainer className={className}>
      <RechartsPrimitive.AreaChart data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        {showGridLines && (
          <RechartsPrimitive.CartesianGrid 
            strokeDasharray="3 3" 
            className="stroke-muted-foreground/20"
            vertical={false}
          />
        )}
        <RechartsPrimitive.XAxis 
          dataKey={index}
          className="text-xs text-muted-foreground"
          tick={{ fontSize: 12 }}
          tickLine={false}
          axisLine={false}
        />
        <RechartsPrimitive.YAxis 
          className="text-xs text-muted-foreground" 
          tick={{ fontSize: 12 }}
          tickLine={false}
          axisLine={false}
          tickFormatter={valueFormatter}
        />
        <RechartsPrimitive.Tooltip
          content={({ active, payload, label }) => {
            if (active && payload && payload.length) {
              return (
                <div className="rounded-lg border bg-background/95 p-2 shadow-md backdrop-blur-sm neo-card">
                  <div className="font-medium">{label}</div>
                  <div className="mt-1 space-y-0.5">
                    {payload.map((item: any, index: number) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <div
                          className="h-2 w-2 rounded-full"
                          style={{ backgroundColor: item.color }}
                        />
                        <span className="text-muted-foreground">
                          {item.name}:
                        </span>
                        <span className="font-medium">
                          {valueFormatter(item.value)}
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
        {showLegend && (
          <RechartsPrimitive.Legend
            verticalAlign="top"
            height={36}
            content={({ payload }) => {
              if (payload && payload.length) {
                return (
                  <div className="flex items-center justify-center gap-4">
                    {payload.map((entry: any, index: number) => (
                      <div
                        key={`legend-${index}`}
                        className="flex items-center gap-1 text-sm"
                      >
                        <div
                          className="h-2 w-2 rounded-full"
                          style={{ backgroundColor: entry.color }}
                        />
                        <span>{entry.value}</span>
                      </div>
                    ))}
                  </div>
                );
              }
              return null;
            }}
          />
        )}
        {categories.map((category, index) => (
          <RechartsPrimitive.Area
            key={category}
            type="monotone"
            dataKey={category}
            fill={colors[index % colors.length] + "40"}
            stroke={colors[index % colors.length]}
            strokeWidth={2}
          />
        ))}
      </RechartsPrimitive.AreaChart>
    </NeoChartContainer>
  );
};

export const BarChart: React.FC<{
  data: any[];
  categories: string[];
  index: string;
  colors?: string[];
  valueFormatter?: (value: any) => string;
  showLegend?: boolean;
  layout?: "vertical" | "horizontal";
  showGridLines?: boolean;
  className?: string;
}> = ({
  data,
  categories,
  index,
  colors = ["#3b82f6"],
  valueFormatter = (value) => value.toString(),
  showLegend = false,
  layout = "horizontal",
  showGridLines = false,
  className,
}) => {
  const isVertical = layout === "vertical";
  
  return (
    <NeoChartContainer className={className}>
      <RechartsPrimitive.BarChart
        data={data}
        layout={layout}
        barSize={30}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      >
        {showGridLines && (
          <RechartsPrimitive.CartesianGrid 
            strokeDasharray="3 3" 
            vertical={!isVertical} 
            horizontal={isVertical}
            className="stroke-muted-foreground/20" 
          />
        )}
        {isVertical ? (
          <>
            <RechartsPrimitive.XAxis 
              type="number" 
              className="text-xs text-muted-foreground" 
              tick={{ fontSize: 12 }}
              tickLine={false}
              axisLine={false}
              tickFormatter={valueFormatter}
            />
            <RechartsPrimitive.YAxis 
              type="category" 
              dataKey={index} 
              className="text-xs text-muted-foreground"
              tick={{ fontSize: 12 }}
              tickLine={false} 
              axisLine={false}
            />
          </>
        ) : (
          <>
            <RechartsPrimitive.XAxis 
              dataKey={index} 
              className="text-xs text-muted-foreground" 
              tick={{ fontSize: 12 }}
              tickLine={false}
              axisLine={false}
            />
            <RechartsPrimitive.YAxis 
              className="text-xs text-muted-foreground"
              tick={{ fontSize: 12 }}
              tickLine={false}
              axisLine={false}
              tickFormatter={valueFormatter}
            />
          </>
        )}
        <RechartsPrimitive.Tooltip
          content={({ active, payload, label }) => {
            if (active && payload && payload.length) {
              return (
                <div className="rounded-lg border bg-background/95 p-2 shadow-md backdrop-blur-sm neo-card">
                  <div className="font-medium">{label}</div>
                  <div className="mt-1 space-y-0.5">
                    {payload.map((item: any, index: number) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <div
                          className="h-2 w-2 rounded-full"
                          style={{ backgroundColor: item.color }}
                        />
                        <span className="text-muted-foreground">
                          {item.name}:
                        </span>
                        <span className="font-medium">
                          {valueFormatter(item.value)}
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
        {showLegend && (
          <RechartsPrimitive.Legend
            verticalAlign="top"
            height={36}
            content={({ payload }) => {
              if (payload && payload.length) {
                return (
                  <div className="flex items-center justify-center gap-4">
                    {payload.map((entry: any, index: number) => (
                      <div
                        key={`legend-${index}`}
                        className="flex items-center gap-1 text-sm"
                      >
                        <div
                          className="h-2 w-2 rounded-full"
                          style={{ backgroundColor: entry.color }}
                        />
                        <span>{entry.value}</span>
                      </div>
                    ))}
                  </div>
                );
              }
              return null;
            }}
          />
        )}
        {categories.map((category, index) => (
          <RechartsPrimitive.Bar
            key={category}
            dataKey={category}
            fill={colors[index % colors.length]}
            radius={[4, 4, 0, 0]}
            className="hover:opacity-80 transition-opacity duration-300"
          />
        ))}
      </RechartsPrimitive.BarChart>
    </NeoChartContainer>
  );
};

export const LineChart: React.FC<{
  data: any[];
  categories: string[];
  index: string;
  colors?: string[];
  valueFormatter?: (value: any) => string;
  showLegend?: boolean;
  showGridLines?: boolean;
  className?: string;
}> = ({
  data,
  categories,
  index,
  colors = ["#3b82f6"],
  valueFormatter = (value) => value.toString(),
  showLegend = false,
  showGridLines = false,
  className,
}) => {
  return (
    <NeoChartContainer className={className}>
      <RechartsPrimitive.LineChart
        data={data}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      >
        {showGridLines && (
          <RechartsPrimitive.CartesianGrid 
            strokeDasharray="3 3" 
            className="stroke-muted-foreground/20"
            vertical={false}
          />
        )}
        <RechartsPrimitive.XAxis 
          dataKey={index} 
          className="text-xs text-muted-foreground"
          tick={{ fontSize: 12 }}
          tickLine={false}
          axisLine={false}
        />
        <RechartsPrimitive.YAxis 
          className="text-xs text-muted-foreground"
          tick={{ fontSize: 12 }}
          tickLine={false}
          axisLine={false}
          tickFormatter={valueFormatter}
        />
        <RechartsPrimitive.Tooltip
          content={({ active, payload, label }) => {
            if (active && payload && payload.length) {
              return (
                <div className="rounded-lg border bg-background/95 p-2 shadow-md backdrop-blur-sm">
                  <div className="font-medium">{label}</div>
                  <div className="mt-1 space-y-0.5">
                    {payload.map((item: any, index: number) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <div
                          className="h-2 w-2 rounded-full"
                          style={{ backgroundColor: item.color }}
                        />
                        <span className="text-muted-foreground">
                          {item.name}:
                        </span>
                        <span className="font-medium">
                          {valueFormatter(item.value)}
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
        {showLegend && (
          <RechartsPrimitive.Legend
            verticalAlign="top"
            height={36}
            content={({ payload }) => {
              if (payload && payload.length) {
                return (
                  <div className="flex items-center justify-center gap-4">
                    {payload.map((entry: any, index: number) => (
                      <div
                        key={`legend-${index}`}
                        className="flex items-center gap-1 text-sm"
                      >
                        <div
                          className="h-2 w-2 rounded-full"
                          style={{ backgroundColor: entry.color }}
                        />
                        <span>{entry.value}</span>
                      </div>
                    ))}
                  </div>
                );
              }
              return null;
            }}
          />
        )}
        {categories.map((category, index) => (
          <RechartsPrimitive.Line
            key={category}
            type="monotone"
            dataKey={category}
            stroke={colors[index % colors.length]}
            activeDot={{ r: 6 }}
            strokeWidth={2}
            dot={{ r: 4, fill: colors[index % colors.length], strokeWidth: 0 }}
          />
        ))}
      </RechartsPrimitive.LineChart>
    </NeoChartContainer>
  );
};
