"use client";

import { useScales } from "@/components/chart/hooks/useScales";
import { AxisLeft } from "@visx/axis";

const YAxis = () => {
  const { yScale } = useScales();
  return (
    <AxisLeft
      scale={yScale}
      tickLabelProps={{ stroke: "white" }}
      numTicks={5}
      axisLineClassName="stroke-white"
      tickStroke="white"
    />
  );
};

export default YAxis;
