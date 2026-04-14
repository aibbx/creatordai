import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-border py-8 sm:py-12">
      <div className="container mx-auto px-5 sm:px-4">
        <div className="flex flex-col items-center gap-6 sm:gap-8">
          {/* Top row */}
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between sm:gap-6 w-full">
            <Link to="/" className="flex items-center gap-2 no-underline">
              <span className="w-6 h-6 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-[10px] font-bold">C</span>
              <span className="font-bold text-lg tracking-tight text-foreground">CreatorDai</span>
              <span className="text-[10px] text-muted-foreground/50 ml-1">Official Frontend</span>
            </Link>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-[10px] sm:text-xs text-muted-foreground">
              <a href="https://creatordao.org" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors no-underline">Protocol</a>
              <a href="https://creatordao.org/deck" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors no-underline">Deck</a>
              <Link to="/app" className="hover:text-foreground transition-colors no-underline">App</Link>
              <span>Docs</span>
              <span>Twitter</span>
              <span>Discord</span>
            </div>
          </div>

          {/* Bottom row */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 w-full border-t border-border/50 pt-6 text-[10px] text-muted-foreground/50">
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 rounded border border-border bg-secondary text-[9px] font-medium text-muted-foreground">Built on Base</span>
              <span>&copy; 2026 CreatorDAO Protocol</span>
            </div>
            <div className="flex items-center gap-4 sm:ml-auto">
              <span>
                Protocol: <a href="https://creatordao.org" target="_blank" rel="noopener noreferrer" className="text-primary/60 hover:text-primary transition-colors no-underline">creatordao.org</a>
              </span>
              <span>
                Frontend: <span className="text-accent/60">creatordai.com</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
