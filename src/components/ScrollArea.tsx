import { theme } from '@/styles/theme';
import { WithChildren } from '@/types/common';
import {
  Corner,
  Root,
  Scrollbar,
  Thumb,
  Viewport,
} from '@radix-ui/react-scroll-area';

const SCROLLBAR_SIZE = 6;

type Props = WithChildren;

export const ScrollArea = ({ children }: Props) => (
  <Root css={{ overflow: 'hidden', width: '100%', height: '100%' }}>
    <Viewport css={{ width: '100%', height: '100%' }}>{children}</Viewport>
    <Scrollbar
      className="flex select-none touch-none p-0.5 bg-blackA6 transition-colors duration-[160ms] ease-out hover:bg-blackA8 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
      css={{
        userSelect: 'none',
        touchAction: 'none',
        display: 'flex',
        width: SCROLLBAR_SIZE,
      }}
      orientation="vertical"
    >
      <Thumb
        css={{
          flex: 1,
          background: theme.palette.grey[400],
          borderRadius: SCROLLBAR_SIZE,

          position: 'relative',
          '::before': {
            content: '""',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100%',
            height: '100%',
            minWidth: 44,
            minHeight: 44,
          },
        }}
      />
    </Scrollbar>
    <Corner />
  </Root>
);
