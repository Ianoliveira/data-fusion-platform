
import React from "react";
import * as RechartsPrimitive from "recharts";
import { NeoChartContainer } from "../neo-chart";

export const SparklineChart: React.FC<{
  data: any[];
  dataKey: string;
  color?: string;
  height?: number;
  className?: string;
}> = ({
  data,
  dataKey,
  color = "#8B5CF6", // Updated to fashion brand purple
  height = 50,
  className,
}) => {
  return (
    <div className={className} style={{ height: `${height}px`, minHeight: `${height}px`, width: '100%' }}>
      <NeoChartContainer className="p-0 w-full h-full">
        <RechartsPrimitive.ResponsiveContainer width="100%" height="100%">
          <RechartsPrimitive.LineChart data={data} margin={{ top: 2, right: 2, left: 2, bottom: 2 }}>
            <RechartsPrimitive.Line
              type="monotone"
              dataKey={dataKey}
              stroke={color}
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4, fill: color }}
            />
          </RechartsPrimitive.LineChart>
        </RechartsPrimitive.ResponsiveContainer>
      </NeoChartContainer>
    </div>
  );
};
