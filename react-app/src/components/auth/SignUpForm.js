import React, { useState, useEffect } from "react";
import { NavLink, Redirect } from "react-router-dom";
import { signUp } from "../../services/auth";
import styled from "styled-components";

const SignUpForm = ({ authenticated, setAuthenticated }) => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  useEffect(() => {
    document.title = "Appron: SignUp";
  });

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const user = await signUp(username, email, password);
      if (!user.errors) {
        setAuthenticated(true);
      }
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <Container>
      <SignupHeader>SIGNUP</SignupHeader>
      <SignupFormWrapper>
        <form onSubmit={onSignUp}>
          <Error>
            <div>
              {errors.map((error) => (
                <div>{error}</div>
              ))}
            </div>
          </Error>
          <div>
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={updateUsername}
              value={username}
            ></input>
          </div>
          <div>
            <input
              type="text"
              name="email"
              placeholder="Email"
              onChange={updateEmail}
              value={email}
            ></input>
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={updatePassword}
              value={password}
            ></input>
          </div>
          <div>
            <input
              type="password"
              name="repeat_password"
              placeholder="Repeat password"
              onChange={updateRepeatPassword}
              value={repeatPassword}
              required={true}
            ></input>
          </div>
          <div>
            <button type="submit">Sign Up</button>
          </div>
          <Footer>
            <div>
              have an account?
              <NavLink exact to="/Login">
                <span>Login</span>
              </NavLink>
            </div>
            <p>@2020 created by: APPRON.</p>
          </Footer>
        </form>
      </SignupFormWrapper>
    </Container>
  );
};

const Container = styled.div`
  font-family: monserrat;
  font-size: 20px;
  color: white;
  background-color: #d81159;
  padding-top: 5em;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

const SignupHeader = styled.div`
  height: 4em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SignupFormWrapper = styled.div`
  background-color: #f4f3f2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 500px;
  height: 550px;
  box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
  border-radius: 25px;

  div {
    margin-bottom:30px;
    text-decoration: none;
    box-shadow:0px 14px 9px -15px rgba(0,0,0,0.25);
  }

  input {
    color: #292721;
    border: none;
    outline: none;
    width: 18em;
    height: 3em;
    padding-left: 1em;
    border-radius: 1em;

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
    width: 18em;
    height: 3em;
    border-radius: 2em;
    box-shadow:0px 14px 9px -15px rgba(0,0,0,0.25);
    outline:none;
    border:none;

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
    font-family: monserrat;
    font-size: 15px;
    color: red;
    margin: 0;
  }
`;

export default SignUpForm;
