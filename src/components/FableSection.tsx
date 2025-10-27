import { Sparkles } from 'lucide-react';

export default function FableSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-black/60 via-amber-950/20 to-black/60 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-8xl">🐝</div>
        <div className="absolute top-40 right-20 text-6xl">✨</div>
        <div className="absolute bottom-20 left-1/4 text-7xl">🐝</div>
        <div className="absolute bottom-40 right-1/3 text-5xl">✨</div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-5xl">🐝</span>
            <Sparkles className="text-amber-400" size={28} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-amber-500 mb-4">
            A Fábula do Vômito de Abelha
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-6"></div>
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="text-amber-400" size={28} />
            <span className="text-5xl">🐝</span>
          </div>
        </div>

        <div className="space-y-6 text-lg leading-relaxed">
          <p className="text-amber-100/95 text-center italic font-light">
            Dizem que todo alquimista precisa de um toque de inocência para enxergar a verdade por trás das coisas simples.
            <br />
            E foi assim que nasceu o nome do nosso hidromel.
          </p>

          <div className="h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent my-8"></div>

          <p className="text-amber-100/90">
            O mestre fermentador <span className="text-amber-400 font-semibold">Marcelo de Oliveira</span> passava noites em seu ateliê de alquimia, cercado pelo perfume do mel, pelo murmúrio das abelhas e pelo brilho âmbar das garrafas.
            Misturava, observava, esperava — como quem escuta o tempo respirar.
          </p>

          <p className="text-amber-100/90">
            Certa manhã, sua filha <span className="text-amber-400 font-semibold">Sabrina</span>, curiosa e encantada com as colmeias, perguntou:
          </p>

          <div className="bg-amber-900/20 border-l-4 border-amber-500 p-6 rounded-r-lg my-6">
            <p className="text-amber-200 italic">
              "Pai, o que as abelhas fazem com o mel antes de ele virar essa bebida mágica?"
            </p>
          </div>

          <p className="text-amber-100/90">
            O mestre sorriu e respondeu com sua calma costumeira:
          </p>

          <div className="bg-amber-900/20 border-l-4 border-amber-600 p-6 rounded-r-lg my-6">
            <p className="text-amber-200 italic">
              "Elas o transformam dentro de si… É como se o mel fosse o vômito das abelhas, minha pequena. É assim que nasce o néctar."
            </p>
          </div>

          <p className="text-amber-100/90">
            Sabrina, arregalando os olhos, riu alto e disse sem hesitar:
          </p>

          <div className="bg-gradient-to-r from-amber-900/30 to-amber-800/20 border-l-4 border-amber-400 p-6 rounded-r-lg my-6 shadow-lg">
            <p className="text-amber-300 italic font-medium text-xl">
              "Então o seu hidromel devia se chamar VÔMITO DE ABELHA!"
            </p>
          </div>

          <p className="text-amber-100/90">
            O mestre riu, mas a frase ficou ecoando.
            <br />
            Na simplicidade da criança havia uma verdade profunda:
            <br />
            <span className="text-amber-400 font-medium">do que é simples e impuro, nasce o sublime.</span>
            <br />
            Da doação da abelha, do seu trabalho incessante e quase alquímico, surge o mel — a matéria-prima dos deuses.
            <br />
            E do mel, pela arte da fermentação, nasce o elixir dourado, que guarda a alma do tempo.
          </p>

          <div className="h-px bg-gradient-to-r from-transparent via-amber-500/30 to-transparent my-8"></div>

          <p className="text-amber-100/90">
            Desde aquele dia, o nome deixou de ser uma brincadeira e se tornou um símbolo:
            <br />
            um lembrete de que a alquimia verdadeira nasce da humildade, da natureza e da imaginação.
          </p>

          <div className="alchemical-border rounded-lg p-8 mt-10 text-center bg-gradient-to-b from-amber-900/20 to-black/40">
            <p className="text-amber-300 font-medium text-xl leading-relaxed">
              Assim nasceu o <span className="text-amber-400 font-bold text-2xl">Vômito de Abelha</span> —
            </p>
            <p className="text-amber-200/90 mt-4 italic">
              Um tributo ao riso de Sabrina, à paciência do mestre,
              <br />
              e à alquimia invisível que transforma o simples em divino.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
