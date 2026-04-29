export type PlanId = 'free' | 'starter' | 'core' | 'growth' | 'studio'

export interface Plan {
  id: PlanId
  name: string
  tagline: string
  price: number        // INR per month
  annualPrice: number  // INR per month billed annually
  razorpayEnvKey: string
  color: string
  features: string[]
  limits: {
    postsPerMonth: number
    platforms: number
    aiCredits: number
  }
  highlighted?: boolean
}

export const PLANS: Plan[] = [
  {
    id: 'starter',
    name: 'Essential',
    tagline: 'For brands just starting out',
    price: 999,
    annualPrice: 799,
    razorpayEnvKey: 'RAZORPAY_PLAN_STARTER_ID',
    color: '#9E9890',
    features: [
      '12 AI-generated posts per month',
      '1 social platform',
      'Content calendar',
      'Basic brand kit',
      'Email support',
    ],
    limits: { postsPerMonth: 12, platforms: 1, aiCredits: 50 },
  },
  {
    id: 'core',
    name: 'Pro',
    tagline: 'For growing businesses',
    price: 2499,
    annualPrice: 1999,
    razorpayEnvKey: 'RAZORPAY_PLAN_CORE_ID',
    color: '#C8873A',
    highlighted: true,
    features: [
      '30 AI-generated posts per month',
      '3 social platforms',
      'Auto-publish to Instagram',
      'Competitor monitoring',
      'Performance analytics',
      'Brand Asset Engine',
      'Priority support',
    ],
    limits: { postsPerMonth: 30, platforms: 3, aiCredits: 150 },
  },
  {
    id: 'studio',
    name: 'AI Manager',
    tagline: 'Your brand runs itself',
    price: 4999,
    annualPrice: 3999,
    razorpayEnvKey: 'RAZORPAY_PLAN_STUDIO_ID',
    color: '#111111',
    features: [
      'Unlimited AI-generated posts',
      'All social platforms',
      'Full auto-publish pipeline',
      'AI comment replies',
      'Competitor intelligence',
      'Weekly performance digest',
      'Custom brand voice training',
      'Dedicated account manager',
    ],
    limits: { postsPerMonth: 999, platforms: 10, aiCredits: 999 },
  },
]

export const getPlanById = (id: PlanId): Plan | undefined =>
  PLANS.find(p => p.id === id)

// Normalize legacy plan IDs from the app (matches normalizePlanId() in Flutter)
export const normalizePlanId = (raw: string): PlanId => {
  const map: Record<string, PlanId> = {
    ai_manager: 'studio',
    pro: 'core',
    essential: 'core',
    diy: 'starter',
    basic: 'starter',
    '': 'free',
  }
  return (map[raw] ?? raw) as PlanId
}
