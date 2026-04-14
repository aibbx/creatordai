export interface Slide {
  id: number
  tag: string
  title: string
  subtitle?: string
  bullets?: string[]
  visual?: string
  gradient: string
}

export const slides: Slide[] = [
  {
    id: 1,
    tag: 'Cover',
    title: 'The Attention Protocol\nfor the Machine Economy',
    subtitle: 'CreatorDai — Open, Permissionless, On-Chain',
    gradient: 'from-primary via-purple-600 to-secondary',
  },
  {
    id: 2,
    tag: 'Problem',
    title: 'Attention Is the Scarcest Asset in the Machine Economy',
    bullets: [
      '10B+ AI agents will exist by 2028 — all competing for human attention',
      'No protocol exists for machines to programmatically buy creator attention',
      'Current ad infra (Google, Meta) is human-only, closed, and opaque',
      'Creators monetize <2% of their attention surface area',
    ],
    gradient: 'from-red-600 to-orange-600',
  },
  {
    id: 3,
    tag: 'Vision',
    title: 'What If Attention Had an Open Protocol?',
    bullets: [
      'Like Uniswap for liquidity — but for attention',
      'Permissionless: any agent can bid, any creator can earn',
      'On-chain: every impression, bid, and payment is verifiable',
      'Machine-native: CLI, SDK, MCP server — built for agents, not browsers',
    ],
    gradient: 'from-primary to-indigo-600',
  },
  {
    id: 4,
    tag: 'Product',
    title: 'CreatorDai Protocol',
    subtitle: 'Four layers. One protocol.',
    bullets: [
      'Layer 0 — Multi-Engine Video: HeyGen CLI, Seedance 2.0, Google Veo 3.1, Kling 3.0',
      'Layer 1 — Agent Launchpad: Mint ERC-721 creator agents (digital twins)',
      'Layer 2 — Attention Market: Permissionless bidding engine with escrow & auto-splits',
      'Layer 3 — Attention Oracle: On-chain reputation scoring & attention pricing',
    ],
    gradient: 'from-secondary to-cyan-600',
  },
  {
    id: 5,
    tag: 'Layer 0',
    title: 'Multi-Engine Video Generation',
    bullets: [
      'HeyGen CLI — Agent-native, API-first, ideal for programmatic generation',
      'Seedance 2.0 — Cinematic quality, motion-rich brand content',
      'Google Veo 3.1 — Highest fidelity, complex scene understanding',
      'Kling 3.0 — Fast & affordable, high-volume use cases',
      'Engine selection is automatic or manual — protocol is engine-agnostic',
    ],
    gradient: 'from-green-600 to-emerald-600',
  },
  {
    id: 6,
    tag: 'Layer 1',
    title: 'Agent Launchpad',
    bullets: [
      'Any creator mints a permissionless AI agent (ERC-721)',
      'Digital twin powered by multi-engine video — speaks, endorses, creates',
      'Zero ongoing cost for creators — all compute paid by attention buyers',
      'Agents accept bids 24/7 autonomously via smart contract',
    ],
    gradient: 'from-violet-600 to-purple-600',
  },
  {
    id: 7,
    tag: 'Layer 2',
    title: 'Attention Market',
    subtitle: 'The core bidding engine',
    bullets: [
      'Brands & AI agents bid $CREATOR tokens for creator attention',
      'Smart contracts handle escrow, fee splits, and burns automatically',
      'Quick Attention Package: Video + Distribution + Analytics + On-chain Attestation',
      'Fully permissionless — call contracts from dApp, CLI, SDK, or directly',
    ],
    gradient: 'from-primary to-pink-600',
  },
  {
    id: 8,
    tag: 'Layer 3',
    title: 'Attention Oracle',
    bullets: [
      'On-chain reputation scoring for every agent',
      'Real-time attention pricing based on engagement data',
      'ROI tracking: cost-per-impression, cost-per-engagement on-chain',
      'Feeds data back to Layer 2 for dynamic pricing',
    ],
    gradient: 'from-amber-600 to-orange-600',
  },
  {
    id: 9,
    tag: 'Quick Buy',
    title: 'Human-Friendly On-Ramp',
    subtitle: 'Not just for machines — humans can use the protocol too',
    bullets: [
      'Level 1: Generate an endorsement video from any creator agent',
      'Level 2: Video + auto-distribution to social channels + 7-day feature + on-chain attestation + ROI analytics',
      'One-click purchase with $CREATOR or credit card (via on-ramp)',
      'Same smart contracts, same burn mechanics — just a friendlier UX',
    ],
    gradient: 'from-pink-600 to-rose-600',
  },
  {
    id: 10,
    tag: 'Open Protocol',
    title: 'Why Open from Day 1',
    bullets: [
      'Smart contract fees are uncircumventable — protocol earns regardless of frontend',
      'Open access → more builders → more volume → more burns',
      'CLI + SDK + MCP Server: any AI framework can integrate',
      'creatordai.com is just one frontend — protocol is the product',
    ],
    gradient: 'from-secondary to-blue-600',
  },
  {
    id: 11,
    tag: 'Token',
    title: '$CREATOR Token Economics',
    bullets: [
      'Stake: 18%+ APR from protocol fees, 14-day unlock period',
      'Pay: All attention bids denominated in $CREATOR',
      'Burn: 2% of every transaction burned automatically',
      'Govern: Token holders set protocol parameters — fees, burn rate, engines',
    ],
    gradient: 'from-accent-orange to-yellow-600',
  },
  {
    id: 12,
    tag: 'Revenue',
    title: 'Protocol Revenue Model',
    subtitle: '10% fee on every attention transaction',
    bullets: [
      '40% → Curators (incentivize curation & matching quality)',
      '25% → Treasury (protocol development & growth)',
      '20% → Burned (permanent supply reduction)',
      '15% → Agent Builder (reward creator agent minters)',
    ],
    gradient: 'from-green-600 to-teal-600',
  },
  {
    id: 13,
    tag: 'Defense',
    title: 'Token Unlock Defense (Aug 2026)',
    bullets: [
      'Staking Sink: 18%+ APR locks tokens for 14+ days',
      'Mint Demand: New agent minting requires $CREATOR',
      'Brand Buy Pressure: Quick Attention Packages create constant demand',
      'Auto-Burns: 2% per transaction removes supply permanently',
      'Developer Lock: SDK/CLI integrations create structural demand',
    ],
    gradient: 'from-red-600 to-pink-600',
  },
  {
    id: 14,
    tag: 'Traction',
    title: 'What We Have',
    bullets: [
      '$20M+ raised from a16z crypto, Initialized Capital, Hack VC + 50 others',
      'Paris Hilton, Jake Paul, The Chainsmokers, Joe Montana as creator backers',
      'Full protocol design complete — smart contracts in development',
      'Multi-engine video pipeline operational (HeyGen CLI integrated)',
    ],
    gradient: 'from-primary to-violet-600',
  },
  {
    id: 15,
    tag: 'Roadmap',
    title: 'Roadmap',
    bullets: [
      'Q2 2026 — Protocol launch: Agent Launchpad + Attention Market on Base testnet',
      'Q3 2026 — Mainnet + $CREATOR token unlock (August) + Quick Attention Package live',
      'Q4 2026 — CLI + SDK + MCP Server public release, third-party integrations',
      '2027 — Attention Oracle v2, cross-chain expansion, prediction markets layer',
    ],
    gradient: 'from-cyan-600 to-blue-600',
  },
  {
    id: 16,
    tag: 'Team',
    title: 'Built by Operators',
    bullets: [
      'Founding team from Cisco, Tencent — scaled products to 100M+ users',
      'Deep fintech, crypto finance, and consumer AI experience',
      'Connected to family offices in Asia and VCs in the Bay Area',
      'Track record: 20x+ stock price multipliers via AI-driven pivots',
    ],
    gradient: 'from-indigo-600 to-purple-600',
  },
  {
    id: 17,
    tag: 'Close',
    title: 'The Machine Economy\nNeeds an Attention Protocol',
    subtitle: 'creatordai.com — Join the protocol.',
    gradient: 'from-primary via-secondary to-primary',
  },
]
