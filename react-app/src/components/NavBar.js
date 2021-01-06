import React from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "./auth/LogoutButton";
import styled from "styled-components";
import logo from "../image/logo00.png";

const NavBar = ({ setAuthenticated }) => {
  return (
    <Container>
      <SubContainer1>
        <SubContainer2>
          <SubContainer2a>
            <a href="/">
              <img src={logo} alt={logo} />
            </a>
          </SubContainer2a>
          <SubContainer2b>
            <div>
              <NavLink to="/" exact={true} activeClassName="active">
                <div>Home</div>
              </NavLink>
            </div>
            <NavLink to="/users" exact={true} activeClassName="active">
              <div>Users</div>
            </NavLink>
            <NavLink to="/chefs" exact={true} activeClassName="active">
              <div>Chefs</div>
            </NavLink>
          </SubContainer2b>
        </SubContainer2>
        <SubContainer3>
          <NavLink to="/login" exact={true} activeClassName="active">
            <div>Login</div>
          </NavLink>
          <NavLink to="/sign-up" exact={true} activeClassName="active">
            <div>Sign Up</div>
          </NavLink>
          <LogoutButton setAuthenticated={setAuthenticated} />
        </SubContainer3>
      </SubContainer1>
    </Container>
  );
};

const Container = styled.div`
  font-family: "Monserrat";
  min-width: 200px;
  background-color: transparent;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  text-decoration: none;
  list-style: none;
  position: fixed;
  border: 1px solid yellow;
`;

const MiniSearch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-left: 5px;
  padding-left: 5px;
  box-sizing: border-box;
  height: 30px;
  border-radius: 20px;

  border: 1px solid #ffffff;
  background-color: #fefefe;
  i {
    color: #413f39;
  }
`;

const SearchInput = styled.input`
  margin-left: 5px;
  padding-left: 5px;
  box-sizing: border-box;
  height: 30px;
  border-radius: 20px;
  text-decoration: none;
  border: 3px solid #fefefe;
`;

const SubContainer1 = styled.div`
  width: 60%;
  height: 55px;
  font-family: "Montserrat";
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  border: 1px solid red;
`;

const SubContainer2 = styled.div`
  font-family: "Montserrat";
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 30em;

  border: 1px solid blue;

  img {
    box-sizing: border-box;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    height: 50px;
    width: 50px;
    box-sizing: border-box;
    background: white;
    opacity: 0.8;
    border-radius: 30px;
  }

  div {
    // margin-left: 3em;
    letter-spacing: 0.05em;
    font-weight: 600;
    color: white;
  }
`;

const SubContainer2a = styled.div`
  border: 1px solid white;
`;

const SubContainer2b = styled.div`
  border: 1px solid white;
  display: flex;
  width: 10
  // justify-content: space-between;
`;

const SubContainer3 = styled.div`
  width: 15%;
  font-family: "Montserrat";
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  border: 1px solid yellow;

  div {
    // margin-right: 2em;
    box-sizing: border-box;
  }
`;

export default NavBar;
