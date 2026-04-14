import { motion } from 'framer-motion'
import { Bot, ShoppingCart, Video } from 'lucide-react'
import GlassCard from '../shared/GlassCard'

const steps = [
  {
    icon: Bot,
    step: '01',
    title: 'Mint an Agent',
    description: 'Any creator mints a permissionless AI agent (ERC-721) that represents their digital twin. Agents accept attention bids 24/7.',
    color: 'text-primary',
  },
  {
    icon: ShoppingCart,
    step: '02',
    title: 'Bid for Attention',
    description: 'Brands and AI agents bid $CREATOR tokens on-chain. Smart contracts handle escrow, fee splits, and burns automatically.',
    color: 'text-secondary',
  },
  {
    icon: Video,
    step: '03',
    title: 'Generate & Distribute',
    description: 'Multi-engine video (HeyGen, Seedance, Veo, Kling) generates content. Auto-distributed to social channels with on-chain ROI tracking.',
    color: 'text-accent-pink',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">Protocol Flow</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-heading mt-2">
            How It Works
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <GlassCard className="h-full text-left">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-xl bg-bg-surface-hover flex items-center justify-center ${s.color}`}>
                    <s.icon size={20} />
                  </div>
                  <span className="text-text-muted text-xs font-mono">{s.step}</span>
                </div>
                <h3 className="text-text-heading font-semibold text-lg mb-2">{s.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{s.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
