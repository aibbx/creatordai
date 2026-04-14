import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border backdrop-blur-xl bg-bg/80">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-text-heading font-heading font-bold text-xl no-underline">
          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-sm font-bold">C</span>
          CreatorDai
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#how-it-works" className="text-text-muted hover:text-text-heading transition-colors text-sm no-underline">How It Works</a>
          <a href="#token" className="text-text-muted hover:text-text-heading transition-colors text-sm no-underline">$CREATOR</a>
          <a href="#backers" className="text-text-muted hover:text-text-heading transition-colors text-sm no-underline">Backers</a>
          <Link to="/deck" className="text-text-muted hover:text-text-heading transition-colors text-sm no-underline">Deck</Link>
          <Link
            to="/app"
            className="px-5 py-2 rounded-full bg-primary hover:bg-primary-light text-white text-sm font-semibold transition-colors no-underline"
          >
            Launch App
          </Link>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-text-heading bg-transparent border-none cursor-pointer">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border bg-bg/95 backdrop-blur-xl overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              <a href="#how-it-works" onClick={() => setOpen(false)} className="text-text-muted hover:text-text-heading transition-colors no-underline">How It Works</a>
              <a href="#token" onClick={() => setOpen(false)} className="text-text-muted hover:text-text-heading transition-colors no-underline">$CREATOR</a>
              <a href="#backers" onClick={() => setOpen(false)} className="text-text-muted hover:text-text-heading transition-colors no-underline">Backers</a>
              <Link to="/deck" onClick={() => setOpen(false)} className="text-text-muted hover:text-text-heading transition-colors no-underline">Deck</Link>
              <Link
                to="/app"
                onClick={() => setOpen(false)}
                className="px-5 py-2.5 rounded-full bg-primary text-white text-sm font-semibold text-center no-underline"
              >
                Launch App
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
