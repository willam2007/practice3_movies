import { useState } from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { quiz, Question } from '../../data/quizData';
import { RootState } from '../../store';
import { reset } from './quizSlice';
import Matching from './Matching';
import Sorting from './Sorting';
import Choice from './Choice';

function isCorrect(q: Question, answer: string[]): boolean {
  if (!answer || answer.length === 0) return false;
  if (q.type === 'M') {
    return q.tasks!.every((t, j) => answer[j] === t.answer);
  }
  if (q.type === 'S') {
    const order = [...q.tasks!].sort((a, b) => parseInt(a.answer) - parseInt(b.answer)).map((t) => t.question);
    return order.every((x, j) => answer[j] === x);
  }
  if (q.type === 'single') {
    return answer[0] === q.correct![0];
  }
  // multiple — множества должны совпасть
  return (
    answer.length === q.correct!.length &&
    q.correct!.every((c) => answer.includes(c))
  );
}

function Quiz() {
  const dispatch = useDispatch();
  const answers = useSelector((s: RootState) => s.quiz.answers);
  const [resetKey, setResetKey] = useState(0);
  const [results, setResults] = useState<boolean[] | null>(null);

  const handleCheck = () =>
    setResults(quiz.map((q, i) => isCorrect(q, answers[i] || [])));

  const handleRestart = () => {
    dispatch(reset());
    setResults(null);
    setResetKey((k) => k + 1);
  };

  const render = (q: Question, i: number) => {
    if (q.type === 'M') return <Matching index={i} q={q} />;
    if (q.type === 'S') return <Sorting index={i} q={q} />;
    return <Choice index={i} q={q} />;
  };

  return (
    <Container maxWidth="md">
      {quiz.map((q, i) => (
        <Box key={`${q.id}-${resetKey}`} component="section" sx={{ m: 2, p: 2 }}>
          <Typography variant="h5" gutterBottom>
            {i + 1}. {q.title}
          </Typography>
          {render(q, i)}
        </Box>
      ))}

      <Box sx={{ display: 'flex', justifyContent: 'space-around', mt: 2 }}>
        <Button variant="contained" onClick={handleCheck}>
          Проверить
        </Button>
        <Button variant="contained" onClick={handleRestart}>
          Начать снова
        </Button>
      </Box>

      {results && (
        <Box sx={{ mt: 3, textAlign: 'center' }}>
          <Typography variant="h6">
            Результат: {results.filter(Boolean).length} из {results.length}
          </Typography>
          {results.map((ok, i) => (
            <Typography key={i} variant="body1" color={ok ? 'success.main' : 'error.main'}>
              Задание {i + 1}. {ok ? 'Верно' : 'Неверно'}
            </Typography>
          ))}
        </Box>
      )}
    </Container>
  );
}

export default Quiz;
