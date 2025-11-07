import Chart from "@/components/chart/chart";
import CircleSeries from "@/components/chart/traces/CircleSeries";
import LineSeries from "@/components/chart/traces/LineSeries";
import XAxis from "@/components/chart/traces/XAxis";
import YAxis from "@/components/chart/traces/YAxis";
import { Datum } from "@/components/chart/types";
import React from "react";

const ComparisonChart = (props: {
  width: number;
  height: number;
  data: Datum[];
  smoothed: Datum[];
}) => {
  const { width, height, data, smoothed } = props;

  return (
    <Chart width={width} height={height}>
      <YAxis />
      <XAxis />
      <CircleSeries
        id="raw"
        data={data}
        className="fill-violet-500 stroke-violet-700"
      />
      <LineSeries id="smoothed" data={smoothed} className="stroke-blue-500" />
    </Chart>
  );
};

export default ComparisonChart;
