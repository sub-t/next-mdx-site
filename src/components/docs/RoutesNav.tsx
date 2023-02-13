import { Routes } from '@/lib/routes';
import { theme } from '@/styles/theme';
import { css } from '@emotion/react';
import { Box, List, ListItem, Typography } from '@mui/material';
import { Accordion } from '../Accordion';
import { Link } from '../Link';

type Props = {
  routes: Routes;
};

export const RoutesNav = ({ routes }: Props) => {
  return (
    <Box component="nav" aria-labelledby="site-table-of-components-heading">
      <List sx={{ p: 0 }}>
        {routes.map((route) => {
          if (route.path) {
            return (
              <ListItem key={route.label} css={NavItemStyle}>
                <Link href={route.path} css={NavLinkStyle}>
                  <Typography css={NavTextStyle}>{route.label}</Typography>
                </Link>
              </ListItem>
            );
          }
          if (route.pages) {
            return (
              <ListItem key={route.label} css={NavItemStyle}>
                <Accordion
                  summary={route.label}
                  css={css`
                    width: 100%;
                    background-color: transparent;
                  `}
                >
                  <List sx={{ p: 0 }}>
                    {route.pages.map((page) => (
                      <ListItem key={page.label} css={NavItemStyle}>
                        <Link href={page.path} css={NavLinkStyle}>
                          <Typography css={NavTextStyle}>
                            {page.label}
                          </Typography>
                        </Link>
                      </ListItem>
                    ))}
                  </List>
                </Accordion>
              </ListItem>
            );
          }
        })}
      </List>
    </Box>
  );
};

const NavItemStyle = css`
  padding: 0;
`;

const NavLinkStyle = css`
  width: 100%;
  padding: ${theme.spacing(2, 4)};
  border-radius: 999px;
  text-decoration: 'none';
  transition-duration: 200ms;
  :hover {
    background-color: ${theme.palette.grey[100]};
  }
`;

const NavTextStyle = css`
  font-size: 0.9rem;
  color: ${theme.palette.grey[800]};
`;
