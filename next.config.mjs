import pkg_config from './package.json' with { type: "json" };

const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  output: 'export',
  async redirects() {
    return [
      {
        source: '/auth/signin',
        destination: '/',
        permanent: true
      }
    ]
  },
  env: {
    NEXT_PUBLIC_VERSION: pkg_config.version
  },
  basePath: isProd ? '/church-plant-mfe' : '',
  assetPrefix: isProd ? '/church-plant-mfe' : '',
  images: isProd ? {
    unoptimized: true
  } : undefined
};

export default nextConfig;
