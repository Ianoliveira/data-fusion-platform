
import React from "react";
import * as RechartsPrimitive from "recharts";
import { ChartContainer } from "../chart-base";

interface CustomChartProps {
  data: any[];
  index?: string;
  className?: string;
  valueFormatter?: (value: any) => string;
  colors?: string[];
  showLegend?: boolean;
  showXAxis?: boolean;
  showYAxis?: boolean;
  showGridLines?: boolean;
}

interface AreaChartProps extends CustomChartProps {
  categories: string[];
}

export const AreaChart: React.FC<AreaChartProps> = ({
  data,
  categories,
  index = "name",
  colors = ["#3b82f6"],
  valueFormatter = (value) => value.toString(),
  className,
  showLegend = true,
  showXAxis = true,
  showYAxis = true,
  showGridLines = true,
}) => {
  return (
    <ChartContainer config={{}} className={className}>
      <RechartsPrimitive.AreaChart data={data} margin={{ top: 10, right: 30, left: 20, bottom: 20 }}>
        {showGridLines && <RechartsPrimitive.CartesianGrid strokeDasharray="3 3" />}
        {showXAxis && <RechartsPrimitive.XAxis dataKey={index} />}
        {showYAxis && <RechartsPrimitive.YAxis />}
        <RechartsPrimitive.Tooltip formatter={valueFormatter} />
        {showLegend && <RechartsPrimitive.Legend wrapperStyle={{ paddingTop: "10px" }} />}
        {categories.map((category, i) => (
          <RechartsPrimitive.Area
            key={category}
            type="monotone"
            dataKey={category}
            stroke={colors[i % colors.length]}
            fill={colors[i % colors.length]}
            fillOpacity={0.2}
          />
        ))}
      </RechartsPrimitive.AreaChart>
    </ChartContainer>
  );
};

interface BarChartProps extends CustomChartProps {
  categories: string[];
}

export const BarChart: React.FC<BarChartProps> = ({
  data,
  categories,
  index = "name",
  colors = ["#3b82f6"],
  valueFormatter = (value) => value.toString(),
  className,
  showLegend = true,
  showXAxis = true,
  showYAxis = true,
  showGridLines = true,
}) => {
  return (
    <ChartContainer config={{}} className={className}>
      <RechartsPrimitive.BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
        {showGridLines && <RechartsPrimitive.CartesianGrid strokeDasharray="3 3" vertical={false} />}
        {showXAxis && <RechartsPrimitive.XAxis dataKey={index} axisLine={false} tickLine={false} />}
        {showYAxis && <RechartsPrimitive.YAxis axisLine={false} tickLine={false} />}
        <RechartsPrimitive.Tooltip formatter={valueFormatter} />
        {showLegend && <RechartsPrimitive.Legend wrapperStyle={{ paddingTop: "10px" }} />}
        {categories.map((category, i) => (
          <RechartsPrimitive.Bar
            key={category}
            dataKey={category}
            fill={colors[i % colors.length]}
            radius={[4, 4, 0, 0]}
            barSize={40}
          />
        ))}
      </RechartsPrimitive.BarChart>
    </ChartContainer>
  );
};

interface LineChartProps extends CustomChartProps {
  categories: string[];
}

export const LineChart: React.FC<LineChartProps> = ({
  data,
  categories,
  index = "name",
  colors = ["#3b82f6"],
  valueFormatter = (value) => value.toString(),
  className,
  showLegend = true,
  showXAxis = true,
  showYAxis = true,
  showGridLines = true,
}) => {
  return (
    <ChartContainer config={{}} className={className}>
      <RechartsPrimitive.LineChart data={data} margin={{ top: 10, right: 30, left: 20, bottom: 20 }}>
        {showGridLines && <RechartsPrimitive.CartesianGrid strokeDasharray="3 3" />}
        {showXAxis && <RechartsPrimitive.XAxis dataKey={index} />}
        {showYAxis && <RechartsPrimitive.YAxis />}
        <RechartsPrimitive.Tooltip formatter={valueFormatter} />
        {showLegend && <RechartsPrimitive.Legend wrapperStyle={{ paddingTop: "10px" }} />}
        {categories.map((category, i) => (
          <RechartsPrimitive.Line
            key={category}
            type="monotone"
            dataKey={category}
            stroke={colors[i % colors.length]}
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
        ))}
      </RechartsPrimitive.LineChart>
    </ChartContainer>
  );
};

// Export the shared interface so it can be used in other files
export interface BarListItemProps {
  name: string;
  value: number;
  color?: string;
}

export const BarList: React.FC<{
  data: BarListItemProps[];
  valueFormatter?: (value: number) => string;
}> = ({ data, valueFormatter = (value) => value.toString() }) => {
  const maxValue = Math.max(...data.map(item => item.value));
  
  return (
    <div className="space-y-3">
      {data.map((item, i) => (
        <div key={i} className="space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">{item.name}</span>
            <span className="text-sm text-muted-foreground">{valueFormatter(item.value)}</span>
          </div>
          <div className="h-2 w-full rounded-full bg-muted">
            <div
              className="h-full rounded-full"
              style={{
                width: `${(item.value / maxValue) * 100}%`,
                backgroundColor: item.color || '#3b82f6'
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
