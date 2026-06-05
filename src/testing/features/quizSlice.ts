import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// answers[index] хранит ответ пользователя на задание:
//  M / S       -> массив строк в выбранном порядке
//  single      -> массив из одного выбранного варианта
//  multiple    -> массив выбранных вариантов
interface QuizState {
  answers: Record<number, string[]>;
}

const initialState: QuizState = { answers: {} };

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setAnswer: (state, action: PayloadAction<{ index: number; items: string[] }>) => {
      const { index, items } = action.payload;
      state.answers[index] = items;
    },
    reset: (state) => {
      state.answers = {};
    },
  },
});

export const { setAnswer, reset } = quizSlice.actions;
export default quizSlice.reducer;
