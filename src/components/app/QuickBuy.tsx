import { useState } from 'react'
import { agents } from '../../data/agents'

const levels = [
  {
    id: 1, name: 'Level 1 — Video Only', price: '500 CREATOR',
    features: ['AI-generated endorsement video', 'Choose video engine', 'Download in HD'],
  },
  {
    id: 2, name: 'Level 2 — Full Package', price: '2,000 CREATOR', recommended: true,
    features: ['AI-generated endorsement video', 'Auto-distribution to social channels', '7-day featured placement', 'On-chain attestation', 'Real-time ROI analytics'],
  },
]

const engines = [
  { id: 'heygen', name: 'HeyGen CLI', tag: 'Agent-Native', color: 'border-purple-500/30' },
  { id: 'seedance', name: 'Seedance 2.0', tag: 'Cinematic', color: 'border-cyan-500/30' },
  { id: 'veo', name: 'Veo 3.1', tag: 'Highest Quality', color: 'border-emerald-500/30' },
  { id: 'kling', name: 'Kling 3.0', tag: 'Fast', color: 'border-amber-500/30' },
]

export default function QuickBuy() {
  const [selectedAgent, setSelectedAgent] = useState(0)
  const [selectedLevel, setSelectedLevel] = useState(2)
  const [selectedEngine, setSelectedEngine] = useState('heygen')

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-foreground">Quick Attention Package</h2>
        <p className="text-xs sm:text-sm text-muted-foreground mt-1">Human-friendly on-ramp — buy creator attention in one click</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-5">
          {/* Step 1: Agent */}
          <div className="rounded-xl border border-border bg-card p-5">
            <h3 className="text-foreground font-semibold mb-3 text-sm">1. Choose Creator Agent</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {agents.map((a, i) => (
                <button
                  key={a.name}
                  onClick={() => setSelectedAgent(i)}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer bg-transparent ${
                    selectedAgent === i ? 'border-primary bg-primary/10' : 'border-border hover:border-primary/20'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${a.gradient} flex items-center justify-center text-lg mb-2`}>
                    {a.avatar}
                  </div>
                  <p className="text-foreground text-xs font-bold font-mono">{a.name}</p>
                  <p className="text-muted-foreground text-[10px]">{a.handle}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Level */}
          <div className="rounded-xl border border-border bg-card p-5">
            <h3 className="text-foreground font-semibold mb-3 text-sm">2. Choose Package Level</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {levels.map((lvl) => (
                <button
                  key={lvl.id}
                  onClick={() => setSelectedLevel(lvl.id)}
                  className={`p-4 rounded-xl border text-left transition-all cursor-pointer bg-transparent relative ${
                    selectedLevel === lvl.id ? 'border-primary bg-primary/10' : 'border-border hover:border-primary/20'
                  }`}
                >
                  {lvl.recommended && (
                    <span className="absolute -top-2 right-3 px-2 py-0.5 bg-primary rounded-full text-white text-[9px] font-semibold">Recommended</span>
                  )}
                  <p className="text-foreground font-semibold text-sm">{lvl.name}</p>
                  <p className="text-primary font-mono text-lg font-bold mt-1">{lvl.price}</p>
                  <ul className="mt-3 space-y-1.5">
                    {lvl.features.map((f) => (
                      <li key={f} className="text-muted-foreground text-[11px] flex items-start gap-2">
                        <span className="text-green-400 mt-0.5">✓</span> {f}
                      </li>
                    ))}
                  </ul>
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Engine */}
          <div className="rounded-xl border border-border bg-card p-5">
            <h3 className="text-foreground font-semibold mb-3 text-sm">3. Choose Video Engine</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {engines.map((e) => (
                <button
                  key={e.id}
                  onClick={() => setSelectedEngine(e.id)}
                  className={`p-3 rounded-xl border text-center transition-all cursor-pointer bg-transparent ${
                    selectedEngine === e.id ? `${e.color} bg-white/[0.05]` : 'border-border hover:border-primary/20'
                  }`}
                >
                  <p className="text-foreground text-xs font-bold">{e.name}</p>
                  <p className="text-[9px] text-primary/60 font-medium uppercase tracking-wider">{e.tag}</p>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div>
          <div className="rounded-xl border border-border bg-card p-5 sticky top-32">
            <h3 className="text-foreground font-semibold mb-4 text-sm">Order Summary</h3>
            <div className="space-y-3 mb-6 text-xs">
              <div className="flex justify-between"><span className="text-muted-foreground">Agent</span><span className="text-foreground font-mono">{agents[selectedAgent].name}</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Package</span><span className="text-foreground">Level {selectedLevel}</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Engine</span><span className="text-foreground">{engines.find(e => e.id === selectedEngine)?.name}</span></div>
              <div className="border-t border-border pt-3 flex justify-between">
                <span className="text-muted-foreground font-medium">Total</span>
                <span className="text-primary font-mono font-bold text-lg">{levels.find(l => l.id === selectedLevel)?.price}</span>
              </div>
            </div>
            <button className="w-full py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-semibold transition-all hover:shadow-lg hover:shadow-primary/20 border-none cursor-pointer text-sm">
              Buy Now (Connect Wallet)
            </button>
            <p className="text-muted-foreground text-[10px] text-center mt-3">2% burned · 10% protocol fee · on-chain receipt</p>
          </div>
        </div>
      </div>
    </div>
  )
}
