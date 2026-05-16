/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['firebasestorage.googleapis.com'],
  },
  // Pages that should not be statically prerendered
  // (they require runtime Firebase initialization)
  skipTrailingSlashRedirect: true,
}

module.exports = nextConfig
