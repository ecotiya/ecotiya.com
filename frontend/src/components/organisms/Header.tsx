/* eslint-disable prefer-arrow/prefer-arrow-functions */
import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import AppBar from '../atoms/AppBar';
import Toolbar from '../atoms/Toolbar';

const whiteTheme = createTheme({
  palette: {
    primary: {
      main: '#ffffff',
    },
  },
});

const rightLink = {
  fontSize: 25,
  color: 'common.brack',
  ml: 3,
};

function Header() {
  return (
    <div>
      <ThemeProvider theme={whiteTheme}>
        <AppBar position="fixed" color="primary">
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Box sx={{ flex: 1, justifyContent: 'flex-start' }}>
              <img
                src="/logo_transparent.png"
                alt="ecotiya Logo"
                width="81px"
              />
            </Box>
            <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
              <Link
                color="inherit"
                variant="subtitle1"
                underline="hover"
                href="/"
                sx={rightLink}
              >
                Home
              </Link>
              <Link
                color="inherit"
                variant="subtitle1"
                underline="hover"
                href="/about"
                sx={rightLink}
              >
                About
              </Link>
              <Link
                color="inherit"
                variant="subtitle1"
                underline="hover"
                href="/contact"
                sx={rightLink}
              >
                Contact
              </Link>
            </Box>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
      <Toolbar />
    </div>
  );
}

export default Header;
