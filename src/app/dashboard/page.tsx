"use client";
import { useState } from "react";
import LayoutDash from "../_components/LayoutDash";
import DashboardNav from "../_components/DashboardNav";
import DonorReceiverDashboard from "../_components/DonorReceiverDashboard";
import OrganDashboard from "../_components/OrganDashboard";
import LocationDashboard from "../_components/LocationDashboard";

export default function Dashboard() {
  const [selectedTab, setSelectedTab] = useState("doadorReceptor");

  const tabComponents: Record<string, React.ComponentType> = {
    doadorReceptor: DonorReceiverDashboard,
    orgao: OrganDashboard,
    localidade: LocationDashboard,
  };

  const SelectedComponent = tabComponents[selectedTab];

  return (
    <LayoutDash>
      <DashboardNav onSelectTab={setSelectedTab} selectedTab={selectedTab} />
      <div className="content-area p-4">
        {SelectedComponent && <SelectedComponent />}
      </div>
    </LayoutDash>
  );
}
