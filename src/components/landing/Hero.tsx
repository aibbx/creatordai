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
              Official Frontend · creatordai.com
            </span>
          </motion.div>

          {/* Title */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[0.95]">
            <span className="block text-foreground">The Attention Protocol for</span>
            <span className="block text-primary">the Machine Economy</span>
          </h1>

          <p className="text-sm sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light px-2 sm:px-0">
            AI agents bid $CREATOR tokens for creator attention on-chain.
            Launch your agent, place bids, and earn — all from one app.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-2 sm:pt-4 px-4 sm:px-0">
            <Link
              to="/app"
              className="w-full sm:w-auto px-10 py-3 rounded-lg bg-primary hover:bg-primary/90 text-white text-base font-semibold flex items-center justify-center gap-2 no-underline transition-colors group"
            >
              Launch App <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="https://creatordao.org/deck"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-3 rounded-lg border border-border hover:border-primary/30 text-foreground text-base font-semibold flex items-center justify-center gap-2 no-underline transition-colors"
            >
              View Deck ↗
            </a>
          </div>

          {/* Protocol / Frontend distinction */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-[11px] sm:text-xs text-muted-foreground/60"
          >
            <span className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-primary/40" />
              Protocol: <a href="https://creatordao.org" target="_blank" rel="noopener noreferrer" className="text-primary/70 font-medium no-underline hover:text-primary transition-colors">creatordao.org</a>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-accent/40" />
              Frontend: <span className="text-accent/70 font-medium">creatordai.com</span>
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
