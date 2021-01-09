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
      <h1>Chef List: </h1>
      <ul>{chefComponents}</ul>
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

export default ChefsList;
