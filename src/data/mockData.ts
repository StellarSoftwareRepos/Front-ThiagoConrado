import { Noticia, Requerimento, Feito } from "@/types";

export const noticias: Noticia[] = [
  {
    id: 1,
    titulo: "Vereador Thiago Conrado propõe projeto de revitalização do centro",
    conteudo:
      "O vereador Thiago Conrado apresentou um projeto de lei para revitalização do centro da cidade, incluindo melhorias na infraestrutura e criação de espaços culturais.",
    dataPublicacao: "2024-03-15",
    imagemUrl:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  },
  {
    id: 2,
    titulo: "Programa de educação ambiental é lançado nas escolas",
    conteudo:
      "Em parceria com a secretaria de educação, o vereador lançou um programa de educação ambiental que será implementado em todas as escolas municipais.",
    dataPublicacao: "2024-03-10",
    imagemUrl:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  },
  {
    id: 3,
    titulo: "Audiência pública discute melhorias no transporte público",
    conteudo:
      "Uma audiência pública foi realizada para discutir melhorias no sistema de transporte público da cidade, com participação de representantes da sociedade civil.",
    dataPublicacao: "2024-03-05",
    imagemUrl:
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  },
];

export const requerimentos: Requerimento[] = [
  {
    id: 1,
    titulo: "Solicitação de iluminação pública",
    descricao:
      "Requerimento para instalação de iluminação pública na rua das Flores, bairro Jardim América.",
    dataCriacao: "2024-03-15",
    status: "PENDENTE",
    categoria: "INFRAESTRUTURA",
  },
  {
    id: 2,
    titulo: "Projeto de revitalização de praça",
    descricao:
      "Proposta de revitalização da Praça Central, incluindo instalação de equipamentos de lazer e melhorias na infraestrutura.",
    dataCriacao: "2024-03-10",
    status: "ANALISE",
    categoria: "CULTURA",
  },
  {
    id: 3,
    titulo: "Criação de centro de saúde",
    descricao:
      "Solicitação para criação de um novo centro de saúde no bairro Vila Nova.",
    dataCriacao: "2024-03-05",
    status: "APROVADO",
    categoria: "SAUDE",
  },
];

export const feitos: Feito[] = [
  {
    id: 1,
    titulo: "Reforma da biblioteca municipal",
    descricao:
      "Conclusão da reforma e modernização da biblioteca municipal, incluindo novo acervo e espaço para eventos culturais.",
    dataRealizacao: "2024-03-15",
    categoria: "CULTURA",
    imagemUrl:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  },
  {
    id: 2,
    titulo: "Programa de capacitação profissional",
    descricao:
      "Implementação de programa de capacitação profissional para jovens em situação de vulnerabilidade social.",
    dataRealizacao: "2024-03-10",
    categoria: "EDUCACAO",
    imagemUrl:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  },
  {
    id: 3,
    titulo: "Campanha de vacinação",
    descricao:
      "Organização e realização de campanha de vacinação em parceria com a secretaria de saúde.",
    dataRealizacao: "2024-03-05",
    categoria: "SAUDE",
    imagemUrl:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  },
];
