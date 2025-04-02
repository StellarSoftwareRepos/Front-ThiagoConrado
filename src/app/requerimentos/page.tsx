"use client";

import { useState, useEffect } from "react";
import {
  FiCalendar,
  FiTag,
  FiFileText,
  FiAlertCircle,
  FiCheckSquare,
} from "react-icons/fi";
import { requerimentos as requerimentosMock } from "@/data/mockData";
import { Filtros } from "../components/Filtros";

interface Requerimento {
  id: number;
  titulo: string;
  descricao: string;
  dataCriacao: string;
  status: string;
  categoria: string;
}

export default function Requerimentos() {
  const [requerimentos, setRequerimentos] = useState<Requerimento[]>([]);
  const [loading, setLoading] = useState(true);
  const [filtros, setFiltros] = useState({
    categoria: "",
    busca: "",
  });

  useEffect(() => {
    // Simular carregamento
    setTimeout(() => {
      setRequerimentos(requerimentosMock);
      setLoading(false);
    }, 1000);
  }, []);

  const categorias = Array.from(
    new Set(requerimentosMock.map((req) => req.categoria))
  );

  const requerimentosFiltrados = requerimentos.filter((req) => {
    const matchCategoria =
      !filtros.categoria || req.categoria === filtros.categoria;
    const matchBusca =
      !filtros.busca ||
      req.titulo.toLowerCase().includes(filtros.busca.toLowerCase()) ||
      req.descricao.toLowerCase().includes(filtros.busca.toLowerCase());
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
    <div className="container mx-auto px-4 pb-8 pt-20">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Requerimentos</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-sm p-6 border border-blue-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-blue-600 mb-1">
                Total de Requerimentos
              </p>
              <p className="text-3xl font-bold text-blue-900">
                {requerimentosFiltrados.length}
              </p>
              <p className="text-xs text-blue-500 mt-1">Total geral</p>
            </div>
            <div className="p-3 bg-blue-500/10 rounded-xl">
              <FiFileText className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl shadow-sm p-6 border border-yellow-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-yellow-600 mb-1">
                Pendentes
              </p>
              <p className="text-3xl font-bold text-yellow-900">
                {
                  requerimentosFiltrados.filter(
                    (req) => req.status === "PENDENTE"
                  ).length
                }
              </p>
              <p className="text-xs text-yellow-500 mt-1">Aguardando análise</p>
            </div>
            <div className="p-3 bg-yellow-500/10 rounded-xl">
              <FiAlertCircle className="w-6 h-6 text-yellow-600" />
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl shadow-sm p-6 border border-indigo-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-indigo-600 mb-1">
                Em Análise
              </p>
              <p className="text-3xl font-bold text-indigo-900">
                {
                  requerimentosFiltrados.filter(
                    (req) => req.status === "ANALISE"
                  ).length
                }
              </p>
              <p className="text-xs text-indigo-500 mt-1">Em processo</p>
            </div>
            <div className="p-3 bg-indigo-500/10 rounded-xl">
              <FiFileText className="w-6 h-6 text-indigo-600" />
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl shadow-sm p-6 border border-green-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-green-600 mb-1">
                Aprovados
              </p>
              <p className="text-3xl font-bold text-green-900">
                {
                  requerimentosFiltrados.filter(
                    (req) => req.status === "APROVADO"
                  ).length
                }
              </p>
              <p className="text-xs text-green-500 mt-1">Concluídos</p>
            </div>
            <div className="p-3 bg-green-500/10 rounded-xl">
              <FiCheckSquare className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>
      </div>

      <Filtros categorias={categorias} onFiltroChange={setFiltros} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {requerimentosFiltrados.map((requerimento) => (
          <article
            key={requerimento.id}
            className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-primary transition-all duration-200 shadow-modern hover-lift"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  {requerimento.titulo}
                </h3>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    requerimento.status === "PENDENTE"
                      ? "bg-yellow-100 text-yellow-800"
                      : requerimento.status === "ANALISE"
                      ? "bg-blue-100 text-blue-800"
                      : "bg-green-100 text-green-800"
                  }`}
                >
                  {requerimento.status.replace("_", " ")}
                </span>
              </div>
              <p className="text-gray-600 mb-4 line-clamp-3">
                {requerimento.descricao}
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center text-sm text-gray-500">
                  <FiCalendar className="mr-2" />
                  {new Date(requerimento.dataCriacao).toLocaleDateString(
                    "pt-BR"
                  )}
                </div>
                <div className="flex items-center text-sm">
                  <FiTag className="mr-2 text-primary" />
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                    {requerimento.categoria.replace("_", " ")}
                  </span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {requerimentosFiltrados.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            Nenhum requerimento encontrado com os filtros selecionados.
          </p>
        </div>
      )}
    </div>
  );
}
