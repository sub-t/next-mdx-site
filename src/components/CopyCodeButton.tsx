import { theme } from '@/styles/theme';
import { Check, ContentCopy } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import copy from 'copy-to-clipboard';
import * as React from 'react';

type Props = {
  code: string;
};

export const CopyCodeButton = ({ code }: Props) => {
  const [hasCopied, setHasCopied] = React.useState(false);

  React.useEffect(() => {
    if (hasCopied) setTimeout(() => setHasCopied(false), 3000);
  }, [hasCopied]);

  return (
    <IconButton
      aria-label="Copy code to clipboard"
      onClick={() => {
        copy(code);
        setHasCopied(true);
      }}
      size="small"
      sx={{
        position: 'absolute',
        top: '0.75rem',
        right: '0.75rem',
        display: 'inline-flex',
        color: theme.palette.grey[300],
        opacity: 0,
        '*:hover > &, &:focus': { opacity: 0.8, transition: '150ms linear' },
      }}
    >
      {hasCopied ? (
        <Check fontSize="inherit" />
      ) : (
        <ContentCopy fontSize="inherit" />
      )}
    </IconButton>
  );
};
