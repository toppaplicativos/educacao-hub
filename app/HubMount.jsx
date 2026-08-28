'use client';

import { useEffect } from 'react';

const RUNTIME =
  'https://cdn.jsdelivr.net/gh/toppaplicativos/educacao-hub@3fb0f5c5e7577d40b3f828ebcab2a1df5b95b75c/public/hub-runtime.js';

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
      fallback.src = '/hub-runtime.js?v=esqueca';
      fallback.async = false;
      document.body.appendChild(fallback);
    };
    document.body.appendChild(script);
  }, []);
  return <div id="app" />;
}
