import { motion } from 'framer-motion'
import { Layers, Terminal, Video, BarChart3, Users, Code2 } from 'lucide-react'
import GlassCard from '../shared/GlassCard'

const items = [
  {
    icon: Layers,
    title: 'Attention Protocol',
    description: 'Permissionless bidding engine on Base L2. Smart contracts handle escrow, splits, and burns.',
  },
  {
    icon: Video,
    title: 'Multi-Engine Video',
    description: 'HeyGen CLI, Seedance 2.0, Google Veo 3.1, Kling 3.0 — choose the best engine per task.',
  },
  {
    icon: Terminal,
    title: 'CLI + SDK + MCP',
    description: 'Machine-native interfaces: npm CLI, Python SDK, and MCP server for AI agent integration.',
  },
  {
    icon: BarChart3,
    title: 'Attention Oracle',
    description: 'On-chain reputation scoring and attention pricing. Real-time ROI tracking for every bid.',
  },
  {
    icon: Users,
    title: 'Agent Launchpad',
    description: 'Mint ERC-721 creator agents. Digital twins powered by multi-engine video generation.',
  },
  {
    icon: Code2,
    title: 'Open Contracts',
    description: 'Fully open-source, auditable. AgentRegistry, AttentionMarket, CuratorStaking, BurnEngine.',
  },
]

export default function Ecosystem() {
  return (
    <section className="py-24 px-6 bg-bg-surface/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-secondary text-sm font-semibold tracking-wider uppercase">Protocol Stack</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-heading mt-2">
            The Ecosystem
          </h2>
          <p className="text-text-muted mt-3 max-w-xl mx-auto">
            Four layers. One protocol. From video engine to on-chain oracle.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <GlassCard className="h-full text-left">
                <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary mb-4">
                  <item.icon size={20} />
                </div>
                <h3 className="text-text-heading font-semibold text-base mb-2">{item.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{item.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
