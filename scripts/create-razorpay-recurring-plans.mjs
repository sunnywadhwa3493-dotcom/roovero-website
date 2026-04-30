import fs from 'node:fs/promises'
import path from 'node:path'
import nextEnv from '@next/env'

const { loadEnvConfig } = nextEnv
loadEnvConfig(process.cwd())

const keyId = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID
const keySecret = process.env.RAZORPAY_KEY_SECRET

if (!keyId || !keySecret) {
  console.error('Missing NEXT_PUBLIC_RAZORPAY_KEY_ID or RAZORPAY_KEY_SECRET')
  process.exit(1)
}

const manifestPath = path.resolve(process.cwd(), 'scripts/recurring-plan-manifest.json')
const manifest = JSON.parse(await fs.readFile(manifestPath, 'utf8'))
const auth = Buffer.from(`${keyId}:${keySecret}`).toString('base64')

for (const item of manifest) {
  const response = await fetch('https://api.razorpay.com/v1/plans', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${auth}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      period: 'monthly',
      interval: 1,
      item: {
        name: item.name,
        description: item.description,
        amount: item.amountInr * 100,
        currency: 'INR',
      },
      notes: {
        canonicalId: item.id,
        envKey: item.envKey,
      },
    }),
  })

  const data = await response.json()

  if (!response.ok) {
    console.error(`Failed to create ${item.id}:`, data)
    process.exitCode = 1
    continue
  }

  console.log(`${item.envKey}=${data.id}`)
}
