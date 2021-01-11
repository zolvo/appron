import React, { useState, useEffect } from "react";
import { NavLink, Redirect, useHistory } from "react-router-dom";
import { signUp } from "../../services/auth";
import styled from "styled-components";

const SignUpForm = ({ authenticated, setAuthenticated }) => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  // const [address, setAddress] = useState("");
  // const [city, setCity] = useState("");
  // const [state, setState] = useState("");
  // const [zipcode, setZipcode] = useState("");
  // const [phone, setPhone] = useState("");
  // const [isChef, setIsChef] = useState(true);
  const history = useHistory();

  useEffect(() => {
    document.title = "Appron: SignUp";
  });

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const user = await signUp(
        username,
        email,
        password,
        // address,
        // city,
        // state,
        // zipcode,
        // phone,
        // isChef
      );

      if (!user.errors) {
        setAuthenticated(true);
        // if (isChef) {
        //   history.push("/chefform");
        // }
      } else {
        setErrors(user.errors);
      }
    }
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
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
          </div>
          <div>
            <input
              type="text"
              name="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <div>
            <input
              type="password"
              name="repeat_password"
              placeholder="Repeat password"
              onChange={(e) => setRepeatPassword(e.target.value)}
              value={repeatPassword}
              required={true}
            />
          </div>
          {/* <div>
            <input
              type="text"
              name="address"
              placeholder="Address"
              onChange={(e) => setAddress(e.target.value)}
              value={address}
              required={true}
            />
          </div>
          <div>
            <input
              type="text"
              name="city"
              placeholder="City"
              onChange={(e) => setCity(e.target.value)}
              value={city}
              required={true}
            />
          </div>
          <div>
            <input
              type="text"
              name="state"
              placeholder="State"
              onChange={(e) => setState(e.target.value)}
              value={state}
              required={true}
            />
          </div>
          <div>
            <input
              type="text"
              name="zipcode"
              placeholder="Zip Code"
              onChange={(e) => setZipcode(e.target.value)}
              value={zipcode}
              required={true}
            />
          </div>
          <div>
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
              required={true}
            />
          </div> */}
          {/* <AChef>
            <input
              type="checkbox"
              onChange={(e) => setIsChef(e.target.checked)}
              checked={isChef}
              className="isChef"
            />
            <span>ARE YOU A CHEF?</span>
          </AChef> */}
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
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding-bottom: 3em;
  `;

  const SignupHeader = styled.div`
  margin-top: 5em;
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

    // transition: all 0.2x ease-in;
    // &:hover {
    //   transform: translateY(-3px);
    // };

  }

  button{
    // background-color: #EF9D55;
    background-color: #ffbc42;
    font-weight: 700;
    border: none;
    width: 18em;
    height: 3em;
    cursor: pointer;
    border-radius: 2em;
    box-shadow:0px 14px 9px -15px rgba(0,0,0,0.25);
    outline:none;
    border:none;

    transition: all 0.2x ease-in;
    &:hover{
    transform: translateY(-3px);
  }
`;

const AChef = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  span {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    // margin-left: 2em;
    font-family: dosis;
    font-size: 16px;
    color: grey;
    // letter-spacing: 0.02em;
  }

  .isChef {
    width: 1em;
    margin-right: 1em;
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
    box-sizing: border-box;
    margin-bottom: 5em;
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
