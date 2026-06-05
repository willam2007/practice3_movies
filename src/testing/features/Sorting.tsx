import { useMemo } from 'react';
import { Grid } from '@mui/material';
import { Question } from '../../data/quizData';
import SortableList from './SortableList';

interface Props {
  index: number;
  q: Question;
}

function Sorting({ index, q }: Props) {
  const initial = useMemo(
    () => [...(q.tasks || []).map((t) => t.question)].sort(() => Math.random() - 0.5),
    [q]
  );

  return (
    <Grid container sx={{ justifyContent: 'center' }}>
      <Grid size={{ xs: 12, md: 8 }}>
        <SortableList index={index} initial={initial} />
      </Grid>
    </Grid>
  );
}

export default Sorting;
