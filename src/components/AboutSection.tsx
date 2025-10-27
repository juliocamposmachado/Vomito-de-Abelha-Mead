import { Flame, Clock, Sparkles } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="py-20 px-6 bg-black/40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-amber-500 mb-6">
            A Alquimia do Hidromel
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <p className="text-lg text-amber-100/90 leading-relaxed">
              Este site faz parte de uma <span className="text-amber-400 font-semibold">pesquisa de mercado</span> para
              o lançamento de um novo hidromel artesanal, criado pelo <span className="text-amber-400 font-semibold">Mestre Alquimista
              Marcelo de Oliveira</span>.
            </p>
            <p className="text-lg text-amber-100/90 leading-relaxed">
              Cada garrafa é fermentada <span className="text-amber-400 font-semibold">sob medida</span> — você escolhe o sabor,
              e nós começamos a alquimia. O processo de transformação leva tempo, paciência e dedicação.
            </p>
            <div className="flex items-center gap-3 p-4 bg-amber-900/20 border-l-4 border-amber-500 rounded">
              <Clock className="text-amber-500 flex-shrink-0" size={28} />
              <p className="text-amber-200 font-medium">
                Tempo de maturação mínimo: <span className="text-amber-400 text-xl">4 meses</span>
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <img
              src="/571342880_24814836588174361_8671174424158338292_n.jpg"
              alt="Rótulo Vômito de Abelha"
              className="rounded-lg shadow-2xl golden-glow max-w-full h-auto"
            />
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-amber-400 text-center mb-12">
            Escolha Seu Elixir
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="alchemical-border rounded-lg p-8 text-center transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-6xl mb-4">🍊</div>
              <h4 className="text-2xl font-bold text-amber-400 mb-3">Cítrico</h4>
              <p className="text-amber-100/80 leading-relaxed">
                Vibrante e refrescante, com notas de laranja, limão siciliano e especiarias sutis.
                Um despertar dos sentidos.
              </p>
            </div>

            <div className="alchemical-border rounded-lg p-8 text-center transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-6xl mb-4">🌿</div>
              <h4 className="text-2xl font-bold text-amber-400 mb-3">Especiado</h4>
              <p className="text-amber-100/80 leading-relaxed">
                Complexo e místico, com canela, cravo, gengibre e cardamomo.
                Um ritual em cada gole.
              </p>
            </div>

            <div className="alchemical-border rounded-lg p-8 text-center transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-6xl mb-4">🍓</div>
              <h4 className="text-2xl font-bold text-amber-400 mb-3">Frutado</h4>
              <p className="text-amber-100/80 leading-relaxed">
                Doce e sedutor, com frutas vermelhas, maracujá e toque floral.
                Uma explosão de sabores.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center p-6 bg-gradient-to-b from-amber-900/30 to-transparent rounded-lg">
            <Sparkles className="text-amber-500 mb-4" size={48} />
            <h4 className="text-xl font-bold text-amber-400 mb-2">Artesanal</h4>
            <p className="text-amber-200/80 text-sm">Produção em pequenos lotes com ingredientes selecionados</p>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-gradient-to-b from-amber-900/30 to-transparent rounded-lg">
            <Flame className="text-amber-500 mb-4" size={48} />
            <h4 className="text-xl font-bold text-amber-400 mb-2">Alta Fermentação</h4>
            <p className="text-amber-200/80 text-sm">Processo tradicional que realça sabores complexos</p>
          </div>

          <div className="flex flex-col items-center text-center p-6 bg-gradient-to-b from-amber-900/30 to-transparent rounded-lg">
            <Clock className="text-amber-500 mb-4" size={48} />
            <h4 className="text-xl font-bold text-amber-400 mb-2">Maturação Longa</h4>
            <p className="text-amber-200/80 text-sm">O tempo é o verdadeiro alquimista do sabor</p>
          </div>
        </div>
      </div>
    </section>
  );
}
