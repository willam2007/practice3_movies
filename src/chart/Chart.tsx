import React, { useState } from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { LineChart } from '@mui/x-charts/LineChart';
import {
  Container, Box, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio,
  InputLabel, Select, MenuItem,
} from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { ruRU } from '@mui/x-data-grid/locales';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { byGenre, byLanguage, byYear, Stat } from '../data/groupdata';

type Group = 'genre' | 'language' | 'year';

const columns: GridColDef[] = [
  { field: 'name', headerName: 'Группа', flex: 1 },
  { field: 'min', headerName: 'Мин. рейтинг', flex: 1 },
  { field: 'max', headerName: 'Макс. рейтинг', flex: 1 },
  { field: 'avg', headerName: 'Сред. рейтинг', flex: 1 },
  { field: 'count', headerName: 'Кол-во', flex: 1 },
];

const series = [
  { dataKey: 'min', label: 'Мин. рейтинг' },
  { dataKey: 'avg', label: 'Сред. рейтинг' },
  { dataKey: 'max', label: 'Макс. рейтинг' },
];

function Chart() {
  const [group, setGroup] = useState<Group>('genre');
  const [isBar, setIsBar] = useState(true);

  const data: Stat[] =
    group === 'genre' ? byGenre() : group === 'language' ? byLanguage() : byYear();

  const chartSetting = { yAxis: [{ label: 'Рейтинг' }], height: 400 };
  const slotProps = {
    legend: { position: { vertical: 'bottom' as const, horizontal: 'center' as const } },
  };

  return (
    <div>
      <Navbar active="3" />
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, mt: 2, flexWrap: 'wrap' }}>
        <FormControl sx={{ width: 220 }}>
          <InputLabel>Группировать по</InputLabel>
          <Select
            value={group}
            label="Группировать по"
            onChange={(e: SelectChangeEvent) => setGroup(e.target.value as Group)}
          >
            <MenuItem value="genre">Жанру</MenuItem>
            <MenuItem value="language">Языку</MenuItem>
            <MenuItem value="year">Году</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Тип диаграммы:</FormLabel>
          <RadioGroup
            row
            value={isBar ? 'bar' : 'line'}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setIsBar(e.target.value === 'bar')}
          >
            <FormControlLabel value="bar" control={<Radio />} label="Гистограмма" />
            <FormControlLabel value="line" control={<Radio />} label="Линейная" />
          </RadioGroup>
        </FormControl>
      </Box>

      <Container maxWidth="lg">
        {isBar ? (
          <BarChart dataset={data as any} xAxis={[{ scaleType: 'band', dataKey: 'name' }]}
            series={series} slotProps={slotProps} {...chartSetting} />
        ) : (
          <LineChart dataset={data as any} xAxis={[{ scaleType: 'band', dataKey: 'name' }]}
            series={series} slotProps={slotProps} {...chartSetting} />
        )}
      </Container>

      <Container maxWidth="lg" sx={{ height: 450, mt: 2 }}>
        <DataGrid
          localeText={ruRU.components.MuiDataGrid.defaultProps.localeText}
          rows={data}
          columns={columns}
          showToolbar
        />
      </Container>
      <Footer />
    </div>
  );
}

export default Chart;
