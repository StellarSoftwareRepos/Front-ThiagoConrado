"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FiHome, FiFileText, FiCheckSquare, FiLogOut } from "react-icons/fi";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (!token) {
  //     router.push("/admin/login");
  //     return;
  //   }
  //   setIsAuthenticated(true);
  // }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/admin/login");
  };

  if (!isAuthenticated) {
    return null;
  }

  const menuItems = [
    {
      title: "Dashboard",
      path: "/admin",
      icon: FiHome,
    },
    {
      title: "Notícias",
      path: "/admin/noticias",
      icon: FiFileText,
    },
    {
      title: "Requerimentos",
      path: "/admin/requerimentos",
      icon: FiFileText,
    },
    {
      title: "Feitos",
      path: "/admin/feitos",
      icon: FiCheckSquare,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 min-h-screen bg-white shadow-lg">
          <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-800">Painel Admin</h1>
          </div>
          <nav className="mt-6">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.path;
              return (
                <button
                  key={item.path}
                  onClick={() => router.push(item.path)}
                  className={`flex items-center w-full px-6 py-3 text-gray-700 hover:bg-gray-50 transition-colors ${
                    isActive ? "bg-indigo-50 text-indigo-600" : ""
                  }`}
                >
                  <Icon className="w-5 h-5 mr-3" />
                  {item.title}
                </button>
              );
            })}
          </nav>
          <div className="absolute bottom-0 w-64 p-4">
            <button
              onClick={handleLogout}
              className="flex items-center w-full px-6 py-3 text-red-600 hover:bg-red-50 transition-colors"
            >
              <FiLogOut className="w-5 h-5 mr-3" />
              Sair
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <main className="p-8">{children}</main>
        </div>
      </div>
    </div>
  );
}
