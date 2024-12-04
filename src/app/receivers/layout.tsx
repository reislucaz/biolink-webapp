import Navbar from "../_components/navbar";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="ml-[17%]">
      <Navbar />
      {children}
    </main>
  );
}
