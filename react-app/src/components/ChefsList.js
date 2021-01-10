import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

function ChefsList() {
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/chefs/");
      const responseData = await response.json();
      setChefs(responseData.chefs);
    }
    fetchData();
  }, []);

  const chefComponents = chefs.map((chef) => {
    return (
      <li key={chef.id}>
        <NavLink className="list" to={`/chefs/${chef.id}`}>
          {chef.user.username}
        </NavLink>
      </li>
    );
  });

  return (
    <Container>
      <ChefListWrapper>

      <Title>Chef List: </Title>
      <ul>{chefComponents}</ul>
      </ChefListWrapper>
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
    text-shadow: rgba(0, 0, 0, 0.5) 0px 5px 15px;
  }
  `;

  const ChefListWrapper = styled.div`
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


export default ChefsList;
