import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import ChefForm from "./components/auth/ChefForm";
import NavBar from "./pages/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
import { authenticate } from "./services/auth";
import Home from "./pages/Home";
import Main from "./pages/Main";
import Nopage from "./pages/Nopage";
import Appointment from "./components/Appointment";
import ChefsList from "./components/ChefsList";
import Chef from "./components/Chef";
import Footer from "./components/Footer";
import Search from "./pages/Search";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [user, setUser] = useState({});
  const [chefs, setChefs] = useState("");

  useEffect(() => {
    document.title = "Appron: Home";
    (async () => {
      const user = await authenticate();
      if (!user.errors) {
        setAuthenticated(true);
        setUser(user);
        // console.log("******************* :", user);
      }
      setLoaded(true);
    })();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/chefs/");
      const data = await res.json();
      setChefs(data.chefs);
    }
    fetchData();
  }, []);
  // console.log("******************* :", chef);

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
            // setChef={setChef}
          />
        </Route>
        <ProtectedRoute
          path="/users"
          exact={true}
          authenticated={authenticated}
        >
          <UsersList authenticate={authenticate} />
        </ProtectedRoute>
        <ProtectedRoute
          path="/chefs"
          exact={true}
          authenticated={authenticated}
        >
          <ChefsList authenticate={authenticate} chefs={chefs} />
        </ProtectedRoute>
        <ProtectedRoute
          path="/users/:userId"
          exact={true}
          authenticated={authenticated}
        >
          <User authenticate={authenticate} />
        </ProtectedRoute>
        <ProtectedRoute
          path="/chefs/:chefId"
          exact={true}
          authenticated={authenticated}
        >
          <Chef authenticate={authenticate} user={user} />
        </ProtectedRoute>

        <ProtectedRoute
          path="/chefs/:chefId/appointment"
          authenticated={authenticated}
        >
          <Appointment authenticate={authenticate} user={user} />
        </ProtectedRoute>
        <Route path="/search" exact={true} authenticated={authenticated}>
          <Search authenticated={authenticated} chefs={chefs} />
        </Route>
        <Route path="/" exact={true} authenticated={authenticated}>
          <Home authenticated={authenticated} />
          {authenticated ? <Main chefs={chefs} /> : ""}
        </Route>
        <Route path="/*">
          <Nopage />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
