import { MOVIE_API_URL } from './constants';

export const convertMovies = (movies) => {
  return movies.map(movie => {
    const h = Math.floor(movie.duration / 60);
    const m = movie.duration % 60;
    return {
      title: movie.nameRU,
      duration: `${h !== 0 ? h + 'ч' : ''} ${m}м`,
      thumbnail: MOVIE_API_URL + movie.image.url
    }
  });
}

export const searchMovies = (movies, keyword, isShort) => {
  return movies.filter(movie =>
    movie.title.toLowerCase().includes(keyword.toLowerCase()));
}