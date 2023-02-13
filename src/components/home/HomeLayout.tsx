import { theme } from '@/styles/theme';
import { WithChildren } from '@/types/common';
import { Stack } from '@mui/material';
import { Box } from '@mui/system';
import { Container } from '../Container';
import { Footer } from '../Footer';
import { HomeHeader } from './HomeHeader';

type Props = WithChildren;

export const HomeLayout = ({ children }: Props) => {
  return (
    <Stack sx={{ minHeight: '100vh' }}>
      <Box
        sx={{
          width: '100%',
          boxShadow: `0 0 0 1px ${theme.palette.grey[200]}`,
        }}
      >
        <HomeHeader />
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
