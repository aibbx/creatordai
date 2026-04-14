import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center pt-16 sm:pt-0 overflow-hidden">
      {/* Animated mesh background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/[0.06] blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-accent/[0.04] blur-[100px]" />
      </div>

      <div className="relative z-10 container mx-auto px-5 sm:px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto space-y-5 sm:space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full border border-border bg-secondary"
          >
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] sm:text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Live on Base
            </span>
          </motion.div>

          {/* Title */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[0.95]">
            <span className="block text-foreground">The Attention Protocol for</span>
            <span className="block text-primary">the Machine Economy</span>
          </h1>

          <p className="text-sm sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light px-2 sm:px-0">
            CreatorDai tokenizes creator influence into AI agents. Machines bid for attention
            from the most trusted voices — agent to agent, on-chain.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2 sm:pt-4 px-4 sm:px-0">
            <Link
              to="/app"
              className="w-full sm:w-auto px-10 py-3 rounded-lg bg-primary hover:bg-primary/90 text-white text-base font-semibold flex items-center justify-center gap-2 no-underline transition-colors group"
            >
              Launch App <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/deck"
              className="w-full sm:w-auto px-10 py-3 rounded-lg border border-border hover:border-primary/30 text-foreground text-base font-semibold flex items-center justify-center gap-2 no-underline transition-colors"
            >
              Read the Deck <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>

        {/* Backed By card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12 sm:mt-20 rounded-2xl border border-primary/10 bg-gradient-to-b from-primary/[0.04] to-transparent p-6 sm:p-10 max-w-3xl mx-auto"
        >
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-primary/60 font-semibold mb-5 sm:mb-7">Backed by</p>

          {/* Row 1 — Lead Funds */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-5 mb-4 sm:mb-5">
            {['a16z crypto', 'Initialized Capital', 'Hack VC'].map((b) => (
              <span key={b} className="px-5 sm:px-7 py-2.5 sm:py-3 rounded-xl border border-white/10 bg-white/[0.05] backdrop-blur-sm text-sm sm:text-base text-foreground font-bold tracking-tight">
                {b}
              </span>
            ))}
          </div>

          {/* Row 2 — Celebrity Investors */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-5 sm:mb-6">
            {['Paris Hilton', 'The Chainsmokers', 'Jake Paul', 'Joe Montana'].map((b) => (
              <span key={b} className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg border border-white/[0.06] bg-white/[0.03] text-xs sm:text-sm text-foreground/80 font-semibold">
                {b}
              </span>
            ))}
          </div>

          <Link to="/deck" className="inline-flex items-center gap-1 text-xs sm:text-sm text-primary/70 hover:text-primary transition-colors font-medium no-underline">
            and 50+ investors, creators & funds
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
