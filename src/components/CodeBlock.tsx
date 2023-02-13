import { theme } from '@/styles/theme';
import { Box } from '@mui/material';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import a11yDark from 'react-syntax-highlighter/dist/cjs/styles/prism/a11y-dark';
import { CopyCodeButton } from './CopyCodeButton';

type Code = {
  props: {
    children: string;
    className: string;
  };
};

type Props = { children: Code };

export const CodeBlock = ({ children }: Props) => {
  const match = /language-(\w+)(:?.*)/.exec(children.props.className || '');
  const language = match?.[1];
  const filename = match?.[2].slice(1);

  const code = String(children.props.children).replace(/\n$/, '');

  return (
    <Box sx={{ mt: 6, mb: 4 }}>
      {filename && (
        <Box
          sx={{
            display: 'inline-block',
            p: theme.spacing(1, 4),
            borderTopLeftRadius: '0.3rem',
            borderTopRightRadius: '0.3rem',
            backgroundColor: 'black',
            color: 'white',
            fontSize: '14px',
          }}
        >
          {filename}
        </Box>
      )}
      <Box
        sx={{
          position: 'relative',
        }}
      >
        <SyntaxHighlighter
          language={language}
          style={a11yDark}
          css={{
            padding: '1rem !important',
            margin: '0 !important',
            borderRadius: '12px !important',
            fontSize: '0.9em !important',
            ...(filename && {
              borderTopLeftRadius: '0 !important',
            }),
          }}
        >
          {code}
        </SyntaxHighlighter>
        <CopyCodeButton code={code} />
      </Box>
    </Box>
  );
};
