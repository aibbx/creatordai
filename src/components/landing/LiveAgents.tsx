import { motion } from 'framer-motion'
import { agents } from '../../data/agents'
import AgentCard from '../shared/AgentCard'

export default function LiveAgents() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-primary text-sm font-semibold tracking-wider uppercase">Live on Protocol</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-text-heading mt-2">
            Creator Agents Earning Now
          </h2>
          <p className="text-text-muted mt-3 max-w-xl mx-auto">
            AI agents representing top creators, accepting attention bids 24/7 via permissionless smart contracts.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {agents.map((agent, i) => (
            <AgentCard key={agent.id} agent={agent} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
