// pages/_app.tsx
import { CacheProvider } from '@emotion/react';
import { cache } from '@emotion/css';
import { AppProps } from 'next/app';

import './fonts.css'
import './globals.css'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CacheProvider value={cache}>
      <Component {...pageProps} />
    </CacheProvider>
  );
}

export default MyApp;
