import './globals.css';
import Script from 'next/script';

export const metadata = {
  title: 'EDUCAÇÃO | Toppapps',
  description:
    'Guias e ferramentas para organizar a semana, começar o estudo e revisar com critérios que cabem na rotina.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preload" href="https://cdn.jsdelivr.net/gh/toppaplicativos/educacao-hub@57925a0f8017d86bd56936acb803fbef92e70d77/public/hub-runtime.js" as="script" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <Script src="https://cdn.jsdelivr.net/gh/toppaplicativos/educacao-hub@57925a0f8017d86bd56936acb803fbef92e70d77/public/hub-runtime.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
