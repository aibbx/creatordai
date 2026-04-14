import type { ReactNode } from 'react'

export interface Tab {
  id: string
  label: string
  icon: ReactNode
}

interface Props {
  tabs: Tab[]
  active: string
  onChange: (id: string) => void
}

export default function TabBar({ tabs, active, onChange }: Props) {
  return (
    <div className="flex items-center gap-1 p-1 bg-bg-surface rounded-xl border border-border w-fit">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all border-none cursor-pointer ${
            active === tab.id
              ? 'bg-primary text-white'
              : 'bg-transparent text-text-muted hover:text-text-heading'
          }`}
        >
          {tab.icon}
          {tab.label}
        </button>
      ))}
    </div>
  )
}
