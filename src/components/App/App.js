import React from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../../utils/ProtectedRoute';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import NotFound from '../NotFound/NotFound';
import api from '../../utils/MainApi'
import moviesApi from '../../utils/MoviesApi';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import * as moviesUtils from '../../utils/MoviesUtils'


function App() {
  const history = useHistory();
  const [searchCriteria, setSearchCriteria] = React.useState({
    keyword: '',
    isShort: false,
  });

  const [savedSearchCriteria, setSavedSearchCriteria] = React.useState({
    keyword: '',
    isShort: false,
  });

  const [allMovies, setAllMovies] = React.useState([]);
  const [filteredMovies, setFilteredMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [filteredSavedMovies, setFilteredSavedMovies] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({
    name: '',
    email: '',
  });
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = React.useState(false);
  const [isInfoTooltipSuccessful, setIsInfoTooltipSuccessful] = React.useState(false);
  const [infoTooltipMessage, setInfoTooltipMessage] = React.useState(false);

  const showMessage = (message, success) => {
    setInfoTooltipMessage(message);
    setIsInfoTooltipSuccessful(success);
    setIsInfoTooltipOpen(true);
  };

  const closePopup = () => {
    setIsInfoTooltipOpen(false);
  }

  React.useEffect(() => {
    const onLogin = async (user) => {
      setLoggedIn(true);
      setCurrentUser({ email: user.email, name: user.name });
      try {
        const movies = await api.getMovies();
        setSavedMovies(movies);
        setFilteredSavedMovies(movies);
      } catch (err) {
        showMessage(err.message, false);
        console.log(err);
      }
    }

    const tokenCheck = async () => {
      try {
        const jwt = localStorage.getItem('jwt');
        if (jwt) {
          const user = await api.checkToken(jwt);
          if (user) {
            api.setToken(jwt);
            onLogin(user);
          }
        }
      } catch (err) {
        showMessage(err.message, false);
        console.log(err);
      }
    }
    tokenCheck();
  }, [history]);

  React.useEffect(() => {
    if (loggedIn) {
      const setUser = async () => {
        try {
          const user = await api.getUserInfo();
          setCurrentUser({ email: user.email, name: user.name });
        } catch (err) {
          showMessage(err.message, false);
          console.log(err);
        }
      }
      setUser();
    }
  }, [loggedIn]);

  const handleSearch = async (keyword, isShort) => {
    setIsLoading(true);
    let converted = allMovies;
    try {
      if (allMovies.length === 0) {
        const movies = await moviesApi.getMovies();
        converted = moviesUtils.convertMovies(movies, savedMovies);
        setAllMovies(converted);
      }
    } catch (err) {
      showMessage(err.message, false);
      console.log(err);
    }
    setIsLoading(false);

    setSearchCriteria({keyword, isShort});
    const filtered = moviesUtils.searchMovies(converted, keyword, isShort);
    setFilteredMovies(filtered);
  }

  const handleSavedSearch = async (keyword, isShort) => {
    setSavedSearchCriteria({keyword, isShort})
    const filtered = moviesUtils.searchMovies(savedMovies, keyword, isShort);
    setFilteredSavedMovies(filtered);
  }

  const handleMovieSave = async (movie) => {
    try {
      const savedMovie = await api.createMovie(movie);
      movie.saved = true;
      movie._id = savedMovie._id;
      setSavedMovies([movie, ...savedMovies]);
    } catch (err) {
      showMessage(err.message, false);
      console.log(err);
    }
  }

  const handleDelete = async (movie) => {
    try {
      const found = savedMovies.find(m => m.movieId === movie.movieId);
      await api.deleteMovie(found._id);
      found.saved = false;
      setSavedMovies(savedMovies.filter((m) => m._id !== movie._id));
    } catch (err) {
      showMessage(err.message, false);
      console.log(err);
    }
  }

  const handleRegister = async ({ name, email, password }) => {
    try {
      const user = await api.register(name, email, password);
      showMessage("Регистрация прошла успешно.", true);
      if (user) {
        handleLogin({email, password});
      }
    } catch (err) {
      showMessage(err.message, false);
      console.log(err);
    }
  };

  const handleLogin = async ({email, password}) => {
    try {
      handleLogout();
      const data = await api.login(email, password);
      if (data.token) {
        localStorage.setItem('jwt', data.token);
        api.setToken(data.token);
      }
      setLoggedIn(true);
      history.push('/movies');
    } catch (err) {
      showMessage(err.message, false);
      console.log(err);
    }
  };

  function handleLogout() {
    setLoggedIn(false);
    setCurrentUser({ name: '', email: '' });
    localStorage.removeItem('jwt');
  }

  const handleUpdateProfile = async (info) => {
    try {
      const user = await api.setUserInfo(info);
      setCurrentUser(user);
      showMessage("Информация о пользователе успешно изменена.", true);
    } catch (err) {
      showMessage(err.message, false);
      console.log(err);
    }
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Switch>
        <Route path="/" exact>
          <Main loggedIn={loggedIn} />
        </Route>

        <ProtectedRoute path="/movies"
          component={Movies}
          searchCriteria={searchCriteria}
          loggedIn={loggedIn}
          isLoading={isLoading}
          movies={filteredMovies}
          onSearch={handleSearch}
          onMovieSave={handleMovieSave}
          onDelete={handleDelete}
        />

        <ProtectedRoute path="/saved-movies"
          component={SavedMovies}
          searchCriteria={savedSearchCriteria}
          loggedIn={loggedIn}
          isLoading={isLoading}
          movies={filteredSavedMovies}
          onSearch={handleSavedSearch}
          onDelete={handleDelete}
        />

        <ProtectedRoute path="/profile"
          component={Profile}
          loggedIn={loggedIn}
          onUpdateProfile={handleUpdateProfile}
          onLogout={handleLogout}
        />

        <Route path="/signup">
          <Register onRegister={handleRegister} />
        </Route>

        <Route path="/signin">
          <Login onLogin={handleLogin} />
        </Route>

        <Route path="*" component={NotFound} />
      </Switch>

      <InfoTooltip
        isOpen={isInfoTooltipOpen}
        success={isInfoTooltipSuccessful}
        message={infoTooltipMessage}
        onClose={closePopup} />

    </CurrentUserContext.Provider>
  );
}

export default App;
