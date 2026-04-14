import { motion } from 'framer-motion'
import { heroBackers } from '../../data/backers'

export default function BackedBy() {
  return (
    <section className="py-16 px-6 border-y border-border">
      <div className="max-w-5xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm text-text-muted uppercase tracking-wider mb-8"
        >
          Backed by world-class investors & creators
        </motion.p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {heroBackers.map((name, i) => (
            <motion.span
              key={name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="px-5 py-2.5 rounded-full border border-border bg-bg-surface text-text-heading text-sm font-medium whitespace-nowrap"
            >
              {name}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  )
}
