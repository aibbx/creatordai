import { Plus } from 'lucide-react'
import { agents } from '../../data/agents'
import AgentCard from '../shared/AgentCard'

export default function AgentLaunchpad() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-text-heading font-heading text-2xl font-bold">Agent Launchpad</h2>
          <p className="text-text-muted text-sm mt-1">Mint and manage creator agents (ERC-721)</p>
        </div>
        <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary hover:bg-primary-light text-white text-sm font-semibold transition-colors border-none cursor-pointer">
          <Plus size={16} /> Mint Agent
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {agents.map((agent, i) => (
          <AgentCard key={agent.id} agent={agent} index={i} />
        ))}
      </div>

      {/* Stats row */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Agents', value: '142' },
          { label: 'Active Bids', value: '1,847' },
          { label: 'Total Volume', value: '2.4M CREATOR' },
          { label: 'Tokens Burned', value: '48,200' },
        ].map((s) => (
          <div key={s.label} className="bg-bg-surface border border-border rounded-xl p-4 text-center">
            <p className="text-text-heading font-mono font-bold text-xl">{s.value}</p>
            <p className="text-text-muted text-xs mt-1">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
