export interface Requerimento {
  id: number;
  titulo: string;
  descricao: string;
  dataCriacao: string;
  status: "PENDENTE" | "ANALISE" | "APROVADO" | "REJEITADO";
  categoria: string;
}
