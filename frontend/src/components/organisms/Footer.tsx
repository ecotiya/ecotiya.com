import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const Footer = () => (
  <footer>
    <Box
      px={{ xs: 3, sm: 5 }}
      py={{ xs: 5, sm: 5 }}
      bgcolor="text.secondary"
      color="white"
    >
      <Container maxWidth="lg">
        <Box textAlign="center" pt={{ xs: 5, sm: 5 }} pb={{ xs: 5, sm: 0 }}>
          Copyright &copy; {new Date().getFullYear()} kos0514
        </Box>
      </Container>
    </Box>
  </footer>
);

export default Footer;
