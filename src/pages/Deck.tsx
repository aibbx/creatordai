import { useState, useEffect, useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Home, Maximize2, Minimize2 } from 'lucide-react'
import { slides } from '../data/slides'

export default function Deck() {
  const [current, setCurrent] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const go = useCallback(
    (dir: 1 | -1) => setCurrent((c) => Math.max(0, Math.min(slides.length - 1, c + dir))),
    [],
  )

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); go(1) }
      if (e.key === 'ArrowLeft') { e.preventDefault(); go(-1) }
      if (e.key === 'Escape') setIsFullscreen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [go])

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      containerRef.current?.requestFullscreen?.()
      setIsFullscreen(true)
    } else {
      document.exitFullscreen?.()
      setIsFullscreen(false)
    }
  }

  useEffect(() => {
    const onFs = () => {
      if (!document.fullscreenElement) setIsFullscreen(false)
    }
    document.addEventListener('fullscreenchange', onFs)
    return () => document.removeEventListener('fullscreenchange', onFs)
  }, [])

  const slide = slides[current]

  return (
    <div ref={containerRef} className="min-h-screen bg-bg flex flex-col">
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-border bg-bg/90 backdrop-blur-md z-10">
        <Link to="/" className="text-text-muted hover:text-text-heading transition-colors no-underline flex items-center gap-2 text-sm">
          <Home size={16} /> CreatorDai
        </Link>
        <span className="text-text-muted text-xs font-mono">
          {current + 1} / {slides.length}
        </span>
        <button onClick={toggleFullscreen} className="text-text-muted hover:text-text-heading bg-transparent border-none cursor-pointer">
          {isFullscreen ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
        </button>
      </div>

      {/* Slide area */}
      <div className="flex-1 flex items-center justify-center relative px-6 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-4xl"
          >
            <div className="bg-bg-surface border border-border rounded-2xl p-8 md:p-14 min-h-[420px] flex flex-col justify-center relative overflow-hidden">
              {/* Gradient accent */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${slide.gradient}`} />

              <span className="text-primary text-xs font-semibold tracking-wider uppercase mb-4">
                {slide.tag} — Slide {slide.id}
              </span>

              <h1 className="font-heading text-3xl md:text-5xl font-bold text-text-heading leading-tight whitespace-pre-line mb-4">
                {slide.title}
              </h1>

              {slide.subtitle && (
                <p className="text-lg md:text-xl text-text-muted mb-6">{slide.subtitle}</p>
              )}

              {slide.bullets && (
                <ul className="space-y-3 mt-2">
                  {slide.bullets.map((b, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.08 }}
                      className="flex items-start gap-3 text-text text-sm md:text-base leading-relaxed"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      {b}
                    </motion.li>
                  ))}
                </ul>
              )}

              {/* Cover & Close slide special CTA */}
              {(slide.id === 1 || slide.id === 17) && (
                <div className="mt-8">
                  <Link
                    to="/app"
                    className={`inline-block px-8 py-3 rounded-full bg-gradient-to-r ${slide.gradient} text-white font-semibold no-underline`}
                  >
                    {slide.id === 1 ? 'Explore the Protocol →' : 'Launch App →'}
                  </Link>
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Nav arrows */}
        <button
          onClick={() => go(-1)}
          disabled={current === 0}
          className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-bg-surface border border-border flex items-center justify-center text-text-muted hover:text-text-heading disabled:opacity-20 transition-all cursor-pointer disabled:cursor-default"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => go(1)}
          disabled={current === slides.length - 1}
          className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-bg-surface border border-border flex items-center justify-center text-text-muted hover:text-text-heading disabled:opacity-20 transition-all cursor-pointer disabled:cursor-default"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Progress dots */}
      <div className="flex items-center justify-center gap-1.5 py-4">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all border-none cursor-pointer ${
              i === current ? 'w-6 bg-primary' : 'w-1.5 bg-border hover:bg-text-muted'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
