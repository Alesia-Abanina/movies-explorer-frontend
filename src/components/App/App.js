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

function App() {
  const history = useHistory();
  const [loggedIn, setLoggedIn] = React.useState(false);

  const handleRegister = ({ name, email, password }) => {
    api.register(name, email, password)
      .then(() => {
        //setIsAuthSuccessful(true);
        history.push('/signin');
      })
      .catch(err => {
        //setIsAuthSuccessful(false);
        console.log(err);
      });
    //.finally(() => setIsInfoTooltipOpen(true));
  };

  const handleLogin = ({ email, password }) => {
    api.login(email, password)
      .then((data) => {
        if (data.token) {
          localStorage.setItem('jwt', data.token);
          api.setToken(data.token);
        }
        setLoggedIn(true);
        //setEmail(email);
        history.push('/movies');
      })
      .catch(err => {
        //setIsAuthSuccessful(false);
        //setIsInfoTooltipOpen(true);
        console.log(err);
      });
  };

  return (
    <CurrentUserContext.Provider>
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>

        <ProtectedRoute path="/movies" component={Movies} loggedIn={loggedIn} />

        <ProtectedRoute path="/saved-movies" component={SavedMovies} loggedIn={loggedIn} />

        <ProtectedRoute path="/profile" component={Profile} loggedIn={loggedIn} />

        <Route path="/signup">
          <Register onRegister={handleRegister} />
        </Route>

        <Route path="/signin">
          <Login onLogin={handleLogin} />
        </Route>

        <Route path="*" component={NotFound} />
      </Switch>
    </CurrentUserContext.Provider>
  );
}

export default App;
