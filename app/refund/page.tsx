import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Refund Policy — Roovero',
}

const sections = [
  {
    id: '01',
    heading: 'Overview',
    content: (
      <p>
        Roovero operates on a monthly subscription model billed through Razorpay. This policy
        describes when refunds are available, the eligibility window, and how to submit a request.
        By subscribing, you agree to the terms set out here.
      </p>
    ),
  },
  {
    id: '02',
    heading: 'Monthly subscriptions',
    content: (
      <>
        <p className="mb-4">
          Subscription fees are charged in full at the start of each billing period. If you cancel
          your subscription:
        </p>
        <ul className="space-y-2">
          {[
            'Cancellation stops future billing immediately',
            'Your plan and features remain active until the end of the current paid period',
            'We do not issue pro-rated refunds for the unused portion of a billing period',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <span className="text-amber mt-0.5 flex-shrink-0">–</span>
              {item}
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    id: '03',
    heading: 'New subscription refund window',
    content: (
      <>
        <p className="mb-4">
          If you subscribed in error or are not satisfied with the Service, you may request a refund
          within <strong className="text-ink font-medium">7 days of your initial paid subscription</strong>.
          Requests made after this window are not eligible.
        </p>
        <p>
          This window applies to first-time paid subscriptions only — not to renewals, plan
          upgrades, or reactivations after a previous cancellation.
        </p>
      </>
    ),
  },
  {
    id: '04',
    heading: 'Add-ons and one-time purchases',
    content: (
      <>
        <p className="mb-4">
          One-time credit purchases — reels, carousels, edit packs, AI reply packs, avatar videos —
          are non-refundable once any credits from the purchase have been consumed.
        </p>
        <p className="mb-4">
          If none of the purchased credits have been used, you may contact us within{' '}
          <strong className="text-ink font-medium">48 hours of purchase</strong> and we will review
          your request on a case-by-case basis.
        </p>
        <p>
          Recurring monthly add-ons follow the same cancellation and refund policy as base
          subscription plans.
        </p>
      </>
    ),
  },
  {
    id: '05',
    heading: 'Billing errors',
    content: (
      <p>
        If you were charged incorrectly — due to a duplicate transaction, system error, or a charge
        that does not match your selected plan — contact us at{' '}
        <a href="mailto:hello@roovero.com" className="text-ink underline hover:text-amber transition-colors">
          hello@roovero.com
        </a>{' '}
        with your Razorpay transaction ID. We will investigate and refund any confirmed error
        promptly.
      </p>
    ),
  },
  {
    id: '06',
    heading: 'How to request a refund',
    content: (
      <>
        <p className="mb-5">
          Email{' '}
          <a href="mailto:hello@roovero.com" className="text-ink underline hover:text-amber transition-colors">
            hello@roovero.com
          </a>{' '}
          with the following:
        </p>
        <div className="bg-stone border border-mist p-6 space-y-2 font-sans text-sm">
          <div className="flex gap-3">
            <span className="text-smoke w-28 flex-shrink-0">Subject</span>
            <span className="text-ink">Refund Request</span>
          </div>
          <div className="flex gap-3">
            <span className="text-smoke w-28 flex-shrink-0">Include</span>
            <span className="text-ink">Your registered email address</span>
          </div>
          <div className="flex gap-3">
            <span className="text-smoke w-28 flex-shrink-0">Include</span>
            <span className="text-ink">A brief description of the issue</span>
          </div>
          <div className="flex gap-3">
            <span className="text-smoke w-28 flex-shrink-0">Include</span>
            <span className="text-ink">Your Razorpay transaction ID (from your payment confirmation email)</span>
          </div>
        </div>
        <p className="mt-4">We aim to respond within 2 business days of receiving your request.</p>
      </>
    ),
  },
  {
    id: '07',
    heading: 'Processing time',
    content: (
      <p>
        Approved refunds are processed through Razorpay and typically reflect in your original
        payment method within 5–10 business days, depending on your bank or payment provider.
      </p>
    ),
  },
  {
    id: '08',
    heading: 'Contact',
    content: (
      <p>
        For billing or refund queries, write to:{' '}
        <a href="mailto:hello@roovero.com" className="text-ink underline hover:text-amber transition-colors">
          hello@roovero.com
        </a>
        . This policy is governed by the laws of India.
      </p>
    ),
  },
]

export default function RefundPage() {
  return (
    <>
      <Nav />
      <main className="pt-16">
        <section className="bg-white py-24 px-6">
          <div className="max-w-narrow mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-8 h-px bg-amber" />
              <span className="text-xs tracking-widest text-smoke uppercase font-sans">Legal</span>
            </div>
            <h1
              className="font-serif italic text-ink mb-4"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.025em' }}
            >
              Refund Policy
            </h1>
            <p className="text-sm text-smoke font-sans mb-16">
              Effective date: 1 May 2026 &nbsp;·&nbsp; Last updated: 1 May 2026
            </p>

            <div className="space-y-12">
              {sections.map((section) => (
                <div key={section.id} className="border-t border-mist pt-10">
                  <div className="flex items-baseline gap-4 mb-5">
                    <span className="text-xs text-amber font-sans tabular-nums">{section.id}</span>
                    <h2 className="font-serif italic text-ink text-xl">{section.heading}</h2>
                  </div>
                  <div className="text-smoke font-sans text-sm leading-relaxed pl-8">
                    {section.content}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 pt-10 border-t border-mist">
              <p className="text-xs text-ash font-sans">
                Sampreeth Singh Wadhwa · Bengaluru, India ·{' '}
                <a href="mailto:hello@roovero.com" className="hover:text-smoke transition-colors">
                  hello@roovero.com
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
