import React from "react";
import { useHistory } from "react-router-dom";
import { logout } from "../../services/auth";
import styled from "styled-components";

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
        {" "}
        <i className="fas fa-sign-out-alt"></i>
        Logout
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

export default LogoutButton;
