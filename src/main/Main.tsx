import { Container, Grid, Box, Typography, Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Gallery from './components/Gallery';
import SideCard from './components/SideCard';
import CenterCard from './components/CenterCard';
import movies from '../data/movies';

function Main() {
  const gallery = movies.slice(0, 5);
  const leftCards = [movies[5], movies[6]];
  const centerHero = movies[0];
  const centerCards = [movies[2], movies[3], movies[9]];
  const rightCards = [movies[10], movies[11]];

  return (
    <div>
      <Navbar active="1" />
      <Container maxWidth="xl" sx={{ mt: 3 }}>
        <Gallery items={gallery} />

        <Grid container spacing={3}>
          {/* Левая колонка */}
          <Grid size={{ xs: 12, md: 3 }}>
            {leftCards.map((m) => (
              <SideCard key={m.id} movie={m} imageLeft={false} />
            ))}
          </Grid>

          {/* Центральная колонка */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ mb: 3 }}>
              <Typography variant="h5" align="center" gutterBottom>
                {centerHero.title}
              </Typography>
              {centerHero.overview.map((p, i) => (
                <Typography key={i} variant="body2" color="text.secondary" sx={{ textAlign: 'justify' }}>
                  {p}
                </Typography>
              ))}
              <Box sx={{ textAlign: 'right', mt: 1 }}>
                <MuiLink component={Link} to={'/movie/' + centerHero.id} underline="hover">
                  Подробнее »
                </MuiLink>
              </Box>
            </Box>

            <Grid container spacing={2}>
              {centerCards.map((m) => (
                <Grid key={m.id} size={{ xs: 12, sm: 4 }}>
                  <CenterCard movie={m} />
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Правая колонка */}
          <Grid size={{ xs: 12, md: 3 }}>
            {rightCards.map((m) => (
              <SideCard key={m.id} movie={m} imageLeft />
            ))}
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
}

export default Main;
