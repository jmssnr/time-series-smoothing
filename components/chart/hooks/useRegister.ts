import { useChartContext } from "@/components/chart/hooks/useChartContext";
import { RegistryItem } from "@/components/chart/types";
import { useEffect } from "react";

export const useRegister = (item: RegistryItem) => {
  const { register, unregister } = useChartContext();

  useEffect(() => {
    register(item);
    return () => unregister(item.id);
  }, [item.data]);
};
