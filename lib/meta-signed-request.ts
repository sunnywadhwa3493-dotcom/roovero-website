import crypto from 'crypto'

export interface MetaSignedRequestPayload {
  user_id: string
  algorithm: string
  issued_at: number
  [key: string]: unknown
}

function base64UrlDecode(str: string): Buffer {
  const base64 = str.replace(/-/g, '+').replace(/_/g, '/')
  const padded = base64.padEnd(base64.length + (4 - (base64.length % 4)) % 4, '=')
  return Buffer.from(padded, 'base64')
}

/**
 * Parses and verifies a Meta signed_request.
 * Fails closed: throws on any signature mismatch or malformed input.
 */
export function parseAndVerifySignedRequest(
  signedRequest: string,
  appSecret: string
): MetaSignedRequestPayload {
  const dotIndex = signedRequest.indexOf('.')
  if (dotIndex === -1) {
    throw new Error('Invalid signed_request: missing separator')
  }

  const encodedSig = signedRequest.slice(0, dotIndex)
  const encodedPayload = signedRequest.slice(dotIndex + 1)

  const expectedSig = crypto
    .createHmac('sha256', appSecret)
    .update(encodedPayload)
    .digest()

  const receivedSig = base64UrlDecode(encodedSig)

  if (
    expectedSig.length !== receivedSig.length ||
    !crypto.timingSafeEqual(expectedSig, receivedSig)
  ) {
    throw new Error('signed_request signature verification failed')
  }

  const payloadJson = base64UrlDecode(encodedPayload).toString('utf8')
  const payload = JSON.parse(payloadJson) as MetaSignedRequestPayload

  if (payload.algorithm !== 'HMAC-SHA256') {
    throw new Error(`Unsupported signed_request algorithm: ${payload.algorithm}`)
  }

  if (!payload.user_id) {
    throw new Error('signed_request payload missing user_id')
  }

  return payload
}
