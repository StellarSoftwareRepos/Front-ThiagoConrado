"use client";

import { useEffect, useState } from "react";
import {
  FiCalendar,
  FiTag,
  FiFileText,
  FiCheckCircle,
  FiClock,
  FiAlertCircle,
} from "react-icons/fi";
import { requerimentos as requerimentosMock } from "@/data/mockData";

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
  const [categoriaSelecionada, setCategoriaSelecionada] = useState<
    string | null
  >(null);

  useEffect(() => {
    // Simular carregamento
    setTimeout(() => {
      setRequerimentos(requerimentosMock);
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

  const requerimentosFiltrados = categoriaSelecionada
    ? requerimentos.filter((req) => req.categoria === categoriaSelecionada)
    : requerimentos;

  // Métricas por status
  const metricas = {
    total: requerimentos.length,
    aprovados: requerimentos.filter((req) => req.status === "APROVADO").length,
    pendentes: requerimentos.filter((req) => req.status === "PENDENTE").length,
    emAnalise: requerimentos.filter((req) => req.status === "EM_ANALISE")
      .length,
  };

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
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-20"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Requerimentos
          </h1>
          <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
            Acompanhe os requerimentos e solicitações para melhorias em nossa
            cidade.
          </p>
        </div>
      </div>

      {/* Métricas */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Total de Requerimentos */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-indigo-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total</p>
                <p className="text-2xl font-semibold text-gray-900">
                  {metricas.total}
                </p>
              </div>
              <div className="p-3 bg-indigo-50 rounded-full">
                <FiFileText className="h-6 w-6 text-indigo-600" />
              </div>
            </div>
          </div>

          {/* Requerimentos Aprovados */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-green-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Aprovados</p>
                <p className="text-2xl font-semibold text-gray-900">
                  {metricas.aprovados}
                </p>
              </div>
              <div className="p-3 bg-green-50 rounded-full">
                <FiCheckCircle className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </div>

          {/* Requerimentos Pendentes */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-yellow-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Pendentes</p>
                <p className="text-2xl font-semibold text-gray-900">
                  {metricas.pendentes}
                </p>
              </div>
              <div className="p-3 bg-yellow-50 rounded-full">
                <FiClock className="h-6 w-6 text-yellow-600" />
              </div>
            </div>
          </div>

          {/* Requerimentos em Análise */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-blue-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Em Análise</p>
                <p className="text-2xl font-semibold text-gray-900">
                  {metricas.emAnalise}
                </p>
              </div>
              <div className="p-3 bg-blue-50 rounded-full">
                <FiAlertCircle className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </div>
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

      {/* Requerimentos Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {requerimentosFiltrados.map((requerimento) => (
            <article
              key={requerimento.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-indigo-500 transition-colors"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold text-gray-900">
                    {requerimento.titulo}
                  </h2>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      requerimento.status === "PENDENTE"
                        ? "bg-yellow-100 text-yellow-800"
                        : requerimento.status === "EM_ANALISE"
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
                    <FiTag className="mr-2 text-indigo-600" />
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                      {requerimento.categoria.replace("_", " ")}
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
