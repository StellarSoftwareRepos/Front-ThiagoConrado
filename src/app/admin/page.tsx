"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FiFileText, FiCheckSquare, FiAlertCircle } from "react-icons/fi";

interface DashboardStats {
  totalNoticias: number;
  totalRequerimentos: number;
  totalFeitos: number;
  requerimentosPendentes: number;
}

export default function Dashboard() {
  const router = useRouter();
  const [stats, setStats] = useState<DashboardStats>({
    totalNoticias: 0,
    totalRequerimentos: 0,
    totalFeitos: 0,
    requerimentosPendentes: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // const token = localStorage.getItem("token");
        // if (!token) {
        //   router.push("/admin/login");
        //   return;
        // }

        const [noticiasRes, requerimentosRes, feitosRes] = await Promise.all([
          fetch("http://localhost:8080/api/noticias", {
            headers: { Authorization: `Bearer ${token}` },
          }),
          fetch("http://localhost:8080/api/requerimentos", {
            headers: { Authorization: `Bearer ${token}` },
          }),
          fetch("http://localhost:8080/api/feitos", {
            headers: { Authorization: `Bearer ${token}` },
          }),
        ]);

        if (!noticiasRes.ok || !requerimentosRes.ok || !feitosRes.ok) {
          throw new Error("Erro ao carregar estatísticas");
        }

        const [noticias, requerimentos, feitos] = await Promise.all([
          noticiasRes.json(),
          requerimentosRes.json(),
          feitosRes.json(),
        ]);

        setStats({
          totalNoticias: noticias.length,
          totalRequerimentos: requerimentos.length,
          totalFeitos: feitos.length,
          requerimentosPendentes: requerimentos.filter(
            (r: any) => r.status === "PENDENTE"
          ).length,
        });
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card de Notícias */}
        <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">
                Total de Notícias
              </p>
              <p className="text-2xl font-semibold text-gray-900">
                {stats.totalNoticias}
              </p>
            </div>
            <div className="p-3 bg-blue-50 rounded-full">
              <FiFileText className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        {/* Card de Requerimentos */}
        <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">
                Total de Requerimentos
              </p>
              <p className="text-2xl font-semibold text-gray-900">
                {stats.totalRequerimentos}
              </p>
            </div>
            <div className="p-3 bg-green-50 rounded-full">
              <FiFileText className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        {/* Card de Requerimentos Pendentes */}
        <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">
                Requerimentos Pendentes
              </p>
              <p className="text-2xl font-semibold text-gray-900">
                {stats.requerimentosPendentes}
              </p>
            </div>
            <div className="p-3 bg-yellow-50 rounded-full">
              <FiAlertCircle className="w-6 h-6 text-yellow-600" />
            </div>
          </div>
        </div>

        {/* Card de Feitos */}
        <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">
                Total de Feitos
              </p>
              <p className="text-2xl font-semibold text-gray-900">
                {stats.totalFeitos}
              </p>
            </div>
            <div className="p-3 bg-purple-50 rounded-full">
              <FiCheckSquare className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Ações Rápidas */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Ações Rápidas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button
            onClick={() => router.push("/admin/noticias")}
            className="flex items-center justify-center px-4 py-2 border border-transparent rounded-lg text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Nova Notícia
          </button>
          <button
            onClick={() => router.push("/admin/requerimentos")}
            className="flex items-center justify-center px-4 py-2 border border-transparent rounded-lg text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Novo Requerimento
          </button>
          <button
            onClick={() => router.push("/admin/feitos")}
            className="flex items-center justify-center px-4 py-2 border border-transparent rounded-lg text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
          >
            Novo Feito
          </button>
        </div>
      </div>
    </div>
  );
}
