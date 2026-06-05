import { useParams, Link } from 'react-router-dom';
import { Container, Typography, Box, Grid, Chip, Stack, Breadcrumbs } from '@mui/material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import movies from '../data/movies';

function MoviePage() {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === Number(id)) || movies[0];

  return (
    <div>
      <Navbar active="1" />
      <Container maxWidth="lg" sx={{ mt: 2 }}>
        <Breadcrumbs sx={{ mb: 2 }}>
          <Link to="/" style={{ textTransform: 'uppercase', color: '#2e9e7b' }}>
            Главная
          </Link>
          <Typography color="text.primary">{movie.title}</Typography>
        </Breadcrumbs>

        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              component="img"
              src={movie.poster}
              alt={movie.title}
              sx={{ width: '100%', borderRadius: 2 }}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 8 }}>
            <Typography variant="h4" gutterBottom>
              {movie.title} ({movie.year})
            </Typography>
            <Stack direction="row" spacing={1} sx={{ mb: 2, flexWrap: 'wrap', gap: 1 }}>
              {movie.genres.map((g) => (
                <Chip key={g} label={g} />
              ))}
            </Stack>
            {movie.overview.map((p, i) => (
              <Typography key={i} variant="body1" sx={{ mb: 1, textAlign: 'justify' }}>
                {p}
              </Typography>
            ))}
            <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
              Режиссёр: {movie.director}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Рейтинг: ★ {movie.rating} · Длительность: {movie.runtime} мин · Язык: {movie.language}
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
}

export default MoviePage;
