import { Route, Routes } from '@/lib/routes';
import { resolveUrl } from '@/lib/url';
import { Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import { useRouter } from 'next/dist/client/router';
import { Link } from '../Link';

type DocsPaginationProps = {
  routes: Routes;
};

export const DocsPagination = ({ routes }: DocsPaginationProps) => {
  const router = useRouter();

  const currentPagePath = router.asPath.split('#')[0];
  const currentPageIndex = routes.findIndex(
    (route) => resolveUrl(route.path!) === resolveUrl(currentPagePath),
  );
  const previous = routes[currentPageIndex - 1];
  const next = routes[currentPageIndex + 1];

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      aria-label="Pagination navigation"
    >
      {previous && <PaginationLink route={previous} direction="Previous" />}
      {next && (
        <Box sx={{ textAlign: 'right' }}>
          <PaginationLink route={next} direction="Next" />
        </Box>
      )}
    </Stack>
  );
};

type PaginationLinkProps = {
  route: Route;
  direction: string;
};

const PaginationLink = ({ route, direction }: PaginationLinkProps) => {
  return (
    <Link href={route.path ?? '/'} passHref>
      <Box aria-label={`${direction} page: ${route.label}`}>
        <Box sx={{ mb: 2 }}>
          <Typography>{direction}</Typography>
        </Box>
        <Typography>{route.label}</Typography>
      </Box>
    </Link>
  );
};
