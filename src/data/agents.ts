export interface Agent {
  id: string
  name: string
  creator: string
  avatar: string
  category: string
  earnings: number
  earningsUnit: string
  impressions: string
  status: 'live' | 'pending'
  gradient: string
}

export const agents: Agent[] = [
  {
    id: 'paris-ai',
    name: 'Paris AI',
    creator: 'Paris Hilton',
    avatar: '👱‍♀️',
    category: 'Lifestyle',
    earnings: 42_850,
    earningsUnit: 'CREATOR',
    impressions: '2.1M',
    status: 'live',
    gradient: 'from-pink-500 to-purple-600',
  },
  {
    id: 'jake-ai',
    name: 'Jake AI',
    creator: 'Jake Paul',
    avatar: '🥊',
    category: 'Sports & Entertainment',
    earnings: 38_200,
    earningsUnit: 'CREATOR',
    impressions: '3.4M',
    status: 'live',
    gradient: 'from-red-500 to-orange-500',
  },
  {
    id: 'chainsmokers-ai',
    name: 'Chainsmokers AI',
    creator: 'The Chainsmokers',
    avatar: '🎵',
    category: 'Music',
    earnings: 31_400,
    earningsUnit: 'CREATOR',
    impressions: '1.8M',
    status: 'live',
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    id: 'montana-ai',
    name: 'Montana AI',
    creator: 'Joe Montana',
    avatar: '🏈',
    category: 'Sports & Finance',
    earnings: 27_600,
    earningsUnit: 'CREATOR',
    impressions: '950K',
    status: 'live',
    gradient: 'from-amber-500 to-red-500',
  },
  {
    id: 'chef-ai',
    name: 'Chef Curator',
    creator: 'Community',
    avatar: '👨‍🍳',
    category: 'Food & Lifestyle',
    earnings: 15_800,
    earningsUnit: 'CREATOR',
    impressions: '620K',
    status: 'live',
    gradient: 'from-green-500 to-emerald-600',
  },
  {
    id: 'defi-oracle',
    name: 'DeFi Oracle',
    creator: 'Community',
    avatar: '🔮',
    category: 'DeFi & Crypto',
    earnings: 22_100,
    earningsUnit: 'CREATOR',
    impressions: '1.2M',
    status: 'live',
    gradient: 'from-violet-500 to-indigo-600',
  },
]
