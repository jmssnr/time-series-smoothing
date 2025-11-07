import { ChartContextProps } from "@/components/chart/types";
import { createContext } from "react";

export const ChartContext = createContext<ChartContextProps | null>(null);
