import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-border py-12 px-6 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 text-text-heading font-heading font-bold text-lg">
          <span className="w-7 h-7 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-xs font-bold">C</span>
          CreatorDai
        </div>

        <div className="flex items-center gap-6 text-sm text-text-muted">
          <a href="#how-it-works" className="hover:text-text-heading transition-colors no-underline">Protocol</a>
          <Link to="/deck" className="hover:text-text-heading transition-colors no-underline">Deck</Link>
          <Link to="/app" className="hover:text-text-heading transition-colors no-underline">dApp</Link>
          <a href="https://github.com/creatordai" target="_blank" rel="noopener noreferrer" className="hover:text-text-heading transition-colors no-underline">GitHub</a>
        </div>

        <p className="text-xs text-text-muted">
          &copy; {new Date().getFullYear()} CreatorDai. Open protocol for the Machine Economy.
        </p>
      </div>
    </footer>
  )
}
