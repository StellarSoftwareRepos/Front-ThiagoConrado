"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  FiMenu,
  FiX,
  FiHome,
  FiUser,
  FiAward,
  FiFileText,
  FiBookOpen,
  FiMail,
} from "react-icons/fi";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { href: "/", label: "Início", icon: FiHome },
    { href: "/feitos", label: "Feitos", icon: FiAward },
    { href: "/requerimentos", label: "Requerimentos", icon: FiFileText },
    { href: "/noticias", label: "Notícias", icon: FiBookOpen },
    { href: "/contato", label: "Contato", icon: FiMail },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${"bg-white/95 backdrop-blur-md shadow-lg"}`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-indigo-600">
              <span className="text-xl font-bold text-white">TC</span>
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold text-gray-900">
                Thiago Conrado
              </span>
              <span className="text-xs sm:text-sm text-gray-600">Vereador</span>
            </div>
          </Link>

          {/* Menu Desktop */}
          <ul className="hidden lg:flex items-center space-x-6">
            {menuItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex items-center space-x-2 py-2 px-3 rounded-lg text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 transition-all duration-300"
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
            <li>
              <a
                href="/contato"
                className="inline-flex items-center px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-all duration-300"
              >
                Fale Conosco
              </a>
            </li>
          </ul>

          {/* Botão Menu Mobile */}
          <button
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            {isMenuOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Menu Mobile */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white rounded-xl shadow-lg p-4 mt-2">
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flex items-center space-x-3 p-3 rounded-lg text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="/contato"
                  className="flex items-center justify-center p-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Fale Conosco
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
