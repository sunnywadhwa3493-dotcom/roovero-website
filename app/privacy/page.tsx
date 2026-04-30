import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Privacy Policy — Roovero',
}

const sections = [
  {
    id: '01',
    heading: 'Who we are',
    content: (
      <>
        <p>
          Roovero is operated by Sampreeth Singh Wadhwa ("we", "us", or "our"). The Service
          includes the Roovero mobile application and the website at roovero.com (collectively,
          the "Service"). This policy explains what personal data we collect, how we use it, and
          your rights as a user.
        </p>
      </>
    ),
  },
  {
    id: '02',
    heading: 'What we collect',
    content: (
      <>
        <p className="mb-4">We collect data in the following categories:</p>
        <ul className="space-y-3">
          <li>
            <span className="font-medium text-ink">Account information.</span>{' '}
            Name, email address, phone number, and business name — collected when you register.
          </li>
          <li>
            <span className="font-medium text-ink">Brand and content data.</span>{' '}
            Business description, tone preferences, logo, brand colours, and audience details —
            collected during onboarding and used to generate content for you.
          </li>
          <li>
            <span className="font-medium text-ink">Social media permissions.</span>{' '}
            If you connect your Instagram account via Meta, we receive an access token that lets
            us publish approved content on your behalf. We do not store your Instagram password.
          </li>
          <li>
            <span className="font-medium text-ink">Usage data.</span>{' '}
            Screens visited, features used, approvals made, and edit requests submitted — used to
            improve the product.
          </li>
          <li>
            <span className="font-medium text-ink">Payment information.</span>{' '}
            Payments are processed by Razorpay. We do not store your card number, CVV, or UPI
            credentials. We receive a transaction reference for billing records.
          </li>
          <li>
            <span className="font-medium text-ink">Technical data.</span>{' '}
            Device type, operating system version, IP address, and crash reports — used to
            maintain service reliability.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: '03',
    heading: 'How we use your data',
    content: (
      <>
        <p className="mb-4">We use collected data to:</p>
        <ul className="space-y-2">
          {[
            'Create and manage your Roovero account',
            'Generate monthly content calendars, images, carousels, and reels',
            'Publish posts you have approved to your connected Instagram account',
            'Process subscriptions and billing through Razorpay',
            'Send notifications about your calendar, pending approvals, and account status',
            'Diagnose and resolve technical issues',
            'Improve and develop the Service based on usage patterns',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <span className="text-amber mt-0.5 flex-shrink-0">–</span>
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-4">
          We do not use your data to train general AI models for sale or licensing to third parties.
        </p>
      </>
    ),
  },
  {
    id: '04',
    heading: 'Who we share data with',
    content: (
      <>
        <ul className="space-y-3 mb-4">
          <li>
            <span className="font-medium text-ink">Razorpay</span> — subscription billing and
            payment processing, governed by Razorpay&apos;s Privacy Policy.
          </li>
          <li>
            <span className="font-medium text-ink">Google / Firebase</span> — authentication,
            cloud storage, and backend infrastructure.
          </li>
          <li>
            <span className="font-medium text-ink">Meta / Instagram</span> — publishing approved
            content to your connected Instagram account.
          </li>
        </ul>
        <p>We do not sell your personal data to third parties.</p>
      </>
    ),
  },
  {
    id: '05',
    heading: 'Data retention',
    content: (
      <p>
        We retain your account and content data for as long as your account is active and for a
        reasonable period thereafter to handle disputes or comply with legal obligations. You may
        request deletion of your account and associated data at any time by writing to us.
      </p>
    ),
  },
  {
    id: '06',
    heading: 'Your rights',
    content: (
      <>
        <p className="mb-4">Under applicable Indian law, you have the right to:</p>
        <ul className="space-y-2">
          {[
            'Access the personal data we hold about you',
            'Correct inaccurate or incomplete information',
            'Request deletion of your account and associated data',
            'Withdraw consent to certain forms of data processing (which may limit your use of the Service)',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <span className="text-amber mt-0.5 flex-shrink-0">–</span>
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-4">
          To exercise any of these rights, write to us at{' '}
          <a href="mailto:hello@roovero.com" className="text-ink underline hover:text-amber transition-colors">
            hello@roovero.com
          </a>
          .
        </p>
      </>
    ),
  },
  {
    id: '07',
    heading: 'Cookies and tracking',
    content: (
      <p>
        We use session cookies for authentication purposes only. We do not use third-party
        advertising trackers or cross-site behavioural tracking.
      </p>
    ),
  },
  {
    id: '08',
    heading: 'Children',
    content: (
      <p>
        The Service is intended for users aged 18 and above. We do not knowingly collect personal
        data from minors. If you believe a minor has registered, contact us and we will remove the
        account.
      </p>
    ),
  },
  {
    id: '09',
    heading: 'Changes to this policy',
    content: (
      <p>
        We may update this policy periodically. Material changes will be communicated to active
        users via email or in-app notification before they take effect. The effective date at the
        top of this page will reflect the most recent revision.
      </p>
    ),
  },
  {
    id: '10',
    heading: 'Contact',
    content: (
      <p>
        For privacy-related questions or requests, write to:{' '}
        <a href="mailto:hello@roovero.com" className="text-ink underline hover:text-amber transition-colors">
          hello@roovero.com
        </a>
        . This Service is operated under the laws of India, including the Information Technology
        Act, 2000 and applicable rules.
      </p>
    ),
  },
]

export default function PrivacyPage() {
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
              Privacy Policy
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
