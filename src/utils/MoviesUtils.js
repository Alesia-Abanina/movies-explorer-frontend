import { MOVIE_API_URL, SHORT_MOVIE_DURATION } from './constants';

const isNullOrWhitespace = (input) => {
  return !input || !input.trim();
}

const getStringOrDefault = (input) => {
  return isNullOrWhitespace(input) ? 'n/a' : input;
}

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
        nameRU: getStringOrDefault(movie.nameRU),
        nameEN: getStringOrDefault(movie.nameEN),
        director: getStringOrDefault(movie.director),
        country: getStringOrDefault(movie.country),
        year: getStringOrDefault(movie.year),
        duration: movie.duration,
        description: getStringOrDefault(movie.description),
        trailer: getStringOrDefault(movie.trailerLink),
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
      include = movie.duration <= SHORT_MOVIE_DURATION;
    }

    if (include && keyword) {
      include = movie.nameRU.toLowerCase().includes(keyword.toLowerCase());
    }

    return include;
  });
}