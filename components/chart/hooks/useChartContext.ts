import { ChartContext } from "@/components/chart/context";
import { useContext } from "react";

export const useChartContext = () => {
  const ctx = useContext(ChartContext);

  if (ctx === null) {
    throw new Error("No provider for ChartContext");
  }

  return ctx;
};
