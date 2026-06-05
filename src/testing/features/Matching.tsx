import { useMemo } from 'react';
import { Grid, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { Question } from '../../data/quizData';
import SortableList from './SortableList';

interface Props {
  index: number;
  q: Question;
}

function Matching({ index, q }: Props) {
  const answers = useMemo(
    () => [...(q.tasks || []).map((t) => t.answer)].sort(() => Math.random() - 0.5),
    [q]
  );

  return (
    <Grid container spacing={2}>
      <Grid size={6}>
        <List>
          {q.tasks!.map((item, i) => (
            <ListItem key={i}>
              <ListItemButton
                sx={{ border: '1px solid gray', borderRadius: '5px', textAlign: 'right' }}
              >
                <ListItemText primary={item.question} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Grid>
      <Grid size={6}>
        <SortableList index={index} initial={answers} />
      </Grid>
    </Grid>
  );
}

export default Matching;
