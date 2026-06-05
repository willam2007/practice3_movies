import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import MenuItem from '@mui/material/MenuItem';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  border: '1px solid',
  borderColor: theme.palette.divider,
  padding: '8px 12px',
}));

const items = [
  { label: 'Главная', to: '/' },
  { label: 'Каталог', to: '/list' },
  { label: 'Диаграммы', to: '/chart' },
  { label: 'Проверь себя', to: '/testing' },
];

interface ComponentProps {
  active: string;
}

function Navbar({ active }: ComponentProps) {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (v: boolean) => () => setOpen(v);
  const activeIdx = parseInt(active, 10) - 1;

  return (
    <AppBar position="static" sx={{ boxShadow: 0, bgcolor: 'transparent', mt: '28px' }}>
      <Container maxWidth="xl">
        <StyledToolbar>
          <Typography variant="h6" sx={{ color: '#2e9e7b', fontWeight: 'bold' }}>            🎬 Кинокаталог TMDB
          </Typography>

          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {items.map((it, i) => (
              <Button
                key={it.label}
                component={Link}
                to={it.to}
                color="info"
                size="medium"
                variant={i === activeIdx ? 'contained' : 'text'}
              >
                {it.label}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton aria-label="Menu" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
              <Box>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>
                {items.map((it, i) => (
                  <MenuItem
                    key={it.label}
                    component={Link}
                    to={it.to}
                    selected={i === activeIdx}
                    onClick={toggleDrawer(false)}
                    sx={{ '&:hover': { bgcolor: '#2e9e7b', color: 'white' } }}
                  >
                    {it.label}
                  </MenuItem>
                ))}
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
