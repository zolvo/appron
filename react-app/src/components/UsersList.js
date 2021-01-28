import React, { useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import styled from "styled-components";
import bg from "../image/bg.jpg";

function UsersList() {
  const [users, setUsers] = useState([]);
  const history = useHistory();

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
        <button className="button" onClick={history.goBack}>
          <div>Go Back</div>
        </button>
      </UserListWrapper>
    </Container>
  );
}

const Container = styled.div`
  // background-color: #d81159;
  color: gray;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  min-height: 100vh;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: center;
  background-position: 40% bottom;

  li {
    list-style: none;
    padding-bottom: 1em;
  }

  .list {
    color: black;
    font-family: monserrat;
    font-size: 15px;
    letter-spacing: 0.05em;
    text-shadow: rgba(0, 0, 0, 0.5) 0px 5px 15px;
  }
`;

const UserListWrapper = styled.div`
  margin-top: 4em;
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
    }


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
