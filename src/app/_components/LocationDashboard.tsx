"use client";

import BarChart from "./BarChart";
import LegendDonorReceivers from "./LegendDonorReceivers";

const donorReceiverNorte = {
  desc: "Norte",
  data: [
    { label: "JAN", donor: 123, Receiver: 154 },
    { label: "FEV", donor: 108, Receiver: 114 },
    { label: "MAR", donor: 129, Receiver: 104 },
    { label: "ABR", donor: 138, Receiver: 172 },
    { label: "MAI", donor: 133, Receiver: 135 },
    { label: "JUN", donor: 112, Receiver: 146 },
  ],
};

const donorReceiverNordeste = {
  desc: "Nordeste",
  data: [
    { label: "JAN", donor: 123, Receiver: 154 },
    { label: "FEV", donor: 108, Receiver: 114 },
    { label: "MAR", donor: 129, Receiver: 104 },
    { label: "ABR", donor: 138, Receiver: 172 },
    { label: "MAI", donor: 133, Receiver: 135 },
    { label: "JUN", donor: 112, Receiver: 146 },
  ],
};

const donorReceiverCentroOeste = {
  desc: "Centro-Oeste",
  data: [
    { label: "JAN", donor: 123, Receiver: 154 },
    { label: "FEV", donor: 108, Receiver: 114 },
    { label: "MAR", donor: 129, Receiver: 104 },
    { label: "ABR", donor: 138, Receiver: 172 },
    { label: "MAI", donor: 133, Receiver: 135 },
    { label: "JUN", donor: 112, Receiver: 146 },
  ],
};

const donorReceiverSul = {
  desc: "Sul",
  data: [
    { label: "JAN", donor: 123, Receiver: 154 },
    { label: "FEV", donor: 108, Receiver: 114 },
    { label: "MAR", donor: 129, Receiver: 104 },
    { label: "ABR", donor: 138, Receiver: 172 },
    { label: "MAI", donor: 133, Receiver: 135 },
    { label: "JUN", donor: 112, Receiver: 146 },
  ],
};

const donorReceiverSudeste = {
  desc: "Sudeste",
  data: [
    { label: "JAN", donor: 123, Receiver: 154 },
    { label: "FEV", donor: 108, Receiver: 114 },
    { label: "MAR", donor: 129, Receiver: 104 },
    { label: "ABR", donor: 138, Receiver: 172 },
    { label: "MAI", donor: 133, Receiver: 135 },
    { label: "JUN", donor: 112, Receiver: 146 },
  ],
};

const dataByRegion = [
  donorReceiverNorte,
  donorReceiverNordeste,
  donorReceiverCentroOeste,
  donorReceiverSul,
  donorReceiverSudeste,
];

export default function LocationDashboard() {
  return (
    <main className="ml-0 p-6">
      {/* Flexbox para organizar e centralizar os gráficos */}
      <div className="flex flex-wrap justify-center gap-6">
        {dataByRegion.map((region, index) => (
          <div
            key={index}
            className="flex justify-center items-center"
            style={{
              width: "calc(20vw)", // Cada gráfico ocupa 20% da largura da tela
              height: "calc(20vh)", // A altura ajusta com base no tamanho da tela
              minWidth: "350px", // Largura mínima para evitar gráficos muito pequenos
              minHeight: "200px", // Altura mínima
            }}
          >
            <BarChart
              data={region}
              height="100%" // Usa o tamanho do contêiner
              width="100%" // Usa o tamanho do contêiner
            />
          </div>
        ))}
      </div>
      {/* Legenda */}
      <div className="mt-6">
        <LegendDonorReceivers />
      </div>
    </main>
  );
}
