export function Features() {
  const features = [
    {
      icon: "🔐",
      title: "Zero-Knowledge Verification",
      description:
        "ZKTLS-verified financial data ensures your information stays private while proving creditworthiness.",
    },
    {
      icon: "🤝",
      title: "Opacity Integration",
      description:
        "Securely share Binance account data via Multipass API to unlock 5x leverage without exposing sensitive information.",
    },
    {
      icon: "⚡",
      title: "Flexible Leverage",
      description: "Start with 3x leverage instantly, or unlock 5x by sharing verified financial data through Opacity.",
    },
    {
      icon: "🛡️",
      title: "No Manual KYC",
      description: "Automated verification through zero-knowledge proofs eliminates tedious manual KYC processes.",
    },
    {
      icon: "🌐",
      title: "Solana Native",
      description: "Built on Solana for lightning-fast transactions and minimal fees.",
    },
    {
      icon: "💡",
      title: "Smart Risk Management",
      description: "Advanced algorithms assess creditworthiness with fail-safe mechanisms for enhanced trust.",
    },
  ]

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Why Choose Owl Finance?</h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Revolutionary lending powered by privacy-preserving technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-background border border-border hover:border-primary/50 transition group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-foreground/60">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
