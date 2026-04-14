import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useCallback } from 'react'
import { agents, engineColors } from '../../data/agents'

export default function AgentLaunchpad() {
  const [flashCard, setFlashCard] = useState<number | null>(null)
  const [flashAmount, setFlashAmount] = useState(0)

  const triggerFlash = useCallback(() => {
    const idx = Math.floor(Math.random() * agents.length)
    const amount = Math.floor(Math.random() * 30) + 5
    setFlashCard(idx)
    setFlashAmount(amount)
    setTimeout(() => setFlashCard(null), 1800)
  }, [])

  useEffect(() => {
    const interval = setInterval(triggerFlash, 3000)
    return () => clearInterval(interval)
  }, [triggerFlash])

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-foreground">Agent Launchpad</h2>
          <p className="text-xs sm:text-sm text-muted-foreground mt-1">Mint and manage creator agents (ERC-721)</p>
        </div>
        <button className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary hover:bg-primary/90 text-white text-sm font-semibold transition-colors border-none cursor-pointer">
          + Mint Agent
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        {[
          { label: 'Total Agents', value: '142', symbol: '⬢' },
          { label: 'Active Bids', value: '1,847', symbol: '◈' },
          { label: 'Total Volume', value: '2.4M', symbol: '✦' },
          { label: 'Tokens Burned', value: '48,200', symbol: '🔥' },
        ].map((s) => (
          <div key={s.label} className="rounded-xl border border-border bg-card p-4 text-center">
            <span className="text-sm text-primary/60">{s.symbol}</span>
            <p className="text-foreground font-mono font-bold text-xl mt-1">{s.value}</p>
            <p className="text-muted-foreground text-[10px] uppercase tracking-wider mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Agent Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {agents.map((agent, i) => {
          const repColor = agent.rep > 85 ? 'bg-green-500' : agent.rep > 70 ? 'bg-yellow-500' : 'bg-orange-500'
          return (
            <motion.div
              key={agent.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="relative rounded-xl border border-white/[0.06] p-4 sm:p-5 group hover:border-primary/30 transition-all duration-500"
              style={{ background: 'linear-gradient(135deg, rgba(26,26,46,0.95), rgba(20,20,40,0.9))' }}
            >
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.15), rgba(6,182,212,0.15))' }}
              />
              <div className="absolute top-3 right-3">
                <span className={`text-[9px] font-semibold px-2 py-0.5 rounded-full border ${engineColors[agent.engine] || ''}`}>
                  {agent.engine.split(' ')[0]}
                </span>
              </div>

              <AnimatePresence>
                {flashCard === i && (
                  <motion.div
                    initial={{ opacity: 0, y: 0, scale: 0.8 }}
                    animate={{ opacity: 1, y: -28, scale: 1 }}
                    exit={{ opacity: 0, y: -48, scale: 0.9 }}
                    transition={{ duration: 0.8 }}
                    className="absolute top-2 left-1/2 -translate-x-1/2 font-mono text-xs font-bold text-green-400 pointer-events-none z-20"
                  >
                    +{flashAmount} CREATOR
                  </motion.div>
                )}
              </AnimatePresence>

              <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${agent.gradient} p-[2px] mx-auto mb-3 relative flex items-center justify-center`}>
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center text-xl">{agent.avatar}</div>
              </div>

              <p className="font-mono text-sm font-bold text-foreground text-center">{agent.name}</p>
              <p className="text-[11px] text-muted-foreground text-center mb-3">{agent.handle}</p>

              <div className="h-px bg-white/[0.06] mb-3" />

              <div className="grid grid-cols-3 gap-1 text-center">
                <div>
                  <div className="flex items-center justify-center gap-1 mb-0.5">
                    <span className={`w-1.5 h-1.5 rounded-full ${repColor}`} />
                    <span className="text-[9px] uppercase tracking-wider text-muted-foreground">Rep</span>
                  </div>
                  <span className="font-mono text-sm font-bold text-foreground">{agent.rep}</span>
                </div>
                <div>
                  <span className="text-[9px] uppercase tracking-wider text-muted-foreground block mb-0.5">Earned</span>
                  <span className="font-mono text-sm font-bold text-foreground">{agent.earned}</span>
                </div>
                <div>
                  <span className="text-[9px] uppercase tracking-wider text-muted-foreground block mb-0.5">Endorse</span>
                  <span className="font-mono text-sm font-bold text-foreground">{agent.endorsements}</span>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
