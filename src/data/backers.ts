export interface Backer {
  name: string
  type: 'vc' | 'creator' | 'fund'
  tier: 1 | 2 | 3 | 4
  logo?: string
}

// Tier 1: Hero backers (shown on homepage)
export const heroBackers: string[] = [
  'a16z crypto',
  'Initialized Capital',
  'Hack VC',
  'Paris Hilton',
  'The Chainsmokers',
  'Jake Paul',
  'Joe Montana',
]

// Full backer list for the backers section
export const allBackers: Backer[] = [
  // Tier 1 — Lead VCs
  { name: 'a16z crypto', type: 'vc', tier: 1 },
  { name: 'Initialized Capital', type: 'vc', tier: 1 },
  { name: 'Hack VC', type: 'vc', tier: 1 },

  // Tier 2 — Celebrity Creators
  { name: 'Paris Hilton', type: 'creator', tier: 2 },
  { name: 'The Chainsmokers', type: 'creator', tier: 2 },
  { name: 'Jake Paul', type: 'creator', tier: 2 },
  { name: 'Joe Montana', type: 'creator', tier: 2 },

  // Tier 3 — VCs & Funds
  { name: 'Republic Capital', type: 'vc', tier: 3 },
  { name: 'Arca', type: 'fund', tier: 3 },
  { name: 'Blockchange Ventures', type: 'vc', tier: 3 },
  { name: 'Dapper Labs', type: 'fund', tier: 3 },
  { name: 'DeFiance Capital', type: 'fund', tier: 3 },
  { name: 'Collab+Currency', type: 'fund', tier: 3 },
  { name: 'Sfermion', type: 'fund', tier: 3 },
  { name: 'Polygon Ventures', type: 'vc', tier: 3 },

  // Tier 4 — Angels & Others
  { name: 'Lil Baby', type: 'creator', tier: 4 },
  { name: 'Tyga', type: 'creator', tier: 4 },
  { name: 'H.E.R.', type: 'creator', tier: 4 },
  { name: 'Offset', type: 'creator', tier: 4 },
  { name: '21 Savage', type: 'creator', tier: 4 },
  { name: 'Gunna', type: 'creator', tier: 4 },
  { name: 'Mariah Carey', type: 'creator', tier: 4 },
]
