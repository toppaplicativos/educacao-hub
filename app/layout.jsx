import Script from 'next/script';

const SHA = '056488e7736826fc40b8b9ac4b8ea5948610e63f';
const CDN = `https://cdn.jsdelivr.net/gh/toppaplicativos/educacao-hub@${SHA}`;

export const metadata = {
  title: 'EDUCAÇÃO | Toppapps',
  description:
    'Guias e ferramentas para organizar a semana, começar o estudo e revisar com critérios que cabem na rotina.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="stylesheet" href={`${CDN}/app/globals.css`} />
        <link rel="preload" href={`${CDN}/public/hub-runtime.js`} as="script" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <Script src={`${CDN}/public/hub-runtime.js`} strategy="afterInteractive" />
      </body>
    </html>
  );
}
