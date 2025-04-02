"use client";

import { useState } from "react";
import { FiFilter, FiX, FiSearch } from "react-icons/fi";

interface FiltrosProps {
  categorias: string[];
  onFiltroChange: (filtros: { categoria: string; busca: string }) => void;
}

export function Filtros({ categorias, onFiltroChange }: FiltrosProps) {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState<string>("");
  const [busca, setBusca] = useState<string>("");
  const [isFiltrosAbertos, setIsFiltrosAbertos] = useState(false);

  const handleCategoriaChange = (categoria: string) => {
    setCategoriaSelecionada(categoria);
    onFiltroChange({ categoria, busca });
  };

  const handleBuscaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valor = e.target.value;
    setBusca(valor);
    onFiltroChange({ categoria: categoriaSelecionada, busca: valor });
  };

  const limparFiltros = () => {
    setCategoriaSelecionada("");
    setBusca("");
    onFiltroChange({ categoria: "", busca: "" });
  };

  return (
    <div className="bg-white rounded-xl shadow-modern p-6 mb-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Barra de Busca */}
        <div className="relative flex-1">
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar..."
            value={busca}
            onChange={handleBuscaChange}
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>

        {/* Botão de Filtros */}
        <button
          onClick={() => setIsFiltrosAbertos(!isFiltrosAbertos)}
          className="inline-flex items-center px-4 py-2 border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200"
        >
          <FiFilter className="mr-2" />
          Filtros
        </button>
      </div>

      {/* Painel de Filtros */}
      <div
        className={`mt-4 transition-all duration-300 ease-in-out ${
          isFiltrosAbertos ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="pt-4 border-t border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-900">Categorias</h3>
            {(categoriaSelecionada || busca) && (
              <button
                onClick={limparFiltros}
                className="text-sm text-gray-500 hover:text-primary transition-colors duration-200"
              >
                Limpar filtros
              </button>
            )}
          </div>

          <div className="flex flex-wrap gap-2">
            {categorias.map((categoria) => (
              <button
                key={categoria}
                onClick={() => handleCategoriaChange(categoria)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  categoriaSelecionada === categoria
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {categoria.replace("_", " ")}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
