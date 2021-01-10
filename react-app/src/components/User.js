import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import styled from "styled-components";
import style from "styled-components";
function User() {
  const [user, setUser] = useState({});
  // Notice we use useParams here instead of getting the params
  // From props.
  const { userId } = useParams();

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
      <UserWrapper>
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
        <AllUser>
          <button className="button">
            <NavLink to="/users" exact={true} activeClassName="active">
              <div>View All Users</div>
            </NavLink>
          </button>
        </AllUser>
      </UserWrapper>
    </Container>
  );
}

const Container = styled.div`
  background-color: #d81159;
  color: white;
  // padding-top: 8em;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;

  li {
    font-family: monserrat;
    font-size: 15px;
    padding-bottom: 1em;
    letter-spacing: 0.05em;
    list-style: none;
    color: white;
    text-shadow: rgba(0, 0, 0, 0.5) 0px 5px 15px;
  }
  `;

  const UserWrapper = styled.div`
  margin-top: 10em;
  box-sizing: border-box;
  border: 1px solid white;
  // background-color: #f4f3f2;
  display: flex;
  flex-direction: column;
  // align-items: center;
  // justify-content: center;
  width: 500px;
  height: 550px;
  border-radius: 25px;
`;

const Title = styled.div`
  margin-bottom: 2em;
  padding-top: 2em;
  text-align: center;
  font-family: monserrat;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 1px;
`;

const AllUser = styled.div`
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

  transition: all 0.2x ease-in;
  &:hover{
  transform: translateY(-3px);
  }`;

export default User;
