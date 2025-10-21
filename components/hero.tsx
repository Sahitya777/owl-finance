import Link from "next/link";

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
            <span className="text-sm font-medium text-primary">Powered by Zero-Knowledge Proofs</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
            Trade with <span className="text-primary">5x Leverage</span>, Zero Exposure
          </h1>

          <p className="text-lg text-foreground/70 leading-relaxed">
            Access undercollateralized leverage on Solana with ZKTLS-verified data. Share your financial data securely
            through Opacity—no manual KYC, no third-party exposure.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="https://owlfi.vercel.app" target="_blank">
              <button className="px-8 py-3 cursor-pointer rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition">
                Get Started
              </button>
            </Link>
            <button className="px-8 py-3 cursor-pointer rounded-full border border-primary text-primary font-semibold hover:bg-primary/10 transition">
              Learn More
            </button>
          </div>
        </div>

        <div className="relative h-96 md:h-full flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl blur-3xl"></div>
          <div className="relative w-full h-full bg-card rounded-3xl border border-border p-8 flex flex-col justify-center items-center space-y-6">
            <div className="text-6xl">🦉</div>
            <div className="text-center space-y-2">
              <p className="text-sm text-foreground/50">Trading Capital Available</p>
              <p className="text-4xl font-bold text-primary">5x Leverage</p>
            </div>
            <div className="w-full h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0 rounded-full"></div>
            <p className="text-sm text-foreground/60 text-center">Verified with Zero-Knowledge Proofs</p>
          </div>
        </div>
      </div>
    </section>
  )
}
