import { motion } from 'framer-motion'

const stats = [
  { symbol: '◎', label: 'Protocol Volume (24h)', value: '124,500', unit: 'CREATOR', change: '+18.2%' },
  { symbol: '🔥', label: 'Tokens Burned (24h)', value: '2,490', unit: 'CREATOR', change: '+22%' },
  { symbol: '◆', label: 'Total Staked', value: '8.4M', unit: 'CREATOR', change: '+4.1%' },
  { symbol: '📈', label: 'Staking APR', value: '18.7', unit: '%', change: '' },
]

const recentTx = [
  { type: 'Bid Fulfilled', agent: 'Agent_Paris', amount: '+2,400', time: '2m ago' },
  { type: 'Token Burned', agent: 'Protocol', amount: '-48', time: '2m ago' },
  { type: 'Agent Minted', agent: 'Agent_Chef', amount: '-1,000', time: '15m ago' },
  { type: 'Staking Reward', agent: 'You', amount: '+124', time: '1h ago' },
  { type: 'Bid Placed', agent: 'Agent_Jake', amount: '-1,800', time: '1h ago' },
  { type: 'Bid Fulfilled', agent: 'Agent_Chris', amount: '+3,100', time: '2h ago' },
]

export default function Dashboard() {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-foreground">Dashboard</h2>
        <p className="text-xs sm:text-sm text-muted-foreground mt-1">Protocol analytics and your portfolio overview</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="rounded-xl border border-border bg-card p-5 text-center"
          >
            <span className="text-lg">{s.symbol}</span>
            <p className="text-foreground font-mono font-bold text-2xl mt-2">
              {s.value}<span className="text-sm text-muted-foreground ml-1">{s.unit}</span>
            </p>
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1">{s.label}</p>
            {s.change && <span className="text-green-400 text-xs font-medium">{s.change}</span>}
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Activity */}
        <div className="rounded-xl border border-border bg-card p-5 sm:p-6">
          <h3 className="text-foreground font-semibold mb-4">Recent Activity</h3>
          <div className="space-y-3">
            {recentTx.map((tx, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center justify-between py-2 border-b border-border/50"
              >
                <div>
                  <p className="text-foreground text-sm font-medium">{tx.type}</p>
                  <p className="text-muted-foreground text-[11px] font-mono">{tx.agent}</p>
                </div>
                <div className="text-right">
                  <p className={`font-mono text-sm font-medium ${tx.amount.startsWith('+') ? 'text-green-400' : 'text-amber-400'}`}>
                    {tx.amount} CREATOR
                  </p>
                  <p className="text-muted-foreground text-[10px]">{tx.time}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Staking */}
        <div className="rounded-xl border border-border bg-card p-5 sm:p-6">
          <h3 className="text-foreground font-semibold mb-4">Staking</h3>

          <div className="rounded-xl bg-secondary border border-border p-5 mb-4">
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Your Staked Balance</p>
            <p className="text-foreground font-mono font-bold text-3xl mt-1">
              24,500 <span className="text-primary text-lg">CREATOR</span>
            </p>
            <div className="flex items-center gap-4 mt-3 text-xs">
              <span className="text-green-400 font-medium">APR: 18.7%</span>
              <span className="text-muted-foreground">Unlock: 14 days</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-4">
            <div>
              <label className="text-muted-foreground text-[10px] uppercase tracking-wider block mb-1">Amount</label>
              <input type="text" placeholder="10,000" className="w-full bg-secondary border border-border rounded-lg px-3 py-2 text-foreground text-sm outline-none focus:border-primary" />
            </div>
            <div>
              <label className="text-muted-foreground text-[10px] uppercase tracking-wider block mb-1">Lock Period</label>
              <select className="w-full bg-secondary border border-border rounded-lg px-3 py-2 text-foreground text-sm outline-none focus:border-primary">
                <option>14 days (18.7%)</option>
                <option>30 days (22.4%)</option>
                <option>90 days (28.1%)</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button className="py-2.5 rounded-lg bg-primary hover:bg-primary/90 text-white font-semibold text-sm transition-colors border-none cursor-pointer">Stake</button>
            <button className="py-2.5 rounded-lg border border-border hover:border-primary/30 text-foreground font-semibold text-sm transition-colors bg-transparent cursor-pointer">Unstake</button>
          </div>

          <div className="mt-4 pt-4 border-t border-border">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Pending Rewards</span>
              <span className="text-green-400 font-mono font-medium">+347 CREATOR</span>
            </div>
            <button className="w-full mt-3 py-2 rounded-lg border border-green-500/30 text-green-400 text-sm font-medium bg-transparent hover:bg-green-500/10 transition-colors cursor-pointer">
              Claim Rewards
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
