import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const pillars = [
  { emoji: '◆', title: 'Stake to Curate', desc: 'Lock $CREATOR to vote on agent quality and earn protocol fees' },
  { emoji: '⟐', title: 'Pay for Attention', desc: 'All attention bids are denominated in $CREATOR' },
  { emoji: '∞', title: 'Burn on Spend', desc: '2% of every transaction is permanently burned' },
]

export default function Token() {
  return (
    <section id="token" className="py-14 sm:py-36 relative">
      <div className="container mx-auto px-5 sm:px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/20 flex items-center justify-center mx-auto mb-4 sm:mb-6">
            <span className="text-3xl sm:text-4xl font-light text-primary">◎</span>
          </div>
          <p className="text-[10px] sm:text-xs font-medium uppercase tracking-[0.2em] text-primary mb-3 sm:mb-4">Token</p>
          <h2 className="text-2xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground">
            The <span className="text-primary">$CREATOR</span> Token
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 max-w-4xl mx-auto mb-8 sm:mb-14">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl border border-border bg-card p-5 sm:p-8 text-center hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">{p.emoji}</div>
              <h3 className="font-bold text-sm sm:text-base text-foreground mb-1.5 sm:mb-2">{p.title}</h3>
              <p className="text-[11px] sm:text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Supply counters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-row justify-center gap-2 sm:gap-8 items-stretch mb-6 sm:mb-8"
        >
          <div className="rounded-xl border border-border bg-card px-3 py-2.5 sm:px-8 sm:py-4 text-center flex-1 max-w-[220px]">
            <p className="text-[9px] sm:text-[10px] uppercase tracking-wider text-muted-foreground mb-1">Total Supply</p>
            <p className="text-sm sm:text-2xl font-bold font-mono text-foreground">1,000,000,000</p>
          </div>
          <div className="rounded-xl border border-border bg-card px-3 py-2.5 sm:px-8 sm:py-4 text-center flex-1 max-w-[220px]">
            <p className="text-[9px] sm:text-[10px] uppercase tracking-wider text-muted-foreground mb-1">🔥 Burned</p>
            <p className="text-sm sm:text-2xl font-bold font-mono text-foreground">0 <span className="text-[10px] sm:text-xs text-muted-foreground font-normal">(launching soon)</span></p>
          </div>
        </motion.div>

        <div className="text-center">
          <Link to="/deck" className="inline-flex items-center gap-1.5 text-sm text-primary font-medium hover:underline no-underline">
            View Tokenomics in Deck <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
