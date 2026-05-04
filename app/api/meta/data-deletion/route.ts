import { NextRequest, NextResponse } from 'next/server'
import { randomUUID } from 'crypto'
import { FieldValue } from 'firebase-admin/firestore'
import { adminDb } from '@/lib/firebase-admin'
import { parseAndVerifySignedRequest } from '@/lib/meta-signed-request'

export async function POST(req: NextRequest) {
  const appSecret = process.env.META_APP_SECRET
  if (!appSecret) {
    console.error('meta/data-deletion: META_APP_SECRET not configured')
    return NextResponse.json({ error: 'Server configuration error' }, { status: 500 })
  }

  let signedRequest: string | null = null
  try {
    const contentType = req.headers.get('content-type') ?? ''
    if (contentType.includes('application/x-www-form-urlencoded')) {
      const body = await req.text()
      signedRequest = new URLSearchParams(body).get('signed_request')
    } else {
      const body = (await req.json()) as Record<string, unknown>
      signedRequest = typeof body.signed_request === 'string' ? body.signed_request : null
    }
  } catch {
    return NextResponse.json({ error: 'Failed to parse request body' }, { status: 400 })
  }

  if (!signedRequest) {
    return NextResponse.json({ error: 'Missing signed_request' }, { status: 400 })
  }

  let metaUserId: string
  try {
    const payload = parseAndVerifySignedRequest(signedRequest, appSecret)
    metaUserId = payload.user_id
  } catch (err) {
    console.error('meta/data-deletion: signature verification failed', err)
    return NextResponse.json({ error: 'Bad request' }, { status: 400 })
  }

  // Look up connection by the app-scoped Meta user ID
  const connectionsSnap = await adminDb
    .collection('metaConnections')
    .where('metaUserId', '==', metaUserId)
    .limit(1)
    .get()

  let found = false
  if (!connectionsSnap.empty) {
    found = true
    const connectionDoc = connectionsSnap.docs[0]
    const uid = connectionDoc.data().uid as string

    // Remove the Meta connection doc
    await connectionDoc.ref.delete()

    // Set features.metaConnected = false on all client docs belonging to this user
    const clientsSnap = await adminDb
      .collection('clients')
      .where('userId', '==', uid)
      .get()

    if (!clientsSnap.empty) {
      const batch = adminDb.batch()
      for (const clientDoc of clientsSnap.docs) {
        batch.update(clientDoc.ref, { 'features.metaConnected': false })
      }
      await batch.commit()
    }
  }

  // Write audit record regardless of whether we found a connection
  const confirmationCode = randomUUID()
  await adminDb.collection('metaDeletionRequests').doc(confirmationCode).set({
    confirmationCode,
    metaUserId,
    type: 'data_deletion',
    status: found ? 'completed' : 'not_found',
    requestedAt: FieldValue.serverTimestamp(),
  })

  const appUrl = (process.env.NEXT_PUBLIC_APP_URL ?? 'https://roovero.com').replace(/\/$/, '')
  const url = `${appUrl}/data-deletion?code=${confirmationCode}`

  return NextResponse.json({ url, confirmation_code: confirmationCode })
}
