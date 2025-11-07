"use client";

import { useRegister } from "@/components/chart/hooks/useRegister";
import { useScales } from "@/components/chart/hooks/useScales";
import { Datum } from "@/components/chart/types";
import { cn } from "@/lib/utils";
import { line } from "d3-shape";

const LineSeries = (props: {
  id: string;
  data: Datum[];
  className: string;
}) => {
  const { className, data } = props;
  useRegister(props);
  const { xScale, yScale } = useScales();

  const path = line<Datum>()
    .x((d, i) => xScale(i))
    .y((d) => yScale(d));
  return <path d={path(data) ?? ""} className={cn("fill-none stroke-2", className)} />;
};

export default LineSeries;
