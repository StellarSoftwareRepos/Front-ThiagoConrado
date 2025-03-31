"use client";

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-8">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <p>Email: contato@vereador.com</p>
            <p>Telefone: (XX) XXXX-XXXX</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-200">
                Facebook
              </a>
              <a href="#" className="hover:text-blue-200">
                Instagram
              </a>
              <a href="#" className="hover:text-blue-200">
                Twitter
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Endereço</h3>
            <p>Câmara Municipal</p>
            <p>Rua da Câmara, 123</p>
            <p>Cidade - Estado</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>
            &copy; {new Date().getFullYear()} Portal do Vereador. Todos os
            direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
