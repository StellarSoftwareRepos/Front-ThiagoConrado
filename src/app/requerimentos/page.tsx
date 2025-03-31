export default function Requerimentos() {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      {/* Cabeçalho */}
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Requerimentos e Projetos</h1>
        <p className="text-xl text-gray-600">
          Acompanhe as propostas e projetos em tramitação
        </p>
      </section>

      {/* Estatísticas */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { titulo: "Total de Projetos", valor: "45" },
          { titulo: "Aprovados", valor: "32" },
          { titulo: "Em Tramitação", valor: "13" },
        ].map((stat, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg text-center"
          >
            <h3 className="text-xl font-bold mb-2">{stat.titulo}</h3>
            <p className="text-3xl font-bold text-blue-900">{stat.valor}</p>
          </div>
        ))}
      </section>

      {/* Filtros */}
      <section className="bg-white p-6 rounded-lg shadow-lg">
        <div className="flex flex-wrap gap-4 justify-center">
          {["Todos", "Aprovados", "Em Tramitação", "Arquivados"].map(
            (status, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full ${
                  index === 0
                    ? "bg-blue-900 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {status}
              </button>
            )
          )}
        </div>
      </section>

      {/* Lista de Requerimentos */}
      <section className="space-y-8">
        {[
          {
            numero: "REQ-001/2024",
            titulo: "Iluminação Pública",
            tipo: "Requerimento",
            status: "Aprovado",
            data: "20/03/2024",
            descricao:
              "Solicitação de estudo para instalação de iluminação LED em vias públicas.",
            votacao: "Unânime",
          },
          {
            numero: "PL-002/2024",
            titulo: "Programa de Educação Digital",
            tipo: "Projeto de Lei",
            status: "Em Tramitação",
            data: "18/03/2024",
            descricao:
              "Criação de programa para inclusão digital nas escolas municipais.",
            votacao: "Em Análise",
          },
          {
            numero: "REQ-003/2024",
            titulo: "Pavimentação de Ruas",
            tipo: "Requerimento",
            status: "Aprovado",
            data: "15/03/2024",
            descricao:
              "Solicitação de pavimentação asfáltica em vias do bairro central.",
            votacao: "Unânime",
          },
          {
            numero: "PL-004/2024",
            titulo: "Centro Cultural",
            tipo: "Projeto de Lei",
            status: "Em Tramitação",
            data: "12/03/2024",
            descricao:
              "Criação do centro cultural municipal com biblioteca e salas de aula.",
            votacao: "Em Análise",
          },
        ].map((req, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-semibold text-blue-900">
                    {req.numero}
                  </span>
                  <span className="text-sm bg-gray-100 text-gray-700 px-2 py-1 rounded">
                    {req.tipo}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-2">{req.titulo}</h3>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-sm ${
                  req.status === "Aprovado"
                    ? "bg-green-100 text-green-800"
                    : "bg-yellow-100 text-yellow-800"
                }`}
              >
                {req.status}
              </span>
            </div>
            <p className="text-gray-600 mb-4">{req.descricao}</p>
            <div className="flex justify-between items-center text-sm text-gray-500">
              <div className="flex gap-4">
                <span>Data: {req.data}</span>
                <span>Votação: {req.votacao}</span>
              </div>
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
