import { theme } from '@/styles/theme';
import { WithChildren } from '@/types/common';
import { Stack } from '@mui/material';
import { Box } from '@mui/system';
import { useRef, useState } from 'react';
import { Container } from '../Container';
import { Footer } from '../Footer';
import { DefaultHeader } from './DefaultHeader';
import { DefaultMobileMenu } from './DefaultMobileMenu';

type Props = WithChildren;

export const DefaultLayout = ({ children }: Props) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);

  return (
    <Stack sx={{ minHeight: '100vh' }}>
      <Box
        sx={{
          zIndex: 2,
          width: '100%',
          boxShadow: `0 0 0 1px ${theme.palette.grey[200]}`,
        }}
      >
        <DefaultHeader
          onMobileMenuButtonClick={() => setIsMobileMenuOpen((state) => !state)}
          anchorRef={anchorRef}
        />
        <DefaultMobileMenu
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          anchorRef={anchorRef}
        />
      </Box>
      <Box sx={{ flex: 1 }}>
        <Container>{children}</Container>
      </Box>
      <Box
        sx={{
          width: '100%',
          boxShadow: `0 -1px 0 0 ${theme.palette.grey[200]}`,
        }}
      >
        <Footer />
      </Box>
    </Stack>
  );
};
