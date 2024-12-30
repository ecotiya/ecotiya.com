/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import { HashLink } from 'react-router-hash-link';

import {
  Box,
  Button,
  ClickAwayListener,
  Drawer,
  Grow,
  IconButton,
  Link,
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
  AccountBox as AccountBoxIcon,
  DirectionsRun as DirectionsRunIcon,
  Bolt as BoltIcon,
  Twitter as TwitterIcon,
} from '@mui/icons-material';

import Toolbar from '../atoms/Toolbar';
import AppBar from '../atoms/AppBar';

const headersData = [
  {
    label: 'Home',
    href: '#home',
    icon: <HomeIcon />,
  },
  {
    label: 'Profile',
    href: '#profile',
    icon: <AccountBoxIcon />,
  },
  {
    label: 'Career',
    href: '#career',
    icon: <DirectionsRunIcon />,
  },
  {
    label: 'Skill',
    href: '#skill',
    icon: <BoltIcon />,
  },
  {
    label: 'Contact',
    href: '#contact',
    icon: <MailOutlineIcon />,
  },
];

const Header = () => {
  // デスクトップ用の変数
  const [open, setOpen] = React.useState<boolean>(false);

  // モバイル用の変数
  const [drawerOpen, setDrawerOpen] = React.useState<boolean>(false);
  const [mobileView, setMobileView] = React.useState<boolean>(false);

  // 画面サイズで、PC表示とモバイル表示の切り替えを行う。
  React.useEffect(() => {
    const setResponsiveness = () =>
      window.innerWidth < 900 ? setMobileView(true) : setMobileView(false);

    const resetOpenState = () => setOpen(false);
    const resetDrawerOpenState = () => setDrawerOpen(false);

    setResponsiveness();
    resetOpenState();
    resetDrawerOpenState();

    window.addEventListener('resize', () => setResponsiveness());
    window.addEventListener('resize', () => resetOpenState());
    window.addEventListener('resize', () => resetDrawerOpenState());

    return () => {
      window.removeEventListener('resize', () => setResponsiveness());
      window.removeEventListener('resize', () => resetOpenState());
      window.removeEventListener('resize', () => resetDrawerOpenState());
    };
  }, []);

  // HashLink用のイベント(移動場所が若干ずれるので、対応)
  const scrollWithOffset = (el: HTMLElement) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
    if (mobileView) {
      setDrawerOpen(false);
    }
  };

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

  const handleListKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  };

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current?.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const displayDesktop = () => (
    <Toolbar sx={{ justifyContent: 'space-between' }}>
      <Box sx={{ flex: 1, justifyContent: 'flex-start' }}>
        <a href="/">
          <img src="/logo_transparent.png" alt="kos0514 Logo" width="128px" />
        </a>
      </Box>
      <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
        <Button startIcon={<HomeIcon />} size="large" sx={{ mx: 0.5 }}>
          <HashLink
            to="#home"
            scroll={(el: HTMLElement) => scrollWithOffset(el)}
          >
            Home
          </HashLink>
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
                      <HashLink
                        to="#profile"
                        scroll={(el: HTMLElement) => scrollWithOffset(el)}
                      >
                        <MenuItem onClick={handleClose}>
                          <AccountBoxIcon />
                          Profile
                        </MenuItem>
                      </HashLink>
                      <HashLink
                        to="#career"
                        scroll={(el: HTMLElement) => scrollWithOffset(el)}
                      >
                        <MenuItem onClick={handleClose}>
                          <DirectionsRunIcon />
                          Career
                        </MenuItem>
                      </HashLink>
                      <HashLink
                        to="#skill"
                        scroll={(el: HTMLElement) => scrollWithOffset(el)}
                      >
                        <MenuItem onClick={handleClose}>
                          <BoltIcon />
                          Skill
                        </MenuItem>
                      </HashLink>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
        <Button startIcon={<MailOutlineIcon />} size="large" sx={{ mx: 0.5 }}>
          <HashLink
            to="#contact"
            scroll={(el: HTMLElement) => scrollWithOffset(el)}
          >
            Contact
          </HashLink>
        </Button>
        <Button
          startIcon={<TwitterIcon />}
          size="large"
          target="_blank"
          href="https://twitter.com/kos0514"
          sx={{ mx: 0.5 }}
          disableRipple
        >
          Twitter
        </Button>
      </Box>
    </Toolbar>
  );
  // デスクトップ用 =========================== End

  // モバイル用 =============================== Start
  const getDrawerChoices = () =>
    headersData.map(({ label, href, icon }) => (
      <HashLink
        {...{ to: href, style: { textDecoration: 'none' }, key: label }}
        scroll={(el: HTMLElement) => scrollWithOffset(el)}
      >
        <MenuItem>
          {icon}
          {label}
        </MenuItem>
      </HashLink>
    ));

  const displayMobile = () => {
    const handleDrawerOpen = () => setDrawerOpen(true);
    const handleDrawerClose = () => setDrawerOpen(false);

    return (
      <Toolbar>
        <IconButton
          {...{
            edge: 'start',
            color: 'primary',
            size: 'large',
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
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div>{getDrawerChoices()}</div>
          <Link target="_blank" href="https://twitter.com/kos0514">
            <MenuItem>
              <TwitterIcon />
              Twitter
            </MenuItem>
          </Link>
        </Drawer>

        <Box sx={{ flex: 1, justifyContent: 'flex-start' }}>
          <a href="/">
            <img src="/logo_transparent.png" alt="kos0514 Logo" width="128px" />
          </a>
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
};

export default Header;
