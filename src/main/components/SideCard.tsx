import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { Movie } from '../../data/movies';

interface Props {
  movie: Movie;
  imageLeft?: boolean;
}

function SideCard({ movie, imageLeft }: Props) {
  return (
    <Card
      variant="outlined"
      sx={{ display: 'flex', flexDirection: imageLeft ? 'row' : 'row-reverse', mb: 2 }}
    >
      <Box
        component="img"
        src={movie.poster}
        alt={movie.title}
        sx={{ width: '40%', objectFit: 'cover' }}
      />
      <CardContent sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }} gutterBottom>
          {movie.title}
        </Typography>
        <Typography variant="caption" color="text.secondary" sx={{ mb: 1 }}>
          {movie.year} · ★ {movie.rating}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ flex: 1, textAlign: 'justify' }}>
          {movie.overview[0]}
        </Typography>
        <Button
          component={Link}
          to={'/movie/' + movie.id}
          variant="contained"
          size="small"
          sx={{ alignSelf: 'flex-start', mt: 1 }}
        >
          Подробнее »
        </Button>
      </CardContent>
    </Card>
  );
}

export default SideCard;
