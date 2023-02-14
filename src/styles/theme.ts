import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    fontFamily: 'system-ui',
    h1: {
      lineHeight: '1rem',
      fontSize: '3rem',
      fontWeight: 700,
    },
    h2: {
      lineHeight: '2.25rem',
      fontSize: '1.875rem',
      fontWeight: 600,
    },
    h3: {
      lineHeight: '2rem',
      fontSize: '1.5rem',
      fontWeight: 600,
    },
    h4: {
      lineHeight: '1.75rem',
      fontSize: '1.25rem',
      fontWeight: 600,
    },
  },
  spacing: (factor: number) => `${0.25 * factor}rem`,
});
