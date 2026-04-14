import { motion } from 'framer-motion'
import { allBackers } from '../../data/backers'

const tierLabels: Record<number, string> = {
  1: 'Lead Investors',
  2: 'Celebrity Creators',
  3: 'Funds & VCs',
  4: 'Angels & Creators',
}

export default function FullBackers() {
  const tiers = [1, 2, 3, 4] as const

  return (
    <section id="backers" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">$20M+ Raised</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-heading mt-2">
            Our Backers
          </h2>
        </motion.div>

        <div className="space-y-10">
          {tiers.map((tier) => {
            const backers = allBackers.filter((b) => b.tier === tier)
            return (
              <motion.div
                key={tier}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <p className="text-xs text-text-muted uppercase tracking-wider mb-3">{tierLabels[tier]}</p>
                <div className="flex flex-wrap gap-3">
                  {backers.map((b) => (
                    <span
                      key={b.name}
                      className={`px-4 py-2 rounded-full border text-sm font-medium ${
                        tier === 1
                          ? 'border-primary/40 bg-primary/10 text-primary-light'
                          : tier === 2
                          ? 'border-accent-pink/30 bg-accent-pink/10 text-accent-pink'
                          : 'border-border bg-bg-surface text-text-heading'
                      }`}
                    >
                      {b.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
