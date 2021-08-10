export const MOVIE_API_URL = 'https://api.nomoreparties.co';

export const SHORT_MOVIE_DURATION = 40;

export const moviesList = {
  small: {
    cards: 5,
    more: 2,
  },
  medium: {
    cards: 8,
    more: 2,
  },
  large: {
    cards: 12,
    more: 3,
  },
};

export const validation = {
  name: '^[a-zA-Zа-яА-ЯЁё\\s\\-]+$',
  email: '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$',
};

export const requestErrorMessage =
  "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"