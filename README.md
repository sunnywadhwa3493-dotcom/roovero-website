# Roovero — Marketing & Subscription Website

Built with Next.js 14, Firebase Auth, Firestore, and Razorpay Subscriptions.

## Architecture

```
roovero.com                          (this project, deployed to Vercel)
   ├── /                             Marketing homepage
   ├── /features                    Features page
   ├── /pricing                     Pricing page with plan cards
   ├── /about                       Brand story
   ├── /subscribe?plan=X&uid=Y&clientId=Z   ← Flutter app links here
   ├── /success                     Post-payment confirmation
   ├── /login                       Firebase Auth (shared with app)
   ├── /dashboard                   Account + subscription management
   └── /api/create-subscription     Server-side Razorpay subscription creation

soul-foundry-app (Firebase project)  (shared with Flutter app)
   ├── Firebase Auth                 Same users, same UIDs
   ├── Firestore
   │   ├── users/{uid}
   │   ├── clients/{clientId}        → plan field updated by webhook
   │   └── subscriptions/{userId}    → billing state
   └── Cloud Functions
       └── razorpayWebhook           ← already fully built, handles payment events
```

## Flutter → Website payment flow

1. User taps "Upgrade" in app
2. App opens: `https://roovero.com/subscribe?plan=core&uid={uid}&clientId={clientId}`
3. Website shows plan details + Razorpay checkout
4. User pays
5. Razorpay fires webhook → `razorpayWebhook` Cloud Function (already built)
6. Cloud Function updates `clients/{clientId}.plan` and `subscriptions/{userId}`
7. Flutter app Riverpod stream picks up Firestore change → UI updates
8. User sees `/success` page → closes browser tab

No deep link back to app needed — Firestore stream handles the state sync.

## Setup

### 1. Clone and install

```bash
git clone <your-repo>
cd roovero
npm install
```

### 2. Environment variables

Copy `.env.example` to `.env.local` and fill in:

```bash
cp .env.example .env.local
```

**Get Firebase values** from Firebase Console → Project Settings → Your apps → Web app config

**Get Razorpay values:**
- `NEXT_PUBLIC_RAZORPAY_KEY_ID` → Razorpay Dashboard → Settings → API Keys → Key ID
- `RAZORPAY_KEY_SECRET` → same page → Key Secret (never expose this publicly)
- Plan IDs → Razorpay Dashboard → Subscriptions → Plans → each plan's ID

**Get Firebase Admin values:**
- Firebase Console → Project Settings → Service accounts → Generate new private key
- Copy `project_id`, `client_email`, `private_key` from the downloaded JSON

### 3. Local development

```bash
npm run dev
```

Visit `http://localhost:3000`

Test the payment flow: `http://localhost:3000/subscribe?plan=core&uid=testuid&clientId=testclientid`

### 4. Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Add environment variables in Vercel dashboard:
# Project → Settings → Environment Variables
# Add all variables from .env.example
```

### 5. Connect custom domain

In Vercel Dashboard → Project → Settings → Domains:
- Add `roovero.com`
- Add `www.roovero.com`

In Namecheap DNS:
- Add CNAME: `www` → `cname.vercel-dns.com`
- Add A record: `@` → `76.76.21.21` (Vercel's IP)

Wait 5-30 minutes for DNS propagation.

### 6. Update Flutter app URL

In your Flutter app, update the checkout URL from:
```
https://soul-foundry-app.web.app/subscribe.html
```
to:
```
https://roovero.com/subscribe
```

The `vercel.json` rewrite handles `/subscribe.html` → `/subscribe` automatically, 
so you can update the Flutter code at your own pace.

## Razorpay Setup

1. Create Razorpay account at razorpay.com
2. Complete KYC (required for live payments)
3. Create subscription plans (Dashboard → Subscriptions → Plans):
   - Starter: ₹999/month
   - Core: ₹2,499/month  
   - Growth: ₹3,499/month (optional mid-tier)
   - Studio: ₹4,999/month
4. Copy each plan's ID into `.env.local`
5. Set webhook URL in Razorpay Dashboard → Settings → Webhooks:
   - URL: `https://asia-south1-soul-foundry-app.cloudfunctions.net/razorpayWebhook`
   - (This already exists in your Cloud Functions — just register it in Razorpay)
   - Events to subscribe: `subscription.activated`, `subscription.charged`, `subscription.cancelled`, `subscription.halted`, `payment.captured`

## Pages

| Page | Route | Auth required |
|------|-------|---------------|
| Homepage | `/` | No |
| Features | `/features` | No |
| Pricing | `/pricing` | No |
| About | `/about` | No |
| Subscribe | `/subscribe` | No (uid+clientId from query params) |
| Success | `/success` | No |
| Login | `/login` | No |
| Dashboard | `/dashboard` | Yes (Firebase Auth) |

## Plan IDs — exact values

These match the Firestore `clients/{clientId}.plan` field and `normalizePlanId()` in Flutter:

| Display name | Plan ID in Firestore | Razorpay env key |
|---|---|---|
| Essential | `starter` | `RAZORPAY_PLAN_STARTER_ID` |
| Pro | `core` | `RAZORPAY_PLAN_CORE_ID` |
| AI Manager | `studio` | `RAZORPAY_PLAN_STUDIO_ID` |

## Design system

- Primary font: Georgia (serif, italic for headings)
- Primary color: `#111111` (ink)
- Accent color: `#C8873A` (amber)
- Background: `#F8F6F3` (stone), `#FFFFFF` (white)
- Muted text: `#6B6560` (smoke)
