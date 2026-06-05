import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import { Movie } from '../../data/movies';

function Gallery({ items }: { items: Movie[] }) {
  return (
    <Box sx={{ display: 'flex', gap: 1, height: 260, mb: 3 }}>
      {items.map((m) => (
        <Box
          key={m.id}
          component={Link}
          to={'/movie/' + m.id}
          sx={{
            flex: 1,
            borderRadius: 1,
            overflow: 'hidden',
            position: 'relative',
            '&:hover img': { transform: 'scale(1.05)' },
          }}
        >
          <Box
            component="img"
            src={m.poster}
            alt={m.title}
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform .3s',
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              p: 1,
              color: 'white',
              fontSize: 14,
              background: 'linear-gradient(transparent, rgba(0,0,0,.75))',
            }}
          >
            {m.title}
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default Gallery;
