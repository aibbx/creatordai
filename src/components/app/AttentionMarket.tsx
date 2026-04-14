import { motion } from 'framer-motion'
import GlassCard from '../shared/GlassCard'

interface Bid {
  id: string
  bidder: string
  agent: string
  amount: string
  status: 'active' | 'fulfilled' | 'expired'
  time: string
}

const mockBids: Bid[] = [
  { id: '0x1a...f3', bidder: 'DefiBot.eth', agent: 'Paris AI', amount: '2,400 CREATOR', status: 'active', time: '2m ago' },
  { id: '0x2b...e4', bidder: 'BrandAgent#42', agent: 'Jake AI', amount: '1,800 CREATOR', status: 'active', time: '5m ago' },
  { id: '0x3c...d5', bidder: 'MarketMaker.sol', agent: 'Chainsmokers AI', amount: '3,100 CREATOR', status: 'fulfilled', time: '12m ago' },
  { id: '0x4d...c6', bidder: 'AdPool.base', agent: 'Montana AI', amount: '950 CREATOR', status: 'active', time: '18m ago' },
  { id: '0x5e...b7', bidder: 'ContentDAO', agent: 'Paris AI', amount: '4,200 CREATOR', status: 'fulfilled', time: '25m ago' },
  { id: '0x6f...a8', bidder: 'GrowthAgent.ai', agent: 'DeFi Oracle', amount: '1,350 CREATOR', status: 'expired', time: '1h ago' },
]

const statusColor = {
  active: 'bg-accent-green/20 text-accent-green',
  fulfilled: 'bg-primary/20 text-primary-light',
  expired: 'bg-bg-surface-hover text-text-muted',
}

export default function AttentionMarket() {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-text-heading font-heading text-2xl font-bold">Attention Market</h2>
        <p className="text-text-muted text-sm mt-1">Live bids for creator attention — permissionless on-chain orderbook</p>
      </div>

      {/* Live feed */}
      <GlassCard hover={false} className="overflow-hidden">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
          <span className="text-accent-green text-xs font-semibold">LIVE FEED</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-border text-text-muted">
                <th className="pb-3 font-medium">Tx</th>
                <th className="pb-3 font-medium">Bidder</th>
                <th className="pb-3 font-medium">Agent</th>
                <th className="pb-3 font-medium text-right">Amount</th>
                <th className="pb-3 font-medium text-center">Status</th>
                <th className="pb-3 font-medium text-right">Time</th>
              </tr>
            </thead>
            <tbody>
              {mockBids.map((bid, i) => (
                <motion.tr
                  key={bid.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="border-b border-border/50 hover:bg-bg-surface-hover/50 transition-colors"
                >
                  <td className="py-3 font-mono text-text-muted text-xs">{bid.id}</td>
                  <td className="py-3 text-text-heading font-medium">{bid.bidder}</td>
                  <td className="py-3 text-text">{bid.agent}</td>
                  <td className="py-3 text-right font-mono text-text-heading">{bid.amount}</td>
                  <td className="py-3 text-center">
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${statusColor[bid.status]}`}>
                      {bid.status}
                    </span>
                  </td>
                  <td className="py-3 text-right text-text-muted text-xs">{bid.time}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </GlassCard>

      {/* Place bid form */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
        <GlassCard hover={false}>
          <h3 className="text-text-heading font-semibold mb-4">Place a Bid</h3>
          <div className="space-y-3">
            <div>
              <label className="text-text-muted text-xs block mb-1">Target Agent</label>
              <select className="w-full bg-bg-surface-hover border border-border rounded-lg px-3 py-2 text-text-heading text-sm outline-none focus:border-primary">
                <option>Paris AI</option>
                <option>Jake AI</option>
                <option>Chainsmokers AI</option>
                <option>Montana AI</option>
              </select>
            </div>
            <div>
              <label className="text-text-muted text-xs block mb-1">Bid Amount ($CREATOR)</label>
              <input
                type="text"
                placeholder="1,000"
                className="w-full bg-bg-surface-hover border border-border rounded-lg px-3 py-2 text-text-heading text-sm outline-none focus:border-primary"
              />
            </div>
            <div>
              <label className="text-text-muted text-xs block mb-1">Message / Prompt</label>
              <textarea
                rows={3}
                placeholder="Describe the attention you want..."
                className="w-full bg-bg-surface-hover border border-border rounded-lg px-3 py-2 text-text-heading text-sm outline-none focus:border-primary resize-none"
              />
            </div>
            <button className="w-full py-2.5 rounded-lg bg-primary hover:bg-primary-light text-white font-semibold text-sm transition-colors border-none cursor-pointer">
              Submit Bid (Connect Wallet)
            </button>
          </div>
        </GlassCard>

        <GlassCard hover={false}>
          <h3 className="text-text-heading font-semibold mb-4">Market Stats</h3>
          <div className="space-y-4">
            {[
              { label: '24h Volume', value: '124,500 CREATOR', change: '+18.2%' },
              { label: 'Active Bids', value: '1,847', change: '+42' },
              { label: 'Avg Bid Size', value: '2,150 CREATOR', change: '-3.1%' },
              { label: 'Fill Rate', value: '78.4%', change: '+5.2%' },
              { label: 'Tokens Burned (24h)', value: '2,490 CREATOR', change: '' },
            ].map((s) => (
              <div key={s.label} className="flex items-center justify-between py-2 border-b border-border/50">
                <span className="text-text-muted text-sm">{s.label}</span>
                <div className="text-right">
                  <span className="text-text-heading font-mono text-sm">{s.value}</span>
                  {s.change && (
                    <span className={`ml-2 text-xs ${s.change.startsWith('+') ? 'text-accent-green' : 'text-accent-orange'}`}>
                      {s.change}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </div>
  )
}
