import { globalRoutes } from '@/lib/routes';
import { headerStyles } from '@/styles/headerStyles';
import { theme } from '@/styles/theme';
import { Menu } from '@mui/icons-material';
import { Box, IconButton, Stack } from '@mui/material';
import { RefObject } from 'react';
import { Container } from '../Container';
import { HomeLink } from '../HomeLink';
import { Link } from '../Link';

type Props = {
  onMobileMenuButtonClick: () => void;
  anchorRef: RefObject<HTMLButtonElement>;
};

export const DefaultHeader = ({
  onMobileMenuButtonClick,
  anchorRef,
}: Props) => {
  return (
    <Container>
      <Box component="header" css={headerStyles}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ width: '100%' }}
        >
          <Stack direction="row" alignItems="center">
            <Box sx={{ display: { xs: 'block', md: 'none' }, marginRight: 3 }}>
              <IconButton
                ref={anchorRef}
                aria-label="mobile menu button"
                onClick={onMobileMenuButtonClick}
                disableTouchRipple
                sx={{ p: 0, ':hover': { backgroundColor: 'transparent' } }}
              >
                <Menu />
              </IconButton>
            </Box>
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
        </Stack>
      </Box>
    </Container>
  );
};
