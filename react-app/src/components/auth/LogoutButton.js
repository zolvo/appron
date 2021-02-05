import React from "react";
import { useHistory } from "react-router-dom";
import { logout } from "../../services/auth";
import styled from "styled-components";
import { FaSignOutAlt } from "react-icons/fa";

const LogoutButton = ({ setAuthenticated, authenticated }) => {
  const history = useHistory();

  const onLogout = async (e) => {
    await logout();
    setAuthenticated(false);
    history.push("/");
    window.location.reload(false);
  };

  return authenticated ? (
    <Container>
      <button className="button" onClick={onLogout}>
        <FaSignOutAlt />
        <span>Logout</span>
      </button>
    </Container>
  ) : (
    ""
  );
};

const Container = styled.div`
  .button {
    cursor: pointer;
    letter-spacing: 0.05em;
    font-weight: 600;
    color: white;
    font-size: 13,5px;
    font-family: montserrat;
    border: none;
    outline: none;
    background-color: transparent;
    color: white;
  }

  :hover {
    text-shadow: rgba(0, 0, 0, 0.75) 0px 5px 15px;
  }
`;

export default LogoutButton;
