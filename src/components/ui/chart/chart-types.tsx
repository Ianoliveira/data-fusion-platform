
import React from "react";
import * as RechartsPrimitive from "recharts";
import { ChartContainer } from "./chart-base";

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

interface PieChartProps extends CustomChartProps {
  category: string;
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

export const SparklineChart: React.FC<{
  data: any[];
  dataKey: string;
  color?: string;
  height?: number;
  className?: string;
}> = ({
  data,
  dataKey,
  color = "#3b82f6",
  height = 30,
  className,
}) => {
  return (
    <div className={className} style={{ height: `${height}px` }}>
      <ChartContainer config={{}}>
        <RechartsPrimitive.LineChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
          <RechartsPrimitive.Line
            type="monotone"
            dataKey={dataKey}
            stroke={color}
            strokeWidth={2}
            dot={false}
          />
        </RechartsPrimitive.LineChart>
      </ChartContainer>
    </div>
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
          {sortedData.map((entry, i) => (
            <RechartsPrimitive.Cell 
              key={`cell-${i}`} 
              fill={colors[i % colors.length]} 
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

// Export the interface so it can be used in other files
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

// Tree Map visualization for hierarchical data
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
