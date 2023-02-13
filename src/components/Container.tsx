import { Container as MuiContainer } from '@mui/system';
import { WithChildren } from '../types/common';

type Props = WithChildren;

export const Container = ({ children }: Props) => {
  return (
    <MuiContainer maxWidth="xl" disableGutters sx={{ px: '5vw' }}>
      {children}
    </MuiContainer>
  );
};
