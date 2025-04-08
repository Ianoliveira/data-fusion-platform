
import React from "react";
import * as RechartsPrimitive from "recharts";
import { ChartContainer } from "../chart-base";

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
