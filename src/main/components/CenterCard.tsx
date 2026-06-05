import { Card, CardContent, CardMedia, Typography, Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';
import { Movie } from '../../data/movies';

function CenterCard({ movie }: { movie: Movie }) {
  return (
    <Card variant="outlined" sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardContent sx={{ flex: 1 }}>
        <Typography variant="h6" align="center" gutterBottom>
          {movie.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'justify', mb: 2 }}>
          {movie.overview[0]}
        </Typography>
        <CardMedia
          component="img"
          image={movie.poster}
          alt={movie.title}
          sx={{ borderRadius: 2, aspectRatio: '2 / 3', objectFit: 'cover' }}
        />
      </CardContent>
      <MuiLink
        component={Link}
        to={'/movie/' + movie.id}
        underline="hover"
        sx={{ alignSelf: 'flex-end', p: 2 }}
      >
        Подробнее »
      </MuiLink>
    </Card>
  );
}

export default CenterCard;
