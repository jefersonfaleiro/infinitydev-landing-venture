
import { Facebook, Instagram, Linkedin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and Short Description */}
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="text-white font-bold text-3xl">InfinityDev</div>
            </div>
            <p className="text-gray-400">
              Transformando carreiras e instituições através da tecnologia e educação inovadora.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Links Rápidos</h3>
            <ul className="space-y-4">
              <li>
                <a href="#quem-sou" className="text-gray-400 hover:text-white transition-colors">
                  Quem Sou
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-400 hover:text-white transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#carreira" className="text-gray-400 hover:text-white transition-colors">
                  Carreira
                </a>
              </li>
              <li>
                <a href="#ia-educacao" className="text-gray-400 hover:text-white transition-colors">
                  IA na Educação
                </a>
              </li>
              <li>
                <a href="#contato" className="text-gray-400 hover:text-white transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Serviços</h3>
            <ul className="space-y-4">
              <li>
                <a href="#servicos" className="text-gray-400 hover:text-white transition-colors">
                  Mentoria Personalizada
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-400 hover:text-white transition-colors">
                  Consultoria Educacional
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-gray-400 hover:text-white transition-colors">
                  Workshops de Tecnologia
                </a>
              </li>
              <li>
                <a href="#ia-educacao" className="text-gray-400 hover:text-white transition-colors">
                  Consultoria em IA
                </a>
              </li>
              <li>
                <a href="#carreira" className="text-gray-400 hover:text-white transition-colors">
                  Transição de Carreira
                </a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter
          <div>
            <h3 className="text-xl font-bold mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Inscreva-se para receber novidades, dicas e conteúdos exclusivos.
            </p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Seu email"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:ring-2 focus:ring-infinity-blue focus:border-transparent outline-none transition-all"
              />
              <button type="submit" className="w-full btn bg-infinity-blue hover:bg-infinity-lightblue px-4 py-3 rounded-lg">
                Inscrever-se
              </button>
            </form>
          </div> */}
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contato</h3>
            <ul className="space-y-4 text-gray-400">
              <li>
                Porto Alegre, RS
              </li>
              <li>
                contato@infinitydev.com.br
              </li>
              <li>
                (51) 99999-9999
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 InfinityDev Mentorias. Todos os direitos reservados.
          </p>
          
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full transition-colors duration-300"
            aria-label="Voltar ao topo"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
