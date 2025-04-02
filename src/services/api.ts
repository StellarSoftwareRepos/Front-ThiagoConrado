import { Noticia, Requerimento, Feito } from "@/types";

const API_URL = "http://localhost:8080/api";

export const api = {
  async getNoticias(): Promise<Noticia[]> {
    const response = await fetch(`${API_URL}/noticias`);
    if (!response.ok) throw new Error("Erro ao buscar notícias");
    return response.json();
  },

  async getRequerimentos(): Promise<Requerimento[]> {
    const response = await fetch(`${API_URL}/requerimentos`);
    if (!response.ok) throw new Error("Erro ao buscar requerimentos");
    return response.json();
  },

  async getFeitos(): Promise<Feito[]> {
    const response = await fetch(`${API_URL}/feitos`);
    if (!response.ok) throw new Error("Erro ao buscar feitos");
    return response.json();
  },

  async createRequerimento(
    data: Omit<Requerimento, "id">
  ): Promise<Requerimento> {
    const response = await fetch(`${API_URL}/requerimentos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error("Erro ao criar requerimento");
    return response.json();
  },
};
