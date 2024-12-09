import React, { useState, useRef, useEffect } from "react";
import { Filter } from "lucide-react";

interface FilterButtonProps {
  filters: { state: string };
  setFilters: React.Dispatch<
    React.SetStateAction<{
      state: string;
    }>
  >;
}

const FilterButton: React.FC<FilterButtonProps> = ({ filters, setFilters }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleFilterChange = (type: string, value: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [type]: value,
    }));
    setIsOpen(false); // Fecha o menu após selecionar o filtro
  };

  const filterOptions = [
    {
      title: "ÓRGÃOS",
      items: ["Coração", "Rins", "Pulmões", "Pâncreas", "Fígado", "Intestino", "Córneas"],
    },
    {
      title: "REGIÃO",
      items: ["Norte", "Nordeste", "Sul", "Sudeste", "Centro-Oeste"],
    },
    {
      title: "ESTADO",
      items: [
        "Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Distrito Federal",
        "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul",
        "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí",
        "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia",
        "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins"
      ],
    },
    {
      title: "DATA DE CADASTRO",
      items: ["Ordem Crescente", "Ordem Decrescente"],
    },
  ];

  return (
    <div className="relative" ref={dropdownRef}>
      <button className="flex items-center text-foreground px-4 py-2" onClick={toggleDropdown}>
        <span className="mr-2">Filtros</span>
        <Filter className="w-5 h-5" />
      </button>

      {isOpen && (
        <div className="fixed flex flex-col items-center top-0 my-2 right-0 h-[98%] w-[17%] bg-primary-foreground shadow-lg border border-secondary-foreground rounded-lg z-50 text-secondary-foreground overflow-y-auto scrollbar-hide">
          <div className="p-4">
            {filterOptions.map((filter, index) => (
              <div className="mb-10" key={index}>
                <h3 className="text-sm font-bold text-center">{filter.title}</h3>
                <ul className="space-y-1 text-sm text-center">
                  {filter.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      onClick={() => handleFilterChange("state", item)}
                      className="cursor-pointer hover:text-primary"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterButton;
