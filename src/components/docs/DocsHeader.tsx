import { headerStyles } from '@/styles/headerStyles';
import { Menu } from '@mui/icons-material';
import { Box, IconButton, Stack } from '@mui/material';
import { Container } from '../Container';
import { HomeLink } from '../HomeLink';

type Props = {
  onMobileMenuButtonClick: () => void;
};

export const DocsHeader = ({ onMobileMenuButtonClick }: Props) => {
  return (
    <Container>
      <Box component="header" css={headerStyles}>
        <Stack direction="row" alignItems="center">
          <Box sx={{ display: { xs: 'block', md: 'none' }, marginRight: 3 }}>
            <IconButton
              aria-label="mobile menu button"
              onClick={onMobileMenuButtonClick}
              disableTouchRipple
              sx={{ p: 0, ':hover': { backgroundColor: 'transparent' } }}
            >
              <Menu />
            </IconButton>
          </Box>
          <HomeLink />
        </Stack>
      </Box>
    </Container>
  );
};
