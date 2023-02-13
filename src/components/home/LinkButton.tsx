import { theme } from '@/styles/theme';
import { css } from '@emotion/react';
import { ArrowRightAlt } from '@mui/icons-material';
import { Stack, Typography } from '@mui/material';
import { Link } from '../Link';

type Props = React.ComponentPropsWithoutRef<typeof Link>;

export const LinkButton = ({ children, ...props }: Props) => {
  return (
    <Link
      css={css`
        display: block;
        padding: ${theme.spacing(4, 6)};
        border: 1px solid black;
        border-radius: 999px;
      `}
      {...props}
    >
      <Stack direction="row" alignItems="center" spacing={2}>
        <Typography component="span" fontWeight={600}>
          {children}
        </Typography>
        <ArrowRightAlt fontSize="small" />
      </Stack>
    </Link>
  );
};
