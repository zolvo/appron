import React, { useState } from "react";
import { NavLink, Redirect } from "react-router-dom";
import { login } from "../../services/auth";
import DemoButton from "./DemoButton";
import styled from "styled-components";

const LoginForm = ({ authenticated, setAuthenticated, setUser }) => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async (e) => {
    e.preventDefault();
    const user = await login(email, password);
    if (!user.errors) {
      setAuthenticated(true);
      setUser(user);
    } else {
      setErrors(user.errors);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <Container>
      <LoginHeader>LOGIN</LoginHeader>
      <LoginFormWrapper>
        <form onSubmit={onLogin}>
          <Error>
            <div>
              {errors.map((error) => (
                <div>{error}</div>
              ))}
            </div>
          </Error>
          <div>
            <input
              name="email"
              type="text"
              placeholder="Email"
              value={email}
              onChange={updateEmail}
            />
          </div>
          <div>
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={updatePassword}
            />
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
          <div>
            <DemoButton
              setAuthenticated={setAuthenticated}
              authenticate={authenticated}
            />
          </div>
          <Footer>
            <div>
              don't have any account?
              <NavLink exact to="/sign-up">
                <span>Signup</span>
              </NavLink>
            </div>
            <p>@2021 created by: APPRON.</p>
          </Footer>
        </form>
      </LoginFormWrapper>
    </Container>
  );
};

const Container = styled.div`
  font-family: montserrat;
  font-size: 16px;
  color: white;
  background-color: #d81159;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  `;

  const LoginHeader = styled.div`
  margin-top: 5em;
  height: 4em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  `;

  const LoginFormWrapper = styled.div`
  background-color: #f4f3f2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 500px;
  height: 550px;

  border-radius: 25px;

  div {
    margin-bottom:30px;
    text-decoration: none;
    // box-shadow:0px 14px 9px -15px rgba(0,0,0,0.25);
  }

  input {
    color: #292721;
    border: none;
    outline: none;
    width: 18em;
    height: 3em;
    padding-left: 1em;
    border-radius: 1em;
    box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);

    transition: all 0.2x ease-in;
    &:hover {
    transform: translateY(-3px);
    };

  }

  button{
    // background-color: #EF9D55;
    background-color: #ffbc42;
    font-weight: 700;
    border: none;
    outline: none;
    width: 18em;
    height: 3em;
    cursor:pointer;
    border-radius: 2em;
    box-shadow:0px 14px 9px -15px rgba(0,0,0,0.25);

    transition: all 0.2x ease-in;
    &:hover{
    transform: translateY(-3px);
  }
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    margin-top: 30px;
    color: #292721;
  }

  span {
    margin-left: 5px;
    font-weight: 700;
    color: #ef9d55;
  }

  p {
    font-size: 10px;
    color: #292721;
  }
`;

const Error = styled.div`
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: montserrat;
    font-size: 14px;
    // letter-spacing: 0.5px;
    font-weight: 600;
    color: red;
    margin: 0;
  }
`;

export default LoginForm;
