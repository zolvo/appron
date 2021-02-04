import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import bg from "../image/bg.jpg";
import Tilt from "react-parallax-tilt";

function User() {
  const [user, setUser] = useState({});
  // Notice we use useParams here instead of getting the params
  // From props.
  const { userId } = useParams();
  const history = useHistory();

  useEffect(() => {
    if (!userId) {
      return;
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      const user = await response.json();
      setUser(user);
    })();
  }, [userId]);

  if (!user) {
    return null;
  }

  return (
    <Container>
      <Tilt
        tiltReverse={true}
        glareEnable={true}
        glareMaxOpacity={0.8}
        perspective={2000}
        transitionSpeed={3000}
        className="default-component"
      >
        <UserWrapper className="animate__animated animate__zoomInLeft">
          <Title>User Profile: </Title>
          <ul>
            <li>
              <strong>Username:</strong> {user.username}
            </li>
            <li>
              <strong>Email:</strong> {user.email}
            </li>
            <li>
              <strong>Address:</strong> {user.address}
            </li>
            <li>
              <strong>City:</strong> {user.city}
            </li>
            <li>
              <strong>State:</strong> {user.state}
            </li>
            <li>
              <strong>ZipCode:</strong> {user.zipcode}
            </li>
            <li>
              <strong>Phone:</strong> {user.phone}
            </li>
          </ul>
          <GoBack>
            <button className="button" onClick={history.goBack}>
              <div>USER</div>
            </button>
          </GoBack>
        </UserWrapper>
      </Tilt>
    </Container>
  );
}

const Container = styled.div`
  // background-color: #d81159;
  color: grey;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 87vh;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: center;
  background-position: 80% bottom;

  li {
    color: black;
    font-family: dosis;
    font-size: 16px;
    // font-weight: 600;
    opacity: 0.8;
    padding-bottom: 1em;
    letter-spacing: 0.05em;
    list-style: none;
    text-shadow: rgba(0, 0, 0, 0.5) 0px 5px 15px;
  }

  .default-component {
    transform-style: preserve-3d;
  }
`;

const UserWrapper = styled.div`
  margin-top: 7em;
  box-sizing: border-box;
  border: 1px solid white;
  background-color: #f4f3f2;
  display: flex;
  flex-direction: column;
  // align-items: center;
  // justify-content: center;
  width: 500px;
  height: 550px;
  border-radius: 25px;
  background-image: linear-gradient(
    180deg,
    darkgrey,
    rgba(255, 0, 0, 0),
    darkgrey
  );

  .inner-element {
    transform: translateZ(150px);
  }
`;

const Title = styled.div`
  margin-bottom: 2em;
  padding-top: 2em;
  text-align: center;
  font-family: montserrat;
  text-transform:uppercase;
  font-size: 16px;
  font-weight: 900;
  letter-spacing: 1px;
  color: black;
  opacity: 0.8;
`;

const GoBack = styled.div`
  button{
    // background-color: #EF9D55;
    // margin-left: 14em;
    margin-left: 30%;
    margin-top: 8em;
    background-color: #ffbc42;
    font-weight: 700;
    border: none;
    outline: none;
    width: 15em;
    height: 2.5em;
    border-radius: 2em;
    box-shadow:0px 14px 9px -15px rgba(0,0,0,0.25);
    cursor:pointer;

    transition: all 0.2x ease-in;
    &:hover{
      transform: translateY(-3px);
    }`;

export default User;
