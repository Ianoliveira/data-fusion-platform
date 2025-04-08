
import React from "react";
import * as RechartsPrimitive from "recharts";
import { ChartContainer } from "../chart-base";

interface PieChartProps {
  data: any[];
  category: string;
  index?: string;
  colors?: string[];
  valueFormatter?: (value: any) => string;
  className?: string;
  showLegend?: boolean;
}

export const PieChart: React.FC<PieChartProps> = ({
  data,
  category,
  index = "name",
  colors = ["#3b82f6", "#8b5cf6", "#f43f5e", "#10b981", "#f59e0b"],
  valueFormatter = (value) => value.toString(),
  className,
  showLegend = true,
}) => {
  return (
    <ChartContainer config={{}} className={className}>
      <RechartsPrimitive.PieChart margin={{ top: 10, right: 10, bottom: 30, left: 10 }}>
        <RechartsPrimitive.Tooltip formatter={valueFormatter} />
        {showLegend && <RechartsPrimitive.Legend layout="horizontal" verticalAlign="bottom" align="center" />}
        <RechartsPrimitive.Pie
          data={data}
          dataKey={category}
          nameKey={index}
          cx="50%"
          cy="45%"
          outerRadius={80}
          label={(entry) => entry.name}
          labelLine={false}
        >
          {data.map((entry, i) => (
            <RechartsPrimitive.Cell
              key={`cell-${i}`}
              fill={colors[i % colors.length]}
              stroke="none"
            />
          ))}
        </RechartsPrimitive.Pie>
      </RechartsPrimitive.PieChart>
    </ChartContainer>
  );
};

export const DonutChart: React.FC<PieChartProps> = ({
  data,
  category,
  index = "name",
  colors = ["#3b82f6", "#8b5cf6", "#f43f5e", "#10b981", "#f59e0b"],
  valueFormatter = (value) => value.toString(),
  className,
  showLegend = true,
}) => {
  return (
    <ChartContainer config={{}} className={className}>
      <RechartsPrimitive.PieChart margin={{ top: 10, right: 10, bottom: 30, left: 10 }}>
        <RechartsPrimitive.Tooltip formatter={valueFormatter} />
        {showLegend && <RechartsPrimitive.Legend layout="horizontal" verticalAlign="bottom" align="center" />}
        <RechartsPrimitive.Pie
          data={data}
          dataKey={category}
          nameKey={index}
          cx="50%"
          cy="45%"
          innerRadius={60}
          outerRadius={80}
          label={false}
        >
          {data.map((entry, i) => (
            <RechartsPrimitive.Cell
              key={`cell-${i}`}
              fill={colors[i % colors.length]}
              stroke="none"
            />
          ))}
        </RechartsPrimitive.Pie>
      </RechartsPrimitive.PieChart>
    </ChartContainer>
  );
};

export const GaugeChart: React.FC<{
  value: number;
  min?: number;
  max?: number;
  color?: string;
  className?: string;
}> = ({
  value,
  min = 0,
  max = 100,
  color = "#3b82f6",
  className,
}) => {
  // Calculate the percentage for the gauge
  const percentage = Math.min(Math.max(((value - min) / (max - min)) * 100, 0), 100);
  
  return (
    <ChartContainer config={{}} className={className}>
      <RechartsPrimitive.PieChart margin={{ top: 10, right: 10, bottom: 10, left: 10 }}>
        <RechartsPrimitive.Pie
          data={[
            { name: 'Value', value: percentage },
            { name: 'Remaining', value: 100 - percentage }
          ]}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          startAngle={180}
          endAngle={0}
          innerRadius={60}
          outerRadius={80}
          paddingAngle={0}
          cornerRadius={0}
        >
          <RechartsPrimitive.Cell fill={color} />
          <RechartsPrimitive.Cell fill="#e6e6e6" />
        </RechartsPrimitive.Pie>
        <RechartsPrimitive.Text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          className="text-lg font-medium"
        >
          {value}
        </RechartsPrimitive.Text>
      </RechartsPrimitive.PieChart>
    </ChartContainer>
  );
};

export const RadarChart: React.FC<{
  data: any[];
  categories: string[];
  index?: string;
  colors?: string[];
  valueFormatter?: (value: any) => string;
  className?: string;
}> = ({
  data,
  categories,
  index = "name",
  colors = ["#3b82f6"],
  valueFormatter = (value) => value.toString(),
  className,
}) => {
  return (
    <ChartContainer config={{}} className={className}>
      <RechartsPrimitive.RadarChart data={data} margin={{ top: 20, right: 30, left: 30, bottom: 20 }}>
        <RechartsPrimitive.PolarGrid />
        <RechartsPrimitive.PolarAngleAxis dataKey={index} />
        <RechartsPrimitive.PolarRadiusAxis />
        <RechartsPrimitive.Tooltip formatter={valueFormatter} />
        {categories.map((category, i) => (
          <RechartsPrimitive.Radar
            key={category}
            name={category}
            dataKey={category}
            stroke={colors[i % colors.length]}
            fill={colors[i % colors.length]}
            fillOpacity={0.2}
          />
        ))}
        <RechartsPrimitive.Legend />
      </RechartsPrimitive.RadarChart>
    </ChartContainer>
  );
};
