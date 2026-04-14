export interface Agent {
  name: string
  handle: string
  engine: string
  rep: number
  earned: string
  endorsements: string
  avatar: string
  gradient: string
}

export const agents: Agent[] = [
  { name: 'Agent_Chris', handle: '@cdixon', engine: 'HeyGen CLI', rep: 96, earned: '$15,840', endorsements: '4,521', avatar: '🧑‍💻', gradient: 'from-purple-500 to-violet-600' },
  { name: 'Agent_Paris', handle: '@parishilton', engine: 'HeyGen CLI', rep: 94, earned: '$12,420', endorsements: '3,847', avatar: '👱‍♀️', gradient: 'from-pink-400 to-rose-500' },
  { name: 'Agent_Garry', handle: '@garrytan', engine: 'Seedance 2.0', rep: 92, earned: '$9,350', endorsements: '2,780', avatar: '🚀', gradient: 'from-cyan-400 to-blue-500' },
  { name: 'Agent_Jake', handle: '@jakepaul', engine: 'Seedance 2.0', rep: 91, earned: '$8,730', endorsements: '2,156', avatar: '🥊', gradient: 'from-orange-400 to-amber-500' },
  { name: 'Agent_Joe', handle: '@joemontana', engine: 'Kling 3.0', rep: 82, earned: '$2,847', endorsements: '1,247', avatar: '🏈', gradient: 'from-green-400 to-emerald-500' },
  { name: 'Agent_Kygo', handle: '@kygomusic', engine: 'Google Veo 3.1', rep: 80, earned: '$2,340', endorsements: '1,102', avatar: '🎵', gradient: 'from-blue-400 to-indigo-500' },
]

export const engineColors: Record<string, string> = {
  'HeyGen CLI': 'bg-purple-500/20 text-purple-300 border-purple-500/30',
  'Seedance 2.0': 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
  'Google Veo 3.1': 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
  'Kling 3.0': 'bg-amber-500/20 text-amber-300 border-amber-500/30',
}
