import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Bot, ShoppingCart, Sparkles, BarChart3 } from 'lucide-react'
import TabBar from '../components/app/TabBar'
import AgentLaunchpad from '../components/app/AgentLaunchpad'
import AttentionMarket from '../components/app/AttentionMarket'
import QuickBuy from '../components/app/QuickBuy'
import Dashboard from '../components/app/Dashboard'

import type { Tab } from '../components/app/TabBar'

const tabs: Tab[] = [
  { id: 'launchpad', label: 'Agent Launchpad', icon: <Bot size={16} /> },
  { id: 'market', label: 'Attention Market', icon: <ShoppingCart size={16} /> },
  { id: 'quickbuy', label: 'Quick Buy', icon: <Sparkles size={16} /> },
  { id: 'dashboard', label: 'Dashboard', icon: <BarChart3 size={16} /> },
]

const panels: Record<string, React.ComponentType> = {
  launchpad: AgentLaunchpad,
  market: AttentionMarket,
  quickbuy: QuickBuy,
  dashboard: Dashboard,
}

export default function DApp() {
  const [active, setActive] = useState('launchpad')
  const Panel = panels[active]

  return (
    <div className="min-h-screen bg-bg">
      {/* Top bar */}
      <div className="border-b border-border bg-bg/90 backdrop-blur-md sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-text-heading font-heading font-bold text-lg no-underline">
            <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-xs font-bold">C</span>
            CreatorDai
          </Link>

          <div className="hidden md:block">
            <TabBar tabs={tabs} active={active} onChange={setActive} />
          </div>

          <button className="px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-primary-light text-sm font-medium cursor-pointer hover:bg-primary/30 transition-colors">
            Connect Wallet
          </button>
        </div>

        {/* Mobile tabs */}
        <div className="md:hidden px-4 pb-3 overflow-x-auto">
          <TabBar tabs={tabs} active={active} onChange={setActive} />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <Panel />
      </div>
    </div>
  )
}
