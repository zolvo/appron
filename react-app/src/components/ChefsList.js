import React, { useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import styled from "styled-components";
import bg from "../image/bg.jpg";

function ChefsList() {
  const [chefs, setChefs] = useState([]);
  const history = useHistory();

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
      <ChefListWrapper className="animate__animated animate__slideInLeft">
        <div className="inner-element ">
          <Title>Chef List: </Title>
          <ul>{chefComponents}</ul>
          <button className="button" onClick={history.goBack}>
            <div>Go Back</div>
          </button>
        </div>
      </ChefListWrapper>
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
  background-position: 90% top;

  li {
    list-style: none;
    padding-bottom: 1em;
  }

  .list {
    color: black;
    font-family: dosis;
    font-size: 16px;
    font-weight: 600;
    opacity: 0.6;
    letter-spacing: 0.05em;
    text-shadow: rgba(0, 0, 0, 0.5) 0px 5px 15px;
    cursor: pointer;
  }

  .default-component {
    transform-style: preserve-3d;
  }
`;

const ChefListWrapper = styled.div`
  margin-top: 4em;
  box-sizing: border-box;
  // border: 1px solid white;
  background-color: #f4f3f2;
  display: flex;
  flex-direction: column;
  // align-items: center;
  // justify-content: center;
  width: 500px;
  height: 550px;
  border-radius: 25px;
  background-image: linear-gradient(180deg, darkgrey, rgba(255,0,0,0), darkgrey);

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
    cursor: pointer;

    transition: all 0.2x ease-in;
    &:hover{
      transform: translateY(-3px);
    }

    .inner-element {
    transform: translateZ(60px);
  }

`;

const Title = styled.div`
  margin-bottom: 2em;
  padding-top: 2em;
  text-align: center;
  font-family: monserrat;
  // text-transform:uppercase;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 1px;
  color: black;
  opacity: 0.8;
`;

export default ChefsList;
