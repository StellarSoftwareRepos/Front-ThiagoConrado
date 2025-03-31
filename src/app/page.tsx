import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative h-[500px] bg-blue-900 text-white rounded-lg overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Trabalhando pelo Povo
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Compromisso com a transparência e resultados
            </p>
            <a
              href="/sobre"
              className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-100 transition-colors"
            >
              Conheça o Trabalho
            </a>
          </div>
        </div>
      </section>

      {/* Feitos Recentes */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">Feitos Recentes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              titulo: "Reforma da Praça Central",
              descricao:
                "Projeto aprovado para revitalização completa da praça principal",
              data: "15/03/2024",
            },
            {
              titulo: "Programa de Educação",
              descricao:
                "Iniciativa para melhorar a qualidade do ensino municipal",
              data: "10/03/2024",
            },
            {
              titulo: "Saúde Pública",
              descricao: "Novo centro de saúde inaugurado no bairro",
              data: "05/03/2024",
            },
          ].map((feito, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-bold mb-2">{feito.titulo}</h3>
              <p className="text-gray-600 mb-4">{feito.descricao}</p>
              <p className="text-sm text-gray-500">{feito.data}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Requerimentos Aprovados */}
      <section className="bg-gray-50 py-12 rounded-lg">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Requerimentos Aprovados
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              numero: "REQ-001/2024",
              assunto: "Iluminação Pública",
              status: "Aprovado",
              data: "20/03/2024",
            },
            {
              numero: "REQ-002/2024",
              assunto: "Pavimentação de Ruas",
              status: "Aprovado",
              data: "18/03/2024",
            },
          ].map((req, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold">{req.assunto}</h3>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                  {req.status}
                </span>
              </div>
              <p className="text-gray-600 mb-2">Número: {req.numero}</p>
              <p className="text-gray-500">Data: {req.data}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Notícias Recentes */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">
          Últimas Notícias
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              titulo: "Vereador participa de audiência pública",
              resumo: "Discussão sobre melhorias na infraestrutura da cidade",
              data: "25/03/2024",
            },
            {
              titulo: "Novo projeto de lei apresentado",
              resumo: "Proposta visa melhorar a qualidade de vida dos cidadãos",
              data: "22/03/2024",
            },
          ].map((noticia, index) => (
            <article
              key={index}
              className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-bold mb-2">{noticia.titulo}</h3>
              <p className="text-gray-600 mb-4">{noticia.resumo}</p>
              <p className="text-sm text-gray-500">{noticia.data}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
