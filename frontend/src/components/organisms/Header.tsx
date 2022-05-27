/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable prefer-arrow/prefer-arrow-functions */
import * as React from 'react';
import {
  Box,
  Button,
  ClickAwayListener,
  Drawer,
  Grow,
  IconButton,
  Paper,
  Popper,
  MenuItem,
  MenuList,
} from '@mui/material';

import {
  Menu as MenuIcon,
  Home as HomeIcon,
  Info as InfoIcon,
  MailOutline as MailOutlineIcon,
  KeyboardArrowDown as KeyboardArrowDownIcon,
  Psychology as PsychologyIcon,
  AccountBox as AccountBoxIcon,
  DirectionsRun as DirectionsRunIcon,
  Bolt as BoltIcon,
} from '@mui/icons-material';

import Toolbar from '../atoms/Toolbar';
import AppBar from '../atoms/AppBar';

function Header() {
  // 使用変数定義
  // open…about押下時のメニュー表示フラグ
  // mobileView…PC or スマホでの表示切り替えフラグ
  const [open, setOpen] = React.useState<boolean>(false);
  const [mobileView, setMobileView] = React.useState<boolean>(false);

  // 画面サイズで、PC表示とモバイル表示の切り替えを行う。
  React.useEffect(() => {
    const setResponsiveness = () =>
      window.innerWidth < 900 ? setMobileView(true) : setMobileView(false);

    setResponsiveness();

    window.addEventListener('resize', () => setResponsiveness());

    return () => {
      window.removeEventListener('resize', () => setResponsiveness());
    };
  }, []);

  // デスクトップ用 =========================== Start
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const displayDesktop = () => (
    <Toolbar sx={{ justifyContent: 'space-between' }}>
      <Box sx={{ flex: 1, justifyContent: 'flex-start' }}>
        <img src="/logo_transparent.png" alt="ecotiya Logo" width="78px" />
      </Box>
      <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
        <Button startIcon={<HomeIcon />} size="large" href="/" sx={{ mx: 0.5 }}>
          Home
        </Button>
        <div>
          <Button
            startIcon={<InfoIcon />}
            endIcon={<KeyboardArrowDownIcon />}
            size="large"
            ref={anchorRef}
            id="composition-button"
            aria-controls={open ? 'composition-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
            sx={{ mx: 0.5 }}
          >
            About
          </Button>
          <Popper
            open={open}
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
                    placement === 'bottom-start' ? 'left top' : 'left bottom',
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      autoFocusItem={open}
                      id="composition-menu"
                      aria-labelledby="composition-button"
                      onKeyDown={handleListKeyDown}
                    >
                      <MenuItem onClick={handleClose}>
                        <PsychologyIcon />
                        Vision
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        <AccountBoxIcon />
                        Profile
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        <DirectionsRunIcon />
                        Career
                      </MenuItem>
                      <MenuItem onClick={handleClose}>
                        <BoltIcon />
                        Skill
                      </MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
        <Button
          startIcon={<MailOutlineIcon />}
          size="large"
          href="/contact"
          sx={{ mx: 0.5 }}
        >
          Contact
        </Button>
      </Box>
    </Toolbar>
  );
  // デスクトップ用 =========================== End

  // モバイル用 =============================== Start
  const displayMobile = () => {
    const handleDrawerOpen = () => setOpen(true);
    const handleDrawerClose = () => setOpen(false);

    return (
      <Toolbar>
        <IconButton
          {...{
            edge: 'start',
            // color: 'inherit',
            'aria-label': 'menu',
            'aria-haspopup': 'true',
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          {...{
            anchor: 'left',
            open,
            onClose: handleDrawerClose,
          }}
        >
          {/* <div className={drawerContainer}>{getDrawerChoices()}</div> */}
        </Drawer>

        <Box sx={{ flex: 1, justifyContent: 'flex-start' }}>
          <img src="/logo_transparent.png" alt="ecotiya Logo" width="78px" />
        </Box>
      </Toolbar>
    );
  };
  // モバイル用 =============================== End

  return (
    <div>
      <AppBar position="fixed" sx={{ bgcolor: 'white' }}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default Header;
