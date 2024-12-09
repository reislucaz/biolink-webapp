"use client";

import { ResponsivePie } from "@nivo/pie";

interface PieChartData {
  id: string;
  value: number;
  color: string;
}

interface PieChartProps {
  data: PieChartData[];
  height?: number;
  width?: number;
}

const PieChart = ({ data, height = 300, width = 700 }: PieChartProps) => {
  const total = data.reduce((acc, cur) => acc + cur.value, 0);

  return (
    <div style={{ height, width }}>
      <ResponsivePie
        data={data}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        innerRadius={0.7}
        activeOuterRadiusOffset={8}
        colors={{ datum: "data.color" }}
        borderWidth={1}
        borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
        enableArcLabels={true}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor="#ffffff"
        enableArcLinkLabels={true}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsOffset={10}
        arcLinkLabelsTextColor="hsl(240 5.9% 10%)"
        arcLinkLabelsThickness={1}
        arcLinkLabelsColor={{ from: "color" }}
        arcLinkLabel={(d) => {
          const percentage = ((d.value / total) * 100).toFixed(0);
          return `${percentage}%`;
        }}
        layers={["arcs", "arcLinkLabels"]}
      />
    </div>
  );
};

export default PieChart;
;
