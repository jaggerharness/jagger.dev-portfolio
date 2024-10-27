/** @type {import('next').NextConfig} */
const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline';
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data:;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;`

const nextConfig = {
    async headers() {
        return [
          {
            source: '/(.*)',
            headers: [
              {
                key: 'X-Content-Type-Options',
                value: 'nosniff'
              },
              {
                key: 'X-Frame-Options',
                value: 'DENY'
              },
              {
                key: 'X-XSS-Protection',
                value: '1; mode=block'
              },
              {
                key: 'Permissions-Policy',
                value: 'interest-cohort=(), geolocation=(), microphone=(), camera=(), magnetometer=(), gyroscope=(), payment=(), usb=(), vr=(), accelerometer=()'
              }
            ],
          },
        ]
      },
};

export default nextConfig;
