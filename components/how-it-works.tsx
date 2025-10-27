export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Connect Wallet",
      description: "Link your Solana wallet to Owl Finance securely.",
      leverage: "3x",
    },
    {
      number: "02",
      title: "Sign in with Opacity",
      description: "Share your Binance account data via Opacity for enhanced verification.",
      leverage: "5x",
    },
    {
      number: "03",
      title: "Get Verified",
      description: "Instant verification with zero-knowledge proofs—no manual KYC needed.",
      leverage: "5x",
    },
    {
      number: "04",
      title: "Start Trading",
      description: "Access your leverage and trade on Solana with minimal fees.",
      leverage: "3x-5x",
    },
  ]

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">How It Works</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">Get started in four simple steps</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="p-6 rounded-2xl bg-card border border-border h-full flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-5xl font-bold text-[#FECD6D]/30">{step.number}</div>
                  <div className="text-xs font-semibold px-2 py-1 rounded-full bg-[#FECD6D]/20 text-[#FECD6D]">
                    {step.leverage}x
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-foreground/60 grow">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-linear-to-r from-[#FECD6D] to-transparent"></div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 rounded-2xl bg-card/50 border border-border">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Base Leverage</h3>
              <p className="text-foreground/60">
                Connect your wallet and get instant access to{" "}
                <span className="text-[#FECD6D] font-semibold">3x leverage</span> for trading.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Enhanced Leverage</h3>
              <p className="text-foreground/60">
                Share your Binance data via Opacity for verification and unlock{" "}
                <span className="text-[#FECD6D] font-semibold">5x leverage</span> with enhanced trust and fail-safe
                mechanisms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
