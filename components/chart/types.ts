import { ScaleLinear } from "d3-scale";

type LinearScale = ScaleLinear<number, number>;

export type Margin = {
  top: number;
  bottom: number;
  left: number;
  right: number;
};

export type Datum = number

export type Dataset = Datum[];

export type RegistryItem = {
  id: string;
  data: Dataset;
};

export type Registry = RegistryItem[];

export type ChartContextProps = {
  registry: Registry;
  register: (item: RegistryItem) => void;
  unregister: (id: RegistryItem["id"]) => void;
  xScale: LinearScale;
  yScale: LinearScale;
};
