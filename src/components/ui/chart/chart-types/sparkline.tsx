
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
  color = "#3b82f6",
  height = 30,
  className,
}) => {
  return (
    <div className={className} style={{ height: `${height}px` }}>
      <NeoChartContainer className="p-0">
        <RechartsPrimitive.LineChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
          <RechartsPrimitive.Line
            type="monotone"
            dataKey={dataKey}
            stroke={color}
            strokeWidth={2}
            dot={false}
          />
        </RechartsPrimitive.LineChart>
      </NeoChartContainer>
    </div>
  );
};
