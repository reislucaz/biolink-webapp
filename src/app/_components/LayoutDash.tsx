import Navbar from "./navbar";

export default function LayoutDash({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="ml-[17%]">
      <Navbar />
      <div className="w-[82%] h-[98%] fixed m-2 float-right  bg-secondary rounded-xl shadow-lg">
        {children}
      </div>
    </main>
  );
}
