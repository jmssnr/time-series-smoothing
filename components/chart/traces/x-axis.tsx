"use client";

import { useScales } from "@/components/chart/hooks/useScales";
import { AxisTop } from "@visx/axis";

const XAxis = () => {
  const { xScale } = useScales();
  return (
    <AxisTop
      scale={xScale}
      tickLabelProps={{ stroke: "white" }}
      axisLineClassName="stroke-white"
      tickStroke="white"
    />
  );
};

export default XAxis;
