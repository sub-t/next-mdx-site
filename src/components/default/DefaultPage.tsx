import { theme } from '@/styles/theme';
import { WithChildren } from '@/types/common';
import { Box, Grid } from '@mui/material';
import { Accordion } from '../Accordion';
import { ScrollArea } from '../ScrollArea';
import { Seo } from '../Seo';
import { Toc } from '../Toc';

type PageProps = WithChildren & React.ComponentPropsWithoutRef<typeof Seo>;

type DefaultPageProps = PageProps & {
  withToc?: boolean;
};

export const DefaultPage = ({
  withToc = false,
  ...props
}: DefaultPageProps) => {
  return withToc ? <PageWithToc {...props} /> : <Page {...props} />;
};

const Page = ({ children, title, description, image }: PageProps) => {
  return (
    <>
      <Seo title={title} description={description} image={image} />
      <Box sx={{ py: 8 }}>{children}</Box>
    </>
  );
};

const PageWithToc = ({ children, title, description, image }: PageProps) => {
  return (
    <>
      <Seo title={title} description={description} image={image} />
      <Grid container spacing={16}>
        <Grid component="main" item xs={12} lg={9}>
          <Box sx={{ py: 8 }}>
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
            {children}
          </Box>
        </Grid>
        <Grid
          component="aside"
          item
          lg={3}
          sx={{ display: { xs: 'none', lg: 'block' } }}
        >
          <Box
            sx={{
              zIndex: 1,
              position: 'sticky',
              top: 0,
              right: 0,
              height: '100%',
              maxHeight: '100vh',
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
