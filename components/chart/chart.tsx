"use client";
import { scaleLinear } from "@visx/scale";
import React, { PropsWithChildren, useMemo } from "react";
import { ChartContext } from "@/components/chart/context";
import { Group } from "@visx/group";
import { extent } from "@visx/vendor/d3-array";
import { useCreateChartRegistry } from "@/components/chart/hooks/useCreateChartRegistry";

const DEFAULT_MARGIN = { top: 25, bottom: 5, left: 30, right: 5 };

const Chart = (
  props: PropsWithChildren<{
    width: number;
    height: number;
    margin?: typeof DEFAULT_MARGIN;
    yDomain?: [number, number];
  }>
) => {
  const { registry, register, unregister } = useCreateChartRegistry();
  const { width, height, margin = DEFAULT_MARGIN, children, yDomain } = props;

  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  const data = registry.flatMap((r) => r.data);

  const xScale = scaleLinear({
    range: [0, innerWidth],
    domain: [0, registry[0]?.data.length ?? 1],
  });

  const yScale = scaleLinear({
    range: [innerHeight, 0],
    domain: yDomain ?? (extent(data) as [number, number]),
  });
  const value = useMemo(
    () => ({ registry, xScale, yScale, register, unregister }),
    [registry]
  );
  return (
    <ChartContext.Provider value={value}>
      <svg width={width} height={height}>
        <Group left={margin.left} top={margin.top}>
          {children}
        </Group>
      </svg>
    </ChartContext.Provider>
  );
};

export default Chart;
