import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-border py-6 sm:py-10">
      <div className="container mx-auto px-5 sm:px-4">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between sm:gap-6">
          <Link to="/" className="flex items-center gap-2 no-underline">
            <span className="w-6 h-6 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-[10px] font-bold">C</span>
            <span className="font-bold text-lg tracking-tight text-foreground">CreatorDai</span>
          </Link>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-[10px] sm:text-xs text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors no-underline">Protocol</Link>
            <Link to="/deck" className="hover:text-foreground transition-colors no-underline">Deck</Link>
            <Link to="/app" className="hover:text-foreground transition-colors no-underline">App</Link>
            <span>Docs</span>
            <span>Twitter</span>
            <span>Discord</span>
          </div>

          <div className="flex items-center gap-3 text-[10px] text-muted-foreground">
            <span className="px-2 py-1 rounded border border-border bg-secondary text-[9px] font-medium">Built on Base</span>
            <span>&copy; 2026 CreatorDai Protocol</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
