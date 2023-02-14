import { allDocsRoutes } from '@/lib/routes/docsRoutes';
import { HEADER_HEIGHT } from '@/styles/headerStyles';
import { theme } from '@/styles/theme';
import { WithChildren } from '@/types/common';
import { Box, Grid, Stack } from '@mui/material';
import { Accordion } from '../Accordion';
import { ScrollArea } from '../ScrollArea';
import { Seo } from '../Seo';
import { Toc } from '../Toc';
import { DocsPagination } from './DocsPagination';

type Props = WithChildren & React.ComponentPropsWithoutRef<typeof Seo>;

export const DocsPage = ({ children, title, description, image }: Props) => {
  return (
    <>
      <Seo title={title} description={description} image={image} />
      <Grid container spacing={16}>
        <Grid component="main" item xs={12} lg={8}>
          <Stack spacing={16} sx={{ py: 8 }}>
            <Box sx={{ display: { xs: 'block', lg: 'none' }, my: 4 }}>
              <Accordion summary="目次">
                <Box
                  sx={{
                    boxShadow: `0 -1px 0 0 ${theme.palette.grey[200]}`,
                  }}
                >
                  <Toc />
                </Box>
              </Accordion>
            </Box>
            <article>{children}</article>
            <DocsPagination routes={allDocsRoutes} />
          </Stack>
        </Grid>
        <Grid
          component="aside"
          item
          lg={4}
          sx={{ display: { xs: 'none', lg: 'block' } }}
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
              <Box sx={{ py: 8 }}>
                <Toc />
              </Box>
            </ScrollArea>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
