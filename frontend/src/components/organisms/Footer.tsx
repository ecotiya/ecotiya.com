/* eslint-disable prefer-arrow/prefer-arrow-functions */
import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

function Footer() {
  return (
    <footer>
      <Box
        px={{ xs: 3, sm: 5 }}
        py={{ xs: 5, sm: 5 }}
        bgcolor="text.secondary"
        color="white"
      >
        <Container maxWidth="lg">
          <Box textAlign="center" pt={{ xs: 5, sm: 5 }} pb={{ xs: 5, sm: 0 }}>
            Copyright &copy; {new Date().getFullYear()} ecotiya
          </Box>
        </Container>
      </Box>
    </footer>
  );
}

export default Footer;
