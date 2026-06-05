import movies from './movies';

export interface Stat {
  id: number;
  name: string | number;
  min: number;
  max: number;
  avg: number;
  count: number;
}

function group(keyFn: (m: typeof movies[number]) => (string | number)[]): Stat[] {
  const map = new Map<string | number, number[]>();
  movies.forEach((m) => {
    keyFn(m).forEach((k) => {
      if (!map.has(k)) map.set(k, []);
      map.get(k)!.push(m.rating);
    });
  });
  return Array.from(map.entries()).map(([name, ratings], i) => ({
    id: i + 1,
    name,
    min: Math.min(...ratings),
    max: Math.max(...ratings),
    avg: Math.round((ratings.reduce((a, b) => a + b, 0) / ratings.length) * 10) / 10,
    count: ratings.length,
  }));
}

export const byGenre = (): Stat[] => group((m) => m.genres).sort((a, b) => b.avg - a.avg);
export const byLanguage = (): Stat[] => group((m) => [m.language]);
export const byYear = (): Stat[] =>
  group((m) => [m.year]).sort((a, b) => (a.name as number) - (b.name as number));
