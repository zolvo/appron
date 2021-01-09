import React from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "./auth/LogoutButton";
import styled from "styled-components";
import logo from "../image/logo01.png";
import appronwhite from "../image/appronwhite.png";

const search = async (e) => {
  e.preventDefault();
};

const NavBar = ({ setAuthenticated }) => {
  return (
    <Container>
      <SubContainer1>
        <SubContainer2>
          <SubContainer2a>
            <a href="/">
              <img className="img1" src={logo} alt={logo} />
              <img className="img2" src={appronwhite} alt={appronwhite} />
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
        <MiniSearch>
          <i className="fas fa-search"></i>
          <SearchInput
            type="text"
            placeholder="Find: chef, menu, food"
          ></SearchInput>
        </MiniSearch>
        <SubContainer3>
          <NavLink to="/login" exact={true} activeClassName="active">
            <div>Login</div>
          </NavLink>
          <NavLink to="/signup" exact={true} activeClassName="active">
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
  // min-width: 200px;
  background-color: transparent;
  min-width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  text-decoration: none;
  // list-style: none;
  position: fixed;
  // border: 1px solid yellow;
  z-index: 1;
`;

const MiniSearch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
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
  border: none;
  outline: none;
`;

const SubContainer1 = styled.div`
  width: 65%;
  height: 55px;
  font-family: "Montserrat";
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  // border: 1px solid red;
`;

const SubContainer2 = styled.div`
  font-family: "Montserrat";
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 30em;

  // border: 1px solid blue;

  .img1 {
    box-sizing: border-box;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    height: 50px;
    box-sizing: border-box;
    border-radius: 30px;
  }

  .img2 {
    box-sizing: border-box;
    height: 40px;
    width: 150px;
    box-sizing: border-box;
  }

  div {
    letter-spacing: 0.05em;
    font-weight: 600;
    color: white;
  }
`;

const SubContainer2a = styled.div`
  display: flex;
  flex-direction: rows;
  justify-content: center;
  align-content: center;
  box-sizing: border-box;
  width: 20em;
  // border: 1px solid white;
`;

const SubContainer2b = styled.div`
  // border: 1px solid white;
  display: flex;
  justify-content: space-evenly;
  width: 15em;
`;

const SubContainer3 = styled.div`
  box-sizing: border-box;
  margin-left: 10px;
  width: 20em;
  font-family: "Montserrat";
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;

  // border: 1px solid yellow;

  div {
    width: 5em;
    letter-spacing: 0.05em;
    font-weight: 600;
    color: white;
  }
`;

export default NavBar;
