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
      { source: '/obrigado/esqueca', destination: '/obrigado/nunca-mais-esqueca-tudo', permanent: false },
      { source: '/app/esqueca', destination: '/app/fila-de-hoje', permanent: false },
      { source: '/p/questoes', destination: '/p/aprenda-fazendo-questoes', permanent: false },
      { source: '/p/aprenda-fazendo', destination: '/p/aprenda-fazendo-questoes', permanent: false },
      { source: '/app/questoes', destination: '/app/proxima-questao', permanent: false },
      { source: '/p/prova', destination: '/p/prova-no-tempo-da-banca', permanent: false },
      { source: '/p/prova-no-tempo', destination: '/p/prova-no-tempo-da-banca', permanent: false },
      { source: '/app/prova', destination: '/app/relogio-da-prova', permanent: false },
      { source: '/app/relogio', destination: '/app/relogio-da-prova', permanent: false },
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
