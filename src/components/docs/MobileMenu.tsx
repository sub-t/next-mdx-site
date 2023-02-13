import { headerStyles } from '@/styles/headerStyles';
import { theme } from '@/styles/theme';
import { WithChildren } from '@/types/common';
import { Close } from '@mui/icons-material';
import { Box, Drawer, IconButton } from '@mui/material';
import { HomeLink } from '../HomeLink';

type Props = WithChildren & {
  isMobileMenuOpen: boolean;
  closeMobileMenu: () => void;
};

export const MobileMenu = ({
  children,
  isMobileMenuOpen,
  closeMobileMenu,
}: Props) => {
  return (
    <Drawer
      anchor="left"
      open={isMobileMenuOpen}
      onClose={closeMobileMenu}
      PaperProps={{ sx: { width: '83vw' } }}
    >
      <Box
        sx={{
          position: 'relative',
          px: 4,
          boxShadow: `0 1px 0 0 ${theme.palette.grey[200]}`,
        }}
      >
        <Box component="nav" css={headerStyles}>
          <HomeLink />
          <IconButton aria-label="mobile menu button" onClick={closeMobileMenu}>
            <Close />
          </IconButton>
        </Box>
      </Box>
      {children}
    </Drawer>
  );
};
