import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  // Keep export routes rooted at /; GitHub mounts the artifact at /nexabio-site/.
  // A build-time basePath makes this Vinext release skip the home-page export.
  basePath: process.env.NODE_ENV === 'development' ? '/nexabio-site' : '',
  assetPrefix: '/nexabio-site',
  trailingSlash: true,
};
export default nextConfig;
