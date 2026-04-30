export type PlanId = 'free' | 'starter' | 'core' | 'growth' | 'studio'

export type AddOnId =
  | 'ADDON_REEL_PACK_5'
  | 'ADDON_REEL_SECONDS_20'
  | 'ADDON_REEL_SECONDS_30'
  | 'ADDON_CAROUSEL_PACK_5'
  | 'ADDON_EDIT_PACK_20'
  | 'ADDON_BRAND_PHOTO_PACK'
  | 'TXN_AVATAR_SINGLE'
  | 'TXN_REEL_SINGLE'
  | 'TXN_REEL_20S_SINGLE'
  | 'TXN_CAROUSEL_SINGLE'
  | 'TXN_EDIT_PACK_10_ONCE'
  | 'TXN_REPLY_PACK_20'

export interface Plan {
  id: PlanId
  name: string
  tagline: string
  monthlyPrice: number
  netAfterFee?: number
  razorpayEnvKey?: string
  recommendedFor: string
  postsPerMonth: number
  staticsPerMonth: number
  carouselCredits: number
  reelCredits: number
  reelMaxSeconds: number
  avatarLabel: string
  editCredits: number
  brandPhotoQuota: number
  screenshotCredits: number
  competitorSlots: number
  aiReplyCredits: number
  features: string[]
  highlighted?: boolean
}

export interface AddOn {
  id: AddOnId
  name: string
  kind: 'recurring' | 'one_time'
  price: number
  cogs: string
  eligibility: string
  unlocks: string
}

export const GST_DISPLAY_RULE = 'inclusive'
export const GST_RATE_PERCENT = 18

export function inclusiveGstPortion(amount: number) {
  return Number(((amount * GST_RATE_PERCENT) / (100 + GST_RATE_PERCENT)).toFixed(2))
}

export const PLANS: Plan[] = [
  {
    id: 'free',
    name: 'Free',
    tagline: 'Proof of workflow, no reels',
    monthlyPrice: 0,
    recommendedFor: 'Trying the workflow before moving into a paid operating model',
    postsPerMonth: 8,
    staticsPerMonth: 8,
    carouselCredits: 0,
    reelCredits: 0,
    reelMaxSeconds: 0,
    avatarLabel: 'Locked',
    editCredits: 0,
    brandPhotoQuota: 0,
    screenshotCredits: 0,
    competitorSlots: 0,
    aiReplyCredits: 0,
    features: [
      '8 watermarked statics per month',
      'Calendar released two posts per week',
      'WhatsApp share',
      'No reels, no carousels, no Meta connect',
    ],
  },
  {
    id: 'starter',
    name: 'Starter',
    tagline: 'Daily content with a low-cost reel test lane',
    monthlyPrice: 1999,
    netAfterFee: 1952,
    razorpayEnvKey: 'RAZORPAY_PLAN_STARTER_ID',
    recommendedFor: 'Founders who need consistent output before they need the Meta stack',
    postsPerMonth: 30,
    staticsPerMonth: 26,
    carouselCredits: 3,
    reelCredits: 1,
    reelMaxSeconds: 10,
    avatarLabel: 'Buy-only',
    editCredits: 10,
    brandPhotoQuota: 4,
    screenshotCredits: 5,
    competitorSlots: 0,
    aiReplyCredits: 0,
    features: [
      '30 posts per month delivered daily',
      '26 statics, 3 carousels, 1 reel',
      '10 AI image edits',
      '5 screenshot analytics credits',
      'Brand-photo generation lane',
      'Avatar videos available as one-time purchase',
    ],
  },
  {
    id: 'core',
    name: 'Core',
    tagline: 'The operational plan for publishing and analytics',
    monthlyPrice: 4999,
    netAfterFee: 4881,
    razorpayEnvKey: 'RAZORPAY_PLAN_CORE_ID',
    recommendedFor: 'Brands that want approvals, publishing, and reporting in one system',
    postsPerMonth: 30,
    staticsPerMonth: 21,
    carouselCredits: 7,
    reelCredits: 2,
    reelMaxSeconds: 10,
    avatarLabel: 'Buy-only',
    editCredits: 15,
    brandPhotoQuota: 8,
    screenshotCredits: 10,
    competitorSlots: 1,
    aiReplyCredits: 0,
    highlighted: true,
    features: [
      'Meta connect, auto-publish, and analytics',
      '30 posts per month with 7 carousels and 2 reels',
      '15 AI image edits',
      '10 screenshot analytics credits',
      '1 competitor tracking slot',
      'Preference learning for the next calendar cycle',
    ],
  },
  {
    id: 'growth',
    name: 'Growth',
    tagline: 'More video, competitor intelligence, and engagement assist',
    monthlyPrice: 8999,
    netAfterFee: 8787,
    razorpayEnvKey: 'RAZORPAY_PLAN_GROWTH_ID',
    recommendedFor: 'Brands leaning hard into reels, response speed, and category pressure',
    postsPerMonth: 30,
    staticsPerMonth: 15,
    carouselCredits: 10,
    reelCredits: 5,
    reelMaxSeconds: 20,
    avatarLabel: 'Buy-only',
    editCredits: 25,
    brandPhotoQuota: 15,
    screenshotCredits: 20,
    competitorSlots: 3,
    aiReplyCredits: 50,
    features: [
      '5 reels per month with 20-second max',
      '10 carousels and 25 AI edits',
      '50 AI comment reply generations',
      '20 screenshot analytics credits',
      '3 competitor slots',
      'Built for heavier campaign motion and response velocity',
    ],
  },
  {
    id: 'studio',
    name: 'Studio',
    tagline: 'Two posts a day with premium queue priority',
    monthlyPrice: 14999,
    netAfterFee: 14645,
    razorpayEnvKey: 'RAZORPAY_PLAN_STUDIO_ID',
    recommendedFor: 'High-volume operators who want the fullest Roovero surface',
    postsPerMonth: 60,
    staticsPerMonth: 40,
    carouselCredits: 12,
    reelCredits: 8,
    reelMaxSeconds: 30,
    avatarLabel: '1 included',
    editCredits: 80,
    brandPhotoQuota: 30,
    screenshotCredits: 999,
    competitorSlots: 5,
    aiReplyCredits: 200,
    features: [
      'Roughly 2 posts per day',
      '8 reels, 12 carousels, and 80 edit credits',
      '30-second reel max',
      '1 avatar video included',
      '200 AI comment reply generations',
      'Priority queue and deeper competitor coverage',
    ],
  },
]

export const ADD_ONS: AddOn[] = [
  {
    id: 'ADDON_REEL_PACK_5',
    name: '+5 reel credits',
    kind: 'recurring',
    price: 1499,
    cogs: '₹243',
    eligibility: 'Starter+',
    unlocks: 'Adds 5 reel credits at the plan default seconds',
  },
  {
    id: 'ADDON_REEL_SECONDS_20',
    name: '20s reel unlock',
    kind: 'recurring',
    price: 999,
    cogs: '+₹45 per reel delta',
    eligibility: 'Growth+',
    unlocks: 'Unlocks 20-second max for eligible reel plans',
  },
  {
    id: 'ADDON_REEL_SECONDS_30',
    name: '30s reel unlock',
    kind: 'recurring',
    price: 1999,
    cogs: '+₹180 per reel delta',
    eligibility: 'Studio+',
    unlocks: 'Unlocks 30-second max for eligible reel plans',
  },
  {
    id: 'ADDON_CAROUSEL_PACK_5',
    name: '+5 carousel credits',
    kind: 'recurring',
    price: 799,
    cogs: '₹105',
    eligibility: 'Starter+',
    unlocks: 'Adds 5 monthly carousel credits',
  },
  {
    id: 'ADDON_EDIT_PACK_20',
    name: '+20 edit credits',
    kind: 'recurring',
    price: 499,
    cogs: '₹72',
    eligibility: 'Starter+',
    unlocks: 'Adds 20 monthly AI image edits',
  },
  {
    id: 'ADDON_BRAND_PHOTO_PACK',
    name: '+10 brand photo uses',
    kind: 'recurring',
    price: 599,
    cogs: '₹18',
    eligibility: 'Starter+',
    unlocks: 'Adds 10 brand-reference generation uses',
  },
  {
    id: 'TXN_AVATAR_SINGLE',
    name: '1 avatar video',
    kind: 'one_time',
    price: 399,
    cogs: '₹180',
    eligibility: 'Starter+',
    unlocks: 'One avatar video credit',
  },
  {
    id: 'TXN_REEL_SINGLE',
    name: '1 reel credit',
    kind: 'one_time',
    price: 399,
    cogs: '₹48.60',
    eligibility: 'Starter+',
    unlocks: 'One 10-second reel credit',
  },
  {
    id: 'TXN_REEL_20S_SINGLE',
    name: '1 reel at 20s',
    kind: 'one_time',
    price: 599,
    cogs: '₹93.60',
    eligibility: 'Growth+',
    unlocks: 'One 20-second reel credit',
  },
  {
    id: 'TXN_CAROUSEL_SINGLE',
    name: '1 carousel',
    kind: 'one_time',
    price: 199,
    cogs: '₹21.06',
    eligibility: 'Starter+',
    unlocks: 'One carousel credit',
  },
  {
    id: 'TXN_EDIT_PACK_10_ONCE',
    name: '10 edit credits',
    kind: 'one_time',
    price: 299,
    cogs: '₹36',
    eligibility: 'Starter+',
    unlocks: 'Ten edit credits that expire at period end',
  },
  {
    id: 'TXN_REPLY_PACK_20',
    name: '20 AI reply generations',
    kind: 'one_time',
    price: 199,
    cogs: '₹2',
    eligibility: 'Growth+',
    unlocks: 'Twenty AI comment reply generations',
  },
]

export const RECURRING_RAZORPAY_ITEMS = [
  'starter',
  'core',
  'growth',
  'studio',
  'ADDON_REEL_PACK_5',
  'ADDON_CAROUSEL_PACK_5',
  'ADDON_EDIT_PACK_20',
  'ADDON_BRAND_PHOTO_PACK',
] as const

export const getPlanById = (id: PlanId): Plan | undefined =>
  PLANS.find((p) => p.id === id)
export const getAddOnById = (id: AddOnId): AddOn | undefined =>
  ADD_ONS.find((addOn) => addOn.id === id)

export const getPaidPlans = () => PLANS.filter((plan) => plan.id !== 'free')
export const getAddOnsByKind = (kind: AddOn['kind']) =>
  ADD_ONS.filter((addOn) => addOn.kind === kind)

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
