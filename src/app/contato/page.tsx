export default function Contato() {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      {/* Cabeçalho */}
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Entre em Contato</h1>
        <p className="text-xl text-gray-600">Estamos aqui para ouvir você</p>
      </section>

      {/* Informações de Contato */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Informações de Contato</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <svg
                className="w-6 h-6 text-blue-900 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <div>
                <h3 className="font-bold mb-1">Endereço</h3>
                <p>Câmara Municipal</p>
                <p>Rua da Câmara, 123</p>
                <p>Cidade - Estado</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <svg
                className="w-6 h-6 text-blue-900 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <div>
                <h3 className="font-bold mb-1">Email</h3>
                <p>contato@vereador.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <svg
                className="w-6 h-6 text-blue-900 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <div>
                <h3 className="font-bold mb-1">Telefone</h3>
                <p>(XX) XXXX-XXXX</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <svg
                className="w-6 h-6 text-blue-900 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div>
                <h3 className="font-bold mb-1">Horário de Atendimento</h3>
                <p>Segunda a Sexta: 9h às 17h</p>
                <p>Sábado: 9h às 12h</p>
                <p>Domingo: Fechado</p>
              </div>
            </div>
          </div>
        </div>

        {/* Formulário de Contato */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Envie sua Mensagem</h2>
          <form className="space-y-6">
            <div>
              <label
                htmlFor="nome"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Nome Completo
              </label>
              <input
                type="text"
                id="nome"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                placeholder="Seu nome"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                placeholder="seu@email.com"
              />
            </div>
            <div>
              <label
                htmlFor="assunto"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Assunto
              </label>
              <select
                id="assunto"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
              >
                <option value="">Selecione um assunto</option>
                <option value="sugestao">Sugestão</option>
                <option value="reclamacao">Reclamação</option>
                <option value="elogio">Elogio</option>
                <option value="outro">Outro</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="mensagem"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Mensagem
              </label>
              <textarea
                id="mensagem"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                placeholder="Sua mensagem"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>
      </section>

      {/* Mapa */}
      <section className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Localização</h2>
        <div className="h-[400px] bg-gray-200 rounded-lg">
          {/* Aqui você pode adicionar um mapa (Google Maps, por exemplo) */}
          <div className="w-full h-full flex items-center justify-center text-gray-500">
            Mapa será carregado aqui
          </div>
        </div>
      </section>
    </div>
  );
}
