class MainApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  setToken(token) {
    this._headers['Authorization'] = `Bearer ${token}`;
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers
    })
      .then((res) => this._processResponse(res));
  }

  setUserInfo({ name, email }) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name, email
      })
    })
      .then((res) => this._processResponse(res));
  }

  getMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      headers: this._headers
    })
      .then((res) => this._processResponse(res));
  }

  createMovie({ movieId, nameRU, nameEN, director, country, year,
    duration, description, trailer, image, thumbnail }) {
    return fetch(`${this._baseUrl}/movies`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        movieId,
        nameRU,
        nameEN,
        director,
        country,
        year,
        duration,
        description,
        trailer,
        image,
        thumbnail
      })
    })
      .then((res) => this._processResponse(res));
  }

  deleteMovie(id) {
    return fetch(`${this._baseUrl}/movies/${id}`, {
      method: 'DELETE',
      headers: this._headers,
    })
      .then((res) => this._processResponse(res));
  }

  register(name, email, password) {
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name, email, password
      })
    })
      .then((res) => this._processResponse(res));
  }

  login(email, password) {
    return fetch(`${this._baseUrl}/signin`, {
      mode: 'cors',
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        email, password
      })
    })
      .then((res) => {
        return this._processResponse(res)
      });
  }

  checkToken(token) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
      }
    })
      .then((res) => this._processResponse(res));
  }

  async _processResponse(res) {
    if (res.ok) {
      return res.json();
    }
    const err = await res.json();
    return Promise.reject(new Error(err.message));
  }
}

const api = new MainApi({
  baseUrl: 'https://api.movies.abanina.nomoredomains.monster',
  //baseUrl: 'http://localhost:3001',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default api;
