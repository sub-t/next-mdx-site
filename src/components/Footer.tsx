import { SITE_NAME } from '@/config/app';
import { GitHub, Google, Twitter } from '@mui/icons-material';
import { Box, Stack, Typography } from '@mui/material';
import { Container } from './Container';
import { Link } from './Link';

export const Footer = () => {
  return (
    <Box component="footer" sx={{ width: '100%', py: 12, userSelect: 'none' }}>
      <Container>
        <Stack
          direction="column"
          justifyContent="space-bwtween"
          alignItems="center"
          spacing={4}
        >
          <Stack
            sx={{
              flexDirection: {
                lg: 'row',
              },
              justifyContent: {
                lg: 'space-between',
              },
              alignItems: 'center',
              gap: 4,
              width: '100%',
            }}
          >
            <Link href="/">
              <Typography component="span" variant="h3">
                {SITE_NAME}
              </Typography>
            </Link>
            <Stack direction="row" justifyContent="center" spacing={5}>
              <Link href="#" aria-label="link to GitHub Account">
                <GitHub sx={{ fontSize: 32 }} />
              </Link>
              <Link href="#" aria-label="link to Twitter Account">
                <Twitter sx={{ fontSize: 32 }} />
              </Link>
              <Link href="#" aria-label="link to Google Account">
                <Google sx={{ fontSize: 32 }} />
              </Link>
            </Stack>
          </Stack>
          <Typography component="small" sx={{ fontSize: 14 }}>
            Copyright &copy; {new Date().getFullYear()} {SITE_NAME}
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};
