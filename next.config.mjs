/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async redirects() {
    return [
      { source: '/p/revisao', destination: '/p/estude-uma-vez-revise-certo', permanent: false },
      { source: '/p/revise', destination: '/p/estude-uma-vez-revise-certo', permanent: false },
      { source: '/p/estude-uma-vez', destination: '/p/estude-uma-vez-revise-certo', permanent: false },
      { source: '/p/esqueca', destination: '/p/nunca-mais-esqueca-tudo', permanent: false },
      { source: '/p/nunca-mais-esqueca', destination: '/p/nunca-mais-esqueca-tudo', permanent: false },
      { source: '/p/fila-de-hoje', destination: '/p/nunca-mais-esqueca-tudo', permanent: false },
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=0, must-revalidate' }],
      },
      {
        source: '/hub-runtime.js',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=60, must-revalidate' }],
      },
    ];
  },
};
export default nextConfig;
