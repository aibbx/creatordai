import { motion } from 'framer-motion'

interface Bid {
  id: string; bidder: string; agent: string; amount: string
  status: 'active' | 'fulfilled' | 'expired'; time: string
}

const mockBids: Bid[] = [
  { id: '0x1a...f3', bidder: 'DefiBot.eth', agent: 'Agent_Paris', amount: '2,400 CREATOR', status: 'active', time: '2m ago' },
  { id: '0x2b...e4', bidder: 'BrandAgent#42', agent: 'Agent_Jake', amount: '1,800 CREATOR', status: 'active', time: '5m ago' },
  { id: '0x3c...d5', bidder: 'MarketMaker.sol', agent: 'Agent_Chris', amount: '3,100 CREATOR', status: 'fulfilled', time: '12m ago' },
  { id: '0x4d...c6', bidder: 'AdPool.base', agent: 'Agent_Joe', amount: '950 CREATOR', status: 'active', time: '18m ago' },
  { id: '0x5e...b7', bidder: 'ContentDAO', agent: 'Agent_Paris', amount: '4,200 CREATOR', status: 'fulfilled', time: '25m ago' },
  { id: '0x6f...a8', bidder: 'GrowthAgent.ai', agent: 'Agent_Kygo', amount: '1,350 CREATOR', status: 'expired', time: '1h ago' },
]

const statusStyle = {
  active: 'text-green-400 bg-green-400/10',
  fulfilled: 'text-primary bg-primary/10',
  expired: 'text-muted-foreground bg-white/5',
}

export default function AttentionMarket() {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-foreground">Attention Marketplace</h2>
        <p className="text-xs sm:text-sm text-muted-foreground mt-1">Live bids for creator attention — permissionless on-chain orderbook</p>
      </div>

      {/* Live feed */}
      <div className="rounded-xl border border-border bg-card p-5 sm:p-6 mb-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-green-400 text-[10px] font-semibold uppercase tracking-wider">Live Feed</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-border text-muted-foreground">
                <th className="pb-3 font-medium text-[10px] uppercase tracking-wider">Tx</th>
                <th className="pb-3 font-medium text-[10px] uppercase tracking-wider">Bidder</th>
                <th className="pb-3 font-medium text-[10px] uppercase tracking-wider">Agent</th>
                <th className="pb-3 font-medium text-[10px] uppercase tracking-wider text-right">Amount</th>
                <th className="pb-3 font-medium text-[10px] uppercase tracking-wider text-center">Status</th>
                <th className="pb-3 font-medium text-[10px] uppercase tracking-wider text-right">Time</th>
              </tr>
            </thead>
            <tbody>
              {mockBids.map((bid, i) => (
                <motion.tr
                  key={bid.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="border-b border-border/50 hover:bg-white/[0.02] transition-colors"
                >
                  <td className="py-3 font-mono text-muted-foreground text-xs">{bid.id}</td>
                  <td className="py-3 text-foreground font-medium text-xs">{bid.bidder}</td>
                  <td className="py-3 text-foreground/80 text-xs">{bid.agent}</td>
                  <td className="py-3 text-right font-mono text-foreground font-medium text-xs">{bid.amount}</td>
                  <td className="py-3 text-center">
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-medium ${statusStyle[bid.status]}`}>{bid.status}</span>
                  </td>
                  <td className="py-3 text-right text-muted-foreground text-xs">{bid.time}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Place bid */}
        <div className="rounded-xl border border-border bg-card p-5 sm:p-6">
          <h3 className="text-foreground font-semibold mb-4">Place a Bid</h3>
          <div className="space-y-3">
            <div>
              <label className="text-muted-foreground text-[10px] uppercase tracking-wider block mb-1">Target Agent</label>
              <select className="w-full bg-secondary border border-border rounded-lg px-3 py-2 text-foreground text-sm outline-none focus:border-primary transition-colors">
                <option>Agent_Paris</option>
                <option>Agent_Jake</option>
                <option>Agent_Chris</option>
                <option>Agent_Joe</option>
              </select>
            </div>
            <div>
              <label className="text-muted-foreground text-[10px] uppercase tracking-wider block mb-1">Bid Amount ($CREATOR)</label>
              <input type="text" placeholder="1,000" className="w-full bg-secondary border border-border rounded-lg px-3 py-2 text-foreground text-sm outline-none focus:border-primary transition-colors" />
            </div>
            <div>
              <label className="text-muted-foreground text-[10px] uppercase tracking-wider block mb-1">Message / Prompt</label>
              <textarea rows={3} placeholder="Describe the attention you want..." className="w-full bg-secondary border border-border rounded-lg px-3 py-2 text-foreground text-sm outline-none focus:border-primary resize-none transition-colors" />
            </div>
            <button className="w-full py-2.5 rounded-lg bg-primary hover:bg-primary/90 text-white font-semibold text-sm transition-colors border-none cursor-pointer">
              Submit Bid (Connect Wallet)
            </button>
          </div>
        </div>

        {/* Market stats */}
        <div className="rounded-xl border border-border bg-card p-5 sm:p-6">
          <h3 className="text-foreground font-semibold mb-4">Market Stats</h3>
          <div className="space-y-4">
            {[
              { label: '24h Volume', value: '124,500 CREATOR', change: '+18.2%' },
              { label: 'Active Bids', value: '1,847', change: '+42' },
              { label: 'Avg Bid Size', value: '2,150 CREATOR', change: '-3.1%' },
              { label: 'Fill Rate', value: '78.4%', change: '+5.2%' },
              { label: 'Tokens Burned (24h)', value: '2,490 CREATOR', change: '' },
            ].map((s) => (
              <div key={s.label} className="flex items-center justify-between py-2 border-b border-border/50">
                <span className="text-muted-foreground text-xs">{s.label}</span>
                <div className="text-right flex items-center gap-2">
                  <span className="text-foreground font-mono text-xs font-medium">{s.value}</span>
                  {s.change && (
                    <span className={`text-[10px] ${s.change.startsWith('+') ? 'text-green-400' : 'text-amber-400'}`}>{s.change}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
