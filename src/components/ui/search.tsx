import React from "react";
import { Search } from "lucide-react";

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, setSearchTerm }) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="bg-primary-foreground flex flex-row w-[50%] mx-auto border border-foreground rounded-md items-center">
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Buscar"
        className="flex-grow px-4 py-2 outline-none bg-transparent"
      />
      <div className="px-4 py-2 flex items-center rounded-r-md bg-transparent">
        <Search className="w-5 h-5" />
      </div>
    </div>
  );
};

export default SearchBar;
