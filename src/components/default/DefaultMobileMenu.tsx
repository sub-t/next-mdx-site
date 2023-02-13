import { globalRoutes } from '@/lib/routes';
import { ArrowRightAlt } from '@mui/icons-material';
import {
  ClickAwayListener,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
} from '@mui/material';
import { RefObject, SetStateAction } from 'react';
import { Link } from '../Link';

type Props = {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (value: SetStateAction<boolean>) => void;
  anchorRef: RefObject<HTMLButtonElement>;
};

export const DefaultMobileMenu = ({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  anchorRef,
}: Props) => {
  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setIsMobileMenuOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setIsMobileMenuOpen(false);
    } else if (event.key === 'Escape') {
      setIsMobileMenuOpen(false);
    }
  }

  return (
    <Popper
      open={isMobileMenuOpen}
      anchorEl={anchorRef.current}
      role={undefined}
      placement="bottom-start"
      transition
      disablePortal
    >
      {({ TransitionProps, placement }) => (
        <Grow
          {...TransitionProps}
          style={{
            transformOrigin:
              placement === 'bottom-start' ? 'right top' : 'right bottom',
          }}
        >
          <Paper>
            <ClickAwayListener onClickAway={handleClose}>
              <MenuList
                autoFocusItem={isMobileMenuOpen}
                onKeyDown={handleListKeyDown}
              >
                {globalRoutes.map((route) => (
                  <Link key={route.label} href={route.path ?? '/'}>
                    <MenuItem
                      onClick={handleClose}
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: 160,
                      }}
                    >
                      {route.label}{' '}
                      <ArrowRightAlt sx={{ fontSize: '0.8rem' }} />
                    </MenuItem>
                  </Link>
                ))}
              </MenuList>
            </ClickAwayListener>
          </Paper>
        </Grow>
      )}
    </Popper>
  );
};
