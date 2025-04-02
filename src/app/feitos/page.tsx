"use client";

import { useState, useEffect } from "react";
import { FiCalendar, FiTag } from "react-icons/fi";
import { feitos as feitosMock } from "@/data/mockData";
import { Filtros } from "../components/Filtros";

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
  const [filtros, setFiltros] = useState({
    categoria: "",
    busca: "",
  });

  useEffect(() => {
    // Simular carregamento
    setTimeout(() => {
      setFeitos(feitosMock);
      setLoading(false);
    }, 1000);
  }, []);

  const categorias = Array.from(
    new Set(feitosMock.map((feito) => feito.categoria))
  );

  const feitosFiltrados = feitos.filter((feito) => {
    const matchCategoria =
      !filtros.categoria || feito.categoria === filtros.categoria;
    const matchBusca =
      !filtros.busca ||
      feito.titulo.toLowerCase().includes(filtros.busca.toLowerCase()) ||
      feito.descricao.toLowerCase().includes(filtros.busca.toLowerCase());
    return matchCategoria && matchBusca;
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Feitos</h1>

      <Filtros categorias={categorias} onFiltroChange={setFiltros} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {feitosFiltrados.map((feito) => (
          <article
            key={feito.id}
            className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-primary transition-all duration-200 shadow-modern hover-lift"
          >
            {feito.imagemUrl && (
              <img
                src={feito.imagemUrl}
                alt={feito.titulo}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feito.titulo}
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-3">
                {feito.descricao}
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center text-sm text-gray-500">
                  <FiCalendar className="mr-2" />
                  {new Date(feito.dataRealizacao).toLocaleDateString("pt-BR")}
                </div>
                <div className="flex items-center text-sm">
                  <FiTag className="mr-2 text-primary" />
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                    {feito.categoria.replace("_", " ")}
                  </span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {feitosFiltrados.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            Nenhum feito encontrado com os filtros selecionados.
          </p>
        </div>
      )}
    </div>
  );
}
