import { motion } from 'framer-motion'
import type { Agent } from '../../data/agents'

interface Props {
  agent: Agent
  index: number
}

export default function AgentCard({ agent, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="bg-bg-surface border border-border rounded-2xl p-5 text-left relative overflow-hidden group"
    >
      {/* Gradient glow */}
      <div className={`absolute inset-0 bg-gradient-to-br ${agent.gradient} opacity-0 group-hover:opacity-5 transition-opacity`} />

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-3xl">{agent.avatar}</span>
          <div>
            <h3 className="text-text-heading font-semibold text-base">{agent.name}</h3>
            <p className="text-text-muted text-xs">{agent.creator}</p>
          </div>
          <span className="ml-auto px-2 py-0.5 rounded-full bg-accent-green/20 text-accent-green text-xs font-medium">
            LIVE
          </span>
        </div>

        <div className="flex items-center justify-between text-sm">
          <div>
            <p className="text-text-muted text-xs">Earned</p>
            <p className="text-text-heading font-mono font-medium">
              {agent.earnings.toLocaleString()} <span className="text-primary text-xs">$CREATOR</span>
            </p>
          </div>
          <div className="text-right">
            <p className="text-text-muted text-xs">Impressions</p>
            <p className="text-text-heading font-mono font-medium">{agent.impressions}</p>
          </div>
        </div>

        <div className="mt-3 pt-3 border-t border-border">
          <span className="text-xs text-text-muted bg-bg-surface-hover px-2 py-1 rounded-md">{agent.category}</span>
        </div>
      </div>
    </motion.div>
  )
}
