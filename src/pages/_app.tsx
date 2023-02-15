import { DefaultLayout } from '@/components/default';
import { DocsLayout } from '@/components/docs';
import { HomeLayout } from '@/components/home';
import { AppProvider } from '@/providers/app';
import { EmotionCache } from '@emotion/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';

type Props = AppProps & {
  emotionCache?: EmotionCache;
};

function MyApp({ Component, emotionCache, pageProps }: Props) {
  const router = useRouter();

  const isHome = router.pathname === '/';
  const isDocs = router.pathname.includes('/docs');

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <AppProvider emotionCache={emotionCache}>
        {isHome ? (
          <HomeLayout>
            <Component {...pageProps} />
          </HomeLayout>
        ) : isDocs ? (
          <DocsLayout>
            <Component {...pageProps} />
          </DocsLayout>
        ) : (
          <DefaultLayout>
            <Component {...pageProps} />
          </DefaultLayout>
        )}
      </AppProvider>
    </>
  );
}

export default MyApp;
