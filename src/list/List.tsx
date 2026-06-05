import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { ruRU } from '@mui/x-data-grid/locales';
import Container from '@mui/material/Container';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import movies, { Movie } from '../data/movies';

const columns: GridColDef[] = [
  { field: 'title', headerName: 'Название', flex: 1 },
  { field: 'year', headerName: 'Год', width: 90 },
  { field: 'director', headerName: 'Режиссёр', flex: 1 },
  { field: 'language', headerName: 'Язык', width: 90 },
  {
    field: 'genres', headerName: 'Жанры', flex: 1,
    valueGetter: (_v, row: Movie) => row.genres.join(', '),
  },
  { field: 'rating', headerName: 'Рейтинг', width: 100 },
  { field: 'runtime', headerName: 'Длит. (мин)', width: 120 },
];

function List() {
  return (
    <div>
      <Navbar active="2" />
      <Container maxWidth="lg" sx={{ height: '700px', mt: '20px' }}>
        <DataGrid
          localeText={ruRU.components.MuiDataGrid.defaultProps.localeText}
          rows={movies}
          columns={columns}
          showToolbar
          initialState={{ pagination: { paginationModel: { pageSize: 10 } } }}
          pageSizeOptions={[10, 25, 50]}
        />
      </Container>
      <Footer />
    </div>
  );
}

export default List;
