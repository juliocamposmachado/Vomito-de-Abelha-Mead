import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export default function FormSection() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch('https://formspree.io/f/xnnqklpb', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      setFormStatus('success');
      form.reset();

      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      setFormStatus('idle');
      alert('Erro ao enviar. Por favor, tente novamente.');
    }
  };

  return (
    <section id="formulario" className="py-20 px-6 bg-gradient-to-b from-black/40 to-black">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold text-amber-500 mb-6">
            Manifeste Seu Interesse
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-8"></div>
          <p className="text-lg text-amber-200/90">
            Preencha o formulário abaixo e seja um dos primeiros a experimentar este elixir único.
          </p>
        </div>

        {formStatus === 'success' ? (
          <div className="alchemical-border rounded-lg p-12 text-center">
            <CheckCircle className="mx-auto text-green-500 mb-6" size={72} />
            <h3 className="text-3xl font-bold text-amber-400 mb-4">
              Interesse Registrado!
            </h3>
            <p className="text-lg text-amber-200">
              A alquimia foi iniciada. Em breve entraremos em contato para dar continuidade ao seu pedido.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="alchemical-border rounded-lg p-8 md:p-12 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="nome" className="block text-amber-400 font-semibold mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-amber-600/50 rounded-lg text-amber-100 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/50 transition-all"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-amber-400 font-semibold mb-2">
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-amber-600/50 rounded-lg text-amber-100 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/50 transition-all"
                  placeholder="seu@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="whatsapp" className="block text-amber-400 font-semibold mb-2">
                WhatsApp *
              </label>
              <input
                type="tel"
                id="whatsapp"
                name="whatsapp"
                required
                className="w-full px-4 py-3 bg-black/50 border border-amber-600/50 rounded-lg text-amber-100 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/50 transition-all"
                placeholder="(11) 99999-9999"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="estilo" className="block text-amber-400 font-semibold mb-2">
                  Estilo Preferido *
                </label>
                <select
                  id="estilo"
                  name="estilo"
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-amber-600/50 rounded-lg text-amber-100 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/50 transition-all"
                >
                  <option value="">Selecione...</option>
                  <option value="citrico">🍊 Cítrico</option>
                  <option value="especiado">🌿 Especiado</option>
                  <option value="frutado">🍓 Frutado</option>
                  <option value="surpresa">✨ Surpreenda-me</option>
                </select>
              </div>

              <div>
                <label htmlFor="tamanho" className="block text-amber-400 font-semibold mb-2">
                  Tamanho da Garrafa *
                </label>
                <select
                  id="tamanho"
                  name="tamanho"
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-amber-600/50 rounded-lg text-amber-100 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/50 transition-all"
                >
                  <option value="">Selecione...</option>
                  <option value="500ml">500 mL — R$ 85</option>
                  <option value="750ml">750 mL — R$ 110</option>
                  <option value="1l">1 L Personalizada — R$ 140</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="mensagem" className="block text-amber-400 font-semibold mb-2">
                Mensagem Opcional
              </label>
              <textarea
                id="mensagem"
                name="mensagem"
                rows={4}
                className="w-full px-4 py-3 bg-black/50 border border-amber-600/50 rounded-lg text-amber-100 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/50 transition-all resize-none"
                placeholder="Conte-nos mais sobre suas preferências ou expectativas..."
              ></textarea>
            </div>

            <div className="pt-4">
              <button
                type="submit"
                disabled={formStatus === 'submitting'}
                className="w-full px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-black font-bold text-lg rounded-lg transition-all duration-300 transform hover:scale-105 golden-glow disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                {formStatus === 'submitting' ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black"></div>
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Enviar meu interesse
                  </>
                )}
              </button>
            </div>

            <p className="text-center text-amber-200/70 text-sm mt-4">
              * Campos obrigatórios
            </p>
          </form>
        )}

        <div className="mt-16 alchemical-border rounded-lg p-8">
          <h3 className="text-2xl font-bold text-amber-400 mb-6 text-center">
            Valores Sugeridos
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-black/30 rounded-lg">
              <div className="text-4xl font-bold text-amber-500 mb-2">R$ 85</div>
              <div className="text-amber-200 font-semibold">500 mL</div>
              <div className="text-amber-200/60 text-sm mt-2">Degustação</div>
            </div>
            <div className="text-center p-6 bg-black/30 rounded-lg border-2 border-amber-500">
              <div className="text-4xl font-bold text-amber-500 mb-2">R$ 110</div>
              <div className="text-amber-200 font-semibold">750 mL</div>
              <div className="text-amber-200/60 text-sm mt-2">Mais Popular</div>
            </div>
            <div className="text-center p-6 bg-black/30 rounded-lg">
              <div className="text-4xl font-bold text-amber-500 mb-2">R$ 140</div>
              <div className="text-amber-200 font-semibold">1 L</div>
              <div className="text-amber-200/60 text-sm mt-2">Personalizada</div>
            </div>
          </div>
          <p className="text-center text-amber-200/70 text-sm mt-6">
            Valores sujeitos a confirmação após a pesquisa de interesse.
          </p>
        </div>
      </div>
    </section>
  );
}
