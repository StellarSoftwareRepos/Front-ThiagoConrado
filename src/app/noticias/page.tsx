export default function Noticias() {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      {/* Cabeçalho */}
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Notícias e Eventos</h1>
        <p className="text-xl text-gray-600">
          Fique por dentro das últimas novidades e atividades
        </p>
      </section>

      {/* Destaque */}
      <section className="bg-white p-6 rounded-lg shadow-lg">
        <div className="relative h-[400px] rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative h-full flex items-center justify-center text-center text-white px-4">
            <div>
              <span className="bg-blue-900 text-white px-3 py-1 rounded-full text-sm mb-4 inline-block">
                Destaque
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Vereador participa de audiência pública sobre educação
              </h2>
              <p className="text-xl mb-8">
                Discussão sobre melhorias na infraestrutura das escolas
                municipais
              </p>
              <button className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-100 transition-colors">
                Ler Mais
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Filtros */}
      <section className="bg-white p-6 rounded-lg shadow-lg">
        <div className="flex flex-wrap gap-4 justify-center">
          {["Todas", "Eventos", "Audiências", "Projetos", "Entrevistas"].map(
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

      {/* Lista de Notícias */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          {
            titulo: "Novo projeto de lei apresentado",
            categoria: "Projetos",
            data: "25/03/2024",
            resumo:
              "Proposta visa melhorar a qualidade de vida dos cidadãos através de iniciativas sustentáveis.",
            imagem: "/placeholder.jpg",
          },
          {
            titulo: "Entrevista na Rádio Municipal",
            categoria: "Entrevistas",
            data: "22/03/2024",
            resumo:
              "Vereador fala sobre os principais projetos em andamento e próximos passos.",
            imagem: "/placeholder.jpg",
          },
          {
            titulo: "Audiência Pública sobre Saúde",
            categoria: "Audiências",
            data: "20/03/2024",
            resumo: "Discussão sobre melhorias no sistema de saúde municipal.",
            imagem: "/placeholder.jpg",
          },
          {
            titulo: "Inauguração do Centro Cultural",
            categoria: "Eventos",
            data: "18/03/2024",
            resumo:
              "Novo espaço cultural é inaugurado com presença do vereador.",
            imagem: "/placeholder.jpg",
          },
        ].map((noticia, index) => (
          <article
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div className="h-48 bg-gray-200"></div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm font-semibold text-blue-900">
                  {noticia.categoria}
                </span>
                <span className="text-sm text-gray-500">{noticia.data}</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{noticia.titulo}</h3>
              <p className="text-gray-600 mb-4">{noticia.resumo}</p>
              <button className="text-blue-900 hover:text-blue-700 font-semibold">
                Ler Mais →
              </button>
            </div>
          </article>
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
