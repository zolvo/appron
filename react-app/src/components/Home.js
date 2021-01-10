import React from "react";
import { NavLink } from "react-router-dom";
import LogoutButton from "./auth/LogoutButton";
import styled from "styled-components";
import background from "../image/background.webp";
import logo01 from "../image/logo01.png";

const Home = ({ setAuthenticated, authenticated }) => {
  return authenticated ? (
    <div></div>
  ) : (
    <Container>
      <SubContainer1>
        <Title>Appron</Title>
        <Subtitle>Chef on demand</Subtitle>
      </SubContainer1>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #d81159;
`;

const SubContainer1 = styled.div`
  box-sizing: border-box;
  // border: 1px solid red;
  height: 790px;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  .img1 {
    height: 50px;
    box-sizing: border-box;
    border-radius: 30px;
  }
`;

const Title = styled.div`
  // border: 1px solid red;
  box-sizing: border-box;
  // drop-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  // height: 100%;
  margin-top: 1.6em;
  text-align: center;
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  // justify-content: center;
  font-family: dancing script;
  text-shadow: rgba(0, 0, 0, 0.75) 0px 5px 15px;
  color: white;
  font-size: 9em;
  font-weight: bold;
  // border: 1px solid red;
`;

const Subtitle = styled.div`
  dispaly: flex;
  flex-direction: column;
  // align-items: center;
  // justify-content: center;
  text-align: center;
  font-family: dancing script;
  text-shadow: rgba(0, 0, 0, 0.75) 0px 5px 15px;
  color: white;
  font-size: 2em;
  font-weight: bold;
  // background-color: #d81159;
  // border: 1px solid red;
  filter: drop-shadow(0 0 30px #fff);
`;

const SubContainer2 = styled.div`
  box-sizing: border-box;
  // border: 1px solid red;
  height: 30em;
  background-color: #ffbc42;
`;

const SubContainer3 = styled.div`
  box-sizing: border-box;
  // border: 1px solid red;
  height: 40em;
  background-color: brokenwhite;
`;
export default Home;
