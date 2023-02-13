import { components } from '@/components/mdx';
import createEmotionCache from '@/lib/createEmotionCache';
import { HEADER_HEIGHT } from '@/styles/headerStyles';
import { theme } from '@/styles/theme';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { MDXProvider } from '@mdx-js/react';
import { GlobalStyles } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { useRouter } from 'next/dist/client/router';
import { WithChildren } from '../types/common';

const clientSideEmotionCache = createEmotionCache();
type Props = WithChildren & {
  emotionCache?: EmotionCache;
};

export const AppProvider = ({
  emotionCache = clientSideEmotionCache,
  children,
}: Props) => {
  const router = useRouter();
  const isDocs = router.pathname.includes('/docs');

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles
          styles={{
            html: {
              scrollBehavior: 'smooth',
              scrollPaddingTop: isDocs
                ? `calc(${HEADER_HEIGHT} + 16px)`
                : '16px',
            },
          }}
        />
        <MDXProvider components={components}>{children}</MDXProvider>
      </ThemeProvider>
    </CacheProvider>
  );
};
