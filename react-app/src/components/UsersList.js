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
      <UserListWrapper>
        <Title>User List: </Title>
        <ul>{userComponents}</ul>
      </UserListWrapper>
    </Container>
  );
}

const Container = styled.div`
  background-color: #d81159;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  min-height: 100vh;

  li {
    list-style: none;
    padding-bottom: 1em;
  }

  .list {
    font-family: monserrat;
    font-size: 15px;
    letter-spacing: 0.05em;
    color: white;
  }
`;

const UserListWrapper = styled.div`
  margin-top: 4em;
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

export default UsersList;
