import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

function Footer() {
  return (
    <Box component="footer" sx={{ mt: 6, py: 3, borderTop: '1px solid', borderColor: 'divider' }}>
      <Container maxWidth="xl">
        <Typography variant="body2" color="text.secondary" align="center">
          © {new Date().getFullYear()} Кинокаталог TMDB
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
