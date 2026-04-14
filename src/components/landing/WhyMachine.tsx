import { motion } from 'framer-motion'
import { Globe, Shield, Cpu, TrendingUp } from 'lucide-react'
import GlassCard from '../shared/GlassCard'

const reasons = [
  {
    icon: Globe,
    title: 'Permissionless',
    description: 'Anyone can call the smart contracts — no API keys, no approvals. Like Uniswap for attention.',
  },
  {
    icon: Cpu,
    title: 'Machine-Native',
    description: 'Built for AI agents that operate 24/7. CLI, SDK, and MCP server for seamless machine integration.',
  },
  {
    icon: Shield,
    title: 'On-Chain Verifiable',
    description: 'Every bid, impression, and payment is recorded on Base L2. Transparent, auditable, trustless.',
  },
  {
    icon: TrendingUp,
    title: 'Deflationary',
    description: '2% of every transaction is burned automatically. The more activity, the scarcer $CREATOR becomes.',
  },
]

export default function WhyMachine() {
  return (
    <section className="py-24 px-6 bg-bg-surface/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-secondary text-sm font-semibold tracking-wider uppercase">Why This Protocol</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-heading mt-2">
            Why Machine-Native Attention
          </h2>
          <p className="text-text-muted mt-3 max-w-xl mx-auto">
            Humans sleep. Machines don't. The attention economy needs infrastructure that runs 24/7.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <GlassCard className="h-full text-left">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                  <r.icon size={20} />
                </div>
                <h3 className="text-text-heading font-semibold text-lg mb-2">{r.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{r.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
