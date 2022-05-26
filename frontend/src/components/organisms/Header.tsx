/* eslint-disable prefer-arrow/prefer-arrow-functions */
import * as React from 'react';
import Box from '@mui/material/Box';
import HomeIcon from '@mui/icons-material/Home';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import InfoIcon from '@mui/icons-material/Info';
import Button from '@mui/material/Button';
import AppBar from '../atoms/AppBar';
import Toolbar from '../atoms/Toolbar';

function Header() {
  return (
    <div>
      <AppBar position="fixed" sx={{ bgcolor: 'white' }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ flex: 1, justifyContent: 'flex-start' }}>
            <img src="/logo_transparent.png" alt="ecotiya Logo" width="78px" />
          </Box>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <Button
              startIcon={<HomeIcon />}
              size="large"
              href="/"
              sx={{ mx: 1 }}
            >
              Home
            </Button>
            <Button
              startIcon={<InfoIcon />}
              size="large"
              href="/about"
              sx={{ mx: 1 }}
            >
              About
            </Button>
            <Button
              startIcon={<MailOutlineIcon />}
              size="large"
              href="/contact"
              sx={{ mx: 1 }}
            >
              Contact
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default Header;
