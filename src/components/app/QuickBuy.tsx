import { useState } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Video, Share2, BarChart3, Shield } from 'lucide-react'
import GlassCard from '../shared/GlassCard'
import { agents } from '../../data/agents'

const levels = [
  {
    id: 1,
    name: 'Level 1 — Video Only',
    price: '500 CREATOR',
    features: ['AI-generated endorsement video', 'Choose video engine', 'Download in HD'],
  },
  {
    id: 2,
    name: 'Level 2 — Full Package',
    price: '2,000 CREATOR',
    features: [
      'AI-generated endorsement video',
      'Auto-distribution to social channels',
      '7-day featured placement',
      'On-chain attestation (verifiable proof)',
      'Real-time ROI analytics dashboard',
    ],
    recommended: true,
  },
]

const engines = [
  { id: 'heygen', name: 'HeyGen CLI', tag: 'Agent-Native', icon: '🤖' },
  { id: 'seedance', name: 'Seedance 2.0', tag: 'Cinematic', icon: '🎬' },
  { id: 'veo', name: 'Google Veo 3.1', tag: 'Highest Quality', icon: '✨' },
  { id: 'kling', name: 'Kling 3.0', tag: 'Fast & Affordable', icon: '⚡' },
]

export default function QuickBuy() {
  const [selectedAgent, setSelectedAgent] = useState(agents[0].id)
  const [selectedLevel, setSelectedLevel] = useState(2)
  const [selectedEngine, setSelectedEngine] = useState('heygen')

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-text-heading font-heading text-2xl font-bold">Quick Attention Package</h2>
        <p className="text-text-muted text-sm mt-1">Human-friendly on-ramp — buy creator attention in one click</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Config panel */}
        <div className="lg:col-span-2 space-y-5">
          {/* Choose agent */}
          <GlassCard hover={false}>
            <h3 className="text-text-heading font-semibold mb-3">1. Choose Creator Agent</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {agents.map((a) => (
                <button
                  key={a.id}
                  onClick={() => setSelectedAgent(a.id)}
                  className={`p-3 rounded-xl border text-left transition-all cursor-pointer bg-transparent ${
                    selectedAgent === a.id
                      ? 'border-primary bg-primary/10'
                      : 'border-border hover:border-border-glow'
                  }`}
                >
                  <span className="text-2xl">{a.avatar}</span>
                  <p className="text-text-heading text-sm font-medium mt-1">{a.name}</p>
                  <p className="text-text-muted text-xs">{a.creator}</p>
                </button>
              ))}
            </div>
          </GlassCard>

          {/* Choose level */}
          <GlassCard hover={false}>
            <h3 className="text-text-heading font-semibold mb-3">2. Choose Package Level</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {levels.map((lvl) => (
                <button
                  key={lvl.id}
                  onClick={() => setSelectedLevel(lvl.id)}
                  className={`p-4 rounded-xl border text-left transition-all cursor-pointer bg-transparent relative ${
                    selectedLevel === lvl.id
                      ? 'border-primary bg-primary/10'
                      : 'border-border hover:border-border-glow'
                  }`}
                >
                  {lvl.recommended && (
                    <span className="absolute -top-2 right-3 px-2 py-0.5 bg-primary rounded-full text-white text-xs font-semibold">
                      Recommended
                    </span>
                  )}
                  <p className="text-text-heading font-semibold text-sm">{lvl.name}</p>
                  <p className="text-primary font-mono text-lg font-bold mt-1">{lvl.price}</p>
                  <ul className="mt-3 space-y-1.5">
                    {lvl.features.map((f) => (
                      <li key={f} className="text-text-muted text-xs flex items-start gap-2">
                        <span className="text-accent-green mt-0.5">✓</span> {f}
                      </li>
                    ))}
                  </ul>
                </button>
              ))}
            </div>
          </GlassCard>

          {/* Choose engine */}
          <GlassCard hover={false}>
            <h3 className="text-text-heading font-semibold mb-3">3. Choose Video Engine</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {engines.map((e) => (
                <button
                  key={e.id}
                  onClick={() => setSelectedEngine(e.id)}
                  className={`p-3 rounded-xl border text-center transition-all cursor-pointer bg-transparent ${
                    selectedEngine === e.id
                      ? 'border-secondary bg-secondary/10'
                      : 'border-border hover:border-border-glow'
                  }`}
                >
                  <span className="text-2xl">{e.icon}</span>
                  <p className="text-text-heading text-sm font-medium mt-1">{e.name}</p>
                  <p className="text-text-muted text-xs">{e.tag}</p>
                </button>
              ))}
            </div>
          </GlassCard>
        </div>

        {/* Order summary */}
        <div>
          <GlassCard hover={false} className="sticky top-20">
            <h3 className="text-text-heading font-semibold mb-4">Order Summary</h3>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-text-muted">Agent</span>
                <span className="text-text-heading">{agents.find((a) => a.id === selectedAgent)?.name}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-text-muted">Package</span>
                <span className="text-text-heading">Level {selectedLevel}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-text-muted">Engine</span>
                <span className="text-text-heading">{engines.find((e) => e.id === selectedEngine)?.name}</span>
              </div>
              <div className="border-t border-border pt-3 flex justify-between">
                <span className="text-text-muted font-medium">Total</span>
                <span className="text-primary font-mono font-bold text-lg">
                  {levels.find((l) => l.id === selectedLevel)?.price}
                </span>
              </div>
            </div>

            <button className="w-full py-3 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold transition-all hover:shadow-lg hover:shadow-primary/20 border-none cursor-pointer">
              Buy Now (Connect Wallet)
            </button>
            <p className="text-text-muted text-xs text-center mt-3">
              2% burned · 10% protocol fee · on-chain receipt
            </p>

            {/* What's included */}
            {selectedLevel === 2 && (
              <div className="mt-5 pt-4 border-t border-border space-y-2">
                <p className="text-text-muted text-xs font-semibold uppercase">Level 2 Includes</p>
                {[
                  { icon: Video, text: 'HD Video Generation' },
                  { icon: Share2, text: 'Auto Social Distribution' },
                  { icon: Sparkles, text: '7-Day Featured Placement' },
                  { icon: Shield, text: 'On-Chain Attestation' },
                  { icon: BarChart3, text: 'ROI Analytics Dashboard' },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-2 text-text text-xs">
                    <item.icon size={14} className="text-secondary" />
                    {item.text}
                  </div>
                ))}
              </div>
            )}
          </GlassCard>
        </div>
      </div>
    </div>
  )
}
