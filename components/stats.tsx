export function Stats() {
  const stats = [
    { label: "Max Leverage", value: "5x" },
    { label: "Verification Time", value: "<1min" },
    { label: "Network", value: "Solana" },
    { label: "Privacy Level", value: "100%" },
  ]

  return (
    <section id="stats" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-foreground/60 text-sm mb-2">{stat.label}</p>
              <p className="text-4xl md:text-5xl font-bold text-primary">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
