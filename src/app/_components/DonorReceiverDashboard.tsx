"use client";

import  BarChart from "./BarChart"
import LegendDonorReceivers from "./LegendDonorReceivers";
import PieChart from "./PieChart";

const donorReceiver = [
  { id: "Doador", value: 38, color: "hsl(0, 86%, 39%)"},
  { id: "Receptor", value: 62, color: "hsl(0, 0%, 37%)"},
];

const donorReceiverMonth = {
  desc: "Últimos seis meses",
  data: [
    { label: "JAN", donor: 123, Receiver: 154},
    { label: "FEV", donor: 108, Receiver: 114},
    { label: "MAR", donor: 129, Receiver: 104},
    { label: "ABR", donor: 138, Receiver: 172},
    { label: "MAI", donor: 133, Receiver: 135},
    { label: "JUN", donor: 112, Receiver: 146},
  ]
};

export default function DonorReceiverDashboard() {
  return (
    <main className="mt-10">
      <div className="w-[100%] h-[100%] flex justify-around">
        <PieChart data={donorReceiver} />
        <BarChart data={donorReceiverMonth} />
      </div>
      <LegendDonorReceivers />
    </main>
  );
}