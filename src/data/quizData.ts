export type QuizType = 'M' | 'S' | 'single' | 'multiple';

export interface Question {
  id: number;
  type: QuizType;
  title: string;
  // M / S
  tasks?: { question: string; answer: string }[];
  // single / multiple
  options?: string[];
  correct?: string[];
}

export const quiz: Question[] = [
  {
    id: 1,
    type: 'M',
    title: 'Сопоставьте фильм и его режиссёра.',
    tasks: [
      { question: 'Inception', answer: 'Кристофер Нолан' },
      { question: 'Pulp Fiction', answer: 'Квентин Тарантино' },
      { question: 'Parasite', answer: 'Пон Джун-хо' },
      { question: 'Spirited Away', answer: 'Хаяо Миядзаки' },
    ],
  },
  {
    id: 2,
    type: 'S',
    title: 'Отсортируйте фильмы по году выхода (от старых к новым).',
    tasks: [
      { question: 'Pulp Fiction', answer: '1' },
      { question: 'Titanic', answer: '2' },
      { question: 'The Matrix', answer: '3' },
      { question: 'Gladiator', answer: '4' },
      { question: 'Inception', answer: '5' },
    ],
  },
  {
    id: 3,
    type: 'single',
    title: 'Какой из фильмов снят на корейском языке?',
    options: ['Inception', 'Parasite', 'Gladiator', 'Whiplash'],
    correct: ['Parasite'],
  },
  {
    id: 4,
    type: 'multiple',
    title: 'Какие из этих фильмов снял Кристофер Нолан?',
    options: ['Interstellar', 'The Dark Knight', 'Joker', 'Inception', 'Titanic'],
    correct: ['Interstellar', 'The Dark Knight', 'Inception'],
  },
  {
    id: 5,
    type: 'single',
    title: 'В каком фильме главный герой — барабанщик?',
    options: ['Coco', 'Whiplash', 'Joker', 'The Matrix'],
    correct: ['Whiplash'],
  },
  {
    id: 6,
    type: 'multiple',
    title: 'Какие из этих фильмов являются мультфильмами (анимация)?',
    options: ['Coco', 'Spirited Away', 'Gladiator', 'Inception'],
    correct: ['Coco', 'Spirited Away'],
  },
];
