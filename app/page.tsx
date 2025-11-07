"use client";

import AccuracyChart from "@/components/accuracy-chart";
import ComparisonChart from "@/components/comparison-chart";
import SmoothnessChart from "@/components/smoothness-chart";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { smoothing } from "@/smoothing";
import { appleStock } from "@visx/mock-data";
import { useState } from "react";

export default function Home() {
  const [value, setValue] = useState(1);
  const data = appleStock.slice(0, 50).map((d) => d.close);
  const smoothedData = smoothing(data, value);

  const squaredDifferences = data.map((y, i) => (y - smoothedData[i]) ** 2);
  const squaredRange = smoothedData
    .slice(1)
    .map((d, i) => (d - smoothedData[i - 1]) ** 2);

  return (
    <main className="w-screen h-screen grid place-content-center">
      <div className="flex flex-col gap-2 items-center justify-center">
        <Label htmlFor="lambda">Smoothing</Label>
        <div className="flex gap-2">
          <p>Low</p>
          <Slider
            className="w-60"
            id="lambda"
            value={[value]}
            onValueChange={(v) => setValue(v[0])}
            min={0.1}
            max={5000}
            step={1}
          />
          <p>High</p>
        </div>
        <ComparisonChart
          width={500}
          height={300}
          rawData={data}
          smoothedData={smoothedData}
        />
        <AccuracyChart width={500} height={100} data={squaredDifferences} />
        <SmoothnessChart width={500} height={100} data={squaredRange} />
      </div>
    </main>
  );
}
