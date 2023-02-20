import { theme } from '@/styles/theme';
import { Box, List, ListItem, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';

type Heading = {
  id: string;
  text: string;
  level: number;
};

export const Toc = () => {
  const router = useRouter();
  const [headings, setHeadings] = React.useState<Heading[]>([]);

  React.useEffect(() => {
    const headings: Heading[] = Array.from<HTMLHeadingElement>(
      document.querySelectorAll('h2, h3, h4'),
    ).map((element) => ({
      id: element.id,
      text: element.innerText,
      level: Number(element.nodeName.charAt(1)),
    }));
    setHeadings(headings);
  }, [router.asPath]);

  return (
    <Box
      component="nav"
      aria-labelledby="site-table-of-components-heading"
      sx={{
        p: 2,
        display: headings.length === 0 ? 'none' : 'block',
      }}
    >
      <List sx={{ p: 0 }}>
        {headings.map(({ id, text, level }) => {
          return (
            <ListItem key={id} data-level={level} sx={{ p: 0, m: 2 }}>
              <a
                href={`#${id}`}
                css={{
                  display: 'inline-flex',
                  margin: theme.spacing(1, 0),
                  textDecoration: 'none',

                  '[data-level="2"] ~ [data-level="3"] &': {
                    marginLeft: theme.spacing(5),
                  },
                }}
              >
                <Typography fontSize="0.9rem" color={theme.palette.grey[800]}>
                  {text}
                </Typography>
              </a>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};
