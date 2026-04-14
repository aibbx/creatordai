import { motion } from 'framer-motion'

const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }

const leadInvestors = ['a16z crypto', 'Initialized Capital']
const celebrities = [
  { name: 'Paris Hilton', tag: 'Entrepreneur' },
  { name: 'The Chainsmokers', tag: 'Music' },
  { name: 'Jake Paul', tag: 'Creator' },
  { name: 'Joe Montana', tag: 'Sports' },
  { name: 'Kygo', tag: 'Music' },
  { name: 'Matthew Bellamy', tag: 'Muse' },
]
const moreCelebs = ['Michael Ovitz (CAA)', 'Liam Payne', 'Shawn Johnson', 'JaVale McGee', 'Michael Einziger (Incubus)', 'Nadya Tolokonnikova (Pussy Riot)']
const institutions = [
  'SV Angel', 'M13', 'Hack VC', 'Alliance DAO', 'Shima Capital', '6th Man Ventures',
  'Liquid 2 Ventures', 'Palm Tree Crew', 'Fuel Capital', 'Fika Ventures',
  'Alchemy Ventures', 'Soma Capital', 'Goldhouse', 'Abstract Ventures',
  'Audacious Ventures', 'Olive Capital', 'MGU Capital', 'Position Ventures',
]
const advisors = [
  { name: 'Meghana Dhar', from: 'Snapchat' },
  { name: 'Julia Yan', from: 'TikTok' },
  { name: 'Asad Awan', from: 'Facebook' },
  { name: 'Lester Chen', from: 'a16z' },
  { name: 'Katherine Rundell', from: 'a16z' },
  { name: 'Derek Dolin', from: 'a16z CLF' },
]

export default function BackedBy() {
  return (
    <section id="backers" className="py-14 sm:py-36 relative overflow-hidden scroll-mt-16">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-primary/[0.04] blur-[100px]" />
      </div>

      <div className="container mx-auto px-5 sm:px-4 relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          className="text-center max-w-5xl mx-auto"
        >
          <motion.p variants={fadeUp} className="text-xs sm:text-sm font-medium uppercase tracking-[0.2em] text-primary mb-3 sm:mb-4">Social Proof</motion.p>
          <motion.h2 variants={fadeUp} className="text-2xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground mb-3 sm:mb-4">
            Built on the Most Connected <span className="text-primary">Creator Network</span> in Web3
          </motion.h2>
          <motion.p variants={fadeUp} className="text-muted-foreground max-w-xl mx-auto text-xs sm:text-base mb-8 sm:mb-14">
            $20M+ raised from the world's top investors and creators
          </motion.p>

          {/* Metrics */}
          <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-10 sm:mb-16 max-w-3xl mx-auto">
            {[
              { value: '$20M+', label: 'Raised', sub: 'Seed round co-led by a16z crypto & Initialized Capital' },
              { value: '50+', label: 'Investors & Creators', sub: 'The most connected cap table in Web3' },
              { value: '500M+', label: 'Social Reach', sub: 'Combined follower count of creator network' },
            ].map((m) => (
              <div key={m.label} className="rounded-2xl border border-border/50 bg-gradient-to-b from-card to-card/50 p-5 sm:p-7 text-center backdrop-blur-sm">
                <p className="text-3xl sm:text-5xl font-extrabold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent mb-1">{m.value}</p>
                <p className="text-sm sm:text-base font-bold text-foreground mb-1.5">{m.label}</p>
                <p className="text-[11px] sm:text-xs text-muted-foreground/70 leading-relaxed">{m.sub}</p>
              </div>
            ))}
          </motion.div>

          {/* Lead Investors */}
          <motion.div variants={fadeUp} className="mb-8 sm:mb-12">
            <p className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-muted-foreground/40 mb-4 sm:mb-5 font-medium">Lead Investors</p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-5">
              {leadInvestors.map((name) => (
                <div key={name} className="relative group">
                  <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative px-8 sm:px-12 py-4 sm:py-6 rounded-2xl border border-border/60 bg-gradient-to-b from-card via-card to-card/80 backdrop-blur-sm">
                    <span className="text-lg sm:text-2xl font-bold text-foreground">{name}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Celebrity Investors */}
          <motion.div variants={fadeUp} className="mb-6 sm:mb-10">
            <p className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-muted-foreground/40 mb-4 font-medium">Creator & Celebrity Investors</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 sm:gap-3 max-w-4xl mx-auto mb-3">
              {celebrities.map((c) => (
                <div key={c.name} className="rounded-xl border border-border/40 bg-gradient-to-b from-card to-secondary/30 p-3 sm:p-4 text-center group hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                  <p className="text-xs sm:text-sm font-semibold text-foreground mb-0.5">{c.name}</p>
                  <p className="text-[9px] sm:text-[10px] text-primary/60 font-medium uppercase tracking-wider">{c.tag}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
              {moreCelebs.map((name) => (
                <span key={name} className="px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-lg border border-border/40 bg-card/50 text-xs sm:text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                  {name}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Institutional Investors */}
          <motion.div variants={fadeUp} className="mb-8 sm:mb-12">
            <p className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-muted-foreground/40 mb-3 font-medium">Institutional Investors</p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5 max-w-4xl mx-auto">
              {institutions.map((name) => (
                <span key={name} className="px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full border border-border/30 bg-secondary/50 text-[11px] sm:text-xs font-medium text-muted-foreground/80 hover:text-foreground hover:border-border/60 transition-all duration-300 cursor-pointer">
                  {name}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Advisory Board */}
          <motion.div variants={fadeUp} className="mb-8 sm:mb-10">
            <p className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-muted-foreground/40 mb-4 font-medium">Advisory Board</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 max-w-4xl mx-auto">
              {advisors.map((a) => (
                <div key={a.name} className="rounded-lg border border-border/30 bg-secondary/30 p-3 sm:p-4 text-center">
                  <p className="text-xs sm:text-sm font-semibold text-foreground/80">{a.name}</p>
                  <p className="text-[9px] sm:text-[10px] text-primary/50 font-medium">{a.from}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Quote */}
          <motion.div variants={fadeUp} className="relative max-w-3xl mx-auto mb-4">
            <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-primary/10 via-transparent to-primary/10" />
            <div className="relative rounded-2xl border border-border/40 bg-gradient-to-b from-card to-card/50 p-6 sm:p-10 backdrop-blur-sm">
              <div className="text-primary/20 text-4xl sm:text-5xl font-serif leading-none mb-3">"</div>
              <p className="text-sm sm:text-base text-muted-foreground italic leading-relaxed -mt-4">
                CreatorDai doesn't start from zero. We inherit the most iconic investor base in creator Web3 — and rebuild the protocol for the machine economy.
              </p>
            </div>
          </motion.div>

          <motion.p variants={fadeUp} className="text-[10px] sm:text-xs text-muted-foreground/30 max-w-lg mx-auto">
            Investor names reflect the CreatorDAO ecosystem. CreatorDai is an independent protocol building on this foundation.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
