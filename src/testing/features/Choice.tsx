import {
  FormControl, FormControlLabel, RadioGroup, Radio, Checkbox, FormGroup,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Question } from '../../data/quizData';
import { setAnswer } from '../features/quizSlice';
import { RootState } from '../../store';

interface Props {
  index: number;
  q: Question;
}

function Choice({ index, q }: Props) {
  const dispatch = useDispatch();
  const selected = useSelector((s: RootState) => s.quiz.answers[index]) || [];

  if (q.type === 'single') {
    return (
      <FormControl>
        <RadioGroup
          value={selected[0] || ''}
          onChange={(e) => dispatch(setAnswer({ index, items: [e.target.value] }))}
        >
          {q.options!.map((opt) => (
            <FormControlLabel key={opt} value={opt} control={<Radio />} label={opt} />
          ))}
        </RadioGroup>
      </FormControl>
    );
  }

  const toggle = (opt: string) => {
    const next = selected.includes(opt)
      ? selected.filter((o) => o !== opt)
      : [...selected, opt];
    dispatch(setAnswer({ index, items: next }));
  };

  return (
    <FormControl>
      <FormGroup>
        {q.options!.map((opt) => (
          <FormControlLabel
            key={opt}
            control={<Checkbox checked={selected.includes(opt)} onChange={() => toggle(opt)} />}
            label={opt}
          />
        ))}
      </FormGroup>
    </FormControl>
  );
}

export default Choice;
