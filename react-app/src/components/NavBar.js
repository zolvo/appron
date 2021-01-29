import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import LogoutButton from "./auth/LogoutButton";
import styled from "styled-components";
import logo01 from "../image/logo01.png";
import appronwhite from "../image/appronwhite.png";
import { FaSearch, FaUserFriends, FaUserCircle } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = ({ setAuthenticated, authenticated, user }) => {
  const [home, setHome] = useState("");
  const location = useLocation();
  useEffect(() => {
    const home = location.pathname;
    setHome(home);
    // console.log(home);
  }, [location]);
  return (
    <Container>
      <SubContainer1>
        <SubContainer2>
          <SubContainer2a>
            {home === "/" ? (
              <Link
                to="top"
                spy={true}
                smooth={true}
                duration={800}
                className="link"
              >
                <img className="img1" src={logo01} alt={logo01} />
                <img className="img2" src={appronwhite} alt={appronwhite} />
              </Link>
            ) : (
              <NavLink to="/">
                <img className="img1" src={logo01} alt={logo01} />
                <img className="img2" src={appronwhite} alt={appronwhite} />
              </NavLink>
            )}
          </SubContainer2a>
          <SubContainer2b>
            <div>
              <NavLink to="/" exact={true} activeClassName="active">
                <div>Home</div>
              </NavLink>
            </div>
            <NavLink to="/chefs" exact={true} activeClassName="active">
              <div>Chefs</div>
            </NavLink>
            {home === "/" ? (
              <Link
                to="about"
                spy={true}
                smooth={true}
                duration={800}
                className="link"
              >
                <div>About</div>
              </Link>
            ) : (
              <NavLink to="/">
                <div>About</div>
              </NavLink>
            )}
          </SubContainer2b>
        </SubContainer2>
        <MiniSearch>
          <FaSearch />
          <SearchInput
            type="text"
            placeholder="Find: chef, menu, food"
          ></SearchInput>
        </MiniSearch>
        <SubContainer3>
          {authenticated ? (
            ""
          ) : (
            <NavLink to="/login" exact={true} activeClassName="active">
              <div>Login</div>
            </NavLink>
          )}
          {authenticated ? (
            ""
          ) : (
            <NavLink to="/sign-up" exact={true} activeClassName="active">
              <div>Sign Up</div>
            </NavLink>
          )}
          {authenticated ? (
            // <NavLink to="/users" exact={true} activeClassName="active">
            <UserDropdown>
              {/* <i className="far fa-user-circle fa-2x" /> */}
              <FaUserCircle size="30" />
              <div className="dropdown-content">
                <li>
                  <NavLink
                    to={`/users/${user.id}`}
                    exact={true}
                    activeClassName="active"
                  >
                    <button className="button">
                      <i className="fas fa-house-user" />
                      <span>Profile</span>
                    </button>
                  </NavLink>
                </li>
                <li>
                  <NavLink to={`/users`} exact={true} activeClassName="active">
                    <button className="button">
                      <FaUserFriends />
                      Users
                    </button>
                  </NavLink>
                </li>
                <li>
                  <LogoutButton
                    setAuthenticated={setAuthenticated}
                    authenticated={authenticated}
                  />
                </li>
              </div>
            </UserDropdown>
          ) : (
            // </NavLink>
            ""
          )}
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
  z-index: 5;
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
  width: 55em;
  height: 55px;
  font-family: "Montserrat";
  display: flex;

  // justify-content: space-between;
  align-items: center;
  // flex-direction: row;

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

  .link {
    cursor: pointer;
  }
`;

const SubContainer2b = styled.div`
  // border: 1px solid white;
  display: flex;
  justify-content: space-evenly;
  width: 15em;

  .link {
    cursor: pointer;
  }
`;

const SubContainer3 = styled.div`
  box-sizing: border-box;
  margin-left: 14px;
  width: 8em;
  font-family: "Montserrat";
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: row;

  // border: 1px solid yellow;

  div {
    text-align: center;
    width: 5em;
    letter-spacing: 0.05em;
    font-weight: 600;
    color: white;
  }
`;

const UserDropdown = styled.div`
  display: flex;
  box-sizing: border-box;
  // width: 23em;
  justify-content: space-evently;

  .dropdown-content {
    margin-left: 2.5em;
    display: none;
    list-style: none;
    position: absolute;
    min-width: 16px;
    z-index: 1;
  }

  li {
    display: flex;
    justify-items: flex-start;
    font-family: dosis;
    font-size: 16px;
    color: white;
  }

  :hover .dropdown-content {
    display: block;
    text-shadow: rgba(0, 0, 0, 0.75) 0px 5px 15px;
    color: yellow;
  }

  :hover {
    // color: #ffbc42;
    text-shadow: rgba(0, 0, 0, 0.75) 0px 5px 15px;
    // color: blue;
  }

  .button {
    // transition: all 3s ease;
    cursor: pointer;
    letter-spacing: 0.05em;
    // font-weight: 600;
    color: white;
    font-size: 17px;
    font-family: dosis;
    border: none;
    outline: none;
    background-color: transparent;
    color: white;
  }
`;

export default NavBar;
