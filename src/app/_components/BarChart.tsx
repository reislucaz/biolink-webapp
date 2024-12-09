"use client";

import { ResponsiveBar } from "@nivo/bar";

interface BarChartData {
  label: string;
  donor: number;
  Receiver: number;
}

interface BarChartProps {
  data: {
    desc?: string;
    data: { label: string; donor: number; Receiver: number;}[];
  };
  height?: number | string;
  width?: number | string;
}

export default function BarChart({ data, height = 300, width = 700 }: BarChartProps) {
  return (
    <div style={{ height, width }}>
      <ResponsiveBar
        data={data.data}
        keys={["donor", "Receiver"]}
        indexBy="label"
        margin={{ top: 20, right: 0, bottom: 25, left: 0 }}
        padding={0.3}
        innerPadding={5}
        groupMode="grouped"
        colors={["hsl(0, 86%, 39%)", "hsl(0, 0%, 37%)"]}
        borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
        labelTextColor="#FFFFFF"
        enableGridY={false}
        axisLeft={null}
        theme={{
          axis: {
            ticks: {
              text: {
                fill: "hsl(0, 0%, 37%)",
              },
            },
            legend: {
              text: {
                fill: "#FFFFFF",
              },
            },
          },
        }}
        tooltip={(bar) => {
          const label = bar.id === "donor" ? "Doador" : "Receptor";
          return (
            <div
              style={{
                padding: "5px 10px",
                background: "white",
                border: "1px solid #ccc",
                borderRadius: "4px",
              }}
            >
              {label}: {bar.value}
            </div>
          );
        }}
      />
      {data.desc && (
        <div className="flex justify-around mt-3">
          <span className="bg-neutral-300 text-foreground inline px-[10%] text-center rounded-lg">
            {data.desc}
          </span>
        </div>
      )}
    </div>
  );
}
