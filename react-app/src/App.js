import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import ChefForm from "./components/auth/ChefForm";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import { authenticate } from "./services/auth";
import Home from "./components/Home";
import Main from "./components/Main";
import Nopage from "./components/auth/Nopage";
import Appointment from "./components/Appointment";
import ChefsList from "./components/ChefsList";
import Chef from "./components/Chef";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    document.title = "Appron: Home";
    (async () => {
      const user = await authenticate();
      if (!user.errors) {
        setAuthenticated(true);
        setUser(user);
        console.log("******************* :", user);
      }
      setLoaded(true);
    })();
  }, []);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar
        setAuthenticated={setAuthenticated}
        authenticated={authenticated}
        user={user}
      />
      <Switch>
        <Route path="/login" exact={true}>
          <LoginForm
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
            setUser={setUser}
          />
        </Route>
        <Route path="/sign-up" exact={true}>
          <SignUpForm
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
            setUser={setUser}
          />
        </Route>
        <Route path="/chefform" exact={true}>
          <ChefForm
            authenticated={authenticated}
            setAuthenticated={setAuthenticated}
            user={user}
          />
        </Route>

        <ProtectedRoute
          path="/users"
          exact={true}
          authenticated={authenticated}
        >
          <UsersList />
        </ProtectedRoute>

        <ProtectedRoute
          path="/chefs"
          exact={true}
          authenticated={authenticated}
        >
          <ChefsList />
        </ProtectedRoute>
        <ProtectedRoute
          path="/users/:userId"
          exact={true}
          authenticated={authenticated}
        >
          <User />
        </ProtectedRoute>
        <ProtectedRoute
          path="/chefs/:chefId"
          exact={true}
          authenticated={authenticated}
        >
          <Chef />
        </ProtectedRoute>
        <Route
          path="/chefs/:chefId/appointment"
          exact={true}
          authenticated={authenticated}
        >
          <Appointment />
        </Route>
        <Route path="/" exact={true} authenticated={authenticated}>
          <Home authenticated={authenticated} />
          {authenticated ? <Main /> : ""}
        </Route>
        <Route path="/*" exact={true} authenticated={authenticated}>
          <Nopage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
