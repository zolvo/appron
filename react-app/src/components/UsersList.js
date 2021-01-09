import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/users/");
      const responseData = await response.json();
      setUsers(responseData.users);
    }
    fetchData();
  }, []);

  const userComponents = users.map((user) => {
    return (
      <li key={user.id}>
        <NavLink className="list" to={`/users/${user.id}`}>
          {user.username}
        </NavLink>
      </li>
    );
  });

  return (
    <Container>
      <h1>User List: </h1>
      <ul>{userComponents}</ul>
    </Container>
  );
}

const Container = styled.div`
  background-color: #d81159;
  color: white;

  li {
    list-style: none;
  }

  .list {
    color: white;
  }
  padding-top: 5em;
  min-height: 100vh;
`;

export default UsersList;
