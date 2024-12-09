"use client";

import { useState, useEffect } from "react";
import LayoutDash from "../_components/LayoutDash";
import Table from "../../components/ui/table";
import SearchBar from "@/components/ui/search";
import FilterButton from "@/components/ui/filters";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface User {
  id: string;
  role: string;
  name: string;
  phone: string;
  state: string;
  bloodType: string;
  rhFactor: string;
}

export default function Dashboard() {
  const [users, setUsers] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    state: "",
  });

  useEffect(() => {
    fetch("/mock/user.json")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.filter((user: User) => user.role === "Doador"));
      })
      .catch((error) => console.error("Erro ao buscar dados:", error));
  }, []);

  // Aplicar filtros e busca
  const filteredUsers = users.filter((user) => {
    const matchesState = filters.state ? user.state === filters.state : true;
    const matchesSearch = searchTerm
      ? user.name.toLowerCase().includes(searchTerm.toLowerCase())
      : true;
    return matchesState && matchesSearch;
  });

  const dataUsers = filteredUsers.map((user) => (
    {
    id: user.id,
    data:{
      Nome: user.name,
      Telefone: user.phone,
      Estado: user.state,
      "Tipo Sanguíneo": `${user.bloodType} ${user.rhFactor === "POSITIVE" ? "+" : "-"}`
    },
  }));

  const columns = ["Nome", "Telefone", "Estado", "Tipo Sanguíneo"];

  return (
    <LayoutDash>
      <main className="p-6">
        <div className="flex justify-between items-center mb-4">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <FilterButton filters={filters} setFilters={setFilters} />
        </div>

        <Table columns={columns} data={dataUsers} />

        <div className="flex justify-between items-center mt-4">
          <button className="text-foreground px-4 py-2">
            <ArrowLeft className="w-8 h-8" />
          </button>
          <span className="text-foreground">{`1-${dataUsers.length} de ${dataUsers.length}`}</span>
          <button className="text-foreground px-4 py-2">
            <ArrowRight className="w-8 h-8" />
          </button>
        </div>
      </main>
    </LayoutDash>
  );
}
