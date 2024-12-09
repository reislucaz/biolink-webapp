"use client";

import BarChart from "./BarChart";
import LegendDonorReceivers from "./LegendDonorReceivers";

const donorReceiverMonth = {
  desc: "últimos seis meses",
  data: [
    { label: "Coração", donor: 123, Receiver: 154 },
    { label: "Pulmão", donor: 108, Receiver: 114 },
    { label: "Pâncreas", donor: 129, Receiver: 104 },
    { label: "Rins", donor: 138, Receiver: 172 },
    { label: "Figado", donor: 133, Receiver: 135 },
    { label: "Intestino", donor: 112, Receiver: 146 },
    { label: "Córnea", donor: 127, Receiver: 159 },
    { label: "Tecídos", donor: 95, Receiver: 109 },
  ],
};

export default function OrganDashboard() {
  return (
    <main className="">
      <div className="w-full h-full flex justify-around pl-14 items-start">
        <BarChart data={donorReceiverMonth} />
      </div>
      <LegendDonorReceivers />
    </main>
  );
}
