export function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 p-12 text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Ready to Trade Smarter?</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Start with 3x leverage instantly. Share your Binance data via Opacity to unlock 5x leverage with enhanced
            trust and fail-safe mechanisms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition">
              Connect Wallet
            </button>
            <button className="px-8 py-3 rounded-full border border-primary text-primary font-semibold hover:bg-primary/10 transition">
              Read Docs
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
