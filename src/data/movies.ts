export interface Movie {
  id: number;
  title: string;
  year: number;
  poster: string;
  language: string;
  genres: string[];
  rating: number;
  runtime: number;
  director: string;
  overview: string[];
}

const IMG = 'https://image.tmdb.org/t/p/w500';

const movies: Movie[] = [
  {
    id: 1, title: 'Inception', year: 2010, poster: IMG + '/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg',
    language: 'en', genres: ['Action', 'Science Fiction', 'Thriller'], rating: 8.4, runtime: 148,
    director: 'Кристофер Нолан',
    overview: [
      'Дом Кобб — талантливый вор, специализирующийся на извлечении ценной информации из снов.',
      'Ему предлагают шанс вернуть прежнюю жизнь в обмен на почти невыполнимое задание — внедрить идею.',
    ],
  },
  {
    id: 2, title: 'Interstellar', year: 2014, poster: IMG + '/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
    language: 'en', genres: ['Adventure', 'Drama', 'Science Fiction'], rating: 8.4, runtime: 169,
    director: 'Кристофер Нолан',
    overview: [
      'Когда Земля становится непригодной для жизни, группа исследователей отправляется через червоточину.',
      'Их цель — найти человечеству новый дом среди звёзд.',
    ],
  },
  {
    id: 3, title: 'Parasite', year: 2019, poster: IMG + '/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg',
    language: 'ko', genres: ['Comedy', 'Thriller', 'Drama'], rating: 8.5, runtime: 132,
    director: 'Пон Джун-хо',
    overview: [
      'Бедная семья Кимов постепенно проникает в дом богатого семейства Пак.',
      'Невинная афера оборачивается неожиданными и трагическими последствиями.',
    ],
  },
  {
    id: 4, title: 'The Dark Knight', year: 2008, poster: IMG + '/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
    language: 'en', genres: ['Drama', 'Action', 'Crime', 'Thriller'], rating: 8.5, runtime: 152,
    director: 'Кристофер Нолан',
    overview: [
      'Бэтмен поднимает ставки в войне с преступностью Готэма.',
      'Но появляется Джокер — преступник, сеющий хаос ради самого хаоса.',
    ],
  },
  {
    id: 5, title: 'Pulp Fiction', year: 1994, poster: IMG + '/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg',
    language: 'en', genres: ['Thriller', 'Crime'], rating: 8.5, runtime: 154,
    director: 'Квентин Тарантино',
    overview: [
      'Несколько переплетённых историй из жизни бандитов Лос-Анджелеса.',
      'Фильм, изменивший представление о нелинейном повествовании.',
    ],
  },
  {
    id: 6, title: 'Spirited Away', year: 2001, poster: IMG + '/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg',
    language: 'ja', genres: ['Animation', 'Family', 'Fantasy'], rating: 8.5, runtime: 125,
    director: 'Хаяо Миядзаки',
    overview: [
      'Девочка Тихиро попадает в волшебный мир духов и богов.',
      'Чтобы спасти родителей, ей предстоит пройти через множество испытаний.',
    ],
  },
  {
    id: 7, title: 'The Matrix', year: 1999, poster: IMG + '/p96dm7sCMn4VYAStA6siNz30G1r.jpg',
    language: 'en', genres: ['Action', 'Science Fiction'], rating: 8.2, runtime: 136,
    director: 'Вачовски',
    overview: [
      'Хакер Нео узнаёт, что реальность — это симуляция, созданная машинами.',
      'Он присоединяется к восстанию против поработивших человечество программ.',
    ],
  },
  {
    id: 8, title: 'Gladiator', year: 2000, poster: IMG + '/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg',
    language: 'en', genres: ['Action', 'Drama', 'Adventure'], rating: 8.2, runtime: 155,
    director: 'Ридли Скотт',
    overview: [
      'Преданный полководец Максимус становится гладиатором.',
      'Его ведёт жажда мести императору, погубившему его семью.',
    ],
  },
  {
    id: 9, title: 'Titanic', year: 1997, poster: IMG + '/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg',
    language: 'en', genres: ['Drama', 'Romance'], rating: 7.9, runtime: 194,
    director: 'Джеймс Кэмерон',
    overview: [
      'История любви Джека и Розы на борту обречённого лайнера.',
      'Их чувства вспыхивают на фоне крупнейшей морской катастрофы XX века.',
    ],
  },
  {
    id: 10, title: 'Whiplash', year: 2014, poster: IMG + '/7fn624j5lj3xTme2SgiLCeuedmO.jpg',
    language: 'en', genres: ['Drama', 'Music'], rating: 8.4, runtime: 105,
    director: 'Дэмьен Шазелл',
    overview: [
      'Молодой барабанщик мечтает стать великим джазменом.',
      'Его наставник — тиран, готовый сломать любого ради совершенства.',
    ],
  },
  {
    id: 11, title: 'Coco', year: 2017, poster: IMG + '/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg',
    language: 'en', genres: ['Animation', 'Family', 'Fantasy'], rating: 8.2, runtime: 105,
    director: 'Ли Анкрич',
    overview: [
      'Мальчик Мигель мечтает стать музыкантом вопреки запрету семьи.',
      'В День мёртвых он попадает в загробный мир и раскрывает семейную тайну.',
    ],
  },
  {
    id: 12, title: 'Joker', year: 2019, poster: IMG + '/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg',
    language: 'en', genres: ['Crime', 'Thriller', 'Drama'], rating: 8.2, runtime: 122,
    director: 'Тодд Филлипс',
    overview: [
      'Неудачливый комик Артур Флек постепенно погружается в безумие.',
      'Так рождается один из самых знаменитых злодеев Готэма.',
    ],
  },
];

export default movies;
