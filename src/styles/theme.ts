import { createTheme } from '@mui/material/styles';

// Create a theme instance.
export const theme = createTheme({
  typography: {
    fontFamily: 'system-ui',
    h1: {
      fontWeight: 700,
      fontSize: '3rem',
    },
    h2: {
      fontWeight: 600,
      fontSize: '1.875rem',
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.5rem',
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.25rem',
    },
  },
  spacing: (factor: number) => `${0.25 * factor}rem`,
});
