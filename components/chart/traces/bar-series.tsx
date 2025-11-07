"use client";

import { useChartContext } from "@/components/chart/hooks/useChartContext";
import { useRegister } from "@/components/chart/hooks/useRegister";
import { useScales } from "@/components/chart/hooks/useScales";
import { Datum } from "@/components/chart/types";
import { cn } from "@/lib/utils";

const BarSeries = (props: { id: string; data: Datum[]; className: string }) => {
  const { className, data } = props;
  useRegister(props);
  const { xScale, yScale } = useScales();
  const { registry } = useChartContext();

  if (registry.length === 0) return;

  const barWidth = xScale.range()[1] / data.length;

  return data.map((datum, indx) => {
    return (
      <rect
        width={barWidth}
        height={innerHeight - yScale(datum)}
        key={`rect-${indx}`}
        x={xScale(indx) + barWidth/2}
        y={yScale(datum)}
        className={cn("stroke-white stroke-2", className)}
      />
    );
  });
};

export default BarSeries;
