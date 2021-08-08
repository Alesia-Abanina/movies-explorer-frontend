import React from "react";
import { Route, Redirect } from "react-router-dom";
import Preloader from "../Preloader/Preloader";

const ProtectedRoute = ({ component: Component, ...props }) => {
  const { isInitializing, loggedIn } = props;

  return (
    <>
      {isInitializing ? (
        <Preloader />
      ) : (
        <Route>
          {loggedIn ? <Component {...props} /> : <Redirect to="./signin" />}
        </Route>
      )}
    </>
  );
};

export default ProtectedRoute;
