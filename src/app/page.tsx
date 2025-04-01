"use client";

import { useEffect, useState } from "react";
import { FiCalendar, FiTag, FiFileText } from "react-icons/fi";
import {
  noticias as noticiasMock,
  requerimentos as requerimentosMock,
  feitos as feitosMock,
} from "@/data/mockData";

interface Noticia {
  id: number;
  titulo: string;
  conteudo: string;
  dataPublicacao: string;
  imagemUrl: string;
}

interface Requerimento {
  id: number;
  titulo: string;
  descricao: string;
  dataCriacao: string;
  status: string;
  categoria: string;
}

interface Feito {
  id: number;
  titulo: string;
  descricao: string;
  dataRealizacao: string;
  categoria: string;
  imagemUrl: string;
}

export default function Home() {
  const [noticias, setNoticias] = useState<Noticia[]>([]);
  const [requerimentos, setRequerimentos] = useState<Requerimento[]>([]);
  const [feitos, setFeitos] = useState<Feito[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simular carregamento
    setTimeout(() => {
      setNoticias(noticiasMock);
      setRequerimentos(requerimentosMock);
      setFeitos(feitosMock);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-indigo-600 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-indigo-800 opacity-90"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-20"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Vereador Thiago Conrado
          </h1>
          <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
            Trabalhando por uma cidade melhor para todos. Acompanhe nossas
            ações, projetos e realizações.
          </p>
          <div className="mt-10 flex space-x-4">
            <a
              href="/sobre"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
            >
              Conheça o Vereador
            </a>
            <a
              href="/contato"
              className="inline-flex items-center px-6 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-indigo-600"
            >
              Fale Conosco
            </a>
          </div>
        </div>
      </div>

      {/* Últimas Notícias */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Últimas Notícias</h2>
          <a
            href="/noticias"
            className="text-indigo-600 hover:text-indigo-500 font-medium"
          >
            Ver todas →
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {noticias.slice(0, 3).map((noticia) => (
            <article
              key={noticia.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-indigo-500 transition-colors"
            >
              {noticia.imagemUrl && (
                <img
                  src={noticia.imagemUrl}
                  alt={noticia.titulo}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {noticia.titulo}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {noticia.conteudo}
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <FiCalendar className="mr-2" />
                  {new Date(noticia.dataPublicacao).toLocaleDateString("pt-BR")}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Feitos Recentes */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Feitos Recentes
            </h2>
            <a
              href="/feitos"
              className="text-indigo-600 hover:text-indigo-500 font-medium"
            >
              Ver todos →
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {feitos.slice(0, 3).map((feito) => (
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
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feito.titulo}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {feito.descricao}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <FiCalendar className="mr-2" />
                      {new Date(feito.dataRealizacao).toLocaleDateString(
                        "pt-BR"
                      )}
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
      </section>

      {/* Requerimentos em Destaque */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Requerimentos em Destaque
          </h2>
          <a
            href="/requerimentos"
            className="text-indigo-600 hover:text-indigo-500 font-medium"
          >
            Ver todos →
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {requerimentos.slice(0, 3).map((requerimento) => (
            <article
              key={requerimento.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-indigo-500 transition-colors"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {requerimento.titulo}
                  </h3>
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
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-600">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Quer fazer uma solicitação ou tem alguma dúvida?
            </h2>
            <p className="mt-4 text-lg text-indigo-100">
              Entre em contato conosco através do formulário de contato.
            </p>
            <div className="mt-8">
              <a
                href="/contato"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
              >
                Fale Conosco
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
