export const MOVIE_API_URL = 'https://api.nomoreparties.co';

export const validation = {
  name: '^[a-zA-Zа-яА-ЯЁё\\s\\-]+$',
  email: '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$',
};

export const requestErrorMessage =
  "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"