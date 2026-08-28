import './globals.css';
import HubMount from './HubMount';

export const metadata = {
  title: 'EDUCAÇÃO | Toppapps',
  description:
    'Guias e ferramentas para organizar a semana, começar o estudo e revisar com critérios que cabem na rotina.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <HubMount />
        {children}
      </body>
    </html>
  );
}
