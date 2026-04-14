import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import AgentLaunchpad from '../components/app/AgentLaunchpad'
import AttentionMarket from '../components/app/AttentionMarket'
import QuickBuy from '../components/app/QuickBuy'
import Dashboard from '../components/app/Dashboard'

const tabs = [
  { id: 'dashboard', label: 'Dashboard', symbol: '◎' },
  { id: 'agents', label: 'Agent Launchpad', symbol: '⬢' },
  { id: 'marketplace', label: 'Attention Marketplace', symbol: '◈' },
  { id: 'quickbuy', label: 'Quick Buy', symbol: '✦' },
]

const sidebarStats = [
  { label: '$CREATOR Price', value: '$0.42', badge: '+12.5%', badgeColor: 'text-green-400 bg-green-400/10', symbol: '◎' },
  { label: 'Total Staked', value: '124.5M', sub: 'CREATOR', symbol: '◆' },
  { label: 'Agents Live', value: '47', symbol: '⬢' },
  { label: '24h Attention Volume', value: '$89,420', symbol: '✦' },
  { label: 'Packages Sold (24h)', value: '23', symbol: '📦' },
  { label: 'Avg Buyer ROI', value: '2.8x', valueCls: 'text-green-400', symbol: '📊' },
  { label: 'Total Burned', value: '2.1M', sub: 'CREATOR', symbol: '🔥' },
  { label: 'Video Engines Active', value: '4', symbol: '🎬' },
  { label: 'Videos Generated (24h)', value: '342', symbol: '▶' },
]

function Skeleton({ className = '' }: { className?: string }) {
  return <div className={`animate-pulse bg-white/5 rounded-lg ${className}`} />
}

function LoadingState() {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[...Array(4)].map((_, i) => <Skeleton key={i} className="h-28" />)}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <Skeleton className="h-64" />
        <Skeleton className="h-64" />
      </div>
    </div>
  )
}

const panels: Record<string, React.ComponentType> = {
  dashboard: Dashboard,
  agents: AgentLaunchpad,
  marketplace: AttentionMarket,
  quickbuy: QuickBuy,
}

export default function DApp() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [loading, setLoading] = useState(false)

  const handleTabChange = (id: string) => {
    setLoading(true)
    setActiveTab(id)
    setTimeout(() => setLoading(false), 250)
  }

  const Panel = panels[activeTab]

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col pt-14 sm:pt-16">
      {/* Tab Bar */}
      <div className="sticky top-14 sm:top-16 z-40 border-b border-border bg-background/90 backdrop-blur-xl">
        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1 px-4 py-2 bg-secondary/50 overflow-x-auto">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => handleTabChange(t.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all border-none cursor-pointer ${
                activeTab === t.id
                  ? 'bg-primary/20 text-primary'
                  : 'bg-transparent text-muted-foreground hover:text-foreground hover:bg-secondary'
              }`}
            >
              <span className="text-sm">{t.symbol}</span>
              {t.label}
            </button>
          ))}
          <div className="ml-auto flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary border border-border text-[10px] font-medium text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
              Base Mainnet
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex border-b border-border bg-background overflow-x-auto">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => handleTabChange(t.id)}
              className={`flex-1 min-w-0 flex flex-col items-center gap-0.5 py-2.5 text-[10px] font-medium transition-all border-none cursor-pointer bg-transparent ${
                activeTab === t.id ? 'text-primary border-b-2 border-primary' : 'text-muted-foreground'
              }`}
            >
              <span className="text-base">{t.symbol}</span>
              <span className="truncate">{t.label.split(' ')[0]}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className={`hidden lg:flex flex-col border-r border-border bg-background transition-all duration-300 shrink-0 ${
          sidebarOpen ? 'w-56' : 'w-12'
        }`}>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="self-end p-2 text-muted-foreground hover:text-foreground transition-colors bg-transparent border-none cursor-pointer"
          >
            {sidebarOpen ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
          </button>
          {sidebarOpen && (
            <div className="px-3 pb-4 space-y-3">
              {sidebarStats.map((s) => (
                <div key={s.label} className="rounded-lg bg-secondary border border-border p-3">
                  <p className="text-[9px] uppercase tracking-wider text-muted-foreground mb-1">{s.label}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-primary/60">{s.symbol}</span>
                    <span className={`text-base font-bold font-mono ${'valueCls' in s && s.valueCls ? s.valueCls : 'text-foreground'}`}>{s.value}</span>
                    {s.sub && <span className="text-[10px] text-muted-foreground">{s.sub}</span>}
                    {s.badge && (
                      <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded ${s.badgeColor}`}>{s.badge}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab + (loading ? '-loading' : '')}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {loading ? <LoadingState /> : <Panel />}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>

      <footer className="border-t border-border py-4 px-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] text-muted-foreground text-center sm:text-left">
        <span>CreatorDai Protocol — Built on Base</span>
        <div className="flex gap-4">
          <span>Docs</span><span>Twitter</span><span>Discord</span>
        </div>
      </footer>
    </div>
  )
}
