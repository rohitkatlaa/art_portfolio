/**
 * ARTAURA - Static export configuration for GitHub Pages.
 *
 * To deploy under https://<user>.github.io/<repo>/ set the env var NEXT_PUBLIC_BASE_PATH=/<repo>
 * before running `npm run build`. Leave it empty if deploying to a custom domain or root.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: basePath,
  assetPrefix: basePath || undefined,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

module.exports = nextConfig;
