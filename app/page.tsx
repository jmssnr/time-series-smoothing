"use client";

import LineChart from "@/components/chart/line-chart";
import { Slider } from "@/components/ui/slider";
import { smoothing } from "@/smoothing";
import { appleStock } from "@visx/mock-data";
import { useState } from "react";

export default function Home() {
  const [value, setValue] = useState(1);
  const data = appleStock.slice(0, 50).map((d) => d.close);
  const smoothedData = smoothing(data, value);
  return (
    <main className="w-screen h-screen grid place-content-center">
      <div className="flex flex-col gap-2 items-center justify-center">
        <Slider
          value={[value]}
          onValueChange={(v) => setValue(v[0])}
          min={0.1}
          max={5000}
          step={1}
        />
        <LineChart
          width={500}
          height={400}
          data={data}
          smoothedData={smoothedData}
        />
      </div>
    </main>
  );
}
