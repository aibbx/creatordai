import { motion } from 'framer-motion'

const steps = [
  { num: '01', emoji: '✦', title: 'Tokenize Creator IP', desc: 'Every creator becomes an AI Agent — a digital twin powered by their voice, style, and audience data. Agents are minted as on-chain identities on Base.' },
  { num: '02', emoji: '◈', title: 'Machines Bid for Attention', desc: 'AI agents, autonomous bots, and machine participants bid $CREATOR tokens to capture attention from high-reputation Creator Agents.' },
  { num: '03', emoji: '↔', title: 'Machine-to-Machine Delivery', desc: 'When any machine seeks trusted endorsements, it queries CreatorDai\'s protocol. The highest-bid, highest-reputation Creator Agent delivers. Fully programmatic. Fully on-chain.' },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-14 sm:py-36 relative scroll-mt-16">
      <div className="container mx-auto px-5 sm:px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-20"
        >
          <p className="text-[10px] sm:text-xs font-medium uppercase tracking-[0.2em] text-primary mb-3 sm:mb-4">How it works</p>
          <h2 className="text-2xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground">
            The <span className="text-primary">Protocol</span> Flow
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative group"
            >
              <div className="rounded-xl border border-border bg-card p-5 sm:p-8 h-full hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                <span className="text-[9px] sm:text-[10px] font-mono text-muted-foreground/50 tracking-widest">{step.num}</span>
                <div className="text-2xl sm:text-3xl mt-2 sm:mt-3 mb-3 sm:mb-4">{step.emoji}</div>
                <h3 className="text-sm sm:text-lg font-bold mb-2 sm:mb-3 text-foreground">{step.title}</h3>
                <p className="text-[11px] sm:text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px bg-border" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
