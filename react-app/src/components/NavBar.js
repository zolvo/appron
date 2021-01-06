import React from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "./auth/LogoutButton";
import styled from "styled-components";

const NavBar = ({ setAuthenticated }) => {
  return (
    <Container>
      <SubContainer1>
        <SubContainer2>
          <NavLink to="/" exact={true} activeClassName="active">
            Home
          </NavLink>
        </SubContainer2>
        <li>
          <NavLink to="/users" exact={true} activeClassName="active">
            Users
          </NavLink>
        </li>
        <li>
          <NavLink to="/chefs" exact={true} activeClassName="active">
            Chefs
          </NavLink>
        </li>
        <SubContainer3>
          <li>
            <NavLink to="/login" exact={true} activeClassName="active">
              Login
            </NavLink>
          </li>
          <li>
            <NavLink to="/sign-up" exact={true} activeClassName="active">
              <div>Sign Up</div>
            </NavLink>
          </li>
          <li>
            <LogoutButton setAuthenticated={setAuthenticated} />
          </li>
        </SubContainer3>
      </SubContainer1>
    </Container>
  );
};

const Container = styled.div`
  font-family: "Monserrat";
  min-width: 200px;
  backdrop-filter: blur(5px);
  // background-color: transparent;
  background-color: rgba(255, 255, 255, 0.7);
  // background: #292721;
  width: 100%;
  height: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  text-decoration: none;
  list-style: none;
  position: fixed;
  // padding-top: 50px;
  opacity: 0.6;
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
`;

const SubContainer2 = styled.div`
width: 35%;
font-family: 'Montserrat';
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: row;

div {
  margin-right: 3em
  box-sizing: border-box;
};

NavLink: {
  color: white;
}
`;

const SubContainer3 = styled.div`
  width: 15%;
  font-family: "Montserrat";
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  div {
    margin-right: 2em;
    box-sizing: border-box;
  }
`;

export default NavBar;
