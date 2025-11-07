import Chart from "@/components/chart/chart";
import BarSeries from "@/components/chart/traces/bar-series";
import YAxis from "@/components/chart/traces/y-axis";
import { Datum } from "@/components/chart/types";

const AccuracyChart = (props: {
  width: number;
  height: number;
  data: Datum[];
}) => {
  const { data, ...otherProps } = props;
  return (
    <Chart {...otherProps} yDomain={[0, 10]}>
      <YAxis />
      <BarSeries className="fill-red-500" data={data} id="accuracy" />
    </Chart>
  );
};

export default AccuracyChart;
