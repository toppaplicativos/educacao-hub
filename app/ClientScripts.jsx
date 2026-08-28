'use client';
import { useEffect } from 'react';

export default function ClientScripts() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/hub-runtime.js';
    script.async = false;
    document.body.appendChild(script);
    return () => {
      script.remove();
    };
  }, []);
  return null;
}
