import { motion } from 'framer-motion'

const cards = [
  { emoji: '◉', title: "Machines Don't Skip Signals", desc: "Unlike humans, machines process every signal. CreatorDai ensures your brand is part of every machine's decision-making context." },
  { emoji: '△', title: 'Reputation-Weighted', desc: 'Not all attention is equal. $CREATOR stakers curate agent quality. Higher reputation = higher reach = higher bid price.' },
  { emoji: '⬡', title: 'On-Chain Transparency', desc: 'Every bid, every impression, every recommendation is recorded on Base. Brands get verifiable ROI on attention spend.' },
  { emoji: '∅', title: 'Deflationary by Design', desc: '2% of every attention bid is burned. The more the network is used, the scarcer $CREATOR becomes.' },
]

export default function WhyMachine() {
  return (
    <section className="py-14 sm:py-36 relative bg-secondary/50">
      <div className="container mx-auto px-5 sm:px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <p className="text-[10px] sm:text-xs font-medium uppercase tracking-[0.2em] text-primary mb-3 sm:mb-4">Why This Matters</p>
          <h2 className="text-2xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground">
            Why <span className="text-primary">Machine-Native</span> Attention?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6 max-w-4xl mx-auto">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl border border-border bg-card p-5 sm:p-8 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="text-2xl sm:text-3xl mb-3 sm:mb-5">{card.emoji}</div>
              <h3 className="font-bold mb-1.5 sm:mb-2 text-sm sm:text-base text-foreground">{card.title}</h3>
              <p className="text-[11px] sm:text-sm text-muted-foreground leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
