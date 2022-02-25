import type { AppProps } from 'next/app';

import Layout from '../components/layout/layout';

// Font Source
import '@fontsource/manrope';

import { GlobalStyle } from '../styles/globalStyle';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
