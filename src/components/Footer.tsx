import { Mail, Phone, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-amber-600/30 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-8">
          <div>
            <h3 className="text-3xl font-bold text-amber-500 mb-6">
              Vômito de Abelha
            </h3>
            <p className="text-amber-200/80 leading-relaxed mb-4">
              Alquimia do Hidromel — Onde o tempo transforma mel em magia líquida.
            </p>
            <p className="text-amber-200/70 text-sm">
              Hidromel artesanal de alta fermentação.<br />
              Produção personalizada sob medida.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold text-amber-400 mb-4">
              Contatos para Encomendas
            </h4>
            <div className="space-y-3">
              <p className="text-amber-200 font-semibold">
                Julio Cesar Campos Machado
              </p>
              <p className="text-amber-200/80 text-sm">
                Like Look Solutions — Artes & Vendas
              </p>

              <div className="flex items-center gap-3 text-amber-200/90">
                <Phone size={18} className="text-amber-500" />
                <div className="text-sm">
                  <a href="tel:+5511970603441" className="hover:text-amber-400 transition-colors">
                    +55 (11) 97060-3441
                  </a>
                  {' / '}
                  <a href="tel:+5511992946628" className="hover:text-amber-400 transition-colors">
                    +55 (11) 99294-6628
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-amber-200/90">
                <Mail size={18} className="text-amber-500" />
                <a
                  href="mailto:juliocamposmachado@gmail.com"
                  className="hover:text-amber-400 transition-colors text-sm"
                >
                  juliocamposmachado@gmail.com
                </a>
              </div>
            </div>

            <div className="flex gap-4 mt-6">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-amber-600/20 rounded-full hover:bg-amber-600/40 transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={24} className="text-amber-500" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-amber-600/20 rounded-full hover:bg-amber-600/40 transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook size={24} className="text-amber-500" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-amber-600/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-amber-200/60 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Vômito de Abelha. Todos os direitos reservados.
            </p>
            <p className="text-amber-200/60 text-sm text-center md:text-right">
              Criado com alquimia e dedicação 🐝✨
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
