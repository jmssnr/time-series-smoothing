import Chart from "@/components/chart/chart";
import CircleSeries from "@/components/chart/traces/circle-series";
import LineSeries from "@/components/chart/traces/line-series";
import XAxis from "@/components/chart/traces/x-axis";
import YAxis from "@/components/chart/traces/y-axis";
import { Datum } from "@/components/chart/types";

const ComparisonChart = (props: {
  width: number;
  height: number;
  rawData: Datum[];
  smoothedData: Datum[];
}) => {
  const { rawData, smoothedData, ...otherProps } = props;

  return (
    <Chart {...otherProps}>
      <XAxis />
      <YAxis />
      <CircleSeries
        data={rawData}
        id="raw"
        className="fill-blue-400 stroke-blue-600"
      />
      <LineSeries
        className="stroke-fuchsia-500"
        data={smoothedData}
        id="smoothness"
      />
    </Chart>
  );
};

export default ComparisonChart;
