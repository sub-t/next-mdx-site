import { globalRoutes } from '@/lib/routes';
import { headerStyles } from '@/styles/headerStyles';
import { theme } from '@/styles/theme';
import { Box, Stack } from '@mui/material';
import { Container } from '../Container';
import { HomeLink } from '../HomeLink';
import { Link } from '../Link';

export const HomeHeader = () => {
  return (
    <Container>
      <Box component="header" css={headerStyles}>
        <Stack direction="row" alignItems="center">
          <HomeLink />
        </Stack>
        <Stack
          direction="row"
          alignItems="center"
          spacing={3}
          sx={{ display: { xs: 'none', md: 'flex' } }}
        >
          {globalRoutes.map((route) => (
            <Link key={route.label} href={route.path ?? '/'}>
              <Box
                component="span"
                sx={{
                  p: 1,
                  fontWeight: 900,
                  color: theme.palette.grey[800],
                  transitionDuration: '200ms',
                  ':hover': {
                    color: theme.palette.grey[600],
                  },
                }}
              >
                {route.label}
              </Box>
            </Link>
          ))}
        </Stack>
      </Box>
    </Container>
  );
};
