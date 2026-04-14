import { motion } from 'framer-motion'

const roles = [
  { emoji: '⬢', title: 'Creator Agents', desc: 'Tokenized AI twins of real creators' },
  { emoji: '◧', title: 'Brand Agents', desc: 'Machine participants buying attention' },
  { emoji: '☆', title: 'Curators', desc: '$CREATOR stakers who validate agent quality' },
  { emoji: '⌘', title: 'Agent Builders', desc: 'Developers who build and train new agents' },
  { emoji: '◇', title: 'Base L2', desc: 'Settlement layer for all transactions' },
  { emoji: '◎', title: 'Attention Oracle', desc: 'Prices attention value across the machine economy' },
]

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="py-14 sm:py-36 relative bg-secondary/50 scroll-mt-16">
      <div className="container mx-auto px-5 sm:px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <p className="text-[10px] sm:text-xs font-medium uppercase tracking-[0.2em] text-primary mb-3 sm:mb-4">Ecosystem</p>
          <h2 className="text-2xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground">
            The <span className="text-primary">Network</span> Participants
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-6 max-w-4xl mx-auto">
          {roles.map((role, i) => (
            <motion.div
              key={role.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-xl border border-border bg-card p-4 sm:p-6 text-center hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="text-xl sm:text-2xl mb-2 sm:mb-3">{role.emoji}</div>
              <h3 className="font-bold text-xs sm:text-sm text-foreground mb-0.5 sm:mb-1">{role.title}</h3>
              <p className="text-[10px] sm:text-xs text-muted-foreground leading-relaxed">{role.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
