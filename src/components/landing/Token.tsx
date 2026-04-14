import { motion } from 'framer-motion'
import { Coins, Flame, Lock } from 'lucide-react'
import GlassCard from '../shared/GlassCard'

const pillars = [
  {
    icon: Coins,
    title: 'Stake',
    description: '18%+ APR from protocol fees. 14-day unlock period aligns long-term holders.',
    stat: '18%+ APR',
    color: 'from-primary to-purple-400',
  },
  {
    icon: Flame,
    title: 'Burn',
    description: '2% of every transaction burned automatically. Deflationary by design, growing with usage.',
    stat: '2% per tx',
    color: 'from-accent-orange to-red-500',
  },
  {
    icon: Lock,
    title: 'Pay & Govern',
    description: 'All bids paid in $CREATOR. Token holders govern protocol parameters — fees, burn rate, engines.',
    stat: '100% utility',
    color: 'from-secondary to-cyan-400',
  },
]

export default function Token() {
  return (
    <section id="token" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-accent-orange text-sm font-semibold tracking-wider uppercase">Token Economics</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-heading mt-2">
            $CREATOR Token
          </h2>
          <p className="text-text-muted mt-3 max-w-xl mx-auto">
            Four utilities in one token: Stake, Pay, Burn, Govern. Every protocol action creates demand and reduces supply.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <GlassCard className="h-full text-left relative overflow-hidden">
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${p.color}`} />
                <div className="w-10 h-10 rounded-xl bg-bg-surface-hover flex items-center justify-center text-text-heading mb-4 mt-2">
                  <p.icon size={20} />
                </div>
                <h3 className="text-text-heading font-semibold text-lg mb-1">{p.title}</h3>
                <p className="text-primary font-mono text-sm mb-3">{p.stat}</p>
                <p className="text-text-muted text-sm leading-relaxed">{p.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Fee split bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 max-w-3xl mx-auto"
        >
          <p className="text-sm text-text-muted text-center mb-4">10% protocol fee on every transaction</p>
          <div className="flex rounded-full overflow-hidden h-3">
            <div className="bg-primary w-[40%]" title="40% Curators" />
            <div className="bg-secondary w-[25%]" title="25% Treasury" />
            <div className="bg-accent-orange w-[20%]" title="20% Burned" />
            <div className="bg-accent-green w-[15%]" title="15% Agent Builder" />
          </div>
          <div className="flex justify-between text-xs text-text-muted mt-2 px-1">
            <span>40% Curators</span>
            <span>25% Treasury</span>
            <span>20% Burned</span>
            <span>15% Builder</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
