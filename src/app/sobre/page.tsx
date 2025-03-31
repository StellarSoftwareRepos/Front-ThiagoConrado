export default function Sobre() {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      {/* Cabeçalho */}
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Sobre o Vereador</h1>
        <p className="text-xl text-gray-600">
          Conheça a história e o compromisso com a cidade
        </p>
      </section>

      {/* Biografia */}
      <section className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Biografia</h2>
        <div className="prose max-w-none">
          <p className="mb-4">
            Nascido e criado em nossa cidade, o vereador tem uma longa
            trajetória de dedicação ao serviço público. Formado em Direito pela
            Universidade Federal, iniciou sua carreira política como assessor
            parlamentar, onde desenvolveu profundo conhecimento sobre as
            necessidades da população.
          </p>
          <p className="mb-4">
            Em 2020, foi eleito vereador com uma votação expressiva,
            demonstrando a confiança que a população deposita em seu trabalho.
            Desde então, tem se dedicado incansavelmente a apresentar e aprovar
            projetos que beneficiam diretamente a comunidade.
          </p>
          <p>
            Seu mandato é pautado pela transparência, diálogo com a população e
            compromisso com resultados concretos para a cidade.
          </p>
        </div>
      </section>

      {/* Principais Bandas */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Principais Bandas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              titulo: "Educação",
              descricao:
                "Defesa de investimentos em educação pública e qualidade do ensino",
            },
            {
              titulo: "Saúde",
              descricao:
                "Melhorias na infraestrutura e atendimento do sistema de saúde",
            },
            {
              titulo: "Infraestrutura",
              descricao: "Desenvolvimento urbano e melhorias na mobilidade",
            },
            {
              titulo: "Cultura",
              descricao:
                "Fomento às atividades culturais e preservação do patrimônio",
            },
          ].map((banda, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-bold mb-2">{banda.titulo}</h3>
              <p className="text-gray-600">{banda.descricao}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Compromissos */}
      <section className="bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-6">
          Compromissos com a População
        </h2>
        <ul className="space-y-4">
          {[
            "Transparência total na atuação parlamentar",
            "Participação popular nas decisões",
            "Fiscalização eficiente do poder executivo",
            "Projetos baseados em dados e evidências",
            "Atendimento personalizado aos cidadãos",
          ].map((compromisso, index) => (
            <li key={index} className="flex items-center">
              <svg
                className="w-6 h-6 text-green-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>{compromisso}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Contato */}
      <section className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6">Entre em Contato</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Informações de Contato</h3>
            <p className="mb-2">Email: contato@vereador.com</p>
            <p className="mb-2">Telefone: (XX) XXXX-XXXX</p>
            <p>Endereço: Câmara Municipal - Sala 123</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Horário de Atendimento</h3>
            <p className="mb-2">Segunda a Sexta: 9h às 17h</p>
            <p className="mb-2">Sábado: 9h às 12h</p>
            <p>Domingo: Fechado</p>
          </div>
        </div>
      </section>
    </div>
  );
}
