"use client";

type NavItem = {
  key: string;
  label: string;
};

type DashboardNavProps = {
  onSelectTab: (tabKey: string) => void;
  selectedTab: string;
};

export default function DashboardNav({
  onSelectTab,
  selectedTab,
}: DashboardNavProps) {
  const navItems: NavItem[] = [
    { key: "doadorReceptor", label: "DOADOR/RECEPTOR" },
    { key: "orgao", label: "ÓRGÃO" },
    { key: "localidade", label: "LOCALIDADE" },
  ];

  const isActive = (itemKey: string) => {
    return itemKey === selectedTab
      ? "text-secondary bg-primary rounded-md"
      : "";
  };

  return (
    <div className="w-full flex flex-col items-center">
      <nav className="my-8 px-10 mx-10 font-bold border border-secondary-foreground text-secondary-foreground items-center rounded-md">
        <ul className="flex flex-row items-center my-1">
          {navItems.map((item) => (
            <li key={item.key} className="mx-4">
              <button
                type="button"
                onClick={() => onSelectTab(item.key)}
                className={`flex items-center justify-center py-2 px-8 transition-all duration-300 hover:bg-primary hover:text-secondary hover:rounded-md ${isActive(
                  item.key
                )}`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
