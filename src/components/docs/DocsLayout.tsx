import { docsRoutes } from '@/lib/routes/docsRoutes';
import { HEADER_HEIGHT } from '@/styles/headerStyles';
import { theme } from '@/styles/theme';
import { WithChildren } from '@/types/common';
import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Container } from '../Container';
import { Footer } from '../Footer';
import { ScrollArea } from '../ScrollArea';
import { DocsHeader } from './DocsHeader';
import { MobileMenu } from './MobileMenu';
import { RoutesNav } from './RoutesNav';

type Props = WithChildren;

export const DocsLayout = ({ children }: Props) => {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleRouteChange = () => setIsMobileMenuOpen(false);
    router.events.on('routeChangeStart', handleRouteChange);
    return () => router.events.off('routeChangeStart', handleRouteChange);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Box
        sx={{
          zIndex: 2,
          position: 'sticky',
          top: 0,
          left: 0,
          width: '100%',
          boxShadow: `0 0 0 1px ${theme.palette.grey[200]}`,
          backgroundColor: 'white',
        }}
      >
        <DocsHeader
          onMobileMenuButtonClick={() => setIsMobileMenuOpen((state) => !state)}
        />
        <Box
          sx={{
            display: {
              xs: 'block',
              md: 'none',
            },
          }}
        >
          <MobileMenu
            isMobileMenuOpen={isMobileMenuOpen}
            closeMobileMenu={() => setIsMobileMenuOpen(false)}
          >
            <Box
              sx={{
                zIndex: 1,
                position: 'absolute',
                inset: 0,
                top: HEADER_HEIGHT,
              }}
            >
              <ScrollArea>
                <Box sx={{ p: 4 }}>
                  <RoutesNav routes={docsRoutes} />
                </Box>
              </ScrollArea>
            </Box>
          </MobileMenu>
        </Box>
      </Box>
      <Container>
        <Grid container spacing={16}>
          <Grid
            item
            md={3}
            sx={{
              display: {
                xs: 'none',
                md: 'block',
              },
            }}
          >
            <Box
              sx={{
                zIndex: 1,
                position: 'sticky',
                top: HEADER_HEIGHT,
                right: 0,
                height: `calc(100vh - ${HEADER_HEIGHT})`,
                p: '2px',
              }}
            >
              <ScrollArea>
                <Box sx={{ py: 8, px: 2 }}>
                  <RoutesNav routes={docsRoutes} />
                </Box>
              </ScrollArea>
            </Box>
          </Grid>
          <Grid item xs={12} md={9}>
            {children}
          </Grid>
        </Grid>
      </Container>
      <Box
        sx={{
          width: '100%',
          boxShadow: `0 -1px 0 0 ${theme.palette.grey[200]}`,
        }}
      >
        <Footer />
      </Box>
    </>
  );
};
