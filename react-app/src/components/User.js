import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
      <ul>
        <li>
          <strong>Username</strong> {user.username}
        </li>
        <li>
          <strong>Email</strong> {user.email}
        </li>
        <li>
          <strong>Address</strong> {user.address}
        </li>
        <li>
          <strong>City</strong> {user.city}
        </li>
        <li>
          <strong>State</strong> {user.state}
        </li>
        <li>
          <strong>ZipCode</strong> {user.zipcode}
        </li>
        <li>
          <strong>Phone</strong> {user.phone}
        </li>
      </ul>
    </Container>
  );
}

const Container = styled.div`
  background-color: #d81159;
  color: white;
  padding-top: 5em;
  min-height: 100vh;

  li {
    list-style: none;
  }
`;

export default User;
