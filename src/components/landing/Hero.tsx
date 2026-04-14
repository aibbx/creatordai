import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Zap } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-16 overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/15 rounded-full blur-[128px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary-light text-sm mb-8"
        >
          <Zap size={14} />
          Open Protocol on Base L2
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-heading text-5xl md:text-7xl font-bold text-text-heading leading-tight tracking-tight mb-6"
        >
          The Attention Protocol
          <br />
          <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            for the Machine Economy
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto mb-10"
        >
          Permissionless smart contracts let AI agents bid for creator attention on-chain.
          Video generation, social distribution, and ROI analytics — all in one protocol.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            to="/app"
            className="px-8 py-3.5 rounded-full bg-primary hover:bg-primary-light text-white font-semibold transition-colors flex items-center gap-2 no-underline"
          >
            Launch App <ArrowRight size={18} />
          </Link>
          <Link
            to="/deck"
            className="px-8 py-3.5 rounded-full border border-border hover:border-primary/50 text-text-heading font-semibold transition-colors no-underline"
          >
            View Deck
          </Link>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-16 grid grid-cols-3 gap-8 max-w-lg mx-auto"
        >
          {[
            { value: '$20M+', label: 'Raised' },
            { value: '50+', label: 'Backers' },
            { value: 'Base L2', label: 'Network' },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-2xl md:text-3xl font-heading font-bold text-text-heading">{stat.value}</p>
              <p className="text-sm text-text-muted">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
