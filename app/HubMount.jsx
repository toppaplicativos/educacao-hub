'use client';

import { useEffect } from 'react';

const RUNTIME =
  'https://cdn.jsdelivr.net/gh/toppaplicativos/educacao-hub@4f532b1e131998d3e0876bf1fdbb5c9b7a5df039/public/hub-runtime.js';

export default function HubMount() {
  useEffect(() => {
    if (window.__hubRuntimeLoaded) {
      if (typeof window.__hubRemount === 'function') window.__hubRemount();
      return;
    }
    window.__hubRuntimeLoaded = true;
    const script = document.createElement('script');
    script.src = RUNTIME;
    script.async = false;
    script.onerror = () => {
      const fallback = document.createElement('script');
      fallback.src = '/hub-runtime.js?v=revisao-fix';
      fallback.async = false;
      document.body.appendChild(fallback);
    };
    document.body.appendChild(script);
  }, []);
  return <div id="app" />;
}
