import { SITE_NAME } from '@/config/app';
import { Box, Stack } from '@mui/material';
import { Image } from './Image';
import { Link } from './Link';

export const HomeLink = () => (
  <Link href="/">
    <Stack component="span" direction="row" alignItems="center" spacing={1}>
      <Image
        src="logo.svg"
        alt="website logo"
        css={{
          height: '1.6rem',
          width: '1.6rem',
        }}
      />
      <Box sx={{ py: 2, fontSize: '1.2rem', fontWeight: 700 }}>{SITE_NAME}</Box>
    </Stack>
  </Link>
);
