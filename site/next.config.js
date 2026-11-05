/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'Gwa Shark\'s Kasm',
    description: 'Kasm Workspaces made by Gwa Shark',
    icon: '/img/logo.svg',
    listUrl: 'https://gwashark.github.io/kasm-registry/',
    contactUrl: 'https://github.com/gwashark/kasm-registry/issues',
  },
  reactStrictMode: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
