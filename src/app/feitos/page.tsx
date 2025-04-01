"use client";

import { useEffect, useState } from "react";
import { FiCalendar, FiTag } from "react-icons/fi";
import { feitos as feitosMock } from "@/data/mockData";

interface Feito {
  id: number;
  titulo: string;
  descricao: string;
  dataRealizacao: string;
  categoria: string;
  imagemUrl: string;
}

export default function Feitos() {
  const [feitos, setFeitos] = useState<Feito[]>([]);
  const [loading, setLoading] = useState(true);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState<
    string | null
  >(null);

  useEffect(() => {
    // Simular carregamento
    setTimeout(() => {
      setFeitos(feitosMock);
      setLoading(false);
    }, 1000);
  }, []);

  const categorias = [
    "INFRAESTRUTURA",
    "SAUDE",
    "EDUCACAO",
    "SEGURANCA",
    "CULTURA",
    "ESPORTE",
    "ASSISTENCIA_SOCIAL",
    "OUTROS",
  ];

  const feitosFiltrados = categoriaSelecionada
    ? feitos.filter((feito) => feito.categoria === categoriaSelecionada)
    : feitos;

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <div className="relative bg-indigo-600 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-indigo-800 opacity-90"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-20"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Feitos Realizados
          </h1>
          <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
            Conheça as conquistas e realizações que beneficiam nossa cidade.
          </p>
        </div>
      </div>

      {/* Filtros */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setCategoriaSelecionada(null)}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              !categoriaSelecionada
                ? "bg-indigo-600 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            Todos
          </button>
          {categorias.map((categoria) => (
            <button
              key={categoria}
              onClick={() => setCategoriaSelecionada(categoria)}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                categoriaSelecionada === categoria
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {categoria.replace("_", " ")}
            </button>
          ))}
        </div>
      </div>

      {/* Feitos Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {feitosFiltrados.map((feito) => (
            <article
              key={feito.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-indigo-500 transition-colors"
            >
              {feito.imagemUrl && (
                <img
                  src={feito.imagemUrl}
                  alt={feito.titulo}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  {feito.titulo}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {feito.descricao}
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <FiCalendar className="mr-2" />
                    {new Date(feito.dataRealizacao).toLocaleDateString("pt-BR")}
                  </div>
                  <div className="flex items-center text-sm">
                    <FiTag className="mr-2 text-indigo-600" />
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                      {feito.categoria.replace("_", " ")}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
