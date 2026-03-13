export default function FinalCTA() {
  return (
    <section className="section-padding section-gradient-coral relative overflow-hidden">
      {/* Watermark Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <span className="text-white font-serif text-9xl font-bold tracking-wider transform scale-150">
          WIMBO.AI
        </span>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-white">
            Your next hit starts here.
          </h2>
          <p className="text-xl lg:text-2xl text-white/90 leading-relaxed">
            Join selected artists, songwriters, and producers for early access to East Africa's first AI music pre-production studio.
          </p>
          <div className="pt-4">
            <button className="btn-secondary-white text-lg px-8 py-4">
              Get Early Access
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
