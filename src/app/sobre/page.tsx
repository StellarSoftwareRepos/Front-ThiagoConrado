"use client";

import { FiAward, FiUsers, FiTarget, FiHeart } from "react-icons/fi";

export default function Sobre() {
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
            Sobre o Vereador
          </h1>
          <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
            Conheça a história, os valores e o compromisso do vereador Thiago
            Conrado com nossa cidade.
          </p>
        </div>
      </div>

      {/* Biografia */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Biografia</h2>
            <div className="prose prose-lg text-gray-600">
              <p>
                Thiago Conrado nasceu e cresceu em São Paulo, onde desenvolveu
                desde cedo um forte compromisso com a comunidade local. Formado
                em Direito pela Universidade de São Paulo, dedicou sua carreira
                profissional à advocacia pública e à defesa dos direitos dos
                cidadãos.
              </p>
              <p>
                Sua trajetória política começou com o engajamento em movimentos
                sociais e comunitários, onde pôde conhecer de perto as
                necessidades e anseios da população. Em 2020, foi eleito
                vereador com uma proposta clara de transformação social e
                desenvolvimento sustentável.
              </p>
              <p>
                Como vereador, tem se destacado por sua atuação em defesa da
                educação, saúde, infraestrutura e desenvolvimento social. Suas
                principais bandeiras incluem a melhoria da qualidade de vida dos
                cidadãos, o fortalecimento das políticas públicas e a promoção
                da transparência na gestão municipal.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden">
              <img
                src="https://eleicoes2024candidatosapi.otempo.com.br/api/photo/2024/FCE60002010287_div.jpg"
                alt="Vereador Thiago Conrado"
                className="object-contain w-full h-[26rem]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Valores e Princípios */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Valores e Princípios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <FiAward className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Excelência
              </h3>
              <p className="text-gray-600">
                Compromisso com a qualidade e eficiência em todas as ações e
                projetos.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <FiUsers className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Participação
              </h3>
              <p className="text-gray-600">
                Valorização da participação popular e do diálogo com a
                sociedade.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <FiTarget className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Transparência
              </h3>
              <p className="text-gray-600">
                Compromisso com a transparência e prestação de contas à
                sociedade.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <FiHeart className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Compromisso
              </h3>
              <p className="text-gray-600">
                Dedicação total ao bem-estar e desenvolvimento da cidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-indigo-600 rounded-2xl p-8 md:p-12">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Quer conhecer mais sobre nosso trabalho?
            </h2>
            <p className="mt-4 text-lg text-indigo-100">
              Acompanhe nossas ações e projetos através das redes sociais.
            </p>
            <div className="mt-8 flex justify-center space-x-4">
              <a
                href="#"
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
              >
                Instagram
              </a>
              <a
                href="#"
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
              >
                Facebook
              </a>
              <a
                href="#"
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
              >
                YouTube
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
