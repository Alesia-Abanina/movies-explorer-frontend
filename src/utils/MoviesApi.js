import { MOVIE_API_URL } from './constants'

class MoviesApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  getBaseUrl() {
    return this._baseUrl;
  }

  getMovies() {
    return fetch(`${this._baseUrl}/beatfilm-movies`, {
      headers: this._headers
    })
      .then((res) => this._processResponse(res));
  }

  _processResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }
}

const api = new MoviesApi({
  baseUrl: MOVIE_API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export default api;
