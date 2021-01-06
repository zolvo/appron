import React from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "./auth/LogoutButton";

const Home = ({ setAuthenticated, authenticated }) => {
  return authenticated ? <div></div> : <h1>this is home</h1>;
};

export default Home;
