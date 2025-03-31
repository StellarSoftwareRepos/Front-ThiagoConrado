export default function Feitos() {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      {/* Cabeçalho */}
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Feitos e Realizações</h1>
        <p className="text-xl text-gray-600">
          Conheça as principais conquistas para nossa cidade
        </p>
      </section>

      {/* Filtros */}
      <section className="bg-white p-6 rounded-lg shadow-lg">
        <div className="flex flex-wrap gap-4 justify-center">
          {["Todos", "Educação", "Saúde", "Infraestrutura", "Cultura"].map(
            (categoria, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full ${
                  index === 0
                    ? "bg-blue-900 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {categoria}
              </button>
            )
          )}
        </div>
      </section>

      {/* Lista de Feitos */}
      <section className="space-y-8">
        {[
          {
            titulo: "Reforma da Praça Central",
            categoria: "Infraestrutura",
            descricao:
              "Projeto aprovado para revitalização completa da praça principal, incluindo nova iluminação, bancos e área de lazer.",
            data: "15/03/2024",
            status: "Em Andamento",
          },
          {
            titulo: "Programa de Educação Digital",
            categoria: "Educação",
            descricao:
              "Iniciativa que levou computadores e internet de alta velocidade para todas as escolas municipais.",
            data: "10/03/2024",
            status: "Concluído",
          },
          {
            titulo: "Novo Centro de Saúde",
            categoria: "Saúde",
            descricao:
              "Inauguração do novo centro de saúde no bairro, com atendimento especializado e exames laboratoriais.",
            data: "05/03/2024",
            status: "Concluído",
          },
          {
            titulo: "Festival de Cultura Popular",
            categoria: "Cultura",
            descricao:
              "Criação do festival anual que celebra as tradições locais e promove artistas da região.",
            data: "01/03/2024",
            status: "Em Andamento",
          },
        ].map((feito, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold mb-2">{feito.titulo}</h3>
                <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  {feito.categoria}
                </span>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-sm ${
                  feito.status === "Concluído"
                    ? "bg-green-100 text-green-800"
                    : "bg-yellow-100 text-yellow-800"
                }`}
              >
                {feito.status}
              </span>
            </div>
            <p className="text-gray-600 mb-4">{feito.descricao}</p>
            <div className="flex justify-between items-center text-sm text-gray-500">
              <span>Data: {feito.data}</span>
              <button className="text-blue-900 hover:text-blue-700 font-semibold">
                Ver Detalhes →
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* Paginação */}
      <section className="flex justify-center gap-2">
        {[1, 2, 3].map((page) => (
          <button
            key={page}
            className={`w-10 h-10 rounded-full ${
              page === 1
                ? "bg-blue-900 text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {page}
          </button>
        ))}
      </section>
    </div>
  );
}
