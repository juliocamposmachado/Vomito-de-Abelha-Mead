import { ChevronDown } from 'lucide-react';

export default function HeroSection() {
  const scrollToForm = () => {
    document.getElementById('formulario')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden paper-texture">
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80"></div>

      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 text-6xl">⚗️</div>
        <div className="absolute top-40 right-20 text-5xl">🍯</div>
        <div className="absolute bottom-32 left-20 text-4xl">👑</div>
        <div className="absolute bottom-20 right-32 text-6xl">🐝</div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center fade-in">
        <div className="mb-8">
          <h1 className="hero-title text-6xl md:text-8xl lg:text-9xl font-bold text-amber-500 mb-6 tracking-wider">
            🐝 VÔMITO DE ABELHA 🐝
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-8"></div>
        </div>

        <p className="subtitle-font text-2xl md:text-4xl lg:text-5xl text-amber-200 mb-8 leading-relaxed font-light italic">
          Da colmeia nasce o mel,<br />
          do mel nasce o fogo —<br />
          e do fogo, a alquimia.
        </p>

        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-lg md:text-xl text-amber-100/90 leading-relaxed mb-6">
            Apresentamos um <span className="text-amber-400 font-semibold">elixir artesanal de alta fermentação</span>,
            inspirado nos licores cítricos e dourados das antigas tradições alquímicas.
          </p>
          <p className="text-base md:text-lg text-amber-200/80">
            Cada garrafa é uma obra de paciência e transformação —<br />
            onde o tempo revela o verdadeiro sabor da alquimia líquida.
          </p>
        </div>

        <button
          onClick={scrollToForm}
          className="group relative px-10 py-5 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-black font-bold text-lg md:text-xl rounded-lg transition-all duration-300 transform hover:scale-105 golden-glow honey-drip"
        >
          <span className="relative z-10">Quero participar da alquimia</span>
        </button>

        <div className="mt-16 animate-bounce">
          <ChevronDown className="mx-auto text-amber-500" size={40} />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
}
