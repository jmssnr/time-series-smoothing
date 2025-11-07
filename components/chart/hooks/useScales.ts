import { useChartContext } from "@/components/chart/hooks/useChartContext";

export const useScales = () => {
  const { xScale, yScale } = useChartContext();
  return { xScale, yScale };
};
