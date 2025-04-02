"use client";

import { useEffect, useState } from "react";
import {
  FiCalendar,
  FiTag,
  FiFileText,
  FiUser,
  FiAward,
  FiBookOpen,
  FiMail,
} from "react-icons/fi";
import {
  noticias as noticiasMock,
  requerimentos as requerimentosMock,
  feitos as feitosMock,
} from "@/data/mockData";
import { Noticia, Requerimento, Feito } from "@/types";
import { useLoading } from "@/hooks/useLoading";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { STATS } from "@/constants";

export default function Home() {
  const [noticias, setNoticias] = useState<Noticia[]>([]);
  const [requerimentos, setRequerimentos] = useState<Requerimento[]>([]);
  const [feitos, setFeitos] = useState<Feito[]>([]);
  const loading = useLoading();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));

        setNoticias(noticiasMock);
        setRequerimentos(requerimentosMock);
        setFeitos(feitosMock);
      } catch (error) {
        console.error("Erro ao carregar dados:", error);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="relative bg-gradient-to-br from-primary via-primary-dark to-primary-light overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent"></div>
        </div>
        <div className="relative max-w-7xl mx-auto py-32 px-4 sm:py-40 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-8">
              <span className="text-white text-sm font-medium">
                Vereador Eleito
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 animate-fade-in">
              Vereador Thiago Conrado
            </h1>
            <p
              className="mt-6 text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed animate-fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Trabalhando por uma cidade melhor para todos. Acompanhe nossas
              ações, projetos e realizações.
            </p>
            <div
              className="mt-10 flex flex-col sm:flex-row justify-center gap-4 animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <Button href="#sobre" variant="primary" icon="user">
                Conheça o Vereador
              </Button>
              <Button href="/contato" variant="secondary" icon="mail">
                Fale Conosco
              </Button>
            </div>
            <div
              className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto animate-fade-in"
              style={{ animationDelay: "0.6s" }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">
                  {STATS.anosExperiencia}+
                </div>
                <div className="text-white/80 text-sm">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">
                  {STATS.projetosRealizados}+
                </div>
                <div className="text-white/80 text-sm">Projetos Realizados</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">
                  {STATS.cidadaosAtendidos}+
                </div>
                <div className="text-white/80 text-sm">Cidadãos Atendidos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">
                  {STATS.disponibilidade}
                </div>
                <div className="text-white/80 text-sm">Disponibilidade</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="sobre" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Sobre o Vereador
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Thiago Conrado é um vereador comprometido com o desenvolvimento
                da nossa cidade. Com uma trajetória dedicada ao serviço público,
                busca constantemente melhorar a qualidade de vida dos cidadãos.
              </p>
              <div className="mt-8 space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <FiUser className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      Experiência
                    </h3>
                    <p className="mt-2 text-gray-600">
                      Mais de 10 anos de experiência em gestão pública e
                      desenvolvimento de políticas sociais.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <FiAward className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      Compromisso
                    </h3>
                    <p className="mt-2 text-gray-600">
                      Dedicação total ao trabalho legislativo e à representação
                      dos interesses da população.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <FiFileText className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      Projetos
                    </h3>
                    <p className="mt-2 text-gray-600">
                      Desenvolvimento de projetos voltados para educação, saúde,
                      infraestrutura e desenvolvimento social.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <div className="relative">
                <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden">
                  <img
                    src="/Vereador_Thiago.jpg"
                    alt="Vereador Thiago Conrado"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Últimas Notícias</h2>
          <a
            href="/noticias"
            className="text-indigo-600 hover:text-indigo-500 font-medium transition-colors duration-200"
          >
            Ver todas →
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {noticias.slice(0, 3).map((noticia) => (
            <article
              key={noticia.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-indigo-500 transition-all duration-200 shadow-modern hover-lift"
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

      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Feitos Recentes
            </h2>
            <a
              href="/feitos"
              className="text-indigo-600 hover:text-indigo-500 font-medium transition-colors duration-200"
            >
              Ver todos →
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {feitos.slice(0, 3).map((feito) => (
              <article
                key={feito.id}
                className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-indigo-500 transition-all duration-200 shadow-modern hover-lift"
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

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Requerimentos em Destaque
          </h2>
          <a
            href="/requerimentos"
            className="text-indigo-600 hover:text-indigo-500 font-medium transition-colors duration-200"
          >
            Ver todos →
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {requerimentos.slice(0, 3).map((requerimento) => (
            <article
              key={requerimento.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-indigo-500 transition-all duration-200 shadow-modern hover-lift"
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

      <section className="bg-indigo-600">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">Pronto para fazer a diferença?</span>
            <span className="block text-indigo-200">
              Entre em contato conosco.
            </span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="/contato"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-lg text-indigo-600 bg-white hover:bg-indigo-50 transition-colors duration-200"
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
