import HospitalTable from "../_components/HospitalTable";
import LayoutDash from "../_components/LayoutDash";

export default function Dashboard() {
  return (
    <LayoutDash>
      <main className="p-6">
        <HospitalTable />
      </main>
    </LayoutDash>
  );
}
