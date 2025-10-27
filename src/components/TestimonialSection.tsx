import { Quote } from 'lucide-react';

export default function TestimonialSection() {
  return (
    <section className="py-20 px-6 bg-black/60 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-9xl">⚗️</div>
        <div className="absolute bottom-10 right-10 text-9xl">🍯</div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-500 mb-6">
            Palavras do Mestre
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto"></div>
        </div>

        <div className="alchemical-border rounded-lg p-8 md:p-16 relative">
          <Quote className="absolute top-8 left-8 text-amber-500/30" size={64} />
          <Quote className="absolute bottom-8 right-8 text-amber-500/30 transform rotate-180" size={64} />

          <div className="relative z-10">
            <blockquote className="text-center">
              <p className="subtitle-font text-2xl md:text-3xl lg:text-4xl text-amber-200 italic leading-relaxed mb-8">
                O tempo é o verdadeiro alquimista.<br />
                E cada garrafa é um feitiço líquido<br />
                aguardando despertar.
              </p>
              <footer className="text-amber-400 font-bold text-xl">
                — Mestre Marcelo Oliveira
              </footer>
            </blockquote>
          </div>
        </div>

        <div className="mt-16 text-center">
          <img
            src="/571340799_24814857934838893_9114935245074932820_n.jpg"
            alt="Garrafa de Hidromel Vômito de Abelha"
            className="mx-auto rounded-lg shadow-2xl golden-glow max-w-md w-full"
          />
        </div>
      </div>
    </section>
  );
}
