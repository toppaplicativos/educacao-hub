'use client';

import { useEffect } from 'react';

export default function HubMount() {
  useEffect(() => {
    if (window.__hubRuntimeLoaded) {
      if (typeof window.__hubRemount === 'function') window.__hubRemount();
      return;
    }
    window.__hubRuntimeLoaded = true;
    const script = document.createElement('script');
    script.src = '/hub-runtime.js?v=revisao-fix';
    script.async = false;
    document.body.appendChild(script);
  }, []);
  return <div id="app" />;
}
