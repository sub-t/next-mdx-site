/* eslint-disable @typescript-eslint/no-explicit-any */
import { theme } from '@/styles/theme';
import { Box, List, Typography } from '@mui/material';
import { CodeBlock } from '../CodeBlock';
import { Link } from '../Link';

export const components: {
  [key: string]: any;
} = {
  p: (props: any) => (
    <Box
      component="p"
      sx={{ mt: 6, mb: 0, lineHeight: '1.75rem', fontSize: '15px' }}
      {...props}
    />
  ),
  ul: (props: any) => (
    <List component="ul" sx={{ mt: 6, mb: 0, fontSize: '15px' }} {...props} />
  ),
  pre: CodeBlock,
  a: ({ href, ...props }: any) => (
    <Link
      href={href}
      css={{
        textDecoration: 'underline',
        transitionDuration: '200ms',
        ':hover': { color: '#0077ff' },
      }}
      {...props}
    />
  ),
  code: (props: any) => (
    <Box
      component="code"
      sx={{
        whiteSpace: 'nowrap',
        fontFamily:
          'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
        margin: '0 2px',
        padding: '2px 0.25em',
        fontSize: '0.9em',
        border: 1,
        borderRadius: '0.375rem',
        borderColor: theme.palette.grey[300],
        color: theme.palette.grey[800],
        backgroundColor: theme.palette.grey[100],
      }}
      {...props}
    />
  ),
  h1: (props: any) => <Typography variant="h1" {...props} />,
  h2: (props: any) => (
    <Typography
      variant="h2"
      sx={{
        mt: 10,
        pb: 1,
        borderBottom: 1,
        borderColor: theme.palette.grey[300],
      }}
      {...props}
    />
  ),
  h3: (props: any) => (
    <Typography
      variant="h3"
      sx={{
        mt: 8,
      }}
      {...props}
    />
  ),
  h4: (props: any) => (
    <Typography
      variant="h3"
      sx={{
        mt: 5,
      }}
      {...props}
    />
  ),
};
