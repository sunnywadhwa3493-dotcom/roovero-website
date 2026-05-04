import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Data Deletion — Roovero',
}

const sections = [
  {
    id: '01',
    heading: 'What data Roovero stores from Meta',
    content: (
      <ul className="space-y-3">
        {[
          'A long-lived Facebook user access token (valid for up to 60 days), used to publish content on your behalf.',
          'Your Facebook Page ID, Page name, and a Page-level access token for the connected Page.',
          'Your Instagram Business Account ID, linked to the Page above.',
          'A record of whether your Meta integration is currently connected.',
        ].map((item) => (
          <li key={item} className="flex items-start gap-2.5">
            <span className="text-amber mt-0.5 flex-shrink-0">–</span>
            {item}
          </li>
        ))}
      </ul>
    ),
  },
  {
    id: '02',
    heading: 'What is deleted when you disconnect or request deletion',
    content: (
      <>
        <p className="mb-4">
          When you disconnect your Meta account — either from within the Roovero app or via a
          Meta-initiated data deletion request — Roovero permanently removes:
        </p>
        <ul className="space-y-3">
          {[
            'Your Facebook user access token and Page access token.',
            'Your Facebook Page ID, Page name, and Instagram Business Account ID.',
            'The connected status flag on your Roovero account.',
          ].map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <span className="text-amber mt-0.5 flex-shrink-0">–</span>
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-4">
          Content posts, brand data, analytics, and your Roovero account itself are not affected
          by a Meta disconnection. Only Meta-specific connection data is removed.
        </p>
      </>
    ),
  },
  {
    id: '03',
    heading: 'How to request deletion',
    content: (
      <>
        <p className="mb-4">You can initiate a Meta data deletion in two ways:</p>
        <ul className="space-y-3">
          <li className="flex items-start gap-2.5">
            <span className="text-amber mt-0.5 flex-shrink-0">–</span>
            <span>
              <span className="font-medium text-ink">From within Roovero.</span>{' '}
              Go to Settings → Instagram and tap Disconnect. This immediately removes all
              Meta connection data from your account.
            </span>
          </li>
          <li className="flex items-start gap-2.5">
            <span className="text-amber mt-0.5 flex-shrink-0">–</span>
            <span>
              <span className="font-medium text-ink">From Facebook.</span>{' '}
              Open Facebook → Settings → Apps and Websites → find Roovero → Remove. Meta
              will notify us automatically and we will remove all associated data within
              minutes.
            </span>
          </li>
        </ul>
        <p className="mt-4">
          You can also email{' '}
          <a
            href="mailto:hello@roovero.com"
            className="text-ink underline hover:text-amber transition-colors"
          >
            hello@roovero.com
          </a>{' '}
          to request manual deletion.
        </p>
      </>
    ),
  },
  {
    id: '04',
    heading: 'Confirmation and audit',
    content: (
      <p>
        When Meta sends a deletion request on your behalf, Roovero processes it automatically
        and returns a confirmation code to Meta. You can use that code to verify the request
        was received. If you have a confirmation code, you can check its status by visiting
        this page with the code appended to the URL as{' '}
        <span className="font-mono text-xs bg-mist px-1.5 py-0.5 rounded">
          /data-deletion?code=YOUR_CODE
        </span>
        .
      </p>
    ),
  },
]

export default function DataDeletionPage({
  searchParams,
}: {
  searchParams: { code?: string }
}) {
  const code = typeof searchParams.code === 'string' ? searchParams.code.trim() : null

  return (
    <>
      <Nav />
      <main className="pt-16">
        <section className="bg-white py-24 px-6">
          <div className="max-w-narrow mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-8 h-px bg-amber" />
              <span className="text-xs tracking-widest text-smoke uppercase font-sans">
                Data &amp; Privacy
              </span>
            </div>
            <h1
              className="font-serif italic text-ink mb-4"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.025em' }}
            >
              Meta Data Deletion
            </h1>
            <p className="text-sm text-smoke font-sans mb-16">
              Roovero supports Meta&apos;s data deletion requirements. This page explains what
              we store and how to remove it.
            </p>

            {code && (
              <div className="mb-12 border border-amber-pale bg-amber-pale/30 rounded-lg px-6 py-5">
                <p className="text-sm font-sans font-medium text-ink mb-1">
                  Deletion request received
                </p>
                <p className="text-sm font-sans text-smoke mb-3">
                  Your Meta data deletion request has been processed. All Meta connection data
                  associated with your account has been removed from Roovero.
                </p>
                <p className="text-xs font-sans text-ash">
                  Confirmation code:{' '}
                  <span className="font-mono text-smoke">{code}</span>
                </p>
              </div>
            )}

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
