/** @type {import('next').NextConfig} */

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
