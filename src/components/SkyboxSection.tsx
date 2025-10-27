export default function SkyboxSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 paper-texture">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-400 mb-4">
            Entre no Mundo do Hidromel
          </h2>
          <p className="text-xl text-amber-200/80 max-w-3xl mx-auto">
            Explore uma experiência imersiva 360° do universo alquímico do Vômito de Abelha
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-4xl rounded-lg overflow-hidden shadow-2xl golden-glow">
            <iframe
              src="https://skybox.blockadelabs.com/e/9a9f2122780179024a221fe2f3a5163c"
              className="w-full aspect-square"
              style={{ border: 0 }}
              allow="fullscreen"
              title="Experiência Imersiva 360° - Vômito de Abelha"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
