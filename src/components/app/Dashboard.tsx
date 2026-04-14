import { motion } from 'framer-motion'
import { TrendingUp, Flame, Coins, Activity } from 'lucide-react'
import GlassCard from '../shared/GlassCard'

const stats = [
  { icon: Activity, label: 'Protocol Volume (24h)', value: '124,500', unit: 'CREATOR', change: '+18.2%', color: 'text-primary' },
  { icon: Flame, label: 'Tokens Burned (24h)', value: '2,490', unit: 'CREATOR', change: '+22%', color: 'text-accent-orange' },
  { icon: Coins, label: 'Total Staked', value: '8.4M', unit: 'CREATOR', change: '+4.1%', color: 'text-secondary' },
  { icon: TrendingUp, label: 'Staking APR', value: '18.7', unit: '%', change: '', color: 'text-accent-green' },
]

const recentTx = [
  { type: 'Bid Fulfilled', agent: 'Paris AI', amount: '+2,400', time: '2m ago' },
  { type: 'Token Burned', agent: 'Protocol', amount: '-48', time: '2m ago' },
  { type: 'Agent Minted', agent: 'Chef Curator', amount: '-1,000', time: '15m ago' },
  { type: 'Staking Reward', agent: 'You', amount: '+124', time: '1h ago' },
  { type: 'Bid Placed', agent: 'Jake AI', amount: '-1,800', time: '1h ago' },
  { type: 'Bid Fulfilled', agent: 'Chainsmokers AI', amount: '+3,100', time: '2h ago' },
]

export default function Dashboard() {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-text-heading font-heading text-2xl font-bold">Dashboard</h2>
        <p className="text-text-muted text-sm mt-1">Protocol analytics and your portfolio overview</p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <GlassCard hover={false} className="text-center">
              <s.icon size={24} className={`${s.color} mx-auto mb-2`} />
              <p className="text-text-heading font-mono font-bold text-2xl">
                {s.value}<span className="text-sm text-text-muted ml-1">{s.unit}</span>
              </p>
              <p className="text-text-muted text-xs mt-1">{s.label}</p>
              {s.change && (
                <span className="text-accent-green text-xs font-medium">{s.change}</span>
              )}
            </GlassCard>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent activity */}
        <GlassCard hover={false}>
          <h3 className="text-text-heading font-semibold mb-4">Recent Activity</h3>
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
                  <p className="text-text-heading text-sm font-medium">{tx.type}</p>
                  <p className="text-text-muted text-xs">{tx.agent}</p>
                </div>
                <div className="text-right">
                  <p className={`font-mono text-sm font-medium ${tx.amount.startsWith('+') ? 'text-accent-green' : 'text-accent-orange'}`}>
                    {tx.amount} CREATOR
                  </p>
                  <p className="text-text-muted text-xs">{tx.time}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </GlassCard>

        {/* Staking panel */}
        <GlassCard hover={false}>
          <h3 className="text-text-heading font-semibold mb-4">Staking</h3>

          <div className="bg-bg-surface-hover rounded-xl p-5 mb-4">
            <p className="text-text-muted text-xs uppercase tracking-wider">Your Staked Balance</p>
            <p className="text-text-heading font-mono font-bold text-3xl mt-1">24,500 <span className="text-primary text-lg">CREATOR</span></p>
            <div className="flex items-center gap-4 mt-3 text-sm">
              <span className="text-accent-green">APR: 18.7%</span>
              <span className="text-text-muted">Unlock: 14 days</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-4">
            <div>
              <label className="text-text-muted text-xs block mb-1">Stake Amount</label>
              <input
                type="text"
                placeholder="10,000"
                className="w-full bg-bg-surface-hover border border-border rounded-lg px-3 py-2 text-text-heading text-sm outline-none focus:border-primary"
              />
            </div>
            <div>
              <label className="text-text-muted text-xs block mb-1">Lock Period</label>
              <select className="w-full bg-bg-surface-hover border border-border rounded-lg px-3 py-2 text-text-heading text-sm outline-none focus:border-primary">
                <option>14 days (18.7% APR)</option>
                <option>30 days (22.4% APR)</option>
                <option>90 days (28.1% APR)</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button className="py-2.5 rounded-lg bg-primary hover:bg-primary-light text-white font-semibold text-sm transition-colors border-none cursor-pointer">
              Stake
            </button>
            <button className="py-2.5 rounded-lg border border-border hover:border-primary/50 text-text-heading font-semibold text-sm transition-colors bg-transparent cursor-pointer">
              Unstake
            </button>
          </div>

          <div className="mt-4 pt-4 border-t border-border">
            <div className="flex justify-between text-sm">
              <span className="text-text-muted">Pending Rewards</span>
              <span className="text-accent-green font-mono font-medium">+347 CREATOR</span>
            </div>
            <button className="w-full mt-3 py-2 rounded-lg border border-accent-green/30 text-accent-green text-sm font-medium bg-transparent hover:bg-accent-green/10 transition-colors cursor-pointer">
              Claim Rewards
            </button>
          </div>
        </GlassCard>
      </div>
    </div>
  )
}
