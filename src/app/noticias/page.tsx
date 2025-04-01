"use client";

import { useEffect, useState } from "react";
import { FiCalendar } from "react-icons/fi";
import { noticias as noticiasMock } from "@/data/mockData";

interface Noticia {
  id: number;
  titulo: string;
  conteudo: string;
  dataPublicacao: string;
  imagemUrl: string;
}

export default function Noticias() {
  const [noticias, setNoticias] = useState<Noticia[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simular carregamento
    setTimeout(() => {
      setNoticias(noticiasMock);
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
      {/* Header */}
      <div className="relative bg-indigo-600 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-indigo-800 opacity-90"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-20"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Notícias
          </h1>
          <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
            Acompanhe as últimas notícias e atualizações sobre nosso trabalho na
            Câmara Municipal.
          </p>
        </div>
      </div>

      {/* Notícias Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {noticias.map((noticia) => (
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
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  {noticia.titulo}
                </h2>
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
      </div>
    </div>
  );
}
