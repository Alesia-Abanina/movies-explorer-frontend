import { MOVIE_API_URL } from './constants';

export const convertMovies = (movies, savedMovies) => {
  let m = new Map(savedMovies.map(item => [item.movieId, item]));

  return movies.map(movie => {
    let res = null;
    if (m.has(movie.id)) {
      res = m.get(movie.id)
      res.saved = true;
      m.delete(movie.id);
    } else {
      res = {
        movieId: movie.id,
        nameRU: movie.nameRU ?? 'n/a',
        nameEN: movie.nameEN ?? 'n/a',
        director: movie.director ?? 'n/a',
        country: movie.country ?? 'n/a',
        year: movie.year ?? 'n/a',
        duration: movie.duration ?? 0,
        description: movie.description ?? 'n/a',
        trailer: movie.trailerLink ?? 'n/a',
        image: MOVIE_API_URL + movie.image.url,
        thumbnail: MOVIE_API_URL + movie.image.formats.thumbnail.url,
        saved: false,
      };
    }

    return res;
  });
}

export const searchMovies = (movies, keyword, isShort) => {
  return movies.filter((movie) => {
    let include = true;
    if (isShort) {
      include = movie.duration <= 40;
    }

    if (include && keyword) {
      include = movie.nameRU.toLowerCase().includes(keyword.toLowerCase());
    }

    return include;
  });
}