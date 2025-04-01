"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { FiArrowLeft, FiSave, FiX } from "react-icons/fi";

export default function CadastroRequerimentos() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    titulo: "",
    descricao: "",
    dataCriacao: "",
    status: "PENDENTE",
    categoria: "INFRAESTRUTURA",
  });

  const categorias = [
    "INFRAESTRUTURA",
    "SAUDE",
    "EDUCACAO",
    "SEGURANCA",
    "CULTURA",
    "ESPORTE",
    "ASSISTENCIA_SOCIAL",
    "OUTROS",
  ];

  const status = ["PENDENTE", "EM_ANALISE", "APROVADO", "REJEITADO"];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        router.push("/admin/login");
        return;
      }

      const response = await fetch("http://localhost:8080/api/requerimentos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          ...formData,
          dataCriacao: new Date(formData.dataCriacao).toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error("Erro ao cadastrar requerimento");
      }

      toast.success("Requerimento cadastrado com sucesso!");
      setFormData({
        titulo: "",
        descricao: "",
        dataCriacao: "",
        status: "PENDENTE",
        categoria: "INFRAESTRUTURA",
      });
      router.push("/admin/requerimentos");
    } catch (error) {
      toast.error("Erro ao cadastrar requerimento");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="px-6 py-8 sm:px-10">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center">
                <button
                  onClick={() => router.push("/admin/requerimentos")}
                  className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <FiArrowLeft className="mr-2" />
                  Voltar
                </button>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">
                Cadastro de Requerimentos
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="titulo"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Título
                  </label>
                  <input
                    type="text"
                    id="titulo"
                    value={formData.titulo}
                    onChange={(e) =>
                      setFormData({ ...formData, titulo: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                    placeholder="Digite o título do requerimento"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="descricao"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Descrição
                  </label>
                  <textarea
                    id="descricao"
                    value={formData.descricao}
                    onChange={(e) =>
                      setFormData({ ...formData, descricao: e.target.value })
                    }
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Descreva o requerimento"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="dataCriacao"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Data de Criação
                  </label>
                  <input
                    type="datetime-local"
                    id="dataCriacao"
                    value={formData.dataCriacao}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        dataCriacao: e.target.value,
                      })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="status"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Status
                  </label>
                  <select
                    id="status"
                    value={formData.status}
                    onChange={(e) =>
                      setFormData({ ...formData, status: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 bg-white"
                  >
                    {status.map((s) => (
                      <option key={s} value={s}>
                        {s.replace("_", " ")}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="categoria"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Categoria
                  </label>
                  <select
                    id="categoria"
                    value={formData.categoria}
                    onChange={(e) =>
                      setFormData({ ...formData, categoria: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 bg-white"
                  >
                    {categorias.map((categoria) => (
                      <option key={categoria} value={categoria}>
                        {categoria.replace("_", " ")}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
                <button
                  type="button"
                  onClick={() => router.push("/admin/requerimentos")}
                  className="flex items-center px-6 py-3 border border-gray-300 rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200"
                >
                  <FiX className="mr-2" />
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center px-6 py-3 border border-transparent rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <FiSave className="mr-2" />
                  {loading ? "Cadastrando..." : "Cadastrar"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
