import Chart from "@/components/chart/chart";
import LineSeries from "@/components/chart/traces/LineSeries";
import YAxis from "@/components/chart/traces/YAxis";
import { Datum } from "@/components/chart/types";
import React from "react";

const SmoothnessChart = (props: {
  width: number;
  height: number;
  data: Datum[];
}) => {
  const { width, height, data } = props;

  return (
    <Chart width={width} height={height}>
      <YAxis />
      <LineSeries id="smoothness" data={data} className="stroke-blue-500" />
    </Chart>
  );
};

export default SmoothnessChart;
