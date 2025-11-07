"use client";
import { Group } from "@visx/group";
import { Dataset, Margin } from "@/components/chart/types";
import { scaleLinear } from "@visx/scale";
import { AxisBottom, AxisLeft } from "@visx/axis";
import { extent } from "@visx/vendor/d3-array";
import { LinePath } from "@visx/shape";

const LineChart = (props: {
  width: number;
  height: number;
  margin?: Margin;
  data: Dataset;
  smoothedData: Dataset;
}) => {
  const {
    width,
    height,
    margin = { top: 10, bottom: 60, left: 60, right: 10 },
    data,
    smoothedData,
  } = props;

  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  const xScale = scaleLinear({
    domain: [0, data.length],
    range: [0, innerWidth],
  });

  const yScale = scaleLinear({
    domain: extent(data) as [number, number],
    range: [innerHeight, 0],
  });

  const circles = data.map((datum, index) => (
    <circle
      key={index}
      cx={xScale(index)}
      cy={yScale(datum)}
      r={5}
      className="fill-blue-400 stroke-blue-600"
    />
  ));

  const smoothedLine = (
    <LinePath
      data={smoothedData}
      x={(_, i) => xScale(i)}
      y={(d) => yScale(d)}
      className="stroke-fuchsia-500 stroke-2"
    />
  );

  const squaredDifferences = data.map((y, i) => (y - smoothedData[i]) ** 2);

  const squaredRange = smoothedData
    .slice(1)
    .map((d, i) => (d - smoothedData[i - 1]) ** 2);

  const yScaleTwo = scaleLinear({
    range: [innerHeight, 0.9 * innerHeight],
    domain: [0, 10],
  });

  const sLine = (
    <LinePath
      data={squaredDifferences}
      x={(_, i) => xScale(i)}
      y={(d) => yScaleTwo(d)}
      className="stroke-red-500 stroke-2"
    />
  );

  const rLine = (
    <LinePath
      data={squaredRange.slice(1)}
      x={(_, i) => xScale(i + 1)}
      y={(d) => yScaleTwo(d)}
      className="stroke-yellow-500 stroke-2"
    />
  );

  return (
    <svg width={width} height={height}>
      <Group left={margin.left} top={margin.top}>
        <AxisLeft scale={yScale} />
        <AxisBottom scale={xScale} top={innerHeight} />
        {circles}
        {smoothedLine}
        {sLine}
        {rLine}
      </Group>
    </svg>
  );
};

export default LineChart;
