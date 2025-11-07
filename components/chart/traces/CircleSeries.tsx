"use client";

import { useChartContext } from "@/components/chart/hooks/useChartContext";
import { useRegister } from "@/components/chart/hooks/useRegister";
import { useScales } from "@/components/chart/hooks/useScales";
import { Datum } from "@/components/chart/types";

const CircleSeries = (props: {
  id: string;
  data: Datum[];
  className: string;
}) => {
  const { className, data } = props;
  useRegister(props);
  const { xScale, yScale } = useScales();
  const { registry } = useChartContext();

  if (registry.length === 0) return;

  return data.map((datum, indx) => {
    return (
      <circle
        key={`circle-${indx}`}
        cx={xScale(indx)}
        cy={yScale(datum)}
        className={className}
        r={5}
      />
    );
  });
};

export default CircleSeries;
