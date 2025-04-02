import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portal do Vereador",
  description:
    "Portal oficial do vereador - acompanhe os trabalhos e realizações",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="pt-15 md:pt-20">
            <div className="animate-fadeIn">{children}</div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
