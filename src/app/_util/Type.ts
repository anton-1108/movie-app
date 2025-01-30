export type MovieType = {
  adult: boolean;
  backdrop_path: string;
  original_title: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  actor: string;
  name: string;
  director: string;
};

export type GenreType = {
  id: number;
  name: string;
};

export interface Genre {
  id: number;
  name: string;
}
