import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { to: '/', label: 'Home', hash: '' },
  { to: '/', label: 'Agents', hash: '#agents' },
  { to: '/app', label: 'Launch App', hash: '' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => setOpen(false), [location.pathname])

  const handleClick = (link: typeof links[0]) => {
    if (link.hash) {
      const id = link.hash.replace('#', '')
      if (location.pathname === '/') {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      } else {
        navigate('/')
        setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 100)
      }
    }
  }

  const isActive = (link: typeof links[0]) => {
    if (link.hash) return location.hash === link.hash
    return location.pathname === link.to && !location.hash
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-14 sm:h-16 px-4">
        <Link to="/" className="flex items-center gap-2 no-underline group">
          <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-xs font-bold">C</span>
          <span className="font-bold text-lg sm:text-xl tracking-tight text-foreground">CreatorDai</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1 bg-secondary rounded-lg p-1">
          {links.map((link, i) => (
            <Link
              key={i}
              to={link.hash ? `/${link.hash}` : link.to}
              onClick={(e) => { if (link.hash) { e.preventDefault(); handleClick(link) } }}
              className="no-underline"
            >
              <div className="relative px-5 py-1.5">
                {isActive(link) && (
                  <motion.div
                    layoutId="navbar-active"
                    className="absolute inset-0 bg-background rounded-md shadow-sm"
                    transition={{ type: 'spring', duration: 0.5 }}
                  />
                )}
                <span className={`relative text-sm font-medium transition-colors ${
                  isActive(link) ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                }`}>
                  {link.label}
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="https://creatordao.org"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border bg-secondary text-[10px] font-medium text-muted-foreground hover:text-foreground transition-colors no-underline"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
            Protocol
          </a>
          <button className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 text-primary text-sm font-medium cursor-pointer hover:bg-primary/30 transition-colors">
            Connect Wallet
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors bg-transparent border-none cursor-pointer"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border bg-background overflow-hidden"
          >
            <div className="container mx-auto px-4 py-3 space-y-1">
              {links.map((link, i) => (
                <Link
                  key={i}
                  to={link.hash ? `/${link.hash}` : link.to}
                  onClick={(e) => { setOpen(false); if (link.hash) { e.preventDefault(); handleClick(link) } }}
                  className="no-underline"
                >
                  <div className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive(link) ? 'bg-primary/5 text-primary' : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                  }`}>
                    {link.label}
                  </div>
                </Link>
              ))}
              <a
                href="https://creatordao.org"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-3 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors no-underline"
              >
                Protocol (creatordao.org) ↗
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
