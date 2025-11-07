import { Registry, RegistryItem } from "@/components/chart/types";
import { useState } from "react";

export const useCreateChartRegistry = () => {
  const [registry, setRegistry] = useState<Registry>([]);

  const register = (item: RegistryItem) => {
    setRegistry((curr) => {
      if (curr.map((c) => c.id).includes(item.id)) {
        return curr;
      }
      return [...curr, item];
    });
  };

  const unregister = (id: string) => {
    setRegistry((curr) => {
      return [...curr].filter((r) => r.id !== id);
    });
  };

  return { registry, register, unregister };
};
